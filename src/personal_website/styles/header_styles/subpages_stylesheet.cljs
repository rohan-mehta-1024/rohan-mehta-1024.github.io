(ns personal-website.styles.header-styles.subpages-stylesheet
  (:require-macros [garden.def :refer [defkeyframes]])
  (:require [re-frame.core :as re-frame]
            [garden.selectors :as s]
            [garden.units :refer [px vw]]))


(s/defclass subpage-container-2)
(s/defclass subpage-elements)
(s/defclass subpage-tooltips)
(s/defclass subpage-tooltip-elements)

(defn subpage-container-1 []
  [:#subpage-container-1  {:margin-right (px 25)
                           :margin-top (px 37)
                           :display "inline-block"
                           }
   ;[(s/+ subpage-container-2 subpage-container-2) {:margin-left (vw 5)}]
   ])

(defn subpage-container-2-styles []
    [:.subpage-container-2
     {:text-align "center"
      :display "inline-block"
      :position "relative"
      :width (px 165)
      :margin "auto"
      :margin-bottom (px 0)
      :padding-bottom (px 0)}])

(defn subpage-elements-styles []
  (let [[hovering? id] @(re-frame/subscribe [:homepage/subpage-hover])
        id (-> id str keyword)
        color (if hovering? "#000" "#333")
        cursor (if hovering? "pointer" "auto")
        width (if hovering? "100%" "0%")]
    [:.subpage-elements
     {:font-size (px 15)
      :font-family "WorkSans"
      :text-transform "uppercase"
      :color color
      :cursor cursor

      :display "inline-block"}
     [(s/& s/after) {:content "''"
                     :display "block"
                     :height (px 1.5)
                     :width (px 0)
                     :background-color "#000"
                     :transition "width 0.5s ease-in-out"}]]))

(defn subpage-tooltips-styles []
  (let [[hovering? id] @(re-frame/subscribe [:homepage/subpage-hover])]
    [:.subpage-tooltips
     {:width (px 110)
      :z-index 1000
      :height (px 50)
      :padding (px 10)
      :position "relative"
      :border "2px solid black"
      :text-align "center"
      :margin-left "10%"
      :margin-top (px 15)
      :border-radius (px 10)
      :background-color "white"
      :opacity "0%"
      :margin-bottom (px 0)
      :display (if hovering? "block" "none")
      }
      [(s/+ s/a s/a) {:margin-top (px 5)}]
      [(s/& s/after) {:content "''"
                      :position "relative"
                      :top (px -128)
                      :height (px 0)
                      :border-width (px 8)
                      :border-style "solid"
                      :border-color "transparent transparent black transparent"}]]))


(defn subpage-tooltip-elements-styles []
  (let [[hovering? _] @(re-frame/subscribe [:homepage/subpage-hover])
        display? (if hovering? "block" "none")]
    [:.subpage-tooltip-elements
     {:font-size (px 12)
      :font-family "WorkSans"
      :cursor "pointer"
      :color "#333"
      :display display?}
     [(s/& s/hover) {:color "#000"}]]))

(defn subpage-selector []
  (let [[hovering? id] @(re-frame/subscribe [:homepage/subpage-hover])
        show? (if hovering? "100%" "0%")
        display? (if hovering? "block" "none")
        child (-> id str keyword)]
  [[(-> (s/nth-child child)
        subpage-container-2
        (s/> subpage-tooltips)) {:opacity show?
                                 :display display?}]
   [(-> (s/nth-child child)
        subpage-container-2
        (s/> (subpage-elements s/after))) {:width show?}]
   [(-> (s/nth-child :3)
        subpage-container-2
        (s/> subpage-tooltips)) {:height (px 87)}]
   [(-> (s/nth-child :4)
        subpage-container-2
        (s/> subpage-tooltips)) {:height (px 30)}]

   ]))

(defn search-img-1 []
  [:#search-img-1
   {:display "inline-block"
    :float "right"
    :margin-top (px 30)
    :margin-right (px 30)
    :width (px 30)}
    [(s/& s/hover) {:cursor "pointer"}]])

(defn search-img-2 []
  [:#search-img-2 {:width (px 35)}])

(defn subpages []
  [(subpage-container-1)
   (subpage-container-2-styles)
   (subpage-elements-styles)
   (subpage-tooltips-styles)
   (subpage-selector)
   (subpage-tooltip-elements-styles)
   (search-img-1)
   (search-img-2)])
