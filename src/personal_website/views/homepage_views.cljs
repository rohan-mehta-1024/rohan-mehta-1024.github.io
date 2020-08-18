(ns personal-website.views.homepage-views
  (:require [re-frame.core :as re-frame]
            [herb.core :refer [<class <id]]
            [clojure.string :refer [split]]
            [personal-website.subs :as subs]
            [personal-website.styles.homepage-styles :as styles]))

(comment (defn subpage-skeleton [text class-1 class-2 class-3 class-4]
  [:div {:class class-1}
   [:div {:class class-2}
    [:li {:class class-3} text]
    [:div {:class class-4}]]])

(defn subpages []
  (let [subpages styles/subpages
        container (<id subpages :container)
        text-container-1 (<class subpages :text-container-1)
        text-container-2 (<class subpages :text-container-2)
        subpage-text (<class subpages :subpage-text)
        tooltips (<class subpages :tooltips)]
      (->> (for [text ["About" "Projects" "Writings" "Readings"]]
             (subpage-skeleton text text-container-1 text-container-2
                               subpage-text tooltips))
            (cons {:id container})
            (cons :ul)
            (into [])
            (conj [:nav]))))

(defn hamburger-button []
  (let [ham-menu (<class styles/hamburger)
        lines (<class styles/lines)
        l1 (<id styles/line1)
        l2 (<id styles/line2)
        l3 (<id styles/line3)]
    [:div {:class ham-menu
           :on-click (fn [] (re-frame/dispatch [:homepage/hamburger-menu]))}
     [:div {:id l1 :class lines}]
     [:div {:id l2 :class lines}]
     [:div {:id l3 :class lines}]]))

(defn side-nav []
  (let [side-nav styles/side-nav-menu
        background (<id side-nav :background)
        container (<id side-nav :container)
        subpage-text (<class side-nav :subpage-text)]
    [:div {:id background}
     [:ul {:id container}
      [:li {:class subpage-text} "About"]
      [:li {:class subpage-text} "Projects"]
      [:li {:class subpage-text} "Writings"]
      [:li {:class subpage-text} "Readings"]]]))

(defn nav-bar []
  (let [header-styling (<id styles/header)
        name-styling (<id styles/my-name)]
    [:header {:id header-styling}
     [:h1 {:id name-styling} "Rohan Mehta"]
     [subpages]
     [side-nav]
     [hamburger-button]])))
