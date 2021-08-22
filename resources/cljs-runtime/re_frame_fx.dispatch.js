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
var seq__38498 = cljs.core.seq(event);
var chunk__38499 = null;
var count__38500 = (0);
var i__38501 = (0);
while(true){
if((i__38501 < count__38500)){
var e = chunk__38499.cljs$core$IIndexed$_nth$arity$2(null,i__38501);
re_frame.core.dispatch(e);


var G__38538 = seq__38498;
var G__38539 = chunk__38499;
var G__38540 = count__38500;
var G__38541 = (i__38501 + (1));
seq__38498 = G__38538;
chunk__38499 = G__38539;
count__38500 = G__38540;
i__38501 = G__38541;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38498);
if(temp__5735__auto__){
var seq__38498__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38498__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38498__$1);
var G__38542 = cljs.core.chunk_rest(seq__38498__$1);
var G__38543 = c__4556__auto__;
var G__38544 = cljs.core.count(c__4556__auto__);
var G__38545 = (0);
seq__38498 = G__38542;
chunk__38499 = G__38543;
count__38500 = G__38544;
i__38501 = G__38545;
continue;
} else {
var e = cljs.core.first(seq__38498__$1);
re_frame.core.dispatch(e);


var G__38546 = cljs.core.next(seq__38498__$1);
var G__38547 = null;
var G__38548 = (0);
var G__38549 = (0);
seq__38498 = G__38546;
chunk__38499 = G__38547;
count__38500 = G__38548;
i__38501 = G__38549;
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
var seq__38502 = cljs.core.seq((function (){var G__38523 = dispatch_map_or_seq;
if((!(cljs.core.sequential_QMARK_(dispatch_map_or_seq)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__38523],null));
} else {
return G__38523;
}
})());
var chunk__38503 = null;
var count__38504 = (0);
var i__38505 = (0);
while(true){
if((i__38505 < count__38504)){
var map__38524 = chunk__38503.cljs$core$IIndexed$_nth$arity$2(null,i__38505);
var map__38524__$1 = (((((!((map__38524 == null))))?(((((map__38524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38524):map__38524);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38524__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38524__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38524__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38524__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__38526 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__38526.cljs$core$IFn$_invoke$arity$1 ? fexpr__38526.cljs$core$IFn$_invoke$arity$1(action) : fexpr__38526.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__38502,chunk__38503,count__38504,i__38505,map__38524,map__38524__$1,id,timeout,action,event,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__38502,chunk__38503,count__38504,i__38505,map__38524,map__38524__$1,id,timeout,action,event,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___38562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___38562)){
var map__38529_38564 = temp__5735__auto___38562;
var map__38529_38565__$1 = (((((!((map__38529_38564 == null))))?(((((map__38529_38564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38529_38564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38529_38564):map__38529_38564);
var action_38566__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38529_38565__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_38567__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38529_38565__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_38566__$1,event_38567__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__38578 = seq__38502;
var G__38579 = chunk__38503;
var G__38580 = count__38504;
var G__38581 = (i__38505 + (1));
seq__38502 = G__38578;
chunk__38503 = G__38579;
count__38504 = G__38580;
i__38505 = G__38581;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38502);
if(temp__5735__auto__){
var seq__38502__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38502__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38502__$1);
var G__38583 = cljs.core.chunk_rest(seq__38502__$1);
var G__38584 = c__4556__auto__;
var G__38585 = cljs.core.count(c__4556__auto__);
var G__38586 = (0);
seq__38502 = G__38583;
chunk__38503 = G__38584;
count__38504 = G__38585;
i__38505 = G__38586;
continue;
} else {
var map__38531 = cljs.core.first(seq__38502__$1);
var map__38531__$1 = (((((!((map__38531 == null))))?(((((map__38531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38531):map__38531);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38531__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38531__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38531__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38531__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__38533 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__38533.cljs$core$IFn$_invoke$arity$1 ? fexpr__38533.cljs$core$IFn$_invoke$arity$1(action) : fexpr__38533.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__38502,chunk__38503,count__38504,i__38505,map__38531,map__38531__$1,id,timeout,action,event,seq__38502__$1,temp__5735__auto__,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__38502,chunk__38503,count__38504,i__38505,map__38531,map__38531__$1,id,timeout,action,event,seq__38502__$1,temp__5735__auto__,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___38602__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___38602__$1)){
var map__38534_38604 = temp__5735__auto___38602__$1;
var map__38534_38605__$1 = (((((!((map__38534_38604 == null))))?(((((map__38534_38604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38534_38604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38534_38604):map__38534_38604);
var action_38606__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38534_38605__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_38607__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38534_38605__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_38606__$1,event_38607__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__38611 = cljs.core.next(seq__38502__$1);
var G__38612 = null;
var G__38613 = (0);
var G__38614 = (0);
seq__38502 = G__38611;
chunk__38503 = G__38612;
count__38504 = G__38613;
i__38505 = G__38614;
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
