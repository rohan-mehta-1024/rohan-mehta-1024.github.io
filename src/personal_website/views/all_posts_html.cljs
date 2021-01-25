(ns personal-website.views.all-posts-html
  (:require [garden.core :refer [css]]
            [personal-website.views.header-html :refer [header]]
            [personal-website.views.footer-html :refer [footer]]
            [personal-website.views.preview-html :refer [preview]]
            [personal-website.views.search-html :refer [search-html]]
            [personal-website.utils :as utils]
            [personal-website.content.projects.syn-bio.syn-bio :as syn-bio]
            [personal-website.content.projects.comp-sci.comp-sci :as comp-sci]
            [personal-website.content.writings.blog-posts.posts :as blog-posts]
            [personal-website.content.writings.essays.essays :as essays]
            [personal-website.content.writings.short-stories.stories :as stories]
            [personal-website.content.writings.poetry.poems :as poems]
            [personal-website.content.writings.papers.papers :as papers]
            [personal-website.content.readings.books.books :as books]))


(defn generate-and-inject-style-tag []
  "Injects a style tag with the id 'injected-css' into the page's head tag"
  (let [page-head (.-head js/document)
        style-tag (.createElement js/document "title")]
      (.appendChild page-head style-tag)))


(defn update-page-title [input-css]
 "Updates #injected-css with provided argument - if page does not have #injected-css, then
  creates it via call to generate-and-inject-style-tag"
 (let [style-tag-selector "title"
       style-tag-query (.querySelector js/document style-tag-selector)
       style-tag (if (nil? style-tag-query)
                      (generate-and-inject-style-tag)
                      style-tag-query)]
      (aset style-tag "innerHTML" input-css)))

(defn update-page-css [input-css]
 "Updates #injected-css with provided argument - if page does not have #injected-css, then
  creates it via call to generate-and-inject-style-tag"
 (let [style-tag-selector "#injected-css"
       style-tag-query (.querySelector js/document style-tag-selector)
       style-tag (if (nil? style-tag-query)
                      (generate-and-inject-style-tag)
                      style-tag-query)
      previous (.-innerHTML style-tag)]
      (aset style-tag "innerHTML" (str previous input-css))))


(def date-mapping {"1" "Jan"
                   "2" "Feb"
                   "3" "Mar"
                   "4" "Apr"
                   "5" "May"
                   "6" "Jun"
                   "7" "Jul"
                   "8" "Aug"
                   "9" "Sep"
                   "10" "Oct"
                   "11" "Nov"
                   "12" "Dec"})

(defn format-date [date]
  (let [split-date (clojure.string/split date "/")]
    (-> split-date
        (get 0)
        date-mapping
        (str " "  (split-date 1) ", " (split-date 2)  " by Rohan Mehta"))))

(defn get-posts [post-type]
  (cond
    (= post-type :syn-bio) syn-bio/posts
    (= post-type :comp-sci) comp-sci/posts
    (= post-type :blog-posts) blog-posts/posts
    (= post-type :essays)     essays/posts
    (= post-type :stories)    stories/posts
    (= post-type :poems)      poems/posts
    (= post-type :papers)     papers/posts
    (= post-type :books)      books/posts))

(defn list-posts [posts]
  (let [preview-fn (fn [x] (preview x false))]
    (->> (map preview-fn posts)
         (cons {:id "post-container-3"})
         (cons :div)
         (into [])
         (conj [:div {:id "post-container-2"} "Posts"])
         (conj [:div {:id "post-container-1"}]))))


(defn reload []
  (print "testing testing")
  (.write js/document "<script defer src='https://cdn.commento.io/js/commento.js'></script>"))

;function reload_js(src) {
;$('script[src="' + src + '"]').remove();
;console.log("testing testing")
;$('<script defer>').attr('src', src).appendTo('body');
;}


(defn display [route-data]
  (let [posts (-> route-data :data :name get-posts)
        params (-> route-data :path-params)
        prefix (conj [:div] (header) (search-html))
        typeset-fn (fn [] (js/setTimeout (fn [] (.typesetPromise js/MathJax)) 1000))
        call-typeset (typeset-fn)]
    (if (empty? posts)
      [:div (header)
       [:div {:style {:text-align "center"
                      :margin-top "350px"
                      :font-size "28px"
                      :font-family "WorkSansBold"
                      :min-height "100vh"}}
       "This page is currently empty."]
       (footer)]

      (if (-> params :id (= "all"))
        (let [title (as-> route-data $
                        (:data $) (:name $) (name $) (clojure.string/split $ "_")
                        (map clojure.string/capitalize $)
                        (clojure.string/join " " $))
              page-title (update-page-title title)]
          (as-> (vals posts) $
                (list-posts $)
                (conj prefix $)
                (conj $ [:div {:id "commento"}])
                (conj $ (footer))))

        (let [post-title ((posts (utils/unformat-title (params :id))) :title)
              page-title (update-page-title post-title)
              cssify (-> :id params utils/unformat-title posts :css css update-page-css)
              reload (reload)]
          (as-> posts $
                ($ (utils/unformat-title (params :id)))
                [:div {:id "post-content-container"}
                 [:h1 {:id "post-title"} ($ :title)]
                 [:h4 {:id "post-byline"} (format-date ($ :date))]
                 [:div {:id "post-intro-container"}
                  [:blockquote {:id "post-intro-text"} ($ :show)]]
                 [:div {:id "post-content"} ($ :content)]]
                (conj prefix $)
                ;(conj $ [:script {:defer true :src "https://cdn.commento.io/js/commento.js"}])
                (conj $ [:div {:id "disqus_thread"}])
                (conj $ (footer))))))))
