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
var G__36289__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36289 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36290__i = 0, G__36290__a = new Array(arguments.length -  0);
while (G__36290__i < G__36290__a.length) {G__36290__a[G__36290__i] = arguments[G__36290__i + 0]; ++G__36290__i;}
  args = new cljs.core.IndexedSeq(G__36290__a,0,null);
} 
return G__36289__delegate.call(this,args);};
G__36289.cljs$lang$maxFixedArity = 0;
G__36289.cljs$lang$applyTo = (function (arglist__36291){
var args = cljs.core.seq(arglist__36291);
return G__36289__delegate(args);
});
G__36289.cljs$core$IFn$_invoke$arity$variadic = G__36289__delegate;
return G__36289;
})()
);

(o.error = (function() { 
var G__36292__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36292 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36293__i = 0, G__36293__a = new Array(arguments.length -  0);
while (G__36293__i < G__36293__a.length) {G__36293__a[G__36293__i] = arguments[G__36293__i + 0]; ++G__36293__i;}
  args = new cljs.core.IndexedSeq(G__36293__a,0,null);
} 
return G__36292__delegate.call(this,args);};
G__36292.cljs$lang$maxFixedArity = 0;
G__36292.cljs$lang$applyTo = (function (arglist__36294){
var args = cljs.core.seq(arglist__36294);
return G__36292__delegate(args);
});
G__36292.cljs$core$IFn$_invoke$arity$variadic = G__36292__delegate;
return G__36292;
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
