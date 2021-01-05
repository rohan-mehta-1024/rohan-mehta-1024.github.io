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
var _STAR_current_trace_STAR__orig_val__37691 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__37692 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__37692);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___37774 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___37774)){
var new_db_37775 = temp__5735__auto___37774;
var fexpr__37693_37776 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37693_37776.cljs$core$IFn$_invoke$arity$1 ? fexpr__37693_37776.cljs$core$IFn$_invoke$arity$1(new_db_37775) : fexpr__37693_37776.call(null,new_db_37775));
} else {
}

var seq__37694 = cljs.core.seq(effects_without_db);
var chunk__37695 = null;
var count__37696 = (0);
var i__37697 = (0);
while(true){
if((i__37697 < count__37696)){
var vec__37704 = chunk__37695.cljs$core$IIndexed$_nth$arity$2(null,i__37697);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37704,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37704,(1),null);
var temp__5733__auto___37777 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37777)){
var effect_fn_37778 = temp__5733__auto___37777;
(effect_fn_37778.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37778.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37778.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37779 = seq__37694;
var G__37780 = chunk__37695;
var G__37781 = count__37696;
var G__37782 = (i__37697 + (1));
seq__37694 = G__37779;
chunk__37695 = G__37780;
count__37696 = G__37781;
i__37697 = G__37782;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37694);
if(temp__5735__auto__){
var seq__37694__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37694__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37694__$1);
var G__37783 = cljs.core.chunk_rest(seq__37694__$1);
var G__37784 = c__4556__auto__;
var G__37785 = cljs.core.count(c__4556__auto__);
var G__37786 = (0);
seq__37694 = G__37783;
chunk__37695 = G__37784;
count__37696 = G__37785;
i__37697 = G__37786;
continue;
} else {
var vec__37707 = cljs.core.first(seq__37694__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37707,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37707,(1),null);
var temp__5733__auto___37791 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37791)){
var effect_fn_37792 = temp__5733__auto___37791;
(effect_fn_37792.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37792.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37792.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37795 = cljs.core.next(seq__37694__$1);
var G__37796 = null;
var G__37797 = (0);
var G__37798 = (0);
seq__37694 = G__37795;
chunk__37695 = G__37796;
count__37696 = G__37797;
i__37697 = G__37798;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__37421__auto___37799 = re_frame.interop.now();
var duration__37422__auto___37800 = (end__37421__auto___37799 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__37422__auto___37800,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__37421__auto___37799);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__37691);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___37802 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___37802)){
var new_db_37804 = temp__5735__auto___37802;
var fexpr__37710_37805 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37710_37805.cljs$core$IFn$_invoke$arity$1 ? fexpr__37710_37805.cljs$core$IFn$_invoke$arity$1(new_db_37804) : fexpr__37710_37805.call(null,new_db_37804));
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
var temp__5733__auto___37808 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37808)){
var effect_fn_37809 = temp__5733__auto___37808;
(effect_fn_37809.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37809.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37809.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37810 = seq__37711;
var G__37811 = chunk__37712;
var G__37812 = count__37713;
var G__37813 = (i__37714 + (1));
seq__37711 = G__37810;
chunk__37712 = G__37811;
count__37713 = G__37812;
i__37714 = G__37813;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37711);
if(temp__5735__auto__){
var seq__37711__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37711__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37711__$1);
var G__37814 = cljs.core.chunk_rest(seq__37711__$1);
var G__37815 = c__4556__auto__;
var G__37816 = cljs.core.count(c__4556__auto__);
var G__37817 = (0);
seq__37711 = G__37814;
chunk__37712 = G__37815;
count__37713 = G__37816;
i__37714 = G__37817;
continue;
} else {
var vec__37726 = cljs.core.first(seq__37711__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37726,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37726,(1),null);
var temp__5733__auto___37818 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37818)){
var effect_fn_37819 = temp__5733__auto___37818;
(effect_fn_37819.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37819.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37819.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37820 = cljs.core.next(seq__37711__$1);
var G__37821 = null;
var G__37822 = (0);
var G__37823 = (0);
seq__37711 = G__37820;
chunk__37712 = G__37821;
count__37713 = G__37822;
i__37714 = G__37823;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__37729){
var map__37730 = p__37729;
var map__37730__$1 = (((((!((map__37730 == null))))?(((((map__37730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37730):map__37730);
var effect = map__37730__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37730__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37730__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__37733 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37734 = null;
var count__37735 = (0);
var i__37736 = (0);
while(true){
if((i__37736 < count__37735)){
var effect = chunk__37734.cljs$core$IIndexed$_nth$arity$2(null,i__37736);
re_frame.fx.dispatch_later(effect);


var G__37826 = seq__37733;
var G__37827 = chunk__37734;
var G__37828 = count__37735;
var G__37829 = (i__37736 + (1));
seq__37733 = G__37826;
chunk__37734 = G__37827;
count__37735 = G__37828;
i__37736 = G__37829;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37733);
if(temp__5735__auto__){
var seq__37733__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37733__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37733__$1);
var G__37830 = cljs.core.chunk_rest(seq__37733__$1);
var G__37831 = c__4556__auto__;
var G__37832 = cljs.core.count(c__4556__auto__);
var G__37833 = (0);
seq__37733 = G__37830;
chunk__37734 = G__37831;
count__37735 = G__37832;
i__37736 = G__37833;
continue;
} else {
var effect = cljs.core.first(seq__37733__$1);
re_frame.fx.dispatch_later(effect);


var G__37834 = cljs.core.next(seq__37733__$1);
var G__37835 = null;
var G__37836 = (0);
var G__37837 = (0);
seq__37733 = G__37834;
chunk__37734 = G__37835;
count__37735 = G__37836;
i__37736 = G__37837;
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
var seq__37737 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__37738 = null;
var count__37739 = (0);
var i__37740 = (0);
while(true){
if((i__37740 < count__37739)){
var vec__37747 = chunk__37738.cljs$core$IIndexed$_nth$arity$2(null,i__37740);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37747,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37747,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___37839 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37839)){
var effect_fn_37840 = temp__5733__auto___37839;
(effect_fn_37840.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37840.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37840.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__37841 = seq__37737;
var G__37842 = chunk__37738;
var G__37843 = count__37739;
var G__37844 = (i__37740 + (1));
seq__37737 = G__37841;
chunk__37738 = G__37842;
count__37739 = G__37843;
i__37740 = G__37844;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37737);
if(temp__5735__auto__){
var seq__37737__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37737__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37737__$1);
var G__37848 = cljs.core.chunk_rest(seq__37737__$1);
var G__37849 = c__4556__auto__;
var G__37850 = cljs.core.count(c__4556__auto__);
var G__37851 = (0);
seq__37737 = G__37848;
chunk__37738 = G__37849;
count__37739 = G__37850;
i__37740 = G__37851;
continue;
} else {
var vec__37750 = cljs.core.first(seq__37737__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37750,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37750,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___37852 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37852)){
var effect_fn_37853 = temp__5733__auto___37852;
(effect_fn_37853.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37853.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37853.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__37854 = cljs.core.next(seq__37737__$1);
var G__37855 = null;
var G__37856 = (0);
var G__37857 = (0);
seq__37737 = G__37854;
chunk__37738 = G__37855;
count__37739 = G__37856;
i__37740 = G__37857;
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
var seq__37756 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37757 = null;
var count__37758 = (0);
var i__37759 = (0);
while(true){
if((i__37759 < count__37758)){
var event = chunk__37757.cljs$core$IIndexed$_nth$arity$2(null,i__37759);
re_frame.router.dispatch(event);


var G__37858 = seq__37756;
var G__37859 = chunk__37757;
var G__37860 = count__37758;
var G__37861 = (i__37759 + (1));
seq__37756 = G__37858;
chunk__37757 = G__37859;
count__37758 = G__37860;
i__37759 = G__37861;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37756);
if(temp__5735__auto__){
var seq__37756__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37756__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37756__$1);
var G__37862 = cljs.core.chunk_rest(seq__37756__$1);
var G__37863 = c__4556__auto__;
var G__37864 = cljs.core.count(c__4556__auto__);
var G__37865 = (0);
seq__37756 = G__37862;
chunk__37757 = G__37863;
count__37758 = G__37864;
i__37759 = G__37865;
continue;
} else {
var event = cljs.core.first(seq__37756__$1);
re_frame.router.dispatch(event);


var G__37866 = cljs.core.next(seq__37756__$1);
var G__37867 = null;
var G__37868 = (0);
var G__37869 = (0);
seq__37756 = G__37866;
chunk__37757 = G__37867;
count__37758 = G__37868;
i__37759 = G__37869;
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
var seq__37763 = cljs.core.seq(value);
var chunk__37764 = null;
var count__37765 = (0);
var i__37766 = (0);
while(true){
if((i__37766 < count__37765)){
var event = chunk__37764.cljs$core$IIndexed$_nth$arity$2(null,i__37766);
clear_event(event);


var G__37870 = seq__37763;
var G__37871 = chunk__37764;
var G__37872 = count__37765;
var G__37873 = (i__37766 + (1));
seq__37763 = G__37870;
chunk__37764 = G__37871;
count__37765 = G__37872;
i__37766 = G__37873;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37763);
if(temp__5735__auto__){
var seq__37763__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37763__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37763__$1);
var G__37880 = cljs.core.chunk_rest(seq__37763__$1);
var G__37881 = c__4556__auto__;
var G__37882 = cljs.core.count(c__4556__auto__);
var G__37883 = (0);
seq__37763 = G__37880;
chunk__37764 = G__37881;
count__37765 = G__37882;
i__37766 = G__37883;
continue;
} else {
var event = cljs.core.first(seq__37763__$1);
clear_event(event);


var G__37884 = cljs.core.next(seq__37763__$1);
var G__37885 = null;
var G__37886 = (0);
var G__37887 = (0);
seq__37763 = G__37884;
chunk__37764 = G__37885;
count__37765 = G__37886;
i__37766 = G__37887;
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
