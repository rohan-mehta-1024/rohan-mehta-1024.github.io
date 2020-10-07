(ns personal-website.views.search-html
  (:require ["lunr" :as lunr]
            [re-frame.core :as re-frame]
            [personal-website.content.projects.projects :as projects]
            [personal-website.content.writings.writings :as writings]
            [personal-website.content.readings.readings :as readings]
            [personal-website.views.preview-html :refer [preview]]
            [clojure.set :as set]
            [clojure.string :refer [join]]))


(def posts (flatten [projects/posts
                     writings/posts
                     readings/posts]))

(def post-mapping (into {} (for [post posts]
                        [(post :title) post])))


(defn format-objs [objs]
  (->> objs
       (map #(update-in % [:tags] (partial join ", ")) objs)
       (map clj->js)
       (into [])))


(defn searcher []
  (let [objs (clj->js (format-objs posts))]
    (this-as this
             (.ref this "title")
             (.field this "title")
             (.field this "content")
             (.field this "tags")
             (doseq [obj objs]
               (.add this obj)))))


(defn search [query]
  (let [search-fn (lunr searcher)
        results (.search search-fn query)

        formatted (js->clj results)]
    (for [post formatted]
      (post-mapping (post "ref")))))


(defn search-field []
  [:input {:id "search-view"
           :type "text"
           :placeholder "Search for content..."
           :value @(re-frame/subscribe [:homepage/search-term])
           :on-change #(re-frame/dispatch [:homepage/search-term (-> % .-target .-value)])
           }])

(defn search-results []
  (let [query @(re-frame/subscribe [:homepage/search-term])
        results (search (if (or (= query nil) (= query ""))
                          "12345678987654321" query))]
    [:div {:id "search-results"}
     [:div {:id "search-count"} (str (count results) " Result(s) Found.")]
     (if (not= (count results) 0)
      [:div {:id "results-container"
             :style {:margin-right "10px"}} (map preview results)]
       [:div])]))

(defn search-html []
  [:div {:id "search-container"}
   (search-field)
   (search-results)])
