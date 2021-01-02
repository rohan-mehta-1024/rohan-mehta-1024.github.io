goog.provide('personal_website.styles.header_styles.hamburger_button_stylesheet');
personal_website.styles.header_styles.hamburger_button_stylesheet.ham_menu = (function personal_website$styles$header_styles$hamburger_button_stylesheet$ham_menu(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".ham-menu",".ham-menu",1303514882),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"right","right",-452581833),garden.units.px((25)),new cljs.core.Keyword(null,"top","top",-1856271961),garden.units.px((0)),new cljs.core.Keyword(null,"width","width",-384071477),garden.units.px((55)),new cljs.core.Keyword(null,"height","height",1025178622),garden.units.px((55)),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"display","display",242065432),"none",new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.3s ease-in-out"], null)], null);
});
personal_website.styles.header_styles.hamburger_button_stylesheet.lines = (function personal_website$styles$header_styles$hamburger_button_stylesheet$lines(){
var clicked_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","hamburger-menu","homepage/hamburger-menu",1565742493)], null)));
var transform_1 = "translateY(14px) rotate(45deg)";
var transform_2 = "translateY(-14px) rotate(-45deg)";
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".lines",".lines",519060737),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"margin","margin",-995903681),"auto",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),garden.units.px((12)),new cljs.core.Keyword(null,"width","width",-384071477),garden.units.px((50)),new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"height","height",1025178622),garden.units.px((5)),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),garden.units.px((0)),new cljs.core.Keyword(null,"transition","transition",765692007),"transform 0.3s, opacity 0.1s ease-in-out"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45123 = (garden.selectors.nth_child.cljs$core$IFn$_invoke$arity$1 ? garden.selectors.nth_child.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"1","1",-521621649)) : garden.selectors.nth_child.call(null,new cljs.core.Keyword(null,"1","1",-521621649)));
return (garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(G__45123) : garden.selectors._AMPERSAND_.call(null,G__45123));
})(),(cljs.core.truth_(clicked_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),transform_1], null):cljs.core.PersistentArrayMap.EMPTY)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45124 = (garden.selectors.nth_child.cljs$core$IFn$_invoke$arity$1 ? garden.selectors.nth_child.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"2","2",-1645882217)) : garden.selectors.nth_child.call(null,new cljs.core.Keyword(null,"2","2",-1645882217)));
return (garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(G__45124) : garden.selectors._AMPERSAND_.call(null,G__45124));
})(),(cljs.core.truth_(clicked_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0%"], null):cljs.core.PersistentArrayMap.EMPTY)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45125 = (garden.selectors.nth_child.cljs$core$IFn$_invoke$arity$1 ? garden.selectors.nth_child.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"3","3",2097825370)) : garden.selectors.nth_child.call(null,new cljs.core.Keyword(null,"3","3",2097825370)));
return (garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(G__45125) : garden.selectors._AMPERSAND_.call(null,G__45125));
})(),(cljs.core.truth_(clicked_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),transform_2], null):cljs.core.PersistentArrayMap.EMPTY)], null)], null);
});
personal_website.styles.header_styles.hamburger_button_stylesheet.hamburger_button = (function personal_website$styles$header_styles$hamburger_button_stylesheet$hamburger_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [personal_website.styles.header_styles.hamburger_button_stylesheet.ham_menu(),personal_website.styles.header_styles.hamburger_button_stylesheet.lines()], null);
});

//# sourceMappingURL=personal_website.styles.header_styles.hamburger_button_stylesheet.js.map
