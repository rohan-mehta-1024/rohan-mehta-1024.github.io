(ns personal-website.styles.preview-stylesheet
  (:require [garden.units :refer [px]]
            [garden.selectors :as s]
            [garden.stylesheet :refer [at-media]]))



(defn preview-header []
  [:.preview-header {:font-size (px 15)
                     :margin-bottom (px 5)
                     :color "grey"
                     :font-family "WorkSans"
                     }])


(defn preview-title []
  [:.preview-title {:font-size (px 23)
                    :margin "0 0 0 0"
                    :color "#DC143C"
                    :width "auto"
                    :display "inline-block"
                    :font-family "WorkSans"

                    }
   [(s/& s/hover) {:color "black"
                   :cursor "pointer"
                   :text-decoration "underline"}]])

(defn preview-text []
  [:.preview-text {:font-size (px 16)
                   :display "block"
                   :line-height (px 25)
                  ; :margin-top (px 15)
                   :font-weight "500"
                   :font-family "WorkSans"
                   ;:margin-right "15%"
                   }])


(defn media-query-1 []
  (at-media {:max-width (px 400)}
      [[:.preview-title {:font-size (px 20)
                         :margin-top (px 9)
                         :font-family "WorkSans"}]
       [:.preview-text {;:line-height (px 20)
                        ;:font-size (px 15)
                        ;:margin-top (px 8)
                        ;:background-color "blue"
                        :width "100%"
                        :margin-right "!0%"
                        }]
       [:.preview-header {:font-size (px 13)
                          :margin-bottom (px 0)}]]))


(defn media-query-2 []
  (at-media {:max-width (px 720)}
      [[:.preview-text {:margin-right "0%"}]]))



(defn preview []
  [(preview-header)
   (preview-title)
   (preview-text)
   (media-query-1)
   (media-query-2)

   ])
