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
var _STAR_current_trace_STAR__orig_val__37699 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__37700 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__37700);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___37791 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___37791)){
var new_db_37792 = temp__5735__auto___37791;
var fexpr__37701_37793 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37701_37793.cljs$core$IFn$_invoke$arity$1 ? fexpr__37701_37793.cljs$core$IFn$_invoke$arity$1(new_db_37792) : fexpr__37701_37793.call(null,new_db_37792));
} else {
}

var seq__37702 = cljs.core.seq(effects_without_db);
var chunk__37703 = null;
var count__37704 = (0);
var i__37705 = (0);
while(true){
if((i__37705 < count__37704)){
var vec__37713 = chunk__37703.cljs$core$IIndexed$_nth$arity$2(null,i__37705);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37713,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37713,(1),null);
var temp__5733__auto___37794 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37794)){
var effect_fn_37795 = temp__5733__auto___37794;
(effect_fn_37795.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37795.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37795.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37796 = seq__37702;
var G__37797 = chunk__37703;
var G__37798 = count__37704;
var G__37799 = (i__37705 + (1));
seq__37702 = G__37796;
chunk__37703 = G__37797;
count__37704 = G__37798;
i__37705 = G__37799;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37702);
if(temp__5735__auto__){
var seq__37702__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37702__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37702__$1);
var G__37800 = cljs.core.chunk_rest(seq__37702__$1);
var G__37801 = c__4556__auto__;
var G__37802 = cljs.core.count(c__4556__auto__);
var G__37803 = (0);
seq__37702 = G__37800;
chunk__37703 = G__37801;
count__37704 = G__37802;
i__37705 = G__37803;
continue;
} else {
var vec__37719 = cljs.core.first(seq__37702__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37719,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37719,(1),null);
var temp__5733__auto___37806 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37806)){
var effect_fn_37807 = temp__5733__auto___37806;
(effect_fn_37807.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37807.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37807.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37808 = cljs.core.next(seq__37702__$1);
var G__37809 = null;
var G__37810 = (0);
var G__37811 = (0);
seq__37702 = G__37808;
chunk__37703 = G__37809;
count__37704 = G__37810;
i__37705 = G__37811;
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
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__37699);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___37814 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___37814)){
var new_db_37815 = temp__5735__auto___37814;
var fexpr__37725_37816 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37725_37816.cljs$core$IFn$_invoke$arity$1 ? fexpr__37725_37816.cljs$core$IFn$_invoke$arity$1(new_db_37815) : fexpr__37725_37816.call(null,new_db_37815));
} else {
}

var seq__37726 = cljs.core.seq(effects_without_db);
var chunk__37727 = null;
var count__37728 = (0);
var i__37729 = (0);
while(true){
if((i__37729 < count__37728)){
var vec__37736 = chunk__37727.cljs$core$IIndexed$_nth$arity$2(null,i__37729);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37736,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37736,(1),null);
var temp__5733__auto___37817 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37817)){
var effect_fn_37818 = temp__5733__auto___37817;
(effect_fn_37818.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37818.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37818.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37819 = seq__37726;
var G__37820 = chunk__37727;
var G__37821 = count__37728;
var G__37822 = (i__37729 + (1));
seq__37726 = G__37819;
chunk__37727 = G__37820;
count__37728 = G__37821;
i__37729 = G__37822;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37726);
if(temp__5735__auto__){
var seq__37726__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37726__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37726__$1);
var G__37823 = cljs.core.chunk_rest(seq__37726__$1);
var G__37824 = c__4556__auto__;
var G__37825 = cljs.core.count(c__4556__auto__);
var G__37826 = (0);
seq__37726 = G__37823;
chunk__37727 = G__37824;
count__37728 = G__37825;
i__37729 = G__37826;
continue;
} else {
var vec__37740 = cljs.core.first(seq__37726__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37740,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37740,(1),null);
var temp__5733__auto___37828 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37828)){
var effect_fn_37829 = temp__5733__auto___37828;
(effect_fn_37829.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37829.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37829.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37834 = cljs.core.next(seq__37726__$1);
var G__37835 = null;
var G__37836 = (0);
var G__37837 = (0);
seq__37726 = G__37834;
chunk__37727 = G__37835;
count__37728 = G__37836;
i__37729 = G__37837;
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
var seq__37748 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37749 = null;
var count__37750 = (0);
var i__37751 = (0);
while(true){
if((i__37751 < count__37750)){
var effect = chunk__37749.cljs$core$IIndexed$_nth$arity$2(null,i__37751);
re_frame.fx.dispatch_later(effect);


var G__37838 = seq__37748;
var G__37839 = chunk__37749;
var G__37840 = count__37750;
var G__37841 = (i__37751 + (1));
seq__37748 = G__37838;
chunk__37749 = G__37839;
count__37750 = G__37840;
i__37751 = G__37841;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37748);
if(temp__5735__auto__){
var seq__37748__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37748__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37748__$1);
var G__37842 = cljs.core.chunk_rest(seq__37748__$1);
var G__37843 = c__4556__auto__;
var G__37844 = cljs.core.count(c__4556__auto__);
var G__37845 = (0);
seq__37748 = G__37842;
chunk__37749 = G__37843;
count__37750 = G__37844;
i__37751 = G__37845;
continue;
} else {
var effect = cljs.core.first(seq__37748__$1);
re_frame.fx.dispatch_later(effect);


var G__37846 = cljs.core.next(seq__37748__$1);
var G__37847 = null;
var G__37848 = (0);
var G__37849 = (0);
seq__37748 = G__37846;
chunk__37749 = G__37847;
count__37750 = G__37848;
i__37751 = G__37849;
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
var seq__37755 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__37756 = null;
var count__37757 = (0);
var i__37758 = (0);
while(true){
if((i__37758 < count__37757)){
var vec__37765 = chunk__37756.cljs$core$IIndexed$_nth$arity$2(null,i__37758);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37765,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37765,(1),null);
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


var G__37857 = seq__37755;
var G__37858 = chunk__37756;
var G__37859 = count__37757;
var G__37860 = (i__37758 + (1));
seq__37755 = G__37857;
chunk__37756 = G__37858;
count__37757 = G__37859;
i__37758 = G__37860;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37755);
if(temp__5735__auto__){
var seq__37755__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37755__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37755__$1);
var G__37861 = cljs.core.chunk_rest(seq__37755__$1);
var G__37862 = c__4556__auto__;
var G__37863 = cljs.core.count(c__4556__auto__);
var G__37864 = (0);
seq__37755 = G__37861;
chunk__37756 = G__37862;
count__37757 = G__37863;
i__37758 = G__37864;
continue;
} else {
var vec__37768 = cljs.core.first(seq__37755__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37768,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37768,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___37865 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37865)){
var effect_fn_37866 = temp__5733__auto___37865;
(effect_fn_37866.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37866.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37866.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__37867 = cljs.core.next(seq__37755__$1);
var G__37868 = null;
var G__37869 = (0);
var G__37870 = (0);
seq__37755 = G__37867;
chunk__37756 = G__37868;
count__37757 = G__37869;
i__37758 = G__37870;
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


var G__37873 = seq__37771;
var G__37874 = chunk__37772;
var G__37875 = count__37773;
var G__37876 = (i__37774 + (1));
seq__37771 = G__37873;
chunk__37772 = G__37874;
count__37773 = G__37875;
i__37774 = G__37876;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37771);
if(temp__5735__auto__){
var seq__37771__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37771__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37771__$1);
var G__37882 = cljs.core.chunk_rest(seq__37771__$1);
var G__37883 = c__4556__auto__;
var G__37884 = cljs.core.count(c__4556__auto__);
var G__37885 = (0);
seq__37771 = G__37882;
chunk__37772 = G__37883;
count__37773 = G__37884;
i__37774 = G__37885;
continue;
} else {
var event = cljs.core.first(seq__37771__$1);
re_frame.router.dispatch(event);


var G__37886 = cljs.core.next(seq__37771__$1);
var G__37887 = null;
var G__37888 = (0);
var G__37889 = (0);
seq__37771 = G__37886;
chunk__37772 = G__37887;
count__37773 = G__37888;
i__37774 = G__37889;
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
var seq__37779 = cljs.core.seq(value);
var chunk__37780 = null;
var count__37781 = (0);
var i__37782 = (0);
while(true){
if((i__37782 < count__37781)){
var event = chunk__37780.cljs$core$IIndexed$_nth$arity$2(null,i__37782);
clear_event(event);


var G__37892 = seq__37779;
var G__37893 = chunk__37780;
var G__37894 = count__37781;
var G__37895 = (i__37782 + (1));
seq__37779 = G__37892;
chunk__37780 = G__37893;
count__37781 = G__37894;
i__37782 = G__37895;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37779);
if(temp__5735__auto__){
var seq__37779__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37779__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37779__$1);
var G__37897 = cljs.core.chunk_rest(seq__37779__$1);
var G__37898 = c__4556__auto__;
var G__37899 = cljs.core.count(c__4556__auto__);
var G__37900 = (0);
seq__37779 = G__37897;
chunk__37780 = G__37898;
count__37781 = G__37899;
i__37782 = G__37900;
continue;
} else {
var event = cljs.core.first(seq__37779__$1);
clear_event(event);


var G__37901 = cljs.core.next(seq__37779__$1);
var G__37902 = null;
var G__37903 = (0);
var G__37904 = (0);
seq__37779 = G__37901;
chunk__37780 = G__37902;
count__37781 = G__37903;
i__37782 = G__37904;
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
