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
var seq__38448 = cljs.core.seq(event);
var chunk__38449 = null;
var count__38450 = (0);
var i__38451 = (0);
while(true){
if((i__38451 < count__38450)){
var e = chunk__38449.cljs$core$IIndexed$_nth$arity$2(null,i__38451);
re_frame.core.dispatch(e);


var G__38524 = seq__38448;
var G__38525 = chunk__38449;
var G__38526 = count__38450;
var G__38527 = (i__38451 + (1));
seq__38448 = G__38524;
chunk__38449 = G__38525;
count__38450 = G__38526;
i__38451 = G__38527;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38448);
if(temp__5735__auto__){
var seq__38448__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38448__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38448__$1);
var G__38528 = cljs.core.chunk_rest(seq__38448__$1);
var G__38529 = c__4556__auto__;
var G__38530 = cljs.core.count(c__4556__auto__);
var G__38531 = (0);
seq__38448 = G__38528;
chunk__38449 = G__38529;
count__38450 = G__38530;
i__38451 = G__38531;
continue;
} else {
var e = cljs.core.first(seq__38448__$1);
re_frame.core.dispatch(e);


var G__38532 = cljs.core.next(seq__38448__$1);
var G__38533 = null;
var G__38534 = (0);
var G__38535 = (0);
seq__38448 = G__38532;
chunk__38449 = G__38533;
count__38450 = G__38534;
i__38451 = G__38535;
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
var seq__38456 = cljs.core.seq((function (){var G__38477 = dispatch_map_or_seq;
if((!(cljs.core.sequential_QMARK_(dispatch_map_or_seq)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__38477],null));
} else {
return G__38477;
}
})());
var chunk__38457 = null;
var count__38458 = (0);
var i__38459 = (0);
while(true){
if((i__38459 < count__38458)){
var map__38478 = chunk__38457.cljs$core$IIndexed$_nth$arity$2(null,i__38459);
var map__38478__$1 = (((((!((map__38478 == null))))?(((((map__38478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38478):map__38478);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38478__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38478__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38478__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38478__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__38480 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__38480.cljs$core$IFn$_invoke$arity$1 ? fexpr__38480.cljs$core$IFn$_invoke$arity$1(action) : fexpr__38480.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__38456,chunk__38457,count__38458,i__38459,map__38478,map__38478__$1,id,timeout,action,event,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__38456,chunk__38457,count__38458,i__38459,map__38478,map__38478__$1,id,timeout,action,event,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___38545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___38545)){
var map__38481_38546 = temp__5735__auto___38545;
var map__38481_38547__$1 = (((((!((map__38481_38546 == null))))?(((((map__38481_38546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38481_38546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38481_38546):map__38481_38546);
var action_38548__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38481_38547__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_38549__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38481_38547__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_38548__$1,event_38549__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__38553 = seq__38456;
var G__38554 = chunk__38457;
var G__38555 = count__38458;
var G__38556 = (i__38459 + (1));
seq__38456 = G__38553;
chunk__38457 = G__38554;
count__38458 = G__38555;
i__38459 = G__38556;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38456);
if(temp__5735__auto__){
var seq__38456__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38456__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38456__$1);
var G__38563 = cljs.core.chunk_rest(seq__38456__$1);
var G__38564 = c__4556__auto__;
var G__38565 = cljs.core.count(c__4556__auto__);
var G__38566 = (0);
seq__38456 = G__38563;
chunk__38457 = G__38564;
count__38458 = G__38565;
i__38459 = G__38566;
continue;
} else {
var map__38483 = cljs.core.first(seq__38456__$1);
var map__38483__$1 = (((((!((map__38483 == null))))?(((((map__38483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38483):map__38483);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38483__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38483__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38483__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38483__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__38500 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__38500.cljs$core$IFn$_invoke$arity$1 ? fexpr__38500.cljs$core$IFn$_invoke$arity$1(action) : fexpr__38500.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__38456,chunk__38457,count__38458,i__38459,map__38483,map__38483__$1,id,timeout,action,event,seq__38456__$1,temp__5735__auto__,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__38456,chunk__38457,count__38458,i__38459,map__38483,map__38483__$1,id,timeout,action,event,seq__38456__$1,temp__5735__auto__,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___38587__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___38587__$1)){
var map__38505_38589 = temp__5735__auto___38587__$1;
var map__38505_38590__$1 = (((((!((map__38505_38589 == null))))?(((((map__38505_38589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38505_38589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38505_38589):map__38505_38589);
var action_38591__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38505_38590__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_38592__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38505_38590__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_38591__$1,event_38592__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__38594 = cljs.core.next(seq__38456__$1);
var G__38595 = null;
var G__38596 = (0);
var G__38597 = (0);
seq__38456 = G__38594;
chunk__38457 = G__38595;
count__38458 = G__38596;
i__38459 = G__38597;
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
