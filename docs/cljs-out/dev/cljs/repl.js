// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31748){
var map__31749 = p__31748;
var map__31749__$1 = (((((!((map__31749 == null))))?(((((map__31749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31749):map__31749);
var m = map__31749__$1;
var n = cljs.core.get.call(null,map__31749__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31749__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__31751_31783 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31752_31784 = null;
var count__31753_31785 = (0);
var i__31754_31786 = (0);
while(true){
if((i__31754_31786 < count__31753_31785)){
var f_31787 = cljs.core._nth.call(null,chunk__31752_31784,i__31754_31786);
cljs.core.println.call(null,"  ",f_31787);


var G__31788 = seq__31751_31783;
var G__31789 = chunk__31752_31784;
var G__31790 = count__31753_31785;
var G__31791 = (i__31754_31786 + (1));
seq__31751_31783 = G__31788;
chunk__31752_31784 = G__31789;
count__31753_31785 = G__31790;
i__31754_31786 = G__31791;
continue;
} else {
var temp__5753__auto___31792 = cljs.core.seq.call(null,seq__31751_31783);
if(temp__5753__auto___31792){
var seq__31751_31793__$1 = temp__5753__auto___31792;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31751_31793__$1)){
var c__4556__auto___31794 = cljs.core.chunk_first.call(null,seq__31751_31793__$1);
var G__31795 = cljs.core.chunk_rest.call(null,seq__31751_31793__$1);
var G__31796 = c__4556__auto___31794;
var G__31797 = cljs.core.count.call(null,c__4556__auto___31794);
var G__31798 = (0);
seq__31751_31783 = G__31795;
chunk__31752_31784 = G__31796;
count__31753_31785 = G__31797;
i__31754_31786 = G__31798;
continue;
} else {
var f_31799 = cljs.core.first.call(null,seq__31751_31793__$1);
cljs.core.println.call(null,"  ",f_31799);


var G__31800 = cljs.core.next.call(null,seq__31751_31793__$1);
var G__31801 = null;
var G__31802 = (0);
var G__31803 = (0);
seq__31751_31783 = G__31800;
chunk__31752_31784 = G__31801;
count__31753_31785 = G__31802;
i__31754_31786 = G__31803;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31804 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31804);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31804)))?cljs.core.second.call(null,arglists_31804):arglists_31804));
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
var seq__31755_31805 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31756_31806 = null;
var count__31757_31807 = (0);
var i__31758_31808 = (0);
while(true){
if((i__31758_31808 < count__31757_31807)){
var vec__31769_31809 = cljs.core._nth.call(null,chunk__31756_31806,i__31758_31808);
var name_31810 = cljs.core.nth.call(null,vec__31769_31809,(0),null);
var map__31772_31811 = cljs.core.nth.call(null,vec__31769_31809,(1),null);
var map__31772_31812__$1 = (((((!((map__31772_31811 == null))))?(((((map__31772_31811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31772_31811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31772_31811):map__31772_31811);
var doc_31813 = cljs.core.get.call(null,map__31772_31812__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31814 = cljs.core.get.call(null,map__31772_31812__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31810);

cljs.core.println.call(null," ",arglists_31814);

if(cljs.core.truth_(doc_31813)){
cljs.core.println.call(null," ",doc_31813);
} else {
}


var G__31815 = seq__31755_31805;
var G__31816 = chunk__31756_31806;
var G__31817 = count__31757_31807;
var G__31818 = (i__31758_31808 + (1));
seq__31755_31805 = G__31815;
chunk__31756_31806 = G__31816;
count__31757_31807 = G__31817;
i__31758_31808 = G__31818;
continue;
} else {
var temp__5753__auto___31819 = cljs.core.seq.call(null,seq__31755_31805);
if(temp__5753__auto___31819){
var seq__31755_31820__$1 = temp__5753__auto___31819;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31755_31820__$1)){
var c__4556__auto___31821 = cljs.core.chunk_first.call(null,seq__31755_31820__$1);
var G__31822 = cljs.core.chunk_rest.call(null,seq__31755_31820__$1);
var G__31823 = c__4556__auto___31821;
var G__31824 = cljs.core.count.call(null,c__4556__auto___31821);
var G__31825 = (0);
seq__31755_31805 = G__31822;
chunk__31756_31806 = G__31823;
count__31757_31807 = G__31824;
i__31758_31808 = G__31825;
continue;
} else {
var vec__31774_31826 = cljs.core.first.call(null,seq__31755_31820__$1);
var name_31827 = cljs.core.nth.call(null,vec__31774_31826,(0),null);
var map__31777_31828 = cljs.core.nth.call(null,vec__31774_31826,(1),null);
var map__31777_31829__$1 = (((((!((map__31777_31828 == null))))?(((((map__31777_31828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31777_31828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31777_31828):map__31777_31828);
var doc_31830 = cljs.core.get.call(null,map__31777_31829__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31831 = cljs.core.get.call(null,map__31777_31829__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31827);

cljs.core.println.call(null," ",arglists_31831);

if(cljs.core.truth_(doc_31830)){
cljs.core.println.call(null," ",doc_31830);
} else {
}


var G__31832 = cljs.core.next.call(null,seq__31755_31820__$1);
var G__31833 = null;
var G__31834 = (0);
var G__31835 = (0);
seq__31755_31805 = G__31832;
chunk__31756_31806 = G__31833;
count__31757_31807 = G__31834;
i__31758_31808 = G__31835;
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

var seq__31779 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31780 = null;
var count__31781 = (0);
var i__31782 = (0);
while(true){
if((i__31782 < count__31781)){
var role = cljs.core._nth.call(null,chunk__31780,i__31782);
var temp__5753__auto___31836__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___31836__$1)){
var spec_31837 = temp__5753__auto___31836__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31837));
} else {
}


var G__31838 = seq__31779;
var G__31839 = chunk__31780;
var G__31840 = count__31781;
var G__31841 = (i__31782 + (1));
seq__31779 = G__31838;
chunk__31780 = G__31839;
count__31781 = G__31840;
i__31782 = G__31841;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq.call(null,seq__31779);
if(temp__5753__auto____$1){
var seq__31779__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31779__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__31779__$1);
var G__31842 = cljs.core.chunk_rest.call(null,seq__31779__$1);
var G__31843 = c__4556__auto__;
var G__31844 = cljs.core.count.call(null,c__4556__auto__);
var G__31845 = (0);
seq__31779 = G__31842;
chunk__31780 = G__31843;
count__31781 = G__31844;
i__31782 = G__31845;
continue;
} else {
var role = cljs.core.first.call(null,seq__31779__$1);
var temp__5753__auto___31846__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___31846__$2)){
var spec_31847 = temp__5753__auto___31846__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31847));
} else {
}


var G__31848 = cljs.core.next.call(null,seq__31779__$1);
var G__31849 = null;
var G__31850 = (0);
var G__31851 = (0);
seq__31779 = G__31848;
chunk__31780 = G__31849;
count__31781 = G__31850;
i__31782 = G__31851;
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
var G__31852 = cljs.core.conj.call(null,via,t);
var G__31853 = cljs.core.ex_cause.call(null,t);
via = G__31852;
t = G__31853;
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
var map__31856 = datafied_throwable;
var map__31856__$1 = (((((!((map__31856 == null))))?(((((map__31856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31856):map__31856);
var via = cljs.core.get.call(null,map__31856__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__31856__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__31856__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31857 = cljs.core.last.call(null,via);
var map__31857__$1 = (((((!((map__31857 == null))))?(((((map__31857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31857):map__31857);
var type = cljs.core.get.call(null,map__31857__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__31857__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__31857__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31858 = data;
var map__31858__$1 = (((((!((map__31858 == null))))?(((((map__31858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31858):map__31858);
var problems = cljs.core.get.call(null,map__31858__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__31858__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__31858__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31859 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__31859__$1 = (((((!((map__31859 == null))))?(((((map__31859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31859):map__31859);
var top_data = map__31859__$1;
var source = cljs.core.get.call(null,map__31859__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__31864 = phase;
var G__31864__$1 = (((G__31864 instanceof cljs.core.Keyword))?G__31864.fqn:null);
switch (G__31864__$1) {
case "read-source":
var map__31865 = data;
var map__31865__$1 = (((((!((map__31865 == null))))?(((((map__31865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31865):map__31865);
var line = cljs.core.get.call(null,map__31865__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__31865__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31867 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__31867__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__31867,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31867);
var G__31867__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__31867__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31867__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__31867__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31867__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31868 = top_data;
var G__31868__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__31868,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31868);
var G__31868__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__31868__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31868__$1);
var G__31868__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__31868__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31868__$2);
var G__31868__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__31868__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31868__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__31868__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31868__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31869 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__31869,(0),null);
var method = cljs.core.nth.call(null,vec__31869,(1),null);
var file = cljs.core.nth.call(null,vec__31869,(2),null);
var line = cljs.core.nth.call(null,vec__31869,(3),null);
var G__31872 = top_data;
var G__31872__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__31872,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31872);
var G__31872__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__31872__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31872__$1);
var G__31872__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__31872__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31872__$2);
var G__31872__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__31872__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31872__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__31872__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31872__$4;
}

break;
case "execution":
var vec__31873 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__31873,(0),null);
var method = cljs.core.nth.call(null,vec__31873,(1),null);
var file = cljs.core.nth.call(null,vec__31873,(2),null);
var line = cljs.core.nth.call(null,vec__31873,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__31855_SHARP_){
var or__4126__auto__ = (p1__31855_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__31855_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__31876 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31876__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__31876,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31876);
var G__31876__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__31876__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31876__$1);
var G__31876__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__31876__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31876__$2);
var G__31876__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__31876__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31876__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__31876__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31876__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31864__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31880){
var map__31881 = p__31880;
var map__31881__$1 = (((((!((map__31881 == null))))?(((((map__31881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31881):map__31881);
var triage_data = map__31881__$1;
var phase = cljs.core.get.call(null,map__31881__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__31881__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__31881__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__31881__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__31881__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__31881__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__31881__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__31881__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__31883 = phase;
var G__31883__$1 = (((G__31883 instanceof cljs.core.Keyword))?G__31883.fqn:null);
switch (G__31883__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31884_31893 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31885_31894 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31886_31895 = true;
var _STAR_print_fn_STAR__temp_val__31887_31896 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31886_31895);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31887_31896);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__31878_SHARP_){
return cljs.core.dissoc.call(null,p1__31878_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31885_31894);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31884_31893);
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
var _STAR_print_newline_STAR__orig_val__31888_31897 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31889_31898 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31890_31899 = true;
var _STAR_print_fn_STAR__temp_val__31891_31900 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31890_31899);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31891_31900);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__31879_SHARP_){
return cljs.core.dissoc.call(null,p1__31879_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31889_31898);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31888_31897);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31883__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
