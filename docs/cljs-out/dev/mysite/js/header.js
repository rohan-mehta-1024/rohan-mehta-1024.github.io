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
var pred = (function (p1__23714_SHARP_){
return clojure.string.includes_QMARK_.call(null,p1__23714_SHARP_.className,"active");
});
return cljs.core.filter.call(null,pred,elements);
});
mysite.js.header.inactivate_all_others = (function mysite$js$header$inactivate_all_others(el,active_list){
var seq__23715 = cljs.core.seq.call(null,active_list);
var chunk__23717 = null;
var count__23718 = (0);
var i__23719 = (0);
while(true){
if((i__23719 < count__23718)){
var element = cljs.core._nth.call(null,chunk__23717,i__23719);
if(cljs.core.not_EQ_.call(null,el,element)){
mysite.js.header.activate.call(null,element);


var G__23721 = seq__23715;
var G__23722 = chunk__23717;
var G__23723 = count__23718;
var G__23724 = (i__23719 + (1));
seq__23715 = G__23721;
chunk__23717 = G__23722;
count__23718 = G__23723;
i__23719 = G__23724;
continue;
} else {
var G__23725 = seq__23715;
var G__23726 = chunk__23717;
var G__23727 = count__23718;
var G__23728 = (i__23719 + (1));
seq__23715 = G__23725;
chunk__23717 = G__23726;
count__23718 = G__23727;
i__23719 = G__23728;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__23715);
if(temp__5753__auto__){
var seq__23715__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23715__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__23715__$1);
var G__23729 = cljs.core.chunk_rest.call(null,seq__23715__$1);
var G__23730 = c__4556__auto__;
var G__23731 = cljs.core.count.call(null,c__4556__auto__);
var G__23732 = (0);
seq__23715 = G__23729;
chunk__23717 = G__23730;
count__23718 = G__23731;
i__23719 = G__23732;
continue;
} else {
var element = cljs.core.first.call(null,seq__23715__$1);
if(cljs.core.not_EQ_.call(null,el,element)){
mysite.js.header.activate.call(null,element);


var G__23733 = cljs.core.next.call(null,seq__23715__$1);
var G__23734 = null;
var G__23735 = (0);
var G__23736 = (0);
seq__23715 = G__23733;
chunk__23717 = G__23734;
count__23718 = G__23735;
i__23719 = G__23736;
continue;
} else {
var G__23737 = cljs.core.next.call(null,seq__23715__$1);
var G__23738 = null;
var G__23739 = (0);
var G__23740 = (0);
seq__23715 = G__23737;
chunk__23717 = G__23738;
count__23718 = G__23739;
i__23719 = G__23740;
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

var seq__23741 = cljs.core.seq.call(null,subpages);
var chunk__23742 = null;
var count__23743 = (0);
var i__23744 = (0);
while(true){
if((i__23744 < count__23743)){
var subpage = cljs.core._nth.call(null,chunk__23742,i__23744);
subpage.addEventListener("click",cljs.core.comp.call(null,mysite.js.header.on_click_subpage,mysite.js.header.get_current));


var G__23745 = seq__23741;
var G__23746 = chunk__23742;
var G__23747 = count__23743;
var G__23748 = (i__23744 + (1));
seq__23741 = G__23745;
chunk__23742 = G__23746;
count__23743 = G__23747;
i__23744 = G__23748;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__23741);
if(temp__5753__auto__){
var seq__23741__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23741__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__23741__$1);
var G__23749 = cljs.core.chunk_rest.call(null,seq__23741__$1);
var G__23750 = c__4556__auto__;
var G__23751 = cljs.core.count.call(null,c__4556__auto__);
var G__23752 = (0);
seq__23741 = G__23749;
chunk__23742 = G__23750;
count__23743 = G__23751;
i__23744 = G__23752;
continue;
} else {
var subpage = cljs.core.first.call(null,seq__23741__$1);
subpage.addEventListener("click",cljs.core.comp.call(null,mysite.js.header.on_click_subpage,mysite.js.header.get_current));


var G__23753 = cljs.core.next.call(null,seq__23741__$1);
var G__23754 = null;
var G__23755 = (0);
var G__23756 = (0);
seq__23741 = G__23753;
chunk__23742 = G__23754;
count__23743 = G__23755;
i__23744 = G__23756;
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
