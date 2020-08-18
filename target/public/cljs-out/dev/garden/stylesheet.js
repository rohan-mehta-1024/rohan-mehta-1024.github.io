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
var len__4736__auto___11478 = arguments.length;
var i__4737__auto___11479 = (0);
while(true){
if((i__4737__auto___11479 < len__4736__auto___11478)){
args__4742__auto__.push((arguments[i__4737__auto___11479]));

var G__11480 = (i__4737__auto___11479 + (1));
i__4737__auto___11479 = G__11480;
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
var G__11481__delegate = function (children){
return cljs.core.into.call(null,cljs.core.apply.call(null,cljs.core.vector,selector,more),children);
};
var G__11481 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__11482__i = 0, G__11482__a = new Array(arguments.length -  0);
while (G__11482__i < G__11482__a.length) {G__11482__a[G__11482__i] = arguments[G__11482__i + 0]; ++G__11482__i;}
  children = new cljs.core.IndexedSeq(G__11482__a,0,null);
} 
return G__11481__delegate.call(this,children);};
G__11481.cljs$lang$maxFixedArity = 0;
G__11481.cljs$lang$applyTo = (function (arglist__11483){
var children = cljs.core.seq(arglist__11483);
return G__11481__delegate(children);
});
G__11481.cljs$core$IFn$_invoke$arity$variadic = G__11481__delegate;
return G__11481;
})()
;
}
}));

(garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.rule.cljs$lang$applyTo = (function (seq11476){
var G__11477 = cljs.core.first.call(null,seq11476);
var seq11476__$1 = cljs.core.next.call(null,seq11476);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11477,seq11476__$1);
}));

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__11484__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__11484 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11485__i = 0, G__11485__a = new Array(arguments.length -  0);
while (G__11485__i < G__11485__a.length) {G__11485__a[G__11485__i] = arguments[G__11485__i + 0]; ++G__11485__i;}
  args = new cljs.core.IndexedSeq(G__11485__a,0,null);
} 
return G__11484__delegate.call(this,args);};
G__11484.cljs$lang$maxFixedArity = 0;
G__11484.cljs$lang$applyTo = (function (arglist__11486){
var args = cljs.core.seq(arglist__11486);
return G__11484__delegate(args);
});
G__11484.cljs$core$IFn$_invoke$arity$variadic = G__11484__delegate;
return G__11484;
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
var len__4736__auto___11488 = arguments.length;
var i__4737__auto___11489 = (0);
while(true){
if((i__4737__auto___11489 < len__4736__auto___11488)){
args__4742__auto__.push((arguments[i__4737__auto___11489]));

var G__11490 = (i__4737__auto___11489 + (1));
i__4737__auto___11489 = G__11490;
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
(garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq11487){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11487));
}));

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__11494 = arguments.length;
switch (G__11494) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___11496 = arguments.length;
var i__4737__auto___11497 = (0);
while(true){
if((i__4737__auto___11497 < len__4736__auto___11496)){
args_arr__4757__auto__.push((arguments[i__4737__auto___11497]));

var G__11498 = (i__4737__auto___11497 + (1));
i__4737__auto___11497 = G__11498;
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
(garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq11492){
var G__11493 = cljs.core.first.call(null,seq11492);
var seq11492__$1 = cljs.core.next.call(null,seq11492);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11493,seq11492__$1);
}));

(garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4742__auto__ = [];
var len__4736__auto___11501 = arguments.length;
var i__4737__auto___11502 = (0);
while(true){
if((i__4737__auto___11502 < len__4736__auto___11501)){
args__4742__auto__.push((arguments[i__4737__auto___11502]));

var G__11503 = (i__4737__auto___11502 + (1));
i__4737__auto___11502 = G__11503;
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
(garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq11499){
var G__11500 = cljs.core.first.call(null,seq11499);
var seq11499__$1 = cljs.core.next.call(null,seq11499);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11500,seq11499__$1);
}));

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__4742__auto__ = [];
var len__4736__auto___11506 = arguments.length;
var i__4737__auto___11507 = (0);
while(true){
if((i__4737__auto___11507 < len__4736__auto___11506)){
args__4742__auto__.push((arguments[i__4737__auto___11507]));

var G__11508 = (i__4737__auto___11507 + (1));
i__4737__auto___11507 = G__11508;
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
(garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq11504){
var G__11505 = cljs.core.first.call(null,seq11504);
var seq11504__$1 = cljs.core.next.call(null,seq11504);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11505,seq11504__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4742__auto__ = [];
var len__4736__auto___11511 = arguments.length;
var i__4737__auto___11512 = (0);
while(true){
if((i__4737__auto___11512 < len__4736__auto___11511)){
args__4742__auto__.push((arguments[i__4737__auto___11512]));

var G__11513 = (i__4737__auto___11512 + (1));
i__4737__auto___11512 = G__11513;
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
(garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq11509){
var G__11510 = cljs.core.first.call(null,seq11509);
var seq11509__$1 = cljs.core.next.call(null,seq11509);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11510,seq11509__$1);
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
