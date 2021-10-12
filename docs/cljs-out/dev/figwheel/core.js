// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,(function (p1__18764_SHARP_){
var k = f.call(null,p1__18764_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
}),coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__18765){
var vec__18766 = p__18765;
var k = cljs.core.nth.call(null,vec__18766,(0),null);
var v = cljs.core.nth.call(null,vec__18766,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[clojure.string.replace.call(null,text,/\n/," ")," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18770 = arguments.length;
var i__4737__auto___18771 = (0);
while(true){
if((i__4737__auto___18771 < len__4736__auto___18770)){
args__4742__auto__.push((arguments[i__4737__auto___18771]));

var G__18772 = (i__4737__auto___18771 + (1));
i__4737__auto___18771 = G__18772;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
}));

(figwheel.core.cross_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.core.cross_format.cljs$lang$applyTo = (function (seq18769){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18769));
}));

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__18775){
var map__18776 = p__18775;
var map__18776__$1 = (((((!((map__18776 == null))))?(((((map__18776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18776):map__18776);
var message = cljs.core.get.call(null,map__18776__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__18776__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,(function (p1__18774_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18774_SHARP_], null)));
}),cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,(function (p1__18773_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__18773_SHARP_);
}),figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__18779){
var map__18780 = p__18779;
var map__18780__$1 = (((((!((map__18780 == null))))?(((((map__18780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18780):map__18780);
var message_data = map__18780__$1;
var message = cljs.core.get.call(null,map__18780__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__18780__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__18780__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__18780__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__18782 = file_excerpt;
var map__18782__$1 = (((((!((map__18782 == null))))?(((((map__18782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18782):map__18782);
var start_line = cljs.core.get.call(null,map__18782__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__18782__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__18782__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,(function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
}),clojure.string.split_lines.call(null,excerpt));
var vec__18783 = cljs.core.split_with.call(null,(function (p1__18778_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__18778_SHARP_));
}),lines);
var begin = cljs.core.nth.call(null,vec__18783,(0),null);
var end = cljs.core.nth.call(null,vec__18783,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__18787){
var map__18788 = p__18787;
var map__18788__$1 = (((((!((map__18788 == null))))?(((((map__18788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18788):map__18788);
var file = cljs.core.get.call(null,map__18788__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__18788__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__18788__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__18790 = "";
var G__18790__$1 = (cljs.core.truth_(file)?[G__18790,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__18790);
var G__18790__$2 = (cljs.core.truth_(line)?[G__18790__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__18790__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__18790__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__18790__$2;
}
});
figwheel.core.version_value = (function figwheel$core$version_value(v){
try{return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100000000000),(10000),(1)], null),cljs.core.map.call(null,(function (p1__18791_SHARP_){
return parseInt(p1__18791_SHARP_);
}),cljs.core.take.call(null,(3),clojure.string.split.call(null,v,/[^\d]/)))));
}catch (e18798){if((e18798 instanceof Error)){
var e = e18798;
return ((100000000000) * (100));
} else {
throw e18798;

}
}});

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = (((figwheel.core.version_value.call(null,cljs.core._STAR_clojurescript_version_STAR_) >= figwheel.core.version_value.call(null,"1.10.844")))?(new goog.debug.Logger("Figwheel")):goog.log.getLogger.call(null,"Figwheel"));
}

figwheel.core.glog_info = (function figwheel$core$glog_info(log,msg){
return goog.log.info.call(null,log,msg);
});

figwheel.core.glog_warning = (function figwheel$core$glog_warning(log,msg){
return goog.log.warning.call(null,log,msg);
});

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_18847 = (new goog.debug.Console());
var G__18799_18848 = c_18847.getFormatter();
goog.object.set(G__18799_18848,"showAbsoluteTime",false);

goog.object.set(G__18799_18848,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_18847);

}

var temp__5753__auto__ = goog.object.get(goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5753__auto__)){
var console_instance = temp__5753__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((typeof document !== 'undefined'))?document:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5753__auto__)){
var f = temp__5753__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__18800 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
goog.object.add(G__18800,"data",(function (){var or__4126__auto__ = data;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__18800;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return goog.object.get((function (){var temp__5751__auto__ = e.event_;
if(cljs.core.truth_(temp__5751__auto__)){
var e__$1 = temp__5751__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/**
 * @define {boolean}
 */
figwheel.core.load_warninged_code = goog.define("figwheel.core.load_warninged_code",false);


/**
 * @define {boolean}
 */
figwheel.core.heads_up_display = goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
var and__4115__auto__ = figwheel.core.heads_up_display;
if(cljs.core.truth_(and__4115__auto__)){
return (!((goog.global.document == null)));
} else {
return and__4115__auto__;
}
});

var last_reload_timestamp_18849 = cljs.core.atom.call(null,(0));
var promise_chain_18850 = (new goog.Promise((function (r,_){
return r.call(null,true);
})));
figwheel.core.render_watcher = (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5751__auto__ = (function (){var temp__5753__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5753__auto__)){
var ts = temp__5753__auto__;
if((cljs.core.deref.call(null,last_reload_timestamp_18849) < ts)){
return ts;
} else {
return false;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var ts = temp__5751__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_18849,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_18850.then((function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__18801 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__18802 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__18802);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then((function (){
var seq__18803 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__18804 = null;
var count__18805 = (0);
var i__18806 = (0);
while(true){
if((i__18806 < count__18805)){
var w = cljs.core._nth.call(null,chunk__18804,i__18806);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__18851 = seq__18803;
var G__18852 = chunk__18804;
var G__18853 = count__18805;
var G__18854 = (i__18806 + (1));
seq__18803 = G__18851;
chunk__18804 = G__18852;
count__18805 = G__18853;
i__18806 = G__18854;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__18803);
if(temp__5753__auto__){
var seq__18803__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18803__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__18803__$1);
var G__18855 = cljs.core.chunk_rest.call(null,seq__18803__$1);
var G__18856 = c__4556__auto__;
var G__18857 = cljs.core.count.call(null,c__4556__auto__);
var G__18858 = (0);
seq__18803 = G__18855;
chunk__18804 = G__18856;
count__18805 = G__18857;
i__18806 = G__18858;
continue;
} else {
var w = cljs.core.first.call(null,seq__18803__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__18859 = cljs.core.next.call(null,seq__18803__$1);
var G__18860 = null;
var G__18861 = (0);
var G__18862 = (0);
seq__18803 = G__18859;
chunk__18804 = G__18860;
count__18805 = G__18861;
i__18806 = G__18862;
continue;
}
} else {
return null;
}
}
break;
}
}));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__18801);
}}));
} else {
if(cljs.core.truth_(exception)){
return promise_chain_18850.then((function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__18807 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__18808 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__18808);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__18807);
}}));
} else {
return promise_chain_18850.then((function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
}));

}
}
} else {
return null;
}
} else {
return null;
}
});

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__4126__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ((goog.string.startsWith("clojure.",ns__$1)) || (goog.string.startsWith("goog.",ns__$1)));
}
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null)));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
if(cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace))){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
} else {
return false;
}
} else {
return false;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18863 = arguments.length;
var i__4737__auto___18864 = (0);
while(true){
if((i__4737__auto___18864 < len__4736__auto___18863)){
args__4742__auto__.push((arguments[i__4737__auto___18864]));

var G__18865 = (i__4737__auto___18864 + (1));
i__4737__auto___18864 = G__18865;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__18811){
var vec__18812 = p__18811;
var n = cljs.core.nth.call(null,vec__18812,(0),null);
var mdata = cljs.core.nth.call(null,vec__18812,(1),null);
var temp__5753__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5753__auto__)){
var f = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__18815 = cljs.core.seq.call(null,hooks);
var chunk__18816 = null;
var count__18817 = (0);
var i__18818 = (0);
while(true){
if((i__18818 < count__18817)){
var vec__18825 = cljs.core._nth.call(null,chunk__18816,i__18818);
var n = cljs.core.nth.call(null,vec__18825,(0),null);
var f = cljs.core.nth.call(null,vec__18825,(1),null);
var temp__5751__auto___18866 = cljs.core.reduce.call(null,((function (seq__18815,chunk__18816,count__18817,i__18818,vec__18825,n,f,hooks){
return (function (p1__18792_SHARP_,p2__18793_SHARP_){
if(cljs.core.truth_(p1__18792_SHARP_)){
return goog.object.get(p1__18792_SHARP_,p2__18793_SHARP_);
} else {
return null;
}
});})(seq__18815,chunk__18816,count__18817,i__18818,vec__18825,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5751__auto___18866)){
var hook_18867 = temp__5751__auto___18866;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_18867,args);
} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__18868 = seq__18815;
var G__18869 = chunk__18816;
var G__18870 = count__18817;
var G__18871 = (i__18818 + (1));
seq__18815 = G__18868;
chunk__18816 = G__18869;
count__18817 = G__18870;
i__18818 = G__18871;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__18815);
if(temp__5753__auto__){
var seq__18815__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18815__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__18815__$1);
var G__18872 = cljs.core.chunk_rest.call(null,seq__18815__$1);
var G__18873 = c__4556__auto__;
var G__18874 = cljs.core.count.call(null,c__4556__auto__);
var G__18875 = (0);
seq__18815 = G__18872;
chunk__18816 = G__18873;
count__18817 = G__18874;
i__18818 = G__18875;
continue;
} else {
var vec__18828 = cljs.core.first.call(null,seq__18815__$1);
var n = cljs.core.nth.call(null,vec__18828,(0),null);
var f = cljs.core.nth.call(null,vec__18828,(1),null);
var temp__5751__auto___18876 = cljs.core.reduce.call(null,((function (seq__18815,chunk__18816,count__18817,i__18818,vec__18828,n,f,seq__18815__$1,temp__5753__auto__,hooks){
return (function (p1__18792_SHARP_,p2__18793_SHARP_){
if(cljs.core.truth_(p1__18792_SHARP_)){
return goog.object.get(p1__18792_SHARP_,p2__18793_SHARP_);
} else {
return null;
}
});})(seq__18815,chunk__18816,count__18817,i__18818,vec__18828,n,f,seq__18815__$1,temp__5753__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5751__auto___18876)){
var hook_18877 = temp__5751__auto___18876;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_18877,args);
} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__18878 = cljs.core.next.call(null,seq__18815__$1);
var G__18879 = null;
var G__18880 = (0);
var G__18881 = (0);
seq__18815 = G__18878;
chunk__18816 = G__18879;
count__18817 = G__18880;
i__18818 = G__18881;
continue;
}
} else {
return null;
}
}
break;
}
}));

(figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq18809){
var G__18810 = cljs.core.first.call(null,seq18809);
var seq18809__$1 = cljs.core.next.call(null,seq18809);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18810,seq18809__$1);
}));


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__18831){
var vec__18832 = p__18831;
var k = cljs.core.nth.call(null,vec__18832,(0),null);
var v = cljs.core.nth.call(null,vec__18832,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,(function (p1__18794_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__18794_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__18794_SHARP_));
}),namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__18795_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__18795_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
}));

var to_reload = (cljs.core.truth_(((cljs.core.not.call(null,figwheel.core.load_warninged_code))?cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null))):false))?null:cljs.core.filter.call(null,(function (p1__18796_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__18796_SHARP_);
}),namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
}),(0));
}

var seq__18835_18882 = cljs.core.seq.call(null,to_reload);
var chunk__18836_18883 = null;
var count__18837_18884 = (0);
var i__18838_18885 = (0);
while(true){
if((i__18838_18885 < count__18837_18884)){
var ns_18886 = cljs.core._nth.call(null,chunk__18836_18883,i__18838_18885);
goog.require(cljs.core.name.call(null,ns_18886),true);


var G__18887 = seq__18835_18882;
var G__18888 = chunk__18836_18883;
var G__18889 = count__18837_18884;
var G__18890 = (i__18838_18885 + (1));
seq__18835_18882 = G__18887;
chunk__18836_18883 = G__18888;
count__18837_18884 = G__18889;
i__18838_18885 = G__18890;
continue;
} else {
var temp__5753__auto___18891 = cljs.core.seq.call(null,seq__18835_18882);
if(temp__5753__auto___18891){
var seq__18835_18892__$1 = temp__5753__auto___18891;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18835_18892__$1)){
var c__4556__auto___18893 = cljs.core.chunk_first.call(null,seq__18835_18892__$1);
var G__18894 = cljs.core.chunk_rest.call(null,seq__18835_18892__$1);
var G__18895 = c__4556__auto___18893;
var G__18896 = cljs.core.count.call(null,c__4556__auto___18893);
var G__18897 = (0);
seq__18835_18882 = G__18894;
chunk__18836_18883 = G__18895;
count__18837_18884 = G__18896;
i__18838_18885 = G__18897;
continue;
} else {
var ns_18898 = cljs.core.first.call(null,seq__18835_18892__$1);
goog.require(cljs.core.name.call(null,ns_18898),true);


var G__18899 = cljs.core.next.call(null,seq__18835_18892__$1);
var G__18900 = null;
var G__18901 = (0);
var G__18902 = (0);
seq__18835_18882 = G__18899;
chunk__18836_18883 = G__18900;
count__18837_18884 = G__18901;
i__18838_18885 = G__18902;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_18903 = (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
figwheel.core.glog_info.call(null,figwheel.core.logger,["loaded ",cljs.core.pr_str.call(null,to_reload)].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5753__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5753__auto__)){
var not_loaded = temp__5753__auto__;
return figwheel.core.glog_info.call(null,figwheel.core.logger,["did not load ",cljs.core.pr_str.call(null,not_loaded)].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_18903);
} else {
setTimeout(after_reload_fn_18903,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__18839 = cljs.core.seq.call(null,warnings);
var chunk__18840 = null;
var count__18841 = (0);
var i__18842 = (0);
while(true){
if((i__18842 < count__18841)){
var warning = cljs.core._nth.call(null,chunk__18840,i__18842);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__18904 = seq__18839;
var G__18905 = chunk__18840;
var G__18906 = count__18841;
var G__18907 = (i__18842 + (1));
seq__18839 = G__18904;
chunk__18840 = G__18905;
count__18841 = G__18906;
i__18842 = G__18907;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__18839);
if(temp__5753__auto__){
var seq__18839__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18839__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__18839__$1);
var G__18908 = cljs.core.chunk_rest.call(null,seq__18839__$1);
var G__18909 = c__4556__auto__;
var G__18910 = cljs.core.count.call(null,c__4556__auto__);
var G__18911 = (0);
seq__18839 = G__18908;
chunk__18840 = G__18909;
count__18841 = G__18910;
i__18842 = G__18911;
continue;
} else {
var warning = cljs.core.first.call(null,seq__18839__$1);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__18912 = cljs.core.next.call(null,seq__18839__$1);
var G__18913 = null;
var G__18914 = (0);
var G__18915 = (0);
seq__18839 = G__18912;
chunk__18840 = G__18913;
count__18841 = G__18914;
i__18842 = G__18915;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__18843){
var map__18844 = p__18843;
var map__18844__$1 = (((((!((map__18844 == null))))?(((((map__18844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18844):map__18844);
var exception_data = map__18844__$1;
var file = cljs.core.get.call(null,map__18844__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__18844__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__18844__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
}),(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__18797_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__18797_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
}));

return figwheel.core.glog_warning.call(null,figwheel.core.logger,(function (){var G__18846 = "Compile Exception - ";
var G__18846__$1 = (cljs.core.truth_((function (){var or__4126__auto__ = type;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return message;
}
})())?[G__18846,clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null)))].join(''):G__18846);
if(cljs.core.truth_(file)){
return [G__18846__$1," in ",figwheel.core.file_line_column.call(null,exception_data)].join('');
} else {
return G__18846__$1;
}
})());
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map
