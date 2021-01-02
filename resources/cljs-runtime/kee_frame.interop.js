goog.provide('kee_frame.interop');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {kee_frame.api.Navigator}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
kee_frame.interop.AccountantNavigator = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(kee_frame.interop.AccountantNavigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k38632,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__38636 = k38632;
switch (G__38636) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38632,else__4383__auto__);

}
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__38637){
var vec__38638 = p__38637;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38638,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38638,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#kee-frame.interop.AccountantNavigator{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38631){
var self__ = this;
var G__38631__$1 = this;
return (new cljs.core.RecordIter((0),G__38631__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new kee_frame.interop.AccountantNavigator(self__.__meta,self__.__extmap,self__.__hash));
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(kee_frame.interop.AccountantNavigator.prototype.kee_frame$api$Navigator$ = cljs.core.PROTOCOL_SENTINEL);

(kee_frame.interop.AccountantNavigator.prototype.kee_frame$api$Navigator$dispatch_current_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return accountant.core.dispatch_current_BANG_();
}));

(kee_frame.interop.AccountantNavigator.prototype.kee_frame$api$Navigator$navigate_BANG_$arity$2 = (function (_,url){
var self__ = this;
var ___$1 = this;
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1(url);
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1922069210 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38633,other38634){
var self__ = this;
var this38633__$1 = this;
return (((!((other38634 == null)))) && ((this38633__$1.constructor === other38634.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38633__$1.__extmap,other38634.__extmap)));
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new kee_frame.interop.AccountantNavigator(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__38631){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__38643 = cljs.core.keyword_identical_QMARK_;
var expr__38644 = k__4388__auto__;
return (new kee_frame.interop.AccountantNavigator(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__38631),null));
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__38631){
var self__ = this;
var this__4379__auto____$1 = this;
return (new kee_frame.interop.AccountantNavigator(G__38631,self__.__extmap,self__.__hash));
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(kee_frame.interop.AccountantNavigator.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(kee_frame.interop.AccountantNavigator.cljs$lang$type = true);

(kee_frame.interop.AccountantNavigator.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"kee-frame.interop/AccountantNavigator",null,(1),null));
}));

(kee_frame.interop.AccountantNavigator.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"kee-frame.interop/AccountantNavigator");
}));

/**
 * Positional factory function for kee-frame.interop/AccountantNavigator.
 */
kee_frame.interop.__GT_AccountantNavigator = (function kee_frame$interop$__GT_AccountantNavigator(){
return (new kee_frame.interop.AccountantNavigator(null,null,null));
});

/**
 * Factory function for kee-frame.interop/AccountantNavigator, taking a map of keywords to field values.
 */
kee_frame.interop.map__GT_AccountantNavigator = (function kee_frame$interop$map__GT_AccountantNavigator(G__38635){
var extmap__4419__auto__ = (function (){var G__38647 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__38635);
if(cljs.core.record_QMARK_(G__38635)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38647);
} else {
return G__38647;
}
})();
return (new kee_frame.interop.AccountantNavigator(null,cljs.core.not_empty(extmap__4419__auto__),null));
});

kee_frame.interop.make_navigator = (function kee_frame$interop$make_navigator(opts){
accountant.core.configure_navigation_BANG_(opts);

return kee_frame.interop.__GT_AccountantNavigator();
});
kee_frame.interop.render_root = (function kee_frame$interop$render_root(root_component){
if(cljs.core.truth_(root_component)){
var temp__5733__auto__ = document.getElementById("app");
if(cljs.core.truth_(temp__5733__auto__)){
var app_element = temp__5733__auto__;
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(root_component,app_element);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Could not find element with id 'app' to mount app into",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),root_component], null));
}
} else {
return null;
}
});
kee_frame.interop.breakpoints_or_defaults = (function kee_frame$interop$breakpoints_or_defaults(breakpoints){
var or__4126__auto__ = breakpoints;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"debounce-ms","debounce-ms",-1127263167),(166),new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mobile","mobile",1403078170),(768),new cljs.core.Keyword(null,"tablet","tablet",-318585919),(992),new cljs.core.Keyword(null,"small-monitor","small-monitor",-1851699481),(1200),new cljs.core.Keyword(null,"large-monitor","large-monitor",-1142074365)], null)], null);
}
});
kee_frame.interop.set_breakpoint_subs = (function kee_frame$interop$set_breakpoint_subs(breakpoints){
return breaking_point.core.register_subs(new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739).cljs$core$IFn$_invoke$arity$1(kee_frame.interop.breakpoints_or_defaults(breakpoints)));
});
kee_frame.interop.set_breakpoints = (function kee_frame$interop$set_breakpoints(breakpoints){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-breakpoints","breaking-point.core/set-breakpoints",607629013),kee_frame.interop.breakpoints_or_defaults(breakpoints)], null));
});
kee_frame.interop.set_log_level_BANG_ = (function kee_frame$interop$set_log_level_BANG_(p__38649){
var map__38650 = p__38649;
var map__38650__$1 = (((((!((map__38650 == null))))?(((((map__38650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38650):map__38650);
var overwrites_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38650__$1,new cljs.core.Keyword(null,"overwrites?","overwrites?",-1906761528),false);
if(cljs.core.truth_(overwrites_QMARK_)){
return null;
} else {
return re_frame.loggers.set_loggers_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warn","warn",-436710552),(function() { 
var G__38670__delegate = function (args){
if(cljs.core.truth_(cljs.core.re_find(/^re-frame: overwriting/,cljs.core.first(args)))){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(console.warn,args);
}
};
var G__38670 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38671__i = 0, G__38671__a = new Array(arguments.length -  0);
while (G__38671__i < G__38671__a.length) {G__38671__a[G__38671__i] = arguments[G__38671__i + 0]; ++G__38671__i;}
  args = new cljs.core.IndexedSeq(G__38671__a,0,null);
} 
return G__38670__delegate.call(this,args);};
G__38670.cljs$lang$maxFixedArity = 0;
G__38670.cljs$lang$applyTo = (function (arglist__38672){
var args = cljs.core.seq(arglist__38672);
return G__38670__delegate(args);
});
G__38670.cljs$core$IFn$_invoke$arity$variadic = G__38670__delegate;
return G__38670;
})()
], null));
}
});
kee_frame.interop.set_timeout = (function kee_frame$interop$set_timeout(f,ms){
return setTimeout(f,ms);
});
kee_frame.interop.clear_timeout = (function kee_frame$interop$clear_timeout(t){
return clearTimeout(t);
});

//# sourceMappingURL=kee_frame.interop.js.map
