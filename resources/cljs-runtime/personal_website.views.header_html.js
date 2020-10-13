goog.provide('personal_website.views.header_html');
personal_website.views.header_html.subpage_data = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["About",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Who I Am","Accomplishments","placeholder","placeholder","placeholder","placeholder"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Projects",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Engineering","Synthetic Biology","Computer Science","placeholder","placeholder","placeholder"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Writings",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Poetry","Short Stories","Academic Papers","Personal Essays","Blog Posts","placeholder"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Readings",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Books & Novels","Articles & Essays","placeholder","placeholder","placeholder","placeholder"], null)], null)], null);
personal_website.views.header_html.format_url = (function personal_website$views$header_html$format_url(sub_subpage){
var first_el = (function (){var fexpr__33642 = (personal_website.views.header_html.subpage_data.cljs$core$IFn$_invoke$arity$1 ? personal_website.views.header_html.subpage_data.cljs$core$IFn$_invoke$arity$1((0)) : personal_website.views.header_html.subpage_data.call(null,(0)));
return (fexpr__33642.cljs$core$IFn$_invoke$arity$1 ? fexpr__33642.cljs$core$IFn$_invoke$arity$1((1)) : fexpr__33642.call(null,(1)));
})();
var in_first_QMARK_ = cljs.core.some((function (p1__33641_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sub_subpage,p1__33641_SHARP_);
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
personal_website.views.header_html.scroll_to_top = (function personal_website$views$header_html$scroll_to_top(){
var js_obj = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0)], null));
var scroll = (function (){
return window.scrollTo(js_obj);
});
return setTimeout(scroll,(120));
});
personal_website.views.header_html.tooltips = (function personal_website$views$header_html$tooltips(sub_subpages){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"subpage-tooltips"], null),(function (){var iter__4529__auto__ = (function personal_website$views$header_html$tooltips_$_iter__33643(s__33644){
return (new cljs.core.LazySeq(null,(function (){
var s__33644__$1 = s__33644;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__33644__$1);
if(temp__5735__auto__){
var s__33644__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33644__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__33644__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__33646 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__33645 = (0);
while(true){
if((i__33645 < size__4528__auto__)){
var sub_subpage = cljs.core._nth(c__4527__auto__,i__33645);
var placeholder_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sub_subpage,"placeholder");
var show_QMARK_ = ((placeholder_QMARK_)?"0%":"100%");
var el = ((placeholder_QMARK_)?new cljs.core.Keyword(null,"div","div",1057191632):new cljs.core.Keyword(null,"a","a",-2123407586));
var class$ = ((placeholder_QMARK_)?"":"subpage-tooltip-elements");
var link = ((placeholder_QMARK_)?"":personal_website.views.header_html.format_url(sub_subpage));
cljs.core.chunk_append(b__33646,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),show_QMARK_], null),new cljs.core.Keyword(null,"href","href",-793805698),personal_website.views.header_html.format_url(sub_subpage),new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),sub_subpage], null));

var G__33683 = (i__33645 + (1));
i__33645 = G__33683;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33646),personal_website$views$header_html$tooltips_$_iter__33643(cljs.core.chunk_rest(s__33644__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33646),null);
}
} else {
var sub_subpage = cljs.core.first(s__33644__$2);
var placeholder_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sub_subpage,"placeholder");
var show_QMARK_ = ((placeholder_QMARK_)?"0%":"100%");
var el = ((placeholder_QMARK_)?new cljs.core.Keyword(null,"div","div",1057191632):new cljs.core.Keyword(null,"a","a",-2123407586));
var class$ = ((placeholder_QMARK_)?"":"subpage-tooltip-elements");
var link = ((placeholder_QMARK_)?"":personal_website.views.header_html.format_url(sub_subpage));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [el,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),show_QMARK_], null),new cljs.core.Keyword(null,"href","href",-793805698),personal_website.views.header_html.format_url(sub_subpage),new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),sub_subpage], null),personal_website$views$header_html$tooltips_$_iter__33643(cljs.core.rest(s__33644__$2)));
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
var $ = (function (){var iter__4529__auto__ = (function personal_website$views$header_html$subpages_$_iter__33647(s__33648){
return (new cljs.core.LazySeq(null,(function (){
var s__33648__$1 = s__33648;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__33648__$1);
if(temp__5735__auto__){
var s__33648__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33648__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__33648__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__33650 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__33649 = (0);
while(true){
if((i__33649 < size__4528__auto__)){
var vec__33651 = cljs.core._nth(c__4527__auto__,i__33649);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33651,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33651,(1),null);
cljs.core.chunk_append(b__33650,personal_website.views.header_html.subpage_skeleton(text,id));

var G__33684 = (i__33649 + (1));
i__33649 = G__33684;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33650),personal_website$views$header_html$subpages_$_iter__33647(cljs.core.chunk_rest(s__33648__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33650),null);
}
} else {
var vec__33654 = cljs.core.first(s__33648__$2);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33654,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33654,(1),null);
return cljs.core.cons(personal_website.views.header_html.subpage_skeleton(text,id),personal_website$views$header_html$subpages_$_iter__33647(cljs.core.rest(s__33648__$2)));
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
var seq__33657_33685 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.Keyword(null,"3","3",2097825370),new cljs.core.Keyword(null,"4","4",-1197948085),new cljs.core.Keyword(null,"5","5",538911032)], null));
var chunk__33659_33686 = null;
var count__33660_33687 = (0);
var i__33661_33688 = (0);
while(true){
if((i__33661_33688 < count__33660_33687)){
var key_33689 = chunk__33659_33686.cljs$core$IIndexed$_nth$arity$2(null,i__33661_33688);
if(cljs.core.truth_((function (){var and__4115__auto__ = (mapping.cljs$core$IFn$_invoke$arity$1 ? mapping.cljs$core$IFn$_invoke$arity$1(key_33689) : mapping.call(null,key_33689));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key_33689,given_idx);
} else {
return and__4115__auto__;
}
})())){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","side-nav-arrow","homepage/side-nav-arrow",2077653864),key_33689], null));


var G__33690 = seq__33657_33685;
var G__33691 = chunk__33659_33686;
var G__33692 = count__33660_33687;
var G__33693 = (i__33661_33688 + (1));
seq__33657_33685 = G__33690;
chunk__33659_33686 = G__33691;
count__33660_33687 = G__33692;
i__33661_33688 = G__33693;
continue;
} else {
var G__33694 = seq__33657_33685;
var G__33695 = chunk__33659_33686;
var G__33696 = count__33660_33687;
var G__33697 = (i__33661_33688 + (1));
seq__33657_33685 = G__33694;
chunk__33659_33686 = G__33695;
count__33660_33687 = G__33696;
i__33661_33688 = G__33697;
continue;
}
} else {
var temp__5735__auto___33698 = cljs.core.seq(seq__33657_33685);
if(temp__5735__auto___33698){
var seq__33657_33699__$1 = temp__5735__auto___33698;
if(cljs.core.chunked_seq_QMARK_(seq__33657_33699__$1)){
var c__4556__auto___33700 = cljs.core.chunk_first(seq__33657_33699__$1);
var G__33701 = cljs.core.chunk_rest(seq__33657_33699__$1);
var G__33702 = c__4556__auto___33700;
var G__33703 = cljs.core.count(c__4556__auto___33700);
var G__33704 = (0);
seq__33657_33685 = G__33701;
chunk__33659_33686 = G__33702;
count__33660_33687 = G__33703;
i__33661_33688 = G__33704;
continue;
} else {
var key_33705 = cljs.core.first(seq__33657_33699__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = (mapping.cljs$core$IFn$_invoke$arity$1 ? mapping.cljs$core$IFn$_invoke$arity$1(key_33705) : mapping.call(null,key_33705));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key_33705,given_idx);
} else {
return and__4115__auto__;
}
})())){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","side-nav-arrow","homepage/side-nav-arrow",2077653864),key_33705], null));


var G__33706 = cljs.core.next(seq__33657_33699__$1);
var G__33707 = null;
var G__33708 = (0);
var G__33709 = (0);
seq__33657_33685 = G__33706;
chunk__33659_33686 = G__33707;
count__33660_33687 = G__33708;
i__33661_33688 = G__33709;
continue;
} else {
var G__33710 = cljs.core.next(seq__33657_33699__$1);
var G__33711 = null;
var G__33712 = (0);
var G__33713 = (0);
seq__33657_33685 = G__33710;
chunk__33659_33686 = G__33711;
count__33660_33687 = G__33712;
i__33661_33688 = G__33713;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-subpage-container"], null),(function (){var iter__4529__auto__ = (function personal_website$views$header_html$side_nav_arrow_subpages_$_iter__33663(s__33664){
return (new cljs.core.LazySeq(null,(function (){
var s__33664__$1 = s__33664;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__33664__$1);
if(temp__5735__auto__){
var s__33664__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33664__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__33664__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__33666 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__33665 = (0);
while(true){
if((i__33665 < size__4528__auto__)){
var sub_subpage = cljs.core._nth(c__4527__auto__,i__33665);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sub_subpage,"placeholder")){
cljs.core.chunk_append(b__33666,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-subpage-elements",new cljs.core.Keyword(null,"href","href",-793805698),personal_website.views.header_html.format_url(sub_subpage),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__33665,s__33664__$1,sub_subpage,c__4527__auto__,size__4528__auto__,b__33666,s__33664__$2,temp__5735__auto__){
return (function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","hamburger-menu","homepage/hamburger-menu",1565742493)], null));

return personal_website.views.header_html.scroll_to_top();
});})(i__33665,s__33664__$1,sub_subpage,c__4527__auto__,size__4528__auto__,b__33666,s__33664__$2,temp__5735__auto__))
], null),sub_subpage], null));

var G__33714 = (i__33665 + (1));
i__33665 = G__33714;
continue;
} else {
var G__33715 = (i__33665 + (1));
i__33665 = G__33715;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33666),personal_website$views$header_html$side_nav_arrow_subpages_$_iter__33663(cljs.core.chunk_rest(s__33664__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33666),null);
}
} else {
var sub_subpage = cljs.core.first(s__33664__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sub_subpage,"placeholder")){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-subpage-elements",new cljs.core.Keyword(null,"href","href",-793805698),personal_website.views.header_html.format_url(sub_subpage),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s__33664__$1,sub_subpage,s__33664__$2,temp__5735__auto__){
return (function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","hamburger-menu","homepage/hamburger-menu",1565742493)], null));

return personal_website.views.header_html.scroll_to_top();
});})(s__33664__$1,sub_subpage,s__33664__$2,temp__5735__auto__))
], null),sub_subpage], null),personal_website$views$header_html$side_nav_arrow_subpages_$_iter__33663(cljs.core.rest(s__33664__$2)));
} else {
var G__33716 = cljs.core.rest(s__33664__$2);
s__33664__$1 = G__33716;
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
var $ = (function (){var iter__4529__auto__ = (function personal_website$views$header_html$side_nav_$_iter__33667(s__33668){
return (new cljs.core.LazySeq(null,(function (){
var s__33668__$1 = s__33668;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__33668__$1);
if(temp__5735__auto__){
var s__33668__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33668__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__33668__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__33670 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__33669 = (0);
while(true){
if((i__33669 < size__4528__auto__)){
var vec__33671 = cljs.core._nth(c__4527__auto__,i__33669);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33671,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33671,(1),null);
cljs.core.chunk_append(b__33670,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-container-2"], null),personal_website.views.header_html.side_nav_skeleton(text,id)))));

var G__33717 = (i__33669 + (1));
i__33669 = G__33717;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33670),personal_website$views$header_html$side_nav_$_iter__33667(cljs.core.chunk_rest(s__33668__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33670),null);
}
} else {
var vec__33674 = cljs.core.first(s__33668__$2);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33674,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33674,(1),null);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-container-2"], null),personal_website.views.header_html.side_nav_skeleton(text,id)))),personal_website$views$header_html$side_nav_$_iter__33667(cljs.core.rest(s__33668__$2)));
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
