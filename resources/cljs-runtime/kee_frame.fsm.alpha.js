goog.provide('kee_frame.fsm.alpha');
/**
 * Convenience function for declaring no-op events.
 */
kee_frame.fsm.alpha.reg_no_op = (function kee_frame$fsm$alpha$reg_no_op(id){
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kee_frame.interceptors.add_global_interceptors], null),cljs.core.constantly(null));
});
/**
 * Try to find a transition that matches some subset of the received event
 */
kee_frame.fsm.alpha.find_transition = (function kee_frame$fsm$alpha$find_transition(transitions,event){
if(cljs.core.seq(event)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(transitions,event,(function (){var G__41542 = transitions;
var G__41543 = cljs.core.butlast(event);
return (kee_frame.fsm.alpha.find_transition.cljs$core$IFn$_invoke$arity$2 ? kee_frame.fsm.alpha.find_transition.cljs$core$IFn$_invoke$arity$2(G__41542,G__41543) : kee_frame.fsm.alpha.find_transition.call(null,G__41542,G__41543));
})());
} else {
return null;
}
});
/**
 * Given a transition map and an event, returns the next fsm state if
 *   there is a valid transition, `nil` otherwise. Event transition
 *   `:when` clause is optionally applied.
 */
kee_frame.fsm.alpha.event_transition_BANG_ = (function kee_frame$fsm$alpha$event_transition_BANG_(transitions,event){
var temp__5735__auto__ = kee_frame.fsm.alpha.find_transition(transitions,event);
if(cljs.core.truth_(temp__5735__auto__)){
var transition = temp__5735__auto__;
var map__41544 = transition;
var map__41544__$1 = (((((!((map__41544 == null))))?(((((map__41544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41544):map__41544);
var next_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41544__$1,new cljs.core.Keyword(null,"to","to",192099007));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41544__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(cljs.core.truth_(dispatch)){
var seq__41550_41666 = cljs.core.seq(dispatch);
var chunk__41551_41667 = null;
var count__41552_41668 = (0);
var i__41553_41669 = (0);
while(true){
if((i__41553_41669 < count__41552_41668)){
var e_41670 = chunk__41551_41667.cljs$core$IIndexed$_nth$arity$2(null,i__41553_41669);
re_frame.core.dispatch(e_41670);


var G__41671 = seq__41550_41666;
var G__41672 = chunk__41551_41667;
var G__41673 = count__41552_41668;
var G__41674 = (i__41553_41669 + (1));
seq__41550_41666 = G__41671;
chunk__41551_41667 = G__41672;
count__41552_41668 = G__41673;
i__41553_41669 = G__41674;
continue;
} else {
var temp__5735__auto___41675__$1 = cljs.core.seq(seq__41550_41666);
if(temp__5735__auto___41675__$1){
var seq__41550_41676__$1 = temp__5735__auto___41675__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41550_41676__$1)){
var c__4556__auto___41677 = cljs.core.chunk_first(seq__41550_41676__$1);
var G__41678 = cljs.core.chunk_rest(seq__41550_41676__$1);
var G__41679 = c__4556__auto___41677;
var G__41680 = cljs.core.count(c__4556__auto___41677);
var G__41681 = (0);
seq__41550_41666 = G__41678;
chunk__41551_41667 = G__41679;
count__41552_41668 = G__41680;
i__41553_41669 = G__41681;
continue;
} else {
var e_41682 = cljs.core.first(seq__41550_41676__$1);
re_frame.core.dispatch(e_41682);


var G__41684 = cljs.core.next(seq__41550_41676__$1);
var G__41685 = null;
var G__41686 = (0);
var G__41687 = (0);
seq__41550_41666 = G__41684;
chunk__41551_41667 = G__41685;
count__41552_41668 = G__41686;
i__41553_41669 = G__41687;
continue;
}
} else {
}
}
break;
}
} else {
}

return next_state;
} else {
return null;
}
});
kee_frame.fsm.alpha.foreign_event_QMARK_ = (function kee_frame$fsm$alpha$foreign_event_QMARK_(fsm_id,p__41554){
var vec__41555 = p__41554;
var event_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41555,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41555,(1),null);
var event_fsm_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41555,(2),null);
var and__4115__auto__ = (function (){var fexpr__41566 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("kee-frame.fsm.alpha","timeout","kee-frame.fsm.alpha/timeout",659648007),null,new cljs.core.Keyword("kee-frame.fsm.alpha","on-enter","kee-frame.fsm.alpha/on-enter",160434331),null], null), null);
return (fexpr__41566.cljs$core$IFn$_invoke$arity$1 ? fexpr__41566.cljs$core$IFn$_invoke$arity$1(event_id) : fexpr__41566.call(null,event_id));
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fsm_id,event_fsm_id);
} else {
return and__4115__auto__;
}
});
/**
 * Returns next state if there is a valid transition, `nil` otherwise.
 */
kee_frame.fsm.alpha.next_state = (function kee_frame$fsm$alpha$next_state(fsm,db,event){
var map__41571 = fsm;
var map__41571__$1 = (((((!((map__41571 == null))))?(((((map__41571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41571):map__41571);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41571__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var state_attr = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41571__$1,new cljs.core.Keyword(null,"state-attr","state-attr",680371634),new cljs.core.Keyword("kee-frame.fsm.alpha","state","kee-frame.fsm.alpha/state",-928134116));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41571__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var transition_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41571__$1,new cljs.core.Keyword(null,"fsm","fsm",937922990));
var current_state = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,state_attr], null),start);
var transitions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(transition_map,current_state);
if(cljs.core.truth_(kee_frame.fsm.alpha.foreign_event_QMARK_(id,event))){
return null;
} else {
return kee_frame.fsm.alpha.event_transition_BANG_(transitions,event);
}
});
kee_frame.fsm.alpha.reg_no_op(new cljs.core.Keyword("kee-frame.fsm.alpha","timeout","kee-frame.fsm.alpha/timeout",659648007));
kee_frame.fsm.alpha.reg_no_op(new cljs.core.Keyword("kee-frame.fsm.alpha","on-enter","kee-frame.fsm.alpha/on-enter",160434331));
kee_frame.fsm.alpha.reg_no_op(new cljs.core.Keyword("kee-frame.fsm.alpha","fsm-started","kee-frame.fsm.alpha/fsm-started",-1155628622));
kee_frame.fsm.alpha.reg_no_op(new cljs.core.Keyword(null,"default-on-failure","default-on-failure",-129116151));
kee_frame.fsm.alpha.compile_timeouts = (function kee_frame$fsm$alpha$compile_timeouts(fsm){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41573){
var vec__41574 = p__41573;
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41574,(0),null);
var transitions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41574,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__41577,_){
var vec__41578 = p__41577;
var vec__41581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41578,(0),null);
var event_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41581,(0),null);
var timeout = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41581,(1),null);
var timeout__$1 = (function (){var or__4126__auto__ = timeout;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),timeout__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_id,timeout__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(fsm)], null)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__41593,_){
var vec__41594 = p__41593;
var vec__41597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41594,(0),null);
var event_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41597,(0),null);
var fexpr__41600 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("kee-frame.fsm.alpha","timeout","kee-frame.fsm.alpha/timeout",659648007),null,new cljs.core.Keyword("kee-frame.fsm.alpha","on-enter","kee-frame.fsm.alpha/on-enter",160434331),null], null), null);
return (fexpr__41600.cljs$core$IFn$_invoke$arity$1 ? fexpr__41600.cljs$core$IFn$_invoke$arity$1(event_id) : fexpr__41600.call(null,event_id));
}),transitions))], null);
}),new cljs.core.Keyword(null,"fsm","fsm",937922990).cljs$core$IFn$_invoke$arity$1(fsm)));
});
kee_frame.fsm.alpha.clear_timeouts_BANG_ = (function kee_frame$fsm$alpha$clear_timeouts_BANG_(timeouts_STAR_){
var seq__41601_41699 = cljs.core.seq(cljs.core.deref(timeouts_STAR_));
var chunk__41602_41700 = null;
var count__41603_41701 = (0);
var i__41604_41702 = (0);
while(true){
if((i__41604_41702 < count__41603_41701)){
var t_41703 = chunk__41602_41700.cljs$core$IIndexed$_nth$arity$2(null,i__41604_41702);
kee_frame.interop.clear_timeout(t_41703);


var G__41704 = seq__41601_41699;
var G__41705 = chunk__41602_41700;
var G__41706 = count__41603_41701;
var G__41707 = (i__41604_41702 + (1));
seq__41601_41699 = G__41704;
chunk__41602_41700 = G__41705;
count__41603_41701 = G__41706;
i__41604_41702 = G__41707;
continue;
} else {
var temp__5735__auto___41717 = cljs.core.seq(seq__41601_41699);
if(temp__5735__auto___41717){
var seq__41601_41718__$1 = temp__5735__auto___41717;
if(cljs.core.chunked_seq_QMARK_(seq__41601_41718__$1)){
var c__4556__auto___41719 = cljs.core.chunk_first(seq__41601_41718__$1);
var G__41720 = cljs.core.chunk_rest(seq__41601_41718__$1);
var G__41721 = c__4556__auto___41719;
var G__41722 = cljs.core.count(c__4556__auto___41719);
var G__41723 = (0);
seq__41601_41699 = G__41720;
chunk__41602_41700 = G__41721;
count__41603_41701 = G__41722;
i__41604_41702 = G__41723;
continue;
} else {
var t_41724 = cljs.core.first(seq__41601_41718__$1);
kee_frame.interop.clear_timeout(t_41724);


var G__41733 = cljs.core.next(seq__41601_41718__$1);
var G__41734 = null;
var G__41735 = (0);
var G__41736 = (0);
seq__41601_41699 = G__41733;
chunk__41602_41700 = G__41734;
count__41603_41701 = G__41735;
i__41604_41702 = G__41736;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(timeouts_STAR_,cljs.core.PersistentVector.EMPTY);
});
kee_frame.fsm.alpha.dispatch_timeouts_BANG_ = (function kee_frame$fsm$alpha$dispatch_timeouts_BANG_(timeouts_STAR_,timeouts){
return cljs.core.reset_BANG_(timeouts_STAR_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__41605){
var map__41606 = p__41605;
var map__41606__$1 = (((((!((map__41606 == null))))?(((((map__41606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41606):map__41606);
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41606__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41606__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
return kee_frame.interop.set_timeout((function (){
return re_frame.core.dispatch(dispatch);
}),ms);
}),timeouts));
});
kee_frame.fsm.alpha.state_changed_QMARK_ = (function kee_frame$fsm$alpha$state_changed_QMARK_(prev,next){
var or__4126__auto__ = cljs.core.not(prev);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return next;
}
});
/**
 * Given a parsed fsm, a db, and an event, advances the fsm. Else,
 *   no-op.
 */
kee_frame.fsm.alpha.advance = (function kee_frame$fsm$alpha$advance(fsm,timeouts_STAR_,state__GT_timeouts,db,event){
var map__41608 = fsm;
var map__41608__$1 = (((((!((map__41608 == null))))?(((((map__41608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41608):map__41608);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41608__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var state_attr = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41608__$1,new cljs.core.Keyword(null,"state-attr","state-attr",680371634),new cljs.core.Keyword("kee-frame.fsm.alpha","state","kee-frame.fsm.alpha/state",-928134116));
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41608__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41608__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var current_state = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,state_attr], null));
var next_state = kee_frame.fsm.alpha.next_state(fsm,db,event);
if(cljs.core.truth_(kee_frame.fsm.alpha.state_changed_QMARK_(current_state,next_state))){
kee_frame.fsm.alpha.clear_timeouts_BANG_(timeouts_STAR_);

kee_frame.fsm.alpha.dispatch_timeouts_BANG_(timeouts_STAR_,(function (){var G__41611 = (function (){var or__4126__auto__ = next_state;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return start;
}
})();
return (state__GT_timeouts.cljs$core$IFn$_invoke$arity$1 ? state__GT_timeouts.cljs$core$IFn$_invoke$arity$1(G__41611) : state__GT_timeouts.call(null,G__41611));
})());
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = stop;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_state,stop);
} else {
return and__4115__auto__;
}
})())){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.fsm.alpha","stop","kee-frame.fsm.alpha/stop",-1038449025),fsm], null));
} else {
}

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,state_attr], null),(function (){var or__4126__auto__ = next_state;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = current_state;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return start;
}
}
})());
});
re_frame.core.reg_fx(new cljs.core.Keyword("kee-frame.fsm.alpha","start","kee-frame.fsm.alpha/start",-1432048294),(function (p__41618){
var map__41619 = p__41618;
var map__41619__$1 = (((((!((map__41619 == null))))?(((((map__41619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41619):map__41619);
var fsm = map__41619__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41619__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeouts_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var state__GT_timeouts = kee_frame.fsm.alpha.compile_timeouts(fsm);
return kee_frame.interceptors.reg_global_interceptor(id,re_frame.core.enrich(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(kee_frame.fsm.alpha.advance,fsm,timeouts_STAR_,state__GT_timeouts)));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("kee-frame.fsm.alpha","stop","kee-frame.fsm.alpha/stop",-1038449025),(function (p__41621){
var map__41622 = p__41621;
var map__41622__$1 = (((((!((map__41622 == null))))?(((((map__41622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41622):map__41622);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41622__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(id)){
return kee_frame.interceptors.clear_global_interceptor(id);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kee-frame.fsm.alpha","start","kee-frame.fsm.alpha/start",-1432048294),(function (_,p__41625){
var vec__41626 = p__41625;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41626,(0),null);
var fsm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41626,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("kee-frame.fsm.alpha","start","kee-frame.fsm.alpha/start",-1432048294),fsm,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.fsm.alpha","fsm-started","kee-frame.fsm.alpha/fsm-started",-1155628622)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kee-frame.fsm.alpha","stop","kee-frame.fsm.alpha/stop",-1038449025),(function (_,p__41629){
var vec__41630 = p__41629;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41630,(0),null);
var fsm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41630,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("kee-frame.fsm.alpha","stop","kee-frame.fsm.alpha/stop",-1038449025),fsm], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("kee-frame.fsm.alpha","state","kee-frame.fsm.alpha/state",-928134116),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__41634){
var vec__41635 = p__41634;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41635,(0),null);
var map__41638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41635,(1),null);
var map__41638__$1 = (((((!((map__41638 == null))))?(((((map__41638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41638):map__41638);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41638__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var state_attr = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41638__$1,new cljs.core.Keyword(null,"state-attr","state-attr",680371634),new cljs.core.Keyword("kee-frame.fsm.alpha","state","kee-frame.fsm.alpha/state",-928134116));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41638__$1,new cljs.core.Keyword(null,"start","start",-355208981));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,state_attr], null),start);
})], 0));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kee-frame.fsm.alpha","binding","kee-frame.fsm.alpha/binding",1593698854),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"fsm-symbol","fsm-symbol",-1648919706),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Keyword(null,"fsm","fsm",937922990),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"fsm-symbol","fsm-symbol",-1648919706),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Keyword(null,"fsm","fsm",937922990),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fsm-symbol","fsm-symbol",-1648919706),new cljs.core.Keyword(null,"fsm","fsm",937922990)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null))], null),null));
if((typeof kee_frame !== 'undefined') && (typeof kee_frame.fsm !== 'undefined') && (typeof kee_frame.fsm.alpha !== 'undefined') && (typeof kee_frame.fsm.alpha.step !== 'undefined')){
} else {
/**
 * Materialized view of the current fsm state. A `step` method must
 *   exist for each state defined in the fsm transition map. States are
 *   globally defined, and namespaced keywords are required. It is a good
 *   idea to define the fsm in the same namespace as the steps.
 */
kee_frame.fsm.alpha.step = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__41642 = cljs.core.get_global_hierarchy;
return (fexpr__41642.cljs$core$IFn$_invoke$arity$0 ? fexpr__41642.cljs$core$IFn$_invoke$arity$0() : fexpr__41642.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("kee-frame.fsm.alpha","step"),(function() { 
var G__41744__delegate = function (fsm,_){
return cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.fsm.alpha","state","kee-frame.fsm.alpha/state",-928134116),fsm], null)));
};
var G__41744 = function (fsm,var_args){
var _ = null;
if (arguments.length > 1) {
var G__41745__i = 0, G__41745__a = new Array(arguments.length -  1);
while (G__41745__i < G__41745__a.length) {G__41745__a[G__41745__i] = arguments[G__41745__i + 1]; ++G__41745__i;}
  _ = new cljs.core.IndexedSeq(G__41745__a,0,null);
} 
return G__41744__delegate.call(this,fsm,_);};
G__41744.cljs$lang$maxFixedArity = 1;
G__41744.cljs$lang$applyTo = (function (arglist__41746){
var fsm = cljs.core.first(arglist__41746);
var _ = cljs.core.rest(arglist__41746);
return G__41744__delegate(fsm,_);
});
G__41744.cljs$core$IFn$_invoke$arity$variadic = G__41744__delegate;
return G__41744;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
kee_frame.fsm.alpha.step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__41747__delegate = function (fsm,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),["Undefined step: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.fsm.alpha","state","kee-frame.fsm.alpha/state",-928134116),fsm], null))))].join('')], null);
};
var G__41747 = function (fsm,var_args){
var _ = null;
if (arguments.length > 1) {
var G__41748__i = 0, G__41748__a = new Array(arguments.length -  1);
while (G__41748__i < G__41748__a.length) {G__41748__a[G__41748__i] = arguments[G__41748__i + 1]; ++G__41748__i;}
  _ = new cljs.core.IndexedSeq(G__41748__a,0,null);
} 
return G__41747__delegate.call(this,fsm,_);};
G__41747.cljs$lang$maxFixedArity = 1;
G__41747.cljs$lang$applyTo = (function (arglist__41749){
var fsm = cljs.core.first(arglist__41749);
var _ = cljs.core.rest(arglist__41749);
return G__41747__delegate(fsm,_);
});
G__41747.cljs$core$IFn$_invoke$arity$variadic = G__41747__delegate;
return G__41747;
})()
);
kee_frame.fsm.alpha.render_STAR_ = (function kee_frame$fsm$alpha$render_STAR_(fsm,args){
var with_let41644 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let41644","with-let41644",2026975104));
var temp__5739__auto___41750 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___41750 == null)){
} else {
var c__36564__auto___41751 = temp__5739__auto___41750;
if((with_let41644.generation === c__36564__auto___41751.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let41644.generation = c__36564__auto___41751.ratomGeneration);
}


var init41645 = (with_let41644.length === (0));
var _ = ((init41645)?(with_let41644[(0)] = re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.fsm.alpha","start","kee-frame.fsm.alpha/start",-1432048294),fsm], null))):(with_let41644[(0)]));
var res__36565__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply,kee_frame.fsm.alpha.step,fsm,args], null);
var destroy__36563__auto___41752 = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.fsm.alpha","stop","kee-frame.fsm.alpha/stop",-1038449025),fsm], null));
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let41644.destroy == null)){
(with_let41644.destroy = destroy__36563__auto___41752);
} else {
}
} else {
destroy__36563__auto___41752();
}

return res__36565__auto__;
});
/**
 * Given an fsm function and arguments, renders a materialized view of
 *   the fsm state. A `step` method must exist for each state defined in
 *   the fsm transition map. The args passed to `render` must match the
 *   args expected by the fsm's `step` methods.
 */
kee_frame.fsm.alpha.render = (function kee_frame$fsm$alpha$render(var_args){
var args__4742__auto__ = [];
var len__4736__auto___41753 = arguments.length;
var i__4737__auto___41754 = (0);
while(true){
if((i__4737__auto___41754 < len__4736__auto___41753)){
args__4742__auto__.push((arguments[i__4737__auto___41754]));

var G__41755 = (i__4737__auto___41754 + (1));
i__4737__auto___41754 = G__41755;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return kee_frame.fsm.alpha.render.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(kee_frame.fsm.alpha.render.cljs$core$IFn$_invoke$arity$variadic = (function (fsm_fn,args){
var fsm = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(fsm_fn,args);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kee_frame.fsm.alpha.render_STAR_,fsm,args], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(fsm)], null));
}));

(kee_frame.fsm.alpha.render.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(kee_frame.fsm.alpha.render.cljs$lang$applyTo = (function (seq41654){
var G__41655 = cljs.core.first(seq41654);
var seq41654__$1 = cljs.core.next(seq41654);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41655,seq41654__$1);
}));


//# sourceMappingURL=kee_frame.fsm.alpha.js.map
