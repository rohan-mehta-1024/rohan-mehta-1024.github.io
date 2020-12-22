goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36358 = arguments.length;
var i__4737__auto___36359 = (0);
while(true){
if((i__4737__auto___36359 < len__4736__auto___36358)){
args__4742__auto__.push((arguments[i__4737__auto___36359]));

var G__36361 = (i__4737__auto___36359 + (1));
i__4737__auto___36359 = G__36361;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36074){
var G__36075 = cljs.core.first(seq36074);
var seq36074__$1 = cljs.core.next(seq36074);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36075,seq36074__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36076 = cljs.core.seq(sources);
var chunk__36077 = null;
var count__36078 = (0);
var i__36079 = (0);
while(true){
if((i__36079 < count__36078)){
var map__36087 = chunk__36077.cljs$core$IIndexed$_nth$arity$2(null,i__36079);
var map__36087__$1 = (((((!((map__36087 == null))))?(((((map__36087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36087):map__36087);
var src = map__36087__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36087__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36087__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36087__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36087__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36095){var e_36364 = e36095;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36364);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36364.message)].join('')));
}

var G__36365 = seq__36076;
var G__36366 = chunk__36077;
var G__36367 = count__36078;
var G__36368 = (i__36079 + (1));
seq__36076 = G__36365;
chunk__36077 = G__36366;
count__36078 = G__36367;
i__36079 = G__36368;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36076);
if(temp__5735__auto__){
var seq__36076__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36076__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36076__$1);
var G__36369 = cljs.core.chunk_rest(seq__36076__$1);
var G__36370 = c__4556__auto__;
var G__36371 = cljs.core.count(c__4556__auto__);
var G__36372 = (0);
seq__36076 = G__36369;
chunk__36077 = G__36370;
count__36078 = G__36371;
i__36079 = G__36372;
continue;
} else {
var map__36096 = cljs.core.first(seq__36076__$1);
var map__36096__$1 = (((((!((map__36096 == null))))?(((((map__36096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36096):map__36096);
var src = map__36096__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36096__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36096__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36096__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36096__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36102){var e_36373 = e36102;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36373);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36373.message)].join('')));
}

var G__36374 = cljs.core.next(seq__36076__$1);
var G__36375 = null;
var G__36376 = (0);
var G__36377 = (0);
seq__36076 = G__36374;
chunk__36077 = G__36375;
count__36078 = G__36376;
i__36079 = G__36377;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__36110 = cljs.core.seq(js_requires);
var chunk__36111 = null;
var count__36112 = (0);
var i__36113 = (0);
while(true){
if((i__36113 < count__36112)){
var js_ns = chunk__36111.cljs$core$IIndexed$_nth$arity$2(null,i__36113);
var require_str_36378 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36378);


var G__36379 = seq__36110;
var G__36380 = chunk__36111;
var G__36381 = count__36112;
var G__36382 = (i__36113 + (1));
seq__36110 = G__36379;
chunk__36111 = G__36380;
count__36112 = G__36381;
i__36113 = G__36382;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36110);
if(temp__5735__auto__){
var seq__36110__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36110__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36110__$1);
var G__36383 = cljs.core.chunk_rest(seq__36110__$1);
var G__36384 = c__4556__auto__;
var G__36385 = cljs.core.count(c__4556__auto__);
var G__36386 = (0);
seq__36110 = G__36383;
chunk__36111 = G__36384;
count__36112 = G__36385;
i__36113 = G__36386;
continue;
} else {
var js_ns = cljs.core.first(seq__36110__$1);
var require_str_36387 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36387);


var G__36388 = cljs.core.next(seq__36110__$1);
var G__36389 = null;
var G__36390 = (0);
var G__36391 = (0);
seq__36110 = G__36388;
chunk__36111 = G__36389;
count__36112 = G__36390;
i__36113 = G__36391;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36115){
var map__36116 = p__36115;
var map__36116__$1 = (((((!((map__36116 == null))))?(((((map__36116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36116):map__36116);
var msg = map__36116__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36116__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36116__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36118(s__36119){
return (new cljs.core.LazySeq(null,(function (){
var s__36119__$1 = s__36119;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36119__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__36125 = cljs.core.first(xs__6292__auto__);
var map__36125__$1 = (((((!((map__36125 == null))))?(((((map__36125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36125):map__36125);
var src = map__36125__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36125__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36125__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__36119__$1,map__36125,map__36125__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36116,map__36116__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36118_$_iter__36120(s__36121){
return (new cljs.core.LazySeq(null,((function (s__36119__$1,map__36125,map__36125__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36116,map__36116__$1,msg,info,reload_info){
return (function (){
var s__36121__$1 = s__36121;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36121__$1);
if(temp__5735__auto____$1){
var s__36121__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36121__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__36121__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__36123 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__36122 = (0);
while(true){
if((i__36122 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__36122);
cljs.core.chunk_append(b__36123,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36392 = (i__36122 + (1));
i__36122 = G__36392;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36123),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36118_$_iter__36120(cljs.core.chunk_rest(s__36121__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36123),null);
}
} else {
var warning = cljs.core.first(s__36121__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36118_$_iter__36120(cljs.core.rest(s__36121__$2)));
}
} else {
return null;
}
break;
}
});})(s__36119__$1,map__36125,map__36125__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36116,map__36116__$1,msg,info,reload_info))
,null,null));
});})(s__36119__$1,map__36125,map__36125__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36116,map__36116__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36118(cljs.core.rest(s__36119__$1)));
} else {
var G__36393 = cljs.core.rest(s__36119__$1);
s__36119__$1 = G__36393;
continue;
}
} else {
var G__36394 = cljs.core.rest(s__36119__$1);
s__36119__$1 = G__36394;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__36145_36395 = cljs.core.seq(warnings);
var chunk__36146_36396 = null;
var count__36147_36397 = (0);
var i__36148_36398 = (0);
while(true){
if((i__36148_36398 < count__36147_36397)){
var map__36165_36399 = chunk__36146_36396.cljs$core$IIndexed$_nth$arity$2(null,i__36148_36398);
var map__36165_36400__$1 = (((((!((map__36165_36399 == null))))?(((((map__36165_36399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36165_36399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36165_36399):map__36165_36399);
var w_36401 = map__36165_36400__$1;
var msg_36402__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36165_36400__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36403 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36165_36400__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36404 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36165_36400__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36165_36400__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36405)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36403),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36404),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36402__$1)].join(''));


var G__36406 = seq__36145_36395;
var G__36407 = chunk__36146_36396;
var G__36408 = count__36147_36397;
var G__36409 = (i__36148_36398 + (1));
seq__36145_36395 = G__36406;
chunk__36146_36396 = G__36407;
count__36147_36397 = G__36408;
i__36148_36398 = G__36409;
continue;
} else {
var temp__5735__auto___36410 = cljs.core.seq(seq__36145_36395);
if(temp__5735__auto___36410){
var seq__36145_36411__$1 = temp__5735__auto___36410;
if(cljs.core.chunked_seq_QMARK_(seq__36145_36411__$1)){
var c__4556__auto___36412 = cljs.core.chunk_first(seq__36145_36411__$1);
var G__36413 = cljs.core.chunk_rest(seq__36145_36411__$1);
var G__36414 = c__4556__auto___36412;
var G__36415 = cljs.core.count(c__4556__auto___36412);
var G__36416 = (0);
seq__36145_36395 = G__36413;
chunk__36146_36396 = G__36414;
count__36147_36397 = G__36415;
i__36148_36398 = G__36416;
continue;
} else {
var map__36176_36417 = cljs.core.first(seq__36145_36411__$1);
var map__36176_36418__$1 = (((((!((map__36176_36417 == null))))?(((((map__36176_36417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36176_36417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36176_36417):map__36176_36417);
var w_36419 = map__36176_36418__$1;
var msg_36420__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36176_36418__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36176_36418__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36176_36418__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36176_36418__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36423)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36421),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36422),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36420__$1)].join(''));


var G__36424 = cljs.core.next(seq__36145_36411__$1);
var G__36425 = null;
var G__36426 = (0);
var G__36427 = (0);
seq__36145_36395 = G__36424;
chunk__36146_36396 = G__36425;
count__36147_36397 = G__36426;
i__36148_36398 = G__36427;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36114_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36114_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36199){
var map__36200 = p__36199;
var map__36200__$1 = (((((!((map__36200 == null))))?(((((map__36200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36200):map__36200);
var msg = map__36200__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36200__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__36205 = cljs.core.seq(updates);
var chunk__36207 = null;
var count__36208 = (0);
var i__36209 = (0);
while(true){
if((i__36209 < count__36208)){
var path = chunk__36207.cljs$core$IIndexed$_nth$arity$2(null,i__36209);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36278_36428 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36281_36429 = null;
var count__36282_36430 = (0);
var i__36283_36431 = (0);
while(true){
if((i__36283_36431 < count__36282_36430)){
var node_36432 = chunk__36281_36429.cljs$core$IIndexed$_nth$arity$2(null,i__36283_36431);
var path_match_36433 = shadow.cljs.devtools.client.browser.match_paths(node_36432.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36433)){
var new_link_36434 = (function (){var G__36288 = node_36432.cloneNode(true);
G__36288.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36433),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36288;
})();
(new_link_36434.onload = ((function (seq__36278_36428,chunk__36281_36429,count__36282_36430,i__36283_36431,seq__36205,chunk__36207,count__36208,i__36209,new_link_36434,path_match_36433,node_36432,path,map__36200,map__36200__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36432);
});})(seq__36278_36428,chunk__36281_36429,count__36282_36430,i__36283_36431,seq__36205,chunk__36207,count__36208,i__36209,new_link_36434,path_match_36433,node_36432,path,map__36200,map__36200__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36433], 0));

goog.dom.insertSiblingAfter(new_link_36434,node_36432);


var G__36435 = seq__36278_36428;
var G__36436 = chunk__36281_36429;
var G__36437 = count__36282_36430;
var G__36438 = (i__36283_36431 + (1));
seq__36278_36428 = G__36435;
chunk__36281_36429 = G__36436;
count__36282_36430 = G__36437;
i__36283_36431 = G__36438;
continue;
} else {
var G__36439 = seq__36278_36428;
var G__36440 = chunk__36281_36429;
var G__36441 = count__36282_36430;
var G__36442 = (i__36283_36431 + (1));
seq__36278_36428 = G__36439;
chunk__36281_36429 = G__36440;
count__36282_36430 = G__36441;
i__36283_36431 = G__36442;
continue;
}
} else {
var temp__5735__auto___36443 = cljs.core.seq(seq__36278_36428);
if(temp__5735__auto___36443){
var seq__36278_36444__$1 = temp__5735__auto___36443;
if(cljs.core.chunked_seq_QMARK_(seq__36278_36444__$1)){
var c__4556__auto___36445 = cljs.core.chunk_first(seq__36278_36444__$1);
var G__36446 = cljs.core.chunk_rest(seq__36278_36444__$1);
var G__36447 = c__4556__auto___36445;
var G__36448 = cljs.core.count(c__4556__auto___36445);
var G__36449 = (0);
seq__36278_36428 = G__36446;
chunk__36281_36429 = G__36447;
count__36282_36430 = G__36448;
i__36283_36431 = G__36449;
continue;
} else {
var node_36450 = cljs.core.first(seq__36278_36444__$1);
var path_match_36451 = shadow.cljs.devtools.client.browser.match_paths(node_36450.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36451)){
var new_link_36452 = (function (){var G__36295 = node_36450.cloneNode(true);
G__36295.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36451),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36295;
})();
(new_link_36452.onload = ((function (seq__36278_36428,chunk__36281_36429,count__36282_36430,i__36283_36431,seq__36205,chunk__36207,count__36208,i__36209,new_link_36452,path_match_36451,node_36450,seq__36278_36444__$1,temp__5735__auto___36443,path,map__36200,map__36200__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36450);
});})(seq__36278_36428,chunk__36281_36429,count__36282_36430,i__36283_36431,seq__36205,chunk__36207,count__36208,i__36209,new_link_36452,path_match_36451,node_36450,seq__36278_36444__$1,temp__5735__auto___36443,path,map__36200,map__36200__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36451], 0));

goog.dom.insertSiblingAfter(new_link_36452,node_36450);


var G__36453 = cljs.core.next(seq__36278_36444__$1);
var G__36454 = null;
var G__36455 = (0);
var G__36456 = (0);
seq__36278_36428 = G__36453;
chunk__36281_36429 = G__36454;
count__36282_36430 = G__36455;
i__36283_36431 = G__36456;
continue;
} else {
var G__36457 = cljs.core.next(seq__36278_36444__$1);
var G__36458 = null;
var G__36459 = (0);
var G__36460 = (0);
seq__36278_36428 = G__36457;
chunk__36281_36429 = G__36458;
count__36282_36430 = G__36459;
i__36283_36431 = G__36460;
continue;
}
}
} else {
}
}
break;
}


var G__36461 = seq__36205;
var G__36462 = chunk__36207;
var G__36463 = count__36208;
var G__36464 = (i__36209 + (1));
seq__36205 = G__36461;
chunk__36207 = G__36462;
count__36208 = G__36463;
i__36209 = G__36464;
continue;
} else {
var G__36465 = seq__36205;
var G__36466 = chunk__36207;
var G__36467 = count__36208;
var G__36468 = (i__36209 + (1));
seq__36205 = G__36465;
chunk__36207 = G__36466;
count__36208 = G__36467;
i__36209 = G__36468;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36205);
if(temp__5735__auto__){
var seq__36205__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36205__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36205__$1);
var G__36469 = cljs.core.chunk_rest(seq__36205__$1);
var G__36470 = c__4556__auto__;
var G__36471 = cljs.core.count(c__4556__auto__);
var G__36472 = (0);
seq__36205 = G__36469;
chunk__36207 = G__36470;
count__36208 = G__36471;
i__36209 = G__36472;
continue;
} else {
var path = cljs.core.first(seq__36205__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36296_36473 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36299_36474 = null;
var count__36300_36475 = (0);
var i__36301_36476 = (0);
while(true){
if((i__36301_36476 < count__36300_36475)){
var node_36477 = chunk__36299_36474.cljs$core$IIndexed$_nth$arity$2(null,i__36301_36476);
var path_match_36478 = shadow.cljs.devtools.client.browser.match_paths(node_36477.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36478)){
var new_link_36479 = (function (){var G__36308 = node_36477.cloneNode(true);
G__36308.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36478),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36308;
})();
(new_link_36479.onload = ((function (seq__36296_36473,chunk__36299_36474,count__36300_36475,i__36301_36476,seq__36205,chunk__36207,count__36208,i__36209,new_link_36479,path_match_36478,node_36477,path,seq__36205__$1,temp__5735__auto__,map__36200,map__36200__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36477);
});})(seq__36296_36473,chunk__36299_36474,count__36300_36475,i__36301_36476,seq__36205,chunk__36207,count__36208,i__36209,new_link_36479,path_match_36478,node_36477,path,seq__36205__$1,temp__5735__auto__,map__36200,map__36200__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36478], 0));

goog.dom.insertSiblingAfter(new_link_36479,node_36477);


var G__36480 = seq__36296_36473;
var G__36481 = chunk__36299_36474;
var G__36482 = count__36300_36475;
var G__36483 = (i__36301_36476 + (1));
seq__36296_36473 = G__36480;
chunk__36299_36474 = G__36481;
count__36300_36475 = G__36482;
i__36301_36476 = G__36483;
continue;
} else {
var G__36484 = seq__36296_36473;
var G__36485 = chunk__36299_36474;
var G__36486 = count__36300_36475;
var G__36487 = (i__36301_36476 + (1));
seq__36296_36473 = G__36484;
chunk__36299_36474 = G__36485;
count__36300_36475 = G__36486;
i__36301_36476 = G__36487;
continue;
}
} else {
var temp__5735__auto___36488__$1 = cljs.core.seq(seq__36296_36473);
if(temp__5735__auto___36488__$1){
var seq__36296_36489__$1 = temp__5735__auto___36488__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36296_36489__$1)){
var c__4556__auto___36490 = cljs.core.chunk_first(seq__36296_36489__$1);
var G__36491 = cljs.core.chunk_rest(seq__36296_36489__$1);
var G__36492 = c__4556__auto___36490;
var G__36493 = cljs.core.count(c__4556__auto___36490);
var G__36494 = (0);
seq__36296_36473 = G__36491;
chunk__36299_36474 = G__36492;
count__36300_36475 = G__36493;
i__36301_36476 = G__36494;
continue;
} else {
var node_36495 = cljs.core.first(seq__36296_36489__$1);
var path_match_36496 = shadow.cljs.devtools.client.browser.match_paths(node_36495.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36496)){
var new_link_36497 = (function (){var G__36314 = node_36495.cloneNode(true);
G__36314.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36496),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36314;
})();
(new_link_36497.onload = ((function (seq__36296_36473,chunk__36299_36474,count__36300_36475,i__36301_36476,seq__36205,chunk__36207,count__36208,i__36209,new_link_36497,path_match_36496,node_36495,seq__36296_36489__$1,temp__5735__auto___36488__$1,path,seq__36205__$1,temp__5735__auto__,map__36200,map__36200__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36495);
});})(seq__36296_36473,chunk__36299_36474,count__36300_36475,i__36301_36476,seq__36205,chunk__36207,count__36208,i__36209,new_link_36497,path_match_36496,node_36495,seq__36296_36489__$1,temp__5735__auto___36488__$1,path,seq__36205__$1,temp__5735__auto__,map__36200,map__36200__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36496], 0));

goog.dom.insertSiblingAfter(new_link_36497,node_36495);


var G__36503 = cljs.core.next(seq__36296_36489__$1);
var G__36504 = null;
var G__36505 = (0);
var G__36506 = (0);
seq__36296_36473 = G__36503;
chunk__36299_36474 = G__36504;
count__36300_36475 = G__36505;
i__36301_36476 = G__36506;
continue;
} else {
var G__36507 = cljs.core.next(seq__36296_36489__$1);
var G__36508 = null;
var G__36509 = (0);
var G__36510 = (0);
seq__36296_36473 = G__36507;
chunk__36299_36474 = G__36508;
count__36300_36475 = G__36509;
i__36301_36476 = G__36510;
continue;
}
}
} else {
}
}
break;
}


var G__36512 = cljs.core.next(seq__36205__$1);
var G__36513 = null;
var G__36514 = (0);
var G__36515 = (0);
seq__36205 = G__36512;
chunk__36207 = G__36513;
count__36208 = G__36514;
i__36209 = G__36515;
continue;
} else {
var G__36516 = cljs.core.next(seq__36205__$1);
var G__36517 = null;
var G__36518 = (0);
var G__36519 = (0);
seq__36205 = G__36516;
chunk__36207 = G__36517;
count__36208 = G__36518;
i__36209 = G__36519;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36315){
var map__36316 = p__36315;
var map__36316__$1 = (((((!((map__36316 == null))))?(((((map__36316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36316):map__36316);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36316__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36318){
var map__36319 = p__36318;
var map__36319__$1 = (((((!((map__36319 == null))))?(((((map__36319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36319):map__36319);
var _ = map__36319__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36319__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36326,done,error){
var map__36327 = p__36326;
var map__36327__$1 = (((((!((map__36327 == null))))?(((((map__36327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36327):map__36327);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36327__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36329,done,error){
var map__36330 = p__36329;
var map__36330__$1 = (((((!((map__36330 == null))))?(((((map__36330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36330):map__36330);
var msg = map__36330__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36330__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36330__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36330__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36332){
var map__36333 = p__36332;
var map__36333__$1 = (((((!((map__36333 == null))))?(((((map__36333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36333):map__36333);
var src = map__36333__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36333__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36337 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36337) : done.call(null,G__36337));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36338){
var map__36339 = p__36338;
var map__36339__$1 = (((((!((map__36339 == null))))?(((((map__36339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36339):map__36339);
var msg__$1 = map__36339__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36339__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36341){var ex = e36341;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36342){
var map__36343 = p__36342;
var map__36343__$1 = (((((!((map__36343 == null))))?(((((map__36343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36343):map__36343);
var env = map__36343__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36343__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__36345){
var map__36346 = p__36345;
var map__36346__$1 = (((((!((map__36346 == null))))?(((((map__36346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36346):map__36346);
var msg = map__36346__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36346__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36351){
var map__36352 = p__36351;
var map__36352__$1 = (((((!((map__36352 == null))))?(((((map__36352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36352):map__36352);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36352__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36352__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__36354){
var map__36355 = p__36354;
var map__36355__$1 = (((((!((map__36355 == null))))?(((((map__36355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36355):map__36355);
var svc = map__36355__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36355__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
