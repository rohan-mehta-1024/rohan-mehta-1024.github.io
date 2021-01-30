goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31025 = arguments.length;
switch (G__31025) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31026 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31026 = (function (f,blockable,meta31027){
this.f = f;
this.blockable = blockable;
this.meta31027 = meta31027;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31028,meta31027__$1){
var self__ = this;
var _31028__$1 = this;
return (new cljs.core.async.t_cljs$core$async31026(self__.f,self__.blockable,meta31027__$1));
}));

(cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31028){
var self__ = this;
var _31028__$1 = this;
return self__.meta31027;
}));

(cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31026.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31026.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31027","meta31027",-254542966,null)], null);
}));

(cljs.core.async.t_cljs$core$async31026.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31026.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31026");

(cljs.core.async.t_cljs$core$async31026.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31026");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31026.
 */
cljs.core.async.__GT_t_cljs$core$async31026 = (function cljs$core$async$__GT_t_cljs$core$async31026(f__$1,blockable__$1,meta31027){
return (new cljs.core.async.t_cljs$core$async31026(f__$1,blockable__$1,meta31027));
});

}

return (new cljs.core.async.t_cljs$core$async31026(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31048 = arguments.length;
switch (G__31048) {
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
var G__31056 = arguments.length;
switch (G__31056) {
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
var G__31064 = arguments.length;
switch (G__31064) {
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
var val_33299 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33299) : fn1.call(null,val_33299));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33299) : fn1.call(null,val_33299));
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
var G__31077 = arguments.length;
switch (G__31077) {
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
var n__4613__auto___33309 = n;
var x_33310 = (0);
while(true){
if((x_33310 < n__4613__auto___33309)){
(a[x_33310] = x_33310);

var G__33311 = (x_33310 + (1));
x_33310 = G__33311;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31089 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31089 = (function (flag,meta31090){
this.flag = flag;
this.meta31090 = meta31090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31091,meta31090__$1){
var self__ = this;
var _31091__$1 = this;
return (new cljs.core.async.t_cljs$core$async31089(self__.flag,meta31090__$1));
}));

(cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31091){
var self__ = this;
var _31091__$1 = this;
return self__.meta31090;
}));

(cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31089.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31090","meta31090",578862395,null)], null);
}));

(cljs.core.async.t_cljs$core$async31089.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31089.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31089");

(cljs.core.async.t_cljs$core$async31089.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31089");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31089.
 */
cljs.core.async.__GT_t_cljs$core$async31089 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31089(flag__$1,meta31090){
return (new cljs.core.async.t_cljs$core$async31089(flag__$1,meta31090));
});

}

return (new cljs.core.async.t_cljs$core$async31089(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31098 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31098 = (function (flag,cb,meta31099){
this.flag = flag;
this.cb = cb;
this.meta31099 = meta31099;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31100,meta31099__$1){
var self__ = this;
var _31100__$1 = this;
return (new cljs.core.async.t_cljs$core$async31098(self__.flag,self__.cb,meta31099__$1));
}));

(cljs.core.async.t_cljs$core$async31098.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31100){
var self__ = this;
var _31100__$1 = this;
return self__.meta31099;
}));

(cljs.core.async.t_cljs$core$async31098.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31098.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31098.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31098.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31098.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31099","meta31099",311324001,null)], null);
}));

(cljs.core.async.t_cljs$core$async31098.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31098.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31098");

(cljs.core.async.t_cljs$core$async31098.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31098");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31098.
 */
cljs.core.async.__GT_t_cljs$core$async31098 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31098(flag__$1,cb__$1,meta31099){
return (new cljs.core.async.t_cljs$core$async31098(flag__$1,cb__$1,meta31099));
});

}

return (new cljs.core.async.t_cljs$core$async31098(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31103_SHARP_){
var G__31106 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31103_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31106) : fret.call(null,G__31106));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31104_SHARP_){
var G__31107 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31104_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31107) : fret.call(null,G__31107));
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
var G__33317 = (i + (1));
i = G__33317;
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
var len__4736__auto___33332 = arguments.length;
var i__4737__auto___33333 = (0);
while(true){
if((i__4737__auto___33333 < len__4736__auto___33332)){
args__4742__auto__.push((arguments[i__4737__auto___33333]));

var G__33334 = (i__4737__auto___33333 + (1));
i__4737__auto___33333 = G__33334;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31111){
var map__31112 = p__31111;
var map__31112__$1 = (((((!((map__31112 == null))))?(((((map__31112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31112):map__31112);
var opts = map__31112__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31109){
var G__31110 = cljs.core.first(seq31109);
var seq31109__$1 = cljs.core.next(seq31109);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31110,seq31109__$1);
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
var G__31119 = arguments.length;
switch (G__31119) {
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
var c__30930__auto___33340 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30931__auto__ = (function (){var switch__30758__auto__ = (function (state_31143){
var state_val_31144 = (state_31143[(1)]);
if((state_val_31144 === (7))){
var inst_31139 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
var statearr_31153_33341 = state_31143__$1;
(statearr_31153_33341[(2)] = inst_31139);

(statearr_31153_33341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (1))){
var state_31143__$1 = state_31143;
var statearr_31155_33362 = state_31143__$1;
(statearr_31155_33362[(2)] = null);

(statearr_31155_33362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (4))){
var inst_31122 = (state_31143[(7)]);
var inst_31122__$1 = (state_31143[(2)]);
var inst_31123 = (inst_31122__$1 == null);
var state_31143__$1 = (function (){var statearr_31156 = state_31143;
(statearr_31156[(7)] = inst_31122__$1);

return statearr_31156;
})();
if(cljs.core.truth_(inst_31123)){
var statearr_31161_33363 = state_31143__$1;
(statearr_31161_33363[(1)] = (5));

} else {
var statearr_31162_33364 = state_31143__$1;
(statearr_31162_33364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (13))){
var state_31143__$1 = state_31143;
var statearr_31163_33365 = state_31143__$1;
(statearr_31163_33365[(2)] = null);

(statearr_31163_33365[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (6))){
var inst_31122 = (state_31143[(7)]);
var state_31143__$1 = state_31143;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31143__$1,(11),to,inst_31122);
} else {
if((state_val_31144 === (3))){
var inst_31141 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31143__$1,inst_31141);
} else {
if((state_val_31144 === (12))){
var state_31143__$1 = state_31143;
var statearr_31164_33366 = state_31143__$1;
(statearr_31164_33366[(2)] = null);

(statearr_31164_33366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (2))){
var state_31143__$1 = state_31143;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31143__$1,(4),from);
} else {
if((state_val_31144 === (11))){
var inst_31132 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
if(cljs.core.truth_(inst_31132)){
var statearr_31165_33367 = state_31143__$1;
(statearr_31165_33367[(1)] = (12));

} else {
var statearr_31166_33368 = state_31143__$1;
(statearr_31166_33368[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (9))){
var state_31143__$1 = state_31143;
var statearr_31167_33369 = state_31143__$1;
(statearr_31167_33369[(2)] = null);

(statearr_31167_33369[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (5))){
var state_31143__$1 = state_31143;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31168_33370 = state_31143__$1;
(statearr_31168_33370[(1)] = (8));

} else {
var statearr_31169_33371 = state_31143__$1;
(statearr_31169_33371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (14))){
var inst_31137 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
var statearr_31170_33372 = state_31143__$1;
(statearr_31170_33372[(2)] = inst_31137);

(statearr_31170_33372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (10))){
var inst_31129 = (state_31143[(2)]);
var state_31143__$1 = state_31143;
var statearr_31171_33375 = state_31143__$1;
(statearr_31171_33375[(2)] = inst_31129);

(statearr_31171_33375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31144 === (8))){
var inst_31126 = cljs.core.async.close_BANG_(to);
var state_31143__$1 = state_31143;
var statearr_31172_33379 = state_31143__$1;
(statearr_31172_33379[(2)] = inst_31126);

(statearr_31172_33379[(1)] = (10));


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
var cljs$core$async$state_machine__30759__auto__ = null;
var cljs$core$async$state_machine__30759__auto____0 = (function (){
var statearr_31177 = [null,null,null,null,null,null,null,null];
(statearr_31177[(0)] = cljs$core$async$state_machine__30759__auto__);

(statearr_31177[(1)] = (1));

return statearr_31177;
});
var cljs$core$async$state_machine__30759__auto____1 = (function (state_31143){
while(true){
var ret_value__30760__auto__ = (function (){try{while(true){
var result__30761__auto__ = switch__30758__auto__(state_31143);
if(cljs.core.keyword_identical_QMARK_(result__30761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30761__auto__;
}
break;
}
}catch (e31178){var ex__30762__auto__ = e31178;
var statearr_31179_33380 = state_31143;
(statearr_31179_33380[(2)] = ex__30762__auto__);


if(cljs.core.seq((state_31143[(4)]))){
var statearr_31180_33381 = state_31143;
(statearr_31180_33381[(1)] = cljs.core.first((state_31143[(4)])));

} else {
throw ex__30762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33382 = state_31143;
state_31143 = G__33382;
continue;
} else {
return ret_value__30760__auto__;
}
break;
}
});
cljs$core$async$state_machine__30759__auto__ = function(state_31143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30759__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30759__auto____1.call(this,state_31143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30759__auto____0;
cljs$core$async$state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30759__auto____1;
return cljs$core$async$state_machine__30759__auto__;
})()
})();
var state__30932__auto__ = (function (){var statearr_31181 = f__30931__auto__();
(statearr_31181[(6)] = c__30930__auto___33340);

return statearr_31181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30932__auto__);
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
var process = (function (p__31191){
var vec__31192 = p__31191;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31192,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31192,(1),null);
var job = vec__31192;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30930__auto___33384 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30931__auto__ = (function (){var switch__30758__auto__ = (function (state_31199){
var state_val_31200 = (state_31199[(1)]);
if((state_val_31200 === (1))){
var state_31199__$1 = state_31199;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31199__$1,(2),res,v);
} else {
if((state_val_31200 === (2))){
var inst_31196 = (state_31199[(2)]);
var inst_31197 = cljs.core.async.close_BANG_(res);
var state_31199__$1 = (function (){var statearr_31201 = state_31199;
(statearr_31201[(7)] = inst_31196);

return statearr_31201;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31199__$1,inst_31197);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30759__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30759__auto____0 = (function (){
var statearr_31203 = [null,null,null,null,null,null,null,null];
(statearr_31203[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30759__auto__);

(statearr_31203[(1)] = (1));

return statearr_31203;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30759__auto____1 = (function (state_31199){
while(true){
var ret_value__30760__auto__ = (function (){try{while(true){
var result__30761__auto__ = switch__30758__auto__(state_31199);
if(cljs.core.keyword_identical_QMARK_(result__30761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30761__auto__;
}
break;
}
}catch (e31204){var ex__30762__auto__ = e31204;
var statearr_31205_33385 = state_31199;
(statearr_31205_33385[(2)] = ex__30762__auto__);


if(cljs.core.seq((state_31199[(4)]))){
var statearr_31209_33386 = state_31199;
(statearr_31209_33386[(1)] = cljs.core.first((state_31199[(4)])));

} else {
throw ex__30762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33387 = state_31199;
state_31199 = G__33387;
continue;
} else {
return ret_value__30760__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30759__auto__ = function(state_31199){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30759__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30759__auto____1.call(this,state_31199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30759__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30759__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30759__auto__;
})()
})();
var state__30932__auto__ = (function (){var statearr_31214 = f__30931__auto__();
(statearr_31214[(6)] = c__30930__auto___33384);

return statearr_31214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30932__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31217){
var vec__31218 = p__31217;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31218,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31218,(1),null);
var job = vec__31218;
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
var n__4613__auto___33388 = n;
var __33389 = (0);
while(true){
if((__33389 < n__4613__auto___33388)){
var G__31222_33390 = type;
var G__31222_33391__$1 = (((G__31222_33390 instanceof cljs.core.Keyword))?G__31222_33390.fqn:null);
switch (G__31222_33391__$1) {
case "compute":
var c__30930__auto___33393 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33389,c__30930__auto___33393,G__31222_33390,G__31222_33391__$1,n__4613__auto___33388,jobs,results,process,async){
return (function (){
var f__30931__auto__ = (function (){var switch__30758__auto__ = ((function (__33389,c__30930__auto___33393,G__31222_33390,G__31222_33391__$1,n__4613__auto___33388,jobs,results,process,async){
return (function (state_31235){
var state_val_31236 = (state_31235[(1)]);
if((state_val_31236 === (1))){
var state_31235__$1 = state_31235;
var statearr_31239_33394 = state_31235__$1;
(statearr_31239_33394[(2)] = null);

(statearr_31239_33394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (2))){
var state_31235__$1 = state_31235;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31235__$1,(4),jobs);
} else {
if((state_val_31236 === (3))){
var inst_31233 = (state_31235[(2)]);
var state_31235__$1 = state_31235;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31235__$1,inst_31233);
} else {
if((state_val_31236 === (4))){
var inst_31225 = (state_31235[(2)]);
var inst_31226 = process(inst_31225);
var state_31235__$1 = state_31235;
if(cljs.core.truth_(inst_31226)){
var statearr_31240_33395 = state_31235__$1;
(statearr_31240_33395[(1)] = (5));

} else {
var statearr_31241_33396 = state_31235__$1;
(statearr_31241_33396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (5))){
var state_31235__$1 = state_31235;
var statearr_31242_33403 = state_31235__$1;
(statearr_31242_33403[(2)] = null);

(statearr_31242_33403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (6))){
var state_31235__$1 = state_31235;
var statearr_31243_33404 = state_31235__$1;
(statearr_31243_33404[(2)] = null);

(statearr_31243_33404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31236 === (7))){
var inst_31231 = (state_31235[(2)]);
var state_31235__$1 = state_31235;
var statearr_31244_33405 = state_31235__$1;
(statearr_31244_33405[(2)] = inst_31231);

(statearr_31244_33405[(1)] = (3));


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
});})(__33389,c__30930__auto___33393,G__31222_33390,G__31222_33391__$1,n__4613__auto___33388,jobs,results,process,async))
;
return ((function (__33389,switch__30758__auto__,c__30930__auto___33393,G__31222_33390,G__31222_33391__$1,n__4613__auto___33388,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30759__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30759__auto____0 = (function (){
var statearr_31245 = [null,null,null,null,null,null,null];
(statearr_31245[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30759__auto__);

(statearr_31245[(1)] = (1));

return statearr_31245;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30759__auto____1 = (function (state_31235){
while(true){
var ret_value__30760__auto__ = (function (){try{while(true){
var result__30761__auto__ = switch__30758__auto__(state_31235);
if(cljs.core.keyword_identical_QMARK_(result__30761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30761__auto__;
}
break;
}
}catch (e31246){var ex__30762__auto__ = e31246;
var statearr_31247_33410 = state_31235;
(statearr_31247_33410[(2)] = ex__30762__auto__);


if(cljs.core.seq((state_31235[(4)]))){
var statearr_31248_33411 = state_31235;
(statearr_31248_33411[(1)] = cljs.core.first((state_31235[(4)])));

} else {
throw ex__30762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33412 = state_31235;
state_31235 = G__33412;
continue;
} else {
return ret_value__30760__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30759__auto__ = function(state_31235){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30759__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30759__auto____1.call(this,state_31235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30759__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30759__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30759__auto__;
})()
;})(__33389,switch__30758__auto__,c__30930__auto___33393,G__31222_33390,G__31222_33391__$1,n__4613__auto___33388,jobs,results,process,async))
})();
var state__30932__auto__ = (function (){var statearr_31249 = f__30931__auto__();
(statearr_31249[(6)] = c__30930__auto___33393);

return statearr_31249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30932__auto__);
});})(__33389,c__30930__auto___33393,G__31222_33390,G__31222_33391__$1,n__4613__auto___33388,jobs,results,process,async))
);


break;
case "async":
var c__30930__auto___33417 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33389,c__30930__auto___33417,G__31222_33390,G__31222_33391__$1,n__4613__auto___33388,jobs,results,process,async){
return (function (){
var f__30931__auto__ = (function (){var switch__30758__auto__ = ((function (__33389,c__30930__auto___33417,G__31222_33390,G__31222_33391__$1,n__4613__auto___33388,jobs,results,process,async){
return (function (state_31264){
var state_val_31265 = (state_31264[(1)]);
if((state_val_31265 === (1))){
var state_31264__$1 = state_31264;
var statearr_31266_33419 = state_31264__$1;
(statearr_31266_33419[(2)] = null);

(statearr_31266_33419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (2))){
var state_31264__$1 = state_31264;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31264__$1,(4),jobs);
} else {
if((state_val_31265 === (3))){
var inst_31262 = (state_31264[(2)]);
var state_31264__$1 = state_31264;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31264__$1,inst_31262);
} else {
if((state_val_31265 === (4))){
var inst_31254 = (state_31264[(2)]);
var inst_31255 = async(inst_31254);
var state_31264__$1 = state_31264;
if(cljs.core.truth_(inst_31255)){
var statearr_31267_33420 = state_31264__$1;
(statearr_31267_33420[(1)] = (5));

} else {
var statearr_31268_33423 = state_31264__$1;
(statearr_31268_33423[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (5))){
var state_31264__$1 = state_31264;
var statearr_31269_33424 = state_31264__$1;
(statearr_31269_33424[(2)] = null);

(statearr_31269_33424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (6))){
var state_31264__$1 = state_31264;
var statearr_31270_33425 = state_31264__$1;
(statearr_31270_33425[(2)] = null);

(statearr_31270_33425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31265 === (7))){
var inst_31260 = (state_31264[(2)]);
var state_31264__$1 = state_31264;
var statearr_31271_33426 = state_31264__$1;
(statearr_31271_33426[(2)] = inst_31260);

(statearr_31271_33426[(1)] = (3));


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
});})(__33389,c__30930__auto___33417,G__31222_33390,G__31222_33391__$1,n__4613__auto___33388,jobs,results,process,async))
;
return ((function (__33389,switch__30758__auto__,c__30930__auto___33417,G__31222_33390,G__31222_33391__$1,n__4613__auto___33388,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30759__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30759__auto____0 = (function (){
var statearr_31272 = [null,null,null,null,null,null,null];
(statearr_31272[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30759__auto__);

(statearr_31272[(1)] = (1));

return statearr_31272;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30759__auto____1 = (function (state_31264){
while(true){
var ret_value__30760__auto__ = (function (){try{while(true){
var result__30761__auto__ = switch__30758__auto__(state_31264);
if(cljs.core.keyword_identical_QMARK_(result__30761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30761__auto__;
}
break;
}
}catch (e31273){var ex__30762__auto__ = e31273;
var statearr_31274_33428 = state_31264;
(statearr_31274_33428[(2)] = ex__30762__auto__);


if(cljs.core.seq((state_31264[(4)]))){
var statearr_31275_33432 = state_31264;
(statearr_31275_33432[(1)] = cljs.core.first((state_31264[(4)])));

} else {
throw ex__30762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33433 = state_31264;
state_31264 = G__33433;
continue;
} else {
return ret_value__30760__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30759__auto__ = function(state_31264){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30759__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30759__auto____1.call(this,state_31264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30759__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30759__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30759__auto__;
})()
;})(__33389,switch__30758__auto__,c__30930__auto___33417,G__31222_33390,G__31222_33391__$1,n__4613__auto___33388,jobs,results,process,async))
})();
var state__30932__auto__ = (function (){var statearr_31276 = f__30931__auto__();
(statearr_31276[(6)] = c__30930__auto___33417);

return statearr_31276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30932__auto__);
});})(__33389,c__30930__auto___33417,G__31222_33390,G__31222_33391__$1,n__4613__auto___33388,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31222_33391__$1)].join('')));

}

var G__33437 = (__33389 + (1));
__33389 = G__33437;
continue;
} else {
}
break;
}

var c__30930__auto___33438 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30931__auto__ = (function (){var switch__30758__auto__ = (function (state_31331){
var state_val_31332 = (state_31331[(1)]);
if((state_val_31332 === (7))){
var inst_31327 = (state_31331[(2)]);
var state_31331__$1 = state_31331;
var statearr_31333_33439 = state_31331__$1;
(statearr_31333_33439[(2)] = inst_31327);

(statearr_31333_33439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (1))){
var state_31331__$1 = state_31331;
var statearr_31334_33446 = state_31331__$1;
(statearr_31334_33446[(2)] = null);

(statearr_31334_33446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (4))){
var inst_31312 = (state_31331[(7)]);
var inst_31312__$1 = (state_31331[(2)]);
var inst_31313 = (inst_31312__$1 == null);
var state_31331__$1 = (function (){var statearr_31335 = state_31331;
(statearr_31335[(7)] = inst_31312__$1);

return statearr_31335;
})();
if(cljs.core.truth_(inst_31313)){
var statearr_31336_33454 = state_31331__$1;
(statearr_31336_33454[(1)] = (5));

} else {
var statearr_31337_33455 = state_31331__$1;
(statearr_31337_33455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (6))){
var inst_31312 = (state_31331[(7)]);
var inst_31317 = (state_31331[(8)]);
var inst_31317__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31318 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31319 = [inst_31312,inst_31317__$1];
var inst_31320 = (new cljs.core.PersistentVector(null,2,(5),inst_31318,inst_31319,null));
var state_31331__$1 = (function (){var statearr_31338 = state_31331;
(statearr_31338[(8)] = inst_31317__$1);

return statearr_31338;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31331__$1,(8),jobs,inst_31320);
} else {
if((state_val_31332 === (3))){
var inst_31329 = (state_31331[(2)]);
var state_31331__$1 = state_31331;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31331__$1,inst_31329);
} else {
if((state_val_31332 === (2))){
var state_31331__$1 = state_31331;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31331__$1,(4),from);
} else {
if((state_val_31332 === (9))){
var inst_31324 = (state_31331[(2)]);
var state_31331__$1 = (function (){var statearr_31339 = state_31331;
(statearr_31339[(9)] = inst_31324);

return statearr_31339;
})();
var statearr_31340_33462 = state_31331__$1;
(statearr_31340_33462[(2)] = null);

(statearr_31340_33462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (5))){
var inst_31315 = cljs.core.async.close_BANG_(jobs);
var state_31331__$1 = state_31331;
var statearr_31341_33464 = state_31331__$1;
(statearr_31341_33464[(2)] = inst_31315);

(statearr_31341_33464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31332 === (8))){
var inst_31317 = (state_31331[(8)]);
var inst_31322 = (state_31331[(2)]);
var state_31331__$1 = (function (){var statearr_31342 = state_31331;
(statearr_31342[(10)] = inst_31322);

return statearr_31342;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31331__$1,(9),results,inst_31317);
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
var cljs$core$async$pipeline_STAR__$_state_machine__30759__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30759__auto____0 = (function (){
var statearr_31343 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31343[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30759__auto__);

(statearr_31343[(1)] = (1));

return statearr_31343;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30759__auto____1 = (function (state_31331){
while(true){
var ret_value__30760__auto__ = (function (){try{while(true){
var result__30761__auto__ = switch__30758__auto__(state_31331);
if(cljs.core.keyword_identical_QMARK_(result__30761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30761__auto__;
}
break;
}
}catch (e31344){var ex__30762__auto__ = e31344;
var statearr_31345_33469 = state_31331;
(statearr_31345_33469[(2)] = ex__30762__auto__);


if(cljs.core.seq((state_31331[(4)]))){
var statearr_31346_33470 = state_31331;
(statearr_31346_33470[(1)] = cljs.core.first((state_31331[(4)])));

} else {
throw ex__30762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33471 = state_31331;
state_31331 = G__33471;
continue;
} else {
return ret_value__30760__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30759__auto__ = function(state_31331){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30759__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30759__auto____1.call(this,state_31331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30759__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30759__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30759__auto__;
})()
})();
var state__30932__auto__ = (function (){var statearr_31347 = f__30931__auto__();
(statearr_31347[(6)] = c__30930__auto___33438);

return statearr_31347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30932__auto__);
}));


var c__30930__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30931__auto__ = (function (){var switch__30758__auto__ = (function (state_31403){
var state_val_31404 = (state_31403[(1)]);
if((state_val_31404 === (7))){
var inst_31399 = (state_31403[(2)]);
var state_31403__$1 = state_31403;
var statearr_31405_33472 = state_31403__$1;
(statearr_31405_33472[(2)] = inst_31399);

(statearr_31405_33472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31404 === (20))){
var state_31403__$1 = state_31403;
var statearr_31406_33473 = state_31403__$1;
(statearr_31406_33473[(2)] = null);

(statearr_31406_33473[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31404 === (1))){
var state_31403__$1 = state_31403;
var statearr_31407_33474 = state_31403__$1;
(statearr_31407_33474[(2)] = null);

(statearr_31407_33474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31404 === (4))){
var inst_31350 = (state_31403[(7)]);
var inst_31350__$1 = (state_31403[(2)]);
var inst_31351 = (inst_31350__$1 == null);
var state_31403__$1 = (function (){var statearr_31408 = state_31403;
(statearr_31408[(7)] = inst_31350__$1);

return statearr_31408;
})();
if(cljs.core.truth_(inst_31351)){
var statearr_31409_33475 = state_31403__$1;
(statearr_31409_33475[(1)] = (5));

} else {
var statearr_31410_33476 = state_31403__$1;
(statearr_31410_33476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31404 === (15))){
var inst_31381 = (state_31403[(8)]);
var state_31403__$1 = state_31403;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31403__$1,(18),to,inst_31381);
} else {
if((state_val_31404 === (21))){
var inst_31394 = (state_31403[(2)]);
var state_31403__$1 = state_31403;
var statearr_31411_33477 = state_31403__$1;
(statearr_31411_33477[(2)] = inst_31394);

(statearr_31411_33477[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31404 === (13))){
var inst_31396 = (state_31403[(2)]);
var state_31403__$1 = (function (){var statearr_31412 = state_31403;
(statearr_31412[(9)] = inst_31396);

return statearr_31412;
})();
var statearr_31413_33485 = state_31403__$1;
(statearr_31413_33485[(2)] = null);

(statearr_31413_33485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31404 === (6))){
var inst_31350 = (state_31403[(7)]);
var state_31403__$1 = state_31403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31403__$1,(11),inst_31350);
} else {
if((state_val_31404 === (17))){
var inst_31389 = (state_31403[(2)]);
var state_31403__$1 = state_31403;
if(cljs.core.truth_(inst_31389)){
var statearr_31416_33486 = state_31403__$1;
(statearr_31416_33486[(1)] = (19));

} else {
var statearr_31419_33487 = state_31403__$1;
(statearr_31419_33487[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31404 === (3))){
var inst_31401 = (state_31403[(2)]);
var state_31403__$1 = state_31403;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31403__$1,inst_31401);
} else {
if((state_val_31404 === (12))){
var inst_31360 = (state_31403[(10)]);
var state_31403__$1 = state_31403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31403__$1,(14),inst_31360);
} else {
if((state_val_31404 === (2))){
var state_31403__$1 = state_31403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31403__$1,(4),results);
} else {
if((state_val_31404 === (19))){
var state_31403__$1 = state_31403;
var statearr_31421_33488 = state_31403__$1;
(statearr_31421_33488[(2)] = null);

(statearr_31421_33488[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31404 === (11))){
var inst_31360 = (state_31403[(2)]);
var state_31403__$1 = (function (){var statearr_31422 = state_31403;
(statearr_31422[(10)] = inst_31360);

return statearr_31422;
})();
var statearr_31423_33489 = state_31403__$1;
(statearr_31423_33489[(2)] = null);

(statearr_31423_33489[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31404 === (9))){
var state_31403__$1 = state_31403;
var statearr_31424_33490 = state_31403__$1;
(statearr_31424_33490[(2)] = null);

(statearr_31424_33490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31404 === (5))){
var state_31403__$1 = state_31403;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31425_33491 = state_31403__$1;
(statearr_31425_33491[(1)] = (8));

} else {
var statearr_31426_33492 = state_31403__$1;
(statearr_31426_33492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31404 === (14))){
var inst_31381 = (state_31403[(8)]);
var inst_31381__$1 = (state_31403[(2)]);
var inst_31382 = (inst_31381__$1 == null);
var inst_31383 = cljs.core.not(inst_31382);
var state_31403__$1 = (function (){var statearr_31427 = state_31403;
(statearr_31427[(8)] = inst_31381__$1);

return statearr_31427;
})();
if(inst_31383){
var statearr_31428_33501 = state_31403__$1;
(statearr_31428_33501[(1)] = (15));

} else {
var statearr_31429_33502 = state_31403__$1;
(statearr_31429_33502[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31404 === (16))){
var state_31403__$1 = state_31403;
var statearr_31438_33503 = state_31403__$1;
(statearr_31438_33503[(2)] = false);

(statearr_31438_33503[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31404 === (10))){
var inst_31357 = (state_31403[(2)]);
var state_31403__$1 = state_31403;
var statearr_31439_33504 = state_31403__$1;
(statearr_31439_33504[(2)] = inst_31357);

(statearr_31439_33504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31404 === (18))){
var inst_31386 = (state_31403[(2)]);
var state_31403__$1 = state_31403;
var statearr_31442_33505 = state_31403__$1;
(statearr_31442_33505[(2)] = inst_31386);

(statearr_31442_33505[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31404 === (8))){
var inst_31354 = cljs.core.async.close_BANG_(to);
var state_31403__$1 = state_31403;
var statearr_31444_33506 = state_31403__$1;
(statearr_31444_33506[(2)] = inst_31354);

(statearr_31444_33506[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__30759__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30759__auto____0 = (function (){
var statearr_31448 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31448[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30759__auto__);

(statearr_31448[(1)] = (1));

return statearr_31448;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30759__auto____1 = (function (state_31403){
while(true){
var ret_value__30760__auto__ = (function (){try{while(true){
var result__30761__auto__ = switch__30758__auto__(state_31403);
if(cljs.core.keyword_identical_QMARK_(result__30761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30761__auto__;
}
break;
}
}catch (e31449){var ex__30762__auto__ = e31449;
var statearr_31450_33507 = state_31403;
(statearr_31450_33507[(2)] = ex__30762__auto__);


if(cljs.core.seq((state_31403[(4)]))){
var statearr_31451_33508 = state_31403;
(statearr_31451_33508[(1)] = cljs.core.first((state_31403[(4)])));

} else {
throw ex__30762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33509 = state_31403;
state_31403 = G__33509;
continue;
} else {
return ret_value__30760__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30759__auto__ = function(state_31403){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30759__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30759__auto____1.call(this,state_31403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30759__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30759__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30759__auto__;
})()
})();
var state__30932__auto__ = (function (){var statearr_31452 = f__30931__auto__();
(statearr_31452[(6)] = c__30930__auto__);

return statearr_31452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30932__auto__);
}));

return c__30930__auto__;
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
var G__31461 = arguments.length;
switch (G__31461) {
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
var G__31470 = arguments.length;
switch (G__31470) {
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
var G__31489 = arguments.length;
switch (G__31489) {
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
var c__30930__auto___33522 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30931__auto__ = (function (){var switch__30758__auto__ = (function (state_31515){
var state_val_31516 = (state_31515[(1)]);
if((state_val_31516 === (7))){
var inst_31511 = (state_31515[(2)]);
var state_31515__$1 = state_31515;
var statearr_31517_33528 = state_31515__$1;
(statearr_31517_33528[(2)] = inst_31511);

(statearr_31517_33528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (1))){
var state_31515__$1 = state_31515;
var statearr_31518_33529 = state_31515__$1;
(statearr_31518_33529[(2)] = null);

(statearr_31518_33529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (4))){
var inst_31492 = (state_31515[(7)]);
var inst_31492__$1 = (state_31515[(2)]);
var inst_31493 = (inst_31492__$1 == null);
var state_31515__$1 = (function (){var statearr_31519 = state_31515;
(statearr_31519[(7)] = inst_31492__$1);

return statearr_31519;
})();
if(cljs.core.truth_(inst_31493)){
var statearr_31520_33530 = state_31515__$1;
(statearr_31520_33530[(1)] = (5));

} else {
var statearr_31521_33531 = state_31515__$1;
(statearr_31521_33531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (13))){
var state_31515__$1 = state_31515;
var statearr_31522_33532 = state_31515__$1;
(statearr_31522_33532[(2)] = null);

(statearr_31522_33532[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (6))){
var inst_31492 = (state_31515[(7)]);
var inst_31498 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31492) : p.call(null,inst_31492));
var state_31515__$1 = state_31515;
if(cljs.core.truth_(inst_31498)){
var statearr_31523_33533 = state_31515__$1;
(statearr_31523_33533[(1)] = (9));

} else {
var statearr_31532_33534 = state_31515__$1;
(statearr_31532_33534[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (3))){
var inst_31513 = (state_31515[(2)]);
var state_31515__$1 = state_31515;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31515__$1,inst_31513);
} else {
if((state_val_31516 === (12))){
var state_31515__$1 = state_31515;
var statearr_31533_33535 = state_31515__$1;
(statearr_31533_33535[(2)] = null);

(statearr_31533_33535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (2))){
var state_31515__$1 = state_31515;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31515__$1,(4),ch);
} else {
if((state_val_31516 === (11))){
var inst_31492 = (state_31515[(7)]);
var inst_31502 = (state_31515[(2)]);
var state_31515__$1 = state_31515;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31515__$1,(8),inst_31502,inst_31492);
} else {
if((state_val_31516 === (9))){
var state_31515__$1 = state_31515;
var statearr_31535_33536 = state_31515__$1;
(statearr_31535_33536[(2)] = tc);

(statearr_31535_33536[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (5))){
var inst_31495 = cljs.core.async.close_BANG_(tc);
var inst_31496 = cljs.core.async.close_BANG_(fc);
var state_31515__$1 = (function (){var statearr_31537 = state_31515;
(statearr_31537[(8)] = inst_31495);

return statearr_31537;
})();
var statearr_31538_33542 = state_31515__$1;
(statearr_31538_33542[(2)] = inst_31496);

(statearr_31538_33542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (14))){
var inst_31509 = (state_31515[(2)]);
var state_31515__$1 = state_31515;
var statearr_31539_33543 = state_31515__$1;
(statearr_31539_33543[(2)] = inst_31509);

(statearr_31539_33543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (10))){
var state_31515__$1 = state_31515;
var statearr_31540_33544 = state_31515__$1;
(statearr_31540_33544[(2)] = fc);

(statearr_31540_33544[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (8))){
var inst_31504 = (state_31515[(2)]);
var state_31515__$1 = state_31515;
if(cljs.core.truth_(inst_31504)){
var statearr_31541_33545 = state_31515__$1;
(statearr_31541_33545[(1)] = (12));

} else {
var statearr_31542_33546 = state_31515__$1;
(statearr_31542_33546[(1)] = (13));

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
var cljs$core$async$state_machine__30759__auto__ = null;
var cljs$core$async$state_machine__30759__auto____0 = (function (){
var statearr_31543 = [null,null,null,null,null,null,null,null,null];
(statearr_31543[(0)] = cljs$core$async$state_machine__30759__auto__);

(statearr_31543[(1)] = (1));

return statearr_31543;
});
var cljs$core$async$state_machine__30759__auto____1 = (function (state_31515){
while(true){
var ret_value__30760__auto__ = (function (){try{while(true){
var result__30761__auto__ = switch__30758__auto__(state_31515);
if(cljs.core.keyword_identical_QMARK_(result__30761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30761__auto__;
}
break;
}
}catch (e31544){var ex__30762__auto__ = e31544;
var statearr_31545_33547 = state_31515;
(statearr_31545_33547[(2)] = ex__30762__auto__);


if(cljs.core.seq((state_31515[(4)]))){
var statearr_31546_33548 = state_31515;
(statearr_31546_33548[(1)] = cljs.core.first((state_31515[(4)])));

} else {
throw ex__30762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33549 = state_31515;
state_31515 = G__33549;
continue;
} else {
return ret_value__30760__auto__;
}
break;
}
});
cljs$core$async$state_machine__30759__auto__ = function(state_31515){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30759__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30759__auto____1.call(this,state_31515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30759__auto____0;
cljs$core$async$state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30759__auto____1;
return cljs$core$async$state_machine__30759__auto__;
})()
})();
var state__30932__auto__ = (function (){var statearr_31547 = f__30931__auto__();
(statearr_31547[(6)] = c__30930__auto___33522);

return statearr_31547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30932__auto__);
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
var c__30930__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30931__auto__ = (function (){var switch__30758__auto__ = (function (state_31572){
var state_val_31573 = (state_31572[(1)]);
if((state_val_31573 === (7))){
var inst_31568 = (state_31572[(2)]);
var state_31572__$1 = state_31572;
var statearr_31576_33551 = state_31572__$1;
(statearr_31576_33551[(2)] = inst_31568);

(statearr_31576_33551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31573 === (1))){
var inst_31548 = init;
var inst_31549 = inst_31548;
var state_31572__$1 = (function (){var statearr_31578 = state_31572;
(statearr_31578[(7)] = inst_31549);

return statearr_31578;
})();
var statearr_31579_33558 = state_31572__$1;
(statearr_31579_33558[(2)] = null);

(statearr_31579_33558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31573 === (4))){
var inst_31552 = (state_31572[(8)]);
var inst_31552__$1 = (state_31572[(2)]);
var inst_31553 = (inst_31552__$1 == null);
var state_31572__$1 = (function (){var statearr_31580 = state_31572;
(statearr_31580[(8)] = inst_31552__$1);

return statearr_31580;
})();
if(cljs.core.truth_(inst_31553)){
var statearr_31581_33559 = state_31572__$1;
(statearr_31581_33559[(1)] = (5));

} else {
var statearr_31582_33560 = state_31572__$1;
(statearr_31582_33560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31573 === (6))){
var inst_31552 = (state_31572[(8)]);
var inst_31549 = (state_31572[(7)]);
var inst_31556 = (state_31572[(9)]);
var inst_31556__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31549,inst_31552) : f.call(null,inst_31549,inst_31552));
var inst_31557 = cljs.core.reduced_QMARK_(inst_31556__$1);
var state_31572__$1 = (function (){var statearr_31583 = state_31572;
(statearr_31583[(9)] = inst_31556__$1);

return statearr_31583;
})();
if(inst_31557){
var statearr_31586_33561 = state_31572__$1;
(statearr_31586_33561[(1)] = (8));

} else {
var statearr_31587_33562 = state_31572__$1;
(statearr_31587_33562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31573 === (3))){
var inst_31570 = (state_31572[(2)]);
var state_31572__$1 = state_31572;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31572__$1,inst_31570);
} else {
if((state_val_31573 === (2))){
var state_31572__$1 = state_31572;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31572__$1,(4),ch);
} else {
if((state_val_31573 === (9))){
var inst_31556 = (state_31572[(9)]);
var inst_31549 = inst_31556;
var state_31572__$1 = (function (){var statearr_31588 = state_31572;
(statearr_31588[(7)] = inst_31549);

return statearr_31588;
})();
var statearr_31589_33563 = state_31572__$1;
(statearr_31589_33563[(2)] = null);

(statearr_31589_33563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31573 === (5))){
var inst_31549 = (state_31572[(7)]);
var state_31572__$1 = state_31572;
var statearr_31590_33564 = state_31572__$1;
(statearr_31590_33564[(2)] = inst_31549);

(statearr_31590_33564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31573 === (10))){
var inst_31566 = (state_31572[(2)]);
var state_31572__$1 = state_31572;
var statearr_31591_33565 = state_31572__$1;
(statearr_31591_33565[(2)] = inst_31566);

(statearr_31591_33565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31573 === (8))){
var inst_31556 = (state_31572[(9)]);
var inst_31562 = cljs.core.deref(inst_31556);
var state_31572__$1 = state_31572;
var statearr_31592_33569 = state_31572__$1;
(statearr_31592_33569[(2)] = inst_31562);

(statearr_31592_33569[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__30759__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30759__auto____0 = (function (){
var statearr_31597 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31597[(0)] = cljs$core$async$reduce_$_state_machine__30759__auto__);

(statearr_31597[(1)] = (1));

return statearr_31597;
});
var cljs$core$async$reduce_$_state_machine__30759__auto____1 = (function (state_31572){
while(true){
var ret_value__30760__auto__ = (function (){try{while(true){
var result__30761__auto__ = switch__30758__auto__(state_31572);
if(cljs.core.keyword_identical_QMARK_(result__30761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30761__auto__;
}
break;
}
}catch (e31598){var ex__30762__auto__ = e31598;
var statearr_31599_33570 = state_31572;
(statearr_31599_33570[(2)] = ex__30762__auto__);


if(cljs.core.seq((state_31572[(4)]))){
var statearr_31600_33571 = state_31572;
(statearr_31600_33571[(1)] = cljs.core.first((state_31572[(4)])));

} else {
throw ex__30762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33572 = state_31572;
state_31572 = G__33572;
continue;
} else {
return ret_value__30760__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30759__auto__ = function(state_31572){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30759__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30759__auto____1.call(this,state_31572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30759__auto____0;
cljs$core$async$reduce_$_state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30759__auto____1;
return cljs$core$async$reduce_$_state_machine__30759__auto__;
})()
})();
var state__30932__auto__ = (function (){var statearr_31606 = f__30931__auto__();
(statearr_31606[(6)] = c__30930__auto__);

return statearr_31606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30932__auto__);
}));

return c__30930__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30930__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30931__auto__ = (function (){var switch__30758__auto__ = (function (state_31620){
var state_val_31621 = (state_31620[(1)]);
if((state_val_31621 === (1))){
var inst_31615 = cljs.core.async.reduce(f__$1,init,ch);
var state_31620__$1 = state_31620;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31620__$1,(2),inst_31615);
} else {
if((state_val_31621 === (2))){
var inst_31617 = (state_31620[(2)]);
var inst_31618 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31617) : f__$1.call(null,inst_31617));
var state_31620__$1 = state_31620;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31620__$1,inst_31618);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30759__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30759__auto____0 = (function (){
var statearr_31626 = [null,null,null,null,null,null,null];
(statearr_31626[(0)] = cljs$core$async$transduce_$_state_machine__30759__auto__);

(statearr_31626[(1)] = (1));

return statearr_31626;
});
var cljs$core$async$transduce_$_state_machine__30759__auto____1 = (function (state_31620){
while(true){
var ret_value__30760__auto__ = (function (){try{while(true){
var result__30761__auto__ = switch__30758__auto__(state_31620);
if(cljs.core.keyword_identical_QMARK_(result__30761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30761__auto__;
}
break;
}
}catch (e31628){var ex__30762__auto__ = e31628;
var statearr_31633_33581 = state_31620;
(statearr_31633_33581[(2)] = ex__30762__auto__);


if(cljs.core.seq((state_31620[(4)]))){
var statearr_31634_33582 = state_31620;
(statearr_31634_33582[(1)] = cljs.core.first((state_31620[(4)])));

} else {
throw ex__30762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33583 = state_31620;
state_31620 = G__33583;
continue;
} else {
return ret_value__30760__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30759__auto__ = function(state_31620){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30759__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30759__auto____1.call(this,state_31620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30759__auto____0;
cljs$core$async$transduce_$_state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30759__auto____1;
return cljs$core$async$transduce_$_state_machine__30759__auto__;
})()
})();
var state__30932__auto__ = (function (){var statearr_31635 = f__30931__auto__();
(statearr_31635[(6)] = c__30930__auto__);

return statearr_31635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30932__auto__);
}));

return c__30930__auto__;
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
var G__31637 = arguments.length;
switch (G__31637) {
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
var c__30930__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30931__auto__ = (function (){var switch__30758__auto__ = (function (state_31662){
var state_val_31663 = (state_31662[(1)]);
if((state_val_31663 === (7))){
var inst_31644 = (state_31662[(2)]);
var state_31662__$1 = state_31662;
var statearr_31664_33585 = state_31662__$1;
(statearr_31664_33585[(2)] = inst_31644);

(statearr_31664_33585[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (1))){
var inst_31638 = cljs.core.seq(coll);
var inst_31639 = inst_31638;
var state_31662__$1 = (function (){var statearr_31665 = state_31662;
(statearr_31665[(7)] = inst_31639);

return statearr_31665;
})();
var statearr_31666_33586 = state_31662__$1;
(statearr_31666_33586[(2)] = null);

(statearr_31666_33586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (4))){
var inst_31639 = (state_31662[(7)]);
var inst_31642 = cljs.core.first(inst_31639);
var state_31662__$1 = state_31662;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31662__$1,(7),ch,inst_31642);
} else {
if((state_val_31663 === (13))){
var inst_31656 = (state_31662[(2)]);
var state_31662__$1 = state_31662;
var statearr_31669_33591 = state_31662__$1;
(statearr_31669_33591[(2)] = inst_31656);

(statearr_31669_33591[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (6))){
var inst_31647 = (state_31662[(2)]);
var state_31662__$1 = state_31662;
if(cljs.core.truth_(inst_31647)){
var statearr_31672_33592 = state_31662__$1;
(statearr_31672_33592[(1)] = (8));

} else {
var statearr_31673_33593 = state_31662__$1;
(statearr_31673_33593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (3))){
var inst_31660 = (state_31662[(2)]);
var state_31662__$1 = state_31662;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31662__$1,inst_31660);
} else {
if((state_val_31663 === (12))){
var state_31662__$1 = state_31662;
var statearr_31676_33594 = state_31662__$1;
(statearr_31676_33594[(2)] = null);

(statearr_31676_33594[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (2))){
var inst_31639 = (state_31662[(7)]);
var state_31662__$1 = state_31662;
if(cljs.core.truth_(inst_31639)){
var statearr_31678_33595 = state_31662__$1;
(statearr_31678_33595[(1)] = (4));

} else {
var statearr_31681_33596 = state_31662__$1;
(statearr_31681_33596[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (11))){
var inst_31653 = cljs.core.async.close_BANG_(ch);
var state_31662__$1 = state_31662;
var statearr_31684_33597 = state_31662__$1;
(statearr_31684_33597[(2)] = inst_31653);

(statearr_31684_33597[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (9))){
var state_31662__$1 = state_31662;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31685_33598 = state_31662__$1;
(statearr_31685_33598[(1)] = (11));

} else {
var statearr_31686_33599 = state_31662__$1;
(statearr_31686_33599[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (5))){
var inst_31639 = (state_31662[(7)]);
var state_31662__$1 = state_31662;
var statearr_31687_33600 = state_31662__$1;
(statearr_31687_33600[(2)] = inst_31639);

(statearr_31687_33600[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (10))){
var inst_31658 = (state_31662[(2)]);
var state_31662__$1 = state_31662;
var statearr_31688_33601 = state_31662__$1;
(statearr_31688_33601[(2)] = inst_31658);

(statearr_31688_33601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (8))){
var inst_31639 = (state_31662[(7)]);
var inst_31649 = cljs.core.next(inst_31639);
var inst_31639__$1 = inst_31649;
var state_31662__$1 = (function (){var statearr_31689 = state_31662;
(statearr_31689[(7)] = inst_31639__$1);

return statearr_31689;
})();
var statearr_31690_33604 = state_31662__$1;
(statearr_31690_33604[(2)] = null);

(statearr_31690_33604[(1)] = (2));


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
var cljs$core$async$state_machine__30759__auto__ = null;
var cljs$core$async$state_machine__30759__auto____0 = (function (){
var statearr_31691 = [null,null,null,null,null,null,null,null];
(statearr_31691[(0)] = cljs$core$async$state_machine__30759__auto__);

(statearr_31691[(1)] = (1));

return statearr_31691;
});
var cljs$core$async$state_machine__30759__auto____1 = (function (state_31662){
while(true){
var ret_value__30760__auto__ = (function (){try{while(true){
var result__30761__auto__ = switch__30758__auto__(state_31662);
if(cljs.core.keyword_identical_QMARK_(result__30761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30761__auto__;
}
break;
}
}catch (e31692){var ex__30762__auto__ = e31692;
var statearr_31693_33605 = state_31662;
(statearr_31693_33605[(2)] = ex__30762__auto__);


if(cljs.core.seq((state_31662[(4)]))){
var statearr_31694_33606 = state_31662;
(statearr_31694_33606[(1)] = cljs.core.first((state_31662[(4)])));

} else {
throw ex__30762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33607 = state_31662;
state_31662 = G__33607;
continue;
} else {
return ret_value__30760__auto__;
}
break;
}
});
cljs$core$async$state_machine__30759__auto__ = function(state_31662){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30759__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30759__auto____1.call(this,state_31662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30759__auto____0;
cljs$core$async$state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30759__auto____1;
return cljs$core$async$state_machine__30759__auto__;
})()
})();
var state__30932__auto__ = (function (){var statearr_31695 = f__30931__auto__();
(statearr_31695[(6)] = c__30930__auto__);

return statearr_31695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30932__auto__);
}));

return c__30930__auto__;
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
var G__31697 = arguments.length;
switch (G__31697) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_33609 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_33609(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33629 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_33629(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33630 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_33630(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33633 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_33633(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31736 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31736 = (function (ch,cs,meta31737){
this.ch = ch;
this.cs = cs;
this.meta31737 = meta31737;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31738,meta31737__$1){
var self__ = this;
var _31738__$1 = this;
return (new cljs.core.async.t_cljs$core$async31736(self__.ch,self__.cs,meta31737__$1));
}));

(cljs.core.async.t_cljs$core$async31736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31738){
var self__ = this;
var _31738__$1 = this;
return self__.meta31737;
}));

(cljs.core.async.t_cljs$core$async31736.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31736.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31736.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31736.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31736.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31736.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31736.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31737","meta31737",-1390292890,null)], null);
}));

(cljs.core.async.t_cljs$core$async31736.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31736.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31736");

(cljs.core.async.t_cljs$core$async31736.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31736");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31736.
 */
cljs.core.async.__GT_t_cljs$core$async31736 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31736(ch__$1,cs__$1,meta31737){
return (new cljs.core.async.t_cljs$core$async31736(ch__$1,cs__$1,meta31737));
});

}

return (new cljs.core.async.t_cljs$core$async31736(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30930__auto___33643 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30931__auto__ = (function (){var switch__30758__auto__ = (function (state_31884){
var state_val_31885 = (state_31884[(1)]);
if((state_val_31885 === (7))){
var inst_31880 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
var statearr_31886_33644 = state_31884__$1;
(statearr_31886_33644[(2)] = inst_31880);

(statearr_31886_33644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (20))){
var inst_31778 = (state_31884[(7)]);
var inst_31790 = cljs.core.first(inst_31778);
var inst_31791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31790,(0),null);
var inst_31792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31790,(1),null);
var state_31884__$1 = (function (){var statearr_31888 = state_31884;
(statearr_31888[(8)] = inst_31791);

return statearr_31888;
})();
if(cljs.core.truth_(inst_31792)){
var statearr_31889_33645 = state_31884__$1;
(statearr_31889_33645[(1)] = (22));

} else {
var statearr_31892_33652 = state_31884__$1;
(statearr_31892_33652[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (27))){
var inst_31823 = (state_31884[(9)]);
var inst_31825 = (state_31884[(10)]);
var inst_31831 = (state_31884[(11)]);
var inst_31743 = (state_31884[(12)]);
var inst_31831__$1 = cljs.core._nth(inst_31823,inst_31825);
var inst_31832 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31831__$1,inst_31743,done);
var state_31884__$1 = (function (){var statearr_31894 = state_31884;
(statearr_31894[(11)] = inst_31831__$1);

return statearr_31894;
})();
if(cljs.core.truth_(inst_31832)){
var statearr_31895_33653 = state_31884__$1;
(statearr_31895_33653[(1)] = (30));

} else {
var statearr_31896_33654 = state_31884__$1;
(statearr_31896_33654[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (1))){
var state_31884__$1 = state_31884;
var statearr_31897_33655 = state_31884__$1;
(statearr_31897_33655[(2)] = null);

(statearr_31897_33655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (24))){
var inst_31778 = (state_31884[(7)]);
var inst_31797 = (state_31884[(2)]);
var inst_31798 = cljs.core.next(inst_31778);
var inst_31752 = inst_31798;
var inst_31753 = null;
var inst_31754 = (0);
var inst_31755 = (0);
var state_31884__$1 = (function (){var statearr_31898 = state_31884;
(statearr_31898[(13)] = inst_31797);

(statearr_31898[(14)] = inst_31752);

(statearr_31898[(15)] = inst_31755);

(statearr_31898[(16)] = inst_31754);

(statearr_31898[(17)] = inst_31753);

return statearr_31898;
})();
var statearr_31899_33656 = state_31884__$1;
(statearr_31899_33656[(2)] = null);

(statearr_31899_33656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (39))){
var state_31884__$1 = state_31884;
var statearr_31907_33657 = state_31884__$1;
(statearr_31907_33657[(2)] = null);

(statearr_31907_33657[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (4))){
var inst_31743 = (state_31884[(12)]);
var inst_31743__$1 = (state_31884[(2)]);
var inst_31744 = (inst_31743__$1 == null);
var state_31884__$1 = (function (){var statearr_31908 = state_31884;
(statearr_31908[(12)] = inst_31743__$1);

return statearr_31908;
})();
if(cljs.core.truth_(inst_31744)){
var statearr_31909_33658 = state_31884__$1;
(statearr_31909_33658[(1)] = (5));

} else {
var statearr_31910_33659 = state_31884__$1;
(statearr_31910_33659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (15))){
var inst_31752 = (state_31884[(14)]);
var inst_31755 = (state_31884[(15)]);
var inst_31754 = (state_31884[(16)]);
var inst_31753 = (state_31884[(17)]);
var inst_31774 = (state_31884[(2)]);
var inst_31775 = (inst_31755 + (1));
var tmp31904 = inst_31752;
var tmp31905 = inst_31754;
var tmp31906 = inst_31753;
var inst_31752__$1 = tmp31904;
var inst_31753__$1 = tmp31906;
var inst_31754__$1 = tmp31905;
var inst_31755__$1 = inst_31775;
var state_31884__$1 = (function (){var statearr_31911 = state_31884;
(statearr_31911[(14)] = inst_31752__$1);

(statearr_31911[(15)] = inst_31755__$1);

(statearr_31911[(16)] = inst_31754__$1);

(statearr_31911[(18)] = inst_31774);

(statearr_31911[(17)] = inst_31753__$1);

return statearr_31911;
})();
var statearr_31912_33671 = state_31884__$1;
(statearr_31912_33671[(2)] = null);

(statearr_31912_33671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (21))){
var inst_31801 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
var statearr_31916_33672 = state_31884__$1;
(statearr_31916_33672[(2)] = inst_31801);

(statearr_31916_33672[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (31))){
var inst_31831 = (state_31884[(11)]);
var inst_31835 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31831);
var state_31884__$1 = state_31884;
var statearr_31918_33673 = state_31884__$1;
(statearr_31918_33673[(2)] = inst_31835);

(statearr_31918_33673[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (32))){
var inst_31823 = (state_31884[(9)]);
var inst_31822 = (state_31884[(19)]);
var inst_31825 = (state_31884[(10)]);
var inst_31824 = (state_31884[(20)]);
var inst_31837 = (state_31884[(2)]);
var inst_31838 = (inst_31825 + (1));
var tmp31913 = inst_31823;
var tmp31914 = inst_31822;
var tmp31915 = inst_31824;
var inst_31822__$1 = tmp31914;
var inst_31823__$1 = tmp31913;
var inst_31824__$1 = tmp31915;
var inst_31825__$1 = inst_31838;
var state_31884__$1 = (function (){var statearr_31919 = state_31884;
(statearr_31919[(9)] = inst_31823__$1);

(statearr_31919[(19)] = inst_31822__$1);

(statearr_31919[(10)] = inst_31825__$1);

(statearr_31919[(20)] = inst_31824__$1);

(statearr_31919[(21)] = inst_31837);

return statearr_31919;
})();
var statearr_31920_33674 = state_31884__$1;
(statearr_31920_33674[(2)] = null);

(statearr_31920_33674[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (40))){
var inst_31853 = (state_31884[(22)]);
var inst_31857 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31853);
var state_31884__$1 = state_31884;
var statearr_31921_33675 = state_31884__$1;
(statearr_31921_33675[(2)] = inst_31857);

(statearr_31921_33675[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (33))){
var inst_31843 = (state_31884[(23)]);
var inst_31846 = cljs.core.chunked_seq_QMARK_(inst_31843);
var state_31884__$1 = state_31884;
if(inst_31846){
var statearr_31922_33677 = state_31884__$1;
(statearr_31922_33677[(1)] = (36));

} else {
var statearr_31924_33678 = state_31884__$1;
(statearr_31924_33678[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (13))){
var inst_31766 = (state_31884[(24)]);
var inst_31771 = cljs.core.async.close_BANG_(inst_31766);
var state_31884__$1 = state_31884;
var statearr_31925_33679 = state_31884__$1;
(statearr_31925_33679[(2)] = inst_31771);

(statearr_31925_33679[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (22))){
var inst_31791 = (state_31884[(8)]);
var inst_31794 = cljs.core.async.close_BANG_(inst_31791);
var state_31884__$1 = state_31884;
var statearr_31926_33680 = state_31884__$1;
(statearr_31926_33680[(2)] = inst_31794);

(statearr_31926_33680[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (36))){
var inst_31843 = (state_31884[(23)]);
var inst_31848 = cljs.core.chunk_first(inst_31843);
var inst_31849 = cljs.core.chunk_rest(inst_31843);
var inst_31850 = cljs.core.count(inst_31848);
var inst_31822 = inst_31849;
var inst_31823 = inst_31848;
var inst_31824 = inst_31850;
var inst_31825 = (0);
var state_31884__$1 = (function (){var statearr_31927 = state_31884;
(statearr_31927[(9)] = inst_31823);

(statearr_31927[(19)] = inst_31822);

(statearr_31927[(10)] = inst_31825);

(statearr_31927[(20)] = inst_31824);

return statearr_31927;
})();
var statearr_31928_33681 = state_31884__$1;
(statearr_31928_33681[(2)] = null);

(statearr_31928_33681[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (41))){
var inst_31843 = (state_31884[(23)]);
var inst_31859 = (state_31884[(2)]);
var inst_31860 = cljs.core.next(inst_31843);
var inst_31822 = inst_31860;
var inst_31823 = null;
var inst_31824 = (0);
var inst_31825 = (0);
var state_31884__$1 = (function (){var statearr_31929 = state_31884;
(statearr_31929[(9)] = inst_31823);

(statearr_31929[(19)] = inst_31822);

(statearr_31929[(10)] = inst_31825);

(statearr_31929[(20)] = inst_31824);

(statearr_31929[(25)] = inst_31859);

return statearr_31929;
})();
var statearr_31930_33682 = state_31884__$1;
(statearr_31930_33682[(2)] = null);

(statearr_31930_33682[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (43))){
var state_31884__$1 = state_31884;
var statearr_31932_33683 = state_31884__$1;
(statearr_31932_33683[(2)] = null);

(statearr_31932_33683[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (29))){
var inst_31868 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
var statearr_31933_33684 = state_31884__$1;
(statearr_31933_33684[(2)] = inst_31868);

(statearr_31933_33684[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (44))){
var inst_31877 = (state_31884[(2)]);
var state_31884__$1 = (function (){var statearr_31934 = state_31884;
(statearr_31934[(26)] = inst_31877);

return statearr_31934;
})();
var statearr_31935_33685 = state_31884__$1;
(statearr_31935_33685[(2)] = null);

(statearr_31935_33685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (6))){
var inst_31814 = (state_31884[(27)]);
var inst_31813 = cljs.core.deref(cs);
var inst_31814__$1 = cljs.core.keys(inst_31813);
var inst_31815 = cljs.core.count(inst_31814__$1);
var inst_31816 = cljs.core.reset_BANG_(dctr,inst_31815);
var inst_31821 = cljs.core.seq(inst_31814__$1);
var inst_31822 = inst_31821;
var inst_31823 = null;
var inst_31824 = (0);
var inst_31825 = (0);
var state_31884__$1 = (function (){var statearr_31936 = state_31884;
(statearr_31936[(9)] = inst_31823);

(statearr_31936[(19)] = inst_31822);

(statearr_31936[(10)] = inst_31825);

(statearr_31936[(27)] = inst_31814__$1);

(statearr_31936[(20)] = inst_31824);

(statearr_31936[(28)] = inst_31816);

return statearr_31936;
})();
var statearr_31937_33686 = state_31884__$1;
(statearr_31937_33686[(2)] = null);

(statearr_31937_33686[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (28))){
var inst_31822 = (state_31884[(19)]);
var inst_31843 = (state_31884[(23)]);
var inst_31843__$1 = cljs.core.seq(inst_31822);
var state_31884__$1 = (function (){var statearr_31938 = state_31884;
(statearr_31938[(23)] = inst_31843__$1);

return statearr_31938;
})();
if(inst_31843__$1){
var statearr_31939_33690 = state_31884__$1;
(statearr_31939_33690[(1)] = (33));

} else {
var statearr_31940_33691 = state_31884__$1;
(statearr_31940_33691[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (25))){
var inst_31825 = (state_31884[(10)]);
var inst_31824 = (state_31884[(20)]);
var inst_31827 = (inst_31825 < inst_31824);
var inst_31828 = inst_31827;
var state_31884__$1 = state_31884;
if(cljs.core.truth_(inst_31828)){
var statearr_31941_33692 = state_31884__$1;
(statearr_31941_33692[(1)] = (27));

} else {
var statearr_31942_33693 = state_31884__$1;
(statearr_31942_33693[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (34))){
var state_31884__$1 = state_31884;
var statearr_31943_33694 = state_31884__$1;
(statearr_31943_33694[(2)] = null);

(statearr_31943_33694[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (17))){
var state_31884__$1 = state_31884;
var statearr_31944_33695 = state_31884__$1;
(statearr_31944_33695[(2)] = null);

(statearr_31944_33695[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (3))){
var inst_31882 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31884__$1,inst_31882);
} else {
if((state_val_31885 === (12))){
var inst_31807 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
var statearr_31945_33696 = state_31884__$1;
(statearr_31945_33696[(2)] = inst_31807);

(statearr_31945_33696[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (2))){
var state_31884__$1 = state_31884;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31884__$1,(4),ch);
} else {
if((state_val_31885 === (23))){
var state_31884__$1 = state_31884;
var statearr_31946_33697 = state_31884__$1;
(statearr_31946_33697[(2)] = null);

(statearr_31946_33697[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (35))){
var inst_31866 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
var statearr_31947_33698 = state_31884__$1;
(statearr_31947_33698[(2)] = inst_31866);

(statearr_31947_33698[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (19))){
var inst_31778 = (state_31884[(7)]);
var inst_31782 = cljs.core.chunk_first(inst_31778);
var inst_31783 = cljs.core.chunk_rest(inst_31778);
var inst_31784 = cljs.core.count(inst_31782);
var inst_31752 = inst_31783;
var inst_31753 = inst_31782;
var inst_31754 = inst_31784;
var inst_31755 = (0);
var state_31884__$1 = (function (){var statearr_31949 = state_31884;
(statearr_31949[(14)] = inst_31752);

(statearr_31949[(15)] = inst_31755);

(statearr_31949[(16)] = inst_31754);

(statearr_31949[(17)] = inst_31753);

return statearr_31949;
})();
var statearr_31951_33700 = state_31884__$1;
(statearr_31951_33700[(2)] = null);

(statearr_31951_33700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (11))){
var inst_31752 = (state_31884[(14)]);
var inst_31778 = (state_31884[(7)]);
var inst_31778__$1 = cljs.core.seq(inst_31752);
var state_31884__$1 = (function (){var statearr_31952 = state_31884;
(statearr_31952[(7)] = inst_31778__$1);

return statearr_31952;
})();
if(inst_31778__$1){
var statearr_31955_33701 = state_31884__$1;
(statearr_31955_33701[(1)] = (16));

} else {
var statearr_31956_33702 = state_31884__$1;
(statearr_31956_33702[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (9))){
var inst_31811 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
var statearr_31957_33703 = state_31884__$1;
(statearr_31957_33703[(2)] = inst_31811);

(statearr_31957_33703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (5))){
var inst_31750 = cljs.core.deref(cs);
var inst_31751 = cljs.core.seq(inst_31750);
var inst_31752 = inst_31751;
var inst_31753 = null;
var inst_31754 = (0);
var inst_31755 = (0);
var state_31884__$1 = (function (){var statearr_31958 = state_31884;
(statearr_31958[(14)] = inst_31752);

(statearr_31958[(15)] = inst_31755);

(statearr_31958[(16)] = inst_31754);

(statearr_31958[(17)] = inst_31753);

return statearr_31958;
})();
var statearr_31959_33704 = state_31884__$1;
(statearr_31959_33704[(2)] = null);

(statearr_31959_33704[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (14))){
var state_31884__$1 = state_31884;
var statearr_31960_33705 = state_31884__$1;
(statearr_31960_33705[(2)] = null);

(statearr_31960_33705[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (45))){
var inst_31874 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
var statearr_31961_33706 = state_31884__$1;
(statearr_31961_33706[(2)] = inst_31874);

(statearr_31961_33706[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (26))){
var inst_31814 = (state_31884[(27)]);
var inst_31870 = (state_31884[(2)]);
var inst_31871 = cljs.core.seq(inst_31814);
var state_31884__$1 = (function (){var statearr_31962 = state_31884;
(statearr_31962[(29)] = inst_31870);

return statearr_31962;
})();
if(inst_31871){
var statearr_31963_33707 = state_31884__$1;
(statearr_31963_33707[(1)] = (42));

} else {
var statearr_31964_33708 = state_31884__$1;
(statearr_31964_33708[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (16))){
var inst_31778 = (state_31884[(7)]);
var inst_31780 = cljs.core.chunked_seq_QMARK_(inst_31778);
var state_31884__$1 = state_31884;
if(inst_31780){
var statearr_31965_33714 = state_31884__$1;
(statearr_31965_33714[(1)] = (19));

} else {
var statearr_31966_33715 = state_31884__$1;
(statearr_31966_33715[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (38))){
var inst_31863 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
var statearr_31969_33716 = state_31884__$1;
(statearr_31969_33716[(2)] = inst_31863);

(statearr_31969_33716[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (30))){
var state_31884__$1 = state_31884;
var statearr_31970_33717 = state_31884__$1;
(statearr_31970_33717[(2)] = null);

(statearr_31970_33717[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (10))){
var inst_31755 = (state_31884[(15)]);
var inst_31753 = (state_31884[(17)]);
var inst_31765 = cljs.core._nth(inst_31753,inst_31755);
var inst_31766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31765,(0),null);
var inst_31767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31765,(1),null);
var state_31884__$1 = (function (){var statearr_31971 = state_31884;
(statearr_31971[(24)] = inst_31766);

return statearr_31971;
})();
if(cljs.core.truth_(inst_31767)){
var statearr_31972_33718 = state_31884__$1;
(statearr_31972_33718[(1)] = (13));

} else {
var statearr_31973_33719 = state_31884__$1;
(statearr_31973_33719[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (18))){
var inst_31804 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
var statearr_31978_33720 = state_31884__$1;
(statearr_31978_33720[(2)] = inst_31804);

(statearr_31978_33720[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (42))){
var state_31884__$1 = state_31884;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31884__$1,(45),dchan);
} else {
if((state_val_31885 === (37))){
var inst_31843 = (state_31884[(23)]);
var inst_31853 = (state_31884[(22)]);
var inst_31743 = (state_31884[(12)]);
var inst_31853__$1 = cljs.core.first(inst_31843);
var inst_31854 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31853__$1,inst_31743,done);
var state_31884__$1 = (function (){var statearr_31981 = state_31884;
(statearr_31981[(22)] = inst_31853__$1);

return statearr_31981;
})();
if(cljs.core.truth_(inst_31854)){
var statearr_31982_33722 = state_31884__$1;
(statearr_31982_33722[(1)] = (39));

} else {
var statearr_31985_33723 = state_31884__$1;
(statearr_31985_33723[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (8))){
var inst_31755 = (state_31884[(15)]);
var inst_31754 = (state_31884[(16)]);
var inst_31759 = (inst_31755 < inst_31754);
var inst_31760 = inst_31759;
var state_31884__$1 = state_31884;
if(cljs.core.truth_(inst_31760)){
var statearr_31986_33724 = state_31884__$1;
(statearr_31986_33724[(1)] = (10));

} else {
var statearr_31987_33729 = state_31884__$1;
(statearr_31987_33729[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__30759__auto__ = null;
var cljs$core$async$mult_$_state_machine__30759__auto____0 = (function (){
var statearr_32000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32000[(0)] = cljs$core$async$mult_$_state_machine__30759__auto__);

(statearr_32000[(1)] = (1));

return statearr_32000;
});
var cljs$core$async$mult_$_state_machine__30759__auto____1 = (function (state_31884){
while(true){
var ret_value__30760__auto__ = (function (){try{while(true){
var result__30761__auto__ = switch__30758__auto__(state_31884);
if(cljs.core.keyword_identical_QMARK_(result__30761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30761__auto__;
}
break;
}
}catch (e32001){var ex__30762__auto__ = e32001;
var statearr_32002_33730 = state_31884;
(statearr_32002_33730[(2)] = ex__30762__auto__);


if(cljs.core.seq((state_31884[(4)]))){
var statearr_32003_33731 = state_31884;
(statearr_32003_33731[(1)] = cljs.core.first((state_31884[(4)])));

} else {
throw ex__30762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33732 = state_31884;
state_31884 = G__33732;
continue;
} else {
return ret_value__30760__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30759__auto__ = function(state_31884){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30759__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30759__auto____1.call(this,state_31884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30759__auto____0;
cljs$core$async$mult_$_state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30759__auto____1;
return cljs$core$async$mult_$_state_machine__30759__auto__;
})()
})();
var state__30932__auto__ = (function (){var statearr_32004 = f__30931__auto__();
(statearr_32004[(6)] = c__30930__auto___33643);

return statearr_32004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30932__auto__);
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
var G__32013 = arguments.length;
switch (G__32013) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_33737 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_33737(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33738 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_33738(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33739 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33739(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33740 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_33740(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33742 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33742(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33743 = arguments.length;
var i__4737__auto___33744 = (0);
while(true){
if((i__4737__auto___33744 < len__4736__auto___33743)){
args__4742__auto__.push((arguments[i__4737__auto___33744]));

var G__33745 = (i__4737__auto___33744 + (1));
i__4737__auto___33744 = G__33745;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32078){
var map__32079 = p__32078;
var map__32079__$1 = (((((!((map__32079 == null))))?(((((map__32079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32079):map__32079);
var opts = map__32079__$1;
var statearr_32081_33746 = state;
(statearr_32081_33746[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32082_33747 = state;
(statearr_32082_33747[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_32093_33748 = state;
(statearr_32093_33748[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32071){
var G__32072 = cljs.core.first(seq32071);
var seq32071__$1 = cljs.core.next(seq32071);
var G__32073 = cljs.core.first(seq32071__$1);
var seq32071__$2 = cljs.core.next(seq32071__$1);
var G__32074 = cljs.core.first(seq32071__$2);
var seq32071__$3 = cljs.core.next(seq32071__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32072,G__32073,G__32074,seq32071__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32113 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32113 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32114){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32114 = meta32114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32115,meta32114__$1){
var self__ = this;
var _32115__$1 = this;
return (new cljs.core.async.t_cljs$core$async32113(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32114__$1));
}));

(cljs.core.async.t_cljs$core$async32113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32115){
var self__ = this;
var _32115__$1 = this;
return self__.meta32114;
}));

(cljs.core.async.t_cljs$core$async32113.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32113.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32113.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32113.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32113.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32113.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32113.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32113.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32113.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32114","meta32114",-1501481273,null)], null);
}));

(cljs.core.async.t_cljs$core$async32113.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32113");

(cljs.core.async.t_cljs$core$async32113.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32113");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32113.
 */
cljs.core.async.__GT_t_cljs$core$async32113 = (function cljs$core$async$mix_$___GT_t_cljs$core$async32113(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32114){
return (new cljs.core.async.t_cljs$core$async32113(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32114));
});

}

return (new cljs.core.async.t_cljs$core$async32113(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30930__auto___33775 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30931__auto__ = (function (){var switch__30758__auto__ = (function (state_32294){
var state_val_32295 = (state_32294[(1)]);
if((state_val_32295 === (7))){
var inst_32177 = (state_32294[(2)]);
var state_32294__$1 = state_32294;
var statearr_32302_33776 = state_32294__$1;
(statearr_32302_33776[(2)] = inst_32177);

(statearr_32302_33776[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (20))){
var inst_32189 = (state_32294[(7)]);
var state_32294__$1 = state_32294;
var statearr_32303_33783 = state_32294__$1;
(statearr_32303_33783[(2)] = inst_32189);

(statearr_32303_33783[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (27))){
var state_32294__$1 = state_32294;
var statearr_32306_33784 = state_32294__$1;
(statearr_32306_33784[(2)] = null);

(statearr_32306_33784[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (1))){
var inst_32164 = (state_32294[(8)]);
var inst_32164__$1 = calc_state();
var inst_32166 = (inst_32164__$1 == null);
var inst_32167 = cljs.core.not(inst_32166);
var state_32294__$1 = (function (){var statearr_32307 = state_32294;
(statearr_32307[(8)] = inst_32164__$1);

return statearr_32307;
})();
if(inst_32167){
var statearr_32308_33785 = state_32294__$1;
(statearr_32308_33785[(1)] = (2));

} else {
var statearr_32309_33786 = state_32294__$1;
(statearr_32309_33786[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (24))){
var inst_32218 = (state_32294[(9)]);
var inst_32240 = (state_32294[(10)]);
var inst_32256 = (state_32294[(11)]);
var inst_32256__$1 = (inst_32218.cljs$core$IFn$_invoke$arity$1 ? inst_32218.cljs$core$IFn$_invoke$arity$1(inst_32240) : inst_32218.call(null,inst_32240));
var state_32294__$1 = (function (){var statearr_32310 = state_32294;
(statearr_32310[(11)] = inst_32256__$1);

return statearr_32310;
})();
if(cljs.core.truth_(inst_32256__$1)){
var statearr_32311_33787 = state_32294__$1;
(statearr_32311_33787[(1)] = (29));

} else {
var statearr_32312_33788 = state_32294__$1;
(statearr_32312_33788[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (4))){
var inst_32180 = (state_32294[(2)]);
var state_32294__$1 = state_32294;
if(cljs.core.truth_(inst_32180)){
var statearr_32313_33789 = state_32294__$1;
(statearr_32313_33789[(1)] = (8));

} else {
var statearr_32314_33790 = state_32294__$1;
(statearr_32314_33790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (15))){
var inst_32212 = (state_32294[(2)]);
var state_32294__$1 = state_32294;
if(cljs.core.truth_(inst_32212)){
var statearr_32315_33791 = state_32294__$1;
(statearr_32315_33791[(1)] = (19));

} else {
var statearr_32316_33792 = state_32294__$1;
(statearr_32316_33792[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (21))){
var inst_32217 = (state_32294[(12)]);
var inst_32217__$1 = (state_32294[(2)]);
var inst_32218 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32217__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32219 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32217__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32220 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32217__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32294__$1 = (function (){var statearr_32328 = state_32294;
(statearr_32328[(12)] = inst_32217__$1);

(statearr_32328[(9)] = inst_32218);

(statearr_32328[(13)] = inst_32219);

return statearr_32328;
})();
return cljs.core.async.ioc_alts_BANG_(state_32294__$1,(22),inst_32220);
} else {
if((state_val_32295 === (31))){
var inst_32264 = (state_32294[(2)]);
var state_32294__$1 = state_32294;
if(cljs.core.truth_(inst_32264)){
var statearr_32331_33793 = state_32294__$1;
(statearr_32331_33793[(1)] = (32));

} else {
var statearr_32332_33794 = state_32294__$1;
(statearr_32332_33794[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (32))){
var inst_32239 = (state_32294[(14)]);
var state_32294__$1 = state_32294;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32294__$1,(35),out,inst_32239);
} else {
if((state_val_32295 === (33))){
var inst_32217 = (state_32294[(12)]);
var inst_32189 = inst_32217;
var state_32294__$1 = (function (){var statearr_32336 = state_32294;
(statearr_32336[(7)] = inst_32189);

return statearr_32336;
})();
var statearr_32341_33795 = state_32294__$1;
(statearr_32341_33795[(2)] = null);

(statearr_32341_33795[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (13))){
var inst_32189 = (state_32294[(7)]);
var inst_32200 = inst_32189.cljs$lang$protocol_mask$partition0$;
var inst_32201 = (inst_32200 & (64));
var inst_32202 = inst_32189.cljs$core$ISeq$;
var inst_32203 = (cljs.core.PROTOCOL_SENTINEL === inst_32202);
var inst_32204 = ((inst_32201) || (inst_32203));
var state_32294__$1 = state_32294;
if(cljs.core.truth_(inst_32204)){
var statearr_32342_33796 = state_32294__$1;
(statearr_32342_33796[(1)] = (16));

} else {
var statearr_32343_33797 = state_32294__$1;
(statearr_32343_33797[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (22))){
var inst_32240 = (state_32294[(10)]);
var inst_32239 = (state_32294[(14)]);
var inst_32227 = (state_32294[(2)]);
var inst_32239__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32227,(0),null);
var inst_32240__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32227,(1),null);
var inst_32241 = (inst_32239__$1 == null);
var inst_32242 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32240__$1,change);
var inst_32243 = ((inst_32241) || (inst_32242));
var state_32294__$1 = (function (){var statearr_32360 = state_32294;
(statearr_32360[(10)] = inst_32240__$1);

(statearr_32360[(14)] = inst_32239__$1);

return statearr_32360;
})();
if(cljs.core.truth_(inst_32243)){
var statearr_32361_33801 = state_32294__$1;
(statearr_32361_33801[(1)] = (23));

} else {
var statearr_32362_33802 = state_32294__$1;
(statearr_32362_33802[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (36))){
var inst_32217 = (state_32294[(12)]);
var inst_32189 = inst_32217;
var state_32294__$1 = (function (){var statearr_32363 = state_32294;
(statearr_32363[(7)] = inst_32189);

return statearr_32363;
})();
var statearr_32364_33803 = state_32294__$1;
(statearr_32364_33803[(2)] = null);

(statearr_32364_33803[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (29))){
var inst_32256 = (state_32294[(11)]);
var state_32294__$1 = state_32294;
var statearr_32365_33804 = state_32294__$1;
(statearr_32365_33804[(2)] = inst_32256);

(statearr_32365_33804[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (6))){
var state_32294__$1 = state_32294;
var statearr_32366_33805 = state_32294__$1;
(statearr_32366_33805[(2)] = false);

(statearr_32366_33805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (28))){
var inst_32250 = (state_32294[(2)]);
var inst_32252 = calc_state();
var inst_32189 = inst_32252;
var state_32294__$1 = (function (){var statearr_32367 = state_32294;
(statearr_32367[(7)] = inst_32189);

(statearr_32367[(15)] = inst_32250);

return statearr_32367;
})();
var statearr_32370_33813 = state_32294__$1;
(statearr_32370_33813[(2)] = null);

(statearr_32370_33813[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (25))){
var inst_32286 = (state_32294[(2)]);
var state_32294__$1 = state_32294;
var statearr_32371_33814 = state_32294__$1;
(statearr_32371_33814[(2)] = inst_32286);

(statearr_32371_33814[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (34))){
var inst_32284 = (state_32294[(2)]);
var state_32294__$1 = state_32294;
var statearr_32390_33815 = state_32294__$1;
(statearr_32390_33815[(2)] = inst_32284);

(statearr_32390_33815[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (17))){
var state_32294__$1 = state_32294;
var statearr_32391_33816 = state_32294__$1;
(statearr_32391_33816[(2)] = false);

(statearr_32391_33816[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (3))){
var state_32294__$1 = state_32294;
var statearr_32392_33820 = state_32294__$1;
(statearr_32392_33820[(2)] = false);

(statearr_32392_33820[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (12))){
var inst_32288 = (state_32294[(2)]);
var state_32294__$1 = state_32294;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32294__$1,inst_32288);
} else {
if((state_val_32295 === (2))){
var inst_32164 = (state_32294[(8)]);
var inst_32169 = inst_32164.cljs$lang$protocol_mask$partition0$;
var inst_32170 = (inst_32169 & (64));
var inst_32171 = inst_32164.cljs$core$ISeq$;
var inst_32172 = (cljs.core.PROTOCOL_SENTINEL === inst_32171);
var inst_32173 = ((inst_32170) || (inst_32172));
var state_32294__$1 = state_32294;
if(cljs.core.truth_(inst_32173)){
var statearr_32405_33824 = state_32294__$1;
(statearr_32405_33824[(1)] = (5));

} else {
var statearr_32406_33825 = state_32294__$1;
(statearr_32406_33825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (23))){
var inst_32239 = (state_32294[(14)]);
var inst_32245 = (inst_32239 == null);
var state_32294__$1 = state_32294;
if(cljs.core.truth_(inst_32245)){
var statearr_32408_33826 = state_32294__$1;
(statearr_32408_33826[(1)] = (26));

} else {
var statearr_32409_33827 = state_32294__$1;
(statearr_32409_33827[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (35))){
var inst_32271 = (state_32294[(2)]);
var state_32294__$1 = state_32294;
if(cljs.core.truth_(inst_32271)){
var statearr_32410_33828 = state_32294__$1;
(statearr_32410_33828[(1)] = (36));

} else {
var statearr_32411_33829 = state_32294__$1;
(statearr_32411_33829[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (19))){
var inst_32189 = (state_32294[(7)]);
var inst_32214 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32189);
var state_32294__$1 = state_32294;
var statearr_32415_33830 = state_32294__$1;
(statearr_32415_33830[(2)] = inst_32214);

(statearr_32415_33830[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (11))){
var inst_32189 = (state_32294[(7)]);
var inst_32197 = (inst_32189 == null);
var inst_32198 = cljs.core.not(inst_32197);
var state_32294__$1 = state_32294;
if(inst_32198){
var statearr_32430_33831 = state_32294__$1;
(statearr_32430_33831[(1)] = (13));

} else {
var statearr_32431_33832 = state_32294__$1;
(statearr_32431_33832[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (9))){
var inst_32164 = (state_32294[(8)]);
var state_32294__$1 = state_32294;
var statearr_32432_33833 = state_32294__$1;
(statearr_32432_33833[(2)] = inst_32164);

(statearr_32432_33833[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (5))){
var state_32294__$1 = state_32294;
var statearr_32433_33834 = state_32294__$1;
(statearr_32433_33834[(2)] = true);

(statearr_32433_33834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (14))){
var state_32294__$1 = state_32294;
var statearr_32434_33835 = state_32294__$1;
(statearr_32434_33835[(2)] = false);

(statearr_32434_33835[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (26))){
var inst_32240 = (state_32294[(10)]);
var inst_32247 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32240);
var state_32294__$1 = state_32294;
var statearr_32435_33846 = state_32294__$1;
(statearr_32435_33846[(2)] = inst_32247);

(statearr_32435_33846[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (16))){
var state_32294__$1 = state_32294;
var statearr_32436_33850 = state_32294__$1;
(statearr_32436_33850[(2)] = true);

(statearr_32436_33850[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (38))){
var inst_32276 = (state_32294[(2)]);
var state_32294__$1 = state_32294;
var statearr_32437_33857 = state_32294__$1;
(statearr_32437_33857[(2)] = inst_32276);

(statearr_32437_33857[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (30))){
var inst_32218 = (state_32294[(9)]);
var inst_32240 = (state_32294[(10)]);
var inst_32219 = (state_32294[(13)]);
var inst_32259 = cljs.core.empty_QMARK_(inst_32218);
var inst_32260 = (inst_32219.cljs$core$IFn$_invoke$arity$1 ? inst_32219.cljs$core$IFn$_invoke$arity$1(inst_32240) : inst_32219.call(null,inst_32240));
var inst_32261 = cljs.core.not(inst_32260);
var inst_32262 = ((inst_32259) && (inst_32261));
var state_32294__$1 = state_32294;
var statearr_32438_33864 = state_32294__$1;
(statearr_32438_33864[(2)] = inst_32262);

(statearr_32438_33864[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (10))){
var inst_32164 = (state_32294[(8)]);
var inst_32185 = (state_32294[(2)]);
var inst_32186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32185,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32187 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32185,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32188 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32185,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32189 = inst_32164;
var state_32294__$1 = (function (){var statearr_32439 = state_32294;
(statearr_32439[(16)] = inst_32188);

(statearr_32439[(17)] = inst_32187);

(statearr_32439[(18)] = inst_32186);

(statearr_32439[(7)] = inst_32189);

return statearr_32439;
})();
var statearr_32440_33865 = state_32294__$1;
(statearr_32440_33865[(2)] = null);

(statearr_32440_33865[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (18))){
var inst_32208 = (state_32294[(2)]);
var state_32294__$1 = state_32294;
var statearr_32441_33866 = state_32294__$1;
(statearr_32441_33866[(2)] = inst_32208);

(statearr_32441_33866[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (37))){
var state_32294__$1 = state_32294;
var statearr_32444_33867 = state_32294__$1;
(statearr_32444_33867[(2)] = null);

(statearr_32444_33867[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32295 === (8))){
var inst_32164 = (state_32294[(8)]);
var inst_32182 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32164);
var state_32294__$1 = state_32294;
var statearr_32446_33872 = state_32294__$1;
(statearr_32446_33872[(2)] = inst_32182);

(statearr_32446_33872[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__30759__auto__ = null;
var cljs$core$async$mix_$_state_machine__30759__auto____0 = (function (){
var statearr_32449 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32449[(0)] = cljs$core$async$mix_$_state_machine__30759__auto__);

(statearr_32449[(1)] = (1));

return statearr_32449;
});
var cljs$core$async$mix_$_state_machine__30759__auto____1 = (function (state_32294){
while(true){
var ret_value__30760__auto__ = (function (){try{while(true){
var result__30761__auto__ = switch__30758__auto__(state_32294);
if(cljs.core.keyword_identical_QMARK_(result__30761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30761__auto__;
}
break;
}
}catch (e32451){var ex__30762__auto__ = e32451;
var statearr_32452_33873 = state_32294;
(statearr_32452_33873[(2)] = ex__30762__auto__);


if(cljs.core.seq((state_32294[(4)]))){
var statearr_32453_33874 = state_32294;
(statearr_32453_33874[(1)] = cljs.core.first((state_32294[(4)])));

} else {
throw ex__30762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33875 = state_32294;
state_32294 = G__33875;
continue;
} else {
return ret_value__30760__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30759__auto__ = function(state_32294){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30759__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30759__auto____1.call(this,state_32294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30759__auto____0;
cljs$core$async$mix_$_state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30759__auto____1;
return cljs$core$async$mix_$_state_machine__30759__auto__;
})()
})();
var state__30932__auto__ = (function (){var statearr_32455 = f__30931__auto__();
(statearr_32455[(6)] = c__30930__auto___33775);

return statearr_32455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30932__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_33882 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_33882(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33895 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_33895(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33902 = (function() {
var G__33903 = null;
var G__33903__1 = (function (p){
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
var G__33903__2 = (function (p,v){
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
G__33903 = function(p,v){
switch(arguments.length){
case 1:
return G__33903__1.call(this,p);
case 2:
return G__33903__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33903.cljs$core$IFn$_invoke$arity$1 = G__33903__1;
G__33903.cljs$core$IFn$_invoke$arity$2 = G__33903__2;
return G__33903;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32479 = arguments.length;
switch (G__32479) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33902(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33902(p,v);
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
var G__32482 = arguments.length;
switch (G__32482) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32480_SHARP_){
if(cljs.core.truth_((p1__32480_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32480_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32480_SHARP_.call(null,topic)))){
return p1__32480_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32480_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32483 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32483 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32484){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32484 = meta32484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32485,meta32484__$1){
var self__ = this;
var _32485__$1 = this;
return (new cljs.core.async.t_cljs$core$async32483(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32484__$1));
}));

(cljs.core.async.t_cljs$core$async32483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32485){
var self__ = this;
var _32485__$1 = this;
return self__.meta32484;
}));

(cljs.core.async.t_cljs$core$async32483.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32483.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32483.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32483.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32483.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async32483.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32483.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32483.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32484","meta32484",1790738541,null)], null);
}));

(cljs.core.async.t_cljs$core$async32483.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32483.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32483");

(cljs.core.async.t_cljs$core$async32483.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32483");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32483.
 */
cljs.core.async.__GT_t_cljs$core$async32483 = (function cljs$core$async$__GT_t_cljs$core$async32483(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32484){
return (new cljs.core.async.t_cljs$core$async32483(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32484));
});

}

return (new cljs.core.async.t_cljs$core$async32483(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30930__auto___33926 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30931__auto__ = (function (){var switch__30758__auto__ = (function (state_32557){
var state_val_32558 = (state_32557[(1)]);
if((state_val_32558 === (7))){
var inst_32553 = (state_32557[(2)]);
var state_32557__$1 = state_32557;
var statearr_32559_33928 = state_32557__$1;
(statearr_32559_33928[(2)] = inst_32553);

(statearr_32559_33928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (20))){
var state_32557__$1 = state_32557;
var statearr_32560_33929 = state_32557__$1;
(statearr_32560_33929[(2)] = null);

(statearr_32560_33929[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (1))){
var state_32557__$1 = state_32557;
var statearr_32561_33930 = state_32557__$1;
(statearr_32561_33930[(2)] = null);

(statearr_32561_33930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (24))){
var inst_32536 = (state_32557[(7)]);
var inst_32545 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32536);
var state_32557__$1 = state_32557;
var statearr_32562_33931 = state_32557__$1;
(statearr_32562_33931[(2)] = inst_32545);

(statearr_32562_33931[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (4))){
var inst_32488 = (state_32557[(8)]);
var inst_32488__$1 = (state_32557[(2)]);
var inst_32489 = (inst_32488__$1 == null);
var state_32557__$1 = (function (){var statearr_32563 = state_32557;
(statearr_32563[(8)] = inst_32488__$1);

return statearr_32563;
})();
if(cljs.core.truth_(inst_32489)){
var statearr_32564_33932 = state_32557__$1;
(statearr_32564_33932[(1)] = (5));

} else {
var statearr_32565_33933 = state_32557__$1;
(statearr_32565_33933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (15))){
var inst_32530 = (state_32557[(2)]);
var state_32557__$1 = state_32557;
var statearr_32566_33934 = state_32557__$1;
(statearr_32566_33934[(2)] = inst_32530);

(statearr_32566_33934[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (21))){
var inst_32550 = (state_32557[(2)]);
var state_32557__$1 = (function (){var statearr_32567 = state_32557;
(statearr_32567[(9)] = inst_32550);

return statearr_32567;
})();
var statearr_32568_33935 = state_32557__$1;
(statearr_32568_33935[(2)] = null);

(statearr_32568_33935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (13))){
var inst_32512 = (state_32557[(10)]);
var inst_32514 = cljs.core.chunked_seq_QMARK_(inst_32512);
var state_32557__$1 = state_32557;
if(inst_32514){
var statearr_32569_33938 = state_32557__$1;
(statearr_32569_33938[(1)] = (16));

} else {
var statearr_32570_33939 = state_32557__$1;
(statearr_32570_33939[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (22))){
var inst_32542 = (state_32557[(2)]);
var state_32557__$1 = state_32557;
if(cljs.core.truth_(inst_32542)){
var statearr_32571_33940 = state_32557__$1;
(statearr_32571_33940[(1)] = (23));

} else {
var statearr_32572_33941 = state_32557__$1;
(statearr_32572_33941[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (6))){
var inst_32488 = (state_32557[(8)]);
var inst_32538 = (state_32557[(11)]);
var inst_32536 = (state_32557[(7)]);
var inst_32536__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32488) : topic_fn.call(null,inst_32488));
var inst_32537 = cljs.core.deref(mults);
var inst_32538__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32537,inst_32536__$1);
var state_32557__$1 = (function (){var statearr_32573 = state_32557;
(statearr_32573[(11)] = inst_32538__$1);

(statearr_32573[(7)] = inst_32536__$1);

return statearr_32573;
})();
if(cljs.core.truth_(inst_32538__$1)){
var statearr_32574_33948 = state_32557__$1;
(statearr_32574_33948[(1)] = (19));

} else {
var statearr_32578_33949 = state_32557__$1;
(statearr_32578_33949[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (25))){
var inst_32547 = (state_32557[(2)]);
var state_32557__$1 = state_32557;
var statearr_32579_33950 = state_32557__$1;
(statearr_32579_33950[(2)] = inst_32547);

(statearr_32579_33950[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (17))){
var inst_32512 = (state_32557[(10)]);
var inst_32521 = cljs.core.first(inst_32512);
var inst_32522 = cljs.core.async.muxch_STAR_(inst_32521);
var inst_32523 = cljs.core.async.close_BANG_(inst_32522);
var inst_32524 = cljs.core.next(inst_32512);
var inst_32498 = inst_32524;
var inst_32499 = null;
var inst_32500 = (0);
var inst_32501 = (0);
var state_32557__$1 = (function (){var statearr_32581 = state_32557;
(statearr_32581[(12)] = inst_32498);

(statearr_32581[(13)] = inst_32500);

(statearr_32581[(14)] = inst_32499);

(statearr_32581[(15)] = inst_32523);

(statearr_32581[(16)] = inst_32501);

return statearr_32581;
})();
var statearr_32582_33952 = state_32557__$1;
(statearr_32582_33952[(2)] = null);

(statearr_32582_33952[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (3))){
var inst_32555 = (state_32557[(2)]);
var state_32557__$1 = state_32557;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32557__$1,inst_32555);
} else {
if((state_val_32558 === (12))){
var inst_32532 = (state_32557[(2)]);
var state_32557__$1 = state_32557;
var statearr_32583_33958 = state_32557__$1;
(statearr_32583_33958[(2)] = inst_32532);

(statearr_32583_33958[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (2))){
var state_32557__$1 = state_32557;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32557__$1,(4),ch);
} else {
if((state_val_32558 === (23))){
var state_32557__$1 = state_32557;
var statearr_32584_33959 = state_32557__$1;
(statearr_32584_33959[(2)] = null);

(statearr_32584_33959[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (19))){
var inst_32488 = (state_32557[(8)]);
var inst_32538 = (state_32557[(11)]);
var inst_32540 = cljs.core.async.muxch_STAR_(inst_32538);
var state_32557__$1 = state_32557;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32557__$1,(22),inst_32540,inst_32488);
} else {
if((state_val_32558 === (11))){
var inst_32498 = (state_32557[(12)]);
var inst_32512 = (state_32557[(10)]);
var inst_32512__$1 = cljs.core.seq(inst_32498);
var state_32557__$1 = (function (){var statearr_32585 = state_32557;
(statearr_32585[(10)] = inst_32512__$1);

return statearr_32585;
})();
if(inst_32512__$1){
var statearr_32586_33960 = state_32557__$1;
(statearr_32586_33960[(1)] = (13));

} else {
var statearr_32587_33961 = state_32557__$1;
(statearr_32587_33961[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (9))){
var inst_32534 = (state_32557[(2)]);
var state_32557__$1 = state_32557;
var statearr_32588_33962 = state_32557__$1;
(statearr_32588_33962[(2)] = inst_32534);

(statearr_32588_33962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (5))){
var inst_32495 = cljs.core.deref(mults);
var inst_32496 = cljs.core.vals(inst_32495);
var inst_32497 = cljs.core.seq(inst_32496);
var inst_32498 = inst_32497;
var inst_32499 = null;
var inst_32500 = (0);
var inst_32501 = (0);
var state_32557__$1 = (function (){var statearr_32589 = state_32557;
(statearr_32589[(12)] = inst_32498);

(statearr_32589[(13)] = inst_32500);

(statearr_32589[(14)] = inst_32499);

(statearr_32589[(16)] = inst_32501);

return statearr_32589;
})();
var statearr_32590_33963 = state_32557__$1;
(statearr_32590_33963[(2)] = null);

(statearr_32590_33963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (14))){
var state_32557__$1 = state_32557;
var statearr_32594_33964 = state_32557__$1;
(statearr_32594_33964[(2)] = null);

(statearr_32594_33964[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (16))){
var inst_32512 = (state_32557[(10)]);
var inst_32516 = cljs.core.chunk_first(inst_32512);
var inst_32517 = cljs.core.chunk_rest(inst_32512);
var inst_32518 = cljs.core.count(inst_32516);
var inst_32498 = inst_32517;
var inst_32499 = inst_32516;
var inst_32500 = inst_32518;
var inst_32501 = (0);
var state_32557__$1 = (function (){var statearr_32595 = state_32557;
(statearr_32595[(12)] = inst_32498);

(statearr_32595[(13)] = inst_32500);

(statearr_32595[(14)] = inst_32499);

(statearr_32595[(16)] = inst_32501);

return statearr_32595;
})();
var statearr_32596_33967 = state_32557__$1;
(statearr_32596_33967[(2)] = null);

(statearr_32596_33967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (10))){
var inst_32498 = (state_32557[(12)]);
var inst_32500 = (state_32557[(13)]);
var inst_32499 = (state_32557[(14)]);
var inst_32501 = (state_32557[(16)]);
var inst_32506 = cljs.core._nth(inst_32499,inst_32501);
var inst_32507 = cljs.core.async.muxch_STAR_(inst_32506);
var inst_32508 = cljs.core.async.close_BANG_(inst_32507);
var inst_32509 = (inst_32501 + (1));
var tmp32591 = inst_32498;
var tmp32592 = inst_32500;
var tmp32593 = inst_32499;
var inst_32498__$1 = tmp32591;
var inst_32499__$1 = tmp32593;
var inst_32500__$1 = tmp32592;
var inst_32501__$1 = inst_32509;
var state_32557__$1 = (function (){var statearr_32601 = state_32557;
(statearr_32601[(12)] = inst_32498__$1);

(statearr_32601[(13)] = inst_32500__$1);

(statearr_32601[(14)] = inst_32499__$1);

(statearr_32601[(16)] = inst_32501__$1);

(statearr_32601[(17)] = inst_32508);

return statearr_32601;
})();
var statearr_32602_33968 = state_32557__$1;
(statearr_32602_33968[(2)] = null);

(statearr_32602_33968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (18))){
var inst_32527 = (state_32557[(2)]);
var state_32557__$1 = state_32557;
var statearr_32603_33969 = state_32557__$1;
(statearr_32603_33969[(2)] = inst_32527);

(statearr_32603_33969[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (8))){
var inst_32500 = (state_32557[(13)]);
var inst_32501 = (state_32557[(16)]);
var inst_32503 = (inst_32501 < inst_32500);
var inst_32504 = inst_32503;
var state_32557__$1 = state_32557;
if(cljs.core.truth_(inst_32504)){
var statearr_32604_33970 = state_32557__$1;
(statearr_32604_33970[(1)] = (10));

} else {
var statearr_32605_33971 = state_32557__$1;
(statearr_32605_33971[(1)] = (11));

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
var cljs$core$async$state_machine__30759__auto__ = null;
var cljs$core$async$state_machine__30759__auto____0 = (function (){
var statearr_32606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32606[(0)] = cljs$core$async$state_machine__30759__auto__);

(statearr_32606[(1)] = (1));

return statearr_32606;
});
var cljs$core$async$state_machine__30759__auto____1 = (function (state_32557){
while(true){
var ret_value__30760__auto__ = (function (){try{while(true){
var result__30761__auto__ = switch__30758__auto__(state_32557);
if(cljs.core.keyword_identical_QMARK_(result__30761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30761__auto__;
}
break;
}
}catch (e32609){var ex__30762__auto__ = e32609;
var statearr_32610_33972 = state_32557;
(statearr_32610_33972[(2)] = ex__30762__auto__);


if(cljs.core.seq((state_32557[(4)]))){
var statearr_32611_34020 = state_32557;
(statearr_32611_34020[(1)] = cljs.core.first((state_32557[(4)])));

} else {
throw ex__30762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34021 = state_32557;
state_32557 = G__34021;
continue;
} else {
return ret_value__30760__auto__;
}
break;
}
});
cljs$core$async$state_machine__30759__auto__ = function(state_32557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30759__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30759__auto____1.call(this,state_32557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30759__auto____0;
cljs$core$async$state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30759__auto____1;
return cljs$core$async$state_machine__30759__auto__;
})()
})();
var state__30932__auto__ = (function (){var statearr_32612 = f__30931__auto__();
(statearr_32612[(6)] = c__30930__auto___33926);

return statearr_32612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30932__auto__);
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
var G__32614 = arguments.length;
switch (G__32614) {
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
var G__32618 = arguments.length;
switch (G__32618) {
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
var G__32624 = arguments.length;
switch (G__32624) {
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
var c__30930__auto___34029 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30931__auto__ = (function (){var switch__30758__auto__ = (function (state_32685){
var state_val_32686 = (state_32685[(1)]);
if((state_val_32686 === (7))){
var state_32685__$1 = state_32685;
var statearr_32699_34031 = state_32685__$1;
(statearr_32699_34031[(2)] = null);

(statearr_32699_34031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32686 === (1))){
var state_32685__$1 = state_32685;
var statearr_32704_34032 = state_32685__$1;
(statearr_32704_34032[(2)] = null);

(statearr_32704_34032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32686 === (4))){
var inst_32627 = (state_32685[(7)]);
var inst_32628 = (state_32685[(8)]);
var inst_32630 = (inst_32628 < inst_32627);
var state_32685__$1 = state_32685;
if(cljs.core.truth_(inst_32630)){
var statearr_32712_34034 = state_32685__$1;
(statearr_32712_34034[(1)] = (6));

} else {
var statearr_32714_34035 = state_32685__$1;
(statearr_32714_34035[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32686 === (15))){
var inst_32662 = (state_32685[(9)]);
var inst_32670 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32662);
var state_32685__$1 = state_32685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32685__$1,(17),out,inst_32670);
} else {
if((state_val_32686 === (13))){
var inst_32662 = (state_32685[(9)]);
var inst_32662__$1 = (state_32685[(2)]);
var inst_32666 = cljs.core.some(cljs.core.nil_QMARK_,inst_32662__$1);
var state_32685__$1 = (function (){var statearr_32720 = state_32685;
(statearr_32720[(9)] = inst_32662__$1);

return statearr_32720;
})();
if(cljs.core.truth_(inst_32666)){
var statearr_32721_34036 = state_32685__$1;
(statearr_32721_34036[(1)] = (14));

} else {
var statearr_32722_34037 = state_32685__$1;
(statearr_32722_34037[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32686 === (6))){
var state_32685__$1 = state_32685;
var statearr_32723_34038 = state_32685__$1;
(statearr_32723_34038[(2)] = null);

(statearr_32723_34038[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32686 === (17))){
var inst_32672 = (state_32685[(2)]);
var state_32685__$1 = (function (){var statearr_32730 = state_32685;
(statearr_32730[(10)] = inst_32672);

return statearr_32730;
})();
var statearr_32731_34040 = state_32685__$1;
(statearr_32731_34040[(2)] = null);

(statearr_32731_34040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32686 === (3))){
var inst_32677 = (state_32685[(2)]);
var state_32685__$1 = state_32685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32685__$1,inst_32677);
} else {
if((state_val_32686 === (12))){
var _ = (function (){var statearr_32732 = state_32685;
(statearr_32732[(4)] = cljs.core.rest((state_32685[(4)])));

return statearr_32732;
})();
var state_32685__$1 = state_32685;
var ex32729 = (state_32685__$1[(2)]);
var statearr_32733_34042 = state_32685__$1;
(statearr_32733_34042[(5)] = ex32729);


if((ex32729 instanceof Object)){
var statearr_32734_34043 = state_32685__$1;
(statearr_32734_34043[(1)] = (11));

(statearr_32734_34043[(5)] = null);

} else {
throw ex32729;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32686 === (2))){
var inst_32626 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32627 = cnt;
var inst_32628 = (0);
var state_32685__$1 = (function (){var statearr_32735 = state_32685;
(statearr_32735[(7)] = inst_32627);

(statearr_32735[(11)] = inst_32626);

(statearr_32735[(8)] = inst_32628);

return statearr_32735;
})();
var statearr_32736_34044 = state_32685__$1;
(statearr_32736_34044[(2)] = null);

(statearr_32736_34044[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32686 === (11))){
var inst_32637 = (state_32685[(2)]);
var inst_32638 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32685__$1 = (function (){var statearr_32737 = state_32685;
(statearr_32737[(12)] = inst_32637);

return statearr_32737;
})();
var statearr_32738_34045 = state_32685__$1;
(statearr_32738_34045[(2)] = inst_32638);

(statearr_32738_34045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32686 === (9))){
var inst_32628 = (state_32685[(8)]);
var _ = (function (){var statearr_32743 = state_32685;
(statearr_32743[(4)] = cljs.core.cons((12),(state_32685[(4)])));

return statearr_32743;
})();
var inst_32648 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32628) : chs__$1.call(null,inst_32628));
var inst_32649 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32628) : done.call(null,inst_32628));
var inst_32650 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32648,inst_32649);
var ___$1 = (function (){var statearr_32744 = state_32685;
(statearr_32744[(4)] = cljs.core.rest((state_32685[(4)])));

return statearr_32744;
})();
var state_32685__$1 = state_32685;
var statearr_32745_34046 = state_32685__$1;
(statearr_32745_34046[(2)] = inst_32650);

(statearr_32745_34046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32686 === (5))){
var inst_32660 = (state_32685[(2)]);
var state_32685__$1 = (function (){var statearr_32746 = state_32685;
(statearr_32746[(13)] = inst_32660);

return statearr_32746;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32685__$1,(13),dchan);
} else {
if((state_val_32686 === (14))){
var inst_32668 = cljs.core.async.close_BANG_(out);
var state_32685__$1 = state_32685;
var statearr_32747_34062 = state_32685__$1;
(statearr_32747_34062[(2)] = inst_32668);

(statearr_32747_34062[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32686 === (16))){
var inst_32675 = (state_32685[(2)]);
var state_32685__$1 = state_32685;
var statearr_32748_34063 = state_32685__$1;
(statearr_32748_34063[(2)] = inst_32675);

(statearr_32748_34063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32686 === (10))){
var inst_32628 = (state_32685[(8)]);
var inst_32653 = (state_32685[(2)]);
var inst_32654 = (inst_32628 + (1));
var inst_32628__$1 = inst_32654;
var state_32685__$1 = (function (){var statearr_32749 = state_32685;
(statearr_32749[(14)] = inst_32653);

(statearr_32749[(8)] = inst_32628__$1);

return statearr_32749;
})();
var statearr_32750_34064 = state_32685__$1;
(statearr_32750_34064[(2)] = null);

(statearr_32750_34064[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32686 === (8))){
var inst_32658 = (state_32685[(2)]);
var state_32685__$1 = state_32685;
var statearr_32751_34065 = state_32685__$1;
(statearr_32751_34065[(2)] = inst_32658);

(statearr_32751_34065[(1)] = (5));


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
var cljs$core$async$state_machine__30759__auto__ = null;
var cljs$core$async$state_machine__30759__auto____0 = (function (){
var statearr_32753 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32753[(0)] = cljs$core$async$state_machine__30759__auto__);

(statearr_32753[(1)] = (1));

return statearr_32753;
});
var cljs$core$async$state_machine__30759__auto____1 = (function (state_32685){
while(true){
var ret_value__30760__auto__ = (function (){try{while(true){
var result__30761__auto__ = switch__30758__auto__(state_32685);
if(cljs.core.keyword_identical_QMARK_(result__30761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30761__auto__;
}
break;
}
}catch (e32760){var ex__30762__auto__ = e32760;
var statearr_32761_34066 = state_32685;
(statearr_32761_34066[(2)] = ex__30762__auto__);


if(cljs.core.seq((state_32685[(4)]))){
var statearr_32762_34067 = state_32685;
(statearr_32762_34067[(1)] = cljs.core.first((state_32685[(4)])));

} else {
throw ex__30762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34068 = state_32685;
state_32685 = G__34068;
continue;
} else {
return ret_value__30760__auto__;
}
break;
}
});
cljs$core$async$state_machine__30759__auto__ = function(state_32685){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30759__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30759__auto____1.call(this,state_32685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30759__auto____0;
cljs$core$async$state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30759__auto____1;
return cljs$core$async$state_machine__30759__auto__;
})()
})();
var state__30932__auto__ = (function (){var statearr_32763 = f__30931__auto__();
(statearr_32763[(6)] = c__30930__auto___34029);

return statearr_32763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30932__auto__);
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
var G__32767 = arguments.length;
switch (G__32767) {
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
var c__30930__auto___34070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30931__auto__ = (function (){var switch__30758__auto__ = (function (state_32802){
var state_val_32803 = (state_32802[(1)]);
if((state_val_32803 === (7))){
var inst_32780 = (state_32802[(7)]);
var inst_32779 = (state_32802[(8)]);
var inst_32779__$1 = (state_32802[(2)]);
var inst_32780__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32779__$1,(0),null);
var inst_32781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32779__$1,(1),null);
var inst_32782 = (inst_32780__$1 == null);
var state_32802__$1 = (function (){var statearr_32805 = state_32802;
(statearr_32805[(7)] = inst_32780__$1);

(statearr_32805[(9)] = inst_32781);

(statearr_32805[(8)] = inst_32779__$1);

return statearr_32805;
})();
if(cljs.core.truth_(inst_32782)){
var statearr_32807_34079 = state_32802__$1;
(statearr_32807_34079[(1)] = (8));

} else {
var statearr_32808_34080 = state_32802__$1;
(statearr_32808_34080[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (1))){
var inst_32769 = cljs.core.vec(chs);
var inst_32770 = inst_32769;
var state_32802__$1 = (function (){var statearr_32809 = state_32802;
(statearr_32809[(10)] = inst_32770);

return statearr_32809;
})();
var statearr_32810_34085 = state_32802__$1;
(statearr_32810_34085[(2)] = null);

(statearr_32810_34085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (4))){
var inst_32770 = (state_32802[(10)]);
var state_32802__$1 = state_32802;
return cljs.core.async.ioc_alts_BANG_(state_32802__$1,(7),inst_32770);
} else {
if((state_val_32803 === (6))){
var inst_32796 = (state_32802[(2)]);
var state_32802__$1 = state_32802;
var statearr_32813_34086 = state_32802__$1;
(statearr_32813_34086[(2)] = inst_32796);

(statearr_32813_34086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (3))){
var inst_32798 = (state_32802[(2)]);
var state_32802__$1 = state_32802;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32802__$1,inst_32798);
} else {
if((state_val_32803 === (2))){
var inst_32770 = (state_32802[(10)]);
var inst_32772 = cljs.core.count(inst_32770);
var inst_32773 = (inst_32772 > (0));
var state_32802__$1 = state_32802;
if(cljs.core.truth_(inst_32773)){
var statearr_32815_34095 = state_32802__$1;
(statearr_32815_34095[(1)] = (4));

} else {
var statearr_32817_34096 = state_32802__$1;
(statearr_32817_34096[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (11))){
var inst_32770 = (state_32802[(10)]);
var inst_32789 = (state_32802[(2)]);
var tmp32814 = inst_32770;
var inst_32770__$1 = tmp32814;
var state_32802__$1 = (function (){var statearr_32818 = state_32802;
(statearr_32818[(10)] = inst_32770__$1);

(statearr_32818[(11)] = inst_32789);

return statearr_32818;
})();
var statearr_32819_34104 = state_32802__$1;
(statearr_32819_34104[(2)] = null);

(statearr_32819_34104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (9))){
var inst_32780 = (state_32802[(7)]);
var state_32802__$1 = state_32802;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32802__$1,(11),out,inst_32780);
} else {
if((state_val_32803 === (5))){
var inst_32794 = cljs.core.async.close_BANG_(out);
var state_32802__$1 = state_32802;
var statearr_32823_34105 = state_32802__$1;
(statearr_32823_34105[(2)] = inst_32794);

(statearr_32823_34105[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (10))){
var inst_32792 = (state_32802[(2)]);
var state_32802__$1 = state_32802;
var statearr_32824_34106 = state_32802__$1;
(statearr_32824_34106[(2)] = inst_32792);

(statearr_32824_34106[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32803 === (8))){
var inst_32780 = (state_32802[(7)]);
var inst_32770 = (state_32802[(10)]);
var inst_32781 = (state_32802[(9)]);
var inst_32779 = (state_32802[(8)]);
var inst_32784 = (function (){var cs = inst_32770;
var vec__32775 = inst_32779;
var v = inst_32780;
var c = inst_32781;
return (function (p1__32765_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32765_SHARP_);
});
})();
var inst_32785 = cljs.core.filterv(inst_32784,inst_32770);
var inst_32770__$1 = inst_32785;
var state_32802__$1 = (function (){var statearr_32825 = state_32802;
(statearr_32825[(10)] = inst_32770__$1);

return statearr_32825;
})();
var statearr_32826_34108 = state_32802__$1;
(statearr_32826_34108[(2)] = null);

(statearr_32826_34108[(1)] = (2));


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
var cljs$core$async$state_machine__30759__auto__ = null;
var cljs$core$async$state_machine__30759__auto____0 = (function (){
var statearr_32827 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32827[(0)] = cljs$core$async$state_machine__30759__auto__);

(statearr_32827[(1)] = (1));

return statearr_32827;
});
var cljs$core$async$state_machine__30759__auto____1 = (function (state_32802){
while(true){
var ret_value__30760__auto__ = (function (){try{while(true){
var result__30761__auto__ = switch__30758__auto__(state_32802);
if(cljs.core.keyword_identical_QMARK_(result__30761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30761__auto__;
}
break;
}
}catch (e32828){var ex__30762__auto__ = e32828;
var statearr_32829_34109 = state_32802;
(statearr_32829_34109[(2)] = ex__30762__auto__);


if(cljs.core.seq((state_32802[(4)]))){
var statearr_32830_34110 = state_32802;
(statearr_32830_34110[(1)] = cljs.core.first((state_32802[(4)])));

} else {
throw ex__30762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34111 = state_32802;
state_32802 = G__34111;
continue;
} else {
return ret_value__30760__auto__;
}
break;
}
});
cljs$core$async$state_machine__30759__auto__ = function(state_32802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30759__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30759__auto____1.call(this,state_32802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30759__auto____0;
cljs$core$async$state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30759__auto____1;
return cljs$core$async$state_machine__30759__auto__;
})()
})();
var state__30932__auto__ = (function (){var statearr_32831 = f__30931__auto__();
(statearr_32831[(6)] = c__30930__auto___34070);

return statearr_32831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30932__auto__);
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
var G__32833 = arguments.length;
switch (G__32833) {
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
var c__30930__auto___34113 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30931__auto__ = (function (){var switch__30758__auto__ = (function (state_32860){
var state_val_32861 = (state_32860[(1)]);
if((state_val_32861 === (7))){
var inst_32839 = (state_32860[(7)]);
var inst_32839__$1 = (state_32860[(2)]);
var inst_32840 = (inst_32839__$1 == null);
var inst_32844 = cljs.core.not(inst_32840);
var state_32860__$1 = (function (){var statearr_32862 = state_32860;
(statearr_32862[(7)] = inst_32839__$1);

return statearr_32862;
})();
if(inst_32844){
var statearr_32863_34114 = state_32860__$1;
(statearr_32863_34114[(1)] = (8));

} else {
var statearr_32864_34115 = state_32860__$1;
(statearr_32864_34115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (1))){
var inst_32834 = (0);
var state_32860__$1 = (function (){var statearr_32865 = state_32860;
(statearr_32865[(8)] = inst_32834);

return statearr_32865;
})();
var statearr_32866_34117 = state_32860__$1;
(statearr_32866_34117[(2)] = null);

(statearr_32866_34117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (4))){
var state_32860__$1 = state_32860;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32860__$1,(7),ch);
} else {
if((state_val_32861 === (6))){
var inst_32855 = (state_32860[(2)]);
var state_32860__$1 = state_32860;
var statearr_32867_34118 = state_32860__$1;
(statearr_32867_34118[(2)] = inst_32855);

(statearr_32867_34118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (3))){
var inst_32857 = (state_32860[(2)]);
var inst_32858 = cljs.core.async.close_BANG_(out);
var state_32860__$1 = (function (){var statearr_32868 = state_32860;
(statearr_32868[(9)] = inst_32857);

return statearr_32868;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32860__$1,inst_32858);
} else {
if((state_val_32861 === (2))){
var inst_32834 = (state_32860[(8)]);
var inst_32836 = (inst_32834 < n);
var state_32860__$1 = state_32860;
if(cljs.core.truth_(inst_32836)){
var statearr_32869_34119 = state_32860__$1;
(statearr_32869_34119[(1)] = (4));

} else {
var statearr_32870_34120 = state_32860__$1;
(statearr_32870_34120[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (11))){
var inst_32834 = (state_32860[(8)]);
var inst_32847 = (state_32860[(2)]);
var inst_32848 = (inst_32834 + (1));
var inst_32834__$1 = inst_32848;
var state_32860__$1 = (function (){var statearr_32873 = state_32860;
(statearr_32873[(8)] = inst_32834__$1);

(statearr_32873[(10)] = inst_32847);

return statearr_32873;
})();
var statearr_32874_34121 = state_32860__$1;
(statearr_32874_34121[(2)] = null);

(statearr_32874_34121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (9))){
var state_32860__$1 = state_32860;
var statearr_32876_34122 = state_32860__$1;
(statearr_32876_34122[(2)] = null);

(statearr_32876_34122[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (5))){
var state_32860__$1 = state_32860;
var statearr_32877_34123 = state_32860__$1;
(statearr_32877_34123[(2)] = null);

(statearr_32877_34123[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (10))){
var inst_32852 = (state_32860[(2)]);
var state_32860__$1 = state_32860;
var statearr_32878_34124 = state_32860__$1;
(statearr_32878_34124[(2)] = inst_32852);

(statearr_32878_34124[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (8))){
var inst_32839 = (state_32860[(7)]);
var state_32860__$1 = state_32860;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32860__$1,(11),out,inst_32839);
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
var cljs$core$async$state_machine__30759__auto__ = null;
var cljs$core$async$state_machine__30759__auto____0 = (function (){
var statearr_32879 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32879[(0)] = cljs$core$async$state_machine__30759__auto__);

(statearr_32879[(1)] = (1));

return statearr_32879;
});
var cljs$core$async$state_machine__30759__auto____1 = (function (state_32860){
while(true){
var ret_value__30760__auto__ = (function (){try{while(true){
var result__30761__auto__ = switch__30758__auto__(state_32860);
if(cljs.core.keyword_identical_QMARK_(result__30761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30761__auto__;
}
break;
}
}catch (e32880){var ex__30762__auto__ = e32880;
var statearr_32881_34125 = state_32860;
(statearr_32881_34125[(2)] = ex__30762__auto__);


if(cljs.core.seq((state_32860[(4)]))){
var statearr_32882_34126 = state_32860;
(statearr_32882_34126[(1)] = cljs.core.first((state_32860[(4)])));

} else {
throw ex__30762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34157 = state_32860;
state_32860 = G__34157;
continue;
} else {
return ret_value__30760__auto__;
}
break;
}
});
cljs$core$async$state_machine__30759__auto__ = function(state_32860){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30759__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30759__auto____1.call(this,state_32860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30759__auto____0;
cljs$core$async$state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30759__auto____1;
return cljs$core$async$state_machine__30759__auto__;
})()
})();
var state__30932__auto__ = (function (){var statearr_32883 = f__30931__auto__();
(statearr_32883[(6)] = c__30930__auto___34113);

return statearr_32883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30932__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32888 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32888 = (function (f,ch,meta32889){
this.f = f;
this.ch = ch;
this.meta32889 = meta32889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32890,meta32889__$1){
var self__ = this;
var _32890__$1 = this;
return (new cljs.core.async.t_cljs$core$async32888(self__.f,self__.ch,meta32889__$1));
}));

(cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32890){
var self__ = this;
var _32890__$1 = this;
return self__.meta32889;
}));

(cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32891 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32891 = (function (f,ch,meta32889,_,fn1,meta32892){
this.f = f;
this.ch = ch;
this.meta32889 = meta32889;
this._ = _;
this.fn1 = fn1;
this.meta32892 = meta32892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32893,meta32892__$1){
var self__ = this;
var _32893__$1 = this;
return (new cljs.core.async.t_cljs$core$async32891(self__.f,self__.ch,self__.meta32889,self__._,self__.fn1,meta32892__$1));
}));

(cljs.core.async.t_cljs$core$async32891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32893){
var self__ = this;
var _32893__$1 = this;
return self__.meta32892;
}));

(cljs.core.async.t_cljs$core$async32891.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32891.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32891.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32891.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32887_SHARP_){
var G__32895 = (((p1__32887_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32887_SHARP_) : self__.f.call(null,p1__32887_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32895) : f1.call(null,G__32895));
});
}));

(cljs.core.async.t_cljs$core$async32891.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32889","meta32889",-722211566,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32888","cljs.core.async/t_cljs$core$async32888",1365837420,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32892","meta32892",1738472187,null)], null);
}));

(cljs.core.async.t_cljs$core$async32891.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32891.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32891");

(cljs.core.async.t_cljs$core$async32891.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32891");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32891.
 */
cljs.core.async.__GT_t_cljs$core$async32891 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32891(f__$1,ch__$1,meta32889__$1,___$2,fn1__$1,meta32892){
return (new cljs.core.async.t_cljs$core$async32891(f__$1,ch__$1,meta32889__$1,___$2,fn1__$1,meta32892));
});

}

return (new cljs.core.async.t_cljs$core$async32891(self__.f,self__.ch,self__.meta32889,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32898 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32898) : self__.f.call(null,G__32898));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32888.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32889","meta32889",-722211566,null)], null);
}));

(cljs.core.async.t_cljs$core$async32888.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32888.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32888");

(cljs.core.async.t_cljs$core$async32888.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32888");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32888.
 */
cljs.core.async.__GT_t_cljs$core$async32888 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32888(f__$1,ch__$1,meta32889){
return (new cljs.core.async.t_cljs$core$async32888(f__$1,ch__$1,meta32889));
});

}

return (new cljs.core.async.t_cljs$core$async32888(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32899 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32899 = (function (f,ch,meta32900){
this.f = f;
this.ch = ch;
this.meta32900 = meta32900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32901,meta32900__$1){
var self__ = this;
var _32901__$1 = this;
return (new cljs.core.async.t_cljs$core$async32899(self__.f,self__.ch,meta32900__$1));
}));

(cljs.core.async.t_cljs$core$async32899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32901){
var self__ = this;
var _32901__$1 = this;
return self__.meta32900;
}));

(cljs.core.async.t_cljs$core$async32899.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32899.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32899.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32899.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32899.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32899.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32899.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32900","meta32900",-397989827,null)], null);
}));

(cljs.core.async.t_cljs$core$async32899.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32899.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32899");

(cljs.core.async.t_cljs$core$async32899.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32899");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32899.
 */
cljs.core.async.__GT_t_cljs$core$async32899 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32899(f__$1,ch__$1,meta32900){
return (new cljs.core.async.t_cljs$core$async32899(f__$1,ch__$1,meta32900));
});

}

return (new cljs.core.async.t_cljs$core$async32899(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32903 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32903 = (function (p,ch,meta32904){
this.p = p;
this.ch = ch;
this.meta32904 = meta32904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32905,meta32904__$1){
var self__ = this;
var _32905__$1 = this;
return (new cljs.core.async.t_cljs$core$async32903(self__.p,self__.ch,meta32904__$1));
}));

(cljs.core.async.t_cljs$core$async32903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32905){
var self__ = this;
var _32905__$1 = this;
return self__.meta32904;
}));

(cljs.core.async.t_cljs$core$async32903.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32903.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32903.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32903.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32903.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32903.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32903.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32903.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32904","meta32904",1800170661,null)], null);
}));

(cljs.core.async.t_cljs$core$async32903.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32903.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32903");

(cljs.core.async.t_cljs$core$async32903.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32903");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32903.
 */
cljs.core.async.__GT_t_cljs$core$async32903 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32903(p__$1,ch__$1,meta32904){
return (new cljs.core.async.t_cljs$core$async32903(p__$1,ch__$1,meta32904));
});

}

return (new cljs.core.async.t_cljs$core$async32903(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32907 = arguments.length;
switch (G__32907) {
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
var c__30930__auto___34258 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30931__auto__ = (function (){var switch__30758__auto__ = (function (state_32928){
var state_val_32929 = (state_32928[(1)]);
if((state_val_32929 === (7))){
var inst_32924 = (state_32928[(2)]);
var state_32928__$1 = state_32928;
var statearr_32930_34259 = state_32928__$1;
(statearr_32930_34259[(2)] = inst_32924);

(statearr_32930_34259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (1))){
var state_32928__$1 = state_32928;
var statearr_32931_34260 = state_32928__$1;
(statearr_32931_34260[(2)] = null);

(statearr_32931_34260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (4))){
var inst_32910 = (state_32928[(7)]);
var inst_32910__$1 = (state_32928[(2)]);
var inst_32911 = (inst_32910__$1 == null);
var state_32928__$1 = (function (){var statearr_32932 = state_32928;
(statearr_32932[(7)] = inst_32910__$1);

return statearr_32932;
})();
if(cljs.core.truth_(inst_32911)){
var statearr_32933_34261 = state_32928__$1;
(statearr_32933_34261[(1)] = (5));

} else {
var statearr_32934_34262 = state_32928__$1;
(statearr_32934_34262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (6))){
var inst_32910 = (state_32928[(7)]);
var inst_32915 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32910) : p.call(null,inst_32910));
var state_32928__$1 = state_32928;
if(cljs.core.truth_(inst_32915)){
var statearr_32935_34263 = state_32928__$1;
(statearr_32935_34263[(1)] = (8));

} else {
var statearr_32936_34264 = state_32928__$1;
(statearr_32936_34264[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (3))){
var inst_32926 = (state_32928[(2)]);
var state_32928__$1 = state_32928;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32928__$1,inst_32926);
} else {
if((state_val_32929 === (2))){
var state_32928__$1 = state_32928;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32928__$1,(4),ch);
} else {
if((state_val_32929 === (11))){
var inst_32918 = (state_32928[(2)]);
var state_32928__$1 = state_32928;
var statearr_32937_34283 = state_32928__$1;
(statearr_32937_34283[(2)] = inst_32918);

(statearr_32937_34283[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (9))){
var state_32928__$1 = state_32928;
var statearr_32938_34287 = state_32928__$1;
(statearr_32938_34287[(2)] = null);

(statearr_32938_34287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (5))){
var inst_32913 = cljs.core.async.close_BANG_(out);
var state_32928__$1 = state_32928;
var statearr_32939_34292 = state_32928__$1;
(statearr_32939_34292[(2)] = inst_32913);

(statearr_32939_34292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (10))){
var inst_32921 = (state_32928[(2)]);
var state_32928__$1 = (function (){var statearr_32940 = state_32928;
(statearr_32940[(8)] = inst_32921);

return statearr_32940;
})();
var statearr_32941_34293 = state_32928__$1;
(statearr_32941_34293[(2)] = null);

(statearr_32941_34293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (8))){
var inst_32910 = (state_32928[(7)]);
var state_32928__$1 = state_32928;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32928__$1,(11),out,inst_32910);
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
var cljs$core$async$state_machine__30759__auto__ = null;
var cljs$core$async$state_machine__30759__auto____0 = (function (){
var statearr_32942 = [null,null,null,null,null,null,null,null,null];
(statearr_32942[(0)] = cljs$core$async$state_machine__30759__auto__);

(statearr_32942[(1)] = (1));

return statearr_32942;
});
var cljs$core$async$state_machine__30759__auto____1 = (function (state_32928){
while(true){
var ret_value__30760__auto__ = (function (){try{while(true){
var result__30761__auto__ = switch__30758__auto__(state_32928);
if(cljs.core.keyword_identical_QMARK_(result__30761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30761__auto__;
}
break;
}
}catch (e32943){var ex__30762__auto__ = e32943;
var statearr_32944_34295 = state_32928;
(statearr_32944_34295[(2)] = ex__30762__auto__);


if(cljs.core.seq((state_32928[(4)]))){
var statearr_32945_34296 = state_32928;
(statearr_32945_34296[(1)] = cljs.core.first((state_32928[(4)])));

} else {
throw ex__30762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34298 = state_32928;
state_32928 = G__34298;
continue;
} else {
return ret_value__30760__auto__;
}
break;
}
});
cljs$core$async$state_machine__30759__auto__ = function(state_32928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30759__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30759__auto____1.call(this,state_32928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30759__auto____0;
cljs$core$async$state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30759__auto____1;
return cljs$core$async$state_machine__30759__auto__;
})()
})();
var state__30932__auto__ = (function (){var statearr_32946 = f__30931__auto__();
(statearr_32946[(6)] = c__30930__auto___34258);

return statearr_32946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30932__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32948 = arguments.length;
switch (G__32948) {
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
var c__30930__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30931__auto__ = (function (){var switch__30758__auto__ = (function (state_33010){
var state_val_33011 = (state_33010[(1)]);
if((state_val_33011 === (7))){
var inst_33006 = (state_33010[(2)]);
var state_33010__$1 = state_33010;
var statearr_33012_34310 = state_33010__$1;
(statearr_33012_34310[(2)] = inst_33006);

(statearr_33012_34310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (20))){
var inst_32976 = (state_33010[(7)]);
var inst_32987 = (state_33010[(2)]);
var inst_32988 = cljs.core.next(inst_32976);
var inst_32962 = inst_32988;
var inst_32963 = null;
var inst_32964 = (0);
var inst_32965 = (0);
var state_33010__$1 = (function (){var statearr_33013 = state_33010;
(statearr_33013[(8)] = inst_32964);

(statearr_33013[(9)] = inst_32987);

(statearr_33013[(10)] = inst_32963);

(statearr_33013[(11)] = inst_32965);

(statearr_33013[(12)] = inst_32962);

return statearr_33013;
})();
var statearr_33014_34315 = state_33010__$1;
(statearr_33014_34315[(2)] = null);

(statearr_33014_34315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (1))){
var state_33010__$1 = state_33010;
var statearr_33015_34316 = state_33010__$1;
(statearr_33015_34316[(2)] = null);

(statearr_33015_34316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (4))){
var inst_32951 = (state_33010[(13)]);
var inst_32951__$1 = (state_33010[(2)]);
var inst_32952 = (inst_32951__$1 == null);
var state_33010__$1 = (function (){var statearr_33016 = state_33010;
(statearr_33016[(13)] = inst_32951__$1);

return statearr_33016;
})();
if(cljs.core.truth_(inst_32952)){
var statearr_33017_34318 = state_33010__$1;
(statearr_33017_34318[(1)] = (5));

} else {
var statearr_33018_34319 = state_33010__$1;
(statearr_33018_34319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (15))){
var state_33010__$1 = state_33010;
var statearr_33022_34320 = state_33010__$1;
(statearr_33022_34320[(2)] = null);

(statearr_33022_34320[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (21))){
var state_33010__$1 = state_33010;
var statearr_33023_34321 = state_33010__$1;
(statearr_33023_34321[(2)] = null);

(statearr_33023_34321[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (13))){
var inst_32964 = (state_33010[(8)]);
var inst_32963 = (state_33010[(10)]);
var inst_32965 = (state_33010[(11)]);
var inst_32962 = (state_33010[(12)]);
var inst_32972 = (state_33010[(2)]);
var inst_32973 = (inst_32965 + (1));
var tmp33019 = inst_32964;
var tmp33020 = inst_32963;
var tmp33021 = inst_32962;
var inst_32962__$1 = tmp33021;
var inst_32963__$1 = tmp33020;
var inst_32964__$1 = tmp33019;
var inst_32965__$1 = inst_32973;
var state_33010__$1 = (function (){var statearr_33024 = state_33010;
(statearr_33024[(8)] = inst_32964__$1);

(statearr_33024[(10)] = inst_32963__$1);

(statearr_33024[(14)] = inst_32972);

(statearr_33024[(11)] = inst_32965__$1);

(statearr_33024[(12)] = inst_32962__$1);

return statearr_33024;
})();
var statearr_33025_34325 = state_33010__$1;
(statearr_33025_34325[(2)] = null);

(statearr_33025_34325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (22))){
var state_33010__$1 = state_33010;
var statearr_33026_34326 = state_33010__$1;
(statearr_33026_34326[(2)] = null);

(statearr_33026_34326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (6))){
var inst_32951 = (state_33010[(13)]);
var inst_32960 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32951) : f.call(null,inst_32951));
var inst_32961 = cljs.core.seq(inst_32960);
var inst_32962 = inst_32961;
var inst_32963 = null;
var inst_32964 = (0);
var inst_32965 = (0);
var state_33010__$1 = (function (){var statearr_33027 = state_33010;
(statearr_33027[(8)] = inst_32964);

(statearr_33027[(10)] = inst_32963);

(statearr_33027[(11)] = inst_32965);

(statearr_33027[(12)] = inst_32962);

return statearr_33027;
})();
var statearr_33028_34327 = state_33010__$1;
(statearr_33028_34327[(2)] = null);

(statearr_33028_34327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (17))){
var inst_32976 = (state_33010[(7)]);
var inst_32980 = cljs.core.chunk_first(inst_32976);
var inst_32981 = cljs.core.chunk_rest(inst_32976);
var inst_32982 = cljs.core.count(inst_32980);
var inst_32962 = inst_32981;
var inst_32963 = inst_32980;
var inst_32964 = inst_32982;
var inst_32965 = (0);
var state_33010__$1 = (function (){var statearr_33029 = state_33010;
(statearr_33029[(8)] = inst_32964);

(statearr_33029[(10)] = inst_32963);

(statearr_33029[(11)] = inst_32965);

(statearr_33029[(12)] = inst_32962);

return statearr_33029;
})();
var statearr_33030_34328 = state_33010__$1;
(statearr_33030_34328[(2)] = null);

(statearr_33030_34328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (3))){
var inst_33008 = (state_33010[(2)]);
var state_33010__$1 = state_33010;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33010__$1,inst_33008);
} else {
if((state_val_33011 === (12))){
var inst_32996 = (state_33010[(2)]);
var state_33010__$1 = state_33010;
var statearr_33031_34329 = state_33010__$1;
(statearr_33031_34329[(2)] = inst_32996);

(statearr_33031_34329[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (2))){
var state_33010__$1 = state_33010;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33010__$1,(4),in$);
} else {
if((state_val_33011 === (23))){
var inst_33004 = (state_33010[(2)]);
var state_33010__$1 = state_33010;
var statearr_33032_34330 = state_33010__$1;
(statearr_33032_34330[(2)] = inst_33004);

(statearr_33032_34330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (19))){
var inst_32991 = (state_33010[(2)]);
var state_33010__$1 = state_33010;
var statearr_33033_34331 = state_33010__$1;
(statearr_33033_34331[(2)] = inst_32991);

(statearr_33033_34331[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (11))){
var inst_32976 = (state_33010[(7)]);
var inst_32962 = (state_33010[(12)]);
var inst_32976__$1 = cljs.core.seq(inst_32962);
var state_33010__$1 = (function (){var statearr_33034 = state_33010;
(statearr_33034[(7)] = inst_32976__$1);

return statearr_33034;
})();
if(inst_32976__$1){
var statearr_33035_34332 = state_33010__$1;
(statearr_33035_34332[(1)] = (14));

} else {
var statearr_33036_34333 = state_33010__$1;
(statearr_33036_34333[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (9))){
var inst_32998 = (state_33010[(2)]);
var inst_32999 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33010__$1 = (function (){var statearr_33037 = state_33010;
(statearr_33037[(15)] = inst_32998);

return statearr_33037;
})();
if(cljs.core.truth_(inst_32999)){
var statearr_33038_34334 = state_33010__$1;
(statearr_33038_34334[(1)] = (21));

} else {
var statearr_33039_34335 = state_33010__$1;
(statearr_33039_34335[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (5))){
var inst_32954 = cljs.core.async.close_BANG_(out);
var state_33010__$1 = state_33010;
var statearr_33040_34339 = state_33010__$1;
(statearr_33040_34339[(2)] = inst_32954);

(statearr_33040_34339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (14))){
var inst_32976 = (state_33010[(7)]);
var inst_32978 = cljs.core.chunked_seq_QMARK_(inst_32976);
var state_33010__$1 = state_33010;
if(inst_32978){
var statearr_33041_34340 = state_33010__$1;
(statearr_33041_34340[(1)] = (17));

} else {
var statearr_33042_34341 = state_33010__$1;
(statearr_33042_34341[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (16))){
var inst_32994 = (state_33010[(2)]);
var state_33010__$1 = state_33010;
var statearr_33043_34342 = state_33010__$1;
(statearr_33043_34342[(2)] = inst_32994);

(statearr_33043_34342[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (10))){
var inst_32963 = (state_33010[(10)]);
var inst_32965 = (state_33010[(11)]);
var inst_32970 = cljs.core._nth(inst_32963,inst_32965);
var state_33010__$1 = state_33010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33010__$1,(13),out,inst_32970);
} else {
if((state_val_33011 === (18))){
var inst_32976 = (state_33010[(7)]);
var inst_32985 = cljs.core.first(inst_32976);
var state_33010__$1 = state_33010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33010__$1,(20),out,inst_32985);
} else {
if((state_val_33011 === (8))){
var inst_32964 = (state_33010[(8)]);
var inst_32965 = (state_33010[(11)]);
var inst_32967 = (inst_32965 < inst_32964);
var inst_32968 = inst_32967;
var state_33010__$1 = state_33010;
if(cljs.core.truth_(inst_32968)){
var statearr_33044_34343 = state_33010__$1;
(statearr_33044_34343[(1)] = (10));

} else {
var statearr_33045_34344 = state_33010__$1;
(statearr_33045_34344[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__30759__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30759__auto____0 = (function (){
var statearr_33046 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33046[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30759__auto__);

(statearr_33046[(1)] = (1));

return statearr_33046;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30759__auto____1 = (function (state_33010){
while(true){
var ret_value__30760__auto__ = (function (){try{while(true){
var result__30761__auto__ = switch__30758__auto__(state_33010);
if(cljs.core.keyword_identical_QMARK_(result__30761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30761__auto__;
}
break;
}
}catch (e33047){var ex__30762__auto__ = e33047;
var statearr_33048_34346 = state_33010;
(statearr_33048_34346[(2)] = ex__30762__auto__);


if(cljs.core.seq((state_33010[(4)]))){
var statearr_33049_34347 = state_33010;
(statearr_33049_34347[(1)] = cljs.core.first((state_33010[(4)])));

} else {
throw ex__30762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34348 = state_33010;
state_33010 = G__34348;
continue;
} else {
return ret_value__30760__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30759__auto__ = function(state_33010){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30759__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30759__auto____1.call(this,state_33010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30759__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30759__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30759__auto__;
})()
})();
var state__30932__auto__ = (function (){var statearr_33050 = f__30931__auto__();
(statearr_33050[(6)] = c__30930__auto__);

return statearr_33050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30932__auto__);
}));

return c__30930__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33052 = arguments.length;
switch (G__33052) {
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
var G__33054 = arguments.length;
switch (G__33054) {
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
var G__33056 = arguments.length;
switch (G__33056) {
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
var c__30930__auto___34353 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30931__auto__ = (function (){var switch__30758__auto__ = (function (state_33080){
var state_val_33081 = (state_33080[(1)]);
if((state_val_33081 === (7))){
var inst_33075 = (state_33080[(2)]);
var state_33080__$1 = state_33080;
var statearr_33082_34354 = state_33080__$1;
(statearr_33082_34354[(2)] = inst_33075);

(statearr_33082_34354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (1))){
var inst_33057 = null;
var state_33080__$1 = (function (){var statearr_33083 = state_33080;
(statearr_33083[(7)] = inst_33057);

return statearr_33083;
})();
var statearr_33084_34355 = state_33080__$1;
(statearr_33084_34355[(2)] = null);

(statearr_33084_34355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (4))){
var inst_33060 = (state_33080[(8)]);
var inst_33060__$1 = (state_33080[(2)]);
var inst_33061 = (inst_33060__$1 == null);
var inst_33062 = cljs.core.not(inst_33061);
var state_33080__$1 = (function (){var statearr_33085 = state_33080;
(statearr_33085[(8)] = inst_33060__$1);

return statearr_33085;
})();
if(inst_33062){
var statearr_33086_34356 = state_33080__$1;
(statearr_33086_34356[(1)] = (5));

} else {
var statearr_33087_34357 = state_33080__$1;
(statearr_33087_34357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (6))){
var state_33080__$1 = state_33080;
var statearr_33088_34358 = state_33080__$1;
(statearr_33088_34358[(2)] = null);

(statearr_33088_34358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (3))){
var inst_33077 = (state_33080[(2)]);
var inst_33078 = cljs.core.async.close_BANG_(out);
var state_33080__$1 = (function (){var statearr_33089 = state_33080;
(statearr_33089[(9)] = inst_33077);

return statearr_33089;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33080__$1,inst_33078);
} else {
if((state_val_33081 === (2))){
var state_33080__$1 = state_33080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33080__$1,(4),ch);
} else {
if((state_val_33081 === (11))){
var inst_33060 = (state_33080[(8)]);
var inst_33069 = (state_33080[(2)]);
var inst_33057 = inst_33060;
var state_33080__$1 = (function (){var statearr_33090 = state_33080;
(statearr_33090[(7)] = inst_33057);

(statearr_33090[(10)] = inst_33069);

return statearr_33090;
})();
var statearr_33091_34359 = state_33080__$1;
(statearr_33091_34359[(2)] = null);

(statearr_33091_34359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (9))){
var inst_33060 = (state_33080[(8)]);
var state_33080__$1 = state_33080;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33080__$1,(11),out,inst_33060);
} else {
if((state_val_33081 === (5))){
var inst_33060 = (state_33080[(8)]);
var inst_33057 = (state_33080[(7)]);
var inst_33064 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33060,inst_33057);
var state_33080__$1 = state_33080;
if(inst_33064){
var statearr_33093_34360 = state_33080__$1;
(statearr_33093_34360[(1)] = (8));

} else {
var statearr_33094_34361 = state_33080__$1;
(statearr_33094_34361[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (10))){
var inst_33072 = (state_33080[(2)]);
var state_33080__$1 = state_33080;
var statearr_33095_34362 = state_33080__$1;
(statearr_33095_34362[(2)] = inst_33072);

(statearr_33095_34362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (8))){
var inst_33057 = (state_33080[(7)]);
var tmp33092 = inst_33057;
var inst_33057__$1 = tmp33092;
var state_33080__$1 = (function (){var statearr_33096 = state_33080;
(statearr_33096[(7)] = inst_33057__$1);

return statearr_33096;
})();
var statearr_33097_34363 = state_33080__$1;
(statearr_33097_34363[(2)] = null);

(statearr_33097_34363[(1)] = (2));


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
var cljs$core$async$state_machine__30759__auto__ = null;
var cljs$core$async$state_machine__30759__auto____0 = (function (){
var statearr_33098 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33098[(0)] = cljs$core$async$state_machine__30759__auto__);

(statearr_33098[(1)] = (1));

return statearr_33098;
});
var cljs$core$async$state_machine__30759__auto____1 = (function (state_33080){
while(true){
var ret_value__30760__auto__ = (function (){try{while(true){
var result__30761__auto__ = switch__30758__auto__(state_33080);
if(cljs.core.keyword_identical_QMARK_(result__30761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30761__auto__;
}
break;
}
}catch (e33099){var ex__30762__auto__ = e33099;
var statearr_33100_34364 = state_33080;
(statearr_33100_34364[(2)] = ex__30762__auto__);


if(cljs.core.seq((state_33080[(4)]))){
var statearr_33101_34365 = state_33080;
(statearr_33101_34365[(1)] = cljs.core.first((state_33080[(4)])));

} else {
throw ex__30762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34366 = state_33080;
state_33080 = G__34366;
continue;
} else {
return ret_value__30760__auto__;
}
break;
}
});
cljs$core$async$state_machine__30759__auto__ = function(state_33080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30759__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30759__auto____1.call(this,state_33080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30759__auto____0;
cljs$core$async$state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30759__auto____1;
return cljs$core$async$state_machine__30759__auto__;
})()
})();
var state__30932__auto__ = (function (){var statearr_33102 = f__30931__auto__();
(statearr_33102[(6)] = c__30930__auto___34353);

return statearr_33102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30932__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33104 = arguments.length;
switch (G__33104) {
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
var c__30930__auto___34371 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30931__auto__ = (function (){var switch__30758__auto__ = (function (state_33142){
var state_val_33143 = (state_33142[(1)]);
if((state_val_33143 === (7))){
var inst_33138 = (state_33142[(2)]);
var state_33142__$1 = state_33142;
var statearr_33144_34372 = state_33142__$1;
(statearr_33144_34372[(2)] = inst_33138);

(statearr_33144_34372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (1))){
var inst_33105 = (new Array(n));
var inst_33106 = inst_33105;
var inst_33107 = (0);
var state_33142__$1 = (function (){var statearr_33145 = state_33142;
(statearr_33145[(7)] = inst_33106);

(statearr_33145[(8)] = inst_33107);

return statearr_33145;
})();
var statearr_33146_34373 = state_33142__$1;
(statearr_33146_34373[(2)] = null);

(statearr_33146_34373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (4))){
var inst_33110 = (state_33142[(9)]);
var inst_33110__$1 = (state_33142[(2)]);
var inst_33111 = (inst_33110__$1 == null);
var inst_33112 = cljs.core.not(inst_33111);
var state_33142__$1 = (function (){var statearr_33147 = state_33142;
(statearr_33147[(9)] = inst_33110__$1);

return statearr_33147;
})();
if(inst_33112){
var statearr_33148_34374 = state_33142__$1;
(statearr_33148_34374[(1)] = (5));

} else {
var statearr_33149_34375 = state_33142__$1;
(statearr_33149_34375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (15))){
var inst_33132 = (state_33142[(2)]);
var state_33142__$1 = state_33142;
var statearr_33150_34376 = state_33142__$1;
(statearr_33150_34376[(2)] = inst_33132);

(statearr_33150_34376[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (13))){
var state_33142__$1 = state_33142;
var statearr_33151_34377 = state_33142__$1;
(statearr_33151_34377[(2)] = null);

(statearr_33151_34377[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (6))){
var inst_33107 = (state_33142[(8)]);
var inst_33128 = (inst_33107 > (0));
var state_33142__$1 = state_33142;
if(cljs.core.truth_(inst_33128)){
var statearr_33152_34380 = state_33142__$1;
(statearr_33152_34380[(1)] = (12));

} else {
var statearr_33153_34381 = state_33142__$1;
(statearr_33153_34381[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (3))){
var inst_33140 = (state_33142[(2)]);
var state_33142__$1 = state_33142;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33142__$1,inst_33140);
} else {
if((state_val_33143 === (12))){
var inst_33106 = (state_33142[(7)]);
var inst_33130 = cljs.core.vec(inst_33106);
var state_33142__$1 = state_33142;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33142__$1,(15),out,inst_33130);
} else {
if((state_val_33143 === (2))){
var state_33142__$1 = state_33142;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33142__$1,(4),ch);
} else {
if((state_val_33143 === (11))){
var inst_33122 = (state_33142[(2)]);
var inst_33123 = (new Array(n));
var inst_33106 = inst_33123;
var inst_33107 = (0);
var state_33142__$1 = (function (){var statearr_33154 = state_33142;
(statearr_33154[(7)] = inst_33106);

(statearr_33154[(8)] = inst_33107);

(statearr_33154[(10)] = inst_33122);

return statearr_33154;
})();
var statearr_33155_34400 = state_33142__$1;
(statearr_33155_34400[(2)] = null);

(statearr_33155_34400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (9))){
var inst_33106 = (state_33142[(7)]);
var inst_33120 = cljs.core.vec(inst_33106);
var state_33142__$1 = state_33142;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33142__$1,(11),out,inst_33120);
} else {
if((state_val_33143 === (5))){
var inst_33115 = (state_33142[(11)]);
var inst_33106 = (state_33142[(7)]);
var inst_33107 = (state_33142[(8)]);
var inst_33110 = (state_33142[(9)]);
var inst_33114 = (inst_33106[inst_33107] = inst_33110);
var inst_33115__$1 = (inst_33107 + (1));
var inst_33116 = (inst_33115__$1 < n);
var state_33142__$1 = (function (){var statearr_33156 = state_33142;
(statearr_33156[(12)] = inst_33114);

(statearr_33156[(11)] = inst_33115__$1);

return statearr_33156;
})();
if(cljs.core.truth_(inst_33116)){
var statearr_33157_34401 = state_33142__$1;
(statearr_33157_34401[(1)] = (8));

} else {
var statearr_33158_34402 = state_33142__$1;
(statearr_33158_34402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (14))){
var inst_33135 = (state_33142[(2)]);
var inst_33136 = cljs.core.async.close_BANG_(out);
var state_33142__$1 = (function (){var statearr_33160 = state_33142;
(statearr_33160[(13)] = inst_33135);

return statearr_33160;
})();
var statearr_33161_34403 = state_33142__$1;
(statearr_33161_34403[(2)] = inst_33136);

(statearr_33161_34403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (10))){
var inst_33126 = (state_33142[(2)]);
var state_33142__$1 = state_33142;
var statearr_33162_34404 = state_33142__$1;
(statearr_33162_34404[(2)] = inst_33126);

(statearr_33162_34404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (8))){
var inst_33115 = (state_33142[(11)]);
var inst_33106 = (state_33142[(7)]);
var tmp33159 = inst_33106;
var inst_33106__$1 = tmp33159;
var inst_33107 = inst_33115;
var state_33142__$1 = (function (){var statearr_33163 = state_33142;
(statearr_33163[(7)] = inst_33106__$1);

(statearr_33163[(8)] = inst_33107);

return statearr_33163;
})();
var statearr_33164_34412 = state_33142__$1;
(statearr_33164_34412[(2)] = null);

(statearr_33164_34412[(1)] = (2));


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
var cljs$core$async$state_machine__30759__auto__ = null;
var cljs$core$async$state_machine__30759__auto____0 = (function (){
var statearr_33165 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33165[(0)] = cljs$core$async$state_machine__30759__auto__);

(statearr_33165[(1)] = (1));

return statearr_33165;
});
var cljs$core$async$state_machine__30759__auto____1 = (function (state_33142){
while(true){
var ret_value__30760__auto__ = (function (){try{while(true){
var result__30761__auto__ = switch__30758__auto__(state_33142);
if(cljs.core.keyword_identical_QMARK_(result__30761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30761__auto__;
}
break;
}
}catch (e33167){var ex__30762__auto__ = e33167;
var statearr_33168_34418 = state_33142;
(statearr_33168_34418[(2)] = ex__30762__auto__);


if(cljs.core.seq((state_33142[(4)]))){
var statearr_33169_34420 = state_33142;
(statearr_33169_34420[(1)] = cljs.core.first((state_33142[(4)])));

} else {
throw ex__30762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34427 = state_33142;
state_33142 = G__34427;
continue;
} else {
return ret_value__30760__auto__;
}
break;
}
});
cljs$core$async$state_machine__30759__auto__ = function(state_33142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30759__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30759__auto____1.call(this,state_33142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30759__auto____0;
cljs$core$async$state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30759__auto____1;
return cljs$core$async$state_machine__30759__auto__;
})()
})();
var state__30932__auto__ = (function (){var statearr_33170 = f__30931__auto__();
(statearr_33170[(6)] = c__30930__auto___34371);

return statearr_33170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30932__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33172 = arguments.length;
switch (G__33172) {
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
var c__30930__auto___34444 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30931__auto__ = (function (){var switch__30758__auto__ = (function (state_33215){
var state_val_33216 = (state_33215[(1)]);
if((state_val_33216 === (7))){
var inst_33211 = (state_33215[(2)]);
var state_33215__$1 = state_33215;
var statearr_33217_34485 = state_33215__$1;
(statearr_33217_34485[(2)] = inst_33211);

(statearr_33217_34485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33216 === (1))){
var inst_33174 = [];
var inst_33175 = inst_33174;
var inst_33176 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33215__$1 = (function (){var statearr_33218 = state_33215;
(statearr_33218[(7)] = inst_33176);

(statearr_33218[(8)] = inst_33175);

return statearr_33218;
})();
var statearr_33219_34495 = state_33215__$1;
(statearr_33219_34495[(2)] = null);

(statearr_33219_34495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33216 === (4))){
var inst_33179 = (state_33215[(9)]);
var inst_33179__$1 = (state_33215[(2)]);
var inst_33180 = (inst_33179__$1 == null);
var inst_33181 = cljs.core.not(inst_33180);
var state_33215__$1 = (function (){var statearr_33228 = state_33215;
(statearr_33228[(9)] = inst_33179__$1);

return statearr_33228;
})();
if(inst_33181){
var statearr_33229_34511 = state_33215__$1;
(statearr_33229_34511[(1)] = (5));

} else {
var statearr_33230_34517 = state_33215__$1;
(statearr_33230_34517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33216 === (15))){
var inst_33205 = (state_33215[(2)]);
var state_33215__$1 = state_33215;
var statearr_33231_34519 = state_33215__$1;
(statearr_33231_34519[(2)] = inst_33205);

(statearr_33231_34519[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33216 === (13))){
var state_33215__$1 = state_33215;
var statearr_33232_34520 = state_33215__$1;
(statearr_33232_34520[(2)] = null);

(statearr_33232_34520[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33216 === (6))){
var inst_33175 = (state_33215[(8)]);
var inst_33200 = inst_33175.length;
var inst_33201 = (inst_33200 > (0));
var state_33215__$1 = state_33215;
if(cljs.core.truth_(inst_33201)){
var statearr_33233_34525 = state_33215__$1;
(statearr_33233_34525[(1)] = (12));

} else {
var statearr_33234_34526 = state_33215__$1;
(statearr_33234_34526[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33216 === (3))){
var inst_33213 = (state_33215[(2)]);
var state_33215__$1 = state_33215;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33215__$1,inst_33213);
} else {
if((state_val_33216 === (12))){
var inst_33175 = (state_33215[(8)]);
var inst_33203 = cljs.core.vec(inst_33175);
var state_33215__$1 = state_33215;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33215__$1,(15),out,inst_33203);
} else {
if((state_val_33216 === (2))){
var state_33215__$1 = state_33215;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33215__$1,(4),ch);
} else {
if((state_val_33216 === (11))){
var inst_33183 = (state_33215[(10)]);
var inst_33179 = (state_33215[(9)]);
var inst_33193 = (state_33215[(2)]);
var inst_33194 = [];
var inst_33195 = inst_33194.push(inst_33179);
var inst_33175 = inst_33194;
var inst_33176 = inst_33183;
var state_33215__$1 = (function (){var statearr_33236 = state_33215;
(statearr_33236[(7)] = inst_33176);

(statearr_33236[(11)] = inst_33193);

(statearr_33236[(8)] = inst_33175);

(statearr_33236[(12)] = inst_33195);

return statearr_33236;
})();
var statearr_33237_34547 = state_33215__$1;
(statearr_33237_34547[(2)] = null);

(statearr_33237_34547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33216 === (9))){
var inst_33175 = (state_33215[(8)]);
var inst_33191 = cljs.core.vec(inst_33175);
var state_33215__$1 = state_33215;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33215__$1,(11),out,inst_33191);
} else {
if((state_val_33216 === (5))){
var inst_33183 = (state_33215[(10)]);
var inst_33179 = (state_33215[(9)]);
var inst_33176 = (state_33215[(7)]);
var inst_33183__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33179) : f.call(null,inst_33179));
var inst_33184 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33183__$1,inst_33176);
var inst_33185 = cljs.core.keyword_identical_QMARK_(inst_33176,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33186 = ((inst_33184) || (inst_33185));
var state_33215__$1 = (function (){var statearr_33238 = state_33215;
(statearr_33238[(10)] = inst_33183__$1);

return statearr_33238;
})();
if(cljs.core.truth_(inst_33186)){
var statearr_33239_34548 = state_33215__$1;
(statearr_33239_34548[(1)] = (8));

} else {
var statearr_33240_34549 = state_33215__$1;
(statearr_33240_34549[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33216 === (14))){
var inst_33208 = (state_33215[(2)]);
var inst_33209 = cljs.core.async.close_BANG_(out);
var state_33215__$1 = (function (){var statearr_33242 = state_33215;
(statearr_33242[(13)] = inst_33208);

return statearr_33242;
})();
var statearr_33243_34550 = state_33215__$1;
(statearr_33243_34550[(2)] = inst_33209);

(statearr_33243_34550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33216 === (10))){
var inst_33198 = (state_33215[(2)]);
var state_33215__$1 = state_33215;
var statearr_33244_34554 = state_33215__$1;
(statearr_33244_34554[(2)] = inst_33198);

(statearr_33244_34554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33216 === (8))){
var inst_33183 = (state_33215[(10)]);
var inst_33179 = (state_33215[(9)]);
var inst_33175 = (state_33215[(8)]);
var inst_33188 = inst_33175.push(inst_33179);
var tmp33241 = inst_33175;
var inst_33175__$1 = tmp33241;
var inst_33176 = inst_33183;
var state_33215__$1 = (function (){var statearr_33245 = state_33215;
(statearr_33245[(7)] = inst_33176);

(statearr_33245[(8)] = inst_33175__$1);

(statearr_33245[(14)] = inst_33188);

return statearr_33245;
})();
var statearr_33246_34555 = state_33215__$1;
(statearr_33246_34555[(2)] = null);

(statearr_33246_34555[(1)] = (2));


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
var cljs$core$async$state_machine__30759__auto__ = null;
var cljs$core$async$state_machine__30759__auto____0 = (function (){
var statearr_33260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33260[(0)] = cljs$core$async$state_machine__30759__auto__);

(statearr_33260[(1)] = (1));

return statearr_33260;
});
var cljs$core$async$state_machine__30759__auto____1 = (function (state_33215){
while(true){
var ret_value__30760__auto__ = (function (){try{while(true){
var result__30761__auto__ = switch__30758__auto__(state_33215);
if(cljs.core.keyword_identical_QMARK_(result__30761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30761__auto__;
}
break;
}
}catch (e33261){var ex__30762__auto__ = e33261;
var statearr_33262_34575 = state_33215;
(statearr_33262_34575[(2)] = ex__30762__auto__);


if(cljs.core.seq((state_33215[(4)]))){
var statearr_33263_34576 = state_33215;
(statearr_33263_34576[(1)] = cljs.core.first((state_33215[(4)])));

} else {
throw ex__30762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34577 = state_33215;
state_33215 = G__34577;
continue;
} else {
return ret_value__30760__auto__;
}
break;
}
});
cljs$core$async$state_machine__30759__auto__ = function(state_33215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30759__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30759__auto____1.call(this,state_33215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30759__auto____0;
cljs$core$async$state_machine__30759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30759__auto____1;
return cljs$core$async$state_machine__30759__auto__;
})()
})();
var state__30932__auto__ = (function (){var statearr_33264 = f__30931__auto__();
(statearr_33264[(6)] = c__30930__auto___34444);

return statearr_33264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30932__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
