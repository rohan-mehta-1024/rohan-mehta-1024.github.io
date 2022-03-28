(ns mysite.css.footer
  (:require [garden.def :refer [defstylesheet]]
            [garden.units :refer [px]]
            [garden.selectors :as s]
            [garden.stylesheet :refer [at-media]]))

(def footer
  [:footer
   {:margin-top "auto"}

   [(s/& s/before)
    {:content "''"
     :display "block"
     :width "100%"
     :height (px 1)
     :background-color "white";; "#E0E0E0"
     :margin-bottom (px -30)
     :margin-left (px 0)}]])

(def footer-part-1 
  [:#footer-part-1
   {:margin-left (px 25)
    :margin-bottom (px 15)
    :margin-top (px 50)}

   [(s/+ s/a s/a)  {:margin-left (px 50)}]])

(def footer-part-2
  [:#footer-part-2
   {:margin-left (px 25)
    :margin-bottom (px 10)
    :font-family "WorkSans"}])

(def icons
  [:.icons
   {:display "inline-block"
    :width (px 25)}

   [(s/& s/hover) {:cursor "pointer"}]])

(def stasis
  [:#stasis {:font-family "WorkSansBold"}
   [(s/& s/hover) {:text-decoration "underline"}]])

(def media-query-1
  (at-media {:max-width (px 500)}
            [[:#footer-part-1 {:margin-left (px 10)}
              [(s/+ s/a s/a) {:margin-left "23%"}]]]
             [:#footer-part-2 {:margin-left (px 10) :font-size (px 12)}]
             [:.icons {:width (px 22)}]))

(defstylesheet css
  {:output-to "resources/public/css/footer.css"}
  (list
    footer
    footer-part-1
    footer-part-2
    icons
    stasis
    media-query-1))
