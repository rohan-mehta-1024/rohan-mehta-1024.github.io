
(ns mysite.css.header.media-queries
  (:require [garden.units :refer [px]]
            [garden.selectors :as s]
            [garden.stylesheet :refer [at-media]]))

(s/defclass lines)

(def media-query-1
  (at-media {:max-width (px 950)}
            [;[:header {:text-align "center"}]
             ;[:#my-name {:font-size (px 35) :margin-left (px 10)}]
             [:#subpage-container-1 {:display "none"}]
             [:#search-img-1 {:display "none"}]
             [:#ham-menu {:display "inline-block"}]
             ]))

(def media-query-2
  (at-media {:min-width (px 1090)}
      [:#side-nav-background {:display "none"}]))

(def media-query-3
  (at-media {:max-width (px 750)}
            [
             ;[:header {:height (px 77)}]
         ;[:#my-name {:font-size (px 30)}]
         ;[:#ham-menu.active {}
          ; [(lines (s/nth-child :1)) {:transform "translateY(16px) rotate(45deg)"}]
           ;[(lines (s/nth-child :2)) {:opacity "0%"}]
           ;[(lines (s/nth-child :3)) {:transform "translateY(-14px) rotate(-45deg)"}]]
        ; [:.lines {:width (px 40) :height (px 3) :margin-top (px 11)}]
         [:#side-nav-background.active {:width "100%"}]]))



(def media-query-4
  (at-media {:max-width (px 500)}
            [[:#my-name {:margin-left (px 5)}]]))

(def css
  (list
    media-query-1
    media-query-2
    media-query-3
    ;media-query-4
    ))
