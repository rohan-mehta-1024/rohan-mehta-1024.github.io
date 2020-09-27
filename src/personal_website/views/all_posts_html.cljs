(ns personal-website.views.all-posts-html
  (:require [personal-website.views.header-html :refer [header]]
            [personal-website.views.footer-html :refer [footer]]
            [personal-website.views.preview-html :refer [preview]]
            [personal-website.content.projects.syn-bio.syn-bio :as syn-bio]
            [personal-website.content.projects.comp-sci.comp-sci :as comp-sci]
            [personal-website.content.writings.blog-posts.posts :as blog-posts]
            [personal-website.content.writings.essays.essays :as essays]
            [personal-website.content.writings.short-stories.stories :as stories]
            [personal-website.content.writings.poetry.poems :as poems]
            [personal-website.content.writings.papers.papers :as papers]))

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
        (get 1)
        date-mapping
        (str " " (split-date 2) ", " (split-date 0) " by Rohan Mehta"))))

(defn get-posts [post-type]
  (cond
    (= post-type :syn-bio) syn-bio/posts
    (= post-type :comp-sci) comp-sci/posts

    (= post-type :blog-posts) blog-posts/posts
    (= post-type :essays)     essays/posts
    (= post-type :stories)    stories/posts
    (= post-type :poems)      poems/posts
    (= post-type :papers)     papers/posts))

(defn list-posts [posts]
  (let [preview-fn (fn [x] (preview x false))]
    (->> (map preview-fn posts)
         (cons "Posts")
         (cons {:id "post-container-2"})
         (cons :div)
         (into [])
         (conj [:div {:id "post-container-1"}]))))

(defn display [route-data]
  (let [posts (-> route-data :data :name get-posts)
        params (-> route-data :path-params)
        prefix (conj [:div [:div {:id "top"}]] (header))]
    (if (empty? posts)

      [:div
       (header)
       [:div {:style {:text-align "center"
                     :margin-top "350px"
                     :font-size "28px"
                     :font-family "WorkSansBold"
                     :min-height "100%"}}
       "There is currently no content on this page"]
       (footer)]

      (if (-> params :id (= "all"))
        (as-> posts $
              (list-posts $)
              (conj prefix $)
              (conj $ (footer)))
        (as-> posts $
              ($ (params :id))
              [:div {:id "post-content-container"}
               [:a {:href "#top"}]
               [:h1 {:id "post-title"} ($ :title)]
               [:h4 {:id "post-byline"} (format-date ($ :date))]
               [:div {:id "post-intro-container"}
                [:blockquote {:id "post-intro-text"} ($ :show)]]
               [:div {:id "post-content"} ($ :content)]]
              (conj prefix $)
              (conj $ (footer)))))))