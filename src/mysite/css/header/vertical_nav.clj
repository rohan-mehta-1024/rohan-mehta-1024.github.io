(ns mysite.css.header.vertical-nav
  (:require [garden.units :refer [px]]
            [garden.selectors :as s]))

(s/defclass side-nav-container-2)
(s/defclass side-nav-subpages)

(def side-nav-background
   [:#side-nav-background
    {:background  "white";"#fffff8";"#DC143C";"white"
     :height "110%"
     :margin-top (px -100)
     :display "none"
     :width "0%"
     :position "absolute"
     :right (px 0)
     :transition "width 0.75s ease-in-out"
     ;:position "absolute"
     :z-index 2}])

(def side-nav-background-active
  [:#side-nav-background.active {:width "35%" :display "block" }
    [:#side-nav-container-1
     {:opacity "100%"
      :transition-delay "0.25s"}]])

(def side-nav-container-1 
  [:#side-nav-container-1
   {:margin-top (px 185)
    :padding (px 0)
    :opacity "0%"
    :transition "0.25s"
    :transition-delay "0.25s"}])

(def side-nav-container-2-styles
 [:.side-nav-container-2
  {:padding-left (px 0)
   :margin-top (px 35)
   :text-align "center"}])


(def side-nav-subpages-styles
  [:.side-nav-subpages
   {:font-size (px 15)
    :font-family "WorkSans"
    :text-transform "uppercase"
    :color "#333"
    :margin-top (px 40)
    :text-align "center"}

   [(s/& s/hover)
    {:color "#000"
     :cursor "pointer"}]

   [(s/& s/after)
    {:content "''"
     :width "50%"
     :margin-top (px 20)
     :height (px 1)
     :background-color "black"
     :display "block"
     :margin "auto"}]])

(def side-nav-arrow
  [:.side-nav-arrow
   {:display "inline-block"
    :position "relative"
    :margin "0px 0px 0px 8px"
    :border "solid black"
    :border-width "0 2px 2px 0"
    :padding (px 3)
    :text-align "center"
    :transform "rotate(-45deg)"}])

(def side-nav-sub-subpage-container
  [:.side-nav-sub-subpage-container
   {:padding-left (px 0)
    :text-align "center"
    :margin-top (px 25)
    :display "none"}])

(def side-nav-sub-subpages
  [:.side-nav-sub-subpage
   {:font-size (px 12.5)
    :font-family "WorkSans"
    :margin-top (px 10)
    :display "block"
    :cursor "pointer"
    :color "#333"}
   [(s/& s/hover) {:color "#000"}]])

(def side-nav-subpages-active
  [:.side-nav-subpages.active {}
    [:.side-nav-arrow
    {:transform "rotate(45deg)"}]
    [:.side-nav-sub-subpage-container {:display "block"}]])

(def reveal-sub-subpages 
  [(s/+ :.side-nav-subpages.active s/ul) {:display "block"}])

(def css
  (list
   side-nav-background
   side-nav-background-active
   side-nav-container-1
   side-nav-container-2-styles
   side-nav-subpages-styles
   side-nav-arrow
   side-nav-subpages-active
   side-nav-sub-subpage-container
   side-nav-sub-subpages
   reveal-sub-subpages))
