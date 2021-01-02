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
var temp__5735__auto___37769 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___37769)){
var new_db_37770 = temp__5735__auto___37769;
var fexpr__37691_37771 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37691_37771.cljs$core$IFn$_invoke$arity$1 ? fexpr__37691_37771.cljs$core$IFn$_invoke$arity$1(new_db_37770) : fexpr__37691_37771.call(null,new_db_37770));
} else {
}

var seq__37692 = cljs.core.seq(effects_without_db);
var chunk__37693 = null;
var count__37694 = (0);
var i__37695 = (0);
while(true){
if((i__37695 < count__37694)){
var vec__37703 = chunk__37693.cljs$core$IIndexed$_nth$arity$2(null,i__37695);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37703,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37703,(1),null);
var temp__5733__auto___37775 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37775)){
var effect_fn_37776 = temp__5733__auto___37775;
(effect_fn_37776.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37776.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37776.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37777 = seq__37692;
var G__37778 = chunk__37693;
var G__37779 = count__37694;
var G__37780 = (i__37695 + (1));
seq__37692 = G__37777;
chunk__37693 = G__37778;
count__37694 = G__37779;
i__37695 = G__37780;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37692);
if(temp__5735__auto__){
var seq__37692__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37692__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37692__$1);
var G__37781 = cljs.core.chunk_rest(seq__37692__$1);
var G__37782 = c__4556__auto__;
var G__37783 = cljs.core.count(c__4556__auto__);
var G__37784 = (0);
seq__37692 = G__37781;
chunk__37693 = G__37782;
count__37694 = G__37783;
i__37695 = G__37784;
continue;
} else {
var vec__37706 = cljs.core.first(seq__37692__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37706,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37706,(1),null);
var temp__5733__auto___37785 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37785)){
var effect_fn_37786 = temp__5733__auto___37785;
(effect_fn_37786.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37786.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37786.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37787 = cljs.core.next(seq__37692__$1);
var G__37788 = null;
var G__37789 = (0);
var G__37790 = (0);
seq__37692 = G__37787;
chunk__37693 = G__37788;
count__37694 = G__37789;
i__37695 = G__37790;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__37421__auto___37791 = re_frame.interop.now();
var duration__37422__auto___37792 = (end__37421__auto___37791 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__37422__auto___37792,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__37421__auto___37791);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__37688);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___37793 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___37793)){
var new_db_37794 = temp__5735__auto___37793;
var fexpr__37709_37795 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37709_37795.cljs$core$IFn$_invoke$arity$1 ? fexpr__37709_37795.cljs$core$IFn$_invoke$arity$1(new_db_37794) : fexpr__37709_37795.call(null,new_db_37794));
} else {
}

var seq__37710 = cljs.core.seq(effects_without_db);
var chunk__37711 = null;
var count__37712 = (0);
var i__37713 = (0);
while(true){
if((i__37713 < count__37712)){
var vec__37720 = chunk__37711.cljs$core$IIndexed$_nth$arity$2(null,i__37713);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37720,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37720,(1),null);
var temp__5733__auto___37796 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37796)){
var effect_fn_37797 = temp__5733__auto___37796;
(effect_fn_37797.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37797.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37797.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37798 = seq__37710;
var G__37799 = chunk__37711;
var G__37800 = count__37712;
var G__37801 = (i__37713 + (1));
seq__37710 = G__37798;
chunk__37711 = G__37799;
count__37712 = G__37800;
i__37713 = G__37801;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37710);
if(temp__5735__auto__){
var seq__37710__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37710__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37710__$1);
var G__37802 = cljs.core.chunk_rest(seq__37710__$1);
var G__37803 = c__4556__auto__;
var G__37804 = cljs.core.count(c__4556__auto__);
var G__37805 = (0);
seq__37710 = G__37802;
chunk__37711 = G__37803;
count__37712 = G__37804;
i__37713 = G__37805;
continue;
} else {
var vec__37723 = cljs.core.first(seq__37710__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37723,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37723,(1),null);
var temp__5733__auto___37807 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37807)){
var effect_fn_37808 = temp__5733__auto___37807;
(effect_fn_37808.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37808.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37808.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37809 = cljs.core.next(seq__37710__$1);
var G__37810 = null;
var G__37811 = (0);
var G__37812 = (0);
seq__37710 = G__37809;
chunk__37711 = G__37810;
count__37712 = G__37811;
i__37713 = G__37812;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__37726){
var map__37727 = p__37726;
var map__37727__$1 = (((((!((map__37727 == null))))?(((((map__37727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37727):map__37727);
var effect = map__37727__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37727__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37727__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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


var G__37815 = seq__37730;
var G__37816 = chunk__37731;
var G__37817 = count__37732;
var G__37818 = (i__37733 + (1));
seq__37730 = G__37815;
chunk__37731 = G__37816;
count__37732 = G__37817;
i__37733 = G__37818;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37730);
if(temp__5735__auto__){
var seq__37730__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37730__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37730__$1);
var G__37821 = cljs.core.chunk_rest(seq__37730__$1);
var G__37822 = c__4556__auto__;
var G__37823 = cljs.core.count(c__4556__auto__);
var G__37824 = (0);
seq__37730 = G__37821;
chunk__37731 = G__37822;
count__37732 = G__37823;
i__37733 = G__37824;
continue;
} else {
var effect = cljs.core.first(seq__37730__$1);
re_frame.fx.dispatch_later(effect);


var G__37825 = cljs.core.next(seq__37730__$1);
var G__37826 = null;
var G__37827 = (0);
var G__37828 = (0);
seq__37730 = G__37825;
chunk__37731 = G__37826;
count__37732 = G__37827;
i__37733 = G__37828;
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
var seq__37734 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__37735 = null;
var count__37736 = (0);
var i__37737 = (0);
while(true){
if((i__37737 < count__37736)){
var vec__37746 = chunk__37735.cljs$core$IIndexed$_nth$arity$2(null,i__37737);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37746,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37746,(1),null);
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


var G__37837 = seq__37734;
var G__37838 = chunk__37735;
var G__37839 = count__37736;
var G__37840 = (i__37737 + (1));
seq__37734 = G__37837;
chunk__37735 = G__37838;
count__37736 = G__37839;
i__37737 = G__37840;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37734);
if(temp__5735__auto__){
var seq__37734__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37734__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37734__$1);
var G__37843 = cljs.core.chunk_rest(seq__37734__$1);
var G__37844 = c__4556__auto__;
var G__37845 = cljs.core.count(c__4556__auto__);
var G__37846 = (0);
seq__37734 = G__37843;
chunk__37735 = G__37844;
count__37736 = G__37845;
i__37737 = G__37846;
continue;
} else {
var vec__37750 = cljs.core.first(seq__37734__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37750,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37750,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___37850 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37850)){
var effect_fn_37851 = temp__5733__auto___37850;
(effect_fn_37851.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37851.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37851.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__37856 = cljs.core.next(seq__37734__$1);
var G__37857 = null;
var G__37858 = (0);
var G__37859 = (0);
seq__37734 = G__37856;
chunk__37735 = G__37857;
count__37736 = G__37858;
i__37737 = G__37859;
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
var seq__37754 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37755 = null;
var count__37756 = (0);
var i__37757 = (0);
while(true){
if((i__37757 < count__37756)){
var event = chunk__37755.cljs$core$IIndexed$_nth$arity$2(null,i__37757);
re_frame.router.dispatch(event);


var G__37860 = seq__37754;
var G__37861 = chunk__37755;
var G__37862 = count__37756;
var G__37863 = (i__37757 + (1));
seq__37754 = G__37860;
chunk__37755 = G__37861;
count__37756 = G__37862;
i__37757 = G__37863;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37754);
if(temp__5735__auto__){
var seq__37754__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37754__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37754__$1);
var G__37864 = cljs.core.chunk_rest(seq__37754__$1);
var G__37865 = c__4556__auto__;
var G__37866 = cljs.core.count(c__4556__auto__);
var G__37867 = (0);
seq__37754 = G__37864;
chunk__37755 = G__37865;
count__37756 = G__37866;
i__37757 = G__37867;
continue;
} else {
var event = cljs.core.first(seq__37754__$1);
re_frame.router.dispatch(event);


var G__37868 = cljs.core.next(seq__37754__$1);
var G__37869 = null;
var G__37870 = (0);
var G__37871 = (0);
seq__37754 = G__37868;
chunk__37755 = G__37869;
count__37756 = G__37870;
i__37757 = G__37871;
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
var seq__37762 = cljs.core.seq(value);
var chunk__37763 = null;
var count__37764 = (0);
var i__37765 = (0);
while(true){
if((i__37765 < count__37764)){
var event = chunk__37763.cljs$core$IIndexed$_nth$arity$2(null,i__37765);
clear_event(event);


var G__37872 = seq__37762;
var G__37873 = chunk__37763;
var G__37874 = count__37764;
var G__37875 = (i__37765 + (1));
seq__37762 = G__37872;
chunk__37763 = G__37873;
count__37764 = G__37874;
i__37765 = G__37875;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37762);
if(temp__5735__auto__){
var seq__37762__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37762__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37762__$1);
var G__37879 = cljs.core.chunk_rest(seq__37762__$1);
var G__37880 = c__4556__auto__;
var G__37881 = cljs.core.count(c__4556__auto__);
var G__37882 = (0);
seq__37762 = G__37879;
chunk__37763 = G__37880;
count__37764 = G__37881;
i__37765 = G__37882;
continue;
} else {
var event = cljs.core.first(seq__37762__$1);
clear_event(event);


var G__37887 = cljs.core.next(seq__37762__$1);
var G__37888 = null;
var G__37889 = (0);
var G__37890 = (0);
seq__37762 = G__37887;
chunk__37763 = G__37888;
count__37764 = G__37889;
i__37765 = G__37890;
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
