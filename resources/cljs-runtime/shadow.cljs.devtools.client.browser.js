goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36265 = arguments.length;
var i__4737__auto___36266 = (0);
while(true){
if((i__4737__auto___36266 < len__4736__auto___36265)){
args__4742__auto__.push((arguments[i__4737__auto___36266]));

var G__36267 = (i__4737__auto___36266 + (1));
i__4737__auto___36266 = G__36267;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36072){
var G__36073 = cljs.core.first(seq36072);
var seq36072__$1 = cljs.core.next(seq36072);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36073,seq36072__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36074 = cljs.core.seq(sources);
var chunk__36075 = null;
var count__36076 = (0);
var i__36077 = (0);
while(true){
if((i__36077 < count__36076)){
var map__36084 = chunk__36075.cljs$core$IIndexed$_nth$arity$2(null,i__36077);
var map__36084__$1 = (((((!((map__36084 == null))))?(((((map__36084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36084):map__36084);
var src = map__36084__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36084__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36084__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36084__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36084__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36091){var e_36268 = e36091;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36268);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36268.message)].join('')));
}

var G__36270 = seq__36074;
var G__36271 = chunk__36075;
var G__36272 = count__36076;
var G__36273 = (i__36077 + (1));
seq__36074 = G__36270;
chunk__36075 = G__36271;
count__36076 = G__36272;
i__36077 = G__36273;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36074);
if(temp__5735__auto__){
var seq__36074__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36074__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36074__$1);
var G__36276 = cljs.core.chunk_rest(seq__36074__$1);
var G__36277 = c__4556__auto__;
var G__36278 = cljs.core.count(c__4556__auto__);
var G__36279 = (0);
seq__36074 = G__36276;
chunk__36075 = G__36277;
count__36076 = G__36278;
i__36077 = G__36279;
continue;
} else {
var map__36095 = cljs.core.first(seq__36074__$1);
var map__36095__$1 = (((((!((map__36095 == null))))?(((((map__36095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36095):map__36095);
var src = map__36095__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36095__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36095__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36095__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36095__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36098){var e_36284 = e36098;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36284);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36284.message)].join('')));
}

var G__36285 = cljs.core.next(seq__36074__$1);
var G__36286 = null;
var G__36287 = (0);
var G__36288 = (0);
seq__36074 = G__36285;
chunk__36075 = G__36286;
count__36076 = G__36287;
i__36077 = G__36288;
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
var seq__36103 = cljs.core.seq(js_requires);
var chunk__36104 = null;
var count__36105 = (0);
var i__36106 = (0);
while(true){
if((i__36106 < count__36105)){
var js_ns = chunk__36104.cljs$core$IIndexed$_nth$arity$2(null,i__36106);
var require_str_36292 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36292);


var G__36293 = seq__36103;
var G__36294 = chunk__36104;
var G__36295 = count__36105;
var G__36296 = (i__36106 + (1));
seq__36103 = G__36293;
chunk__36104 = G__36294;
count__36105 = G__36295;
i__36106 = G__36296;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36103);
if(temp__5735__auto__){
var seq__36103__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36103__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36103__$1);
var G__36297 = cljs.core.chunk_rest(seq__36103__$1);
var G__36298 = c__4556__auto__;
var G__36299 = cljs.core.count(c__4556__auto__);
var G__36300 = (0);
seq__36103 = G__36297;
chunk__36104 = G__36298;
count__36105 = G__36299;
i__36106 = G__36300;
continue;
} else {
var js_ns = cljs.core.first(seq__36103__$1);
var require_str_36301 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36301);


var G__36302 = cljs.core.next(seq__36103__$1);
var G__36303 = null;
var G__36304 = (0);
var G__36305 = (0);
seq__36103 = G__36302;
chunk__36104 = G__36303;
count__36105 = G__36304;
i__36106 = G__36305;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36113){
var map__36114 = p__36113;
var map__36114__$1 = (((((!((map__36114 == null))))?(((((map__36114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36114):map__36114);
var msg = map__36114__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36114__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36114__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36116(s__36117){
return (new cljs.core.LazySeq(null,(function (){
var s__36117__$1 = s__36117;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36117__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__36125 = cljs.core.first(xs__6292__auto__);
var map__36125__$1 = (((((!((map__36125 == null))))?(((((map__36125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36125):map__36125);
var src = map__36125__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36125__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36125__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__36117__$1,map__36125,map__36125__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36114,map__36114__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36116_$_iter__36118(s__36119){
return (new cljs.core.LazySeq(null,((function (s__36117__$1,map__36125,map__36125__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36114,map__36114__$1,msg,info,reload_info){
return (function (){
var s__36119__$1 = s__36119;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36119__$1);
if(temp__5735__auto____$1){
var s__36119__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36119__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__36119__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__36121 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__36120 = (0);
while(true){
if((i__36120 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__36120);
cljs.core.chunk_append(b__36121,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36328 = (i__36120 + (1));
i__36120 = G__36328;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36121),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36116_$_iter__36118(cljs.core.chunk_rest(s__36119__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36121),null);
}
} else {
var warning = cljs.core.first(s__36119__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36116_$_iter__36118(cljs.core.rest(s__36119__$2)));
}
} else {
return null;
}
break;
}
});})(s__36117__$1,map__36125,map__36125__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36114,map__36114__$1,msg,info,reload_info))
,null,null));
});})(s__36117__$1,map__36125,map__36125__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36114,map__36114__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36116(cljs.core.rest(s__36117__$1)));
} else {
var G__36330 = cljs.core.rest(s__36117__$1);
s__36117__$1 = G__36330;
continue;
}
} else {
var G__36331 = cljs.core.rest(s__36117__$1);
s__36117__$1 = G__36331;
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
var seq__36135_36332 = cljs.core.seq(warnings);
var chunk__36136_36333 = null;
var count__36137_36334 = (0);
var i__36138_36335 = (0);
while(true){
if((i__36138_36335 < count__36137_36334)){
var map__36143_36336 = chunk__36136_36333.cljs$core$IIndexed$_nth$arity$2(null,i__36138_36335);
var map__36143_36337__$1 = (((((!((map__36143_36336 == null))))?(((((map__36143_36336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36143_36336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36143_36336):map__36143_36336);
var w_36338 = map__36143_36337__$1;
var msg_36339__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36143_36337__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36143_36337__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36143_36337__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36143_36337__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36342)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36340),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36341),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36339__$1)].join(''));


var G__36351 = seq__36135_36332;
var G__36352 = chunk__36136_36333;
var G__36353 = count__36137_36334;
var G__36354 = (i__36138_36335 + (1));
seq__36135_36332 = G__36351;
chunk__36136_36333 = G__36352;
count__36137_36334 = G__36353;
i__36138_36335 = G__36354;
continue;
} else {
var temp__5735__auto___36356 = cljs.core.seq(seq__36135_36332);
if(temp__5735__auto___36356){
var seq__36135_36357__$1 = temp__5735__auto___36356;
if(cljs.core.chunked_seq_QMARK_(seq__36135_36357__$1)){
var c__4556__auto___36358 = cljs.core.chunk_first(seq__36135_36357__$1);
var G__36359 = cljs.core.chunk_rest(seq__36135_36357__$1);
var G__36360 = c__4556__auto___36358;
var G__36361 = cljs.core.count(c__4556__auto___36358);
var G__36362 = (0);
seq__36135_36332 = G__36359;
chunk__36136_36333 = G__36360;
count__36137_36334 = G__36361;
i__36138_36335 = G__36362;
continue;
} else {
var map__36146_36363 = cljs.core.first(seq__36135_36357__$1);
var map__36146_36364__$1 = (((((!((map__36146_36363 == null))))?(((((map__36146_36363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36146_36363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36146_36363):map__36146_36363);
var w_36365 = map__36146_36364__$1;
var msg_36366__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36146_36364__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36146_36364__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36146_36364__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36146_36364__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36369)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36367),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36368),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36366__$1)].join(''));


var G__36370 = cljs.core.next(seq__36135_36357__$1);
var G__36371 = null;
var G__36372 = (0);
var G__36373 = (0);
seq__36135_36332 = G__36370;
chunk__36136_36333 = G__36371;
count__36137_36334 = G__36372;
i__36138_36335 = G__36373;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36112_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36112_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
var seq__36195_36394 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36198_36395 = null;
var count__36199_36396 = (0);
var i__36200_36397 = (0);
while(true){
if((i__36200_36397 < count__36199_36396)){
var node_36398 = chunk__36198_36395.cljs$core$IIndexed$_nth$arity$2(null,i__36200_36397);
var path_match_36399 = shadow.cljs.devtools.client.browser.match_paths(node_36398.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36399)){
var new_link_36400 = (function (){var G__36205 = node_36398.cloneNode(true);
G__36205.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36399),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36205;
})();
(new_link_36400.onload = ((function (seq__36195_36394,chunk__36198_36395,count__36199_36396,i__36200_36397,seq__36154,chunk__36156,count__36157,i__36158,new_link_36400,path_match_36399,node_36398,path,map__36152,map__36152__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36398);
});})(seq__36195_36394,chunk__36198_36395,count__36199_36396,i__36200_36397,seq__36154,chunk__36156,count__36157,i__36158,new_link_36400,path_match_36399,node_36398,path,map__36152,map__36152__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36399], 0));

goog.dom.insertSiblingAfter(new_link_36400,node_36398);


var G__36401 = seq__36195_36394;
var G__36402 = chunk__36198_36395;
var G__36403 = count__36199_36396;
var G__36404 = (i__36200_36397 + (1));
seq__36195_36394 = G__36401;
chunk__36198_36395 = G__36402;
count__36199_36396 = G__36403;
i__36200_36397 = G__36404;
continue;
} else {
var G__36405 = seq__36195_36394;
var G__36406 = chunk__36198_36395;
var G__36407 = count__36199_36396;
var G__36408 = (i__36200_36397 + (1));
seq__36195_36394 = G__36405;
chunk__36198_36395 = G__36406;
count__36199_36396 = G__36407;
i__36200_36397 = G__36408;
continue;
}
} else {
var temp__5735__auto___36409 = cljs.core.seq(seq__36195_36394);
if(temp__5735__auto___36409){
var seq__36195_36410__$1 = temp__5735__auto___36409;
if(cljs.core.chunked_seq_QMARK_(seq__36195_36410__$1)){
var c__4556__auto___36411 = cljs.core.chunk_first(seq__36195_36410__$1);
var G__36412 = cljs.core.chunk_rest(seq__36195_36410__$1);
var G__36413 = c__4556__auto___36411;
var G__36414 = cljs.core.count(c__4556__auto___36411);
var G__36415 = (0);
seq__36195_36394 = G__36412;
chunk__36198_36395 = G__36413;
count__36199_36396 = G__36414;
i__36200_36397 = G__36415;
continue;
} else {
var node_36416 = cljs.core.first(seq__36195_36410__$1);
var path_match_36417 = shadow.cljs.devtools.client.browser.match_paths(node_36416.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36417)){
var new_link_36418 = (function (){var G__36206 = node_36416.cloneNode(true);
G__36206.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36417),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36206;
})();
(new_link_36418.onload = ((function (seq__36195_36394,chunk__36198_36395,count__36199_36396,i__36200_36397,seq__36154,chunk__36156,count__36157,i__36158,new_link_36418,path_match_36417,node_36416,seq__36195_36410__$1,temp__5735__auto___36409,path,map__36152,map__36152__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36416);
});})(seq__36195_36394,chunk__36198_36395,count__36199_36396,i__36200_36397,seq__36154,chunk__36156,count__36157,i__36158,new_link_36418,path_match_36417,node_36416,seq__36195_36410__$1,temp__5735__auto___36409,path,map__36152,map__36152__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36417], 0));

goog.dom.insertSiblingAfter(new_link_36418,node_36416);


var G__36419 = cljs.core.next(seq__36195_36410__$1);
var G__36420 = null;
var G__36421 = (0);
var G__36422 = (0);
seq__36195_36394 = G__36419;
chunk__36198_36395 = G__36420;
count__36199_36396 = G__36421;
i__36200_36397 = G__36422;
continue;
} else {
var G__36423 = cljs.core.next(seq__36195_36410__$1);
var G__36424 = null;
var G__36425 = (0);
var G__36426 = (0);
seq__36195_36394 = G__36423;
chunk__36198_36395 = G__36424;
count__36199_36396 = G__36425;
i__36200_36397 = G__36426;
continue;
}
}
} else {
}
}
break;
}


var G__36431 = seq__36154;
var G__36432 = chunk__36156;
var G__36433 = count__36157;
var G__36434 = (i__36158 + (1));
seq__36154 = G__36431;
chunk__36156 = G__36432;
count__36157 = G__36433;
i__36158 = G__36434;
continue;
} else {
var G__36436 = seq__36154;
var G__36437 = chunk__36156;
var G__36438 = count__36157;
var G__36439 = (i__36158 + (1));
seq__36154 = G__36436;
chunk__36156 = G__36437;
count__36157 = G__36438;
i__36158 = G__36439;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36154);
if(temp__5735__auto__){
var seq__36154__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36154__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36154__$1);
var G__36442 = cljs.core.chunk_rest(seq__36154__$1);
var G__36443 = c__4556__auto__;
var G__36444 = cljs.core.count(c__4556__auto__);
var G__36445 = (0);
seq__36154 = G__36442;
chunk__36156 = G__36443;
count__36157 = G__36444;
i__36158 = G__36445;
continue;
} else {
var path = cljs.core.first(seq__36154__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36207_36447 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36210_36448 = null;
var count__36211_36449 = (0);
var i__36212_36450 = (0);
while(true){
if((i__36212_36450 < count__36211_36449)){
var node_36451 = chunk__36210_36448.cljs$core$IIndexed$_nth$arity$2(null,i__36212_36450);
var path_match_36453 = shadow.cljs.devtools.client.browser.match_paths(node_36451.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36453)){
var new_link_36455 = (function (){var G__36217 = node_36451.cloneNode(true);
G__36217.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36453),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36217;
})();
(new_link_36455.onload = ((function (seq__36207_36447,chunk__36210_36448,count__36211_36449,i__36212_36450,seq__36154,chunk__36156,count__36157,i__36158,new_link_36455,path_match_36453,node_36451,path,seq__36154__$1,temp__5735__auto__,map__36152,map__36152__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36451);
});})(seq__36207_36447,chunk__36210_36448,count__36211_36449,i__36212_36450,seq__36154,chunk__36156,count__36157,i__36158,new_link_36455,path_match_36453,node_36451,path,seq__36154__$1,temp__5735__auto__,map__36152,map__36152__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36453], 0));

goog.dom.insertSiblingAfter(new_link_36455,node_36451);


var G__36458 = seq__36207_36447;
var G__36459 = chunk__36210_36448;
var G__36460 = count__36211_36449;
var G__36461 = (i__36212_36450 + (1));
seq__36207_36447 = G__36458;
chunk__36210_36448 = G__36459;
count__36211_36449 = G__36460;
i__36212_36450 = G__36461;
continue;
} else {
var G__36462 = seq__36207_36447;
var G__36463 = chunk__36210_36448;
var G__36464 = count__36211_36449;
var G__36465 = (i__36212_36450 + (1));
seq__36207_36447 = G__36462;
chunk__36210_36448 = G__36463;
count__36211_36449 = G__36464;
i__36212_36450 = G__36465;
continue;
}
} else {
var temp__5735__auto___36466__$1 = cljs.core.seq(seq__36207_36447);
if(temp__5735__auto___36466__$1){
var seq__36207_36468__$1 = temp__5735__auto___36466__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36207_36468__$1)){
var c__4556__auto___36469 = cljs.core.chunk_first(seq__36207_36468__$1);
var G__36470 = cljs.core.chunk_rest(seq__36207_36468__$1);
var G__36471 = c__4556__auto___36469;
var G__36472 = cljs.core.count(c__4556__auto___36469);
var G__36473 = (0);
seq__36207_36447 = G__36470;
chunk__36210_36448 = G__36471;
count__36211_36449 = G__36472;
i__36212_36450 = G__36473;
continue;
} else {
var node_36474 = cljs.core.first(seq__36207_36468__$1);
var path_match_36475 = shadow.cljs.devtools.client.browser.match_paths(node_36474.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36475)){
var new_link_36476 = (function (){var G__36218 = node_36474.cloneNode(true);
G__36218.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36475),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36218;
})();
(new_link_36476.onload = ((function (seq__36207_36447,chunk__36210_36448,count__36211_36449,i__36212_36450,seq__36154,chunk__36156,count__36157,i__36158,new_link_36476,path_match_36475,node_36474,seq__36207_36468__$1,temp__5735__auto___36466__$1,path,seq__36154__$1,temp__5735__auto__,map__36152,map__36152__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36474);
});})(seq__36207_36447,chunk__36210_36448,count__36211_36449,i__36212_36450,seq__36154,chunk__36156,count__36157,i__36158,new_link_36476,path_match_36475,node_36474,seq__36207_36468__$1,temp__5735__auto___36466__$1,path,seq__36154__$1,temp__5735__auto__,map__36152,map__36152__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36475], 0));

goog.dom.insertSiblingAfter(new_link_36476,node_36474);


var G__36489 = cljs.core.next(seq__36207_36468__$1);
var G__36490 = null;
var G__36491 = (0);
var G__36492 = (0);
seq__36207_36447 = G__36489;
chunk__36210_36448 = G__36490;
count__36211_36449 = G__36491;
i__36212_36450 = G__36492;
continue;
} else {
var G__36493 = cljs.core.next(seq__36207_36468__$1);
var G__36494 = null;
var G__36495 = (0);
var G__36496 = (0);
seq__36207_36447 = G__36493;
chunk__36210_36448 = G__36494;
count__36211_36449 = G__36495;
i__36212_36450 = G__36496;
continue;
}
}
} else {
}
}
break;
}


var G__36497 = cljs.core.next(seq__36154__$1);
var G__36498 = null;
var G__36499 = (0);
var G__36500 = (0);
seq__36154 = G__36497;
chunk__36156 = G__36498;
count__36157 = G__36499;
i__36158 = G__36500;
continue;
} else {
var G__36501 = cljs.core.next(seq__36154__$1);
var G__36502 = null;
var G__36503 = (0);
var G__36504 = (0);
seq__36154 = G__36501;
chunk__36156 = G__36502;
count__36157 = G__36503;
i__36158 = G__36504;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36219){
var map__36220 = p__36219;
var map__36220__$1 = (((((!((map__36220 == null))))?(((((map__36220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36220):map__36220);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36220__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36224){
var map__36225 = p__36224;
var map__36225__$1 = (((((!((map__36225 == null))))?(((((map__36225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36225):map__36225);
var _ = map__36225__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36225__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36232,done,error){
var map__36233 = p__36232;
var map__36233__$1 = (((((!((map__36233 == null))))?(((((map__36233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36233):map__36233);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36233__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36235,done,error){
var map__36236 = p__36235;
var map__36236__$1 = (((((!((map__36236 == null))))?(((((map__36236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36236):map__36236);
var msg = map__36236__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36236__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36236__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36236__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36238){
var map__36239 = p__36238;
var map__36239__$1 = (((((!((map__36239 == null))))?(((((map__36239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36239):map__36239);
var src = map__36239__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36239__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36246 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36246) : done.call(null,G__36246));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36247){
var map__36248 = p__36247;
var map__36248__$1 = (((((!((map__36248 == null))))?(((((map__36248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36248):map__36248);
var msg__$1 = map__36248__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36248__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36250){var ex = e36250;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36251){
var map__36252 = p__36251;
var map__36252__$1 = (((((!((map__36252 == null))))?(((((map__36252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36252):map__36252);
var env = map__36252__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36252__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__36254){
var map__36255 = p__36254;
var map__36255__$1 = (((((!((map__36255 == null))))?(((((map__36255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36255):map__36255);
var msg = map__36255__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36255__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36257){
var map__36258 = p__36257;
var map__36258__$1 = (((((!((map__36258 == null))))?(((((map__36258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36258):map__36258);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36258__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36258__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__36260){
var map__36261 = p__36260;
var map__36261__$1 = (((((!((map__36261 == null))))?(((((map__36261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36261):map__36261);
var svc = map__36261__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36261__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
