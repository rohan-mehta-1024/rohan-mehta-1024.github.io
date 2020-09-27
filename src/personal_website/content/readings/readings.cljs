(ns personal-website.content.readings.readings
  (:require [personal-website.content.readings.articles.articles :as articles]
            [personal-website.content.readings.fiction.fiction :as fiction]
            [personal-website.content.readings.nonfiction.nonfiction :as nonfiction]))

(def posts (flatten [articles/posts
            fiction/posts
            nonfiction/posts]))
