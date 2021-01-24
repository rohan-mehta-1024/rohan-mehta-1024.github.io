(ns personal-website.styles.homepage-styles.media-queries-stylesheet
  (:require [garden.units :refer (px)]
            [garden.stylesheet :refer [at-media]]
            [garden.selectors :as s]))


(defn media-query-1 []
  (at-media {:max-width (px 875)}
    [[:#content-container {:width "95%"}]
     [:#about-me-container {}
      [(s/& s/after) {:width "100%"
                      :margin "auto"}]]
     [:#about-me {:width "90%"
                  :display "block"
                  :margin-top (px 40)
                  :margin-left (px 30)}]
     [:#recents {:width "100%" :margin-right "100px"}]
     ;[:.preview-text {:width "90%"}]
     ]))


(defn media-queries []
  [(media-query-1)])
