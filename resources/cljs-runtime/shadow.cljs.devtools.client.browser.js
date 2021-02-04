goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36355 = arguments.length;
var i__4737__auto___36356 = (0);
while(true){
if((i__4737__auto___36356 < len__4736__auto___36355)){
args__4742__auto__.push((arguments[i__4737__auto___36356]));

var G__36357 = (i__4737__auto___36356 + (1));
i__4737__auto___36356 = G__36357;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36087){
var G__36088 = cljs.core.first(seq36087);
var seq36087__$1 = cljs.core.next(seq36087);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36088,seq36087__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36092 = cljs.core.seq(sources);
var chunk__36093 = null;
var count__36094 = (0);
var i__36095 = (0);
while(true){
if((i__36095 < count__36094)){
var map__36103 = chunk__36093.cljs$core$IIndexed$_nth$arity$2(null,i__36095);
var map__36103__$1 = (((((!((map__36103 == null))))?(((((map__36103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36103):map__36103);
var src = map__36103__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36103__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36103__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36103__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36103__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36105){var e_36360 = e36105;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36360);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36360.message)].join('')));
}

var G__36361 = seq__36092;
var G__36362 = chunk__36093;
var G__36363 = count__36094;
var G__36364 = (i__36095 + (1));
seq__36092 = G__36361;
chunk__36093 = G__36362;
count__36094 = G__36363;
i__36095 = G__36364;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36092);
if(temp__5735__auto__){
var seq__36092__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36092__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36092__$1);
var G__36365 = cljs.core.chunk_rest(seq__36092__$1);
var G__36366 = c__4556__auto__;
var G__36367 = cljs.core.count(c__4556__auto__);
var G__36368 = (0);
seq__36092 = G__36365;
chunk__36093 = G__36366;
count__36094 = G__36367;
i__36095 = G__36368;
continue;
} else {
var map__36106 = cljs.core.first(seq__36092__$1);
var map__36106__$1 = (((((!((map__36106 == null))))?(((((map__36106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36106):map__36106);
var src = map__36106__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36106__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36106__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36106__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36106__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36108){var e_36369 = e36108;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36369);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36369.message)].join('')));
}

var G__36370 = cljs.core.next(seq__36092__$1);
var G__36371 = null;
var G__36372 = (0);
var G__36373 = (0);
seq__36092 = G__36370;
chunk__36093 = G__36371;
count__36094 = G__36372;
i__36095 = G__36373;
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
var seq__36116 = cljs.core.seq(js_requires);
var chunk__36117 = null;
var count__36118 = (0);
var i__36119 = (0);
while(true){
if((i__36119 < count__36118)){
var js_ns = chunk__36117.cljs$core$IIndexed$_nth$arity$2(null,i__36119);
var require_str_36374 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36374);


var G__36375 = seq__36116;
var G__36376 = chunk__36117;
var G__36377 = count__36118;
var G__36378 = (i__36119 + (1));
seq__36116 = G__36375;
chunk__36117 = G__36376;
count__36118 = G__36377;
i__36119 = G__36378;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36116);
if(temp__5735__auto__){
var seq__36116__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36116__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36116__$1);
var G__36379 = cljs.core.chunk_rest(seq__36116__$1);
var G__36380 = c__4556__auto__;
var G__36381 = cljs.core.count(c__4556__auto__);
var G__36382 = (0);
seq__36116 = G__36379;
chunk__36117 = G__36380;
count__36118 = G__36381;
i__36119 = G__36382;
continue;
} else {
var js_ns = cljs.core.first(seq__36116__$1);
var require_str_36383 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36383);


var G__36384 = cljs.core.next(seq__36116__$1);
var G__36385 = null;
var G__36386 = (0);
var G__36387 = (0);
seq__36116 = G__36384;
chunk__36117 = G__36385;
count__36118 = G__36386;
i__36119 = G__36387;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36129){
var map__36130 = p__36129;
var map__36130__$1 = (((((!((map__36130 == null))))?(((((map__36130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36130):map__36130);
var msg = map__36130__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36130__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36130__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36136(s__36137){
return (new cljs.core.LazySeq(null,(function (){
var s__36137__$1 = s__36137;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36137__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__36143 = cljs.core.first(xs__6292__auto__);
var map__36143__$1 = (((((!((map__36143 == null))))?(((((map__36143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36143):map__36143);
var src = map__36143__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36143__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36143__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__36137__$1,map__36143,map__36143__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36130,map__36130__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36136_$_iter__36138(s__36139){
return (new cljs.core.LazySeq(null,((function (s__36137__$1,map__36143,map__36143__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36130,map__36130__$1,msg,info,reload_info){
return (function (){
var s__36139__$1 = s__36139;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36139__$1);
if(temp__5735__auto____$1){
var s__36139__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36139__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__36139__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__36141 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__36140 = (0);
while(true){
if((i__36140 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__36140);
cljs.core.chunk_append(b__36141,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36388 = (i__36140 + (1));
i__36140 = G__36388;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36141),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36136_$_iter__36138(cljs.core.chunk_rest(s__36139__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36141),null);
}
} else {
var warning = cljs.core.first(s__36139__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36136_$_iter__36138(cljs.core.rest(s__36139__$2)));
}
} else {
return null;
}
break;
}
});})(s__36137__$1,map__36143,map__36143__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36130,map__36130__$1,msg,info,reload_info))
,null,null));
});})(s__36137__$1,map__36143,map__36143__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36130,map__36130__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36136(cljs.core.rest(s__36137__$1)));
} else {
var G__36389 = cljs.core.rest(s__36137__$1);
s__36137__$1 = G__36389;
continue;
}
} else {
var G__36390 = cljs.core.rest(s__36137__$1);
s__36137__$1 = G__36390;
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
var seq__36146_36391 = cljs.core.seq(warnings);
var chunk__36147_36392 = null;
var count__36148_36393 = (0);
var i__36149_36394 = (0);
while(true){
if((i__36149_36394 < count__36148_36393)){
var map__36162_36395 = chunk__36147_36392.cljs$core$IIndexed$_nth$arity$2(null,i__36149_36394);
var map__36162_36396__$1 = (((((!((map__36162_36395 == null))))?(((((map__36162_36395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36162_36395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36162_36395):map__36162_36395);
var w_36397 = map__36162_36396__$1;
var msg_36398__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36162_36396__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36162_36396__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36162_36396__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36162_36396__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36401)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36399),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36400),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36398__$1)].join(''));


var G__36406 = seq__36146_36391;
var G__36407 = chunk__36147_36392;
var G__36408 = count__36148_36393;
var G__36409 = (i__36149_36394 + (1));
seq__36146_36391 = G__36406;
chunk__36147_36392 = G__36407;
count__36148_36393 = G__36408;
i__36149_36394 = G__36409;
continue;
} else {
var temp__5735__auto___36410 = cljs.core.seq(seq__36146_36391);
if(temp__5735__auto___36410){
var seq__36146_36411__$1 = temp__5735__auto___36410;
if(cljs.core.chunked_seq_QMARK_(seq__36146_36411__$1)){
var c__4556__auto___36412 = cljs.core.chunk_first(seq__36146_36411__$1);
var G__36413 = cljs.core.chunk_rest(seq__36146_36411__$1);
var G__36414 = c__4556__auto___36412;
var G__36415 = cljs.core.count(c__4556__auto___36412);
var G__36416 = (0);
seq__36146_36391 = G__36413;
chunk__36147_36392 = G__36414;
count__36148_36393 = G__36415;
i__36149_36394 = G__36416;
continue;
} else {
var map__36164_36417 = cljs.core.first(seq__36146_36411__$1);
var map__36164_36418__$1 = (((((!((map__36164_36417 == null))))?(((((map__36164_36417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36164_36417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36164_36417):map__36164_36417);
var w_36419 = map__36164_36418__$1;
var msg_36420__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36164_36418__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36164_36418__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36164_36418__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36164_36418__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36423)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36421),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36422),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36420__$1)].join(''));


var G__36424 = cljs.core.next(seq__36146_36411__$1);
var G__36425 = null;
var G__36426 = (0);
var G__36427 = (0);
seq__36146_36391 = G__36424;
chunk__36147_36392 = G__36425;
count__36148_36393 = G__36426;
i__36149_36394 = G__36427;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36124_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36124_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36180){
var map__36181 = p__36180;
var map__36181__$1 = (((((!((map__36181 == null))))?(((((map__36181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36181):map__36181);
var msg = map__36181__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36181__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__36183 = cljs.core.seq(updates);
var chunk__36185 = null;
var count__36186 = (0);
var i__36187 = (0);
while(true){
if((i__36187 < count__36186)){
var path = chunk__36185.cljs$core$IIndexed$_nth$arity$2(null,i__36187);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36236_36432 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36239_36433 = null;
var count__36240_36434 = (0);
var i__36241_36435 = (0);
while(true){
if((i__36241_36435 < count__36240_36434)){
var node_36436 = chunk__36239_36433.cljs$core$IIndexed$_nth$arity$2(null,i__36241_36435);
var path_match_36437 = shadow.cljs.devtools.client.browser.match_paths(node_36436.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36437)){
var new_link_36438 = (function (){var G__36251 = node_36436.cloneNode(true);
G__36251.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36437),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36251;
})();
(new_link_36438.onload = ((function (seq__36236_36432,chunk__36239_36433,count__36240_36434,i__36241_36435,seq__36183,chunk__36185,count__36186,i__36187,new_link_36438,path_match_36437,node_36436,path,map__36181,map__36181__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36436);
});})(seq__36236_36432,chunk__36239_36433,count__36240_36434,i__36241_36435,seq__36183,chunk__36185,count__36186,i__36187,new_link_36438,path_match_36437,node_36436,path,map__36181,map__36181__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36437], 0));

goog.dom.insertSiblingAfter(new_link_36438,node_36436);


var G__36439 = seq__36236_36432;
var G__36440 = chunk__36239_36433;
var G__36441 = count__36240_36434;
var G__36442 = (i__36241_36435 + (1));
seq__36236_36432 = G__36439;
chunk__36239_36433 = G__36440;
count__36240_36434 = G__36441;
i__36241_36435 = G__36442;
continue;
} else {
var G__36443 = seq__36236_36432;
var G__36444 = chunk__36239_36433;
var G__36445 = count__36240_36434;
var G__36446 = (i__36241_36435 + (1));
seq__36236_36432 = G__36443;
chunk__36239_36433 = G__36444;
count__36240_36434 = G__36445;
i__36241_36435 = G__36446;
continue;
}
} else {
var temp__5735__auto___36447 = cljs.core.seq(seq__36236_36432);
if(temp__5735__auto___36447){
var seq__36236_36448__$1 = temp__5735__auto___36447;
if(cljs.core.chunked_seq_QMARK_(seq__36236_36448__$1)){
var c__4556__auto___36449 = cljs.core.chunk_first(seq__36236_36448__$1);
var G__36450 = cljs.core.chunk_rest(seq__36236_36448__$1);
var G__36451 = c__4556__auto___36449;
var G__36452 = cljs.core.count(c__4556__auto___36449);
var G__36453 = (0);
seq__36236_36432 = G__36450;
chunk__36239_36433 = G__36451;
count__36240_36434 = G__36452;
i__36241_36435 = G__36453;
continue;
} else {
var node_36454 = cljs.core.first(seq__36236_36448__$1);
var path_match_36455 = shadow.cljs.devtools.client.browser.match_paths(node_36454.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36455)){
var new_link_36457 = (function (){var G__36274 = node_36454.cloneNode(true);
G__36274.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36455),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36274;
})();
(new_link_36457.onload = ((function (seq__36236_36432,chunk__36239_36433,count__36240_36434,i__36241_36435,seq__36183,chunk__36185,count__36186,i__36187,new_link_36457,path_match_36455,node_36454,seq__36236_36448__$1,temp__5735__auto___36447,path,map__36181,map__36181__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36454);
});})(seq__36236_36432,chunk__36239_36433,count__36240_36434,i__36241_36435,seq__36183,chunk__36185,count__36186,i__36187,new_link_36457,path_match_36455,node_36454,seq__36236_36448__$1,temp__5735__auto___36447,path,map__36181,map__36181__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36455], 0));

goog.dom.insertSiblingAfter(new_link_36457,node_36454);


var G__36461 = cljs.core.next(seq__36236_36448__$1);
var G__36462 = null;
var G__36463 = (0);
var G__36464 = (0);
seq__36236_36432 = G__36461;
chunk__36239_36433 = G__36462;
count__36240_36434 = G__36463;
i__36241_36435 = G__36464;
continue;
} else {
var G__36465 = cljs.core.next(seq__36236_36448__$1);
var G__36466 = null;
var G__36467 = (0);
var G__36468 = (0);
seq__36236_36432 = G__36465;
chunk__36239_36433 = G__36466;
count__36240_36434 = G__36467;
i__36241_36435 = G__36468;
continue;
}
}
} else {
}
}
break;
}


var G__36469 = seq__36183;
var G__36470 = chunk__36185;
var G__36471 = count__36186;
var G__36472 = (i__36187 + (1));
seq__36183 = G__36469;
chunk__36185 = G__36470;
count__36186 = G__36471;
i__36187 = G__36472;
continue;
} else {
var G__36473 = seq__36183;
var G__36474 = chunk__36185;
var G__36475 = count__36186;
var G__36476 = (i__36187 + (1));
seq__36183 = G__36473;
chunk__36185 = G__36474;
count__36186 = G__36475;
i__36187 = G__36476;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36183);
if(temp__5735__auto__){
var seq__36183__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36183__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36183__$1);
var G__36477 = cljs.core.chunk_rest(seq__36183__$1);
var G__36478 = c__4556__auto__;
var G__36479 = cljs.core.count(c__4556__auto__);
var G__36480 = (0);
seq__36183 = G__36477;
chunk__36185 = G__36478;
count__36186 = G__36479;
i__36187 = G__36480;
continue;
} else {
var path = cljs.core.first(seq__36183__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36280_36481 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36284_36482 = null;
var count__36285_36483 = (0);
var i__36286_36484 = (0);
while(true){
if((i__36286_36484 < count__36285_36483)){
var node_36485 = chunk__36284_36482.cljs$core$IIndexed$_nth$arity$2(null,i__36286_36484);
var path_match_36486 = shadow.cljs.devtools.client.browser.match_paths(node_36485.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36486)){
var new_link_36487 = (function (){var G__36303 = node_36485.cloneNode(true);
G__36303.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36486),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36303;
})();
(new_link_36487.onload = ((function (seq__36280_36481,chunk__36284_36482,count__36285_36483,i__36286_36484,seq__36183,chunk__36185,count__36186,i__36187,new_link_36487,path_match_36486,node_36485,path,seq__36183__$1,temp__5735__auto__,map__36181,map__36181__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36485);
});})(seq__36280_36481,chunk__36284_36482,count__36285_36483,i__36286_36484,seq__36183,chunk__36185,count__36186,i__36187,new_link_36487,path_match_36486,node_36485,path,seq__36183__$1,temp__5735__auto__,map__36181,map__36181__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36486], 0));

goog.dom.insertSiblingAfter(new_link_36487,node_36485);


var G__36488 = seq__36280_36481;
var G__36489 = chunk__36284_36482;
var G__36490 = count__36285_36483;
var G__36491 = (i__36286_36484 + (1));
seq__36280_36481 = G__36488;
chunk__36284_36482 = G__36489;
count__36285_36483 = G__36490;
i__36286_36484 = G__36491;
continue;
} else {
var G__36492 = seq__36280_36481;
var G__36493 = chunk__36284_36482;
var G__36494 = count__36285_36483;
var G__36495 = (i__36286_36484 + (1));
seq__36280_36481 = G__36492;
chunk__36284_36482 = G__36493;
count__36285_36483 = G__36494;
i__36286_36484 = G__36495;
continue;
}
} else {
var temp__5735__auto___36496__$1 = cljs.core.seq(seq__36280_36481);
if(temp__5735__auto___36496__$1){
var seq__36280_36497__$1 = temp__5735__auto___36496__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36280_36497__$1)){
var c__4556__auto___36498 = cljs.core.chunk_first(seq__36280_36497__$1);
var G__36499 = cljs.core.chunk_rest(seq__36280_36497__$1);
var G__36500 = c__4556__auto___36498;
var G__36501 = cljs.core.count(c__4556__auto___36498);
var G__36502 = (0);
seq__36280_36481 = G__36499;
chunk__36284_36482 = G__36500;
count__36285_36483 = G__36501;
i__36286_36484 = G__36502;
continue;
} else {
var node_36503 = cljs.core.first(seq__36280_36497__$1);
var path_match_36504 = shadow.cljs.devtools.client.browser.match_paths(node_36503.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36504)){
var new_link_36505 = (function (){var G__36313 = node_36503.cloneNode(true);
G__36313.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36504),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36313;
})();
(new_link_36505.onload = ((function (seq__36280_36481,chunk__36284_36482,count__36285_36483,i__36286_36484,seq__36183,chunk__36185,count__36186,i__36187,new_link_36505,path_match_36504,node_36503,seq__36280_36497__$1,temp__5735__auto___36496__$1,path,seq__36183__$1,temp__5735__auto__,map__36181,map__36181__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36503);
});})(seq__36280_36481,chunk__36284_36482,count__36285_36483,i__36286_36484,seq__36183,chunk__36185,count__36186,i__36187,new_link_36505,path_match_36504,node_36503,seq__36280_36497__$1,temp__5735__auto___36496__$1,path,seq__36183__$1,temp__5735__auto__,map__36181,map__36181__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36504], 0));

goog.dom.insertSiblingAfter(new_link_36505,node_36503);


var G__36506 = cljs.core.next(seq__36280_36497__$1);
var G__36507 = null;
var G__36508 = (0);
var G__36509 = (0);
seq__36280_36481 = G__36506;
chunk__36284_36482 = G__36507;
count__36285_36483 = G__36508;
i__36286_36484 = G__36509;
continue;
} else {
var G__36510 = cljs.core.next(seq__36280_36497__$1);
var G__36511 = null;
var G__36512 = (0);
var G__36513 = (0);
seq__36280_36481 = G__36510;
chunk__36284_36482 = G__36511;
count__36285_36483 = G__36512;
i__36286_36484 = G__36513;
continue;
}
}
} else {
}
}
break;
}


var G__36514 = cljs.core.next(seq__36183__$1);
var G__36515 = null;
var G__36516 = (0);
var G__36517 = (0);
seq__36183 = G__36514;
chunk__36185 = G__36515;
count__36186 = G__36516;
i__36187 = G__36517;
continue;
} else {
var G__36518 = cljs.core.next(seq__36183__$1);
var G__36519 = null;
var G__36520 = (0);
var G__36521 = (0);
seq__36183 = G__36518;
chunk__36185 = G__36519;
count__36186 = G__36520;
i__36187 = G__36521;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36314){
var map__36315 = p__36314;
var map__36315__$1 = (((((!((map__36315 == null))))?(((((map__36315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36315):map__36315);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36315__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36326){
var map__36327 = p__36326;
var map__36327__$1 = (((((!((map__36327 == null))))?(((((map__36327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36327):map__36327);
var _ = map__36327__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36327__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36329,done,error){
var map__36330 = p__36329;
var map__36330__$1 = (((((!((map__36330 == null))))?(((((map__36330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36330):map__36330);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36330__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36332,done,error){
var map__36333 = p__36332;
var map__36333__$1 = (((((!((map__36333 == null))))?(((((map__36333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36333):map__36333);
var msg = map__36333__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36333__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36333__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36333__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36335){
var map__36336 = p__36335;
var map__36336__$1 = (((((!((map__36336 == null))))?(((((map__36336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36336):map__36336);
var src = map__36336__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36336__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36338 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36338) : done.call(null,G__36338));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36339){
var map__36340 = p__36339;
var map__36340__$1 = (((((!((map__36340 == null))))?(((((map__36340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36340):map__36340);
var msg__$1 = map__36340__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36340__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36342){var ex = e36342;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36343){
var map__36344 = p__36343;
var map__36344__$1 = (((((!((map__36344 == null))))?(((((map__36344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36344):map__36344);
var env = map__36344__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36344__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__36346){
var map__36347 = p__36346;
var map__36347__$1 = (((((!((map__36347 == null))))?(((((map__36347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36347):map__36347);
var msg = map__36347__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36347__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36349){
var map__36350 = p__36349;
var map__36350__$1 = (((((!((map__36350 == null))))?(((((map__36350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36350):map__36350);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36350__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36350__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__36352){
var map__36353 = p__36352;
var map__36353__$1 = (((((!((map__36353 == null))))?(((((map__36353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36353):map__36353);
var svc = map__36353__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36353__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
