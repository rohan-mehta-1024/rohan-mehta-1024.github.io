goog.provide('kee_frame.router');
kee_frame.router.default_chain_links = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"effect-present?","effect-present?",131752804),(function (effects){
return new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714).cljs$core$IFn$_invoke$arity$1(effects);
}),new cljs.core.Keyword(null,"get-dispatch","get-dispatch",-807865793),(function (effects){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.Keyword(null,"on-success","on-success",1786904109)], null));
}),new cljs.core.Keyword(null,"set-dispatch","set-dispatch",2115263401),(function (effects,dispatch){
return cljs.core.assoc_in(effects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.Keyword(null,"on-success","on-success",1786904109)], null),dispatch);
})], null)], null);
kee_frame.router.url = (function kee_frame$router$url(data){
if(cljs.core.truth_(cljs.core.deref(kee_frame.state.router))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No router defined for this app",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),cljs.core.deref(kee_frame.state.router)], null));
}

return kee_frame.api.data__GT_url(cljs.core.deref(kee_frame.state.router),data);
});
kee_frame.router.goto$ = (function kee_frame$router$goto(data){
return kee_frame.api.navigate_BANG_(cljs.core.deref(kee_frame.state.navigator),kee_frame.router.url(data));
});
kee_frame.router.nav_handler = (function kee_frame$router$nav_handler(router,route_change_event){
return (function (path){
var temp__5733__auto__ = kee_frame.api.url__GT_data(router,path);
if(cljs.core.truth_(temp__5733__auto__)){
var route = temp__5733__auto__;
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4126__auto__ = route_change_event;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword("kee-frame.router","route-changed","kee-frame.router/route-changed",8744849);
}
})(),route], null));
} else {
re_frame.core.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"group","group",582596132),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No route match found"], 0));

re_frame.core.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No match found for path ",path], 0));

return re_frame.core.console(new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382));
}
});
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("kee-frame.router","reitit-route-data","kee-frame.router/reitit-route-data",1934241365),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"route-name","route-name",-932603717),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"path-params","path-params",-48130597),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-name","route-name",-932603717),new cljs.core.Keyword(null,"path-params","path-params",-48130597)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.spec.alpha.rep_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.core.any_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__43150){
return cljs.core.map_QMARK_(G__43150);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12717__auto__,v__12718__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12718__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null),null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)))], null)));
kee_frame.router.assert_route_data = (function kee_frame$router$assert_route_data(data){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kee-frame.router","reitit-route-data","kee-frame.router/reitit-route-data",1934241365),data)){
return null;
} else {
expound.alpha.expound.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kee-frame.router","reitit-route-data","kee-frame.router/reitit-route-data",1934241365),data);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Bad route data input",cljs.spec.alpha.explain_data(new cljs.core.Keyword("kee-frame.router","reitit-route-data","kee-frame.router/reitit-route-data",1934241365),data));
}
});
kee_frame.router.url_not_found = (function kee_frame$router$url_not_found(routes,data){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Could not find url for the provided data",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"routes","routes",457900162),routes,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
});
kee_frame.router.route_match_not_found = (function kee_frame$router$route_match_not_found(routes,url){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No match for URL in routes",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"routes","routes",457900162),routes], null));
});
kee_frame.router.match_data = (function kee_frame$router$match_data(routes,route,hash_QMARK_){
var vec__43152 = route;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43152,(0),null);
var path_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43152,(1),null);
return [(cljs.core.truth_(hash_QMARK_)?"/#":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(reitit.core.match_by_name,routes,route))),(function (){var temp__5739__auto__ = new cljs.core.Keyword(null,"query-string","query-string",-1018845061).cljs$core$IFn$_invoke$arity$1(path_params);
if((temp__5739__auto__ == null)){
return null;
} else {
var q = temp__5739__auto__;
return ["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)].join('');
}
})(),(function (){var temp__5739__auto__ = new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(path_params);
if((temp__5739__auto__ == null)){
return null;
} else {
var h = temp__5739__auto__;
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join('');
}
})()].join('');
});
kee_frame.router.match_url = (function kee_frame$router$match_url(routes,url){
var vec__43155 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(clojure.string.replace(url,/^\/#\//,"/"),/#/,(2));
var path_PLUS_query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43155,(0),null);
var fragment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43155,(1),null);
var vec__43158 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(path_PLUS_query,/\?/,(2));
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43158,(0),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43158,(1),null);
var G__43161 = reitit.core.match_by_path(routes,path);
if((G__43161 == null)){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__43161,new cljs.core.Keyword(null,"query-string","query-string",-1018845061),query,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hash","hash",-13781596),fragment], 0));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {kee_frame.api.Router}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
kee_frame.router.ReititRouter = (function (routes,hash_QMARK_,not_found,__meta,__extmap,__hash){
this.routes = routes;
this.hash_QMARK_ = hash_QMARK_;
this.not_found = not_found;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(kee_frame.router.ReititRouter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k43163,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__43167 = k43163;
var G__43167__$1 = (((G__43167 instanceof cljs.core.Keyword))?G__43167.fqn:null);
switch (G__43167__$1) {
case "routes":
return self__.routes;

break;
case "hash?":
return self__.hash_QMARK_;

break;
case "not-found":
return self__.not_found;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k43163,else__4383__auto__);

}
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__43168){
var vec__43169 = p__43168;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43169,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43169,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#kee-frame.router.ReititRouter{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hash?","hash?",-1899275922),self__.hash_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"not-found","not-found",-629079980),self__.not_found],null))], null),self__.__extmap));
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43162){
var self__ = this;
var G__43162__$1 = this;
return (new cljs.core.RecordIter((0),G__43162__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"hash?","hash?",-1899275922),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new kee_frame.router.ReititRouter(self__.routes,self__.hash_QMARK_,self__.not_found,self__.__meta,self__.__extmap,self__.__hash));
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1127529290 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43164,other43165){
var self__ = this;
var this43164__$1 = this;
return (((!((other43165 == null)))) && ((this43164__$1.constructor === other43165.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43164__$1.routes,other43165.routes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43164__$1.hash_QMARK_,other43165.hash_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43164__$1.not_found,other43165.not_found)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43164__$1.__extmap,other43165.__extmap)));
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"routes","routes",457900162),null,new cljs.core.Keyword(null,"hash?","hash?",-1899275922),null,new cljs.core.Keyword(null,"not-found","not-found",-629079980),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new kee_frame.router.ReititRouter(self__.routes,self__.hash_QMARK_,self__.not_found,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(kee_frame.router.ReititRouter.prototype.kee_frame$api$Router$ = cljs.core.PROTOCOL_SENTINEL);

(kee_frame.router.ReititRouter.prototype.kee_frame$api$Router$data__GT_url$arity$2 = (function (_,data){
var self__ = this;
var ___$1 = this;
kee_frame.router.assert_route_data(data);

var or__4126__auto__ = kee_frame.router.match_data(self__.routes,data,self__.hash_QMARK_);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return kee_frame.router.url_not_found(self__.routes,data);
}
}));

(kee_frame.router.ReititRouter.prototype.kee_frame$api$Router$url__GT_data$arity$2 = (function (_,url){
var self__ = this;
var ___$1 = this;
var or__4126__auto__ = kee_frame.router.match_url(self__.routes,url);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var G__43177 = self__.not_found;
if((G__43177 == null)){
return null;
} else {
return kee_frame.router.match_url(self__.routes,G__43177);
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return kee_frame.router.route_match_not_found(self__.routes,url);
}
}
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__43162){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__43178 = cljs.core.keyword_identical_QMARK_;
var expr__43179 = k__4388__auto__;
if(cljs.core.truth_((pred__43178.cljs$core$IFn$_invoke$arity$2 ? pred__43178.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"routes","routes",457900162),expr__43179) : pred__43178.call(null,new cljs.core.Keyword(null,"routes","routes",457900162),expr__43179)))){
return (new kee_frame.router.ReititRouter(G__43162,self__.hash_QMARK_,self__.not_found,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43178.cljs$core$IFn$_invoke$arity$2 ? pred__43178.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hash?","hash?",-1899275922),expr__43179) : pred__43178.call(null,new cljs.core.Keyword(null,"hash?","hash?",-1899275922),expr__43179)))){
return (new kee_frame.router.ReititRouter(self__.routes,G__43162,self__.not_found,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43178.cljs$core$IFn$_invoke$arity$2 ? pred__43178.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"not-found","not-found",-629079980),expr__43179) : pred__43178.call(null,new cljs.core.Keyword(null,"not-found","not-found",-629079980),expr__43179)))){
return (new kee_frame.router.ReititRouter(self__.routes,self__.hash_QMARK_,G__43162,self__.__meta,self__.__extmap,null));
} else {
return (new kee_frame.router.ReititRouter(self__.routes,self__.hash_QMARK_,self__.not_found,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__43162),null));
}
}
}
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"hash?","hash?",-1899275922),self__.hash_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"not-found","not-found",-629079980),self__.not_found,null))], null),self__.__extmap));
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__43162){
var self__ = this;
var this__4379__auto____$1 = this;
return (new kee_frame.router.ReititRouter(self__.routes,self__.hash_QMARK_,self__.not_found,G__43162,self__.__extmap,self__.__hash));
}));

(kee_frame.router.ReititRouter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(kee_frame.router.ReititRouter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"hash?","hash?",-258744395,null),new cljs.core.Symbol(null,"not-found","not-found",1011451547,null)], null);
}));

(kee_frame.router.ReititRouter.cljs$lang$type = true);

(kee_frame.router.ReititRouter.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"kee-frame.router/ReititRouter",null,(1),null));
}));

(kee_frame.router.ReititRouter.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"kee-frame.router/ReititRouter");
}));

/**
 * Positional factory function for kee-frame.router/ReititRouter.
 */
kee_frame.router.__GT_ReititRouter = (function kee_frame$router$__GT_ReititRouter(routes,hash_QMARK_,not_found){
return (new kee_frame.router.ReititRouter(routes,hash_QMARK_,not_found,null,null,null));
});

/**
 * Factory function for kee-frame.router/ReititRouter, taking a map of keywords to field values.
 */
kee_frame.router.map__GT_ReititRouter = (function kee_frame$router$map__GT_ReititRouter(G__43166){
var extmap__4419__auto__ = (function (){var G__43184 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__43166,new cljs.core.Keyword(null,"routes","routes",457900162),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hash?","hash?",-1899275922),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], 0));
if(cljs.core.record_QMARK_(G__43166)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__43184);
} else {
return G__43184;
}
})();
return (new kee_frame.router.ReititRouter(new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(G__43166),new cljs.core.Keyword(null,"hash?","hash?",-1899275922).cljs$core$IFn$_invoke$arity$1(G__43166),new cljs.core.Keyword(null,"not-found","not-found",-629079980).cljs$core$IFn$_invoke$arity$1(G__43166),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

kee_frame.router.bootstrap_routes = (function kee_frame$router$bootstrap_routes(p__43186){
var map__43187 = p__43186;
var map__43187__$1 = (((((!((map__43187 == null))))?(((((map__43187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43187):map__43187);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43187__$1,new cljs.core.Keyword(null,"routes","routes",457900162));
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43187__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var hash_routing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43187__$1,new cljs.core.Keyword(null,"hash-routing?","hash-routing?",471914732));
var scroll = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43187__$1,new cljs.core.Keyword(null,"scroll","scroll",971553779));
var route_change_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43187__$1,new cljs.core.Keyword(null,"route-change-event","route-change-event",1834214120));
var not_found = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43187__$1,new cljs.core.Keyword(null,"not-found","not-found",-629079980));
var initialized_QMARK_ = cljs.core.boolean$(cljs.core.deref(kee_frame.state.navigator));
var router__$1 = (function (){var or__4126__auto__ = router;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return kee_frame.router.__GT_ReititRouter(reitit.core.router.cljs$core$IFn$_invoke$arity$1(routes),hash_routing_QMARK_,not_found);
}
})();
cljs.core.reset_BANG_(kee_frame.state.router,router__$1);

re_frame.core.reg_fx(new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),kee_frame.router.goto$);

if(initialized_QMARK_){
} else {
if(cljs.core.truth_(scroll)){
kee_frame.scroll.start_BANG_();
} else {
}

cljs.core.reset_BANG_(kee_frame.state.navigator,kee_frame.interop.make_navigator(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),kee_frame.router.nav_handler(router__$1,route_change_event),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (p1__43185_SHARP_){
return cljs.core.boolean$(kee_frame.api.url__GT_data(router__$1,p1__43185_SHARP_));
})], null)));
}

return kee_frame.api.dispatch_current_BANG_(cljs.core.deref(kee_frame.state.navigator));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init","init",-1875481434),(function (db,p__43190){
var vec__43191 = p__43190;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43191,(0),null);
var initial = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43191,(1),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([initial,db], 0));
}));
kee_frame.router.debug_enabled_QMARK_ = (function kee_frame$router$debug_enabled_QMARK_(){
var map__43194 = cljs.core.deref(kee_frame.state.debug_config);
var map__43194__$1 = (((((!((map__43194 == null))))?(((((map__43194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43194):map__43194);
var routes_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43194__$1,new cljs.core.Keyword(null,"routes?","routes?",-1257506224),true);
var and__4115__auto__ = cljs.core.deref(kee_frame.state.debug_QMARK_);
if(cljs.core.truth_(and__4115__auto__)){
return routes_QMARK_;
} else {
return and__4115__auto__;
}
});
kee_frame.router.reg_route_event = (function kee_frame$router$reg_route_event(scroll){
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("kee-frame.router","route-changed","kee-frame.router/route-changed",8744849),(cljs.core.truth_(kee_frame.router.debug_enabled_QMARK_())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null):null),(function (p__43196,p__43197){
var map__43198 = p__43196;
var map__43198__$1 = (((((!((map__43198 == null))))?(((((map__43198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43198):map__43198);
var ctx = map__43198__$1;
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43198__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43199 = p__43197;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43199,(0),null);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43199,(1),null);
if(cljs.core.truth_(scroll)){
kee_frame.scroll.monitor_requests_BANG_(route);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kee_frame.state.controllers,kee_frame.controller.apply_route,ctx,route);

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("kee-frame","route","kee-frame/route",-106555640),route)], null),(cljs.core.truth_(scroll)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(50),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.scroll","poll","kee-frame.scroll/poll",-1227808225),route,(0)], null)], null)], null)], null):null)], 0));
}));
});
kee_frame.router.start_BANG_ = (function kee_frame$router$start_BANG_(p__43203){
var map__43204 = p__43203;
var map__43204__$1 = (((((!((map__43204 == null))))?(((((map__43204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43204):map__43204);
var config = map__43204__$1;
var initial_db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43204__$1,new cljs.core.Keyword(null,"initial-db","initial-db",1939835102));
var debug_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43204__$1,new cljs.core.Keyword(null,"debug-config","debug-config",329260673));
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43204__$1,new cljs.core.Keyword(null,"routes","routes",457900162));
var screen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43204__$1,new cljs.core.Keyword(null,"screen","screen",1990059748));
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43204__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var app_db_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43204__$1,new cljs.core.Keyword(null,"app-db-spec","app-db-spec",-1030582586));
var chain_links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43204__$1,new cljs.core.Keyword(null,"chain-links","chain-links",951542256));
var debug_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43204__$1,new cljs.core.Keyword(null,"debug?","debug?",-1831756173),false);
var scroll = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43204__$1,new cljs.core.Keyword(null,"scroll","scroll",971553779),true);
var root_component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43204__$1,new cljs.core.Keyword(null,"root-component","root-component",-1807026475));
kee_frame.interop.set_log_level_BANG_(debug_config);

cljs.core.reset_BANG_(kee_frame.state.app_db_spec,app_db_spec);

cljs.core.reset_BANG_(kee_frame.state.debug_QMARK_,debug_QMARK_);

cljs.core.reset_BANG_(kee_frame.state.debug_config,debug_config);

re_chain.core.configure_BANG_(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(kee_frame.router.default_chain_links,chain_links));

kee_frame.router.reg_route_event(scroll);

if(cljs.core.truth_((function (){var and__4115__auto__ = routes;
if(cljs.core.truth_(and__4115__auto__)){
return router;
} else {
return and__4115__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Both routes and router specified. If you want to use these routes, pass them to your router constructor.",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"routes","routes",457900162),routes,new cljs.core.Keyword(null,"router","router",1091916230),router], null));
} else {
}

if(cljs.core.truth_((function (){var or__4126__auto__ = routes;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return router;
}
})())){
kee_frame.router.bootstrap_routes(config);
} else {
}

if(cljs.core.truth_(initial_db)){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init","init",-1875481434),initial_db], null));
} else {
}

if(cljs.core.truth_(screen)){
var config_43280__$1 = ((cljs.core.boolean_QMARK_(screen))?null:screen);
if(cljs.core.truth_(cljs.core.deref(kee_frame.state.breakpoints_initialized_QMARK_))){
kee_frame.interop.set_breakpoint_subs(config_43280__$1);
} else {
kee_frame.interop.set_breakpoints(config_43280__$1);

cljs.core.reset_BANG_(kee_frame.state.breakpoints_initialized_QMARK_,true);
}
} else {
}

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("kee-frame","route","kee-frame/route",-106555640),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword("kee-frame","route","kee-frame/route",-106555640).cljs$core$IFn$_invoke$arity$2(db,null);
})], 0));

return kee_frame.interop.render_root(root_component);
});
kee_frame.router.make_route_component = (function kee_frame$router$make_route_component(component,route){
if(cljs.core.fn_QMARK_(component)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,route], null);
} else {
return component;
}
});
kee_frame.router.switch_route = (function kee_frame$router$switch_route(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43281 = arguments.length;
var i__4737__auto___43282 = (0);
while(true){
if((i__4737__auto___43282 < len__4736__auto___43281)){
args__4742__auto__.push((arguments[i__4737__auto___43282]));

var G__43283 = (i__4737__auto___43282 + (1));
i__4737__auto___43282 = G__43283;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return kee_frame.router.switch_route.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(kee_frame.router.switch_route.cljs$core$IFn$_invoke$arity$variadic = (function (f,pairs){
if(cljs.core.even_QMARK_(cljs.core.count(pairs))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("switch-route accepts an even number of args",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pairs","pairs",614609779),pairs,new cljs.core.Keyword(null,"pairs-count","pairs-count",168301941),cljs.core.count(pairs)], null));
}

var route = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame","route","kee-frame/route",-106555640)], null));
var dispatch_value = (function (){var G__43208 = cljs.core.deref(route);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__43208) : f.call(null,G__43208));
})();
var G__43212 = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),pairs);
var vec__43213 = G__43212;
var seq__43214 = cljs.core.seq(vec__43213);
var first__43215 = cljs.core.first(seq__43214);
var seq__43214__$1 = cljs.core.next(seq__43214);
var first_pair = first__43215;
var rest_pairs = seq__43214__$1;
var G__43212__$1 = G__43212;
while(true){
var vec__43216 = G__43212__$1;
var seq__43217 = cljs.core.seq(vec__43216);
var first__43218 = cljs.core.first(seq__43217);
var seq__43217__$1 = cljs.core.next(seq__43217);
var first_pair__$1 = first__43218;
var rest_pairs__$1 = seq__43217__$1;
if(cljs.core.truth_(first_pair__$1)){
var vec__43219 = first_pair__$1;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43219,(0),null);
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43219,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,dispatch_value)){
return kee_frame.router.make_route_component(component,cljs.core.deref(route));
} else {
var G__43285 = rest_pairs__$1;
G__43212__$1 = G__43285;
continue;
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Could not find a component to match route. Did you remember to include a case for nil?",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"route","route",329891309),cljs.core.deref(route),new cljs.core.Keyword(null,"dispatch-value","dispatch-value",163470182),dispatch_value,new cljs.core.Keyword(null,"pairs","pairs",614609779),pairs], null));
}
break;
}
}));

(kee_frame.router.switch_route.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(kee_frame.router.switch_route.cljs$lang$applyTo = (function (seq43206){
var G__43207 = cljs.core.first(seq43206);
var seq43206__$1 = cljs.core.next(seq43206);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43207,seq43206__$1);
}));


//# sourceMappingURL=kee_frame.router.js.map
