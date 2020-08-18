// Compiled by ClojureScript 1.10.773 {}
goog.provide('garden.stylesheet');
goog.require('cljs.core');
goog.require('garden.util');
goog.require('garden.color');
goog.require('garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
garden.stylesheet.rule = (function garden$stylesheet$rule(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10306 = arguments.length;
var i__4737__auto___10307 = (0);
while(true){
if((i__4737__auto___10307 < len__4736__auto___10306)){
args__4742__auto__.push((arguments[i__4737__auto___10307]));

var G__10308 = (i__4737__auto___10307 + (1));
i__4737__auto___10307 = G__10308;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))){
throw cljs.core.ex_info.call(null,"Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__10309__delegate = function (children){
return cljs.core.into.call(null,cljs.core.apply.call(null,cljs.core.vector,selector,more),children);
};
var G__10309 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__10310__i = 0, G__10310__a = new Array(arguments.length -  0);
while (G__10310__i < G__10310__a.length) {G__10310__a[G__10310__i] = arguments[G__10310__i + 0]; ++G__10310__i;}
  children = new cljs.core.IndexedSeq(G__10310__a,0,null);
} 
return G__10309__delegate.call(this,children);};
G__10309.cljs$lang$maxFixedArity = 0;
G__10309.cljs$lang$applyTo = (function (arglist__10311){
var children = cljs.core.seq(arglist__10311);
return G__10309__delegate(children);
});
G__10309.cljs$core$IFn$_invoke$arity$variadic = G__10309__delegate;
return G__10309;
})()
;
}
}));

(garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.rule.cljs$lang$applyTo = (function (seq10304){
var G__10305 = cljs.core.first.call(null,seq10304);
var seq10304__$1 = cljs.core.next.call(null,seq10304);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10305,seq10304__$1);
}));

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__10312__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__10312 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10313__i = 0, G__10313__a = new Array(arguments.length -  0);
while (G__10313__i < G__10313__a.length) {G__10313__a[G__10313__i] = arguments[G__10313__i + 0]; ++G__10313__i;}
  args = new cljs.core.IndexedSeq(G__10313__a,0,null);
} 
return G__10312__delegate.call(this,args);};
G__10312.cljs$lang$maxFixedArity = 0;
G__10312.cljs$lang$applyTo = (function (arglist__10314){
var args = cljs.core.seq(arglist__10314);
return G__10312__delegate(args);
});
G__10312.cljs$core$IFn$_invoke$arity$variadic = G__10312__delegate;
return G__10312;
})()
;
});
garden.stylesheet.at_rule = (function garden$stylesheet$at_rule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
garden.stylesheet.at_font_face = (function garden$stylesheet$at_font_face(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10316 = arguments.length;
var i__4737__auto___10317 = (0);
while(true){
if((i__4737__auto___10317 < len__4736__auto___10316)){
args__4742__auto__.push((arguments[i__4737__auto___10317]));

var G__10318 = (i__4737__auto___10317 + (1));
i__4737__auto___10317 = G__10318;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
}));

(garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq10315){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10315));
}));

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__10322 = arguments.length;
switch (G__10322) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___10324 = arguments.length;
var i__4737__auto___10325 = (0);
while(true){
if((i__4737__auto___10325 < len__4736__auto___10324)){
args_arr__4757__auto__.push((arguments[i__4737__auto___10325]));

var G__10326 = (i__4737__auto___10325 + (1));
i__4737__auto___10325 = G__10326;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4758__auto__);

}
});

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
}));

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
}));

/** @this {Function} */
(garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq10320){
var G__10321 = cljs.core.first.call(null,seq10320);
var seq10320__$1 = cljs.core.next.call(null,seq10320);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10321,seq10320__$1);
}));

(garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10329 = arguments.length;
var i__4737__auto___10330 = (0);
while(true){
if((i__4737__auto___10330 < len__4736__auto___10329)){
args__4742__auto__.push((arguments[i__4737__auto___10330]));

var G__10331 = (i__4737__auto___10330 + (1));
i__4737__auto___10330 = G__10331;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq10327){
var G__10328 = cljs.core.first.call(null,seq10327);
var seq10327__$1 = cljs.core.next.call(null,seq10327);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10328,seq10327__$1);
}));

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10334 = arguments.length;
var i__4737__auto___10335 = (0);
while(true){
if((i__4737__auto___10335 < len__4736__auto___10334)){
args__4742__auto__.push((arguments[i__4737__auto___10335]));

var G__10336 = (i__4737__auto___10335 + (1));
i__4737__auto___10335 = G__10336;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq10332){
var G__10333 = cljs.core.first.call(null,seq10332);
var seq10332__$1 = cljs.core.next.call(null,seq10332);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10333,seq10332__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10339 = arguments.length;
var i__4737__auto___10340 = (0);
while(true){
if((i__4737__auto___10340 < len__4736__auto___10339)){
args__4742__auto__.push((arguments[i__4737__auto___10340]));

var G__10341 = (i__4737__auto___10340 + (1));
i__4737__auto___10340 = G__10341;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
}));

(garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq10337){
var G__10338 = cljs.core.first.call(null,seq10337);
var seq10337__$1 = cljs.core.next.call(null,seq10337);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10338,seq10337__$1);
}));

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=stylesheet.js.map
