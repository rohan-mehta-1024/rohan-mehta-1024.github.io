// Compiled by ClojureScript 1.10.773 {}
goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
jayq.core.crate_meta = (function jayq$core$crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function jayq$core$__GT_selector(sel){
if(typeof sel === 'string'){
return sel;
} else {
if(cljs.core.fn_QMARK_.call(null,sel)){
var temp__5751__auto__ = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__5751__auto__)){
var cm = temp__5751__auto__;
return ["[crateGroup=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cm),"]"].join('');
} else {
return sel;
}
} else {
if((sel instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,sel);
} else {
return sel;

}
}
}
});
jayq.core.$ = (function jayq$core$$(var_args){
var G__18718 = arguments.length;
switch (G__18718) {
case 1:
return jayq.core.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jayq.core.$.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return jQuery(jayq.core.__GT_selector.call(null,sel));
}));

(jayq.core.$.cljs$core$IFn$_invoke$arity$2 = (function (sel,context){
return jQuery(jayq.core.__GT_selector.call(null,sel),context);
}));

(jayq.core.$.cljs$lang$maxFixedArity = 2);

jayq.core.jquery_QMARK_ = (function jayq$core$jquery_QMARK_(v){
return cljs.core._EQ_.call(null,cljs.core.type.call(null,v),jQuery);
});
(jQuery.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL);

(jQuery.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(this$__$1.get((0)))){
return this$__$1;
} else {
return null;
}
}));

(jQuery.prototype.cljs$core$ISeq$ = cljs.core.PROTOCOL_SENTINEL);

(jQuery.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.get((0));
}));

(jQuery.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this$__$1 = this;
if((cljs.core.count.call(null,this$__$1) > (1))){
return this$__$1.slice((1));
} else {
return cljs.core.List.EMPTY;
}
}));

(jQuery.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL);

(jQuery.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.length;
}));

(jQuery.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL);

(jQuery.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
return null;
}
}));

(jQuery.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
if((void 0 === not_found)){
return null;
} else {
return not_found;
}
}
}));

(jQuery.prototype.cljs$core$ISequential$ = cljs.core.PROTOCOL_SENTINEL);

(jQuery.prototype.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL);

(jQuery.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var this$__$1 = this;
var or__4126__auto__ = this$__$1.slice(k,(k + (1)));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return null;
}
}));

(jQuery.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,k,not_found);
}));

(jQuery.prototype.cljs$core$IReduce$ = cljs.core.PROTOCOL_SENTINEL);

(jQuery.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f);
}));

(jQuery.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f,start);
}));

(jQuery.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL);

(jQuery.prototype.call = (function() {
var G__18721 = null;
var G__18721__2 = (function (self__,k){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__18721__3 = (function (self__,k,not_found){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__18721 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__18721__2.call(this,self__,k);
case 3:
return G__18721__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__18721.cljs$core$IFn$_invoke$arity$2 = G__18721__2;
G__18721.cljs$core$IFn$_invoke$arity$3 = G__18721__3;
return G__18721;
})()
);

(jQuery.prototype.apply = (function (self__,args18720){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args18720)));
}));

(jQuery.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
}));

(jQuery.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
}));
jayq.core.anim = (function jayq$core$anim(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18729 = arguments.length;
var i__4737__auto___18730 = (0);
while(true){
if((i__4737__auto___18730 < len__4736__auto___18729)){
args__4742__auto__.push((arguments[i__4737__auto___18730]));

var G__18731 = (i__4737__auto___18730 + (1));
i__4737__auto___18730 = G__18731;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,props,p__18725){
var vec__18726 = p__18725;
var speed = cljs.core.nth.call(null,vec__18726,(0),null);
var on_finish = cljs.core.nth.call(null,vec__18726,(1),null);
return $elem.animate(cljs.core.clj__GT_js.call(null,props),speed,on_finish);
}));

(jayq.core.anim.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(jayq.core.anim.cljs$lang$applyTo = (function (seq18722){
var G__18723 = cljs.core.first.call(null,seq18722);
var seq18722__$1 = cljs.core.next.call(null,seq18722);
var G__18724 = cljs.core.first.call(null,seq18722__$1);
var seq18722__$2 = cljs.core.next.call(null,seq18722__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18723,G__18724,seq18722__$2);
}));

jayq.core.text = (function jayq$core$text(var_args){
var G__18733 = arguments.length;
switch (G__18733) {
case 1:
return jayq.core.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jayq.core.text.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.text();
}));

(jayq.core.text.cljs$core$IFn$_invoke$arity$2 = (function ($elem,txt){
return $elem.text(txt);
}));

(jayq.core.text.cljs$lang$maxFixedArity = 2);

jayq.core.css = (function jayq$core$css(var_args){
var G__18736 = arguments.length;
switch (G__18736) {
case 2:
return jayq.core.css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jayq.core.css.cljs$core$IFn$_invoke$arity$2 = (function ($elem,opts){
return $elem.css(cljs.core.clj__GT_js.call(null,opts));
}));

(jayq.core.css.cljs$core$IFn$_invoke$arity$3 = (function ($elem,p,v){
return $elem.css(cljs.core.name.call(null,p),v);
}));

(jayq.core.css.cljs$lang$maxFixedArity = 3);

jayq.core.attr = (function jayq$core$attr(var_args){
var G__18739 = arguments.length;
switch (G__18739) {
case 3:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jayq.core.attr.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.attr(cljs.core.name.call(null,n),v);
}));

(jayq.core.attr.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.attr(cljs.core.clj__GT_js.call(null,x));
}));

(jayq.core.attr.cljs$lang$maxFixedArity = 3);

jayq.core.prop = (function jayq$core$prop(var_args){
var G__18742 = arguments.length;
switch (G__18742) {
case 3:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jayq.core.prop.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.prop(cljs.core.name.call(null,n),v);
}));

(jayq.core.prop.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.prop(cljs.core.clj__GT_js.call(null,x));
}));

(jayq.core.prop.cljs$lang$maxFixedArity = 3);

jayq.core.remove_attr = (function jayq$core$remove_attr($elem,a){
return $elem.removeAttr(cljs.core.name.call(null,a));
});
jayq.core.remove_prop = (function jayq$core$remove_prop($elem,a){
return $elem.removeProp(cljs.core.name.call(null,a));
});
jayq.core.data = (function jayq$core$data(var_args){
var G__18745 = arguments.length;
switch (G__18745) {
case 1:
return jayq.core.data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jayq.core.data.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.data();
}));

(jayq.core.data.cljs$core$IFn$_invoke$arity$2 = (function ($elem,k){
return $elem.data(cljs.core.clj__GT_js.call(null,k));
}));

(jayq.core.data.cljs$core$IFn$_invoke$arity$3 = (function ($elem,k,v){
return $elem.data(cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));
}));

(jayq.core.data.cljs$lang$maxFixedArity = 3);

jayq.core.add_class = (function jayq$core$add_class($elem,cl){
return $elem.addClass(cljs.core.name.call(null,cl));
});
jayq.core.remove_class = (function jayq$core$remove_class(var_args){
var G__18748 = arguments.length;
switch (G__18748) {
case 1:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.removeClass();
}));

(jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.removeClass(cljs.core.name.call(null,cl));
}));

(jayq.core.remove_class.cljs$lang$maxFixedArity = 2);

jayq.core.toggle_class = (function jayq$core$toggle_class(var_args){
var G__18751 = arguments.length;
switch (G__18751) {
case 2:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.toggleClass(cljs.core.name.call(null,cl));
}));

(jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function ($elem,cl,switch$){
return $elem.toggleClass(cljs.core.name.call(null,cl),cljs.core.boolean$.call(null,switch$));
}));

(jayq.core.toggle_class.cljs$lang$maxFixedArity = 3);

jayq.core.has_class = (function jayq$core$has_class($elem,cl){
return $elem.hasClass(cljs.core.name.call(null,cl));
});
jayq.core.is = (function jayq$core$is($elem,selector){
return $elem.is(jayq.core.__GT_selector.call(null,selector));
});
jayq.core.after = (function jayq$core$after($elem,content){
return $elem.after(content);
});
jayq.core.before = (function jayq$core$before($elem,content){
return $elem.before(content);
});
jayq.core.append = (function jayq$core$append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function jayq$core$prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.append_to = (function jayq$core$append_to($elem,target){
return $elem.appendTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.prepend_to = (function jayq$core$prepend_to($elem,target){
return $elem.prependTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_before = (function jayq$core$insert_before($elem,target){
return $elem.insertBefore(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_after = (function jayq$core$insert_after($elem,target){
return $elem.insertAfter(jayq.core.__GT_selector.call(null,target));
});
jayq.core.replace_with = (function jayq$core$replace_with($elem,content){
return $elem.replaceWith(content);
});
jayq.core.remove = (function jayq$core$remove($elem){
return $elem.remove();
});
jayq.core.hide = (function jayq$core$hide(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18759 = arguments.length;
var i__4737__auto___18760 = (0);
while(true){
if((i__4737__auto___18760 < len__4736__auto___18759)){
args__4742__auto__.push((arguments[i__4737__auto___18760]));

var G__18761 = (i__4737__auto___18760 + (1));
i__4737__auto___18760 = G__18761;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__18755){
var vec__18756 = p__18755;
var speed = cljs.core.nth.call(null,vec__18756,(0),null);
var on_finish = cljs.core.nth.call(null,vec__18756,(1),null);
return $elem.hide(speed,on_finish);
}));

(jayq.core.hide.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(jayq.core.hide.cljs$lang$applyTo = (function (seq18753){
var G__18754 = cljs.core.first.call(null,seq18753);
var seq18753__$1 = cljs.core.next.call(null,seq18753);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18754,seq18753__$1);
}));

jayq.core.show = (function jayq$core$show(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18768 = arguments.length;
var i__4737__auto___18769 = (0);
while(true){
if((i__4737__auto___18769 < len__4736__auto___18768)){
args__4742__auto__.push((arguments[i__4737__auto___18769]));

var G__18770 = (i__4737__auto___18769 + (1));
i__4737__auto___18769 = G__18770;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(jayq.core.show.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__18764){
var vec__18765 = p__18764;
var speed = cljs.core.nth.call(null,vec__18765,(0),null);
var on_finish = cljs.core.nth.call(null,vec__18765,(1),null);
return $elem.show(speed,on_finish);
}));

(jayq.core.show.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(jayq.core.show.cljs$lang$applyTo = (function (seq18762){
var G__18763 = cljs.core.first.call(null,seq18762);
var seq18762__$1 = cljs.core.next.call(null,seq18762);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18763,seq18762__$1);
}));

jayq.core.toggle = (function jayq$core$toggle(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18777 = arguments.length;
var i__4737__auto___18778 = (0);
while(true){
if((i__4737__auto___18778 < len__4736__auto___18777)){
args__4742__auto__.push((arguments[i__4737__auto___18778]));

var G__18779 = (i__4737__auto___18778 + (1));
i__4737__auto___18778 = G__18779;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__18773){
var vec__18774 = p__18773;
var speed = cljs.core.nth.call(null,vec__18774,(0),null);
var on_finish = cljs.core.nth.call(null,vec__18774,(1),null);
return $elem.toggle(speed,on_finish);
}));

(jayq.core.toggle.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(jayq.core.toggle.cljs$lang$applyTo = (function (seq18771){
var G__18772 = cljs.core.first.call(null,seq18771);
var seq18771__$1 = cljs.core.next.call(null,seq18771);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18772,seq18771__$1);
}));

jayq.core.fade_out = (function jayq$core$fade_out(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18786 = arguments.length;
var i__4737__auto___18787 = (0);
while(true){
if((i__4737__auto___18787 < len__4736__auto___18786)){
args__4742__auto__.push((arguments[i__4737__auto___18787]));

var G__18788 = (i__4737__auto___18787 + (1));
i__4737__auto___18787 = G__18788;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__18782){
var vec__18783 = p__18782;
var speed = cljs.core.nth.call(null,vec__18783,(0),null);
var on_finish = cljs.core.nth.call(null,vec__18783,(1),null);
return $elem.fadeOut(speed,on_finish);
}));

(jayq.core.fade_out.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(jayq.core.fade_out.cljs$lang$applyTo = (function (seq18780){
var G__18781 = cljs.core.first.call(null,seq18780);
var seq18780__$1 = cljs.core.next.call(null,seq18780);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18781,seq18780__$1);
}));

jayq.core.fade_in = (function jayq$core$fade_in(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18795 = arguments.length;
var i__4737__auto___18796 = (0);
while(true){
if((i__4737__auto___18796 < len__4736__auto___18795)){
args__4742__auto__.push((arguments[i__4737__auto___18796]));

var G__18797 = (i__4737__auto___18796 + (1));
i__4737__auto___18796 = G__18797;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__18791){
var vec__18792 = p__18791;
var speed = cljs.core.nth.call(null,vec__18792,(0),null);
var on_finish = cljs.core.nth.call(null,vec__18792,(1),null);
return $elem.fadeIn(speed,on_finish);
}));

(jayq.core.fade_in.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(jayq.core.fade_in.cljs$lang$applyTo = (function (seq18789){
var G__18790 = cljs.core.first.call(null,seq18789);
var seq18789__$1 = cljs.core.next.call(null,seq18789);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18790,seq18789__$1);
}));

jayq.core.slide_up = (function jayq$core$slide_up(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18804 = arguments.length;
var i__4737__auto___18805 = (0);
while(true){
if((i__4737__auto___18805 < len__4736__auto___18804)){
args__4742__auto__.push((arguments[i__4737__auto___18805]));

var G__18806 = (i__4737__auto___18805 + (1));
i__4737__auto___18805 = G__18806;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__18800){
var vec__18801 = p__18800;
var speed = cljs.core.nth.call(null,vec__18801,(0),null);
var on_finish = cljs.core.nth.call(null,vec__18801,(1),null);
return $elem.slideUp(speed,on_finish);
}));

(jayq.core.slide_up.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(jayq.core.slide_up.cljs$lang$applyTo = (function (seq18798){
var G__18799 = cljs.core.first.call(null,seq18798);
var seq18798__$1 = cljs.core.next.call(null,seq18798);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18799,seq18798__$1);
}));

jayq.core.slide_down = (function jayq$core$slide_down(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18813 = arguments.length;
var i__4737__auto___18814 = (0);
while(true){
if((i__4737__auto___18814 < len__4736__auto___18813)){
args__4742__auto__.push((arguments[i__4737__auto___18814]));

var G__18815 = (i__4737__auto___18814 + (1));
i__4737__auto___18814 = G__18815;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__18809){
var vec__18810 = p__18809;
var speed = cljs.core.nth.call(null,vec__18810,(0),null);
var on_finish = cljs.core.nth.call(null,vec__18810,(1),null);
return $elem.slideDown(speed,on_finish);
}));

(jayq.core.slide_down.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(jayq.core.slide_down.cljs$lang$applyTo = (function (seq18807){
var G__18808 = cljs.core.first.call(null,seq18807);
var seq18807__$1 = cljs.core.next.call(null,seq18807);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18808,seq18807__$1);
}));

jayq.core.siblings = (function jayq$core$siblings(var_args){
var G__18817 = arguments.length;
switch (G__18817) {
case 1:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jayq.core.siblings.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.siblings();
}));

(jayq.core.siblings.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.siblings(cljs.core.name.call(null,selector));
}));

(jayq.core.siblings.cljs$lang$maxFixedArity = 2);

jayq.core.parent = (function jayq$core$parent($elem){
return $elem.parent();
});
jayq.core.parents = (function jayq$core$parents(var_args){
var G__18820 = arguments.length;
switch (G__18820) {
case 1:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jayq.core.parents.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parents();
}));

(jayq.core.parents.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parents(cljs.core.name.call(null,selector));
}));

(jayq.core.parents.cljs$lang$maxFixedArity = 2);

jayq.core.parents_until = (function jayq$core$parents_until(var_args){
var G__18823 = arguments.length;
switch (G__18823) {
case 1:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parentsUntil();
}));

(jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector));
}));

(jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
}));

(jayq.core.parents_until.cljs$lang$maxFixedArity = 3);

jayq.core.children = (function jayq$core$children(var_args){
var G__18826 = arguments.length;
switch (G__18826) {
case 2:
return jayq.core.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jayq.core.children.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.children(cljs.core.name.call(null,selector));
}));

(jayq.core.children.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.children();
}));

(jayq.core.children.cljs$lang$maxFixedArity = 2);

jayq.core.next = (function jayq$core$next(var_args){
var G__18829 = arguments.length;
switch (G__18829) {
case 1:
return jayq.core.next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jayq.core.next.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.next();
}));

(jayq.core.next.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.next(cljs.core.name.call(null,selector));
}));

(jayq.core.next.cljs$lang$maxFixedArity = 2);

jayq.core.prev = (function jayq$core$prev(var_args){
var G__18832 = arguments.length;
switch (G__18832) {
case 1:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jayq.core.prev.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prev();
}));

(jayq.core.prev.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prev(cljs.core.name.call(null,selector));
}));

(jayq.core.prev.cljs$lang$maxFixedArity = 2);

jayq.core.next_all = (function jayq$core$next_all(var_args){
var G__18835 = arguments.length;
switch (G__18835) {
case 1:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jayq.core.next_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextAll();
}));

(jayq.core.next_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextAll(cljs.core.name.call(null,selector));
}));

(jayq.core.next_all.cljs$lang$maxFixedArity = 2);

jayq.core.prev_all = (function jayq$core$prev_all(var_args){
var G__18838 = arguments.length;
switch (G__18838) {
case 1:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevAll();
}));

(jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevAll(cljs.core.name.call(null,selector));
}));

(jayq.core.prev_all.cljs$lang$maxFixedArity = 2);

jayq.core.next_until = (function jayq$core$next_until(var_args){
var G__18841 = arguments.length;
switch (G__18841) {
case 1:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jayq.core.next_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextUntil();
}));

(jayq.core.next_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector));
}));

(jayq.core.next_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
}));

(jayq.core.next_until.cljs$lang$maxFixedArity = 3);

jayq.core.prev_until = (function jayq$core$prev_until(var_args){
var G__18844 = arguments.length;
switch (G__18844) {
case 1:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevUntil();
}));

(jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector));
}));

(jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
}));

(jayq.core.prev_until.cljs$lang$maxFixedArity = 3);

jayq.core.find = (function jayq$core$find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.closest = (function jayq$core$closest(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18853 = arguments.length;
var i__4737__auto___18854 = (0);
while(true){
if((i__4737__auto___18854 < len__4736__auto___18853)){
args__4742__auto__.push((arguments[i__4737__auto___18854]));

var G__18855 = (i__4737__auto___18854 + (1));
i__4737__auto___18854 = G__18855;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,selector,p__18849){
var vec__18850 = p__18849;
var context = cljs.core.nth.call(null,vec__18850,(0),null);
return $elem.closest(jayq.core.__GT_selector.call(null,selector),context);
}));

(jayq.core.closest.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(jayq.core.closest.cljs$lang$applyTo = (function (seq18846){
var G__18847 = cljs.core.first.call(null,seq18846);
var seq18846__$1 = cljs.core.next.call(null,seq18846);
var G__18848 = cljs.core.first.call(null,seq18846__$1);
var seq18846__$2 = cljs.core.next.call(null,seq18846__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18847,G__18848,seq18846__$2);
}));

jayq.core.clone = (function jayq$core$clone($elem){
return $elem.clone();
});
jayq.core.html = (function jayq$core$html(var_args){
var G__18857 = arguments.length;
switch (G__18857) {
case 2:
return jayq.core.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jayq.core.html.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.html(v);
}));

(jayq.core.html.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.html();
}));

(jayq.core.html.cljs$lang$maxFixedArity = 2);

jayq.core.inner = jayq.core.html;
jayq.core.empty = (function jayq$core$empty($elem){
return $elem.empty();
});
jayq.core.val = (function jayq$core$val(var_args){
var G__18860 = arguments.length;
switch (G__18860) {
case 2:
return jayq.core.val.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.val.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jayq.core.val.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.val(v);
}));

(jayq.core.val.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.val();
}));

(jayq.core.val.cljs$lang$maxFixedArity = 2);

jayq.core.serialize = (function jayq$core$serialize($elem){
return $elem.serialize();
});
jayq.core.queue = (function jayq$core$queue(var_args){
var G__18863 = arguments.length;
switch (G__18863) {
case 3:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jayq.core.queue.cljs$core$IFn$_invoke$arity$3 = (function ($elem,x,y){
return $elem.queue(x,y);
}));

(jayq.core.queue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.queue(x);
}));

(jayq.core.queue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.queue();
}));

(jayq.core.queue.cljs$lang$maxFixedArity = 3);

jayq.core.dequeue = (function jayq$core$dequeue(var_args){
var G__18866 = arguments.length;
switch (G__18866) {
case 2:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,queue_name){
return $elem.dequeue(queue_name);
}));

(jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.dequeue();
}));

(jayq.core.dequeue.cljs$lang$maxFixedArity = 2);

jayq.core.document_ready = (function jayq$core$document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
jayq.core.mimetype_converter = (function jayq$core$mimetype_converter(s){
return cljs.reader.read_string.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
});
jQuery.ajaxSetup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"accepts","accepts",1429714104),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edn","edn",1317840885),"application/edn, text/edn",new cljs.core.Keyword(null,"clojure","clojure",438975815),"application/clojure, text/clojure"], null),new cljs.core.Keyword(null,"contents","contents",-1567174023),new cljs.core.PersistentArrayMap(null, 1, ["clojure",/edn|clojure/], null),new cljs.core.Keyword(null,"converters","converters",195533259),new cljs.core.PersistentArrayMap(null, 2, ["text edn",jayq.core.mimetype_converter,"text clojure",jayq.core.mimetype_converter], null)], null)));
jayq.core.clj_content_type_QMARK_ = (function jayq$core$clj_content_type_QMARK_(x){
return cljs.core.re_find.call(null,/^(text|application)\/(clojure|edn)/,x);
});
jayq.core.__GT_content_type = (function jayq$core$__GT_content_type(ct){
if(typeof ct === 'string'){
return ct;
} else {
if((ct instanceof cljs.core.Keyword)){
return cljs.core.subs.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ct),(1));
} else {
return null;
}
}
});
jayq.core.preprocess_request = (function jayq$core$preprocess_request(p__18870){
var map__18871 = p__18870;
var map__18871__$1 = (((((!((map__18871 == null))))?(((((map__18871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18871):map__18871);
var request = map__18871__$1;
var data = cljs.core.get.call(null,map__18871__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var contentType = cljs.core.get.call(null,map__18871__$1,new cljs.core.Keyword(null,"contentType","contentType",-1462509576));
var ct = jayq.core.__GT_content_type.call(null,contentType);
return (function (p1__18869_SHARP_){
if(cljs.core.truth_((function (){var and__4115__auto__ = ct;
if(cljs.core.truth_(and__4115__auto__)){
return jayq.core.clj_content_type_QMARK_.call(null,ct);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.call(null,p1__18869_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.pr_str.call(null,data));
} else {
return p1__18869_SHARP_;
}
}).call(null,(function (p1__18868_SHARP_){
if(cljs.core.truth_(ct)){
return cljs.core.assoc.call(null,p1__18868_SHARP_,new cljs.core.Keyword(null,"contentType","contentType",-1462509576),ct);
} else {
return p1__18868_SHARP_;
}
}).call(null,request));
});
jayq.core.__GT_ajax_settings = (function jayq$core$__GT_ajax_settings(request){
return cljs.core.clj__GT_js.call(null,jayq.core.preprocess_request.call(null,request));
});
jayq.core.ajax = (function jayq$core$ajax(var_args){
var G__18874 = arguments.length;
switch (G__18874) {
case 2:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jayq.core.ajax.cljs$core$IFn$_invoke$arity$2 = (function (url,settings){
return jQuery.ajax(url,jayq.core.__GT_ajax_settings.call(null,settings));
}));

(jayq.core.ajax.cljs$core$IFn$_invoke$arity$1 = (function (settings){
return jQuery.ajax(jayq.core.__GT_ajax_settings.call(null,settings));
}));

(jayq.core.ajax.cljs$lang$maxFixedArity = 2);

jayq.core.xhr = (function jayq$core$xhr(p__18876,content,callback){
var vec__18877 = p__18876;
var method = cljs.core.nth.call(null,vec__18877,(0),null);
var uri = cljs.core.nth.call(null,vec__18877,(1),null);
var params = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),clojure.string.upper_case.call(null,cljs.core.name.call(null,method)),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.clj__GT_js.call(null,content),new cljs.core.Keyword(null,"success","success",1890645906),callback], null));
return jQuery.ajax(uri,params);
});
/**
 * Reads clojure data from element content (preferably a script tag with type=edn/clojure)
 */
jayq.core.read = (function jayq$core$read($elem){
return cljs.reader.read_string.call(null,jayq.core.html.call(null,$elem));
});
jayq.core.$contains = jQuery.contains;
jayq.core.bind = (function jayq$core$bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.unbind = (function jayq$core$unbind(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18887 = arguments.length;
var i__4737__auto___18888 = (0);
while(true){
if((i__4737__auto___18888 < len__4736__auto___18887)){
args__4742__auto__.push((arguments[i__4737__auto___18888]));

var G__18889 = (i__4737__auto___18888 + (1));
i__4737__auto___18888 = G__18889;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,ev,p__18883){
var vec__18884 = p__18883;
var func = cljs.core.nth.call(null,vec__18884,(0),null);
return $elem.unbind(cljs.core.name.call(null,ev),func);
}));

(jayq.core.unbind.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(jayq.core.unbind.cljs$lang$applyTo = (function (seq18880){
var G__18881 = cljs.core.first.call(null,seq18880);
var seq18880__$1 = cljs.core.next.call(null,seq18880);
var G__18882 = cljs.core.first.call(null,seq18880__$1);
var seq18880__$2 = cljs.core.next.call(null,seq18880__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18881,G__18882,seq18880__$2);
}));

jayq.core.trigger = (function jayq$core$trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function jayq$core$delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.__GT_event = (function jayq$core$__GT_event(e){
if(cljs.core.coll_QMARK_.call(null,e)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,e));
} else {
return cljs.core.clj__GT_js.call(null,e);
}
});
jayq.core.on = (function jayq$core$on(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18897 = arguments.length;
var i__4737__auto___18898 = (0);
while(true){
if((i__4737__auto___18898 < len__4736__auto___18897)){
args__4742__auto__.push((arguments[i__4737__auto___18898]));

var G__18899 = (i__4737__auto___18898 + (1));
i__4737__auto___18898 = G__18899;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(jayq.core.on.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__18893){
var vec__18894 = p__18893;
var sel = cljs.core.nth.call(null,vec__18894,(0),null);
var data = cljs.core.nth.call(null,vec__18894,(1),null);
var handler = cljs.core.nth.call(null,vec__18894,(2),null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
}));

(jayq.core.on.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(jayq.core.on.cljs$lang$applyTo = (function (seq18890){
var G__18891 = cljs.core.first.call(null,seq18890);
var seq18890__$1 = cljs.core.next.call(null,seq18890);
var G__18892 = cljs.core.first.call(null,seq18890__$1);
var seq18890__$2 = cljs.core.next.call(null,seq18890__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18891,G__18892,seq18890__$2);
}));

jayq.core.one = (function jayq$core$one(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18907 = arguments.length;
var i__4737__auto___18908 = (0);
while(true){
if((i__4737__auto___18908 < len__4736__auto___18907)){
args__4742__auto__.push((arguments[i__4737__auto___18908]));

var G__18909 = (i__4737__auto___18908 + (1));
i__4737__auto___18908 = G__18909;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(jayq.core.one.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__18903){
var vec__18904 = p__18903;
var sel = cljs.core.nth.call(null,vec__18904,(0),null);
var data = cljs.core.nth.call(null,vec__18904,(1),null);
var handler = cljs.core.nth.call(null,vec__18904,(2),null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
}));

(jayq.core.one.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(jayq.core.one.cljs$lang$applyTo = (function (seq18900){
var G__18901 = cljs.core.first.call(null,seq18900);
var seq18900__$1 = cljs.core.next.call(null,seq18900);
var G__18902 = cljs.core.first.call(null,seq18900__$1);
var seq18900__$2 = cljs.core.next.call(null,seq18900__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18901,G__18902,seq18900__$2);
}));

jayq.core.off = (function jayq$core$off(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18917 = arguments.length;
var i__4737__auto___18918 = (0);
while(true){
if((i__4737__auto___18918 < len__4736__auto___18917)){
args__4742__auto__.push((arguments[i__4737__auto___18918]));

var G__18919 = (i__4737__auto___18918 + (1));
i__4737__auto___18918 = G__18919;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(jayq.core.off.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__18913){
var vec__18914 = p__18913;
var sel = cljs.core.nth.call(null,vec__18914,(0),null);
var handler = cljs.core.nth.call(null,vec__18914,(1),null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),handler);
}));

(jayq.core.off.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(jayq.core.off.cljs$lang$applyTo = (function (seq18910){
var G__18911 = cljs.core.first.call(null,seq18910);
var seq18910__$1 = cljs.core.next.call(null,seq18910);
var G__18912 = cljs.core.first.call(null,seq18910__$1);
var seq18910__$2 = cljs.core.next.call(null,seq18910__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18911,G__18912,seq18910__$2);
}));

jayq.core.prevent = (function jayq$core$prevent(e){
return e.preventDefault();
});
jayq.core.height = (function jayq$core$height(var_args){
var G__18921 = arguments.length;
switch (G__18921) {
case 2:
return jayq.core.height.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.height.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jayq.core.height.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.height(x);
}));

(jayq.core.height.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.height();
}));

(jayq.core.height.cljs$lang$maxFixedArity = 2);

jayq.core.width = (function jayq$core$width(var_args){
var G__18924 = arguments.length;
switch (G__18924) {
case 2:
return jayq.core.width.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.width.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jayq.core.width.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.width(x);
}));

(jayq.core.width.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.width();
}));

(jayq.core.width.cljs$lang$maxFixedArity = 2);

jayq.core.inner_height = (function jayq$core$inner_height($elem){
return $elem.innerHeight();
});
jayq.core.inner_width = (function jayq$core$inner_width($elem){
return $elem.innerWidth();
});
jayq.core.outer_height = (function jayq$core$outer_height($elem){
return $elem.outerHeight();
});
jayq.core.outer_width = (function jayq$core$outer_width($elem){
return $elem.outerWidth();
});
jayq.core.offset = (function jayq$core$offset(var_args){
var G__18927 = arguments.length;
switch (G__18927) {
case 2:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jayq.core.offset.cljs$core$IFn$_invoke$arity$2 = (function ($elem,coords){
return cljs.core.clj__GT_js.call(null,coords).offset();
}));

(jayq.core.offset.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return cljs.core.js__GT_clj.call(null,$elem.offset(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}));

(jayq.core.offset.cljs$lang$maxFixedArity = 2);

jayq.core.offset_parent = (function jayq$core$offset_parent($elem){
return $elem.offsetParent();
});
jayq.core.position = (function jayq$core$position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
jayq.core.scroll_left = (function jayq$core$scroll_left(var_args){
var G__18930 = arguments.length;
switch (G__18930) {
case 1:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollLeft();
}));

(jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollLeft(x);
}));

(jayq.core.scroll_left.cljs$lang$maxFixedArity = 2);

jayq.core.scroll_top = (function jayq$core$scroll_top(var_args){
var G__18933 = arguments.length;
switch (G__18933) {
case 1:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollTop();
}));

(jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollTop(x);
}));

(jayq.core.scroll_top.cljs$lang$maxFixedArity = 2);

jayq.core.$deferred = jQuery.Deferred;
jayq.core.$when = jQuery.when;
jayq.core.then = (function jayq$core$then(var_args){
var G__18936 = arguments.length;
switch (G__18936) {
case 3:
return jayq.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.then.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jayq.core.then.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_fn,fail_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn));
}));

(jayq.core.then.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_fn,fail_fn,progress_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn),cljs.core.clj__GT_js.call(null,progress_fn));
}));

(jayq.core.then.cljs$lang$maxFixedArity = 4);

jayq.core.done = (function jayq$core$done(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18940 = arguments.length;
var i__4737__auto___18941 = (0);
while(true){
if((i__4737__auto___18941 < len__4736__auto___18940)){
args__4742__auto__.push((arguments[i__4737__auto___18941]));

var G__18942 = (i__4737__auto___18941 + (1));
i__4737__auto___18941 = G__18942;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(jayq.core.done.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.done.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
}));

(jayq.core.done.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(jayq.core.done.cljs$lang$applyTo = (function (seq18938){
var G__18939 = cljs.core.first.call(null,seq18938);
var seq18938__$1 = cljs.core.next.call(null,seq18938);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18939,seq18938__$1);
}));

jayq.core.fail = (function jayq$core$fail(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18945 = arguments.length;
var i__4737__auto___18946 = (0);
while(true){
if((i__4737__auto___18946 < len__4736__auto___18945)){
args__4742__auto__.push((arguments[i__4737__auto___18946]));

var G__18947 = (i__4737__auto___18946 + (1));
i__4737__auto___18946 = G__18947;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.fail.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
}));

(jayq.core.fail.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(jayq.core.fail.cljs$lang$applyTo = (function (seq18943){
var G__18944 = cljs.core.first.call(null,seq18943);
var seq18943__$1 = cljs.core.next.call(null,seq18943);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18944,seq18943__$1);
}));

jayq.core.progress = (function jayq$core$progress(deferred,fns_args){
return deferred.progress(cljs.core.clj__GT_js.call(null,fns_args));
});
jayq.core.promise = (function jayq$core$promise(var_args){
var G__18949 = arguments.length;
switch (G__18949) {
case 1:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jayq.core.promise.cljs$core$IFn$_invoke$arity$1 = (function (deferred){
return deferred.promise();
}));

(jayq.core.promise.cljs$core$IFn$_invoke$arity$2 = (function (deferred,type){
return deferred.promise(type);
}));

(jayq.core.promise.cljs$core$IFn$_invoke$arity$3 = (function (deferred,type,target){
return deferred.promise(type,target);
}));

(jayq.core.promise.cljs$lang$maxFixedArity = 3);

jayq.core.always = (function jayq$core$always(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18953 = arguments.length;
var i__4737__auto___18954 = (0);
while(true){
if((i__4737__auto___18954 < len__4736__auto___18953)){
args__4742__auto__.push((arguments[i__4737__auto___18954]));

var G__18955 = (i__4737__auto___18954 + (1));
i__4737__auto___18954 = G__18955;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(jayq.core.always.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.always.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
}));

(jayq.core.always.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(jayq.core.always.cljs$lang$applyTo = (function (seq18951){
var G__18952 = cljs.core.first.call(null,seq18951);
var seq18951__$1 = cljs.core.next.call(null,seq18951);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18952,seq18951__$1);
}));

jayq.core.reject = (function jayq$core$reject(deferred,args){
return deferred.reject(args);
});
jayq.core.reject_with = (function jayq$core$reject_with(deferred,context,args){
return deferred.rejectWith(context,args);
});
jayq.core.notify = (function jayq$core$notify(deferred,args){
return deferred.notify(args);
});
jayq.core.notify_with = (function jayq$core$notify_with(deferred,context,args){
return deferred.notifyWith(context,args);
});
jayq.core.resolve = (function jayq$core$resolve(deferred,args){
return deferred.resolve(args);
});
jayq.core.resolve_with = (function jayq$core$resolve_with(deferred,context,args){
return deferred.resolveWith(context,args);
});
jayq.core.pipe = (function jayq$core$pipe(var_args){
var G__18957 = arguments.length;
switch (G__18957) {
case 2:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jayq.core.pipe.cljs$core$IFn$_invoke$arity$2 = (function (deferred,done_filter){
return deferred.pipe(done_filter);
}));

(jayq.core.pipe.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_filter,fail_filter){
return deferred.pipe(done_filter,fail_filter);
}));

(jayq.core.pipe.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_filter,fail_filter,progress_filter){
return deferred.pipe(done_filter,fail_filter,progress_filter);
}));

(jayq.core.pipe.cljs$lang$maxFixedArity = 4);

jayq.core.state = (function jayq$core$state(deferred){
return cljs.core.keyword.call(null,deferred.state());
});
jayq.core.deferred_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),jayq.core.$when,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
var dfd = jayq.core.$deferred.call(null);
jayq.core.done.call(null,x,(function (v){
return jayq.core.done.call(null,f.call(null,v),cljs.core.partial.call(null,jayq.core.resolve,dfd));
}));

return jayq.core.promise.call(null,dfd);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);
jayq.core.ajax_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),cljs.core.identity,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
return jayq.core.done.call(null,jayq.core.ajax.call(null,x),f);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);

//# sourceMappingURL=core.js.map
