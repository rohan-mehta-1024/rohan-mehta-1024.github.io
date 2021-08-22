goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45248){
var map__45249 = p__45248;
var map__45249__$1 = (((((!((map__45249 == null))))?(((((map__45249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45249):map__45249);
var m = map__45249__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45249__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45249__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45251_45352 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45252_45353 = null;
var count__45253_45354 = (0);
var i__45254_45355 = (0);
while(true){
if((i__45254_45355 < count__45253_45354)){
var f_45356 = chunk__45252_45353.cljs$core$IIndexed$_nth$arity$2(null,i__45254_45355);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45356], 0));


var G__45357 = seq__45251_45352;
var G__45358 = chunk__45252_45353;
var G__45359 = count__45253_45354;
var G__45360 = (i__45254_45355 + (1));
seq__45251_45352 = G__45357;
chunk__45252_45353 = G__45358;
count__45253_45354 = G__45359;
i__45254_45355 = G__45360;
continue;
} else {
var temp__5735__auto___45361 = cljs.core.seq(seq__45251_45352);
if(temp__5735__auto___45361){
var seq__45251_45362__$1 = temp__5735__auto___45361;
if(cljs.core.chunked_seq_QMARK_(seq__45251_45362__$1)){
var c__4556__auto___45363 = cljs.core.chunk_first(seq__45251_45362__$1);
var G__45364 = cljs.core.chunk_rest(seq__45251_45362__$1);
var G__45365 = c__4556__auto___45363;
var G__45366 = cljs.core.count(c__4556__auto___45363);
var G__45367 = (0);
seq__45251_45352 = G__45364;
chunk__45252_45353 = G__45365;
count__45253_45354 = G__45366;
i__45254_45355 = G__45367;
continue;
} else {
var f_45368 = cljs.core.first(seq__45251_45362__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45368], 0));


var G__45369 = cljs.core.next(seq__45251_45362__$1);
var G__45370 = null;
var G__45371 = (0);
var G__45372 = (0);
seq__45251_45352 = G__45369;
chunk__45252_45353 = G__45370;
count__45253_45354 = G__45371;
i__45254_45355 = G__45372;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45373 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45373], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45373)))?cljs.core.second(arglists_45373):arglists_45373)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45255_45374 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45256_45375 = null;
var count__45257_45376 = (0);
var i__45258_45377 = (0);
while(true){
if((i__45258_45377 < count__45257_45376)){
var vec__45269_45378 = chunk__45256_45375.cljs$core$IIndexed$_nth$arity$2(null,i__45258_45377);
var name_45379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45269_45378,(0),null);
var map__45272_45380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45269_45378,(1),null);
var map__45272_45381__$1 = (((((!((map__45272_45380 == null))))?(((((map__45272_45380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45272_45380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45272_45380):map__45272_45380);
var doc_45382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45272_45381__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45272_45381__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45379], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45383], 0));

if(cljs.core.truth_(doc_45382)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45382], 0));
} else {
}


var G__45384 = seq__45255_45374;
var G__45385 = chunk__45256_45375;
var G__45386 = count__45257_45376;
var G__45387 = (i__45258_45377 + (1));
seq__45255_45374 = G__45384;
chunk__45256_45375 = G__45385;
count__45257_45376 = G__45386;
i__45258_45377 = G__45387;
continue;
} else {
var temp__5735__auto___45388 = cljs.core.seq(seq__45255_45374);
if(temp__5735__auto___45388){
var seq__45255_45389__$1 = temp__5735__auto___45388;
if(cljs.core.chunked_seq_QMARK_(seq__45255_45389__$1)){
var c__4556__auto___45390 = cljs.core.chunk_first(seq__45255_45389__$1);
var G__45391 = cljs.core.chunk_rest(seq__45255_45389__$1);
var G__45392 = c__4556__auto___45390;
var G__45393 = cljs.core.count(c__4556__auto___45390);
var G__45394 = (0);
seq__45255_45374 = G__45391;
chunk__45256_45375 = G__45392;
count__45257_45376 = G__45393;
i__45258_45377 = G__45394;
continue;
} else {
var vec__45274_45395 = cljs.core.first(seq__45255_45389__$1);
var name_45396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45274_45395,(0),null);
var map__45277_45397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45274_45395,(1),null);
var map__45277_45398__$1 = (((((!((map__45277_45397 == null))))?(((((map__45277_45397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45277_45397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45277_45397):map__45277_45397);
var doc_45399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45277_45398__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45277_45398__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45396], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45400], 0));

if(cljs.core.truth_(doc_45399)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45399], 0));
} else {
}


var G__45401 = cljs.core.next(seq__45255_45389__$1);
var G__45402 = null;
var G__45403 = (0);
var G__45404 = (0);
seq__45255_45374 = G__45401;
chunk__45256_45375 = G__45402;
count__45257_45376 = G__45403;
i__45258_45377 = G__45404;
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
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__45279 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45280 = null;
var count__45281 = (0);
var i__45282 = (0);
while(true){
if((i__45282 < count__45281)){
var role = chunk__45280.cljs$core$IIndexed$_nth$arity$2(null,i__45282);
var temp__5735__auto___45405__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45405__$1)){
var spec_45406 = temp__5735__auto___45405__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45406)], 0));
} else {
}


var G__45407 = seq__45279;
var G__45408 = chunk__45280;
var G__45409 = count__45281;
var G__45410 = (i__45282 + (1));
seq__45279 = G__45407;
chunk__45280 = G__45408;
count__45281 = G__45409;
i__45282 = G__45410;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45279);
if(temp__5735__auto____$1){
var seq__45279__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45279__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45279__$1);
var G__45411 = cljs.core.chunk_rest(seq__45279__$1);
var G__45412 = c__4556__auto__;
var G__45413 = cljs.core.count(c__4556__auto__);
var G__45414 = (0);
seq__45279 = G__45411;
chunk__45280 = G__45412;
count__45281 = G__45413;
i__45282 = G__45414;
continue;
} else {
var role = cljs.core.first(seq__45279__$1);
var temp__5735__auto___45415__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45415__$2)){
var spec_45416 = temp__5735__auto___45415__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45416)], 0));
} else {
}


var G__45417 = cljs.core.next(seq__45279__$1);
var G__45418 = null;
var G__45419 = (0);
var G__45420 = (0);
seq__45279 = G__45417;
chunk__45280 = G__45418;
count__45281 = G__45419;
i__45282 = G__45420;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__45421 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45422 = cljs.core.ex_cause(t);
via = G__45421;
t = G__45422;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
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
var map__45285 = datafied_throwable;
var map__45285__$1 = (((((!((map__45285 == null))))?(((((map__45285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45285):map__45285);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45285__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45285__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45285__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45286 = cljs.core.last(via);
var map__45286__$1 = (((((!((map__45286 == null))))?(((((map__45286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45286):map__45286);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45286__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45286__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45286__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45287 = data;
var map__45287__$1 = (((((!((map__45287 == null))))?(((((map__45287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45287):map__45287);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45287__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45287__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45287__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45288 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45288__$1 = (((((!((map__45288 == null))))?(((((map__45288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45288):map__45288);
var top_data = map__45288__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45288__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45293 = phase;
var G__45293__$1 = (((G__45293 instanceof cljs.core.Keyword))?G__45293.fqn:null);
switch (G__45293__$1) {
case "read-source":
var map__45294 = data;
var map__45294__$1 = (((((!((map__45294 == null))))?(((((map__45294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45294):map__45294);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45294__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45294__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45296 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45296__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45296,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45296);
var G__45296__$2 = (cljs.core.truth_((function (){var fexpr__45297 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45297.cljs$core$IFn$_invoke$arity$1 ? fexpr__45297.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45297.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45296__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45296__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45296__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45296__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45298 = top_data;
var G__45298__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45298,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45298);
var G__45298__$2 = (cljs.core.truth_((function (){var fexpr__45299 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45299.cljs$core$IFn$_invoke$arity$1 ? fexpr__45299.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45299.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45298__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45298__$1);
var G__45298__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45298__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45298__$2);
var G__45298__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45298__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45298__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45298__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45298__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45300 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45300,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45300,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45300,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45300,(3),null);
var G__45303 = top_data;
var G__45303__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45303,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45303);
var G__45303__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45303__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45303__$1);
var G__45303__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45303__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45303__$2);
var G__45303__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45303__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45303__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45303__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45303__$4;
}

break;
case "execution":
var vec__45304 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45304,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45304,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45304,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45304,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45284_SHARP_){
var or__4126__auto__ = (p1__45284_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__45308 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45308.cljs$core$IFn$_invoke$arity$1 ? fexpr__45308.cljs$core$IFn$_invoke$arity$1(p1__45284_SHARP_) : fexpr__45308.call(null,p1__45284_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__45309 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45309__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45309,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45309);
var G__45309__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45309__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45309__$1);
var G__45309__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45309__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45309__$2);
var G__45309__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45309__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45309__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45309__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45309__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45293__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45312){
var map__45313 = p__45312;
var map__45313__$1 = (((((!((map__45313 == null))))?(((((map__45313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45313):map__45313);
var triage_data = map__45313__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45313__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45313__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45313__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45313__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45313__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45313__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45313__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45313__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__45315 = phase;
var G__45315__$1 = (((G__45315 instanceof cljs.core.Keyword))?G__45315.fqn:null);
switch (G__45315__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45316 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45317 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45318 = loc;
var G__45319 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45320_45425 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45321_45426 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45322_45427 = true;
var _STAR_print_fn_STAR__temp_val__45323_45428 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45322_45427);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45323_45428);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45310_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45310_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45321_45426);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45320_45425);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45316,G__45317,G__45318,G__45319) : format.call(null,G__45316,G__45317,G__45318,G__45319));

break;
case "macroexpansion":
var G__45324 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45325 = cause_type;
var G__45326 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45327 = loc;
var G__45328 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45324,G__45325,G__45326,G__45327,G__45328) : format.call(null,G__45324,G__45325,G__45326,G__45327,G__45328));

break;
case "compile-syntax-check":
var G__45329 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45330 = cause_type;
var G__45331 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45332 = loc;
var G__45333 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45329,G__45330,G__45331,G__45332,G__45333) : format.call(null,G__45329,G__45330,G__45331,G__45332,G__45333));

break;
case "compilation":
var G__45334 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45335 = cause_type;
var G__45336 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45337 = loc;
var G__45338 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45334,G__45335,G__45336,G__45337,G__45338) : format.call(null,G__45334,G__45335,G__45336,G__45337,G__45338));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45339 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45340 = symbol;
var G__45341 = loc;
var G__45342 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45343_45429 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45344_45430 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45345_45431 = true;
var _STAR_print_fn_STAR__temp_val__45346_45432 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45345_45431);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45346_45432);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45311_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45311_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45344_45430);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45343_45429);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45339,G__45340,G__45341,G__45342) : format.call(null,G__45339,G__45340,G__45341,G__45342));
} else {
var G__45347 = "Execution error%s at %s(%s).\n%s\n";
var G__45348 = cause_type;
var G__45349 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45350 = loc;
var G__45351 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45347,G__45348,G__45349,G__45350,G__45351) : format.call(null,G__45347,G__45348,G__45349,G__45350,G__45351));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45315__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
