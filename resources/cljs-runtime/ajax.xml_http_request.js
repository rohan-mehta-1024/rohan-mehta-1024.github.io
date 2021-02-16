goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__30215 = e.target.readyState;
var fexpr__30214 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__30214.cljs$core$IFn$_invoke$arity$1 ? fexpr__30214.cljs$core$IFn$_invoke$arity$1(G__30215) : fexpr__30214.call(null,G__30215));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__30224,handler){
var map__30225 = p__30224;
var map__30225__$1 = (((((!((map__30225 == null))))?(((((map__30225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30225):map__30225);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30225__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30225__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30225__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30225__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30225__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30225__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30225__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__30223_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__30223_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___30274 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___30274)){
var response_type_30275 = temp__5735__auto___30274;
(this$__$1.responseType = cljs.core.name(response_type_30275));
} else {
}

var seq__30234_30276 = cljs.core.seq(headers);
var chunk__30235_30277 = null;
var count__30236_30278 = (0);
var i__30237_30279 = (0);
while(true){
if((i__30237_30279 < count__30236_30278)){
var vec__30244_30280 = chunk__30235_30277.cljs$core$IIndexed$_nth$arity$2(null,i__30237_30279);
var k_30281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30244_30280,(0),null);
var v_30282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30244_30280,(1),null);
this$__$1.setRequestHeader(k_30281,v_30282);


var G__30283 = seq__30234_30276;
var G__30284 = chunk__30235_30277;
var G__30285 = count__30236_30278;
var G__30286 = (i__30237_30279 + (1));
seq__30234_30276 = G__30283;
chunk__30235_30277 = G__30284;
count__30236_30278 = G__30285;
i__30237_30279 = G__30286;
continue;
} else {
var temp__5735__auto___30287 = cljs.core.seq(seq__30234_30276);
if(temp__5735__auto___30287){
var seq__30234_30288__$1 = temp__5735__auto___30287;
if(cljs.core.chunked_seq_QMARK_(seq__30234_30288__$1)){
var c__4556__auto___30289 = cljs.core.chunk_first(seq__30234_30288__$1);
var G__30290 = cljs.core.chunk_rest(seq__30234_30288__$1);
var G__30291 = c__4556__auto___30289;
var G__30292 = cljs.core.count(c__4556__auto___30289);
var G__30293 = (0);
seq__30234_30276 = G__30290;
chunk__30235_30277 = G__30291;
count__30236_30278 = G__30292;
i__30237_30279 = G__30293;
continue;
} else {
var vec__30247_30294 = cljs.core.first(seq__30234_30288__$1);
var k_30295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30247_30294,(0),null);
var v_30296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30247_30294,(1),null);
this$__$1.setRequestHeader(k_30295,v_30296);


var G__30297 = cljs.core.next(seq__30234_30288__$1);
var G__30298 = null;
var G__30299 = (0);
var G__30300 = (0);
seq__30234_30276 = G__30297;
chunk__30235_30277 = G__30298;
count__30236_30278 = G__30299;
i__30237_30279 = G__30300;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4126__auto__ = body;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
