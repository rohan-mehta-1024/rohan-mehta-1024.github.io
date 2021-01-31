goog.provide('personal_website.views.preview_html');
personal_website.views.preview_html.format_type = (function personal_website$views$preview_html$format_type(type){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,clojure.string.split.cljs$core$IFn$_invoke$arity$2(type,"-")));
});
personal_website.views.preview_html.format_tags = (function personal_website$views$preview_html$format_tags(tags){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if(cljs.core.contains_QMARK_(personal_website.utils.special_words,x)){
return (personal_website.utils.special_words.cljs$core$IFn$_invoke$arity$1 ? personal_website.utils.special_words.cljs$core$IFn$_invoke$arity$1(x) : personal_website.utils.special_words.call(null,x));
} else {
return x;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.string.join," "),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,clojure.string.capitalize)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(x," ");
}),tags))))));
});
personal_website.views.preview_html.format_specifier = (function personal_website$views$preview_html$format_specifier(date,type,tags){
var page = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame","route","kee-frame/route",-106555640)], null)));
var homepage_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(page),"/"))?true:false);
var width = window.innerWidth;
if(homepage_QMARK_){
if((width <= (450))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)," | ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)," | ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," | ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tags)].join('');
}
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(date)," | ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," | ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tags)].join('');
}
});
personal_website.views.preview_html.preview = (function personal_website$views$preview_html$preview(post_object,homepage_QMARK_){
var map__31460 = post_object;
var map__31460__$1 = (((((!((map__31460 == null))))?(((((map__31460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31460):map__31460);
var post = map__31460__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31460__$1,new cljs.core.Keyword(null,"title","title",636505583));
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31460__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31460__$1,new cljs.core.Keyword(null,"content","content",15833224));
var show = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31460__$1,new cljs.core.Keyword(null,"show","show",-576705889));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31460__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31460__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31460__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var suffix = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"short-story"))?"short-stories":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"s"].join(''));
var new_type = personal_website.views.preview_html.format_type(type);
var tags__$1 = personal_website.views.preview_html.format_tags(tags);
var header = personal_website.views.preview_html.format_specifier(date,new_type,tags__$1);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"preview-header"], null),header], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"preview-title",new cljs.core.Keyword(null,"href","href",-793805698),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"paper"))?(post.cljs$core$IFn$_invoke$arity$1 ? post.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"paper-link","paper-link",515642037)) : post.call(null,new cljs.core.Keyword(null,"paper-link","paper-link",515642037))):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"computer-science"))?["/#/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"/",personal_website.utils.format_title(title)].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"synthetic-biology"))?["/#/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"/",personal_website.utils.format_title(title)].join(''):["/#/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"s","/",personal_website.utils.format_title(title)].join('')
))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),personal_website.utils.scroll_to_top], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"preview-text"], null),(cljs.core.truth_(homepage_QMARK_)?show:"")], null)], null);
});

//# sourceMappingURL=personal_website.views.preview_html.js.map
