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


var G__38513 = seq__38450;
var G__38514 = chunk__38451;
var G__38515 = count__38452;
var G__38516 = (i__38453 + (1));
seq__38450 = G__38513;
chunk__38451 = G__38514;
count__38452 = G__38515;
i__38453 = G__38516;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38450);
if(temp__5735__auto__){
var seq__38450__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38450__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38450__$1);
var G__38517 = cljs.core.chunk_rest(seq__38450__$1);
var G__38518 = c__4556__auto__;
var G__38519 = cljs.core.count(c__4556__auto__);
var G__38520 = (0);
seq__38450 = G__38517;
chunk__38451 = G__38518;
count__38452 = G__38519;
i__38453 = G__38520;
continue;
} else {
var e = cljs.core.first(seq__38450__$1);
re_frame.core.dispatch(e);


var G__38523 = cljs.core.next(seq__38450__$1);
var G__38524 = null;
var G__38525 = (0);
var G__38526 = (0);
seq__38450 = G__38523;
chunk__38451 = G__38524;
count__38452 = G__38525;
i__38453 = G__38526;
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
var seq__38458 = cljs.core.seq((function (){var G__38477 = dispatch_map_or_seq;
if((!(cljs.core.sequential_QMARK_(dispatch_map_or_seq)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__38477],null));
} else {
return G__38477;
}
})());
var chunk__38459 = null;
var count__38460 = (0);
var i__38461 = (0);
while(true){
if((i__38461 < count__38460)){
var map__38478 = chunk__38459.cljs$core$IIndexed$_nth$arity$2(null,i__38461);
var map__38478__$1 = (((((!((map__38478 == null))))?(((((map__38478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38478):map__38478);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38478__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38478__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38478__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38478__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__38480 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__38480.cljs$core$IFn$_invoke$arity$1 ? fexpr__38480.cljs$core$IFn$_invoke$arity$1(action) : fexpr__38480.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__38458,chunk__38459,count__38460,i__38461,map__38478,map__38478__$1,id,timeout,action,event,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__38458,chunk__38459,count__38460,i__38461,map__38478,map__38478__$1,id,timeout,action,event,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___38528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___38528)){
var map__38481_38529 = temp__5735__auto___38528;
var map__38481_38530__$1 = (((((!((map__38481_38529 == null))))?(((((map__38481_38529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38481_38529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38481_38529):map__38481_38529);
var action_38531__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38481_38530__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_38532__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38481_38530__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_38531__$1,event_38532__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__38533 = seq__38458;
var G__38534 = chunk__38459;
var G__38535 = count__38460;
var G__38536 = (i__38461 + (1));
seq__38458 = G__38533;
chunk__38459 = G__38534;
count__38460 = G__38535;
i__38461 = G__38536;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38458);
if(temp__5735__auto__){
var seq__38458__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38458__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38458__$1);
var G__38559 = cljs.core.chunk_rest(seq__38458__$1);
var G__38560 = c__4556__auto__;
var G__38561 = cljs.core.count(c__4556__auto__);
var G__38562 = (0);
seq__38458 = G__38559;
chunk__38459 = G__38560;
count__38460 = G__38561;
i__38461 = G__38562;
continue;
} else {
var map__38485 = cljs.core.first(seq__38458__$1);
var map__38485__$1 = (((((!((map__38485 == null))))?(((((map__38485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38485):map__38485);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38485__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38485__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38485__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38485__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__38487 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__38487.cljs$core$IFn$_invoke$arity$1 ? fexpr__38487.cljs$core$IFn$_invoke$arity$1(action) : fexpr__38487.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__38458,chunk__38459,count__38460,i__38461,map__38485,map__38485__$1,id,timeout,action,event,seq__38458__$1,temp__5735__auto__,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__38458,chunk__38459,count__38460,i__38461,map__38485,map__38485__$1,id,timeout,action,event,seq__38458__$1,temp__5735__auto__,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___38563__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___38563__$1)){
var map__38506_38564 = temp__5735__auto___38563__$1;
var map__38506_38565__$1 = (((((!((map__38506_38564 == null))))?(((((map__38506_38564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38506_38564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38506_38564):map__38506_38564);
var action_38566__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38506_38565__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_38567__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38506_38565__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_38566__$1,event_38567__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__38568 = cljs.core.next(seq__38458__$1);
var G__38569 = null;
var G__38570 = (0);
var G__38571 = (0);
seq__38458 = G__38568;
chunk__38459 = G__38569;
count__38460 = G__38570;
i__38461 = G__38571;
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
