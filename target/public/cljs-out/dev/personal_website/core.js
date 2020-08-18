// Compiled by ClojureScript 1.10.773 {}
goog.provide('personal_website.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('re_frame.core');
goog.require('personal_website.events');
goog.require('personal_website.views');
goog.require('personal_website.config');
personal_website.core.dev_setup = (function personal_website$core$dev_setup(){
if(personal_website.config.debug_QMARK_){
return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
personal_website.core.mount_root = (function personal_website$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node.call(null,root_el);

return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [personal_website.views.main_panel], null),root_el);
});
personal_website.core.init = (function personal_website$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("personal-website.events","initialize-db","personal-website.events/initialize-db",-420532137)], null));

personal_website.core.dev_setup.call(null);

return personal_website.core.mount_root.call(null);
});
personal_website.core.init.call(null);

//# sourceMappingURL=core.js.map
