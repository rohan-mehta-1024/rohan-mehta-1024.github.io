(ns personal-website.styles.header-styles.side-nav-stylesheet
  (:require-macros [garden.def :refer [defkeyframes]])
  (:require [re-frame.core :as re-frame]
            [garden.selectors :as s]
            [garden.units :refer [px vw]]
            [personal-website.db :as db]))


(s/defclass side-nav-elements)
(s/defclass side-nav-arrow)
(s/defclass side-nav-container-2)
(s/defclass side-nav-subpage-container)
(s/defclass side-nav-subpage-elements)

(defn side-nav-background []
  (let [clicked? @(re-frame/subscribe [:homepage/hamburger-menu])
        width (if clicked? "35%" "0%")]
   [:#side-nav-background
    {:background "white" ;"#fffffb"
     :height "110%"
     :margin-top (px -100)
     :width width
     :position "fixed"
     :right (px 0)
     :transition "width 0.75s ease-in-out"
     }]))

(defn side-nav-container-1 []
  (let [clicked? @(re-frame/subscribe [:homepage/hamburger-menu])
        show? (if clicked? "100%" "0%")
        delay (if clicked?  "0.35s" "0.25s")]
  [:#side-nav-container-1 {:margin-top (px 150)
                           :padding (px 0)
                           :opacity show?
                           :transition "0.25s"
                           :transition-delay delay}]))

(defn side-nav-container-2-styles []
  [:.side-nav-container-2
   {:padding-left (px 0)
    :text-align "center"}])

(defn side-nav-elements-styles []
  [:.side-nav-elements
   {:font-size (px 15)
    :font-family "WorkSans"
    :text-transform "uppercase"
    :color "#333"
    :margin-top (px 40)
    :text-align "center"}
   [(s/& s/hover) {:color "#000"
                   :cursor "pointer"}]
   [(s/& s/after) {:content "''"
                   :width "50%"
                   :margin-top (px 20)
                   :height (px 1)
                   :background-color "black"
                   :display "block"
                   :margin "auto"}]])


(defn side-nav-arrow-styles []
    [:.side-nav-arrow
     {:display "inline-block"
      :position "relative"
      :margin "0px 0px 2px 10px"
      :border "solid black"
      :border-width "0 2px 2px 0"
      :padding (px 3)
      :text-align "center"}])

(defn side-nav-subpage-container-styles []
  [:.side-nav-subpage-container
   {:padding-left (px 0)
    :text-align "center"
    :margin-top (px 25)
    :display "block"}])


(defn side-nav-subpage-elements-styles []
  [:.side-nav-subpage-elements
   {:font-size (px 12.5)
    :margin-top (px 10)
    :display "none"
    :cursor "pointer"
    :color "#333"}
   [(s/& s/hover) {:color "#000"}]])

(defn side-nav-arrow-selector-skeleton [id clicked?]
  (let [transform (if clicked? "rotate(45deg)" "rotate(-45deg)")
        exist? (if clicked? "block" "none")
        show? (if clicked? "100%" "0%")
        l (print "l" id clicked?)]
    [[(-> (s/nth-child id)
         side-nav-container-2
         (s/> side-nav-elements)
         (s/> side-nav-arrow)) {:transform transform
                                :transition "transform 0.5s"}]
     [(-> (s/nth-child id)
          side-nav-container-2
          (s/> side-nav-subpage-container)
          (s/> side-nav-subpage-elements)) (if clicked?
                                             {:display "block"}
                                             {:display "none"})]]))

(defn reset-db []
  (let [handles (map #(vector :homepage/side-nav-arrow %) [:2 :3 :4 :5])]
    (doseq [[prefix id :as handle] handles
            :let [val (get @(re-frame/subscribe [prefix]) id)]
            :when val]
      (re-frame/dispatch handle))))

(defn side-nav-selector []
  (let [clicked-list @(re-frame/subscribe [:homepage/side-nav-arrow])
        clicked-ham? @(re-frame/subscribe [:homepage/hamburger-menu])
        reset? (if clicked-ham? nil (reset-db))]
    (->> (for [[k v] clicked-list]
          (side-nav-arrow-selector-skeleton k v))
        (into []))))


(defn side-nav []
  [(side-nav-background)
   (side-nav-container-1)
   (side-nav-container-2-styles)
   (side-nav-elements-styles)
   (side-nav-arrow-styles)
   (side-nav-subpage-container-styles)
   (side-nav-subpage-elements-styles)
   (side-nav-selector)])
