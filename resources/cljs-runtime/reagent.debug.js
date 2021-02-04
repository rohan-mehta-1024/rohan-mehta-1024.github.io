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
var G__36317__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36317 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36318__i = 0, G__36318__a = new Array(arguments.length -  0);
while (G__36318__i < G__36318__a.length) {G__36318__a[G__36318__i] = arguments[G__36318__i + 0]; ++G__36318__i;}
  args = new cljs.core.IndexedSeq(G__36318__a,0,null);
} 
return G__36317__delegate.call(this,args);};
G__36317.cljs$lang$maxFixedArity = 0;
G__36317.cljs$lang$applyTo = (function (arglist__36319){
var args = cljs.core.seq(arglist__36319);
return G__36317__delegate(args);
});
G__36317.cljs$core$IFn$_invoke$arity$variadic = G__36317__delegate;
return G__36317;
})()
);

(o.error = (function() { 
var G__36320__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36320 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36321__i = 0, G__36321__a = new Array(arguments.length -  0);
while (G__36321__i < G__36321__a.length) {G__36321__a[G__36321__i] = arguments[G__36321__i + 0]; ++G__36321__i;}
  args = new cljs.core.IndexedSeq(G__36321__a,0,null);
} 
return G__36320__delegate.call(this,args);};
G__36320.cljs$lang$maxFixedArity = 0;
G__36320.cljs$lang$applyTo = (function (arglist__36322){
var args = cljs.core.seq(arglist__36322);
return G__36320__delegate(args);
});
G__36320.cljs$core$IFn$_invoke$arity$variadic = G__36320__delegate;
return G__36320;
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
