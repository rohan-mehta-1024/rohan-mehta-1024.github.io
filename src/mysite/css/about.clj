(ns mysite.css.about
  (:require [garden.units :refer [px]]
            [garden.selectors :as s]
            [garden.def :refer [defstylesheet]]
            [garden.stylesheet :refer [at-media]]))

(def about-me-container
  [:#about-me-container
   {:margin "auto"
                                        ;:margin-top (px 120)
    :margin-left (px 75)
    :margin-bottom (px 50)
    :margin-right (px 100)
    :font-family "WorkSans"}])

(def headers
  [:.headers
   {:font-family "WorkSansBold"
    :font-size   (px 28)
    :margin-bottom (px 15)}])

(def nice-list
  [:.nice-list
   {:list-style-type "square"}
   [(s/+ s/li s/li) {:margin-top (px 10)}]
   [(s/li) {:line-height (px 25)
            }]])

(def media-query-1
  (at-media {:max-width (px 930)}
            [:#about-me-container
             {:width "95%"
              :margin-left (px 25)}]))

(def media-query-2
  (at-media {:max-width (px 600)}
            [:.bullets
             {:font-size (px 15)}]))

(defstylesheet css
  {:output-to "resources/public/css/about.css"}
  (list
    about-me-container
    headers
    nice-list
    [:p {:line-height (px 25)}]
    media-query-1
    ;media-query-2
    ))


