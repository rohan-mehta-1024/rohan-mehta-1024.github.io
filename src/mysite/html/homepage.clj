(ns mysite.html.homepage
  (:require [clj-time.format :as f]
            [com.rpl.specter :refer :all]
            [mysite.html.utils :refer [colored-text-link]]
            [mysite.html.preview :refer [group-content make-preview]]))

(def about-me-text
  [:p {:id "about-me-text"}

   "Hi, I'm Rohan Mehta and this is my website!"

   [:br]
   [:br]

   "By day, I'm a junior at Moravian Academy.
    By night, I dabble in " (colored-text-link "research" "/")
   " and " (colored-text-link "entrepreneurship" "/")
   ", with a driving interest in " "computer science"
   " and how it intersects physics, mathematics, and biology." 

   [:br]
   [:br]

   "This site showcases " (colored-text-link "cool projects I've worked on" "/projects")
   ", ideas in the mathematics and sciences "
   (colored-text-link "I find beautiful and interesting" "/blog_posts/index.html")
   ", my " (colored-text-link "thoughts, values, and opinions" "/")
   " on science, technology, and life, and the occasional bit of "
   (colored-text-link "creative" "/") " " (colored-text-link "writing" "/") ".
    You can learn more about (and how to contact) me "
   (colored-text-link "here" "/about-me") "!"])

(defn most-recent [posts]
  (let [grouped (group-content posts false)]
    (for [[_ posts] grouped]
      (-> posts
          first 
          (make-preview true)))))

(defn html [posts]
  (list
    [:div {:id "content-container"}
     [:div {:id "about-me-container"}
      [:img {:src "images/me.jpg" :id "picture"}]
      [:span {:id "about-me"} about-me-text]]
     [:h1 {:id "recents"} "Recent Activity"
      (most-recent posts)]]))
