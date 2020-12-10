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

(defn scroll-to-this [el-id]
  (let [obj (.getElementById js/document el-id)]
    (.scrollIntoView obj)))

(defn make-footnote [num footnote-id el-id]
  [:sup {:class "post-links"
         :id footnote-id
         :on-click (fn [] (scroll-to-this el-id))
         :style {:padding-top "100px"
                 :font-size "15px"
                 :line-height "0px"}} num])

(defn bold [text]
  [:span {:style {:font-family "WorkSansBold"}} text])
