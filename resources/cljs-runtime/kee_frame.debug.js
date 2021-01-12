goog.provide('kee_frame.debug');
kee_frame.debug.debug_enabled_QMARK_ = (function kee_frame$debug$debug_enabled_QMARK_(p__42905){
var vec__42906 = p__42905;
var event_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42906,(0),null);
var map__42909 = cljs.core.deref(kee_frame.state.debug_config);
var map__42909__$1 = (((((!((map__42909 == null))))?(((((map__42909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42909):map__42909);
var blacklist = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42909__$1,new cljs.core.Keyword(null,"blacklist","blacklist",1248093170));
var events_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42909__$1,new cljs.core.Keyword(null,"events?","events?",-780512682),true);
var and__4115__auto__ = cljs.core.deref(kee_frame.state.debug_QMARK_);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = events_QMARK_;
if(cljs.core.truth_(and__4115__auto____$1)){
return cljs.core.not((function (){var and__4115__auto____$2 = blacklist;
if(cljs.core.truth_(and__4115__auto____$2)){
return (blacklist.cljs$core$IFn$_invoke$arity$1 ? blacklist.cljs$core$IFn$_invoke$arity$1(event_key) : blacklist.call(null,event_key));
} else {
return and__4115__auto____$2;
}
})());
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
});
kee_frame.debug.debug_interceptor = (function kee_frame$debug$debug_interceptor(debug_QMARK_){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"before","before",-1633692388),(function kee_frame$debug$debug_interceptor_$_debug_before(context){
var event = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_(kee_frame.debug.debug_enabled_QMARK_(event))){
re_frame.core.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Handling event ",event], 0));
} else {
}

return context;
}),new cljs.core.Keyword(null,"after","after",594996914),(function kee_frame$debug$debug_interceptor_$_debug_after(context){
var event = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442));
var orig_db = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759));
var new_db = re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword("kee-frame.debug","not-found","kee-frame.debug/not-found",-1447708124));
var effects = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Keyword(null,"db","db",993250759));
if(cljs.core.truth_((function (){var and__4115__auto__ = kee_frame.debug.debug_enabled_QMARK_(event);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.seq(effects);
} else {
return and__4115__auto__;
}
})())){
re_frame.core.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Side effects caused by event ",cljs.core.first(event),": ",effects], 0));
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = kee_frame.debug.debug_enabled_QMARK_(event);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_db,new cljs.core.Keyword("kee-frame.debug","not-found","kee-frame.debug/not-found",-1447708124));
} else {
return and__4115__auto__;
}
})())){
var vec__42911_42914 = clojure.data.diff(orig_db,new_db);
var only_before_42915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42911_42914,(0),null);
var only_after_42916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42911_42914,(1),null);
var db_changed_QMARK__42917 = (((!((only_before_42915 == null)))) || ((!((only_after_42916 == null)))));
if(db_changed_QMARK__42917){
re_frame.core.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"group","group",582596132),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["db clojure.data/diff for:",cljs.core.first(event)], 0));

re_frame.core.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["only before:",only_before_42915], 0));

re_frame.core.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"log","log",-1595516004),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["only after :",only_after_42916], 0));

re_frame.core.console(new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382));
} else {
}
} else {
}

return context;
})], 0));
});

//# sourceMappingURL=kee_frame.debug.js.map
