(ns personal-website.styles.preview-stylesheet
  (:require [garden.units :refer [px]]
            [garden.selectors :as s]
            [garden.stylesheet :refer [at-media]]))



(defn preview-header []
  [:.preview-header {:font-size (px 16)
                     :margin-bottom (px 5)
                     :color "grey"
                     :font-family "WorkSans"
                     }])


(defn preview-title []
  [:.preview-title {:font-size (px 25)
                    :margin "0 0 0 0"
                    :color "#DC143C";"#8B0000" ;#c31
                    :width "auto"
                    :display "inline-block"
                    :font-family "WorkSansBold"
                    }
   [(s/& s/hover) {:color "black"
                   :cursor "pointer"
                   :text-decoration "underline"}]])

(defn preview-text []
  [:.preview-text {:font-size (px 16)
                   :display "block"
                   :line-height (px 25)
                   :margin-top (px 15)
                   :font-weight "500"
                   :font-family "WorkSans"}])

(defn media-query-1 []
  (at-media {:max-width (px 400)}
      [[:.preview-title {:font-size (px 18)}]
       [:.preview-text {:line-height (px 20)
                        :font-size (px 14)}]
       [:.preview-header {:font-size (px 12)}]]))

(defn preview []
  [(preview-header)
   (preview-title)
   (preview-text)
   (media-query-1)])
