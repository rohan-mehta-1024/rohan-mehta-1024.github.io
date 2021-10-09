(ns mysite.html.utils)

(defn colored-text-link [text url]
  [:a {:class "colored-text-link"
       :href  url} text])
