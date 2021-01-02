goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36328 = arguments.length;
var i__4737__auto___36329 = (0);
while(true){
if((i__4737__auto___36329 < len__4736__auto___36328)){
args__4742__auto__.push((arguments[i__4737__auto___36329]));

var G__36330 = (i__4737__auto___36329 + (1));
i__4737__auto___36329 = G__36330;
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
var seq__36077 = cljs.core.seq(sources);
var chunk__36078 = null;
var count__36079 = (0);
var i__36080 = (0);
while(true){
if((i__36080 < count__36079)){
var map__36087 = chunk__36078.cljs$core$IIndexed$_nth$arity$2(null,i__36080);
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
}catch (e36089){var e_36336 = e36089;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36336);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36336.message)].join('')));
}

var G__36337 = seq__36077;
var G__36338 = chunk__36078;
var G__36339 = count__36079;
var G__36340 = (i__36080 + (1));
seq__36077 = G__36337;
chunk__36078 = G__36338;
count__36079 = G__36339;
i__36080 = G__36340;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36077);
if(temp__5735__auto__){
var seq__36077__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36077__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36077__$1);
var G__36342 = cljs.core.chunk_rest(seq__36077__$1);
var G__36343 = c__4556__auto__;
var G__36344 = cljs.core.count(c__4556__auto__);
var G__36345 = (0);
seq__36077 = G__36342;
chunk__36078 = G__36343;
count__36079 = G__36344;
i__36080 = G__36345;
continue;
} else {
var map__36091 = cljs.core.first(seq__36077__$1);
var map__36091__$1 = (((((!((map__36091 == null))))?(((((map__36091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36091):map__36091);
var src = map__36091__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36091__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36091__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36091__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36091__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36094){var e_36346 = e36094;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36346);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36346.message)].join('')));
}

var G__36347 = cljs.core.next(seq__36077__$1);
var G__36348 = null;
var G__36349 = (0);
var G__36350 = (0);
seq__36077 = G__36347;
chunk__36078 = G__36348;
count__36079 = G__36349;
i__36080 = G__36350;
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
var seq__36099 = cljs.core.seq(js_requires);
var chunk__36100 = null;
var count__36101 = (0);
var i__36102 = (0);
while(true){
if((i__36102 < count__36101)){
var js_ns = chunk__36100.cljs$core$IIndexed$_nth$arity$2(null,i__36102);
var require_str_36367 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36367);


var G__36368 = seq__36099;
var G__36369 = chunk__36100;
var G__36370 = count__36101;
var G__36371 = (i__36102 + (1));
seq__36099 = G__36368;
chunk__36100 = G__36369;
count__36101 = G__36370;
i__36102 = G__36371;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36099);
if(temp__5735__auto__){
var seq__36099__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36099__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36099__$1);
var G__36372 = cljs.core.chunk_rest(seq__36099__$1);
var G__36373 = c__4556__auto__;
var G__36374 = cljs.core.count(c__4556__auto__);
var G__36375 = (0);
seq__36099 = G__36372;
chunk__36100 = G__36373;
count__36101 = G__36374;
i__36102 = G__36375;
continue;
} else {
var js_ns = cljs.core.first(seq__36099__$1);
var require_str_36376 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36376);


var G__36377 = cljs.core.next(seq__36099__$1);
var G__36378 = null;
var G__36379 = (0);
var G__36380 = (0);
seq__36099 = G__36377;
chunk__36100 = G__36378;
count__36101 = G__36379;
i__36102 = G__36380;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36124){
var map__36125 = p__36124;
var map__36125__$1 = (((((!((map__36125 == null))))?(((((map__36125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36125):map__36125);
var msg = map__36125__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36125__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36125__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36127(s__36128){
return (new cljs.core.LazySeq(null,(function (){
var s__36128__$1 = s__36128;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36128__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__36133 = cljs.core.first(xs__6292__auto__);
var map__36133__$1 = (((((!((map__36133 == null))))?(((((map__36133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36133):map__36133);
var src = map__36133__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36133__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36133__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__36128__$1,map__36133,map__36133__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36125,map__36125__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36127_$_iter__36129(s__36130){
return (new cljs.core.LazySeq(null,((function (s__36128__$1,map__36133,map__36133__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36125,map__36125__$1,msg,info,reload_info){
return (function (){
var s__36130__$1 = s__36130;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36130__$1);
if(temp__5735__auto____$1){
var s__36130__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36130__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__36130__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__36132 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__36131 = (0);
while(true){
if((i__36131 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__36131);
cljs.core.chunk_append(b__36132,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36381 = (i__36131 + (1));
i__36131 = G__36381;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36132),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36127_$_iter__36129(cljs.core.chunk_rest(s__36130__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36132),null);
}
} else {
var warning = cljs.core.first(s__36130__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36127_$_iter__36129(cljs.core.rest(s__36130__$2)));
}
} else {
return null;
}
break;
}
});})(s__36128__$1,map__36133,map__36133__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36125,map__36125__$1,msg,info,reload_info))
,null,null));
});})(s__36128__$1,map__36133,map__36133__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36125,map__36125__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36127(cljs.core.rest(s__36128__$1)));
} else {
var G__36387 = cljs.core.rest(s__36128__$1);
s__36128__$1 = G__36387;
continue;
}
} else {
var G__36388 = cljs.core.rest(s__36128__$1);
s__36128__$1 = G__36388;
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
var seq__36135_36389 = cljs.core.seq(warnings);
var chunk__36136_36390 = null;
var count__36137_36391 = (0);
var i__36138_36392 = (0);
while(true){
if((i__36138_36392 < count__36137_36391)){
var map__36143_36393 = chunk__36136_36390.cljs$core$IIndexed$_nth$arity$2(null,i__36138_36392);
var map__36143_36394__$1 = (((((!((map__36143_36393 == null))))?(((((map__36143_36393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36143_36393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36143_36393):map__36143_36393);
var w_36395 = map__36143_36394__$1;
var msg_36396__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36143_36394__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36143_36394__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36143_36394__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36143_36394__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36399)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36397),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36398),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36396__$1)].join(''));


var G__36400 = seq__36135_36389;
var G__36401 = chunk__36136_36390;
var G__36402 = count__36137_36391;
var G__36403 = (i__36138_36392 + (1));
seq__36135_36389 = G__36400;
chunk__36136_36390 = G__36401;
count__36137_36391 = G__36402;
i__36138_36392 = G__36403;
continue;
} else {
var temp__5735__auto___36404 = cljs.core.seq(seq__36135_36389);
if(temp__5735__auto___36404){
var seq__36135_36405__$1 = temp__5735__auto___36404;
if(cljs.core.chunked_seq_QMARK_(seq__36135_36405__$1)){
var c__4556__auto___36406 = cljs.core.chunk_first(seq__36135_36405__$1);
var G__36407 = cljs.core.chunk_rest(seq__36135_36405__$1);
var G__36408 = c__4556__auto___36406;
var G__36409 = cljs.core.count(c__4556__auto___36406);
var G__36410 = (0);
seq__36135_36389 = G__36407;
chunk__36136_36390 = G__36408;
count__36137_36391 = G__36409;
i__36138_36392 = G__36410;
continue;
} else {
var map__36145_36411 = cljs.core.first(seq__36135_36405__$1);
var map__36145_36412__$1 = (((((!((map__36145_36411 == null))))?(((((map__36145_36411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36145_36411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36145_36411):map__36145_36411);
var w_36413 = map__36145_36412__$1;
var msg_36414__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36145_36412__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36145_36412__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36416 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36145_36412__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36145_36412__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36417)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36415),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36416),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36414__$1)].join(''));


var G__36418 = cljs.core.next(seq__36135_36405__$1);
var G__36419 = null;
var G__36420 = (0);
var G__36421 = (0);
seq__36135_36389 = G__36418;
chunk__36136_36390 = G__36419;
count__36137_36391 = G__36420;
i__36138_36392 = G__36421;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36123_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36123_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36157){
var map__36158 = p__36157;
var map__36158__$1 = (((((!((map__36158 == null))))?(((((map__36158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36158):map__36158);
var msg = map__36158__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36158__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__36162 = cljs.core.seq(updates);
var chunk__36164 = null;
var count__36165 = (0);
var i__36166 = (0);
while(true){
if((i__36166 < count__36165)){
var path = chunk__36164.cljs$core$IIndexed$_nth$arity$2(null,i__36166);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36195_36422 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36198_36423 = null;
var count__36199_36424 = (0);
var i__36200_36425 = (0);
while(true){
if((i__36200_36425 < count__36199_36424)){
var node_36426 = chunk__36198_36423.cljs$core$IIndexed$_nth$arity$2(null,i__36200_36425);
var path_match_36427 = shadow.cljs.devtools.client.browser.match_paths(node_36426.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36427)){
var new_link_36428 = (function (){var G__36205 = node_36426.cloneNode(true);
G__36205.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36427),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36205;
})();
(new_link_36428.onload = ((function (seq__36195_36422,chunk__36198_36423,count__36199_36424,i__36200_36425,seq__36162,chunk__36164,count__36165,i__36166,new_link_36428,path_match_36427,node_36426,path,map__36158,map__36158__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36426);
});})(seq__36195_36422,chunk__36198_36423,count__36199_36424,i__36200_36425,seq__36162,chunk__36164,count__36165,i__36166,new_link_36428,path_match_36427,node_36426,path,map__36158,map__36158__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36427], 0));

goog.dom.insertSiblingAfter(new_link_36428,node_36426);


var G__36429 = seq__36195_36422;
var G__36430 = chunk__36198_36423;
var G__36431 = count__36199_36424;
var G__36432 = (i__36200_36425 + (1));
seq__36195_36422 = G__36429;
chunk__36198_36423 = G__36430;
count__36199_36424 = G__36431;
i__36200_36425 = G__36432;
continue;
} else {
var G__36433 = seq__36195_36422;
var G__36434 = chunk__36198_36423;
var G__36435 = count__36199_36424;
var G__36436 = (i__36200_36425 + (1));
seq__36195_36422 = G__36433;
chunk__36198_36423 = G__36434;
count__36199_36424 = G__36435;
i__36200_36425 = G__36436;
continue;
}
} else {
var temp__5735__auto___36437 = cljs.core.seq(seq__36195_36422);
if(temp__5735__auto___36437){
var seq__36195_36438__$1 = temp__5735__auto___36437;
if(cljs.core.chunked_seq_QMARK_(seq__36195_36438__$1)){
var c__4556__auto___36439 = cljs.core.chunk_first(seq__36195_36438__$1);
var G__36440 = cljs.core.chunk_rest(seq__36195_36438__$1);
var G__36441 = c__4556__auto___36439;
var G__36442 = cljs.core.count(c__4556__auto___36439);
var G__36443 = (0);
seq__36195_36422 = G__36440;
chunk__36198_36423 = G__36441;
count__36199_36424 = G__36442;
i__36200_36425 = G__36443;
continue;
} else {
var node_36444 = cljs.core.first(seq__36195_36438__$1);
var path_match_36445 = shadow.cljs.devtools.client.browser.match_paths(node_36444.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36445)){
var new_link_36446 = (function (){var G__36206 = node_36444.cloneNode(true);
G__36206.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36445),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36206;
})();
(new_link_36446.onload = ((function (seq__36195_36422,chunk__36198_36423,count__36199_36424,i__36200_36425,seq__36162,chunk__36164,count__36165,i__36166,new_link_36446,path_match_36445,node_36444,seq__36195_36438__$1,temp__5735__auto___36437,path,map__36158,map__36158__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36444);
});})(seq__36195_36422,chunk__36198_36423,count__36199_36424,i__36200_36425,seq__36162,chunk__36164,count__36165,i__36166,new_link_36446,path_match_36445,node_36444,seq__36195_36438__$1,temp__5735__auto___36437,path,map__36158,map__36158__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36445], 0));

goog.dom.insertSiblingAfter(new_link_36446,node_36444);


var G__36447 = cljs.core.next(seq__36195_36438__$1);
var G__36448 = null;
var G__36449 = (0);
var G__36450 = (0);
seq__36195_36422 = G__36447;
chunk__36198_36423 = G__36448;
count__36199_36424 = G__36449;
i__36200_36425 = G__36450;
continue;
} else {
var G__36451 = cljs.core.next(seq__36195_36438__$1);
var G__36452 = null;
var G__36453 = (0);
var G__36454 = (0);
seq__36195_36422 = G__36451;
chunk__36198_36423 = G__36452;
count__36199_36424 = G__36453;
i__36200_36425 = G__36454;
continue;
}
}
} else {
}
}
break;
}


var G__36455 = seq__36162;
var G__36456 = chunk__36164;
var G__36457 = count__36165;
var G__36458 = (i__36166 + (1));
seq__36162 = G__36455;
chunk__36164 = G__36456;
count__36165 = G__36457;
i__36166 = G__36458;
continue;
} else {
var G__36459 = seq__36162;
var G__36460 = chunk__36164;
var G__36461 = count__36165;
var G__36462 = (i__36166 + (1));
seq__36162 = G__36459;
chunk__36164 = G__36460;
count__36165 = G__36461;
i__36166 = G__36462;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36162);
if(temp__5735__auto__){
var seq__36162__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36162__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36162__$1);
var G__36463 = cljs.core.chunk_rest(seq__36162__$1);
var G__36464 = c__4556__auto__;
var G__36465 = cljs.core.count(c__4556__auto__);
var G__36466 = (0);
seq__36162 = G__36463;
chunk__36164 = G__36464;
count__36165 = G__36465;
i__36166 = G__36466;
continue;
} else {
var path = cljs.core.first(seq__36162__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36207_36467 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36210_36468 = null;
var count__36211_36469 = (0);
var i__36212_36470 = (0);
while(true){
if((i__36212_36470 < count__36211_36469)){
var node_36471 = chunk__36210_36468.cljs$core$IIndexed$_nth$arity$2(null,i__36212_36470);
var path_match_36472 = shadow.cljs.devtools.client.browser.match_paths(node_36471.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36472)){
var new_link_36473 = (function (){var G__36219 = node_36471.cloneNode(true);
G__36219.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36472),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36219;
})();
(new_link_36473.onload = ((function (seq__36207_36467,chunk__36210_36468,count__36211_36469,i__36212_36470,seq__36162,chunk__36164,count__36165,i__36166,new_link_36473,path_match_36472,node_36471,path,seq__36162__$1,temp__5735__auto__,map__36158,map__36158__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36471);
});})(seq__36207_36467,chunk__36210_36468,count__36211_36469,i__36212_36470,seq__36162,chunk__36164,count__36165,i__36166,new_link_36473,path_match_36472,node_36471,path,seq__36162__$1,temp__5735__auto__,map__36158,map__36158__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36472], 0));

goog.dom.insertSiblingAfter(new_link_36473,node_36471);


var G__36474 = seq__36207_36467;
var G__36475 = chunk__36210_36468;
var G__36476 = count__36211_36469;
var G__36477 = (i__36212_36470 + (1));
seq__36207_36467 = G__36474;
chunk__36210_36468 = G__36475;
count__36211_36469 = G__36476;
i__36212_36470 = G__36477;
continue;
} else {
var G__36478 = seq__36207_36467;
var G__36479 = chunk__36210_36468;
var G__36480 = count__36211_36469;
var G__36481 = (i__36212_36470 + (1));
seq__36207_36467 = G__36478;
chunk__36210_36468 = G__36479;
count__36211_36469 = G__36480;
i__36212_36470 = G__36481;
continue;
}
} else {
var temp__5735__auto___36482__$1 = cljs.core.seq(seq__36207_36467);
if(temp__5735__auto___36482__$1){
var seq__36207_36483__$1 = temp__5735__auto___36482__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36207_36483__$1)){
var c__4556__auto___36484 = cljs.core.chunk_first(seq__36207_36483__$1);
var G__36485 = cljs.core.chunk_rest(seq__36207_36483__$1);
var G__36486 = c__4556__auto___36484;
var G__36487 = cljs.core.count(c__4556__auto___36484);
var G__36488 = (0);
seq__36207_36467 = G__36485;
chunk__36210_36468 = G__36486;
count__36211_36469 = G__36487;
i__36212_36470 = G__36488;
continue;
} else {
var node_36489 = cljs.core.first(seq__36207_36483__$1);
var path_match_36490 = shadow.cljs.devtools.client.browser.match_paths(node_36489.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36490)){
var new_link_36491 = (function (){var G__36220 = node_36489.cloneNode(true);
G__36220.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36490),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36220;
})();
(new_link_36491.onload = ((function (seq__36207_36467,chunk__36210_36468,count__36211_36469,i__36212_36470,seq__36162,chunk__36164,count__36165,i__36166,new_link_36491,path_match_36490,node_36489,seq__36207_36483__$1,temp__5735__auto___36482__$1,path,seq__36162__$1,temp__5735__auto__,map__36158,map__36158__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36489);
});})(seq__36207_36467,chunk__36210_36468,count__36211_36469,i__36212_36470,seq__36162,chunk__36164,count__36165,i__36166,new_link_36491,path_match_36490,node_36489,seq__36207_36483__$1,temp__5735__auto___36482__$1,path,seq__36162__$1,temp__5735__auto__,map__36158,map__36158__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36490], 0));

goog.dom.insertSiblingAfter(new_link_36491,node_36489);


var G__36492 = cljs.core.next(seq__36207_36483__$1);
var G__36493 = null;
var G__36494 = (0);
var G__36495 = (0);
seq__36207_36467 = G__36492;
chunk__36210_36468 = G__36493;
count__36211_36469 = G__36494;
i__36212_36470 = G__36495;
continue;
} else {
var G__36496 = cljs.core.next(seq__36207_36483__$1);
var G__36497 = null;
var G__36498 = (0);
var G__36499 = (0);
seq__36207_36467 = G__36496;
chunk__36210_36468 = G__36497;
count__36211_36469 = G__36498;
i__36212_36470 = G__36499;
continue;
}
}
} else {
}
}
break;
}


var G__36500 = cljs.core.next(seq__36162__$1);
var G__36501 = null;
var G__36502 = (0);
var G__36503 = (0);
seq__36162 = G__36500;
chunk__36164 = G__36501;
count__36165 = G__36502;
i__36166 = G__36503;
continue;
} else {
var G__36504 = cljs.core.next(seq__36162__$1);
var G__36505 = null;
var G__36506 = (0);
var G__36507 = (0);
seq__36162 = G__36504;
chunk__36164 = G__36505;
count__36165 = G__36506;
i__36166 = G__36507;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36221){
var map__36222 = p__36221;
var map__36222__$1 = (((((!((map__36222 == null))))?(((((map__36222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36222):map__36222);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36222__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36234){
var map__36235 = p__36234;
var map__36235__$1 = (((((!((map__36235 == null))))?(((((map__36235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36235):map__36235);
var _ = map__36235__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36235__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36238,done,error){
var map__36239 = p__36238;
var map__36239__$1 = (((((!((map__36239 == null))))?(((((map__36239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36239):map__36239);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36239__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36246,done,error){
var map__36247 = p__36246;
var map__36247__$1 = (((((!((map__36247 == null))))?(((((map__36247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36247):map__36247);
var msg = map__36247__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36247__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36247__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36247__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36263){
var map__36264 = p__36263;
var map__36264__$1 = (((((!((map__36264 == null))))?(((((map__36264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36264):map__36264);
var src = map__36264__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36264__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36267 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36267) : done.call(null,G__36267));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36268){
var map__36269 = p__36268;
var map__36269__$1 = (((((!((map__36269 == null))))?(((((map__36269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36269):map__36269);
var msg__$1 = map__36269__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36269__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36275){var ex = e36275;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36276){
var map__36277 = p__36276;
var map__36277__$1 = (((((!((map__36277 == null))))?(((((map__36277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36277):map__36277);
var env = map__36277__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36277__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__36296){
var map__36297 = p__36296;
var map__36297__$1 = (((((!((map__36297 == null))))?(((((map__36297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36297):map__36297);
var msg = map__36297__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36297__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36308){
var map__36311 = p__36308;
var map__36311__$1 = (((((!((map__36311 == null))))?(((((map__36311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36311):map__36311);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36311__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36311__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__36318){
var map__36319 = p__36318;
var map__36319__$1 = (((((!((map__36319 == null))))?(((((map__36319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36319):map__36319);
var svc = map__36319__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36319__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
