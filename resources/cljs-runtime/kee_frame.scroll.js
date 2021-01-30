goog.provide('kee_frame.scroll');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kee-frame.scroll","connection-balance","kee-frame.scroll/connection-balance",2106148751),(function (db,p__40014){
var vec__40015 = p__40014;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40015,(0),null);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40015,(1),null);
var inc_or_dec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40015,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-counter","route-counter",-2049314649),new cljs.core.Keyword(null,"route","route",329891309)], null),route),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-counter","route-counter",-2049314649),new cljs.core.Keyword(null,"balance","balance",418967409)], null),inc_or_dec);
}));
kee_frame.scroll.start_BANG_ = (function kee_frame$scroll$start_BANG_(){
return clerk.core.initialize_BANG_();
});
kee_frame.scroll.monitor_requests_BANG_ = (function kee_frame$scroll$monitor_requests_BANG_(route){
clerk.core.navigate_page_BANG_(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(route));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ajax.core.default_interceptors,(function (interceptors){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__40018_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("route-interceptor",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__40018_SHARP_));
}),interceptors),(function (){var G__40019 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"route-interceptor",new cljs.core.Keyword(null,"request","request",1772954723),(function (request){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.scroll","connection-balance","kee-frame.scroll/connection-balance",2106148751),route,cljs.core.inc], null));

return request;
}),new cljs.core.Keyword(null,"response","response",-1068424192),(function (response){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.scroll","connection-balance","kee-frame.scroll/connection-balance",2106148751),route,cljs.core.dec], null));

return response;
})], null);
return (ajax.core.to_interceptor.cljs$core$IFn$_invoke$arity$1 ? ajax.core.to_interceptor.cljs$core$IFn$_invoke$arity$1(G__40019) : ajax.core.to_interceptor.call(null,G__40019));
})());
}));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kee-frame.scroll","scroll","kee-frame.scroll/scroll",-1666611933),(function (_,___$1){
reagent.core.after_render(clerk.core.after_render_BANG_);

return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kee-frame.scroll","poll","kee-frame.scroll/poll",-1227808225),(function (p__40027,p__40028){
var map__40029 = p__40027;
var map__40029__$1 = (((((!((map__40029 == null))))?(((((map__40029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40029):map__40029);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40029__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40030 = p__40028;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40030,(0),null);
var active_route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40030,(1),null);
var counter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40030,(2),null);
var map__40034 = new cljs.core.Keyword(null,"route-counter","route-counter",-2049314649).cljs$core$IFn$_invoke$arity$1(db);
var map__40034__$1 = (((((!((map__40034 == null))))?(((((map__40034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40034):map__40034);
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40034__$1,new cljs.core.Keyword(null,"route","route",329891309));
var balance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40034__$1,new cljs.core.Keyword(null,"balance","balance",418967409));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route,active_route)){
if((!((balance > (0))))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.scroll","scroll","kee-frame.scroll/scroll",-1666611933)], null)], null);
} else {
if((balance > (0))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(50),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.scroll","poll","kee-frame.scroll/poll",-1227808225),active_route,(counter + (1))], null)], null)], null)], null);
} else {
if(((20) < counter)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"route-counter","route-counter",-2049314649),null)], null);
} else {
return null;
}
}
}
} else {
return null;
}
}));

//# sourceMappingURL=kee_frame.scroll.js.map
