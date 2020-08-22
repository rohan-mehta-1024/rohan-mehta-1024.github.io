// Compiled by ClojureScript 1.10.773 {}
goog.provide('personal_website.views.homepage_views.nav_bar');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('personal_website.db');
goog.require('personal_website.subs');
personal_website.views.homepage_views.nav_bar.subpage_data = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["About",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Current Endeavors","Accomplishments","placeholder"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Projects",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Electronics","Synthetic Biology","Computer Science"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Writings",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Blog Posts","Personal Essays","Academic Papers"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Readings",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["All Time Favorites","Book Reviews","placeholder"], null)], null)], null);
personal_website.views.homepage_views.nav_bar.tooltips = (function personal_website$views$homepage_views$nav_bar$tooltips(sub_subpages){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.cons.call(null,new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"subpage-tooltips"], null),(function (){var iter__4529__auto__ = (function personal_website$views$homepage_views$nav_bar$tooltips_$_iter__15007(s__15008){
return (new cljs.core.LazySeq(null,(function (){
var s__15008__$1 = s__15008;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15008__$1);
if(temp__5457__auto__){
var s__15008__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15008__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__15008__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__15010 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__15009 = (0);
while(true){
if((i__15009 < size__4528__auto__)){
var sub_subpage = cljs.core._nth.call(null,c__4527__auto__,i__15009);
var placeholder_QMARK_ = cljs.core._EQ_.call(null,sub_subpage,"placeholder");
var show_QMARK_ = ((placeholder_QMARK_)?"0%":"100%");
cljs.core.chunk_append.call(null,b__15010,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),show_QMARK_], null),new cljs.core.Keyword(null,"class","class",-2030961996),"subpage-tooltip-elements"], null),sub_subpage], null));

var G__15011 = (i__15009 + (1));
i__15009 = G__15011;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15010),personal_website$views$homepage_views$nav_bar$tooltips_$_iter__15007.call(null,cljs.core.chunk_rest.call(null,s__15008__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15010),null);
}
} else {
var sub_subpage = cljs.core.first.call(null,s__15008__$2);
var placeholder_QMARK_ = cljs.core._EQ_.call(null,sub_subpage,"placeholder");
var show_QMARK_ = ((placeholder_QMARK_)?"0%":"100%");
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),show_QMARK_], null),new cljs.core.Keyword(null,"class","class",-2030961996),"subpage-tooltip-elements"], null),sub_subpage], null),personal_website$views$homepage_views$nav_bar$tooltips_$_iter__15007.call(null,cljs.core.rest.call(null,s__15008__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,sub_subpages);
})())));
});
personal_website.views.homepage_views.nav_bar.subpage_skeleton = (function personal_website$views$homepage_views$nav_bar$subpage_skeleton(text,id){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"subpage-container-2",new cljs.core.Keyword(null,"onMouseLeave","onMouseLeave",1446726903),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","subpage-hover","homepage/subpage-hover",-1030285926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,id], null)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"subpage-elements",new cljs.core.Keyword(null,"onMouseEnter","onMouseEnter",-1535281844),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","subpage-hover","homepage/subpage-hover",-1030285926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,id], null)], null));
})], null),text], null),personal_website.views.homepage_views.nav_bar.tooltips.call(null,cljs.core.get_in.call(null,personal_website.views.homepage_views.nav_bar.subpage_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(id - (1)),(1)], null)))], null);
});
personal_website.views.homepage_views.nav_bar.subpages = (function personal_website$views$homepage_views$nav_bar$subpages(){
return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477)], null),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.cons.call(null,new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"subpage-container-1"], null),(function (){var iter__4529__auto__ = (function personal_website$views$homepage_views$nav_bar$subpages_$_iter__15012(s__15013){
return (new cljs.core.LazySeq(null,(function (){
var s__15013__$1 = s__15013;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15013__$1);
if(temp__5457__auto__){
var s__15013__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15013__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__15013__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__15015 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__15014 = (0);
while(true){
if((i__15014 < size__4528__auto__)){
var vec__15016 = cljs.core._nth.call(null,c__4527__auto__,i__15014);
var text = cljs.core.nth.call(null,vec__15016,(0),null);
var id = cljs.core.nth.call(null,vec__15016,(1),null);
cljs.core.chunk_append.call(null,b__15015,personal_website.views.homepage_views.nav_bar.subpage_skeleton.call(null,text,id));

var G__15022 = (i__15014 + (1));
i__15014 = G__15022;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15015),personal_website$views$homepage_views$nav_bar$subpages_$_iter__15012.call(null,cljs.core.chunk_rest.call(null,s__15013__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15015),null);
}
} else {
var vec__15019 = cljs.core.first.call(null,s__15013__$2);
var text = cljs.core.nth.call(null,vec__15019,(0),null);
var id = cljs.core.nth.call(null,vec__15019,(1),null);
return cljs.core.cons.call(null,personal_website.views.homepage_views.nav_bar.subpage_skeleton.call(null,text,id),personal_website$views$homepage_views$nav_bar$subpages_$_iter__15012.call(null,cljs.core.rest.call(null,s__15013__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["About",(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Projects",(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Writings",(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Readings",(4)], null)], null));
})()))));
});
personal_website.views.homepage_views.nav_bar.hamburger_button = (function personal_website$views$homepage_views$nav_bar$hamburger_button(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"ham-menu",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","hamburger-menu","homepage/hamburger-menu",1565742493)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"lines"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"lines"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"lines"], null)], null)], null);
});
personal_website.views.homepage_views.nav_bar.side_nav_arrow_subpages = (function personal_website$views$homepage_views$nav_bar$side_nav_arrow_subpages(sub_subpages){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.cons.call(null,new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-subpage-container"], null),(function (){var iter__4529__auto__ = (function personal_website$views$homepage_views$nav_bar$side_nav_arrow_subpages_$_iter__15023(s__15024){
return (new cljs.core.LazySeq(null,(function (){
var s__15024__$1 = s__15024;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15024__$1);
if(temp__5457__auto__){
var s__15024__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15024__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__15024__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__15026 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__15025 = (0);
while(true){
if((i__15025 < size__4528__auto__)){
var sub_subpage = cljs.core._nth.call(null,c__4527__auto__,i__15025);
if(cljs.core.not_EQ_.call(null,sub_subpage,"placeholder")){
cljs.core.chunk_append.call(null,b__15026,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-subpage-elements"], null),sub_subpage], null));

var G__15027 = (i__15025 + (1));
i__15025 = G__15027;
continue;
} else {
var G__15028 = (i__15025 + (1));
i__15025 = G__15028;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15026),personal_website$views$homepage_views$nav_bar$side_nav_arrow_subpages_$_iter__15023.call(null,cljs.core.chunk_rest.call(null,s__15024__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15026),null);
}
} else {
var sub_subpage = cljs.core.first.call(null,s__15024__$2);
if(cljs.core.not_EQ_.call(null,sub_subpage,"placeholder")){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-subpage-elements"], null),sub_subpage], null),personal_website$views$homepage_views$nav_bar$side_nav_arrow_subpages_$_iter__15023.call(null,cljs.core.rest.call(null,s__15024__$2)));
} else {
var G__15029 = cljs.core.rest.call(null,s__15024__$2);
s__15024__$1 = G__15029;
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
return iter__4529__auto__.call(null,sub_subpages);
})())));
});
personal_website.views.homepage_views.nav_bar.side_nav_skeleton = (function personal_website$views$homepage_views$nav_bar$side_nav_skeleton(text,id){
var keyworded = cljs.core.keyword.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-elements"], null),text,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-arrow",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","side-nav-arrow","homepage/side-nav-arrow",2077653864),keyworded], null));
})], null)], null)], null),personal_website.views.homepage_views.nav_bar.side_nav_arrow_subpages.call(null,cljs.core.get_in.call(null,personal_website.views.homepage_views.nav_bar.subpage_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(id - (1)),(1)], null)))], null);
});
personal_website.views.homepage_views.nav_bar.side_nav = (function personal_website$views$homepage_views$nav_bar$side_nav(){
return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"side-nav-background"], null)], null),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.cons.call(null,new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"side-nav-container-1"], null),(function (){var iter__4529__auto__ = (function personal_website$views$homepage_views$nav_bar$side_nav_$_iter__15030(s__15031){
return (new cljs.core.LazySeq(null,(function (){
var s__15031__$1 = s__15031;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15031__$1);
if(temp__5457__auto__){
var s__15031__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15031__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__15031__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__15033 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__15032 = (0);
while(true){
if((i__15032 < size__4528__auto__)){
var vec__15034 = cljs.core._nth.call(null,c__4527__auto__,i__15032);
var text = cljs.core.nth.call(null,vec__15034,(0),null);
var id = cljs.core.nth.call(null,vec__15034,(1),null);
cljs.core.chunk_append.call(null,b__15033,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.cons.call(null,new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-container-2"], null),personal_website.views.homepage_views.nav_bar.side_nav_skeleton.call(null,text,id)))));

var G__15040 = (i__15032 + (1));
i__15032 = G__15040;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15033),personal_website$views$homepage_views$nav_bar$side_nav_$_iter__15030.call(null,cljs.core.chunk_rest.call(null,s__15031__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15033),null);
}
} else {
var vec__15037 = cljs.core.first.call(null,s__15031__$2);
var text = cljs.core.nth.call(null,vec__15037,(0),null);
var id = cljs.core.nth.call(null,vec__15037,(1),null);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.cons.call(null,new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-container-2"], null),personal_website.views.homepage_views.nav_bar.side_nav_skeleton.call(null,text,id)))),personal_website$views$homepage_views$nav_bar$side_nav_$_iter__15030.call(null,cljs.core.rest.call(null,s__15031__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["About",(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Projects",(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Writings",(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Readings",(4)], null)], null));
})()))));
});
personal_website.views.homepage_views.nav_bar.nav_bar = (function personal_website$views$homepage_views$nav_bar$nav_bar(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"my-name"], null),"Rohan Mehta"], null),personal_website.views.homepage_views.nav_bar.subpages.call(null),personal_website.views.homepage_views.nav_bar.side_nav.call(null),personal_website.views.homepage_views.nav_bar.hamburger_button.call(null)], null);
});

//# sourceMappingURL=nav_bar.js.map
