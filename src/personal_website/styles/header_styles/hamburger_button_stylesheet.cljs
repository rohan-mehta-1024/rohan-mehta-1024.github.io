(ns personal-website.styles.header-styles.hamburger-button-stylesheet
  (:require [re-frame.core :as re-frame]
            [garden.selectors :as s]
            [garden.units :refer [px vw]]))

(defn ham-menu []
  [:.ham-menu
   {:position "absolute"
    :right (px 25)
    :top (px 0)
    :width (px 55)
    :height (px 55)
    :cursor "pointer"
    :display "none"
    :transition "all 0.3s ease-in-out"}])

(defn lines []
  (let [clicked? @(re-frame/subscribe [:homepage/hamburger-menu])
        transform-1 "translateY(14px) rotate(45deg)"
        transform-2 "translateY(-14px) rotate(-45deg)"]
  [:.lines
   {:margin "auto"
    :margin-top (px 12)
    :width (px 50)
    :background-color "black"
    :height (px 5)
    :border-radius (px 0)
    :transition "transform 0.3s, opacity 0.1s ease-in-out"}
   [(s/& (s/nth-child :1)) (if clicked? {:transform transform-1} {})]
   [(s/& (s/nth-child :2)) (if clicked? {:opacity "0%"} {})]
   [(s/& (s/nth-child :3)) (if clicked? {:transform transform-2} {})]]))

(defn hamburger-button []
  [(ham-menu)
   (lines)])
