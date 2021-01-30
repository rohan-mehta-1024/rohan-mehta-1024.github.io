goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33966 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_33966(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34015 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_34015(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33289 = coll;
var G__33290 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33289,G__33290) : shadow.dom.lazy_native_coll_seq.call(null,G__33289,G__33290));
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
var G__33295 = arguments.length;
switch (G__33295) {
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
var G__33298 = arguments.length;
switch (G__33298) {
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
var G__33302 = arguments.length;
switch (G__33302) {
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
var G__33304 = arguments.length;
switch (G__33304) {
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
var G__33306 = arguments.length;
switch (G__33306) {
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
var G__33308 = arguments.length;
switch (G__33308) {
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
}catch (e33312){if((e33312 instanceof Object)){
var e = e33312;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33312;

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
var seq__33313 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33314 = null;
var count__33315 = (0);
var i__33316 = (0);
while(true){
if((i__33316 < count__33315)){
var el = chunk__33314.cljs$core$IIndexed$_nth$arity$2(null,i__33316);
var handler_34047__$1 = ((function (seq__33313,chunk__33314,count__33315,i__33316,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33313,chunk__33314,count__33315,i__33316,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34047__$1);


var G__34048 = seq__33313;
var G__34049 = chunk__33314;
var G__34050 = count__33315;
var G__34051 = (i__33316 + (1));
seq__33313 = G__34048;
chunk__33314 = G__34049;
count__33315 = G__34050;
i__33316 = G__34051;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33313);
if(temp__5735__auto__){
var seq__33313__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33313__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33313__$1);
var G__34052 = cljs.core.chunk_rest(seq__33313__$1);
var G__34053 = c__4556__auto__;
var G__34054 = cljs.core.count(c__4556__auto__);
var G__34055 = (0);
seq__33313 = G__34052;
chunk__33314 = G__34053;
count__33315 = G__34054;
i__33316 = G__34055;
continue;
} else {
var el = cljs.core.first(seq__33313__$1);
var handler_34056__$1 = ((function (seq__33313,chunk__33314,count__33315,i__33316,el,seq__33313__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33313,chunk__33314,count__33315,i__33316,el,seq__33313__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34056__$1);


var G__34057 = cljs.core.next(seq__33313__$1);
var G__34058 = null;
var G__34059 = (0);
var G__34060 = (0);
seq__33313 = G__34057;
chunk__33314 = G__34058;
count__33315 = G__34059;
i__33316 = G__34060;
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
var G__33319 = arguments.length;
switch (G__33319) {
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


var G__34071 = seq__33322;
var G__34072 = chunk__33323;
var G__34073 = count__33324;
var G__34074 = (i__33325 + (1));
seq__33322 = G__34071;
chunk__33323 = G__34072;
count__33324 = G__34073;
i__33325 = G__34074;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33322);
if(temp__5735__auto__){
var seq__33322__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33322__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33322__$1);
var G__34075 = cljs.core.chunk_rest(seq__33322__$1);
var G__34076 = c__4556__auto__;
var G__34077 = cljs.core.count(c__4556__auto__);
var G__34078 = (0);
seq__33322 = G__34075;
chunk__33323 = G__34076;
count__33324 = G__34077;
i__33325 = G__34078;
continue;
} else {
var vec__33346 = cljs.core.first(seq__33322__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33346,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33346,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34081 = cljs.core.next(seq__33322__$1);
var G__34082 = null;
var G__34083 = (0);
var G__34084 = (0);
seq__33322 = G__34081;
chunk__33323 = G__34082;
count__33324 = G__34083;
i__33325 = G__34084;
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
var seq__33349 = cljs.core.seq(styles);
var chunk__33350 = null;
var count__33351 = (0);
var i__33352 = (0);
while(true){
if((i__33352 < count__33351)){
var vec__33359 = chunk__33350.cljs$core$IIndexed$_nth$arity$2(null,i__33352);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33359,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33359,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34087 = seq__33349;
var G__34088 = chunk__33350;
var G__34089 = count__33351;
var G__34090 = (i__33352 + (1));
seq__33349 = G__34087;
chunk__33350 = G__34088;
count__33351 = G__34089;
i__33352 = G__34090;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33349);
if(temp__5735__auto__){
var seq__33349__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33349__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33349__$1);
var G__34091 = cljs.core.chunk_rest(seq__33349__$1);
var G__34092 = c__4556__auto__;
var G__34093 = cljs.core.count(c__4556__auto__);
var G__34094 = (0);
seq__33349 = G__34091;
chunk__33350 = G__34092;
count__33351 = G__34093;
i__33352 = G__34094;
continue;
} else {
var vec__33376 = cljs.core.first(seq__33349__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33376,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33376,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34097 = cljs.core.next(seq__33349__$1);
var G__34098 = null;
var G__34099 = (0);
var G__34100 = (0);
seq__33349 = G__34097;
chunk__33350 = G__34098;
count__33351 = G__34099;
i__33352 = G__34100;
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
var G__33383_34101 = key;
var G__33383_34102__$1 = (((G__33383_34101 instanceof cljs.core.Keyword))?G__33383_34101.fqn:null);
switch (G__33383_34102__$1) {
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
var ks_34107 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_34107,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_34107,"aria-");
}
})())){
el.setAttribute(ks_34107,value);
} else {
(el[ks_34107] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33400){
var map__33401 = p__33400;
var map__33401__$1 = (((((!((map__33401 == null))))?(((((map__33401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33401):map__33401);
var props = map__33401__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33401__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33406 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33406,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33406,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33406,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33409 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33409,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33409;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33422 = arguments.length;
switch (G__33422) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33427){
var vec__33429 = p__33427;
var seq__33430 = cljs.core.seq(vec__33429);
var first__33431 = cljs.core.first(seq__33430);
var seq__33430__$1 = cljs.core.next(seq__33430);
var nn = first__33431;
var first__33431__$1 = cljs.core.first(seq__33430__$1);
var seq__33430__$2 = cljs.core.next(seq__33430__$1);
var np = first__33431__$1;
var nc = seq__33430__$2;
var node = vec__33429;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33442 = nn;
var G__33443 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33442,G__33443) : create_fn.call(null,G__33442,G__33443));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33444 = nn;
var G__33445 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33444,G__33445) : create_fn.call(null,G__33444,G__33445));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33447 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33447,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33447,(1),null);
var seq__33450_34127 = cljs.core.seq(node_children);
var chunk__33451_34128 = null;
var count__33452_34129 = (0);
var i__33453_34130 = (0);
while(true){
if((i__33453_34130 < count__33452_34129)){
var child_struct_34131 = chunk__33451_34128.cljs$core$IIndexed$_nth$arity$2(null,i__33453_34130);
var children_34132 = shadow.dom.dom_node(child_struct_34131);
if(cljs.core.seq_QMARK_(children_34132)){
var seq__33493_34133 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34132));
var chunk__33495_34134 = null;
var count__33496_34135 = (0);
var i__33497_34136 = (0);
while(true){
if((i__33497_34136 < count__33496_34135)){
var child_34137 = chunk__33495_34134.cljs$core$IIndexed$_nth$arity$2(null,i__33497_34136);
if(cljs.core.truth_(child_34137)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34137);


var G__34138 = seq__33493_34133;
var G__34139 = chunk__33495_34134;
var G__34140 = count__33496_34135;
var G__34141 = (i__33497_34136 + (1));
seq__33493_34133 = G__34138;
chunk__33495_34134 = G__34139;
count__33496_34135 = G__34140;
i__33497_34136 = G__34141;
continue;
} else {
var G__34142 = seq__33493_34133;
var G__34143 = chunk__33495_34134;
var G__34144 = count__33496_34135;
var G__34145 = (i__33497_34136 + (1));
seq__33493_34133 = G__34142;
chunk__33495_34134 = G__34143;
count__33496_34135 = G__34144;
i__33497_34136 = G__34145;
continue;
}
} else {
var temp__5735__auto___34146 = cljs.core.seq(seq__33493_34133);
if(temp__5735__auto___34146){
var seq__33493_34147__$1 = temp__5735__auto___34146;
if(cljs.core.chunked_seq_QMARK_(seq__33493_34147__$1)){
var c__4556__auto___34148 = cljs.core.chunk_first(seq__33493_34147__$1);
var G__34149 = cljs.core.chunk_rest(seq__33493_34147__$1);
var G__34150 = c__4556__auto___34148;
var G__34151 = cljs.core.count(c__4556__auto___34148);
var G__34152 = (0);
seq__33493_34133 = G__34149;
chunk__33495_34134 = G__34150;
count__33496_34135 = G__34151;
i__33497_34136 = G__34152;
continue;
} else {
var child_34158 = cljs.core.first(seq__33493_34147__$1);
if(cljs.core.truth_(child_34158)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34158);


var G__34159 = cljs.core.next(seq__33493_34147__$1);
var G__34160 = null;
var G__34161 = (0);
var G__34162 = (0);
seq__33493_34133 = G__34159;
chunk__33495_34134 = G__34160;
count__33496_34135 = G__34161;
i__33497_34136 = G__34162;
continue;
} else {
var G__34163 = cljs.core.next(seq__33493_34147__$1);
var G__34164 = null;
var G__34165 = (0);
var G__34166 = (0);
seq__33493_34133 = G__34163;
chunk__33495_34134 = G__34164;
count__33496_34135 = G__34165;
i__33497_34136 = G__34166;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34132);
}


var G__34167 = seq__33450_34127;
var G__34168 = chunk__33451_34128;
var G__34169 = count__33452_34129;
var G__34170 = (i__33453_34130 + (1));
seq__33450_34127 = G__34167;
chunk__33451_34128 = G__34168;
count__33452_34129 = G__34169;
i__33453_34130 = G__34170;
continue;
} else {
var temp__5735__auto___34171 = cljs.core.seq(seq__33450_34127);
if(temp__5735__auto___34171){
var seq__33450_34172__$1 = temp__5735__auto___34171;
if(cljs.core.chunked_seq_QMARK_(seq__33450_34172__$1)){
var c__4556__auto___34173 = cljs.core.chunk_first(seq__33450_34172__$1);
var G__34174 = cljs.core.chunk_rest(seq__33450_34172__$1);
var G__34175 = c__4556__auto___34173;
var G__34176 = cljs.core.count(c__4556__auto___34173);
var G__34177 = (0);
seq__33450_34127 = G__34174;
chunk__33451_34128 = G__34175;
count__33452_34129 = G__34176;
i__33453_34130 = G__34177;
continue;
} else {
var child_struct_34178 = cljs.core.first(seq__33450_34172__$1);
var children_34179 = shadow.dom.dom_node(child_struct_34178);
if(cljs.core.seq_QMARK_(children_34179)){
var seq__33511_34180 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34179));
var chunk__33513_34181 = null;
var count__33514_34182 = (0);
var i__33515_34183 = (0);
while(true){
if((i__33515_34183 < count__33514_34182)){
var child_34184 = chunk__33513_34181.cljs$core$IIndexed$_nth$arity$2(null,i__33515_34183);
if(cljs.core.truth_(child_34184)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34184);


var G__34185 = seq__33511_34180;
var G__34186 = chunk__33513_34181;
var G__34187 = count__33514_34182;
var G__34188 = (i__33515_34183 + (1));
seq__33511_34180 = G__34185;
chunk__33513_34181 = G__34186;
count__33514_34182 = G__34187;
i__33515_34183 = G__34188;
continue;
} else {
var G__34189 = seq__33511_34180;
var G__34190 = chunk__33513_34181;
var G__34191 = count__33514_34182;
var G__34192 = (i__33515_34183 + (1));
seq__33511_34180 = G__34189;
chunk__33513_34181 = G__34190;
count__33514_34182 = G__34191;
i__33515_34183 = G__34192;
continue;
}
} else {
var temp__5735__auto___34193__$1 = cljs.core.seq(seq__33511_34180);
if(temp__5735__auto___34193__$1){
var seq__33511_34194__$1 = temp__5735__auto___34193__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33511_34194__$1)){
var c__4556__auto___34195 = cljs.core.chunk_first(seq__33511_34194__$1);
var G__34196 = cljs.core.chunk_rest(seq__33511_34194__$1);
var G__34197 = c__4556__auto___34195;
var G__34198 = cljs.core.count(c__4556__auto___34195);
var G__34199 = (0);
seq__33511_34180 = G__34196;
chunk__33513_34181 = G__34197;
count__33514_34182 = G__34198;
i__33515_34183 = G__34199;
continue;
} else {
var child_34200 = cljs.core.first(seq__33511_34194__$1);
if(cljs.core.truth_(child_34200)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34200);


var G__34201 = cljs.core.next(seq__33511_34194__$1);
var G__34202 = null;
var G__34203 = (0);
var G__34204 = (0);
seq__33511_34180 = G__34201;
chunk__33513_34181 = G__34202;
count__33514_34182 = G__34203;
i__33515_34183 = G__34204;
continue;
} else {
var G__34205 = cljs.core.next(seq__33511_34194__$1);
var G__34206 = null;
var G__34207 = (0);
var G__34208 = (0);
seq__33511_34180 = G__34205;
chunk__33513_34181 = G__34206;
count__33514_34182 = G__34207;
i__33515_34183 = G__34208;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34179);
}


var G__34212 = cljs.core.next(seq__33450_34172__$1);
var G__34213 = null;
var G__34214 = (0);
var G__34215 = (0);
seq__33450_34127 = G__34212;
chunk__33451_34128 = G__34213;
count__33452_34129 = G__34214;
i__33453_34130 = G__34215;
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
var seq__33524 = cljs.core.seq(node);
var chunk__33525 = null;
var count__33526 = (0);
var i__33527 = (0);
while(true){
if((i__33527 < count__33526)){
var n = chunk__33525.cljs$core$IIndexed$_nth$arity$2(null,i__33527);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34217 = seq__33524;
var G__34218 = chunk__33525;
var G__34219 = count__33526;
var G__34220 = (i__33527 + (1));
seq__33524 = G__34217;
chunk__33525 = G__34218;
count__33526 = G__34219;
i__33527 = G__34220;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33524);
if(temp__5735__auto__){
var seq__33524__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33524__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33524__$1);
var G__34222 = cljs.core.chunk_rest(seq__33524__$1);
var G__34223 = c__4556__auto__;
var G__34224 = cljs.core.count(c__4556__auto__);
var G__34225 = (0);
seq__33524 = G__34222;
chunk__33525 = G__34223;
count__33526 = G__34224;
i__33527 = G__34225;
continue;
} else {
var n = cljs.core.first(seq__33524__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34226 = cljs.core.next(seq__33524__$1);
var G__34227 = null;
var G__34228 = (0);
var G__34229 = (0);
seq__33524 = G__34226;
chunk__33525 = G__34227;
count__33526 = G__34228;
i__33527 = G__34229;
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
var G__33553 = arguments.length;
switch (G__33553) {
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
var G__33557 = arguments.length;
switch (G__33557) {
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
var G__33568 = arguments.length;
switch (G__33568) {
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
var seq__33587_34236 = cljs.core.seq(nodes);
var chunk__33588_34237 = null;
var count__33589_34238 = (0);
var i__33590_34239 = (0);
while(true){
if((i__33590_34239 < count__33589_34238)){
var node_34240 = chunk__33588_34237.cljs$core$IIndexed$_nth$arity$2(null,i__33590_34239);
fragment.appendChild(shadow.dom._to_dom(node_34240));


var G__34241 = seq__33587_34236;
var G__34242 = chunk__33588_34237;
var G__34243 = count__33589_34238;
var G__34244 = (i__33590_34239 + (1));
seq__33587_34236 = G__34241;
chunk__33588_34237 = G__34242;
count__33589_34238 = G__34243;
i__33590_34239 = G__34244;
continue;
} else {
var temp__5735__auto___34245 = cljs.core.seq(seq__33587_34236);
if(temp__5735__auto___34245){
var seq__33587_34246__$1 = temp__5735__auto___34245;
if(cljs.core.chunked_seq_QMARK_(seq__33587_34246__$1)){
var c__4556__auto___34247 = cljs.core.chunk_first(seq__33587_34246__$1);
var G__34248 = cljs.core.chunk_rest(seq__33587_34246__$1);
var G__34249 = c__4556__auto___34247;
var G__34250 = cljs.core.count(c__4556__auto___34247);
var G__34251 = (0);
seq__33587_34236 = G__34248;
chunk__33588_34237 = G__34249;
count__33589_34238 = G__34250;
i__33590_34239 = G__34251;
continue;
} else {
var node_34252 = cljs.core.first(seq__33587_34246__$1);
fragment.appendChild(shadow.dom._to_dom(node_34252));


var G__34253 = cljs.core.next(seq__33587_34246__$1);
var G__34254 = null;
var G__34255 = (0);
var G__34256 = (0);
seq__33587_34236 = G__34253;
chunk__33588_34237 = G__34254;
count__33589_34238 = G__34255;
i__33590_34239 = G__34256;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33580){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33580));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33610_34265 = cljs.core.seq(scripts);
var chunk__33611_34266 = null;
var count__33612_34267 = (0);
var i__33613_34268 = (0);
while(true){
if((i__33613_34268 < count__33612_34267)){
var vec__33620_34269 = chunk__33611_34266.cljs$core$IIndexed$_nth$arity$2(null,i__33613_34268);
var script_tag_34270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33620_34269,(0),null);
var script_body_34271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33620_34269,(1),null);
eval(script_body_34271);


var G__34272 = seq__33610_34265;
var G__34273 = chunk__33611_34266;
var G__34274 = count__33612_34267;
var G__34275 = (i__33613_34268 + (1));
seq__33610_34265 = G__34272;
chunk__33611_34266 = G__34273;
count__33612_34267 = G__34274;
i__33613_34268 = G__34275;
continue;
} else {
var temp__5735__auto___34276 = cljs.core.seq(seq__33610_34265);
if(temp__5735__auto___34276){
var seq__33610_34277__$1 = temp__5735__auto___34276;
if(cljs.core.chunked_seq_QMARK_(seq__33610_34277__$1)){
var c__4556__auto___34278 = cljs.core.chunk_first(seq__33610_34277__$1);
var G__34279 = cljs.core.chunk_rest(seq__33610_34277__$1);
var G__34280 = c__4556__auto___34278;
var G__34281 = cljs.core.count(c__4556__auto___34278);
var G__34282 = (0);
seq__33610_34265 = G__34279;
chunk__33611_34266 = G__34280;
count__33612_34267 = G__34281;
i__33613_34268 = G__34282;
continue;
} else {
var vec__33623_34284 = cljs.core.first(seq__33610_34277__$1);
var script_tag_34285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33623_34284,(0),null);
var script_body_34286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33623_34284,(1),null);
eval(script_body_34286);


var G__34288 = cljs.core.next(seq__33610_34277__$1);
var G__34289 = null;
var G__34290 = (0);
var G__34291 = (0);
seq__33610_34265 = G__34288;
chunk__33611_34266 = G__34289;
count__33612_34267 = G__34290;
i__33613_34268 = G__34291;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33636){
var vec__33637 = p__33636;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33637,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33637,(1),null);
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
var G__33642 = arguments.length;
switch (G__33642) {
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
var seq__33646 = cljs.core.seq(style_keys);
var chunk__33647 = null;
var count__33648 = (0);
var i__33649 = (0);
while(true){
if((i__33649 < count__33648)){
var it = chunk__33647.cljs$core$IIndexed$_nth$arity$2(null,i__33649);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34302 = seq__33646;
var G__34303 = chunk__33647;
var G__34304 = count__33648;
var G__34305 = (i__33649 + (1));
seq__33646 = G__34302;
chunk__33647 = G__34303;
count__33648 = G__34304;
i__33649 = G__34305;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33646);
if(temp__5735__auto__){
var seq__33646__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33646__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33646__$1);
var G__34306 = cljs.core.chunk_rest(seq__33646__$1);
var G__34307 = c__4556__auto__;
var G__34308 = cljs.core.count(c__4556__auto__);
var G__34309 = (0);
seq__33646 = G__34306;
chunk__33647 = G__34307;
count__33648 = G__34308;
i__33649 = G__34309;
continue;
} else {
var it = cljs.core.first(seq__33646__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34311 = cljs.core.next(seq__33646__$1);
var G__34312 = null;
var G__34313 = (0);
var G__34314 = (0);
seq__33646 = G__34311;
chunk__33647 = G__34312;
count__33648 = G__34313;
i__33649 = G__34314;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33661,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33665 = k33661;
var G__33665__$1 = (((G__33665 instanceof cljs.core.Keyword))?G__33665.fqn:null);
switch (G__33665__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33661,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33667){
var vec__33668 = p__33667;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33668,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33668,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33660){
var self__ = this;
var G__33660__$1 = this;
return (new cljs.core.RecordIter((0),G__33660__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33662,other33663){
var self__ = this;
var this33662__$1 = this;
return (((!((other33663 == null)))) && ((this33662__$1.constructor === other33663.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33662__$1.x,other33663.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33662__$1.y,other33663.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33662__$1.__extmap,other33663.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33660){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33687 = cljs.core.keyword_identical_QMARK_;
var expr__33688 = k__4388__auto__;
if(cljs.core.truth_((pred__33687.cljs$core$IFn$_invoke$arity$2 ? pred__33687.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33688) : pred__33687.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33688)))){
return (new shadow.dom.Coordinate(G__33660,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33687.cljs$core$IFn$_invoke$arity$2 ? pred__33687.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33688) : pred__33687.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33688)))){
return (new shadow.dom.Coordinate(self__.x,G__33660,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33660),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33660){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33660,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33664){
var extmap__4419__auto__ = (function (){var G__33699 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33664,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33664)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33699);
} else {
return G__33699;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33664),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33664),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33710,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33721 = k33710;
var G__33721__$1 = (((G__33721 instanceof cljs.core.Keyword))?G__33721.fqn:null);
switch (G__33721__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33710,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33725){
var vec__33726 = p__33725;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33726,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33726,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33709){
var self__ = this;
var G__33709__$1 = this;
return (new cljs.core.RecordIter((0),G__33709__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33711,other33712){
var self__ = this;
var this33711__$1 = this;
return (((!((other33712 == null)))) && ((this33711__$1.constructor === other33712.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33711__$1.w,other33712.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33711__$1.h,other33712.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33711__$1.__extmap,other33712.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33709){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33734 = cljs.core.keyword_identical_QMARK_;
var expr__33735 = k__4388__auto__;
if(cljs.core.truth_((pred__33734.cljs$core$IFn$_invoke$arity$2 ? pred__33734.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33735) : pred__33734.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33735)))){
return (new shadow.dom.Size(G__33709,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33734.cljs$core$IFn$_invoke$arity$2 ? pred__33734.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33735) : pred__33734.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33735)))){
return (new shadow.dom.Size(self__.w,G__33709,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33709),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33709){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33709,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33713){
var extmap__4419__auto__ = (function (){var G__33741 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33713,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33713)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33741);
} else {
return G__33741;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33713),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33713),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__34367 = (i + (1));
var G__34368 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34367;
ret = G__34368;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33753){
var vec__33754 = p__33753;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33754,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33754,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33758 = arguments.length;
switch (G__33758) {
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
var G__34378 = ps;
var G__34379 = (i + (1));
el__$1 = G__34378;
i = G__34379;
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
var vec__33798 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33798,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33798,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33798,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33806_34382 = cljs.core.seq(props);
var chunk__33807_34383 = null;
var count__33808_34384 = (0);
var i__33809_34385 = (0);
while(true){
if((i__33809_34385 < count__33808_34384)){
var vec__33821_34386 = chunk__33807_34383.cljs$core$IIndexed$_nth$arity$2(null,i__33809_34385);
var k_34387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33821_34386,(0),null);
var v_34388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33821_34386,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34387);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34387),v_34388);


var G__34389 = seq__33806_34382;
var G__34390 = chunk__33807_34383;
var G__34391 = count__33808_34384;
var G__34392 = (i__33809_34385 + (1));
seq__33806_34382 = G__34389;
chunk__33807_34383 = G__34390;
count__33808_34384 = G__34391;
i__33809_34385 = G__34392;
continue;
} else {
var temp__5735__auto___34393 = cljs.core.seq(seq__33806_34382);
if(temp__5735__auto___34393){
var seq__33806_34394__$1 = temp__5735__auto___34393;
if(cljs.core.chunked_seq_QMARK_(seq__33806_34394__$1)){
var c__4556__auto___34395 = cljs.core.chunk_first(seq__33806_34394__$1);
var G__34396 = cljs.core.chunk_rest(seq__33806_34394__$1);
var G__34397 = c__4556__auto___34395;
var G__34398 = cljs.core.count(c__4556__auto___34395);
var G__34399 = (0);
seq__33806_34382 = G__34396;
chunk__33807_34383 = G__34397;
count__33808_34384 = G__34398;
i__33809_34385 = G__34399;
continue;
} else {
var vec__33839_34405 = cljs.core.first(seq__33806_34394__$1);
var k_34406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33839_34405,(0),null);
var v_34407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33839_34405,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34406);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34406),v_34407);


var G__34408 = cljs.core.next(seq__33806_34394__$1);
var G__34409 = null;
var G__34410 = (0);
var G__34411 = (0);
seq__33806_34382 = G__34408;
chunk__33807_34383 = G__34409;
count__33808_34384 = G__34410;
i__33809_34385 = G__34411;
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
var vec__33847 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33847,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33847,(1),null);
var seq__33851_34413 = cljs.core.seq(node_children);
var chunk__33853_34414 = null;
var count__33854_34415 = (0);
var i__33855_34416 = (0);
while(true){
if((i__33855_34416 < count__33854_34415)){
var child_struct_34417 = chunk__33853_34414.cljs$core$IIndexed$_nth$arity$2(null,i__33855_34416);
if((!((child_struct_34417 == null)))){
if(typeof child_struct_34417 === 'string'){
var text_34419 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34419),child_struct_34417].join(''));
} else {
var children_34421 = shadow.dom.svg_node(child_struct_34417);
if(cljs.core.seq_QMARK_(children_34421)){
var seq__33896_34422 = cljs.core.seq(children_34421);
var chunk__33898_34423 = null;
var count__33899_34424 = (0);
var i__33900_34425 = (0);
while(true){
if((i__33900_34425 < count__33899_34424)){
var child_34426 = chunk__33898_34423.cljs$core$IIndexed$_nth$arity$2(null,i__33900_34425);
if(cljs.core.truth_(child_34426)){
node.appendChild(child_34426);


var G__34428 = seq__33896_34422;
var G__34429 = chunk__33898_34423;
var G__34430 = count__33899_34424;
var G__34431 = (i__33900_34425 + (1));
seq__33896_34422 = G__34428;
chunk__33898_34423 = G__34429;
count__33899_34424 = G__34430;
i__33900_34425 = G__34431;
continue;
} else {
var G__34432 = seq__33896_34422;
var G__34433 = chunk__33898_34423;
var G__34434 = count__33899_34424;
var G__34435 = (i__33900_34425 + (1));
seq__33896_34422 = G__34432;
chunk__33898_34423 = G__34433;
count__33899_34424 = G__34434;
i__33900_34425 = G__34435;
continue;
}
} else {
var temp__5735__auto___34436 = cljs.core.seq(seq__33896_34422);
if(temp__5735__auto___34436){
var seq__33896_34437__$1 = temp__5735__auto___34436;
if(cljs.core.chunked_seq_QMARK_(seq__33896_34437__$1)){
var c__4556__auto___34438 = cljs.core.chunk_first(seq__33896_34437__$1);
var G__34440 = cljs.core.chunk_rest(seq__33896_34437__$1);
var G__34441 = c__4556__auto___34438;
var G__34442 = cljs.core.count(c__4556__auto___34438);
var G__34443 = (0);
seq__33896_34422 = G__34440;
chunk__33898_34423 = G__34441;
count__33899_34424 = G__34442;
i__33900_34425 = G__34443;
continue;
} else {
var child_34445 = cljs.core.first(seq__33896_34437__$1);
if(cljs.core.truth_(child_34445)){
node.appendChild(child_34445);


var G__34446 = cljs.core.next(seq__33896_34437__$1);
var G__34447 = null;
var G__34448 = (0);
var G__34449 = (0);
seq__33896_34422 = G__34446;
chunk__33898_34423 = G__34447;
count__33899_34424 = G__34448;
i__33900_34425 = G__34449;
continue;
} else {
var G__34450 = cljs.core.next(seq__33896_34437__$1);
var G__34451 = null;
var G__34452 = (0);
var G__34453 = (0);
seq__33896_34422 = G__34450;
chunk__33898_34423 = G__34451;
count__33899_34424 = G__34452;
i__33900_34425 = G__34453;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34421);
}
}


var G__34454 = seq__33851_34413;
var G__34455 = chunk__33853_34414;
var G__34456 = count__33854_34415;
var G__34457 = (i__33855_34416 + (1));
seq__33851_34413 = G__34454;
chunk__33853_34414 = G__34455;
count__33854_34415 = G__34456;
i__33855_34416 = G__34457;
continue;
} else {
var G__34458 = seq__33851_34413;
var G__34459 = chunk__33853_34414;
var G__34460 = count__33854_34415;
var G__34461 = (i__33855_34416 + (1));
seq__33851_34413 = G__34458;
chunk__33853_34414 = G__34459;
count__33854_34415 = G__34460;
i__33855_34416 = G__34461;
continue;
}
} else {
var temp__5735__auto___34462 = cljs.core.seq(seq__33851_34413);
if(temp__5735__auto___34462){
var seq__33851_34463__$1 = temp__5735__auto___34462;
if(cljs.core.chunked_seq_QMARK_(seq__33851_34463__$1)){
var c__4556__auto___34464 = cljs.core.chunk_first(seq__33851_34463__$1);
var G__34465 = cljs.core.chunk_rest(seq__33851_34463__$1);
var G__34466 = c__4556__auto___34464;
var G__34467 = cljs.core.count(c__4556__auto___34464);
var G__34468 = (0);
seq__33851_34413 = G__34465;
chunk__33853_34414 = G__34466;
count__33854_34415 = G__34467;
i__33855_34416 = G__34468;
continue;
} else {
var child_struct_34469 = cljs.core.first(seq__33851_34463__$1);
if((!((child_struct_34469 == null)))){
if(typeof child_struct_34469 === 'string'){
var text_34470 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34470),child_struct_34469].join(''));
} else {
var children_34471 = shadow.dom.svg_node(child_struct_34469);
if(cljs.core.seq_QMARK_(children_34471)){
var seq__33910_34472 = cljs.core.seq(children_34471);
var chunk__33912_34473 = null;
var count__33913_34474 = (0);
var i__33914_34475 = (0);
while(true){
if((i__33914_34475 < count__33913_34474)){
var child_34476 = chunk__33912_34473.cljs$core$IIndexed$_nth$arity$2(null,i__33914_34475);
if(cljs.core.truth_(child_34476)){
node.appendChild(child_34476);


var G__34477 = seq__33910_34472;
var G__34478 = chunk__33912_34473;
var G__34479 = count__33913_34474;
var G__34480 = (i__33914_34475 + (1));
seq__33910_34472 = G__34477;
chunk__33912_34473 = G__34478;
count__33913_34474 = G__34479;
i__33914_34475 = G__34480;
continue;
} else {
var G__34481 = seq__33910_34472;
var G__34482 = chunk__33912_34473;
var G__34483 = count__33913_34474;
var G__34484 = (i__33914_34475 + (1));
seq__33910_34472 = G__34481;
chunk__33912_34473 = G__34482;
count__33913_34474 = G__34483;
i__33914_34475 = G__34484;
continue;
}
} else {
var temp__5735__auto___34486__$1 = cljs.core.seq(seq__33910_34472);
if(temp__5735__auto___34486__$1){
var seq__33910_34487__$1 = temp__5735__auto___34486__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33910_34487__$1)){
var c__4556__auto___34488 = cljs.core.chunk_first(seq__33910_34487__$1);
var G__34489 = cljs.core.chunk_rest(seq__33910_34487__$1);
var G__34490 = c__4556__auto___34488;
var G__34491 = cljs.core.count(c__4556__auto___34488);
var G__34492 = (0);
seq__33910_34472 = G__34489;
chunk__33912_34473 = G__34490;
count__33913_34474 = G__34491;
i__33914_34475 = G__34492;
continue;
} else {
var child_34493 = cljs.core.first(seq__33910_34487__$1);
if(cljs.core.truth_(child_34493)){
node.appendChild(child_34493);


var G__34497 = cljs.core.next(seq__33910_34487__$1);
var G__34498 = null;
var G__34499 = (0);
var G__34500 = (0);
seq__33910_34472 = G__34497;
chunk__33912_34473 = G__34498;
count__33913_34474 = G__34499;
i__33914_34475 = G__34500;
continue;
} else {
var G__34501 = cljs.core.next(seq__33910_34487__$1);
var G__34502 = null;
var G__34503 = (0);
var G__34504 = (0);
seq__33910_34472 = G__34501;
chunk__33912_34473 = G__34502;
count__33913_34474 = G__34503;
i__33914_34475 = G__34504;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34471);
}
}


var G__34507 = cljs.core.next(seq__33851_34463__$1);
var G__34508 = null;
var G__34509 = (0);
var G__34510 = (0);
seq__33851_34413 = G__34507;
chunk__33853_34414 = G__34508;
count__33854_34415 = G__34509;
i__33855_34416 = G__34510;
continue;
} else {
var G__34513 = cljs.core.next(seq__33851_34463__$1);
var G__34514 = null;
var G__34515 = (0);
var G__34516 = (0);
seq__33851_34413 = G__34513;
chunk__33853_34414 = G__34514;
count__33854_34415 = G__34515;
i__33855_34416 = G__34516;
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
var len__4736__auto___34551 = arguments.length;
var i__4737__auto___34552 = (0);
while(true){
if((i__4737__auto___34552 < len__4736__auto___34551)){
args__4742__auto__.push((arguments[i__4737__auto___34552]));

var G__34553 = (i__4737__auto___34552 + (1));
i__4737__auto___34552 = G__34553;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33923){
var G__33924 = cljs.core.first(seq33923);
var seq33923__$1 = cljs.core.next(seq33923);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33924,seq33923__$1);
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
var G__33937 = arguments.length;
switch (G__33937) {
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
var c__30930__auto___34565 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30931__auto__ = (function (){var switch__30758__auto__ = (function (state_33946){
var state_val_33947 = (state_33946[(1)]);
if((state_val_33947 === (1))){
var state_33946__$1 = state_33946;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33946__$1,(2),once_or_cleanup);
} else {
if((state_val_33947 === (2))){
var inst_33943 = (state_33946[(2)]);
var inst_33944 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33946__$1 = (function (){var statearr_33951 = state_33946;
(statearr_33951[(7)] = inst_33943);

return statearr_33951;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33946__$1,inst_33944);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30759__auto__ = null;
var shadow$dom$state_machine__30759__auto____0 = (function (){
var statearr_33953 = [null,null,null,null,null,null,null,null];
(statearr_33953[(0)] = shadow$dom$state_machine__30759__auto__);

(statearr_33953[(1)] = (1));

return statearr_33953;
});
var shadow$dom$state_machine__30759__auto____1 = (function (state_33946){
while(true){
var ret_value__30760__auto__ = (function (){try{while(true){
var result__30761__auto__ = switch__30758__auto__(state_33946);
if(cljs.core.keyword_identical_QMARK_(result__30761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30761__auto__;
}
break;
}
}catch (e33954){var ex__30762__auto__ = e33954;
var statearr_33955_34579 = state_33946;
(statearr_33955_34579[(2)] = ex__30762__auto__);


if(cljs.core.seq((state_33946[(4)]))){
var statearr_33956_34580 = state_33946;
(statearr_33956_34580[(1)] = cljs.core.first((state_33946[(4)])));

} else {
throw ex__30762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34581 = state_33946;
state_33946 = G__34581;
continue;
} else {
return ret_value__30760__auto__;
}
break;
}
});
shadow$dom$state_machine__30759__auto__ = function(state_33946){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30759__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30759__auto____1.call(this,state_33946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30759__auto____0;
shadow$dom$state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30759__auto____1;
return shadow$dom$state_machine__30759__auto__;
})()
})();
var state__30932__auto__ = (function (){var statearr_33965 = f__30931__auto__();
(statearr_33965[(6)] = c__30930__auto___34565);

return statearr_33965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30932__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
