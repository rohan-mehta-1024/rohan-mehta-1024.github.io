goog.provide('re_frame.std_interceptors');
re_frame.std_interceptors.debug = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"before","before",-1633692388),(function re_frame$std_interceptors$debug_before(context){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Handling re-frame event:",re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442))], 0));

return context;
}),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$std_interceptors$debug_after(context){
var event = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442));
var orig_db = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759));
var new_db = re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword("re-frame.std-interceptors","not-found","re-frame.std-interceptors/not-found",-1614827865));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_db,new cljs.core.Keyword("re-frame.std-interceptors","not-found","re-frame.std-interceptors/not-found",-1614827865))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No app-db changes in:",event], 0));
} else {
var vec__37688_37888 = clojure.data.diff(orig_db,new_db);
var only_before_37889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37688_37888,(0),null);
var only_after_37890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37688_37888,(1),null);
var db_changed_QMARK__37891 = (((!((only_before_37889 == null)))) || ((!((only_after_37890 == null)))));
if(db_changed_QMARK__37891){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"group","group",582596132),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["db clojure.data/diff for:",event], 0));

re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["only before:",only_before_37889], 0));

re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["only after :",only_after_37890], 0));

re_frame.loggers.console(new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No app-db changes resulted from:",event], 0));
}
}

return context;
})], 0));
re_frame.std_interceptors.trim_v = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"trim-v","trim-v",-1274938640),new cljs.core.Keyword(null,"before","before",-1633692388),(function re_frame$std_interceptors$trimv_before(context){
return re_frame.interceptor.assoc_coeffect(re_frame.interceptor.update_coeffect.cljs$core$IFn$_invoke$arity$variadic(context,new cljs.core.Keyword(null,"event","event",301435442),cljs.core.subvec,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1)], 0)),new cljs.core.Keyword("re-frame.std-interceptors","untrimmed-event","re-frame.std-interceptors/untrimmed-event",-840935075),re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442)));
}),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$std_interceptors$trimv_after(context){
return re_frame.interceptor.assoc_coeffect(re_frame.utils.dissoc_in(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword("re-frame.std-interceptors","untrimmed-event","re-frame.std-interceptors/untrimmed-event",-840935075)], null)),new cljs.core.Keyword(null,"event","event",301435442),re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword("re-frame.std-interceptors","untrimmed-event","re-frame.std-interceptors/untrimmed-event",-840935075)));
})], 0));
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-db`.
 * 
 *   These handlers take two arguments;  `db` and `event`, and they return `db`.
 * 
 *    (fn [db event]
 *       ....)
 * 
 *   So, the interceptor wraps the given handler:
 *   1. extracts two `:coeffects` keys: db and event
 *   2. calls handler-fn
 *   3. stores the db result back into context's `:effects`
 */
re_frame.std_interceptors.db_handler__GT_interceptor = (function re_frame$std_interceptors$db_handler__GT_interceptor(handler_fn){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"db-handler","db-handler",579530098),new cljs.core.Keyword(null,"before","before",-1633692388),(function re_frame$std_interceptors$db_handler__GT_interceptor_$_db_handler_before(context){
var new_context = ((re_frame.trace.is_trace_enabled_QMARK_())?(function (){var _STAR_current_trace_STAR__orig_val__37701 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__37702 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","handler","event/handler",-295903150),new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442))], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__37702);

try{try{var map__37706 = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context);
var map__37706__$1 = (((((!((map__37706 == null))))?(((((map__37706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37706):map__37706);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37706__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37706__$1,new cljs.core.Keyword(null,"event","event",301435442));
return re_frame.interceptor.assoc_effect(context,new cljs.core.Keyword(null,"db","db",993250759),(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(db,event) : handler_fn.call(null,db,event)));
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__37421__auto___37893 = re_frame.interop.now();
var duration__37422__auto___37894 = (end__37421__auto___37893 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__37422__auto___37894,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__37421__auto___37893);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__37701);
}})():(function (){var map__37711 = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context);
var map__37711__$1 = (((((!((map__37711 == null))))?(((((map__37711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37711):map__37711);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37711__$1,new cljs.core.Keyword(null,"db","db",993250759));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37711__$1,new cljs.core.Keyword(null,"event","event",301435442));
return re_frame.interceptor.assoc_effect(context,new cljs.core.Keyword(null,"db","db",993250759),(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(db,event) : handler_fn.call(null,db,event)));
})());
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__37423__auto___37909 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__37423__auto___37909);

} else {
}

return new_context;
})], 0));
});
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-fx`.
 * 
 *   These handlers take two arguments;  `coeffects` and `event`, and they return `effects`.
 * 
 *    (fn [coeffects event]
 *       {:db ...
 *        :dispatch ...})
 * 
 * Wrap handler in an interceptor so it can be added to (the RHS) of a chain:
 *   1. extracts `:coeffects`
 *   2. call handler-fn giving coeffects
 *   3. stores the result back into the `:effects`
 */
re_frame.std_interceptors.fx_handler__GT_interceptor = (function re_frame$std_interceptors$fx_handler__GT_interceptor(handler_fn){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"fx-handler","fx-handler",-549783097),new cljs.core.Keyword(null,"before","before",-1633692388),(function re_frame$std_interceptors$fx_handler__GT_interceptor_$_fx_handler_before(context){
var new_context = ((re_frame.trace.is_trace_enabled_QMARK_())?(function (){var _STAR_current_trace_STAR__orig_val__37768 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__37769 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","handler","event/handler",-295903150),new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442))], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__37769);

try{try{var map__37771 = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context);
var map__37771__$1 = (((((!((map__37771 == null))))?(((((map__37771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37771):map__37771);
var coeffects = map__37771__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37771__$1,new cljs.core.Keyword(null,"event","event",301435442));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"effects","effects",-282369292),(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(coeffects,event) : handler_fn.call(null,coeffects,event)));
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__37421__auto___37910 = re_frame.interop.now();
var duration__37422__auto___37911 = (end__37421__auto___37910 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__37422__auto___37911,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__37421__auto___37910);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__37768);
}})():(function (){var map__37778 = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context);
var map__37778__$1 = (((((!((map__37778 == null))))?(((((map__37778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37778):map__37778);
var coeffects = map__37778__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37778__$1,new cljs.core.Keyword(null,"event","event",301435442));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"effects","effects",-282369292),(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(coeffects,event) : handler_fn.call(null,coeffects,event)));
})());
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__37423__auto___37914 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__37423__auto___37914);

} else {
}

return new_context;
})], 0));
});
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-ctx`.
 *   These advanced handlers take one argument: `context` and they return a modified `context`.
 *   Example:
 * 
 *    (fn [context]
 *       (enqueue context [more interceptors]))
 */
re_frame.std_interceptors.ctx_handler__GT_interceptor = (function re_frame$std_interceptors$ctx_handler__GT_interceptor(handler_fn){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ctx-handler","ctx-handler",-1777672230),new cljs.core.Keyword(null,"before","before",-1633692388),(function re_frame$std_interceptors$ctx_handler__GT_interceptor_$_ctx_handler_before(context){
var new_context = ((re_frame.trace.is_trace_enabled_QMARK_())?(function (){var _STAR_current_trace_STAR__orig_val__37781 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__37782 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","handler","event/handler",-295903150),new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442))], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__37782);

try{try{return (handler_fn.cljs$core$IFn$_invoke$arity$1 ? handler_fn.cljs$core$IFn$_invoke$arity$1(context) : handler_fn.call(null,context));
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__37421__auto___37915 = re_frame.interop.now();
var duration__37422__auto___37916 = (end__37421__auto___37915 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__37422__auto___37916,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__37421__auto___37915);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__37781);
}})():(handler_fn.cljs$core$IFn$_invoke$arity$1 ? handler_fn.cljs$core$IFn$_invoke$arity$1(context) : handler_fn.call(null,context)));
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__37423__auto___37918 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__37423__auto___37918);

} else {
}

return new_context;
})], 0));
});
re_frame.std_interceptors.path = (function re_frame$std_interceptors$path(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37920 = arguments.length;
var i__4737__auto___37921 = (0);
while(true){
if((i__4737__auto___37921 < len__4736__auto___37920)){
args__4742__auto__.push((arguments[i__4737__auto___37921]));

var G__37922 = (i__4737__auto___37921 + (1));
i__4737__auto___37921 = G__37922;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_frame.std_interceptors.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_frame.std_interceptors.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var path = cljs.core.flatten(args);
var db_store_key = new cljs.core.Keyword("re-frame-path","db-store","re-frame-path/db-store",655758490);
if(cljs.core.empty_QMARK_(path)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \"path\" interceptor given no params"], 0));
} else {
}

return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
var original_db = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759));
return re_frame.interceptor.assoc_coeffect(cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,db_store_key,cljs.core.conj,original_db),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(original_db,path));
}),new cljs.core.Keyword(null,"after","after",594996914),(function (context){
var db_store = db_store_key.cljs$core$IFn$_invoke$arity$1(context);
var original_db = cljs.core.peek(db_store);
var new_db_store = cljs.core.pop(db_store);
var context_SINGLEQUOTE_ = re_frame.interceptor.assoc_coeffect(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,db_store_key,new_db_store),new cljs.core.Keyword(null,"db","db",993250759),original_db);
var db = re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword("re-frame.std-interceptors","not-found","re-frame.std-interceptors/not-found",-1614827865));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("re-frame.std-interceptors","not-found","re-frame.std-interceptors/not-found",-1614827865))){
return context_SINGLEQUOTE_;
} else {
return re_frame.interceptor.assoc_effect(context_SINGLEQUOTE_,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(original_db,path,db));
}
})], 0));
}));

(re_frame.std_interceptors.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.std_interceptors.path.cljs$lang$applyTo = (function (seq37826){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37826));
}));

re_frame.std_interceptors.enrich = (function re_frame$std_interceptors$enrich(f){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"enrich","enrich",-2108921925),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$std_interceptors$enrich_$_enrich_after(context){
var event = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442));
var db = ((cljs.core.contains_QMARK_(re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Keyword(null,"db","db",993250759)))?re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759)):re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759)));
return re_frame.interceptor.assoc_effect(context,new cljs.core.Keyword(null,"db","db",993250759),(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(db,event) : f.call(null,db,event)));
})], 0));
});
re_frame.std_interceptors.after = (function re_frame$std_interceptors$after(f){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$std_interceptors$after_$_after_after(context){
var db = ((cljs.core.contains_QMARK_(re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Keyword(null,"db","db",993250759)))?re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759)):re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759)));
var event = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(db,event) : f.call(null,db,event));

return context;
})], 0));
});
re_frame.std_interceptors.on_changes = (function re_frame$std_interceptors$on_changes(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37923 = arguments.length;
var i__4737__auto___37924 = (0);
while(true){
if((i__4737__auto___37924 < len__4736__auto___37923)){
args__4742__auto__.push((arguments[i__4737__auto___37924]));

var G__37929 = (i__4737__auto___37924 + (1));
i__4737__auto___37924 = G__37929;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return re_frame.std_interceptors.on_changes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(re_frame.std_interceptors.on_changes.cljs$core$IFn$_invoke$arity$variadic = (function (f,out_path,in_paths){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"on-changes","on-changes",1345912602),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$std_interceptors$on_change_after(context){
var new_db = re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759));
var old_db = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759));
var new_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37849_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_db,p1__37849_SHARP_);
}),in_paths);
var old_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37850_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_db,p1__37850_SHARP_);
}),in_paths);
var changed_ins_QMARK_ = ((cljs.core.contains_QMARK_(re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Keyword(null,"db","db",993250759)))?cljs.core.some(cljs.core.false_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.identical_QMARK_,new_ins,old_ins)):false);
if(cljs.core.truth_(changed_ins_QMARK_)){
return re_frame.interceptor.assoc_effect(context,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(new_db,out_path,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,new_ins)));
} else {
return context;
}
})], 0));
}));

(re_frame.std_interceptors.on_changes.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_frame.std_interceptors.on_changes.cljs$lang$applyTo = (function (seq37851){
var G__37852 = cljs.core.first(seq37851);
var seq37851__$1 = cljs.core.next(seq37851);
var G__37853 = cljs.core.first(seq37851__$1);
var seq37851__$2 = cljs.core.next(seq37851__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37852,G__37853,seq37851__$2);
}));

/**
 * An interceptor which adds registered global interceptors to the context's queue.
 * 
 * NOTE: :queue is a Clojure.lang.PersistentQueue and not a vector.
 */
re_frame.std_interceptors.inject_global_interceptors = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"inject-global-interceptors","inject-global-interceptors",-2144129737),new cljs.core.Keyword(null,"before","before",-1633692388),(function re_frame$std_interceptors$inject_global_interceptors_before(context){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"queue","queue",1455835879),(function (p1__37875_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(re_frame.settings.get_global_interceptors(),p1__37875_SHARP_);
}));
})], 0));

//# sourceMappingURL=re_frame.std_interceptors.js.map
