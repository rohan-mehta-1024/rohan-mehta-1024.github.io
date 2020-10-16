(ns personal-website.content.writings.blog-posts.the-mathematics-of-automatic-differentiation
  (:require [personal-website.utils :as utils]))

(def post-preview
  "Automatic differentiation is the numerical computing algorithm that allows us
   to optimize neural nets with practical time and space costs. In this post, we will
   explore the mathematics that makes it possible and implmenent it ourselves.")

(def post-content
  [:div ;{:style {:text-indent "25px"}}
   [:p "Automatic differentiation is the cornerstone of the differentiable programming paradigm —
       the idea that we can allow programs to optimize their behavior against certain metrics by
       differentiating over and updating sets of  learnable functions. In fact, it is the very algorithm
       that allows neural nets to learn! And while it’s role in the story of deep learning is not always a leading one,
       it is an elegant piece of mathematics whose cleverness deserves to be chronicled. Furthermore,
       I doubt I can put better than Feynman the importance of leaving the realm of theory every once in a while
       and using one’s own two hands (“What I cannot make, I do not understand”), so as we build up to this idea
       we will implement a toy AD engine in C which will be capable of training vanilla neural nets."]

   [:p "With that in mind, let’s start very simple. Neural nets are just hierarchies of “layers” -
        vertical stacks of interconnected units known as neurons. Each neuron is associated with some learnable
        weight vector which computes a dot product with the vector of incoming values, adjusts it by some (also learnable)
        scalar and pumps it through a non-linearity, such that optimizing these learnable parameters
        results in a function with   the desired behavior, ranging from language translation
        to caption generation."]


    [:figure {:class "img-container"}
      [:div {:style {:text-align "center"}}
        [:img {:src "/auto_diff_nn_pic.svg"  :style {:width "65%"}}]]
      [:figcaption {:class "post-caption"}
        "Fig. 1. An example of a simple neural network. A basic building block –
        learnable transformations of information – allows them to approximate all kinds of complex functions."]]


    [:p "This is known - it is neural networks
        in their simplest, most straightforward form. But treating optimization as a block box makes things seem deceptively
        easy, when in fact these optimization algorithms (along with the hardware they’re  running on) are the sole
        differentiator between neural nets being only of theoretical interest versus practical utility, and automatic
        differentiation underpins every single one of them. So how does it actually work?"]

   [:h1 {:class "post-section-header"} "Learning To Differentiate"]

   [:p "As you probably know already, it has everything to do with calculus. But before we dive deep into the
        practical implementation (which, ironically enough, calls on the most abstract math) it's worth laying down
        the basics of how we take the derivatives of multivariable functions."]

   [:p "Derivatives are just measurements of the affect of a function’s inputs on its outputs, and the same remains true
        when taking derivatives of a function with multiple such inputs. To start, let’s consider a function with two inputs,
        as its easiest to visualize."]

   [:figure {:class "img-container"}
    [:div {:style {:text-align "center"}}
     [:img {:src "/tangent_line_to_graph.png"  :style {:width "65%"}}]]
    [:figcaption {:class "post-caption"}
     "Fig. 2. The tangent line to the graph of some function. This is the classical way to
     conceptualize the derivative for functions of a single variable. It can be extended
     to the multivariable case as well."]]


   [:h1 "Computational Graphs"]


   ])

(def post
  {:title "The Mathematics Of Automatic Differentiation"
   :date "2020/10/29"
   :show post-preview
   :content post-content
   :tags ["mathematics", "differentiable programming"]
   :type "blog-post"
   :overarching "writing"
   :id "1"})
