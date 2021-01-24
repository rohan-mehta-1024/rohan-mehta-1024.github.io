(ns personal-website.views.header-html
  (:require [re-frame.core :as re-frame]
            [personal-website.db :as db]
            [personal-website.subs :as subs]
            [personal-website.utils :as utils]))


(def subpage-data
  [["About"
    ["Who I Am"
     "Accomplishments"
     "placeholder"
     "placeholder"
     "placeholder"
     "placeholder"]]
   ["Projects"
    ["Entrepreneurial"
     "Synthetic Biology"
     "Computer Science"
     "placeholder"
     "placeholder"
     "placeholder"]]
   ["Writings"
    ["Poetry"
     "Short Stories"
     "Academic Papers"
     "Personal Essays"
     "Blog Posts"
     "placeholder"]]
   ["Readings"
    ["Books"
     "Articles & Essays"
     "placeholder"
     "placeholder"
     "placeholder"
     "placeholder"]]])


(defn format-url [sub-subpage]
  (let [first-el ((subpage-data 0) 1)
        in-first? (some #(= sub-subpage %) first-el)]
    (as-> sub-subpage $
          (clojure.string/lower-case $)
          (clojure.string/split $ " ")
          (clojure.string/join "-" $)
          (str "/#/" $)
          (if in-first?
            (str $ "")
            (str $ "/all")))))

(defn close-search []
  (if @(re-frame/subscribe [:homepage/search])
    (do (re-frame/dispatch [:homepage/search])
        (re-frame/dispatch [:homepage/search-term ""]))
     nil))

(defn tooltips-element [el show? class sub-subpage]
  [el {:style {:opacity show?}
       :href (format-url sub-subpage)
       :class class
       :on-click (comp utils/scroll-to-top close-search)}
   sub-subpage])

(defn tooltips [sub-subpages]
  (->> (for [sub-subpage sub-subpages
             :let [placeholder? (= sub-subpage "placeholder")
                   show? (if placeholder? "0%" "100%")
                   el (if placeholder? :div :a)
                   class (if placeholder? "" "subpage-tooltip-elements")
                   link (if placeholder? "" (format-url sub-subpage))]]
         (tooltips-element el show? class sub-subpage))
       (cons {:class "subpage-tooltips"})
       (cons :ul)
       (into [])))

(defn subpage-skeleton [text id]
  [:li {:class "subpage-container-2"
        :onMouseLeave (fn [] (re-frame/dispatch [:homepage/subpage-hover [false id]]))}
    [:div {:class "subpage-elements"
           :onMouseEnter (fn [] (re-frame/dispatch [:homepage/subpage-hover [true id]]))}
     text]
  (->> [(dec id) 1] (get-in subpage-data) tooltips)])

(defn search-fn []
  (if @(re-frame/subscribe [:homepage/search])
       (re-frame/dispatch [:homepage/search-term ""]) nil)
       (re-frame/dispatch [:homepage/search])
      (utils/scroll-to-top))

(defn subpages []
  (as-> (for [[text id] [["About" 1] ["Projects" 2] ["Writings" 3] ["Readings" 4]]]
         (subpage-skeleton text id)) $
       (cons {:id "subpage-container-1"} $)
       (cons :ul $)
       (into [] $)
       [:nav $ [:img {:src "/resources/search.svg"
                      :id "search-img-1"
                      :on-click search-fn}]]))

(defn hamburger-button []
    [:div {:class "ham-menu"
           :on-click (fn [] (re-frame/dispatch [:homepage/hamburger-menu]))}
     [:div {:class "lines"}]
     [:div {:class "lines"}]
     [:div {:class "lines"}]])

(defn close-all-others [given-idx mapping]
    (doseq [key [:2 :3 :4 :5]
             :when (and (mapping key) (not= key given-idx))]
      (re-frame/dispatch [:homepage/side-nav-arrow key]))
  (re-frame/dispatch [:homepage/side-nav-arrow given-idx]))

(defn side-nav-arrow-subpages [sub-subpages]
  (let [close (fn [] (re-frame/dispatch [:homepage/hamburger-menu]))
        close (fn [] (utils/scroll-to-top) (js/setTimeout close 50))]
  (->> (for [sub-subpage sub-subpages
             :when (not= sub-subpage "placeholder")]
         [:a {:class "side-nav-subpage-elements"
              :href (format-url sub-subpage)
              :on-click close}
          sub-subpage])
       (cons {:class "side-nav-subpage-container"})
       (cons :ul)
       (into []))))

(defn side-nav-skeleton [text id]
  (let [keyworded (-> id str keyword)
        pressed? @(re-frame/subscribe [:homepage/side-nav-arrow])]
    [[:li {:class "side-nav-elements"
           :on-click (fn [] (close-all-others keyworded pressed?) (close-search))} text
     [:div {:class "side-nav-arrow"}]]
    (->> [(dec (dec id)) 1] (get-in subpage-data) side-nav-arrow-subpages)]))

(defn side-nav []
    (as-> (for [[text id] [["About" 2] ["Projects" 3] ["Writings" 4] ["Readings" 5]]]
           (->> (side-nav-skeleton text id)
                (cons {:class "side-nav-container-2"})
                (cons :ul)
                (into []))) $
         (cons [:img {:src "/resources/search.svg"
                      :id "search-img-2"
                      :on-click (comp (fn [] (re-frame/dispatch [:homepage/hamburger-menu])) search-fn)}] $)
         (cons {:id "side-nav-container-1"} $)
         (cons :ul $)
         (into [] $)
         [:div {:id "side-nav-background"} $]))

(defn header []
  [:header {:id "page-header"}
   [:h1 {:id "my-name"}
    [:a {:href "/"
         :on-click close-search} "Rohan Mehta"]]
   (subpages)
   (side-nav)
   (hamburger-button)])
