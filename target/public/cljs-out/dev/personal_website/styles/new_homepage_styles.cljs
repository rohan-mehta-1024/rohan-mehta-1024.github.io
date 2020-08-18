(ns personal-website.styles.new-homepage-styles
  (:require-macros [garden.def :refer [defkeyframes]])
  (:require [re-frame.core :as re-frame]
            [personal-website.views.new-homepage-views]
            [garden.selectors :as s]
            [garden.core :refer [css]]
            [garden.units :refer [px vw]]
            [garden.stylesheet :refer [at-media]]
            [personal-website.subs :as subs]
            [personal-website.db :as db]))

(s/defclass subpage-container-2)
(s/defclass subpage-elements)
(s/defclass subpage-tooltips)
(s/defclass side-nav-elements)
(s/defclass side-nav-arrow)
(s/defclass side-nav-container-2)
(s/defclass side-nav-subpage-container)
(s/defclass side-nav-subpage-elements)

(defn global-styles []
  [[:header {:width "100%" :background "white"}]
   [:nav {:float "right"}]
   [:ul {:list-style-type "none"}]
   [:body {:font-family "WorkSans"
           :background-color "#F8F8F8"
           :margin "0" :padding "0"}]])

(defn my-name []
  [:#my-name
   {:display "inline-block" :font-family "WorkSansBold"
    :font-size (px 35) :margin-left (px 45)}])





(defn subpage-container-1 []
  [:#subpage-container-1  {:margin-right (px 25) :margin-top (px 37) :display "inline-block"}
   [(s/+ subpage-container-2 subpage-container-2) {:margin-left (vw 5)}]])

(defn subpage-container-2-styles []
    [:.subpage-container-2
     {:text-align "center" :display "inline-block" :position "relative"}])

(defn subpage-elements-styles []
  (let [[hovering? id] @(re-frame/subscribe [:homepage/subpage-hover])
        id (-> id str keyword)
        color (if hovering? "#000" "#333")
        cursor (if hovering? "pointer" "auto")
        width (if hovering? "100%" "0%")]
    [:.subpage-elements
     {:font-size (px 15) :font-family "WorkSans" :text-transform "uppercase"
      :color color :cursor cursor :display "inline-block"}
     [(s/& s/after) {:content "''" :display "block"
                     :height (px 1.5) :width (px 0)
                     :background-color "#000"
                     :transition "width 0.5s ease-in-out"}]]))

(defn subpage-tooltips-styles []
    [:.subpage-tooltips
     {:width (px 110) :height (px 50) :padding (px 10) :position "relative"
      :border "2px solid black"  :text-align "center" :margin-top (px 15)
      :border-radius (px 10) :opacity "0%"}
      [(s/+ s/li s/li) {:margin-top (px 5)}]
      [(s/& s/after) {:content "''" :position "relative" :top (px -90)
                      :border-width (px 8) :border-style "solid"
                      :border-color "transparent transparent black transparent"}]])

(defn subpage-tooltip-elements []
  [:.subpage-tooltip-elements
   {:font-size (px 12) :font-family "WorkSans"
    :cursor "pointer" :color "#333"}
   [(s/& s/hover) {:color "#000"}]])

(defn subpage-selector []
  (let [[hovering? id] @(re-frame/subscribe [:homepage/subpage-hover])
        show? (if hovering? "100%" "0%")
        child (-> id str keyword)]
  [[(-> (s/nth-child child)
        subpage-container-2
        (s/> subpage-tooltips)) {:opacity show?}]
   [(-> (s/nth-child child)
        subpage-container-2
        (s/> (subpage-elements s/after))) {:width show?}]]))

(defn subpages []
  [(subpage-container-1)
   (subpage-container-2-styles)
   (subpage-elements-styles)
   (subpage-tooltips-styles)
   (subpage-selector)
   (subpage-tooltip-elements)])





(defn ham-menu []
  [:.ham-menu
   {:position "absolute" :right (px 25) :top (px 0)
    :width (px 55) :height (px 55) :cursor "pointer"
    :display "none" :transition "all 0.3s ease-in-out"}])

(defn lines []
  (let [clicked? @(re-frame/subscribe [:homepage/hamburger-menu])
        transform-1 "translateY(14px) rotate(45deg)"
        transform-2 "translateY(-14px) rotate(-45deg)"]
  [:.lines
   {:margin "auto" :margin-top (px 12) :width (px 50)
    :background-color "black" :height (px 5) :border-radius (px 0)
    :transition "transform 0.3s, opacity 0.1s ease-in-out"}
   [(s/& (s/nth-child :1)) (if clicked? {:transform transform-1} {})]
   [(s/& (s/nth-child :2)) (if clicked? {:opacity "0%"} {})]
   [(s/& (s/nth-child :3)) (if clicked? {:transform transform-2} {})]]))

(defn hamburger-button []
  [(ham-menu)
   (lines)])





(defn side-nav-background []
  (let [clicked? @(re-frame/subscribe [:homepage/hamburger-menu])
        width (if clicked? "35%" "0%")]
   [:#side-nav-background
    {:background "#E8E8E8" :height "100%" :width width
     :position "fixed" :right (px 0)
     :transition "width 0.75s ease-in-out"}]))

(defn side-nav-container-1 []
  (let [clicked? @(re-frame/subscribe [:homepage/hamburger-menu])
        show? (if clicked? "100%" "0%")
        delay (if clicked?  "0.35s" "0.25s")]
  [:#side-nav-container-1 {:margin-top (px 100) :padding (px 0)
                           :opacity show? :transition "0.25s"
                           :transition-delay delay}]))

(defn side-nav-container-2-styles []
  [:.side-nav-container-2
   {:padding-left (px 0) :text-align "center"}])


(defkeyframes slide
  [:from {:top (px 0)}]
  [:to {:top (px 100)}])

(defn side-nav-elements-styles []
  [:.side-nav-elements
   {:font-size (px 15) :font-family "WorkSans"
    :text-transform "uppercase" :color "#333"
    :margin-top (px 40) :text-align "center"}
   [(s/& s/hover) {:color "#000" :cursor "pointer"}]
   [(s/& s/after) {:content "''" :width "50%" :margin-top (px 20)
                   :height (px 1) :background-color "black"
                   :display "block" :margin "auto"}]])


(defn side-nav-arrow-styles []
    [:.side-nav-arrow
     {:display "inline-block" :position "relative"
      :margin "0px 0px 2px 10px" :border "solid black"
      :border-width "0 2px 2px 0" :padding (px 3) :text-align "center"}])

(defn side-nav-subpage-container-styles []
  [:.side-nav-subpage-container
   {:padding-left (px 0) :text-align "center"
    :margin-top (px 25) :display "block"}])


(defn side-nav-subpage-elements-styles []
  [:.side-nav-subpage-elements
   {:font-size (px 12.5) :margin-top (px 10)
    :display "none" :cursor "pointer"
    :opacity "0%" :color "#333"}
   [(s/& s/hover) {:color "#000"}]])


(defkeyframes fade-in
  [:from
   {:opacity "0%"}]
  [:to
   {:opacity "100%"}])


(defkeyframes fade-out
  [:from
   {:opacity "100%"}]
  [:to
   {:opacity "0%"}])


(defn side-nav-arrow-selector-skeleton [id clicked?]
  (let [transform (if clicked? "rotate(45deg)" "rotate(-45deg)")
        exist? (if clicked? "block" "none")
        animate? (if clicked? fade-in fade-out)
        show? (if clicked? "100%" "0%")]
    [[(-> (s/nth-child id)
         side-nav-container-2
         (s/> side-nav-elements)
         (s/> side-nav-arrow)) {:transform transform
                                :transition "transform 0.5s"}]
     [(-> (s/nth-child id)
          side-nav-container-2
          (s/> side-nav-subpage-container)
          (s/> side-nav-subpage-elements)) (if clicked?
                                             {:display "block"
                                              :animation [[fade-in "1s"]]
                                              :opacity "100%"
                                              }
                                             {;:animation [[fade-out "0.25s"]]
                                              :display "none"})]]))

(defn reset-db []
  (let [handles (map #(vector :homepage/side-nav-arrow %) [:1 :2 :3 :4])]
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
   fade-in
   fade-out
   (side-nav-subpage-container-styles)
   (side-nav-subpage-elements-styles)
   (side-nav-selector)])





(defn media-query-1 []
  (at-media {:max-width (px 1070)}
    (let [clicked? @(re-frame/subscribe [:homepage/hamburger-menu])])
    [[:header {:text-align "center"}]
     [:#my-name {:font-size (px 35) :margin-left (px 0)}]
     [:#subpage-container-1 {:display "none"}]
     [:.ham-menu {:margin-top (px 19) :display "inline-block"}]
     [:.lines {:height (px 4) :width (px 43) :margin-top (px 10)}]]))

(defn media-query-2 []
  (at-media {:min-width (px 1070)}
    [:#side-nav-background {:display "none"}]))

(defn media-query-3 []
  (at-media {:max-width (px 700)}
      (let [clicked? @(re-frame/subscribe [:homepage/hamburger-menu])]
        [[:#my-name {:font-size (px 30)}]
         [:.ham-menu {:margin-top (px 15)}]
         [:.lines {:width (px 40) :height (px 3)}
          [(s/& (s/nth-child :1)) (if clicked? {:transform "translateY(13px) rotate(45deg)"} {})]
          [(s/& (s/nth-child :3)) (if clicked? {:transform "translateY(-13px) rotate(-45deg)"} {})]]
         [:#side-nav-background (if clicked? {:width "100%"} {})]])))

(defn media-queries []
  [(media-query-1)
   (media-query-2)
   (media-query-3)])



(defn homepage-styles []
  [(global-styles)
   (my-name)
   (subpages)
   (hamburger-button)
   ;ham-menu
   (side-nav)
   (media-queries)
   ;side-nav-elements
   ])
