(ns personal-website.views
  (:require [re-frame.core :as re-frame]
            [kee-frame.core :as k]
            [garden.core :refer [css]]
            [personal-website.views.all-posts-html :refer [display]]
            [personal-website.styles.all-posts-stylesheet :refer [all-posts]]
            [personal-website.styles.footer-stylesheet :refer [footer]]
            [personal-website.views.homepage-views.homepage-html :refer [homepage-html]]
            [personal-website.styles.homepage-styles.homepage-stylesheet :refer [homepage-styles]]))


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

(def route-view-mapping {:homepage [homepage-html]
                         :blog-posts display})

(defn styles []  (reduce into [(homepage-styles) (all-posts) (footer)]))


(defn inject-css [text-css]
  (let [cssify (partial css {:vendors ["webkit"] :auto-prefix #{:transition}})]
    (-> text-css cssify update-page-css)))

 (defn main-panel []
    (let [injected-css (inject-css (styles))]
      [k/switch-route (fn [route] (-> route :data :name))
         :homepage (route-view-mapping :homepage)
         ;:who-i-am


         :syn-bio display
         :comp-sci display

         :blog-posts display
         :essays display
         :stories display
         :poems display
         :papers display
         nil [homepage-html]]))
