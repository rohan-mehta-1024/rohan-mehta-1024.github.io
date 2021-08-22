goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
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
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__37489){
var map__37490 = p__37489;
var map__37490__$1 = (((((!((map__37490 == null))))?(((((map__37490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37490):map__37490);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37490__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37490__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37490__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37490__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__37492_37519 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__37493_37520 = null;
var count__37494_37521 = (0);
var i__37495_37522 = (0);
while(true){
if((i__37495_37522 < count__37494_37521)){
var vec__37506_37523 = chunk__37493_37520.cljs$core$IIndexed$_nth$arity$2(null,i__37495_37522);
var k_37524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37506_37523,(0),null);
var cb_37525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37506_37523,(1),null);
try{var G__37510_37526 = cljs.core.deref(re_frame.trace.traces);
(cb_37525.cljs$core$IFn$_invoke$arity$1 ? cb_37525.cljs$core$IFn$_invoke$arity$1(G__37510_37526) : cb_37525.call(null,G__37510_37526));
}catch (e37509){var e_37531 = e37509;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_37524,"while storing",cljs.core.deref(re_frame.trace.traces),e_37531], 0));
}

var G__37535 = seq__37492_37519;
var G__37536 = chunk__37493_37520;
var G__37537 = count__37494_37521;
var G__37538 = (i__37495_37522 + (1));
seq__37492_37519 = G__37535;
chunk__37493_37520 = G__37536;
count__37494_37521 = G__37537;
i__37495_37522 = G__37538;
continue;
} else {
var temp__5735__auto___37539 = cljs.core.seq(seq__37492_37519);
if(temp__5735__auto___37539){
var seq__37492_37540__$1 = temp__5735__auto___37539;
if(cljs.core.chunked_seq_QMARK_(seq__37492_37540__$1)){
var c__4556__auto___37541 = cljs.core.chunk_first(seq__37492_37540__$1);
var G__37542 = cljs.core.chunk_rest(seq__37492_37540__$1);
var G__37543 = c__4556__auto___37541;
var G__37544 = cljs.core.count(c__4556__auto___37541);
var G__37545 = (0);
seq__37492_37519 = G__37542;
chunk__37493_37520 = G__37543;
count__37494_37521 = G__37544;
i__37495_37522 = G__37545;
continue;
} else {
var vec__37511_37546 = cljs.core.first(seq__37492_37540__$1);
var k_37547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37511_37546,(0),null);
var cb_37548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37511_37546,(1),null);
try{var G__37515_37552 = cljs.core.deref(re_frame.trace.traces);
(cb_37548.cljs$core$IFn$_invoke$arity$1 ? cb_37548.cljs$core$IFn$_invoke$arity$1(G__37515_37552) : cb_37548.call(null,G__37515_37552));
}catch (e37514){var e_37553 = e37514;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_37547,"while storing",cljs.core.deref(re_frame.trace.traces),e_37553], 0));
}

var G__37555 = cljs.core.next(seq__37492_37540__$1);
var G__37556 = null;
var G__37557 = (0);
var G__37558 = (0);
seq__37492_37519 = G__37555;
chunk__37493_37520 = G__37556;
count__37494_37521 = G__37557;
i__37495_37522 = G__37558;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
