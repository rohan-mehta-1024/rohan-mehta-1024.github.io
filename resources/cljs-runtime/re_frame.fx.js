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
var temp__5735__auto___37788 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___37788)){
var new_db_37789 = temp__5735__auto___37788;
var fexpr__37690_37790 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37690_37790.cljs$core$IFn$_invoke$arity$1 ? fexpr__37690_37790.cljs$core$IFn$_invoke$arity$1(new_db_37789) : fexpr__37690_37790.call(null,new_db_37789));
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
var temp__5733__auto___37791 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37791)){
var effect_fn_37792 = temp__5733__auto___37791;
(effect_fn_37792.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37792.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37792.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37793 = seq__37691;
var G__37794 = chunk__37692;
var G__37795 = count__37693;
var G__37796 = (i__37694 + (1));
seq__37691 = G__37793;
chunk__37692 = G__37794;
count__37693 = G__37795;
i__37694 = G__37796;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37691);
if(temp__5735__auto__){
var seq__37691__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37691__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37691__$1);
var G__37797 = cljs.core.chunk_rest(seq__37691__$1);
var G__37798 = c__4556__auto__;
var G__37799 = cljs.core.count(c__4556__auto__);
var G__37800 = (0);
seq__37691 = G__37797;
chunk__37692 = G__37798;
count__37693 = G__37799;
i__37694 = G__37800;
continue;
} else {
var vec__37707 = cljs.core.first(seq__37691__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37707,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37707,(1),null);
var temp__5733__auto___37801 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37801)){
var effect_fn_37802 = temp__5733__auto___37801;
(effect_fn_37802.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37802.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37802.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37803 = cljs.core.next(seq__37691__$1);
var G__37804 = null;
var G__37805 = (0);
var G__37806 = (0);
seq__37691 = G__37803;
chunk__37692 = G__37804;
count__37693 = G__37805;
i__37694 = G__37806;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__37421__auto___37807 = re_frame.interop.now();
var duration__37422__auto___37808 = (end__37421__auto___37807 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__37422__auto___37808,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__37421__auto___37807);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__37688);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___37811 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___37811)){
var new_db_37812 = temp__5735__auto___37811;
var fexpr__37710_37813 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37710_37813.cljs$core$IFn$_invoke$arity$1 ? fexpr__37710_37813.cljs$core$IFn$_invoke$arity$1(new_db_37812) : fexpr__37710_37813.call(null,new_db_37812));
} else {
}

var seq__37711 = cljs.core.seq(effects_without_db);
var chunk__37712 = null;
var count__37713 = (0);
var i__37714 = (0);
while(true){
if((i__37714 < count__37713)){
var vec__37721 = chunk__37712.cljs$core$IIndexed$_nth$arity$2(null,i__37714);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37721,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37721,(1),null);
var temp__5733__auto___37814 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37814)){
var effect_fn_37815 = temp__5733__auto___37814;
(effect_fn_37815.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37815.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37815.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37816 = seq__37711;
var G__37817 = chunk__37712;
var G__37818 = count__37713;
var G__37819 = (i__37714 + (1));
seq__37711 = G__37816;
chunk__37712 = G__37817;
count__37713 = G__37818;
i__37714 = G__37819;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37711);
if(temp__5735__auto__){
var seq__37711__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37711__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37711__$1);
var G__37820 = cljs.core.chunk_rest(seq__37711__$1);
var G__37821 = c__4556__auto__;
var G__37822 = cljs.core.count(c__4556__auto__);
var G__37823 = (0);
seq__37711 = G__37820;
chunk__37712 = G__37821;
count__37713 = G__37822;
i__37714 = G__37823;
continue;
} else {
var vec__37724 = cljs.core.first(seq__37711__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37724,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37724,(1),null);
var temp__5733__auto___37825 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37825)){
var effect_fn_37826 = temp__5733__auto___37825;
(effect_fn_37826.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37826.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37826.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37827 = cljs.core.next(seq__37711__$1);
var G__37828 = null;
var G__37829 = (0);
var G__37830 = (0);
seq__37711 = G__37827;
chunk__37712 = G__37828;
count__37713 = G__37829;
i__37714 = G__37830;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__37727){
var map__37728 = p__37727;
var map__37728__$1 = (((((!((map__37728 == null))))?(((((map__37728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37728):map__37728);
var effect = map__37728__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37728__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37728__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__37730 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37731 = null;
var count__37732 = (0);
var i__37733 = (0);
while(true){
if((i__37733 < count__37732)){
var effect = chunk__37731.cljs$core$IIndexed$_nth$arity$2(null,i__37733);
re_frame.fx.dispatch_later(effect);


var G__37835 = seq__37730;
var G__37836 = chunk__37731;
var G__37837 = count__37732;
var G__37838 = (i__37733 + (1));
seq__37730 = G__37835;
chunk__37731 = G__37836;
count__37732 = G__37837;
i__37733 = G__37838;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37730);
if(temp__5735__auto__){
var seq__37730__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37730__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37730__$1);
var G__37843 = cljs.core.chunk_rest(seq__37730__$1);
var G__37844 = c__4556__auto__;
var G__37845 = cljs.core.count(c__4556__auto__);
var G__37846 = (0);
seq__37730 = G__37843;
chunk__37731 = G__37844;
count__37732 = G__37845;
i__37733 = G__37846;
continue;
} else {
var effect = cljs.core.first(seq__37730__$1);
re_frame.fx.dispatch_later(effect);


var G__37856 = cljs.core.next(seq__37730__$1);
var G__37857 = null;
var G__37858 = (0);
var G__37859 = (0);
seq__37730 = G__37856;
chunk__37731 = G__37857;
count__37732 = G__37858;
i__37733 = G__37859;
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
var seq__37743 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__37744 = null;
var count__37745 = (0);
var i__37746 = (0);
while(true){
if((i__37746 < count__37745)){
var vec__37759 = chunk__37744.cljs$core$IIndexed$_nth$arity$2(null,i__37746);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37759,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37759,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___37860 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37860)){
var effect_fn_37861 = temp__5733__auto___37860;
(effect_fn_37861.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37861.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37861.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__37862 = seq__37743;
var G__37863 = chunk__37744;
var G__37864 = count__37745;
var G__37865 = (i__37746 + (1));
seq__37743 = G__37862;
chunk__37744 = G__37863;
count__37745 = G__37864;
i__37746 = G__37865;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37743);
if(temp__5735__auto__){
var seq__37743__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37743__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37743__$1);
var G__37866 = cljs.core.chunk_rest(seq__37743__$1);
var G__37867 = c__4556__auto__;
var G__37868 = cljs.core.count(c__4556__auto__);
var G__37869 = (0);
seq__37743 = G__37866;
chunk__37744 = G__37867;
count__37745 = G__37868;
i__37746 = G__37869;
continue;
} else {
var vec__37763 = cljs.core.first(seq__37743__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37763,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37763,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___37870 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37870)){
var effect_fn_37871 = temp__5733__auto___37870;
(effect_fn_37871.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37871.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37871.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__37872 = cljs.core.next(seq__37743__$1);
var G__37873 = null;
var G__37874 = (0);
var G__37875 = (0);
seq__37743 = G__37872;
chunk__37744 = G__37873;
count__37745 = G__37874;
i__37746 = G__37875;
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
var seq__37766 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37767 = null;
var count__37768 = (0);
var i__37769 = (0);
while(true){
if((i__37769 < count__37768)){
var event = chunk__37767.cljs$core$IIndexed$_nth$arity$2(null,i__37769);
re_frame.router.dispatch(event);


var G__37876 = seq__37766;
var G__37877 = chunk__37767;
var G__37878 = count__37768;
var G__37879 = (i__37769 + (1));
seq__37766 = G__37876;
chunk__37767 = G__37877;
count__37768 = G__37878;
i__37769 = G__37879;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37766);
if(temp__5735__auto__){
var seq__37766__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37766__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37766__$1);
var G__37880 = cljs.core.chunk_rest(seq__37766__$1);
var G__37881 = c__4556__auto__;
var G__37882 = cljs.core.count(c__4556__auto__);
var G__37883 = (0);
seq__37766 = G__37880;
chunk__37767 = G__37881;
count__37768 = G__37882;
i__37769 = G__37883;
continue;
} else {
var event = cljs.core.first(seq__37766__$1);
re_frame.router.dispatch(event);


var G__37884 = cljs.core.next(seq__37766__$1);
var G__37885 = null;
var G__37886 = (0);
var G__37887 = (0);
seq__37766 = G__37884;
chunk__37767 = G__37885;
count__37768 = G__37886;
i__37769 = G__37887;
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
var seq__37780 = cljs.core.seq(value);
var chunk__37781 = null;
var count__37782 = (0);
var i__37783 = (0);
while(true){
if((i__37783 < count__37782)){
var event = chunk__37781.cljs$core$IIndexed$_nth$arity$2(null,i__37783);
clear_event(event);


var G__37893 = seq__37780;
var G__37894 = chunk__37781;
var G__37895 = count__37782;
var G__37896 = (i__37783 + (1));
seq__37780 = G__37893;
chunk__37781 = G__37894;
count__37782 = G__37895;
i__37783 = G__37896;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37780);
if(temp__5735__auto__){
var seq__37780__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37780__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37780__$1);
var G__37897 = cljs.core.chunk_rest(seq__37780__$1);
var G__37898 = c__4556__auto__;
var G__37899 = cljs.core.count(c__4556__auto__);
var G__37900 = (0);
seq__37780 = G__37897;
chunk__37781 = G__37898;
count__37782 = G__37899;
i__37783 = G__37900;
continue;
} else {
var event = cljs.core.first(seq__37780__$1);
clear_event(event);


var G__37901 = cljs.core.next(seq__37780__$1);
var G__37902 = null;
var G__37903 = (0);
var G__37904 = (0);
seq__37780 = G__37901;
chunk__37781 = G__37902;
count__37782 = G__37903;
i__37783 = G__37904;
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
