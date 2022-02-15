(ns mysite.css.preview
  (:require [garden.units :refer [px]]
            [garden.selectors :as s]
            [garden.stylesheet :refer [at-media]]
            [garden.def :refer [defstylesheet]]))

(def previews-container
  [:#previews-container
   {:width "75%"
    ;:position "absolute"
    ;:top "0"
    ;:left "0"
    ;:right "0"
                                        ;:bottom "0"
    :height "100%"
    ;:margin "auto"
    :padding-top (px 35)
                                        ;:margin  "auto"
    :margin-left "auto"
    :margin-right "auto"
  
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
                                        ;:color "#DC143C"
                    :color "#903"
                    :width "auto"
                    :display "inline-block"
                    :font-family "WorkSans"
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
   ;[(:#preview-container s/first-child) {:margin-top (px 100)}]
   [(s/+ :#preview-container-2.not-homepage :#preview-container-2.not-homepage) {       :margin-top (px 35)}]])

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
            [[:.preview-text {:margin-right "0%"}]
             [:#previews-container {:margin-left (px 50)}]]))

(defstylesheet css
  {:output-to "resources/public/css/preview.css"}
  (list previews-container
    preview-header
        preview-title
        preview-text
        series
        not-homepage
        media-query-1
        media-query-2))
