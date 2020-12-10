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
var seq__38441 = cljs.core.seq(event);
var chunk__38442 = null;
var count__38443 = (0);
var i__38444 = (0);
while(true){
if((i__38444 < count__38443)){
var e = chunk__38442.cljs$core$IIndexed$_nth$arity$2(null,i__38444);
re_frame.core.dispatch(e);


var G__38496 = seq__38441;
var G__38497 = chunk__38442;
var G__38498 = count__38443;
var G__38499 = (i__38444 + (1));
seq__38441 = G__38496;
chunk__38442 = G__38497;
count__38443 = G__38498;
i__38444 = G__38499;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38441);
if(temp__5735__auto__){
var seq__38441__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38441__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38441__$1);
var G__38501 = cljs.core.chunk_rest(seq__38441__$1);
var G__38502 = c__4556__auto__;
var G__38503 = cljs.core.count(c__4556__auto__);
var G__38504 = (0);
seq__38441 = G__38501;
chunk__38442 = G__38502;
count__38443 = G__38503;
i__38444 = G__38504;
continue;
} else {
var e = cljs.core.first(seq__38441__$1);
re_frame.core.dispatch(e);


var G__38516 = cljs.core.next(seq__38441__$1);
var G__38517 = null;
var G__38518 = (0);
var G__38519 = (0);
seq__38441 = G__38516;
chunk__38442 = G__38517;
count__38443 = G__38518;
i__38444 = G__38519;
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
var seq__38446 = cljs.core.seq((function (){var G__38469 = dispatch_map_or_seq;
if((!(cljs.core.sequential_QMARK_(dispatch_map_or_seq)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__38469],null));
} else {
return G__38469;
}
})());
var chunk__38447 = null;
var count__38448 = (0);
var i__38449 = (0);
while(true){
if((i__38449 < count__38448)){
var map__38470 = chunk__38447.cljs$core$IIndexed$_nth$arity$2(null,i__38449);
var map__38470__$1 = (((((!((map__38470 == null))))?(((((map__38470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38470):map__38470);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38470__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38470__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38470__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38470__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__38476 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__38476.cljs$core$IFn$_invoke$arity$1 ? fexpr__38476.cljs$core$IFn$_invoke$arity$1(action) : fexpr__38476.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__38446,chunk__38447,count__38448,i__38449,map__38470,map__38470__$1,id,timeout,action,event,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__38446,chunk__38447,count__38448,i__38449,map__38470,map__38470__$1,id,timeout,action,event,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___38527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___38527)){
var map__38477_38543 = temp__5735__auto___38527;
var map__38477_38544__$1 = (((((!((map__38477_38543 == null))))?(((((map__38477_38543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38477_38543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38477_38543):map__38477_38543);
var action_38545__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38477_38544__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_38546__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38477_38544__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_38545__$1,event_38546__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__38547 = seq__38446;
var G__38548 = chunk__38447;
var G__38549 = count__38448;
var G__38550 = (i__38449 + (1));
seq__38446 = G__38547;
chunk__38447 = G__38548;
count__38448 = G__38549;
i__38449 = G__38550;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38446);
if(temp__5735__auto__){
var seq__38446__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38446__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38446__$1);
var G__38551 = cljs.core.chunk_rest(seq__38446__$1);
var G__38552 = c__4556__auto__;
var G__38553 = cljs.core.count(c__4556__auto__);
var G__38554 = (0);
seq__38446 = G__38551;
chunk__38447 = G__38552;
count__38448 = G__38553;
i__38449 = G__38554;
continue;
} else {
var map__38481 = cljs.core.first(seq__38446__$1);
var map__38481__$1 = (((((!((map__38481 == null))))?(((((map__38481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38481):map__38481);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38481__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38481__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38481__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38481__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__38483 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__38483.cljs$core$IFn$_invoke$arity$1 ? fexpr__38483.cljs$core$IFn$_invoke$arity$1(action) : fexpr__38483.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__38446,chunk__38447,count__38448,i__38449,map__38481,map__38481__$1,id,timeout,action,event,seq__38446__$1,temp__5735__auto__,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__38446,chunk__38447,count__38448,i__38449,map__38481,map__38481__$1,id,timeout,action,event,seq__38446__$1,temp__5735__auto__,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___38555__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___38555__$1)){
var map__38484_38556 = temp__5735__auto___38555__$1;
var map__38484_38557__$1 = (((((!((map__38484_38556 == null))))?(((((map__38484_38556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38484_38556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38484_38556):map__38484_38556);
var action_38558__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38484_38557__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_38559__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38484_38557__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_38558__$1,event_38559__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__38569 = cljs.core.next(seq__38446__$1);
var G__38570 = null;
var G__38571 = (0);
var G__38572 = (0);
seq__38446 = G__38569;
chunk__38447 = G__38570;
count__38448 = G__38571;
i__38449 = G__38572;
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
