// Compiled by ClojureScript 1.10.773 {}
goog.provide('personal_website.styles.new_homepage_styles');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('personal_website.views.new_homepage_views');
goog.require('garden.selectors');
goog.require('garden.core');
goog.require('garden.units');
goog.require('garden.stylesheet');
goog.require('personal_website.subs');
goog.require('personal_website.db');
personal_website.styles.new_homepage_styles.subpage_container_2 = garden.selectors.selector.call(null,".subpage-container-2");
personal_website.styles.new_homepage_styles.subpage_elements = garden.selectors.selector.call(null,".subpage-elements");
personal_website.styles.new_homepage_styles.subpage_tooltips = garden.selectors.selector.call(null,".subpage-tooltips");
personal_website.styles.new_homepage_styles.side_nav_elements = garden.selectors.selector.call(null,".side-nav-elements");
personal_website.styles.new_homepage_styles.side_nav_arrow = garden.selectors.selector.call(null,".side-nav-arrow");
personal_website.styles.new_homepage_styles.side_nav_container_2 = garden.selectors.selector.call(null,".side-nav-container-2");
personal_website.styles.new_homepage_styles.side_nav_subpage_container = garden.selectors.selector.call(null,".side-nav-subpage-container");
personal_website.styles.new_homepage_styles.side_nav_subpage_elements = garden.selectors.selector.call(null,".side-nav-subpage-elements");
personal_website.styles.new_homepage_styles.global_styles = (function personal_website$styles$new_homepage_styles$global_styles(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"background","background",-863952629),"white"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"WorkSans",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#F8F8F8",new cljs.core.Keyword(null,"margin","margin",-995903681),"0",new cljs.core.Keyword(null,"padding","padding",1660304693),"0"], null)], null)], null);
});
personal_website.styles.new_homepage_styles.my_name = (function personal_website$styles$new_homepage_styles$my_name(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#my-name","#my-name",-892471267),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"WorkSansBold",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),garden.units.px.call(null,(35)),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),garden.units.px.call(null,(45))], null)], null);
});
personal_website.styles.new_homepage_styles.subpage_container_1 = (function personal_website$styles$new_homepage_styles$subpage_container_1(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#subpage-container-1","#subpage-container-1",-1223787256),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),garden.units.px.call(null,(25)),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),garden.units.px.call(null,(37)),new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._PLUS_.call(null,personal_website.styles.new_homepage_styles.subpage_container_2,personal_website.styles.new_homepage_styles.subpage_container_2),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),garden.units.vw.call(null,(5))], null)], null)], null);
});
personal_website.styles.new_homepage_styles.subpage_container_2_styles = (function personal_website$styles$new_homepage_styles$subpage_container_2_styles(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".subpage-container-2",".subpage-container-2",235290579),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null);
});
personal_website.styles.new_homepage_styles.subpage_elements_styles = (function personal_website$styles$new_homepage_styles$subpage_elements_styles(){
var vec__30015 = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","subpage-hover","homepage/subpage-hover",-1030285926)], null)));
var hovering_QMARK_ = cljs.core.nth.call(null,vec__30015,(0),null);
var id = cljs.core.nth.call(null,vec__30015,(1),null);
var id__$1 = cljs.core.keyword.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
var color = (cljs.core.truth_(hovering_QMARK_)?"#000":"#333");
var cursor = (cljs.core.truth_(hovering_QMARK_)?"pointer":"auto");
var width = (cljs.core.truth_(hovering_QMARK_)?"100%":"0%");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".subpage-elements",".subpage-elements",-1724428417),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),garden.units.px.call(null,(15)),new cljs.core.Keyword(null,"font-family","font-family",-667419874),"WorkSans",new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),"uppercase",new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"cursor","cursor",1011937484),cursor,new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._AMPERSAND_.call(null,garden.selectors.after),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"content","content",15833224),"''",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"height","height",1025178622),garden.units.px.call(null,1.5),new cljs.core.Keyword(null,"width","width",-384071477),garden.units.px.call(null,(0)),new cljs.core.Keyword(null,"background-color","background-color",570434026),"#000",new cljs.core.Keyword(null,"transition","transition",765692007),"width 0.5s ease-in-out"], null)], null)], null);
});
personal_website.styles.new_homepage_styles.subpage_tooltips_styles = (function personal_website$styles$new_homepage_styles$subpage_tooltips_styles(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".subpage-tooltips",".subpage-tooltips",1057019931),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622)],["center",garden.units.px.call(null,(15)),garden.units.px.call(null,(110)),"0%",garden.units.px.call(null,(10)),"relative","2px solid black",garden.units.px.call(null,(10)),garden.units.px.call(null,(50))]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._PLUS_.call(null,garden.selectors.li,garden.selectors.li),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),garden.units.px.call(null,(5))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._AMPERSAND_.call(null,garden.selectors.after),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"content","content",15833224),"''",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"top","top",-1856271961),garden.units.px.call(null,(-90)),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),garden.units.px.call(null,(8)),new cljs.core.Keyword(null,"border-style","border-style",-485574304),"solid",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"transparent transparent black transparent"], null)], null)], null);
});
personal_website.styles.new_homepage_styles.subpage_tooltip_elements = (function personal_website$styles$new_homepage_styles$subpage_tooltip_elements(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".subpage-tooltip-elements",".subpage-tooltip-elements",1545969677),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),garden.units.px.call(null,(12)),new cljs.core.Keyword(null,"font-family","font-family",-667419874),"WorkSans",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),"#333"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._AMPERSAND_.call(null,garden.selectors.hover),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#000"], null)], null)], null);
});
personal_website.styles.new_homepage_styles.subpage_selector = (function personal_website$styles$new_homepage_styles$subpage_selector(){
var vec__30018 = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","subpage-hover","homepage/subpage-hover",-1030285926)], null)));
var hovering_QMARK_ = cljs.core.nth.call(null,vec__30018,(0),null);
var id = cljs.core.nth.call(null,vec__30018,(1),null);
var show_QMARK_ = (cljs.core.truth_(hovering_QMARK_)?"100%":"0%");
var child = cljs.core.keyword.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._GT_.call(null,personal_website.styles.new_homepage_styles.subpage_container_2.call(null,garden.selectors.nth_child.call(null,child)),personal_website.styles.new_homepage_styles.subpage_tooltips),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),show_QMARK_], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._GT_.call(null,personal_website.styles.new_homepage_styles.subpage_container_2.call(null,garden.selectors.nth_child.call(null,child)),personal_website.styles.new_homepage_styles.subpage_elements.call(null,garden.selectors.after)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),show_QMARK_], null)], null)], null);
});
personal_website.styles.new_homepage_styles.subpages = (function personal_website$styles$new_homepage_styles$subpages(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [personal_website.styles.new_homepage_styles.subpage_container_1.call(null),personal_website.styles.new_homepage_styles.subpage_container_2_styles.call(null),personal_website.styles.new_homepage_styles.subpage_elements_styles.call(null),personal_website.styles.new_homepage_styles.subpage_tooltips_styles.call(null),personal_website.styles.new_homepage_styles.subpage_selector.call(null),personal_website.styles.new_homepage_styles.subpage_tooltip_elements.call(null)], null);
});
personal_website.styles.new_homepage_styles.ham_menu = (function personal_website$styles$new_homepage_styles$ham_menu(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".ham-menu",".ham-menu",1303514882),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"right","right",-452581833),garden.units.px.call(null,(25)),new cljs.core.Keyword(null,"top","top",-1856271961),garden.units.px.call(null,(0)),new cljs.core.Keyword(null,"width","width",-384071477),garden.units.px.call(null,(55)),new cljs.core.Keyword(null,"height","height",1025178622),garden.units.px.call(null,(55)),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"display","display",242065432),"none",new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.3s ease-in-out"], null)], null);
});
personal_website.styles.new_homepage_styles.lines = (function personal_website$styles$new_homepage_styles$lines(){
var clicked_QMARK_ = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","hamburger-menu","homepage/hamburger-menu",1565742493)], null)));
var transform_1 = "translateY(14px) rotate(45deg)";
var transform_2 = "translateY(-14px) rotate(-45deg)";
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".lines",".lines",519060737),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"margin","margin",-995903681),"auto",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),garden.units.px.call(null,(12)),new cljs.core.Keyword(null,"width","width",-384071477),garden.units.px.call(null,(50)),new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"height","height",1025178622),garden.units.px.call(null,(5)),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),garden.units.px.call(null,(0)),new cljs.core.Keyword(null,"transition","transition",765692007),"transform 0.3s, opacity 0.1s ease-in-out"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._AMPERSAND_.call(null,garden.selectors.nth_child.call(null,new cljs.core.Keyword(null,"1","1",-521621649))),(cljs.core.truth_(clicked_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),transform_1], null):cljs.core.PersistentArrayMap.EMPTY)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._AMPERSAND_.call(null,garden.selectors.nth_child.call(null,new cljs.core.Keyword(null,"2","2",-1645882217))),(cljs.core.truth_(clicked_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0%"], null):cljs.core.PersistentArrayMap.EMPTY)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._AMPERSAND_.call(null,garden.selectors.nth_child.call(null,new cljs.core.Keyword(null,"3","3",2097825370))),(cljs.core.truth_(clicked_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),transform_2], null):cljs.core.PersistentArrayMap.EMPTY)], null)], null);
});
personal_website.styles.new_homepage_styles.hamburger_button = (function personal_website$styles$new_homepage_styles$hamburger_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [personal_website.styles.new_homepage_styles.ham_menu.call(null),personal_website.styles.new_homepage_styles.lines.call(null)], null);
});
personal_website.styles.new_homepage_styles.side_nav_background = (function personal_website$styles$new_homepage_styles$side_nav_background(){
var clicked_QMARK_ = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","hamburger-menu","homepage/hamburger-menu",1565742493)], null)));
var width = (cljs.core.truth_(clicked_QMARK_)?"35%":"0%");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#side-nav-background","#side-nav-background",-1530598116),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),"#E8E8E8",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"right","right",-452581833),garden.units.px.call(null,(0)),new cljs.core.Keyword(null,"transition","transition",765692007),"width 0.75s ease-in-out"], null)], null);
});
personal_website.styles.new_homepage_styles.side_nav_container_1 = (function personal_website$styles$new_homepage_styles$side_nav_container_1(){
var clicked_QMARK_ = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","hamburger-menu","homepage/hamburger-menu",1565742493)], null)));
var show_QMARK_ = (cljs.core.truth_(clicked_QMARK_)?"100%":"0%");
var delay = (cljs.core.truth_(clicked_QMARK_)?"0.35s":"0.25s");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#side-nav-container-1","#side-nav-container-1",1714637091),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),garden.units.px.call(null,(100)),new cljs.core.Keyword(null,"padding","padding",1660304693),garden.units.px.call(null,(0)),new cljs.core.Keyword(null,"opacity","opacity",397153780),show_QMARK_,new cljs.core.Keyword(null,"transition","transition",765692007),"0.25s",new cljs.core.Keyword(null,"transition-delay","transition-delay",-235557887),delay], null)], null);
});
personal_website.styles.new_homepage_styles.side_nav_container_2_styles = (function personal_website$styles$new_homepage_styles$side_nav_container_2_styles(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".side-nav-container-2",".side-nav-container-2",-1270005959),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),garden.units.px.call(null,(0)),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null);
});
personal_website.styles.new_homepage_styles.slide = (new garden.types.CSSAtRule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"slide","slide",1783023419,null)),new cljs.core.Keyword(null,"frames","frames",1765687497),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),garden.units.px.call(null,(0))], null)], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),garden.units.px.call(null,(100))], null)], null),null,(1),null)),(2),null))], null)));
personal_website.styles.new_homepage_styles.side_nav_elements_styles = (function personal_website$styles$new_homepage_styles$side_nav_elements_styles(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".side-nav-elements",".side-nav-elements",-75283401),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),garden.units.px.call(null,(15)),new cljs.core.Keyword(null,"font-family","font-family",-667419874),"WorkSans",new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),"uppercase",new cljs.core.Keyword(null,"color","color",1011675173),"#333",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),garden.units.px.call(null,(40)),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._AMPERSAND_.call(null,garden.selectors.hover),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#000",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._AMPERSAND_.call(null,garden.selectors.after),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"content","content",15833224),"''",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),garden.units.px.call(null,(20)),new cljs.core.Keyword(null,"height","height",1025178622),garden.units.px.call(null,(1)),new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null)], null)], null);
});
personal_website.styles.new_homepage_styles.side_nav_arrow_styles = (function personal_website$styles$new_homepage_styles$side_nav_arrow_styles(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".side-nav-arrow",".side-nav-arrow",-112147086),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"margin","margin",-995903681),"0px 0px 2px 10px",new cljs.core.Keyword(null,"border","border",1444987323),"solid black",new cljs.core.Keyword(null,"border-width","border-width",-1512605390),"0 2px 2px 0",new cljs.core.Keyword(null,"padding","padding",1660304693),garden.units.px.call(null,(3)),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null);
});
personal_website.styles.new_homepage_styles.side_nav_subpage_container_styles = (function personal_website$styles$new_homepage_styles$side_nav_subpage_container_styles(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".side-nav-subpage-container",".side-nav-subpage-container",-443507910),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),garden.units.px.call(null,(0)),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),garden.units.px.call(null,(25)),new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null);
});
personal_website.styles.new_homepage_styles.side_nav_subpage_elements_styles = (function personal_website$styles$new_homepage_styles$side_nav_subpage_elements_styles(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".side-nav-subpage-elements",".side-nav-subpage-elements",-1840091355),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),garden.units.px.call(null,12.5),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),garden.units.px.call(null,(10)),new cljs.core.Keyword(null,"display","display",242065432),"none",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"opacity","opacity",397153780),"0%",new cljs.core.Keyword(null,"color","color",1011675173),"#333"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._AMPERSAND_.call(null,garden.selectors.hover),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#000"], null)], null)], null);
});
personal_website.styles.new_homepage_styles.fade_in = (new garden.types.CSSAtRule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"fade-in","fade-in",-1655065530,null)),new cljs.core.Keyword(null,"frames","frames",1765687497),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0%"], null)], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"100%"], null)], null),null,(1),null)),(2),null))], null)));
personal_website.styles.new_homepage_styles.fade_out = (new garden.types.CSSAtRule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"fade-out","fade-out",440370767,null)),new cljs.core.Keyword(null,"frames","frames",1765687497),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"100%"], null)], null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0%"], null)], null),null,(1),null)),(2),null))], null)));
personal_website.styles.new_homepage_styles.side_nav_arrow_selector_skeleton = (function personal_website$styles$new_homepage_styles$side_nav_arrow_selector_skeleton(id,clicked_QMARK_){
var transform = (cljs.core.truth_(clicked_QMARK_)?"rotate(45deg)":"rotate(-45deg)");
var exist_QMARK_ = (cljs.core.truth_(clicked_QMARK_)?"block":"none");
var animate_QMARK_ = (cljs.core.truth_(clicked_QMARK_)?personal_website.styles.new_homepage_styles.fade_in:personal_website.styles.new_homepage_styles.fade_out);
var show_QMARK_ = (cljs.core.truth_(clicked_QMARK_)?"100%":"0%");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._GT_.call(null,garden.selectors._GT_.call(null,personal_website.styles.new_homepage_styles.side_nav_container_2.call(null,garden.selectors.nth_child.call(null,id)),personal_website.styles.new_homepage_styles.side_nav_elements),personal_website.styles.new_homepage_styles.side_nav_arrow),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),transform,new cljs.core.Keyword(null,"transition","transition",765692007),"transform 0.5s"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._GT_.call(null,garden.selectors._GT_.call(null,personal_website.styles.new_homepage_styles.side_nav_container_2.call(null,garden.selectors.nth_child.call(null,id)),personal_website.styles.new_homepage_styles.side_nav_subpage_container),personal_website.styles.new_homepage_styles.side_nav_subpage_elements),(cljs.core.truth_(clicked_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [personal_website.styles.new_homepage_styles.fade_in,"1s"], null)], null),new cljs.core.Keyword(null,"opacity","opacity",397153780),"100%"], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null))], null)], null);
});
personal_website.styles.new_homepage_styles.reset_db = (function personal_website$styles$new_homepage_styles$reset_db(){
var handles = cljs.core.map.call(null,(function (p1__30021_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword("homepage","side-nav-arrow","homepage/side-nav-arrow",2077653864),p1__30021_SHARP_],null));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.Keyword(null,"3","3",2097825370),new cljs.core.Keyword(null,"4","4",-1197948085)], null));
var seq__30022 = cljs.core.seq.call(null,handles);
var chunk__30025 = null;
var count__30026 = (0);
var i__30027 = (0);
while(true){
if((i__30027 < count__30026)){
var vec__30036 = cljs.core._nth.call(null,chunk__30025,i__30027);
var prefix = cljs.core.nth.call(null,vec__30036,(0),null);
var id = cljs.core.nth.call(null,vec__30036,(1),null);
var handle = vec__30036;
var val = cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prefix], null))),id);
if(cljs.core.truth_(val)){
re_frame.core.dispatch.call(null,handle);


var G__30042 = seq__30022;
var G__30043 = chunk__30025;
var G__30044 = count__30026;
var G__30045 = (i__30027 + (1));
seq__30022 = G__30042;
chunk__30025 = G__30043;
count__30026 = G__30044;
i__30027 = G__30045;
continue;
} else {
var G__30046 = seq__30022;
var G__30047 = chunk__30025;
var G__30048 = count__30026;
var G__30049 = (i__30027 + (1));
seq__30022 = G__30046;
chunk__30025 = G__30047;
count__30026 = G__30048;
i__30027 = G__30049;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__30022);
if(temp__5457__auto__){
var seq__30022__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30022__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__30022__$1);
var G__30050 = cljs.core.chunk_rest.call(null,seq__30022__$1);
var G__30051 = c__4556__auto__;
var G__30052 = cljs.core.count.call(null,c__4556__auto__);
var G__30053 = (0);
seq__30022 = G__30050;
chunk__30025 = G__30051;
count__30026 = G__30052;
i__30027 = G__30053;
continue;
} else {
var vec__30039 = cljs.core.first.call(null,seq__30022__$1);
var prefix = cljs.core.nth.call(null,vec__30039,(0),null);
var id = cljs.core.nth.call(null,vec__30039,(1),null);
var handle = vec__30039;
var val = cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prefix], null))),id);
if(cljs.core.truth_(val)){
re_frame.core.dispatch.call(null,handle);


var G__30054 = cljs.core.next.call(null,seq__30022__$1);
var G__30055 = null;
var G__30056 = (0);
var G__30057 = (0);
seq__30022 = G__30054;
chunk__30025 = G__30055;
count__30026 = G__30056;
i__30027 = G__30057;
continue;
} else {
var G__30058 = cljs.core.next.call(null,seq__30022__$1);
var G__30059 = null;
var G__30060 = (0);
var G__30061 = (0);
seq__30022 = G__30058;
chunk__30025 = G__30059;
count__30026 = G__30060;
i__30027 = G__30061;
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
personal_website.styles.new_homepage_styles.side_nav_selector = (function personal_website$styles$new_homepage_styles$side_nav_selector(){
var clicked_list = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","side-nav-arrow","homepage/side-nav-arrow",2077653864)], null)));
var clicked_ham_QMARK_ = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","hamburger-menu","homepage/hamburger-menu",1565742493)], null)));
var reset_QMARK_ = (cljs.core.truth_(clicked_ham_QMARK_)?null:personal_website.styles.new_homepage_styles.reset_db.call(null));
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function personal_website$styles$new_homepage_styles$side_nav_selector_$_iter__30062(s__30063){
return (new cljs.core.LazySeq(null,(function (){
var s__30063__$1 = s__30063;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__30063__$1);
if(temp__5457__auto__){
var s__30063__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30063__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__30063__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__30065 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__30064 = (0);
while(true){
if((i__30064 < size__4528__auto__)){
var vec__30066 = cljs.core._nth.call(null,c__4527__auto__,i__30064);
var k = cljs.core.nth.call(null,vec__30066,(0),null);
var v = cljs.core.nth.call(null,vec__30066,(1),null);
cljs.core.chunk_append.call(null,b__30065,personal_website.styles.new_homepage_styles.side_nav_arrow_selector_skeleton.call(null,k,v));

var G__30072 = (i__30064 + (1));
i__30064 = G__30072;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30065),personal_website$styles$new_homepage_styles$side_nav_selector_$_iter__30062.call(null,cljs.core.chunk_rest.call(null,s__30063__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30065),null);
}
} else {
var vec__30069 = cljs.core.first.call(null,s__30063__$2);
var k = cljs.core.nth.call(null,vec__30069,(0),null);
var v = cljs.core.nth.call(null,vec__30069,(1),null);
return cljs.core.cons.call(null,personal_website.styles.new_homepage_styles.side_nav_arrow_selector_skeleton.call(null,k,v),personal_website$styles$new_homepage_styles$side_nav_selector_$_iter__30062.call(null,cljs.core.rest.call(null,s__30063__$2)));
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
personal_website.styles.new_homepage_styles.side_nav = (function personal_website$styles$new_homepage_styles$side_nav(){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [personal_website.styles.new_homepage_styles.side_nav_background.call(null),personal_website.styles.new_homepage_styles.side_nav_container_1.call(null),personal_website.styles.new_homepage_styles.side_nav_container_2_styles.call(null),personal_website.styles.new_homepage_styles.side_nav_elements_styles.call(null),personal_website.styles.new_homepage_styles.side_nav_arrow_styles.call(null),personal_website.styles.new_homepage_styles.fade_in,personal_website.styles.new_homepage_styles.fade_out,personal_website.styles.new_homepage_styles.side_nav_subpage_container_styles.call(null),personal_website.styles.new_homepage_styles.side_nav_subpage_elements_styles.call(null),personal_website.styles.new_homepage_styles.side_nav_selector.call(null)], null);
});
personal_website.styles.new_homepage_styles.media_query_1 = (function personal_website$styles$new_homepage_styles$media_query_1(){
return garden.stylesheet.at_media.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),garden.units.px.call(null,(1070))], null),(function (){var clicked_QMARK_ = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","hamburger-menu","homepage/hamburger-menu",1565742493)], null)));
return null;
})(),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#my-name","#my-name",-892471267),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),garden.units.px.call(null,(35)),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),garden.units.px.call(null,(0))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#subpage-container-1","#subpage-container-1",-1223787256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".ham-menu",".ham-menu",1303514882),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),garden.units.px.call(null,(19)),new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".lines",".lines",519060737),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),garden.units.px.call(null,(4)),new cljs.core.Keyword(null,"width","width",-384071477),garden.units.px.call(null,(43)),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),garden.units.px.call(null,(10))], null)], null)], null));
});
personal_website.styles.new_homepage_styles.media_query_2 = (function personal_website$styles$new_homepage_styles$media_query_2(){
return garden.stylesheet.at_media.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),garden.units.px.call(null,(1070))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#side-nav-background","#side-nav-background",-1530598116),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null));
});
personal_website.styles.new_homepage_styles.media_query_3 = (function personal_website$styles$new_homepage_styles$media_query_3(){
return garden.stylesheet.at_media.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),garden.units.px.call(null,(700))], null),(function (){var clicked_QMARK_ = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","hamburger-menu","homepage/hamburger-menu",1565742493)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#my-name","#my-name",-892471267),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),garden.units.px.call(null,(30))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".ham-menu",".ham-menu",1303514882),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),garden.units.px.call(null,(15))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".lines",".lines",519060737),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),garden.units.px.call(null,(40)),new cljs.core.Keyword(null,"height","height",1025178622),garden.units.px.call(null,(3))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._AMPERSAND_.call(null,garden.selectors.nth_child.call(null,new cljs.core.Keyword(null,"1","1",-521621649))),(cljs.core.truth_(clicked_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translateY(13px) rotate(45deg)"], null):cljs.core.PersistentArrayMap.EMPTY)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._AMPERSAND_.call(null,garden.selectors.nth_child.call(null,new cljs.core.Keyword(null,"3","3",2097825370))),(cljs.core.truth_(clicked_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translateY(-13px) rotate(-45deg)"], null):cljs.core.PersistentArrayMap.EMPTY)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#side-nav-background","#side-nav-background",-1530598116),(cljs.core.truth_(clicked_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null):cljs.core.PersistentArrayMap.EMPTY)], null)], null);
})());
});
personal_website.styles.new_homepage_styles.media_queries = (function personal_website$styles$new_homepage_styles$media_queries(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [personal_website.styles.new_homepage_styles.media_query_1.call(null),personal_website.styles.new_homepage_styles.media_query_2.call(null),personal_website.styles.new_homepage_styles.media_query_3.call(null)], null);
});
personal_website.styles.new_homepage_styles.homepage_styles = (function personal_website$styles$new_homepage_styles$homepage_styles(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [personal_website.styles.new_homepage_styles.global_styles.call(null),personal_website.styles.new_homepage_styles.my_name.call(null),personal_website.styles.new_homepage_styles.subpages.call(null),personal_website.styles.new_homepage_styles.hamburger_button.call(null),personal_website.styles.new_homepage_styles.side_nav.call(null),personal_website.styles.new_homepage_styles.media_queries.call(null)], null);
});

//# sourceMappingURL=new_homepage_styles.js.map
