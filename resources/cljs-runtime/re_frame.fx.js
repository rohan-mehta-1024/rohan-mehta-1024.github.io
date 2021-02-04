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
var temp__5735__auto___37784 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___37784)){
var new_db_37785 = temp__5735__auto___37784;
var fexpr__37695_37786 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37695_37786.cljs$core$IFn$_invoke$arity$1 ? fexpr__37695_37786.cljs$core$IFn$_invoke$arity$1(new_db_37785) : fexpr__37695_37786.call(null,new_db_37785));
} else {
}

var seq__37696 = cljs.core.seq(effects_without_db);
var chunk__37697 = null;
var count__37698 = (0);
var i__37699 = (0);
while(true){
if((i__37699 < count__37698)){
var vec__37706 = chunk__37697.cljs$core$IIndexed$_nth$arity$2(null,i__37699);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37706,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37706,(1),null);
var temp__5733__auto___37787 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37787)){
var effect_fn_37788 = temp__5733__auto___37787;
(effect_fn_37788.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37788.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37788.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37789 = seq__37696;
var G__37790 = chunk__37697;
var G__37791 = count__37698;
var G__37792 = (i__37699 + (1));
seq__37696 = G__37789;
chunk__37697 = G__37790;
count__37698 = G__37791;
i__37699 = G__37792;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37696);
if(temp__5735__auto__){
var seq__37696__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37696__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37696__$1);
var G__37793 = cljs.core.chunk_rest(seq__37696__$1);
var G__37794 = c__4556__auto__;
var G__37795 = cljs.core.count(c__4556__auto__);
var G__37796 = (0);
seq__37696 = G__37793;
chunk__37697 = G__37794;
count__37698 = G__37795;
i__37699 = G__37796;
continue;
} else {
var vec__37709 = cljs.core.first(seq__37696__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37709,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37709,(1),null);
var temp__5733__auto___37797 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37797)){
var effect_fn_37801 = temp__5733__auto___37797;
(effect_fn_37801.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37801.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37801.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37802 = cljs.core.next(seq__37696__$1);
var G__37803 = null;
var G__37804 = (0);
var G__37805 = (0);
seq__37696 = G__37802;
chunk__37697 = G__37803;
count__37698 = G__37804;
i__37699 = G__37805;
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
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__37691);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___37809 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___37809)){
var new_db_37810 = temp__5735__auto___37809;
var fexpr__37712_37811 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37712_37811.cljs$core$IFn$_invoke$arity$1 ? fexpr__37712_37811.cljs$core$IFn$_invoke$arity$1(new_db_37810) : fexpr__37712_37811.call(null,new_db_37810));
} else {
}

var seq__37713 = cljs.core.seq(effects_without_db);
var chunk__37714 = null;
var count__37715 = (0);
var i__37716 = (0);
while(true){
if((i__37716 < count__37715)){
var vec__37723 = chunk__37714.cljs$core$IIndexed$_nth$arity$2(null,i__37716);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37723,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37723,(1),null);
var temp__5733__auto___37812 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37812)){
var effect_fn_37813 = temp__5733__auto___37812;
(effect_fn_37813.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37813.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37813.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37816 = seq__37713;
var G__37817 = chunk__37714;
var G__37818 = count__37715;
var G__37819 = (i__37716 + (1));
seq__37713 = G__37816;
chunk__37714 = G__37817;
count__37715 = G__37818;
i__37716 = G__37819;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37713);
if(temp__5735__auto__){
var seq__37713__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37713__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37713__$1);
var G__37820 = cljs.core.chunk_rest(seq__37713__$1);
var G__37821 = c__4556__auto__;
var G__37822 = cljs.core.count(c__4556__auto__);
var G__37823 = (0);
seq__37713 = G__37820;
chunk__37714 = G__37821;
count__37715 = G__37822;
i__37716 = G__37823;
continue;
} else {
var vec__37726 = cljs.core.first(seq__37713__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37726,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37726,(1),null);
var temp__5733__auto___37824 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37824)){
var effect_fn_37825 = temp__5733__auto___37824;
(effect_fn_37825.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37825.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37825.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37826 = cljs.core.next(seq__37713__$1);
var G__37827 = null;
var G__37828 = (0);
var G__37829 = (0);
seq__37713 = G__37826;
chunk__37714 = G__37827;
count__37715 = G__37828;
i__37716 = G__37829;
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
var seq__37732 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37733 = null;
var count__37734 = (0);
var i__37735 = (0);
while(true){
if((i__37735 < count__37734)){
var effect = chunk__37733.cljs$core$IIndexed$_nth$arity$2(null,i__37735);
re_frame.fx.dispatch_later(effect);


var G__37832 = seq__37732;
var G__37833 = chunk__37733;
var G__37834 = count__37734;
var G__37835 = (i__37735 + (1));
seq__37732 = G__37832;
chunk__37733 = G__37833;
count__37734 = G__37834;
i__37735 = G__37835;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37732);
if(temp__5735__auto__){
var seq__37732__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37732__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37732__$1);
var G__37836 = cljs.core.chunk_rest(seq__37732__$1);
var G__37837 = c__4556__auto__;
var G__37838 = cljs.core.count(c__4556__auto__);
var G__37839 = (0);
seq__37732 = G__37836;
chunk__37733 = G__37837;
count__37734 = G__37838;
i__37735 = G__37839;
continue;
} else {
var effect = cljs.core.first(seq__37732__$1);
re_frame.fx.dispatch_later(effect);


var G__37841 = cljs.core.next(seq__37732__$1);
var G__37842 = null;
var G__37843 = (0);
var G__37844 = (0);
seq__37732 = G__37841;
chunk__37733 = G__37842;
count__37734 = G__37843;
i__37735 = G__37844;
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
var seq__37736 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__37737 = null;
var count__37738 = (0);
var i__37739 = (0);
while(true){
if((i__37739 < count__37738)){
var vec__37754 = chunk__37737.cljs$core$IIndexed$_nth$arity$2(null,i__37739);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37754,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37754,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___37845 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37845)){
var effect_fn_37846 = temp__5733__auto___37845;
(effect_fn_37846.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37846.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37846.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__37847 = seq__37736;
var G__37848 = chunk__37737;
var G__37849 = count__37738;
var G__37850 = (i__37739 + (1));
seq__37736 = G__37847;
chunk__37737 = G__37848;
count__37738 = G__37849;
i__37739 = G__37850;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37736);
if(temp__5735__auto__){
var seq__37736__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37736__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37736__$1);
var G__37851 = cljs.core.chunk_rest(seq__37736__$1);
var G__37852 = c__4556__auto__;
var G__37853 = cljs.core.count(c__4556__auto__);
var G__37854 = (0);
seq__37736 = G__37851;
chunk__37737 = G__37852;
count__37738 = G__37853;
i__37739 = G__37854;
continue;
} else {
var vec__37757 = cljs.core.first(seq__37736__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37757,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37757,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___37855 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37855)){
var effect_fn_37860 = temp__5733__auto___37855;
(effect_fn_37860.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37860.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37860.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__37865 = cljs.core.next(seq__37736__$1);
var G__37866 = null;
var G__37867 = (0);
var G__37868 = (0);
seq__37736 = G__37865;
chunk__37737 = G__37866;
count__37738 = G__37867;
i__37739 = G__37868;
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


var G__37877 = seq__37763;
var G__37878 = chunk__37764;
var G__37879 = count__37765;
var G__37880 = (i__37766 + (1));
seq__37763 = G__37877;
chunk__37764 = G__37878;
count__37765 = G__37879;
i__37766 = G__37880;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37763);
if(temp__5735__auto__){
var seq__37763__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37763__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37763__$1);
var G__37881 = cljs.core.chunk_rest(seq__37763__$1);
var G__37882 = c__4556__auto__;
var G__37883 = cljs.core.count(c__4556__auto__);
var G__37884 = (0);
seq__37763 = G__37881;
chunk__37764 = G__37882;
count__37765 = G__37883;
i__37766 = G__37884;
continue;
} else {
var event = cljs.core.first(seq__37763__$1);
re_frame.router.dispatch(event);


var G__37885 = cljs.core.next(seq__37763__$1);
var G__37886 = null;
var G__37887 = (0);
var G__37888 = (0);
seq__37763 = G__37885;
chunk__37764 = G__37886;
count__37765 = G__37887;
i__37766 = G__37888;
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
var seq__37775 = cljs.core.seq(value);
var chunk__37776 = null;
var count__37777 = (0);
var i__37778 = (0);
while(true){
if((i__37778 < count__37777)){
var event = chunk__37776.cljs$core$IIndexed$_nth$arity$2(null,i__37778);
clear_event(event);


var G__37889 = seq__37775;
var G__37890 = chunk__37776;
var G__37891 = count__37777;
var G__37892 = (i__37778 + (1));
seq__37775 = G__37889;
chunk__37776 = G__37890;
count__37777 = G__37891;
i__37778 = G__37892;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37775);
if(temp__5735__auto__){
var seq__37775__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37775__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37775__$1);
var G__37893 = cljs.core.chunk_rest(seq__37775__$1);
var G__37894 = c__4556__auto__;
var G__37895 = cljs.core.count(c__4556__auto__);
var G__37896 = (0);
seq__37775 = G__37893;
chunk__37776 = G__37894;
count__37777 = G__37895;
i__37778 = G__37896;
continue;
} else {
var event = cljs.core.first(seq__37775__$1);
clear_event(event);


var G__37897 = cljs.core.next(seq__37775__$1);
var G__37898 = null;
var G__37899 = (0);
var G__37900 = (0);
seq__37775 = G__37897;
chunk__37776 = G__37898;
count__37777 = G__37899;
i__37778 = G__37900;
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
