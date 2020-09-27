goog.provide('personal_website.views.all_posts_html');
personal_website.views.all_posts_html.date_mapping = cljs.core.PersistentHashMap.fromArrays(["9","3","4","8","7","5","12","6","1","11","2","10"],["Sep","Mar","Apr","Aug","Jul","May","Dec","Jun","Jan","Nov","Feb","Oct"]);
personal_website.views.all_posts_html.format_date = (function personal_website$views$all_posts_html$format_date(date){
var split_date = clojure.string.split.cljs$core$IFn$_invoke$arity$2(date,"/");
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__34054 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(split_date,(1));
return (personal_website.views.all_posts_html.date_mapping.cljs$core$IFn$_invoke$arity$1 ? personal_website.views.all_posts_html.date_mapping.cljs$core$IFn$_invoke$arity$1(G__34054) : personal_website.views.all_posts_html.date_mapping.call(null,G__34054));
})())," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((split_date.cljs$core$IFn$_invoke$arity$1 ? split_date.cljs$core$IFn$_invoke$arity$1((2)) : split_date.call(null,(2)))),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((split_date.cljs$core$IFn$_invoke$arity$1 ? split_date.cljs$core$IFn$_invoke$arity$1((0)) : split_date.call(null,(0))))," by Rohan Mehta"].join('');
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
return null;
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
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"post-container-1"], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"post-container-2"], null),cljs.core.cons("Posts",cljs.core.map.cljs$core$IFn$_invoke$arity$2(preview_fn,posts))))));
});
personal_website.views.all_posts_html.display = (function personal_website$views$all_posts_html$display(route_data){
var posts = personal_website.views.all_posts_html.get_posts(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route_data)));
var params = new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(route_data);
var prefix = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"top"], null)], null)], null),personal_website.views.header_html.header());
if(cljs.core.empty_QMARK_(posts)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),personal_website.views.header_html.header(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"350px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"28px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"WorkSansBold",new cljs.core.Keyword(null,"min-height","min-height",398480837),"100%"], null)], null),"There is currently no content on this page"], null),personal_website.views.footer_html.footer()], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params),"all")){
var $ = posts;
var $__$1 = personal_website.views.all_posts_html.list_posts($);
var $__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,$__$1);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2($__$2,personal_website.views.footer_html.footer());
} else {
var $ = posts;
var $__$1 = (function (){var G__34055 = (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)) : params.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)));
return ($.cljs$core$IFn$_invoke$arity$1 ? $.cljs$core$IFn$_invoke$arity$1(G__34055) : $.call(null,G__34055));
})();
var $__$2 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"post-content-container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#top"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"post-title"], null),($__$1.cljs$core$IFn$_invoke$arity$1 ? $__$1.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583)) : $__$1.call(null,new cljs.core.Keyword(null,"title","title",636505583)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"post-byline"], null),personal_website.views.all_posts_html.format_date(($__$1.cljs$core$IFn$_invoke$arity$1 ? $__$1.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"date","date",-1463434462)) : $__$1.call(null,new cljs.core.Keyword(null,"date","date",-1463434462))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"post-intro-container"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blockquote","blockquote",372264190),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"post-intro-text"], null),($__$1.cljs$core$IFn$_invoke$arity$1 ? $__$1.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"show","show",-576705889)) : $__$1.call(null,new cljs.core.Keyword(null,"show","show",-576705889)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"post-content"], null),($__$1.cljs$core$IFn$_invoke$arity$1 ? $__$1.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224)) : $__$1.call(null,new cljs.core.Keyword(null,"content","content",15833224)))], null)], null);
var $__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,$__$2);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2($__$3,personal_website.views.footer_html.footer());
}
}
});

//# sourceMappingURL=personal_website.views.all_posts_html.js.map