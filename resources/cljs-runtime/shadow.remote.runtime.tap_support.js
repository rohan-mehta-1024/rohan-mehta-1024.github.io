goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__35877,p__35878){
var map__35879 = p__35877;
var map__35879__$1 = (((((!((map__35879 == null))))?(((((map__35879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35879):map__35879);
var svc = map__35879__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35879__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35879__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35879__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35880 = p__35878;
var map__35880__$1 = (((((!((map__35880 == null))))?(((((map__35880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35880):map__35880);
var msg = map__35880__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35880__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35880__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35880__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35880__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__35893,p__35894){
var map__35896 = p__35893;
var map__35896__$1 = (((((!((map__35896 == null))))?(((((map__35896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35896):map__35896);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35896__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__35897 = p__35894;
var map__35897__$1 = (((((!((map__35897 == null))))?(((((map__35897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35897):map__35897);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35897__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__35901,p__35902){
var map__35903 = p__35901;
var map__35903__$1 = (((((!((map__35903 == null))))?(((((map__35903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35903):map__35903);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35903__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35903__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35904 = p__35902;
var map__35904__$1 = (((((!((map__35904 == null))))?(((((map__35904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35904):map__35904);
var msg = map__35904__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35904__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__35911,tid){
var map__35912 = p__35911;
var map__35912__$1 = (((((!((map__35912 == null))))?(((((map__35912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35912):map__35912);
var svc = map__35912__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35912__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__35922 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__35923 = null;
var count__35924 = (0);
var i__35925 = (0);
while(true){
if((i__35925 < count__35924)){
var vec__35937 = chunk__35923.cljs$core$IIndexed$_nth$arity$2(null,i__35925);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35937,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35937,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35953 = seq__35922;
var G__35954 = chunk__35923;
var G__35955 = count__35924;
var G__35956 = (i__35925 + (1));
seq__35922 = G__35953;
chunk__35923 = G__35954;
count__35924 = G__35955;
i__35925 = G__35956;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35922);
if(temp__5735__auto__){
var seq__35922__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35922__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35922__$1);
var G__35957 = cljs.core.chunk_rest(seq__35922__$1);
var G__35958 = c__4556__auto__;
var G__35959 = cljs.core.count(c__4556__auto__);
var G__35960 = (0);
seq__35922 = G__35957;
chunk__35923 = G__35958;
count__35924 = G__35959;
i__35925 = G__35960;
continue;
} else {
var vec__35942 = cljs.core.first(seq__35922__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35942,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35942,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35961 = cljs.core.next(seq__35922__$1);
var G__35962 = null;
var G__35963 = (0);
var G__35964 = (0);
seq__35922 = G__35961;
chunk__35923 = G__35962;
count__35924 = G__35963;
i__35925 = G__35964;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__35916_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__35916_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__35917_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__35917_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__35918_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__35918_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__35919_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__35919_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__35948){
var map__35949 = p__35948;
var map__35949__$1 = (((((!((map__35949 == null))))?(((((map__35949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35949):map__35949);
var svc = map__35949__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35949__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35949__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
