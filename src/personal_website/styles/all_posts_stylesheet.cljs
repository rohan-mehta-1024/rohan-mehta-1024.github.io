(ns personal-website.styles.all-posts-stylesheet
  (:require [re-frame.core :as re-frame]
            [garden.units :refer [px]]
            [garden.selectors :as s]
            [garden.stylesheet :refer [at-media]]))


(defn post-container-1 []
  (let [searching? @(re-frame/subscribe [:homepage/search])
        show? (if searching? "none" "block")]
    [:#post-container-1 {:width "75%"
                         :margin "auto"
                         :padding-top (px 135)
                         :min-height "100vh"
                         :display show?}]))

(defn post-container-2 []
  [:#post-container-2 {:width (px 700)
                       :margin "auto"
                       :font-family "WorkSansBold"
                       :font-size (px 30)}])

(defn post-container-3 []
  [:#post-container-3 {}
   [(s/+ s/div s/div) {:margin-top (px 50)}]])

(defn post-content-container []
  (let [searching? @(re-frame/subscribe [:homepage/search])
        show? (if searching? "none" "block")]
    [:#post-content-container {:width (px 750)
                               :min-height "100vh"
                               :margin "auto"
                               :margin-top (px 150)
                               :position "relative"
                               :display show?}]))

(defn post-title []
  [:#post-title {:text-align "left"
                 :font-family "WorkSansBold"
                 :font-size (px 35)
                 :color "#DC143C";"#8B0000"
                 }])

(defn post-byline []
  [:#post-byline {:color "grey"
                  :text-align "left"}])

(defn post-intro-container []
  [:#post-intro-container {:position "relative"
                           :z-index -1
                           :margin-top (px 30)}
   [(s/& s/before) {:content "''"
                    :float "left"
                    :width (px 5)
                    :position "absolute"
                    :height "100%"
                    :background-color "#D0D0D0"
                    :margin-left (px 8)}]])

(defn post-intro-text []
  [:#post-intro-text {:margin-left (px 20)
                      :padding-top (px 8)
                      :color "#B0B0B0"
                      :font-family "WorkSans"
                      :font-size (px 20)}])

(defn post-content []
  [:#post-content {:font-size (px 16.25)
                   :font-family "WorkSans"
                   :margin-top (px 35)
                   :line-height (px 28)
                   :padding-bottom (px 100)}])

(defn in-post-links []
  [:.post-links {:color "#DC143C"}
   [(s/& s/hover) {:color "black"
                   :text-decoration "underline"
                   :cursor "pointer"}]])

(defn post-caption []
  [:.post-caption {:font-style "italic"
                   :font-size (px 15)}])

(defn img-container []
  [:.img-container {:margin (px 0)
                    ;:text-align "center"
                    }])


(defn post-section-header []
  [:.post-section-header {:margin-top (px 50)
                          :font-family "WorkSansBold"}])

(defn special []
  [:.special {:width "30%"}])

(defn media-query-1 []
  (at-media {:max-width (px 875)}
    [[:#post-container-1 {:width "95%"}]
     [:#post-container-2 {:width "100%"}]
     [:#post-content-container {:width "95%"}]]))

(defn media-query-2 []
  (at-media {:max-width (px 700)}
    [:.post-img {:width "90% !important"}]))

(defn media-query-3 []
  (at-media {:max-width (px 500)}
    [[:#post-content {:font-size (px 15)
                     :line-height (px 25)}]
     [:.post-caption {:font-size (px 12)
                      :line-height (px 20)}]]))


 (defn media-query-4 []
   (at-media {:max-width (px 600)}
     [:.special {:width "50%"}]))



(defn all-posts []
  [(post-container-1)
   (post-container-2)
   (post-container-3)
   (post-content-container)
   (post-title)
   (post-byline)
   (post-intro-container)
   (post-intro-text)
   (post-content)
   (in-post-links)
   (post-caption)
   (post-section-header)
   (img-container)
   (media-query-1)
   (media-query-2)
   (special)
   (media-query-3)
   (media-query-4)

   ])
