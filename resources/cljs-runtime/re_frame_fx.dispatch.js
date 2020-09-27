goog.provide('re_frame_fx.dispatch');
re_frame_fx.dispatch.deferred_actions = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
re_frame_fx.dispatch.dispatch_debounce = (function re_frame_fx$dispatch$dispatch_debounce(dispatch_map_or_seq){
var cancel_timeout = (function (id){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto__)){
var deferred = temp__5735__auto__;
clearTimeout(new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(deferred));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame_fx.dispatch.deferred_actions,cljs.core.dissoc,id);
} else {
return null;
}
});
var run_action = (function (action,event){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),action)){
return re_frame.core.dispatch(event);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),action)){
var seq__38450 = cljs.core.seq(event);
var chunk__38451 = null;
var count__38452 = (0);
var i__38453 = (0);
while(true){
if((i__38453 < count__38452)){
var e = chunk__38451.cljs$core$IIndexed$_nth$arity$2(null,i__38453);
re_frame.core.dispatch(e);


var G__38490 = seq__38450;
var G__38491 = chunk__38451;
var G__38492 = count__38452;
var G__38493 = (i__38453 + (1));
seq__38450 = G__38490;
chunk__38451 = G__38491;
count__38452 = G__38492;
i__38453 = G__38493;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38450);
if(temp__5735__auto__){
var seq__38450__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38450__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38450__$1);
var G__38494 = cljs.core.chunk_rest(seq__38450__$1);
var G__38495 = c__4556__auto__;
var G__38496 = cljs.core.count(c__4556__auto__);
var G__38497 = (0);
seq__38450 = G__38494;
chunk__38451 = G__38495;
count__38452 = G__38496;
i__38453 = G__38497;
continue;
} else {
var e = cljs.core.first(seq__38450__$1);
re_frame.core.dispatch(e);


var G__38498 = cljs.core.next(seq__38450__$1);
var G__38499 = null;
var G__38500 = (0);
var G__38501 = (0);
seq__38450 = G__38498;
chunk__38451 = G__38499;
count__38452 = G__38500;
i__38453 = G__38501;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});
var seq__38459 = cljs.core.seq((function (){var G__38475 = dispatch_map_or_seq;
if((!(cljs.core.sequential_QMARK_(dispatch_map_or_seq)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__38475],null));
} else {
return G__38475;
}
})());
var chunk__38460 = null;
var count__38461 = (0);
var i__38462 = (0);
while(true){
if((i__38462 < count__38461)){
var map__38476 = chunk__38460.cljs$core$IIndexed$_nth$arity$2(null,i__38462);
var map__38476__$1 = (((((!((map__38476 == null))))?(((((map__38476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38476):map__38476);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38476__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38476__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38476__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38476__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__38478 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__38478.cljs$core$IFn$_invoke$arity$1 ? fexpr__38478.cljs$core$IFn$_invoke$arity$1(action) : fexpr__38478.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__38459,chunk__38460,count__38461,i__38462,map__38476,map__38476__$1,id,timeout,action,event,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__38459,chunk__38460,count__38461,i__38462,map__38476,map__38476__$1,id,timeout,action,event,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___38502 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___38502)){
var map__38479_38503 = temp__5735__auto___38502;
var map__38479_38504__$1 = (((((!((map__38479_38503 == null))))?(((((map__38479_38503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38479_38503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38479_38503):map__38479_38503);
var action_38505__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38479_38504__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_38506__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38479_38504__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_38505__$1,event_38506__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__38511 = seq__38459;
var G__38512 = chunk__38460;
var G__38513 = count__38461;
var G__38514 = (i__38462 + (1));
seq__38459 = G__38511;
chunk__38460 = G__38512;
count__38461 = G__38513;
i__38462 = G__38514;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38459);
if(temp__5735__auto__){
var seq__38459__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38459__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38459__$1);
var G__38515 = cljs.core.chunk_rest(seq__38459__$1);
var G__38516 = c__4556__auto__;
var G__38517 = cljs.core.count(c__4556__auto__);
var G__38518 = (0);
seq__38459 = G__38515;
chunk__38460 = G__38516;
count__38461 = G__38517;
i__38462 = G__38518;
continue;
} else {
var map__38481 = cljs.core.first(seq__38459__$1);
var map__38481__$1 = (((((!((map__38481 == null))))?(((((map__38481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38481):map__38481);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38481__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38481__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38481__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38481__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__38483 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__38483.cljs$core$IFn$_invoke$arity$1 ? fexpr__38483.cljs$core$IFn$_invoke$arity$1(action) : fexpr__38483.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__38459,chunk__38460,count__38461,i__38462,map__38481,map__38481__$1,id,timeout,action,event,seq__38459__$1,temp__5735__auto__,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__38459,chunk__38460,count__38461,i__38462,map__38481,map__38481__$1,id,timeout,action,event,seq__38459__$1,temp__5735__auto__,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___38524__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___38524__$1)){
var map__38486_38565 = temp__5735__auto___38524__$1;
var map__38486_38566__$1 = (((((!((map__38486_38565 == null))))?(((((map__38486_38565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38486_38565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38486_38565):map__38486_38565);
var action_38567__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38486_38566__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_38568__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38486_38566__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_38567__$1,event_38568__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__38569 = cljs.core.next(seq__38459__$1);
var G__38570 = null;
var G__38571 = (0);
var G__38572 = (0);
seq__38459 = G__38569;
chunk__38460 = G__38570;
count__38461 = G__38571;
i__38462 = G__38572;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"dispatch-debounce","dispatch-debounce",-2065179020),re_frame_fx.dispatch.dispatch_debounce);

//# sourceMappingURL=re_frame_fx.dispatch.js.map
