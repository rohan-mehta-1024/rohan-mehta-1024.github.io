(ns mysite.css.preview
  (:require [garden.units :refer [px]]
            [garden.selectors :as s]
            [garden.stylesheet :refer [at-media]]
            [garden.def :refer [defstylesheet]]))

(def previews-container
  [:#previews-container
   {:width "85%"
    ;:position "absolute"
    ;:top "0"
    ;:left "0"
    ;:right "0"
                                        ;:bottom "0"
    :height "100%"
    :margin "auto"
    :margin-top (px 55)
    :padding-left "10px"
    :padding-right "10px"
                                        ;:margin  "auto"
;    :margin-left "auto"
;    :margin-right "auto"
    :display "flex"
    :flex-direction "column"
    ;:align-items "center"
    :align-content "flex-start"
    :font-family "WorkSansBold"
    :font-size (px 30)}])

(def preview-header
  [:.preview-header
   {:font-size (px 17)
    :margin-bottom (px 5)
    :color "grey"
    :width "100%"
    :font-weight "normal"
    :font-family "WorkSans"}])


(def preview-title
  [:.preview-title {:font-size (px 23)
                    :margin "0 0 0 0"
                    :margin-left (px 10)
                    :overflow "hidden"
                                        ;:color "#DC143C"
                    :color "#903"
                    :width "auto"
                    :display "inline-block"
                    :font-family "WorkSans"
                    :margin-right "auto"
                    }
   [(s/& s/hover) {:color "black"
                   :cursor "pointer"
                   :text-decoration "underline"}]])

(def preview-text
  [:.preview-text {:font-size (px 16)
                   :display "block"
                   :line-height (px 25)
                   :font-weight "500"
                   :font-family "WorkSans"}])


(def series
  [:.series
   {:font-size (px 20)
    :font-family "WorkSansBold"}])

(def not-homepage
  [[:.not-homepage.preview-header {:font-size (px 16)
                                    :margin-bottom (px -5)}]
   [:.not-homepage.preview-title {:font-size (px 21)}]
                                        ;[(s/first-child :#previews-container) {:margin-top (px 100) :color "red"}]
   [:#preview-container-2.not-homepage {:padding-top (px 15)}]
   [(s/+ :#preview-container-2.not-homepage :#preview-container-2.not-homepage) {:margin-top (px 25)}]])

(def media-query-1 
  (at-media {:max-width (px 400)}
      [[:.preview-title {:font-size (px 20)
                         :margin-top (px 9)
                         :font-family "WorkSans"}]
       [:.preview-text {:width "100%"
                        :margin-right "!0%"}]
       [:.preview-header {:font-size (px 13)
                          :margin-bottom (px 0)}]]))

(def media-query-2 
  (at-media {:max-width (px 720)}
            [[:.not-homepage.preview-title {:font-size (px 18)}]
             [:.preview-text {:margin-right "0%"}]
             [:#previews-container {:margin-left (px 50)}]
             [:.preview-img {:width "80px" :height "60px"}]
             [:.preview-title {:width "75%"}]
             ]))

(defstylesheet css
  {:output-to "resources/public/css/preview.css"}
  (list previews-container
    preview-header
        preview-title
        preview-text
        series
        not-homepage
        [:.preview-img {:width "100px" :height "70px":display "inline-block"
                        ;:float "left"
                        :vertical-align "middle"
                        }]
        media-query-2
        media-query-1
        ;(at-media {:max-width (px 550)}
        ;          [[:.not-homepage.preview-title {:font-size (px 15)}]
        ;           [:.preview-img {:width "70px" :height "50px"}]
        ;           ]
        ;          )

        ))
