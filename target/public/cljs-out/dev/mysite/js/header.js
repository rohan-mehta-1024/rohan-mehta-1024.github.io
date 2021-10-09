// Compiled by ClojureScript 1.10.773 {}
goog.provide('mysite.js.header');
goog.require('cljs.core');
goog.require('clojure.string');
mysite.js.header.get_element = (function mysite$js$header$get_element(id){
return document.getElementById(id);
});
mysite.js.header.get_elements = (function mysite$js$header$get_elements(class$){
return document.getElementsByClassName(class$);
});
mysite.js.header.activate = (function mysite$js$header$activate(el){
return el.classList.toggle("active");
});
mysite.js.header.get_and_activate = (function mysite$js$header$get_and_activate(id){
return mysite.js.header.activate.call(null,mysite.js.header.get_element.call(null,id));
});
mysite.js.header.get_current = (function mysite$js$header$get_current(el){
return el.currentTarget;
});
mysite.js.header.remove_class = (function mysite$js$header$remove_class(class$,el){
return el.classList.remove(class$);
});
mysite.js.header.get_active = (function mysite$js$header$get_active(class$){
var elements = cljs.core.array_seq.call(null,mysite.js.header.get_elements.call(null,class$));
var pred = (function (p1__23948_SHARP_){
return clojure.string.includes_QMARK_.call(null,p1__23948_SHARP_.className,"active");
});
return cljs.core.filter.call(null,pred,elements);
});
mysite.js.header.inactivate_all_others = (function mysite$js$header$inactivate_all_others(el,active_list){
var seq__23949 = cljs.core.seq.call(null,active_list);
var chunk__23951 = null;
var count__23952 = (0);
var i__23953 = (0);
while(true){
if((i__23953 < count__23952)){
var element = cljs.core._nth.call(null,chunk__23951,i__23953);
if(cljs.core.not_EQ_.call(null,el,element)){
mysite.js.header.activate.call(null,element);


var G__23955 = seq__23949;
var G__23956 = chunk__23951;
var G__23957 = count__23952;
var G__23958 = (i__23953 + (1));
seq__23949 = G__23955;
chunk__23951 = G__23956;
count__23952 = G__23957;
i__23953 = G__23958;
continue;
} else {
var G__23959 = seq__23949;
var G__23960 = chunk__23951;
var G__23961 = count__23952;
var G__23962 = (i__23953 + (1));
seq__23949 = G__23959;
chunk__23951 = G__23960;
count__23952 = G__23961;
i__23953 = G__23962;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__23949);
if(temp__5753__auto__){
var seq__23949__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23949__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__23949__$1);
var G__23963 = cljs.core.chunk_rest.call(null,seq__23949__$1);
var G__23964 = c__4556__auto__;
var G__23965 = cljs.core.count.call(null,c__4556__auto__);
var G__23966 = (0);
seq__23949 = G__23963;
chunk__23951 = G__23964;
count__23952 = G__23965;
i__23953 = G__23966;
continue;
} else {
var element = cljs.core.first.call(null,seq__23949__$1);
if(cljs.core.not_EQ_.call(null,el,element)){
mysite.js.header.activate.call(null,element);


var G__23967 = cljs.core.next.call(null,seq__23949__$1);
var G__23968 = null;
var G__23969 = (0);
var G__23970 = (0);
seq__23949 = G__23967;
chunk__23951 = G__23968;
count__23952 = G__23969;
i__23953 = G__23970;
continue;
} else {
var G__23971 = cljs.core.next.call(null,seq__23949__$1);
var G__23972 = null;
var G__23973 = (0);
var G__23974 = (0);
seq__23949 = G__23971;
chunk__23951 = G__23972;
count__23952 = G__23973;
i__23953 = G__23974;
continue;
}
}
} else {
return null;
}
}
break;
}
});
mysite.js.header.on_click_ham_menu = (function mysite$js$header$on_click_ham_menu(){
var subpages = mysite.js.header.get_elements.call(null,"side-nav-subpages");
mysite.js.header.get_and_activate.call(null,"ham-menu");

mysite.js.header.get_and_activate.call(null,"side-nav-background");

return mysite.js.header.activate.call(null,document.body);
});
mysite.js.header.on_click_subpage = (function mysite$js$header$on_click_subpage(el){
var others = mysite.js.header.get_active.call(null,"side-nav-subpages");
mysite.js.header.inactivate_all_others.call(null,el,others);

return mysite.js.header.activate.call(null,el);
});
mysite.js.header.start_listening_BANG_ = (function mysite$js$header$start_listening_BANG_(){
var ham_menu = mysite.js.header.get_element.call(null,"ham-menu");
var subpages = mysite.js.header.get_elements.call(null,"side-nav-subpages");
ham_menu.addEventListener("click",mysite.js.header.on_click_ham_menu);

var seq__23975 = cljs.core.seq.call(null,subpages);
var chunk__23976 = null;
var count__23977 = (0);
var i__23978 = (0);
while(true){
if((i__23978 < count__23977)){
var subpage = cljs.core._nth.call(null,chunk__23976,i__23978);
subpage.addEventListener("click",cljs.core.comp.call(null,mysite.js.header.on_click_subpage,mysite.js.header.get_current));


var G__23979 = seq__23975;
var G__23980 = chunk__23976;
var G__23981 = count__23977;
var G__23982 = (i__23978 + (1));
seq__23975 = G__23979;
chunk__23976 = G__23980;
count__23977 = G__23981;
i__23978 = G__23982;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__23975);
if(temp__5753__auto__){
var seq__23975__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23975__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__23975__$1);
var G__23983 = cljs.core.chunk_rest.call(null,seq__23975__$1);
var G__23984 = c__4556__auto__;
var G__23985 = cljs.core.count.call(null,c__4556__auto__);
var G__23986 = (0);
seq__23975 = G__23983;
chunk__23976 = G__23984;
count__23977 = G__23985;
i__23978 = G__23986;
continue;
} else {
var subpage = cljs.core.first.call(null,seq__23975__$1);
subpage.addEventListener("click",cljs.core.comp.call(null,mysite.js.header.on_click_subpage,mysite.js.header.get_current));


var G__23987 = cljs.core.next.call(null,seq__23975__$1);
var G__23988 = null;
var G__23989 = (0);
var G__23990 = (0);
seq__23975 = G__23987;
chunk__23976 = G__23988;
count__23977 = G__23989;
i__23978 = G__23990;
continue;
}
} else {
return null;
}
}
break;
}
});
(window.onload = mysite.js.header.start_listening_BANG_);

//# sourceMappingURL=header.js.map
