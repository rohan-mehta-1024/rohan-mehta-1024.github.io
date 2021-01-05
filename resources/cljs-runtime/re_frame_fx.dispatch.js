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
var seq__38452 = cljs.core.seq(event);
var chunk__38453 = null;
var count__38454 = (0);
var i__38455 = (0);
while(true){
if((i__38455 < count__38454)){
var e = chunk__38453.cljs$core$IIndexed$_nth$arity$2(null,i__38455);
re_frame.core.dispatch(e);


var G__38515 = seq__38452;
var G__38516 = chunk__38453;
var G__38517 = count__38454;
var G__38518 = (i__38455 + (1));
seq__38452 = G__38515;
chunk__38453 = G__38516;
count__38454 = G__38517;
i__38455 = G__38518;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38452);
if(temp__5735__auto__){
var seq__38452__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38452__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38452__$1);
var G__38519 = cljs.core.chunk_rest(seq__38452__$1);
var G__38520 = c__4556__auto__;
var G__38521 = cljs.core.count(c__4556__auto__);
var G__38522 = (0);
seq__38452 = G__38519;
chunk__38453 = G__38520;
count__38454 = G__38521;
i__38455 = G__38522;
continue;
} else {
var e = cljs.core.first(seq__38452__$1);
re_frame.core.dispatch(e);


var G__38523 = cljs.core.next(seq__38452__$1);
var G__38524 = null;
var G__38525 = (0);
var G__38526 = (0);
seq__38452 = G__38523;
chunk__38453 = G__38524;
count__38454 = G__38525;
i__38455 = G__38526;
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
var seq__38457 = cljs.core.seq((function (){var G__38475 = dispatch_map_or_seq;
if((!(cljs.core.sequential_QMARK_(dispatch_map_or_seq)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__38475],null));
} else {
return G__38475;
}
})());
var chunk__38458 = null;
var count__38459 = (0);
var i__38460 = (0);
while(true){
if((i__38460 < count__38459)){
var map__38476 = chunk__38458.cljs$core$IIndexed$_nth$arity$2(null,i__38460);
var map__38476__$1 = (((((!((map__38476 == null))))?(((((map__38476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38476):map__38476);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38476__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38476__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38476__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38476__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__38480 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__38480.cljs$core$IFn$_invoke$arity$1 ? fexpr__38480.cljs$core$IFn$_invoke$arity$1(action) : fexpr__38480.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__38457,chunk__38458,count__38459,i__38460,map__38476,map__38476__$1,id,timeout,action,event,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__38457,chunk__38458,count__38459,i__38460,map__38476,map__38476__$1,id,timeout,action,event,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___38548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___38548)){
var map__38481_38549 = temp__5735__auto___38548;
var map__38481_38550__$1 = (((((!((map__38481_38549 == null))))?(((((map__38481_38549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38481_38549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38481_38549):map__38481_38549);
var action_38551__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38481_38550__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_38552__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38481_38550__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_38551__$1,event_38552__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__38553 = seq__38457;
var G__38554 = chunk__38458;
var G__38555 = count__38459;
var G__38556 = (i__38460 + (1));
seq__38457 = G__38553;
chunk__38458 = G__38554;
count__38459 = G__38555;
i__38460 = G__38556;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38457);
if(temp__5735__auto__){
var seq__38457__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38457__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38457__$1);
var G__38557 = cljs.core.chunk_rest(seq__38457__$1);
var G__38558 = c__4556__auto__;
var G__38559 = cljs.core.count(c__4556__auto__);
var G__38560 = (0);
seq__38457 = G__38557;
chunk__38458 = G__38558;
count__38459 = G__38559;
i__38460 = G__38560;
continue;
} else {
var map__38485 = cljs.core.first(seq__38457__$1);
var map__38485__$1 = (((((!((map__38485 == null))))?(((((map__38485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38485):map__38485);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38485__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38485__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38485__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38485__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__38487 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__38487.cljs$core$IFn$_invoke$arity$1 ? fexpr__38487.cljs$core$IFn$_invoke$arity$1(action) : fexpr__38487.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__38457,chunk__38458,count__38459,i__38460,map__38485,map__38485__$1,id,timeout,action,event,seq__38457__$1,temp__5735__auto__,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__38457,chunk__38458,count__38459,i__38460,map__38485,map__38485__$1,id,timeout,action,event,seq__38457__$1,temp__5735__auto__,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___38561__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___38561__$1)){
var map__38492_38564 = temp__5735__auto___38561__$1;
var map__38492_38565__$1 = (((((!((map__38492_38564 == null))))?(((((map__38492_38564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38492_38564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38492_38564):map__38492_38564);
var action_38566__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38492_38565__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_38567__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38492_38565__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_38566__$1,event_38567__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__38575 = cljs.core.next(seq__38457__$1);
var G__38576 = null;
var G__38577 = (0);
var G__38578 = (0);
seq__38457 = G__38575;
chunk__38458 = G__38576;
count__38459 = G__38577;
i__38460 = G__38578;
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
