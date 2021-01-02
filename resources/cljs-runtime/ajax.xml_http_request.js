goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__38385 = e.target.readyState;
var fexpr__38384 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__38384.cljs$core$IFn$_invoke$arity$1 ? fexpr__38384.cljs$core$IFn$_invoke$arity$1(G__38385) : fexpr__38384.call(null,G__38385));
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

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__38391,handler){
var map__38392 = p__38391;
var map__38392__$1 = (((((!((map__38392 == null))))?(((((map__38392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38392):map__38392);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38392__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38392__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38392__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38392__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38392__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38392__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38392__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__38389_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__38389_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___38413 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___38413)){
var response_type_38414 = temp__5735__auto___38413;
(this$__$1.responseType = cljs.core.name(response_type_38414));
} else {
}

var seq__38395_38415 = cljs.core.seq(headers);
var chunk__38396_38416 = null;
var count__38397_38417 = (0);
var i__38398_38418 = (0);
while(true){
if((i__38398_38418 < count__38397_38417)){
var vec__38406_38419 = chunk__38396_38416.cljs$core$IIndexed$_nth$arity$2(null,i__38398_38418);
var k_38420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38406_38419,(0),null);
var v_38421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38406_38419,(1),null);
this$__$1.setRequestHeader(k_38420,v_38421);


var G__38422 = seq__38395_38415;
var G__38423 = chunk__38396_38416;
var G__38424 = count__38397_38417;
var G__38425 = (i__38398_38418 + (1));
seq__38395_38415 = G__38422;
chunk__38396_38416 = G__38423;
count__38397_38417 = G__38424;
i__38398_38418 = G__38425;
continue;
} else {
var temp__5735__auto___38426 = cljs.core.seq(seq__38395_38415);
if(temp__5735__auto___38426){
var seq__38395_38427__$1 = temp__5735__auto___38426;
if(cljs.core.chunked_seq_QMARK_(seq__38395_38427__$1)){
var c__4556__auto___38428 = cljs.core.chunk_first(seq__38395_38427__$1);
var G__38429 = cljs.core.chunk_rest(seq__38395_38427__$1);
var G__38430 = c__4556__auto___38428;
var G__38431 = cljs.core.count(c__4556__auto___38428);
var G__38432 = (0);
seq__38395_38415 = G__38429;
chunk__38396_38416 = G__38430;
count__38397_38417 = G__38431;
i__38398_38418 = G__38432;
continue;
} else {
var vec__38409_38434 = cljs.core.first(seq__38395_38427__$1);
var k_38435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38409_38434,(0),null);
var v_38436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38409_38434,(1),null);
this$__$1.setRequestHeader(k_38435,v_38436);


var G__38437 = cljs.core.next(seq__38395_38427__$1);
var G__38438 = null;
var G__38439 = (0);
var G__38440 = (0);
seq__38395_38415 = G__38437;
chunk__38396_38416 = G__38438;
count__38397_38417 = G__38439;
i__38398_38418 = G__38440;
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
