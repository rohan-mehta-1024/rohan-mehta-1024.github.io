(ns personal-website.views.homepage-views.content
  (:require [re-frame.core :as re-frame]))

  
(defn about-me []
  [:div {:class "about me"}
   [:p "so do you still work??"]])

(defn page-content []
  (about-me))
