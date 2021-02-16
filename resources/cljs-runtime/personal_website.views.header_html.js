goog.provide('personal_website.views.header_html');
personal_website.views.header_html.subpage_data = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["About",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Who I Am","Updates & News","Accomplishments","placeholder","placeholder","placeholder"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Projects",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Entrepreneurial","Synthetic Biology","Computer Science","placeholder","placeholder","placeholder"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Writings",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Poetry","Short Stories","Academic Papers","Personal Essays","Blog Posts","placeholder"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Readings",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Fiction","Non-Fiction","placeholder","placeholder","placeholder","placeholder"], null)], null)], null);
personal_website.views.header_html.format_url = (function personal_website$views$header_html$format_url(sub_subpage){
var first_el = (function (){var fexpr__44807 = (personal_website.views.header_html.subpage_data.cljs$core$IFn$_invoke$arity$1 ? personal_website.views.header_html.subpage_data.cljs$core$IFn$_invoke$arity$1((0)) : personal_website.views.header_html.subpage_data.call(null,(0)));
return (fexpr__44807.cljs$core$IFn$_invoke$arity$1 ? fexpr__44807.cljs$core$IFn$_invoke$arity$1((1)) : fexpr__44807.call(null,(1)));
})();
var in_first_QMARK_ = cljs.core.some((function (p1__44806_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sub_subpage,p1__44806_SHARP_);
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"subpage-tooltips"], null),(function (){var iter__4529__auto__ = (function personal_website$views$header_html$tooltips_$_iter__44808(s__44809){
return (new cljs.core.LazySeq(null,(function (){
var s__44809__$1 = s__44809;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44809__$1);
if(temp__5735__auto__){
var s__44809__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44809__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__44809__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__44811 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__44810 = (0);
while(true){
if((i__44810 < size__4528__auto__)){
var sub_subpage = cljs.core._nth(c__4527__auto__,i__44810);
var placeholder_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sub_subpage,"placeholder");
var show_QMARK_ = ((placeholder_QMARK_)?"0%":"100%");
var el = ((placeholder_QMARK_)?new cljs.core.Keyword(null,"div","div",1057191632):new cljs.core.Keyword(null,"a","a",-2123407586));
var class$ = ((placeholder_QMARK_)?"":"subpage-tooltip-elements");
var link = ((placeholder_QMARK_)?"":personal_website.views.header_html.format_url(sub_subpage));
cljs.core.chunk_append(b__44811,personal_website.views.header_html.tooltips_element(el,show_QMARK_,class$,sub_subpage));

var G__44854 = (i__44810 + (1));
i__44810 = G__44854;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44811),personal_website$views$header_html$tooltips_$_iter__44808(cljs.core.chunk_rest(s__44809__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44811),null);
}
} else {
var sub_subpage = cljs.core.first(s__44809__$2);
var placeholder_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sub_subpage,"placeholder");
var show_QMARK_ = ((placeholder_QMARK_)?"0%":"100%");
var el = ((placeholder_QMARK_)?new cljs.core.Keyword(null,"div","div",1057191632):new cljs.core.Keyword(null,"a","a",-2123407586));
var class$ = ((placeholder_QMARK_)?"":"subpage-tooltip-elements");
var link = ((placeholder_QMARK_)?"":personal_website.views.header_html.format_url(sub_subpage));
return cljs.core.cons(personal_website.views.header_html.tooltips_element(el,show_QMARK_,class$,sub_subpage),personal_website$views$header_html$tooltips_$_iter__44808(cljs.core.rest(s__44809__$2)));
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
var $ = (function (){var iter__4529__auto__ = (function personal_website$views$header_html$subpages_$_iter__44812(s__44813){
return (new cljs.core.LazySeq(null,(function (){
var s__44813__$1 = s__44813;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44813__$1);
if(temp__5735__auto__){
var s__44813__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44813__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__44813__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__44815 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__44814 = (0);
while(true){
if((i__44814 < size__4528__auto__)){
var vec__44816 = cljs.core._nth(c__4527__auto__,i__44814);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44816,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44816,(1),null);
cljs.core.chunk_append(b__44815,personal_website.views.header_html.subpage_skeleton(text,id));

var G__44864 = (i__44814 + (1));
i__44814 = G__44864;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44815),personal_website$views$header_html$subpages_$_iter__44812(cljs.core.chunk_rest(s__44813__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44815),null);
}
} else {
var vec__44819 = cljs.core.first(s__44813__$2);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44819,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44819,(1),null);
return cljs.core.cons(personal_website.views.header_html.subpage_skeleton(text,id),personal_website$views$header_html$subpages_$_iter__44812(cljs.core.rest(s__44813__$2)));
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
var seq__44822_44865 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.Keyword(null,"3","3",2097825370),new cljs.core.Keyword(null,"4","4",-1197948085),new cljs.core.Keyword(null,"5","5",538911032)], null));
var chunk__44824_44866 = null;
var count__44825_44867 = (0);
var i__44826_44868 = (0);
while(true){
if((i__44826_44868 < count__44825_44867)){
var key_44869 = chunk__44824_44866.cljs$core$IIndexed$_nth$arity$2(null,i__44826_44868);
if(cljs.core.truth_((function (){var and__4115__auto__ = (mapping.cljs$core$IFn$_invoke$arity$1 ? mapping.cljs$core$IFn$_invoke$arity$1(key_44869) : mapping.call(null,key_44869));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key_44869,given_idx);
} else {
return and__4115__auto__;
}
})())){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","side-nav-arrow","homepage/side-nav-arrow",2077653864),key_44869], null));


var G__44873 = seq__44822_44865;
var G__44874 = chunk__44824_44866;
var G__44875 = count__44825_44867;
var G__44876 = (i__44826_44868 + (1));
seq__44822_44865 = G__44873;
chunk__44824_44866 = G__44874;
count__44825_44867 = G__44875;
i__44826_44868 = G__44876;
continue;
} else {
var G__44877 = seq__44822_44865;
var G__44878 = chunk__44824_44866;
var G__44879 = count__44825_44867;
var G__44880 = (i__44826_44868 + (1));
seq__44822_44865 = G__44877;
chunk__44824_44866 = G__44878;
count__44825_44867 = G__44879;
i__44826_44868 = G__44880;
continue;
}
} else {
var temp__5735__auto___44881 = cljs.core.seq(seq__44822_44865);
if(temp__5735__auto___44881){
var seq__44822_44882__$1 = temp__5735__auto___44881;
if(cljs.core.chunked_seq_QMARK_(seq__44822_44882__$1)){
var c__4556__auto___44883 = cljs.core.chunk_first(seq__44822_44882__$1);
var G__44884 = cljs.core.chunk_rest(seq__44822_44882__$1);
var G__44885 = c__4556__auto___44883;
var G__44886 = cljs.core.count(c__4556__auto___44883);
var G__44887 = (0);
seq__44822_44865 = G__44884;
chunk__44824_44866 = G__44885;
count__44825_44867 = G__44886;
i__44826_44868 = G__44887;
continue;
} else {
var key_44888 = cljs.core.first(seq__44822_44882__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = (mapping.cljs$core$IFn$_invoke$arity$1 ? mapping.cljs$core$IFn$_invoke$arity$1(key_44888) : mapping.call(null,key_44888));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key_44888,given_idx);
} else {
return and__4115__auto__;
}
})())){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","side-nav-arrow","homepage/side-nav-arrow",2077653864),key_44888], null));


var G__44889 = cljs.core.next(seq__44822_44882__$1);
var G__44890 = null;
var G__44891 = (0);
var G__44892 = (0);
seq__44822_44865 = G__44889;
chunk__44824_44866 = G__44890;
count__44825_44867 = G__44891;
i__44826_44868 = G__44892;
continue;
} else {
var G__44893 = cljs.core.next(seq__44822_44882__$1);
var G__44894 = null;
var G__44895 = (0);
var G__44896 = (0);
seq__44822_44865 = G__44893;
chunk__44824_44866 = G__44894;
count__44825_44867 = G__44895;
i__44826_44868 = G__44896;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-subpage-container"], null),(function (){var iter__4529__auto__ = (function personal_website$views$header_html$side_nav_arrow_subpages_$_iter__44830(s__44831){
return (new cljs.core.LazySeq(null,(function (){
var s__44831__$1 = s__44831;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44831__$1);
if(temp__5735__auto__){
var s__44831__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44831__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__44831__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__44833 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__44832 = (0);
while(true){
if((i__44832 < size__4528__auto__)){
var sub_subpage = cljs.core._nth(c__4527__auto__,i__44832);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sub_subpage,"placeholder")){
cljs.core.chunk_append(b__44833,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-subpage-elements",new cljs.core.Keyword(null,"href","href",-793805698),personal_website.views.header_html.format_url(sub_subpage),new cljs.core.Keyword(null,"on-click","on-click",1632826543),close__$1], null),sub_subpage], null));

var G__44901 = (i__44832 + (1));
i__44832 = G__44901;
continue;
} else {
var G__44902 = (i__44832 + (1));
i__44832 = G__44902;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44833),personal_website$views$header_html$side_nav_arrow_subpages_$_iter__44830(cljs.core.chunk_rest(s__44831__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44833),null);
}
} else {
var sub_subpage = cljs.core.first(s__44831__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sub_subpage,"placeholder")){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-subpage-elements",new cljs.core.Keyword(null,"href","href",-793805698),personal_website.views.header_html.format_url(sub_subpage),new cljs.core.Keyword(null,"on-click","on-click",1632826543),close__$1], null),sub_subpage], null),personal_website$views$header_html$side_nav_arrow_subpages_$_iter__44830(cljs.core.rest(s__44831__$2)));
} else {
var G__44912 = cljs.core.rest(s__44831__$2);
s__44831__$1 = G__44912;
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
var $ = (function (){var iter__4529__auto__ = (function personal_website$views$header_html$side_nav_$_iter__44840(s__44841){
return (new cljs.core.LazySeq(null,(function (){
var s__44841__$1 = s__44841;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44841__$1);
if(temp__5735__auto__){
var s__44841__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44841__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__44841__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__44843 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__44842 = (0);
while(true){
if((i__44842 < size__4528__auto__)){
var vec__44844 = cljs.core._nth(c__4527__auto__,i__44842);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44844,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44844,(1),null);
cljs.core.chunk_append(b__44843,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-container-2"], null),personal_website.views.header_html.side_nav_skeleton(text,id)))));

var G__44913 = (i__44842 + (1));
i__44842 = G__44913;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44843),personal_website$views$header_html$side_nav_$_iter__44840(cljs.core.chunk_rest(s__44841__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44843),null);
}
} else {
var vec__44847 = cljs.core.first(s__44841__$2);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44847,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44847,(1),null);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-container-2"], null),personal_website.views.header_html.side_nav_skeleton(text,id)))),personal_website$views$header_html$side_nav_$_iter__44840(cljs.core.rest(s__44841__$2)));
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
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"page-header"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"my-name"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"/",new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(personal_website.utils.scroll_to_top,personal_website.views.header_html.close_search)], null),"Rohan Mehta"], null)], null),personal_website.views.header_html.subpages(),personal_website.views.header_html.side_nav(),personal_website.views.header_html.hamburger_button()], null);
});

//# sourceMappingURL=personal_website.views.header_html.js.map
