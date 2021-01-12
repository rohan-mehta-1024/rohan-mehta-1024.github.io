goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34050 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_34050(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34051 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_34051(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33326 = coll;
var G__33327 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33326,G__33327) : shadow.dom.lazy_native_coll_seq.call(null,G__33326,G__33327));
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
var G__33337 = arguments.length;
switch (G__33337) {
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
var G__33341 = arguments.length;
switch (G__33341) {
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
var G__33343 = arguments.length;
switch (G__33343) {
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
var G__33348 = arguments.length;
switch (G__33348) {
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
var G__33350 = arguments.length;
switch (G__33350) {
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
var G__33356 = arguments.length;
switch (G__33356) {
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
}catch (e33361){if((e33361 instanceof Object)){
var e = e33361;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33361;

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
var seq__33362 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33363 = null;
var count__33364 = (0);
var i__33365 = (0);
while(true){
if((i__33365 < count__33364)){
var el = chunk__33363.cljs$core$IIndexed$_nth$arity$2(null,i__33365);
var handler_34079__$1 = ((function (seq__33362,chunk__33363,count__33364,i__33365,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33362,chunk__33363,count__33364,i__33365,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34079__$1);


var G__34080 = seq__33362;
var G__34081 = chunk__33363;
var G__34082 = count__33364;
var G__34083 = (i__33365 + (1));
seq__33362 = G__34080;
chunk__33363 = G__34081;
count__33364 = G__34082;
i__33365 = G__34083;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33362);
if(temp__5735__auto__){
var seq__33362__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33362__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33362__$1);
var G__34084 = cljs.core.chunk_rest(seq__33362__$1);
var G__34085 = c__4556__auto__;
var G__34086 = cljs.core.count(c__4556__auto__);
var G__34087 = (0);
seq__33362 = G__34084;
chunk__33363 = G__34085;
count__33364 = G__34086;
i__33365 = G__34087;
continue;
} else {
var el = cljs.core.first(seq__33362__$1);
var handler_34088__$1 = ((function (seq__33362,chunk__33363,count__33364,i__33365,el,seq__33362__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33362,chunk__33363,count__33364,i__33365,el,seq__33362__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34088__$1);


var G__34095 = cljs.core.next(seq__33362__$1);
var G__34096 = null;
var G__34097 = (0);
var G__34098 = (0);
seq__33362 = G__34095;
chunk__33363 = G__34096;
count__33364 = G__34097;
i__33365 = G__34098;
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
var G__33382 = arguments.length;
switch (G__33382) {
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
var seq__33388 = cljs.core.seq(events);
var chunk__33389 = null;
var count__33390 = (0);
var i__33391 = (0);
while(true){
if((i__33391 < count__33390)){
var vec__33400 = chunk__33389.cljs$core$IIndexed$_nth$arity$2(null,i__33391);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33400,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33400,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34105 = seq__33388;
var G__34106 = chunk__33389;
var G__34107 = count__33390;
var G__34108 = (i__33391 + (1));
seq__33388 = G__34105;
chunk__33389 = G__34106;
count__33390 = G__34107;
i__33391 = G__34108;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33388);
if(temp__5735__auto__){
var seq__33388__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33388__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33388__$1);
var G__34109 = cljs.core.chunk_rest(seq__33388__$1);
var G__34110 = c__4556__auto__;
var G__34111 = cljs.core.count(c__4556__auto__);
var G__34112 = (0);
seq__33388 = G__34109;
chunk__33389 = G__34110;
count__33390 = G__34111;
i__33391 = G__34112;
continue;
} else {
var vec__33403 = cljs.core.first(seq__33388__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33403,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33403,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34113 = cljs.core.next(seq__33388__$1);
var G__34114 = null;
var G__34115 = (0);
var G__34116 = (0);
seq__33388 = G__34113;
chunk__33389 = G__34114;
count__33390 = G__34115;
i__33391 = G__34116;
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
var seq__33406 = cljs.core.seq(styles);
var chunk__33407 = null;
var count__33408 = (0);
var i__33409 = (0);
while(true){
if((i__33409 < count__33408)){
var vec__33416 = chunk__33407.cljs$core$IIndexed$_nth$arity$2(null,i__33409);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33416,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33416,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34117 = seq__33406;
var G__34118 = chunk__33407;
var G__34119 = count__33408;
var G__34120 = (i__33409 + (1));
seq__33406 = G__34117;
chunk__33407 = G__34118;
count__33408 = G__34119;
i__33409 = G__34120;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33406);
if(temp__5735__auto__){
var seq__33406__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33406__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33406__$1);
var G__34121 = cljs.core.chunk_rest(seq__33406__$1);
var G__34122 = c__4556__auto__;
var G__34123 = cljs.core.count(c__4556__auto__);
var G__34124 = (0);
seq__33406 = G__34121;
chunk__33407 = G__34122;
count__33408 = G__34123;
i__33409 = G__34124;
continue;
} else {
var vec__33419 = cljs.core.first(seq__33406__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33419,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33419,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34134 = cljs.core.next(seq__33406__$1);
var G__34135 = null;
var G__34136 = (0);
var G__34137 = (0);
seq__33406 = G__34134;
chunk__33407 = G__34135;
count__33408 = G__34136;
i__33409 = G__34137;
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
var G__33422_34138 = key;
var G__33422_34139__$1 = (((G__33422_34138 instanceof cljs.core.Keyword))?G__33422_34138.fqn:null);
switch (G__33422_34139__$1) {
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
var ks_34144 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_34144,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_34144,"aria-");
}
})())){
el.setAttribute(ks_34144,value);
} else {
(el[ks_34144] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33435){
var map__33436 = p__33435;
var map__33436__$1 = (((((!((map__33436 == null))))?(((((map__33436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33436):map__33436);
var props = map__33436__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33436__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33438 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33438,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33438,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33438,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33441 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33441,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33441;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33448 = arguments.length;
switch (G__33448) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33459){
var vec__33460 = p__33459;
var seq__33461 = cljs.core.seq(vec__33460);
var first__33462 = cljs.core.first(seq__33461);
var seq__33461__$1 = cljs.core.next(seq__33461);
var nn = first__33462;
var first__33462__$1 = cljs.core.first(seq__33461__$1);
var seq__33461__$2 = cljs.core.next(seq__33461__$1);
var np = first__33462__$1;
var nc = seq__33461__$2;
var node = vec__33460;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33463 = nn;
var G__33464 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33463,G__33464) : create_fn.call(null,G__33463,G__33464));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33474 = nn;
var G__33475 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33474,G__33475) : create_fn.call(null,G__33474,G__33475));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33477 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33477,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33477,(1),null);
var seq__33481_34147 = cljs.core.seq(node_children);
var chunk__33482_34148 = null;
var count__33483_34149 = (0);
var i__33484_34150 = (0);
while(true){
if((i__33484_34150 < count__33483_34149)){
var child_struct_34151 = chunk__33482_34148.cljs$core$IIndexed$_nth$arity$2(null,i__33484_34150);
var children_34152 = shadow.dom.dom_node(child_struct_34151);
if(cljs.core.seq_QMARK_(children_34152)){
var seq__33517_34153 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34152));
var chunk__33519_34154 = null;
var count__33520_34155 = (0);
var i__33521_34156 = (0);
while(true){
if((i__33521_34156 < count__33520_34155)){
var child_34157 = chunk__33519_34154.cljs$core$IIndexed$_nth$arity$2(null,i__33521_34156);
if(cljs.core.truth_(child_34157)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34157);


var G__34158 = seq__33517_34153;
var G__34159 = chunk__33519_34154;
var G__34160 = count__33520_34155;
var G__34161 = (i__33521_34156 + (1));
seq__33517_34153 = G__34158;
chunk__33519_34154 = G__34159;
count__33520_34155 = G__34160;
i__33521_34156 = G__34161;
continue;
} else {
var G__34162 = seq__33517_34153;
var G__34163 = chunk__33519_34154;
var G__34164 = count__33520_34155;
var G__34165 = (i__33521_34156 + (1));
seq__33517_34153 = G__34162;
chunk__33519_34154 = G__34163;
count__33520_34155 = G__34164;
i__33521_34156 = G__34165;
continue;
}
} else {
var temp__5735__auto___34166 = cljs.core.seq(seq__33517_34153);
if(temp__5735__auto___34166){
var seq__33517_34167__$1 = temp__5735__auto___34166;
if(cljs.core.chunked_seq_QMARK_(seq__33517_34167__$1)){
var c__4556__auto___34168 = cljs.core.chunk_first(seq__33517_34167__$1);
var G__34169 = cljs.core.chunk_rest(seq__33517_34167__$1);
var G__34170 = c__4556__auto___34168;
var G__34171 = cljs.core.count(c__4556__auto___34168);
var G__34172 = (0);
seq__33517_34153 = G__34169;
chunk__33519_34154 = G__34170;
count__33520_34155 = G__34171;
i__33521_34156 = G__34172;
continue;
} else {
var child_34173 = cljs.core.first(seq__33517_34167__$1);
if(cljs.core.truth_(child_34173)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34173);


var G__34174 = cljs.core.next(seq__33517_34167__$1);
var G__34175 = null;
var G__34176 = (0);
var G__34177 = (0);
seq__33517_34153 = G__34174;
chunk__33519_34154 = G__34175;
count__33520_34155 = G__34176;
i__33521_34156 = G__34177;
continue;
} else {
var G__34178 = cljs.core.next(seq__33517_34167__$1);
var G__34179 = null;
var G__34180 = (0);
var G__34181 = (0);
seq__33517_34153 = G__34178;
chunk__33519_34154 = G__34179;
count__33520_34155 = G__34180;
i__33521_34156 = G__34181;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34152);
}


var G__34182 = seq__33481_34147;
var G__34183 = chunk__33482_34148;
var G__34184 = count__33483_34149;
var G__34185 = (i__33484_34150 + (1));
seq__33481_34147 = G__34182;
chunk__33482_34148 = G__34183;
count__33483_34149 = G__34184;
i__33484_34150 = G__34185;
continue;
} else {
var temp__5735__auto___34186 = cljs.core.seq(seq__33481_34147);
if(temp__5735__auto___34186){
var seq__33481_34187__$1 = temp__5735__auto___34186;
if(cljs.core.chunked_seq_QMARK_(seq__33481_34187__$1)){
var c__4556__auto___34188 = cljs.core.chunk_first(seq__33481_34187__$1);
var G__34189 = cljs.core.chunk_rest(seq__33481_34187__$1);
var G__34190 = c__4556__auto___34188;
var G__34191 = cljs.core.count(c__4556__auto___34188);
var G__34192 = (0);
seq__33481_34147 = G__34189;
chunk__33482_34148 = G__34190;
count__33483_34149 = G__34191;
i__33484_34150 = G__34192;
continue;
} else {
var child_struct_34193 = cljs.core.first(seq__33481_34187__$1);
var children_34194 = shadow.dom.dom_node(child_struct_34193);
if(cljs.core.seq_QMARK_(children_34194)){
var seq__33530_34195 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34194));
var chunk__33532_34196 = null;
var count__33533_34197 = (0);
var i__33534_34198 = (0);
while(true){
if((i__33534_34198 < count__33533_34197)){
var child_34199 = chunk__33532_34196.cljs$core$IIndexed$_nth$arity$2(null,i__33534_34198);
if(cljs.core.truth_(child_34199)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34199);


var G__34200 = seq__33530_34195;
var G__34201 = chunk__33532_34196;
var G__34202 = count__33533_34197;
var G__34203 = (i__33534_34198 + (1));
seq__33530_34195 = G__34200;
chunk__33532_34196 = G__34201;
count__33533_34197 = G__34202;
i__33534_34198 = G__34203;
continue;
} else {
var G__34204 = seq__33530_34195;
var G__34205 = chunk__33532_34196;
var G__34206 = count__33533_34197;
var G__34207 = (i__33534_34198 + (1));
seq__33530_34195 = G__34204;
chunk__33532_34196 = G__34205;
count__33533_34197 = G__34206;
i__33534_34198 = G__34207;
continue;
}
} else {
var temp__5735__auto___34208__$1 = cljs.core.seq(seq__33530_34195);
if(temp__5735__auto___34208__$1){
var seq__33530_34209__$1 = temp__5735__auto___34208__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33530_34209__$1)){
var c__4556__auto___34210 = cljs.core.chunk_first(seq__33530_34209__$1);
var G__34211 = cljs.core.chunk_rest(seq__33530_34209__$1);
var G__34212 = c__4556__auto___34210;
var G__34213 = cljs.core.count(c__4556__auto___34210);
var G__34214 = (0);
seq__33530_34195 = G__34211;
chunk__33532_34196 = G__34212;
count__33533_34197 = G__34213;
i__33534_34198 = G__34214;
continue;
} else {
var child_34216 = cljs.core.first(seq__33530_34209__$1);
if(cljs.core.truth_(child_34216)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34216);


var G__34217 = cljs.core.next(seq__33530_34209__$1);
var G__34218 = null;
var G__34219 = (0);
var G__34220 = (0);
seq__33530_34195 = G__34217;
chunk__33532_34196 = G__34218;
count__33533_34197 = G__34219;
i__33534_34198 = G__34220;
continue;
} else {
var G__34221 = cljs.core.next(seq__33530_34209__$1);
var G__34222 = null;
var G__34223 = (0);
var G__34224 = (0);
seq__33530_34195 = G__34221;
chunk__33532_34196 = G__34222;
count__33533_34197 = G__34223;
i__33534_34198 = G__34224;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34194);
}


var G__34226 = cljs.core.next(seq__33481_34187__$1);
var G__34227 = null;
var G__34228 = (0);
var G__34229 = (0);
seq__33481_34147 = G__34226;
chunk__33482_34148 = G__34227;
count__33483_34149 = G__34228;
i__33484_34150 = G__34229;
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
var seq__33553 = cljs.core.seq(node);
var chunk__33554 = null;
var count__33555 = (0);
var i__33556 = (0);
while(true){
if((i__33556 < count__33555)){
var n = chunk__33554.cljs$core$IIndexed$_nth$arity$2(null,i__33556);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34236 = seq__33553;
var G__34237 = chunk__33554;
var G__34238 = count__33555;
var G__34239 = (i__33556 + (1));
seq__33553 = G__34236;
chunk__33554 = G__34237;
count__33555 = G__34238;
i__33556 = G__34239;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33553);
if(temp__5735__auto__){
var seq__33553__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33553__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33553__$1);
var G__34241 = cljs.core.chunk_rest(seq__33553__$1);
var G__34242 = c__4556__auto__;
var G__34243 = cljs.core.count(c__4556__auto__);
var G__34244 = (0);
seq__33553 = G__34241;
chunk__33554 = G__34242;
count__33555 = G__34243;
i__33556 = G__34244;
continue;
} else {
var n = cljs.core.first(seq__33553__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34246 = cljs.core.next(seq__33553__$1);
var G__34247 = null;
var G__34248 = (0);
var G__34249 = (0);
seq__33553 = G__34246;
chunk__33554 = G__34247;
count__33555 = G__34248;
i__33556 = G__34249;
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
var G__33571 = arguments.length;
switch (G__33571) {
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
var G__33581 = arguments.length;
switch (G__33581) {
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
var G__33593 = arguments.length;
switch (G__33593) {
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
var len__4736__auto___34255 = arguments.length;
var i__4737__auto___34256 = (0);
while(true){
if((i__4737__auto___34256 < len__4736__auto___34255)){
args__4742__auto__.push((arguments[i__4737__auto___34256]));

var G__34257 = (i__4737__auto___34256 + (1));
i__4737__auto___34256 = G__34257;
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
var seq__33603_34259 = cljs.core.seq(nodes);
var chunk__33604_34260 = null;
var count__33605_34261 = (0);
var i__33606_34262 = (0);
while(true){
if((i__33606_34262 < count__33605_34261)){
var node_34264 = chunk__33604_34260.cljs$core$IIndexed$_nth$arity$2(null,i__33606_34262);
fragment.appendChild(shadow.dom._to_dom(node_34264));


var G__34266 = seq__33603_34259;
var G__34267 = chunk__33604_34260;
var G__34268 = count__33605_34261;
var G__34269 = (i__33606_34262 + (1));
seq__33603_34259 = G__34266;
chunk__33604_34260 = G__34267;
count__33605_34261 = G__34268;
i__33606_34262 = G__34269;
continue;
} else {
var temp__5735__auto___34270 = cljs.core.seq(seq__33603_34259);
if(temp__5735__auto___34270){
var seq__33603_34278__$1 = temp__5735__auto___34270;
if(cljs.core.chunked_seq_QMARK_(seq__33603_34278__$1)){
var c__4556__auto___34279 = cljs.core.chunk_first(seq__33603_34278__$1);
var G__34280 = cljs.core.chunk_rest(seq__33603_34278__$1);
var G__34281 = c__4556__auto___34279;
var G__34282 = cljs.core.count(c__4556__auto___34279);
var G__34283 = (0);
seq__33603_34259 = G__34280;
chunk__33604_34260 = G__34281;
count__33605_34261 = G__34282;
i__33606_34262 = G__34283;
continue;
} else {
var node_34284 = cljs.core.first(seq__33603_34278__$1);
fragment.appendChild(shadow.dom._to_dom(node_34284));


var G__34285 = cljs.core.next(seq__33603_34278__$1);
var G__34286 = null;
var G__34287 = (0);
var G__34288 = (0);
seq__33603_34259 = G__34285;
chunk__33604_34260 = G__34286;
count__33605_34261 = G__34287;
i__33606_34262 = G__34288;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33602){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33602));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33607_34289 = cljs.core.seq(scripts);
var chunk__33608_34290 = null;
var count__33609_34291 = (0);
var i__33610_34292 = (0);
while(true){
if((i__33610_34292 < count__33609_34291)){
var vec__33632_34293 = chunk__33608_34290.cljs$core$IIndexed$_nth$arity$2(null,i__33610_34292);
var script_tag_34294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33632_34293,(0),null);
var script_body_34295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33632_34293,(1),null);
eval(script_body_34295);


var G__34296 = seq__33607_34289;
var G__34297 = chunk__33608_34290;
var G__34298 = count__33609_34291;
var G__34299 = (i__33610_34292 + (1));
seq__33607_34289 = G__34296;
chunk__33608_34290 = G__34297;
count__33609_34291 = G__34298;
i__33610_34292 = G__34299;
continue;
} else {
var temp__5735__auto___34300 = cljs.core.seq(seq__33607_34289);
if(temp__5735__auto___34300){
var seq__33607_34301__$1 = temp__5735__auto___34300;
if(cljs.core.chunked_seq_QMARK_(seq__33607_34301__$1)){
var c__4556__auto___34302 = cljs.core.chunk_first(seq__33607_34301__$1);
var G__34303 = cljs.core.chunk_rest(seq__33607_34301__$1);
var G__34304 = c__4556__auto___34302;
var G__34305 = cljs.core.count(c__4556__auto___34302);
var G__34306 = (0);
seq__33607_34289 = G__34303;
chunk__33608_34290 = G__34304;
count__33609_34291 = G__34305;
i__33610_34292 = G__34306;
continue;
} else {
var vec__33635_34307 = cljs.core.first(seq__33607_34301__$1);
var script_tag_34308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33635_34307,(0),null);
var script_body_34309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33635_34307,(1),null);
eval(script_body_34309);


var G__34310 = cljs.core.next(seq__33607_34301__$1);
var G__34311 = null;
var G__34312 = (0);
var G__34313 = (0);
seq__33607_34289 = G__34310;
chunk__33608_34290 = G__34311;
count__33609_34291 = G__34312;
i__33610_34292 = G__34313;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33639){
var vec__33640 = p__33639;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33640,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33640,(1),null);
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
var G__33659 = arguments.length;
switch (G__33659) {
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
var seq__33681 = cljs.core.seq(style_keys);
var chunk__33682 = null;
var count__33683 = (0);
var i__33684 = (0);
while(true){
if((i__33684 < count__33683)){
var it = chunk__33682.cljs$core$IIndexed$_nth$arity$2(null,i__33684);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34357 = seq__33681;
var G__34358 = chunk__33682;
var G__34359 = count__33683;
var G__34360 = (i__33684 + (1));
seq__33681 = G__34357;
chunk__33682 = G__34358;
count__33683 = G__34359;
i__33684 = G__34360;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33681);
if(temp__5735__auto__){
var seq__33681__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33681__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33681__$1);
var G__34361 = cljs.core.chunk_rest(seq__33681__$1);
var G__34362 = c__4556__auto__;
var G__34363 = cljs.core.count(c__4556__auto__);
var G__34364 = (0);
seq__33681 = G__34361;
chunk__33682 = G__34362;
count__33683 = G__34363;
i__33684 = G__34364;
continue;
} else {
var it = cljs.core.first(seq__33681__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34365 = cljs.core.next(seq__33681__$1);
var G__34366 = null;
var G__34367 = (0);
var G__34368 = (0);
seq__33681 = G__34365;
chunk__33682 = G__34366;
count__33683 = G__34367;
i__33684 = G__34368;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33686,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33699 = k33686;
var G__33699__$1 = (((G__33699 instanceof cljs.core.Keyword))?G__33699.fqn:null);
switch (G__33699__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33686,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33700){
var vec__33701 = p__33700;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33701,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33701,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33685){
var self__ = this;
var G__33685__$1 = this;
return (new cljs.core.RecordIter((0),G__33685__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33687,other33688){
var self__ = this;
var this33687__$1 = this;
return (((!((other33688 == null)))) && ((this33687__$1.constructor === other33688.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33687__$1.x,other33688.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33687__$1.y,other33688.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33687__$1.__extmap,other33688.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33685){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33717 = cljs.core.keyword_identical_QMARK_;
var expr__33718 = k__4388__auto__;
if(cljs.core.truth_((pred__33717.cljs$core$IFn$_invoke$arity$2 ? pred__33717.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33718) : pred__33717.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33718)))){
return (new shadow.dom.Coordinate(G__33685,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33717.cljs$core$IFn$_invoke$arity$2 ? pred__33717.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33718) : pred__33717.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33718)))){
return (new shadow.dom.Coordinate(self__.x,G__33685,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33685),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33685){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33685,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33698){
var extmap__4419__auto__ = (function (){var G__33731 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33698,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33698)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33731);
} else {
return G__33731;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33698),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33698),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33765,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33769 = k33765;
var G__33769__$1 = (((G__33769 instanceof cljs.core.Keyword))?G__33769.fqn:null);
switch (G__33769__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33765,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33782){
var vec__33783 = p__33782;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33783,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33783,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33764){
var self__ = this;
var G__33764__$1 = this;
return (new cljs.core.RecordIter((0),G__33764__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33766,other33767){
var self__ = this;
var this33766__$1 = this;
return (((!((other33767 == null)))) && ((this33766__$1.constructor === other33767.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33766__$1.w,other33767.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33766__$1.h,other33767.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33766__$1.__extmap,other33767.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33764){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33799 = cljs.core.keyword_identical_QMARK_;
var expr__33800 = k__4388__auto__;
if(cljs.core.truth_((pred__33799.cljs$core$IFn$_invoke$arity$2 ? pred__33799.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33800) : pred__33799.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33800)))){
return (new shadow.dom.Size(G__33764,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33799.cljs$core$IFn$_invoke$arity$2 ? pred__33799.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33800) : pred__33799.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33800)))){
return (new shadow.dom.Size(self__.w,G__33764,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33764),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33764){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33764,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33768){
var extmap__4419__auto__ = (function (){var G__33805 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33768,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33768)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33805);
} else {
return G__33805;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33768),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33768),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__34422 = (i + (1));
var G__34423 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34422;
ret = G__34423;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33817){
var vec__33818 = p__33817;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33818,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33818,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33822 = arguments.length;
switch (G__33822) {
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
var G__34437 = ps;
var G__34438 = (i + (1));
el__$1 = G__34437;
i = G__34438;
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
var vec__33895 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33895,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33895,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33895,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33898_34453 = cljs.core.seq(props);
var chunk__33899_34454 = null;
var count__33900_34455 = (0);
var i__33901_34456 = (0);
while(true){
if((i__33901_34456 < count__33900_34455)){
var vec__33929_34457 = chunk__33899_34454.cljs$core$IIndexed$_nth$arity$2(null,i__33901_34456);
var k_34458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33929_34457,(0),null);
var v_34459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33929_34457,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34458);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34458),v_34459);


var G__34460 = seq__33898_34453;
var G__34461 = chunk__33899_34454;
var G__34462 = count__33900_34455;
var G__34463 = (i__33901_34456 + (1));
seq__33898_34453 = G__34460;
chunk__33899_34454 = G__34461;
count__33900_34455 = G__34462;
i__33901_34456 = G__34463;
continue;
} else {
var temp__5735__auto___34464 = cljs.core.seq(seq__33898_34453);
if(temp__5735__auto___34464){
var seq__33898_34465__$1 = temp__5735__auto___34464;
if(cljs.core.chunked_seq_QMARK_(seq__33898_34465__$1)){
var c__4556__auto___34466 = cljs.core.chunk_first(seq__33898_34465__$1);
var G__34467 = cljs.core.chunk_rest(seq__33898_34465__$1);
var G__34468 = c__4556__auto___34466;
var G__34469 = cljs.core.count(c__4556__auto___34466);
var G__34470 = (0);
seq__33898_34453 = G__34467;
chunk__33899_34454 = G__34468;
count__33900_34455 = G__34469;
i__33901_34456 = G__34470;
continue;
} else {
var vec__33933_34471 = cljs.core.first(seq__33898_34465__$1);
var k_34472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33933_34471,(0),null);
var v_34473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33933_34471,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34472);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34472),v_34473);


var G__34474 = cljs.core.next(seq__33898_34465__$1);
var G__34475 = null;
var G__34476 = (0);
var G__34477 = (0);
seq__33898_34453 = G__34474;
chunk__33899_34454 = G__34475;
count__33900_34455 = G__34476;
i__33901_34456 = G__34477;
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
var vec__33941 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33941,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33941,(1),null);
var seq__33944_34478 = cljs.core.seq(node_children);
var chunk__33946_34479 = null;
var count__33947_34480 = (0);
var i__33948_34481 = (0);
while(true){
if((i__33948_34481 < count__33947_34480)){
var child_struct_34482 = chunk__33946_34479.cljs$core$IIndexed$_nth$arity$2(null,i__33948_34481);
if((!((child_struct_34482 == null)))){
if(typeof child_struct_34482 === 'string'){
var text_34483 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34483),child_struct_34482].join(''));
} else {
var children_34484 = shadow.dom.svg_node(child_struct_34482);
if(cljs.core.seq_QMARK_(children_34484)){
var seq__33964_34485 = cljs.core.seq(children_34484);
var chunk__33966_34486 = null;
var count__33967_34487 = (0);
var i__33968_34488 = (0);
while(true){
if((i__33968_34488 < count__33967_34487)){
var child_34489 = chunk__33966_34486.cljs$core$IIndexed$_nth$arity$2(null,i__33968_34488);
if(cljs.core.truth_(child_34489)){
node.appendChild(child_34489);


var G__34490 = seq__33964_34485;
var G__34491 = chunk__33966_34486;
var G__34492 = count__33967_34487;
var G__34493 = (i__33968_34488 + (1));
seq__33964_34485 = G__34490;
chunk__33966_34486 = G__34491;
count__33967_34487 = G__34492;
i__33968_34488 = G__34493;
continue;
} else {
var G__34494 = seq__33964_34485;
var G__34495 = chunk__33966_34486;
var G__34496 = count__33967_34487;
var G__34497 = (i__33968_34488 + (1));
seq__33964_34485 = G__34494;
chunk__33966_34486 = G__34495;
count__33967_34487 = G__34496;
i__33968_34488 = G__34497;
continue;
}
} else {
var temp__5735__auto___34498 = cljs.core.seq(seq__33964_34485);
if(temp__5735__auto___34498){
var seq__33964_34499__$1 = temp__5735__auto___34498;
if(cljs.core.chunked_seq_QMARK_(seq__33964_34499__$1)){
var c__4556__auto___34500 = cljs.core.chunk_first(seq__33964_34499__$1);
var G__34501 = cljs.core.chunk_rest(seq__33964_34499__$1);
var G__34502 = c__4556__auto___34500;
var G__34503 = cljs.core.count(c__4556__auto___34500);
var G__34504 = (0);
seq__33964_34485 = G__34501;
chunk__33966_34486 = G__34502;
count__33967_34487 = G__34503;
i__33968_34488 = G__34504;
continue;
} else {
var child_34505 = cljs.core.first(seq__33964_34499__$1);
if(cljs.core.truth_(child_34505)){
node.appendChild(child_34505);


var G__34506 = cljs.core.next(seq__33964_34499__$1);
var G__34507 = null;
var G__34508 = (0);
var G__34509 = (0);
seq__33964_34485 = G__34506;
chunk__33966_34486 = G__34507;
count__33967_34487 = G__34508;
i__33968_34488 = G__34509;
continue;
} else {
var G__34510 = cljs.core.next(seq__33964_34499__$1);
var G__34511 = null;
var G__34512 = (0);
var G__34513 = (0);
seq__33964_34485 = G__34510;
chunk__33966_34486 = G__34511;
count__33967_34487 = G__34512;
i__33968_34488 = G__34513;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34484);
}
}


var G__34530 = seq__33944_34478;
var G__34531 = chunk__33946_34479;
var G__34532 = count__33947_34480;
var G__34533 = (i__33948_34481 + (1));
seq__33944_34478 = G__34530;
chunk__33946_34479 = G__34531;
count__33947_34480 = G__34532;
i__33948_34481 = G__34533;
continue;
} else {
var G__34534 = seq__33944_34478;
var G__34535 = chunk__33946_34479;
var G__34536 = count__33947_34480;
var G__34537 = (i__33948_34481 + (1));
seq__33944_34478 = G__34534;
chunk__33946_34479 = G__34535;
count__33947_34480 = G__34536;
i__33948_34481 = G__34537;
continue;
}
} else {
var temp__5735__auto___34538 = cljs.core.seq(seq__33944_34478);
if(temp__5735__auto___34538){
var seq__33944_34539__$1 = temp__5735__auto___34538;
if(cljs.core.chunked_seq_QMARK_(seq__33944_34539__$1)){
var c__4556__auto___34540 = cljs.core.chunk_first(seq__33944_34539__$1);
var G__34541 = cljs.core.chunk_rest(seq__33944_34539__$1);
var G__34542 = c__4556__auto___34540;
var G__34543 = cljs.core.count(c__4556__auto___34540);
var G__34544 = (0);
seq__33944_34478 = G__34541;
chunk__33946_34479 = G__34542;
count__33947_34480 = G__34543;
i__33948_34481 = G__34544;
continue;
} else {
var child_struct_34545 = cljs.core.first(seq__33944_34539__$1);
if((!((child_struct_34545 == null)))){
if(typeof child_struct_34545 === 'string'){
var text_34546 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34546),child_struct_34545].join(''));
} else {
var children_34547 = shadow.dom.svg_node(child_struct_34545);
if(cljs.core.seq_QMARK_(children_34547)){
var seq__33977_34548 = cljs.core.seq(children_34547);
var chunk__33979_34549 = null;
var count__33980_34550 = (0);
var i__33981_34551 = (0);
while(true){
if((i__33981_34551 < count__33980_34550)){
var child_34552 = chunk__33979_34549.cljs$core$IIndexed$_nth$arity$2(null,i__33981_34551);
if(cljs.core.truth_(child_34552)){
node.appendChild(child_34552);


var G__34553 = seq__33977_34548;
var G__34554 = chunk__33979_34549;
var G__34555 = count__33980_34550;
var G__34556 = (i__33981_34551 + (1));
seq__33977_34548 = G__34553;
chunk__33979_34549 = G__34554;
count__33980_34550 = G__34555;
i__33981_34551 = G__34556;
continue;
} else {
var G__34557 = seq__33977_34548;
var G__34558 = chunk__33979_34549;
var G__34559 = count__33980_34550;
var G__34560 = (i__33981_34551 + (1));
seq__33977_34548 = G__34557;
chunk__33979_34549 = G__34558;
count__33980_34550 = G__34559;
i__33981_34551 = G__34560;
continue;
}
} else {
var temp__5735__auto___34561__$1 = cljs.core.seq(seq__33977_34548);
if(temp__5735__auto___34561__$1){
var seq__33977_34562__$1 = temp__5735__auto___34561__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33977_34562__$1)){
var c__4556__auto___34563 = cljs.core.chunk_first(seq__33977_34562__$1);
var G__34564 = cljs.core.chunk_rest(seq__33977_34562__$1);
var G__34565 = c__4556__auto___34563;
var G__34566 = cljs.core.count(c__4556__auto___34563);
var G__34567 = (0);
seq__33977_34548 = G__34564;
chunk__33979_34549 = G__34565;
count__33980_34550 = G__34566;
i__33981_34551 = G__34567;
continue;
} else {
var child_34568 = cljs.core.first(seq__33977_34562__$1);
if(cljs.core.truth_(child_34568)){
node.appendChild(child_34568);


var G__34569 = cljs.core.next(seq__33977_34562__$1);
var G__34570 = null;
var G__34571 = (0);
var G__34572 = (0);
seq__33977_34548 = G__34569;
chunk__33979_34549 = G__34570;
count__33980_34550 = G__34571;
i__33981_34551 = G__34572;
continue;
} else {
var G__34573 = cljs.core.next(seq__33977_34562__$1);
var G__34574 = null;
var G__34575 = (0);
var G__34576 = (0);
seq__33977_34548 = G__34573;
chunk__33979_34549 = G__34574;
count__33980_34550 = G__34575;
i__33981_34551 = G__34576;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34547);
}
}


var G__34577 = cljs.core.next(seq__33944_34539__$1);
var G__34578 = null;
var G__34579 = (0);
var G__34580 = (0);
seq__33944_34478 = G__34577;
chunk__33946_34479 = G__34578;
count__33947_34480 = G__34579;
i__33948_34481 = G__34580;
continue;
} else {
var G__34581 = cljs.core.next(seq__33944_34539__$1);
var G__34582 = null;
var G__34583 = (0);
var G__34584 = (0);
seq__33944_34478 = G__34581;
chunk__33946_34479 = G__34582;
count__33947_34480 = G__34583;
i__33948_34481 = G__34584;
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
var len__4736__auto___34585 = arguments.length;
var i__4737__auto___34586 = (0);
while(true){
if((i__4737__auto___34586 < len__4736__auto___34585)){
args__4742__auto__.push((arguments[i__4737__auto___34586]));

var G__34587 = (i__4737__auto___34586 + (1));
i__4737__auto___34586 = G__34587;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33998){
var G__33999 = cljs.core.first(seq33998);
var seq33998__$1 = cljs.core.next(seq33998);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33999,seq33998__$1);
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
var G__34017 = arguments.length;
switch (G__34017) {
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
var c__30952__auto___34597 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30953__auto__ = (function (){var switch__30763__auto__ = (function (state_34022){
var state_val_34023 = (state_34022[(1)]);
if((state_val_34023 === (1))){
var state_34022__$1 = state_34022;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34022__$1,(2),once_or_cleanup);
} else {
if((state_val_34023 === (2))){
var inst_34019 = (state_34022[(2)]);
var inst_34020 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34022__$1 = (function (){var statearr_34033 = state_34022;
(statearr_34033[(7)] = inst_34019);

return statearr_34033;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34022__$1,inst_34020);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30764__auto__ = null;
var shadow$dom$state_machine__30764__auto____0 = (function (){
var statearr_34034 = [null,null,null,null,null,null,null,null];
(statearr_34034[(0)] = shadow$dom$state_machine__30764__auto__);

(statearr_34034[(1)] = (1));

return statearr_34034;
});
var shadow$dom$state_machine__30764__auto____1 = (function (state_34022){
while(true){
var ret_value__30765__auto__ = (function (){try{while(true){
var result__30766__auto__ = switch__30763__auto__(state_34022);
if(cljs.core.keyword_identical_QMARK_(result__30766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30766__auto__;
}
break;
}
}catch (e34035){var ex__30767__auto__ = e34035;
var statearr_34036_34599 = state_34022;
(statearr_34036_34599[(2)] = ex__30767__auto__);


if(cljs.core.seq((state_34022[(4)]))){
var statearr_34037_34600 = state_34022;
(statearr_34037_34600[(1)] = cljs.core.first((state_34022[(4)])));

} else {
throw ex__30767__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34601 = state_34022;
state_34022 = G__34601;
continue;
} else {
return ret_value__30765__auto__;
}
break;
}
});
shadow$dom$state_machine__30764__auto__ = function(state_34022){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30764__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30764__auto____1.call(this,state_34022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30764__auto____0;
shadow$dom$state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30764__auto____1;
return shadow$dom$state_machine__30764__auto__;
})()
})();
var state__30954__auto__ = (function (){var statearr_34038 = f__30953__auto__();
(statearr_34038[(6)] = c__30952__auto___34597);

return statearr_34038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30954__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
