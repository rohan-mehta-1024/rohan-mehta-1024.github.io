goog.provide('personal_website.views.header_html');
personal_website.views.header_html.subpage_data = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["About",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Who I Am","Accomplishments","placeholder","placeholder","placeholder","placeholder"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Projects",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Engineering","Synthetic Biology","Computer Science","placeholder","placeholder","placeholder"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Writings",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Poetry","Short Stories","Academic Papers","Personal Essays","Blog Posts","placeholder"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Readings",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Books & Novels","Articles & Essays","placeholder","placeholder","placeholder","placeholder"], null)], null)], null);
personal_website.views.header_html.format_url = (function personal_website$views$header_html$format_url(sub_subpage){
var first_el = (function (){var fexpr__34445 = (personal_website.views.header_html.subpage_data.cljs$core$IFn$_invoke$arity$1 ? personal_website.views.header_html.subpage_data.cljs$core$IFn$_invoke$arity$1((0)) : personal_website.views.header_html.subpage_data.call(null,(0)));
return (fexpr__34445.cljs$core$IFn$_invoke$arity$1 ? fexpr__34445.cljs$core$IFn$_invoke$arity$1((1)) : fexpr__34445.call(null,(1)));
})();
var in_first_QMARK_ = cljs.core.some((function (p1__34444_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sub_subpage,p1__34444_SHARP_);
}),first_el);
var $ = sub_subpage;
var $__$1 = clojure.string.lower_case($);
var $__$2 = clojure.string.split.cljs$core$IFn$_invoke$arity$2($__$1," ");
var $__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",$__$2);
var $__$4 = ["/",$__$3].join('');
if(cljs.core.truth_(in_first_QMARK_)){
return [$__$4,""].join('');
} else {
return [$__$4,"/all"].join('');
}
});
personal_website.views.header_html.scroll_to_top = (function personal_website$views$header_html$scroll_to_top(){
var js_obj = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0)], null));
var scroll = (function (){
return window.scrollTo(js_obj);
});
return setTimeout(scroll,(120));
});
personal_website.views.header_html.tooltips = (function personal_website$views$header_html$tooltips(sub_subpages){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"subpage-tooltips"], null),(function (){var iter__4529__auto__ = (function personal_website$views$header_html$tooltips_$_iter__34446(s__34447){
return (new cljs.core.LazySeq(null,(function (){
var s__34447__$1 = s__34447;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34447__$1);
if(temp__5735__auto__){
var s__34447__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34447__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__34447__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__34449 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__34448 = (0);
while(true){
if((i__34448 < size__4528__auto__)){
var sub_subpage = cljs.core._nth(c__4527__auto__,i__34448);
var placeholder_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sub_subpage,"placeholder");
var show_QMARK_ = ((placeholder_QMARK_)?"0%":"100%");
var el = ((placeholder_QMARK_)?new cljs.core.Keyword(null,"div","div",1057191632):new cljs.core.Keyword(null,"a","a",-2123407586));
var class$ = ((placeholder_QMARK_)?"":"subpage-tooltip-elements");
var link = ((placeholder_QMARK_)?"":personal_website.views.header_html.format_url(sub_subpage));
cljs.core.chunk_append(b__34449,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),show_QMARK_], null),new cljs.core.Keyword(null,"href","href",-793805698),personal_website.views.header_html.format_url(sub_subpage),new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),sub_subpage], null));

var G__34483 = (i__34448 + (1));
i__34448 = G__34483;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34449),personal_website$views$header_html$tooltips_$_iter__34446(cljs.core.chunk_rest(s__34447__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34449),null);
}
} else {
var sub_subpage = cljs.core.first(s__34447__$2);
var placeholder_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sub_subpage,"placeholder");
var show_QMARK_ = ((placeholder_QMARK_)?"0%":"100%");
var el = ((placeholder_QMARK_)?new cljs.core.Keyword(null,"div","div",1057191632):new cljs.core.Keyword(null,"a","a",-2123407586));
var class$ = ((placeholder_QMARK_)?"":"subpage-tooltip-elements");
var link = ((placeholder_QMARK_)?"":personal_website.views.header_html.format_url(sub_subpage));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),show_QMARK_], null),new cljs.core.Keyword(null,"href","href",-793805698),personal_website.views.header_html.format_url(sub_subpage),new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),sub_subpage], null),personal_website$views$header_html$tooltips_$_iter__34446(cljs.core.rest(s__34447__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(sub_subpages);
})())));
});
personal_website.views.header_html.subpage_skeleton = (function personal_website$views$header_html$subpage_skeleton(text,id){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"subpage-container-2",new cljs.core.Keyword(null,"onMouseLeave","onMouseLeave",1446726903),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","subpage-hover","homepage/subpage-hover",-1030285926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,id], null)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"subpage-elements",new cljs.core.Keyword(null,"onMouseEnter","onMouseEnter",-1535281844),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","subpage-hover","homepage/subpage-hover",-1030285926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,id], null)], null));
})], null),text], null),personal_website.views.header_html.tooltips(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(personal_website.views.header_html.subpage_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(id - (1)),(1)], null)))], null);
});
personal_website.views.header_html.subpages = (function personal_website$views$header_html$subpages(){
var $ = (function (){var iter__4529__auto__ = (function personal_website$views$header_html$subpages_$_iter__34450(s__34451){
return (new cljs.core.LazySeq(null,(function (){
var s__34451__$1 = s__34451;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34451__$1);
if(temp__5735__auto__){
var s__34451__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34451__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__34451__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__34453 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__34452 = (0);
while(true){
if((i__34452 < size__4528__auto__)){
var vec__34454 = cljs.core._nth(c__4527__auto__,i__34452);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34454,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34454,(1),null);
cljs.core.chunk_append(b__34453,personal_website.views.header_html.subpage_skeleton(text,id));

var G__34484 = (i__34452 + (1));
i__34452 = G__34484;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34453),personal_website$views$header_html$subpages_$_iter__34450(cljs.core.chunk_rest(s__34451__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34453),null);
}
} else {
var vec__34457 = cljs.core.first(s__34451__$2);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34457,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34457,(1),null);
return cljs.core.cons(personal_website.views.header_html.subpage_skeleton(text,id),personal_website$views$header_html$subpages_$_iter__34450(cljs.core.rest(s__34451__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["About",(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Projects",(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Writings",(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Readings",(4)], null)], null));
})();
var $__$1 = cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"subpage-container-1"], null),$);
var $__$2 = cljs.core.cons(new cljs.core.Keyword(null,"ul","ul",-1349521403),$__$1);
var $__$3 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,$__$2);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),$__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"/resources/search.svg",new cljs.core.Keyword(null,"id","id",-1388402092),"search-img-1",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","search","homepage/search",951395840)], null))))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","search-term","homepage/search-term",-1305942950),""], null));
} else {
}

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","search","homepage/search",951395840)], null));
})], null)], null)], null);
});
personal_website.views.header_html.hamburger_button = (function personal_website$views$header_html$hamburger_button(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"ham-menu",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","hamburger-menu","homepage/hamburger-menu",1565742493)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"lines"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"lines"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"lines"], null)], null)], null);
});
personal_website.views.header_html.close_all_others = (function personal_website$views$header_html$close_all_others(given_idx,mapping){
var seq__34460_34485 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.Keyword(null,"3","3",2097825370),new cljs.core.Keyword(null,"4","4",-1197948085),new cljs.core.Keyword(null,"5","5",538911032)], null));
var chunk__34462_34486 = null;
var count__34463_34487 = (0);
var i__34464_34488 = (0);
while(true){
if((i__34464_34488 < count__34463_34487)){
var key_34489 = chunk__34462_34486.cljs$core$IIndexed$_nth$arity$2(null,i__34464_34488);
if(cljs.core.truth_((function (){var and__4115__auto__ = (mapping.cljs$core$IFn$_invoke$arity$1 ? mapping.cljs$core$IFn$_invoke$arity$1(key_34489) : mapping.call(null,key_34489));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key_34489,given_idx);
} else {
return and__4115__auto__;
}
})())){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","side-nav-arrow","homepage/side-nav-arrow",2077653864),key_34489], null));


var G__34490 = seq__34460_34485;
var G__34491 = chunk__34462_34486;
var G__34492 = count__34463_34487;
var G__34493 = (i__34464_34488 + (1));
seq__34460_34485 = G__34490;
chunk__34462_34486 = G__34491;
count__34463_34487 = G__34492;
i__34464_34488 = G__34493;
continue;
} else {
var G__34494 = seq__34460_34485;
var G__34495 = chunk__34462_34486;
var G__34496 = count__34463_34487;
var G__34497 = (i__34464_34488 + (1));
seq__34460_34485 = G__34494;
chunk__34462_34486 = G__34495;
count__34463_34487 = G__34496;
i__34464_34488 = G__34497;
continue;
}
} else {
var temp__5735__auto___34498 = cljs.core.seq(seq__34460_34485);
if(temp__5735__auto___34498){
var seq__34460_34499__$1 = temp__5735__auto___34498;
if(cljs.core.chunked_seq_QMARK_(seq__34460_34499__$1)){
var c__4556__auto___34500 = cljs.core.chunk_first(seq__34460_34499__$1);
var G__34501 = cljs.core.chunk_rest(seq__34460_34499__$1);
var G__34502 = c__4556__auto___34500;
var G__34503 = cljs.core.count(c__4556__auto___34500);
var G__34504 = (0);
seq__34460_34485 = G__34501;
chunk__34462_34486 = G__34502;
count__34463_34487 = G__34503;
i__34464_34488 = G__34504;
continue;
} else {
var key_34505 = cljs.core.first(seq__34460_34499__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = (mapping.cljs$core$IFn$_invoke$arity$1 ? mapping.cljs$core$IFn$_invoke$arity$1(key_34505) : mapping.call(null,key_34505));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key_34505,given_idx);
} else {
return and__4115__auto__;
}
})())){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","side-nav-arrow","homepage/side-nav-arrow",2077653864),key_34505], null));


var G__34506 = cljs.core.next(seq__34460_34499__$1);
var G__34507 = null;
var G__34508 = (0);
var G__34509 = (0);
seq__34460_34485 = G__34506;
chunk__34462_34486 = G__34507;
count__34463_34487 = G__34508;
i__34464_34488 = G__34509;
continue;
} else {
var G__34510 = cljs.core.next(seq__34460_34499__$1);
var G__34511 = null;
var G__34512 = (0);
var G__34513 = (0);
seq__34460_34485 = G__34510;
chunk__34462_34486 = G__34511;
count__34463_34487 = G__34512;
i__34464_34488 = G__34513;
continue;
}
}
} else {
}
}
break;
}

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","side-nav-arrow","homepage/side-nav-arrow",2077653864),given_idx], null));
});
personal_website.views.header_html.side_nav_arrow_subpages = (function personal_website$views$header_html$side_nav_arrow_subpages(sub_subpages){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-subpage-container"], null),(function (){var iter__4529__auto__ = (function personal_website$views$header_html$side_nav_arrow_subpages_$_iter__34466(s__34467){
return (new cljs.core.LazySeq(null,(function (){
var s__34467__$1 = s__34467;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34467__$1);
if(temp__5735__auto__){
var s__34467__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34467__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__34467__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__34469 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__34468 = (0);
while(true){
if((i__34468 < size__4528__auto__)){
var sub_subpage = cljs.core._nth(c__4527__auto__,i__34468);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sub_subpage,"placeholder")){
cljs.core.chunk_append(b__34469,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-subpage-elements",new cljs.core.Keyword(null,"href","href",-793805698),personal_website.views.header_html.format_url(sub_subpage),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__34468,s__34467__$1,sub_subpage,c__4527__auto__,size__4528__auto__,b__34469,s__34467__$2,temp__5735__auto__){
return (function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","hamburger-menu","homepage/hamburger-menu",1565742493)], null));

return personal_website.views.header_html.scroll_to_top();
});})(i__34468,s__34467__$1,sub_subpage,c__4527__auto__,size__4528__auto__,b__34469,s__34467__$2,temp__5735__auto__))
], null),sub_subpage], null));

var G__34514 = (i__34468 + (1));
i__34468 = G__34514;
continue;
} else {
var G__34515 = (i__34468 + (1));
i__34468 = G__34515;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34469),personal_website$views$header_html$side_nav_arrow_subpages_$_iter__34466(cljs.core.chunk_rest(s__34467__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34469),null);
}
} else {
var sub_subpage = cljs.core.first(s__34467__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sub_subpage,"placeholder")){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-subpage-elements",new cljs.core.Keyword(null,"href","href",-793805698),personal_website.views.header_html.format_url(sub_subpage),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s__34467__$1,sub_subpage,s__34467__$2,temp__5735__auto__){
return (function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","hamburger-menu","homepage/hamburger-menu",1565742493)], null));

return personal_website.views.header_html.scroll_to_top();
});})(s__34467__$1,sub_subpage,s__34467__$2,temp__5735__auto__))
], null),sub_subpage], null),personal_website$views$header_html$side_nav_arrow_subpages_$_iter__34466(cljs.core.rest(s__34467__$2)));
} else {
var G__34516 = cljs.core.rest(s__34467__$2);
s__34467__$1 = G__34516;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(sub_subpages);
})())));
});
personal_website.views.header_html.side_nav_skeleton = (function personal_website$views$header_html$side_nav_skeleton(text,id){
var keyworded = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
var pressed_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","side-nav-arrow","homepage/side-nav-arrow",2077653864)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-elements",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return personal_website.views.header_html.close_all_others(keyworded,pressed_QMARK_);
})], null),text,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-arrow"], null)], null)], null),personal_website.views.header_html.side_nav_arrow_subpages(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(personal_website.views.header_html.subpage_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((id - (1)) - (1)),(1)], null)))], null);
});
personal_website.views.header_html.side_nav = (function personal_website$views$header_html$side_nav(){
var $ = (function (){var iter__4529__auto__ = (function personal_website$views$header_html$side_nav_$_iter__34470(s__34471){
return (new cljs.core.LazySeq(null,(function (){
var s__34471__$1 = s__34471;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34471__$1);
if(temp__5735__auto__){
var s__34471__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34471__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__34471__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__34473 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__34472 = (0);
while(true){
if((i__34472 < size__4528__auto__)){
var vec__34474 = cljs.core._nth(c__4527__auto__,i__34472);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34474,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34474,(1),null);
cljs.core.chunk_append(b__34473,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-container-2"], null),personal_website.views.header_html.side_nav_skeleton(text,id)))));

var G__34517 = (i__34472 + (1));
i__34472 = G__34517;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34473),personal_website$views$header_html$side_nav_$_iter__34470(cljs.core.chunk_rest(s__34471__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34473),null);
}
} else {
var vec__34477 = cljs.core.first(s__34471__$2);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34477,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34477,(1),null);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-container-2"], null),personal_website.views.header_html.side_nav_skeleton(text,id)))),personal_website$views$header_html$side_nav_$_iter__34470(cljs.core.rest(s__34471__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["About",(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Projects",(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Writings",(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Readings",(5)], null)], null));
})();
var $__$1 = cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/resources/search.svg",new cljs.core.Keyword(null,"id","id",-1388402092),"search-img-2"], null)], null),$);
var $__$2 = cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"side-nav-container-1"], null),$__$1);
var $__$3 = cljs.core.cons(new cljs.core.Keyword(null,"ul","ul",-1349521403),$__$2);
var $__$4 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,$__$3);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"side-nav-background"], null),$__$4], null);
});
personal_website.views.header_html.header = (function personal_website$views$header_html$header(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"page-header"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"my-name"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"/",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","search","homepage/search",951395840)], null))))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","search","homepage/search",951395840)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","search-term","homepage/search-term",-1305942950),""], null));
} else {
return null;
}
})], null),"Rohan Mehta"], null)], null),personal_website.views.header_html.subpages(),personal_website.views.header_html.side_nav(),personal_website.views.header_html.hamburger_button()], null);
});

//# sourceMappingURL=personal_website.views.header_html.js.map
