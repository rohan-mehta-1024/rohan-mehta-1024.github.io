goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31034 = arguments.length;
switch (G__31034) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31035 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31035 = (function (f,blockable,meta31036){
this.f = f;
this.blockable = blockable;
this.meta31036 = meta31036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31037,meta31036__$1){
var self__ = this;
var _31037__$1 = this;
return (new cljs.core.async.t_cljs$core$async31035(self__.f,self__.blockable,meta31036__$1));
}));

(cljs.core.async.t_cljs$core$async31035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31037){
var self__ = this;
var _31037__$1 = this;
return self__.meta31036;
}));

(cljs.core.async.t_cljs$core$async31035.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31035.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31035.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31035.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31035.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31036","meta31036",-348943894,null)], null);
}));

(cljs.core.async.t_cljs$core$async31035.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31035.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31035");

(cljs.core.async.t_cljs$core$async31035.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31035");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31035.
 */
cljs.core.async.__GT_t_cljs$core$async31035 = (function cljs$core$async$__GT_t_cljs$core$async31035(f__$1,blockable__$1,meta31036){
return (new cljs.core.async.t_cljs$core$async31035(f__$1,blockable__$1,meta31036));
});

}

return (new cljs.core.async.t_cljs$core$async31035(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31056 = arguments.length;
switch (G__31056) {
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
var G__31070 = arguments.length;
switch (G__31070) {
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
var G__31072 = arguments.length;
switch (G__31072) {
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
var val_33266 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33266) : fn1.call(null,val_33266));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33266) : fn1.call(null,val_33266));
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
var G__31090 = arguments.length;
switch (G__31090) {
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
var n__4613__auto___33276 = n;
var x_33277 = (0);
while(true){
if((x_33277 < n__4613__auto___33276)){
(a[x_33277] = x_33277);

var G__33278 = (x_33277 + (1));
x_33277 = G__33278;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31096 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31096 = (function (flag,meta31097){
this.flag = flag;
this.meta31097 = meta31097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31098,meta31097__$1){
var self__ = this;
var _31098__$1 = this;
return (new cljs.core.async.t_cljs$core$async31096(self__.flag,meta31097__$1));
}));

(cljs.core.async.t_cljs$core$async31096.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31098){
var self__ = this;
var _31098__$1 = this;
return self__.meta31097;
}));

(cljs.core.async.t_cljs$core$async31096.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31096.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31096.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31096.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31096.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31097","meta31097",1697226956,null)], null);
}));

(cljs.core.async.t_cljs$core$async31096.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31096.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31096");

(cljs.core.async.t_cljs$core$async31096.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31096");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31096.
 */
cljs.core.async.__GT_t_cljs$core$async31096 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31096(flag__$1,meta31097){
return (new cljs.core.async.t_cljs$core$async31096(flag__$1,meta31097));
});

}

return (new cljs.core.async.t_cljs$core$async31096(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31100 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31100 = (function (flag,cb,meta31101){
this.flag = flag;
this.cb = cb;
this.meta31101 = meta31101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31102,meta31101__$1){
var self__ = this;
var _31102__$1 = this;
return (new cljs.core.async.t_cljs$core$async31100(self__.flag,self__.cb,meta31101__$1));
}));

(cljs.core.async.t_cljs$core$async31100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31102){
var self__ = this;
var _31102__$1 = this;
return self__.meta31101;
}));

(cljs.core.async.t_cljs$core$async31100.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31100.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31100.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31100.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31100.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31101","meta31101",-1972840469,null)], null);
}));

(cljs.core.async.t_cljs$core$async31100.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31100.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31100");

(cljs.core.async.t_cljs$core$async31100.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31100");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31100.
 */
cljs.core.async.__GT_t_cljs$core$async31100 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31100(flag__$1,cb__$1,meta31101){
return (new cljs.core.async.t_cljs$core$async31100(flag__$1,cb__$1,meta31101));
});

}

return (new cljs.core.async.t_cljs$core$async31100(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31108_SHARP_){
var G__31110 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31108_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31110) : fret.call(null,G__31110));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31109_SHARP_){
var G__31111 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31109_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31111) : fret.call(null,G__31111));
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
var G__33294 = (i + (1));
i = G__33294;
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
var len__4736__auto___33299 = arguments.length;
var i__4737__auto___33300 = (0);
while(true){
if((i__4737__auto___33300 < len__4736__auto___33299)){
args__4742__auto__.push((arguments[i__4737__auto___33300]));

var G__33301 = (i__4737__auto___33300 + (1));
i__4737__auto___33300 = G__33301;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31143){
var map__31144 = p__31143;
var map__31144__$1 = (((((!((map__31144 == null))))?(((((map__31144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31144):map__31144);
var opts = map__31144__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31141){
var G__31142 = cljs.core.first(seq31141);
var seq31141__$1 = cljs.core.next(seq31141);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31142,seq31141__$1);
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
var G__31155 = arguments.length;
switch (G__31155) {
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
var c__30960__auto___33337 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30961__auto__ = (function (){var switch__30767__auto__ = (function (state_31183){
var state_val_31185 = (state_31183[(1)]);
if((state_val_31185 === (7))){
var inst_31179 = (state_31183[(2)]);
var state_31183__$1 = state_31183;
var statearr_31194_33338 = state_31183__$1;
(statearr_31194_33338[(2)] = inst_31179);

(statearr_31194_33338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (1))){
var state_31183__$1 = state_31183;
var statearr_31195_33340 = state_31183__$1;
(statearr_31195_33340[(2)] = null);

(statearr_31195_33340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (4))){
var inst_31162 = (state_31183[(7)]);
var inst_31162__$1 = (state_31183[(2)]);
var inst_31163 = (inst_31162__$1 == null);
var state_31183__$1 = (function (){var statearr_31196 = state_31183;
(statearr_31196[(7)] = inst_31162__$1);

return statearr_31196;
})();
if(cljs.core.truth_(inst_31163)){
var statearr_31197_33341 = state_31183__$1;
(statearr_31197_33341[(1)] = (5));

} else {
var statearr_31198_33342 = state_31183__$1;
(statearr_31198_33342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (13))){
var state_31183__$1 = state_31183;
var statearr_31199_33343 = state_31183__$1;
(statearr_31199_33343[(2)] = null);

(statearr_31199_33343[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (6))){
var inst_31162 = (state_31183[(7)]);
var state_31183__$1 = state_31183;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31183__$1,(11),to,inst_31162);
} else {
if((state_val_31185 === (3))){
var inst_31181 = (state_31183[(2)]);
var state_31183__$1 = state_31183;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31183__$1,inst_31181);
} else {
if((state_val_31185 === (12))){
var state_31183__$1 = state_31183;
var statearr_31200_33344 = state_31183__$1;
(statearr_31200_33344[(2)] = null);

(statearr_31200_33344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (2))){
var state_31183__$1 = state_31183;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31183__$1,(4),from);
} else {
if((state_val_31185 === (11))){
var inst_31172 = (state_31183[(2)]);
var state_31183__$1 = state_31183;
if(cljs.core.truth_(inst_31172)){
var statearr_31201_33368 = state_31183__$1;
(statearr_31201_33368[(1)] = (12));

} else {
var statearr_31202_33369 = state_31183__$1;
(statearr_31202_33369[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (9))){
var state_31183__$1 = state_31183;
var statearr_31203_33375 = state_31183__$1;
(statearr_31203_33375[(2)] = null);

(statearr_31203_33375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (5))){
var state_31183__$1 = state_31183;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31204_33376 = state_31183__$1;
(statearr_31204_33376[(1)] = (8));

} else {
var statearr_31208_33377 = state_31183__$1;
(statearr_31208_33377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (14))){
var inst_31177 = (state_31183[(2)]);
var state_31183__$1 = state_31183;
var statearr_31209_33378 = state_31183__$1;
(statearr_31209_33378[(2)] = inst_31177);

(statearr_31209_33378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (10))){
var inst_31169 = (state_31183[(2)]);
var state_31183__$1 = state_31183;
var statearr_31210_33379 = state_31183__$1;
(statearr_31210_33379[(2)] = inst_31169);

(statearr_31210_33379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (8))){
var inst_31166 = cljs.core.async.close_BANG_(to);
var state_31183__$1 = state_31183;
var statearr_31211_33380 = state_31183__$1;
(statearr_31211_33380[(2)] = inst_31166);

(statearr_31211_33380[(1)] = (10));


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
var cljs$core$async$state_machine__30768__auto__ = null;
var cljs$core$async$state_machine__30768__auto____0 = (function (){
var statearr_31212 = [null,null,null,null,null,null,null,null];
(statearr_31212[(0)] = cljs$core$async$state_machine__30768__auto__);

(statearr_31212[(1)] = (1));

return statearr_31212;
});
var cljs$core$async$state_machine__30768__auto____1 = (function (state_31183){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_31183);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e31215){var ex__30771__auto__ = e31215;
var statearr_31216_33381 = state_31183;
(statearr_31216_33381[(2)] = ex__30771__auto__);


if(cljs.core.seq((state_31183[(4)]))){
var statearr_31217_33382 = state_31183;
(statearr_31217_33382[(1)] = cljs.core.first((state_31183[(4)])));

} else {
throw ex__30771__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33383 = state_31183;
state_31183 = G__33383;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$state_machine__30768__auto__ = function(state_31183){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30768__auto____1.call(this,state_31183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30768__auto____0;
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30768__auto____1;
return cljs$core$async$state_machine__30768__auto__;
})()
})();
var state__30962__auto__ = (function (){var statearr_31218 = f__30961__auto__();
(statearr_31218[(6)] = c__30960__auto___33337);

return statearr_31218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30962__auto__);
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
var process = (function (p__31227){
var vec__31228 = p__31227;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31228,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31228,(1),null);
var job = vec__31228;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30960__auto___33397 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30961__auto__ = (function (){var switch__30767__auto__ = (function (state_31242){
var state_val_31243 = (state_31242[(1)]);
if((state_val_31243 === (1))){
var state_31242__$1 = state_31242;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31242__$1,(2),res,v);
} else {
if((state_val_31243 === (2))){
var inst_31236 = (state_31242[(2)]);
var inst_31237 = cljs.core.async.close_BANG_(res);
var state_31242__$1 = (function (){var statearr_31244 = state_31242;
(statearr_31244[(7)] = inst_31236);

return statearr_31244;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31242__$1,inst_31237);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____0 = (function (){
var statearr_31245 = [null,null,null,null,null,null,null,null];
(statearr_31245[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__);

(statearr_31245[(1)] = (1));

return statearr_31245;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____1 = (function (state_31242){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_31242);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e31246){var ex__30771__auto__ = e31246;
var statearr_31247_33398 = state_31242;
(statearr_31247_33398[(2)] = ex__30771__auto__);


if(cljs.core.seq((state_31242[(4)]))){
var statearr_31248_33399 = state_31242;
(statearr_31248_33399[(1)] = cljs.core.first((state_31242[(4)])));

} else {
throw ex__30771__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33400 = state_31242;
state_31242 = G__33400;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__ = function(state_31242){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____1.call(this,state_31242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__;
})()
})();
var state__30962__auto__ = (function (){var statearr_31249 = f__30961__auto__();
(statearr_31249[(6)] = c__30960__auto___33397);

return statearr_31249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30962__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31250){
var vec__31262 = p__31250;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31262,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31262,(1),null);
var job = vec__31262;
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
var n__4613__auto___33410 = n;
var __33411 = (0);
while(true){
if((__33411 < n__4613__auto___33410)){
var G__31265_33412 = type;
var G__31265_33413__$1 = (((G__31265_33412 instanceof cljs.core.Keyword))?G__31265_33412.fqn:null);
switch (G__31265_33413__$1) {
case "compute":
var c__30960__auto___33415 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33411,c__30960__auto___33415,G__31265_33412,G__31265_33413__$1,n__4613__auto___33410,jobs,results,process,async){
return (function (){
var f__30961__auto__ = (function (){var switch__30767__auto__ = ((function (__33411,c__30960__auto___33415,G__31265_33412,G__31265_33413__$1,n__4613__auto___33410,jobs,results,process,async){
return (function (state_31278){
var state_val_31279 = (state_31278[(1)]);
if((state_val_31279 === (1))){
var state_31278__$1 = state_31278;
var statearr_31280_33416 = state_31278__$1;
(statearr_31280_33416[(2)] = null);

(statearr_31280_33416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (2))){
var state_31278__$1 = state_31278;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31278__$1,(4),jobs);
} else {
if((state_val_31279 === (3))){
var inst_31276 = (state_31278[(2)]);
var state_31278__$1 = state_31278;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31278__$1,inst_31276);
} else {
if((state_val_31279 === (4))){
var inst_31268 = (state_31278[(2)]);
var inst_31269 = process(inst_31268);
var state_31278__$1 = state_31278;
if(cljs.core.truth_(inst_31269)){
var statearr_31286_33417 = state_31278__$1;
(statearr_31286_33417[(1)] = (5));

} else {
var statearr_31287_33418 = state_31278__$1;
(statearr_31287_33418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (5))){
var state_31278__$1 = state_31278;
var statearr_31288_33420 = state_31278__$1;
(statearr_31288_33420[(2)] = null);

(statearr_31288_33420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (6))){
var state_31278__$1 = state_31278;
var statearr_31289_33421 = state_31278__$1;
(statearr_31289_33421[(2)] = null);

(statearr_31289_33421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (7))){
var inst_31274 = (state_31278[(2)]);
var state_31278__$1 = state_31278;
var statearr_31290_33423 = state_31278__$1;
(statearr_31290_33423[(2)] = inst_31274);

(statearr_31290_33423[(1)] = (3));


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
});})(__33411,c__30960__auto___33415,G__31265_33412,G__31265_33413__$1,n__4613__auto___33410,jobs,results,process,async))
;
return ((function (__33411,switch__30767__auto__,c__30960__auto___33415,G__31265_33412,G__31265_33413__$1,n__4613__auto___33410,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____0 = (function (){
var statearr_31291 = [null,null,null,null,null,null,null];
(statearr_31291[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__);

(statearr_31291[(1)] = (1));

return statearr_31291;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____1 = (function (state_31278){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_31278);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e31292){var ex__30771__auto__ = e31292;
var statearr_31293_33432 = state_31278;
(statearr_31293_33432[(2)] = ex__30771__auto__);


if(cljs.core.seq((state_31278[(4)]))){
var statearr_31294_33433 = state_31278;
(statearr_31294_33433[(1)] = cljs.core.first((state_31278[(4)])));

} else {
throw ex__30771__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33434 = state_31278;
state_31278 = G__33434;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__ = function(state_31278){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____1.call(this,state_31278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__;
})()
;})(__33411,switch__30767__auto__,c__30960__auto___33415,G__31265_33412,G__31265_33413__$1,n__4613__auto___33410,jobs,results,process,async))
})();
var state__30962__auto__ = (function (){var statearr_31295 = f__30961__auto__();
(statearr_31295[(6)] = c__30960__auto___33415);

return statearr_31295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30962__auto__);
});})(__33411,c__30960__auto___33415,G__31265_33412,G__31265_33413__$1,n__4613__auto___33410,jobs,results,process,async))
);


break;
case "async":
var c__30960__auto___33435 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33411,c__30960__auto___33435,G__31265_33412,G__31265_33413__$1,n__4613__auto___33410,jobs,results,process,async){
return (function (){
var f__30961__auto__ = (function (){var switch__30767__auto__ = ((function (__33411,c__30960__auto___33435,G__31265_33412,G__31265_33413__$1,n__4613__auto___33410,jobs,results,process,async){
return (function (state_31309){
var state_val_31310 = (state_31309[(1)]);
if((state_val_31310 === (1))){
var state_31309__$1 = state_31309;
var statearr_31311_33436 = state_31309__$1;
(statearr_31311_33436[(2)] = null);

(statearr_31311_33436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (2))){
var state_31309__$1 = state_31309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31309__$1,(4),jobs);
} else {
if((state_val_31310 === (3))){
var inst_31307 = (state_31309[(2)]);
var state_31309__$1 = state_31309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31309__$1,inst_31307);
} else {
if((state_val_31310 === (4))){
var inst_31299 = (state_31309[(2)]);
var inst_31300 = async(inst_31299);
var state_31309__$1 = state_31309;
if(cljs.core.truth_(inst_31300)){
var statearr_31314_33437 = state_31309__$1;
(statearr_31314_33437[(1)] = (5));

} else {
var statearr_31315_33438 = state_31309__$1;
(statearr_31315_33438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (5))){
var state_31309__$1 = state_31309;
var statearr_31316_33439 = state_31309__$1;
(statearr_31316_33439[(2)] = null);

(statearr_31316_33439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (6))){
var state_31309__$1 = state_31309;
var statearr_31317_33440 = state_31309__$1;
(statearr_31317_33440[(2)] = null);

(statearr_31317_33440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31310 === (7))){
var inst_31305 = (state_31309[(2)]);
var state_31309__$1 = state_31309;
var statearr_31318_33441 = state_31309__$1;
(statearr_31318_33441[(2)] = inst_31305);

(statearr_31318_33441[(1)] = (3));


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
});})(__33411,c__30960__auto___33435,G__31265_33412,G__31265_33413__$1,n__4613__auto___33410,jobs,results,process,async))
;
return ((function (__33411,switch__30767__auto__,c__30960__auto___33435,G__31265_33412,G__31265_33413__$1,n__4613__auto___33410,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____0 = (function (){
var statearr_31319 = [null,null,null,null,null,null,null];
(statearr_31319[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__);

(statearr_31319[(1)] = (1));

return statearr_31319;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____1 = (function (state_31309){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_31309);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e31320){var ex__30771__auto__ = e31320;
var statearr_31321_33448 = state_31309;
(statearr_31321_33448[(2)] = ex__30771__auto__);


if(cljs.core.seq((state_31309[(4)]))){
var statearr_31322_33449 = state_31309;
(statearr_31322_33449[(1)] = cljs.core.first((state_31309[(4)])));

} else {
throw ex__30771__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33450 = state_31309;
state_31309 = G__33450;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__ = function(state_31309){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____1.call(this,state_31309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__;
})()
;})(__33411,switch__30767__auto__,c__30960__auto___33435,G__31265_33412,G__31265_33413__$1,n__4613__auto___33410,jobs,results,process,async))
})();
var state__30962__auto__ = (function (){var statearr_31323 = f__30961__auto__();
(statearr_31323[(6)] = c__30960__auto___33435);

return statearr_31323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30962__auto__);
});})(__33411,c__30960__auto___33435,G__31265_33412,G__31265_33413__$1,n__4613__auto___33410,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31265_33413__$1)].join('')));

}

var G__33451 = (__33411 + (1));
__33411 = G__33451;
continue;
} else {
}
break;
}

var c__30960__auto___33452 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30961__auto__ = (function (){var switch__30767__auto__ = (function (state_31345){
var state_val_31346 = (state_31345[(1)]);
if((state_val_31346 === (7))){
var inst_31341 = (state_31345[(2)]);
var state_31345__$1 = state_31345;
var statearr_31348_33453 = state_31345__$1;
(statearr_31348_33453[(2)] = inst_31341);

(statearr_31348_33453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (1))){
var state_31345__$1 = state_31345;
var statearr_31349_33454 = state_31345__$1;
(statearr_31349_33454[(2)] = null);

(statearr_31349_33454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (4))){
var inst_31326 = (state_31345[(7)]);
var inst_31326__$1 = (state_31345[(2)]);
var inst_31327 = (inst_31326__$1 == null);
var state_31345__$1 = (function (){var statearr_31350 = state_31345;
(statearr_31350[(7)] = inst_31326__$1);

return statearr_31350;
})();
if(cljs.core.truth_(inst_31327)){
var statearr_31351_33455 = state_31345__$1;
(statearr_31351_33455[(1)] = (5));

} else {
var statearr_31352_33456 = state_31345__$1;
(statearr_31352_33456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (6))){
var inst_31326 = (state_31345[(7)]);
var inst_31331 = (state_31345[(8)]);
var inst_31331__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31332 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31333 = [inst_31326,inst_31331__$1];
var inst_31334 = (new cljs.core.PersistentVector(null,2,(5),inst_31332,inst_31333,null));
var state_31345__$1 = (function (){var statearr_31353 = state_31345;
(statearr_31353[(8)] = inst_31331__$1);

return statearr_31353;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31345__$1,(8),jobs,inst_31334);
} else {
if((state_val_31346 === (3))){
var inst_31343 = (state_31345[(2)]);
var state_31345__$1 = state_31345;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31345__$1,inst_31343);
} else {
if((state_val_31346 === (2))){
var state_31345__$1 = state_31345;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31345__$1,(4),from);
} else {
if((state_val_31346 === (9))){
var inst_31338 = (state_31345[(2)]);
var state_31345__$1 = (function (){var statearr_31371 = state_31345;
(statearr_31371[(9)] = inst_31338);

return statearr_31371;
})();
var statearr_31372_33465 = state_31345__$1;
(statearr_31372_33465[(2)] = null);

(statearr_31372_33465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (5))){
var inst_31329 = cljs.core.async.close_BANG_(jobs);
var state_31345__$1 = state_31345;
var statearr_31373_33466 = state_31345__$1;
(statearr_31373_33466[(2)] = inst_31329);

(statearr_31373_33466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (8))){
var inst_31331 = (state_31345[(8)]);
var inst_31336 = (state_31345[(2)]);
var state_31345__$1 = (function (){var statearr_31374 = state_31345;
(statearr_31374[(10)] = inst_31336);

return statearr_31374;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31345__$1,(9),results,inst_31331);
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
var cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____0 = (function (){
var statearr_31375 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31375[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__);

(statearr_31375[(1)] = (1));

return statearr_31375;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____1 = (function (state_31345){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_31345);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e31376){var ex__30771__auto__ = e31376;
var statearr_31377_33467 = state_31345;
(statearr_31377_33467[(2)] = ex__30771__auto__);


if(cljs.core.seq((state_31345[(4)]))){
var statearr_31378_33468 = state_31345;
(statearr_31378_33468[(1)] = cljs.core.first((state_31345[(4)])));

} else {
throw ex__30771__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33469 = state_31345;
state_31345 = G__33469;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__ = function(state_31345){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____1.call(this,state_31345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__;
})()
})();
var state__30962__auto__ = (function (){var statearr_31379 = f__30961__auto__();
(statearr_31379[(6)] = c__30960__auto___33452);

return statearr_31379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30962__auto__);
}));


var c__30960__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30961__auto__ = (function (){var switch__30767__auto__ = (function (state_31417){
var state_val_31418 = (state_31417[(1)]);
if((state_val_31418 === (7))){
var inst_31413 = (state_31417[(2)]);
var state_31417__$1 = state_31417;
var statearr_31419_33470 = state_31417__$1;
(statearr_31419_33470[(2)] = inst_31413);

(statearr_31419_33470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (20))){
var state_31417__$1 = state_31417;
var statearr_31420_33476 = state_31417__$1;
(statearr_31420_33476[(2)] = null);

(statearr_31420_33476[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (1))){
var state_31417__$1 = state_31417;
var statearr_31421_33477 = state_31417__$1;
(statearr_31421_33477[(2)] = null);

(statearr_31421_33477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (4))){
var inst_31382 = (state_31417[(7)]);
var inst_31382__$1 = (state_31417[(2)]);
var inst_31383 = (inst_31382__$1 == null);
var state_31417__$1 = (function (){var statearr_31422 = state_31417;
(statearr_31422[(7)] = inst_31382__$1);

return statearr_31422;
})();
if(cljs.core.truth_(inst_31383)){
var statearr_31423_33480 = state_31417__$1;
(statearr_31423_33480[(1)] = (5));

} else {
var statearr_31424_33481 = state_31417__$1;
(statearr_31424_33481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (15))){
var inst_31395 = (state_31417[(8)]);
var state_31417__$1 = state_31417;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31417__$1,(18),to,inst_31395);
} else {
if((state_val_31418 === (21))){
var inst_31408 = (state_31417[(2)]);
var state_31417__$1 = state_31417;
var statearr_31425_33482 = state_31417__$1;
(statearr_31425_33482[(2)] = inst_31408);

(statearr_31425_33482[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (13))){
var inst_31410 = (state_31417[(2)]);
var state_31417__$1 = (function (){var statearr_31426 = state_31417;
(statearr_31426[(9)] = inst_31410);

return statearr_31426;
})();
var statearr_31427_33483 = state_31417__$1;
(statearr_31427_33483[(2)] = null);

(statearr_31427_33483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (6))){
var inst_31382 = (state_31417[(7)]);
var state_31417__$1 = state_31417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31417__$1,(11),inst_31382);
} else {
if((state_val_31418 === (17))){
var inst_31403 = (state_31417[(2)]);
var state_31417__$1 = state_31417;
if(cljs.core.truth_(inst_31403)){
var statearr_31428_33484 = state_31417__$1;
(statearr_31428_33484[(1)] = (19));

} else {
var statearr_31429_33485 = state_31417__$1;
(statearr_31429_33485[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (3))){
var inst_31415 = (state_31417[(2)]);
var state_31417__$1 = state_31417;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31417__$1,inst_31415);
} else {
if((state_val_31418 === (12))){
var inst_31392 = (state_31417[(10)]);
var state_31417__$1 = state_31417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31417__$1,(14),inst_31392);
} else {
if((state_val_31418 === (2))){
var state_31417__$1 = state_31417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31417__$1,(4),results);
} else {
if((state_val_31418 === (19))){
var state_31417__$1 = state_31417;
var statearr_31430_33486 = state_31417__$1;
(statearr_31430_33486[(2)] = null);

(statearr_31430_33486[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (11))){
var inst_31392 = (state_31417[(2)]);
var state_31417__$1 = (function (){var statearr_31431 = state_31417;
(statearr_31431[(10)] = inst_31392);

return statearr_31431;
})();
var statearr_31432_33487 = state_31417__$1;
(statearr_31432_33487[(2)] = null);

(statearr_31432_33487[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (9))){
var state_31417__$1 = state_31417;
var statearr_31435_33488 = state_31417__$1;
(statearr_31435_33488[(2)] = null);

(statearr_31435_33488[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (5))){
var state_31417__$1 = state_31417;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31436_33490 = state_31417__$1;
(statearr_31436_33490[(1)] = (8));

} else {
var statearr_31437_33492 = state_31417__$1;
(statearr_31437_33492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (14))){
var inst_31395 = (state_31417[(8)]);
var inst_31395__$1 = (state_31417[(2)]);
var inst_31396 = (inst_31395__$1 == null);
var inst_31397 = cljs.core.not(inst_31396);
var state_31417__$1 = (function (){var statearr_31438 = state_31417;
(statearr_31438[(8)] = inst_31395__$1);

return statearr_31438;
})();
if(inst_31397){
var statearr_31439_33493 = state_31417__$1;
(statearr_31439_33493[(1)] = (15));

} else {
var statearr_31440_33494 = state_31417__$1;
(statearr_31440_33494[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (16))){
var state_31417__$1 = state_31417;
var statearr_31441_33495 = state_31417__$1;
(statearr_31441_33495[(2)] = false);

(statearr_31441_33495[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (10))){
var inst_31389 = (state_31417[(2)]);
var state_31417__$1 = state_31417;
var statearr_31442_33496 = state_31417__$1;
(statearr_31442_33496[(2)] = inst_31389);

(statearr_31442_33496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (18))){
var inst_31400 = (state_31417[(2)]);
var state_31417__$1 = state_31417;
var statearr_31444_33497 = state_31417__$1;
(statearr_31444_33497[(2)] = inst_31400);

(statearr_31444_33497[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (8))){
var inst_31386 = cljs.core.async.close_BANG_(to);
var state_31417__$1 = state_31417;
var statearr_31445_33500 = state_31417__$1;
(statearr_31445_33500[(2)] = inst_31386);

(statearr_31445_33500[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____0 = (function (){
var statearr_31446 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31446[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__);

(statearr_31446[(1)] = (1));

return statearr_31446;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____1 = (function (state_31417){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_31417);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e31447){var ex__30771__auto__ = e31447;
var statearr_31450_33501 = state_31417;
(statearr_31450_33501[(2)] = ex__30771__auto__);


if(cljs.core.seq((state_31417[(4)]))){
var statearr_31451_33504 = state_31417;
(statearr_31451_33504[(1)] = cljs.core.first((state_31417[(4)])));

} else {
throw ex__30771__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33505 = state_31417;
state_31417 = G__33505;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__ = function(state_31417){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____1.call(this,state_31417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__;
})()
})();
var state__30962__auto__ = (function (){var statearr_31453 = f__30961__auto__();
(statearr_31453[(6)] = c__30960__auto__);

return statearr_31453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30962__auto__);
}));

return c__30960__auto__;
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
var G__31459 = arguments.length;
switch (G__31459) {
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
var G__31464 = arguments.length;
switch (G__31464) {
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
var G__31466 = arguments.length;
switch (G__31466) {
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
var c__30960__auto___33519 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30961__auto__ = (function (){var switch__30767__auto__ = (function (state_31496){
var state_val_31497 = (state_31496[(1)]);
if((state_val_31497 === (7))){
var inst_31492 = (state_31496[(2)]);
var state_31496__$1 = state_31496;
var statearr_31498_33520 = state_31496__$1;
(statearr_31498_33520[(2)] = inst_31492);

(statearr_31498_33520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31497 === (1))){
var state_31496__$1 = state_31496;
var statearr_31499_33521 = state_31496__$1;
(statearr_31499_33521[(2)] = null);

(statearr_31499_33521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31497 === (4))){
var inst_31472 = (state_31496[(7)]);
var inst_31472__$1 = (state_31496[(2)]);
var inst_31473 = (inst_31472__$1 == null);
var state_31496__$1 = (function (){var statearr_31500 = state_31496;
(statearr_31500[(7)] = inst_31472__$1);

return statearr_31500;
})();
if(cljs.core.truth_(inst_31473)){
var statearr_31501_33522 = state_31496__$1;
(statearr_31501_33522[(1)] = (5));

} else {
var statearr_31502_33523 = state_31496__$1;
(statearr_31502_33523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31497 === (13))){
var state_31496__$1 = state_31496;
var statearr_31503_33524 = state_31496__$1;
(statearr_31503_33524[(2)] = null);

(statearr_31503_33524[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31497 === (6))){
var inst_31472 = (state_31496[(7)]);
var inst_31478 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31472) : p.call(null,inst_31472));
var state_31496__$1 = state_31496;
if(cljs.core.truth_(inst_31478)){
var statearr_31504_33525 = state_31496__$1;
(statearr_31504_33525[(1)] = (9));

} else {
var statearr_31505_33526 = state_31496__$1;
(statearr_31505_33526[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31497 === (3))){
var inst_31494 = (state_31496[(2)]);
var state_31496__$1 = state_31496;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31496__$1,inst_31494);
} else {
if((state_val_31497 === (12))){
var state_31496__$1 = state_31496;
var statearr_31506_33527 = state_31496__$1;
(statearr_31506_33527[(2)] = null);

(statearr_31506_33527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31497 === (2))){
var state_31496__$1 = state_31496;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31496__$1,(4),ch);
} else {
if((state_val_31497 === (11))){
var inst_31472 = (state_31496[(7)]);
var inst_31482 = (state_31496[(2)]);
var state_31496__$1 = state_31496;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31496__$1,(8),inst_31482,inst_31472);
} else {
if((state_val_31497 === (9))){
var state_31496__$1 = state_31496;
var statearr_31507_33553 = state_31496__$1;
(statearr_31507_33553[(2)] = tc);

(statearr_31507_33553[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31497 === (5))){
var inst_31475 = cljs.core.async.close_BANG_(tc);
var inst_31476 = cljs.core.async.close_BANG_(fc);
var state_31496__$1 = (function (){var statearr_31508 = state_31496;
(statearr_31508[(8)] = inst_31475);

return statearr_31508;
})();
var statearr_31509_33556 = state_31496__$1;
(statearr_31509_33556[(2)] = inst_31476);

(statearr_31509_33556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31497 === (14))){
var inst_31490 = (state_31496[(2)]);
var state_31496__$1 = state_31496;
var statearr_31510_33557 = state_31496__$1;
(statearr_31510_33557[(2)] = inst_31490);

(statearr_31510_33557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31497 === (10))){
var state_31496__$1 = state_31496;
var statearr_31511_33561 = state_31496__$1;
(statearr_31511_33561[(2)] = fc);

(statearr_31511_33561[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31497 === (8))){
var inst_31484 = (state_31496[(2)]);
var state_31496__$1 = state_31496;
if(cljs.core.truth_(inst_31484)){
var statearr_31512_33562 = state_31496__$1;
(statearr_31512_33562[(1)] = (12));

} else {
var statearr_31513_33563 = state_31496__$1;
(statearr_31513_33563[(1)] = (13));

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
var cljs$core$async$state_machine__30768__auto__ = null;
var cljs$core$async$state_machine__30768__auto____0 = (function (){
var statearr_31515 = [null,null,null,null,null,null,null,null,null];
(statearr_31515[(0)] = cljs$core$async$state_machine__30768__auto__);

(statearr_31515[(1)] = (1));

return statearr_31515;
});
var cljs$core$async$state_machine__30768__auto____1 = (function (state_31496){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_31496);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e31516){var ex__30771__auto__ = e31516;
var statearr_31517_33567 = state_31496;
(statearr_31517_33567[(2)] = ex__30771__auto__);


if(cljs.core.seq((state_31496[(4)]))){
var statearr_31518_33568 = state_31496;
(statearr_31518_33568[(1)] = cljs.core.first((state_31496[(4)])));

} else {
throw ex__30771__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33573 = state_31496;
state_31496 = G__33573;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$state_machine__30768__auto__ = function(state_31496){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30768__auto____1.call(this,state_31496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30768__auto____0;
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30768__auto____1;
return cljs$core$async$state_machine__30768__auto__;
})()
})();
var state__30962__auto__ = (function (){var statearr_31519 = f__30961__auto__();
(statearr_31519[(6)] = c__30960__auto___33519);

return statearr_31519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30962__auto__);
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
var c__30960__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30961__auto__ = (function (){var switch__30767__auto__ = (function (state_31541){
var state_val_31542 = (state_31541[(1)]);
if((state_val_31542 === (7))){
var inst_31537 = (state_31541[(2)]);
var state_31541__$1 = state_31541;
var statearr_31543_33574 = state_31541__$1;
(statearr_31543_33574[(2)] = inst_31537);

(statearr_31543_33574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (1))){
var inst_31520 = init;
var inst_31521 = inst_31520;
var state_31541__$1 = (function (){var statearr_31544 = state_31541;
(statearr_31544[(7)] = inst_31521);

return statearr_31544;
})();
var statearr_31545_33575 = state_31541__$1;
(statearr_31545_33575[(2)] = null);

(statearr_31545_33575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (4))){
var inst_31524 = (state_31541[(8)]);
var inst_31524__$1 = (state_31541[(2)]);
var inst_31525 = (inst_31524__$1 == null);
var state_31541__$1 = (function (){var statearr_31546 = state_31541;
(statearr_31546[(8)] = inst_31524__$1);

return statearr_31546;
})();
if(cljs.core.truth_(inst_31525)){
var statearr_31547_33576 = state_31541__$1;
(statearr_31547_33576[(1)] = (5));

} else {
var statearr_31548_33577 = state_31541__$1;
(statearr_31548_33577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (6))){
var inst_31528 = (state_31541[(9)]);
var inst_31524 = (state_31541[(8)]);
var inst_31521 = (state_31541[(7)]);
var inst_31528__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31521,inst_31524) : f.call(null,inst_31521,inst_31524));
var inst_31529 = cljs.core.reduced_QMARK_(inst_31528__$1);
var state_31541__$1 = (function (){var statearr_31549 = state_31541;
(statearr_31549[(9)] = inst_31528__$1);

return statearr_31549;
})();
if(inst_31529){
var statearr_31550_33584 = state_31541__$1;
(statearr_31550_33584[(1)] = (8));

} else {
var statearr_31551_33589 = state_31541__$1;
(statearr_31551_33589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (3))){
var inst_31539 = (state_31541[(2)]);
var state_31541__$1 = state_31541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31541__$1,inst_31539);
} else {
if((state_val_31542 === (2))){
var state_31541__$1 = state_31541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31541__$1,(4),ch);
} else {
if((state_val_31542 === (9))){
var inst_31528 = (state_31541[(9)]);
var inst_31521 = inst_31528;
var state_31541__$1 = (function (){var statearr_31552 = state_31541;
(statearr_31552[(7)] = inst_31521);

return statearr_31552;
})();
var statearr_31553_33596 = state_31541__$1;
(statearr_31553_33596[(2)] = null);

(statearr_31553_33596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (5))){
var inst_31521 = (state_31541[(7)]);
var state_31541__$1 = state_31541;
var statearr_31554_33597 = state_31541__$1;
(statearr_31554_33597[(2)] = inst_31521);

(statearr_31554_33597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (10))){
var inst_31535 = (state_31541[(2)]);
var state_31541__$1 = state_31541;
var statearr_31555_33598 = state_31541__$1;
(statearr_31555_33598[(2)] = inst_31535);

(statearr_31555_33598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (8))){
var inst_31528 = (state_31541[(9)]);
var inst_31531 = cljs.core.deref(inst_31528);
var state_31541__$1 = state_31541;
var statearr_31556_33601 = state_31541__$1;
(statearr_31556_33601[(2)] = inst_31531);

(statearr_31556_33601[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__30768__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30768__auto____0 = (function (){
var statearr_31557 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31557[(0)] = cljs$core$async$reduce_$_state_machine__30768__auto__);

(statearr_31557[(1)] = (1));

return statearr_31557;
});
var cljs$core$async$reduce_$_state_machine__30768__auto____1 = (function (state_31541){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_31541);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e31558){var ex__30771__auto__ = e31558;
var statearr_31559_33605 = state_31541;
(statearr_31559_33605[(2)] = ex__30771__auto__);


if(cljs.core.seq((state_31541[(4)]))){
var statearr_31560_33606 = state_31541;
(statearr_31560_33606[(1)] = cljs.core.first((state_31541[(4)])));

} else {
throw ex__30771__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33607 = state_31541;
state_31541 = G__33607;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30768__auto__ = function(state_31541){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30768__auto____1.call(this,state_31541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30768__auto____0;
cljs$core$async$reduce_$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30768__auto____1;
return cljs$core$async$reduce_$_state_machine__30768__auto__;
})()
})();
var state__30962__auto__ = (function (){var statearr_31561 = f__30961__auto__();
(statearr_31561[(6)] = c__30960__auto__);

return statearr_31561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30962__auto__);
}));

return c__30960__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30960__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30961__auto__ = (function (){var switch__30767__auto__ = (function (state_31567){
var state_val_31568 = (state_31567[(1)]);
if((state_val_31568 === (1))){
var inst_31562 = cljs.core.async.reduce(f__$1,init,ch);
var state_31567__$1 = state_31567;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31567__$1,(2),inst_31562);
} else {
if((state_val_31568 === (2))){
var inst_31564 = (state_31567[(2)]);
var inst_31565 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31564) : f__$1.call(null,inst_31564));
var state_31567__$1 = state_31567;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31567__$1,inst_31565);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30768__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30768__auto____0 = (function (){
var statearr_31569 = [null,null,null,null,null,null,null];
(statearr_31569[(0)] = cljs$core$async$transduce_$_state_machine__30768__auto__);

(statearr_31569[(1)] = (1));

return statearr_31569;
});
var cljs$core$async$transduce_$_state_machine__30768__auto____1 = (function (state_31567){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_31567);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e31570){var ex__30771__auto__ = e31570;
var statearr_31571_33620 = state_31567;
(statearr_31571_33620[(2)] = ex__30771__auto__);


if(cljs.core.seq((state_31567[(4)]))){
var statearr_31572_33621 = state_31567;
(statearr_31572_33621[(1)] = cljs.core.first((state_31567[(4)])));

} else {
throw ex__30771__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33623 = state_31567;
state_31567 = G__33623;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30768__auto__ = function(state_31567){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30768__auto____1.call(this,state_31567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30768__auto____0;
cljs$core$async$transduce_$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30768__auto____1;
return cljs$core$async$transduce_$_state_machine__30768__auto__;
})()
})();
var state__30962__auto__ = (function (){var statearr_31573 = f__30961__auto__();
(statearr_31573[(6)] = c__30960__auto__);

return statearr_31573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30962__auto__);
}));

return c__30960__auto__;
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
var G__31575 = arguments.length;
switch (G__31575) {
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
var c__30960__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30961__auto__ = (function (){var switch__30767__auto__ = (function (state_31613){
var state_val_31614 = (state_31613[(1)]);
if((state_val_31614 === (7))){
var inst_31595 = (state_31613[(2)]);
var state_31613__$1 = state_31613;
var statearr_31615_33625 = state_31613__$1;
(statearr_31615_33625[(2)] = inst_31595);

(statearr_31615_33625[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (1))){
var inst_31588 = cljs.core.seq(coll);
var inst_31589 = inst_31588;
var state_31613__$1 = (function (){var statearr_31616 = state_31613;
(statearr_31616[(7)] = inst_31589);

return statearr_31616;
})();
var statearr_31617_33630 = state_31613__$1;
(statearr_31617_33630[(2)] = null);

(statearr_31617_33630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (4))){
var inst_31589 = (state_31613[(7)]);
var inst_31593 = cljs.core.first(inst_31589);
var state_31613__$1 = state_31613;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31613__$1,(7),ch,inst_31593);
} else {
if((state_val_31614 === (13))){
var inst_31607 = (state_31613[(2)]);
var state_31613__$1 = state_31613;
var statearr_31618_33632 = state_31613__$1;
(statearr_31618_33632[(2)] = inst_31607);

(statearr_31618_33632[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (6))){
var inst_31598 = (state_31613[(2)]);
var state_31613__$1 = state_31613;
if(cljs.core.truth_(inst_31598)){
var statearr_31619_33633 = state_31613__$1;
(statearr_31619_33633[(1)] = (8));

} else {
var statearr_31622_33635 = state_31613__$1;
(statearr_31622_33635[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (3))){
var inst_31611 = (state_31613[(2)]);
var state_31613__$1 = state_31613;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31613__$1,inst_31611);
} else {
if((state_val_31614 === (12))){
var state_31613__$1 = state_31613;
var statearr_31623_33636 = state_31613__$1;
(statearr_31623_33636[(2)] = null);

(statearr_31623_33636[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (2))){
var inst_31589 = (state_31613[(7)]);
var state_31613__$1 = state_31613;
if(cljs.core.truth_(inst_31589)){
var statearr_31624_33637 = state_31613__$1;
(statearr_31624_33637[(1)] = (4));

} else {
var statearr_31625_33638 = state_31613__$1;
(statearr_31625_33638[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (11))){
var inst_31604 = cljs.core.async.close_BANG_(ch);
var state_31613__$1 = state_31613;
var statearr_31626_33639 = state_31613__$1;
(statearr_31626_33639[(2)] = inst_31604);

(statearr_31626_33639[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (9))){
var state_31613__$1 = state_31613;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31627_33640 = state_31613__$1;
(statearr_31627_33640[(1)] = (11));

} else {
var statearr_31628_33641 = state_31613__$1;
(statearr_31628_33641[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (5))){
var inst_31589 = (state_31613[(7)]);
var state_31613__$1 = state_31613;
var statearr_31629_33642 = state_31613__$1;
(statearr_31629_33642[(2)] = inst_31589);

(statearr_31629_33642[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (10))){
var inst_31609 = (state_31613[(2)]);
var state_31613__$1 = state_31613;
var statearr_31630_33643 = state_31613__$1;
(statearr_31630_33643[(2)] = inst_31609);

(statearr_31630_33643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31614 === (8))){
var inst_31589 = (state_31613[(7)]);
var inst_31600 = cljs.core.next(inst_31589);
var inst_31589__$1 = inst_31600;
var state_31613__$1 = (function (){var statearr_31631 = state_31613;
(statearr_31631[(7)] = inst_31589__$1);

return statearr_31631;
})();
var statearr_31632_33648 = state_31613__$1;
(statearr_31632_33648[(2)] = null);

(statearr_31632_33648[(1)] = (2));


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
var cljs$core$async$state_machine__30768__auto__ = null;
var cljs$core$async$state_machine__30768__auto____0 = (function (){
var statearr_31633 = [null,null,null,null,null,null,null,null];
(statearr_31633[(0)] = cljs$core$async$state_machine__30768__auto__);

(statearr_31633[(1)] = (1));

return statearr_31633;
});
var cljs$core$async$state_machine__30768__auto____1 = (function (state_31613){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_31613);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e31634){var ex__30771__auto__ = e31634;
var statearr_31635_33649 = state_31613;
(statearr_31635_33649[(2)] = ex__30771__auto__);


if(cljs.core.seq((state_31613[(4)]))){
var statearr_31636_33650 = state_31613;
(statearr_31636_33650[(1)] = cljs.core.first((state_31613[(4)])));

} else {
throw ex__30771__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33651 = state_31613;
state_31613 = G__33651;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$state_machine__30768__auto__ = function(state_31613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30768__auto____1.call(this,state_31613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30768__auto____0;
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30768__auto____1;
return cljs$core$async$state_machine__30768__auto__;
})()
})();
var state__30962__auto__ = (function (){var statearr_31640 = f__30961__auto__();
(statearr_31640[(6)] = c__30960__auto__);

return statearr_31640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30962__auto__);
}));

return c__30960__auto__;
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
var G__31642 = arguments.length;
switch (G__31642) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_33653 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_33653(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33655 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_33655(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33661 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_33661(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33662 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_33662(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31689 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31689 = (function (ch,cs,meta31690){
this.ch = ch;
this.cs = cs;
this.meta31690 = meta31690;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31691,meta31690__$1){
var self__ = this;
var _31691__$1 = this;
return (new cljs.core.async.t_cljs$core$async31689(self__.ch,self__.cs,meta31690__$1));
}));

(cljs.core.async.t_cljs$core$async31689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31691){
var self__ = this;
var _31691__$1 = this;
return self__.meta31690;
}));

(cljs.core.async.t_cljs$core$async31689.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31689.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31689.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31689.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31689.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31689.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31689.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31690","meta31690",-336314633,null)], null);
}));

(cljs.core.async.t_cljs$core$async31689.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31689.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31689");

(cljs.core.async.t_cljs$core$async31689.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31689");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31689.
 */
cljs.core.async.__GT_t_cljs$core$async31689 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31689(ch__$1,cs__$1,meta31690){
return (new cljs.core.async.t_cljs$core$async31689(ch__$1,cs__$1,meta31690));
});

}

return (new cljs.core.async.t_cljs$core$async31689(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30960__auto___33665 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30961__auto__ = (function (){var switch__30767__auto__ = (function (state_31855){
var state_val_31856 = (state_31855[(1)]);
if((state_val_31856 === (7))){
var inst_31851 = (state_31855[(2)]);
var state_31855__$1 = state_31855;
var statearr_31857_33666 = state_31855__$1;
(statearr_31857_33666[(2)] = inst_31851);

(statearr_31857_33666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (20))){
var inst_31744 = (state_31855[(7)]);
var inst_31763 = cljs.core.first(inst_31744);
var inst_31764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31763,(0),null);
var inst_31765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31763,(1),null);
var state_31855__$1 = (function (){var statearr_31858 = state_31855;
(statearr_31858[(8)] = inst_31764);

return statearr_31858;
})();
if(cljs.core.truth_(inst_31765)){
var statearr_31859_33671 = state_31855__$1;
(statearr_31859_33671[(1)] = (22));

} else {
var statearr_31860_33672 = state_31855__$1;
(statearr_31860_33672[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (27))){
var inst_31802 = (state_31855[(9)]);
var inst_31797 = (state_31855[(10)]);
var inst_31703 = (state_31855[(11)]);
var inst_31795 = (state_31855[(12)]);
var inst_31802__$1 = cljs.core._nth(inst_31795,inst_31797);
var inst_31803 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31802__$1,inst_31703,done);
var state_31855__$1 = (function (){var statearr_31861 = state_31855;
(statearr_31861[(9)] = inst_31802__$1);

return statearr_31861;
})();
if(cljs.core.truth_(inst_31803)){
var statearr_31862_33674 = state_31855__$1;
(statearr_31862_33674[(1)] = (30));

} else {
var statearr_31863_33676 = state_31855__$1;
(statearr_31863_33676[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (1))){
var state_31855__$1 = state_31855;
var statearr_31864_33677 = state_31855__$1;
(statearr_31864_33677[(2)] = null);

(statearr_31864_33677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (24))){
var inst_31744 = (state_31855[(7)]);
var inst_31770 = (state_31855[(2)]);
var inst_31771 = cljs.core.next(inst_31744);
var inst_31714 = inst_31771;
var inst_31715 = null;
var inst_31716 = (0);
var inst_31717 = (0);
var state_31855__$1 = (function (){var statearr_31868 = state_31855;
(statearr_31868[(13)] = inst_31714);

(statearr_31868[(14)] = inst_31770);

(statearr_31868[(15)] = inst_31716);

(statearr_31868[(16)] = inst_31717);

(statearr_31868[(17)] = inst_31715);

return statearr_31868;
})();
var statearr_31869_33682 = state_31855__$1;
(statearr_31869_33682[(2)] = null);

(statearr_31869_33682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (39))){
var state_31855__$1 = state_31855;
var statearr_31873_33683 = state_31855__$1;
(statearr_31873_33683[(2)] = null);

(statearr_31873_33683[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (4))){
var inst_31703 = (state_31855[(11)]);
var inst_31703__$1 = (state_31855[(2)]);
var inst_31704 = (inst_31703__$1 == null);
var state_31855__$1 = (function (){var statearr_31874 = state_31855;
(statearr_31874[(11)] = inst_31703__$1);

return statearr_31874;
})();
if(cljs.core.truth_(inst_31704)){
var statearr_31875_33684 = state_31855__$1;
(statearr_31875_33684[(1)] = (5));

} else {
var statearr_31876_33685 = state_31855__$1;
(statearr_31876_33685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (15))){
var inst_31714 = (state_31855[(13)]);
var inst_31716 = (state_31855[(15)]);
var inst_31717 = (state_31855[(16)]);
var inst_31715 = (state_31855[(17)]);
var inst_31736 = (state_31855[(2)]);
var inst_31737 = (inst_31717 + (1));
var tmp31870 = inst_31714;
var tmp31871 = inst_31716;
var tmp31872 = inst_31715;
var inst_31714__$1 = tmp31870;
var inst_31715__$1 = tmp31872;
var inst_31716__$1 = tmp31871;
var inst_31717__$1 = inst_31737;
var state_31855__$1 = (function (){var statearr_31903 = state_31855;
(statearr_31903[(13)] = inst_31714__$1);

(statearr_31903[(18)] = inst_31736);

(statearr_31903[(15)] = inst_31716__$1);

(statearr_31903[(16)] = inst_31717__$1);

(statearr_31903[(17)] = inst_31715__$1);

return statearr_31903;
})();
var statearr_31904_33686 = state_31855__$1;
(statearr_31904_33686[(2)] = null);

(statearr_31904_33686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (21))){
var inst_31775 = (state_31855[(2)]);
var state_31855__$1 = state_31855;
var statearr_31908_33687 = state_31855__$1;
(statearr_31908_33687[(2)] = inst_31775);

(statearr_31908_33687[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (31))){
var inst_31802 = (state_31855[(9)]);
var inst_31806 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31802);
var state_31855__$1 = state_31855;
var statearr_31909_33688 = state_31855__$1;
(statearr_31909_33688[(2)] = inst_31806);

(statearr_31909_33688[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (32))){
var inst_31797 = (state_31855[(10)]);
var inst_31794 = (state_31855[(19)]);
var inst_31795 = (state_31855[(12)]);
var inst_31796 = (state_31855[(20)]);
var inst_31808 = (state_31855[(2)]);
var inst_31809 = (inst_31797 + (1));
var tmp31905 = inst_31794;
var tmp31906 = inst_31795;
var tmp31907 = inst_31796;
var inst_31794__$1 = tmp31905;
var inst_31795__$1 = tmp31906;
var inst_31796__$1 = tmp31907;
var inst_31797__$1 = inst_31809;
var state_31855__$1 = (function (){var statearr_31910 = state_31855;
(statearr_31910[(10)] = inst_31797__$1);

(statearr_31910[(19)] = inst_31794__$1);

(statearr_31910[(21)] = inst_31808);

(statearr_31910[(12)] = inst_31795__$1);

(statearr_31910[(20)] = inst_31796__$1);

return statearr_31910;
})();
var statearr_31911_33692 = state_31855__$1;
(statearr_31911_33692[(2)] = null);

(statearr_31911_33692[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (40))){
var inst_31821 = (state_31855[(22)]);
var inst_31826 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31821);
var state_31855__$1 = state_31855;
var statearr_31912_33693 = state_31855__$1;
(statearr_31912_33693[(2)] = inst_31826);

(statearr_31912_33693[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (33))){
var inst_31812 = (state_31855[(23)]);
var inst_31814 = cljs.core.chunked_seq_QMARK_(inst_31812);
var state_31855__$1 = state_31855;
if(inst_31814){
var statearr_31913_33694 = state_31855__$1;
(statearr_31913_33694[(1)] = (36));

} else {
var statearr_31914_33695 = state_31855__$1;
(statearr_31914_33695[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (13))){
var inst_31730 = (state_31855[(24)]);
var inst_31733 = cljs.core.async.close_BANG_(inst_31730);
var state_31855__$1 = state_31855;
var statearr_31915_33696 = state_31855__$1;
(statearr_31915_33696[(2)] = inst_31733);

(statearr_31915_33696[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (22))){
var inst_31764 = (state_31855[(8)]);
var inst_31767 = cljs.core.async.close_BANG_(inst_31764);
var state_31855__$1 = state_31855;
var statearr_31918_33697 = state_31855__$1;
(statearr_31918_33697[(2)] = inst_31767);

(statearr_31918_33697[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (36))){
var inst_31812 = (state_31855[(23)]);
var inst_31816 = cljs.core.chunk_first(inst_31812);
var inst_31817 = cljs.core.chunk_rest(inst_31812);
var inst_31818 = cljs.core.count(inst_31816);
var inst_31794 = inst_31817;
var inst_31795 = inst_31816;
var inst_31796 = inst_31818;
var inst_31797 = (0);
var state_31855__$1 = (function (){var statearr_31931 = state_31855;
(statearr_31931[(10)] = inst_31797);

(statearr_31931[(19)] = inst_31794);

(statearr_31931[(12)] = inst_31795);

(statearr_31931[(20)] = inst_31796);

return statearr_31931;
})();
var statearr_31932_33698 = state_31855__$1;
(statearr_31932_33698[(2)] = null);

(statearr_31932_33698[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (41))){
var inst_31812 = (state_31855[(23)]);
var inst_31828 = (state_31855[(2)]);
var inst_31829 = cljs.core.next(inst_31812);
var inst_31794 = inst_31829;
var inst_31795 = null;
var inst_31796 = (0);
var inst_31797 = (0);
var state_31855__$1 = (function (){var statearr_31933 = state_31855;
(statearr_31933[(25)] = inst_31828);

(statearr_31933[(10)] = inst_31797);

(statearr_31933[(19)] = inst_31794);

(statearr_31933[(12)] = inst_31795);

(statearr_31933[(20)] = inst_31796);

return statearr_31933;
})();
var statearr_31934_33699 = state_31855__$1;
(statearr_31934_33699[(2)] = null);

(statearr_31934_33699[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (43))){
var state_31855__$1 = state_31855;
var statearr_31939_33700 = state_31855__$1;
(statearr_31939_33700[(2)] = null);

(statearr_31939_33700[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (29))){
var inst_31837 = (state_31855[(2)]);
var state_31855__$1 = state_31855;
var statearr_31940_33701 = state_31855__$1;
(statearr_31940_33701[(2)] = inst_31837);

(statearr_31940_33701[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (44))){
var inst_31847 = (state_31855[(2)]);
var state_31855__$1 = (function (){var statearr_31946 = state_31855;
(statearr_31946[(26)] = inst_31847);

return statearr_31946;
})();
var statearr_31949_33702 = state_31855__$1;
(statearr_31949_33702[(2)] = null);

(statearr_31949_33702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (6))){
var inst_31785 = (state_31855[(27)]);
var inst_31784 = cljs.core.deref(cs);
var inst_31785__$1 = cljs.core.keys(inst_31784);
var inst_31786 = cljs.core.count(inst_31785__$1);
var inst_31787 = cljs.core.reset_BANG_(dctr,inst_31786);
var inst_31793 = cljs.core.seq(inst_31785__$1);
var inst_31794 = inst_31793;
var inst_31795 = null;
var inst_31796 = (0);
var inst_31797 = (0);
var state_31855__$1 = (function (){var statearr_31955 = state_31855;
(statearr_31955[(10)] = inst_31797);

(statearr_31955[(19)] = inst_31794);

(statearr_31955[(27)] = inst_31785__$1);

(statearr_31955[(12)] = inst_31795);

(statearr_31955[(20)] = inst_31796);

(statearr_31955[(28)] = inst_31787);

return statearr_31955;
})();
var statearr_31963_33704 = state_31855__$1;
(statearr_31963_33704[(2)] = null);

(statearr_31963_33704[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (28))){
var inst_31794 = (state_31855[(19)]);
var inst_31812 = (state_31855[(23)]);
var inst_31812__$1 = cljs.core.seq(inst_31794);
var state_31855__$1 = (function (){var statearr_31964 = state_31855;
(statearr_31964[(23)] = inst_31812__$1);

return statearr_31964;
})();
if(inst_31812__$1){
var statearr_31965_33705 = state_31855__$1;
(statearr_31965_33705[(1)] = (33));

} else {
var statearr_31966_33706 = state_31855__$1;
(statearr_31966_33706[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (25))){
var inst_31797 = (state_31855[(10)]);
var inst_31796 = (state_31855[(20)]);
var inst_31799 = (inst_31797 < inst_31796);
var inst_31800 = inst_31799;
var state_31855__$1 = state_31855;
if(cljs.core.truth_(inst_31800)){
var statearr_31967_33707 = state_31855__$1;
(statearr_31967_33707[(1)] = (27));

} else {
var statearr_31968_33708 = state_31855__$1;
(statearr_31968_33708[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (34))){
var state_31855__$1 = state_31855;
var statearr_31969_33709 = state_31855__$1;
(statearr_31969_33709[(2)] = null);

(statearr_31969_33709[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (17))){
var state_31855__$1 = state_31855;
var statearr_31970_33710 = state_31855__$1;
(statearr_31970_33710[(2)] = null);

(statearr_31970_33710[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (3))){
var inst_31853 = (state_31855[(2)]);
var state_31855__$1 = state_31855;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31855__$1,inst_31853);
} else {
if((state_val_31856 === (12))){
var inst_31780 = (state_31855[(2)]);
var state_31855__$1 = state_31855;
var statearr_31974_33719 = state_31855__$1;
(statearr_31974_33719[(2)] = inst_31780);

(statearr_31974_33719[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (2))){
var state_31855__$1 = state_31855;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31855__$1,(4),ch);
} else {
if((state_val_31856 === (23))){
var state_31855__$1 = state_31855;
var statearr_31978_33720 = state_31855__$1;
(statearr_31978_33720[(2)] = null);

(statearr_31978_33720[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (35))){
var inst_31835 = (state_31855[(2)]);
var state_31855__$1 = state_31855;
var statearr_31982_33721 = state_31855__$1;
(statearr_31982_33721[(2)] = inst_31835);

(statearr_31982_33721[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (19))){
var inst_31744 = (state_31855[(7)]);
var inst_31751 = cljs.core.chunk_first(inst_31744);
var inst_31756 = cljs.core.chunk_rest(inst_31744);
var inst_31757 = cljs.core.count(inst_31751);
var inst_31714 = inst_31756;
var inst_31715 = inst_31751;
var inst_31716 = inst_31757;
var inst_31717 = (0);
var state_31855__$1 = (function (){var statearr_31998 = state_31855;
(statearr_31998[(13)] = inst_31714);

(statearr_31998[(15)] = inst_31716);

(statearr_31998[(16)] = inst_31717);

(statearr_31998[(17)] = inst_31715);

return statearr_31998;
})();
var statearr_32001_33722 = state_31855__$1;
(statearr_32001_33722[(2)] = null);

(statearr_32001_33722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (11))){
var inst_31714 = (state_31855[(13)]);
var inst_31744 = (state_31855[(7)]);
var inst_31744__$1 = cljs.core.seq(inst_31714);
var state_31855__$1 = (function (){var statearr_32003 = state_31855;
(statearr_32003[(7)] = inst_31744__$1);

return statearr_32003;
})();
if(inst_31744__$1){
var statearr_32005_33723 = state_31855__$1;
(statearr_32005_33723[(1)] = (16));

} else {
var statearr_32007_33725 = state_31855__$1;
(statearr_32007_33725[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (9))){
var inst_31782 = (state_31855[(2)]);
var state_31855__$1 = state_31855;
var statearr_32009_33727 = state_31855__$1;
(statearr_32009_33727[(2)] = inst_31782);

(statearr_32009_33727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (5))){
var inst_31712 = cljs.core.deref(cs);
var inst_31713 = cljs.core.seq(inst_31712);
var inst_31714 = inst_31713;
var inst_31715 = null;
var inst_31716 = (0);
var inst_31717 = (0);
var state_31855__$1 = (function (){var statearr_32012 = state_31855;
(statearr_32012[(13)] = inst_31714);

(statearr_32012[(15)] = inst_31716);

(statearr_32012[(16)] = inst_31717);

(statearr_32012[(17)] = inst_31715);

return statearr_32012;
})();
var statearr_32014_33728 = state_31855__$1;
(statearr_32014_33728[(2)] = null);

(statearr_32014_33728[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (14))){
var state_31855__$1 = state_31855;
var statearr_32016_33729 = state_31855__$1;
(statearr_32016_33729[(2)] = null);

(statearr_32016_33729[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (45))){
var inst_31844 = (state_31855[(2)]);
var state_31855__$1 = state_31855;
var statearr_32019_33730 = state_31855__$1;
(statearr_32019_33730[(2)] = inst_31844);

(statearr_32019_33730[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (26))){
var inst_31785 = (state_31855[(27)]);
var inst_31839 = (state_31855[(2)]);
var inst_31840 = cljs.core.seq(inst_31785);
var state_31855__$1 = (function (){var statearr_32020 = state_31855;
(statearr_32020[(29)] = inst_31839);

return statearr_32020;
})();
if(inst_31840){
var statearr_32021_33731 = state_31855__$1;
(statearr_32021_33731[(1)] = (42));

} else {
var statearr_32022_33732 = state_31855__$1;
(statearr_32022_33732[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (16))){
var inst_31744 = (state_31855[(7)]);
var inst_31749 = cljs.core.chunked_seq_QMARK_(inst_31744);
var state_31855__$1 = state_31855;
if(inst_31749){
var statearr_32023_33733 = state_31855__$1;
(statearr_32023_33733[(1)] = (19));

} else {
var statearr_32024_33734 = state_31855__$1;
(statearr_32024_33734[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (38))){
var inst_31832 = (state_31855[(2)]);
var state_31855__$1 = state_31855;
var statearr_32029_33735 = state_31855__$1;
(statearr_32029_33735[(2)] = inst_31832);

(statearr_32029_33735[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (30))){
var state_31855__$1 = state_31855;
var statearr_32031_33736 = state_31855__$1;
(statearr_32031_33736[(2)] = null);

(statearr_32031_33736[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (10))){
var inst_31717 = (state_31855[(16)]);
var inst_31715 = (state_31855[(17)]);
var inst_31729 = cljs.core._nth(inst_31715,inst_31717);
var inst_31730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31729,(0),null);
var inst_31731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31729,(1),null);
var state_31855__$1 = (function (){var statearr_32033 = state_31855;
(statearr_32033[(24)] = inst_31730);

return statearr_32033;
})();
if(cljs.core.truth_(inst_31731)){
var statearr_32034_33737 = state_31855__$1;
(statearr_32034_33737[(1)] = (13));

} else {
var statearr_32035_33738 = state_31855__$1;
(statearr_32035_33738[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (18))){
var inst_31778 = (state_31855[(2)]);
var state_31855__$1 = state_31855;
var statearr_32036_33739 = state_31855__$1;
(statearr_32036_33739[(2)] = inst_31778);

(statearr_32036_33739[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (42))){
var state_31855__$1 = state_31855;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31855__$1,(45),dchan);
} else {
if((state_val_31856 === (37))){
var inst_31812 = (state_31855[(23)]);
var inst_31703 = (state_31855[(11)]);
var inst_31821 = (state_31855[(22)]);
var inst_31821__$1 = cljs.core.first(inst_31812);
var inst_31822 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31821__$1,inst_31703,done);
var state_31855__$1 = (function (){var statearr_32038 = state_31855;
(statearr_32038[(22)] = inst_31821__$1);

return statearr_32038;
})();
if(cljs.core.truth_(inst_31822)){
var statearr_32040_33740 = state_31855__$1;
(statearr_32040_33740[(1)] = (39));

} else {
var statearr_32042_33741 = state_31855__$1;
(statearr_32042_33741[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31856 === (8))){
var inst_31716 = (state_31855[(15)]);
var inst_31717 = (state_31855[(16)]);
var inst_31719 = (inst_31717 < inst_31716);
var inst_31720 = inst_31719;
var state_31855__$1 = state_31855;
if(cljs.core.truth_(inst_31720)){
var statearr_32045_33742 = state_31855__$1;
(statearr_32045_33742[(1)] = (10));

} else {
var statearr_32047_33743 = state_31855__$1;
(statearr_32047_33743[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__30768__auto__ = null;
var cljs$core$async$mult_$_state_machine__30768__auto____0 = (function (){
var statearr_32050 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32050[(0)] = cljs$core$async$mult_$_state_machine__30768__auto__);

(statearr_32050[(1)] = (1));

return statearr_32050;
});
var cljs$core$async$mult_$_state_machine__30768__auto____1 = (function (state_31855){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_31855);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e32051){var ex__30771__auto__ = e32051;
var statearr_32052_33744 = state_31855;
(statearr_32052_33744[(2)] = ex__30771__auto__);


if(cljs.core.seq((state_31855[(4)]))){
var statearr_32057_33745 = state_31855;
(statearr_32057_33745[(1)] = cljs.core.first((state_31855[(4)])));

} else {
throw ex__30771__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33746 = state_31855;
state_31855 = G__33746;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30768__auto__ = function(state_31855){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30768__auto____1.call(this,state_31855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30768__auto____0;
cljs$core$async$mult_$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30768__auto____1;
return cljs$core$async$mult_$_state_machine__30768__auto__;
})()
})();
var state__30962__auto__ = (function (){var statearr_32064 = f__30961__auto__();
(statearr_32064[(6)] = c__30960__auto___33665);

return statearr_32064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30962__auto__);
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
var G__32093 = arguments.length;
switch (G__32093) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_33755 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_33755(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33795 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_33795(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33802 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33802(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33806 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_33806(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33815 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33815(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33816 = arguments.length;
var i__4737__auto___33817 = (0);
while(true){
if((i__4737__auto___33817 < len__4736__auto___33816)){
args__4742__auto__.push((arguments[i__4737__auto___33817]));

var G__33818 = (i__4737__auto___33817 + (1));
i__4737__auto___33817 = G__33818;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32152){
var map__32153 = p__32152;
var map__32153__$1 = (((((!((map__32153 == null))))?(((((map__32153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32153):map__32153);
var opts = map__32153__$1;
var statearr_32155_33819 = state;
(statearr_32155_33819[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32157_33820 = state;
(statearr_32157_33820[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_32158_33821 = state;
(statearr_32158_33821[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32147){
var G__32148 = cljs.core.first(seq32147);
var seq32147__$1 = cljs.core.next(seq32147);
var G__32149 = cljs.core.first(seq32147__$1);
var seq32147__$2 = cljs.core.next(seq32147__$1);
var G__32150 = cljs.core.first(seq32147__$2);
var seq32147__$3 = cljs.core.next(seq32147__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32148,G__32149,G__32150,seq32147__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32160 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32160 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32161){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32161 = meta32161;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32162,meta32161__$1){
var self__ = this;
var _32162__$1 = this;
return (new cljs.core.async.t_cljs$core$async32160(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32161__$1));
}));

(cljs.core.async.t_cljs$core$async32160.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32162){
var self__ = this;
var _32162__$1 = this;
return self__.meta32161;
}));

(cljs.core.async.t_cljs$core$async32160.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32160.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32160.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32160.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32160.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32160.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32160.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32160.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32160.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32161","meta32161",-1809399250,null)], null);
}));

(cljs.core.async.t_cljs$core$async32160.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32160.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32160");

(cljs.core.async.t_cljs$core$async32160.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32160");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32160.
 */
cljs.core.async.__GT_t_cljs$core$async32160 = (function cljs$core$async$mix_$___GT_t_cljs$core$async32160(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32161){
return (new cljs.core.async.t_cljs$core$async32160(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32161));
});

}

return (new cljs.core.async.t_cljs$core$async32160(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30960__auto___33828 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30961__auto__ = (function (){var switch__30767__auto__ = (function (state_32296){
var state_val_32297 = (state_32296[(1)]);
if((state_val_32297 === (7))){
var inst_32197 = (state_32296[(2)]);
var state_32296__$1 = state_32296;
var statearr_32298_33829 = state_32296__$1;
(statearr_32298_33829[(2)] = inst_32197);

(statearr_32298_33829[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (20))){
var inst_32209 = (state_32296[(7)]);
var state_32296__$1 = state_32296;
var statearr_32299_33830 = state_32296__$1;
(statearr_32299_33830[(2)] = inst_32209);

(statearr_32299_33830[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (27))){
var state_32296__$1 = state_32296;
var statearr_32300_33831 = state_32296__$1;
(statearr_32300_33831[(2)] = null);

(statearr_32300_33831[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (1))){
var inst_32181 = (state_32296[(8)]);
var inst_32181__$1 = calc_state();
var inst_32185 = (inst_32181__$1 == null);
var inst_32186 = cljs.core.not(inst_32185);
var state_32296__$1 = (function (){var statearr_32301 = state_32296;
(statearr_32301[(8)] = inst_32181__$1);

return statearr_32301;
})();
if(inst_32186){
var statearr_32302_33832 = state_32296__$1;
(statearr_32302_33832[(1)] = (2));

} else {
var statearr_32303_33833 = state_32296__$1;
(statearr_32303_33833[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (24))){
var inst_32233 = (state_32296[(9)]);
var inst_32246 = (state_32296[(10)]);
var inst_32268 = (state_32296[(11)]);
var inst_32268__$1 = (inst_32233.cljs$core$IFn$_invoke$arity$1 ? inst_32233.cljs$core$IFn$_invoke$arity$1(inst_32246) : inst_32233.call(null,inst_32246));
var state_32296__$1 = (function (){var statearr_32304 = state_32296;
(statearr_32304[(11)] = inst_32268__$1);

return statearr_32304;
})();
if(cljs.core.truth_(inst_32268__$1)){
var statearr_32305_33837 = state_32296__$1;
(statearr_32305_33837[(1)] = (29));

} else {
var statearr_32306_33838 = state_32296__$1;
(statearr_32306_33838[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (4))){
var inst_32200 = (state_32296[(2)]);
var state_32296__$1 = state_32296;
if(cljs.core.truth_(inst_32200)){
var statearr_32307_33839 = state_32296__$1;
(statearr_32307_33839[(1)] = (8));

} else {
var statearr_32308_33840 = state_32296__$1;
(statearr_32308_33840[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (15))){
var inst_32227 = (state_32296[(2)]);
var state_32296__$1 = state_32296;
if(cljs.core.truth_(inst_32227)){
var statearr_32311_33841 = state_32296__$1;
(statearr_32311_33841[(1)] = (19));

} else {
var statearr_32312_33842 = state_32296__$1;
(statearr_32312_33842[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (21))){
var inst_32232 = (state_32296[(12)]);
var inst_32232__$1 = (state_32296[(2)]);
var inst_32233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32232__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32232__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32232__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32296__$1 = (function (){var statearr_32313 = state_32296;
(statearr_32313[(13)] = inst_32234);

(statearr_32313[(9)] = inst_32233);

(statearr_32313[(12)] = inst_32232__$1);

return statearr_32313;
})();
return cljs.core.async.ioc_alts_BANG_(state_32296__$1,(22),inst_32235);
} else {
if((state_val_32297 === (31))){
var inst_32276 = (state_32296[(2)]);
var state_32296__$1 = state_32296;
if(cljs.core.truth_(inst_32276)){
var statearr_32315_33843 = state_32296__$1;
(statearr_32315_33843[(1)] = (32));

} else {
var statearr_32316_33844 = state_32296__$1;
(statearr_32316_33844[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (32))){
var inst_32245 = (state_32296[(14)]);
var state_32296__$1 = state_32296;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32296__$1,(35),out,inst_32245);
} else {
if((state_val_32297 === (33))){
var inst_32232 = (state_32296[(12)]);
var inst_32209 = inst_32232;
var state_32296__$1 = (function (){var statearr_32317 = state_32296;
(statearr_32317[(7)] = inst_32209);

return statearr_32317;
})();
var statearr_32318_33845 = state_32296__$1;
(statearr_32318_33845[(2)] = null);

(statearr_32318_33845[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (13))){
var inst_32209 = (state_32296[(7)]);
var inst_32216 = inst_32209.cljs$lang$protocol_mask$partition0$;
var inst_32217 = (inst_32216 & (64));
var inst_32218 = inst_32209.cljs$core$ISeq$;
var inst_32219 = (cljs.core.PROTOCOL_SENTINEL === inst_32218);
var inst_32220 = ((inst_32217) || (inst_32219));
var state_32296__$1 = state_32296;
if(cljs.core.truth_(inst_32220)){
var statearr_32319_33846 = state_32296__$1;
(statearr_32319_33846[(1)] = (16));

} else {
var statearr_32320_33847 = state_32296__$1;
(statearr_32320_33847[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (22))){
var inst_32246 = (state_32296[(10)]);
var inst_32245 = (state_32296[(14)]);
var inst_32244 = (state_32296[(2)]);
var inst_32245__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32244,(0),null);
var inst_32246__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32244,(1),null);
var inst_32251 = (inst_32245__$1 == null);
var inst_32252 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32246__$1,change);
var inst_32253 = ((inst_32251) || (inst_32252));
var state_32296__$1 = (function (){var statearr_32322 = state_32296;
(statearr_32322[(10)] = inst_32246__$1);

(statearr_32322[(14)] = inst_32245__$1);

return statearr_32322;
})();
if(cljs.core.truth_(inst_32253)){
var statearr_32323_33848 = state_32296__$1;
(statearr_32323_33848[(1)] = (23));

} else {
var statearr_32324_33849 = state_32296__$1;
(statearr_32324_33849[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (36))){
var inst_32232 = (state_32296[(12)]);
var inst_32209 = inst_32232;
var state_32296__$1 = (function (){var statearr_32325 = state_32296;
(statearr_32325[(7)] = inst_32209);

return statearr_32325;
})();
var statearr_32326_33850 = state_32296__$1;
(statearr_32326_33850[(2)] = null);

(statearr_32326_33850[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (29))){
var inst_32268 = (state_32296[(11)]);
var state_32296__$1 = state_32296;
var statearr_32327_33851 = state_32296__$1;
(statearr_32327_33851[(2)] = inst_32268);

(statearr_32327_33851[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (6))){
var state_32296__$1 = state_32296;
var statearr_32328_33852 = state_32296__$1;
(statearr_32328_33852[(2)] = false);

(statearr_32328_33852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (28))){
var inst_32264 = (state_32296[(2)]);
var inst_32265 = calc_state();
var inst_32209 = inst_32265;
var state_32296__$1 = (function (){var statearr_32329 = state_32296;
(statearr_32329[(7)] = inst_32209);

(statearr_32329[(15)] = inst_32264);

return statearr_32329;
})();
var statearr_32330_33853 = state_32296__$1;
(statearr_32330_33853[(2)] = null);

(statearr_32330_33853[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (25))){
var inst_32290 = (state_32296[(2)]);
var state_32296__$1 = state_32296;
var statearr_32331_33854 = state_32296__$1;
(statearr_32331_33854[(2)] = inst_32290);

(statearr_32331_33854[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (34))){
var inst_32288 = (state_32296[(2)]);
var state_32296__$1 = state_32296;
var statearr_32332_33855 = state_32296__$1;
(statearr_32332_33855[(2)] = inst_32288);

(statearr_32332_33855[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (17))){
var state_32296__$1 = state_32296;
var statearr_32333_33856 = state_32296__$1;
(statearr_32333_33856[(2)] = false);

(statearr_32333_33856[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (3))){
var state_32296__$1 = state_32296;
var statearr_32334_33857 = state_32296__$1;
(statearr_32334_33857[(2)] = false);

(statearr_32334_33857[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (12))){
var inst_32292 = (state_32296[(2)]);
var state_32296__$1 = state_32296;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32296__$1,inst_32292);
} else {
if((state_val_32297 === (2))){
var inst_32181 = (state_32296[(8)]);
var inst_32189 = inst_32181.cljs$lang$protocol_mask$partition0$;
var inst_32190 = (inst_32189 & (64));
var inst_32191 = inst_32181.cljs$core$ISeq$;
var inst_32192 = (cljs.core.PROTOCOL_SENTINEL === inst_32191);
var inst_32193 = ((inst_32190) || (inst_32192));
var state_32296__$1 = state_32296;
if(cljs.core.truth_(inst_32193)){
var statearr_32335_33858 = state_32296__$1;
(statearr_32335_33858[(1)] = (5));

} else {
var statearr_32336_33859 = state_32296__$1;
(statearr_32336_33859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (23))){
var inst_32245 = (state_32296[(14)]);
var inst_32259 = (inst_32245 == null);
var state_32296__$1 = state_32296;
if(cljs.core.truth_(inst_32259)){
var statearr_32337_33866 = state_32296__$1;
(statearr_32337_33866[(1)] = (26));

} else {
var statearr_32338_33867 = state_32296__$1;
(statearr_32338_33867[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (35))){
var inst_32279 = (state_32296[(2)]);
var state_32296__$1 = state_32296;
if(cljs.core.truth_(inst_32279)){
var statearr_32339_33868 = state_32296__$1;
(statearr_32339_33868[(1)] = (36));

} else {
var statearr_32340_33869 = state_32296__$1;
(statearr_32340_33869[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (19))){
var inst_32209 = (state_32296[(7)]);
var inst_32229 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32209);
var state_32296__$1 = state_32296;
var statearr_32341_33870 = state_32296__$1;
(statearr_32341_33870[(2)] = inst_32229);

(statearr_32341_33870[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (11))){
var inst_32209 = (state_32296[(7)]);
var inst_32213 = (inst_32209 == null);
var inst_32214 = cljs.core.not(inst_32213);
var state_32296__$1 = state_32296;
if(inst_32214){
var statearr_32342_33871 = state_32296__$1;
(statearr_32342_33871[(1)] = (13));

} else {
var statearr_32343_33872 = state_32296__$1;
(statearr_32343_33872[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (9))){
var inst_32181 = (state_32296[(8)]);
var state_32296__$1 = state_32296;
var statearr_32344_33873 = state_32296__$1;
(statearr_32344_33873[(2)] = inst_32181);

(statearr_32344_33873[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (5))){
var state_32296__$1 = state_32296;
var statearr_32345_33874 = state_32296__$1;
(statearr_32345_33874[(2)] = true);

(statearr_32345_33874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (14))){
var state_32296__$1 = state_32296;
var statearr_32348_33875 = state_32296__$1;
(statearr_32348_33875[(2)] = false);

(statearr_32348_33875[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (26))){
var inst_32246 = (state_32296[(10)]);
var inst_32261 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32246);
var state_32296__$1 = state_32296;
var statearr_32349_33876 = state_32296__$1;
(statearr_32349_33876[(2)] = inst_32261);

(statearr_32349_33876[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (16))){
var state_32296__$1 = state_32296;
var statearr_32350_33877 = state_32296__$1;
(statearr_32350_33877[(2)] = true);

(statearr_32350_33877[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (38))){
var inst_32284 = (state_32296[(2)]);
var state_32296__$1 = state_32296;
var statearr_32351_33878 = state_32296__$1;
(statearr_32351_33878[(2)] = inst_32284);

(statearr_32351_33878[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (30))){
var inst_32234 = (state_32296[(13)]);
var inst_32233 = (state_32296[(9)]);
var inst_32246 = (state_32296[(10)]);
var inst_32271 = cljs.core.empty_QMARK_(inst_32233);
var inst_32272 = (inst_32234.cljs$core$IFn$_invoke$arity$1 ? inst_32234.cljs$core$IFn$_invoke$arity$1(inst_32246) : inst_32234.call(null,inst_32246));
var inst_32273 = cljs.core.not(inst_32272);
var inst_32274 = ((inst_32271) && (inst_32273));
var state_32296__$1 = state_32296;
var statearr_32352_33879 = state_32296__$1;
(statearr_32352_33879[(2)] = inst_32274);

(statearr_32352_33879[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (10))){
var inst_32181 = (state_32296[(8)]);
var inst_32205 = (state_32296[(2)]);
var inst_32206 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32205,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32207 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32205,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32208 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32205,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32209 = inst_32181;
var state_32296__$1 = (function (){var statearr_32353 = state_32296;
(statearr_32353[(16)] = inst_32208);

(statearr_32353[(17)] = inst_32207);

(statearr_32353[(18)] = inst_32206);

(statearr_32353[(7)] = inst_32209);

return statearr_32353;
})();
var statearr_32354_33880 = state_32296__$1;
(statearr_32354_33880[(2)] = null);

(statearr_32354_33880[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (18))){
var inst_32224 = (state_32296[(2)]);
var state_32296__$1 = state_32296;
var statearr_32355_33884 = state_32296__$1;
(statearr_32355_33884[(2)] = inst_32224);

(statearr_32355_33884[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (37))){
var state_32296__$1 = state_32296;
var statearr_32356_33885 = state_32296__$1;
(statearr_32356_33885[(2)] = null);

(statearr_32356_33885[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (8))){
var inst_32181 = (state_32296[(8)]);
var inst_32202 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32181);
var state_32296__$1 = state_32296;
var statearr_32357_33886 = state_32296__$1;
(statearr_32357_33886[(2)] = inst_32202);

(statearr_32357_33886[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__30768__auto__ = null;
var cljs$core$async$mix_$_state_machine__30768__auto____0 = (function (){
var statearr_32358 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32358[(0)] = cljs$core$async$mix_$_state_machine__30768__auto__);

(statearr_32358[(1)] = (1));

return statearr_32358;
});
var cljs$core$async$mix_$_state_machine__30768__auto____1 = (function (state_32296){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_32296);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e32361){var ex__30771__auto__ = e32361;
var statearr_32362_33887 = state_32296;
(statearr_32362_33887[(2)] = ex__30771__auto__);


if(cljs.core.seq((state_32296[(4)]))){
var statearr_32363_33888 = state_32296;
(statearr_32363_33888[(1)] = cljs.core.first((state_32296[(4)])));

} else {
throw ex__30771__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33889 = state_32296;
state_32296 = G__33889;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30768__auto__ = function(state_32296){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30768__auto____1.call(this,state_32296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30768__auto____0;
cljs$core$async$mix_$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30768__auto____1;
return cljs$core$async$mix_$_state_machine__30768__auto__;
})()
})();
var state__30962__auto__ = (function (){var statearr_32364 = f__30961__auto__();
(statearr_32364[(6)] = c__30960__auto___33828);

return statearr_32364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30962__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_33890 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_33890(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33891 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_33891(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33892 = (function() {
var G__33893 = null;
var G__33893__1 = (function (p){
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
var G__33893__2 = (function (p,v){
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
G__33893 = function(p,v){
switch(arguments.length){
case 1:
return G__33893__1.call(this,p);
case 2:
return G__33893__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33893.cljs$core$IFn$_invoke$arity$1 = G__33893__1;
G__33893.cljs$core$IFn$_invoke$arity$2 = G__33893__2;
return G__33893;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32367 = arguments.length;
switch (G__32367) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33892(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33892(p,v);
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
var G__32374 = arguments.length;
switch (G__32374) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32372_SHARP_){
if(cljs.core.truth_((p1__32372_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32372_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32372_SHARP_.call(null,topic)))){
return p1__32372_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32372_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32376 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32376 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32377){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32377 = meta32377;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32378,meta32377__$1){
var self__ = this;
var _32378__$1 = this;
return (new cljs.core.async.t_cljs$core$async32376(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32377__$1));
}));

(cljs.core.async.t_cljs$core$async32376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32378){
var self__ = this;
var _32378__$1 = this;
return self__.meta32377;
}));

(cljs.core.async.t_cljs$core$async32376.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32376.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32376.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32376.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32376.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async32376.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32376.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32376.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32377","meta32377",167321428,null)], null);
}));

(cljs.core.async.t_cljs$core$async32376.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32376.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32376");

(cljs.core.async.t_cljs$core$async32376.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32376");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32376.
 */
cljs.core.async.__GT_t_cljs$core$async32376 = (function cljs$core$async$__GT_t_cljs$core$async32376(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32377){
return (new cljs.core.async.t_cljs$core$async32376(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32377));
});

}

return (new cljs.core.async.t_cljs$core$async32376(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30960__auto___33950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30961__auto__ = (function (){var switch__30767__auto__ = (function (state_32451){
var state_val_32452 = (state_32451[(1)]);
if((state_val_32452 === (7))){
var inst_32446 = (state_32451[(2)]);
var state_32451__$1 = state_32451;
var statearr_32455_33951 = state_32451__$1;
(statearr_32455_33951[(2)] = inst_32446);

(statearr_32455_33951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (20))){
var state_32451__$1 = state_32451;
var statearr_32457_33952 = state_32451__$1;
(statearr_32457_33952[(2)] = null);

(statearr_32457_33952[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (1))){
var state_32451__$1 = state_32451;
var statearr_32458_33953 = state_32451__$1;
(statearr_32458_33953[(2)] = null);

(statearr_32458_33953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (24))){
var inst_32429 = (state_32451[(7)]);
var inst_32438 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32429);
var state_32451__$1 = state_32451;
var statearr_32460_33954 = state_32451__$1;
(statearr_32460_33954[(2)] = inst_32438);

(statearr_32460_33954[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (4))){
var inst_32381 = (state_32451[(8)]);
var inst_32381__$1 = (state_32451[(2)]);
var inst_32382 = (inst_32381__$1 == null);
var state_32451__$1 = (function (){var statearr_32468 = state_32451;
(statearr_32468[(8)] = inst_32381__$1);

return statearr_32468;
})();
if(cljs.core.truth_(inst_32382)){
var statearr_32474_33955 = state_32451__$1;
(statearr_32474_33955[(1)] = (5));

} else {
var statearr_32476_33956 = state_32451__$1;
(statearr_32476_33956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (15))){
var inst_32423 = (state_32451[(2)]);
var state_32451__$1 = state_32451;
var statearr_32477_33957 = state_32451__$1;
(statearr_32477_33957[(2)] = inst_32423);

(statearr_32477_33957[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (21))){
var inst_32443 = (state_32451[(2)]);
var state_32451__$1 = (function (){var statearr_32478 = state_32451;
(statearr_32478[(9)] = inst_32443);

return statearr_32478;
})();
var statearr_32479_33958 = state_32451__$1;
(statearr_32479_33958[(2)] = null);

(statearr_32479_33958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (13))){
var inst_32405 = (state_32451[(10)]);
var inst_32407 = cljs.core.chunked_seq_QMARK_(inst_32405);
var state_32451__$1 = state_32451;
if(inst_32407){
var statearr_32480_33963 = state_32451__$1;
(statearr_32480_33963[(1)] = (16));

} else {
var statearr_32481_33965 = state_32451__$1;
(statearr_32481_33965[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (22))){
var inst_32435 = (state_32451[(2)]);
var state_32451__$1 = state_32451;
if(cljs.core.truth_(inst_32435)){
var statearr_32482_33971 = state_32451__$1;
(statearr_32482_33971[(1)] = (23));

} else {
var statearr_32483_33973 = state_32451__$1;
(statearr_32483_33973[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (6))){
var inst_32381 = (state_32451[(8)]);
var inst_32431 = (state_32451[(11)]);
var inst_32429 = (state_32451[(7)]);
var inst_32429__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32381) : topic_fn.call(null,inst_32381));
var inst_32430 = cljs.core.deref(mults);
var inst_32431__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32430,inst_32429__$1);
var state_32451__$1 = (function (){var statearr_32484 = state_32451;
(statearr_32484[(11)] = inst_32431__$1);

(statearr_32484[(7)] = inst_32429__$1);

return statearr_32484;
})();
if(cljs.core.truth_(inst_32431__$1)){
var statearr_32485_33984 = state_32451__$1;
(statearr_32485_33984[(1)] = (19));

} else {
var statearr_32486_33989 = state_32451__$1;
(statearr_32486_33989[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (25))){
var inst_32440 = (state_32451[(2)]);
var state_32451__$1 = state_32451;
var statearr_32487_33993 = state_32451__$1;
(statearr_32487_33993[(2)] = inst_32440);

(statearr_32487_33993[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (17))){
var inst_32405 = (state_32451[(10)]);
var inst_32414 = cljs.core.first(inst_32405);
var inst_32415 = cljs.core.async.muxch_STAR_(inst_32414);
var inst_32416 = cljs.core.async.close_BANG_(inst_32415);
var inst_32417 = cljs.core.next(inst_32405);
var inst_32391 = inst_32417;
var inst_32392 = null;
var inst_32393 = (0);
var inst_32394 = (0);
var state_32451__$1 = (function (){var statearr_32488 = state_32451;
(statearr_32488[(12)] = inst_32416);

(statearr_32488[(13)] = inst_32394);

(statearr_32488[(14)] = inst_32393);

(statearr_32488[(15)] = inst_32391);

(statearr_32488[(16)] = inst_32392);

return statearr_32488;
})();
var statearr_32489_34008 = state_32451__$1;
(statearr_32489_34008[(2)] = null);

(statearr_32489_34008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (3))){
var inst_32448 = (state_32451[(2)]);
var state_32451__$1 = state_32451;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32451__$1,inst_32448);
} else {
if((state_val_32452 === (12))){
var inst_32425 = (state_32451[(2)]);
var state_32451__$1 = state_32451;
var statearr_32492_34014 = state_32451__$1;
(statearr_32492_34014[(2)] = inst_32425);

(statearr_32492_34014[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (2))){
var state_32451__$1 = state_32451;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32451__$1,(4),ch);
} else {
if((state_val_32452 === (23))){
var state_32451__$1 = state_32451;
var statearr_32495_34019 = state_32451__$1;
(statearr_32495_34019[(2)] = null);

(statearr_32495_34019[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (19))){
var inst_32381 = (state_32451[(8)]);
var inst_32431 = (state_32451[(11)]);
var inst_32433 = cljs.core.async.muxch_STAR_(inst_32431);
var state_32451__$1 = state_32451;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32451__$1,(22),inst_32433,inst_32381);
} else {
if((state_val_32452 === (11))){
var inst_32391 = (state_32451[(15)]);
var inst_32405 = (state_32451[(10)]);
var inst_32405__$1 = cljs.core.seq(inst_32391);
var state_32451__$1 = (function (){var statearr_32497 = state_32451;
(statearr_32497[(10)] = inst_32405__$1);

return statearr_32497;
})();
if(inst_32405__$1){
var statearr_32498_34026 = state_32451__$1;
(statearr_32498_34026[(1)] = (13));

} else {
var statearr_32499_34027 = state_32451__$1;
(statearr_32499_34027[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (9))){
var inst_32427 = (state_32451[(2)]);
var state_32451__$1 = state_32451;
var statearr_32500_34028 = state_32451__$1;
(statearr_32500_34028[(2)] = inst_32427);

(statearr_32500_34028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (5))){
var inst_32388 = cljs.core.deref(mults);
var inst_32389 = cljs.core.vals(inst_32388);
var inst_32390 = cljs.core.seq(inst_32389);
var inst_32391 = inst_32390;
var inst_32392 = null;
var inst_32393 = (0);
var inst_32394 = (0);
var state_32451__$1 = (function (){var statearr_32502 = state_32451;
(statearr_32502[(13)] = inst_32394);

(statearr_32502[(14)] = inst_32393);

(statearr_32502[(15)] = inst_32391);

(statearr_32502[(16)] = inst_32392);

return statearr_32502;
})();
var statearr_32503_34046 = state_32451__$1;
(statearr_32503_34046[(2)] = null);

(statearr_32503_34046[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (14))){
var state_32451__$1 = state_32451;
var statearr_32507_34051 = state_32451__$1;
(statearr_32507_34051[(2)] = null);

(statearr_32507_34051[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (16))){
var inst_32405 = (state_32451[(10)]);
var inst_32409 = cljs.core.chunk_first(inst_32405);
var inst_32410 = cljs.core.chunk_rest(inst_32405);
var inst_32411 = cljs.core.count(inst_32409);
var inst_32391 = inst_32410;
var inst_32392 = inst_32409;
var inst_32393 = inst_32411;
var inst_32394 = (0);
var state_32451__$1 = (function (){var statearr_32510 = state_32451;
(statearr_32510[(13)] = inst_32394);

(statearr_32510[(14)] = inst_32393);

(statearr_32510[(15)] = inst_32391);

(statearr_32510[(16)] = inst_32392);

return statearr_32510;
})();
var statearr_32511_34052 = state_32451__$1;
(statearr_32511_34052[(2)] = null);

(statearr_32511_34052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (10))){
var inst_32394 = (state_32451[(13)]);
var inst_32393 = (state_32451[(14)]);
var inst_32391 = (state_32451[(15)]);
var inst_32392 = (state_32451[(16)]);
var inst_32399 = cljs.core._nth(inst_32392,inst_32394);
var inst_32400 = cljs.core.async.muxch_STAR_(inst_32399);
var inst_32401 = cljs.core.async.close_BANG_(inst_32400);
var inst_32402 = (inst_32394 + (1));
var tmp32504 = inst_32393;
var tmp32505 = inst_32391;
var tmp32506 = inst_32392;
var inst_32391__$1 = tmp32505;
var inst_32392__$1 = tmp32506;
var inst_32393__$1 = tmp32504;
var inst_32394__$1 = inst_32402;
var state_32451__$1 = (function (){var statearr_32512 = state_32451;
(statearr_32512[(17)] = inst_32401);

(statearr_32512[(13)] = inst_32394__$1);

(statearr_32512[(14)] = inst_32393__$1);

(statearr_32512[(15)] = inst_32391__$1);

(statearr_32512[(16)] = inst_32392__$1);

return statearr_32512;
})();
var statearr_32513_34054 = state_32451__$1;
(statearr_32513_34054[(2)] = null);

(statearr_32513_34054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (18))){
var inst_32420 = (state_32451[(2)]);
var state_32451__$1 = state_32451;
var statearr_32521_34055 = state_32451__$1;
(statearr_32521_34055[(2)] = inst_32420);

(statearr_32521_34055[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32452 === (8))){
var inst_32394 = (state_32451[(13)]);
var inst_32393 = (state_32451[(14)]);
var inst_32396 = (inst_32394 < inst_32393);
var inst_32397 = inst_32396;
var state_32451__$1 = state_32451;
if(cljs.core.truth_(inst_32397)){
var statearr_32522_34068 = state_32451__$1;
(statearr_32522_34068[(1)] = (10));

} else {
var statearr_32523_34069 = state_32451__$1;
(statearr_32523_34069[(1)] = (11));

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
var cljs$core$async$state_machine__30768__auto__ = null;
var cljs$core$async$state_machine__30768__auto____0 = (function (){
var statearr_32524 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32524[(0)] = cljs$core$async$state_machine__30768__auto__);

(statearr_32524[(1)] = (1));

return statearr_32524;
});
var cljs$core$async$state_machine__30768__auto____1 = (function (state_32451){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_32451);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e32525){var ex__30771__auto__ = e32525;
var statearr_32526_34070 = state_32451;
(statearr_32526_34070[(2)] = ex__30771__auto__);


if(cljs.core.seq((state_32451[(4)]))){
var statearr_32527_34071 = state_32451;
(statearr_32527_34071[(1)] = cljs.core.first((state_32451[(4)])));

} else {
throw ex__30771__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34072 = state_32451;
state_32451 = G__34072;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$state_machine__30768__auto__ = function(state_32451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30768__auto____1.call(this,state_32451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30768__auto____0;
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30768__auto____1;
return cljs$core$async$state_machine__30768__auto__;
})()
})();
var state__30962__auto__ = (function (){var statearr_32528 = f__30961__auto__();
(statearr_32528[(6)] = c__30960__auto___33950);

return statearr_32528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30962__auto__);
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
var G__32543 = arguments.length;
switch (G__32543) {
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
var G__32553 = arguments.length;
switch (G__32553) {
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
var G__32559 = arguments.length;
switch (G__32559) {
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
var c__30960__auto___34077 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30961__auto__ = (function (){var switch__30767__auto__ = (function (state_32606){
var state_val_32607 = (state_32606[(1)]);
if((state_val_32607 === (7))){
var state_32606__$1 = state_32606;
var statearr_32608_34078 = state_32606__$1;
(statearr_32608_34078[(2)] = null);

(statearr_32608_34078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32607 === (1))){
var state_32606__$1 = state_32606;
var statearr_32609_34079 = state_32606__$1;
(statearr_32609_34079[(2)] = null);

(statearr_32609_34079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32607 === (4))){
var inst_32566 = (state_32606[(7)]);
var inst_32565 = (state_32606[(8)]);
var inst_32568 = (inst_32566 < inst_32565);
var state_32606__$1 = state_32606;
if(cljs.core.truth_(inst_32568)){
var statearr_32610_34080 = state_32606__$1;
(statearr_32610_34080[(1)] = (6));

} else {
var statearr_32611_34081 = state_32606__$1;
(statearr_32611_34081[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32607 === (15))){
var inst_32591 = (state_32606[(9)]);
var inst_32597 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32591);
var state_32606__$1 = state_32606;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32606__$1,(17),out,inst_32597);
} else {
if((state_val_32607 === (13))){
var inst_32591 = (state_32606[(9)]);
var inst_32591__$1 = (state_32606[(2)]);
var inst_32592 = cljs.core.some(cljs.core.nil_QMARK_,inst_32591__$1);
var state_32606__$1 = (function (){var statearr_32612 = state_32606;
(statearr_32612[(9)] = inst_32591__$1);

return statearr_32612;
})();
if(cljs.core.truth_(inst_32592)){
var statearr_32613_34086 = state_32606__$1;
(statearr_32613_34086[(1)] = (14));

} else {
var statearr_32614_34088 = state_32606__$1;
(statearr_32614_34088[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32607 === (6))){
var state_32606__$1 = state_32606;
var statearr_32615_34094 = state_32606__$1;
(statearr_32615_34094[(2)] = null);

(statearr_32615_34094[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32607 === (17))){
var inst_32599 = (state_32606[(2)]);
var state_32606__$1 = (function (){var statearr_32629 = state_32606;
(statearr_32629[(10)] = inst_32599);

return statearr_32629;
})();
var statearr_32630_34100 = state_32606__$1;
(statearr_32630_34100[(2)] = null);

(statearr_32630_34100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32607 === (3))){
var inst_32604 = (state_32606[(2)]);
var state_32606__$1 = state_32606;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32606__$1,inst_32604);
} else {
if((state_val_32607 === (12))){
var _ = (function (){var statearr_32631 = state_32606;
(statearr_32631[(4)] = cljs.core.rest((state_32606[(4)])));

return statearr_32631;
})();
var state_32606__$1 = state_32606;
var ex32616 = (state_32606__$1[(2)]);
var statearr_32632_34113 = state_32606__$1;
(statearr_32632_34113[(5)] = ex32616);


if((ex32616 instanceof Object)){
var statearr_32634_34118 = state_32606__$1;
(statearr_32634_34118[(1)] = (11));

(statearr_32634_34118[(5)] = null);

} else {
throw ex32616;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32607 === (2))){
var inst_32564 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32565 = cnt;
var inst_32566 = (0);
var state_32606__$1 = (function (){var statearr_32638 = state_32606;
(statearr_32638[(11)] = inst_32564);

(statearr_32638[(7)] = inst_32566);

(statearr_32638[(8)] = inst_32565);

return statearr_32638;
})();
var statearr_32639_34134 = state_32606__$1;
(statearr_32639_34134[(2)] = null);

(statearr_32639_34134[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32607 === (11))){
var inst_32570 = (state_32606[(2)]);
var inst_32571 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32606__$1 = (function (){var statearr_32640 = state_32606;
(statearr_32640[(12)] = inst_32570);

return statearr_32640;
})();
var statearr_32643_34136 = state_32606__$1;
(statearr_32643_34136[(2)] = inst_32571);

(statearr_32643_34136[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32607 === (9))){
var inst_32566 = (state_32606[(7)]);
var _ = (function (){var statearr_32645 = state_32606;
(statearr_32645[(4)] = cljs.core.cons((12),(state_32606[(4)])));

return statearr_32645;
})();
var inst_32577 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32566) : chs__$1.call(null,inst_32566));
var inst_32578 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32566) : done.call(null,inst_32566));
var inst_32579 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32577,inst_32578);
var ___$1 = (function (){var statearr_32646 = state_32606;
(statearr_32646[(4)] = cljs.core.rest((state_32606[(4)])));

return statearr_32646;
})();
var state_32606__$1 = state_32606;
var statearr_32647_34142 = state_32606__$1;
(statearr_32647_34142[(2)] = inst_32579);

(statearr_32647_34142[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32607 === (5))){
var inst_32589 = (state_32606[(2)]);
var state_32606__$1 = (function (){var statearr_32648 = state_32606;
(statearr_32648[(13)] = inst_32589);

return statearr_32648;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32606__$1,(13),dchan);
} else {
if((state_val_32607 === (14))){
var inst_32595 = cljs.core.async.close_BANG_(out);
var state_32606__$1 = state_32606;
var statearr_32649_34143 = state_32606__$1;
(statearr_32649_34143[(2)] = inst_32595);

(statearr_32649_34143[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32607 === (16))){
var inst_32602 = (state_32606[(2)]);
var state_32606__$1 = state_32606;
var statearr_32650_34144 = state_32606__$1;
(statearr_32650_34144[(2)] = inst_32602);

(statearr_32650_34144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32607 === (10))){
var inst_32566 = (state_32606[(7)]);
var inst_32582 = (state_32606[(2)]);
var inst_32583 = (inst_32566 + (1));
var inst_32566__$1 = inst_32583;
var state_32606__$1 = (function (){var statearr_32654 = state_32606;
(statearr_32654[(7)] = inst_32566__$1);

(statearr_32654[(14)] = inst_32582);

return statearr_32654;
})();
var statearr_32655_34156 = state_32606__$1;
(statearr_32655_34156[(2)] = null);

(statearr_32655_34156[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32607 === (8))){
var inst_32587 = (state_32606[(2)]);
var state_32606__$1 = state_32606;
var statearr_32656_34175 = state_32606__$1;
(statearr_32656_34175[(2)] = inst_32587);

(statearr_32656_34175[(1)] = (5));


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
var cljs$core$async$state_machine__30768__auto__ = null;
var cljs$core$async$state_machine__30768__auto____0 = (function (){
var statearr_32658 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32658[(0)] = cljs$core$async$state_machine__30768__auto__);

(statearr_32658[(1)] = (1));

return statearr_32658;
});
var cljs$core$async$state_machine__30768__auto____1 = (function (state_32606){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_32606);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e32661){var ex__30771__auto__ = e32661;
var statearr_32663_34176 = state_32606;
(statearr_32663_34176[(2)] = ex__30771__auto__);


if(cljs.core.seq((state_32606[(4)]))){
var statearr_32665_34177 = state_32606;
(statearr_32665_34177[(1)] = cljs.core.first((state_32606[(4)])));

} else {
throw ex__30771__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34178 = state_32606;
state_32606 = G__34178;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$state_machine__30768__auto__ = function(state_32606){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30768__auto____1.call(this,state_32606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30768__auto____0;
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30768__auto____1;
return cljs$core$async$state_machine__30768__auto__;
})()
})();
var state__30962__auto__ = (function (){var statearr_32671 = f__30961__auto__();
(statearr_32671[(6)] = c__30960__auto___34077);

return statearr_32671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30962__auto__);
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
var G__32678 = arguments.length;
switch (G__32678) {
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
var c__30960__auto___34193 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30961__auto__ = (function (){var switch__30767__auto__ = (function (state_32713){
var state_val_32714 = (state_32713[(1)]);
if((state_val_32714 === (7))){
var inst_32689 = (state_32713[(7)]);
var inst_32690 = (state_32713[(8)]);
var inst_32689__$1 = (state_32713[(2)]);
var inst_32690__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32689__$1,(0),null);
var inst_32691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32689__$1,(1),null);
var inst_32692 = (inst_32690__$1 == null);
var state_32713__$1 = (function (){var statearr_32721 = state_32713;
(statearr_32721[(9)] = inst_32691);

(statearr_32721[(7)] = inst_32689__$1);

(statearr_32721[(8)] = inst_32690__$1);

return statearr_32721;
})();
if(cljs.core.truth_(inst_32692)){
var statearr_32722_34195 = state_32713__$1;
(statearr_32722_34195[(1)] = (8));

} else {
var statearr_32723_34196 = state_32713__$1;
(statearr_32723_34196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32714 === (1))){
var inst_32679 = cljs.core.vec(chs);
var inst_32680 = inst_32679;
var state_32713__$1 = (function (){var statearr_32724 = state_32713;
(statearr_32724[(10)] = inst_32680);

return statearr_32724;
})();
var statearr_32725_34197 = state_32713__$1;
(statearr_32725_34197[(2)] = null);

(statearr_32725_34197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32714 === (4))){
var inst_32680 = (state_32713[(10)]);
var state_32713__$1 = state_32713;
return cljs.core.async.ioc_alts_BANG_(state_32713__$1,(7),inst_32680);
} else {
if((state_val_32714 === (6))){
var inst_32709 = (state_32713[(2)]);
var state_32713__$1 = state_32713;
var statearr_32726_34199 = state_32713__$1;
(statearr_32726_34199[(2)] = inst_32709);

(statearr_32726_34199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32714 === (3))){
var inst_32711 = (state_32713[(2)]);
var state_32713__$1 = state_32713;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32713__$1,inst_32711);
} else {
if((state_val_32714 === (2))){
var inst_32680 = (state_32713[(10)]);
var inst_32682 = cljs.core.count(inst_32680);
var inst_32683 = (inst_32682 > (0));
var state_32713__$1 = state_32713;
if(cljs.core.truth_(inst_32683)){
var statearr_32728_34200 = state_32713__$1;
(statearr_32728_34200[(1)] = (4));

} else {
var statearr_32729_34201 = state_32713__$1;
(statearr_32729_34201[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32714 === (11))){
var inst_32680 = (state_32713[(10)]);
var inst_32699 = (state_32713[(2)]);
var tmp32727 = inst_32680;
var inst_32680__$1 = tmp32727;
var state_32713__$1 = (function (){var statearr_32730 = state_32713;
(statearr_32730[(10)] = inst_32680__$1);

(statearr_32730[(11)] = inst_32699);

return statearr_32730;
})();
var statearr_32731_34205 = state_32713__$1;
(statearr_32731_34205[(2)] = null);

(statearr_32731_34205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32714 === (9))){
var inst_32690 = (state_32713[(8)]);
var state_32713__$1 = state_32713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32713__$1,(11),out,inst_32690);
} else {
if((state_val_32714 === (5))){
var inst_32707 = cljs.core.async.close_BANG_(out);
var state_32713__$1 = state_32713;
var statearr_32732_34206 = state_32713__$1;
(statearr_32732_34206[(2)] = inst_32707);

(statearr_32732_34206[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32714 === (10))){
var inst_32705 = (state_32713[(2)]);
var state_32713__$1 = state_32713;
var statearr_32733_34208 = state_32713__$1;
(statearr_32733_34208[(2)] = inst_32705);

(statearr_32733_34208[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32714 === (8))){
var inst_32691 = (state_32713[(9)]);
var inst_32680 = (state_32713[(10)]);
var inst_32689 = (state_32713[(7)]);
var inst_32690 = (state_32713[(8)]);
var inst_32694 = (function (){var cs = inst_32680;
var vec__32685 = inst_32689;
var v = inst_32690;
var c = inst_32691;
return (function (p1__32673_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32673_SHARP_);
});
})();
var inst_32695 = cljs.core.filterv(inst_32694,inst_32680);
var inst_32680__$1 = inst_32695;
var state_32713__$1 = (function (){var statearr_32734 = state_32713;
(statearr_32734[(10)] = inst_32680__$1);

return statearr_32734;
})();
var statearr_32735_34212 = state_32713__$1;
(statearr_32735_34212[(2)] = null);

(statearr_32735_34212[(1)] = (2));


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
var cljs$core$async$state_machine__30768__auto__ = null;
var cljs$core$async$state_machine__30768__auto____0 = (function (){
var statearr_32736 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32736[(0)] = cljs$core$async$state_machine__30768__auto__);

(statearr_32736[(1)] = (1));

return statearr_32736;
});
var cljs$core$async$state_machine__30768__auto____1 = (function (state_32713){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_32713);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e32737){var ex__30771__auto__ = e32737;
var statearr_32738_34218 = state_32713;
(statearr_32738_34218[(2)] = ex__30771__auto__);


if(cljs.core.seq((state_32713[(4)]))){
var statearr_32739_34223 = state_32713;
(statearr_32739_34223[(1)] = cljs.core.first((state_32713[(4)])));

} else {
throw ex__30771__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34226 = state_32713;
state_32713 = G__34226;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$state_machine__30768__auto__ = function(state_32713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30768__auto____1.call(this,state_32713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30768__auto____0;
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30768__auto____1;
return cljs$core$async$state_machine__30768__auto__;
})()
})();
var state__30962__auto__ = (function (){var statearr_32740 = f__30961__auto__();
(statearr_32740[(6)] = c__30960__auto___34193);

return statearr_32740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30962__auto__);
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
var c__30960__auto___34255 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30961__auto__ = (function (){var switch__30767__auto__ = (function (state_32766){
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
var statearr_32769_34267 = state_32766__$1;
(statearr_32769_34267[(1)] = (8));

} else {
var statearr_32770_34268 = state_32766__$1;
(statearr_32770_34268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32767 === (1))){
var inst_32743 = (0);
var state_32766__$1 = (function (){var statearr_32771 = state_32766;
(statearr_32771[(8)] = inst_32743);

return statearr_32771;
})();
var statearr_32772_34270 = state_32766__$1;
(statearr_32772_34270[(2)] = null);

(statearr_32772_34270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32767 === (4))){
var state_32766__$1 = state_32766;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32766__$1,(7),ch);
} else {
if((state_val_32767 === (6))){
var inst_32761 = (state_32766[(2)]);
var state_32766__$1 = state_32766;
var statearr_32773_34273 = state_32766__$1;
(statearr_32773_34273[(2)] = inst_32761);

(statearr_32773_34273[(1)] = (3));


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
var statearr_32775_34274 = state_32766__$1;
(statearr_32775_34274[(1)] = (4));

} else {
var statearr_32776_34275 = state_32766__$1;
(statearr_32776_34275[(1)] = (5));

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
var statearr_32778_34276 = state_32766__$1;
(statearr_32778_34276[(2)] = null);

(statearr_32778_34276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32767 === (9))){
var state_32766__$1 = state_32766;
var statearr_32779_34277 = state_32766__$1;
(statearr_32779_34277[(2)] = null);

(statearr_32779_34277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32767 === (5))){
var state_32766__$1 = state_32766;
var statearr_32780_34282 = state_32766__$1;
(statearr_32780_34282[(2)] = null);

(statearr_32780_34282[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32767 === (10))){
var inst_32758 = (state_32766[(2)]);
var state_32766__$1 = state_32766;
var statearr_32781_34283 = state_32766__$1;
(statearr_32781_34283[(2)] = inst_32758);

(statearr_32781_34283[(1)] = (6));


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
var cljs$core$async$state_machine__30768__auto__ = null;
var cljs$core$async$state_machine__30768__auto____0 = (function (){
var statearr_32782 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32782[(0)] = cljs$core$async$state_machine__30768__auto__);

(statearr_32782[(1)] = (1));

return statearr_32782;
});
var cljs$core$async$state_machine__30768__auto____1 = (function (state_32766){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_32766);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e32783){var ex__30771__auto__ = e32783;
var statearr_32784_34284 = state_32766;
(statearr_32784_34284[(2)] = ex__30771__auto__);


if(cljs.core.seq((state_32766[(4)]))){
var statearr_32785_34293 = state_32766;
(statearr_32785_34293[(1)] = cljs.core.first((state_32766[(4)])));

} else {
throw ex__30771__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34294 = state_32766;
state_32766 = G__34294;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$state_machine__30768__auto__ = function(state_32766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30768__auto____1.call(this,state_32766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30768__auto____0;
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30768__auto____1;
return cljs$core$async$state_machine__30768__auto__;
})()
})();
var state__30962__auto__ = (function (){var statearr_32786 = f__30961__auto__();
(statearr_32786[(6)] = c__30960__auto___34255);

return statearr_32786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30962__auto__);
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
return cljs.core.async.impl.channels.box((function (){var G__32798 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32798) : self__.f.call(null,G__32798));
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
cljs.core.async.t_cljs$core$async32799 = (function (f,ch,meta32800){
this.f = f;
this.ch = ch;
this.meta32800 = meta32800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32801,meta32800__$1){
var self__ = this;
var _32801__$1 = this;
return (new cljs.core.async.t_cljs$core$async32799(self__.f,self__.ch,meta32800__$1));
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
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32799.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32800","meta32800",1261544519,null)], null);
}));

(cljs.core.async.t_cljs$core$async32799.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32799.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32799");

(cljs.core.async.t_cljs$core$async32799.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32799");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32799.
 */
cljs.core.async.__GT_t_cljs$core$async32799 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32799(f__$1,ch__$1,meta32800){
return (new cljs.core.async.t_cljs$core$async32799(f__$1,ch__$1,meta32800));
});

}

return (new cljs.core.async.t_cljs$core$async32799(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32803 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32803 = (function (p,ch,meta32804){
this.p = p;
this.ch = ch;
this.meta32804 = meta32804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32805,meta32804__$1){
var self__ = this;
var _32805__$1 = this;
return (new cljs.core.async.t_cljs$core$async32803(self__.p,self__.ch,meta32804__$1));
}));

(cljs.core.async.t_cljs$core$async32803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32805){
var self__ = this;
var _32805__$1 = this;
return self__.meta32804;
}));

(cljs.core.async.t_cljs$core$async32803.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32803.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32803.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32803.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32803.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32803.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32803.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32803.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32804","meta32804",1653032545,null)], null);
}));

(cljs.core.async.t_cljs$core$async32803.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32803.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32803");

(cljs.core.async.t_cljs$core$async32803.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32803");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32803.
 */
cljs.core.async.__GT_t_cljs$core$async32803 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32803(p__$1,ch__$1,meta32804){
return (new cljs.core.async.t_cljs$core$async32803(p__$1,ch__$1,meta32804));
});

}

return (new cljs.core.async.t_cljs$core$async32803(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32813 = arguments.length;
switch (G__32813) {
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
var c__30960__auto___34304 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30961__auto__ = (function (){var switch__30767__auto__ = (function (state_32836){
var state_val_32837 = (state_32836[(1)]);
if((state_val_32837 === (7))){
var inst_32832 = (state_32836[(2)]);
var state_32836__$1 = state_32836;
var statearr_32838_34306 = state_32836__$1;
(statearr_32838_34306[(2)] = inst_32832);

(statearr_32838_34306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32837 === (1))){
var state_32836__$1 = state_32836;
var statearr_32839_34307 = state_32836__$1;
(statearr_32839_34307[(2)] = null);

(statearr_32839_34307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32837 === (4))){
var inst_32818 = (state_32836[(7)]);
var inst_32818__$1 = (state_32836[(2)]);
var inst_32819 = (inst_32818__$1 == null);
var state_32836__$1 = (function (){var statearr_32840 = state_32836;
(statearr_32840[(7)] = inst_32818__$1);

return statearr_32840;
})();
if(cljs.core.truth_(inst_32819)){
var statearr_32845_34308 = state_32836__$1;
(statearr_32845_34308[(1)] = (5));

} else {
var statearr_32846_34309 = state_32836__$1;
(statearr_32846_34309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32837 === (6))){
var inst_32818 = (state_32836[(7)]);
var inst_32823 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32818) : p.call(null,inst_32818));
var state_32836__$1 = state_32836;
if(cljs.core.truth_(inst_32823)){
var statearr_32847_34310 = state_32836__$1;
(statearr_32847_34310[(1)] = (8));

} else {
var statearr_32848_34311 = state_32836__$1;
(statearr_32848_34311[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32837 === (3))){
var inst_32834 = (state_32836[(2)]);
var state_32836__$1 = state_32836;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32836__$1,inst_32834);
} else {
if((state_val_32837 === (2))){
var state_32836__$1 = state_32836;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32836__$1,(4),ch);
} else {
if((state_val_32837 === (11))){
var inst_32826 = (state_32836[(2)]);
var state_32836__$1 = state_32836;
var statearr_32849_34312 = state_32836__$1;
(statearr_32849_34312[(2)] = inst_32826);

(statearr_32849_34312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32837 === (9))){
var state_32836__$1 = state_32836;
var statearr_32850_34313 = state_32836__$1;
(statearr_32850_34313[(2)] = null);

(statearr_32850_34313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32837 === (5))){
var inst_32821 = cljs.core.async.close_BANG_(out);
var state_32836__$1 = state_32836;
var statearr_32851_34314 = state_32836__$1;
(statearr_32851_34314[(2)] = inst_32821);

(statearr_32851_34314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32837 === (10))){
var inst_32829 = (state_32836[(2)]);
var state_32836__$1 = (function (){var statearr_32853 = state_32836;
(statearr_32853[(8)] = inst_32829);

return statearr_32853;
})();
var statearr_32854_34315 = state_32836__$1;
(statearr_32854_34315[(2)] = null);

(statearr_32854_34315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32837 === (8))){
var inst_32818 = (state_32836[(7)]);
var state_32836__$1 = state_32836;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32836__$1,(11),out,inst_32818);
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
var cljs$core$async$state_machine__30768__auto__ = null;
var cljs$core$async$state_machine__30768__auto____0 = (function (){
var statearr_32855 = [null,null,null,null,null,null,null,null,null];
(statearr_32855[(0)] = cljs$core$async$state_machine__30768__auto__);

(statearr_32855[(1)] = (1));

return statearr_32855;
});
var cljs$core$async$state_machine__30768__auto____1 = (function (state_32836){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_32836);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e32856){var ex__30771__auto__ = e32856;
var statearr_32858_34319 = state_32836;
(statearr_32858_34319[(2)] = ex__30771__auto__);


if(cljs.core.seq((state_32836[(4)]))){
var statearr_32862_34320 = state_32836;
(statearr_32862_34320[(1)] = cljs.core.first((state_32836[(4)])));

} else {
throw ex__30771__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34322 = state_32836;
state_32836 = G__34322;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$state_machine__30768__auto__ = function(state_32836){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30768__auto____1.call(this,state_32836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30768__auto____0;
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30768__auto____1;
return cljs$core$async$state_machine__30768__auto__;
})()
})();
var state__30962__auto__ = (function (){var statearr_32863 = f__30961__auto__();
(statearr_32863[(6)] = c__30960__auto___34304);

return statearr_32863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30962__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32865 = arguments.length;
switch (G__32865) {
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
var c__30960__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30961__auto__ = (function (){var switch__30767__auto__ = (function (state_32978){
var state_val_32979 = (state_32978[(1)]);
if((state_val_32979 === (7))){
var inst_32974 = (state_32978[(2)]);
var state_32978__$1 = state_32978;
var statearr_32980_34326 = state_32978__$1;
(statearr_32980_34326[(2)] = inst_32974);

(statearr_32980_34326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (20))){
var inst_32944 = (state_32978[(7)]);
var inst_32955 = (state_32978[(2)]);
var inst_32956 = cljs.core.next(inst_32944);
var inst_32925 = inst_32956;
var inst_32926 = null;
var inst_32927 = (0);
var inst_32928 = (0);
var state_32978__$1 = (function (){var statearr_32981 = state_32978;
(statearr_32981[(8)] = inst_32925);

(statearr_32981[(9)] = inst_32928);

(statearr_32981[(10)] = inst_32926);

(statearr_32981[(11)] = inst_32927);

(statearr_32981[(12)] = inst_32955);

return statearr_32981;
})();
var statearr_32982_34329 = state_32978__$1;
(statearr_32982_34329[(2)] = null);

(statearr_32982_34329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (1))){
var state_32978__$1 = state_32978;
var statearr_32983_34330 = state_32978__$1;
(statearr_32983_34330[(2)] = null);

(statearr_32983_34330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (4))){
var inst_32879 = (state_32978[(13)]);
var inst_32879__$1 = (state_32978[(2)]);
var inst_32881 = (inst_32879__$1 == null);
var state_32978__$1 = (function (){var statearr_32984 = state_32978;
(statearr_32984[(13)] = inst_32879__$1);

return statearr_32984;
})();
if(cljs.core.truth_(inst_32881)){
var statearr_32985_34331 = state_32978__$1;
(statearr_32985_34331[(1)] = (5));

} else {
var statearr_32986_34332 = state_32978__$1;
(statearr_32986_34332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (15))){
var state_32978__$1 = state_32978;
var statearr_32990_34333 = state_32978__$1;
(statearr_32990_34333[(2)] = null);

(statearr_32990_34333[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (21))){
var state_32978__$1 = state_32978;
var statearr_32991_34334 = state_32978__$1;
(statearr_32991_34334[(2)] = null);

(statearr_32991_34334[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (13))){
var inst_32925 = (state_32978[(8)]);
var inst_32928 = (state_32978[(9)]);
var inst_32926 = (state_32978[(10)]);
var inst_32927 = (state_32978[(11)]);
var inst_32940 = (state_32978[(2)]);
var inst_32941 = (inst_32928 + (1));
var tmp32987 = inst_32925;
var tmp32988 = inst_32926;
var tmp32989 = inst_32927;
var inst_32925__$1 = tmp32987;
var inst_32926__$1 = tmp32988;
var inst_32927__$1 = tmp32989;
var inst_32928__$1 = inst_32941;
var state_32978__$1 = (function (){var statearr_32992 = state_32978;
(statearr_32992[(8)] = inst_32925__$1);

(statearr_32992[(9)] = inst_32928__$1);

(statearr_32992[(10)] = inst_32926__$1);

(statearr_32992[(11)] = inst_32927__$1);

(statearr_32992[(14)] = inst_32940);

return statearr_32992;
})();
var statearr_32993_34360 = state_32978__$1;
(statearr_32993_34360[(2)] = null);

(statearr_32993_34360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (22))){
var state_32978__$1 = state_32978;
var statearr_32994_34361 = state_32978__$1;
(statearr_32994_34361[(2)] = null);

(statearr_32994_34361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (6))){
var inst_32879 = (state_32978[(13)]);
var inst_32923 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32879) : f.call(null,inst_32879));
var inst_32924 = cljs.core.seq(inst_32923);
var inst_32925 = inst_32924;
var inst_32926 = null;
var inst_32927 = (0);
var inst_32928 = (0);
var state_32978__$1 = (function (){var statearr_32995 = state_32978;
(statearr_32995[(8)] = inst_32925);

(statearr_32995[(9)] = inst_32928);

(statearr_32995[(10)] = inst_32926);

(statearr_32995[(11)] = inst_32927);

return statearr_32995;
})();
var statearr_32996_34362 = state_32978__$1;
(statearr_32996_34362[(2)] = null);

(statearr_32996_34362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (17))){
var inst_32944 = (state_32978[(7)]);
var inst_32948 = cljs.core.chunk_first(inst_32944);
var inst_32949 = cljs.core.chunk_rest(inst_32944);
var inst_32950 = cljs.core.count(inst_32948);
var inst_32925 = inst_32949;
var inst_32926 = inst_32948;
var inst_32927 = inst_32950;
var inst_32928 = (0);
var state_32978__$1 = (function (){var statearr_33002 = state_32978;
(statearr_33002[(8)] = inst_32925);

(statearr_33002[(9)] = inst_32928);

(statearr_33002[(10)] = inst_32926);

(statearr_33002[(11)] = inst_32927);

return statearr_33002;
})();
var statearr_33003_34363 = state_32978__$1;
(statearr_33003_34363[(2)] = null);

(statearr_33003_34363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (3))){
var inst_32976 = (state_32978[(2)]);
var state_32978__$1 = state_32978;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32978__$1,inst_32976);
} else {
if((state_val_32979 === (12))){
var inst_32964 = (state_32978[(2)]);
var state_32978__$1 = state_32978;
var statearr_33004_34364 = state_32978__$1;
(statearr_33004_34364[(2)] = inst_32964);

(statearr_33004_34364[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (2))){
var state_32978__$1 = state_32978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32978__$1,(4),in$);
} else {
if((state_val_32979 === (23))){
var inst_32972 = (state_32978[(2)]);
var state_32978__$1 = state_32978;
var statearr_33005_34365 = state_32978__$1;
(statearr_33005_34365[(2)] = inst_32972);

(statearr_33005_34365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (19))){
var inst_32959 = (state_32978[(2)]);
var state_32978__$1 = state_32978;
var statearr_33006_34366 = state_32978__$1;
(statearr_33006_34366[(2)] = inst_32959);

(statearr_33006_34366[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (11))){
var inst_32925 = (state_32978[(8)]);
var inst_32944 = (state_32978[(7)]);
var inst_32944__$1 = cljs.core.seq(inst_32925);
var state_32978__$1 = (function (){var statearr_33007 = state_32978;
(statearr_33007[(7)] = inst_32944__$1);

return statearr_33007;
})();
if(inst_32944__$1){
var statearr_33008_34367 = state_32978__$1;
(statearr_33008_34367[(1)] = (14));

} else {
var statearr_33009_34368 = state_32978__$1;
(statearr_33009_34368[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (9))){
var inst_32966 = (state_32978[(2)]);
var inst_32967 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32978__$1 = (function (){var statearr_33011 = state_32978;
(statearr_33011[(15)] = inst_32966);

return statearr_33011;
})();
if(cljs.core.truth_(inst_32967)){
var statearr_33013_34369 = state_32978__$1;
(statearr_33013_34369[(1)] = (21));

} else {
var statearr_33014_34370 = state_32978__$1;
(statearr_33014_34370[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (5))){
var inst_32883 = cljs.core.async.close_BANG_(out);
var state_32978__$1 = state_32978;
var statearr_33016_34371 = state_32978__$1;
(statearr_33016_34371[(2)] = inst_32883);

(statearr_33016_34371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (14))){
var inst_32944 = (state_32978[(7)]);
var inst_32946 = cljs.core.chunked_seq_QMARK_(inst_32944);
var state_32978__$1 = state_32978;
if(inst_32946){
var statearr_33018_34372 = state_32978__$1;
(statearr_33018_34372[(1)] = (17));

} else {
var statearr_33019_34373 = state_32978__$1;
(statearr_33019_34373[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (16))){
var inst_32962 = (state_32978[(2)]);
var state_32978__$1 = state_32978;
var statearr_33020_34374 = state_32978__$1;
(statearr_33020_34374[(2)] = inst_32962);

(statearr_33020_34374[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (10))){
var inst_32928 = (state_32978[(9)]);
var inst_32926 = (state_32978[(10)]);
var inst_32938 = cljs.core._nth(inst_32926,inst_32928);
var state_32978__$1 = state_32978;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32978__$1,(13),out,inst_32938);
} else {
if((state_val_32979 === (18))){
var inst_32944 = (state_32978[(7)]);
var inst_32953 = cljs.core.first(inst_32944);
var state_32978__$1 = state_32978;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32978__$1,(20),out,inst_32953);
} else {
if((state_val_32979 === (8))){
var inst_32928 = (state_32978[(9)]);
var inst_32927 = (state_32978[(11)]);
var inst_32930 = (inst_32928 < inst_32927);
var inst_32931 = inst_32930;
var state_32978__$1 = state_32978;
if(cljs.core.truth_(inst_32931)){
var statearr_33021_34426 = state_32978__$1;
(statearr_33021_34426[(1)] = (10));

} else {
var statearr_33022_34427 = state_32978__$1;
(statearr_33022_34427[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__30768__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30768__auto____0 = (function (){
var statearr_33023 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33023[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30768__auto__);

(statearr_33023[(1)] = (1));

return statearr_33023;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30768__auto____1 = (function (state_32978){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_32978);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e33024){var ex__30771__auto__ = e33024;
var statearr_33025_34428 = state_32978;
(statearr_33025_34428[(2)] = ex__30771__auto__);


if(cljs.core.seq((state_32978[(4)]))){
var statearr_33026_34429 = state_32978;
(statearr_33026_34429[(1)] = cljs.core.first((state_32978[(4)])));

} else {
throw ex__30771__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34432 = state_32978;
state_32978 = G__34432;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30768__auto__ = function(state_32978){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30768__auto____1.call(this,state_32978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30768__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30768__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30768__auto__;
})()
})();
var state__30962__auto__ = (function (){var statearr_33027 = f__30961__auto__();
(statearr_33027[(6)] = c__30960__auto__);

return statearr_33027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30962__auto__);
}));

return c__30960__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33033 = arguments.length;
switch (G__33033) {
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
var G__33039 = arguments.length;
switch (G__33039) {
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
var G__33043 = arguments.length;
switch (G__33043) {
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
var c__30960__auto___34478 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30961__auto__ = (function (){var switch__30767__auto__ = (function (state_33067){
var state_val_33068 = (state_33067[(1)]);
if((state_val_33068 === (7))){
var inst_33062 = (state_33067[(2)]);
var state_33067__$1 = state_33067;
var statearr_33069_34479 = state_33067__$1;
(statearr_33069_34479[(2)] = inst_33062);

(statearr_33069_34479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33068 === (1))){
var inst_33044 = null;
var state_33067__$1 = (function (){var statearr_33070 = state_33067;
(statearr_33070[(7)] = inst_33044);

return statearr_33070;
})();
var statearr_33071_34480 = state_33067__$1;
(statearr_33071_34480[(2)] = null);

(statearr_33071_34480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33068 === (4))){
var inst_33047 = (state_33067[(8)]);
var inst_33047__$1 = (state_33067[(2)]);
var inst_33048 = (inst_33047__$1 == null);
var inst_33049 = cljs.core.not(inst_33048);
var state_33067__$1 = (function (){var statearr_33072 = state_33067;
(statearr_33072[(8)] = inst_33047__$1);

return statearr_33072;
})();
if(inst_33049){
var statearr_33073_34481 = state_33067__$1;
(statearr_33073_34481[(1)] = (5));

} else {
var statearr_33075_34483 = state_33067__$1;
(statearr_33075_34483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33068 === (6))){
var state_33067__$1 = state_33067;
var statearr_33076_34484 = state_33067__$1;
(statearr_33076_34484[(2)] = null);

(statearr_33076_34484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33068 === (3))){
var inst_33064 = (state_33067[(2)]);
var inst_33065 = cljs.core.async.close_BANG_(out);
var state_33067__$1 = (function (){var statearr_33077 = state_33067;
(statearr_33077[(9)] = inst_33064);

return statearr_33077;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33067__$1,inst_33065);
} else {
if((state_val_33068 === (2))){
var state_33067__$1 = state_33067;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33067__$1,(4),ch);
} else {
if((state_val_33068 === (11))){
var inst_33047 = (state_33067[(8)]);
var inst_33056 = (state_33067[(2)]);
var inst_33044 = inst_33047;
var state_33067__$1 = (function (){var statearr_33078 = state_33067;
(statearr_33078[(10)] = inst_33056);

(statearr_33078[(7)] = inst_33044);

return statearr_33078;
})();
var statearr_33079_34487 = state_33067__$1;
(statearr_33079_34487[(2)] = null);

(statearr_33079_34487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33068 === (9))){
var inst_33047 = (state_33067[(8)]);
var state_33067__$1 = state_33067;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33067__$1,(11),out,inst_33047);
} else {
if((state_val_33068 === (5))){
var inst_33044 = (state_33067[(7)]);
var inst_33047 = (state_33067[(8)]);
var inst_33051 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33047,inst_33044);
var state_33067__$1 = state_33067;
if(inst_33051){
var statearr_33081_34492 = state_33067__$1;
(statearr_33081_34492[(1)] = (8));

} else {
var statearr_33082_34493 = state_33067__$1;
(statearr_33082_34493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33068 === (10))){
var inst_33059 = (state_33067[(2)]);
var state_33067__$1 = state_33067;
var statearr_33083_34494 = state_33067__$1;
(statearr_33083_34494[(2)] = inst_33059);

(statearr_33083_34494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33068 === (8))){
var inst_33044 = (state_33067[(7)]);
var tmp33080 = inst_33044;
var inst_33044__$1 = tmp33080;
var state_33067__$1 = (function (){var statearr_33084 = state_33067;
(statearr_33084[(7)] = inst_33044__$1);

return statearr_33084;
})();
var statearr_33085_34498 = state_33067__$1;
(statearr_33085_34498[(2)] = null);

(statearr_33085_34498[(1)] = (2));


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
var cljs$core$async$state_machine__30768__auto__ = null;
var cljs$core$async$state_machine__30768__auto____0 = (function (){
var statearr_33086 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33086[(0)] = cljs$core$async$state_machine__30768__auto__);

(statearr_33086[(1)] = (1));

return statearr_33086;
});
var cljs$core$async$state_machine__30768__auto____1 = (function (state_33067){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_33067);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e33087){var ex__30771__auto__ = e33087;
var statearr_33088_34501 = state_33067;
(statearr_33088_34501[(2)] = ex__30771__auto__);


if(cljs.core.seq((state_33067[(4)]))){
var statearr_33091_34506 = state_33067;
(statearr_33091_34506[(1)] = cljs.core.first((state_33067[(4)])));

} else {
throw ex__30771__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34510 = state_33067;
state_33067 = G__34510;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$state_machine__30768__auto__ = function(state_33067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30768__auto____1.call(this,state_33067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30768__auto____0;
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30768__auto____1;
return cljs$core$async$state_machine__30768__auto__;
})()
})();
var state__30962__auto__ = (function (){var statearr_33092 = f__30961__auto__();
(statearr_33092[(6)] = c__30960__auto___34478);

return statearr_33092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30962__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33094 = arguments.length;
switch (G__33094) {
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
var c__30960__auto___34523 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30961__auto__ = (function (){var switch__30767__auto__ = (function (state_33136){
var state_val_33137 = (state_33136[(1)]);
if((state_val_33137 === (7))){
var inst_33132 = (state_33136[(2)]);
var state_33136__$1 = state_33136;
var statearr_33139_34526 = state_33136__$1;
(statearr_33139_34526[(2)] = inst_33132);

(statearr_33139_34526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (1))){
var inst_33096 = (new Array(n));
var inst_33097 = inst_33096;
var inst_33098 = (0);
var state_33136__$1 = (function (){var statearr_33140 = state_33136;
(statearr_33140[(7)] = inst_33098);

(statearr_33140[(8)] = inst_33097);

return statearr_33140;
})();
var statearr_33141_34531 = state_33136__$1;
(statearr_33141_34531[(2)] = null);

(statearr_33141_34531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (4))){
var inst_33101 = (state_33136[(9)]);
var inst_33101__$1 = (state_33136[(2)]);
var inst_33102 = (inst_33101__$1 == null);
var inst_33103 = cljs.core.not(inst_33102);
var state_33136__$1 = (function (){var statearr_33142 = state_33136;
(statearr_33142[(9)] = inst_33101__$1);

return statearr_33142;
})();
if(inst_33103){
var statearr_33144_34532 = state_33136__$1;
(statearr_33144_34532[(1)] = (5));

} else {
var statearr_33145_34533 = state_33136__$1;
(statearr_33145_34533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (15))){
var inst_33126 = (state_33136[(2)]);
var state_33136__$1 = state_33136;
var statearr_33146_34549 = state_33136__$1;
(statearr_33146_34549[(2)] = inst_33126);

(statearr_33146_34549[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (13))){
var state_33136__$1 = state_33136;
var statearr_33147_34550 = state_33136__$1;
(statearr_33147_34550[(2)] = null);

(statearr_33147_34550[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (6))){
var inst_33098 = (state_33136[(7)]);
var inst_33119 = (inst_33098 > (0));
var state_33136__$1 = state_33136;
if(cljs.core.truth_(inst_33119)){
var statearr_33149_34551 = state_33136__$1;
(statearr_33149_34551[(1)] = (12));

} else {
var statearr_33150_34552 = state_33136__$1;
(statearr_33150_34552[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (3))){
var inst_33134 = (state_33136[(2)]);
var state_33136__$1 = state_33136;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33136__$1,inst_33134);
} else {
if((state_val_33137 === (12))){
var inst_33097 = (state_33136[(8)]);
var inst_33124 = cljs.core.vec(inst_33097);
var state_33136__$1 = state_33136;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33136__$1,(15),out,inst_33124);
} else {
if((state_val_33137 === (2))){
var state_33136__$1 = state_33136;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33136__$1,(4),ch);
} else {
if((state_val_33137 === (11))){
var inst_33113 = (state_33136[(2)]);
var inst_33114 = (new Array(n));
var inst_33097 = inst_33114;
var inst_33098 = (0);
var state_33136__$1 = (function (){var statearr_33152 = state_33136;
(statearr_33152[(10)] = inst_33113);

(statearr_33152[(7)] = inst_33098);

(statearr_33152[(8)] = inst_33097);

return statearr_33152;
})();
var statearr_33153_34553 = state_33136__$1;
(statearr_33153_34553[(2)] = null);

(statearr_33153_34553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (9))){
var inst_33097 = (state_33136[(8)]);
var inst_33111 = cljs.core.vec(inst_33097);
var state_33136__$1 = state_33136;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33136__$1,(11),out,inst_33111);
} else {
if((state_val_33137 === (5))){
var inst_33101 = (state_33136[(9)]);
var inst_33106 = (state_33136[(11)]);
var inst_33098 = (state_33136[(7)]);
var inst_33097 = (state_33136[(8)]);
var inst_33105 = (inst_33097[inst_33098] = inst_33101);
var inst_33106__$1 = (inst_33098 + (1));
var inst_33107 = (inst_33106__$1 < n);
var state_33136__$1 = (function (){var statearr_33154 = state_33136;
(statearr_33154[(11)] = inst_33106__$1);

(statearr_33154[(12)] = inst_33105);

return statearr_33154;
})();
if(cljs.core.truth_(inst_33107)){
var statearr_33155_34554 = state_33136__$1;
(statearr_33155_34554[(1)] = (8));

} else {
var statearr_33156_34555 = state_33136__$1;
(statearr_33156_34555[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (14))){
var inst_33129 = (state_33136[(2)]);
var inst_33130 = cljs.core.async.close_BANG_(out);
var state_33136__$1 = (function (){var statearr_33158 = state_33136;
(statearr_33158[(13)] = inst_33129);

return statearr_33158;
})();
var statearr_33159_34557 = state_33136__$1;
(statearr_33159_34557[(2)] = inst_33130);

(statearr_33159_34557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (10))){
var inst_33117 = (state_33136[(2)]);
var state_33136__$1 = state_33136;
var statearr_33160_34558 = state_33136__$1;
(statearr_33160_34558[(2)] = inst_33117);

(statearr_33160_34558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (8))){
var inst_33106 = (state_33136[(11)]);
var inst_33097 = (state_33136[(8)]);
var tmp33157 = inst_33097;
var inst_33097__$1 = tmp33157;
var inst_33098 = inst_33106;
var state_33136__$1 = (function (){var statearr_33161 = state_33136;
(statearr_33161[(7)] = inst_33098);

(statearr_33161[(8)] = inst_33097__$1);

return statearr_33161;
})();
var statearr_33162_34559 = state_33136__$1;
(statearr_33162_34559[(2)] = null);

(statearr_33162_34559[(1)] = (2));


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
var cljs$core$async$state_machine__30768__auto__ = null;
var cljs$core$async$state_machine__30768__auto____0 = (function (){
var statearr_33163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33163[(0)] = cljs$core$async$state_machine__30768__auto__);

(statearr_33163[(1)] = (1));

return statearr_33163;
});
var cljs$core$async$state_machine__30768__auto____1 = (function (state_33136){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_33136);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e33164){var ex__30771__auto__ = e33164;
var statearr_33165_34560 = state_33136;
(statearr_33165_34560[(2)] = ex__30771__auto__);


if(cljs.core.seq((state_33136[(4)]))){
var statearr_33166_34562 = state_33136;
(statearr_33166_34562[(1)] = cljs.core.first((state_33136[(4)])));

} else {
throw ex__30771__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34571 = state_33136;
state_33136 = G__34571;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$state_machine__30768__auto__ = function(state_33136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30768__auto____1.call(this,state_33136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30768__auto____0;
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30768__auto____1;
return cljs$core$async$state_machine__30768__auto__;
})()
})();
var state__30962__auto__ = (function (){var statearr_33167 = f__30961__auto__();
(statearr_33167[(6)] = c__30960__auto___34523);

return statearr_33167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30962__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33169 = arguments.length;
switch (G__33169) {
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
var c__30960__auto___34573 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30961__auto__ = (function (){var switch__30767__auto__ = (function (state_33213){
var state_val_33214 = (state_33213[(1)]);
if((state_val_33214 === (7))){
var inst_33209 = (state_33213[(2)]);
var state_33213__$1 = state_33213;
var statearr_33215_34574 = state_33213__$1;
(statearr_33215_34574[(2)] = inst_33209);

(statearr_33215_34574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33214 === (1))){
var inst_33172 = [];
var inst_33173 = inst_33172;
var inst_33174 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33213__$1 = (function (){var statearr_33216 = state_33213;
(statearr_33216[(7)] = inst_33173);

(statearr_33216[(8)] = inst_33174);

return statearr_33216;
})();
var statearr_33217_34575 = state_33213__$1;
(statearr_33217_34575[(2)] = null);

(statearr_33217_34575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33214 === (4))){
var inst_33177 = (state_33213[(9)]);
var inst_33177__$1 = (state_33213[(2)]);
var inst_33178 = (inst_33177__$1 == null);
var inst_33179 = cljs.core.not(inst_33178);
var state_33213__$1 = (function (){var statearr_33218 = state_33213;
(statearr_33218[(9)] = inst_33177__$1);

return statearr_33218;
})();
if(inst_33179){
var statearr_33219_34576 = state_33213__$1;
(statearr_33219_34576[(1)] = (5));

} else {
var statearr_33220_34577 = state_33213__$1;
(statearr_33220_34577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33214 === (15))){
var inst_33203 = (state_33213[(2)]);
var state_33213__$1 = state_33213;
var statearr_33221_34578 = state_33213__$1;
(statearr_33221_34578[(2)] = inst_33203);

(statearr_33221_34578[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33214 === (13))){
var state_33213__$1 = state_33213;
var statearr_33222_34579 = state_33213__$1;
(statearr_33222_34579[(2)] = null);

(statearr_33222_34579[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33214 === (6))){
var inst_33173 = (state_33213[(7)]);
var inst_33198 = inst_33173.length;
var inst_33199 = (inst_33198 > (0));
var state_33213__$1 = state_33213;
if(cljs.core.truth_(inst_33199)){
var statearr_33223_34581 = state_33213__$1;
(statearr_33223_34581[(1)] = (12));

} else {
var statearr_33224_34585 = state_33213__$1;
(statearr_33224_34585[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33214 === (3))){
var inst_33211 = (state_33213[(2)]);
var state_33213__$1 = state_33213;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33213__$1,inst_33211);
} else {
if((state_val_33214 === (12))){
var inst_33173 = (state_33213[(7)]);
var inst_33201 = cljs.core.vec(inst_33173);
var state_33213__$1 = state_33213;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33213__$1,(15),out,inst_33201);
} else {
if((state_val_33214 === (2))){
var state_33213__$1 = state_33213;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33213__$1,(4),ch);
} else {
if((state_val_33214 === (11))){
var inst_33177 = (state_33213[(9)]);
var inst_33181 = (state_33213[(10)]);
var inst_33191 = (state_33213[(2)]);
var inst_33192 = [];
var inst_33193 = inst_33192.push(inst_33177);
var inst_33173 = inst_33192;
var inst_33174 = inst_33181;
var state_33213__$1 = (function (){var statearr_33225 = state_33213;
(statearr_33225[(7)] = inst_33173);

(statearr_33225[(11)] = inst_33191);

(statearr_33225[(8)] = inst_33174);

(statearr_33225[(12)] = inst_33193);

return statearr_33225;
})();
var statearr_33226_34587 = state_33213__$1;
(statearr_33226_34587[(2)] = null);

(statearr_33226_34587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33214 === (9))){
var inst_33173 = (state_33213[(7)]);
var inst_33189 = cljs.core.vec(inst_33173);
var state_33213__$1 = state_33213;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33213__$1,(11),out,inst_33189);
} else {
if((state_val_33214 === (5))){
var inst_33177 = (state_33213[(9)]);
var inst_33181 = (state_33213[(10)]);
var inst_33174 = (state_33213[(8)]);
var inst_33181__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33177) : f.call(null,inst_33177));
var inst_33182 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33181__$1,inst_33174);
var inst_33183 = cljs.core.keyword_identical_QMARK_(inst_33174,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33184 = ((inst_33182) || (inst_33183));
var state_33213__$1 = (function (){var statearr_33227 = state_33213;
(statearr_33227[(10)] = inst_33181__$1);

return statearr_33227;
})();
if(cljs.core.truth_(inst_33184)){
var statearr_33228_34588 = state_33213__$1;
(statearr_33228_34588[(1)] = (8));

} else {
var statearr_33229_34589 = state_33213__$1;
(statearr_33229_34589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33214 === (14))){
var inst_33206 = (state_33213[(2)]);
var inst_33207 = cljs.core.async.close_BANG_(out);
var state_33213__$1 = (function (){var statearr_33231 = state_33213;
(statearr_33231[(13)] = inst_33206);

return statearr_33231;
})();
var statearr_33232_34590 = state_33213__$1;
(statearr_33232_34590[(2)] = inst_33207);

(statearr_33232_34590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33214 === (10))){
var inst_33196 = (state_33213[(2)]);
var state_33213__$1 = state_33213;
var statearr_33233_34596 = state_33213__$1;
(statearr_33233_34596[(2)] = inst_33196);

(statearr_33233_34596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33214 === (8))){
var inst_33173 = (state_33213[(7)]);
var inst_33177 = (state_33213[(9)]);
var inst_33181 = (state_33213[(10)]);
var inst_33186 = inst_33173.push(inst_33177);
var tmp33230 = inst_33173;
var inst_33173__$1 = tmp33230;
var inst_33174 = inst_33181;
var state_33213__$1 = (function (){var statearr_33234 = state_33213;
(statearr_33234[(7)] = inst_33173__$1);

(statearr_33234[(14)] = inst_33186);

(statearr_33234[(8)] = inst_33174);

return statearr_33234;
})();
var statearr_33235_34597 = state_33213__$1;
(statearr_33235_34597[(2)] = null);

(statearr_33235_34597[(1)] = (2));


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
var cljs$core$async$state_machine__30768__auto__ = null;
var cljs$core$async$state_machine__30768__auto____0 = (function (){
var statearr_33236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33236[(0)] = cljs$core$async$state_machine__30768__auto__);

(statearr_33236[(1)] = (1));

return statearr_33236;
});
var cljs$core$async$state_machine__30768__auto____1 = (function (state_33213){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_33213);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e33237){var ex__30771__auto__ = e33237;
var statearr_33238_34598 = state_33213;
(statearr_33238_34598[(2)] = ex__30771__auto__);


if(cljs.core.seq((state_33213[(4)]))){
var statearr_33239_34599 = state_33213;
(statearr_33239_34599[(1)] = cljs.core.first((state_33213[(4)])));

} else {
throw ex__30771__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34600 = state_33213;
state_33213 = G__34600;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$state_machine__30768__auto__ = function(state_33213){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30768__auto____1.call(this,state_33213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30768__auto____0;
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30768__auto____1;
return cljs$core$async$state_machine__30768__auto__;
})()
})();
var state__30962__auto__ = (function (){var statearr_33240 = f__30961__auto__();
(statearr_33240[(6)] = c__30960__auto___34573);

return statearr_33240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30962__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
