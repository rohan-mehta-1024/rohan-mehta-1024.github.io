goog.provide('kee_frame.scroll');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kee-frame.scroll","connection-balance","kee-frame.scroll/connection-balance",2106148751),(function (db,p__39989){
var vec__39990 = p__39989;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39990,(0),null);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39990,(1),null);
var inc_or_dec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39990,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-counter","route-counter",-2049314649),new cljs.core.Keyword(null,"route","route",329891309)], null),route),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-counter","route-counter",-2049314649),new cljs.core.Keyword(null,"balance","balance",418967409)], null),inc_or_dec);
}));
kee_frame.scroll.start_BANG_ = (function kee_frame$scroll$start_BANG_(){
return clerk.core.initialize_BANG_();
});
kee_frame.scroll.monitor_requests_BANG_ = (function kee_frame$scroll$monitor_requests_BANG_(route){
clerk.core.navigate_page_BANG_(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(route));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ajax.core.default_interceptors,(function (interceptors){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__39993_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("route-interceptor",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__39993_SHARP_));
}),interceptors),(function (){var G__39997 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"route-interceptor",new cljs.core.Keyword(null,"request","request",1772954723),(function (request){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.scroll","connection-balance","kee-frame.scroll/connection-balance",2106148751),route,cljs.core.inc], null));

return request;
}),new cljs.core.Keyword(null,"response","response",-1068424192),(function (response){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.scroll","connection-balance","kee-frame.scroll/connection-balance",2106148751),route,cljs.core.dec], null));

return response;
})], null);
return (ajax.core.to_interceptor.cljs$core$IFn$_invoke$arity$1 ? ajax.core.to_interceptor.cljs$core$IFn$_invoke$arity$1(G__39997) : ajax.core.to_interceptor.call(null,G__39997));
})());
}));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kee-frame.scroll","scroll","kee-frame.scroll/scroll",-1666611933),(function (_,___$1){
reagent.core.after_render(clerk.core.after_render_BANG_);

return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kee-frame.scroll","poll","kee-frame.scroll/poll",-1227808225),(function (p__39998,p__39999){
var map__40000 = p__39998;
var map__40000__$1 = (((((!((map__40000 == null))))?(((((map__40000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40000):map__40000);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40000__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__40001 = p__39999;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40001,(0),null);
var active_route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40001,(1),null);
var counter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40001,(2),null);
var map__40005 = new cljs.core.Keyword(null,"route-counter","route-counter",-2049314649).cljs$core$IFn$_invoke$arity$1(db);
var map__40005__$1 = (((((!((map__40005 == null))))?(((((map__40005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40005):map__40005);
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40005__$1,new cljs.core.Keyword(null,"route","route",329891309));
var balance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40005__$1,new cljs.core.Keyword(null,"balance","balance",418967409));
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
