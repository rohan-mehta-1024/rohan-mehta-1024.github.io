(ns mysite.core
  (:require [clj-time.format :as f]
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

      (merge {;:draft "false"
               :css "[]" :js "[]" :series "nil" :updates "[]"})
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
  ;(print metadata)
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


  (let [;;export-fn (if export? #(-> % :draft) (constantly false))
        ;;posts (setval [MAP-VALS export-fn] NONE posts)
        ;a (print posts)
        new-posts (back-into-map (map post/format-post posts))
        about     (generate-about-page)
        homepage  (generate-homepage posts)]
    (->> (select-keys posts (for [[k v] posts :when (= (v :draft) false)] k))
         (generate-preview-pages)
         (back-into-map)
         (merge homepage about new-posts)
         ;;(select [MAP-VALS :draft export-fn])
         (transform [MAP-VALS] #(fn [_] (apply-header-footer %))))))




(defn get-assets! []
  ;(concat)
  (assets/load-assets "public" [#".ttf|css|png|jpg|svg|gif"])
                                        ;(->  (assets/load-assets "public" [#".js"])
                                        ; (optimizations/minify-js-assets nil))
                                        ;(assets/load-bundle "public" "main.js" ["/cljs-out/dev-main.js"])
)




(defn write-cname [out]
  (spit (str out "/CNAME") "https://mehta-rohan.com"))


(defn build-app! []
  (let [assets (get-assets!)]
    (stasis/empty-directory! "docs")
    (optimus.export/save-assets assets "docs")
    (-> (get-content-pages!)
        (get-all-pages! true)
        (stasis/export-pages "docs"))
    (write-cname "docs")


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


