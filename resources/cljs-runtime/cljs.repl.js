goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31293){
var map__31294 = p__31293;
var map__31294__$1 = (((((!((map__31294 == null))))?(((((map__31294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31294):map__31294);
var m = map__31294__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31294__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31294__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__31296_31397 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31297_31398 = null;
var count__31298_31399 = (0);
var i__31299_31400 = (0);
while(true){
if((i__31299_31400 < count__31298_31399)){
var f_31401 = chunk__31297_31398.cljs$core$IIndexed$_nth$arity$2(null,i__31299_31400);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31401], 0));


var G__31402 = seq__31296_31397;
var G__31403 = chunk__31297_31398;
var G__31404 = count__31298_31399;
var G__31405 = (i__31299_31400 + (1));
seq__31296_31397 = G__31402;
chunk__31297_31398 = G__31403;
count__31298_31399 = G__31404;
i__31299_31400 = G__31405;
continue;
} else {
var temp__5735__auto___31406 = cljs.core.seq(seq__31296_31397);
if(temp__5735__auto___31406){
var seq__31296_31407__$1 = temp__5735__auto___31406;
if(cljs.core.chunked_seq_QMARK_(seq__31296_31407__$1)){
var c__4556__auto___31408 = cljs.core.chunk_first(seq__31296_31407__$1);
var G__31409 = cljs.core.chunk_rest(seq__31296_31407__$1);
var G__31410 = c__4556__auto___31408;
var G__31411 = cljs.core.count(c__4556__auto___31408);
var G__31412 = (0);
seq__31296_31397 = G__31409;
chunk__31297_31398 = G__31410;
count__31298_31399 = G__31411;
i__31299_31400 = G__31412;
continue;
} else {
var f_31413 = cljs.core.first(seq__31296_31407__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31413], 0));


var G__31414 = cljs.core.next(seq__31296_31407__$1);
var G__31415 = null;
var G__31416 = (0);
var G__31417 = (0);
seq__31296_31397 = G__31414;
chunk__31297_31398 = G__31415;
count__31298_31399 = G__31416;
i__31299_31400 = G__31417;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31418 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_31418], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_31418)))?cljs.core.second(arglists_31418):arglists_31418)], 0));
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
var seq__31300_31419 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31301_31420 = null;
var count__31302_31421 = (0);
var i__31303_31422 = (0);
while(true){
if((i__31303_31422 < count__31302_31421)){
var vec__31314_31423 = chunk__31301_31420.cljs$core$IIndexed$_nth$arity$2(null,i__31303_31422);
var name_31424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31314_31423,(0),null);
var map__31317_31425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31314_31423,(1),null);
var map__31317_31426__$1 = (((((!((map__31317_31425 == null))))?(((((map__31317_31425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31317_31425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31317_31425):map__31317_31425);
var doc_31427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31317_31426__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31317_31426__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31424], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31428], 0));

if(cljs.core.truth_(doc_31427)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31427], 0));
} else {
}


var G__31429 = seq__31300_31419;
var G__31430 = chunk__31301_31420;
var G__31431 = count__31302_31421;
var G__31432 = (i__31303_31422 + (1));
seq__31300_31419 = G__31429;
chunk__31301_31420 = G__31430;
count__31302_31421 = G__31431;
i__31303_31422 = G__31432;
continue;
} else {
var temp__5735__auto___31433 = cljs.core.seq(seq__31300_31419);
if(temp__5735__auto___31433){
var seq__31300_31434__$1 = temp__5735__auto___31433;
if(cljs.core.chunked_seq_QMARK_(seq__31300_31434__$1)){
var c__4556__auto___31435 = cljs.core.chunk_first(seq__31300_31434__$1);
var G__31436 = cljs.core.chunk_rest(seq__31300_31434__$1);
var G__31437 = c__4556__auto___31435;
var G__31438 = cljs.core.count(c__4556__auto___31435);
var G__31439 = (0);
seq__31300_31419 = G__31436;
chunk__31301_31420 = G__31437;
count__31302_31421 = G__31438;
i__31303_31422 = G__31439;
continue;
} else {
var vec__31319_31440 = cljs.core.first(seq__31300_31434__$1);
var name_31441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31319_31440,(0),null);
var map__31322_31442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31319_31440,(1),null);
var map__31322_31443__$1 = (((((!((map__31322_31442 == null))))?(((((map__31322_31442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31322_31442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31322_31442):map__31322_31442);
var doc_31444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31322_31443__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31322_31443__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31441], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31445], 0));

if(cljs.core.truth_(doc_31444)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31444], 0));
} else {
}


var G__31446 = cljs.core.next(seq__31300_31434__$1);
var G__31447 = null;
var G__31448 = (0);
var G__31449 = (0);
seq__31300_31419 = G__31446;
chunk__31301_31420 = G__31447;
count__31302_31421 = G__31448;
i__31303_31422 = G__31449;
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

var seq__31324 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31325 = null;
var count__31326 = (0);
var i__31327 = (0);
while(true){
if((i__31327 < count__31326)){
var role = chunk__31325.cljs$core$IIndexed$_nth$arity$2(null,i__31327);
var temp__5735__auto___31450__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___31450__$1)){
var spec_31451 = temp__5735__auto___31450__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31451)], 0));
} else {
}


var G__31452 = seq__31324;
var G__31453 = chunk__31325;
var G__31454 = count__31326;
var G__31455 = (i__31327 + (1));
seq__31324 = G__31452;
chunk__31325 = G__31453;
count__31326 = G__31454;
i__31327 = G__31455;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__31324);
if(temp__5735__auto____$1){
var seq__31324__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__31324__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31324__$1);
var G__31456 = cljs.core.chunk_rest(seq__31324__$1);
var G__31457 = c__4556__auto__;
var G__31458 = cljs.core.count(c__4556__auto__);
var G__31459 = (0);
seq__31324 = G__31456;
chunk__31325 = G__31457;
count__31326 = G__31458;
i__31327 = G__31459;
continue;
} else {
var role = cljs.core.first(seq__31324__$1);
var temp__5735__auto___31460__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___31460__$2)){
var spec_31461 = temp__5735__auto___31460__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31461)], 0));
} else {
}


var G__31462 = cljs.core.next(seq__31324__$1);
var G__31463 = null;
var G__31464 = (0);
var G__31465 = (0);
seq__31324 = G__31462;
chunk__31325 = G__31463;
count__31326 = G__31464;
i__31327 = G__31465;
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
var G__31466 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__31467 = cljs.core.ex_cause(t);
via = G__31466;
t = G__31467;
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
var map__31330 = datafied_throwable;
var map__31330__$1 = (((((!((map__31330 == null))))?(((((map__31330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31330):map__31330);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31330__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31330__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31330__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31331 = cljs.core.last(via);
var map__31331__$1 = (((((!((map__31331 == null))))?(((((map__31331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31331):map__31331);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31331__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31331__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31331__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31332 = data;
var map__31332__$1 = (((((!((map__31332 == null))))?(((((map__31332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31332):map__31332);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31332__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31332__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31332__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31333 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__31333__$1 = (((((!((map__31333 == null))))?(((((map__31333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31333):map__31333);
var top_data = map__31333__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31333__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__31338 = phase;
var G__31338__$1 = (((G__31338 instanceof cljs.core.Keyword))?G__31338.fqn:null);
switch (G__31338__$1) {
case "read-source":
var map__31339 = data;
var map__31339__$1 = (((((!((map__31339 == null))))?(((((map__31339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31339):map__31339);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31339__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31339__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31341 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__31341__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31341,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31341);
var G__31341__$2 = (cljs.core.truth_((function (){var fexpr__31342 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31342.cljs$core$IFn$_invoke$arity$1 ? fexpr__31342.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31342.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31341__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31341__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31341__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31341__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31343 = top_data;
var G__31343__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31343,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31343);
var G__31343__$2 = (cljs.core.truth_((function (){var fexpr__31344 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31344.cljs$core$IFn$_invoke$arity$1 ? fexpr__31344.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31344.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31343__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31343__$1);
var G__31343__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31343__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31343__$2);
var G__31343__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31343__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31343__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31343__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31343__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31345 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31345,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31345,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31345,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31345,(3),null);
var G__31348 = top_data;
var G__31348__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31348,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31348);
var G__31348__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31348__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31348__$1);
var G__31348__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31348__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31348__$2);
var G__31348__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31348__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31348__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31348__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31348__$4;
}

break;
case "execution":
var vec__31349 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31349,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31349,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31349,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31349,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__31329_SHARP_){
var or__4126__auto__ = (p1__31329_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__31353 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31353.cljs$core$IFn$_invoke$arity$1 ? fexpr__31353.cljs$core$IFn$_invoke$arity$1(p1__31329_SHARP_) : fexpr__31353.call(null,p1__31329_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__31354 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31354__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31354,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31354);
var G__31354__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31354__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31354__$1);
var G__31354__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31354__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31354__$2);
var G__31354__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31354__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31354__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31354__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31354__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31338__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31357){
var map__31358 = p__31357;
var map__31358__$1 = (((((!((map__31358 == null))))?(((((map__31358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31358):map__31358);
var triage_data = map__31358__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31358__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31358__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31358__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31358__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31358__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31358__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31358__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31358__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__31360 = phase;
var G__31360__$1 = (((G__31360 instanceof cljs.core.Keyword))?G__31360.fqn:null);
switch (G__31360__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__31361 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__31362 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31363 = loc;
var G__31364 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31365_31470 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31366_31471 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31367_31472 = true;
var _STAR_print_fn_STAR__temp_val__31368_31473 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31367_31472);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31368_31473);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31355_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31355_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31366_31471);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31365_31470);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31361,G__31362,G__31363,G__31364) : format.call(null,G__31361,G__31362,G__31363,G__31364));

break;
case "macroexpansion":
var G__31369 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__31370 = cause_type;
var G__31371 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31372 = loc;
var G__31373 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31369,G__31370,G__31371,G__31372,G__31373) : format.call(null,G__31369,G__31370,G__31371,G__31372,G__31373));

break;
case "compile-syntax-check":
var G__31374 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__31375 = cause_type;
var G__31376 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31377 = loc;
var G__31378 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31374,G__31375,G__31376,G__31377,G__31378) : format.call(null,G__31374,G__31375,G__31376,G__31377,G__31378));

break;
case "compilation":
var G__31379 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__31380 = cause_type;
var G__31381 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31382 = loc;
var G__31383 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31379,G__31380,G__31381,G__31382,G__31383) : format.call(null,G__31379,G__31380,G__31381,G__31382,G__31383));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__31384 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__31385 = symbol;
var G__31386 = loc;
var G__31387 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31388_31474 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31389_31475 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31390_31476 = true;
var _STAR_print_fn_STAR__temp_val__31391_31477 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31390_31476);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31391_31477);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31356_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31356_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31389_31475);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31388_31474);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31384,G__31385,G__31386,G__31387) : format.call(null,G__31384,G__31385,G__31386,G__31387));
} else {
var G__31392 = "Execution error%s at %s(%s).\n%s\n";
var G__31393 = cause_type;
var G__31394 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31395 = loc;
var G__31396 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31392,G__31393,G__31394,G__31395,G__31396) : format.call(null,G__31392,G__31393,G__31394,G__31395,G__31396));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31360__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
