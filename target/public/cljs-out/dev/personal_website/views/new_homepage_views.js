// Compiled by ClojureScript 1.10.773 {}
goog.provide('personal_website.views.new_homepage_views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('personal_website.db');
goog.require('personal_website.subs');
personal_website.views.new_homepage_views.subpage_data = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["About",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Current Endeavors","Accomplishments","placeholder"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Projects",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Electronics","Synthetic Biology","Computer Science"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Writings",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Blog Posts","Personal Essays","Academic Papers"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Readings",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["All Time Favorites","Book Reviews","placeholder"], null)], null)], null);
personal_website.views.new_homepage_views.tooltips = (function personal_website$views$new_homepage_views$tooltips(sub_subpages){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.cons.call(null,new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"subpage-tooltips"], null),(function (){var iter__4529__auto__ = (function personal_website$views$new_homepage_views$tooltips_$_iter__30083(s__30084){
return (new cljs.core.LazySeq(null,(function (){
var s__30084__$1 = s__30084;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__30084__$1);
if(temp__5457__auto__){
var s__30084__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30084__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__30084__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__30086 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__30085 = (0);
while(true){
if((i__30085 < size__4528__auto__)){
var sub_subpage = cljs.core._nth.call(null,c__4527__auto__,i__30085);
var placeholder_QMARK_ = cljs.core._EQ_.call(null,sub_subpage,"placeholder");
var show_QMARK_ = ((placeholder_QMARK_)?"0%":"100%");
cljs.core.chunk_append.call(null,b__30086,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),show_QMARK_], null),new cljs.core.Keyword(null,"class","class",-2030961996),"subpage-tooltip-elements"], null),sub_subpage], null));

var G__30087 = (i__30085 + (1));
i__30085 = G__30087;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30086),personal_website$views$new_homepage_views$tooltips_$_iter__30083.call(null,cljs.core.chunk_rest.call(null,s__30084__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30086),null);
}
} else {
var sub_subpage = cljs.core.first.call(null,s__30084__$2);
var placeholder_QMARK_ = cljs.core._EQ_.call(null,sub_subpage,"placeholder");
var show_QMARK_ = ((placeholder_QMARK_)?"0%":"100%");
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),show_QMARK_], null),new cljs.core.Keyword(null,"class","class",-2030961996),"subpage-tooltip-elements"], null),sub_subpage], null),personal_website$views$new_homepage_views$tooltips_$_iter__30083.call(null,cljs.core.rest.call(null,s__30084__$2)));
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
personal_website.views.new_homepage_views.subpage_skeleton = (function personal_website$views$new_homepage_views$subpage_skeleton(text,id){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"subpage-container-2",new cljs.core.Keyword(null,"onMouseLeave","onMouseLeave",1446726903),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","subpage-hover","homepage/subpage-hover",-1030285926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,id], null)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"subpage-elements",new cljs.core.Keyword(null,"onMouseEnter","onMouseEnter",-1535281844),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","subpage-hover","homepage/subpage-hover",-1030285926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,id], null)], null));
})], null),text], null),personal_website.views.new_homepage_views.tooltips.call(null,cljs.core.get_in.call(null,personal_website.views.new_homepage_views.subpage_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(id - (1)),(1)], null)))], null);
});
personal_website.views.new_homepage_views.subpages = (function personal_website$views$new_homepage_views$subpages(){
return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477)], null),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.cons.call(null,new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"subpage-container-1"], null),(function (){var iter__4529__auto__ = (function personal_website$views$new_homepage_views$subpages_$_iter__30088(s__30089){
return (new cljs.core.LazySeq(null,(function (){
var s__30089__$1 = s__30089;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__30089__$1);
if(temp__5457__auto__){
var s__30089__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30089__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__30089__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__30091 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__30090 = (0);
while(true){
if((i__30090 < size__4528__auto__)){
var vec__30092 = cljs.core._nth.call(null,c__4527__auto__,i__30090);
var text = cljs.core.nth.call(null,vec__30092,(0),null);
var id = cljs.core.nth.call(null,vec__30092,(1),null);
cljs.core.chunk_append.call(null,b__30091,personal_website.views.new_homepage_views.subpage_skeleton.call(null,text,id));

var G__30098 = (i__30090 + (1));
i__30090 = G__30098;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30091),personal_website$views$new_homepage_views$subpages_$_iter__30088.call(null,cljs.core.chunk_rest.call(null,s__30089__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30091),null);
}
} else {
var vec__30095 = cljs.core.first.call(null,s__30089__$2);
var text = cljs.core.nth.call(null,vec__30095,(0),null);
var id = cljs.core.nth.call(null,vec__30095,(1),null);
return cljs.core.cons.call(null,personal_website.views.new_homepage_views.subpage_skeleton.call(null,text,id),personal_website$views$new_homepage_views$subpages_$_iter__30088.call(null,cljs.core.rest.call(null,s__30089__$2)));
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
personal_website.views.new_homepage_views.hamburger_button = (function personal_website$views$new_homepage_views$hamburger_button(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"ham-menu",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","hamburger-menu","homepage/hamburger-menu",1565742493)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"lines"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"lines"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"lines"], null)], null)], null);
});
personal_website.views.new_homepage_views.side_nav_arrow_subpages = (function personal_website$views$new_homepage_views$side_nav_arrow_subpages(sub_subpages){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.cons.call(null,new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-subpage-container"], null),(function (){var iter__4529__auto__ = (function personal_website$views$new_homepage_views$side_nav_arrow_subpages_$_iter__30099(s__30100){
return (new cljs.core.LazySeq(null,(function (){
var s__30100__$1 = s__30100;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__30100__$1);
if(temp__5457__auto__){
var s__30100__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30100__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__30100__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__30102 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__30101 = (0);
while(true){
if((i__30101 < size__4528__auto__)){
var sub_subpage = cljs.core._nth.call(null,c__4527__auto__,i__30101);
if(cljs.core.not_EQ_.call(null,sub_subpage,"placeholder")){
cljs.core.chunk_append.call(null,b__30102,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-subpage-elements"], null),sub_subpage], null));

var G__30103 = (i__30101 + (1));
i__30101 = G__30103;
continue;
} else {
var G__30104 = (i__30101 + (1));
i__30101 = G__30104;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30102),personal_website$views$new_homepage_views$side_nav_arrow_subpages_$_iter__30099.call(null,cljs.core.chunk_rest.call(null,s__30100__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30102),null);
}
} else {
var sub_subpage = cljs.core.first.call(null,s__30100__$2);
if(cljs.core.not_EQ_.call(null,sub_subpage,"placeholder")){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-subpage-elements"], null),sub_subpage], null),personal_website$views$new_homepage_views$side_nav_arrow_subpages_$_iter__30099.call(null,cljs.core.rest.call(null,s__30100__$2)));
} else {
var G__30105 = cljs.core.rest.call(null,s__30100__$2);
s__30100__$1 = G__30105;
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
personal_website.views.new_homepage_views.side_nav_skeleton = (function personal_website$views$new_homepage_views$side_nav_skeleton(text,id){
var keyworded = cljs.core.keyword.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-elements"], null),text,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-arrow",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","side-nav-arrow","homepage/side-nav-arrow",2077653864),keyworded], null));
})], null)], null)], null),personal_website.views.new_homepage_views.side_nav_arrow_subpages.call(null,cljs.core.get_in.call(null,personal_website.views.new_homepage_views.subpage_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(id - (1)),(1)], null)))], null);
});
personal_website.views.new_homepage_views.side_nav = (function personal_website$views$new_homepage_views$side_nav(){
return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"side-nav-background"], null)], null),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.cons.call(null,new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"side-nav-container-1"], null),(function (){var iter__4529__auto__ = (function personal_website$views$new_homepage_views$side_nav_$_iter__30106(s__30107){
return (new cljs.core.LazySeq(null,(function (){
var s__30107__$1 = s__30107;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__30107__$1);
if(temp__5457__auto__){
var s__30107__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30107__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__30107__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__30109 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__30108 = (0);
while(true){
if((i__30108 < size__4528__auto__)){
var vec__30110 = cljs.core._nth.call(null,c__4527__auto__,i__30108);
var text = cljs.core.nth.call(null,vec__30110,(0),null);
var id = cljs.core.nth.call(null,vec__30110,(1),null);
cljs.core.chunk_append.call(null,b__30109,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.cons.call(null,new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-container-2"], null),personal_website.views.new_homepage_views.side_nav_skeleton.call(null,text,id)))));

var G__30116 = (i__30108 + (1));
i__30108 = G__30116;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30109),personal_website$views$new_homepage_views$side_nav_$_iter__30106.call(null,cljs.core.chunk_rest.call(null,s__30107__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30109),null);
}
} else {
var vec__30113 = cljs.core.first.call(null,s__30107__$2);
var text = cljs.core.nth.call(null,vec__30113,(0),null);
var id = cljs.core.nth.call(null,vec__30113,(1),null);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.cons.call(null,new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-container-2"], null),personal_website.views.new_homepage_views.side_nav_skeleton.call(null,text,id)))),personal_website$views$new_homepage_views$side_nav_$_iter__30106.call(null,cljs.core.rest.call(null,s__30107__$2)));
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
personal_website.views.new_homepage_views.picture = (function personal_website$views$new_homepage_views$picture(){
return null;
});
personal_website.views.new_homepage_views.stuff = (function personal_website$views$new_homepage_views$stuff(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"hello my name is"], null)], null);
});
personal_website.views.new_homepage_views.nav_bar = (function personal_website$views$new_homepage_views$nav_bar(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"my-name"], null),"Rohan Mehta"], null),personal_website.views.new_homepage_views.subpages.call(null),personal_website.views.new_homepage_views.side_nav.call(null),personal_website.views.new_homepage_views.hamburger_button.call(null)], null);
});
personal_website.views.new_homepage_views.content = (function personal_website$views$new_homepage_views$content(){
return personal_website.views.new_homepage_views.stuff.call(null);
});
personal_website.views.new_homepage_views.html = (function personal_website$views$new_homepage_views$html(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),personal_website.views.new_homepage_views.nav_bar.call(null),personal_website.views.new_homepage_views.stuff.call(null)], null);
});

//# sourceMappingURL=new_homepage_views.js.map
