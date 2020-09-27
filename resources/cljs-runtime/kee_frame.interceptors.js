goog.provide('kee_frame.interceptors');
kee_frame.interceptors.reg_global_interceptor = (function kee_frame$interceptors$reg_global_interceptor(id,interceptor){
return re_frame.registrar.register_handler(new cljs.core.Keyword(null,"global-interceptor","global-interceptor",1898048158),id,interceptor);
});
kee_frame.interceptors.clear_global_interceptor = (function kee_frame$interceptors$clear_global_interceptor(id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(re_frame.registrar.kind__GT_id__GT_handler,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global-interceptor","global-interceptor",1898048158)], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
});
/**
 * Adds global interceptors to the beginning of queue.
 */
kee_frame.interceptors.add_global_interceptors = (function (){var cut_in_queue = (function kee_frame$interceptors$cut_in_queue(queue,xs){
var q = cljs.core.empty(queue);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(q,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(xs,queue));
});
var add_global_interceptors_STAR_ = (function kee_frame$interceptors$add_global_interceptors_STAR_(context){
var globals = cljs.core.vals(re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"global-interceptor","global-interceptor",1898048158)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"queue","queue",1455835879),cut_in_queue,globals);
});
return re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"add-global-interceptors","add-global-interceptors",1649810258),new cljs.core.Keyword(null,"before","before",-1633692388),add_global_interceptors_STAR_], 0));
})();

//# sourceMappingURL=kee_frame.interceptors.js.map
