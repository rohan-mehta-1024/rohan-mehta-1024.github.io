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
var _STAR_current_trace_STAR__orig_val__12568 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__12569 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__12569);

try{try{var seq__12570 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__12571 = null;
var count__12572 = (0);
var i__12573 = (0);
while(true){
if((i__12573 < count__12572)){
var vec__12580 = cljs.core._nth.call(null,chunk__12571,i__12573);
var effect_key = cljs.core.nth.call(null,vec__12580,(0),null);
var effect_value = cljs.core.nth.call(null,vec__12580,(1),null);
var temp__5455__auto___12602 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12602)){
var effect_fn_12603 = temp__5455__auto___12602;
effect_fn_12603.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__12604 = seq__12570;
var G__12605 = chunk__12571;
var G__12606 = count__12572;
var G__12607 = (i__12573 + (1));
seq__12570 = G__12604;
chunk__12571 = G__12605;
count__12572 = G__12606;
i__12573 = G__12607;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__12570);
if(temp__5457__auto__){
var seq__12570__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12570__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__12570__$1);
var G__12608 = cljs.core.chunk_rest.call(null,seq__12570__$1);
var G__12609 = c__4556__auto__;
var G__12610 = cljs.core.count.call(null,c__4556__auto__);
var G__12611 = (0);
seq__12570 = G__12608;
chunk__12571 = G__12609;
count__12572 = G__12610;
i__12573 = G__12611;
continue;
} else {
var vec__12583 = cljs.core.first.call(null,seq__12570__$1);
var effect_key = cljs.core.nth.call(null,vec__12583,(0),null);
var effect_value = cljs.core.nth.call(null,vec__12583,(1),null);
var temp__5455__auto___12612 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12612)){
var effect_fn_12613 = temp__5455__auto___12612;
effect_fn_12613.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__12614 = cljs.core.next.call(null,seq__12570__$1);
var G__12615 = null;
var G__12616 = (0);
var G__12617 = (0);
seq__12570 = G__12614;
chunk__12571 = G__12615;
count__12572 = G__12616;
i__12573 = G__12617;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__9249__auto___12618 = re_frame.interop.now.call(null);
var duration__9250__auto___12619 = (end__9249__auto___12618 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__9250__auto___12619,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__9249__auto___12618);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__12568);
}} else {
var seq__12586 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__12587 = null;
var count__12588 = (0);
var i__12589 = (0);
while(true){
if((i__12589 < count__12588)){
var vec__12596 = cljs.core._nth.call(null,chunk__12587,i__12589);
var effect_key = cljs.core.nth.call(null,vec__12596,(0),null);
var effect_value = cljs.core.nth.call(null,vec__12596,(1),null);
var temp__5455__auto___12620 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12620)){
var effect_fn_12621 = temp__5455__auto___12620;
effect_fn_12621.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__12622 = seq__12586;
var G__12623 = chunk__12587;
var G__12624 = count__12588;
var G__12625 = (i__12589 + (1));
seq__12586 = G__12622;
chunk__12587 = G__12623;
count__12588 = G__12624;
i__12589 = G__12625;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__12586);
if(temp__5457__auto__){
var seq__12586__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12586__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__12586__$1);
var G__12626 = cljs.core.chunk_rest.call(null,seq__12586__$1);
var G__12627 = c__4556__auto__;
var G__12628 = cljs.core.count.call(null,c__4556__auto__);
var G__12629 = (0);
seq__12586 = G__12626;
chunk__12587 = G__12627;
count__12588 = G__12628;
i__12589 = G__12629;
continue;
} else {
var vec__12599 = cljs.core.first.call(null,seq__12586__$1);
var effect_key = cljs.core.nth.call(null,vec__12599,(0),null);
var effect_value = cljs.core.nth.call(null,vec__12599,(1),null);
var temp__5455__auto___12630 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___12630)){
var effect_fn_12631 = temp__5455__auto___12630;
effect_fn_12631.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__12632 = cljs.core.next.call(null,seq__12586__$1);
var G__12633 = null;
var G__12634 = (0);
var G__12635 = (0);
seq__12586 = G__12632;
chunk__12587 = G__12633;
count__12588 = G__12634;
i__12589 = G__12635;
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
var seq__12636 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__12637 = null;
var count__12638 = (0);
var i__12639 = (0);
while(true){
if((i__12639 < count__12638)){
var map__12644 = cljs.core._nth.call(null,chunk__12637,i__12639);
var map__12644__$1 = (((((!((map__12644 == null))))?(((((map__12644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12644):map__12644);
var effect = map__12644__$1;
var ms = cljs.core.get.call(null,map__12644__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__12644__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__12636,chunk__12637,count__12638,i__12639,map__12644,map__12644__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__12636,chunk__12637,count__12638,i__12639,map__12644,map__12644__$1,effect,ms,dispatch))
,ms);
}


var G__12648 = seq__12636;
var G__12649 = chunk__12637;
var G__12650 = count__12638;
var G__12651 = (i__12639 + (1));
seq__12636 = G__12648;
chunk__12637 = G__12649;
count__12638 = G__12650;
i__12639 = G__12651;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__12636);
if(temp__5457__auto__){
var seq__12636__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12636__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__12636__$1);
var G__12652 = cljs.core.chunk_rest.call(null,seq__12636__$1);
var G__12653 = c__4556__auto__;
var G__12654 = cljs.core.count.call(null,c__4556__auto__);
var G__12655 = (0);
seq__12636 = G__12652;
chunk__12637 = G__12653;
count__12638 = G__12654;
i__12639 = G__12655;
continue;
} else {
var map__12646 = cljs.core.first.call(null,seq__12636__$1);
var map__12646__$1 = (((((!((map__12646 == null))))?(((((map__12646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12646):map__12646);
var effect = map__12646__$1;
var ms = cljs.core.get.call(null,map__12646__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__12646__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__12636,chunk__12637,count__12638,i__12639,map__12646,map__12646__$1,effect,ms,dispatch,seq__12636__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__12636,chunk__12637,count__12638,i__12639,map__12646,map__12646__$1,effect,ms,dispatch,seq__12636__$1,temp__5457__auto__))
,ms);
}


var G__12656 = cljs.core.next.call(null,seq__12636__$1);
var G__12657 = null;
var G__12658 = (0);
var G__12659 = (0);
seq__12636 = G__12656;
chunk__12637 = G__12657;
count__12638 = G__12658;
i__12639 = G__12659;
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
var seq__12660 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__12661 = null;
var count__12662 = (0);
var i__12663 = (0);
while(true){
if((i__12663 < count__12662)){
var event = cljs.core._nth.call(null,chunk__12661,i__12663);
re_frame.router.dispatch.call(null,event);


var G__12664 = seq__12660;
var G__12665 = chunk__12661;
var G__12666 = count__12662;
var G__12667 = (i__12663 + (1));
seq__12660 = G__12664;
chunk__12661 = G__12665;
count__12662 = G__12666;
i__12663 = G__12667;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__12660);
if(temp__5457__auto__){
var seq__12660__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12660__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__12660__$1);
var G__12668 = cljs.core.chunk_rest.call(null,seq__12660__$1);
var G__12669 = c__4556__auto__;
var G__12670 = cljs.core.count.call(null,c__4556__auto__);
var G__12671 = (0);
seq__12660 = G__12668;
chunk__12661 = G__12669;
count__12662 = G__12670;
i__12663 = G__12671;
continue;
} else {
var event = cljs.core.first.call(null,seq__12660__$1);
re_frame.router.dispatch.call(null,event);


var G__12672 = cljs.core.next.call(null,seq__12660__$1);
var G__12673 = null;
var G__12674 = (0);
var G__12675 = (0);
seq__12660 = G__12672;
chunk__12661 = G__12673;
count__12662 = G__12674;
i__12663 = G__12675;
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
var seq__12676 = cljs.core.seq.call(null,value);
var chunk__12677 = null;
var count__12678 = (0);
var i__12679 = (0);
while(true){
if((i__12679 < count__12678)){
var event = cljs.core._nth.call(null,chunk__12677,i__12679);
clear_event.call(null,event);


var G__12680 = seq__12676;
var G__12681 = chunk__12677;
var G__12682 = count__12678;
var G__12683 = (i__12679 + (1));
seq__12676 = G__12680;
chunk__12677 = G__12681;
count__12678 = G__12682;
i__12679 = G__12683;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__12676);
if(temp__5457__auto__){
var seq__12676__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12676__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__12676__$1);
var G__12684 = cljs.core.chunk_rest.call(null,seq__12676__$1);
var G__12685 = c__4556__auto__;
var G__12686 = cljs.core.count.call(null,c__4556__auto__);
var G__12687 = (0);
seq__12676 = G__12684;
chunk__12677 = G__12685;
count__12678 = G__12686;
i__12679 = G__12687;
continue;
} else {
var event = cljs.core.first.call(null,seq__12676__$1);
clear_event.call(null,event);


var G__12688 = cljs.core.next.call(null,seq__12676__$1);
var G__12689 = null;
var G__12690 = (0);
var G__12691 = (0);
seq__12676 = G__12688;
chunk__12677 = G__12689;
count__12678 = G__12690;
i__12679 = G__12691;
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
