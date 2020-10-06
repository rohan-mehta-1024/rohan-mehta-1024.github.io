goog.provide('personal_website.views.homepage_views.homepage_html');
personal_website.views.homepage_views.homepage_html.generate_and_inject_style_tag = (function personal_website$views$homepage_views$homepage_html$generate_and_inject_style_tag(){

var page_head = document.head;
var style_tag = document.createElement("style");
style_tag.setAttribute("id","injected-css");

return page_head.appendChild(style_tag);
});
personal_website.views.homepage_views.homepage_html.update_page_title = (function personal_website$views$homepage_views$homepage_html$update_page_title(input_css){

var style_tag_selector = "title";
var style_tag_query = document.querySelector(style_tag_selector);
var style_tag = (((style_tag_query == null))?personal_website.views.homepage_views.homepage_html.generate_and_inject_style_tag():style_tag_query);
return (style_tag["innerHTML"] = input_css);
});
personal_website.views.homepage_views.homepage_html.homepage_html = (function personal_website$views$homepage_views$homepage_html$homepage_html(){
var searching_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("homepage","search","homepage/search",951395840)], null)));
var pos = (cljs.core.truth_(searching_QMARK_)?"absolute":"relative");
var x = personal_website.views.homepage_views.homepage_html.update_page_title("Rohan Mehta");
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"super-container",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"min-height","min-height",398480837),"100%",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null)], null),personal_website.views.header_html.header()),personal_website.views.search_html.search_html()),personal_website.views.homepage_views.page_content_html.page_content()),personal_website.views.footer_html.footer());
});

//# sourceMappingURL=personal_website.views.homepage_views.homepage_html.js.map
