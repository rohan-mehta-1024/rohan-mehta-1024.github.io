goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31048 = arguments.length;
switch (G__31048) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31051 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31051 = (function (f,blockable,meta31052){
this.f = f;
this.blockable = blockable;
this.meta31052 = meta31052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31053,meta31052__$1){
var self__ = this;
var _31053__$1 = this;
return (new cljs.core.async.t_cljs$core$async31051(self__.f,self__.blockable,meta31052__$1));
}));

(cljs.core.async.t_cljs$core$async31051.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31053){
var self__ = this;
var _31053__$1 = this;
return self__.meta31052;
}));

(cljs.core.async.t_cljs$core$async31051.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31051.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31051.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31051.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31051.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31052","meta31052",-1612376374,null)], null);
}));

(cljs.core.async.t_cljs$core$async31051.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31051.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31051");

(cljs.core.async.t_cljs$core$async31051.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31051");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31051.
 */
cljs.core.async.__GT_t_cljs$core$async31051 = (function cljs$core$async$__GT_t_cljs$core$async31051(f__$1,blockable__$1,meta31052){
return (new cljs.core.async.t_cljs$core$async31051(f__$1,blockable__$1,meta31052));
});

}

return (new cljs.core.async.t_cljs$core$async31051(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31067 = arguments.length;
switch (G__31067) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31069 = arguments.length;
switch (G__31069) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31071 = arguments.length;
switch (G__31071) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_33274 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33274) : fn1.call(null,val_33274));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33274) : fn1.call(null,val_33274));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31112 = arguments.length;
switch (G__31112) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___33288 = n;
var x_33290 = (0);
while(true){
if((x_33290 < n__4613__auto___33288)){
(a[x_33290] = x_33290);

var G__33291 = (x_33290 + (1));
x_33290 = G__33291;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31123 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31123 = (function (flag,meta31124){
this.flag = flag;
this.meta31124 = meta31124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31125,meta31124__$1){
var self__ = this;
var _31125__$1 = this;
return (new cljs.core.async.t_cljs$core$async31123(self__.flag,meta31124__$1));
}));

(cljs.core.async.t_cljs$core$async31123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31125){
var self__ = this;
var _31125__$1 = this;
return self__.meta31124;
}));

(cljs.core.async.t_cljs$core$async31123.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31123.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31123.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31123.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31123.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31124","meta31124",1711314130,null)], null);
}));

(cljs.core.async.t_cljs$core$async31123.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31123.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31123");

(cljs.core.async.t_cljs$core$async31123.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31123");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31123.
 */
cljs.core.async.__GT_t_cljs$core$async31123 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31123(flag__$1,meta31124){
return (new cljs.core.async.t_cljs$core$async31123(flag__$1,meta31124));
});

}

return (new cljs.core.async.t_cljs$core$async31123(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31128 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31128 = (function (flag,cb,meta31129){
this.flag = flag;
this.cb = cb;
this.meta31129 = meta31129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31130,meta31129__$1){
var self__ = this;
var _31130__$1 = this;
return (new cljs.core.async.t_cljs$core$async31128(self__.flag,self__.cb,meta31129__$1));
}));

(cljs.core.async.t_cljs$core$async31128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31130){
var self__ = this;
var _31130__$1 = this;
return self__.meta31129;
}));

(cljs.core.async.t_cljs$core$async31128.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31128.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31128.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31128.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31128.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31129","meta31129",1501844187,null)], null);
}));

(cljs.core.async.t_cljs$core$async31128.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31128.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31128");

(cljs.core.async.t_cljs$core$async31128.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31128");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31128.
 */
cljs.core.async.__GT_t_cljs$core$async31128 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31128(flag__$1,cb__$1,meta31129){
return (new cljs.core.async.t_cljs$core$async31128(flag__$1,cb__$1,meta31129));
});

}

return (new cljs.core.async.t_cljs$core$async31128(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31131_SHARP_){
var G__31139 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31131_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31139) : fret.call(null,G__31139));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31132_SHARP_){
var G__31140 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31132_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31140) : fret.call(null,G__31140));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33353 = (i + (1));
i = G__33353;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33355 = arguments.length;
var i__4737__auto___33356 = (0);
while(true){
if((i__4737__auto___33356 < len__4736__auto___33355)){
args__4742__auto__.push((arguments[i__4737__auto___33356]));

var G__33358 = (i__4737__auto___33356 + (1));
i__4737__auto___33356 = G__33358;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31148){
var map__31149 = p__31148;
var map__31149__$1 = (((((!((map__31149 == null))))?(((((map__31149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31149):map__31149);
var opts = map__31149__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31144){
var G__31145 = cljs.core.first(seq31144);
var seq31144__$1 = cljs.core.next(seq31144);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31145,seq31144__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31159 = arguments.length;
switch (G__31159) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30942__auto___33363 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30943__auto__ = (function (){var switch__30761__auto__ = (function (state_31189){
var state_val_31194 = (state_31189[(1)]);
if((state_val_31194 === (7))){
var inst_31185 = (state_31189[(2)]);
var state_31189__$1 = state_31189;
var statearr_31199_33364 = state_31189__$1;
(statearr_31199_33364[(2)] = inst_31185);

(statearr_31199_33364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (1))){
var state_31189__$1 = state_31189;
var statearr_31200_33366 = state_31189__$1;
(statearr_31200_33366[(2)] = null);

(statearr_31200_33366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (4))){
var inst_31167 = (state_31189[(7)]);
var inst_31167__$1 = (state_31189[(2)]);
var inst_31168 = (inst_31167__$1 == null);
var state_31189__$1 = (function (){var statearr_31201 = state_31189;
(statearr_31201[(7)] = inst_31167__$1);

return statearr_31201;
})();
if(cljs.core.truth_(inst_31168)){
var statearr_31202_33367 = state_31189__$1;
(statearr_31202_33367[(1)] = (5));

} else {
var statearr_31203_33368 = state_31189__$1;
(statearr_31203_33368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (13))){
var state_31189__$1 = state_31189;
var statearr_31204_33370 = state_31189__$1;
(statearr_31204_33370[(2)] = null);

(statearr_31204_33370[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (6))){
var inst_31167 = (state_31189[(7)]);
var state_31189__$1 = state_31189;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31189__$1,(11),to,inst_31167);
} else {
if((state_val_31194 === (3))){
var inst_31187 = (state_31189[(2)]);
var state_31189__$1 = state_31189;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31189__$1,inst_31187);
} else {
if((state_val_31194 === (12))){
var state_31189__$1 = state_31189;
var statearr_31206_33380 = state_31189__$1;
(statearr_31206_33380[(2)] = null);

(statearr_31206_33380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (2))){
var state_31189__$1 = state_31189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31189__$1,(4),from);
} else {
if((state_val_31194 === (11))){
var inst_31177 = (state_31189[(2)]);
var state_31189__$1 = state_31189;
if(cljs.core.truth_(inst_31177)){
var statearr_31207_33389 = state_31189__$1;
(statearr_31207_33389[(1)] = (12));

} else {
var statearr_31208_33390 = state_31189__$1;
(statearr_31208_33390[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (9))){
var state_31189__$1 = state_31189;
var statearr_31209_33397 = state_31189__$1;
(statearr_31209_33397[(2)] = null);

(statearr_31209_33397[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (5))){
var state_31189__$1 = state_31189;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31210_33398 = state_31189__$1;
(statearr_31210_33398[(1)] = (8));

} else {
var statearr_31211_33399 = state_31189__$1;
(statearr_31211_33399[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (14))){
var inst_31183 = (state_31189[(2)]);
var state_31189__$1 = state_31189;
var statearr_31212_33400 = state_31189__$1;
(statearr_31212_33400[(2)] = inst_31183);

(statearr_31212_33400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (10))){
var inst_31174 = (state_31189[(2)]);
var state_31189__$1 = state_31189;
var statearr_31213_33401 = state_31189__$1;
(statearr_31213_33401[(2)] = inst_31174);

(statearr_31213_33401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31194 === (8))){
var inst_31171 = cljs.core.async.close_BANG_(to);
var state_31189__$1 = state_31189;
var statearr_31214_33402 = state_31189__$1;
(statearr_31214_33402[(2)] = inst_31171);

(statearr_31214_33402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30762__auto__ = null;
var cljs$core$async$state_machine__30762__auto____0 = (function (){
var statearr_31215 = [null,null,null,null,null,null,null,null];
(statearr_31215[(0)] = cljs$core$async$state_machine__30762__auto__);

(statearr_31215[(1)] = (1));

return statearr_31215;
});
var cljs$core$async$state_machine__30762__auto____1 = (function (state_31189){
while(true){
var ret_value__30763__auto__ = (function (){try{while(true){
var result__30764__auto__ = switch__30761__auto__(state_31189);
if(cljs.core.keyword_identical_QMARK_(result__30764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30764__auto__;
}
break;
}
}catch (e31216){var ex__30765__auto__ = e31216;
var statearr_31217_33404 = state_31189;
(statearr_31217_33404[(2)] = ex__30765__auto__);


if(cljs.core.seq((state_31189[(4)]))){
var statearr_31218_33405 = state_31189;
(statearr_31218_33405[(1)] = cljs.core.first((state_31189[(4)])));

} else {
throw ex__30765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33408 = state_31189;
state_31189 = G__33408;
continue;
} else {
return ret_value__30763__auto__;
}
break;
}
});
cljs$core$async$state_machine__30762__auto__ = function(state_31189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30762__auto____1.call(this,state_31189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30762__auto____0;
cljs$core$async$state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30762__auto____1;
return cljs$core$async$state_machine__30762__auto__;
})()
})();
var state__30944__auto__ = (function (){var statearr_31221 = f__30943__auto__();
(statearr_31221[(6)] = c__30942__auto___33363);

return statearr_31221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30944__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__31240){
var vec__31241 = p__31240;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31241,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31241,(1),null);
var job = vec__31241;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30942__auto___33415 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30943__auto__ = (function (){var switch__30761__auto__ = (function (state_31248){
var state_val_31249 = (state_31248[(1)]);
if((state_val_31249 === (1))){
var state_31248__$1 = state_31248;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31248__$1,(2),res,v);
} else {
if((state_val_31249 === (2))){
var inst_31245 = (state_31248[(2)]);
var inst_31246 = cljs.core.async.close_BANG_(res);
var state_31248__$1 = (function (){var statearr_31250 = state_31248;
(statearr_31250[(7)] = inst_31245);

return statearr_31250;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31248__$1,inst_31246);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30762__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30762__auto____0 = (function (){
var statearr_31251 = [null,null,null,null,null,null,null,null];
(statearr_31251[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30762__auto__);

(statearr_31251[(1)] = (1));

return statearr_31251;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30762__auto____1 = (function (state_31248){
while(true){
var ret_value__30763__auto__ = (function (){try{while(true){
var result__30764__auto__ = switch__30761__auto__(state_31248);
if(cljs.core.keyword_identical_QMARK_(result__30764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30764__auto__;
}
break;
}
}catch (e31252){var ex__30765__auto__ = e31252;
var statearr_31253_33417 = state_31248;
(statearr_31253_33417[(2)] = ex__30765__auto__);


if(cljs.core.seq((state_31248[(4)]))){
var statearr_31254_33418 = state_31248;
(statearr_31254_33418[(1)] = cljs.core.first((state_31248[(4)])));

} else {
throw ex__30765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33419 = state_31248;
state_31248 = G__33419;
continue;
} else {
return ret_value__30763__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30762__auto__ = function(state_31248){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30762__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30762__auto____1.call(this,state_31248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30762__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30762__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30762__auto__;
})()
})();
var state__30944__auto__ = (function (){var statearr_31255 = f__30943__auto__();
(statearr_31255[(6)] = c__30942__auto___33415);

return statearr_31255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30944__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31256){
var vec__31257 = p__31256;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31257,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31257,(1),null);
var job = vec__31257;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___33429 = n;
var __33430 = (0);
while(true){
if((__33430 < n__4613__auto___33429)){
var G__31260_33433 = type;
var G__31260_33434__$1 = (((G__31260_33433 instanceof cljs.core.Keyword))?G__31260_33433.fqn:null);
switch (G__31260_33434__$1) {
case "compute":
var c__30942__auto___33436 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33430,c__30942__auto___33436,G__31260_33433,G__31260_33434__$1,n__4613__auto___33429,jobs,results,process,async){
return (function (){
var f__30943__auto__ = (function (){var switch__30761__auto__ = ((function (__33430,c__30942__auto___33436,G__31260_33433,G__31260_33434__$1,n__4613__auto___33429,jobs,results,process,async){
return (function (state_31273){
var state_val_31274 = (state_31273[(1)]);
if((state_val_31274 === (1))){
var state_31273__$1 = state_31273;
var statearr_31275_33437 = state_31273__$1;
(statearr_31275_33437[(2)] = null);

(statearr_31275_33437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31274 === (2))){
var state_31273__$1 = state_31273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31273__$1,(4),jobs);
} else {
if((state_val_31274 === (3))){
var inst_31271 = (state_31273[(2)]);
var state_31273__$1 = state_31273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31273__$1,inst_31271);
} else {
if((state_val_31274 === (4))){
var inst_31263 = (state_31273[(2)]);
var inst_31264 = process(inst_31263);
var state_31273__$1 = state_31273;
if(cljs.core.truth_(inst_31264)){
var statearr_31276_33439 = state_31273__$1;
(statearr_31276_33439[(1)] = (5));

} else {
var statearr_31277_33440 = state_31273__$1;
(statearr_31277_33440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31274 === (5))){
var state_31273__$1 = state_31273;
var statearr_31278_33441 = state_31273__$1;
(statearr_31278_33441[(2)] = null);

(statearr_31278_33441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31274 === (6))){
var state_31273__$1 = state_31273;
var statearr_31279_33448 = state_31273__$1;
(statearr_31279_33448[(2)] = null);

(statearr_31279_33448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31274 === (7))){
var inst_31269 = (state_31273[(2)]);
var state_31273__$1 = state_31273;
var statearr_31280_33449 = state_31273__$1;
(statearr_31280_33449[(2)] = inst_31269);

(statearr_31280_33449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33430,c__30942__auto___33436,G__31260_33433,G__31260_33434__$1,n__4613__auto___33429,jobs,results,process,async))
;
return ((function (__33430,switch__30761__auto__,c__30942__auto___33436,G__31260_33433,G__31260_33434__$1,n__4613__auto___33429,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30762__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30762__auto____0 = (function (){
var statearr_31281 = [null,null,null,null,null,null,null];
(statearr_31281[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30762__auto__);

(statearr_31281[(1)] = (1));

return statearr_31281;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30762__auto____1 = (function (state_31273){
while(true){
var ret_value__30763__auto__ = (function (){try{while(true){
var result__30764__auto__ = switch__30761__auto__(state_31273);
if(cljs.core.keyword_identical_QMARK_(result__30764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30764__auto__;
}
break;
}
}catch (e31282){var ex__30765__auto__ = e31282;
var statearr_31283_33452 = state_31273;
(statearr_31283_33452[(2)] = ex__30765__auto__);


if(cljs.core.seq((state_31273[(4)]))){
var statearr_31284_33453 = state_31273;
(statearr_31284_33453[(1)] = cljs.core.first((state_31273[(4)])));

} else {
throw ex__30765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33454 = state_31273;
state_31273 = G__33454;
continue;
} else {
return ret_value__30763__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30762__auto__ = function(state_31273){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30762__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30762__auto____1.call(this,state_31273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30762__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30762__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30762__auto__;
})()
;})(__33430,switch__30761__auto__,c__30942__auto___33436,G__31260_33433,G__31260_33434__$1,n__4613__auto___33429,jobs,results,process,async))
})();
var state__30944__auto__ = (function (){var statearr_31285 = f__30943__auto__();
(statearr_31285[(6)] = c__30942__auto___33436);

return statearr_31285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30944__auto__);
});})(__33430,c__30942__auto___33436,G__31260_33433,G__31260_33434__$1,n__4613__auto___33429,jobs,results,process,async))
);


break;
case "async":
var c__30942__auto___33455 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33430,c__30942__auto___33455,G__31260_33433,G__31260_33434__$1,n__4613__auto___33429,jobs,results,process,async){
return (function (){
var f__30943__auto__ = (function (){var switch__30761__auto__ = ((function (__33430,c__30942__auto___33455,G__31260_33433,G__31260_33434__$1,n__4613__auto___33429,jobs,results,process,async){
return (function (state_31298){
var state_val_31299 = (state_31298[(1)]);
if((state_val_31299 === (1))){
var state_31298__$1 = state_31298;
var statearr_31300_33456 = state_31298__$1;
(statearr_31300_33456[(2)] = null);

(statearr_31300_33456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (2))){
var state_31298__$1 = state_31298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31298__$1,(4),jobs);
} else {
if((state_val_31299 === (3))){
var inst_31296 = (state_31298[(2)]);
var state_31298__$1 = state_31298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31298__$1,inst_31296);
} else {
if((state_val_31299 === (4))){
var inst_31288 = (state_31298[(2)]);
var inst_31289 = async(inst_31288);
var state_31298__$1 = state_31298;
if(cljs.core.truth_(inst_31289)){
var statearr_31301_33460 = state_31298__$1;
(statearr_31301_33460[(1)] = (5));

} else {
var statearr_31305_33461 = state_31298__$1;
(statearr_31305_33461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (5))){
var state_31298__$1 = state_31298;
var statearr_31306_33462 = state_31298__$1;
(statearr_31306_33462[(2)] = null);

(statearr_31306_33462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (6))){
var state_31298__$1 = state_31298;
var statearr_31307_33463 = state_31298__$1;
(statearr_31307_33463[(2)] = null);

(statearr_31307_33463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (7))){
var inst_31294 = (state_31298[(2)]);
var state_31298__$1 = state_31298;
var statearr_31308_33464 = state_31298__$1;
(statearr_31308_33464[(2)] = inst_31294);

(statearr_31308_33464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33430,c__30942__auto___33455,G__31260_33433,G__31260_33434__$1,n__4613__auto___33429,jobs,results,process,async))
;
return ((function (__33430,switch__30761__auto__,c__30942__auto___33455,G__31260_33433,G__31260_33434__$1,n__4613__auto___33429,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30762__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30762__auto____0 = (function (){
var statearr_31309 = [null,null,null,null,null,null,null];
(statearr_31309[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30762__auto__);

(statearr_31309[(1)] = (1));

return statearr_31309;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30762__auto____1 = (function (state_31298){
while(true){
var ret_value__30763__auto__ = (function (){try{while(true){
var result__30764__auto__ = switch__30761__auto__(state_31298);
if(cljs.core.keyword_identical_QMARK_(result__30764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30764__auto__;
}
break;
}
}catch (e31310){var ex__30765__auto__ = e31310;
var statearr_31311_33465 = state_31298;
(statearr_31311_33465[(2)] = ex__30765__auto__);


if(cljs.core.seq((state_31298[(4)]))){
var statearr_31312_33467 = state_31298;
(statearr_31312_33467[(1)] = cljs.core.first((state_31298[(4)])));

} else {
throw ex__30765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33472 = state_31298;
state_31298 = G__33472;
continue;
} else {
return ret_value__30763__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30762__auto__ = function(state_31298){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30762__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30762__auto____1.call(this,state_31298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30762__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30762__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30762__auto__;
})()
;})(__33430,switch__30761__auto__,c__30942__auto___33455,G__31260_33433,G__31260_33434__$1,n__4613__auto___33429,jobs,results,process,async))
})();
var state__30944__auto__ = (function (){var statearr_31313 = f__30943__auto__();
(statearr_31313[(6)] = c__30942__auto___33455);

return statearr_31313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30944__auto__);
});})(__33430,c__30942__auto___33455,G__31260_33433,G__31260_33434__$1,n__4613__auto___33429,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31260_33434__$1)].join('')));

}

var G__33476 = (__33430 + (1));
__33430 = G__33476;
continue;
} else {
}
break;
}

var c__30942__auto___33477 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30943__auto__ = (function (){var switch__30761__auto__ = (function (state_31335){
var state_val_31336 = (state_31335[(1)]);
if((state_val_31336 === (7))){
var inst_31331 = (state_31335[(2)]);
var state_31335__$1 = state_31335;
var statearr_31337_33478 = state_31335__$1;
(statearr_31337_33478[(2)] = inst_31331);

(statearr_31337_33478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (1))){
var state_31335__$1 = state_31335;
var statearr_31338_33479 = state_31335__$1;
(statearr_31338_33479[(2)] = null);

(statearr_31338_33479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (4))){
var inst_31316 = (state_31335[(7)]);
var inst_31316__$1 = (state_31335[(2)]);
var inst_31317 = (inst_31316__$1 == null);
var state_31335__$1 = (function (){var statearr_31343 = state_31335;
(statearr_31343[(7)] = inst_31316__$1);

return statearr_31343;
})();
if(cljs.core.truth_(inst_31317)){
var statearr_31344_33484 = state_31335__$1;
(statearr_31344_33484[(1)] = (5));

} else {
var statearr_31345_33485 = state_31335__$1;
(statearr_31345_33485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (6))){
var inst_31316 = (state_31335[(7)]);
var inst_31321 = (state_31335[(8)]);
var inst_31321__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31322 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31323 = [inst_31316,inst_31321__$1];
var inst_31324 = (new cljs.core.PersistentVector(null,2,(5),inst_31322,inst_31323,null));
var state_31335__$1 = (function (){var statearr_31350 = state_31335;
(statearr_31350[(8)] = inst_31321__$1);

return statearr_31350;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31335__$1,(8),jobs,inst_31324);
} else {
if((state_val_31336 === (3))){
var inst_31333 = (state_31335[(2)]);
var state_31335__$1 = state_31335;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31335__$1,inst_31333);
} else {
if((state_val_31336 === (2))){
var state_31335__$1 = state_31335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31335__$1,(4),from);
} else {
if((state_val_31336 === (9))){
var inst_31328 = (state_31335[(2)]);
var state_31335__$1 = (function (){var statearr_31355 = state_31335;
(statearr_31355[(9)] = inst_31328);

return statearr_31355;
})();
var statearr_31356_33488 = state_31335__$1;
(statearr_31356_33488[(2)] = null);

(statearr_31356_33488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (5))){
var inst_31319 = cljs.core.async.close_BANG_(jobs);
var state_31335__$1 = state_31335;
var statearr_31360_33489 = state_31335__$1;
(statearr_31360_33489[(2)] = inst_31319);

(statearr_31360_33489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31336 === (8))){
var inst_31321 = (state_31335[(8)]);
var inst_31326 = (state_31335[(2)]);
var state_31335__$1 = (function (){var statearr_31361 = state_31335;
(statearr_31361[(10)] = inst_31326);

return statearr_31361;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31335__$1,(9),results,inst_31321);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30762__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30762__auto____0 = (function (){
var statearr_31362 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31362[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30762__auto__);

(statearr_31362[(1)] = (1));

return statearr_31362;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30762__auto____1 = (function (state_31335){
while(true){
var ret_value__30763__auto__ = (function (){try{while(true){
var result__30764__auto__ = switch__30761__auto__(state_31335);
if(cljs.core.keyword_identical_QMARK_(result__30764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30764__auto__;
}
break;
}
}catch (e31363){var ex__30765__auto__ = e31363;
var statearr_31364_33490 = state_31335;
(statearr_31364_33490[(2)] = ex__30765__auto__);


if(cljs.core.seq((state_31335[(4)]))){
var statearr_31365_33491 = state_31335;
(statearr_31365_33491[(1)] = cljs.core.first((state_31335[(4)])));

} else {
throw ex__30765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33492 = state_31335;
state_31335 = G__33492;
continue;
} else {
return ret_value__30763__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30762__auto__ = function(state_31335){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30762__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30762__auto____1.call(this,state_31335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30762__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30762__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30762__auto__;
})()
})();
var state__30944__auto__ = (function (){var statearr_31366 = f__30943__auto__();
(statearr_31366[(6)] = c__30942__auto___33477);

return statearr_31366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30944__auto__);
}));


var c__30942__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30943__auto__ = (function (){var switch__30761__auto__ = (function (state_31414){
var state_val_31415 = (state_31414[(1)]);
if((state_val_31415 === (7))){
var inst_31410 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31416_33493 = state_31414__$1;
(statearr_31416_33493[(2)] = inst_31410);

(statearr_31416_33493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (20))){
var state_31414__$1 = state_31414;
var statearr_31417_33494 = state_31414__$1;
(statearr_31417_33494[(2)] = null);

(statearr_31417_33494[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (1))){
var state_31414__$1 = state_31414;
var statearr_31418_33495 = state_31414__$1;
(statearr_31418_33495[(2)] = null);

(statearr_31418_33495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (4))){
var inst_31369 = (state_31414[(7)]);
var inst_31369__$1 = (state_31414[(2)]);
var inst_31370 = (inst_31369__$1 == null);
var state_31414__$1 = (function (){var statearr_31419 = state_31414;
(statearr_31419[(7)] = inst_31369__$1);

return statearr_31419;
})();
if(cljs.core.truth_(inst_31370)){
var statearr_31420_33496 = state_31414__$1;
(statearr_31420_33496[(1)] = (5));

} else {
var statearr_31421_33497 = state_31414__$1;
(statearr_31421_33497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (15))){
var inst_31386 = (state_31414[(8)]);
var state_31414__$1 = state_31414;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31414__$1,(18),to,inst_31386);
} else {
if((state_val_31415 === (21))){
var inst_31405 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31424_33502 = state_31414__$1;
(statearr_31424_33502[(2)] = inst_31405);

(statearr_31424_33502[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (13))){
var inst_31407 = (state_31414[(2)]);
var state_31414__$1 = (function (){var statearr_31425 = state_31414;
(statearr_31425[(9)] = inst_31407);

return statearr_31425;
})();
var statearr_31426_33503 = state_31414__$1;
(statearr_31426_33503[(2)] = null);

(statearr_31426_33503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (6))){
var inst_31369 = (state_31414[(7)]);
var state_31414__$1 = state_31414;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31414__$1,(11),inst_31369);
} else {
if((state_val_31415 === (17))){
var inst_31400 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
if(cljs.core.truth_(inst_31400)){
var statearr_31427_33504 = state_31414__$1;
(statearr_31427_33504[(1)] = (19));

} else {
var statearr_31428_33505 = state_31414__$1;
(statearr_31428_33505[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (3))){
var inst_31412 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31414__$1,inst_31412);
} else {
if((state_val_31415 === (12))){
var inst_31383 = (state_31414[(10)]);
var state_31414__$1 = state_31414;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31414__$1,(14),inst_31383);
} else {
if((state_val_31415 === (2))){
var state_31414__$1 = state_31414;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31414__$1,(4),results);
} else {
if((state_val_31415 === (19))){
var state_31414__$1 = state_31414;
var statearr_31432_33506 = state_31414__$1;
(statearr_31432_33506[(2)] = null);

(statearr_31432_33506[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (11))){
var inst_31383 = (state_31414[(2)]);
var state_31414__$1 = (function (){var statearr_31433 = state_31414;
(statearr_31433[(10)] = inst_31383);

return statearr_31433;
})();
var statearr_31435_33507 = state_31414__$1;
(statearr_31435_33507[(2)] = null);

(statearr_31435_33507[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (9))){
var state_31414__$1 = state_31414;
var statearr_31436_33508 = state_31414__$1;
(statearr_31436_33508[(2)] = null);

(statearr_31436_33508[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (5))){
var state_31414__$1 = state_31414;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31439_33509 = state_31414__$1;
(statearr_31439_33509[(1)] = (8));

} else {
var statearr_31440_33510 = state_31414__$1;
(statearr_31440_33510[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (14))){
var inst_31386 = (state_31414[(8)]);
var inst_31386__$1 = (state_31414[(2)]);
var inst_31390 = (inst_31386__$1 == null);
var inst_31391 = cljs.core.not(inst_31390);
var state_31414__$1 = (function (){var statearr_31441 = state_31414;
(statearr_31441[(8)] = inst_31386__$1);

return statearr_31441;
})();
if(inst_31391){
var statearr_31442_33511 = state_31414__$1;
(statearr_31442_33511[(1)] = (15));

} else {
var statearr_31443_33512 = state_31414__$1;
(statearr_31443_33512[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (16))){
var state_31414__$1 = state_31414;
var statearr_31444_33513 = state_31414__$1;
(statearr_31444_33513[(2)] = false);

(statearr_31444_33513[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (10))){
var inst_31376 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31445_33514 = state_31414__$1;
(statearr_31445_33514[(2)] = inst_31376);

(statearr_31445_33514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (18))){
var inst_31397 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31446_33515 = state_31414__$1;
(statearr_31446_33515[(2)] = inst_31397);

(statearr_31446_33515[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31415 === (8))){
var inst_31373 = cljs.core.async.close_BANG_(to);
var state_31414__$1 = state_31414;
var statearr_31447_33516 = state_31414__$1;
(statearr_31447_33516[(2)] = inst_31373);

(statearr_31447_33516[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30762__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30762__auto____0 = (function (){
var statearr_31448 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31448[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30762__auto__);

(statearr_31448[(1)] = (1));

return statearr_31448;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30762__auto____1 = (function (state_31414){
while(true){
var ret_value__30763__auto__ = (function (){try{while(true){
var result__30764__auto__ = switch__30761__auto__(state_31414);
if(cljs.core.keyword_identical_QMARK_(result__30764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30764__auto__;
}
break;
}
}catch (e31449){var ex__30765__auto__ = e31449;
var statearr_31450_33520 = state_31414;
(statearr_31450_33520[(2)] = ex__30765__auto__);


if(cljs.core.seq((state_31414[(4)]))){
var statearr_31451_33521 = state_31414;
(statearr_31451_33521[(1)] = cljs.core.first((state_31414[(4)])));

} else {
throw ex__30765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33522 = state_31414;
state_31414 = G__33522;
continue;
} else {
return ret_value__30763__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30762__auto__ = function(state_31414){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30762__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30762__auto____1.call(this,state_31414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30762__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30762__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30762__auto__;
})()
})();
var state__30944__auto__ = (function (){var statearr_31452 = f__30943__auto__();
(statearr_31452[(6)] = c__30942__auto__);

return statearr_31452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30944__auto__);
}));

return c__30942__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31454 = arguments.length;
switch (G__31454) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31457 = arguments.length;
switch (G__31457) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31463 = arguments.length;
switch (G__31463) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30942__auto___33544 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30943__auto__ = (function (){var switch__30761__auto__ = (function (state_31489){
var state_val_31490 = (state_31489[(1)]);
if((state_val_31490 === (7))){
var inst_31485 = (state_31489[(2)]);
var state_31489__$1 = state_31489;
var statearr_31491_33545 = state_31489__$1;
(statearr_31491_33545[(2)] = inst_31485);

(statearr_31491_33545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (1))){
var state_31489__$1 = state_31489;
var statearr_31492_33549 = state_31489__$1;
(statearr_31492_33549[(2)] = null);

(statearr_31492_33549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (4))){
var inst_31466 = (state_31489[(7)]);
var inst_31466__$1 = (state_31489[(2)]);
var inst_31467 = (inst_31466__$1 == null);
var state_31489__$1 = (function (){var statearr_31493 = state_31489;
(statearr_31493[(7)] = inst_31466__$1);

return statearr_31493;
})();
if(cljs.core.truth_(inst_31467)){
var statearr_31494_33550 = state_31489__$1;
(statearr_31494_33550[(1)] = (5));

} else {
var statearr_31495_33551 = state_31489__$1;
(statearr_31495_33551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (13))){
var state_31489__$1 = state_31489;
var statearr_31496_33555 = state_31489__$1;
(statearr_31496_33555[(2)] = null);

(statearr_31496_33555[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (6))){
var inst_31466 = (state_31489[(7)]);
var inst_31472 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31466) : p.call(null,inst_31466));
var state_31489__$1 = state_31489;
if(cljs.core.truth_(inst_31472)){
var statearr_31497_33556 = state_31489__$1;
(statearr_31497_33556[(1)] = (9));

} else {
var statearr_31498_33557 = state_31489__$1;
(statearr_31498_33557[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (3))){
var inst_31487 = (state_31489[(2)]);
var state_31489__$1 = state_31489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31489__$1,inst_31487);
} else {
if((state_val_31490 === (12))){
var state_31489__$1 = state_31489;
var statearr_31499_33561 = state_31489__$1;
(statearr_31499_33561[(2)] = null);

(statearr_31499_33561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (2))){
var state_31489__$1 = state_31489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31489__$1,(4),ch);
} else {
if((state_val_31490 === (11))){
var inst_31466 = (state_31489[(7)]);
var inst_31476 = (state_31489[(2)]);
var state_31489__$1 = state_31489;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31489__$1,(8),inst_31476,inst_31466);
} else {
if((state_val_31490 === (9))){
var state_31489__$1 = state_31489;
var statearr_31500_33567 = state_31489__$1;
(statearr_31500_33567[(2)] = tc);

(statearr_31500_33567[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (5))){
var inst_31469 = cljs.core.async.close_BANG_(tc);
var inst_31470 = cljs.core.async.close_BANG_(fc);
var state_31489__$1 = (function (){var statearr_31501 = state_31489;
(statearr_31501[(8)] = inst_31469);

return statearr_31501;
})();
var statearr_31502_33569 = state_31489__$1;
(statearr_31502_33569[(2)] = inst_31470);

(statearr_31502_33569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (14))){
var inst_31483 = (state_31489[(2)]);
var state_31489__$1 = state_31489;
var statearr_31503_33570 = state_31489__$1;
(statearr_31503_33570[(2)] = inst_31483);

(statearr_31503_33570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (10))){
var state_31489__$1 = state_31489;
var statearr_31504_33571 = state_31489__$1;
(statearr_31504_33571[(2)] = fc);

(statearr_31504_33571[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31490 === (8))){
var inst_31478 = (state_31489[(2)]);
var state_31489__$1 = state_31489;
if(cljs.core.truth_(inst_31478)){
var statearr_31506_33572 = state_31489__$1;
(statearr_31506_33572[(1)] = (12));

} else {
var statearr_31507_33573 = state_31489__$1;
(statearr_31507_33573[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30762__auto__ = null;
var cljs$core$async$state_machine__30762__auto____0 = (function (){
var statearr_31508 = [null,null,null,null,null,null,null,null,null];
(statearr_31508[(0)] = cljs$core$async$state_machine__30762__auto__);

(statearr_31508[(1)] = (1));

return statearr_31508;
});
var cljs$core$async$state_machine__30762__auto____1 = (function (state_31489){
while(true){
var ret_value__30763__auto__ = (function (){try{while(true){
var result__30764__auto__ = switch__30761__auto__(state_31489);
if(cljs.core.keyword_identical_QMARK_(result__30764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30764__auto__;
}
break;
}
}catch (e31509){var ex__30765__auto__ = e31509;
var statearr_31510_33576 = state_31489;
(statearr_31510_33576[(2)] = ex__30765__auto__);


if(cljs.core.seq((state_31489[(4)]))){
var statearr_31511_33577 = state_31489;
(statearr_31511_33577[(1)] = cljs.core.first((state_31489[(4)])));

} else {
throw ex__30765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33578 = state_31489;
state_31489 = G__33578;
continue;
} else {
return ret_value__30763__auto__;
}
break;
}
});
cljs$core$async$state_machine__30762__auto__ = function(state_31489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30762__auto____1.call(this,state_31489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30762__auto____0;
cljs$core$async$state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30762__auto____1;
return cljs$core$async$state_machine__30762__auto__;
})()
})();
var state__30944__auto__ = (function (){var statearr_31512 = f__30943__auto__();
(statearr_31512[(6)] = c__30942__auto___33544);

return statearr_31512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30944__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30942__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30943__auto__ = (function (){var switch__30761__auto__ = (function (state_31537){
var state_val_31538 = (state_31537[(1)]);
if((state_val_31538 === (7))){
var inst_31533 = (state_31537[(2)]);
var state_31537__$1 = state_31537;
var statearr_31539_33579 = state_31537__$1;
(statearr_31539_33579[(2)] = inst_31533);

(statearr_31539_33579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31538 === (1))){
var inst_31513 = init;
var inst_31514 = inst_31513;
var state_31537__$1 = (function (){var statearr_31540 = state_31537;
(statearr_31540[(7)] = inst_31514);

return statearr_31540;
})();
var statearr_31541_33580 = state_31537__$1;
(statearr_31541_33580[(2)] = null);

(statearr_31541_33580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31538 === (4))){
var inst_31520 = (state_31537[(8)]);
var inst_31520__$1 = (state_31537[(2)]);
var inst_31521 = (inst_31520__$1 == null);
var state_31537__$1 = (function (){var statearr_31542 = state_31537;
(statearr_31542[(8)] = inst_31520__$1);

return statearr_31542;
})();
if(cljs.core.truth_(inst_31521)){
var statearr_31543_33581 = state_31537__$1;
(statearr_31543_33581[(1)] = (5));

} else {
var statearr_31544_33582 = state_31537__$1;
(statearr_31544_33582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31538 === (6))){
var inst_31524 = (state_31537[(9)]);
var inst_31520 = (state_31537[(8)]);
var inst_31514 = (state_31537[(7)]);
var inst_31524__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31514,inst_31520) : f.call(null,inst_31514,inst_31520));
var inst_31525 = cljs.core.reduced_QMARK_(inst_31524__$1);
var state_31537__$1 = (function (){var statearr_31545 = state_31537;
(statearr_31545[(9)] = inst_31524__$1);

return statearr_31545;
})();
if(inst_31525){
var statearr_31546_33583 = state_31537__$1;
(statearr_31546_33583[(1)] = (8));

} else {
var statearr_31547_33584 = state_31537__$1;
(statearr_31547_33584[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31538 === (3))){
var inst_31535 = (state_31537[(2)]);
var state_31537__$1 = state_31537;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31537__$1,inst_31535);
} else {
if((state_val_31538 === (2))){
var state_31537__$1 = state_31537;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31537__$1,(4),ch);
} else {
if((state_val_31538 === (9))){
var inst_31524 = (state_31537[(9)]);
var inst_31514 = inst_31524;
var state_31537__$1 = (function (){var statearr_31548 = state_31537;
(statearr_31548[(7)] = inst_31514);

return statearr_31548;
})();
var statearr_31549_33585 = state_31537__$1;
(statearr_31549_33585[(2)] = null);

(statearr_31549_33585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31538 === (5))){
var inst_31514 = (state_31537[(7)]);
var state_31537__$1 = state_31537;
var statearr_31550_33591 = state_31537__$1;
(statearr_31550_33591[(2)] = inst_31514);

(statearr_31550_33591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31538 === (10))){
var inst_31531 = (state_31537[(2)]);
var state_31537__$1 = state_31537;
var statearr_31551_33592 = state_31537__$1;
(statearr_31551_33592[(2)] = inst_31531);

(statearr_31551_33592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31538 === (8))){
var inst_31524 = (state_31537[(9)]);
var inst_31527 = cljs.core.deref(inst_31524);
var state_31537__$1 = state_31537;
var statearr_31552_33593 = state_31537__$1;
(statearr_31552_33593[(2)] = inst_31527);

(statearr_31552_33593[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__30762__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30762__auto____0 = (function (){
var statearr_31553 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31553[(0)] = cljs$core$async$reduce_$_state_machine__30762__auto__);

(statearr_31553[(1)] = (1));

return statearr_31553;
});
var cljs$core$async$reduce_$_state_machine__30762__auto____1 = (function (state_31537){
while(true){
var ret_value__30763__auto__ = (function (){try{while(true){
var result__30764__auto__ = switch__30761__auto__(state_31537);
if(cljs.core.keyword_identical_QMARK_(result__30764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30764__auto__;
}
break;
}
}catch (e31554){var ex__30765__auto__ = e31554;
var statearr_31555_33594 = state_31537;
(statearr_31555_33594[(2)] = ex__30765__auto__);


if(cljs.core.seq((state_31537[(4)]))){
var statearr_31556_33595 = state_31537;
(statearr_31556_33595[(1)] = cljs.core.first((state_31537[(4)])));

} else {
throw ex__30765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33596 = state_31537;
state_31537 = G__33596;
continue;
} else {
return ret_value__30763__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30762__auto__ = function(state_31537){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30762__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30762__auto____1.call(this,state_31537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30762__auto____0;
cljs$core$async$reduce_$_state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30762__auto____1;
return cljs$core$async$reduce_$_state_machine__30762__auto__;
})()
})();
var state__30944__auto__ = (function (){var statearr_31558 = f__30943__auto__();
(statearr_31558[(6)] = c__30942__auto__);

return statearr_31558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30944__auto__);
}));

return c__30942__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30942__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30943__auto__ = (function (){var switch__30761__auto__ = (function (state_31564){
var state_val_31565 = (state_31564[(1)]);
if((state_val_31565 === (1))){
var inst_31559 = cljs.core.async.reduce(f__$1,init,ch);
var state_31564__$1 = state_31564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31564__$1,(2),inst_31559);
} else {
if((state_val_31565 === (2))){
var inst_31561 = (state_31564[(2)]);
var inst_31562 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31561) : f__$1.call(null,inst_31561));
var state_31564__$1 = state_31564;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31564__$1,inst_31562);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30762__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30762__auto____0 = (function (){
var statearr_31571 = [null,null,null,null,null,null,null];
(statearr_31571[(0)] = cljs$core$async$transduce_$_state_machine__30762__auto__);

(statearr_31571[(1)] = (1));

return statearr_31571;
});
var cljs$core$async$transduce_$_state_machine__30762__auto____1 = (function (state_31564){
while(true){
var ret_value__30763__auto__ = (function (){try{while(true){
var result__30764__auto__ = switch__30761__auto__(state_31564);
if(cljs.core.keyword_identical_QMARK_(result__30764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30764__auto__;
}
break;
}
}catch (e31572){var ex__30765__auto__ = e31572;
var statearr_31573_33597 = state_31564;
(statearr_31573_33597[(2)] = ex__30765__auto__);


if(cljs.core.seq((state_31564[(4)]))){
var statearr_31574_33598 = state_31564;
(statearr_31574_33598[(1)] = cljs.core.first((state_31564[(4)])));

} else {
throw ex__30765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33599 = state_31564;
state_31564 = G__33599;
continue;
} else {
return ret_value__30763__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30762__auto__ = function(state_31564){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30762__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30762__auto____1.call(this,state_31564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30762__auto____0;
cljs$core$async$transduce_$_state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30762__auto____1;
return cljs$core$async$transduce_$_state_machine__30762__auto__;
})()
})();
var state__30944__auto__ = (function (){var statearr_31575 = f__30943__auto__();
(statearr_31575[(6)] = c__30942__auto__);

return statearr_31575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30944__auto__);
}));

return c__30942__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__31577 = arguments.length;
switch (G__31577) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30942__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30943__auto__ = (function (){var switch__30761__auto__ = (function (state_31608){
var state_val_31609 = (state_31608[(1)]);
if((state_val_31609 === (7))){
var inst_31588 = (state_31608[(2)]);
var state_31608__$1 = state_31608;
var statearr_31612_33601 = state_31608__$1;
(statearr_31612_33601[(2)] = inst_31588);

(statearr_31612_33601[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (1))){
var inst_31578 = cljs.core.seq(coll);
var inst_31579 = inst_31578;
var state_31608__$1 = (function (){var statearr_31617 = state_31608;
(statearr_31617[(7)] = inst_31579);

return statearr_31617;
})();
var statearr_31618_33608 = state_31608__$1;
(statearr_31618_33608[(2)] = null);

(statearr_31618_33608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (4))){
var inst_31579 = (state_31608[(7)]);
var inst_31586 = cljs.core.first(inst_31579);
var state_31608__$1 = state_31608;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31608__$1,(7),ch,inst_31586);
} else {
if((state_val_31609 === (13))){
var inst_31600 = (state_31608[(2)]);
var state_31608__$1 = state_31608;
var statearr_31621_33613 = state_31608__$1;
(statearr_31621_33613[(2)] = inst_31600);

(statearr_31621_33613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (6))){
var inst_31591 = (state_31608[(2)]);
var state_31608__$1 = state_31608;
if(cljs.core.truth_(inst_31591)){
var statearr_31624_33614 = state_31608__$1;
(statearr_31624_33614[(1)] = (8));

} else {
var statearr_31625_33615 = state_31608__$1;
(statearr_31625_33615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (3))){
var inst_31604 = (state_31608[(2)]);
var state_31608__$1 = state_31608;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31608__$1,inst_31604);
} else {
if((state_val_31609 === (12))){
var state_31608__$1 = state_31608;
var statearr_31626_33616 = state_31608__$1;
(statearr_31626_33616[(2)] = null);

(statearr_31626_33616[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (2))){
var inst_31579 = (state_31608[(7)]);
var state_31608__$1 = state_31608;
if(cljs.core.truth_(inst_31579)){
var statearr_31627_33617 = state_31608__$1;
(statearr_31627_33617[(1)] = (4));

} else {
var statearr_31628_33618 = state_31608__$1;
(statearr_31628_33618[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (11))){
var inst_31597 = cljs.core.async.close_BANG_(ch);
var state_31608__$1 = state_31608;
var statearr_31630_33619 = state_31608__$1;
(statearr_31630_33619[(2)] = inst_31597);

(statearr_31630_33619[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (9))){
var state_31608__$1 = state_31608;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31633_33620 = state_31608__$1;
(statearr_31633_33620[(1)] = (11));

} else {
var statearr_31634_33621 = state_31608__$1;
(statearr_31634_33621[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (5))){
var inst_31579 = (state_31608[(7)]);
var state_31608__$1 = state_31608;
var statearr_31635_33622 = state_31608__$1;
(statearr_31635_33622[(2)] = inst_31579);

(statearr_31635_33622[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (10))){
var inst_31602 = (state_31608[(2)]);
var state_31608__$1 = state_31608;
var statearr_31636_33623 = state_31608__$1;
(statearr_31636_33623[(2)] = inst_31602);

(statearr_31636_33623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31609 === (8))){
var inst_31579 = (state_31608[(7)]);
var inst_31593 = cljs.core.next(inst_31579);
var inst_31579__$1 = inst_31593;
var state_31608__$1 = (function (){var statearr_31637 = state_31608;
(statearr_31637[(7)] = inst_31579__$1);

return statearr_31637;
})();
var statearr_31638_33627 = state_31608__$1;
(statearr_31638_33627[(2)] = null);

(statearr_31638_33627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30762__auto__ = null;
var cljs$core$async$state_machine__30762__auto____0 = (function (){
var statearr_31643 = [null,null,null,null,null,null,null,null];
(statearr_31643[(0)] = cljs$core$async$state_machine__30762__auto__);

(statearr_31643[(1)] = (1));

return statearr_31643;
});
var cljs$core$async$state_machine__30762__auto____1 = (function (state_31608){
while(true){
var ret_value__30763__auto__ = (function (){try{while(true){
var result__30764__auto__ = switch__30761__auto__(state_31608);
if(cljs.core.keyword_identical_QMARK_(result__30764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30764__auto__;
}
break;
}
}catch (e31644){var ex__30765__auto__ = e31644;
var statearr_31645_33628 = state_31608;
(statearr_31645_33628[(2)] = ex__30765__auto__);


if(cljs.core.seq((state_31608[(4)]))){
var statearr_31646_33629 = state_31608;
(statearr_31646_33629[(1)] = cljs.core.first((state_31608[(4)])));

} else {
throw ex__30765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33630 = state_31608;
state_31608 = G__33630;
continue;
} else {
return ret_value__30763__auto__;
}
break;
}
});
cljs$core$async$state_machine__30762__auto__ = function(state_31608){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30762__auto____1.call(this,state_31608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30762__auto____0;
cljs$core$async$state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30762__auto____1;
return cljs$core$async$state_machine__30762__auto__;
})()
})();
var state__30944__auto__ = (function (){var statearr_31649 = f__30943__auto__();
(statearr_31649[(6)] = c__30942__auto__);

return statearr_31649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30944__auto__);
}));

return c__30942__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31656 = arguments.length;
switch (G__31656) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33633 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33633(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33634 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33634(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33635 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33635(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33646 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33646(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31702 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31702 = (function (ch,cs,meta31703){
this.ch = ch;
this.cs = cs;
this.meta31703 = meta31703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31704,meta31703__$1){
var self__ = this;
var _31704__$1 = this;
return (new cljs.core.async.t_cljs$core$async31702(self__.ch,self__.cs,meta31703__$1));
}));

(cljs.core.async.t_cljs$core$async31702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31704){
var self__ = this;
var _31704__$1 = this;
return self__.meta31703;
}));

(cljs.core.async.t_cljs$core$async31702.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31702.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31702.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31702.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31702.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31702.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31702.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31703","meta31703",-1801872570,null)], null);
}));

(cljs.core.async.t_cljs$core$async31702.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31702.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31702");

(cljs.core.async.t_cljs$core$async31702.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31702");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31702.
 */
cljs.core.async.__GT_t_cljs$core$async31702 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31702(ch__$1,cs__$1,meta31703){
return (new cljs.core.async.t_cljs$core$async31702(ch__$1,cs__$1,meta31703));
});

}

return (new cljs.core.async.t_cljs$core$async31702(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30942__auto___33647 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30943__auto__ = (function (){var switch__30761__auto__ = (function (state_31889){
var state_val_31890 = (state_31889[(1)]);
if((state_val_31890 === (7))){
var inst_31885 = (state_31889[(2)]);
var state_31889__$1 = state_31889;
var statearr_31893_33648 = state_31889__$1;
(statearr_31893_33648[(2)] = inst_31885);

(statearr_31893_33648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (20))){
var inst_31758 = (state_31889[(7)]);
var inst_31770 = cljs.core.first(inst_31758);
var inst_31771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31770,(0),null);
var inst_31772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31770,(1),null);
var state_31889__$1 = (function (){var statearr_31897 = state_31889;
(statearr_31897[(8)] = inst_31771);

return statearr_31897;
})();
if(cljs.core.truth_(inst_31772)){
var statearr_31899_33649 = state_31889__$1;
(statearr_31899_33649[(1)] = (22));

} else {
var statearr_31900_33650 = state_31889__$1;
(statearr_31900_33650[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (27))){
var inst_31815 = (state_31889[(9)]);
var inst_31806 = (state_31889[(10)]);
var inst_31804 = (state_31889[(11)]);
var inst_31727 = (state_31889[(12)]);
var inst_31815__$1 = cljs.core._nth(inst_31804,inst_31806);
var inst_31817 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31815__$1,inst_31727,done);
var state_31889__$1 = (function (){var statearr_31903 = state_31889;
(statearr_31903[(9)] = inst_31815__$1);

return statearr_31903;
})();
if(cljs.core.truth_(inst_31817)){
var statearr_31904_33651 = state_31889__$1;
(statearr_31904_33651[(1)] = (30));

} else {
var statearr_31905_33652 = state_31889__$1;
(statearr_31905_33652[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (1))){
var state_31889__$1 = state_31889;
var statearr_31907_33653 = state_31889__$1;
(statearr_31907_33653[(2)] = null);

(statearr_31907_33653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (24))){
var inst_31758 = (state_31889[(7)]);
var inst_31777 = (state_31889[(2)]);
var inst_31778 = cljs.core.next(inst_31758);
var inst_31736 = inst_31778;
var inst_31737 = null;
var inst_31738 = (0);
var inst_31739 = (0);
var state_31889__$1 = (function (){var statearr_31910 = state_31889;
(statearr_31910[(13)] = inst_31737);

(statearr_31910[(14)] = inst_31736);

(statearr_31910[(15)] = inst_31777);

(statearr_31910[(16)] = inst_31739);

(statearr_31910[(17)] = inst_31738);

return statearr_31910;
})();
var statearr_31914_33657 = state_31889__$1;
(statearr_31914_33657[(2)] = null);

(statearr_31914_33657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (39))){
var state_31889__$1 = state_31889;
var statearr_31926_33658 = state_31889__$1;
(statearr_31926_33658[(2)] = null);

(statearr_31926_33658[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (4))){
var inst_31727 = (state_31889[(12)]);
var inst_31727__$1 = (state_31889[(2)]);
var inst_31728 = (inst_31727__$1 == null);
var state_31889__$1 = (function (){var statearr_31931 = state_31889;
(statearr_31931[(12)] = inst_31727__$1);

return statearr_31931;
})();
if(cljs.core.truth_(inst_31728)){
var statearr_31932_33659 = state_31889__$1;
(statearr_31932_33659[(1)] = (5));

} else {
var statearr_31933_33660 = state_31889__$1;
(statearr_31933_33660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (15))){
var inst_31737 = (state_31889[(13)]);
var inst_31736 = (state_31889[(14)]);
var inst_31739 = (state_31889[(16)]);
var inst_31738 = (state_31889[(17)]);
var inst_31754 = (state_31889[(2)]);
var inst_31755 = (inst_31739 + (1));
var tmp31915 = inst_31737;
var tmp31916 = inst_31736;
var tmp31917 = inst_31738;
var inst_31736__$1 = tmp31916;
var inst_31737__$1 = tmp31915;
var inst_31738__$1 = tmp31917;
var inst_31739__$1 = inst_31755;
var state_31889__$1 = (function (){var statearr_31952 = state_31889;
(statearr_31952[(13)] = inst_31737__$1);

(statearr_31952[(14)] = inst_31736__$1);

(statearr_31952[(18)] = inst_31754);

(statearr_31952[(16)] = inst_31739__$1);

(statearr_31952[(17)] = inst_31738__$1);

return statearr_31952;
})();
var statearr_31957_33661 = state_31889__$1;
(statearr_31957_33661[(2)] = null);

(statearr_31957_33661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (21))){
var inst_31781 = (state_31889[(2)]);
var state_31889__$1 = state_31889;
var statearr_31963_33663 = state_31889__$1;
(statearr_31963_33663[(2)] = inst_31781);

(statearr_31963_33663[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (31))){
var inst_31815 = (state_31889[(9)]);
var inst_31822 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31815);
var state_31889__$1 = state_31889;
var statearr_31968_33664 = state_31889__$1;
(statearr_31968_33664[(2)] = inst_31822);

(statearr_31968_33664[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (32))){
var inst_31803 = (state_31889[(19)]);
var inst_31805 = (state_31889[(20)]);
var inst_31806 = (state_31889[(10)]);
var inst_31804 = (state_31889[(11)]);
var inst_31824 = (state_31889[(2)]);
var inst_31825 = (inst_31806 + (1));
var tmp31958 = inst_31803;
var tmp31959 = inst_31805;
var tmp31960 = inst_31804;
var inst_31803__$1 = tmp31958;
var inst_31804__$1 = tmp31960;
var inst_31805__$1 = tmp31959;
var inst_31806__$1 = inst_31825;
var state_31889__$1 = (function (){var statearr_31969 = state_31889;
(statearr_31969[(21)] = inst_31824);

(statearr_31969[(19)] = inst_31803__$1);

(statearr_31969[(20)] = inst_31805__$1);

(statearr_31969[(10)] = inst_31806__$1);

(statearr_31969[(11)] = inst_31804__$1);

return statearr_31969;
})();
var statearr_31970_33666 = state_31889__$1;
(statearr_31970_33666[(2)] = null);

(statearr_31970_33666[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (40))){
var inst_31837 = (state_31889[(22)]);
var inst_31841 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31837);
var state_31889__$1 = state_31889;
var statearr_31971_33667 = state_31889__$1;
(statearr_31971_33667[(2)] = inst_31841);

(statearr_31971_33667[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (33))){
var inst_31828 = (state_31889[(23)]);
var inst_31830 = cljs.core.chunked_seq_QMARK_(inst_31828);
var state_31889__$1 = state_31889;
if(inst_31830){
var statearr_31972_33669 = state_31889__$1;
(statearr_31972_33669[(1)] = (36));

} else {
var statearr_31973_33670 = state_31889__$1;
(statearr_31973_33670[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (13))){
var inst_31748 = (state_31889[(24)]);
var inst_31751 = cljs.core.async.close_BANG_(inst_31748);
var state_31889__$1 = state_31889;
var statearr_31974_33671 = state_31889__$1;
(statearr_31974_33671[(2)] = inst_31751);

(statearr_31974_33671[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (22))){
var inst_31771 = (state_31889[(8)]);
var inst_31774 = cljs.core.async.close_BANG_(inst_31771);
var state_31889__$1 = state_31889;
var statearr_31975_33672 = state_31889__$1;
(statearr_31975_33672[(2)] = inst_31774);

(statearr_31975_33672[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (36))){
var inst_31828 = (state_31889[(23)]);
var inst_31832 = cljs.core.chunk_first(inst_31828);
var inst_31833 = cljs.core.chunk_rest(inst_31828);
var inst_31834 = cljs.core.count(inst_31832);
var inst_31803 = inst_31833;
var inst_31804 = inst_31832;
var inst_31805 = inst_31834;
var inst_31806 = (0);
var state_31889__$1 = (function (){var statearr_31978 = state_31889;
(statearr_31978[(19)] = inst_31803);

(statearr_31978[(20)] = inst_31805);

(statearr_31978[(10)] = inst_31806);

(statearr_31978[(11)] = inst_31804);

return statearr_31978;
})();
var statearr_31983_33684 = state_31889__$1;
(statearr_31983_33684[(2)] = null);

(statearr_31983_33684[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (41))){
var inst_31828 = (state_31889[(23)]);
var inst_31843 = (state_31889[(2)]);
var inst_31862 = cljs.core.next(inst_31828);
var inst_31803 = inst_31862;
var inst_31804 = null;
var inst_31805 = (0);
var inst_31806 = (0);
var state_31889__$1 = (function (){var statearr_31986 = state_31889;
(statearr_31986[(19)] = inst_31803);

(statearr_31986[(20)] = inst_31805);

(statearr_31986[(10)] = inst_31806);

(statearr_31986[(25)] = inst_31843);

(statearr_31986[(11)] = inst_31804);

return statearr_31986;
})();
var statearr_31987_33692 = state_31889__$1;
(statearr_31987_33692[(2)] = null);

(statearr_31987_33692[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (43))){
var state_31889__$1 = state_31889;
var statearr_31989_33694 = state_31889__$1;
(statearr_31989_33694[(2)] = null);

(statearr_31989_33694[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (29))){
var inst_31872 = (state_31889[(2)]);
var state_31889__$1 = state_31889;
var statearr_31993_33697 = state_31889__$1;
(statearr_31993_33697[(2)] = inst_31872);

(statearr_31993_33697[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (44))){
var inst_31882 = (state_31889[(2)]);
var state_31889__$1 = (function (){var statearr_31998 = state_31889;
(statearr_31998[(26)] = inst_31882);

return statearr_31998;
})();
var statearr_31999_33700 = state_31889__$1;
(statearr_31999_33700[(2)] = null);

(statearr_31999_33700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (6))){
var inst_31795 = (state_31889[(27)]);
var inst_31794 = cljs.core.deref(cs);
var inst_31795__$1 = cljs.core.keys(inst_31794);
var inst_31796 = cljs.core.count(inst_31795__$1);
var inst_31797 = cljs.core.reset_BANG_(dctr,inst_31796);
var inst_31802 = cljs.core.seq(inst_31795__$1);
var inst_31803 = inst_31802;
var inst_31804 = null;
var inst_31805 = (0);
var inst_31806 = (0);
var state_31889__$1 = (function (){var statearr_32000 = state_31889;
(statearr_32000[(28)] = inst_31797);

(statearr_32000[(19)] = inst_31803);

(statearr_32000[(20)] = inst_31805);

(statearr_32000[(10)] = inst_31806);

(statearr_32000[(11)] = inst_31804);

(statearr_32000[(27)] = inst_31795__$1);

return statearr_32000;
})();
var statearr_32001_33716 = state_31889__$1;
(statearr_32001_33716[(2)] = null);

(statearr_32001_33716[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (28))){
var inst_31828 = (state_31889[(23)]);
var inst_31803 = (state_31889[(19)]);
var inst_31828__$1 = cljs.core.seq(inst_31803);
var state_31889__$1 = (function (){var statearr_32002 = state_31889;
(statearr_32002[(23)] = inst_31828__$1);

return statearr_32002;
})();
if(inst_31828__$1){
var statearr_32003_33717 = state_31889__$1;
(statearr_32003_33717[(1)] = (33));

} else {
var statearr_32004_33718 = state_31889__$1;
(statearr_32004_33718[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (25))){
var inst_31805 = (state_31889[(20)]);
var inst_31806 = (state_31889[(10)]);
var inst_31811 = (inst_31806 < inst_31805);
var inst_31812 = inst_31811;
var state_31889__$1 = state_31889;
if(cljs.core.truth_(inst_31812)){
var statearr_32005_33719 = state_31889__$1;
(statearr_32005_33719[(1)] = (27));

} else {
var statearr_32006_33720 = state_31889__$1;
(statearr_32006_33720[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (34))){
var state_31889__$1 = state_31889;
var statearr_32014_33721 = state_31889__$1;
(statearr_32014_33721[(2)] = null);

(statearr_32014_33721[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (17))){
var state_31889__$1 = state_31889;
var statearr_32017_33724 = state_31889__$1;
(statearr_32017_33724[(2)] = null);

(statearr_32017_33724[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (3))){
var inst_31887 = (state_31889[(2)]);
var state_31889__$1 = state_31889;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31889__$1,inst_31887);
} else {
if((state_val_31890 === (12))){
var inst_31786 = (state_31889[(2)]);
var state_31889__$1 = state_31889;
var statearr_32022_33725 = state_31889__$1;
(statearr_32022_33725[(2)] = inst_31786);

(statearr_32022_33725[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (2))){
var state_31889__$1 = state_31889;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31889__$1,(4),ch);
} else {
if((state_val_31890 === (23))){
var state_31889__$1 = state_31889;
var statearr_32023_33726 = state_31889__$1;
(statearr_32023_33726[(2)] = null);

(statearr_32023_33726[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (35))){
var inst_31870 = (state_31889[(2)]);
var state_31889__$1 = state_31889;
var statearr_32024_33728 = state_31889__$1;
(statearr_32024_33728[(2)] = inst_31870);

(statearr_32024_33728[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (19))){
var inst_31758 = (state_31889[(7)]);
var inst_31762 = cljs.core.chunk_first(inst_31758);
var inst_31763 = cljs.core.chunk_rest(inst_31758);
var inst_31764 = cljs.core.count(inst_31762);
var inst_31736 = inst_31763;
var inst_31737 = inst_31762;
var inst_31738 = inst_31764;
var inst_31739 = (0);
var state_31889__$1 = (function (){var statearr_32025 = state_31889;
(statearr_32025[(13)] = inst_31737);

(statearr_32025[(14)] = inst_31736);

(statearr_32025[(16)] = inst_31739);

(statearr_32025[(17)] = inst_31738);

return statearr_32025;
})();
var statearr_32026_33729 = state_31889__$1;
(statearr_32026_33729[(2)] = null);

(statearr_32026_33729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (11))){
var inst_31758 = (state_31889[(7)]);
var inst_31736 = (state_31889[(14)]);
var inst_31758__$1 = cljs.core.seq(inst_31736);
var state_31889__$1 = (function (){var statearr_32030 = state_31889;
(statearr_32030[(7)] = inst_31758__$1);

return statearr_32030;
})();
if(inst_31758__$1){
var statearr_32031_33730 = state_31889__$1;
(statearr_32031_33730[(1)] = (16));

} else {
var statearr_32036_33731 = state_31889__$1;
(statearr_32036_33731[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (9))){
var inst_31791 = (state_31889[(2)]);
var state_31889__$1 = state_31889;
var statearr_32047_33732 = state_31889__$1;
(statearr_32047_33732[(2)] = inst_31791);

(statearr_32047_33732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (5))){
var inst_31734 = cljs.core.deref(cs);
var inst_31735 = cljs.core.seq(inst_31734);
var inst_31736 = inst_31735;
var inst_31737 = null;
var inst_31738 = (0);
var inst_31739 = (0);
var state_31889__$1 = (function (){var statearr_32048 = state_31889;
(statearr_32048[(13)] = inst_31737);

(statearr_32048[(14)] = inst_31736);

(statearr_32048[(16)] = inst_31739);

(statearr_32048[(17)] = inst_31738);

return statearr_32048;
})();
var statearr_32051_33733 = state_31889__$1;
(statearr_32051_33733[(2)] = null);

(statearr_32051_33733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (14))){
var state_31889__$1 = state_31889;
var statearr_32052_33734 = state_31889__$1;
(statearr_32052_33734[(2)] = null);

(statearr_32052_33734[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (45))){
var inst_31879 = (state_31889[(2)]);
var state_31889__$1 = state_31889;
var statearr_32053_33735 = state_31889__$1;
(statearr_32053_33735[(2)] = inst_31879);

(statearr_32053_33735[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (26))){
var inst_31795 = (state_31889[(27)]);
var inst_31874 = (state_31889[(2)]);
var inst_31875 = cljs.core.seq(inst_31795);
var state_31889__$1 = (function (){var statearr_32061 = state_31889;
(statearr_32061[(29)] = inst_31874);

return statearr_32061;
})();
if(inst_31875){
var statearr_32062_33755 = state_31889__$1;
(statearr_32062_33755[(1)] = (42));

} else {
var statearr_32065_33756 = state_31889__$1;
(statearr_32065_33756[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (16))){
var inst_31758 = (state_31889[(7)]);
var inst_31760 = cljs.core.chunked_seq_QMARK_(inst_31758);
var state_31889__$1 = state_31889;
if(inst_31760){
var statearr_32066_33761 = state_31889__$1;
(statearr_32066_33761[(1)] = (19));

} else {
var statearr_32067_33765 = state_31889__$1;
(statearr_32067_33765[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (38))){
var inst_31867 = (state_31889[(2)]);
var state_31889__$1 = state_31889;
var statearr_32068_33766 = state_31889__$1;
(statearr_32068_33766[(2)] = inst_31867);

(statearr_32068_33766[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (30))){
var state_31889__$1 = state_31889;
var statearr_32071_33767 = state_31889__$1;
(statearr_32071_33767[(2)] = null);

(statearr_32071_33767[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (10))){
var inst_31737 = (state_31889[(13)]);
var inst_31739 = (state_31889[(16)]);
var inst_31747 = cljs.core._nth(inst_31737,inst_31739);
var inst_31748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31747,(0),null);
var inst_31749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31747,(1),null);
var state_31889__$1 = (function (){var statearr_32073 = state_31889;
(statearr_32073[(24)] = inst_31748);

return statearr_32073;
})();
if(cljs.core.truth_(inst_31749)){
var statearr_32074_33771 = state_31889__$1;
(statearr_32074_33771[(1)] = (13));

} else {
var statearr_32075_33772 = state_31889__$1;
(statearr_32075_33772[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (18))){
var inst_31784 = (state_31889[(2)]);
var state_31889__$1 = state_31889;
var statearr_32076_33773 = state_31889__$1;
(statearr_32076_33773[(2)] = inst_31784);

(statearr_32076_33773[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (42))){
var state_31889__$1 = state_31889;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31889__$1,(45),dchan);
} else {
if((state_val_31890 === (37))){
var inst_31828 = (state_31889[(23)]);
var inst_31837 = (state_31889[(22)]);
var inst_31727 = (state_31889[(12)]);
var inst_31837__$1 = cljs.core.first(inst_31828);
var inst_31838 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31837__$1,inst_31727,done);
var state_31889__$1 = (function (){var statearr_32080 = state_31889;
(statearr_32080[(22)] = inst_31837__$1);

return statearr_32080;
})();
if(cljs.core.truth_(inst_31838)){
var statearr_32081_33783 = state_31889__$1;
(statearr_32081_33783[(1)] = (39));

} else {
var statearr_32082_33784 = state_31889__$1;
(statearr_32082_33784[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31890 === (8))){
var inst_31739 = (state_31889[(16)]);
var inst_31738 = (state_31889[(17)]);
var inst_31741 = (inst_31739 < inst_31738);
var inst_31742 = inst_31741;
var state_31889__$1 = state_31889;
if(cljs.core.truth_(inst_31742)){
var statearr_32083_33785 = state_31889__$1;
(statearr_32083_33785[(1)] = (10));

} else {
var statearr_32084_33786 = state_31889__$1;
(statearr_32084_33786[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__30762__auto__ = null;
var cljs$core$async$mult_$_state_machine__30762__auto____0 = (function (){
var statearr_32085 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32085[(0)] = cljs$core$async$mult_$_state_machine__30762__auto__);

(statearr_32085[(1)] = (1));

return statearr_32085;
});
var cljs$core$async$mult_$_state_machine__30762__auto____1 = (function (state_31889){
while(true){
var ret_value__30763__auto__ = (function (){try{while(true){
var result__30764__auto__ = switch__30761__auto__(state_31889);
if(cljs.core.keyword_identical_QMARK_(result__30764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30764__auto__;
}
break;
}
}catch (e32086){var ex__30765__auto__ = e32086;
var statearr_32087_33791 = state_31889;
(statearr_32087_33791[(2)] = ex__30765__auto__);


if(cljs.core.seq((state_31889[(4)]))){
var statearr_32088_33792 = state_31889;
(statearr_32088_33792[(1)] = cljs.core.first((state_31889[(4)])));

} else {
throw ex__30765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33793 = state_31889;
state_31889 = G__33793;
continue;
} else {
return ret_value__30763__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30762__auto__ = function(state_31889){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30762__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30762__auto____1.call(this,state_31889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30762__auto____0;
cljs$core$async$mult_$_state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30762__auto____1;
return cljs$core$async$mult_$_state_machine__30762__auto__;
})()
})();
var state__30944__auto__ = (function (){var statearr_32092 = f__30943__auto__();
(statearr_32092[(6)] = c__30942__auto___33647);

return statearr_32092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30944__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32096 = arguments.length;
switch (G__32096) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33815 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33815(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33816 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33816(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33817 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33817(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33842 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33842(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33843 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33843(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33855 = arguments.length;
var i__4737__auto___33856 = (0);
while(true){
if((i__4737__auto___33856 < len__4736__auto___33855)){
args__4742__auto__.push((arguments[i__4737__auto___33856]));

var G__33857 = (i__4737__auto___33856 + (1));
i__4737__auto___33856 = G__33857;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32128){
var map__32129 = p__32128;
var map__32129__$1 = (((((!((map__32129 == null))))?(((((map__32129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32129):map__32129);
var opts = map__32129__$1;
var statearr_32131_33859 = state;
(statearr_32131_33859[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32132_33861 = state;
(statearr_32132_33861[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_32133_33862 = state;
(statearr_32133_33862[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32124){
var G__32125 = cljs.core.first(seq32124);
var seq32124__$1 = cljs.core.next(seq32124);
var G__32126 = cljs.core.first(seq32124__$1);
var seq32124__$2 = cljs.core.next(seq32124__$1);
var G__32127 = cljs.core.first(seq32124__$2);
var seq32124__$3 = cljs.core.next(seq32124__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32125,G__32126,G__32127,seq32124__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32144 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32144 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32145){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32145 = meta32145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32146,meta32145__$1){
var self__ = this;
var _32146__$1 = this;
return (new cljs.core.async.t_cljs$core$async32144(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32145__$1));
}));

(cljs.core.async.t_cljs$core$async32144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32146){
var self__ = this;
var _32146__$1 = this;
return self__.meta32145;
}));

(cljs.core.async.t_cljs$core$async32144.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32144.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32144.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32144.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32144.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32144.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32144.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32144.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32144.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32145","meta32145",69311305,null)], null);
}));

(cljs.core.async.t_cljs$core$async32144.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32144.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32144");

(cljs.core.async.t_cljs$core$async32144.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32144");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32144.
 */
cljs.core.async.__GT_t_cljs$core$async32144 = (function cljs$core$async$mix_$___GT_t_cljs$core$async32144(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32145){
return (new cljs.core.async.t_cljs$core$async32144(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32145));
});

}

return (new cljs.core.async.t_cljs$core$async32144(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30942__auto___33872 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30943__auto__ = (function (){var switch__30761__auto__ = (function (state_32261){
var state_val_32262 = (state_32261[(1)]);
if((state_val_32262 === (7))){
var inst_32176 = (state_32261[(2)]);
var state_32261__$1 = state_32261;
var statearr_32264_33873 = state_32261__$1;
(statearr_32264_33873[(2)] = inst_32176);

(statearr_32264_33873[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (20))){
var inst_32188 = (state_32261[(7)]);
var state_32261__$1 = state_32261;
var statearr_32265_33874 = state_32261__$1;
(statearr_32265_33874[(2)] = inst_32188);

(statearr_32265_33874[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (27))){
var state_32261__$1 = state_32261;
var statearr_32266_33877 = state_32261__$1;
(statearr_32266_33877[(2)] = null);

(statearr_32266_33877[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (1))){
var inst_32163 = (state_32261[(8)]);
var inst_32163__$1 = calc_state();
var inst_32165 = (inst_32163__$1 == null);
var inst_32166 = cljs.core.not(inst_32165);
var state_32261__$1 = (function (){var statearr_32267 = state_32261;
(statearr_32267[(8)] = inst_32163__$1);

return statearr_32267;
})();
if(inst_32166){
var statearr_32268_33878 = state_32261__$1;
(statearr_32268_33878[(1)] = (2));

} else {
var statearr_32269_33879 = state_32261__$1;
(statearr_32269_33879[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (24))){
var inst_32212 = (state_32261[(9)]);
var inst_32221 = (state_32261[(10)]);
var inst_32235 = (state_32261[(11)]);
var inst_32235__$1 = (inst_32212.cljs$core$IFn$_invoke$arity$1 ? inst_32212.cljs$core$IFn$_invoke$arity$1(inst_32221) : inst_32212.call(null,inst_32221));
var state_32261__$1 = (function (){var statearr_32270 = state_32261;
(statearr_32270[(11)] = inst_32235__$1);

return statearr_32270;
})();
if(cljs.core.truth_(inst_32235__$1)){
var statearr_32271_33880 = state_32261__$1;
(statearr_32271_33880[(1)] = (29));

} else {
var statearr_32272_33881 = state_32261__$1;
(statearr_32272_33881[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (4))){
var inst_32179 = (state_32261[(2)]);
var state_32261__$1 = state_32261;
if(cljs.core.truth_(inst_32179)){
var statearr_32273_33882 = state_32261__$1;
(statearr_32273_33882[(1)] = (8));

} else {
var statearr_32274_33883 = state_32261__$1;
(statearr_32274_33883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (15))){
var inst_32206 = (state_32261[(2)]);
var state_32261__$1 = state_32261;
if(cljs.core.truth_(inst_32206)){
var statearr_32275_33884 = state_32261__$1;
(statearr_32275_33884[(1)] = (19));

} else {
var statearr_32276_33885 = state_32261__$1;
(statearr_32276_33885[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (21))){
var inst_32211 = (state_32261[(12)]);
var inst_32211__$1 = (state_32261[(2)]);
var inst_32212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32211__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32211__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32211__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32261__$1 = (function (){var statearr_32279 = state_32261;
(statearr_32279[(9)] = inst_32212);

(statearr_32279[(13)] = inst_32213);

(statearr_32279[(12)] = inst_32211__$1);

return statearr_32279;
})();
return cljs.core.async.ioc_alts_BANG_(state_32261__$1,(22),inst_32214);
} else {
if((state_val_32262 === (31))){
var inst_32243 = (state_32261[(2)]);
var state_32261__$1 = state_32261;
if(cljs.core.truth_(inst_32243)){
var statearr_32280_33886 = state_32261__$1;
(statearr_32280_33886[(1)] = (32));

} else {
var statearr_32281_33903 = state_32261__$1;
(statearr_32281_33903[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (32))){
var inst_32220 = (state_32261[(14)]);
var state_32261__$1 = state_32261;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32261__$1,(35),out,inst_32220);
} else {
if((state_val_32262 === (33))){
var inst_32211 = (state_32261[(12)]);
var inst_32188 = inst_32211;
var state_32261__$1 = (function (){var statearr_32284 = state_32261;
(statearr_32284[(7)] = inst_32188);

return statearr_32284;
})();
var statearr_32286_33904 = state_32261__$1;
(statearr_32286_33904[(2)] = null);

(statearr_32286_33904[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (13))){
var inst_32188 = (state_32261[(7)]);
var inst_32195 = inst_32188.cljs$lang$protocol_mask$partition0$;
var inst_32196 = (inst_32195 & (64));
var inst_32197 = inst_32188.cljs$core$ISeq$;
var inst_32198 = (cljs.core.PROTOCOL_SENTINEL === inst_32197);
var inst_32199 = ((inst_32196) || (inst_32198));
var state_32261__$1 = state_32261;
if(cljs.core.truth_(inst_32199)){
var statearr_32290_33905 = state_32261__$1;
(statearr_32290_33905[(1)] = (16));

} else {
var statearr_32291_33906 = state_32261__$1;
(statearr_32291_33906[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (22))){
var inst_32221 = (state_32261[(10)]);
var inst_32220 = (state_32261[(14)]);
var inst_32219 = (state_32261[(2)]);
var inst_32220__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32219,(0),null);
var inst_32221__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32219,(1),null);
var inst_32222 = (inst_32220__$1 == null);
var inst_32223 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32221__$1,change);
var inst_32224 = ((inst_32222) || (inst_32223));
var state_32261__$1 = (function (){var statearr_32292 = state_32261;
(statearr_32292[(10)] = inst_32221__$1);

(statearr_32292[(14)] = inst_32220__$1);

return statearr_32292;
})();
if(cljs.core.truth_(inst_32224)){
var statearr_32295_33928 = state_32261__$1;
(statearr_32295_33928[(1)] = (23));

} else {
var statearr_32296_33929 = state_32261__$1;
(statearr_32296_33929[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (36))){
var inst_32211 = (state_32261[(12)]);
var inst_32188 = inst_32211;
var state_32261__$1 = (function (){var statearr_32297 = state_32261;
(statearr_32297[(7)] = inst_32188);

return statearr_32297;
})();
var statearr_32298_33951 = state_32261__$1;
(statearr_32298_33951[(2)] = null);

(statearr_32298_33951[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (29))){
var inst_32235 = (state_32261[(11)]);
var state_32261__$1 = state_32261;
var statearr_32299_33952 = state_32261__$1;
(statearr_32299_33952[(2)] = inst_32235);

(statearr_32299_33952[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (6))){
var state_32261__$1 = state_32261;
var statearr_32301_33954 = state_32261__$1;
(statearr_32301_33954[(2)] = false);

(statearr_32301_33954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (28))){
var inst_32231 = (state_32261[(2)]);
var inst_32232 = calc_state();
var inst_32188 = inst_32232;
var state_32261__$1 = (function (){var statearr_32302 = state_32261;
(statearr_32302[(7)] = inst_32188);

(statearr_32302[(15)] = inst_32231);

return statearr_32302;
})();
var statearr_32305_33955 = state_32261__$1;
(statearr_32305_33955[(2)] = null);

(statearr_32305_33955[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (25))){
var inst_32257 = (state_32261[(2)]);
var state_32261__$1 = state_32261;
var statearr_32307_33956 = state_32261__$1;
(statearr_32307_33956[(2)] = inst_32257);

(statearr_32307_33956[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (34))){
var inst_32255 = (state_32261[(2)]);
var state_32261__$1 = state_32261;
var statearr_32308_33957 = state_32261__$1;
(statearr_32308_33957[(2)] = inst_32255);

(statearr_32308_33957[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (17))){
var state_32261__$1 = state_32261;
var statearr_32309_33959 = state_32261__$1;
(statearr_32309_33959[(2)] = false);

(statearr_32309_33959[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (3))){
var state_32261__$1 = state_32261;
var statearr_32310_33960 = state_32261__$1;
(statearr_32310_33960[(2)] = false);

(statearr_32310_33960[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (12))){
var inst_32259 = (state_32261[(2)]);
var state_32261__$1 = state_32261;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32261__$1,inst_32259);
} else {
if((state_val_32262 === (2))){
var inst_32163 = (state_32261[(8)]);
var inst_32168 = inst_32163.cljs$lang$protocol_mask$partition0$;
var inst_32169 = (inst_32168 & (64));
var inst_32170 = inst_32163.cljs$core$ISeq$;
var inst_32171 = (cljs.core.PROTOCOL_SENTINEL === inst_32170);
var inst_32172 = ((inst_32169) || (inst_32171));
var state_32261__$1 = state_32261;
if(cljs.core.truth_(inst_32172)){
var statearr_32312_33961 = state_32261__$1;
(statearr_32312_33961[(1)] = (5));

} else {
var statearr_32313_33963 = state_32261__$1;
(statearr_32313_33963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (23))){
var inst_32220 = (state_32261[(14)]);
var inst_32226 = (inst_32220 == null);
var state_32261__$1 = state_32261;
if(cljs.core.truth_(inst_32226)){
var statearr_32314_33964 = state_32261__$1;
(statearr_32314_33964[(1)] = (26));

} else {
var statearr_32315_33965 = state_32261__$1;
(statearr_32315_33965[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (35))){
var inst_32246 = (state_32261[(2)]);
var state_32261__$1 = state_32261;
if(cljs.core.truth_(inst_32246)){
var statearr_32316_33966 = state_32261__$1;
(statearr_32316_33966[(1)] = (36));

} else {
var statearr_32317_33967 = state_32261__$1;
(statearr_32317_33967[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (19))){
var inst_32188 = (state_32261[(7)]);
var inst_32208 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32188);
var state_32261__$1 = state_32261;
var statearr_32318_33969 = state_32261__$1;
(statearr_32318_33969[(2)] = inst_32208);

(statearr_32318_33969[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (11))){
var inst_32188 = (state_32261[(7)]);
var inst_32192 = (inst_32188 == null);
var inst_32193 = cljs.core.not(inst_32192);
var state_32261__$1 = state_32261;
if(inst_32193){
var statearr_32321_33970 = state_32261__$1;
(statearr_32321_33970[(1)] = (13));

} else {
var statearr_32322_33971 = state_32261__$1;
(statearr_32322_33971[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (9))){
var inst_32163 = (state_32261[(8)]);
var state_32261__$1 = state_32261;
var statearr_32323_33972 = state_32261__$1;
(statearr_32323_33972[(2)] = inst_32163);

(statearr_32323_33972[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (5))){
var state_32261__$1 = state_32261;
var statearr_32324_33973 = state_32261__$1;
(statearr_32324_33973[(2)] = true);

(statearr_32324_33973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (14))){
var state_32261__$1 = state_32261;
var statearr_32325_33975 = state_32261__$1;
(statearr_32325_33975[(2)] = false);

(statearr_32325_33975[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (26))){
var inst_32221 = (state_32261[(10)]);
var inst_32228 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32221);
var state_32261__$1 = state_32261;
var statearr_32328_33976 = state_32261__$1;
(statearr_32328_33976[(2)] = inst_32228);

(statearr_32328_33976[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (16))){
var state_32261__$1 = state_32261;
var statearr_32329_33978 = state_32261__$1;
(statearr_32329_33978[(2)] = true);

(statearr_32329_33978[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (38))){
var inst_32251 = (state_32261[(2)]);
var state_32261__$1 = state_32261;
var statearr_32332_33980 = state_32261__$1;
(statearr_32332_33980[(2)] = inst_32251);

(statearr_32332_33980[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (30))){
var inst_32212 = (state_32261[(9)]);
var inst_32221 = (state_32261[(10)]);
var inst_32213 = (state_32261[(13)]);
var inst_32238 = cljs.core.empty_QMARK_(inst_32212);
var inst_32239 = (inst_32213.cljs$core$IFn$_invoke$arity$1 ? inst_32213.cljs$core$IFn$_invoke$arity$1(inst_32221) : inst_32213.call(null,inst_32221));
var inst_32240 = cljs.core.not(inst_32239);
var inst_32241 = ((inst_32238) && (inst_32240));
var state_32261__$1 = state_32261;
var statearr_32333_33981 = state_32261__$1;
(statearr_32333_33981[(2)] = inst_32241);

(statearr_32333_33981[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (10))){
var inst_32163 = (state_32261[(8)]);
var inst_32184 = (state_32261[(2)]);
var inst_32185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32184,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32184,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32187 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32184,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32188 = inst_32163;
var state_32261__$1 = (function (){var statearr_32334 = state_32261;
(statearr_32334[(7)] = inst_32188);

(statearr_32334[(16)] = inst_32187);

(statearr_32334[(17)] = inst_32185);

(statearr_32334[(18)] = inst_32186);

return statearr_32334;
})();
var statearr_32335_33983 = state_32261__$1;
(statearr_32335_33983[(2)] = null);

(statearr_32335_33983[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (18))){
var inst_32203 = (state_32261[(2)]);
var state_32261__$1 = state_32261;
var statearr_32336_33985 = state_32261__$1;
(statearr_32336_33985[(2)] = inst_32203);

(statearr_32336_33985[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (37))){
var state_32261__$1 = state_32261;
var statearr_32337_33986 = state_32261__$1;
(statearr_32337_33986[(2)] = null);

(statearr_32337_33986[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (8))){
var inst_32163 = (state_32261[(8)]);
var inst_32181 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32163);
var state_32261__$1 = state_32261;
var statearr_32338_33987 = state_32261__$1;
(statearr_32338_33987[(2)] = inst_32181);

(statearr_32338_33987[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__30762__auto__ = null;
var cljs$core$async$mix_$_state_machine__30762__auto____0 = (function (){
var statearr_32339 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32339[(0)] = cljs$core$async$mix_$_state_machine__30762__auto__);

(statearr_32339[(1)] = (1));

return statearr_32339;
});
var cljs$core$async$mix_$_state_machine__30762__auto____1 = (function (state_32261){
while(true){
var ret_value__30763__auto__ = (function (){try{while(true){
var result__30764__auto__ = switch__30761__auto__(state_32261);
if(cljs.core.keyword_identical_QMARK_(result__30764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30764__auto__;
}
break;
}
}catch (e32340){var ex__30765__auto__ = e32340;
var statearr_32341_34004 = state_32261;
(statearr_32341_34004[(2)] = ex__30765__auto__);


if(cljs.core.seq((state_32261[(4)]))){
var statearr_32342_34005 = state_32261;
(statearr_32342_34005[(1)] = cljs.core.first((state_32261[(4)])));

} else {
throw ex__30765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34006 = state_32261;
state_32261 = G__34006;
continue;
} else {
return ret_value__30763__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30762__auto__ = function(state_32261){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30762__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30762__auto____1.call(this,state_32261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30762__auto____0;
cljs$core$async$mix_$_state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30762__auto____1;
return cljs$core$async$mix_$_state_machine__30762__auto__;
})()
})();
var state__30944__auto__ = (function (){var statearr_32343 = f__30943__auto__();
(statearr_32343[(6)] = c__30942__auto___33872);

return statearr_32343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30944__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_34007 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34007(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34008 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34008(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34009 = (function() {
var G__34010 = null;
var G__34010__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__34010__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__34010 = function(p,v){
switch(arguments.length){
case 1:
return G__34010__1.call(this,p);
case 2:
return G__34010__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34010.cljs$core$IFn$_invoke$arity$1 = G__34010__1;
G__34010.cljs$core$IFn$_invoke$arity$2 = G__34010__2;
return G__34010;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32359 = arguments.length;
switch (G__32359) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34009(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34009(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32364 = arguments.length;
switch (G__32364) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32361_SHARP_){
if(cljs.core.truth_((p1__32361_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32361_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32361_SHARP_.call(null,topic)))){
return p1__32361_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32361_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32365 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32365 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32366){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32366 = meta32366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32367,meta32366__$1){
var self__ = this;
var _32367__$1 = this;
return (new cljs.core.async.t_cljs$core$async32365(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32366__$1));
}));

(cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32367){
var self__ = this;
var _32367__$1 = this;
return self__.meta32366;
}));

(cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32365.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32366","meta32366",1490354130,null)], null);
}));

(cljs.core.async.t_cljs$core$async32365.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32365.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32365");

(cljs.core.async.t_cljs$core$async32365.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32365");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32365.
 */
cljs.core.async.__GT_t_cljs$core$async32365 = (function cljs$core$async$__GT_t_cljs$core$async32365(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32366){
return (new cljs.core.async.t_cljs$core$async32365(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32366));
});

}

return (new cljs.core.async.t_cljs$core$async32365(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30942__auto___34041 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30943__auto__ = (function (){var switch__30761__auto__ = (function (state_32440){
var state_val_32441 = (state_32440[(1)]);
if((state_val_32441 === (7))){
var inst_32436 = (state_32440[(2)]);
var state_32440__$1 = state_32440;
var statearr_32443_34042 = state_32440__$1;
(statearr_32443_34042[(2)] = inst_32436);

(statearr_32443_34042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (20))){
var state_32440__$1 = state_32440;
var statearr_32444_34043 = state_32440__$1;
(statearr_32444_34043[(2)] = null);

(statearr_32444_34043[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (1))){
var state_32440__$1 = state_32440;
var statearr_32446_34044 = state_32440__$1;
(statearr_32446_34044[(2)] = null);

(statearr_32446_34044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (24))){
var inst_32419 = (state_32440[(7)]);
var inst_32428 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32419);
var state_32440__$1 = state_32440;
var statearr_32447_34050 = state_32440__$1;
(statearr_32447_34050[(2)] = inst_32428);

(statearr_32447_34050[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (4))){
var inst_32371 = (state_32440[(8)]);
var inst_32371__$1 = (state_32440[(2)]);
var inst_32372 = (inst_32371__$1 == null);
var state_32440__$1 = (function (){var statearr_32448 = state_32440;
(statearr_32448[(8)] = inst_32371__$1);

return statearr_32448;
})();
if(cljs.core.truth_(inst_32372)){
var statearr_32449_34051 = state_32440__$1;
(statearr_32449_34051[(1)] = (5));

} else {
var statearr_32450_34052 = state_32440__$1;
(statearr_32450_34052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (15))){
var inst_32413 = (state_32440[(2)]);
var state_32440__$1 = state_32440;
var statearr_32451_34053 = state_32440__$1;
(statearr_32451_34053[(2)] = inst_32413);

(statearr_32451_34053[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (21))){
var inst_32433 = (state_32440[(2)]);
var state_32440__$1 = (function (){var statearr_32452 = state_32440;
(statearr_32452[(9)] = inst_32433);

return statearr_32452;
})();
var statearr_32453_34054 = state_32440__$1;
(statearr_32453_34054[(2)] = null);

(statearr_32453_34054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (13))){
var inst_32395 = (state_32440[(10)]);
var inst_32397 = cljs.core.chunked_seq_QMARK_(inst_32395);
var state_32440__$1 = state_32440;
if(inst_32397){
var statearr_32454_34055 = state_32440__$1;
(statearr_32454_34055[(1)] = (16));

} else {
var statearr_32455_34056 = state_32440__$1;
(statearr_32455_34056[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (22))){
var inst_32425 = (state_32440[(2)]);
var state_32440__$1 = state_32440;
if(cljs.core.truth_(inst_32425)){
var statearr_32456_34057 = state_32440__$1;
(statearr_32456_34057[(1)] = (23));

} else {
var statearr_32457_34062 = state_32440__$1;
(statearr_32457_34062[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (6))){
var inst_32421 = (state_32440[(11)]);
var inst_32419 = (state_32440[(7)]);
var inst_32371 = (state_32440[(8)]);
var inst_32419__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32371) : topic_fn.call(null,inst_32371));
var inst_32420 = cljs.core.deref(mults);
var inst_32421__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32420,inst_32419__$1);
var state_32440__$1 = (function (){var statearr_32458 = state_32440;
(statearr_32458[(11)] = inst_32421__$1);

(statearr_32458[(7)] = inst_32419__$1);

return statearr_32458;
})();
if(cljs.core.truth_(inst_32421__$1)){
var statearr_32459_34074 = state_32440__$1;
(statearr_32459_34074[(1)] = (19));

} else {
var statearr_32460_34080 = state_32440__$1;
(statearr_32460_34080[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (25))){
var inst_32430 = (state_32440[(2)]);
var state_32440__$1 = state_32440;
var statearr_32461_34087 = state_32440__$1;
(statearr_32461_34087[(2)] = inst_32430);

(statearr_32461_34087[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (17))){
var inst_32395 = (state_32440[(10)]);
var inst_32404 = cljs.core.first(inst_32395);
var inst_32405 = cljs.core.async.muxch_STAR_(inst_32404);
var inst_32406 = cljs.core.async.close_BANG_(inst_32405);
var inst_32407 = cljs.core.next(inst_32395);
var inst_32381 = inst_32407;
var inst_32382 = null;
var inst_32383 = (0);
var inst_32384 = (0);
var state_32440__$1 = (function (){var statearr_32462 = state_32440;
(statearr_32462[(12)] = inst_32406);

(statearr_32462[(13)] = inst_32383);

(statearr_32462[(14)] = inst_32382);

(statearr_32462[(15)] = inst_32381);

(statearr_32462[(16)] = inst_32384);

return statearr_32462;
})();
var statearr_32463_34102 = state_32440__$1;
(statearr_32463_34102[(2)] = null);

(statearr_32463_34102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (3))){
var inst_32438 = (state_32440[(2)]);
var state_32440__$1 = state_32440;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32440__$1,inst_32438);
} else {
if((state_val_32441 === (12))){
var inst_32415 = (state_32440[(2)]);
var state_32440__$1 = state_32440;
var statearr_32466_34111 = state_32440__$1;
(statearr_32466_34111[(2)] = inst_32415);

(statearr_32466_34111[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (2))){
var state_32440__$1 = state_32440;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32440__$1,(4),ch);
} else {
if((state_val_32441 === (23))){
var state_32440__$1 = state_32440;
var statearr_32467_34116 = state_32440__$1;
(statearr_32467_34116[(2)] = null);

(statearr_32467_34116[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (19))){
var inst_32421 = (state_32440[(11)]);
var inst_32371 = (state_32440[(8)]);
var inst_32423 = cljs.core.async.muxch_STAR_(inst_32421);
var state_32440__$1 = state_32440;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32440__$1,(22),inst_32423,inst_32371);
} else {
if((state_val_32441 === (11))){
var inst_32381 = (state_32440[(15)]);
var inst_32395 = (state_32440[(10)]);
var inst_32395__$1 = cljs.core.seq(inst_32381);
var state_32440__$1 = (function (){var statearr_32468 = state_32440;
(statearr_32468[(10)] = inst_32395__$1);

return statearr_32468;
})();
if(inst_32395__$1){
var statearr_32469_34151 = state_32440__$1;
(statearr_32469_34151[(1)] = (13));

} else {
var statearr_32470_34152 = state_32440__$1;
(statearr_32470_34152[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (9))){
var inst_32417 = (state_32440[(2)]);
var state_32440__$1 = state_32440;
var statearr_32471_34153 = state_32440__$1;
(statearr_32471_34153[(2)] = inst_32417);

(statearr_32471_34153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (5))){
var inst_32378 = cljs.core.deref(mults);
var inst_32379 = cljs.core.vals(inst_32378);
var inst_32380 = cljs.core.seq(inst_32379);
var inst_32381 = inst_32380;
var inst_32382 = null;
var inst_32383 = (0);
var inst_32384 = (0);
var state_32440__$1 = (function (){var statearr_32472 = state_32440;
(statearr_32472[(13)] = inst_32383);

(statearr_32472[(14)] = inst_32382);

(statearr_32472[(15)] = inst_32381);

(statearr_32472[(16)] = inst_32384);

return statearr_32472;
})();
var statearr_32473_34154 = state_32440__$1;
(statearr_32473_34154[(2)] = null);

(statearr_32473_34154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (14))){
var state_32440__$1 = state_32440;
var statearr_32477_34155 = state_32440__$1;
(statearr_32477_34155[(2)] = null);

(statearr_32477_34155[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (16))){
var inst_32395 = (state_32440[(10)]);
var inst_32399 = cljs.core.chunk_first(inst_32395);
var inst_32400 = cljs.core.chunk_rest(inst_32395);
var inst_32401 = cljs.core.count(inst_32399);
var inst_32381 = inst_32400;
var inst_32382 = inst_32399;
var inst_32383 = inst_32401;
var inst_32384 = (0);
var state_32440__$1 = (function (){var statearr_32479 = state_32440;
(statearr_32479[(13)] = inst_32383);

(statearr_32479[(14)] = inst_32382);

(statearr_32479[(15)] = inst_32381);

(statearr_32479[(16)] = inst_32384);

return statearr_32479;
})();
var statearr_32480_34156 = state_32440__$1;
(statearr_32480_34156[(2)] = null);

(statearr_32480_34156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (10))){
var inst_32383 = (state_32440[(13)]);
var inst_32382 = (state_32440[(14)]);
var inst_32381 = (state_32440[(15)]);
var inst_32384 = (state_32440[(16)]);
var inst_32389 = cljs.core._nth(inst_32382,inst_32384);
var inst_32390 = cljs.core.async.muxch_STAR_(inst_32389);
var inst_32391 = cljs.core.async.close_BANG_(inst_32390);
var inst_32392 = (inst_32384 + (1));
var tmp32474 = inst_32383;
var tmp32475 = inst_32382;
var tmp32476 = inst_32381;
var inst_32381__$1 = tmp32476;
var inst_32382__$1 = tmp32475;
var inst_32383__$1 = tmp32474;
var inst_32384__$1 = inst_32392;
var state_32440__$1 = (function (){var statearr_32481 = state_32440;
(statearr_32481[(13)] = inst_32383__$1);

(statearr_32481[(14)] = inst_32382__$1);

(statearr_32481[(17)] = inst_32391);

(statearr_32481[(15)] = inst_32381__$1);

(statearr_32481[(16)] = inst_32384__$1);

return statearr_32481;
})();
var statearr_32482_34157 = state_32440__$1;
(statearr_32482_34157[(2)] = null);

(statearr_32482_34157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (18))){
var inst_32410 = (state_32440[(2)]);
var state_32440__$1 = state_32440;
var statearr_32483_34158 = state_32440__$1;
(statearr_32483_34158[(2)] = inst_32410);

(statearr_32483_34158[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32441 === (8))){
var inst_32383 = (state_32440[(13)]);
var inst_32384 = (state_32440[(16)]);
var inst_32386 = (inst_32384 < inst_32383);
var inst_32387 = inst_32386;
var state_32440__$1 = state_32440;
if(cljs.core.truth_(inst_32387)){
var statearr_32484_34159 = state_32440__$1;
(statearr_32484_34159[(1)] = (10));

} else {
var statearr_32485_34160 = state_32440__$1;
(statearr_32485_34160[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30762__auto__ = null;
var cljs$core$async$state_machine__30762__auto____0 = (function (){
var statearr_32486 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32486[(0)] = cljs$core$async$state_machine__30762__auto__);

(statearr_32486[(1)] = (1));

return statearr_32486;
});
var cljs$core$async$state_machine__30762__auto____1 = (function (state_32440){
while(true){
var ret_value__30763__auto__ = (function (){try{while(true){
var result__30764__auto__ = switch__30761__auto__(state_32440);
if(cljs.core.keyword_identical_QMARK_(result__30764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30764__auto__;
}
break;
}
}catch (e32488){var ex__30765__auto__ = e32488;
var statearr_32489_34161 = state_32440;
(statearr_32489_34161[(2)] = ex__30765__auto__);


if(cljs.core.seq((state_32440[(4)]))){
var statearr_32490_34162 = state_32440;
(statearr_32490_34162[(1)] = cljs.core.first((state_32440[(4)])));

} else {
throw ex__30765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34167 = state_32440;
state_32440 = G__34167;
continue;
} else {
return ret_value__30763__auto__;
}
break;
}
});
cljs$core$async$state_machine__30762__auto__ = function(state_32440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30762__auto____1.call(this,state_32440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30762__auto____0;
cljs$core$async$state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30762__auto____1;
return cljs$core$async$state_machine__30762__auto__;
})()
})();
var state__30944__auto__ = (function (){var statearr_32492 = f__30943__auto__();
(statearr_32492[(6)] = c__30942__auto___34041);

return statearr_32492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30944__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32496 = arguments.length;
switch (G__32496) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32498 = arguments.length;
switch (G__32498) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32500 = arguments.length;
switch (G__32500) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30942__auto___34183 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30943__auto__ = (function (){var switch__30761__auto__ = (function (state_32548){
var state_val_32549 = (state_32548[(1)]);
if((state_val_32549 === (7))){
var state_32548__$1 = state_32548;
var statearr_32551_34186 = state_32548__$1;
(statearr_32551_34186[(2)] = null);

(statearr_32551_34186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (1))){
var state_32548__$1 = state_32548;
var statearr_32552_34187 = state_32548__$1;
(statearr_32552_34187[(2)] = null);

(statearr_32552_34187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (4))){
var inst_32504 = (state_32548[(7)]);
var inst_32505 = (state_32548[(8)]);
var inst_32507 = (inst_32505 < inst_32504);
var state_32548__$1 = state_32548;
if(cljs.core.truth_(inst_32507)){
var statearr_32554_34188 = state_32548__$1;
(statearr_32554_34188[(1)] = (6));

} else {
var statearr_32555_34189 = state_32548__$1;
(statearr_32555_34189[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (15))){
var inst_32531 = (state_32548[(9)]);
var inst_32538 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32531);
var state_32548__$1 = state_32548;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32548__$1,(17),out,inst_32538);
} else {
if((state_val_32549 === (13))){
var inst_32531 = (state_32548[(9)]);
var inst_32531__$1 = (state_32548[(2)]);
var inst_32532 = cljs.core.some(cljs.core.nil_QMARK_,inst_32531__$1);
var state_32548__$1 = (function (){var statearr_32557 = state_32548;
(statearr_32557[(9)] = inst_32531__$1);

return statearr_32557;
})();
if(cljs.core.truth_(inst_32532)){
var statearr_32562_34190 = state_32548__$1;
(statearr_32562_34190[(1)] = (14));

} else {
var statearr_32563_34191 = state_32548__$1;
(statearr_32563_34191[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (6))){
var state_32548__$1 = state_32548;
var statearr_32564_34192 = state_32548__$1;
(statearr_32564_34192[(2)] = null);

(statearr_32564_34192[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (17))){
var inst_32540 = (state_32548[(2)]);
var state_32548__$1 = (function (){var statearr_32569 = state_32548;
(statearr_32569[(10)] = inst_32540);

return statearr_32569;
})();
var statearr_32570_34241 = state_32548__$1;
(statearr_32570_34241[(2)] = null);

(statearr_32570_34241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (3))){
var inst_32545 = (state_32548[(2)]);
var state_32548__$1 = state_32548;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32548__$1,inst_32545);
} else {
if((state_val_32549 === (12))){
var _ = (function (){var statearr_32574 = state_32548;
(statearr_32574[(4)] = cljs.core.rest((state_32548[(4)])));

return statearr_32574;
})();
var state_32548__$1 = state_32548;
var ex32566 = (state_32548__$1[(2)]);
var statearr_32575_34244 = state_32548__$1;
(statearr_32575_34244[(5)] = ex32566);


if((ex32566 instanceof Object)){
var statearr_32576_34245 = state_32548__$1;
(statearr_32576_34245[(1)] = (11));

(statearr_32576_34245[(5)] = null);

} else {
throw ex32566;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (2))){
var inst_32503 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32504 = cnt;
var inst_32505 = (0);
var state_32548__$1 = (function (){var statearr_32578 = state_32548;
(statearr_32578[(7)] = inst_32504);

(statearr_32578[(11)] = inst_32503);

(statearr_32578[(8)] = inst_32505);

return statearr_32578;
})();
var statearr_32579_34246 = state_32548__$1;
(statearr_32579_34246[(2)] = null);

(statearr_32579_34246[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (11))){
var inst_32509 = (state_32548[(2)]);
var inst_32510 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32548__$1 = (function (){var statearr_32580 = state_32548;
(statearr_32580[(12)] = inst_32509);

return statearr_32580;
})();
var statearr_32581_34247 = state_32548__$1;
(statearr_32581_34247[(2)] = inst_32510);

(statearr_32581_34247[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (9))){
var inst_32505 = (state_32548[(8)]);
var _ = (function (){var statearr_32582 = state_32548;
(statearr_32582[(4)] = cljs.core.cons((12),(state_32548[(4)])));

return statearr_32582;
})();
var inst_32517 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32505) : chs__$1.call(null,inst_32505));
var inst_32518 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32505) : done.call(null,inst_32505));
var inst_32519 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32517,inst_32518);
var ___$1 = (function (){var statearr_32584 = state_32548;
(statearr_32584[(4)] = cljs.core.rest((state_32548[(4)])));

return statearr_32584;
})();
var state_32548__$1 = state_32548;
var statearr_32586_34248 = state_32548__$1;
(statearr_32586_34248[(2)] = inst_32519);

(statearr_32586_34248[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (5))){
var inst_32529 = (state_32548[(2)]);
var state_32548__$1 = (function (){var statearr_32590 = state_32548;
(statearr_32590[(13)] = inst_32529);

return statearr_32590;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32548__$1,(13),dchan);
} else {
if((state_val_32549 === (14))){
var inst_32535 = cljs.core.async.close_BANG_(out);
var state_32548__$1 = state_32548;
var statearr_32594_34249 = state_32548__$1;
(statearr_32594_34249[(2)] = inst_32535);

(statearr_32594_34249[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (16))){
var inst_32543 = (state_32548[(2)]);
var state_32548__$1 = state_32548;
var statearr_32595_34250 = state_32548__$1;
(statearr_32595_34250[(2)] = inst_32543);

(statearr_32595_34250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (10))){
var inst_32505 = (state_32548[(8)]);
var inst_32522 = (state_32548[(2)]);
var inst_32523 = (inst_32505 + (1));
var inst_32505__$1 = inst_32523;
var state_32548__$1 = (function (){var statearr_32598 = state_32548;
(statearr_32598[(14)] = inst_32522);

(statearr_32598[(8)] = inst_32505__$1);

return statearr_32598;
})();
var statearr_32599_34251 = state_32548__$1;
(statearr_32599_34251[(2)] = null);

(statearr_32599_34251[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32549 === (8))){
var inst_32527 = (state_32548[(2)]);
var state_32548__$1 = state_32548;
var statearr_32600_34252 = state_32548__$1;
(statearr_32600_34252[(2)] = inst_32527);

(statearr_32600_34252[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30762__auto__ = null;
var cljs$core$async$state_machine__30762__auto____0 = (function (){
var statearr_32602 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32602[(0)] = cljs$core$async$state_machine__30762__auto__);

(statearr_32602[(1)] = (1));

return statearr_32602;
});
var cljs$core$async$state_machine__30762__auto____1 = (function (state_32548){
while(true){
var ret_value__30763__auto__ = (function (){try{while(true){
var result__30764__auto__ = switch__30761__auto__(state_32548);
if(cljs.core.keyword_identical_QMARK_(result__30764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30764__auto__;
}
break;
}
}catch (e32603){var ex__30765__auto__ = e32603;
var statearr_32604_34253 = state_32548;
(statearr_32604_34253[(2)] = ex__30765__auto__);


if(cljs.core.seq((state_32548[(4)]))){
var statearr_32606_34254 = state_32548;
(statearr_32606_34254[(1)] = cljs.core.first((state_32548[(4)])));

} else {
throw ex__30765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34255 = state_32548;
state_32548 = G__34255;
continue;
} else {
return ret_value__30763__auto__;
}
break;
}
});
cljs$core$async$state_machine__30762__auto__ = function(state_32548){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30762__auto____1.call(this,state_32548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30762__auto____0;
cljs$core$async$state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30762__auto____1;
return cljs$core$async$state_machine__30762__auto__;
})()
})();
var state__30944__auto__ = (function (){var statearr_32609 = f__30943__auto__();
(statearr_32609[(6)] = c__30942__auto___34183);

return statearr_32609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30944__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32613 = arguments.length;
switch (G__32613) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30942__auto___34261 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30943__auto__ = (function (){var switch__30761__auto__ = (function (state_32645){
var state_val_32646 = (state_32645[(1)]);
if((state_val_32646 === (7))){
var inst_32624 = (state_32645[(7)]);
var inst_32625 = (state_32645[(8)]);
var inst_32624__$1 = (state_32645[(2)]);
var inst_32625__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32624__$1,(0),null);
var inst_32626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32624__$1,(1),null);
var inst_32627 = (inst_32625__$1 == null);
var state_32645__$1 = (function (){var statearr_32647 = state_32645;
(statearr_32647[(9)] = inst_32626);

(statearr_32647[(7)] = inst_32624__$1);

(statearr_32647[(8)] = inst_32625__$1);

return statearr_32647;
})();
if(cljs.core.truth_(inst_32627)){
var statearr_32648_34269 = state_32645__$1;
(statearr_32648_34269[(1)] = (8));

} else {
var statearr_32649_34275 = state_32645__$1;
(statearr_32649_34275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32646 === (1))){
var inst_32614 = cljs.core.vec(chs);
var inst_32615 = inst_32614;
var state_32645__$1 = (function (){var statearr_32650 = state_32645;
(statearr_32650[(10)] = inst_32615);

return statearr_32650;
})();
var statearr_32651_34276 = state_32645__$1;
(statearr_32651_34276[(2)] = null);

(statearr_32651_34276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32646 === (4))){
var inst_32615 = (state_32645[(10)]);
var state_32645__$1 = state_32645;
return cljs.core.async.ioc_alts_BANG_(state_32645__$1,(7),inst_32615);
} else {
if((state_val_32646 === (6))){
var inst_32641 = (state_32645[(2)]);
var state_32645__$1 = state_32645;
var statearr_32652_34277 = state_32645__$1;
(statearr_32652_34277[(2)] = inst_32641);

(statearr_32652_34277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32646 === (3))){
var inst_32643 = (state_32645[(2)]);
var state_32645__$1 = state_32645;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32645__$1,inst_32643);
} else {
if((state_val_32646 === (2))){
var inst_32615 = (state_32645[(10)]);
var inst_32617 = cljs.core.count(inst_32615);
var inst_32618 = (inst_32617 > (0));
var state_32645__$1 = state_32645;
if(cljs.core.truth_(inst_32618)){
var statearr_32654_34279 = state_32645__$1;
(statearr_32654_34279[(1)] = (4));

} else {
var statearr_32655_34280 = state_32645__$1;
(statearr_32655_34280[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32646 === (11))){
var inst_32615 = (state_32645[(10)]);
var inst_32634 = (state_32645[(2)]);
var tmp32653 = inst_32615;
var inst_32615__$1 = tmp32653;
var state_32645__$1 = (function (){var statearr_32656 = state_32645;
(statearr_32656[(10)] = inst_32615__$1);

(statearr_32656[(11)] = inst_32634);

return statearr_32656;
})();
var statearr_32657_34281 = state_32645__$1;
(statearr_32657_34281[(2)] = null);

(statearr_32657_34281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32646 === (9))){
var inst_32625 = (state_32645[(8)]);
var state_32645__$1 = state_32645;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32645__$1,(11),out,inst_32625);
} else {
if((state_val_32646 === (5))){
var inst_32639 = cljs.core.async.close_BANG_(out);
var state_32645__$1 = state_32645;
var statearr_32658_34282 = state_32645__$1;
(statearr_32658_34282[(2)] = inst_32639);

(statearr_32658_34282[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32646 === (10))){
var inst_32637 = (state_32645[(2)]);
var state_32645__$1 = state_32645;
var statearr_32659_34284 = state_32645__$1;
(statearr_32659_34284[(2)] = inst_32637);

(statearr_32659_34284[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32646 === (8))){
var inst_32626 = (state_32645[(9)]);
var inst_32624 = (state_32645[(7)]);
var inst_32615 = (state_32645[(10)]);
var inst_32625 = (state_32645[(8)]);
var inst_32629 = (function (){var cs = inst_32615;
var vec__32620 = inst_32624;
var v = inst_32625;
var c = inst_32626;
return (function (p1__32611_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32611_SHARP_);
});
})();
var inst_32630 = cljs.core.filterv(inst_32629,inst_32615);
var inst_32615__$1 = inst_32630;
var state_32645__$1 = (function (){var statearr_32660 = state_32645;
(statearr_32660[(10)] = inst_32615__$1);

return statearr_32660;
})();
var statearr_32664_34285 = state_32645__$1;
(statearr_32664_34285[(2)] = null);

(statearr_32664_34285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30762__auto__ = null;
var cljs$core$async$state_machine__30762__auto____0 = (function (){
var statearr_32672 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32672[(0)] = cljs$core$async$state_machine__30762__auto__);

(statearr_32672[(1)] = (1));

return statearr_32672;
});
var cljs$core$async$state_machine__30762__auto____1 = (function (state_32645){
while(true){
var ret_value__30763__auto__ = (function (){try{while(true){
var result__30764__auto__ = switch__30761__auto__(state_32645);
if(cljs.core.keyword_identical_QMARK_(result__30764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30764__auto__;
}
break;
}
}catch (e32673){var ex__30765__auto__ = e32673;
var statearr_32674_34286 = state_32645;
(statearr_32674_34286[(2)] = ex__30765__auto__);


if(cljs.core.seq((state_32645[(4)]))){
var statearr_32675_34288 = state_32645;
(statearr_32675_34288[(1)] = cljs.core.first((state_32645[(4)])));

} else {
throw ex__30765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34289 = state_32645;
state_32645 = G__34289;
continue;
} else {
return ret_value__30763__auto__;
}
break;
}
});
cljs$core$async$state_machine__30762__auto__ = function(state_32645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30762__auto____1.call(this,state_32645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30762__auto____0;
cljs$core$async$state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30762__auto____1;
return cljs$core$async$state_machine__30762__auto__;
})()
})();
var state__30944__auto__ = (function (){var statearr_32678 = f__30943__auto__();
(statearr_32678[(6)] = c__30942__auto___34261);

return statearr_32678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30944__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32693 = arguments.length;
switch (G__32693) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30942__auto___34292 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30943__auto__ = (function (){var switch__30761__auto__ = (function (state_32720){
var state_val_32721 = (state_32720[(1)]);
if((state_val_32721 === (7))){
var inst_32699 = (state_32720[(7)]);
var inst_32699__$1 = (state_32720[(2)]);
var inst_32700 = (inst_32699__$1 == null);
var inst_32701 = cljs.core.not(inst_32700);
var state_32720__$1 = (function (){var statearr_32722 = state_32720;
(statearr_32722[(7)] = inst_32699__$1);

return statearr_32722;
})();
if(inst_32701){
var statearr_32723_34293 = state_32720__$1;
(statearr_32723_34293[(1)] = (8));

} else {
var statearr_32724_34294 = state_32720__$1;
(statearr_32724_34294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32721 === (1))){
var inst_32694 = (0);
var state_32720__$1 = (function (){var statearr_32725 = state_32720;
(statearr_32725[(8)] = inst_32694);

return statearr_32725;
})();
var statearr_32726_34295 = state_32720__$1;
(statearr_32726_34295[(2)] = null);

(statearr_32726_34295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32721 === (4))){
var state_32720__$1 = state_32720;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32720__$1,(7),ch);
} else {
if((state_val_32721 === (6))){
var inst_32712 = (state_32720[(2)]);
var state_32720__$1 = state_32720;
var statearr_32727_34296 = state_32720__$1;
(statearr_32727_34296[(2)] = inst_32712);

(statearr_32727_34296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32721 === (3))){
var inst_32714 = (state_32720[(2)]);
var inst_32718 = cljs.core.async.close_BANG_(out);
var state_32720__$1 = (function (){var statearr_32728 = state_32720;
(statearr_32728[(9)] = inst_32714);

return statearr_32728;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32720__$1,inst_32718);
} else {
if((state_val_32721 === (2))){
var inst_32694 = (state_32720[(8)]);
var inst_32696 = (inst_32694 < n);
var state_32720__$1 = state_32720;
if(cljs.core.truth_(inst_32696)){
var statearr_32729_34298 = state_32720__$1;
(statearr_32729_34298[(1)] = (4));

} else {
var statearr_32730_34299 = state_32720__$1;
(statearr_32730_34299[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32721 === (11))){
var inst_32694 = (state_32720[(8)]);
var inst_32704 = (state_32720[(2)]);
var inst_32705 = (inst_32694 + (1));
var inst_32694__$1 = inst_32705;
var state_32720__$1 = (function (){var statearr_32731 = state_32720;
(statearr_32731[(8)] = inst_32694__$1);

(statearr_32731[(10)] = inst_32704);

return statearr_32731;
})();
var statearr_32732_34300 = state_32720__$1;
(statearr_32732_34300[(2)] = null);

(statearr_32732_34300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32721 === (9))){
var state_32720__$1 = state_32720;
var statearr_32733_34301 = state_32720__$1;
(statearr_32733_34301[(2)] = null);

(statearr_32733_34301[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32721 === (5))){
var state_32720__$1 = state_32720;
var statearr_32734_34302 = state_32720__$1;
(statearr_32734_34302[(2)] = null);

(statearr_32734_34302[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32721 === (10))){
var inst_32709 = (state_32720[(2)]);
var state_32720__$1 = state_32720;
var statearr_32735_34303 = state_32720__$1;
(statearr_32735_34303[(2)] = inst_32709);

(statearr_32735_34303[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32721 === (8))){
var inst_32699 = (state_32720[(7)]);
var state_32720__$1 = state_32720;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32720__$1,(11),out,inst_32699);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30762__auto__ = null;
var cljs$core$async$state_machine__30762__auto____0 = (function (){
var statearr_32736 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32736[(0)] = cljs$core$async$state_machine__30762__auto__);

(statearr_32736[(1)] = (1));

return statearr_32736;
});
var cljs$core$async$state_machine__30762__auto____1 = (function (state_32720){
while(true){
var ret_value__30763__auto__ = (function (){try{while(true){
var result__30764__auto__ = switch__30761__auto__(state_32720);
if(cljs.core.keyword_identical_QMARK_(result__30764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30764__auto__;
}
break;
}
}catch (e32737){var ex__30765__auto__ = e32737;
var statearr_32738_34304 = state_32720;
(statearr_32738_34304[(2)] = ex__30765__auto__);


if(cljs.core.seq((state_32720[(4)]))){
var statearr_32739_34305 = state_32720;
(statearr_32739_34305[(1)] = cljs.core.first((state_32720[(4)])));

} else {
throw ex__30765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34306 = state_32720;
state_32720 = G__34306;
continue;
} else {
return ret_value__30763__auto__;
}
break;
}
});
cljs$core$async$state_machine__30762__auto__ = function(state_32720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30762__auto____1.call(this,state_32720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30762__auto____0;
cljs$core$async$state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30762__auto____1;
return cljs$core$async$state_machine__30762__auto__;
})()
})();
var state__30944__auto__ = (function (){var statearr_32740 = f__30943__auto__();
(statearr_32740[(6)] = c__30942__auto___34292);

return statearr_32740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30944__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32743 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32743 = (function (f,ch,meta32744){
this.f = f;
this.ch = ch;
this.meta32744 = meta32744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32745,meta32744__$1){
var self__ = this;
var _32745__$1 = this;
return (new cljs.core.async.t_cljs$core$async32743(self__.f,self__.ch,meta32744__$1));
}));

(cljs.core.async.t_cljs$core$async32743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32745){
var self__ = this;
var _32745__$1 = this;
return self__.meta32744;
}));

(cljs.core.async.t_cljs$core$async32743.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32743.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32743.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32743.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32743.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32746 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32746 = (function (f,ch,meta32744,_,fn1,meta32747){
this.f = f;
this.ch = ch;
this.meta32744 = meta32744;
this._ = _;
this.fn1 = fn1;
this.meta32747 = meta32747;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32748,meta32747__$1){
var self__ = this;
var _32748__$1 = this;
return (new cljs.core.async.t_cljs$core$async32746(self__.f,self__.ch,self__.meta32744,self__._,self__.fn1,meta32747__$1));
}));

(cljs.core.async.t_cljs$core$async32746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32748){
var self__ = this;
var _32748__$1 = this;
return self__.meta32747;
}));

(cljs.core.async.t_cljs$core$async32746.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32746.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32746.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32746.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32742_SHARP_){
var G__32771 = (((p1__32742_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32742_SHARP_) : self__.f.call(null,p1__32742_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32771) : f1.call(null,G__32771));
});
}));

(cljs.core.async.t_cljs$core$async32746.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32744","meta32744",1269414777,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32743","cljs.core.async/t_cljs$core$async32743",1677921798,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32747","meta32747",-907991380,null)], null);
}));

(cljs.core.async.t_cljs$core$async32746.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32746.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32746");

(cljs.core.async.t_cljs$core$async32746.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32746");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32746.
 */
cljs.core.async.__GT_t_cljs$core$async32746 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32746(f__$1,ch__$1,meta32744__$1,___$2,fn1__$1,meta32747){
return (new cljs.core.async.t_cljs$core$async32746(f__$1,ch__$1,meta32744__$1,___$2,fn1__$1,meta32747));
});

}

return (new cljs.core.async.t_cljs$core$async32746(self__.f,self__.ch,self__.meta32744,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32780 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32780) : self__.f.call(null,G__32780));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32743.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32743.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32743.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32744","meta32744",1269414777,null)], null);
}));

(cljs.core.async.t_cljs$core$async32743.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32743.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32743");

(cljs.core.async.t_cljs$core$async32743.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32743");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32743.
 */
cljs.core.async.__GT_t_cljs$core$async32743 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32743(f__$1,ch__$1,meta32744){
return (new cljs.core.async.t_cljs$core$async32743(f__$1,ch__$1,meta32744));
});

}

return (new cljs.core.async.t_cljs$core$async32743(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32781 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32781 = (function (f,ch,meta32782){
this.f = f;
this.ch = ch;
this.meta32782 = meta32782;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32783,meta32782__$1){
var self__ = this;
var _32783__$1 = this;
return (new cljs.core.async.t_cljs$core$async32781(self__.f,self__.ch,meta32782__$1));
}));

(cljs.core.async.t_cljs$core$async32781.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32783){
var self__ = this;
var _32783__$1 = this;
return self__.meta32782;
}));

(cljs.core.async.t_cljs$core$async32781.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32781.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32781.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32781.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32781.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32781.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32781.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32782","meta32782",-1115054895,null)], null);
}));

(cljs.core.async.t_cljs$core$async32781.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32781.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32781");

(cljs.core.async.t_cljs$core$async32781.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32781");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32781.
 */
cljs.core.async.__GT_t_cljs$core$async32781 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32781(f__$1,ch__$1,meta32782){
return (new cljs.core.async.t_cljs$core$async32781(f__$1,ch__$1,meta32782));
});

}

return (new cljs.core.async.t_cljs$core$async32781(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32787 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32787 = (function (p,ch,meta32788){
this.p = p;
this.ch = ch;
this.meta32788 = meta32788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32789,meta32788__$1){
var self__ = this;
var _32789__$1 = this;
return (new cljs.core.async.t_cljs$core$async32787(self__.p,self__.ch,meta32788__$1));
}));

(cljs.core.async.t_cljs$core$async32787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32789){
var self__ = this;
var _32789__$1 = this;
return self__.meta32788;
}));

(cljs.core.async.t_cljs$core$async32787.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32787.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32787.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32787.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32787.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32787.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32787.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32787.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32788","meta32788",448234998,null)], null);
}));

(cljs.core.async.t_cljs$core$async32787.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32787.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32787");

(cljs.core.async.t_cljs$core$async32787.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32787");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32787.
 */
cljs.core.async.__GT_t_cljs$core$async32787 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32787(p__$1,ch__$1,meta32788){
return (new cljs.core.async.t_cljs$core$async32787(p__$1,ch__$1,meta32788));
});

}

return (new cljs.core.async.t_cljs$core$async32787(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32800 = arguments.length;
switch (G__32800) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30942__auto___34338 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30943__auto__ = (function (){var switch__30761__auto__ = (function (state_32824){
var state_val_32825 = (state_32824[(1)]);
if((state_val_32825 === (7))){
var inst_32820 = (state_32824[(2)]);
var state_32824__$1 = state_32824;
var statearr_32826_34360 = state_32824__$1;
(statearr_32826_34360[(2)] = inst_32820);

(statearr_32826_34360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32825 === (1))){
var state_32824__$1 = state_32824;
var statearr_32827_34361 = state_32824__$1;
(statearr_32827_34361[(2)] = null);

(statearr_32827_34361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32825 === (4))){
var inst_32806 = (state_32824[(7)]);
var inst_32806__$1 = (state_32824[(2)]);
var inst_32807 = (inst_32806__$1 == null);
var state_32824__$1 = (function (){var statearr_32828 = state_32824;
(statearr_32828[(7)] = inst_32806__$1);

return statearr_32828;
})();
if(cljs.core.truth_(inst_32807)){
var statearr_32829_34367 = state_32824__$1;
(statearr_32829_34367[(1)] = (5));

} else {
var statearr_32830_34368 = state_32824__$1;
(statearr_32830_34368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32825 === (6))){
var inst_32806 = (state_32824[(7)]);
var inst_32811 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32806) : p.call(null,inst_32806));
var state_32824__$1 = state_32824;
if(cljs.core.truth_(inst_32811)){
var statearr_32831_34370 = state_32824__$1;
(statearr_32831_34370[(1)] = (8));

} else {
var statearr_32832_34371 = state_32824__$1;
(statearr_32832_34371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32825 === (3))){
var inst_32822 = (state_32824[(2)]);
var state_32824__$1 = state_32824;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32824__$1,inst_32822);
} else {
if((state_val_32825 === (2))){
var state_32824__$1 = state_32824;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32824__$1,(4),ch);
} else {
if((state_val_32825 === (11))){
var inst_32814 = (state_32824[(2)]);
var state_32824__$1 = state_32824;
var statearr_32833_34377 = state_32824__$1;
(statearr_32833_34377[(2)] = inst_32814);

(statearr_32833_34377[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32825 === (9))){
var state_32824__$1 = state_32824;
var statearr_32834_34383 = state_32824__$1;
(statearr_32834_34383[(2)] = null);

(statearr_32834_34383[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32825 === (5))){
var inst_32809 = cljs.core.async.close_BANG_(out);
var state_32824__$1 = state_32824;
var statearr_32835_34390 = state_32824__$1;
(statearr_32835_34390[(2)] = inst_32809);

(statearr_32835_34390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32825 === (10))){
var inst_32817 = (state_32824[(2)]);
var state_32824__$1 = (function (){var statearr_32836 = state_32824;
(statearr_32836[(8)] = inst_32817);

return statearr_32836;
})();
var statearr_32837_34399 = state_32824__$1;
(statearr_32837_34399[(2)] = null);

(statearr_32837_34399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32825 === (8))){
var inst_32806 = (state_32824[(7)]);
var state_32824__$1 = state_32824;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32824__$1,(11),out,inst_32806);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30762__auto__ = null;
var cljs$core$async$state_machine__30762__auto____0 = (function (){
var statearr_32838 = [null,null,null,null,null,null,null,null,null];
(statearr_32838[(0)] = cljs$core$async$state_machine__30762__auto__);

(statearr_32838[(1)] = (1));

return statearr_32838;
});
var cljs$core$async$state_machine__30762__auto____1 = (function (state_32824){
while(true){
var ret_value__30763__auto__ = (function (){try{while(true){
var result__30764__auto__ = switch__30761__auto__(state_32824);
if(cljs.core.keyword_identical_QMARK_(result__30764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30764__auto__;
}
break;
}
}catch (e32839){var ex__30765__auto__ = e32839;
var statearr_32840_34450 = state_32824;
(statearr_32840_34450[(2)] = ex__30765__auto__);


if(cljs.core.seq((state_32824[(4)]))){
var statearr_32841_34452 = state_32824;
(statearr_32841_34452[(1)] = cljs.core.first((state_32824[(4)])));

} else {
throw ex__30765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34457 = state_32824;
state_32824 = G__34457;
continue;
} else {
return ret_value__30763__auto__;
}
break;
}
});
cljs$core$async$state_machine__30762__auto__ = function(state_32824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30762__auto____1.call(this,state_32824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30762__auto____0;
cljs$core$async$state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30762__auto____1;
return cljs$core$async$state_machine__30762__auto__;
})()
})();
var state__30944__auto__ = (function (){var statearr_32842 = f__30943__auto__();
(statearr_32842[(6)] = c__30942__auto___34338);

return statearr_32842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30944__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32844 = arguments.length;
switch (G__32844) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30942__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30943__auto__ = (function (){var switch__30761__auto__ = (function (state_32906){
var state_val_32907 = (state_32906[(1)]);
if((state_val_32907 === (7))){
var inst_32902 = (state_32906[(2)]);
var state_32906__$1 = state_32906;
var statearr_32908_34481 = state_32906__$1;
(statearr_32908_34481[(2)] = inst_32902);

(statearr_32908_34481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (20))){
var inst_32872 = (state_32906[(7)]);
var inst_32883 = (state_32906[(2)]);
var inst_32884 = cljs.core.next(inst_32872);
var inst_32858 = inst_32884;
var inst_32859 = null;
var inst_32860 = (0);
var inst_32861 = (0);
var state_32906__$1 = (function (){var statearr_32909 = state_32906;
(statearr_32909[(8)] = inst_32859);

(statearr_32909[(9)] = inst_32861);

(statearr_32909[(10)] = inst_32860);

(statearr_32909[(11)] = inst_32883);

(statearr_32909[(12)] = inst_32858);

return statearr_32909;
})();
var statearr_32910_34482 = state_32906__$1;
(statearr_32910_34482[(2)] = null);

(statearr_32910_34482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (1))){
var state_32906__$1 = state_32906;
var statearr_32911_34483 = state_32906__$1;
(statearr_32911_34483[(2)] = null);

(statearr_32911_34483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (4))){
var inst_32847 = (state_32906[(13)]);
var inst_32847__$1 = (state_32906[(2)]);
var inst_32848 = (inst_32847__$1 == null);
var state_32906__$1 = (function (){var statearr_32912 = state_32906;
(statearr_32912[(13)] = inst_32847__$1);

return statearr_32912;
})();
if(cljs.core.truth_(inst_32848)){
var statearr_32913_34484 = state_32906__$1;
(statearr_32913_34484[(1)] = (5));

} else {
var statearr_32914_34485 = state_32906__$1;
(statearr_32914_34485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (15))){
var state_32906__$1 = state_32906;
var statearr_32918_34486 = state_32906__$1;
(statearr_32918_34486[(2)] = null);

(statearr_32918_34486[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (21))){
var state_32906__$1 = state_32906;
var statearr_32919_34487 = state_32906__$1;
(statearr_32919_34487[(2)] = null);

(statearr_32919_34487[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (13))){
var inst_32859 = (state_32906[(8)]);
var inst_32861 = (state_32906[(9)]);
var inst_32860 = (state_32906[(10)]);
var inst_32858 = (state_32906[(12)]);
var inst_32868 = (state_32906[(2)]);
var inst_32869 = (inst_32861 + (1));
var tmp32915 = inst_32859;
var tmp32916 = inst_32860;
var tmp32917 = inst_32858;
var inst_32858__$1 = tmp32917;
var inst_32859__$1 = tmp32915;
var inst_32860__$1 = tmp32916;
var inst_32861__$1 = inst_32869;
var state_32906__$1 = (function (){var statearr_32920 = state_32906;
(statearr_32920[(8)] = inst_32859__$1);

(statearr_32920[(14)] = inst_32868);

(statearr_32920[(9)] = inst_32861__$1);

(statearr_32920[(10)] = inst_32860__$1);

(statearr_32920[(12)] = inst_32858__$1);

return statearr_32920;
})();
var statearr_32921_34506 = state_32906__$1;
(statearr_32921_34506[(2)] = null);

(statearr_32921_34506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (22))){
var state_32906__$1 = state_32906;
var statearr_32922_34507 = state_32906__$1;
(statearr_32922_34507[(2)] = null);

(statearr_32922_34507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (6))){
var inst_32847 = (state_32906[(13)]);
var inst_32856 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32847) : f.call(null,inst_32847));
var inst_32857 = cljs.core.seq(inst_32856);
var inst_32858 = inst_32857;
var inst_32859 = null;
var inst_32860 = (0);
var inst_32861 = (0);
var state_32906__$1 = (function (){var statearr_32923 = state_32906;
(statearr_32923[(8)] = inst_32859);

(statearr_32923[(9)] = inst_32861);

(statearr_32923[(10)] = inst_32860);

(statearr_32923[(12)] = inst_32858);

return statearr_32923;
})();
var statearr_32924_34508 = state_32906__$1;
(statearr_32924_34508[(2)] = null);

(statearr_32924_34508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (17))){
var inst_32872 = (state_32906[(7)]);
var inst_32876 = cljs.core.chunk_first(inst_32872);
var inst_32877 = cljs.core.chunk_rest(inst_32872);
var inst_32878 = cljs.core.count(inst_32876);
var inst_32858 = inst_32877;
var inst_32859 = inst_32876;
var inst_32860 = inst_32878;
var inst_32861 = (0);
var state_32906__$1 = (function (){var statearr_32925 = state_32906;
(statearr_32925[(8)] = inst_32859);

(statearr_32925[(9)] = inst_32861);

(statearr_32925[(10)] = inst_32860);

(statearr_32925[(12)] = inst_32858);

return statearr_32925;
})();
var statearr_32926_34510 = state_32906__$1;
(statearr_32926_34510[(2)] = null);

(statearr_32926_34510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (3))){
var inst_32904 = (state_32906[(2)]);
var state_32906__$1 = state_32906;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32906__$1,inst_32904);
} else {
if((state_val_32907 === (12))){
var inst_32892 = (state_32906[(2)]);
var state_32906__$1 = state_32906;
var statearr_32927_34511 = state_32906__$1;
(statearr_32927_34511[(2)] = inst_32892);

(statearr_32927_34511[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (2))){
var state_32906__$1 = state_32906;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32906__$1,(4),in$);
} else {
if((state_val_32907 === (23))){
var inst_32900 = (state_32906[(2)]);
var state_32906__$1 = state_32906;
var statearr_32931_34521 = state_32906__$1;
(statearr_32931_34521[(2)] = inst_32900);

(statearr_32931_34521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (19))){
var inst_32887 = (state_32906[(2)]);
var state_32906__$1 = state_32906;
var statearr_32932_34522 = state_32906__$1;
(statearr_32932_34522[(2)] = inst_32887);

(statearr_32932_34522[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (11))){
var inst_32872 = (state_32906[(7)]);
var inst_32858 = (state_32906[(12)]);
var inst_32872__$1 = cljs.core.seq(inst_32858);
var state_32906__$1 = (function (){var statearr_32933 = state_32906;
(statearr_32933[(7)] = inst_32872__$1);

return statearr_32933;
})();
if(inst_32872__$1){
var statearr_32934_34523 = state_32906__$1;
(statearr_32934_34523[(1)] = (14));

} else {
var statearr_32935_34524 = state_32906__$1;
(statearr_32935_34524[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (9))){
var inst_32894 = (state_32906[(2)]);
var inst_32895 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32906__$1 = (function (){var statearr_32936 = state_32906;
(statearr_32936[(15)] = inst_32894);

return statearr_32936;
})();
if(cljs.core.truth_(inst_32895)){
var statearr_32938_34525 = state_32906__$1;
(statearr_32938_34525[(1)] = (21));

} else {
var statearr_32939_34526 = state_32906__$1;
(statearr_32939_34526[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (5))){
var inst_32850 = cljs.core.async.close_BANG_(out);
var state_32906__$1 = state_32906;
var statearr_32940_34527 = state_32906__$1;
(statearr_32940_34527[(2)] = inst_32850);

(statearr_32940_34527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (14))){
var inst_32872 = (state_32906[(7)]);
var inst_32874 = cljs.core.chunked_seq_QMARK_(inst_32872);
var state_32906__$1 = state_32906;
if(inst_32874){
var statearr_32941_34528 = state_32906__$1;
(statearr_32941_34528[(1)] = (17));

} else {
var statearr_32942_34529 = state_32906__$1;
(statearr_32942_34529[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (16))){
var inst_32890 = (state_32906[(2)]);
var state_32906__$1 = state_32906;
var statearr_32943_34530 = state_32906__$1;
(statearr_32943_34530[(2)] = inst_32890);

(statearr_32943_34530[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (10))){
var inst_32859 = (state_32906[(8)]);
var inst_32861 = (state_32906[(9)]);
var inst_32866 = cljs.core._nth(inst_32859,inst_32861);
var state_32906__$1 = state_32906;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32906__$1,(13),out,inst_32866);
} else {
if((state_val_32907 === (18))){
var inst_32872 = (state_32906[(7)]);
var inst_32881 = cljs.core.first(inst_32872);
var state_32906__$1 = state_32906;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32906__$1,(20),out,inst_32881);
} else {
if((state_val_32907 === (8))){
var inst_32861 = (state_32906[(9)]);
var inst_32860 = (state_32906[(10)]);
var inst_32863 = (inst_32861 < inst_32860);
var inst_32864 = inst_32863;
var state_32906__$1 = state_32906;
if(cljs.core.truth_(inst_32864)){
var statearr_32944_34531 = state_32906__$1;
(statearr_32944_34531[(1)] = (10));

} else {
var statearr_32945_34532 = state_32906__$1;
(statearr_32945_34532[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30762__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30762__auto____0 = (function (){
var statearr_32946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32946[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30762__auto__);

(statearr_32946[(1)] = (1));

return statearr_32946;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30762__auto____1 = (function (state_32906){
while(true){
var ret_value__30763__auto__ = (function (){try{while(true){
var result__30764__auto__ = switch__30761__auto__(state_32906);
if(cljs.core.keyword_identical_QMARK_(result__30764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30764__auto__;
}
break;
}
}catch (e32947){var ex__30765__auto__ = e32947;
var statearr_32948_34533 = state_32906;
(statearr_32948_34533[(2)] = ex__30765__auto__);


if(cljs.core.seq((state_32906[(4)]))){
var statearr_32949_34534 = state_32906;
(statearr_32949_34534[(1)] = cljs.core.first((state_32906[(4)])));

} else {
throw ex__30765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34535 = state_32906;
state_32906 = G__34535;
continue;
} else {
return ret_value__30763__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30762__auto__ = function(state_32906){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30762__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30762__auto____1.call(this,state_32906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30762__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30762__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30762__auto__;
})()
})();
var state__30944__auto__ = (function (){var statearr_32950 = f__30943__auto__();
(statearr_32950[(6)] = c__30942__auto__);

return statearr_32950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30944__auto__);
}));

return c__30942__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32953 = arguments.length;
switch (G__32953) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32957 = arguments.length;
switch (G__32957) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32961 = arguments.length;
switch (G__32961) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30942__auto___34545 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30943__auto__ = (function (){var switch__30761__auto__ = (function (state_32986){
var state_val_32987 = (state_32986[(1)]);
if((state_val_32987 === (7))){
var inst_32981 = (state_32986[(2)]);
var state_32986__$1 = state_32986;
var statearr_32988_34546 = state_32986__$1;
(statearr_32988_34546[(2)] = inst_32981);

(statearr_32988_34546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (1))){
var inst_32963 = null;
var state_32986__$1 = (function (){var statearr_32989 = state_32986;
(statearr_32989[(7)] = inst_32963);

return statearr_32989;
})();
var statearr_32990_34549 = state_32986__$1;
(statearr_32990_34549[(2)] = null);

(statearr_32990_34549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (4))){
var inst_32966 = (state_32986[(8)]);
var inst_32966__$1 = (state_32986[(2)]);
var inst_32967 = (inst_32966__$1 == null);
var inst_32968 = cljs.core.not(inst_32967);
var state_32986__$1 = (function (){var statearr_32992 = state_32986;
(statearr_32992[(8)] = inst_32966__$1);

return statearr_32992;
})();
if(inst_32968){
var statearr_32993_34550 = state_32986__$1;
(statearr_32993_34550[(1)] = (5));

} else {
var statearr_32994_34551 = state_32986__$1;
(statearr_32994_34551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (6))){
var state_32986__$1 = state_32986;
var statearr_32995_34552 = state_32986__$1;
(statearr_32995_34552[(2)] = null);

(statearr_32995_34552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (3))){
var inst_32983 = (state_32986[(2)]);
var inst_32984 = cljs.core.async.close_BANG_(out);
var state_32986__$1 = (function (){var statearr_32997 = state_32986;
(statearr_32997[(9)] = inst_32983);

return statearr_32997;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32986__$1,inst_32984);
} else {
if((state_val_32987 === (2))){
var state_32986__$1 = state_32986;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32986__$1,(4),ch);
} else {
if((state_val_32987 === (11))){
var inst_32966 = (state_32986[(8)]);
var inst_32975 = (state_32986[(2)]);
var inst_32963 = inst_32966;
var state_32986__$1 = (function (){var statearr_32998 = state_32986;
(statearr_32998[(7)] = inst_32963);

(statearr_32998[(10)] = inst_32975);

return statearr_32998;
})();
var statearr_32999_34553 = state_32986__$1;
(statearr_32999_34553[(2)] = null);

(statearr_32999_34553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (9))){
var inst_32966 = (state_32986[(8)]);
var state_32986__$1 = state_32986;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32986__$1,(11),out,inst_32966);
} else {
if((state_val_32987 === (5))){
var inst_32963 = (state_32986[(7)]);
var inst_32966 = (state_32986[(8)]);
var inst_32970 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32966,inst_32963);
var state_32986__$1 = state_32986;
if(inst_32970){
var statearr_33001_34557 = state_32986__$1;
(statearr_33001_34557[(1)] = (8));

} else {
var statearr_33002_34558 = state_32986__$1;
(statearr_33002_34558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (10))){
var inst_32978 = (state_32986[(2)]);
var state_32986__$1 = state_32986;
var statearr_33003_34559 = state_32986__$1;
(statearr_33003_34559[(2)] = inst_32978);

(statearr_33003_34559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32987 === (8))){
var inst_32963 = (state_32986[(7)]);
var tmp33000 = inst_32963;
var inst_32963__$1 = tmp33000;
var state_32986__$1 = (function (){var statearr_33004 = state_32986;
(statearr_33004[(7)] = inst_32963__$1);

return statearr_33004;
})();
var statearr_33005_34560 = state_32986__$1;
(statearr_33005_34560[(2)] = null);

(statearr_33005_34560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30762__auto__ = null;
var cljs$core$async$state_machine__30762__auto____0 = (function (){
var statearr_33006 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33006[(0)] = cljs$core$async$state_machine__30762__auto__);

(statearr_33006[(1)] = (1));

return statearr_33006;
});
var cljs$core$async$state_machine__30762__auto____1 = (function (state_32986){
while(true){
var ret_value__30763__auto__ = (function (){try{while(true){
var result__30764__auto__ = switch__30761__auto__(state_32986);
if(cljs.core.keyword_identical_QMARK_(result__30764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30764__auto__;
}
break;
}
}catch (e33007){var ex__30765__auto__ = e33007;
var statearr_33008_34561 = state_32986;
(statearr_33008_34561[(2)] = ex__30765__auto__);


if(cljs.core.seq((state_32986[(4)]))){
var statearr_33009_34562 = state_32986;
(statearr_33009_34562[(1)] = cljs.core.first((state_32986[(4)])));

} else {
throw ex__30765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34563 = state_32986;
state_32986 = G__34563;
continue;
} else {
return ret_value__30763__auto__;
}
break;
}
});
cljs$core$async$state_machine__30762__auto__ = function(state_32986){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30762__auto____1.call(this,state_32986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30762__auto____0;
cljs$core$async$state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30762__auto____1;
return cljs$core$async$state_machine__30762__auto__;
})()
})();
var state__30944__auto__ = (function (){var statearr_33010 = f__30943__auto__();
(statearr_33010[(6)] = c__30942__auto___34545);

return statearr_33010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30944__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33016 = arguments.length;
switch (G__33016) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30942__auto___34565 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30943__auto__ = (function (){var switch__30761__auto__ = (function (state_33055){
var state_val_33056 = (state_33055[(1)]);
if((state_val_33056 === (7))){
var inst_33051 = (state_33055[(2)]);
var state_33055__$1 = state_33055;
var statearr_33057_34566 = state_33055__$1;
(statearr_33057_34566[(2)] = inst_33051);

(statearr_33057_34566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (1))){
var inst_33018 = (new Array(n));
var inst_33019 = inst_33018;
var inst_33020 = (0);
var state_33055__$1 = (function (){var statearr_33061 = state_33055;
(statearr_33061[(7)] = inst_33020);

(statearr_33061[(8)] = inst_33019);

return statearr_33061;
})();
var statearr_33063_34567 = state_33055__$1;
(statearr_33063_34567[(2)] = null);

(statearr_33063_34567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (4))){
var inst_33023 = (state_33055[(9)]);
var inst_33023__$1 = (state_33055[(2)]);
var inst_33024 = (inst_33023__$1 == null);
var inst_33025 = cljs.core.not(inst_33024);
var state_33055__$1 = (function (){var statearr_33064 = state_33055;
(statearr_33064[(9)] = inst_33023__$1);

return statearr_33064;
})();
if(inst_33025){
var statearr_33065_34568 = state_33055__$1;
(statearr_33065_34568[(1)] = (5));

} else {
var statearr_33066_34569 = state_33055__$1;
(statearr_33066_34569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (15))){
var inst_33045 = (state_33055[(2)]);
var state_33055__$1 = state_33055;
var statearr_33067_34570 = state_33055__$1;
(statearr_33067_34570[(2)] = inst_33045);

(statearr_33067_34570[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (13))){
var state_33055__$1 = state_33055;
var statearr_33068_34571 = state_33055__$1;
(statearr_33068_34571[(2)] = null);

(statearr_33068_34571[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (6))){
var inst_33020 = (state_33055[(7)]);
var inst_33041 = (inst_33020 > (0));
var state_33055__$1 = state_33055;
if(cljs.core.truth_(inst_33041)){
var statearr_33069_34572 = state_33055__$1;
(statearr_33069_34572[(1)] = (12));

} else {
var statearr_33070_34573 = state_33055__$1;
(statearr_33070_34573[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (3))){
var inst_33053 = (state_33055[(2)]);
var state_33055__$1 = state_33055;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33055__$1,inst_33053);
} else {
if((state_val_33056 === (12))){
var inst_33019 = (state_33055[(8)]);
var inst_33043 = cljs.core.vec(inst_33019);
var state_33055__$1 = state_33055;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33055__$1,(15),out,inst_33043);
} else {
if((state_val_33056 === (2))){
var state_33055__$1 = state_33055;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33055__$1,(4),ch);
} else {
if((state_val_33056 === (11))){
var inst_33035 = (state_33055[(2)]);
var inst_33036 = (new Array(n));
var inst_33019 = inst_33036;
var inst_33020 = (0);
var state_33055__$1 = (function (){var statearr_33085 = state_33055;
(statearr_33085[(10)] = inst_33035);

(statearr_33085[(7)] = inst_33020);

(statearr_33085[(8)] = inst_33019);

return statearr_33085;
})();
var statearr_33093_34574 = state_33055__$1;
(statearr_33093_34574[(2)] = null);

(statearr_33093_34574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (9))){
var inst_33019 = (state_33055[(8)]);
var inst_33033 = cljs.core.vec(inst_33019);
var state_33055__$1 = state_33055;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33055__$1,(11),out,inst_33033);
} else {
if((state_val_33056 === (5))){
var inst_33020 = (state_33055[(7)]);
var inst_33019 = (state_33055[(8)]);
var inst_33028 = (state_33055[(11)]);
var inst_33023 = (state_33055[(9)]);
var inst_33027 = (inst_33019[inst_33020] = inst_33023);
var inst_33028__$1 = (inst_33020 + (1));
var inst_33029 = (inst_33028__$1 < n);
var state_33055__$1 = (function (){var statearr_33102 = state_33055;
(statearr_33102[(11)] = inst_33028__$1);

(statearr_33102[(12)] = inst_33027);

return statearr_33102;
})();
if(cljs.core.truth_(inst_33029)){
var statearr_33103_34575 = state_33055__$1;
(statearr_33103_34575[(1)] = (8));

} else {
var statearr_33105_34576 = state_33055__$1;
(statearr_33105_34576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (14))){
var inst_33048 = (state_33055[(2)]);
var inst_33049 = cljs.core.async.close_BANG_(out);
var state_33055__$1 = (function (){var statearr_33113 = state_33055;
(statearr_33113[(13)] = inst_33048);

return statearr_33113;
})();
var statearr_33115_34577 = state_33055__$1;
(statearr_33115_34577[(2)] = inst_33049);

(statearr_33115_34577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (10))){
var inst_33039 = (state_33055[(2)]);
var state_33055__$1 = state_33055;
var statearr_33121_34578 = state_33055__$1;
(statearr_33121_34578[(2)] = inst_33039);

(statearr_33121_34578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (8))){
var inst_33019 = (state_33055[(8)]);
var inst_33028 = (state_33055[(11)]);
var tmp33110 = inst_33019;
var inst_33019__$1 = tmp33110;
var inst_33020 = inst_33028;
var state_33055__$1 = (function (){var statearr_33131 = state_33055;
(statearr_33131[(7)] = inst_33020);

(statearr_33131[(8)] = inst_33019__$1);

return statearr_33131;
})();
var statearr_33132_34579 = state_33055__$1;
(statearr_33132_34579[(2)] = null);

(statearr_33132_34579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30762__auto__ = null;
var cljs$core$async$state_machine__30762__auto____0 = (function (){
var statearr_33133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33133[(0)] = cljs$core$async$state_machine__30762__auto__);

(statearr_33133[(1)] = (1));

return statearr_33133;
});
var cljs$core$async$state_machine__30762__auto____1 = (function (state_33055){
while(true){
var ret_value__30763__auto__ = (function (){try{while(true){
var result__30764__auto__ = switch__30761__auto__(state_33055);
if(cljs.core.keyword_identical_QMARK_(result__30764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30764__auto__;
}
break;
}
}catch (e33134){var ex__30765__auto__ = e33134;
var statearr_33135_34580 = state_33055;
(statearr_33135_34580[(2)] = ex__30765__auto__);


if(cljs.core.seq((state_33055[(4)]))){
var statearr_33136_34581 = state_33055;
(statearr_33136_34581[(1)] = cljs.core.first((state_33055[(4)])));

} else {
throw ex__30765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34582 = state_33055;
state_33055 = G__34582;
continue;
} else {
return ret_value__30763__auto__;
}
break;
}
});
cljs$core$async$state_machine__30762__auto__ = function(state_33055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30762__auto____1.call(this,state_33055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30762__auto____0;
cljs$core$async$state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30762__auto____1;
return cljs$core$async$state_machine__30762__auto__;
})()
})();
var state__30944__auto__ = (function (){var statearr_33137 = f__30943__auto__();
(statearr_33137[(6)] = c__30942__auto___34565);

return statearr_33137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30944__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33139 = arguments.length;
switch (G__33139) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30942__auto___34584 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30943__auto__ = (function (){var switch__30761__auto__ = (function (state_33181){
var state_val_33182 = (state_33181[(1)]);
if((state_val_33182 === (7))){
var inst_33177 = (state_33181[(2)]);
var state_33181__$1 = state_33181;
var statearr_33184_34585 = state_33181__$1;
(statearr_33184_34585[(2)] = inst_33177);

(statearr_33184_34585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33182 === (1))){
var inst_33140 = [];
var inst_33141 = inst_33140;
var inst_33142 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33181__$1 = (function (){var statearr_33185 = state_33181;
(statearr_33185[(7)] = inst_33141);

(statearr_33185[(8)] = inst_33142);

return statearr_33185;
})();
var statearr_33186_34586 = state_33181__$1;
(statearr_33186_34586[(2)] = null);

(statearr_33186_34586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33182 === (4))){
var inst_33145 = (state_33181[(9)]);
var inst_33145__$1 = (state_33181[(2)]);
var inst_33146 = (inst_33145__$1 == null);
var inst_33147 = cljs.core.not(inst_33146);
var state_33181__$1 = (function (){var statearr_33197 = state_33181;
(statearr_33197[(9)] = inst_33145__$1);

return statearr_33197;
})();
if(inst_33147){
var statearr_33198_34587 = state_33181__$1;
(statearr_33198_34587[(1)] = (5));

} else {
var statearr_33199_34588 = state_33181__$1;
(statearr_33199_34588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33182 === (15))){
var inst_33171 = (state_33181[(2)]);
var state_33181__$1 = state_33181;
var statearr_33200_34589 = state_33181__$1;
(statearr_33200_34589[(2)] = inst_33171);

(statearr_33200_34589[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33182 === (13))){
var state_33181__$1 = state_33181;
var statearr_33202_34590 = state_33181__$1;
(statearr_33202_34590[(2)] = null);

(statearr_33202_34590[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33182 === (6))){
var inst_33141 = (state_33181[(7)]);
var inst_33166 = inst_33141.length;
var inst_33167 = (inst_33166 > (0));
var state_33181__$1 = state_33181;
if(cljs.core.truth_(inst_33167)){
var statearr_33203_34591 = state_33181__$1;
(statearr_33203_34591[(1)] = (12));

} else {
var statearr_33204_34592 = state_33181__$1;
(statearr_33204_34592[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33182 === (3))){
var inst_33179 = (state_33181[(2)]);
var state_33181__$1 = state_33181;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33181__$1,inst_33179);
} else {
if((state_val_33182 === (12))){
var inst_33141 = (state_33181[(7)]);
var inst_33169 = cljs.core.vec(inst_33141);
var state_33181__$1 = state_33181;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33181__$1,(15),out,inst_33169);
} else {
if((state_val_33182 === (2))){
var state_33181__$1 = state_33181;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33181__$1,(4),ch);
} else {
if((state_val_33182 === (11))){
var inst_33149 = (state_33181[(10)]);
var inst_33145 = (state_33181[(9)]);
var inst_33159 = (state_33181[(2)]);
var inst_33160 = [];
var inst_33161 = inst_33160.push(inst_33145);
var inst_33141 = inst_33160;
var inst_33142 = inst_33149;
var state_33181__$1 = (function (){var statearr_33205 = state_33181;
(statearr_33205[(7)] = inst_33141);

(statearr_33205[(8)] = inst_33142);

(statearr_33205[(11)] = inst_33159);

(statearr_33205[(12)] = inst_33161);

return statearr_33205;
})();
var statearr_33206_34593 = state_33181__$1;
(statearr_33206_34593[(2)] = null);

(statearr_33206_34593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33182 === (9))){
var inst_33141 = (state_33181[(7)]);
var inst_33157 = cljs.core.vec(inst_33141);
var state_33181__$1 = state_33181;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33181__$1,(11),out,inst_33157);
} else {
if((state_val_33182 === (5))){
var inst_33149 = (state_33181[(10)]);
var inst_33145 = (state_33181[(9)]);
var inst_33142 = (state_33181[(8)]);
var inst_33149__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33145) : f.call(null,inst_33145));
var inst_33150 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33149__$1,inst_33142);
var inst_33151 = cljs.core.keyword_identical_QMARK_(inst_33142,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33152 = ((inst_33150) || (inst_33151));
var state_33181__$1 = (function (){var statearr_33210 = state_33181;
(statearr_33210[(10)] = inst_33149__$1);

return statearr_33210;
})();
if(cljs.core.truth_(inst_33152)){
var statearr_33211_34594 = state_33181__$1;
(statearr_33211_34594[(1)] = (8));

} else {
var statearr_33212_34595 = state_33181__$1;
(statearr_33212_34595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33182 === (14))){
var inst_33174 = (state_33181[(2)]);
var inst_33175 = cljs.core.async.close_BANG_(out);
var state_33181__$1 = (function (){var statearr_33217 = state_33181;
(statearr_33217[(13)] = inst_33174);

return statearr_33217;
})();
var statearr_33219_34596 = state_33181__$1;
(statearr_33219_34596[(2)] = inst_33175);

(statearr_33219_34596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33182 === (10))){
var inst_33164 = (state_33181[(2)]);
var state_33181__$1 = state_33181;
var statearr_33220_34597 = state_33181__$1;
(statearr_33220_34597[(2)] = inst_33164);

(statearr_33220_34597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33182 === (8))){
var inst_33141 = (state_33181[(7)]);
var inst_33149 = (state_33181[(10)]);
var inst_33145 = (state_33181[(9)]);
var inst_33154 = inst_33141.push(inst_33145);
var tmp33213 = inst_33141;
var inst_33141__$1 = tmp33213;
var inst_33142 = inst_33149;
var state_33181__$1 = (function (){var statearr_33222 = state_33181;
(statearr_33222[(7)] = inst_33141__$1);

(statearr_33222[(14)] = inst_33154);

(statearr_33222[(8)] = inst_33142);

return statearr_33222;
})();
var statearr_33223_34598 = state_33181__$1;
(statearr_33223_34598[(2)] = null);

(statearr_33223_34598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30762__auto__ = null;
var cljs$core$async$state_machine__30762__auto____0 = (function (){
var statearr_33224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33224[(0)] = cljs$core$async$state_machine__30762__auto__);

(statearr_33224[(1)] = (1));

return statearr_33224;
});
var cljs$core$async$state_machine__30762__auto____1 = (function (state_33181){
while(true){
var ret_value__30763__auto__ = (function (){try{while(true){
var result__30764__auto__ = switch__30761__auto__(state_33181);
if(cljs.core.keyword_identical_QMARK_(result__30764__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30764__auto__;
}
break;
}
}catch (e33225){var ex__30765__auto__ = e33225;
var statearr_33227_34599 = state_33181;
(statearr_33227_34599[(2)] = ex__30765__auto__);


if(cljs.core.seq((state_33181[(4)]))){
var statearr_33228_34600 = state_33181;
(statearr_33228_34600[(1)] = cljs.core.first((state_33181[(4)])));

} else {
throw ex__30765__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30763__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34601 = state_33181;
state_33181 = G__34601;
continue;
} else {
return ret_value__30763__auto__;
}
break;
}
});
cljs$core$async$state_machine__30762__auto__ = function(state_33181){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30762__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30762__auto____1.call(this,state_33181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30762__auto____0;
cljs$core$async$state_machine__30762__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30762__auto____1;
return cljs$core$async$state_machine__30762__auto__;
})()
})();
var state__30944__auto__ = (function (){var statearr_33230 = f__30943__auto__();
(statearr_33230[(6)] = c__30942__auto___34584);

return statearr_33230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30944__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
