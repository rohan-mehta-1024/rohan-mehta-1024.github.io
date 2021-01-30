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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36086){
var G__36087 = cljs.core.first(seq36086);
var seq36086__$1 = cljs.core.next(seq36086);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36087,seq36086__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36089 = cljs.core.seq(sources);
var chunk__36090 = null;
var count__36091 = (0);
var i__36092 = (0);
while(true){
if((i__36092 < count__36091)){
var map__36100 = chunk__36090.cljs$core$IIndexed$_nth$arity$2(null,i__36092);
var map__36100__$1 = (((((!((map__36100 == null))))?(((((map__36100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36100):map__36100);
var src = map__36100__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36100__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36100__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36100__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36100__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36102){var e_36358 = e36102;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36358);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36358.message)].join('')));
}

var G__36359 = seq__36089;
var G__36360 = chunk__36090;
var G__36361 = count__36091;
var G__36362 = (i__36092 + (1));
seq__36089 = G__36359;
chunk__36090 = G__36360;
count__36091 = G__36361;
i__36092 = G__36362;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36089);
if(temp__5735__auto__){
var seq__36089__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36089__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36089__$1);
var G__36363 = cljs.core.chunk_rest(seq__36089__$1);
var G__36364 = c__4556__auto__;
var G__36365 = cljs.core.count(c__4556__auto__);
var G__36366 = (0);
seq__36089 = G__36363;
chunk__36090 = G__36364;
count__36091 = G__36365;
i__36092 = G__36366;
continue;
} else {
var map__36103 = cljs.core.first(seq__36089__$1);
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
}catch (e36105){var e_36367 = e36105;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36367);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36367.message)].join('')));
}

var G__36368 = cljs.core.next(seq__36089__$1);
var G__36369 = null;
var G__36370 = (0);
var G__36371 = (0);
seq__36089 = G__36368;
chunk__36090 = G__36369;
count__36091 = G__36370;
i__36092 = G__36371;
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
var seq__36119 = cljs.core.seq(js_requires);
var chunk__36120 = null;
var count__36121 = (0);
var i__36122 = (0);
while(true){
if((i__36122 < count__36121)){
var js_ns = chunk__36120.cljs$core$IIndexed$_nth$arity$2(null,i__36122);
var require_str_36372 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36372);


var G__36373 = seq__36119;
var G__36374 = chunk__36120;
var G__36375 = count__36121;
var G__36376 = (i__36122 + (1));
seq__36119 = G__36373;
chunk__36120 = G__36374;
count__36121 = G__36375;
i__36122 = G__36376;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36119);
if(temp__5735__auto__){
var seq__36119__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36119__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36119__$1);
var G__36377 = cljs.core.chunk_rest(seq__36119__$1);
var G__36378 = c__4556__auto__;
var G__36379 = cljs.core.count(c__4556__auto__);
var G__36380 = (0);
seq__36119 = G__36377;
chunk__36120 = G__36378;
count__36121 = G__36379;
i__36122 = G__36380;
continue;
} else {
var js_ns = cljs.core.first(seq__36119__$1);
var require_str_36381 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36381);


var G__36383 = cljs.core.next(seq__36119__$1);
var G__36384 = null;
var G__36385 = (0);
var G__36386 = (0);
seq__36119 = G__36383;
chunk__36120 = G__36384;
count__36121 = G__36385;
i__36122 = G__36386;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36127){
var map__36128 = p__36127;
var map__36128__$1 = (((((!((map__36128 == null))))?(((((map__36128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36128):map__36128);
var msg = map__36128__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36128__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36128__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36130(s__36131){
return (new cljs.core.LazySeq(null,(function (){
var s__36131__$1 = s__36131;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36131__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__36136 = cljs.core.first(xs__6292__auto__);
var map__36136__$1 = (((((!((map__36136 == null))))?(((((map__36136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36136):map__36136);
var src = map__36136__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36136__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36136__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__36131__$1,map__36136,map__36136__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36128,map__36128__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36130_$_iter__36132(s__36133){
return (new cljs.core.LazySeq(null,((function (s__36131__$1,map__36136,map__36136__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36128,map__36128__$1,msg,info,reload_info){
return (function (){
var s__36133__$1 = s__36133;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36133__$1);
if(temp__5735__auto____$1){
var s__36133__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36133__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__36133__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__36135 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__36134 = (0);
while(true){
if((i__36134 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__36134);
cljs.core.chunk_append(b__36135,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36387 = (i__36134 + (1));
i__36134 = G__36387;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36135),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36130_$_iter__36132(cljs.core.chunk_rest(s__36133__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36135),null);
}
} else {
var warning = cljs.core.first(s__36133__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36130_$_iter__36132(cljs.core.rest(s__36133__$2)));
}
} else {
return null;
}
break;
}
});})(s__36131__$1,map__36136,map__36136__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36128,map__36128__$1,msg,info,reload_info))
,null,null));
});})(s__36131__$1,map__36136,map__36136__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36128,map__36128__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36130(cljs.core.rest(s__36131__$1)));
} else {
var G__36393 = cljs.core.rest(s__36131__$1);
s__36131__$1 = G__36393;
continue;
}
} else {
var G__36394 = cljs.core.rest(s__36131__$1);
s__36131__$1 = G__36394;
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
var seq__36139_36395 = cljs.core.seq(warnings);
var chunk__36140_36396 = null;
var count__36141_36397 = (0);
var i__36142_36398 = (0);
while(true){
if((i__36142_36398 < count__36141_36397)){
var map__36147_36399 = chunk__36140_36396.cljs$core$IIndexed$_nth$arity$2(null,i__36142_36398);
var map__36147_36400__$1 = (((((!((map__36147_36399 == null))))?(((((map__36147_36399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36147_36399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36147_36399):map__36147_36399);
var w_36401 = map__36147_36400__$1;
var msg_36402__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36147_36400__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36403 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36147_36400__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36404 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36147_36400__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36147_36400__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36405)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36403),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36404),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36402__$1)].join(''));


var G__36406 = seq__36139_36395;
var G__36407 = chunk__36140_36396;
var G__36408 = count__36141_36397;
var G__36409 = (i__36142_36398 + (1));
seq__36139_36395 = G__36406;
chunk__36140_36396 = G__36407;
count__36141_36397 = G__36408;
i__36142_36398 = G__36409;
continue;
} else {
var temp__5735__auto___36410 = cljs.core.seq(seq__36139_36395);
if(temp__5735__auto___36410){
var seq__36139_36411__$1 = temp__5735__auto___36410;
if(cljs.core.chunked_seq_QMARK_(seq__36139_36411__$1)){
var c__4556__auto___36412 = cljs.core.chunk_first(seq__36139_36411__$1);
var G__36413 = cljs.core.chunk_rest(seq__36139_36411__$1);
var G__36414 = c__4556__auto___36412;
var G__36415 = cljs.core.count(c__4556__auto___36412);
var G__36416 = (0);
seq__36139_36395 = G__36413;
chunk__36140_36396 = G__36414;
count__36141_36397 = G__36415;
i__36142_36398 = G__36416;
continue;
} else {
var map__36149_36417 = cljs.core.first(seq__36139_36411__$1);
var map__36149_36418__$1 = (((((!((map__36149_36417 == null))))?(((((map__36149_36417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36149_36417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36149_36417):map__36149_36417);
var w_36419 = map__36149_36418__$1;
var msg_36420__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36149_36418__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36149_36418__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36149_36418__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36149_36418__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36423)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36421),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36422),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36420__$1)].join(''));


var G__36424 = cljs.core.next(seq__36139_36411__$1);
var G__36425 = null;
var G__36426 = (0);
var G__36427 = (0);
seq__36139_36395 = G__36424;
chunk__36140_36396 = G__36425;
count__36141_36397 = G__36426;
i__36142_36398 = G__36427;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36126_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36126_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36151){
var map__36152 = p__36151;
var map__36152__$1 = (((((!((map__36152 == null))))?(((((map__36152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36152):map__36152);
var msg = map__36152__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36152__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__36154 = cljs.core.seq(updates);
var chunk__36156 = null;
var count__36157 = (0);
var i__36158 = (0);
while(true){
if((i__36158 < count__36157)){
var path = chunk__36156.cljs$core$IIndexed$_nth$arity$2(null,i__36158);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36194_36432 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36197_36433 = null;
var count__36198_36434 = (0);
var i__36199_36435 = (0);
while(true){
if((i__36199_36435 < count__36198_36434)){
var node_36436 = chunk__36197_36433.cljs$core$IIndexed$_nth$arity$2(null,i__36199_36435);
var path_match_36437 = shadow.cljs.devtools.client.browser.match_paths(node_36436.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36437)){
var new_link_36438 = (function (){var G__36214 = node_36436.cloneNode(true);
G__36214.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36437),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36214;
})();
(new_link_36438.onload = ((function (seq__36194_36432,chunk__36197_36433,count__36198_36434,i__36199_36435,seq__36154,chunk__36156,count__36157,i__36158,new_link_36438,path_match_36437,node_36436,path,map__36152,map__36152__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36436);
});})(seq__36194_36432,chunk__36197_36433,count__36198_36434,i__36199_36435,seq__36154,chunk__36156,count__36157,i__36158,new_link_36438,path_match_36437,node_36436,path,map__36152,map__36152__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36437], 0));

goog.dom.insertSiblingAfter(new_link_36438,node_36436);


var G__36439 = seq__36194_36432;
var G__36440 = chunk__36197_36433;
var G__36441 = count__36198_36434;
var G__36442 = (i__36199_36435 + (1));
seq__36194_36432 = G__36439;
chunk__36197_36433 = G__36440;
count__36198_36434 = G__36441;
i__36199_36435 = G__36442;
continue;
} else {
var G__36443 = seq__36194_36432;
var G__36444 = chunk__36197_36433;
var G__36445 = count__36198_36434;
var G__36446 = (i__36199_36435 + (1));
seq__36194_36432 = G__36443;
chunk__36197_36433 = G__36444;
count__36198_36434 = G__36445;
i__36199_36435 = G__36446;
continue;
}
} else {
var temp__5735__auto___36447 = cljs.core.seq(seq__36194_36432);
if(temp__5735__auto___36447){
var seq__36194_36448__$1 = temp__5735__auto___36447;
if(cljs.core.chunked_seq_QMARK_(seq__36194_36448__$1)){
var c__4556__auto___36449 = cljs.core.chunk_first(seq__36194_36448__$1);
var G__36450 = cljs.core.chunk_rest(seq__36194_36448__$1);
var G__36451 = c__4556__auto___36449;
var G__36452 = cljs.core.count(c__4556__auto___36449);
var G__36453 = (0);
seq__36194_36432 = G__36450;
chunk__36197_36433 = G__36451;
count__36198_36434 = G__36452;
i__36199_36435 = G__36453;
continue;
} else {
var node_36454 = cljs.core.first(seq__36194_36448__$1);
var path_match_36455 = shadow.cljs.devtools.client.browser.match_paths(node_36454.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36455)){
var new_link_36456 = (function (){var G__36215 = node_36454.cloneNode(true);
G__36215.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36455),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36215;
})();
(new_link_36456.onload = ((function (seq__36194_36432,chunk__36197_36433,count__36198_36434,i__36199_36435,seq__36154,chunk__36156,count__36157,i__36158,new_link_36456,path_match_36455,node_36454,seq__36194_36448__$1,temp__5735__auto___36447,path,map__36152,map__36152__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36454);
});})(seq__36194_36432,chunk__36197_36433,count__36198_36434,i__36199_36435,seq__36154,chunk__36156,count__36157,i__36158,new_link_36456,path_match_36455,node_36454,seq__36194_36448__$1,temp__5735__auto___36447,path,map__36152,map__36152__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36455], 0));

goog.dom.insertSiblingAfter(new_link_36456,node_36454);


var G__36457 = cljs.core.next(seq__36194_36448__$1);
var G__36458 = null;
var G__36459 = (0);
var G__36460 = (0);
seq__36194_36432 = G__36457;
chunk__36197_36433 = G__36458;
count__36198_36434 = G__36459;
i__36199_36435 = G__36460;
continue;
} else {
var G__36461 = cljs.core.next(seq__36194_36448__$1);
var G__36462 = null;
var G__36463 = (0);
var G__36464 = (0);
seq__36194_36432 = G__36461;
chunk__36197_36433 = G__36462;
count__36198_36434 = G__36463;
i__36199_36435 = G__36464;
continue;
}
}
} else {
}
}
break;
}


var G__36465 = seq__36154;
var G__36466 = chunk__36156;
var G__36467 = count__36157;
var G__36468 = (i__36158 + (1));
seq__36154 = G__36465;
chunk__36156 = G__36466;
count__36157 = G__36467;
i__36158 = G__36468;
continue;
} else {
var G__36469 = seq__36154;
var G__36470 = chunk__36156;
var G__36471 = count__36157;
var G__36472 = (i__36158 + (1));
seq__36154 = G__36469;
chunk__36156 = G__36470;
count__36157 = G__36471;
i__36158 = G__36472;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36154);
if(temp__5735__auto__){
var seq__36154__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36154__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36154__$1);
var G__36473 = cljs.core.chunk_rest(seq__36154__$1);
var G__36474 = c__4556__auto__;
var G__36475 = cljs.core.count(c__4556__auto__);
var G__36476 = (0);
seq__36154 = G__36473;
chunk__36156 = G__36474;
count__36157 = G__36475;
i__36158 = G__36476;
continue;
} else {
var path = cljs.core.first(seq__36154__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36245_36477 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36250_36478 = null;
var count__36251_36479 = (0);
var i__36252_36480 = (0);
while(true){
if((i__36252_36480 < count__36251_36479)){
var node_36481 = chunk__36250_36478.cljs$core$IIndexed$_nth$arity$2(null,i__36252_36480);
var path_match_36482 = shadow.cljs.devtools.client.browser.match_paths(node_36481.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36482)){
var new_link_36483 = (function (){var G__36268 = node_36481.cloneNode(true);
G__36268.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36482),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36268;
})();
(new_link_36483.onload = ((function (seq__36245_36477,chunk__36250_36478,count__36251_36479,i__36252_36480,seq__36154,chunk__36156,count__36157,i__36158,new_link_36483,path_match_36482,node_36481,path,seq__36154__$1,temp__5735__auto__,map__36152,map__36152__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36481);
});})(seq__36245_36477,chunk__36250_36478,count__36251_36479,i__36252_36480,seq__36154,chunk__36156,count__36157,i__36158,new_link_36483,path_match_36482,node_36481,path,seq__36154__$1,temp__5735__auto__,map__36152,map__36152__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36482], 0));

goog.dom.insertSiblingAfter(new_link_36483,node_36481);


var G__36484 = seq__36245_36477;
var G__36485 = chunk__36250_36478;
var G__36486 = count__36251_36479;
var G__36487 = (i__36252_36480 + (1));
seq__36245_36477 = G__36484;
chunk__36250_36478 = G__36485;
count__36251_36479 = G__36486;
i__36252_36480 = G__36487;
continue;
} else {
var G__36488 = seq__36245_36477;
var G__36489 = chunk__36250_36478;
var G__36490 = count__36251_36479;
var G__36491 = (i__36252_36480 + (1));
seq__36245_36477 = G__36488;
chunk__36250_36478 = G__36489;
count__36251_36479 = G__36490;
i__36252_36480 = G__36491;
continue;
}
} else {
var temp__5735__auto___36492__$1 = cljs.core.seq(seq__36245_36477);
if(temp__5735__auto___36492__$1){
var seq__36245_36497__$1 = temp__5735__auto___36492__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36245_36497__$1)){
var c__4556__auto___36498 = cljs.core.chunk_first(seq__36245_36497__$1);
var G__36499 = cljs.core.chunk_rest(seq__36245_36497__$1);
var G__36500 = c__4556__auto___36498;
var G__36501 = cljs.core.count(c__4556__auto___36498);
var G__36502 = (0);
seq__36245_36477 = G__36499;
chunk__36250_36478 = G__36500;
count__36251_36479 = G__36501;
i__36252_36480 = G__36502;
continue;
} else {
var node_36503 = cljs.core.first(seq__36245_36497__$1);
var path_match_36504 = shadow.cljs.devtools.client.browser.match_paths(node_36503.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36504)){
var new_link_36505 = (function (){var G__36284 = node_36503.cloneNode(true);
G__36284.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36504),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36284;
})();
(new_link_36505.onload = ((function (seq__36245_36477,chunk__36250_36478,count__36251_36479,i__36252_36480,seq__36154,chunk__36156,count__36157,i__36158,new_link_36505,path_match_36504,node_36503,seq__36245_36497__$1,temp__5735__auto___36492__$1,path,seq__36154__$1,temp__5735__auto__,map__36152,map__36152__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36503);
});})(seq__36245_36477,chunk__36250_36478,count__36251_36479,i__36252_36480,seq__36154,chunk__36156,count__36157,i__36158,new_link_36505,path_match_36504,node_36503,seq__36245_36497__$1,temp__5735__auto___36492__$1,path,seq__36154__$1,temp__5735__auto__,map__36152,map__36152__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36504], 0));

goog.dom.insertSiblingAfter(new_link_36505,node_36503);


var G__36506 = cljs.core.next(seq__36245_36497__$1);
var G__36507 = null;
var G__36508 = (0);
var G__36509 = (0);
seq__36245_36477 = G__36506;
chunk__36250_36478 = G__36507;
count__36251_36479 = G__36508;
i__36252_36480 = G__36509;
continue;
} else {
var G__36510 = cljs.core.next(seq__36245_36497__$1);
var G__36511 = null;
var G__36512 = (0);
var G__36513 = (0);
seq__36245_36477 = G__36510;
chunk__36250_36478 = G__36511;
count__36251_36479 = G__36512;
i__36252_36480 = G__36513;
continue;
}
}
} else {
}
}
break;
}


var G__36514 = cljs.core.next(seq__36154__$1);
var G__36515 = null;
var G__36516 = (0);
var G__36517 = (0);
seq__36154 = G__36514;
chunk__36156 = G__36515;
count__36157 = G__36516;
i__36158 = G__36517;
continue;
} else {
var G__36518 = cljs.core.next(seq__36154__$1);
var G__36519 = null;
var G__36520 = (0);
var G__36521 = (0);
seq__36154 = G__36518;
chunk__36156 = G__36519;
count__36157 = G__36520;
i__36158 = G__36521;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36285){
var map__36286 = p__36285;
var map__36286__$1 = (((((!((map__36286 == null))))?(((((map__36286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36286):map__36286);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36286__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36303){
var map__36304 = p__36303;
var map__36304__$1 = (((((!((map__36304 == null))))?(((((map__36304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36304):map__36304);
var _ = map__36304__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36304__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36321,done,error){
var map__36322 = p__36321;
var map__36322__$1 = (((((!((map__36322 == null))))?(((((map__36322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36322):map__36322);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36322__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36324,done,error){
var map__36325 = p__36324;
var map__36325__$1 = (((((!((map__36325 == null))))?(((((map__36325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36325):map__36325);
var msg = map__36325__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36325__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36325__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36325__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36327){
var map__36328 = p__36327;
var map__36328__$1 = (((((!((map__36328 == null))))?(((((map__36328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36328):map__36328);
var src = map__36328__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36328__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36336 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36336) : done.call(null,G__36336));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36337){
var map__36338 = p__36337;
var map__36338__$1 = (((((!((map__36338 == null))))?(((((map__36338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36338):map__36338);
var msg__$1 = map__36338__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36338__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36340){var ex = e36340;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36341){
var map__36342 = p__36341;
var map__36342__$1 = (((((!((map__36342 == null))))?(((((map__36342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36342):map__36342);
var env = map__36342__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36342__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
