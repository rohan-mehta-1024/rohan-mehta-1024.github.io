(ns mysite.html.homepage
  (:require [clj-time.format :as f]
            [com.rpl.specter :refer :all]
            [clj-time.format :as f]
            [clojure.string :as string]
            [mysite.html.utils :refer [colored-text-link]]
            [mysite.html.preview :refer [group-content make-preview]]))

(def about-me-text
  [:p {:id "about-me-text"}

   "Hi, I'm Rohan Mehta and this is my website!"

   [:br]
   [:br]

   "By day, I'm a freshman at Caltech.
    By night, I dabble in " (colored-text-link "research" "https://mlcollective.org/community/")
   " and " (colored-text-link "entrepreneurship"  "https://esolangconf.com")
   ", with a driving interest in " "computer science"
   " and how it intersects physics, mathematics, and biology." 

   [:br]
   [:br]

   "This site showcases " (colored-text-link "cool projects I've worked on" "/projects")
   ", " (colored-text-link "ideas in the mathematics and sciences"  "/writings/blog_posts/index.html")
  " I find beautiful and interesting, "
   (colored-text-link "my thoughts and opinions" "/writings/essays/index.html")
" on science, technology,
    and life, and the occasional bit of "
   (colored-text-link "creative writing" "//index.html")  ".
    You can learn more about (and how to contact) me "
   (colored-text-link "here" "/about_me") "!"])

(defn date-sort [posts]
  (let [date-fn (partial f/parse (f/formatters :year-month-day))]
    (sort-by
     #(as-> % $
          (last $)
          ($ :date)
          (string/split $ #"/")
          (vector (last $) (first $) (second $))
          (string/join "-" $)
          (date-fn $))
     posts)))

(defn most-recent [posts]
  (let [grouped (dissoc (group-content posts true) "writings/creative_writing")
        s (print "fu" grouped)]
    (for [[_ posts] grouped]
      (-> posts
          date-sort
          last
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
