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
var pred = (function (p1__18579_SHARP_){
return clojure.string.includes_QMARK_.call(null,p1__18579_SHARP_.className,"active");
});
return cljs.core.filter.call(null,pred,elements);
});
mysite.js.header.inactivate_all_others = (function mysite$js$header$inactivate_all_others(el,active_list){
var seq__18580 = cljs.core.seq.call(null,active_list);
var chunk__18582 = null;
var count__18583 = (0);
var i__18584 = (0);
while(true){
if((i__18584 < count__18583)){
var element = cljs.core._nth.call(null,chunk__18582,i__18584);
if(cljs.core.not_EQ_.call(null,el,element)){
mysite.js.header.activate.call(null,element);


var G__18586 = seq__18580;
var G__18587 = chunk__18582;
var G__18588 = count__18583;
var G__18589 = (i__18584 + (1));
seq__18580 = G__18586;
chunk__18582 = G__18587;
count__18583 = G__18588;
i__18584 = G__18589;
continue;
} else {
var G__18590 = seq__18580;
var G__18591 = chunk__18582;
var G__18592 = count__18583;
var G__18593 = (i__18584 + (1));
seq__18580 = G__18590;
chunk__18582 = G__18591;
count__18583 = G__18592;
i__18584 = G__18593;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__18580);
if(temp__5753__auto__){
var seq__18580__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18580__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__18580__$1);
var G__18594 = cljs.core.chunk_rest.call(null,seq__18580__$1);
var G__18595 = c__4556__auto__;
var G__18596 = cljs.core.count.call(null,c__4556__auto__);
var G__18597 = (0);
seq__18580 = G__18594;
chunk__18582 = G__18595;
count__18583 = G__18596;
i__18584 = G__18597;
continue;
} else {
var element = cljs.core.first.call(null,seq__18580__$1);
if(cljs.core.not_EQ_.call(null,el,element)){
mysite.js.header.activate.call(null,element);


var G__18598 = cljs.core.next.call(null,seq__18580__$1);
var G__18599 = null;
var G__18600 = (0);
var G__18601 = (0);
seq__18580 = G__18598;
chunk__18582 = G__18599;
count__18583 = G__18600;
i__18584 = G__18601;
continue;
} else {
var G__18602 = cljs.core.next.call(null,seq__18580__$1);
var G__18603 = null;
var G__18604 = (0);
var G__18605 = (0);
seq__18580 = G__18602;
chunk__18582 = G__18603;
count__18583 = G__18604;
i__18584 = G__18605;
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

var seq__18606 = cljs.core.seq.call(null,subpages);
var chunk__18607 = null;
var count__18608 = (0);
var i__18609 = (0);
while(true){
if((i__18609 < count__18608)){
var subpage = cljs.core._nth.call(null,chunk__18607,i__18609);
subpage.addEventListener("click",cljs.core.comp.call(null,mysite.js.header.on_click_subpage,mysite.js.header.get_current));


var G__18610 = seq__18606;
var G__18611 = chunk__18607;
var G__18612 = count__18608;
var G__18613 = (i__18609 + (1));
seq__18606 = G__18610;
chunk__18607 = G__18611;
count__18608 = G__18612;
i__18609 = G__18613;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__18606);
if(temp__5753__auto__){
var seq__18606__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18606__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__18606__$1);
var G__18614 = cljs.core.chunk_rest.call(null,seq__18606__$1);
var G__18615 = c__4556__auto__;
var G__18616 = cljs.core.count.call(null,c__4556__auto__);
var G__18617 = (0);
seq__18606 = G__18614;
chunk__18607 = G__18615;
count__18608 = G__18616;
i__18609 = G__18617;
continue;
} else {
var subpage = cljs.core.first.call(null,seq__18606__$1);
subpage.addEventListener("click",cljs.core.comp.call(null,mysite.js.header.on_click_subpage,mysite.js.header.get_current));


var G__18618 = cljs.core.next.call(null,seq__18606__$1);
var G__18619 = null;
var G__18620 = (0);
var G__18621 = (0);
seq__18606 = G__18618;
chunk__18607 = G__18619;
count__18608 = G__18620;
i__18609 = G__18621;
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
