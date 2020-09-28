(ns personal-website.styles.footer-stylesheet
  (:require [garden.units :refer [px]]
            [garden.selectors :as s]
            [garden.stylesheet :refer [at-media]]))


(defn whole-footer []
  [:#whole-footer {:width "100%"
                   ;:position "relative"
                   :bottom (px 0)
                   }])

(defn footer-part-1 []
  [:#footer-part-1 {:position "relative"
                    :top (px 10)
                    ;:z-index -300
                    }
   [(s/+ s/a s/a) {:margin-left (px 50)}]
   [(s/& s/before) {:content "''"
                    :display "block"
                    :width "100%"
                    :height (px 1)
                    :background-color "	#E0E0E0"
                    :margin-bottom (px 10)}]])

(defn footer-part-2 []
  [:#footer-part-2 {:position "relative"
                    :margin-left (px 25)
                    :top (px 25)
                    :bottom (px 20)
                    :padding-bottom (px 7)
                    :z-index -300}])

(defn email-img []
  [:#email-img {:width (px 50)
                :margin-bottom (px -15)}])

(defn github-img []
  [:#github-img {:width (px 50)
                :margin-bottom (px -15)}])



(defn links []
  [:.links {:color "#333"
            :font-family "WorkSansBold"
            :text-decoration "underline"}
   [(s/& s/hover) {:color "#000"
                   :cursor "pointer"}]])

(defn caption []
  [:.caption {:display "inline-block"}])

(defn media-query-1 []
  (at-media {:max-width (px 800)}
      [:#whole-footer {:margin-top (px 20)}]))

(defn media-query-2 []
  (at-media {:max-width (px 400)}
      [:#footer-part-2 {:font-size (px 13)}]))

(defn footer []
  [(whole-footer)
   (footer-part-1)
   (footer-part-2)
   (email-img)
   (github-img)
   (links)
   (caption)
   (media-query-2)
   ])
