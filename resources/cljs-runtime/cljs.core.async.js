goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31134 = arguments.length;
switch (G__31134) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31135 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31135 = (function (f,blockable,meta31136){
this.f = f;
this.blockable = blockable;
this.meta31136 = meta31136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31137,meta31136__$1){
var self__ = this;
var _31137__$1 = this;
return (new cljs.core.async.t_cljs$core$async31135(self__.f,self__.blockable,meta31136__$1));
}));

(cljs.core.async.t_cljs$core$async31135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31137){
var self__ = this;
var _31137__$1 = this;
return self__.meta31136;
}));

(cljs.core.async.t_cljs$core$async31135.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31135.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31135.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31135.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31135.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31136","meta31136",1556118478,null)], null);
}));

(cljs.core.async.t_cljs$core$async31135.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31135.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31135");

(cljs.core.async.t_cljs$core$async31135.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31135");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31135.
 */
cljs.core.async.__GT_t_cljs$core$async31135 = (function cljs$core$async$__GT_t_cljs$core$async31135(f__$1,blockable__$1,meta31136){
return (new cljs.core.async.t_cljs$core$async31135(f__$1,blockable__$1,meta31136));
});

}

return (new cljs.core.async.t_cljs$core$async31135(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31174 = arguments.length;
switch (G__31174) {
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
var G__31176 = arguments.length;
switch (G__31176) {
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
var G__31188 = arguments.length;
switch (G__31188) {
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
var val_33334 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33334) : fn1.call(null,val_33334));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33334) : fn1.call(null,val_33334));
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
var G__31225 = arguments.length;
switch (G__31225) {
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
var n__4613__auto___33339 = n;
var x_33340 = (0);
while(true){
if((x_33340 < n__4613__auto___33339)){
(a[x_33340] = x_33340);

var G__33341 = (x_33340 + (1));
x_33340 = G__33341;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31234 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31234 = (function (flag,meta31235){
this.flag = flag;
this.meta31235 = meta31235;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31236,meta31235__$1){
var self__ = this;
var _31236__$1 = this;
return (new cljs.core.async.t_cljs$core$async31234(self__.flag,meta31235__$1));
}));

(cljs.core.async.t_cljs$core$async31234.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31236){
var self__ = this;
var _31236__$1 = this;
return self__.meta31235;
}));

(cljs.core.async.t_cljs$core$async31234.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31234.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31234.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31234.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31234.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31235","meta31235",-1845687035,null)], null);
}));

(cljs.core.async.t_cljs$core$async31234.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31234.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31234");

(cljs.core.async.t_cljs$core$async31234.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31234");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31234.
 */
cljs.core.async.__GT_t_cljs$core$async31234 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31234(flag__$1,meta31235){
return (new cljs.core.async.t_cljs$core$async31234(flag__$1,meta31235));
});

}

return (new cljs.core.async.t_cljs$core$async31234(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31239 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31239 = (function (flag,cb,meta31240){
this.flag = flag;
this.cb = cb;
this.meta31240 = meta31240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31241,meta31240__$1){
var self__ = this;
var _31241__$1 = this;
return (new cljs.core.async.t_cljs$core$async31239(self__.flag,self__.cb,meta31240__$1));
}));

(cljs.core.async.t_cljs$core$async31239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31241){
var self__ = this;
var _31241__$1 = this;
return self__.meta31240;
}));

(cljs.core.async.t_cljs$core$async31239.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31239.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31239.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31239.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31239.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31240","meta31240",263624221,null)], null);
}));

(cljs.core.async.t_cljs$core$async31239.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31239.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31239");

(cljs.core.async.t_cljs$core$async31239.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31239");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31239.
 */
cljs.core.async.__GT_t_cljs$core$async31239 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31239(flag__$1,cb__$1,meta31240){
return (new cljs.core.async.t_cljs$core$async31239(flag__$1,cb__$1,meta31240));
});

}

return (new cljs.core.async.t_cljs$core$async31239(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31248_SHARP_){
var G__31253 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31248_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31253) : fret.call(null,G__31253));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31249_SHARP_){
var G__31254 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31249_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31254) : fret.call(null,G__31254));
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
var G__33389 = (i + (1));
i = G__33389;
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
var len__4736__auto___33390 = arguments.length;
var i__4737__auto___33391 = (0);
while(true){
if((i__4737__auto___33391 < len__4736__auto___33390)){
args__4742__auto__.push((arguments[i__4737__auto___33391]));

var G__33392 = (i__4737__auto___33391 + (1));
i__4737__auto___33391 = G__33392;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31274){
var map__31275 = p__31274;
var map__31275__$1 = (((((!((map__31275 == null))))?(((((map__31275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31275):map__31275);
var opts = map__31275__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31267){
var G__31268 = cljs.core.first(seq31267);
var seq31267__$1 = cljs.core.next(seq31267);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31268,seq31267__$1);
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
var G__31284 = arguments.length;
switch (G__31284) {
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
var c__31034__auto___33404 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31035__auto__ = (function (){var switch__30866__auto__ = (function (state_31339){
var state_val_31341 = (state_31339[(1)]);
if((state_val_31341 === (7))){
var inst_31323 = (state_31339[(2)]);
var state_31339__$1 = state_31339;
var statearr_31342_33405 = state_31339__$1;
(statearr_31342_33405[(2)] = inst_31323);

(statearr_31342_33405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31341 === (1))){
var state_31339__$1 = state_31339;
var statearr_31343_33406 = state_31339__$1;
(statearr_31343_33406[(2)] = null);

(statearr_31343_33406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31341 === (4))){
var inst_31302 = (state_31339[(7)]);
var inst_31302__$1 = (state_31339[(2)]);
var inst_31303 = (inst_31302__$1 == null);
var state_31339__$1 = (function (){var statearr_31344 = state_31339;
(statearr_31344[(7)] = inst_31302__$1);

return statearr_31344;
})();
if(cljs.core.truth_(inst_31303)){
var statearr_31345_33407 = state_31339__$1;
(statearr_31345_33407[(1)] = (5));

} else {
var statearr_31346_33408 = state_31339__$1;
(statearr_31346_33408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31341 === (13))){
var state_31339__$1 = state_31339;
var statearr_31351_33409 = state_31339__$1;
(statearr_31351_33409[(2)] = null);

(statearr_31351_33409[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31341 === (6))){
var inst_31302 = (state_31339[(7)]);
var state_31339__$1 = state_31339;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31339__$1,(11),to,inst_31302);
} else {
if((state_val_31341 === (3))){
var inst_31325 = (state_31339[(2)]);
var state_31339__$1 = state_31339;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31339__$1,inst_31325);
} else {
if((state_val_31341 === (12))){
var state_31339__$1 = state_31339;
var statearr_31356_33410 = state_31339__$1;
(statearr_31356_33410[(2)] = null);

(statearr_31356_33410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31341 === (2))){
var state_31339__$1 = state_31339;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31339__$1,(4),from);
} else {
if((state_val_31341 === (11))){
var inst_31312 = (state_31339[(2)]);
var state_31339__$1 = state_31339;
if(cljs.core.truth_(inst_31312)){
var statearr_31360_33411 = state_31339__$1;
(statearr_31360_33411[(1)] = (12));

} else {
var statearr_31361_33412 = state_31339__$1;
(statearr_31361_33412[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31341 === (9))){
var state_31339__$1 = state_31339;
var statearr_31362_33413 = state_31339__$1;
(statearr_31362_33413[(2)] = null);

(statearr_31362_33413[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31341 === (5))){
var state_31339__$1 = state_31339;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31363_33414 = state_31339__$1;
(statearr_31363_33414[(1)] = (8));

} else {
var statearr_31364_33415 = state_31339__$1;
(statearr_31364_33415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31341 === (14))){
var inst_31321 = (state_31339[(2)]);
var state_31339__$1 = state_31339;
var statearr_31365_33416 = state_31339__$1;
(statearr_31365_33416[(2)] = inst_31321);

(statearr_31365_33416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31341 === (10))){
var inst_31309 = (state_31339[(2)]);
var state_31339__$1 = state_31339;
var statearr_31366_33432 = state_31339__$1;
(statearr_31366_33432[(2)] = inst_31309);

(statearr_31366_33432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31341 === (8))){
var inst_31306 = cljs.core.async.close_BANG_(to);
var state_31339__$1 = state_31339;
var statearr_31367_33433 = state_31339__$1;
(statearr_31367_33433[(2)] = inst_31306);

(statearr_31367_33433[(1)] = (10));


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
var cljs$core$async$state_machine__30867__auto__ = null;
var cljs$core$async$state_machine__30867__auto____0 = (function (){
var statearr_31368 = [null,null,null,null,null,null,null,null];
(statearr_31368[(0)] = cljs$core$async$state_machine__30867__auto__);

(statearr_31368[(1)] = (1));

return statearr_31368;
});
var cljs$core$async$state_machine__30867__auto____1 = (function (state_31339){
while(true){
var ret_value__30868__auto__ = (function (){try{while(true){
var result__30869__auto__ = switch__30866__auto__(state_31339);
if(cljs.core.keyword_identical_QMARK_(result__30869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30869__auto__;
}
break;
}
}catch (e31370){var ex__30870__auto__ = e31370;
var statearr_31372_33434 = state_31339;
(statearr_31372_33434[(2)] = ex__30870__auto__);


if(cljs.core.seq((state_31339[(4)]))){
var statearr_31374_33435 = state_31339;
(statearr_31374_33435[(1)] = cljs.core.first((state_31339[(4)])));

} else {
throw ex__30870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33436 = state_31339;
state_31339 = G__33436;
continue;
} else {
return ret_value__30868__auto__;
}
break;
}
});
cljs$core$async$state_machine__30867__auto__ = function(state_31339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30867__auto____1.call(this,state_31339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30867__auto____0;
cljs$core$async$state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30867__auto____1;
return cljs$core$async$state_machine__30867__auto__;
})()
})();
var state__31036__auto__ = (function (){var statearr_31375 = f__31035__auto__();
(statearr_31375[(6)] = c__31034__auto___33404);

return statearr_31375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31036__auto__);
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
var process = (function (p__31387){
var vec__31388 = p__31387;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31388,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31388,(1),null);
var job = vec__31388;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31034__auto___33437 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31035__auto__ = (function (){var switch__30866__auto__ = (function (state_31396){
var state_val_31397 = (state_31396[(1)]);
if((state_val_31397 === (1))){
var state_31396__$1 = state_31396;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31396__$1,(2),res,v);
} else {
if((state_val_31397 === (2))){
var inst_31393 = (state_31396[(2)]);
var inst_31394 = cljs.core.async.close_BANG_(res);
var state_31396__$1 = (function (){var statearr_31404 = state_31396;
(statearr_31404[(7)] = inst_31393);

return statearr_31404;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31396__$1,inst_31394);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30867__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30867__auto____0 = (function (){
var statearr_31407 = [null,null,null,null,null,null,null,null];
(statearr_31407[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30867__auto__);

(statearr_31407[(1)] = (1));

return statearr_31407;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30867__auto____1 = (function (state_31396){
while(true){
var ret_value__30868__auto__ = (function (){try{while(true){
var result__30869__auto__ = switch__30866__auto__(state_31396);
if(cljs.core.keyword_identical_QMARK_(result__30869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30869__auto__;
}
break;
}
}catch (e31408){var ex__30870__auto__ = e31408;
var statearr_31409_33438 = state_31396;
(statearr_31409_33438[(2)] = ex__30870__auto__);


if(cljs.core.seq((state_31396[(4)]))){
var statearr_31414_33439 = state_31396;
(statearr_31414_33439[(1)] = cljs.core.first((state_31396[(4)])));

} else {
throw ex__30870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33440 = state_31396;
state_31396 = G__33440;
continue;
} else {
return ret_value__30868__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30867__auto__ = function(state_31396){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30867__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30867__auto____1.call(this,state_31396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30867__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30867__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30867__auto__;
})()
})();
var state__31036__auto__ = (function (){var statearr_31415 = f__31035__auto__();
(statearr_31415[(6)] = c__31034__auto___33437);

return statearr_31415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31036__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31419){
var vec__31420 = p__31419;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31420,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31420,(1),null);
var job = vec__31420;
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
var n__4613__auto___33447 = n;
var __33448 = (0);
while(true){
if((__33448 < n__4613__auto___33447)){
var G__31423_33449 = type;
var G__31423_33450__$1 = (((G__31423_33449 instanceof cljs.core.Keyword))?G__31423_33449.fqn:null);
switch (G__31423_33450__$1) {
case "compute":
var c__31034__auto___33452 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33448,c__31034__auto___33452,G__31423_33449,G__31423_33450__$1,n__4613__auto___33447,jobs,results,process,async){
return (function (){
var f__31035__auto__ = (function (){var switch__30866__auto__ = ((function (__33448,c__31034__auto___33452,G__31423_33449,G__31423_33450__$1,n__4613__auto___33447,jobs,results,process,async){
return (function (state_31436){
var state_val_31437 = (state_31436[(1)]);
if((state_val_31437 === (1))){
var state_31436__$1 = state_31436;
var statearr_31442_33460 = state_31436__$1;
(statearr_31442_33460[(2)] = null);

(statearr_31442_33460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (2))){
var state_31436__$1 = state_31436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31436__$1,(4),jobs);
} else {
if((state_val_31437 === (3))){
var inst_31434 = (state_31436[(2)]);
var state_31436__$1 = state_31436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31436__$1,inst_31434);
} else {
if((state_val_31437 === (4))){
var inst_31426 = (state_31436[(2)]);
var inst_31427 = process(inst_31426);
var state_31436__$1 = state_31436;
if(cljs.core.truth_(inst_31427)){
var statearr_31443_33461 = state_31436__$1;
(statearr_31443_33461[(1)] = (5));

} else {
var statearr_31444_33462 = state_31436__$1;
(statearr_31444_33462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (5))){
var state_31436__$1 = state_31436;
var statearr_31445_33469 = state_31436__$1;
(statearr_31445_33469[(2)] = null);

(statearr_31445_33469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (6))){
var state_31436__$1 = state_31436;
var statearr_31446_33470 = state_31436__$1;
(statearr_31446_33470[(2)] = null);

(statearr_31446_33470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31437 === (7))){
var inst_31432 = (state_31436[(2)]);
var state_31436__$1 = state_31436;
var statearr_31447_33472 = state_31436__$1;
(statearr_31447_33472[(2)] = inst_31432);

(statearr_31447_33472[(1)] = (3));


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
});})(__33448,c__31034__auto___33452,G__31423_33449,G__31423_33450__$1,n__4613__auto___33447,jobs,results,process,async))
;
return ((function (__33448,switch__30866__auto__,c__31034__auto___33452,G__31423_33449,G__31423_33450__$1,n__4613__auto___33447,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30867__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30867__auto____0 = (function (){
var statearr_31448 = [null,null,null,null,null,null,null];
(statearr_31448[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30867__auto__);

(statearr_31448[(1)] = (1));

return statearr_31448;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30867__auto____1 = (function (state_31436){
while(true){
var ret_value__30868__auto__ = (function (){try{while(true){
var result__30869__auto__ = switch__30866__auto__(state_31436);
if(cljs.core.keyword_identical_QMARK_(result__30869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30869__auto__;
}
break;
}
}catch (e31449){var ex__30870__auto__ = e31449;
var statearr_31450_33474 = state_31436;
(statearr_31450_33474[(2)] = ex__30870__auto__);


if(cljs.core.seq((state_31436[(4)]))){
var statearr_31451_33475 = state_31436;
(statearr_31451_33475[(1)] = cljs.core.first((state_31436[(4)])));

} else {
throw ex__30870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33476 = state_31436;
state_31436 = G__33476;
continue;
} else {
return ret_value__30868__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30867__auto__ = function(state_31436){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30867__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30867__auto____1.call(this,state_31436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30867__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30867__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30867__auto__;
})()
;})(__33448,switch__30866__auto__,c__31034__auto___33452,G__31423_33449,G__31423_33450__$1,n__4613__auto___33447,jobs,results,process,async))
})();
var state__31036__auto__ = (function (){var statearr_31454 = f__31035__auto__();
(statearr_31454[(6)] = c__31034__auto___33452);

return statearr_31454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31036__auto__);
});})(__33448,c__31034__auto___33452,G__31423_33449,G__31423_33450__$1,n__4613__auto___33447,jobs,results,process,async))
);


break;
case "async":
var c__31034__auto___33486 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33448,c__31034__auto___33486,G__31423_33449,G__31423_33450__$1,n__4613__auto___33447,jobs,results,process,async){
return (function (){
var f__31035__auto__ = (function (){var switch__30866__auto__ = ((function (__33448,c__31034__auto___33486,G__31423_33449,G__31423_33450__$1,n__4613__auto___33447,jobs,results,process,async){
return (function (state_31467){
var state_val_31468 = (state_31467[(1)]);
if((state_val_31468 === (1))){
var state_31467__$1 = state_31467;
var statearr_31471_33487 = state_31467__$1;
(statearr_31471_33487[(2)] = null);

(statearr_31471_33487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (2))){
var state_31467__$1 = state_31467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31467__$1,(4),jobs);
} else {
if((state_val_31468 === (3))){
var inst_31465 = (state_31467[(2)]);
var state_31467__$1 = state_31467;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31467__$1,inst_31465);
} else {
if((state_val_31468 === (4))){
var inst_31457 = (state_31467[(2)]);
var inst_31458 = async(inst_31457);
var state_31467__$1 = state_31467;
if(cljs.core.truth_(inst_31458)){
var statearr_31472_33488 = state_31467__$1;
(statearr_31472_33488[(1)] = (5));

} else {
var statearr_31473_33489 = state_31467__$1;
(statearr_31473_33489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (5))){
var state_31467__$1 = state_31467;
var statearr_31474_33490 = state_31467__$1;
(statearr_31474_33490[(2)] = null);

(statearr_31474_33490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (6))){
var state_31467__$1 = state_31467;
var statearr_31475_33491 = state_31467__$1;
(statearr_31475_33491[(2)] = null);

(statearr_31475_33491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31468 === (7))){
var inst_31463 = (state_31467[(2)]);
var state_31467__$1 = state_31467;
var statearr_31476_33492 = state_31467__$1;
(statearr_31476_33492[(2)] = inst_31463);

(statearr_31476_33492[(1)] = (3));


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
});})(__33448,c__31034__auto___33486,G__31423_33449,G__31423_33450__$1,n__4613__auto___33447,jobs,results,process,async))
;
return ((function (__33448,switch__30866__auto__,c__31034__auto___33486,G__31423_33449,G__31423_33450__$1,n__4613__auto___33447,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30867__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30867__auto____0 = (function (){
var statearr_31481 = [null,null,null,null,null,null,null];
(statearr_31481[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30867__auto__);

(statearr_31481[(1)] = (1));

return statearr_31481;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30867__auto____1 = (function (state_31467){
while(true){
var ret_value__30868__auto__ = (function (){try{while(true){
var result__30869__auto__ = switch__30866__auto__(state_31467);
if(cljs.core.keyword_identical_QMARK_(result__30869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30869__auto__;
}
break;
}
}catch (e31482){var ex__30870__auto__ = e31482;
var statearr_31483_33493 = state_31467;
(statearr_31483_33493[(2)] = ex__30870__auto__);


if(cljs.core.seq((state_31467[(4)]))){
var statearr_31484_33494 = state_31467;
(statearr_31484_33494[(1)] = cljs.core.first((state_31467[(4)])));

} else {
throw ex__30870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33495 = state_31467;
state_31467 = G__33495;
continue;
} else {
return ret_value__30868__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30867__auto__ = function(state_31467){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30867__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30867__auto____1.call(this,state_31467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30867__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30867__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30867__auto__;
})()
;})(__33448,switch__30866__auto__,c__31034__auto___33486,G__31423_33449,G__31423_33450__$1,n__4613__auto___33447,jobs,results,process,async))
})();
var state__31036__auto__ = (function (){var statearr_31485 = f__31035__auto__();
(statearr_31485[(6)] = c__31034__auto___33486);

return statearr_31485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31036__auto__);
});})(__33448,c__31034__auto___33486,G__31423_33449,G__31423_33450__$1,n__4613__auto___33447,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31423_33450__$1)].join('')));

}

var G__33497 = (__33448 + (1));
__33448 = G__33497;
continue;
} else {
}
break;
}

var c__31034__auto___33498 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31035__auto__ = (function (){var switch__30866__auto__ = (function (state_31508){
var state_val_31509 = (state_31508[(1)]);
if((state_val_31509 === (7))){
var inst_31504 = (state_31508[(2)]);
var state_31508__$1 = state_31508;
var statearr_31510_33499 = state_31508__$1;
(statearr_31510_33499[(2)] = inst_31504);

(statearr_31510_33499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (1))){
var state_31508__$1 = state_31508;
var statearr_31513_33502 = state_31508__$1;
(statearr_31513_33502[(2)] = null);

(statearr_31513_33502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (4))){
var inst_31488 = (state_31508[(7)]);
var inst_31488__$1 = (state_31508[(2)]);
var inst_31489 = (inst_31488__$1 == null);
var state_31508__$1 = (function (){var statearr_31516 = state_31508;
(statearr_31516[(7)] = inst_31488__$1);

return statearr_31516;
})();
if(cljs.core.truth_(inst_31489)){
var statearr_31517_33503 = state_31508__$1;
(statearr_31517_33503[(1)] = (5));

} else {
var statearr_31519_33504 = state_31508__$1;
(statearr_31519_33504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (6))){
var inst_31494 = (state_31508[(8)]);
var inst_31488 = (state_31508[(7)]);
var inst_31494__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31495 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31496 = [inst_31488,inst_31494__$1];
var inst_31497 = (new cljs.core.PersistentVector(null,2,(5),inst_31495,inst_31496,null));
var state_31508__$1 = (function (){var statearr_31522 = state_31508;
(statearr_31522[(8)] = inst_31494__$1);

return statearr_31522;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31508__$1,(8),jobs,inst_31497);
} else {
if((state_val_31509 === (3))){
var inst_31506 = (state_31508[(2)]);
var state_31508__$1 = state_31508;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31508__$1,inst_31506);
} else {
if((state_val_31509 === (2))){
var state_31508__$1 = state_31508;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31508__$1,(4),from);
} else {
if((state_val_31509 === (9))){
var inst_31501 = (state_31508[(2)]);
var state_31508__$1 = (function (){var statearr_31523 = state_31508;
(statearr_31523[(9)] = inst_31501);

return statearr_31523;
})();
var statearr_31524_33507 = state_31508__$1;
(statearr_31524_33507[(2)] = null);

(statearr_31524_33507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (5))){
var inst_31492 = cljs.core.async.close_BANG_(jobs);
var state_31508__$1 = state_31508;
var statearr_31525_33508 = state_31508__$1;
(statearr_31525_33508[(2)] = inst_31492);

(statearr_31525_33508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31509 === (8))){
var inst_31494 = (state_31508[(8)]);
var inst_31499 = (state_31508[(2)]);
var state_31508__$1 = (function (){var statearr_31526 = state_31508;
(statearr_31526[(10)] = inst_31499);

return statearr_31526;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31508__$1,(9),results,inst_31494);
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
var cljs$core$async$pipeline_STAR__$_state_machine__30867__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30867__auto____0 = (function (){
var statearr_31527 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31527[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30867__auto__);

(statearr_31527[(1)] = (1));

return statearr_31527;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30867__auto____1 = (function (state_31508){
while(true){
var ret_value__30868__auto__ = (function (){try{while(true){
var result__30869__auto__ = switch__30866__auto__(state_31508);
if(cljs.core.keyword_identical_QMARK_(result__30869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30869__auto__;
}
break;
}
}catch (e31528){var ex__30870__auto__ = e31528;
var statearr_31530_33509 = state_31508;
(statearr_31530_33509[(2)] = ex__30870__auto__);


if(cljs.core.seq((state_31508[(4)]))){
var statearr_31531_33510 = state_31508;
(statearr_31531_33510[(1)] = cljs.core.first((state_31508[(4)])));

} else {
throw ex__30870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33518 = state_31508;
state_31508 = G__33518;
continue;
} else {
return ret_value__30868__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30867__auto__ = function(state_31508){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30867__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30867__auto____1.call(this,state_31508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30867__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30867__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30867__auto__;
})()
})();
var state__31036__auto__ = (function (){var statearr_31533 = f__31035__auto__();
(statearr_31533[(6)] = c__31034__auto___33498);

return statearr_31533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31036__auto__);
}));


var c__31034__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31035__auto__ = (function (){var switch__30866__auto__ = (function (state_31571){
var state_val_31572 = (state_31571[(1)]);
if((state_val_31572 === (7))){
var inst_31567 = (state_31571[(2)]);
var state_31571__$1 = state_31571;
var statearr_31573_33519 = state_31571__$1;
(statearr_31573_33519[(2)] = inst_31567);

(statearr_31573_33519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (20))){
var state_31571__$1 = state_31571;
var statearr_31574_33520 = state_31571__$1;
(statearr_31574_33520[(2)] = null);

(statearr_31574_33520[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (1))){
var state_31571__$1 = state_31571;
var statearr_31575_33521 = state_31571__$1;
(statearr_31575_33521[(2)] = null);

(statearr_31575_33521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (4))){
var inst_31536 = (state_31571[(7)]);
var inst_31536__$1 = (state_31571[(2)]);
var inst_31537 = (inst_31536__$1 == null);
var state_31571__$1 = (function (){var statearr_31578 = state_31571;
(statearr_31578[(7)] = inst_31536__$1);

return statearr_31578;
})();
if(cljs.core.truth_(inst_31537)){
var statearr_31579_33522 = state_31571__$1;
(statearr_31579_33522[(1)] = (5));

} else {
var statearr_31580_33523 = state_31571__$1;
(statearr_31580_33523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (15))){
var inst_31549 = (state_31571[(8)]);
var state_31571__$1 = state_31571;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31571__$1,(18),to,inst_31549);
} else {
if((state_val_31572 === (21))){
var inst_31562 = (state_31571[(2)]);
var state_31571__$1 = state_31571;
var statearr_31581_33524 = state_31571__$1;
(statearr_31581_33524[(2)] = inst_31562);

(statearr_31581_33524[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (13))){
var inst_31564 = (state_31571[(2)]);
var state_31571__$1 = (function (){var statearr_31582 = state_31571;
(statearr_31582[(9)] = inst_31564);

return statearr_31582;
})();
var statearr_31583_33525 = state_31571__$1;
(statearr_31583_33525[(2)] = null);

(statearr_31583_33525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (6))){
var inst_31536 = (state_31571[(7)]);
var state_31571__$1 = state_31571;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31571__$1,(11),inst_31536);
} else {
if((state_val_31572 === (17))){
var inst_31557 = (state_31571[(2)]);
var state_31571__$1 = state_31571;
if(cljs.core.truth_(inst_31557)){
var statearr_31584_33526 = state_31571__$1;
(statearr_31584_33526[(1)] = (19));

} else {
var statearr_31585_33527 = state_31571__$1;
(statearr_31585_33527[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (3))){
var inst_31569 = (state_31571[(2)]);
var state_31571__$1 = state_31571;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31571__$1,inst_31569);
} else {
if((state_val_31572 === (12))){
var inst_31546 = (state_31571[(10)]);
var state_31571__$1 = state_31571;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31571__$1,(14),inst_31546);
} else {
if((state_val_31572 === (2))){
var state_31571__$1 = state_31571;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31571__$1,(4),results);
} else {
if((state_val_31572 === (19))){
var state_31571__$1 = state_31571;
var statearr_31586_33535 = state_31571__$1;
(statearr_31586_33535[(2)] = null);

(statearr_31586_33535[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (11))){
var inst_31546 = (state_31571[(2)]);
var state_31571__$1 = (function (){var statearr_31587 = state_31571;
(statearr_31587[(10)] = inst_31546);

return statearr_31587;
})();
var statearr_31588_33540 = state_31571__$1;
(statearr_31588_33540[(2)] = null);

(statearr_31588_33540[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (9))){
var state_31571__$1 = state_31571;
var statearr_31589_33541 = state_31571__$1;
(statearr_31589_33541[(2)] = null);

(statearr_31589_33541[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (5))){
var state_31571__$1 = state_31571;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31591_33542 = state_31571__$1;
(statearr_31591_33542[(1)] = (8));

} else {
var statearr_31592_33543 = state_31571__$1;
(statearr_31592_33543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (14))){
var inst_31549 = (state_31571[(8)]);
var inst_31549__$1 = (state_31571[(2)]);
var inst_31550 = (inst_31549__$1 == null);
var inst_31551 = cljs.core.not(inst_31550);
var state_31571__$1 = (function (){var statearr_31597 = state_31571;
(statearr_31597[(8)] = inst_31549__$1);

return statearr_31597;
})();
if(inst_31551){
var statearr_31598_33544 = state_31571__$1;
(statearr_31598_33544[(1)] = (15));

} else {
var statearr_31599_33545 = state_31571__$1;
(statearr_31599_33545[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (16))){
var state_31571__$1 = state_31571;
var statearr_31600_33546 = state_31571__$1;
(statearr_31600_33546[(2)] = false);

(statearr_31600_33546[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (10))){
var inst_31543 = (state_31571[(2)]);
var state_31571__$1 = state_31571;
var statearr_31601_33548 = state_31571__$1;
(statearr_31601_33548[(2)] = inst_31543);

(statearr_31601_33548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (18))){
var inst_31554 = (state_31571[(2)]);
var state_31571__$1 = state_31571;
var statearr_31602_33549 = state_31571__$1;
(statearr_31602_33549[(2)] = inst_31554);

(statearr_31602_33549[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (8))){
var inst_31540 = cljs.core.async.close_BANG_(to);
var state_31571__$1 = state_31571;
var statearr_31603_33550 = state_31571__$1;
(statearr_31603_33550[(2)] = inst_31540);

(statearr_31603_33550[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__30867__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30867__auto____0 = (function (){
var statearr_31604 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31604[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30867__auto__);

(statearr_31604[(1)] = (1));

return statearr_31604;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30867__auto____1 = (function (state_31571){
while(true){
var ret_value__30868__auto__ = (function (){try{while(true){
var result__30869__auto__ = switch__30866__auto__(state_31571);
if(cljs.core.keyword_identical_QMARK_(result__30869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30869__auto__;
}
break;
}
}catch (e31605){var ex__30870__auto__ = e31605;
var statearr_31606_33551 = state_31571;
(statearr_31606_33551[(2)] = ex__30870__auto__);


if(cljs.core.seq((state_31571[(4)]))){
var statearr_31607_33552 = state_31571;
(statearr_31607_33552[(1)] = cljs.core.first((state_31571[(4)])));

} else {
throw ex__30870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33553 = state_31571;
state_31571 = G__33553;
continue;
} else {
return ret_value__30868__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30867__auto__ = function(state_31571){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30867__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30867__auto____1.call(this,state_31571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30867__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30867__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30867__auto__;
})()
})();
var state__31036__auto__ = (function (){var statearr_31613 = f__31035__auto__();
(statearr_31613[(6)] = c__31034__auto__);

return statearr_31613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31036__auto__);
}));

return c__31034__auto__;
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
var G__31616 = arguments.length;
switch (G__31616) {
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
var G__31618 = arguments.length;
switch (G__31618) {
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
var G__31622 = arguments.length;
switch (G__31622) {
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
var c__31034__auto___33560 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31035__auto__ = (function (){var switch__30866__auto__ = (function (state_31656){
var state_val_31657 = (state_31656[(1)]);
if((state_val_31657 === (7))){
var inst_31651 = (state_31656[(2)]);
var state_31656__$1 = state_31656;
var statearr_31660_33561 = state_31656__$1;
(statearr_31660_33561[(2)] = inst_31651);

(statearr_31660_33561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31657 === (1))){
var state_31656__$1 = state_31656;
var statearr_31662_33562 = state_31656__$1;
(statearr_31662_33562[(2)] = null);

(statearr_31662_33562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31657 === (4))){
var inst_31632 = (state_31656[(7)]);
var inst_31632__$1 = (state_31656[(2)]);
var inst_31633 = (inst_31632__$1 == null);
var state_31656__$1 = (function (){var statearr_31663 = state_31656;
(statearr_31663[(7)] = inst_31632__$1);

return statearr_31663;
})();
if(cljs.core.truth_(inst_31633)){
var statearr_31664_33563 = state_31656__$1;
(statearr_31664_33563[(1)] = (5));

} else {
var statearr_31665_33564 = state_31656__$1;
(statearr_31665_33564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31657 === (13))){
var state_31656__$1 = state_31656;
var statearr_31666_33565 = state_31656__$1;
(statearr_31666_33565[(2)] = null);

(statearr_31666_33565[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31657 === (6))){
var inst_31632 = (state_31656[(7)]);
var inst_31638 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31632) : p.call(null,inst_31632));
var state_31656__$1 = state_31656;
if(cljs.core.truth_(inst_31638)){
var statearr_31668_33566 = state_31656__$1;
(statearr_31668_33566[(1)] = (9));

} else {
var statearr_31669_33567 = state_31656__$1;
(statearr_31669_33567[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31657 === (3))){
var inst_31653 = (state_31656[(2)]);
var state_31656__$1 = state_31656;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31656__$1,inst_31653);
} else {
if((state_val_31657 === (12))){
var state_31656__$1 = state_31656;
var statearr_31674_33568 = state_31656__$1;
(statearr_31674_33568[(2)] = null);

(statearr_31674_33568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31657 === (2))){
var state_31656__$1 = state_31656;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31656__$1,(4),ch);
} else {
if((state_val_31657 === (11))){
var inst_31632 = (state_31656[(7)]);
var inst_31642 = (state_31656[(2)]);
var state_31656__$1 = state_31656;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31656__$1,(8),inst_31642,inst_31632);
} else {
if((state_val_31657 === (9))){
var state_31656__$1 = state_31656;
var statearr_31675_33569 = state_31656__$1;
(statearr_31675_33569[(2)] = tc);

(statearr_31675_33569[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31657 === (5))){
var inst_31635 = cljs.core.async.close_BANG_(tc);
var inst_31636 = cljs.core.async.close_BANG_(fc);
var state_31656__$1 = (function (){var statearr_31676 = state_31656;
(statearr_31676[(8)] = inst_31635);

return statearr_31676;
})();
var statearr_31677_33571 = state_31656__$1;
(statearr_31677_33571[(2)] = inst_31636);

(statearr_31677_33571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31657 === (14))){
var inst_31649 = (state_31656[(2)]);
var state_31656__$1 = state_31656;
var statearr_31678_33577 = state_31656__$1;
(statearr_31678_33577[(2)] = inst_31649);

(statearr_31678_33577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31657 === (10))){
var state_31656__$1 = state_31656;
var statearr_31679_33578 = state_31656__$1;
(statearr_31679_33578[(2)] = fc);

(statearr_31679_33578[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31657 === (8))){
var inst_31644 = (state_31656[(2)]);
var state_31656__$1 = state_31656;
if(cljs.core.truth_(inst_31644)){
var statearr_31680_33579 = state_31656__$1;
(statearr_31680_33579[(1)] = (12));

} else {
var statearr_31681_33580 = state_31656__$1;
(statearr_31681_33580[(1)] = (13));

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
var cljs$core$async$state_machine__30867__auto__ = null;
var cljs$core$async$state_machine__30867__auto____0 = (function (){
var statearr_31688 = [null,null,null,null,null,null,null,null,null];
(statearr_31688[(0)] = cljs$core$async$state_machine__30867__auto__);

(statearr_31688[(1)] = (1));

return statearr_31688;
});
var cljs$core$async$state_machine__30867__auto____1 = (function (state_31656){
while(true){
var ret_value__30868__auto__ = (function (){try{while(true){
var result__30869__auto__ = switch__30866__auto__(state_31656);
if(cljs.core.keyword_identical_QMARK_(result__30869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30869__auto__;
}
break;
}
}catch (e31689){var ex__30870__auto__ = e31689;
var statearr_31690_33582 = state_31656;
(statearr_31690_33582[(2)] = ex__30870__auto__);


if(cljs.core.seq((state_31656[(4)]))){
var statearr_31692_33583 = state_31656;
(statearr_31692_33583[(1)] = cljs.core.first((state_31656[(4)])));

} else {
throw ex__30870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33584 = state_31656;
state_31656 = G__33584;
continue;
} else {
return ret_value__30868__auto__;
}
break;
}
});
cljs$core$async$state_machine__30867__auto__ = function(state_31656){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30867__auto____1.call(this,state_31656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30867__auto____0;
cljs$core$async$state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30867__auto____1;
return cljs$core$async$state_machine__30867__auto__;
})()
})();
var state__31036__auto__ = (function (){var statearr_31694 = f__31035__auto__();
(statearr_31694[(6)] = c__31034__auto___33560);

return statearr_31694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31036__auto__);
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
var c__31034__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31035__auto__ = (function (){var switch__30866__auto__ = (function (state_31721){
var state_val_31722 = (state_31721[(1)]);
if((state_val_31722 === (7))){
var inst_31717 = (state_31721[(2)]);
var state_31721__$1 = state_31721;
var statearr_31723_33592 = state_31721__$1;
(statearr_31723_33592[(2)] = inst_31717);

(statearr_31723_33592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31722 === (1))){
var inst_31695 = init;
var inst_31696 = inst_31695;
var state_31721__$1 = (function (){var statearr_31724 = state_31721;
(statearr_31724[(7)] = inst_31696);

return statearr_31724;
})();
var statearr_31725_33593 = state_31721__$1;
(statearr_31725_33593[(2)] = null);

(statearr_31725_33593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31722 === (4))){
var inst_31699 = (state_31721[(8)]);
var inst_31699__$1 = (state_31721[(2)]);
var inst_31700 = (inst_31699__$1 == null);
var state_31721__$1 = (function (){var statearr_31726 = state_31721;
(statearr_31726[(8)] = inst_31699__$1);

return statearr_31726;
})();
if(cljs.core.truth_(inst_31700)){
var statearr_31727_33594 = state_31721__$1;
(statearr_31727_33594[(1)] = (5));

} else {
var statearr_31728_33595 = state_31721__$1;
(statearr_31728_33595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31722 === (6))){
var inst_31699 = (state_31721[(8)]);
var inst_31696 = (state_31721[(7)]);
var inst_31703 = (state_31721[(9)]);
var inst_31703__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31696,inst_31699) : f.call(null,inst_31696,inst_31699));
var inst_31704 = cljs.core.reduced_QMARK_(inst_31703__$1);
var state_31721__$1 = (function (){var statearr_31729 = state_31721;
(statearr_31729[(9)] = inst_31703__$1);

return statearr_31729;
})();
if(inst_31704){
var statearr_31730_33596 = state_31721__$1;
(statearr_31730_33596[(1)] = (8));

} else {
var statearr_31731_33597 = state_31721__$1;
(statearr_31731_33597[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31722 === (3))){
var inst_31719 = (state_31721[(2)]);
var state_31721__$1 = state_31721;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31721__$1,inst_31719);
} else {
if((state_val_31722 === (2))){
var state_31721__$1 = state_31721;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31721__$1,(4),ch);
} else {
if((state_val_31722 === (9))){
var inst_31703 = (state_31721[(9)]);
var inst_31696 = inst_31703;
var state_31721__$1 = (function (){var statearr_31759 = state_31721;
(statearr_31759[(7)] = inst_31696);

return statearr_31759;
})();
var statearr_31760_33612 = state_31721__$1;
(statearr_31760_33612[(2)] = null);

(statearr_31760_33612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31722 === (5))){
var inst_31696 = (state_31721[(7)]);
var state_31721__$1 = state_31721;
var statearr_31761_33613 = state_31721__$1;
(statearr_31761_33613[(2)] = inst_31696);

(statearr_31761_33613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31722 === (10))){
var inst_31715 = (state_31721[(2)]);
var state_31721__$1 = state_31721;
var statearr_31764_33614 = state_31721__$1;
(statearr_31764_33614[(2)] = inst_31715);

(statearr_31764_33614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31722 === (8))){
var inst_31703 = (state_31721[(9)]);
var inst_31711 = cljs.core.deref(inst_31703);
var state_31721__$1 = state_31721;
var statearr_31765_33615 = state_31721__$1;
(statearr_31765_33615[(2)] = inst_31711);

(statearr_31765_33615[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__30867__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30867__auto____0 = (function (){
var statearr_31770 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31770[(0)] = cljs$core$async$reduce_$_state_machine__30867__auto__);

(statearr_31770[(1)] = (1));

return statearr_31770;
});
var cljs$core$async$reduce_$_state_machine__30867__auto____1 = (function (state_31721){
while(true){
var ret_value__30868__auto__ = (function (){try{while(true){
var result__30869__auto__ = switch__30866__auto__(state_31721);
if(cljs.core.keyword_identical_QMARK_(result__30869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30869__auto__;
}
break;
}
}catch (e31773){var ex__30870__auto__ = e31773;
var statearr_31774_33616 = state_31721;
(statearr_31774_33616[(2)] = ex__30870__auto__);


if(cljs.core.seq((state_31721[(4)]))){
var statearr_31775_33617 = state_31721;
(statearr_31775_33617[(1)] = cljs.core.first((state_31721[(4)])));

} else {
throw ex__30870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33618 = state_31721;
state_31721 = G__33618;
continue;
} else {
return ret_value__30868__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30867__auto__ = function(state_31721){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30867__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30867__auto____1.call(this,state_31721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30867__auto____0;
cljs$core$async$reduce_$_state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30867__auto____1;
return cljs$core$async$reduce_$_state_machine__30867__auto__;
})()
})();
var state__31036__auto__ = (function (){var statearr_31779 = f__31035__auto__();
(statearr_31779[(6)] = c__31034__auto__);

return statearr_31779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31036__auto__);
}));

return c__31034__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__31034__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31035__auto__ = (function (){var switch__30866__auto__ = (function (state_31791){
var state_val_31792 = (state_31791[(1)]);
if((state_val_31792 === (1))){
var inst_31786 = cljs.core.async.reduce(f__$1,init,ch);
var state_31791__$1 = state_31791;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31791__$1,(2),inst_31786);
} else {
if((state_val_31792 === (2))){
var inst_31788 = (state_31791[(2)]);
var inst_31789 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31788) : f__$1.call(null,inst_31788));
var state_31791__$1 = state_31791;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31791__$1,inst_31789);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30867__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30867__auto____0 = (function (){
var statearr_31806 = [null,null,null,null,null,null,null];
(statearr_31806[(0)] = cljs$core$async$transduce_$_state_machine__30867__auto__);

(statearr_31806[(1)] = (1));

return statearr_31806;
});
var cljs$core$async$transduce_$_state_machine__30867__auto____1 = (function (state_31791){
while(true){
var ret_value__30868__auto__ = (function (){try{while(true){
var result__30869__auto__ = switch__30866__auto__(state_31791);
if(cljs.core.keyword_identical_QMARK_(result__30869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30869__auto__;
}
break;
}
}catch (e31809){var ex__30870__auto__ = e31809;
var statearr_31810_33621 = state_31791;
(statearr_31810_33621[(2)] = ex__30870__auto__);


if(cljs.core.seq((state_31791[(4)]))){
var statearr_31811_33622 = state_31791;
(statearr_31811_33622[(1)] = cljs.core.first((state_31791[(4)])));

} else {
throw ex__30870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33623 = state_31791;
state_31791 = G__33623;
continue;
} else {
return ret_value__30868__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30867__auto__ = function(state_31791){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30867__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30867__auto____1.call(this,state_31791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30867__auto____0;
cljs$core$async$transduce_$_state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30867__auto____1;
return cljs$core$async$transduce_$_state_machine__30867__auto__;
})()
})();
var state__31036__auto__ = (function (){var statearr_31835 = f__31035__auto__();
(statearr_31835[(6)] = c__31034__auto__);

return statearr_31835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31036__auto__);
}));

return c__31034__auto__;
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
var G__31840 = arguments.length;
switch (G__31840) {
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
var c__31034__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31035__auto__ = (function (){var switch__30866__auto__ = (function (state_31869){
var state_val_31870 = (state_31869[(1)]);
if((state_val_31870 === (7))){
var inst_31851 = (state_31869[(2)]);
var state_31869__$1 = state_31869;
var statearr_31878_33629 = state_31869__$1;
(statearr_31878_33629[(2)] = inst_31851);

(statearr_31878_33629[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31870 === (1))){
var inst_31842 = cljs.core.seq(coll);
var inst_31844 = inst_31842;
var state_31869__$1 = (function (){var statearr_31881 = state_31869;
(statearr_31881[(7)] = inst_31844);

return statearr_31881;
})();
var statearr_31883_33630 = state_31869__$1;
(statearr_31883_33630[(2)] = null);

(statearr_31883_33630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31870 === (4))){
var inst_31844 = (state_31869[(7)]);
var inst_31849 = cljs.core.first(inst_31844);
var state_31869__$1 = state_31869;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31869__$1,(7),ch,inst_31849);
} else {
if((state_val_31870 === (13))){
var inst_31863 = (state_31869[(2)]);
var state_31869__$1 = state_31869;
var statearr_31888_33631 = state_31869__$1;
(statearr_31888_33631[(2)] = inst_31863);

(statearr_31888_33631[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31870 === (6))){
var inst_31854 = (state_31869[(2)]);
var state_31869__$1 = state_31869;
if(cljs.core.truth_(inst_31854)){
var statearr_31892_33632 = state_31869__$1;
(statearr_31892_33632[(1)] = (8));

} else {
var statearr_31894_33633 = state_31869__$1;
(statearr_31894_33633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31870 === (3))){
var inst_31867 = (state_31869[(2)]);
var state_31869__$1 = state_31869;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31869__$1,inst_31867);
} else {
if((state_val_31870 === (12))){
var state_31869__$1 = state_31869;
var statearr_31899_33634 = state_31869__$1;
(statearr_31899_33634[(2)] = null);

(statearr_31899_33634[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31870 === (2))){
var inst_31844 = (state_31869[(7)]);
var state_31869__$1 = state_31869;
if(cljs.core.truth_(inst_31844)){
var statearr_31907_33635 = state_31869__$1;
(statearr_31907_33635[(1)] = (4));

} else {
var statearr_31912_33641 = state_31869__$1;
(statearr_31912_33641[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31870 === (11))){
var inst_31860 = cljs.core.async.close_BANG_(ch);
var state_31869__$1 = state_31869;
var statearr_31913_33642 = state_31869__$1;
(statearr_31913_33642[(2)] = inst_31860);

(statearr_31913_33642[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31870 === (9))){
var state_31869__$1 = state_31869;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31914_33644 = state_31869__$1;
(statearr_31914_33644[(1)] = (11));

} else {
var statearr_31915_33645 = state_31869__$1;
(statearr_31915_33645[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31870 === (5))){
var inst_31844 = (state_31869[(7)]);
var state_31869__$1 = state_31869;
var statearr_31919_33646 = state_31869__$1;
(statearr_31919_33646[(2)] = inst_31844);

(statearr_31919_33646[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31870 === (10))){
var inst_31865 = (state_31869[(2)]);
var state_31869__$1 = state_31869;
var statearr_31920_33647 = state_31869__$1;
(statearr_31920_33647[(2)] = inst_31865);

(statearr_31920_33647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31870 === (8))){
var inst_31844 = (state_31869[(7)]);
var inst_31856 = cljs.core.next(inst_31844);
var inst_31844__$1 = inst_31856;
var state_31869__$1 = (function (){var statearr_31937 = state_31869;
(statearr_31937[(7)] = inst_31844__$1);

return statearr_31937;
})();
var statearr_31938_33652 = state_31869__$1;
(statearr_31938_33652[(2)] = null);

(statearr_31938_33652[(1)] = (2));


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
var cljs$core$async$state_machine__30867__auto__ = null;
var cljs$core$async$state_machine__30867__auto____0 = (function (){
var statearr_31939 = [null,null,null,null,null,null,null,null];
(statearr_31939[(0)] = cljs$core$async$state_machine__30867__auto__);

(statearr_31939[(1)] = (1));

return statearr_31939;
});
var cljs$core$async$state_machine__30867__auto____1 = (function (state_31869){
while(true){
var ret_value__30868__auto__ = (function (){try{while(true){
var result__30869__auto__ = switch__30866__auto__(state_31869);
if(cljs.core.keyword_identical_QMARK_(result__30869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30869__auto__;
}
break;
}
}catch (e31940){var ex__30870__auto__ = e31940;
var statearr_31941_33653 = state_31869;
(statearr_31941_33653[(2)] = ex__30870__auto__);


if(cljs.core.seq((state_31869[(4)]))){
var statearr_31942_33654 = state_31869;
(statearr_31942_33654[(1)] = cljs.core.first((state_31869[(4)])));

} else {
throw ex__30870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33655 = state_31869;
state_31869 = G__33655;
continue;
} else {
return ret_value__30868__auto__;
}
break;
}
});
cljs$core$async$state_machine__30867__auto__ = function(state_31869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30867__auto____1.call(this,state_31869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30867__auto____0;
cljs$core$async$state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30867__auto____1;
return cljs$core$async$state_machine__30867__auto__;
})()
})();
var state__31036__auto__ = (function (){var statearr_31943 = f__31035__auto__();
(statearr_31943[(6)] = c__31034__auto__);

return statearr_31943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31036__auto__);
}));

return c__31034__auto__;
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
var G__31965 = arguments.length;
switch (G__31965) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_33657 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_33657(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33658 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_33658(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33659 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_33659(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33660 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_33660(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32004 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32004 = (function (ch,cs,meta32005){
this.ch = ch;
this.cs = cs;
this.meta32005 = meta32005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32006,meta32005__$1){
var self__ = this;
var _32006__$1 = this;
return (new cljs.core.async.t_cljs$core$async32004(self__.ch,self__.cs,meta32005__$1));
}));

(cljs.core.async.t_cljs$core$async32004.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32006){
var self__ = this;
var _32006__$1 = this;
return self__.meta32005;
}));

(cljs.core.async.t_cljs$core$async32004.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32004.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32004.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32004.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32004.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32004.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32004.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32005","meta32005",469036161,null)], null);
}));

(cljs.core.async.t_cljs$core$async32004.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32004.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32004");

(cljs.core.async.t_cljs$core$async32004.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32004");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32004.
 */
cljs.core.async.__GT_t_cljs$core$async32004 = (function cljs$core$async$mult_$___GT_t_cljs$core$async32004(ch__$1,cs__$1,meta32005){
return (new cljs.core.async.t_cljs$core$async32004(ch__$1,cs__$1,meta32005));
});

}

return (new cljs.core.async.t_cljs$core$async32004(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__31034__auto___33661 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31035__auto__ = (function (){var switch__30866__auto__ = (function (state_32197){
var state_val_32198 = (state_32197[(1)]);
if((state_val_32198 === (7))){
var inst_32193 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
var statearr_32200_33662 = state_32197__$1;
(statearr_32200_33662[(2)] = inst_32193);

(statearr_32200_33662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (20))){
var inst_32081 = (state_32197[(7)]);
var inst_32093 = cljs.core.first(inst_32081);
var inst_32094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32093,(0),null);
var inst_32095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32093,(1),null);
var state_32197__$1 = (function (){var statearr_32201 = state_32197;
(statearr_32201[(8)] = inst_32094);

return statearr_32201;
})();
if(cljs.core.truth_(inst_32095)){
var statearr_32202_33666 = state_32197__$1;
(statearr_32202_33666[(1)] = (22));

} else {
var statearr_32203_33667 = state_32197__$1;
(statearr_32203_33667[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (27))){
var inst_32050 = (state_32197[(9)]);
var inst_32135 = (state_32197[(10)]);
var inst_32130 = (state_32197[(11)]);
var inst_32128 = (state_32197[(12)]);
var inst_32135__$1 = cljs.core._nth(inst_32128,inst_32130);
var inst_32140 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32135__$1,inst_32050,done);
var state_32197__$1 = (function (){var statearr_32212 = state_32197;
(statearr_32212[(10)] = inst_32135__$1);

return statearr_32212;
})();
if(cljs.core.truth_(inst_32140)){
var statearr_32213_33668 = state_32197__$1;
(statearr_32213_33668[(1)] = (30));

} else {
var statearr_32214_33669 = state_32197__$1;
(statearr_32214_33669[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (1))){
var state_32197__$1 = state_32197;
var statearr_32215_33670 = state_32197__$1;
(statearr_32215_33670[(2)] = null);

(statearr_32215_33670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (24))){
var inst_32081 = (state_32197[(7)]);
var inst_32100 = (state_32197[(2)]);
var inst_32101 = cljs.core.next(inst_32081);
var inst_32059 = inst_32101;
var inst_32060 = null;
var inst_32061 = (0);
var inst_32062 = (0);
var state_32197__$1 = (function (){var statearr_32217 = state_32197;
(statearr_32217[(13)] = inst_32061);

(statearr_32217[(14)] = inst_32100);

(statearr_32217[(15)] = inst_32059);

(statearr_32217[(16)] = inst_32062);

(statearr_32217[(17)] = inst_32060);

return statearr_32217;
})();
var statearr_32218_33671 = state_32197__$1;
(statearr_32218_33671[(2)] = null);

(statearr_32218_33671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (39))){
var state_32197__$1 = state_32197;
var statearr_32222_33672 = state_32197__$1;
(statearr_32222_33672[(2)] = null);

(statearr_32222_33672[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (4))){
var inst_32050 = (state_32197[(9)]);
var inst_32050__$1 = (state_32197[(2)]);
var inst_32051 = (inst_32050__$1 == null);
var state_32197__$1 = (function (){var statearr_32223 = state_32197;
(statearr_32223[(9)] = inst_32050__$1);

return statearr_32223;
})();
if(cljs.core.truth_(inst_32051)){
var statearr_32224_33673 = state_32197__$1;
(statearr_32224_33673[(1)] = (5));

} else {
var statearr_32225_33674 = state_32197__$1;
(statearr_32225_33674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (15))){
var inst_32061 = (state_32197[(13)]);
var inst_32059 = (state_32197[(15)]);
var inst_32062 = (state_32197[(16)]);
var inst_32060 = (state_32197[(17)]);
var inst_32077 = (state_32197[(2)]);
var inst_32078 = (inst_32062 + (1));
var tmp32219 = inst_32061;
var tmp32220 = inst_32059;
var tmp32221 = inst_32060;
var inst_32059__$1 = tmp32220;
var inst_32060__$1 = tmp32221;
var inst_32061__$1 = tmp32219;
var inst_32062__$1 = inst_32078;
var state_32197__$1 = (function (){var statearr_32226 = state_32197;
(statearr_32226[(13)] = inst_32061__$1);

(statearr_32226[(15)] = inst_32059__$1);

(statearr_32226[(16)] = inst_32062__$1);

(statearr_32226[(17)] = inst_32060__$1);

(statearr_32226[(18)] = inst_32077);

return statearr_32226;
})();
var statearr_32227_33675 = state_32197__$1;
(statearr_32227_33675[(2)] = null);

(statearr_32227_33675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (21))){
var inst_32104 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
var statearr_32231_33676 = state_32197__$1;
(statearr_32231_33676[(2)] = inst_32104);

(statearr_32231_33676[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (31))){
var inst_32135 = (state_32197[(10)]);
var inst_32143 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32135);
var state_32197__$1 = state_32197;
var statearr_32233_33677 = state_32197__$1;
(statearr_32233_33677[(2)] = inst_32143);

(statearr_32233_33677[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (32))){
var inst_32127 = (state_32197[(19)]);
var inst_32130 = (state_32197[(11)]);
var inst_32129 = (state_32197[(20)]);
var inst_32128 = (state_32197[(12)]);
var inst_32145 = (state_32197[(2)]);
var inst_32152 = (inst_32130 + (1));
var tmp32228 = inst_32127;
var tmp32229 = inst_32129;
var tmp32230 = inst_32128;
var inst_32127__$1 = tmp32228;
var inst_32128__$1 = tmp32230;
var inst_32129__$1 = tmp32229;
var inst_32130__$1 = inst_32152;
var state_32197__$1 = (function (){var statearr_32235 = state_32197;
(statearr_32235[(19)] = inst_32127__$1);

(statearr_32235[(11)] = inst_32130__$1);

(statearr_32235[(20)] = inst_32129__$1);

(statearr_32235[(21)] = inst_32145);

(statearr_32235[(12)] = inst_32128__$1);

return statearr_32235;
})();
var statearr_32236_33679 = state_32197__$1;
(statearr_32236_33679[(2)] = null);

(statearr_32236_33679[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (40))){
var inst_32166 = (state_32197[(22)]);
var inst_32170 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32166);
var state_32197__$1 = state_32197;
var statearr_32238_33680 = state_32197__$1;
(statearr_32238_33680[(2)] = inst_32170);

(statearr_32238_33680[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (33))){
var inst_32157 = (state_32197[(23)]);
var inst_32159 = cljs.core.chunked_seq_QMARK_(inst_32157);
var state_32197__$1 = state_32197;
if(inst_32159){
var statearr_32239_33681 = state_32197__$1;
(statearr_32239_33681[(1)] = (36));

} else {
var statearr_32240_33682 = state_32197__$1;
(statearr_32240_33682[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (13))){
var inst_32071 = (state_32197[(24)]);
var inst_32074 = cljs.core.async.close_BANG_(inst_32071);
var state_32197__$1 = state_32197;
var statearr_32252_33683 = state_32197__$1;
(statearr_32252_33683[(2)] = inst_32074);

(statearr_32252_33683[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (22))){
var inst_32094 = (state_32197[(8)]);
var inst_32097 = cljs.core.async.close_BANG_(inst_32094);
var state_32197__$1 = state_32197;
var statearr_32257_33684 = state_32197__$1;
(statearr_32257_33684[(2)] = inst_32097);

(statearr_32257_33684[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (36))){
var inst_32157 = (state_32197[(23)]);
var inst_32161 = cljs.core.chunk_first(inst_32157);
var inst_32162 = cljs.core.chunk_rest(inst_32157);
var inst_32163 = cljs.core.count(inst_32161);
var inst_32127 = inst_32162;
var inst_32128 = inst_32161;
var inst_32129 = inst_32163;
var inst_32130 = (0);
var state_32197__$1 = (function (){var statearr_32262 = state_32197;
(statearr_32262[(19)] = inst_32127);

(statearr_32262[(11)] = inst_32130);

(statearr_32262[(20)] = inst_32129);

(statearr_32262[(12)] = inst_32128);

return statearr_32262;
})();
var statearr_32263_33690 = state_32197__$1;
(statearr_32263_33690[(2)] = null);

(statearr_32263_33690[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (41))){
var inst_32157 = (state_32197[(23)]);
var inst_32172 = (state_32197[(2)]);
var inst_32173 = cljs.core.next(inst_32157);
var inst_32127 = inst_32173;
var inst_32128 = null;
var inst_32129 = (0);
var inst_32130 = (0);
var state_32197__$1 = (function (){var statearr_32264 = state_32197;
(statearr_32264[(19)] = inst_32127);

(statearr_32264[(11)] = inst_32130);

(statearr_32264[(20)] = inst_32129);

(statearr_32264[(12)] = inst_32128);

(statearr_32264[(25)] = inst_32172);

return statearr_32264;
})();
var statearr_32265_33691 = state_32197__$1;
(statearr_32265_33691[(2)] = null);

(statearr_32265_33691[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (43))){
var state_32197__$1 = state_32197;
var statearr_32266_33692 = state_32197__$1;
(statearr_32266_33692[(2)] = null);

(statearr_32266_33692[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (29))){
var inst_32181 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
var statearr_32267_33693 = state_32197__$1;
(statearr_32267_33693[(2)] = inst_32181);

(statearr_32267_33693[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (44))){
var inst_32190 = (state_32197[(2)]);
var state_32197__$1 = (function (){var statearr_32273 = state_32197;
(statearr_32273[(26)] = inst_32190);

return statearr_32273;
})();
var statearr_32274_33699 = state_32197__$1;
(statearr_32274_33699[(2)] = null);

(statearr_32274_33699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (6))){
var inst_32116 = (state_32197[(27)]);
var inst_32115 = cljs.core.deref(cs);
var inst_32116__$1 = cljs.core.keys(inst_32115);
var inst_32117 = cljs.core.count(inst_32116__$1);
var inst_32118 = cljs.core.reset_BANG_(dctr,inst_32117);
var inst_32126 = cljs.core.seq(inst_32116__$1);
var inst_32127 = inst_32126;
var inst_32128 = null;
var inst_32129 = (0);
var inst_32130 = (0);
var state_32197__$1 = (function (){var statearr_32275 = state_32197;
(statearr_32275[(19)] = inst_32127);

(statearr_32275[(11)] = inst_32130);

(statearr_32275[(20)] = inst_32129);

(statearr_32275[(12)] = inst_32128);

(statearr_32275[(27)] = inst_32116__$1);

(statearr_32275[(28)] = inst_32118);

return statearr_32275;
})();
var statearr_32276_33700 = state_32197__$1;
(statearr_32276_33700[(2)] = null);

(statearr_32276_33700[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (28))){
var inst_32127 = (state_32197[(19)]);
var inst_32157 = (state_32197[(23)]);
var inst_32157__$1 = cljs.core.seq(inst_32127);
var state_32197__$1 = (function (){var statearr_32278 = state_32197;
(statearr_32278[(23)] = inst_32157__$1);

return statearr_32278;
})();
if(inst_32157__$1){
var statearr_32279_33701 = state_32197__$1;
(statearr_32279_33701[(1)] = (33));

} else {
var statearr_32280_33702 = state_32197__$1;
(statearr_32280_33702[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (25))){
var inst_32130 = (state_32197[(11)]);
var inst_32129 = (state_32197[(20)]);
var inst_32132 = (inst_32130 < inst_32129);
var inst_32133 = inst_32132;
var state_32197__$1 = state_32197;
if(cljs.core.truth_(inst_32133)){
var statearr_32281_33703 = state_32197__$1;
(statearr_32281_33703[(1)] = (27));

} else {
var statearr_32282_33704 = state_32197__$1;
(statearr_32282_33704[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (34))){
var state_32197__$1 = state_32197;
var statearr_32283_33705 = state_32197__$1;
(statearr_32283_33705[(2)] = null);

(statearr_32283_33705[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (17))){
var state_32197__$1 = state_32197;
var statearr_32287_33706 = state_32197__$1;
(statearr_32287_33706[(2)] = null);

(statearr_32287_33706[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (3))){
var inst_32195 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32197__$1,inst_32195);
} else {
if((state_val_32198 === (12))){
var inst_32110 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
var statearr_32295_33707 = state_32197__$1;
(statearr_32295_33707[(2)] = inst_32110);

(statearr_32295_33707[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (2))){
var state_32197__$1 = state_32197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32197__$1,(4),ch);
} else {
if((state_val_32198 === (23))){
var state_32197__$1 = state_32197;
var statearr_32296_33708 = state_32197__$1;
(statearr_32296_33708[(2)] = null);

(statearr_32296_33708[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (35))){
var inst_32179 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
var statearr_32297_33709 = state_32197__$1;
(statearr_32297_33709[(2)] = inst_32179);

(statearr_32297_33709[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (19))){
var inst_32081 = (state_32197[(7)]);
var inst_32085 = cljs.core.chunk_first(inst_32081);
var inst_32086 = cljs.core.chunk_rest(inst_32081);
var inst_32087 = cljs.core.count(inst_32085);
var inst_32059 = inst_32086;
var inst_32060 = inst_32085;
var inst_32061 = inst_32087;
var inst_32062 = (0);
var state_32197__$1 = (function (){var statearr_32298 = state_32197;
(statearr_32298[(13)] = inst_32061);

(statearr_32298[(15)] = inst_32059);

(statearr_32298[(16)] = inst_32062);

(statearr_32298[(17)] = inst_32060);

return statearr_32298;
})();
var statearr_32299_33712 = state_32197__$1;
(statearr_32299_33712[(2)] = null);

(statearr_32299_33712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (11))){
var inst_32081 = (state_32197[(7)]);
var inst_32059 = (state_32197[(15)]);
var inst_32081__$1 = cljs.core.seq(inst_32059);
var state_32197__$1 = (function (){var statearr_32305 = state_32197;
(statearr_32305[(7)] = inst_32081__$1);

return statearr_32305;
})();
if(inst_32081__$1){
var statearr_32308_33715 = state_32197__$1;
(statearr_32308_33715[(1)] = (16));

} else {
var statearr_32313_33717 = state_32197__$1;
(statearr_32313_33717[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (9))){
var inst_32112 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
var statearr_32317_33719 = state_32197__$1;
(statearr_32317_33719[(2)] = inst_32112);

(statearr_32317_33719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (5))){
var inst_32057 = cljs.core.deref(cs);
var inst_32058 = cljs.core.seq(inst_32057);
var inst_32059 = inst_32058;
var inst_32060 = null;
var inst_32061 = (0);
var inst_32062 = (0);
var state_32197__$1 = (function (){var statearr_32326 = state_32197;
(statearr_32326[(13)] = inst_32061);

(statearr_32326[(15)] = inst_32059);

(statearr_32326[(16)] = inst_32062);

(statearr_32326[(17)] = inst_32060);

return statearr_32326;
})();
var statearr_32345_33725 = state_32197__$1;
(statearr_32345_33725[(2)] = null);

(statearr_32345_33725[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (14))){
var state_32197__$1 = state_32197;
var statearr_32346_33726 = state_32197__$1;
(statearr_32346_33726[(2)] = null);

(statearr_32346_33726[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (45))){
var inst_32187 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
var statearr_32347_33727 = state_32197__$1;
(statearr_32347_33727[(2)] = inst_32187);

(statearr_32347_33727[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (26))){
var inst_32116 = (state_32197[(27)]);
var inst_32183 = (state_32197[(2)]);
var inst_32184 = cljs.core.seq(inst_32116);
var state_32197__$1 = (function (){var statearr_32348 = state_32197;
(statearr_32348[(29)] = inst_32183);

return statearr_32348;
})();
if(inst_32184){
var statearr_32349_33742 = state_32197__$1;
(statearr_32349_33742[(1)] = (42));

} else {
var statearr_32350_33743 = state_32197__$1;
(statearr_32350_33743[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (16))){
var inst_32081 = (state_32197[(7)]);
var inst_32083 = cljs.core.chunked_seq_QMARK_(inst_32081);
var state_32197__$1 = state_32197;
if(inst_32083){
var statearr_32351_33744 = state_32197__$1;
(statearr_32351_33744[(1)] = (19));

} else {
var statearr_32352_33745 = state_32197__$1;
(statearr_32352_33745[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (38))){
var inst_32176 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
var statearr_32353_33746 = state_32197__$1;
(statearr_32353_33746[(2)] = inst_32176);

(statearr_32353_33746[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (30))){
var state_32197__$1 = state_32197;
var statearr_32354_33747 = state_32197__$1;
(statearr_32354_33747[(2)] = null);

(statearr_32354_33747[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (10))){
var inst_32062 = (state_32197[(16)]);
var inst_32060 = (state_32197[(17)]);
var inst_32070 = cljs.core._nth(inst_32060,inst_32062);
var inst_32071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32070,(0),null);
var inst_32072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32070,(1),null);
var state_32197__$1 = (function (){var statearr_32359 = state_32197;
(statearr_32359[(24)] = inst_32071);

return statearr_32359;
})();
if(cljs.core.truth_(inst_32072)){
var statearr_32360_33748 = state_32197__$1;
(statearr_32360_33748[(1)] = (13));

} else {
var statearr_32361_33749 = state_32197__$1;
(statearr_32361_33749[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (18))){
var inst_32108 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
var statearr_32362_33750 = state_32197__$1;
(statearr_32362_33750[(2)] = inst_32108);

(statearr_32362_33750[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (42))){
var state_32197__$1 = state_32197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32197__$1,(45),dchan);
} else {
if((state_val_32198 === (37))){
var inst_32050 = (state_32197[(9)]);
var inst_32157 = (state_32197[(23)]);
var inst_32166 = (state_32197[(22)]);
var inst_32166__$1 = cljs.core.first(inst_32157);
var inst_32167 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32166__$1,inst_32050,done);
var state_32197__$1 = (function (){var statearr_32363 = state_32197;
(statearr_32363[(22)] = inst_32166__$1);

return statearr_32363;
})();
if(cljs.core.truth_(inst_32167)){
var statearr_32364_33751 = state_32197__$1;
(statearr_32364_33751[(1)] = (39));

} else {
var statearr_32365_33752 = state_32197__$1;
(statearr_32365_33752[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (8))){
var inst_32061 = (state_32197[(13)]);
var inst_32062 = (state_32197[(16)]);
var inst_32064 = (inst_32062 < inst_32061);
var inst_32065 = inst_32064;
var state_32197__$1 = state_32197;
if(cljs.core.truth_(inst_32065)){
var statearr_32366_33753 = state_32197__$1;
(statearr_32366_33753[(1)] = (10));

} else {
var statearr_32367_33754 = state_32197__$1;
(statearr_32367_33754[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__30867__auto__ = null;
var cljs$core$async$mult_$_state_machine__30867__auto____0 = (function (){
var statearr_32368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32368[(0)] = cljs$core$async$mult_$_state_machine__30867__auto__);

(statearr_32368[(1)] = (1));

return statearr_32368;
});
var cljs$core$async$mult_$_state_machine__30867__auto____1 = (function (state_32197){
while(true){
var ret_value__30868__auto__ = (function (){try{while(true){
var result__30869__auto__ = switch__30866__auto__(state_32197);
if(cljs.core.keyword_identical_QMARK_(result__30869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30869__auto__;
}
break;
}
}catch (e32369){var ex__30870__auto__ = e32369;
var statearr_32370_33755 = state_32197;
(statearr_32370_33755[(2)] = ex__30870__auto__);


if(cljs.core.seq((state_32197[(4)]))){
var statearr_32375_33756 = state_32197;
(statearr_32375_33756[(1)] = cljs.core.first((state_32197[(4)])));

} else {
throw ex__30870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33757 = state_32197;
state_32197 = G__33757;
continue;
} else {
return ret_value__30868__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30867__auto__ = function(state_32197){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30867__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30867__auto____1.call(this,state_32197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30867__auto____0;
cljs$core$async$mult_$_state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30867__auto____1;
return cljs$core$async$mult_$_state_machine__30867__auto__;
})()
})();
var state__31036__auto__ = (function (){var statearr_32379 = f__31035__auto__();
(statearr_32379[(6)] = c__31034__auto___33661);

return statearr_32379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31036__auto__);
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
var G__32383 = arguments.length;
switch (G__32383) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_33760 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_33760(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33761 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_33761(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33773 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33773(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33774 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_33774(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33775 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33775(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33776 = arguments.length;
var i__4737__auto___33777 = (0);
while(true){
if((i__4737__auto___33777 < len__4736__auto___33776)){
args__4742__auto__.push((arguments[i__4737__auto___33777]));

var G__33778 = (i__4737__auto___33777 + (1));
i__4737__auto___33777 = G__33778;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32399){
var map__32400 = p__32399;
var map__32400__$1 = (((((!((map__32400 == null))))?(((((map__32400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32400):map__32400);
var opts = map__32400__$1;
var statearr_32402_33781 = state;
(statearr_32402_33781[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32403_33782 = state;
(statearr_32403_33782[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_32405_33783 = state;
(statearr_32405_33783[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32394){
var G__32395 = cljs.core.first(seq32394);
var seq32394__$1 = cljs.core.next(seq32394);
var G__32396 = cljs.core.first(seq32394__$1);
var seq32394__$2 = cljs.core.next(seq32394__$1);
var G__32397 = cljs.core.first(seq32394__$2);
var seq32394__$3 = cljs.core.next(seq32394__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32395,G__32396,G__32397,seq32394__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32409 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32409 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32410){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32410 = meta32410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32411,meta32410__$1){
var self__ = this;
var _32411__$1 = this;
return (new cljs.core.async.t_cljs$core$async32409(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32410__$1));
}));

(cljs.core.async.t_cljs$core$async32409.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32411){
var self__ = this;
var _32411__$1 = this;
return self__.meta32410;
}));

(cljs.core.async.t_cljs$core$async32409.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32409.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32409.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32409.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32409.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32409.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32409.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32409.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32409.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32410","meta32410",-1734245409,null)], null);
}));

(cljs.core.async.t_cljs$core$async32409.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32409.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32409");

(cljs.core.async.t_cljs$core$async32409.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32409");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32409.
 */
cljs.core.async.__GT_t_cljs$core$async32409 = (function cljs$core$async$mix_$___GT_t_cljs$core$async32409(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32410){
return (new cljs.core.async.t_cljs$core$async32409(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32410));
});

}

return (new cljs.core.async.t_cljs$core$async32409(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31034__auto___33803 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31035__auto__ = (function (){var switch__30866__auto__ = (function (state_32521){
var state_val_32522 = (state_32521[(1)]);
if((state_val_32522 === (7))){
var inst_32434 = (state_32521[(2)]);
var state_32521__$1 = state_32521;
var statearr_32523_33808 = state_32521__$1;
(statearr_32523_33808[(2)] = inst_32434);

(statearr_32523_33808[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32522 === (20))){
var inst_32446 = (state_32521[(7)]);
var state_32521__$1 = state_32521;
var statearr_32524_33809 = state_32521__$1;
(statearr_32524_33809[(2)] = inst_32446);

(statearr_32524_33809[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32522 === (27))){
var state_32521__$1 = state_32521;
var statearr_32525_33810 = state_32521__$1;
(statearr_32525_33810[(2)] = null);

(statearr_32525_33810[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32522 === (1))){
var inst_32421 = (state_32521[(8)]);
var inst_32421__$1 = calc_state();
var inst_32423 = (inst_32421__$1 == null);
var inst_32424 = cljs.core.not(inst_32423);
var state_32521__$1 = (function (){var statearr_32526 = state_32521;
(statearr_32526[(8)] = inst_32421__$1);

return statearr_32526;
})();
if(inst_32424){
var statearr_32527_33814 = state_32521__$1;
(statearr_32527_33814[(1)] = (2));

} else {
var statearr_32528_33815 = state_32521__$1;
(statearr_32528_33815[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32522 === (24))){
var inst_32479 = (state_32521[(9)]);
var inst_32493 = (state_32521[(10)]);
var inst_32470 = (state_32521[(11)]);
var inst_32493__$1 = (inst_32470.cljs$core$IFn$_invoke$arity$1 ? inst_32470.cljs$core$IFn$_invoke$arity$1(inst_32479) : inst_32470.call(null,inst_32479));
var state_32521__$1 = (function (){var statearr_32529 = state_32521;
(statearr_32529[(10)] = inst_32493__$1);

return statearr_32529;
})();
if(cljs.core.truth_(inst_32493__$1)){
var statearr_32530_33825 = state_32521__$1;
(statearr_32530_33825[(1)] = (29));

} else {
var statearr_32531_33826 = state_32521__$1;
(statearr_32531_33826[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32522 === (4))){
var inst_32437 = (state_32521[(2)]);
var state_32521__$1 = state_32521;
if(cljs.core.truth_(inst_32437)){
var statearr_32532_33827 = state_32521__$1;
(statearr_32532_33827[(1)] = (8));

} else {
var statearr_32533_33828 = state_32521__$1;
(statearr_32533_33828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32522 === (15))){
var inst_32464 = (state_32521[(2)]);
var state_32521__$1 = state_32521;
if(cljs.core.truth_(inst_32464)){
var statearr_32534_33829 = state_32521__$1;
(statearr_32534_33829[(1)] = (19));

} else {
var statearr_32535_33830 = state_32521__$1;
(statearr_32535_33830[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32522 === (21))){
var inst_32469 = (state_32521[(12)]);
var inst_32469__$1 = (state_32521[(2)]);
var inst_32470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32469__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32469__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32472 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32469__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32521__$1 = (function (){var statearr_32536 = state_32521;
(statearr_32536[(13)] = inst_32471);

(statearr_32536[(11)] = inst_32470);

(statearr_32536[(12)] = inst_32469__$1);

return statearr_32536;
})();
return cljs.core.async.ioc_alts_BANG_(state_32521__$1,(22),inst_32472);
} else {
if((state_val_32522 === (31))){
var inst_32503 = (state_32521[(2)]);
var state_32521__$1 = state_32521;
if(cljs.core.truth_(inst_32503)){
var statearr_32537_33833 = state_32521__$1;
(statearr_32537_33833[(1)] = (32));

} else {
var statearr_32538_33837 = state_32521__$1;
(statearr_32538_33837[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32522 === (32))){
var inst_32478 = (state_32521[(14)]);
var state_32521__$1 = state_32521;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32521__$1,(35),out,inst_32478);
} else {
if((state_val_32522 === (33))){
var inst_32469 = (state_32521[(12)]);
var inst_32446 = inst_32469;
var state_32521__$1 = (function (){var statearr_32539 = state_32521;
(statearr_32539[(7)] = inst_32446);

return statearr_32539;
})();
var statearr_32540_33839 = state_32521__$1;
(statearr_32540_33839[(2)] = null);

(statearr_32540_33839[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32522 === (13))){
var inst_32446 = (state_32521[(7)]);
var inst_32453 = inst_32446.cljs$lang$protocol_mask$partition0$;
var inst_32454 = (inst_32453 & (64));
var inst_32455 = inst_32446.cljs$core$ISeq$;
var inst_32456 = (cljs.core.PROTOCOL_SENTINEL === inst_32455);
var inst_32457 = ((inst_32454) || (inst_32456));
var state_32521__$1 = state_32521;
if(cljs.core.truth_(inst_32457)){
var statearr_32541_33845 = state_32521__$1;
(statearr_32541_33845[(1)] = (16));

} else {
var statearr_32542_33846 = state_32521__$1;
(statearr_32542_33846[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32522 === (22))){
var inst_32478 = (state_32521[(14)]);
var inst_32479 = (state_32521[(9)]);
var inst_32477 = (state_32521[(2)]);
var inst_32478__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32477,(0),null);
var inst_32479__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32477,(1),null);
var inst_32480 = (inst_32478__$1 == null);
var inst_32481 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32479__$1,change);
var inst_32482 = ((inst_32480) || (inst_32481));
var state_32521__$1 = (function (){var statearr_32543 = state_32521;
(statearr_32543[(14)] = inst_32478__$1);

(statearr_32543[(9)] = inst_32479__$1);

return statearr_32543;
})();
if(cljs.core.truth_(inst_32482)){
var statearr_32544_33850 = state_32521__$1;
(statearr_32544_33850[(1)] = (23));

} else {
var statearr_32545_33851 = state_32521__$1;
(statearr_32545_33851[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32522 === (36))){
var inst_32469 = (state_32521[(12)]);
var inst_32446 = inst_32469;
var state_32521__$1 = (function (){var statearr_32546 = state_32521;
(statearr_32546[(7)] = inst_32446);

return statearr_32546;
})();
var statearr_32547_33852 = state_32521__$1;
(statearr_32547_33852[(2)] = null);

(statearr_32547_33852[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32522 === (29))){
var inst_32493 = (state_32521[(10)]);
var state_32521__$1 = state_32521;
var statearr_32548_33853 = state_32521__$1;
(statearr_32548_33853[(2)] = inst_32493);

(statearr_32548_33853[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32522 === (6))){
var state_32521__$1 = state_32521;
var statearr_32549_33854 = state_32521__$1;
(statearr_32549_33854[(2)] = false);

(statearr_32549_33854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32522 === (28))){
var inst_32489 = (state_32521[(2)]);
var inst_32490 = calc_state();
var inst_32446 = inst_32490;
var state_32521__$1 = (function (){var statearr_32550 = state_32521;
(statearr_32550[(7)] = inst_32446);

(statearr_32550[(15)] = inst_32489);

return statearr_32550;
})();
var statearr_32551_33855 = state_32521__$1;
(statearr_32551_33855[(2)] = null);

(statearr_32551_33855[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32522 === (25))){
var inst_32517 = (state_32521[(2)]);
var state_32521__$1 = state_32521;
var statearr_32552_33856 = state_32521__$1;
(statearr_32552_33856[(2)] = inst_32517);

(statearr_32552_33856[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32522 === (34))){
var inst_32515 = (state_32521[(2)]);
var state_32521__$1 = state_32521;
var statearr_32553_33859 = state_32521__$1;
(statearr_32553_33859[(2)] = inst_32515);

(statearr_32553_33859[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32522 === (17))){
var state_32521__$1 = state_32521;
var statearr_32554_33860 = state_32521__$1;
(statearr_32554_33860[(2)] = false);

(statearr_32554_33860[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32522 === (3))){
var state_32521__$1 = state_32521;
var statearr_32555_33861 = state_32521__$1;
(statearr_32555_33861[(2)] = false);

(statearr_32555_33861[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32522 === (12))){
var inst_32519 = (state_32521[(2)]);
var state_32521__$1 = state_32521;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32521__$1,inst_32519);
} else {
if((state_val_32522 === (2))){
var inst_32421 = (state_32521[(8)]);
var inst_32426 = inst_32421.cljs$lang$protocol_mask$partition0$;
var inst_32427 = (inst_32426 & (64));
var inst_32428 = inst_32421.cljs$core$ISeq$;
var inst_32429 = (cljs.core.PROTOCOL_SENTINEL === inst_32428);
var inst_32430 = ((inst_32427) || (inst_32429));
var state_32521__$1 = state_32521;
if(cljs.core.truth_(inst_32430)){
var statearr_32556_33878 = state_32521__$1;
(statearr_32556_33878[(1)] = (5));

} else {
var statearr_32557_33879 = state_32521__$1;
(statearr_32557_33879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32522 === (23))){
var inst_32478 = (state_32521[(14)]);
var inst_32484 = (inst_32478 == null);
var state_32521__$1 = state_32521;
if(cljs.core.truth_(inst_32484)){
var statearr_32558_33880 = state_32521__$1;
(statearr_32558_33880[(1)] = (26));

} else {
var statearr_32559_33881 = state_32521__$1;
(statearr_32559_33881[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32522 === (35))){
var inst_32506 = (state_32521[(2)]);
var state_32521__$1 = state_32521;
if(cljs.core.truth_(inst_32506)){
var statearr_32560_33882 = state_32521__$1;
(statearr_32560_33882[(1)] = (36));

} else {
var statearr_32561_33883 = state_32521__$1;
(statearr_32561_33883[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32522 === (19))){
var inst_32446 = (state_32521[(7)]);
var inst_32466 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32446);
var state_32521__$1 = state_32521;
var statearr_32562_33884 = state_32521__$1;
(statearr_32562_33884[(2)] = inst_32466);

(statearr_32562_33884[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32522 === (11))){
var inst_32446 = (state_32521[(7)]);
var inst_32450 = (inst_32446 == null);
var inst_32451 = cljs.core.not(inst_32450);
var state_32521__$1 = state_32521;
if(inst_32451){
var statearr_32563_33885 = state_32521__$1;
(statearr_32563_33885[(1)] = (13));

} else {
var statearr_32564_33886 = state_32521__$1;
(statearr_32564_33886[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32522 === (9))){
var inst_32421 = (state_32521[(8)]);
var state_32521__$1 = state_32521;
var statearr_32565_33893 = state_32521__$1;
(statearr_32565_33893[(2)] = inst_32421);

(statearr_32565_33893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32522 === (5))){
var state_32521__$1 = state_32521;
var statearr_32566_33894 = state_32521__$1;
(statearr_32566_33894[(2)] = true);

(statearr_32566_33894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32522 === (14))){
var state_32521__$1 = state_32521;
var statearr_32567_33895 = state_32521__$1;
(statearr_32567_33895[(2)] = false);

(statearr_32567_33895[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32522 === (26))){
var inst_32479 = (state_32521[(9)]);
var inst_32486 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32479);
var state_32521__$1 = state_32521;
var statearr_32568_33897 = state_32521__$1;
(statearr_32568_33897[(2)] = inst_32486);

(statearr_32568_33897[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32522 === (16))){
var state_32521__$1 = state_32521;
var statearr_32569_33898 = state_32521__$1;
(statearr_32569_33898[(2)] = true);

(statearr_32569_33898[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32522 === (38))){
var inst_32511 = (state_32521[(2)]);
var state_32521__$1 = state_32521;
var statearr_32570_33899 = state_32521__$1;
(statearr_32570_33899[(2)] = inst_32511);

(statearr_32570_33899[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32522 === (30))){
var inst_32479 = (state_32521[(9)]);
var inst_32471 = (state_32521[(13)]);
var inst_32470 = (state_32521[(11)]);
var inst_32496 = cljs.core.empty_QMARK_(inst_32470);
var inst_32499 = (inst_32471.cljs$core$IFn$_invoke$arity$1 ? inst_32471.cljs$core$IFn$_invoke$arity$1(inst_32479) : inst_32471.call(null,inst_32479));
var inst_32500 = cljs.core.not(inst_32499);
var inst_32501 = ((inst_32496) && (inst_32500));
var state_32521__$1 = state_32521;
var statearr_32571_33900 = state_32521__$1;
(statearr_32571_33900[(2)] = inst_32501);

(statearr_32571_33900[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32522 === (10))){
var inst_32421 = (state_32521[(8)]);
var inst_32442 = (state_32521[(2)]);
var inst_32443 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32442,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32442,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32442,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32446 = inst_32421;
var state_32521__$1 = (function (){var statearr_32572 = state_32521;
(statearr_32572[(16)] = inst_32444);

(statearr_32572[(7)] = inst_32446);

(statearr_32572[(17)] = inst_32443);

(statearr_32572[(18)] = inst_32445);

return statearr_32572;
})();
var statearr_32573_33901 = state_32521__$1;
(statearr_32573_33901[(2)] = null);

(statearr_32573_33901[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32522 === (18))){
var inst_32461 = (state_32521[(2)]);
var state_32521__$1 = state_32521;
var statearr_32574_33908 = state_32521__$1;
(statearr_32574_33908[(2)] = inst_32461);

(statearr_32574_33908[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32522 === (37))){
var state_32521__$1 = state_32521;
var statearr_32575_33909 = state_32521__$1;
(statearr_32575_33909[(2)] = null);

(statearr_32575_33909[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32522 === (8))){
var inst_32421 = (state_32521[(8)]);
var inst_32439 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32421);
var state_32521__$1 = state_32521;
var statearr_32576_33910 = state_32521__$1;
(statearr_32576_33910[(2)] = inst_32439);

(statearr_32576_33910[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__30867__auto__ = null;
var cljs$core$async$mix_$_state_machine__30867__auto____0 = (function (){
var statearr_32577 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32577[(0)] = cljs$core$async$mix_$_state_machine__30867__auto__);

(statearr_32577[(1)] = (1));

return statearr_32577;
});
var cljs$core$async$mix_$_state_machine__30867__auto____1 = (function (state_32521){
while(true){
var ret_value__30868__auto__ = (function (){try{while(true){
var result__30869__auto__ = switch__30866__auto__(state_32521);
if(cljs.core.keyword_identical_QMARK_(result__30869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30869__auto__;
}
break;
}
}catch (e32578){var ex__30870__auto__ = e32578;
var statearr_32579_33945 = state_32521;
(statearr_32579_33945[(2)] = ex__30870__auto__);


if(cljs.core.seq((state_32521[(4)]))){
var statearr_32580_33946 = state_32521;
(statearr_32580_33946[(1)] = cljs.core.first((state_32521[(4)])));

} else {
throw ex__30870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33947 = state_32521;
state_32521 = G__33947;
continue;
} else {
return ret_value__30868__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30867__auto__ = function(state_32521){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30867__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30867__auto____1.call(this,state_32521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30867__auto____0;
cljs$core$async$mix_$_state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30867__auto____1;
return cljs$core$async$mix_$_state_machine__30867__auto__;
})()
})();
var state__31036__auto__ = (function (){var statearr_32581 = f__31035__auto__();
(statearr_32581[(6)] = c__31034__auto___33803);

return statearr_32581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31036__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_33948 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_33948(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33960 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_33960(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33968 = (function() {
var G__33969 = null;
var G__33969__1 = (function (p){
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
var G__33969__2 = (function (p,v){
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
G__33969 = function(p,v){
switch(arguments.length){
case 1:
return G__33969__1.call(this,p);
case 2:
return G__33969__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33969.cljs$core$IFn$_invoke$arity$1 = G__33969__1;
G__33969.cljs$core$IFn$_invoke$arity$2 = G__33969__2;
return G__33969;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32583 = arguments.length;
switch (G__32583) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33968(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33968(p,v);
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
var G__32586 = arguments.length;
switch (G__32586) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32584_SHARP_){
if(cljs.core.truth_((p1__32584_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32584_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32584_SHARP_.call(null,topic)))){
return p1__32584_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32584_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32587 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32587 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32588){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32588 = meta32588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32589,meta32588__$1){
var self__ = this;
var _32589__$1 = this;
return (new cljs.core.async.t_cljs$core$async32587(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32588__$1));
}));

(cljs.core.async.t_cljs$core$async32587.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32589){
var self__ = this;
var _32589__$1 = this;
return self__.meta32588;
}));

(cljs.core.async.t_cljs$core$async32587.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32587.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32587.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32587.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32587.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async32587.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32587.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32587.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32588","meta32588",-1751436326,null)], null);
}));

(cljs.core.async.t_cljs$core$async32587.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32587.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32587");

(cljs.core.async.t_cljs$core$async32587.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32587");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32587.
 */
cljs.core.async.__GT_t_cljs$core$async32587 = (function cljs$core$async$__GT_t_cljs$core$async32587(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32588){
return (new cljs.core.async.t_cljs$core$async32587(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32588));
});

}

return (new cljs.core.async.t_cljs$core$async32587(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31034__auto___33978 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31035__auto__ = (function (){var switch__30866__auto__ = (function (state_32661){
var state_val_32662 = (state_32661[(1)]);
if((state_val_32662 === (7))){
var inst_32657 = (state_32661[(2)]);
var state_32661__$1 = state_32661;
var statearr_32663_33979 = state_32661__$1;
(statearr_32663_33979[(2)] = inst_32657);

(statearr_32663_33979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (20))){
var state_32661__$1 = state_32661;
var statearr_32664_33980 = state_32661__$1;
(statearr_32664_33980[(2)] = null);

(statearr_32664_33980[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (1))){
var state_32661__$1 = state_32661;
var statearr_32665_33981 = state_32661__$1;
(statearr_32665_33981[(2)] = null);

(statearr_32665_33981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (24))){
var inst_32640 = (state_32661[(7)]);
var inst_32649 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32640);
var state_32661__$1 = state_32661;
var statearr_32666_33982 = state_32661__$1;
(statearr_32666_33982[(2)] = inst_32649);

(statearr_32666_33982[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (4))){
var inst_32592 = (state_32661[(8)]);
var inst_32592__$1 = (state_32661[(2)]);
var inst_32593 = (inst_32592__$1 == null);
var state_32661__$1 = (function (){var statearr_32667 = state_32661;
(statearr_32667[(8)] = inst_32592__$1);

return statearr_32667;
})();
if(cljs.core.truth_(inst_32593)){
var statearr_32668_33984 = state_32661__$1;
(statearr_32668_33984[(1)] = (5));

} else {
var statearr_32669_33990 = state_32661__$1;
(statearr_32669_33990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (15))){
var inst_32634 = (state_32661[(2)]);
var state_32661__$1 = state_32661;
var statearr_32670_33991 = state_32661__$1;
(statearr_32670_33991[(2)] = inst_32634);

(statearr_32670_33991[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (21))){
var inst_32654 = (state_32661[(2)]);
var state_32661__$1 = (function (){var statearr_32671 = state_32661;
(statearr_32671[(9)] = inst_32654);

return statearr_32671;
})();
var statearr_32672_33992 = state_32661__$1;
(statearr_32672_33992[(2)] = null);

(statearr_32672_33992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (13))){
var inst_32616 = (state_32661[(10)]);
var inst_32618 = cljs.core.chunked_seq_QMARK_(inst_32616);
var state_32661__$1 = state_32661;
if(inst_32618){
var statearr_32673_33993 = state_32661__$1;
(statearr_32673_33993[(1)] = (16));

} else {
var statearr_32674_33994 = state_32661__$1;
(statearr_32674_33994[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (22))){
var inst_32646 = (state_32661[(2)]);
var state_32661__$1 = state_32661;
if(cljs.core.truth_(inst_32646)){
var statearr_32675_33995 = state_32661__$1;
(statearr_32675_33995[(1)] = (23));

} else {
var statearr_32676_33996 = state_32661__$1;
(statearr_32676_33996[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (6))){
var inst_32642 = (state_32661[(11)]);
var inst_32592 = (state_32661[(8)]);
var inst_32640 = (state_32661[(7)]);
var inst_32640__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32592) : topic_fn.call(null,inst_32592));
var inst_32641 = cljs.core.deref(mults);
var inst_32642__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32641,inst_32640__$1);
var state_32661__$1 = (function (){var statearr_32677 = state_32661;
(statearr_32677[(11)] = inst_32642__$1);

(statearr_32677[(7)] = inst_32640__$1);

return statearr_32677;
})();
if(cljs.core.truth_(inst_32642__$1)){
var statearr_32678_33998 = state_32661__$1;
(statearr_32678_33998[(1)] = (19));

} else {
var statearr_32679_33999 = state_32661__$1;
(statearr_32679_33999[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (25))){
var inst_32651 = (state_32661[(2)]);
var state_32661__$1 = state_32661;
var statearr_32680_34000 = state_32661__$1;
(statearr_32680_34000[(2)] = inst_32651);

(statearr_32680_34000[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (17))){
var inst_32616 = (state_32661[(10)]);
var inst_32625 = cljs.core.first(inst_32616);
var inst_32626 = cljs.core.async.muxch_STAR_(inst_32625);
var inst_32627 = cljs.core.async.close_BANG_(inst_32626);
var inst_32628 = cljs.core.next(inst_32616);
var inst_32602 = inst_32628;
var inst_32603 = null;
var inst_32604 = (0);
var inst_32605 = (0);
var state_32661__$1 = (function (){var statearr_32681 = state_32661;
(statearr_32681[(12)] = inst_32604);

(statearr_32681[(13)] = inst_32627);

(statearr_32681[(14)] = inst_32603);

(statearr_32681[(15)] = inst_32602);

(statearr_32681[(16)] = inst_32605);

return statearr_32681;
})();
var statearr_32682_34002 = state_32661__$1;
(statearr_32682_34002[(2)] = null);

(statearr_32682_34002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (3))){
var inst_32659 = (state_32661[(2)]);
var state_32661__$1 = state_32661;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32661__$1,inst_32659);
} else {
if((state_val_32662 === (12))){
var inst_32636 = (state_32661[(2)]);
var state_32661__$1 = state_32661;
var statearr_32683_34006 = state_32661__$1;
(statearr_32683_34006[(2)] = inst_32636);

(statearr_32683_34006[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (2))){
var state_32661__$1 = state_32661;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32661__$1,(4),ch);
} else {
if((state_val_32662 === (23))){
var state_32661__$1 = state_32661;
var statearr_32684_34007 = state_32661__$1;
(statearr_32684_34007[(2)] = null);

(statearr_32684_34007[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (19))){
var inst_32642 = (state_32661[(11)]);
var inst_32592 = (state_32661[(8)]);
var inst_32644 = cljs.core.async.muxch_STAR_(inst_32642);
var state_32661__$1 = state_32661;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32661__$1,(22),inst_32644,inst_32592);
} else {
if((state_val_32662 === (11))){
var inst_32616 = (state_32661[(10)]);
var inst_32602 = (state_32661[(15)]);
var inst_32616__$1 = cljs.core.seq(inst_32602);
var state_32661__$1 = (function (){var statearr_32685 = state_32661;
(statearr_32685[(10)] = inst_32616__$1);

return statearr_32685;
})();
if(inst_32616__$1){
var statearr_32686_34009 = state_32661__$1;
(statearr_32686_34009[(1)] = (13));

} else {
var statearr_32687_34010 = state_32661__$1;
(statearr_32687_34010[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (9))){
var inst_32638 = (state_32661[(2)]);
var state_32661__$1 = state_32661;
var statearr_32688_34011 = state_32661__$1;
(statearr_32688_34011[(2)] = inst_32638);

(statearr_32688_34011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (5))){
var inst_32599 = cljs.core.deref(mults);
var inst_32600 = cljs.core.vals(inst_32599);
var inst_32601 = cljs.core.seq(inst_32600);
var inst_32602 = inst_32601;
var inst_32603 = null;
var inst_32604 = (0);
var inst_32605 = (0);
var state_32661__$1 = (function (){var statearr_32689 = state_32661;
(statearr_32689[(12)] = inst_32604);

(statearr_32689[(14)] = inst_32603);

(statearr_32689[(15)] = inst_32602);

(statearr_32689[(16)] = inst_32605);

return statearr_32689;
})();
var statearr_32690_34012 = state_32661__$1;
(statearr_32690_34012[(2)] = null);

(statearr_32690_34012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (14))){
var state_32661__$1 = state_32661;
var statearr_32694_34013 = state_32661__$1;
(statearr_32694_34013[(2)] = null);

(statearr_32694_34013[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (16))){
var inst_32616 = (state_32661[(10)]);
var inst_32620 = cljs.core.chunk_first(inst_32616);
var inst_32621 = cljs.core.chunk_rest(inst_32616);
var inst_32622 = cljs.core.count(inst_32620);
var inst_32602 = inst_32621;
var inst_32603 = inst_32620;
var inst_32604 = inst_32622;
var inst_32605 = (0);
var state_32661__$1 = (function (){var statearr_32695 = state_32661;
(statearr_32695[(12)] = inst_32604);

(statearr_32695[(14)] = inst_32603);

(statearr_32695[(15)] = inst_32602);

(statearr_32695[(16)] = inst_32605);

return statearr_32695;
})();
var statearr_32696_34014 = state_32661__$1;
(statearr_32696_34014[(2)] = null);

(statearr_32696_34014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (10))){
var inst_32604 = (state_32661[(12)]);
var inst_32603 = (state_32661[(14)]);
var inst_32602 = (state_32661[(15)]);
var inst_32605 = (state_32661[(16)]);
var inst_32610 = cljs.core._nth(inst_32603,inst_32605);
var inst_32611 = cljs.core.async.muxch_STAR_(inst_32610);
var inst_32612 = cljs.core.async.close_BANG_(inst_32611);
var inst_32613 = (inst_32605 + (1));
var tmp32691 = inst_32604;
var tmp32692 = inst_32603;
var tmp32693 = inst_32602;
var inst_32602__$1 = tmp32693;
var inst_32603__$1 = tmp32692;
var inst_32604__$1 = tmp32691;
var inst_32605__$1 = inst_32613;
var state_32661__$1 = (function (){var statearr_32697 = state_32661;
(statearr_32697[(12)] = inst_32604__$1);

(statearr_32697[(14)] = inst_32603__$1);

(statearr_32697[(15)] = inst_32602__$1);

(statearr_32697[(16)] = inst_32605__$1);

(statearr_32697[(17)] = inst_32612);

return statearr_32697;
})();
var statearr_32699_34017 = state_32661__$1;
(statearr_32699_34017[(2)] = null);

(statearr_32699_34017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (18))){
var inst_32631 = (state_32661[(2)]);
var state_32661__$1 = state_32661;
var statearr_32700_34018 = state_32661__$1;
(statearr_32700_34018[(2)] = inst_32631);

(statearr_32700_34018[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (8))){
var inst_32604 = (state_32661[(12)]);
var inst_32605 = (state_32661[(16)]);
var inst_32607 = (inst_32605 < inst_32604);
var inst_32608 = inst_32607;
var state_32661__$1 = state_32661;
if(cljs.core.truth_(inst_32608)){
var statearr_32701_34019 = state_32661__$1;
(statearr_32701_34019[(1)] = (10));

} else {
var statearr_32702_34020 = state_32661__$1;
(statearr_32702_34020[(1)] = (11));

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
var cljs$core$async$state_machine__30867__auto__ = null;
var cljs$core$async$state_machine__30867__auto____0 = (function (){
var statearr_32703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32703[(0)] = cljs$core$async$state_machine__30867__auto__);

(statearr_32703[(1)] = (1));

return statearr_32703;
});
var cljs$core$async$state_machine__30867__auto____1 = (function (state_32661){
while(true){
var ret_value__30868__auto__ = (function (){try{while(true){
var result__30869__auto__ = switch__30866__auto__(state_32661);
if(cljs.core.keyword_identical_QMARK_(result__30869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30869__auto__;
}
break;
}
}catch (e32704){var ex__30870__auto__ = e32704;
var statearr_32705_34021 = state_32661;
(statearr_32705_34021[(2)] = ex__30870__auto__);


if(cljs.core.seq((state_32661[(4)]))){
var statearr_32706_34022 = state_32661;
(statearr_32706_34022[(1)] = cljs.core.first((state_32661[(4)])));

} else {
throw ex__30870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34023 = state_32661;
state_32661 = G__34023;
continue;
} else {
return ret_value__30868__auto__;
}
break;
}
});
cljs$core$async$state_machine__30867__auto__ = function(state_32661){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30867__auto____1.call(this,state_32661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30867__auto____0;
cljs$core$async$state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30867__auto____1;
return cljs$core$async$state_machine__30867__auto__;
})()
})();
var state__31036__auto__ = (function (){var statearr_32707 = f__31035__auto__();
(statearr_32707[(6)] = c__31034__auto___33978);

return statearr_32707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31036__auto__);
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
var G__32709 = arguments.length;
switch (G__32709) {
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
var G__32712 = arguments.length;
switch (G__32712) {
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
var G__32716 = arguments.length;
switch (G__32716) {
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
var c__31034__auto___34029 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31035__auto__ = (function (){var switch__30866__auto__ = (function (state_32779){
var state_val_32780 = (state_32779[(1)]);
if((state_val_32780 === (7))){
var state_32779__$1 = state_32779;
var statearr_32781_34030 = state_32779__$1;
(statearr_32781_34030[(2)] = null);

(statearr_32781_34030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32780 === (1))){
var state_32779__$1 = state_32779;
var statearr_32782_34070 = state_32779__$1;
(statearr_32782_34070[(2)] = null);

(statearr_32782_34070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32780 === (4))){
var inst_32724 = (state_32779[(7)]);
var inst_32723 = (state_32779[(8)]);
var inst_32726 = (inst_32724 < inst_32723);
var state_32779__$1 = state_32779;
if(cljs.core.truth_(inst_32726)){
var statearr_32783_34075 = state_32779__$1;
(statearr_32783_34075[(1)] = (6));

} else {
var statearr_32784_34076 = state_32779__$1;
(statearr_32784_34076[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32780 === (15))){
var inst_32760 = (state_32779[(9)]);
var inst_32765 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32760);
var state_32779__$1 = state_32779;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32779__$1,(17),out,inst_32765);
} else {
if((state_val_32780 === (13))){
var inst_32760 = (state_32779[(9)]);
var inst_32760__$1 = (state_32779[(2)]);
var inst_32761 = cljs.core.some(cljs.core.nil_QMARK_,inst_32760__$1);
var state_32779__$1 = (function (){var statearr_32788 = state_32779;
(statearr_32788[(9)] = inst_32760__$1);

return statearr_32788;
})();
if(cljs.core.truth_(inst_32761)){
var statearr_32789_34080 = state_32779__$1;
(statearr_32789_34080[(1)] = (14));

} else {
var statearr_32790_34081 = state_32779__$1;
(statearr_32790_34081[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32780 === (6))){
var state_32779__$1 = state_32779;
var statearr_32791_34082 = state_32779__$1;
(statearr_32791_34082[(2)] = null);

(statearr_32791_34082[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32780 === (17))){
var inst_32767 = (state_32779[(2)]);
var state_32779__$1 = (function (){var statearr_32793 = state_32779;
(statearr_32793[(10)] = inst_32767);

return statearr_32793;
})();
var statearr_32794_34084 = state_32779__$1;
(statearr_32794_34084[(2)] = null);

(statearr_32794_34084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32780 === (3))){
var inst_32772 = (state_32779[(2)]);
var state_32779__$1 = state_32779;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32779__$1,inst_32772);
} else {
if((state_val_32780 === (12))){
var _ = (function (){var statearr_32795 = state_32779;
(statearr_32795[(4)] = cljs.core.rest((state_32779[(4)])));

return statearr_32795;
})();
var state_32779__$1 = state_32779;
var ex32792 = (state_32779__$1[(2)]);
var statearr_32797_34085 = state_32779__$1;
(statearr_32797_34085[(5)] = ex32792);


if((ex32792 instanceof Object)){
var statearr_32798_34086 = state_32779__$1;
(statearr_32798_34086[(1)] = (11));

(statearr_32798_34086[(5)] = null);

} else {
throw ex32792;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32780 === (2))){
var inst_32722 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32723 = cnt;
var inst_32724 = (0);
var state_32779__$1 = (function (){var statearr_32799 = state_32779;
(statearr_32799[(11)] = inst_32722);

(statearr_32799[(7)] = inst_32724);

(statearr_32799[(8)] = inst_32723);

return statearr_32799;
})();
var statearr_32800_34087 = state_32779__$1;
(statearr_32800_34087[(2)] = null);

(statearr_32800_34087[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32780 === (11))){
var inst_32728 = (state_32779[(2)]);
var inst_32740 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32779__$1 = (function (){var statearr_32801 = state_32779;
(statearr_32801[(12)] = inst_32728);

return statearr_32801;
})();
var statearr_32802_34088 = state_32779__$1;
(statearr_32802_34088[(2)] = inst_32740);

(statearr_32802_34088[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32780 === (9))){
var inst_32724 = (state_32779[(7)]);
var _ = (function (){var statearr_32803 = state_32779;
(statearr_32803[(4)] = cljs.core.cons((12),(state_32779[(4)])));

return statearr_32803;
})();
var inst_32746 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32724) : chs__$1.call(null,inst_32724));
var inst_32747 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32724) : done.call(null,inst_32724));
var inst_32748 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32746,inst_32747);
var ___$1 = (function (){var statearr_32804 = state_32779;
(statearr_32804[(4)] = cljs.core.rest((state_32779[(4)])));

return statearr_32804;
})();
var state_32779__$1 = state_32779;
var statearr_32805_34089 = state_32779__$1;
(statearr_32805_34089[(2)] = inst_32748);

(statearr_32805_34089[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32780 === (5))){
var inst_32758 = (state_32779[(2)]);
var state_32779__$1 = (function (){var statearr_32806 = state_32779;
(statearr_32806[(13)] = inst_32758);

return statearr_32806;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32779__$1,(13),dchan);
} else {
if((state_val_32780 === (14))){
var inst_32763 = cljs.core.async.close_BANG_(out);
var state_32779__$1 = state_32779;
var statearr_32807_34090 = state_32779__$1;
(statearr_32807_34090[(2)] = inst_32763);

(statearr_32807_34090[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32780 === (16))){
var inst_32770 = (state_32779[(2)]);
var state_32779__$1 = state_32779;
var statearr_32808_34091 = state_32779__$1;
(statearr_32808_34091[(2)] = inst_32770);

(statearr_32808_34091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32780 === (10))){
var inst_32724 = (state_32779[(7)]);
var inst_32751 = (state_32779[(2)]);
var inst_32752 = (inst_32724 + (1));
var inst_32724__$1 = inst_32752;
var state_32779__$1 = (function (){var statearr_32809 = state_32779;
(statearr_32809[(14)] = inst_32751);

(statearr_32809[(7)] = inst_32724__$1);

return statearr_32809;
})();
var statearr_32810_34092 = state_32779__$1;
(statearr_32810_34092[(2)] = null);

(statearr_32810_34092[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32780 === (8))){
var inst_32756 = (state_32779[(2)]);
var state_32779__$1 = state_32779;
var statearr_32811_34093 = state_32779__$1;
(statearr_32811_34093[(2)] = inst_32756);

(statearr_32811_34093[(1)] = (5));


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
var cljs$core$async$state_machine__30867__auto__ = null;
var cljs$core$async$state_machine__30867__auto____0 = (function (){
var statearr_32812 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32812[(0)] = cljs$core$async$state_machine__30867__auto__);

(statearr_32812[(1)] = (1));

return statearr_32812;
});
var cljs$core$async$state_machine__30867__auto____1 = (function (state_32779){
while(true){
var ret_value__30868__auto__ = (function (){try{while(true){
var result__30869__auto__ = switch__30866__auto__(state_32779);
if(cljs.core.keyword_identical_QMARK_(result__30869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30869__auto__;
}
break;
}
}catch (e32813){var ex__30870__auto__ = e32813;
var statearr_32814_34094 = state_32779;
(statearr_32814_34094[(2)] = ex__30870__auto__);


if(cljs.core.seq((state_32779[(4)]))){
var statearr_32815_34095 = state_32779;
(statearr_32815_34095[(1)] = cljs.core.first((state_32779[(4)])));

} else {
throw ex__30870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34103 = state_32779;
state_32779 = G__34103;
continue;
} else {
return ret_value__30868__auto__;
}
break;
}
});
cljs$core$async$state_machine__30867__auto__ = function(state_32779){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30867__auto____1.call(this,state_32779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30867__auto____0;
cljs$core$async$state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30867__auto____1;
return cljs$core$async$state_machine__30867__auto__;
})()
})();
var state__31036__auto__ = (function (){var statearr_32816 = f__31035__auto__();
(statearr_32816[(6)] = c__31034__auto___34029);

return statearr_32816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31036__auto__);
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
var G__32819 = arguments.length;
switch (G__32819) {
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
var c__31034__auto___34107 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31035__auto__ = (function (){var switch__30866__auto__ = (function (state_32851){
var state_val_32852 = (state_32851[(1)]);
if((state_val_32852 === (7))){
var inst_32831 = (state_32851[(7)]);
var inst_32830 = (state_32851[(8)]);
var inst_32830__$1 = (state_32851[(2)]);
var inst_32831__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32830__$1,(0),null);
var inst_32832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32830__$1,(1),null);
var inst_32833 = (inst_32831__$1 == null);
var state_32851__$1 = (function (){var statearr_32853 = state_32851;
(statearr_32853[(7)] = inst_32831__$1);

(statearr_32853[(9)] = inst_32832);

(statearr_32853[(8)] = inst_32830__$1);

return statearr_32853;
})();
if(cljs.core.truth_(inst_32833)){
var statearr_32854_34108 = state_32851__$1;
(statearr_32854_34108[(1)] = (8));

} else {
var statearr_32855_34109 = state_32851__$1;
(statearr_32855_34109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32852 === (1))){
var inst_32820 = cljs.core.vec(chs);
var inst_32821 = inst_32820;
var state_32851__$1 = (function (){var statearr_32856 = state_32851;
(statearr_32856[(10)] = inst_32821);

return statearr_32856;
})();
var statearr_32857_34110 = state_32851__$1;
(statearr_32857_34110[(2)] = null);

(statearr_32857_34110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32852 === (4))){
var inst_32821 = (state_32851[(10)]);
var state_32851__$1 = state_32851;
return cljs.core.async.ioc_alts_BANG_(state_32851__$1,(7),inst_32821);
} else {
if((state_val_32852 === (6))){
var inst_32847 = (state_32851[(2)]);
var state_32851__$1 = state_32851;
var statearr_32858_34111 = state_32851__$1;
(statearr_32858_34111[(2)] = inst_32847);

(statearr_32858_34111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32852 === (3))){
var inst_32849 = (state_32851[(2)]);
var state_32851__$1 = state_32851;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32851__$1,inst_32849);
} else {
if((state_val_32852 === (2))){
var inst_32821 = (state_32851[(10)]);
var inst_32823 = cljs.core.count(inst_32821);
var inst_32824 = (inst_32823 > (0));
var state_32851__$1 = state_32851;
if(cljs.core.truth_(inst_32824)){
var statearr_32860_34112 = state_32851__$1;
(statearr_32860_34112[(1)] = (4));

} else {
var statearr_32861_34114 = state_32851__$1;
(statearr_32861_34114[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32852 === (11))){
var inst_32821 = (state_32851[(10)]);
var inst_32840 = (state_32851[(2)]);
var tmp32859 = inst_32821;
var inst_32821__$1 = tmp32859;
var state_32851__$1 = (function (){var statearr_32862 = state_32851;
(statearr_32862[(10)] = inst_32821__$1);

(statearr_32862[(11)] = inst_32840);

return statearr_32862;
})();
var statearr_32863_34115 = state_32851__$1;
(statearr_32863_34115[(2)] = null);

(statearr_32863_34115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32852 === (9))){
var inst_32831 = (state_32851[(7)]);
var state_32851__$1 = state_32851;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32851__$1,(11),out,inst_32831);
} else {
if((state_val_32852 === (5))){
var inst_32845 = cljs.core.async.close_BANG_(out);
var state_32851__$1 = state_32851;
var statearr_32864_34116 = state_32851__$1;
(statearr_32864_34116[(2)] = inst_32845);

(statearr_32864_34116[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32852 === (10))){
var inst_32843 = (state_32851[(2)]);
var state_32851__$1 = state_32851;
var statearr_32865_34117 = state_32851__$1;
(statearr_32865_34117[(2)] = inst_32843);

(statearr_32865_34117[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32852 === (8))){
var inst_32821 = (state_32851[(10)]);
var inst_32831 = (state_32851[(7)]);
var inst_32832 = (state_32851[(9)]);
var inst_32830 = (state_32851[(8)]);
var inst_32835 = (function (){var cs = inst_32821;
var vec__32826 = inst_32830;
var v = inst_32831;
var c = inst_32832;
return (function (p1__32817_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32817_SHARP_);
});
})();
var inst_32836 = cljs.core.filterv(inst_32835,inst_32821);
var inst_32821__$1 = inst_32836;
var state_32851__$1 = (function (){var statearr_32866 = state_32851;
(statearr_32866[(10)] = inst_32821__$1);

return statearr_32866;
})();
var statearr_32867_34118 = state_32851__$1;
(statearr_32867_34118[(2)] = null);

(statearr_32867_34118[(1)] = (2));


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
var cljs$core$async$state_machine__30867__auto__ = null;
var cljs$core$async$state_machine__30867__auto____0 = (function (){
var statearr_32868 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32868[(0)] = cljs$core$async$state_machine__30867__auto__);

(statearr_32868[(1)] = (1));

return statearr_32868;
});
var cljs$core$async$state_machine__30867__auto____1 = (function (state_32851){
while(true){
var ret_value__30868__auto__ = (function (){try{while(true){
var result__30869__auto__ = switch__30866__auto__(state_32851);
if(cljs.core.keyword_identical_QMARK_(result__30869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30869__auto__;
}
break;
}
}catch (e32869){var ex__30870__auto__ = e32869;
var statearr_32870_34119 = state_32851;
(statearr_32870_34119[(2)] = ex__30870__auto__);


if(cljs.core.seq((state_32851[(4)]))){
var statearr_32871_34120 = state_32851;
(statearr_32871_34120[(1)] = cljs.core.first((state_32851[(4)])));

} else {
throw ex__30870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34121 = state_32851;
state_32851 = G__34121;
continue;
} else {
return ret_value__30868__auto__;
}
break;
}
});
cljs$core$async$state_machine__30867__auto__ = function(state_32851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30867__auto____1.call(this,state_32851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30867__auto____0;
cljs$core$async$state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30867__auto____1;
return cljs$core$async$state_machine__30867__auto__;
})()
})();
var state__31036__auto__ = (function (){var statearr_32872 = f__31035__auto__();
(statearr_32872[(6)] = c__31034__auto___34107);

return statearr_32872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31036__auto__);
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
var G__32874 = arguments.length;
switch (G__32874) {
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
var c__31034__auto___34123 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31035__auto__ = (function (){var switch__30866__auto__ = (function (state_32898){
var state_val_32899 = (state_32898[(1)]);
if((state_val_32899 === (7))){
var inst_32880 = (state_32898[(7)]);
var inst_32880__$1 = (state_32898[(2)]);
var inst_32881 = (inst_32880__$1 == null);
var inst_32882 = cljs.core.not(inst_32881);
var state_32898__$1 = (function (){var statearr_32900 = state_32898;
(statearr_32900[(7)] = inst_32880__$1);

return statearr_32900;
})();
if(inst_32882){
var statearr_32901_34124 = state_32898__$1;
(statearr_32901_34124[(1)] = (8));

} else {
var statearr_32902_34125 = state_32898__$1;
(statearr_32902_34125[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32899 === (1))){
var inst_32875 = (0);
var state_32898__$1 = (function (){var statearr_32903 = state_32898;
(statearr_32903[(8)] = inst_32875);

return statearr_32903;
})();
var statearr_32904_34126 = state_32898__$1;
(statearr_32904_34126[(2)] = null);

(statearr_32904_34126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32899 === (4))){
var state_32898__$1 = state_32898;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32898__$1,(7),ch);
} else {
if((state_val_32899 === (6))){
var inst_32893 = (state_32898[(2)]);
var state_32898__$1 = state_32898;
var statearr_32905_34127 = state_32898__$1;
(statearr_32905_34127[(2)] = inst_32893);

(statearr_32905_34127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32899 === (3))){
var inst_32895 = (state_32898[(2)]);
var inst_32896 = cljs.core.async.close_BANG_(out);
var state_32898__$1 = (function (){var statearr_32906 = state_32898;
(statearr_32906[(9)] = inst_32895);

return statearr_32906;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32898__$1,inst_32896);
} else {
if((state_val_32899 === (2))){
var inst_32875 = (state_32898[(8)]);
var inst_32877 = (inst_32875 < n);
var state_32898__$1 = state_32898;
if(cljs.core.truth_(inst_32877)){
var statearr_32907_34175 = state_32898__$1;
(statearr_32907_34175[(1)] = (4));

} else {
var statearr_32908_34176 = state_32898__$1;
(statearr_32908_34176[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32899 === (11))){
var inst_32875 = (state_32898[(8)]);
var inst_32885 = (state_32898[(2)]);
var inst_32886 = (inst_32875 + (1));
var inst_32875__$1 = inst_32886;
var state_32898__$1 = (function (){var statearr_32909 = state_32898;
(statearr_32909[(10)] = inst_32885);

(statearr_32909[(8)] = inst_32875__$1);

return statearr_32909;
})();
var statearr_32910_34177 = state_32898__$1;
(statearr_32910_34177[(2)] = null);

(statearr_32910_34177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32899 === (9))){
var state_32898__$1 = state_32898;
var statearr_32911_34178 = state_32898__$1;
(statearr_32911_34178[(2)] = null);

(statearr_32911_34178[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32899 === (5))){
var state_32898__$1 = state_32898;
var statearr_32912_34179 = state_32898__$1;
(statearr_32912_34179[(2)] = null);

(statearr_32912_34179[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32899 === (10))){
var inst_32890 = (state_32898[(2)]);
var state_32898__$1 = state_32898;
var statearr_32913_34180 = state_32898__$1;
(statearr_32913_34180[(2)] = inst_32890);

(statearr_32913_34180[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32899 === (8))){
var inst_32880 = (state_32898[(7)]);
var state_32898__$1 = state_32898;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32898__$1,(11),out,inst_32880);
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
var cljs$core$async$state_machine__30867__auto__ = null;
var cljs$core$async$state_machine__30867__auto____0 = (function (){
var statearr_32914 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32914[(0)] = cljs$core$async$state_machine__30867__auto__);

(statearr_32914[(1)] = (1));

return statearr_32914;
});
var cljs$core$async$state_machine__30867__auto____1 = (function (state_32898){
while(true){
var ret_value__30868__auto__ = (function (){try{while(true){
var result__30869__auto__ = switch__30866__auto__(state_32898);
if(cljs.core.keyword_identical_QMARK_(result__30869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30869__auto__;
}
break;
}
}catch (e32915){var ex__30870__auto__ = e32915;
var statearr_32916_34196 = state_32898;
(statearr_32916_34196[(2)] = ex__30870__auto__);


if(cljs.core.seq((state_32898[(4)]))){
var statearr_32917_34203 = state_32898;
(statearr_32917_34203[(1)] = cljs.core.first((state_32898[(4)])));

} else {
throw ex__30870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34205 = state_32898;
state_32898 = G__34205;
continue;
} else {
return ret_value__30868__auto__;
}
break;
}
});
cljs$core$async$state_machine__30867__auto__ = function(state_32898){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30867__auto____1.call(this,state_32898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30867__auto____0;
cljs$core$async$state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30867__auto____1;
return cljs$core$async$state_machine__30867__auto__;
})()
})();
var state__31036__auto__ = (function (){var statearr_32918 = f__31035__auto__();
(statearr_32918[(6)] = c__31034__auto___34123);

return statearr_32918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31036__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32920 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32920 = (function (f,ch,meta32921){
this.f = f;
this.ch = ch;
this.meta32921 = meta32921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32922,meta32921__$1){
var self__ = this;
var _32922__$1 = this;
return (new cljs.core.async.t_cljs$core$async32920(self__.f,self__.ch,meta32921__$1));
}));

(cljs.core.async.t_cljs$core$async32920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32922){
var self__ = this;
var _32922__$1 = this;
return self__.meta32921;
}));

(cljs.core.async.t_cljs$core$async32920.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32920.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32920.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32920.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32920.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32923 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32923 = (function (f,ch,meta32921,_,fn1,meta32924){
this.f = f;
this.ch = ch;
this.meta32921 = meta32921;
this._ = _;
this.fn1 = fn1;
this.meta32924 = meta32924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32925,meta32924__$1){
var self__ = this;
var _32925__$1 = this;
return (new cljs.core.async.t_cljs$core$async32923(self__.f,self__.ch,self__.meta32921,self__._,self__.fn1,meta32924__$1));
}));

(cljs.core.async.t_cljs$core$async32923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32925){
var self__ = this;
var _32925__$1 = this;
return self__.meta32924;
}));

(cljs.core.async.t_cljs$core$async32923.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32923.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32923.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32923.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32919_SHARP_){
var G__32926 = (((p1__32919_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32919_SHARP_) : self__.f.call(null,p1__32919_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32926) : f1.call(null,G__32926));
});
}));

(cljs.core.async.t_cljs$core$async32923.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32921","meta32921",-1669582887,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32920","cljs.core.async/t_cljs$core$async32920",1826834127,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32924","meta32924",-1276503101,null)], null);
}));

(cljs.core.async.t_cljs$core$async32923.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32923.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32923");

(cljs.core.async.t_cljs$core$async32923.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32923");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32923.
 */
cljs.core.async.__GT_t_cljs$core$async32923 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32923(f__$1,ch__$1,meta32921__$1,___$2,fn1__$1,meta32924){
return (new cljs.core.async.t_cljs$core$async32923(f__$1,ch__$1,meta32921__$1,___$2,fn1__$1,meta32924));
});

}

return (new cljs.core.async.t_cljs$core$async32923(self__.f,self__.ch,self__.meta32921,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32927 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32927) : self__.f.call(null,G__32927));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32920.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32920.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32921","meta32921",-1669582887,null)], null);
}));

(cljs.core.async.t_cljs$core$async32920.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32920.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32920");

(cljs.core.async.t_cljs$core$async32920.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32920");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32920.
 */
cljs.core.async.__GT_t_cljs$core$async32920 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32920(f__$1,ch__$1,meta32921){
return (new cljs.core.async.t_cljs$core$async32920(f__$1,ch__$1,meta32921));
});

}

return (new cljs.core.async.t_cljs$core$async32920(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32928 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32928 = (function (f,ch,meta32929){
this.f = f;
this.ch = ch;
this.meta32929 = meta32929;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32930,meta32929__$1){
var self__ = this;
var _32930__$1 = this;
return (new cljs.core.async.t_cljs$core$async32928(self__.f,self__.ch,meta32929__$1));
}));

(cljs.core.async.t_cljs$core$async32928.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32930){
var self__ = this;
var _32930__$1 = this;
return self__.meta32929;
}));

(cljs.core.async.t_cljs$core$async32928.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32928.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32928.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32928.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32928.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32928.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32928.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32929","meta32929",1751307349,null)], null);
}));

(cljs.core.async.t_cljs$core$async32928.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32928.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32928");

(cljs.core.async.t_cljs$core$async32928.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32928");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32928.
 */
cljs.core.async.__GT_t_cljs$core$async32928 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32928(f__$1,ch__$1,meta32929){
return (new cljs.core.async.t_cljs$core$async32928(f__$1,ch__$1,meta32929));
});

}

return (new cljs.core.async.t_cljs$core$async32928(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32931 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32931 = (function (p,ch,meta32932){
this.p = p;
this.ch = ch;
this.meta32932 = meta32932;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32933,meta32932__$1){
var self__ = this;
var _32933__$1 = this;
return (new cljs.core.async.t_cljs$core$async32931(self__.p,self__.ch,meta32932__$1));
}));

(cljs.core.async.t_cljs$core$async32931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32933){
var self__ = this;
var _32933__$1 = this;
return self__.meta32932;
}));

(cljs.core.async.t_cljs$core$async32931.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32931.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32931.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32931.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32931.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32931.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32931.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32931.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32932","meta32932",562887403,null)], null);
}));

(cljs.core.async.t_cljs$core$async32931.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32931.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32931");

(cljs.core.async.t_cljs$core$async32931.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32931");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32931.
 */
cljs.core.async.__GT_t_cljs$core$async32931 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32931(p__$1,ch__$1,meta32932){
return (new cljs.core.async.t_cljs$core$async32931(p__$1,ch__$1,meta32932));
});

}

return (new cljs.core.async.t_cljs$core$async32931(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32935 = arguments.length;
switch (G__32935) {
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
var c__31034__auto___34301 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31035__auto__ = (function (){var switch__30866__auto__ = (function (state_32956){
var state_val_32957 = (state_32956[(1)]);
if((state_val_32957 === (7))){
var inst_32952 = (state_32956[(2)]);
var state_32956__$1 = state_32956;
var statearr_32958_34302 = state_32956__$1;
(statearr_32958_34302[(2)] = inst_32952);

(statearr_32958_34302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32957 === (1))){
var state_32956__$1 = state_32956;
var statearr_32959_34303 = state_32956__$1;
(statearr_32959_34303[(2)] = null);

(statearr_32959_34303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32957 === (4))){
var inst_32938 = (state_32956[(7)]);
var inst_32938__$1 = (state_32956[(2)]);
var inst_32939 = (inst_32938__$1 == null);
var state_32956__$1 = (function (){var statearr_32960 = state_32956;
(statearr_32960[(7)] = inst_32938__$1);

return statearr_32960;
})();
if(cljs.core.truth_(inst_32939)){
var statearr_32961_34309 = state_32956__$1;
(statearr_32961_34309[(1)] = (5));

} else {
var statearr_32962_34310 = state_32956__$1;
(statearr_32962_34310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32957 === (6))){
var inst_32938 = (state_32956[(7)]);
var inst_32943 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32938) : p.call(null,inst_32938));
var state_32956__$1 = state_32956;
if(cljs.core.truth_(inst_32943)){
var statearr_32963_34311 = state_32956__$1;
(statearr_32963_34311[(1)] = (8));

} else {
var statearr_32964_34312 = state_32956__$1;
(statearr_32964_34312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32957 === (3))){
var inst_32954 = (state_32956[(2)]);
var state_32956__$1 = state_32956;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32956__$1,inst_32954);
} else {
if((state_val_32957 === (2))){
var state_32956__$1 = state_32956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32956__$1,(4),ch);
} else {
if((state_val_32957 === (11))){
var inst_32946 = (state_32956[(2)]);
var state_32956__$1 = state_32956;
var statearr_32965_34313 = state_32956__$1;
(statearr_32965_34313[(2)] = inst_32946);

(statearr_32965_34313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32957 === (9))){
var state_32956__$1 = state_32956;
var statearr_32966_34314 = state_32956__$1;
(statearr_32966_34314[(2)] = null);

(statearr_32966_34314[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32957 === (5))){
var inst_32941 = cljs.core.async.close_BANG_(out);
var state_32956__$1 = state_32956;
var statearr_32967_34315 = state_32956__$1;
(statearr_32967_34315[(2)] = inst_32941);

(statearr_32967_34315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32957 === (10))){
var inst_32949 = (state_32956[(2)]);
var state_32956__$1 = (function (){var statearr_32968 = state_32956;
(statearr_32968[(8)] = inst_32949);

return statearr_32968;
})();
var statearr_32969_34316 = state_32956__$1;
(statearr_32969_34316[(2)] = null);

(statearr_32969_34316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32957 === (8))){
var inst_32938 = (state_32956[(7)]);
var state_32956__$1 = state_32956;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32956__$1,(11),out,inst_32938);
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
var cljs$core$async$state_machine__30867__auto__ = null;
var cljs$core$async$state_machine__30867__auto____0 = (function (){
var statearr_32970 = [null,null,null,null,null,null,null,null,null];
(statearr_32970[(0)] = cljs$core$async$state_machine__30867__auto__);

(statearr_32970[(1)] = (1));

return statearr_32970;
});
var cljs$core$async$state_machine__30867__auto____1 = (function (state_32956){
while(true){
var ret_value__30868__auto__ = (function (){try{while(true){
var result__30869__auto__ = switch__30866__auto__(state_32956);
if(cljs.core.keyword_identical_QMARK_(result__30869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30869__auto__;
}
break;
}
}catch (e32971){var ex__30870__auto__ = e32971;
var statearr_32972_34318 = state_32956;
(statearr_32972_34318[(2)] = ex__30870__auto__);


if(cljs.core.seq((state_32956[(4)]))){
var statearr_32973_34319 = state_32956;
(statearr_32973_34319[(1)] = cljs.core.first((state_32956[(4)])));

} else {
throw ex__30870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34320 = state_32956;
state_32956 = G__34320;
continue;
} else {
return ret_value__30868__auto__;
}
break;
}
});
cljs$core$async$state_machine__30867__auto__ = function(state_32956){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30867__auto____1.call(this,state_32956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30867__auto____0;
cljs$core$async$state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30867__auto____1;
return cljs$core$async$state_machine__30867__auto__;
})()
})();
var state__31036__auto__ = (function (){var statearr_32974 = f__31035__auto__();
(statearr_32974[(6)] = c__31034__auto___34301);

return statearr_32974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31036__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32976 = arguments.length;
switch (G__32976) {
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
var c__31034__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31035__auto__ = (function (){var switch__30866__auto__ = (function (state_33038){
var state_val_33039 = (state_33038[(1)]);
if((state_val_33039 === (7))){
var inst_33034 = (state_33038[(2)]);
var state_33038__$1 = state_33038;
var statearr_33040_34322 = state_33038__$1;
(statearr_33040_34322[(2)] = inst_33034);

(statearr_33040_34322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33039 === (20))){
var inst_33004 = (state_33038[(7)]);
var inst_33015 = (state_33038[(2)]);
var inst_33016 = cljs.core.next(inst_33004);
var inst_32990 = inst_33016;
var inst_32991 = null;
var inst_32992 = (0);
var inst_32993 = (0);
var state_33038__$1 = (function (){var statearr_33041 = state_33038;
(statearr_33041[(8)] = inst_33015);

(statearr_33041[(9)] = inst_32993);

(statearr_33041[(10)] = inst_32991);

(statearr_33041[(11)] = inst_32992);

(statearr_33041[(12)] = inst_32990);

return statearr_33041;
})();
var statearr_33042_34323 = state_33038__$1;
(statearr_33042_34323[(2)] = null);

(statearr_33042_34323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33039 === (1))){
var state_33038__$1 = state_33038;
var statearr_33043_34324 = state_33038__$1;
(statearr_33043_34324[(2)] = null);

(statearr_33043_34324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33039 === (4))){
var inst_32979 = (state_33038[(13)]);
var inst_32979__$1 = (state_33038[(2)]);
var inst_32980 = (inst_32979__$1 == null);
var state_33038__$1 = (function (){var statearr_33044 = state_33038;
(statearr_33044[(13)] = inst_32979__$1);

return statearr_33044;
})();
if(cljs.core.truth_(inst_32980)){
var statearr_33045_34325 = state_33038__$1;
(statearr_33045_34325[(1)] = (5));

} else {
var statearr_33046_34326 = state_33038__$1;
(statearr_33046_34326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33039 === (15))){
var state_33038__$1 = state_33038;
var statearr_33050_34327 = state_33038__$1;
(statearr_33050_34327[(2)] = null);

(statearr_33050_34327[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33039 === (21))){
var state_33038__$1 = state_33038;
var statearr_33051_34328 = state_33038__$1;
(statearr_33051_34328[(2)] = null);

(statearr_33051_34328[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33039 === (13))){
var inst_32993 = (state_33038[(9)]);
var inst_32991 = (state_33038[(10)]);
var inst_32992 = (state_33038[(11)]);
var inst_32990 = (state_33038[(12)]);
var inst_33000 = (state_33038[(2)]);
var inst_33001 = (inst_32993 + (1));
var tmp33047 = inst_32991;
var tmp33048 = inst_32992;
var tmp33049 = inst_32990;
var inst_32990__$1 = tmp33049;
var inst_32991__$1 = tmp33047;
var inst_32992__$1 = tmp33048;
var inst_32993__$1 = inst_33001;
var state_33038__$1 = (function (){var statearr_33052 = state_33038;
(statearr_33052[(9)] = inst_32993__$1);

(statearr_33052[(10)] = inst_32991__$1);

(statearr_33052[(11)] = inst_32992__$1);

(statearr_33052[(14)] = inst_33000);

(statearr_33052[(12)] = inst_32990__$1);

return statearr_33052;
})();
var statearr_33053_34329 = state_33038__$1;
(statearr_33053_34329[(2)] = null);

(statearr_33053_34329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33039 === (22))){
var state_33038__$1 = state_33038;
var statearr_33054_34330 = state_33038__$1;
(statearr_33054_34330[(2)] = null);

(statearr_33054_34330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33039 === (6))){
var inst_32979 = (state_33038[(13)]);
var inst_32988 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32979) : f.call(null,inst_32979));
var inst_32989 = cljs.core.seq(inst_32988);
var inst_32990 = inst_32989;
var inst_32991 = null;
var inst_32992 = (0);
var inst_32993 = (0);
var state_33038__$1 = (function (){var statearr_33055 = state_33038;
(statearr_33055[(9)] = inst_32993);

(statearr_33055[(10)] = inst_32991);

(statearr_33055[(11)] = inst_32992);

(statearr_33055[(12)] = inst_32990);

return statearr_33055;
})();
var statearr_33056_34331 = state_33038__$1;
(statearr_33056_34331[(2)] = null);

(statearr_33056_34331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33039 === (17))){
var inst_33004 = (state_33038[(7)]);
var inst_33008 = cljs.core.chunk_first(inst_33004);
var inst_33009 = cljs.core.chunk_rest(inst_33004);
var inst_33010 = cljs.core.count(inst_33008);
var inst_32990 = inst_33009;
var inst_32991 = inst_33008;
var inst_32992 = inst_33010;
var inst_32993 = (0);
var state_33038__$1 = (function (){var statearr_33057 = state_33038;
(statearr_33057[(9)] = inst_32993);

(statearr_33057[(10)] = inst_32991);

(statearr_33057[(11)] = inst_32992);

(statearr_33057[(12)] = inst_32990);

return statearr_33057;
})();
var statearr_33058_34333 = state_33038__$1;
(statearr_33058_34333[(2)] = null);

(statearr_33058_34333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33039 === (3))){
var inst_33036 = (state_33038[(2)]);
var state_33038__$1 = state_33038;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33038__$1,inst_33036);
} else {
if((state_val_33039 === (12))){
var inst_33024 = (state_33038[(2)]);
var state_33038__$1 = state_33038;
var statearr_33059_34334 = state_33038__$1;
(statearr_33059_34334[(2)] = inst_33024);

(statearr_33059_34334[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33039 === (2))){
var state_33038__$1 = state_33038;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33038__$1,(4),in$);
} else {
if((state_val_33039 === (23))){
var inst_33032 = (state_33038[(2)]);
var state_33038__$1 = state_33038;
var statearr_33060_34335 = state_33038__$1;
(statearr_33060_34335[(2)] = inst_33032);

(statearr_33060_34335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33039 === (19))){
var inst_33019 = (state_33038[(2)]);
var state_33038__$1 = state_33038;
var statearr_33061_34336 = state_33038__$1;
(statearr_33061_34336[(2)] = inst_33019);

(statearr_33061_34336[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33039 === (11))){
var inst_33004 = (state_33038[(7)]);
var inst_32990 = (state_33038[(12)]);
var inst_33004__$1 = cljs.core.seq(inst_32990);
var state_33038__$1 = (function (){var statearr_33062 = state_33038;
(statearr_33062[(7)] = inst_33004__$1);

return statearr_33062;
})();
if(inst_33004__$1){
var statearr_33063_34337 = state_33038__$1;
(statearr_33063_34337[(1)] = (14));

} else {
var statearr_33064_34338 = state_33038__$1;
(statearr_33064_34338[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33039 === (9))){
var inst_33026 = (state_33038[(2)]);
var inst_33027 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33038__$1 = (function (){var statearr_33065 = state_33038;
(statearr_33065[(15)] = inst_33026);

return statearr_33065;
})();
if(cljs.core.truth_(inst_33027)){
var statearr_33066_34339 = state_33038__$1;
(statearr_33066_34339[(1)] = (21));

} else {
var statearr_33067_34340 = state_33038__$1;
(statearr_33067_34340[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33039 === (5))){
var inst_32982 = cljs.core.async.close_BANG_(out);
var state_33038__$1 = state_33038;
var statearr_33068_34341 = state_33038__$1;
(statearr_33068_34341[(2)] = inst_32982);

(statearr_33068_34341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33039 === (14))){
var inst_33004 = (state_33038[(7)]);
var inst_33006 = cljs.core.chunked_seq_QMARK_(inst_33004);
var state_33038__$1 = state_33038;
if(inst_33006){
var statearr_33069_34342 = state_33038__$1;
(statearr_33069_34342[(1)] = (17));

} else {
var statearr_33070_34343 = state_33038__$1;
(statearr_33070_34343[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33039 === (16))){
var inst_33022 = (state_33038[(2)]);
var state_33038__$1 = state_33038;
var statearr_33071_34344 = state_33038__$1;
(statearr_33071_34344[(2)] = inst_33022);

(statearr_33071_34344[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33039 === (10))){
var inst_32993 = (state_33038[(9)]);
var inst_32991 = (state_33038[(10)]);
var inst_32998 = cljs.core._nth(inst_32991,inst_32993);
var state_33038__$1 = state_33038;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33038__$1,(13),out,inst_32998);
} else {
if((state_val_33039 === (18))){
var inst_33004 = (state_33038[(7)]);
var inst_33013 = cljs.core.first(inst_33004);
var state_33038__$1 = state_33038;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33038__$1,(20),out,inst_33013);
} else {
if((state_val_33039 === (8))){
var inst_32993 = (state_33038[(9)]);
var inst_32992 = (state_33038[(11)]);
var inst_32995 = (inst_32993 < inst_32992);
var inst_32996 = inst_32995;
var state_33038__$1 = state_33038;
if(cljs.core.truth_(inst_32996)){
var statearr_33072_34347 = state_33038__$1;
(statearr_33072_34347[(1)] = (10));

} else {
var statearr_33073_34348 = state_33038__$1;
(statearr_33073_34348[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__30867__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30867__auto____0 = (function (){
var statearr_33074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33074[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30867__auto__);

(statearr_33074[(1)] = (1));

return statearr_33074;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30867__auto____1 = (function (state_33038){
while(true){
var ret_value__30868__auto__ = (function (){try{while(true){
var result__30869__auto__ = switch__30866__auto__(state_33038);
if(cljs.core.keyword_identical_QMARK_(result__30869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30869__auto__;
}
break;
}
}catch (e33075){var ex__30870__auto__ = e33075;
var statearr_33076_34350 = state_33038;
(statearr_33076_34350[(2)] = ex__30870__auto__);


if(cljs.core.seq((state_33038[(4)]))){
var statearr_33077_34351 = state_33038;
(statearr_33077_34351[(1)] = cljs.core.first((state_33038[(4)])));

} else {
throw ex__30870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34352 = state_33038;
state_33038 = G__34352;
continue;
} else {
return ret_value__30868__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30867__auto__ = function(state_33038){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30867__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30867__auto____1.call(this,state_33038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30867__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30867__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30867__auto__;
})()
})();
var state__31036__auto__ = (function (){var statearr_33078 = f__31035__auto__();
(statearr_33078[(6)] = c__31034__auto__);

return statearr_33078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31036__auto__);
}));

return c__31034__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33080 = arguments.length;
switch (G__33080) {
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
var G__33082 = arguments.length;
switch (G__33082) {
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
var G__33084 = arguments.length;
switch (G__33084) {
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
var c__31034__auto___34413 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31035__auto__ = (function (){var switch__30866__auto__ = (function (state_33108){
var state_val_33109 = (state_33108[(1)]);
if((state_val_33109 === (7))){
var inst_33103 = (state_33108[(2)]);
var state_33108__$1 = state_33108;
var statearr_33110_34437 = state_33108__$1;
(statearr_33110_34437[(2)] = inst_33103);

(statearr_33110_34437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33109 === (1))){
var inst_33085 = null;
var state_33108__$1 = (function (){var statearr_33111 = state_33108;
(statearr_33111[(7)] = inst_33085);

return statearr_33111;
})();
var statearr_33112_34438 = state_33108__$1;
(statearr_33112_34438[(2)] = null);

(statearr_33112_34438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33109 === (4))){
var inst_33088 = (state_33108[(8)]);
var inst_33088__$1 = (state_33108[(2)]);
var inst_33089 = (inst_33088__$1 == null);
var inst_33090 = cljs.core.not(inst_33089);
var state_33108__$1 = (function (){var statearr_33113 = state_33108;
(statearr_33113[(8)] = inst_33088__$1);

return statearr_33113;
})();
if(inst_33090){
var statearr_33114_34439 = state_33108__$1;
(statearr_33114_34439[(1)] = (5));

} else {
var statearr_33115_34440 = state_33108__$1;
(statearr_33115_34440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33109 === (6))){
var state_33108__$1 = state_33108;
var statearr_33116_34441 = state_33108__$1;
(statearr_33116_34441[(2)] = null);

(statearr_33116_34441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33109 === (3))){
var inst_33105 = (state_33108[(2)]);
var inst_33106 = cljs.core.async.close_BANG_(out);
var state_33108__$1 = (function (){var statearr_33117 = state_33108;
(statearr_33117[(9)] = inst_33105);

return statearr_33117;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33108__$1,inst_33106);
} else {
if((state_val_33109 === (2))){
var state_33108__$1 = state_33108;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33108__$1,(4),ch);
} else {
if((state_val_33109 === (11))){
var inst_33088 = (state_33108[(8)]);
var inst_33097 = (state_33108[(2)]);
var inst_33085 = inst_33088;
var state_33108__$1 = (function (){var statearr_33118 = state_33108;
(statearr_33118[(7)] = inst_33085);

(statearr_33118[(10)] = inst_33097);

return statearr_33118;
})();
var statearr_33119_34460 = state_33108__$1;
(statearr_33119_34460[(2)] = null);

(statearr_33119_34460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33109 === (9))){
var inst_33088 = (state_33108[(8)]);
var state_33108__$1 = state_33108;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33108__$1,(11),out,inst_33088);
} else {
if((state_val_33109 === (5))){
var inst_33088 = (state_33108[(8)]);
var inst_33085 = (state_33108[(7)]);
var inst_33092 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33088,inst_33085);
var state_33108__$1 = state_33108;
if(inst_33092){
var statearr_33121_34470 = state_33108__$1;
(statearr_33121_34470[(1)] = (8));

} else {
var statearr_33122_34475 = state_33108__$1;
(statearr_33122_34475[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33109 === (10))){
var inst_33100 = (state_33108[(2)]);
var state_33108__$1 = state_33108;
var statearr_33123_34486 = state_33108__$1;
(statearr_33123_34486[(2)] = inst_33100);

(statearr_33123_34486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33109 === (8))){
var inst_33085 = (state_33108[(7)]);
var tmp33120 = inst_33085;
var inst_33085__$1 = tmp33120;
var state_33108__$1 = (function (){var statearr_33124 = state_33108;
(statearr_33124[(7)] = inst_33085__$1);

return statearr_33124;
})();
var statearr_33125_34487 = state_33108__$1;
(statearr_33125_34487[(2)] = null);

(statearr_33125_34487[(1)] = (2));


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
var cljs$core$async$state_machine__30867__auto__ = null;
var cljs$core$async$state_machine__30867__auto____0 = (function (){
var statearr_33126 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33126[(0)] = cljs$core$async$state_machine__30867__auto__);

(statearr_33126[(1)] = (1));

return statearr_33126;
});
var cljs$core$async$state_machine__30867__auto____1 = (function (state_33108){
while(true){
var ret_value__30868__auto__ = (function (){try{while(true){
var result__30869__auto__ = switch__30866__auto__(state_33108);
if(cljs.core.keyword_identical_QMARK_(result__30869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30869__auto__;
}
break;
}
}catch (e33127){var ex__30870__auto__ = e33127;
var statearr_33128_34504 = state_33108;
(statearr_33128_34504[(2)] = ex__30870__auto__);


if(cljs.core.seq((state_33108[(4)]))){
var statearr_33129_34505 = state_33108;
(statearr_33129_34505[(1)] = cljs.core.first((state_33108[(4)])));

} else {
throw ex__30870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34507 = state_33108;
state_33108 = G__34507;
continue;
} else {
return ret_value__30868__auto__;
}
break;
}
});
cljs$core$async$state_machine__30867__auto__ = function(state_33108){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30867__auto____1.call(this,state_33108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30867__auto____0;
cljs$core$async$state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30867__auto____1;
return cljs$core$async$state_machine__30867__auto__;
})()
})();
var state__31036__auto__ = (function (){var statearr_33130 = f__31035__auto__();
(statearr_33130[(6)] = c__31034__auto___34413);

return statearr_33130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31036__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33132 = arguments.length;
switch (G__33132) {
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
var c__31034__auto___34513 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31035__auto__ = (function (){var switch__30866__auto__ = (function (state_33170){
var state_val_33171 = (state_33170[(1)]);
if((state_val_33171 === (7))){
var inst_33166 = (state_33170[(2)]);
var state_33170__$1 = state_33170;
var statearr_33172_34520 = state_33170__$1;
(statearr_33172_34520[(2)] = inst_33166);

(statearr_33172_34520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33171 === (1))){
var inst_33133 = (new Array(n));
var inst_33134 = inst_33133;
var inst_33135 = (0);
var state_33170__$1 = (function (){var statearr_33173 = state_33170;
(statearr_33173[(7)] = inst_33134);

(statearr_33173[(8)] = inst_33135);

return statearr_33173;
})();
var statearr_33174_34530 = state_33170__$1;
(statearr_33174_34530[(2)] = null);

(statearr_33174_34530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33171 === (4))){
var inst_33138 = (state_33170[(9)]);
var inst_33138__$1 = (state_33170[(2)]);
var inst_33139 = (inst_33138__$1 == null);
var inst_33140 = cljs.core.not(inst_33139);
var state_33170__$1 = (function (){var statearr_33175 = state_33170;
(statearr_33175[(9)] = inst_33138__$1);

return statearr_33175;
})();
if(inst_33140){
var statearr_33176_34555 = state_33170__$1;
(statearr_33176_34555[(1)] = (5));

} else {
var statearr_33177_34556 = state_33170__$1;
(statearr_33177_34556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33171 === (15))){
var inst_33160 = (state_33170[(2)]);
var state_33170__$1 = state_33170;
var statearr_33178_34558 = state_33170__$1;
(statearr_33178_34558[(2)] = inst_33160);

(statearr_33178_34558[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33171 === (13))){
var state_33170__$1 = state_33170;
var statearr_33179_34559 = state_33170__$1;
(statearr_33179_34559[(2)] = null);

(statearr_33179_34559[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33171 === (6))){
var inst_33135 = (state_33170[(8)]);
var inst_33156 = (inst_33135 > (0));
var state_33170__$1 = state_33170;
if(cljs.core.truth_(inst_33156)){
var statearr_33180_34560 = state_33170__$1;
(statearr_33180_34560[(1)] = (12));

} else {
var statearr_33181_34561 = state_33170__$1;
(statearr_33181_34561[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33171 === (3))){
var inst_33168 = (state_33170[(2)]);
var state_33170__$1 = state_33170;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33170__$1,inst_33168);
} else {
if((state_val_33171 === (12))){
var inst_33134 = (state_33170[(7)]);
var inst_33158 = cljs.core.vec(inst_33134);
var state_33170__$1 = state_33170;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33170__$1,(15),out,inst_33158);
} else {
if((state_val_33171 === (2))){
var state_33170__$1 = state_33170;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33170__$1,(4),ch);
} else {
if((state_val_33171 === (11))){
var inst_33150 = (state_33170[(2)]);
var inst_33151 = (new Array(n));
var inst_33134 = inst_33151;
var inst_33135 = (0);
var state_33170__$1 = (function (){var statearr_33182 = state_33170;
(statearr_33182[(7)] = inst_33134);

(statearr_33182[(10)] = inst_33150);

(statearr_33182[(8)] = inst_33135);

return statearr_33182;
})();
var statearr_33183_34562 = state_33170__$1;
(statearr_33183_34562[(2)] = null);

(statearr_33183_34562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33171 === (9))){
var inst_33134 = (state_33170[(7)]);
var inst_33148 = cljs.core.vec(inst_33134);
var state_33170__$1 = state_33170;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33170__$1,(11),out,inst_33148);
} else {
if((state_val_33171 === (5))){
var inst_33134 = (state_33170[(7)]);
var inst_33138 = (state_33170[(9)]);
var inst_33143 = (state_33170[(11)]);
var inst_33135 = (state_33170[(8)]);
var inst_33142 = (inst_33134[inst_33135] = inst_33138);
var inst_33143__$1 = (inst_33135 + (1));
var inst_33144 = (inst_33143__$1 < n);
var state_33170__$1 = (function (){var statearr_33184 = state_33170;
(statearr_33184[(12)] = inst_33142);

(statearr_33184[(11)] = inst_33143__$1);

return statearr_33184;
})();
if(cljs.core.truth_(inst_33144)){
var statearr_33185_34564 = state_33170__$1;
(statearr_33185_34564[(1)] = (8));

} else {
var statearr_33186_34565 = state_33170__$1;
(statearr_33186_34565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33171 === (14))){
var inst_33163 = (state_33170[(2)]);
var inst_33164 = cljs.core.async.close_BANG_(out);
var state_33170__$1 = (function (){var statearr_33188 = state_33170;
(statearr_33188[(13)] = inst_33163);

return statearr_33188;
})();
var statearr_33189_34566 = state_33170__$1;
(statearr_33189_34566[(2)] = inst_33164);

(statearr_33189_34566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33171 === (10))){
var inst_33154 = (state_33170[(2)]);
var state_33170__$1 = state_33170;
var statearr_33190_34567 = state_33170__$1;
(statearr_33190_34567[(2)] = inst_33154);

(statearr_33190_34567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33171 === (8))){
var inst_33134 = (state_33170[(7)]);
var inst_33143 = (state_33170[(11)]);
var tmp33187 = inst_33134;
var inst_33134__$1 = tmp33187;
var inst_33135 = inst_33143;
var state_33170__$1 = (function (){var statearr_33191 = state_33170;
(statearr_33191[(7)] = inst_33134__$1);

(statearr_33191[(8)] = inst_33135);

return statearr_33191;
})();
var statearr_33192_34568 = state_33170__$1;
(statearr_33192_34568[(2)] = null);

(statearr_33192_34568[(1)] = (2));


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
var cljs$core$async$state_machine__30867__auto__ = null;
var cljs$core$async$state_machine__30867__auto____0 = (function (){
var statearr_33193 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33193[(0)] = cljs$core$async$state_machine__30867__auto__);

(statearr_33193[(1)] = (1));

return statearr_33193;
});
var cljs$core$async$state_machine__30867__auto____1 = (function (state_33170){
while(true){
var ret_value__30868__auto__ = (function (){try{while(true){
var result__30869__auto__ = switch__30866__auto__(state_33170);
if(cljs.core.keyword_identical_QMARK_(result__30869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30869__auto__;
}
break;
}
}catch (e33194){var ex__30870__auto__ = e33194;
var statearr_33195_34569 = state_33170;
(statearr_33195_34569[(2)] = ex__30870__auto__);


if(cljs.core.seq((state_33170[(4)]))){
var statearr_33196_34570 = state_33170;
(statearr_33196_34570[(1)] = cljs.core.first((state_33170[(4)])));

} else {
throw ex__30870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34571 = state_33170;
state_33170 = G__34571;
continue;
} else {
return ret_value__30868__auto__;
}
break;
}
});
cljs$core$async$state_machine__30867__auto__ = function(state_33170){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30867__auto____1.call(this,state_33170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30867__auto____0;
cljs$core$async$state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30867__auto____1;
return cljs$core$async$state_machine__30867__auto__;
})()
})();
var state__31036__auto__ = (function (){var statearr_33197 = f__31035__auto__();
(statearr_33197[(6)] = c__31034__auto___34513);

return statearr_33197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31036__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33201 = arguments.length;
switch (G__33201) {
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
var c__31034__auto___34573 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31035__auto__ = (function (){var switch__30866__auto__ = (function (state_33244){
var state_val_33245 = (state_33244[(1)]);
if((state_val_33245 === (7))){
var inst_33239 = (state_33244[(2)]);
var state_33244__$1 = state_33244;
var statearr_33246_34574 = state_33244__$1;
(statearr_33246_34574[(2)] = inst_33239);

(statearr_33246_34574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33245 === (1))){
var inst_33202 = [];
var inst_33203 = inst_33202;
var inst_33204 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33244__$1 = (function (){var statearr_33247 = state_33244;
(statearr_33247[(7)] = inst_33203);

(statearr_33247[(8)] = inst_33204);

return statearr_33247;
})();
var statearr_33249_34575 = state_33244__$1;
(statearr_33249_34575[(2)] = null);

(statearr_33249_34575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33245 === (4))){
var inst_33207 = (state_33244[(9)]);
var inst_33207__$1 = (state_33244[(2)]);
var inst_33208 = (inst_33207__$1 == null);
var inst_33209 = cljs.core.not(inst_33208);
var state_33244__$1 = (function (){var statearr_33253 = state_33244;
(statearr_33253[(9)] = inst_33207__$1);

return statearr_33253;
})();
if(inst_33209){
var statearr_33254_34576 = state_33244__$1;
(statearr_33254_34576[(1)] = (5));

} else {
var statearr_33255_34577 = state_33244__$1;
(statearr_33255_34577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33245 === (15))){
var inst_33233 = (state_33244[(2)]);
var state_33244__$1 = state_33244;
var statearr_33256_34578 = state_33244__$1;
(statearr_33256_34578[(2)] = inst_33233);

(statearr_33256_34578[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33245 === (13))){
var state_33244__$1 = state_33244;
var statearr_33257_34579 = state_33244__$1;
(statearr_33257_34579[(2)] = null);

(statearr_33257_34579[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33245 === (6))){
var inst_33203 = (state_33244[(7)]);
var inst_33228 = inst_33203.length;
var inst_33229 = (inst_33228 > (0));
var state_33244__$1 = state_33244;
if(cljs.core.truth_(inst_33229)){
var statearr_33258_34581 = state_33244__$1;
(statearr_33258_34581[(1)] = (12));

} else {
var statearr_33259_34585 = state_33244__$1;
(statearr_33259_34585[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33245 === (3))){
var inst_33241 = (state_33244[(2)]);
var state_33244__$1 = state_33244;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33244__$1,inst_33241);
} else {
if((state_val_33245 === (12))){
var inst_33203 = (state_33244[(7)]);
var inst_33231 = cljs.core.vec(inst_33203);
var state_33244__$1 = state_33244;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33244__$1,(15),out,inst_33231);
} else {
if((state_val_33245 === (2))){
var state_33244__$1 = state_33244;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33244__$1,(4),ch);
} else {
if((state_val_33245 === (11))){
var inst_33211 = (state_33244[(10)]);
var inst_33207 = (state_33244[(9)]);
var inst_33221 = (state_33244[(2)]);
var inst_33222 = [];
var inst_33223 = inst_33222.push(inst_33207);
var inst_33203 = inst_33222;
var inst_33204 = inst_33211;
var state_33244__$1 = (function (){var statearr_33260 = state_33244;
(statearr_33260[(7)] = inst_33203);

(statearr_33260[(11)] = inst_33223);

(statearr_33260[(12)] = inst_33221);

(statearr_33260[(8)] = inst_33204);

return statearr_33260;
})();
var statearr_33261_34588 = state_33244__$1;
(statearr_33261_34588[(2)] = null);

(statearr_33261_34588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33245 === (9))){
var inst_33203 = (state_33244[(7)]);
var inst_33219 = cljs.core.vec(inst_33203);
var state_33244__$1 = state_33244;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33244__$1,(11),out,inst_33219);
} else {
if((state_val_33245 === (5))){
var inst_33211 = (state_33244[(10)]);
var inst_33204 = (state_33244[(8)]);
var inst_33207 = (state_33244[(9)]);
var inst_33211__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33207) : f.call(null,inst_33207));
var inst_33212 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33211__$1,inst_33204);
var inst_33213 = cljs.core.keyword_identical_QMARK_(inst_33204,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33214 = ((inst_33212) || (inst_33213));
var state_33244__$1 = (function (){var statearr_33262 = state_33244;
(statearr_33262[(10)] = inst_33211__$1);

return statearr_33262;
})();
if(cljs.core.truth_(inst_33214)){
var statearr_33263_34590 = state_33244__$1;
(statearr_33263_34590[(1)] = (8));

} else {
var statearr_33264_34591 = state_33244__$1;
(statearr_33264_34591[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33245 === (14))){
var inst_33236 = (state_33244[(2)]);
var inst_33237 = cljs.core.async.close_BANG_(out);
var state_33244__$1 = (function (){var statearr_33267 = state_33244;
(statearr_33267[(13)] = inst_33236);

return statearr_33267;
})();
var statearr_33269_34592 = state_33244__$1;
(statearr_33269_34592[(2)] = inst_33237);

(statearr_33269_34592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33245 === (10))){
var inst_33226 = (state_33244[(2)]);
var state_33244__$1 = state_33244;
var statearr_33270_34593 = state_33244__$1;
(statearr_33270_34593[(2)] = inst_33226);

(statearr_33270_34593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33245 === (8))){
var inst_33211 = (state_33244[(10)]);
var inst_33203 = (state_33244[(7)]);
var inst_33207 = (state_33244[(9)]);
var inst_33216 = inst_33203.push(inst_33207);
var tmp33266 = inst_33203;
var inst_33203__$1 = tmp33266;
var inst_33204 = inst_33211;
var state_33244__$1 = (function (){var statearr_33271 = state_33244;
(statearr_33271[(7)] = inst_33203__$1);

(statearr_33271[(14)] = inst_33216);

(statearr_33271[(8)] = inst_33204);

return statearr_33271;
})();
var statearr_33272_34594 = state_33244__$1;
(statearr_33272_34594[(2)] = null);

(statearr_33272_34594[(1)] = (2));


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
var cljs$core$async$state_machine__30867__auto__ = null;
var cljs$core$async$state_machine__30867__auto____0 = (function (){
var statearr_33273 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33273[(0)] = cljs$core$async$state_machine__30867__auto__);

(statearr_33273[(1)] = (1));

return statearr_33273;
});
var cljs$core$async$state_machine__30867__auto____1 = (function (state_33244){
while(true){
var ret_value__30868__auto__ = (function (){try{while(true){
var result__30869__auto__ = switch__30866__auto__(state_33244);
if(cljs.core.keyword_identical_QMARK_(result__30869__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30869__auto__;
}
break;
}
}catch (e33274){var ex__30870__auto__ = e33274;
var statearr_33275_34599 = state_33244;
(statearr_33275_34599[(2)] = ex__30870__auto__);


if(cljs.core.seq((state_33244[(4)]))){
var statearr_33276_34600 = state_33244;
(statearr_33276_34600[(1)] = cljs.core.first((state_33244[(4)])));

} else {
throw ex__30870__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34601 = state_33244;
state_33244 = G__34601;
continue;
} else {
return ret_value__30868__auto__;
}
break;
}
});
cljs$core$async$state_machine__30867__auto__ = function(state_33244){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30867__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30867__auto____1.call(this,state_33244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30867__auto____0;
cljs$core$async$state_machine__30867__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30867__auto____1;
return cljs$core$async$state_machine__30867__auto__;
})()
})();
var state__31036__auto__ = (function (){var statearr_33277 = f__31035__auto__();
(statearr_33277[(6)] = c__31034__auto___34573);

return statearr_33277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31036__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
