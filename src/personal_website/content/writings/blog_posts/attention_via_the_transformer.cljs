(ns personal-website.content.writings.blog-posts.attention-via-the-transformer
  (:require [personal-website.utils :as utils]
            [garden.stylesheet :refer [at-media]]))


(def post-preview
  "The transformer NN architecture introduced the modern attention mechanism.
   In this post we will develop an intution for how it works and the
   deeper ideas at play behind it.")

(def post-content
  [:div
   [:p "The transformer — a neural network architecture proposed in "
        (utils/link "Vsawani et. al., 2017" "https://arxiv.org/pdf/1706.03762.pdf")
       " – has taken the NLP world by storm in the past few years, contributing
        to the recent success of "
       (utils/link "OpenAI’s GPT-3" "https://arxiv.org/pdf/2005.14165.pdf")
       " model among many others. While there is an abundance of online
       material (see further reading) describing the transformer architecture though,
       a crucial idea present in the original paper – the key, query, and value
       abstraction – lacks a clear, accessible explanation online, especially from
       the perspective of what motivated it and why it works. The focus of this post
       is to hopefully provide some of that intuition and demonstrate why it is
       so powerful."]


   [:p "Before we lay out this idea from the bottom-up however,
        it's worth taking a few moments to get a bird's-eye-view of
        the whole concept, even if right now it only gives us a vague
        sense of what's really going on. On that note, the core
        idea behind the transformer can be extrapolated
        even beyond the scope of attention to representation
        learning itself. Specifically, it operates on the principle
        that computing multiple representations of a single entity is
        more feasible than trying to compute only a single representation
        [of that entity] without comprimsing it's quality. That is
        a veritable mouthful, but in other words: "
        (utils/bold "many [smaller] representations are better than
        [a larger] one. ")]

        [:p "And it is this idea – more so than that of attention itself –
         that has led to the explosion of successes in the NLP field so recently.
         With that in mind, this post also seeks to (ironically enough) bring
         attention to this somewhat untalked about idea which silently
         supports the transformer's (and most modern) attention mechanisms
         from the shadows, and examine how it might be more generally applied to the
         field of deep learning as whole (my ulterior motive, if you will). With that
         out of the way though, let's begin!"]

   [:h1 {:class "post-section-header"} "Introduction"]

   [:p "Before we delve further into how exactly the transformer phrases
        self-attention mathematically, it's worth clarifying what exactly
        " [:q "self-attention"] " means. In a single sentence, it is the
        ability for the elements of an input to selectively incorporate
        information from other elements of that same input when being
        processed by a neural net, where the degree to which they
        incorporate this information is determined by some learnable
        function."]

    [:p "In a more intuitive sense, it allows the network to " [:q "focus"]
        " on certain relevant parts of the input other than the one its
        currently processing so that it can take into account contextual
        (although not neccessarily local) information when making a
        prediction."]

   [:figure {:class "img-container"}
    [:div {:style {:text-align "center"}}
      [:img {:src "/self_attention_1.png" :class "post-img" :style {:width "75%"}}]]
      [:figcaption {:class "post-caption"}
      "Fig. 1. An example of self-attention. The word being processed (in red)
      learns to attend to other words in the sentence (in blue) and incorporate
      their " [:q "information"] " in differing amounts (Source: "
      (utils/link "Cheng et al., 2016" "https://arxiv.org/pdf/1601.06733.pdf") ")."]]

  [:p "This approach has proven to be especially useful for language
      tasks as it allows the mapping of informational dependencies
      across the entire input, whereas conventional approaches such
      as RNNs (and their more complex cousins, LSTMs and GRUs) degrade
      the further spread out those dependencies are. Self-attention on
      the other hand allows any element of the input to attend to any
      other element, making it much easier for models to build up more
      robust representations of the text they are fed, even when that
      text is especially long or complex."]

   [:figure {:class "img-container"}
    [:div {:style {:text-align "center"}}
      [:img {:src "/rnn_encoder_decoder.jpg" :class "post-img" :style {:width "85%"}}]
      [:img {:src "/self_attention_2.png" :class "post-img" :style {:width "85%"}}]]
    [:figcaption {:class "post-caption"}
     "Fig. 2. Top: RNNs have to compress their entire input text
     into a single vector; only parts of each word's representation
     are con directly access any other words' entire representation
     (Source: " (utils/link "Vsawni. et al., 2017" "https://arxiv.org/pdf/1706.03762.pdf") ")."]]


   [:p "While it has proved incredibly helpful to the NLP field though,
        the concept of self-attention (and more broadly, attention in
        general) is not exclusive to language-based tasks. That said,
        the transformer – and even the idea of attention itself – was
        designed with this domain in mind, and so approaching the concept
        from this perspective will make laying down the necessary intuition
        much easier. Thus, as we consider how we might implement self-attention
        ourselves we will first address it in its canonical NLP context.
        From there, we can extrapolate the concept to other problem domains."]

   [:h1 {:class "post-section-header"} "Learnable Representations" ]

   [:p "So how might we go about implementing self-attention for some language
        task? A key part of the attentional paradigm is being able to selectively
        incorporate information from other sources – in the case of self-attention
        from other elements of the input. For us, this equates to words.
        But whereas the constituent units of other types of data (e.g.,
        the pixels in an image) have self-explanatory digital representations
        (the same as those computers use), how exactly do we represent words?"]

   [:p "A naive implementation might encode each word into a one-hot vector that
        considers the first thousand-or-so most common words. This would
        (obviously) not only be computationally inefficient, but fail to make
        full use of all the properties of the underlying embedding space
        (the vector space used to hold the learned representations of our data)."]

   [:p "For one, the space would be very sparsely populated, with only its
        basis vectors (assuming standard basis) holding any real semantic
        meaning; consequently, all representations would be orthogonal to one
        another – which is to say, equally different. This is not a faithful
        depiction our data though, as some words are definitely more similar
        than others, and giving our network this information explicitly
        will help in making sure it recognizes this. But how would we even
        do something like this?"]

    [:p "The answer is to let a neural network worry it that for us,
         by learning embeddings with the properties we want. In particular,
         we can make the representations of words with similar meanings "
         [:q "closer together"] " and those with disimilar meanings "
         [:q "further apart"] ", where we use the dot product as a measure
         of closness. " (utils/link "Mikolov et. al., 2013's" "https://arxiv.org/pdf/1301.3781.pdf")
         " seminal word2vec algorithm first demonstrated this idea, and (as you can
         tell from the date) it’s far from a new one either."]

    [:p "In fact, learnable  embeddings are used for essentially all language
         tasks nowadays. I bring it up (at the risk of being pedantic) only to
         explicitly acknowledge the fact that how we represent data is a choice,
         and to do so such that it exposes valuable information to our network
         we often must learn these representations themselves. "
         (utils/bold "In other words, we must learn the representations we want
         our network to learn with.")]

    [:figure {:class "img-container"}
     [:div {:style {:text-align "center"}}
      [:img {:src "/learned_embeddings.png" :class "post-img" :style {:width "75%"}}]]
     [:figcaption {:class "post-caption"}
      "Fig. 3. A lower dimensional visualization of a learned embedding space
       using PCA. Words with similar meanings, connotations, or that are used
       conjointly are closer (Source: "
       (utils/link "Tensorflow Embedding Projector" "https://projector.tensorflow.org/") ")."]]


    [:p "But even though learnable embeddings provide a substantial power-up
         to our models' performance, they still only consider a single type of
         information in their predictions: word-meaning. Language however, cannot
        be neatly described as a one-to-one mapping of meanings to words. Words
        can have different meanings in different contexts, and some words (e.g.,
        it, is, the, a, an) don't really have well-defined meanings at all, but
        are instead only useful in modifying other words."]


     [:p "The re-occuring idea here is that we need some form of contextual
          information in addition to raw information about the words themselves,
          thus our use of self-attention. More mathematically-speaking, consider
          the following, where the columns of matrix \\(\\boldsymbol{V}\\) are
          the embeddings of each word in some input text (with similar words closer
          together), and the elements of vector \\(\\boldsymbol{\\vec{\\alpha}}\\)
          are the attention coefficients for a given word (i.e., how much that word
          should pay attention to all other words):"]

    [:p {:id "math-1"} "$$\\boldsymbol{V} =
           \\begin{bmatrix}
           \\vert & \\vert & \\hspace{1cm} & \\vert \\\\
           \\boldsymbol{\\vec{v}_1} & \\boldsymbol{\\vec{v}_2} & \\cdots & \\boldsymbol{\\vec{v}_n} \\\\
           \\vert & \\vert & \\hspace{1cm} & \\vert \\\\
           \\end{bmatrix}
           \\hspace{2cm}
           \\begin{align}
           \\boldsymbol{\\vec{\\alpha}} &=
           \\begin{bmatrix}
           \\alpha_{1} \\\\
           \\alpha_{2} \\\\
           \\vdots \\\\
           \\alpha_{n} \\\\
           \\end{bmatrix}
           \\end{align}$$"]

   [:p  "Then, the self-attention for the word in question becomes nothing more
         than computing  the matrix-vector product \\(\\boldsymbol{V}
         \\boldsymbol{\\vec{\\alpha}} \\), which will yield the linear combination
         of all vector representations with their respective attention coefficients
         \\((\\alpha_1 \\boldsymbol{\\vec{v}_1} + \\alpha_2 \\boldsymbol{\\vec{v}_2} +
         \\ldots + \\alpha_n \\boldsymbol{\\vec{v}_n} \\))."]

   [:p "The intuitive interpretation of this operation is that each words'
        " [:q "information"] " is being scaled by whatever importance the
        processed word assigns it (see Figs. 1 and 2), before being summed
        into a single vector that represents the context that word is acting
        in. This stands out in stark contrast to RNNs, as they only ever
        compute a single, global context vector and reuse it for each word."]

   [:p "This is all fine and good, but we still need to find some function that
        is capable of computing the vector \\(\\boldsymbol{\\vec{\\alpha}}\\) for
        each word in the first place. Obviously this function will need to be
        learned, and it seems intuitively plausible that we could learn it
        similarly to how we learned our other embeddings, such that the
        representations of words that attend highly to one another are close
        together. Then computing the dot product between the processed word
        and all other words yield \\(\\boldsymbol{\\vec{\\alpha}} \\) (for that
        word)."]

  [:figure {:style {:width "100%" :margin "auto"}}
   [:img {:src "/attention-with-similarity-1.svg" :style {:width "50%"}}]
   [:img {:src "/attention-with-similarity-2.svg" :style {:width "50%"}}]
   [:figcaption {:class "post-caption"}
    "Fig. 4. If we inform our self-attention algorithm based on closness we
     might expect pronouns (e.g.,  " [:q "it"] ") to be  close to nouns, and
     linking verbs (e.g., " [:q "is"] ") to be close to adjectives. These words
     don't carry much information in and of themselves  and thus will need to attend
     highly to the words they're referring to."]]

  [:p "This is an especially attractive propsect since computing the dot product
       is computationally trivial (as opposed to having to train a whole neural net).
       Unfortunately, there are two key flaws with this approach that stop it from
       working outright."]

  [:p "Firstly, the similarity between our vector representations has
       already already been optimized such that words with similar
       meanings have similar representations (and are thus closer).
       As a result, it may not be possible to encode data about
       attentional relationships into our representations without
       compromising the information about semantic relationships
       that is already there."]

  [:p "For instance, consider the case of two antonyms, like the
       words " [:q "hot"] " and " [:q "cold"]". Their learned embeddings
       would point in essentially opposite directions (they have dissimilar
       meanings and thus are far apart). However both words may want to
       attend highly to the word " [:q "temperature"] ", as in the sentence
       " [:q "The temperature is hot"] " or " [:q "The temperature is cold"]
       ", where the relation being learned is that X can describe Y (i.e.,
       hot and cold paramterize a temperature's possible states)."]


   [:p "However due to the commutative nature of similarity we cannot make
        two different things ("[:q "hot"] " and " [:q "cold"] ") similar to
        a single thing (" [:q "temperature"] ") without making them similar
        to eachother. Yet making the representations of " [:q "hot"] " and
        " [:q "cold"] " more similar leads our network to believe they are
        synonyms! Thus, adding contetxual information to our words'
        embeddings overwrites what is already there." ]

  [:figure {:style {:width "100%" :margin "auto"}}
   [:img {:src "/cold-hot-temp-vectors.svg" :id "hot-cold-2" :style {:width "50%" }}]
   [:img { :src "/cold-hot-vectors.svg" :id "hot-cold-1" :style {:width "50%" }}]
   [:figcaption {:class "post-caption"}
    "Fig. 5. Making the representations of " [:q "hot"] " and " [:q "cold"]
    " closer to that of " [:q "temperature"] " necessarily makes them closer to
    eachother because they are converging on a single point (as you can see on
    the right). However this causes us to loose the information that they are
    antonyms."]]

  [:p {:style {:padding-bottom "10px"}}
      "But there's another problem too! Attention is not a mutually reciprocal
       action, but similarity is. Consider the sentence " [:q "He
       picked  up the tennis  ball and found it was wet."] " We would probably
       expect the pronoun " [:q "it"] " to attend highly to the word " [:q "ball"]
       " (what " [:q "it"] " is referring to) while the word " [:q "ball"]"
       would probably attend highly to " [:q "tennis"] " and " [:q "picked up"]
       " (its type and action performed on it) but weakly to "[:q "it"]
       " (after all, what useful information does it get from this?)."]

   [:p "However even though it might be more advantageous for " [:q "ball"] " not
        to attend highly to " [:q "it"]", so long as " [:q "it"] " attends highly to
        " [:q "ball"] ", " [:q "ball"] " must attend to " [:q "it"] " with equal
        strength. This is beacuase making " [:q "it"] " closer to " [:q "ball"]
        ", necessarily makes " [:q "ball"] " closer to " [:q "it"] " by an equal amount."]

   [:p {:style {:margin-bottom "35px"}}
      "More generally if a word X highly attends to another word Y, then Y must
       attend as highly to X by default. Furthermore, since X is similar to Y it
       is also similar to those words which are also similar to Y (words which
       Y attends highly to) and by extension those words which are similar to those
       words which are similar to Y (the words the words similar to Y attend highly to)
       and so on and so forth. Thus, everything will end up attending to everything else!"]

    [:figure {:class "img-container" :style {:width "100%" :margin "auto"}}
     [:div {:style {:text-align "center"}}
      [:img {:src "/reciprocal-attention.svg" :style {:width "100%" :margin-left "6%"}}]  ]]

    [:figure {:class "img-container" :style {:width "100%" :margin "auto"}}
      [:img {:src "/reciprocal-attention-2.svg" :style {:width "100%" :margin-left "6%"}}]]

      [:figcaption {:class "post-caption"}
       "Fig. 6. If we use closeness as an indicator for self-attention,
        then attention becomes reciprocal. The original attention (in black)
        will be automatically reciprocated (in red) even if this is not
        neccessarily advantageous. The result is that everything ends up attending to
        everything else, making the idea of attention useless."]

   [:p "Evidently, using similarity as a metric for self-attention
        comes with its problems. But being able to use the dot product
        for this purpose would be awfully nice, and seems to (at least
        intuitively) make a great deal of sense as well.
        So how can we overcome these shortcomings?"]

   [:h1 {:class "post-section-header"} "Keys, Queries, and Values"]

   [:p "The answer, in fact, is deceptively simple: with multiple embedding
        spaces. Let's consider our first problem again.  There wasn't enough
        " [:q "room"] " in a single representation to hold information about
        word meaning and attentional relationships. The natural thing to do
        would be to distribute this information throughout multiple
        representations, as opposed to trying to cram everything into just one."]

   [:p "So let's create two embedding spaces. In \\(\\boldsymbol{E_1}\\), the
        vector representation of each word will encode the semantic information
        associated with that word. It would be in this space that " [:q "hot"]
        " and   " [:q "cold"] " are oppositely positioned. Similarly, in
        \\(\\boldsymbol{E_2}\\), each words' embedding will encode their attentional
        information – here, " [:q "hot"] " and " [:q "cold"] " would be close together
        along with " [:q "temperature"] ". But this is no longer a problem as we have
        preserved the information that they are antonyms within \\(\\boldsymbol{E_1}\\)."]

   [:p "More mathematically, given \\(\\boldsymbol{\\vec{v}_{cold}},
        \\boldsymbol{\\vec{v}_{hot}} \\in \\boldsymbol{E_1}\\) and
        \\(\\boldsymbol{\\vec{\\alpha}_{cold}}, \\boldsymbol{\\vec{\\alpha}_{hot}},
        \\boldsymbol{\\vec{\\alpha}_{temperature}} \\in \\boldsymbol{E_2}\\)
        we would expect \\(\\boldsymbol{\\vec{v}_{cold}} \\cdot \\boldsymbol{\\vec{v}_{hot}}\\)
        to be negative (" [:q "hot"] " and " [:q "cold"] " are antonyms)
        and \\(\\boldsymbol{\\vec{\\alpha}_{cold}} \\cdot \\boldsymbol{\\vec{\\alpha}_{temperature}}\\)
        and \\(\\boldsymbol{\\vec{\\alpha}_{hot}} \\cdot \\boldsymbol{\\vec{\\alpha}_{temperature}}\\)
        to be very positive (" [:q "hot"] " and   " [:q "cold"] " attend highly to " [:q "temperature"] ")."]

  [:figure {:style {:width "100%" :margin "auto"}}
    [:img {:src "/cold-hot-temp-vectors-vspace.svg" :style {:width "50%"}}]
    [:img {:src "/cold-hot-vectors-vspace.svg" :style {:width "50%"}}]]
  [:figcaption {:class "post-caption"}
   "Fig. 7. So our visualization from earlier wasn't
   necessarily wrong – it would just have to take place in seperate
   embedding spaces (\\(\\boldsymbol{E_1}\\) is on the
   left, \\(\\boldsymbol{E_2}\\) is on the right)."]

   [:p "This seems to solve our first problem, but it doesn't do much
        to help us with our second one. By having " [:q "hot"] " and "
        [:q "cold"] " attend highly to " [:q "temperature" ] ", we're
        forcing it to attend highly to them as well. Luckily for us though,
        this has a very similar fix: add another embedding space. More
        specifically, we need to split our embedding space \\(\\boldsymbol{E_2}\\),
        into two seperate spaces."]

   [:p "To understand why, let's play along. Say we did have two different
        embedding spaces, \\(\\boldsymbol{E_q}\\) and \\(\\boldsymbol{E_k}\\),
        and that we define the self-attention operation like so. When
        calculating self-attention with respect to
        " [:q "it"] " (i.e., how much " [:q "it"] " attends to other words) we
        take the dot product of its embedding in \\(\\boldsymbol{E_q}\\) and the embedding
        of " [:q "ball"] " in \\(\\boldsymbol{E_k}\\). Likewise, self-attention with respect to
        " [:q "ball"] " is computed by dotting its embedding in
        \\(\\boldsymbol{E_q}\\) and the embedding of " [:q "it"] " in
        \\(\\boldsymbol{E_k}\\). As both operations deal with different embeddings
        (" [:q "it"] " in \\(\\boldsymbol{E_q}\\) and " [:q "ball"] " in \\(\\boldsymbol{E_k}\\) vs.
         " [:q "ball"] " in \\(\\boldsymbol{E_q}\\) and " [:q "it"] " in \\(\\boldsymbol{E_k}\\)),
         attention doesn't reciprocate. "]

   [:p "But what is the intuition behind this operation? Essentially we're
        computing two representations for each word: one is a
        " [:q "key"] ", and the other is a " [:q "lock"] ".
        Computing self-attention with respect to some word X is a matter of
        seeing how similar other words' lock-representations are to its key-representation. "
        (utils/bold "But, just because a word Y's lock-representation is similar to
        X's key-representation doesn't imply the opposite – its key-representation
        may not be similar to X's lock representation!")]

   [:p "To adopt the transformer's lingo, we can refer
        to these key- and lock-representations as queries (key-representations)
        and keys (lock-representations). By using different keys and
        queries when computing self-attention with respect to " [:q "it"]
        " vs. " [:q "ball"] ", self-attention becomes non-commutative."]

  [:figure {:style {:width "100%" :margin "auto"}}
   [:img {:src "/it-ball-1.svg" :style {:width "50%"}}]
   [:img {:src "/it-ball-2.svg" :style {:width "50%"}}]
   [:figcaption {:class "post-caption"}
    "Fig. 8. \\(\\boldsymbol{E_q}\\) is on the right and \\(\\boldsymbol{E_k}\\)
     is on the left. Notice that the representation of " [:q "it"] " in
     \\(\\boldsymbol{E_q}\\) is close to the representation of " [:q "ball"] "
     in \\(\\boldsymbol{E_k}\\) (" [:q "it"] " attends highly to " [:q "ball"] ")
     but the representation of " [:q "ball"] " in \\(\\boldsymbol{E_q}\\) is
     rather far from the representation of " [:q "it"] " in \\(\\boldsymbol{E_k}\\)
     (" [:q "ball"] " attends weakly to " [:q "it"]")."]]


  [:figure {:style {:width "100%" :margin "auto" :margin-top "25px"}}
   [:div {:style {:text-align "center"}}
     [:img {:src "/it-ball-3.svg" :class "post-img" :style {:width "70%"}}]]
   [:figcaption {:class "post-caption"}
     "Fig. 9. A juxtaposition of the two embedding spaces \\(\\boldsymbol{E_q}\\) and
      \\(\\boldsymbol{E_k}\\). This makes clear  that " [:q "it"] " attends to "
      [:q "ball"] " (small angle) without " [:q "ball"] " attending as highly to " [:q "it"]" (large angle)."]]



   [:p "So what does this all mean mathematically? Let's imagine we are given some sentence of
        variable length and need to find \\(\\boldsymbol{\\vec{\\alpha}}\\) for the ith word
        in this sentence. Given this word's query \\(\\boldsymbol{\\vec{q}}\\) and the matrix
        \\(\\boldsymbol{K}\\) whose columns are the keys of each word n the input, we can
        calculate it like so: "]

   [:p {:id "math-2"} "$$
          \\boldsymbol{K} =
          \\begin{bmatrix}
          \\vert & \\vert & \\hspace{1cm} & \\vert \\\\
          \\boldsymbol{\\vec{k}_1} & \\boldsymbol{\\vec{k}_2} & \\cdots & \\boldsymbol{\\vec{k}_n} \\\\
          \\vert & \\vert & \\hspace{1cm} & \\vert \\\\
          \\end{bmatrix}
          \\hspace{1cm}
          \\boldsymbol{\\vec{q}} \\in \\boldsymbol{E_{q}}
          \\hspace{1cm}
          \\boldsymbol{\\vec{\\alpha}} = \\boldsymbol{K}^\\top\\boldsymbol{\\vec{q}}$$"]

   [:p "This is equivelant to dotting \\(\\boldsymbol{\\vec{q}}\\) with each entry of
        \\(\\boldsymbol{K}\\) and storing the results in a vector, which is exactly how
        we defined key-query attention. Furthermore, if we recall, the matrix
        \\(\\boldsymbol{V}\\) contains the semantic embeddings of each
        word – or the values of each word, in the transformer's lingo. Thus we
        can compute the context vector for the word in question,
        \\(\\boldsymbol{\\vec{\\gamma}}\\), to be the
        \\(\\boldsymbol{V}\\boldsymbol{\\vec{\\alpha}}\\), or more generally:"]

   [:p "$$\\boldsymbol{\\vec{\\gamma}} =
        \\boldsymbol{V}\\boldsymbol{K}^\\top\\boldsymbol{\\vec{q}}$$"]

   [:p "This vector \\(\\boldsymbol{\\vec{\\gamma}}\\) can then be fed into our neural
        net and should theoretically contain sufficient information
        for our model to exploit the relationships between words, ideally yielding
        performance far better than when we fashioned our word-embeddings on
        semantic meaning alone."]


[:h1 {:class "post-section-header"} "Practical Self-Attention"]

  [:p "So, are we done then? Not quite. We have derived the theoretical foundation of
       the transformer's attention mechanism, yes, but have yet to arrive
       at its full formula for self-attention or understand how this
       self-attention operation is composed, which is what gives the
       architecture its true power."]

   [:p "Well, what is the full formula for self-attention then? Given a set of matrices
        \\(\\boldsymbol{K}\\), \\(\\boldsymbol{Q}\\), and \\(\\boldsymbol{V}\\) whose
        columns contain the key, query, and value representations for the words in some given input text,
        the full formula for the transformer's attention mechanism
        is given by the function shown below: " (utils/make-footnote "1" "first-footnote-a" "first-footnote-b")]

   [:p "$$Attention(\\boldsymbol{K}, \\boldsymbol{Q}, \\boldsymbol{V})  =
      softmax(\\frac{\\boldsymbol{K}^\\top \\boldsymbol{Q}}{\\sqrt{d_k}})\\boldsymbol{V}^\\top$$"]

   [:p "Let's break it down. Firstly,
       instead of computing \\(\\boldsymbol{K}^\\top\\boldsymbol{\\vec{q}}\\)
       we are computing \\(\\boldsymbol{K}^\\top\\boldsymbol{Q}\\). Wheras the
       former generates \\(\\boldsymbol{\\vec{\\alpha}}\\)
       for the word whose query is \\(\\boldsymbol{\\vec{q}}\\) the latter
       generates \\(\\boldsymbol{\\vec{\\alpha}}\\) for every word in the input, and stores
       the results in the columns of a matrix. In other words, this is just a batch operation."]

   [:p " But what's with the   \\(\\sqrt{d_k}\\) term? Well, the nature of the dot
         product is such that higher dimensional vectors tend to have larger
         dot products. In a space with possibly hundreds of dimensions,
         this means dot products are going to be on the big side. Thus the transformer
        incorporates a scaling factor of \\(\\frac{1}{\\sqrt{d_k}}\\) to account for this,
        where \\(d_k\\) is the dimensionality of the keys' embeddings."]

   [:p "Finally, we normalize the columns of this scaled matrix
      (which contain every words' \\(\\boldsymbol{\\vec{\\alpha}}\\) vector)
      via a softmax, so that the attention coefficients  of each word's
      \\(\\boldsymbol{\\vec{\\alpha}}\\) vector sum to one (this also prevents
      things from getting too big). Multiplying with
      \\(\\boldsymbol{V}^\\top\\) then yields a matrix whose rows
      are the context vectors \\(\\boldsymbol{\\vec{\\gamma}}\\) for each word in the input,
      the things that we're going to send through our neural net."]

      [:figure {:class "img-container"}
       [:div {:style {:text-align "center"}}
          [:img {:src "/scaled-dot-prod-atten.png" :id "scaled-dot" :style {:width "30%"}}]]
         [:figcaption {:class "post-caption"}
         "Fig. 10. A visual illustration of the the above self-attention
         formula. The step labeled " [:q "Masking"] " has to do specfically
         with language-based tasks, and we won't get into it in this post. (Source: "
         (utils/link "Vsawni. et al., 2017" "https://arxiv.org/pdf/1706.03762.pdf") ")."]]


       [:p "And there you have it: the full formula for the transformer's
            self-attention mechanism! But thus far we've sort of glossed over how
            exactly we generate the key, query, and value representations for
            each word – and this is more important than it may seem. We've acknowledged
            that they're learned, but does that necessarily mean we need a
            different neural net to compute each representation?"]

      [:p "The answer is no, and thankfully so, as this would just add to our
           computational load. Indeed, it turns out that we can get away with
           using only a single neural net, by training it to compute an
           asbtract representation of each word from which all other
           representations can be derived."]

       [:p "This abstract representation lives in embedding space \\(\\boldsymbol{E}\\),
            and we can think of it as having all the necessary information about a word
            to calculate its key, query, and value without actually being any of the
            three itself. As such, this representation can be transformed into
            the key, query, or value for its respective word via a set of learned
            linear maps, represented by the matrices
            \\(\\boldsymbol{W^K},
           \\boldsymbol{W^Q},\\) and \\(\\boldsymbol{W^V}\\)."]

      ; [:p "$$ \\boldsymbol{\\varphi_k} : \\boldsymbol{E} \\rightarrow \\boldsymbol{E_k}\\hspace{2cm}
      ;         \\boldsymbol{\\varphi_q} : \\boldsymbol{E} \\rightarrow \\boldsymbol{E_q}\\hspace{2cm}
      ;         \\boldsymbol{\\varphi_v} : \\boldsymbol{E} \\rightarrow \\boldsymbol{E_v}$$"]

      [:p (utils/bold "In other words, this representation is abstract precisely because it
           can be concretized into any of the network's three preceptions of a
           given word!") " \\(\\boldsymbol{K},
          \\boldsymbol{Q},\\) and \\(\\boldsymbol{V}\\) can be calcuated
          by transforming the matrix \\(\\boldsymbol{X}\\) whose columns
          are the abstract representations for every word in some input:"]

          [:p {:style {:margin-bottom "55px"}} "$$\\boldsymbol{K} = (\\boldsymbol{W^K}\\boldsymbol{X})^\\top \\hspace{2cm}
                 \\boldsymbol{Q} = (\\boldsymbol{W^Q}\\boldsymbol{X})^\\top\\hspace{2cm}
                 \\boldsymbol{V} = (\\boldsymbol{W^K}\\boldsymbol{X})^\\top$$"]


    [:figure {:style {:width "100%" :margin "auto" :margin-top "25px"}}
     [:div {:style {:text-align "center"}}
           [:img {:src "/abstract_embedding-2.svg" :style {:width "40%"}}]
     [:span {:style {:width "5%" :display "inline-block"}}]
      [:img {:src "/abstract_embedding.svg" :style {:width "40%"}}]]
     [:figcaption {:class "post-caption" :style {:margin-top "25px"}}
      "Fig. 11. An example of what representations for " [:q "it"] " and " [:q "ball"] " might
       look like ("[:q "it"] "  is on the left, " [:q "ball"] " is on the right). A
       word's abstract representation (top-right of each diagram) is used to compute all the others."]]

     [:p "This idea is very powerful, and while we'll expound more on it later,
          it's worth reiterating. Rather than trying to compute a single,
          highly-detailed representation of each word, the transformer knowingly
          computes a general, albeit incomplete representation, and instead learns how
          to transform this representation into several more specialized
          ones (e.g., a key, query, or value)."]


   [:h1 {:class "post-section-header"} "Multi-Head Self-Attention"]

   [:p "But the transformer takes this one step further! Instead of just
        learning one key, query, and value for a single word, it learns multiple.
        Why might we want to do this though? Well, one way to motivate this idea is to
        compare and contrast the self-attention operation to convolutions."]

   [:p "If you haven't noticed already these two operations are strikingly
        similar – they're both weighted averages of some kind. However while
        the weights of a convolution remain constant throughout the whole input,
        weights (attention coefficients) change from element to element in
        self-attention."]

   [:p "It would be unwise to assume that convolutions, as a rule,
        are always less powerful then self-attention, though
        (at least in the form we've defined it so far). In fact, there
        is a desirable property of the convolution operator
        that we would like to extend self-attention operation to be applied
        based on relative position . "]

   [:p "Self-attention is just a linear combination, or in other words
        a weighted average. It would be like a convolution filter in
        which all columns are only one number. It fundamentally limits
        the ability to compress informagio  In other words we can think
        of it as limting what our context vector could be because we can only
        scale and add the original in our
        sentence thet limit what we can acheive our span is limited ye s
        "]

   ;Single-head self-attention can be defined as a convolution

   [:p "But a self-attention alone isn't as powerful as
        After all, self attention is just a linear combination
        of its

"]

   [:p "But unlike self attention
        There is no rotating of vectors only scaling"]

        ;albeit at the cost of reduced effective resolution due
        ;to averaging attention-weighted positions

        ;Multi-head attention allows the model to jointly attend to information from different representation
        ;subspaces at different positions.

   ;ITS ALL ABOUT SPLITTING INFORMATION APART!

    [:img {:src "/conv-vs-atten.png" :style {:width "80%"}}]

   [:p "Because its weights are global, a doesn't only convovle one filter
        around . These give it representations containing specific pieces of
        information. This information can then be "]

   [:p "In the transformer's lingo, we call these attentional units heads, where each
        head is associated with different \\(\\boldsymbol{W^K},
       \\boldsymbol{W^Q},\\) and \\(\\boldsymbol{W^V}\\) matrices. It then
       computes the matrix of context vectors like so:"]

   [:p "$$\\textrm{head}_\\textrm{i} = Attention\\left((\\boldsymbol{W^K_i}\\boldsymbol{X})^\\top,
        (\\boldsymbol{W^Q_i}\\boldsymbol{X})^\\top, (\\boldsymbol{W^V_i}\\boldsymbol{X})^\\top\\right)$$"]

   [:p "In other words, each attention head learns a different set of linear maps
        that transforms the same abstract representation into a different key,
        query, and value. This means that given \\(n\\) attention heads
        we wind up with \\(n\\) matrices containing a different \\(\\boldsymbol{\\vec{\\gamma}}\\)
        for each word. The transformer aggregates
        this information by concatenating these matrices together and then multiplying
        by some other learned matrix \\(\\boldsymbol{W^O}\\), such
        that each word ends up with only a single context vector:"]

   [:p "$$\\textrm{Concat}(\\textrm{head}_1, \\ldots, \\textrm{head}_n) \\boldsymbol{W^O}$$"]

   [:p "This final matrix should then hold the informtion of all the indivdual attention heads"]

   [:p "So the operation itself is simple enough – but why are we doing it to begin with? The
        transformer paper's answer's are somewhat cryptic here, but we will do
        our bst to decipher them. The first reason is that f reduced effective resolution due
          to averaging attention-weighted positions In other words compared to RNNs which
          use a non-linearity here
          also

          Multi-head attention allows the model to jointly attend to information from different representation
          subspaces at different positions. With a single attention head, averaging inhibits this."]

[:h1 {:class "post-section-header"} "What Does It All Mean?"]
[:h1 {:class "post-section-header"} "Multi-Representation Learning"]
[:h1 {:class "post-section-header"} "An Ode To The Transformer"]

[:h1 {:class "post-section-header"} "References"]
[:h1 {:class "post-section-header" :id "further-reading"} "Further Reading"]
[:h1 {:class "post-section-header"} "Footnotes"]

[:p "1. Technically this isn't the exact formula given in the actual transformer paper,
        but is equivelant. That's because the paper regards words' representations as being
        stored in the rows of the \\(\\boldsymbol{K}\\), \\(\\boldsymbol{Q}\\), and \\(\\boldsymbol{V}\\)
        matrices where as in this post we regard them as being stored in their columns."

  (utils/make-footnote "↩" "first-footnote-b" "first-footnote-a")]


   ])




(defn media-query-1 []
  (at-media {:max-width "600px"}
      [
       [:#scaled-dot {:width "70%"}]
       ;[:#math-1 {:font-size "13.5px"}]
       ;[:#math-2 {:font-size "13.5px"}]

       ;[:#hot-cold-2 {:width "200px"}]
       ]))

(def post
  {:title "Attention Via The Transformer"
   :date "2020/08/29"
   :show post-preview
   :content post-content
   :tags ["mathematics", "differentiable programming"]
   :type "blog-post"
   :overarching "writing"
   :id "0"
   :css (media-query-1)})
