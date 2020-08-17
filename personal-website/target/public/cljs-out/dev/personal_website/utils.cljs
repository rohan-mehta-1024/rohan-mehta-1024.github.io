(ns personal-website.utils
  (:require [re-frame.core :as re-frame.core]))

(def sub-and-deref (comp deref re-frame/subscribe))
