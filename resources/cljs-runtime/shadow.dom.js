goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33852 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_33852(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33853 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_33853(this$);
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
var G__33269 = arguments.length;
switch (G__33269) {
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
var G__33278 = arguments.length;
switch (G__33278) {
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
var G__33283 = arguments.length;
switch (G__33283) {
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
}catch (e33284){if((e33284 instanceof Object)){
var e = e33284;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33284;

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
var seq__33285 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33286 = null;
var count__33287 = (0);
var i__33288 = (0);
while(true){
if((i__33288 < count__33287)){
var el = chunk__33286.cljs$core$IIndexed$_nth$arity$2(null,i__33288);
var handler_33886__$1 = ((function (seq__33285,chunk__33286,count__33287,i__33288,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33285,chunk__33286,count__33287,i__33288,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33886__$1);


var G__33887 = seq__33285;
var G__33888 = chunk__33286;
var G__33889 = count__33287;
var G__33890 = (i__33288 + (1));
seq__33285 = G__33887;
chunk__33286 = G__33888;
count__33287 = G__33889;
i__33288 = G__33890;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33285);
if(temp__5735__auto__){
var seq__33285__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33285__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33285__$1);
var G__33891 = cljs.core.chunk_rest(seq__33285__$1);
var G__33892 = c__4556__auto__;
var G__33893 = cljs.core.count(c__4556__auto__);
var G__33894 = (0);
seq__33285 = G__33891;
chunk__33286 = G__33892;
count__33287 = G__33893;
i__33288 = G__33894;
continue;
} else {
var el = cljs.core.first(seq__33285__$1);
var handler_33897__$1 = ((function (seq__33285,chunk__33286,count__33287,i__33288,el,seq__33285__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33285,chunk__33286,count__33287,i__33288,el,seq__33285__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33897__$1);


var G__33912 = cljs.core.next(seq__33285__$1);
var G__33913 = null;
var G__33914 = (0);
var G__33915 = (0);
seq__33285 = G__33912;
chunk__33286 = G__33913;
count__33287 = G__33914;
i__33288 = G__33915;
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
var G__33291 = arguments.length;
switch (G__33291) {
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
var seq__33292 = cljs.core.seq(events);
var chunk__33293 = null;
var count__33294 = (0);
var i__33295 = (0);
while(true){
if((i__33295 < count__33294)){
var vec__33303 = chunk__33293.cljs$core$IIndexed$_nth$arity$2(null,i__33295);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33303,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33303,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33929 = seq__33292;
var G__33930 = chunk__33293;
var G__33931 = count__33294;
var G__33932 = (i__33295 + (1));
seq__33292 = G__33929;
chunk__33293 = G__33930;
count__33294 = G__33931;
i__33295 = G__33932;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33292);
if(temp__5735__auto__){
var seq__33292__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33292__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33292__$1);
var G__33933 = cljs.core.chunk_rest(seq__33292__$1);
var G__33934 = c__4556__auto__;
var G__33935 = cljs.core.count(c__4556__auto__);
var G__33936 = (0);
seq__33292 = G__33933;
chunk__33293 = G__33934;
count__33294 = G__33935;
i__33295 = G__33936;
continue;
} else {
var vec__33308 = cljs.core.first(seq__33292__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33308,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33308,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33937 = cljs.core.next(seq__33292__$1);
var G__33938 = null;
var G__33939 = (0);
var G__33940 = (0);
seq__33292 = G__33937;
chunk__33293 = G__33938;
count__33294 = G__33939;
i__33295 = G__33940;
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
var seq__33311 = cljs.core.seq(styles);
var chunk__33312 = null;
var count__33313 = (0);
var i__33314 = (0);
while(true){
if((i__33314 < count__33313)){
var vec__33323 = chunk__33312.cljs$core$IIndexed$_nth$arity$2(null,i__33314);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33323,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33323,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33941 = seq__33311;
var G__33942 = chunk__33312;
var G__33943 = count__33313;
var G__33944 = (i__33314 + (1));
seq__33311 = G__33941;
chunk__33312 = G__33942;
count__33313 = G__33943;
i__33314 = G__33944;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33311);
if(temp__5735__auto__){
var seq__33311__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33311__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33311__$1);
var G__33945 = cljs.core.chunk_rest(seq__33311__$1);
var G__33946 = c__4556__auto__;
var G__33947 = cljs.core.count(c__4556__auto__);
var G__33948 = (0);
seq__33311 = G__33945;
chunk__33312 = G__33946;
count__33313 = G__33947;
i__33314 = G__33948;
continue;
} else {
var vec__33326 = cljs.core.first(seq__33311__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33326,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33326,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33949 = cljs.core.next(seq__33311__$1);
var G__33950 = null;
var G__33951 = (0);
var G__33952 = (0);
seq__33311 = G__33949;
chunk__33312 = G__33950;
count__33313 = G__33951;
i__33314 = G__33952;
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
var G__33329_33953 = key;
var G__33329_33954__$1 = (((G__33329_33953 instanceof cljs.core.Keyword))?G__33329_33953.fqn:null);
switch (G__33329_33954__$1) {
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
var ks_33963 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_33963,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_33963,"aria-");
}
})())){
el.setAttribute(ks_33963,value);
} else {
(el[ks_33963] = value);
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
var vec__33345 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33345,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33345,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33345,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33348 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33348,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33348;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33350 = arguments.length;
switch (G__33350) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33351){
var vec__33352 = p__33351;
var seq__33353 = cljs.core.seq(vec__33352);
var first__33354 = cljs.core.first(seq__33353);
var seq__33353__$1 = cljs.core.next(seq__33353);
var nn = first__33354;
var first__33354__$1 = cljs.core.first(seq__33353__$1);
var seq__33353__$2 = cljs.core.next(seq__33353__$1);
var np = first__33354__$1;
var nc = seq__33353__$2;
var node = vec__33352;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33355 = nn;
var G__33357 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33355,G__33357) : create_fn.call(null,G__33355,G__33357));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33358 = nn;
var G__33359 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33358,G__33359) : create_fn.call(null,G__33358,G__33359));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33361 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33361,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33361,(1),null);
var seq__33364_33999 = cljs.core.seq(node_children);
var chunk__33365_34000 = null;
var count__33366_34001 = (0);
var i__33367_34002 = (0);
while(true){
if((i__33367_34002 < count__33366_34001)){
var child_struct_34003 = chunk__33365_34000.cljs$core$IIndexed$_nth$arity$2(null,i__33367_34002);
var children_34004 = shadow.dom.dom_node(child_struct_34003);
if(cljs.core.seq_QMARK_(children_34004)){
var seq__33385_34005 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34004));
var chunk__33387_34006 = null;
var count__33388_34007 = (0);
var i__33389_34008 = (0);
while(true){
if((i__33389_34008 < count__33388_34007)){
var child_34012 = chunk__33387_34006.cljs$core$IIndexed$_nth$arity$2(null,i__33389_34008);
if(cljs.core.truth_(child_34012)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34012);


var G__34014 = seq__33385_34005;
var G__34015 = chunk__33387_34006;
var G__34016 = count__33388_34007;
var G__34017 = (i__33389_34008 + (1));
seq__33385_34005 = G__34014;
chunk__33387_34006 = G__34015;
count__33388_34007 = G__34016;
i__33389_34008 = G__34017;
continue;
} else {
var G__34018 = seq__33385_34005;
var G__34019 = chunk__33387_34006;
var G__34020 = count__33388_34007;
var G__34021 = (i__33389_34008 + (1));
seq__33385_34005 = G__34018;
chunk__33387_34006 = G__34019;
count__33388_34007 = G__34020;
i__33389_34008 = G__34021;
continue;
}
} else {
var temp__5735__auto___34022 = cljs.core.seq(seq__33385_34005);
if(temp__5735__auto___34022){
var seq__33385_34023__$1 = temp__5735__auto___34022;
if(cljs.core.chunked_seq_QMARK_(seq__33385_34023__$1)){
var c__4556__auto___34024 = cljs.core.chunk_first(seq__33385_34023__$1);
var G__34025 = cljs.core.chunk_rest(seq__33385_34023__$1);
var G__34026 = c__4556__auto___34024;
var G__34027 = cljs.core.count(c__4556__auto___34024);
var G__34028 = (0);
seq__33385_34005 = G__34025;
chunk__33387_34006 = G__34026;
count__33388_34007 = G__34027;
i__33389_34008 = G__34028;
continue;
} else {
var child_34029 = cljs.core.first(seq__33385_34023__$1);
if(cljs.core.truth_(child_34029)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34029);


var G__34030 = cljs.core.next(seq__33385_34023__$1);
var G__34031 = null;
var G__34032 = (0);
var G__34033 = (0);
seq__33385_34005 = G__34030;
chunk__33387_34006 = G__34031;
count__33388_34007 = G__34032;
i__33389_34008 = G__34033;
continue;
} else {
var G__34034 = cljs.core.next(seq__33385_34023__$1);
var G__34035 = null;
var G__34036 = (0);
var G__34037 = (0);
seq__33385_34005 = G__34034;
chunk__33387_34006 = G__34035;
count__33388_34007 = G__34036;
i__33389_34008 = G__34037;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34004);
}


var G__34048 = seq__33364_33999;
var G__34049 = chunk__33365_34000;
var G__34050 = count__33366_34001;
var G__34051 = (i__33367_34002 + (1));
seq__33364_33999 = G__34048;
chunk__33365_34000 = G__34049;
count__33366_34001 = G__34050;
i__33367_34002 = G__34051;
continue;
} else {
var temp__5735__auto___34052 = cljs.core.seq(seq__33364_33999);
if(temp__5735__auto___34052){
var seq__33364_34053__$1 = temp__5735__auto___34052;
if(cljs.core.chunked_seq_QMARK_(seq__33364_34053__$1)){
var c__4556__auto___34054 = cljs.core.chunk_first(seq__33364_34053__$1);
var G__34056 = cljs.core.chunk_rest(seq__33364_34053__$1);
var G__34057 = c__4556__auto___34054;
var G__34058 = cljs.core.count(c__4556__auto___34054);
var G__34059 = (0);
seq__33364_33999 = G__34056;
chunk__33365_34000 = G__34057;
count__33366_34001 = G__34058;
i__33367_34002 = G__34059;
continue;
} else {
var child_struct_34060 = cljs.core.first(seq__33364_34053__$1);
var children_34062 = shadow.dom.dom_node(child_struct_34060);
if(cljs.core.seq_QMARK_(children_34062)){
var seq__33399_34063 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34062));
var chunk__33401_34064 = null;
var count__33402_34065 = (0);
var i__33403_34066 = (0);
while(true){
if((i__33403_34066 < count__33402_34065)){
var child_34067 = chunk__33401_34064.cljs$core$IIndexed$_nth$arity$2(null,i__33403_34066);
if(cljs.core.truth_(child_34067)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34067);


var G__34068 = seq__33399_34063;
var G__34069 = chunk__33401_34064;
var G__34070 = count__33402_34065;
var G__34071 = (i__33403_34066 + (1));
seq__33399_34063 = G__34068;
chunk__33401_34064 = G__34069;
count__33402_34065 = G__34070;
i__33403_34066 = G__34071;
continue;
} else {
var G__34072 = seq__33399_34063;
var G__34073 = chunk__33401_34064;
var G__34074 = count__33402_34065;
var G__34075 = (i__33403_34066 + (1));
seq__33399_34063 = G__34072;
chunk__33401_34064 = G__34073;
count__33402_34065 = G__34074;
i__33403_34066 = G__34075;
continue;
}
} else {
var temp__5735__auto___34076__$1 = cljs.core.seq(seq__33399_34063);
if(temp__5735__auto___34076__$1){
var seq__33399_34077__$1 = temp__5735__auto___34076__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33399_34077__$1)){
var c__4556__auto___34078 = cljs.core.chunk_first(seq__33399_34077__$1);
var G__34079 = cljs.core.chunk_rest(seq__33399_34077__$1);
var G__34080 = c__4556__auto___34078;
var G__34081 = cljs.core.count(c__4556__auto___34078);
var G__34082 = (0);
seq__33399_34063 = G__34079;
chunk__33401_34064 = G__34080;
count__33402_34065 = G__34081;
i__33403_34066 = G__34082;
continue;
} else {
var child_34083 = cljs.core.first(seq__33399_34077__$1);
if(cljs.core.truth_(child_34083)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34083);


var G__34084 = cljs.core.next(seq__33399_34077__$1);
var G__34085 = null;
var G__34086 = (0);
var G__34087 = (0);
seq__33399_34063 = G__34084;
chunk__33401_34064 = G__34085;
count__33402_34065 = G__34086;
i__33403_34066 = G__34087;
continue;
} else {
var G__34088 = cljs.core.next(seq__33399_34077__$1);
var G__34089 = null;
var G__34090 = (0);
var G__34091 = (0);
seq__33399_34063 = G__34088;
chunk__33401_34064 = G__34089;
count__33402_34065 = G__34090;
i__33403_34066 = G__34091;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34062);
}


var G__34092 = cljs.core.next(seq__33364_34053__$1);
var G__34093 = null;
var G__34094 = (0);
var G__34095 = (0);
seq__33364_33999 = G__34092;
chunk__33365_34000 = G__34093;
count__33366_34001 = G__34094;
i__33367_34002 = G__34095;
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
var seq__33421 = cljs.core.seq(node);
var chunk__33422 = null;
var count__33423 = (0);
var i__33424 = (0);
while(true){
if((i__33424 < count__33423)){
var n = chunk__33422.cljs$core$IIndexed$_nth$arity$2(null,i__33424);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34102 = seq__33421;
var G__34103 = chunk__33422;
var G__34104 = count__33423;
var G__34105 = (i__33424 + (1));
seq__33421 = G__34102;
chunk__33422 = G__34103;
count__33423 = G__34104;
i__33424 = G__34105;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33421);
if(temp__5735__auto__){
var seq__33421__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33421__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33421__$1);
var G__34106 = cljs.core.chunk_rest(seq__33421__$1);
var G__34107 = c__4556__auto__;
var G__34108 = cljs.core.count(c__4556__auto__);
var G__34109 = (0);
seq__33421 = G__34106;
chunk__33422 = G__34107;
count__33423 = G__34108;
i__33424 = G__34109;
continue;
} else {
var n = cljs.core.first(seq__33421__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34110 = cljs.core.next(seq__33421__$1);
var G__34111 = null;
var G__34112 = (0);
var G__34113 = (0);
seq__33421 = G__34110;
chunk__33422 = G__34111;
count__33423 = G__34112;
i__33424 = G__34113;
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
var G__33436 = arguments.length;
switch (G__33436) {
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
var G__33439 = arguments.length;
switch (G__33439) {
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
var G__33454 = arguments.length;
switch (G__33454) {
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
var len__4736__auto___34135 = arguments.length;
var i__4737__auto___34136 = (0);
while(true){
if((i__4737__auto___34136 < len__4736__auto___34135)){
args__4742__auto__.push((arguments[i__4737__auto___34136]));

var G__34137 = (i__4737__auto___34136 + (1));
i__4737__auto___34136 = G__34137;
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
var seq__33480_34138 = cljs.core.seq(nodes);
var chunk__33481_34139 = null;
var count__33482_34140 = (0);
var i__33483_34141 = (0);
while(true){
if((i__33483_34141 < count__33482_34140)){
var node_34142 = chunk__33481_34139.cljs$core$IIndexed$_nth$arity$2(null,i__33483_34141);
fragment.appendChild(shadow.dom._to_dom(node_34142));


var G__34143 = seq__33480_34138;
var G__34144 = chunk__33481_34139;
var G__34145 = count__33482_34140;
var G__34146 = (i__33483_34141 + (1));
seq__33480_34138 = G__34143;
chunk__33481_34139 = G__34144;
count__33482_34140 = G__34145;
i__33483_34141 = G__34146;
continue;
} else {
var temp__5735__auto___34147 = cljs.core.seq(seq__33480_34138);
if(temp__5735__auto___34147){
var seq__33480_34148__$1 = temp__5735__auto___34147;
if(cljs.core.chunked_seq_QMARK_(seq__33480_34148__$1)){
var c__4556__auto___34149 = cljs.core.chunk_first(seq__33480_34148__$1);
var G__34150 = cljs.core.chunk_rest(seq__33480_34148__$1);
var G__34151 = c__4556__auto___34149;
var G__34152 = cljs.core.count(c__4556__auto___34149);
var G__34153 = (0);
seq__33480_34138 = G__34150;
chunk__33481_34139 = G__34151;
count__33482_34140 = G__34152;
i__33483_34141 = G__34153;
continue;
} else {
var node_34154 = cljs.core.first(seq__33480_34148__$1);
fragment.appendChild(shadow.dom._to_dom(node_34154));


var G__34155 = cljs.core.next(seq__33480_34148__$1);
var G__34156 = null;
var G__34157 = (0);
var G__34158 = (0);
seq__33480_34138 = G__34155;
chunk__33481_34139 = G__34156;
count__33482_34140 = G__34157;
i__33483_34141 = G__34158;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33473){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33473));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33485_34164 = cljs.core.seq(scripts);
var chunk__33486_34165 = null;
var count__33487_34166 = (0);
var i__33488_34167 = (0);
while(true){
if((i__33488_34167 < count__33487_34166)){
var vec__33495_34168 = chunk__33486_34165.cljs$core$IIndexed$_nth$arity$2(null,i__33488_34167);
var script_tag_34169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33495_34168,(0),null);
var script_body_34170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33495_34168,(1),null);
eval(script_body_34170);


var G__34171 = seq__33485_34164;
var G__34172 = chunk__33486_34165;
var G__34173 = count__33487_34166;
var G__34174 = (i__33488_34167 + (1));
seq__33485_34164 = G__34171;
chunk__33486_34165 = G__34172;
count__33487_34166 = G__34173;
i__33488_34167 = G__34174;
continue;
} else {
var temp__5735__auto___34175 = cljs.core.seq(seq__33485_34164);
if(temp__5735__auto___34175){
var seq__33485_34176__$1 = temp__5735__auto___34175;
if(cljs.core.chunked_seq_QMARK_(seq__33485_34176__$1)){
var c__4556__auto___34177 = cljs.core.chunk_first(seq__33485_34176__$1);
var G__34178 = cljs.core.chunk_rest(seq__33485_34176__$1);
var G__34179 = c__4556__auto___34177;
var G__34180 = cljs.core.count(c__4556__auto___34177);
var G__34181 = (0);
seq__33485_34164 = G__34178;
chunk__33486_34165 = G__34179;
count__33487_34166 = G__34180;
i__33488_34167 = G__34181;
continue;
} else {
var vec__33499_34182 = cljs.core.first(seq__33485_34176__$1);
var script_tag_34183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33499_34182,(0),null);
var script_body_34184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33499_34182,(1),null);
eval(script_body_34184);


var G__34185 = cljs.core.next(seq__33485_34176__$1);
var G__34186 = null;
var G__34187 = (0);
var G__34188 = (0);
seq__33485_34164 = G__34185;
chunk__33486_34165 = G__34186;
count__33487_34166 = G__34187;
i__33488_34167 = G__34188;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33503){
var vec__33505 = p__33503;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33505,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33505,(1),null);
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
var G__33517 = arguments.length;
switch (G__33517) {
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
var seq__33536 = cljs.core.seq(style_keys);
var chunk__33537 = null;
var count__33538 = (0);
var i__33539 = (0);
while(true){
if((i__33539 < count__33538)){
var it = chunk__33537.cljs$core$IIndexed$_nth$arity$2(null,i__33539);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34191 = seq__33536;
var G__34192 = chunk__33537;
var G__34193 = count__33538;
var G__34194 = (i__33539 + (1));
seq__33536 = G__34191;
chunk__33537 = G__34192;
count__33538 = G__34193;
i__33539 = G__34194;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33536);
if(temp__5735__auto__){
var seq__33536__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33536__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33536__$1);
var G__34196 = cljs.core.chunk_rest(seq__33536__$1);
var G__34197 = c__4556__auto__;
var G__34198 = cljs.core.count(c__4556__auto__);
var G__34199 = (0);
seq__33536 = G__34196;
chunk__33537 = G__34197;
count__33538 = G__34198;
i__33539 = G__34199;
continue;
} else {
var it = cljs.core.first(seq__33536__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34201 = cljs.core.next(seq__33536__$1);
var G__34202 = null;
var G__34203 = (0);
var G__34204 = (0);
seq__33536 = G__34201;
chunk__33537 = G__34202;
count__33538 = G__34203;
i__33539 = G__34204;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33556,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33560 = k33556;
var G__33560__$1 = (((G__33560 instanceof cljs.core.Keyword))?G__33560.fqn:null);
switch (G__33560__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33556,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33572){
var vec__33573 = p__33572;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33573,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33573,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33555){
var self__ = this;
var G__33555__$1 = this;
return (new cljs.core.RecordIter((0),G__33555__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33557,other33558){
var self__ = this;
var this33557__$1 = this;
return (((!((other33558 == null)))) && ((this33557__$1.constructor === other33558.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33557__$1.x,other33558.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33557__$1.y,other33558.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33557__$1.__extmap,other33558.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33555){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33592 = cljs.core.keyword_identical_QMARK_;
var expr__33593 = k__4388__auto__;
if(cljs.core.truth_((pred__33592.cljs$core$IFn$_invoke$arity$2 ? pred__33592.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33593) : pred__33592.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33593)))){
return (new shadow.dom.Coordinate(G__33555,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33592.cljs$core$IFn$_invoke$arity$2 ? pred__33592.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33593) : pred__33592.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33593)))){
return (new shadow.dom.Coordinate(self__.x,G__33555,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33555),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33555){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33555,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33559){
var extmap__4419__auto__ = (function (){var G__33606 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33559,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33559)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33606);
} else {
return G__33606;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33559),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33559),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33615,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33630 = k33615;
var G__33630__$1 = (((G__33630 instanceof cljs.core.Keyword))?G__33630.fqn:null);
switch (G__33630__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33615,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33636){
var vec__33637 = p__33636;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33637,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33637,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33614){
var self__ = this;
var G__33614__$1 = this;
return (new cljs.core.RecordIter((0),G__33614__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33616,other33617){
var self__ = this;
var this33616__$1 = this;
return (((!((other33617 == null)))) && ((this33616__$1.constructor === other33617.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33616__$1.w,other33617.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33616__$1.h,other33617.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33616__$1.__extmap,other33617.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33614){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33658 = cljs.core.keyword_identical_QMARK_;
var expr__33659 = k__4388__auto__;
if(cljs.core.truth_((pred__33658.cljs$core$IFn$_invoke$arity$2 ? pred__33658.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33659) : pred__33658.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33659)))){
return (new shadow.dom.Size(G__33614,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33658.cljs$core$IFn$_invoke$arity$2 ? pred__33658.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33659) : pred__33658.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33659)))){
return (new shadow.dom.Size(self__.w,G__33614,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33614),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33614){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33614,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33619){
var extmap__4419__auto__ = (function (){var G__33667 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33619,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33619)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33667);
} else {
return G__33667;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33619),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33619),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__34288 = (i + (1));
var G__34289 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34288;
ret = G__34289;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33694){
var vec__33696 = p__33694;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33696,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33696,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33702 = arguments.length;
switch (G__33702) {
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
var G__34291 = ps;
var G__34292 = (i + (1));
el__$1 = G__34291;
i = G__34292;
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

var seq__33738_34293 = cljs.core.seq(props);
var chunk__33739_34294 = null;
var count__33740_34295 = (0);
var i__33741_34296 = (0);
while(true){
if((i__33741_34296 < count__33740_34295)){
var vec__33748_34297 = chunk__33739_34294.cljs$core$IIndexed$_nth$arity$2(null,i__33741_34296);
var k_34298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33748_34297,(0),null);
var v_34299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33748_34297,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34298);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34298),v_34299);


var G__34300 = seq__33738_34293;
var G__34301 = chunk__33739_34294;
var G__34302 = count__33740_34295;
var G__34303 = (i__33741_34296 + (1));
seq__33738_34293 = G__34300;
chunk__33739_34294 = G__34301;
count__33740_34295 = G__34302;
i__33741_34296 = G__34303;
continue;
} else {
var temp__5735__auto___34304 = cljs.core.seq(seq__33738_34293);
if(temp__5735__auto___34304){
var seq__33738_34305__$1 = temp__5735__auto___34304;
if(cljs.core.chunked_seq_QMARK_(seq__33738_34305__$1)){
var c__4556__auto___34306 = cljs.core.chunk_first(seq__33738_34305__$1);
var G__34307 = cljs.core.chunk_rest(seq__33738_34305__$1);
var G__34308 = c__4556__auto___34306;
var G__34309 = cljs.core.count(c__4556__auto___34306);
var G__34310 = (0);
seq__33738_34293 = G__34307;
chunk__33739_34294 = G__34308;
count__33740_34295 = G__34309;
i__33741_34296 = G__34310;
continue;
} else {
var vec__33757_34311 = cljs.core.first(seq__33738_34305__$1);
var k_34312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33757_34311,(0),null);
var v_34313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33757_34311,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34312);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34312),v_34313);


var G__34314 = cljs.core.next(seq__33738_34305__$1);
var G__34315 = null;
var G__34316 = (0);
var G__34317 = (0);
seq__33738_34293 = G__34314;
chunk__33739_34294 = G__34315;
count__33740_34295 = G__34316;
i__33741_34296 = G__34317;
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
var vec__33768 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33768,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33768,(1),null);
var seq__33771_34326 = cljs.core.seq(node_children);
var chunk__33773_34327 = null;
var count__33774_34328 = (0);
var i__33775_34329 = (0);
while(true){
if((i__33775_34329 < count__33774_34328)){
var child_struct_34331 = chunk__33773_34327.cljs$core$IIndexed$_nth$arity$2(null,i__33775_34329);
if((!((child_struct_34331 == null)))){
if(typeof child_struct_34331 === 'string'){
var text_34333 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34333),child_struct_34331].join(''));
} else {
var children_34334 = shadow.dom.svg_node(child_struct_34331);
if(cljs.core.seq_QMARK_(children_34334)){
var seq__33800_34335 = cljs.core.seq(children_34334);
var chunk__33802_34336 = null;
var count__33803_34337 = (0);
var i__33804_34338 = (0);
while(true){
if((i__33804_34338 < count__33803_34337)){
var child_34340 = chunk__33802_34336.cljs$core$IIndexed$_nth$arity$2(null,i__33804_34338);
if(cljs.core.truth_(child_34340)){
node.appendChild(child_34340);


var G__34342 = seq__33800_34335;
var G__34343 = chunk__33802_34336;
var G__34344 = count__33803_34337;
var G__34345 = (i__33804_34338 + (1));
seq__33800_34335 = G__34342;
chunk__33802_34336 = G__34343;
count__33803_34337 = G__34344;
i__33804_34338 = G__34345;
continue;
} else {
var G__34346 = seq__33800_34335;
var G__34347 = chunk__33802_34336;
var G__34348 = count__33803_34337;
var G__34349 = (i__33804_34338 + (1));
seq__33800_34335 = G__34346;
chunk__33802_34336 = G__34347;
count__33803_34337 = G__34348;
i__33804_34338 = G__34349;
continue;
}
} else {
var temp__5735__auto___34350 = cljs.core.seq(seq__33800_34335);
if(temp__5735__auto___34350){
var seq__33800_34351__$1 = temp__5735__auto___34350;
if(cljs.core.chunked_seq_QMARK_(seq__33800_34351__$1)){
var c__4556__auto___34352 = cljs.core.chunk_first(seq__33800_34351__$1);
var G__34353 = cljs.core.chunk_rest(seq__33800_34351__$1);
var G__34354 = c__4556__auto___34352;
var G__34355 = cljs.core.count(c__4556__auto___34352);
var G__34356 = (0);
seq__33800_34335 = G__34353;
chunk__33802_34336 = G__34354;
count__33803_34337 = G__34355;
i__33804_34338 = G__34356;
continue;
} else {
var child_34357 = cljs.core.first(seq__33800_34351__$1);
if(cljs.core.truth_(child_34357)){
node.appendChild(child_34357);


var G__34358 = cljs.core.next(seq__33800_34351__$1);
var G__34359 = null;
var G__34360 = (0);
var G__34361 = (0);
seq__33800_34335 = G__34358;
chunk__33802_34336 = G__34359;
count__33803_34337 = G__34360;
i__33804_34338 = G__34361;
continue;
} else {
var G__34363 = cljs.core.next(seq__33800_34351__$1);
var G__34364 = null;
var G__34365 = (0);
var G__34366 = (0);
seq__33800_34335 = G__34363;
chunk__33802_34336 = G__34364;
count__33803_34337 = G__34365;
i__33804_34338 = G__34366;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34334);
}
}


var G__34367 = seq__33771_34326;
var G__34368 = chunk__33773_34327;
var G__34369 = count__33774_34328;
var G__34370 = (i__33775_34329 + (1));
seq__33771_34326 = G__34367;
chunk__33773_34327 = G__34368;
count__33774_34328 = G__34369;
i__33775_34329 = G__34370;
continue;
} else {
var G__34371 = seq__33771_34326;
var G__34372 = chunk__33773_34327;
var G__34373 = count__33774_34328;
var G__34374 = (i__33775_34329 + (1));
seq__33771_34326 = G__34371;
chunk__33773_34327 = G__34372;
count__33774_34328 = G__34373;
i__33775_34329 = G__34374;
continue;
}
} else {
var temp__5735__auto___34375 = cljs.core.seq(seq__33771_34326);
if(temp__5735__auto___34375){
var seq__33771_34376__$1 = temp__5735__auto___34375;
if(cljs.core.chunked_seq_QMARK_(seq__33771_34376__$1)){
var c__4556__auto___34377 = cljs.core.chunk_first(seq__33771_34376__$1);
var G__34378 = cljs.core.chunk_rest(seq__33771_34376__$1);
var G__34379 = c__4556__auto___34377;
var G__34380 = cljs.core.count(c__4556__auto___34377);
var G__34381 = (0);
seq__33771_34326 = G__34378;
chunk__33773_34327 = G__34379;
count__33774_34328 = G__34380;
i__33775_34329 = G__34381;
continue;
} else {
var child_struct_34382 = cljs.core.first(seq__33771_34376__$1);
if((!((child_struct_34382 == null)))){
if(typeof child_struct_34382 === 'string'){
var text_34383 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34383),child_struct_34382].join(''));
} else {
var children_34384 = shadow.dom.svg_node(child_struct_34382);
if(cljs.core.seq_QMARK_(children_34384)){
var seq__33806_34389 = cljs.core.seq(children_34384);
var chunk__33808_34390 = null;
var count__33809_34391 = (0);
var i__33810_34392 = (0);
while(true){
if((i__33810_34392 < count__33809_34391)){
var child_34393 = chunk__33808_34390.cljs$core$IIndexed$_nth$arity$2(null,i__33810_34392);
if(cljs.core.truth_(child_34393)){
node.appendChild(child_34393);


var G__34394 = seq__33806_34389;
var G__34395 = chunk__33808_34390;
var G__34396 = count__33809_34391;
var G__34397 = (i__33810_34392 + (1));
seq__33806_34389 = G__34394;
chunk__33808_34390 = G__34395;
count__33809_34391 = G__34396;
i__33810_34392 = G__34397;
continue;
} else {
var G__34398 = seq__33806_34389;
var G__34399 = chunk__33808_34390;
var G__34400 = count__33809_34391;
var G__34401 = (i__33810_34392 + (1));
seq__33806_34389 = G__34398;
chunk__33808_34390 = G__34399;
count__33809_34391 = G__34400;
i__33810_34392 = G__34401;
continue;
}
} else {
var temp__5735__auto___34402__$1 = cljs.core.seq(seq__33806_34389);
if(temp__5735__auto___34402__$1){
var seq__33806_34403__$1 = temp__5735__auto___34402__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33806_34403__$1)){
var c__4556__auto___34404 = cljs.core.chunk_first(seq__33806_34403__$1);
var G__34405 = cljs.core.chunk_rest(seq__33806_34403__$1);
var G__34406 = c__4556__auto___34404;
var G__34407 = cljs.core.count(c__4556__auto___34404);
var G__34408 = (0);
seq__33806_34389 = G__34405;
chunk__33808_34390 = G__34406;
count__33809_34391 = G__34407;
i__33810_34392 = G__34408;
continue;
} else {
var child_34412 = cljs.core.first(seq__33806_34403__$1);
if(cljs.core.truth_(child_34412)){
node.appendChild(child_34412);


var G__34413 = cljs.core.next(seq__33806_34403__$1);
var G__34414 = null;
var G__34415 = (0);
var G__34416 = (0);
seq__33806_34389 = G__34413;
chunk__33808_34390 = G__34414;
count__33809_34391 = G__34415;
i__33810_34392 = G__34416;
continue;
} else {
var G__34417 = cljs.core.next(seq__33806_34403__$1);
var G__34418 = null;
var G__34419 = (0);
var G__34420 = (0);
seq__33806_34389 = G__34417;
chunk__33808_34390 = G__34418;
count__33809_34391 = G__34419;
i__33810_34392 = G__34420;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34384);
}
}


var G__34423 = cljs.core.next(seq__33771_34376__$1);
var G__34424 = null;
var G__34425 = (0);
var G__34426 = (0);
seq__33771_34326 = G__34423;
chunk__33773_34327 = G__34424;
count__33774_34328 = G__34425;
i__33775_34329 = G__34426;
continue;
} else {
var G__34427 = cljs.core.next(seq__33771_34376__$1);
var G__34428 = null;
var G__34429 = (0);
var G__34430 = (0);
seq__33771_34326 = G__34427;
chunk__33773_34327 = G__34428;
count__33774_34328 = G__34429;
i__33775_34329 = G__34430;
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
var len__4736__auto___34432 = arguments.length;
var i__4737__auto___34433 = (0);
while(true){
if((i__4737__auto___34433 < len__4736__auto___34432)){
args__4742__auto__.push((arguments[i__4737__auto___34433]));

var G__34434 = (i__4737__auto___34433 + (1));
i__4737__auto___34433 = G__34434;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33812){
var G__33813 = cljs.core.first(seq33812);
var seq33812__$1 = cljs.core.next(seq33812);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33813,seq33812__$1);
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
var G__33825 = arguments.length;
switch (G__33825) {
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
var c__30944__auto___34445 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30945__auto__ = (function (){var switch__30714__auto__ = (function (state_33832){
var state_val_33833 = (state_33832[(1)]);
if((state_val_33833 === (1))){
var state_33832__$1 = state_33832;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33832__$1,(2),once_or_cleanup);
} else {
if((state_val_33833 === (2))){
var inst_33829 = (state_33832[(2)]);
var inst_33830 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33832__$1 = (function (){var statearr_33834 = state_33832;
(statearr_33834[(7)] = inst_33829);

return statearr_33834;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33832__$1,inst_33830);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30715__auto__ = null;
var shadow$dom$state_machine__30715__auto____0 = (function (){
var statearr_33838 = [null,null,null,null,null,null,null,null];
(statearr_33838[(0)] = shadow$dom$state_machine__30715__auto__);

(statearr_33838[(1)] = (1));

return statearr_33838;
});
var shadow$dom$state_machine__30715__auto____1 = (function (state_33832){
while(true){
var ret_value__30716__auto__ = (function (){try{while(true){
var result__30717__auto__ = switch__30714__auto__(state_33832);
if(cljs.core.keyword_identical_QMARK_(result__30717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30717__auto__;
}
break;
}
}catch (e33841){var ex__30718__auto__ = e33841;
var statearr_33842_34449 = state_33832;
(statearr_33842_34449[(2)] = ex__30718__auto__);


if(cljs.core.seq((state_33832[(4)]))){
var statearr_33843_34454 = state_33832;
(statearr_33843_34454[(1)] = cljs.core.first((state_33832[(4)])));

} else {
throw ex__30718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34455 = state_33832;
state_33832 = G__34455;
continue;
} else {
return ret_value__30716__auto__;
}
break;
}
});
shadow$dom$state_machine__30715__auto__ = function(state_33832){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30715__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30715__auto____1.call(this,state_33832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30715__auto____0;
shadow$dom$state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30715__auto____1;
return shadow$dom$state_machine__30715__auto__;
})()
})();
var state__30946__auto__ = (function (){var statearr_33844 = f__30945__auto__();
(statearr_33844[(6)] = c__30944__auto___34445);

return statearr_33844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30946__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
