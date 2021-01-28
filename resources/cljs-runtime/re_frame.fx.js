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
var _STAR_current_trace_STAR__orig_val__37704 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__37705 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__37705);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___37794 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___37794)){
var new_db_37797 = temp__5735__auto___37794;
var fexpr__37706_37798 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37706_37798.cljs$core$IFn$_invoke$arity$1 ? fexpr__37706_37798.cljs$core$IFn$_invoke$arity$1(new_db_37797) : fexpr__37706_37798.call(null,new_db_37797));
} else {
}

var seq__37707 = cljs.core.seq(effects_without_db);
var chunk__37708 = null;
var count__37709 = (0);
var i__37710 = (0);
while(true){
if((i__37710 < count__37709)){
var vec__37718 = chunk__37708.cljs$core$IIndexed$_nth$arity$2(null,i__37710);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37718,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37718,(1),null);
var temp__5733__auto___37799 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37799)){
var effect_fn_37800 = temp__5733__auto___37799;
(effect_fn_37800.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37800.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37800.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37801 = seq__37707;
var G__37802 = chunk__37708;
var G__37803 = count__37709;
var G__37804 = (i__37710 + (1));
seq__37707 = G__37801;
chunk__37708 = G__37802;
count__37709 = G__37803;
i__37710 = G__37804;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37707);
if(temp__5735__auto__){
var seq__37707__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37707__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37707__$1);
var G__37805 = cljs.core.chunk_rest(seq__37707__$1);
var G__37806 = c__4556__auto__;
var G__37807 = cljs.core.count(c__4556__auto__);
var G__37808 = (0);
seq__37707 = G__37805;
chunk__37708 = G__37806;
count__37709 = G__37807;
i__37710 = G__37808;
continue;
} else {
var vec__37722 = cljs.core.first(seq__37707__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37722,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37722,(1),null);
var temp__5733__auto___37809 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37809)){
var effect_fn_37810 = temp__5733__auto___37809;
(effect_fn_37810.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37810.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37810.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37811 = cljs.core.next(seq__37707__$1);
var G__37812 = null;
var G__37813 = (0);
var G__37814 = (0);
seq__37707 = G__37811;
chunk__37708 = G__37812;
count__37709 = G__37813;
i__37710 = G__37814;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__37421__auto___37815 = re_frame.interop.now();
var duration__37422__auto___37816 = (end__37421__auto___37815 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__37422__auto___37816,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__37421__auto___37815);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__37704);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___37821 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___37821)){
var new_db_37822 = temp__5735__auto___37821;
var fexpr__37729_37823 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37729_37823.cljs$core$IFn$_invoke$arity$1 ? fexpr__37729_37823.cljs$core$IFn$_invoke$arity$1(new_db_37822) : fexpr__37729_37823.call(null,new_db_37822));
} else {
}

var seq__37730 = cljs.core.seq(effects_without_db);
var chunk__37731 = null;
var count__37732 = (0);
var i__37733 = (0);
while(true){
if((i__37733 < count__37732)){
var vec__37742 = chunk__37731.cljs$core$IIndexed$_nth$arity$2(null,i__37733);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37742,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37742,(1),null);
var temp__5733__auto___37824 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37824)){
var effect_fn_37825 = temp__5733__auto___37824;
(effect_fn_37825.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37825.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37825.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37826 = seq__37730;
var G__37827 = chunk__37731;
var G__37828 = count__37732;
var G__37829 = (i__37733 + (1));
seq__37730 = G__37826;
chunk__37731 = G__37827;
count__37732 = G__37828;
i__37733 = G__37829;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37730);
if(temp__5735__auto__){
var seq__37730__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37730__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37730__$1);
var G__37832 = cljs.core.chunk_rest(seq__37730__$1);
var G__37833 = c__4556__auto__;
var G__37834 = cljs.core.count(c__4556__auto__);
var G__37835 = (0);
seq__37730 = G__37832;
chunk__37731 = G__37833;
count__37732 = G__37834;
i__37733 = G__37835;
continue;
} else {
var vec__37745 = cljs.core.first(seq__37730__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37745,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37745,(1),null);
var temp__5733__auto___37836 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37836)){
var effect_fn_37837 = temp__5733__auto___37836;
(effect_fn_37837.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37837.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37837.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37839 = cljs.core.next(seq__37730__$1);
var G__37840 = null;
var G__37841 = (0);
var G__37842 = (0);
seq__37730 = G__37839;
chunk__37731 = G__37840;
count__37732 = G__37841;
i__37733 = G__37842;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__37748){
var map__37749 = p__37748;
var map__37749__$1 = (((((!((map__37749 == null))))?(((((map__37749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37749):map__37749);
var effect = map__37749__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37749__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37749__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__37751 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37752 = null;
var count__37753 = (0);
var i__37754 = (0);
while(true){
if((i__37754 < count__37753)){
var effect = chunk__37752.cljs$core$IIndexed$_nth$arity$2(null,i__37754);
re_frame.fx.dispatch_later(effect);


var G__37845 = seq__37751;
var G__37846 = chunk__37752;
var G__37847 = count__37753;
var G__37848 = (i__37754 + (1));
seq__37751 = G__37845;
chunk__37752 = G__37846;
count__37753 = G__37847;
i__37754 = G__37848;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37751);
if(temp__5735__auto__){
var seq__37751__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37751__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37751__$1);
var G__37849 = cljs.core.chunk_rest(seq__37751__$1);
var G__37850 = c__4556__auto__;
var G__37851 = cljs.core.count(c__4556__auto__);
var G__37852 = (0);
seq__37751 = G__37849;
chunk__37752 = G__37850;
count__37753 = G__37851;
i__37754 = G__37852;
continue;
} else {
var effect = cljs.core.first(seq__37751__$1);
re_frame.fx.dispatch_later(effect);


var G__37853 = cljs.core.next(seq__37751__$1);
var G__37854 = null;
var G__37855 = (0);
var G__37856 = (0);
seq__37751 = G__37853;
chunk__37752 = G__37854;
count__37753 = G__37855;
i__37754 = G__37856;
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
var seq__37757 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__37758 = null;
var count__37759 = (0);
var i__37760 = (0);
while(true){
if((i__37760 < count__37759)){
var vec__37770 = chunk__37758.cljs$core$IIndexed$_nth$arity$2(null,i__37760);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37770,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37770,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___37861 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37861)){
var effect_fn_37862 = temp__5733__auto___37861;
(effect_fn_37862.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37862.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37862.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__37867 = seq__37757;
var G__37868 = chunk__37758;
var G__37869 = count__37759;
var G__37870 = (i__37760 + (1));
seq__37757 = G__37867;
chunk__37758 = G__37868;
count__37759 = G__37869;
i__37760 = G__37870;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37757);
if(temp__5735__auto__){
var seq__37757__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37757__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37757__$1);
var G__37875 = cljs.core.chunk_rest(seq__37757__$1);
var G__37876 = c__4556__auto__;
var G__37877 = cljs.core.count(c__4556__auto__);
var G__37878 = (0);
seq__37757 = G__37875;
chunk__37758 = G__37876;
count__37759 = G__37877;
i__37760 = G__37878;
continue;
} else {
var vec__37774 = cljs.core.first(seq__37757__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37774,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37774,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___37879 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37879)){
var effect_fn_37880 = temp__5733__auto___37879;
(effect_fn_37880.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37880.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37880.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__37881 = cljs.core.next(seq__37757__$1);
var G__37882 = null;
var G__37883 = (0);
var G__37884 = (0);
seq__37757 = G__37881;
chunk__37758 = G__37882;
count__37759 = G__37883;
i__37760 = G__37884;
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
var seq__37779 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37780 = null;
var count__37781 = (0);
var i__37782 = (0);
while(true){
if((i__37782 < count__37781)){
var event = chunk__37780.cljs$core$IIndexed$_nth$arity$2(null,i__37782);
re_frame.router.dispatch(event);


var G__37896 = seq__37779;
var G__37897 = chunk__37780;
var G__37898 = count__37781;
var G__37899 = (i__37782 + (1));
seq__37779 = G__37896;
chunk__37780 = G__37897;
count__37781 = G__37898;
i__37782 = G__37899;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37779);
if(temp__5735__auto__){
var seq__37779__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37779__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37779__$1);
var G__37900 = cljs.core.chunk_rest(seq__37779__$1);
var G__37901 = c__4556__auto__;
var G__37902 = cljs.core.count(c__4556__auto__);
var G__37903 = (0);
seq__37779 = G__37900;
chunk__37780 = G__37901;
count__37781 = G__37902;
i__37782 = G__37903;
continue;
} else {
var event = cljs.core.first(seq__37779__$1);
re_frame.router.dispatch(event);


var G__37904 = cljs.core.next(seq__37779__$1);
var G__37905 = null;
var G__37906 = (0);
var G__37907 = (0);
seq__37779 = G__37904;
chunk__37780 = G__37905;
count__37781 = G__37906;
i__37782 = G__37907;
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
var seq__37783 = cljs.core.seq(value);
var chunk__37784 = null;
var count__37785 = (0);
var i__37786 = (0);
while(true){
if((i__37786 < count__37785)){
var event = chunk__37784.cljs$core$IIndexed$_nth$arity$2(null,i__37786);
clear_event(event);


var G__37910 = seq__37783;
var G__37911 = chunk__37784;
var G__37912 = count__37785;
var G__37913 = (i__37786 + (1));
seq__37783 = G__37910;
chunk__37784 = G__37911;
count__37785 = G__37912;
i__37786 = G__37913;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37783);
if(temp__5735__auto__){
var seq__37783__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37783__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37783__$1);
var G__37914 = cljs.core.chunk_rest(seq__37783__$1);
var G__37915 = c__4556__auto__;
var G__37916 = cljs.core.count(c__4556__auto__);
var G__37917 = (0);
seq__37783 = G__37914;
chunk__37784 = G__37915;
count__37785 = G__37916;
i__37786 = G__37917;
continue;
} else {
var event = cljs.core.first(seq__37783__$1);
clear_event(event);


var G__37918 = cljs.core.next(seq__37783__$1);
var G__37919 = null;
var G__37920 = (0);
var G__37921 = (0);
seq__37783 = G__37918;
chunk__37784 = G__37919;
count__37785 = G__37920;
i__37786 = G__37921;
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
