(ns personal-website.styles.homepage-styles.page-content
  (:require [re-frame.core :as re-frame]
            [garden.selectors :as s]
            [garden.units :refer [px vw]]))


(defn about-me []
  [:#about-me {:float "right"
               :margin-right "10%"}])

(defn page-content []
  (about-me))
