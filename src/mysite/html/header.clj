(ns mysite.html.header
  (:require [clojure.string :as string]
            [com.rpl.specter :refer :all]
            [mysite.config :refer [site-structure]]))

(defn format-sub-subpage-url [subpage sub-subpage]
  (let [head (str "/" (string/lower-case subpage) "/")]
    (as-> sub-subpage $
      (string/lower-case $)
      (string/split $ #" ")
      (string/join "_" $)
      (str head $ "/index.html#myname"))))

(defn format-subpage-url [subpage]
  (-> (str "/" subpage)
      string/lower-case
      (string/replace #" " "_")))


(defn get-sub-subpage [subpage sub-subpage]
  [:a {:href (format-sub-subpage-url subpage sub-subpage)
       :class "sub-subpage"} sub-subpage])

(defn get-sub-subpages [subpage sub-subpages]
  (->> (for [sub-subpage sub-subpages]
         (get-sub-subpage subpage sub-subpage))
       (cons (if (empty? sub-subpages)
              {} {:class "sub-subpage-container"}))
       (cons :ul)
       (into [])))

(defn get-subpage [subpage sub-subpages]
  [:li {:class "subpage-container-2"}
   [:div {:class "subpage-container-3"}
    [:a {:class "subpages"
         :href (if (= subpage "Writings")
                 nil
                 (format-subpage-url subpage))}
     subpage]
    (when (seq sub-subpages)
      (get-sub-subpages subpage sub-subpages))]])

(def subpages
  (as-> (for [[subpage sub-subpages] site-structure]
          (get-subpage subpage sub-subpages)) $
    (cons {:id "subpage-container-1"} $)
    (cons :ul $)
    (into [] $)
    [:nav $]))

(def hamburger-menu 
  [:div {:id "ham-menu"}
   [:div {:class "lines"}]
   [:div {:class "lines"}]
   [:div {:class "lines"}]])

(defn get-side-nav-sub-subpages [subpage sub-subpages]
  (->> (for [sub-subpage sub-subpages]
         [:a {:class "side-nav-sub-subpage"
              :href (format-sub-subpage-url subpage sub-subpage)}
          sub-subpage])
       (cons {:class "side-nav-sub-subpage-container"})
       (cons :ul)
       (into [])))

(defn get-side-nav-subpage [subpage sub-subpages]
  [[:a {:class "side-nav-subpages"
        :href  (if (= subpage "Writings")
                 nil
                 (format-subpage-url subpage))}
    subpage]
   (when (seq sub-subpages)
     (get-side-nav-sub-subpages subpage sub-subpages))])

(def side-nav 
  (as-> (for [[subpage sub-subpages] site-structure]
          (->> (get-side-nav-subpage subpage sub-subpages)
               (cons {:class "side-nav-container-2"})
               (cons :ul)
               (into []))) $
       (cons {:id "side-nav-container-1"} $)
       (cons :div $)
       (into [] $)
       [:div {:id "side-nav-background"} $]))

(def html
  [:header
   [:h1 {:id "my-name"}
    [:a {:href "/"} "Rohan Mehta"]]
   subpages
   hamburger-menu
   side-nav])
