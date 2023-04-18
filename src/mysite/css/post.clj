(ns mysite.css.post
  (:require [garden.units :refer [px]]
            [garden.selectors :as s] 
            [garden.def :refer [defstylesheet]]
            [garden.stylesheet :refer [at-media]]))

(s/defclass updates)

(def post-content-container 
  [:#post-content-container {:width      (px 750)                                                   :min-height "100vh"
                             :word-break "break-word"
                             :margin     "auto"
                             :margin-top (px 15)}])

(def post-title
  [:#post-title {:text-align  "left"
                 :font-family "WorkSans"
                 :font-size (px 37)
                 ;:color "#903";
                                        ;:color "#DC143C"
                 :color "black"
                 }])

(def post-byline 
  [:#post-byline {:color      "grey"
                  :text-align "left"
                  :font-family "WorkSans"
                  :font-weight "500"}])


(def post-intro-container
  [:#post-intro-container {:position   "relative"
                           :z-index    -1
                           :margin-top (px 30)}
   [(s/& s/before) {:content          "''"
                    :float            "left"
                    :width            (px 5)
                    :position         "absolute"
                    :height           "100%"
                    :background-color "#D0D0D0"
                    :margin-left      (px 8)}]])

(def post-intro-text 
  [:#post-intro-text {:margin-left (px 20)
                      :padding-top (px 8)
                      :padding-bottom (px 8)
                      :color       "#B0B0B0"
                      :font-family "serif";"Times New Roman";"WorkSans"
                      :font-size   (px 20)}])

(def post-content 
  [:#post-content {:font-size      (px 16)
                   :font-family    "WorkSans"
                   :margin-top     (px 35)
                   :line-height    (px 26)
                   :padding-bottom (px 30)}])

(def first-letter
  [:#post-content.not-poem {}
   [((s/p s/first-of-type) s/first-letter) 
    {:float         "left"
     :font-size     (px 75)
     :color         "#903" ;"#DC143C"
     :font-family   "Georgia"
     :line-height   (px 40)
     :padding-top   (px 4)
     :padding-right (px 8)
     :padding-left  (px 3)}]])

(def colored-post-link
  [:.colored-post-link {:color "#DC143C"}
   [(s/& s/hover) {:color "black"
                   :text-decoration "underline"
                   :cursor "pointer"}]])
(def captions
  [:figcaption
   {:font-style "italic"
    :font-size  (px 14)
    :line-height (px 25)
    :clear "both"}])

(def footnotes
  [:sup {:font-size (px 14)}])

(def media-query-1
  (at-media {:max-width (px 900)}
            [:#post-content-container {:width "90%"}]))

(def media-query-2
  (at-media {:max-width (px 600)}
            [[:.get-bigger {:width "100% !important"}]
             [:.get-bigger-2 {:width "80% !important"}]]))

(def media-query-3
  (at-media {:max-width (px 500)}
            [[:#post-content {:font-size (px 15)}]
             [:.two-images {:display "block"
                            :margin  "auto"
                            :width   "95%"
                            :margin-bottom (px 5)}]
            
             ;;[:.MathJax {:font-size "15px !important"}]
                                        ; [:.post-image {:width "10%" :display "block"}]
             [:figcaption {:font-size (px 12)
                           :line-height (px 20)}]]))

(def updates-styles
  [[(-> (s/last-child)
       (s/not)
       updates) {:margin-bottom (px 8)}]
   [updates {:font-size (px 13)}]])


(defstylesheet css
  {:output-to "resources/public/css/post.css"}
  (list
    post-content-container
    post-title
    post-byline
    post-intro-container
    post-intro-text
    post-content
    first-letter
    colored-post-link
    captions
    footnotes
    ;;[:.MathJax {:font-size "18px !important"}]
    [:sup {:padding-top "100px" :line-height "0px"}]
    [:.two-images {:width "48%"}]
    media-query-1
    media-query-2
    media-query-3
    updates-styles
    ;;[:figcaption {:font-size (px 11) :line-height "normal"}]
    ))

