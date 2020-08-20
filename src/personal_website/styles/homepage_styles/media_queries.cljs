(ns personal-website.styles.homepage-styles.media-queries
  (:require [re-frame.core :as re-frame]
            [garden.units :refer [px vw]]
            [garden.selectors :as s]
            [garden.stylesheet :refer [at-media]]))


(defn media-query-1 []
  (at-media {:max-width (px 1070)}
    (let [clicked? @(re-frame/subscribe [:homepage/hamburger-menu])])
    [[:header {:text-align "center"}]
     [:#my-name {:font-size (px 35) :margin-left (px 0)}]
     [:#subpage-container-1 {:display "none"}]
     [:.ham-menu {:margin-top (px 19) :display "inline-block"}]
     [:.lines {:height (px 4) :width (px 43) :margin-top (px 10)}]]))

(defn media-query-2 []
  (at-media {:min-width (px 1070)}
    [:#side-nav-background {:display "none"}]))

(defn media-query-3 []
  (at-media {:max-width (px 700)}
      (let [clicked? @(re-frame/subscribe [:homepage/hamburger-menu])]
        [[:#my-name {:font-size (px 30)}]
         [:.ham-menu {:margin-top (px 15)}]
         [:.lines {:width (px 40) :height (px 3)}
          [(s/& (s/nth-child :1)) (if clicked? {:transform "translateY(13px) rotate(45deg)"} {})]
          [(s/& (s/nth-child :3)) (if clicked? {:transform "translateY(-13px) rotate(-45deg)"} {})]]
         [:#side-nav-background (if clicked? {:width "100%"} {})]])))

(defn media-queries []
  [(media-query-1)
   (media-query-2)
   (media-query-3)])
