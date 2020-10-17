(ns personal-website.styles.homepage-styles.page-content-stylesheet
  (:require [re-frame.core :as re-frame]
            [garden.selectors :as s]
            [garden.units :refer [px vw]]
            [garden.stylesheet :refer [at-media]]))


(defn content-container []
  (let [searching? @(re-frame/subscribe [:homepage/search])
        route  @(re-frame/subscribe [:kee-frame/route])
        route-pred (if (-> route :path (= "/")) false true)
        whole-pred (or searching? route-pred)
        show? (if whole-pred "0%" "100%")]
    [:#content-container {:text-align "center"
                          :width "75%"
                          :margin "auto"
                          :opacity show?
                          :padding-top (px 135)
                          :padding-bottom (px 50)
                          :height "auto"}]))

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
              :border-radius "50%"
              :border "1px solid black"
              :display "inline-block"
              :vertical-align "middle"
              :margin-top (px 55)}])

(defn about-me []
  [:#about-me {:text-align "left"
               :width (px 380)
               :display "inline-block"
               :vertical-align "middle"
               :margin-left (px 75)
               }])

(defn about-me-text []
  [:#about-me-text {:line-height "1.5"
                    :font-family "WorkSans"
                    :color "black"}])

(defn colored-text []
  [:.colored-text {:color "#DC143C"
                   :font-family "WorkSansBold"}
   [(s/& s/hover) {:cursor "pointer"
                   :color "black"}]])

(defn recents []
  [:#recents {:font-family "WorkSansBold"
              :font-size (px 28)
              :width (px 700)
              :margin "auto"
              :text-align "left"
              :margin-top (px 20)}
   [(s/+ s/div s/div) {:margin-top (px 50)}]])

(defn media-query-1 []
  (at-media {:max-width (px 875)}
    [:#picture {:width (px 250)
                :height (px 250)
                :margin-bottom (px -40)
                :margin-top (px 35)}]))


(defn media-query-2 []
  (at-media {:max-width (px 400)}
    [[:#about-me-text {:font-size (px 15)
                       :margin-left (px -20)}]]))

(defn page-content []
  [(content-container)
   (about-me-container)
   (picture)
   (about-me)
   (about-me-text)
   (colored-text)
   (recents)
   (media-query-1)
   (media-query-2)])
