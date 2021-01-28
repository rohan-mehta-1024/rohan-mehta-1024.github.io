goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34034 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_34034(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34035 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_34035(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33260 = coll;
var G__33261 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33260,G__33261) : shadow.dom.lazy_native_coll_seq.call(null,G__33260,G__33261));
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
var G__33274 = arguments.length;
switch (G__33274) {
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
var G__33278 = arguments.length;
switch (G__33278) {
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
var G__33286 = arguments.length;
switch (G__33286) {
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
var G__33289 = arguments.length;
switch (G__33289) {
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
var G__33291 = arguments.length;
switch (G__33291) {
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
}catch (e33294){if((e33294 instanceof Object)){
var e = e33294;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33294;

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
var seq__33301 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33302 = null;
var count__33303 = (0);
var i__33304 = (0);
while(true){
if((i__33304 < count__33303)){
var el = chunk__33302.cljs$core$IIndexed$_nth$arity$2(null,i__33304);
var handler_34064__$1 = ((function (seq__33301,chunk__33302,count__33303,i__33304,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33301,chunk__33302,count__33303,i__33304,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34064__$1);


var G__34065 = seq__33301;
var G__34066 = chunk__33302;
var G__34067 = count__33303;
var G__34068 = (i__33304 + (1));
seq__33301 = G__34065;
chunk__33302 = G__34066;
count__33303 = G__34067;
i__33304 = G__34068;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33301);
if(temp__5735__auto__){
var seq__33301__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33301__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33301__$1);
var G__34070 = cljs.core.chunk_rest(seq__33301__$1);
var G__34071 = c__4556__auto__;
var G__34072 = cljs.core.count(c__4556__auto__);
var G__34073 = (0);
seq__33301 = G__34070;
chunk__33302 = G__34071;
count__33303 = G__34072;
i__33304 = G__34073;
continue;
} else {
var el = cljs.core.first(seq__33301__$1);
var handler_34074__$1 = ((function (seq__33301,chunk__33302,count__33303,i__33304,el,seq__33301__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33301,chunk__33302,count__33303,i__33304,el,seq__33301__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34074__$1);


var G__34075 = cljs.core.next(seq__33301__$1);
var G__34076 = null;
var G__34077 = (0);
var G__34078 = (0);
seq__33301 = G__34075;
chunk__33302 = G__34076;
count__33303 = G__34077;
i__33304 = G__34078;
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
var G__33317 = arguments.length;
switch (G__33317) {
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
var seq__33322 = cljs.core.seq(events);
var chunk__33323 = null;
var count__33324 = (0);
var i__33325 = (0);
while(true){
if((i__33325 < count__33324)){
var vec__33335 = chunk__33323.cljs$core$IIndexed$_nth$arity$2(null,i__33325);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33335,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33335,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34099 = seq__33322;
var G__34100 = chunk__33323;
var G__34101 = count__33324;
var G__34102 = (i__33325 + (1));
seq__33322 = G__34099;
chunk__33323 = G__34100;
count__33324 = G__34101;
i__33325 = G__34102;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33322);
if(temp__5735__auto__){
var seq__33322__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33322__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33322__$1);
var G__34103 = cljs.core.chunk_rest(seq__33322__$1);
var G__34104 = c__4556__auto__;
var G__34105 = cljs.core.count(c__4556__auto__);
var G__34106 = (0);
seq__33322 = G__34103;
chunk__33323 = G__34104;
count__33324 = G__34105;
i__33325 = G__34106;
continue;
} else {
var vec__33338 = cljs.core.first(seq__33322__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33338,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33338,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34107 = cljs.core.next(seq__33322__$1);
var G__34108 = null;
var G__34109 = (0);
var G__34110 = (0);
seq__33322 = G__34107;
chunk__33323 = G__34108;
count__33324 = G__34109;
i__33325 = G__34110;
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
var seq__33341 = cljs.core.seq(styles);
var chunk__33342 = null;
var count__33343 = (0);
var i__33344 = (0);
while(true){
if((i__33344 < count__33343)){
var vec__33352 = chunk__33342.cljs$core$IIndexed$_nth$arity$2(null,i__33344);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33352,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33352,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34114 = seq__33341;
var G__34115 = chunk__33342;
var G__34116 = count__33343;
var G__34117 = (i__33344 + (1));
seq__33341 = G__34114;
chunk__33342 = G__34115;
count__33343 = G__34116;
i__33344 = G__34117;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33341);
if(temp__5735__auto__){
var seq__33341__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33341__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33341__$1);
var G__34119 = cljs.core.chunk_rest(seq__33341__$1);
var G__34120 = c__4556__auto__;
var G__34121 = cljs.core.count(c__4556__auto__);
var G__34122 = (0);
seq__33341 = G__34119;
chunk__33342 = G__34120;
count__33343 = G__34121;
i__33344 = G__34122;
continue;
} else {
var vec__33355 = cljs.core.first(seq__33341__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33355,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33355,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34123 = cljs.core.next(seq__33341__$1);
var G__34124 = null;
var G__34125 = (0);
var G__34126 = (0);
seq__33341 = G__34123;
chunk__33342 = G__34124;
count__33343 = G__34125;
i__33344 = G__34126;
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
var G__33359_34127 = key;
var G__33359_34128__$1 = (((G__33359_34127 instanceof cljs.core.Keyword))?G__33359_34127.fqn:null);
switch (G__33359_34128__$1) {
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
var ks_34135 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_34135,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_34135,"aria-");
}
})())){
el.setAttribute(ks_34135,value);
} else {
(el[ks_34135] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33376){
var map__33378 = p__33376;
var map__33378__$1 = (((((!((map__33378 == null))))?(((((map__33378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33378):map__33378);
var props = map__33378__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33378__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33382 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33382,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33382,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33382,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33385 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33385,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33385;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33401){
var vec__33403 = p__33401;
var seq__33404 = cljs.core.seq(vec__33403);
var first__33405 = cljs.core.first(seq__33404);
var seq__33404__$1 = cljs.core.next(seq__33404);
var nn = first__33405;
var first__33405__$1 = cljs.core.first(seq__33404__$1);
var seq__33404__$2 = cljs.core.next(seq__33404__$1);
var np = first__33405__$1;
var nc = seq__33404__$2;
var node = vec__33403;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33407 = nn;
var G__33408 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33407,G__33408) : create_fn.call(null,G__33407,G__33408));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33411 = nn;
var G__33412 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33411,G__33412) : create_fn.call(null,G__33411,G__33412));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33419 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33419,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33419,(1),null);
var seq__33422_34141 = cljs.core.seq(node_children);
var chunk__33423_34142 = null;
var count__33424_34143 = (0);
var i__33425_34144 = (0);
while(true){
if((i__33425_34144 < count__33424_34143)){
var child_struct_34146 = chunk__33423_34142.cljs$core$IIndexed$_nth$arity$2(null,i__33425_34144);
var children_34148 = shadow.dom.dom_node(child_struct_34146);
if(cljs.core.seq_QMARK_(children_34148)){
var seq__33463_34151 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34148));
var chunk__33465_34152 = null;
var count__33466_34153 = (0);
var i__33467_34154 = (0);
while(true){
if((i__33467_34154 < count__33466_34153)){
var child_34155 = chunk__33465_34152.cljs$core$IIndexed$_nth$arity$2(null,i__33467_34154);
if(cljs.core.truth_(child_34155)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34155);


var G__34157 = seq__33463_34151;
var G__34158 = chunk__33465_34152;
var G__34159 = count__33466_34153;
var G__34160 = (i__33467_34154 + (1));
seq__33463_34151 = G__34157;
chunk__33465_34152 = G__34158;
count__33466_34153 = G__34159;
i__33467_34154 = G__34160;
continue;
} else {
var G__34161 = seq__33463_34151;
var G__34162 = chunk__33465_34152;
var G__34163 = count__33466_34153;
var G__34164 = (i__33467_34154 + (1));
seq__33463_34151 = G__34161;
chunk__33465_34152 = G__34162;
count__33466_34153 = G__34163;
i__33467_34154 = G__34164;
continue;
}
} else {
var temp__5735__auto___34166 = cljs.core.seq(seq__33463_34151);
if(temp__5735__auto___34166){
var seq__33463_34167__$1 = temp__5735__auto___34166;
if(cljs.core.chunked_seq_QMARK_(seq__33463_34167__$1)){
var c__4556__auto___34169 = cljs.core.chunk_first(seq__33463_34167__$1);
var G__34170 = cljs.core.chunk_rest(seq__33463_34167__$1);
var G__34171 = c__4556__auto___34169;
var G__34172 = cljs.core.count(c__4556__auto___34169);
var G__34173 = (0);
seq__33463_34151 = G__34170;
chunk__33465_34152 = G__34171;
count__33466_34153 = G__34172;
i__33467_34154 = G__34173;
continue;
} else {
var child_34174 = cljs.core.first(seq__33463_34167__$1);
if(cljs.core.truth_(child_34174)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34174);


var G__34177 = cljs.core.next(seq__33463_34167__$1);
var G__34178 = null;
var G__34179 = (0);
var G__34180 = (0);
seq__33463_34151 = G__34177;
chunk__33465_34152 = G__34178;
count__33466_34153 = G__34179;
i__33467_34154 = G__34180;
continue;
} else {
var G__34181 = cljs.core.next(seq__33463_34167__$1);
var G__34182 = null;
var G__34183 = (0);
var G__34184 = (0);
seq__33463_34151 = G__34181;
chunk__33465_34152 = G__34182;
count__33466_34153 = G__34183;
i__33467_34154 = G__34184;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34148);
}


var G__34185 = seq__33422_34141;
var G__34186 = chunk__33423_34142;
var G__34187 = count__33424_34143;
var G__34188 = (i__33425_34144 + (1));
seq__33422_34141 = G__34185;
chunk__33423_34142 = G__34186;
count__33424_34143 = G__34187;
i__33425_34144 = G__34188;
continue;
} else {
var temp__5735__auto___34190 = cljs.core.seq(seq__33422_34141);
if(temp__5735__auto___34190){
var seq__33422_34191__$1 = temp__5735__auto___34190;
if(cljs.core.chunked_seq_QMARK_(seq__33422_34191__$1)){
var c__4556__auto___34192 = cljs.core.chunk_first(seq__33422_34191__$1);
var G__34193 = cljs.core.chunk_rest(seq__33422_34191__$1);
var G__34194 = c__4556__auto___34192;
var G__34195 = cljs.core.count(c__4556__auto___34192);
var G__34196 = (0);
seq__33422_34141 = G__34193;
chunk__33423_34142 = G__34194;
count__33424_34143 = G__34195;
i__33425_34144 = G__34196;
continue;
} else {
var child_struct_34198 = cljs.core.first(seq__33422_34191__$1);
var children_34200 = shadow.dom.dom_node(child_struct_34198);
if(cljs.core.seq_QMARK_(children_34200)){
var seq__33490_34202 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34200));
var chunk__33492_34203 = null;
var count__33493_34204 = (0);
var i__33494_34205 = (0);
while(true){
if((i__33494_34205 < count__33493_34204)){
var child_34206 = chunk__33492_34203.cljs$core$IIndexed$_nth$arity$2(null,i__33494_34205);
if(cljs.core.truth_(child_34206)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34206);


var G__34208 = seq__33490_34202;
var G__34209 = chunk__33492_34203;
var G__34210 = count__33493_34204;
var G__34211 = (i__33494_34205 + (1));
seq__33490_34202 = G__34208;
chunk__33492_34203 = G__34209;
count__33493_34204 = G__34210;
i__33494_34205 = G__34211;
continue;
} else {
var G__34212 = seq__33490_34202;
var G__34213 = chunk__33492_34203;
var G__34214 = count__33493_34204;
var G__34215 = (i__33494_34205 + (1));
seq__33490_34202 = G__34212;
chunk__33492_34203 = G__34213;
count__33493_34204 = G__34214;
i__33494_34205 = G__34215;
continue;
}
} else {
var temp__5735__auto___34216__$1 = cljs.core.seq(seq__33490_34202);
if(temp__5735__auto___34216__$1){
var seq__33490_34217__$1 = temp__5735__auto___34216__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33490_34217__$1)){
var c__4556__auto___34219 = cljs.core.chunk_first(seq__33490_34217__$1);
var G__34220 = cljs.core.chunk_rest(seq__33490_34217__$1);
var G__34221 = c__4556__auto___34219;
var G__34222 = cljs.core.count(c__4556__auto___34219);
var G__34223 = (0);
seq__33490_34202 = G__34220;
chunk__33492_34203 = G__34221;
count__33493_34204 = G__34222;
i__33494_34205 = G__34223;
continue;
} else {
var child_34224 = cljs.core.first(seq__33490_34217__$1);
if(cljs.core.truth_(child_34224)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34224);


var G__34225 = cljs.core.next(seq__33490_34217__$1);
var G__34226 = null;
var G__34227 = (0);
var G__34228 = (0);
seq__33490_34202 = G__34225;
chunk__33492_34203 = G__34226;
count__33493_34204 = G__34227;
i__33494_34205 = G__34228;
continue;
} else {
var G__34229 = cljs.core.next(seq__33490_34217__$1);
var G__34230 = null;
var G__34231 = (0);
var G__34232 = (0);
seq__33490_34202 = G__34229;
chunk__33492_34203 = G__34230;
count__33493_34204 = G__34231;
i__33494_34205 = G__34232;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34200);
}


var G__34233 = cljs.core.next(seq__33422_34191__$1);
var G__34234 = null;
var G__34235 = (0);
var G__34236 = (0);
seq__33422_34141 = G__34233;
chunk__33423_34142 = G__34234;
count__33424_34143 = G__34235;
i__33425_34144 = G__34236;
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
var seq__33527 = cljs.core.seq(node);
var chunk__33528 = null;
var count__33529 = (0);
var i__33530 = (0);
while(true){
if((i__33530 < count__33529)){
var n = chunk__33528.cljs$core$IIndexed$_nth$arity$2(null,i__33530);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34237 = seq__33527;
var G__34238 = chunk__33528;
var G__34239 = count__33529;
var G__34240 = (i__33530 + (1));
seq__33527 = G__34237;
chunk__33528 = G__34238;
count__33529 = G__34239;
i__33530 = G__34240;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33527);
if(temp__5735__auto__){
var seq__33527__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33527__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33527__$1);
var G__34242 = cljs.core.chunk_rest(seq__33527__$1);
var G__34243 = c__4556__auto__;
var G__34244 = cljs.core.count(c__4556__auto__);
var G__34245 = (0);
seq__33527 = G__34242;
chunk__33528 = G__34243;
count__33529 = G__34244;
i__33530 = G__34245;
continue;
} else {
var n = cljs.core.first(seq__33527__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34246 = cljs.core.next(seq__33527__$1);
var G__34247 = null;
var G__34248 = (0);
var G__34249 = (0);
seq__33527 = G__34246;
chunk__33528 = G__34247;
count__33529 = G__34248;
i__33530 = G__34249;
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
var G__33536 = arguments.length;
switch (G__33536) {
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
var G__33538 = arguments.length;
switch (G__33538) {
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
var G__33550 = arguments.length;
switch (G__33550) {
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
var len__4736__auto___34256 = arguments.length;
var i__4737__auto___34257 = (0);
while(true){
if((i__4737__auto___34257 < len__4736__auto___34256)){
args__4742__auto__.push((arguments[i__4737__auto___34257]));

var G__34258 = (i__4737__auto___34257 + (1));
i__4737__auto___34257 = G__34258;
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
var seq__33571_34259 = cljs.core.seq(nodes);
var chunk__33572_34260 = null;
var count__33573_34261 = (0);
var i__33574_34262 = (0);
while(true){
if((i__33574_34262 < count__33573_34261)){
var node_34270 = chunk__33572_34260.cljs$core$IIndexed$_nth$arity$2(null,i__33574_34262);
fragment.appendChild(shadow.dom._to_dom(node_34270));


var G__34271 = seq__33571_34259;
var G__34272 = chunk__33572_34260;
var G__34273 = count__33573_34261;
var G__34274 = (i__33574_34262 + (1));
seq__33571_34259 = G__34271;
chunk__33572_34260 = G__34272;
count__33573_34261 = G__34273;
i__33574_34262 = G__34274;
continue;
} else {
var temp__5735__auto___34275 = cljs.core.seq(seq__33571_34259);
if(temp__5735__auto___34275){
var seq__33571_34276__$1 = temp__5735__auto___34275;
if(cljs.core.chunked_seq_QMARK_(seq__33571_34276__$1)){
var c__4556__auto___34277 = cljs.core.chunk_first(seq__33571_34276__$1);
var G__34278 = cljs.core.chunk_rest(seq__33571_34276__$1);
var G__34279 = c__4556__auto___34277;
var G__34280 = cljs.core.count(c__4556__auto___34277);
var G__34281 = (0);
seq__33571_34259 = G__34278;
chunk__33572_34260 = G__34279;
count__33573_34261 = G__34280;
i__33574_34262 = G__34281;
continue;
} else {
var node_34282 = cljs.core.first(seq__33571_34276__$1);
fragment.appendChild(shadow.dom._to_dom(node_34282));


var G__34283 = cljs.core.next(seq__33571_34276__$1);
var G__34284 = null;
var G__34285 = (0);
var G__34286 = (0);
seq__33571_34259 = G__34283;
chunk__33572_34260 = G__34284;
count__33573_34261 = G__34285;
i__33574_34262 = G__34286;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33566){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33566));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33589_34287 = cljs.core.seq(scripts);
var chunk__33590_34288 = null;
var count__33591_34289 = (0);
var i__33592_34290 = (0);
while(true){
if((i__33592_34290 < count__33591_34289)){
var vec__33599_34291 = chunk__33590_34288.cljs$core$IIndexed$_nth$arity$2(null,i__33592_34290);
var script_tag_34292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33599_34291,(0),null);
var script_body_34293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33599_34291,(1),null);
eval(script_body_34293);


var G__34294 = seq__33589_34287;
var G__34295 = chunk__33590_34288;
var G__34296 = count__33591_34289;
var G__34297 = (i__33592_34290 + (1));
seq__33589_34287 = G__34294;
chunk__33590_34288 = G__34295;
count__33591_34289 = G__34296;
i__33592_34290 = G__34297;
continue;
} else {
var temp__5735__auto___34298 = cljs.core.seq(seq__33589_34287);
if(temp__5735__auto___34298){
var seq__33589_34299__$1 = temp__5735__auto___34298;
if(cljs.core.chunked_seq_QMARK_(seq__33589_34299__$1)){
var c__4556__auto___34300 = cljs.core.chunk_first(seq__33589_34299__$1);
var G__34302 = cljs.core.chunk_rest(seq__33589_34299__$1);
var G__34303 = c__4556__auto___34300;
var G__34304 = cljs.core.count(c__4556__auto___34300);
var G__34305 = (0);
seq__33589_34287 = G__34302;
chunk__33590_34288 = G__34303;
count__33591_34289 = G__34304;
i__33592_34290 = G__34305;
continue;
} else {
var vec__33602_34308 = cljs.core.first(seq__33589_34299__$1);
var script_tag_34309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33602_34308,(0),null);
var script_body_34310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33602_34308,(1),null);
eval(script_body_34310);


var G__34311 = cljs.core.next(seq__33589_34299__$1);
var G__34312 = null;
var G__34313 = (0);
var G__34314 = (0);
seq__33589_34287 = G__34311;
chunk__33590_34288 = G__34312;
count__33591_34289 = G__34313;
i__33592_34290 = G__34314;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33614){
var vec__33615 = p__33614;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33615,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33615,(1),null);
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
var G__33626 = arguments.length;
switch (G__33626) {
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
var seq__33634 = cljs.core.seq(style_keys);
var chunk__33635 = null;
var count__33636 = (0);
var i__33637 = (0);
while(true){
if((i__33637 < count__33636)){
var it = chunk__33635.cljs$core$IIndexed$_nth$arity$2(null,i__33637);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34334 = seq__33634;
var G__34335 = chunk__33635;
var G__34336 = count__33636;
var G__34337 = (i__33637 + (1));
seq__33634 = G__34334;
chunk__33635 = G__34335;
count__33636 = G__34336;
i__33637 = G__34337;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33634);
if(temp__5735__auto__){
var seq__33634__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33634__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33634__$1);
var G__34338 = cljs.core.chunk_rest(seq__33634__$1);
var G__34339 = c__4556__auto__;
var G__34340 = cljs.core.count(c__4556__auto__);
var G__34341 = (0);
seq__33634 = G__34338;
chunk__33635 = G__34339;
count__33636 = G__34340;
i__33637 = G__34341;
continue;
} else {
var it = cljs.core.first(seq__33634__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34342 = cljs.core.next(seq__33634__$1);
var G__34343 = null;
var G__34344 = (0);
var G__34345 = (0);
seq__33634 = G__34342;
chunk__33635 = G__34343;
count__33636 = G__34344;
i__33637 = G__34345;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33641,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33646 = k33641;
var G__33646__$1 = (((G__33646 instanceof cljs.core.Keyword))?G__33646.fqn:null);
switch (G__33646__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33641,else__4383__auto__);

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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33640){
var self__ = this;
var G__33640__$1 = this;
return (new cljs.core.RecordIter((0),G__33640__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33642,other33643){
var self__ = this;
var this33642__$1 = this;
return (((!((other33643 == null)))) && ((this33642__$1.constructor === other33643.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33642__$1.x,other33643.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33642__$1.y,other33643.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33642__$1.__extmap,other33643.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33640){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33693 = cljs.core.keyword_identical_QMARK_;
var expr__33694 = k__4388__auto__;
if(cljs.core.truth_((pred__33693.cljs$core$IFn$_invoke$arity$2 ? pred__33693.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33694) : pred__33693.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33694)))){
return (new shadow.dom.Coordinate(G__33640,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33693.cljs$core$IFn$_invoke$arity$2 ? pred__33693.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33694) : pred__33693.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33694)))){
return (new shadow.dom.Coordinate(self__.x,G__33640,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33640),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33640){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33640,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33644){
var extmap__4419__auto__ = (function (){var G__33706 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33644,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33644)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33706);
} else {
return G__33706;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33644),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33644),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33714,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33747 = k33714;
var G__33747__$1 = (((G__33747 instanceof cljs.core.Keyword))?G__33747.fqn:null);
switch (G__33747__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33714,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33749){
var vec__33750 = p__33749;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33750,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33750,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33713){
var self__ = this;
var G__33713__$1 = this;
return (new cljs.core.RecordIter((0),G__33713__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33715,other33716){
var self__ = this;
var this33715__$1 = this;
return (((!((other33716 == null)))) && ((this33715__$1.constructor === other33716.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33715__$1.w,other33716.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33715__$1.h,other33716.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33715__$1.__extmap,other33716.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33713){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33759 = cljs.core.keyword_identical_QMARK_;
var expr__33760 = k__4388__auto__;
if(cljs.core.truth_((pred__33759.cljs$core$IFn$_invoke$arity$2 ? pred__33759.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33760) : pred__33759.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33760)))){
return (new shadow.dom.Size(G__33713,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33759.cljs$core$IFn$_invoke$arity$2 ? pred__33759.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33760) : pred__33759.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33760)))){
return (new shadow.dom.Size(self__.w,G__33713,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33713),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33713){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33713,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33719){
var extmap__4419__auto__ = (function (){var G__33772 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33719,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33719)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33772);
} else {
return G__33772;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33719),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33719),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__34383 = (i + (1));
var G__34384 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34383;
ret = G__34384;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33781){
var vec__33782 = p__33781;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33782,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33782,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33786 = arguments.length;
switch (G__33786) {
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
var G__34397 = ps;
var G__34398 = (i + (1));
el__$1 = G__34397;
i = G__34398;
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
var vec__33848 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33848,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33848,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33848,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33853_34418 = cljs.core.seq(props);
var chunk__33854_34419 = null;
var count__33855_34420 = (0);
var i__33856_34421 = (0);
while(true){
if((i__33856_34421 < count__33855_34420)){
var vec__33872_34422 = chunk__33854_34419.cljs$core$IIndexed$_nth$arity$2(null,i__33856_34421);
var k_34423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33872_34422,(0),null);
var v_34424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33872_34422,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34423);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34423),v_34424);


var G__34425 = seq__33853_34418;
var G__34426 = chunk__33854_34419;
var G__34427 = count__33855_34420;
var G__34428 = (i__33856_34421 + (1));
seq__33853_34418 = G__34425;
chunk__33854_34419 = G__34426;
count__33855_34420 = G__34427;
i__33856_34421 = G__34428;
continue;
} else {
var temp__5735__auto___34430 = cljs.core.seq(seq__33853_34418);
if(temp__5735__auto___34430){
var seq__33853_34431__$1 = temp__5735__auto___34430;
if(cljs.core.chunked_seq_QMARK_(seq__33853_34431__$1)){
var c__4556__auto___34432 = cljs.core.chunk_first(seq__33853_34431__$1);
var G__34433 = cljs.core.chunk_rest(seq__33853_34431__$1);
var G__34434 = c__4556__auto___34432;
var G__34435 = cljs.core.count(c__4556__auto___34432);
var G__34436 = (0);
seq__33853_34418 = G__34433;
chunk__33854_34419 = G__34434;
count__33855_34420 = G__34435;
i__33856_34421 = G__34436;
continue;
} else {
var vec__33877_34437 = cljs.core.first(seq__33853_34431__$1);
var k_34438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33877_34437,(0),null);
var v_34439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33877_34437,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34438);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34438),v_34439);


var G__34440 = cljs.core.next(seq__33853_34431__$1);
var G__34441 = null;
var G__34442 = (0);
var G__34443 = (0);
seq__33853_34418 = G__34440;
chunk__33854_34419 = G__34441;
count__33855_34420 = G__34442;
i__33856_34421 = G__34443;
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
var vec__33881 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33881,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33881,(1),null);
var seq__33884_34447 = cljs.core.seq(node_children);
var chunk__33886_34448 = null;
var count__33887_34449 = (0);
var i__33888_34450 = (0);
while(true){
if((i__33888_34450 < count__33887_34449)){
var child_struct_34452 = chunk__33886_34448.cljs$core$IIndexed$_nth$arity$2(null,i__33888_34450);
if((!((child_struct_34452 == null)))){
if(typeof child_struct_34452 === 'string'){
var text_34453 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34453),child_struct_34452].join(''));
} else {
var children_34454 = shadow.dom.svg_node(child_struct_34452);
if(cljs.core.seq_QMARK_(children_34454)){
var seq__33958_34455 = cljs.core.seq(children_34454);
var chunk__33960_34456 = null;
var count__33961_34457 = (0);
var i__33962_34458 = (0);
while(true){
if((i__33962_34458 < count__33961_34457)){
var child_34459 = chunk__33960_34456.cljs$core$IIndexed$_nth$arity$2(null,i__33962_34458);
if(cljs.core.truth_(child_34459)){
node.appendChild(child_34459);


var G__34460 = seq__33958_34455;
var G__34461 = chunk__33960_34456;
var G__34462 = count__33961_34457;
var G__34463 = (i__33962_34458 + (1));
seq__33958_34455 = G__34460;
chunk__33960_34456 = G__34461;
count__33961_34457 = G__34462;
i__33962_34458 = G__34463;
continue;
} else {
var G__34464 = seq__33958_34455;
var G__34465 = chunk__33960_34456;
var G__34466 = count__33961_34457;
var G__34467 = (i__33962_34458 + (1));
seq__33958_34455 = G__34464;
chunk__33960_34456 = G__34465;
count__33961_34457 = G__34466;
i__33962_34458 = G__34467;
continue;
}
} else {
var temp__5735__auto___34468 = cljs.core.seq(seq__33958_34455);
if(temp__5735__auto___34468){
var seq__33958_34469__$1 = temp__5735__auto___34468;
if(cljs.core.chunked_seq_QMARK_(seq__33958_34469__$1)){
var c__4556__auto___34486 = cljs.core.chunk_first(seq__33958_34469__$1);
var G__34487 = cljs.core.chunk_rest(seq__33958_34469__$1);
var G__34488 = c__4556__auto___34486;
var G__34489 = cljs.core.count(c__4556__auto___34486);
var G__34490 = (0);
seq__33958_34455 = G__34487;
chunk__33960_34456 = G__34488;
count__33961_34457 = G__34489;
i__33962_34458 = G__34490;
continue;
} else {
var child_34491 = cljs.core.first(seq__33958_34469__$1);
if(cljs.core.truth_(child_34491)){
node.appendChild(child_34491);


var G__34494 = cljs.core.next(seq__33958_34469__$1);
var G__34495 = null;
var G__34496 = (0);
var G__34497 = (0);
seq__33958_34455 = G__34494;
chunk__33960_34456 = G__34495;
count__33961_34457 = G__34496;
i__33962_34458 = G__34497;
continue;
} else {
var G__34499 = cljs.core.next(seq__33958_34469__$1);
var G__34500 = null;
var G__34501 = (0);
var G__34502 = (0);
seq__33958_34455 = G__34499;
chunk__33960_34456 = G__34500;
count__33961_34457 = G__34501;
i__33962_34458 = G__34502;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34454);
}
}


var G__34504 = seq__33884_34447;
var G__34505 = chunk__33886_34448;
var G__34506 = count__33887_34449;
var G__34507 = (i__33888_34450 + (1));
seq__33884_34447 = G__34504;
chunk__33886_34448 = G__34505;
count__33887_34449 = G__34506;
i__33888_34450 = G__34507;
continue;
} else {
var G__34508 = seq__33884_34447;
var G__34509 = chunk__33886_34448;
var G__34510 = count__33887_34449;
var G__34511 = (i__33888_34450 + (1));
seq__33884_34447 = G__34508;
chunk__33886_34448 = G__34509;
count__33887_34449 = G__34510;
i__33888_34450 = G__34511;
continue;
}
} else {
var temp__5735__auto___34514 = cljs.core.seq(seq__33884_34447);
if(temp__5735__auto___34514){
var seq__33884_34515__$1 = temp__5735__auto___34514;
if(cljs.core.chunked_seq_QMARK_(seq__33884_34515__$1)){
var c__4556__auto___34516 = cljs.core.chunk_first(seq__33884_34515__$1);
var G__34519 = cljs.core.chunk_rest(seq__33884_34515__$1);
var G__34520 = c__4556__auto___34516;
var G__34521 = cljs.core.count(c__4556__auto___34516);
var G__34522 = (0);
seq__33884_34447 = G__34519;
chunk__33886_34448 = G__34520;
count__33887_34449 = G__34521;
i__33888_34450 = G__34522;
continue;
} else {
var child_struct_34523 = cljs.core.first(seq__33884_34515__$1);
if((!((child_struct_34523 == null)))){
if(typeof child_struct_34523 === 'string'){
var text_34525 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34525),child_struct_34523].join(''));
} else {
var children_34526 = shadow.dom.svg_node(child_struct_34523);
if(cljs.core.seq_QMARK_(children_34526)){
var seq__33978_34527 = cljs.core.seq(children_34526);
var chunk__33980_34528 = null;
var count__33981_34529 = (0);
var i__33982_34530 = (0);
while(true){
if((i__33982_34530 < count__33981_34529)){
var child_34531 = chunk__33980_34528.cljs$core$IIndexed$_nth$arity$2(null,i__33982_34530);
if(cljs.core.truth_(child_34531)){
node.appendChild(child_34531);


var G__34532 = seq__33978_34527;
var G__34533 = chunk__33980_34528;
var G__34534 = count__33981_34529;
var G__34535 = (i__33982_34530 + (1));
seq__33978_34527 = G__34532;
chunk__33980_34528 = G__34533;
count__33981_34529 = G__34534;
i__33982_34530 = G__34535;
continue;
} else {
var G__34536 = seq__33978_34527;
var G__34537 = chunk__33980_34528;
var G__34538 = count__33981_34529;
var G__34539 = (i__33982_34530 + (1));
seq__33978_34527 = G__34536;
chunk__33980_34528 = G__34537;
count__33981_34529 = G__34538;
i__33982_34530 = G__34539;
continue;
}
} else {
var temp__5735__auto___34540__$1 = cljs.core.seq(seq__33978_34527);
if(temp__5735__auto___34540__$1){
var seq__33978_34541__$1 = temp__5735__auto___34540__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33978_34541__$1)){
var c__4556__auto___34542 = cljs.core.chunk_first(seq__33978_34541__$1);
var G__34543 = cljs.core.chunk_rest(seq__33978_34541__$1);
var G__34544 = c__4556__auto___34542;
var G__34545 = cljs.core.count(c__4556__auto___34542);
var G__34546 = (0);
seq__33978_34527 = G__34543;
chunk__33980_34528 = G__34544;
count__33981_34529 = G__34545;
i__33982_34530 = G__34546;
continue;
} else {
var child_34547 = cljs.core.first(seq__33978_34541__$1);
if(cljs.core.truth_(child_34547)){
node.appendChild(child_34547);


var G__34548 = cljs.core.next(seq__33978_34541__$1);
var G__34549 = null;
var G__34550 = (0);
var G__34551 = (0);
seq__33978_34527 = G__34548;
chunk__33980_34528 = G__34549;
count__33981_34529 = G__34550;
i__33982_34530 = G__34551;
continue;
} else {
var G__34552 = cljs.core.next(seq__33978_34541__$1);
var G__34553 = null;
var G__34554 = (0);
var G__34555 = (0);
seq__33978_34527 = G__34552;
chunk__33980_34528 = G__34553;
count__33981_34529 = G__34554;
i__33982_34530 = G__34555;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34526);
}
}


var G__34556 = cljs.core.next(seq__33884_34515__$1);
var G__34557 = null;
var G__34558 = (0);
var G__34559 = (0);
seq__33884_34447 = G__34556;
chunk__33886_34448 = G__34557;
count__33887_34449 = G__34558;
i__33888_34450 = G__34559;
continue;
} else {
var G__34560 = cljs.core.next(seq__33884_34515__$1);
var G__34561 = null;
var G__34562 = (0);
var G__34563 = (0);
seq__33884_34447 = G__34560;
chunk__33886_34448 = G__34561;
count__33887_34449 = G__34562;
i__33888_34450 = G__34563;
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
var len__4736__auto___34574 = arguments.length;
var i__4737__auto___34575 = (0);
while(true){
if((i__4737__auto___34575 < len__4736__auto___34574)){
args__4742__auto__.push((arguments[i__4737__auto___34575]));

var G__34576 = (i__4737__auto___34575 + (1));
i__4737__auto___34575 = G__34576;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33993){
var G__33994 = cljs.core.first(seq33993);
var seq33993__$1 = cljs.core.next(seq33993);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33994,seq33993__$1);
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
var G__34004 = arguments.length;
switch (G__34004) {
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
var c__30876__auto___34578 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30877__auto__ = (function (){var switch__30692__auto__ = (function (state_34011){
var state_val_34012 = (state_34011[(1)]);
if((state_val_34012 === (1))){
var state_34011__$1 = state_34011;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34011__$1,(2),once_or_cleanup);
} else {
if((state_val_34012 === (2))){
var inst_34008 = (state_34011[(2)]);
var inst_34009 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34011__$1 = (function (){var statearr_34016 = state_34011;
(statearr_34016[(7)] = inst_34008);

return statearr_34016;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34011__$1,inst_34009);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30693__auto__ = null;
var shadow$dom$state_machine__30693__auto____0 = (function (){
var statearr_34018 = [null,null,null,null,null,null,null,null];
(statearr_34018[(0)] = shadow$dom$state_machine__30693__auto__);

(statearr_34018[(1)] = (1));

return statearr_34018;
});
var shadow$dom$state_machine__30693__auto____1 = (function (state_34011){
while(true){
var ret_value__30694__auto__ = (function (){try{while(true){
var result__30695__auto__ = switch__30692__auto__(state_34011);
if(cljs.core.keyword_identical_QMARK_(result__30695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30695__auto__;
}
break;
}
}catch (e34019){var ex__30696__auto__ = e34019;
var statearr_34020_34588 = state_34011;
(statearr_34020_34588[(2)] = ex__30696__auto__);


if(cljs.core.seq((state_34011[(4)]))){
var statearr_34021_34589 = state_34011;
(statearr_34021_34589[(1)] = cljs.core.first((state_34011[(4)])));

} else {
throw ex__30696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34590 = state_34011;
state_34011 = G__34590;
continue;
} else {
return ret_value__30694__auto__;
}
break;
}
});
shadow$dom$state_machine__30693__auto__ = function(state_34011){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30693__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30693__auto____1.call(this,state_34011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30693__auto____0;
shadow$dom$state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30693__auto____1;
return shadow$dom$state_machine__30693__auto__;
})()
})();
var state__30878__auto__ = (function (){var statearr_34023 = f__30877__auto__();
(statearr_34023[(6)] = c__30876__auto___34578);

return statearr_34023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30878__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
