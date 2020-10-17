(ns personal-website.views.footer-html
  (:require [re-frame.core :as re-frame]))

(defn links []
  [:div {:id "footer-part-1"}
   [:a {:class "icon-github social-button"
        :href "https://github.com/rohan-mehta-1024"
        :style {:margin-left "25px"}
        }]
   [:a {:class "icon-rss social-button"
        :href "http://rohan-mehta-1024.github.io/rss"}]
   [:a {:href "mailto:rohanm1024@gmail.com"}
    [:img {:src "/resources/email.png"
              :id "email-img"
              :class "links"}]]])

(defn description []
    [:div {:id "footer-part-2"}
     "© 2020\n"
     [:a {:class "links" :href "mailto:rohanm1024@gmail.com"} "Rohan Mehta"]
      ".\n Built using \n"
        [:a {:class "links" :href "https://github.com/day8/re-frame" :target "_blank"} "re-frame."]])

(defn footer []
  (let [route  @(re-frame/subscribe [:kee-frame/route])
        route-pred (if (-> route :path (= "/")) false true)]
  [:div {:id "whole-footer" :style {:display "block"}}
   (links)
   (description)]))
