goog.provide('personal_website.utils');
personal_website.utils.link = (function personal_website$utils$link(text,link){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"post-links",new cljs.core.Keyword(null,"href","href",-793805698),link,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),text], null);
});
personal_website.utils.scroll_to_top = (function personal_website$utils$scroll_to_top(){
var obj = document.getElementById("top");
var scroll = (function (){
return obj.scrollIntoView();
});
return setTimeout(scroll,(5));
});
personal_website.utils.format_title = (function personal_website$utils$format_title(title){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,clojure.string.split.cljs$core$IFn$_invoke$arity$2(title," ")));
});
personal_website.utils.unformat_title = (function personal_website$utils$unformat_title(title){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,clojure.string.split.cljs$core$IFn$_invoke$arity$2(title,"-")));
});

//# sourceMappingURL=personal_website.utils.js.map
