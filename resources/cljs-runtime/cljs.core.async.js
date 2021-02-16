goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30995 = arguments.length;
switch (G__30995) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30996 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30996 = (function (f,blockable,meta30997){
this.f = f;
this.blockable = blockable;
this.meta30997 = meta30997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30998,meta30997__$1){
var self__ = this;
var _30998__$1 = this;
return (new cljs.core.async.t_cljs$core$async30996(self__.f,self__.blockable,meta30997__$1));
}));

(cljs.core.async.t_cljs$core$async30996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30998){
var self__ = this;
var _30998__$1 = this;
return self__.meta30997;
}));

(cljs.core.async.t_cljs$core$async30996.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30996.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30996.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30996.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30996.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30997","meta30997",460332724,null)], null);
}));

(cljs.core.async.t_cljs$core$async30996.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30996.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30996");

(cljs.core.async.t_cljs$core$async30996.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30996");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30996.
 */
cljs.core.async.__GT_t_cljs$core$async30996 = (function cljs$core$async$__GT_t_cljs$core$async30996(f__$1,blockable__$1,meta30997){
return (new cljs.core.async.t_cljs$core$async30996(f__$1,blockable__$1,meta30997));
});

}

return (new cljs.core.async.t_cljs$core$async30996(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31004 = arguments.length;
switch (G__31004) {
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
var G__31013 = arguments.length;
switch (G__31013) {
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
var G__31015 = arguments.length;
switch (G__31015) {
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
var val_33278 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33278) : fn1.call(null,val_33278));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33278) : fn1.call(null,val_33278));
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
var G__31030 = arguments.length;
switch (G__31030) {
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
var n__4613__auto___33282 = n;
var x_33283 = (0);
while(true){
if((x_33283 < n__4613__auto___33282)){
(a[x_33283] = x_33283);

var G__33284 = (x_33283 + (1));
x_33283 = G__33284;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31047 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31047 = (function (flag,meta31048){
this.flag = flag;
this.meta31048 = meta31048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31049,meta31048__$1){
var self__ = this;
var _31049__$1 = this;
return (new cljs.core.async.t_cljs$core$async31047(self__.flag,meta31048__$1));
}));

(cljs.core.async.t_cljs$core$async31047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31049){
var self__ = this;
var _31049__$1 = this;
return self__.meta31048;
}));

(cljs.core.async.t_cljs$core$async31047.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31047.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31047.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31047.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31047.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31048","meta31048",-2085051677,null)], null);
}));

(cljs.core.async.t_cljs$core$async31047.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31047.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31047");

(cljs.core.async.t_cljs$core$async31047.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31047");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31047.
 */
cljs.core.async.__GT_t_cljs$core$async31047 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31047(flag__$1,meta31048){
return (new cljs.core.async.t_cljs$core$async31047(flag__$1,meta31048));
});

}

return (new cljs.core.async.t_cljs$core$async31047(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31056 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31056 = (function (flag,cb,meta31057){
this.flag = flag;
this.cb = cb;
this.meta31057 = meta31057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31058,meta31057__$1){
var self__ = this;
var _31058__$1 = this;
return (new cljs.core.async.t_cljs$core$async31056(self__.flag,self__.cb,meta31057__$1));
}));

(cljs.core.async.t_cljs$core$async31056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31058){
var self__ = this;
var _31058__$1 = this;
return self__.meta31057;
}));

(cljs.core.async.t_cljs$core$async31056.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31056.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31056.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31056.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31056.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31057","meta31057",1649658001,null)], null);
}));

(cljs.core.async.t_cljs$core$async31056.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31056.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31056");

(cljs.core.async.t_cljs$core$async31056.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31056");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31056.
 */
cljs.core.async.__GT_t_cljs$core$async31056 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31056(flag__$1,cb__$1,meta31057){
return (new cljs.core.async.t_cljs$core$async31056(flag__$1,cb__$1,meta31057));
});

}

return (new cljs.core.async.t_cljs$core$async31056(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31069_SHARP_){
var G__31071 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31069_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31071) : fret.call(null,G__31071));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31070_SHARP_){
var G__31072 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31070_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31072) : fret.call(null,G__31072));
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
var G__33299 = (i + (1));
i = G__33299;
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
var len__4736__auto___33300 = arguments.length;
var i__4737__auto___33301 = (0);
while(true){
if((i__4737__auto___33301 < len__4736__auto___33300)){
args__4742__auto__.push((arguments[i__4737__auto___33301]));

var G__33302 = (i__4737__auto___33301 + (1));
i__4737__auto___33301 = G__33302;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31075){
var map__31076 = p__31075;
var map__31076__$1 = (((((!((map__31076 == null))))?(((((map__31076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31076):map__31076);
var opts = map__31076__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31073){
var G__31074 = cljs.core.first(seq31073);
var seq31073__$1 = cljs.core.next(seq31073);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31074,seq31073__$1);
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
var G__31086 = arguments.length;
switch (G__31086) {
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
var c__30914__auto___33310 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30915__auto__ = (function (){var switch__30738__auto__ = (function (state_31124){
var state_val_31126 = (state_31124[(1)]);
if((state_val_31126 === (7))){
var inst_31111 = (state_31124[(2)]);
var state_31124__$1 = state_31124;
var statearr_31128_33311 = state_31124__$1;
(statearr_31128_33311[(2)] = inst_31111);

(statearr_31128_33311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (1))){
var state_31124__$1 = state_31124;
var statearr_31129_33312 = state_31124__$1;
(statearr_31129_33312[(2)] = null);

(statearr_31129_33312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (4))){
var inst_31094 = (state_31124[(7)]);
var inst_31094__$1 = (state_31124[(2)]);
var inst_31095 = (inst_31094__$1 == null);
var state_31124__$1 = (function (){var statearr_31130 = state_31124;
(statearr_31130[(7)] = inst_31094__$1);

return statearr_31130;
})();
if(cljs.core.truth_(inst_31095)){
var statearr_31131_33313 = state_31124__$1;
(statearr_31131_33313[(1)] = (5));

} else {
var statearr_31132_33314 = state_31124__$1;
(statearr_31132_33314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (13))){
var state_31124__$1 = state_31124;
var statearr_31133_33315 = state_31124__$1;
(statearr_31133_33315[(2)] = null);

(statearr_31133_33315[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (6))){
var inst_31094 = (state_31124[(7)]);
var state_31124__$1 = state_31124;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31124__$1,(11),to,inst_31094);
} else {
if((state_val_31126 === (3))){
var inst_31113 = (state_31124[(2)]);
var state_31124__$1 = state_31124;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31124__$1,inst_31113);
} else {
if((state_val_31126 === (12))){
var state_31124__$1 = state_31124;
var statearr_31134_33316 = state_31124__$1;
(statearr_31134_33316[(2)] = null);

(statearr_31134_33316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (2))){
var state_31124__$1 = state_31124;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31124__$1,(4),from);
} else {
if((state_val_31126 === (11))){
var inst_31104 = (state_31124[(2)]);
var state_31124__$1 = state_31124;
if(cljs.core.truth_(inst_31104)){
var statearr_31135_33317 = state_31124__$1;
(statearr_31135_33317[(1)] = (12));

} else {
var statearr_31136_33319 = state_31124__$1;
(statearr_31136_33319[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (9))){
var state_31124__$1 = state_31124;
var statearr_31137_33320 = state_31124__$1;
(statearr_31137_33320[(2)] = null);

(statearr_31137_33320[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (5))){
var state_31124__$1 = state_31124;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31152_33321 = state_31124__$1;
(statearr_31152_33321[(1)] = (8));

} else {
var statearr_31153_33322 = state_31124__$1;
(statearr_31153_33322[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (14))){
var inst_31109 = (state_31124[(2)]);
var state_31124__$1 = state_31124;
var statearr_31154_33323 = state_31124__$1;
(statearr_31154_33323[(2)] = inst_31109);

(statearr_31154_33323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (10))){
var inst_31101 = (state_31124[(2)]);
var state_31124__$1 = state_31124;
var statearr_31155_33324 = state_31124__$1;
(statearr_31155_33324[(2)] = inst_31101);

(statearr_31155_33324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31126 === (8))){
var inst_31098 = cljs.core.async.close_BANG_(to);
var state_31124__$1 = state_31124;
var statearr_31156_33325 = state_31124__$1;
(statearr_31156_33325[(2)] = inst_31098);

(statearr_31156_33325[(1)] = (10));


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
var cljs$core$async$state_machine__30739__auto__ = null;
var cljs$core$async$state_machine__30739__auto____0 = (function (){
var statearr_31157 = [null,null,null,null,null,null,null,null];
(statearr_31157[(0)] = cljs$core$async$state_machine__30739__auto__);

(statearr_31157[(1)] = (1));

return statearr_31157;
});
var cljs$core$async$state_machine__30739__auto____1 = (function (state_31124){
while(true){
var ret_value__30740__auto__ = (function (){try{while(true){
var result__30741__auto__ = switch__30738__auto__(state_31124);
if(cljs.core.keyword_identical_QMARK_(result__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30741__auto__;
}
break;
}
}catch (e31158){var ex__30742__auto__ = e31158;
var statearr_31159_33332 = state_31124;
(statearr_31159_33332[(2)] = ex__30742__auto__);


if(cljs.core.seq((state_31124[(4)]))){
var statearr_31161_33333 = state_31124;
(statearr_31161_33333[(1)] = cljs.core.first((state_31124[(4)])));

} else {
throw ex__30742__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33334 = state_31124;
state_31124 = G__33334;
continue;
} else {
return ret_value__30740__auto__;
}
break;
}
});
cljs$core$async$state_machine__30739__auto__ = function(state_31124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30739__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30739__auto____1.call(this,state_31124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30739__auto____0;
cljs$core$async$state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30739__auto____1;
return cljs$core$async$state_machine__30739__auto__;
})()
})();
var state__30916__auto__ = (function (){var statearr_31163 = f__30915__auto__();
(statearr_31163[(6)] = c__30914__auto___33310);

return statearr_31163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30916__auto__);
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
var process = (function (p__31166){
var vec__31167 = p__31166;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31167,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31167,(1),null);
var job = vec__31167;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30914__auto___33335 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30915__auto__ = (function (){var switch__30738__auto__ = (function (state_31175){
var state_val_31176 = (state_31175[(1)]);
if((state_val_31176 === (1))){
var state_31175__$1 = state_31175;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31175__$1,(2),res,v);
} else {
if((state_val_31176 === (2))){
var inst_31172 = (state_31175[(2)]);
var inst_31173 = cljs.core.async.close_BANG_(res);
var state_31175__$1 = (function (){var statearr_31179 = state_31175;
(statearr_31179[(7)] = inst_31172);

return statearr_31179;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31175__$1,inst_31173);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30739__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30739__auto____0 = (function (){
var statearr_31180 = [null,null,null,null,null,null,null,null];
(statearr_31180[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30739__auto__);

(statearr_31180[(1)] = (1));

return statearr_31180;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30739__auto____1 = (function (state_31175){
while(true){
var ret_value__30740__auto__ = (function (){try{while(true){
var result__30741__auto__ = switch__30738__auto__(state_31175);
if(cljs.core.keyword_identical_QMARK_(result__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30741__auto__;
}
break;
}
}catch (e31181){var ex__30742__auto__ = e31181;
var statearr_31182_33336 = state_31175;
(statearr_31182_33336[(2)] = ex__30742__auto__);


if(cljs.core.seq((state_31175[(4)]))){
var statearr_31183_33337 = state_31175;
(statearr_31183_33337[(1)] = cljs.core.first((state_31175[(4)])));

} else {
throw ex__30742__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33342 = state_31175;
state_31175 = G__33342;
continue;
} else {
return ret_value__30740__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30739__auto__ = function(state_31175){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30739__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30739__auto____1.call(this,state_31175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30739__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30739__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30739__auto__;
})()
})();
var state__30916__auto__ = (function (){var statearr_31184 = f__30915__auto__();
(statearr_31184[(6)] = c__30914__auto___33335);

return statearr_31184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30916__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31185){
var vec__31186 = p__31185;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31186,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31186,(1),null);
var job = vec__31186;
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
var n__4613__auto___33343 = n;
var __33344 = (0);
while(true){
if((__33344 < n__4613__auto___33343)){
var G__31189_33345 = type;
var G__31189_33346__$1 = (((G__31189_33345 instanceof cljs.core.Keyword))?G__31189_33345.fqn:null);
switch (G__31189_33346__$1) {
case "compute":
var c__30914__auto___33348 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33344,c__30914__auto___33348,G__31189_33345,G__31189_33346__$1,n__4613__auto___33343,jobs,results,process,async){
return (function (){
var f__30915__auto__ = (function (){var switch__30738__auto__ = ((function (__33344,c__30914__auto___33348,G__31189_33345,G__31189_33346__$1,n__4613__auto___33343,jobs,results,process,async){
return (function (state_31202){
var state_val_31203 = (state_31202[(1)]);
if((state_val_31203 === (1))){
var state_31202__$1 = state_31202;
var statearr_31204_33349 = state_31202__$1;
(statearr_31204_33349[(2)] = null);

(statearr_31204_33349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (2))){
var state_31202__$1 = state_31202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31202__$1,(4),jobs);
} else {
if((state_val_31203 === (3))){
var inst_31200 = (state_31202[(2)]);
var state_31202__$1 = state_31202;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31202__$1,inst_31200);
} else {
if((state_val_31203 === (4))){
var inst_31192 = (state_31202[(2)]);
var inst_31193 = process(inst_31192);
var state_31202__$1 = state_31202;
if(cljs.core.truth_(inst_31193)){
var statearr_31206_33350 = state_31202__$1;
(statearr_31206_33350[(1)] = (5));

} else {
var statearr_31207_33351 = state_31202__$1;
(statearr_31207_33351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (5))){
var state_31202__$1 = state_31202;
var statearr_31208_33352 = state_31202__$1;
(statearr_31208_33352[(2)] = null);

(statearr_31208_33352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (6))){
var state_31202__$1 = state_31202;
var statearr_31209_33353 = state_31202__$1;
(statearr_31209_33353[(2)] = null);

(statearr_31209_33353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (7))){
var inst_31198 = (state_31202[(2)]);
var state_31202__$1 = state_31202;
var statearr_31210_33356 = state_31202__$1;
(statearr_31210_33356[(2)] = inst_31198);

(statearr_31210_33356[(1)] = (3));


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
});})(__33344,c__30914__auto___33348,G__31189_33345,G__31189_33346__$1,n__4613__auto___33343,jobs,results,process,async))
;
return ((function (__33344,switch__30738__auto__,c__30914__auto___33348,G__31189_33345,G__31189_33346__$1,n__4613__auto___33343,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30739__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30739__auto____0 = (function (){
var statearr_31211 = [null,null,null,null,null,null,null];
(statearr_31211[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30739__auto__);

(statearr_31211[(1)] = (1));

return statearr_31211;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30739__auto____1 = (function (state_31202){
while(true){
var ret_value__30740__auto__ = (function (){try{while(true){
var result__30741__auto__ = switch__30738__auto__(state_31202);
if(cljs.core.keyword_identical_QMARK_(result__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30741__auto__;
}
break;
}
}catch (e31220){var ex__30742__auto__ = e31220;
var statearr_31225_33357 = state_31202;
(statearr_31225_33357[(2)] = ex__30742__auto__);


if(cljs.core.seq((state_31202[(4)]))){
var statearr_31226_33358 = state_31202;
(statearr_31226_33358[(1)] = cljs.core.first((state_31202[(4)])));

} else {
throw ex__30742__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33359 = state_31202;
state_31202 = G__33359;
continue;
} else {
return ret_value__30740__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30739__auto__ = function(state_31202){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30739__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30739__auto____1.call(this,state_31202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30739__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30739__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30739__auto__;
})()
;})(__33344,switch__30738__auto__,c__30914__auto___33348,G__31189_33345,G__31189_33346__$1,n__4613__auto___33343,jobs,results,process,async))
})();
var state__30916__auto__ = (function (){var statearr_31227 = f__30915__auto__();
(statearr_31227[(6)] = c__30914__auto___33348);

return statearr_31227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30916__auto__);
});})(__33344,c__30914__auto___33348,G__31189_33345,G__31189_33346__$1,n__4613__auto___33343,jobs,results,process,async))
);


break;
case "async":
var c__30914__auto___33360 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33344,c__30914__auto___33360,G__31189_33345,G__31189_33346__$1,n__4613__auto___33343,jobs,results,process,async){
return (function (){
var f__30915__auto__ = (function (){var switch__30738__auto__ = ((function (__33344,c__30914__auto___33360,G__31189_33345,G__31189_33346__$1,n__4613__auto___33343,jobs,results,process,async){
return (function (state_31240){
var state_val_31241 = (state_31240[(1)]);
if((state_val_31241 === (1))){
var state_31240__$1 = state_31240;
var statearr_31242_33361 = state_31240__$1;
(statearr_31242_33361[(2)] = null);

(statearr_31242_33361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31241 === (2))){
var state_31240__$1 = state_31240;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31240__$1,(4),jobs);
} else {
if((state_val_31241 === (3))){
var inst_31238 = (state_31240[(2)]);
var state_31240__$1 = state_31240;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31240__$1,inst_31238);
} else {
if((state_val_31241 === (4))){
var inst_31230 = (state_31240[(2)]);
var inst_31231 = async(inst_31230);
var state_31240__$1 = state_31240;
if(cljs.core.truth_(inst_31231)){
var statearr_31243_33362 = state_31240__$1;
(statearr_31243_33362[(1)] = (5));

} else {
var statearr_31244_33363 = state_31240__$1;
(statearr_31244_33363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31241 === (5))){
var state_31240__$1 = state_31240;
var statearr_31245_33364 = state_31240__$1;
(statearr_31245_33364[(2)] = null);

(statearr_31245_33364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31241 === (6))){
var state_31240__$1 = state_31240;
var statearr_31246_33365 = state_31240__$1;
(statearr_31246_33365[(2)] = null);

(statearr_31246_33365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31241 === (7))){
var inst_31236 = (state_31240[(2)]);
var state_31240__$1 = state_31240;
var statearr_31247_33366 = state_31240__$1;
(statearr_31247_33366[(2)] = inst_31236);

(statearr_31247_33366[(1)] = (3));


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
});})(__33344,c__30914__auto___33360,G__31189_33345,G__31189_33346__$1,n__4613__auto___33343,jobs,results,process,async))
;
return ((function (__33344,switch__30738__auto__,c__30914__auto___33360,G__31189_33345,G__31189_33346__$1,n__4613__auto___33343,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30739__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30739__auto____0 = (function (){
var statearr_31248 = [null,null,null,null,null,null,null];
(statearr_31248[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30739__auto__);

(statearr_31248[(1)] = (1));

return statearr_31248;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30739__auto____1 = (function (state_31240){
while(true){
var ret_value__30740__auto__ = (function (){try{while(true){
var result__30741__auto__ = switch__30738__auto__(state_31240);
if(cljs.core.keyword_identical_QMARK_(result__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30741__auto__;
}
break;
}
}catch (e31249){var ex__30742__auto__ = e31249;
var statearr_31250_33404 = state_31240;
(statearr_31250_33404[(2)] = ex__30742__auto__);


if(cljs.core.seq((state_31240[(4)]))){
var statearr_31251_33405 = state_31240;
(statearr_31251_33405[(1)] = cljs.core.first((state_31240[(4)])));

} else {
throw ex__30742__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33406 = state_31240;
state_31240 = G__33406;
continue;
} else {
return ret_value__30740__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30739__auto__ = function(state_31240){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30739__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30739__auto____1.call(this,state_31240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30739__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30739__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30739__auto__;
})()
;})(__33344,switch__30738__auto__,c__30914__auto___33360,G__31189_33345,G__31189_33346__$1,n__4613__auto___33343,jobs,results,process,async))
})();
var state__30916__auto__ = (function (){var statearr_31252 = f__30915__auto__();
(statearr_31252[(6)] = c__30914__auto___33360);

return statearr_31252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30916__auto__);
});})(__33344,c__30914__auto___33360,G__31189_33345,G__31189_33346__$1,n__4613__auto___33343,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31189_33346__$1)].join('')));

}

var G__33407 = (__33344 + (1));
__33344 = G__33407;
continue;
} else {
}
break;
}

var c__30914__auto___33408 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30915__auto__ = (function (){var switch__30738__auto__ = (function (state_31282){
var state_val_31283 = (state_31282[(1)]);
if((state_val_31283 === (7))){
var inst_31278 = (state_31282[(2)]);
var state_31282__$1 = state_31282;
var statearr_31284_33409 = state_31282__$1;
(statearr_31284_33409[(2)] = inst_31278);

(statearr_31284_33409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (1))){
var state_31282__$1 = state_31282;
var statearr_31285_33410 = state_31282__$1;
(statearr_31285_33410[(2)] = null);

(statearr_31285_33410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (4))){
var inst_31263 = (state_31282[(7)]);
var inst_31263__$1 = (state_31282[(2)]);
var inst_31264 = (inst_31263__$1 == null);
var state_31282__$1 = (function (){var statearr_31286 = state_31282;
(statearr_31286[(7)] = inst_31263__$1);

return statearr_31286;
})();
if(cljs.core.truth_(inst_31264)){
var statearr_31317_33411 = state_31282__$1;
(statearr_31317_33411[(1)] = (5));

} else {
var statearr_31320_33414 = state_31282__$1;
(statearr_31320_33414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (6))){
var inst_31263 = (state_31282[(7)]);
var inst_31268 = (state_31282[(8)]);
var inst_31268__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31269 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31270 = [inst_31263,inst_31268__$1];
var inst_31271 = (new cljs.core.PersistentVector(null,2,(5),inst_31269,inst_31270,null));
var state_31282__$1 = (function (){var statearr_31322 = state_31282;
(statearr_31322[(8)] = inst_31268__$1);

return statearr_31322;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31282__$1,(8),jobs,inst_31271);
} else {
if((state_val_31283 === (3))){
var inst_31280 = (state_31282[(2)]);
var state_31282__$1 = state_31282;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31282__$1,inst_31280);
} else {
if((state_val_31283 === (2))){
var state_31282__$1 = state_31282;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31282__$1,(4),from);
} else {
if((state_val_31283 === (9))){
var inst_31275 = (state_31282[(2)]);
var state_31282__$1 = (function (){var statearr_31324 = state_31282;
(statearr_31324[(9)] = inst_31275);

return statearr_31324;
})();
var statearr_31325_33415 = state_31282__$1;
(statearr_31325_33415[(2)] = null);

(statearr_31325_33415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (5))){
var inst_31266 = cljs.core.async.close_BANG_(jobs);
var state_31282__$1 = state_31282;
var statearr_31326_33416 = state_31282__$1;
(statearr_31326_33416[(2)] = inst_31266);

(statearr_31326_33416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (8))){
var inst_31268 = (state_31282[(8)]);
var inst_31273 = (state_31282[(2)]);
var state_31282__$1 = (function (){var statearr_31332 = state_31282;
(statearr_31332[(10)] = inst_31273);

return statearr_31332;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31282__$1,(9),results,inst_31268);
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
var cljs$core$async$pipeline_STAR__$_state_machine__30739__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30739__auto____0 = (function (){
var statearr_31333 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31333[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30739__auto__);

(statearr_31333[(1)] = (1));

return statearr_31333;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30739__auto____1 = (function (state_31282){
while(true){
var ret_value__30740__auto__ = (function (){try{while(true){
var result__30741__auto__ = switch__30738__auto__(state_31282);
if(cljs.core.keyword_identical_QMARK_(result__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30741__auto__;
}
break;
}
}catch (e31334){var ex__30742__auto__ = e31334;
var statearr_31335_33417 = state_31282;
(statearr_31335_33417[(2)] = ex__30742__auto__);


if(cljs.core.seq((state_31282[(4)]))){
var statearr_31336_33418 = state_31282;
(statearr_31336_33418[(1)] = cljs.core.first((state_31282[(4)])));

} else {
throw ex__30742__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33419 = state_31282;
state_31282 = G__33419;
continue;
} else {
return ret_value__30740__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30739__auto__ = function(state_31282){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30739__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30739__auto____1.call(this,state_31282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30739__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30739__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30739__auto__;
})()
})();
var state__30916__auto__ = (function (){var statearr_31339 = f__30915__auto__();
(statearr_31339[(6)] = c__30914__auto___33408);

return statearr_31339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30916__auto__);
}));


var c__30914__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30915__auto__ = (function (){var switch__30738__auto__ = (function (state_31378){
var state_val_31379 = (state_31378[(1)]);
if((state_val_31379 === (7))){
var inst_31374 = (state_31378[(2)]);
var state_31378__$1 = state_31378;
var statearr_31380_33422 = state_31378__$1;
(statearr_31380_33422[(2)] = inst_31374);

(statearr_31380_33422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (20))){
var state_31378__$1 = state_31378;
var statearr_31381_33423 = state_31378__$1;
(statearr_31381_33423[(2)] = null);

(statearr_31381_33423[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (1))){
var state_31378__$1 = state_31378;
var statearr_31382_33424 = state_31378__$1;
(statearr_31382_33424[(2)] = null);

(statearr_31382_33424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (4))){
var inst_31342 = (state_31378[(7)]);
var inst_31342__$1 = (state_31378[(2)]);
var inst_31343 = (inst_31342__$1 == null);
var state_31378__$1 = (function (){var statearr_31383 = state_31378;
(statearr_31383[(7)] = inst_31342__$1);

return statearr_31383;
})();
if(cljs.core.truth_(inst_31343)){
var statearr_31384_33426 = state_31378__$1;
(statearr_31384_33426[(1)] = (5));

} else {
var statearr_31385_33427 = state_31378__$1;
(statearr_31385_33427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (15))){
var inst_31356 = (state_31378[(8)]);
var state_31378__$1 = state_31378;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31378__$1,(18),to,inst_31356);
} else {
if((state_val_31379 === (21))){
var inst_31369 = (state_31378[(2)]);
var state_31378__$1 = state_31378;
var statearr_31386_33431 = state_31378__$1;
(statearr_31386_33431[(2)] = inst_31369);

(statearr_31386_33431[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (13))){
var inst_31371 = (state_31378[(2)]);
var state_31378__$1 = (function (){var statearr_31387 = state_31378;
(statearr_31387[(9)] = inst_31371);

return statearr_31387;
})();
var statearr_31388_33432 = state_31378__$1;
(statearr_31388_33432[(2)] = null);

(statearr_31388_33432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (6))){
var inst_31342 = (state_31378[(7)]);
var state_31378__$1 = state_31378;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31378__$1,(11),inst_31342);
} else {
if((state_val_31379 === (17))){
var inst_31364 = (state_31378[(2)]);
var state_31378__$1 = state_31378;
if(cljs.core.truth_(inst_31364)){
var statearr_31389_33433 = state_31378__$1;
(statearr_31389_33433[(1)] = (19));

} else {
var statearr_31390_33434 = state_31378__$1;
(statearr_31390_33434[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (3))){
var inst_31376 = (state_31378[(2)]);
var state_31378__$1 = state_31378;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31378__$1,inst_31376);
} else {
if((state_val_31379 === (12))){
var inst_31353 = (state_31378[(10)]);
var state_31378__$1 = state_31378;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31378__$1,(14),inst_31353);
} else {
if((state_val_31379 === (2))){
var state_31378__$1 = state_31378;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31378__$1,(4),results);
} else {
if((state_val_31379 === (19))){
var state_31378__$1 = state_31378;
var statearr_31391_33435 = state_31378__$1;
(statearr_31391_33435[(2)] = null);

(statearr_31391_33435[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (11))){
var inst_31353 = (state_31378[(2)]);
var state_31378__$1 = (function (){var statearr_31393 = state_31378;
(statearr_31393[(10)] = inst_31353);

return statearr_31393;
})();
var statearr_31394_33436 = state_31378__$1;
(statearr_31394_33436[(2)] = null);

(statearr_31394_33436[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (9))){
var state_31378__$1 = state_31378;
var statearr_31395_33437 = state_31378__$1;
(statearr_31395_33437[(2)] = null);

(statearr_31395_33437[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (5))){
var state_31378__$1 = state_31378;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31396_33438 = state_31378__$1;
(statearr_31396_33438[(1)] = (8));

} else {
var statearr_31397_33439 = state_31378__$1;
(statearr_31397_33439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (14))){
var inst_31356 = (state_31378[(8)]);
var inst_31356__$1 = (state_31378[(2)]);
var inst_31357 = (inst_31356__$1 == null);
var inst_31358 = cljs.core.not(inst_31357);
var state_31378__$1 = (function (){var statearr_31398 = state_31378;
(statearr_31398[(8)] = inst_31356__$1);

return statearr_31398;
})();
if(inst_31358){
var statearr_31399_33451 = state_31378__$1;
(statearr_31399_33451[(1)] = (15));

} else {
var statearr_31400_33452 = state_31378__$1;
(statearr_31400_33452[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (16))){
var state_31378__$1 = state_31378;
var statearr_31401_33453 = state_31378__$1;
(statearr_31401_33453[(2)] = false);

(statearr_31401_33453[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (10))){
var inst_31349 = (state_31378[(2)]);
var state_31378__$1 = state_31378;
var statearr_31402_33454 = state_31378__$1;
(statearr_31402_33454[(2)] = inst_31349);

(statearr_31402_33454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (18))){
var inst_31361 = (state_31378[(2)]);
var state_31378__$1 = state_31378;
var statearr_31403_33455 = state_31378__$1;
(statearr_31403_33455[(2)] = inst_31361);

(statearr_31403_33455[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31379 === (8))){
var inst_31346 = cljs.core.async.close_BANG_(to);
var state_31378__$1 = state_31378;
var statearr_31404_33456 = state_31378__$1;
(statearr_31404_33456[(2)] = inst_31346);

(statearr_31404_33456[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__30739__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30739__auto____0 = (function (){
var statearr_31409 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31409[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30739__auto__);

(statearr_31409[(1)] = (1));

return statearr_31409;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30739__auto____1 = (function (state_31378){
while(true){
var ret_value__30740__auto__ = (function (){try{while(true){
var result__30741__auto__ = switch__30738__auto__(state_31378);
if(cljs.core.keyword_identical_QMARK_(result__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30741__auto__;
}
break;
}
}catch (e31410){var ex__30742__auto__ = e31410;
var statearr_31411_33457 = state_31378;
(statearr_31411_33457[(2)] = ex__30742__auto__);


if(cljs.core.seq((state_31378[(4)]))){
var statearr_31412_33458 = state_31378;
(statearr_31412_33458[(1)] = cljs.core.first((state_31378[(4)])));

} else {
throw ex__30742__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33459 = state_31378;
state_31378 = G__33459;
continue;
} else {
return ret_value__30740__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30739__auto__ = function(state_31378){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30739__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30739__auto____1.call(this,state_31378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30739__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30739__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30739__auto__;
})()
})();
var state__30916__auto__ = (function (){var statearr_31413 = f__30915__auto__();
(statearr_31413[(6)] = c__30914__auto__);

return statearr_31413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30916__auto__);
}));

return c__30914__auto__;
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
var G__31415 = arguments.length;
switch (G__31415) {
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
var G__31417 = arguments.length;
switch (G__31417) {
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
var G__31427 = arguments.length;
switch (G__31427) {
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
var c__30914__auto___33474 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30915__auto__ = (function (){var switch__30738__auto__ = (function (state_31455){
var state_val_31456 = (state_31455[(1)]);
if((state_val_31456 === (7))){
var inst_31451 = (state_31455[(2)]);
var state_31455__$1 = state_31455;
var statearr_31457_33475 = state_31455__$1;
(statearr_31457_33475[(2)] = inst_31451);

(statearr_31457_33475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31456 === (1))){
var state_31455__$1 = state_31455;
var statearr_31458_33479 = state_31455__$1;
(statearr_31458_33479[(2)] = null);

(statearr_31458_33479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31456 === (4))){
var inst_31432 = (state_31455[(7)]);
var inst_31432__$1 = (state_31455[(2)]);
var inst_31433 = (inst_31432__$1 == null);
var state_31455__$1 = (function (){var statearr_31465 = state_31455;
(statearr_31465[(7)] = inst_31432__$1);

return statearr_31465;
})();
if(cljs.core.truth_(inst_31433)){
var statearr_31466_33484 = state_31455__$1;
(statearr_31466_33484[(1)] = (5));

} else {
var statearr_31467_33491 = state_31455__$1;
(statearr_31467_33491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31456 === (13))){
var state_31455__$1 = state_31455;
var statearr_31468_33492 = state_31455__$1;
(statearr_31468_33492[(2)] = null);

(statearr_31468_33492[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31456 === (6))){
var inst_31432 = (state_31455[(7)]);
var inst_31438 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31432) : p.call(null,inst_31432));
var state_31455__$1 = state_31455;
if(cljs.core.truth_(inst_31438)){
var statearr_31469_33500 = state_31455__$1;
(statearr_31469_33500[(1)] = (9));

} else {
var statearr_31470_33501 = state_31455__$1;
(statearr_31470_33501[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31456 === (3))){
var inst_31453 = (state_31455[(2)]);
var state_31455__$1 = state_31455;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31455__$1,inst_31453);
} else {
if((state_val_31456 === (12))){
var state_31455__$1 = state_31455;
var statearr_31471_33502 = state_31455__$1;
(statearr_31471_33502[(2)] = null);

(statearr_31471_33502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31456 === (2))){
var state_31455__$1 = state_31455;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31455__$1,(4),ch);
} else {
if((state_val_31456 === (11))){
var inst_31432 = (state_31455[(7)]);
var inst_31442 = (state_31455[(2)]);
var state_31455__$1 = state_31455;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31455__$1,(8),inst_31442,inst_31432);
} else {
if((state_val_31456 === (9))){
var state_31455__$1 = state_31455;
var statearr_31472_33503 = state_31455__$1;
(statearr_31472_33503[(2)] = tc);

(statearr_31472_33503[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31456 === (5))){
var inst_31435 = cljs.core.async.close_BANG_(tc);
var inst_31436 = cljs.core.async.close_BANG_(fc);
var state_31455__$1 = (function (){var statearr_31473 = state_31455;
(statearr_31473[(8)] = inst_31435);

return statearr_31473;
})();
var statearr_31474_33504 = state_31455__$1;
(statearr_31474_33504[(2)] = inst_31436);

(statearr_31474_33504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31456 === (14))){
var inst_31449 = (state_31455[(2)]);
var state_31455__$1 = state_31455;
var statearr_31483_33505 = state_31455__$1;
(statearr_31483_33505[(2)] = inst_31449);

(statearr_31483_33505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31456 === (10))){
var state_31455__$1 = state_31455;
var statearr_31484_33506 = state_31455__$1;
(statearr_31484_33506[(2)] = fc);

(statearr_31484_33506[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31456 === (8))){
var inst_31444 = (state_31455[(2)]);
var state_31455__$1 = state_31455;
if(cljs.core.truth_(inst_31444)){
var statearr_31485_33507 = state_31455__$1;
(statearr_31485_33507[(1)] = (12));

} else {
var statearr_31486_33508 = state_31455__$1;
(statearr_31486_33508[(1)] = (13));

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
var cljs$core$async$state_machine__30739__auto__ = null;
var cljs$core$async$state_machine__30739__auto____0 = (function (){
var statearr_31487 = [null,null,null,null,null,null,null,null,null];
(statearr_31487[(0)] = cljs$core$async$state_machine__30739__auto__);

(statearr_31487[(1)] = (1));

return statearr_31487;
});
var cljs$core$async$state_machine__30739__auto____1 = (function (state_31455){
while(true){
var ret_value__30740__auto__ = (function (){try{while(true){
var result__30741__auto__ = switch__30738__auto__(state_31455);
if(cljs.core.keyword_identical_QMARK_(result__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30741__auto__;
}
break;
}
}catch (e31488){var ex__30742__auto__ = e31488;
var statearr_31489_33509 = state_31455;
(statearr_31489_33509[(2)] = ex__30742__auto__);


if(cljs.core.seq((state_31455[(4)]))){
var statearr_31490_33510 = state_31455;
(statearr_31490_33510[(1)] = cljs.core.first((state_31455[(4)])));

} else {
throw ex__30742__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33511 = state_31455;
state_31455 = G__33511;
continue;
} else {
return ret_value__30740__auto__;
}
break;
}
});
cljs$core$async$state_machine__30739__auto__ = function(state_31455){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30739__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30739__auto____1.call(this,state_31455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30739__auto____0;
cljs$core$async$state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30739__auto____1;
return cljs$core$async$state_machine__30739__auto__;
})()
})();
var state__30916__auto__ = (function (){var statearr_31491 = f__30915__auto__();
(statearr_31491[(6)] = c__30914__auto___33474);

return statearr_31491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30916__auto__);
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
var c__30914__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30915__auto__ = (function (){var switch__30738__auto__ = (function (state_31514){
var state_val_31515 = (state_31514[(1)]);
if((state_val_31515 === (7))){
var inst_31510 = (state_31514[(2)]);
var state_31514__$1 = state_31514;
var statearr_31516_33518 = state_31514__$1;
(statearr_31516_33518[(2)] = inst_31510);

(statearr_31516_33518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (1))){
var inst_31493 = init;
var inst_31494 = inst_31493;
var state_31514__$1 = (function (){var statearr_31517 = state_31514;
(statearr_31517[(7)] = inst_31494);

return statearr_31517;
})();
var statearr_31518_33525 = state_31514__$1;
(statearr_31518_33525[(2)] = null);

(statearr_31518_33525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (4))){
var inst_31497 = (state_31514[(8)]);
var inst_31497__$1 = (state_31514[(2)]);
var inst_31498 = (inst_31497__$1 == null);
var state_31514__$1 = (function (){var statearr_31519 = state_31514;
(statearr_31519[(8)] = inst_31497__$1);

return statearr_31519;
})();
if(cljs.core.truth_(inst_31498)){
var statearr_31520_33526 = state_31514__$1;
(statearr_31520_33526[(1)] = (5));

} else {
var statearr_31521_33527 = state_31514__$1;
(statearr_31521_33527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (6))){
var inst_31501 = (state_31514[(9)]);
var inst_31494 = (state_31514[(7)]);
var inst_31497 = (state_31514[(8)]);
var inst_31501__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31494,inst_31497) : f.call(null,inst_31494,inst_31497));
var inst_31502 = cljs.core.reduced_QMARK_(inst_31501__$1);
var state_31514__$1 = (function (){var statearr_31522 = state_31514;
(statearr_31522[(9)] = inst_31501__$1);

return statearr_31522;
})();
if(inst_31502){
var statearr_31523_33528 = state_31514__$1;
(statearr_31523_33528[(1)] = (8));

} else {
var statearr_31524_33529 = state_31514__$1;
(statearr_31524_33529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (3))){
var inst_31512 = (state_31514[(2)]);
var state_31514__$1 = state_31514;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31514__$1,inst_31512);
} else {
if((state_val_31515 === (2))){
var state_31514__$1 = state_31514;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31514__$1,(4),ch);
} else {
if((state_val_31515 === (9))){
var inst_31501 = (state_31514[(9)]);
var inst_31494 = inst_31501;
var state_31514__$1 = (function (){var statearr_31525 = state_31514;
(statearr_31525[(7)] = inst_31494);

return statearr_31525;
})();
var statearr_31526_33530 = state_31514__$1;
(statearr_31526_33530[(2)] = null);

(statearr_31526_33530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (5))){
var inst_31494 = (state_31514[(7)]);
var state_31514__$1 = state_31514;
var statearr_31527_33531 = state_31514__$1;
(statearr_31527_33531[(2)] = inst_31494);

(statearr_31527_33531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (10))){
var inst_31508 = (state_31514[(2)]);
var state_31514__$1 = state_31514;
var statearr_31528_33532 = state_31514__$1;
(statearr_31528_33532[(2)] = inst_31508);

(statearr_31528_33532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (8))){
var inst_31501 = (state_31514[(9)]);
var inst_31504 = cljs.core.deref(inst_31501);
var state_31514__$1 = state_31514;
var statearr_31529_33533 = state_31514__$1;
(statearr_31529_33533[(2)] = inst_31504);

(statearr_31529_33533[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__30739__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30739__auto____0 = (function (){
var statearr_31542 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31542[(0)] = cljs$core$async$reduce_$_state_machine__30739__auto__);

(statearr_31542[(1)] = (1));

return statearr_31542;
});
var cljs$core$async$reduce_$_state_machine__30739__auto____1 = (function (state_31514){
while(true){
var ret_value__30740__auto__ = (function (){try{while(true){
var result__30741__auto__ = switch__30738__auto__(state_31514);
if(cljs.core.keyword_identical_QMARK_(result__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30741__auto__;
}
break;
}
}catch (e31543){var ex__30742__auto__ = e31543;
var statearr_31544_33540 = state_31514;
(statearr_31544_33540[(2)] = ex__30742__auto__);


if(cljs.core.seq((state_31514[(4)]))){
var statearr_31545_33544 = state_31514;
(statearr_31545_33544[(1)] = cljs.core.first((state_31514[(4)])));

} else {
throw ex__30742__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33545 = state_31514;
state_31514 = G__33545;
continue;
} else {
return ret_value__30740__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30739__auto__ = function(state_31514){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30739__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30739__auto____1.call(this,state_31514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30739__auto____0;
cljs$core$async$reduce_$_state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30739__auto____1;
return cljs$core$async$reduce_$_state_machine__30739__auto__;
})()
})();
var state__30916__auto__ = (function (){var statearr_31546 = f__30915__auto__();
(statearr_31546[(6)] = c__30914__auto__);

return statearr_31546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30916__auto__);
}));

return c__30914__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30914__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30915__auto__ = (function (){var switch__30738__auto__ = (function (state_31552){
var state_val_31553 = (state_31552[(1)]);
if((state_val_31553 === (1))){
var inst_31547 = cljs.core.async.reduce(f__$1,init,ch);
var state_31552__$1 = state_31552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31552__$1,(2),inst_31547);
} else {
if((state_val_31553 === (2))){
var inst_31549 = (state_31552[(2)]);
var inst_31550 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31549) : f__$1.call(null,inst_31549));
var state_31552__$1 = state_31552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31552__$1,inst_31550);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30739__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30739__auto____0 = (function (){
var statearr_31554 = [null,null,null,null,null,null,null];
(statearr_31554[(0)] = cljs$core$async$transduce_$_state_machine__30739__auto__);

(statearr_31554[(1)] = (1));

return statearr_31554;
});
var cljs$core$async$transduce_$_state_machine__30739__auto____1 = (function (state_31552){
while(true){
var ret_value__30740__auto__ = (function (){try{while(true){
var result__30741__auto__ = switch__30738__auto__(state_31552);
if(cljs.core.keyword_identical_QMARK_(result__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30741__auto__;
}
break;
}
}catch (e31555){var ex__30742__auto__ = e31555;
var statearr_31556_33546 = state_31552;
(statearr_31556_33546[(2)] = ex__30742__auto__);


if(cljs.core.seq((state_31552[(4)]))){
var statearr_31557_33547 = state_31552;
(statearr_31557_33547[(1)] = cljs.core.first((state_31552[(4)])));

} else {
throw ex__30742__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33551 = state_31552;
state_31552 = G__33551;
continue;
} else {
return ret_value__30740__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30739__auto__ = function(state_31552){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30739__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30739__auto____1.call(this,state_31552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30739__auto____0;
cljs$core$async$transduce_$_state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30739__auto____1;
return cljs$core$async$transduce_$_state_machine__30739__auto__;
})()
})();
var state__30916__auto__ = (function (){var statearr_31558 = f__30915__auto__();
(statearr_31558[(6)] = c__30914__auto__);

return statearr_31558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30916__auto__);
}));

return c__30914__auto__;
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
var G__31564 = arguments.length;
switch (G__31564) {
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
var c__30914__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30915__auto__ = (function (){var switch__30738__auto__ = (function (state_31590){
var state_val_31591 = (state_31590[(1)]);
if((state_val_31591 === (7))){
var inst_31572 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
var statearr_31592_33556 = state_31590__$1;
(statearr_31592_33556[(2)] = inst_31572);

(statearr_31592_33556[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (1))){
var inst_31566 = cljs.core.seq(coll);
var inst_31567 = inst_31566;
var state_31590__$1 = (function (){var statearr_31593 = state_31590;
(statearr_31593[(7)] = inst_31567);

return statearr_31593;
})();
var statearr_31594_33559 = state_31590__$1;
(statearr_31594_33559[(2)] = null);

(statearr_31594_33559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (4))){
var inst_31567 = (state_31590[(7)]);
var inst_31570 = cljs.core.first(inst_31567);
var state_31590__$1 = state_31590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31590__$1,(7),ch,inst_31570);
} else {
if((state_val_31591 === (13))){
var inst_31584 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
var statearr_31595_33560 = state_31590__$1;
(statearr_31595_33560[(2)] = inst_31584);

(statearr_31595_33560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (6))){
var inst_31575 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
if(cljs.core.truth_(inst_31575)){
var statearr_31596_33561 = state_31590__$1;
(statearr_31596_33561[(1)] = (8));

} else {
var statearr_31597_33562 = state_31590__$1;
(statearr_31597_33562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (3))){
var inst_31588 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31590__$1,inst_31588);
} else {
if((state_val_31591 === (12))){
var state_31590__$1 = state_31590;
var statearr_31598_33563 = state_31590__$1;
(statearr_31598_33563[(2)] = null);

(statearr_31598_33563[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (2))){
var inst_31567 = (state_31590[(7)]);
var state_31590__$1 = state_31590;
if(cljs.core.truth_(inst_31567)){
var statearr_31599_33564 = state_31590__$1;
(statearr_31599_33564[(1)] = (4));

} else {
var statearr_31600_33565 = state_31590__$1;
(statearr_31600_33565[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (11))){
var inst_31581 = cljs.core.async.close_BANG_(ch);
var state_31590__$1 = state_31590;
var statearr_31601_33566 = state_31590__$1;
(statearr_31601_33566[(2)] = inst_31581);

(statearr_31601_33566[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (9))){
var state_31590__$1 = state_31590;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31602_33567 = state_31590__$1;
(statearr_31602_33567[(1)] = (11));

} else {
var statearr_31603_33568 = state_31590__$1;
(statearr_31603_33568[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (5))){
var inst_31567 = (state_31590[(7)]);
var state_31590__$1 = state_31590;
var statearr_31604_33581 = state_31590__$1;
(statearr_31604_33581[(2)] = inst_31567);

(statearr_31604_33581[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (10))){
var inst_31586 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
var statearr_31605_33582 = state_31590__$1;
(statearr_31605_33582[(2)] = inst_31586);

(statearr_31605_33582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (8))){
var inst_31567 = (state_31590[(7)]);
var inst_31577 = cljs.core.next(inst_31567);
var inst_31567__$1 = inst_31577;
var state_31590__$1 = (function (){var statearr_31606 = state_31590;
(statearr_31606[(7)] = inst_31567__$1);

return statearr_31606;
})();
var statearr_31607_33583 = state_31590__$1;
(statearr_31607_33583[(2)] = null);

(statearr_31607_33583[(1)] = (2));


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
var cljs$core$async$state_machine__30739__auto__ = null;
var cljs$core$async$state_machine__30739__auto____0 = (function (){
var statearr_31608 = [null,null,null,null,null,null,null,null];
(statearr_31608[(0)] = cljs$core$async$state_machine__30739__auto__);

(statearr_31608[(1)] = (1));

return statearr_31608;
});
var cljs$core$async$state_machine__30739__auto____1 = (function (state_31590){
while(true){
var ret_value__30740__auto__ = (function (){try{while(true){
var result__30741__auto__ = switch__30738__auto__(state_31590);
if(cljs.core.keyword_identical_QMARK_(result__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30741__auto__;
}
break;
}
}catch (e31609){var ex__30742__auto__ = e31609;
var statearr_31610_33584 = state_31590;
(statearr_31610_33584[(2)] = ex__30742__auto__);


if(cljs.core.seq((state_31590[(4)]))){
var statearr_31611_33586 = state_31590;
(statearr_31611_33586[(1)] = cljs.core.first((state_31590[(4)])));

} else {
throw ex__30742__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33587 = state_31590;
state_31590 = G__33587;
continue;
} else {
return ret_value__30740__auto__;
}
break;
}
});
cljs$core$async$state_machine__30739__auto__ = function(state_31590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30739__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30739__auto____1.call(this,state_31590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30739__auto____0;
cljs$core$async$state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30739__auto____1;
return cljs$core$async$state_machine__30739__auto__;
})()
})();
var state__30916__auto__ = (function (){var statearr_31614 = f__30915__auto__();
(statearr_31614[(6)] = c__30914__auto__);

return statearr_31614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30916__auto__);
}));

return c__30914__auto__;
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
var G__31624 = arguments.length;
switch (G__31624) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_33608 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_33608(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33609 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_33609(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33614 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_33614(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33616 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_33616(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31639 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31639 = (function (ch,cs,meta31640){
this.ch = ch;
this.cs = cs;
this.meta31640 = meta31640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31641,meta31640__$1){
var self__ = this;
var _31641__$1 = this;
return (new cljs.core.async.t_cljs$core$async31639(self__.ch,self__.cs,meta31640__$1));
}));

(cljs.core.async.t_cljs$core$async31639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31641){
var self__ = this;
var _31641__$1 = this;
return self__.meta31640;
}));

(cljs.core.async.t_cljs$core$async31639.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31639.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31639.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31639.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31639.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31639.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31639.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31640","meta31640",-2109701046,null)], null);
}));

(cljs.core.async.t_cljs$core$async31639.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31639.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31639");

(cljs.core.async.t_cljs$core$async31639.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31639");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31639.
 */
cljs.core.async.__GT_t_cljs$core$async31639 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31639(ch__$1,cs__$1,meta31640){
return (new cljs.core.async.t_cljs$core$async31639(ch__$1,cs__$1,meta31640));
});

}

return (new cljs.core.async.t_cljs$core$async31639(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30914__auto___33620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30915__auto__ = (function (){var switch__30738__auto__ = (function (state_31785){
var state_val_31786 = (state_31785[(1)]);
if((state_val_31786 === (7))){
var inst_31781 = (state_31785[(2)]);
var state_31785__$1 = state_31785;
var statearr_31787_33621 = state_31785__$1;
(statearr_31787_33621[(2)] = inst_31781);

(statearr_31787_33621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (20))){
var inst_31686 = (state_31785[(7)]);
var inst_31698 = cljs.core.first(inst_31686);
var inst_31699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31698,(0),null);
var inst_31700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31698,(1),null);
var state_31785__$1 = (function (){var statearr_31788 = state_31785;
(statearr_31788[(8)] = inst_31699);

return statearr_31788;
})();
if(cljs.core.truth_(inst_31700)){
var statearr_31789_33623 = state_31785__$1;
(statearr_31789_33623[(1)] = (22));

} else {
var statearr_31790_33624 = state_31785__$1;
(statearr_31790_33624[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (27))){
var inst_31735 = (state_31785[(9)]);
var inst_31647 = (state_31785[(10)]);
var inst_31728 = (state_31785[(11)]);
var inst_31730 = (state_31785[(12)]);
var inst_31735__$1 = cljs.core._nth(inst_31728,inst_31730);
var inst_31736 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31735__$1,inst_31647,done);
var state_31785__$1 = (function (){var statearr_31811 = state_31785;
(statearr_31811[(9)] = inst_31735__$1);

return statearr_31811;
})();
if(cljs.core.truth_(inst_31736)){
var statearr_31812_33625 = state_31785__$1;
(statearr_31812_33625[(1)] = (30));

} else {
var statearr_31813_33626 = state_31785__$1;
(statearr_31813_33626[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (1))){
var state_31785__$1 = state_31785;
var statearr_31814_33627 = state_31785__$1;
(statearr_31814_33627[(2)] = null);

(statearr_31814_33627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (24))){
var inst_31686 = (state_31785[(7)]);
var inst_31705 = (state_31785[(2)]);
var inst_31706 = cljs.core.next(inst_31686);
var inst_31656 = inst_31706;
var inst_31657 = null;
var inst_31658 = (0);
var inst_31659 = (0);
var state_31785__$1 = (function (){var statearr_31817 = state_31785;
(statearr_31817[(13)] = inst_31657);

(statearr_31817[(14)] = inst_31659);

(statearr_31817[(15)] = inst_31705);

(statearr_31817[(16)] = inst_31656);

(statearr_31817[(17)] = inst_31658);

return statearr_31817;
})();
var statearr_31818_33639 = state_31785__$1;
(statearr_31818_33639[(2)] = null);

(statearr_31818_33639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (39))){
var state_31785__$1 = state_31785;
var statearr_31822_33640 = state_31785__$1;
(statearr_31822_33640[(2)] = null);

(statearr_31822_33640[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (4))){
var inst_31647 = (state_31785[(10)]);
var inst_31647__$1 = (state_31785[(2)]);
var inst_31648 = (inst_31647__$1 == null);
var state_31785__$1 = (function (){var statearr_31825 = state_31785;
(statearr_31825[(10)] = inst_31647__$1);

return statearr_31825;
})();
if(cljs.core.truth_(inst_31648)){
var statearr_31826_33641 = state_31785__$1;
(statearr_31826_33641[(1)] = (5));

} else {
var statearr_31827_33642 = state_31785__$1;
(statearr_31827_33642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (15))){
var inst_31657 = (state_31785[(13)]);
var inst_31659 = (state_31785[(14)]);
var inst_31656 = (state_31785[(16)]);
var inst_31658 = (state_31785[(17)]);
var inst_31682 = (state_31785[(2)]);
var inst_31683 = (inst_31659 + (1));
var tmp31819 = inst_31657;
var tmp31820 = inst_31656;
var tmp31821 = inst_31658;
var inst_31656__$1 = tmp31820;
var inst_31657__$1 = tmp31819;
var inst_31658__$1 = tmp31821;
var inst_31659__$1 = inst_31683;
var state_31785__$1 = (function (){var statearr_31828 = state_31785;
(statearr_31828[(18)] = inst_31682);

(statearr_31828[(13)] = inst_31657__$1);

(statearr_31828[(14)] = inst_31659__$1);

(statearr_31828[(16)] = inst_31656__$1);

(statearr_31828[(17)] = inst_31658__$1);

return statearr_31828;
})();
var statearr_31829_33643 = state_31785__$1;
(statearr_31829_33643[(2)] = null);

(statearr_31829_33643[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (21))){
var inst_31709 = (state_31785[(2)]);
var state_31785__$1 = state_31785;
var statearr_31833_33644 = state_31785__$1;
(statearr_31833_33644[(2)] = inst_31709);

(statearr_31833_33644[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (31))){
var inst_31735 = (state_31785[(9)]);
var inst_31739 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31735);
var state_31785__$1 = state_31785;
var statearr_31834_33645 = state_31785__$1;
(statearr_31834_33645[(2)] = inst_31739);

(statearr_31834_33645[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (32))){
var inst_31729 = (state_31785[(19)]);
var inst_31727 = (state_31785[(20)]);
var inst_31728 = (state_31785[(11)]);
var inst_31730 = (state_31785[(12)]);
var inst_31741 = (state_31785[(2)]);
var inst_31742 = (inst_31730 + (1));
var tmp31830 = inst_31729;
var tmp31831 = inst_31727;
var tmp31832 = inst_31728;
var inst_31727__$1 = tmp31831;
var inst_31728__$1 = tmp31832;
var inst_31729__$1 = tmp31830;
var inst_31730__$1 = inst_31742;
var state_31785__$1 = (function (){var statearr_31836 = state_31785;
(statearr_31836[(21)] = inst_31741);

(statearr_31836[(19)] = inst_31729__$1);

(statearr_31836[(20)] = inst_31727__$1);

(statearr_31836[(11)] = inst_31728__$1);

(statearr_31836[(12)] = inst_31730__$1);

return statearr_31836;
})();
var statearr_31837_33655 = state_31785__$1;
(statearr_31837_33655[(2)] = null);

(statearr_31837_33655[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (40))){
var inst_31754 = (state_31785[(22)]);
var inst_31758 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31754);
var state_31785__$1 = state_31785;
var statearr_31838_33660 = state_31785__$1;
(statearr_31838_33660[(2)] = inst_31758);

(statearr_31838_33660[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (33))){
var inst_31745 = (state_31785[(23)]);
var inst_31747 = cljs.core.chunked_seq_QMARK_(inst_31745);
var state_31785__$1 = state_31785;
if(inst_31747){
var statearr_31839_33661 = state_31785__$1;
(statearr_31839_33661[(1)] = (36));

} else {
var statearr_31840_33662 = state_31785__$1;
(statearr_31840_33662[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (13))){
var inst_31676 = (state_31785[(24)]);
var inst_31679 = cljs.core.async.close_BANG_(inst_31676);
var state_31785__$1 = state_31785;
var statearr_31841_33663 = state_31785__$1;
(statearr_31841_33663[(2)] = inst_31679);

(statearr_31841_33663[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (22))){
var inst_31699 = (state_31785[(8)]);
var inst_31702 = cljs.core.async.close_BANG_(inst_31699);
var state_31785__$1 = state_31785;
var statearr_31842_33664 = state_31785__$1;
(statearr_31842_33664[(2)] = inst_31702);

(statearr_31842_33664[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (36))){
var inst_31745 = (state_31785[(23)]);
var inst_31749 = cljs.core.chunk_first(inst_31745);
var inst_31750 = cljs.core.chunk_rest(inst_31745);
var inst_31751 = cljs.core.count(inst_31749);
var inst_31727 = inst_31750;
var inst_31728 = inst_31749;
var inst_31729 = inst_31751;
var inst_31730 = (0);
var state_31785__$1 = (function (){var statearr_31843 = state_31785;
(statearr_31843[(19)] = inst_31729);

(statearr_31843[(20)] = inst_31727);

(statearr_31843[(11)] = inst_31728);

(statearr_31843[(12)] = inst_31730);

return statearr_31843;
})();
var statearr_31844_33667 = state_31785__$1;
(statearr_31844_33667[(2)] = null);

(statearr_31844_33667[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (41))){
var inst_31745 = (state_31785[(23)]);
var inst_31760 = (state_31785[(2)]);
var inst_31761 = cljs.core.next(inst_31745);
var inst_31727 = inst_31761;
var inst_31728 = null;
var inst_31729 = (0);
var inst_31730 = (0);
var state_31785__$1 = (function (){var statearr_31845 = state_31785;
(statearr_31845[(25)] = inst_31760);

(statearr_31845[(19)] = inst_31729);

(statearr_31845[(20)] = inst_31727);

(statearr_31845[(11)] = inst_31728);

(statearr_31845[(12)] = inst_31730);

return statearr_31845;
})();
var statearr_31846_33668 = state_31785__$1;
(statearr_31846_33668[(2)] = null);

(statearr_31846_33668[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (43))){
var state_31785__$1 = state_31785;
var statearr_31847_33669 = state_31785__$1;
(statearr_31847_33669[(2)] = null);

(statearr_31847_33669[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (29))){
var inst_31769 = (state_31785[(2)]);
var state_31785__$1 = state_31785;
var statearr_31848_33670 = state_31785__$1;
(statearr_31848_33670[(2)] = inst_31769);

(statearr_31848_33670[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (44))){
var inst_31778 = (state_31785[(2)]);
var state_31785__$1 = (function (){var statearr_31850 = state_31785;
(statearr_31850[(26)] = inst_31778);

return statearr_31850;
})();
var statearr_31851_33671 = state_31785__$1;
(statearr_31851_33671[(2)] = null);

(statearr_31851_33671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (6))){
var inst_31719 = (state_31785[(27)]);
var inst_31718 = cljs.core.deref(cs);
var inst_31719__$1 = cljs.core.keys(inst_31718);
var inst_31720 = cljs.core.count(inst_31719__$1);
var inst_31721 = cljs.core.reset_BANG_(dctr,inst_31720);
var inst_31726 = cljs.core.seq(inst_31719__$1);
var inst_31727 = inst_31726;
var inst_31728 = null;
var inst_31729 = (0);
var inst_31730 = (0);
var state_31785__$1 = (function (){var statearr_31853 = state_31785;
(statearr_31853[(28)] = inst_31721);

(statearr_31853[(19)] = inst_31729);

(statearr_31853[(20)] = inst_31727);

(statearr_31853[(11)] = inst_31728);

(statearr_31853[(27)] = inst_31719__$1);

(statearr_31853[(12)] = inst_31730);

return statearr_31853;
})();
var statearr_31854_33672 = state_31785__$1;
(statearr_31854_33672[(2)] = null);

(statearr_31854_33672[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (28))){
var inst_31745 = (state_31785[(23)]);
var inst_31727 = (state_31785[(20)]);
var inst_31745__$1 = cljs.core.seq(inst_31727);
var state_31785__$1 = (function (){var statearr_31855 = state_31785;
(statearr_31855[(23)] = inst_31745__$1);

return statearr_31855;
})();
if(inst_31745__$1){
var statearr_31856_33677 = state_31785__$1;
(statearr_31856_33677[(1)] = (33));

} else {
var statearr_31857_33678 = state_31785__$1;
(statearr_31857_33678[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (25))){
var inst_31729 = (state_31785[(19)]);
var inst_31730 = (state_31785[(12)]);
var inst_31732 = (inst_31730 < inst_31729);
var inst_31733 = inst_31732;
var state_31785__$1 = state_31785;
if(cljs.core.truth_(inst_31733)){
var statearr_31858_33679 = state_31785__$1;
(statearr_31858_33679[(1)] = (27));

} else {
var statearr_31859_33684 = state_31785__$1;
(statearr_31859_33684[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (34))){
var state_31785__$1 = state_31785;
var statearr_31860_33685 = state_31785__$1;
(statearr_31860_33685[(2)] = null);

(statearr_31860_33685[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (17))){
var state_31785__$1 = state_31785;
var statearr_31861_33686 = state_31785__$1;
(statearr_31861_33686[(2)] = null);

(statearr_31861_33686[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (3))){
var inst_31783 = (state_31785[(2)]);
var state_31785__$1 = state_31785;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31785__$1,inst_31783);
} else {
if((state_val_31786 === (12))){
var inst_31714 = (state_31785[(2)]);
var state_31785__$1 = state_31785;
var statearr_31862_33687 = state_31785__$1;
(statearr_31862_33687[(2)] = inst_31714);

(statearr_31862_33687[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (2))){
var state_31785__$1 = state_31785;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31785__$1,(4),ch);
} else {
if((state_val_31786 === (23))){
var state_31785__$1 = state_31785;
var statearr_31863_33688 = state_31785__$1;
(statearr_31863_33688[(2)] = null);

(statearr_31863_33688[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (35))){
var inst_31767 = (state_31785[(2)]);
var state_31785__$1 = state_31785;
var statearr_31864_33689 = state_31785__$1;
(statearr_31864_33689[(2)] = inst_31767);

(statearr_31864_33689[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (19))){
var inst_31686 = (state_31785[(7)]);
var inst_31690 = cljs.core.chunk_first(inst_31686);
var inst_31691 = cljs.core.chunk_rest(inst_31686);
var inst_31692 = cljs.core.count(inst_31690);
var inst_31656 = inst_31691;
var inst_31657 = inst_31690;
var inst_31658 = inst_31692;
var inst_31659 = (0);
var state_31785__$1 = (function (){var statearr_31868 = state_31785;
(statearr_31868[(13)] = inst_31657);

(statearr_31868[(14)] = inst_31659);

(statearr_31868[(16)] = inst_31656);

(statearr_31868[(17)] = inst_31658);

return statearr_31868;
})();
var statearr_31869_33690 = state_31785__$1;
(statearr_31869_33690[(2)] = null);

(statearr_31869_33690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (11))){
var inst_31656 = (state_31785[(16)]);
var inst_31686 = (state_31785[(7)]);
var inst_31686__$1 = cljs.core.seq(inst_31656);
var state_31785__$1 = (function (){var statearr_31873 = state_31785;
(statearr_31873[(7)] = inst_31686__$1);

return statearr_31873;
})();
if(inst_31686__$1){
var statearr_31875_33691 = state_31785__$1;
(statearr_31875_33691[(1)] = (16));

} else {
var statearr_31876_33692 = state_31785__$1;
(statearr_31876_33692[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (9))){
var inst_31716 = (state_31785[(2)]);
var state_31785__$1 = state_31785;
var statearr_31878_33693 = state_31785__$1;
(statearr_31878_33693[(2)] = inst_31716);

(statearr_31878_33693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (5))){
var inst_31654 = cljs.core.deref(cs);
var inst_31655 = cljs.core.seq(inst_31654);
var inst_31656 = inst_31655;
var inst_31657 = null;
var inst_31658 = (0);
var inst_31659 = (0);
var state_31785__$1 = (function (){var statearr_31879 = state_31785;
(statearr_31879[(13)] = inst_31657);

(statearr_31879[(14)] = inst_31659);

(statearr_31879[(16)] = inst_31656);

(statearr_31879[(17)] = inst_31658);

return statearr_31879;
})();
var statearr_31880_33694 = state_31785__$1;
(statearr_31880_33694[(2)] = null);

(statearr_31880_33694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (14))){
var state_31785__$1 = state_31785;
var statearr_31881_33695 = state_31785__$1;
(statearr_31881_33695[(2)] = null);

(statearr_31881_33695[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (45))){
var inst_31775 = (state_31785[(2)]);
var state_31785__$1 = state_31785;
var statearr_31884_33697 = state_31785__$1;
(statearr_31884_33697[(2)] = inst_31775);

(statearr_31884_33697[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (26))){
var inst_31719 = (state_31785[(27)]);
var inst_31771 = (state_31785[(2)]);
var inst_31772 = cljs.core.seq(inst_31719);
var state_31785__$1 = (function (){var statearr_31885 = state_31785;
(statearr_31885[(29)] = inst_31771);

return statearr_31885;
})();
if(inst_31772){
var statearr_31886_33698 = state_31785__$1;
(statearr_31886_33698[(1)] = (42));

} else {
var statearr_31887_33699 = state_31785__$1;
(statearr_31887_33699[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (16))){
var inst_31686 = (state_31785[(7)]);
var inst_31688 = cljs.core.chunked_seq_QMARK_(inst_31686);
var state_31785__$1 = state_31785;
if(inst_31688){
var statearr_31888_33700 = state_31785__$1;
(statearr_31888_33700[(1)] = (19));

} else {
var statearr_31889_33701 = state_31785__$1;
(statearr_31889_33701[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (38))){
var inst_31764 = (state_31785[(2)]);
var state_31785__$1 = state_31785;
var statearr_31890_33702 = state_31785__$1;
(statearr_31890_33702[(2)] = inst_31764);

(statearr_31890_33702[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (30))){
var state_31785__$1 = state_31785;
var statearr_31891_33703 = state_31785__$1;
(statearr_31891_33703[(2)] = null);

(statearr_31891_33703[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (10))){
var inst_31657 = (state_31785[(13)]);
var inst_31659 = (state_31785[(14)]);
var inst_31675 = cljs.core._nth(inst_31657,inst_31659);
var inst_31676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31675,(0),null);
var inst_31677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31675,(1),null);
var state_31785__$1 = (function (){var statearr_31892 = state_31785;
(statearr_31892[(24)] = inst_31676);

return statearr_31892;
})();
if(cljs.core.truth_(inst_31677)){
var statearr_31893_33705 = state_31785__$1;
(statearr_31893_33705[(1)] = (13));

} else {
var statearr_31894_33706 = state_31785__$1;
(statearr_31894_33706[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (18))){
var inst_31712 = (state_31785[(2)]);
var state_31785__$1 = state_31785;
var statearr_31903_33711 = state_31785__$1;
(statearr_31903_33711[(2)] = inst_31712);

(statearr_31903_33711[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (42))){
var state_31785__$1 = state_31785;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31785__$1,(45),dchan);
} else {
if((state_val_31786 === (37))){
var inst_31754 = (state_31785[(22)]);
var inst_31745 = (state_31785[(23)]);
var inst_31647 = (state_31785[(10)]);
var inst_31754__$1 = cljs.core.first(inst_31745);
var inst_31755 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31754__$1,inst_31647,done);
var state_31785__$1 = (function (){var statearr_31908 = state_31785;
(statearr_31908[(22)] = inst_31754__$1);

return statearr_31908;
})();
if(cljs.core.truth_(inst_31755)){
var statearr_31909_33718 = state_31785__$1;
(statearr_31909_33718[(1)] = (39));

} else {
var statearr_31910_33719 = state_31785__$1;
(statearr_31910_33719[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31786 === (8))){
var inst_31659 = (state_31785[(14)]);
var inst_31658 = (state_31785[(17)]);
var inst_31661 = (inst_31659 < inst_31658);
var inst_31670 = inst_31661;
var state_31785__$1 = state_31785;
if(cljs.core.truth_(inst_31670)){
var statearr_31935_33720 = state_31785__$1;
(statearr_31935_33720[(1)] = (10));

} else {
var statearr_31938_33721 = state_31785__$1;
(statearr_31938_33721[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__30739__auto__ = null;
var cljs$core$async$mult_$_state_machine__30739__auto____0 = (function (){
var statearr_31943 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31943[(0)] = cljs$core$async$mult_$_state_machine__30739__auto__);

(statearr_31943[(1)] = (1));

return statearr_31943;
});
var cljs$core$async$mult_$_state_machine__30739__auto____1 = (function (state_31785){
while(true){
var ret_value__30740__auto__ = (function (){try{while(true){
var result__30741__auto__ = switch__30738__auto__(state_31785);
if(cljs.core.keyword_identical_QMARK_(result__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30741__auto__;
}
break;
}
}catch (e31944){var ex__30742__auto__ = e31944;
var statearr_31945_33722 = state_31785;
(statearr_31945_33722[(2)] = ex__30742__auto__);


if(cljs.core.seq((state_31785[(4)]))){
var statearr_31946_33723 = state_31785;
(statearr_31946_33723[(1)] = cljs.core.first((state_31785[(4)])));

} else {
throw ex__30742__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33724 = state_31785;
state_31785 = G__33724;
continue;
} else {
return ret_value__30740__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30739__auto__ = function(state_31785){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30739__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30739__auto____1.call(this,state_31785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30739__auto____0;
cljs$core$async$mult_$_state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30739__auto____1;
return cljs$core$async$mult_$_state_machine__30739__auto__;
})()
})();
var state__30916__auto__ = (function (){var statearr_31947 = f__30915__auto__();
(statearr_31947[(6)] = c__30914__auto___33620);

return statearr_31947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30916__auto__);
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
var G__31956 = arguments.length;
switch (G__31956) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_33726 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_33726(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33727 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_33727(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33747 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33747(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33749 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_33749(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33750 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33750(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33751 = arguments.length;
var i__4737__auto___33752 = (0);
while(true){
if((i__4737__auto___33752 < len__4736__auto___33751)){
args__4742__auto__.push((arguments[i__4737__auto___33752]));

var G__33753 = (i__4737__auto___33752 + (1));
i__4737__auto___33752 = G__33753;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32015){
var map__32016 = p__32015;
var map__32016__$1 = (((((!((map__32016 == null))))?(((((map__32016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32016):map__32016);
var opts = map__32016__$1;
var statearr_32018_33754 = state;
(statearr_32018_33754[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32019_33755 = state;
(statearr_32019_33755[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_32020_33756 = state;
(statearr_32020_33756[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32011){
var G__32012 = cljs.core.first(seq32011);
var seq32011__$1 = cljs.core.next(seq32011);
var G__32013 = cljs.core.first(seq32011__$1);
var seq32011__$2 = cljs.core.next(seq32011__$1);
var G__32014 = cljs.core.first(seq32011__$2);
var seq32011__$3 = cljs.core.next(seq32011__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32012,G__32013,G__32014,seq32011__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32040 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32040 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32041){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32041 = meta32041;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32042,meta32041__$1){
var self__ = this;
var _32042__$1 = this;
return (new cljs.core.async.t_cljs$core$async32040(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32041__$1));
}));

(cljs.core.async.t_cljs$core$async32040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32042){
var self__ = this;
var _32042__$1 = this;
return self__.meta32041;
}));

(cljs.core.async.t_cljs$core$async32040.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32040.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32040.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32040.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32040.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32040.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32040.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32040.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32040.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32041","meta32041",996304560,null)], null);
}));

(cljs.core.async.t_cljs$core$async32040.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32040.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32040");

(cljs.core.async.t_cljs$core$async32040.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32040");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32040.
 */
cljs.core.async.__GT_t_cljs$core$async32040 = (function cljs$core$async$mix_$___GT_t_cljs$core$async32040(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32041){
return (new cljs.core.async.t_cljs$core$async32040(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32041));
});

}

return (new cljs.core.async.t_cljs$core$async32040(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30914__auto___33776 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30915__auto__ = (function (){var switch__30738__auto__ = (function (state_32197){
var state_val_32198 = (state_32197[(1)]);
if((state_val_32198 === (7))){
var inst_32102 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
var statearr_32199_33777 = state_32197__$1;
(statearr_32199_33777[(2)] = inst_32102);

(statearr_32199_33777[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (20))){
var inst_32114 = (state_32197[(7)]);
var state_32197__$1 = state_32197;
var statearr_32201_33778 = state_32197__$1;
(statearr_32201_33778[(2)] = inst_32114);

(statearr_32201_33778[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (27))){
var state_32197__$1 = state_32197;
var statearr_32224_33779 = state_32197__$1;
(statearr_32224_33779[(2)] = null);

(statearr_32224_33779[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (1))){
var inst_32072 = (state_32197[(8)]);
var inst_32072__$1 = calc_state();
var inst_32091 = (inst_32072__$1 == null);
var inst_32092 = cljs.core.not(inst_32091);
var state_32197__$1 = (function (){var statearr_32225 = state_32197;
(statearr_32225[(8)] = inst_32072__$1);

return statearr_32225;
})();
if(inst_32092){
var statearr_32226_33780 = state_32197__$1;
(statearr_32226_33780[(1)] = (2));

} else {
var statearr_32227_33781 = state_32197__$1;
(statearr_32227_33781[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (24))){
var inst_32142 = (state_32197[(9)]);
var inst_32151 = (state_32197[(10)]);
var inst_32168 = (state_32197[(11)]);
var inst_32168__$1 = (inst_32142.cljs$core$IFn$_invoke$arity$1 ? inst_32142.cljs$core$IFn$_invoke$arity$1(inst_32151) : inst_32142.call(null,inst_32151));
var state_32197__$1 = (function (){var statearr_32229 = state_32197;
(statearr_32229[(11)] = inst_32168__$1);

return statearr_32229;
})();
if(cljs.core.truth_(inst_32168__$1)){
var statearr_32230_33782 = state_32197__$1;
(statearr_32230_33782[(1)] = (29));

} else {
var statearr_32233_33783 = state_32197__$1;
(statearr_32233_33783[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (4))){
var inst_32105 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
if(cljs.core.truth_(inst_32105)){
var statearr_32235_33788 = state_32197__$1;
(statearr_32235_33788[(1)] = (8));

} else {
var statearr_32236_33789 = state_32197__$1;
(statearr_32236_33789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (15))){
var inst_32132 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
if(cljs.core.truth_(inst_32132)){
var statearr_32237_33790 = state_32197__$1;
(statearr_32237_33790[(1)] = (19));

} else {
var statearr_32238_33791 = state_32197__$1;
(statearr_32238_33791[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (21))){
var inst_32137 = (state_32197[(12)]);
var inst_32137__$1 = (state_32197[(2)]);
var inst_32142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32137__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32137__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32144 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32137__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32197__$1 = (function (){var statearr_32257 = state_32197;
(statearr_32257[(9)] = inst_32142);

(statearr_32257[(13)] = inst_32143);

(statearr_32257[(12)] = inst_32137__$1);

return statearr_32257;
})();
return cljs.core.async.ioc_alts_BANG_(state_32197__$1,(22),inst_32144);
} else {
if((state_val_32198 === (31))){
var inst_32176 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
if(cljs.core.truth_(inst_32176)){
var statearr_32261_33792 = state_32197__$1;
(statearr_32261_33792[(1)] = (32));

} else {
var statearr_32262_33793 = state_32197__$1;
(statearr_32262_33793[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (32))){
var inst_32150 = (state_32197[(14)]);
var state_32197__$1 = state_32197;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32197__$1,(35),out,inst_32150);
} else {
if((state_val_32198 === (33))){
var inst_32137 = (state_32197[(12)]);
var inst_32114 = inst_32137;
var state_32197__$1 = (function (){var statearr_32269 = state_32197;
(statearr_32269[(7)] = inst_32114);

return statearr_32269;
})();
var statearr_32270_33794 = state_32197__$1;
(statearr_32270_33794[(2)] = null);

(statearr_32270_33794[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (13))){
var inst_32114 = (state_32197[(7)]);
var inst_32121 = inst_32114.cljs$lang$protocol_mask$partition0$;
var inst_32122 = (inst_32121 & (64));
var inst_32123 = inst_32114.cljs$core$ISeq$;
var inst_32124 = (cljs.core.PROTOCOL_SENTINEL === inst_32123);
var inst_32125 = ((inst_32122) || (inst_32124));
var state_32197__$1 = state_32197;
if(cljs.core.truth_(inst_32125)){
var statearr_32271_33808 = state_32197__$1;
(statearr_32271_33808[(1)] = (16));

} else {
var statearr_32272_33809 = state_32197__$1;
(statearr_32272_33809[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (22))){
var inst_32151 = (state_32197[(10)]);
var inst_32150 = (state_32197[(14)]);
var inst_32149 = (state_32197[(2)]);
var inst_32150__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32149,(0),null);
var inst_32151__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32149,(1),null);
var inst_32152 = (inst_32150__$1 == null);
var inst_32154 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32151__$1,change);
var inst_32155 = ((inst_32152) || (inst_32154));
var state_32197__$1 = (function (){var statearr_32275 = state_32197;
(statearr_32275[(10)] = inst_32151__$1);

(statearr_32275[(14)] = inst_32150__$1);

return statearr_32275;
})();
if(cljs.core.truth_(inst_32155)){
var statearr_32280_33810 = state_32197__$1;
(statearr_32280_33810[(1)] = (23));

} else {
var statearr_32281_33811 = state_32197__$1;
(statearr_32281_33811[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (36))){
var inst_32137 = (state_32197[(12)]);
var inst_32114 = inst_32137;
var state_32197__$1 = (function (){var statearr_32283 = state_32197;
(statearr_32283[(7)] = inst_32114);

return statearr_32283;
})();
var statearr_32284_33812 = state_32197__$1;
(statearr_32284_33812[(2)] = null);

(statearr_32284_33812[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (29))){
var inst_32168 = (state_32197[(11)]);
var state_32197__$1 = state_32197;
var statearr_32285_33813 = state_32197__$1;
(statearr_32285_33813[(2)] = inst_32168);

(statearr_32285_33813[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (6))){
var state_32197__$1 = state_32197;
var statearr_32286_33828 = state_32197__$1;
(statearr_32286_33828[(2)] = false);

(statearr_32286_33828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (28))){
var inst_32163 = (state_32197[(2)]);
var inst_32165 = calc_state();
var inst_32114 = inst_32165;
var state_32197__$1 = (function (){var statearr_32287 = state_32197;
(statearr_32287[(7)] = inst_32114);

(statearr_32287[(15)] = inst_32163);

return statearr_32287;
})();
var statearr_32288_33829 = state_32197__$1;
(statearr_32288_33829[(2)] = null);

(statearr_32288_33829[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (25))){
var inst_32192 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
var statearr_32289_33830 = state_32197__$1;
(statearr_32289_33830[(2)] = inst_32192);

(statearr_32289_33830[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (34))){
var inst_32190 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
var statearr_32290_33833 = state_32197__$1;
(statearr_32290_33833[(2)] = inst_32190);

(statearr_32290_33833[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (17))){
var state_32197__$1 = state_32197;
var statearr_32302_33834 = state_32197__$1;
(statearr_32302_33834[(2)] = false);

(statearr_32302_33834[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (3))){
var state_32197__$1 = state_32197;
var statearr_32303_33835 = state_32197__$1;
(statearr_32303_33835[(2)] = false);

(statearr_32303_33835[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (12))){
var inst_32195 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32197__$1,inst_32195);
} else {
if((state_val_32198 === (2))){
var inst_32072 = (state_32197[(8)]);
var inst_32094 = inst_32072.cljs$lang$protocol_mask$partition0$;
var inst_32095 = (inst_32094 & (64));
var inst_32096 = inst_32072.cljs$core$ISeq$;
var inst_32097 = (cljs.core.PROTOCOL_SENTINEL === inst_32096);
var inst_32098 = ((inst_32095) || (inst_32097));
var state_32197__$1 = state_32197;
if(cljs.core.truth_(inst_32098)){
var statearr_32304_33841 = state_32197__$1;
(statearr_32304_33841[(1)] = (5));

} else {
var statearr_32307_33842 = state_32197__$1;
(statearr_32307_33842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (23))){
var inst_32150 = (state_32197[(14)]);
var inst_32158 = (inst_32150 == null);
var state_32197__$1 = state_32197;
if(cljs.core.truth_(inst_32158)){
var statearr_32315_33843 = state_32197__$1;
(statearr_32315_33843[(1)] = (26));

} else {
var statearr_32316_33844 = state_32197__$1;
(statearr_32316_33844[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (35))){
var inst_32180 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
if(cljs.core.truth_(inst_32180)){
var statearr_32317_33845 = state_32197__$1;
(statearr_32317_33845[(1)] = (36));

} else {
var statearr_32324_33846 = state_32197__$1;
(statearr_32324_33846[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (19))){
var inst_32114 = (state_32197[(7)]);
var inst_32134 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32114);
var state_32197__$1 = state_32197;
var statearr_32326_33847 = state_32197__$1;
(statearr_32326_33847[(2)] = inst_32134);

(statearr_32326_33847[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (11))){
var inst_32114 = (state_32197[(7)]);
var inst_32118 = (inst_32114 == null);
var inst_32119 = cljs.core.not(inst_32118);
var state_32197__$1 = state_32197;
if(inst_32119){
var statearr_32327_33850 = state_32197__$1;
(statearr_32327_33850[(1)] = (13));

} else {
var statearr_32328_33851 = state_32197__$1;
(statearr_32328_33851[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (9))){
var inst_32072 = (state_32197[(8)]);
var state_32197__$1 = state_32197;
var statearr_32329_33852 = state_32197__$1;
(statearr_32329_33852[(2)] = inst_32072);

(statearr_32329_33852[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (5))){
var state_32197__$1 = state_32197;
var statearr_32330_33853 = state_32197__$1;
(statearr_32330_33853[(2)] = true);

(statearr_32330_33853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (14))){
var state_32197__$1 = state_32197;
var statearr_32331_33854 = state_32197__$1;
(statearr_32331_33854[(2)] = false);

(statearr_32331_33854[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (26))){
var inst_32151 = (state_32197[(10)]);
var inst_32160 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32151);
var state_32197__$1 = state_32197;
var statearr_32332_33855 = state_32197__$1;
(statearr_32332_33855[(2)] = inst_32160);

(statearr_32332_33855[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (16))){
var state_32197__$1 = state_32197;
var statearr_32334_33856 = state_32197__$1;
(statearr_32334_33856[(2)] = true);

(statearr_32334_33856[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (38))){
var inst_32186 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
var statearr_32335_33857 = state_32197__$1;
(statearr_32335_33857[(2)] = inst_32186);

(statearr_32335_33857[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (30))){
var inst_32142 = (state_32197[(9)]);
var inst_32143 = (state_32197[(13)]);
var inst_32151 = (state_32197[(10)]);
var inst_32171 = cljs.core.empty_QMARK_(inst_32142);
var inst_32172 = (inst_32143.cljs$core$IFn$_invoke$arity$1 ? inst_32143.cljs$core$IFn$_invoke$arity$1(inst_32151) : inst_32143.call(null,inst_32151));
var inst_32173 = cljs.core.not(inst_32172);
var inst_32174 = ((inst_32171) && (inst_32173));
var state_32197__$1 = state_32197;
var statearr_32336_33858 = state_32197__$1;
(statearr_32336_33858[(2)] = inst_32174);

(statearr_32336_33858[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (10))){
var inst_32072 = (state_32197[(8)]);
var inst_32110 = (state_32197[(2)]);
var inst_32111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32110,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32110,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32110,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32114 = inst_32072;
var state_32197__$1 = (function (){var statearr_32337 = state_32197;
(statearr_32337[(7)] = inst_32114);

(statearr_32337[(16)] = inst_32113);

(statearr_32337[(17)] = inst_32111);

(statearr_32337[(18)] = inst_32112);

return statearr_32337;
})();
var statearr_32338_33859 = state_32197__$1;
(statearr_32338_33859[(2)] = null);

(statearr_32338_33859[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (18))){
var inst_32129 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
var statearr_32339_33860 = state_32197__$1;
(statearr_32339_33860[(2)] = inst_32129);

(statearr_32339_33860[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (37))){
var state_32197__$1 = state_32197;
var statearr_32340_33861 = state_32197__$1;
(statearr_32340_33861[(2)] = null);

(statearr_32340_33861[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (8))){
var inst_32072 = (state_32197[(8)]);
var inst_32107 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32072);
var state_32197__$1 = state_32197;
var statearr_32341_33862 = state_32197__$1;
(statearr_32341_33862[(2)] = inst_32107);

(statearr_32341_33862[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__30739__auto__ = null;
var cljs$core$async$mix_$_state_machine__30739__auto____0 = (function (){
var statearr_32342 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32342[(0)] = cljs$core$async$mix_$_state_machine__30739__auto__);

(statearr_32342[(1)] = (1));

return statearr_32342;
});
var cljs$core$async$mix_$_state_machine__30739__auto____1 = (function (state_32197){
while(true){
var ret_value__30740__auto__ = (function (){try{while(true){
var result__30741__auto__ = switch__30738__auto__(state_32197);
if(cljs.core.keyword_identical_QMARK_(result__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30741__auto__;
}
break;
}
}catch (e32343){var ex__30742__auto__ = e32343;
var statearr_32344_33863 = state_32197;
(statearr_32344_33863[(2)] = ex__30742__auto__);


if(cljs.core.seq((state_32197[(4)]))){
var statearr_32345_33864 = state_32197;
(statearr_32345_33864[(1)] = cljs.core.first((state_32197[(4)])));

} else {
throw ex__30742__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33865 = state_32197;
state_32197 = G__33865;
continue;
} else {
return ret_value__30740__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30739__auto__ = function(state_32197){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30739__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30739__auto____1.call(this,state_32197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30739__auto____0;
cljs$core$async$mix_$_state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30739__auto____1;
return cljs$core$async$mix_$_state_machine__30739__auto__;
})()
})();
var state__30916__auto__ = (function (){var statearr_32346 = f__30915__auto__();
(statearr_32346[(6)] = c__30914__auto___33776);

return statearr_32346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30916__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_33866 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_33866(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33867 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_33867(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33868 = (function() {
var G__33869 = null;
var G__33869__1 = (function (p){
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
var G__33869__2 = (function (p,v){
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
G__33869 = function(p,v){
switch(arguments.length){
case 1:
return G__33869__1.call(this,p);
case 2:
return G__33869__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33869.cljs$core$IFn$_invoke$arity$1 = G__33869__1;
G__33869.cljs$core$IFn$_invoke$arity$2 = G__33869__2;
return G__33869;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32364 = arguments.length;
switch (G__32364) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33868(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33868(p,v);
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
var G__32367 = arguments.length;
switch (G__32367) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32365_SHARP_){
if(cljs.core.truth_((p1__32365_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32365_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32365_SHARP_.call(null,topic)))){
return p1__32365_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32365_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32370 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32370 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32371){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32371 = meta32371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32372,meta32371__$1){
var self__ = this;
var _32372__$1 = this;
return (new cljs.core.async.t_cljs$core$async32370(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32371__$1));
}));

(cljs.core.async.t_cljs$core$async32370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32372){
var self__ = this;
var _32372__$1 = this;
return self__.meta32371;
}));

(cljs.core.async.t_cljs$core$async32370.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32370.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32370.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32370.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32370.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async32370.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32370.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32370.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32371","meta32371",-59779814,null)], null);
}));

(cljs.core.async.t_cljs$core$async32370.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32370.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32370");

(cljs.core.async.t_cljs$core$async32370.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32370");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32370.
 */
cljs.core.async.__GT_t_cljs$core$async32370 = (function cljs$core$async$__GT_t_cljs$core$async32370(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32371){
return (new cljs.core.async.t_cljs$core$async32370(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32371));
});

}

return (new cljs.core.async.t_cljs$core$async32370(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30914__auto___33960 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30915__auto__ = (function (){var switch__30738__auto__ = (function (state_32449){
var state_val_32450 = (state_32449[(1)]);
if((state_val_32450 === (7))){
var inst_32445 = (state_32449[(2)]);
var state_32449__$1 = state_32449;
var statearr_32451_33961 = state_32449__$1;
(statearr_32451_33961[(2)] = inst_32445);

(statearr_32451_33961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (20))){
var state_32449__$1 = state_32449;
var statearr_32452_33962 = state_32449__$1;
(statearr_32452_33962[(2)] = null);

(statearr_32452_33962[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (1))){
var state_32449__$1 = state_32449;
var statearr_32453_33963 = state_32449__$1;
(statearr_32453_33963[(2)] = null);

(statearr_32453_33963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (24))){
var inst_32428 = (state_32449[(7)]);
var inst_32437 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32428);
var state_32449__$1 = state_32449;
var statearr_32454_33964 = state_32449__$1;
(statearr_32454_33964[(2)] = inst_32437);

(statearr_32454_33964[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (4))){
var inst_32378 = (state_32449[(8)]);
var inst_32378__$1 = (state_32449[(2)]);
var inst_32379 = (inst_32378__$1 == null);
var state_32449__$1 = (function (){var statearr_32455 = state_32449;
(statearr_32455[(8)] = inst_32378__$1);

return statearr_32455;
})();
if(cljs.core.truth_(inst_32379)){
var statearr_32456_33966 = state_32449__$1;
(statearr_32456_33966[(1)] = (5));

} else {
var statearr_32457_33967 = state_32449__$1;
(statearr_32457_33967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (15))){
var inst_32422 = (state_32449[(2)]);
var state_32449__$1 = state_32449;
var statearr_32458_33968 = state_32449__$1;
(statearr_32458_33968[(2)] = inst_32422);

(statearr_32458_33968[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (21))){
var inst_32442 = (state_32449[(2)]);
var state_32449__$1 = (function (){var statearr_32459 = state_32449;
(statearr_32459[(9)] = inst_32442);

return statearr_32459;
})();
var statearr_32460_33969 = state_32449__$1;
(statearr_32460_33969[(2)] = null);

(statearr_32460_33969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (13))){
var inst_32404 = (state_32449[(10)]);
var inst_32406 = cljs.core.chunked_seq_QMARK_(inst_32404);
var state_32449__$1 = state_32449;
if(inst_32406){
var statearr_32461_33970 = state_32449__$1;
(statearr_32461_33970[(1)] = (16));

} else {
var statearr_32462_33971 = state_32449__$1;
(statearr_32462_33971[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (22))){
var inst_32434 = (state_32449[(2)]);
var state_32449__$1 = state_32449;
if(cljs.core.truth_(inst_32434)){
var statearr_32463_33972 = state_32449__$1;
(statearr_32463_33972[(1)] = (23));

} else {
var statearr_32464_33973 = state_32449__$1;
(statearr_32464_33973[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (6))){
var inst_32378 = (state_32449[(8)]);
var inst_32428 = (state_32449[(7)]);
var inst_32430 = (state_32449[(11)]);
var inst_32428__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32378) : topic_fn.call(null,inst_32378));
var inst_32429 = cljs.core.deref(mults);
var inst_32430__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32429,inst_32428__$1);
var state_32449__$1 = (function (){var statearr_32465 = state_32449;
(statearr_32465[(7)] = inst_32428__$1);

(statearr_32465[(11)] = inst_32430__$1);

return statearr_32465;
})();
if(cljs.core.truth_(inst_32430__$1)){
var statearr_32466_33974 = state_32449__$1;
(statearr_32466_33974[(1)] = (19));

} else {
var statearr_32473_33976 = state_32449__$1;
(statearr_32473_33976[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (25))){
var inst_32439 = (state_32449[(2)]);
var state_32449__$1 = state_32449;
var statearr_32474_33977 = state_32449__$1;
(statearr_32474_33977[(2)] = inst_32439);

(statearr_32474_33977[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (17))){
var inst_32404 = (state_32449[(10)]);
var inst_32413 = cljs.core.first(inst_32404);
var inst_32414 = cljs.core.async.muxch_STAR_(inst_32413);
var inst_32415 = cljs.core.async.close_BANG_(inst_32414);
var inst_32416 = cljs.core.next(inst_32404);
var inst_32388 = inst_32416;
var inst_32389 = null;
var inst_32390 = (0);
var inst_32391 = (0);
var state_32449__$1 = (function (){var statearr_32478 = state_32449;
(statearr_32478[(12)] = inst_32388);

(statearr_32478[(13)] = inst_32391);

(statearr_32478[(14)] = inst_32390);

(statearr_32478[(15)] = inst_32415);

(statearr_32478[(16)] = inst_32389);

return statearr_32478;
})();
var statearr_32479_33984 = state_32449__$1;
(statearr_32479_33984[(2)] = null);

(statearr_32479_33984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (3))){
var inst_32447 = (state_32449[(2)]);
var state_32449__$1 = state_32449;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32449__$1,inst_32447);
} else {
if((state_val_32450 === (12))){
var inst_32424 = (state_32449[(2)]);
var state_32449__$1 = state_32449;
var statearr_32483_33985 = state_32449__$1;
(statearr_32483_33985[(2)] = inst_32424);

(statearr_32483_33985[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (2))){
var state_32449__$1 = state_32449;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32449__$1,(4),ch);
} else {
if((state_val_32450 === (23))){
var state_32449__$1 = state_32449;
var statearr_32484_33986 = state_32449__$1;
(statearr_32484_33986[(2)] = null);

(statearr_32484_33986[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (19))){
var inst_32378 = (state_32449[(8)]);
var inst_32430 = (state_32449[(11)]);
var inst_32432 = cljs.core.async.muxch_STAR_(inst_32430);
var state_32449__$1 = state_32449;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32449__$1,(22),inst_32432,inst_32378);
} else {
if((state_val_32450 === (11))){
var inst_32388 = (state_32449[(12)]);
var inst_32404 = (state_32449[(10)]);
var inst_32404__$1 = cljs.core.seq(inst_32388);
var state_32449__$1 = (function (){var statearr_32485 = state_32449;
(statearr_32485[(10)] = inst_32404__$1);

return statearr_32485;
})();
if(inst_32404__$1){
var statearr_32486_33987 = state_32449__$1;
(statearr_32486_33987[(1)] = (13));

} else {
var statearr_32487_33988 = state_32449__$1;
(statearr_32487_33988[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (9))){
var inst_32426 = (state_32449[(2)]);
var state_32449__$1 = state_32449;
var statearr_32488_33989 = state_32449__$1;
(statearr_32488_33989[(2)] = inst_32426);

(statearr_32488_33989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (5))){
var inst_32385 = cljs.core.deref(mults);
var inst_32386 = cljs.core.vals(inst_32385);
var inst_32387 = cljs.core.seq(inst_32386);
var inst_32388 = inst_32387;
var inst_32389 = null;
var inst_32390 = (0);
var inst_32391 = (0);
var state_32449__$1 = (function (){var statearr_32489 = state_32449;
(statearr_32489[(12)] = inst_32388);

(statearr_32489[(13)] = inst_32391);

(statearr_32489[(14)] = inst_32390);

(statearr_32489[(16)] = inst_32389);

return statearr_32489;
})();
var statearr_32490_33996 = state_32449__$1;
(statearr_32490_33996[(2)] = null);

(statearr_32490_33996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (14))){
var state_32449__$1 = state_32449;
var statearr_32494_33997 = state_32449__$1;
(statearr_32494_33997[(2)] = null);

(statearr_32494_33997[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (16))){
var inst_32404 = (state_32449[(10)]);
var inst_32408 = cljs.core.chunk_first(inst_32404);
var inst_32409 = cljs.core.chunk_rest(inst_32404);
var inst_32410 = cljs.core.count(inst_32408);
var inst_32388 = inst_32409;
var inst_32389 = inst_32408;
var inst_32390 = inst_32410;
var inst_32391 = (0);
var state_32449__$1 = (function (){var statearr_32501 = state_32449;
(statearr_32501[(12)] = inst_32388);

(statearr_32501[(13)] = inst_32391);

(statearr_32501[(14)] = inst_32390);

(statearr_32501[(16)] = inst_32389);

return statearr_32501;
})();
var statearr_32502_33998 = state_32449__$1;
(statearr_32502_33998[(2)] = null);

(statearr_32502_33998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (10))){
var inst_32388 = (state_32449[(12)]);
var inst_32391 = (state_32449[(13)]);
var inst_32390 = (state_32449[(14)]);
var inst_32389 = (state_32449[(16)]);
var inst_32397 = cljs.core._nth(inst_32389,inst_32391);
var inst_32398 = cljs.core.async.muxch_STAR_(inst_32397);
var inst_32399 = cljs.core.async.close_BANG_(inst_32398);
var inst_32401 = (inst_32391 + (1));
var tmp32491 = inst_32388;
var tmp32492 = inst_32390;
var tmp32493 = inst_32389;
var inst_32388__$1 = tmp32491;
var inst_32389__$1 = tmp32493;
var inst_32390__$1 = tmp32492;
var inst_32391__$1 = inst_32401;
var state_32449__$1 = (function (){var statearr_32503 = state_32449;
(statearr_32503[(12)] = inst_32388__$1);

(statearr_32503[(17)] = inst_32399);

(statearr_32503[(13)] = inst_32391__$1);

(statearr_32503[(14)] = inst_32390__$1);

(statearr_32503[(16)] = inst_32389__$1);

return statearr_32503;
})();
var statearr_32504_33999 = state_32449__$1;
(statearr_32504_33999[(2)] = null);

(statearr_32504_33999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (18))){
var inst_32419 = (state_32449[(2)]);
var state_32449__$1 = state_32449;
var statearr_32506_34000 = state_32449__$1;
(statearr_32506_34000[(2)] = inst_32419);

(statearr_32506_34000[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (8))){
var inst_32391 = (state_32449[(13)]);
var inst_32390 = (state_32449[(14)]);
var inst_32394 = (inst_32391 < inst_32390);
var inst_32395 = inst_32394;
var state_32449__$1 = state_32449;
if(cljs.core.truth_(inst_32395)){
var statearr_32509_34001 = state_32449__$1;
(statearr_32509_34001[(1)] = (10));

} else {
var statearr_32510_34002 = state_32449__$1;
(statearr_32510_34002[(1)] = (11));

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
var cljs$core$async$state_machine__30739__auto__ = null;
var cljs$core$async$state_machine__30739__auto____0 = (function (){
var statearr_32514 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32514[(0)] = cljs$core$async$state_machine__30739__auto__);

(statearr_32514[(1)] = (1));

return statearr_32514;
});
var cljs$core$async$state_machine__30739__auto____1 = (function (state_32449){
while(true){
var ret_value__30740__auto__ = (function (){try{while(true){
var result__30741__auto__ = switch__30738__auto__(state_32449);
if(cljs.core.keyword_identical_QMARK_(result__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30741__auto__;
}
break;
}
}catch (e32515){var ex__30742__auto__ = e32515;
var statearr_32516_34003 = state_32449;
(statearr_32516_34003[(2)] = ex__30742__auto__);


if(cljs.core.seq((state_32449[(4)]))){
var statearr_32517_34004 = state_32449;
(statearr_32517_34004[(1)] = cljs.core.first((state_32449[(4)])));

} else {
throw ex__30742__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34005 = state_32449;
state_32449 = G__34005;
continue;
} else {
return ret_value__30740__auto__;
}
break;
}
});
cljs$core$async$state_machine__30739__auto__ = function(state_32449){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30739__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30739__auto____1.call(this,state_32449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30739__auto____0;
cljs$core$async$state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30739__auto____1;
return cljs$core$async$state_machine__30739__auto__;
})()
})();
var state__30916__auto__ = (function (){var statearr_32518 = f__30915__auto__();
(statearr_32518[(6)] = c__30914__auto___33960);

return statearr_32518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30916__auto__);
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
var G__32520 = arguments.length;
switch (G__32520) {
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
var G__32527 = arguments.length;
switch (G__32527) {
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
var G__32534 = arguments.length;
switch (G__32534) {
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
var c__30914__auto___34011 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30915__auto__ = (function (){var switch__30738__auto__ = (function (state_32580){
var state_val_32583 = (state_32580[(1)]);
if((state_val_32583 === (7))){
var state_32580__$1 = state_32580;
var statearr_32589_34012 = state_32580__$1;
(statearr_32589_34012[(2)] = null);

(statearr_32589_34012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32583 === (1))){
var state_32580__$1 = state_32580;
var statearr_32590_34013 = state_32580__$1;
(statearr_32590_34013[(2)] = null);

(statearr_32590_34013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32583 === (4))){
var inst_32537 = (state_32580[(7)]);
var inst_32538 = (state_32580[(8)]);
var inst_32540 = (inst_32538 < inst_32537);
var state_32580__$1 = state_32580;
if(cljs.core.truth_(inst_32540)){
var statearr_32592_34014 = state_32580__$1;
(statearr_32592_34014[(1)] = (6));

} else {
var statearr_32594_34015 = state_32580__$1;
(statearr_32594_34015[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32583 === (15))){
var inst_32563 = (state_32580[(9)]);
var inst_32571 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32563);
var state_32580__$1 = state_32580;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32580__$1,(17),out,inst_32571);
} else {
if((state_val_32583 === (13))){
var inst_32563 = (state_32580[(9)]);
var inst_32563__$1 = (state_32580[(2)]);
var inst_32564 = cljs.core.some(cljs.core.nil_QMARK_,inst_32563__$1);
var state_32580__$1 = (function (){var statearr_32596 = state_32580;
(statearr_32596[(9)] = inst_32563__$1);

return statearr_32596;
})();
if(cljs.core.truth_(inst_32564)){
var statearr_32597_34018 = state_32580__$1;
(statearr_32597_34018[(1)] = (14));

} else {
var statearr_32598_34019 = state_32580__$1;
(statearr_32598_34019[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32583 === (6))){
var state_32580__$1 = state_32580;
var statearr_32599_34020 = state_32580__$1;
(statearr_32599_34020[(2)] = null);

(statearr_32599_34020[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32583 === (17))){
var inst_32573 = (state_32580[(2)]);
var state_32580__$1 = (function (){var statearr_32601 = state_32580;
(statearr_32601[(10)] = inst_32573);

return statearr_32601;
})();
var statearr_32602_34021 = state_32580__$1;
(statearr_32602_34021[(2)] = null);

(statearr_32602_34021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32583 === (3))){
var inst_32578 = (state_32580[(2)]);
var state_32580__$1 = state_32580;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32580__$1,inst_32578);
} else {
if((state_val_32583 === (12))){
var _ = (function (){var statearr_32607 = state_32580;
(statearr_32607[(4)] = cljs.core.rest((state_32580[(4)])));

return statearr_32607;
})();
var state_32580__$1 = state_32580;
var ex32600 = (state_32580__$1[(2)]);
var statearr_32612_34022 = state_32580__$1;
(statearr_32612_34022[(5)] = ex32600);


if((ex32600 instanceof Object)){
var statearr_32617_34023 = state_32580__$1;
(statearr_32617_34023[(1)] = (11));

(statearr_32617_34023[(5)] = null);

} else {
throw ex32600;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32583 === (2))){
var inst_32536 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32537 = cnt;
var inst_32538 = (0);
var state_32580__$1 = (function (){var statearr_32621 = state_32580;
(statearr_32621[(7)] = inst_32537);

(statearr_32621[(8)] = inst_32538);

(statearr_32621[(11)] = inst_32536);

return statearr_32621;
})();
var statearr_32622_34024 = state_32580__$1;
(statearr_32622_34024[(2)] = null);

(statearr_32622_34024[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32583 === (11))){
var inst_32542 = (state_32580[(2)]);
var inst_32543 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32580__$1 = (function (){var statearr_32623 = state_32580;
(statearr_32623[(12)] = inst_32542);

return statearr_32623;
})();
var statearr_32624_34025 = state_32580__$1;
(statearr_32624_34025[(2)] = inst_32543);

(statearr_32624_34025[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32583 === (9))){
var inst_32538 = (state_32580[(8)]);
var _ = (function (){var statearr_32625 = state_32580;
(statearr_32625[(4)] = cljs.core.cons((12),(state_32580[(4)])));

return statearr_32625;
})();
var inst_32549 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32538) : chs__$1.call(null,inst_32538));
var inst_32550 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32538) : done.call(null,inst_32538));
var inst_32551 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32549,inst_32550);
var ___$1 = (function (){var statearr_32627 = state_32580;
(statearr_32627[(4)] = cljs.core.rest((state_32580[(4)])));

return statearr_32627;
})();
var state_32580__$1 = state_32580;
var statearr_32628_34034 = state_32580__$1;
(statearr_32628_34034[(2)] = inst_32551);

(statearr_32628_34034[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32583 === (5))){
var inst_32561 = (state_32580[(2)]);
var state_32580__$1 = (function (){var statearr_32629 = state_32580;
(statearr_32629[(13)] = inst_32561);

return statearr_32629;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32580__$1,(13),dchan);
} else {
if((state_val_32583 === (14))){
var inst_32566 = cljs.core.async.close_BANG_(out);
var state_32580__$1 = state_32580;
var statearr_32630_34035 = state_32580__$1;
(statearr_32630_34035[(2)] = inst_32566);

(statearr_32630_34035[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32583 === (16))){
var inst_32576 = (state_32580[(2)]);
var state_32580__$1 = state_32580;
var statearr_32631_34036 = state_32580__$1;
(statearr_32631_34036[(2)] = inst_32576);

(statearr_32631_34036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32583 === (10))){
var inst_32538 = (state_32580[(8)]);
var inst_32554 = (state_32580[(2)]);
var inst_32555 = (inst_32538 + (1));
var inst_32538__$1 = inst_32555;
var state_32580__$1 = (function (){var statearr_32632 = state_32580;
(statearr_32632[(8)] = inst_32538__$1);

(statearr_32632[(14)] = inst_32554);

return statearr_32632;
})();
var statearr_32633_34038 = state_32580__$1;
(statearr_32633_34038[(2)] = null);

(statearr_32633_34038[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32583 === (8))){
var inst_32559 = (state_32580[(2)]);
var state_32580__$1 = state_32580;
var statearr_32634_34042 = state_32580__$1;
(statearr_32634_34042[(2)] = inst_32559);

(statearr_32634_34042[(1)] = (5));


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
var cljs$core$async$state_machine__30739__auto__ = null;
var cljs$core$async$state_machine__30739__auto____0 = (function (){
var statearr_32635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32635[(0)] = cljs$core$async$state_machine__30739__auto__);

(statearr_32635[(1)] = (1));

return statearr_32635;
});
var cljs$core$async$state_machine__30739__auto____1 = (function (state_32580){
while(true){
var ret_value__30740__auto__ = (function (){try{while(true){
var result__30741__auto__ = switch__30738__auto__(state_32580);
if(cljs.core.keyword_identical_QMARK_(result__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30741__auto__;
}
break;
}
}catch (e32636){var ex__30742__auto__ = e32636;
var statearr_32637_34047 = state_32580;
(statearr_32637_34047[(2)] = ex__30742__auto__);


if(cljs.core.seq((state_32580[(4)]))){
var statearr_32638_34048 = state_32580;
(statearr_32638_34048[(1)] = cljs.core.first((state_32580[(4)])));

} else {
throw ex__30742__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34049 = state_32580;
state_32580 = G__34049;
continue;
} else {
return ret_value__30740__auto__;
}
break;
}
});
cljs$core$async$state_machine__30739__auto__ = function(state_32580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30739__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30739__auto____1.call(this,state_32580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30739__auto____0;
cljs$core$async$state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30739__auto____1;
return cljs$core$async$state_machine__30739__auto__;
})()
})();
var state__30916__auto__ = (function (){var statearr_32639 = f__30915__auto__();
(statearr_32639[(6)] = c__30914__auto___34011);

return statearr_32639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30916__auto__);
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
var G__32642 = arguments.length;
switch (G__32642) {
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
var c__30914__auto___34054 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30915__auto__ = (function (){var switch__30738__auto__ = (function (state_32682){
var state_val_32683 = (state_32682[(1)]);
if((state_val_32683 === (7))){
var inst_32654 = (state_32682[(7)]);
var inst_32653 = (state_32682[(8)]);
var inst_32653__$1 = (state_32682[(2)]);
var inst_32654__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32653__$1,(0),null);
var inst_32655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32653__$1,(1),null);
var inst_32656 = (inst_32654__$1 == null);
var state_32682__$1 = (function (){var statearr_32689 = state_32682;
(statearr_32689[(9)] = inst_32655);

(statearr_32689[(7)] = inst_32654__$1);

(statearr_32689[(8)] = inst_32653__$1);

return statearr_32689;
})();
if(cljs.core.truth_(inst_32656)){
var statearr_32693_34055 = state_32682__$1;
(statearr_32693_34055[(1)] = (8));

} else {
var statearr_32694_34056 = state_32682__$1;
(statearr_32694_34056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32683 === (1))){
var inst_32643 = cljs.core.vec(chs);
var inst_32644 = inst_32643;
var state_32682__$1 = (function (){var statearr_32697 = state_32682;
(statearr_32697[(10)] = inst_32644);

return statearr_32697;
})();
var statearr_32698_34057 = state_32682__$1;
(statearr_32698_34057[(2)] = null);

(statearr_32698_34057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32683 === (4))){
var inst_32644 = (state_32682[(10)]);
var state_32682__$1 = state_32682;
return cljs.core.async.ioc_alts_BANG_(state_32682__$1,(7),inst_32644);
} else {
if((state_val_32683 === (6))){
var inst_32674 = (state_32682[(2)]);
var state_32682__$1 = state_32682;
var statearr_32700_34058 = state_32682__$1;
(statearr_32700_34058[(2)] = inst_32674);

(statearr_32700_34058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32683 === (3))){
var inst_32676 = (state_32682[(2)]);
var state_32682__$1 = state_32682;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32682__$1,inst_32676);
} else {
if((state_val_32683 === (2))){
var inst_32644 = (state_32682[(10)]);
var inst_32646 = cljs.core.count(inst_32644);
var inst_32647 = (inst_32646 > (0));
var state_32682__$1 = state_32682;
if(cljs.core.truth_(inst_32647)){
var statearr_32702_34059 = state_32682__$1;
(statearr_32702_34059[(1)] = (4));

} else {
var statearr_32703_34060 = state_32682__$1;
(statearr_32703_34060[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32683 === (11))){
var inst_32644 = (state_32682[(10)]);
var inst_32667 = (state_32682[(2)]);
var tmp32701 = inst_32644;
var inst_32644__$1 = tmp32701;
var state_32682__$1 = (function (){var statearr_32704 = state_32682;
(statearr_32704[(11)] = inst_32667);

(statearr_32704[(10)] = inst_32644__$1);

return statearr_32704;
})();
var statearr_32705_34061 = state_32682__$1;
(statearr_32705_34061[(2)] = null);

(statearr_32705_34061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32683 === (9))){
var inst_32654 = (state_32682[(7)]);
var state_32682__$1 = state_32682;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32682__$1,(11),out,inst_32654);
} else {
if((state_val_32683 === (5))){
var inst_32672 = cljs.core.async.close_BANG_(out);
var state_32682__$1 = state_32682;
var statearr_32706_34062 = state_32682__$1;
(statearr_32706_34062[(2)] = inst_32672);

(statearr_32706_34062[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32683 === (10))){
var inst_32670 = (state_32682[(2)]);
var state_32682__$1 = state_32682;
var statearr_32707_34063 = state_32682__$1;
(statearr_32707_34063[(2)] = inst_32670);

(statearr_32707_34063[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32683 === (8))){
var inst_32655 = (state_32682[(9)]);
var inst_32654 = (state_32682[(7)]);
var inst_32644 = (state_32682[(10)]);
var inst_32653 = (state_32682[(8)]);
var inst_32662 = (function (){var cs = inst_32644;
var vec__32649 = inst_32653;
var v = inst_32654;
var c = inst_32655;
return (function (p1__32640_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32640_SHARP_);
});
})();
var inst_32663 = cljs.core.filterv(inst_32662,inst_32644);
var inst_32644__$1 = inst_32663;
var state_32682__$1 = (function (){var statearr_32708 = state_32682;
(statearr_32708[(10)] = inst_32644__$1);

return statearr_32708;
})();
var statearr_32709_34064 = state_32682__$1;
(statearr_32709_34064[(2)] = null);

(statearr_32709_34064[(1)] = (2));


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
var cljs$core$async$state_machine__30739__auto__ = null;
var cljs$core$async$state_machine__30739__auto____0 = (function (){
var statearr_32710 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32710[(0)] = cljs$core$async$state_machine__30739__auto__);

(statearr_32710[(1)] = (1));

return statearr_32710;
});
var cljs$core$async$state_machine__30739__auto____1 = (function (state_32682){
while(true){
var ret_value__30740__auto__ = (function (){try{while(true){
var result__30741__auto__ = switch__30738__auto__(state_32682);
if(cljs.core.keyword_identical_QMARK_(result__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30741__auto__;
}
break;
}
}catch (e32711){var ex__30742__auto__ = e32711;
var statearr_32712_34065 = state_32682;
(statearr_32712_34065[(2)] = ex__30742__auto__);


if(cljs.core.seq((state_32682[(4)]))){
var statearr_32713_34066 = state_32682;
(statearr_32713_34066[(1)] = cljs.core.first((state_32682[(4)])));

} else {
throw ex__30742__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34073 = state_32682;
state_32682 = G__34073;
continue;
} else {
return ret_value__30740__auto__;
}
break;
}
});
cljs$core$async$state_machine__30739__auto__ = function(state_32682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30739__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30739__auto____1.call(this,state_32682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30739__auto____0;
cljs$core$async$state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30739__auto____1;
return cljs$core$async$state_machine__30739__auto__;
})()
})();
var state__30916__auto__ = (function (){var statearr_32714 = f__30915__auto__();
(statearr_32714[(6)] = c__30914__auto___34054);

return statearr_32714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30916__auto__);
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
var G__32742 = arguments.length;
switch (G__32742) {
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
var c__30914__auto___34075 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30915__auto__ = (function (){var switch__30738__auto__ = (function (state_32766){
var state_val_32767 = (state_32766[(1)]);
if((state_val_32767 === (7))){
var inst_32748 = (state_32766[(7)]);
var inst_32748__$1 = (state_32766[(2)]);
var inst_32749 = (inst_32748__$1 == null);
var inst_32750 = cljs.core.not(inst_32749);
var state_32766__$1 = (function (){var statearr_32768 = state_32766;
(statearr_32768[(7)] = inst_32748__$1);

return statearr_32768;
})();
if(inst_32750){
var statearr_32769_34076 = state_32766__$1;
(statearr_32769_34076[(1)] = (8));

} else {
var statearr_32770_34077 = state_32766__$1;
(statearr_32770_34077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32767 === (1))){
var inst_32743 = (0);
var state_32766__$1 = (function (){var statearr_32771 = state_32766;
(statearr_32771[(8)] = inst_32743);

return statearr_32771;
})();
var statearr_32772_34078 = state_32766__$1;
(statearr_32772_34078[(2)] = null);

(statearr_32772_34078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32767 === (4))){
var state_32766__$1 = state_32766;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32766__$1,(7),ch);
} else {
if((state_val_32767 === (6))){
var inst_32761 = (state_32766[(2)]);
var state_32766__$1 = state_32766;
var statearr_32773_34079 = state_32766__$1;
(statearr_32773_34079[(2)] = inst_32761);

(statearr_32773_34079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32767 === (3))){
var inst_32763 = (state_32766[(2)]);
var inst_32764 = cljs.core.async.close_BANG_(out);
var state_32766__$1 = (function (){var statearr_32774 = state_32766;
(statearr_32774[(9)] = inst_32763);

return statearr_32774;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32766__$1,inst_32764);
} else {
if((state_val_32767 === (2))){
var inst_32743 = (state_32766[(8)]);
var inst_32745 = (inst_32743 < n);
var state_32766__$1 = state_32766;
if(cljs.core.truth_(inst_32745)){
var statearr_32775_34080 = state_32766__$1;
(statearr_32775_34080[(1)] = (4));

} else {
var statearr_32776_34081 = state_32766__$1;
(statearr_32776_34081[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32767 === (11))){
var inst_32743 = (state_32766[(8)]);
var inst_32753 = (state_32766[(2)]);
var inst_32754 = (inst_32743 + (1));
var inst_32743__$1 = inst_32754;
var state_32766__$1 = (function (){var statearr_32777 = state_32766;
(statearr_32777[(8)] = inst_32743__$1);

(statearr_32777[(10)] = inst_32753);

return statearr_32777;
})();
var statearr_32778_34082 = state_32766__$1;
(statearr_32778_34082[(2)] = null);

(statearr_32778_34082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32767 === (9))){
var state_32766__$1 = state_32766;
var statearr_32779_34083 = state_32766__$1;
(statearr_32779_34083[(2)] = null);

(statearr_32779_34083[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32767 === (5))){
var state_32766__$1 = state_32766;
var statearr_32780_34084 = state_32766__$1;
(statearr_32780_34084[(2)] = null);

(statearr_32780_34084[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32767 === (10))){
var inst_32758 = (state_32766[(2)]);
var state_32766__$1 = state_32766;
var statearr_32781_34085 = state_32766__$1;
(statearr_32781_34085[(2)] = inst_32758);

(statearr_32781_34085[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32767 === (8))){
var inst_32748 = (state_32766[(7)]);
var state_32766__$1 = state_32766;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32766__$1,(11),out,inst_32748);
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
var cljs$core$async$state_machine__30739__auto__ = null;
var cljs$core$async$state_machine__30739__auto____0 = (function (){
var statearr_32782 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32782[(0)] = cljs$core$async$state_machine__30739__auto__);

(statearr_32782[(1)] = (1));

return statearr_32782;
});
var cljs$core$async$state_machine__30739__auto____1 = (function (state_32766){
while(true){
var ret_value__30740__auto__ = (function (){try{while(true){
var result__30741__auto__ = switch__30738__auto__(state_32766);
if(cljs.core.keyword_identical_QMARK_(result__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30741__auto__;
}
break;
}
}catch (e32783){var ex__30742__auto__ = e32783;
var statearr_32784_34087 = state_32766;
(statearr_32784_34087[(2)] = ex__30742__auto__);


if(cljs.core.seq((state_32766[(4)]))){
var statearr_32785_34088 = state_32766;
(statearr_32785_34088[(1)] = cljs.core.first((state_32766[(4)])));

} else {
throw ex__30742__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34089 = state_32766;
state_32766 = G__34089;
continue;
} else {
return ret_value__30740__auto__;
}
break;
}
});
cljs$core$async$state_machine__30739__auto__ = function(state_32766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30739__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30739__auto____1.call(this,state_32766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30739__auto____0;
cljs$core$async$state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30739__auto____1;
return cljs$core$async$state_machine__30739__auto__;
})()
})();
var state__30916__auto__ = (function (){var statearr_32786 = f__30915__auto__();
(statearr_32786[(6)] = c__30914__auto___34075);

return statearr_32786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30916__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32788 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32788 = (function (f,ch,meta32789){
this.f = f;
this.ch = ch;
this.meta32789 = meta32789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32790,meta32789__$1){
var self__ = this;
var _32790__$1 = this;
return (new cljs.core.async.t_cljs$core$async32788(self__.f,self__.ch,meta32789__$1));
}));

(cljs.core.async.t_cljs$core$async32788.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32790){
var self__ = this;
var _32790__$1 = this;
return self__.meta32789;
}));

(cljs.core.async.t_cljs$core$async32788.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32788.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32788.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32788.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32788.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32791 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32791 = (function (f,ch,meta32789,_,fn1,meta32792){
this.f = f;
this.ch = ch;
this.meta32789 = meta32789;
this._ = _;
this.fn1 = fn1;
this.meta32792 = meta32792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32793,meta32792__$1){
var self__ = this;
var _32793__$1 = this;
return (new cljs.core.async.t_cljs$core$async32791(self__.f,self__.ch,self__.meta32789,self__._,self__.fn1,meta32792__$1));
}));

(cljs.core.async.t_cljs$core$async32791.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32793){
var self__ = this;
var _32793__$1 = this;
return self__.meta32792;
}));

(cljs.core.async.t_cljs$core$async32791.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32791.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32791.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32791.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32787_SHARP_){
var G__32794 = (((p1__32787_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32787_SHARP_) : self__.f.call(null,p1__32787_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32794) : f1.call(null,G__32794));
});
}));

(cljs.core.async.t_cljs$core$async32791.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32789","meta32789",1580762687,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32788","cljs.core.async/t_cljs$core$async32788",-1933858694,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32792","meta32792",-865681959,null)], null);
}));

(cljs.core.async.t_cljs$core$async32791.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32791.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32791");

(cljs.core.async.t_cljs$core$async32791.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32791");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32791.
 */
cljs.core.async.__GT_t_cljs$core$async32791 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32791(f__$1,ch__$1,meta32789__$1,___$2,fn1__$1,meta32792){
return (new cljs.core.async.t_cljs$core$async32791(f__$1,ch__$1,meta32789__$1,___$2,fn1__$1,meta32792));
});

}

return (new cljs.core.async.t_cljs$core$async32791(self__.f,self__.ch,self__.meta32789,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32795 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32795) : self__.f.call(null,G__32795));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32788.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32788.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32788.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32789","meta32789",1580762687,null)], null);
}));

(cljs.core.async.t_cljs$core$async32788.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32788.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32788");

(cljs.core.async.t_cljs$core$async32788.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32788");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32788.
 */
cljs.core.async.__GT_t_cljs$core$async32788 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32788(f__$1,ch__$1,meta32789){
return (new cljs.core.async.t_cljs$core$async32788(f__$1,ch__$1,meta32789));
});

}

return (new cljs.core.async.t_cljs$core$async32788(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32796 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32796 = (function (f,ch,meta32797){
this.f = f;
this.ch = ch;
this.meta32797 = meta32797;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32798,meta32797__$1){
var self__ = this;
var _32798__$1 = this;
return (new cljs.core.async.t_cljs$core$async32796(self__.f,self__.ch,meta32797__$1));
}));

(cljs.core.async.t_cljs$core$async32796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32798){
var self__ = this;
var _32798__$1 = this;
return self__.meta32797;
}));

(cljs.core.async.t_cljs$core$async32796.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32796.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32796.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32796.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32796.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32796.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32796.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32797","meta32797",588873685,null)], null);
}));

(cljs.core.async.t_cljs$core$async32796.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32796.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32796");

(cljs.core.async.t_cljs$core$async32796.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32796");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32796.
 */
cljs.core.async.__GT_t_cljs$core$async32796 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32796(f__$1,ch__$1,meta32797){
return (new cljs.core.async.t_cljs$core$async32796(f__$1,ch__$1,meta32797));
});

}

return (new cljs.core.async.t_cljs$core$async32796(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32799 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32799 = (function (p,ch,meta32800){
this.p = p;
this.ch = ch;
this.meta32800 = meta32800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32801,meta32800__$1){
var self__ = this;
var _32801__$1 = this;
return (new cljs.core.async.t_cljs$core$async32799(self__.p,self__.ch,meta32800__$1));
}));

(cljs.core.async.t_cljs$core$async32799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32801){
var self__ = this;
var _32801__$1 = this;
return self__.meta32800;
}));

(cljs.core.async.t_cljs$core$async32799.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32799.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32799.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32799.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32799.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32799.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32799.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32799.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32800","meta32800",1261544519,null)], null);
}));

(cljs.core.async.t_cljs$core$async32799.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32799.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32799");

(cljs.core.async.t_cljs$core$async32799.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32799");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32799.
 */
cljs.core.async.__GT_t_cljs$core$async32799 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32799(p__$1,ch__$1,meta32800){
return (new cljs.core.async.t_cljs$core$async32799(p__$1,ch__$1,meta32800));
});

}

return (new cljs.core.async.t_cljs$core$async32799(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32806 = arguments.length;
switch (G__32806) {
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
var c__30914__auto___34115 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30915__auto__ = (function (){var switch__30738__auto__ = (function (state_32828){
var state_val_32829 = (state_32828[(1)]);
if((state_val_32829 === (7))){
var inst_32824 = (state_32828[(2)]);
var state_32828__$1 = state_32828;
var statearr_32830_34116 = state_32828__$1;
(statearr_32830_34116[(2)] = inst_32824);

(statearr_32830_34116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32829 === (1))){
var state_32828__$1 = state_32828;
var statearr_32831_34117 = state_32828__$1;
(statearr_32831_34117[(2)] = null);

(statearr_32831_34117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32829 === (4))){
var inst_32809 = (state_32828[(7)]);
var inst_32809__$1 = (state_32828[(2)]);
var inst_32811 = (inst_32809__$1 == null);
var state_32828__$1 = (function (){var statearr_32832 = state_32828;
(statearr_32832[(7)] = inst_32809__$1);

return statearr_32832;
})();
if(cljs.core.truth_(inst_32811)){
var statearr_32833_34118 = state_32828__$1;
(statearr_32833_34118[(1)] = (5));

} else {
var statearr_32834_34119 = state_32828__$1;
(statearr_32834_34119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32829 === (6))){
var inst_32809 = (state_32828[(7)]);
var inst_32815 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32809) : p.call(null,inst_32809));
var state_32828__$1 = state_32828;
if(cljs.core.truth_(inst_32815)){
var statearr_32835_34120 = state_32828__$1;
(statearr_32835_34120[(1)] = (8));

} else {
var statearr_32836_34121 = state_32828__$1;
(statearr_32836_34121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32829 === (3))){
var inst_32826 = (state_32828[(2)]);
var state_32828__$1 = state_32828;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32828__$1,inst_32826);
} else {
if((state_val_32829 === (2))){
var state_32828__$1 = state_32828;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32828__$1,(4),ch);
} else {
if((state_val_32829 === (11))){
var inst_32818 = (state_32828[(2)]);
var state_32828__$1 = state_32828;
var statearr_32842_34122 = state_32828__$1;
(statearr_32842_34122[(2)] = inst_32818);

(statearr_32842_34122[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32829 === (9))){
var state_32828__$1 = state_32828;
var statearr_32843_34123 = state_32828__$1;
(statearr_32843_34123[(2)] = null);

(statearr_32843_34123[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32829 === (5))){
var inst_32813 = cljs.core.async.close_BANG_(out);
var state_32828__$1 = state_32828;
var statearr_32844_34124 = state_32828__$1;
(statearr_32844_34124[(2)] = inst_32813);

(statearr_32844_34124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32829 === (10))){
var inst_32821 = (state_32828[(2)]);
var state_32828__$1 = (function (){var statearr_32845 = state_32828;
(statearr_32845[(8)] = inst_32821);

return statearr_32845;
})();
var statearr_32846_34125 = state_32828__$1;
(statearr_32846_34125[(2)] = null);

(statearr_32846_34125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32829 === (8))){
var inst_32809 = (state_32828[(7)]);
var state_32828__$1 = state_32828;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32828__$1,(11),out,inst_32809);
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
var cljs$core$async$state_machine__30739__auto__ = null;
var cljs$core$async$state_machine__30739__auto____0 = (function (){
var statearr_32847 = [null,null,null,null,null,null,null,null,null];
(statearr_32847[(0)] = cljs$core$async$state_machine__30739__auto__);

(statearr_32847[(1)] = (1));

return statearr_32847;
});
var cljs$core$async$state_machine__30739__auto____1 = (function (state_32828){
while(true){
var ret_value__30740__auto__ = (function (){try{while(true){
var result__30741__auto__ = switch__30738__auto__(state_32828);
if(cljs.core.keyword_identical_QMARK_(result__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30741__auto__;
}
break;
}
}catch (e32848){var ex__30742__auto__ = e32848;
var statearr_32849_34126 = state_32828;
(statearr_32849_34126[(2)] = ex__30742__auto__);


if(cljs.core.seq((state_32828[(4)]))){
var statearr_32850_34127 = state_32828;
(statearr_32850_34127[(1)] = cljs.core.first((state_32828[(4)])));

} else {
throw ex__30742__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34159 = state_32828;
state_32828 = G__34159;
continue;
} else {
return ret_value__30740__auto__;
}
break;
}
});
cljs$core$async$state_machine__30739__auto__ = function(state_32828){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30739__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30739__auto____1.call(this,state_32828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30739__auto____0;
cljs$core$async$state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30739__auto____1;
return cljs$core$async$state_machine__30739__auto__;
})()
})();
var state__30916__auto__ = (function (){var statearr_32851 = f__30915__auto__();
(statearr_32851[(6)] = c__30914__auto___34115);

return statearr_32851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30916__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32853 = arguments.length;
switch (G__32853) {
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
var c__30914__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30915__auto__ = (function (){var switch__30738__auto__ = (function (state_32916){
var state_val_32917 = (state_32916[(1)]);
if((state_val_32917 === (7))){
var inst_32912 = (state_32916[(2)]);
var state_32916__$1 = state_32916;
var statearr_32919_34161 = state_32916__$1;
(statearr_32919_34161[(2)] = inst_32912);

(statearr_32919_34161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32917 === (20))){
var inst_32881 = (state_32916[(7)]);
var inst_32892 = (state_32916[(2)]);
var inst_32893 = cljs.core.next(inst_32881);
var inst_32867 = inst_32893;
var inst_32868 = null;
var inst_32869 = (0);
var inst_32870 = (0);
var state_32916__$1 = (function (){var statearr_32920 = state_32916;
(statearr_32920[(8)] = inst_32892);

(statearr_32920[(9)] = inst_32868);

(statearr_32920[(10)] = inst_32867);

(statearr_32920[(11)] = inst_32870);

(statearr_32920[(12)] = inst_32869);

return statearr_32920;
})();
var statearr_32921_34162 = state_32916__$1;
(statearr_32921_34162[(2)] = null);

(statearr_32921_34162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32917 === (1))){
var state_32916__$1 = state_32916;
var statearr_32922_34163 = state_32916__$1;
(statearr_32922_34163[(2)] = null);

(statearr_32922_34163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32917 === (4))){
var inst_32856 = (state_32916[(13)]);
var inst_32856__$1 = (state_32916[(2)]);
var inst_32857 = (inst_32856__$1 == null);
var state_32916__$1 = (function (){var statearr_32923 = state_32916;
(statearr_32923[(13)] = inst_32856__$1);

return statearr_32923;
})();
if(cljs.core.truth_(inst_32857)){
var statearr_32924_34164 = state_32916__$1;
(statearr_32924_34164[(1)] = (5));

} else {
var statearr_32925_34165 = state_32916__$1;
(statearr_32925_34165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32917 === (15))){
var state_32916__$1 = state_32916;
var statearr_32929_34166 = state_32916__$1;
(statearr_32929_34166[(2)] = null);

(statearr_32929_34166[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32917 === (21))){
var state_32916__$1 = state_32916;
var statearr_32930_34167 = state_32916__$1;
(statearr_32930_34167[(2)] = null);

(statearr_32930_34167[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32917 === (13))){
var inst_32868 = (state_32916[(9)]);
var inst_32867 = (state_32916[(10)]);
var inst_32870 = (state_32916[(11)]);
var inst_32869 = (state_32916[(12)]);
var inst_32877 = (state_32916[(2)]);
var inst_32878 = (inst_32870 + (1));
var tmp32926 = inst_32868;
var tmp32927 = inst_32867;
var tmp32928 = inst_32869;
var inst_32867__$1 = tmp32927;
var inst_32868__$1 = tmp32926;
var inst_32869__$1 = tmp32928;
var inst_32870__$1 = inst_32878;
var state_32916__$1 = (function (){var statearr_32936 = state_32916;
(statearr_32936[(14)] = inst_32877);

(statearr_32936[(9)] = inst_32868__$1);

(statearr_32936[(10)] = inst_32867__$1);

(statearr_32936[(11)] = inst_32870__$1);

(statearr_32936[(12)] = inst_32869__$1);

return statearr_32936;
})();
var statearr_32937_34168 = state_32916__$1;
(statearr_32937_34168[(2)] = null);

(statearr_32937_34168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32917 === (22))){
var state_32916__$1 = state_32916;
var statearr_32938_34169 = state_32916__$1;
(statearr_32938_34169[(2)] = null);

(statearr_32938_34169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32917 === (6))){
var inst_32856 = (state_32916[(13)]);
var inst_32865 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32856) : f.call(null,inst_32856));
var inst_32866 = cljs.core.seq(inst_32865);
var inst_32867 = inst_32866;
var inst_32868 = null;
var inst_32869 = (0);
var inst_32870 = (0);
var state_32916__$1 = (function (){var statearr_32939 = state_32916;
(statearr_32939[(9)] = inst_32868);

(statearr_32939[(10)] = inst_32867);

(statearr_32939[(11)] = inst_32870);

(statearr_32939[(12)] = inst_32869);

return statearr_32939;
})();
var statearr_32940_34207 = state_32916__$1;
(statearr_32940_34207[(2)] = null);

(statearr_32940_34207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32917 === (17))){
var inst_32881 = (state_32916[(7)]);
var inst_32885 = cljs.core.chunk_first(inst_32881);
var inst_32886 = cljs.core.chunk_rest(inst_32881);
var inst_32887 = cljs.core.count(inst_32885);
var inst_32867 = inst_32886;
var inst_32868 = inst_32885;
var inst_32869 = inst_32887;
var inst_32870 = (0);
var state_32916__$1 = (function (){var statearr_32941 = state_32916;
(statearr_32941[(9)] = inst_32868);

(statearr_32941[(10)] = inst_32867);

(statearr_32941[(11)] = inst_32870);

(statearr_32941[(12)] = inst_32869);

return statearr_32941;
})();
var statearr_32942_34208 = state_32916__$1;
(statearr_32942_34208[(2)] = null);

(statearr_32942_34208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32917 === (3))){
var inst_32914 = (state_32916[(2)]);
var state_32916__$1 = state_32916;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32916__$1,inst_32914);
} else {
if((state_val_32917 === (12))){
var inst_32901 = (state_32916[(2)]);
var state_32916__$1 = state_32916;
var statearr_32947_34209 = state_32916__$1;
(statearr_32947_34209[(2)] = inst_32901);

(statearr_32947_34209[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32917 === (2))){
var state_32916__$1 = state_32916;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32916__$1,(4),in$);
} else {
if((state_val_32917 === (23))){
var inst_32910 = (state_32916[(2)]);
var state_32916__$1 = state_32916;
var statearr_32949_34256 = state_32916__$1;
(statearr_32949_34256[(2)] = inst_32910);

(statearr_32949_34256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32917 === (19))){
var inst_32896 = (state_32916[(2)]);
var state_32916__$1 = state_32916;
var statearr_32957_34257 = state_32916__$1;
(statearr_32957_34257[(2)] = inst_32896);

(statearr_32957_34257[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32917 === (11))){
var inst_32881 = (state_32916[(7)]);
var inst_32867 = (state_32916[(10)]);
var inst_32881__$1 = cljs.core.seq(inst_32867);
var state_32916__$1 = (function (){var statearr_32962 = state_32916;
(statearr_32962[(7)] = inst_32881__$1);

return statearr_32962;
})();
if(inst_32881__$1){
var statearr_32963_34258 = state_32916__$1;
(statearr_32963_34258[(1)] = (14));

} else {
var statearr_32964_34259 = state_32916__$1;
(statearr_32964_34259[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32917 === (9))){
var inst_32903 = (state_32916[(2)]);
var inst_32905 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32916__$1 = (function (){var statearr_32966 = state_32916;
(statearr_32966[(15)] = inst_32903);

return statearr_32966;
})();
if(cljs.core.truth_(inst_32905)){
var statearr_32968_34264 = state_32916__$1;
(statearr_32968_34264[(1)] = (21));

} else {
var statearr_32969_34265 = state_32916__$1;
(statearr_32969_34265[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32917 === (5))){
var inst_32859 = cljs.core.async.close_BANG_(out);
var state_32916__$1 = state_32916;
var statearr_32970_34274 = state_32916__$1;
(statearr_32970_34274[(2)] = inst_32859);

(statearr_32970_34274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32917 === (14))){
var inst_32881 = (state_32916[(7)]);
var inst_32883 = cljs.core.chunked_seq_QMARK_(inst_32881);
var state_32916__$1 = state_32916;
if(inst_32883){
var statearr_32971_34276 = state_32916__$1;
(statearr_32971_34276[(1)] = (17));

} else {
var statearr_32972_34277 = state_32916__$1;
(statearr_32972_34277[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32917 === (16))){
var inst_32899 = (state_32916[(2)]);
var state_32916__$1 = state_32916;
var statearr_33004_34278 = state_32916__$1;
(statearr_33004_34278[(2)] = inst_32899);

(statearr_33004_34278[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32917 === (10))){
var inst_32868 = (state_32916[(9)]);
var inst_32870 = (state_32916[(11)]);
var inst_32875 = cljs.core._nth(inst_32868,inst_32870);
var state_32916__$1 = state_32916;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32916__$1,(13),out,inst_32875);
} else {
if((state_val_32917 === (18))){
var inst_32881 = (state_32916[(7)]);
var inst_32890 = cljs.core.first(inst_32881);
var state_32916__$1 = state_32916;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32916__$1,(20),out,inst_32890);
} else {
if((state_val_32917 === (8))){
var inst_32870 = (state_32916[(11)]);
var inst_32869 = (state_32916[(12)]);
var inst_32872 = (inst_32870 < inst_32869);
var inst_32873 = inst_32872;
var state_32916__$1 = state_32916;
if(cljs.core.truth_(inst_32873)){
var statearr_33007_34279 = state_32916__$1;
(statearr_33007_34279[(1)] = (10));

} else {
var statearr_33008_34280 = state_32916__$1;
(statearr_33008_34280[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__30739__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30739__auto____0 = (function (){
var statearr_33009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33009[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30739__auto__);

(statearr_33009[(1)] = (1));

return statearr_33009;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30739__auto____1 = (function (state_32916){
while(true){
var ret_value__30740__auto__ = (function (){try{while(true){
var result__30741__auto__ = switch__30738__auto__(state_32916);
if(cljs.core.keyword_identical_QMARK_(result__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30741__auto__;
}
break;
}
}catch (e33010){var ex__30742__auto__ = e33010;
var statearr_33011_34281 = state_32916;
(statearr_33011_34281[(2)] = ex__30742__auto__);


if(cljs.core.seq((state_32916[(4)]))){
var statearr_33012_34282 = state_32916;
(statearr_33012_34282[(1)] = cljs.core.first((state_32916[(4)])));

} else {
throw ex__30742__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34283 = state_32916;
state_32916 = G__34283;
continue;
} else {
return ret_value__30740__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30739__auto__ = function(state_32916){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30739__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30739__auto____1.call(this,state_32916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30739__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30739__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30739__auto__;
})()
})();
var state__30916__auto__ = (function (){var statearr_33013 = f__30915__auto__();
(statearr_33013[(6)] = c__30914__auto__);

return statearr_33013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30916__auto__);
}));

return c__30914__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33015 = arguments.length;
switch (G__33015) {
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
var G__33017 = arguments.length;
switch (G__33017) {
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
var G__33019 = arguments.length;
switch (G__33019) {
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
var c__30914__auto___34287 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30915__auto__ = (function (){var switch__30738__auto__ = (function (state_33044){
var state_val_33045 = (state_33044[(1)]);
if((state_val_33045 === (7))){
var inst_33039 = (state_33044[(2)]);
var state_33044__$1 = state_33044;
var statearr_33050_34288 = state_33044__$1;
(statearr_33050_34288[(2)] = inst_33039);

(statearr_33050_34288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33045 === (1))){
var inst_33021 = null;
var state_33044__$1 = (function (){var statearr_33051 = state_33044;
(statearr_33051[(7)] = inst_33021);

return statearr_33051;
})();
var statearr_33052_34289 = state_33044__$1;
(statearr_33052_34289[(2)] = null);

(statearr_33052_34289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33045 === (4))){
var inst_33024 = (state_33044[(8)]);
var inst_33024__$1 = (state_33044[(2)]);
var inst_33025 = (inst_33024__$1 == null);
var inst_33026 = cljs.core.not(inst_33025);
var state_33044__$1 = (function (){var statearr_33053 = state_33044;
(statearr_33053[(8)] = inst_33024__$1);

return statearr_33053;
})();
if(inst_33026){
var statearr_33054_34290 = state_33044__$1;
(statearr_33054_34290[(1)] = (5));

} else {
var statearr_33055_34291 = state_33044__$1;
(statearr_33055_34291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33045 === (6))){
var state_33044__$1 = state_33044;
var statearr_33056_34329 = state_33044__$1;
(statearr_33056_34329[(2)] = null);

(statearr_33056_34329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33045 === (3))){
var inst_33041 = (state_33044[(2)]);
var inst_33042 = cljs.core.async.close_BANG_(out);
var state_33044__$1 = (function (){var statearr_33066 = state_33044;
(statearr_33066[(9)] = inst_33041);

return statearr_33066;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33044__$1,inst_33042);
} else {
if((state_val_33045 === (2))){
var state_33044__$1 = state_33044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33044__$1,(4),ch);
} else {
if((state_val_33045 === (11))){
var inst_33024 = (state_33044[(8)]);
var inst_33033 = (state_33044[(2)]);
var inst_33021 = inst_33024;
var state_33044__$1 = (function (){var statearr_33067 = state_33044;
(statearr_33067[(10)] = inst_33033);

(statearr_33067[(7)] = inst_33021);

return statearr_33067;
})();
var statearr_33068_34335 = state_33044__$1;
(statearr_33068_34335[(2)] = null);

(statearr_33068_34335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33045 === (9))){
var inst_33024 = (state_33044[(8)]);
var state_33044__$1 = state_33044;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33044__$1,(11),out,inst_33024);
} else {
if((state_val_33045 === (5))){
var inst_33024 = (state_33044[(8)]);
var inst_33021 = (state_33044[(7)]);
var inst_33028 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33024,inst_33021);
var state_33044__$1 = state_33044;
if(inst_33028){
var statearr_33070_34337 = state_33044__$1;
(statearr_33070_34337[(1)] = (8));

} else {
var statearr_33071_34338 = state_33044__$1;
(statearr_33071_34338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33045 === (10))){
var inst_33036 = (state_33044[(2)]);
var state_33044__$1 = state_33044;
var statearr_33072_34339 = state_33044__$1;
(statearr_33072_34339[(2)] = inst_33036);

(statearr_33072_34339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33045 === (8))){
var inst_33021 = (state_33044[(7)]);
var tmp33069 = inst_33021;
var inst_33021__$1 = tmp33069;
var state_33044__$1 = (function (){var statearr_33073 = state_33044;
(statearr_33073[(7)] = inst_33021__$1);

return statearr_33073;
})();
var statearr_33074_34340 = state_33044__$1;
(statearr_33074_34340[(2)] = null);

(statearr_33074_34340[(1)] = (2));


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
var cljs$core$async$state_machine__30739__auto__ = null;
var cljs$core$async$state_machine__30739__auto____0 = (function (){
var statearr_33075 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33075[(0)] = cljs$core$async$state_machine__30739__auto__);

(statearr_33075[(1)] = (1));

return statearr_33075;
});
var cljs$core$async$state_machine__30739__auto____1 = (function (state_33044){
while(true){
var ret_value__30740__auto__ = (function (){try{while(true){
var result__30741__auto__ = switch__30738__auto__(state_33044);
if(cljs.core.keyword_identical_QMARK_(result__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30741__auto__;
}
break;
}
}catch (e33086){var ex__30742__auto__ = e33086;
var statearr_33087_34341 = state_33044;
(statearr_33087_34341[(2)] = ex__30742__auto__);


if(cljs.core.seq((state_33044[(4)]))){
var statearr_33088_34342 = state_33044;
(statearr_33088_34342[(1)] = cljs.core.first((state_33044[(4)])));

} else {
throw ex__30742__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34343 = state_33044;
state_33044 = G__34343;
continue;
} else {
return ret_value__30740__auto__;
}
break;
}
});
cljs$core$async$state_machine__30739__auto__ = function(state_33044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30739__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30739__auto____1.call(this,state_33044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30739__auto____0;
cljs$core$async$state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30739__auto____1;
return cljs$core$async$state_machine__30739__auto__;
})()
})();
var state__30916__auto__ = (function (){var statearr_33089 = f__30915__auto__();
(statearr_33089[(6)] = c__30914__auto___34287);

return statearr_33089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30916__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33091 = arguments.length;
switch (G__33091) {
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
var c__30914__auto___34345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30915__auto__ = (function (){var switch__30738__auto__ = (function (state_33129){
var state_val_33130 = (state_33129[(1)]);
if((state_val_33130 === (7))){
var inst_33125 = (state_33129[(2)]);
var state_33129__$1 = state_33129;
var statearr_33131_34374 = state_33129__$1;
(statearr_33131_34374[(2)] = inst_33125);

(statearr_33131_34374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (1))){
var inst_33092 = (new Array(n));
var inst_33093 = inst_33092;
var inst_33094 = (0);
var state_33129__$1 = (function (){var statearr_33132 = state_33129;
(statearr_33132[(7)] = inst_33093);

(statearr_33132[(8)] = inst_33094);

return statearr_33132;
})();
var statearr_33133_34379 = state_33129__$1;
(statearr_33133_34379[(2)] = null);

(statearr_33133_34379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (4))){
var inst_33097 = (state_33129[(9)]);
var inst_33097__$1 = (state_33129[(2)]);
var inst_33098 = (inst_33097__$1 == null);
var inst_33099 = cljs.core.not(inst_33098);
var state_33129__$1 = (function (){var statearr_33135 = state_33129;
(statearr_33135[(9)] = inst_33097__$1);

return statearr_33135;
})();
if(inst_33099){
var statearr_33136_34384 = state_33129__$1;
(statearr_33136_34384[(1)] = (5));

} else {
var statearr_33137_34389 = state_33129__$1;
(statearr_33137_34389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (15))){
var inst_33119 = (state_33129[(2)]);
var state_33129__$1 = state_33129;
var statearr_33138_34390 = state_33129__$1;
(statearr_33138_34390[(2)] = inst_33119);

(statearr_33138_34390[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (13))){
var state_33129__$1 = state_33129;
var statearr_33139_34391 = state_33129__$1;
(statearr_33139_34391[(2)] = null);

(statearr_33139_34391[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (6))){
var inst_33094 = (state_33129[(8)]);
var inst_33115 = (inst_33094 > (0));
var state_33129__$1 = state_33129;
if(cljs.core.truth_(inst_33115)){
var statearr_33140_34393 = state_33129__$1;
(statearr_33140_34393[(1)] = (12));

} else {
var statearr_33142_34396 = state_33129__$1;
(statearr_33142_34396[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (3))){
var inst_33127 = (state_33129[(2)]);
var state_33129__$1 = state_33129;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33129__$1,inst_33127);
} else {
if((state_val_33130 === (12))){
var inst_33093 = (state_33129[(7)]);
var inst_33117 = cljs.core.vec(inst_33093);
var state_33129__$1 = state_33129;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33129__$1,(15),out,inst_33117);
} else {
if((state_val_33130 === (2))){
var state_33129__$1 = state_33129;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33129__$1,(4),ch);
} else {
if((state_val_33130 === (11))){
var inst_33109 = (state_33129[(2)]);
var inst_33110 = (new Array(n));
var inst_33093 = inst_33110;
var inst_33094 = (0);
var state_33129__$1 = (function (){var statearr_33144 = state_33129;
(statearr_33144[(10)] = inst_33109);

(statearr_33144[(7)] = inst_33093);

(statearr_33144[(8)] = inst_33094);

return statearr_33144;
})();
var statearr_33145_34423 = state_33129__$1;
(statearr_33145_34423[(2)] = null);

(statearr_33145_34423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (9))){
var inst_33093 = (state_33129[(7)]);
var inst_33107 = cljs.core.vec(inst_33093);
var state_33129__$1 = state_33129;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33129__$1,(11),out,inst_33107);
} else {
if((state_val_33130 === (5))){
var inst_33093 = (state_33129[(7)]);
var inst_33094 = (state_33129[(8)]);
var inst_33102 = (state_33129[(11)]);
var inst_33097 = (state_33129[(9)]);
var inst_33101 = (inst_33093[inst_33094] = inst_33097);
var inst_33102__$1 = (inst_33094 + (1));
var inst_33103 = (inst_33102__$1 < n);
var state_33129__$1 = (function (){var statearr_33146 = state_33129;
(statearr_33146[(12)] = inst_33101);

(statearr_33146[(11)] = inst_33102__$1);

return statearr_33146;
})();
if(cljs.core.truth_(inst_33103)){
var statearr_33147_34424 = state_33129__$1;
(statearr_33147_34424[(1)] = (8));

} else {
var statearr_33148_34425 = state_33129__$1;
(statearr_33148_34425[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (14))){
var inst_33122 = (state_33129[(2)]);
var inst_33123 = cljs.core.async.close_BANG_(out);
var state_33129__$1 = (function (){var statearr_33150 = state_33129;
(statearr_33150[(13)] = inst_33122);

return statearr_33150;
})();
var statearr_33151_34426 = state_33129__$1;
(statearr_33151_34426[(2)] = inst_33123);

(statearr_33151_34426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (10))){
var inst_33113 = (state_33129[(2)]);
var state_33129__$1 = state_33129;
var statearr_33152_34427 = state_33129__$1;
(statearr_33152_34427[(2)] = inst_33113);

(statearr_33152_34427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (8))){
var inst_33093 = (state_33129[(7)]);
var inst_33102 = (state_33129[(11)]);
var tmp33149 = inst_33093;
var inst_33093__$1 = tmp33149;
var inst_33094 = inst_33102;
var state_33129__$1 = (function (){var statearr_33153 = state_33129;
(statearr_33153[(7)] = inst_33093__$1);

(statearr_33153[(8)] = inst_33094);

return statearr_33153;
})();
var statearr_33154_34428 = state_33129__$1;
(statearr_33154_34428[(2)] = null);

(statearr_33154_34428[(1)] = (2));


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
var cljs$core$async$state_machine__30739__auto__ = null;
var cljs$core$async$state_machine__30739__auto____0 = (function (){
var statearr_33155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33155[(0)] = cljs$core$async$state_machine__30739__auto__);

(statearr_33155[(1)] = (1));

return statearr_33155;
});
var cljs$core$async$state_machine__30739__auto____1 = (function (state_33129){
while(true){
var ret_value__30740__auto__ = (function (){try{while(true){
var result__30741__auto__ = switch__30738__auto__(state_33129);
if(cljs.core.keyword_identical_QMARK_(result__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30741__auto__;
}
break;
}
}catch (e33156){var ex__30742__auto__ = e33156;
var statearr_33157_34430 = state_33129;
(statearr_33157_34430[(2)] = ex__30742__auto__);


if(cljs.core.seq((state_33129[(4)]))){
var statearr_33158_34431 = state_33129;
(statearr_33158_34431[(1)] = cljs.core.first((state_33129[(4)])));

} else {
throw ex__30742__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34432 = state_33129;
state_33129 = G__34432;
continue;
} else {
return ret_value__30740__auto__;
}
break;
}
});
cljs$core$async$state_machine__30739__auto__ = function(state_33129){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30739__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30739__auto____1.call(this,state_33129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30739__auto____0;
cljs$core$async$state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30739__auto____1;
return cljs$core$async$state_machine__30739__auto__;
})()
})();
var state__30916__auto__ = (function (){var statearr_33159 = f__30915__auto__();
(statearr_33159[(6)] = c__30914__auto___34345);

return statearr_33159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30916__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33161 = arguments.length;
switch (G__33161) {
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
var c__30914__auto___34434 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30915__auto__ = (function (){var switch__30738__auto__ = (function (state_33208){
var state_val_33209 = (state_33208[(1)]);
if((state_val_33209 === (7))){
var inst_33204 = (state_33208[(2)]);
var state_33208__$1 = state_33208;
var statearr_33210_34435 = state_33208__$1;
(statearr_33210_34435[(2)] = inst_33204);

(statearr_33210_34435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33209 === (1))){
var inst_33162 = [];
var inst_33163 = inst_33162;
var inst_33164 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33208__$1 = (function (){var statearr_33211 = state_33208;
(statearr_33211[(7)] = inst_33164);

(statearr_33211[(8)] = inst_33163);

return statearr_33211;
})();
var statearr_33212_34445 = state_33208__$1;
(statearr_33212_34445[(2)] = null);

(statearr_33212_34445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33209 === (4))){
var inst_33167 = (state_33208[(9)]);
var inst_33167__$1 = (state_33208[(2)]);
var inst_33168 = (inst_33167__$1 == null);
var inst_33169 = cljs.core.not(inst_33168);
var state_33208__$1 = (function (){var statearr_33213 = state_33208;
(statearr_33213[(9)] = inst_33167__$1);

return statearr_33213;
})();
if(inst_33169){
var statearr_33214_34446 = state_33208__$1;
(statearr_33214_34446[(1)] = (5));

} else {
var statearr_33215_34447 = state_33208__$1;
(statearr_33215_34447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33209 === (15))){
var inst_33198 = (state_33208[(2)]);
var state_33208__$1 = state_33208;
var statearr_33216_34448 = state_33208__$1;
(statearr_33216_34448[(2)] = inst_33198);

(statearr_33216_34448[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33209 === (13))){
var state_33208__$1 = state_33208;
var statearr_33218_34449 = state_33208__$1;
(statearr_33218_34449[(2)] = null);

(statearr_33218_34449[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33209 === (6))){
var inst_33163 = (state_33208[(8)]);
var inst_33193 = inst_33163.length;
var inst_33194 = (inst_33193 > (0));
var state_33208__$1 = state_33208;
if(cljs.core.truth_(inst_33194)){
var statearr_33219_34450 = state_33208__$1;
(statearr_33219_34450[(1)] = (12));

} else {
var statearr_33220_34451 = state_33208__$1;
(statearr_33220_34451[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33209 === (3))){
var inst_33206 = (state_33208[(2)]);
var state_33208__$1 = state_33208;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33208__$1,inst_33206);
} else {
if((state_val_33209 === (12))){
var inst_33163 = (state_33208[(8)]);
var inst_33196 = cljs.core.vec(inst_33163);
var state_33208__$1 = state_33208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33208__$1,(15),out,inst_33196);
} else {
if((state_val_33209 === (2))){
var state_33208__$1 = state_33208;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33208__$1,(4),ch);
} else {
if((state_val_33209 === (11))){
var inst_33167 = (state_33208[(9)]);
var inst_33171 = (state_33208[(10)]);
var inst_33181 = (state_33208[(2)]);
var inst_33182 = [];
var inst_33183 = inst_33182.push(inst_33167);
var inst_33163 = inst_33182;
var inst_33164 = inst_33171;
var state_33208__$1 = (function (){var statearr_33221 = state_33208;
(statearr_33221[(11)] = inst_33183);

(statearr_33221[(7)] = inst_33164);

(statearr_33221[(12)] = inst_33181);

(statearr_33221[(8)] = inst_33163);

return statearr_33221;
})();
var statearr_33223_34457 = state_33208__$1;
(statearr_33223_34457[(2)] = null);

(statearr_33223_34457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33209 === (9))){
var inst_33163 = (state_33208[(8)]);
var inst_33179 = cljs.core.vec(inst_33163);
var state_33208__$1 = state_33208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33208__$1,(11),out,inst_33179);
} else {
if((state_val_33209 === (5))){
var inst_33164 = (state_33208[(7)]);
var inst_33167 = (state_33208[(9)]);
var inst_33171 = (state_33208[(10)]);
var inst_33171__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33167) : f.call(null,inst_33167));
var inst_33172 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33171__$1,inst_33164);
var inst_33173 = cljs.core.keyword_identical_QMARK_(inst_33164,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33174 = ((inst_33172) || (inst_33173));
var state_33208__$1 = (function (){var statearr_33226 = state_33208;
(statearr_33226[(10)] = inst_33171__$1);

return statearr_33226;
})();
if(cljs.core.truth_(inst_33174)){
var statearr_33227_34458 = state_33208__$1;
(statearr_33227_34458[(1)] = (8));

} else {
var statearr_33228_34459 = state_33208__$1;
(statearr_33228_34459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33209 === (14))){
var inst_33201 = (state_33208[(2)]);
var inst_33202 = cljs.core.async.close_BANG_(out);
var state_33208__$1 = (function (){var statearr_33231 = state_33208;
(statearr_33231[(13)] = inst_33201);

return statearr_33231;
})();
var statearr_33232_34460 = state_33208__$1;
(statearr_33232_34460[(2)] = inst_33202);

(statearr_33232_34460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33209 === (10))){
var inst_33186 = (state_33208[(2)]);
var state_33208__$1 = state_33208;
var statearr_33233_34461 = state_33208__$1;
(statearr_33233_34461[(2)] = inst_33186);

(statearr_33233_34461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33209 === (8))){
var inst_33167 = (state_33208[(9)]);
var inst_33171 = (state_33208[(10)]);
var inst_33163 = (state_33208[(8)]);
var inst_33176 = inst_33163.push(inst_33167);
var tmp33230 = inst_33163;
var inst_33163__$1 = tmp33230;
var inst_33164 = inst_33171;
var state_33208__$1 = (function (){var statearr_33234 = state_33208;
(statearr_33234[(7)] = inst_33164);

(statearr_33234[(14)] = inst_33176);

(statearr_33234[(8)] = inst_33163__$1);

return statearr_33234;
})();
var statearr_33235_34462 = state_33208__$1;
(statearr_33235_34462[(2)] = null);

(statearr_33235_34462[(1)] = (2));


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
var cljs$core$async$state_machine__30739__auto__ = null;
var cljs$core$async$state_machine__30739__auto____0 = (function (){
var statearr_33236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33236[(0)] = cljs$core$async$state_machine__30739__auto__);

(statearr_33236[(1)] = (1));

return statearr_33236;
});
var cljs$core$async$state_machine__30739__auto____1 = (function (state_33208){
while(true){
var ret_value__30740__auto__ = (function (){try{while(true){
var result__30741__auto__ = switch__30738__auto__(state_33208);
if(cljs.core.keyword_identical_QMARK_(result__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30741__auto__;
}
break;
}
}catch (e33237){var ex__30742__auto__ = e33237;
var statearr_33238_34463 = state_33208;
(statearr_33238_34463[(2)] = ex__30742__auto__);


if(cljs.core.seq((state_33208[(4)]))){
var statearr_33239_34464 = state_33208;
(statearr_33239_34464[(1)] = cljs.core.first((state_33208[(4)])));

} else {
throw ex__30742__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30740__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34465 = state_33208;
state_33208 = G__34465;
continue;
} else {
return ret_value__30740__auto__;
}
break;
}
});
cljs$core$async$state_machine__30739__auto__ = function(state_33208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30739__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30739__auto____1.call(this,state_33208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30739__auto____0;
cljs$core$async$state_machine__30739__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30739__auto____1;
return cljs$core$async$state_machine__30739__auto__;
})()
})();
var state__30916__auto__ = (function (){var statearr_33240 = f__30915__auto__();
(statearr_33240[(6)] = c__30914__auto___34434);

return statearr_33240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30916__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
