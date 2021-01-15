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


var G__38530 = seq__38448;
var G__38531 = chunk__38449;
var G__38532 = count__38450;
var G__38533 = (i__38451 + (1));
seq__38448 = G__38530;
chunk__38449 = G__38531;
count__38450 = G__38532;
i__38451 = G__38533;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38448);
if(temp__5735__auto__){
var seq__38448__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38448__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38448__$1);
var G__38534 = cljs.core.chunk_rest(seq__38448__$1);
var G__38535 = c__4556__auto__;
var G__38536 = cljs.core.count(c__4556__auto__);
var G__38537 = (0);
seq__38448 = G__38534;
chunk__38449 = G__38535;
count__38450 = G__38536;
i__38451 = G__38537;
continue;
} else {
var e = cljs.core.first(seq__38448__$1);
re_frame.core.dispatch(e);


var G__38538 = cljs.core.next(seq__38448__$1);
var G__38539 = null;
var G__38540 = (0);
var G__38541 = (0);
seq__38448 = G__38538;
chunk__38449 = G__38539;
count__38450 = G__38540;
i__38451 = G__38541;
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
var seq__38454 = cljs.core.seq((function (){var G__38488 = dispatch_map_or_seq;
if((!(cljs.core.sequential_QMARK_(dispatch_map_or_seq)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__38488],null));
} else {
return G__38488;
}
})());
var chunk__38455 = null;
var count__38456 = (0);
var i__38457 = (0);
while(true){
if((i__38457 < count__38456)){
var map__38489 = chunk__38455.cljs$core$IIndexed$_nth$arity$2(null,i__38457);
var map__38489__$1 = (((((!((map__38489 == null))))?(((((map__38489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38489):map__38489);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38489__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38489__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38489__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38489__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__38497 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__38497.cljs$core$IFn$_invoke$arity$1 ? fexpr__38497.cljs$core$IFn$_invoke$arity$1(action) : fexpr__38497.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__38454,chunk__38455,count__38456,i__38457,map__38489,map__38489__$1,id,timeout,action,event,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__38454,chunk__38455,count__38456,i__38457,map__38489,map__38489__$1,id,timeout,action,event,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___38546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___38546)){
var map__38500_38547 = temp__5735__auto___38546;
var map__38500_38548__$1 = (((((!((map__38500_38547 == null))))?(((((map__38500_38547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38500_38547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38500_38547):map__38500_38547);
var action_38549__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38500_38548__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_38550__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38500_38548__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_38549__$1,event_38550__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__38559 = seq__38454;
var G__38560 = chunk__38455;
var G__38561 = count__38456;
var G__38562 = (i__38457 + (1));
seq__38454 = G__38559;
chunk__38455 = G__38560;
count__38456 = G__38561;
i__38457 = G__38562;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38454);
if(temp__5735__auto__){
var seq__38454__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38454__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38454__$1);
var G__38563 = cljs.core.chunk_rest(seq__38454__$1);
var G__38564 = c__4556__auto__;
var G__38565 = cljs.core.count(c__4556__auto__);
var G__38566 = (0);
seq__38454 = G__38563;
chunk__38455 = G__38564;
count__38456 = G__38565;
i__38457 = G__38566;
continue;
} else {
var map__38504 = cljs.core.first(seq__38454__$1);
var map__38504__$1 = (((((!((map__38504 == null))))?(((((map__38504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38504):map__38504);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38504__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38504__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38504__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38504__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__38507 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__38507.cljs$core$IFn$_invoke$arity$1 ? fexpr__38507.cljs$core$IFn$_invoke$arity$1(action) : fexpr__38507.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__38454,chunk__38455,count__38456,i__38457,map__38504,map__38504__$1,id,timeout,action,event,seq__38454__$1,temp__5735__auto__,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__38454,chunk__38455,count__38456,i__38457,map__38504,map__38504__$1,id,timeout,action,event,seq__38454__$1,temp__5735__auto__,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___38567__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___38567__$1)){
var map__38525_38568 = temp__5735__auto___38567__$1;
var map__38525_38569__$1 = (((((!((map__38525_38568 == null))))?(((((map__38525_38568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38525_38568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38525_38568):map__38525_38568);
var action_38570__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38525_38569__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_38571__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38525_38569__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_38570__$1,event_38571__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__38578 = cljs.core.next(seq__38454__$1);
var G__38579 = null;
var G__38580 = (0);
var G__38581 = (0);
seq__38454 = G__38578;
chunk__38455 = G__38579;
count__38456 = G__38580;
i__38457 = G__38581;
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
