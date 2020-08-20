(ns personal-website.views.homepage-views.page-content
  (:require [re-frame.core :as re-frame]))


(defn about-me []
  [:div
   [:p "hello what is your name this is mine"]])

(defn page-content []
  (about-me))
