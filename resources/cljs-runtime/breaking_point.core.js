goog.provide('breaking_point.core');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("breaking-point.core","set-breakpoints","breaking-point.core/set-breakpoints",607629013),(function (_,p__38582){
var vec__38583 = p__38582;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38583,(0),null);
var map__38586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38583,(1),null);
var map__38586__$1 = (((((!((map__38586 == null))))?(((((map__38586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38586):map__38586);
var opts = map__38586__$1;
var breakpoints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38586__$1,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739));
var debounce_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38586__$1,new cljs.core.Keyword(null,"debounce-ms","debounce-ms",-1127263167));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("breaking-point.core","set-breakpoints","breaking-point.core/set-breakpoints",607629013),opts], null);
}));
re_frame.core.reg_cofx(new cljs.core.Keyword("breaking-point.core","screen-dimensions","breaking-point.core/screen-dimensions",407195814),(function (coeffect){
var screen_width = (function (){var or__4126__auto__ = (function (){var G__38589 = window;
if((G__38589 == null)){
return null;
} else {
return G__38589.innerWidth;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var G__38591 = document;
var G__38591__$1 = (((G__38591 == null))?null:G__38591.documentElement);
if((G__38591__$1 == null)){
return null;
} else {
return G__38591__$1.clientWidth;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var G__38592 = document;
var G__38592__$1 = (((G__38592 == null))?null:G__38592.body);
if((G__38592__$1 == null)){
return null;
} else {
return G__38592__$1.clientWidth;
}
}
}
})();
var screen_height = (function (){var or__4126__auto__ = (function (){var G__38594 = window;
if((G__38594 == null)){
return null;
} else {
return G__38594.innerHeight;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var G__38596 = document;
var G__38596__$1 = (((G__38596 == null))?null:G__38596.documentElement);
if((G__38596__$1 == null)){
return null;
} else {
return G__38596__$1.clientHeight;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var G__38597 = document;
var G__38597__$1 = (((G__38597 == null))?null:G__38597.body);
if((G__38597__$1 == null)){
return null;
} else {
return G__38597__$1.clientHeight;
}
}
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(coeffect,new cljs.core.Keyword(null,"screen-width","screen-width",1557963263),screen_width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen-height","screen-height",141363033),screen_height], 0));
}));
breaking_point.core.set_screen_dimensions = (function breaking_point$core$set_screen_dimensions(p__38598,_){
var map__38599 = p__38598;
var map__38599__$1 = (((((!((map__38599 == null))))?(((((map__38599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38599):map__38599);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38599__$1,new cljs.core.Keyword(null,"db","db",993250759));
var screen_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38599__$1,new cljs.core.Keyword(null,"screen-width","screen-width",1557963263));
var screen_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38599__$1,new cljs.core.Keyword(null,"screen-height","screen-height",141363033));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","breakpoints","breaking-point.core/breakpoints",1759036980),new cljs.core.Keyword(null,"screen-width","screen-width",1557963263)], null),screen_width),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","breakpoints","breaking-point.core/breakpoints",1759036980),new cljs.core.Keyword(null,"screen-height","screen-height",141363033)], null),screen_height)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("breaking-point.core","screen-dimensions","breaking-point.core/screen-dimensions",407195814))], null),breaking_point.core.set_screen_dimensions);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("breaking-point.core","set-screen-dimensions-debounced","breaking-point.core/set-screen-dimensions-debounced",807683602),(function (_,p__38601){
var vec__38602 = p__38601;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38602,(0),null);
var debounce_ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38602,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-debounce","dispatch-debounce",-2065179020),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("breaking-point.core","calcaulate-width-after-resize","breaking-point.core/calcaulate-width-after-resize",1288445004),new cljs.core.Keyword(null,"timeout","timeout",-318625318),debounce_ms,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691)], null)], null)], null)], null);
}));
breaking_point.core.get_screen_width = (function breaking_point$core$get_screen_width(db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","breakpoints","breaking-point.core/breakpoints",1759036980),new cljs.core.Keyword(null,"screen-width","screen-width",1557963263)], null));
});
breaking_point.core.get_screen_height = (function breaking_point$core$get_screen_height(db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","breakpoints","breaking-point.core/breakpoints",1759036980),new cljs.core.Keyword(null,"screen-height","screen-height",141363033)], null));
});
breaking_point.core.__GT_get_screen = (function breaking_point$core$__GT_get_screen(breakpoints){
return (function breaking_point$core$__GT_get_screen_$_get_screen(screen_width,_){
if(cljs.core.truth_(screen_width)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (prev_breakpoint,p__38605){
var vec__38606 = p__38605;
var screen_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38606,(0),null);
var breakpoint = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38606,(1),null);
if((((breakpoint == null)) || ((((screen_width < breakpoint)) && ((screen_width >= prev_breakpoint)))))){
return cljs.core.reduced(screen_key);
} else {
return breakpoint;
}
}),(0),cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((2),breakpoints));
} else {
return null;
}
});
});
breaking_point.core.get_orientation = (function breaking_point$core$get_orientation(p__38609,_){
var vec__38610 = p__38609;
var screen_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38610,(0),null);
var screen_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38610,(1),null);
if((screen_height > screen_width)){
return new cljs.core.Keyword(null,"portrait","portrait",-9810007);
} else {
return new cljs.core.Keyword(null,"landscape","landscape",1519839253);
}
});
breaking_point.core.register_subs = (function breaking_point$core$register_subs(breakpoints){
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("breaking-point.core","screen-width","breaking-point.core/screen-width",-2005106360),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([breaking_point.core.get_screen_width], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("breaking-point.core","screen-height","breaking-point.core/screen-height",1145919666),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([breaking_point.core.get_screen_height], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("breaking-point.core","screen","breaking-point.core/screen",834517405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen-width","breaking-point.core/screen-width",-2005106360)], null),breaking_point.core.__GT_get_screen(breakpoints)], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("breaking-point.core","orientation","breaking-point.core/orientation",1892289812),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen-width","breaking-point.core/screen-width",-2005106360)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen-height","breaking-point.core/screen-height",1145919666)], null),breaking_point.core.get_orientation], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("breaking-point.core","portrait?","breaking-point.core/portrait?",-1731575960),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","orientation","breaking-point.core/orientation",1892289812)], null),(function (orientation,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orientation,new cljs.core.Keyword(null,"portrait","portrait",-9810007));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("breaking-point.core","landscape?","breaking-point.core/landscape?",1510790059),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","orientation","breaking-point.core/orientation",1892289812)], null),(function (orientation,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orientation,new cljs.core.Keyword(null,"landscape","landscape",1519839253));
})], 0));

var screen_keys = (function (){var G__38614 = breakpoints;
var G__38614__$1 = (((G__38614 == null))?null:cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,G__38614));
var G__38614__$2 = (((G__38614__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__38615){
var vec__38616 = p__38615;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38616,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38616,(1),null);
return cljs.core.even_QMARK_(i);
}),G__38614__$1));
if((G__38614__$2 == null)){
return null;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,G__38614__$2);
}
})();
var seq__38620 = cljs.core.seq(screen_keys);
var chunk__38621 = null;
var count__38622 = (0);
var i__38623 = (0);
while(true){
if((i__38623 < count__38622)){
var screen_key = chunk__38621.cljs$core$IIndexed$_nth$arity$2(null,i__38623);
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("breaking-point.core",[cljs.core.name(screen_key),"?"].join('')),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen","breaking-point.core/screen",834517405)], null),((function (seq__38620,chunk__38621,count__38622,i__38623,screen_key,screen_keys){
return (function (screen,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(screen,screen_key);
});})(seq__38620,chunk__38621,count__38622,i__38623,screen_key,screen_keys))
], 0));


var G__38653 = seq__38620;
var G__38654 = chunk__38621;
var G__38655 = count__38622;
var G__38656 = (i__38623 + (1));
seq__38620 = G__38653;
chunk__38621 = G__38654;
count__38622 = G__38655;
i__38623 = G__38656;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38620);
if(temp__5735__auto__){
var seq__38620__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38620__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38620__$1);
var G__38657 = cljs.core.chunk_rest(seq__38620__$1);
var G__38658 = c__4556__auto__;
var G__38659 = cljs.core.count(c__4556__auto__);
var G__38660 = (0);
seq__38620 = G__38657;
chunk__38621 = G__38658;
count__38622 = G__38659;
i__38623 = G__38660;
continue;
} else {
var screen_key = cljs.core.first(seq__38620__$1);
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("breaking-point.core",[cljs.core.name(screen_key),"?"].join('')),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen","breaking-point.core/screen",834517405)], null),((function (seq__38620,chunk__38621,count__38622,i__38623,screen_key,seq__38620__$1,temp__5735__auto__,screen_keys){
return (function (screen,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(screen,screen_key);
});})(seq__38620,chunk__38621,count__38622,i__38623,screen_key,seq__38620__$1,temp__5735__auto__,screen_keys))
], 0));


var G__38662 = cljs.core.next(seq__38620__$1);
var G__38663 = null;
var G__38664 = (0);
var G__38665 = (0);
seq__38620 = G__38662;
chunk__38621 = G__38663;
count__38622 = G__38664;
i__38623 = G__38665;
continue;
}
} else {
return null;
}
}
break;
}
});
breaking_point.core.set_breakpoints = (function breaking_point$core$set_breakpoints(p__38624){
var map__38625 = p__38624;
var map__38625__$1 = (((((!((map__38625 == null))))?(((((map__38625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38625):map__38625);
var opts = map__38625__$1;
var breakpoints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38625__$1,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739));
var debounce_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38625__$1,new cljs.core.Keyword(null,"debounce-ms","debounce-ms",-1127263167));
breaking_point.core.register_subs(breakpoints);

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691)], null));

return window.addEventListener("resize",(function (){
if(cljs.core.truth_(debounce_ms)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions-debounced","breaking-point.core/set-screen-dimensions-debounced",807683602),debounce_ms], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691)], null));
}
}),true);
});
re_frame.core.reg_fx(new cljs.core.Keyword("breaking-point.core","set-breakpoints","breaking-point.core/set-breakpoints",607629013),breaking_point.core.set_breakpoints);

//# sourceMappingURL=breaking_point.core.js.map
