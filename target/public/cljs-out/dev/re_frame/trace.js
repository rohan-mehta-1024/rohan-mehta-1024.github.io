// Compiled by ClojureScript 1.10.773 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__9271){
var map__9272 = p__9271;
var map__9272__$1 = (((((!((map__9272 == null))))?(((((map__9272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9272):map__9272);
var operation = cljs.core.get.call(null,map__9272__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__9272__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__9272__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__9272__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__9274_9294 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__9275_9295 = null;
var count__9276_9296 = (0);
var i__9277_9297 = (0);
while(true){
if((i__9277_9297 < count__9276_9296)){
var vec__9286_9298 = cljs.core._nth.call(null,chunk__9275_9295,i__9277_9297);
var k_9299 = cljs.core.nth.call(null,vec__9286_9298,(0),null);
var cb_9300 = cljs.core.nth.call(null,vec__9286_9298,(1),null);
try{cb_9300.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e9289){var e_9301 = e9289;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_9299,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_9301);
}

var G__9302 = seq__9274_9294;
var G__9303 = chunk__9275_9295;
var G__9304 = count__9276_9296;
var G__9305 = (i__9277_9297 + (1));
seq__9274_9294 = G__9302;
chunk__9275_9295 = G__9303;
count__9276_9296 = G__9304;
i__9277_9297 = G__9305;
continue;
} else {
var temp__5457__auto___9306 = cljs.core.seq.call(null,seq__9274_9294);
if(temp__5457__auto___9306){
var seq__9274_9307__$1 = temp__5457__auto___9306;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9274_9307__$1)){
var c__4556__auto___9308 = cljs.core.chunk_first.call(null,seq__9274_9307__$1);
var G__9309 = cljs.core.chunk_rest.call(null,seq__9274_9307__$1);
var G__9310 = c__4556__auto___9308;
var G__9311 = cljs.core.count.call(null,c__4556__auto___9308);
var G__9312 = (0);
seq__9274_9294 = G__9309;
chunk__9275_9295 = G__9310;
count__9276_9296 = G__9311;
i__9277_9297 = G__9312;
continue;
} else {
var vec__9290_9313 = cljs.core.first.call(null,seq__9274_9307__$1);
var k_9314 = cljs.core.nth.call(null,vec__9290_9313,(0),null);
var cb_9315 = cljs.core.nth.call(null,vec__9290_9313,(1),null);
try{cb_9315.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e9293){var e_9316 = e9293;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_9314,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_9316);
}

var G__9317 = cljs.core.next.call(null,seq__9274_9307__$1);
var G__9318 = null;
var G__9319 = (0);
var G__9320 = (0);
seq__9274_9294 = G__9317;
chunk__9275_9295 = G__9318;
count__9276_9296 = G__9319;
i__9277_9297 = G__9320;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map
