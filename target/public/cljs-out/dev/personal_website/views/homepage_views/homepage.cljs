(ns personal-website.views.homepage-views.homepage
  (:require [personal-website.views.homepage-views.nav-bar :refer [nav-bar]]
            [personal-website.views.homepage-views.page-content :refer [page-content]]))


(defn html []
  (-> [:div]
   (conj (nav-bar))
   (conj (page-content))))
