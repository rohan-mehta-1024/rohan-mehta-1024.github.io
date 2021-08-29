(ns personal-website.content.writings.blog-posts.posts
  (:require [personal-website.utils :refer [format-title]]
            [personal-website.content.writings.blog-posts.attention-via-the-transformer :refer [post] :rename {post post1}]
            [personal-website.content.writings.blog-posts.the-mathematics-of-automatic-differentiation :refer [post] :rename {post post2}]
            [personal-website.content.writings.blog-posts.reaction-diffusion-systems-and-turing-patterns :refer [post] :rename {post post3}]))

(def posts {(:title post1) post1
            
            (:title post2) post2

            (:title post3) post3
            })
