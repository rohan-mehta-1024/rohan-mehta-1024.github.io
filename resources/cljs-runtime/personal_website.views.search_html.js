goog.provide('personal_website.views.search_html');
var module$node_modules$lunr$lunr=shadow.js.require("module$node_modules$lunr$lunr", {});
personal_website.views.search_html.format_posts = (function personal_website$views$search_html$format_posts(posts){
return cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vals,cljs.core.flatten(posts)));
});
personal_website.views.search_html.posts = personal_website.views.search_html.format_posts(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [personal_website.content.projects.projects.posts,personal_website.content.writings.writings.posts,personal_website.content.readings.readings.posts], null));
personal_website.views.search_html.post_mapping = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function personal_website$views$search_html$iter__31770(s__31771){
return (new cljs.core.LazySeq(null,(function (){
var s__31771__$1 = s__31771;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__31771__$1);
if(temp__5735__auto__){
var s__31771__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31771__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__31771__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__31773 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__31772 = (0);
while(true){
if((i__31772 < size__4528__auto__)){
var post = cljs.core._nth(c__4527__auto__,i__31772);
cljs.core.chunk_append(b__31773,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(post.cljs$core$IFn$_invoke$arity$1 ? post.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583)) : post.call(null,new cljs.core.Keyword(null,"title","title",636505583))),post], null));

var G__31786 = (i__31772 + (1));
i__31772 = G__31786;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31773),personal_website$views$search_html$iter__31770(cljs.core.chunk_rest(s__31771__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31773),null);
}
} else {
var post = cljs.core.first(s__31771__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(post.cljs$core$IFn$_invoke$arity$1 ? post.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583)) : post.call(null,new cljs.core.Keyword(null,"title","title",636505583))),post], null),personal_website$views$search_html$iter__31770(cljs.core.rest(s__31771__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(personal_website.views.search_html.posts);
})());
personal_website.views.search_html.format_objs = (function personal_website$views$search_html$format_objs(objs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.clj__GT_js,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__31774_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__31774_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.string.join,", "));
}),objs,objs)));
});
personal_website.views.search_html.searcher = (function personal_website$views$search_html$searcher(){
var objs = cljs.core.clj__GT_js(personal_website.views.search_html.format_objs(personal_website.views.search_html.posts));
var this$ = this;
this$.ref("title");

this$.field("title");

this$.field("content");

this$.field("type");

this$.field("tags");

this$.field("overarching");

var seq__31775 = cljs.core.seq(objs);
var chunk__31776 = null;
var count__31777 = (0);
var i__31778 = (0);
while(true){
if((i__31778 < count__31777)){
var obj = chunk__31776.cljs$core$IIndexed$_nth$arity$2(null,i__31778);
this$.add(obj);


var G__31787 = seq__31775;
var G__31788 = chunk__31776;
var G__31789 = count__31777;
var G__31790 = (i__31778 + (1));
seq__31775 = G__31787;
chunk__31776 = G__31788;
count__31777 = G__31789;
i__31778 = G__31790;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31775);
if(temp__5735__auto__){
var seq__31775__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31775__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31775__$1);
var G__31791 = cljs.core.chunk_rest(seq__31775__$1);
var G__31792 = c__4556__auto__;
var G__31793 = cljs.core.count(c__4556__auto__);
var G__31794 = (0);
seq__31775 = G__31791;
chunk__31776 = G__31792;
count__31777 = G__31793;
i__31778 = G__31794;
continue;
} else {
var obj = cljs.core.first(seq__31775__$1);
this$.add(obj);


var G__31795 = cljs.core.next(seq__31775__$1);
var G__31796 = null;
var G__31797 = (0);
var G__31798 = (0);
seq__31775 = G__31795;
chunk__31776 = G__31796;
count__31777 = G__31797;
i__31778 = G__31798;
continue;
}
} else {
return null;
}
}
break;
}
});
personal_website.views.search_html.search = (function personal_website$views$search_html$search(query){
var search_fn = module$node_modules$lunr$lunr(personal_website.views.search_html.searcher);
var results = search_fn.search(query);
var formatted = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results);
var iter__4529__auto__ = (function personal_website$views$search_html$search_$_iter__31779(s__31780){
return (new cljs.core.LazySeq(null,(function (){
var s__31780__$1 = s__31780;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__31780__$1);
if(temp__5735__auto__){
var s__31780__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31780__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__31780__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__31782 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__31781 = (0);
while(true){
if((i__31781 < size__4528__auto__)){
var post = cljs.core._nth(c__4527__auto__,i__31781);
cljs.core.chunk_append(b__31782,(function (){var G__31783 = (post.cljs$core$IFn$_invoke$arity$1 ? post.cljs$core$IFn$_invoke$arity$1("ref") : post.call(null,"ref"));
return (personal_website.views.search_html.post_mapping.cljs$core$IFn$_invoke$arity$1 ? personal_website.views.search_html.post_mapping.cljs$core$IFn$_invoke$arity$1(G__31783) : personal_website.views.search_html.post_mapping.call(null,G__31783));
})());

var G__31799 = (i__31781 + (1));
i__31781 = G__31799;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31782),personal_website$views$search_html$search_$_iter__31779(cljs.core.chunk_rest(s__31780__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31782),null);
}
} else {
var post = cljs.core.first(s__31780__$2);
return cljs.core.cons((function (){var G__31784 = (post.cljs$core$IFn$_invoke$arity$1 ? post.cljs$core$IFn$_invoke$arity$1("ref") : post.call(null,"ref"));
return (personal_website.views.search_html.post_mapping.cljs$core$IFn$_invoke$arity$1 ? personal_website.views.search_html.post_mapping.cljs$core$IFn$_invoke$arity$1(G__31784) : personal_website.views.search_html.post_mapping.call(null,G__31784));
})(),personal_website$views$search_html$search_$_iter__31779(cljs.core.rest(s__31780__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(formatted);
});
personal_website.views.search_html.search_field = (function personal_website$views$search_html$search_field(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"search-view",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search for content...",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","search-term","homepage/search-term",-1305942950)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31785_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","search-term","homepage/search-term",-1305942950),p1__31785_SHARP_.target.value], null));
})], null)], null);
});
personal_website.views.search_html.search_results = (function personal_website$views$search_html$search_results(){
var query = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","search-term","homepage/search-term",-1305942950)], null)));
var results = personal_website.views.search_html.search(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(query,null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(query,""))))?"12345678987654321":query));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"search-results"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"search-count"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(results))," Result(s) Found."].join('')], null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(results),(0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"results-container",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(personal_website.views.preview_html.preview,results)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null))], null);
});
personal_website.views.search_html.search_html = (function personal_website$views$search_html$search_html(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"search-container"], null),personal_website.views.search_html.search_field(),personal_website.views.search_html.search_results()], null);
});

//# sourceMappingURL=personal_website.views.search_html.js.map
