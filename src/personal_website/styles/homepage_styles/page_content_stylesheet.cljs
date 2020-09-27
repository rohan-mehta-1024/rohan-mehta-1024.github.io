(ns personal-website.styles.homepage-styles.page-content-stylesheet
  (:require [re-frame.core :as re-frame]
            [garden.selectors :as s]
            [garden.units :refer [px vw]]
            [garden.stylesheet :refer [at-media]]))


(defn content-container []
  (let [searching? @(re-frame/subscribe [:homepage/search])
        show? (if searching? "none" "block")]
    [:#content-container {:text-align "center"
                          :width "75%"
                          :margin "auto"
                          :display show?
                          :padding-top (px 135)
                          :padding-bottom (px 50)
                          }]))

(defn about-me-container []
  [:#about-me-container {}
   [(s/& s/after) {:content "''"
                   :display "block"
                   :height (px 1)
                   :width (px 700)
                   :margin "auto"
                   :margin-top (px 10)
                   :background-color "black"}]])

(defn picture []
  [:#picture {:height (px 200)
              :width (px 200)
              :background-color "black"
              :border-radius "50%"
              :display "inline-block"
              :vertical-align "middle"}])

(defn about-me []
  [:#about-me {:text-align "left"
               :width (px 380)
               :display "inline-block"
               :vertical-align "middle"
               :margin-left (px 75)}])

(defn colored-text []
  [:.colored-text {:color "#DC143C"
                   :font-family "WorkSansBold"
                   ;:text-decoration "underline"
                   }
   [(s/& s/hover) {:cursor "pointer"
                   ;text-decoration "underline"
                   :color "black"}]])

(defn recents []
  [:#recents {:font-family "WorkSansBold"
              :font-size (px 28)
              :width (px 700)
              :margin "auto"
              :text-align "left"
              :margin-top (px 20)
              }
   [(s/+ s/div s/div) {:margin-top (px 50)}]])



(defn page-content []
  [(content-container)
   (about-me-container)
   (picture)
   (about-me)
   (colored-text)
   (recents)
   ])
