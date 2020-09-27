(ns personal-website.styles.all-posts-stylesheet
  (:require [garden.units :refer [px]]
            [garden.selectors :as s]
            [garden.stylesheet :refer [at-media]]))


(defn post-container-1 []
  [:#post-container-1 {:width "75%"
                       :margin "auto"
                       :padding-top (px 135 )
                       :min-height "100vh"

                       }])

(defn post-container-2 []
  [:#post-container-2 {:width (px 700)
                       :margin "auto"
                       ;:padding-top (px 135)
                       :font-family "WorkSansBold"
                       :font-size (px 30)}])

(defn post-content-container []
  [:#post-content-container {:width (px 850)
                             :min-height "100vh"
                             :margin "auto"
                             :margin-top (px 150)
                             :position "relative"


                             ;:padding-bottom (px 200)
                             }])

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
  [:#post-content {:font-size (px 17)
                   :font-family "WorkSans"
                   :margin-top (px 35)
                   :line-height (px 25)
                   :padding-bottom (px 100)}])

(defn media-query-1 []
  (at-media {:max-width (px 875)}
    [[:#post-container-1 {:width "95%"}]
     [:#post-container-2 {:width "100%"}]
     [:#post-content-container {:width "95%"}]]))

(defn all-posts []
  [(post-container-1)
   (post-container-2)
   (post-content-container)
   (post-title)
   (post-byline)
   (post-intro-container)
   (post-intro-text)
   (post-content)
   (media-query-1)

   ])