(ns personal-website.views.homepage-views.page-content-html
  (:require [re-frame.core :as re-frame]
            [personal-website.views.preview-html :refer [preview]]
            [personal-website.content.projects.projects :as projects]
            [personal-website.content.writings.writings :as writings]
            [personal-website.content.readings.readings :as readings]))


(defn color-text [text href]
  [:a {:class "colored-text"
          :href href} text])

(def about-me-text [:p {:style {:line-height "1.5"}}

        ;[:br]
        [:br]
        [:br]

         "Hi, I'm " (color-text "Rohan Mehta" "/who-i-am#subpage-container-1") ", and this is my website!"


        [:br]
        [:br]


        "I am a 10th grader with interests in "
        (color-text "computer science" "/computer-science/all#subpage-container-1")  ", "
        [:span {:style {:color "#DC143C"
                        :font-family "WorkSansBold"}} "physics"] ", "
        (color-text "synthetic biology" "/synthetic-biology/all#subpage-container-1") ", "
        "and [learning] the "
        [:span {:style {:color "#DC143C"
                        :font-family "WorkSansBold"}} "Japanese language"] "."


        [:br]
        [:br]

        "This webpage is an outlet for me
        to share the projects I've worked
        on in these areas, things in mathematics
        and the sciences "
        (color-text "I find to be beautiful and interesting" "/blog-posts/all#subpage-container-1")
        " (and the occasional practical tip), and my "
        (color-text "thoughts, values, and opinions" "b")
        " on science, technology, and life in general."])


(defn most-recent-post [all-posts]
  (let [most-recent (apply max (map :date all-posts))]
    (first (filter (comp (partial = most-recent) :date) all-posts))))

(defn recents []
  (let [mr-project (most-recent-post projects/posts)
        mr-writing (most-recent-post writings/posts)
        mr-reading (most-recent-post readings/posts)]
    [:h1 {:id "recents"} "Recent Activity"
     (preview mr-project true)
     (preview mr-writing true)
     (preview mr-reading true)]))


(defn page-content []
  [:div {:id "content-container" }
   [:div {:id "about-me-container"}
        [:img {:src "/resources/me.jpg" :id "picture"}]
        ;[:div {:id "picture"}]
        [:span {:id "about-me"} about-me-text]]
   (recents)])
