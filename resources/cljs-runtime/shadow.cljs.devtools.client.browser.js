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
}catch (e36089){var e_36358 = e36089;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36358);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36358.message)].join('')));
}

var G__36359 = seq__36077;
var G__36360 = chunk__36078;
var G__36361 = count__36079;
var G__36362 = (i__36080 + (1));
seq__36077 = G__36359;
chunk__36078 = G__36360;
count__36079 = G__36361;
i__36080 = G__36362;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36077);
if(temp__5735__auto__){
var seq__36077__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36077__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36077__$1);
var G__36363 = cljs.core.chunk_rest(seq__36077__$1);
var G__36364 = c__4556__auto__;
var G__36365 = cljs.core.count(c__4556__auto__);
var G__36366 = (0);
seq__36077 = G__36363;
chunk__36078 = G__36364;
count__36079 = G__36365;
i__36080 = G__36366;
continue;
} else {
var map__36090 = cljs.core.first(seq__36077__$1);
var map__36090__$1 = (((((!((map__36090 == null))))?(((((map__36090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36090):map__36090);
var src = map__36090__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36090__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36090__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36090__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36090__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36092){var e_36367 = e36092;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36367);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36367.message)].join('')));
}

var G__36368 = cljs.core.next(seq__36077__$1);
var G__36369 = null;
var G__36370 = (0);
var G__36371 = (0);
seq__36077 = G__36368;
chunk__36078 = G__36369;
count__36079 = G__36370;
i__36080 = G__36371;
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
var seq__36101 = cljs.core.seq(js_requires);
var chunk__36102 = null;
var count__36103 = (0);
var i__36104 = (0);
while(true){
if((i__36104 < count__36103)){
var js_ns = chunk__36102.cljs$core$IIndexed$_nth$arity$2(null,i__36104);
var require_str_36372 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36372);


var G__36373 = seq__36101;
var G__36374 = chunk__36102;
var G__36375 = count__36103;
var G__36376 = (i__36104 + (1));
seq__36101 = G__36373;
chunk__36102 = G__36374;
count__36103 = G__36375;
i__36104 = G__36376;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36101);
if(temp__5735__auto__){
var seq__36101__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36101__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36101__$1);
var G__36377 = cljs.core.chunk_rest(seq__36101__$1);
var G__36378 = c__4556__auto__;
var G__36379 = cljs.core.count(c__4556__auto__);
var G__36380 = (0);
seq__36101 = G__36377;
chunk__36102 = G__36378;
count__36103 = G__36379;
i__36104 = G__36380;
continue;
} else {
var js_ns = cljs.core.first(seq__36101__$1);
var require_str_36381 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36381);


var G__36382 = cljs.core.next(seq__36101__$1);
var G__36383 = null;
var G__36384 = (0);
var G__36385 = (0);
seq__36101 = G__36382;
chunk__36102 = G__36383;
count__36103 = G__36384;
i__36104 = G__36385;
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
var map__36124 = cljs.core.first(xs__6292__auto__);
var map__36124__$1 = (((((!((map__36124 == null))))?(((((map__36124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36124):map__36124);
var src = map__36124__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36124__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36124__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__36119__$1,map__36124,map__36124__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36116,map__36116__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36118_$_iter__36120(s__36121){
return (new cljs.core.LazySeq(null,((function (s__36119__$1,map__36124,map__36124__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36116,map__36116__$1,msg,info,reload_info){
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

var G__36386 = (i__36122 + (1));
i__36122 = G__36386;
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
});})(s__36119__$1,map__36124,map__36124__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36116,map__36116__$1,msg,info,reload_info))
,null,null));
});})(s__36119__$1,map__36124,map__36124__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36116,map__36116__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36118(cljs.core.rest(s__36119__$1)));
} else {
var G__36387 = cljs.core.rest(s__36119__$1);
s__36119__$1 = G__36387;
continue;
}
} else {
var G__36388 = cljs.core.rest(s__36119__$1);
s__36119__$1 = G__36388;
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
var seq__36127_36389 = cljs.core.seq(warnings);
var chunk__36128_36390 = null;
var count__36129_36391 = (0);
var i__36130_36392 = (0);
while(true){
if((i__36130_36392 < count__36129_36391)){
var map__36135_36393 = chunk__36128_36390.cljs$core$IIndexed$_nth$arity$2(null,i__36130_36392);
var map__36135_36394__$1 = (((((!((map__36135_36393 == null))))?(((((map__36135_36393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36135_36393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36135_36393):map__36135_36393);
var w_36395 = map__36135_36394__$1;
var msg_36396__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36135_36394__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36135_36394__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36135_36394__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36135_36394__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36399)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36397),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36398),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36396__$1)].join(''));


var G__36401 = seq__36127_36389;
var G__36402 = chunk__36128_36390;
var G__36403 = count__36129_36391;
var G__36404 = (i__36130_36392 + (1));
seq__36127_36389 = G__36401;
chunk__36128_36390 = G__36402;
count__36129_36391 = G__36403;
i__36130_36392 = G__36404;
continue;
} else {
var temp__5735__auto___36405 = cljs.core.seq(seq__36127_36389);
if(temp__5735__auto___36405){
var seq__36127_36406__$1 = temp__5735__auto___36405;
if(cljs.core.chunked_seq_QMARK_(seq__36127_36406__$1)){
var c__4556__auto___36407 = cljs.core.chunk_first(seq__36127_36406__$1);
var G__36408 = cljs.core.chunk_rest(seq__36127_36406__$1);
var G__36409 = c__4556__auto___36407;
var G__36410 = cljs.core.count(c__4556__auto___36407);
var G__36411 = (0);
seq__36127_36389 = G__36408;
chunk__36128_36390 = G__36409;
count__36129_36391 = G__36410;
i__36130_36392 = G__36411;
continue;
} else {
var map__36145_36412 = cljs.core.first(seq__36127_36406__$1);
var map__36145_36413__$1 = (((((!((map__36145_36412 == null))))?(((((map__36145_36412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36145_36412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36145_36412):map__36145_36412);
var w_36414 = map__36145_36413__$1;
var msg_36415__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36145_36413__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36416 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36145_36413__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36145_36413__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36145_36413__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36418)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36416),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36417),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36415__$1)].join(''));


var G__36419 = cljs.core.next(seq__36127_36406__$1);
var G__36420 = null;
var G__36421 = (0);
var G__36422 = (0);
seq__36127_36389 = G__36419;
chunk__36128_36390 = G__36420;
count__36129_36391 = G__36421;
i__36130_36392 = G__36422;
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36157){
var map__36158 = p__36157;
var map__36158__$1 = (((((!((map__36158 == null))))?(((((map__36158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36158):map__36158);
var msg = map__36158__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36158__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__36161 = cljs.core.seq(updates);
var chunk__36163 = null;
var count__36164 = (0);
var i__36165 = (0);
while(true){
if((i__36165 < count__36164)){
var path = chunk__36163.cljs$core$IIndexed$_nth$arity$2(null,i__36165);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36195_36424 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36198_36425 = null;
var count__36199_36426 = (0);
var i__36200_36427 = (0);
while(true){
if((i__36200_36427 < count__36199_36426)){
var node_36428 = chunk__36198_36425.cljs$core$IIndexed$_nth$arity$2(null,i__36200_36427);
var path_match_36429 = shadow.cljs.devtools.client.browser.match_paths(node_36428.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36429)){
var new_link_36430 = (function (){var G__36222 = node_36428.cloneNode(true);
G__36222.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36429),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36222;
})();
(new_link_36430.onload = ((function (seq__36195_36424,chunk__36198_36425,count__36199_36426,i__36200_36427,seq__36161,chunk__36163,count__36164,i__36165,new_link_36430,path_match_36429,node_36428,path,map__36158,map__36158__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36428);
});})(seq__36195_36424,chunk__36198_36425,count__36199_36426,i__36200_36427,seq__36161,chunk__36163,count__36164,i__36165,new_link_36430,path_match_36429,node_36428,path,map__36158,map__36158__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36429], 0));

goog.dom.insertSiblingAfter(new_link_36430,node_36428);


var G__36431 = seq__36195_36424;
var G__36432 = chunk__36198_36425;
var G__36433 = count__36199_36426;
var G__36434 = (i__36200_36427 + (1));
seq__36195_36424 = G__36431;
chunk__36198_36425 = G__36432;
count__36199_36426 = G__36433;
i__36200_36427 = G__36434;
continue;
} else {
var G__36435 = seq__36195_36424;
var G__36436 = chunk__36198_36425;
var G__36437 = count__36199_36426;
var G__36438 = (i__36200_36427 + (1));
seq__36195_36424 = G__36435;
chunk__36198_36425 = G__36436;
count__36199_36426 = G__36437;
i__36200_36427 = G__36438;
continue;
}
} else {
var temp__5735__auto___36439 = cljs.core.seq(seq__36195_36424);
if(temp__5735__auto___36439){
var seq__36195_36440__$1 = temp__5735__auto___36439;
if(cljs.core.chunked_seq_QMARK_(seq__36195_36440__$1)){
var c__4556__auto___36441 = cljs.core.chunk_first(seq__36195_36440__$1);
var G__36442 = cljs.core.chunk_rest(seq__36195_36440__$1);
var G__36443 = c__4556__auto___36441;
var G__36444 = cljs.core.count(c__4556__auto___36441);
var G__36445 = (0);
seq__36195_36424 = G__36442;
chunk__36198_36425 = G__36443;
count__36199_36426 = G__36444;
i__36200_36427 = G__36445;
continue;
} else {
var node_36446 = cljs.core.first(seq__36195_36440__$1);
var path_match_36447 = shadow.cljs.devtools.client.browser.match_paths(node_36446.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36447)){
var new_link_36448 = (function (){var G__36225 = node_36446.cloneNode(true);
G__36225.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36447),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36225;
})();
(new_link_36448.onload = ((function (seq__36195_36424,chunk__36198_36425,count__36199_36426,i__36200_36427,seq__36161,chunk__36163,count__36164,i__36165,new_link_36448,path_match_36447,node_36446,seq__36195_36440__$1,temp__5735__auto___36439,path,map__36158,map__36158__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36446);
});})(seq__36195_36424,chunk__36198_36425,count__36199_36426,i__36200_36427,seq__36161,chunk__36163,count__36164,i__36165,new_link_36448,path_match_36447,node_36446,seq__36195_36440__$1,temp__5735__auto___36439,path,map__36158,map__36158__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36447], 0));

goog.dom.insertSiblingAfter(new_link_36448,node_36446);


var G__36449 = cljs.core.next(seq__36195_36440__$1);
var G__36450 = null;
var G__36451 = (0);
var G__36452 = (0);
seq__36195_36424 = G__36449;
chunk__36198_36425 = G__36450;
count__36199_36426 = G__36451;
i__36200_36427 = G__36452;
continue;
} else {
var G__36453 = cljs.core.next(seq__36195_36440__$1);
var G__36454 = null;
var G__36455 = (0);
var G__36456 = (0);
seq__36195_36424 = G__36453;
chunk__36198_36425 = G__36454;
count__36199_36426 = G__36455;
i__36200_36427 = G__36456;
continue;
}
}
} else {
}
}
break;
}


var G__36457 = seq__36161;
var G__36458 = chunk__36163;
var G__36459 = count__36164;
var G__36460 = (i__36165 + (1));
seq__36161 = G__36457;
chunk__36163 = G__36458;
count__36164 = G__36459;
i__36165 = G__36460;
continue;
} else {
var G__36461 = seq__36161;
var G__36462 = chunk__36163;
var G__36463 = count__36164;
var G__36464 = (i__36165 + (1));
seq__36161 = G__36461;
chunk__36163 = G__36462;
count__36164 = G__36463;
i__36165 = G__36464;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36161);
if(temp__5735__auto__){
var seq__36161__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36161__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36161__$1);
var G__36465 = cljs.core.chunk_rest(seq__36161__$1);
var G__36466 = c__4556__auto__;
var G__36467 = cljs.core.count(c__4556__auto__);
var G__36468 = (0);
seq__36161 = G__36465;
chunk__36163 = G__36466;
count__36164 = G__36467;
i__36165 = G__36468;
continue;
} else {
var path = cljs.core.first(seq__36161__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36226_36469 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36229_36470 = null;
var count__36230_36471 = (0);
var i__36231_36472 = (0);
while(true){
if((i__36231_36472 < count__36230_36471)){
var node_36473 = chunk__36229_36470.cljs$core$IIndexed$_nth$arity$2(null,i__36231_36472);
var path_match_36474 = shadow.cljs.devtools.client.browser.match_paths(node_36473.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36474)){
var new_link_36475 = (function (){var G__36257 = node_36473.cloneNode(true);
G__36257.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36474),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36257;
})();
(new_link_36475.onload = ((function (seq__36226_36469,chunk__36229_36470,count__36230_36471,i__36231_36472,seq__36161,chunk__36163,count__36164,i__36165,new_link_36475,path_match_36474,node_36473,path,seq__36161__$1,temp__5735__auto__,map__36158,map__36158__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36473);
});})(seq__36226_36469,chunk__36229_36470,count__36230_36471,i__36231_36472,seq__36161,chunk__36163,count__36164,i__36165,new_link_36475,path_match_36474,node_36473,path,seq__36161__$1,temp__5735__auto__,map__36158,map__36158__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36474], 0));

goog.dom.insertSiblingAfter(new_link_36475,node_36473);


var G__36476 = seq__36226_36469;
var G__36477 = chunk__36229_36470;
var G__36478 = count__36230_36471;
var G__36479 = (i__36231_36472 + (1));
seq__36226_36469 = G__36476;
chunk__36229_36470 = G__36477;
count__36230_36471 = G__36478;
i__36231_36472 = G__36479;
continue;
} else {
var G__36480 = seq__36226_36469;
var G__36481 = chunk__36229_36470;
var G__36482 = count__36230_36471;
var G__36483 = (i__36231_36472 + (1));
seq__36226_36469 = G__36480;
chunk__36229_36470 = G__36481;
count__36230_36471 = G__36482;
i__36231_36472 = G__36483;
continue;
}
} else {
var temp__5735__auto___36484__$1 = cljs.core.seq(seq__36226_36469);
if(temp__5735__auto___36484__$1){
var seq__36226_36494__$1 = temp__5735__auto___36484__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36226_36494__$1)){
var c__4556__auto___36495 = cljs.core.chunk_first(seq__36226_36494__$1);
var G__36497 = cljs.core.chunk_rest(seq__36226_36494__$1);
var G__36498 = c__4556__auto___36495;
var G__36499 = cljs.core.count(c__4556__auto___36495);
var G__36500 = (0);
seq__36226_36469 = G__36497;
chunk__36229_36470 = G__36498;
count__36230_36471 = G__36499;
i__36231_36472 = G__36500;
continue;
} else {
var node_36501 = cljs.core.first(seq__36226_36494__$1);
var path_match_36502 = shadow.cljs.devtools.client.browser.match_paths(node_36501.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36502)){
var new_link_36503 = (function (){var G__36263 = node_36501.cloneNode(true);
G__36263.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36502),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36263;
})();
(new_link_36503.onload = ((function (seq__36226_36469,chunk__36229_36470,count__36230_36471,i__36231_36472,seq__36161,chunk__36163,count__36164,i__36165,new_link_36503,path_match_36502,node_36501,seq__36226_36494__$1,temp__5735__auto___36484__$1,path,seq__36161__$1,temp__5735__auto__,map__36158,map__36158__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36501);
});})(seq__36226_36469,chunk__36229_36470,count__36230_36471,i__36231_36472,seq__36161,chunk__36163,count__36164,i__36165,new_link_36503,path_match_36502,node_36501,seq__36226_36494__$1,temp__5735__auto___36484__$1,path,seq__36161__$1,temp__5735__auto__,map__36158,map__36158__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36502], 0));

goog.dom.insertSiblingAfter(new_link_36503,node_36501);


var G__36506 = cljs.core.next(seq__36226_36494__$1);
var G__36507 = null;
var G__36508 = (0);
var G__36509 = (0);
seq__36226_36469 = G__36506;
chunk__36229_36470 = G__36507;
count__36230_36471 = G__36508;
i__36231_36472 = G__36509;
continue;
} else {
var G__36512 = cljs.core.next(seq__36226_36494__$1);
var G__36513 = null;
var G__36514 = (0);
var G__36515 = (0);
seq__36226_36469 = G__36512;
chunk__36229_36470 = G__36513;
count__36230_36471 = G__36514;
i__36231_36472 = G__36515;
continue;
}
}
} else {
}
}
break;
}


var G__36519 = cljs.core.next(seq__36161__$1);
var G__36520 = null;
var G__36521 = (0);
var G__36522 = (0);
seq__36161 = G__36519;
chunk__36163 = G__36520;
count__36164 = G__36521;
i__36165 = G__36522;
continue;
} else {
var G__36526 = cljs.core.next(seq__36161__$1);
var G__36527 = null;
var G__36528 = (0);
var G__36529 = (0);
seq__36161 = G__36526;
chunk__36163 = G__36527;
count__36164 = G__36528;
i__36165 = G__36529;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36277){
var map__36278 = p__36277;
var map__36278__$1 = (((((!((map__36278 == null))))?(((((map__36278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36278):map__36278);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36278__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36290){
var map__36293 = p__36290;
var map__36293__$1 = (((((!((map__36293 == null))))?(((((map__36293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36293):map__36293);
var _ = map__36293__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36293__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36296,done,error){
var map__36299 = p__36296;
var map__36299__$1 = (((((!((map__36299 == null))))?(((((map__36299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36299):map__36299);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36299__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36303,done,error){
var map__36305 = p__36303;
var map__36305__$1 = (((((!((map__36305 == null))))?(((((map__36305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36305):map__36305);
var msg = map__36305__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36305__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36305__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36305__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36311){
var map__36314 = p__36311;
var map__36314__$1 = (((((!((map__36314 == null))))?(((((map__36314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36314):map__36314);
var src = map__36314__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36314__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36331 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36331) : done.call(null,G__36331));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36332){
var map__36333 = p__36332;
var map__36333__$1 = (((((!((map__36333 == null))))?(((((map__36333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36333):map__36333);
var msg__$1 = map__36333__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36333__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36336){var ex = e36336;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36337){
var map__36338 = p__36337;
var map__36338__$1 = (((((!((map__36338 == null))))?(((((map__36338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36338):map__36338);
var env = map__36338__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36338__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
