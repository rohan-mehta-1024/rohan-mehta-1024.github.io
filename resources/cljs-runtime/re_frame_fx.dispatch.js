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


var G__38529 = seq__38456;
var G__38530 = chunk__38457;
var G__38531 = count__38458;
var G__38532 = (i__38459 + (1));
seq__38456 = G__38529;
chunk__38457 = G__38530;
count__38458 = G__38531;
i__38459 = G__38532;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38456);
if(temp__5735__auto__){
var seq__38456__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38456__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38456__$1);
var G__38534 = cljs.core.chunk_rest(seq__38456__$1);
var G__38535 = c__4556__auto__;
var G__38536 = cljs.core.count(c__4556__auto__);
var G__38537 = (0);
seq__38456 = G__38534;
chunk__38457 = G__38535;
count__38458 = G__38536;
i__38459 = G__38537;
continue;
} else {
var e = cljs.core.first(seq__38456__$1);
re_frame.core.dispatch(e);


var G__38543 = cljs.core.next(seq__38456__$1);
var G__38544 = null;
var G__38545 = (0);
var G__38546 = (0);
seq__38456 = G__38543;
chunk__38457 = G__38544;
count__38458 = G__38545;
i__38459 = G__38546;
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
var seq__38462 = cljs.core.seq((function (){var G__38492 = dispatch_map_or_seq;
if((!(cljs.core.sequential_QMARK_(dispatch_map_or_seq)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__38492],null));
} else {
return G__38492;
}
})());
var chunk__38463 = null;
var count__38464 = (0);
var i__38465 = (0);
while(true){
if((i__38465 < count__38464)){
var map__38495 = chunk__38463.cljs$core$IIndexed$_nth$arity$2(null,i__38465);
var map__38495__$1 = (((((!((map__38495 == null))))?(((((map__38495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38495):map__38495);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38495__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38495__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38495__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38495__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__38498 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__38498.cljs$core$IFn$_invoke$arity$1 ? fexpr__38498.cljs$core$IFn$_invoke$arity$1(action) : fexpr__38498.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__38462,chunk__38463,count__38464,i__38465,map__38495,map__38495__$1,id,timeout,action,event,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__38462,chunk__38463,count__38464,i__38465,map__38495,map__38495__$1,id,timeout,action,event,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___38583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___38583)){
var map__38512_38584 = temp__5735__auto___38583;
var map__38512_38585__$1 = (((((!((map__38512_38584 == null))))?(((((map__38512_38584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38512_38584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38512_38584):map__38512_38584);
var action_38586__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38512_38585__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_38587__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38512_38585__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_38586__$1,event_38587__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__38588 = seq__38462;
var G__38589 = chunk__38463;
var G__38590 = count__38464;
var G__38591 = (i__38465 + (1));
seq__38462 = G__38588;
chunk__38463 = G__38589;
count__38464 = G__38590;
i__38465 = G__38591;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38462);
if(temp__5735__auto__){
var seq__38462__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38462__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38462__$1);
var G__38592 = cljs.core.chunk_rest(seq__38462__$1);
var G__38593 = c__4556__auto__;
var G__38594 = cljs.core.count(c__4556__auto__);
var G__38595 = (0);
seq__38462 = G__38592;
chunk__38463 = G__38593;
count__38464 = G__38594;
i__38465 = G__38595;
continue;
} else {
var map__38514 = cljs.core.first(seq__38462__$1);
var map__38514__$1 = (((((!((map__38514 == null))))?(((((map__38514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38514):map__38514);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38514__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38514__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38514__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38514__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__38516 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__38516.cljs$core$IFn$_invoke$arity$1 ? fexpr__38516.cljs$core$IFn$_invoke$arity$1(action) : fexpr__38516.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__38462,chunk__38463,count__38464,i__38465,map__38514,map__38514__$1,id,timeout,action,event,seq__38462__$1,temp__5735__auto__,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__38462,chunk__38463,count__38464,i__38465,map__38514,map__38514__$1,id,timeout,action,event,seq__38462__$1,temp__5735__auto__,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___38604__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___38604__$1)){
var map__38527_38605 = temp__5735__auto___38604__$1;
var map__38527_38606__$1 = (((((!((map__38527_38605 == null))))?(((((map__38527_38605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38527_38605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38527_38605):map__38527_38605);
var action_38607__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38527_38606__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_38608__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38527_38606__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_38607__$1,event_38608__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__38609 = cljs.core.next(seq__38462__$1);
var G__38610 = null;
var G__38611 = (0);
var G__38612 = (0);
seq__38462 = G__38609;
chunk__38463 = G__38610;
count__38464 = G__38611;
i__38465 = G__38612;
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
