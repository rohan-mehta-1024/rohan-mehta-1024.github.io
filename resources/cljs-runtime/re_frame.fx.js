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
var temp__5735__auto___37801 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___37801)){
var new_db_37802 = temp__5735__auto___37801;
var fexpr__37693_37803 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37693_37803.cljs$core$IFn$_invoke$arity$1 ? fexpr__37693_37803.cljs$core$IFn$_invoke$arity$1(new_db_37802) : fexpr__37693_37803.call(null,new_db_37802));
} else {
}

var seq__37694 = cljs.core.seq(effects_without_db);
var chunk__37695 = null;
var count__37696 = (0);
var i__37697 = (0);
while(true){
if((i__37697 < count__37696)){
var vec__37706 = chunk__37695.cljs$core$IIndexed$_nth$arity$2(null,i__37697);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37706,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37706,(1),null);
var temp__5733__auto___37821 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37821)){
var effect_fn_37822 = temp__5733__auto___37821;
(effect_fn_37822.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37822.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37822.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37823 = seq__37694;
var G__37824 = chunk__37695;
var G__37825 = count__37696;
var G__37826 = (i__37697 + (1));
seq__37694 = G__37823;
chunk__37695 = G__37824;
count__37696 = G__37825;
i__37697 = G__37826;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37694);
if(temp__5735__auto__){
var seq__37694__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37694__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37694__$1);
var G__37827 = cljs.core.chunk_rest(seq__37694__$1);
var G__37828 = c__4556__auto__;
var G__37829 = cljs.core.count(c__4556__auto__);
var G__37830 = (0);
seq__37694 = G__37827;
chunk__37695 = G__37828;
count__37696 = G__37829;
i__37697 = G__37830;
continue;
} else {
var vec__37712 = cljs.core.first(seq__37694__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37712,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37712,(1),null);
var temp__5733__auto___37831 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37831)){
var effect_fn_37832 = temp__5733__auto___37831;
(effect_fn_37832.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37832.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37832.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37833 = cljs.core.next(seq__37694__$1);
var G__37834 = null;
var G__37835 = (0);
var G__37836 = (0);
seq__37694 = G__37833;
chunk__37695 = G__37834;
count__37696 = G__37835;
i__37697 = G__37836;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__37421__auto___37837 = re_frame.interop.now();
var duration__37422__auto___37838 = (end__37421__auto___37837 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__37422__auto___37838,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__37421__auto___37837);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__37691);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___37839 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___37839)){
var new_db_37840 = temp__5735__auto___37839;
var fexpr__37718_37841 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37718_37841.cljs$core$IFn$_invoke$arity$1 ? fexpr__37718_37841.cljs$core$IFn$_invoke$arity$1(new_db_37840) : fexpr__37718_37841.call(null,new_db_37840));
} else {
}

var seq__37719 = cljs.core.seq(effects_without_db);
var chunk__37720 = null;
var count__37721 = (0);
var i__37722 = (0);
while(true){
if((i__37722 < count__37721)){
var vec__37733 = chunk__37720.cljs$core$IIndexed$_nth$arity$2(null,i__37722);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37733,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37733,(1),null);
var temp__5733__auto___37844 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37844)){
var effect_fn_37845 = temp__5733__auto___37844;
(effect_fn_37845.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37845.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37845.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37846 = seq__37719;
var G__37847 = chunk__37720;
var G__37848 = count__37721;
var G__37849 = (i__37722 + (1));
seq__37719 = G__37846;
chunk__37720 = G__37847;
count__37721 = G__37848;
i__37722 = G__37849;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37719);
if(temp__5735__auto__){
var seq__37719__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37719__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37719__$1);
var G__37850 = cljs.core.chunk_rest(seq__37719__$1);
var G__37851 = c__4556__auto__;
var G__37852 = cljs.core.count(c__4556__auto__);
var G__37853 = (0);
seq__37719 = G__37850;
chunk__37720 = G__37851;
count__37721 = G__37852;
i__37722 = G__37853;
continue;
} else {
var vec__37736 = cljs.core.first(seq__37719__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37736,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37736,(1),null);
var temp__5733__auto___37859 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37859)){
var effect_fn_37860 = temp__5733__auto___37859;
(effect_fn_37860.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37860.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37860.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37861 = cljs.core.next(seq__37719__$1);
var G__37862 = null;
var G__37863 = (0);
var G__37864 = (0);
seq__37719 = G__37861;
chunk__37720 = G__37862;
count__37721 = G__37863;
i__37722 = G__37864;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__37751){
var map__37752 = p__37751;
var map__37752__$1 = (((((!((map__37752 == null))))?(((((map__37752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37752):map__37752);
var effect = map__37752__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37752__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37752__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__37754 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37755 = null;
var count__37756 = (0);
var i__37757 = (0);
while(true){
if((i__37757 < count__37756)){
var effect = chunk__37755.cljs$core$IIndexed$_nth$arity$2(null,i__37757);
re_frame.fx.dispatch_later(effect);


var G__37870 = seq__37754;
var G__37871 = chunk__37755;
var G__37872 = count__37756;
var G__37873 = (i__37757 + (1));
seq__37754 = G__37870;
chunk__37755 = G__37871;
count__37756 = G__37872;
i__37757 = G__37873;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37754);
if(temp__5735__auto__){
var seq__37754__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37754__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37754__$1);
var G__37874 = cljs.core.chunk_rest(seq__37754__$1);
var G__37875 = c__4556__auto__;
var G__37876 = cljs.core.count(c__4556__auto__);
var G__37877 = (0);
seq__37754 = G__37874;
chunk__37755 = G__37875;
count__37756 = G__37876;
i__37757 = G__37877;
continue;
} else {
var effect = cljs.core.first(seq__37754__$1);
re_frame.fx.dispatch_later(effect);


var G__37878 = cljs.core.next(seq__37754__$1);
var G__37879 = null;
var G__37880 = (0);
var G__37881 = (0);
seq__37754 = G__37878;
chunk__37755 = G__37879;
count__37756 = G__37880;
i__37757 = G__37881;
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
var seq__37759 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__37760 = null;
var count__37761 = (0);
var i__37762 = (0);
while(true){
if((i__37762 < count__37761)){
var vec__37772 = chunk__37760.cljs$core$IIndexed$_nth$arity$2(null,i__37762);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37772,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37772,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___37892 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37892)){
var effect_fn_37893 = temp__5733__auto___37892;
(effect_fn_37893.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37893.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37893.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__37894 = seq__37759;
var G__37895 = chunk__37760;
var G__37896 = count__37761;
var G__37897 = (i__37762 + (1));
seq__37759 = G__37894;
chunk__37760 = G__37895;
count__37761 = G__37896;
i__37762 = G__37897;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37759);
if(temp__5735__auto__){
var seq__37759__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37759__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37759__$1);
var G__37898 = cljs.core.chunk_rest(seq__37759__$1);
var G__37899 = c__4556__auto__;
var G__37900 = cljs.core.count(c__4556__auto__);
var G__37901 = (0);
seq__37759 = G__37898;
chunk__37760 = G__37899;
count__37761 = G__37900;
i__37762 = G__37901;
continue;
} else {
var vec__37781 = cljs.core.first(seq__37759__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37781,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37781,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___37902 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37902)){
var effect_fn_37903 = temp__5733__auto___37902;
(effect_fn_37903.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37903.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37903.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__37904 = cljs.core.next(seq__37759__$1);
var G__37905 = null;
var G__37906 = (0);
var G__37907 = (0);
seq__37759 = G__37904;
chunk__37760 = G__37905;
count__37761 = G__37906;
i__37762 = G__37907;
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
var seq__37785 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37786 = null;
var count__37787 = (0);
var i__37788 = (0);
while(true){
if((i__37788 < count__37787)){
var event = chunk__37786.cljs$core$IIndexed$_nth$arity$2(null,i__37788);
re_frame.router.dispatch(event);


var G__37908 = seq__37785;
var G__37909 = chunk__37786;
var G__37910 = count__37787;
var G__37911 = (i__37788 + (1));
seq__37785 = G__37908;
chunk__37786 = G__37909;
count__37787 = G__37910;
i__37788 = G__37911;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37785);
if(temp__5735__auto__){
var seq__37785__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37785__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37785__$1);
var G__37912 = cljs.core.chunk_rest(seq__37785__$1);
var G__37913 = c__4556__auto__;
var G__37914 = cljs.core.count(c__4556__auto__);
var G__37915 = (0);
seq__37785 = G__37912;
chunk__37786 = G__37913;
count__37787 = G__37914;
i__37788 = G__37915;
continue;
} else {
var event = cljs.core.first(seq__37785__$1);
re_frame.router.dispatch(event);


var G__37916 = cljs.core.next(seq__37785__$1);
var G__37917 = null;
var G__37918 = (0);
var G__37919 = (0);
seq__37785 = G__37916;
chunk__37786 = G__37917;
count__37787 = G__37918;
i__37788 = G__37919;
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
var seq__37796 = cljs.core.seq(value);
var chunk__37797 = null;
var count__37798 = (0);
var i__37799 = (0);
while(true){
if((i__37799 < count__37798)){
var event = chunk__37797.cljs$core$IIndexed$_nth$arity$2(null,i__37799);
clear_event(event);


var G__37920 = seq__37796;
var G__37921 = chunk__37797;
var G__37922 = count__37798;
var G__37923 = (i__37799 + (1));
seq__37796 = G__37920;
chunk__37797 = G__37921;
count__37798 = G__37922;
i__37799 = G__37923;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37796);
if(temp__5735__auto__){
var seq__37796__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37796__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37796__$1);
var G__37924 = cljs.core.chunk_rest(seq__37796__$1);
var G__37925 = c__4556__auto__;
var G__37926 = cljs.core.count(c__4556__auto__);
var G__37927 = (0);
seq__37796 = G__37924;
chunk__37797 = G__37925;
count__37798 = G__37926;
i__37799 = G__37927;
continue;
} else {
var event = cljs.core.first(seq__37796__$1);
clear_event(event);


var G__37928 = cljs.core.next(seq__37796__$1);
var G__37929 = null;
var G__37930 = (0);
var G__37931 = (0);
seq__37796 = G__37928;
chunk__37797 = G__37929;
count__37798 = G__37930;
i__37799 = G__37931;
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
