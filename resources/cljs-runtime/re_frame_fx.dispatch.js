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


var G__38516 = seq__38452;
var G__38517 = chunk__38453;
var G__38518 = count__38454;
var G__38519 = (i__38455 + (1));
seq__38452 = G__38516;
chunk__38453 = G__38517;
count__38454 = G__38518;
i__38455 = G__38519;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38452);
if(temp__5735__auto__){
var seq__38452__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38452__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38452__$1);
var G__38520 = cljs.core.chunk_rest(seq__38452__$1);
var G__38521 = c__4556__auto__;
var G__38522 = cljs.core.count(c__4556__auto__);
var G__38523 = (0);
seq__38452 = G__38520;
chunk__38453 = G__38521;
count__38454 = G__38522;
i__38455 = G__38523;
continue;
} else {
var e = cljs.core.first(seq__38452__$1);
re_frame.core.dispatch(e);


var G__38547 = cljs.core.next(seq__38452__$1);
var G__38548 = null;
var G__38549 = (0);
var G__38550 = (0);
seq__38452 = G__38547;
chunk__38453 = G__38548;
count__38454 = G__38549;
i__38455 = G__38550;
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
var seq__38458 = cljs.core.seq((function (){var G__38479 = dispatch_map_or_seq;
if((!(cljs.core.sequential_QMARK_(dispatch_map_or_seq)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__38479],null));
} else {
return G__38479;
}
})());
var chunk__38459 = null;
var count__38460 = (0);
var i__38461 = (0);
while(true){
if((i__38461 < count__38460)){
var map__38480 = chunk__38459.cljs$core$IIndexed$_nth$arity$2(null,i__38461);
var map__38480__$1 = (((((!((map__38480 == null))))?(((((map__38480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38480):map__38480);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38480__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38480__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38480__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38480__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__38483 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__38483.cljs$core$IFn$_invoke$arity$1 ? fexpr__38483.cljs$core$IFn$_invoke$arity$1(action) : fexpr__38483.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__38458,chunk__38459,count__38460,i__38461,map__38480,map__38480__$1,id,timeout,action,event,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__38458,chunk__38459,count__38460,i__38461,map__38480,map__38480__$1,id,timeout,action,event,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___38551 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___38551)){
var map__38491_38552 = temp__5735__auto___38551;
var map__38491_38553__$1 = (((((!((map__38491_38552 == null))))?(((((map__38491_38552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38491_38552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38491_38552):map__38491_38552);
var action_38554__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38491_38553__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_38555__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38491_38553__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_38554__$1,event_38555__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__38556 = seq__38458;
var G__38557 = chunk__38459;
var G__38558 = count__38460;
var G__38559 = (i__38461 + (1));
seq__38458 = G__38556;
chunk__38459 = G__38557;
count__38460 = G__38558;
i__38461 = G__38559;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38458);
if(temp__5735__auto__){
var seq__38458__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38458__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38458__$1);
var G__38569 = cljs.core.chunk_rest(seq__38458__$1);
var G__38570 = c__4556__auto__;
var G__38571 = cljs.core.count(c__4556__auto__);
var G__38572 = (0);
seq__38458 = G__38569;
chunk__38459 = G__38570;
count__38460 = G__38571;
i__38461 = G__38572;
continue;
} else {
var map__38498 = cljs.core.first(seq__38458__$1);
var map__38498__$1 = (((((!((map__38498 == null))))?(((((map__38498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38498):map__38498);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38498__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38498__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38498__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38498__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__38500 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__38500.cljs$core$IFn$_invoke$arity$1 ? fexpr__38500.cljs$core$IFn$_invoke$arity$1(action) : fexpr__38500.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__38458,chunk__38459,count__38460,i__38461,map__38498,map__38498__$1,id,timeout,action,event,seq__38458__$1,temp__5735__auto__,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__38458,chunk__38459,count__38460,i__38461,map__38498,map__38498__$1,id,timeout,action,event,seq__38458__$1,temp__5735__auto__,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___38573__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___38573__$1)){
var map__38514_38574 = temp__5735__auto___38573__$1;
var map__38514_38575__$1 = (((((!((map__38514_38574 == null))))?(((((map__38514_38574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38514_38574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38514_38574):map__38514_38574);
var action_38576__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38514_38575__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_38577__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38514_38575__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_38576__$1,event_38577__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__38578 = cljs.core.next(seq__38458__$1);
var G__38579 = null;
var G__38580 = (0);
var G__38581 = (0);
seq__38458 = G__38578;
chunk__38459 = G__38579;
count__38460 = G__38580;
i__38461 = G__38581;
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
