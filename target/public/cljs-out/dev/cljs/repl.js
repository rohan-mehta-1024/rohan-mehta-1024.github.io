// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__24248){
var map__24249 = p__24248;
var map__24249__$1 = (((((!((map__24249 == null))))?(((((map__24249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24249):map__24249);
var m = map__24249__$1;
var n = cljs.core.get.call(null,map__24249__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__24249__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24251_24283 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24252_24284 = null;
var count__24253_24285 = (0);
var i__24254_24286 = (0);
while(true){
if((i__24254_24286 < count__24253_24285)){
var f_24287 = cljs.core._nth.call(null,chunk__24252_24284,i__24254_24286);
cljs.core.println.call(null,"  ",f_24287);


var G__24288 = seq__24251_24283;
var G__24289 = chunk__24252_24284;
var G__24290 = count__24253_24285;
var G__24291 = (i__24254_24286 + (1));
seq__24251_24283 = G__24288;
chunk__24252_24284 = G__24289;
count__24253_24285 = G__24290;
i__24254_24286 = G__24291;
continue;
} else {
var temp__5753__auto___24292 = cljs.core.seq.call(null,seq__24251_24283);
if(temp__5753__auto___24292){
var seq__24251_24293__$1 = temp__5753__auto___24292;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24251_24293__$1)){
var c__4556__auto___24294 = cljs.core.chunk_first.call(null,seq__24251_24293__$1);
var G__24295 = cljs.core.chunk_rest.call(null,seq__24251_24293__$1);
var G__24296 = c__4556__auto___24294;
var G__24297 = cljs.core.count.call(null,c__4556__auto___24294);
var G__24298 = (0);
seq__24251_24283 = G__24295;
chunk__24252_24284 = G__24296;
count__24253_24285 = G__24297;
i__24254_24286 = G__24298;
continue;
} else {
var f_24299 = cljs.core.first.call(null,seq__24251_24293__$1);
cljs.core.println.call(null,"  ",f_24299);


var G__24300 = cljs.core.next.call(null,seq__24251_24293__$1);
var G__24301 = null;
var G__24302 = (0);
var G__24303 = (0);
seq__24251_24283 = G__24300;
chunk__24252_24284 = G__24301;
count__24253_24285 = G__24302;
i__24254_24286 = G__24303;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24304 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24304);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24304)))?cljs.core.second.call(null,arglists_24304):arglists_24304));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24255_24305 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24256_24306 = null;
var count__24257_24307 = (0);
var i__24258_24308 = (0);
while(true){
if((i__24258_24308 < count__24257_24307)){
var vec__24269_24309 = cljs.core._nth.call(null,chunk__24256_24306,i__24258_24308);
var name_24310 = cljs.core.nth.call(null,vec__24269_24309,(0),null);
var map__24272_24311 = cljs.core.nth.call(null,vec__24269_24309,(1),null);
var map__24272_24312__$1 = (((((!((map__24272_24311 == null))))?(((((map__24272_24311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24272_24311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24272_24311):map__24272_24311);
var doc_24313 = cljs.core.get.call(null,map__24272_24312__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24314 = cljs.core.get.call(null,map__24272_24312__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_24310);

cljs.core.println.call(null," ",arglists_24314);

if(cljs.core.truth_(doc_24313)){
cljs.core.println.call(null," ",doc_24313);
} else {
}


var G__24315 = seq__24255_24305;
var G__24316 = chunk__24256_24306;
var G__24317 = count__24257_24307;
var G__24318 = (i__24258_24308 + (1));
seq__24255_24305 = G__24315;
chunk__24256_24306 = G__24316;
count__24257_24307 = G__24317;
i__24258_24308 = G__24318;
continue;
} else {
var temp__5753__auto___24319 = cljs.core.seq.call(null,seq__24255_24305);
if(temp__5753__auto___24319){
var seq__24255_24320__$1 = temp__5753__auto___24319;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24255_24320__$1)){
var c__4556__auto___24321 = cljs.core.chunk_first.call(null,seq__24255_24320__$1);
var G__24322 = cljs.core.chunk_rest.call(null,seq__24255_24320__$1);
var G__24323 = c__4556__auto___24321;
var G__24324 = cljs.core.count.call(null,c__4556__auto___24321);
var G__24325 = (0);
seq__24255_24305 = G__24322;
chunk__24256_24306 = G__24323;
count__24257_24307 = G__24324;
i__24258_24308 = G__24325;
continue;
} else {
var vec__24274_24326 = cljs.core.first.call(null,seq__24255_24320__$1);
var name_24327 = cljs.core.nth.call(null,vec__24274_24326,(0),null);
var map__24277_24328 = cljs.core.nth.call(null,vec__24274_24326,(1),null);
var map__24277_24329__$1 = (((((!((map__24277_24328 == null))))?(((((map__24277_24328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24277_24328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24277_24328):map__24277_24328);
var doc_24330 = cljs.core.get.call(null,map__24277_24329__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24331 = cljs.core.get.call(null,map__24277_24329__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_24327);

cljs.core.println.call(null," ",arglists_24331);

if(cljs.core.truth_(doc_24330)){
cljs.core.println.call(null," ",doc_24330);
} else {
}


var G__24332 = cljs.core.next.call(null,seq__24255_24320__$1);
var G__24333 = null;
var G__24334 = (0);
var G__24335 = (0);
seq__24255_24305 = G__24332;
chunk__24256_24306 = G__24333;
count__24257_24307 = G__24334;
i__24258_24308 = G__24335;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.call(null,"Spec");

var seq__24279 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__24280 = null;
var count__24281 = (0);
var i__24282 = (0);
while(true){
if((i__24282 < count__24281)){
var role = cljs.core._nth.call(null,chunk__24280,i__24282);
var temp__5753__auto___24336__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___24336__$1)){
var spec_24337 = temp__5753__auto___24336__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_24337));
} else {
}


var G__24338 = seq__24279;
var G__24339 = chunk__24280;
var G__24340 = count__24281;
var G__24341 = (i__24282 + (1));
seq__24279 = G__24338;
chunk__24280 = G__24339;
count__24281 = G__24340;
i__24282 = G__24341;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq.call(null,seq__24279);
if(temp__5753__auto____$1){
var seq__24279__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24279__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__24279__$1);
var G__24342 = cljs.core.chunk_rest.call(null,seq__24279__$1);
var G__24343 = c__4556__auto__;
var G__24344 = cljs.core.count.call(null,c__4556__auto__);
var G__24345 = (0);
seq__24279 = G__24342;
chunk__24280 = G__24343;
count__24281 = G__24344;
i__24282 = G__24345;
continue;
} else {
var role = cljs.core.first.call(null,seq__24279__$1);
var temp__5753__auto___24346__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___24346__$2)){
var spec_24347 = temp__5753__auto___24346__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_24347));
} else {
}


var G__24348 = cljs.core.next.call(null,seq__24279__$1);
var G__24349 = null;
var G__24350 = (0);
var G__24351 = (0);
seq__24279 = G__24348;
chunk__24280 = G__24349;
count__24281 = G__24350;
i__24282 = G__24351;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__24352 = cljs.core.conj.call(null,via,t);
var G__24353 = cljs.core.ex_cause.call(null,t);
via = G__24352;
t = G__24353;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__24356 = datafied_throwable;
var map__24356__$1 = (((((!((map__24356 == null))))?(((((map__24356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24356):map__24356);
var via = cljs.core.get.call(null,map__24356__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__24356__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__24356__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__24357 = cljs.core.last.call(null,via);
var map__24357__$1 = (((((!((map__24357 == null))))?(((((map__24357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24357):map__24357);
var type = cljs.core.get.call(null,map__24357__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__24357__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__24357__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__24358 = data;
var map__24358__$1 = (((((!((map__24358 == null))))?(((((map__24358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24358):map__24358);
var problems = cljs.core.get.call(null,map__24358__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__24358__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__24358__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__24359 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__24359__$1 = (((((!((map__24359 == null))))?(((((map__24359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24359):map__24359);
var top_data = map__24359__$1;
var source = cljs.core.get.call(null,map__24359__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__24364 = phase;
var G__24364__$1 = (((G__24364 instanceof cljs.core.Keyword))?G__24364.fqn:null);
switch (G__24364__$1) {
case "read-source":
var map__24365 = data;
var map__24365__$1 = (((((!((map__24365 == null))))?(((((map__24365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24365):map__24365);
var line = cljs.core.get.call(null,map__24365__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__24365__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__24367 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__24367__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__24367,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__24367);
var G__24367__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__24367__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__24367__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__24367__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__24367__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__24368 = top_data;
var G__24368__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__24368,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__24368);
var G__24368__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__24368__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__24368__$1);
var G__24368__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__24368__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__24368__$2);
var G__24368__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__24368__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__24368__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__24368__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__24368__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__24369 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__24369,(0),null);
var method = cljs.core.nth.call(null,vec__24369,(1),null);
var file = cljs.core.nth.call(null,vec__24369,(2),null);
var line = cljs.core.nth.call(null,vec__24369,(3),null);
var G__24372 = top_data;
var G__24372__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__24372,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__24372);
var G__24372__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__24372__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__24372__$1);
var G__24372__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__24372__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__24372__$2);
var G__24372__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__24372__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__24372__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__24372__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__24372__$4;
}

break;
case "execution":
var vec__24373 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__24373,(0),null);
var method = cljs.core.nth.call(null,vec__24373,(1),null);
var file = cljs.core.nth.call(null,vec__24373,(2),null);
var line = cljs.core.nth.call(null,vec__24373,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__24355_SHARP_){
var or__4126__auto__ = (p1__24355_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__24355_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__24376 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__24376__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__24376,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__24376);
var G__24376__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__24376__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__24376__$1);
var G__24376__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__24376__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__24376__$2);
var G__24376__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__24376__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__24376__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__24376__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__24376__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24364__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__24380){
var map__24381 = p__24380;
var map__24381__$1 = (((((!((map__24381 == null))))?(((((map__24381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24381):map__24381);
var triage_data = map__24381__$1;
var phase = cljs.core.get.call(null,map__24381__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__24381__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__24381__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__24381__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__24381__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__24381__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__24381__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__24381__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__24383 = phase;
var G__24383__$1 = (((G__24383 instanceof cljs.core.Keyword))?G__24383.fqn:null);
switch (G__24383__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24384_24393 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24385_24394 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24386_24395 = true;
var _STAR_print_fn_STAR__temp_val__24387_24396 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24386_24395);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24387_24396);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__24378_SHARP_){
return cljs.core.dissoc.call(null,p1__24378_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24385_24394);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24384_24393);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24388_24397 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24389_24398 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24390_24399 = true;
var _STAR_print_fn_STAR__temp_val__24391_24400 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24390_24399);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24391_24400);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__24379_SHARP_){
return cljs.core.dissoc.call(null,p1__24379_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24389_24398);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24388_24397);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24383__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
