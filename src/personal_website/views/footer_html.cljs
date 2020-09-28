(ns personal-website.views.footer-html)

(defn links []
  [:div {:id "footer-part-1"}
   [:a {:class "icon-github social-button"
        :href "https://github.com/rohan-mehta-1024"
        :style {:margin-left "25px"}
        }]
   [:a {:class "icon-rss social-button"
        :href "http://rohan-mehta-1024.github.io/rss"}]
   [:a {:href "mailto:rohanm1024@gmail.com"}
    [:img {:src "/resources/email.png"
              :id "email-img"
              :class "links"}]]
   ])

(defn description []
    [:div {:id "footer-part-2"}
     "© 2020\n"
     [:a {:class "links" :href "mailto:rohanm1024@gmail.com"} "Rohan Mehta"]
      ".\n A Clojurescript SPA built using \n"
        [:a {:class "links" :href "https://github.com/day8/re-frame" :target "_blank"} "re-frame,"]
        "\n"
        [:a {:class "links" :href "https://github.com/ingesolvoll/kee-frame" :target "_blank"} "kee-frame,"]
      "\n"
        [:a {:class "links" :href "https://github.com/noprompt/garden" :target "_blank"} "garden."]
     "\n and \n"
        [:a {:class "links" :href "https://github.com/thheller/shadow-cljs" :target "_blank"} "shadow-cljs."]])

(defn footer []
  [:div {:id "whole-footer"}
   (links)
   (description)
    ])
