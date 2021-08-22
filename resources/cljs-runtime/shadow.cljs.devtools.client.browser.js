goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36390 = arguments.length;
var i__4737__auto___36391 = (0);
while(true){
if((i__4737__auto___36391 < len__4736__auto___36390)){
args__4742__auto__.push((arguments[i__4737__auto___36391]));

var G__36392 = (i__4737__auto___36391 + (1));
i__4737__auto___36391 = G__36392;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36140){
var G__36141 = cljs.core.first(seq36140);
var seq36140__$1 = cljs.core.next(seq36140);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36141,seq36140__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36151 = cljs.core.seq(sources);
var chunk__36152 = null;
var count__36153 = (0);
var i__36154 = (0);
while(true){
if((i__36154 < count__36153)){
var map__36162 = chunk__36152.cljs$core$IIndexed$_nth$arity$2(null,i__36154);
var map__36162__$1 = (((((!((map__36162 == null))))?(((((map__36162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36162):map__36162);
var src = map__36162__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36162__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36162__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36162__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36162__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36164){var e_36393 = e36164;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36393);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36393.message)].join('')));
}

var G__36394 = seq__36151;
var G__36395 = chunk__36152;
var G__36396 = count__36153;
var G__36397 = (i__36154 + (1));
seq__36151 = G__36394;
chunk__36152 = G__36395;
count__36153 = G__36396;
i__36154 = G__36397;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36151);
if(temp__5735__auto__){
var seq__36151__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36151__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36151__$1);
var G__36398 = cljs.core.chunk_rest(seq__36151__$1);
var G__36399 = c__4556__auto__;
var G__36400 = cljs.core.count(c__4556__auto__);
var G__36401 = (0);
seq__36151 = G__36398;
chunk__36152 = G__36399;
count__36153 = G__36400;
i__36154 = G__36401;
continue;
} else {
var map__36165 = cljs.core.first(seq__36151__$1);
var map__36165__$1 = (((((!((map__36165 == null))))?(((((map__36165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36165):map__36165);
var src = map__36165__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36165__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36165__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36165__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36165__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36167){var e_36402 = e36167;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36402);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36402.message)].join('')));
}

var G__36403 = cljs.core.next(seq__36151__$1);
var G__36404 = null;
var G__36405 = (0);
var G__36406 = (0);
seq__36151 = G__36403;
chunk__36152 = G__36404;
count__36153 = G__36405;
i__36154 = G__36406;
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
var seq__36168 = cljs.core.seq(js_requires);
var chunk__36169 = null;
var count__36170 = (0);
var i__36171 = (0);
while(true){
if((i__36171 < count__36170)){
var js_ns = chunk__36169.cljs$core$IIndexed$_nth$arity$2(null,i__36171);
var require_str_36407 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36407);


var G__36408 = seq__36168;
var G__36409 = chunk__36169;
var G__36410 = count__36170;
var G__36411 = (i__36171 + (1));
seq__36168 = G__36408;
chunk__36169 = G__36409;
count__36170 = G__36410;
i__36171 = G__36411;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36168);
if(temp__5735__auto__){
var seq__36168__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36168__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36168__$1);
var G__36412 = cljs.core.chunk_rest(seq__36168__$1);
var G__36413 = c__4556__auto__;
var G__36414 = cljs.core.count(c__4556__auto__);
var G__36415 = (0);
seq__36168 = G__36412;
chunk__36169 = G__36413;
count__36170 = G__36414;
i__36171 = G__36415;
continue;
} else {
var js_ns = cljs.core.first(seq__36168__$1);
var require_str_36416 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36416);


var G__36417 = cljs.core.next(seq__36168__$1);
var G__36418 = null;
var G__36419 = (0);
var G__36420 = (0);
seq__36168 = G__36417;
chunk__36169 = G__36418;
count__36170 = G__36419;
i__36171 = G__36420;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36176){
var map__36177 = p__36176;
var map__36177__$1 = (((((!((map__36177 == null))))?(((((map__36177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36177):map__36177);
var msg = map__36177__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36177__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36177__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36183(s__36184){
return (new cljs.core.LazySeq(null,(function (){
var s__36184__$1 = s__36184;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36184__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__36189 = cljs.core.first(xs__6292__auto__);
var map__36189__$1 = (((((!((map__36189 == null))))?(((((map__36189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36189):map__36189);
var src = map__36189__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36189__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36189__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__36184__$1,map__36189,map__36189__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36177,map__36177__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36183_$_iter__36185(s__36186){
return (new cljs.core.LazySeq(null,((function (s__36184__$1,map__36189,map__36189__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36177,map__36177__$1,msg,info,reload_info){
return (function (){
var s__36186__$1 = s__36186;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36186__$1);
if(temp__5735__auto____$1){
var s__36186__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36186__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__36186__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__36188 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__36187 = (0);
while(true){
if((i__36187 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__36187);
cljs.core.chunk_append(b__36188,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36421 = (i__36187 + (1));
i__36187 = G__36421;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36188),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36183_$_iter__36185(cljs.core.chunk_rest(s__36186__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36188),null);
}
} else {
var warning = cljs.core.first(s__36186__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36183_$_iter__36185(cljs.core.rest(s__36186__$2)));
}
} else {
return null;
}
break;
}
});})(s__36184__$1,map__36189,map__36189__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36177,map__36177__$1,msg,info,reload_info))
,null,null));
});})(s__36184__$1,map__36189,map__36189__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36177,map__36177__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36183(cljs.core.rest(s__36184__$1)));
} else {
var G__36422 = cljs.core.rest(s__36184__$1);
s__36184__$1 = G__36422;
continue;
}
} else {
var G__36423 = cljs.core.rest(s__36184__$1);
s__36184__$1 = G__36423;
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
var seq__36200_36424 = cljs.core.seq(warnings);
var chunk__36201_36425 = null;
var count__36202_36426 = (0);
var i__36203_36427 = (0);
while(true){
if((i__36203_36427 < count__36202_36426)){
var map__36216_36428 = chunk__36201_36425.cljs$core$IIndexed$_nth$arity$2(null,i__36203_36427);
var map__36216_36429__$1 = (((((!((map__36216_36428 == null))))?(((((map__36216_36428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36216_36428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36216_36428):map__36216_36428);
var w_36430 = map__36216_36429__$1;
var msg_36431__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36216_36429__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36216_36429__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36433 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36216_36429__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36434 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36216_36429__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36434)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36432),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36433),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36431__$1)].join(''));


var G__36435 = seq__36200_36424;
var G__36436 = chunk__36201_36425;
var G__36437 = count__36202_36426;
var G__36438 = (i__36203_36427 + (1));
seq__36200_36424 = G__36435;
chunk__36201_36425 = G__36436;
count__36202_36426 = G__36437;
i__36203_36427 = G__36438;
continue;
} else {
var temp__5735__auto___36439 = cljs.core.seq(seq__36200_36424);
if(temp__5735__auto___36439){
var seq__36200_36440__$1 = temp__5735__auto___36439;
if(cljs.core.chunked_seq_QMARK_(seq__36200_36440__$1)){
var c__4556__auto___36441 = cljs.core.chunk_first(seq__36200_36440__$1);
var G__36442 = cljs.core.chunk_rest(seq__36200_36440__$1);
var G__36443 = c__4556__auto___36441;
var G__36444 = cljs.core.count(c__4556__auto___36441);
var G__36445 = (0);
seq__36200_36424 = G__36442;
chunk__36201_36425 = G__36443;
count__36202_36426 = G__36444;
i__36203_36427 = G__36445;
continue;
} else {
var map__36223_36447 = cljs.core.first(seq__36200_36440__$1);
var map__36223_36448__$1 = (((((!((map__36223_36447 == null))))?(((((map__36223_36447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36223_36447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36223_36447):map__36223_36447);
var w_36449 = map__36223_36448__$1;
var msg_36450__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36223_36448__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36223_36448__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36223_36448__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36223_36448__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36453)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36451),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36452),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36450__$1)].join(''));


var G__36458 = cljs.core.next(seq__36200_36440__$1);
var G__36459 = null;
var G__36460 = (0);
var G__36461 = (0);
seq__36200_36424 = G__36458;
chunk__36201_36425 = G__36459;
count__36202_36426 = G__36460;
i__36203_36427 = G__36461;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36173_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36173_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36241){
var map__36242 = p__36241;
var map__36242__$1 = (((((!((map__36242 == null))))?(((((map__36242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36242):map__36242);
var msg = map__36242__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36242__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__36248 = cljs.core.seq(updates);
var chunk__36250 = null;
var count__36251 = (0);
var i__36252 = (0);
while(true){
if((i__36252 < count__36251)){
var path = chunk__36250.cljs$core$IIndexed$_nth$arity$2(null,i__36252);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36318_36462 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36321_36463 = null;
var count__36322_36464 = (0);
var i__36323_36465 = (0);
while(true){
if((i__36323_36465 < count__36322_36464)){
var node_36466 = chunk__36321_36463.cljs$core$IIndexed$_nth$arity$2(null,i__36323_36465);
var path_match_36467 = shadow.cljs.devtools.client.browser.match_paths(node_36466.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36467)){
var new_link_36468 = (function (){var G__36334 = node_36466.cloneNode(true);
G__36334.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36467),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36334;
})();
(new_link_36468.onload = ((function (seq__36318_36462,chunk__36321_36463,count__36322_36464,i__36323_36465,seq__36248,chunk__36250,count__36251,i__36252,new_link_36468,path_match_36467,node_36466,path,map__36242,map__36242__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36466);
});})(seq__36318_36462,chunk__36321_36463,count__36322_36464,i__36323_36465,seq__36248,chunk__36250,count__36251,i__36252,new_link_36468,path_match_36467,node_36466,path,map__36242,map__36242__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36467], 0));

goog.dom.insertSiblingAfter(new_link_36468,node_36466);


var G__36469 = seq__36318_36462;
var G__36470 = chunk__36321_36463;
var G__36471 = count__36322_36464;
var G__36472 = (i__36323_36465 + (1));
seq__36318_36462 = G__36469;
chunk__36321_36463 = G__36470;
count__36322_36464 = G__36471;
i__36323_36465 = G__36472;
continue;
} else {
var G__36473 = seq__36318_36462;
var G__36474 = chunk__36321_36463;
var G__36475 = count__36322_36464;
var G__36476 = (i__36323_36465 + (1));
seq__36318_36462 = G__36473;
chunk__36321_36463 = G__36474;
count__36322_36464 = G__36475;
i__36323_36465 = G__36476;
continue;
}
} else {
var temp__5735__auto___36477 = cljs.core.seq(seq__36318_36462);
if(temp__5735__auto___36477){
var seq__36318_36478__$1 = temp__5735__auto___36477;
if(cljs.core.chunked_seq_QMARK_(seq__36318_36478__$1)){
var c__4556__auto___36479 = cljs.core.chunk_first(seq__36318_36478__$1);
var G__36480 = cljs.core.chunk_rest(seq__36318_36478__$1);
var G__36481 = c__4556__auto___36479;
var G__36482 = cljs.core.count(c__4556__auto___36479);
var G__36483 = (0);
seq__36318_36462 = G__36480;
chunk__36321_36463 = G__36481;
count__36322_36464 = G__36482;
i__36323_36465 = G__36483;
continue;
} else {
var node_36484 = cljs.core.first(seq__36318_36478__$1);
var path_match_36485 = shadow.cljs.devtools.client.browser.match_paths(node_36484.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36485)){
var new_link_36486 = (function (){var G__36335 = node_36484.cloneNode(true);
G__36335.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36485),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36335;
})();
(new_link_36486.onload = ((function (seq__36318_36462,chunk__36321_36463,count__36322_36464,i__36323_36465,seq__36248,chunk__36250,count__36251,i__36252,new_link_36486,path_match_36485,node_36484,seq__36318_36478__$1,temp__5735__auto___36477,path,map__36242,map__36242__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36484);
});})(seq__36318_36462,chunk__36321_36463,count__36322_36464,i__36323_36465,seq__36248,chunk__36250,count__36251,i__36252,new_link_36486,path_match_36485,node_36484,seq__36318_36478__$1,temp__5735__auto___36477,path,map__36242,map__36242__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36485], 0));

goog.dom.insertSiblingAfter(new_link_36486,node_36484);


var G__36487 = cljs.core.next(seq__36318_36478__$1);
var G__36488 = null;
var G__36489 = (0);
var G__36490 = (0);
seq__36318_36462 = G__36487;
chunk__36321_36463 = G__36488;
count__36322_36464 = G__36489;
i__36323_36465 = G__36490;
continue;
} else {
var G__36491 = cljs.core.next(seq__36318_36478__$1);
var G__36492 = null;
var G__36493 = (0);
var G__36494 = (0);
seq__36318_36462 = G__36491;
chunk__36321_36463 = G__36492;
count__36322_36464 = G__36493;
i__36323_36465 = G__36494;
continue;
}
}
} else {
}
}
break;
}


var G__36495 = seq__36248;
var G__36496 = chunk__36250;
var G__36497 = count__36251;
var G__36498 = (i__36252 + (1));
seq__36248 = G__36495;
chunk__36250 = G__36496;
count__36251 = G__36497;
i__36252 = G__36498;
continue;
} else {
var G__36499 = seq__36248;
var G__36500 = chunk__36250;
var G__36501 = count__36251;
var G__36502 = (i__36252 + (1));
seq__36248 = G__36499;
chunk__36250 = G__36500;
count__36251 = G__36501;
i__36252 = G__36502;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36248);
if(temp__5735__auto__){
var seq__36248__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36248__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36248__$1);
var G__36503 = cljs.core.chunk_rest(seq__36248__$1);
var G__36504 = c__4556__auto__;
var G__36505 = cljs.core.count(c__4556__auto__);
var G__36506 = (0);
seq__36248 = G__36503;
chunk__36250 = G__36504;
count__36251 = G__36505;
i__36252 = G__36506;
continue;
} else {
var path = cljs.core.first(seq__36248__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36336_36507 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36339_36508 = null;
var count__36340_36509 = (0);
var i__36341_36510 = (0);
while(true){
if((i__36341_36510 < count__36340_36509)){
var node_36511 = chunk__36339_36508.cljs$core$IIndexed$_nth$arity$2(null,i__36341_36510);
var path_match_36512 = shadow.cljs.devtools.client.browser.match_paths(node_36511.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36512)){
var new_link_36513 = (function (){var G__36351 = node_36511.cloneNode(true);
G__36351.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36512),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36351;
})();
(new_link_36513.onload = ((function (seq__36336_36507,chunk__36339_36508,count__36340_36509,i__36341_36510,seq__36248,chunk__36250,count__36251,i__36252,new_link_36513,path_match_36512,node_36511,path,seq__36248__$1,temp__5735__auto__,map__36242,map__36242__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36511);
});})(seq__36336_36507,chunk__36339_36508,count__36340_36509,i__36341_36510,seq__36248,chunk__36250,count__36251,i__36252,new_link_36513,path_match_36512,node_36511,path,seq__36248__$1,temp__5735__auto__,map__36242,map__36242__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36512], 0));

goog.dom.insertSiblingAfter(new_link_36513,node_36511);


var G__36514 = seq__36336_36507;
var G__36515 = chunk__36339_36508;
var G__36516 = count__36340_36509;
var G__36517 = (i__36341_36510 + (1));
seq__36336_36507 = G__36514;
chunk__36339_36508 = G__36515;
count__36340_36509 = G__36516;
i__36341_36510 = G__36517;
continue;
} else {
var G__36518 = seq__36336_36507;
var G__36519 = chunk__36339_36508;
var G__36520 = count__36340_36509;
var G__36521 = (i__36341_36510 + (1));
seq__36336_36507 = G__36518;
chunk__36339_36508 = G__36519;
count__36340_36509 = G__36520;
i__36341_36510 = G__36521;
continue;
}
} else {
var temp__5735__auto___36522__$1 = cljs.core.seq(seq__36336_36507);
if(temp__5735__auto___36522__$1){
var seq__36336_36523__$1 = temp__5735__auto___36522__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36336_36523__$1)){
var c__4556__auto___36524 = cljs.core.chunk_first(seq__36336_36523__$1);
var G__36525 = cljs.core.chunk_rest(seq__36336_36523__$1);
var G__36526 = c__4556__auto___36524;
var G__36527 = cljs.core.count(c__4556__auto___36524);
var G__36528 = (0);
seq__36336_36507 = G__36525;
chunk__36339_36508 = G__36526;
count__36340_36509 = G__36527;
i__36341_36510 = G__36528;
continue;
} else {
var node_36529 = cljs.core.first(seq__36336_36523__$1);
var path_match_36530 = shadow.cljs.devtools.client.browser.match_paths(node_36529.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36530)){
var new_link_36531 = (function (){var G__36352 = node_36529.cloneNode(true);
G__36352.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36530),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36352;
})();
(new_link_36531.onload = ((function (seq__36336_36507,chunk__36339_36508,count__36340_36509,i__36341_36510,seq__36248,chunk__36250,count__36251,i__36252,new_link_36531,path_match_36530,node_36529,seq__36336_36523__$1,temp__5735__auto___36522__$1,path,seq__36248__$1,temp__5735__auto__,map__36242,map__36242__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36529);
});})(seq__36336_36507,chunk__36339_36508,count__36340_36509,i__36341_36510,seq__36248,chunk__36250,count__36251,i__36252,new_link_36531,path_match_36530,node_36529,seq__36336_36523__$1,temp__5735__auto___36522__$1,path,seq__36248__$1,temp__5735__auto__,map__36242,map__36242__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36530], 0));

goog.dom.insertSiblingAfter(new_link_36531,node_36529);


var G__36532 = cljs.core.next(seq__36336_36523__$1);
var G__36533 = null;
var G__36534 = (0);
var G__36535 = (0);
seq__36336_36507 = G__36532;
chunk__36339_36508 = G__36533;
count__36340_36509 = G__36534;
i__36341_36510 = G__36535;
continue;
} else {
var G__36536 = cljs.core.next(seq__36336_36523__$1);
var G__36537 = null;
var G__36538 = (0);
var G__36539 = (0);
seq__36336_36507 = G__36536;
chunk__36339_36508 = G__36537;
count__36340_36509 = G__36538;
i__36341_36510 = G__36539;
continue;
}
}
} else {
}
}
break;
}


var G__36540 = cljs.core.next(seq__36248__$1);
var G__36541 = null;
var G__36542 = (0);
var G__36543 = (0);
seq__36248 = G__36540;
chunk__36250 = G__36541;
count__36251 = G__36542;
i__36252 = G__36543;
continue;
} else {
var G__36544 = cljs.core.next(seq__36248__$1);
var G__36545 = null;
var G__36546 = (0);
var G__36547 = (0);
seq__36248 = G__36544;
chunk__36250 = G__36545;
count__36251 = G__36546;
i__36252 = G__36547;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36353){
var map__36354 = p__36353;
var map__36354__$1 = (((((!((map__36354 == null))))?(((((map__36354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36354):map__36354);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36354__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36361){
var map__36362 = p__36361;
var map__36362__$1 = (((((!((map__36362 == null))))?(((((map__36362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36362):map__36362);
var _ = map__36362__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36362__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36364,done,error){
var map__36365 = p__36364;
var map__36365__$1 = (((((!((map__36365 == null))))?(((((map__36365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36365):map__36365);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36365__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36367,done,error){
var map__36368 = p__36367;
var map__36368__$1 = (((((!((map__36368 == null))))?(((((map__36368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36368):map__36368);
var msg = map__36368__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36368__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36368__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36368__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36370){
var map__36371 = p__36370;
var map__36371__$1 = (((((!((map__36371 == null))))?(((((map__36371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36371):map__36371);
var src = map__36371__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36371__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36373 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36373) : done.call(null,G__36373));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36374){
var map__36375 = p__36374;
var map__36375__$1 = (((((!((map__36375 == null))))?(((((map__36375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36375):map__36375);
var msg__$1 = map__36375__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36375__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36377){var ex = e36377;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36378){
var map__36379 = p__36378;
var map__36379__$1 = (((((!((map__36379 == null))))?(((((map__36379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36379):map__36379);
var env = map__36379__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36379__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__36381){
var map__36382 = p__36381;
var map__36382__$1 = (((((!((map__36382 == null))))?(((((map__36382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36382):map__36382);
var msg = map__36382__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36382__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36384){
var map__36385 = p__36384;
var map__36385__$1 = (((((!((map__36385 == null))))?(((((map__36385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36385):map__36385);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36385__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36385__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__36387){
var map__36388 = p__36387;
var map__36388__$1 = (((((!((map__36388 == null))))?(((((map__36388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36388):map__36388);
var svc = map__36388__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36388__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
