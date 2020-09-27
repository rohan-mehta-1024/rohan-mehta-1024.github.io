(ns personal-website.views.preview-html)

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
                         (= type "computer-science") (str "/" type "/" id)
                         (= type "synthetic-biology") (str "/" type "/" id)
                         :else (str "/" type "s" "/" id))
             :on-click (fn [] (.scrollTo js/window (clj->js {:top 0 :left 0 :behavior "smooth"})))
             }
         title]
        [:em {:class "preview-text"} show]]))
