(ns personal-website.views.homepage-views.nav-bar
  (:require [re-frame.core :as re-frame]
            [personal-website.db :as db]
            [personal-website.subs :as subs]))

(def subpage-data
  [["About"
    ["Current Endeavors"
     "Accomplishments"
     "placeholder"]]
   ["Projects"
    ["Electronics"
     "Synthetic Biology"
     "Computer Science"]]
   ["Writings"
    ["Blog Posts"
     "Personal Essays"
     "Academic Papers"]]
   ["Readings"
    ["All Time Favorites"
     "Book Reviews"
     "placeholder"]]])

(defn tooltips [sub-subpages]
  (->> (for [sub-subpage sub-subpages
             :let [placeholder? (= sub-subpage "placeholder")
                   show? (if placeholder? "0%" "100%")]]
         [:li {:style {:opacity show?}
               :class "subpage-tooltip-elements"}
              sub-subpage])
       (cons {:class "subpage-tooltips"})
       (cons :ul)
       (into [])))

(defn subpage-skeleton [text id]
  [:li {:class "subpage-container-2"
        :onMouseLeave (fn [] (re-frame/dispatch [:homepage/subpage-hover [false id]]))}
    [:div {:class "subpage-elements"
           :onMouseEnter (fn [] (re-frame/dispatch [:homepage/subpage-hover [true id]]))}
     text]
  (->> [(dec id) 1]
       (get-in subpage-data)
       tooltips)])

(defn subpages []
  (->> (for [[text id] [["About" 1] ["Projects" 2] ["Writings" 3] ["Readings" 4]]]
         (subpage-skeleton text id))
       (cons {:id "subpage-container-1"})
       (cons :ul)
       (into [])
       (conj [:nav])))

(defn hamburger-button []
    [:div {:class "ham-menu"
           :on-click (fn [] (re-frame/dispatch [:homepage/hamburger-menu]))}
     [:div {:class "lines"}]
     [:div {:class "lines"}]
     [:div {:class "lines"}]])

(defn side-nav-arrow-subpages [sub-subpages]
  (->> (for [sub-subpage sub-subpages
             :when (not= sub-subpage "placeholder")]
         [:li {:class "side-nav-subpage-elements"} sub-subpage])
       (cons {:class "side-nav-subpage-container"})
       (cons :ul)
       (into [])))

(defn side-nav-skeleton [text id]
  (let [keyworded (-> id str keyword)]
    [[:li {:class "side-nav-elements"} text
     [:div {:class "side-nav-arrow"
            :on-click (fn [] (re-frame/dispatch [:homepage/side-nav-arrow keyworded]))}]]
    (->> [(dec id) 1]
         (get-in subpage-data)
         side-nav-arrow-subpages)]))

(defn side-nav []
    (->> (for [[text id] [["About" 1] ["Projects" 2] ["Writings" 3] ["Readings" 4]]]
           (->> (side-nav-skeleton text id)
                (cons {:class "side-nav-container-2"})
                (cons :ul)
                (into [])))
         (cons {:id "side-nav-container-1"})
         (cons :ul)
         (into [])
         (conj [:div {:id "side-nav-background"}])))

(defn nav-bar []
  [:header
   [:h1 {:id "my-name"} "Rohan Mehta"]
   (subpages)
   (side-nav)
   (hamburger-button)])
