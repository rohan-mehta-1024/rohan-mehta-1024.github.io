(ns personal-website.views.homepage-views.homepage-html
  (:require [re-frame.core :as re-frame]
            [personal-website.views.header-html :refer [header]]
            [personal-website.views.homepage-views.page-content-html :refer [page-content]]
            [personal-website.views.footer-html :refer [footer]]
            [personal-website.views.search-html :refer [search-html]]))


(defn homepage-html []
  (let [searching? @(re-frame/subscribe [:homepage/search])
        pos (if searching? "absolute" "relative")]
    (-> [:div {:style {:id "super-container"
                       :position "relative"
                       :min-height "100%"
                       :width "100%"}}]

        (conj (header))
        (conj (search-html))
        (conj (page-content))
        (conj (footer)))))
