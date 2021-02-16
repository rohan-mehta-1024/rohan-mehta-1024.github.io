goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34067 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_34067(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34068 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_34068(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33268 = coll;
var G__33269 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33268,G__33269) : shadow.dom.lazy_native_coll_seq.call(null,G__33268,G__33269));
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
var G__33277 = arguments.length;
switch (G__33277) {
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
var G__33280 = arguments.length;
switch (G__33280) {
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
var G__33286 = arguments.length;
switch (G__33286) {
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
var G__33288 = arguments.length;
switch (G__33288) {
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
var G__33290 = arguments.length;
switch (G__33290) {
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
var G__33326 = arguments.length;
switch (G__33326) {
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
}catch (e33331){if((e33331 instanceof Object)){
var e = e33331;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33331;

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
var seq__33338 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33339 = null;
var count__33340 = (0);
var i__33341 = (0);
while(true){
if((i__33341 < count__33340)){
var el = chunk__33339.cljs$core$IIndexed$_nth$arity$2(null,i__33341);
var handler_34096__$1 = ((function (seq__33338,chunk__33339,count__33340,i__33341,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33338,chunk__33339,count__33340,i__33341,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34096__$1);


var G__34097 = seq__33338;
var G__34098 = chunk__33339;
var G__34099 = count__33340;
var G__34100 = (i__33341 + (1));
seq__33338 = G__34097;
chunk__33339 = G__34098;
count__33340 = G__34099;
i__33341 = G__34100;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33338);
if(temp__5735__auto__){
var seq__33338__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33338__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33338__$1);
var G__34101 = cljs.core.chunk_rest(seq__33338__$1);
var G__34102 = c__4556__auto__;
var G__34103 = cljs.core.count(c__4556__auto__);
var G__34104 = (0);
seq__33338 = G__34101;
chunk__33339 = G__34102;
count__33340 = G__34103;
i__33341 = G__34104;
continue;
} else {
var el = cljs.core.first(seq__33338__$1);
var handler_34105__$1 = ((function (seq__33338,chunk__33339,count__33340,i__33341,el,seq__33338__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33338,chunk__33339,count__33340,i__33341,el,seq__33338__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34105__$1);


var G__34106 = cljs.core.next(seq__33338__$1);
var G__34107 = null;
var G__34108 = (0);
var G__34109 = (0);
seq__33338 = G__34106;
chunk__33339 = G__34107;
count__33340 = G__34108;
i__33341 = G__34109;
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
var G__33355 = arguments.length;
switch (G__33355) {
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
var seq__33369 = cljs.core.seq(events);
var chunk__33370 = null;
var count__33371 = (0);
var i__33372 = (0);
while(true){
if((i__33372 < count__33371)){
var vec__33380 = chunk__33370.cljs$core$IIndexed$_nth$arity$2(null,i__33372);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33380,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33380,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34128 = seq__33369;
var G__34129 = chunk__33370;
var G__34130 = count__33371;
var G__34131 = (i__33372 + (1));
seq__33369 = G__34128;
chunk__33370 = G__34129;
count__33371 = G__34130;
i__33372 = G__34131;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33369);
if(temp__5735__auto__){
var seq__33369__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33369__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33369__$1);
var G__34132 = cljs.core.chunk_rest(seq__33369__$1);
var G__34133 = c__4556__auto__;
var G__34134 = cljs.core.count(c__4556__auto__);
var G__34135 = (0);
seq__33369 = G__34132;
chunk__33370 = G__34133;
count__33371 = G__34134;
i__33372 = G__34135;
continue;
} else {
var vec__33383 = cljs.core.first(seq__33369__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33383,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33383,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34136 = cljs.core.next(seq__33369__$1);
var G__34137 = null;
var G__34138 = (0);
var G__34139 = (0);
seq__33369 = G__34136;
chunk__33370 = G__34137;
count__33371 = G__34138;
i__33372 = G__34139;
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
var seq__33387 = cljs.core.seq(styles);
var chunk__33388 = null;
var count__33389 = (0);
var i__33390 = (0);
while(true){
if((i__33390 < count__33389)){
var vec__33397 = chunk__33388.cljs$core$IIndexed$_nth$arity$2(null,i__33390);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33397,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33397,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34140 = seq__33387;
var G__34141 = chunk__33388;
var G__34142 = count__33389;
var G__34143 = (i__33390 + (1));
seq__33387 = G__34140;
chunk__33388 = G__34141;
count__33389 = G__34142;
i__33390 = G__34143;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33387);
if(temp__5735__auto__){
var seq__33387__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33387__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33387__$1);
var G__34145 = cljs.core.chunk_rest(seq__33387__$1);
var G__34146 = c__4556__auto__;
var G__34147 = cljs.core.count(c__4556__auto__);
var G__34148 = (0);
seq__33387 = G__34145;
chunk__33388 = G__34146;
count__33389 = G__34147;
i__33390 = G__34148;
continue;
} else {
var vec__33400 = cljs.core.first(seq__33387__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33400,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33400,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34149 = cljs.core.next(seq__33387__$1);
var G__34150 = null;
var G__34151 = (0);
var G__34152 = (0);
seq__33387 = G__34149;
chunk__33388 = G__34150;
count__33389 = G__34151;
i__33390 = G__34152;
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
var G__33403_34153 = key;
var G__33403_34154__$1 = (((G__33403_34153 instanceof cljs.core.Keyword))?G__33403_34153.fqn:null);
switch (G__33403_34154__$1) {
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
var ks_34156 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_34156,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_34156,"aria-");
}
})())){
el.setAttribute(ks_34156,value);
} else {
(el[ks_34156] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33442){
var map__33443 = p__33442;
var map__33443__$1 = (((((!((map__33443 == null))))?(((((map__33443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33443):map__33443);
var props = map__33443__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33443__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33445 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33445,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33445,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33445,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33448 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33448,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33448;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33450 = arguments.length;
switch (G__33450) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33463){
var vec__33466 = p__33463;
var seq__33467 = cljs.core.seq(vec__33466);
var first__33468 = cljs.core.first(seq__33467);
var seq__33467__$1 = cljs.core.next(seq__33467);
var nn = first__33468;
var first__33468__$1 = cljs.core.first(seq__33467__$1);
var seq__33467__$2 = cljs.core.next(seq__33467__$1);
var np = first__33468__$1;
var nc = seq__33467__$2;
var node = vec__33466;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33470 = nn;
var G__33471 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33470,G__33471) : create_fn.call(null,G__33470,G__33471));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33472 = nn;
var G__33473 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33472,G__33473) : create_fn.call(null,G__33472,G__33473));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33476 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33476,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33476,(1),null);
var seq__33480_34172 = cljs.core.seq(node_children);
var chunk__33481_34173 = null;
var count__33482_34174 = (0);
var i__33483_34175 = (0);
while(true){
if((i__33483_34175 < count__33482_34174)){
var child_struct_34176 = chunk__33481_34173.cljs$core$IIndexed$_nth$arity$2(null,i__33483_34175);
var children_34177 = shadow.dom.dom_node(child_struct_34176);
if(cljs.core.seq_QMARK_(children_34177)){
var seq__33519_34178 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34177));
var chunk__33521_34179 = null;
var count__33522_34180 = (0);
var i__33523_34181 = (0);
while(true){
if((i__33523_34181 < count__33522_34180)){
var child_34182 = chunk__33521_34179.cljs$core$IIndexed$_nth$arity$2(null,i__33523_34181);
if(cljs.core.truth_(child_34182)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34182);


var G__34183 = seq__33519_34178;
var G__34184 = chunk__33521_34179;
var G__34185 = count__33522_34180;
var G__34186 = (i__33523_34181 + (1));
seq__33519_34178 = G__34183;
chunk__33521_34179 = G__34184;
count__33522_34180 = G__34185;
i__33523_34181 = G__34186;
continue;
} else {
var G__34187 = seq__33519_34178;
var G__34188 = chunk__33521_34179;
var G__34189 = count__33522_34180;
var G__34190 = (i__33523_34181 + (1));
seq__33519_34178 = G__34187;
chunk__33521_34179 = G__34188;
count__33522_34180 = G__34189;
i__33523_34181 = G__34190;
continue;
}
} else {
var temp__5735__auto___34191 = cljs.core.seq(seq__33519_34178);
if(temp__5735__auto___34191){
var seq__33519_34192__$1 = temp__5735__auto___34191;
if(cljs.core.chunked_seq_QMARK_(seq__33519_34192__$1)){
var c__4556__auto___34193 = cljs.core.chunk_first(seq__33519_34192__$1);
var G__34194 = cljs.core.chunk_rest(seq__33519_34192__$1);
var G__34195 = c__4556__auto___34193;
var G__34196 = cljs.core.count(c__4556__auto___34193);
var G__34197 = (0);
seq__33519_34178 = G__34194;
chunk__33521_34179 = G__34195;
count__33522_34180 = G__34196;
i__33523_34181 = G__34197;
continue;
} else {
var child_34198 = cljs.core.first(seq__33519_34192__$1);
if(cljs.core.truth_(child_34198)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34198);


var G__34199 = cljs.core.next(seq__33519_34192__$1);
var G__34200 = null;
var G__34201 = (0);
var G__34202 = (0);
seq__33519_34178 = G__34199;
chunk__33521_34179 = G__34200;
count__33522_34180 = G__34201;
i__33523_34181 = G__34202;
continue;
} else {
var G__34203 = cljs.core.next(seq__33519_34192__$1);
var G__34204 = null;
var G__34205 = (0);
var G__34206 = (0);
seq__33519_34178 = G__34203;
chunk__33521_34179 = G__34204;
count__33522_34180 = G__34205;
i__33523_34181 = G__34206;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34177);
}


var G__34210 = seq__33480_34172;
var G__34211 = chunk__33481_34173;
var G__34212 = count__33482_34174;
var G__34213 = (i__33483_34175 + (1));
seq__33480_34172 = G__34210;
chunk__33481_34173 = G__34211;
count__33482_34174 = G__34212;
i__33483_34175 = G__34213;
continue;
} else {
var temp__5735__auto___34214 = cljs.core.seq(seq__33480_34172);
if(temp__5735__auto___34214){
var seq__33480_34215__$1 = temp__5735__auto___34214;
if(cljs.core.chunked_seq_QMARK_(seq__33480_34215__$1)){
var c__4556__auto___34216 = cljs.core.chunk_first(seq__33480_34215__$1);
var G__34217 = cljs.core.chunk_rest(seq__33480_34215__$1);
var G__34218 = c__4556__auto___34216;
var G__34219 = cljs.core.count(c__4556__auto___34216);
var G__34220 = (0);
seq__33480_34172 = G__34217;
chunk__33481_34173 = G__34218;
count__33482_34174 = G__34219;
i__33483_34175 = G__34220;
continue;
} else {
var child_struct_34221 = cljs.core.first(seq__33480_34215__$1);
var children_34222 = shadow.dom.dom_node(child_struct_34221);
if(cljs.core.seq_QMARK_(children_34222)){
var seq__33534_34223 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34222));
var chunk__33536_34224 = null;
var count__33537_34225 = (0);
var i__33538_34226 = (0);
while(true){
if((i__33538_34226 < count__33537_34225)){
var child_34227 = chunk__33536_34224.cljs$core$IIndexed$_nth$arity$2(null,i__33538_34226);
if(cljs.core.truth_(child_34227)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34227);


var G__34228 = seq__33534_34223;
var G__34229 = chunk__33536_34224;
var G__34230 = count__33537_34225;
var G__34231 = (i__33538_34226 + (1));
seq__33534_34223 = G__34228;
chunk__33536_34224 = G__34229;
count__33537_34225 = G__34230;
i__33538_34226 = G__34231;
continue;
} else {
var G__34232 = seq__33534_34223;
var G__34233 = chunk__33536_34224;
var G__34234 = count__33537_34225;
var G__34235 = (i__33538_34226 + (1));
seq__33534_34223 = G__34232;
chunk__33536_34224 = G__34233;
count__33537_34225 = G__34234;
i__33538_34226 = G__34235;
continue;
}
} else {
var temp__5735__auto___34236__$1 = cljs.core.seq(seq__33534_34223);
if(temp__5735__auto___34236__$1){
var seq__33534_34237__$1 = temp__5735__auto___34236__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33534_34237__$1)){
var c__4556__auto___34238 = cljs.core.chunk_first(seq__33534_34237__$1);
var G__34239 = cljs.core.chunk_rest(seq__33534_34237__$1);
var G__34240 = c__4556__auto___34238;
var G__34241 = cljs.core.count(c__4556__auto___34238);
var G__34242 = (0);
seq__33534_34223 = G__34239;
chunk__33536_34224 = G__34240;
count__33537_34225 = G__34241;
i__33538_34226 = G__34242;
continue;
} else {
var child_34243 = cljs.core.first(seq__33534_34237__$1);
if(cljs.core.truth_(child_34243)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34243);


var G__34244 = cljs.core.next(seq__33534_34237__$1);
var G__34245 = null;
var G__34246 = (0);
var G__34247 = (0);
seq__33534_34223 = G__34244;
chunk__33536_34224 = G__34245;
count__33537_34225 = G__34246;
i__33538_34226 = G__34247;
continue;
} else {
var G__34248 = cljs.core.next(seq__33534_34237__$1);
var G__34249 = null;
var G__34250 = (0);
var G__34251 = (0);
seq__33534_34223 = G__34248;
chunk__33536_34224 = G__34249;
count__33537_34225 = G__34250;
i__33538_34226 = G__34251;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34222);
}


var G__34252 = cljs.core.next(seq__33480_34215__$1);
var G__34253 = null;
var G__34254 = (0);
var G__34255 = (0);
seq__33480_34172 = G__34252;
chunk__33481_34173 = G__34253;
count__33482_34174 = G__34254;
i__33483_34175 = G__34255;
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
var seq__33569 = cljs.core.seq(node);
var chunk__33570 = null;
var count__33571 = (0);
var i__33572 = (0);
while(true){
if((i__33572 < count__33571)){
var n = chunk__33570.cljs$core$IIndexed$_nth$arity$2(null,i__33572);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34260 = seq__33569;
var G__34261 = chunk__33570;
var G__34262 = count__33571;
var G__34263 = (i__33572 + (1));
seq__33569 = G__34260;
chunk__33570 = G__34261;
count__33571 = G__34262;
i__33572 = G__34263;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33569);
if(temp__5735__auto__){
var seq__33569__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33569__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33569__$1);
var G__34266 = cljs.core.chunk_rest(seq__33569__$1);
var G__34267 = c__4556__auto__;
var G__34268 = cljs.core.count(c__4556__auto__);
var G__34269 = (0);
seq__33569 = G__34266;
chunk__33570 = G__34267;
count__33571 = G__34268;
i__33572 = G__34269;
continue;
} else {
var n = cljs.core.first(seq__33569__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34270 = cljs.core.next(seq__33569__$1);
var G__34271 = null;
var G__34272 = (0);
var G__34273 = (0);
seq__33569 = G__34270;
chunk__33570 = G__34271;
count__33571 = G__34272;
i__33572 = G__34273;
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
var G__33605 = arguments.length;
switch (G__33605) {
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
var G__33607 = arguments.length;
switch (G__33607) {
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
var G__33618 = arguments.length;
switch (G__33618) {
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
var len__4736__auto___34294 = arguments.length;
var i__4737__auto___34295 = (0);
while(true){
if((i__4737__auto___34295 < len__4736__auto___34294)){
args__4742__auto__.push((arguments[i__4737__auto___34295]));

var G__34296 = (i__4737__auto___34295 + (1));
i__4737__auto___34295 = G__34296;
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
var seq__33628_34297 = cljs.core.seq(nodes);
var chunk__33629_34298 = null;
var count__33630_34299 = (0);
var i__33631_34300 = (0);
while(true){
if((i__33631_34300 < count__33630_34299)){
var node_34301 = chunk__33629_34298.cljs$core$IIndexed$_nth$arity$2(null,i__33631_34300);
fragment.appendChild(shadow.dom._to_dom(node_34301));


var G__34302 = seq__33628_34297;
var G__34303 = chunk__33629_34298;
var G__34304 = count__33630_34299;
var G__34305 = (i__33631_34300 + (1));
seq__33628_34297 = G__34302;
chunk__33629_34298 = G__34303;
count__33630_34299 = G__34304;
i__33631_34300 = G__34305;
continue;
} else {
var temp__5735__auto___34306 = cljs.core.seq(seq__33628_34297);
if(temp__5735__auto___34306){
var seq__33628_34307__$1 = temp__5735__auto___34306;
if(cljs.core.chunked_seq_QMARK_(seq__33628_34307__$1)){
var c__4556__auto___34308 = cljs.core.chunk_first(seq__33628_34307__$1);
var G__34309 = cljs.core.chunk_rest(seq__33628_34307__$1);
var G__34310 = c__4556__auto___34308;
var G__34311 = cljs.core.count(c__4556__auto___34308);
var G__34312 = (0);
seq__33628_34297 = G__34309;
chunk__33629_34298 = G__34310;
count__33630_34299 = G__34311;
i__33631_34300 = G__34312;
continue;
} else {
var node_34313 = cljs.core.first(seq__33628_34307__$1);
fragment.appendChild(shadow.dom._to_dom(node_34313));


var G__34314 = cljs.core.next(seq__33628_34307__$1);
var G__34315 = null;
var G__34316 = (0);
var G__34317 = (0);
seq__33628_34297 = G__34314;
chunk__33629_34298 = G__34315;
count__33630_34299 = G__34316;
i__33631_34300 = G__34317;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33622){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33622));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33632_34318 = cljs.core.seq(scripts);
var chunk__33633_34319 = null;
var count__33634_34320 = (0);
var i__33635_34321 = (0);
while(true){
if((i__33635_34321 < count__33634_34320)){
var vec__33649_34322 = chunk__33633_34319.cljs$core$IIndexed$_nth$arity$2(null,i__33635_34321);
var script_tag_34323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33649_34322,(0),null);
var script_body_34324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33649_34322,(1),null);
eval(script_body_34324);


var G__34325 = seq__33632_34318;
var G__34326 = chunk__33633_34319;
var G__34327 = count__33634_34320;
var G__34328 = (i__33635_34321 + (1));
seq__33632_34318 = G__34325;
chunk__33633_34319 = G__34326;
count__33634_34320 = G__34327;
i__33635_34321 = G__34328;
continue;
} else {
var temp__5735__auto___34346 = cljs.core.seq(seq__33632_34318);
if(temp__5735__auto___34346){
var seq__33632_34347__$1 = temp__5735__auto___34346;
if(cljs.core.chunked_seq_QMARK_(seq__33632_34347__$1)){
var c__4556__auto___34348 = cljs.core.chunk_first(seq__33632_34347__$1);
var G__34349 = cljs.core.chunk_rest(seq__33632_34347__$1);
var G__34350 = c__4556__auto___34348;
var G__34351 = cljs.core.count(c__4556__auto___34348);
var G__34352 = (0);
seq__33632_34318 = G__34349;
chunk__33633_34319 = G__34350;
count__33634_34320 = G__34351;
i__33635_34321 = G__34352;
continue;
} else {
var vec__33652_34353 = cljs.core.first(seq__33632_34347__$1);
var script_tag_34354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33652_34353,(0),null);
var script_body_34355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33652_34353,(1),null);
eval(script_body_34355);


var G__34356 = cljs.core.next(seq__33632_34347__$1);
var G__34357 = null;
var G__34358 = (0);
var G__34359 = (0);
seq__33632_34318 = G__34356;
chunk__33633_34319 = G__34357;
count__33634_34320 = G__34358;
i__33635_34321 = G__34359;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33656){
var vec__33657 = p__33656;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33657,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33657,(1),null);
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
var G__33666 = arguments.length;
switch (G__33666) {
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
var seq__33673 = cljs.core.seq(style_keys);
var chunk__33674 = null;
var count__33675 = (0);
var i__33676 = (0);
while(true){
if((i__33676 < count__33675)){
var it = chunk__33674.cljs$core$IIndexed$_nth$arity$2(null,i__33676);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34375 = seq__33673;
var G__34376 = chunk__33674;
var G__34377 = count__33675;
var G__34378 = (i__33676 + (1));
seq__33673 = G__34375;
chunk__33674 = G__34376;
count__33675 = G__34377;
i__33676 = G__34378;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33673);
if(temp__5735__auto__){
var seq__33673__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33673__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33673__$1);
var G__34380 = cljs.core.chunk_rest(seq__33673__$1);
var G__34381 = c__4556__auto__;
var G__34382 = cljs.core.count(c__4556__auto__);
var G__34383 = (0);
seq__33673 = G__34380;
chunk__33674 = G__34381;
count__33675 = G__34382;
i__33676 = G__34383;
continue;
} else {
var it = cljs.core.first(seq__33673__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34385 = cljs.core.next(seq__33673__$1);
var G__34386 = null;
var G__34387 = (0);
var G__34388 = (0);
seq__33673 = G__34385;
chunk__33674 = G__34386;
count__33675 = G__34387;
i__33676 = G__34388;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33681,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33704 = k33681;
var G__33704__$1 = (((G__33704 instanceof cljs.core.Keyword))?G__33704.fqn:null);
switch (G__33704__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33681,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33707){
var vec__33708 = p__33707;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33708,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33708,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33680){
var self__ = this;
var G__33680__$1 = this;
return (new cljs.core.RecordIter((0),G__33680__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33682,other33683){
var self__ = this;
var this33682__$1 = this;
return (((!((other33683 == null)))) && ((this33682__$1.constructor === other33683.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33682__$1.x,other33683.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33682__$1.y,other33683.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33682__$1.__extmap,other33683.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33680){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33728 = cljs.core.keyword_identical_QMARK_;
var expr__33729 = k__4388__auto__;
if(cljs.core.truth_((pred__33728.cljs$core$IFn$_invoke$arity$2 ? pred__33728.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33729) : pred__33728.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33729)))){
return (new shadow.dom.Coordinate(G__33680,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33728.cljs$core$IFn$_invoke$arity$2 ? pred__33728.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33729) : pred__33728.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33729)))){
return (new shadow.dom.Coordinate(self__.x,G__33680,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33680),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33680){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33680,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33696){
var extmap__4419__auto__ = (function (){var G__33748 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33696,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33696)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33748);
} else {
return G__33748;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33696),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33696),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33758,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33762 = k33758;
var G__33762__$1 = (((G__33762 instanceof cljs.core.Keyword))?G__33762.fqn:null);
switch (G__33762__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33758,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33763){
var vec__33764 = p__33763;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33764,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33764,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33757){
var self__ = this;
var G__33757__$1 = this;
return (new cljs.core.RecordIter((0),G__33757__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33759,other33760){
var self__ = this;
var this33759__$1 = this;
return (((!((other33760 == null)))) && ((this33759__$1.constructor === other33760.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33759__$1.w,other33760.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33759__$1.h,other33760.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33759__$1.__extmap,other33760.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33757){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33773 = cljs.core.keyword_identical_QMARK_;
var expr__33774 = k__4388__auto__;
if(cljs.core.truth_((pred__33773.cljs$core$IFn$_invoke$arity$2 ? pred__33773.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33774) : pred__33773.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33774)))){
return (new shadow.dom.Size(G__33757,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33773.cljs$core$IFn$_invoke$arity$2 ? pred__33773.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33774) : pred__33773.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33774)))){
return (new shadow.dom.Size(self__.w,G__33757,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33757),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33757){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33757,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33761){
var extmap__4419__auto__ = (function (){var G__33807 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33761,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33761)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33807);
} else {
return G__33807;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33761),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33761),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__34467 = (i + (1));
var G__34468 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34467;
ret = G__34468;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33824){
var vec__33825 = p__33824;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33825,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33825,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33837 = arguments.length;
switch (G__33837) {
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
var G__34476 = ps;
var G__34477 = (i + (1));
el__$1 = G__34476;
i = G__34477;
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
var vec__33872 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33872,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33872,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33872,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33875_34478 = cljs.core.seq(props);
var chunk__33876_34479 = null;
var count__33877_34480 = (0);
var i__33878_34481 = (0);
while(true){
if((i__33878_34481 < count__33877_34480)){
var vec__33885_34482 = chunk__33876_34479.cljs$core$IIndexed$_nth$arity$2(null,i__33878_34481);
var k_34483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33885_34482,(0),null);
var v_34484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33885_34482,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34483);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34483),v_34484);


var G__34485 = seq__33875_34478;
var G__34486 = chunk__33876_34479;
var G__34487 = count__33877_34480;
var G__34488 = (i__33878_34481 + (1));
seq__33875_34478 = G__34485;
chunk__33876_34479 = G__34486;
count__33877_34480 = G__34487;
i__33878_34481 = G__34488;
continue;
} else {
var temp__5735__auto___34489 = cljs.core.seq(seq__33875_34478);
if(temp__5735__auto___34489){
var seq__33875_34490__$1 = temp__5735__auto___34489;
if(cljs.core.chunked_seq_QMARK_(seq__33875_34490__$1)){
var c__4556__auto___34491 = cljs.core.chunk_first(seq__33875_34490__$1);
var G__34492 = cljs.core.chunk_rest(seq__33875_34490__$1);
var G__34493 = c__4556__auto___34491;
var G__34494 = cljs.core.count(c__4556__auto___34491);
var G__34495 = (0);
seq__33875_34478 = G__34492;
chunk__33876_34479 = G__34493;
count__33877_34480 = G__34494;
i__33878_34481 = G__34495;
continue;
} else {
var vec__33888_34496 = cljs.core.first(seq__33875_34490__$1);
var k_34497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33888_34496,(0),null);
var v_34498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33888_34496,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34497);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34497),v_34498);


var G__34499 = cljs.core.next(seq__33875_34490__$1);
var G__34500 = null;
var G__34501 = (0);
var G__34502 = (0);
seq__33875_34478 = G__34499;
chunk__33876_34479 = G__34500;
count__33877_34480 = G__34501;
i__33878_34481 = G__34502;
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
var vec__33908 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33908,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33908,(1),null);
var seq__33911_34503 = cljs.core.seq(node_children);
var chunk__33913_34504 = null;
var count__33914_34505 = (0);
var i__33915_34506 = (0);
while(true){
if((i__33915_34506 < count__33914_34505)){
var child_struct_34507 = chunk__33913_34504.cljs$core$IIndexed$_nth$arity$2(null,i__33915_34506);
if((!((child_struct_34507 == null)))){
if(typeof child_struct_34507 === 'string'){
var text_34508 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34508),child_struct_34507].join(''));
} else {
var children_34509 = shadow.dom.svg_node(child_struct_34507);
if(cljs.core.seq_QMARK_(children_34509)){
var seq__33978_34510 = cljs.core.seq(children_34509);
var chunk__33980_34511 = null;
var count__33981_34512 = (0);
var i__33982_34513 = (0);
while(true){
if((i__33982_34513 < count__33981_34512)){
var child_34514 = chunk__33980_34511.cljs$core$IIndexed$_nth$arity$2(null,i__33982_34513);
if(cljs.core.truth_(child_34514)){
node.appendChild(child_34514);


var G__34515 = seq__33978_34510;
var G__34516 = chunk__33980_34511;
var G__34517 = count__33981_34512;
var G__34518 = (i__33982_34513 + (1));
seq__33978_34510 = G__34515;
chunk__33980_34511 = G__34516;
count__33981_34512 = G__34517;
i__33982_34513 = G__34518;
continue;
} else {
var G__34519 = seq__33978_34510;
var G__34520 = chunk__33980_34511;
var G__34521 = count__33981_34512;
var G__34522 = (i__33982_34513 + (1));
seq__33978_34510 = G__34519;
chunk__33980_34511 = G__34520;
count__33981_34512 = G__34521;
i__33982_34513 = G__34522;
continue;
}
} else {
var temp__5735__auto___34523 = cljs.core.seq(seq__33978_34510);
if(temp__5735__auto___34523){
var seq__33978_34524__$1 = temp__5735__auto___34523;
if(cljs.core.chunked_seq_QMARK_(seq__33978_34524__$1)){
var c__4556__auto___34525 = cljs.core.chunk_first(seq__33978_34524__$1);
var G__34526 = cljs.core.chunk_rest(seq__33978_34524__$1);
var G__34527 = c__4556__auto___34525;
var G__34528 = cljs.core.count(c__4556__auto___34525);
var G__34529 = (0);
seq__33978_34510 = G__34526;
chunk__33980_34511 = G__34527;
count__33981_34512 = G__34528;
i__33982_34513 = G__34529;
continue;
} else {
var child_34530 = cljs.core.first(seq__33978_34524__$1);
if(cljs.core.truth_(child_34530)){
node.appendChild(child_34530);


var G__34531 = cljs.core.next(seq__33978_34524__$1);
var G__34532 = null;
var G__34533 = (0);
var G__34534 = (0);
seq__33978_34510 = G__34531;
chunk__33980_34511 = G__34532;
count__33981_34512 = G__34533;
i__33982_34513 = G__34534;
continue;
} else {
var G__34535 = cljs.core.next(seq__33978_34524__$1);
var G__34536 = null;
var G__34537 = (0);
var G__34538 = (0);
seq__33978_34510 = G__34535;
chunk__33980_34511 = G__34536;
count__33981_34512 = G__34537;
i__33982_34513 = G__34538;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34509);
}
}


var G__34539 = seq__33911_34503;
var G__34540 = chunk__33913_34504;
var G__34541 = count__33914_34505;
var G__34542 = (i__33915_34506 + (1));
seq__33911_34503 = G__34539;
chunk__33913_34504 = G__34540;
count__33914_34505 = G__34541;
i__33915_34506 = G__34542;
continue;
} else {
var G__34543 = seq__33911_34503;
var G__34544 = chunk__33913_34504;
var G__34545 = count__33914_34505;
var G__34546 = (i__33915_34506 + (1));
seq__33911_34503 = G__34543;
chunk__33913_34504 = G__34544;
count__33914_34505 = G__34545;
i__33915_34506 = G__34546;
continue;
}
} else {
var temp__5735__auto___34547 = cljs.core.seq(seq__33911_34503);
if(temp__5735__auto___34547){
var seq__33911_34548__$1 = temp__5735__auto___34547;
if(cljs.core.chunked_seq_QMARK_(seq__33911_34548__$1)){
var c__4556__auto___34549 = cljs.core.chunk_first(seq__33911_34548__$1);
var G__34550 = cljs.core.chunk_rest(seq__33911_34548__$1);
var G__34551 = c__4556__auto___34549;
var G__34552 = cljs.core.count(c__4556__auto___34549);
var G__34553 = (0);
seq__33911_34503 = G__34550;
chunk__33913_34504 = G__34551;
count__33914_34505 = G__34552;
i__33915_34506 = G__34553;
continue;
} else {
var child_struct_34554 = cljs.core.first(seq__33911_34548__$1);
if((!((child_struct_34554 == null)))){
if(typeof child_struct_34554 === 'string'){
var text_34555 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34555),child_struct_34554].join(''));
} else {
var children_34556 = shadow.dom.svg_node(child_struct_34554);
if(cljs.core.seq_QMARK_(children_34556)){
var seq__33990_34557 = cljs.core.seq(children_34556);
var chunk__33992_34558 = null;
var count__33993_34559 = (0);
var i__33994_34560 = (0);
while(true){
if((i__33994_34560 < count__33993_34559)){
var child_34561 = chunk__33992_34558.cljs$core$IIndexed$_nth$arity$2(null,i__33994_34560);
if(cljs.core.truth_(child_34561)){
node.appendChild(child_34561);


var G__34562 = seq__33990_34557;
var G__34563 = chunk__33992_34558;
var G__34564 = count__33993_34559;
var G__34565 = (i__33994_34560 + (1));
seq__33990_34557 = G__34562;
chunk__33992_34558 = G__34563;
count__33993_34559 = G__34564;
i__33994_34560 = G__34565;
continue;
} else {
var G__34566 = seq__33990_34557;
var G__34567 = chunk__33992_34558;
var G__34568 = count__33993_34559;
var G__34569 = (i__33994_34560 + (1));
seq__33990_34557 = G__34566;
chunk__33992_34558 = G__34567;
count__33993_34559 = G__34568;
i__33994_34560 = G__34569;
continue;
}
} else {
var temp__5735__auto___34570__$1 = cljs.core.seq(seq__33990_34557);
if(temp__5735__auto___34570__$1){
var seq__33990_34571__$1 = temp__5735__auto___34570__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33990_34571__$1)){
var c__4556__auto___34572 = cljs.core.chunk_first(seq__33990_34571__$1);
var G__34573 = cljs.core.chunk_rest(seq__33990_34571__$1);
var G__34574 = c__4556__auto___34572;
var G__34575 = cljs.core.count(c__4556__auto___34572);
var G__34576 = (0);
seq__33990_34557 = G__34573;
chunk__33992_34558 = G__34574;
count__33993_34559 = G__34575;
i__33994_34560 = G__34576;
continue;
} else {
var child_34577 = cljs.core.first(seq__33990_34571__$1);
if(cljs.core.truth_(child_34577)){
node.appendChild(child_34577);


var G__34578 = cljs.core.next(seq__33990_34571__$1);
var G__34579 = null;
var G__34580 = (0);
var G__34581 = (0);
seq__33990_34557 = G__34578;
chunk__33992_34558 = G__34579;
count__33993_34559 = G__34580;
i__33994_34560 = G__34581;
continue;
} else {
var G__34582 = cljs.core.next(seq__33990_34571__$1);
var G__34583 = null;
var G__34584 = (0);
var G__34585 = (0);
seq__33990_34557 = G__34582;
chunk__33992_34558 = G__34583;
count__33993_34559 = G__34584;
i__33994_34560 = G__34585;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34556);
}
}


var G__34586 = cljs.core.next(seq__33911_34548__$1);
var G__34587 = null;
var G__34588 = (0);
var G__34589 = (0);
seq__33911_34503 = G__34586;
chunk__33913_34504 = G__34587;
count__33914_34505 = G__34588;
i__33915_34506 = G__34589;
continue;
} else {
var G__34590 = cljs.core.next(seq__33911_34548__$1);
var G__34591 = null;
var G__34592 = (0);
var G__34593 = (0);
seq__33911_34503 = G__34590;
chunk__33913_34504 = G__34591;
count__33914_34505 = G__34592;
i__33915_34506 = G__34593;
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
var len__4736__auto___34594 = arguments.length;
var i__4737__auto___34595 = (0);
while(true){
if((i__4737__auto___34595 < len__4736__auto___34594)){
args__4742__auto__.push((arguments[i__4737__auto___34595]));

var G__34596 = (i__4737__auto___34595 + (1));
i__4737__auto___34595 = G__34596;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34009){
var G__34010 = cljs.core.first(seq34009);
var seq34009__$1 = cljs.core.next(seq34009);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34010,seq34009__$1);
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
var c__30914__auto___34598 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30915__auto__ = (function (){var switch__30738__auto__ = (function (state_34030){
var state_val_34031 = (state_34030[(1)]);
if((state_val_34031 === (1))){
var state_34030__$1 = state_34030;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34030__$1,(2),once_or_cleanup);
} else {
if((state_val_34031 === (2))){
var inst_34027 = (state_34030[(2)]);
var inst_34028 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34030__$1 = (function (){var statearr_34032 = state_34030;
(statearr_34032[(7)] = inst_34027);

return statearr_34032;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34030__$1,inst_34028);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30739__auto__ = null;
var shadow$dom$state_machine__30739__auto____0 = (function (){
var statearr_34033 = [null,null,null,null,null,null,null,null];
(statearr_34033[(0)] = shadow$dom$state_machine__30739__auto__);

(statearr_34033[(1)] = (1));

return statearr_34033;
});
var shadow$dom$state_machine__30739__auto____1 = (function (state_34030){
while(true){
var ret_value__30740__auto__ = (function (){try{while(true){
var result__30741__auto__ = switch__30738__auto__(state_34030);
if(cljs.core.keyword_identical_QMARK_(result__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30741__auto__;
}
break;
}
}catch (e34043){var ex__30742__auto__ = e34043;
var statearr_34044_34599 = state_34030;
(statearr_34044_34599[(2)] = ex__30742__auto__);


if(cljs.core.seq((state_34030[(4)]))){
var statearr_34045_34600 = state_34030;
(statearr_34045_34600[(1)] = cljs.core.first((state_34030[(4)])));

} else {
throw ex__30742__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34601 = state_34030;
state_34030 = G__34601;
continue;
} else {
return ret_value__30740__auto__;
}
break;
}
});
shadow$dom$state_machine__30739__auto__ = function(state_34030){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30739__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30739__auto____1.call(this,state_34030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30739__auto____0;
shadow$dom$state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30739__auto____1;
return shadow$dom$state_machine__30739__auto__;
})()
})();
var state__30916__auto__ = (function (){var statearr_34046 = f__30915__auto__();
(statearr_34046[(6)] = c__30914__auto___34598);

return statearr_34046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30916__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
