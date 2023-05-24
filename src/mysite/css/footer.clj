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
     :background-color "#E0E0E0"
     :margin-bottom (px -30)
     :margin-left (px 0)}]])

(def footer-part-1 
  [:#footer-part-1
   {:margin-left (px 25)
    :display "flex"
    :flex-direction "row"
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
            [[:#footer-part-1 {:justify-content "space-between"
                               :margin-left "auto"
                               :padding-left "10px"
                               :padding-right "10px"
                               }
                                        ;[(s/+ s/a s/a) {:margin-left "20%"}]
              [(:#footer-part-1 (s/nth-child :1)) {:margin-left "100px"}]

              ]]
             [:#footer-part-2 {:margin-left (px 10) :font-size (px 13)}]
             [:.icons {:width (px 20)}]))

(defstylesheet css
  {:output-to "resources/public/css/footer.css"}
  (list
    footer
    footer-part-1
    footer-part-2
    icons
    stasis
    media-query-1))
