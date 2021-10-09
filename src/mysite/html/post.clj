(ns mysite.html.post
  (:require [clojure.string :as string]))

(defn format-post [[url {:keys [title date tags preview html] :as post}]]
  (let [poem? (string/includes? url "poetry")]
    [url
     (assoc post :html
            [:div
             [:div {:id "post-content-container"}
              [:h1 {:id "post-title"} title]
              [:h4 {:id "post-byline"} (str date " • Rohan Mehta | " tags)]
                                        ;[:div {:id "post-intro-container"}
                                        ;[:blockquote {:id "post-intro-text"} preview]]
              [:div {:id "post-content" :class (if poem? nil "not-poem")} html]
              ]
             
             [:div {:class "commentbox"}]
             [:script {:src "https://unpkg.com/commentbox.io/dist/commentBox.min.js"}]
             [:script "commentBox('5711441948573696-proj')"]])]

    ))
