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
var _STAR_current_trace_STAR__orig_val__37694 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__37695 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__37695);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___37783 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___37783)){
var new_db_37784 = temp__5735__auto___37783;
var fexpr__37696_37785 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37696_37785.cljs$core$IFn$_invoke$arity$1 ? fexpr__37696_37785.cljs$core$IFn$_invoke$arity$1(new_db_37784) : fexpr__37696_37785.call(null,new_db_37784));
} else {
}

var seq__37697 = cljs.core.seq(effects_without_db);
var chunk__37698 = null;
var count__37699 = (0);
var i__37700 = (0);
while(true){
if((i__37700 < count__37699)){
var vec__37713 = chunk__37698.cljs$core$IIndexed$_nth$arity$2(null,i__37700);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37713,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37713,(1),null);
var temp__5733__auto___37786 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37786)){
var effect_fn_37787 = temp__5733__auto___37786;
(effect_fn_37787.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37787.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37787.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37788 = seq__37697;
var G__37789 = chunk__37698;
var G__37790 = count__37699;
var G__37791 = (i__37700 + (1));
seq__37697 = G__37788;
chunk__37698 = G__37789;
count__37699 = G__37790;
i__37700 = G__37791;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37697);
if(temp__5735__auto__){
var seq__37697__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37697__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37697__$1);
var G__37792 = cljs.core.chunk_rest(seq__37697__$1);
var G__37793 = c__4556__auto__;
var G__37794 = cljs.core.count(c__4556__auto__);
var G__37795 = (0);
seq__37697 = G__37792;
chunk__37698 = G__37793;
count__37699 = G__37794;
i__37700 = G__37795;
continue;
} else {
var vec__37717 = cljs.core.first(seq__37697__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37717,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37717,(1),null);
var temp__5733__auto___37796 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37796)){
var effect_fn_37797 = temp__5733__auto___37796;
(effect_fn_37797.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37797.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37797.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37798 = cljs.core.next(seq__37697__$1);
var G__37799 = null;
var G__37800 = (0);
var G__37801 = (0);
seq__37697 = G__37798;
chunk__37698 = G__37799;
count__37699 = G__37800;
i__37700 = G__37801;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__37421__auto___37802 = re_frame.interop.now();
var duration__37422__auto___37803 = (end__37421__auto___37802 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__37422__auto___37803,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__37421__auto___37802);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__37694);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___37805 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___37805)){
var new_db_37806 = temp__5735__auto___37805;
var fexpr__37721_37807 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37721_37807.cljs$core$IFn$_invoke$arity$1 ? fexpr__37721_37807.cljs$core$IFn$_invoke$arity$1(new_db_37806) : fexpr__37721_37807.call(null,new_db_37806));
} else {
}

var seq__37722 = cljs.core.seq(effects_without_db);
var chunk__37723 = null;
var count__37724 = (0);
var i__37725 = (0);
while(true){
if((i__37725 < count__37724)){
var vec__37733 = chunk__37723.cljs$core$IIndexed$_nth$arity$2(null,i__37725);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37733,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37733,(1),null);
var temp__5733__auto___37809 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37809)){
var effect_fn_37810 = temp__5733__auto___37809;
(effect_fn_37810.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37810.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37810.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37811 = seq__37722;
var G__37812 = chunk__37723;
var G__37813 = count__37724;
var G__37814 = (i__37725 + (1));
seq__37722 = G__37811;
chunk__37723 = G__37812;
count__37724 = G__37813;
i__37725 = G__37814;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37722);
if(temp__5735__auto__){
var seq__37722__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37722__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37722__$1);
var G__37815 = cljs.core.chunk_rest(seq__37722__$1);
var G__37816 = c__4556__auto__;
var G__37817 = cljs.core.count(c__4556__auto__);
var G__37818 = (0);
seq__37722 = G__37815;
chunk__37723 = G__37816;
count__37724 = G__37817;
i__37725 = G__37818;
continue;
} else {
var vec__37736 = cljs.core.first(seq__37722__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37736,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37736,(1),null);
var temp__5733__auto___37819 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37819)){
var effect_fn_37820 = temp__5733__auto___37819;
(effect_fn_37820.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37820.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37820.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37822 = cljs.core.next(seq__37722__$1);
var G__37823 = null;
var G__37824 = (0);
var G__37825 = (0);
seq__37722 = G__37822;
chunk__37723 = G__37823;
count__37724 = G__37824;
i__37725 = G__37825;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__37739){
var map__37740 = p__37739;
var map__37740__$1 = (((((!((map__37740 == null))))?(((((map__37740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37740):map__37740);
var effect = map__37740__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37740__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37740__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__37742 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37743 = null;
var count__37744 = (0);
var i__37745 = (0);
while(true){
if((i__37745 < count__37744)){
var effect = chunk__37743.cljs$core$IIndexed$_nth$arity$2(null,i__37745);
re_frame.fx.dispatch_later(effect);


var G__37827 = seq__37742;
var G__37828 = chunk__37743;
var G__37829 = count__37744;
var G__37830 = (i__37745 + (1));
seq__37742 = G__37827;
chunk__37743 = G__37828;
count__37744 = G__37829;
i__37745 = G__37830;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37742);
if(temp__5735__auto__){
var seq__37742__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37742__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37742__$1);
var G__37831 = cljs.core.chunk_rest(seq__37742__$1);
var G__37832 = c__4556__auto__;
var G__37833 = cljs.core.count(c__4556__auto__);
var G__37834 = (0);
seq__37742 = G__37831;
chunk__37743 = G__37832;
count__37744 = G__37833;
i__37745 = G__37834;
continue;
} else {
var effect = cljs.core.first(seq__37742__$1);
re_frame.fx.dispatch_later(effect);


var G__37835 = cljs.core.next(seq__37742__$1);
var G__37836 = null;
var G__37837 = (0);
var G__37838 = (0);
seq__37742 = G__37835;
chunk__37743 = G__37836;
count__37744 = G__37837;
i__37745 = G__37838;
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
var seq__37746 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__37747 = null;
var count__37748 = (0);
var i__37749 = (0);
while(true){
if((i__37749 < count__37748)){
var vec__37757 = chunk__37747.cljs$core$IIndexed$_nth$arity$2(null,i__37749);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37757,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37757,(1),null);
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


var G__37841 = seq__37746;
var G__37842 = chunk__37747;
var G__37843 = count__37748;
var G__37844 = (i__37749 + (1));
seq__37746 = G__37841;
chunk__37747 = G__37842;
count__37748 = G__37843;
i__37749 = G__37844;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37746);
if(temp__5735__auto__){
var seq__37746__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37746__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37746__$1);
var G__37845 = cljs.core.chunk_rest(seq__37746__$1);
var G__37846 = c__4556__auto__;
var G__37847 = cljs.core.count(c__4556__auto__);
var G__37848 = (0);
seq__37746 = G__37845;
chunk__37747 = G__37846;
count__37748 = G__37847;
i__37749 = G__37848;
continue;
} else {
var vec__37760 = cljs.core.first(seq__37746__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37760,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37760,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___37855 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37855)){
var effect_fn_37856 = temp__5733__auto___37855;
(effect_fn_37856.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37856.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37856.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__37857 = cljs.core.next(seq__37746__$1);
var G__37858 = null;
var G__37859 = (0);
var G__37860 = (0);
seq__37746 = G__37857;
chunk__37747 = G__37858;
count__37748 = G__37859;
i__37749 = G__37860;
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
var seq__37763 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37764 = null;
var count__37765 = (0);
var i__37766 = (0);
while(true){
if((i__37766 < count__37765)){
var event = chunk__37764.cljs$core$IIndexed$_nth$arity$2(null,i__37766);
re_frame.router.dispatch(event);


var G__37861 = seq__37763;
var G__37862 = chunk__37764;
var G__37863 = count__37765;
var G__37864 = (i__37766 + (1));
seq__37763 = G__37861;
chunk__37764 = G__37862;
count__37765 = G__37863;
i__37766 = G__37864;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37763);
if(temp__5735__auto__){
var seq__37763__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37763__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37763__$1);
var G__37867 = cljs.core.chunk_rest(seq__37763__$1);
var G__37868 = c__4556__auto__;
var G__37869 = cljs.core.count(c__4556__auto__);
var G__37870 = (0);
seq__37763 = G__37867;
chunk__37764 = G__37868;
count__37765 = G__37869;
i__37766 = G__37870;
continue;
} else {
var event = cljs.core.first(seq__37763__$1);
re_frame.router.dispatch(event);


var G__37871 = cljs.core.next(seq__37763__$1);
var G__37872 = null;
var G__37873 = (0);
var G__37874 = (0);
seq__37763 = G__37871;
chunk__37764 = G__37872;
count__37765 = G__37873;
i__37766 = G__37874;
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
var seq__37774 = cljs.core.seq(value);
var chunk__37775 = null;
var count__37776 = (0);
var i__37777 = (0);
while(true){
if((i__37777 < count__37776)){
var event = chunk__37775.cljs$core$IIndexed$_nth$arity$2(null,i__37777);
clear_event(event);


var G__37876 = seq__37774;
var G__37877 = chunk__37775;
var G__37878 = count__37776;
var G__37879 = (i__37777 + (1));
seq__37774 = G__37876;
chunk__37775 = G__37877;
count__37776 = G__37878;
i__37777 = G__37879;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37774);
if(temp__5735__auto__){
var seq__37774__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37774__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37774__$1);
var G__37880 = cljs.core.chunk_rest(seq__37774__$1);
var G__37881 = c__4556__auto__;
var G__37882 = cljs.core.count(c__4556__auto__);
var G__37883 = (0);
seq__37774 = G__37880;
chunk__37775 = G__37881;
count__37776 = G__37882;
i__37777 = G__37883;
continue;
} else {
var event = cljs.core.first(seq__37774__$1);
clear_event(event);


var G__37884 = cljs.core.next(seq__37774__$1);
var G__37885 = null;
var G__37886 = (0);
var G__37887 = (0);
seq__37774 = G__37884;
chunk__37775 = G__37885;
count__37776 = G__37886;
i__37777 = G__37887;
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
