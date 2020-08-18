// Compiled by ClojureScript 1.10.773 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__9360 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__9361 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__9361);

try{try{var seq__9362 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__9363 = null;
var count__9364 = (0);
var i__9365 = (0);
while(true){
if((i__9365 < count__9364)){
var vec__9372 = cljs.core._nth.call(null,chunk__9363,i__9365);
var effect_key = cljs.core.nth.call(null,vec__9372,(0),null);
var effect_value = cljs.core.nth.call(null,vec__9372,(1),null);
var temp__5455__auto___9394 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___9394)){
var effect_fn_9395 = temp__5455__auto___9394;
effect_fn_9395.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__9396 = seq__9362;
var G__9397 = chunk__9363;
var G__9398 = count__9364;
var G__9399 = (i__9365 + (1));
seq__9362 = G__9396;
chunk__9363 = G__9397;
count__9364 = G__9398;
i__9365 = G__9399;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__9362);
if(temp__5457__auto__){
var seq__9362__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9362__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__9362__$1);
var G__9400 = cljs.core.chunk_rest.call(null,seq__9362__$1);
var G__9401 = c__4556__auto__;
var G__9402 = cljs.core.count.call(null,c__4556__auto__);
var G__9403 = (0);
seq__9362 = G__9400;
chunk__9363 = G__9401;
count__9364 = G__9402;
i__9365 = G__9403;
continue;
} else {
var vec__9375 = cljs.core.first.call(null,seq__9362__$1);
var effect_key = cljs.core.nth.call(null,vec__9375,(0),null);
var effect_value = cljs.core.nth.call(null,vec__9375,(1),null);
var temp__5455__auto___9404 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___9404)){
var effect_fn_9405 = temp__5455__auto___9404;
effect_fn_9405.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__9406 = cljs.core.next.call(null,seq__9362__$1);
var G__9407 = null;
var G__9408 = (0);
var G__9409 = (0);
seq__9362 = G__9406;
chunk__9363 = G__9407;
count__9364 = G__9408;
i__9365 = G__9409;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__9150__auto___9410 = re_frame.interop.now.call(null);
var duration__9151__auto___9411 = (end__9150__auto___9410 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__9151__auto___9411,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__9150__auto___9410);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__9360);
}} else {
var seq__9378 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__9379 = null;
var count__9380 = (0);
var i__9381 = (0);
while(true){
if((i__9381 < count__9380)){
var vec__9388 = cljs.core._nth.call(null,chunk__9379,i__9381);
var effect_key = cljs.core.nth.call(null,vec__9388,(0),null);
var effect_value = cljs.core.nth.call(null,vec__9388,(1),null);
var temp__5455__auto___9412 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___9412)){
var effect_fn_9413 = temp__5455__auto___9412;
effect_fn_9413.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__9414 = seq__9378;
var G__9415 = chunk__9379;
var G__9416 = count__9380;
var G__9417 = (i__9381 + (1));
seq__9378 = G__9414;
chunk__9379 = G__9415;
count__9380 = G__9416;
i__9381 = G__9417;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__9378);
if(temp__5457__auto__){
var seq__9378__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9378__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__9378__$1);
var G__9418 = cljs.core.chunk_rest.call(null,seq__9378__$1);
var G__9419 = c__4556__auto__;
var G__9420 = cljs.core.count.call(null,c__4556__auto__);
var G__9421 = (0);
seq__9378 = G__9418;
chunk__9379 = G__9419;
count__9380 = G__9420;
i__9381 = G__9421;
continue;
} else {
var vec__9391 = cljs.core.first.call(null,seq__9378__$1);
var effect_key = cljs.core.nth.call(null,vec__9391,(0),null);
var effect_value = cljs.core.nth.call(null,vec__9391,(1),null);
var temp__5455__auto___9422 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___9422)){
var effect_fn_9423 = temp__5455__auto___9422;
effect_fn_9423.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__9424 = cljs.core.next.call(null,seq__9378__$1);
var G__9425 = null;
var G__9426 = (0);
var G__9427 = (0);
seq__9378 = G__9424;
chunk__9379 = G__9425;
count__9380 = G__9426;
i__9381 = G__9427;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__9428 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__9429 = null;
var count__9430 = (0);
var i__9431 = (0);
while(true){
if((i__9431 < count__9430)){
var map__9436 = cljs.core._nth.call(null,chunk__9429,i__9431);
var map__9436__$1 = (((((!((map__9436 == null))))?(((((map__9436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9436):map__9436);
var effect = map__9436__$1;
var ms = cljs.core.get.call(null,map__9436__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__9436__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__9428,chunk__9429,count__9430,i__9431,map__9436,map__9436__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__9428,chunk__9429,count__9430,i__9431,map__9436,map__9436__$1,effect,ms,dispatch))
,ms);
}


var G__9440 = seq__9428;
var G__9441 = chunk__9429;
var G__9442 = count__9430;
var G__9443 = (i__9431 + (1));
seq__9428 = G__9440;
chunk__9429 = G__9441;
count__9430 = G__9442;
i__9431 = G__9443;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__9428);
if(temp__5457__auto__){
var seq__9428__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9428__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__9428__$1);
var G__9444 = cljs.core.chunk_rest.call(null,seq__9428__$1);
var G__9445 = c__4556__auto__;
var G__9446 = cljs.core.count.call(null,c__4556__auto__);
var G__9447 = (0);
seq__9428 = G__9444;
chunk__9429 = G__9445;
count__9430 = G__9446;
i__9431 = G__9447;
continue;
} else {
var map__9438 = cljs.core.first.call(null,seq__9428__$1);
var map__9438__$1 = (((((!((map__9438 == null))))?(((((map__9438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9438):map__9438);
var effect = map__9438__$1;
var ms = cljs.core.get.call(null,map__9438__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__9438__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__9428,chunk__9429,count__9430,i__9431,map__9438,map__9438__$1,effect,ms,dispatch,seq__9428__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__9428,chunk__9429,count__9430,i__9431,map__9438,map__9438__$1,effect,ms,dispatch,seq__9428__$1,temp__5457__auto__))
,ms);
}


var G__9448 = cljs.core.next.call(null,seq__9428__$1);
var G__9449 = null;
var G__9450 = (0);
var G__9451 = (0);
seq__9428 = G__9448;
chunk__9429 = G__9449;
count__9430 = G__9450;
i__9431 = G__9451;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__9452 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__9453 = null;
var count__9454 = (0);
var i__9455 = (0);
while(true){
if((i__9455 < count__9454)){
var event = cljs.core._nth.call(null,chunk__9453,i__9455);
re_frame.router.dispatch.call(null,event);


var G__9456 = seq__9452;
var G__9457 = chunk__9453;
var G__9458 = count__9454;
var G__9459 = (i__9455 + (1));
seq__9452 = G__9456;
chunk__9453 = G__9457;
count__9454 = G__9458;
i__9455 = G__9459;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__9452);
if(temp__5457__auto__){
var seq__9452__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9452__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__9452__$1);
var G__9460 = cljs.core.chunk_rest.call(null,seq__9452__$1);
var G__9461 = c__4556__auto__;
var G__9462 = cljs.core.count.call(null,c__4556__auto__);
var G__9463 = (0);
seq__9452 = G__9460;
chunk__9453 = G__9461;
count__9454 = G__9462;
i__9455 = G__9463;
continue;
} else {
var event = cljs.core.first.call(null,seq__9452__$1);
re_frame.router.dispatch.call(null,event);


var G__9464 = cljs.core.next.call(null,seq__9452__$1);
var G__9465 = null;
var G__9466 = (0);
var G__9467 = (0);
seq__9452 = G__9464;
chunk__9453 = G__9465;
count__9454 = G__9466;
i__9455 = G__9467;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__9468 = cljs.core.seq.call(null,value);
var chunk__9469 = null;
var count__9470 = (0);
var i__9471 = (0);
while(true){
if((i__9471 < count__9470)){
var event = cljs.core._nth.call(null,chunk__9469,i__9471);
clear_event.call(null,event);


var G__9472 = seq__9468;
var G__9473 = chunk__9469;
var G__9474 = count__9470;
var G__9475 = (i__9471 + (1));
seq__9468 = G__9472;
chunk__9469 = G__9473;
count__9470 = G__9474;
i__9471 = G__9475;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__9468);
if(temp__5457__auto__){
var seq__9468__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9468__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__9468__$1);
var G__9476 = cljs.core.chunk_rest.call(null,seq__9468__$1);
var G__9477 = c__4556__auto__;
var G__9478 = cljs.core.count.call(null,c__4556__auto__);
var G__9479 = (0);
seq__9468 = G__9476;
chunk__9469 = G__9477;
count__9470 = G__9478;
i__9471 = G__9479;
continue;
} else {
var event = cljs.core.first.call(null,seq__9468__$1);
clear_event.call(null,event);


var G__9480 = cljs.core.next.call(null,seq__9468__$1);
var G__9481 = null;
var G__9482 = (0);
var G__9483 = (0);
seq__9468 = G__9480;
chunk__9469 = G__9481;
count__9470 = G__9482;
i__9471 = G__9483;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
