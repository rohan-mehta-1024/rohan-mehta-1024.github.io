(ns mysite.html.preview
  (:require [clojure.string :as string]
            [com.rpl.specter :refer :all]
            [mysite.utils :refer [parse-date]]))

(def types-map
  {"projects"      "Project"
   "readings"      "Reading"
   "blog_posts"    "Blog Post"
   "creative_writing" "Creative Writing"})

(def dates-map {"1" "Jan"
                "2" "Feb"
                "3" "Mar"
                "4" "Apr"
                "5" "May"
                "6" "Jun"
                "7" "Jul"
                "8" "Aug"
                "9" "Sep"
                "10" "Oct"
                "11" "Nov"
                "12" "Dec"})

(defn format-date [date]
  (let [[x y z] (->> 
                  (string/split date #"/")
                  (transform [FIRST] dates-map))]

    (str x " " y ", " z)))

(defn format-type [url]
  (let [pred (string/includes? url  "writings")]
    (cond-> url
      true       (string/split #"/")
      pred       (-> drop-last last)
      (not pred) second
      true       types-map)))

(defn format-header [date url tags type?]
  (let [type (format-type url)
        date (format-date date)]
    (string/join " | " (if type? [date type] [date]) )))

(defn is-series? [el]
  (-> el first string?))

(defn sorting-fn [el]
  (if (is-series? el)
    (-> el second :date parse-date)
    (-> el last second :date parse-date)))

(defn make-preview [[link {:keys [title date preview tags updates img as_link]}] homepage?]
  (let [class (if homepage? nil "not-homepage")
        link (if (not= as_link nil) as_link link)]
    [:div {:class class :id "preview-container-2"}
     (if homepage?
       [:p {:class [class "preview-header"]} (format-header date link tags  false)]
       ;;nil;[:p {:class [class "preview-header"]} (string/join " | " [date tags])]
       )

     (when (not homepage?)
      [:img {:src img :class "preview-img"}])
     [:a {:class [class "preview-title"] :href link :style {:margin-left (if homepage? "0px" "10px")}} title]

     (when homepage?
       [:p {:class "preview-text"} preview])
     ]

    )
  )

(defn group-content [posts with-writings]
  (letfn [(is-writing? [url]
            (if (.contains url "writings")
              (str "writings/" (nth url 2))
              (nth url 1)))]
    (group-by
      #(cond-> %
         true                first
         true                (string/split #"/")
         with-writings       is-writing?
         (not with-writings) (nth 1))
      posts
)))

(defn group-series [posts]
  (for [[type posts] posts
        :let [grouped (group-by (comp :series second) posts)
              non-nil (dissoc grouped "nil")]]
    (->> non-nil
         (vals)
         (apply conj (grouped "nil"))
         (sort-by sorting-fn)
         (conj [type])
         (apply hash-map))))

(defn make-series [series]
  (let [name (get-in series [0 1 :series])]
    (->> series
         (map #(make-preview % false))
         (into [:p {:class "series"} (str "Series: " name)]))))


(defn make-all-previews [posts]
  (let [template  [:div {:id "previews-container"} "Posts" ]]
    (->> (group-content posts true)
         (group-series)
         (apply merge)
         (transform [MAP-VALS ALL] #(if (is-series? %)
                                      (make-preview % false)
                                      (make-series %)
                                      ))
         ;(transform [MAP-VALS] #(interleave % (repeat [:hr])))
         (transform [MAP-VALS] (partial into template))
         (transform [MAP-KEYS] #(as-> % $
                                  (str "/" $ "/index.html")
                                  ;(string/replace $ "_" "-")
                                  ))
         )))
