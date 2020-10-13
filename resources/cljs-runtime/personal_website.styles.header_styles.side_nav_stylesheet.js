goog.provide('personal_website.styles.header_styles.side_nav_stylesheet');
personal_website.styles.header_styles.side_nav_stylesheet.side_nav_elements = garden.selectors.selector(".side-nav-elements");
personal_website.styles.header_styles.side_nav_stylesheet.side_nav_arrow = garden.selectors.selector(".side-nav-arrow");
personal_website.styles.header_styles.side_nav_stylesheet.side_nav_container_2 = garden.selectors.selector(".side-nav-container-2");
personal_website.styles.header_styles.side_nav_stylesheet.side_nav_subpage_container = garden.selectors.selector(".side-nav-subpage-container");
personal_website.styles.header_styles.side_nav_stylesheet.side_nav_subpage_elements = garden.selectors.selector(".side-nav-subpage-elements");
personal_website.styles.header_styles.side_nav_stylesheet.side_nav_background = (function personal_website$styles$header_styles$side_nav_stylesheet$side_nav_background(){
var clicked_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","hamburger-menu","homepage/hamburger-menu",1565742493)], null)));
var width = (cljs.core.truth_(clicked_QMARK_)?"35%":"0%");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#side-nav-background","#side-nav-background",-1530598116),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"height","height",1025178622),"110%",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),garden.units.px((-100)),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"right","right",-452581833),garden.units.px((0)),new cljs.core.Keyword(null,"transition","transition",765692007),"width 0.75s ease-in-out"], null)], null);
});
personal_website.styles.header_styles.side_nav_stylesheet.side_nav_container_1 = (function personal_website$styles$header_styles$side_nav_stylesheet$side_nav_container_1(){
var clicked_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","hamburger-menu","homepage/hamburger-menu",1565742493)], null)));
var show_QMARK_ = (cljs.core.truth_(clicked_QMARK_)?"100%":"0%");
var delay = (cljs.core.truth_(clicked_QMARK_)?"0.35s":"0.25s");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#side-nav-container-1","#side-nav-container-1",1714637091),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),garden.units.px((150)),new cljs.core.Keyword(null,"padding","padding",1660304693),garden.units.px((0)),new cljs.core.Keyword(null,"opacity","opacity",397153780),show_QMARK_,new cljs.core.Keyword(null,"transition","transition",765692007),"0.25s",new cljs.core.Keyword(null,"transition-delay","transition-delay",-235557887),delay], null)], null);
});
personal_website.styles.header_styles.side_nav_stylesheet.side_nav_container_2_styles = (function personal_website$styles$header_styles$side_nav_stylesheet$side_nav_container_2_styles(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".side-nav-container-2",".side-nav-container-2",-1270005959),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),garden.units.px((0)),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null);
});
personal_website.styles.header_styles.side_nav_stylesheet.side_nav_elements_styles = (function personal_website$styles$header_styles$side_nav_stylesheet$side_nav_elements_styles(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".side-nav-elements",".side-nav-elements",-75283401),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),garden.units.px((15)),new cljs.core.Keyword(null,"font-family","font-family",-667419874),"WorkSans",new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),"uppercase",new cljs.core.Keyword(null,"color","color",1011675173),"#333",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),garden.units.px((40)),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(garden.selectors.hover) : garden.selectors._AMPERSAND_.call(null,garden.selectors.hover)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#000",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(garden.selectors.after) : garden.selectors._AMPERSAND_.call(null,garden.selectors.after)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"content","content",15833224),"''",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),garden.units.px((20)),new cljs.core.Keyword(null,"height","height",1025178622),garden.units.px((1)),new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null)], null)], null);
});
personal_website.styles.header_styles.side_nav_stylesheet.side_nav_arrow_styles = (function personal_website$styles$header_styles$side_nav_stylesheet$side_nav_arrow_styles(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".side-nav-arrow",".side-nav-arrow",-112147086),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"margin","margin",-995903681),"0px 0px 2px 10px",new cljs.core.Keyword(null,"border","border",1444987323),"solid black",new cljs.core.Keyword(null,"border-width","border-width",-1512605390),"0 2px 2px 0",new cljs.core.Keyword(null,"padding","padding",1660304693),garden.units.px((3)),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null);
});
personal_website.styles.header_styles.side_nav_stylesheet.side_nav_subpage_container_styles = (function personal_website$styles$header_styles$side_nav_stylesheet$side_nav_subpage_container_styles(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".side-nav-subpage-container",".side-nav-subpage-container",-443507910),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),garden.units.px((0)),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),garden.units.px((25)),new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null);
});
personal_website.styles.header_styles.side_nav_stylesheet.side_nav_subpage_elements_styles = (function personal_website$styles$header_styles$side_nav_stylesheet$side_nav_subpage_elements_styles(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".side-nav-subpage-elements",".side-nav-subpage-elements",-1840091355),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),garden.units.px(12.5),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),garden.units.px((10)),new cljs.core.Keyword(null,"display","display",242065432),"none",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),"#333"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(garden.selectors.hover) : garden.selectors._AMPERSAND_.call(null,garden.selectors.hover)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#000"], null)], null)], null);
});
personal_website.styles.header_styles.side_nav_stylesheet.side_nav_arrow_selector_skeleton = (function personal_website$styles$header_styles$side_nav_stylesheet$side_nav_arrow_selector_skeleton(id,clicked_QMARK_){
var transform = (cljs.core.truth_(clicked_QMARK_)?"rotate(45deg)":"rotate(-45deg)");
var exist_QMARK_ = (cljs.core.truth_(clicked_QMARK_)?"block":"none");
var show_QMARK_ = (cljs.core.truth_(clicked_QMARK_)?"100%":"0%");
var l = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["l",id,clicked_QMARK_], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._GT_.cljs$core$IFn$_invoke$arity$2(garden.selectors._GT_.cljs$core$IFn$_invoke$arity$2((function (){var G__33360 = (garden.selectors.nth_child.cljs$core$IFn$_invoke$arity$1 ? garden.selectors.nth_child.cljs$core$IFn$_invoke$arity$1(id) : garden.selectors.nth_child.call(null,id));
return (personal_website.styles.header_styles.side_nav_stylesheet.side_nav_container_2.cljs$core$IFn$_invoke$arity$1 ? personal_website.styles.header_styles.side_nav_stylesheet.side_nav_container_2.cljs$core$IFn$_invoke$arity$1(G__33360) : personal_website.styles.header_styles.side_nav_stylesheet.side_nav_container_2.call(null,G__33360));
})(),personal_website.styles.header_styles.side_nav_stylesheet.side_nav_elements),personal_website.styles.header_styles.side_nav_stylesheet.side_nav_arrow),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),transform,new cljs.core.Keyword(null,"transition","transition",765692007),"transform 0.5s"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._GT_.cljs$core$IFn$_invoke$arity$2(garden.selectors._GT_.cljs$core$IFn$_invoke$arity$2((function (){var G__33361 = (garden.selectors.nth_child.cljs$core$IFn$_invoke$arity$1 ? garden.selectors.nth_child.cljs$core$IFn$_invoke$arity$1(id) : garden.selectors.nth_child.call(null,id));
return (personal_website.styles.header_styles.side_nav_stylesheet.side_nav_container_2.cljs$core$IFn$_invoke$arity$1 ? personal_website.styles.header_styles.side_nav_stylesheet.side_nav_container_2.cljs$core$IFn$_invoke$arity$1(G__33361) : personal_website.styles.header_styles.side_nav_stylesheet.side_nav_container_2.call(null,G__33361));
})(),personal_website.styles.header_styles.side_nav_stylesheet.side_nav_subpage_container),personal_website.styles.header_styles.side_nav_stylesheet.side_nav_subpage_elements),(cljs.core.truth_(clicked_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null))], null)], null);
});
personal_website.styles.header_styles.side_nav_stylesheet.reset_db = (function personal_website$styles$header_styles$side_nav_stylesheet$reset_db(){
var handles = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33362_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword("homepage","side-nav-arrow","homepage/side-nav-arrow",2077653864),p1__33362_SHARP_],null));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.Keyword(null,"3","3",2097825370),new cljs.core.Keyword(null,"4","4",-1197948085),new cljs.core.Keyword(null,"5","5",538911032)], null));
var seq__33363 = cljs.core.seq(handles);
var chunk__33366 = null;
var count__33367 = (0);
var i__33368 = (0);
while(true){
if((i__33368 < count__33367)){
var vec__33389 = chunk__33366.cljs$core$IIndexed$_nth$arity$2(null,i__33368);
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33389,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33389,(1),null);
var handle = vec__33389;
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prefix], null))),id);
if(cljs.core.truth_(val)){
re_frame.core.dispatch(handle);


var G__33409 = seq__33363;
var G__33410 = chunk__33366;
var G__33411 = count__33367;
var G__33412 = (i__33368 + (1));
seq__33363 = G__33409;
chunk__33366 = G__33410;
count__33367 = G__33411;
i__33368 = G__33412;
continue;
} else {
var G__33413 = seq__33363;
var G__33414 = chunk__33366;
var G__33415 = count__33367;
var G__33416 = (i__33368 + (1));
seq__33363 = G__33413;
chunk__33366 = G__33414;
count__33367 = G__33415;
i__33368 = G__33416;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33363);
if(temp__5735__auto__){
var seq__33363__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33363__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33363__$1);
var G__33417 = cljs.core.chunk_rest(seq__33363__$1);
var G__33418 = c__4556__auto__;
var G__33419 = cljs.core.count(c__4556__auto__);
var G__33420 = (0);
seq__33363 = G__33417;
chunk__33366 = G__33418;
count__33367 = G__33419;
i__33368 = G__33420;
continue;
} else {
var vec__33392 = cljs.core.first(seq__33363__$1);
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33392,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33392,(1),null);
var handle = vec__33392;
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prefix], null))),id);
if(cljs.core.truth_(val)){
re_frame.core.dispatch(handle);


var G__33421 = cljs.core.next(seq__33363__$1);
var G__33422 = null;
var G__33423 = (0);
var G__33424 = (0);
seq__33363 = G__33421;
chunk__33366 = G__33422;
count__33367 = G__33423;
i__33368 = G__33424;
continue;
} else {
var G__33425 = cljs.core.next(seq__33363__$1);
var G__33426 = null;
var G__33427 = (0);
var G__33428 = (0);
seq__33363 = G__33425;
chunk__33366 = G__33426;
count__33367 = G__33427;
i__33368 = G__33428;
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
personal_website.styles.header_styles.side_nav_stylesheet.side_nav_selector = (function personal_website$styles$header_styles$side_nav_stylesheet$side_nav_selector(){
var clicked_list = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","side-nav-arrow","homepage/side-nav-arrow",2077653864)], null)));
var clicked_ham_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","hamburger-menu","homepage/hamburger-menu",1565742493)], null)));
var reset_QMARK_ = (cljs.core.truth_(clicked_ham_QMARK_)?null:personal_website.styles.header_styles.side_nav_stylesheet.reset_db());
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function personal_website$styles$header_styles$side_nav_stylesheet$side_nav_selector_$_iter__33395(s__33396){
return (new cljs.core.LazySeq(null,(function (){
var s__33396__$1 = s__33396;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__33396__$1);
if(temp__5735__auto__){
var s__33396__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33396__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__33396__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__33398 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__33397 = (0);
while(true){
if((i__33397 < size__4528__auto__)){
var vec__33399 = cljs.core._nth(c__4527__auto__,i__33397);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33399,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33399,(1),null);
cljs.core.chunk_append(b__33398,personal_website.styles.header_styles.side_nav_stylesheet.side_nav_arrow_selector_skeleton(k,v));

var G__33429 = (i__33397 + (1));
i__33397 = G__33429;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33398),personal_website$styles$header_styles$side_nav_stylesheet$side_nav_selector_$_iter__33395(cljs.core.chunk_rest(s__33396__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33398),null);
}
} else {
var vec__33402 = cljs.core.first(s__33396__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33402,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33402,(1),null);
return cljs.core.cons(personal_website.styles.header_styles.side_nav_stylesheet.side_nav_arrow_selector_skeleton(k,v),personal_website$styles$header_styles$side_nav_stylesheet$side_nav_selector_$_iter__33395(cljs.core.rest(s__33396__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(clicked_list);
})());
});
personal_website.styles.header_styles.side_nav_stylesheet.side_nav = (function personal_website$styles$header_styles$side_nav_stylesheet$side_nav(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [personal_website.styles.header_styles.side_nav_stylesheet.side_nav_background(),personal_website.styles.header_styles.side_nav_stylesheet.side_nav_container_1(),personal_website.styles.header_styles.side_nav_stylesheet.side_nav_container_2_styles(),personal_website.styles.header_styles.side_nav_stylesheet.side_nav_elements_styles(),personal_website.styles.header_styles.side_nav_stylesheet.side_nav_arrow_styles(),personal_website.styles.header_styles.side_nav_stylesheet.side_nav_subpage_container_styles(),personal_website.styles.header_styles.side_nav_stylesheet.side_nav_subpage_elements_styles(),personal_website.styles.header_styles.side_nav_stylesheet.side_nav_selector()], null);
});

//# sourceMappingURL=personal_website.styles.header_styles.side_nav_stylesheet.js.map
