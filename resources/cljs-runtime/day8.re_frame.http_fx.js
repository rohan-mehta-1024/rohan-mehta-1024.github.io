goog.provide('day8.re_frame.http_fx');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__38486){
var vec__38487 = p__38486;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38487,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38487,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__38495){
var map__38496 = p__38495;
var map__38496__$1 = (((((!((map__38496 == null))))?(((((map__38496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38496):map__38496);
var request = map__38496__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38496__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38496__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"api","api",-899839580),api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__38493_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__38493_SHARP_));
}),(function (p1__38494_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__38494_SHARP_));
}),api)], 0)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-failure","on-failure",842888245)], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__38502 = cljs.core.seq(seq_request_maps);
var chunk__38503 = null;
var count__38504 = (0);
var i__38505 = (0);
while(true){
if((i__38505 < count__38504)){
var request__$1 = chunk__38503.cljs$core$IIndexed$_nth$arity$2(null,i__38505);
var G__38512_38524 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__38512_38524) : ajax.core.ajax_request.call(null,G__38512_38524));


var G__38525 = seq__38502;
var G__38526 = chunk__38503;
var G__38527 = count__38504;
var G__38528 = (i__38505 + (1));
seq__38502 = G__38525;
chunk__38503 = G__38526;
count__38504 = G__38527;
i__38505 = G__38528;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38502);
if(temp__5735__auto__){
var seq__38502__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38502__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38502__$1);
var G__38529 = cljs.core.chunk_rest(seq__38502__$1);
var G__38530 = c__4556__auto__;
var G__38531 = cljs.core.count(c__4556__auto__);
var G__38532 = (0);
seq__38502 = G__38529;
chunk__38503 = G__38530;
count__38504 = G__38531;
i__38505 = G__38532;
continue;
} else {
var request__$1 = cljs.core.first(seq__38502__$1);
var G__38513_38533 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__38513_38533) : ajax.core.ajax_request.call(null,G__38513_38533));


var G__38534 = cljs.core.next(seq__38502__$1);
var G__38535 = null;
var G__38536 = (0);
var G__38537 = (0);
seq__38502 = G__38534;
chunk__38503 = G__38535;
count__38504 = G__38536;
i__38505 = G__38537;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect);

//# sourceMappingURL=day8.re_frame.http_fx.js.map
