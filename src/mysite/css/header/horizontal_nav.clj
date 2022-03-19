(ns mysite.css.header.horizontal-nav
  (:require [garden.units :refer [px]]
            [garden.stylesheet :refer [at-font-face]]
            [garden.selectors :as s]))

(s/defclass subpage-container-2)
(s/defclass subpages)

(s/defclass sub-subpage-container)
(s/defclass sub-subpage)
(s/defclass subpage-container-3)

(defn fonts []
  [(at-font-face
     {:font-family "WorkSansBold"}
     {:src "url(/fonts/WorkSans-SemiBold.ttf)"})
   (at-font-face
     {:font-family "WorkSans"}
     {:src "url(/fonts/WorkSans-Regular.ttf)"})
   (at-font-face
     {:font-family "YatraOne"}
     {:src "url(/fonts/YatraOne-Regular.ttf)"})
   ]

  )

(def global
  [[:html ^:prefix
    {:text-size-adjust "100%"
     :tap-highlight-color "rgba(0,0,0,0)"
     :font-smoothing "antialiased"
     :text-rendering "optimizeLegibility"
     :scroll-padding-top (px 70)}]

  
   [:body
    {:margin "0"
     :min-height "100vh"
     :display "flex"
     :flex-direction "column"
     :background-color "#fffff8"
     :z-index 1
     :overflow-y "scroll"
    
    }]

   [:body.active {:position "fixed"
                  :overflow-y "scroll"
                  :width "100%"
                  ;:overflow "hidden"
                  }]

   [:header
    {:width "100%"
                                       ; :background "white"
     
     :background-color "#fffff8"
     ;:position "fixed"
     :top (px 10)
     :height (px 90)
     }

    [(s/& s/after)
     {:content "''"
      :display "block"
      :height (px 1)
      :width "100%"
                                        ;:background-color "black"
      :background-color "#E0E0E0"
      }]]

   [:ul {:list-style-type "none"}]
   [:nav {:float "right"}]
   [:a {:text-decoration "none" :color "#333"}]])

(def my-name
  [:#my-name
   {:display "inline-block"
    :font-family "WorkSansBold"
    :font-size (px 35)
    :margin-top (px 20)
    :margin-bottom (px 15)
    :margin-left (px 25)
    :margin-right (px 0)
    }])

(def subpage-container-1
  [:#subpage-container-1
   {;:margin-right (px 15)
    :margin-top (px 32)
    :padding-left (px 0)
    :display "inline-block"}])

(def subpage-container-2-styles
  [:.subpage-container-2
   {:text-align "center"
    :display "inline-block"
    :vertical-align "top"
    :position "relative"
    :width "17vw";(px 145)
    :margin "auto"
    :margin-bottom (px 0)
    :padding-bottom (px 0)
    
    }

;;   [(subpages s/after) {:content "''"
;;                        :display "block"
;;                        :height (px 1.5)
;;                        :width "0%"
;;                        :background-color "#000"
;;                        :transition "width 0.5s ease-in-out"}]

   [(s/hover subpages) {:color "#000"}]])

(def subpage-container-3-styles
  [:.subpage-container-3
   {:display "inline-block"
;    :padding (px 5)
    :cursor "pointer"}])

(def subpages-styles
  [:.subpages
   {:font-size (px 15)
    :font-family "WorkSans"
    :text-transform "uppercase"
    :color "#333"
    :display "inline-block"}])

(def sub-subpage-container-styles
  [:.sub-subpage-container
   {:width (px 110)
    :height (px 47)
    :padding (px 10)
    :position "relative"
    :border "2px solid black"
    :text-align "center"
    :margin-right "20%"
    :margin-top (px 15)
    :border-radius (px 10)
    :background-color  "#fffff8";"#DC143C";"white"
    :margin-bottom (px 0)
    :display "none"}

   [(s/+ s/a s/a) {:margin-top (px 5)}]

   [(s/& s/before)
    {:content "''"
     :position "relative"
     :margin "auto"
     :top (px -38)
     :padding-bottom (px -10)
     :height (px 0)
     :border-width (px 8)
     :border-style "solid"
     :width "100%"
     :border-color "transparent transparent black transparent"}]])
 
(def custom-sub-subpage-container
  [(-> (s/nth-child :3)
       subpage-container-2
       (s/> subpage-container-3)
       (s/> sub-subpage-container)) {:height (px 30) ;; CHANGE LATER
                                     :width (px 110)}])

(def sub-subpage-styles
  [:.sub-subpage
   {:font-size (px 12)
    :font-family "WorkSans"
    :display "block"
    :cursor "pointer"
    :color "#333"
    :margin-top (px -20)}

   [(s/& s/hover) {:color "#000"}]])

(def hovering
  [[(s/> (s/hover subpage-container-3) sub-subpage-container) {:display "block"}]
   [((-> (s/nth-child :3)
         subpage-container-2
         (s/> subpage-container-3)
         s/hover
         (s/> subpages)) s/after)

    ;((s/> (s/hover subpage-container-3) subpages) s/after)
    {:width "100%"}
    ]
   [((s/> (s/hover subpage-container-3) subpages)) {:color "#000"}]])

(def colored-text-link
  [:.colored-text-link
   {:color       "#903";"#DC143C"
    :font-family "WorkSansBold"}
   [(s/& s/hover)
    {:cursor "pointer"
     :color  "black"}]])

(def css
  (list
   (fonts)
   global
   my-name
   subpage-container-1
   subpage-container-2-styles
   subpages-styles
   subpage-container-3-styles
   sub-subpage-container-styles
   custom-sub-subpage-container
   sub-subpage-styles
   hovering
   colored-text-link
   [:.scrollbox {:visibility "hidden"}]))
