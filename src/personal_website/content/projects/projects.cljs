(ns personal-website.content.projects.projects
  (:require [personal-website.content.projects.comp-sci.comp-sci :as comp-sci]
            [personal-website.content.projects.engineering.engineering :as engineering]
            [personal-website.content.projects.syn-bio.syn-bio :as syn-bio]))

(def posts (flatten [comp-sci/posts
                     engineering/posts
                     syn-bio/posts]))
