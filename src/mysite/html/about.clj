(ns mysite.html.about
  (:require [mysite.html.utils :refer [colored-text-link]]))


(def html
  [:div {:id "about-me-container"}
 
  
  [:p {:class "headers"}  "I'm Currently"
   [:ul {:class ["nice-list" "bullets"]}
    ;;[:li "Exploring the Pi Calculus and Petri Nets while interning at "
     ;; (colored-text-link "Wolfram Research" "https://www.wolfram.com")]
     [:li "Democratizing synthetic biology as a student ambassador at "
     (colored-text-link "Amino Labs" "https://amino.bio")]
     [:li "Doing AI research with the " (colored-text-link "Machine Learning Collective" "https://mlcollective.org")]

    ]]










   
   ;(comment)
   ;[:p {:class "headers"}  "Cool Things I've Done"
    ;          [:ul {:class "nice-list"}
     ;          [:li "Had work recognized on "
      ;          (colored-text-link "3b1b" "https://www.wolfram.com")]
       ;        [:li "Check my "
   ;             (colored-text-link "resumé" "https://www.wolfram.com")  " for more!"]]]


   [:p {:class "headers"} "Things I'm Fascinated By"
    [:ul {:class "nice-list"}
     [:li [:a {:target "_blank" :class "colored-text-link" :href "https://en.wikipedia.org/wiki/Slime_mold"} "Slime molds"]
      " and their implications for intelligence and computation"]
     [:li [:a {:class "colored-text-link" :target "_blank" :href "https://en.wikipedia.org/wiki/Noether%27s_theorem"} "Noether's Theorem"]
      " and mining the universe of symmetry-conservation relations"]
     [:li [:a {:class "colored-text-link" :target "_blank" :href "https://en.wikipedia.org/wiki/Unconventional_computing"} "Unconventional computing"]
      " and what lies beyond the von Neumann architecture"]
     [:li [:a {:class "colored-text-link" :target "_blank" :href "https://distill.pub/2021/gnn-intro/"} "Graph Neural Networks"]
      " for chemistry, biology, vision, and reasoning"]
     [:li [:a {:class "colored-text-link" :target "_blank" :href "https://en.wikipedia.org/wiki/Functional_programming"} "Functional programming" ]
      " and how to combine the styles of Haskell and Lisp"]
     [:li [:a {:class "colored-text-link" :target "_blank" :href "https://www.technologyreview.com/2016/06/23/159138/how-the-new-science-of-computational-history-is-changing-the-study-of-the-past/"} "Computational "]
      [:a {:class "colored-text-link" :target "_blank" :href "https://static1.squarespace.com/static/5a1b43dbf9a61edc99dd61a1/t/5c5fb883652deabd42dec8a4/1549777037483/aspectRatiosOfHistoricalCountriesFormatted.pdf"} "history"]
      " and other ways of making the social sciences more rigorous"]
     [:li [:a {:class "colored-text-link" :target "_blank" :href "https://en.wikipedia.org/wiki/Chemical_reaction_network_theory"} "Chemical reaction nets"]
      " and how to intelligently search chemical reaction space"]
     ;[:li [:a  {:class "colored-text-link" :target "_blank" :href "https://en.wikipedia.org/wiki/Hydroponics"} "Hydroponics"]
     ; " and the future of high-tech, sustainable agriculture"]
     ]
    ]
   ;[:p {:class "headers"} "People Who Inspire Me"
    ;[:ul {:class "nice-list"}
     ;[:li "AI researcher Chris Olah"]
     ;[:li "Math YouTuber Grant Sanderson"]
     ;[:li "Late physicist Richard Feynman"]
     ;[:li ]]]
   [:p {:class "headers"} "On The Side, I"
    [:ul {:class "nice-list"}
     [:li "Play varsity golf and tennis for Moravian Academy"]
     [:li "Enjoy learning the Japanese language and consuming Japanese culture"]
    ; [:li "Am an aspiring photographer, animator, and all-around digital artist"]
                                        ; [:li "Love exploring the Marvel Universe, from the comics to the movies"]
     ]]
   [:p {:class "headers"} "Contact Information"
    [:p "If any of this (or any my other content) has caught your attention, please feel free to get in touch with me via email at:
          rohanmehta1024 [AT] gmail [DOT] com, or reach out through "
     (colored-text-link "Twitter" "/") " and "
     (colored-text-link "LinkedIn" "/") "."]]])
