goog.provide('personal_website.views.search_html');
var module$node_modules$lunr$lunr=shadow.js.require("module$node_modules$lunr$lunr", {});
personal_website.views.search_html.posts = cljs.core.flatten(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [personal_website.content.projects.projects.posts,personal_website.content.writings.writings.posts,personal_website.content.readings.readings.posts], null));
personal_website.views.search_html.post_mapping = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function personal_website$views$search_html$iter__41826(s__41827){
return (new cljs.core.LazySeq(null,(function (){
var s__41827__$1 = s__41827;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41827__$1);
if(temp__5735__auto__){
var s__41827__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41827__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__41827__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__41829 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__41828 = (0);
while(true){
if((i__41828 < size__4528__auto__)){
var post = cljs.core._nth(c__4527__auto__,i__41828);
cljs.core.chunk_append(b__41829,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(post.cljs$core$IFn$_invoke$arity$1 ? post.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583)) : post.call(null,new cljs.core.Keyword(null,"title","title",636505583))),post], null));

var G__41844 = (i__41828 + (1));
i__41828 = G__41844;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41829),personal_website$views$search_html$iter__41826(cljs.core.chunk_rest(s__41827__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41829),null);
}
} else {
var post = cljs.core.first(s__41827__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(post.cljs$core$IFn$_invoke$arity$1 ? post.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583)) : post.call(null,new cljs.core.Keyword(null,"title","title",636505583))),post], null),personal_website$views$search_html$iter__41826(cljs.core.rest(s__41827__$2)));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.clj__GT_js,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__41831_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__41831_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.string.join,", "));
}),objs,objs)));
});
personal_website.views.search_html.searcher = (function personal_website$views$search_html$searcher(){
var objs = cljs.core.clj__GT_js(personal_website.views.search_html.format_objs(personal_website.views.search_html.posts));
var this$ = this;
this$.ref("title");

this$.field("title");

this$.field("content");

this$.field("tags");

var seq__41832 = cljs.core.seq(objs);
var chunk__41833 = null;
var count__41834 = (0);
var i__41835 = (0);
while(true){
if((i__41835 < count__41834)){
var obj = chunk__41833.cljs$core$IIndexed$_nth$arity$2(null,i__41835);
this$.add(obj);


var G__41845 = seq__41832;
var G__41846 = chunk__41833;
var G__41847 = count__41834;
var G__41848 = (i__41835 + (1));
seq__41832 = G__41845;
chunk__41833 = G__41846;
count__41834 = G__41847;
i__41835 = G__41848;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41832);
if(temp__5735__auto__){
var seq__41832__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41832__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__41832__$1);
var G__41849 = cljs.core.chunk_rest(seq__41832__$1);
var G__41850 = c__4556__auto__;
var G__41851 = cljs.core.count(c__4556__auto__);
var G__41852 = (0);
seq__41832 = G__41849;
chunk__41833 = G__41850;
count__41834 = G__41851;
i__41835 = G__41852;
continue;
} else {
var obj = cljs.core.first(seq__41832__$1);
this$.add(obj);


var G__41853 = cljs.core.next(seq__41832__$1);
var G__41854 = null;
var G__41855 = (0);
var G__41856 = (0);
seq__41832 = G__41853;
chunk__41833 = G__41854;
count__41834 = G__41855;
i__41835 = G__41856;
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
var iter__4529__auto__ = (function personal_website$views$search_html$search_$_iter__41837(s__41838){
return (new cljs.core.LazySeq(null,(function (){
var s__41838__$1 = s__41838;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41838__$1);
if(temp__5735__auto__){
var s__41838__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41838__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__41838__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__41840 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__41839 = (0);
while(true){
if((i__41839 < size__4528__auto__)){
var post = cljs.core._nth(c__4527__auto__,i__41839);
cljs.core.chunk_append(b__41840,(function (){var G__41841 = (post.cljs$core$IFn$_invoke$arity$1 ? post.cljs$core$IFn$_invoke$arity$1("ref") : post.call(null,"ref"));
return (personal_website.views.search_html.post_mapping.cljs$core$IFn$_invoke$arity$1 ? personal_website.views.search_html.post_mapping.cljs$core$IFn$_invoke$arity$1(G__41841) : personal_website.views.search_html.post_mapping.call(null,G__41841));
})());

var G__41857 = (i__41839 + (1));
i__41839 = G__41857;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41840),personal_website$views$search_html$search_$_iter__41837(cljs.core.chunk_rest(s__41838__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41840),null);
}
} else {
var post = cljs.core.first(s__41838__$2);
return cljs.core.cons((function (){var G__41842 = (post.cljs$core$IFn$_invoke$arity$1 ? post.cljs$core$IFn$_invoke$arity$1("ref") : post.call(null,"ref"));
return (personal_website.views.search_html.post_mapping.cljs$core$IFn$_invoke$arity$1 ? personal_website.views.search_html.post_mapping.cljs$core$IFn$_invoke$arity$1(G__41842) : personal_website.views.search_html.post_mapping.call(null,G__41842));
})(),personal_website$views$search_html$search_$_iter__41837(cljs.core.rest(s__41838__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"search-view",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search for content...",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","search-term","homepage/search-term",-1305942950)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__41843_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","search-term","homepage/search-term",-1305942950),p1__41843_SHARP_.target.value], null));
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
