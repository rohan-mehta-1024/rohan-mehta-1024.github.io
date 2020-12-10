(ns personal-website.content.writings.blog-posts.the-mathematics-of-automatic-differentiation
  (:require [personal-website.utils :as utils]
            [garden.stylesheet :refer [at-media]]))

(def post-preview
  "Automatic differentiation is the numerical computing technique
   that gave us the backpropogation algorithm, which is
   how neural nets learn. In this post, we will explore
   the mathematics behind it – both in the context of neural nets
   and more broadly.")

(def post-content
  [:div ;{:style {:text-indent "25px"}}
   [:p "Backpropogation is the cornerstone of the differentiable
        programming paradigm — the idea that we can allow programs to optimize
        their behavior against certain metrics by  differentiating over and updating sets
        of learnable functions. In fact, it is the very algorithm that allows neural
        nets to learn! Less talked about is automatic differentiation, the numerical computing technique
        that makes it possible, and one of the key reasons
        neural nets are able to transcend theory and work in real life."]

   [:p "Both, however, are essential to a thorough understanding of
        how and why neural nets are even possible in the first place.
        In this post, we'll go through the mathematics underpinning both
        of them, which is a journey far less restricted to the realm
        of a calculus than you may expect (no spoilers!).
        That said, there is no escaping the calculus, so if you feel it's
        worth taking a few moments
        to review how exactly we take the deriavatives of multivariate functions, continue on.
        Otherwise, skip here.
        "]

   ;[:p "With that in mind, let’s start very simple. Neural nets are just
    ;    hierarchies of “layers”  – vertical stacks of interconnected units known as
    ;    neurons. Each neuron is associated with some learnable weight vector which
    ;    computes a dot product with the vector of incoming values, adjusts it by some
    ;    (also learnable) scalar, and pumps it through a non-linearity, such that
    ;    optimizing these learnable parameters can result in very complex – and
    ;    seemingly intelligent – behavior. "]


    ;[:figure {:class "img-container"}
    ;  [:div {:style {:text-align "center"}}
    ;    [:img {:src "/auto_diff_nn_pic.svg"  :style {:width "65%"}}]]
    ;  [:figcaption {:class "post-caption"}
    ;    "Fig. 1. An example of a simple neural network. An almost laughably basic building block –
    ;    learnable transformations of information – allows them to approximate all kinds of complex functions."]]


    ;[:p "This is known - it is neural networks in their simplest, most
    ;    straightforward form. But treating their optimization as a block box makes
    ;    things seem deceptively easy, when in fact these optimization algorithms
    ;    (along with the hardware they’re  running on) are the sole differentiator
    ;    between neural nets being only of theoretical interest versus practical utility,
    ;    and automatic differentiation underpins every single one of them. So how does it actually work?"]

   [:h1 {:class "post-section-header"} "Learning To Differentiate"]

   [:p "Derivatives of single-variable functions are
        measurements of how infinitesimal variations to a function's
        input-space correspond to variations in the output-space. And the same
        is true of multivariable functions,
        except now we have many more ways in which
        we can vary our input-space."]

   [:p "To start though, let’s consider the case of a
        function of two variables. Such a function can be pictured as a surface
        above the Cartesian plane, where the height of a point
        on that surface is calculated using the function
        \\(f(x,y)\\) in question. With this in mind, the geometrical
        interpretation of the derivative is how the elevation of
        this surface changes given a small step in some direction."]

  [:figure {:class "img-container"}
   [:div {:style {:text-align "center"}}
    [:img {:src "/multi-fn-2.png" :style {:width "45%"}}]
    [:img {:src "/multi-fn-4.png" :style {:width "45%"}}]
     [:figcaption {:class "post-caption" :style {:text-align "left"}}
     "Fig. 2. Examples of surfaces that can be generated
     by a function of two variables (Source: "
     (utils/link "CalcPlot3D" "https://www.monroecc.edu/faculty/paulseeburger/calcnsf/CalcPlot3D/")")."]]]


   [:p "An important thing to notice here is that this step could be in any direction:
        vertical, horizontal, or some combination of the two (diagonal). For simplicity
        though, we'll resitrict ourselves to the first two cases – those in which we take
        steps in purely the \\(x\\) and \\(y\\) directions – for right now.
        So how would we calculate the derivative of the function \\(f(x,y) = x^2 + y^2\\)
        with respect to \\(x\\) then?"]

   [:p "Imagine standing at some point on this function's surface, and walking
        horizontally in both directions. If we walk such that a spool of
        yarn unrolls behind  us, the shape this yarn takes will
        resemble the graph of a single-variate function.
        More specifically, it will look like
          \\(f(x) = x^2 + C\\) (a parabola) where \\(C\\) is some constant, namely
        whatever the \\(y\\)-value of our original point was."]

   [:p "It might not be immediately obvious, but by walking horizontally
        across our surface we only varied our \\(x\\)-coordinate, while
        our \\(y\\)-coordinate remained constant.
        Thus, when walking in this way,
        the surface can be described
        by a special case of the original function where
        \\(y\\) is a constant."]

      [:p "Similarly, a walk
           in a purely vertical direction is described
           when \\(x\\) is a constant. More generally, we would find that
           all multivariate functions
           behave in this way when being sliced
           (or walked upon) purely in the direction of one their variables, such
           that all others become constants."]

  [:figure {:class "img-container"}
   [:div {:style {:text-align "center"}}
    [:img {:src "/parabaloid-1.png" :style {:width "50%"}}]
    [:img {:src "/parabaloid-2.png" :style {:width "50%"}}]
    [:figcaption {:class "post-caption" :style {:text-align "left"}}
    "Fig. 3. The graph the function \\(f(x,y) = x^2 + y^2\\), known as a parabaloid.
    Slicing it across the \\(x\\)-axis reveals that \\(x\\)-wise
    cross-sections are parabolas. In fact, this property defines the surface! (Source: "
    (utils/link "GeoGebra3D" "https://www.geogebra.org/3d?lang=en")")."
     ]]]

   [:p "In that vein of thought, we might conjecture that when computing
        the derivative of our function \\(f(x,y) = x^2 + y^2\\) with
        respect to \\(x\\), we can imagine we are taking the
        derivative of \\(f(x) = x^2 + C\\), as this is what
        the surface looks like when moving in the \\(x\\) direction.
        Then the deriavative with respect to \\(x\\)
        (what we call its partial derivative)
        would be \\(2x\\). That is to say
        \\(\\frac{\\partial{f}}{\\partial{x}}\\ = 2x\\)
        (as would \\(\\frac{\\partial{f}}{\\partial{y}}\\))."]

   [:p "And it turns out that this thought is in fact correct!"
        (utils/make-footnote "1" "first-footnote-a" "first-footnote-b")
        " But how do we generalize this idea when taking steps across our surface that aren't
          purely horizontal or vertical in nature? For instance,
          what is the derivative associated with some step in the
        direction of the vector \\(\\langle 1, 1 \\rangle \\)?"]

    [:p "
        Well, a step in this direction is equivelant to one step
        in both the \\(x\\) direction and \\(y\\) direction.
        And since we know how our function changes for both a pure step in the
        \\(x\\) direction (\\(\\frac{\\partial{f}}{\\partial{x}}\\)) and \\(y\\)
        direction (\\(\\frac{\\partial{f}}{\\partial{y}}\\)), the derivative
        in this direction is just a sum of the two: \\(\\frac{\\partial{f}}{\\partial{x}} + \\frac{\\partial{f}}{\\partial{y}}\\ =
        2x + 2y\\)."]

  [:p "More generally, given any multivariate function of \\(n\\) variables,
       we can express a derivative with respect to some vector – what we
       call a directional derivative – as the linear combination of that function's partial derivatives
       and the components of that vector. Said another way, given the vectors:"]

  [:p "$$ \\boldsymbol{\\vec{\\alpha}} = \\begin{bmatrix}
          a_{1} \\\\
          a_{2} \\\\
          \\vdots \\\\
          a_{n} \\\\
          \\end{bmatrix}
          \\hspace{1cm}
          \\boldsymbol{\\vec{\\beta}} =
          \\begin{bmatrix}
          \\frac{\\partial{f}}{\\partial{x_1}} \\\\
          \\frac{\\partial{f}}{\\partial{x_2}} \\\\
          \\vdots \\\\
          \\frac{\\partial{f}}{\\partial{x_n}} \\\\
          \\end{bmatrix}
        $$"]

   [:p {:style {:margin-bottom "25px"}} "Then the derivative of \\(f(x_1, x_2, \\ldots, x_n)\\) with respect to \\(\\boldsymbol{\\vec{\\alpha}}\\) is \\(\\boldsymbol{\\vec{\\alpha}} \\cdot \\boldsymbol{\\vec{\\beta}}\\).
        Just as before, the given vector can be decomposed as the sum of steps in the direction
        of a single variable (\\(a_1\\hat{\\imath} + a_2\\hspace{0.08cm}\\skew{2}{\\hat}{\\jmath} + \\ldots\\)),
        and as a function's partials represent the effects of such steps,
        the derivative in this direction is just their sum,
        one for each step taken in the direction they represent (\\(a_1 \\frac{\\partial{f}}{\\partial{x_1}} + a_2 \\frac{\\partial{f}}{\\partial{x_2}} + \\ldots \\))."]


   ;; some image
   [:figure {:class "img-container"}
   [:img {:src "/parabaloid-5.png" :style {:width "50%"}}]
   [:img {:src "/parabaloid-6.png" :style {:width "50%"}}]
  [:figcaption {:class "post-caption"}
   "Fig. 4. The slice of the parabaloid in the direction
   \\(\\langle 1, 1 \\rangle\\) is also a parabola, albeit a
   steeper one. It's generating function is \\(2n^2\\) for every \\(n\\) steps along this vector (see
   right image where an \\(n = 1\\) returns \\(2\\))."]]

   [:p "While this isn't rigorous"
       " (how can you take multiple infinitesimal steps?)," (utils/make-footnote "2" "second-footnote-a" "second-footnote-b")"
        it suits our immediate purposes, as we can now calculate both partial
        and directional derivatives. A natural question then, is what derivative is the greatest?
        In what direction does a function increase most rapidly?"]

   [:p "In other words, what vector, when dotted with the vector containing
        the partials of our function, yields the largest possible
        value? Well, the largest dot product a vector can have (when only
        considering vectors of the same magnitude) is with
        itself, so the direction of steepest ascent must be represented by the thing
        we're dotting against – the vector containing the partials of our function! "]

   [:p "Intuitively, this makes sense too, as how much this vector points in a given
        direction is equivelant to the derivative in that direction, such that it points
        more in steeper directions and less in shallow ones, thus becoming the steepest direction itself." (utils/make-footnote "3" "third-footnote-a" "third-footnote-b")"
        It is yielded by the \\(\\nabla\\) – or gradient – operation:"]

   [:p "$$\\nabla f(x_1, x_2, \\ldots, x_n) =
          \\begin{bmatrix}
          \\frac{\\partial{f}}{\\partial{x_1}} \\\\
          \\frac{\\partial{f}}{\\partial{x_2}} \\\\
          \\vdots \\\\
          \\frac{\\partial{f}}{\\partial{x_n}} \\\\
          \\end{bmatrix}$$"]



   [:h1 {:class "post-section-header"} "Gradient Descent"]


    ;The geometric interpretation associated with
        ;    this idea is that instead of taking a step across
;
;            Even though we only can only really visualize
;            functions of two variables as surfaces, it helps to hold this
;            mental image – of multivariable functions encoding surfaces –
;            in our heads. With that in mind, we can imagine that for some
;            multivariable function of \\(n\\) inputs some surface is generated
;            with some higher-dimesnional analogs for the concepts we would associate
;            with 2D and 3D surfaces – that is to say, some sense of steepness,
;            angle and direction, etc. We don't need to concretize what these might
;            look like (at least not visually) but accepting that these properties
;            exist in some shape or form will allow us to reason with them and make
;            expanding upon our definition of the derivative.



   ])


(defn media-query-1 []
 (at-media {:max-width "600px"}
     [
      ;[:#first-footnote-b {:font-size "13.5px"}]
      ;[:#math-2 {:font-size "13.5px"}]

      ;[:#hot-cold-2 {:width "200px"}]
      ]))

(def post
  {:title "The Mathematics Of Automatic Differentiation"
   :date "2020/10/29"
   :show post-preview
   :content post-content
   :tags ["mathematics", "deep learning"]
   :type "blog-post"
   :overarching "writing"
   :id "1"
   :css (media-query-1)})
