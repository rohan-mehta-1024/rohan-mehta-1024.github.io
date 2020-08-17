// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__8276__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8276 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8277__i = 0, G__8277__a = new Array(arguments.length -  0);
while (G__8277__i < G__8277__a.length) {G__8277__a[G__8277__i] = arguments[G__8277__i + 0]; ++G__8277__i;}
  args = new cljs.core.IndexedSeq(G__8277__a,0,null);
} 
return G__8276__delegate.call(this,args);};
G__8276.cljs$lang$maxFixedArity = 0;
G__8276.cljs$lang$applyTo = (function (arglist__8278){
var args = cljs.core.seq(arglist__8278);
return G__8276__delegate(args);
});
G__8276.cljs$core$IFn$_invoke$arity$variadic = G__8276__delegate;
return G__8276;
})()
);

(o.error = (function() { 
var G__8279__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8279 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8280__i = 0, G__8280__a = new Array(arguments.length -  0);
while (G__8280__i < G__8280__a.length) {G__8280__a[G__8280__i] = arguments[G__8280__i + 0]; ++G__8280__i;}
  args = new cljs.core.IndexedSeq(G__8280__a,0,null);
} 
return G__8279__delegate.call(this,args);};
G__8279.cljs$lang$maxFixedArity = 0;
G__8279.cljs$lang$applyTo = (function (arglist__8281){
var args = cljs.core.seq(arglist__8281);
return G__8279__delegate(args);
});
G__8279.cljs$core$IFn$_invoke$arity$variadic = G__8279__delegate;
return G__8279;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
