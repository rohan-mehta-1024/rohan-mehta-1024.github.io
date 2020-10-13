(ns personal-website.styles.header-styles.header-stylesheet
  (:require [re-frame.core :as re-frame]
            [garden.units :refer [px]]
            [garden.selectors :as s]
            [personal-website.styles.header-styles.subpages-stylesheet :refer [subpages]]
            [personal-website.styles.header-styles.hamburger-button-stylesheet :refer [hamburger-button]]
            [personal-website.styles.header-styles.side-nav-stylesheet :refer [side-nav]]
            [personal-website.styles.header-styles.media-queries-stylesheet :refer [media-queries]]))

(defn global []
  [[:header {:width "100%"
             :background "white";"#F8F8F8";"#fffffd"
             :position "fixed"
             :top (px 0)
             :height (px 89)
             :z-index 10000
             :overflow "visible"}
    [(s/& s/after) {:content "''"
                    :display "block"
                    :height (px 1)
                    :width "100%"
                    :background-color "black"}]]
   [:nav {:float "right"}]
   [:ul {:list-style-type "none"}]
   [:a {:text-deocration "none"
        :color "#333"}]
   [:#top {:margin-top (px -100)
           :height (px 100)
           :background-color "blue"}]])

(defn my-name []
  [:#my-name
   {:display "inline-block" :font-family "WorkSansBold"
    :font-size (px 35) :margin-left (px 45)} :padding-top (px 50)])

(defn header []
  [(global)
   (my-name)
   (subpages)
   (hamburger-button)
   (side-nav)
   (media-queries)])
