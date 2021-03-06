goog.provide('personal_website.styles.search_stylesheet');
personal_website.styles.search_stylesheet.search_container = (function personal_website$styles$search_stylesheet$search_container(){
var searching_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","search","homepage/search",951395840)], null)));
var show_QMARK_ = (cljs.core.truth_(searching_QMARK_)?"block":"none");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#search-container","#search-container",-1639698735),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),show_QMARK_], null)], null);
});
personal_website.styles.search_stylesheet.search_view = (function personal_website$styles$search_stylesheet$search_view(){
var searching_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","search","homepage/search",951395840)], null)));
var autofocus = (function (){
return document.getElementById("search-view").focus();
});
var autofocus__$1 = (function (){
return setTimeout(autofocus,(200));
});
var autofocus__$2 = (cljs.core.truth_(searching_QMARK_)?autofocus__$1():null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#search-view","#search-view",-1795008699),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),"75%",new cljs.core.Keyword(null,"margin","margin",-995903681),"auto",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),garden.units.px((150)),new cljs.core.Keyword(null,"color","color",1011675173),"#DC143C",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),garden.units.px((20)),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),garden.units.px((40)),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),garden.units.px((0)),new cljs.core.Keyword(null,"border","border",1444987323),"none"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1 ? garden.selectors._AMPERSAND_.cljs$core$IFn$_invoke$arity$1(garden.selectors.focus) : garden.selectors._AMPERSAND_.call(null,garden.selectors.focus))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null)], null);
});
personal_website.styles.search_stylesheet.search_count = (function personal_website$styles$search_stylesheet$search_count(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#search-count","#search-count",-225841632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),garden.units.px((20)),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),garden.units.px((25)),new cljs.core.Keyword(null,"font-family","font-family",-667419874),"WorkSansBold"], null)], null);
});
personal_website.styles.search_stylesheet.results_container = (function personal_website$styles$search_stylesheet$results_container(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#results-container","#results-container",-1648700806),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),garden.units.px((20)),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),garden.units.px((45)),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),garden.units.px((75))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.selectors._PLUS_(garden.selectors.div,garden.selectors.div),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),garden.units.px((45))], null)], null)], null);
});
personal_website.styles.search_stylesheet.search_results = (function personal_website$styles$search_stylesheet$search_results(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#search-results","#search-results",2146901854),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"100vh",new cljs.core.Keyword(null,"width","width",-384071477),"700px"], null)], null);
});
personal_website.styles.search_stylesheet.media_query_1 = (function personal_website$styles$search_stylesheet$media_query_1(){
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),garden.units.px((715))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#search-results","#search-results",2146901854),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null)], 0));
});
personal_website.styles.search_stylesheet.search = (function personal_website$styles$search_stylesheet$search(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [personal_website.styles.search_stylesheet.search_container(),personal_website.styles.search_stylesheet.search_results(),personal_website.styles.search_stylesheet.search_view(),personal_website.styles.search_stylesheet.search_count(),personal_website.styles.search_stylesheet.results_container(),personal_website.styles.search_stylesheet.media_query_1()], null);
});

//# sourceMappingURL=personal_website.styles.search_stylesheet.js.map
