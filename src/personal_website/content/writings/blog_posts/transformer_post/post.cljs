(ns personal-website.content.writings.blog-posts.transformer-post.post
  (:require [personal-website.content.utils :as utils]))


(def post-preview
  "The transformer – a neural network model desiged to replace traditional
  seq2seq architecture – introduces a powerful abstraction to think about
  attention.")

(def post-content
  [:div ;{:style {:text-indent "25px"}}
   [:p "The transformer — a neural network model proposed in "
    (utils/link "Vsawani et. al" "https://arxiv.org/pdf/1706.03762.pdf")
    " – has taken the NLP world by storm in the past few years, contributing to the recent
    success of " (utils/link "OpenAI’s GPT-3" "https://arxiv.org/pdf/2005.14165.pdf")
    " model among many others. However while there is an abundance of online material
    (see further reading) describing the transformer architecture, a crucial idea
    present in the original paper – the key, query, and value abstraction – lacks a clear accessible
    explanation online, especially from the perspective of what motivated it and why it works.
    The focus of this post is to hopefully provide some of that intuition
    and demonstrate why it is so powerful."]


   [:p "The transformer’s attention abstraction is an incredibly helpful tool with which to think
   about the concept of self-attention, and even more broadly representation learning in general.
   Specifically, it operates on the principle that computing multiple representations of a single
   entity which each highlight particular characteristics of that entity is more feasible than
   trying to compute a single representation which is able to highlight those same characteristics
   with similarly granular detail and still be manageably produced and operated over by a neural net.
   That is a veritable mouthful, but in other words: many [smaller] representations are better than
   [a larger] one."]

[:p "Before we delve further into how the transformer phrases self-attention mathematically though, it's worth clarifying what exactly “self-attention” means. In a single sentence, it is the ability for the elements of an input to selectively incorporate information from other elements of that same input when being processed by a neural net, where the degree to which they incorporate information from those other elements is determined by a learnable function.  This approach has proven to be especially useful in language tasks – although it is in no way limited to the NLP field – as it allows the mapping of informational dependencies across the entire input, whereas other approaches such as RNNs degrade the farther away elements of the input are. By allowing individual elements of the input to “attend” to any other element implicit context can be shared throughout the entire input, allowing networks to build up more robust semantic representations of the text they are fed and to work with longer, more complicated text while still being capable of similar comprehension."]

[:p "Again, while the concept of self-attention is not exclusive to language-based tasks, the transformer – and even the idea of attention itself – was designed with this domain in mind, and so approaching the concept from this perspective will make laying down the necessary intuition much easier. From there, we can extrapolate the concept to other problem domains.  With this in mind, let’s consider how we might program self-attention into a neural net for some language task. A key part of the attentional paradigm is being able to selectively incorporate information from other sources  – in the case of self-attention specifically, from other elements of the input. In our example, this equates to other words. But how exactly do we represent this information?

A naive implementation might encode each word into a one-hot vector that considers the first thousand-or-so most common words. This would (obviously) not only be computationally inefficient, but fail to make full use of all the properties of the embedding space. For one, the space would be very sparsely populated, with only the pure unit vectors () of the space holding any real semantic meaning, and as a consequence all representations would be orthogonal to one another – in other words, equally different. This is not a faithful depiction of the words being represented though, as some are definitely more similar than others and giving the networks this information explicitly will help in making their outputs similar too. But how exactly do we make words with similar meanings “closer” and vice versa?

This is a problem the famous word2vec paper solved with learnable embeddings (in other words, using neural networks to produce representations with the properties we want), and it’s far from a new idea either. In fact, learnable embeddings are used for essentially all language tasks nowadays. I retell it only to explicitly acknowledge the idea that how we represent data is a choice, and that to represent it in such a way that exposes valuable information to our network we sometimes must learn those representations themselves. In other words, we must be able to learn the representations we want to learn with.

In most cases, this would be enough. We’ve computed representations which give the network a sense of how words are related and provided it with an embedding space powerful enough to encode new words as it encounters them. But we also want a way to calculate how much attention any given word should focus on another, preferably by the same metric (closness) as it is relatively cheap and easy to compute (via the dot product).  The only problem is that we’ve already optimized the similarity between two vectors under the perspective of the similarity between the meanings of the words they represent. Furthermore, just because"]


  ])

(def post
  {:title "Attention Via The Transformer"
   :date "2020/8/29"
   :show post-preview
   :content post-content
   :tags ["mathematics", "differentiable programming"]
   :type "blog-post"
   :id "0"})
