(ns personal-website.views.homepage-views.page-content
  (:require [re-frame.core :as re-frame]))


(defn about-me []
  [:div {:id "about-me-container"}
   [:p {:id "about-me"} "hello what is your name this is mine" ]])

(defn page-content []
  (about-me))
