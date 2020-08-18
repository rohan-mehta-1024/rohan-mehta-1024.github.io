// Compiled by ClojureScript 1.10.773 {}
goog.provide('personal_website.views');
goog.require('cljs.core');
goog.require('personal_website.views.new_homepage_views');
goog.require('personal_website.styles.new_homepage_styles');
goog.require('personal_website.subs');
goog.require('re_frame.core');
goog.require('garden.core');
personal_website.views.generate_and_inject_style_tag = (function personal_website$views$generate_and_inject_style_tag(){

var page_head = document.head;
var style_tag = document.createElement("style");
style_tag.setAttribute("id","injected-css");

return page_head.appendChild(style_tag);
});
personal_website.views.update_page_css = (function personal_website$views$update_page_css(input_css){

var style_tag_selector = "#injected-css";
var style_tag_query = document.querySelector(style_tag_selector);
var style_tag = (((style_tag_query == null))?personal_website.views.generate_and_inject_style_tag.call(null):style_tag_query);
return (style_tag["innerHTML"] = input_css);
});
personal_website.views.main_panel = (function personal_website$views$main_panel(){
var inject_css = cljs.core.comp.call(null,personal_website.views.update_page_css,garden.core.css);
var injected_css = inject_css.call(null,personal_website.styles.new_homepage_styles.homepage_styles.call(null));
return personal_website.views.new_homepage_views.html.call(null);
});

//# sourceMappingURL=views.js.map
