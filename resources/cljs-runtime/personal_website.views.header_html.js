goog.provide('personal_website.views.header_html');
personal_website.views.header_html.subpage_data = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["About",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Who I Am","Accomplishments","placeholder","placeholder","placeholder","placeholder"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Projects",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Synthetic Biology","Computer Science","placeholder","placeholder","placeholder","placeholder"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Writings",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Poetry","Short Stories","Academic Papers","Personal Essays","Blog Posts","placeholder"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Readings",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Books","Articles & Essays","placeholder","placeholder","placeholder","placeholder"], null)], null)], null);
personal_website.views.header_html.format_url = (function personal_website$views$header_html$format_url(sub_subpage){
var first_el = (function (){var fexpr__45896 = (personal_website.views.header_html.subpage_data.cljs$core$IFn$_invoke$arity$1 ? personal_website.views.header_html.subpage_data.cljs$core$IFn$_invoke$arity$1((0)) : personal_website.views.header_html.subpage_data.call(null,(0)));
return (fexpr__45896.cljs$core$IFn$_invoke$arity$1 ? fexpr__45896.cljs$core$IFn$_invoke$arity$1((1)) : fexpr__45896.call(null,(1)));
})();
var in_first_QMARK_ = cljs.core.some((function (p1__45895_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sub_subpage,p1__45895_SHARP_);
}),first_el);
var $ = sub_subpage;
var $__$1 = clojure.string.lower_case($);
var $__$2 = clojure.string.split.cljs$core$IFn$_invoke$arity$2($__$1," ");
var $__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",$__$2);
var $__$4 = ["/#/",$__$3].join('');
if(cljs.core.truth_(in_first_QMARK_)){
return [$__$4,""].join('');
} else {
return [$__$4,"/all"].join('');
}
});
personal_website.views.header_html.close_search = (function personal_website$views$header_html$close_search(){
if(cljs.core.truth_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","search","homepage/search",951395840)], null))))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","search","homepage/search",951395840)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","search-term","homepage/search-term",-1305942950),""], null));
} else {
return null;
}
});
personal_website.views.header_html.tooltips_element = (function personal_website$views$header_html$tooltips_element(el,show_QMARK_,class$,sub_subpage){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),show_QMARK_], null),new cljs.core.Keyword(null,"href","href",-793805698),personal_website.views.header_html.format_url(sub_subpage),new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(personal_website.utils.scroll_to_top,personal_website.views.header_html.close_search)], null),sub_subpage], null);
});
personal_website.views.header_html.tooltips = (function personal_website$views$header_html$tooltips(sub_subpages){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"subpage-tooltips"], null),(function (){var iter__4529__auto__ = (function personal_website$views$header_html$tooltips_$_iter__45897(s__45898){
return (new cljs.core.LazySeq(null,(function (){
var s__45898__$1 = s__45898;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45898__$1);
if(temp__5735__auto__){
var s__45898__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45898__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__45898__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__45900 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__45899 = (0);
while(true){
if((i__45899 < size__4528__auto__)){
var sub_subpage = cljs.core._nth(c__4527__auto__,i__45899);
var placeholder_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sub_subpage,"placeholder");
var show_QMARK_ = ((placeholder_QMARK_)?"0%":"100%");
var el = ((placeholder_QMARK_)?new cljs.core.Keyword(null,"div","div",1057191632):new cljs.core.Keyword(null,"a","a",-2123407586));
var class$ = ((placeholder_QMARK_)?"":"subpage-tooltip-elements");
var link = ((placeholder_QMARK_)?"":personal_website.views.header_html.format_url(sub_subpage));
cljs.core.chunk_append(b__45900,personal_website.views.header_html.tooltips_element(el,show_QMARK_,class$,sub_subpage));

var G__45933 = (i__45899 + (1));
i__45899 = G__45933;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45900),personal_website$views$header_html$tooltips_$_iter__45897(cljs.core.chunk_rest(s__45898__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45900),null);
}
} else {
var sub_subpage = cljs.core.first(s__45898__$2);
var placeholder_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sub_subpage,"placeholder");
var show_QMARK_ = ((placeholder_QMARK_)?"0%":"100%");
var el = ((placeholder_QMARK_)?new cljs.core.Keyword(null,"div","div",1057191632):new cljs.core.Keyword(null,"a","a",-2123407586));
var class$ = ((placeholder_QMARK_)?"":"subpage-tooltip-elements");
var link = ((placeholder_QMARK_)?"":personal_website.views.header_html.format_url(sub_subpage));
return cljs.core.cons(personal_website.views.header_html.tooltips_element(el,show_QMARK_,class$,sub_subpage),personal_website$views$header_html$tooltips_$_iter__45897(cljs.core.rest(s__45898__$2)));
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
personal_website.views.header_html.search_fn = (function personal_website$views$header_html$search_fn(){
if(cljs.core.truth_(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","search","homepage/search",951395840)], null))))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","search-term","homepage/search-term",-1305942950),""], null));
} else {
}

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","search","homepage/search",951395840)], null));

return personal_website.utils.scroll_to_top();
});
personal_website.views.header_html.subpages = (function personal_website$views$header_html$subpages(){
var $ = (function (){var iter__4529__auto__ = (function personal_website$views$header_html$subpages_$_iter__45903(s__45904){
return (new cljs.core.LazySeq(null,(function (){
var s__45904__$1 = s__45904;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45904__$1);
if(temp__5735__auto__){
var s__45904__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45904__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__45904__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__45906 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__45905 = (0);
while(true){
if((i__45905 < size__4528__auto__)){
var vec__45907 = cljs.core._nth(c__4527__auto__,i__45905);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45907,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45907,(1),null);
cljs.core.chunk_append(b__45906,personal_website.views.header_html.subpage_skeleton(text,id));

var G__45934 = (i__45905 + (1));
i__45905 = G__45934;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45906),personal_website$views$header_html$subpages_$_iter__45903(cljs.core.chunk_rest(s__45904__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45906),null);
}
} else {
var vec__45910 = cljs.core.first(s__45904__$2);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45910,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45910,(1),null);
return cljs.core.cons(personal_website.views.header_html.subpage_skeleton(text,id),personal_website$views$header_html$subpages_$_iter__45903(cljs.core.rest(s__45904__$2)));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),$__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"/resources/search.svg",new cljs.core.Keyword(null,"id","id",-1388402092),"search-img-1",new cljs.core.Keyword(null,"on-click","on-click",1632826543),personal_website.views.header_html.search_fn], null)], null)], null);
});
personal_website.views.header_html.hamburger_button = (function personal_website$views$header_html$hamburger_button(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"ham-menu",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","hamburger-menu","homepage/hamburger-menu",1565742493)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"lines"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"lines"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"lines"], null)], null)], null);
});
personal_website.views.header_html.close_all_others = (function personal_website$views$header_html$close_all_others(given_idx,mapping){
var seq__45913_45935 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.Keyword(null,"3","3",2097825370),new cljs.core.Keyword(null,"4","4",-1197948085),new cljs.core.Keyword(null,"5","5",538911032)], null));
var chunk__45915_45936 = null;
var count__45916_45937 = (0);
var i__45917_45938 = (0);
while(true){
if((i__45917_45938 < count__45916_45937)){
var key_45939 = chunk__45915_45936.cljs$core$IIndexed$_nth$arity$2(null,i__45917_45938);
if(cljs.core.truth_((function (){var and__4115__auto__ = (mapping.cljs$core$IFn$_invoke$arity$1 ? mapping.cljs$core$IFn$_invoke$arity$1(key_45939) : mapping.call(null,key_45939));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key_45939,given_idx);
} else {
return and__4115__auto__;
}
})())){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","side-nav-arrow","homepage/side-nav-arrow",2077653864),key_45939], null));


var G__45940 = seq__45913_45935;
var G__45941 = chunk__45915_45936;
var G__45942 = count__45916_45937;
var G__45943 = (i__45917_45938 + (1));
seq__45913_45935 = G__45940;
chunk__45915_45936 = G__45941;
count__45916_45937 = G__45942;
i__45917_45938 = G__45943;
continue;
} else {
var G__45944 = seq__45913_45935;
var G__45945 = chunk__45915_45936;
var G__45946 = count__45916_45937;
var G__45947 = (i__45917_45938 + (1));
seq__45913_45935 = G__45944;
chunk__45915_45936 = G__45945;
count__45916_45937 = G__45946;
i__45917_45938 = G__45947;
continue;
}
} else {
var temp__5735__auto___45948 = cljs.core.seq(seq__45913_45935);
if(temp__5735__auto___45948){
var seq__45913_45949__$1 = temp__5735__auto___45948;
if(cljs.core.chunked_seq_QMARK_(seq__45913_45949__$1)){
var c__4556__auto___45950 = cljs.core.chunk_first(seq__45913_45949__$1);
var G__45951 = cljs.core.chunk_rest(seq__45913_45949__$1);
var G__45952 = c__4556__auto___45950;
var G__45953 = cljs.core.count(c__4556__auto___45950);
var G__45954 = (0);
seq__45913_45935 = G__45951;
chunk__45915_45936 = G__45952;
count__45916_45937 = G__45953;
i__45917_45938 = G__45954;
continue;
} else {
var key_45955 = cljs.core.first(seq__45913_45949__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = (mapping.cljs$core$IFn$_invoke$arity$1 ? mapping.cljs$core$IFn$_invoke$arity$1(key_45955) : mapping.call(null,key_45955));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key_45955,given_idx);
} else {
return and__4115__auto__;
}
})())){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","side-nav-arrow","homepage/side-nav-arrow",2077653864),key_45955], null));


var G__45956 = cljs.core.next(seq__45913_45949__$1);
var G__45957 = null;
var G__45958 = (0);
var G__45959 = (0);
seq__45913_45935 = G__45956;
chunk__45915_45936 = G__45957;
count__45916_45937 = G__45958;
i__45917_45938 = G__45959;
continue;
} else {
var G__45960 = cljs.core.next(seq__45913_45949__$1);
var G__45961 = null;
var G__45962 = (0);
var G__45963 = (0);
seq__45913_45935 = G__45960;
chunk__45915_45936 = G__45961;
count__45916_45937 = G__45962;
i__45917_45938 = G__45963;
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
var close = (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","hamburger-menu","homepage/hamburger-menu",1565742493)], null));
});
var close__$1 = (function (){
personal_website.utils.scroll_to_top();

return setTimeout(close,(50));
});
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-subpage-container"], null),(function (){var iter__4529__auto__ = (function personal_website$views$header_html$side_nav_arrow_subpages_$_iter__45919(s__45920){
return (new cljs.core.LazySeq(null,(function (){
var s__45920__$1 = s__45920;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45920__$1);
if(temp__5735__auto__){
var s__45920__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45920__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__45920__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__45922 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__45921 = (0);
while(true){
if((i__45921 < size__4528__auto__)){
var sub_subpage = cljs.core._nth(c__4527__auto__,i__45921);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sub_subpage,"placeholder")){
cljs.core.chunk_append(b__45922,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-subpage-elements",new cljs.core.Keyword(null,"href","href",-793805698),personal_website.views.header_html.format_url(sub_subpage),new cljs.core.Keyword(null,"on-click","on-click",1632826543),close__$1], null),sub_subpage], null));

var G__45966 = (i__45921 + (1));
i__45921 = G__45966;
continue;
} else {
var G__45967 = (i__45921 + (1));
i__45921 = G__45967;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45922),personal_website$views$header_html$side_nav_arrow_subpages_$_iter__45919(cljs.core.chunk_rest(s__45920__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45922),null);
}
} else {
var sub_subpage = cljs.core.first(s__45920__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sub_subpage,"placeholder")){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-subpage-elements",new cljs.core.Keyword(null,"href","href",-793805698),personal_website.views.header_html.format_url(sub_subpage),new cljs.core.Keyword(null,"on-click","on-click",1632826543),close__$1], null),sub_subpage], null),personal_website$views$header_html$side_nav_arrow_subpages_$_iter__45919(cljs.core.rest(s__45920__$2)));
} else {
var G__45968 = cljs.core.rest(s__45920__$2);
s__45920__$1 = G__45968;
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
personal_website.views.header_html.close_all_others(keyworded,pressed_QMARK_);

return personal_website.views.header_html.close_search();
})], null),text,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-arrow"], null)], null)], null),personal_website.views.header_html.side_nav_arrow_subpages(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(personal_website.views.header_html.subpage_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((id - (1)) - (1)),(1)], null)))], null);
});
personal_website.views.header_html.side_nav = (function personal_website$views$header_html$side_nav(){
var $ = (function (){var iter__4529__auto__ = (function personal_website$views$header_html$side_nav_$_iter__45923(s__45924){
return (new cljs.core.LazySeq(null,(function (){
var s__45924__$1 = s__45924;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45924__$1);
if(temp__5735__auto__){
var s__45924__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45924__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__45924__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__45926 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__45925 = (0);
while(true){
if((i__45925 < size__4528__auto__)){
var vec__45927 = cljs.core._nth(c__4527__auto__,i__45925);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45927,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45927,(1),null);
cljs.core.chunk_append(b__45926,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-container-2"], null),personal_website.views.header_html.side_nav_skeleton(text,id)))));

var G__45969 = (i__45925 + (1));
i__45925 = G__45969;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45926),personal_website$views$header_html$side_nav_$_iter__45923(cljs.core.chunk_rest(s__45924__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45926),null);
}
} else {
var vec__45930 = cljs.core.first(s__45924__$2);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45930,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45930,(1),null);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-container-2"], null),personal_website.views.header_html.side_nav_skeleton(text,id)))),personal_website$views$header_html$side_nav_$_iter__45923(cljs.core.rest(s__45924__$2)));
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
var $__$1 = cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"/resources/search.svg",new cljs.core.Keyword(null,"id","id",-1388402092),"search-img-2",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","hamburger-menu","homepage/hamburger-menu",1565742493)], null));
}),personal_website.views.header_html.search_fn)], null)], null),$);
var $__$2 = cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"side-nav-container-1"], null),$__$1);
var $__$3 = cljs.core.cons(new cljs.core.Keyword(null,"ul","ul",-1349521403),$__$2);
var $__$4 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,$__$3);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"side-nav-background"], null),$__$4], null);
});
personal_website.views.header_html.header = (function personal_website$views$header_html$header(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"page-header"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"my-name"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"/",new cljs.core.Keyword(null,"on-click","on-click",1632826543),personal_website.views.header_html.close_search], null),"Rohan Mehta"], null)], null),personal_website.views.header_html.subpages(),personal_website.views.header_html.side_nav(),personal_website.views.header_html.hamburger_button()], null);
});

//# sourceMappingURL=personal_website.views.header_html.js.map
