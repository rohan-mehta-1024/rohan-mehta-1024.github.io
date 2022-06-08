(ns mysite.css.homepage
  (:require [garden.units :refer [px]]
            [garden.selectors :as s]
            [garden.def :refer [defstylesheet]]
            [garden.stylesheet :refer [at-media]]))


(def content-container
  [:#content-container
   {:text-align "center"
    :width "75%"
    :height "100%"
    :margin "auto"
    :margin-top (px 35)
    :margin-bottom (px 50)}])

(def about-me-container
  [:#about-me-container {}
   [(s/& s/after)
    {:content "''"
     :display "block"
     :height (px 1)
     :width (px 720)
     :margin "auto"
     :margin-top (px 10)
     :background-color "black"}]])

(def picture
  [:#picture
   {:height (px 245)
    :width (px 245)
    :border-radius "50%"
    :border "1px solid black"
    :display "inline-block"
    :vertical-align "middle"
    :margin-top (px -10)}])

(def about-me
  [:#about-me {:text-align "left"
               :width (px 400)
               :display "inline-block"
               :vertical-align "middle"
               :margin-left (px 75)}])

(def about-me-text
  [:#about-me-text
   {:line-height "1.5"
    :font-family "WorkSans"
    :color "black"}])

(def recents 
  [:#recents {:font-family "WorkSansBold"
              :font-size   (px 28)
              :width       (px 700)
              :margin      "auto"
              :text-align  "left"
              :margin-top  (px 20)}
   [(s/+ s/div s/div) {:margin-top (px 50)}]])

(def media-query-1
  (at-media {:max-width (px 980)}
    [[:#content-container {:width "95%" :margin-top (px 15)}]
     [:#about-me-container {}
      [(s/& s/after) {:width "100%" :margin "auto"}]]

     [:#about-me
      {:width "90%"
       :display "block"
       :margin-top (px 60)
       :margin-left (px 30)}]

     [:#picture
      {:width (px 250)
       :height (px 250)
       :margin-bottom (px -40)
       :margin-top (px 35)}]

     [:#recents {:margin-left (px 0)
                 :width "100%"}]]))

(def media-query-2
  (at-media {:max-width (px 400)}
    [:#about-me-text
      {:font-size (px 15)
       :margin-left (px -20)}]))


(defstylesheet css
  {:output-to "resources/public/css/homepage.css"}
  (list
    content-container
    about-me-container
    picture
    about-me
    about-me-text
    recents
    media-query-1
    media-query-2))
