(ns personal-website.styles.homepage-styles.homepage
  (:require [re-frame.core :as re-frame]
            [garden.units :refer [px vw]]
            [personal-website.styles.homepage-styles.subpages :refer [subpages]]
            [personal-website.styles.homepage-styles.hamburger-button :refer [hamburger-button]]
            [personal-website.styles.homepage-styles.side-nav :refer [side-nav]]
            [personal-website.styles.homepage-styles.media-queries :refer [media-queries]]
            [personal-website.styles.homepage-styles.page-content :refer [page-content]]))


(defn global-styles []
  [[:header {:width "100%" :background "white"}]
   [:nav {:float "right"}]
   [:ul {:list-style-type "none"}]
   [:body {:font-family "WorkSans"
           :background-color "#F8F8F8"
           :margin "0" :padding "0"}]])

(defn my-name []
  [:#my-name
   {:display "inline-block" :font-family "WorkSansBold"
    :font-size (px 35) :margin-left (px 45)}])


(defn homepage-styles []
  [(global-styles)
   (my-name)
   (subpages)
   (hamburger-button)
   (side-nav)
   (media-queries)])
