(ns mysite.css.header.header
  (:require [garden.def :refer [defstylesheet]]
            [mysite.css.header.horizontal-nav :as horizontal]
            [mysite.css.header.ham-menu :as ham-menu]
            [mysite.css.header.vertical-nav :as vertical]
            [mysite.css.header.media-queries :as queries]))


(defstylesheet css
  {:output-to "resources/public/css/header.css"
   :vendors ["webkit"]}
  (concat horizontal/css
          ham-menu/css
          vertical/css
          queries/css))
