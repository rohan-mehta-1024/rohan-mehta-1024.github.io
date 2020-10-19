(ns personal-website.views.footer-html
  (:require [re-frame.core :as re-frame]))

(defn links []
  [:div {:id "footer-part-1"}
   [:a  {:href "https://github.com/rohan-mehta-1024"}
    [:img {:src "/resources/github.svg"
           :style {:margin-left "25px" :width "30px"}}]]
    [:a  {:href "https://github.com/rohan-mehta-1024"}
     [:img {:src "/resources/rss-feed.svg"
            :style {:margin-left "25px" :width "26px" }}]]
     [:a  {:href "mailto:rohanm1024@gmail.com"}
      [:img {:src "/resources/mail.svg"
             :style {:margin-left "25px" :width "35px"}}]]])


(defn description []
    [:div {:id "footer-part-2"}
     "© 2020 Rohan Mehta. Built with\n"
     [:span {:class "links"} "re-frame"] "."])

(defn footer []
  (let [route  @(re-frame/subscribe [:kee-frame/route])
        route-pred (if (-> route :path (= "/")) false true)]
  [:div {:id "whole-footer" :style {:display "block"}}
   (links)
   (description)]))
