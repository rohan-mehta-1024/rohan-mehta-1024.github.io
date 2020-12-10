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
var _STAR_current_trace_STAR__orig_val__37695 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__37696 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__37696);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___37786 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___37786)){
var new_db_37787 = temp__5735__auto___37786;
var fexpr__37697_37788 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37697_37788.cljs$core$IFn$_invoke$arity$1 ? fexpr__37697_37788.cljs$core$IFn$_invoke$arity$1(new_db_37787) : fexpr__37697_37788.call(null,new_db_37787));
} else {
}

var seq__37698 = cljs.core.seq(effects_without_db);
var chunk__37699 = null;
var count__37700 = (0);
var i__37701 = (0);
while(true){
if((i__37701 < count__37700)){
var vec__37708 = chunk__37699.cljs$core$IIndexed$_nth$arity$2(null,i__37701);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37708,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37708,(1),null);
var temp__5733__auto___37789 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37789)){
var effect_fn_37790 = temp__5733__auto___37789;
(effect_fn_37790.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37790.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37790.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37791 = seq__37698;
var G__37792 = chunk__37699;
var G__37793 = count__37700;
var G__37794 = (i__37701 + (1));
seq__37698 = G__37791;
chunk__37699 = G__37792;
count__37700 = G__37793;
i__37701 = G__37794;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37698);
if(temp__5735__auto__){
var seq__37698__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37698__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37698__$1);
var G__37795 = cljs.core.chunk_rest(seq__37698__$1);
var G__37796 = c__4556__auto__;
var G__37797 = cljs.core.count(c__4556__auto__);
var G__37798 = (0);
seq__37698 = G__37795;
chunk__37699 = G__37796;
count__37700 = G__37797;
i__37701 = G__37798;
continue;
} else {
var vec__37715 = cljs.core.first(seq__37698__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37715,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37715,(1),null);
var temp__5733__auto___37800 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37800)){
var effect_fn_37801 = temp__5733__auto___37800;
(effect_fn_37801.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37801.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37801.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37802 = cljs.core.next(seq__37698__$1);
var G__37803 = null;
var G__37804 = (0);
var G__37805 = (0);
seq__37698 = G__37802;
chunk__37699 = G__37803;
count__37700 = G__37804;
i__37701 = G__37805;
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
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__37695);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___37808 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___37808)){
var new_db_37809 = temp__5735__auto___37808;
var fexpr__37719_37810 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__37719_37810.cljs$core$IFn$_invoke$arity$1 ? fexpr__37719_37810.cljs$core$IFn$_invoke$arity$1(new_db_37809) : fexpr__37719_37810.call(null,new_db_37809));
} else {
}

var seq__37720 = cljs.core.seq(effects_without_db);
var chunk__37721 = null;
var count__37722 = (0);
var i__37723 = (0);
while(true){
if((i__37723 < count__37722)){
var vec__37734 = chunk__37721.cljs$core$IIndexed$_nth$arity$2(null,i__37723);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37734,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37734,(1),null);
var temp__5733__auto___37811 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37811)){
var effect_fn_37812 = temp__5733__auto___37811;
(effect_fn_37812.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37812.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37812.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37813 = seq__37720;
var G__37814 = chunk__37721;
var G__37815 = count__37722;
var G__37816 = (i__37723 + (1));
seq__37720 = G__37813;
chunk__37721 = G__37814;
count__37722 = G__37815;
i__37723 = G__37816;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37720);
if(temp__5735__auto__){
var seq__37720__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37720__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37720__$1);
var G__37817 = cljs.core.chunk_rest(seq__37720__$1);
var G__37818 = c__4556__auto__;
var G__37819 = cljs.core.count(c__4556__auto__);
var G__37820 = (0);
seq__37720 = G__37817;
chunk__37721 = G__37818;
count__37722 = G__37819;
i__37723 = G__37820;
continue;
} else {
var vec__37738 = cljs.core.first(seq__37720__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37738,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37738,(1),null);
var temp__5733__auto___37821 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37821)){
var effect_fn_37822 = temp__5733__auto___37821;
(effect_fn_37822.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37822.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37822.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__37823 = cljs.core.next(seq__37720__$1);
var G__37824 = null;
var G__37825 = (0);
var G__37826 = (0);
seq__37720 = G__37823;
chunk__37721 = G__37824;
count__37722 = G__37825;
i__37723 = G__37826;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__37741){
var map__37742 = p__37741;
var map__37742__$1 = (((((!((map__37742 == null))))?(((((map__37742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37742):map__37742);
var effect = map__37742__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37742__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37742__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__37744 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37745 = null;
var count__37746 = (0);
var i__37747 = (0);
while(true){
if((i__37747 < count__37746)){
var effect = chunk__37745.cljs$core$IIndexed$_nth$arity$2(null,i__37747);
re_frame.fx.dispatch_later(effect);


var G__37835 = seq__37744;
var G__37836 = chunk__37745;
var G__37837 = count__37746;
var G__37838 = (i__37747 + (1));
seq__37744 = G__37835;
chunk__37745 = G__37836;
count__37746 = G__37837;
i__37747 = G__37838;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37744);
if(temp__5735__auto__){
var seq__37744__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37744__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37744__$1);
var G__37839 = cljs.core.chunk_rest(seq__37744__$1);
var G__37840 = c__4556__auto__;
var G__37841 = cljs.core.count(c__4556__auto__);
var G__37842 = (0);
seq__37744 = G__37839;
chunk__37745 = G__37840;
count__37746 = G__37841;
i__37747 = G__37842;
continue;
} else {
var effect = cljs.core.first(seq__37744__$1);
re_frame.fx.dispatch_later(effect);


var G__37843 = cljs.core.next(seq__37744__$1);
var G__37844 = null;
var G__37845 = (0);
var G__37846 = (0);
seq__37744 = G__37843;
chunk__37745 = G__37844;
count__37746 = G__37845;
i__37747 = G__37846;
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
var seq__37752 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__37753 = null;
var count__37754 = (0);
var i__37755 = (0);
while(true){
if((i__37755 < count__37754)){
var vec__37765 = chunk__37753.cljs$core$IIndexed$_nth$arity$2(null,i__37755);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37765,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37765,(1),null);
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


var G__37849 = seq__37752;
var G__37850 = chunk__37753;
var G__37851 = count__37754;
var G__37852 = (i__37755 + (1));
seq__37752 = G__37849;
chunk__37753 = G__37850;
count__37754 = G__37851;
i__37755 = G__37852;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37752);
if(temp__5735__auto__){
var seq__37752__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37752__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37752__$1);
var G__37859 = cljs.core.chunk_rest(seq__37752__$1);
var G__37860 = c__4556__auto__;
var G__37861 = cljs.core.count(c__4556__auto__);
var G__37862 = (0);
seq__37752 = G__37859;
chunk__37753 = G__37860;
count__37754 = G__37861;
i__37755 = G__37862;
continue;
} else {
var vec__37769 = cljs.core.first(seq__37752__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37769,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37769,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___37863 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___37863)){
var effect_fn_37864 = temp__5733__auto___37863;
(effect_fn_37864.cljs$core$IFn$_invoke$arity$1 ? effect_fn_37864.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_37864.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__37865 = cljs.core.next(seq__37752__$1);
var G__37866 = null;
var G__37867 = (0);
var G__37868 = (0);
seq__37752 = G__37865;
chunk__37753 = G__37866;
count__37754 = G__37867;
i__37755 = G__37868;
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
var seq__37772 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__37773 = null;
var count__37774 = (0);
var i__37775 = (0);
while(true){
if((i__37775 < count__37774)){
var event = chunk__37773.cljs$core$IIndexed$_nth$arity$2(null,i__37775);
re_frame.router.dispatch(event);


var G__37880 = seq__37772;
var G__37881 = chunk__37773;
var G__37882 = count__37774;
var G__37883 = (i__37775 + (1));
seq__37772 = G__37880;
chunk__37773 = G__37881;
count__37774 = G__37882;
i__37775 = G__37883;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37772);
if(temp__5735__auto__){
var seq__37772__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37772__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37772__$1);
var G__37888 = cljs.core.chunk_rest(seq__37772__$1);
var G__37889 = c__4556__auto__;
var G__37890 = cljs.core.count(c__4556__auto__);
var G__37891 = (0);
seq__37772 = G__37888;
chunk__37773 = G__37889;
count__37774 = G__37890;
i__37775 = G__37891;
continue;
} else {
var event = cljs.core.first(seq__37772__$1);
re_frame.router.dispatch(event);


var G__37892 = cljs.core.next(seq__37772__$1);
var G__37893 = null;
var G__37894 = (0);
var G__37895 = (0);
seq__37772 = G__37892;
chunk__37773 = G__37893;
count__37774 = G__37894;
i__37775 = G__37895;
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
var seq__37777 = cljs.core.seq(value);
var chunk__37778 = null;
var count__37779 = (0);
var i__37780 = (0);
while(true){
if((i__37780 < count__37779)){
var event = chunk__37778.cljs$core$IIndexed$_nth$arity$2(null,i__37780);
clear_event(event);


var G__37896 = seq__37777;
var G__37897 = chunk__37778;
var G__37898 = count__37779;
var G__37899 = (i__37780 + (1));
seq__37777 = G__37896;
chunk__37778 = G__37897;
count__37779 = G__37898;
i__37780 = G__37899;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37777);
if(temp__5735__auto__){
var seq__37777__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37777__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37777__$1);
var G__37900 = cljs.core.chunk_rest(seq__37777__$1);
var G__37901 = c__4556__auto__;
var G__37902 = cljs.core.count(c__4556__auto__);
var G__37903 = (0);
seq__37777 = G__37900;
chunk__37778 = G__37901;
count__37779 = G__37902;
i__37780 = G__37903;
continue;
} else {
var event = cljs.core.first(seq__37777__$1);
clear_event(event);


var G__37906 = cljs.core.next(seq__37777__$1);
var G__37907 = null;
var G__37908 = (0);
var G__37909 = (0);
seq__37777 = G__37906;
chunk__37778 = G__37907;
count__37779 = G__37908;
i__37780 = G__37909;
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
