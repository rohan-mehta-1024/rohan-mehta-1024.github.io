goog.provide('personal_website.views.all_posts_html');
personal_website.views.all_posts_html.generate_and_inject_style_tag = (function personal_website$views$all_posts_html$generate_and_inject_style_tag(){

var page_head = document.head;
var style_tag = document.createElement("title");
return page_head.appendChild(style_tag);
});
personal_website.views.all_posts_html.update_page_title = (function personal_website$views$all_posts_html$update_page_title(input_css){

var style_tag_selector = "title";
var style_tag_query = document.querySelector(style_tag_selector);
var style_tag = (((style_tag_query == null))?personal_website.views.all_posts_html.generate_and_inject_style_tag():style_tag_query);
return (style_tag["innerHTML"] = input_css);
});
personal_website.views.all_posts_html.update_page_css = (function personal_website$views$all_posts_html$update_page_css(input_css){

var style_tag_selector = "#injected-css";
var style_tag_query = document.querySelector(style_tag_selector);
var style_tag = (((style_tag_query == null))?personal_website.views.all_posts_html.generate_and_inject_style_tag():style_tag_query);
var previous = style_tag.innerHTML;
return (style_tag["innerHTML"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(previous),cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_css)].join(''));
});
personal_website.views.all_posts_html.date_mapping = cljs.core.PersistentHashMap.fromArrays(["9","3","4","8","7","5","12","6","1","11","2","10"],["Sep","Mar","Apr","Aug","Jul","May","Dec","Jun","Jan","Nov","Feb","Oct"]);
personal_website.views.all_posts_html.format_date = (function personal_website$views$all_posts_html$format_date(date){
var split_date = clojure.string.split.cljs$core$IFn$_invoke$arity$2(date,"/");
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__45918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(split_date,(0));
return (personal_website.views.all_posts_html.date_mapping.cljs$core$IFn$_invoke$arity$1 ? personal_website.views.all_posts_html.date_mapping.cljs$core$IFn$_invoke$arity$1(G__45918) : personal_website.views.all_posts_html.date_mapping.call(null,G__45918));
})())," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((split_date.cljs$core$IFn$_invoke$arity$1 ? split_date.cljs$core$IFn$_invoke$arity$1((1)) : split_date.call(null,(1)))),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((split_date.cljs$core$IFn$_invoke$arity$1 ? split_date.cljs$core$IFn$_invoke$arity$1((2)) : split_date.call(null,(2))))," by Rohan Mehta"].join('');
});
personal_website.views.all_posts_html.get_posts = (function personal_website$views$all_posts_html$get_posts(post_type){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(post_type,new cljs.core.Keyword(null,"syn-bio","syn-bio",-1893273080))){
return personal_website.content.projects.syn_bio.syn_bio.posts;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(post_type,new cljs.core.Keyword(null,"comp-sci","comp-sci",-1030545072))){
return personal_website.content.projects.comp_sci.comp_sci.posts;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(post_type,new cljs.core.Keyword(null,"blog-posts","blog-posts",2099061283))){
return personal_website.content.writings.blog_posts.posts.posts;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(post_type,new cljs.core.Keyword(null,"essays","essays",-1695424907))){
return personal_website.content.writings.essays.essays.posts;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(post_type,new cljs.core.Keyword(null,"stories","stories",-1910187794))){
return personal_website.content.writings.short_stories.stories.posts;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(post_type,new cljs.core.Keyword(null,"poems","poems",-1901766320))){
return personal_website.content.writings.poetry.poems.posts;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(post_type,new cljs.core.Keyword(null,"papers","papers",1152250078))){
return personal_website.content.writings.papers.papers.posts;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(post_type,new cljs.core.Keyword(null,"books","books",-2005362272))){
return personal_website.content.readings.books.books.posts;
} else {
return null;
}
}
}
}
}
}
}
}
});
personal_website.views.all_posts_html.list_posts = (function personal_website$views$all_posts_html$list_posts(posts){
var preview_fn = (function (x){
return personal_website.views.preview_html.preview(x,false);
});
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"post-container-1"], null)], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"post-container-2"], null),"Posts"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"post-container-3"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(preview_fn,posts))))));
});
personal_website.views.all_posts_html.commentbox = (function personal_website$views$all_posts_html$commentbox(){
var um = commentBox("5711441948573696-proj");
return null;
});
personal_website.views.all_posts_html.display = (function personal_website$views$all_posts_html$display(route_data){
var posts = personal_website.views.all_posts_html.get_posts(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route_data)));
var params = new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(route_data);
var prefix = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),personal_website.views.header_html.header(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([personal_website.views.search_html.search_html()], 0));
var typeset_fn = (function (){
return setTimeout((function (){
return MathJax.typesetPromise();
}),(1000));
});
var call_typeset = typeset_fn();
if(cljs.core.empty_QMARK_(posts)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),personal_website.views.header_html.header(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"350px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"28px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"WorkSansBold",new cljs.core.Keyword(null,"min-height","min-height",398480837),"100vh"], null)], null),"This page is currently empty."], null),personal_website.views.footer_html.footer()], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params),"all")){
var title = (function (){var $ = route_data;
var $__$1 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1($);
var $__$2 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1($__$1);
var $__$3 = cljs.core.name($__$2);
var $__$4 = clojure.string.split.cljs$core$IFn$_invoke$arity$2($__$3,"_");
var $__$5 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,$__$4);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",$__$5);
})();
var page_title = personal_website.views.all_posts_html.update_page_title(title);
var $ = cljs.core.vals(posts);
var $__$1 = personal_website.views.all_posts_html.list_posts($);
var $__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,$__$1);
var $__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2($__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"commento"], null)], null));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2($__$3,personal_website.views.footer_html.footer());
} else {
var post_title = (function (){var fexpr__45946 = (function (){var G__45947 = personal_website.utils.unformat_title((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)) : params.call(null,new cljs.core.Keyword(null,"id","id",-1388402092))));
return (posts.cljs$core$IFn$_invoke$arity$1 ? posts.cljs$core$IFn$_invoke$arity$1(G__45947) : posts.call(null,G__45947));
})();
return (fexpr__45946.cljs$core$IFn$_invoke$arity$1 ? fexpr__45946.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583)) : fexpr__45946.call(null,new cljs.core.Keyword(null,"title","title",636505583)));
})();
var page_title = personal_website.views.all_posts_html.update_page_title(post_title);
var cssify = personal_website.views.all_posts_html.update_page_css(garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"css","css",1135045163).cljs$core$IFn$_invoke$arity$1((function (){var G__45948 = personal_website.utils.unformat_title((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)) : params.call(null,new cljs.core.Keyword(null,"id","id",-1388402092))));
return (posts.cljs$core$IFn$_invoke$arity$1 ? posts.cljs$core$IFn$_invoke$arity$1(G__45948) : posts.call(null,G__45948));
})())], 0)));
var comments = (function (){
return setTimeout((function (){
return personal_website.views.all_posts_html.commentbox();
}),(1000));
});
var comments__$1 = comments();
var $ = posts;
var $__$1 = (function (){var G__45950 = personal_website.utils.unformat_title((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)) : params.call(null,new cljs.core.Keyword(null,"id","id",-1388402092))));
return ($.cljs$core$IFn$_invoke$arity$1 ? $.cljs$core$IFn$_invoke$arity$1(G__45950) : $.call(null,G__45950));
})();
var $__$2 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"post-content-container"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"post-title"], null),($__$1.cljs$core$IFn$_invoke$arity$1 ? $__$1.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583)) : $__$1.call(null,new cljs.core.Keyword(null,"title","title",636505583)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"post-byline"], null),personal_website.views.all_posts_html.format_date(($__$1.cljs$core$IFn$_invoke$arity$1 ? $__$1.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"date","date",-1463434462)) : $__$1.call(null,new cljs.core.Keyword(null,"date","date",-1463434462))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"post-intro-container"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blockquote","blockquote",372264190),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"post-intro-text"], null),($__$1.cljs$core$IFn$_invoke$arity$1 ? $__$1.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"show","show",-576705889)) : $__$1.call(null,new cljs.core.Keyword(null,"show","show",-576705889)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"post-content"], null),($__$1.cljs$core$IFn$_invoke$arity$1 ? $__$1.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224)) : $__$1.call(null,new cljs.core.Keyword(null,"content","content",15833224)))], null)], null);
var $__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,$__$2);
var $__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2($__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"commentbox"], null)], null));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2($__$4,personal_website.views.footer_html.footer());
}
}
});

//# sourceMappingURL=personal_website.views.all_posts_html.js.map
