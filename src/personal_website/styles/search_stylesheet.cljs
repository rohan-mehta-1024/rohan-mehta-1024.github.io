(ns personal-website.styles.search-stylesheet
  (:require [re-frame.core :as re-frame]
            [garden.units :refer [px]]
            [garden.selectors :as s]
            [garden.stylesheet :refer [at-media]]))

(defn search-container []
  (let [searching? @(re-frame/subscribe [:homepage/search])
        show? (if searching? "block" "none")]
    [:#search-container {:display show?}]))

(defn search-view []
  (let [searching? @(re-frame/subscribe [:homepage/search])
        autofocus (fn [] (.focus (.getElementById js/document "search-view")))
        autofocus (fn [] (js/setTimeout autofocus 200))
        autofocus (if searching? (autofocus) nil)]
    [:#search-view {;:display show?
                    :width "75%"
                    :margin "auto"
                    :margin-top (px 150)
                    :color "#DC143C"
                    :margin-left (px 20)
                    :font-size (px 40)
                    :border-width (px 0)
                    :border "none"
                    }
     [(s/& s/focus)] {:outline "none"}]))

(defn search-count []
  [:#search-count {:margin-left (px 20)
                   :margin-top (px 25)
                   :font-family "WorkSansBold"}])

(defn results-container []
  [:#results-container {:margin-left (px 20)
                        :margin-top (px 45)
                        :margin-bottom (px 75)}
   [(s/+ s/div s/div) {:margin-top (px 45)}]])

(defn search-results []
  [:#search-results {:min-height "100vh"
          ;:margin-right "75px"
          :width "700px"
          }])

(defn media-query-1 []
  (at-media {:max-width (px 715)}
      [:#search-results {:width "100%"}]))

(defn search []
  [(search-container)
   (search-results)
   (search-view)
   (search-count)
   (results-container)
   (media-query-1)])
