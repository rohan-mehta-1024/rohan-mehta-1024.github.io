(ns personal-website.styles.homepage-styles.homepage-stylesheet
  (:require [re-frame.core :as re-frame]
            [garden.units :refer [px]]
            [garden.selectors :as s]
            [personal-website.styles.homepage-styles.media-queries-stylesheet :refer [media-queries]]
            [personal-website.styles.homepage-styles.page-content-stylesheet :refer [page-content]]
            [personal-website.styles.search-stylesheet :refer [search]]
            [personal-website.styles.header-styles.header-stylesheet :refer [header]]
            [personal-website.styles.preview-stylesheet :refer [preview]]))


(defn global []
   [[:a {:text-decoration "none"
         :color "black"}]
   [:body {:font-family "WorkSans"
           :background-color "white";"#F8F8F8" ;;;"white" ;"#fffff7"
           :margin "0"
           :padding "0"
           :width "100%"
           :height "100%"}]])

(defn homepage-styles []
  [(global)
   (header)
   (search)
   (page-content)
   (preview)
   (media-queries)])
