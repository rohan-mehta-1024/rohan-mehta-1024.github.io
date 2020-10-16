(ns personal-website.views.preview-html
  (:require [personal-website.utils :as utils]))

(defn format-type [type]
  (->> (clojure.string/split type "-")
       (map clojure.string/capitalize)
       (clojure.string/join " ")))

(defn format-tags [tags]
  (->> tags (map (fn [x] (clojure.string/split x " ")))
            (map (comp (partial clojure.string/join " ")
                       (partial map clojure.string/capitalize)))
            flatten
            (interpose ", ")
            clojure.string/join))


(defn preview [post-object homepage?]
  (let [{:keys [title date content show tags type id] :as post} post-object
        suffix (if (= type "short-story") "short-stories" (str type "s"))
        new-type (format-type type)
        specifier (if homepage? (str new-type " | ") "")
        tags (format-tags tags)
        header (str date " | " specifier tags)]
    [:div
        [:p {:class "preview-header"} header]
        [:a {:class "preview-title"
             :href (cond (= type "paper") (post :paper-link)
                         (= type "computer-science") (str "/#/" type "/" (utils/format-title title))
                         (= type "synthetic-biology") (str "/#/" type "/" (utils/format-title title))
                         :else (str "/#/" type "s" "/"  (utils/format-title title)))
             :on-click utils/scroll-to-top}
         title]
        [:em {:class "preview-text"} show]]))
