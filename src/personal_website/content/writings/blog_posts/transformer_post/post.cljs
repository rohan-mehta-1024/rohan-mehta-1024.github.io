(ns personal-website.content.writings.blog-posts.transformer-post.post)


(def post-preview
  "The transformer – a neural network model desiged to replace traditional
  seq2seq architecture – introduces a powerful abstraction to think about
  attention.")

(def post-content
  [:div ;{:style {:text-indent "25px"}}
   "blah"])

(def post
  {:title "An Introduction To Attention Via The Transformer"
   :date "2020/8/29"
   :show post-preview
   :content post-content
   :tags ["mathematics", "differentiable programming"]
   :type "blog-post"
   :id "0"})
