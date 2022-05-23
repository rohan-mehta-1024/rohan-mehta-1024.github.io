(ns mysite.html.head
  (:require [com.rpl.specter :refer :all]))

(defn head-template [title]
  [:head
   [:title title]
   [:meta {:charset "utf-8"}]
   [:meta {:name    "viewport"
           :content "width=device-width, initial-scale=1.0"}]
   [:script {:src "https://polyfill.io/v3/polyfill.min.js?features=es6"}]
   [:script 

    "window.MathJax = {
                      tex:    {
                               //        inlineMath: [['$', '$'], ['\\(', '\\)']],
                               packages: {'[+] ': ['mhchem']}
                               },
                      loader: {load: ['[tex]/mhchem']},
                      };"]
   [:script {:id "MathJax-script" :src "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" :async true}]
   [:script {:src "https://unpkg.com/commentbox.io/dist/commentBox.min.js"}]
   [:link {:rel "icon" :type "image/x-icon" :href "../../../resources/public/images/favicon.ico"}]
   ])

(defn css->hiccup [file-path]
  [:link {:href file-path :rel "stylesheet"}])

(defn js->hiccup [file-path]
  [:script {:src file-path :type "text/javascript"}])

(defn generate-head [title css-files js-files]
  (let [head        (head-template title)
        default-css ["/css/header.css" "/css/footer.css"]
        default-js  ["/cljs-out/dev-main.js"]]
    (->> [css-files js-files]
         (transform [FIRST] (partial into default-css))
         (transform [LAST] (partial into default-js))
         (transform [FIRST ALL] css->hiccup)
         (transform [LAST ALL] js->hiccup)
         (apply concat)
         (into head))))

