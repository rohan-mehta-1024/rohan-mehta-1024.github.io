(ns personal-website.content.utils)

(defn link [text link]
  [:a {:class "post-links"
       :href link
       :target "_blank"} text])
