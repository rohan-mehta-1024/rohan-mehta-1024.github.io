goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34113 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_34113(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34119 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_34119(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33408 = coll;
var G__33409 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33408,G__33409) : shadow.dom.lazy_native_coll_seq.call(null,G__33408,G__33409));
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
var G__33412 = arguments.length;
switch (G__33412) {
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
var G__33414 = arguments.length;
switch (G__33414) {
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
var G__33416 = arguments.length;
switch (G__33416) {
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
var G__33420 = arguments.length;
switch (G__33420) {
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
var G__33425 = arguments.length;
switch (G__33425) {
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
var G__33434 = arguments.length;
switch (G__33434) {
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
}catch (e33435){if((e33435 instanceof Object)){
var e = e33435;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33435;

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
var seq__33436 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33437 = null;
var count__33438 = (0);
var i__33439 = (0);
while(true){
if((i__33439 < count__33438)){
var el = chunk__33437.cljs$core$IIndexed$_nth$arity$2(null,i__33439);
var handler_34170__$1 = ((function (seq__33436,chunk__33437,count__33438,i__33439,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33436,chunk__33437,count__33438,i__33439,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34170__$1);


var G__34171 = seq__33436;
var G__34172 = chunk__33437;
var G__34173 = count__33438;
var G__34174 = (i__33439 + (1));
seq__33436 = G__34171;
chunk__33437 = G__34172;
count__33438 = G__34173;
i__33439 = G__34174;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33436);
if(temp__5735__auto__){
var seq__33436__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33436__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33436__$1);
var G__34175 = cljs.core.chunk_rest(seq__33436__$1);
var G__34176 = c__4556__auto__;
var G__34177 = cljs.core.count(c__4556__auto__);
var G__34178 = (0);
seq__33436 = G__34175;
chunk__33437 = G__34176;
count__33438 = G__34177;
i__33439 = G__34178;
continue;
} else {
var el = cljs.core.first(seq__33436__$1);
var handler_34180__$1 = ((function (seq__33436,chunk__33437,count__33438,i__33439,el,seq__33436__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33436,chunk__33437,count__33438,i__33439,el,seq__33436__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34180__$1);


var G__34181 = cljs.core.next(seq__33436__$1);
var G__34182 = null;
var G__34183 = (0);
var G__34184 = (0);
seq__33436 = G__34181;
chunk__33437 = G__34182;
count__33438 = G__34183;
i__33439 = G__34184;
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
var G__33461 = arguments.length;
switch (G__33461) {
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
var seq__33470 = cljs.core.seq(events);
var chunk__33471 = null;
var count__33472 = (0);
var i__33473 = (0);
while(true){
if((i__33473 < count__33472)){
var vec__33483 = chunk__33471.cljs$core$IIndexed$_nth$arity$2(null,i__33473);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33483,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33483,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34195 = seq__33470;
var G__34196 = chunk__33471;
var G__34197 = count__33472;
var G__34198 = (i__33473 + (1));
seq__33470 = G__34195;
chunk__33471 = G__34196;
count__33472 = G__34197;
i__33473 = G__34198;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33470);
if(temp__5735__auto__){
var seq__33470__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33470__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33470__$1);
var G__34199 = cljs.core.chunk_rest(seq__33470__$1);
var G__34200 = c__4556__auto__;
var G__34201 = cljs.core.count(c__4556__auto__);
var G__34202 = (0);
seq__33470 = G__34199;
chunk__33471 = G__34200;
count__33472 = G__34201;
i__33473 = G__34202;
continue;
} else {
var vec__33487 = cljs.core.first(seq__33470__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33487,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33487,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34203 = cljs.core.next(seq__33470__$1);
var G__34204 = null;
var G__34205 = (0);
var G__34206 = (0);
seq__33470 = G__34203;
chunk__33471 = G__34204;
count__33472 = G__34205;
i__33473 = G__34206;
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
var seq__33496 = cljs.core.seq(styles);
var chunk__33497 = null;
var count__33498 = (0);
var i__33499 = (0);
while(true){
if((i__33499 < count__33498)){
var vec__33510 = chunk__33497.cljs$core$IIndexed$_nth$arity$2(null,i__33499);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33510,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33510,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34207 = seq__33496;
var G__34208 = chunk__33497;
var G__34209 = count__33498;
var G__34210 = (i__33499 + (1));
seq__33496 = G__34207;
chunk__33497 = G__34208;
count__33498 = G__34209;
i__33499 = G__34210;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33496);
if(temp__5735__auto__){
var seq__33496__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33496__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33496__$1);
var G__34211 = cljs.core.chunk_rest(seq__33496__$1);
var G__34212 = c__4556__auto__;
var G__34213 = cljs.core.count(c__4556__auto__);
var G__34214 = (0);
seq__33496 = G__34211;
chunk__33497 = G__34212;
count__33498 = G__34213;
i__33499 = G__34214;
continue;
} else {
var vec__33513 = cljs.core.first(seq__33496__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33513,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33513,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34217 = cljs.core.next(seq__33496__$1);
var G__34218 = null;
var G__34219 = (0);
var G__34220 = (0);
seq__33496 = G__34217;
chunk__33497 = G__34218;
count__33498 = G__34219;
i__33499 = G__34220;
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
var G__33516_34222 = key;
var G__33516_34223__$1 = (((G__33516_34222 instanceof cljs.core.Keyword))?G__33516_34222.fqn:null);
switch (G__33516_34223__$1) {
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
var ks_34228 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_34228,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_34228,"aria-");
}
})())){
el.setAttribute(ks_34228,value);
} else {
(el[ks_34228] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33527){
var map__33528 = p__33527;
var map__33528__$1 = (((((!((map__33528 == null))))?(((((map__33528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33528):map__33528);
var props = map__33528__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33528__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33531 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33531,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33531,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33531,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33535 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33535,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33535;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33541 = arguments.length;
switch (G__33541) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33543){
var vec__33544 = p__33543;
var seq__33545 = cljs.core.seq(vec__33544);
var first__33546 = cljs.core.first(seq__33545);
var seq__33545__$1 = cljs.core.next(seq__33545);
var nn = first__33546;
var first__33546__$1 = cljs.core.first(seq__33545__$1);
var seq__33545__$2 = cljs.core.next(seq__33545__$1);
var np = first__33546__$1;
var nc = seq__33545__$2;
var node = vec__33544;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33550 = nn;
var G__33551 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33550,G__33551) : create_fn.call(null,G__33550,G__33551));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33552 = nn;
var G__33553 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33552,G__33553) : create_fn.call(null,G__33552,G__33553));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33558 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33558,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33558,(1),null);
var seq__33561_34257 = cljs.core.seq(node_children);
var chunk__33562_34258 = null;
var count__33563_34259 = (0);
var i__33564_34260 = (0);
while(true){
if((i__33564_34260 < count__33563_34259)){
var child_struct_34261 = chunk__33562_34258.cljs$core$IIndexed$_nth$arity$2(null,i__33564_34260);
var children_34262 = shadow.dom.dom_node(child_struct_34261);
if(cljs.core.seq_QMARK_(children_34262)){
var seq__33592_34263 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34262));
var chunk__33594_34264 = null;
var count__33595_34265 = (0);
var i__33596_34266 = (0);
while(true){
if((i__33596_34266 < count__33595_34265)){
var child_34267 = chunk__33594_34264.cljs$core$IIndexed$_nth$arity$2(null,i__33596_34266);
if(cljs.core.truth_(child_34267)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34267);


var G__34268 = seq__33592_34263;
var G__34269 = chunk__33594_34264;
var G__34270 = count__33595_34265;
var G__34271 = (i__33596_34266 + (1));
seq__33592_34263 = G__34268;
chunk__33594_34264 = G__34269;
count__33595_34265 = G__34270;
i__33596_34266 = G__34271;
continue;
} else {
var G__34272 = seq__33592_34263;
var G__34273 = chunk__33594_34264;
var G__34274 = count__33595_34265;
var G__34275 = (i__33596_34266 + (1));
seq__33592_34263 = G__34272;
chunk__33594_34264 = G__34273;
count__33595_34265 = G__34274;
i__33596_34266 = G__34275;
continue;
}
} else {
var temp__5735__auto___34276 = cljs.core.seq(seq__33592_34263);
if(temp__5735__auto___34276){
var seq__33592_34277__$1 = temp__5735__auto___34276;
if(cljs.core.chunked_seq_QMARK_(seq__33592_34277__$1)){
var c__4556__auto___34278 = cljs.core.chunk_first(seq__33592_34277__$1);
var G__34279 = cljs.core.chunk_rest(seq__33592_34277__$1);
var G__34280 = c__4556__auto___34278;
var G__34281 = cljs.core.count(c__4556__auto___34278);
var G__34282 = (0);
seq__33592_34263 = G__34279;
chunk__33594_34264 = G__34280;
count__33595_34265 = G__34281;
i__33596_34266 = G__34282;
continue;
} else {
var child_34283 = cljs.core.first(seq__33592_34277__$1);
if(cljs.core.truth_(child_34283)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34283);


var G__34284 = cljs.core.next(seq__33592_34277__$1);
var G__34285 = null;
var G__34286 = (0);
var G__34287 = (0);
seq__33592_34263 = G__34284;
chunk__33594_34264 = G__34285;
count__33595_34265 = G__34286;
i__33596_34266 = G__34287;
continue;
} else {
var G__34288 = cljs.core.next(seq__33592_34277__$1);
var G__34289 = null;
var G__34290 = (0);
var G__34291 = (0);
seq__33592_34263 = G__34288;
chunk__33594_34264 = G__34289;
count__33595_34265 = G__34290;
i__33596_34266 = G__34291;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34262);
}


var G__34293 = seq__33561_34257;
var G__34294 = chunk__33562_34258;
var G__34295 = count__33563_34259;
var G__34296 = (i__33564_34260 + (1));
seq__33561_34257 = G__34293;
chunk__33562_34258 = G__34294;
count__33563_34259 = G__34295;
i__33564_34260 = G__34296;
continue;
} else {
var temp__5735__auto___34298 = cljs.core.seq(seq__33561_34257);
if(temp__5735__auto___34298){
var seq__33561_34299__$1 = temp__5735__auto___34298;
if(cljs.core.chunked_seq_QMARK_(seq__33561_34299__$1)){
var c__4556__auto___34300 = cljs.core.chunk_first(seq__33561_34299__$1);
var G__34302 = cljs.core.chunk_rest(seq__33561_34299__$1);
var G__34303 = c__4556__auto___34300;
var G__34304 = cljs.core.count(c__4556__auto___34300);
var G__34305 = (0);
seq__33561_34257 = G__34302;
chunk__33562_34258 = G__34303;
count__33563_34259 = G__34304;
i__33564_34260 = G__34305;
continue;
} else {
var child_struct_34306 = cljs.core.first(seq__33561_34299__$1);
var children_34307 = shadow.dom.dom_node(child_struct_34306);
if(cljs.core.seq_QMARK_(children_34307)){
var seq__33618_34308 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34307));
var chunk__33620_34309 = null;
var count__33621_34310 = (0);
var i__33622_34311 = (0);
while(true){
if((i__33622_34311 < count__33621_34310)){
var child_34312 = chunk__33620_34309.cljs$core$IIndexed$_nth$arity$2(null,i__33622_34311);
if(cljs.core.truth_(child_34312)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34312);


var G__34313 = seq__33618_34308;
var G__34314 = chunk__33620_34309;
var G__34315 = count__33621_34310;
var G__34316 = (i__33622_34311 + (1));
seq__33618_34308 = G__34313;
chunk__33620_34309 = G__34314;
count__33621_34310 = G__34315;
i__33622_34311 = G__34316;
continue;
} else {
var G__34317 = seq__33618_34308;
var G__34318 = chunk__33620_34309;
var G__34319 = count__33621_34310;
var G__34320 = (i__33622_34311 + (1));
seq__33618_34308 = G__34317;
chunk__33620_34309 = G__34318;
count__33621_34310 = G__34319;
i__33622_34311 = G__34320;
continue;
}
} else {
var temp__5735__auto___34322__$1 = cljs.core.seq(seq__33618_34308);
if(temp__5735__auto___34322__$1){
var seq__33618_34324__$1 = temp__5735__auto___34322__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33618_34324__$1)){
var c__4556__auto___34325 = cljs.core.chunk_first(seq__33618_34324__$1);
var G__34326 = cljs.core.chunk_rest(seq__33618_34324__$1);
var G__34327 = c__4556__auto___34325;
var G__34328 = cljs.core.count(c__4556__auto___34325);
var G__34329 = (0);
seq__33618_34308 = G__34326;
chunk__33620_34309 = G__34327;
count__33621_34310 = G__34328;
i__33622_34311 = G__34329;
continue;
} else {
var child_34331 = cljs.core.first(seq__33618_34324__$1);
if(cljs.core.truth_(child_34331)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34331);


var G__34332 = cljs.core.next(seq__33618_34324__$1);
var G__34333 = null;
var G__34334 = (0);
var G__34335 = (0);
seq__33618_34308 = G__34332;
chunk__33620_34309 = G__34333;
count__33621_34310 = G__34334;
i__33622_34311 = G__34335;
continue;
} else {
var G__34336 = cljs.core.next(seq__33618_34324__$1);
var G__34337 = null;
var G__34338 = (0);
var G__34339 = (0);
seq__33618_34308 = G__34336;
chunk__33620_34309 = G__34337;
count__33621_34310 = G__34338;
i__33622_34311 = G__34339;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34307);
}


var G__34340 = cljs.core.next(seq__33561_34299__$1);
var G__34341 = null;
var G__34342 = (0);
var G__34343 = (0);
seq__33561_34257 = G__34340;
chunk__33562_34258 = G__34341;
count__33563_34259 = G__34342;
i__33564_34260 = G__34343;
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
var seq__33642 = cljs.core.seq(node);
var chunk__33643 = null;
var count__33644 = (0);
var i__33645 = (0);
while(true){
if((i__33645 < count__33644)){
var n = chunk__33643.cljs$core$IIndexed$_nth$arity$2(null,i__33645);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34344 = seq__33642;
var G__34345 = chunk__33643;
var G__34346 = count__33644;
var G__34347 = (i__33645 + (1));
seq__33642 = G__34344;
chunk__33643 = G__34345;
count__33644 = G__34346;
i__33645 = G__34347;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33642);
if(temp__5735__auto__){
var seq__33642__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33642__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33642__$1);
var G__34348 = cljs.core.chunk_rest(seq__33642__$1);
var G__34349 = c__4556__auto__;
var G__34350 = cljs.core.count(c__4556__auto__);
var G__34351 = (0);
seq__33642 = G__34348;
chunk__33643 = G__34349;
count__33644 = G__34350;
i__33645 = G__34351;
continue;
} else {
var n = cljs.core.first(seq__33642__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34352 = cljs.core.next(seq__33642__$1);
var G__34353 = null;
var G__34354 = (0);
var G__34355 = (0);
seq__33642 = G__34352;
chunk__33643 = G__34353;
count__33644 = G__34354;
i__33645 = G__34355;
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
var G__33657 = arguments.length;
switch (G__33657) {
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
var G__33659 = arguments.length;
switch (G__33659) {
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
var G__33663 = arguments.length;
switch (G__33663) {
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
var len__4736__auto___34359 = arguments.length;
var i__4737__auto___34360 = (0);
while(true){
if((i__4737__auto___34360 < len__4736__auto___34359)){
args__4742__auto__.push((arguments[i__4737__auto___34360]));

var G__34361 = (i__4737__auto___34360 + (1));
i__4737__auto___34360 = G__34361;
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
var seq__33681_34362 = cljs.core.seq(nodes);
var chunk__33682_34363 = null;
var count__33683_34364 = (0);
var i__33684_34365 = (0);
while(true){
if((i__33684_34365 < count__33683_34364)){
var node_34366 = chunk__33682_34363.cljs$core$IIndexed$_nth$arity$2(null,i__33684_34365);
fragment.appendChild(shadow.dom._to_dom(node_34366));


var G__34367 = seq__33681_34362;
var G__34368 = chunk__33682_34363;
var G__34369 = count__33683_34364;
var G__34370 = (i__33684_34365 + (1));
seq__33681_34362 = G__34367;
chunk__33682_34363 = G__34368;
count__33683_34364 = G__34369;
i__33684_34365 = G__34370;
continue;
} else {
var temp__5735__auto___34371 = cljs.core.seq(seq__33681_34362);
if(temp__5735__auto___34371){
var seq__33681_34372__$1 = temp__5735__auto___34371;
if(cljs.core.chunked_seq_QMARK_(seq__33681_34372__$1)){
var c__4556__auto___34373 = cljs.core.chunk_first(seq__33681_34372__$1);
var G__34374 = cljs.core.chunk_rest(seq__33681_34372__$1);
var G__34375 = c__4556__auto___34373;
var G__34376 = cljs.core.count(c__4556__auto___34373);
var G__34377 = (0);
seq__33681_34362 = G__34374;
chunk__33682_34363 = G__34375;
count__33683_34364 = G__34376;
i__33684_34365 = G__34377;
continue;
} else {
var node_34378 = cljs.core.first(seq__33681_34372__$1);
fragment.appendChild(shadow.dom._to_dom(node_34378));


var G__34379 = cljs.core.next(seq__33681_34372__$1);
var G__34380 = null;
var G__34381 = (0);
var G__34382 = (0);
seq__33681_34362 = G__34379;
chunk__33682_34363 = G__34380;
count__33683_34364 = G__34381;
i__33684_34365 = G__34382;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33670){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33670));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33694_34384 = cljs.core.seq(scripts);
var chunk__33695_34385 = null;
var count__33696_34386 = (0);
var i__33697_34387 = (0);
while(true){
if((i__33697_34387 < count__33696_34386)){
var vec__33709_34389 = chunk__33695_34385.cljs$core$IIndexed$_nth$arity$2(null,i__33697_34387);
var script_tag_34390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33709_34389,(0),null);
var script_body_34391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33709_34389,(1),null);
eval(script_body_34391);


var G__34398 = seq__33694_34384;
var G__34399 = chunk__33695_34385;
var G__34400 = count__33696_34386;
var G__34401 = (i__33697_34387 + (1));
seq__33694_34384 = G__34398;
chunk__33695_34385 = G__34399;
count__33696_34386 = G__34400;
i__33697_34387 = G__34401;
continue;
} else {
var temp__5735__auto___34402 = cljs.core.seq(seq__33694_34384);
if(temp__5735__auto___34402){
var seq__33694_34403__$1 = temp__5735__auto___34402;
if(cljs.core.chunked_seq_QMARK_(seq__33694_34403__$1)){
var c__4556__auto___34404 = cljs.core.chunk_first(seq__33694_34403__$1);
var G__34405 = cljs.core.chunk_rest(seq__33694_34403__$1);
var G__34406 = c__4556__auto___34404;
var G__34407 = cljs.core.count(c__4556__auto___34404);
var G__34408 = (0);
seq__33694_34384 = G__34405;
chunk__33695_34385 = G__34406;
count__33696_34386 = G__34407;
i__33697_34387 = G__34408;
continue;
} else {
var vec__33715_34409 = cljs.core.first(seq__33694_34403__$1);
var script_tag_34410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33715_34409,(0),null);
var script_body_34411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33715_34409,(1),null);
eval(script_body_34411);


var G__34412 = cljs.core.next(seq__33694_34403__$1);
var G__34413 = null;
var G__34414 = (0);
var G__34415 = (0);
seq__33694_34384 = G__34412;
chunk__33695_34385 = G__34413;
count__33696_34386 = G__34414;
i__33697_34387 = G__34415;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33718){
var vec__33723 = p__33718;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33723,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33723,(1),null);
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
var G__33767 = arguments.length;
switch (G__33767) {
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
var seq__33791 = cljs.core.seq(style_keys);
var chunk__33792 = null;
var count__33793 = (0);
var i__33794 = (0);
while(true){
if((i__33794 < count__33793)){
var it = chunk__33792.cljs$core$IIndexed$_nth$arity$2(null,i__33794);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34424 = seq__33791;
var G__34425 = chunk__33792;
var G__34426 = count__33793;
var G__34427 = (i__33794 + (1));
seq__33791 = G__34424;
chunk__33792 = G__34425;
count__33793 = G__34426;
i__33794 = G__34427;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33791);
if(temp__5735__auto__){
var seq__33791__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33791__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33791__$1);
var G__34429 = cljs.core.chunk_rest(seq__33791__$1);
var G__34430 = c__4556__auto__;
var G__34431 = cljs.core.count(c__4556__auto__);
var G__34432 = (0);
seq__33791 = G__34429;
chunk__33792 = G__34430;
count__33793 = G__34431;
i__33794 = G__34432;
continue;
} else {
var it = cljs.core.first(seq__33791__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34435 = cljs.core.next(seq__33791__$1);
var G__34436 = null;
var G__34437 = (0);
var G__34438 = (0);
seq__33791 = G__34435;
chunk__33792 = G__34436;
count__33793 = G__34437;
i__33794 = G__34438;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33801,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33805 = k33801;
var G__33805__$1 = (((G__33805 instanceof cljs.core.Keyword))?G__33805.fqn:null);
switch (G__33805__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33801,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33806){
var vec__33808 = p__33806;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33808,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33808,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33800){
var self__ = this;
var G__33800__$1 = this;
return (new cljs.core.RecordIter((0),G__33800__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33802,other33803){
var self__ = this;
var this33802__$1 = this;
return (((!((other33803 == null)))) && ((this33802__$1.constructor === other33803.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33802__$1.x,other33803.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33802__$1.y,other33803.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33802__$1.__extmap,other33803.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33800){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33821 = cljs.core.keyword_identical_QMARK_;
var expr__33822 = k__4388__auto__;
if(cljs.core.truth_((pred__33821.cljs$core$IFn$_invoke$arity$2 ? pred__33821.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33822) : pred__33821.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33822)))){
return (new shadow.dom.Coordinate(G__33800,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33821.cljs$core$IFn$_invoke$arity$2 ? pred__33821.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33822) : pred__33821.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33822)))){
return (new shadow.dom.Coordinate(self__.x,G__33800,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33800),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33800){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33800,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33804){
var extmap__4419__auto__ = (function (){var G__33824 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33804,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33804)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33824);
} else {
return G__33824;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33804),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33804),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33834,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33839 = k33834;
var G__33839__$1 = (((G__33839 instanceof cljs.core.Keyword))?G__33839.fqn:null);
switch (G__33839__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33834,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33843){
var vec__33845 = p__33843;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33845,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33845,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33833){
var self__ = this;
var G__33833__$1 = this;
return (new cljs.core.RecordIter((0),G__33833__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33835,other33836){
var self__ = this;
var this33835__$1 = this;
return (((!((other33836 == null)))) && ((this33835__$1.constructor === other33836.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33835__$1.w,other33836.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33835__$1.h,other33836.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33835__$1.__extmap,other33836.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33833){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33868 = cljs.core.keyword_identical_QMARK_;
var expr__33869 = k__4388__auto__;
if(cljs.core.truth_((pred__33868.cljs$core$IFn$_invoke$arity$2 ? pred__33868.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33869) : pred__33868.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33869)))){
return (new shadow.dom.Size(G__33833,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33868.cljs$core$IFn$_invoke$arity$2 ? pred__33868.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33869) : pred__33868.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33869)))){
return (new shadow.dom.Size(self__.w,G__33833,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33833),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33833){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33833,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33837){
var extmap__4419__auto__ = (function (){var G__33875 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33837,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33837)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33875);
} else {
return G__33875;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33837),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33837),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__34476 = (i + (1));
var G__34477 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34476;
ret = G__34477;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33907){
var vec__33908 = p__33907;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33908,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33908,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33912 = arguments.length;
switch (G__33912) {
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
var G__34489 = ps;
var G__34490 = (i + (1));
el__$1 = G__34489;
i = G__34490;
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
var vec__33926 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33926,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33926,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33926,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33931_34493 = cljs.core.seq(props);
var chunk__33932_34494 = null;
var count__33933_34495 = (0);
var i__33934_34496 = (0);
while(true){
if((i__33934_34496 < count__33933_34495)){
var vec__33955_34498 = chunk__33932_34494.cljs$core$IIndexed$_nth$arity$2(null,i__33934_34496);
var k_34499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33955_34498,(0),null);
var v_34500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33955_34498,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34499);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34499),v_34500);


var G__34502 = seq__33931_34493;
var G__34503 = chunk__33932_34494;
var G__34504 = count__33933_34495;
var G__34505 = (i__33934_34496 + (1));
seq__33931_34493 = G__34502;
chunk__33932_34494 = G__34503;
count__33933_34495 = G__34504;
i__33934_34496 = G__34505;
continue;
} else {
var temp__5735__auto___34507 = cljs.core.seq(seq__33931_34493);
if(temp__5735__auto___34507){
var seq__33931_34508__$1 = temp__5735__auto___34507;
if(cljs.core.chunked_seq_QMARK_(seq__33931_34508__$1)){
var c__4556__auto___34509 = cljs.core.chunk_first(seq__33931_34508__$1);
var G__34511 = cljs.core.chunk_rest(seq__33931_34508__$1);
var G__34512 = c__4556__auto___34509;
var G__34513 = cljs.core.count(c__4556__auto___34509);
var G__34514 = (0);
seq__33931_34493 = G__34511;
chunk__33932_34494 = G__34512;
count__33933_34495 = G__34513;
i__33934_34496 = G__34514;
continue;
} else {
var vec__33961_34515 = cljs.core.first(seq__33931_34508__$1);
var k_34516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33961_34515,(0),null);
var v_34517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33961_34515,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34516);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34516),v_34517);


var G__34520 = cljs.core.next(seq__33931_34508__$1);
var G__34521 = null;
var G__34522 = (0);
var G__34523 = (0);
seq__33931_34493 = G__34520;
chunk__33932_34494 = G__34521;
count__33933_34495 = G__34522;
i__33934_34496 = G__34523;
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
var vec__33971 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33971,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33971,(1),null);
var seq__33974_34525 = cljs.core.seq(node_children);
var chunk__33976_34526 = null;
var count__33977_34527 = (0);
var i__33978_34528 = (0);
while(true){
if((i__33978_34528 < count__33977_34527)){
var child_struct_34529 = chunk__33976_34526.cljs$core$IIndexed$_nth$arity$2(null,i__33978_34528);
if((!((child_struct_34529 == null)))){
if(typeof child_struct_34529 === 'string'){
var text_34531 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34531),child_struct_34529].join(''));
} else {
var children_34532 = shadow.dom.svg_node(child_struct_34529);
if(cljs.core.seq_QMARK_(children_34532)){
var seq__34019_34533 = cljs.core.seq(children_34532);
var chunk__34021_34534 = null;
var count__34022_34535 = (0);
var i__34023_34536 = (0);
while(true){
if((i__34023_34536 < count__34022_34535)){
var child_34537 = chunk__34021_34534.cljs$core$IIndexed$_nth$arity$2(null,i__34023_34536);
if(cljs.core.truth_(child_34537)){
node.appendChild(child_34537);


var G__34538 = seq__34019_34533;
var G__34539 = chunk__34021_34534;
var G__34540 = count__34022_34535;
var G__34541 = (i__34023_34536 + (1));
seq__34019_34533 = G__34538;
chunk__34021_34534 = G__34539;
count__34022_34535 = G__34540;
i__34023_34536 = G__34541;
continue;
} else {
var G__34542 = seq__34019_34533;
var G__34543 = chunk__34021_34534;
var G__34544 = count__34022_34535;
var G__34545 = (i__34023_34536 + (1));
seq__34019_34533 = G__34542;
chunk__34021_34534 = G__34543;
count__34022_34535 = G__34544;
i__34023_34536 = G__34545;
continue;
}
} else {
var temp__5735__auto___34546 = cljs.core.seq(seq__34019_34533);
if(temp__5735__auto___34546){
var seq__34019_34547__$1 = temp__5735__auto___34546;
if(cljs.core.chunked_seq_QMARK_(seq__34019_34547__$1)){
var c__4556__auto___34548 = cljs.core.chunk_first(seq__34019_34547__$1);
var G__34550 = cljs.core.chunk_rest(seq__34019_34547__$1);
var G__34551 = c__4556__auto___34548;
var G__34552 = cljs.core.count(c__4556__auto___34548);
var G__34553 = (0);
seq__34019_34533 = G__34550;
chunk__34021_34534 = G__34551;
count__34022_34535 = G__34552;
i__34023_34536 = G__34553;
continue;
} else {
var child_34555 = cljs.core.first(seq__34019_34547__$1);
if(cljs.core.truth_(child_34555)){
node.appendChild(child_34555);


var G__34556 = cljs.core.next(seq__34019_34547__$1);
var G__34557 = null;
var G__34558 = (0);
var G__34559 = (0);
seq__34019_34533 = G__34556;
chunk__34021_34534 = G__34557;
count__34022_34535 = G__34558;
i__34023_34536 = G__34559;
continue;
} else {
var G__34560 = cljs.core.next(seq__34019_34547__$1);
var G__34561 = null;
var G__34562 = (0);
var G__34563 = (0);
seq__34019_34533 = G__34560;
chunk__34021_34534 = G__34561;
count__34022_34535 = G__34562;
i__34023_34536 = G__34563;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34532);
}
}


var G__34565 = seq__33974_34525;
var G__34566 = chunk__33976_34526;
var G__34567 = count__33977_34527;
var G__34568 = (i__33978_34528 + (1));
seq__33974_34525 = G__34565;
chunk__33976_34526 = G__34566;
count__33977_34527 = G__34567;
i__33978_34528 = G__34568;
continue;
} else {
var G__34569 = seq__33974_34525;
var G__34570 = chunk__33976_34526;
var G__34571 = count__33977_34527;
var G__34572 = (i__33978_34528 + (1));
seq__33974_34525 = G__34569;
chunk__33976_34526 = G__34570;
count__33977_34527 = G__34571;
i__33978_34528 = G__34572;
continue;
}
} else {
var temp__5735__auto___34574 = cljs.core.seq(seq__33974_34525);
if(temp__5735__auto___34574){
var seq__33974_34575__$1 = temp__5735__auto___34574;
if(cljs.core.chunked_seq_QMARK_(seq__33974_34575__$1)){
var c__4556__auto___34576 = cljs.core.chunk_first(seq__33974_34575__$1);
var G__34577 = cljs.core.chunk_rest(seq__33974_34575__$1);
var G__34578 = c__4556__auto___34576;
var G__34579 = cljs.core.count(c__4556__auto___34576);
var G__34580 = (0);
seq__33974_34525 = G__34577;
chunk__33976_34526 = G__34578;
count__33977_34527 = G__34579;
i__33978_34528 = G__34580;
continue;
} else {
var child_struct_34581 = cljs.core.first(seq__33974_34575__$1);
if((!((child_struct_34581 == null)))){
if(typeof child_struct_34581 === 'string'){
var text_34583 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34583),child_struct_34581].join(''));
} else {
var children_34585 = shadow.dom.svg_node(child_struct_34581);
if(cljs.core.seq_QMARK_(children_34585)){
var seq__34030_34586 = cljs.core.seq(children_34585);
var chunk__34032_34587 = null;
var count__34033_34588 = (0);
var i__34034_34589 = (0);
while(true){
if((i__34034_34589 < count__34033_34588)){
var child_34590 = chunk__34032_34587.cljs$core$IIndexed$_nth$arity$2(null,i__34034_34589);
if(cljs.core.truth_(child_34590)){
node.appendChild(child_34590);


var G__34591 = seq__34030_34586;
var G__34592 = chunk__34032_34587;
var G__34593 = count__34033_34588;
var G__34594 = (i__34034_34589 + (1));
seq__34030_34586 = G__34591;
chunk__34032_34587 = G__34592;
count__34033_34588 = G__34593;
i__34034_34589 = G__34594;
continue;
} else {
var G__34597 = seq__34030_34586;
var G__34598 = chunk__34032_34587;
var G__34599 = count__34033_34588;
var G__34600 = (i__34034_34589 + (1));
seq__34030_34586 = G__34597;
chunk__34032_34587 = G__34598;
count__34033_34588 = G__34599;
i__34034_34589 = G__34600;
continue;
}
} else {
var temp__5735__auto___34602__$1 = cljs.core.seq(seq__34030_34586);
if(temp__5735__auto___34602__$1){
var seq__34030_34603__$1 = temp__5735__auto___34602__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34030_34603__$1)){
var c__4556__auto___34604 = cljs.core.chunk_first(seq__34030_34603__$1);
var G__34605 = cljs.core.chunk_rest(seq__34030_34603__$1);
var G__34606 = c__4556__auto___34604;
var G__34607 = cljs.core.count(c__4556__auto___34604);
var G__34608 = (0);
seq__34030_34586 = G__34605;
chunk__34032_34587 = G__34606;
count__34033_34588 = G__34607;
i__34034_34589 = G__34608;
continue;
} else {
var child_34610 = cljs.core.first(seq__34030_34603__$1);
if(cljs.core.truth_(child_34610)){
node.appendChild(child_34610);


var G__34611 = cljs.core.next(seq__34030_34603__$1);
var G__34612 = null;
var G__34613 = (0);
var G__34614 = (0);
seq__34030_34586 = G__34611;
chunk__34032_34587 = G__34612;
count__34033_34588 = G__34613;
i__34034_34589 = G__34614;
continue;
} else {
var G__34615 = cljs.core.next(seq__34030_34603__$1);
var G__34616 = null;
var G__34617 = (0);
var G__34618 = (0);
seq__34030_34586 = G__34615;
chunk__34032_34587 = G__34616;
count__34033_34588 = G__34617;
i__34034_34589 = G__34618;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34585);
}
}


var G__34620 = cljs.core.next(seq__33974_34575__$1);
var G__34621 = null;
var G__34622 = (0);
var G__34623 = (0);
seq__33974_34525 = G__34620;
chunk__33976_34526 = G__34621;
count__33977_34527 = G__34622;
i__33978_34528 = G__34623;
continue;
} else {
var G__34625 = cljs.core.next(seq__33974_34575__$1);
var G__34626 = null;
var G__34627 = (0);
var G__34628 = (0);
seq__33974_34525 = G__34625;
chunk__33976_34526 = G__34626;
count__33977_34527 = G__34627;
i__33978_34528 = G__34628;
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
var len__4736__auto___34632 = arguments.length;
var i__4737__auto___34633 = (0);
while(true){
if((i__4737__auto___34633 < len__4736__auto___34632)){
args__4742__auto__.push((arguments[i__4737__auto___34633]));

var G__34634 = (i__4737__auto___34633 + (1));
i__4737__auto___34633 = G__34634;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34041){
var G__34042 = cljs.core.first(seq34041);
var seq34041__$1 = cljs.core.next(seq34041);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34042,seq34041__$1);
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
var G__34048 = arguments.length;
switch (G__34048) {
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
var c__31195__auto___34637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31196__auto__ = (function (){var switch__30977__auto__ = (function (state_34053){
var state_val_34054 = (state_34053[(1)]);
if((state_val_34054 === (1))){
var state_34053__$1 = state_34053;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34053__$1,(2),once_or_cleanup);
} else {
if((state_val_34054 === (2))){
var inst_34050 = (state_34053[(2)]);
var inst_34051 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34053__$1 = (function (){var statearr_34075 = state_34053;
(statearr_34075[(7)] = inst_34050);

return statearr_34075;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34053__$1,inst_34051);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30978__auto__ = null;
var shadow$dom$state_machine__30978__auto____0 = (function (){
var statearr_34076 = [null,null,null,null,null,null,null,null];
(statearr_34076[(0)] = shadow$dom$state_machine__30978__auto__);

(statearr_34076[(1)] = (1));

return statearr_34076;
});
var shadow$dom$state_machine__30978__auto____1 = (function (state_34053){
while(true){
var ret_value__30979__auto__ = (function (){try{while(true){
var result__30980__auto__ = switch__30977__auto__(state_34053);
if(cljs.core.keyword_identical_QMARK_(result__30980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30980__auto__;
}
break;
}
}catch (e34077){var ex__30981__auto__ = e34077;
var statearr_34078_34643 = state_34053;
(statearr_34078_34643[(2)] = ex__30981__auto__);


if(cljs.core.seq((state_34053[(4)]))){
var statearr_34079_34644 = state_34053;
(statearr_34079_34644[(1)] = cljs.core.first((state_34053[(4)])));

} else {
throw ex__30981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34645 = state_34053;
state_34053 = G__34645;
continue;
} else {
return ret_value__30979__auto__;
}
break;
}
});
shadow$dom$state_machine__30978__auto__ = function(state_34053){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30978__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30978__auto____1.call(this,state_34053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30978__auto____0;
shadow$dom$state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30978__auto____1;
return shadow$dom$state_machine__30978__auto__;
})()
})();
var state__31197__auto__ = (function (){var statearr_34081 = f__31196__auto__();
(statearr_34081[(6)] = c__31195__auto___34637);

return statearr_34081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31197__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
