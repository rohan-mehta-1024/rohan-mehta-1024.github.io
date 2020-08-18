(ns personal-website.styles
  (:require [re-frame.core :as re-frame]
            [herb.core :as herb]))

(defn clock []
  {:color @(re-frame/subscribe [:color])
   :font "75px WorkSans, sans-serif"
   :text-align "center"})
