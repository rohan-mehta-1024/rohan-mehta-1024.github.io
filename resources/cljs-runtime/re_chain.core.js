goog.provide('re_chain.core');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("re-chain.core","handler","re-chain.core/handler",391159870),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl(cljs.core.vector_QMARK_,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)], null)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("re-chain.core","handlers","re-chain.core/handlers",-1445792565),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Keyword("re-chain.core","handler","re-chain.core/handler",391159870)),cljs.spec.alpha.rep_impl(new cljs.core.Keyword("re-chain.core","handler","re-chain.core/handler",391159870),new cljs.core.Keyword("re-chain.core","handler","re-chain.core/handler",391159870)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("re-chain.core","named-handlers","re-chain.core/named-handlers",2067005217),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"event-handler","event-handler",-487718843),new cljs.core.Keyword("re-chain.core","handler","re-chain.core/handler",391159870))),cljs.spec.alpha.rep_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"event-handler","event-handler",-487718843),new cljs.core.Keyword("re-chain.core","handler","re-chain.core/handler",391159870)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"event-handler","event-handler",-487718843)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,new cljs.core.Keyword("re-chain.core","handler","re-chain.core/handler",391159870)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("re-chain.core","handler","re-chain.core/handler",391159870)], null))));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("re-chain.core","effect-present?","re-chain.core/effect-present?",-86427686),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("re-chain.core","get-dispatch","re-chain.core/get-dispatch",-1059183627),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("re-chain.core","set-dispatch","re-chain.core/set-dispatch",1763259951),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("re-chain.core","link","re-chain.core/link",-1450310738),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-chain.core","effect-present?","re-chain.core/effect-present?",-86427686),new cljs.core.Keyword("re-chain.core","get-dispatch","re-chain.core/get-dispatch",-1059183627),new cljs.core.Keyword("re-chain.core","set-dispatch","re-chain.core/set-dispatch",1763259951)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-chain.core","effect-present?","re-chain.core/effect-present?",-86427686),new cljs.core.Keyword("re-chain.core","get-dispatch","re-chain.core/get-dispatch",-1059183627),new cljs.core.Keyword("re-chain.core","set-dispatch","re-chain.core/set-dispatch",1763259951)], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__40054){
return cljs.core.map_QMARK_(G__40054);
}),(function (G__40054){
return cljs.core.contains_QMARK_(G__40054,new cljs.core.Keyword(null,"effect-present?","effect-present?",131752804));
}),(function (G__40054){
return cljs.core.contains_QMARK_(G__40054,new cljs.core.Keyword(null,"get-dispatch","get-dispatch",-807865793));
}),(function (G__40054){
return cljs.core.contains_QMARK_(G__40054,new cljs.core.Keyword(null,"set-dispatch","set-dispatch",2115263401));
})], null),(function (G__40054){
return ((cljs.core.map_QMARK_(G__40054)) && (cljs.core.contains_QMARK_(G__40054,new cljs.core.Keyword(null,"effect-present?","effect-present?",131752804))) && (cljs.core.contains_QMARK_(G__40054,new cljs.core.Keyword(null,"get-dispatch","get-dispatch",-807865793))) && (cljs.core.contains_QMARK_(G__40054,new cljs.core.Keyword(null,"set-dispatch","set-dispatch",2115263401))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-chain.core","effect-present?","re-chain.core/effect-present?",-86427686),new cljs.core.Keyword("re-chain.core","get-dispatch","re-chain.core/get-dispatch",-1059183627),new cljs.core.Keyword("re-chain.core","set-dispatch","re-chain.core/set-dispatch",1763259951)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effect-present?","effect-present?",131752804),new cljs.core.Keyword(null,"get-dispatch","get-dispatch",-807865793),new cljs.core.Keyword(null,"set-dispatch","set-dispatch",2115263401)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"effect-present?","effect-present?",131752804))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"get-dispatch","get-dispatch",-807865793))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"set-dispatch","set-dispatch",2115263401)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("re-chain.core","links","re-chain.core/links",1676670008),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("re-chain.core","link","re-chain.core/link",-1450310738))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("re-chain.core","link","re-chain.core/link",-1450310738)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("re-chain.core","link","re-chain.core/link",-1450310738),new cljs.core.Keyword("re-chain.core","link","re-chain.core/link",-1450310738),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__40073){
return cljs.core.coll_QMARK_(G__40073);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("re-chain.core","link","re-chain.core/link",-1450310738))], null),null),null));
re_chain.core.links = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
re_chain.core.step_id = (function re_chain$core$step_id(event_id,counter){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),counter)){
return event_id;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.namespace(event_id),(cljs.core.truth_(cljs.core.namespace(event_id))?"/":null),cljs.core.name(event_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter)].join(''));
}
});
re_chain.core.replace_pointers = (function re_chain$core$replace_pointers(next_event,effects){
return clojure.walk.postwalk((function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword("kee-frame.core","next","kee-frame.core/next",-2058375215))){
re_frame.core.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Keyword :kee-frame.core/next is deprecated, use :chain/next instead."], 0));
} else {
}

if(cljs.core.truth_((function (){var fexpr__40074 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("kee-frame.core","next","kee-frame.core/next",-2058375215),null,new cljs.core.Keyword("chain","next","chain/next",-480219822),null], null), null);
return (fexpr__40074.cljs$core$IFn$_invoke$arity$1 ? fexpr__40074.cljs$core$IFn$_invoke$arity$1(x) : fexpr__40074.call(null,x));
})())){
return next_event;
} else {
return x;
}
}),effects);
});
re_chain.core.single_valid_link = (function re_chain$core$single_valid_link(effects){
var links = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__40075){
var map__40076 = p__40075;
var map__40076__$1 = (((((!((map__40076 == null))))?(((((map__40076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40076):map__40076);
var get_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40076__$1,new cljs.core.Keyword(null,"get-dispatch","get-dispatch",-807865793));
var effect_present_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40076__$1,new cljs.core.Keyword(null,"effect-present?","effect-present?",131752804));
var and__4115__auto__ = (effect_present_QMARK_.cljs$core$IFn$_invoke$arity$1 ? effect_present_QMARK_.cljs$core$IFn$_invoke$arity$1(effects) : effect_present_QMARK_.call(null,effects));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not((get_dispatch.cljs$core$IFn$_invoke$arity$1 ? get_dispatch.cljs$core$IFn$_invoke$arity$1(effects) : get_dispatch.call(null,effects)));
} else {
return and__4115__auto__;
}
}),cljs.core.deref(re_chain.core.links));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(links))){
return cljs.core.first(links);
} else {
return null;
}
});
re_chain.core.dispatch_empty_or_next = (function re_chain$core$dispatch_empty_or_next(effects,next_event_id){
if(((cljs.core.not(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(effects))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(effects)),next_event_id)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get-dispatch","get-dispatch",-807865793),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"set-dispatch","set-dispatch",2115263401),(function (effects__$1,event){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(effects__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),event);
})], null);
} else {
return null;
}
});
re_chain.core.single_valid_next = (function re_chain$core$single_valid_next(next_event_id,effects){
var xs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__40082){
var map__40083 = p__40082;
var map__40083__$1 = (((((!((map__40083 == null))))?(((((map__40083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40083):map__40083);
var get_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40083__$1,new cljs.core.Keyword(null,"get-dispatch","get-dispatch",-807865793));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_event_id,cljs.core.first((get_dispatch.cljs$core$IFn$_invoke$arity$1 ? get_dispatch.cljs$core$IFn$_invoke$arity$1(effects) : get_dispatch.call(null,effects))));
}),cljs.core.deref(re_chain.core.links));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(xs))){
return cljs.core.first(xs);
} else {
return null;
}
});
re_chain.core.select_link = (function re_chain$core$select_link(next_event_id,effects){
var or__4126__auto__ = re_chain.core.single_valid_next(next_event_id,effects);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = re_chain.core.single_valid_link(effects);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = re_chain.core.dispatch_empty_or_next(effects,next_event_id);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Not possible to select next in chain",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-id","next-id",-224240762),next_event_id,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(effects),new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.deref(re_chain.core.links)], null));
}
}
}
});
re_chain.core.make_event = (function re_chain$core$make_event(next_event_id,previous_event_params,p__40106){
var vec__40109 = p__40106;
var seq__40110 = cljs.core.seq(vec__40109);
var first__40111 = cljs.core.first(seq__40110);
var seq__40110__$1 = cljs.core.next(seq__40110);
var _ = first__40111;
var params = seq__40110__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_event_id], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(previous_event_params,params));
});
re_chain.core.link_effects = (function re_chain$core$link_effects(next_event_id,event_params,effects){
if(cljs.core.truth_(next_event_id)){
var temp__5733__auto__ = re_chain.core.select_link(next_event_id,effects);
if(cljs.core.truth_(temp__5733__auto__)){
var map__40113 = temp__5733__auto__;
var map__40113__$1 = (((((!((map__40113 == null))))?(((((map__40113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40113):map__40113);
var set_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40113__$1,new cljs.core.Keyword(null,"set-dispatch","set-dispatch",2115263401));
var get_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40113__$1,new cljs.core.Keyword(null,"get-dispatch","get-dispatch",-807865793));
var G__40115 = effects;
var G__40116 = re_chain.core.make_event(next_event_id,event_params,(get_dispatch.cljs$core$IFn$_invoke$arity$1 ? get_dispatch.cljs$core$IFn$_invoke$arity$1(effects) : get_dispatch.call(null,effects)));
return (set_dispatch.cljs$core$IFn$_invoke$arity$2 ? set_dispatch.cljs$core$IFn$_invoke$arity$2(G__40115,G__40116) : set_dispatch.call(null,G__40115,G__40116));
} else {
return effects;
}
} else {
return effects;
}
});
re_chain.core.effect_postprocessor = (function re_chain$core$effect_postprocessor(next_event_id){
return (function (ctx){
var event_params = cljs.core.rest(re_frame.core.get_coeffect.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.Keyword(null,"event","event",301435442)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"effects","effects",-282369292),(function (p1__40117_SHARP_){
return re_chain.core.link_effects(next_event_id,event_params,re_chain.core.replace_pointers(next_event_id,p1__40117_SHARP_));
}));
});
});
re_chain.core.chain_interceptor = (function re_chain$core$chain_interceptor(current_event_id,next_event_id){
return re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),current_event_id,new cljs.core.Keyword(null,"after","after",594996914),re_chain.core.effect_postprocessor(next_event_id)], 0));
});
re_chain.core.collect_named_event_instructions = (function re_chain$core$collect_named_event_instructions(step_fns){
var chain_handlers = cljs.spec.alpha.conform(new cljs.core.Keyword("re-chain.core","named-handlers","re-chain.core/named-handlers",2067005217),step_fns);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119),chain_handlers)){
expound.alpha.expound.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("re-chain.core","named-handlers","re-chain.core/named-handlers",2067005217),step_fns);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid named chain. Should be pairs of keyword and handler",cljs.spec.alpha.explain_data(new cljs.core.Keyword("re-chain.core","named-handlers","re-chain.core/named-handlers",2067005217),step_fns));
} else {
}

return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40118){
var vec__40119 = p__40118;
var map__40122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40119,(0),null);
var map__40122__$1 = (((((!((map__40122 == null))))?(((((map__40122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40122):map__40122);
var handler_1 = map__40122__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40122__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40122__$1,new cljs.core.Keyword(null,"event-handler","event-handler",-487718843));
var handler_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40119,(1),null);
var next_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(handler_2);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(handler_1,new cljs.core.Keyword(null,"next-id","next-id",-224240762),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(handler_2),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951).cljs$core$IFn$_invoke$arity$1(event_handler),new cljs.core.Keyword(null,"event-handler","event-handler",-487718843),new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(event_handler),new cljs.core.Keyword(null,"interceptor","interceptor",1127739076),re_chain.core.chain_interceptor(id,next_id)], 0));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$4((2),(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),chain_handlers));
});
re_chain.core.collect_event_instructions = (function re_chain$core$collect_event_instructions(key,step_fns){
var chain_handlers = cljs.spec.alpha.conform(new cljs.core.Keyword("re-chain.core","handlers","re-chain.core/handlers",-1445792565),step_fns);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119),chain_handlers)){
expound.alpha.expound.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("re-chain.core","handlers","re-chain.core/handlers",-1445792565),step_fns);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid chain. Should be functions or pairs of interceptor and function",cljs.spec.alpha.explain_data(new cljs.core.Keyword("re-chain.core","handlers","re-chain.core/handlers",-1445792565),step_fns));
} else {
}

return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (counter,p__40124){
var vec__40125 = p__40124;
var current_handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40125,(0),null);
var next_handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40125,(1),null);
var map__40128 = current_handler;
var map__40128__$1 = (((((!((map__40128 == null))))?(((((map__40128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40128):map__40128);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40128__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40128__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var id = re_chain.core.step_id(key,counter);
var next_id = (cljs.core.truth_(next_handler)?re_chain.core.step_id(key,(counter + (1))):null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"next-id","next-id",-224240762),next_id,new cljs.core.Keyword(null,"event-handler","event-handler",-487718843),fn,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),interceptors,new cljs.core.Keyword(null,"interceptor","interceptor",1127739076),re_chain.core.chain_interceptor(id,next_id)], null);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$4((2),(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),chain_handlers));
});
re_chain.core.register_chain_handlers_BANG_ = (function re_chain$core$register_chain_handlers_BANG_(instructions,user_interceptors){
var seq__40134 = cljs.core.seq(instructions);
var chunk__40135 = null;
var count__40136 = (0);
var i__40137 = (0);
while(true){
if((i__40137 < count__40136)){
var map__40153 = chunk__40135.cljs$core$IIndexed$_nth$arity$2(null,i__40137);
var map__40153__$1 = (((((!((map__40153 == null))))?(((((map__40153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40153):map__40153);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40153__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40153__$1,new cljs.core.Keyword(null,"event-handler","event-handler",-487718843));
var interceptor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40153__$1,new cljs.core.Keyword(null,"interceptor","interceptor",1127739076));
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40153__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(id,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interceptor], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(user_interceptors,interceptors)),event_handler);


var G__40321 = seq__40134;
var G__40322 = chunk__40135;
var G__40323 = count__40136;
var G__40324 = (i__40137 + (1));
seq__40134 = G__40321;
chunk__40135 = G__40322;
count__40136 = G__40323;
i__40137 = G__40324;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40134);
if(temp__5735__auto__){
var seq__40134__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40134__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40134__$1);
var G__40325 = cljs.core.chunk_rest(seq__40134__$1);
var G__40326 = c__4556__auto__;
var G__40327 = cljs.core.count(c__4556__auto__);
var G__40328 = (0);
seq__40134 = G__40325;
chunk__40135 = G__40326;
count__40136 = G__40327;
i__40137 = G__40328;
continue;
} else {
var map__40167 = cljs.core.first(seq__40134__$1);
var map__40167__$1 = (((((!((map__40167 == null))))?(((((map__40167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40167):map__40167);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40167__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40167__$1,new cljs.core.Keyword(null,"event-handler","event-handler",-487718843));
var interceptor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40167__$1,new cljs.core.Keyword(null,"interceptor","interceptor",1127739076));
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40167__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(id,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interceptor], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(user_interceptors,interceptors)),event_handler);


var G__40351 = cljs.core.next(seq__40134__$1);
var G__40352 = null;
var G__40353 = (0);
var G__40354 = (0);
seq__40134 = G__40351;
chunk__40135 = G__40352;
count__40136 = G__40353;
i__40137 = G__40354;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Same as `reg-chain-named`, but with a vector of interceptors as the first parameter. The interceptors specified
 *   will be appended to each event's interceptors.
 */
re_chain.core.reg_chain_named_STAR_ = (function re_chain$core$reg_chain_named_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40361 = arguments.length;
var i__4737__auto___40362 = (0);
while(true){
if((i__4737__auto___40362 < len__4736__auto___40361)){
args__4742__auto__.push((arguments[i__4737__auto___40362]));

var G__40363 = (i__4737__auto___40362 + (1));
i__4737__auto___40362 = G__40363;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return re_chain.core.reg_chain_named_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(re_chain.core.reg_chain_named_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (interceptors,step_fns){
var instructions = re_chain.core.collect_named_event_instructions(step_fns);
return re_chain.core.register_chain_handlers_BANG_(instructions,interceptors);
}));

(re_chain.core.reg_chain_named_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_chain.core.reg_chain_named_STAR_.cljs$lang$applyTo = (function (seq40173){
var G__40176 = cljs.core.first(seq40173);
var seq40173__$1 = cljs.core.next(seq40173);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40176,seq40173__$1);
}));

/**
 * Same as `reg-chain`, but with a vector of interceptors as the second parameter. The interceptors specified
 *   will be appended to each event's interceptors.
 */
re_chain.core.reg_chain_STAR_ = (function re_chain$core$reg_chain_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40364 = arguments.length;
var i__4737__auto___40365 = (0);
while(true){
if((i__4737__auto___40365 < len__4736__auto___40364)){
args__4742__auto__.push((arguments[i__4737__auto___40365]));

var G__40366 = (i__4737__auto___40365 + (1));
i__4737__auto___40365 = G__40366;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return re_chain.core.reg_chain_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(re_chain.core.reg_chain_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (id,interceptors,step_fns){
var instructions = re_chain.core.collect_event_instructions(id,step_fns);
return re_chain.core.register_chain_handlers_BANG_(instructions,interceptors);
}));

(re_chain.core.reg_chain_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_chain.core.reg_chain_STAR_.cljs$lang$applyTo = (function (seq40185){
var G__40186 = cljs.core.first(seq40185);
var seq40185__$1 = cljs.core.next(seq40185);
var G__40187 = cljs.core.first(seq40185__$1);
var seq40185__$2 = cljs.core.next(seq40185__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40186,G__40187,seq40185__$2);
}));

/**
 * re-chain only supports the `dispatch` effect out of the box. To add more effects, call this function at the startup
 *   of your app.
 * 
 *   Parameters:
 * 
 *   `chain-links`: Vector of maps. Each map describes how to chain together events using a certain effect. The map should
 *   contain 3 keys:
 *   - `:effect-present?` : Is the effect present in the effects map returned from an event function?
 *   - `:get-dispatch` : Try to lookup the dispatch value from the effects map
 *   - `:set-dispatch` : Set the dispatch value in the effects map
 * 
 *   Usage:
 *   ```
 *   (chain/configure! [{:effect-present? (fn [effects] (:http-xhrio effects))
 *                    :get-dispatch    (fn [effects] (get-in effects [:http-xhrio :on-success]))
 *                    :set-dispatch    (fn [effects dispatch] (assoc-in effects [:http-xhrio :on-success] dispatch))}])
 *   ```
 *   
 */
re_chain.core.configure_BANG_ = (function re_chain$core$configure_BANG_(chain_links){
return cljs.core.reset_BANG_(re_chain.core.links,chain_links);
});
/**
 * Same as `reg-chain`, but with manually named event handlers. Useful when you need more meaningful names in your
 *   event log.
 * 
 *   Parameters:
 * 
 *   `handlers`: pairs of id and event handler.
 * 
 *   Usage:
 *   ```
 *   (k/reg-chain-named
 * 
 *  :load-customer-data
 *  (fn [ctx [customer-id]]
 *    {:http-xhrio {:uri "..."}})
 * 
 *  :receive-customer-data
 *   (fn [ctx [customer-id customer-data]]
 *    (assoc-in ctx [:db :customers customer-id] customer-data)))
 *   ```
 */
re_chain.core.reg_chain_named = (function re_chain$core$reg_chain_named(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40393 = arguments.length;
var i__4737__auto___40394 = (0);
while(true){
if((i__4737__auto___40394 < len__4736__auto___40393)){
args__4742__auto__.push((arguments[i__4737__auto___40394]));

var G__40395 = (i__4737__auto___40394 + (1));
i__4737__auto___40394 = G__40395;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_chain.core.reg_chain_named.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_chain.core.reg_chain_named.cljs$core$IFn$_invoke$arity$variadic = (function (handlers){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_chain.core.reg_chain_named_STAR_,null,handlers);
}));

(re_chain.core.reg_chain_named.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_chain.core.reg_chain_named.cljs$lang$applyTo = (function (seq40188){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40188));
}));

/**
 * Register a list of re-frame fx handlers, chained together.
 * 
 *   The chaining is done through dispatch inference. https://github.com/Day8/re-frame-http-fx is supported by default,
 *   you can easily add your own like this: https://github.com/ingesolvoll/kee-frame#configuring-chains-since-020.
 * 
 *   Each handler's event vector is prepended with accumulated event vectors of previous handlers. So if the first handler
 *   receives [a b], and the second handler normally would receive [c], it will actually receive [a b c]. The purpose is
 *   to make all context available to the entire chain, without a complex framework or crazy scope tricks.
 * 
 *   Parameters:
 * 
 *   `id`: the id of the first re-frame event. The next events in the chain will get the same id followed by an index, so
 *   if your id is `add-todo`, the next one in chain will be called `add-todo-1`.
 * 
 *   `handlers`: re-frame event handler functions, registered with `re-frame.core/reg-event-fx`.
 * 
 * 
 *   Usage:
 *   ```
 *   (k/reg-chain
 *  :load-customer-data
 * 
 *  (fn {ctx [customer-id]]
 *    {:http-xhrio {:uri    (str "/customer/" customer-id)
 *                  :method :get}})
 * 
 *  (fn [cxt [customer-id customer-data]
 *    (assoc-in ctx [:db :customers customer-id] customer-data)))
 *   ```
 */
re_chain.core.reg_chain = (function re_chain$core$reg_chain(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40396 = arguments.length;
var i__4737__auto___40397 = (0);
while(true){
if((i__4737__auto___40397 < len__4736__auto___40396)){
args__4742__auto__.push((arguments[i__4737__auto___40397]));

var G__40398 = (i__4737__auto___40397 + (1));
i__4737__auto___40397 = G__40398;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return re_chain.core.reg_chain.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(re_chain.core.reg_chain.cljs$core$IFn$_invoke$arity$variadic = (function (id,handlers){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(re_chain.core.reg_chain_STAR_,id,null,handlers);
}));

(re_chain.core.reg_chain.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_chain.core.reg_chain.cljs$lang$applyTo = (function (seq40189){
var G__40190 = cljs.core.first(seq40189);
var seq40189__$1 = cljs.core.next(seq40189);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40190,seq40189__$1);
}));


//# sourceMappingURL=re_chain.core.js.map
