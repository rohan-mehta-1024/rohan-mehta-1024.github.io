goog.provide('personal_website.views');
personal_website.views.generate_and_inject_style_tag = (function personal_website$views$generate_and_inject_style_tag(){

var page_head = document.head;
var style_tag = document.createElement("style");
style_tag.setAttribute("id","injected-css");

return page_head.appendChild(style_tag);
});
personal_website.views.update_page_css = (function personal_website$views$update_page_css(input_css){

var style_tag_selector = "#injected-css";
var style_tag_query = document.querySelector(style_tag_selector);
var style_tag = (((style_tag_query == null))?personal_website.views.generate_and_inject_style_tag():style_tag_query);
return (style_tag["innerHTML"] = input_css);
});
personal_website.views.styles = (function personal_website$views$styles(){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.into,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [personal_website.styles.homepage_styles.homepage_stylesheet.homepage_styles(),personal_website.styles.all_posts_stylesheet.all_posts(),personal_website.styles.footer_stylesheet.footer()], null));
});
personal_website.views.inject_css = (function personal_website$views$inject_css(text_css){
var cssify = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(garden.core.css,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vendors","vendors",-153040496),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["webkit"], null),new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),null], null), null)], null));
return personal_website.views.update_page_css(cssify(text_css));
});
personal_website.views.main_panel = (function personal_website$views$main_panel(){
var injected_css = personal_website.views.inject_css(personal_website.views.styles());
var typeset_fn = (function (){
return setTimeout((function (){
return MathJax.typeset();
}),(500));
});
var call_typeset = typeset_fn();
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [kee_frame.core.switch_route,(function (route){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route));
}),new cljs.core.Keyword(null,"homepage","homepage",-1646828249),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [personal_website.views.homepage_views.homepage_html.homepage_html], null),new cljs.core.Keyword(null,"who-i-am","who-i-am",-596046408),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"hi this is who i am"], null);
})], null),new cljs.core.Keyword(null,"syn-bio","syn-bio",-1893273080),personal_website.views.all_posts_html.display,new cljs.core.Keyword(null,"comp-sci","comp-sci",-1030545072),personal_website.views.all_posts_html.display,new cljs.core.Keyword(null,"blog-posts","blog-posts",2099061283),personal_website.views.all_posts_html.display,new cljs.core.Keyword(null,"essays","essays",-1695424907),personal_website.views.all_posts_html.display,new cljs.core.Keyword(null,"stories","stories",-1910187794),personal_website.views.all_posts_html.display,new cljs.core.Keyword(null,"poems","poems",-1901766320),personal_website.views.all_posts_html.display,new cljs.core.Keyword(null,"papers","papers",1152250078),personal_website.views.all_posts_html.display,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [personal_website.views.homepage_views.homepage_html.homepage_html], null)], null);
});

//# sourceMappingURL=personal_website.views.js.map
