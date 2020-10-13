goog.provide('personal_website.views.preview_html');
personal_website.views.preview_html.format_type = (function personal_website$views$preview_html$format_type(type){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,clojure.string.split.cljs$core$IFn$_invoke$arity$2(type,"-")));
});
personal_website.views.preview_html.format_tags = (function personal_website$views$preview_html$format_tags(tags){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.string.join," "),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,clojure.string.capitalize)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(x," ");
}),tags)))));
});
personal_website.views.preview_html.scroll_to_top = (function personal_website$views$preview_html$scroll_to_top(){
var js_obj = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"behavior","behavior",1202392908),"smooth"], null));
var scroll = (function (){
return window.scrollTo(js_obj);
});
return setTimeout(scroll,(120));
});
personal_website.views.preview_html.scroll_obj = (function personal_website$views$preview_html$scroll_obj(){
var obj = document.getElementById("top");
var scroll = (function (){
obj.scrollIntoView();

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["hello"], 0));
});
return setTimeout(scroll,(5));
});
personal_website.views.preview_html.preview = (function personal_website$views$preview_html$preview(post_object,homepage_QMARK_){
var map__33722 = post_object;
var map__33722__$1 = (((((!((map__33722 == null))))?(((((map__33722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33722):map__33722);
var post = map__33722__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33722__$1,new cljs.core.Keyword(null,"title","title",636505583));
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33722__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33722__$1,new cljs.core.Keyword(null,"content","content",15833224));
var show = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33722__$1,new cljs.core.Keyword(null,"show","show",-576705889));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33722__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33722__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33722__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var suffix = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"short-story"))?"short-stories":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"s"].join(''));
var new_type = personal_website.views.preview_html.format_type(type);
var specifier = (cljs.core.truth_(homepage_QMARK_)?[new_type," | "].join(''):"");
var tags__$1 = personal_website.views.preview_html.format_tags(tags);
var header = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)," | ",specifier,tags__$1].join('');
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"preview-header"], null),header], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"preview-title",new cljs.core.Keyword(null,"href","href",-793805698),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"paper"))?(post.cljs$core$IFn$_invoke$arity$1 ? post.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"paper-link","paper-link",515642037)) : post.call(null,new cljs.core.Keyword(null,"paper-link","paper-link",515642037))):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"computer-science"))?["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"synthetic-biology"))?["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''):["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"s","/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')
))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),personal_website.views.preview_html.scroll_obj], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"preview-text"], null),show], null)], null);
});

//# sourceMappingURL=personal_website.views.preview_html.js.map
