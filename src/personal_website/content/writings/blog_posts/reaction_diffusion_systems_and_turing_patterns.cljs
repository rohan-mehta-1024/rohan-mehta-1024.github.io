(ns personal-website.content.writings.blog-posts.reaction-diffusion-systems-and-turing-patterns
  (:require [personal-website.utils :as utils]
            [garden.stylesheet :refer [at-media]]))

(def post-preview "As part of an independent research project for my chemistry class,
       I decided to take a closer look at reaction-diffusion systems and
       the role they play in Alan Turing's theory of morphogenesis. This
       post is a short note on the things I learned.")

(def post-content
  [:div
   [:p "The biological world is replete with astouding imagery. One
        doesn't have to look far to find evidence of this. From a
        leopard's spots, to a tiger's stripes, and the dizzying
        labyrinth-like patterns on a pufferfish, there is lots and
        lots of morphological variety in the animal kingdom."]

        [:figure {:class "img-container"}
         [:div {:style {:text-align "center"}}
          [:img {:src "turing-pattern-1.jpg" :style {:width "25%" :margin-right "5%" :margin-left "0%"}}]
          [:img {:src "turing-pattern-2.jpg" :style {:width "27.5%"}}]
          ;[:img {:src "turing-pattern-3.jpg" :style {:width "31%" :margin-right "7%"}}]
          [:img {:src "turing-pattern-5.jpg" :style {:width "32%" :margin-left "5%"}}]
           [:figcaption {:class "post-caption" :style {:text-align "left"}}
           "Fig. 1. Examples of animals' different morphologies, including: the labyrinth-like patterns of
           a puffer fish and the stripes on a tiger (Source: "
            ")."]]]


  [:p "But this staggering diversity prompts a few questions.
       Firstly, what is the generating function for all of this variation? What one biological process
       can give rise to both spots and stripes, labyrinths and rings? And how can these macroscopic
       patterns be determined when an organism is nothing more than an embryo? How can life
       be so complex and so precise?"]

   [:p "These were the questions Alan Turing was struggling with during the
        later portion of his academic career, as he sought to codify biology
        in much the same way he had done for the field of computer science. After all,
        biology is nothing more than computational chemistry – a program operating
        on molecules and energy – and Turing was determined to discover the
        algorithm responsible for the development of organisms' morphological characteristics, or
        as he put it: "(utils/link "The Chemical Basis of Morphogenesis" "https://www.dna.caltech.edu/courses/cs191/paperscs191/turing.pdf") "."]

   [:p "What he came up with is an extremely compelling result in
        theoretical biology, that relies on a simple, but powerful
        chemical model known as a reaction-diffusion system.
        He showed that this model is expressive enough to
        reproduce all the morphological variety seen in the natural world,
        and explain how morphogenesis takes place
        during embryonic development."]

   [:p "It still isn't clear if life actually follows the equations Turing came up with
        (we'll talk more about this later), but his work is nontheless fascinating, and definitely
        worth a closer look. That said, the math behind reaction-diffusion systems relies
        heavily on vector calculus, so it's worth going over a few basic concepts to lay the
        neccessary groundwork. If you don't need this " [:span {:class "post-links" :on-click (fn [] (utils/scroll-to-this "scroll"))} "skip ahead"]".
        Otherwise, let's begin!"]



     ;known as reaction diffusion equations. Whether this is actually how things
     ;work or not is still under discussion, but that doesn't make the elegance
     ;of his work any less important
     [:h1 {:class "post-section-header"} "A Vector Calculus Review"]


        [:p "Vector calculus is essentially multivariable calculus on vector fields.
             And a vector field is just some "[:q "space"] " such that every point in that space
             is assigned some vector. It could be a 2D space, a 3D space, or even
             some non-Euclidean space, but abstractly, it is defined as some function
             mapping coordinates to vectors."]

        [:p "The easiest vector field to visualize is a two-dimensional one.
             It looks exactly like the familiar Cartesian plane, except that every point
             on the plane has some vector sticking out of it. Such fields
             also have a nice intuitive interpretation under the phenomena of fluid flow, where
             we imagine each vector as indicating the velocity of a droplet of fluid
             situated at that point."]

        [:figure {:class "img-container"}
         [:div {:style {:text-align "center"}}
          [:img {:src "vec_field_1.png" :style {:width "45%" :margin-right "5%"}}]
          [:img {:src "vec_field_2.png" :style {:width "45%"}}]
           [:figcaption {:class "post-caption" :style {:text-align "left"}} "An example
           of two different vector fields."]]]

        [:p "Mathematically, we represent a vector field as a series of multivariable functions,
             each of which takes in the coordinates at a given point and determines one component
             of the vector which sits at that point. So a generic 2D vector field would look something like this: "]

        [:p "$$\\boldsymbol{\\vec{F}}(x, y) = \\begin{bmatrix}P(x, y) \\\\ Q(x, y) \\\\ \\end{bmatrix}$$"]

        [:p "All in all, it's not that difficult a concept to understand, but there are many more
             questions we could ask about the nature of such fields. The one that turns out to
             be most important in this context is the following: given some point on  a two-dimensional
             vector field \\(\\boldsymbol{\\vec{F}}\\), how can we measure how
             quickly fluid is moving away from that point?
"]


        [:p "Well, the partial derivatives at that point already
             represent all the way it changes. BUT We're interested
             moving away. When we take an infinitesimal step
             in the x direction, it i the x component
             of the vector. So the vectors are the derivative
             of the x component with respect to x and the y
             component with respect to y"]

        [:p "This definition is known as divergence, and can
             be thought as an extension"]

        [:p "So we can take the gradient of any vector field"]




                     [:figure {:class "img-container"}
                      [:div {:style {:text-align "center"}}
                       [:img {:src "div_1.svg" :style {:width "45%" :margin-right "5%"}}]
                       [:img {:src "div_2.svg" :style {:width "45%"}}]
                        [:figcaption {:class "post-caption" :style {:text-align "left"}} "An example
                        of two different vector fields."]]]
       ; [:p "Let's start with the derivative with respect to \\(x\\). Nudging \\(x\\) affects
         ;    both components of the output vector, because both \\(P\\) and \\(Q\\) are functions
         ;    of \\(x\\). That means an infinitesimal step in the \\(x\\)-direction is summarized by the two partial derivatives \\(\\frac{\\partial{P}}{\\partial{x}}\\)
         ;    and \\(\\frac{\\partial{Q}}{\\partial{x}}\\). When \\(\\frac{\\partial{P}}{\\partial{x}}\\) is positive,
          ;   our new vector is facing in the same direction as our previous vector in the x direction"]

      ;  [:p "Except we don't really care because it is the second derivative that"]
       ;[:p "When \\(\\frac{\\partial{P}}{\\partial{x}}\\) is positive, that means
        ;    the vector is moving in the same x direction, or away from our original
        ;    point. If its negative it means its moving to. Conversely,
        ;    mean. We can summarize all of this with a table"]

   ;[:table {:style {:border "1px solid black" :border-collapse "collapse" :margin-left "auto" :margin-right "auto"}}
    ;[:tr
     ;[:th {:style {:border "1px solid black" :border-collapse "collapse"}} "Derivative"]
     ;[:th {:style {:border "1px solid black" :border-collapse "collapse"}} "Sign"]
     ;[:th {:style {:border "1px solid black" :border-collapse "collapse"}} "Orientation"]]
    ;[:tr
     ;[:td {:style {:border "1px solid black" :border-collapse "collapse" :text-align "center"}} "\\(\\frac{\\partial{P}}{\\partial{x}}\\)"]
     ;[:td {:style {:border "1px solid black" :border-collapse "collapse"}} "\\(+\\)"]
     ;[:td {:style {:border "1px solid black" :border-collapse "collapse"}} "b"]]]

       [:p "But since our step was in the \\(x\\)-direction to begin with"]

             [:figure {:class "img-container"}
             [:div {:style {:text-align "center"}}
              [:img {:src "vec_field_3.png" :style {:width "45%" :margin-right "5%"}}]
              [:img {:src "vec_field_4.png" :style {:width "45%"}}]
               [:figcaption {:class "post-caption" :style {:text-align "left"}} "An example
               of two different vector fields."]]]


        [:p "The same is true y direction if the y direction"]

        [:p "But what about dirctional derivatives? Well they are just
             some scalar combination "]

          [:h1 {:class "post-section-header" :id "scroll"} "Reaction-Diffusion Systems"]
   ])






(def post
  {:title "Reaction-Diffusion Systems And Turing Patterns"
   :date "12/22/2020"
   :show post-preview
   :content post-content
   :tags ["chemistry", "biology", "differential equations"]
   :type "blog-post"
   :overarching "writing"
   :id "1"
   :css ""})
