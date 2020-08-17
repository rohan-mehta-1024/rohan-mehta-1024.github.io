// Compiled by ClojureScript 1.10.773 {}
goog.provide('personal_website.views.new_homepage_views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('personal_website.db');
goog.require('personal_website.subs');
personal_website.views.new_homepage_views.subpage_data = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["About",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Current Endeavors","Accomplishments","placeholder"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Projects",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Electronics","Synthetic Biology","Computer Science"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Writings",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Blog Posts","Personal Essays","Academic Papers"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Readings",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["All Time Favorites","Book Reviews","placeholder"], null)], null)], null);
personal_website.views.new_homepage_views.tooltips = (function personal_website$views$new_homepage_views$tooltips(sub_subpages){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.cons.call(null,new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"subpage-tooltips"], null),(function (){var iter__4529__auto__ = (function personal_website$views$new_homepage_views$tooltips_$_iter__29979(s__29980){
return (new cljs.core.LazySeq(null,(function (){
var s__29980__$1 = s__29980;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__29980__$1);
if(temp__5457__auto__){
var s__29980__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29980__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__29980__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__29982 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__29981 = (0);
while(true){
if((i__29981 < size__4528__auto__)){
var sub_subpage = cljs.core._nth.call(null,c__4527__auto__,i__29981);
var placeholder_QMARK_ = cljs.core._EQ_.call(null,sub_subpage,"placeholder");
var show_QMARK_ = ((placeholder_QMARK_)?"0%":"100%");
cljs.core.chunk_append.call(null,b__29982,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),show_QMARK_], null),new cljs.core.Keyword(null,"class","class",-2030961996),"subpage-tooltip-elements"], null),sub_subpage], null));

var G__29983 = (i__29981 + (1));
i__29981 = G__29983;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29982),personal_website$views$new_homepage_views$tooltips_$_iter__29979.call(null,cljs.core.chunk_rest.call(null,s__29980__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29982),null);
}
} else {
var sub_subpage = cljs.core.first.call(null,s__29980__$2);
var placeholder_QMARK_ = cljs.core._EQ_.call(null,sub_subpage,"placeholder");
var show_QMARK_ = ((placeholder_QMARK_)?"0%":"100%");
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),show_QMARK_], null),new cljs.core.Keyword(null,"class","class",-2030961996),"subpage-tooltip-elements"], null),sub_subpage], null),personal_website$views$new_homepage_views$tooltips_$_iter__29979.call(null,cljs.core.rest.call(null,s__29980__$2)));
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
return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477)], null),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.cons.call(null,new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"subpage-container-1"], null),(function (){var iter__4529__auto__ = (function personal_website$views$new_homepage_views$subpages_$_iter__29984(s__29985){
return (new cljs.core.LazySeq(null,(function (){
var s__29985__$1 = s__29985;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__29985__$1);
if(temp__5457__auto__){
var s__29985__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29985__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__29985__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__29987 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__29986 = (0);
while(true){
if((i__29986 < size__4528__auto__)){
var vec__29988 = cljs.core._nth.call(null,c__4527__auto__,i__29986);
var text = cljs.core.nth.call(null,vec__29988,(0),null);
var id = cljs.core.nth.call(null,vec__29988,(1),null);
cljs.core.chunk_append.call(null,b__29987,personal_website.views.new_homepage_views.subpage_skeleton.call(null,text,id));

var G__29994 = (i__29986 + (1));
i__29986 = G__29994;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29987),personal_website$views$new_homepage_views$subpages_$_iter__29984.call(null,cljs.core.chunk_rest.call(null,s__29985__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29987),null);
}
} else {
var vec__29991 = cljs.core.first.call(null,s__29985__$2);
var text = cljs.core.nth.call(null,vec__29991,(0),null);
var id = cljs.core.nth.call(null,vec__29991,(1),null);
return cljs.core.cons.call(null,personal_website.views.new_homepage_views.subpage_skeleton.call(null,text,id),personal_website$views$new_homepage_views$subpages_$_iter__29984.call(null,cljs.core.rest.call(null,s__29985__$2)));
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
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.cons.call(null,new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-subpage-container"], null),(function (){var iter__4529__auto__ = (function personal_website$views$new_homepage_views$side_nav_arrow_subpages_$_iter__29995(s__29996){
return (new cljs.core.LazySeq(null,(function (){
var s__29996__$1 = s__29996;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__29996__$1);
if(temp__5457__auto__){
var s__29996__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29996__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__29996__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__29998 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__29997 = (0);
while(true){
if((i__29997 < size__4528__auto__)){
var sub_subpage = cljs.core._nth.call(null,c__4527__auto__,i__29997);
if(cljs.core.not_EQ_.call(null,sub_subpage,"placeholder")){
cljs.core.chunk_append.call(null,b__29998,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-subpage-elements"], null),sub_subpage], null));

var G__29999 = (i__29997 + (1));
i__29997 = G__29999;
continue;
} else {
var G__30000 = (i__29997 + (1));
i__29997 = G__30000;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29998),personal_website$views$new_homepage_views$side_nav_arrow_subpages_$_iter__29995.call(null,cljs.core.chunk_rest.call(null,s__29996__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29998),null);
}
} else {
var sub_subpage = cljs.core.first.call(null,s__29996__$2);
if(cljs.core.not_EQ_.call(null,sub_subpage,"placeholder")){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-subpage-elements"], null),sub_subpage], null),personal_website$views$new_homepage_views$side_nav_arrow_subpages_$_iter__29995.call(null,cljs.core.rest.call(null,s__29996__$2)));
} else {
var G__30001 = cljs.core.rest.call(null,s__29996__$2);
s__29996__$1 = G__30001;
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
return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"side-nav-background"], null)], null),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.cons.call(null,new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"side-nav-container-1"], null),(function (){var iter__4529__auto__ = (function personal_website$views$new_homepage_views$side_nav_$_iter__30002(s__30003){
return (new cljs.core.LazySeq(null,(function (){
var s__30003__$1 = s__30003;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__30003__$1);
if(temp__5457__auto__){
var s__30003__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30003__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__30003__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__30005 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__30004 = (0);
while(true){
if((i__30004 < size__4528__auto__)){
var vec__30006 = cljs.core._nth.call(null,c__4527__auto__,i__30004);
var text = cljs.core.nth.call(null,vec__30006,(0),null);
var id = cljs.core.nth.call(null,vec__30006,(1),null);
cljs.core.chunk_append.call(null,b__30005,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.cons.call(null,new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-container-2"], null),personal_website.views.new_homepage_views.side_nav_skeleton.call(null,text,id)))));

var G__30012 = (i__30004 + (1));
i__30004 = G__30012;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30005),personal_website$views$new_homepage_views$side_nav_$_iter__30002.call(null,cljs.core.chunk_rest.call(null,s__30003__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30005),null);
}
} else {
var vec__30009 = cljs.core.first.call(null,s__30003__$2);
var text = cljs.core.nth.call(null,vec__30009,(0),null);
var id = cljs.core.nth.call(null,vec__30009,(1),null);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.cons.call(null,new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"side-nav-container-2"], null),personal_website.views.new_homepage_views.side_nav_skeleton.call(null,text,id)))),personal_website$views$new_homepage_views$side_nav_$_iter__30002.call(null,cljs.core.rest.call(null,s__30003__$2)));
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
personal_website.views.new_homepage_views.stuff = (function personal_website$views$new_homepage_views$stuff(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"h"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"e"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"l"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"l"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"o"], null)], null);
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
