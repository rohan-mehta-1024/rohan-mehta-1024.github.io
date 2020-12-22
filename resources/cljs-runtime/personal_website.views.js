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
var previous = style_tag.innerHTML;
return (style_tag["innerHTML"] = input_css);
});
personal_website.views.styles = (function personal_website$views$styles(){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.into,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [personal_website.styles.homepage_styles.homepage_stylesheet.homepage_styles(),personal_website.styles.all_posts_stylesheet.all_posts(),personal_website.styles.footer_stylesheet.footer()], null));
});
personal_website.views.inject_css = (function personal_website$views$inject_css(text_css){
return personal_website.views.update_page_css(garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text_css], 0)));
});
personal_website.views.main_panel = (function personal_website$views$main_panel(){
var injected_css = personal_website.views.inject_css(personal_website.views.styles());
return new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [kee_frame.core.switch_route,(function (route){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route));
}),new cljs.core.Keyword(null,"homepage","homepage",-1646828249),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [personal_website.views.homepage_views.homepage_html.homepage_html], null),new cljs.core.Keyword(null,"who-i-am","who-i-am",-596046408),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"hi this is who i am"], null);
})], null),new cljs.core.Keyword(null,"syn-bio","syn-bio",-1893273080),personal_website.views.all_posts_html.display,new cljs.core.Keyword(null,"comp-sci","comp-sci",-1030545072),personal_website.views.all_posts_html.display,new cljs.core.Keyword(null,"blog-posts","blog-posts",2099061283),personal_website.views.all_posts_html.display,new cljs.core.Keyword(null,"essays","essays",-1695424907),personal_website.views.all_posts_html.display,new cljs.core.Keyword(null,"stories","stories",-1910187794),personal_website.views.all_posts_html.display,new cljs.core.Keyword(null,"poems","poems",-1901766320),personal_website.views.all_posts_html.display,new cljs.core.Keyword(null,"papers","papers",1152250078),personal_website.views.all_posts_html.display,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [personal_website.views.homepage_views.homepage_html.homepage_html], null)], null);
});

//# sourceMappingURL=personal_website.views.js.map
