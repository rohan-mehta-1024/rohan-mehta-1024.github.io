(ns personal-website.content.writings.writings
  (:require [personal-website.content.writings.blog-posts.posts :as blog-posts]
            [personal-website.content.writings.papers.papers :as papers]
            [personal-website.content.writings.essays.essays :as essays]
            [personal-website.content.writings.short-stories.stories :as stories]
            [personal-website.content.writings.poetry.poems :as poems]))

(def posts (flatten [blog-posts/posts
                     papers/posts
                     essays/posts
                     stories/posts
                     poems/posts]))
