goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__37688 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__37689 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__37689);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___37765 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___37765)){
var new_db_37766 = temp__5735__auto___37765;
var fexpr__37690_37770 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37690_37770.cljs$core$IFn$_invoke$arity$1 ? fexpr__37690_37770.cljs$core$IFn$_invoke$arity$1(new_db_37766) : fexpr__37690_37770.call(null,new_db_37766));
} else {
}

var seq__37691 = cljs.core.seq(effects_without_db);
var chunk__37692 = null;
var count__37693 = (0);
var i__37694 = (0);
while(true){
if((i__37694 < count__37693)){
var vec__37701 = chunk__37692.cljs$core$IIndexed$_nth$arity$2(null,i__37694);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37701,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37701,(1),null);
var temp__5733__auto___37771 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37771)){
var effect_fn_37772 = temp__5733__auto___37771;
(effect_fn_37772.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37772.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37772.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37773 = seq__37691;
var G__37774 = chunk__37692;
var G__37775 = count__37693;
var G__37776 = (i__37694 + (1));
seq__37691 = G__37773;
chunk__37692 = G__37774;
count__37693 = G__37775;
i__37694 = G__37776;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37691);
if(temp__5735__auto__){
var seq__37691__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37691__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37691__$1);
var G__37777 = cljs.core.chunk_rest(seq__37691__$1);
var G__37778 = c__4556__auto__;
var G__37779 = cljs.core.count(c__4556__auto__);
var G__37780 = (0);
seq__37691 = G__37777;
chunk__37692 = G__37778;
count__37693 = G__37779;
i__37694 = G__37780;
continue;
} else {
var vec__37704 = cljs.core.first(seq__37691__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37704,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37704,(1),null);
var temp__5733__auto___37781 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37781)){
var effect_fn_37782 = temp__5733__auto___37781;
(effect_fn_37782.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37782.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37782.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37784 = cljs.core.next(seq__37691__$1);
var G__37785 = null;
var G__37786 = (0);
var G__37787 = (0);
seq__37691 = G__37784;
chunk__37692 = G__37785;
count__37693 = G__37786;
i__37694 = G__37787;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__37421__auto___37788 = re_frame.interop.now();
var duration__37422__auto___37789 = (end__37421__auto___37788 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__37422__auto___37789,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__37421__auto___37788);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__37688);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___37790 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___37790)){
var new_db_37792 = temp__5735__auto___37790;
var fexpr__37707_37793 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37707_37793.cljs$core$IFn$_invoke$arity$1 ? fexpr__37707_37793.cljs$core$IFn$_invoke$arity$1(new_db_37792) : fexpr__37707_37793.call(null,new_db_37792));
} else {
}

var seq__37708 = cljs.core.seq(effects_without_db);
var chunk__37709 = null;
var count__37710 = (0);
var i__37711 = (0);
while(true){
if((i__37711 < count__37710)){
var vec__37718 = chunk__37709.cljs$core$IIndexed$_nth$arity$2(null,i__37711);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37718,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37718,(1),null);
var temp__5733__auto___37802 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37802)){
var effect_fn_37803 = temp__5733__auto___37802;
(effect_fn_37803.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37803.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37803.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37804 = seq__37708;
var G__37805 = chunk__37709;
var G__37806 = count__37710;
var G__37807 = (i__37711 + (1));
seq__37708 = G__37804;
chunk__37709 = G__37805;
count__37710 = G__37806;
i__37711 = G__37807;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37708);
if(temp__5735__auto__){
var seq__37708__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37708__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37708__$1);
var G__37808 = cljs.core.chunk_rest(seq__37708__$1);
var G__37809 = c__4556__auto__;
var G__37810 = cljs.core.count(c__4556__auto__);
var G__37811 = (0);
seq__37708 = G__37808;
chunk__37709 = G__37809;
count__37710 = G__37810;
i__37711 = G__37811;
continue;
} else {
var vec__37721 = cljs.core.first(seq__37708__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37721,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37721,(1),null);
var temp__5733__auto___37812 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37812)){
var effect_fn_37813 = temp__5733__auto___37812;
(effect_fn_37813.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37813.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37813.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37814 = cljs.core.next(seq__37708__$1);
var G__37815 = null;
var G__37816 = (0);
var G__37817 = (0);
seq__37708 = G__37814;
chunk__37709 = G__37815;
count__37710 = G__37816;
i__37711 = G__37817;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__37724){
var map__37725 = p__37724;
var map__37725__$1 = (((((!((map__37725 == null))))?(((((map__37725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37725):map__37725);
var effect = map__37725__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37725__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37725__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__37727 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37728 = null;
var count__37729 = (0);
var i__37730 = (0);
while(true){
if((i__37730 < count__37729)){
var effect = chunk__37728.cljs$core$IIndexed$_nth$arity$2(null,i__37730);
re_frame.fx.dispatch_later(effect);


var G__37818 = seq__37727;
var G__37819 = chunk__37728;
var G__37820 = count__37729;
var G__37821 = (i__37730 + (1));
seq__37727 = G__37818;
chunk__37728 = G__37819;
count__37729 = G__37820;
i__37730 = G__37821;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37727);
if(temp__5735__auto__){
var seq__37727__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37727__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37727__$1);
var G__37822 = cljs.core.chunk_rest(seq__37727__$1);
var G__37823 = c__4556__auto__;
var G__37824 = cljs.core.count(c__4556__auto__);
var G__37825 = (0);
seq__37727 = G__37822;
chunk__37728 = G__37823;
count__37729 = G__37824;
i__37730 = G__37825;
continue;
} else {
var effect = cljs.core.first(seq__37727__$1);
re_frame.fx.dispatch_later(effect);


var G__37826 = cljs.core.next(seq__37727__$1);
var G__37827 = null;
var G__37828 = (0);
var G__37829 = (0);
seq__37727 = G__37826;
chunk__37728 = G__37827;
count__37729 = G__37828;
i__37730 = G__37829;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__37731 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__37732 = null;
var count__37733 = (0);
var i__37734 = (0);
while(true){
if((i__37734 < count__37733)){
var vec__37741 = chunk__37732.cljs$core$IIndexed$_nth$arity$2(null,i__37734);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37741,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37741,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___37831 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37831)){
var effect_fn_37832 = temp__5733__auto___37831;
(effect_fn_37832.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37832.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37832.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__37833 = seq__37731;
var G__37834 = chunk__37732;
var G__37835 = count__37733;
var G__37836 = (i__37734 + (1));
seq__37731 = G__37833;
chunk__37732 = G__37834;
count__37733 = G__37835;
i__37734 = G__37836;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37731);
if(temp__5735__auto__){
var seq__37731__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37731__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37731__$1);
var G__37837 = cljs.core.chunk_rest(seq__37731__$1);
var G__37838 = c__4556__auto__;
var G__37839 = cljs.core.count(c__4556__auto__);
var G__37840 = (0);
seq__37731 = G__37837;
chunk__37732 = G__37838;
count__37733 = G__37839;
i__37734 = G__37840;
continue;
} else {
var vec__37744 = cljs.core.first(seq__37731__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37744,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37744,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___37841 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37841)){
var effect_fn_37842 = temp__5733__auto___37841;
(effect_fn_37842.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37842.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37842.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__37843 = cljs.core.next(seq__37731__$1);
var G__37844 = null;
var G__37845 = (0);
var G__37846 = (0);
seq__37731 = G__37843;
chunk__37732 = G__37844;
count__37733 = G__37845;
i__37734 = G__37846;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__37749 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37750 = null;
var count__37751 = (0);
var i__37752 = (0);
while(true){
if((i__37752 < count__37751)){
var event = chunk__37750.cljs$core$IIndexed$_nth$arity$2(null,i__37752);
re_frame.router.dispatch(event);


var G__37847 = seq__37749;
var G__37848 = chunk__37750;
var G__37849 = count__37751;
var G__37850 = (i__37752 + (1));
seq__37749 = G__37847;
chunk__37750 = G__37848;
count__37751 = G__37849;
i__37752 = G__37850;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37749);
if(temp__5735__auto__){
var seq__37749__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37749__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37749__$1);
var G__37851 = cljs.core.chunk_rest(seq__37749__$1);
var G__37852 = c__4556__auto__;
var G__37853 = cljs.core.count(c__4556__auto__);
var G__37854 = (0);
seq__37749 = G__37851;
chunk__37750 = G__37852;
count__37751 = G__37853;
i__37752 = G__37854;
continue;
} else {
var event = cljs.core.first(seq__37749__$1);
re_frame.router.dispatch(event);


var G__37855 = cljs.core.next(seq__37749__$1);
var G__37856 = null;
var G__37857 = (0);
var G__37858 = (0);
seq__37749 = G__37855;
chunk__37750 = G__37856;
count__37751 = G__37857;
i__37752 = G__37858;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__37756 = cljs.core.seq(value);
var chunk__37757 = null;
var count__37758 = (0);
var i__37759 = (0);
while(true){
if((i__37759 < count__37758)){
var event = chunk__37757.cljs$core$IIndexed$_nth$arity$2(null,i__37759);
clear_event(event);


var G__37859 = seq__37756;
var G__37860 = chunk__37757;
var G__37861 = count__37758;
var G__37862 = (i__37759 + (1));
seq__37756 = G__37859;
chunk__37757 = G__37860;
count__37758 = G__37861;
i__37759 = G__37862;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37756);
if(temp__5735__auto__){
var seq__37756__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37756__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37756__$1);
var G__37872 = cljs.core.chunk_rest(seq__37756__$1);
var G__37873 = c__4556__auto__;
var G__37874 = cljs.core.count(c__4556__auto__);
var G__37875 = (0);
seq__37756 = G__37872;
chunk__37757 = G__37873;
count__37758 = G__37874;
i__37759 = G__37875;
continue;
} else {
var event = cljs.core.first(seq__37756__$1);
clear_event(event);


var G__37876 = cljs.core.next(seq__37756__$1);
var G__37877 = null;
var G__37878 = (0);
var G__37879 = (0);
seq__37756 = G__37876;
chunk__37757 = G__37877;
count__37758 = G__37878;
i__37759 = G__37879;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
