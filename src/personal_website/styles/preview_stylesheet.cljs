(ns personal-website.styles.preview-stylesheet
  (:require [garden.units :refer [px]]
            [garden.selectors :as s]))



(defn preview-header []
  [:.preview-header {:font-size (px 16)
                     :margin-bottom (px 5)
                     :color "grey"
                     :font-family "WorkSans"}])


(defn preview-title []
  [:.preview-title {:font-size (px 25)
                    :margin "0 0 0 0"
                    :color "#DC143C";"#8B0000" ;#c31
                    :width "auto"
                    :display "inline-block"
                    :font-family "WorkSansBold"
                    ;:font-weight 900
                    }
   [(s/& s/hover) {:color "black"
                   :cursor "pointer"
                   :text-decoration "underline"}]])

(defn preview-text []
  [:.preview-text {:font-size (px 16)
                   :font-family "WorkSans"
                   :display "block"
                   :line-height (px 25)
                   :margin-top (px 15)}])

(defn preview []
  [(preview-header)
   (preview-title)
   (preview-text)])
