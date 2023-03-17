(ns mysite.css.header.ham-menu
  (:require [garden.units :refer [px]]
            [garden.selectors :as s]))

(s/defclass lines)

(def ham-menu
  [:#ham-menu
   {:float "right"
    :position "relative"
    :margin-right (px 25)
    :margin-top (px 9)
    ;:margin-bottom (px 25)
    :width (px 55)
    :height (px 55)
    :cursor "pointer"
    :display "none"
    :transition "all 0.3s ease-in-out"
    :z-index 20
    }])

(def lines-styles
  [:.lines
   {:margin "auto"
    :margin-top (px 12)
    :width (px 50)
    :background-color "black"
    :height (px 4)
    :border-radius (px 50)
    :transition "transform 0.3s, opacity 0.1s ease-in-out"}])

(def active
  [:#ham-menu.active {}
   [(lines (s/nth-child :1)) {:transform "translate(0px, 16px) rotate(45deg)"}]
   [(lines (s/nth-child :2)) {:opacity "0%"}]
   [(lines (s/nth-child :3)) {:transform "translate(0px, -16px) rotate(-45deg)"}]])

(def css
  (list
    ham-menu
    lines-styles
    active))
