goog.provide('kee_frame.controller');
kee_frame.controller.process_params = (function kee_frame$controller$process_params(params,route){
if(cljs.core.vector_QMARK_(params)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route,params);
} else {
if(cljs.core.ifn_QMARK_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(route) : params.call(null,route));
} else {
return null;
}
}
});
kee_frame.controller.validate_and_dispatch_BANG_ = (function kee_frame$controller$validate_and_dispatch_BANG_(dispatch){
if(cljs.core.truth_(dispatch)){
if(cljs.core.map_QMARK_(dispatch)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.fsm.alpha","start","kee-frame.fsm.alpha/start",-1432048294),dispatch], null));
} else {
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kee-frame.spec","event-vector","kee-frame.spec/event-vector",-1240954896),dispatch)){
} else {
expound.alpha.expound.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kee-frame.spec","event-vector","kee-frame.spec/event-vector",-1240954896),dispatch);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid dispatch value",cljs.spec.alpha.explain_data(new cljs.core.Keyword("kee-frame.spec","event-vector","kee-frame.spec/event-vector",-1240954896),dispatch));
}

return re_frame.core.dispatch(dispatch);
}
} else {
return null;
}
});
kee_frame.controller.debug_enabled_QMARK_ = (function kee_frame$controller$debug_enabled_QMARK_(){
var map__41726 = cljs.core.deref(kee_frame.state.debug_config);
var map__41726__$1 = (((((!((map__41726 == null))))?(((((map__41726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41726):map__41726);
var controllers_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41726__$1,new cljs.core.Keyword(null,"controllers?","controllers?",-2009030071),true);
var and__4115__auto__ = cljs.core.deref(kee_frame.state.debug_QMARK_);
if(cljs.core.truth_(and__4115__auto__)){
return controllers_QMARK_;
} else {
return and__4115__auto__;
}
});
kee_frame.controller.start_BANG_ = (function kee_frame$controller$start_BANG_(id,ctx,start,params){
if(cljs.core.truth_(start)){
if(cljs.core.truth_(kee_frame.controller.debug_enabled_QMARK_())){
re_frame.core.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Starting controller ",id," with params ",params], 0));
} else {
}

if(cljs.core.vector_QMARK_(start)){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(start,params));
} else {
if(cljs.core.ifn_QMARK_(start)){
return kee_frame.controller.validate_and_dispatch_BANG_((start.cljs$core$IFn$_invoke$arity$2 ? start.cljs$core$IFn$_invoke$arity$2(ctx,params) : start.call(null,ctx,params)));
} else {
return null;
}
}
} else {
return null;
}
});
kee_frame.controller.stop_BANG_ = (function kee_frame$controller$stop_BANG_(id,ctx,stop){
if(cljs.core.truth_(stop)){
if(cljs.core.truth_(kee_frame.controller.debug_enabled_QMARK_())){
re_frame.core.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Stopping controller ",id], 0));
} else {
}

if(cljs.core.vector_QMARK_(stop)){
return re_frame.core.dispatch(stop);
} else {
if(cljs.core.ifn_QMARK_(stop)){
return kee_frame.controller.validate_and_dispatch_BANG_((stop.cljs$core$IFn$_invoke$arity$1 ? stop.cljs$core$IFn$_invoke$arity$1(ctx) : stop.call(null,ctx)));
} else {
return null;
}
}
} else {
return null;
}
});
kee_frame.controller.process_controller = (function kee_frame$controller$process_controller(id,p__41728,ctx,route){
var map__41729 = p__41728;
var map__41729__$1 = (((((!((map__41729 == null))))?(((((map__41729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41729):map__41729);
var last_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41729__$1,new cljs.core.Keyword(null,"last-params","last-params",1293824707));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41729__$1,new cljs.core.Keyword(null,"params","params",710516235));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41729__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41729__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var current_params = kee_frame.controller.process_params(params,route);
var last_params_41749__$1 = last_params;
var current_params_41750__$1 = current_params;
var ocr_41731_41751 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_params_41749__$1,current_params_41750__$1);
try{if((ocr_41731_41751 === true)){
} else {
throw cljs.core.match.backtrack;

}
}catch (e41741){if((e41741 instanceof Error)){
var e__40579__auto___41752 = e41741;
if((e__40579__auto___41752 === cljs.core.match.backtrack)){
try{if((ocr_41731_41751 === false)){
try{if((last_params_41749__$1 === null)){
kee_frame.controller.start_BANG_(id,ctx,start,current_params_41750__$1);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41743){if((e41743 instanceof Error)){
var e__40579__auto___41753__$1 = e41743;
if((e__40579__auto___41753__$1 === cljs.core.match.backtrack)){
try{if((current_params_41750__$1 === null)){
kee_frame.controller.stop_BANG_(id,ctx,stop);
} else {
throw cljs.core.match.backtrack;

}
}catch (e41744){if((e41744 instanceof Error)){
var e__40579__auto___41754__$2 = e41744;
if((e__40579__auto___41754__$2 === cljs.core.match.backtrack)){
kee_frame.controller.stop_BANG_(id,ctx,stop);

kee_frame.controller.start_BANG_(id,ctx,start,current_params_41750__$1);
} else {
throw e__40579__auto___41754__$2;
}
} else {
throw e41744;

}
}} else {
throw e__40579__auto___41753__$1;
}
} else {
throw e41743;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e41742){if((e41742 instanceof Error)){
var e__40579__auto___41755__$1 = e41742;
if((e__40579__auto___41755__$1 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_params_41749__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_params_41750__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_41731_41751)].join('')));
} else {
throw e__40579__auto___41755__$1;
}
} else {
throw e41742;

}
}} else {
throw e__40579__auto___41752;
}
} else {
throw e41741;

}
}
return current_params;
});
kee_frame.controller.apply_route = (function kee_frame$controller$apply_route(controllers,ctx,route){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41745){
var vec__41746 = p__41745;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41746,(0),null);
var controller = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41746,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword(null,"last-params","last-params",1293824707),kee_frame.controller.process_controller(id,controller,ctx,route))], null);
}),controllers));
});

//# sourceMappingURL=kee_frame.controller.js.map
