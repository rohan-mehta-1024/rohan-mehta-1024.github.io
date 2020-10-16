(ns personal-website.utils)

(defn link [text link]
  [:a {:class "post-links"
       :href link
       :target "_blank"} text])


(defn scroll-to-top []
 (let [obj (.getElementById js/document "top")
       scroll (fn [] (.scrollIntoView obj))]
   (js/setTimeout scroll 5)))

(defn format-title [title]
   (->> (clojure.string/split title " ")
        (map clojure.string/lower-case)
        (clojure.string/join "-")))

(defn unformat-title [title]
  (->> (clojure.string/split title "-")
       (map clojure.string/capitalize)
       (clojure.string/join " ")))
