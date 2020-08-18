// Compiled by ClojureScript 1.10.773 {}
goog.provide('herb.core');
goog.require('cljs.core');
goog.require('herb.impl');
goog.require('herb.spec');
goog.require('cljs.spec.alpha');
goog.require('clojure.string');
goog.require('herb.runtime');
/**
 * Initialize herb, takes a map of options:
 *   :vendors - a vector of vendor prefixes, ie [:webkit :moz]
 *   :auto-prefix - A set of CSS properties to auto prefix, ie #{:transition :border-radius} 
 */
herb.core.init_BANG_ = (function herb$core$init_BANG_(options){
var parsed = cljs.spec.alpha.conform.call(null,new cljs.core.Keyword("herb.spec","options","herb.spec/options",1976339333),options);
if(cljs.core._EQ_.call(null,parsed,new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119))){
throw cljs.core.ex_info.call(null,"Invalid input",cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("herb.spec","options","herb.spec/options",1976339333),options));
} else {
return cljs.core.reset_BANG_.call(null,herb.runtime.options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vendors","vendors",-153040496),herb.impl.convert_vendors.call(null,cljs.core.mapv.call(null,(function (p__12485){
var vec__12486 = p__12485;
var k = cljs.core.nth.call(null,vec__12486,(0),null);
var v = cljs.core.nth.call(null,vec__12486,(1),null);
return v;
}),new cljs.core.Keyword(null,"vendors","vendors",-153040496).cljs$core$IFn$_invoke$arity$1(parsed))),new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466),new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466).cljs$core$IFn$_invoke$arity$1(options)], null));
}
});
/**
 * Joins multiple classes together, filtering out nils:
 *   ```clojure
 *   (join (<class fn-1) (<class fn-2))
 *   ```
 */
herb.core.join = (function herb$core$join(var_args){
var args__4742__auto__ = [];
var len__4736__auto___12490 = arguments.length;
var i__4737__auto___12491 = (0);
while(true){
if((i__4737__auto___12491 < len__4736__auto___12490)){
args__4742__auto__.push((arguments[i__4737__auto___12491]));

var G__12492 = (i__4737__auto___12491 + (1));
i__4737__auto___12491 = G__12492;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return herb.core.join.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(herb.core.join.cljs$core$IFn$_invoke$arity$variadic = (function (classes){
if(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("herb.spec","classes","herb.spec/classes",1230150394),classes)){
return clojure.string.join.call(null," ",cljs.core.filter.call(null,cljs.core.identity,classes));
} else {
throw cljs.core.ex_info.call(null,"join takes one or more strings as arguments",cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("herb.spec","classes","herb.spec/classes",1230150394),classes));
}
}));

(herb.core.join.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(herb.core.join.cljs$lang$applyTo = (function (seq12489){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12489));
}));


//# sourceMappingURL=core.js.map
