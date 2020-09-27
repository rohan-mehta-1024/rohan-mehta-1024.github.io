goog.provide('personal_website.views.header_html');
personal_website.views.header_html.subpage_data = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["About",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Who I Am","Accomplishments","Current Endeavors","placeholder","placeholder"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Projects",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Engineering","Synthetic Biology","Computer Science","placeholder","placeholder"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Writings",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Poetry","Short Stories","Academic Papers","Personal Essays","Blog Posts"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Readings",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Books & Novels","Articles & Essays","placeholder","placeholder","placeholder"], null)], null)], null);
personal_website.views.header_html.format_url = (function personal_website$views$header_html$format_url(sub_subpage){
var first_el = (function (){var fexpr__36002 = (personal_website.views.header_html.subpage_data.cljs$core$IFn$_invoke$arity$1 ? personal_website.views.header_html.subpage_data.cljs$core$IFn$_invoke$arity$1((0)) : personal_website.views.header_html.subpage_data.call(null,(0)));
return (fexpr__36002.cljs$core$IFn$_invoke$arity$1 ? fexpr__36002.cljs$core$IFn$_invoke$arity$1((1)) : fexpr__36002.call(null,(1)));
})();
var in_first_QMARK_ = cljs.core.some((function (p1__35997_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sub_subpage,p1__35997_SHARP_);
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
personal_website.views.header_html.tooltips = (function personal_website$views$header_html$tooltips(sub_subpages){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"subpage-tooltips"], null),(function (){var iter__4529__auto__ = (function personal_website$views$header_html$tooltips_$_iter__36011(s__36012){
return (new cljs.core.LazySeq(null,(function (){
var s__36012__$1 = s__36012;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36012__$1);
if(temp__5735__auto__){
var s__36012__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36012__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__36012__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__36014 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__36013 = (0);
while(true){
if((i__36013 < size__4528__auto__)){
var sub_subpage = cljs.core._nth(c__4527__auto__,i__36013);
var placeholder_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sub_subpage,"placeholder");
var show_QMARK_ = ((placeholder_QMARK_)?"0%":"100%");
cljs.core.chunk_append(b__36014,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),show_QMARK_], null),new cljs.core.Keyword(null,"href","href",-793805698),personal_website.views.header_html.format_url(sub_subpage),new cljs.core.Keyword(null,"class","class",-2030961996),"subpage-tooltip-elements"], null),sub_subpage], null));

var G__36090 = (i__36013 + (1));
i__36013 = G__36090;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36014),personal_website$views$header_html$tooltips_$_iter__36011(cljs.core.chunk_rest(s__36012__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36014),null);
}
} else {
var sub_subpage = cljs.core.first(s__36012__$2);
var placeholder_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sub_subpage,"placeholder");
var show_QMARK_ = ((placeholder_QMARK_)?"0%":"100%");
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),show_QMARK_], null),new cljs.core.Keyword(null,"href","href",-793805698),personal_website.views.header_html.format_url(sub_subpage),new cljs.core.Keyword(null,"class","class",-2030961996),"subpage-tooltip-elements"], null),sub_subpage], null),personal_website$views$header_html$tooltips_$_iter__36011(cljs.core.rest(s__36012__$2)));
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
var $ = (function (){var iter__4529__auto__ = (function personal_website$views$header_html$subpages_$_iter__36019(s__36020){
return (new cljs.core.LazySeq(null,(function (){
var s__36020__$1 = s__36020;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36020__$1);
if(temp__5735__auto__){
var s__36020__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36020__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__36020__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__36022 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__36021 = (0);
while(true){
if((i__36021 < size__4528__auto__)){
var vec__36024 = cljs.core._nth(c__4527__auto__,i__36021);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36024,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36024,(1),null);
cljs.core.chunk_append(b__36022,personal_website.views.header_html.subpage_skeleton(text,id));

var G__36104 = (i__36021 + (1));
i__36021 = G__36104;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36022),personal_website$views$header_html$subpages_$_iter__36019(cljs.core.chunk_rest(s__36020__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36022),null);
}
} else {
var vec__36028 = cljs.core.first(s__36020__$2);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36028,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36028,(1),null);
return cljs.core.cons(personal_website.views.header_html.subpage_skeleton(text,id),personal_website$views$header_html$subpages_$_iter__36019(cljs.core.rest(s__36020__$2)));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),$__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"/search.svg",new cljs.core.Keyword(null,"id","id",-1388402092),"search-img-1",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
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
var seq__36049_36105 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.Keyword(null,"3","3",2097825370),new cljs.core.Keyword(null,"4","4",-1197948085),new cljs.core.Keyword(null,"5","5",538911032)], null));
var chunk__36051_36106 = null;
var count__36052_36107 = (0);
var i__36053_36108 = (0);
while(true){
if((i__36053_36108 < count__36052_36107)){
var key_36109 = chunk__36051_36106.cljs$core$IIndexed$_nth$arity$2(null,i__36053_36108);
if(cljs.core.truth_((function (){var and__4115__auto__ = (mapping.cljs$core$IFn$_invoke$arity$1 ? mapping.cljs$core$IFn$_invoke$arity$1(key_36109) : mapping.call(null,key_36109));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key_36109,given_idx);
} else {
return and__4115__auto__;
}
})())){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","side-nav-arrow","homepage/side-nav-arrow",2077653864),key_36109], null));


var G__36110 = seq__36049_36105;
var G__36111 = chunk__36051_36106;
var G__36112 = count__36052_36107;
var G__36113 = (i__36053_36108 + (1));
seq__36049_36105 = G__36110;
chunk__36051_36106 = G__36111;
count__36052_36107 = G__36112;
i__36053_36108 = G__36113;
continue;
} else {
var G__36114 = seq__36049_36105;
var G__36115 = chunk__36051_36106;
var G__36116 = count__36052_36107;
var G__36117 = (i__36053_36108 + (1));
seq__36049_36105 = G__36114;
chunk__36051_36106 = G__36115;
count__36052_36107 = G__36116;
i__36053_36108 = G__36117;
continue;
}
} else {
var temp__5735__auto___36118 = cljs.core.seq(seq__36049_36105);
if(temp__5735__auto___36118){
var seq__36049_36119__$1 = temp__5735__auto___36118;
if(cljs.core.chunked_seq_QMARK_(seq__36049_36119__$1)){
var c__4556__auto___36120 = cljs.core.chunk_first(seq__36049_36119__$1);
var G__36121 = cljs.core.chunk_rest(seq__36049_36119__$1);
var G__36122 = c__4556__auto___36120;
var G__36123 = cljs.core.count(c__4556__auto___36120);
var G__36124 = (0);
seq__36049_36105 = G__36121;
chunk__36051_36106 = G__36122;
count__36052_36107 = G__36123;
i__36053_36108 = G__36124;
continue;
} else {
var key_36125 = cljs.core.first(seq__36049_36119__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = (mapping.cljs$core$IFn$_invoke$arity$1 ? mapping.cljs$core$IFn$_invoke$arity$1(key_36125) : mapping.call(null,key_36125));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key_36125,given_idx);
} else {
return and__4115__auto__;
}
})())){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","side-nav-arrow","homepage/side-nav-arrow",2077653864),key_36125], null));


var G__36126 = cljs.core.next(seq__36049_36119__$1);
var G__36127 = null;
var G__36128 = (0);
var G__36129 = (0);
seq__36049_36105 = G__36126;
chunk__36051_36106 = G__36127;
count__36052_36107 = G__36128;
i__36053_36108 = G__36129;
continue;
} else {
var G__36130 = cljs.core.next(seq__36049_36119__$1);
var G__36131 = null;
var G__36132 = (0);
var G__36133 = (0);
seq__36049_36105 = G__36130;
chunk__36051_36106 = G__36131;
count__36052_36107 = G__36132;
i__36053_36108 = G__36133;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-subpage-container"], null),(function (){var iter__4529__auto__ = (function personal_website$views$header_html$side_nav_arrow_subpages_$_iter__36068(s__36069){
return (new cljs.core.LazySeq(null,(function (){
var s__36069__$1 = s__36069;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36069__$1);
if(temp__5735__auto__){
var s__36069__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36069__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__36069__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__36071 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__36070 = (0);
while(true){
if((i__36070 < size__4528__auto__)){
var sub_subpage = cljs.core._nth(c__4527__auto__,i__36070);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sub_subpage,"placeholder")){
cljs.core.chunk_append(b__36071,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-subpage-elements",new cljs.core.Keyword(null,"href","href",-793805698),personal_website.views.header_html.format_url(sub_subpage),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__36070,s__36069__$1,sub_subpage,c__4527__auto__,size__4528__auto__,b__36071,s__36069__$2,temp__5735__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","hamburger-menu","homepage/hamburger-menu",1565742493)], null));
});})(i__36070,s__36069__$1,sub_subpage,c__4527__auto__,size__4528__auto__,b__36071,s__36069__$2,temp__5735__auto__))
], null),sub_subpage], null));

var G__36134 = (i__36070 + (1));
i__36070 = G__36134;
continue;
} else {
var G__36135 = (i__36070 + (1));
i__36070 = G__36135;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36071),personal_website$views$header_html$side_nav_arrow_subpages_$_iter__36068(cljs.core.chunk_rest(s__36069__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36071),null);
}
} else {
var sub_subpage = cljs.core.first(s__36069__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sub_subpage,"placeholder")){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-subpage-elements",new cljs.core.Keyword(null,"href","href",-793805698),personal_website.views.header_html.format_url(sub_subpage),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s__36069__$1,sub_subpage,s__36069__$2,temp__5735__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","hamburger-menu","homepage/hamburger-menu",1565742493)], null));
});})(s__36069__$1,sub_subpage,s__36069__$2,temp__5735__auto__))
], null),sub_subpage], null),personal_website$views$header_html$side_nav_arrow_subpages_$_iter__36068(cljs.core.rest(s__36069__$2)));
} else {
var G__36136 = cljs.core.rest(s__36069__$2);
s__36069__$1 = G__36136;
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-elements"], null),text,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-arrow",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return personal_website.views.header_html.close_all_others(keyworded,pressed_QMARK_);
})], null)], null)], null),personal_website.views.header_html.side_nav_arrow_subpages(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(personal_website.views.header_html.subpage_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(id - (1)),(1)], null)))], null);
});
personal_website.views.header_html.side_nav = (function personal_website$views$header_html$side_nav(){
var $ = (function (){var iter__4529__auto__ = (function personal_website$views$header_html$side_nav_$_iter__36072(s__36073){
return (new cljs.core.LazySeq(null,(function (){
var s__36073__$1 = s__36073;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36073__$1);
if(temp__5735__auto__){
var s__36073__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36073__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__36073__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__36075 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__36074 = (0);
while(true){
if((i__36074 < size__4528__auto__)){
var vec__36076 = cljs.core._nth(c__4527__auto__,i__36074);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36076,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36076,(1),null);
cljs.core.chunk_append(b__36075,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-container-2"], null),personal_website.views.header_html.side_nav_skeleton(text,id)))));

var G__36137 = (i__36074 + (1));
i__36074 = G__36137;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36075),personal_website$views$header_html$side_nav_$_iter__36072(cljs.core.chunk_rest(s__36073__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36075),null);
}
} else {
var vec__36079 = cljs.core.first(s__36073__$2);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36079,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36079,(1),null);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.cons(new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-container-2"], null),personal_website.views.header_html.side_nav_skeleton(text,id)))),personal_website$views$header_html$side_nav_$_iter__36072(cljs.core.rest(s__36073__$2)));
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
var $__$1 = cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/search.svg",new cljs.core.Keyword(null,"id","id",-1388402092),"search-img-2"], null)], null),$);
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
