goog.provide('personal_website.utils');
personal_website.utils.link = (function personal_website$utils$link(text,link){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"post-links",new cljs.core.Keyword(null,"href","href",-793805698),link,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),text], null);
});
personal_website.utils.special_words = new cljs.core.PersistentArrayMap(null, 1, ["Mnist","MNIST"], null);
personal_website.utils.scroll_to_top = (function personal_website$utils$scroll_to_top(){
var obj = document.getElementById("top");
var scroll = (function (){
return obj.scrollIntoView();
});
return setTimeout(scroll,(5));
});
personal_website.utils.format_title = (function personal_website$utils$format_title(title){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("_",cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,clojure.string.split.cljs$core$IFn$_invoke$arity$2(title," ")));
});
personal_website.utils.unformat_title = (function personal_website$utils$unformat_title(title){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
var y = (personal_website.utils.special_words.cljs$core$IFn$_invoke$arity$1 ? personal_website.utils.special_words.cljs$core$IFn$_invoke$arity$1(x) : personal_website.utils.special_words.call(null,x));
if(cljs.core.truth_(y)){
return y;
} else {
return x;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,clojure.string.split.cljs$core$IFn$_invoke$arity$2(title,"_"))));
});
personal_website.utils.scroll_to_this = (function personal_website$utils$scroll_to_this(el_id){
var obj = document.getElementById(el_id);
return obj.scrollIntoView();
});
personal_website.utils.make_footnote = (function personal_website$utils$make_footnote(num,footnote_id,el_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup","sup",-2039492346),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"post-links",new cljs.core.Keyword(null,"id","id",-1388402092),footnote_id,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return personal_website.utils.scroll_to_this(el_id);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"100px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"15px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"0px"], null)], null),num], null);
});
personal_website.utils.bold = (function personal_website$utils$bold(text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"WorkSansBold"], null)], null),text], null);
});

//# sourceMappingURL=personal_website.utils.js.map
