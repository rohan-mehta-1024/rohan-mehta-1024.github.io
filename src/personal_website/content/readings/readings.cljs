(ns personal-website.content.readings.readings
  (:require [personal-website.content.readings.books.books :as books]
            [personal-website.content.readings.articles.articles :as articles]))

(def posts (flatten [articles/posts
            books/posts]))
