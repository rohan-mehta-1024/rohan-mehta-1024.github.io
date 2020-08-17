(ns personal-website.styles.homepage-styles
  (:require [re-frame.core :as re-frame]
            [herb.core :refer [defglobal defkeyframes defgroup]]
            [garden.units :refer [px vw]]
            [personal-website.subs :as subs]))

(comment(defn header []
  ^{:media {{:screen :only :max-width (px 925)} {:text-align "center"}}}
   {:width "100%" :position "fixed" :background "white"})

(defn my-name []
  ^{:media {{:screen :only :max-width (px 925)} {:font-size (px 35)}
            {:screen :only :max-width (px 400)} {:font-size (px 25)}}}
   {:display "inline-block" :font-family "WorkSansBold"
    :font-size (px 35) :margin-left (px 45)})

(defn subpage-text []
  ^{:media {{:screen :only :max-width (px 925)} {:display "none"}}}
  ^{:pseudo {:hover {:color "#000" :cursor "pointer"}
             :after {:content "''" :display "block" :height (px 1.5) :width "0%"
                     :background-color "#000" :transition "width 0.5s ease"}
             :hover:after {:width "100%"}}}

  {:font-size (px 15) :text-transform "uppercase"
   :color "#333" :visibility "visible" :display "inline-block"})

(defgroup subpages
  {:container {:margin-right (px 40) :margin-top (px 35)}
   :text-container-1 {:display "inline-block" :position "relative"
                      :margin-left (vw 8) :text-align "center"}
   :text-container-2 ^{:pseudo {:hover {:width (px 50) :height (px 50)}}} {}
   :subpage-text (subpage-text)
   :tooltips {:border-bottom "1px solid black"
              :width (px 0) :height (px 0)
              :top (px 15) :background-color "blue"
              :border-radius (px 100) :z-index "1"}})

(defn hamburger []
  ^{:media {{:screen :only :max-width (px 925)} {:margin-top (px 19) :display "inline-block"}
            {:screen :only :max-width (px 400)} {:margin-top (px 15)}}}

  {:position "absolute" :right (px 15)
   :width (px 55) :height (px 55)
   :margin-top (px 26) :cursor "pointer"
   :display "none" :transition "all 0.3s ease-in-out"})

(defn lines []
  ^{:media {{:screen :only :max-width (px 925)} {:height (px 4) :width (px 43) :margin-top (px 10)}
            {:screen :only :max-width (px 400)} {:height (px 2) :width (px 30) :margin-top (px 8)}}}

  {:margin "auto" :margin-top (px 12)
   :width (px 50) :height (px 5)
   :background "black" :border-radius (px 0)
   :transition "transform 0.3s, opacity 0.1s ease-in-out"})

(defn line1 []
  (let [clicked @(re-frame/subscribe [:homepage/hamburger-menu])]
    (if clicked
      {:transform "translateY(14px) rotate(45deg)"}
      {})))

(defn line2 []
  (let [clicked @(re-frame/subscribe [:homepage/hamburger-menu])]
     (if clicked {:opacity "0"} {})))

(defn line3 []
  (let [clicked @(re-frame/subscribe [:homepage/hamburger-menu])]
    (if clicked
      {:transform "translateY(-14px) rotate(-45deg)"}
      {})))

(defkeyframes slide-first
  [:from {:width "0%"}]
  [:to {:width "35%"}])

(defkeyframes slide-second
  [:from {:width "40%"}]
  [:to {:width "100%"}])

(defn side-nav-background []
  (let [clicked @(re-frame/subscribe [:homepage/hamburger-menu])
        static ^{:media {{:screen :only :min-width (px 925)} {:display "none"}
                         {:screen :only :max-width (px 750)}
                         {:animation [[slide-second "0.5s"]]
                          :width "100%"}}}
                {:background "white" :height "100%" :position "fixed"
                 :right (px 0) :display "none"}]
    (if clicked
      (assoc static :display "inline-block"
                    :animation [[slide-first "0.5s"]]
                    :width "35%")
      (assoc static :display "none"))))

(defgroup side-nav-menu
  {:background (side-nav-background)
   :container {:margin-top (px 100)}
   :subpage-text ^{:pseudo {:hover {:color "#000" :cursor "pointer"}}}
              {:font-family "WorkSans" :font-size (px 15)
               :color "#333" :margin-top (px 45)
               :text-transform "uppercase"}})

(defglobal global
  [:ul {:list-style-type "none"}]
  [:nav {:float "right" :passing-right (px 25)}]
  [:body {:font-family "WorkSans"
          :background-color "#F8F8F8"
          :margin "0" :padding "0"}]))
