// Compiled by ClojureScript 1.10.773 {}
goog.provide('garden.types');
goog.require('cljs.core');

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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
garden.types.CSSUnit = (function (unit,magnitude,__meta,__extmap,__hash){
this.unit = unit;
this.magnitude = magnitude;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k9677,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__9681 = k9677;
var G__9681__$1 = (((G__9681 instanceof cljs.core.Keyword))?G__9681.fqn:null);
switch (G__9681__$1) {
case "unit":
return self__.unit;

break;
case "magnitude":
return self__.magnitude;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9677,else__4383__auto__);

}
}));

(garden.types.CSSUnit.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__9682){
var vec__9683 = p__9682;
var k__4403__auto__ = cljs.core.nth.call(null,vec__9683,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__9683,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#garden.types.CSSUnit{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
}));

(garden.types.CSSUnit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9676){
var self__ = this;
var G__9676__$1 = this;
return (new cljs.core.RecordIter((0),G__9676__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(garden.types.CSSUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(garden.types.CSSUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,self__.__extmap,self__.__hash));
}));

(garden.types.CSSUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (70281654 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this9678,other9679){
var self__ = this;
var this9678__$1 = this;
return (((!((other9679 == null)))) && ((this9678__$1.constructor === other9679.constructor)) && (cljs.core._EQ_.call(null,this9678__$1.unit,other9679.unit)) && (cljs.core._EQ_.call(null,this9678__$1.magnitude,other9679.magnitude)) && (cljs.core._EQ_.call(null,this9678__$1.__extmap,other9679.__extmap)));
}));

(garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit","unit",375175175),null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__9676){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__9686 = cljs.core.keyword_identical_QMARK_;
var expr__9687 = k__4388__auto__;
if(cljs.core.truth_(pred__9686.call(null,new cljs.core.Keyword(null,"unit","unit",375175175),expr__9687))){
return (new garden.types.CSSUnit(G__9676,self__.magnitude,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9686.call(null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),expr__9687))){
return (new garden.types.CSSUnit(self__.unit,G__9676,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__9676),null));
}
}
}));

(garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude,null))], null),self__.__extmap));
}));

(garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__9676){
var self__ = this;
var this__4379__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,G__9676,self__.__extmap,self__.__hash));
}));

(garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(garden.types.CSSUnit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unit","unit",2015706702,null),new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null)], null);
}));

(garden.types.CSSUnit.cljs$lang$type = true);

(garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"garden.types/CSSUnit",null,(1),null));
}));

(garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"garden.types/CSSUnit");
}));

/**
 * Positional factory function for garden.types/CSSUnit.
 */
garden.types.__GT_CSSUnit = (function garden$types$__GT_CSSUnit(unit,magnitude){
return (new garden.types.CSSUnit(unit,magnitude,null,null,null));
});

/**
 * Factory function for garden.types/CSSUnit, taking a map of keywords to field values.
 */
garden.types.map__GT_CSSUnit = (function garden$types$map__GT_CSSUnit(G__9680){
var extmap__4419__auto__ = (function (){var G__9689 = cljs.core.dissoc.call(null,G__9680,new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
if(cljs.core.record_QMARK_.call(null,G__9680)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__9689);
} else {
return G__9689;
}
})();
return (new garden.types.CSSUnit(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(G__9680),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(G__9680),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
garden.types.CSSFunction = (function (f,args,__meta,__extmap,__hash){
this.f = f;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k9692,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__9696 = k9692;
var G__9696__$1 = (((G__9696 instanceof cljs.core.Keyword))?G__9696.fqn:null);
switch (G__9696__$1) {
case "f":
return self__.f;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9692,else__4383__auto__);

}
}));

(garden.types.CSSFunction.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__9697){
var vec__9698 = p__9697;
var k__4403__auto__ = cljs.core.nth.call(null,vec__9698,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__9698,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#garden.types.CSSFunction{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",-1597136552),self__.f],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
}));

(garden.types.CSSFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9691){
var self__ = this;
var G__9691__$1 = this;
return (new cljs.core.RecordIter((0),G__9691__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(garden.types.CSSFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(garden.types.CSSFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new garden.types.CSSFunction(self__.f,self__.args,self__.__meta,self__.__extmap,self__.__hash));
}));

(garden.types.CSSFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1910311650 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this9693,other9694){
var self__ = this;
var this9693__$1 = this;
return (((!((other9694 == null)))) && ((this9693__$1.constructor === other9694.constructor)) && (cljs.core._EQ_.call(null,this9693__$1.f,other9694.f)) && (cljs.core._EQ_.call(null,this9693__$1.args,other9694.args)) && (cljs.core._EQ_.call(null,this9693__$1.__extmap,other9694.__extmap)));
}));

(garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"f","f",-1597136552),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new garden.types.CSSFunction(self__.f,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__9691){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__9701 = cljs.core.keyword_identical_QMARK_;
var expr__9702 = k__4388__auto__;
if(cljs.core.truth_(pred__9701.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),expr__9702))){
return (new garden.types.CSSFunction(G__9691,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9701.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__9702))){
return (new garden.types.CSSFunction(self__.f,G__9691,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSFunction(self__.f,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__9691),null));
}
}
}));

(garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"f","f",-1597136552),self__.f,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null))], null),self__.__extmap));
}));

(garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__9691){
var self__ = this;
var this__4379__auto____$1 = this;
return (new garden.types.CSSFunction(self__.f,self__.args,G__9691,self__.__extmap,self__.__hash));
}));

(garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(garden.types.CSSFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
}));

(garden.types.CSSFunction.cljs$lang$type = true);

(garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"garden.types/CSSFunction",null,(1),null));
}));

(garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"garden.types/CSSFunction");
}));

/**
 * Positional factory function for garden.types/CSSFunction.
 */
garden.types.__GT_CSSFunction = (function garden$types$__GT_CSSFunction(f,args){
return (new garden.types.CSSFunction(f,args,null,null,null));
});

/**
 * Factory function for garden.types/CSSFunction, taking a map of keywords to field values.
 */
garden.types.map__GT_CSSFunction = (function garden$types$map__GT_CSSFunction(G__9695){
var extmap__4419__auto__ = (function (){var G__9704 = cljs.core.dissoc.call(null,G__9695,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.record_QMARK_.call(null,G__9695)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__9704);
} else {
return G__9704;
}
})();
return (new garden.types.CSSFunction(new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(G__9695),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__9695),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
garden.types.CSSAtRule = (function (identifier,value,__meta,__extmap,__hash){
this.identifier = identifier;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k9707,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__9711 = k9707;
var G__9711__$1 = (((G__9711 instanceof cljs.core.Keyword))?G__9711.fqn:null);
switch (G__9711__$1) {
case "identifier":
return self__.identifier;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9707,else__4383__auto__);

}
}));

(garden.types.CSSAtRule.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4402__auto__,p__9712){
var vec__9713 = p__9712;
var k__4403__auto__ = cljs.core.nth.call(null,vec__9713,(0),null);
var v__4404__auto__ = cljs.core.nth.call(null,vec__9713,(1),null);
return f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__);
}),init__4401__auto__,this__4399__auto____$1);
}));

(garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4395__auto__,pr_pair__4397__auto__,"#garden.types.CSSAtRule{",", ","}",opts__4396__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(garden.types.CSSAtRule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9706){
var self__ = this;
var G__9706__$1 = this;
return (new cljs.core.RecordIter((0),G__9706__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(garden.types.CSSAtRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(garden.types.CSSAtRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(garden.types.CSSAtRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
}));

(garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1632374092 ^ cljs.core.hash_unordered_coll.call(null,coll__4377__auto__));
}).call(null,this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this9708,other9709){
var self__ = this;
var this9708__$1 = this;
return (((!((other9709 == null)))) && ((this9708__$1.constructor === other9709.constructor)) && (cljs.core._EQ_.call(null,this9708__$1.identifier,other9709.identifier)) && (cljs.core._EQ_.call(null,this9708__$1.value,other9709.value)) && (cljs.core._EQ_.call(null,this9708__$1.__extmap,other9709.__extmap)));
}));

(garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4390__auto__)),null));
}
}));

(garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__9706){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__9716 = cljs.core.keyword_identical_QMARK_;
var expr__9717 = k__4388__auto__;
if(cljs.core.truth_(pred__9716.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),expr__9717))){
return (new garden.types.CSSAtRule(G__9706,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9716.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__9717))){
return (new garden.types.CSSAtRule(self__.identifier,G__9706,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4388__auto__,G__9706),null));
}
}
}));

(garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__9706){
var self__ = this;
var this__4379__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,G__9706,self__.__extmap,self__.__hash));
}));

(garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4386__auto__,(0)),cljs.core._nth.call(null,entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(garden.types.CSSAtRule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"identifier","identifier",835028029,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(garden.types.CSSAtRule.cljs$lang$type = true);

(garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"garden.types/CSSAtRule",null,(1),null));
}));

(garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write.call(null,writer__4424__auto__,"garden.types/CSSAtRule");
}));

/**
 * Positional factory function for garden.types/CSSAtRule.
 */
garden.types.__GT_CSSAtRule = (function garden$types$__GT_CSSAtRule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});

/**
 * Factory function for garden.types/CSSAtRule, taking a map of keywords to field values.
 */
garden.types.map__GT_CSSAtRule = (function garden$types$map__GT_CSSAtRule(G__9710){
var extmap__4419__auto__ = (function (){var G__9719 = cljs.core.dissoc.call(null,G__9710,new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_.call(null,G__9710)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__9719);
} else {
return G__9719;
}
})();
return (new garden.types.CSSAtRule(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(G__9710),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__9710),null,cljs.core.not_empty.call(null,extmap__4419__auto__),null));
});


//# sourceMappingURL=types.js.map
