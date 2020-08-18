// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__17414){
var map__17415 = p__17414;
var map__17415__$1 = (((((!((map__17415 == null))))?(((((map__17415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17415):map__17415);
var m = map__17415__$1;
var n = cljs.core.get.call(null,map__17415__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__17415__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
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
var seq__17417_17449 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17418_17450 = null;
var count__17419_17451 = (0);
var i__17420_17452 = (0);
while(true){
if((i__17420_17452 < count__17419_17451)){
var f_17453 = cljs.core._nth.call(null,chunk__17418_17450,i__17420_17452);
cljs.core.println.call(null,"  ",f_17453);


var G__17454 = seq__17417_17449;
var G__17455 = chunk__17418_17450;
var G__17456 = count__17419_17451;
var G__17457 = (i__17420_17452 + (1));
seq__17417_17449 = G__17454;
chunk__17418_17450 = G__17455;
count__17419_17451 = G__17456;
i__17420_17452 = G__17457;
continue;
} else {
var temp__5457__auto___17458 = cljs.core.seq.call(null,seq__17417_17449);
if(temp__5457__auto___17458){
var seq__17417_17459__$1 = temp__5457__auto___17458;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17417_17459__$1)){
var c__4556__auto___17460 = cljs.core.chunk_first.call(null,seq__17417_17459__$1);
var G__17461 = cljs.core.chunk_rest.call(null,seq__17417_17459__$1);
var G__17462 = c__4556__auto___17460;
var G__17463 = cljs.core.count.call(null,c__4556__auto___17460);
var G__17464 = (0);
seq__17417_17449 = G__17461;
chunk__17418_17450 = G__17462;
count__17419_17451 = G__17463;
i__17420_17452 = G__17464;
continue;
} else {
var f_17465 = cljs.core.first.call(null,seq__17417_17459__$1);
cljs.core.println.call(null,"  ",f_17465);


var G__17466 = cljs.core.next.call(null,seq__17417_17459__$1);
var G__17467 = null;
var G__17468 = (0);
var G__17469 = (0);
seq__17417_17449 = G__17466;
chunk__17418_17450 = G__17467;
count__17419_17451 = G__17468;
i__17420_17452 = G__17469;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17470 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_17470);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_17470)))?cljs.core.second.call(null,arglists_17470):arglists_17470));
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
var seq__17421_17471 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17422_17472 = null;
var count__17423_17473 = (0);
var i__17424_17474 = (0);
while(true){
if((i__17424_17474 < count__17423_17473)){
var vec__17435_17475 = cljs.core._nth.call(null,chunk__17422_17472,i__17424_17474);
var name_17476 = cljs.core.nth.call(null,vec__17435_17475,(0),null);
var map__17438_17477 = cljs.core.nth.call(null,vec__17435_17475,(1),null);
var map__17438_17478__$1 = (((((!((map__17438_17477 == null))))?(((((map__17438_17477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17438_17477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17438_17477):map__17438_17477);
var doc_17479 = cljs.core.get.call(null,map__17438_17478__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17480 = cljs.core.get.call(null,map__17438_17478__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_17476);

cljs.core.println.call(null," ",arglists_17480);

if(cljs.core.truth_(doc_17479)){
cljs.core.println.call(null," ",doc_17479);
} else {
}


var G__17481 = seq__17421_17471;
var G__17482 = chunk__17422_17472;
var G__17483 = count__17423_17473;
var G__17484 = (i__17424_17474 + (1));
seq__17421_17471 = G__17481;
chunk__17422_17472 = G__17482;
count__17423_17473 = G__17483;
i__17424_17474 = G__17484;
continue;
} else {
var temp__5457__auto___17485 = cljs.core.seq.call(null,seq__17421_17471);
if(temp__5457__auto___17485){
var seq__17421_17486__$1 = temp__5457__auto___17485;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17421_17486__$1)){
var c__4556__auto___17487 = cljs.core.chunk_first.call(null,seq__17421_17486__$1);
var G__17488 = cljs.core.chunk_rest.call(null,seq__17421_17486__$1);
var G__17489 = c__4556__auto___17487;
var G__17490 = cljs.core.count.call(null,c__4556__auto___17487);
var G__17491 = (0);
seq__17421_17471 = G__17488;
chunk__17422_17472 = G__17489;
count__17423_17473 = G__17490;
i__17424_17474 = G__17491;
continue;
} else {
var vec__17440_17492 = cljs.core.first.call(null,seq__17421_17486__$1);
var name_17493 = cljs.core.nth.call(null,vec__17440_17492,(0),null);
var map__17443_17494 = cljs.core.nth.call(null,vec__17440_17492,(1),null);
var map__17443_17495__$1 = (((((!((map__17443_17494 == null))))?(((((map__17443_17494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17443_17494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17443_17494):map__17443_17494);
var doc_17496 = cljs.core.get.call(null,map__17443_17495__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17497 = cljs.core.get.call(null,map__17443_17495__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_17493);

cljs.core.println.call(null," ",arglists_17497);

if(cljs.core.truth_(doc_17496)){
cljs.core.println.call(null," ",doc_17496);
} else {
}


var G__17498 = cljs.core.next.call(null,seq__17421_17486__$1);
var G__17499 = null;
var G__17500 = (0);
var G__17501 = (0);
seq__17421_17471 = G__17498;
chunk__17422_17472 = G__17499;
count__17423_17473 = G__17500;
i__17424_17474 = G__17501;
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
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__17445 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__17446 = null;
var count__17447 = (0);
var i__17448 = (0);
while(true){
if((i__17448 < count__17447)){
var role = cljs.core._nth.call(null,chunk__17446,i__17448);
var temp__5457__auto___17502__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___17502__$1)){
var spec_17503 = temp__5457__auto___17502__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_17503));
} else {
}


var G__17504 = seq__17445;
var G__17505 = chunk__17446;
var G__17506 = count__17447;
var G__17507 = (i__17448 + (1));
seq__17445 = G__17504;
chunk__17446 = G__17505;
count__17447 = G__17506;
i__17448 = G__17507;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__17445);
if(temp__5457__auto____$1){
var seq__17445__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17445__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__17445__$1);
var G__17508 = cljs.core.chunk_rest.call(null,seq__17445__$1);
var G__17509 = c__4556__auto__;
var G__17510 = cljs.core.count.call(null,c__4556__auto__);
var G__17511 = (0);
seq__17445 = G__17508;
chunk__17446 = G__17509;
count__17447 = G__17510;
i__17448 = G__17511;
continue;
} else {
var role = cljs.core.first.call(null,seq__17445__$1);
var temp__5457__auto___17512__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___17512__$2)){
var spec_17513 = temp__5457__auto___17512__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_17513));
} else {
}


var G__17514 = cljs.core.next.call(null,seq__17445__$1);
var G__17515 = null;
var G__17516 = (0);
var G__17517 = (0);
seq__17445 = G__17514;
chunk__17446 = G__17515;
count__17447 = G__17516;
i__17448 = G__17517;
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
))], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var ed = temp__5457__auto__;
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
var G__17518 = cljs.core.conj.call(null,via,t);
var G__17519 = cljs.core.ex_cause.call(null,t);
via = G__17518;
t = G__17519;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var root_msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var data = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5457__auto__)){
var phase = temp__5457__auto__;
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
var map__17522 = datafied_throwable;
var map__17522__$1 = (((((!((map__17522 == null))))?(((((map__17522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17522):map__17522);
var via = cljs.core.get.call(null,map__17522__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__17522__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__17522__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__17523 = cljs.core.last.call(null,via);
var map__17523__$1 = (((((!((map__17523 == null))))?(((((map__17523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17523):map__17523);
var type = cljs.core.get.call(null,map__17523__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__17523__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__17523__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__17524 = data;
var map__17524__$1 = (((((!((map__17524 == null))))?(((((map__17524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17524):map__17524);
var problems = cljs.core.get.call(null,map__17524__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__17524__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__17524__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__17525 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__17525__$1 = (((((!((map__17525 == null))))?(((((map__17525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17525):map__17525);
var top_data = map__17525__$1;
var source = cljs.core.get.call(null,map__17525__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__17530 = phase;
var G__17530__$1 = (((G__17530 instanceof cljs.core.Keyword))?G__17530.fqn:null);
switch (G__17530__$1) {
case "read-source":
var map__17531 = data;
var map__17531__$1 = (((((!((map__17531 == null))))?(((((map__17531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17531):map__17531);
var line = cljs.core.get.call(null,map__17531__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__17531__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__17533 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__17533__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__17533,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17533);
var G__17533__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__17533__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17533__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__17533__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17533__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__17534 = top_data;
var G__17534__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__17534,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17534);
var G__17534__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__17534__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17534__$1);
var G__17534__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__17534__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17534__$2);
var G__17534__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__17534__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17534__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__17534__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17534__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__17535 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__17535,(0),null);
var method = cljs.core.nth.call(null,vec__17535,(1),null);
var file = cljs.core.nth.call(null,vec__17535,(2),null);
var line = cljs.core.nth.call(null,vec__17535,(3),null);
var G__17538 = top_data;
var G__17538__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__17538,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__17538);
var G__17538__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__17538__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__17538__$1);
var G__17538__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__17538__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__17538__$2);
var G__17538__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__17538__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17538__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__17538__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17538__$4;
}

break;
case "execution":
var vec__17539 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__17539,(0),null);
var method = cljs.core.nth.call(null,vec__17539,(1),null);
var file = cljs.core.nth.call(null,vec__17539,(2),null);
var line = cljs.core.nth.call(null,vec__17539,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__17521_SHARP_){
var or__4126__auto__ = (p1__17521_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__17521_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__17542 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__17542__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__17542,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__17542);
var G__17542__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__17542__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17542__$1);
var G__17542__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__17542__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__17542__$2);
var G__17542__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__17542__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__17542__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__17542__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17542__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17530__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__17546){
var map__17547 = p__17546;
var map__17547__$1 = (((((!((map__17547 == null))))?(((((map__17547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17547):map__17547);
var triage_data = map__17547__$1;
var phase = cljs.core.get.call(null,map__17547__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__17547__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__17547__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__17547__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__17547__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__17547__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__17547__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__17547__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__17549 = phase;
var G__17549__$1 = (((G__17549 instanceof cljs.core.Keyword))?G__17549.fqn:null);
switch (G__17549__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17550_17559 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17551_17560 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17552_17561 = true;
var _STAR_print_fn_STAR__temp_val__17553_17562 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17552_17561);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17553_17562);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__17544_SHARP_){
return cljs.core.dissoc.call(null,p1__17544_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17551_17560);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17550_17559);
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
var _STAR_print_newline_STAR__orig_val__17554_17563 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17555_17564 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17556_17565 = true;
var _STAR_print_fn_STAR__temp_val__17557_17566 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17556_17565);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17557_17566);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__17545_SHARP_){
return cljs.core.dissoc.call(null,p1__17545_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17555_17564);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17554_17563);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17549__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
