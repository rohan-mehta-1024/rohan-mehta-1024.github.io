goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31028 = arguments.length;
switch (G__31028) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31029 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31029 = (function (f,blockable,meta31030){
this.f = f;
this.blockable = blockable;
this.meta31030 = meta31030;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31031,meta31030__$1){
var self__ = this;
var _31031__$1 = this;
return (new cljs.core.async.t_cljs$core$async31029(self__.f,self__.blockable,meta31030__$1));
}));

(cljs.core.async.t_cljs$core$async31029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31031){
var self__ = this;
var _31031__$1 = this;
return self__.meta31030;
}));

(cljs.core.async.t_cljs$core$async31029.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31029.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31029.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31029.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31029.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31030","meta31030",1223661469,null)], null);
}));

(cljs.core.async.t_cljs$core$async31029.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31029.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31029");

(cljs.core.async.t_cljs$core$async31029.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31029");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31029.
 */
cljs.core.async.__GT_t_cljs$core$async31029 = (function cljs$core$async$__GT_t_cljs$core$async31029(f__$1,blockable__$1,meta31030){
return (new cljs.core.async.t_cljs$core$async31029(f__$1,blockable__$1,meta31030));
});

}

return (new cljs.core.async.t_cljs$core$async31029(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31042 = arguments.length;
switch (G__31042) {
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
var G__31044 = arguments.length;
switch (G__31044) {
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
var G__31046 = arguments.length;
switch (G__31046) {
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
var val_33268 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33268) : fn1.call(null,val_33268));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33268) : fn1.call(null,val_33268));
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
var G__31076 = arguments.length;
switch (G__31076) {
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
var n__4613__auto___33283 = n;
var x_33284 = (0);
while(true){
if((x_33284 < n__4613__auto___33283)){
(a[x_33284] = x_33284);

var G__33286 = (x_33284 + (1));
x_33284 = G__33286;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31093 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31093 = (function (flag,meta31094){
this.flag = flag;
this.meta31094 = meta31094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31095,meta31094__$1){
var self__ = this;
var _31095__$1 = this;
return (new cljs.core.async.t_cljs$core$async31093(self__.flag,meta31094__$1));
}));

(cljs.core.async.t_cljs$core$async31093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31095){
var self__ = this;
var _31095__$1 = this;
return self__.meta31094;
}));

(cljs.core.async.t_cljs$core$async31093.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31093.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31093.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31093.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31094","meta31094",-1183335085,null)], null);
}));

(cljs.core.async.t_cljs$core$async31093.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31093");

(cljs.core.async.t_cljs$core$async31093.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31093");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31093.
 */
cljs.core.async.__GT_t_cljs$core$async31093 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31093(flag__$1,meta31094){
return (new cljs.core.async.t_cljs$core$async31093(flag__$1,meta31094));
});

}

return (new cljs.core.async.t_cljs$core$async31093(flag,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31105 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31103_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31105) : fret.call(null,G__31105));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31104_SHARP_){
var G__31106 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31104_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31106) : fret.call(null,G__31106));
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
var G__33332 = (i + (1));
i = G__33332;
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
var len__4736__auto___33333 = arguments.length;
var i__4737__auto___33334 = (0);
while(true){
if((i__4737__auto___33334 < len__4736__auto___33333)){
args__4742__auto__.push((arguments[i__4737__auto___33334]));

var G__33335 = (i__4737__auto___33334 + (1));
i__4737__auto___33334 = G__33335;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31110){
var map__31111 = p__31110;
var map__31111__$1 = (((((!((map__31111 == null))))?(((((map__31111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31111):map__31111);
var opts = map__31111__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31108){
var G__31109 = cljs.core.first(seq31108);
var seq31108__$1 = cljs.core.next(seq31108);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31109,seq31108__$1);
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
var G__31149 = arguments.length;
switch (G__31149) {
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
var c__30937__auto___33337 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30938__auto__ = (function (){var switch__30739__auto__ = (function (state_31183){
var state_val_31184 = (state_31183[(1)]);
if((state_val_31184 === (7))){
var inst_31178 = (state_31183[(2)]);
var state_31183__$1 = state_31183;
var statearr_31186_33338 = state_31183__$1;
(statearr_31186_33338[(2)] = inst_31178);

(statearr_31186_33338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31184 === (1))){
var state_31183__$1 = state_31183;
var statearr_31187_33339 = state_31183__$1;
(statearr_31187_33339[(2)] = null);

(statearr_31187_33339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31184 === (4))){
var inst_31152 = (state_31183[(7)]);
var inst_31152__$1 = (state_31183[(2)]);
var inst_31153 = (inst_31152__$1 == null);
var state_31183__$1 = (function (){var statearr_31188 = state_31183;
(statearr_31188[(7)] = inst_31152__$1);

return statearr_31188;
})();
if(cljs.core.truth_(inst_31153)){
var statearr_31189_33340 = state_31183__$1;
(statearr_31189_33340[(1)] = (5));

} else {
var statearr_31190_33341 = state_31183__$1;
(statearr_31190_33341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31184 === (13))){
var state_31183__$1 = state_31183;
var statearr_31191_33342 = state_31183__$1;
(statearr_31191_33342[(2)] = null);

(statearr_31191_33342[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31184 === (6))){
var inst_31152 = (state_31183[(7)]);
var state_31183__$1 = state_31183;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31183__$1,(11),to,inst_31152);
} else {
if((state_val_31184 === (3))){
var inst_31181 = (state_31183[(2)]);
var state_31183__$1 = state_31183;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31183__$1,inst_31181);
} else {
if((state_val_31184 === (12))){
var state_31183__$1 = state_31183;
var statearr_31192_33343 = state_31183__$1;
(statearr_31192_33343[(2)] = null);

(statearr_31192_33343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31184 === (2))){
var state_31183__$1 = state_31183;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31183__$1,(4),from);
} else {
if((state_val_31184 === (11))){
var inst_31171 = (state_31183[(2)]);
var state_31183__$1 = state_31183;
if(cljs.core.truth_(inst_31171)){
var statearr_31194_33344 = state_31183__$1;
(statearr_31194_33344[(1)] = (12));

} else {
var statearr_31195_33345 = state_31183__$1;
(statearr_31195_33345[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31184 === (9))){
var state_31183__$1 = state_31183;
var statearr_31196_33349 = state_31183__$1;
(statearr_31196_33349[(2)] = null);

(statearr_31196_33349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31184 === (5))){
var state_31183__$1 = state_31183;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31197_33350 = state_31183__$1;
(statearr_31197_33350[(1)] = (8));

} else {
var statearr_31198_33351 = state_31183__$1;
(statearr_31198_33351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31184 === (14))){
var inst_31176 = (state_31183[(2)]);
var state_31183__$1 = state_31183;
var statearr_31199_33353 = state_31183__$1;
(statearr_31199_33353[(2)] = inst_31176);

(statearr_31199_33353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31184 === (10))){
var inst_31168 = (state_31183[(2)]);
var state_31183__$1 = state_31183;
var statearr_31200_33369 = state_31183__$1;
(statearr_31200_33369[(2)] = inst_31168);

(statearr_31200_33369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31184 === (8))){
var inst_31165 = cljs.core.async.close_BANG_(to);
var state_31183__$1 = state_31183;
var statearr_31203_33370 = state_31183__$1;
(statearr_31203_33370[(2)] = inst_31165);

(statearr_31203_33370[(1)] = (10));


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
var cljs$core$async$state_machine__30740__auto__ = null;
var cljs$core$async$state_machine__30740__auto____0 = (function (){
var statearr_31204 = [null,null,null,null,null,null,null,null];
(statearr_31204[(0)] = cljs$core$async$state_machine__30740__auto__);

(statearr_31204[(1)] = (1));

return statearr_31204;
});
var cljs$core$async$state_machine__30740__auto____1 = (function (state_31183){
while(true){
var ret_value__30741__auto__ = (function (){try{while(true){
var result__30742__auto__ = switch__30739__auto__(state_31183);
if(cljs.core.keyword_identical_QMARK_(result__30742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30742__auto__;
}
break;
}
}catch (e31205){var ex__30743__auto__ = e31205;
var statearr_31206_33371 = state_31183;
(statearr_31206_33371[(2)] = ex__30743__auto__);


if(cljs.core.seq((state_31183[(4)]))){
var statearr_31207_33372 = state_31183;
(statearr_31207_33372[(1)] = cljs.core.first((state_31183[(4)])));

} else {
throw ex__30743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33373 = state_31183;
state_31183 = G__33373;
continue;
} else {
return ret_value__30741__auto__;
}
break;
}
});
cljs$core$async$state_machine__30740__auto__ = function(state_31183){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30740__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30740__auto____1.call(this,state_31183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30740__auto____0;
cljs$core$async$state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30740__auto____1;
return cljs$core$async$state_machine__30740__auto__;
})()
})();
var state__30939__auto__ = (function (){var statearr_31211 = f__30938__auto__();
(statearr_31211[(6)] = c__30937__auto___33337);

return statearr_31211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30939__auto__);
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
var process = (function (p__31226){
var vec__31227 = p__31226;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31227,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31227,(1),null);
var job = vec__31227;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30937__auto___33376 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30938__auto__ = (function (){var switch__30739__auto__ = (function (state_31234){
var state_val_31235 = (state_31234[(1)]);
if((state_val_31235 === (1))){
var state_31234__$1 = state_31234;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31234__$1,(2),res,v);
} else {
if((state_val_31235 === (2))){
var inst_31231 = (state_31234[(2)]);
var inst_31232 = cljs.core.async.close_BANG_(res);
var state_31234__$1 = (function (){var statearr_31236 = state_31234;
(statearr_31236[(7)] = inst_31231);

return statearr_31236;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31234__$1,inst_31232);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30740__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30740__auto____0 = (function (){
var statearr_31240 = [null,null,null,null,null,null,null,null];
(statearr_31240[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30740__auto__);

(statearr_31240[(1)] = (1));

return statearr_31240;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30740__auto____1 = (function (state_31234){
while(true){
var ret_value__30741__auto__ = (function (){try{while(true){
var result__30742__auto__ = switch__30739__auto__(state_31234);
if(cljs.core.keyword_identical_QMARK_(result__30742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30742__auto__;
}
break;
}
}catch (e31241){var ex__30743__auto__ = e31241;
var statearr_31242_33388 = state_31234;
(statearr_31242_33388[(2)] = ex__30743__auto__);


if(cljs.core.seq((state_31234[(4)]))){
var statearr_31243_33389 = state_31234;
(statearr_31243_33389[(1)] = cljs.core.first((state_31234[(4)])));

} else {
throw ex__30743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33390 = state_31234;
state_31234 = G__33390;
continue;
} else {
return ret_value__30741__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30740__auto__ = function(state_31234){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30740__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30740__auto____1.call(this,state_31234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30740__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30740__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30740__auto__;
})()
})();
var state__30939__auto__ = (function (){var statearr_31244 = f__30938__auto__();
(statearr_31244[(6)] = c__30937__auto___33376);

return statearr_31244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30939__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31247){
var vec__31248 = p__31247;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31248,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31248,(1),null);
var job = vec__31248;
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
var n__4613__auto___33398 = n;
var __33401 = (0);
while(true){
if((__33401 < n__4613__auto___33398)){
var G__31257_33406 = type;
var G__31257_33407__$1 = (((G__31257_33406 instanceof cljs.core.Keyword))?G__31257_33406.fqn:null);
switch (G__31257_33407__$1) {
case "compute":
var c__30937__auto___33409 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33401,c__30937__auto___33409,G__31257_33406,G__31257_33407__$1,n__4613__auto___33398,jobs,results,process,async){
return (function (){
var f__30938__auto__ = (function (){var switch__30739__auto__ = ((function (__33401,c__30937__auto___33409,G__31257_33406,G__31257_33407__$1,n__4613__auto___33398,jobs,results,process,async){
return (function (state_31270){
var state_val_31271 = (state_31270[(1)]);
if((state_val_31271 === (1))){
var state_31270__$1 = state_31270;
var statearr_31272_33410 = state_31270__$1;
(statearr_31272_33410[(2)] = null);

(statearr_31272_33410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31271 === (2))){
var state_31270__$1 = state_31270;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31270__$1,(4),jobs);
} else {
if((state_val_31271 === (3))){
var inst_31268 = (state_31270[(2)]);
var state_31270__$1 = state_31270;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31270__$1,inst_31268);
} else {
if((state_val_31271 === (4))){
var inst_31260 = (state_31270[(2)]);
var inst_31261 = process(inst_31260);
var state_31270__$1 = state_31270;
if(cljs.core.truth_(inst_31261)){
var statearr_31273_33411 = state_31270__$1;
(statearr_31273_33411[(1)] = (5));

} else {
var statearr_31274_33412 = state_31270__$1;
(statearr_31274_33412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31271 === (5))){
var state_31270__$1 = state_31270;
var statearr_31275_33417 = state_31270__$1;
(statearr_31275_33417[(2)] = null);

(statearr_31275_33417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31271 === (6))){
var state_31270__$1 = state_31270;
var statearr_31276_33418 = state_31270__$1;
(statearr_31276_33418[(2)] = null);

(statearr_31276_33418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31271 === (7))){
var inst_31266 = (state_31270[(2)]);
var state_31270__$1 = state_31270;
var statearr_31277_33419 = state_31270__$1;
(statearr_31277_33419[(2)] = inst_31266);

(statearr_31277_33419[(1)] = (3));


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
});})(__33401,c__30937__auto___33409,G__31257_33406,G__31257_33407__$1,n__4613__auto___33398,jobs,results,process,async))
;
return ((function (__33401,switch__30739__auto__,c__30937__auto___33409,G__31257_33406,G__31257_33407__$1,n__4613__auto___33398,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30740__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30740__auto____0 = (function (){
var statearr_31282 = [null,null,null,null,null,null,null];
(statearr_31282[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30740__auto__);

(statearr_31282[(1)] = (1));

return statearr_31282;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30740__auto____1 = (function (state_31270){
while(true){
var ret_value__30741__auto__ = (function (){try{while(true){
var result__30742__auto__ = switch__30739__auto__(state_31270);
if(cljs.core.keyword_identical_QMARK_(result__30742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30742__auto__;
}
break;
}
}catch (e31283){var ex__30743__auto__ = e31283;
var statearr_31284_33420 = state_31270;
(statearr_31284_33420[(2)] = ex__30743__auto__);


if(cljs.core.seq((state_31270[(4)]))){
var statearr_31285_33421 = state_31270;
(statearr_31285_33421[(1)] = cljs.core.first((state_31270[(4)])));

} else {
throw ex__30743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33422 = state_31270;
state_31270 = G__33422;
continue;
} else {
return ret_value__30741__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30740__auto__ = function(state_31270){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30740__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30740__auto____1.call(this,state_31270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30740__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30740__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30740__auto__;
})()
;})(__33401,switch__30739__auto__,c__30937__auto___33409,G__31257_33406,G__31257_33407__$1,n__4613__auto___33398,jobs,results,process,async))
})();
var state__30939__auto__ = (function (){var statearr_31288 = f__30938__auto__();
(statearr_31288[(6)] = c__30937__auto___33409);

return statearr_31288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30939__auto__);
});})(__33401,c__30937__auto___33409,G__31257_33406,G__31257_33407__$1,n__4613__auto___33398,jobs,results,process,async))
);


break;
case "async":
var c__30937__auto___33423 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33401,c__30937__auto___33423,G__31257_33406,G__31257_33407__$1,n__4613__auto___33398,jobs,results,process,async){
return (function (){
var f__30938__auto__ = (function (){var switch__30739__auto__ = ((function (__33401,c__30937__auto___33423,G__31257_33406,G__31257_33407__$1,n__4613__auto___33398,jobs,results,process,async){
return (function (state_31307){
var state_val_31308 = (state_31307[(1)]);
if((state_val_31308 === (1))){
var state_31307__$1 = state_31307;
var statearr_31311_33424 = state_31307__$1;
(statearr_31311_33424[(2)] = null);

(statearr_31311_33424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31308 === (2))){
var state_31307__$1 = state_31307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31307__$1,(4),jobs);
} else {
if((state_val_31308 === (3))){
var inst_31305 = (state_31307[(2)]);
var state_31307__$1 = state_31307;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31307__$1,inst_31305);
} else {
if((state_val_31308 === (4))){
var inst_31297 = (state_31307[(2)]);
var inst_31298 = async(inst_31297);
var state_31307__$1 = state_31307;
if(cljs.core.truth_(inst_31298)){
var statearr_31312_33431 = state_31307__$1;
(statearr_31312_33431[(1)] = (5));

} else {
var statearr_31315_33432 = state_31307__$1;
(statearr_31315_33432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31308 === (5))){
var state_31307__$1 = state_31307;
var statearr_31316_33433 = state_31307__$1;
(statearr_31316_33433[(2)] = null);

(statearr_31316_33433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31308 === (6))){
var state_31307__$1 = state_31307;
var statearr_31317_33435 = state_31307__$1;
(statearr_31317_33435[(2)] = null);

(statearr_31317_33435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31308 === (7))){
var inst_31303 = (state_31307[(2)]);
var state_31307__$1 = state_31307;
var statearr_31318_33436 = state_31307__$1;
(statearr_31318_33436[(2)] = inst_31303);

(statearr_31318_33436[(1)] = (3));


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
});})(__33401,c__30937__auto___33423,G__31257_33406,G__31257_33407__$1,n__4613__auto___33398,jobs,results,process,async))
;
return ((function (__33401,switch__30739__auto__,c__30937__auto___33423,G__31257_33406,G__31257_33407__$1,n__4613__auto___33398,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30740__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30740__auto____0 = (function (){
var statearr_31319 = [null,null,null,null,null,null,null];
(statearr_31319[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30740__auto__);

(statearr_31319[(1)] = (1));

return statearr_31319;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30740__auto____1 = (function (state_31307){
while(true){
var ret_value__30741__auto__ = (function (){try{while(true){
var result__30742__auto__ = switch__30739__auto__(state_31307);
if(cljs.core.keyword_identical_QMARK_(result__30742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30742__auto__;
}
break;
}
}catch (e31320){var ex__30743__auto__ = e31320;
var statearr_31321_33437 = state_31307;
(statearr_31321_33437[(2)] = ex__30743__auto__);


if(cljs.core.seq((state_31307[(4)]))){
var statearr_31322_33438 = state_31307;
(statearr_31322_33438[(1)] = cljs.core.first((state_31307[(4)])));

} else {
throw ex__30743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33441 = state_31307;
state_31307 = G__33441;
continue;
} else {
return ret_value__30741__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30740__auto__ = function(state_31307){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30740__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30740__auto____1.call(this,state_31307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30740__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30740__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30740__auto__;
})()
;})(__33401,switch__30739__auto__,c__30937__auto___33423,G__31257_33406,G__31257_33407__$1,n__4613__auto___33398,jobs,results,process,async))
})();
var state__30939__auto__ = (function (){var statearr_31323 = f__30938__auto__();
(statearr_31323[(6)] = c__30937__auto___33423);

return statearr_31323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30939__auto__);
});})(__33401,c__30937__auto___33423,G__31257_33406,G__31257_33407__$1,n__4613__auto___33398,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31257_33407__$1)].join('')));

}

var G__33446 = (__33401 + (1));
__33401 = G__33446;
continue;
} else {
}
break;
}

var c__30937__auto___33447 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30938__auto__ = (function (){var switch__30739__auto__ = (function (state_31345){
var state_val_31346 = (state_31345[(1)]);
if((state_val_31346 === (7))){
var inst_31341 = (state_31345[(2)]);
var state_31345__$1 = state_31345;
var statearr_31347_33448 = state_31345__$1;
(statearr_31347_33448[(2)] = inst_31341);

(statearr_31347_33448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (1))){
var state_31345__$1 = state_31345;
var statearr_31348_33451 = state_31345__$1;
(statearr_31348_33451[(2)] = null);

(statearr_31348_33451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (4))){
var inst_31326 = (state_31345[(7)]);
var inst_31326__$1 = (state_31345[(2)]);
var inst_31327 = (inst_31326__$1 == null);
var state_31345__$1 = (function (){var statearr_31349 = state_31345;
(statearr_31349[(7)] = inst_31326__$1);

return statearr_31349;
})();
if(cljs.core.truth_(inst_31327)){
var statearr_31350_33452 = state_31345__$1;
(statearr_31350_33452[(1)] = (5));

} else {
var statearr_31356_33453 = state_31345__$1;
(statearr_31356_33453[(1)] = (6));

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
var state_31345__$1 = (function (){var statearr_31361 = state_31345;
(statearr_31361[(8)] = inst_31331__$1);

return statearr_31361;
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
var state_31345__$1 = (function (){var statearr_31362 = state_31345;
(statearr_31362[(9)] = inst_31338);

return statearr_31362;
})();
var statearr_31363_33461 = state_31345__$1;
(statearr_31363_33461[(2)] = null);

(statearr_31363_33461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (5))){
var inst_31329 = cljs.core.async.close_BANG_(jobs);
var state_31345__$1 = state_31345;
var statearr_31364_33462 = state_31345__$1;
(statearr_31364_33462[(2)] = inst_31329);

(statearr_31364_33462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (8))){
var inst_31331 = (state_31345[(8)]);
var inst_31336 = (state_31345[(2)]);
var state_31345__$1 = (function (){var statearr_31370 = state_31345;
(statearr_31370[(10)] = inst_31336);

return statearr_31370;
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
var cljs$core$async$pipeline_STAR__$_state_machine__30740__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30740__auto____0 = (function (){
var statearr_31371 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31371[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30740__auto__);

(statearr_31371[(1)] = (1));

return statearr_31371;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30740__auto____1 = (function (state_31345){
while(true){
var ret_value__30741__auto__ = (function (){try{while(true){
var result__30742__auto__ = switch__30739__auto__(state_31345);
if(cljs.core.keyword_identical_QMARK_(result__30742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30742__auto__;
}
break;
}
}catch (e31372){var ex__30743__auto__ = e31372;
var statearr_31373_33463 = state_31345;
(statearr_31373_33463[(2)] = ex__30743__auto__);


if(cljs.core.seq((state_31345[(4)]))){
var statearr_31374_33464 = state_31345;
(statearr_31374_33464[(1)] = cljs.core.first((state_31345[(4)])));

} else {
throw ex__30743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33468 = state_31345;
state_31345 = G__33468;
continue;
} else {
return ret_value__30741__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30740__auto__ = function(state_31345){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30740__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30740__auto____1.call(this,state_31345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30740__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30740__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30740__auto__;
})()
})();
var state__30939__auto__ = (function (){var statearr_31375 = f__30938__auto__();
(statearr_31375[(6)] = c__30937__auto___33447);

return statearr_31375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30939__auto__);
}));


var c__30937__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30938__auto__ = (function (){var switch__30739__auto__ = (function (state_31417){
var state_val_31418 = (state_31417[(1)]);
if((state_val_31418 === (7))){
var inst_31409 = (state_31417[(2)]);
var state_31417__$1 = state_31417;
var statearr_31419_33469 = state_31417__$1;
(statearr_31419_33469[(2)] = inst_31409);

(statearr_31419_33469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (20))){
var state_31417__$1 = state_31417;
var statearr_31420_33470 = state_31417__$1;
(statearr_31420_33470[(2)] = null);

(statearr_31420_33470[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (1))){
var state_31417__$1 = state_31417;
var statearr_31421_33471 = state_31417__$1;
(statearr_31421_33471[(2)] = null);

(statearr_31421_33471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (4))){
var inst_31378 = (state_31417[(7)]);
var inst_31378__$1 = (state_31417[(2)]);
var inst_31379 = (inst_31378__$1 == null);
var state_31417__$1 = (function (){var statearr_31422 = state_31417;
(statearr_31422[(7)] = inst_31378__$1);

return statearr_31422;
})();
if(cljs.core.truth_(inst_31379)){
var statearr_31423_33472 = state_31417__$1;
(statearr_31423_33472[(1)] = (5));

} else {
var statearr_31424_33473 = state_31417__$1;
(statearr_31424_33473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (15))){
var inst_31391 = (state_31417[(8)]);
var state_31417__$1 = state_31417;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31417__$1,(18),to,inst_31391);
} else {
if((state_val_31418 === (21))){
var inst_31404 = (state_31417[(2)]);
var state_31417__$1 = state_31417;
var statearr_31425_33474 = state_31417__$1;
(statearr_31425_33474[(2)] = inst_31404);

(statearr_31425_33474[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (13))){
var inst_31406 = (state_31417[(2)]);
var state_31417__$1 = (function (){var statearr_31426 = state_31417;
(statearr_31426[(9)] = inst_31406);

return statearr_31426;
})();
var statearr_31427_33475 = state_31417__$1;
(statearr_31427_33475[(2)] = null);

(statearr_31427_33475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (6))){
var inst_31378 = (state_31417[(7)]);
var state_31417__$1 = state_31417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31417__$1,(11),inst_31378);
} else {
if((state_val_31418 === (17))){
var inst_31399 = (state_31417[(2)]);
var state_31417__$1 = state_31417;
if(cljs.core.truth_(inst_31399)){
var statearr_31428_33476 = state_31417__$1;
(statearr_31428_33476[(1)] = (19));

} else {
var statearr_31429_33477 = state_31417__$1;
(statearr_31429_33477[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (3))){
var inst_31411 = (state_31417[(2)]);
var state_31417__$1 = state_31417;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31417__$1,inst_31411);
} else {
if((state_val_31418 === (12))){
var inst_31388 = (state_31417[(10)]);
var state_31417__$1 = state_31417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31417__$1,(14),inst_31388);
} else {
if((state_val_31418 === (2))){
var state_31417__$1 = state_31417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31417__$1,(4),results);
} else {
if((state_val_31418 === (19))){
var state_31417__$1 = state_31417;
var statearr_31430_33478 = state_31417__$1;
(statearr_31430_33478[(2)] = null);

(statearr_31430_33478[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (11))){
var inst_31388 = (state_31417[(2)]);
var state_31417__$1 = (function (){var statearr_31431 = state_31417;
(statearr_31431[(10)] = inst_31388);

return statearr_31431;
})();
var statearr_31432_33481 = state_31417__$1;
(statearr_31432_33481[(2)] = null);

(statearr_31432_33481[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (9))){
var state_31417__$1 = state_31417;
var statearr_31433_33483 = state_31417__$1;
(statearr_31433_33483[(2)] = null);

(statearr_31433_33483[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (5))){
var state_31417__$1 = state_31417;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31434_33484 = state_31417__$1;
(statearr_31434_33484[(1)] = (8));

} else {
var statearr_31435_33485 = state_31417__$1;
(statearr_31435_33485[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (14))){
var inst_31391 = (state_31417[(8)]);
var inst_31391__$1 = (state_31417[(2)]);
var inst_31392 = (inst_31391__$1 == null);
var inst_31393 = cljs.core.not(inst_31392);
var state_31417__$1 = (function (){var statearr_31437 = state_31417;
(statearr_31437[(8)] = inst_31391__$1);

return statearr_31437;
})();
if(inst_31393){
var statearr_31438_33487 = state_31417__$1;
(statearr_31438_33487[(1)] = (15));

} else {
var statearr_31440_33488 = state_31417__$1;
(statearr_31440_33488[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (16))){
var state_31417__$1 = state_31417;
var statearr_31441_33489 = state_31417__$1;
(statearr_31441_33489[(2)] = false);

(statearr_31441_33489[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (10))){
var inst_31385 = (state_31417[(2)]);
var state_31417__$1 = state_31417;
var statearr_31443_33492 = state_31417__$1;
(statearr_31443_33492[(2)] = inst_31385);

(statearr_31443_33492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (18))){
var inst_31396 = (state_31417[(2)]);
var state_31417__$1 = state_31417;
var statearr_31444_33494 = state_31417__$1;
(statearr_31444_33494[(2)] = inst_31396);

(statearr_31444_33494[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31418 === (8))){
var inst_31382 = cljs.core.async.close_BANG_(to);
var state_31417__$1 = state_31417;
var statearr_31445_33495 = state_31417__$1;
(statearr_31445_33495[(2)] = inst_31382);

(statearr_31445_33495[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__30740__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30740__auto____0 = (function (){
var statearr_31446 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31446[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30740__auto__);

(statearr_31446[(1)] = (1));

return statearr_31446;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30740__auto____1 = (function (state_31417){
while(true){
var ret_value__30741__auto__ = (function (){try{while(true){
var result__30742__auto__ = switch__30739__auto__(state_31417);
if(cljs.core.keyword_identical_QMARK_(result__30742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30742__auto__;
}
break;
}
}catch (e31448){var ex__30743__auto__ = e31448;
var statearr_31449_33501 = state_31417;
(statearr_31449_33501[(2)] = ex__30743__auto__);


if(cljs.core.seq((state_31417[(4)]))){
var statearr_31450_33502 = state_31417;
(statearr_31450_33502[(1)] = cljs.core.first((state_31417[(4)])));

} else {
throw ex__30743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33503 = state_31417;
state_31417 = G__33503;
continue;
} else {
return ret_value__30741__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30740__auto__ = function(state_31417){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30740__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30740__auto____1.call(this,state_31417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30740__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30740__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30740__auto__;
})()
})();
var state__30939__auto__ = (function (){var statearr_31451 = f__30938__auto__();
(statearr_31451[(6)] = c__30937__auto__);

return statearr_31451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30939__auto__);
}));

return c__30937__auto__;
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
var G__31453 = arguments.length;
switch (G__31453) {
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
var G__31455 = arguments.length;
switch (G__31455) {
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
var G__31464 = arguments.length;
switch (G__31464) {
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
var c__30937__auto___33511 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30938__auto__ = (function (){var switch__30739__auto__ = (function (state_31496){
var state_val_31497 = (state_31496[(1)]);
if((state_val_31497 === (7))){
var inst_31492 = (state_31496[(2)]);
var state_31496__$1 = state_31496;
var statearr_31498_33512 = state_31496__$1;
(statearr_31498_33512[(2)] = inst_31492);

(statearr_31498_33512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31497 === (1))){
var state_31496__$1 = state_31496;
var statearr_31499_33513 = state_31496__$1;
(statearr_31499_33513[(2)] = null);

(statearr_31499_33513[(1)] = (2));


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
var statearr_31501_33514 = state_31496__$1;
(statearr_31501_33514[(1)] = (5));

} else {
var statearr_31502_33515 = state_31496__$1;
(statearr_31502_33515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31497 === (13))){
var state_31496__$1 = state_31496;
var statearr_31503_33516 = state_31496__$1;
(statearr_31503_33516[(2)] = null);

(statearr_31503_33516[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31497 === (6))){
var inst_31472 = (state_31496[(7)]);
var inst_31479 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31472) : p.call(null,inst_31472));
var state_31496__$1 = state_31496;
if(cljs.core.truth_(inst_31479)){
var statearr_31504_33518 = state_31496__$1;
(statearr_31504_33518[(1)] = (9));

} else {
var statearr_31505_33520 = state_31496__$1;
(statearr_31505_33520[(1)] = (10));

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
var statearr_31506_33521 = state_31496__$1;
(statearr_31506_33521[(2)] = null);

(statearr_31506_33521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31497 === (2))){
var state_31496__$1 = state_31496;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31496__$1,(4),ch);
} else {
if((state_val_31497 === (11))){
var inst_31472 = (state_31496[(7)]);
var inst_31483 = (state_31496[(2)]);
var state_31496__$1 = state_31496;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31496__$1,(8),inst_31483,inst_31472);
} else {
if((state_val_31497 === (9))){
var state_31496__$1 = state_31496;
var statearr_31507_33549 = state_31496__$1;
(statearr_31507_33549[(2)] = tc);

(statearr_31507_33549[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31497 === (5))){
var inst_31475 = cljs.core.async.close_BANG_(tc);
var inst_31476 = cljs.core.async.close_BANG_(fc);
var state_31496__$1 = (function (){var statearr_31508 = state_31496;
(statearr_31508[(8)] = inst_31475);

return statearr_31508;
})();
var statearr_31509_33550 = state_31496__$1;
(statearr_31509_33550[(2)] = inst_31476);

(statearr_31509_33550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31497 === (14))){
var inst_31490 = (state_31496[(2)]);
var state_31496__$1 = state_31496;
var statearr_31510_33551 = state_31496__$1;
(statearr_31510_33551[(2)] = inst_31490);

(statearr_31510_33551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31497 === (10))){
var state_31496__$1 = state_31496;
var statearr_31511_33552 = state_31496__$1;
(statearr_31511_33552[(2)] = fc);

(statearr_31511_33552[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31497 === (8))){
var inst_31485 = (state_31496[(2)]);
var state_31496__$1 = state_31496;
if(cljs.core.truth_(inst_31485)){
var statearr_31512_33553 = state_31496__$1;
(statearr_31512_33553[(1)] = (12));

} else {
var statearr_31513_33554 = state_31496__$1;
(statearr_31513_33554[(1)] = (13));

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
var cljs$core$async$state_machine__30740__auto__ = null;
var cljs$core$async$state_machine__30740__auto____0 = (function (){
var statearr_31514 = [null,null,null,null,null,null,null,null,null];
(statearr_31514[(0)] = cljs$core$async$state_machine__30740__auto__);

(statearr_31514[(1)] = (1));

return statearr_31514;
});
var cljs$core$async$state_machine__30740__auto____1 = (function (state_31496){
while(true){
var ret_value__30741__auto__ = (function (){try{while(true){
var result__30742__auto__ = switch__30739__auto__(state_31496);
if(cljs.core.keyword_identical_QMARK_(result__30742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30742__auto__;
}
break;
}
}catch (e31515){var ex__30743__auto__ = e31515;
var statearr_31516_33556 = state_31496;
(statearr_31516_33556[(2)] = ex__30743__auto__);


if(cljs.core.seq((state_31496[(4)]))){
var statearr_31517_33557 = state_31496;
(statearr_31517_33557[(1)] = cljs.core.first((state_31496[(4)])));

} else {
throw ex__30743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33558 = state_31496;
state_31496 = G__33558;
continue;
} else {
return ret_value__30741__auto__;
}
break;
}
});
cljs$core$async$state_machine__30740__auto__ = function(state_31496){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30740__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30740__auto____1.call(this,state_31496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30740__auto____0;
cljs$core$async$state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30740__auto____1;
return cljs$core$async$state_machine__30740__auto__;
})()
})();
var state__30939__auto__ = (function (){var statearr_31518 = f__30938__auto__();
(statearr_31518[(6)] = c__30937__auto___33511);

return statearr_31518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30939__auto__);
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
var c__30937__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30938__auto__ = (function (){var switch__30739__auto__ = (function (state_31540){
var state_val_31541 = (state_31540[(1)]);
if((state_val_31541 === (7))){
var inst_31536 = (state_31540[(2)]);
var state_31540__$1 = state_31540;
var statearr_31542_33559 = state_31540__$1;
(statearr_31542_33559[(2)] = inst_31536);

(statearr_31542_33559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (1))){
var inst_31519 = init;
var inst_31520 = inst_31519;
var state_31540__$1 = (function (){var statearr_31543 = state_31540;
(statearr_31543[(7)] = inst_31520);

return statearr_31543;
})();
var statearr_31544_33562 = state_31540__$1;
(statearr_31544_33562[(2)] = null);

(statearr_31544_33562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (4))){
var inst_31523 = (state_31540[(8)]);
var inst_31523__$1 = (state_31540[(2)]);
var inst_31524 = (inst_31523__$1 == null);
var state_31540__$1 = (function (){var statearr_31545 = state_31540;
(statearr_31545[(8)] = inst_31523__$1);

return statearr_31545;
})();
if(cljs.core.truth_(inst_31524)){
var statearr_31546_33563 = state_31540__$1;
(statearr_31546_33563[(1)] = (5));

} else {
var statearr_31547_33564 = state_31540__$1;
(statearr_31547_33564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (6))){
var inst_31523 = (state_31540[(8)]);
var inst_31520 = (state_31540[(7)]);
var inst_31527 = (state_31540[(9)]);
var inst_31527__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31520,inst_31523) : f.call(null,inst_31520,inst_31523));
var inst_31528 = cljs.core.reduced_QMARK_(inst_31527__$1);
var state_31540__$1 = (function (){var statearr_31548 = state_31540;
(statearr_31548[(9)] = inst_31527__$1);

return statearr_31548;
})();
if(inst_31528){
var statearr_31549_33567 = state_31540__$1;
(statearr_31549_33567[(1)] = (8));

} else {
var statearr_31550_33568 = state_31540__$1;
(statearr_31550_33568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (3))){
var inst_31538 = (state_31540[(2)]);
var state_31540__$1 = state_31540;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31540__$1,inst_31538);
} else {
if((state_val_31541 === (2))){
var state_31540__$1 = state_31540;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31540__$1,(4),ch);
} else {
if((state_val_31541 === (9))){
var inst_31527 = (state_31540[(9)]);
var inst_31520 = inst_31527;
var state_31540__$1 = (function (){var statearr_31551 = state_31540;
(statearr_31551[(7)] = inst_31520);

return statearr_31551;
})();
var statearr_31552_33571 = state_31540__$1;
(statearr_31552_33571[(2)] = null);

(statearr_31552_33571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (5))){
var inst_31520 = (state_31540[(7)]);
var state_31540__$1 = state_31540;
var statearr_31553_33572 = state_31540__$1;
(statearr_31553_33572[(2)] = inst_31520);

(statearr_31553_33572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (10))){
var inst_31534 = (state_31540[(2)]);
var state_31540__$1 = state_31540;
var statearr_31554_33574 = state_31540__$1;
(statearr_31554_33574[(2)] = inst_31534);

(statearr_31554_33574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31541 === (8))){
var inst_31527 = (state_31540[(9)]);
var inst_31530 = cljs.core.deref(inst_31527);
var state_31540__$1 = state_31540;
var statearr_31555_33592 = state_31540__$1;
(statearr_31555_33592[(2)] = inst_31530);

(statearr_31555_33592[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__30740__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30740__auto____0 = (function (){
var statearr_31557 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31557[(0)] = cljs$core$async$reduce_$_state_machine__30740__auto__);

(statearr_31557[(1)] = (1));

return statearr_31557;
});
var cljs$core$async$reduce_$_state_machine__30740__auto____1 = (function (state_31540){
while(true){
var ret_value__30741__auto__ = (function (){try{while(true){
var result__30742__auto__ = switch__30739__auto__(state_31540);
if(cljs.core.keyword_identical_QMARK_(result__30742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30742__auto__;
}
break;
}
}catch (e31558){var ex__30743__auto__ = e31558;
var statearr_31559_33597 = state_31540;
(statearr_31559_33597[(2)] = ex__30743__auto__);


if(cljs.core.seq((state_31540[(4)]))){
var statearr_31560_33598 = state_31540;
(statearr_31560_33598[(1)] = cljs.core.first((state_31540[(4)])));

} else {
throw ex__30743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33599 = state_31540;
state_31540 = G__33599;
continue;
} else {
return ret_value__30741__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30740__auto__ = function(state_31540){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30740__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30740__auto____1.call(this,state_31540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30740__auto____0;
cljs$core$async$reduce_$_state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30740__auto____1;
return cljs$core$async$reduce_$_state_machine__30740__auto__;
})()
})();
var state__30939__auto__ = (function (){var statearr_31561 = f__30938__auto__();
(statearr_31561[(6)] = c__30937__auto__);

return statearr_31561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30939__auto__);
}));

return c__30937__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30937__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30938__auto__ = (function (){var switch__30739__auto__ = (function (state_31567){
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
var cljs$core$async$transduce_$_state_machine__30740__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30740__auto____0 = (function (){
var statearr_31569 = [null,null,null,null,null,null,null];
(statearr_31569[(0)] = cljs$core$async$transduce_$_state_machine__30740__auto__);

(statearr_31569[(1)] = (1));

return statearr_31569;
});
var cljs$core$async$transduce_$_state_machine__30740__auto____1 = (function (state_31567){
while(true){
var ret_value__30741__auto__ = (function (){try{while(true){
var result__30742__auto__ = switch__30739__auto__(state_31567);
if(cljs.core.keyword_identical_QMARK_(result__30742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30742__auto__;
}
break;
}
}catch (e31570){var ex__30743__auto__ = e31570;
var statearr_31571_33600 = state_31567;
(statearr_31571_33600[(2)] = ex__30743__auto__);


if(cljs.core.seq((state_31567[(4)]))){
var statearr_31572_33601 = state_31567;
(statearr_31572_33601[(1)] = cljs.core.first((state_31567[(4)])));

} else {
throw ex__30743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33604 = state_31567;
state_31567 = G__33604;
continue;
} else {
return ret_value__30741__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30740__auto__ = function(state_31567){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30740__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30740__auto____1.call(this,state_31567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30740__auto____0;
cljs$core$async$transduce_$_state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30740__auto____1;
return cljs$core$async$transduce_$_state_machine__30740__auto__;
})()
})();
var state__30939__auto__ = (function (){var statearr_31573 = f__30938__auto__();
(statearr_31573[(6)] = c__30937__auto__);

return statearr_31573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30939__auto__);
}));

return c__30937__auto__;
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
var c__30937__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30938__auto__ = (function (){var switch__30739__auto__ = (function (state_31600){
var state_val_31601 = (state_31600[(1)]);
if((state_val_31601 === (7))){
var inst_31582 = (state_31600[(2)]);
var state_31600__$1 = state_31600;
var statearr_31602_33614 = state_31600__$1;
(statearr_31602_33614[(2)] = inst_31582);

(statearr_31602_33614[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (1))){
var inst_31576 = cljs.core.seq(coll);
var inst_31577 = inst_31576;
var state_31600__$1 = (function (){var statearr_31603 = state_31600;
(statearr_31603[(7)] = inst_31577);

return statearr_31603;
})();
var statearr_31604_33615 = state_31600__$1;
(statearr_31604_33615[(2)] = null);

(statearr_31604_33615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (4))){
var inst_31577 = (state_31600[(7)]);
var inst_31580 = cljs.core.first(inst_31577);
var state_31600__$1 = state_31600;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31600__$1,(7),ch,inst_31580);
} else {
if((state_val_31601 === (13))){
var inst_31594 = (state_31600[(2)]);
var state_31600__$1 = state_31600;
var statearr_31605_33616 = state_31600__$1;
(statearr_31605_33616[(2)] = inst_31594);

(statearr_31605_33616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (6))){
var inst_31585 = (state_31600[(2)]);
var state_31600__$1 = state_31600;
if(cljs.core.truth_(inst_31585)){
var statearr_31606_33617 = state_31600__$1;
(statearr_31606_33617[(1)] = (8));

} else {
var statearr_31607_33618 = state_31600__$1;
(statearr_31607_33618[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (3))){
var inst_31598 = (state_31600[(2)]);
var state_31600__$1 = state_31600;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31600__$1,inst_31598);
} else {
if((state_val_31601 === (12))){
var state_31600__$1 = state_31600;
var statearr_31608_33626 = state_31600__$1;
(statearr_31608_33626[(2)] = null);

(statearr_31608_33626[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (2))){
var inst_31577 = (state_31600[(7)]);
var state_31600__$1 = state_31600;
if(cljs.core.truth_(inst_31577)){
var statearr_31609_33627 = state_31600__$1;
(statearr_31609_33627[(1)] = (4));

} else {
var statearr_31610_33628 = state_31600__$1;
(statearr_31610_33628[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (11))){
var inst_31591 = cljs.core.async.close_BANG_(ch);
var state_31600__$1 = state_31600;
var statearr_31611_33629 = state_31600__$1;
(statearr_31611_33629[(2)] = inst_31591);

(statearr_31611_33629[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (9))){
var state_31600__$1 = state_31600;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31612_33630 = state_31600__$1;
(statearr_31612_33630[(1)] = (11));

} else {
var statearr_31613_33631 = state_31600__$1;
(statearr_31613_33631[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (5))){
var inst_31577 = (state_31600[(7)]);
var state_31600__$1 = state_31600;
var statearr_31615_33632 = state_31600__$1;
(statearr_31615_33632[(2)] = inst_31577);

(statearr_31615_33632[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (10))){
var inst_31596 = (state_31600[(2)]);
var state_31600__$1 = state_31600;
var statearr_31616_33633 = state_31600__$1;
(statearr_31616_33633[(2)] = inst_31596);

(statearr_31616_33633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31601 === (8))){
var inst_31577 = (state_31600[(7)]);
var inst_31587 = cljs.core.next(inst_31577);
var inst_31577__$1 = inst_31587;
var state_31600__$1 = (function (){var statearr_31617 = state_31600;
(statearr_31617[(7)] = inst_31577__$1);

return statearr_31617;
})();
var statearr_31618_33634 = state_31600__$1;
(statearr_31618_33634[(2)] = null);

(statearr_31618_33634[(1)] = (2));


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
var cljs$core$async$state_machine__30740__auto__ = null;
var cljs$core$async$state_machine__30740__auto____0 = (function (){
var statearr_31619 = [null,null,null,null,null,null,null,null];
(statearr_31619[(0)] = cljs$core$async$state_machine__30740__auto__);

(statearr_31619[(1)] = (1));

return statearr_31619;
});
var cljs$core$async$state_machine__30740__auto____1 = (function (state_31600){
while(true){
var ret_value__30741__auto__ = (function (){try{while(true){
var result__30742__auto__ = switch__30739__auto__(state_31600);
if(cljs.core.keyword_identical_QMARK_(result__30742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30742__auto__;
}
break;
}
}catch (e31634){var ex__30743__auto__ = e31634;
var statearr_31635_33635 = state_31600;
(statearr_31635_33635[(2)] = ex__30743__auto__);


if(cljs.core.seq((state_31600[(4)]))){
var statearr_31636_33636 = state_31600;
(statearr_31636_33636[(1)] = cljs.core.first((state_31600[(4)])));

} else {
throw ex__30743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33637 = state_31600;
state_31600 = G__33637;
continue;
} else {
return ret_value__30741__auto__;
}
break;
}
});
cljs$core$async$state_machine__30740__auto__ = function(state_31600){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30740__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30740__auto____1.call(this,state_31600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30740__auto____0;
cljs$core$async$state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30740__auto____1;
return cljs$core$async$state_machine__30740__auto__;
})()
})();
var state__30939__auto__ = (function (){var statearr_31637 = f__30938__auto__();
(statearr_31637[(6)] = c__30937__auto__);

return statearr_31637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30939__auto__);
}));

return c__30937__auto__;
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
var G__31639 = arguments.length;
switch (G__31639) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_33646 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_33646(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33647 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_33647(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33648 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_33648(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33654 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_33654(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31653 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31653 = (function (ch,cs,meta31654){
this.ch = ch;
this.cs = cs;
this.meta31654 = meta31654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31655,meta31654__$1){
var self__ = this;
var _31655__$1 = this;
return (new cljs.core.async.t_cljs$core$async31653(self__.ch,self__.cs,meta31654__$1));
}));

(cljs.core.async.t_cljs$core$async31653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31655){
var self__ = this;
var _31655__$1 = this;
return self__.meta31654;
}));

(cljs.core.async.t_cljs$core$async31653.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31653.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31653.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31653.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31653.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31653.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31653.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31654","meta31654",-1294342080,null)], null);
}));

(cljs.core.async.t_cljs$core$async31653.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31653.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31653");

(cljs.core.async.t_cljs$core$async31653.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31653");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31653.
 */
cljs.core.async.__GT_t_cljs$core$async31653 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31653(ch__$1,cs__$1,meta31654){
return (new cljs.core.async.t_cljs$core$async31653(ch__$1,cs__$1,meta31654));
});

}

return (new cljs.core.async.t_cljs$core$async31653(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30937__auto___33661 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30938__auto__ = (function (){var switch__30739__auto__ = (function (state_31828){
var state_val_31829 = (state_31828[(1)]);
if((state_val_31829 === (7))){
var inst_31824 = (state_31828[(2)]);
var state_31828__$1 = state_31828;
var statearr_31833_33662 = state_31828__$1;
(statearr_31833_33662[(2)] = inst_31824);

(statearr_31833_33662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (20))){
var inst_31719 = (state_31828[(7)]);
var inst_31732 = cljs.core.first(inst_31719);
var inst_31733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31732,(0),null);
var inst_31734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31732,(1),null);
var state_31828__$1 = (function (){var statearr_31834 = state_31828;
(statearr_31834[(8)] = inst_31733);

return statearr_31834;
})();
if(cljs.core.truth_(inst_31734)){
var statearr_31835_33663 = state_31828__$1;
(statearr_31835_33663[(1)] = (22));

} else {
var statearr_31836_33664 = state_31828__$1;
(statearr_31836_33664[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (27))){
var inst_31764 = (state_31828[(9)]);
var inst_31769 = (state_31828[(10)]);
var inst_31762 = (state_31828[(11)]);
var inst_31686 = (state_31828[(12)]);
var inst_31769__$1 = cljs.core._nth(inst_31762,inst_31764);
var inst_31770 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31769__$1,inst_31686,done);
var state_31828__$1 = (function (){var statearr_31837 = state_31828;
(statearr_31837[(10)] = inst_31769__$1);

return statearr_31837;
})();
if(cljs.core.truth_(inst_31770)){
var statearr_31838_33665 = state_31828__$1;
(statearr_31838_33665[(1)] = (30));

} else {
var statearr_31843_33666 = state_31828__$1;
(statearr_31843_33666[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (1))){
var state_31828__$1 = state_31828;
var statearr_31847_33667 = state_31828__$1;
(statearr_31847_33667[(2)] = null);

(statearr_31847_33667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (24))){
var inst_31719 = (state_31828[(7)]);
var inst_31739 = (state_31828[(2)]);
var inst_31740 = cljs.core.next(inst_31719);
var inst_31695 = inst_31740;
var inst_31696 = null;
var inst_31697 = (0);
var inst_31698 = (0);
var state_31828__$1 = (function (){var statearr_31848 = state_31828;
(statearr_31848[(13)] = inst_31696);

(statearr_31848[(14)] = inst_31697);

(statearr_31848[(15)] = inst_31698);

(statearr_31848[(16)] = inst_31739);

(statearr_31848[(17)] = inst_31695);

return statearr_31848;
})();
var statearr_31849_33668 = state_31828__$1;
(statearr_31849_33668[(2)] = null);

(statearr_31849_33668[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (39))){
var state_31828__$1 = state_31828;
var statearr_31857_33672 = state_31828__$1;
(statearr_31857_33672[(2)] = null);

(statearr_31857_33672[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (4))){
var inst_31686 = (state_31828[(12)]);
var inst_31686__$1 = (state_31828[(2)]);
var inst_31687 = (inst_31686__$1 == null);
var state_31828__$1 = (function (){var statearr_31858 = state_31828;
(statearr_31858[(12)] = inst_31686__$1);

return statearr_31858;
})();
if(cljs.core.truth_(inst_31687)){
var statearr_31859_33673 = state_31828__$1;
(statearr_31859_33673[(1)] = (5));

} else {
var statearr_31860_33674 = state_31828__$1;
(statearr_31860_33674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (15))){
var inst_31696 = (state_31828[(13)]);
var inst_31697 = (state_31828[(14)]);
var inst_31698 = (state_31828[(15)]);
var inst_31695 = (state_31828[(17)]);
var inst_31715 = (state_31828[(2)]);
var inst_31716 = (inst_31698 + (1));
var tmp31854 = inst_31696;
var tmp31855 = inst_31697;
var tmp31856 = inst_31695;
var inst_31695__$1 = tmp31856;
var inst_31696__$1 = tmp31854;
var inst_31697__$1 = tmp31855;
var inst_31698__$1 = inst_31716;
var state_31828__$1 = (function (){var statearr_31863 = state_31828;
(statearr_31863[(13)] = inst_31696__$1);

(statearr_31863[(14)] = inst_31697__$1);

(statearr_31863[(15)] = inst_31698__$1);

(statearr_31863[(18)] = inst_31715);

(statearr_31863[(17)] = inst_31695__$1);

return statearr_31863;
})();
var statearr_31864_33675 = state_31828__$1;
(statearr_31864_33675[(2)] = null);

(statearr_31864_33675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (21))){
var inst_31743 = (state_31828[(2)]);
var state_31828__$1 = state_31828;
var statearr_31871_33677 = state_31828__$1;
(statearr_31871_33677[(2)] = inst_31743);

(statearr_31871_33677[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (31))){
var inst_31769 = (state_31828[(10)]);
var inst_31773 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31769);
var state_31828__$1 = state_31828;
var statearr_31877_33678 = state_31828__$1;
(statearr_31877_33678[(2)] = inst_31773);

(statearr_31877_33678[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (32))){
var inst_31761 = (state_31828[(19)]);
var inst_31764 = (state_31828[(9)]);
var inst_31763 = (state_31828[(20)]);
var inst_31762 = (state_31828[(11)]);
var inst_31775 = (state_31828[(2)]);
var inst_31776 = (inst_31764 + (1));
var tmp31866 = inst_31761;
var tmp31867 = inst_31763;
var tmp31868 = inst_31762;
var inst_31761__$1 = tmp31866;
var inst_31762__$1 = tmp31868;
var inst_31763__$1 = tmp31867;
var inst_31764__$1 = inst_31776;
var state_31828__$1 = (function (){var statearr_31878 = state_31828;
(statearr_31878[(19)] = inst_31761__$1);

(statearr_31878[(9)] = inst_31764__$1);

(statearr_31878[(21)] = inst_31775);

(statearr_31878[(20)] = inst_31763__$1);

(statearr_31878[(11)] = inst_31762__$1);

return statearr_31878;
})();
var statearr_31879_33679 = state_31828__$1;
(statearr_31879_33679[(2)] = null);

(statearr_31879_33679[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (40))){
var inst_31788 = (state_31828[(22)]);
var inst_31792 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31788);
var state_31828__$1 = state_31828;
var statearr_31880_33680 = state_31828__$1;
(statearr_31880_33680[(2)] = inst_31792);

(statearr_31880_33680[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (33))){
var inst_31779 = (state_31828[(23)]);
var inst_31781 = cljs.core.chunked_seq_QMARK_(inst_31779);
var state_31828__$1 = state_31828;
if(inst_31781){
var statearr_31881_33685 = state_31828__$1;
(statearr_31881_33685[(1)] = (36));

} else {
var statearr_31882_33686 = state_31828__$1;
(statearr_31882_33686[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (13))){
var inst_31709 = (state_31828[(24)]);
var inst_31712 = cljs.core.async.close_BANG_(inst_31709);
var state_31828__$1 = state_31828;
var statearr_31885_33687 = state_31828__$1;
(statearr_31885_33687[(2)] = inst_31712);

(statearr_31885_33687[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (22))){
var inst_31733 = (state_31828[(8)]);
var inst_31736 = cljs.core.async.close_BANG_(inst_31733);
var state_31828__$1 = state_31828;
var statearr_31887_33688 = state_31828__$1;
(statearr_31887_33688[(2)] = inst_31736);

(statearr_31887_33688[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (36))){
var inst_31779 = (state_31828[(23)]);
var inst_31783 = cljs.core.chunk_first(inst_31779);
var inst_31784 = cljs.core.chunk_rest(inst_31779);
var inst_31785 = cljs.core.count(inst_31783);
var inst_31761 = inst_31784;
var inst_31762 = inst_31783;
var inst_31763 = inst_31785;
var inst_31764 = (0);
var state_31828__$1 = (function (){var statearr_31888 = state_31828;
(statearr_31888[(19)] = inst_31761);

(statearr_31888[(9)] = inst_31764);

(statearr_31888[(20)] = inst_31763);

(statearr_31888[(11)] = inst_31762);

return statearr_31888;
})();
var statearr_31889_33689 = state_31828__$1;
(statearr_31889_33689[(2)] = null);

(statearr_31889_33689[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (41))){
var inst_31779 = (state_31828[(23)]);
var inst_31794 = (state_31828[(2)]);
var inst_31795 = cljs.core.next(inst_31779);
var inst_31761 = inst_31795;
var inst_31762 = null;
var inst_31763 = (0);
var inst_31764 = (0);
var state_31828__$1 = (function (){var statearr_31897 = state_31828;
(statearr_31897[(19)] = inst_31761);

(statearr_31897[(25)] = inst_31794);

(statearr_31897[(9)] = inst_31764);

(statearr_31897[(20)] = inst_31763);

(statearr_31897[(11)] = inst_31762);

return statearr_31897;
})();
var statearr_31898_33690 = state_31828__$1;
(statearr_31898_33690[(2)] = null);

(statearr_31898_33690[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (43))){
var state_31828__$1 = state_31828;
var statearr_31900_33691 = state_31828__$1;
(statearr_31900_33691[(2)] = null);

(statearr_31900_33691[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (29))){
var inst_31803 = (state_31828[(2)]);
var state_31828__$1 = state_31828;
var statearr_31905_33692 = state_31828__$1;
(statearr_31905_33692[(2)] = inst_31803);

(statearr_31905_33692[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (44))){
var inst_31821 = (state_31828[(2)]);
var state_31828__$1 = (function (){var statearr_31907 = state_31828;
(statearr_31907[(26)] = inst_31821);

return statearr_31907;
})();
var statearr_31908_33693 = state_31828__$1;
(statearr_31908_33693[(2)] = null);

(statearr_31908_33693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (6))){
var inst_31753 = (state_31828[(27)]);
var inst_31752 = cljs.core.deref(cs);
var inst_31753__$1 = cljs.core.keys(inst_31752);
var inst_31754 = cljs.core.count(inst_31753__$1);
var inst_31755 = cljs.core.reset_BANG_(dctr,inst_31754);
var inst_31760 = cljs.core.seq(inst_31753__$1);
var inst_31761 = inst_31760;
var inst_31762 = null;
var inst_31763 = (0);
var inst_31764 = (0);
var state_31828__$1 = (function (){var statearr_31909 = state_31828;
(statearr_31909[(19)] = inst_31761);

(statearr_31909[(28)] = inst_31755);

(statearr_31909[(9)] = inst_31764);

(statearr_31909[(20)] = inst_31763);

(statearr_31909[(11)] = inst_31762);

(statearr_31909[(27)] = inst_31753__$1);

return statearr_31909;
})();
var statearr_31924_33700 = state_31828__$1;
(statearr_31924_33700[(2)] = null);

(statearr_31924_33700[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (28))){
var inst_31761 = (state_31828[(19)]);
var inst_31779 = (state_31828[(23)]);
var inst_31779__$1 = cljs.core.seq(inst_31761);
var state_31828__$1 = (function (){var statearr_31925 = state_31828;
(statearr_31925[(23)] = inst_31779__$1);

return statearr_31925;
})();
if(inst_31779__$1){
var statearr_31926_33701 = state_31828__$1;
(statearr_31926_33701[(1)] = (33));

} else {
var statearr_31928_33702 = state_31828__$1;
(statearr_31928_33702[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (25))){
var inst_31764 = (state_31828[(9)]);
var inst_31763 = (state_31828[(20)]);
var inst_31766 = (inst_31764 < inst_31763);
var inst_31767 = inst_31766;
var state_31828__$1 = state_31828;
if(cljs.core.truth_(inst_31767)){
var statearr_31929_33703 = state_31828__$1;
(statearr_31929_33703[(1)] = (27));

} else {
var statearr_31931_33704 = state_31828__$1;
(statearr_31931_33704[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (34))){
var state_31828__$1 = state_31828;
var statearr_31933_33705 = state_31828__$1;
(statearr_31933_33705[(2)] = null);

(statearr_31933_33705[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (17))){
var state_31828__$1 = state_31828;
var statearr_31934_33706 = state_31828__$1;
(statearr_31934_33706[(2)] = null);

(statearr_31934_33706[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (3))){
var inst_31826 = (state_31828[(2)]);
var state_31828__$1 = state_31828;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31828__$1,inst_31826);
} else {
if((state_val_31829 === (12))){
var inst_31748 = (state_31828[(2)]);
var state_31828__$1 = state_31828;
var statearr_31935_33707 = state_31828__$1;
(statearr_31935_33707[(2)] = inst_31748);

(statearr_31935_33707[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (2))){
var state_31828__$1 = state_31828;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31828__$1,(4),ch);
} else {
if((state_val_31829 === (23))){
var state_31828__$1 = state_31828;
var statearr_31936_33708 = state_31828__$1;
(statearr_31936_33708[(2)] = null);

(statearr_31936_33708[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (35))){
var inst_31801 = (state_31828[(2)]);
var state_31828__$1 = state_31828;
var statearr_31937_33709 = state_31828__$1;
(statearr_31937_33709[(2)] = inst_31801);

(statearr_31937_33709[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (19))){
var inst_31719 = (state_31828[(7)]);
var inst_31723 = cljs.core.chunk_first(inst_31719);
var inst_31724 = cljs.core.chunk_rest(inst_31719);
var inst_31726 = cljs.core.count(inst_31723);
var inst_31695 = inst_31724;
var inst_31696 = inst_31723;
var inst_31697 = inst_31726;
var inst_31698 = (0);
var state_31828__$1 = (function (){var statearr_31938 = state_31828;
(statearr_31938[(13)] = inst_31696);

(statearr_31938[(14)] = inst_31697);

(statearr_31938[(15)] = inst_31698);

(statearr_31938[(17)] = inst_31695);

return statearr_31938;
})();
var statearr_31946_33710 = state_31828__$1;
(statearr_31946_33710[(2)] = null);

(statearr_31946_33710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (11))){
var inst_31695 = (state_31828[(17)]);
var inst_31719 = (state_31828[(7)]);
var inst_31719__$1 = cljs.core.seq(inst_31695);
var state_31828__$1 = (function (){var statearr_31949 = state_31828;
(statearr_31949[(7)] = inst_31719__$1);

return statearr_31949;
})();
if(inst_31719__$1){
var statearr_31951_33711 = state_31828__$1;
(statearr_31951_33711[(1)] = (16));

} else {
var statearr_31952_33712 = state_31828__$1;
(statearr_31952_33712[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (9))){
var inst_31750 = (state_31828[(2)]);
var state_31828__$1 = state_31828;
var statearr_31954_33713 = state_31828__$1;
(statearr_31954_33713[(2)] = inst_31750);

(statearr_31954_33713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (5))){
var inst_31693 = cljs.core.deref(cs);
var inst_31694 = cljs.core.seq(inst_31693);
var inst_31695 = inst_31694;
var inst_31696 = null;
var inst_31697 = (0);
var inst_31698 = (0);
var state_31828__$1 = (function (){var statearr_31957 = state_31828;
(statearr_31957[(13)] = inst_31696);

(statearr_31957[(14)] = inst_31697);

(statearr_31957[(15)] = inst_31698);

(statearr_31957[(17)] = inst_31695);

return statearr_31957;
})();
var statearr_31958_33714 = state_31828__$1;
(statearr_31958_33714[(2)] = null);

(statearr_31958_33714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (14))){
var state_31828__$1 = state_31828;
var statearr_31959_33715 = state_31828__$1;
(statearr_31959_33715[(2)] = null);

(statearr_31959_33715[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (45))){
var inst_31818 = (state_31828[(2)]);
var state_31828__$1 = state_31828;
var statearr_31960_33716 = state_31828__$1;
(statearr_31960_33716[(2)] = inst_31818);

(statearr_31960_33716[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (26))){
var inst_31753 = (state_31828[(27)]);
var inst_31805 = (state_31828[(2)]);
var inst_31813 = cljs.core.seq(inst_31753);
var state_31828__$1 = (function (){var statearr_31965 = state_31828;
(statearr_31965[(29)] = inst_31805);

return statearr_31965;
})();
if(inst_31813){
var statearr_31966_33720 = state_31828__$1;
(statearr_31966_33720[(1)] = (42));

} else {
var statearr_31967_33721 = state_31828__$1;
(statearr_31967_33721[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (16))){
var inst_31719 = (state_31828[(7)]);
var inst_31721 = cljs.core.chunked_seq_QMARK_(inst_31719);
var state_31828__$1 = state_31828;
if(inst_31721){
var statearr_31968_33722 = state_31828__$1;
(statearr_31968_33722[(1)] = (19));

} else {
var statearr_31969_33723 = state_31828__$1;
(statearr_31969_33723[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (38))){
var inst_31798 = (state_31828[(2)]);
var state_31828__$1 = state_31828;
var statearr_31970_33724 = state_31828__$1;
(statearr_31970_33724[(2)] = inst_31798);

(statearr_31970_33724[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (30))){
var state_31828__$1 = state_31828;
var statearr_31975_33725 = state_31828__$1;
(statearr_31975_33725[(2)] = null);

(statearr_31975_33725[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (10))){
var inst_31696 = (state_31828[(13)]);
var inst_31698 = (state_31828[(15)]);
var inst_31708 = cljs.core._nth(inst_31696,inst_31698);
var inst_31709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31708,(0),null);
var inst_31710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31708,(1),null);
var state_31828__$1 = (function (){var statearr_31980 = state_31828;
(statearr_31980[(24)] = inst_31709);

return statearr_31980;
})();
if(cljs.core.truth_(inst_31710)){
var statearr_31981_33726 = state_31828__$1;
(statearr_31981_33726[(1)] = (13));

} else {
var statearr_31982_33727 = state_31828__$1;
(statearr_31982_33727[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (18))){
var inst_31746 = (state_31828[(2)]);
var state_31828__$1 = state_31828;
var statearr_31983_33728 = state_31828__$1;
(statearr_31983_33728[(2)] = inst_31746);

(statearr_31983_33728[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (42))){
var state_31828__$1 = state_31828;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31828__$1,(45),dchan);
} else {
if((state_val_31829 === (37))){
var inst_31779 = (state_31828[(23)]);
var inst_31788 = (state_31828[(22)]);
var inst_31686 = (state_31828[(12)]);
var inst_31788__$1 = cljs.core.first(inst_31779);
var inst_31789 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31788__$1,inst_31686,done);
var state_31828__$1 = (function (){var statearr_31984 = state_31828;
(statearr_31984[(22)] = inst_31788__$1);

return statearr_31984;
})();
if(cljs.core.truth_(inst_31789)){
var statearr_31985_33730 = state_31828__$1;
(statearr_31985_33730[(1)] = (39));

} else {
var statearr_31986_33731 = state_31828__$1;
(statearr_31986_33731[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (8))){
var inst_31697 = (state_31828[(14)]);
var inst_31698 = (state_31828[(15)]);
var inst_31702 = (inst_31698 < inst_31697);
var inst_31703 = inst_31702;
var state_31828__$1 = state_31828;
if(cljs.core.truth_(inst_31703)){
var statearr_31999_33732 = state_31828__$1;
(statearr_31999_33732[(1)] = (10));

} else {
var statearr_32000_33733 = state_31828__$1;
(statearr_32000_33733[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__30740__auto__ = null;
var cljs$core$async$mult_$_state_machine__30740__auto____0 = (function (){
var statearr_32001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32001[(0)] = cljs$core$async$mult_$_state_machine__30740__auto__);

(statearr_32001[(1)] = (1));

return statearr_32001;
});
var cljs$core$async$mult_$_state_machine__30740__auto____1 = (function (state_31828){
while(true){
var ret_value__30741__auto__ = (function (){try{while(true){
var result__30742__auto__ = switch__30739__auto__(state_31828);
if(cljs.core.keyword_identical_QMARK_(result__30742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30742__auto__;
}
break;
}
}catch (e32002){var ex__30743__auto__ = e32002;
var statearr_32004_33734 = state_31828;
(statearr_32004_33734[(2)] = ex__30743__auto__);


if(cljs.core.seq((state_31828[(4)]))){
var statearr_32005_33735 = state_31828;
(statearr_32005_33735[(1)] = cljs.core.first((state_31828[(4)])));

} else {
throw ex__30743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33736 = state_31828;
state_31828 = G__33736;
continue;
} else {
return ret_value__30741__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30740__auto__ = function(state_31828){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30740__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30740__auto____1.call(this,state_31828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30740__auto____0;
cljs$core$async$mult_$_state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30740__auto____1;
return cljs$core$async$mult_$_state_machine__30740__auto__;
})()
})();
var state__30939__auto__ = (function (){var statearr_32009 = f__30938__auto__();
(statearr_32009[(6)] = c__30937__auto___33661);

return statearr_32009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30939__auto__);
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
var G__32021 = arguments.length;
switch (G__32021) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_33738 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_33738(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33747 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_33747(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33748 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33748(m);
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

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33751 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33751(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33753 = arguments.length;
var i__4737__auto___33754 = (0);
while(true){
if((i__4737__auto___33754 < len__4736__auto___33753)){
args__4742__auto__.push((arguments[i__4737__auto___33754]));

var G__33755 = (i__4737__auto___33754 + (1));
i__4737__auto___33754 = G__33755;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32110){
var map__32111 = p__32110;
var map__32111__$1 = (((((!((map__32111 == null))))?(((((map__32111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32111):map__32111);
var opts = map__32111__$1;
var statearr_32113_33756 = state;
(statearr_32113_33756[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32115_33757 = state;
(statearr_32115_33757[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_32116_33758 = state;
(statearr_32116_33758[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32106){
var G__32107 = cljs.core.first(seq32106);
var seq32106__$1 = cljs.core.next(seq32106);
var G__32108 = cljs.core.first(seq32106__$1);
var seq32106__$2 = cljs.core.next(seq32106__$1);
var G__32109 = cljs.core.first(seq32106__$2);
var seq32106__$3 = cljs.core.next(seq32106__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32107,G__32108,G__32109,seq32106__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32141 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32141 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32142){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32142 = meta32142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32143,meta32142__$1){
var self__ = this;
var _32143__$1 = this;
return (new cljs.core.async.t_cljs$core$async32141(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32142__$1));
}));

(cljs.core.async.t_cljs$core$async32141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32143){
var self__ = this;
var _32143__$1 = this;
return self__.meta32142;
}));

(cljs.core.async.t_cljs$core$async32141.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32141.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32141.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32141.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32141.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32141.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32141.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32141.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32141.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32142","meta32142",1230716413,null)], null);
}));

(cljs.core.async.t_cljs$core$async32141.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32141.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32141");

(cljs.core.async.t_cljs$core$async32141.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32141");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32141.
 */
cljs.core.async.__GT_t_cljs$core$async32141 = (function cljs$core$async$mix_$___GT_t_cljs$core$async32141(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32142){
return (new cljs.core.async.t_cljs$core$async32141(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32142));
});

}

return (new cljs.core.async.t_cljs$core$async32141(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30937__auto___33788 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30938__auto__ = (function (){var switch__30739__auto__ = (function (state_32263){
var state_val_32264 = (state_32263[(1)]);
if((state_val_32264 === (7))){
var inst_32178 = (state_32263[(2)]);
var state_32263__$1 = state_32263;
var statearr_32275_33798 = state_32263__$1;
(statearr_32275_33798[(2)] = inst_32178);

(statearr_32275_33798[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (20))){
var inst_32190 = (state_32263[(7)]);
var state_32263__$1 = state_32263;
var statearr_32276_33799 = state_32263__$1;
(statearr_32276_33799[(2)] = inst_32190);

(statearr_32276_33799[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (27))){
var state_32263__$1 = state_32263;
var statearr_32278_33800 = state_32263__$1;
(statearr_32278_33800[(2)] = null);

(statearr_32278_33800[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (1))){
var inst_32165 = (state_32263[(8)]);
var inst_32165__$1 = calc_state();
var inst_32167 = (inst_32165__$1 == null);
var inst_32168 = cljs.core.not(inst_32167);
var state_32263__$1 = (function (){var statearr_32280 = state_32263;
(statearr_32280[(8)] = inst_32165__$1);

return statearr_32280;
})();
if(inst_32168){
var statearr_32283_33804 = state_32263__$1;
(statearr_32283_33804[(1)] = (2));

} else {
var statearr_32285_33805 = state_32263__$1;
(statearr_32285_33805[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (24))){
var inst_32214 = (state_32263[(9)]);
var inst_32237 = (state_32263[(10)]);
var inst_32223 = (state_32263[(11)]);
var inst_32237__$1 = (inst_32214.cljs$core$IFn$_invoke$arity$1 ? inst_32214.cljs$core$IFn$_invoke$arity$1(inst_32223) : inst_32214.call(null,inst_32223));
var state_32263__$1 = (function (){var statearr_32286 = state_32263;
(statearr_32286[(10)] = inst_32237__$1);

return statearr_32286;
})();
if(cljs.core.truth_(inst_32237__$1)){
var statearr_32287_33807 = state_32263__$1;
(statearr_32287_33807[(1)] = (29));

} else {
var statearr_32288_33808 = state_32263__$1;
(statearr_32288_33808[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (4))){
var inst_32181 = (state_32263[(2)]);
var state_32263__$1 = state_32263;
if(cljs.core.truth_(inst_32181)){
var statearr_32289_33809 = state_32263__$1;
(statearr_32289_33809[(1)] = (8));

} else {
var statearr_32290_33813 = state_32263__$1;
(statearr_32290_33813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (15))){
var inst_32208 = (state_32263[(2)]);
var state_32263__$1 = state_32263;
if(cljs.core.truth_(inst_32208)){
var statearr_32291_33829 = state_32263__$1;
(statearr_32291_33829[(1)] = (19));

} else {
var statearr_32292_33830 = state_32263__$1;
(statearr_32292_33830[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (21))){
var inst_32213 = (state_32263[(12)]);
var inst_32213__$1 = (state_32263[(2)]);
var inst_32214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32213__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32213__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32213__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32263__$1 = (function (){var statearr_32301 = state_32263;
(statearr_32301[(9)] = inst_32214);

(statearr_32301[(13)] = inst_32215);

(statearr_32301[(12)] = inst_32213__$1);

return statearr_32301;
})();
return cljs.core.async.ioc_alts_BANG_(state_32263__$1,(22),inst_32216);
} else {
if((state_val_32264 === (31))){
var inst_32245 = (state_32263[(2)]);
var state_32263__$1 = state_32263;
if(cljs.core.truth_(inst_32245)){
var statearr_32306_33831 = state_32263__$1;
(statearr_32306_33831[(1)] = (32));

} else {
var statearr_32311_33832 = state_32263__$1;
(statearr_32311_33832[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (32))){
var inst_32222 = (state_32263[(14)]);
var state_32263__$1 = state_32263;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32263__$1,(35),out,inst_32222);
} else {
if((state_val_32264 === (33))){
var inst_32213 = (state_32263[(12)]);
var inst_32190 = inst_32213;
var state_32263__$1 = (function (){var statearr_32314 = state_32263;
(statearr_32314[(7)] = inst_32190);

return statearr_32314;
})();
var statearr_32315_33833 = state_32263__$1;
(statearr_32315_33833[(2)] = null);

(statearr_32315_33833[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (13))){
var inst_32190 = (state_32263[(7)]);
var inst_32197 = inst_32190.cljs$lang$protocol_mask$partition0$;
var inst_32198 = (inst_32197 & (64));
var inst_32199 = inst_32190.cljs$core$ISeq$;
var inst_32200 = (cljs.core.PROTOCOL_SENTINEL === inst_32199);
var inst_32201 = ((inst_32198) || (inst_32200));
var state_32263__$1 = state_32263;
if(cljs.core.truth_(inst_32201)){
var statearr_32316_33834 = state_32263__$1;
(statearr_32316_33834[(1)] = (16));

} else {
var statearr_32317_33835 = state_32263__$1;
(statearr_32317_33835[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (22))){
var inst_32223 = (state_32263[(11)]);
var inst_32222 = (state_32263[(14)]);
var inst_32221 = (state_32263[(2)]);
var inst_32222__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32221,(0),null);
var inst_32223__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32221,(1),null);
var inst_32224 = (inst_32222__$1 == null);
var inst_32225 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32223__$1,change);
var inst_32226 = ((inst_32224) || (inst_32225));
var state_32263__$1 = (function (){var statearr_32318 = state_32263;
(statearr_32318[(11)] = inst_32223__$1);

(statearr_32318[(14)] = inst_32222__$1);

return statearr_32318;
})();
if(cljs.core.truth_(inst_32226)){
var statearr_32319_33836 = state_32263__$1;
(statearr_32319_33836[(1)] = (23));

} else {
var statearr_32320_33837 = state_32263__$1;
(statearr_32320_33837[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (36))){
var inst_32213 = (state_32263[(12)]);
var inst_32190 = inst_32213;
var state_32263__$1 = (function (){var statearr_32321 = state_32263;
(statearr_32321[(7)] = inst_32190);

return statearr_32321;
})();
var statearr_32322_33838 = state_32263__$1;
(statearr_32322_33838[(2)] = null);

(statearr_32322_33838[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (29))){
var inst_32237 = (state_32263[(10)]);
var state_32263__$1 = state_32263;
var statearr_32324_33848 = state_32263__$1;
(statearr_32324_33848[(2)] = inst_32237);

(statearr_32324_33848[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (6))){
var state_32263__$1 = state_32263;
var statearr_32326_33849 = state_32263__$1;
(statearr_32326_33849[(2)] = false);

(statearr_32326_33849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (28))){
var inst_32233 = (state_32263[(2)]);
var inst_32234 = calc_state();
var inst_32190 = inst_32234;
var state_32263__$1 = (function (){var statearr_32327 = state_32263;
(statearr_32327[(15)] = inst_32233);

(statearr_32327[(7)] = inst_32190);

return statearr_32327;
})();
var statearr_32328_33850 = state_32263__$1;
(statearr_32328_33850[(2)] = null);

(statearr_32328_33850[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (25))){
var inst_32259 = (state_32263[(2)]);
var state_32263__$1 = state_32263;
var statearr_32329_33851 = state_32263__$1;
(statearr_32329_33851[(2)] = inst_32259);

(statearr_32329_33851[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (34))){
var inst_32257 = (state_32263[(2)]);
var state_32263__$1 = state_32263;
var statearr_32330_33852 = state_32263__$1;
(statearr_32330_33852[(2)] = inst_32257);

(statearr_32330_33852[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (17))){
var state_32263__$1 = state_32263;
var statearr_32331_33853 = state_32263__$1;
(statearr_32331_33853[(2)] = false);

(statearr_32331_33853[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (3))){
var state_32263__$1 = state_32263;
var statearr_32332_33854 = state_32263__$1;
(statearr_32332_33854[(2)] = false);

(statearr_32332_33854[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (12))){
var inst_32261 = (state_32263[(2)]);
var state_32263__$1 = state_32263;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32263__$1,inst_32261);
} else {
if((state_val_32264 === (2))){
var inst_32165 = (state_32263[(8)]);
var inst_32170 = inst_32165.cljs$lang$protocol_mask$partition0$;
var inst_32171 = (inst_32170 & (64));
var inst_32172 = inst_32165.cljs$core$ISeq$;
var inst_32173 = (cljs.core.PROTOCOL_SENTINEL === inst_32172);
var inst_32174 = ((inst_32171) || (inst_32173));
var state_32263__$1 = state_32263;
if(cljs.core.truth_(inst_32174)){
var statearr_32333_33855 = state_32263__$1;
(statearr_32333_33855[(1)] = (5));

} else {
var statearr_32334_33856 = state_32263__$1;
(statearr_32334_33856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (23))){
var inst_32222 = (state_32263[(14)]);
var inst_32228 = (inst_32222 == null);
var state_32263__$1 = state_32263;
if(cljs.core.truth_(inst_32228)){
var statearr_32335_33863 = state_32263__$1;
(statearr_32335_33863[(1)] = (26));

} else {
var statearr_32336_33864 = state_32263__$1;
(statearr_32336_33864[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (35))){
var inst_32248 = (state_32263[(2)]);
var state_32263__$1 = state_32263;
if(cljs.core.truth_(inst_32248)){
var statearr_32337_33865 = state_32263__$1;
(statearr_32337_33865[(1)] = (36));

} else {
var statearr_32338_33866 = state_32263__$1;
(statearr_32338_33866[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (19))){
var inst_32190 = (state_32263[(7)]);
var inst_32210 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32190);
var state_32263__$1 = state_32263;
var statearr_32339_33871 = state_32263__$1;
(statearr_32339_33871[(2)] = inst_32210);

(statearr_32339_33871[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (11))){
var inst_32190 = (state_32263[(7)]);
var inst_32194 = (inst_32190 == null);
var inst_32195 = cljs.core.not(inst_32194);
var state_32263__$1 = state_32263;
if(inst_32195){
var statearr_32340_33872 = state_32263__$1;
(statearr_32340_33872[(1)] = (13));

} else {
var statearr_32341_33873 = state_32263__$1;
(statearr_32341_33873[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (9))){
var inst_32165 = (state_32263[(8)]);
var state_32263__$1 = state_32263;
var statearr_32343_33876 = state_32263__$1;
(statearr_32343_33876[(2)] = inst_32165);

(statearr_32343_33876[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (5))){
var state_32263__$1 = state_32263;
var statearr_32344_33887 = state_32263__$1;
(statearr_32344_33887[(2)] = true);

(statearr_32344_33887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (14))){
var state_32263__$1 = state_32263;
var statearr_32345_33891 = state_32263__$1;
(statearr_32345_33891[(2)] = false);

(statearr_32345_33891[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (26))){
var inst_32223 = (state_32263[(11)]);
var inst_32230 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32223);
var state_32263__$1 = state_32263;
var statearr_32347_33895 = state_32263__$1;
(statearr_32347_33895[(2)] = inst_32230);

(statearr_32347_33895[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (16))){
var state_32263__$1 = state_32263;
var statearr_32348_33896 = state_32263__$1;
(statearr_32348_33896[(2)] = true);

(statearr_32348_33896[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (38))){
var inst_32253 = (state_32263[(2)]);
var state_32263__$1 = state_32263;
var statearr_32349_33897 = state_32263__$1;
(statearr_32349_33897[(2)] = inst_32253);

(statearr_32349_33897[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (30))){
var inst_32214 = (state_32263[(9)]);
var inst_32215 = (state_32263[(13)]);
var inst_32223 = (state_32263[(11)]);
var inst_32240 = cljs.core.empty_QMARK_(inst_32214);
var inst_32241 = (inst_32215.cljs$core$IFn$_invoke$arity$1 ? inst_32215.cljs$core$IFn$_invoke$arity$1(inst_32223) : inst_32215.call(null,inst_32223));
var inst_32242 = cljs.core.not(inst_32241);
var inst_32243 = ((inst_32240) && (inst_32242));
var state_32263__$1 = state_32263;
var statearr_32350_33898 = state_32263__$1;
(statearr_32350_33898[(2)] = inst_32243);

(statearr_32350_33898[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (10))){
var inst_32165 = (state_32263[(8)]);
var inst_32186 = (state_32263[(2)]);
var inst_32187 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32186,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32188 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32186,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32189 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32186,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32190 = inst_32165;
var state_32263__$1 = (function (){var statearr_32351 = state_32263;
(statearr_32351[(16)] = inst_32188);

(statearr_32351[(17)] = inst_32187);

(statearr_32351[(18)] = inst_32189);

(statearr_32351[(7)] = inst_32190);

return statearr_32351;
})();
var statearr_32352_33905 = state_32263__$1;
(statearr_32352_33905[(2)] = null);

(statearr_32352_33905[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (18))){
var inst_32205 = (state_32263[(2)]);
var state_32263__$1 = state_32263;
var statearr_32353_33906 = state_32263__$1;
(statearr_32353_33906[(2)] = inst_32205);

(statearr_32353_33906[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (37))){
var state_32263__$1 = state_32263;
var statearr_32354_33907 = state_32263__$1;
(statearr_32354_33907[(2)] = null);

(statearr_32354_33907[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32264 === (8))){
var inst_32165 = (state_32263[(8)]);
var inst_32183 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32165);
var state_32263__$1 = state_32263;
var statearr_32355_33908 = state_32263__$1;
(statearr_32355_33908[(2)] = inst_32183);

(statearr_32355_33908[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__30740__auto__ = null;
var cljs$core$async$mix_$_state_machine__30740__auto____0 = (function (){
var statearr_32356 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32356[(0)] = cljs$core$async$mix_$_state_machine__30740__auto__);

(statearr_32356[(1)] = (1));

return statearr_32356;
});
var cljs$core$async$mix_$_state_machine__30740__auto____1 = (function (state_32263){
while(true){
var ret_value__30741__auto__ = (function (){try{while(true){
var result__30742__auto__ = switch__30739__auto__(state_32263);
if(cljs.core.keyword_identical_QMARK_(result__30742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30742__auto__;
}
break;
}
}catch (e32357){var ex__30743__auto__ = e32357;
var statearr_32358_33909 = state_32263;
(statearr_32358_33909[(2)] = ex__30743__auto__);


if(cljs.core.seq((state_32263[(4)]))){
var statearr_32359_33910 = state_32263;
(statearr_32359_33910[(1)] = cljs.core.first((state_32263[(4)])));

} else {
throw ex__30743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33912 = state_32263;
state_32263 = G__33912;
continue;
} else {
return ret_value__30741__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30740__auto__ = function(state_32263){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30740__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30740__auto____1.call(this,state_32263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30740__auto____0;
cljs$core$async$mix_$_state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30740__auto____1;
return cljs$core$async$mix_$_state_machine__30740__auto__;
})()
})();
var state__30939__auto__ = (function (){var statearr_32360 = f__30938__auto__();
(statearr_32360[(6)] = c__30937__auto___33788);

return statearr_32360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30939__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_33914 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_33914(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33915 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_33915(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33916 = (function() {
var G__33917 = null;
var G__33917__1 = (function (p){
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
var G__33917__2 = (function (p,v){
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
G__33917 = function(p,v){
switch(arguments.length){
case 1:
return G__33917__1.call(this,p);
case 2:
return G__33917__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33917.cljs$core$IFn$_invoke$arity$1 = G__33917__1;
G__33917.cljs$core$IFn$_invoke$arity$2 = G__33917__2;
return G__33917;
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33916(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33916(p,v);
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
var G__32372 = arguments.length;
switch (G__32372) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32370_SHARP_){
if(cljs.core.truth_((p1__32370_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32370_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32370_SHARP_.call(null,topic)))){
return p1__32370_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32370_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32375 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32375 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32376){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32376 = meta32376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32377,meta32376__$1){
var self__ = this;
var _32377__$1 = this;
return (new cljs.core.async.t_cljs$core$async32375(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32376__$1));
}));

(cljs.core.async.t_cljs$core$async32375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32377){
var self__ = this;
var _32377__$1 = this;
return self__.meta32376;
}));

(cljs.core.async.t_cljs$core$async32375.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32375.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32375.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32375.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32375.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async32375.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32375.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32375.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32376","meta32376",919855455,null)], null);
}));

(cljs.core.async.t_cljs$core$async32375.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32375.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32375");

(cljs.core.async.t_cljs$core$async32375.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32375");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32375.
 */
cljs.core.async.__GT_t_cljs$core$async32375 = (function cljs$core$async$__GT_t_cljs$core$async32375(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32376){
return (new cljs.core.async.t_cljs$core$async32375(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32376));
});

}

return (new cljs.core.async.t_cljs$core$async32375(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30937__auto___33937 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30938__auto__ = (function (){var switch__30739__auto__ = (function (state_32458){
var state_val_32459 = (state_32458[(1)]);
if((state_val_32459 === (7))){
var inst_32452 = (state_32458[(2)]);
var state_32458__$1 = state_32458;
var statearr_32463_33938 = state_32458__$1;
(statearr_32463_33938[(2)] = inst_32452);

(statearr_32463_33938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (20))){
var state_32458__$1 = state_32458;
var statearr_32464_33939 = state_32458__$1;
(statearr_32464_33939[(2)] = null);

(statearr_32464_33939[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (1))){
var state_32458__$1 = state_32458;
var statearr_32465_33940 = state_32458__$1;
(statearr_32465_33940[(2)] = null);

(statearr_32465_33940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (24))){
var inst_32434 = (state_32458[(7)]);
var inst_32444 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32434);
var state_32458__$1 = state_32458;
var statearr_32466_33941 = state_32458__$1;
(statearr_32466_33941[(2)] = inst_32444);

(statearr_32466_33941[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (4))){
var inst_32382 = (state_32458[(8)]);
var inst_32382__$1 = (state_32458[(2)]);
var inst_32384 = (inst_32382__$1 == null);
var state_32458__$1 = (function (){var statearr_32467 = state_32458;
(statearr_32467[(8)] = inst_32382__$1);

return statearr_32467;
})();
if(cljs.core.truth_(inst_32384)){
var statearr_32468_33942 = state_32458__$1;
(statearr_32468_33942[(1)] = (5));

} else {
var statearr_32469_33943 = state_32458__$1;
(statearr_32469_33943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (15))){
var inst_32428 = (state_32458[(2)]);
var state_32458__$1 = state_32458;
var statearr_32470_33944 = state_32458__$1;
(statearr_32470_33944[(2)] = inst_32428);

(statearr_32470_33944[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (21))){
var inst_32449 = (state_32458[(2)]);
var state_32458__$1 = (function (){var statearr_32471 = state_32458;
(statearr_32471[(9)] = inst_32449);

return statearr_32471;
})();
var statearr_32472_33946 = state_32458__$1;
(statearr_32472_33946[(2)] = null);

(statearr_32472_33946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (13))){
var inst_32410 = (state_32458[(10)]);
var inst_32412 = cljs.core.chunked_seq_QMARK_(inst_32410);
var state_32458__$1 = state_32458;
if(inst_32412){
var statearr_32474_33951 = state_32458__$1;
(statearr_32474_33951[(1)] = (16));

} else {
var statearr_32475_33952 = state_32458__$1;
(statearr_32475_33952[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (22))){
var inst_32441 = (state_32458[(2)]);
var state_32458__$1 = state_32458;
if(cljs.core.truth_(inst_32441)){
var statearr_32481_33953 = state_32458__$1;
(statearr_32481_33953[(1)] = (23));

} else {
var statearr_32482_33954 = state_32458__$1;
(statearr_32482_33954[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (6))){
var inst_32436 = (state_32458[(11)]);
var inst_32434 = (state_32458[(7)]);
var inst_32382 = (state_32458[(8)]);
var inst_32434__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32382) : topic_fn.call(null,inst_32382));
var inst_32435 = cljs.core.deref(mults);
var inst_32436__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32435,inst_32434__$1);
var state_32458__$1 = (function (){var statearr_32483 = state_32458;
(statearr_32483[(11)] = inst_32436__$1);

(statearr_32483[(7)] = inst_32434__$1);

return statearr_32483;
})();
if(cljs.core.truth_(inst_32436__$1)){
var statearr_32484_33955 = state_32458__$1;
(statearr_32484_33955[(1)] = (19));

} else {
var statearr_32485_33956 = state_32458__$1;
(statearr_32485_33956[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (25))){
var inst_32446 = (state_32458[(2)]);
var state_32458__$1 = state_32458;
var statearr_32486_33957 = state_32458__$1;
(statearr_32486_33957[(2)] = inst_32446);

(statearr_32486_33957[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (17))){
var inst_32410 = (state_32458[(10)]);
var inst_32419 = cljs.core.first(inst_32410);
var inst_32420 = cljs.core.async.muxch_STAR_(inst_32419);
var inst_32421 = cljs.core.async.close_BANG_(inst_32420);
var inst_32422 = cljs.core.next(inst_32410);
var inst_32395 = inst_32422;
var inst_32396 = null;
var inst_32397 = (0);
var inst_32398 = (0);
var state_32458__$1 = (function (){var statearr_32488 = state_32458;
(statearr_32488[(12)] = inst_32421);

(statearr_32488[(13)] = inst_32397);

(statearr_32488[(14)] = inst_32396);

(statearr_32488[(15)] = inst_32398);

(statearr_32488[(16)] = inst_32395);

return statearr_32488;
})();
var statearr_32489_34004 = state_32458__$1;
(statearr_32489_34004[(2)] = null);

(statearr_32489_34004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (3))){
var inst_32454 = (state_32458[(2)]);
var state_32458__$1 = state_32458;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32458__$1,inst_32454);
} else {
if((state_val_32459 === (12))){
var inst_32430 = (state_32458[(2)]);
var state_32458__$1 = state_32458;
var statearr_32492_34007 = state_32458__$1;
(statearr_32492_34007[(2)] = inst_32430);

(statearr_32492_34007[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (2))){
var state_32458__$1 = state_32458;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32458__$1,(4),ch);
} else {
if((state_val_32459 === (23))){
var state_32458__$1 = state_32458;
var statearr_32495_34009 = state_32458__$1;
(statearr_32495_34009[(2)] = null);

(statearr_32495_34009[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (19))){
var inst_32436 = (state_32458[(11)]);
var inst_32382 = (state_32458[(8)]);
var inst_32439 = cljs.core.async.muxch_STAR_(inst_32436);
var state_32458__$1 = state_32458;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32458__$1,(22),inst_32439,inst_32382);
} else {
if((state_val_32459 === (11))){
var inst_32410 = (state_32458[(10)]);
var inst_32395 = (state_32458[(16)]);
var inst_32410__$1 = cljs.core.seq(inst_32395);
var state_32458__$1 = (function (){var statearr_32503 = state_32458;
(statearr_32503[(10)] = inst_32410__$1);

return statearr_32503;
})();
if(inst_32410__$1){
var statearr_32504_34011 = state_32458__$1;
(statearr_32504_34011[(1)] = (13));

} else {
var statearr_32505_34012 = state_32458__$1;
(statearr_32505_34012[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (9))){
var inst_32432 = (state_32458[(2)]);
var state_32458__$1 = state_32458;
var statearr_32507_34013 = state_32458__$1;
(statearr_32507_34013[(2)] = inst_32432);

(statearr_32507_34013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (5))){
var inst_32391 = cljs.core.deref(mults);
var inst_32392 = cljs.core.vals(inst_32391);
var inst_32393 = cljs.core.seq(inst_32392);
var inst_32395 = inst_32393;
var inst_32396 = null;
var inst_32397 = (0);
var inst_32398 = (0);
var state_32458__$1 = (function (){var statearr_32511 = state_32458;
(statearr_32511[(13)] = inst_32397);

(statearr_32511[(14)] = inst_32396);

(statearr_32511[(15)] = inst_32398);

(statearr_32511[(16)] = inst_32395);

return statearr_32511;
})();
var statearr_32512_34014 = state_32458__$1;
(statearr_32512_34014[(2)] = null);

(statearr_32512_34014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (14))){
var state_32458__$1 = state_32458;
var statearr_32516_34015 = state_32458__$1;
(statearr_32516_34015[(2)] = null);

(statearr_32516_34015[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (16))){
var inst_32410 = (state_32458[(10)]);
var inst_32414 = cljs.core.chunk_first(inst_32410);
var inst_32415 = cljs.core.chunk_rest(inst_32410);
var inst_32416 = cljs.core.count(inst_32414);
var inst_32395 = inst_32415;
var inst_32396 = inst_32414;
var inst_32397 = inst_32416;
var inst_32398 = (0);
var state_32458__$1 = (function (){var statearr_32517 = state_32458;
(statearr_32517[(13)] = inst_32397);

(statearr_32517[(14)] = inst_32396);

(statearr_32517[(15)] = inst_32398);

(statearr_32517[(16)] = inst_32395);

return statearr_32517;
})();
var statearr_32518_34016 = state_32458__$1;
(statearr_32518_34016[(2)] = null);

(statearr_32518_34016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (10))){
var inst_32397 = (state_32458[(13)]);
var inst_32396 = (state_32458[(14)]);
var inst_32398 = (state_32458[(15)]);
var inst_32395 = (state_32458[(16)]);
var inst_32403 = cljs.core._nth(inst_32396,inst_32398);
var inst_32404 = cljs.core.async.muxch_STAR_(inst_32403);
var inst_32405 = cljs.core.async.close_BANG_(inst_32404);
var inst_32406 = (inst_32398 + (1));
var tmp32513 = inst_32397;
var tmp32514 = inst_32396;
var tmp32515 = inst_32395;
var inst_32395__$1 = tmp32515;
var inst_32396__$1 = tmp32514;
var inst_32397__$1 = tmp32513;
var inst_32398__$1 = inst_32406;
var state_32458__$1 = (function (){var statearr_32519 = state_32458;
(statearr_32519[(13)] = inst_32397__$1);

(statearr_32519[(17)] = inst_32405);

(statearr_32519[(14)] = inst_32396__$1);

(statearr_32519[(15)] = inst_32398__$1);

(statearr_32519[(16)] = inst_32395__$1);

return statearr_32519;
})();
var statearr_32520_34017 = state_32458__$1;
(statearr_32520_34017[(2)] = null);

(statearr_32520_34017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (18))){
var inst_32425 = (state_32458[(2)]);
var state_32458__$1 = state_32458;
var statearr_32521_34018 = state_32458__$1;
(statearr_32521_34018[(2)] = inst_32425);

(statearr_32521_34018[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (8))){
var inst_32397 = (state_32458[(13)]);
var inst_32398 = (state_32458[(15)]);
var inst_32400 = (inst_32398 < inst_32397);
var inst_32401 = inst_32400;
var state_32458__$1 = state_32458;
if(cljs.core.truth_(inst_32401)){
var statearr_32522_34019 = state_32458__$1;
(statearr_32522_34019[(1)] = (10));

} else {
var statearr_32523_34020 = state_32458__$1;
(statearr_32523_34020[(1)] = (11));

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
var cljs$core$async$state_machine__30740__auto__ = null;
var cljs$core$async$state_machine__30740__auto____0 = (function (){
var statearr_32524 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32524[(0)] = cljs$core$async$state_machine__30740__auto__);

(statearr_32524[(1)] = (1));

return statearr_32524;
});
var cljs$core$async$state_machine__30740__auto____1 = (function (state_32458){
while(true){
var ret_value__30741__auto__ = (function (){try{while(true){
var result__30742__auto__ = switch__30739__auto__(state_32458);
if(cljs.core.keyword_identical_QMARK_(result__30742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30742__auto__;
}
break;
}
}catch (e32525){var ex__30743__auto__ = e32525;
var statearr_32526_34024 = state_32458;
(statearr_32526_34024[(2)] = ex__30743__auto__);


if(cljs.core.seq((state_32458[(4)]))){
var statearr_32527_34025 = state_32458;
(statearr_32527_34025[(1)] = cljs.core.first((state_32458[(4)])));

} else {
throw ex__30743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34027 = state_32458;
state_32458 = G__34027;
continue;
} else {
return ret_value__30741__auto__;
}
break;
}
});
cljs$core$async$state_machine__30740__auto__ = function(state_32458){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30740__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30740__auto____1.call(this,state_32458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30740__auto____0;
cljs$core$async$state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30740__auto____1;
return cljs$core$async$state_machine__30740__auto__;
})()
})();
var state__30939__auto__ = (function (){var statearr_32528 = f__30938__auto__();
(statearr_32528[(6)] = c__30937__auto___33937);

return statearr_32528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30939__auto__);
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
var G__32530 = arguments.length;
switch (G__32530) {
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
var G__32542 = arguments.length;
switch (G__32542) {
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
var c__30937__auto___34034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30938__auto__ = (function (){var switch__30739__auto__ = (function (state_32605){
var state_val_32606 = (state_32605[(1)]);
if((state_val_32606 === (7))){
var state_32605__$1 = state_32605;
var statearr_32608_34039 = state_32605__$1;
(statearr_32608_34039[(2)] = null);

(statearr_32608_34039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32606 === (1))){
var state_32605__$1 = state_32605;
var statearr_32609_34044 = state_32605__$1;
(statearr_32609_34044[(2)] = null);

(statearr_32609_34044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32606 === (4))){
var inst_32566 = (state_32605[(7)]);
var inst_32565 = (state_32605[(8)]);
var inst_32568 = (inst_32566 < inst_32565);
var state_32605__$1 = state_32605;
if(cljs.core.truth_(inst_32568)){
var statearr_32610_34046 = state_32605__$1;
(statearr_32610_34046[(1)] = (6));

} else {
var statearr_32611_34047 = state_32605__$1;
(statearr_32611_34047[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32606 === (15))){
var inst_32591 = (state_32605[(9)]);
var inst_32596 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32591);
var state_32605__$1 = state_32605;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32605__$1,(17),out,inst_32596);
} else {
if((state_val_32606 === (13))){
var inst_32591 = (state_32605[(9)]);
var inst_32591__$1 = (state_32605[(2)]);
var inst_32592 = cljs.core.some(cljs.core.nil_QMARK_,inst_32591__$1);
var state_32605__$1 = (function (){var statearr_32612 = state_32605;
(statearr_32612[(9)] = inst_32591__$1);

return statearr_32612;
})();
if(cljs.core.truth_(inst_32592)){
var statearr_32613_34053 = state_32605__$1;
(statearr_32613_34053[(1)] = (14));

} else {
var statearr_32614_34054 = state_32605__$1;
(statearr_32614_34054[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32606 === (6))){
var state_32605__$1 = state_32605;
var statearr_32619_34055 = state_32605__$1;
(statearr_32619_34055[(2)] = null);

(statearr_32619_34055[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32606 === (17))){
var inst_32598 = (state_32605[(2)]);
var state_32605__$1 = (function (){var statearr_32629 = state_32605;
(statearr_32629[(10)] = inst_32598);

return statearr_32629;
})();
var statearr_32630_34060 = state_32605__$1;
(statearr_32630_34060[(2)] = null);

(statearr_32630_34060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32606 === (3))){
var inst_32603 = (state_32605[(2)]);
var state_32605__$1 = state_32605;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32605__$1,inst_32603);
} else {
if((state_val_32606 === (12))){
var _ = (function (){var statearr_32631 = state_32605;
(statearr_32631[(4)] = cljs.core.rest((state_32605[(4)])));

return statearr_32631;
})();
var state_32605__$1 = state_32605;
var ex32628 = (state_32605__$1[(2)]);
var statearr_32632_34061 = state_32605__$1;
(statearr_32632_34061[(5)] = ex32628);


if((ex32628 instanceof Object)){
var statearr_32633_34062 = state_32605__$1;
(statearr_32633_34062[(1)] = (11));

(statearr_32633_34062[(5)] = null);

} else {
throw ex32628;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32606 === (2))){
var inst_32564 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32565 = cnt;
var inst_32566 = (0);
var state_32605__$1 = (function (){var statearr_32634 = state_32605;
(statearr_32634[(11)] = inst_32564);

(statearr_32634[(7)] = inst_32566);

(statearr_32634[(8)] = inst_32565);

return statearr_32634;
})();
var statearr_32635_34063 = state_32605__$1;
(statearr_32635_34063[(2)] = null);

(statearr_32635_34063[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32606 === (11))){
var inst_32570 = (state_32605[(2)]);
var inst_32571 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32605__$1 = (function (){var statearr_32646 = state_32605;
(statearr_32646[(12)] = inst_32570);

return statearr_32646;
})();
var statearr_32647_34064 = state_32605__$1;
(statearr_32647_34064[(2)] = inst_32571);

(statearr_32647_34064[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32606 === (9))){
var inst_32566 = (state_32605[(7)]);
var _ = (function (){var statearr_32648 = state_32605;
(statearr_32648[(4)] = cljs.core.cons((12),(state_32605[(4)])));

return statearr_32648;
})();
var inst_32577 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32566) : chs__$1.call(null,inst_32566));
var inst_32578 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32566) : done.call(null,inst_32566));
var inst_32579 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32577,inst_32578);
var ___$1 = (function (){var statearr_32650 = state_32605;
(statearr_32650[(4)] = cljs.core.rest((state_32605[(4)])));

return statearr_32650;
})();
var state_32605__$1 = state_32605;
var statearr_32652_34065 = state_32605__$1;
(statearr_32652_34065[(2)] = inst_32579);

(statearr_32652_34065[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32606 === (5))){
var inst_32589 = (state_32605[(2)]);
var state_32605__$1 = (function (){var statearr_32655 = state_32605;
(statearr_32655[(13)] = inst_32589);

return statearr_32655;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32605__$1,(13),dchan);
} else {
if((state_val_32606 === (14))){
var inst_32594 = cljs.core.async.close_BANG_(out);
var state_32605__$1 = state_32605;
var statearr_32657_34066 = state_32605__$1;
(statearr_32657_34066[(2)] = inst_32594);

(statearr_32657_34066[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32606 === (16))){
var inst_32601 = (state_32605[(2)]);
var state_32605__$1 = state_32605;
var statearr_32658_34067 = state_32605__$1;
(statearr_32658_34067[(2)] = inst_32601);

(statearr_32658_34067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32606 === (10))){
var inst_32566 = (state_32605[(7)]);
var inst_32582 = (state_32605[(2)]);
var inst_32583 = (inst_32566 + (1));
var inst_32566__$1 = inst_32583;
var state_32605__$1 = (function (){var statearr_32662 = state_32605;
(statearr_32662[(7)] = inst_32566__$1);

(statearr_32662[(14)] = inst_32582);

return statearr_32662;
})();
var statearr_32663_34072 = state_32605__$1;
(statearr_32663_34072[(2)] = null);

(statearr_32663_34072[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32606 === (8))){
var inst_32587 = (state_32605[(2)]);
var state_32605__$1 = state_32605;
var statearr_32664_34077 = state_32605__$1;
(statearr_32664_34077[(2)] = inst_32587);

(statearr_32664_34077[(1)] = (5));


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
var cljs$core$async$state_machine__30740__auto__ = null;
var cljs$core$async$state_machine__30740__auto____0 = (function (){
var statearr_32666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32666[(0)] = cljs$core$async$state_machine__30740__auto__);

(statearr_32666[(1)] = (1));

return statearr_32666;
});
var cljs$core$async$state_machine__30740__auto____1 = (function (state_32605){
while(true){
var ret_value__30741__auto__ = (function (){try{while(true){
var result__30742__auto__ = switch__30739__auto__(state_32605);
if(cljs.core.keyword_identical_QMARK_(result__30742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30742__auto__;
}
break;
}
}catch (e32667){var ex__30743__auto__ = e32667;
var statearr_32668_34093 = state_32605;
(statearr_32668_34093[(2)] = ex__30743__auto__);


if(cljs.core.seq((state_32605[(4)]))){
var statearr_32671_34094 = state_32605;
(statearr_32671_34094[(1)] = cljs.core.first((state_32605[(4)])));

} else {
throw ex__30743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34095 = state_32605;
state_32605 = G__34095;
continue;
} else {
return ret_value__30741__auto__;
}
break;
}
});
cljs$core$async$state_machine__30740__auto__ = function(state_32605){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30740__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30740__auto____1.call(this,state_32605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30740__auto____0;
cljs$core$async$state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30740__auto____1;
return cljs$core$async$state_machine__30740__auto__;
})()
})();
var state__30939__auto__ = (function (){var statearr_32674 = f__30938__auto__();
(statearr_32674[(6)] = c__30937__auto___34034);

return statearr_32674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30939__auto__);
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
var c__30937__auto___34097 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30938__auto__ = (function (){var switch__30739__auto__ = (function (state_32716){
var state_val_32717 = (state_32716[(1)]);
if((state_val_32717 === (7))){
var inst_32689 = (state_32716[(7)]);
var inst_32690 = (state_32716[(8)]);
var inst_32689__$1 = (state_32716[(2)]);
var inst_32690__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32689__$1,(0),null);
var inst_32697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32689__$1,(1),null);
var inst_32698 = (inst_32690__$1 == null);
var state_32716__$1 = (function (){var statearr_32718 = state_32716;
(statearr_32718[(7)] = inst_32689__$1);

(statearr_32718[(9)] = inst_32697);

(statearr_32718[(8)] = inst_32690__$1);

return statearr_32718;
})();
if(cljs.core.truth_(inst_32698)){
var statearr_32722_34099 = state_32716__$1;
(statearr_32722_34099[(1)] = (8));

} else {
var statearr_32723_34100 = state_32716__$1;
(statearr_32723_34100[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32717 === (1))){
var inst_32679 = cljs.core.vec(chs);
var inst_32680 = inst_32679;
var state_32716__$1 = (function (){var statearr_32724 = state_32716;
(statearr_32724[(10)] = inst_32680);

return statearr_32724;
})();
var statearr_32725_34101 = state_32716__$1;
(statearr_32725_34101[(2)] = null);

(statearr_32725_34101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32717 === (4))){
var inst_32680 = (state_32716[(10)]);
var state_32716__$1 = state_32716;
return cljs.core.async.ioc_alts_BANG_(state_32716__$1,(7),inst_32680);
} else {
if((state_val_32717 === (6))){
var inst_32712 = (state_32716[(2)]);
var state_32716__$1 = state_32716;
var statearr_32726_34102 = state_32716__$1;
(statearr_32726_34102[(2)] = inst_32712);

(statearr_32726_34102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32717 === (3))){
var inst_32714 = (state_32716[(2)]);
var state_32716__$1 = state_32716;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32716__$1,inst_32714);
} else {
if((state_val_32717 === (2))){
var inst_32680 = (state_32716[(10)]);
var inst_32682 = cljs.core.count(inst_32680);
var inst_32683 = (inst_32682 > (0));
var state_32716__$1 = state_32716;
if(cljs.core.truth_(inst_32683)){
var statearr_32728_34103 = state_32716__$1;
(statearr_32728_34103[(1)] = (4));

} else {
var statearr_32729_34104 = state_32716__$1;
(statearr_32729_34104[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32717 === (11))){
var inst_32680 = (state_32716[(10)]);
var inst_32705 = (state_32716[(2)]);
var tmp32727 = inst_32680;
var inst_32680__$1 = tmp32727;
var state_32716__$1 = (function (){var statearr_32730 = state_32716;
(statearr_32730[(11)] = inst_32705);

(statearr_32730[(10)] = inst_32680__$1);

return statearr_32730;
})();
var statearr_32731_34105 = state_32716__$1;
(statearr_32731_34105[(2)] = null);

(statearr_32731_34105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32717 === (9))){
var inst_32690 = (state_32716[(8)]);
var state_32716__$1 = state_32716;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32716__$1,(11),out,inst_32690);
} else {
if((state_val_32717 === (5))){
var inst_32710 = cljs.core.async.close_BANG_(out);
var state_32716__$1 = state_32716;
var statearr_32732_34106 = state_32716__$1;
(statearr_32732_34106[(2)] = inst_32710);

(statearr_32732_34106[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32717 === (10))){
var inst_32708 = (state_32716[(2)]);
var state_32716__$1 = state_32716;
var statearr_32733_34107 = state_32716__$1;
(statearr_32733_34107[(2)] = inst_32708);

(statearr_32733_34107[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32717 === (8))){
var inst_32680 = (state_32716[(10)]);
var inst_32689 = (state_32716[(7)]);
var inst_32697 = (state_32716[(9)]);
var inst_32690 = (state_32716[(8)]);
var inst_32700 = (function (){var cs = inst_32680;
var vec__32685 = inst_32689;
var v = inst_32690;
var c = inst_32697;
return (function (p1__32676_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32676_SHARP_);
});
})();
var inst_32701 = cljs.core.filterv(inst_32700,inst_32680);
var inst_32680__$1 = inst_32701;
var state_32716__$1 = (function (){var statearr_32734 = state_32716;
(statearr_32734[(10)] = inst_32680__$1);

return statearr_32734;
})();
var statearr_32735_34108 = state_32716__$1;
(statearr_32735_34108[(2)] = null);

(statearr_32735_34108[(1)] = (2));


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
var cljs$core$async$state_machine__30740__auto__ = null;
var cljs$core$async$state_machine__30740__auto____0 = (function (){
var statearr_32736 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32736[(0)] = cljs$core$async$state_machine__30740__auto__);

(statearr_32736[(1)] = (1));

return statearr_32736;
});
var cljs$core$async$state_machine__30740__auto____1 = (function (state_32716){
while(true){
var ret_value__30741__auto__ = (function (){try{while(true){
var result__30742__auto__ = switch__30739__auto__(state_32716);
if(cljs.core.keyword_identical_QMARK_(result__30742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30742__auto__;
}
break;
}
}catch (e32737){var ex__30743__auto__ = e32737;
var statearr_32738_34191 = state_32716;
(statearr_32738_34191[(2)] = ex__30743__auto__);


if(cljs.core.seq((state_32716[(4)]))){
var statearr_32739_34192 = state_32716;
(statearr_32739_34192[(1)] = cljs.core.first((state_32716[(4)])));

} else {
throw ex__30743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34193 = state_32716;
state_32716 = G__34193;
continue;
} else {
return ret_value__30741__auto__;
}
break;
}
});
cljs$core$async$state_machine__30740__auto__ = function(state_32716){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30740__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30740__auto____1.call(this,state_32716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30740__auto____0;
cljs$core$async$state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30740__auto____1;
return cljs$core$async$state_machine__30740__auto__;
})()
})();
var state__30939__auto__ = (function (){var statearr_32740 = f__30938__auto__();
(statearr_32740[(6)] = c__30937__auto___34097);

return statearr_32740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30939__auto__);
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
var c__30937__auto___34195 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30938__auto__ = (function (){var switch__30739__auto__ = (function (state_32766){
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
var statearr_32769_34216 = state_32766__$1;
(statearr_32769_34216[(1)] = (8));

} else {
var statearr_32770_34217 = state_32766__$1;
(statearr_32770_34217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32767 === (1))){
var inst_32743 = (0);
var state_32766__$1 = (function (){var statearr_32771 = state_32766;
(statearr_32771[(8)] = inst_32743);

return statearr_32771;
})();
var statearr_32772_34218 = state_32766__$1;
(statearr_32772_34218[(2)] = null);

(statearr_32772_34218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32767 === (4))){
var state_32766__$1 = state_32766;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32766__$1,(7),ch);
} else {
if((state_val_32767 === (6))){
var inst_32761 = (state_32766[(2)]);
var state_32766__$1 = state_32766;
var statearr_32773_34219 = state_32766__$1;
(statearr_32773_34219[(2)] = inst_32761);

(statearr_32773_34219[(1)] = (3));


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
var statearr_32775_34220 = state_32766__$1;
(statearr_32775_34220[(1)] = (4));

} else {
var statearr_32776_34221 = state_32766__$1;
(statearr_32776_34221[(1)] = (5));

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
var statearr_32778_34222 = state_32766__$1;
(statearr_32778_34222[(2)] = null);

(statearr_32778_34222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32767 === (9))){
var state_32766__$1 = state_32766;
var statearr_32779_34223 = state_32766__$1;
(statearr_32779_34223[(2)] = null);

(statearr_32779_34223[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32767 === (5))){
var state_32766__$1 = state_32766;
var statearr_32780_34224 = state_32766__$1;
(statearr_32780_34224[(2)] = null);

(statearr_32780_34224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32767 === (10))){
var inst_32758 = (state_32766[(2)]);
var state_32766__$1 = state_32766;
var statearr_32781_34225 = state_32766__$1;
(statearr_32781_34225[(2)] = inst_32758);

(statearr_32781_34225[(1)] = (6));


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
var cljs$core$async$state_machine__30740__auto__ = null;
var cljs$core$async$state_machine__30740__auto____0 = (function (){
var statearr_32782 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32782[(0)] = cljs$core$async$state_machine__30740__auto__);

(statearr_32782[(1)] = (1));

return statearr_32782;
});
var cljs$core$async$state_machine__30740__auto____1 = (function (state_32766){
while(true){
var ret_value__30741__auto__ = (function (){try{while(true){
var result__30742__auto__ = switch__30739__auto__(state_32766);
if(cljs.core.keyword_identical_QMARK_(result__30742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30742__auto__;
}
break;
}
}catch (e32783){var ex__30743__auto__ = e32783;
var statearr_32784_34226 = state_32766;
(statearr_32784_34226[(2)] = ex__30743__auto__);


if(cljs.core.seq((state_32766[(4)]))){
var statearr_32785_34228 = state_32766;
(statearr_32785_34228[(1)] = cljs.core.first((state_32766[(4)])));

} else {
throw ex__30743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34229 = state_32766;
state_32766 = G__34229;
continue;
} else {
return ret_value__30741__auto__;
}
break;
}
});
cljs$core$async$state_machine__30740__auto__ = function(state_32766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30740__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30740__auto____1.call(this,state_32766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30740__auto____0;
cljs$core$async$state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30740__auto____1;
return cljs$core$async$state_machine__30740__auto__;
})()
})();
var state__30939__auto__ = (function (){var statearr_32786 = f__30938__auto__();
(statearr_32786[(6)] = c__30937__auto___34195);

return statearr_32786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30939__auto__);
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
var G__32798 = (((p1__32787_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32787_SHARP_) : self__.f.call(null,p1__32787_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32798) : f1.call(null,G__32798));
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
return cljs.core.async.impl.channels.box((function (){var G__32799 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32799) : self__.f.call(null,G__32799));
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
cljs.core.async.t_cljs$core$async32803 = (function (f,ch,meta32804){
this.f = f;
this.ch = ch;
this.meta32804 = meta32804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32805,meta32804__$1){
var self__ = this;
var _32805__$1 = this;
return (new cljs.core.async.t_cljs$core$async32803(self__.f,self__.ch,meta32804__$1));
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
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32803.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32804","meta32804",1653032545,null)], null);
}));

(cljs.core.async.t_cljs$core$async32803.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32803.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32803");

(cljs.core.async.t_cljs$core$async32803.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32803");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32803.
 */
cljs.core.async.__GT_t_cljs$core$async32803 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32803(f__$1,ch__$1,meta32804){
return (new cljs.core.async.t_cljs$core$async32803(f__$1,ch__$1,meta32804));
});

}

return (new cljs.core.async.t_cljs$core$async32803(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32811 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32811 = (function (p,ch,meta32812){
this.p = p;
this.ch = ch;
this.meta32812 = meta32812;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32813,meta32812__$1){
var self__ = this;
var _32813__$1 = this;
return (new cljs.core.async.t_cljs$core$async32811(self__.p,self__.ch,meta32812__$1));
}));

(cljs.core.async.t_cljs$core$async32811.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32813){
var self__ = this;
var _32813__$1 = this;
return self__.meta32812;
}));

(cljs.core.async.t_cljs$core$async32811.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32811.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32811.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32811.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32811.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32811.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32811.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32811.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32812","meta32812",-468805798,null)], null);
}));

(cljs.core.async.t_cljs$core$async32811.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32811.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32811");

(cljs.core.async.t_cljs$core$async32811.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32811");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32811.
 */
cljs.core.async.__GT_t_cljs$core$async32811 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32811(p__$1,ch__$1,meta32812){
return (new cljs.core.async.t_cljs$core$async32811(p__$1,ch__$1,meta32812));
});

}

return (new cljs.core.async.t_cljs$core$async32811(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32820 = arguments.length;
switch (G__32820) {
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
var c__30937__auto___34284 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30938__auto__ = (function (){var switch__30739__auto__ = (function (state_32845){
var state_val_32846 = (state_32845[(1)]);
if((state_val_32846 === (7))){
var inst_32841 = (state_32845[(2)]);
var state_32845__$1 = state_32845;
var statearr_32847_34285 = state_32845__$1;
(statearr_32847_34285[(2)] = inst_32841);

(statearr_32847_34285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32846 === (1))){
var state_32845__$1 = state_32845;
var statearr_32848_34286 = state_32845__$1;
(statearr_32848_34286[(2)] = null);

(statearr_32848_34286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32846 === (4))){
var inst_32826 = (state_32845[(7)]);
var inst_32826__$1 = (state_32845[(2)]);
var inst_32828 = (inst_32826__$1 == null);
var state_32845__$1 = (function (){var statearr_32853 = state_32845;
(statearr_32853[(7)] = inst_32826__$1);

return statearr_32853;
})();
if(cljs.core.truth_(inst_32828)){
var statearr_32854_34303 = state_32845__$1;
(statearr_32854_34303[(1)] = (5));

} else {
var statearr_32858_34305 = state_32845__$1;
(statearr_32858_34305[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32846 === (6))){
var inst_32826 = (state_32845[(7)]);
var inst_32832 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32826) : p.call(null,inst_32826));
var state_32845__$1 = state_32845;
if(cljs.core.truth_(inst_32832)){
var statearr_32863_34306 = state_32845__$1;
(statearr_32863_34306[(1)] = (8));

} else {
var statearr_32865_34308 = state_32845__$1;
(statearr_32865_34308[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32846 === (3))){
var inst_32843 = (state_32845[(2)]);
var state_32845__$1 = state_32845;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32845__$1,inst_32843);
} else {
if((state_val_32846 === (2))){
var state_32845__$1 = state_32845;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32845__$1,(4),ch);
} else {
if((state_val_32846 === (11))){
var inst_32835 = (state_32845[(2)]);
var state_32845__$1 = state_32845;
var statearr_32875_34309 = state_32845__$1;
(statearr_32875_34309[(2)] = inst_32835);

(statearr_32875_34309[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32846 === (9))){
var state_32845__$1 = state_32845;
var statearr_32876_34310 = state_32845__$1;
(statearr_32876_34310[(2)] = null);

(statearr_32876_34310[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32846 === (5))){
var inst_32830 = cljs.core.async.close_BANG_(out);
var state_32845__$1 = state_32845;
var statearr_32877_34311 = state_32845__$1;
(statearr_32877_34311[(2)] = inst_32830);

(statearr_32877_34311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32846 === (10))){
var inst_32838 = (state_32845[(2)]);
var state_32845__$1 = (function (){var statearr_32878 = state_32845;
(statearr_32878[(8)] = inst_32838);

return statearr_32878;
})();
var statearr_32879_34312 = state_32845__$1;
(statearr_32879_34312[(2)] = null);

(statearr_32879_34312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32846 === (8))){
var inst_32826 = (state_32845[(7)]);
var state_32845__$1 = state_32845;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32845__$1,(11),out,inst_32826);
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
var cljs$core$async$state_machine__30740__auto__ = null;
var cljs$core$async$state_machine__30740__auto____0 = (function (){
var statearr_32893 = [null,null,null,null,null,null,null,null,null];
(statearr_32893[(0)] = cljs$core$async$state_machine__30740__auto__);

(statearr_32893[(1)] = (1));

return statearr_32893;
});
var cljs$core$async$state_machine__30740__auto____1 = (function (state_32845){
while(true){
var ret_value__30741__auto__ = (function (){try{while(true){
var result__30742__auto__ = switch__30739__auto__(state_32845);
if(cljs.core.keyword_identical_QMARK_(result__30742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30742__auto__;
}
break;
}
}catch (e32897){var ex__30743__auto__ = e32897;
var statearr_32902_34313 = state_32845;
(statearr_32902_34313[(2)] = ex__30743__auto__);


if(cljs.core.seq((state_32845[(4)]))){
var statearr_32908_34314 = state_32845;
(statearr_32908_34314[(1)] = cljs.core.first((state_32845[(4)])));

} else {
throw ex__30743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34315 = state_32845;
state_32845 = G__34315;
continue;
} else {
return ret_value__30741__auto__;
}
break;
}
});
cljs$core$async$state_machine__30740__auto__ = function(state_32845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30740__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30740__auto____1.call(this,state_32845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30740__auto____0;
cljs$core$async$state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30740__auto____1;
return cljs$core$async$state_machine__30740__auto__;
})()
})();
var state__30939__auto__ = (function (){var statearr_32910 = f__30938__auto__();
(statearr_32910[(6)] = c__30937__auto___34284);

return statearr_32910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30939__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32912 = arguments.length;
switch (G__32912) {
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
var c__30937__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30938__auto__ = (function (){var switch__30739__auto__ = (function (state_32978){
var state_val_32979 = (state_32978[(1)]);
if((state_val_32979 === (7))){
var inst_32974 = (state_32978[(2)]);
var state_32978__$1 = state_32978;
var statearr_32982_34318 = state_32978__$1;
(statearr_32982_34318[(2)] = inst_32974);

(statearr_32982_34318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (20))){
var inst_32944 = (state_32978[(7)]);
var inst_32955 = (state_32978[(2)]);
var inst_32956 = cljs.core.next(inst_32944);
var inst_32930 = inst_32956;
var inst_32931 = null;
var inst_32932 = (0);
var inst_32933 = (0);
var state_32978__$1 = (function (){var statearr_32984 = state_32978;
(statearr_32984[(8)] = inst_32932);

(statearr_32984[(9)] = inst_32930);

(statearr_32984[(10)] = inst_32931);

(statearr_32984[(11)] = inst_32933);

(statearr_32984[(12)] = inst_32955);

return statearr_32984;
})();
var statearr_32986_34319 = state_32978__$1;
(statearr_32986_34319[(2)] = null);

(statearr_32986_34319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (1))){
var state_32978__$1 = state_32978;
var statearr_32989_34321 = state_32978__$1;
(statearr_32989_34321[(2)] = null);

(statearr_32989_34321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (4))){
var inst_32919 = (state_32978[(13)]);
var inst_32919__$1 = (state_32978[(2)]);
var inst_32920 = (inst_32919__$1 == null);
var state_32978__$1 = (function (){var statearr_32991 = state_32978;
(statearr_32991[(13)] = inst_32919__$1);

return statearr_32991;
})();
if(cljs.core.truth_(inst_32920)){
var statearr_32992_34323 = state_32978__$1;
(statearr_32992_34323[(1)] = (5));

} else {
var statearr_32993_34324 = state_32978__$1;
(statearr_32993_34324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (15))){
var state_32978__$1 = state_32978;
var statearr_32998_34325 = state_32978__$1;
(statearr_32998_34325[(2)] = null);

(statearr_32998_34325[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (21))){
var state_32978__$1 = state_32978;
var statearr_32999_34326 = state_32978__$1;
(statearr_32999_34326[(2)] = null);

(statearr_32999_34326[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (13))){
var inst_32932 = (state_32978[(8)]);
var inst_32930 = (state_32978[(9)]);
var inst_32931 = (state_32978[(10)]);
var inst_32933 = (state_32978[(11)]);
var inst_32940 = (state_32978[(2)]);
var inst_32941 = (inst_32933 + (1));
var tmp32994 = inst_32932;
var tmp32995 = inst_32930;
var tmp32996 = inst_32931;
var inst_32930__$1 = tmp32995;
var inst_32931__$1 = tmp32996;
var inst_32932__$1 = tmp32994;
var inst_32933__$1 = inst_32941;
var state_32978__$1 = (function (){var statearr_33001 = state_32978;
(statearr_33001[(8)] = inst_32932__$1);

(statearr_33001[(9)] = inst_32930__$1);

(statearr_33001[(10)] = inst_32931__$1);

(statearr_33001[(11)] = inst_32933__$1);

(statearr_33001[(14)] = inst_32940);

return statearr_33001;
})();
var statearr_33002_34329 = state_32978__$1;
(statearr_33002_34329[(2)] = null);

(statearr_33002_34329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (22))){
var state_32978__$1 = state_32978;
var statearr_33003_34330 = state_32978__$1;
(statearr_33003_34330[(2)] = null);

(statearr_33003_34330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (6))){
var inst_32919 = (state_32978[(13)]);
var inst_32928 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32919) : f.call(null,inst_32919));
var inst_32929 = cljs.core.seq(inst_32928);
var inst_32930 = inst_32929;
var inst_32931 = null;
var inst_32932 = (0);
var inst_32933 = (0);
var state_32978__$1 = (function (){var statearr_33004 = state_32978;
(statearr_33004[(8)] = inst_32932);

(statearr_33004[(9)] = inst_32930);

(statearr_33004[(10)] = inst_32931);

(statearr_33004[(11)] = inst_32933);

return statearr_33004;
})();
var statearr_33005_34331 = state_32978__$1;
(statearr_33005_34331[(2)] = null);

(statearr_33005_34331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (17))){
var inst_32944 = (state_32978[(7)]);
var inst_32948 = cljs.core.chunk_first(inst_32944);
var inst_32949 = cljs.core.chunk_rest(inst_32944);
var inst_32950 = cljs.core.count(inst_32948);
var inst_32930 = inst_32949;
var inst_32931 = inst_32948;
var inst_32932 = inst_32950;
var inst_32933 = (0);
var state_32978__$1 = (function (){var statearr_33006 = state_32978;
(statearr_33006[(8)] = inst_32932);

(statearr_33006[(9)] = inst_32930);

(statearr_33006[(10)] = inst_32931);

(statearr_33006[(11)] = inst_32933);

return statearr_33006;
})();
var statearr_33007_34332 = state_32978__$1;
(statearr_33007_34332[(2)] = null);

(statearr_33007_34332[(1)] = (8));


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
var statearr_33010_34333 = state_32978__$1;
(statearr_33010_34333[(2)] = inst_32964);

(statearr_33010_34333[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (2))){
var state_32978__$1 = state_32978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32978__$1,(4),in$);
} else {
if((state_val_32979 === (23))){
var inst_32972 = (state_32978[(2)]);
var state_32978__$1 = state_32978;
var statearr_33012_34334 = state_32978__$1;
(statearr_33012_34334[(2)] = inst_32972);

(statearr_33012_34334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (19))){
var inst_32959 = (state_32978[(2)]);
var state_32978__$1 = state_32978;
var statearr_33013_34335 = state_32978__$1;
(statearr_33013_34335[(2)] = inst_32959);

(statearr_33013_34335[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (11))){
var inst_32930 = (state_32978[(9)]);
var inst_32944 = (state_32978[(7)]);
var inst_32944__$1 = cljs.core.seq(inst_32930);
var state_32978__$1 = (function (){var statearr_33015 = state_32978;
(statearr_33015[(7)] = inst_32944__$1);

return statearr_33015;
})();
if(inst_32944__$1){
var statearr_33016_34336 = state_32978__$1;
(statearr_33016_34336[(1)] = (14));

} else {
var statearr_33017_34337 = state_32978__$1;
(statearr_33017_34337[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (9))){
var inst_32966 = (state_32978[(2)]);
var inst_32967 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32978__$1 = (function (){var statearr_33018 = state_32978;
(statearr_33018[(15)] = inst_32966);

return statearr_33018;
})();
if(cljs.core.truth_(inst_32967)){
var statearr_33019_34338 = state_32978__$1;
(statearr_33019_34338[(1)] = (21));

} else {
var statearr_33020_34339 = state_32978__$1;
(statearr_33020_34339[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (5))){
var inst_32922 = cljs.core.async.close_BANG_(out);
var state_32978__$1 = state_32978;
var statearr_33021_34340 = state_32978__$1;
(statearr_33021_34340[(2)] = inst_32922);

(statearr_33021_34340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (14))){
var inst_32944 = (state_32978[(7)]);
var inst_32946 = cljs.core.chunked_seq_QMARK_(inst_32944);
var state_32978__$1 = state_32978;
if(inst_32946){
var statearr_33022_34341 = state_32978__$1;
(statearr_33022_34341[(1)] = (17));

} else {
var statearr_33023_34342 = state_32978__$1;
(statearr_33023_34342[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (16))){
var inst_32962 = (state_32978[(2)]);
var state_32978__$1 = state_32978;
var statearr_33024_34343 = state_32978__$1;
(statearr_33024_34343[(2)] = inst_32962);

(statearr_33024_34343[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32979 === (10))){
var inst_32931 = (state_32978[(10)]);
var inst_32933 = (state_32978[(11)]);
var inst_32938 = cljs.core._nth(inst_32931,inst_32933);
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
var inst_32932 = (state_32978[(8)]);
var inst_32933 = (state_32978[(11)]);
var inst_32935 = (inst_32933 < inst_32932);
var inst_32936 = inst_32935;
var state_32978__$1 = state_32978;
if(cljs.core.truth_(inst_32936)){
var statearr_33025_34344 = state_32978__$1;
(statearr_33025_34344[(1)] = (10));

} else {
var statearr_33026_34345 = state_32978__$1;
(statearr_33026_34345[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__30740__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30740__auto____0 = (function (){
var statearr_33027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33027[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30740__auto__);

(statearr_33027[(1)] = (1));

return statearr_33027;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30740__auto____1 = (function (state_32978){
while(true){
var ret_value__30741__auto__ = (function (){try{while(true){
var result__30742__auto__ = switch__30739__auto__(state_32978);
if(cljs.core.keyword_identical_QMARK_(result__30742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30742__auto__;
}
break;
}
}catch (e33031){var ex__30743__auto__ = e33031;
var statearr_33032_34346 = state_32978;
(statearr_33032_34346[(2)] = ex__30743__auto__);


if(cljs.core.seq((state_32978[(4)]))){
var statearr_33033_34347 = state_32978;
(statearr_33033_34347[(1)] = cljs.core.first((state_32978[(4)])));

} else {
throw ex__30743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34348 = state_32978;
state_32978 = G__34348;
continue;
} else {
return ret_value__30741__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30740__auto__ = function(state_32978){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30740__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30740__auto____1.call(this,state_32978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30740__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30740__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30740__auto__;
})()
})();
var state__30939__auto__ = (function (){var statearr_33034 = f__30938__auto__();
(statearr_33034[(6)] = c__30937__auto__);

return statearr_33034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30939__auto__);
}));

return c__30937__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33039 = arguments.length;
switch (G__33039) {
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
var G__33041 = arguments.length;
switch (G__33041) {
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
var G__33046 = arguments.length;
switch (G__33046) {
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
var c__30937__auto___34358 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30938__auto__ = (function (){var switch__30739__auto__ = (function (state_33070){
var state_val_33071 = (state_33070[(1)]);
if((state_val_33071 === (7))){
var inst_33065 = (state_33070[(2)]);
var state_33070__$1 = state_33070;
var statearr_33072_34359 = state_33070__$1;
(statearr_33072_34359[(2)] = inst_33065);

(statearr_33072_34359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (1))){
var inst_33047 = null;
var state_33070__$1 = (function (){var statearr_33073 = state_33070;
(statearr_33073[(7)] = inst_33047);

return statearr_33073;
})();
var statearr_33074_34360 = state_33070__$1;
(statearr_33074_34360[(2)] = null);

(statearr_33074_34360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (4))){
var inst_33050 = (state_33070[(8)]);
var inst_33050__$1 = (state_33070[(2)]);
var inst_33051 = (inst_33050__$1 == null);
var inst_33052 = cljs.core.not(inst_33051);
var state_33070__$1 = (function (){var statearr_33075 = state_33070;
(statearr_33075[(8)] = inst_33050__$1);

return statearr_33075;
})();
if(inst_33052){
var statearr_33076_34361 = state_33070__$1;
(statearr_33076_34361[(1)] = (5));

} else {
var statearr_33077_34362 = state_33070__$1;
(statearr_33077_34362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (6))){
var state_33070__$1 = state_33070;
var statearr_33078_34363 = state_33070__$1;
(statearr_33078_34363[(2)] = null);

(statearr_33078_34363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (3))){
var inst_33067 = (state_33070[(2)]);
var inst_33068 = cljs.core.async.close_BANG_(out);
var state_33070__$1 = (function (){var statearr_33079 = state_33070;
(statearr_33079[(9)] = inst_33067);

return statearr_33079;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33070__$1,inst_33068);
} else {
if((state_val_33071 === (2))){
var state_33070__$1 = state_33070;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33070__$1,(4),ch);
} else {
if((state_val_33071 === (11))){
var inst_33050 = (state_33070[(8)]);
var inst_33059 = (state_33070[(2)]);
var inst_33047 = inst_33050;
var state_33070__$1 = (function (){var statearr_33080 = state_33070;
(statearr_33080[(10)] = inst_33059);

(statearr_33080[(7)] = inst_33047);

return statearr_33080;
})();
var statearr_33081_34368 = state_33070__$1;
(statearr_33081_34368[(2)] = null);

(statearr_33081_34368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (9))){
var inst_33050 = (state_33070[(8)]);
var state_33070__$1 = state_33070;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33070__$1,(11),out,inst_33050);
} else {
if((state_val_33071 === (5))){
var inst_33050 = (state_33070[(8)]);
var inst_33047 = (state_33070[(7)]);
var inst_33054 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33050,inst_33047);
var state_33070__$1 = state_33070;
if(inst_33054){
var statearr_33083_34376 = state_33070__$1;
(statearr_33083_34376[(1)] = (8));

} else {
var statearr_33084_34378 = state_33070__$1;
(statearr_33084_34378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (10))){
var inst_33062 = (state_33070[(2)]);
var state_33070__$1 = state_33070;
var statearr_33085_34385 = state_33070__$1;
(statearr_33085_34385[(2)] = inst_33062);

(statearr_33085_34385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (8))){
var inst_33047 = (state_33070[(7)]);
var tmp33082 = inst_33047;
var inst_33047__$1 = tmp33082;
var state_33070__$1 = (function (){var statearr_33086 = state_33070;
(statearr_33086[(7)] = inst_33047__$1);

return statearr_33086;
})();
var statearr_33087_34389 = state_33070__$1;
(statearr_33087_34389[(2)] = null);

(statearr_33087_34389[(1)] = (2));


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
var cljs$core$async$state_machine__30740__auto__ = null;
var cljs$core$async$state_machine__30740__auto____0 = (function (){
var statearr_33088 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33088[(0)] = cljs$core$async$state_machine__30740__auto__);

(statearr_33088[(1)] = (1));

return statearr_33088;
});
var cljs$core$async$state_machine__30740__auto____1 = (function (state_33070){
while(true){
var ret_value__30741__auto__ = (function (){try{while(true){
var result__30742__auto__ = switch__30739__auto__(state_33070);
if(cljs.core.keyword_identical_QMARK_(result__30742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30742__auto__;
}
break;
}
}catch (e33089){var ex__30743__auto__ = e33089;
var statearr_33090_34394 = state_33070;
(statearr_33090_34394[(2)] = ex__30743__auto__);


if(cljs.core.seq((state_33070[(4)]))){
var statearr_33091_34395 = state_33070;
(statearr_33091_34395[(1)] = cljs.core.first((state_33070[(4)])));

} else {
throw ex__30743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34401 = state_33070;
state_33070 = G__34401;
continue;
} else {
return ret_value__30741__auto__;
}
break;
}
});
cljs$core$async$state_machine__30740__auto__ = function(state_33070){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30740__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30740__auto____1.call(this,state_33070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30740__auto____0;
cljs$core$async$state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30740__auto____1;
return cljs$core$async$state_machine__30740__auto__;
})()
})();
var state__30939__auto__ = (function (){var statearr_33093 = f__30938__auto__();
(statearr_33093[(6)] = c__30937__auto___34358);

return statearr_33093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30939__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33098 = arguments.length;
switch (G__33098) {
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
var c__30937__auto___34426 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30938__auto__ = (function (){var switch__30739__auto__ = (function (state_33137){
var state_val_33138 = (state_33137[(1)]);
if((state_val_33138 === (7))){
var inst_33133 = (state_33137[(2)]);
var state_33137__$1 = state_33137;
var statearr_33140_34435 = state_33137__$1;
(statearr_33140_34435[(2)] = inst_33133);

(statearr_33140_34435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (1))){
var inst_33100 = (new Array(n));
var inst_33101 = inst_33100;
var inst_33102 = (0);
var state_33137__$1 = (function (){var statearr_33142 = state_33137;
(statearr_33142[(7)] = inst_33101);

(statearr_33142[(8)] = inst_33102);

return statearr_33142;
})();
var statearr_33143_34445 = state_33137__$1;
(statearr_33143_34445[(2)] = null);

(statearr_33143_34445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (4))){
var inst_33105 = (state_33137[(9)]);
var inst_33105__$1 = (state_33137[(2)]);
var inst_33106 = (inst_33105__$1 == null);
var inst_33107 = cljs.core.not(inst_33106);
var state_33137__$1 = (function (){var statearr_33144 = state_33137;
(statearr_33144[(9)] = inst_33105__$1);

return statearr_33144;
})();
if(inst_33107){
var statearr_33145_34454 = state_33137__$1;
(statearr_33145_34454[(1)] = (5));

} else {
var statearr_33147_34455 = state_33137__$1;
(statearr_33147_34455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (15))){
var inst_33127 = (state_33137[(2)]);
var state_33137__$1 = state_33137;
var statearr_33148_34461 = state_33137__$1;
(statearr_33148_34461[(2)] = inst_33127);

(statearr_33148_34461[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (13))){
var state_33137__$1 = state_33137;
var statearr_33149_34463 = state_33137__$1;
(statearr_33149_34463[(2)] = null);

(statearr_33149_34463[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (6))){
var inst_33102 = (state_33137[(8)]);
var inst_33123 = (inst_33102 > (0));
var state_33137__$1 = state_33137;
if(cljs.core.truth_(inst_33123)){
var statearr_33150_34473 = state_33137__$1;
(statearr_33150_34473[(1)] = (12));

} else {
var statearr_33153_34475 = state_33137__$1;
(statearr_33153_34475[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (3))){
var inst_33135 = (state_33137[(2)]);
var state_33137__$1 = state_33137;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33137__$1,inst_33135);
} else {
if((state_val_33138 === (12))){
var inst_33101 = (state_33137[(7)]);
var inst_33125 = cljs.core.vec(inst_33101);
var state_33137__$1 = state_33137;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33137__$1,(15),out,inst_33125);
} else {
if((state_val_33138 === (2))){
var state_33137__$1 = state_33137;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33137__$1,(4),ch);
} else {
if((state_val_33138 === (11))){
var inst_33117 = (state_33137[(2)]);
var inst_33118 = (new Array(n));
var inst_33101 = inst_33118;
var inst_33102 = (0);
var state_33137__$1 = (function (){var statearr_33154 = state_33137;
(statearr_33154[(10)] = inst_33117);

(statearr_33154[(7)] = inst_33101);

(statearr_33154[(8)] = inst_33102);

return statearr_33154;
})();
var statearr_33155_34506 = state_33137__$1;
(statearr_33155_34506[(2)] = null);

(statearr_33155_34506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (9))){
var inst_33101 = (state_33137[(7)]);
var inst_33115 = cljs.core.vec(inst_33101);
var state_33137__$1 = state_33137;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33137__$1,(11),out,inst_33115);
} else {
if((state_val_33138 === (5))){
var inst_33101 = (state_33137[(7)]);
var inst_33110 = (state_33137[(11)]);
var inst_33105 = (state_33137[(9)]);
var inst_33102 = (state_33137[(8)]);
var inst_33109 = (inst_33101[inst_33102] = inst_33105);
var inst_33110__$1 = (inst_33102 + (1));
var inst_33111 = (inst_33110__$1 < n);
var state_33137__$1 = (function (){var statearr_33156 = state_33137;
(statearr_33156[(12)] = inst_33109);

(statearr_33156[(11)] = inst_33110__$1);

return statearr_33156;
})();
if(cljs.core.truth_(inst_33111)){
var statearr_33157_34518 = state_33137__$1;
(statearr_33157_34518[(1)] = (8));

} else {
var statearr_33158_34519 = state_33137__$1;
(statearr_33158_34519[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (14))){
var inst_33130 = (state_33137[(2)]);
var inst_33131 = cljs.core.async.close_BANG_(out);
var state_33137__$1 = (function (){var statearr_33160 = state_33137;
(statearr_33160[(13)] = inst_33130);

return statearr_33160;
})();
var statearr_33161_34520 = state_33137__$1;
(statearr_33161_34520[(2)] = inst_33131);

(statearr_33161_34520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (10))){
var inst_33121 = (state_33137[(2)]);
var state_33137__$1 = state_33137;
var statearr_33162_34521 = state_33137__$1;
(statearr_33162_34521[(2)] = inst_33121);

(statearr_33162_34521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33138 === (8))){
var inst_33101 = (state_33137[(7)]);
var inst_33110 = (state_33137[(11)]);
var tmp33159 = inst_33101;
var inst_33101__$1 = tmp33159;
var inst_33102 = inst_33110;
var state_33137__$1 = (function (){var statearr_33163 = state_33137;
(statearr_33163[(7)] = inst_33101__$1);

(statearr_33163[(8)] = inst_33102);

return statearr_33163;
})();
var statearr_33164_34522 = state_33137__$1;
(statearr_33164_34522[(2)] = null);

(statearr_33164_34522[(1)] = (2));


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
var cljs$core$async$state_machine__30740__auto__ = null;
var cljs$core$async$state_machine__30740__auto____0 = (function (){
var statearr_33165 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33165[(0)] = cljs$core$async$state_machine__30740__auto__);

(statearr_33165[(1)] = (1));

return statearr_33165;
});
var cljs$core$async$state_machine__30740__auto____1 = (function (state_33137){
while(true){
var ret_value__30741__auto__ = (function (){try{while(true){
var result__30742__auto__ = switch__30739__auto__(state_33137);
if(cljs.core.keyword_identical_QMARK_(result__30742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30742__auto__;
}
break;
}
}catch (e33166){var ex__30743__auto__ = e33166;
var statearr_33167_34540 = state_33137;
(statearr_33167_34540[(2)] = ex__30743__auto__);


if(cljs.core.seq((state_33137[(4)]))){
var statearr_33168_34543 = state_33137;
(statearr_33168_34543[(1)] = cljs.core.first((state_33137[(4)])));

} else {
throw ex__30743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34547 = state_33137;
state_33137 = G__34547;
continue;
} else {
return ret_value__30741__auto__;
}
break;
}
});
cljs$core$async$state_machine__30740__auto__ = function(state_33137){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30740__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30740__auto____1.call(this,state_33137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30740__auto____0;
cljs$core$async$state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30740__auto____1;
return cljs$core$async$state_machine__30740__auto__;
})()
})();
var state__30939__auto__ = (function (){var statearr_33169 = f__30938__auto__();
(statearr_33169[(6)] = c__30937__auto___34426);

return statearr_33169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30939__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33171 = arguments.length;
switch (G__33171) {
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
var c__30937__auto___34549 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30938__auto__ = (function (){var switch__30739__auto__ = (function (state_33213){
var state_val_33214 = (state_33213[(1)]);
if((state_val_33214 === (7))){
var inst_33209 = (state_33213[(2)]);
var state_33213__$1 = state_33213;
var statearr_33215_34550 = state_33213__$1;
(statearr_33215_34550[(2)] = inst_33209);

(statearr_33215_34550[(1)] = (3));


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
var statearr_33217_34551 = state_33213__$1;
(statearr_33217_34551[(2)] = null);

(statearr_33217_34551[(1)] = (2));


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
var statearr_33219_34552 = state_33213__$1;
(statearr_33219_34552[(1)] = (5));

} else {
var statearr_33220_34567 = state_33213__$1;
(statearr_33220_34567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33214 === (15))){
var inst_33203 = (state_33213[(2)]);
var state_33213__$1 = state_33213;
var statearr_33221_34568 = state_33213__$1;
(statearr_33221_34568[(2)] = inst_33203);

(statearr_33221_34568[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33214 === (13))){
var state_33213__$1 = state_33213;
var statearr_33222_34569 = state_33213__$1;
(statearr_33222_34569[(2)] = null);

(statearr_33222_34569[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33214 === (6))){
var inst_33173 = (state_33213[(7)]);
var inst_33198 = inst_33173.length;
var inst_33199 = (inst_33198 > (0));
var state_33213__$1 = state_33213;
if(cljs.core.truth_(inst_33199)){
var statearr_33223_34570 = state_33213__$1;
(statearr_33223_34570[(1)] = (12));

} else {
var statearr_33224_34571 = state_33213__$1;
(statearr_33224_34571[(1)] = (13));

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
var statearr_33226_34572 = state_33213__$1;
(statearr_33226_34572[(2)] = null);

(statearr_33226_34572[(1)] = (2));


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
var statearr_33228_34574 = state_33213__$1;
(statearr_33228_34574[(1)] = (8));

} else {
var statearr_33229_34575 = state_33213__$1;
(statearr_33229_34575[(1)] = (9));

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
var statearr_33232_34585 = state_33213__$1;
(statearr_33232_34585[(2)] = inst_33207);

(statearr_33232_34585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33214 === (10))){
var inst_33196 = (state_33213[(2)]);
var state_33213__$1 = state_33213;
var statearr_33233_34586 = state_33213__$1;
(statearr_33233_34586[(2)] = inst_33196);

(statearr_33233_34586[(1)] = (7));


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
var statearr_33235_34587 = state_33213__$1;
(statearr_33235_34587[(2)] = null);

(statearr_33235_34587[(1)] = (2));


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
var cljs$core$async$state_machine__30740__auto__ = null;
var cljs$core$async$state_machine__30740__auto____0 = (function (){
var statearr_33236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33236[(0)] = cljs$core$async$state_machine__30740__auto__);

(statearr_33236[(1)] = (1));

return statearr_33236;
});
var cljs$core$async$state_machine__30740__auto____1 = (function (state_33213){
while(true){
var ret_value__30741__auto__ = (function (){try{while(true){
var result__30742__auto__ = switch__30739__auto__(state_33213);
if(cljs.core.keyword_identical_QMARK_(result__30742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30742__auto__;
}
break;
}
}catch (e33237){var ex__30743__auto__ = e33237;
var statearr_33238_34588 = state_33213;
(statearr_33238_34588[(2)] = ex__30743__auto__);


if(cljs.core.seq((state_33213[(4)]))){
var statearr_33239_34589 = state_33213;
(statearr_33239_34589[(1)] = cljs.core.first((state_33213[(4)])));

} else {
throw ex__30743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34590 = state_33213;
state_33213 = G__34590;
continue;
} else {
return ret_value__30741__auto__;
}
break;
}
});
cljs$core$async$state_machine__30740__auto__ = function(state_33213){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30740__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30740__auto____1.call(this,state_33213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30740__auto____0;
cljs$core$async$state_machine__30740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30740__auto____1;
return cljs$core$async$state_machine__30740__auto__;
})()
})();
var state__30939__auto__ = (function (){var statearr_33240 = f__30938__auto__();
(statearr_33240[(6)] = c__30937__auto___34549);

return statearr_33240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30939__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
