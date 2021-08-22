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
var _STAR_current_trace_STAR__orig_val__37739 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__37740 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__37740);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___37832 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___37832)){
var new_db_37833 = temp__5735__auto___37832;
var fexpr__37742_37834 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37742_37834.cljs$core$IFn$_invoke$arity$1 ? fexpr__37742_37834.cljs$core$IFn$_invoke$arity$1(new_db_37833) : fexpr__37742_37834.call(null,new_db_37833));
} else {
}

var seq__37744 = cljs.core.seq(effects_without_db);
var chunk__37745 = null;
var count__37746 = (0);
var i__37747 = (0);
while(true){
if((i__37747 < count__37746)){
var vec__37756 = chunk__37745.cljs$core$IIndexed$_nth$arity$2(null,i__37747);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37756,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37756,(1),null);
var temp__5733__auto___37835 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37835)){
var effect_fn_37836 = temp__5733__auto___37835;
(effect_fn_37836.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37836.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37836.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37838 = seq__37744;
var G__37839 = chunk__37745;
var G__37840 = count__37746;
var G__37841 = (i__37747 + (1));
seq__37744 = G__37838;
chunk__37745 = G__37839;
count__37746 = G__37840;
i__37747 = G__37841;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37744);
if(temp__5735__auto__){
var seq__37744__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37744__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37744__$1);
var G__37842 = cljs.core.chunk_rest(seq__37744__$1);
var G__37843 = c__4556__auto__;
var G__37844 = cljs.core.count(c__4556__auto__);
var G__37845 = (0);
seq__37744 = G__37842;
chunk__37745 = G__37843;
count__37746 = G__37844;
i__37747 = G__37845;
continue;
} else {
var vec__37759 = cljs.core.first(seq__37744__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37759,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37759,(1),null);
var temp__5733__auto___37846 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37846)){
var effect_fn_37847 = temp__5733__auto___37846;
(effect_fn_37847.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37847.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37847.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37848 = cljs.core.next(seq__37744__$1);
var G__37849 = null;
var G__37850 = (0);
var G__37851 = (0);
seq__37744 = G__37848;
chunk__37745 = G__37849;
count__37746 = G__37850;
i__37747 = G__37851;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__37469__auto___37856 = re_frame.interop.now();
var duration__37470__auto___37857 = (end__37469__auto___37856 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__37470__auto___37857,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__37469__auto___37856);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__37739);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___37858 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___37858)){
var new_db_37859 = temp__5735__auto___37858;
var fexpr__37762_37860 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37762_37860.cljs$core$IFn$_invoke$arity$1 ? fexpr__37762_37860.cljs$core$IFn$_invoke$arity$1(new_db_37859) : fexpr__37762_37860.call(null,new_db_37859));
} else {
}

var seq__37763 = cljs.core.seq(effects_without_db);
var chunk__37764 = null;
var count__37765 = (0);
var i__37766 = (0);
while(true){
if((i__37766 < count__37765)){
var vec__37775 = chunk__37764.cljs$core$IIndexed$_nth$arity$2(null,i__37766);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37775,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37775,(1),null);
var temp__5733__auto___37861 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37861)){
var effect_fn_37862 = temp__5733__auto___37861;
(effect_fn_37862.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37862.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37862.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37863 = seq__37763;
var G__37864 = chunk__37764;
var G__37865 = count__37765;
var G__37866 = (i__37766 + (1));
seq__37763 = G__37863;
chunk__37764 = G__37864;
count__37765 = G__37865;
i__37766 = G__37866;
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
var vec__37780 = cljs.core.first(seq__37763__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37780,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37780,(1),null);
var temp__5733__auto___37872 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37872)){
var effect_fn_37873 = temp__5733__auto___37872;
(effect_fn_37873.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37873.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37873.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37874 = cljs.core.next(seq__37763__$1);
var G__37875 = null;
var G__37876 = (0);
var G__37877 = (0);
seq__37763 = G__37874;
chunk__37764 = G__37875;
count__37765 = G__37876;
i__37766 = G__37877;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__37787){
var map__37788 = p__37787;
var map__37788__$1 = (((((!((map__37788 == null))))?(((((map__37788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37788):map__37788);
var effect = map__37788__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37788__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37788__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__37791 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37792 = null;
var count__37793 = (0);
var i__37794 = (0);
while(true){
if((i__37794 < count__37793)){
var effect = chunk__37792.cljs$core$IIndexed$_nth$arity$2(null,i__37794);
re_frame.fx.dispatch_later(effect);


var G__37878 = seq__37791;
var G__37879 = chunk__37792;
var G__37880 = count__37793;
var G__37881 = (i__37794 + (1));
seq__37791 = G__37878;
chunk__37792 = G__37879;
count__37793 = G__37880;
i__37794 = G__37881;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37791);
if(temp__5735__auto__){
var seq__37791__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37791__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37791__$1);
var G__37883 = cljs.core.chunk_rest(seq__37791__$1);
var G__37884 = c__4556__auto__;
var G__37885 = cljs.core.count(c__4556__auto__);
var G__37886 = (0);
seq__37791 = G__37883;
chunk__37792 = G__37884;
count__37793 = G__37885;
i__37794 = G__37886;
continue;
} else {
var effect = cljs.core.first(seq__37791__$1);
re_frame.fx.dispatch_later(effect);


var G__37887 = cljs.core.next(seq__37791__$1);
var G__37888 = null;
var G__37889 = (0);
var G__37890 = (0);
seq__37791 = G__37887;
chunk__37792 = G__37888;
count__37793 = G__37889;
i__37794 = G__37890;
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
var seq__37799 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__37800 = null;
var count__37801 = (0);
var i__37802 = (0);
while(true){
if((i__37802 < count__37801)){
var vec__37811 = chunk__37800.cljs$core$IIndexed$_nth$arity$2(null,i__37802);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37811,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37811,(1),null);
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


var G__37893 = seq__37799;
var G__37894 = chunk__37800;
var G__37895 = count__37801;
var G__37896 = (i__37802 + (1));
seq__37799 = G__37893;
chunk__37800 = G__37894;
count__37801 = G__37895;
i__37802 = G__37896;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37799);
if(temp__5735__auto__){
var seq__37799__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37799__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37799__$1);
var G__37897 = cljs.core.chunk_rest(seq__37799__$1);
var G__37898 = c__4556__auto__;
var G__37899 = cljs.core.count(c__4556__auto__);
var G__37900 = (0);
seq__37799 = G__37897;
chunk__37800 = G__37898;
count__37801 = G__37899;
i__37802 = G__37900;
continue;
} else {
var vec__37815 = cljs.core.first(seq__37799__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37815,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37815,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___37901 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37901)){
var effect_fn_37902 = temp__5733__auto___37901;
(effect_fn_37902.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37902.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37902.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__37903 = cljs.core.next(seq__37799__$1);
var G__37904 = null;
var G__37905 = (0);
var G__37906 = (0);
seq__37799 = G__37903;
chunk__37800 = G__37904;
count__37801 = G__37905;
i__37802 = G__37906;
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
var seq__37818 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37819 = null;
var count__37820 = (0);
var i__37821 = (0);
while(true){
if((i__37821 < count__37820)){
var event = chunk__37819.cljs$core$IIndexed$_nth$arity$2(null,i__37821);
re_frame.router.dispatch(event);


var G__37907 = seq__37818;
var G__37908 = chunk__37819;
var G__37909 = count__37820;
var G__37910 = (i__37821 + (1));
seq__37818 = G__37907;
chunk__37819 = G__37908;
count__37820 = G__37909;
i__37821 = G__37910;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37818);
if(temp__5735__auto__){
var seq__37818__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37818__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37818__$1);
var G__37911 = cljs.core.chunk_rest(seq__37818__$1);
var G__37912 = c__4556__auto__;
var G__37913 = cljs.core.count(c__4556__auto__);
var G__37914 = (0);
seq__37818 = G__37911;
chunk__37819 = G__37912;
count__37820 = G__37913;
i__37821 = G__37914;
continue;
} else {
var event = cljs.core.first(seq__37818__$1);
re_frame.router.dispatch(event);


var G__37915 = cljs.core.next(seq__37818__$1);
var G__37916 = null;
var G__37917 = (0);
var G__37918 = (0);
seq__37818 = G__37915;
chunk__37819 = G__37916;
count__37820 = G__37917;
i__37821 = G__37918;
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
var seq__37828 = cljs.core.seq(value);
var chunk__37829 = null;
var count__37830 = (0);
var i__37831 = (0);
while(true){
if((i__37831 < count__37830)){
var event = chunk__37829.cljs$core$IIndexed$_nth$arity$2(null,i__37831);
clear_event(event);


var G__37919 = seq__37828;
var G__37920 = chunk__37829;
var G__37921 = count__37830;
var G__37922 = (i__37831 + (1));
seq__37828 = G__37919;
chunk__37829 = G__37920;
count__37830 = G__37921;
i__37831 = G__37922;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37828);
if(temp__5735__auto__){
var seq__37828__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37828__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37828__$1);
var G__37923 = cljs.core.chunk_rest(seq__37828__$1);
var G__37924 = c__4556__auto__;
var G__37925 = cljs.core.count(c__4556__auto__);
var G__37926 = (0);
seq__37828 = G__37923;
chunk__37829 = G__37924;
count__37830 = G__37925;
i__37831 = G__37926;
continue;
} else {
var event = cljs.core.first(seq__37828__$1);
clear_event(event);


var G__37927 = cljs.core.next(seq__37828__$1);
var G__37928 = null;
var G__37929 = (0);
var G__37930 = (0);
seq__37828 = G__37927;
chunk__37829 = G__37928;
count__37830 = G__37929;
i__37831 = G__37930;
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
