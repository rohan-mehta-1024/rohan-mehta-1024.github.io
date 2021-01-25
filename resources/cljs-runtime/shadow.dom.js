goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33953 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_33953(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33958 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_33958(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33257 = coll;
var G__33258 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33257,G__33258) : shadow.dom.lazy_native_coll_seq.call(null,G__33257,G__33258));
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
var G__33262 = arguments.length;
switch (G__33262) {
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
var G__33268 = arguments.length;
switch (G__33268) {
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
var G__33271 = arguments.length;
switch (G__33271) {
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
var G__33283 = arguments.length;
switch (G__33283) {
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
var G__33285 = arguments.length;
switch (G__33285) {
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
}catch (e33286){if((e33286 instanceof Object)){
var e = e33286;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33286;

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
var handler_33989__$1 = ((function (seq__33292,chunk__33293,count__33294,i__33295,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33292,chunk__33293,count__33294,i__33295,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33989__$1);


var G__33990 = seq__33292;
var G__33991 = chunk__33293;
var G__33992 = count__33294;
var G__33993 = (i__33295 + (1));
seq__33292 = G__33990;
chunk__33293 = G__33991;
count__33294 = G__33992;
i__33295 = G__33993;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33292);
if(temp__5735__auto__){
var seq__33292__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33292__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33292__$1);
var G__33994 = cljs.core.chunk_rest(seq__33292__$1);
var G__33995 = c__4556__auto__;
var G__33996 = cljs.core.count(c__4556__auto__);
var G__33997 = (0);
seq__33292 = G__33994;
chunk__33293 = G__33995;
count__33294 = G__33996;
i__33295 = G__33997;
continue;
} else {
var el = cljs.core.first(seq__33292__$1);
var handler_33998__$1 = ((function (seq__33292,chunk__33293,count__33294,i__33295,el,seq__33292__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33292,chunk__33293,count__33294,i__33295,el,seq__33292__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33998__$1);


var G__33999 = cljs.core.next(seq__33292__$1);
var G__34000 = null;
var G__34001 = (0);
var G__34002 = (0);
seq__33292 = G__33999;
chunk__33293 = G__34000;
count__33294 = G__34001;
i__33295 = G__34002;
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
var seq__33302 = cljs.core.seq(events);
var chunk__33303 = null;
var count__33304 = (0);
var i__33305 = (0);
while(true){
if((i__33305 < count__33304)){
var vec__33313 = chunk__33303.cljs$core$IIndexed$_nth$arity$2(null,i__33305);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33313,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33313,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34012 = seq__33302;
var G__34013 = chunk__33303;
var G__34014 = count__33304;
var G__34015 = (i__33305 + (1));
seq__33302 = G__34012;
chunk__33303 = G__34013;
count__33304 = G__34014;
i__33305 = G__34015;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33302);
if(temp__5735__auto__){
var seq__33302__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33302__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33302__$1);
var G__34016 = cljs.core.chunk_rest(seq__33302__$1);
var G__34017 = c__4556__auto__;
var G__34018 = cljs.core.count(c__4556__auto__);
var G__34019 = (0);
seq__33302 = G__34016;
chunk__33303 = G__34017;
count__33304 = G__34018;
i__33305 = G__34019;
continue;
} else {
var vec__33316 = cljs.core.first(seq__33302__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33316,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33316,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34020 = cljs.core.next(seq__33302__$1);
var G__34021 = null;
var G__34022 = (0);
var G__34023 = (0);
seq__33302 = G__34020;
chunk__33303 = G__34021;
count__33304 = G__34022;
i__33305 = G__34023;
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
var seq__33320 = cljs.core.seq(styles);
var chunk__33321 = null;
var count__33322 = (0);
var i__33323 = (0);
while(true){
if((i__33323 < count__33322)){
var vec__33331 = chunk__33321.cljs$core$IIndexed$_nth$arity$2(null,i__33323);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33331,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33331,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34025 = seq__33320;
var G__34026 = chunk__33321;
var G__34027 = count__33322;
var G__34028 = (i__33323 + (1));
seq__33320 = G__34025;
chunk__33321 = G__34026;
count__33322 = G__34027;
i__33323 = G__34028;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33320);
if(temp__5735__auto__){
var seq__33320__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33320__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33320__$1);
var G__34029 = cljs.core.chunk_rest(seq__33320__$1);
var G__34030 = c__4556__auto__;
var G__34031 = cljs.core.count(c__4556__auto__);
var G__34032 = (0);
seq__33320 = G__34029;
chunk__33321 = G__34030;
count__33322 = G__34031;
i__33323 = G__34032;
continue;
} else {
var vec__33334 = cljs.core.first(seq__33320__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33334,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33334,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34033 = cljs.core.next(seq__33320__$1);
var G__34034 = null;
var G__34035 = (0);
var G__34036 = (0);
seq__33320 = G__34033;
chunk__33321 = G__34034;
count__33322 = G__34035;
i__33323 = G__34036;
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
var G__33337_34037 = key;
var G__33337_34038__$1 = (((G__33337_34037 instanceof cljs.core.Keyword))?G__33337_34037.fqn:null);
switch (G__33337_34038__$1) {
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33343){
var map__33344 = p__33343;
var map__33344__$1 = (((((!((map__33344 == null))))?(((((map__33344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33344):map__33344);
var props = map__33344__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33344__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33347 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33347,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33347,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33347,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33354 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33354,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33354;
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
var vec__33371 = p__33362;
var seq__33372 = cljs.core.seq(vec__33371);
var first__33373 = cljs.core.first(seq__33372);
var seq__33372__$1 = cljs.core.next(seq__33372);
var nn = first__33373;
var first__33373__$1 = cljs.core.first(seq__33372__$1);
var seq__33372__$2 = cljs.core.next(seq__33372__$1);
var np = first__33373__$1;
var nc = seq__33372__$2;
var node = vec__33371;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33376 = nn;
var G__33377 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33376,G__33377) : create_fn.call(null,G__33376,G__33377));
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
var vec__33381 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33381,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33381,(1),null);
var seq__33384_34058 = cljs.core.seq(node_children);
var chunk__33385_34059 = null;
var count__33386_34060 = (0);
var i__33387_34061 = (0);
while(true){
if((i__33387_34061 < count__33386_34060)){
var child_struct_34063 = chunk__33385_34059.cljs$core$IIndexed$_nth$arity$2(null,i__33387_34061);
var children_34064 = shadow.dom.dom_node(child_struct_34063);
if(cljs.core.seq_QMARK_(children_34064)){
var seq__33420_34065 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34064));
var chunk__33422_34066 = null;
var count__33423_34067 = (0);
var i__33424_34068 = (0);
while(true){
if((i__33424_34068 < count__33423_34067)){
var child_34069 = chunk__33422_34066.cljs$core$IIndexed$_nth$arity$2(null,i__33424_34068);
if(cljs.core.truth_(child_34069)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34069);


var G__34070 = seq__33420_34065;
var G__34071 = chunk__33422_34066;
var G__34072 = count__33423_34067;
var G__34073 = (i__33424_34068 + (1));
seq__33420_34065 = G__34070;
chunk__33422_34066 = G__34071;
count__33423_34067 = G__34072;
i__33424_34068 = G__34073;
continue;
} else {
var G__34075 = seq__33420_34065;
var G__34076 = chunk__33422_34066;
var G__34077 = count__33423_34067;
var G__34078 = (i__33424_34068 + (1));
seq__33420_34065 = G__34075;
chunk__33422_34066 = G__34076;
count__33423_34067 = G__34077;
i__33424_34068 = G__34078;
continue;
}
} else {
var temp__5735__auto___34079 = cljs.core.seq(seq__33420_34065);
if(temp__5735__auto___34079){
var seq__33420_34081__$1 = temp__5735__auto___34079;
if(cljs.core.chunked_seq_QMARK_(seq__33420_34081__$1)){
var c__4556__auto___34082 = cljs.core.chunk_first(seq__33420_34081__$1);
var G__34083 = cljs.core.chunk_rest(seq__33420_34081__$1);
var G__34084 = c__4556__auto___34082;
var G__34085 = cljs.core.count(c__4556__auto___34082);
var G__34086 = (0);
seq__33420_34065 = G__34083;
chunk__33422_34066 = G__34084;
count__33423_34067 = G__34085;
i__33424_34068 = G__34086;
continue;
} else {
var child_34088 = cljs.core.first(seq__33420_34081__$1);
if(cljs.core.truth_(child_34088)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34088);


var G__34089 = cljs.core.next(seq__33420_34081__$1);
var G__34090 = null;
var G__34091 = (0);
var G__34092 = (0);
seq__33420_34065 = G__34089;
chunk__33422_34066 = G__34090;
count__33423_34067 = G__34091;
i__33424_34068 = G__34092;
continue;
} else {
var G__34093 = cljs.core.next(seq__33420_34081__$1);
var G__34094 = null;
var G__34095 = (0);
var G__34096 = (0);
seq__33420_34065 = G__34093;
chunk__33422_34066 = G__34094;
count__33423_34067 = G__34095;
i__33424_34068 = G__34096;
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


var G__34097 = seq__33384_34058;
var G__34098 = chunk__33385_34059;
var G__34099 = count__33386_34060;
var G__34100 = (i__33387_34061 + (1));
seq__33384_34058 = G__34097;
chunk__33385_34059 = G__34098;
count__33386_34060 = G__34099;
i__33387_34061 = G__34100;
continue;
} else {
var temp__5735__auto___34101 = cljs.core.seq(seq__33384_34058);
if(temp__5735__auto___34101){
var seq__33384_34103__$1 = temp__5735__auto___34101;
if(cljs.core.chunked_seq_QMARK_(seq__33384_34103__$1)){
var c__4556__auto___34104 = cljs.core.chunk_first(seq__33384_34103__$1);
var G__34105 = cljs.core.chunk_rest(seq__33384_34103__$1);
var G__34106 = c__4556__auto___34104;
var G__34107 = cljs.core.count(c__4556__auto___34104);
var G__34108 = (0);
seq__33384_34058 = G__34105;
chunk__33385_34059 = G__34106;
count__33386_34060 = G__34107;
i__33387_34061 = G__34108;
continue;
} else {
var child_struct_34109 = cljs.core.first(seq__33384_34103__$1);
var children_34110 = shadow.dom.dom_node(child_struct_34109);
if(cljs.core.seq_QMARK_(children_34110)){
var seq__33442_34112 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34110));
var chunk__33444_34113 = null;
var count__33445_34114 = (0);
var i__33446_34115 = (0);
while(true){
if((i__33446_34115 < count__33445_34114)){
var child_34121 = chunk__33444_34113.cljs$core$IIndexed$_nth$arity$2(null,i__33446_34115);
if(cljs.core.truth_(child_34121)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34121);


var G__34123 = seq__33442_34112;
var G__34124 = chunk__33444_34113;
var G__34125 = count__33445_34114;
var G__34126 = (i__33446_34115 + (1));
seq__33442_34112 = G__34123;
chunk__33444_34113 = G__34124;
count__33445_34114 = G__34125;
i__33446_34115 = G__34126;
continue;
} else {
var G__34127 = seq__33442_34112;
var G__34128 = chunk__33444_34113;
var G__34129 = count__33445_34114;
var G__34130 = (i__33446_34115 + (1));
seq__33442_34112 = G__34127;
chunk__33444_34113 = G__34128;
count__33445_34114 = G__34129;
i__33446_34115 = G__34130;
continue;
}
} else {
var temp__5735__auto___34131__$1 = cljs.core.seq(seq__33442_34112);
if(temp__5735__auto___34131__$1){
var seq__33442_34132__$1 = temp__5735__auto___34131__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33442_34132__$1)){
var c__4556__auto___34133 = cljs.core.chunk_first(seq__33442_34132__$1);
var G__34134 = cljs.core.chunk_rest(seq__33442_34132__$1);
var G__34135 = c__4556__auto___34133;
var G__34136 = cljs.core.count(c__4556__auto___34133);
var G__34137 = (0);
seq__33442_34112 = G__34134;
chunk__33444_34113 = G__34135;
count__33445_34114 = G__34136;
i__33446_34115 = G__34137;
continue;
} else {
var child_34138 = cljs.core.first(seq__33442_34132__$1);
if(cljs.core.truth_(child_34138)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34138);


var G__34139 = cljs.core.next(seq__33442_34132__$1);
var G__34140 = null;
var G__34141 = (0);
var G__34142 = (0);
seq__33442_34112 = G__34139;
chunk__33444_34113 = G__34140;
count__33445_34114 = G__34141;
i__33446_34115 = G__34142;
continue;
} else {
var G__34143 = cljs.core.next(seq__33442_34132__$1);
var G__34144 = null;
var G__34145 = (0);
var G__34146 = (0);
seq__33442_34112 = G__34143;
chunk__33444_34113 = G__34144;
count__33445_34114 = G__34145;
i__33446_34115 = G__34146;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34110);
}


var G__34147 = cljs.core.next(seq__33384_34103__$1);
var G__34148 = null;
var G__34149 = (0);
var G__34150 = (0);
seq__33384_34058 = G__34147;
chunk__33385_34059 = G__34148;
count__33386_34060 = G__34149;
i__33387_34061 = G__34150;
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
var seq__33468 = cljs.core.seq(node);
var chunk__33469 = null;
var count__33470 = (0);
var i__33471 = (0);
while(true){
if((i__33471 < count__33470)){
var n = chunk__33469.cljs$core$IIndexed$_nth$arity$2(null,i__33471);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34163 = seq__33468;
var G__34164 = chunk__33469;
var G__34165 = count__33470;
var G__34166 = (i__33471 + (1));
seq__33468 = G__34163;
chunk__33469 = G__34164;
count__33470 = G__34165;
i__33471 = G__34166;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33468);
if(temp__5735__auto__){
var seq__33468__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33468__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33468__$1);
var G__34168 = cljs.core.chunk_rest(seq__33468__$1);
var G__34169 = c__4556__auto__;
var G__34170 = cljs.core.count(c__4556__auto__);
var G__34171 = (0);
seq__33468 = G__34168;
chunk__33469 = G__34169;
count__33470 = G__34170;
i__33471 = G__34171;
continue;
} else {
var n = cljs.core.first(seq__33468__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34172 = cljs.core.next(seq__33468__$1);
var G__34173 = null;
var G__34174 = (0);
var G__34175 = (0);
seq__33468 = G__34172;
chunk__33469 = G__34173;
count__33470 = G__34174;
i__33471 = G__34175;
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
var G__33475 = arguments.length;
switch (G__33475) {
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
var G__33483 = arguments.length;
switch (G__33483) {
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
var G__33499 = arguments.length;
switch (G__33499) {
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
var len__4736__auto___34182 = arguments.length;
var i__4737__auto___34184 = (0);
while(true){
if((i__4737__auto___34184 < len__4736__auto___34182)){
args__4742__auto__.push((arguments[i__4737__auto___34184]));

var G__34185 = (i__4737__auto___34184 + (1));
i__4737__auto___34184 = G__34185;
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
var seq__33529_34193 = cljs.core.seq(nodes);
var chunk__33530_34194 = null;
var count__33531_34195 = (0);
var i__33532_34196 = (0);
while(true){
if((i__33532_34196 < count__33531_34195)){
var node_34197 = chunk__33530_34194.cljs$core$IIndexed$_nth$arity$2(null,i__33532_34196);
fragment.appendChild(shadow.dom._to_dom(node_34197));


var G__34198 = seq__33529_34193;
var G__34199 = chunk__33530_34194;
var G__34200 = count__33531_34195;
var G__34201 = (i__33532_34196 + (1));
seq__33529_34193 = G__34198;
chunk__33530_34194 = G__34199;
count__33531_34195 = G__34200;
i__33532_34196 = G__34201;
continue;
} else {
var temp__5735__auto___34202 = cljs.core.seq(seq__33529_34193);
if(temp__5735__auto___34202){
var seq__33529_34203__$1 = temp__5735__auto___34202;
if(cljs.core.chunked_seq_QMARK_(seq__33529_34203__$1)){
var c__4556__auto___34204 = cljs.core.chunk_first(seq__33529_34203__$1);
var G__34205 = cljs.core.chunk_rest(seq__33529_34203__$1);
var G__34206 = c__4556__auto___34204;
var G__34207 = cljs.core.count(c__4556__auto___34204);
var G__34208 = (0);
seq__33529_34193 = G__34205;
chunk__33530_34194 = G__34206;
count__33531_34195 = G__34207;
i__33532_34196 = G__34208;
continue;
} else {
var node_34209 = cljs.core.first(seq__33529_34203__$1);
fragment.appendChild(shadow.dom._to_dom(node_34209));


var G__34210 = cljs.core.next(seq__33529_34203__$1);
var G__34211 = null;
var G__34212 = (0);
var G__34213 = (0);
seq__33529_34193 = G__34210;
chunk__33530_34194 = G__34211;
count__33531_34195 = G__34212;
i__33532_34196 = G__34213;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33527){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33527));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33537_34214 = cljs.core.seq(scripts);
var chunk__33538_34215 = null;
var count__33539_34216 = (0);
var i__33540_34217 = (0);
while(true){
if((i__33540_34217 < count__33539_34216)){
var vec__33552_34218 = chunk__33538_34215.cljs$core$IIndexed$_nth$arity$2(null,i__33540_34217);
var script_tag_34219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33552_34218,(0),null);
var script_body_34220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33552_34218,(1),null);
eval(script_body_34220);


var G__34221 = seq__33537_34214;
var G__34222 = chunk__33538_34215;
var G__34223 = count__33539_34216;
var G__34224 = (i__33540_34217 + (1));
seq__33537_34214 = G__34221;
chunk__33538_34215 = G__34222;
count__33539_34216 = G__34223;
i__33540_34217 = G__34224;
continue;
} else {
var temp__5735__auto___34225 = cljs.core.seq(seq__33537_34214);
if(temp__5735__auto___34225){
var seq__33537_34226__$1 = temp__5735__auto___34225;
if(cljs.core.chunked_seq_QMARK_(seq__33537_34226__$1)){
var c__4556__auto___34227 = cljs.core.chunk_first(seq__33537_34226__$1);
var G__34228 = cljs.core.chunk_rest(seq__33537_34226__$1);
var G__34229 = c__4556__auto___34227;
var G__34230 = cljs.core.count(c__4556__auto___34227);
var G__34231 = (0);
seq__33537_34214 = G__34228;
chunk__33538_34215 = G__34229;
count__33539_34216 = G__34230;
i__33540_34217 = G__34231;
continue;
} else {
var vec__33558_34232 = cljs.core.first(seq__33537_34226__$1);
var script_tag_34233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33558_34232,(0),null);
var script_body_34234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33558_34232,(1),null);
eval(script_body_34234);


var G__34235 = cljs.core.next(seq__33537_34226__$1);
var G__34236 = null;
var G__34237 = (0);
var G__34238 = (0);
seq__33537_34214 = G__34235;
chunk__33538_34215 = G__34236;
count__33539_34216 = G__34237;
i__33540_34217 = G__34238;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33562){
var vec__33563 = p__33562;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33563,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33563,(1),null);
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
var G__33575 = arguments.length;
switch (G__33575) {
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
var seq__33587 = cljs.core.seq(style_keys);
var chunk__33588 = null;
var count__33589 = (0);
var i__33590 = (0);
while(true){
if((i__33590 < count__33589)){
var it = chunk__33588.cljs$core$IIndexed$_nth$arity$2(null,i__33590);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34257 = seq__33587;
var G__34258 = chunk__33588;
var G__34259 = count__33589;
var G__34260 = (i__33590 + (1));
seq__33587 = G__34257;
chunk__33588 = G__34258;
count__33589 = G__34259;
i__33590 = G__34260;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33587);
if(temp__5735__auto__){
var seq__33587__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33587__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33587__$1);
var G__34263 = cljs.core.chunk_rest(seq__33587__$1);
var G__34264 = c__4556__auto__;
var G__34265 = cljs.core.count(c__4556__auto__);
var G__34266 = (0);
seq__33587 = G__34263;
chunk__33588 = G__34264;
count__33589 = G__34265;
i__33590 = G__34266;
continue;
} else {
var it = cljs.core.first(seq__33587__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34270 = cljs.core.next(seq__33587__$1);
var G__34271 = null;
var G__34272 = (0);
var G__34273 = (0);
seq__33587 = G__34270;
chunk__33588 = G__34271;
count__33589 = G__34272;
i__33590 = G__34273;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33603,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33607 = k33603;
var G__33607__$1 = (((G__33607 instanceof cljs.core.Keyword))?G__33607.fqn:null);
switch (G__33607__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33603,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33609){
var vec__33610 = p__33609;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33610,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33610,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33602){
var self__ = this;
var G__33602__$1 = this;
return (new cljs.core.RecordIter((0),G__33602__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33604,other33605){
var self__ = this;
var this33604__$1 = this;
return (((!((other33605 == null)))) && ((this33604__$1.constructor === other33605.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33604__$1.x,other33605.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33604__$1.y,other33605.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33604__$1.__extmap,other33605.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33602){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33624 = cljs.core.keyword_identical_QMARK_;
var expr__33625 = k__4388__auto__;
if(cljs.core.truth_((pred__33624.cljs$core$IFn$_invoke$arity$2 ? pred__33624.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33625) : pred__33624.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33625)))){
return (new shadow.dom.Coordinate(G__33602,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33624.cljs$core$IFn$_invoke$arity$2 ? pred__33624.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33625) : pred__33624.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33625)))){
return (new shadow.dom.Coordinate(self__.x,G__33602,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33602),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33602){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33602,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33606){
var extmap__4419__auto__ = (function (){var G__33632 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33606,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33606)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33632);
} else {
return G__33632;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33606),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33606),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33637,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33641 = k33637;
var G__33641__$1 = (((G__33641 instanceof cljs.core.Keyword))?G__33641.fqn:null);
switch (G__33641__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33637,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33642){
var vec__33643 = p__33642;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33643,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33643,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33636){
var self__ = this;
var G__33636__$1 = this;
return (new cljs.core.RecordIter((0),G__33636__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33638,other33639){
var self__ = this;
var this33638__$1 = this;
return (((!((other33639 == null)))) && ((this33638__$1.constructor === other33639.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33638__$1.w,other33639.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33638__$1.h,other33639.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33638__$1.__extmap,other33639.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33636){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33654 = cljs.core.keyword_identical_QMARK_;
var expr__33655 = k__4388__auto__;
if(cljs.core.truth_((pred__33654.cljs$core$IFn$_invoke$arity$2 ? pred__33654.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33655) : pred__33654.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33655)))){
return (new shadow.dom.Size(G__33636,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33654.cljs$core$IFn$_invoke$arity$2 ? pred__33654.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33655) : pred__33654.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33655)))){
return (new shadow.dom.Size(self__.w,G__33636,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33636),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33636){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33636,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33640){
var extmap__4419__auto__ = (function (){var G__33665 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33640,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33640)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33665);
} else {
return G__33665;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33640),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33640),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33706){
var vec__33707 = p__33706;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33707,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33707,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33715 = arguments.length;
switch (G__33715) {
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
var vec__33752 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33752,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33752,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33752,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33757_34312 = cljs.core.seq(props);
var chunk__33758_34313 = null;
var count__33759_34314 = (0);
var i__33760_34315 = (0);
while(true){
if((i__33760_34315 < count__33759_34314)){
var vec__33774_34316 = chunk__33758_34313.cljs$core$IIndexed$_nth$arity$2(null,i__33760_34315);
var k_34317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33774_34316,(0),null);
var v_34318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33774_34316,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34317);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34317),v_34318);


var G__34319 = seq__33757_34312;
var G__34320 = chunk__33758_34313;
var G__34321 = count__33759_34314;
var G__34322 = (i__33760_34315 + (1));
seq__33757_34312 = G__34319;
chunk__33758_34313 = G__34320;
count__33759_34314 = G__34321;
i__33760_34315 = G__34322;
continue;
} else {
var temp__5735__auto___34323 = cljs.core.seq(seq__33757_34312);
if(temp__5735__auto___34323){
var seq__33757_34324__$1 = temp__5735__auto___34323;
if(cljs.core.chunked_seq_QMARK_(seq__33757_34324__$1)){
var c__4556__auto___34325 = cljs.core.chunk_first(seq__33757_34324__$1);
var G__34326 = cljs.core.chunk_rest(seq__33757_34324__$1);
var G__34327 = c__4556__auto___34325;
var G__34328 = cljs.core.count(c__4556__auto___34325);
var G__34329 = (0);
seq__33757_34312 = G__34326;
chunk__33758_34313 = G__34327;
count__33759_34314 = G__34328;
i__33760_34315 = G__34329;
continue;
} else {
var vec__33787_34330 = cljs.core.first(seq__33757_34324__$1);
var k_34331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33787_34330,(0),null);
var v_34332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33787_34330,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34331);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34331),v_34332);


var G__34334 = cljs.core.next(seq__33757_34324__$1);
var G__34335 = null;
var G__34336 = (0);
var G__34337 = (0);
seq__33757_34312 = G__34334;
chunk__33758_34313 = G__34335;
count__33759_34314 = G__34336;
i__33760_34315 = G__34337;
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
var vec__33796 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33796,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33796,(1),null);
var seq__33799_34339 = cljs.core.seq(node_children);
var chunk__33801_34340 = null;
var count__33802_34341 = (0);
var i__33803_34342 = (0);
while(true){
if((i__33803_34342 < count__33802_34341)){
var child_struct_34343 = chunk__33801_34340.cljs$core$IIndexed$_nth$arity$2(null,i__33803_34342);
if((!((child_struct_34343 == null)))){
if(typeof child_struct_34343 === 'string'){
var text_34344 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34344),child_struct_34343].join(''));
} else {
var children_34345 = shadow.dom.svg_node(child_struct_34343);
if(cljs.core.seq_QMARK_(children_34345)){
var seq__33844_34346 = cljs.core.seq(children_34345);
var chunk__33846_34347 = null;
var count__33847_34348 = (0);
var i__33848_34349 = (0);
while(true){
if((i__33848_34349 < count__33847_34348)){
var child_34350 = chunk__33846_34347.cljs$core$IIndexed$_nth$arity$2(null,i__33848_34349);
if(cljs.core.truth_(child_34350)){
node.appendChild(child_34350);


var G__34351 = seq__33844_34346;
var G__34352 = chunk__33846_34347;
var G__34353 = count__33847_34348;
var G__34354 = (i__33848_34349 + (1));
seq__33844_34346 = G__34351;
chunk__33846_34347 = G__34352;
count__33847_34348 = G__34353;
i__33848_34349 = G__34354;
continue;
} else {
var G__34355 = seq__33844_34346;
var G__34356 = chunk__33846_34347;
var G__34357 = count__33847_34348;
var G__34358 = (i__33848_34349 + (1));
seq__33844_34346 = G__34355;
chunk__33846_34347 = G__34356;
count__33847_34348 = G__34357;
i__33848_34349 = G__34358;
continue;
}
} else {
var temp__5735__auto___34359 = cljs.core.seq(seq__33844_34346);
if(temp__5735__auto___34359){
var seq__33844_34376__$1 = temp__5735__auto___34359;
if(cljs.core.chunked_seq_QMARK_(seq__33844_34376__$1)){
var c__4556__auto___34378 = cljs.core.chunk_first(seq__33844_34376__$1);
var G__34379 = cljs.core.chunk_rest(seq__33844_34376__$1);
var G__34380 = c__4556__auto___34378;
var G__34381 = cljs.core.count(c__4556__auto___34378);
var G__34382 = (0);
seq__33844_34346 = G__34379;
chunk__33846_34347 = G__34380;
count__33847_34348 = G__34381;
i__33848_34349 = G__34382;
continue;
} else {
var child_34385 = cljs.core.first(seq__33844_34376__$1);
if(cljs.core.truth_(child_34385)){
node.appendChild(child_34385);


var G__34386 = cljs.core.next(seq__33844_34376__$1);
var G__34387 = null;
var G__34388 = (0);
var G__34389 = (0);
seq__33844_34346 = G__34386;
chunk__33846_34347 = G__34387;
count__33847_34348 = G__34388;
i__33848_34349 = G__34389;
continue;
} else {
var G__34391 = cljs.core.next(seq__33844_34376__$1);
var G__34392 = null;
var G__34393 = (0);
var G__34394 = (0);
seq__33844_34346 = G__34391;
chunk__33846_34347 = G__34392;
count__33847_34348 = G__34393;
i__33848_34349 = G__34394;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34345);
}
}


var G__34395 = seq__33799_34339;
var G__34396 = chunk__33801_34340;
var G__34397 = count__33802_34341;
var G__34398 = (i__33803_34342 + (1));
seq__33799_34339 = G__34395;
chunk__33801_34340 = G__34396;
count__33802_34341 = G__34397;
i__33803_34342 = G__34398;
continue;
} else {
var G__34400 = seq__33799_34339;
var G__34401 = chunk__33801_34340;
var G__34402 = count__33802_34341;
var G__34403 = (i__33803_34342 + (1));
seq__33799_34339 = G__34400;
chunk__33801_34340 = G__34401;
count__33802_34341 = G__34402;
i__33803_34342 = G__34403;
continue;
}
} else {
var temp__5735__auto___34404 = cljs.core.seq(seq__33799_34339);
if(temp__5735__auto___34404){
var seq__33799_34405__$1 = temp__5735__auto___34404;
if(cljs.core.chunked_seq_QMARK_(seq__33799_34405__$1)){
var c__4556__auto___34406 = cljs.core.chunk_first(seq__33799_34405__$1);
var G__34407 = cljs.core.chunk_rest(seq__33799_34405__$1);
var G__34408 = c__4556__auto___34406;
var G__34409 = cljs.core.count(c__4556__auto___34406);
var G__34410 = (0);
seq__33799_34339 = G__34407;
chunk__33801_34340 = G__34408;
count__33802_34341 = G__34409;
i__33803_34342 = G__34410;
continue;
} else {
var child_struct_34411 = cljs.core.first(seq__33799_34405__$1);
if((!((child_struct_34411 == null)))){
if(typeof child_struct_34411 === 'string'){
var text_34412 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34412),child_struct_34411].join(''));
} else {
var children_34413 = shadow.dom.svg_node(child_struct_34411);
if(cljs.core.seq_QMARK_(children_34413)){
var seq__33863_34414 = cljs.core.seq(children_34413);
var chunk__33865_34415 = null;
var count__33866_34416 = (0);
var i__33867_34417 = (0);
while(true){
if((i__33867_34417 < count__33866_34416)){
var child_34418 = chunk__33865_34415.cljs$core$IIndexed$_nth$arity$2(null,i__33867_34417);
if(cljs.core.truth_(child_34418)){
node.appendChild(child_34418);


var G__34419 = seq__33863_34414;
var G__34420 = chunk__33865_34415;
var G__34421 = count__33866_34416;
var G__34422 = (i__33867_34417 + (1));
seq__33863_34414 = G__34419;
chunk__33865_34415 = G__34420;
count__33866_34416 = G__34421;
i__33867_34417 = G__34422;
continue;
} else {
var G__34423 = seq__33863_34414;
var G__34424 = chunk__33865_34415;
var G__34425 = count__33866_34416;
var G__34426 = (i__33867_34417 + (1));
seq__33863_34414 = G__34423;
chunk__33865_34415 = G__34424;
count__33866_34416 = G__34425;
i__33867_34417 = G__34426;
continue;
}
} else {
var temp__5735__auto___34431__$1 = cljs.core.seq(seq__33863_34414);
if(temp__5735__auto___34431__$1){
var seq__33863_34432__$1 = temp__5735__auto___34431__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33863_34432__$1)){
var c__4556__auto___34435 = cljs.core.chunk_first(seq__33863_34432__$1);
var G__34436 = cljs.core.chunk_rest(seq__33863_34432__$1);
var G__34437 = c__4556__auto___34435;
var G__34438 = cljs.core.count(c__4556__auto___34435);
var G__34439 = (0);
seq__33863_34414 = G__34436;
chunk__33865_34415 = G__34437;
count__33866_34416 = G__34438;
i__33867_34417 = G__34439;
continue;
} else {
var child_34460 = cljs.core.first(seq__33863_34432__$1);
if(cljs.core.truth_(child_34460)){
node.appendChild(child_34460);


var G__34461 = cljs.core.next(seq__33863_34432__$1);
var G__34462 = null;
var G__34463 = (0);
var G__34464 = (0);
seq__33863_34414 = G__34461;
chunk__33865_34415 = G__34462;
count__33866_34416 = G__34463;
i__33867_34417 = G__34464;
continue;
} else {
var G__34465 = cljs.core.next(seq__33863_34432__$1);
var G__34466 = null;
var G__34467 = (0);
var G__34468 = (0);
seq__33863_34414 = G__34465;
chunk__33865_34415 = G__34466;
count__33866_34416 = G__34467;
i__33867_34417 = G__34468;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34413);
}
}


var G__34469 = cljs.core.next(seq__33799_34405__$1);
var G__34470 = null;
var G__34471 = (0);
var G__34472 = (0);
seq__33799_34339 = G__34469;
chunk__33801_34340 = G__34470;
count__33802_34341 = G__34471;
i__33803_34342 = G__34472;
continue;
} else {
var G__34473 = cljs.core.next(seq__33799_34405__$1);
var G__34474 = null;
var G__34475 = (0);
var G__34476 = (0);
seq__33799_34339 = G__34473;
chunk__33801_34340 = G__34474;
count__33802_34341 = G__34475;
i__33803_34342 = G__34476;
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
var len__4736__auto___34477 = arguments.length;
var i__4737__auto___34478 = (0);
while(true){
if((i__4737__auto___34478 < len__4736__auto___34477)){
args__4742__auto__.push((arguments[i__4737__auto___34478]));

var G__34479 = (i__4737__auto___34478 + (1));
i__4737__auto___34478 = G__34479;
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
var G__33876 = arguments.length;
switch (G__33876) {
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
var c__30942__auto___34488 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30943__auto__ = (function (){var switch__30761__auto__ = (function (state_33891){
var state_val_33892 = (state_33891[(1)]);
if((state_val_33892 === (1))){
var state_33891__$1 = state_33891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33891__$1,(2),once_or_cleanup);
} else {
if((state_val_33892 === (2))){
var inst_33888 = (state_33891[(2)]);
var inst_33889 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33891__$1 = (function (){var statearr_33897 = state_33891;
(statearr_33897[(7)] = inst_33888);

return statearr_33897;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33891__$1,inst_33889);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30762__auto__ = null;
var shadow$dom$state_machine__30762__auto____0 = (function (){
var statearr_33898 = [null,null,null,null,null,null,null,null];
(statearr_33898[(0)] = shadow$dom$state_machine__30762__auto__);

(statearr_33898[(1)] = (1));

return statearr_33898;
});
var shadow$dom$state_machine__30762__auto____1 = (function (state_33891){
while(true){
var ret_value__30763__auto__ = (function (){try{while(true){
var result__30764__auto__ = switch__30761__auto__(state_33891);
if(cljs.core.keyword_identical_QMARK_(result__30764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30764__auto__;
}
break;
}
}catch (e33899){var ex__30765__auto__ = e33899;
var statearr_33900_34494 = state_33891;
(statearr_33900_34494[(2)] = ex__30765__auto__);


if(cljs.core.seq((state_33891[(4)]))){
var statearr_33901_34499 = state_33891;
(statearr_33901_34499[(1)] = cljs.core.first((state_33891[(4)])));

} else {
throw ex__30765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34501 = state_33891;
state_33891 = G__34501;
continue;
} else {
return ret_value__30763__auto__;
}
break;
}
});
shadow$dom$state_machine__30762__auto__ = function(state_33891){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30762__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30762__auto____1.call(this,state_33891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30762__auto____0;
shadow$dom$state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30762__auto____1;
return shadow$dom$state_machine__30762__auto__;
})()
})();
var state__30944__auto__ = (function (){var statearr_33902 = f__30943__auto__();
(statearr_33902[(6)] = c__30942__auto___34488);

return statearr_33902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30944__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
