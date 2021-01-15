goog.provide('personal_website.views.header_html');
personal_website.views.header_html.subpage_data = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["About",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Who I Am","Accomplishments","placeholder","placeholder","placeholder","placeholder"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Projects",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Synthetic Biology","Computer Science","placeholder","placeholder","placeholder","placeholder"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Writings",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Poetry","Short Stories","Academic Papers","Personal Essays","Blog Posts","placeholder"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Readings",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Books","Articles & Essays","placeholder","placeholder","placeholder","placeholder"], null)], null)], null);
personal_website.views.header_html.format_url = (function personal_website$views$header_html$format_url(sub_subpage){
var first_el = (function (){var fexpr__44772 = (personal_website.views.header_html.subpage_data.cljs$core$IFn$_invoke$arity$1 ? personal_website.views.header_html.subpage_data.cljs$core$IFn$_invoke$arity$1((0)) : personal_website.views.header_html.subpage_data.call(null,(0)));
return (fexpr__44772.cljs$core$IFn$_invoke$arity$1 ? fexpr__44772.cljs$core$IFn$_invoke$arity$1((1)) : fexpr__44772.call(null,(1)));
})();
var in_first_QMARK_ = cljs.core.some((function (p1__44771_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sub_subpage,p1__44771_SHARP_);
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"subpage-tooltips"], null),(function (){var iter__4529__auto__ = (function personal_website$views$header_html$tooltips_$_iter__44773(s__44774){
return (new cljs.core.LazySeq(null,(function (){
var s__44774__$1 = s__44774;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44774__$1);
if(temp__5735__auto__){
var s__44774__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44774__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__44774__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__44776 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__44775 = (0);
while(true){
if((i__44775 < size__4528__auto__)){
var sub_subpage = cljs.core._nth(c__4527__auto__,i__44775);
var placeholder_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sub_subpage,"placeholder");
var show_QMARK_ = ((placeholder_QMARK_)?"0%":"100%");
var el = ((placeholder_QMARK_)?new cljs.core.Keyword(null,"div","div",1057191632):new cljs.core.Keyword(null,"a","a",-2123407586));
var class$ = ((placeholder_QMARK_)?"":"subpage-tooltip-elements");
var link = ((placeholder_QMARK_)?"":personal_website.views.header_html.format_url(sub_subpage));
cljs.core.chunk_append(b__44776,personal_website.views.header_html.tooltips_element(el,show_QMARK_,class$,sub_subpage));

var G__44846 = (i__44775 + (1));
i__44775 = G__44846;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44776),personal_website$views$header_html$tooltips_$_iter__44773(cljs.core.chunk_rest(s__44774__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44776),null);
}
} else {
var sub_subpage = cljs.core.first(s__44774__$2);
var placeholder_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sub_subpage,"placeholder");
var show_QMARK_ = ((placeholder_QMARK_)?"0%":"100%");
var el = ((placeholder_QMARK_)?new cljs.core.Keyword(null,"div","div",1057191632):new cljs.core.Keyword(null,"a","a",-2123407586));
var class$ = ((placeholder_QMARK_)?"":"subpage-tooltip-elements");
var link = ((placeholder_QMARK_)?"":personal_website.views.header_html.format_url(sub_subpage));
return cljs.core.cons(personal_website.views.header_html.tooltips_element(el,show_QMARK_,class$,sub_subpage),personal_website$views$header_html$tooltips_$_iter__44773(cljs.core.rest(s__44774__$2)));
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
var $ = (function (){var iter__4529__auto__ = (function personal_website$views$header_html$subpages_$_iter__44802(s__44803){
return (new cljs.core.LazySeq(null,(function (){
var s__44803__$1 = s__44803;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44803__$1);
if(temp__5735__auto__){
var s__44803__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44803__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__44803__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__44805 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__44804 = (0);
while(true){
if((i__44804 < size__4528__auto__)){
var vec__44806 = cljs.core._nth(c__4527__auto__,i__44804);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44806,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44806,(1),null);
cljs.core.chunk_append(b__44805,personal_website.views.header_html.subpage_skeleton(text,id));

var G__44851 = (i__44804 + (1));
i__44804 = G__44851;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44805),personal_website$views$header_html$subpages_$_iter__44802(cljs.core.chunk_rest(s__44803__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44805),null);
}
} else {
var vec__44809 = cljs.core.first(s__44803__$2);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44809,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44809,(1),null);
return cljs.core.cons(personal_website.views.header_html.subpage_skeleton(text,id),personal_website$views$header_html$subpages_$_iter__44802(cljs.core.rest(s__44803__$2)));
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
var seq__44821_44857 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.Keyword(null,"3","3",2097825370),new cljs.core.Keyword(null,"4","4",-1197948085),new cljs.core.Keyword(null,"5","5",538911032)], null));
var chunk__44823_44858 = null;
var count__44824_44859 = (0);
var i__44825_44860 = (0);
while(true){
if((i__44825_44860 < count__44824_44859)){
var key_44861 = chunk__44823_44858.cljs$core$IIndexed$_nth$arity$2(null,i__44825_44860);
if(cljs.core.truth_((function (){var and__4115__auto__ = (mapping.cljs$core$IFn$_invoke$arity$1 ? mapping.cljs$core$IFn$_invoke$arity$1(key_44861) : mapping.call(null,key_44861));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key_44861,given_idx);
} else {
return and__4115__auto__;
}
})())){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","side-nav-arrow","homepage/side-nav-arrow",2077653864),key_44861], null));


var G__44862 = seq__44821_44857;
var G__44863 = chunk__44823_44858;
var G__44864 = count__44824_44859;
var G__44865 = (i__44825_44860 + (1));
seq__44821_44857 = G__44862;
chunk__44823_44858 = G__44863;
count__44824_44859 = G__44864;
i__44825_44860 = G__44865;
continue;
} else {
var G__44866 = seq__44821_44857;
var G__44867 = chunk__44823_44858;
var G__44868 = count__44824_44859;
var G__44869 = (i__44825_44860 + (1));
seq__44821_44857 = G__44866;
chunk__44823_44858 = G__44867;
count__44824_44859 = G__44868;
i__44825_44860 = G__44869;
continue;
}
} else {
var temp__5735__auto___44870 = cljs.core.seq(seq__44821_44857);
if(temp__5735__auto___44870){
var seq__44821_44871__$1 = temp__5735__auto___44870;
if(cljs.core.chunked_seq_QMARK_(seq__44821_44871__$1)){
var c__4556__auto___44872 = cljs.core.chunk_first(seq__44821_44871__$1);
var G__44873 = cljs.core.chunk_rest(seq__44821_44871__$1);
var G__44874 = c__4556__auto___44872;
var G__44875 = cljs.core.count(c__4556__auto___44872);
var G__44876 = (0);
seq__44821_44857 = G__44873;
chunk__44823_44858 = G__44874;
count__44824_44859 = G__44875;
i__44825_44860 = G__44876;
continue;
} else {
var key_44877 = cljs.core.first(seq__44821_44871__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = (mapping.cljs$core$IFn$_invoke$arity$1 ? mapping.cljs$core$IFn$_invoke$arity$1(key_44877) : mapping.call(null,key_44877));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key_44877,given_idx);
} else {
return and__4115__auto__;
}
})())){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","side-nav-arrow","homepage/side-nav-arrow",2077653864),key_44877], null));


var G__44878 = cljs.core.next(seq__44821_44871__$1);
var G__44879 = null;
var G__44880 = (0);
var G__44881 = (0);
seq__44821_44857 = G__44878;
chunk__44823_44858 = G__44879;
count__44824_44859 = G__44880;
i__44825_44860 = G__44881;
continue;
} else {
var G__44882 = cljs.core.next(seq__44821_44871__$1);
var G__44883 = null;
var G__44884 = (0);
var G__44885 = (0);
seq__44821_44857 = G__44882;
chunk__44823_44858 = G__44883;
count__44824_44859 = G__44884;
i__44825_44860 = G__44885;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-subpage-container"], null),(function (){var iter__4529__auto__ = (function personal_website$views$header_html$side_nav_arrow_subpages_$_iter__44828(s__44829){
return (new cljs.core.LazySeq(null,(function (){
var s__44829__$1 = s__44829;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44829__$1);
if(temp__5735__auto__){
var s__44829__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44829__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__44829__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__44831 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__44830 = (0);
while(true){
if((i__44830 < size__4528__auto__)){
var sub_subpage = cljs.core._nth(c__4527__auto__,i__44830);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sub_subpage,"placeholder")){
cljs.core.chunk_append(b__44831,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-subpage-elements",new cljs.core.Keyword(null,"href","href",-793805698),personal_website.views.header_html.format_url(sub_subpage),new cljs.core.Keyword(null,"on-click","on-click",1632826543),close__$1], null),sub_subpage], null));

var G__44897 = (i__44830 + (1));
i__44830 = G__44897;
continue;
} else {
var G__44898 = (i__44830 + (1));
i__44830 = G__44898;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44831),personal_website$views$header_html$side_nav_arrow_subpages_$_iter__44828(cljs.core.chunk_rest(s__44829__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44831),null);
}
} else {
var sub_subpage = cljs.core.first(s__44829__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sub_subpage,"placeholder")){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-subpage-elements",new cljs.core.Keyword(null,"href","href",-793805698),personal_website.views.header_html.format_url(sub_subpage),new cljs.core.Keyword(null,"on-click","on-click",1632826543),close__$1], null),sub_subpage], null),personal_website$views$header_html$side_nav_arrow_subpages_$_iter__44828(cljs.core.rest(s__44829__$2)));
} else {
var G__44899 = cljs.core.rest(s__44829__$2);
s__44829__$1 = G__44899;
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
var $ = (function (){var iter__4529__auto__ = (function personal_website$views$header_html$side_nav_$_iter__44832(s__44833){
return (new cljs.core.LazySeq(null,(function (){
var s__44833__$1 = s__44833;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44833__$1);
if(temp__5735__auto__){
var s__44833__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44833__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__44833__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__44835 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__44834 = (0);
while(true){
if((i__44834 < size__4528__auto__)){
var vec__44836 = cljs.core._nth(c__4527__auto__,i__44834);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44836,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44836,(1),null);
cljs.core.chunk_append(b__44835,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-container-2"], null),personal_website.views.header_html.side_nav_skeleton(text,id)))));

var G__44900 = (i__44834 + (1));
i__44834 = G__44900;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44835),personal_website$views$header_html$side_nav_$_iter__44832(cljs.core.chunk_rest(s__44833__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44835),null);
}
} else {
var vec__44839 = cljs.core.first(s__44833__$2);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44839,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44839,(1),null);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-container-2"], null),personal_website.views.header_html.side_nav_skeleton(text,id)))),personal_website$views$header_html$side_nav_$_iter__44832(cljs.core.rest(s__44833__$2)));
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
