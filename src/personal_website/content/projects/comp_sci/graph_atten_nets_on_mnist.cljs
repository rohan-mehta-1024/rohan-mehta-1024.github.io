(ns personal-website.content.projects.comp-sci.graph-atten-nets-on-mnist)



(def post-content
  [:div ;{:style {:text-indent "25px"}}
      [:h1 {:class "post-section-header"} "Overview"]
      [:h1 {:class "post-section-header"} "Results"]
      [:h1 {:class "post-section-header"} "Steps To Reproduce"]])

(def post
  {:title "Graph Attention Networks On MNIST"
   :date "12/23/2020"
   :content post-content
   :show "As a stepping stone in a larger project, I decided to play around
          with GATs (graph attention nets) on superpixel graphs for image classification.
          Pytorch Lightning and the Deep Graph Library made it a breeze.
          Here's what happened."
   :tags ["Deep Learning", "GNNs"]
   :type "computer-science"
   :overarching "project"
   :id "0"})
