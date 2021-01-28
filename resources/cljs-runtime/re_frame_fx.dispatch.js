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
var seq__38458 = cljs.core.seq(event);
var chunk__38459 = null;
var count__38460 = (0);
var i__38461 = (0);
while(true){
if((i__38461 < count__38460)){
var e = chunk__38459.cljs$core$IIndexed$_nth$arity$2(null,i__38461);
re_frame.core.dispatch(e);


var G__38545 = seq__38458;
var G__38546 = chunk__38459;
var G__38547 = count__38460;
var G__38548 = (i__38461 + (1));
seq__38458 = G__38545;
chunk__38459 = G__38546;
count__38460 = G__38547;
i__38461 = G__38548;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38458);
if(temp__5735__auto__){
var seq__38458__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38458__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38458__$1);
var G__38552 = cljs.core.chunk_rest(seq__38458__$1);
var G__38553 = c__4556__auto__;
var G__38554 = cljs.core.count(c__4556__auto__);
var G__38555 = (0);
seq__38458 = G__38552;
chunk__38459 = G__38553;
count__38460 = G__38554;
i__38461 = G__38555;
continue;
} else {
var e = cljs.core.first(seq__38458__$1);
re_frame.core.dispatch(e);


var G__38556 = cljs.core.next(seq__38458__$1);
var G__38557 = null;
var G__38558 = (0);
var G__38559 = (0);
seq__38458 = G__38556;
chunk__38459 = G__38557;
count__38460 = G__38558;
i__38461 = G__38559;
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
var seq__38462 = cljs.core.seq((function (){var G__38503 = dispatch_map_or_seq;
if((!(cljs.core.sequential_QMARK_(dispatch_map_or_seq)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__38503],null));
} else {
return G__38503;
}
})());
var chunk__38463 = null;
var count__38464 = (0);
var i__38465 = (0);
while(true){
if((i__38465 < count__38464)){
var map__38505 = chunk__38463.cljs$core$IIndexed$_nth$arity$2(null,i__38465);
var map__38505__$1 = (((((!((map__38505 == null))))?(((((map__38505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38505):map__38505);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38505__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38505__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38505__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38505__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__38508 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__38508.cljs$core$IFn$_invoke$arity$1 ? fexpr__38508.cljs$core$IFn$_invoke$arity$1(action) : fexpr__38508.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__38462,chunk__38463,count__38464,i__38465,map__38505,map__38505__$1,id,timeout,action,event,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__38462,chunk__38463,count__38464,i__38465,map__38505,map__38505__$1,id,timeout,action,event,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___38572 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___38572)){
var map__38509_38573 = temp__5735__auto___38572;
var map__38509_38574__$1 = (((((!((map__38509_38573 == null))))?(((((map__38509_38573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38509_38573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38509_38573):map__38509_38573);
var action_38575__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38509_38574__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_38576__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38509_38574__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_38575__$1,event_38576__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__38577 = seq__38462;
var G__38578 = chunk__38463;
var G__38579 = count__38464;
var G__38580 = (i__38465 + (1));
seq__38462 = G__38577;
chunk__38463 = G__38578;
count__38464 = G__38579;
i__38465 = G__38580;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38462);
if(temp__5735__auto__){
var seq__38462__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38462__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38462__$1);
var G__38581 = cljs.core.chunk_rest(seq__38462__$1);
var G__38582 = c__4556__auto__;
var G__38583 = cljs.core.count(c__4556__auto__);
var G__38584 = (0);
seq__38462 = G__38581;
chunk__38463 = G__38582;
count__38464 = G__38583;
i__38465 = G__38584;
continue;
} else {
var map__38511 = cljs.core.first(seq__38462__$1);
var map__38511__$1 = (((((!((map__38511 == null))))?(((((map__38511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38511):map__38511);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38511__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38511__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38511__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38511__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__38533 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__38533.cljs$core$IFn$_invoke$arity$1 ? fexpr__38533.cljs$core$IFn$_invoke$arity$1(action) : fexpr__38533.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__38462,chunk__38463,count__38464,i__38465,map__38511,map__38511__$1,id,timeout,action,event,seq__38462__$1,temp__5735__auto__,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__38462,chunk__38463,count__38464,i__38465,map__38511,map__38511__$1,id,timeout,action,event,seq__38462__$1,temp__5735__auto__,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___38585__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___38585__$1)){
var map__38536_38590 = temp__5735__auto___38585__$1;
var map__38536_38591__$1 = (((((!((map__38536_38590 == null))))?(((((map__38536_38590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38536_38590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38536_38590):map__38536_38590);
var action_38592__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38536_38591__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_38593__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38536_38591__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_38592__$1,event_38593__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__38595 = cljs.core.next(seq__38462__$1);
var G__38596 = null;
var G__38597 = (0);
var G__38598 = (0);
seq__38462 = G__38595;
chunk__38463 = G__38596;
count__38464 = G__38597;
i__38465 = G__38598;
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
