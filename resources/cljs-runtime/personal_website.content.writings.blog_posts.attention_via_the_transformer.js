goog.provide('personal_website.content.writings.blog_posts.attention_via_the_transformer');
personal_website.content.writings.blog_posts.attention_via_the_transformer.post_preview = "The transformer \u2013 a neural network model desiged to replace traditional\n  seq2seq architecture \u2013 introduces a powerful abstraction to think about\n  attention.";
personal_website.content.writings.blog_posts.attention_via_the_transformer.post_content = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The transformer \u2014 a neural network model proposed in ",personal_website.utils.link("Vsawani et. al., 2017","https://arxiv.org/pdf/1706.03762.pdf")," \u2013 has taken the NLP world by storm in the past few years, contributing to the recent\n    success of ",personal_website.utils.link("OpenAI\u2019s GPT-3","https://arxiv.org/pdf/2005.14165.pdf")," model among many others. However while there is an abundance of online material\n    (see further reading) describing the transformer architecture, a crucial idea\n    present in the original paper \u2013 the key, query, and value abstraction \u2013 lacks a clear accessible\n    explanation online, especially from the perspective of what motivated it and why it works.\n    The focus of this post is to hopefully provide some of that intuition\n    and demonstrate why it is so powerful."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"On that note, the transformer\u2019s attention abstraction is an incredibly helpful tool with which to think\n   about the concept of self-attention, and even more broadly representation learning in general.\n   Specifically, it operates on the principle that computing multiple representations of a single\n   entity which each highlight particular characteristics of that entity is more feasible than\n   trying to compute a single representation which is able to highlight those same characteristics\n   with similarly granular detail and still be manageably produced and operated over by a neural net.\n   That is a veritable mouthful, but in other words: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"WorkSansBold"], null)], null),"many [smaller] representations are better than [a larger] one."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"post-section-header"], null),"Introduction"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Before we delve further into how exactly the transformer phrases self-attention\n        mathematically though, it's worth clarifying what exactly \u201Cself-attention\u201D means.\n        In a single sentence, it is the ability for the elements of an input to selectively\n        incorporate information from other elements of that same input when being processed by a\n        neural net, where the degree to which they incorporate information from those other\n        elements is determined by a learnable function."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"img-container"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"/self_attention_1.png",new cljs.core.Keyword(null,"class","class",-2030961996),"post-img",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"75%"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figcaption","figcaption",-1790122047),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"post-caption"], null),"Fig. 1. An example of self-attention. The word being processed (in red)\n      learns to attend to other words in the sentence (in blue) and incorporate their ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),"information"], null)," in differing amounts (Source: ",personal_website.utils.link("Cheng et al., 2016","https://arxiv.org/pdf/1601.06733.pdf"),")."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This approach has proven to be especially useful in language tasks \u2013 although it is\n       in no way limited to the NLP field \u2013 as it allows the mapping of informational\n       dependencies across the entire input, whereas other approaches such as RNNs degrade the\n       farther away elements of the input are. By allowing individual elements of the input to \u201Cattend\u201D\n       to any other element implicit context can be shared throughout the entire input, allowing networks\n       to build up more robust semantic representations of the text they are fed, even when\n       that text is especially long or complex."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"img-container"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"/rnn_encoder_decoder.jpg",new cljs.core.Keyword(null,"class","class",-2030961996),"post-img",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"85%"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"/self_attention_2.png",new cljs.core.Keyword(null,"class","class",-2030961996),"post-img",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"85%"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figcaption","figcaption",-1790122047),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"post-caption"], null),"Fig. 2. Top: RNNs have to compress their entire input text into a single vector; only parts of\n      each word's representation are conserved. Bottom: In contrast, self-attention allows words to\n      directly access any other words' entire representation (Source: ",personal_website.utils.link("Vsawni. et al., 2017","https://arxiv.org/pdf/1706.03762.pdf"),")."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Again, while the concept of self-attention is not exclusive to language-based tasks,\n        the transformer \u2013 and even the idea of attention itself \u2013 was designed with this\n        domain in mind, and so approaching the concept from this perspective will make laying down\n        the necessary intuition much easier. From there, we can extrapolate the concept to\n        other problem domains."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"post-section-header"], null),"Learnable Representations"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"With this in mind, let\u2019s consider how we might program self-attention into\n        a neural net for some language task. A key part of the attentional paradigm is\n        being able to selectively incorporate information from other sources  \u2013 in the case\n        of self-attention specifically, from other elements of the input. In our example,\n        this equates to other words. But how exactly do we represent this information?"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"A naive implementation might encode each word into a one-hot vector that considers\n        the first thousand-or-so most common words. This would (obviously) not only be computationally\n        inefficient, but fail to make full use of all the properties of the embedding space. For one,\n        the space would be very sparsely populated, with only the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),"pure"], null)," unit vectors of\n        the space holding any real semantic meaning; as a consequence all representations would be\n        orthogonal to one another \u2013 in other words, equally different. This is not a faithful depiction\n        of the data being represented though, as some words are definitely more similar than others, and\n        giving the networks this information explicitly will help in making sure that their computed\n        representations are similar too. But how exactly do we make words with similar meanings\n        \u201Ccloser\u201D and vice versa?"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This is a problem ",personal_website.utils.link("Mikolov et. al., 2013's","https://arxiv.org/pdf/1301.3781.pdf")," famous word2vec algorithm solved with learnable embeddings (in other words, using neural\n          networks to produce representations with the properties we want), and it\u2019s far from a new\n          idea either. In fact, learnable embeddings are used for essentially all language tasks nowadays.\n          I retell it (at the risk of being pedantic) only to explicitly acknowledge the idea that how we\n          represent data is a choice, and that to represent it such that exposes valuable information to our\n          network we often must learn the representations in question. In other words, we must learn the\n          representations we want to learn with."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"img-container"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"/learned_embeddings.png",new cljs.core.Keyword(null,"class","class",-2030961996),"post-img",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"75%"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figcaption","figcaption",-1790122047),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"post-caption"], null),"Fig. 3. A lower dimensional visualization of a learned embedding space using PCA. Words\n      with similar meanings, connotations, or that are used conjointly are ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),"closer"], null)," (Source: ",personal_website.utils.link("Tensorflow Embedding Projector","https://projector.tensorflow.org/"),")."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"While the use of learnable embeddings provides a substantial power-up to our models',\n        only a single type of information is being considered in their prediction:\n        word-meaning. The meaning of a word alone however is not enough to understand language.\n        Words can have different meanings in different contexts, and some words (it, is, the, a, an)\n        don't really have well defined meanings at all, but are instead only useful depending on how\n        they are used respective to other words. The re-occuring theme here is that we need some\n        form of contextual information in addition to raw information about the words themselves,\n        and this exactly what self-attention provides us with. To concretize this a bit more mathematically\n        consider the following: \n         When \\(a \\ne 0\\), there are two solutions to\n        \\(ax^2 + bx + c = 0\\) and they are $$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"post-section-header"], null),"Keys, Queries, and Values"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"post-section-header"], null),"Self-Attention Beyond NLP"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"post-section-header"], null),"Multi-Representation Learning"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"post-section-header"], null),"References"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"post-section-header"], null),"Further Reading"], null)], null);
personal_website.content.writings.blog_posts.attention_via_the_transformer.post = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"title","title",636505583),"Attention Via The Transformer",new cljs.core.Keyword(null,"date","date",-1463434462),"2020/08/29",new cljs.core.Keyword(null,"show","show",-576705889),personal_website.content.writings.blog_posts.attention_via_the_transformer.post_preview,new cljs.core.Keyword(null,"content","content",15833224),personal_website.content.writings.blog_posts.attention_via_the_transformer.post_content,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mathematics","differentiable programming"], null),new cljs.core.Keyword(null,"type","type",1174270348),"blog-post",new cljs.core.Keyword(null,"overarching","overarching",696949346),"writing",new cljs.core.Keyword(null,"id","id",-1388402092),"0"], null);

//# sourceMappingURL=personal_website.content.writings.blog_posts.attention_via_the_transformer.js.map
