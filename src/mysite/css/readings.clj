(ns mysite.css.about
  (:require [garden.units :refer [px]]
            [garden.selectors :as s]
            [garden.def :refer [defstylesheet]]
            [garden.stylesheet :refer [at-media]]))
(def styles
  [[:table {:border-collapse "collapse"
            :width "80%"
            :font-family "WorkSans"
            :font-size (px 12)
            :margin "0 auto"
            ;:table-layout "fixed"
            :margin-top "50px"
            :margin-bottom "50px"}]
   [:caption {;:text-align "left"
              :font-size "20px"
              :padding "10px"
              :font-weight "bold"
              }]
        [:th {:background-color "#903";;"#4CAF50"
              :color "white"
              :text-align "center"
              :border "1px solid black"
              :padding "15px"}]
        [:td {:text-align "left"
              :border "1px solid black"
              :padding "15px"}]
   ;[(:td (s/nth-child :1)) {:width "40%"}]
   [:.center-text {:text-align "center"}]
   [:.title-column {:width "20%"}]
   ])

(defstylesheet css
  {:output-to "resources/public/css/readings.css"}
  (list
   styles
   (at-media {:max-width (px 850)}
             [:.last {:display "none"}]
             )
    ))


