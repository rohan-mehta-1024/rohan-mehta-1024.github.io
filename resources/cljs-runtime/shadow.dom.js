goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33942 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_33942(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33943 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_33943(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33264 = coll;
var G__33265 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33264,G__33265) : shadow.dom.lazy_native_coll_seq.call(null,G__33264,G__33265));
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
var G__33268 = arguments.length;
switch (G__33268) {
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
var G__33270 = arguments.length;
switch (G__33270) {
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
var G__33272 = arguments.length;
switch (G__33272) {
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
var G__33275 = arguments.length;
switch (G__33275) {
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
var G__33277 = arguments.length;
switch (G__33277) {
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
var G__33279 = arguments.length;
switch (G__33279) {
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
}catch (e33280){if((e33280 instanceof Object)){
var e = e33280;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33280;

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
var seq__33282 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33283 = null;
var count__33284 = (0);
var i__33285 = (0);
while(true){
if((i__33285 < count__33284)){
var el = chunk__33283.cljs$core$IIndexed$_nth$arity$2(null,i__33285);
var handler_33976__$1 = ((function (seq__33282,chunk__33283,count__33284,i__33285,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33282,chunk__33283,count__33284,i__33285,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33976__$1);


var G__33977 = seq__33282;
var G__33978 = chunk__33283;
var G__33979 = count__33284;
var G__33980 = (i__33285 + (1));
seq__33282 = G__33977;
chunk__33283 = G__33978;
count__33284 = G__33979;
i__33285 = G__33980;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33282);
if(temp__5735__auto__){
var seq__33282__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33282__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33282__$1);
var G__33983 = cljs.core.chunk_rest(seq__33282__$1);
var G__33984 = c__4556__auto__;
var G__33985 = cljs.core.count(c__4556__auto__);
var G__33986 = (0);
seq__33282 = G__33983;
chunk__33283 = G__33984;
count__33284 = G__33985;
i__33285 = G__33986;
continue;
} else {
var el = cljs.core.first(seq__33282__$1);
var handler_33987__$1 = ((function (seq__33282,chunk__33283,count__33284,i__33285,el,seq__33282__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33282,chunk__33283,count__33284,i__33285,el,seq__33282__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33987__$1);


var G__33988 = cljs.core.next(seq__33282__$1);
var G__33989 = null;
var G__33990 = (0);
var G__33991 = (0);
seq__33282 = G__33988;
chunk__33283 = G__33989;
count__33284 = G__33990;
i__33285 = G__33991;
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
var G__33290 = arguments.length;
switch (G__33290) {
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
var seq__33291 = cljs.core.seq(events);
var chunk__33292 = null;
var count__33293 = (0);
var i__33294 = (0);
while(true){
if((i__33294 < count__33293)){
var vec__33301 = chunk__33292.cljs$core$IIndexed$_nth$arity$2(null,i__33294);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33301,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33301,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33995 = seq__33291;
var G__33996 = chunk__33292;
var G__33997 = count__33293;
var G__33998 = (i__33294 + (1));
seq__33291 = G__33995;
chunk__33292 = G__33996;
count__33293 = G__33997;
i__33294 = G__33998;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33291);
if(temp__5735__auto__){
var seq__33291__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33291__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33291__$1);
var G__34004 = cljs.core.chunk_rest(seq__33291__$1);
var G__34005 = c__4556__auto__;
var G__34006 = cljs.core.count(c__4556__auto__);
var G__34007 = (0);
seq__33291 = G__34004;
chunk__33292 = G__34005;
count__33293 = G__34006;
i__33294 = G__34007;
continue;
} else {
var vec__33304 = cljs.core.first(seq__33291__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33304,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33304,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34008 = cljs.core.next(seq__33291__$1);
var G__34009 = null;
var G__34010 = (0);
var G__34011 = (0);
seq__33291 = G__34008;
chunk__33292 = G__34009;
count__33293 = G__34010;
i__33294 = G__34011;
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
var seq__33307 = cljs.core.seq(styles);
var chunk__33308 = null;
var count__33309 = (0);
var i__33310 = (0);
while(true){
if((i__33310 < count__33309)){
var vec__33321 = chunk__33308.cljs$core$IIndexed$_nth$arity$2(null,i__33310);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33321,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33321,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34017 = seq__33307;
var G__34018 = chunk__33308;
var G__34019 = count__33309;
var G__34020 = (i__33310 + (1));
seq__33307 = G__34017;
chunk__33308 = G__34018;
count__33309 = G__34019;
i__33310 = G__34020;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33307);
if(temp__5735__auto__){
var seq__33307__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33307__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33307__$1);
var G__34021 = cljs.core.chunk_rest(seq__33307__$1);
var G__34022 = c__4556__auto__;
var G__34023 = cljs.core.count(c__4556__auto__);
var G__34024 = (0);
seq__33307 = G__34021;
chunk__33308 = G__34022;
count__33309 = G__34023;
i__33310 = G__34024;
continue;
} else {
var vec__33338 = cljs.core.first(seq__33307__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33338,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33338,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34026 = cljs.core.next(seq__33307__$1);
var G__34027 = null;
var G__34028 = (0);
var G__34029 = (0);
seq__33307 = G__34026;
chunk__33308 = G__34027;
count__33309 = G__34028;
i__33310 = G__34029;
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
var G__33347_34031 = key;
var G__33347_34032__$1 = (((G__33347_34031 instanceof cljs.core.Keyword))?G__33347_34031.fqn:null);
switch (G__33347_34032__$1) {
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
var ks_34037 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_34037,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_34037,"aria-");
}
})())){
el.setAttribute(ks_34037,value);
} else {
(el[ks_34037] = value);
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
var G__33367 = arguments.length;
switch (G__33367) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33375){
var vec__33376 = p__33375;
var seq__33377 = cljs.core.seq(vec__33376);
var first__33378 = cljs.core.first(seq__33377);
var seq__33377__$1 = cljs.core.next(seq__33377);
var nn = first__33378;
var first__33378__$1 = cljs.core.first(seq__33377__$1);
var seq__33377__$2 = cljs.core.next(seq__33377__$1);
var np = first__33378__$1;
var nc = seq__33377__$2;
var node = vec__33376;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33388 = nn;
var G__33389 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33388,G__33389) : create_fn.call(null,G__33388,G__33389));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33390 = nn;
var G__33391 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33390,G__33391) : create_fn.call(null,G__33390,G__33391));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33392 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33392,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33392,(1),null);
var seq__33395_34096 = cljs.core.seq(node_children);
var chunk__33396_34097 = null;
var count__33397_34098 = (0);
var i__33398_34099 = (0);
while(true){
if((i__33398_34099 < count__33397_34098)){
var child_struct_34100 = chunk__33396_34097.cljs$core$IIndexed$_nth$arity$2(null,i__33398_34099);
var children_34101 = shadow.dom.dom_node(child_struct_34100);
if(cljs.core.seq_QMARK_(children_34101)){
var seq__33422_34102 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34101));
var chunk__33424_34103 = null;
var count__33425_34104 = (0);
var i__33426_34105 = (0);
while(true){
if((i__33426_34105 < count__33425_34104)){
var child_34107 = chunk__33424_34103.cljs$core$IIndexed$_nth$arity$2(null,i__33426_34105);
if(cljs.core.truth_(child_34107)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34107);


var G__34108 = seq__33422_34102;
var G__34109 = chunk__33424_34103;
var G__34110 = count__33425_34104;
var G__34111 = (i__33426_34105 + (1));
seq__33422_34102 = G__34108;
chunk__33424_34103 = G__34109;
count__33425_34104 = G__34110;
i__33426_34105 = G__34111;
continue;
} else {
var G__34112 = seq__33422_34102;
var G__34113 = chunk__33424_34103;
var G__34114 = count__33425_34104;
var G__34115 = (i__33426_34105 + (1));
seq__33422_34102 = G__34112;
chunk__33424_34103 = G__34113;
count__33425_34104 = G__34114;
i__33426_34105 = G__34115;
continue;
}
} else {
var temp__5735__auto___34116 = cljs.core.seq(seq__33422_34102);
if(temp__5735__auto___34116){
var seq__33422_34123__$1 = temp__5735__auto___34116;
if(cljs.core.chunked_seq_QMARK_(seq__33422_34123__$1)){
var c__4556__auto___34124 = cljs.core.chunk_first(seq__33422_34123__$1);
var G__34125 = cljs.core.chunk_rest(seq__33422_34123__$1);
var G__34126 = c__4556__auto___34124;
var G__34127 = cljs.core.count(c__4556__auto___34124);
var G__34128 = (0);
seq__33422_34102 = G__34125;
chunk__33424_34103 = G__34126;
count__33425_34104 = G__34127;
i__33426_34105 = G__34128;
continue;
} else {
var child_34129 = cljs.core.first(seq__33422_34123__$1);
if(cljs.core.truth_(child_34129)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34129);


var G__34130 = cljs.core.next(seq__33422_34123__$1);
var G__34131 = null;
var G__34132 = (0);
var G__34133 = (0);
seq__33422_34102 = G__34130;
chunk__33424_34103 = G__34131;
count__33425_34104 = G__34132;
i__33426_34105 = G__34133;
continue;
} else {
var G__34134 = cljs.core.next(seq__33422_34123__$1);
var G__34135 = null;
var G__34136 = (0);
var G__34137 = (0);
seq__33422_34102 = G__34134;
chunk__33424_34103 = G__34135;
count__33425_34104 = G__34136;
i__33426_34105 = G__34137;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34101);
}


var G__34138 = seq__33395_34096;
var G__34139 = chunk__33396_34097;
var G__34140 = count__33397_34098;
var G__34141 = (i__33398_34099 + (1));
seq__33395_34096 = G__34138;
chunk__33396_34097 = G__34139;
count__33397_34098 = G__34140;
i__33398_34099 = G__34141;
continue;
} else {
var temp__5735__auto___34142 = cljs.core.seq(seq__33395_34096);
if(temp__5735__auto___34142){
var seq__33395_34143__$1 = temp__5735__auto___34142;
if(cljs.core.chunked_seq_QMARK_(seq__33395_34143__$1)){
var c__4556__auto___34144 = cljs.core.chunk_first(seq__33395_34143__$1);
var G__34145 = cljs.core.chunk_rest(seq__33395_34143__$1);
var G__34146 = c__4556__auto___34144;
var G__34147 = cljs.core.count(c__4556__auto___34144);
var G__34148 = (0);
seq__33395_34096 = G__34145;
chunk__33396_34097 = G__34146;
count__33397_34098 = G__34147;
i__33398_34099 = G__34148;
continue;
} else {
var child_struct_34149 = cljs.core.first(seq__33395_34143__$1);
var children_34150 = shadow.dom.dom_node(child_struct_34149);
if(cljs.core.seq_QMARK_(children_34150)){
var seq__33455_34151 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34150));
var chunk__33457_34152 = null;
var count__33458_34153 = (0);
var i__33459_34154 = (0);
while(true){
if((i__33459_34154 < count__33458_34153)){
var child_34155 = chunk__33457_34152.cljs$core$IIndexed$_nth$arity$2(null,i__33459_34154);
if(cljs.core.truth_(child_34155)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34155);


var G__34156 = seq__33455_34151;
var G__34157 = chunk__33457_34152;
var G__34158 = count__33458_34153;
var G__34159 = (i__33459_34154 + (1));
seq__33455_34151 = G__34156;
chunk__33457_34152 = G__34157;
count__33458_34153 = G__34158;
i__33459_34154 = G__34159;
continue;
} else {
var G__34160 = seq__33455_34151;
var G__34161 = chunk__33457_34152;
var G__34162 = count__33458_34153;
var G__34163 = (i__33459_34154 + (1));
seq__33455_34151 = G__34160;
chunk__33457_34152 = G__34161;
count__33458_34153 = G__34162;
i__33459_34154 = G__34163;
continue;
}
} else {
var temp__5735__auto___34164__$1 = cljs.core.seq(seq__33455_34151);
if(temp__5735__auto___34164__$1){
var seq__33455_34165__$1 = temp__5735__auto___34164__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33455_34165__$1)){
var c__4556__auto___34166 = cljs.core.chunk_first(seq__33455_34165__$1);
var G__34167 = cljs.core.chunk_rest(seq__33455_34165__$1);
var G__34168 = c__4556__auto___34166;
var G__34169 = cljs.core.count(c__4556__auto___34166);
var G__34170 = (0);
seq__33455_34151 = G__34167;
chunk__33457_34152 = G__34168;
count__33458_34153 = G__34169;
i__33459_34154 = G__34170;
continue;
} else {
var child_34177 = cljs.core.first(seq__33455_34165__$1);
if(cljs.core.truth_(child_34177)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34177);


var G__34178 = cljs.core.next(seq__33455_34165__$1);
var G__34179 = null;
var G__34180 = (0);
var G__34181 = (0);
seq__33455_34151 = G__34178;
chunk__33457_34152 = G__34179;
count__33458_34153 = G__34180;
i__33459_34154 = G__34181;
continue;
} else {
var G__34182 = cljs.core.next(seq__33455_34165__$1);
var G__34183 = null;
var G__34184 = (0);
var G__34185 = (0);
seq__33455_34151 = G__34182;
chunk__33457_34152 = G__34183;
count__33458_34153 = G__34184;
i__33459_34154 = G__34185;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34150);
}


var G__34186 = cljs.core.next(seq__33395_34143__$1);
var G__34187 = null;
var G__34188 = (0);
var G__34189 = (0);
seq__33395_34096 = G__34186;
chunk__33396_34097 = G__34187;
count__33397_34098 = G__34188;
i__33398_34099 = G__34189;
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
var seq__33482 = cljs.core.seq(node);
var chunk__33483 = null;
var count__33484 = (0);
var i__33485 = (0);
while(true){
if((i__33485 < count__33484)){
var n = chunk__33483.cljs$core$IIndexed$_nth$arity$2(null,i__33485);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34190 = seq__33482;
var G__34191 = chunk__33483;
var G__34192 = count__33484;
var G__34193 = (i__33485 + (1));
seq__33482 = G__34190;
chunk__33483 = G__34191;
count__33484 = G__34192;
i__33485 = G__34193;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33482);
if(temp__5735__auto__){
var seq__33482__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33482__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33482__$1);
var G__34199 = cljs.core.chunk_rest(seq__33482__$1);
var G__34200 = c__4556__auto__;
var G__34201 = cljs.core.count(c__4556__auto__);
var G__34202 = (0);
seq__33482 = G__34199;
chunk__33483 = G__34200;
count__33484 = G__34201;
i__33485 = G__34202;
continue;
} else {
var n = cljs.core.first(seq__33482__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34203 = cljs.core.next(seq__33482__$1);
var G__34204 = null;
var G__34205 = (0);
var G__34206 = (0);
seq__33482 = G__34203;
chunk__33483 = G__34204;
count__33484 = G__34205;
i__33485 = G__34206;
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
var G__33494 = arguments.length;
switch (G__33494) {
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
var G__33501 = arguments.length;
switch (G__33501) {
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
var G__33519 = arguments.length;
switch (G__33519) {
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
var len__4736__auto___34217 = arguments.length;
var i__4737__auto___34218 = (0);
while(true){
if((i__4737__auto___34218 < len__4736__auto___34217)){
args__4742__auto__.push((arguments[i__4737__auto___34218]));

var G__34219 = (i__4737__auto___34218 + (1));
i__4737__auto___34218 = G__34219;
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
var seq__33528_34222 = cljs.core.seq(nodes);
var chunk__33529_34223 = null;
var count__33530_34224 = (0);
var i__33531_34225 = (0);
while(true){
if((i__33531_34225 < count__33530_34224)){
var node_34226 = chunk__33529_34223.cljs$core$IIndexed$_nth$arity$2(null,i__33531_34225);
fragment.appendChild(shadow.dom._to_dom(node_34226));


var G__34228 = seq__33528_34222;
var G__34229 = chunk__33529_34223;
var G__34230 = count__33530_34224;
var G__34231 = (i__33531_34225 + (1));
seq__33528_34222 = G__34228;
chunk__33529_34223 = G__34229;
count__33530_34224 = G__34230;
i__33531_34225 = G__34231;
continue;
} else {
var temp__5735__auto___34232 = cljs.core.seq(seq__33528_34222);
if(temp__5735__auto___34232){
var seq__33528_34234__$1 = temp__5735__auto___34232;
if(cljs.core.chunked_seq_QMARK_(seq__33528_34234__$1)){
var c__4556__auto___34235 = cljs.core.chunk_first(seq__33528_34234__$1);
var G__34236 = cljs.core.chunk_rest(seq__33528_34234__$1);
var G__34237 = c__4556__auto___34235;
var G__34238 = cljs.core.count(c__4556__auto___34235);
var G__34239 = (0);
seq__33528_34222 = G__34236;
chunk__33529_34223 = G__34237;
count__33530_34224 = G__34238;
i__33531_34225 = G__34239;
continue;
} else {
var node_34243 = cljs.core.first(seq__33528_34234__$1);
fragment.appendChild(shadow.dom._to_dom(node_34243));


var G__34244 = cljs.core.next(seq__33528_34234__$1);
var G__34245 = null;
var G__34246 = (0);
var G__34247 = (0);
seq__33528_34222 = G__34244;
chunk__33529_34223 = G__34245;
count__33530_34224 = G__34246;
i__33531_34225 = G__34247;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33524){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33524));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33542_34248 = cljs.core.seq(scripts);
var chunk__33543_34249 = null;
var count__33544_34250 = (0);
var i__33545_34251 = (0);
while(true){
if((i__33545_34251 < count__33544_34250)){
var vec__33577_34252 = chunk__33543_34249.cljs$core$IIndexed$_nth$arity$2(null,i__33545_34251);
var script_tag_34253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33577_34252,(0),null);
var script_body_34254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33577_34252,(1),null);
eval(script_body_34254);


var G__34255 = seq__33542_34248;
var G__34256 = chunk__33543_34249;
var G__34257 = count__33544_34250;
var G__34258 = (i__33545_34251 + (1));
seq__33542_34248 = G__34255;
chunk__33543_34249 = G__34256;
count__33544_34250 = G__34257;
i__33545_34251 = G__34258;
continue;
} else {
var temp__5735__auto___34259 = cljs.core.seq(seq__33542_34248);
if(temp__5735__auto___34259){
var seq__33542_34260__$1 = temp__5735__auto___34259;
if(cljs.core.chunked_seq_QMARK_(seq__33542_34260__$1)){
var c__4556__auto___34261 = cljs.core.chunk_first(seq__33542_34260__$1);
var G__34262 = cljs.core.chunk_rest(seq__33542_34260__$1);
var G__34263 = c__4556__auto___34261;
var G__34264 = cljs.core.count(c__4556__auto___34261);
var G__34265 = (0);
seq__33542_34248 = G__34262;
chunk__33543_34249 = G__34263;
count__33544_34250 = G__34264;
i__33545_34251 = G__34265;
continue;
} else {
var vec__33581_34266 = cljs.core.first(seq__33542_34260__$1);
var script_tag_34267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33581_34266,(0),null);
var script_body_34268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33581_34266,(1),null);
eval(script_body_34268);


var G__34269 = cljs.core.next(seq__33542_34260__$1);
var G__34270 = null;
var G__34271 = (0);
var G__34272 = (0);
seq__33542_34248 = G__34269;
chunk__33543_34249 = G__34270;
count__33544_34250 = G__34271;
i__33545_34251 = G__34272;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33584){
var vec__33585 = p__33584;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33585,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33585,(1),null);
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
var G__33589 = arguments.length;
switch (G__33589) {
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
var seq__33612 = cljs.core.seq(style_keys);
var chunk__33613 = null;
var count__33614 = (0);
var i__33615 = (0);
while(true){
if((i__33615 < count__33614)){
var it = chunk__33613.cljs$core$IIndexed$_nth$arity$2(null,i__33615);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34274 = seq__33612;
var G__34275 = chunk__33613;
var G__34276 = count__33614;
var G__34277 = (i__33615 + (1));
seq__33612 = G__34274;
chunk__33613 = G__34275;
count__33614 = G__34276;
i__33615 = G__34277;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33612);
if(temp__5735__auto__){
var seq__33612__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33612__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33612__$1);
var G__34278 = cljs.core.chunk_rest(seq__33612__$1);
var G__34279 = c__4556__auto__;
var G__34280 = cljs.core.count(c__4556__auto__);
var G__34281 = (0);
seq__33612 = G__34278;
chunk__33613 = G__34279;
count__33614 = G__34280;
i__33615 = G__34281;
continue;
} else {
var it = cljs.core.first(seq__33612__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34282 = cljs.core.next(seq__33612__$1);
var G__34283 = null;
var G__34284 = (0);
var G__34285 = (0);
seq__33612 = G__34282;
chunk__33613 = G__34283;
count__33614 = G__34284;
i__33615 = G__34285;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33620,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33639 = k33620;
var G__33639__$1 = (((G__33639 instanceof cljs.core.Keyword))?G__33639.fqn:null);
switch (G__33639__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33620,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33640){
var vec__33641 = p__33640;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33641,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33641,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33619){
var self__ = this;
var G__33619__$1 = this;
return (new cljs.core.RecordIter((0),G__33619__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33621,other33622){
var self__ = this;
var this33621__$1 = this;
return (((!((other33622 == null)))) && ((this33621__$1.constructor === other33622.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33621__$1.x,other33622.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33621__$1.y,other33622.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33621__$1.__extmap,other33622.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33619){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33678 = cljs.core.keyword_identical_QMARK_;
var expr__33679 = k__4388__auto__;
if(cljs.core.truth_((pred__33678.cljs$core$IFn$_invoke$arity$2 ? pred__33678.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33679) : pred__33678.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33679)))){
return (new shadow.dom.Coordinate(G__33619,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33678.cljs$core$IFn$_invoke$arity$2 ? pred__33678.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33679) : pred__33678.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33679)))){
return (new shadow.dom.Coordinate(self__.x,G__33619,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33619),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33619){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33619,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33633){
var extmap__4419__auto__ = (function (){var G__33687 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33633,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33633)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33687);
} else {
return G__33687;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33633),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33633),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33690,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33695 = k33690;
var G__33695__$1 = (((G__33695 instanceof cljs.core.Keyword))?G__33695.fqn:null);
switch (G__33695__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33690,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33705){
var vec__33706 = p__33705;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33706,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33706,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33689){
var self__ = this;
var G__33689__$1 = this;
return (new cljs.core.RecordIter((0),G__33689__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33691,other33692){
var self__ = this;
var this33691__$1 = this;
return (((!((other33692 == null)))) && ((this33691__$1.constructor === other33692.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33691__$1.w,other33692.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33691__$1.h,other33692.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33691__$1.__extmap,other33692.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33689){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33722 = cljs.core.keyword_identical_QMARK_;
var expr__33723 = k__4388__auto__;
if(cljs.core.truth_((pred__33722.cljs$core$IFn$_invoke$arity$2 ? pred__33722.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33723) : pred__33722.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33723)))){
return (new shadow.dom.Size(G__33689,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33722.cljs$core$IFn$_invoke$arity$2 ? pred__33722.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33723) : pred__33722.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33723)))){
return (new shadow.dom.Size(self__.w,G__33689,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33689),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33689){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33689,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33694){
var extmap__4419__auto__ = (function (){var G__33731 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33694,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33694)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33731);
} else {
return G__33731;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33694),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33694),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__34321 = (i + (1));
var G__34322 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34321;
ret = G__34322;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33753){
var vec__33754 = p__33753;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33754,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33754,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33758 = arguments.length;
switch (G__33758) {
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
var G__34330 = ps;
var G__34331 = (i + (1));
el__$1 = G__34330;
i = G__34331;
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
var vec__33759 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33759,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33759,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33759,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33762_34340 = cljs.core.seq(props);
var chunk__33763_34341 = null;
var count__33764_34342 = (0);
var i__33765_34343 = (0);
while(true){
if((i__33765_34343 < count__33764_34342)){
var vec__33772_34344 = chunk__33763_34341.cljs$core$IIndexed$_nth$arity$2(null,i__33765_34343);
var k_34345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33772_34344,(0),null);
var v_34346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33772_34344,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34345);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34345),v_34346);


var G__34350 = seq__33762_34340;
var G__34351 = chunk__33763_34341;
var G__34352 = count__33764_34342;
var G__34353 = (i__33765_34343 + (1));
seq__33762_34340 = G__34350;
chunk__33763_34341 = G__34351;
count__33764_34342 = G__34352;
i__33765_34343 = G__34353;
continue;
} else {
var temp__5735__auto___34354 = cljs.core.seq(seq__33762_34340);
if(temp__5735__auto___34354){
var seq__33762_34355__$1 = temp__5735__auto___34354;
if(cljs.core.chunked_seq_QMARK_(seq__33762_34355__$1)){
var c__4556__auto___34356 = cljs.core.chunk_first(seq__33762_34355__$1);
var G__34357 = cljs.core.chunk_rest(seq__33762_34355__$1);
var G__34358 = c__4556__auto___34356;
var G__34359 = cljs.core.count(c__4556__auto___34356);
var G__34360 = (0);
seq__33762_34340 = G__34357;
chunk__33763_34341 = G__34358;
count__33764_34342 = G__34359;
i__33765_34343 = G__34360;
continue;
} else {
var vec__33777_34361 = cljs.core.first(seq__33762_34355__$1);
var k_34362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33777_34361,(0),null);
var v_34363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33777_34361,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34362);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34362),v_34363);


var G__34366 = cljs.core.next(seq__33762_34355__$1);
var G__34367 = null;
var G__34368 = (0);
var G__34369 = (0);
seq__33762_34340 = G__34366;
chunk__33763_34341 = G__34367;
count__33764_34342 = G__34368;
i__33765_34343 = G__34369;
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
var vec__33789 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33789,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33789,(1),null);
var seq__33792_34371 = cljs.core.seq(node_children);
var chunk__33794_34372 = null;
var count__33795_34373 = (0);
var i__33796_34374 = (0);
while(true){
if((i__33796_34374 < count__33795_34373)){
var child_struct_34375 = chunk__33794_34372.cljs$core$IIndexed$_nth$arity$2(null,i__33796_34374);
if((!((child_struct_34375 == null)))){
if(typeof child_struct_34375 === 'string'){
var text_34378 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34378),child_struct_34375].join(''));
} else {
var children_34379 = shadow.dom.svg_node(child_struct_34375);
if(cljs.core.seq_QMARK_(children_34379)){
var seq__33865_34380 = cljs.core.seq(children_34379);
var chunk__33867_34381 = null;
var count__33868_34382 = (0);
var i__33869_34383 = (0);
while(true){
if((i__33869_34383 < count__33868_34382)){
var child_34384 = chunk__33867_34381.cljs$core$IIndexed$_nth$arity$2(null,i__33869_34383);
if(cljs.core.truth_(child_34384)){
node.appendChild(child_34384);


var G__34385 = seq__33865_34380;
var G__34386 = chunk__33867_34381;
var G__34387 = count__33868_34382;
var G__34388 = (i__33869_34383 + (1));
seq__33865_34380 = G__34385;
chunk__33867_34381 = G__34386;
count__33868_34382 = G__34387;
i__33869_34383 = G__34388;
continue;
} else {
var G__34389 = seq__33865_34380;
var G__34390 = chunk__33867_34381;
var G__34391 = count__33868_34382;
var G__34392 = (i__33869_34383 + (1));
seq__33865_34380 = G__34389;
chunk__33867_34381 = G__34390;
count__33868_34382 = G__34391;
i__33869_34383 = G__34392;
continue;
}
} else {
var temp__5735__auto___34393 = cljs.core.seq(seq__33865_34380);
if(temp__5735__auto___34393){
var seq__33865_34394__$1 = temp__5735__auto___34393;
if(cljs.core.chunked_seq_QMARK_(seq__33865_34394__$1)){
var c__4556__auto___34395 = cljs.core.chunk_first(seq__33865_34394__$1);
var G__34396 = cljs.core.chunk_rest(seq__33865_34394__$1);
var G__34397 = c__4556__auto___34395;
var G__34398 = cljs.core.count(c__4556__auto___34395);
var G__34399 = (0);
seq__33865_34380 = G__34396;
chunk__33867_34381 = G__34397;
count__33868_34382 = G__34398;
i__33869_34383 = G__34399;
continue;
} else {
var child_34400 = cljs.core.first(seq__33865_34394__$1);
if(cljs.core.truth_(child_34400)){
node.appendChild(child_34400);


var G__34401 = cljs.core.next(seq__33865_34394__$1);
var G__34402 = null;
var G__34403 = (0);
var G__34404 = (0);
seq__33865_34380 = G__34401;
chunk__33867_34381 = G__34402;
count__33868_34382 = G__34403;
i__33869_34383 = G__34404;
continue;
} else {
var G__34405 = cljs.core.next(seq__33865_34394__$1);
var G__34406 = null;
var G__34407 = (0);
var G__34408 = (0);
seq__33865_34380 = G__34405;
chunk__33867_34381 = G__34406;
count__33868_34382 = G__34407;
i__33869_34383 = G__34408;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34379);
}
}


var G__34409 = seq__33792_34371;
var G__34410 = chunk__33794_34372;
var G__34411 = count__33795_34373;
var G__34412 = (i__33796_34374 + (1));
seq__33792_34371 = G__34409;
chunk__33794_34372 = G__34410;
count__33795_34373 = G__34411;
i__33796_34374 = G__34412;
continue;
} else {
var G__34413 = seq__33792_34371;
var G__34414 = chunk__33794_34372;
var G__34415 = count__33795_34373;
var G__34416 = (i__33796_34374 + (1));
seq__33792_34371 = G__34413;
chunk__33794_34372 = G__34414;
count__33795_34373 = G__34415;
i__33796_34374 = G__34416;
continue;
}
} else {
var temp__5735__auto___34417 = cljs.core.seq(seq__33792_34371);
if(temp__5735__auto___34417){
var seq__33792_34418__$1 = temp__5735__auto___34417;
if(cljs.core.chunked_seq_QMARK_(seq__33792_34418__$1)){
var c__4556__auto___34419 = cljs.core.chunk_first(seq__33792_34418__$1);
var G__34420 = cljs.core.chunk_rest(seq__33792_34418__$1);
var G__34421 = c__4556__auto___34419;
var G__34422 = cljs.core.count(c__4556__auto___34419);
var G__34423 = (0);
seq__33792_34371 = G__34420;
chunk__33794_34372 = G__34421;
count__33795_34373 = G__34422;
i__33796_34374 = G__34423;
continue;
} else {
var child_struct_34424 = cljs.core.first(seq__33792_34418__$1);
if((!((child_struct_34424 == null)))){
if(typeof child_struct_34424 === 'string'){
var text_34442 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34442),child_struct_34424].join(''));
} else {
var children_34444 = shadow.dom.svg_node(child_struct_34424);
if(cljs.core.seq_QMARK_(children_34444)){
var seq__33871_34445 = cljs.core.seq(children_34444);
var chunk__33873_34446 = null;
var count__33874_34447 = (0);
var i__33875_34448 = (0);
while(true){
if((i__33875_34448 < count__33874_34447)){
var child_34449 = chunk__33873_34446.cljs$core$IIndexed$_nth$arity$2(null,i__33875_34448);
if(cljs.core.truth_(child_34449)){
node.appendChild(child_34449);


var G__34450 = seq__33871_34445;
var G__34451 = chunk__33873_34446;
var G__34452 = count__33874_34447;
var G__34453 = (i__33875_34448 + (1));
seq__33871_34445 = G__34450;
chunk__33873_34446 = G__34451;
count__33874_34447 = G__34452;
i__33875_34448 = G__34453;
continue;
} else {
var G__34454 = seq__33871_34445;
var G__34455 = chunk__33873_34446;
var G__34456 = count__33874_34447;
var G__34457 = (i__33875_34448 + (1));
seq__33871_34445 = G__34454;
chunk__33873_34446 = G__34455;
count__33874_34447 = G__34456;
i__33875_34448 = G__34457;
continue;
}
} else {
var temp__5735__auto___34458__$1 = cljs.core.seq(seq__33871_34445);
if(temp__5735__auto___34458__$1){
var seq__33871_34459__$1 = temp__5735__auto___34458__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33871_34459__$1)){
var c__4556__auto___34460 = cljs.core.chunk_first(seq__33871_34459__$1);
var G__34461 = cljs.core.chunk_rest(seq__33871_34459__$1);
var G__34462 = c__4556__auto___34460;
var G__34463 = cljs.core.count(c__4556__auto___34460);
var G__34464 = (0);
seq__33871_34445 = G__34461;
chunk__33873_34446 = G__34462;
count__33874_34447 = G__34463;
i__33875_34448 = G__34464;
continue;
} else {
var child_34465 = cljs.core.first(seq__33871_34459__$1);
if(cljs.core.truth_(child_34465)){
node.appendChild(child_34465);


var G__34467 = cljs.core.next(seq__33871_34459__$1);
var G__34468 = null;
var G__34469 = (0);
var G__34470 = (0);
seq__33871_34445 = G__34467;
chunk__33873_34446 = G__34468;
count__33874_34447 = G__34469;
i__33875_34448 = G__34470;
continue;
} else {
var G__34471 = cljs.core.next(seq__33871_34459__$1);
var G__34472 = null;
var G__34473 = (0);
var G__34474 = (0);
seq__33871_34445 = G__34471;
chunk__33873_34446 = G__34472;
count__33874_34447 = G__34473;
i__33875_34448 = G__34474;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34444);
}
}


var G__34476 = cljs.core.next(seq__33792_34418__$1);
var G__34477 = null;
var G__34478 = (0);
var G__34479 = (0);
seq__33792_34371 = G__34476;
chunk__33794_34372 = G__34477;
count__33795_34373 = G__34478;
i__33796_34374 = G__34479;
continue;
} else {
var G__34480 = cljs.core.next(seq__33792_34418__$1);
var G__34481 = null;
var G__34482 = (0);
var G__34483 = (0);
seq__33792_34371 = G__34480;
chunk__33794_34372 = G__34481;
count__33795_34373 = G__34482;
i__33796_34374 = G__34483;
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
var len__4736__auto___34484 = arguments.length;
var i__4737__auto___34485 = (0);
while(true){
if((i__4737__auto___34485 < len__4736__auto___34484)){
args__4742__auto__.push((arguments[i__4737__auto___34485]));

var G__34486 = (i__4737__auto___34485 + (1));
i__4737__auto___34485 = G__34486;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33877){
var G__33878 = cljs.core.first(seq33877);
var seq33877__$1 = cljs.core.next(seq33877);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33878,seq33877__$1);
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
var G__33880 = arguments.length;
switch (G__33880) {
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
var c__30874__auto___34494 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30875__auto__ = (function (){var switch__30689__auto__ = (function (state_33904){
var state_val_33905 = (state_33904[(1)]);
if((state_val_33905 === (1))){
var state_33904__$1 = state_33904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33904__$1,(2),once_or_cleanup);
} else {
if((state_val_33905 === (2))){
var inst_33901 = (state_33904[(2)]);
var inst_33902 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33904__$1 = (function (){var statearr_33906 = state_33904;
(statearr_33906[(7)] = inst_33901);

return statearr_33906;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33904__$1,inst_33902);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30690__auto__ = null;
var shadow$dom$state_machine__30690__auto____0 = (function (){
var statearr_33911 = [null,null,null,null,null,null,null,null];
(statearr_33911[(0)] = shadow$dom$state_machine__30690__auto__);

(statearr_33911[(1)] = (1));

return statearr_33911;
});
var shadow$dom$state_machine__30690__auto____1 = (function (state_33904){
while(true){
var ret_value__30691__auto__ = (function (){try{while(true){
var result__30692__auto__ = switch__30689__auto__(state_33904);
if(cljs.core.keyword_identical_QMARK_(result__30692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30692__auto__;
}
break;
}
}catch (e33912){var ex__30693__auto__ = e33912;
var statearr_33913_34495 = state_33904;
(statearr_33913_34495[(2)] = ex__30693__auto__);


if(cljs.core.seq((state_33904[(4)]))){
var statearr_33914_34496 = state_33904;
(statearr_33914_34496[(1)] = cljs.core.first((state_33904[(4)])));

} else {
throw ex__30693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34497 = state_33904;
state_33904 = G__34497;
continue;
} else {
return ret_value__30691__auto__;
}
break;
}
});
shadow$dom$state_machine__30690__auto__ = function(state_33904){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30690__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30690__auto____1.call(this,state_33904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30690__auto____0;
shadow$dom$state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30690__auto____1;
return shadow$dom$state_machine__30690__auto__;
})()
})();
var state__30876__auto__ = (function (){var statearr_33915 = f__30875__auto__();
(statearr_33915[(6)] = c__30874__auto___34494);

return statearr_33915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30876__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
