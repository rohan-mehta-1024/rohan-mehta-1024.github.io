// Compiled by ClojureScript 1.10.773 {}
goog.provide('personal_website.styles.homepage_styles.side_nav');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('garden.selectors');
goog.require('garden.units');
goog.require('personal_website.db');
personal_website.styles.homepage_styles.side_nav.side_nav_elements = garden.selectors.selector.call(null,".side-nav-elements");
personal_website.styles.homepage_styles.side_nav.side_nav_arrow = garden.selectors.selector.call(null,".side-nav-arrow");
personal_website.styles.homepage_styles.side_nav.side_nav_container_2 = garden.selectors.selector.call(null,".side-nav-container-2");
personal_website.styles.homepage_styles.side_nav.side_nav_subpage_container = garden.selectors.selector.call(null,".side-nav-subpage-container");
personal_website.styles.homepage_styles.side_nav.side_nav_subpage_elements = garden.selectors.selector.call(null,".side-nav-subpage-elements");
personal_website.styles.homepage_styles.side_nav.side_nav_background = (function personal_website$styles$homepage_styles$side_nav$side_nav_background(){
var clicked_QMARK_ = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","hamburger-menu","homepage/hamburger-menu",1565742493)], null)));
var width = (cljs.core.truth_(clicked_QMARK_)?"35%":"0%");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#side-nav-background","#side-nav-background",-1530598116),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),"#E8E8E8",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"right","right",-452581833),garden.units.px.call(null,(0)),new cljs.core.Keyword(null,"transition","transition",765692007),"width 0.75s ease-in-out"], null)], null);
});
personal_website.styles.homepage_styles.side_nav.side_nav_container_1 = (function personal_website$styles$homepage_styles$side_nav$side_nav_container_1(){
var clicked_QMARK_ = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","hamburger-menu","homepage/hamburger-menu",1565742493)], null)));
var show_QMARK_ = (cljs.core.truth_(clicked_QMARK_)?"100%":"0%");
var delay = (cljs.core.truth_(clicked_QMARK_)?"0.35s":"0.25s");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#side-nav-container-1","#side-nav-container-1",1714637091),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),garden.units.px.call(null,(100)),new cljs.core.Keyword(null,"padding","padding",1660304693),garden.units.px.call(null,(0)),new cljs.core.Keyword(null,"opacity","opacity",397153780),show_QMARK_,new cljs.core.Keyword(null,"transition","transition",765692007),"0.25s",new cljs.core.Keyword(null,"transition-delay","transition-delay",-235557887),delay], null)], null);
});
personal_website.styles.homepage_styles.side_nav.side_nav_container_2_styles = (function personal_website$styles$homepage_styles$side_nav$side_nav_container_2_styles(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".side-nav-container-2",".side-nav-container-2",-1270005959),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),garden.units.px.call(null,(0)),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null);
});
personal_website.styles.homepage_styles.side_nav.slide = (new garden.types.CSSAtRule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"slide","slide",1783023419,null)),new cljs.core.Keyword(null,"frames","frames",1765687497),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),garden.units.px.call(null,(0))], null)], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),garden.units.px.call(null,(100))], null)], null),null,(1),null)),(2),null))], null)));
personal_website.styles.homepage_styles.side_nav.side_nav_elements_styles = (function personal_website$styles$homepage_styles$side_nav$side_nav_elements_styles(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".side-nav-elements",".side-nav-elements",-75283401),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),garden.units.px.call(null,(15)),new cljs.core.Keyword(null,"font-family","font-family",-667419874),"WorkSans",new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),"uppercase",new cljs.core.Keyword(null,"color","color",1011675173),"#333",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),garden.units.px.call(null,(40)),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._AMPERSAND_.call(null,garden.selectors.hover),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#000",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._AMPERSAND_.call(null,garden.selectors.after),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"content","content",15833224),"''",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),garden.units.px.call(null,(20)),new cljs.core.Keyword(null,"height","height",1025178622),garden.units.px.call(null,(1)),new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null)], null)], null);
});
personal_website.styles.homepage_styles.side_nav.side_nav_arrow_styles = (function personal_website$styles$homepage_styles$side_nav$side_nav_arrow_styles(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".side-nav-arrow",".side-nav-arrow",-112147086),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"margin","margin",-995903681),"0px 0px 2px 10px",new cljs.core.Keyword(null,"border","border",1444987323),"solid black",new cljs.core.Keyword(null,"border-width","border-width",-1512605390),"0 2px 2px 0",new cljs.core.Keyword(null,"padding","padding",1660304693),garden.units.px.call(null,(3)),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null);
});
personal_website.styles.homepage_styles.side_nav.side_nav_subpage_container_styles = (function personal_website$styles$homepage_styles$side_nav$side_nav_subpage_container_styles(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".side-nav-subpage-container",".side-nav-subpage-container",-443507910),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),garden.units.px.call(null,(0)),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),garden.units.px.call(null,(25)),new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null);
});
personal_website.styles.homepage_styles.side_nav.side_nav_subpage_elements_styles = (function personal_website$styles$homepage_styles$side_nav$side_nav_subpage_elements_styles(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".side-nav-subpage-elements",".side-nav-subpage-elements",-1840091355),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),garden.units.px.call(null,12.5),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),garden.units.px.call(null,(10)),new cljs.core.Keyword(null,"display","display",242065432),"none",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"opacity","opacity",397153780),"0%",new cljs.core.Keyword(null,"color","color",1011675173),"#333"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._AMPERSAND_.call(null,garden.selectors.hover),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#000"], null)], null)], null);
});
personal_website.styles.homepage_styles.side_nav.fade_in = (new garden.types.CSSAtRule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"fade-in","fade-in",-1655065530,null)),new cljs.core.Keyword(null,"frames","frames",1765687497),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0%"], null)], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"100%"], null)], null),null,(1),null)),(2),null))], null)));
personal_website.styles.homepage_styles.side_nav.side_nav_arrow_selector_skeleton = (function personal_website$styles$homepage_styles$side_nav$side_nav_arrow_selector_skeleton(id,clicked_QMARK_){
var transform = (cljs.core.truth_(clicked_QMARK_)?"rotate(45deg)":"rotate(-45deg)");
var exist_QMARK_ = (cljs.core.truth_(clicked_QMARK_)?"block":"none");
var show_QMARK_ = (cljs.core.truth_(clicked_QMARK_)?"100%":"0%");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._GT_.call(null,garden.selectors._GT_.call(null,personal_website.styles.homepage_styles.side_nav.side_nav_container_2.call(null,garden.selectors.nth_child.call(null,id)),personal_website.styles.homepage_styles.side_nav.side_nav_elements),personal_website.styles.homepage_styles.side_nav.side_nav_arrow),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),transform,new cljs.core.Keyword(null,"transition","transition",765692007),"transform 0.5s"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._GT_.call(null,garden.selectors._GT_.call(null,personal_website.styles.homepage_styles.side_nav.side_nav_container_2.call(null,garden.selectors.nth_child.call(null,id)),personal_website.styles.homepage_styles.side_nav.side_nav_subpage_container),personal_website.styles.homepage_styles.side_nav.side_nav_subpage_elements),(cljs.core.truth_(clicked_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [personal_website.styles.homepage_styles.side_nav.fade_in,"1s"], null)], null),new cljs.core.Keyword(null,"opacity","opacity",397153780),"100%"], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null))], null)], null);
});
personal_website.styles.homepage_styles.side_nav.reset_db = (function personal_website$styles$homepage_styles$side_nav$reset_db(){
var handles = cljs.core.map.call(null,(function (p1__24730_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword("homepage","side-nav-arrow","homepage/side-nav-arrow",2077653864),p1__24730_SHARP_],null));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.Keyword(null,"3","3",2097825370),new cljs.core.Keyword(null,"4","4",-1197948085)], null));
var seq__24731 = cljs.core.seq.call(null,handles);
var chunk__24734 = null;
var count__24735 = (0);
var i__24736 = (0);
while(true){
if((i__24736 < count__24735)){
var vec__24745 = cljs.core._nth.call(null,chunk__24734,i__24736);
var prefix = cljs.core.nth.call(null,vec__24745,(0),null);
var id = cljs.core.nth.call(null,vec__24745,(1),null);
var handle = vec__24745;
var val = cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prefix], null))),id);
if(cljs.core.truth_(val)){
re_frame.core.dispatch.call(null,handle);


var G__24751 = seq__24731;
var G__24752 = chunk__24734;
var G__24753 = count__24735;
var G__24754 = (i__24736 + (1));
seq__24731 = G__24751;
chunk__24734 = G__24752;
count__24735 = G__24753;
i__24736 = G__24754;
continue;
} else {
var G__24755 = seq__24731;
var G__24756 = chunk__24734;
var G__24757 = count__24735;
var G__24758 = (i__24736 + (1));
seq__24731 = G__24755;
chunk__24734 = G__24756;
count__24735 = G__24757;
i__24736 = G__24758;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__24731);
if(temp__5457__auto__){
var seq__24731__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24731__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__24731__$1);
var G__24759 = cljs.core.chunk_rest.call(null,seq__24731__$1);
var G__24760 = c__4556__auto__;
var G__24761 = cljs.core.count.call(null,c__4556__auto__);
var G__24762 = (0);
seq__24731 = G__24759;
chunk__24734 = G__24760;
count__24735 = G__24761;
i__24736 = G__24762;
continue;
} else {
var vec__24748 = cljs.core.first.call(null,seq__24731__$1);
var prefix = cljs.core.nth.call(null,vec__24748,(0),null);
var id = cljs.core.nth.call(null,vec__24748,(1),null);
var handle = vec__24748;
var val = cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prefix], null))),id);
if(cljs.core.truth_(val)){
re_frame.core.dispatch.call(null,handle);


var G__24763 = cljs.core.next.call(null,seq__24731__$1);
var G__24764 = null;
var G__24765 = (0);
var G__24766 = (0);
seq__24731 = G__24763;
chunk__24734 = G__24764;
count__24735 = G__24765;
i__24736 = G__24766;
continue;
} else {
var G__24767 = cljs.core.next.call(null,seq__24731__$1);
var G__24768 = null;
var G__24769 = (0);
var G__24770 = (0);
seq__24731 = G__24767;
chunk__24734 = G__24768;
count__24735 = G__24769;
i__24736 = G__24770;
continue;
}
}
} else {
return null;
}
}
break;
}
});
personal_website.styles.homepage_styles.side_nav.side_nav_selector = (function personal_website$styles$homepage_styles$side_nav$side_nav_selector(){
var clicked_list = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","side-nav-arrow","homepage/side-nav-arrow",2077653864)], null)));
var clicked_ham_QMARK_ = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","hamburger-menu","homepage/hamburger-menu",1565742493)], null)));
var reset_QMARK_ = (cljs.core.truth_(clicked_ham_QMARK_)?null:personal_website.styles.homepage_styles.side_nav.reset_db.call(null));
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function personal_website$styles$homepage_styles$side_nav$side_nav_selector_$_iter__24771(s__24772){
return (new cljs.core.LazySeq(null,(function (){
var s__24772__$1 = s__24772;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__24772__$1);
if(temp__5457__auto__){
var s__24772__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24772__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__24772__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__24774 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__24773 = (0);
while(true){
if((i__24773 < size__4528__auto__)){
var vec__24775 = cljs.core._nth.call(null,c__4527__auto__,i__24773);
var k = cljs.core.nth.call(null,vec__24775,(0),null);
var v = cljs.core.nth.call(null,vec__24775,(1),null);
cljs.core.chunk_append.call(null,b__24774,personal_website.styles.homepage_styles.side_nav.side_nav_arrow_selector_skeleton.call(null,k,v));

var G__24781 = (i__24773 + (1));
i__24773 = G__24781;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24774),personal_website$styles$homepage_styles$side_nav$side_nav_selector_$_iter__24771.call(null,cljs.core.chunk_rest.call(null,s__24772__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24774),null);
}
} else {
var vec__24778 = cljs.core.first.call(null,s__24772__$2);
var k = cljs.core.nth.call(null,vec__24778,(0),null);
var v = cljs.core.nth.call(null,vec__24778,(1),null);
return cljs.core.cons.call(null,personal_website.styles.homepage_styles.side_nav.side_nav_arrow_selector_skeleton.call(null,k,v),personal_website$styles$homepage_styles$side_nav$side_nav_selector_$_iter__24771.call(null,cljs.core.rest.call(null,s__24772__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,clicked_list);
})());
});
personal_website.styles.homepage_styles.side_nav.side_nav = (function personal_website$styles$homepage_styles$side_nav$side_nav(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [personal_website.styles.homepage_styles.side_nav.side_nav_background.call(null),personal_website.styles.homepage_styles.side_nav.side_nav_container_1.call(null),personal_website.styles.homepage_styles.side_nav.side_nav_container_2_styles.call(null),personal_website.styles.homepage_styles.side_nav.side_nav_elements_styles.call(null),personal_website.styles.homepage_styles.side_nav.side_nav_arrow_styles.call(null),personal_website.styles.homepage_styles.side_nav.fade_in,personal_website.styles.homepage_styles.side_nav.side_nav_subpage_container_styles.call(null),personal_website.styles.homepage_styles.side_nav.side_nav_subpage_elements_styles.call(null),personal_website.styles.homepage_styles.side_nav.side_nav_selector.call(null)], null);
});

//# sourceMappingURL=side_nav.js.map
