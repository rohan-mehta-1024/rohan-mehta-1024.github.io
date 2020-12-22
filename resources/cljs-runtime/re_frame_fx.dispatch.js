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
var seq__38456 = cljs.core.seq(event);
var chunk__38457 = null;
var count__38458 = (0);
var i__38459 = (0);
while(true){
if((i__38459 < count__38458)){
var e = chunk__38457.cljs$core$IIndexed$_nth$arity$2(null,i__38459);
re_frame.core.dispatch(e);


var G__38545 = seq__38456;
var G__38546 = chunk__38457;
var G__38547 = count__38458;
var G__38548 = (i__38459 + (1));
seq__38456 = G__38545;
chunk__38457 = G__38546;
count__38458 = G__38547;
i__38459 = G__38548;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38456);
if(temp__5735__auto__){
var seq__38456__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38456__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38456__$1);
var G__38552 = cljs.core.chunk_rest(seq__38456__$1);
var G__38553 = c__4556__auto__;
var G__38554 = cljs.core.count(c__4556__auto__);
var G__38555 = (0);
seq__38456 = G__38552;
chunk__38457 = G__38553;
count__38458 = G__38554;
i__38459 = G__38555;
continue;
} else {
var e = cljs.core.first(seq__38456__$1);
re_frame.core.dispatch(e);


var G__38556 = cljs.core.next(seq__38456__$1);
var G__38557 = null;
var G__38558 = (0);
var G__38559 = (0);
seq__38456 = G__38556;
chunk__38457 = G__38557;
count__38458 = G__38558;
i__38459 = G__38559;
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
var seq__38464 = cljs.core.seq((function (){var G__38504 = dispatch_map_or_seq;
if((!(cljs.core.sequential_QMARK_(dispatch_map_or_seq)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__38504],null));
} else {
return G__38504;
}
})());
var chunk__38465 = null;
var count__38466 = (0);
var i__38467 = (0);
while(true){
if((i__38467 < count__38466)){
var map__38519 = chunk__38465.cljs$core$IIndexed$_nth$arity$2(null,i__38467);
var map__38519__$1 = (((((!((map__38519 == null))))?(((((map__38519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38519):map__38519);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38519__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38519__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38519__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38519__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__38521 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__38521.cljs$core$IFn$_invoke$arity$1 ? fexpr__38521.cljs$core$IFn$_invoke$arity$1(action) : fexpr__38521.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__38464,chunk__38465,count__38466,i__38467,map__38519,map__38519__$1,id,timeout,action,event,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__38464,chunk__38465,count__38466,i__38467,map__38519,map__38519__$1,id,timeout,action,event,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___38560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___38560)){
var map__38522_38561 = temp__5735__auto___38560;
var map__38522_38562__$1 = (((((!((map__38522_38561 == null))))?(((((map__38522_38561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38522_38561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38522_38561):map__38522_38561);
var action_38563__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38522_38562__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_38564__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38522_38562__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_38563__$1,event_38564__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__38565 = seq__38464;
var G__38566 = chunk__38465;
var G__38567 = count__38466;
var G__38568 = (i__38467 + (1));
seq__38464 = G__38565;
chunk__38465 = G__38566;
count__38466 = G__38567;
i__38467 = G__38568;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38464);
if(temp__5735__auto__){
var seq__38464__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38464__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38464__$1);
var G__38569 = cljs.core.chunk_rest(seq__38464__$1);
var G__38570 = c__4556__auto__;
var G__38571 = cljs.core.count(c__4556__auto__);
var G__38572 = (0);
seq__38464 = G__38569;
chunk__38465 = G__38570;
count__38466 = G__38571;
i__38467 = G__38572;
continue;
} else {
var map__38531 = cljs.core.first(seq__38464__$1);
var map__38531__$1 = (((((!((map__38531 == null))))?(((((map__38531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38531):map__38531);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38531__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38531__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38531__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38531__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__38533 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__38533.cljs$core$IFn$_invoke$arity$1 ? fexpr__38533.cljs$core$IFn$_invoke$arity$1(action) : fexpr__38533.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__38464,chunk__38465,count__38466,i__38467,map__38531,map__38531__$1,id,timeout,action,event,seq__38464__$1,temp__5735__auto__,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__38464,chunk__38465,count__38466,i__38467,map__38531,map__38531__$1,id,timeout,action,event,seq__38464__$1,temp__5735__auto__,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___38579__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___38579__$1)){
var map__38534_38581 = temp__5735__auto___38579__$1;
var map__38534_38582__$1 = (((((!((map__38534_38581 == null))))?(((((map__38534_38581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38534_38581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38534_38581):map__38534_38581);
var action_38583__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38534_38582__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_38584__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38534_38582__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_38583__$1,event_38584__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__38588 = cljs.core.next(seq__38464__$1);
var G__38589 = null;
var G__38590 = (0);
var G__38591 = (0);
seq__38464 = G__38588;
chunk__38465 = G__38589;
count__38466 = G__38590;
i__38467 = G__38591;
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
