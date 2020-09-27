goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34015 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_34015(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34016 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_34016(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33297 = coll;
var G__33298 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33297,G__33298) : shadow.dom.lazy_native_coll_seq.call(null,G__33297,G__33298));
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
var G__33301 = arguments.length;
switch (G__33301) {
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
var G__33306 = arguments.length;
switch (G__33306) {
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
var G__33313 = arguments.length;
switch (G__33313) {
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
var G__33315 = arguments.length;
switch (G__33315) {
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
var G__33321 = arguments.length;
switch (G__33321) {
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
var G__33323 = arguments.length;
switch (G__33323) {
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
}catch (e33326){if((e33326 instanceof Object)){
var e = e33326;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33326;

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
var seq__33328 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33329 = null;
var count__33330 = (0);
var i__33331 = (0);
while(true){
if((i__33331 < count__33330)){
var el = chunk__33329.cljs$core$IIndexed$_nth$arity$2(null,i__33331);
var handler_34035__$1 = ((function (seq__33328,chunk__33329,count__33330,i__33331,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33328,chunk__33329,count__33330,i__33331,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34035__$1);


var G__34036 = seq__33328;
var G__34037 = chunk__33329;
var G__34038 = count__33330;
var G__34039 = (i__33331 + (1));
seq__33328 = G__34036;
chunk__33329 = G__34037;
count__33330 = G__34038;
i__33331 = G__34039;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33328);
if(temp__5735__auto__){
var seq__33328__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33328__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33328__$1);
var G__34040 = cljs.core.chunk_rest(seq__33328__$1);
var G__34041 = c__4556__auto__;
var G__34042 = cljs.core.count(c__4556__auto__);
var G__34043 = (0);
seq__33328 = G__34040;
chunk__33329 = G__34041;
count__33330 = G__34042;
i__33331 = G__34043;
continue;
} else {
var el = cljs.core.first(seq__33328__$1);
var handler_34044__$1 = ((function (seq__33328,chunk__33329,count__33330,i__33331,el,seq__33328__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33328,chunk__33329,count__33330,i__33331,el,seq__33328__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34044__$1);


var G__34045 = cljs.core.next(seq__33328__$1);
var G__34046 = null;
var G__34047 = (0);
var G__34048 = (0);
seq__33328 = G__34045;
chunk__33329 = G__34046;
count__33330 = G__34047;
i__33331 = G__34048;
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
var G__33338 = arguments.length;
switch (G__33338) {
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
var seq__33342 = cljs.core.seq(events);
var chunk__33343 = null;
var count__33344 = (0);
var i__33345 = (0);
while(true){
if((i__33345 < count__33344)){
var vec__33352 = chunk__33343.cljs$core$IIndexed$_nth$arity$2(null,i__33345);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33352,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33352,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34050 = seq__33342;
var G__34051 = chunk__33343;
var G__34052 = count__33344;
var G__34053 = (i__33345 + (1));
seq__33342 = G__34050;
chunk__33343 = G__34051;
count__33344 = G__34052;
i__33345 = G__34053;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33342);
if(temp__5735__auto__){
var seq__33342__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33342__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33342__$1);
var G__34054 = cljs.core.chunk_rest(seq__33342__$1);
var G__34055 = c__4556__auto__;
var G__34056 = cljs.core.count(c__4556__auto__);
var G__34057 = (0);
seq__33342 = G__34054;
chunk__33343 = G__34055;
count__33344 = G__34056;
i__33345 = G__34057;
continue;
} else {
var vec__33355 = cljs.core.first(seq__33342__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33355,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33355,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34058 = cljs.core.next(seq__33342__$1);
var G__34059 = null;
var G__34060 = (0);
var G__34061 = (0);
seq__33342 = G__34058;
chunk__33343 = G__34059;
count__33344 = G__34060;
i__33345 = G__34061;
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
var seq__33358 = cljs.core.seq(styles);
var chunk__33359 = null;
var count__33360 = (0);
var i__33361 = (0);
while(true){
if((i__33361 < count__33360)){
var vec__33372 = chunk__33359.cljs$core$IIndexed$_nth$arity$2(null,i__33361);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33372,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33372,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34062 = seq__33358;
var G__34063 = chunk__33359;
var G__34064 = count__33360;
var G__34065 = (i__33361 + (1));
seq__33358 = G__34062;
chunk__33359 = G__34063;
count__33360 = G__34064;
i__33361 = G__34065;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33358);
if(temp__5735__auto__){
var seq__33358__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33358__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33358__$1);
var G__34066 = cljs.core.chunk_rest(seq__33358__$1);
var G__34067 = c__4556__auto__;
var G__34068 = cljs.core.count(c__4556__auto__);
var G__34069 = (0);
seq__33358 = G__34066;
chunk__33359 = G__34067;
count__33360 = G__34068;
i__33361 = G__34069;
continue;
} else {
var vec__33375 = cljs.core.first(seq__33358__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33375,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33375,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34071 = cljs.core.next(seq__33358__$1);
var G__34072 = null;
var G__34073 = (0);
var G__34074 = (0);
seq__33358 = G__34071;
chunk__33359 = G__34072;
count__33360 = G__34073;
i__33361 = G__34074;
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
var G__33378_34077 = key;
var G__33378_34078__$1 = (((G__33378_34077 instanceof cljs.core.Keyword))?G__33378_34077.fqn:null);
switch (G__33378_34078__$1) {
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
var ks_34083 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_34083,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_34083,"aria-");
}
})())){
el.setAttribute(ks_34083,value);
} else {
(el[ks_34083] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33380){
var map__33381 = p__33380;
var map__33381__$1 = (((((!((map__33381 == null))))?(((((map__33381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33381):map__33381);
var props = map__33381__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33381__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33383 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33383,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33383,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33383,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33386 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33386,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33386;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33388 = arguments.length;
switch (G__33388) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33394){
var vec__33395 = p__33394;
var seq__33396 = cljs.core.seq(vec__33395);
var first__33397 = cljs.core.first(seq__33396);
var seq__33396__$1 = cljs.core.next(seq__33396);
var nn = first__33397;
var first__33397__$1 = cljs.core.first(seq__33396__$1);
var seq__33396__$2 = cljs.core.next(seq__33396__$1);
var np = first__33397__$1;
var nc = seq__33396__$2;
var node = vec__33395;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33398 = nn;
var G__33399 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33398,G__33399) : create_fn.call(null,G__33398,G__33399));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33400 = nn;
var G__33401 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33400,G__33401) : create_fn.call(null,G__33400,G__33401));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33417 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33417,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33417,(1),null);
var seq__33420_34128 = cljs.core.seq(node_children);
var chunk__33421_34129 = null;
var count__33422_34130 = (0);
var i__33423_34131 = (0);
while(true){
if((i__33423_34131 < count__33422_34130)){
var child_struct_34132 = chunk__33421_34129.cljs$core$IIndexed$_nth$arity$2(null,i__33423_34131);
var children_34133 = shadow.dom.dom_node(child_struct_34132);
if(cljs.core.seq_QMARK_(children_34133)){
var seq__33463_34134 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34133));
var chunk__33465_34135 = null;
var count__33466_34136 = (0);
var i__33467_34137 = (0);
while(true){
if((i__33467_34137 < count__33466_34136)){
var child_34138 = chunk__33465_34135.cljs$core$IIndexed$_nth$arity$2(null,i__33467_34137);
if(cljs.core.truth_(child_34138)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34138);


var G__34139 = seq__33463_34134;
var G__34140 = chunk__33465_34135;
var G__34141 = count__33466_34136;
var G__34142 = (i__33467_34137 + (1));
seq__33463_34134 = G__34139;
chunk__33465_34135 = G__34140;
count__33466_34136 = G__34141;
i__33467_34137 = G__34142;
continue;
} else {
var G__34143 = seq__33463_34134;
var G__34144 = chunk__33465_34135;
var G__34145 = count__33466_34136;
var G__34146 = (i__33467_34137 + (1));
seq__33463_34134 = G__34143;
chunk__33465_34135 = G__34144;
count__33466_34136 = G__34145;
i__33467_34137 = G__34146;
continue;
}
} else {
var temp__5735__auto___34147 = cljs.core.seq(seq__33463_34134);
if(temp__5735__auto___34147){
var seq__33463_34148__$1 = temp__5735__auto___34147;
if(cljs.core.chunked_seq_QMARK_(seq__33463_34148__$1)){
var c__4556__auto___34149 = cljs.core.chunk_first(seq__33463_34148__$1);
var G__34150 = cljs.core.chunk_rest(seq__33463_34148__$1);
var G__34151 = c__4556__auto___34149;
var G__34152 = cljs.core.count(c__4556__auto___34149);
var G__34153 = (0);
seq__33463_34134 = G__34150;
chunk__33465_34135 = G__34151;
count__33466_34136 = G__34152;
i__33467_34137 = G__34153;
continue;
} else {
var child_34154 = cljs.core.first(seq__33463_34148__$1);
if(cljs.core.truth_(child_34154)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34154);


var G__34155 = cljs.core.next(seq__33463_34148__$1);
var G__34156 = null;
var G__34157 = (0);
var G__34158 = (0);
seq__33463_34134 = G__34155;
chunk__33465_34135 = G__34156;
count__33466_34136 = G__34157;
i__33467_34137 = G__34158;
continue;
} else {
var G__34159 = cljs.core.next(seq__33463_34148__$1);
var G__34160 = null;
var G__34161 = (0);
var G__34162 = (0);
seq__33463_34134 = G__34159;
chunk__33465_34135 = G__34160;
count__33466_34136 = G__34161;
i__33467_34137 = G__34162;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34133);
}


var G__34163 = seq__33420_34128;
var G__34164 = chunk__33421_34129;
var G__34165 = count__33422_34130;
var G__34166 = (i__33423_34131 + (1));
seq__33420_34128 = G__34163;
chunk__33421_34129 = G__34164;
count__33422_34130 = G__34165;
i__33423_34131 = G__34166;
continue;
} else {
var temp__5735__auto___34167 = cljs.core.seq(seq__33420_34128);
if(temp__5735__auto___34167){
var seq__33420_34168__$1 = temp__5735__auto___34167;
if(cljs.core.chunked_seq_QMARK_(seq__33420_34168__$1)){
var c__4556__auto___34169 = cljs.core.chunk_first(seq__33420_34168__$1);
var G__34170 = cljs.core.chunk_rest(seq__33420_34168__$1);
var G__34171 = c__4556__auto___34169;
var G__34172 = cljs.core.count(c__4556__auto___34169);
var G__34173 = (0);
seq__33420_34128 = G__34170;
chunk__33421_34129 = G__34171;
count__33422_34130 = G__34172;
i__33423_34131 = G__34173;
continue;
} else {
var child_struct_34174 = cljs.core.first(seq__33420_34168__$1);
var children_34181 = shadow.dom.dom_node(child_struct_34174);
if(cljs.core.seq_QMARK_(children_34181)){
var seq__33478_34182 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34181));
var chunk__33480_34183 = null;
var count__33481_34184 = (0);
var i__33482_34185 = (0);
while(true){
if((i__33482_34185 < count__33481_34184)){
var child_34186 = chunk__33480_34183.cljs$core$IIndexed$_nth$arity$2(null,i__33482_34185);
if(cljs.core.truth_(child_34186)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34186);


var G__34187 = seq__33478_34182;
var G__34188 = chunk__33480_34183;
var G__34189 = count__33481_34184;
var G__34190 = (i__33482_34185 + (1));
seq__33478_34182 = G__34187;
chunk__33480_34183 = G__34188;
count__33481_34184 = G__34189;
i__33482_34185 = G__34190;
continue;
} else {
var G__34191 = seq__33478_34182;
var G__34192 = chunk__33480_34183;
var G__34193 = count__33481_34184;
var G__34194 = (i__33482_34185 + (1));
seq__33478_34182 = G__34191;
chunk__33480_34183 = G__34192;
count__33481_34184 = G__34193;
i__33482_34185 = G__34194;
continue;
}
} else {
var temp__5735__auto___34195__$1 = cljs.core.seq(seq__33478_34182);
if(temp__5735__auto___34195__$1){
var seq__33478_34197__$1 = temp__5735__auto___34195__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33478_34197__$1)){
var c__4556__auto___34198 = cljs.core.chunk_first(seq__33478_34197__$1);
var G__34199 = cljs.core.chunk_rest(seq__33478_34197__$1);
var G__34200 = c__4556__auto___34198;
var G__34201 = cljs.core.count(c__4556__auto___34198);
var G__34202 = (0);
seq__33478_34182 = G__34199;
chunk__33480_34183 = G__34200;
count__33481_34184 = G__34201;
i__33482_34185 = G__34202;
continue;
} else {
var child_34204 = cljs.core.first(seq__33478_34197__$1);
if(cljs.core.truth_(child_34204)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34204);


var G__34206 = cljs.core.next(seq__33478_34197__$1);
var G__34207 = null;
var G__34208 = (0);
var G__34209 = (0);
seq__33478_34182 = G__34206;
chunk__33480_34183 = G__34207;
count__33481_34184 = G__34208;
i__33482_34185 = G__34209;
continue;
} else {
var G__34210 = cljs.core.next(seq__33478_34197__$1);
var G__34211 = null;
var G__34212 = (0);
var G__34213 = (0);
seq__33478_34182 = G__34210;
chunk__33480_34183 = G__34211;
count__33481_34184 = G__34212;
i__33482_34185 = G__34213;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34181);
}


var G__34215 = cljs.core.next(seq__33420_34168__$1);
var G__34216 = null;
var G__34217 = (0);
var G__34218 = (0);
seq__33420_34128 = G__34215;
chunk__33421_34129 = G__34216;
count__33422_34130 = G__34217;
i__33423_34131 = G__34218;
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
var seq__33514 = cljs.core.seq(node);
var chunk__33515 = null;
var count__33516 = (0);
var i__33517 = (0);
while(true){
if((i__33517 < count__33516)){
var n = chunk__33515.cljs$core$IIndexed$_nth$arity$2(null,i__33517);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34221 = seq__33514;
var G__34222 = chunk__33515;
var G__34223 = count__33516;
var G__34224 = (i__33517 + (1));
seq__33514 = G__34221;
chunk__33515 = G__34222;
count__33516 = G__34223;
i__33517 = G__34224;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33514);
if(temp__5735__auto__){
var seq__33514__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33514__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33514__$1);
var G__34225 = cljs.core.chunk_rest(seq__33514__$1);
var G__34226 = c__4556__auto__;
var G__34227 = cljs.core.count(c__4556__auto__);
var G__34228 = (0);
seq__33514 = G__34225;
chunk__33515 = G__34226;
count__33516 = G__34227;
i__33517 = G__34228;
continue;
} else {
var n = cljs.core.first(seq__33514__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34229 = cljs.core.next(seq__33514__$1);
var G__34230 = null;
var G__34231 = (0);
var G__34232 = (0);
seq__33514 = G__34229;
chunk__33515 = G__34230;
count__33516 = G__34231;
i__33517 = G__34232;
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
var G__33529 = arguments.length;
switch (G__33529) {
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
var G__33534 = arguments.length;
switch (G__33534) {
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
var G__33555 = arguments.length;
switch (G__33555) {
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
var len__4736__auto___34239 = arguments.length;
var i__4737__auto___34240 = (0);
while(true){
if((i__4737__auto___34240 < len__4736__auto___34239)){
args__4742__auto__.push((arguments[i__4737__auto___34240]));

var G__34241 = (i__4737__auto___34240 + (1));
i__4737__auto___34240 = G__34241;
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
var seq__33572_34242 = cljs.core.seq(nodes);
var chunk__33573_34243 = null;
var count__33574_34244 = (0);
var i__33575_34245 = (0);
while(true){
if((i__33575_34245 < count__33574_34244)){
var node_34246 = chunk__33573_34243.cljs$core$IIndexed$_nth$arity$2(null,i__33575_34245);
fragment.appendChild(shadow.dom._to_dom(node_34246));


var G__34247 = seq__33572_34242;
var G__34248 = chunk__33573_34243;
var G__34249 = count__33574_34244;
var G__34250 = (i__33575_34245 + (1));
seq__33572_34242 = G__34247;
chunk__33573_34243 = G__34248;
count__33574_34244 = G__34249;
i__33575_34245 = G__34250;
continue;
} else {
var temp__5735__auto___34251 = cljs.core.seq(seq__33572_34242);
if(temp__5735__auto___34251){
var seq__33572_34252__$1 = temp__5735__auto___34251;
if(cljs.core.chunked_seq_QMARK_(seq__33572_34252__$1)){
var c__4556__auto___34253 = cljs.core.chunk_first(seq__33572_34252__$1);
var G__34254 = cljs.core.chunk_rest(seq__33572_34252__$1);
var G__34255 = c__4556__auto___34253;
var G__34256 = cljs.core.count(c__4556__auto___34253);
var G__34257 = (0);
seq__33572_34242 = G__34254;
chunk__33573_34243 = G__34255;
count__33574_34244 = G__34256;
i__33575_34245 = G__34257;
continue;
} else {
var node_34258 = cljs.core.first(seq__33572_34252__$1);
fragment.appendChild(shadow.dom._to_dom(node_34258));


var G__34259 = cljs.core.next(seq__33572_34252__$1);
var G__34260 = null;
var G__34261 = (0);
var G__34262 = (0);
seq__33572_34242 = G__34259;
chunk__33573_34243 = G__34260;
count__33574_34244 = G__34261;
i__33575_34245 = G__34262;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33559){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33559));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33585_34263 = cljs.core.seq(scripts);
var chunk__33586_34264 = null;
var count__33587_34265 = (0);
var i__33588_34266 = (0);
while(true){
if((i__33588_34266 < count__33587_34265)){
var vec__33602_34267 = chunk__33586_34264.cljs$core$IIndexed$_nth$arity$2(null,i__33588_34266);
var script_tag_34268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33602_34267,(0),null);
var script_body_34269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33602_34267,(1),null);
eval(script_body_34269);


var G__34270 = seq__33585_34263;
var G__34271 = chunk__33586_34264;
var G__34272 = count__33587_34265;
var G__34273 = (i__33588_34266 + (1));
seq__33585_34263 = G__34270;
chunk__33586_34264 = G__34271;
count__33587_34265 = G__34272;
i__33588_34266 = G__34273;
continue;
} else {
var temp__5735__auto___34274 = cljs.core.seq(seq__33585_34263);
if(temp__5735__auto___34274){
var seq__33585_34275__$1 = temp__5735__auto___34274;
if(cljs.core.chunked_seq_QMARK_(seq__33585_34275__$1)){
var c__4556__auto___34276 = cljs.core.chunk_first(seq__33585_34275__$1);
var G__34278 = cljs.core.chunk_rest(seq__33585_34275__$1);
var G__34279 = c__4556__auto___34276;
var G__34280 = cljs.core.count(c__4556__auto___34276);
var G__34281 = (0);
seq__33585_34263 = G__34278;
chunk__33586_34264 = G__34279;
count__33587_34265 = G__34280;
i__33588_34266 = G__34281;
continue;
} else {
var vec__33605_34282 = cljs.core.first(seq__33585_34275__$1);
var script_tag_34283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33605_34282,(0),null);
var script_body_34284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33605_34282,(1),null);
eval(script_body_34284);


var G__34285 = cljs.core.next(seq__33585_34275__$1);
var G__34286 = null;
var G__34287 = (0);
var G__34288 = (0);
seq__33585_34263 = G__34285;
chunk__33586_34264 = G__34286;
count__33587_34265 = G__34287;
i__33588_34266 = G__34288;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33608){
var vec__33609 = p__33608;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33609,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33609,(1),null);
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
var G__33620 = arguments.length;
switch (G__33620) {
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
var seq__33624 = cljs.core.seq(style_keys);
var chunk__33625 = null;
var count__33626 = (0);
var i__33627 = (0);
while(true){
if((i__33627 < count__33626)){
var it = chunk__33625.cljs$core$IIndexed$_nth$arity$2(null,i__33627);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34292 = seq__33624;
var G__34293 = chunk__33625;
var G__34294 = count__33626;
var G__34295 = (i__33627 + (1));
seq__33624 = G__34292;
chunk__33625 = G__34293;
count__33626 = G__34294;
i__33627 = G__34295;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33624);
if(temp__5735__auto__){
var seq__33624__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33624__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33624__$1);
var G__34297 = cljs.core.chunk_rest(seq__33624__$1);
var G__34298 = c__4556__auto__;
var G__34299 = cljs.core.count(c__4556__auto__);
var G__34300 = (0);
seq__33624 = G__34297;
chunk__33625 = G__34298;
count__33626 = G__34299;
i__33627 = G__34300;
continue;
} else {
var it = cljs.core.first(seq__33624__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34304 = cljs.core.next(seq__33624__$1);
var G__34305 = null;
var G__34306 = (0);
var G__34307 = (0);
seq__33624 = G__34304;
chunk__33625 = G__34305;
count__33626 = G__34306;
i__33627 = G__34307;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33637,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33643 = k33637;
var G__33643__$1 = (((G__33643 instanceof cljs.core.Keyword))?G__33643.fqn:null);
switch (G__33643__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33637,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33648){
var vec__33649 = p__33648;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33649,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33649,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33636){
var self__ = this;
var G__33636__$1 = this;
return (new cljs.core.RecordIter((0),G__33636__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33638,other33639){
var self__ = this;
var this33638__$1 = this;
return (((!((other33639 == null)))) && ((this33638__$1.constructor === other33639.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33638__$1.x,other33639.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33638__$1.y,other33639.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33638__$1.__extmap,other33639.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33636){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33663 = cljs.core.keyword_identical_QMARK_;
var expr__33664 = k__4388__auto__;
if(cljs.core.truth_((pred__33663.cljs$core$IFn$_invoke$arity$2 ? pred__33663.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33664) : pred__33663.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33664)))){
return (new shadow.dom.Coordinate(G__33636,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33663.cljs$core$IFn$_invoke$arity$2 ? pred__33663.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33664) : pred__33663.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33664)))){
return (new shadow.dom.Coordinate(self__.x,G__33636,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33636),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33636){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33636,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33640){
var extmap__4419__auto__ = (function (){var G__33678 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33640,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33640)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33678);
} else {
return G__33678;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33640),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33640),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33686,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33694 = k33686;
var G__33694__$1 = (((G__33694 instanceof cljs.core.Keyword))?G__33694.fqn:null);
switch (G__33694__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33686,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33695){
var vec__33696 = p__33695;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33696,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33696,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33685){
var self__ = this;
var G__33685__$1 = this;
return (new cljs.core.RecordIter((0),G__33685__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33687,other33688){
var self__ = this;
var this33687__$1 = this;
return (((!((other33688 == null)))) && ((this33687__$1.constructor === other33688.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33687__$1.w,other33688.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33687__$1.h,other33688.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33687__$1.__extmap,other33688.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33685){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33728 = cljs.core.keyword_identical_QMARK_;
var expr__33729 = k__4388__auto__;
if(cljs.core.truth_((pred__33728.cljs$core$IFn$_invoke$arity$2 ? pred__33728.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33729) : pred__33728.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33729)))){
return (new shadow.dom.Size(G__33685,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33728.cljs$core$IFn$_invoke$arity$2 ? pred__33728.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33729) : pred__33728.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33729)))){
return (new shadow.dom.Size(self__.w,G__33685,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33685),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33685){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33685,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33689){
var extmap__4419__auto__ = (function (){var G__33759 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33689,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33689)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33759);
} else {
return G__33759;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33689),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33689),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__34345 = (i + (1));
var G__34346 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34345;
ret = G__34346;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33766){
var vec__33767 = p__33766;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33767,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33767,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33780 = arguments.length;
switch (G__33780) {
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
var G__34353 = ps;
var G__34354 = (i + (1));
el__$1 = G__34353;
i = G__34354;
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
var vec__33800 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33800,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33800,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33800,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33804_34355 = cljs.core.seq(props);
var chunk__33805_34356 = null;
var count__33806_34357 = (0);
var i__33807_34358 = (0);
while(true){
if((i__33807_34358 < count__33806_34357)){
var vec__33842_34359 = chunk__33805_34356.cljs$core$IIndexed$_nth$arity$2(null,i__33807_34358);
var k_34360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33842_34359,(0),null);
var v_34361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33842_34359,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34360);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34360),v_34361);


var G__34364 = seq__33804_34355;
var G__34366 = chunk__33805_34356;
var G__34367 = count__33806_34357;
var G__34368 = (i__33807_34358 + (1));
seq__33804_34355 = G__34364;
chunk__33805_34356 = G__34366;
count__33806_34357 = G__34367;
i__33807_34358 = G__34368;
continue;
} else {
var temp__5735__auto___34370 = cljs.core.seq(seq__33804_34355);
if(temp__5735__auto___34370){
var seq__33804_34372__$1 = temp__5735__auto___34370;
if(cljs.core.chunked_seq_QMARK_(seq__33804_34372__$1)){
var c__4556__auto___34373 = cljs.core.chunk_first(seq__33804_34372__$1);
var G__34374 = cljs.core.chunk_rest(seq__33804_34372__$1);
var G__34375 = c__4556__auto___34373;
var G__34376 = cljs.core.count(c__4556__auto___34373);
var G__34377 = (0);
seq__33804_34355 = G__34374;
chunk__33805_34356 = G__34375;
count__33806_34357 = G__34376;
i__33807_34358 = G__34377;
continue;
} else {
var vec__33847_34379 = cljs.core.first(seq__33804_34372__$1);
var k_34380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33847_34379,(0),null);
var v_34381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33847_34379,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34380);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34380),v_34381);


var G__34382 = cljs.core.next(seq__33804_34372__$1);
var G__34383 = null;
var G__34384 = (0);
var G__34385 = (0);
seq__33804_34355 = G__34382;
chunk__33805_34356 = G__34383;
count__33806_34357 = G__34384;
i__33807_34358 = G__34385;
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
var vec__33863 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33863,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33863,(1),null);
var seq__33866_34390 = cljs.core.seq(node_children);
var chunk__33868_34391 = null;
var count__33869_34392 = (0);
var i__33870_34393 = (0);
while(true){
if((i__33870_34393 < count__33869_34392)){
var child_struct_34395 = chunk__33868_34391.cljs$core$IIndexed$_nth$arity$2(null,i__33870_34393);
if((!((child_struct_34395 == null)))){
if(typeof child_struct_34395 === 'string'){
var text_34415 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34415),child_struct_34395].join(''));
} else {
var children_34416 = shadow.dom.svg_node(child_struct_34395);
if(cljs.core.seq_QMARK_(children_34416)){
var seq__33902_34417 = cljs.core.seq(children_34416);
var chunk__33904_34418 = null;
var count__33905_34419 = (0);
var i__33906_34420 = (0);
while(true){
if((i__33906_34420 < count__33905_34419)){
var child_34421 = chunk__33904_34418.cljs$core$IIndexed$_nth$arity$2(null,i__33906_34420);
if(cljs.core.truth_(child_34421)){
node.appendChild(child_34421);


var G__34422 = seq__33902_34417;
var G__34423 = chunk__33904_34418;
var G__34424 = count__33905_34419;
var G__34425 = (i__33906_34420 + (1));
seq__33902_34417 = G__34422;
chunk__33904_34418 = G__34423;
count__33905_34419 = G__34424;
i__33906_34420 = G__34425;
continue;
} else {
var G__34426 = seq__33902_34417;
var G__34427 = chunk__33904_34418;
var G__34428 = count__33905_34419;
var G__34429 = (i__33906_34420 + (1));
seq__33902_34417 = G__34426;
chunk__33904_34418 = G__34427;
count__33905_34419 = G__34428;
i__33906_34420 = G__34429;
continue;
}
} else {
var temp__5735__auto___34430 = cljs.core.seq(seq__33902_34417);
if(temp__5735__auto___34430){
var seq__33902_34431__$1 = temp__5735__auto___34430;
if(cljs.core.chunked_seq_QMARK_(seq__33902_34431__$1)){
var c__4556__auto___34432 = cljs.core.chunk_first(seq__33902_34431__$1);
var G__34433 = cljs.core.chunk_rest(seq__33902_34431__$1);
var G__34434 = c__4556__auto___34432;
var G__34435 = cljs.core.count(c__4556__auto___34432);
var G__34436 = (0);
seq__33902_34417 = G__34433;
chunk__33904_34418 = G__34434;
count__33905_34419 = G__34435;
i__33906_34420 = G__34436;
continue;
} else {
var child_34442 = cljs.core.first(seq__33902_34431__$1);
if(cljs.core.truth_(child_34442)){
node.appendChild(child_34442);


var G__34443 = cljs.core.next(seq__33902_34431__$1);
var G__34444 = null;
var G__34445 = (0);
var G__34446 = (0);
seq__33902_34417 = G__34443;
chunk__33904_34418 = G__34444;
count__33905_34419 = G__34445;
i__33906_34420 = G__34446;
continue;
} else {
var G__34447 = cljs.core.next(seq__33902_34431__$1);
var G__34448 = null;
var G__34449 = (0);
var G__34450 = (0);
seq__33902_34417 = G__34447;
chunk__33904_34418 = G__34448;
count__33905_34419 = G__34449;
i__33906_34420 = G__34450;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34416);
}
}


var G__34451 = seq__33866_34390;
var G__34452 = chunk__33868_34391;
var G__34453 = count__33869_34392;
var G__34454 = (i__33870_34393 + (1));
seq__33866_34390 = G__34451;
chunk__33868_34391 = G__34452;
count__33869_34392 = G__34453;
i__33870_34393 = G__34454;
continue;
} else {
var G__34455 = seq__33866_34390;
var G__34456 = chunk__33868_34391;
var G__34457 = count__33869_34392;
var G__34458 = (i__33870_34393 + (1));
seq__33866_34390 = G__34455;
chunk__33868_34391 = G__34456;
count__33869_34392 = G__34457;
i__33870_34393 = G__34458;
continue;
}
} else {
var temp__5735__auto___34459 = cljs.core.seq(seq__33866_34390);
if(temp__5735__auto___34459){
var seq__33866_34461__$1 = temp__5735__auto___34459;
if(cljs.core.chunked_seq_QMARK_(seq__33866_34461__$1)){
var c__4556__auto___34462 = cljs.core.chunk_first(seq__33866_34461__$1);
var G__34463 = cljs.core.chunk_rest(seq__33866_34461__$1);
var G__34464 = c__4556__auto___34462;
var G__34465 = cljs.core.count(c__4556__auto___34462);
var G__34466 = (0);
seq__33866_34390 = G__34463;
chunk__33868_34391 = G__34464;
count__33869_34392 = G__34465;
i__33870_34393 = G__34466;
continue;
} else {
var child_struct_34467 = cljs.core.first(seq__33866_34461__$1);
if((!((child_struct_34467 == null)))){
if(typeof child_struct_34467 === 'string'){
var text_34468 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34468),child_struct_34467].join(''));
} else {
var children_34469 = shadow.dom.svg_node(child_struct_34467);
if(cljs.core.seq_QMARK_(children_34469)){
var seq__33932_34471 = cljs.core.seq(children_34469);
var chunk__33934_34472 = null;
var count__33935_34473 = (0);
var i__33936_34474 = (0);
while(true){
if((i__33936_34474 < count__33935_34473)){
var child_34476 = chunk__33934_34472.cljs$core$IIndexed$_nth$arity$2(null,i__33936_34474);
if(cljs.core.truth_(child_34476)){
node.appendChild(child_34476);


var G__34477 = seq__33932_34471;
var G__34478 = chunk__33934_34472;
var G__34479 = count__33935_34473;
var G__34480 = (i__33936_34474 + (1));
seq__33932_34471 = G__34477;
chunk__33934_34472 = G__34478;
count__33935_34473 = G__34479;
i__33936_34474 = G__34480;
continue;
} else {
var G__34481 = seq__33932_34471;
var G__34482 = chunk__33934_34472;
var G__34483 = count__33935_34473;
var G__34484 = (i__33936_34474 + (1));
seq__33932_34471 = G__34481;
chunk__33934_34472 = G__34482;
count__33935_34473 = G__34483;
i__33936_34474 = G__34484;
continue;
}
} else {
var temp__5735__auto___34485__$1 = cljs.core.seq(seq__33932_34471);
if(temp__5735__auto___34485__$1){
var seq__33932_34514__$1 = temp__5735__auto___34485__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33932_34514__$1)){
var c__4556__auto___34515 = cljs.core.chunk_first(seq__33932_34514__$1);
var G__34516 = cljs.core.chunk_rest(seq__33932_34514__$1);
var G__34517 = c__4556__auto___34515;
var G__34518 = cljs.core.count(c__4556__auto___34515);
var G__34519 = (0);
seq__33932_34471 = G__34516;
chunk__33934_34472 = G__34517;
count__33935_34473 = G__34518;
i__33936_34474 = G__34519;
continue;
} else {
var child_34521 = cljs.core.first(seq__33932_34514__$1);
if(cljs.core.truth_(child_34521)){
node.appendChild(child_34521);


var G__34522 = cljs.core.next(seq__33932_34514__$1);
var G__34523 = null;
var G__34524 = (0);
var G__34525 = (0);
seq__33932_34471 = G__34522;
chunk__33934_34472 = G__34523;
count__33935_34473 = G__34524;
i__33936_34474 = G__34525;
continue;
} else {
var G__34526 = cljs.core.next(seq__33932_34514__$1);
var G__34527 = null;
var G__34528 = (0);
var G__34529 = (0);
seq__33932_34471 = G__34526;
chunk__33934_34472 = G__34527;
count__33935_34473 = G__34528;
i__33936_34474 = G__34529;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34469);
}
}


var G__34531 = cljs.core.next(seq__33866_34461__$1);
var G__34532 = null;
var G__34533 = (0);
var G__34534 = (0);
seq__33866_34390 = G__34531;
chunk__33868_34391 = G__34532;
count__33869_34392 = G__34533;
i__33870_34393 = G__34534;
continue;
} else {
var G__34535 = cljs.core.next(seq__33866_34461__$1);
var G__34536 = null;
var G__34537 = (0);
var G__34538 = (0);
seq__33866_34390 = G__34535;
chunk__33868_34391 = G__34536;
count__33869_34392 = G__34537;
i__33870_34393 = G__34538;
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
var len__4736__auto___34539 = arguments.length;
var i__4737__auto___34540 = (0);
while(true){
if((i__4737__auto___34540 < len__4736__auto___34539)){
args__4742__auto__.push((arguments[i__4737__auto___34540]));

var G__34541 = (i__4737__auto___34540 + (1));
i__4737__auto___34540 = G__34541;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33973){
var G__33974 = cljs.core.first(seq33973);
var seq33973__$1 = cljs.core.next(seq33973);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33974,seq33973__$1);
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
var G__33977 = arguments.length;
switch (G__33977) {
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
var c__31034__auto___34543 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31035__auto__ = (function (){var switch__30866__auto__ = (function (state_33988){
var state_val_33989 = (state_33988[(1)]);
if((state_val_33989 === (1))){
var state_33988__$1 = state_33988;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33988__$1,(2),once_or_cleanup);
} else {
if((state_val_33989 === (2))){
var inst_33985 = (state_33988[(2)]);
var inst_33986 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33988__$1 = (function (){var statearr_33997 = state_33988;
(statearr_33997[(7)] = inst_33985);

return statearr_33997;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33988__$1,inst_33986);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30867__auto__ = null;
var shadow$dom$state_machine__30867__auto____0 = (function (){
var statearr_34001 = [null,null,null,null,null,null,null,null];
(statearr_34001[(0)] = shadow$dom$state_machine__30867__auto__);

(statearr_34001[(1)] = (1));

return statearr_34001;
});
var shadow$dom$state_machine__30867__auto____1 = (function (state_33988){
while(true){
var ret_value__30868__auto__ = (function (){try{while(true){
var result__30869__auto__ = switch__30866__auto__(state_33988);
if(cljs.core.keyword_identical_QMARK_(result__30869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30869__auto__;
}
break;
}
}catch (e34003){var ex__30870__auto__ = e34003;
var statearr_34004_34544 = state_33988;
(statearr_34004_34544[(2)] = ex__30870__auto__);


if(cljs.core.seq((state_33988[(4)]))){
var statearr_34005_34545 = state_33988;
(statearr_34005_34545[(1)] = cljs.core.first((state_33988[(4)])));

} else {
throw ex__30870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34563 = state_33988;
state_33988 = G__34563;
continue;
} else {
return ret_value__30868__auto__;
}
break;
}
});
shadow$dom$state_machine__30867__auto__ = function(state_33988){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30867__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30867__auto____1.call(this,state_33988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30867__auto____0;
shadow$dom$state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30867__auto____1;
return shadow$dom$state_machine__30867__auto__;
})()
})();
var state__31036__auto__ = (function (){var statearr_34008 = f__31035__auto__();
(statearr_34008[(6)] = c__31034__auto___34543);

return statearr_34008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31036__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
