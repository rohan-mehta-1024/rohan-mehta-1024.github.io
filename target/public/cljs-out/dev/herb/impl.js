// Compiled by ClojureScript 1.10.773 {}
goog.provide('herb.impl');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('herb.runtime');
goog.require('garden.stylesheet');
herb.impl.dev_QMARK_ = goog.DEBUG;
herb.impl.convert_pseudo = (function herb$impl$convert_pseudo(pseudos){
return cljs.core.map.call(null,(function (p__11516){
var vec__11517 = p__11516;
var kw = cljs.core.nth.call(null,vec__11517,(0),null);
var p = cljs.core.nth.call(null,vec__11517,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,["&",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kw)].join('')),p], null);
}),pseudos);
});
herb.impl.convert_media = (function herb$impl$convert_media(media){
return cljs.core.map.call(null,(function (p__11520){
var vec__11521 = p__11520;
var query = cljs.core.nth.call(null,vec__11521,(0),null);
var style = cljs.core.nth.call(null,vec__11521,(1),null);
return garden.stylesheet.at_media.call(null,query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),style], null));
}),media);
});
herb.impl.convert_supports = (function herb$impl$convert_supports(supports){
return cljs.core.map.call(null,(function (p__11524){
var vec__11525 = p__11524;
var query = cljs.core.nth.call(null,vec__11525,(0),null);
var style = cljs.core.nth.call(null,vec__11525,(1),null);
return garden.stylesheet.at_supports.call(null,query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),style], null));
}),supports);
});
herb.impl.convert_vendors = (function herb$impl$convert_vendors(vendors){
return cljs.core.mapv.call(null,cljs.core.name,vendors);
});
/**
 * Calls each function provided in a collection of style-fns. Input can take
 *   multiple forms depending on how it got called from the consumer side either
 *   using the macro directly or via extend meta data. Takes a collection of
 *   `style-fns`  and returns a vector with the resolved style maps.
 */
herb.impl.resolve_style_fns = (function herb$impl$resolve_style_fns(style_fns){
var sf = style_fns;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,sf)){
return result;
} else {
var input = cljs.core.first.call(null,sf);
if(cljs.core.fn_QMARK_.call(null,input)){
return cljs.core.conj.call(null,result,cljs.core.apply.call(null,input,cljs.core.rest.call(null,sf)));
} else {
if(((cljs.core.coll_QMARK_.call(null,input)) && (cljs.core.fn_QMARK_.call(null,cljs.core.first.call(null,input))))){
var style_fn = cljs.core.first.call(null,input);
var style_args = cljs.core.rest.call(null,input);
var G__11528 = cljs.core.rest.call(null,sf);
var G__11529 = cljs.core.conj.call(null,result,cljs.core.apply.call(null,style_fn,style_args));
sf = G__11528;
result = G__11529;
continue;
} else {
var G__11530 = cljs.core.rest.call(null,sf);
var G__11531 = cljs.core.into.call(null,result,herb.impl.resolve_style_fns.call(null,input));
sf = G__11530;
result = G__11531;
continue;

}
}
}
break;
}
});
/**
 * Return a transducer that pulls out a given meta type from a sequence and filter
 *   out nil values
 */
herb.impl.process_meta_xform = (function herb$impl$process_meta_xform(meta_type){
return cljs.core.comp.call(null,cljs.core.map.call(null,cljs.core.meta),cljs.core.map.call(null,meta_type),cljs.core.filter.call(null,cljs.core.identity));
});
/**
 * Extract all the `:extend` meta, ensuring what we walk the entire tree, passing
 *   each extend vector of style-fns to `resolve-style-fns` for resolution. Returns
 *   vector of resolved styles
 */
herb.impl.extract_extended_styles = (function herb$impl$extract_extended_styles(style_fns){
var sf = style_fns;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.fn_QMARK_.call(null,sf)){
var G__11532 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sf], null);
var G__11533 = result;
sf = G__11532;
result = G__11533;
continue;
} else {
if(((cljs.core.vector_QMARK_.call(null,sf)) && (cljs.core.seq.call(null,sf)))){
var styles = herb.impl.resolve_style_fns.call(null,sf);
var new_meta = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,herb.impl.process_meta_xform.call(null,new cljs.core.Keyword(null,"extend","extend",1836484006)),styles);
var G__11534 = new_meta;
var G__11535 = cljs.core.into.call(null,styles,result);
sf = G__11534;
result = G__11535;
continue;
} else {
return result;

}
}
break;
}
});
/**
 * Takes a group of resolved styles and a meta type. Pull out each meta obj and
 *   merge to prevent duplicates, finally convert to garden acceptable input and
 *   return
 */
herb.impl.extract_meta = (function herb$impl$extract_meta(styles,meta_type){
var convert_fn = (function (){var G__11536 = meta_type;
var G__11536__$1 = (((G__11536 instanceof cljs.core.Keyword))?G__11536.fqn:null);
switch (G__11536__$1) {
case "media":
return herb.impl.convert_media;

break;
case "supports":
return herb.impl.convert_supports;

break;
case "prefix":
return cljs.core.identity;

break;
case "vendors":
return herb.impl.convert_vendors;

break;
case "pseudo":
return herb.impl.convert_pseudo;

break;
case "combinators":
return cljs.core.identity;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11536__$1)].join('')));

}
})();
var extracted = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,herb.impl.process_meta_xform.call(null,meta_type),styles);
if(cljs.core.seq.call(null,extracted)){
var merged = (function (){var G__11537 = meta_type;
var G__11537__$1 = (((G__11537 instanceof cljs.core.Keyword))?G__11537.fqn:null);
switch (G__11537__$1) {
case "prefix":
return cljs.core.last.call(null,extracted);

break;
case "vendors":
return cljs.core.apply.call(null,cljs.core.concat,extracted);

break;
default:
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,extracted);

}
})();
return convert_fn.call(null,merged);
} else {
return null;
}
});
/**
 * Prepare `resolved-styles` so they can be passed to `garden.core/css` Merge
 *   the styles to remove duplicate entries and ensuring precedence. Extract all
 *   meta and return a final vector of styles including meta.
 */
herb.impl.prepare_data = (function herb$impl$prepare_data(resolved_styles){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.apply.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,resolved_styles),new cljs.core.Keyword(null,"pseudo","pseudo",851696982),herb.impl.extract_meta.call(null,resolved_styles,new cljs.core.Keyword(null,"pseudo","pseudo",851696982)),new cljs.core.Keyword(null,"vendors","vendors",-153040496),herb.impl.extract_meta.call(null,resolved_styles,new cljs.core.Keyword(null,"vendors","vendors",-153040496)),new cljs.core.Keyword(null,"prefix","prefix",-265908465),herb.impl.extract_meta.call(null,resolved_styles,new cljs.core.Keyword(null,"prefix","prefix",-265908465)),new cljs.core.Keyword(null,"supports","supports",1501242067),herb.impl.extract_meta.call(null,resolved_styles,new cljs.core.Keyword(null,"supports","supports",1501242067)),new cljs.core.Keyword(null,"media","media",-1066138403),herb.impl.extract_meta.call(null,resolved_styles,new cljs.core.Keyword(null,"media","media",-1066138403)),new cljs.core.Keyword(null,"combinators","combinators",-1995039000),herb.impl.extract_meta.call(null,resolved_styles,new cljs.core.Keyword(null,"combinators","combinators",-1995039000))], null);
});
/**
 * Takes `input` and remove any non-valid characters
 */
herb.impl.sanitize = (function herb$impl$sanitize(input){
if(cljs.core.truth_(input)){
if((input instanceof cljs.core.Keyword)){
return herb.impl.sanitize.call(null,cljs.core.name.call(null,input));
} else {
return clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(input),/[^A-Za-z0-9-_]/,"_");

}
} else {
return null;
}
});
herb.impl.compose_selector = (function herb$impl$compose_selector(n,hsh,kind,hint){
return [((cljs.core._EQ_.call(null,kind,new cljs.core.Keyword(null,"id","id",-1388402092)))?"#":"."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(herb.impl.sanitize.call(null,n)),(cljs.core.truth_((function (){var and__4115__auto__ = hint;
if(cljs.core.truth_(and__4115__auto__)){
return herb.impl.dev_QMARK_;
} else {
return and__4115__auto__;
}
})())?["_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(herb.impl.sanitize.call(null,hint))].join(''):null),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hsh)].join('');
});
/**
 * Create a fully qualified name string for use in the data-herb attr
 */
herb.impl.create_data_string = (function herb$impl$create_data_string(n){
var c = clojure.string.split.call(null,n,/\//);
var ns = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,".",cljs.core.butlast.call(null,c)));
var sym = cljs.core.last.call(null,c);
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.call(null,ns,sym));
});
herb.impl.get_name = (function herb$impl$get_name(style_fn,ns_name){
var name_STAR_ = style_fn.name;
var anon_QMARK_ = cljs.core.empty_QMARK_.call(null,name_STAR_);
var cname = ((((anon_QMARK_) && ((!(herb.impl.dev_QMARK_)))))?"A-":((((herb.impl.dev_QMARK_) && (anon_QMARK_)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),"/","anonymous"].join(''):name_STAR_
));
if(herb.impl.dev_QMARK_){
return cljs.core.demunge.call(null,cname);
} else {
return cname;
}
});
/**
 * Entry point for macros.
 *   Takes an `opt` map as first argument, and currently only supports `:id true`
 *   which appends an id identifier instead of a class to the DOM
 */
herb.impl.with_style_BANG_ = (function herb$impl$with_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___11545 = arguments.length;
var i__4737__auto___11546 = (0);
while(true){
if((i__4737__auto___11546 < len__4736__auto___11545)){
args__4742__auto__.push((arguments[i__4737__auto___11546]));

var G__11547 = (i__4737__auto___11546 + (1));
i__4737__auto___11546 = G__11547;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return herb.impl.with_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(herb.impl.with_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (kind,fn_name,ns_name,style_fn,args){
var name_STAR_ = herb.impl.get_name.call(null,style_fn,ns_name);
var resolved_styles = herb.impl.extract_extended_styles.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [style_fn], null),args));
var style_data = herb.impl.prepare_data.call(null,resolved_styles);
var hint = new cljs.core.Keyword(null,"hint","hint",439639918).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,cljs.core.last.call(null,resolved_styles)));
var selector = herb.impl.compose_selector.call(null,name_STAR_,cljs.core.hash.call(null,style_data),kind,hint);
var identifier = herb.impl.sanitize.call(null,name_STAR_);
var data_str = ((herb.impl.dev_QMARK_)?herb.impl.create_data_string.call(null,name_STAR_):null);
var result = herb.runtime.inject_style_BANG_.call(null,identifier,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector,style_data], null),data_str);
if(cljs.core._EQ_.call(null,kind,new cljs.core.Keyword(null,"style","style",-496642736))){
return new cljs.core.Keyword(null,"css","css",1135045163).cljs$core$IFn$_invoke$arity$1(result);
} else {
return cljs.core.subs.call(null,selector,(1));
}
}));

(herb.impl.with_style_BANG_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(herb.impl.with_style_BANG_.cljs$lang$applyTo = (function (seq11540){
var G__11541 = cljs.core.first.call(null,seq11540);
var seq11540__$1 = cljs.core.next.call(null,seq11540);
var G__11542 = cljs.core.first.call(null,seq11540__$1);
var seq11540__$2 = cljs.core.next.call(null,seq11540__$1);
var G__11543 = cljs.core.first.call(null,seq11540__$2);
var seq11540__$3 = cljs.core.next.call(null,seq11540__$2);
var G__11544 = cljs.core.first.call(null,seq11540__$3);
var seq11540__$4 = cljs.core.next.call(null,seq11540__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11541,G__11542,G__11543,G__11544,seq11540__$4);
}));


//# sourceMappingURL=impl.js.map
