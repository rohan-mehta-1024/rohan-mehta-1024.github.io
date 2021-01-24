(ns personal-website.views.preview-html
  (:require [re-frame.core :as re-frame]
            [personal-website.utils :as utils]))

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

(defn format-specifier [date type tags]
  (let [page @(re-frame/subscribe [:kee-frame/route])
        homepage? (if (= (:path page) "/") true false)
        width (. js/window -innerWidth)]
  (if homepage?
    (if (<= width 450)
      (str date " | " type)
      (str date " | " type " | " tags))
    (str date " | " type " | " tags))))

(defn preview [post-object homepage?]
  (let [{:keys [title date content show tags type id] :as post} post-object
        suffix (if (= type "short-story") "short-stories" (str type "s"))
        new-type (format-type type)
        tags (format-tags tags)

        header (format-specifier date new-type tags)]
    [:div
        [:p {:class "preview-header"} header]
        [:a {:class "preview-title"
             :href (cond (= type "paper") (post :paper-link)
                         (= type "computer-science") (str "/#/" type "/" (utils/format-title title))
                         (= type "synthetic-biology") (str "/#/" type "/" (utils/format-title title))
                         :else (str "/#/" type "s" "/"  (utils/format-title title)))
             :on-click utils/scroll-to-top}
         title]
        [:p {:class "preview-text"} (if homepage? show "")]]))
