
(ns mysite.core
  (:require [clj-time.format :as f]
            [java-time :as jt]
            [me.raynes.fs :as fs]
            [optimus.export] 
            [markdown.core :as md]
            [stasis.core :as stasis]
            [clojure.string :as string]
            [optimus.assets :as assets]
            [optimus.prime :as optimus]
            [hiccup.page :refer [html5]]
            [com.rpl.specter :refer :all]
            [optimus.optimizations :as optimizations]
            [ring.middleware.reload :refer [wrap-reload]]
            [optimus.strategies :refer [serve-live-assets]]
            [commonmark-hiccup.core :refer [markdown->html]] 
            [mysite.html.post :as post]
            [mysite.html.head :as head]
            [mysite.html.about :as about]
            [mysite.html.header :as header]
            [mysite.html.footer :as footer]
            [mysite.html.preview :as preview]
            [mysite.html.homepage :as homepage]
            [clj-rss.core :as rss]
            [mysite.utils :refer [back-into-map parse-date]]))



(defn md->HTML [file-path]
  (string/replace file-path ".md" ".html"))

(defn extract-metadata [file-contents]
  (let [metadata-length (count (re-seq #"[A-Z]+=.*" file-contents))]
    (as-> file-contents $
      (string/split $ #"\n")
      (split-at metadata-length $)
      (transform [LAST] #(string/join "\n" %) $))))


(defn format-metadata [metadata]
  (->> metadata
       (map #(string/split % #"="))
       (transform [ALL FIRST] (comp keyword string/lower-case))
       (transform [ALL LAST] string/trim)
       (back-into-map)
       (merge {:css "[]" :js "[]" :series "nil" :updates "[]"})
       (transform [:draft] (comp read-string string/lower-case))
       (transform [:css] read-string)
       (transform [:js] read-string)))

(defn initial-letter [html]
  (let [inital (str "<span class=initial-letter>" (second html) "</span>")]
    (as-> html $
        (subs $ 2)
        (vector inital $)
        (string/join "" $))))

(defn create-page [metadata html css js]
  (merge-with into
    metadata
    {:html html :css css :js js}))

(defn apply-header-footer [{:keys [title css js html]}]
  (let [head (head/generate-head title css js)]
    (html5 head header/html html footer/html)))

(defn get-content-pages! []
  (let [files (stasis/slurp-directory "resources/public" #".*\.md$")]
    (->> files
         (transform [MAP-VALS] extract-metadata)
         (transform [MAP-VALS FIRST] format-metadata)
         (transform [MAP-VALS LAST] markdown->html)
         (setval [MAP-VALS END] [["/css/post.css"] []])
         (transform [MAP-VALS] (partial apply create-page))
         (transform [MAP-KEYS] md->HTML)
         (sort-by (comp parse-date :date second))
         (reverse)
         (back-into-map))))


(defn generate-preview-pages [posts]
  (let [previews (preview/make-all-previews posts)]
    (for [[url html] previews]
      [url
       {:html  html
        :title (-> url
                  (string/split #"/")
                  second
                   string/capitalize)
        :css   ["/css/preview.css"]
        :js    []}])))

(defn generate-homepage [posts]
  {"/index.html"
   {:html  (homepage/html (select-keys posts (for [[k v] posts :when (= (v :draft) false)] k)))
    :title "Rohan Mehta"
    :css   ["/css/preview.css"
            "/css/homepage.css"]
    :js    []}})

(defn generate-about-page []
  {"/about_me/index.html"
   {:html  about/html
    :title "About Me"
    :css   ["/css/about.css"]
    :js    []}})

(defn get-all-pages! [posts export?]
  (let [new-posts (back-into-map (map post/format-post posts))
        about     (generate-about-page)
        homepage  (generate-homepage posts)]
    (->> (select-keys posts (for [[k v] posts :when (= (v :draft) false)] k))
         (generate-preview-pages)
         (back-into-map)
         (merge homepage about new-posts)
         (transform [MAP-VALS] #(fn [_] (apply-header-footer %))))))

(defn generate-xml [posts]
  (let [channel {:title "Rohan Mehta"
                 :link "https://mehta-rohan.com"
                 :description "Rohan Mehta's personal website, including writings, readings, and projects"
                 :lastBuildDate (jt/instant)}]
  (->> (select-keys posts (for [[k v] posts :when (= (v :draft) false)] k))
       (transform [MAP-VALS] #(select-keys % [:title :tags :date :preview]))
       (reduce-kv (fn [m k v] (assoc m k (assoc v :link k))) {})
       (vals)
       (map #(reduce-kv (fn [m k v] (assoc m k
                                     (if (= k :tags)
                                       (string/split v #",")
                                       v))) {} %))
       (map #(reduce-kv (fn [m k v] (assoc m k
                                           (if (= k :date)
                                             (->> (string/split v #"/")
                                                  ((fn [x] [(last x) (first x) (second x)]))
                                                  (map (fn [x] (Integer. x)))
                                                  (apply jt/offset-date-time)
                                                  jt/instant)
                                             v))) {} %))
       (map #(clojure.set/rename-keys % {:preview :description :date :pubDate :tags :category}))
       (apply rss/channel-xml channel)
       (spit "docs/feed.xml")


       )))

(defn get-assets! []
  (assets/load-assets "public" [#".ttf|css|png|jpg|svg|gif|ico"]))

(defn write-cname [out]
  (spit (str out "/CNAME") "https://mehta-rohan.com"))

(defn build-app! []
  (let [assets (get-assets!)
        content (get-content-pages!)]
    (stasis/empty-directory! "docs")
    (optimus.export/save-assets assets "docs")
    (-> content
        (get-all-pages! true)
        (stasis/export-pages "docs"))
    (write-cname "docs")
    (generate-xml content)

    (fs/delete-dir "docs/cljs-out")
    (fs/copy-dir "target/public/cljs-out" "docs/cljs-out")))

(def app
  (-> (get-content-pages!)
      (get-all-pages! false)
      (stasis/serve-pages)
      (optimus/wrap

     get-assets!
  optimizations/all
     serve-live-assets)
    (wrap-reload)))


