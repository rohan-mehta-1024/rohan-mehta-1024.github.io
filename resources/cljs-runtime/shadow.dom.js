goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33916 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_33916(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33920 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_33920(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33261 = coll;
var G__33262 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33261,G__33262) : shadow.dom.lazy_native_coll_seq.call(null,G__33261,G__33262));
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
var G__33270 = arguments.length;
switch (G__33270) {
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
var G__33272 = arguments.length;
switch (G__33272) {
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
var G__33274 = arguments.length;
switch (G__33274) {
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
var G__33276 = arguments.length;
switch (G__33276) {
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
var G__33281 = arguments.length;
switch (G__33281) {
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
var G__33287 = arguments.length;
switch (G__33287) {
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
}catch (e33292){if((e33292 instanceof Object)){
var e = e33292;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33292;

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
var seq__33293 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33294 = null;
var count__33295 = (0);
var i__33296 = (0);
while(true){
if((i__33296 < count__33295)){
var el = chunk__33294.cljs$core$IIndexed$_nth$arity$2(null,i__33296);
var handler_33946__$1 = ((function (seq__33293,chunk__33294,count__33295,i__33296,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33293,chunk__33294,count__33295,i__33296,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33946__$1);


var G__33947 = seq__33293;
var G__33948 = chunk__33294;
var G__33949 = count__33295;
var G__33950 = (i__33296 + (1));
seq__33293 = G__33947;
chunk__33294 = G__33948;
count__33295 = G__33949;
i__33296 = G__33950;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33293);
if(temp__5735__auto__){
var seq__33293__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33293__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33293__$1);
var G__33951 = cljs.core.chunk_rest(seq__33293__$1);
var G__33952 = c__4556__auto__;
var G__33953 = cljs.core.count(c__4556__auto__);
var G__33954 = (0);
seq__33293 = G__33951;
chunk__33294 = G__33952;
count__33295 = G__33953;
i__33296 = G__33954;
continue;
} else {
var el = cljs.core.first(seq__33293__$1);
var handler_33957__$1 = ((function (seq__33293,chunk__33294,count__33295,i__33296,el,seq__33293__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33293,chunk__33294,count__33295,i__33296,el,seq__33293__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33957__$1);


var G__33958 = cljs.core.next(seq__33293__$1);
var G__33959 = null;
var G__33960 = (0);
var G__33961 = (0);
seq__33293 = G__33958;
chunk__33294 = G__33959;
count__33295 = G__33960;
i__33296 = G__33961;
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
var G__33299 = arguments.length;
switch (G__33299) {
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
var seq__33300 = cljs.core.seq(events);
var chunk__33301 = null;
var count__33302 = (0);
var i__33303 = (0);
while(true){
if((i__33303 < count__33302)){
var vec__33310 = chunk__33301.cljs$core$IIndexed$_nth$arity$2(null,i__33303);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33310,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33310,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33969 = seq__33300;
var G__33970 = chunk__33301;
var G__33971 = count__33302;
var G__33972 = (i__33303 + (1));
seq__33300 = G__33969;
chunk__33301 = G__33970;
count__33302 = G__33971;
i__33303 = G__33972;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33300);
if(temp__5735__auto__){
var seq__33300__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33300__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33300__$1);
var G__33973 = cljs.core.chunk_rest(seq__33300__$1);
var G__33974 = c__4556__auto__;
var G__33975 = cljs.core.count(c__4556__auto__);
var G__33976 = (0);
seq__33300 = G__33973;
chunk__33301 = G__33974;
count__33302 = G__33975;
i__33303 = G__33976;
continue;
} else {
var vec__33314 = cljs.core.first(seq__33300__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33314,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33314,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33977 = cljs.core.next(seq__33300__$1);
var G__33978 = null;
var G__33979 = (0);
var G__33980 = (0);
seq__33300 = G__33977;
chunk__33301 = G__33978;
count__33302 = G__33979;
i__33303 = G__33980;
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
var seq__33317 = cljs.core.seq(styles);
var chunk__33318 = null;
var count__33319 = (0);
var i__33320 = (0);
while(true){
if((i__33320 < count__33319)){
var vec__33331 = chunk__33318.cljs$core$IIndexed$_nth$arity$2(null,i__33320);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33331,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33331,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33981 = seq__33317;
var G__33982 = chunk__33318;
var G__33983 = count__33319;
var G__33984 = (i__33320 + (1));
seq__33317 = G__33981;
chunk__33318 = G__33982;
count__33319 = G__33983;
i__33320 = G__33984;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33317);
if(temp__5735__auto__){
var seq__33317__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33317__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33317__$1);
var G__33985 = cljs.core.chunk_rest(seq__33317__$1);
var G__33986 = c__4556__auto__;
var G__33987 = cljs.core.count(c__4556__auto__);
var G__33988 = (0);
seq__33317 = G__33985;
chunk__33318 = G__33986;
count__33319 = G__33987;
i__33320 = G__33988;
continue;
} else {
var vec__33334 = cljs.core.first(seq__33317__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33334,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33334,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34040 = cljs.core.next(seq__33317__$1);
var G__34041 = null;
var G__34042 = (0);
var G__34043 = (0);
seq__33317 = G__34040;
chunk__33318 = G__34041;
count__33319 = G__34042;
i__33320 = G__34043;
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
var G__33337_34046 = key;
var G__33337_34047__$1 = (((G__33337_34046 instanceof cljs.core.Keyword))?G__33337_34046.fqn:null);
switch (G__33337_34047__$1) {
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
var ks_34051 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_34051,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_34051,"aria-");
}
})())){
el.setAttribute(ks_34051,value);
} else {
(el[ks_34051] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33342){
var map__33343 = p__33342;
var map__33343__$1 = (((((!((map__33343 == null))))?(((((map__33343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33343):map__33343);
var props = map__33343__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33343__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33346 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33346,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33346,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33346,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33350 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33350,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33350;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33354 = arguments.length;
switch (G__33354) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33355){
var vec__33356 = p__33355;
var seq__33357 = cljs.core.seq(vec__33356);
var first__33358 = cljs.core.first(seq__33357);
var seq__33357__$1 = cljs.core.next(seq__33357);
var nn = first__33358;
var first__33358__$1 = cljs.core.first(seq__33357__$1);
var seq__33357__$2 = cljs.core.next(seq__33357__$1);
var np = first__33358__$1;
var nc = seq__33357__$2;
var node = vec__33356;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33359 = nn;
var G__33360 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33359,G__33360) : create_fn.call(null,G__33359,G__33360));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33378 = nn;
var G__33379 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33378,G__33379) : create_fn.call(null,G__33378,G__33379));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33385 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33385,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33385,(1),null);
var seq__33388_34066 = cljs.core.seq(node_children);
var chunk__33389_34067 = null;
var count__33390_34068 = (0);
var i__33391_34069 = (0);
while(true){
if((i__33391_34069 < count__33390_34068)){
var child_struct_34070 = chunk__33389_34067.cljs$core$IIndexed$_nth$arity$2(null,i__33391_34069);
var children_34071 = shadow.dom.dom_node(child_struct_34070);
if(cljs.core.seq_QMARK_(children_34071)){
var seq__33431_34072 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34071));
var chunk__33433_34073 = null;
var count__33434_34074 = (0);
var i__33435_34075 = (0);
while(true){
if((i__33435_34075 < count__33434_34074)){
var child_34076 = chunk__33433_34073.cljs$core$IIndexed$_nth$arity$2(null,i__33435_34075);
if(cljs.core.truth_(child_34076)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34076);


var G__34078 = seq__33431_34072;
var G__34079 = chunk__33433_34073;
var G__34080 = count__33434_34074;
var G__34081 = (i__33435_34075 + (1));
seq__33431_34072 = G__34078;
chunk__33433_34073 = G__34079;
count__33434_34074 = G__34080;
i__33435_34075 = G__34081;
continue;
} else {
var G__34082 = seq__33431_34072;
var G__34083 = chunk__33433_34073;
var G__34084 = count__33434_34074;
var G__34085 = (i__33435_34075 + (1));
seq__33431_34072 = G__34082;
chunk__33433_34073 = G__34083;
count__33434_34074 = G__34084;
i__33435_34075 = G__34085;
continue;
}
} else {
var temp__5735__auto___34086 = cljs.core.seq(seq__33431_34072);
if(temp__5735__auto___34086){
var seq__33431_34087__$1 = temp__5735__auto___34086;
if(cljs.core.chunked_seq_QMARK_(seq__33431_34087__$1)){
var c__4556__auto___34088 = cljs.core.chunk_first(seq__33431_34087__$1);
var G__34089 = cljs.core.chunk_rest(seq__33431_34087__$1);
var G__34090 = c__4556__auto___34088;
var G__34091 = cljs.core.count(c__4556__auto___34088);
var G__34092 = (0);
seq__33431_34072 = G__34089;
chunk__33433_34073 = G__34090;
count__33434_34074 = G__34091;
i__33435_34075 = G__34092;
continue;
} else {
var child_34093 = cljs.core.first(seq__33431_34087__$1);
if(cljs.core.truth_(child_34093)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34093);


var G__34094 = cljs.core.next(seq__33431_34087__$1);
var G__34095 = null;
var G__34096 = (0);
var G__34097 = (0);
seq__33431_34072 = G__34094;
chunk__33433_34073 = G__34095;
count__33434_34074 = G__34096;
i__33435_34075 = G__34097;
continue;
} else {
var G__34099 = cljs.core.next(seq__33431_34087__$1);
var G__34100 = null;
var G__34101 = (0);
var G__34102 = (0);
seq__33431_34072 = G__34099;
chunk__33433_34073 = G__34100;
count__33434_34074 = G__34101;
i__33435_34075 = G__34102;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34071);
}


var G__34110 = seq__33388_34066;
var G__34111 = chunk__33389_34067;
var G__34112 = count__33390_34068;
var G__34113 = (i__33391_34069 + (1));
seq__33388_34066 = G__34110;
chunk__33389_34067 = G__34111;
count__33390_34068 = G__34112;
i__33391_34069 = G__34113;
continue;
} else {
var temp__5735__auto___34114 = cljs.core.seq(seq__33388_34066);
if(temp__5735__auto___34114){
var seq__33388_34115__$1 = temp__5735__auto___34114;
if(cljs.core.chunked_seq_QMARK_(seq__33388_34115__$1)){
var c__4556__auto___34116 = cljs.core.chunk_first(seq__33388_34115__$1);
var G__34117 = cljs.core.chunk_rest(seq__33388_34115__$1);
var G__34118 = c__4556__auto___34116;
var G__34119 = cljs.core.count(c__4556__auto___34116);
var G__34120 = (0);
seq__33388_34066 = G__34117;
chunk__33389_34067 = G__34118;
count__33390_34068 = G__34119;
i__33391_34069 = G__34120;
continue;
} else {
var child_struct_34121 = cljs.core.first(seq__33388_34115__$1);
var children_34122 = shadow.dom.dom_node(child_struct_34121);
if(cljs.core.seq_QMARK_(children_34122)){
var seq__33458_34123 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34122));
var chunk__33460_34124 = null;
var count__33461_34125 = (0);
var i__33462_34126 = (0);
while(true){
if((i__33462_34126 < count__33461_34125)){
var child_34127 = chunk__33460_34124.cljs$core$IIndexed$_nth$arity$2(null,i__33462_34126);
if(cljs.core.truth_(child_34127)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34127);


var G__34128 = seq__33458_34123;
var G__34129 = chunk__33460_34124;
var G__34130 = count__33461_34125;
var G__34131 = (i__33462_34126 + (1));
seq__33458_34123 = G__34128;
chunk__33460_34124 = G__34129;
count__33461_34125 = G__34130;
i__33462_34126 = G__34131;
continue;
} else {
var G__34132 = seq__33458_34123;
var G__34133 = chunk__33460_34124;
var G__34134 = count__33461_34125;
var G__34135 = (i__33462_34126 + (1));
seq__33458_34123 = G__34132;
chunk__33460_34124 = G__34133;
count__33461_34125 = G__34134;
i__33462_34126 = G__34135;
continue;
}
} else {
var temp__5735__auto___34136__$1 = cljs.core.seq(seq__33458_34123);
if(temp__5735__auto___34136__$1){
var seq__33458_34137__$1 = temp__5735__auto___34136__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33458_34137__$1)){
var c__4556__auto___34138 = cljs.core.chunk_first(seq__33458_34137__$1);
var G__34139 = cljs.core.chunk_rest(seq__33458_34137__$1);
var G__34140 = c__4556__auto___34138;
var G__34141 = cljs.core.count(c__4556__auto___34138);
var G__34142 = (0);
seq__33458_34123 = G__34139;
chunk__33460_34124 = G__34140;
count__33461_34125 = G__34141;
i__33462_34126 = G__34142;
continue;
} else {
var child_34143 = cljs.core.first(seq__33458_34137__$1);
if(cljs.core.truth_(child_34143)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34143);


var G__34144 = cljs.core.next(seq__33458_34137__$1);
var G__34145 = null;
var G__34146 = (0);
var G__34147 = (0);
seq__33458_34123 = G__34144;
chunk__33460_34124 = G__34145;
count__33461_34125 = G__34146;
i__33462_34126 = G__34147;
continue;
} else {
var G__34148 = cljs.core.next(seq__33458_34137__$1);
var G__34149 = null;
var G__34150 = (0);
var G__34151 = (0);
seq__33458_34123 = G__34148;
chunk__33460_34124 = G__34149;
count__33461_34125 = G__34150;
i__33462_34126 = G__34151;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34122);
}


var G__34152 = cljs.core.next(seq__33388_34115__$1);
var G__34153 = null;
var G__34154 = (0);
var G__34155 = (0);
seq__33388_34066 = G__34152;
chunk__33389_34067 = G__34153;
count__33390_34068 = G__34154;
i__33391_34069 = G__34155;
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
var seq__33489 = cljs.core.seq(node);
var chunk__33490 = null;
var count__33491 = (0);
var i__33492 = (0);
while(true){
if((i__33492 < count__33491)){
var n = chunk__33490.cljs$core$IIndexed$_nth$arity$2(null,i__33492);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34161 = seq__33489;
var G__34162 = chunk__33490;
var G__34163 = count__33491;
var G__34164 = (i__33492 + (1));
seq__33489 = G__34161;
chunk__33490 = G__34162;
count__33491 = G__34163;
i__33492 = G__34164;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33489);
if(temp__5735__auto__){
var seq__33489__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33489__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33489__$1);
var G__34165 = cljs.core.chunk_rest(seq__33489__$1);
var G__34166 = c__4556__auto__;
var G__34167 = cljs.core.count(c__4556__auto__);
var G__34168 = (0);
seq__33489 = G__34165;
chunk__33490 = G__34166;
count__33491 = G__34167;
i__33492 = G__34168;
continue;
} else {
var n = cljs.core.first(seq__33489__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34169 = cljs.core.next(seq__33489__$1);
var G__34170 = null;
var G__34171 = (0);
var G__34172 = (0);
seq__33489 = G__34169;
chunk__33490 = G__34170;
count__33491 = G__34171;
i__33492 = G__34172;
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
var G__33502 = arguments.length;
switch (G__33502) {
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
var G__33504 = arguments.length;
switch (G__33504) {
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
var G__33517 = arguments.length;
switch (G__33517) {
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
var len__4736__auto___34185 = arguments.length;
var i__4737__auto___34186 = (0);
while(true){
if((i__4737__auto___34186 < len__4736__auto___34185)){
args__4742__auto__.push((arguments[i__4737__auto___34186]));

var G__34187 = (i__4737__auto___34186 + (1));
i__4737__auto___34186 = G__34187;
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
var seq__33541_34188 = cljs.core.seq(nodes);
var chunk__33542_34189 = null;
var count__33543_34190 = (0);
var i__33544_34191 = (0);
while(true){
if((i__33544_34191 < count__33543_34190)){
var node_34193 = chunk__33542_34189.cljs$core$IIndexed$_nth$arity$2(null,i__33544_34191);
fragment.appendChild(shadow.dom._to_dom(node_34193));


var G__34194 = seq__33541_34188;
var G__34195 = chunk__33542_34189;
var G__34196 = count__33543_34190;
var G__34197 = (i__33544_34191 + (1));
seq__33541_34188 = G__34194;
chunk__33542_34189 = G__34195;
count__33543_34190 = G__34196;
i__33544_34191 = G__34197;
continue;
} else {
var temp__5735__auto___34198 = cljs.core.seq(seq__33541_34188);
if(temp__5735__auto___34198){
var seq__33541_34199__$1 = temp__5735__auto___34198;
if(cljs.core.chunked_seq_QMARK_(seq__33541_34199__$1)){
var c__4556__auto___34200 = cljs.core.chunk_first(seq__33541_34199__$1);
var G__34201 = cljs.core.chunk_rest(seq__33541_34199__$1);
var G__34202 = c__4556__auto___34200;
var G__34203 = cljs.core.count(c__4556__auto___34200);
var G__34204 = (0);
seq__33541_34188 = G__34201;
chunk__33542_34189 = G__34202;
count__33543_34190 = G__34203;
i__33544_34191 = G__34204;
continue;
} else {
var node_34205 = cljs.core.first(seq__33541_34199__$1);
fragment.appendChild(shadow.dom._to_dom(node_34205));


var G__34206 = cljs.core.next(seq__33541_34199__$1);
var G__34207 = null;
var G__34208 = (0);
var G__34209 = (0);
seq__33541_34188 = G__34206;
chunk__33542_34189 = G__34207;
count__33543_34190 = G__34208;
i__33544_34191 = G__34209;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33539){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33539));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33545_34211 = cljs.core.seq(scripts);
var chunk__33546_34212 = null;
var count__33547_34213 = (0);
var i__33548_34214 = (0);
while(true){
if((i__33548_34214 < count__33547_34213)){
var vec__33570_34215 = chunk__33546_34212.cljs$core$IIndexed$_nth$arity$2(null,i__33548_34214);
var script_tag_34216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33570_34215,(0),null);
var script_body_34217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33570_34215,(1),null);
eval(script_body_34217);


var G__34218 = seq__33545_34211;
var G__34219 = chunk__33546_34212;
var G__34220 = count__33547_34213;
var G__34221 = (i__33548_34214 + (1));
seq__33545_34211 = G__34218;
chunk__33546_34212 = G__34219;
count__33547_34213 = G__34220;
i__33548_34214 = G__34221;
continue;
} else {
var temp__5735__auto___34222 = cljs.core.seq(seq__33545_34211);
if(temp__5735__auto___34222){
var seq__33545_34223__$1 = temp__5735__auto___34222;
if(cljs.core.chunked_seq_QMARK_(seq__33545_34223__$1)){
var c__4556__auto___34224 = cljs.core.chunk_first(seq__33545_34223__$1);
var G__34225 = cljs.core.chunk_rest(seq__33545_34223__$1);
var G__34226 = c__4556__auto___34224;
var G__34227 = cljs.core.count(c__4556__auto___34224);
var G__34228 = (0);
seq__33545_34211 = G__34225;
chunk__33546_34212 = G__34226;
count__33547_34213 = G__34227;
i__33548_34214 = G__34228;
continue;
} else {
var vec__33573_34229 = cljs.core.first(seq__33545_34223__$1);
var script_tag_34230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33573_34229,(0),null);
var script_body_34231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33573_34229,(1),null);
eval(script_body_34231);


var G__34232 = cljs.core.next(seq__33545_34223__$1);
var G__34233 = null;
var G__34234 = (0);
var G__34235 = (0);
seq__33545_34211 = G__34232;
chunk__33546_34212 = G__34233;
count__33547_34213 = G__34234;
i__33548_34214 = G__34235;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33576){
var vec__33577 = p__33576;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33577,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33577,(1),null);
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
var G__33592 = arguments.length;
switch (G__33592) {
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
var seq__33611 = cljs.core.seq(style_keys);
var chunk__33612 = null;
var count__33613 = (0);
var i__33614 = (0);
while(true){
if((i__33614 < count__33613)){
var it = chunk__33612.cljs$core$IIndexed$_nth$arity$2(null,i__33614);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34248 = seq__33611;
var G__34249 = chunk__33612;
var G__34250 = count__33613;
var G__34251 = (i__33614 + (1));
seq__33611 = G__34248;
chunk__33612 = G__34249;
count__33613 = G__34250;
i__33614 = G__34251;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33611);
if(temp__5735__auto__){
var seq__33611__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33611__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33611__$1);
var G__34252 = cljs.core.chunk_rest(seq__33611__$1);
var G__34253 = c__4556__auto__;
var G__34254 = cljs.core.count(c__4556__auto__);
var G__34255 = (0);
seq__33611 = G__34252;
chunk__33612 = G__34253;
count__33613 = G__34254;
i__33614 = G__34255;
continue;
} else {
var it = cljs.core.first(seq__33611__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34256 = cljs.core.next(seq__33611__$1);
var G__34257 = null;
var G__34258 = (0);
var G__34259 = (0);
seq__33611 = G__34256;
chunk__33612 = G__34257;
count__33613 = G__34258;
i__33614 = G__34259;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33616,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33626 = k33616;
var G__33626__$1 = (((G__33626 instanceof cljs.core.Keyword))?G__33626.fqn:null);
switch (G__33626__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33616,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33627){
var vec__33628 = p__33627;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33628,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33628,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33615){
var self__ = this;
var G__33615__$1 = this;
return (new cljs.core.RecordIter((0),G__33615__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33617,other33618){
var self__ = this;
var this33617__$1 = this;
return (((!((other33618 == null)))) && ((this33617__$1.constructor === other33618.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33617__$1.x,other33618.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33617__$1.y,other33618.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33617__$1.__extmap,other33618.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33615){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33652 = cljs.core.keyword_identical_QMARK_;
var expr__33653 = k__4388__auto__;
if(cljs.core.truth_((pred__33652.cljs$core$IFn$_invoke$arity$2 ? pred__33652.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33653) : pred__33652.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33653)))){
return (new shadow.dom.Coordinate(G__33615,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33652.cljs$core$IFn$_invoke$arity$2 ? pred__33652.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33653) : pred__33652.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33653)))){
return (new shadow.dom.Coordinate(self__.x,G__33615,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33615),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33615){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33615,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33625){
var extmap__4419__auto__ = (function (){var G__33662 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33625,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33625)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33662);
} else {
return G__33662;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33625),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33625),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33666,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33670 = k33666;
var G__33670__$1 = (((G__33670 instanceof cljs.core.Keyword))?G__33670.fqn:null);
switch (G__33670__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33666,else__4383__auto__);

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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33665){
var self__ = this;
var G__33665__$1 = this;
return (new cljs.core.RecordIter((0),G__33665__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33667,other33668){
var self__ = this;
var this33667__$1 = this;
return (((!((other33668 == null)))) && ((this33667__$1.constructor === other33668.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33667__$1.w,other33668.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33667__$1.h,other33668.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33667__$1.__extmap,other33668.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33665){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33679 = cljs.core.keyword_identical_QMARK_;
var expr__33680 = k__4388__auto__;
if(cljs.core.truth_((pred__33679.cljs$core$IFn$_invoke$arity$2 ? pred__33679.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33680) : pred__33679.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33680)))){
return (new shadow.dom.Size(G__33665,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33679.cljs$core$IFn$_invoke$arity$2 ? pred__33679.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33680) : pred__33679.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33680)))){
return (new shadow.dom.Size(self__.w,G__33665,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33665),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33665){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33665,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33669){
var extmap__4419__auto__ = (function (){var G__33689 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33669,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33669)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33689);
} else {
return G__33689;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33669),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33669),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__34300 = (i + (1));
var G__34301 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34300;
ret = G__34301;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33709){
var vec__33710 = p__33709;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33710,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33710,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33714 = arguments.length;
switch (G__33714) {
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
var G__34306 = ps;
var G__34307 = (i + (1));
el__$1 = G__34306;
i = G__34307;
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
var vec__33735 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33735,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33735,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33735,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33745_34308 = cljs.core.seq(props);
var chunk__33746_34309 = null;
var count__33747_34310 = (0);
var i__33748_34311 = (0);
while(true){
if((i__33748_34311 < count__33747_34310)){
var vec__33757_34312 = chunk__33746_34309.cljs$core$IIndexed$_nth$arity$2(null,i__33748_34311);
var k_34313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33757_34312,(0),null);
var v_34314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33757_34312,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34313);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34313),v_34314);


var G__34316 = seq__33745_34308;
var G__34317 = chunk__33746_34309;
var G__34318 = count__33747_34310;
var G__34319 = (i__33748_34311 + (1));
seq__33745_34308 = G__34316;
chunk__33746_34309 = G__34317;
count__33747_34310 = G__34318;
i__33748_34311 = G__34319;
continue;
} else {
var temp__5735__auto___34321 = cljs.core.seq(seq__33745_34308);
if(temp__5735__auto___34321){
var seq__33745_34323__$1 = temp__5735__auto___34321;
if(cljs.core.chunked_seq_QMARK_(seq__33745_34323__$1)){
var c__4556__auto___34324 = cljs.core.chunk_first(seq__33745_34323__$1);
var G__34325 = cljs.core.chunk_rest(seq__33745_34323__$1);
var G__34326 = c__4556__auto___34324;
var G__34327 = cljs.core.count(c__4556__auto___34324);
var G__34328 = (0);
seq__33745_34308 = G__34325;
chunk__33746_34309 = G__34326;
count__33747_34310 = G__34327;
i__33748_34311 = G__34328;
continue;
} else {
var vec__33770_34330 = cljs.core.first(seq__33745_34323__$1);
var k_34331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33770_34330,(0),null);
var v_34332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33770_34330,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34331);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34331),v_34332);


var G__34334 = cljs.core.next(seq__33745_34323__$1);
var G__34335 = null;
var G__34336 = (0);
var G__34337 = (0);
seq__33745_34308 = G__34334;
chunk__33746_34309 = G__34335;
count__33747_34310 = G__34336;
i__33748_34311 = G__34337;
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
var vec__33779 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33779,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33779,(1),null);
var seq__33782_34338 = cljs.core.seq(node_children);
var chunk__33784_34339 = null;
var count__33785_34340 = (0);
var i__33786_34341 = (0);
while(true){
if((i__33786_34341 < count__33785_34340)){
var child_struct_34342 = chunk__33784_34339.cljs$core$IIndexed$_nth$arity$2(null,i__33786_34341);
if((!((child_struct_34342 == null)))){
if(typeof child_struct_34342 === 'string'){
var text_34347 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34347),child_struct_34342].join(''));
} else {
var children_34348 = shadow.dom.svg_node(child_struct_34342);
if(cljs.core.seq_QMARK_(children_34348)){
var seq__33819_34349 = cljs.core.seq(children_34348);
var chunk__33821_34350 = null;
var count__33822_34351 = (0);
var i__33823_34352 = (0);
while(true){
if((i__33823_34352 < count__33822_34351)){
var child_34354 = chunk__33821_34350.cljs$core$IIndexed$_nth$arity$2(null,i__33823_34352);
if(cljs.core.truth_(child_34354)){
node.appendChild(child_34354);


var G__34356 = seq__33819_34349;
var G__34357 = chunk__33821_34350;
var G__34358 = count__33822_34351;
var G__34359 = (i__33823_34352 + (1));
seq__33819_34349 = G__34356;
chunk__33821_34350 = G__34357;
count__33822_34351 = G__34358;
i__33823_34352 = G__34359;
continue;
} else {
var G__34360 = seq__33819_34349;
var G__34361 = chunk__33821_34350;
var G__34362 = count__33822_34351;
var G__34363 = (i__33823_34352 + (1));
seq__33819_34349 = G__34360;
chunk__33821_34350 = G__34361;
count__33822_34351 = G__34362;
i__33823_34352 = G__34363;
continue;
}
} else {
var temp__5735__auto___34364 = cljs.core.seq(seq__33819_34349);
if(temp__5735__auto___34364){
var seq__33819_34366__$1 = temp__5735__auto___34364;
if(cljs.core.chunked_seq_QMARK_(seq__33819_34366__$1)){
var c__4556__auto___34367 = cljs.core.chunk_first(seq__33819_34366__$1);
var G__34368 = cljs.core.chunk_rest(seq__33819_34366__$1);
var G__34369 = c__4556__auto___34367;
var G__34370 = cljs.core.count(c__4556__auto___34367);
var G__34371 = (0);
seq__33819_34349 = G__34368;
chunk__33821_34350 = G__34369;
count__33822_34351 = G__34370;
i__33823_34352 = G__34371;
continue;
} else {
var child_34373 = cljs.core.first(seq__33819_34366__$1);
if(cljs.core.truth_(child_34373)){
node.appendChild(child_34373);


var G__34374 = cljs.core.next(seq__33819_34366__$1);
var G__34375 = null;
var G__34376 = (0);
var G__34377 = (0);
seq__33819_34349 = G__34374;
chunk__33821_34350 = G__34375;
count__33822_34351 = G__34376;
i__33823_34352 = G__34377;
continue;
} else {
var G__34379 = cljs.core.next(seq__33819_34366__$1);
var G__34380 = null;
var G__34381 = (0);
var G__34382 = (0);
seq__33819_34349 = G__34379;
chunk__33821_34350 = G__34380;
count__33822_34351 = G__34381;
i__33823_34352 = G__34382;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34348);
}
}


var G__34383 = seq__33782_34338;
var G__34384 = chunk__33784_34339;
var G__34385 = count__33785_34340;
var G__34386 = (i__33786_34341 + (1));
seq__33782_34338 = G__34383;
chunk__33784_34339 = G__34384;
count__33785_34340 = G__34385;
i__33786_34341 = G__34386;
continue;
} else {
var G__34388 = seq__33782_34338;
var G__34389 = chunk__33784_34339;
var G__34390 = count__33785_34340;
var G__34391 = (i__33786_34341 + (1));
seq__33782_34338 = G__34388;
chunk__33784_34339 = G__34389;
count__33785_34340 = G__34390;
i__33786_34341 = G__34391;
continue;
}
} else {
var temp__5735__auto___34392 = cljs.core.seq(seq__33782_34338);
if(temp__5735__auto___34392){
var seq__33782_34393__$1 = temp__5735__auto___34392;
if(cljs.core.chunked_seq_QMARK_(seq__33782_34393__$1)){
var c__4556__auto___34394 = cljs.core.chunk_first(seq__33782_34393__$1);
var G__34395 = cljs.core.chunk_rest(seq__33782_34393__$1);
var G__34396 = c__4556__auto___34394;
var G__34397 = cljs.core.count(c__4556__auto___34394);
var G__34398 = (0);
seq__33782_34338 = G__34395;
chunk__33784_34339 = G__34396;
count__33785_34340 = G__34397;
i__33786_34341 = G__34398;
continue;
} else {
var child_struct_34399 = cljs.core.first(seq__33782_34393__$1);
if((!((child_struct_34399 == null)))){
if(typeof child_struct_34399 === 'string'){
var text_34400 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34400),child_struct_34399].join(''));
} else {
var children_34402 = shadow.dom.svg_node(child_struct_34399);
if(cljs.core.seq_QMARK_(children_34402)){
var seq__33828_34404 = cljs.core.seq(children_34402);
var chunk__33830_34405 = null;
var count__33831_34406 = (0);
var i__33832_34407 = (0);
while(true){
if((i__33832_34407 < count__33831_34406)){
var child_34408 = chunk__33830_34405.cljs$core$IIndexed$_nth$arity$2(null,i__33832_34407);
if(cljs.core.truth_(child_34408)){
node.appendChild(child_34408);


var G__34409 = seq__33828_34404;
var G__34411 = chunk__33830_34405;
var G__34412 = count__33831_34406;
var G__34413 = (i__33832_34407 + (1));
seq__33828_34404 = G__34409;
chunk__33830_34405 = G__34411;
count__33831_34406 = G__34412;
i__33832_34407 = G__34413;
continue;
} else {
var G__34414 = seq__33828_34404;
var G__34415 = chunk__33830_34405;
var G__34416 = count__33831_34406;
var G__34417 = (i__33832_34407 + (1));
seq__33828_34404 = G__34414;
chunk__33830_34405 = G__34415;
count__33831_34406 = G__34416;
i__33832_34407 = G__34417;
continue;
}
} else {
var temp__5735__auto___34418__$1 = cljs.core.seq(seq__33828_34404);
if(temp__5735__auto___34418__$1){
var seq__33828_34419__$1 = temp__5735__auto___34418__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33828_34419__$1)){
var c__4556__auto___34420 = cljs.core.chunk_first(seq__33828_34419__$1);
var G__34421 = cljs.core.chunk_rest(seq__33828_34419__$1);
var G__34422 = c__4556__auto___34420;
var G__34423 = cljs.core.count(c__4556__auto___34420);
var G__34424 = (0);
seq__33828_34404 = G__34421;
chunk__33830_34405 = G__34422;
count__33831_34406 = G__34423;
i__33832_34407 = G__34424;
continue;
} else {
var child_34426 = cljs.core.first(seq__33828_34419__$1);
if(cljs.core.truth_(child_34426)){
node.appendChild(child_34426);


var G__34427 = cljs.core.next(seq__33828_34419__$1);
var G__34428 = null;
var G__34429 = (0);
var G__34430 = (0);
seq__33828_34404 = G__34427;
chunk__33830_34405 = G__34428;
count__33831_34406 = G__34429;
i__33832_34407 = G__34430;
continue;
} else {
var G__34431 = cljs.core.next(seq__33828_34419__$1);
var G__34432 = null;
var G__34433 = (0);
var G__34434 = (0);
seq__33828_34404 = G__34431;
chunk__33830_34405 = G__34432;
count__33831_34406 = G__34433;
i__33832_34407 = G__34434;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34402);
}
}


var G__34435 = cljs.core.next(seq__33782_34393__$1);
var G__34436 = null;
var G__34437 = (0);
var G__34438 = (0);
seq__33782_34338 = G__34435;
chunk__33784_34339 = G__34436;
count__33785_34340 = G__34437;
i__33786_34341 = G__34438;
continue;
} else {
var G__34439 = cljs.core.next(seq__33782_34393__$1);
var G__34440 = null;
var G__34441 = (0);
var G__34442 = (0);
seq__33782_34338 = G__34439;
chunk__33784_34339 = G__34440;
count__33785_34340 = G__34441;
i__33786_34341 = G__34442;
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
var len__4736__auto___34445 = arguments.length;
var i__4737__auto___34446 = (0);
while(true){
if((i__4737__auto___34446 < len__4736__auto___34445)){
args__4742__auto__.push((arguments[i__4737__auto___34446]));

var G__34448 = (i__4737__auto___34446 + (1));
i__4737__auto___34446 = G__34448;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33849){
var G__33850 = cljs.core.first(seq33849);
var seq33849__$1 = cljs.core.next(seq33849);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33850,seq33849__$1);
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
var G__33867 = arguments.length;
switch (G__33867) {
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
var c__30993__auto___34457 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30994__auto__ = (function (){var switch__30809__auto__ = (function (state_33885){
var state_val_33886 = (state_33885[(1)]);
if((state_val_33886 === (1))){
var state_33885__$1 = state_33885;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33885__$1,(2),once_or_cleanup);
} else {
if((state_val_33886 === (2))){
var inst_33881 = (state_33885[(2)]);
var inst_33882 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33885__$1 = (function (){var statearr_33893 = state_33885;
(statearr_33893[(7)] = inst_33881);

return statearr_33893;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33885__$1,inst_33882);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30810__auto__ = null;
var shadow$dom$state_machine__30810__auto____0 = (function (){
var statearr_33895 = [null,null,null,null,null,null,null,null];
(statearr_33895[(0)] = shadow$dom$state_machine__30810__auto__);

(statearr_33895[(1)] = (1));

return statearr_33895;
});
var shadow$dom$state_machine__30810__auto____1 = (function (state_33885){
while(true){
var ret_value__30811__auto__ = (function (){try{while(true){
var result__30812__auto__ = switch__30809__auto__(state_33885);
if(cljs.core.keyword_identical_QMARK_(result__30812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30812__auto__;
}
break;
}
}catch (e33896){var ex__30813__auto__ = e33896;
var statearr_33897_34459 = state_33885;
(statearr_33897_34459[(2)] = ex__30813__auto__);


if(cljs.core.seq((state_33885[(4)]))){
var statearr_33899_34460 = state_33885;
(statearr_33899_34460[(1)] = cljs.core.first((state_33885[(4)])));

} else {
throw ex__30813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34462 = state_33885;
state_33885 = G__34462;
continue;
} else {
return ret_value__30811__auto__;
}
break;
}
});
shadow$dom$state_machine__30810__auto__ = function(state_33885){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30810__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30810__auto____1.call(this,state_33885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30810__auto____0;
shadow$dom$state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30810__auto____1;
return shadow$dom$state_machine__30810__auto__;
})()
})();
var state__30995__auto__ = (function (){var statearr_33901 = f__30994__auto__();
(statearr_33901[(6)] = c__30993__auto___34457);

return statearr_33901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30995__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
