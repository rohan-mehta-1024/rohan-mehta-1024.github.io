goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__36332__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36332 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36333__i = 0, G__36333__a = new Array(arguments.length -  0);
while (G__36333__i < G__36333__a.length) {G__36333__a[G__36333__i] = arguments[G__36333__i + 0]; ++G__36333__i;}
  args = new cljs.core.IndexedSeq(G__36333__a,0,null);
} 
return G__36332__delegate.call(this,args);};
G__36332.cljs$lang$maxFixedArity = 0;
G__36332.cljs$lang$applyTo = (function (arglist__36334){
var args = cljs.core.seq(arglist__36334);
return G__36332__delegate(args);
});
G__36332.cljs$core$IFn$_invoke$arity$variadic = G__36332__delegate;
return G__36332;
})()
);

(o.error = (function() { 
var G__36335__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36335 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36344__i = 0, G__36344__a = new Array(arguments.length -  0);
while (G__36344__i < G__36344__a.length) {G__36344__a[G__36344__i] = arguments[G__36344__i + 0]; ++G__36344__i;}
  args = new cljs.core.IndexedSeq(G__36344__a,0,null);
} 
return G__36335__delegate.call(this,args);};
G__36335.cljs$lang$maxFixedArity = 0;
G__36335.cljs$lang$applyTo = (function (arglist__36345){
var args = cljs.core.seq(arglist__36345);
return G__36335__delegate(args);
});
G__36335.cljs$core$IFn$_invoke$arity$variadic = G__36335__delegate;
return G__36335;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
