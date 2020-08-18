// Compiled by ClojureScript 1.10.773 {}
goog.provide('personal_website.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('personal_website.db');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("personal-website.events","initialize-db","personal-website.events/initialize-db",-420532137),(function (_,___$1){
return personal_website.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("homepage","hamburger-menu","homepage/hamburger-menu",1565742493),(function (db,p__13127){
var vec__13128 = p__13127;
var _ = cljs.core.nth.call(null,vec__13128,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__13128,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"homepage","homepage",-1646828249),new cljs.core.Keyword(null,"hamburger-menu","hamburger-menu",946668975)], null),cljs.core.not);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("homepage","subpage-hover","homepage/subpage-hover",-1030285926),(function (db,p__13131){
var vec__13132 = p__13131;
var _ = cljs.core.nth.call(null,vec__13132,(0),null);
var new_val = cljs.core.nth.call(null,vec__13132,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"homepage","homepage",-1646828249),new cljs.core.Keyword(null,"subpage-hover","subpage-hover",-1618647668)], null),new_val);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("homepage","side-nav-arrow","homepage/side-nav-arrow",2077653864),(function (db,p__13135){
var vec__13136 = p__13135;
var _ = cljs.core.nth.call(null,vec__13136,(0),null);
var keyword = cljs.core.nth.call(null,vec__13136,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"homepage","homepage",-1646828249),new cljs.core.Keyword(null,"side-nav-arrow","side-nav-arrow",-1763292330),keyword], null),cljs.core.not);
}));

//# sourceMappingURL=events.js.map
