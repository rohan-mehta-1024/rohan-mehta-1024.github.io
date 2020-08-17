(ns personal-website.views
  (:require [personal-website.views.new-homepage-views :as views]
            [personal-website.styles.new-homepage-styles :as styles]
            [personal-website.subs :as subs]
            [re-frame.core :as re-frame]
            [garden.core :refer [css]]))

(defn generate-and-inject-style-tag []
 "Injects a style tag with the id 'injected-css' into the page's head tag"
 (let [page-head (.-head js/document)
       style-tag (.createElement js/document "style")]
      (.setAttribute style-tag "id" "injected-css")
      (.appendChild page-head style-tag)))

(defn update-page-css [input-css]
 "Updates #injected-css with provided argument - if page does not have #injected-css, then
  creates it via call to generate-and-inject-style-tag"
 (let [style-tag-selector "#injected-css"
       style-tag-query (.querySelector js/document style-tag-selector)
       style-tag (if (nil? style-tag-query)
                      (generate-and-inject-style-tag)
                      style-tag-query)]
      (aset style-tag "innerHTML" input-css)))


 (defn main-panel []
   (let [inject-css (comp update-page-css css)
         injected-css (inject-css (styles/homepage-styles))]
     (views/html)))
