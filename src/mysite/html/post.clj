(ns mysite.html.post
  (:require [clojure.string :as string]))


(defn format-updates [updates]
  (let [update-fn #(if (empty? %)  "" (str "Update on " (str (first %)) ": " (str (second %))))]
    (->> updates
         str 
       read-string
       (partition 2)
       (map update-fn))))



(defn format-post [[url {:keys [title date tags updates preview html img] :as post}]]
  (let [poem? (string/includes? url "poetry")]
    [url
     (assoc post :html
            [:div
            ; [:meta {:name "twitter:title" :content title}]
            ; [:meta {:name "twitter:description" :content preview}]
            ; (if (not= img nil) [:meta {:name "twitter:img" :content img}])
             [:div {:id "post-content-container"}
              [:h1 {:id "post-title"} title]
              [:h4 {:id "post-byline"} (str date " • Rohan Mehta | " tags)]
                                        ;[:div {:id "post-intro-container"}
                                        ;[:blockquote {:id "post-intro-text"} preview]]
              [:ul {:id "post-byline" :style {:list-style-type "none"
                                              :margin "0"
                                              :padding "0"}}
               ;(for [update (format-updates updates)] [:li {:class "updates"} update])
               ]
              [:div {:id "post-content" :class (if poem? nil "not-poem")} html]
              ]
             
             [:div {:class "commentbox"}]
             [:script {:src "https://unpkg.com/commentbox.io/dist/commentBox.min.js"}]
             [:script "commentBox('5711441948573696-proj')"]])]

    ))

