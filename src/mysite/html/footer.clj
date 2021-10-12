(ns mysite.html.footer)

(def socials-data
  [["/images//github.svg" "https://github.com/rohan-mehta-1024"]
   ["/images//twitter.svg" ""]
   ["/images/linkedin.svg" ""]
   ["/images/rss.svg" ""]])

(def socials
  (into
    [:div {:id "footer-part-1"}]
    (for [[svg link] socials-data]
      [:a {:href link}
       [:img {:src svg :class "icons"}]])))

(def ending
  [:div {:id "footer-part-2"}
   "© 2021 Rohan Mehta. All Rights Reserved. Built with\n"
   [:a {:href "https://github.com/magnars/stasis"
        :id "stasis"
        :target "blank_"} "Stasis"] "."])

(def html
  [:footer
   socials
   ending])