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
var _STAR_current_trace_STAR__orig_val__37689 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__37690 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__37690);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___37783 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___37783)){
var new_db_37784 = temp__5735__auto___37783;
var fexpr__37691_37785 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37691_37785.cljs$core$IFn$_invoke$arity$1 ? fexpr__37691_37785.cljs$core$IFn$_invoke$arity$1(new_db_37784) : fexpr__37691_37785.call(null,new_db_37784));
} else {
}

var seq__37692 = cljs.core.seq(effects_without_db);
var chunk__37693 = null;
var count__37694 = (0);
var i__37695 = (0);
while(true){
if((i__37695 < count__37694)){
var vec__37702 = chunk__37693.cljs$core$IIndexed$_nth$arity$2(null,i__37695);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37702,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37702,(1),null);
var temp__5733__auto___37787 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37787)){
var effect_fn_37788 = temp__5733__auto___37787;
(effect_fn_37788.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37788.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37788.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37789 = seq__37692;
var G__37790 = chunk__37693;
var G__37791 = count__37694;
var G__37792 = (i__37695 + (1));
seq__37692 = G__37789;
chunk__37693 = G__37790;
count__37694 = G__37791;
i__37695 = G__37792;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37692);
if(temp__5735__auto__){
var seq__37692__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37692__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37692__$1);
var G__37796 = cljs.core.chunk_rest(seq__37692__$1);
var G__37797 = c__4556__auto__;
var G__37798 = cljs.core.count(c__4556__auto__);
var G__37799 = (0);
seq__37692 = G__37796;
chunk__37693 = G__37797;
count__37694 = G__37798;
i__37695 = G__37799;
continue;
} else {
var vec__37705 = cljs.core.first(seq__37692__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37705,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37705,(1),null);
var temp__5733__auto___37800 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37800)){
var effect_fn_37801 = temp__5733__auto___37800;
(effect_fn_37801.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37801.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37801.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37802 = cljs.core.next(seq__37692__$1);
var G__37803 = null;
var G__37804 = (0);
var G__37805 = (0);
seq__37692 = G__37802;
chunk__37693 = G__37803;
count__37694 = G__37804;
i__37695 = G__37805;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__37421__auto___37806 = re_frame.interop.now();
var duration__37422__auto___37807 = (end__37421__auto___37806 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__37422__auto___37807,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__37421__auto___37806);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__37689);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___37808 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___37808)){
var new_db_37809 = temp__5735__auto___37808;
var fexpr__37708_37810 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37708_37810.cljs$core$IFn$_invoke$arity$1 ? fexpr__37708_37810.cljs$core$IFn$_invoke$arity$1(new_db_37809) : fexpr__37708_37810.call(null,new_db_37809));
} else {
}

var seq__37709 = cljs.core.seq(effects_without_db);
var chunk__37710 = null;
var count__37711 = (0);
var i__37712 = (0);
while(true){
if((i__37712 < count__37711)){
var vec__37719 = chunk__37710.cljs$core$IIndexed$_nth$arity$2(null,i__37712);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37719,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37719,(1),null);
var temp__5733__auto___37811 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37811)){
var effect_fn_37812 = temp__5733__auto___37811;
(effect_fn_37812.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37812.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37812.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37813 = seq__37709;
var G__37814 = chunk__37710;
var G__37815 = count__37711;
var G__37816 = (i__37712 + (1));
seq__37709 = G__37813;
chunk__37710 = G__37814;
count__37711 = G__37815;
i__37712 = G__37816;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37709);
if(temp__5735__auto__){
var seq__37709__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37709__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37709__$1);
var G__37817 = cljs.core.chunk_rest(seq__37709__$1);
var G__37818 = c__4556__auto__;
var G__37819 = cljs.core.count(c__4556__auto__);
var G__37820 = (0);
seq__37709 = G__37817;
chunk__37710 = G__37818;
count__37711 = G__37819;
i__37712 = G__37820;
continue;
} else {
var vec__37723 = cljs.core.first(seq__37709__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37723,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37723,(1),null);
var temp__5733__auto___37821 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37821)){
var effect_fn_37822 = temp__5733__auto___37821;
(effect_fn_37822.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37822.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37822.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37823 = cljs.core.next(seq__37709__$1);
var G__37824 = null;
var G__37825 = (0);
var G__37826 = (0);
seq__37709 = G__37823;
chunk__37710 = G__37824;
count__37711 = G__37825;
i__37712 = G__37826;
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
var seq__37733 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37734 = null;
var count__37735 = (0);
var i__37736 = (0);
while(true){
if((i__37736 < count__37735)){
var effect = chunk__37734.cljs$core$IIndexed$_nth$arity$2(null,i__37736);
re_frame.fx.dispatch_later(effect);


var G__37833 = seq__37733;
var G__37834 = chunk__37734;
var G__37835 = count__37735;
var G__37836 = (i__37736 + (1));
seq__37733 = G__37833;
chunk__37734 = G__37834;
count__37735 = G__37835;
i__37736 = G__37836;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37733);
if(temp__5735__auto__){
var seq__37733__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37733__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37733__$1);
var G__37837 = cljs.core.chunk_rest(seq__37733__$1);
var G__37838 = c__4556__auto__;
var G__37839 = cljs.core.count(c__4556__auto__);
var G__37840 = (0);
seq__37733 = G__37837;
chunk__37734 = G__37838;
count__37735 = G__37839;
i__37736 = G__37840;
continue;
} else {
var effect = cljs.core.first(seq__37733__$1);
re_frame.fx.dispatch_later(effect);


var G__37843 = cljs.core.next(seq__37733__$1);
var G__37844 = null;
var G__37845 = (0);
var G__37846 = (0);
seq__37733 = G__37843;
chunk__37734 = G__37844;
count__37735 = G__37845;
i__37736 = G__37846;
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
var seq__37739 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__37740 = null;
var count__37741 = (0);
var i__37742 = (0);
while(true){
if((i__37742 < count__37741)){
var vec__37750 = chunk__37740.cljs$core$IIndexed$_nth$arity$2(null,i__37742);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37750,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37750,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___37847 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37847)){
var effect_fn_37848 = temp__5733__auto___37847;
(effect_fn_37848.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37848.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37848.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__37849 = seq__37739;
var G__37850 = chunk__37740;
var G__37851 = count__37741;
var G__37852 = (i__37742 + (1));
seq__37739 = G__37849;
chunk__37740 = G__37850;
count__37741 = G__37851;
i__37742 = G__37852;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37739);
if(temp__5735__auto__){
var seq__37739__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37739__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37739__$1);
var G__37853 = cljs.core.chunk_rest(seq__37739__$1);
var G__37854 = c__4556__auto__;
var G__37855 = cljs.core.count(c__4556__auto__);
var G__37856 = (0);
seq__37739 = G__37853;
chunk__37740 = G__37854;
count__37741 = G__37855;
i__37742 = G__37856;
continue;
} else {
var vec__37757 = cljs.core.first(seq__37739__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37757,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37757,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___37857 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37857)){
var effect_fn_37858 = temp__5733__auto___37857;
(effect_fn_37858.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37858.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37858.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__37859 = cljs.core.next(seq__37739__$1);
var G__37860 = null;
var G__37861 = (0);
var G__37862 = (0);
seq__37739 = G__37859;
chunk__37740 = G__37860;
count__37741 = G__37861;
i__37742 = G__37862;
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
var seq__37765 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37766 = null;
var count__37767 = (0);
var i__37768 = (0);
while(true){
if((i__37768 < count__37767)){
var event = chunk__37766.cljs$core$IIndexed$_nth$arity$2(null,i__37768);
re_frame.router.dispatch(event);


var G__37863 = seq__37765;
var G__37864 = chunk__37766;
var G__37865 = count__37767;
var G__37866 = (i__37768 + (1));
seq__37765 = G__37863;
chunk__37766 = G__37864;
count__37767 = G__37865;
i__37768 = G__37866;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37765);
if(temp__5735__auto__){
var seq__37765__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37765__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37765__$1);
var G__37868 = cljs.core.chunk_rest(seq__37765__$1);
var G__37869 = c__4556__auto__;
var G__37870 = cljs.core.count(c__4556__auto__);
var G__37871 = (0);
seq__37765 = G__37868;
chunk__37766 = G__37869;
count__37767 = G__37870;
i__37768 = G__37871;
continue;
} else {
var event = cljs.core.first(seq__37765__$1);
re_frame.router.dispatch(event);


var G__37873 = cljs.core.next(seq__37765__$1);
var G__37874 = null;
var G__37875 = (0);
var G__37876 = (0);
seq__37765 = G__37873;
chunk__37766 = G__37874;
count__37767 = G__37875;
i__37768 = G__37876;
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
var seq__37769 = cljs.core.seq(value);
var chunk__37770 = null;
var count__37771 = (0);
var i__37772 = (0);
while(true){
if((i__37772 < count__37771)){
var event = chunk__37770.cljs$core$IIndexed$_nth$arity$2(null,i__37772);
clear_event(event);


var G__37877 = seq__37769;
var G__37878 = chunk__37770;
var G__37879 = count__37771;
var G__37880 = (i__37772 + (1));
seq__37769 = G__37877;
chunk__37770 = G__37878;
count__37771 = G__37879;
i__37772 = G__37880;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37769);
if(temp__5735__auto__){
var seq__37769__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37769__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37769__$1);
var G__37881 = cljs.core.chunk_rest(seq__37769__$1);
var G__37882 = c__4556__auto__;
var G__37883 = cljs.core.count(c__4556__auto__);
var G__37884 = (0);
seq__37769 = G__37881;
chunk__37770 = G__37882;
count__37771 = G__37883;
i__37772 = G__37884;
continue;
} else {
var event = cljs.core.first(seq__37769__$1);
clear_event(event);


var G__37889 = cljs.core.next(seq__37769__$1);
var G__37890 = null;
var G__37891 = (0);
var G__37892 = (0);
seq__37769 = G__37889;
chunk__37770 = G__37890;
count__37771 = G__37891;
i__37772 = G__37892;
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
