goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34006 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_34006(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34008 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_34008(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33266 = coll;
var G__33267 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33266,G__33267) : shadow.dom.lazy_native_coll_seq.call(null,G__33266,G__33267));
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
var G__33279 = arguments.length;
switch (G__33279) {
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
var G__33281 = arguments.length;
switch (G__33281) {
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
var G__33285 = arguments.length;
switch (G__33285) {
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
var G__33288 = arguments.length;
switch (G__33288) {
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
var G__33290 = arguments.length;
switch (G__33290) {
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
}catch (e33291){if((e33291 instanceof Object)){
var e = e33291;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33291;

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
var seq__33292 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33293 = null;
var count__33294 = (0);
var i__33295 = (0);
while(true){
if((i__33295 < count__33294)){
var el = chunk__33293.cljs$core$IIndexed$_nth$arity$2(null,i__33295);
var handler_34033__$1 = ((function (seq__33292,chunk__33293,count__33294,i__33295,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33292,chunk__33293,count__33294,i__33295,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34033__$1);


var G__34035 = seq__33292;
var G__34036 = chunk__33293;
var G__34037 = count__33294;
var G__34038 = (i__33295 + (1));
seq__33292 = G__34035;
chunk__33293 = G__34036;
count__33294 = G__34037;
i__33295 = G__34038;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33292);
if(temp__5735__auto__){
var seq__33292__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33292__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33292__$1);
var G__34040 = cljs.core.chunk_rest(seq__33292__$1);
var G__34041 = c__4556__auto__;
var G__34042 = cljs.core.count(c__4556__auto__);
var G__34043 = (0);
seq__33292 = G__34040;
chunk__33293 = G__34041;
count__33294 = G__34042;
i__33295 = G__34043;
continue;
} else {
var el = cljs.core.first(seq__33292__$1);
var handler_34045__$1 = ((function (seq__33292,chunk__33293,count__33294,i__33295,el,seq__33292__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33292,chunk__33293,count__33294,i__33295,el,seq__33292__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34045__$1);


var G__34048 = cljs.core.next(seq__33292__$1);
var G__34049 = null;
var G__34050 = (0);
var G__34051 = (0);
seq__33292 = G__34048;
chunk__33293 = G__34049;
count__33294 = G__34050;
i__33295 = G__34051;
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
var G__33297 = arguments.length;
switch (G__33297) {
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
var seq__33298 = cljs.core.seq(events);
var chunk__33299 = null;
var count__33300 = (0);
var i__33301 = (0);
while(true){
if((i__33301 < count__33300)){
var vec__33310 = chunk__33299.cljs$core$IIndexed$_nth$arity$2(null,i__33301);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33310,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33310,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34056 = seq__33298;
var G__34057 = chunk__33299;
var G__34058 = count__33300;
var G__34059 = (i__33301 + (1));
seq__33298 = G__34056;
chunk__33299 = G__34057;
count__33300 = G__34058;
i__33301 = G__34059;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33298);
if(temp__5735__auto__){
var seq__33298__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33298__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33298__$1);
var G__34068 = cljs.core.chunk_rest(seq__33298__$1);
var G__34069 = c__4556__auto__;
var G__34070 = cljs.core.count(c__4556__auto__);
var G__34071 = (0);
seq__33298 = G__34068;
chunk__33299 = G__34069;
count__33300 = G__34070;
i__33301 = G__34071;
continue;
} else {
var vec__33313 = cljs.core.first(seq__33298__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33313,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33313,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34073 = cljs.core.next(seq__33298__$1);
var G__34074 = null;
var G__34075 = (0);
var G__34076 = (0);
seq__33298 = G__34073;
chunk__33299 = G__34074;
count__33300 = G__34075;
i__33301 = G__34076;
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
var seq__33316 = cljs.core.seq(styles);
var chunk__33317 = null;
var count__33318 = (0);
var i__33319 = (0);
while(true){
if((i__33319 < count__33318)){
var vec__33326 = chunk__33317.cljs$core$IIndexed$_nth$arity$2(null,i__33319);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33326,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33326,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34078 = seq__33316;
var G__34079 = chunk__33317;
var G__34080 = count__33318;
var G__34081 = (i__33319 + (1));
seq__33316 = G__34078;
chunk__33317 = G__34079;
count__33318 = G__34080;
i__33319 = G__34081;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33316);
if(temp__5735__auto__){
var seq__33316__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33316__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33316__$1);
var G__34082 = cljs.core.chunk_rest(seq__33316__$1);
var G__34083 = c__4556__auto__;
var G__34084 = cljs.core.count(c__4556__auto__);
var G__34085 = (0);
seq__33316 = G__34082;
chunk__33317 = G__34083;
count__33318 = G__34084;
i__33319 = G__34085;
continue;
} else {
var vec__33329 = cljs.core.first(seq__33316__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33329,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33329,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34086 = cljs.core.next(seq__33316__$1);
var G__34087 = null;
var G__34088 = (0);
var G__34089 = (0);
seq__33316 = G__34086;
chunk__33317 = G__34087;
count__33318 = G__34088;
i__33319 = G__34089;
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
var G__33352_34090 = key;
var G__33352_34091__$1 = (((G__33352_34090 instanceof cljs.core.Keyword))?G__33352_34090.fqn:null);
switch (G__33352_34091__$1) {
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
var ks_34098 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_34098,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_34098,"aria-");
}
})())){
el.setAttribute(ks_34098,value);
} else {
(el[ks_34098] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33359){
var map__33360 = p__33359;
var map__33360__$1 = (((((!((map__33360 == null))))?(((((map__33360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33360):map__33360);
var props = map__33360__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33360__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33362 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33362,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33362,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33362,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33365 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33365,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33365;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33375 = arguments.length;
switch (G__33375) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33379){
var vec__33380 = p__33379;
var seq__33381 = cljs.core.seq(vec__33380);
var first__33382 = cljs.core.first(seq__33381);
var seq__33381__$1 = cljs.core.next(seq__33381);
var nn = first__33382;
var first__33382__$1 = cljs.core.first(seq__33381__$1);
var seq__33381__$2 = cljs.core.next(seq__33381__$1);
var np = first__33382__$1;
var nc = seq__33381__$2;
var node = vec__33380;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33383 = nn;
var G__33384 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33383,G__33384) : create_fn.call(null,G__33383,G__33384));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33385 = nn;
var G__33386 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33385,G__33386) : create_fn.call(null,G__33385,G__33386));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33391 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33391,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33391,(1),null);
var seq__33394_34110 = cljs.core.seq(node_children);
var chunk__33395_34111 = null;
var count__33396_34112 = (0);
var i__33397_34113 = (0);
while(true){
if((i__33397_34113 < count__33396_34112)){
var child_struct_34114 = chunk__33395_34111.cljs$core$IIndexed$_nth$arity$2(null,i__33397_34113);
var children_34115 = shadow.dom.dom_node(child_struct_34114);
if(cljs.core.seq_QMARK_(children_34115)){
var seq__33439_34116 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34115));
var chunk__33442_34117 = null;
var count__33443_34118 = (0);
var i__33444_34119 = (0);
while(true){
if((i__33444_34119 < count__33443_34118)){
var child_34120 = chunk__33442_34117.cljs$core$IIndexed$_nth$arity$2(null,i__33444_34119);
if(cljs.core.truth_(child_34120)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34120);


var G__34121 = seq__33439_34116;
var G__34122 = chunk__33442_34117;
var G__34123 = count__33443_34118;
var G__34124 = (i__33444_34119 + (1));
seq__33439_34116 = G__34121;
chunk__33442_34117 = G__34122;
count__33443_34118 = G__34123;
i__33444_34119 = G__34124;
continue;
} else {
var G__34125 = seq__33439_34116;
var G__34126 = chunk__33442_34117;
var G__34127 = count__33443_34118;
var G__34128 = (i__33444_34119 + (1));
seq__33439_34116 = G__34125;
chunk__33442_34117 = G__34126;
count__33443_34118 = G__34127;
i__33444_34119 = G__34128;
continue;
}
} else {
var temp__5735__auto___34129 = cljs.core.seq(seq__33439_34116);
if(temp__5735__auto___34129){
var seq__33439_34130__$1 = temp__5735__auto___34129;
if(cljs.core.chunked_seq_QMARK_(seq__33439_34130__$1)){
var c__4556__auto___34131 = cljs.core.chunk_first(seq__33439_34130__$1);
var G__34132 = cljs.core.chunk_rest(seq__33439_34130__$1);
var G__34133 = c__4556__auto___34131;
var G__34134 = cljs.core.count(c__4556__auto___34131);
var G__34135 = (0);
seq__33439_34116 = G__34132;
chunk__33442_34117 = G__34133;
count__33443_34118 = G__34134;
i__33444_34119 = G__34135;
continue;
} else {
var child_34136 = cljs.core.first(seq__33439_34130__$1);
if(cljs.core.truth_(child_34136)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34136);


var G__34137 = cljs.core.next(seq__33439_34130__$1);
var G__34138 = null;
var G__34139 = (0);
var G__34140 = (0);
seq__33439_34116 = G__34137;
chunk__33442_34117 = G__34138;
count__33443_34118 = G__34139;
i__33444_34119 = G__34140;
continue;
} else {
var G__34141 = cljs.core.next(seq__33439_34130__$1);
var G__34142 = null;
var G__34143 = (0);
var G__34144 = (0);
seq__33439_34116 = G__34141;
chunk__33442_34117 = G__34142;
count__33443_34118 = G__34143;
i__33444_34119 = G__34144;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34115);
}


var G__34145 = seq__33394_34110;
var G__34146 = chunk__33395_34111;
var G__34147 = count__33396_34112;
var G__34148 = (i__33397_34113 + (1));
seq__33394_34110 = G__34145;
chunk__33395_34111 = G__34146;
count__33396_34112 = G__34147;
i__33397_34113 = G__34148;
continue;
} else {
var temp__5735__auto___34149 = cljs.core.seq(seq__33394_34110);
if(temp__5735__auto___34149){
var seq__33394_34150__$1 = temp__5735__auto___34149;
if(cljs.core.chunked_seq_QMARK_(seq__33394_34150__$1)){
var c__4556__auto___34151 = cljs.core.chunk_first(seq__33394_34150__$1);
var G__34152 = cljs.core.chunk_rest(seq__33394_34150__$1);
var G__34153 = c__4556__auto___34151;
var G__34154 = cljs.core.count(c__4556__auto___34151);
var G__34155 = (0);
seq__33394_34110 = G__34152;
chunk__33395_34111 = G__34153;
count__33396_34112 = G__34154;
i__33397_34113 = G__34155;
continue;
} else {
var child_struct_34156 = cljs.core.first(seq__33394_34150__$1);
var children_34157 = shadow.dom.dom_node(child_struct_34156);
if(cljs.core.seq_QMARK_(children_34157)){
var seq__33455_34158 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34157));
var chunk__33457_34159 = null;
var count__33458_34160 = (0);
var i__33459_34161 = (0);
while(true){
if((i__33459_34161 < count__33458_34160)){
var child_34162 = chunk__33457_34159.cljs$core$IIndexed$_nth$arity$2(null,i__33459_34161);
if(cljs.core.truth_(child_34162)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34162);


var G__34163 = seq__33455_34158;
var G__34164 = chunk__33457_34159;
var G__34165 = count__33458_34160;
var G__34166 = (i__33459_34161 + (1));
seq__33455_34158 = G__34163;
chunk__33457_34159 = G__34164;
count__33458_34160 = G__34165;
i__33459_34161 = G__34166;
continue;
} else {
var G__34167 = seq__33455_34158;
var G__34168 = chunk__33457_34159;
var G__34169 = count__33458_34160;
var G__34170 = (i__33459_34161 + (1));
seq__33455_34158 = G__34167;
chunk__33457_34159 = G__34168;
count__33458_34160 = G__34169;
i__33459_34161 = G__34170;
continue;
}
} else {
var temp__5735__auto___34171__$1 = cljs.core.seq(seq__33455_34158);
if(temp__5735__auto___34171__$1){
var seq__33455_34172__$1 = temp__5735__auto___34171__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33455_34172__$1)){
var c__4556__auto___34173 = cljs.core.chunk_first(seq__33455_34172__$1);
var G__34174 = cljs.core.chunk_rest(seq__33455_34172__$1);
var G__34175 = c__4556__auto___34173;
var G__34176 = cljs.core.count(c__4556__auto___34173);
var G__34177 = (0);
seq__33455_34158 = G__34174;
chunk__33457_34159 = G__34175;
count__33458_34160 = G__34176;
i__33459_34161 = G__34177;
continue;
} else {
var child_34178 = cljs.core.first(seq__33455_34172__$1);
if(cljs.core.truth_(child_34178)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34178);


var G__34179 = cljs.core.next(seq__33455_34172__$1);
var G__34180 = null;
var G__34181 = (0);
var G__34182 = (0);
seq__33455_34158 = G__34179;
chunk__33457_34159 = G__34180;
count__33458_34160 = G__34181;
i__33459_34161 = G__34182;
continue;
} else {
var G__34183 = cljs.core.next(seq__33455_34172__$1);
var G__34184 = null;
var G__34185 = (0);
var G__34186 = (0);
seq__33455_34158 = G__34183;
chunk__33457_34159 = G__34184;
count__33458_34160 = G__34185;
i__33459_34161 = G__34186;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34157);
}


var G__34187 = cljs.core.next(seq__33394_34150__$1);
var G__34188 = null;
var G__34189 = (0);
var G__34190 = (0);
seq__33394_34110 = G__34187;
chunk__33395_34111 = G__34188;
count__33396_34112 = G__34189;
i__33397_34113 = G__34190;
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
var seq__33497 = cljs.core.seq(node);
var chunk__33498 = null;
var count__33499 = (0);
var i__33500 = (0);
while(true){
if((i__33500 < count__33499)){
var n = chunk__33498.cljs$core$IIndexed$_nth$arity$2(null,i__33500);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34203 = seq__33497;
var G__34204 = chunk__33498;
var G__34205 = count__33499;
var G__34206 = (i__33500 + (1));
seq__33497 = G__34203;
chunk__33498 = G__34204;
count__33499 = G__34205;
i__33500 = G__34206;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33497);
if(temp__5735__auto__){
var seq__33497__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33497__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33497__$1);
var G__34207 = cljs.core.chunk_rest(seq__33497__$1);
var G__34208 = c__4556__auto__;
var G__34209 = cljs.core.count(c__4556__auto__);
var G__34210 = (0);
seq__33497 = G__34207;
chunk__33498 = G__34208;
count__33499 = G__34209;
i__33500 = G__34210;
continue;
} else {
var n = cljs.core.first(seq__33497__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34211 = cljs.core.next(seq__33497__$1);
var G__34212 = null;
var G__34213 = (0);
var G__34214 = (0);
seq__33497 = G__34211;
chunk__33498 = G__34212;
count__33499 = G__34213;
i__33500 = G__34214;
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
var G__33506 = arguments.length;
switch (G__33506) {
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
var G__33509 = arguments.length;
switch (G__33509) {
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
var len__4736__auto___34233 = arguments.length;
var i__4737__auto___34234 = (0);
while(true){
if((i__4737__auto___34234 < len__4736__auto___34233)){
args__4742__auto__.push((arguments[i__4737__auto___34234]));

var G__34235 = (i__4737__auto___34234 + (1));
i__4737__auto___34234 = G__34235;
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
var seq__33576_34236 = cljs.core.seq(nodes);
var chunk__33577_34237 = null;
var count__33578_34238 = (0);
var i__33579_34239 = (0);
while(true){
if((i__33579_34239 < count__33578_34238)){
var node_34240 = chunk__33577_34237.cljs$core$IIndexed$_nth$arity$2(null,i__33579_34239);
fragment.appendChild(shadow.dom._to_dom(node_34240));


var G__34241 = seq__33576_34236;
var G__34242 = chunk__33577_34237;
var G__34243 = count__33578_34238;
var G__34244 = (i__33579_34239 + (1));
seq__33576_34236 = G__34241;
chunk__33577_34237 = G__34242;
count__33578_34238 = G__34243;
i__33579_34239 = G__34244;
continue;
} else {
var temp__5735__auto___34245 = cljs.core.seq(seq__33576_34236);
if(temp__5735__auto___34245){
var seq__33576_34246__$1 = temp__5735__auto___34245;
if(cljs.core.chunked_seq_QMARK_(seq__33576_34246__$1)){
var c__4556__auto___34247 = cljs.core.chunk_first(seq__33576_34246__$1);
var G__34248 = cljs.core.chunk_rest(seq__33576_34246__$1);
var G__34249 = c__4556__auto___34247;
var G__34250 = cljs.core.count(c__4556__auto___34247);
var G__34251 = (0);
seq__33576_34236 = G__34248;
chunk__33577_34237 = G__34249;
count__33578_34238 = G__34250;
i__33579_34239 = G__34251;
continue;
} else {
var node_34252 = cljs.core.first(seq__33576_34246__$1);
fragment.appendChild(shadow.dom._to_dom(node_34252));


var G__34253 = cljs.core.next(seq__33576_34246__$1);
var G__34254 = null;
var G__34255 = (0);
var G__34256 = (0);
seq__33576_34236 = G__34253;
chunk__33577_34237 = G__34254;
count__33578_34238 = G__34255;
i__33579_34239 = G__34256;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33575){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33575));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33582_34257 = cljs.core.seq(scripts);
var chunk__33583_34258 = null;
var count__33584_34259 = (0);
var i__33585_34260 = (0);
while(true){
if((i__33585_34260 < count__33584_34259)){
var vec__33593_34261 = chunk__33583_34258.cljs$core$IIndexed$_nth$arity$2(null,i__33585_34260);
var script_tag_34262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33593_34261,(0),null);
var script_body_34263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33593_34261,(1),null);
eval(script_body_34263);


var G__34264 = seq__33582_34257;
var G__34265 = chunk__33583_34258;
var G__34266 = count__33584_34259;
var G__34267 = (i__33585_34260 + (1));
seq__33582_34257 = G__34264;
chunk__33583_34258 = G__34265;
count__33584_34259 = G__34266;
i__33585_34260 = G__34267;
continue;
} else {
var temp__5735__auto___34268 = cljs.core.seq(seq__33582_34257);
if(temp__5735__auto___34268){
var seq__33582_34269__$1 = temp__5735__auto___34268;
if(cljs.core.chunked_seq_QMARK_(seq__33582_34269__$1)){
var c__4556__auto___34270 = cljs.core.chunk_first(seq__33582_34269__$1);
var G__34271 = cljs.core.chunk_rest(seq__33582_34269__$1);
var G__34272 = c__4556__auto___34270;
var G__34273 = cljs.core.count(c__4556__auto___34270);
var G__34274 = (0);
seq__33582_34257 = G__34271;
chunk__33583_34258 = G__34272;
count__33584_34259 = G__34273;
i__33585_34260 = G__34274;
continue;
} else {
var vec__33606_34275 = cljs.core.first(seq__33582_34269__$1);
var script_tag_34276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33606_34275,(0),null);
var script_body_34277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33606_34275,(1),null);
eval(script_body_34277);


var G__34278 = cljs.core.next(seq__33582_34269__$1);
var G__34279 = null;
var G__34280 = (0);
var G__34281 = (0);
seq__33582_34257 = G__34278;
chunk__33583_34258 = G__34279;
count__33584_34259 = G__34280;
i__33585_34260 = G__34281;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33610){
var vec__33611 = p__33610;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33611,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33611,(1),null);
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
var G__33625 = arguments.length;
switch (G__33625) {
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
var seq__33638 = cljs.core.seq(style_keys);
var chunk__33639 = null;
var count__33640 = (0);
var i__33641 = (0);
while(true){
if((i__33641 < count__33640)){
var it = chunk__33639.cljs$core$IIndexed$_nth$arity$2(null,i__33641);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34290 = seq__33638;
var G__34291 = chunk__33639;
var G__34292 = count__33640;
var G__34293 = (i__33641 + (1));
seq__33638 = G__34290;
chunk__33639 = G__34291;
count__33640 = G__34292;
i__33641 = G__34293;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33638);
if(temp__5735__auto__){
var seq__33638__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33638__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33638__$1);
var G__34294 = cljs.core.chunk_rest(seq__33638__$1);
var G__34295 = c__4556__auto__;
var G__34296 = cljs.core.count(c__4556__auto__);
var G__34297 = (0);
seq__33638 = G__34294;
chunk__33639 = G__34295;
count__33640 = G__34296;
i__33641 = G__34297;
continue;
} else {
var it = cljs.core.first(seq__33638__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34298 = cljs.core.next(seq__33638__$1);
var G__34299 = null;
var G__34300 = (0);
var G__34301 = (0);
seq__33638 = G__34298;
chunk__33639 = G__34299;
count__33640 = G__34300;
i__33641 = G__34301;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33650,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33655 = k33650;
var G__33655__$1 = (((G__33655 instanceof cljs.core.Keyword))?G__33655.fqn:null);
switch (G__33655__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33650,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33656){
var vec__33657 = p__33656;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33657,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33657,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33649){
var self__ = this;
var G__33649__$1 = this;
return (new cljs.core.RecordIter((0),G__33649__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33651,other33652){
var self__ = this;
var this33651__$1 = this;
return (((!((other33652 == null)))) && ((this33651__$1.constructor === other33652.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33651__$1.x,other33652.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33651__$1.y,other33652.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33651__$1.__extmap,other33652.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33649){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33669 = cljs.core.keyword_identical_QMARK_;
var expr__33670 = k__4388__auto__;
if(cljs.core.truth_((pred__33669.cljs$core$IFn$_invoke$arity$2 ? pred__33669.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33670) : pred__33669.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33670)))){
return (new shadow.dom.Coordinate(G__33649,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33669.cljs$core$IFn$_invoke$arity$2 ? pred__33669.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33670) : pred__33669.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33670)))){
return (new shadow.dom.Coordinate(self__.x,G__33649,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33649),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33649){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33649,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33653){
var extmap__4419__auto__ = (function (){var G__33676 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33653,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33653)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33676);
} else {
return G__33676;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33653),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33653),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33682,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33695 = k33682;
var G__33695__$1 = (((G__33695 instanceof cljs.core.Keyword))?G__33695.fqn:null);
switch (G__33695__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33682,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33696){
var vec__33697 = p__33696;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33697,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33697,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33681){
var self__ = this;
var G__33681__$1 = this;
return (new cljs.core.RecordIter((0),G__33681__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33683,other33684){
var self__ = this;
var this33683__$1 = this;
return (((!((other33684 == null)))) && ((this33683__$1.constructor === other33684.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33683__$1.w,other33684.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33683__$1.h,other33684.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33683__$1.__extmap,other33684.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33681){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33717 = cljs.core.keyword_identical_QMARK_;
var expr__33718 = k__4388__auto__;
if(cljs.core.truth_((pred__33717.cljs$core$IFn$_invoke$arity$2 ? pred__33717.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33718) : pred__33717.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33718)))){
return (new shadow.dom.Size(G__33681,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33717.cljs$core$IFn$_invoke$arity$2 ? pred__33717.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33718) : pred__33717.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33718)))){
return (new shadow.dom.Size(self__.w,G__33681,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33681),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33681){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33681,self__.__extmap,self__.__hash));
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
var extmap__4419__auto__ = (function (){var G__33729 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33694,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33694)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33729);
} else {
return G__33729;
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
var G__34352 = (i + (1));
var G__34353 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34352;
ret = G__34353;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33743){
var vec__33744 = p__33743;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33744,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33744,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33752 = arguments.length;
switch (G__33752) {
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
var G__34355 = ps;
var G__34356 = (i + (1));
el__$1 = G__34355;
i = G__34356;
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
var vec__33781 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33781,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33781,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33781,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33784_34364 = cljs.core.seq(props);
var chunk__33785_34365 = null;
var count__33786_34366 = (0);
var i__33787_34367 = (0);
while(true){
if((i__33787_34367 < count__33786_34366)){
var vec__33795_34369 = chunk__33785_34365.cljs$core$IIndexed$_nth$arity$2(null,i__33787_34367);
var k_34370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33795_34369,(0),null);
var v_34371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33795_34369,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34370);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34370),v_34371);


var G__34372 = seq__33784_34364;
var G__34373 = chunk__33785_34365;
var G__34374 = count__33786_34366;
var G__34375 = (i__33787_34367 + (1));
seq__33784_34364 = G__34372;
chunk__33785_34365 = G__34373;
count__33786_34366 = G__34374;
i__33787_34367 = G__34375;
continue;
} else {
var temp__5735__auto___34377 = cljs.core.seq(seq__33784_34364);
if(temp__5735__auto___34377){
var seq__33784_34379__$1 = temp__5735__auto___34377;
if(cljs.core.chunked_seq_QMARK_(seq__33784_34379__$1)){
var c__4556__auto___34380 = cljs.core.chunk_first(seq__33784_34379__$1);
var G__34381 = cljs.core.chunk_rest(seq__33784_34379__$1);
var G__34382 = c__4556__auto___34380;
var G__34383 = cljs.core.count(c__4556__auto___34380);
var G__34384 = (0);
seq__33784_34364 = G__34381;
chunk__33785_34365 = G__34382;
count__33786_34366 = G__34383;
i__33787_34367 = G__34384;
continue;
} else {
var vec__33801_34386 = cljs.core.first(seq__33784_34379__$1);
var k_34387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33801_34386,(0),null);
var v_34388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33801_34386,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34387);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34387),v_34388);


var G__34390 = cljs.core.next(seq__33784_34379__$1);
var G__34391 = null;
var G__34392 = (0);
var G__34393 = (0);
seq__33784_34364 = G__34390;
chunk__33785_34365 = G__34391;
count__33786_34366 = G__34392;
i__33787_34367 = G__34393;
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
var vec__33810 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33810,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33810,(1),null);
var seq__33814_34396 = cljs.core.seq(node_children);
var chunk__33816_34397 = null;
var count__33817_34398 = (0);
var i__33818_34399 = (0);
while(true){
if((i__33818_34399 < count__33817_34398)){
var child_struct_34400 = chunk__33816_34397.cljs$core$IIndexed$_nth$arity$2(null,i__33818_34399);
if((!((child_struct_34400 == null)))){
if(typeof child_struct_34400 === 'string'){
var text_34402 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34402),child_struct_34400].join(''));
} else {
var children_34403 = shadow.dom.svg_node(child_struct_34400);
if(cljs.core.seq_QMARK_(children_34403)){
var seq__33857_34404 = cljs.core.seq(children_34403);
var chunk__33859_34405 = null;
var count__33860_34406 = (0);
var i__33861_34407 = (0);
while(true){
if((i__33861_34407 < count__33860_34406)){
var child_34409 = chunk__33859_34405.cljs$core$IIndexed$_nth$arity$2(null,i__33861_34407);
if(cljs.core.truth_(child_34409)){
node.appendChild(child_34409);


var G__34410 = seq__33857_34404;
var G__34411 = chunk__33859_34405;
var G__34412 = count__33860_34406;
var G__34413 = (i__33861_34407 + (1));
seq__33857_34404 = G__34410;
chunk__33859_34405 = G__34411;
count__33860_34406 = G__34412;
i__33861_34407 = G__34413;
continue;
} else {
var G__34414 = seq__33857_34404;
var G__34415 = chunk__33859_34405;
var G__34416 = count__33860_34406;
var G__34417 = (i__33861_34407 + (1));
seq__33857_34404 = G__34414;
chunk__33859_34405 = G__34415;
count__33860_34406 = G__34416;
i__33861_34407 = G__34417;
continue;
}
} else {
var temp__5735__auto___34418 = cljs.core.seq(seq__33857_34404);
if(temp__5735__auto___34418){
var seq__33857_34419__$1 = temp__5735__auto___34418;
if(cljs.core.chunked_seq_QMARK_(seq__33857_34419__$1)){
var c__4556__auto___34420 = cljs.core.chunk_first(seq__33857_34419__$1);
var G__34421 = cljs.core.chunk_rest(seq__33857_34419__$1);
var G__34422 = c__4556__auto___34420;
var G__34423 = cljs.core.count(c__4556__auto___34420);
var G__34424 = (0);
seq__33857_34404 = G__34421;
chunk__33859_34405 = G__34422;
count__33860_34406 = G__34423;
i__33861_34407 = G__34424;
continue;
} else {
var child_34425 = cljs.core.first(seq__33857_34419__$1);
if(cljs.core.truth_(child_34425)){
node.appendChild(child_34425);


var G__34427 = cljs.core.next(seq__33857_34419__$1);
var G__34428 = null;
var G__34429 = (0);
var G__34430 = (0);
seq__33857_34404 = G__34427;
chunk__33859_34405 = G__34428;
count__33860_34406 = G__34429;
i__33861_34407 = G__34430;
continue;
} else {
var G__34431 = cljs.core.next(seq__33857_34419__$1);
var G__34432 = null;
var G__34433 = (0);
var G__34434 = (0);
seq__33857_34404 = G__34431;
chunk__33859_34405 = G__34432;
count__33860_34406 = G__34433;
i__33861_34407 = G__34434;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34403);
}
}


var G__34436 = seq__33814_34396;
var G__34437 = chunk__33816_34397;
var G__34438 = count__33817_34398;
var G__34439 = (i__33818_34399 + (1));
seq__33814_34396 = G__34436;
chunk__33816_34397 = G__34437;
count__33817_34398 = G__34438;
i__33818_34399 = G__34439;
continue;
} else {
var G__34440 = seq__33814_34396;
var G__34441 = chunk__33816_34397;
var G__34442 = count__33817_34398;
var G__34443 = (i__33818_34399 + (1));
seq__33814_34396 = G__34440;
chunk__33816_34397 = G__34441;
count__33817_34398 = G__34442;
i__33818_34399 = G__34443;
continue;
}
} else {
var temp__5735__auto___34444 = cljs.core.seq(seq__33814_34396);
if(temp__5735__auto___34444){
var seq__33814_34446__$1 = temp__5735__auto___34444;
if(cljs.core.chunked_seq_QMARK_(seq__33814_34446__$1)){
var c__4556__auto___34447 = cljs.core.chunk_first(seq__33814_34446__$1);
var G__34448 = cljs.core.chunk_rest(seq__33814_34446__$1);
var G__34449 = c__4556__auto___34447;
var G__34450 = cljs.core.count(c__4556__auto___34447);
var G__34451 = (0);
seq__33814_34396 = G__34448;
chunk__33816_34397 = G__34449;
count__33817_34398 = G__34450;
i__33818_34399 = G__34451;
continue;
} else {
var child_struct_34452 = cljs.core.first(seq__33814_34446__$1);
if((!((child_struct_34452 == null)))){
if(typeof child_struct_34452 === 'string'){
var text_34453 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34453),child_struct_34452].join(''));
} else {
var children_34456 = shadow.dom.svg_node(child_struct_34452);
if(cljs.core.seq_QMARK_(children_34456)){
var seq__33899_34457 = cljs.core.seq(children_34456);
var chunk__33901_34458 = null;
var count__33902_34459 = (0);
var i__33903_34460 = (0);
while(true){
if((i__33903_34460 < count__33902_34459)){
var child_34462 = chunk__33901_34458.cljs$core$IIndexed$_nth$arity$2(null,i__33903_34460);
if(cljs.core.truth_(child_34462)){
node.appendChild(child_34462);


var G__34464 = seq__33899_34457;
var G__34465 = chunk__33901_34458;
var G__34466 = count__33902_34459;
var G__34467 = (i__33903_34460 + (1));
seq__33899_34457 = G__34464;
chunk__33901_34458 = G__34465;
count__33902_34459 = G__34466;
i__33903_34460 = G__34467;
continue;
} else {
var G__34468 = seq__33899_34457;
var G__34469 = chunk__33901_34458;
var G__34470 = count__33902_34459;
var G__34471 = (i__33903_34460 + (1));
seq__33899_34457 = G__34468;
chunk__33901_34458 = G__34469;
count__33902_34459 = G__34470;
i__33903_34460 = G__34471;
continue;
}
} else {
var temp__5735__auto___34472__$1 = cljs.core.seq(seq__33899_34457);
if(temp__5735__auto___34472__$1){
var seq__33899_34474__$1 = temp__5735__auto___34472__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33899_34474__$1)){
var c__4556__auto___34476 = cljs.core.chunk_first(seq__33899_34474__$1);
var G__34477 = cljs.core.chunk_rest(seq__33899_34474__$1);
var G__34478 = c__4556__auto___34476;
var G__34479 = cljs.core.count(c__4556__auto___34476);
var G__34480 = (0);
seq__33899_34457 = G__34477;
chunk__33901_34458 = G__34478;
count__33902_34459 = G__34479;
i__33903_34460 = G__34480;
continue;
} else {
var child_34481 = cljs.core.first(seq__33899_34474__$1);
if(cljs.core.truth_(child_34481)){
node.appendChild(child_34481);


var G__34482 = cljs.core.next(seq__33899_34474__$1);
var G__34483 = null;
var G__34484 = (0);
var G__34485 = (0);
seq__33899_34457 = G__34482;
chunk__33901_34458 = G__34483;
count__33902_34459 = G__34484;
i__33903_34460 = G__34485;
continue;
} else {
var G__34486 = cljs.core.next(seq__33899_34474__$1);
var G__34487 = null;
var G__34488 = (0);
var G__34489 = (0);
seq__33899_34457 = G__34486;
chunk__33901_34458 = G__34487;
count__33902_34459 = G__34488;
i__33903_34460 = G__34489;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34456);
}
}


var G__34490 = cljs.core.next(seq__33814_34446__$1);
var G__34491 = null;
var G__34492 = (0);
var G__34493 = (0);
seq__33814_34396 = G__34490;
chunk__33816_34397 = G__34491;
count__33817_34398 = G__34492;
i__33818_34399 = G__34493;
continue;
} else {
var G__34494 = cljs.core.next(seq__33814_34446__$1);
var G__34495 = null;
var G__34496 = (0);
var G__34497 = (0);
seq__33814_34396 = G__34494;
chunk__33816_34397 = G__34495;
count__33817_34398 = G__34496;
i__33818_34399 = G__34497;
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
var len__4736__auto___34504 = arguments.length;
var i__4737__auto___34505 = (0);
while(true){
if((i__4737__auto___34505 < len__4736__auto___34504)){
args__4742__auto__.push((arguments[i__4737__auto___34505]));

var G__34507 = (i__4737__auto___34505 + (1));
i__4737__auto___34505 = G__34507;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33924){
var G__33925 = cljs.core.first(seq33924);
var seq33924__$1 = cljs.core.next(seq33924);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33925,seq33924__$1);
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
var G__33928 = arguments.length;
switch (G__33928) {
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
var c__30937__auto___34532 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30938__auto__ = (function (){var switch__30739__auto__ = (function (state_33934){
var state_val_33935 = (state_33934[(1)]);
if((state_val_33935 === (1))){
var state_33934__$1 = state_33934;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33934__$1,(2),once_or_cleanup);
} else {
if((state_val_33935 === (2))){
var inst_33931 = (state_33934[(2)]);
var inst_33932 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33934__$1 = (function (){var statearr_33936 = state_33934;
(statearr_33936[(7)] = inst_33931);

return statearr_33936;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33934__$1,inst_33932);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30740__auto__ = null;
var shadow$dom$state_machine__30740__auto____0 = (function (){
var statearr_33945 = [null,null,null,null,null,null,null,null];
(statearr_33945[(0)] = shadow$dom$state_machine__30740__auto__);

(statearr_33945[(1)] = (1));

return statearr_33945;
});
var shadow$dom$state_machine__30740__auto____1 = (function (state_33934){
while(true){
var ret_value__30741__auto__ = (function (){try{while(true){
var result__30742__auto__ = switch__30739__auto__(state_33934);
if(cljs.core.keyword_identical_QMARK_(result__30742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30742__auto__;
}
break;
}
}catch (e33947){var ex__30743__auto__ = e33947;
var statearr_33948_34535 = state_33934;
(statearr_33948_34535[(2)] = ex__30743__auto__);


if(cljs.core.seq((state_33934[(4)]))){
var statearr_33949_34536 = state_33934;
(statearr_33949_34536[(1)] = cljs.core.first((state_33934[(4)])));

} else {
throw ex__30743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34537 = state_33934;
state_33934 = G__34537;
continue;
} else {
return ret_value__30741__auto__;
}
break;
}
});
shadow$dom$state_machine__30740__auto__ = function(state_33934){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30740__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30740__auto____1.call(this,state_33934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30740__auto____0;
shadow$dom$state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30740__auto____1;
return shadow$dom$state_machine__30740__auto__;
})()
})();
var state__30939__auto__ = (function (){var statearr_33950 = f__30938__auto__();
(statearr_33950[(6)] = c__30937__auto___34532);

return statearr_33950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30939__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
