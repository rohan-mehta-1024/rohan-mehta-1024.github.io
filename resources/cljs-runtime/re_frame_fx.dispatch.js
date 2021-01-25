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
var seq__38442 = cljs.core.seq(event);
var chunk__38443 = null;
var count__38444 = (0);
var i__38445 = (0);
while(true){
if((i__38445 < count__38444)){
var e = chunk__38443.cljs$core$IIndexed$_nth$arity$2(null,i__38445);
re_frame.core.dispatch(e);


var G__38493 = seq__38442;
var G__38494 = chunk__38443;
var G__38495 = count__38444;
var G__38496 = (i__38445 + (1));
seq__38442 = G__38493;
chunk__38443 = G__38494;
count__38444 = G__38495;
i__38445 = G__38496;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38442);
if(temp__5735__auto__){
var seq__38442__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38442__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38442__$1);
var G__38497 = cljs.core.chunk_rest(seq__38442__$1);
var G__38498 = c__4556__auto__;
var G__38499 = cljs.core.count(c__4556__auto__);
var G__38500 = (0);
seq__38442 = G__38497;
chunk__38443 = G__38498;
count__38444 = G__38499;
i__38445 = G__38500;
continue;
} else {
var e = cljs.core.first(seq__38442__$1);
re_frame.core.dispatch(e);


var G__38501 = cljs.core.next(seq__38442__$1);
var G__38502 = null;
var G__38503 = (0);
var G__38504 = (0);
seq__38442 = G__38501;
chunk__38443 = G__38502;
count__38444 = G__38503;
i__38445 = G__38504;
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
var seq__38452 = cljs.core.seq((function (){var G__38473 = dispatch_map_or_seq;
if((!(cljs.core.sequential_QMARK_(dispatch_map_or_seq)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__38473],null));
} else {
return G__38473;
}
})());
var chunk__38453 = null;
var count__38454 = (0);
var i__38455 = (0);
while(true){
if((i__38455 < count__38454)){
var map__38474 = chunk__38453.cljs$core$IIndexed$_nth$arity$2(null,i__38455);
var map__38474__$1 = (((((!((map__38474 == null))))?(((((map__38474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38474):map__38474);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38474__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38474__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38474__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38474__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__38476 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__38476.cljs$core$IFn$_invoke$arity$1 ? fexpr__38476.cljs$core$IFn$_invoke$arity$1(action) : fexpr__38476.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__38452,chunk__38453,count__38454,i__38455,map__38474,map__38474__$1,id,timeout,action,event,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__38452,chunk__38453,count__38454,i__38455,map__38474,map__38474__$1,id,timeout,action,event,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___38542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___38542)){
var map__38479_38543 = temp__5735__auto___38542;
var map__38479_38544__$1 = (((((!((map__38479_38543 == null))))?(((((map__38479_38543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38479_38543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38479_38543):map__38479_38543);
var action_38545__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38479_38544__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_38546__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38479_38544__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_38545__$1,event_38546__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__38547 = seq__38452;
var G__38548 = chunk__38453;
var G__38549 = count__38454;
var G__38550 = (i__38455 + (1));
seq__38452 = G__38547;
chunk__38453 = G__38548;
count__38454 = G__38549;
i__38455 = G__38550;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38452);
if(temp__5735__auto__){
var seq__38452__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38452__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38452__$1);
var G__38554 = cljs.core.chunk_rest(seq__38452__$1);
var G__38555 = c__4556__auto__;
var G__38556 = cljs.core.count(c__4556__auto__);
var G__38557 = (0);
seq__38452 = G__38554;
chunk__38453 = G__38555;
count__38454 = G__38556;
i__38455 = G__38557;
continue;
} else {
var map__38483 = cljs.core.first(seq__38452__$1);
var map__38483__$1 = (((((!((map__38483 == null))))?(((((map__38483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38483):map__38483);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38483__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38483__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38483__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38483__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__38485 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__38485.cljs$core$IFn$_invoke$arity$1 ? fexpr__38485.cljs$core$IFn$_invoke$arity$1(action) : fexpr__38485.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__38452,chunk__38453,count__38454,i__38455,map__38483,map__38483__$1,id,timeout,action,event,seq__38452__$1,temp__5735__auto__,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__38452,chunk__38453,count__38454,i__38455,map__38483,map__38483__$1,id,timeout,action,event,seq__38452__$1,temp__5735__auto__,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___38561__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___38561__$1)){
var map__38486_38562 = temp__5735__auto___38561__$1;
var map__38486_38563__$1 = (((((!((map__38486_38562 == null))))?(((((map__38486_38562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38486_38562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38486_38562):map__38486_38562);
var action_38564__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38486_38563__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_38565__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38486_38563__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_38564__$1,event_38565__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__38566 = cljs.core.next(seq__38452__$1);
var G__38567 = null;
var G__38568 = (0);
var G__38569 = (0);
seq__38452 = G__38566;
chunk__38453 = G__38567;
count__38454 = G__38568;
i__38455 = G__38569;
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
