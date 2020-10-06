(ns personal-website.views.homepage-views.homepage-html
  (:require [re-frame.core :as re-frame]
            [personal-website.views.header-html :refer [header]]
            [personal-website.views.homepage-views.page-content-html :refer [page-content]]
            [personal-website.views.footer-html :refer [footer]]
            [personal-website.views.search-html :refer [search-html]]))

(defn generate-and-inject-style-tag []
  "Injects a style tag with the id 'injected-css' into the page's head tag"
  (let [page-head (.-head js/document)
        style-tag (.createElement js/document "style")]
      (.setAttribute style-tag "id" "injected-css")
      (.appendChild page-head style-tag)))

(defn update-page-title [input-css]
 "Updates #injected-css with provided argument - if page does not have #injected-css, then
  creates it via call to generate-and-inject-style-tag"
 (let [style-tag-selector "title"
       style-tag-query (.querySelector js/document style-tag-selector)
       style-tag (if (nil? style-tag-query)
                      (generate-and-inject-style-tag)
                      style-tag-query)]
      (aset style-tag "innerHTML" input-css)))


(defn homepage-html []
  (let [searching? @(re-frame/subscribe [:homepage/search])
        pos (if searching? "absolute" "relative")
        x (update-page-title "Rohan Mehta")]
    (-> [:div {:style {:id "super-container"
                       :position "relative"
                       :min-height "100%"
                       :width "100%"}}]

        (conj (header))
        (conj (search-html))
        (conj (page-content))
        (conj (footer)))))
