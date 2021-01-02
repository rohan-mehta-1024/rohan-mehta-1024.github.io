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
var seq__38446 = cljs.core.seq(event);
var chunk__38447 = null;
var count__38448 = (0);
var i__38449 = (0);
while(true){
if((i__38449 < count__38448)){
var e = chunk__38447.cljs$core$IIndexed$_nth$arity$2(null,i__38449);
re_frame.core.dispatch(e);


var G__38490 = seq__38446;
var G__38491 = chunk__38447;
var G__38492 = count__38448;
var G__38493 = (i__38449 + (1));
seq__38446 = G__38490;
chunk__38447 = G__38491;
count__38448 = G__38492;
i__38449 = G__38493;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38446);
if(temp__5735__auto__){
var seq__38446__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38446__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38446__$1);
var G__38494 = cljs.core.chunk_rest(seq__38446__$1);
var G__38495 = c__4556__auto__;
var G__38496 = cljs.core.count(c__4556__auto__);
var G__38497 = (0);
seq__38446 = G__38494;
chunk__38447 = G__38495;
count__38448 = G__38496;
i__38449 = G__38497;
continue;
} else {
var e = cljs.core.first(seq__38446__$1);
re_frame.core.dispatch(e);


var G__38498 = cljs.core.next(seq__38446__$1);
var G__38499 = null;
var G__38500 = (0);
var G__38501 = (0);
seq__38446 = G__38498;
chunk__38447 = G__38499;
count__38448 = G__38500;
i__38449 = G__38501;
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
var seq__38452 = cljs.core.seq((function (){var G__38471 = dispatch_map_or_seq;
if((!(cljs.core.sequential_QMARK_(dispatch_map_or_seq)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__38471],null));
} else {
return G__38471;
}
})());
var chunk__38453 = null;
var count__38454 = (0);
var i__38455 = (0);
while(true){
if((i__38455 < count__38454)){
var map__38472 = chunk__38453.cljs$core$IIndexed$_nth$arity$2(null,i__38455);
var map__38472__$1 = (((((!((map__38472 == null))))?(((((map__38472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38472):map__38472);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38472__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38472__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38472__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38472__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__38474 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__38474.cljs$core$IFn$_invoke$arity$1 ? fexpr__38474.cljs$core$IFn$_invoke$arity$1(action) : fexpr__38474.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__38452,chunk__38453,count__38454,i__38455,map__38472,map__38472__$1,id,timeout,action,event,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__38452,chunk__38453,count__38454,i__38455,map__38472,map__38472__$1,id,timeout,action,event,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___38514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___38514)){
var map__38477_38515 = temp__5735__auto___38514;
var map__38477_38516__$1 = (((((!((map__38477_38515 == null))))?(((((map__38477_38515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38477_38515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38477_38515):map__38477_38515);
var action_38517__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38477_38516__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_38518__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38477_38516__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_38517__$1,event_38518__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__38519 = seq__38452;
var G__38520 = chunk__38453;
var G__38521 = count__38454;
var G__38522 = (i__38455 + (1));
seq__38452 = G__38519;
chunk__38453 = G__38520;
count__38454 = G__38521;
i__38455 = G__38522;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38452);
if(temp__5735__auto__){
var seq__38452__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38452__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38452__$1);
var G__38524 = cljs.core.chunk_rest(seq__38452__$1);
var G__38525 = c__4556__auto__;
var G__38526 = cljs.core.count(c__4556__auto__);
var G__38527 = (0);
seq__38452 = G__38524;
chunk__38453 = G__38525;
count__38454 = G__38526;
i__38455 = G__38527;
continue;
} else {
var map__38479 = cljs.core.first(seq__38452__$1);
var map__38479__$1 = (((((!((map__38479 == null))))?(((((map__38479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38479):map__38479);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38479__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38479__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38479__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38479__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__38483 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__38483.cljs$core$IFn$_invoke$arity$1 ? fexpr__38483.cljs$core$IFn$_invoke$arity$1(action) : fexpr__38483.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__38452,chunk__38453,count__38454,i__38455,map__38479,map__38479__$1,id,timeout,action,event,seq__38452__$1,temp__5735__auto__,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__38452,chunk__38453,count__38454,i__38455,map__38479,map__38479__$1,id,timeout,action,event,seq__38452__$1,temp__5735__auto__,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___38533__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___38533__$1)){
var map__38484_38534 = temp__5735__auto___38533__$1;
var map__38484_38535__$1 = (((((!((map__38484_38534 == null))))?(((((map__38484_38534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38484_38534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38484_38534):map__38484_38534);
var action_38536__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38484_38535__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_38537__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38484_38535__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_38536__$1,event_38537__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__38562 = cljs.core.next(seq__38452__$1);
var G__38563 = null;
var G__38564 = (0);
var G__38565 = (0);
seq__38452 = G__38562;
chunk__38453 = G__38563;
count__38454 = G__38564;
i__38455 = G__38565;
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
