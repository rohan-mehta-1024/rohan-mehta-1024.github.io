goog.provide('personal_website.views.search_html');
var module$node_modules$lunr$lunr=shadow.js.require("module$node_modules$lunr$lunr", {});
personal_website.views.search_html.posts = cljs.core.flatten(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [personal_website.content.projects.projects.posts,personal_website.content.writings.writings.posts,personal_website.content.readings.readings.posts], null));
personal_website.views.search_html.post_mapping = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function personal_website$views$search_html$iter__34053(s__34054){
return (new cljs.core.LazySeq(null,(function (){
var s__34054__$1 = s__34054;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34054__$1);
if(temp__5735__auto__){
var s__34054__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34054__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__34054__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__34056 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__34055 = (0);
while(true){
if((i__34055 < size__4528__auto__)){
var post = cljs.core._nth(c__4527__auto__,i__34055);
cljs.core.chunk_append(b__34056,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(post.cljs$core$IFn$_invoke$arity$1 ? post.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583)) : post.call(null,new cljs.core.Keyword(null,"title","title",636505583))),post], null));

var G__34069 = (i__34055 + (1));
i__34055 = G__34069;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34056),personal_website$views$search_html$iter__34053(cljs.core.chunk_rest(s__34054__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34056),null);
}
} else {
var post = cljs.core.first(s__34054__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(post.cljs$core$IFn$_invoke$arity$1 ? post.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583)) : post.call(null,new cljs.core.Keyword(null,"title","title",636505583))),post], null),personal_website$views$search_html$iter__34053(cljs.core.rest(s__34054__$2)));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.clj__GT_js,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__34057_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__34057_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.string.join,", "));
}),objs,objs)));
});
personal_website.views.search_html.searcher = (function personal_website$views$search_html$searcher(){
var objs = cljs.core.clj__GT_js(personal_website.views.search_html.format_objs(personal_website.views.search_html.posts));
var this$ = this;
this$.ref("title");

this$.field("title");

this$.field("content");

this$.field("tags");

var seq__34058 = cljs.core.seq(objs);
var chunk__34059 = null;
var count__34060 = (0);
var i__34061 = (0);
while(true){
if((i__34061 < count__34060)){
var obj = chunk__34059.cljs$core$IIndexed$_nth$arity$2(null,i__34061);
this$.add(obj);


var G__34070 = seq__34058;
var G__34071 = chunk__34059;
var G__34072 = count__34060;
var G__34073 = (i__34061 + (1));
seq__34058 = G__34070;
chunk__34059 = G__34071;
count__34060 = G__34072;
i__34061 = G__34073;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34058);
if(temp__5735__auto__){
var seq__34058__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34058__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34058__$1);
var G__34074 = cljs.core.chunk_rest(seq__34058__$1);
var G__34075 = c__4556__auto__;
var G__34076 = cljs.core.count(c__4556__auto__);
var G__34077 = (0);
seq__34058 = G__34074;
chunk__34059 = G__34075;
count__34060 = G__34076;
i__34061 = G__34077;
continue;
} else {
var obj = cljs.core.first(seq__34058__$1);
this$.add(obj);


var G__34078 = cljs.core.next(seq__34058__$1);
var G__34079 = null;
var G__34080 = (0);
var G__34081 = (0);
seq__34058 = G__34078;
chunk__34059 = G__34079;
count__34060 = G__34080;
i__34061 = G__34081;
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
var iter__4529__auto__ = (function personal_website$views$search_html$search_$_iter__34062(s__34063){
return (new cljs.core.LazySeq(null,(function (){
var s__34063__$1 = s__34063;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34063__$1);
if(temp__5735__auto__){
var s__34063__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34063__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__34063__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__34065 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__34064 = (0);
while(true){
if((i__34064 < size__4528__auto__)){
var post = cljs.core._nth(c__4527__auto__,i__34064);
cljs.core.chunk_append(b__34065,(function (){var G__34066 = (post.cljs$core$IFn$_invoke$arity$1 ? post.cljs$core$IFn$_invoke$arity$1("ref") : post.call(null,"ref"));
return (personal_website.views.search_html.post_mapping.cljs$core$IFn$_invoke$arity$1 ? personal_website.views.search_html.post_mapping.cljs$core$IFn$_invoke$arity$1(G__34066) : personal_website.views.search_html.post_mapping.call(null,G__34066));
})());

var G__34082 = (i__34064 + (1));
i__34064 = G__34082;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34065),personal_website$views$search_html$search_$_iter__34062(cljs.core.chunk_rest(s__34063__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34065),null);
}
} else {
var post = cljs.core.first(s__34063__$2);
return cljs.core.cons((function (){var G__34067 = (post.cljs$core$IFn$_invoke$arity$1 ? post.cljs$core$IFn$_invoke$arity$1("ref") : post.call(null,"ref"));
return (personal_website.views.search_html.post_mapping.cljs$core$IFn$_invoke$arity$1 ? personal_website.views.search_html.post_mapping.cljs$core$IFn$_invoke$arity$1(G__34067) : personal_website.views.search_html.post_mapping.call(null,G__34067));
})(),personal_website$views$search_html$search_$_iter__34062(cljs.core.rest(s__34063__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"search-view",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search for content...",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","search-term","homepage/search-term",-1305942950)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__34068_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","search-term","homepage/search-term",-1305942950),p1__34068_SHARP_.target.value], null));
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
