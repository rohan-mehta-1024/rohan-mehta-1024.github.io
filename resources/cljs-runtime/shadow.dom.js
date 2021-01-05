goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33941 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_33941(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33942 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_33942(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33263 = coll;
var G__33264 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33263,G__33264) : shadow.dom.lazy_native_coll_seq.call(null,G__33263,G__33264));
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
var G__33273 = arguments.length;
switch (G__33273) {
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
var G__33275 = arguments.length;
switch (G__33275) {
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
var G__33280 = arguments.length;
switch (G__33280) {
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
var G__33282 = arguments.length;
switch (G__33282) {
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
var G__33292 = arguments.length;
switch (G__33292) {
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
}catch (e33293){if((e33293 instanceof Object)){
var e = e33293;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33293;

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
var seq__33295 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33296 = null;
var count__33297 = (0);
var i__33298 = (0);
while(true){
if((i__33298 < count__33297)){
var el = chunk__33296.cljs$core$IIndexed$_nth$arity$2(null,i__33298);
var handler_34009__$1 = ((function (seq__33295,chunk__33296,count__33297,i__33298,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33295,chunk__33296,count__33297,i__33298,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34009__$1);


var G__34010 = seq__33295;
var G__34011 = chunk__33296;
var G__34012 = count__33297;
var G__34013 = (i__33298 + (1));
seq__33295 = G__34010;
chunk__33296 = G__34011;
count__33297 = G__34012;
i__33298 = G__34013;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33295);
if(temp__5735__auto__){
var seq__33295__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33295__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33295__$1);
var G__34015 = cljs.core.chunk_rest(seq__33295__$1);
var G__34016 = c__4556__auto__;
var G__34017 = cljs.core.count(c__4556__auto__);
var G__34018 = (0);
seq__33295 = G__34015;
chunk__33296 = G__34016;
count__33297 = G__34017;
i__33298 = G__34018;
continue;
} else {
var el = cljs.core.first(seq__33295__$1);
var handler_34020__$1 = ((function (seq__33295,chunk__33296,count__33297,i__33298,el,seq__33295__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33295,chunk__33296,count__33297,i__33298,el,seq__33295__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34020__$1);


var G__34021 = cljs.core.next(seq__33295__$1);
var G__34022 = null;
var G__34023 = (0);
var G__34024 = (0);
seq__33295 = G__34021;
chunk__33296 = G__34022;
count__33297 = G__34023;
i__33298 = G__34024;
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
var G__33303 = arguments.length;
switch (G__33303) {
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
var seq__33304 = cljs.core.seq(events);
var chunk__33305 = null;
var count__33306 = (0);
var i__33307 = (0);
while(true){
if((i__33307 < count__33306)){
var vec__33314 = chunk__33305.cljs$core$IIndexed$_nth$arity$2(null,i__33307);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33314,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33314,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34034 = seq__33304;
var G__34035 = chunk__33305;
var G__34036 = count__33306;
var G__34037 = (i__33307 + (1));
seq__33304 = G__34034;
chunk__33305 = G__34035;
count__33306 = G__34036;
i__33307 = G__34037;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33304);
if(temp__5735__auto__){
var seq__33304__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33304__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33304__$1);
var G__34038 = cljs.core.chunk_rest(seq__33304__$1);
var G__34039 = c__4556__auto__;
var G__34040 = cljs.core.count(c__4556__auto__);
var G__34041 = (0);
seq__33304 = G__34038;
chunk__33305 = G__34039;
count__33306 = G__34040;
i__33307 = G__34041;
continue;
} else {
var vec__33317 = cljs.core.first(seq__33304__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33317,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33317,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34042 = cljs.core.next(seq__33304__$1);
var G__34043 = null;
var G__34044 = (0);
var G__34045 = (0);
seq__33304 = G__34042;
chunk__33305 = G__34043;
count__33306 = G__34044;
i__33307 = G__34045;
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


var G__34047 = seq__33320;
var G__34048 = chunk__33321;
var G__34049 = count__33322;
var G__34050 = (i__33323 + (1));
seq__33320 = G__34047;
chunk__33321 = G__34048;
count__33322 = G__34049;
i__33323 = G__34050;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33320);
if(temp__5735__auto__){
var seq__33320__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33320__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33320__$1);
var G__34056 = cljs.core.chunk_rest(seq__33320__$1);
var G__34057 = c__4556__auto__;
var G__34058 = cljs.core.count(c__4556__auto__);
var G__34059 = (0);
seq__33320 = G__34056;
chunk__33321 = G__34057;
count__33322 = G__34058;
i__33323 = G__34059;
continue;
} else {
var vec__33334 = cljs.core.first(seq__33320__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33334,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33334,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34060 = cljs.core.next(seq__33320__$1);
var G__34061 = null;
var G__34062 = (0);
var G__34063 = (0);
seq__33320 = G__34060;
chunk__33321 = G__34061;
count__33322 = G__34062;
i__33323 = G__34063;
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
var G__33339_34064 = key;
var G__33339_34065__$1 = (((G__33339_34064 instanceof cljs.core.Keyword))?G__33339_34064.fqn:null);
switch (G__33339_34065__$1) {
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
var ks_34067 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_34067,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_34067,"aria-");
}
})())){
el.setAttribute(ks_34067,value);
} else {
(el[ks_34067] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33348){
var map__33349 = p__33348;
var map__33349__$1 = (((((!((map__33349 == null))))?(((((map__33349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33349):map__33349);
var props = map__33349__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33349__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33351 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33351,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33351,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33351,(2),null);
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
var G__33356 = arguments.length;
switch (G__33356) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33357){
var vec__33358 = p__33357;
var seq__33359 = cljs.core.seq(vec__33358);
var first__33360 = cljs.core.first(seq__33359);
var seq__33359__$1 = cljs.core.next(seq__33359);
var nn = first__33360;
var first__33360__$1 = cljs.core.first(seq__33359__$1);
var seq__33359__$2 = cljs.core.next(seq__33359__$1);
var np = first__33360__$1;
var nc = seq__33359__$2;
var node = vec__33358;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33361 = nn;
var G__33362 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33361,G__33362) : create_fn.call(null,G__33361,G__33362));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33363 = nn;
var G__33364 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33363,G__33364) : create_fn.call(null,G__33363,G__33364));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33365 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33365,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33365,(1),null);
var seq__33387_34082 = cljs.core.seq(node_children);
var chunk__33388_34083 = null;
var count__33389_34084 = (0);
var i__33390_34085 = (0);
while(true){
if((i__33390_34085 < count__33389_34084)){
var child_struct_34087 = chunk__33388_34083.cljs$core$IIndexed$_nth$arity$2(null,i__33390_34085);
var children_34089 = shadow.dom.dom_node(child_struct_34087);
if(cljs.core.seq_QMARK_(children_34089)){
var seq__33425_34090 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34089));
var chunk__33427_34091 = null;
var count__33428_34092 = (0);
var i__33429_34093 = (0);
while(true){
if((i__33429_34093 < count__33428_34092)){
var child_34095 = chunk__33427_34091.cljs$core$IIndexed$_nth$arity$2(null,i__33429_34093);
if(cljs.core.truth_(child_34095)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34095);


var G__34096 = seq__33425_34090;
var G__34097 = chunk__33427_34091;
var G__34098 = count__33428_34092;
var G__34099 = (i__33429_34093 + (1));
seq__33425_34090 = G__34096;
chunk__33427_34091 = G__34097;
count__33428_34092 = G__34098;
i__33429_34093 = G__34099;
continue;
} else {
var G__34101 = seq__33425_34090;
var G__34102 = chunk__33427_34091;
var G__34103 = count__33428_34092;
var G__34104 = (i__33429_34093 + (1));
seq__33425_34090 = G__34101;
chunk__33427_34091 = G__34102;
count__33428_34092 = G__34103;
i__33429_34093 = G__34104;
continue;
}
} else {
var temp__5735__auto___34105 = cljs.core.seq(seq__33425_34090);
if(temp__5735__auto___34105){
var seq__33425_34106__$1 = temp__5735__auto___34105;
if(cljs.core.chunked_seq_QMARK_(seq__33425_34106__$1)){
var c__4556__auto___34107 = cljs.core.chunk_first(seq__33425_34106__$1);
var G__34108 = cljs.core.chunk_rest(seq__33425_34106__$1);
var G__34109 = c__4556__auto___34107;
var G__34110 = cljs.core.count(c__4556__auto___34107);
var G__34111 = (0);
seq__33425_34090 = G__34108;
chunk__33427_34091 = G__34109;
count__33428_34092 = G__34110;
i__33429_34093 = G__34111;
continue;
} else {
var child_34112 = cljs.core.first(seq__33425_34106__$1);
if(cljs.core.truth_(child_34112)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34112);


var G__34114 = cljs.core.next(seq__33425_34106__$1);
var G__34115 = null;
var G__34116 = (0);
var G__34117 = (0);
seq__33425_34090 = G__34114;
chunk__33427_34091 = G__34115;
count__33428_34092 = G__34116;
i__33429_34093 = G__34117;
continue;
} else {
var G__34119 = cljs.core.next(seq__33425_34106__$1);
var G__34120 = null;
var G__34121 = (0);
var G__34122 = (0);
seq__33425_34090 = G__34119;
chunk__33427_34091 = G__34120;
count__33428_34092 = G__34121;
i__33429_34093 = G__34122;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34089);
}


var G__34123 = seq__33387_34082;
var G__34124 = chunk__33388_34083;
var G__34125 = count__33389_34084;
var G__34126 = (i__33390_34085 + (1));
seq__33387_34082 = G__34123;
chunk__33388_34083 = G__34124;
count__33389_34084 = G__34125;
i__33390_34085 = G__34126;
continue;
} else {
var temp__5735__auto___34127 = cljs.core.seq(seq__33387_34082);
if(temp__5735__auto___34127){
var seq__33387_34128__$1 = temp__5735__auto___34127;
if(cljs.core.chunked_seq_QMARK_(seq__33387_34128__$1)){
var c__4556__auto___34129 = cljs.core.chunk_first(seq__33387_34128__$1);
var G__34130 = cljs.core.chunk_rest(seq__33387_34128__$1);
var G__34131 = c__4556__auto___34129;
var G__34132 = cljs.core.count(c__4556__auto___34129);
var G__34133 = (0);
seq__33387_34082 = G__34130;
chunk__33388_34083 = G__34131;
count__33389_34084 = G__34132;
i__33390_34085 = G__34133;
continue;
} else {
var child_struct_34135 = cljs.core.first(seq__33387_34128__$1);
var children_34137 = shadow.dom.dom_node(child_struct_34135);
if(cljs.core.seq_QMARK_(children_34137)){
var seq__33442_34138 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34137));
var chunk__33444_34139 = null;
var count__33445_34140 = (0);
var i__33446_34141 = (0);
while(true){
if((i__33446_34141 < count__33445_34140)){
var child_34145 = chunk__33444_34139.cljs$core$IIndexed$_nth$arity$2(null,i__33446_34141);
if(cljs.core.truth_(child_34145)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34145);


var G__34146 = seq__33442_34138;
var G__34147 = chunk__33444_34139;
var G__34148 = count__33445_34140;
var G__34149 = (i__33446_34141 + (1));
seq__33442_34138 = G__34146;
chunk__33444_34139 = G__34147;
count__33445_34140 = G__34148;
i__33446_34141 = G__34149;
continue;
} else {
var G__34150 = seq__33442_34138;
var G__34151 = chunk__33444_34139;
var G__34152 = count__33445_34140;
var G__34153 = (i__33446_34141 + (1));
seq__33442_34138 = G__34150;
chunk__33444_34139 = G__34151;
count__33445_34140 = G__34152;
i__33446_34141 = G__34153;
continue;
}
} else {
var temp__5735__auto___34154__$1 = cljs.core.seq(seq__33442_34138);
if(temp__5735__auto___34154__$1){
var seq__33442_34155__$1 = temp__5735__auto___34154__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33442_34155__$1)){
var c__4556__auto___34157 = cljs.core.chunk_first(seq__33442_34155__$1);
var G__34158 = cljs.core.chunk_rest(seq__33442_34155__$1);
var G__34159 = c__4556__auto___34157;
var G__34160 = cljs.core.count(c__4556__auto___34157);
var G__34161 = (0);
seq__33442_34138 = G__34158;
chunk__33444_34139 = G__34159;
count__33445_34140 = G__34160;
i__33446_34141 = G__34161;
continue;
} else {
var child_34162 = cljs.core.first(seq__33442_34155__$1);
if(cljs.core.truth_(child_34162)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34162);


var G__34163 = cljs.core.next(seq__33442_34155__$1);
var G__34164 = null;
var G__34165 = (0);
var G__34166 = (0);
seq__33442_34138 = G__34163;
chunk__33444_34139 = G__34164;
count__33445_34140 = G__34165;
i__33446_34141 = G__34166;
continue;
} else {
var G__34167 = cljs.core.next(seq__33442_34155__$1);
var G__34168 = null;
var G__34169 = (0);
var G__34170 = (0);
seq__33442_34138 = G__34167;
chunk__33444_34139 = G__34168;
count__33445_34140 = G__34169;
i__33446_34141 = G__34170;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34137);
}


var G__34171 = cljs.core.next(seq__33387_34128__$1);
var G__34172 = null;
var G__34173 = (0);
var G__34174 = (0);
seq__33387_34082 = G__34171;
chunk__33388_34083 = G__34172;
count__33389_34084 = G__34173;
i__33390_34085 = G__34174;
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
var seq__33460 = cljs.core.seq(node);
var chunk__33461 = null;
var count__33462 = (0);
var i__33463 = (0);
while(true){
if((i__33463 < count__33462)){
var n = chunk__33461.cljs$core$IIndexed$_nth$arity$2(null,i__33463);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34180 = seq__33460;
var G__34181 = chunk__33461;
var G__34182 = count__33462;
var G__34183 = (i__33463 + (1));
seq__33460 = G__34180;
chunk__33461 = G__34181;
count__33462 = G__34182;
i__33463 = G__34183;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33460);
if(temp__5735__auto__){
var seq__33460__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33460__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33460__$1);
var G__34184 = cljs.core.chunk_rest(seq__33460__$1);
var G__34185 = c__4556__auto__;
var G__34186 = cljs.core.count(c__4556__auto__);
var G__34187 = (0);
seq__33460 = G__34184;
chunk__33461 = G__34185;
count__33462 = G__34186;
i__33463 = G__34187;
continue;
} else {
var n = cljs.core.first(seq__33460__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34188 = cljs.core.next(seq__33460__$1);
var G__34189 = null;
var G__34190 = (0);
var G__34191 = (0);
seq__33460 = G__34188;
chunk__33461 = G__34189;
count__33462 = G__34190;
i__33463 = G__34191;
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
var G__33472 = arguments.length;
switch (G__33472) {
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
var G__33479 = arguments.length;
switch (G__33479) {
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
var G__33491 = arguments.length;
switch (G__33491) {
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
var len__4736__auto___34202 = arguments.length;
var i__4737__auto___34203 = (0);
while(true){
if((i__4737__auto___34203 < len__4736__auto___34202)){
args__4742__auto__.push((arguments[i__4737__auto___34203]));

var G__34204 = (i__4737__auto___34203 + (1));
i__4737__auto___34203 = G__34204;
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
var seq__33511_34213 = cljs.core.seq(nodes);
var chunk__33512_34214 = null;
var count__33513_34215 = (0);
var i__33514_34216 = (0);
while(true){
if((i__33514_34216 < count__33513_34215)){
var node_34217 = chunk__33512_34214.cljs$core$IIndexed$_nth$arity$2(null,i__33514_34216);
fragment.appendChild(shadow.dom._to_dom(node_34217));


var G__34219 = seq__33511_34213;
var G__34220 = chunk__33512_34214;
var G__34221 = count__33513_34215;
var G__34222 = (i__33514_34216 + (1));
seq__33511_34213 = G__34219;
chunk__33512_34214 = G__34220;
count__33513_34215 = G__34221;
i__33514_34216 = G__34222;
continue;
} else {
var temp__5735__auto___34224 = cljs.core.seq(seq__33511_34213);
if(temp__5735__auto___34224){
var seq__33511_34225__$1 = temp__5735__auto___34224;
if(cljs.core.chunked_seq_QMARK_(seq__33511_34225__$1)){
var c__4556__auto___34227 = cljs.core.chunk_first(seq__33511_34225__$1);
var G__34228 = cljs.core.chunk_rest(seq__33511_34225__$1);
var G__34229 = c__4556__auto___34227;
var G__34230 = cljs.core.count(c__4556__auto___34227);
var G__34231 = (0);
seq__33511_34213 = G__34228;
chunk__33512_34214 = G__34229;
count__33513_34215 = G__34230;
i__33514_34216 = G__34231;
continue;
} else {
var node_34235 = cljs.core.first(seq__33511_34225__$1);
fragment.appendChild(shadow.dom._to_dom(node_34235));


var G__34236 = cljs.core.next(seq__33511_34225__$1);
var G__34237 = null;
var G__34238 = (0);
var G__34239 = (0);
seq__33511_34213 = G__34236;
chunk__33512_34214 = G__34237;
count__33513_34215 = G__34238;
i__33514_34216 = G__34239;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33510){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33510));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33531_34240 = cljs.core.seq(scripts);
var chunk__33532_34241 = null;
var count__33533_34242 = (0);
var i__33534_34243 = (0);
while(true){
if((i__33534_34243 < count__33533_34242)){
var vec__33558_34244 = chunk__33532_34241.cljs$core$IIndexed$_nth$arity$2(null,i__33534_34243);
var script_tag_34245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33558_34244,(0),null);
var script_body_34246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33558_34244,(1),null);
eval(script_body_34246);


var G__34248 = seq__33531_34240;
var G__34249 = chunk__33532_34241;
var G__34250 = count__33533_34242;
var G__34251 = (i__33534_34243 + (1));
seq__33531_34240 = G__34248;
chunk__33532_34241 = G__34249;
count__33533_34242 = G__34250;
i__33534_34243 = G__34251;
continue;
} else {
var temp__5735__auto___34252 = cljs.core.seq(seq__33531_34240);
if(temp__5735__auto___34252){
var seq__33531_34253__$1 = temp__5735__auto___34252;
if(cljs.core.chunked_seq_QMARK_(seq__33531_34253__$1)){
var c__4556__auto___34254 = cljs.core.chunk_first(seq__33531_34253__$1);
var G__34256 = cljs.core.chunk_rest(seq__33531_34253__$1);
var G__34257 = c__4556__auto___34254;
var G__34258 = cljs.core.count(c__4556__auto___34254);
var G__34259 = (0);
seq__33531_34240 = G__34256;
chunk__33532_34241 = G__34257;
count__33533_34242 = G__34258;
i__33534_34243 = G__34259;
continue;
} else {
var vec__33564_34260 = cljs.core.first(seq__33531_34253__$1);
var script_tag_34261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33564_34260,(0),null);
var script_body_34262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33564_34260,(1),null);
eval(script_body_34262);


var G__34263 = cljs.core.next(seq__33531_34253__$1);
var G__34264 = null;
var G__34265 = (0);
var G__34266 = (0);
seq__33531_34240 = G__34263;
chunk__33532_34241 = G__34264;
count__33533_34242 = G__34265;
i__33534_34243 = G__34266;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33569){
var vec__33570 = p__33569;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33570,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33570,(1),null);
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
var G__33600 = arguments.length;
switch (G__33600) {
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


var G__34278 = seq__33611;
var G__34279 = chunk__33612;
var G__34280 = count__33613;
var G__34281 = (i__33614 + (1));
seq__33611 = G__34278;
chunk__33612 = G__34279;
count__33613 = G__34280;
i__33614 = G__34281;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33611);
if(temp__5735__auto__){
var seq__33611__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33611__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33611__$1);
var G__34285 = cljs.core.chunk_rest(seq__33611__$1);
var G__34286 = c__4556__auto__;
var G__34287 = cljs.core.count(c__4556__auto__);
var G__34288 = (0);
seq__33611 = G__34285;
chunk__33612 = G__34286;
count__33613 = G__34287;
i__33614 = G__34288;
continue;
} else {
var it = cljs.core.first(seq__33611__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34289 = cljs.core.next(seq__33611__$1);
var G__34290 = null;
var G__34291 = (0);
var G__34292 = (0);
seq__33611 = G__34289;
chunk__33612 = G__34290;
count__33613 = G__34291;
i__33614 = G__34292;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33627,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33634 = k33627;
var G__33634__$1 = (((G__33634 instanceof cljs.core.Keyword))?G__33634.fqn:null);
switch (G__33634__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33627,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33644){
var vec__33645 = p__33644;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33645,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33645,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33626){
var self__ = this;
var G__33626__$1 = this;
return (new cljs.core.RecordIter((0),G__33626__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33628,other33629){
var self__ = this;
var this33628__$1 = this;
return (((!((other33629 == null)))) && ((this33628__$1.constructor === other33629.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33628__$1.x,other33629.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33628__$1.y,other33629.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33628__$1.__extmap,other33629.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33626){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33658 = cljs.core.keyword_identical_QMARK_;
var expr__33659 = k__4388__auto__;
if(cljs.core.truth_((pred__33658.cljs$core$IFn$_invoke$arity$2 ? pred__33658.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33659) : pred__33658.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33659)))){
return (new shadow.dom.Coordinate(G__33626,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33658.cljs$core$IFn$_invoke$arity$2 ? pred__33658.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33659) : pred__33658.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33659)))){
return (new shadow.dom.Coordinate(self__.x,G__33626,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33626),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33626){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33626,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33631){
var extmap__4419__auto__ = (function (){var G__33664 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33631,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33631)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33664);
} else {
return G__33664;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33631),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33631),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33668,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33675 = k33668;
var G__33675__$1 = (((G__33675 instanceof cljs.core.Keyword))?G__33675.fqn:null);
switch (G__33675__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33668,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33678){
var vec__33679 = p__33678;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33679,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33679,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33667){
var self__ = this;
var G__33667__$1 = this;
return (new cljs.core.RecordIter((0),G__33667__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33669,other33670){
var self__ = this;
var this33669__$1 = this;
return (((!((other33670 == null)))) && ((this33669__$1.constructor === other33670.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33669__$1.w,other33670.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33669__$1.h,other33670.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33669__$1.__extmap,other33670.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33667){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33689 = cljs.core.keyword_identical_QMARK_;
var expr__33690 = k__4388__auto__;
if(cljs.core.truth_((pred__33689.cljs$core$IFn$_invoke$arity$2 ? pred__33689.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33690) : pred__33689.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33690)))){
return (new shadow.dom.Size(G__33667,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33689.cljs$core$IFn$_invoke$arity$2 ? pred__33689.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33690) : pred__33689.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33690)))){
return (new shadow.dom.Size(self__.w,G__33667,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33667),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33667){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33667,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33673){
var extmap__4419__auto__ = (function (){var G__33703 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33673,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33673)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33703);
} else {
return G__33703;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33673),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33673),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__34317 = (i + (1));
var G__34318 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34317;
ret = G__34318;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33715){
var vec__33716 = p__33715;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33716,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33716,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33726 = arguments.length;
switch (G__33726) {
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
var G__34327 = ps;
var G__34328 = (i + (1));
el__$1 = G__34327;
i = G__34328;
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
var vec__33747 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33747,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33747,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33747,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33751_34335 = cljs.core.seq(props);
var chunk__33752_34336 = null;
var count__33753_34337 = (0);
var i__33754_34338 = (0);
while(true){
if((i__33754_34338 < count__33753_34337)){
var vec__33762_34339 = chunk__33752_34336.cljs$core$IIndexed$_nth$arity$2(null,i__33754_34338);
var k_34340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33762_34339,(0),null);
var v_34341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33762_34339,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34340);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34340),v_34341);


var G__34342 = seq__33751_34335;
var G__34343 = chunk__33752_34336;
var G__34344 = count__33753_34337;
var G__34345 = (i__33754_34338 + (1));
seq__33751_34335 = G__34342;
chunk__33752_34336 = G__34343;
count__33753_34337 = G__34344;
i__33754_34338 = G__34345;
continue;
} else {
var temp__5735__auto___34346 = cljs.core.seq(seq__33751_34335);
if(temp__5735__auto___34346){
var seq__33751_34347__$1 = temp__5735__auto___34346;
if(cljs.core.chunked_seq_QMARK_(seq__33751_34347__$1)){
var c__4556__auto___34348 = cljs.core.chunk_first(seq__33751_34347__$1);
var G__34349 = cljs.core.chunk_rest(seq__33751_34347__$1);
var G__34350 = c__4556__auto___34348;
var G__34351 = cljs.core.count(c__4556__auto___34348);
var G__34352 = (0);
seq__33751_34335 = G__34349;
chunk__33752_34336 = G__34350;
count__33753_34337 = G__34351;
i__33754_34338 = G__34352;
continue;
} else {
var vec__33770_34353 = cljs.core.first(seq__33751_34347__$1);
var k_34354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33770_34353,(0),null);
var v_34355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33770_34353,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34354);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34354),v_34355);


var G__34356 = cljs.core.next(seq__33751_34347__$1);
var G__34357 = null;
var G__34358 = (0);
var G__34359 = (0);
seq__33751_34335 = G__34356;
chunk__33752_34336 = G__34357;
count__33753_34337 = G__34358;
i__33754_34338 = G__34359;
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
var vec__33786 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33786,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33786,(1),null);
var seq__33789_34375 = cljs.core.seq(node_children);
var chunk__33791_34376 = null;
var count__33792_34377 = (0);
var i__33793_34378 = (0);
while(true){
if((i__33793_34378 < count__33792_34377)){
var child_struct_34379 = chunk__33791_34376.cljs$core$IIndexed$_nth$arity$2(null,i__33793_34378);
if((!((child_struct_34379 == null)))){
if(typeof child_struct_34379 === 'string'){
var text_34380 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34380),child_struct_34379].join(''));
} else {
var children_34381 = shadow.dom.svg_node(child_struct_34379);
if(cljs.core.seq_QMARK_(children_34381)){
var seq__33822_34382 = cljs.core.seq(children_34381);
var chunk__33824_34383 = null;
var count__33825_34384 = (0);
var i__33826_34385 = (0);
while(true){
if((i__33826_34385 < count__33825_34384)){
var child_34386 = chunk__33824_34383.cljs$core$IIndexed$_nth$arity$2(null,i__33826_34385);
if(cljs.core.truth_(child_34386)){
node.appendChild(child_34386);


var G__34387 = seq__33822_34382;
var G__34388 = chunk__33824_34383;
var G__34389 = count__33825_34384;
var G__34390 = (i__33826_34385 + (1));
seq__33822_34382 = G__34387;
chunk__33824_34383 = G__34388;
count__33825_34384 = G__34389;
i__33826_34385 = G__34390;
continue;
} else {
var G__34391 = seq__33822_34382;
var G__34392 = chunk__33824_34383;
var G__34393 = count__33825_34384;
var G__34394 = (i__33826_34385 + (1));
seq__33822_34382 = G__34391;
chunk__33824_34383 = G__34392;
count__33825_34384 = G__34393;
i__33826_34385 = G__34394;
continue;
}
} else {
var temp__5735__auto___34395 = cljs.core.seq(seq__33822_34382);
if(temp__5735__auto___34395){
var seq__33822_34396__$1 = temp__5735__auto___34395;
if(cljs.core.chunked_seq_QMARK_(seq__33822_34396__$1)){
var c__4556__auto___34397 = cljs.core.chunk_first(seq__33822_34396__$1);
var G__34398 = cljs.core.chunk_rest(seq__33822_34396__$1);
var G__34399 = c__4556__auto___34397;
var G__34400 = cljs.core.count(c__4556__auto___34397);
var G__34401 = (0);
seq__33822_34382 = G__34398;
chunk__33824_34383 = G__34399;
count__33825_34384 = G__34400;
i__33826_34385 = G__34401;
continue;
} else {
var child_34402 = cljs.core.first(seq__33822_34396__$1);
if(cljs.core.truth_(child_34402)){
node.appendChild(child_34402);


var G__34403 = cljs.core.next(seq__33822_34396__$1);
var G__34404 = null;
var G__34405 = (0);
var G__34406 = (0);
seq__33822_34382 = G__34403;
chunk__33824_34383 = G__34404;
count__33825_34384 = G__34405;
i__33826_34385 = G__34406;
continue;
} else {
var G__34407 = cljs.core.next(seq__33822_34396__$1);
var G__34408 = null;
var G__34409 = (0);
var G__34410 = (0);
seq__33822_34382 = G__34407;
chunk__33824_34383 = G__34408;
count__33825_34384 = G__34409;
i__33826_34385 = G__34410;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34381);
}
}


var G__34411 = seq__33789_34375;
var G__34412 = chunk__33791_34376;
var G__34413 = count__33792_34377;
var G__34414 = (i__33793_34378 + (1));
seq__33789_34375 = G__34411;
chunk__33791_34376 = G__34412;
count__33792_34377 = G__34413;
i__33793_34378 = G__34414;
continue;
} else {
var G__34415 = seq__33789_34375;
var G__34416 = chunk__33791_34376;
var G__34417 = count__33792_34377;
var G__34418 = (i__33793_34378 + (1));
seq__33789_34375 = G__34415;
chunk__33791_34376 = G__34416;
count__33792_34377 = G__34417;
i__33793_34378 = G__34418;
continue;
}
} else {
var temp__5735__auto___34419 = cljs.core.seq(seq__33789_34375);
if(temp__5735__auto___34419){
var seq__33789_34420__$1 = temp__5735__auto___34419;
if(cljs.core.chunked_seq_QMARK_(seq__33789_34420__$1)){
var c__4556__auto___34421 = cljs.core.chunk_first(seq__33789_34420__$1);
var G__34422 = cljs.core.chunk_rest(seq__33789_34420__$1);
var G__34423 = c__4556__auto___34421;
var G__34424 = cljs.core.count(c__4556__auto___34421);
var G__34425 = (0);
seq__33789_34375 = G__34422;
chunk__33791_34376 = G__34423;
count__33792_34377 = G__34424;
i__33793_34378 = G__34425;
continue;
} else {
var child_struct_34430 = cljs.core.first(seq__33789_34420__$1);
if((!((child_struct_34430 == null)))){
if(typeof child_struct_34430 === 'string'){
var text_34431 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34431),child_struct_34430].join(''));
} else {
var children_34433 = shadow.dom.svg_node(child_struct_34430);
if(cljs.core.seq_QMARK_(children_34433)){
var seq__33860_34434 = cljs.core.seq(children_34433);
var chunk__33862_34435 = null;
var count__33863_34436 = (0);
var i__33864_34437 = (0);
while(true){
if((i__33864_34437 < count__33863_34436)){
var child_34438 = chunk__33862_34435.cljs$core$IIndexed$_nth$arity$2(null,i__33864_34437);
if(cljs.core.truth_(child_34438)){
node.appendChild(child_34438);


var G__34440 = seq__33860_34434;
var G__34441 = chunk__33862_34435;
var G__34442 = count__33863_34436;
var G__34443 = (i__33864_34437 + (1));
seq__33860_34434 = G__34440;
chunk__33862_34435 = G__34441;
count__33863_34436 = G__34442;
i__33864_34437 = G__34443;
continue;
} else {
var G__34444 = seq__33860_34434;
var G__34445 = chunk__33862_34435;
var G__34446 = count__33863_34436;
var G__34447 = (i__33864_34437 + (1));
seq__33860_34434 = G__34444;
chunk__33862_34435 = G__34445;
count__33863_34436 = G__34446;
i__33864_34437 = G__34447;
continue;
}
} else {
var temp__5735__auto___34448__$1 = cljs.core.seq(seq__33860_34434);
if(temp__5735__auto___34448__$1){
var seq__33860_34449__$1 = temp__5735__auto___34448__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33860_34449__$1)){
var c__4556__auto___34450 = cljs.core.chunk_first(seq__33860_34449__$1);
var G__34451 = cljs.core.chunk_rest(seq__33860_34449__$1);
var G__34452 = c__4556__auto___34450;
var G__34453 = cljs.core.count(c__4556__auto___34450);
var G__34454 = (0);
seq__33860_34434 = G__34451;
chunk__33862_34435 = G__34452;
count__33863_34436 = G__34453;
i__33864_34437 = G__34454;
continue;
} else {
var child_34455 = cljs.core.first(seq__33860_34449__$1);
if(cljs.core.truth_(child_34455)){
node.appendChild(child_34455);


var G__34456 = cljs.core.next(seq__33860_34449__$1);
var G__34457 = null;
var G__34458 = (0);
var G__34459 = (0);
seq__33860_34434 = G__34456;
chunk__33862_34435 = G__34457;
count__33863_34436 = G__34458;
i__33864_34437 = G__34459;
continue;
} else {
var G__34460 = cljs.core.next(seq__33860_34449__$1);
var G__34461 = null;
var G__34462 = (0);
var G__34463 = (0);
seq__33860_34434 = G__34460;
chunk__33862_34435 = G__34461;
count__33863_34436 = G__34462;
i__33864_34437 = G__34463;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34433);
}
}


var G__34464 = cljs.core.next(seq__33789_34420__$1);
var G__34465 = null;
var G__34466 = (0);
var G__34467 = (0);
seq__33789_34375 = G__34464;
chunk__33791_34376 = G__34465;
count__33792_34377 = G__34466;
i__33793_34378 = G__34467;
continue;
} else {
var G__34468 = cljs.core.next(seq__33789_34420__$1);
var G__34469 = null;
var G__34470 = (0);
var G__34471 = (0);
seq__33789_34375 = G__34468;
chunk__33791_34376 = G__34469;
count__33792_34377 = G__34470;
i__33793_34378 = G__34471;
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
var len__4736__auto___34473 = arguments.length;
var i__4737__auto___34474 = (0);
while(true){
if((i__4737__auto___34474 < len__4736__auto___34473)){
args__4742__auto__.push((arguments[i__4737__auto___34474]));

var G__34475 = (i__4737__auto___34474 + (1));
i__4737__auto___34474 = G__34475;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33898){
var G__33900 = cljs.core.first(seq33898);
var seq33898__$1 = cljs.core.next(seq33898);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33900,seq33898__$1);
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
var G__33921 = arguments.length;
switch (G__33921) {
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
var c__30960__auto___34482 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30961__auto__ = (function (){var switch__30767__auto__ = (function (state_33927){
var state_val_33928 = (state_33927[(1)]);
if((state_val_33928 === (1))){
var state_33927__$1 = state_33927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33927__$1,(2),once_or_cleanup);
} else {
if((state_val_33928 === (2))){
var inst_33923 = (state_33927[(2)]);
var inst_33924 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33927__$1 = (function (){var statearr_33930 = state_33927;
(statearr_33930[(7)] = inst_33923);

return statearr_33930;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33927__$1,inst_33924);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30768__auto__ = null;
var shadow$dom$state_machine__30768__auto____0 = (function (){
var statearr_33934 = [null,null,null,null,null,null,null,null];
(statearr_33934[(0)] = shadow$dom$state_machine__30768__auto__);

(statearr_33934[(1)] = (1));

return statearr_33934;
});
var shadow$dom$state_machine__30768__auto____1 = (function (state_33927){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_33927);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e33935){var ex__30771__auto__ = e33935;
var statearr_33936_34509 = state_33927;
(statearr_33936_34509[(2)] = ex__30771__auto__);


if(cljs.core.seq((state_33927[(4)]))){
var statearr_33937_34511 = state_33927;
(statearr_33937_34511[(1)] = cljs.core.first((state_33927[(4)])));

} else {
throw ex__30771__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34514 = state_33927;
state_33927 = G__34514;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
shadow$dom$state_machine__30768__auto__ = function(state_33927){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30768__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30768__auto____1.call(this,state_33927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30768__auto____0;
shadow$dom$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30768__auto____1;
return shadow$dom$state_machine__30768__auto__;
})()
})();
var state__30962__auto__ = (function (){var statearr_33938 = f__30961__auto__();
(statearr_33938[(6)] = c__30960__auto___34482);

return statearr_33938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30962__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
