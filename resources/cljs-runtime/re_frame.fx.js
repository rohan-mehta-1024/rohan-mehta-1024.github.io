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
var _STAR_current_trace_STAR__orig_val__37705 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__37706 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__37706);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___37791 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___37791)){
var new_db_37792 = temp__5735__auto___37791;
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
var temp__5733__auto___37795 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37795)){
var effect_fn_37797 = temp__5733__auto___37795;
(effect_fn_37797.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37797.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37797.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37798 = seq__37708;
var G__37799 = chunk__37709;
var G__37800 = count__37710;
var G__37801 = (i__37711 + (1));
seq__37708 = G__37798;
chunk__37709 = G__37799;
count__37710 = G__37800;
i__37711 = G__37801;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37708);
if(temp__5735__auto__){
var seq__37708__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37708__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37708__$1);
var G__37802 = cljs.core.chunk_rest(seq__37708__$1);
var G__37803 = c__4556__auto__;
var G__37804 = cljs.core.count(c__4556__auto__);
var G__37805 = (0);
seq__37708 = G__37802;
chunk__37709 = G__37803;
count__37710 = G__37804;
i__37711 = G__37805;
continue;
} else {
var vec__37721 = cljs.core.first(seq__37708__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37721,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37721,(1),null);
var temp__5733__auto___37806 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37806)){
var effect_fn_37807 = temp__5733__auto___37806;
(effect_fn_37807.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37807.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37807.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37808 = cljs.core.next(seq__37708__$1);
var G__37809 = null;
var G__37810 = (0);
var G__37811 = (0);
seq__37708 = G__37808;
chunk__37709 = G__37809;
count__37710 = G__37810;
i__37711 = G__37811;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__37421__auto___37812 = re_frame.interop.now();
var duration__37422__auto___37813 = (end__37421__auto___37812 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__37422__auto___37813,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__37421__auto___37812);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__37705);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___37814 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___37814)){
var new_db_37815 = temp__5735__auto___37814;
var fexpr__37724_37816 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37724_37816.cljs$core$IFn$_invoke$arity$1 ? fexpr__37724_37816.cljs$core$IFn$_invoke$arity$1(new_db_37815) : fexpr__37724_37816.call(null,new_db_37815));
} else {
}

var seq__37725 = cljs.core.seq(effects_without_db);
var chunk__37726 = null;
var count__37727 = (0);
var i__37728 = (0);
while(true){
if((i__37728 < count__37727)){
var vec__37737 = chunk__37726.cljs$core$IIndexed$_nth$arity$2(null,i__37728);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37737,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37737,(1),null);
var temp__5733__auto___37817 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37817)){
var effect_fn_37818 = temp__5733__auto___37817;
(effect_fn_37818.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37818.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37818.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37819 = seq__37725;
var G__37820 = chunk__37726;
var G__37821 = count__37727;
var G__37822 = (i__37728 + (1));
seq__37725 = G__37819;
chunk__37726 = G__37820;
count__37727 = G__37821;
i__37728 = G__37822;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37725);
if(temp__5735__auto__){
var seq__37725__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37725__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37725__$1);
var G__37835 = cljs.core.chunk_rest(seq__37725__$1);
var G__37836 = c__4556__auto__;
var G__37837 = cljs.core.count(c__4556__auto__);
var G__37838 = (0);
seq__37725 = G__37835;
chunk__37726 = G__37836;
count__37727 = G__37837;
i__37728 = G__37838;
continue;
} else {
var vec__37740 = cljs.core.first(seq__37725__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37740,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37740,(1),null);
var temp__5733__auto___37839 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37839)){
var effect_fn_37840 = temp__5733__auto___37839;
(effect_fn_37840.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37840.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37840.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37841 = cljs.core.next(seq__37725__$1);
var G__37842 = null;
var G__37843 = (0);
var G__37844 = (0);
seq__37725 = G__37841;
chunk__37726 = G__37842;
count__37727 = G__37843;
i__37728 = G__37844;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__37744){
var map__37745 = p__37744;
var map__37745__$1 = (((((!((map__37745 == null))))?(((((map__37745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37745):map__37745);
var effect = map__37745__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37745__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37745__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__37747 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37748 = null;
var count__37749 = (0);
var i__37750 = (0);
while(true){
if((i__37750 < count__37749)){
var effect = chunk__37748.cljs$core$IIndexed$_nth$arity$2(null,i__37750);
re_frame.fx.dispatch_later(effect);


var G__37846 = seq__37747;
var G__37847 = chunk__37748;
var G__37848 = count__37749;
var G__37849 = (i__37750 + (1));
seq__37747 = G__37846;
chunk__37748 = G__37847;
count__37749 = G__37848;
i__37750 = G__37849;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37747);
if(temp__5735__auto__){
var seq__37747__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37747__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37747__$1);
var G__37852 = cljs.core.chunk_rest(seq__37747__$1);
var G__37853 = c__4556__auto__;
var G__37854 = cljs.core.count(c__4556__auto__);
var G__37855 = (0);
seq__37747 = G__37852;
chunk__37748 = G__37853;
count__37749 = G__37854;
i__37750 = G__37855;
continue;
} else {
var effect = cljs.core.first(seq__37747__$1);
re_frame.fx.dispatch_later(effect);


var G__37856 = cljs.core.next(seq__37747__$1);
var G__37857 = null;
var G__37858 = (0);
var G__37859 = (0);
seq__37747 = G__37856;
chunk__37748 = G__37857;
count__37749 = G__37858;
i__37750 = G__37859;
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
var seq__37751 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__37752 = null;
var count__37753 = (0);
var i__37754 = (0);
while(true){
if((i__37754 < count__37753)){
var vec__37761 = chunk__37752.cljs$core$IIndexed$_nth$arity$2(null,i__37754);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37761,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37761,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___37866 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37866)){
var effect_fn_37867 = temp__5733__auto___37866;
(effect_fn_37867.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37867.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37867.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__37869 = seq__37751;
var G__37871 = chunk__37752;
var G__37872 = count__37753;
var G__37873 = (i__37754 + (1));
seq__37751 = G__37869;
chunk__37752 = G__37871;
count__37753 = G__37872;
i__37754 = G__37873;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37751);
if(temp__5735__auto__){
var seq__37751__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37751__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37751__$1);
var G__37878 = cljs.core.chunk_rest(seq__37751__$1);
var G__37879 = c__4556__auto__;
var G__37880 = cljs.core.count(c__4556__auto__);
var G__37881 = (0);
seq__37751 = G__37878;
chunk__37752 = G__37879;
count__37753 = G__37880;
i__37754 = G__37881;
continue;
} else {
var vec__37766 = cljs.core.first(seq__37751__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37766,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37766,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___37891 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37891)){
var effect_fn_37892 = temp__5733__auto___37891;
(effect_fn_37892.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37892.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37892.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__37893 = cljs.core.next(seq__37751__$1);
var G__37894 = null;
var G__37895 = (0);
var G__37896 = (0);
seq__37751 = G__37893;
chunk__37752 = G__37894;
count__37753 = G__37895;
i__37754 = G__37896;
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
var seq__37771 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37772 = null;
var count__37773 = (0);
var i__37774 = (0);
while(true){
if((i__37774 < count__37773)){
var event = chunk__37772.cljs$core$IIndexed$_nth$arity$2(null,i__37774);
re_frame.router.dispatch(event);


var G__37897 = seq__37771;
var G__37898 = chunk__37772;
var G__37899 = count__37773;
var G__37900 = (i__37774 + (1));
seq__37771 = G__37897;
chunk__37772 = G__37898;
count__37773 = G__37899;
i__37774 = G__37900;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37771);
if(temp__5735__auto__){
var seq__37771__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37771__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37771__$1);
var G__37901 = cljs.core.chunk_rest(seq__37771__$1);
var G__37902 = c__4556__auto__;
var G__37903 = cljs.core.count(c__4556__auto__);
var G__37904 = (0);
seq__37771 = G__37901;
chunk__37772 = G__37902;
count__37773 = G__37903;
i__37774 = G__37904;
continue;
} else {
var event = cljs.core.first(seq__37771__$1);
re_frame.router.dispatch(event);


var G__37905 = cljs.core.next(seq__37771__$1);
var G__37906 = null;
var G__37907 = (0);
var G__37908 = (0);
seq__37771 = G__37905;
chunk__37772 = G__37906;
count__37773 = G__37907;
i__37774 = G__37908;
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


var G__37909 = seq__37780;
var G__37910 = chunk__37781;
var G__37911 = count__37782;
var G__37912 = (i__37783 + (1));
seq__37780 = G__37909;
chunk__37781 = G__37910;
count__37782 = G__37911;
i__37783 = G__37912;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37780);
if(temp__5735__auto__){
var seq__37780__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37780__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37780__$1);
var G__37913 = cljs.core.chunk_rest(seq__37780__$1);
var G__37914 = c__4556__auto__;
var G__37915 = cljs.core.count(c__4556__auto__);
var G__37916 = (0);
seq__37780 = G__37913;
chunk__37781 = G__37914;
count__37782 = G__37915;
i__37783 = G__37916;
continue;
} else {
var event = cljs.core.first(seq__37780__$1);
clear_event(event);


var G__37919 = cljs.core.next(seq__37780__$1);
var G__37920 = null;
var G__37921 = (0);
var G__37922 = (0);
seq__37780 = G__37919;
chunk__37781 = G__37920;
count__37782 = G__37921;
i__37783 = G__37922;
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
