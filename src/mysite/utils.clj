(ns mysite.utils
  (:require [clj-time.format :as f]))

(defn back-into-map [kv-vec]
  (->> kv-vec
       (flatten)
       (apply hash-map)))

(defn parse-date [date]
  (let [formatter (f/formatter "MM/DD/YYYY")]
    (f/parse formatter date)))
