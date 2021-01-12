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
var G__36315__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36315 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36316__i = 0, G__36316__a = new Array(arguments.length -  0);
while (G__36316__i < G__36316__a.length) {G__36316__a[G__36316__i] = arguments[G__36316__i + 0]; ++G__36316__i;}
  args = new cljs.core.IndexedSeq(G__36316__a,0,null);
} 
return G__36315__delegate.call(this,args);};
G__36315.cljs$lang$maxFixedArity = 0;
G__36315.cljs$lang$applyTo = (function (arglist__36317){
var args = cljs.core.seq(arglist__36317);
return G__36315__delegate(args);
});
G__36315.cljs$core$IFn$_invoke$arity$variadic = G__36315__delegate;
return G__36315;
})()
);

(o.error = (function() { 
var G__36318__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36318 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36319__i = 0, G__36319__a = new Array(arguments.length -  0);
while (G__36319__i < G__36319__a.length) {G__36319__a[G__36319__i] = arguments[G__36319__i + 0]; ++G__36319__i;}
  args = new cljs.core.IndexedSeq(G__36319__a,0,null);
} 
return G__36318__delegate.call(this,args);};
G__36318.cljs$lang$maxFixedArity = 0;
G__36318.cljs$lang$applyTo = (function (arglist__36320){
var args = cljs.core.seq(arglist__36320);
return G__36318__delegate(args);
});
G__36318.cljs$core$IFn$_invoke$arity$variadic = G__36318__delegate;
return G__36318;
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
