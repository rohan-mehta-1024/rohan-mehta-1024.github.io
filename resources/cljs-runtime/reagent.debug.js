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
var G__36294__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36294 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36295__i = 0, G__36295__a = new Array(arguments.length -  0);
while (G__36295__i < G__36295__a.length) {G__36295__a[G__36295__i] = arguments[G__36295__i + 0]; ++G__36295__i;}
  args = new cljs.core.IndexedSeq(G__36295__a,0,null);
} 
return G__36294__delegate.call(this,args);};
G__36294.cljs$lang$maxFixedArity = 0;
G__36294.cljs$lang$applyTo = (function (arglist__36296){
var args = cljs.core.seq(arglist__36296);
return G__36294__delegate(args);
});
G__36294.cljs$core$IFn$_invoke$arity$variadic = G__36294__delegate;
return G__36294;
})()
);

(o.error = (function() { 
var G__36297__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36297 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36298__i = 0, G__36298__a = new Array(arguments.length -  0);
while (G__36298__i < G__36298__a.length) {G__36298__a[G__36298__i] = arguments[G__36298__i + 0]; ++G__36298__i;}
  args = new cljs.core.IndexedSeq(G__36298__a,0,null);
} 
return G__36297__delegate.call(this,args);};
G__36297.cljs$lang$maxFixedArity = 0;
G__36297.cljs$lang$applyTo = (function (arglist__36299){
var args = cljs.core.seq(arglist__36299);
return G__36297__delegate(args);
});
G__36297.cljs$core$IFn$_invoke$arity$variadic = G__36297__delegate;
return G__36297;
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
