goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33901 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33901(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33902 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33902(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33279 = coll;
var G__33280 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33279,G__33280) : shadow.dom.lazy_native_coll_seq.call(null,G__33279,G__33280));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33288 = arguments.length;
switch (G__33288) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33290 = arguments.length;
switch (G__33290) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33292 = arguments.length;
switch (G__33292) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33295 = arguments.length;
switch (G__33295) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33299 = arguments.length;
switch (G__33299) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33301 = arguments.length;
switch (G__33301) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33304){if((e33304 instanceof Object)){
var e = e33304;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33304;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33309 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33310 = null;
var count__33311 = (0);
var i__33312 = (0);
while(true){
if((i__33312 < count__33311)){
var el = chunk__33310.cljs$core$IIndexed$_nth$arity$2(null,i__33312);
var handler_33993__$1 = ((function (seq__33309,chunk__33310,count__33311,i__33312,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33309,chunk__33310,count__33311,i__33312,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33993__$1);


var G__33994 = seq__33309;
var G__33995 = chunk__33310;
var G__33996 = count__33311;
var G__33997 = (i__33312 + (1));
seq__33309 = G__33994;
chunk__33310 = G__33995;
count__33311 = G__33996;
i__33312 = G__33997;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33309);
if(temp__5735__auto__){
var seq__33309__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33309__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33309__$1);
var G__33999 = cljs.core.chunk_rest(seq__33309__$1);
var G__34000 = c__4556__auto__;
var G__34001 = cljs.core.count(c__4556__auto__);
var G__34002 = (0);
seq__33309 = G__33999;
chunk__33310 = G__34000;
count__33311 = G__34001;
i__33312 = G__34002;
continue;
} else {
var el = cljs.core.first(seq__33309__$1);
var handler_34003__$1 = ((function (seq__33309,chunk__33310,count__33311,i__33312,el,seq__33309__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33309,chunk__33310,count__33311,i__33312,el,seq__33309__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34003__$1);


var G__34006 = cljs.core.next(seq__33309__$1);
var G__34007 = null;
var G__34008 = (0);
var G__34009 = (0);
seq__33309 = G__34006;
chunk__33310 = G__34007;
count__33311 = G__34008;
i__33312 = G__34009;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33314 = arguments.length;
switch (G__33314) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33315 = cljs.core.seq(events);
var chunk__33316 = null;
var count__33317 = (0);
var i__33318 = (0);
while(true){
if((i__33318 < count__33317)){
var vec__33325 = chunk__33316.cljs$core$IIndexed$_nth$arity$2(null,i__33318);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33325,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33325,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34011 = seq__33315;
var G__34012 = chunk__33316;
var G__34013 = count__33317;
var G__34014 = (i__33318 + (1));
seq__33315 = G__34011;
chunk__33316 = G__34012;
count__33317 = G__34013;
i__33318 = G__34014;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33315);
if(temp__5735__auto__){
var seq__33315__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33315__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33315__$1);
var G__34015 = cljs.core.chunk_rest(seq__33315__$1);
var G__34016 = c__4556__auto__;
var G__34017 = cljs.core.count(c__4556__auto__);
var G__34018 = (0);
seq__33315 = G__34015;
chunk__33316 = G__34016;
count__33317 = G__34017;
i__33318 = G__34018;
continue;
} else {
var vec__33331 = cljs.core.first(seq__33315__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33331,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33331,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34019 = cljs.core.next(seq__33315__$1);
var G__34020 = null;
var G__34021 = (0);
var G__34022 = (0);
seq__33315 = G__34019;
chunk__33316 = G__34020;
count__33317 = G__34021;
i__33318 = G__34022;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33334 = cljs.core.seq(styles);
var chunk__33335 = null;
var count__33336 = (0);
var i__33337 = (0);
while(true){
if((i__33337 < count__33336)){
var vec__33344 = chunk__33335.cljs$core$IIndexed$_nth$arity$2(null,i__33337);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33344,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33344,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34024 = seq__33334;
var G__34025 = chunk__33335;
var G__34026 = count__33336;
var G__34027 = (i__33337 + (1));
seq__33334 = G__34024;
chunk__33335 = G__34025;
count__33336 = G__34026;
i__33337 = G__34027;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33334);
if(temp__5735__auto__){
var seq__33334__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33334__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33334__$1);
var G__34028 = cljs.core.chunk_rest(seq__33334__$1);
var G__34029 = c__4556__auto__;
var G__34030 = cljs.core.count(c__4556__auto__);
var G__34031 = (0);
seq__33334 = G__34028;
chunk__33335 = G__34029;
count__33336 = G__34030;
i__33337 = G__34031;
continue;
} else {
var vec__33347 = cljs.core.first(seq__33334__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33347,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33347,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34032 = cljs.core.next(seq__33334__$1);
var G__34033 = null;
var G__34034 = (0);
var G__34035 = (0);
seq__33334 = G__34032;
chunk__33335 = G__34033;
count__33336 = G__34034;
i__33337 = G__34035;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33350_34036 = key;
var G__33350_34037__$1 = (((G__33350_34036 instanceof cljs.core.Keyword))?G__33350_34036.fqn:null);
switch (G__33350_34037__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34040 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_34040,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_34040,"aria-");
}
})())){
el.setAttribute(ks_34040,value);
} else {
(el[ks_34040] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33351){
var map__33352 = p__33351;
var map__33352__$1 = (((((!((map__33352 == null))))?(((((map__33352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33352):map__33352);
var props = map__33352__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33352__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33354 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33354,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33354,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33354,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33357 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33357,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33357;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33360 = arguments.length;
switch (G__33360) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33362){
var vec__33363 = p__33362;
var seq__33364 = cljs.core.seq(vec__33363);
var first__33365 = cljs.core.first(seq__33364);
var seq__33364__$1 = cljs.core.next(seq__33364);
var nn = first__33365;
var first__33365__$1 = cljs.core.first(seq__33364__$1);
var seq__33364__$2 = cljs.core.next(seq__33364__$1);
var np = first__33365__$1;
var nc = seq__33364__$2;
var node = vec__33363;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33366 = nn;
var G__33367 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33366,G__33367) : create_fn.call(null,G__33366,G__33367));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33368 = nn;
var G__33369 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33368,G__33369) : create_fn.call(null,G__33368,G__33369));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33370 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33370,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33370,(1),null);
var seq__33373_34059 = cljs.core.seq(node_children);
var chunk__33374_34060 = null;
var count__33375_34061 = (0);
var i__33376_34062 = (0);
while(true){
if((i__33376_34062 < count__33375_34061)){
var child_struct_34063 = chunk__33374_34060.cljs$core$IIndexed$_nth$arity$2(null,i__33376_34062);
var children_34064 = shadow.dom.dom_node(child_struct_34063);
if(cljs.core.seq_QMARK_(children_34064)){
var seq__33405_34065 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34064));
var chunk__33407_34066 = null;
var count__33408_34067 = (0);
var i__33409_34068 = (0);
while(true){
if((i__33409_34068 < count__33408_34067)){
var child_34069 = chunk__33407_34066.cljs$core$IIndexed$_nth$arity$2(null,i__33409_34068);
if(cljs.core.truth_(child_34069)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34069);


var G__34070 = seq__33405_34065;
var G__34071 = chunk__33407_34066;
var G__34072 = count__33408_34067;
var G__34073 = (i__33409_34068 + (1));
seq__33405_34065 = G__34070;
chunk__33407_34066 = G__34071;
count__33408_34067 = G__34072;
i__33409_34068 = G__34073;
continue;
} else {
var G__34074 = seq__33405_34065;
var G__34075 = chunk__33407_34066;
var G__34076 = count__33408_34067;
var G__34077 = (i__33409_34068 + (1));
seq__33405_34065 = G__34074;
chunk__33407_34066 = G__34075;
count__33408_34067 = G__34076;
i__33409_34068 = G__34077;
continue;
}
} else {
var temp__5735__auto___34078 = cljs.core.seq(seq__33405_34065);
if(temp__5735__auto___34078){
var seq__33405_34079__$1 = temp__5735__auto___34078;
if(cljs.core.chunked_seq_QMARK_(seq__33405_34079__$1)){
var c__4556__auto___34082 = cljs.core.chunk_first(seq__33405_34079__$1);
var G__34083 = cljs.core.chunk_rest(seq__33405_34079__$1);
var G__34084 = c__4556__auto___34082;
var G__34085 = cljs.core.count(c__4556__auto___34082);
var G__34086 = (0);
seq__33405_34065 = G__34083;
chunk__33407_34066 = G__34084;
count__33408_34067 = G__34085;
i__33409_34068 = G__34086;
continue;
} else {
var child_34087 = cljs.core.first(seq__33405_34079__$1);
if(cljs.core.truth_(child_34087)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34087);


var G__34090 = cljs.core.next(seq__33405_34079__$1);
var G__34091 = null;
var G__34092 = (0);
var G__34093 = (0);
seq__33405_34065 = G__34090;
chunk__33407_34066 = G__34091;
count__33408_34067 = G__34092;
i__33409_34068 = G__34093;
continue;
} else {
var G__34094 = cljs.core.next(seq__33405_34079__$1);
var G__34095 = null;
var G__34096 = (0);
var G__34097 = (0);
seq__33405_34065 = G__34094;
chunk__33407_34066 = G__34095;
count__33408_34067 = G__34096;
i__33409_34068 = G__34097;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34064);
}


var G__34099 = seq__33373_34059;
var G__34100 = chunk__33374_34060;
var G__34101 = count__33375_34061;
var G__34102 = (i__33376_34062 + (1));
seq__33373_34059 = G__34099;
chunk__33374_34060 = G__34100;
count__33375_34061 = G__34101;
i__33376_34062 = G__34102;
continue;
} else {
var temp__5735__auto___34103 = cljs.core.seq(seq__33373_34059);
if(temp__5735__auto___34103){
var seq__33373_34104__$1 = temp__5735__auto___34103;
if(cljs.core.chunked_seq_QMARK_(seq__33373_34104__$1)){
var c__4556__auto___34105 = cljs.core.chunk_first(seq__33373_34104__$1);
var G__34106 = cljs.core.chunk_rest(seq__33373_34104__$1);
var G__34107 = c__4556__auto___34105;
var G__34108 = cljs.core.count(c__4556__auto___34105);
var G__34109 = (0);
seq__33373_34059 = G__34106;
chunk__33374_34060 = G__34107;
count__33375_34061 = G__34108;
i__33376_34062 = G__34109;
continue;
} else {
var child_struct_34110 = cljs.core.first(seq__33373_34104__$1);
var children_34112 = shadow.dom.dom_node(child_struct_34110);
if(cljs.core.seq_QMARK_(children_34112)){
var seq__33428_34113 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34112));
var chunk__33430_34114 = null;
var count__33431_34115 = (0);
var i__33432_34116 = (0);
while(true){
if((i__33432_34116 < count__33431_34115)){
var child_34118 = chunk__33430_34114.cljs$core$IIndexed$_nth$arity$2(null,i__33432_34116);
if(cljs.core.truth_(child_34118)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34118);


var G__34119 = seq__33428_34113;
var G__34120 = chunk__33430_34114;
var G__34121 = count__33431_34115;
var G__34122 = (i__33432_34116 + (1));
seq__33428_34113 = G__34119;
chunk__33430_34114 = G__34120;
count__33431_34115 = G__34121;
i__33432_34116 = G__34122;
continue;
} else {
var G__34123 = seq__33428_34113;
var G__34124 = chunk__33430_34114;
var G__34125 = count__33431_34115;
var G__34126 = (i__33432_34116 + (1));
seq__33428_34113 = G__34123;
chunk__33430_34114 = G__34124;
count__33431_34115 = G__34125;
i__33432_34116 = G__34126;
continue;
}
} else {
var temp__5735__auto___34127__$1 = cljs.core.seq(seq__33428_34113);
if(temp__5735__auto___34127__$1){
var seq__33428_34128__$1 = temp__5735__auto___34127__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33428_34128__$1)){
var c__4556__auto___34129 = cljs.core.chunk_first(seq__33428_34128__$1);
var G__34131 = cljs.core.chunk_rest(seq__33428_34128__$1);
var G__34132 = c__4556__auto___34129;
var G__34133 = cljs.core.count(c__4556__auto___34129);
var G__34134 = (0);
seq__33428_34113 = G__34131;
chunk__33430_34114 = G__34132;
count__33431_34115 = G__34133;
i__33432_34116 = G__34134;
continue;
} else {
var child_34135 = cljs.core.first(seq__33428_34128__$1);
if(cljs.core.truth_(child_34135)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34135);


var G__34136 = cljs.core.next(seq__33428_34128__$1);
var G__34137 = null;
var G__34138 = (0);
var G__34139 = (0);
seq__33428_34113 = G__34136;
chunk__33430_34114 = G__34137;
count__33431_34115 = G__34138;
i__33432_34116 = G__34139;
continue;
} else {
var G__34140 = cljs.core.next(seq__33428_34128__$1);
var G__34141 = null;
var G__34142 = (0);
var G__34143 = (0);
seq__33428_34113 = G__34140;
chunk__33430_34114 = G__34141;
count__33431_34115 = G__34142;
i__33432_34116 = G__34143;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34112);
}


var G__34144 = cljs.core.next(seq__33373_34104__$1);
var G__34145 = null;
var G__34146 = (0);
var G__34147 = (0);
seq__33373_34059 = G__34144;
chunk__33374_34060 = G__34145;
count__33375_34061 = G__34146;
i__33376_34062 = G__34147;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33456 = cljs.core.seq(node);
var chunk__33457 = null;
var count__33458 = (0);
var i__33459 = (0);
while(true){
if((i__33459 < count__33458)){
var n = chunk__33457.cljs$core$IIndexed$_nth$arity$2(null,i__33459);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34148 = seq__33456;
var G__34149 = chunk__33457;
var G__34150 = count__33458;
var G__34151 = (i__33459 + (1));
seq__33456 = G__34148;
chunk__33457 = G__34149;
count__33458 = G__34150;
i__33459 = G__34151;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33456);
if(temp__5735__auto__){
var seq__33456__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33456__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33456__$1);
var G__34156 = cljs.core.chunk_rest(seq__33456__$1);
var G__34157 = c__4556__auto__;
var G__34158 = cljs.core.count(c__4556__auto__);
var G__34159 = (0);
seq__33456 = G__34156;
chunk__33457 = G__34157;
count__33458 = G__34158;
i__33459 = G__34159;
continue;
} else {
var n = cljs.core.first(seq__33456__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34160 = cljs.core.next(seq__33456__$1);
var G__34161 = null;
var G__34162 = (0);
var G__34163 = (0);
seq__33456 = G__34160;
chunk__33457 = G__34161;
count__33458 = G__34162;
i__33459 = G__34163;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33476 = arguments.length;
switch (G__33476) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33481 = arguments.length;
switch (G__33481) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33491 = arguments.length;
switch (G__33491) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34180 = arguments.length;
var i__4737__auto___34181 = (0);
while(true){
if((i__4737__auto___34181 < len__4736__auto___34180)){
args__4742__auto__.push((arguments[i__4737__auto___34181]));

var G__34182 = (i__4737__auto___34181 + (1));
i__4737__auto___34181 = G__34182;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33510_34183 = cljs.core.seq(nodes);
var chunk__33511_34184 = null;
var count__33512_34185 = (0);
var i__33513_34186 = (0);
while(true){
if((i__33513_34186 < count__33512_34185)){
var node_34187 = chunk__33511_34184.cljs$core$IIndexed$_nth$arity$2(null,i__33513_34186);
fragment.appendChild(shadow.dom._to_dom(node_34187));


var G__34188 = seq__33510_34183;
var G__34189 = chunk__33511_34184;
var G__34190 = count__33512_34185;
var G__34191 = (i__33513_34186 + (1));
seq__33510_34183 = G__34188;
chunk__33511_34184 = G__34189;
count__33512_34185 = G__34190;
i__33513_34186 = G__34191;
continue;
} else {
var temp__5735__auto___34192 = cljs.core.seq(seq__33510_34183);
if(temp__5735__auto___34192){
var seq__33510_34193__$1 = temp__5735__auto___34192;
if(cljs.core.chunked_seq_QMARK_(seq__33510_34193__$1)){
var c__4556__auto___34194 = cljs.core.chunk_first(seq__33510_34193__$1);
var G__34195 = cljs.core.chunk_rest(seq__33510_34193__$1);
var G__34196 = c__4556__auto___34194;
var G__34197 = cljs.core.count(c__4556__auto___34194);
var G__34198 = (0);
seq__33510_34183 = G__34195;
chunk__33511_34184 = G__34196;
count__33512_34185 = G__34197;
i__33513_34186 = G__34198;
continue;
} else {
var node_34206 = cljs.core.first(seq__33510_34193__$1);
fragment.appendChild(shadow.dom._to_dom(node_34206));


var G__34207 = cljs.core.next(seq__33510_34193__$1);
var G__34208 = null;
var G__34209 = (0);
var G__34210 = (0);
seq__33510_34183 = G__34207;
chunk__33511_34184 = G__34208;
count__33512_34185 = G__34209;
i__33513_34186 = G__34210;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33509){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33509));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33526_34211 = cljs.core.seq(scripts);
var chunk__33527_34212 = null;
var count__33528_34213 = (0);
var i__33529_34214 = (0);
while(true){
if((i__33529_34214 < count__33528_34213)){
var vec__33536_34215 = chunk__33527_34212.cljs$core$IIndexed$_nth$arity$2(null,i__33529_34214);
var script_tag_34216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33536_34215,(0),null);
var script_body_34217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33536_34215,(1),null);
eval(script_body_34217);


var G__34218 = seq__33526_34211;
var G__34219 = chunk__33527_34212;
var G__34220 = count__33528_34213;
var G__34221 = (i__33529_34214 + (1));
seq__33526_34211 = G__34218;
chunk__33527_34212 = G__34219;
count__33528_34213 = G__34220;
i__33529_34214 = G__34221;
continue;
} else {
var temp__5735__auto___34222 = cljs.core.seq(seq__33526_34211);
if(temp__5735__auto___34222){
var seq__33526_34223__$1 = temp__5735__auto___34222;
if(cljs.core.chunked_seq_QMARK_(seq__33526_34223__$1)){
var c__4556__auto___34224 = cljs.core.chunk_first(seq__33526_34223__$1);
var G__34225 = cljs.core.chunk_rest(seq__33526_34223__$1);
var G__34226 = c__4556__auto___34224;
var G__34227 = cljs.core.count(c__4556__auto___34224);
var G__34228 = (0);
seq__33526_34211 = G__34225;
chunk__33527_34212 = G__34226;
count__33528_34213 = G__34227;
i__33529_34214 = G__34228;
continue;
} else {
var vec__33541_34229 = cljs.core.first(seq__33526_34223__$1);
var script_tag_34230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33541_34229,(0),null);
var script_body_34231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33541_34229,(1),null);
eval(script_body_34231);


var G__34232 = cljs.core.next(seq__33526_34223__$1);
var G__34233 = null;
var G__34234 = (0);
var G__34235 = (0);
seq__33526_34211 = G__34232;
chunk__33527_34212 = G__34233;
count__33528_34213 = G__34234;
i__33529_34214 = G__34235;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33544){
var vec__33546 = p__33544;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33546,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33546,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33557 = arguments.length;
switch (G__33557) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33579 = cljs.core.seq(style_keys);
var chunk__33580 = null;
var count__33581 = (0);
var i__33582 = (0);
while(true){
if((i__33582 < count__33581)){
var it = chunk__33580.cljs$core$IIndexed$_nth$arity$2(null,i__33582);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34241 = seq__33579;
var G__34242 = chunk__33580;
var G__34243 = count__33581;
var G__34244 = (i__33582 + (1));
seq__33579 = G__34241;
chunk__33580 = G__34242;
count__33581 = G__34243;
i__33582 = G__34244;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33579);
if(temp__5735__auto__){
var seq__33579__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33579__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33579__$1);
var G__34247 = cljs.core.chunk_rest(seq__33579__$1);
var G__34248 = c__4556__auto__;
var G__34249 = cljs.core.count(c__4556__auto__);
var G__34250 = (0);
seq__33579 = G__34247;
chunk__33580 = G__34248;
count__33581 = G__34249;
i__33582 = G__34250;
continue;
} else {
var it = cljs.core.first(seq__33579__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34251 = cljs.core.next(seq__33579__$1);
var G__34252 = null;
var G__34253 = (0);
var G__34254 = (0);
seq__33579 = G__34251;
chunk__33580 = G__34252;
count__33581 = G__34253;
i__33582 = G__34254;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33594,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33609 = k33594;
var G__33609__$1 = (((G__33609 instanceof cljs.core.Keyword))?G__33609.fqn:null);
switch (G__33609__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33594,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33616){
var vec__33619 = p__33616;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33619,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33619,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33593){
var self__ = this;
var G__33593__$1 = this;
return (new cljs.core.RecordIter((0),G__33593__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33595,other33596){
var self__ = this;
var this33595__$1 = this;
return (((!((other33596 == null)))) && ((this33595__$1.constructor === other33596.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33595__$1.x,other33596.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33595__$1.y,other33596.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33595__$1.__extmap,other33596.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33593){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33634 = cljs.core.keyword_identical_QMARK_;
var expr__33635 = k__4388__auto__;
if(cljs.core.truth_((pred__33634.cljs$core$IFn$_invoke$arity$2 ? pred__33634.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33635) : pred__33634.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33635)))){
return (new shadow.dom.Coordinate(G__33593,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33634.cljs$core$IFn$_invoke$arity$2 ? pred__33634.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33635) : pred__33634.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33635)))){
return (new shadow.dom.Coordinate(self__.x,G__33593,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33593),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33593){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33593,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33597){
var extmap__4419__auto__ = (function (){var G__33655 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33597,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33597)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33655);
} else {
return G__33655;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33597),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33597),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33662,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33668 = k33662;
var G__33668__$1 = (((G__33668 instanceof cljs.core.Keyword))?G__33668.fqn:null);
switch (G__33668__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33662,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33671){
var vec__33672 = p__33671;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33672,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33672,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33661){
var self__ = this;
var G__33661__$1 = this;
return (new cljs.core.RecordIter((0),G__33661__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33663,other33664){
var self__ = this;
var this33663__$1 = this;
return (((!((other33664 == null)))) && ((this33663__$1.constructor === other33664.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33663__$1.w,other33664.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33663__$1.h,other33664.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33663__$1.__extmap,other33664.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33661){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33675 = cljs.core.keyword_identical_QMARK_;
var expr__33676 = k__4388__auto__;
if(cljs.core.truth_((pred__33675.cljs$core$IFn$_invoke$arity$2 ? pred__33675.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33676) : pred__33675.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33676)))){
return (new shadow.dom.Size(G__33661,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33675.cljs$core$IFn$_invoke$arity$2 ? pred__33675.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33676) : pred__33675.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33676)))){
return (new shadow.dom.Size(self__.w,G__33661,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33661),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33661){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33661,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33666){
var extmap__4419__auto__ = (function (){var G__33680 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33666,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33666)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33680);
} else {
return G__33680;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33666),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33666),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__34307 = (i + (1));
var G__34308 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34307;
ret = G__34308;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33712){
var vec__33713 = p__33712;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33713,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33713,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33734 = arguments.length;
switch (G__33734) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34310 = ps;
var G__34311 = (i + (1));
el__$1 = G__34310;
i = G__34311;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33753 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33753,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33753,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33753,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33756_34312 = cljs.core.seq(props);
var chunk__33757_34313 = null;
var count__33758_34314 = (0);
var i__33759_34315 = (0);
while(true){
if((i__33759_34315 < count__33758_34314)){
var vec__33775_34316 = chunk__33757_34313.cljs$core$IIndexed$_nth$arity$2(null,i__33759_34315);
var k_34317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33775_34316,(0),null);
var v_34318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33775_34316,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34317);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34317),v_34318);


var G__34319 = seq__33756_34312;
var G__34320 = chunk__33757_34313;
var G__34321 = count__33758_34314;
var G__34322 = (i__33759_34315 + (1));
seq__33756_34312 = G__34319;
chunk__33757_34313 = G__34320;
count__33758_34314 = G__34321;
i__33759_34315 = G__34322;
continue;
} else {
var temp__5735__auto___34323 = cljs.core.seq(seq__33756_34312);
if(temp__5735__auto___34323){
var seq__33756_34324__$1 = temp__5735__auto___34323;
if(cljs.core.chunked_seq_QMARK_(seq__33756_34324__$1)){
var c__4556__auto___34325 = cljs.core.chunk_first(seq__33756_34324__$1);
var G__34326 = cljs.core.chunk_rest(seq__33756_34324__$1);
var G__34327 = c__4556__auto___34325;
var G__34328 = cljs.core.count(c__4556__auto___34325);
var G__34329 = (0);
seq__33756_34312 = G__34326;
chunk__33757_34313 = G__34327;
count__33758_34314 = G__34328;
i__33759_34315 = G__34329;
continue;
} else {
var vec__33779_34331 = cljs.core.first(seq__33756_34324__$1);
var k_34332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33779_34331,(0),null);
var v_34333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33779_34331,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34332);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34332),v_34333);


var G__34334 = cljs.core.next(seq__33756_34324__$1);
var G__34335 = null;
var G__34336 = (0);
var G__34337 = (0);
seq__33756_34312 = G__34334;
chunk__33757_34313 = G__34335;
count__33758_34314 = G__34336;
i__33759_34315 = G__34337;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33786 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33786,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33786,(1),null);
var seq__33789_34338 = cljs.core.seq(node_children);
var chunk__33791_34339 = null;
var count__33792_34340 = (0);
var i__33793_34341 = (0);
while(true){
if((i__33793_34341 < count__33792_34340)){
var child_struct_34342 = chunk__33791_34339.cljs$core$IIndexed$_nth$arity$2(null,i__33793_34341);
if((!((child_struct_34342 == null)))){
if(typeof child_struct_34342 === 'string'){
var text_34343 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34343),child_struct_34342].join(''));
} else {
var children_34344 = shadow.dom.svg_node(child_struct_34342);
if(cljs.core.seq_QMARK_(children_34344)){
var seq__33849_34345 = cljs.core.seq(children_34344);
var chunk__33851_34346 = null;
var count__33852_34347 = (0);
var i__33853_34348 = (0);
while(true){
if((i__33853_34348 < count__33852_34347)){
var child_34349 = chunk__33851_34346.cljs$core$IIndexed$_nth$arity$2(null,i__33853_34348);
if(cljs.core.truth_(child_34349)){
node.appendChild(child_34349);


var G__34350 = seq__33849_34345;
var G__34351 = chunk__33851_34346;
var G__34352 = count__33852_34347;
var G__34353 = (i__33853_34348 + (1));
seq__33849_34345 = G__34350;
chunk__33851_34346 = G__34351;
count__33852_34347 = G__34352;
i__33853_34348 = G__34353;
continue;
} else {
var G__34354 = seq__33849_34345;
var G__34355 = chunk__33851_34346;
var G__34356 = count__33852_34347;
var G__34357 = (i__33853_34348 + (1));
seq__33849_34345 = G__34354;
chunk__33851_34346 = G__34355;
count__33852_34347 = G__34356;
i__33853_34348 = G__34357;
continue;
}
} else {
var temp__5735__auto___34358 = cljs.core.seq(seq__33849_34345);
if(temp__5735__auto___34358){
var seq__33849_34359__$1 = temp__5735__auto___34358;
if(cljs.core.chunked_seq_QMARK_(seq__33849_34359__$1)){
var c__4556__auto___34360 = cljs.core.chunk_first(seq__33849_34359__$1);
var G__34361 = cljs.core.chunk_rest(seq__33849_34359__$1);
var G__34362 = c__4556__auto___34360;
var G__34363 = cljs.core.count(c__4556__auto___34360);
var G__34364 = (0);
seq__33849_34345 = G__34361;
chunk__33851_34346 = G__34362;
count__33852_34347 = G__34363;
i__33853_34348 = G__34364;
continue;
} else {
var child_34365 = cljs.core.first(seq__33849_34359__$1);
if(cljs.core.truth_(child_34365)){
node.appendChild(child_34365);


var G__34366 = cljs.core.next(seq__33849_34359__$1);
var G__34367 = null;
var G__34368 = (0);
var G__34369 = (0);
seq__33849_34345 = G__34366;
chunk__33851_34346 = G__34367;
count__33852_34347 = G__34368;
i__33853_34348 = G__34369;
continue;
} else {
var G__34370 = cljs.core.next(seq__33849_34359__$1);
var G__34371 = null;
var G__34372 = (0);
var G__34373 = (0);
seq__33849_34345 = G__34370;
chunk__33851_34346 = G__34371;
count__33852_34347 = G__34372;
i__33853_34348 = G__34373;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34344);
}
}


var G__34389 = seq__33789_34338;
var G__34390 = chunk__33791_34339;
var G__34391 = count__33792_34340;
var G__34392 = (i__33793_34341 + (1));
seq__33789_34338 = G__34389;
chunk__33791_34339 = G__34390;
count__33792_34340 = G__34391;
i__33793_34341 = G__34392;
continue;
} else {
var G__34393 = seq__33789_34338;
var G__34394 = chunk__33791_34339;
var G__34395 = count__33792_34340;
var G__34396 = (i__33793_34341 + (1));
seq__33789_34338 = G__34393;
chunk__33791_34339 = G__34394;
count__33792_34340 = G__34395;
i__33793_34341 = G__34396;
continue;
}
} else {
var temp__5735__auto___34397 = cljs.core.seq(seq__33789_34338);
if(temp__5735__auto___34397){
var seq__33789_34398__$1 = temp__5735__auto___34397;
if(cljs.core.chunked_seq_QMARK_(seq__33789_34398__$1)){
var c__4556__auto___34399 = cljs.core.chunk_first(seq__33789_34398__$1);
var G__34400 = cljs.core.chunk_rest(seq__33789_34398__$1);
var G__34401 = c__4556__auto___34399;
var G__34402 = cljs.core.count(c__4556__auto___34399);
var G__34403 = (0);
seq__33789_34338 = G__34400;
chunk__33791_34339 = G__34401;
count__33792_34340 = G__34402;
i__33793_34341 = G__34403;
continue;
} else {
var child_struct_34404 = cljs.core.first(seq__33789_34398__$1);
if((!((child_struct_34404 == null)))){
if(typeof child_struct_34404 === 'string'){
var text_34405 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34405),child_struct_34404].join(''));
} else {
var children_34407 = shadow.dom.svg_node(child_struct_34404);
if(cljs.core.seq_QMARK_(children_34407)){
var seq__33856_34408 = cljs.core.seq(children_34407);
var chunk__33858_34409 = null;
var count__33859_34410 = (0);
var i__33860_34411 = (0);
while(true){
if((i__33860_34411 < count__33859_34410)){
var child_34412 = chunk__33858_34409.cljs$core$IIndexed$_nth$arity$2(null,i__33860_34411);
if(cljs.core.truth_(child_34412)){
node.appendChild(child_34412);


var G__34413 = seq__33856_34408;
var G__34414 = chunk__33858_34409;
var G__34415 = count__33859_34410;
var G__34416 = (i__33860_34411 + (1));
seq__33856_34408 = G__34413;
chunk__33858_34409 = G__34414;
count__33859_34410 = G__34415;
i__33860_34411 = G__34416;
continue;
} else {
var G__34417 = seq__33856_34408;
var G__34418 = chunk__33858_34409;
var G__34419 = count__33859_34410;
var G__34420 = (i__33860_34411 + (1));
seq__33856_34408 = G__34417;
chunk__33858_34409 = G__34418;
count__33859_34410 = G__34419;
i__33860_34411 = G__34420;
continue;
}
} else {
var temp__5735__auto___34422__$1 = cljs.core.seq(seq__33856_34408);
if(temp__5735__auto___34422__$1){
var seq__33856_34423__$1 = temp__5735__auto___34422__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33856_34423__$1)){
var c__4556__auto___34425 = cljs.core.chunk_first(seq__33856_34423__$1);
var G__34426 = cljs.core.chunk_rest(seq__33856_34423__$1);
var G__34427 = c__4556__auto___34425;
var G__34428 = cljs.core.count(c__4556__auto___34425);
var G__34429 = (0);
seq__33856_34408 = G__34426;
chunk__33858_34409 = G__34427;
count__33859_34410 = G__34428;
i__33860_34411 = G__34429;
continue;
} else {
var child_34430 = cljs.core.first(seq__33856_34423__$1);
if(cljs.core.truth_(child_34430)){
node.appendChild(child_34430);


var G__34431 = cljs.core.next(seq__33856_34423__$1);
var G__34432 = null;
var G__34433 = (0);
var G__34434 = (0);
seq__33856_34408 = G__34431;
chunk__33858_34409 = G__34432;
count__33859_34410 = G__34433;
i__33860_34411 = G__34434;
continue;
} else {
var G__34435 = cljs.core.next(seq__33856_34423__$1);
var G__34436 = null;
var G__34437 = (0);
var G__34438 = (0);
seq__33856_34408 = G__34435;
chunk__33858_34409 = G__34436;
count__33859_34410 = G__34437;
i__33860_34411 = G__34438;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34407);
}
}


var G__34439 = cljs.core.next(seq__33789_34398__$1);
var G__34440 = null;
var G__34441 = (0);
var G__34442 = (0);
seq__33789_34338 = G__34439;
chunk__33791_34339 = G__34440;
count__33792_34340 = G__34441;
i__33793_34341 = G__34442;
continue;
} else {
var G__34443 = cljs.core.next(seq__33789_34398__$1);
var G__34444 = null;
var G__34445 = (0);
var G__34446 = (0);
seq__33789_34338 = G__34443;
chunk__33791_34339 = G__34444;
count__33792_34340 = G__34445;
i__33793_34341 = G__34446;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34447 = arguments.length;
var i__4737__auto___34448 = (0);
while(true){
if((i__4737__auto___34448 < len__4736__auto___34447)){
args__4742__auto__.push((arguments[i__4737__auto___34448]));

var G__34449 = (i__4737__auto___34448 + (1));
i__4737__auto___34448 = G__34449;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33869){
var G__33870 = cljs.core.first(seq33869);
var seq33869__$1 = cljs.core.next(seq33869);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33870,seq33869__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33877 = arguments.length;
switch (G__33877) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__30947__auto___34457 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30948__auto__ = (function (){var switch__30766__auto__ = (function (state_33882){
var state_val_33883 = (state_33882[(1)]);
if((state_val_33883 === (1))){
var state_33882__$1 = state_33882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33882__$1,(2),once_or_cleanup);
} else {
if((state_val_33883 === (2))){
var inst_33879 = (state_33882[(2)]);
var inst_33880 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33882__$1 = (function (){var statearr_33895 = state_33882;
(statearr_33895[(7)] = inst_33879);

return statearr_33895;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33882__$1,inst_33880);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30767__auto__ = null;
var shadow$dom$state_machine__30767__auto____0 = (function (){
var statearr_33896 = [null,null,null,null,null,null,null,null];
(statearr_33896[(0)] = shadow$dom$state_machine__30767__auto__);

(statearr_33896[(1)] = (1));

return statearr_33896;
});
var shadow$dom$state_machine__30767__auto____1 = (function (state_33882){
while(true){
var ret_value__30768__auto__ = (function (){try{while(true){
var result__30769__auto__ = switch__30766__auto__(state_33882);
if(cljs.core.keyword_identical_QMARK_(result__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30769__auto__;
}
break;
}
}catch (e33897){var ex__30770__auto__ = e33897;
var statearr_33898_34463 = state_33882;
(statearr_33898_34463[(2)] = ex__30770__auto__);


if(cljs.core.seq((state_33882[(4)]))){
var statearr_33899_34464 = state_33882;
(statearr_33899_34464[(1)] = cljs.core.first((state_33882[(4)])));

} else {
throw ex__30770__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34465 = state_33882;
state_33882 = G__34465;
continue;
} else {
return ret_value__30768__auto__;
}
break;
}
});
shadow$dom$state_machine__30767__auto__ = function(state_33882){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30767__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30767__auto____1.call(this,state_33882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30767__auto____0;
shadow$dom$state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30767__auto____1;
return shadow$dom$state_machine__30767__auto__;
})()
})();
var state__30949__auto__ = (function (){var statearr_33900 = f__30948__auto__();
(statearr_33900[(6)] = c__30947__auto___34457);

return statearr_33900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30949__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
