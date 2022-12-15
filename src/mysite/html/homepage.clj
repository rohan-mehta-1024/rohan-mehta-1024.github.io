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

   "By day, I'm a senior at Moravian Academy.
    By night, I dabble in " (colored-text-link "research" "https://mlcollective.org/community/")
   " and " (colored-text-link "entrepreneurship"  "https://esolangconf.com")
   ", with a driving interest in " "computer science"
   " and how it intersects physics, mathematics, and biology." 

   [:br]
   [:br]

   "This site showcases " (colored-text-link "cool projects I've worked on" "/projects")
   ", ideas in the mathematics and sciences "
   (colored-text-link "I find beautiful and interesting" "/writings/blog_posts/index.html")
   ", my thoughts, values, and opinions on science, technology,
    and life, and the occasional bit of "
   (colored-text-link "creative writing" "/poetry/index.html")  ".
    You can learn more about (and how to contact) me "
   (colored-text-link "here" "/about_me") "!"])

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
      [:img {:src "images/me8.jpg" :id "picture"}]
      [:span {:id "about-me"} about-me-text]
      [:div {:style "display:flex;justify-content:center;"}
       [:iframe {:id "signup" :src "https://rohanmehta.substack.com/embed" :width "480" :height "100" :style "background:white;margin-top:15px;":frameborder "0" :scrolling "no" :onload "access()"}]
       [:script "function access() {var iframe = document.getElementById('signup');
             var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
             const button = innerDoc.querySelector('.button');
             button.onclick = function(e) {button.style.display = 'none'}}
"]
       ]
      ]
     [:h1 {:id "recents"} "Recent Activity"

      (most-recent posts)]]))
