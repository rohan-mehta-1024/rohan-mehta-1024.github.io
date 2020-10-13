goog.provide('personal_website.content.writings.blog_posts.attention_via_the_transformer.post');
personal_website.content.writings.blog_posts.attention_via_the_transformer.post.post_preview = "The transformer \u2013 a neural network model desiged to replace traditional\n  seq2seq architecture \u2013 introduces a powerful abstraction to think about\n  attention.";
personal_website.content.writings.blog_posts.attention_via_the_transformer.post.post_content = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The transformer \u2014 a neural network model proposed in ",personal_website.content.utils.link("Vsawani et. al","https://arxiv.org/pdf/1706.03762.pdf")," \u2013 has taken the NLP world by storm in the past few years, contributing to the recent\n    success of ",personal_website.content.utils.link("OpenAI\u2019s GPT-3","https://arxiv.org/pdf/2005.14165.pdf")," model among many others. However while there is an abundance of online material\n    (see further reading) describing the transformer architecture, a crucial idea\n    present in the original paper \u2013 the key, query, and value abstraction \u2013 lacks a clear accessible\n    explanation online, especially from the perspective of what motivated it and why it works.\n    The focus of this post is to hopefully provide some of that intuition\n    and demonstrate why it is so powerful."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The transformer\u2019s attention abstraction is an incredibly helpful tool with which to think\n   about the concept of self-attention, and even more broadly representation learning in general.\n   Specifically, it operates on the principle that computing multiple representations of a single\n   entity which each highlight particular characteristics of that entity is more feasible than\n   trying to compute a single representation which is able to highlight those same characteristics\n   with similarly granular detail and still be manageably produced and operated over by a neural net.\n   That is a veritable mouthful, but in other words: many [smaller] representations are better than\n   [a larger] one."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Before we delve further into how the transformer phrases self-attention mathematically though,\n     it's worth clarifying what exactly \u201Cself-attention\u201D means. In a single sentence, it is\n     the ability for the elements of an input to selectively incorporate information from other elements\n     of that same input when being processed by a neural net, where the degree to which they incorporate information\n     from those other elements is determined by a learnable function.  This approach has proven to be especially useful\n     in language tasks \u2013 although it is in no way limited to the NLP field \u2013 as it allows the mapping of informational\n     dependencies across the entire input, whereas other approaches such as RNNs degrade the farther away elements of\n     the input are. By allowing individual elements of the input to \u201Cattend\u201D to any other element implicit context can\n     be shared throughout the entire input, allowing networks to build up more robust semantic representations of the\n     text they are fed and to work with longer, more complicated text while still being capable of similar comprehension."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/x.jpg"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Again, while the concept of self-attention is not exclusive to language-based tasks, the transformer \u2013 and even the idea of attention itself \u2013 was designed with this domain in mind, and so approaching the concept from this perspective will make laying down the necessary intuition much easier. From there, we can extrapolate the concept to other problem domains.  With this in mind, let\u2019s consider how we might program self-attention into a neural net for some language task. A key part of the attentional paradigm is being able to selectively incorporate information from other sources  \u2013 in the case of self-attention specifically, from other elements of the input. In our example, this equates to other words. But how exactly do we represent this information?\n\nA naive implementation might encode each word into a one-hot vector that considers the first thousand-or-so most common words. This would (obviously) not only be computationally inefficient, but fail to make full use of all the properties of the embedding space. For one, the space would be very sparsely populated, with only the pure unit vectors () of the space holding any real semantic meaning, and as a consequence all representations would be orthogonal to one another \u2013 in other words, equally different. This is not a faithful depiction of the words being represented though, as some are definitely more similar than others and giving the networks this information explicitly will help in making their outputs similar too. But how exactly do we make words with similar meanings \u201Ccloser\u201D and vice versa?\n\nThis is a problem the famous word2vec paper solved with learnable embeddings (in other words, using neural networks to produce representations with the properties we want), and it\u2019s far from a new idea either. In fact, learnable embeddings are used for essentially all language tasks nowadays. I retell it only to explicitly acknowledge the idea that how we represent data is a choice, and that to represent it in such a way that exposes valuable information to our network we sometimes must learn those representations themselves. In other words, we must be able to learn the representations we want to learn with.\n\nIn most cases, this would be enough. We\u2019ve computed representations which give the network a sense of how words are related and provided it with an embedding space powerful enough to encode new words as it encounters them. But we also want a way to calculate how much attention any given word should focus on another, preferably by the same metric (closness) as it is relatively cheap and easy to compute (via the dot product).  The only problem is that we\u2019ve already optimized the similarity between two vectors under the perspective of the similarity between the meanings of the words they represent. Furthermore, just because"], null)], null);
personal_website.content.writings.blog_posts.attention_via_the_transformer.post.post = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"title","title",636505583),"Attention Via The Transformer",new cljs.core.Keyword(null,"date","date",-1463434462),"2020/8/29",new cljs.core.Keyword(null,"show","show",-576705889),personal_website.content.writings.blog_posts.attention_via_the_transformer.post.post_preview,new cljs.core.Keyword(null,"content","content",15833224),personal_website.content.writings.blog_posts.attention_via_the_transformer.post.post_content,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mathematics","differentiable programming"], null),new cljs.core.Keyword(null,"type","type",1174270348),"blog-post",new cljs.core.Keyword(null,"id","id",-1388402092),"0"], null);

//# sourceMappingURL=personal_website.content.writings.blog_posts.attention_via_the_transformer.post.js.map
