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
var G__36366__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36366 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36382__i = 0, G__36382__a = new Array(arguments.length -  0);
while (G__36382__i < G__36382__a.length) {G__36382__a[G__36382__i] = arguments[G__36382__i + 0]; ++G__36382__i;}
  args = new cljs.core.IndexedSeq(G__36382__a,0,null);
} 
return G__36366__delegate.call(this,args);};
G__36366.cljs$lang$maxFixedArity = 0;
G__36366.cljs$lang$applyTo = (function (arglist__36383){
var args = cljs.core.seq(arglist__36383);
return G__36366__delegate(args);
});
G__36366.cljs$core$IFn$_invoke$arity$variadic = G__36366__delegate;
return G__36366;
})()
);

(o.error = (function() { 
var G__36384__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36384 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36385__i = 0, G__36385__a = new Array(arguments.length -  0);
while (G__36385__i < G__36385__a.length) {G__36385__a[G__36385__i] = arguments[G__36385__i + 0]; ++G__36385__i;}
  args = new cljs.core.IndexedSeq(G__36385__a,0,null);
} 
return G__36384__delegate.call(this,args);};
G__36384.cljs$lang$maxFixedArity = 0;
G__36384.cljs$lang$applyTo = (function (arglist__36386){
var args = cljs.core.seq(arglist__36386);
return G__36384__delegate(args);
});
G__36384.cljs$core$IFn$_invoke$arity$variadic = G__36384__delegate;
return G__36384;
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
