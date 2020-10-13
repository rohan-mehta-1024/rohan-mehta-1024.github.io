(ns personal-website.core
	(:require [reagent.core :as reagent]
						[reagent.dom :as rdom]
						[re-frame.core :as re-frame]
            [kee-frame.core :as k]
            [personal-website.db :as db]
						[personal-website.events :as events]
						[personal-website.views :as views]
						[personal-website.config :as config]
                 [reitit.core :as r]))


(def routes [;(r/router ["*" :wildcard])

             ["/" :homepage]

             ["/who-i-am" :who-i-am]
             ["/accomplishments" :accomplishments]
             ["/current-endeavors" :current-endeavors]

             ;["/phsyics/:id" :physics]
             ["/synthetic-biology/:id" :syn-bio]
             ["/computer-science/:id" :comp-sci]

             ["/blog-posts/:id" :blog-posts]
						 ["/personal-essays/:id" :essays]
						 ["/short-stories/:id" :stories]
             ["/poetry/:id" :poems]
             ["/academic-papers/:id" :papers]
             ;["*" :wildcard]

             ])



 (print "hello" (r/match-by-path (r/router ["*" :wildcard]) "/who-am-i"))
 (print "bye")

(defn init []
  (k/start! {:routes         routes
             :initial-db     db/default-db
             :root-component [views/main-panel]
             :debug?         true
             :not-found "/"
						 :hash-routing? true
						 }))
