goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30951 = arguments.length;
switch (G__30951) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30958 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30958 = (function (f,blockable,meta30959){
this.f = f;
this.blockable = blockable;
this.meta30959 = meta30959;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30960,meta30959__$1){
var self__ = this;
var _30960__$1 = this;
return (new cljs.core.async.t_cljs$core$async30958(self__.f,self__.blockable,meta30959__$1));
}));

(cljs.core.async.t_cljs$core$async30958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30960){
var self__ = this;
var _30960__$1 = this;
return self__.meta30959;
}));

(cljs.core.async.t_cljs$core$async30958.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30958.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30958.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30958.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30958.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30959","meta30959",-117713831,null)], null);
}));

(cljs.core.async.t_cljs$core$async30958.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30958.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30958");

(cljs.core.async.t_cljs$core$async30958.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30958");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30958.
 */
cljs.core.async.__GT_t_cljs$core$async30958 = (function cljs$core$async$__GT_t_cljs$core$async30958(f__$1,blockable__$1,meta30959){
return (new cljs.core.async.t_cljs$core$async30958(f__$1,blockable__$1,meta30959));
});

}

return (new cljs.core.async.t_cljs$core$async30958(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30969 = arguments.length;
switch (G__30969) {
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
var G__30973 = arguments.length;
switch (G__30973) {
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
var G__30982 = arguments.length;
switch (G__30982) {
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
var val_33295 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33295) : fn1.call(null,val_33295));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33295) : fn1.call(null,val_33295));
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
var G__30984 = arguments.length;
switch (G__30984) {
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
var n__4613__auto___33305 = n;
var x_33306 = (0);
while(true){
if((x_33306 < n__4613__auto___33305)){
(a[x_33306] = x_33306);

var G__33307 = (x_33306 + (1));
x_33306 = G__33307;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31002 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31002 = (function (flag,meta31003){
this.flag = flag;
this.meta31003 = meta31003;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31004,meta31003__$1){
var self__ = this;
var _31004__$1 = this;
return (new cljs.core.async.t_cljs$core$async31002(self__.flag,meta31003__$1));
}));

(cljs.core.async.t_cljs$core$async31002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31004){
var self__ = this;
var _31004__$1 = this;
return self__.meta31003;
}));

(cljs.core.async.t_cljs$core$async31002.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31002.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31002.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31002.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31002.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31003","meta31003",1177131177,null)], null);
}));

(cljs.core.async.t_cljs$core$async31002.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31002.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31002");

(cljs.core.async.t_cljs$core$async31002.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31002");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31002.
 */
cljs.core.async.__GT_t_cljs$core$async31002 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31002(flag__$1,meta31003){
return (new cljs.core.async.t_cljs$core$async31002(flag__$1,meta31003));
});

}

return (new cljs.core.async.t_cljs$core$async31002(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31019 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31019 = (function (flag,cb,meta31020){
this.flag = flag;
this.cb = cb;
this.meta31020 = meta31020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31021,meta31020__$1){
var self__ = this;
var _31021__$1 = this;
return (new cljs.core.async.t_cljs$core$async31019(self__.flag,self__.cb,meta31020__$1));
}));

(cljs.core.async.t_cljs$core$async31019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31021){
var self__ = this;
var _31021__$1 = this;
return self__.meta31020;
}));

(cljs.core.async.t_cljs$core$async31019.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31019.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31019.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31019.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31019.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31020","meta31020",-35562413,null)], null);
}));

(cljs.core.async.t_cljs$core$async31019.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31019.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31019");

(cljs.core.async.t_cljs$core$async31019.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31019");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31019.
 */
cljs.core.async.__GT_t_cljs$core$async31019 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31019(flag__$1,cb__$1,meta31020){
return (new cljs.core.async.t_cljs$core$async31019(flag__$1,cb__$1,meta31020));
});

}

return (new cljs.core.async.t_cljs$core$async31019(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31027_SHARP_){
var G__31029 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31027_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31029) : fret.call(null,G__31029));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31028_SHARP_){
var G__31030 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31028_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31030) : fret.call(null,G__31030));
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
var G__33315 = (i + (1));
i = G__33315;
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
var len__4736__auto___33318 = arguments.length;
var i__4737__auto___33319 = (0);
while(true){
if((i__4737__auto___33319 < len__4736__auto___33318)){
args__4742__auto__.push((arguments[i__4737__auto___33319]));

var G__33320 = (i__4737__auto___33319 + (1));
i__4737__auto___33319 = G__33320;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31037){
var map__31038 = p__31037;
var map__31038__$1 = (((((!((map__31038 == null))))?(((((map__31038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31038):map__31038);
var opts = map__31038__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31035){
var G__31036 = cljs.core.first(seq31035);
var seq31035__$1 = cljs.core.next(seq31035);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31036,seq31035__$1);
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
var G__31041 = arguments.length;
switch (G__31041) {
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
var c__30876__auto___33326 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30877__auto__ = (function (){var switch__30692__auto__ = (function (state_31098){
var state_val_31099 = (state_31098[(1)]);
if((state_val_31099 === (7))){
var inst_31070 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
var statearr_31117_33331 = state_31098__$1;
(statearr_31117_33331[(2)] = inst_31070);

(statearr_31117_33331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (1))){
var state_31098__$1 = state_31098;
var statearr_31118_33360 = state_31098__$1;
(statearr_31118_33360[(2)] = null);

(statearr_31118_33360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (4))){
var inst_31049 = (state_31098[(7)]);
var inst_31049__$1 = (state_31098[(2)]);
var inst_31050 = (inst_31049__$1 == null);
var state_31098__$1 = (function (){var statearr_31119 = state_31098;
(statearr_31119[(7)] = inst_31049__$1);

return statearr_31119;
})();
if(cljs.core.truth_(inst_31050)){
var statearr_31120_33361 = state_31098__$1;
(statearr_31120_33361[(1)] = (5));

} else {
var statearr_31121_33362 = state_31098__$1;
(statearr_31121_33362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (13))){
var state_31098__$1 = state_31098;
var statearr_31122_33363 = state_31098__$1;
(statearr_31122_33363[(2)] = null);

(statearr_31122_33363[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (6))){
var inst_31049 = (state_31098[(7)]);
var state_31098__$1 = state_31098;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31098__$1,(11),to,inst_31049);
} else {
if((state_val_31099 === (3))){
var inst_31073 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31098__$1,inst_31073);
} else {
if((state_val_31099 === (12))){
var state_31098__$1 = state_31098;
var statearr_31127_33364 = state_31098__$1;
(statearr_31127_33364[(2)] = null);

(statearr_31127_33364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (2))){
var state_31098__$1 = state_31098;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31098__$1,(4),from);
} else {
if((state_val_31099 === (11))){
var inst_31059 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
if(cljs.core.truth_(inst_31059)){
var statearr_31128_33365 = state_31098__$1;
(statearr_31128_33365[(1)] = (12));

} else {
var statearr_31129_33366 = state_31098__$1;
(statearr_31129_33366[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (9))){
var state_31098__$1 = state_31098;
var statearr_31130_33367 = state_31098__$1;
(statearr_31130_33367[(2)] = null);

(statearr_31130_33367[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (5))){
var state_31098__$1 = state_31098;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31131_33368 = state_31098__$1;
(statearr_31131_33368[(1)] = (8));

} else {
var statearr_31134_33369 = state_31098__$1;
(statearr_31134_33369[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (14))){
var inst_31068 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
var statearr_31137_33370 = state_31098__$1;
(statearr_31137_33370[(2)] = inst_31068);

(statearr_31137_33370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (10))){
var inst_31056 = (state_31098[(2)]);
var state_31098__$1 = state_31098;
var statearr_31140_33371 = state_31098__$1;
(statearr_31140_33371[(2)] = inst_31056);

(statearr_31140_33371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31099 === (8))){
var inst_31053 = cljs.core.async.close_BANG_(to);
var state_31098__$1 = state_31098;
var statearr_31141_33372 = state_31098__$1;
(statearr_31141_33372[(2)] = inst_31053);

(statearr_31141_33372[(1)] = (10));


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
var cljs$core$async$state_machine__30693__auto__ = null;
var cljs$core$async$state_machine__30693__auto____0 = (function (){
var statearr_31142 = [null,null,null,null,null,null,null,null];
(statearr_31142[(0)] = cljs$core$async$state_machine__30693__auto__);

(statearr_31142[(1)] = (1));

return statearr_31142;
});
var cljs$core$async$state_machine__30693__auto____1 = (function (state_31098){
while(true){
var ret_value__30694__auto__ = (function (){try{while(true){
var result__30695__auto__ = switch__30692__auto__(state_31098);
if(cljs.core.keyword_identical_QMARK_(result__30695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30695__auto__;
}
break;
}
}catch (e31143){var ex__30696__auto__ = e31143;
var statearr_31144_33377 = state_31098;
(statearr_31144_33377[(2)] = ex__30696__auto__);


if(cljs.core.seq((state_31098[(4)]))){
var statearr_31145_33380 = state_31098;
(statearr_31145_33380[(1)] = cljs.core.first((state_31098[(4)])));

} else {
throw ex__30696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33381 = state_31098;
state_31098 = G__33381;
continue;
} else {
return ret_value__30694__auto__;
}
break;
}
});
cljs$core$async$state_machine__30693__auto__ = function(state_31098){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30693__auto____1.call(this,state_31098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30693__auto____0;
cljs$core$async$state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30693__auto____1;
return cljs$core$async$state_machine__30693__auto__;
})()
})();
var state__30878__auto__ = (function (){var statearr_31147 = f__30877__auto__();
(statearr_31147[(6)] = c__30876__auto___33326);

return statearr_31147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30878__auto__);
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
var process = (function (p__31160){
var vec__31161 = p__31160;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31161,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31161,(1),null);
var job = vec__31161;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30876__auto___33386 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30877__auto__ = (function (){var switch__30692__auto__ = (function (state_31168){
var state_val_31169 = (state_31168[(1)]);
if((state_val_31169 === (1))){
var state_31168__$1 = state_31168;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31168__$1,(2),res,v);
} else {
if((state_val_31169 === (2))){
var inst_31165 = (state_31168[(2)]);
var inst_31166 = cljs.core.async.close_BANG_(res);
var state_31168__$1 = (function (){var statearr_31173 = state_31168;
(statearr_31173[(7)] = inst_31165);

return statearr_31173;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31168__$1,inst_31166);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30693__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30693__auto____0 = (function (){
var statearr_31177 = [null,null,null,null,null,null,null,null];
(statearr_31177[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30693__auto__);

(statearr_31177[(1)] = (1));

return statearr_31177;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30693__auto____1 = (function (state_31168){
while(true){
var ret_value__30694__auto__ = (function (){try{while(true){
var result__30695__auto__ = switch__30692__auto__(state_31168);
if(cljs.core.keyword_identical_QMARK_(result__30695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30695__auto__;
}
break;
}
}catch (e31178){var ex__30696__auto__ = e31178;
var statearr_31179_33389 = state_31168;
(statearr_31179_33389[(2)] = ex__30696__auto__);


if(cljs.core.seq((state_31168[(4)]))){
var statearr_31180_33390 = state_31168;
(statearr_31180_33390[(1)] = cljs.core.first((state_31168[(4)])));

} else {
throw ex__30696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33391 = state_31168;
state_31168 = G__33391;
continue;
} else {
return ret_value__30694__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30693__auto__ = function(state_31168){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30693__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30693__auto____1.call(this,state_31168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30693__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30693__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30693__auto__;
})()
})();
var state__30878__auto__ = (function (){var statearr_31181 = f__30877__auto__();
(statearr_31181[(6)] = c__30876__auto___33386);

return statearr_31181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30878__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31184){
var vec__31185 = p__31184;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31185,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31185,(1),null);
var job = vec__31185;
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
var n__4613__auto___33394 = n;
var __33395 = (0);
while(true){
if((__33395 < n__4613__auto___33394)){
var G__31188_33397 = type;
var G__31188_33398__$1 = (((G__31188_33397 instanceof cljs.core.Keyword))?G__31188_33397.fqn:null);
switch (G__31188_33398__$1) {
case "compute":
var c__30876__auto___33400 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33395,c__30876__auto___33400,G__31188_33397,G__31188_33398__$1,n__4613__auto___33394,jobs,results,process,async){
return (function (){
var f__30877__auto__ = (function (){var switch__30692__auto__ = ((function (__33395,c__30876__auto___33400,G__31188_33397,G__31188_33398__$1,n__4613__auto___33394,jobs,results,process,async){
return (function (state_31210){
var state_val_31211 = (state_31210[(1)]);
if((state_val_31211 === (1))){
var state_31210__$1 = state_31210;
var statearr_31214_33402 = state_31210__$1;
(statearr_31214_33402[(2)] = null);

(statearr_31214_33402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (2))){
var state_31210__$1 = state_31210;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31210__$1,(4),jobs);
} else {
if((state_val_31211 === (3))){
var inst_31208 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31210__$1,inst_31208);
} else {
if((state_val_31211 === (4))){
var inst_31200 = (state_31210[(2)]);
var inst_31201 = process(inst_31200);
var state_31210__$1 = state_31210;
if(cljs.core.truth_(inst_31201)){
var statearr_31215_33406 = state_31210__$1;
(statearr_31215_33406[(1)] = (5));

} else {
var statearr_31216_33409 = state_31210__$1;
(statearr_31216_33409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (5))){
var state_31210__$1 = state_31210;
var statearr_31220_33410 = state_31210__$1;
(statearr_31220_33410[(2)] = null);

(statearr_31220_33410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (6))){
var state_31210__$1 = state_31210;
var statearr_31223_33413 = state_31210__$1;
(statearr_31223_33413[(2)] = null);

(statearr_31223_33413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (7))){
var inst_31206 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31225_33414 = state_31210__$1;
(statearr_31225_33414[(2)] = inst_31206);

(statearr_31225_33414[(1)] = (3));


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
});})(__33395,c__30876__auto___33400,G__31188_33397,G__31188_33398__$1,n__4613__auto___33394,jobs,results,process,async))
;
return ((function (__33395,switch__30692__auto__,c__30876__auto___33400,G__31188_33397,G__31188_33398__$1,n__4613__auto___33394,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30693__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30693__auto____0 = (function (){
var statearr_31226 = [null,null,null,null,null,null,null];
(statearr_31226[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30693__auto__);

(statearr_31226[(1)] = (1));

return statearr_31226;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30693__auto____1 = (function (state_31210){
while(true){
var ret_value__30694__auto__ = (function (){try{while(true){
var result__30695__auto__ = switch__30692__auto__(state_31210);
if(cljs.core.keyword_identical_QMARK_(result__30695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30695__auto__;
}
break;
}
}catch (e31227){var ex__30696__auto__ = e31227;
var statearr_31228_33432 = state_31210;
(statearr_31228_33432[(2)] = ex__30696__auto__);


if(cljs.core.seq((state_31210[(4)]))){
var statearr_31229_33433 = state_31210;
(statearr_31229_33433[(1)] = cljs.core.first((state_31210[(4)])));

} else {
throw ex__30696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33434 = state_31210;
state_31210 = G__33434;
continue;
} else {
return ret_value__30694__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30693__auto__ = function(state_31210){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30693__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30693__auto____1.call(this,state_31210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30693__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30693__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30693__auto__;
})()
;})(__33395,switch__30692__auto__,c__30876__auto___33400,G__31188_33397,G__31188_33398__$1,n__4613__auto___33394,jobs,results,process,async))
})();
var state__30878__auto__ = (function (){var statearr_31230 = f__30877__auto__();
(statearr_31230[(6)] = c__30876__auto___33400);

return statearr_31230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30878__auto__);
});})(__33395,c__30876__auto___33400,G__31188_33397,G__31188_33398__$1,n__4613__auto___33394,jobs,results,process,async))
);


break;
case "async":
var c__30876__auto___33435 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33395,c__30876__auto___33435,G__31188_33397,G__31188_33398__$1,n__4613__auto___33394,jobs,results,process,async){
return (function (){
var f__30877__auto__ = (function (){var switch__30692__auto__ = ((function (__33395,c__30876__auto___33435,G__31188_33397,G__31188_33398__$1,n__4613__auto___33394,jobs,results,process,async){
return (function (state_31243){
var state_val_31244 = (state_31243[(1)]);
if((state_val_31244 === (1))){
var state_31243__$1 = state_31243;
var statearr_31245_33436 = state_31243__$1;
(statearr_31245_33436[(2)] = null);

(statearr_31245_33436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (2))){
var state_31243__$1 = state_31243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31243__$1,(4),jobs);
} else {
if((state_val_31244 === (3))){
var inst_31241 = (state_31243[(2)]);
var state_31243__$1 = state_31243;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31243__$1,inst_31241);
} else {
if((state_val_31244 === (4))){
var inst_31233 = (state_31243[(2)]);
var inst_31234 = async(inst_31233);
var state_31243__$1 = state_31243;
if(cljs.core.truth_(inst_31234)){
var statearr_31253_33437 = state_31243__$1;
(statearr_31253_33437[(1)] = (5));

} else {
var statearr_31254_33439 = state_31243__$1;
(statearr_31254_33439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (5))){
var state_31243__$1 = state_31243;
var statearr_31255_33441 = state_31243__$1;
(statearr_31255_33441[(2)] = null);

(statearr_31255_33441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (6))){
var state_31243__$1 = state_31243;
var statearr_31256_33442 = state_31243__$1;
(statearr_31256_33442[(2)] = null);

(statearr_31256_33442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (7))){
var inst_31239 = (state_31243[(2)]);
var state_31243__$1 = state_31243;
var statearr_31257_33443 = state_31243__$1;
(statearr_31257_33443[(2)] = inst_31239);

(statearr_31257_33443[(1)] = (3));


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
});})(__33395,c__30876__auto___33435,G__31188_33397,G__31188_33398__$1,n__4613__auto___33394,jobs,results,process,async))
;
return ((function (__33395,switch__30692__auto__,c__30876__auto___33435,G__31188_33397,G__31188_33398__$1,n__4613__auto___33394,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30693__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30693__auto____0 = (function (){
var statearr_31258 = [null,null,null,null,null,null,null];
(statearr_31258[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30693__auto__);

(statearr_31258[(1)] = (1));

return statearr_31258;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30693__auto____1 = (function (state_31243){
while(true){
var ret_value__30694__auto__ = (function (){try{while(true){
var result__30695__auto__ = switch__30692__auto__(state_31243);
if(cljs.core.keyword_identical_QMARK_(result__30695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30695__auto__;
}
break;
}
}catch (e31259){var ex__30696__auto__ = e31259;
var statearr_31260_33450 = state_31243;
(statearr_31260_33450[(2)] = ex__30696__auto__);


if(cljs.core.seq((state_31243[(4)]))){
var statearr_31261_33451 = state_31243;
(statearr_31261_33451[(1)] = cljs.core.first((state_31243[(4)])));

} else {
throw ex__30696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33452 = state_31243;
state_31243 = G__33452;
continue;
} else {
return ret_value__30694__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30693__auto__ = function(state_31243){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30693__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30693__auto____1.call(this,state_31243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30693__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30693__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30693__auto__;
})()
;})(__33395,switch__30692__auto__,c__30876__auto___33435,G__31188_33397,G__31188_33398__$1,n__4613__auto___33394,jobs,results,process,async))
})();
var state__30878__auto__ = (function (){var statearr_31266 = f__30877__auto__();
(statearr_31266[(6)] = c__30876__auto___33435);

return statearr_31266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30878__auto__);
});})(__33395,c__30876__auto___33435,G__31188_33397,G__31188_33398__$1,n__4613__auto___33394,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31188_33398__$1)].join('')));

}

var G__33453 = (__33395 + (1));
__33395 = G__33453;
continue;
} else {
}
break;
}

var c__30876__auto___33454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30877__auto__ = (function (){var switch__30692__auto__ = (function (state_31288){
var state_val_31289 = (state_31288[(1)]);
if((state_val_31289 === (7))){
var inst_31284 = (state_31288[(2)]);
var state_31288__$1 = state_31288;
var statearr_31290_33455 = state_31288__$1;
(statearr_31290_33455[(2)] = inst_31284);

(statearr_31290_33455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31289 === (1))){
var state_31288__$1 = state_31288;
var statearr_31291_33456 = state_31288__$1;
(statearr_31291_33456[(2)] = null);

(statearr_31291_33456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31289 === (4))){
var inst_31269 = (state_31288[(7)]);
var inst_31269__$1 = (state_31288[(2)]);
var inst_31270 = (inst_31269__$1 == null);
var state_31288__$1 = (function (){var statearr_31292 = state_31288;
(statearr_31292[(7)] = inst_31269__$1);

return statearr_31292;
})();
if(cljs.core.truth_(inst_31270)){
var statearr_31293_33457 = state_31288__$1;
(statearr_31293_33457[(1)] = (5));

} else {
var statearr_31294_33458 = state_31288__$1;
(statearr_31294_33458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31289 === (6))){
var inst_31269 = (state_31288[(7)]);
var inst_31274 = (state_31288[(8)]);
var inst_31274__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31275 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31276 = [inst_31269,inst_31274__$1];
var inst_31277 = (new cljs.core.PersistentVector(null,2,(5),inst_31275,inst_31276,null));
var state_31288__$1 = (function (){var statearr_31295 = state_31288;
(statearr_31295[(8)] = inst_31274__$1);

return statearr_31295;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31288__$1,(8),jobs,inst_31277);
} else {
if((state_val_31289 === (3))){
var inst_31286 = (state_31288[(2)]);
var state_31288__$1 = state_31288;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31288__$1,inst_31286);
} else {
if((state_val_31289 === (2))){
var state_31288__$1 = state_31288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31288__$1,(4),from);
} else {
if((state_val_31289 === (9))){
var inst_31281 = (state_31288[(2)]);
var state_31288__$1 = (function (){var statearr_31296 = state_31288;
(statearr_31296[(9)] = inst_31281);

return statearr_31296;
})();
var statearr_31297_33469 = state_31288__$1;
(statearr_31297_33469[(2)] = null);

(statearr_31297_33469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31289 === (5))){
var inst_31272 = cljs.core.async.close_BANG_(jobs);
var state_31288__$1 = state_31288;
var statearr_31298_33470 = state_31288__$1;
(statearr_31298_33470[(2)] = inst_31272);

(statearr_31298_33470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31289 === (8))){
var inst_31274 = (state_31288[(8)]);
var inst_31279 = (state_31288[(2)]);
var state_31288__$1 = (function (){var statearr_31299 = state_31288;
(statearr_31299[(10)] = inst_31279);

return statearr_31299;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31288__$1,(9),results,inst_31274);
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
var cljs$core$async$pipeline_STAR__$_state_machine__30693__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30693__auto____0 = (function (){
var statearr_31300 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31300[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30693__auto__);

(statearr_31300[(1)] = (1));

return statearr_31300;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30693__auto____1 = (function (state_31288){
while(true){
var ret_value__30694__auto__ = (function (){try{while(true){
var result__30695__auto__ = switch__30692__auto__(state_31288);
if(cljs.core.keyword_identical_QMARK_(result__30695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30695__auto__;
}
break;
}
}catch (e31301){var ex__30696__auto__ = e31301;
var statearr_31302_33471 = state_31288;
(statearr_31302_33471[(2)] = ex__30696__auto__);


if(cljs.core.seq((state_31288[(4)]))){
var statearr_31303_33472 = state_31288;
(statearr_31303_33472[(1)] = cljs.core.first((state_31288[(4)])));

} else {
throw ex__30696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33473 = state_31288;
state_31288 = G__33473;
continue;
} else {
return ret_value__30694__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30693__auto__ = function(state_31288){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30693__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30693__auto____1.call(this,state_31288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30693__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30693__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30693__auto__;
})()
})();
var state__30878__auto__ = (function (){var statearr_31304 = f__30877__auto__();
(statearr_31304[(6)] = c__30876__auto___33454);

return statearr_31304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30878__auto__);
}));


var c__30876__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30877__auto__ = (function (){var switch__30692__auto__ = (function (state_31359){
var state_val_31360 = (state_31359[(1)]);
if((state_val_31360 === (7))){
var inst_31355 = (state_31359[(2)]);
var state_31359__$1 = state_31359;
var statearr_31361_33476 = state_31359__$1;
(statearr_31361_33476[(2)] = inst_31355);

(statearr_31361_33476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (20))){
var state_31359__$1 = state_31359;
var statearr_31362_33477 = state_31359__$1;
(statearr_31362_33477[(2)] = null);

(statearr_31362_33477[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (1))){
var state_31359__$1 = state_31359;
var statearr_31363_33478 = state_31359__$1;
(statearr_31363_33478[(2)] = null);

(statearr_31363_33478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (4))){
var inst_31324 = (state_31359[(7)]);
var inst_31324__$1 = (state_31359[(2)]);
var inst_31325 = (inst_31324__$1 == null);
var state_31359__$1 = (function (){var statearr_31368 = state_31359;
(statearr_31368[(7)] = inst_31324__$1);

return statearr_31368;
})();
if(cljs.core.truth_(inst_31325)){
var statearr_31369_33481 = state_31359__$1;
(statearr_31369_33481[(1)] = (5));

} else {
var statearr_31370_33482 = state_31359__$1;
(statearr_31370_33482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (15))){
var inst_31337 = (state_31359[(8)]);
var state_31359__$1 = state_31359;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31359__$1,(18),to,inst_31337);
} else {
if((state_val_31360 === (21))){
var inst_31350 = (state_31359[(2)]);
var state_31359__$1 = state_31359;
var statearr_31371_33483 = state_31359__$1;
(statearr_31371_33483[(2)] = inst_31350);

(statearr_31371_33483[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (13))){
var inst_31352 = (state_31359[(2)]);
var state_31359__$1 = (function (){var statearr_31372 = state_31359;
(statearr_31372[(9)] = inst_31352);

return statearr_31372;
})();
var statearr_31373_33484 = state_31359__$1;
(statearr_31373_33484[(2)] = null);

(statearr_31373_33484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (6))){
var inst_31324 = (state_31359[(7)]);
var state_31359__$1 = state_31359;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31359__$1,(11),inst_31324);
} else {
if((state_val_31360 === (17))){
var inst_31345 = (state_31359[(2)]);
var state_31359__$1 = state_31359;
if(cljs.core.truth_(inst_31345)){
var statearr_31374_33485 = state_31359__$1;
(statearr_31374_33485[(1)] = (19));

} else {
var statearr_31375_33486 = state_31359__$1;
(statearr_31375_33486[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (3))){
var inst_31357 = (state_31359[(2)]);
var state_31359__$1 = state_31359;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31359__$1,inst_31357);
} else {
if((state_val_31360 === (12))){
var inst_31334 = (state_31359[(10)]);
var state_31359__$1 = state_31359;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31359__$1,(14),inst_31334);
} else {
if((state_val_31360 === (2))){
var state_31359__$1 = state_31359;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31359__$1,(4),results);
} else {
if((state_val_31360 === (19))){
var state_31359__$1 = state_31359;
var statearr_31376_33487 = state_31359__$1;
(statearr_31376_33487[(2)] = null);

(statearr_31376_33487[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (11))){
var inst_31334 = (state_31359[(2)]);
var state_31359__$1 = (function (){var statearr_31377 = state_31359;
(statearr_31377[(10)] = inst_31334);

return statearr_31377;
})();
var statearr_31378_33498 = state_31359__$1;
(statearr_31378_33498[(2)] = null);

(statearr_31378_33498[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (9))){
var state_31359__$1 = state_31359;
var statearr_31379_33499 = state_31359__$1;
(statearr_31379_33499[(2)] = null);

(statearr_31379_33499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (5))){
var state_31359__$1 = state_31359;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31384_33500 = state_31359__$1;
(statearr_31384_33500[(1)] = (8));

} else {
var statearr_31385_33501 = state_31359__$1;
(statearr_31385_33501[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (14))){
var inst_31337 = (state_31359[(8)]);
var inst_31337__$1 = (state_31359[(2)]);
var inst_31338 = (inst_31337__$1 == null);
var inst_31339 = cljs.core.not(inst_31338);
var state_31359__$1 = (function (){var statearr_31386 = state_31359;
(statearr_31386[(8)] = inst_31337__$1);

return statearr_31386;
})();
if(inst_31339){
var statearr_31387_33502 = state_31359__$1;
(statearr_31387_33502[(1)] = (15));

} else {
var statearr_31388_33503 = state_31359__$1;
(statearr_31388_33503[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (16))){
var state_31359__$1 = state_31359;
var statearr_31389_33504 = state_31359__$1;
(statearr_31389_33504[(2)] = false);

(statearr_31389_33504[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (10))){
var inst_31331 = (state_31359[(2)]);
var state_31359__$1 = state_31359;
var statearr_31390_33505 = state_31359__$1;
(statearr_31390_33505[(2)] = inst_31331);

(statearr_31390_33505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (18))){
var inst_31342 = (state_31359[(2)]);
var state_31359__$1 = state_31359;
var statearr_31391_33506 = state_31359__$1;
(statearr_31391_33506[(2)] = inst_31342);

(statearr_31391_33506[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31360 === (8))){
var inst_31328 = cljs.core.async.close_BANG_(to);
var state_31359__$1 = state_31359;
var statearr_31392_33507 = state_31359__$1;
(statearr_31392_33507[(2)] = inst_31328);

(statearr_31392_33507[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__30693__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30693__auto____0 = (function (){
var statearr_31393 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31393[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30693__auto__);

(statearr_31393[(1)] = (1));

return statearr_31393;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30693__auto____1 = (function (state_31359){
while(true){
var ret_value__30694__auto__ = (function (){try{while(true){
var result__30695__auto__ = switch__30692__auto__(state_31359);
if(cljs.core.keyword_identical_QMARK_(result__30695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30695__auto__;
}
break;
}
}catch (e31394){var ex__30696__auto__ = e31394;
var statearr_31395_33508 = state_31359;
(statearr_31395_33508[(2)] = ex__30696__auto__);


if(cljs.core.seq((state_31359[(4)]))){
var statearr_31396_33509 = state_31359;
(statearr_31396_33509[(1)] = cljs.core.first((state_31359[(4)])));

} else {
throw ex__30696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33511 = state_31359;
state_31359 = G__33511;
continue;
} else {
return ret_value__30694__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30693__auto__ = function(state_31359){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30693__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30693__auto____1.call(this,state_31359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30693__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30693__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30693__auto__;
})()
})();
var state__30878__auto__ = (function (){var statearr_31397 = f__30877__auto__();
(statearr_31397[(6)] = c__30876__auto__);

return statearr_31397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30878__auto__);
}));

return c__30876__auto__;
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
var G__31399 = arguments.length;
switch (G__31399) {
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
var G__31407 = arguments.length;
switch (G__31407) {
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
var G__31413 = arguments.length;
switch (G__31413) {
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
var c__30876__auto___33520 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30877__auto__ = (function (){var switch__30692__auto__ = (function (state_31439){
var state_val_31440 = (state_31439[(1)]);
if((state_val_31440 === (7))){
var inst_31435 = (state_31439[(2)]);
var state_31439__$1 = state_31439;
var statearr_31441_33521 = state_31439__$1;
(statearr_31441_33521[(2)] = inst_31435);

(statearr_31441_33521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (1))){
var state_31439__$1 = state_31439;
var statearr_31442_33522 = state_31439__$1;
(statearr_31442_33522[(2)] = null);

(statearr_31442_33522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (4))){
var inst_31416 = (state_31439[(7)]);
var inst_31416__$1 = (state_31439[(2)]);
var inst_31417 = (inst_31416__$1 == null);
var state_31439__$1 = (function (){var statearr_31444 = state_31439;
(statearr_31444[(7)] = inst_31416__$1);

return statearr_31444;
})();
if(cljs.core.truth_(inst_31417)){
var statearr_31445_33523 = state_31439__$1;
(statearr_31445_33523[(1)] = (5));

} else {
var statearr_31446_33524 = state_31439__$1;
(statearr_31446_33524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (13))){
var state_31439__$1 = state_31439;
var statearr_31447_33526 = state_31439__$1;
(statearr_31447_33526[(2)] = null);

(statearr_31447_33526[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (6))){
var inst_31416 = (state_31439[(7)]);
var inst_31422 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31416) : p.call(null,inst_31416));
var state_31439__$1 = state_31439;
if(cljs.core.truth_(inst_31422)){
var statearr_31451_33531 = state_31439__$1;
(statearr_31451_33531[(1)] = (9));

} else {
var statearr_31452_33532 = state_31439__$1;
(statearr_31452_33532[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (3))){
var inst_31437 = (state_31439[(2)]);
var state_31439__$1 = state_31439;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31439__$1,inst_31437);
} else {
if((state_val_31440 === (12))){
var state_31439__$1 = state_31439;
var statearr_31453_33533 = state_31439__$1;
(statearr_31453_33533[(2)] = null);

(statearr_31453_33533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (2))){
var state_31439__$1 = state_31439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31439__$1,(4),ch);
} else {
if((state_val_31440 === (11))){
var inst_31416 = (state_31439[(7)]);
var inst_31426 = (state_31439[(2)]);
var state_31439__$1 = state_31439;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31439__$1,(8),inst_31426,inst_31416);
} else {
if((state_val_31440 === (9))){
var state_31439__$1 = state_31439;
var statearr_31454_33534 = state_31439__$1;
(statearr_31454_33534[(2)] = tc);

(statearr_31454_33534[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (5))){
var inst_31419 = cljs.core.async.close_BANG_(tc);
var inst_31420 = cljs.core.async.close_BANG_(fc);
var state_31439__$1 = (function (){var statearr_31455 = state_31439;
(statearr_31455[(8)] = inst_31419);

return statearr_31455;
})();
var statearr_31456_33539 = state_31439__$1;
(statearr_31456_33539[(2)] = inst_31420);

(statearr_31456_33539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (14))){
var inst_31433 = (state_31439[(2)]);
var state_31439__$1 = state_31439;
var statearr_31458_33540 = state_31439__$1;
(statearr_31458_33540[(2)] = inst_31433);

(statearr_31458_33540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (10))){
var state_31439__$1 = state_31439;
var statearr_31461_33541 = state_31439__$1;
(statearr_31461_33541[(2)] = fc);

(statearr_31461_33541[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31440 === (8))){
var inst_31428 = (state_31439[(2)]);
var state_31439__$1 = state_31439;
if(cljs.core.truth_(inst_31428)){
var statearr_31463_33542 = state_31439__$1;
(statearr_31463_33542[(1)] = (12));

} else {
var statearr_31464_33543 = state_31439__$1;
(statearr_31464_33543[(1)] = (13));

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
var cljs$core$async$state_machine__30693__auto__ = null;
var cljs$core$async$state_machine__30693__auto____0 = (function (){
var statearr_31468 = [null,null,null,null,null,null,null,null,null];
(statearr_31468[(0)] = cljs$core$async$state_machine__30693__auto__);

(statearr_31468[(1)] = (1));

return statearr_31468;
});
var cljs$core$async$state_machine__30693__auto____1 = (function (state_31439){
while(true){
var ret_value__30694__auto__ = (function (){try{while(true){
var result__30695__auto__ = switch__30692__auto__(state_31439);
if(cljs.core.keyword_identical_QMARK_(result__30695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30695__auto__;
}
break;
}
}catch (e31469){var ex__30696__auto__ = e31469;
var statearr_31470_33544 = state_31439;
(statearr_31470_33544[(2)] = ex__30696__auto__);


if(cljs.core.seq((state_31439[(4)]))){
var statearr_31471_33545 = state_31439;
(statearr_31471_33545[(1)] = cljs.core.first((state_31439[(4)])));

} else {
throw ex__30696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33546 = state_31439;
state_31439 = G__33546;
continue;
} else {
return ret_value__30694__auto__;
}
break;
}
});
cljs$core$async$state_machine__30693__auto__ = function(state_31439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30693__auto____1.call(this,state_31439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30693__auto____0;
cljs$core$async$state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30693__auto____1;
return cljs$core$async$state_machine__30693__auto__;
})()
})();
var state__30878__auto__ = (function (){var statearr_31472 = f__30877__auto__();
(statearr_31472[(6)] = c__30876__auto___33520);

return statearr_31472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30878__auto__);
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
var c__30876__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30877__auto__ = (function (){var switch__30692__auto__ = (function (state_31494){
var state_val_31495 = (state_31494[(1)]);
if((state_val_31495 === (7))){
var inst_31490 = (state_31494[(2)]);
var state_31494__$1 = state_31494;
var statearr_31497_33547 = state_31494__$1;
(statearr_31497_33547[(2)] = inst_31490);

(statearr_31497_33547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (1))){
var inst_31473 = init;
var inst_31474 = inst_31473;
var state_31494__$1 = (function (){var statearr_31498 = state_31494;
(statearr_31498[(7)] = inst_31474);

return statearr_31498;
})();
var statearr_31499_33549 = state_31494__$1;
(statearr_31499_33549[(2)] = null);

(statearr_31499_33549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (4))){
var inst_31477 = (state_31494[(8)]);
var inst_31477__$1 = (state_31494[(2)]);
var inst_31478 = (inst_31477__$1 == null);
var state_31494__$1 = (function (){var statearr_31500 = state_31494;
(statearr_31500[(8)] = inst_31477__$1);

return statearr_31500;
})();
if(cljs.core.truth_(inst_31478)){
var statearr_31501_33551 = state_31494__$1;
(statearr_31501_33551[(1)] = (5));

} else {
var statearr_31502_33552 = state_31494__$1;
(statearr_31502_33552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (6))){
var inst_31474 = (state_31494[(7)]);
var inst_31477 = (state_31494[(8)]);
var inst_31481 = (state_31494[(9)]);
var inst_31481__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31474,inst_31477) : f.call(null,inst_31474,inst_31477));
var inst_31482 = cljs.core.reduced_QMARK_(inst_31481__$1);
var state_31494__$1 = (function (){var statearr_31504 = state_31494;
(statearr_31504[(9)] = inst_31481__$1);

return statearr_31504;
})();
if(inst_31482){
var statearr_31505_33556 = state_31494__$1;
(statearr_31505_33556[(1)] = (8));

} else {
var statearr_31506_33557 = state_31494__$1;
(statearr_31506_33557[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (3))){
var inst_31492 = (state_31494[(2)]);
var state_31494__$1 = state_31494;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31494__$1,inst_31492);
} else {
if((state_val_31495 === (2))){
var state_31494__$1 = state_31494;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31494__$1,(4),ch);
} else {
if((state_val_31495 === (9))){
var inst_31481 = (state_31494[(9)]);
var inst_31474 = inst_31481;
var state_31494__$1 = (function (){var statearr_31508 = state_31494;
(statearr_31508[(7)] = inst_31474);

return statearr_31508;
})();
var statearr_31509_33558 = state_31494__$1;
(statearr_31509_33558[(2)] = null);

(statearr_31509_33558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (5))){
var inst_31474 = (state_31494[(7)]);
var state_31494__$1 = state_31494;
var statearr_31510_33559 = state_31494__$1;
(statearr_31510_33559[(2)] = inst_31474);

(statearr_31510_33559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (10))){
var inst_31488 = (state_31494[(2)]);
var state_31494__$1 = state_31494;
var statearr_31511_33560 = state_31494__$1;
(statearr_31511_33560[(2)] = inst_31488);

(statearr_31511_33560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (8))){
var inst_31481 = (state_31494[(9)]);
var inst_31484 = cljs.core.deref(inst_31481);
var state_31494__$1 = state_31494;
var statearr_31512_33561 = state_31494__$1;
(statearr_31512_33561[(2)] = inst_31484);

(statearr_31512_33561[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__30693__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30693__auto____0 = (function (){
var statearr_31513 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31513[(0)] = cljs$core$async$reduce_$_state_machine__30693__auto__);

(statearr_31513[(1)] = (1));

return statearr_31513;
});
var cljs$core$async$reduce_$_state_machine__30693__auto____1 = (function (state_31494){
while(true){
var ret_value__30694__auto__ = (function (){try{while(true){
var result__30695__auto__ = switch__30692__auto__(state_31494);
if(cljs.core.keyword_identical_QMARK_(result__30695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30695__auto__;
}
break;
}
}catch (e31514){var ex__30696__auto__ = e31514;
var statearr_31515_33562 = state_31494;
(statearr_31515_33562[(2)] = ex__30696__auto__);


if(cljs.core.seq((state_31494[(4)]))){
var statearr_31516_33563 = state_31494;
(statearr_31516_33563[(1)] = cljs.core.first((state_31494[(4)])));

} else {
throw ex__30696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33564 = state_31494;
state_31494 = G__33564;
continue;
} else {
return ret_value__30694__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30693__auto__ = function(state_31494){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30693__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30693__auto____1.call(this,state_31494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30693__auto____0;
cljs$core$async$reduce_$_state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30693__auto____1;
return cljs$core$async$reduce_$_state_machine__30693__auto__;
})()
})();
var state__30878__auto__ = (function (){var statearr_31517 = f__30877__auto__();
(statearr_31517[(6)] = c__30876__auto__);

return statearr_31517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30878__auto__);
}));

return c__30876__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30876__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30877__auto__ = (function (){var switch__30692__auto__ = (function (state_31524){
var state_val_31525 = (state_31524[(1)]);
if((state_val_31525 === (1))){
var inst_31519 = cljs.core.async.reduce(f__$1,init,ch);
var state_31524__$1 = state_31524;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31524__$1,(2),inst_31519);
} else {
if((state_val_31525 === (2))){
var inst_31521 = (state_31524[(2)]);
var inst_31522 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31521) : f__$1.call(null,inst_31521));
var state_31524__$1 = state_31524;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31524__$1,inst_31522);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30693__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30693__auto____0 = (function (){
var statearr_31528 = [null,null,null,null,null,null,null];
(statearr_31528[(0)] = cljs$core$async$transduce_$_state_machine__30693__auto__);

(statearr_31528[(1)] = (1));

return statearr_31528;
});
var cljs$core$async$transduce_$_state_machine__30693__auto____1 = (function (state_31524){
while(true){
var ret_value__30694__auto__ = (function (){try{while(true){
var result__30695__auto__ = switch__30692__auto__(state_31524);
if(cljs.core.keyword_identical_QMARK_(result__30695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30695__auto__;
}
break;
}
}catch (e31529){var ex__30696__auto__ = e31529;
var statearr_31530_33567 = state_31524;
(statearr_31530_33567[(2)] = ex__30696__auto__);


if(cljs.core.seq((state_31524[(4)]))){
var statearr_31531_33568 = state_31524;
(statearr_31531_33568[(1)] = cljs.core.first((state_31524[(4)])));

} else {
throw ex__30696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33569 = state_31524;
state_31524 = G__33569;
continue;
} else {
return ret_value__30694__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30693__auto__ = function(state_31524){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30693__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30693__auto____1.call(this,state_31524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30693__auto____0;
cljs$core$async$transduce_$_state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30693__auto____1;
return cljs$core$async$transduce_$_state_machine__30693__auto__;
})()
})();
var state__30878__auto__ = (function (){var statearr_31532 = f__30877__auto__();
(statearr_31532[(6)] = c__30876__auto__);

return statearr_31532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30878__auto__);
}));

return c__30876__auto__;
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
var G__31535 = arguments.length;
switch (G__31535) {
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
var c__30876__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30877__auto__ = (function (){var switch__30692__auto__ = (function (state_31561){
var state_val_31562 = (state_31561[(1)]);
if((state_val_31562 === (7))){
var inst_31543 = (state_31561[(2)]);
var state_31561__$1 = state_31561;
var statearr_31563_33575 = state_31561__$1;
(statearr_31563_33575[(2)] = inst_31543);

(statearr_31563_33575[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31562 === (1))){
var inst_31537 = cljs.core.seq(coll);
var inst_31538 = inst_31537;
var state_31561__$1 = (function (){var statearr_31564 = state_31561;
(statearr_31564[(7)] = inst_31538);

return statearr_31564;
})();
var statearr_31565_33576 = state_31561__$1;
(statearr_31565_33576[(2)] = null);

(statearr_31565_33576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31562 === (4))){
var inst_31538 = (state_31561[(7)]);
var inst_31541 = cljs.core.first(inst_31538);
var state_31561__$1 = state_31561;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31561__$1,(7),ch,inst_31541);
} else {
if((state_val_31562 === (13))){
var inst_31555 = (state_31561[(2)]);
var state_31561__$1 = state_31561;
var statearr_31566_33577 = state_31561__$1;
(statearr_31566_33577[(2)] = inst_31555);

(statearr_31566_33577[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31562 === (6))){
var inst_31546 = (state_31561[(2)]);
var state_31561__$1 = state_31561;
if(cljs.core.truth_(inst_31546)){
var statearr_31567_33578 = state_31561__$1;
(statearr_31567_33578[(1)] = (8));

} else {
var statearr_31568_33579 = state_31561__$1;
(statearr_31568_33579[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31562 === (3))){
var inst_31559 = (state_31561[(2)]);
var state_31561__$1 = state_31561;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31561__$1,inst_31559);
} else {
if((state_val_31562 === (12))){
var state_31561__$1 = state_31561;
var statearr_31569_33580 = state_31561__$1;
(statearr_31569_33580[(2)] = null);

(statearr_31569_33580[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31562 === (2))){
var inst_31538 = (state_31561[(7)]);
var state_31561__$1 = state_31561;
if(cljs.core.truth_(inst_31538)){
var statearr_31570_33581 = state_31561__$1;
(statearr_31570_33581[(1)] = (4));

} else {
var statearr_31572_33582 = state_31561__$1;
(statearr_31572_33582[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31562 === (11))){
var inst_31552 = cljs.core.async.close_BANG_(ch);
var state_31561__$1 = state_31561;
var statearr_31573_33583 = state_31561__$1;
(statearr_31573_33583[(2)] = inst_31552);

(statearr_31573_33583[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31562 === (9))){
var state_31561__$1 = state_31561;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31576_33584 = state_31561__$1;
(statearr_31576_33584[(1)] = (11));

} else {
var statearr_31577_33585 = state_31561__$1;
(statearr_31577_33585[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31562 === (5))){
var inst_31538 = (state_31561[(7)]);
var state_31561__$1 = state_31561;
var statearr_31578_33586 = state_31561__$1;
(statearr_31578_33586[(2)] = inst_31538);

(statearr_31578_33586[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31562 === (10))){
var inst_31557 = (state_31561[(2)]);
var state_31561__$1 = state_31561;
var statearr_31579_33587 = state_31561__$1;
(statearr_31579_33587[(2)] = inst_31557);

(statearr_31579_33587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31562 === (8))){
var inst_31538 = (state_31561[(7)]);
var inst_31548 = cljs.core.next(inst_31538);
var inst_31538__$1 = inst_31548;
var state_31561__$1 = (function (){var statearr_31580 = state_31561;
(statearr_31580[(7)] = inst_31538__$1);

return statearr_31580;
})();
var statearr_31581_33588 = state_31561__$1;
(statearr_31581_33588[(2)] = null);

(statearr_31581_33588[(1)] = (2));


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
var cljs$core$async$state_machine__30693__auto__ = null;
var cljs$core$async$state_machine__30693__auto____0 = (function (){
var statearr_31582 = [null,null,null,null,null,null,null,null];
(statearr_31582[(0)] = cljs$core$async$state_machine__30693__auto__);

(statearr_31582[(1)] = (1));

return statearr_31582;
});
var cljs$core$async$state_machine__30693__auto____1 = (function (state_31561){
while(true){
var ret_value__30694__auto__ = (function (){try{while(true){
var result__30695__auto__ = switch__30692__auto__(state_31561);
if(cljs.core.keyword_identical_QMARK_(result__30695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30695__auto__;
}
break;
}
}catch (e31583){var ex__30696__auto__ = e31583;
var statearr_31584_33605 = state_31561;
(statearr_31584_33605[(2)] = ex__30696__auto__);


if(cljs.core.seq((state_31561[(4)]))){
var statearr_31585_33607 = state_31561;
(statearr_31585_33607[(1)] = cljs.core.first((state_31561[(4)])));

} else {
throw ex__30696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33608 = state_31561;
state_31561 = G__33608;
continue;
} else {
return ret_value__30694__auto__;
}
break;
}
});
cljs$core$async$state_machine__30693__auto__ = function(state_31561){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30693__auto____1.call(this,state_31561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30693__auto____0;
cljs$core$async$state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30693__auto____1;
return cljs$core$async$state_machine__30693__auto__;
})()
})();
var state__30878__auto__ = (function (){var statearr_31586 = f__30877__auto__();
(statearr_31586[(6)] = c__30876__auto__);

return statearr_31586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30878__auto__);
}));

return c__30876__auto__;
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
var G__31592 = arguments.length;
switch (G__31592) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_33610 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_33610(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33611 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_33611(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33612 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_33612(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33613 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_33613(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31609 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31609 = (function (ch,cs,meta31610){
this.ch = ch;
this.cs = cs;
this.meta31610 = meta31610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31611,meta31610__$1){
var self__ = this;
var _31611__$1 = this;
return (new cljs.core.async.t_cljs$core$async31609(self__.ch,self__.cs,meta31610__$1));
}));

(cljs.core.async.t_cljs$core$async31609.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31611){
var self__ = this;
var _31611__$1 = this;
return self__.meta31610;
}));

(cljs.core.async.t_cljs$core$async31609.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31609.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31609.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31609.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31609.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31609.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31609.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31610","meta31610",1192838244,null)], null);
}));

(cljs.core.async.t_cljs$core$async31609.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31609.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31609");

(cljs.core.async.t_cljs$core$async31609.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31609");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31609.
 */
cljs.core.async.__GT_t_cljs$core$async31609 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31609(ch__$1,cs__$1,meta31610){
return (new cljs.core.async.t_cljs$core$async31609(ch__$1,cs__$1,meta31610));
});

}

return (new cljs.core.async.t_cljs$core$async31609(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30876__auto___33618 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30877__auto__ = (function (){var switch__30692__auto__ = (function (state_31767){
var state_val_31768 = (state_31767[(1)]);
if((state_val_31768 === (7))){
var inst_31761 = (state_31767[(2)]);
var state_31767__$1 = state_31767;
var statearr_31776_33620 = state_31767__$1;
(statearr_31776_33620[(2)] = inst_31761);

(statearr_31776_33620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (20))){
var inst_31665 = (state_31767[(7)]);
var inst_31678 = cljs.core.first(inst_31665);
var inst_31679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31678,(0),null);
var inst_31680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31678,(1),null);
var state_31767__$1 = (function (){var statearr_31777 = state_31767;
(statearr_31777[(8)] = inst_31679);

return statearr_31777;
})();
if(cljs.core.truth_(inst_31680)){
var statearr_31778_33621 = state_31767__$1;
(statearr_31778_33621[(1)] = (22));

} else {
var statearr_31779_33622 = state_31767__$1;
(statearr_31779_33622[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (27))){
var inst_31708 = (state_31767[(9)]);
var inst_31710 = (state_31767[(10)]);
var inst_31626 = (state_31767[(11)]);
var inst_31715 = (state_31767[(12)]);
var inst_31715__$1 = cljs.core._nth(inst_31708,inst_31710);
var inst_31716 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31715__$1,inst_31626,done);
var state_31767__$1 = (function (){var statearr_31786 = state_31767;
(statearr_31786[(12)] = inst_31715__$1);

return statearr_31786;
})();
if(cljs.core.truth_(inst_31716)){
var statearr_31787_33624 = state_31767__$1;
(statearr_31787_33624[(1)] = (30));

} else {
var statearr_31792_33625 = state_31767__$1;
(statearr_31792_33625[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (1))){
var state_31767__$1 = state_31767;
var statearr_31793_33627 = state_31767__$1;
(statearr_31793_33627[(2)] = null);

(statearr_31793_33627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (24))){
var inst_31665 = (state_31767[(7)]);
var inst_31685 = (state_31767[(2)]);
var inst_31686 = cljs.core.next(inst_31665);
var inst_31637 = inst_31686;
var inst_31638 = null;
var inst_31639 = (0);
var inst_31640 = (0);
var state_31767__$1 = (function (){var statearr_31794 = state_31767;
(statearr_31794[(13)] = inst_31638);

(statearr_31794[(14)] = inst_31685);

(statearr_31794[(15)] = inst_31640);

(statearr_31794[(16)] = inst_31637);

(statearr_31794[(17)] = inst_31639);

return statearr_31794;
})();
var statearr_31795_33645 = state_31767__$1;
(statearr_31795_33645[(2)] = null);

(statearr_31795_33645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (39))){
var state_31767__$1 = state_31767;
var statearr_31811_33665 = state_31767__$1;
(statearr_31811_33665[(2)] = null);

(statearr_31811_33665[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (4))){
var inst_31626 = (state_31767[(11)]);
var inst_31626__$1 = (state_31767[(2)]);
var inst_31627 = (inst_31626__$1 == null);
var state_31767__$1 = (function (){var statearr_31812 = state_31767;
(statearr_31812[(11)] = inst_31626__$1);

return statearr_31812;
})();
if(cljs.core.truth_(inst_31627)){
var statearr_31813_33666 = state_31767__$1;
(statearr_31813_33666[(1)] = (5));

} else {
var statearr_31814_33667 = state_31767__$1;
(statearr_31814_33667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (15))){
var inst_31638 = (state_31767[(13)]);
var inst_31640 = (state_31767[(15)]);
var inst_31637 = (state_31767[(16)]);
var inst_31639 = (state_31767[(17)]);
var inst_31661 = (state_31767[(2)]);
var inst_31662 = (inst_31640 + (1));
var tmp31806 = inst_31638;
var tmp31807 = inst_31637;
var tmp31808 = inst_31639;
var inst_31637__$1 = tmp31807;
var inst_31638__$1 = tmp31806;
var inst_31639__$1 = tmp31808;
var inst_31640__$1 = inst_31662;
var state_31767__$1 = (function (){var statearr_31815 = state_31767;
(statearr_31815[(13)] = inst_31638__$1);

(statearr_31815[(18)] = inst_31661);

(statearr_31815[(15)] = inst_31640__$1);

(statearr_31815[(16)] = inst_31637__$1);

(statearr_31815[(17)] = inst_31639__$1);

return statearr_31815;
})();
var statearr_31816_33668 = state_31767__$1;
(statearr_31816_33668[(2)] = null);

(statearr_31816_33668[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (21))){
var inst_31689 = (state_31767[(2)]);
var state_31767__$1 = state_31767;
var statearr_31820_33669 = state_31767__$1;
(statearr_31820_33669[(2)] = inst_31689);

(statearr_31820_33669[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (31))){
var inst_31715 = (state_31767[(12)]);
var inst_31719 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31715);
var state_31767__$1 = state_31767;
var statearr_31821_33670 = state_31767__$1;
(statearr_31821_33670[(2)] = inst_31719);

(statearr_31821_33670[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (32))){
var inst_31707 = (state_31767[(19)]);
var inst_31708 = (state_31767[(9)]);
var inst_31710 = (state_31767[(10)]);
var inst_31709 = (state_31767[(20)]);
var inst_31721 = (state_31767[(2)]);
var inst_31722 = (inst_31710 + (1));
var tmp31817 = inst_31707;
var tmp31818 = inst_31708;
var tmp31819 = inst_31709;
var inst_31707__$1 = tmp31817;
var inst_31708__$1 = tmp31818;
var inst_31709__$1 = tmp31819;
var inst_31710__$1 = inst_31722;
var state_31767__$1 = (function (){var statearr_31826 = state_31767;
(statearr_31826[(19)] = inst_31707__$1);

(statearr_31826[(9)] = inst_31708__$1);

(statearr_31826[(10)] = inst_31710__$1);

(statearr_31826[(21)] = inst_31721);

(statearr_31826[(20)] = inst_31709__$1);

return statearr_31826;
})();
var statearr_31827_33671 = state_31767__$1;
(statearr_31827_33671[(2)] = null);

(statearr_31827_33671[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (40))){
var inst_31734 = (state_31767[(22)]);
var inst_31738 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31734);
var state_31767__$1 = state_31767;
var statearr_31828_33672 = state_31767__$1;
(statearr_31828_33672[(2)] = inst_31738);

(statearr_31828_33672[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (33))){
var inst_31725 = (state_31767[(23)]);
var inst_31727 = cljs.core.chunked_seq_QMARK_(inst_31725);
var state_31767__$1 = state_31767;
if(inst_31727){
var statearr_31829_33673 = state_31767__$1;
(statearr_31829_33673[(1)] = (36));

} else {
var statearr_31830_33674 = state_31767__$1;
(statearr_31830_33674[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (13))){
var inst_31649 = (state_31767[(24)]);
var inst_31658 = cljs.core.async.close_BANG_(inst_31649);
var state_31767__$1 = state_31767;
var statearr_31831_33675 = state_31767__$1;
(statearr_31831_33675[(2)] = inst_31658);

(statearr_31831_33675[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (22))){
var inst_31679 = (state_31767[(8)]);
var inst_31682 = cljs.core.async.close_BANG_(inst_31679);
var state_31767__$1 = state_31767;
var statearr_31837_33676 = state_31767__$1;
(statearr_31837_33676[(2)] = inst_31682);

(statearr_31837_33676[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (36))){
var inst_31725 = (state_31767[(23)]);
var inst_31729 = cljs.core.chunk_first(inst_31725);
var inst_31730 = cljs.core.chunk_rest(inst_31725);
var inst_31731 = cljs.core.count(inst_31729);
var inst_31707 = inst_31730;
var inst_31708 = inst_31729;
var inst_31709 = inst_31731;
var inst_31710 = (0);
var state_31767__$1 = (function (){var statearr_31844 = state_31767;
(statearr_31844[(19)] = inst_31707);

(statearr_31844[(9)] = inst_31708);

(statearr_31844[(10)] = inst_31710);

(statearr_31844[(20)] = inst_31709);

return statearr_31844;
})();
var statearr_31849_33677 = state_31767__$1;
(statearr_31849_33677[(2)] = null);

(statearr_31849_33677[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (41))){
var inst_31725 = (state_31767[(23)]);
var inst_31740 = (state_31767[(2)]);
var inst_31741 = cljs.core.next(inst_31725);
var inst_31707 = inst_31741;
var inst_31708 = null;
var inst_31709 = (0);
var inst_31710 = (0);
var state_31767__$1 = (function (){var statearr_31869 = state_31767;
(statearr_31869[(19)] = inst_31707);

(statearr_31869[(9)] = inst_31708);

(statearr_31869[(10)] = inst_31710);

(statearr_31869[(20)] = inst_31709);

(statearr_31869[(25)] = inst_31740);

return statearr_31869;
})();
var statearr_31871_33682 = state_31767__$1;
(statearr_31871_33682[(2)] = null);

(statearr_31871_33682[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (43))){
var state_31767__$1 = state_31767;
var statearr_31872_33683 = state_31767__$1;
(statearr_31872_33683[(2)] = null);

(statearr_31872_33683[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (29))){
var inst_31749 = (state_31767[(2)]);
var state_31767__$1 = state_31767;
var statearr_31873_33684 = state_31767__$1;
(statearr_31873_33684[(2)] = inst_31749);

(statearr_31873_33684[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (44))){
var inst_31758 = (state_31767[(2)]);
var state_31767__$1 = (function (){var statearr_31876 = state_31767;
(statearr_31876[(26)] = inst_31758);

return statearr_31876;
})();
var statearr_31878_33685 = state_31767__$1;
(statearr_31878_33685[(2)] = null);

(statearr_31878_33685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (6))){
var inst_31699 = (state_31767[(27)]);
var inst_31698 = cljs.core.deref(cs);
var inst_31699__$1 = cljs.core.keys(inst_31698);
var inst_31700 = cljs.core.count(inst_31699__$1);
var inst_31701 = cljs.core.reset_BANG_(dctr,inst_31700);
var inst_31706 = cljs.core.seq(inst_31699__$1);
var inst_31707 = inst_31706;
var inst_31708 = null;
var inst_31709 = (0);
var inst_31710 = (0);
var state_31767__$1 = (function (){var statearr_31879 = state_31767;
(statearr_31879[(27)] = inst_31699__$1);

(statearr_31879[(19)] = inst_31707);

(statearr_31879[(9)] = inst_31708);

(statearr_31879[(10)] = inst_31710);

(statearr_31879[(20)] = inst_31709);

(statearr_31879[(28)] = inst_31701);

return statearr_31879;
})();
var statearr_31880_33686 = state_31767__$1;
(statearr_31880_33686[(2)] = null);

(statearr_31880_33686[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (28))){
var inst_31707 = (state_31767[(19)]);
var inst_31725 = (state_31767[(23)]);
var inst_31725__$1 = cljs.core.seq(inst_31707);
var state_31767__$1 = (function (){var statearr_31888 = state_31767;
(statearr_31888[(23)] = inst_31725__$1);

return statearr_31888;
})();
if(inst_31725__$1){
var statearr_31889_33687 = state_31767__$1;
(statearr_31889_33687[(1)] = (33));

} else {
var statearr_31890_33688 = state_31767__$1;
(statearr_31890_33688[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (25))){
var inst_31710 = (state_31767[(10)]);
var inst_31709 = (state_31767[(20)]);
var inst_31712 = (inst_31710 < inst_31709);
var inst_31713 = inst_31712;
var state_31767__$1 = state_31767;
if(cljs.core.truth_(inst_31713)){
var statearr_31892_33689 = state_31767__$1;
(statearr_31892_33689[(1)] = (27));

} else {
var statearr_31894_33690 = state_31767__$1;
(statearr_31894_33690[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (34))){
var state_31767__$1 = state_31767;
var statearr_31896_33691 = state_31767__$1;
(statearr_31896_33691[(2)] = null);

(statearr_31896_33691[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (17))){
var state_31767__$1 = state_31767;
var statearr_31897_33692 = state_31767__$1;
(statearr_31897_33692[(2)] = null);

(statearr_31897_33692[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (3))){
var inst_31763 = (state_31767[(2)]);
var state_31767__$1 = state_31767;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31767__$1,inst_31763);
} else {
if((state_val_31768 === (12))){
var inst_31694 = (state_31767[(2)]);
var state_31767__$1 = state_31767;
var statearr_31902_33696 = state_31767__$1;
(statearr_31902_33696[(2)] = inst_31694);

(statearr_31902_33696[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (2))){
var state_31767__$1 = state_31767;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31767__$1,(4),ch);
} else {
if((state_val_31768 === (23))){
var state_31767__$1 = state_31767;
var statearr_31906_33697 = state_31767__$1;
(statearr_31906_33697[(2)] = null);

(statearr_31906_33697[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (35))){
var inst_31747 = (state_31767[(2)]);
var state_31767__$1 = state_31767;
var statearr_31909_33698 = state_31767__$1;
(statearr_31909_33698[(2)] = inst_31747);

(statearr_31909_33698[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (19))){
var inst_31665 = (state_31767[(7)]);
var inst_31670 = cljs.core.chunk_first(inst_31665);
var inst_31671 = cljs.core.chunk_rest(inst_31665);
var inst_31672 = cljs.core.count(inst_31670);
var inst_31637 = inst_31671;
var inst_31638 = inst_31670;
var inst_31639 = inst_31672;
var inst_31640 = (0);
var state_31767__$1 = (function (){var statearr_31912 = state_31767;
(statearr_31912[(13)] = inst_31638);

(statearr_31912[(15)] = inst_31640);

(statearr_31912[(16)] = inst_31637);

(statearr_31912[(17)] = inst_31639);

return statearr_31912;
})();
var statearr_31915_33699 = state_31767__$1;
(statearr_31915_33699[(2)] = null);

(statearr_31915_33699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (11))){
var inst_31665 = (state_31767[(7)]);
var inst_31637 = (state_31767[(16)]);
var inst_31665__$1 = cljs.core.seq(inst_31637);
var state_31767__$1 = (function (){var statearr_31916 = state_31767;
(statearr_31916[(7)] = inst_31665__$1);

return statearr_31916;
})();
if(inst_31665__$1){
var statearr_31917_33700 = state_31767__$1;
(statearr_31917_33700[(1)] = (16));

} else {
var statearr_31918_33701 = state_31767__$1;
(statearr_31918_33701[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (9))){
var inst_31696 = (state_31767[(2)]);
var state_31767__$1 = state_31767;
var statearr_31919_33702 = state_31767__$1;
(statearr_31919_33702[(2)] = inst_31696);

(statearr_31919_33702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (5))){
var inst_31635 = cljs.core.deref(cs);
var inst_31636 = cljs.core.seq(inst_31635);
var inst_31637 = inst_31636;
var inst_31638 = null;
var inst_31639 = (0);
var inst_31640 = (0);
var state_31767__$1 = (function (){var statearr_31921 = state_31767;
(statearr_31921[(13)] = inst_31638);

(statearr_31921[(15)] = inst_31640);

(statearr_31921[(16)] = inst_31637);

(statearr_31921[(17)] = inst_31639);

return statearr_31921;
})();
var statearr_31922_33703 = state_31767__$1;
(statearr_31922_33703[(2)] = null);

(statearr_31922_33703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (14))){
var state_31767__$1 = state_31767;
var statearr_31923_33704 = state_31767__$1;
(statearr_31923_33704[(2)] = null);

(statearr_31923_33704[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (45))){
var inst_31755 = (state_31767[(2)]);
var state_31767__$1 = state_31767;
var statearr_31924_33705 = state_31767__$1;
(statearr_31924_33705[(2)] = inst_31755);

(statearr_31924_33705[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (26))){
var inst_31699 = (state_31767[(27)]);
var inst_31751 = (state_31767[(2)]);
var inst_31752 = cljs.core.seq(inst_31699);
var state_31767__$1 = (function (){var statearr_31925 = state_31767;
(statearr_31925[(29)] = inst_31751);

return statearr_31925;
})();
if(inst_31752){
var statearr_31926_33725 = state_31767__$1;
(statearr_31926_33725[(1)] = (42));

} else {
var statearr_31927_33729 = state_31767__$1;
(statearr_31927_33729[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (16))){
var inst_31665 = (state_31767[(7)]);
var inst_31668 = cljs.core.chunked_seq_QMARK_(inst_31665);
var state_31767__$1 = state_31767;
if(inst_31668){
var statearr_31929_33731 = state_31767__$1;
(statearr_31929_33731[(1)] = (19));

} else {
var statearr_31930_33732 = state_31767__$1;
(statearr_31930_33732[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (38))){
var inst_31744 = (state_31767[(2)]);
var state_31767__$1 = state_31767;
var statearr_31933_33733 = state_31767__$1;
(statearr_31933_33733[(2)] = inst_31744);

(statearr_31933_33733[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (30))){
var state_31767__$1 = state_31767;
var statearr_31936_33734 = state_31767__$1;
(statearr_31936_33734[(2)] = null);

(statearr_31936_33734[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (10))){
var inst_31638 = (state_31767[(13)]);
var inst_31640 = (state_31767[(15)]);
var inst_31648 = cljs.core._nth(inst_31638,inst_31640);
var inst_31649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31648,(0),null);
var inst_31656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31648,(1),null);
var state_31767__$1 = (function (){var statearr_31938 = state_31767;
(statearr_31938[(24)] = inst_31649);

return statearr_31938;
})();
if(cljs.core.truth_(inst_31656)){
var statearr_31939_33735 = state_31767__$1;
(statearr_31939_33735[(1)] = (13));

} else {
var statearr_31940_33736 = state_31767__$1;
(statearr_31940_33736[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (18))){
var inst_31692 = (state_31767[(2)]);
var state_31767__$1 = state_31767;
var statearr_31942_33737 = state_31767__$1;
(statearr_31942_33737[(2)] = inst_31692);

(statearr_31942_33737[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (42))){
var state_31767__$1 = state_31767;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31767__$1,(45),dchan);
} else {
if((state_val_31768 === (37))){
var inst_31734 = (state_31767[(22)]);
var inst_31725 = (state_31767[(23)]);
var inst_31626 = (state_31767[(11)]);
var inst_31734__$1 = cljs.core.first(inst_31725);
var inst_31735 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31734__$1,inst_31626,done);
var state_31767__$1 = (function (){var statearr_31945 = state_31767;
(statearr_31945[(22)] = inst_31734__$1);

return statearr_31945;
})();
if(cljs.core.truth_(inst_31735)){
var statearr_31948_33738 = state_31767__$1;
(statearr_31948_33738[(1)] = (39));

} else {
var statearr_31950_33739 = state_31767__$1;
(statearr_31950_33739[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (8))){
var inst_31640 = (state_31767[(15)]);
var inst_31639 = (state_31767[(17)]);
var inst_31642 = (inst_31640 < inst_31639);
var inst_31643 = inst_31642;
var state_31767__$1 = state_31767;
if(cljs.core.truth_(inst_31643)){
var statearr_31951_33740 = state_31767__$1;
(statearr_31951_33740[(1)] = (10));

} else {
var statearr_31952_33741 = state_31767__$1;
(statearr_31952_33741[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__30693__auto__ = null;
var cljs$core$async$mult_$_state_machine__30693__auto____0 = (function (){
var statearr_31957 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31957[(0)] = cljs$core$async$mult_$_state_machine__30693__auto__);

(statearr_31957[(1)] = (1));

return statearr_31957;
});
var cljs$core$async$mult_$_state_machine__30693__auto____1 = (function (state_31767){
while(true){
var ret_value__30694__auto__ = (function (){try{while(true){
var result__30695__auto__ = switch__30692__auto__(state_31767);
if(cljs.core.keyword_identical_QMARK_(result__30695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30695__auto__;
}
break;
}
}catch (e31959){var ex__30696__auto__ = e31959;
var statearr_31960_33742 = state_31767;
(statearr_31960_33742[(2)] = ex__30696__auto__);


if(cljs.core.seq((state_31767[(4)]))){
var statearr_31961_33743 = state_31767;
(statearr_31961_33743[(1)] = cljs.core.first((state_31767[(4)])));

} else {
throw ex__30696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33744 = state_31767;
state_31767 = G__33744;
continue;
} else {
return ret_value__30694__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30693__auto__ = function(state_31767){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30693__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30693__auto____1.call(this,state_31767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30693__auto____0;
cljs$core$async$mult_$_state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30693__auto____1;
return cljs$core$async$mult_$_state_machine__30693__auto__;
})()
})();
var state__30878__auto__ = (function (){var statearr_31980 = f__30877__auto__();
(statearr_31980[(6)] = c__30876__auto___33618);

return statearr_31980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30878__auto__);
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
var G__31984 = arguments.length;
switch (G__31984) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_33748 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_33748(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33757 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_33757(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33758 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33758(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33762 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_33762(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33763 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33763(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33767 = arguments.length;
var i__4737__auto___33768 = (0);
while(true){
if((i__4737__auto___33768 < len__4736__auto___33767)){
args__4742__auto__.push((arguments[i__4737__auto___33768]));

var G__33769 = (i__4737__auto___33768 + (1));
i__4737__auto___33768 = G__33769;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32054){
var map__32055 = p__32054;
var map__32055__$1 = (((((!((map__32055 == null))))?(((((map__32055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32055):map__32055);
var opts = map__32055__$1;
var statearr_32059_33770 = state;
(statearr_32059_33770[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32060_33771 = state;
(statearr_32060_33771[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_32061_33773 = state;
(statearr_32061_33773[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32037){
var G__32038 = cljs.core.first(seq32037);
var seq32037__$1 = cljs.core.next(seq32037);
var G__32039 = cljs.core.first(seq32037__$1);
var seq32037__$2 = cljs.core.next(seq32037__$1);
var G__32040 = cljs.core.first(seq32037__$2);
var seq32037__$3 = cljs.core.next(seq32037__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32038,G__32039,G__32040,seq32037__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32062 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32062 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32063){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32063 = meta32063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32064,meta32063__$1){
var self__ = this;
var _32064__$1 = this;
return (new cljs.core.async.t_cljs$core$async32062(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32063__$1));
}));

(cljs.core.async.t_cljs$core$async32062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32064){
var self__ = this;
var _32064__$1 = this;
return self__.meta32063;
}));

(cljs.core.async.t_cljs$core$async32062.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32062.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32062.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32062.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32062.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32062.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32062.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32062.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32062.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32063","meta32063",-1052187554,null)], null);
}));

(cljs.core.async.t_cljs$core$async32062.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32062.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32062");

(cljs.core.async.t_cljs$core$async32062.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32062");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32062.
 */
cljs.core.async.__GT_t_cljs$core$async32062 = (function cljs$core$async$mix_$___GT_t_cljs$core$async32062(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32063){
return (new cljs.core.async.t_cljs$core$async32062(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32063));
});

}

return (new cljs.core.async.t_cljs$core$async32062(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30876__auto___33791 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30877__auto__ = (function (){var switch__30692__auto__ = (function (state_32199){
var state_val_32200 = (state_32199[(1)]);
if((state_val_32200 === (7))){
var inst_32102 = (state_32199[(2)]);
var state_32199__$1 = state_32199;
var statearr_32205_33792 = state_32199__$1;
(statearr_32205_33792[(2)] = inst_32102);

(statearr_32205_33792[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (20))){
var inst_32114 = (state_32199[(7)]);
var state_32199__$1 = state_32199;
var statearr_32206_33793 = state_32199__$1;
(statearr_32206_33793[(2)] = inst_32114);

(statearr_32206_33793[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (27))){
var state_32199__$1 = state_32199;
var statearr_32210_33794 = state_32199__$1;
(statearr_32210_33794[(2)] = null);

(statearr_32210_33794[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (1))){
var inst_32081 = (state_32199[(8)]);
var inst_32081__$1 = calc_state();
var inst_32087 = (inst_32081__$1 == null);
var inst_32088 = cljs.core.not(inst_32087);
var state_32199__$1 = (function (){var statearr_32213 = state_32199;
(statearr_32213[(8)] = inst_32081__$1);

return statearr_32213;
})();
if(inst_32088){
var statearr_32214_33795 = state_32199__$1;
(statearr_32214_33795[(1)] = (2));

} else {
var statearr_32215_33796 = state_32199__$1;
(statearr_32215_33796[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (24))){
var inst_32145 = (state_32199[(9)]);
var inst_32154 = (state_32199[(10)]);
var inst_32171 = (state_32199[(11)]);
var inst_32171__$1 = (inst_32145.cljs$core$IFn$_invoke$arity$1 ? inst_32145.cljs$core$IFn$_invoke$arity$1(inst_32154) : inst_32145.call(null,inst_32154));
var state_32199__$1 = (function (){var statearr_32216 = state_32199;
(statearr_32216[(11)] = inst_32171__$1);

return statearr_32216;
})();
if(cljs.core.truth_(inst_32171__$1)){
var statearr_32217_33797 = state_32199__$1;
(statearr_32217_33797[(1)] = (29));

} else {
var statearr_32218_33798 = state_32199__$1;
(statearr_32218_33798[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (4))){
var inst_32105 = (state_32199[(2)]);
var state_32199__$1 = state_32199;
if(cljs.core.truth_(inst_32105)){
var statearr_32219_33799 = state_32199__$1;
(statearr_32219_33799[(1)] = (8));

} else {
var statearr_32223_33800 = state_32199__$1;
(statearr_32223_33800[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (15))){
var inst_32139 = (state_32199[(2)]);
var state_32199__$1 = state_32199;
if(cljs.core.truth_(inst_32139)){
var statearr_32224_33801 = state_32199__$1;
(statearr_32224_33801[(1)] = (19));

} else {
var statearr_32225_33802 = state_32199__$1;
(statearr_32225_33802[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (21))){
var inst_32144 = (state_32199[(12)]);
var inst_32144__$1 = (state_32199[(2)]);
var inst_32145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32144__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32144__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32144__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32199__$1 = (function (){var statearr_32226 = state_32199;
(statearr_32226[(12)] = inst_32144__$1);

(statearr_32226[(13)] = inst_32146);

(statearr_32226[(9)] = inst_32145);

return statearr_32226;
})();
return cljs.core.async.ioc_alts_BANG_(state_32199__$1,(22),inst_32147);
} else {
if((state_val_32200 === (31))){
var inst_32181 = (state_32199[(2)]);
var state_32199__$1 = state_32199;
if(cljs.core.truth_(inst_32181)){
var statearr_32227_33812 = state_32199__$1;
(statearr_32227_33812[(1)] = (32));

} else {
var statearr_32228_33813 = state_32199__$1;
(statearr_32228_33813[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (32))){
var inst_32153 = (state_32199[(14)]);
var state_32199__$1 = state_32199;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32199__$1,(35),out,inst_32153);
} else {
if((state_val_32200 === (33))){
var inst_32144 = (state_32199[(12)]);
var inst_32114 = inst_32144;
var state_32199__$1 = (function (){var statearr_32231 = state_32199;
(statearr_32231[(7)] = inst_32114);

return statearr_32231;
})();
var statearr_32232_33817 = state_32199__$1;
(statearr_32232_33817[(2)] = null);

(statearr_32232_33817[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (13))){
var inst_32114 = (state_32199[(7)]);
var inst_32127 = inst_32114.cljs$lang$protocol_mask$partition0$;
var inst_32128 = (inst_32127 & (64));
var inst_32130 = inst_32114.cljs$core$ISeq$;
var inst_32131 = (cljs.core.PROTOCOL_SENTINEL === inst_32130);
var inst_32132 = ((inst_32128) || (inst_32131));
var state_32199__$1 = state_32199;
if(cljs.core.truth_(inst_32132)){
var statearr_32234_33818 = state_32199__$1;
(statearr_32234_33818[(1)] = (16));

} else {
var statearr_32235_33822 = state_32199__$1;
(statearr_32235_33822[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (22))){
var inst_32153 = (state_32199[(14)]);
var inst_32154 = (state_32199[(10)]);
var inst_32152 = (state_32199[(2)]);
var inst_32153__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32152,(0),null);
var inst_32154__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32152,(1),null);
var inst_32157 = (inst_32153__$1 == null);
var inst_32158 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32154__$1,change);
var inst_32159 = ((inst_32157) || (inst_32158));
var state_32199__$1 = (function (){var statearr_32237 = state_32199;
(statearr_32237[(14)] = inst_32153__$1);

(statearr_32237[(10)] = inst_32154__$1);

return statearr_32237;
})();
if(cljs.core.truth_(inst_32159)){
var statearr_32238_33826 = state_32199__$1;
(statearr_32238_33826[(1)] = (23));

} else {
var statearr_32239_33827 = state_32199__$1;
(statearr_32239_33827[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (36))){
var inst_32144 = (state_32199[(12)]);
var inst_32114 = inst_32144;
var state_32199__$1 = (function (){var statearr_32240 = state_32199;
(statearr_32240[(7)] = inst_32114);

return statearr_32240;
})();
var statearr_32241_33828 = state_32199__$1;
(statearr_32241_33828[(2)] = null);

(statearr_32241_33828[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (29))){
var inst_32171 = (state_32199[(11)]);
var state_32199__$1 = state_32199;
var statearr_32242_33829 = state_32199__$1;
(statearr_32242_33829[(2)] = inst_32171);

(statearr_32242_33829[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (6))){
var state_32199__$1 = state_32199;
var statearr_32243_33830 = state_32199__$1;
(statearr_32243_33830[(2)] = false);

(statearr_32243_33830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (28))){
var inst_32166 = (state_32199[(2)]);
var inst_32167 = calc_state();
var inst_32114 = inst_32167;
var state_32199__$1 = (function (){var statearr_32244 = state_32199;
(statearr_32244[(7)] = inst_32114);

(statearr_32244[(15)] = inst_32166);

return statearr_32244;
})();
var statearr_32245_33831 = state_32199__$1;
(statearr_32245_33831[(2)] = null);

(statearr_32245_33831[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (25))){
var inst_32195 = (state_32199[(2)]);
var state_32199__$1 = state_32199;
var statearr_32246_33832 = state_32199__$1;
(statearr_32246_33832[(2)] = inst_32195);

(statearr_32246_33832[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (34))){
var inst_32193 = (state_32199[(2)]);
var state_32199__$1 = state_32199;
var statearr_32247_33833 = state_32199__$1;
(statearr_32247_33833[(2)] = inst_32193);

(statearr_32247_33833[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (17))){
var state_32199__$1 = state_32199;
var statearr_32248_33834 = state_32199__$1;
(statearr_32248_33834[(2)] = false);

(statearr_32248_33834[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (3))){
var state_32199__$1 = state_32199;
var statearr_32249_33835 = state_32199__$1;
(statearr_32249_33835[(2)] = false);

(statearr_32249_33835[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (12))){
var inst_32197 = (state_32199[(2)]);
var state_32199__$1 = state_32199;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32199__$1,inst_32197);
} else {
if((state_val_32200 === (2))){
var inst_32081 = (state_32199[(8)]);
var inst_32090 = inst_32081.cljs$lang$protocol_mask$partition0$;
var inst_32091 = (inst_32090 & (64));
var inst_32092 = inst_32081.cljs$core$ISeq$;
var inst_32093 = (cljs.core.PROTOCOL_SENTINEL === inst_32092);
var inst_32094 = ((inst_32091) || (inst_32093));
var state_32199__$1 = state_32199;
if(cljs.core.truth_(inst_32094)){
var statearr_32250_33841 = state_32199__$1;
(statearr_32250_33841[(1)] = (5));

} else {
var statearr_32251_33842 = state_32199__$1;
(statearr_32251_33842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (23))){
var inst_32153 = (state_32199[(14)]);
var inst_32161 = (inst_32153 == null);
var state_32199__$1 = state_32199;
if(cljs.core.truth_(inst_32161)){
var statearr_32252_33843 = state_32199__$1;
(statearr_32252_33843[(1)] = (26));

} else {
var statearr_32253_33844 = state_32199__$1;
(statearr_32253_33844[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (35))){
var inst_32184 = (state_32199[(2)]);
var state_32199__$1 = state_32199;
if(cljs.core.truth_(inst_32184)){
var statearr_32254_33845 = state_32199__$1;
(statearr_32254_33845[(1)] = (36));

} else {
var statearr_32255_33846 = state_32199__$1;
(statearr_32255_33846[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (19))){
var inst_32114 = (state_32199[(7)]);
var inst_32141 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32114);
var state_32199__$1 = state_32199;
var statearr_32256_33847 = state_32199__$1;
(statearr_32256_33847[(2)] = inst_32141);

(statearr_32256_33847[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (11))){
var inst_32114 = (state_32199[(7)]);
var inst_32122 = (inst_32114 == null);
var inst_32123 = cljs.core.not(inst_32122);
var state_32199__$1 = state_32199;
if(inst_32123){
var statearr_32258_33851 = state_32199__$1;
(statearr_32258_33851[(1)] = (13));

} else {
var statearr_32260_33852 = state_32199__$1;
(statearr_32260_33852[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (9))){
var inst_32081 = (state_32199[(8)]);
var state_32199__$1 = state_32199;
var statearr_32261_33857 = state_32199__$1;
(statearr_32261_33857[(2)] = inst_32081);

(statearr_32261_33857[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (5))){
var state_32199__$1 = state_32199;
var statearr_32262_33861 = state_32199__$1;
(statearr_32262_33861[(2)] = true);

(statearr_32262_33861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (14))){
var state_32199__$1 = state_32199;
var statearr_32263_33862 = state_32199__$1;
(statearr_32263_33862[(2)] = false);

(statearr_32263_33862[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (26))){
var inst_32154 = (state_32199[(10)]);
var inst_32163 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32154);
var state_32199__$1 = state_32199;
var statearr_32264_33863 = state_32199__$1;
(statearr_32264_33863[(2)] = inst_32163);

(statearr_32264_33863[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (16))){
var state_32199__$1 = state_32199;
var statearr_32265_33864 = state_32199__$1;
(statearr_32265_33864[(2)] = true);

(statearr_32265_33864[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (38))){
var inst_32189 = (state_32199[(2)]);
var state_32199__$1 = state_32199;
var statearr_32266_33865 = state_32199__$1;
(statearr_32266_33865[(2)] = inst_32189);

(statearr_32266_33865[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (30))){
var inst_32146 = (state_32199[(13)]);
var inst_32145 = (state_32199[(9)]);
var inst_32154 = (state_32199[(10)]);
var inst_32176 = cljs.core.empty_QMARK_(inst_32145);
var inst_32177 = (inst_32146.cljs$core$IFn$_invoke$arity$1 ? inst_32146.cljs$core$IFn$_invoke$arity$1(inst_32154) : inst_32146.call(null,inst_32154));
var inst_32178 = cljs.core.not(inst_32177);
var inst_32179 = ((inst_32176) && (inst_32178));
var state_32199__$1 = state_32199;
var statearr_32267_33871 = state_32199__$1;
(statearr_32267_33871[(2)] = inst_32179);

(statearr_32267_33871[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (10))){
var inst_32081 = (state_32199[(8)]);
var inst_32110 = (state_32199[(2)]);
var inst_32111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32110,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32110,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32110,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32114 = inst_32081;
var state_32199__$1 = (function (){var statearr_32268 = state_32199;
(statearr_32268[(7)] = inst_32114);

(statearr_32268[(16)] = inst_32113);

(statearr_32268[(17)] = inst_32111);

(statearr_32268[(18)] = inst_32112);

return statearr_32268;
})();
var statearr_32269_33875 = state_32199__$1;
(statearr_32269_33875[(2)] = null);

(statearr_32269_33875[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (18))){
var inst_32136 = (state_32199[(2)]);
var state_32199__$1 = state_32199;
var statearr_32271_33876 = state_32199__$1;
(statearr_32271_33876[(2)] = inst_32136);

(statearr_32271_33876[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (37))){
var state_32199__$1 = state_32199;
var statearr_32274_33896 = state_32199__$1;
(statearr_32274_33896[(2)] = null);

(statearr_32274_33896[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32200 === (8))){
var inst_32081 = (state_32199[(8)]);
var inst_32107 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32081);
var state_32199__$1 = state_32199;
var statearr_32275_33897 = state_32199__$1;
(statearr_32275_33897[(2)] = inst_32107);

(statearr_32275_33897[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__30693__auto__ = null;
var cljs$core$async$mix_$_state_machine__30693__auto____0 = (function (){
var statearr_32276 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32276[(0)] = cljs$core$async$mix_$_state_machine__30693__auto__);

(statearr_32276[(1)] = (1));

return statearr_32276;
});
var cljs$core$async$mix_$_state_machine__30693__auto____1 = (function (state_32199){
while(true){
var ret_value__30694__auto__ = (function (){try{while(true){
var result__30695__auto__ = switch__30692__auto__(state_32199);
if(cljs.core.keyword_identical_QMARK_(result__30695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30695__auto__;
}
break;
}
}catch (e32277){var ex__30696__auto__ = e32277;
var statearr_32278_33898 = state_32199;
(statearr_32278_33898[(2)] = ex__30696__auto__);


if(cljs.core.seq((state_32199[(4)]))){
var statearr_32279_33899 = state_32199;
(statearr_32279_33899[(1)] = cljs.core.first((state_32199[(4)])));

} else {
throw ex__30696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33900 = state_32199;
state_32199 = G__33900;
continue;
} else {
return ret_value__30694__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30693__auto__ = function(state_32199){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30693__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30693__auto____1.call(this,state_32199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30693__auto____0;
cljs$core$async$mix_$_state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30693__auto____1;
return cljs$core$async$mix_$_state_machine__30693__auto__;
})()
})();
var state__30878__auto__ = (function (){var statearr_32283 = f__30877__auto__();
(statearr_32283[(6)] = c__30876__auto___33791);

return statearr_32283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30878__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_33902 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_33902(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33909 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_33909(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33910 = (function() {
var G__33911 = null;
var G__33911__1 = (function (p){
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
var G__33911__2 = (function (p,v){
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
G__33911 = function(p,v){
switch(arguments.length){
case 1:
return G__33911__1.call(this,p);
case 2:
return G__33911__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33911.cljs$core$IFn$_invoke$arity$1 = G__33911__1;
G__33911.cljs$core$IFn$_invoke$arity$2 = G__33911__2;
return G__33911;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32300 = arguments.length;
switch (G__32300) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33910(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33910(p,v);
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
var G__32309 = arguments.length;
switch (G__32309) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32303_SHARP_){
if(cljs.core.truth_((p1__32303_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32303_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32303_SHARP_.call(null,topic)))){
return p1__32303_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32303_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32314 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32314 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32315){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32315 = meta32315;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32316,meta32315__$1){
var self__ = this;
var _32316__$1 = this;
return (new cljs.core.async.t_cljs$core$async32314(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32315__$1));
}));

(cljs.core.async.t_cljs$core$async32314.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32316){
var self__ = this;
var _32316__$1 = this;
return self__.meta32315;
}));

(cljs.core.async.t_cljs$core$async32314.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32314.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32314.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32314.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32314.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async32314.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32314.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32314.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32315","meta32315",-569230593,null)], null);
}));

(cljs.core.async.t_cljs$core$async32314.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32314.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32314");

(cljs.core.async.t_cljs$core$async32314.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32314");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32314.
 */
cljs.core.async.__GT_t_cljs$core$async32314 = (function cljs$core$async$__GT_t_cljs$core$async32314(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32315){
return (new cljs.core.async.t_cljs$core$async32314(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32315));
});

}

return (new cljs.core.async.t_cljs$core$async32314(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30876__auto___33966 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30877__auto__ = (function (){var switch__30692__auto__ = (function (state_32401){
var state_val_32402 = (state_32401[(1)]);
if((state_val_32402 === (7))){
var inst_32393 = (state_32401[(2)]);
var state_32401__$1 = state_32401;
var statearr_32403_33967 = state_32401__$1;
(statearr_32403_33967[(2)] = inst_32393);

(statearr_32403_33967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (20))){
var state_32401__$1 = state_32401;
var statearr_32404_33968 = state_32401__$1;
(statearr_32404_33968[(2)] = null);

(statearr_32404_33968[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (1))){
var state_32401__$1 = state_32401;
var statearr_32405_33969 = state_32401__$1;
(statearr_32405_33969[(2)] = null);

(statearr_32405_33969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (24))){
var inst_32376 = (state_32401[(7)]);
var inst_32385 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32376);
var state_32401__$1 = state_32401;
var statearr_32406_33970 = state_32401__$1;
(statearr_32406_33970[(2)] = inst_32385);

(statearr_32406_33970[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (4))){
var inst_32320 = (state_32401[(8)]);
var inst_32320__$1 = (state_32401[(2)]);
var inst_32321 = (inst_32320__$1 == null);
var state_32401__$1 = (function (){var statearr_32407 = state_32401;
(statearr_32407[(8)] = inst_32320__$1);

return statearr_32407;
})();
if(cljs.core.truth_(inst_32321)){
var statearr_32408_33971 = state_32401__$1;
(statearr_32408_33971[(1)] = (5));

} else {
var statearr_32409_33972 = state_32401__$1;
(statearr_32409_33972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (15))){
var inst_32370 = (state_32401[(2)]);
var state_32401__$1 = state_32401;
var statearr_32410_33973 = state_32401__$1;
(statearr_32410_33973[(2)] = inst_32370);

(statearr_32410_33973[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (21))){
var inst_32390 = (state_32401[(2)]);
var state_32401__$1 = (function (){var statearr_32411 = state_32401;
(statearr_32411[(9)] = inst_32390);

return statearr_32411;
})();
var statearr_32412_33974 = state_32401__$1;
(statearr_32412_33974[(2)] = null);

(statearr_32412_33974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (13))){
var inst_32344 = (state_32401[(10)]);
var inst_32346 = cljs.core.chunked_seq_QMARK_(inst_32344);
var state_32401__$1 = state_32401;
if(inst_32346){
var statearr_32425_33976 = state_32401__$1;
(statearr_32425_33976[(1)] = (16));

} else {
var statearr_32426_33977 = state_32401__$1;
(statearr_32426_33977[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (22))){
var inst_32382 = (state_32401[(2)]);
var state_32401__$1 = state_32401;
if(cljs.core.truth_(inst_32382)){
var statearr_32427_33985 = state_32401__$1;
(statearr_32427_33985[(1)] = (23));

} else {
var statearr_32428_33986 = state_32401__$1;
(statearr_32428_33986[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (6))){
var inst_32320 = (state_32401[(8)]);
var inst_32378 = (state_32401[(11)]);
var inst_32376 = (state_32401[(7)]);
var inst_32376__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32320) : topic_fn.call(null,inst_32320));
var inst_32377 = cljs.core.deref(mults);
var inst_32378__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32377,inst_32376__$1);
var state_32401__$1 = (function (){var statearr_32432 = state_32401;
(statearr_32432[(11)] = inst_32378__$1);

(statearr_32432[(7)] = inst_32376__$1);

return statearr_32432;
})();
if(cljs.core.truth_(inst_32378__$1)){
var statearr_32433_33987 = state_32401__$1;
(statearr_32433_33987[(1)] = (19));

} else {
var statearr_32434_33988 = state_32401__$1;
(statearr_32434_33988[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (25))){
var inst_32387 = (state_32401[(2)]);
var state_32401__$1 = state_32401;
var statearr_32435_33989 = state_32401__$1;
(statearr_32435_33989[(2)] = inst_32387);

(statearr_32435_33989[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (17))){
var inst_32344 = (state_32401[(10)]);
var inst_32357 = cljs.core.first(inst_32344);
var inst_32358 = cljs.core.async.muxch_STAR_(inst_32357);
var inst_32359 = cljs.core.async.close_BANG_(inst_32358);
var inst_32364 = cljs.core.next(inst_32344);
var inst_32330 = inst_32364;
var inst_32331 = null;
var inst_32332 = (0);
var inst_32333 = (0);
var state_32401__$1 = (function (){var statearr_32436 = state_32401;
(statearr_32436[(12)] = inst_32331);

(statearr_32436[(13)] = inst_32332);

(statearr_32436[(14)] = inst_32333);

(statearr_32436[(15)] = inst_32330);

(statearr_32436[(16)] = inst_32359);

return statearr_32436;
})();
var statearr_32437_33990 = state_32401__$1;
(statearr_32437_33990[(2)] = null);

(statearr_32437_33990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (3))){
var inst_32395 = (state_32401[(2)]);
var state_32401__$1 = state_32401;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32401__$1,inst_32395);
} else {
if((state_val_32402 === (12))){
var inst_32372 = (state_32401[(2)]);
var state_32401__$1 = state_32401;
var statearr_32438_33991 = state_32401__$1;
(statearr_32438_33991[(2)] = inst_32372);

(statearr_32438_33991[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (2))){
var state_32401__$1 = state_32401;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32401__$1,(4),ch);
} else {
if((state_val_32402 === (23))){
var state_32401__$1 = state_32401;
var statearr_32457_33992 = state_32401__$1;
(statearr_32457_33992[(2)] = null);

(statearr_32457_33992[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (19))){
var inst_32320 = (state_32401[(8)]);
var inst_32378 = (state_32401[(11)]);
var inst_32380 = cljs.core.async.muxch_STAR_(inst_32378);
var state_32401__$1 = state_32401;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32401__$1,(22),inst_32380,inst_32320);
} else {
if((state_val_32402 === (11))){
var inst_32344 = (state_32401[(10)]);
var inst_32330 = (state_32401[(15)]);
var inst_32344__$1 = cljs.core.seq(inst_32330);
var state_32401__$1 = (function (){var statearr_32460 = state_32401;
(statearr_32460[(10)] = inst_32344__$1);

return statearr_32460;
})();
if(inst_32344__$1){
var statearr_32461_33995 = state_32401__$1;
(statearr_32461_33995[(1)] = (13));

} else {
var statearr_32462_33996 = state_32401__$1;
(statearr_32462_33996[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (9))){
var inst_32374 = (state_32401[(2)]);
var state_32401__$1 = state_32401;
var statearr_32463_33997 = state_32401__$1;
(statearr_32463_33997[(2)] = inst_32374);

(statearr_32463_33997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (5))){
var inst_32327 = cljs.core.deref(mults);
var inst_32328 = cljs.core.vals(inst_32327);
var inst_32329 = cljs.core.seq(inst_32328);
var inst_32330 = inst_32329;
var inst_32331 = null;
var inst_32332 = (0);
var inst_32333 = (0);
var state_32401__$1 = (function (){var statearr_32470 = state_32401;
(statearr_32470[(12)] = inst_32331);

(statearr_32470[(13)] = inst_32332);

(statearr_32470[(14)] = inst_32333);

(statearr_32470[(15)] = inst_32330);

return statearr_32470;
})();
var statearr_32471_33998 = state_32401__$1;
(statearr_32471_33998[(2)] = null);

(statearr_32471_33998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (14))){
var state_32401__$1 = state_32401;
var statearr_32475_33999 = state_32401__$1;
(statearr_32475_33999[(2)] = null);

(statearr_32475_33999[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (16))){
var inst_32344 = (state_32401[(10)]);
var inst_32352 = cljs.core.chunk_first(inst_32344);
var inst_32353 = cljs.core.chunk_rest(inst_32344);
var inst_32354 = cljs.core.count(inst_32352);
var inst_32330 = inst_32353;
var inst_32331 = inst_32352;
var inst_32332 = inst_32354;
var inst_32333 = (0);
var state_32401__$1 = (function (){var statearr_32476 = state_32401;
(statearr_32476[(12)] = inst_32331);

(statearr_32476[(13)] = inst_32332);

(statearr_32476[(14)] = inst_32333);

(statearr_32476[(15)] = inst_32330);

return statearr_32476;
})();
var statearr_32479_34000 = state_32401__$1;
(statearr_32479_34000[(2)] = null);

(statearr_32479_34000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (10))){
var inst_32331 = (state_32401[(12)]);
var inst_32332 = (state_32401[(13)]);
var inst_32333 = (state_32401[(14)]);
var inst_32330 = (state_32401[(15)]);
var inst_32338 = cljs.core._nth(inst_32331,inst_32333);
var inst_32339 = cljs.core.async.muxch_STAR_(inst_32338);
var inst_32340 = cljs.core.async.close_BANG_(inst_32339);
var inst_32341 = (inst_32333 + (1));
var tmp32472 = inst_32331;
var tmp32473 = inst_32332;
var tmp32474 = inst_32330;
var inst_32330__$1 = tmp32474;
var inst_32331__$1 = tmp32472;
var inst_32332__$1 = tmp32473;
var inst_32333__$1 = inst_32341;
var state_32401__$1 = (function (){var statearr_32480 = state_32401;
(statearr_32480[(12)] = inst_32331__$1);

(statearr_32480[(13)] = inst_32332__$1);

(statearr_32480[(14)] = inst_32333__$1);

(statearr_32480[(15)] = inst_32330__$1);

(statearr_32480[(17)] = inst_32340);

return statearr_32480;
})();
var statearr_32481_34001 = state_32401__$1;
(statearr_32481_34001[(2)] = null);

(statearr_32481_34001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (18))){
var inst_32367 = (state_32401[(2)]);
var state_32401__$1 = state_32401;
var statearr_32482_34002 = state_32401__$1;
(statearr_32482_34002[(2)] = inst_32367);

(statearr_32482_34002[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32402 === (8))){
var inst_32332 = (state_32401[(13)]);
var inst_32333 = (state_32401[(14)]);
var inst_32335 = (inst_32333 < inst_32332);
var inst_32336 = inst_32335;
var state_32401__$1 = state_32401;
if(cljs.core.truth_(inst_32336)){
var statearr_32483_34005 = state_32401__$1;
(statearr_32483_34005[(1)] = (10));

} else {
var statearr_32484_34006 = state_32401__$1;
(statearr_32484_34006[(1)] = (11));

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
var cljs$core$async$state_machine__30693__auto__ = null;
var cljs$core$async$state_machine__30693__auto____0 = (function (){
var statearr_32485 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32485[(0)] = cljs$core$async$state_machine__30693__auto__);

(statearr_32485[(1)] = (1));

return statearr_32485;
});
var cljs$core$async$state_machine__30693__auto____1 = (function (state_32401){
while(true){
var ret_value__30694__auto__ = (function (){try{while(true){
var result__30695__auto__ = switch__30692__auto__(state_32401);
if(cljs.core.keyword_identical_QMARK_(result__30695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30695__auto__;
}
break;
}
}catch (e32486){var ex__30696__auto__ = e32486;
var statearr_32487_34013 = state_32401;
(statearr_32487_34013[(2)] = ex__30696__auto__);


if(cljs.core.seq((state_32401[(4)]))){
var statearr_32488_34014 = state_32401;
(statearr_32488_34014[(1)] = cljs.core.first((state_32401[(4)])));

} else {
throw ex__30696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34015 = state_32401;
state_32401 = G__34015;
continue;
} else {
return ret_value__30694__auto__;
}
break;
}
});
cljs$core$async$state_machine__30693__auto__ = function(state_32401){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30693__auto____1.call(this,state_32401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30693__auto____0;
cljs$core$async$state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30693__auto____1;
return cljs$core$async$state_machine__30693__auto__;
})()
})();
var state__30878__auto__ = (function (){var statearr_32494 = f__30877__auto__();
(statearr_32494[(6)] = c__30876__auto___33966);

return statearr_32494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30878__auto__);
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
var G__32499 = arguments.length;
switch (G__32499) {
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
var G__32504 = arguments.length;
switch (G__32504) {
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
var c__30876__auto___34025 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30877__auto__ = (function (){var switch__30692__auto__ = (function (state_32555){
var state_val_32556 = (state_32555[(1)]);
if((state_val_32556 === (7))){
var state_32555__$1 = state_32555;
var statearr_32557_34026 = state_32555__$1;
(statearr_32557_34026[(2)] = null);

(statearr_32557_34026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (1))){
var state_32555__$1 = state_32555;
var statearr_32558_34027 = state_32555__$1;
(statearr_32558_34027[(2)] = null);

(statearr_32558_34027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (4))){
var inst_32509 = (state_32555[(7)]);
var inst_32510 = (state_32555[(8)]);
var inst_32512 = (inst_32510 < inst_32509);
var state_32555__$1 = state_32555;
if(cljs.core.truth_(inst_32512)){
var statearr_32559_34028 = state_32555__$1;
(statearr_32559_34028[(1)] = (6));

} else {
var statearr_32560_34029 = state_32555__$1;
(statearr_32560_34029[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (15))){
var inst_32541 = (state_32555[(9)]);
var inst_32546 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32541);
var state_32555__$1 = state_32555;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32555__$1,(17),out,inst_32546);
} else {
if((state_val_32556 === (13))){
var inst_32541 = (state_32555[(9)]);
var inst_32541__$1 = (state_32555[(2)]);
var inst_32542 = cljs.core.some(cljs.core.nil_QMARK_,inst_32541__$1);
var state_32555__$1 = (function (){var statearr_32561 = state_32555;
(statearr_32561[(9)] = inst_32541__$1);

return statearr_32561;
})();
if(cljs.core.truth_(inst_32542)){
var statearr_32562_34030 = state_32555__$1;
(statearr_32562_34030[(1)] = (14));

} else {
var statearr_32563_34031 = state_32555__$1;
(statearr_32563_34031[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (6))){
var state_32555__$1 = state_32555;
var statearr_32564_34032 = state_32555__$1;
(statearr_32564_34032[(2)] = null);

(statearr_32564_34032[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (17))){
var inst_32548 = (state_32555[(2)]);
var state_32555__$1 = (function (){var statearr_32566 = state_32555;
(statearr_32566[(10)] = inst_32548);

return statearr_32566;
})();
var statearr_32567_34033 = state_32555__$1;
(statearr_32567_34033[(2)] = null);

(statearr_32567_34033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (3))){
var inst_32553 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32555__$1,inst_32553);
} else {
if((state_val_32556 === (12))){
var _ = (function (){var statearr_32568 = state_32555;
(statearr_32568[(4)] = cljs.core.rest((state_32555[(4)])));

return statearr_32568;
})();
var state_32555__$1 = state_32555;
var ex32565 = (state_32555__$1[(2)]);
var statearr_32569_34036 = state_32555__$1;
(statearr_32569_34036[(5)] = ex32565);


if((ex32565 instanceof Object)){
var statearr_32570_34037 = state_32555__$1;
(statearr_32570_34037[(1)] = (11));

(statearr_32570_34037[(5)] = null);

} else {
throw ex32565;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (2))){
var inst_32508 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32509 = cnt;
var inst_32510 = (0);
var state_32555__$1 = (function (){var statearr_32571 = state_32555;
(statearr_32571[(7)] = inst_32509);

(statearr_32571[(11)] = inst_32508);

(statearr_32571[(8)] = inst_32510);

return statearr_32571;
})();
var statearr_32572_34038 = state_32555__$1;
(statearr_32572_34038[(2)] = null);

(statearr_32572_34038[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (11))){
var inst_32517 = (state_32555[(2)]);
var inst_32518 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32555__$1 = (function (){var statearr_32573 = state_32555;
(statearr_32573[(12)] = inst_32517);

return statearr_32573;
})();
var statearr_32574_34039 = state_32555__$1;
(statearr_32574_34039[(2)] = inst_32518);

(statearr_32574_34039[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (9))){
var inst_32510 = (state_32555[(8)]);
var _ = (function (){var statearr_32575 = state_32555;
(statearr_32575[(4)] = cljs.core.cons((12),(state_32555[(4)])));

return statearr_32575;
})();
var inst_32526 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32510) : chs__$1.call(null,inst_32510));
var inst_32527 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32510) : done.call(null,inst_32510));
var inst_32528 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32526,inst_32527);
var ___$1 = (function (){var statearr_32576 = state_32555;
(statearr_32576[(4)] = cljs.core.rest((state_32555[(4)])));

return statearr_32576;
})();
var state_32555__$1 = state_32555;
var statearr_32577_34040 = state_32555__$1;
(statearr_32577_34040[(2)] = inst_32528);

(statearr_32577_34040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (5))){
var inst_32538 = (state_32555[(2)]);
var state_32555__$1 = (function (){var statearr_32578 = state_32555;
(statearr_32578[(13)] = inst_32538);

return statearr_32578;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32555__$1,(13),dchan);
} else {
if((state_val_32556 === (14))){
var inst_32544 = cljs.core.async.close_BANG_(out);
var state_32555__$1 = state_32555;
var statearr_32579_34041 = state_32555__$1;
(statearr_32579_34041[(2)] = inst_32544);

(statearr_32579_34041[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (16))){
var inst_32551 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32580_34042 = state_32555__$1;
(statearr_32580_34042[(2)] = inst_32551);

(statearr_32580_34042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (10))){
var inst_32510 = (state_32555[(8)]);
var inst_32531 = (state_32555[(2)]);
var inst_32532 = (inst_32510 + (1));
var inst_32510__$1 = inst_32532;
var state_32555__$1 = (function (){var statearr_32581 = state_32555;
(statearr_32581[(14)] = inst_32531);

(statearr_32581[(8)] = inst_32510__$1);

return statearr_32581;
})();
var statearr_32582_34043 = state_32555__$1;
(statearr_32582_34043[(2)] = null);

(statearr_32582_34043[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (8))){
var inst_32536 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32583_34044 = state_32555__$1;
(statearr_32583_34044[(2)] = inst_32536);

(statearr_32583_34044[(1)] = (5));


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
var cljs$core$async$state_machine__30693__auto__ = null;
var cljs$core$async$state_machine__30693__auto____0 = (function (){
var statearr_32584 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32584[(0)] = cljs$core$async$state_machine__30693__auto__);

(statearr_32584[(1)] = (1));

return statearr_32584;
});
var cljs$core$async$state_machine__30693__auto____1 = (function (state_32555){
while(true){
var ret_value__30694__auto__ = (function (){try{while(true){
var result__30695__auto__ = switch__30692__auto__(state_32555);
if(cljs.core.keyword_identical_QMARK_(result__30695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30695__auto__;
}
break;
}
}catch (e32585){var ex__30696__auto__ = e32585;
var statearr_32586_34048 = state_32555;
(statearr_32586_34048[(2)] = ex__30696__auto__);


if(cljs.core.seq((state_32555[(4)]))){
var statearr_32587_34049 = state_32555;
(statearr_32587_34049[(1)] = cljs.core.first((state_32555[(4)])));

} else {
throw ex__30696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34050 = state_32555;
state_32555 = G__34050;
continue;
} else {
return ret_value__30694__auto__;
}
break;
}
});
cljs$core$async$state_machine__30693__auto__ = function(state_32555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30693__auto____1.call(this,state_32555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30693__auto____0;
cljs$core$async$state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30693__auto____1;
return cljs$core$async$state_machine__30693__auto__;
})()
})();
var state__30878__auto__ = (function (){var statearr_32588 = f__30877__auto__();
(statearr_32588[(6)] = c__30876__auto___34025);

return statearr_32588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30878__auto__);
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
var G__32591 = arguments.length;
switch (G__32591) {
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
var c__30876__auto___34053 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30877__auto__ = (function (){var switch__30692__auto__ = (function (state_32624){
var state_val_32625 = (state_32624[(1)]);
if((state_val_32625 === (7))){
var inst_32603 = (state_32624[(7)]);
var inst_32602 = (state_32624[(8)]);
var inst_32602__$1 = (state_32624[(2)]);
var inst_32603__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32602__$1,(0),null);
var inst_32604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32602__$1,(1),null);
var inst_32605 = (inst_32603__$1 == null);
var state_32624__$1 = (function (){var statearr_32631 = state_32624;
(statearr_32631[(9)] = inst_32604);

(statearr_32631[(7)] = inst_32603__$1);

(statearr_32631[(8)] = inst_32602__$1);

return statearr_32631;
})();
if(cljs.core.truth_(inst_32605)){
var statearr_32632_34054 = state_32624__$1;
(statearr_32632_34054[(1)] = (8));

} else {
var statearr_32633_34055 = state_32624__$1;
(statearr_32633_34055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (1))){
var inst_32592 = cljs.core.vec(chs);
var inst_32593 = inst_32592;
var state_32624__$1 = (function (){var statearr_32634 = state_32624;
(statearr_32634[(10)] = inst_32593);

return statearr_32634;
})();
var statearr_32635_34057 = state_32624__$1;
(statearr_32635_34057[(2)] = null);

(statearr_32635_34057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (4))){
var inst_32593 = (state_32624[(10)]);
var state_32624__$1 = state_32624;
return cljs.core.async.ioc_alts_BANG_(state_32624__$1,(7),inst_32593);
} else {
if((state_val_32625 === (6))){
var inst_32620 = (state_32624[(2)]);
var state_32624__$1 = state_32624;
var statearr_32636_34058 = state_32624__$1;
(statearr_32636_34058[(2)] = inst_32620);

(statearr_32636_34058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (3))){
var inst_32622 = (state_32624[(2)]);
var state_32624__$1 = state_32624;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32624__$1,inst_32622);
} else {
if((state_val_32625 === (2))){
var inst_32593 = (state_32624[(10)]);
var inst_32595 = cljs.core.count(inst_32593);
var inst_32596 = (inst_32595 > (0));
var state_32624__$1 = state_32624;
if(cljs.core.truth_(inst_32596)){
var statearr_32639_34060 = state_32624__$1;
(statearr_32639_34060[(1)] = (4));

} else {
var statearr_32640_34061 = state_32624__$1;
(statearr_32640_34061[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (11))){
var inst_32593 = (state_32624[(10)]);
var inst_32613 = (state_32624[(2)]);
var tmp32637 = inst_32593;
var inst_32593__$1 = tmp32637;
var state_32624__$1 = (function (){var statearr_32651 = state_32624;
(statearr_32651[(11)] = inst_32613);

(statearr_32651[(10)] = inst_32593__$1);

return statearr_32651;
})();
var statearr_32652_34062 = state_32624__$1;
(statearr_32652_34062[(2)] = null);

(statearr_32652_34062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (9))){
var inst_32603 = (state_32624[(7)]);
var state_32624__$1 = state_32624;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32624__$1,(11),out,inst_32603);
} else {
if((state_val_32625 === (5))){
var inst_32618 = cljs.core.async.close_BANG_(out);
var state_32624__$1 = state_32624;
var statearr_32653_34063 = state_32624__$1;
(statearr_32653_34063[(2)] = inst_32618);

(statearr_32653_34063[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (10))){
var inst_32616 = (state_32624[(2)]);
var state_32624__$1 = state_32624;
var statearr_32654_34069 = state_32624__$1;
(statearr_32654_34069[(2)] = inst_32616);

(statearr_32654_34069[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (8))){
var inst_32604 = (state_32624[(9)]);
var inst_32603 = (state_32624[(7)]);
var inst_32602 = (state_32624[(8)]);
var inst_32593 = (state_32624[(10)]);
var inst_32608 = (function (){var cs = inst_32593;
var vec__32598 = inst_32602;
var v = inst_32603;
var c = inst_32604;
return (function (p1__32589_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32589_SHARP_);
});
})();
var inst_32609 = cljs.core.filterv(inst_32608,inst_32593);
var inst_32593__$1 = inst_32609;
var state_32624__$1 = (function (){var statearr_32655 = state_32624;
(statearr_32655[(10)] = inst_32593__$1);

return statearr_32655;
})();
var statearr_32656_34079 = state_32624__$1;
(statearr_32656_34079[(2)] = null);

(statearr_32656_34079[(1)] = (2));


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
var cljs$core$async$state_machine__30693__auto__ = null;
var cljs$core$async$state_machine__30693__auto____0 = (function (){
var statearr_32657 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32657[(0)] = cljs$core$async$state_machine__30693__auto__);

(statearr_32657[(1)] = (1));

return statearr_32657;
});
var cljs$core$async$state_machine__30693__auto____1 = (function (state_32624){
while(true){
var ret_value__30694__auto__ = (function (){try{while(true){
var result__30695__auto__ = switch__30692__auto__(state_32624);
if(cljs.core.keyword_identical_QMARK_(result__30695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30695__auto__;
}
break;
}
}catch (e32658){var ex__30696__auto__ = e32658;
var statearr_32659_34081 = state_32624;
(statearr_32659_34081[(2)] = ex__30696__auto__);


if(cljs.core.seq((state_32624[(4)]))){
var statearr_32660_34082 = state_32624;
(statearr_32660_34082[(1)] = cljs.core.first((state_32624[(4)])));

} else {
throw ex__30696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34083 = state_32624;
state_32624 = G__34083;
continue;
} else {
return ret_value__30694__auto__;
}
break;
}
});
cljs$core$async$state_machine__30693__auto__ = function(state_32624){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30693__auto____1.call(this,state_32624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30693__auto____0;
cljs$core$async$state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30693__auto____1;
return cljs$core$async$state_machine__30693__auto__;
})()
})();
var state__30878__auto__ = (function (){var statearr_32666 = f__30877__auto__();
(statearr_32666[(6)] = c__30876__auto___34053);

return statearr_32666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30878__auto__);
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
var G__32668 = arguments.length;
switch (G__32668) {
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
var c__30876__auto___34089 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30877__auto__ = (function (){var switch__30692__auto__ = (function (state_32692){
var state_val_32693 = (state_32692[(1)]);
if((state_val_32693 === (7))){
var inst_32674 = (state_32692[(7)]);
var inst_32674__$1 = (state_32692[(2)]);
var inst_32675 = (inst_32674__$1 == null);
var inst_32676 = cljs.core.not(inst_32675);
var state_32692__$1 = (function (){var statearr_32694 = state_32692;
(statearr_32694[(7)] = inst_32674__$1);

return statearr_32694;
})();
if(inst_32676){
var statearr_32695_34093 = state_32692__$1;
(statearr_32695_34093[(1)] = (8));

} else {
var statearr_32696_34094 = state_32692__$1;
(statearr_32696_34094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (1))){
var inst_32669 = (0);
var state_32692__$1 = (function (){var statearr_32697 = state_32692;
(statearr_32697[(8)] = inst_32669);

return statearr_32697;
})();
var statearr_32698_34095 = state_32692__$1;
(statearr_32698_34095[(2)] = null);

(statearr_32698_34095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (4))){
var state_32692__$1 = state_32692;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32692__$1,(7),ch);
} else {
if((state_val_32693 === (6))){
var inst_32687 = (state_32692[(2)]);
var state_32692__$1 = state_32692;
var statearr_32699_34096 = state_32692__$1;
(statearr_32699_34096[(2)] = inst_32687);

(statearr_32699_34096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (3))){
var inst_32689 = (state_32692[(2)]);
var inst_32690 = cljs.core.async.close_BANG_(out);
var state_32692__$1 = (function (){var statearr_32700 = state_32692;
(statearr_32700[(9)] = inst_32689);

return statearr_32700;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32692__$1,inst_32690);
} else {
if((state_val_32693 === (2))){
var inst_32669 = (state_32692[(8)]);
var inst_32671 = (inst_32669 < n);
var state_32692__$1 = state_32692;
if(cljs.core.truth_(inst_32671)){
var statearr_32701_34097 = state_32692__$1;
(statearr_32701_34097[(1)] = (4));

} else {
var statearr_32702_34098 = state_32692__$1;
(statearr_32702_34098[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (11))){
var inst_32669 = (state_32692[(8)]);
var inst_32679 = (state_32692[(2)]);
var inst_32680 = (inst_32669 + (1));
var inst_32669__$1 = inst_32680;
var state_32692__$1 = (function (){var statearr_32703 = state_32692;
(statearr_32703[(10)] = inst_32679);

(statearr_32703[(8)] = inst_32669__$1);

return statearr_32703;
})();
var statearr_32704_34111 = state_32692__$1;
(statearr_32704_34111[(2)] = null);

(statearr_32704_34111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (9))){
var state_32692__$1 = state_32692;
var statearr_32705_34112 = state_32692__$1;
(statearr_32705_34112[(2)] = null);

(statearr_32705_34112[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (5))){
var state_32692__$1 = state_32692;
var statearr_32706_34113 = state_32692__$1;
(statearr_32706_34113[(2)] = null);

(statearr_32706_34113[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (10))){
var inst_32684 = (state_32692[(2)]);
var state_32692__$1 = state_32692;
var statearr_32707_34118 = state_32692__$1;
(statearr_32707_34118[(2)] = inst_32684);

(statearr_32707_34118[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32693 === (8))){
var inst_32674 = (state_32692[(7)]);
var state_32692__$1 = state_32692;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32692__$1,(11),out,inst_32674);
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
var cljs$core$async$state_machine__30693__auto__ = null;
var cljs$core$async$state_machine__30693__auto____0 = (function (){
var statearr_32708 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32708[(0)] = cljs$core$async$state_machine__30693__auto__);

(statearr_32708[(1)] = (1));

return statearr_32708;
});
var cljs$core$async$state_machine__30693__auto____1 = (function (state_32692){
while(true){
var ret_value__30694__auto__ = (function (){try{while(true){
var result__30695__auto__ = switch__30692__auto__(state_32692);
if(cljs.core.keyword_identical_QMARK_(result__30695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30695__auto__;
}
break;
}
}catch (e32709){var ex__30696__auto__ = e32709;
var statearr_32710_34132 = state_32692;
(statearr_32710_34132[(2)] = ex__30696__auto__);


if(cljs.core.seq((state_32692[(4)]))){
var statearr_32711_34133 = state_32692;
(statearr_32711_34133[(1)] = cljs.core.first((state_32692[(4)])));

} else {
throw ex__30696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34134 = state_32692;
state_32692 = G__34134;
continue;
} else {
return ret_value__30694__auto__;
}
break;
}
});
cljs$core$async$state_machine__30693__auto__ = function(state_32692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30693__auto____1.call(this,state_32692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30693__auto____0;
cljs$core$async$state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30693__auto____1;
return cljs$core$async$state_machine__30693__auto__;
})()
})();
var state__30878__auto__ = (function (){var statearr_32712 = f__30877__auto__();
(statearr_32712[(6)] = c__30876__auto___34089);

return statearr_32712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30878__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32719 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32719 = (function (f,ch,meta32720){
this.f = f;
this.ch = ch;
this.meta32720 = meta32720;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32721,meta32720__$1){
var self__ = this;
var _32721__$1 = this;
return (new cljs.core.async.t_cljs$core$async32719(self__.f,self__.ch,meta32720__$1));
}));

(cljs.core.async.t_cljs$core$async32719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32721){
var self__ = this;
var _32721__$1 = this;
return self__.meta32720;
}));

(cljs.core.async.t_cljs$core$async32719.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32719.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32719.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32719.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32719.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32722 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32722 = (function (f,ch,meta32720,_,fn1,meta32723){
this.f = f;
this.ch = ch;
this.meta32720 = meta32720;
this._ = _;
this.fn1 = fn1;
this.meta32723 = meta32723;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32724,meta32723__$1){
var self__ = this;
var _32724__$1 = this;
return (new cljs.core.async.t_cljs$core$async32722(self__.f,self__.ch,self__.meta32720,self__._,self__.fn1,meta32723__$1));
}));

(cljs.core.async.t_cljs$core$async32722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32724){
var self__ = this;
var _32724__$1 = this;
return self__.meta32723;
}));

(cljs.core.async.t_cljs$core$async32722.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32722.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32722.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32722.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32716_SHARP_){
var G__32748 = (((p1__32716_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32716_SHARP_) : self__.f.call(null,p1__32716_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32748) : f1.call(null,G__32748));
});
}));

(cljs.core.async.t_cljs$core$async32722.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32720","meta32720",-963753929,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32719","cljs.core.async/t_cljs$core$async32719",-1817035771,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32723","meta32723",735031565,null)], null);
}));

(cljs.core.async.t_cljs$core$async32722.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32722.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32722");

(cljs.core.async.t_cljs$core$async32722.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32722");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32722.
 */
cljs.core.async.__GT_t_cljs$core$async32722 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32722(f__$1,ch__$1,meta32720__$1,___$2,fn1__$1,meta32723){
return (new cljs.core.async.t_cljs$core$async32722(f__$1,ch__$1,meta32720__$1,___$2,fn1__$1,meta32723));
});

}

return (new cljs.core.async.t_cljs$core$async32722(self__.f,self__.ch,self__.meta32720,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32750 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32750) : self__.f.call(null,G__32750));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32719.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32719.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32719.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32720","meta32720",-963753929,null)], null);
}));

(cljs.core.async.t_cljs$core$async32719.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32719.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32719");

(cljs.core.async.t_cljs$core$async32719.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32719");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32719.
 */
cljs.core.async.__GT_t_cljs$core$async32719 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32719(f__$1,ch__$1,meta32720){
return (new cljs.core.async.t_cljs$core$async32719(f__$1,ch__$1,meta32720));
});

}

return (new cljs.core.async.t_cljs$core$async32719(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32755 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32755 = (function (f,ch,meta32756){
this.f = f;
this.ch = ch;
this.meta32756 = meta32756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32757,meta32756__$1){
var self__ = this;
var _32757__$1 = this;
return (new cljs.core.async.t_cljs$core$async32755(self__.f,self__.ch,meta32756__$1));
}));

(cljs.core.async.t_cljs$core$async32755.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32757){
var self__ = this;
var _32757__$1 = this;
return self__.meta32756;
}));

(cljs.core.async.t_cljs$core$async32755.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32755.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32755.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32755.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32755.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32755.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32755.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32756","meta32756",-80050246,null)], null);
}));

(cljs.core.async.t_cljs$core$async32755.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32755.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32755");

(cljs.core.async.t_cljs$core$async32755.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32755");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32755.
 */
cljs.core.async.__GT_t_cljs$core$async32755 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32755(f__$1,ch__$1,meta32756){
return (new cljs.core.async.t_cljs$core$async32755(f__$1,ch__$1,meta32756));
});

}

return (new cljs.core.async.t_cljs$core$async32755(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32758 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32758 = (function (p,ch,meta32759){
this.p = p;
this.ch = ch;
this.meta32759 = meta32759;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32760,meta32759__$1){
var self__ = this;
var _32760__$1 = this;
return (new cljs.core.async.t_cljs$core$async32758(self__.p,self__.ch,meta32759__$1));
}));

(cljs.core.async.t_cljs$core$async32758.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32760){
var self__ = this;
var _32760__$1 = this;
return self__.meta32759;
}));

(cljs.core.async.t_cljs$core$async32758.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32758.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32758.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32758.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32758.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32758.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32758.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32758.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32759","meta32759",594614158,null)], null);
}));

(cljs.core.async.t_cljs$core$async32758.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32758.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32758");

(cljs.core.async.t_cljs$core$async32758.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32758");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32758.
 */
cljs.core.async.__GT_t_cljs$core$async32758 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32758(p__$1,ch__$1,meta32759){
return (new cljs.core.async.t_cljs$core$async32758(p__$1,ch__$1,meta32759));
});

}

return (new cljs.core.async.t_cljs$core$async32758(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32774 = arguments.length;
switch (G__32774) {
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
var c__30876__auto___34138 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30877__auto__ = (function (){var switch__30692__auto__ = (function (state_32801){
var state_val_32802 = (state_32801[(1)]);
if((state_val_32802 === (7))){
var inst_32797 = (state_32801[(2)]);
var state_32801__$1 = state_32801;
var statearr_32808_34139 = state_32801__$1;
(statearr_32808_34139[(2)] = inst_32797);

(statearr_32808_34139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (1))){
var state_32801__$1 = state_32801;
var statearr_32809_34140 = state_32801__$1;
(statearr_32809_34140[(2)] = null);

(statearr_32809_34140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (4))){
var inst_32782 = (state_32801[(7)]);
var inst_32782__$1 = (state_32801[(2)]);
var inst_32783 = (inst_32782__$1 == null);
var state_32801__$1 = (function (){var statearr_32810 = state_32801;
(statearr_32810[(7)] = inst_32782__$1);

return statearr_32810;
})();
if(cljs.core.truth_(inst_32783)){
var statearr_32811_34145 = state_32801__$1;
(statearr_32811_34145[(1)] = (5));

} else {
var statearr_32812_34147 = state_32801__$1;
(statearr_32812_34147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (6))){
var inst_32782 = (state_32801[(7)]);
var inst_32788 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32782) : p.call(null,inst_32782));
var state_32801__$1 = state_32801;
if(cljs.core.truth_(inst_32788)){
var statearr_32813_34149 = state_32801__$1;
(statearr_32813_34149[(1)] = (8));

} else {
var statearr_32814_34150 = state_32801__$1;
(statearr_32814_34150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (3))){
var inst_32799 = (state_32801[(2)]);
var state_32801__$1 = state_32801;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32801__$1,inst_32799);
} else {
if((state_val_32802 === (2))){
var state_32801__$1 = state_32801;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32801__$1,(4),ch);
} else {
if((state_val_32802 === (11))){
var inst_32791 = (state_32801[(2)]);
var state_32801__$1 = state_32801;
var statearr_32823_34156 = state_32801__$1;
(statearr_32823_34156[(2)] = inst_32791);

(statearr_32823_34156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (9))){
var state_32801__$1 = state_32801;
var statearr_32824_34165 = state_32801__$1;
(statearr_32824_34165[(2)] = null);

(statearr_32824_34165[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (5))){
var inst_32786 = cljs.core.async.close_BANG_(out);
var state_32801__$1 = state_32801;
var statearr_32825_34168 = state_32801__$1;
(statearr_32825_34168[(2)] = inst_32786);

(statearr_32825_34168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (10))){
var inst_32794 = (state_32801[(2)]);
var state_32801__$1 = (function (){var statearr_32826 = state_32801;
(statearr_32826[(8)] = inst_32794);

return statearr_32826;
})();
var statearr_32827_34176 = state_32801__$1;
(statearr_32827_34176[(2)] = null);

(statearr_32827_34176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32802 === (8))){
var inst_32782 = (state_32801[(7)]);
var state_32801__$1 = state_32801;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32801__$1,(11),out,inst_32782);
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
var cljs$core$async$state_machine__30693__auto__ = null;
var cljs$core$async$state_machine__30693__auto____0 = (function (){
var statearr_32828 = [null,null,null,null,null,null,null,null,null];
(statearr_32828[(0)] = cljs$core$async$state_machine__30693__auto__);

(statearr_32828[(1)] = (1));

return statearr_32828;
});
var cljs$core$async$state_machine__30693__auto____1 = (function (state_32801){
while(true){
var ret_value__30694__auto__ = (function (){try{while(true){
var result__30695__auto__ = switch__30692__auto__(state_32801);
if(cljs.core.keyword_identical_QMARK_(result__30695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30695__auto__;
}
break;
}
}catch (e32829){var ex__30696__auto__ = e32829;
var statearr_32830_34197 = state_32801;
(statearr_32830_34197[(2)] = ex__30696__auto__);


if(cljs.core.seq((state_32801[(4)]))){
var statearr_32832_34201 = state_32801;
(statearr_32832_34201[(1)] = cljs.core.first((state_32801[(4)])));

} else {
throw ex__30696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34207 = state_32801;
state_32801 = G__34207;
continue;
} else {
return ret_value__30694__auto__;
}
break;
}
});
cljs$core$async$state_machine__30693__auto__ = function(state_32801){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30693__auto____1.call(this,state_32801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30693__auto____0;
cljs$core$async$state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30693__auto____1;
return cljs$core$async$state_machine__30693__auto__;
})()
})();
var state__30878__auto__ = (function (){var statearr_32833 = f__30877__auto__();
(statearr_32833[(6)] = c__30876__auto___34138);

return statearr_32833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30878__auto__);
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
var c__30876__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30877__auto__ = (function (){var switch__30692__auto__ = (function (state_32906){
var state_val_32907 = (state_32906[(1)]);
if((state_val_32907 === (7))){
var inst_32902 = (state_32906[(2)]);
var state_32906__$1 = state_32906;
var statearr_32908_34263 = state_32906__$1;
(statearr_32908_34263[(2)] = inst_32902);

(statearr_32908_34263[(1)] = (3));


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
var statearr_32910_34264 = state_32906__$1;
(statearr_32910_34264[(2)] = null);

(statearr_32910_34264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (1))){
var state_32906__$1 = state_32906;
var statearr_32911_34265 = state_32906__$1;
(statearr_32911_34265[(2)] = null);

(statearr_32911_34265[(1)] = (2));


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
var statearr_32913_34266 = state_32906__$1;
(statearr_32913_34266[(1)] = (5));

} else {
var statearr_32914_34267 = state_32906__$1;
(statearr_32914_34267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (15))){
var state_32906__$1 = state_32906;
var statearr_32918_34268 = state_32906__$1;
(statearr_32918_34268[(2)] = null);

(statearr_32918_34268[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (21))){
var state_32906__$1 = state_32906;
var statearr_32919_34269 = state_32906__$1;
(statearr_32919_34269[(2)] = null);

(statearr_32919_34269[(1)] = (23));


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
var statearr_32921_34301 = state_32906__$1;
(statearr_32921_34301[(2)] = null);

(statearr_32921_34301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (22))){
var state_32906__$1 = state_32906;
var statearr_32922_34306 = state_32906__$1;
(statearr_32922_34306[(2)] = null);

(statearr_32922_34306[(1)] = (2));


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
var statearr_32924_34307 = state_32906__$1;
(statearr_32924_34307[(2)] = null);

(statearr_32924_34307[(1)] = (8));


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
var statearr_32926_34315 = state_32906__$1;
(statearr_32926_34315[(2)] = null);

(statearr_32926_34315[(1)] = (8));


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
var statearr_32927_34316 = state_32906__$1;
(statearr_32927_34316[(2)] = inst_32892);

(statearr_32927_34316[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (2))){
var state_32906__$1 = state_32906;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32906__$1,(4),in$);
} else {
if((state_val_32907 === (23))){
var inst_32900 = (state_32906[(2)]);
var state_32906__$1 = state_32906;
var statearr_32928_34317 = state_32906__$1;
(statearr_32928_34317[(2)] = inst_32900);

(statearr_32928_34317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (19))){
var inst_32887 = (state_32906[(2)]);
var state_32906__$1 = state_32906;
var statearr_32929_34318 = state_32906__$1;
(statearr_32929_34318[(2)] = inst_32887);

(statearr_32929_34318[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (11))){
var inst_32872 = (state_32906[(7)]);
var inst_32858 = (state_32906[(12)]);
var inst_32872__$1 = cljs.core.seq(inst_32858);
var state_32906__$1 = (function (){var statearr_32930 = state_32906;
(statearr_32930[(7)] = inst_32872__$1);

return statearr_32930;
})();
if(inst_32872__$1){
var statearr_32931_34319 = state_32906__$1;
(statearr_32931_34319[(1)] = (14));

} else {
var statearr_32932_34320 = state_32906__$1;
(statearr_32932_34320[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (9))){
var inst_32894 = (state_32906[(2)]);
var inst_32895 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32906__$1 = (function (){var statearr_32933 = state_32906;
(statearr_32933[(15)] = inst_32894);

return statearr_32933;
})();
if(cljs.core.truth_(inst_32895)){
var statearr_32934_34322 = state_32906__$1;
(statearr_32934_34322[(1)] = (21));

} else {
var statearr_32935_34323 = state_32906__$1;
(statearr_32935_34323[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (5))){
var inst_32850 = cljs.core.async.close_BANG_(out);
var state_32906__$1 = state_32906;
var statearr_32936_34324 = state_32906__$1;
(statearr_32936_34324[(2)] = inst_32850);

(statearr_32936_34324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (14))){
var inst_32872 = (state_32906[(7)]);
var inst_32874 = cljs.core.chunked_seq_QMARK_(inst_32872);
var state_32906__$1 = state_32906;
if(inst_32874){
var statearr_32937_34325 = state_32906__$1;
(statearr_32937_34325[(1)] = (17));

} else {
var statearr_32938_34327 = state_32906__$1;
(statearr_32938_34327[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (16))){
var inst_32890 = (state_32906[(2)]);
var state_32906__$1 = state_32906;
var statearr_32939_34328 = state_32906__$1;
(statearr_32939_34328[(2)] = inst_32890);

(statearr_32939_34328[(1)] = (12));


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
var statearr_32940_34329 = state_32906__$1;
(statearr_32940_34329[(1)] = (10));

} else {
var statearr_32941_34330 = state_32906__$1;
(statearr_32941_34330[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__30693__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30693__auto____0 = (function (){
var statearr_32945 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32945[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30693__auto__);

(statearr_32945[(1)] = (1));

return statearr_32945;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30693__auto____1 = (function (state_32906){
while(true){
var ret_value__30694__auto__ = (function (){try{while(true){
var result__30695__auto__ = switch__30692__auto__(state_32906);
if(cljs.core.keyword_identical_QMARK_(result__30695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30695__auto__;
}
break;
}
}catch (e32946){var ex__30696__auto__ = e32946;
var statearr_32947_34331 = state_32906;
(statearr_32947_34331[(2)] = ex__30696__auto__);


if(cljs.core.seq((state_32906[(4)]))){
var statearr_32948_34332 = state_32906;
(statearr_32948_34332[(1)] = cljs.core.first((state_32906[(4)])));

} else {
throw ex__30696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34347 = state_32906;
state_32906 = G__34347;
continue;
} else {
return ret_value__30694__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30693__auto__ = function(state_32906){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30693__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30693__auto____1.call(this,state_32906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30693__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30693__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30693__auto__;
})()
})();
var state__30878__auto__ = (function (){var statearr_32949 = f__30877__auto__();
(statearr_32949[(6)] = c__30876__auto__);

return statearr_32949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30878__auto__);
}));

return c__30876__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32952 = arguments.length;
switch (G__32952) {
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
var G__32954 = arguments.length;
switch (G__32954) {
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
var G__32957 = arguments.length;
switch (G__32957) {
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
var c__30876__auto___34352 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30877__auto__ = (function (){var switch__30692__auto__ = (function (state_32985){
var state_val_32986 = (state_32985[(1)]);
if((state_val_32986 === (7))){
var inst_32979 = (state_32985[(2)]);
var state_32985__$1 = state_32985;
var statearr_32987_34353 = state_32985__$1;
(statearr_32987_34353[(2)] = inst_32979);

(statearr_32987_34353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32986 === (1))){
var inst_32960 = null;
var state_32985__$1 = (function (){var statearr_32988 = state_32985;
(statearr_32988[(7)] = inst_32960);

return statearr_32988;
})();
var statearr_32989_34354 = state_32985__$1;
(statearr_32989_34354[(2)] = null);

(statearr_32989_34354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32986 === (4))){
var inst_32963 = (state_32985[(8)]);
var inst_32963__$1 = (state_32985[(2)]);
var inst_32965 = (inst_32963__$1 == null);
var inst_32966 = cljs.core.not(inst_32965);
var state_32985__$1 = (function (){var statearr_32990 = state_32985;
(statearr_32990[(8)] = inst_32963__$1);

return statearr_32990;
})();
if(inst_32966){
var statearr_32992_34355 = state_32985__$1;
(statearr_32992_34355[(1)] = (5));

} else {
var statearr_32993_34356 = state_32985__$1;
(statearr_32993_34356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32986 === (6))){
var state_32985__$1 = state_32985;
var statearr_32994_34357 = state_32985__$1;
(statearr_32994_34357[(2)] = null);

(statearr_32994_34357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32986 === (3))){
var inst_32981 = (state_32985[(2)]);
var inst_32982 = cljs.core.async.close_BANG_(out);
var state_32985__$1 = (function (){var statearr_32996 = state_32985;
(statearr_32996[(9)] = inst_32981);

return statearr_32996;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32985__$1,inst_32982);
} else {
if((state_val_32986 === (2))){
var state_32985__$1 = state_32985;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32985__$1,(4),ch);
} else {
if((state_val_32986 === (11))){
var inst_32963 = (state_32985[(8)]);
var inst_32973 = (state_32985[(2)]);
var inst_32960 = inst_32963;
var state_32985__$1 = (function (){var statearr_32998 = state_32985;
(statearr_32998[(10)] = inst_32973);

(statearr_32998[(7)] = inst_32960);

return statearr_32998;
})();
var statearr_32999_34358 = state_32985__$1;
(statearr_32999_34358[(2)] = null);

(statearr_32999_34358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32986 === (9))){
var inst_32963 = (state_32985[(8)]);
var state_32985__$1 = state_32985;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32985__$1,(11),out,inst_32963);
} else {
if((state_val_32986 === (5))){
var inst_32963 = (state_32985[(8)]);
var inst_32960 = (state_32985[(7)]);
var inst_32968 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32963,inst_32960);
var state_32985__$1 = state_32985;
if(inst_32968){
var statearr_33001_34359 = state_32985__$1;
(statearr_33001_34359[(1)] = (8));

} else {
var statearr_33002_34360 = state_32985__$1;
(statearr_33002_34360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32986 === (10))){
var inst_32976 = (state_32985[(2)]);
var state_32985__$1 = state_32985;
var statearr_33003_34361 = state_32985__$1;
(statearr_33003_34361[(2)] = inst_32976);

(statearr_33003_34361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32986 === (8))){
var inst_32960 = (state_32985[(7)]);
var tmp33000 = inst_32960;
var inst_32960__$1 = tmp33000;
var state_32985__$1 = (function (){var statearr_33008 = state_32985;
(statearr_33008[(7)] = inst_32960__$1);

return statearr_33008;
})();
var statearr_33010_34362 = state_32985__$1;
(statearr_33010_34362[(2)] = null);

(statearr_33010_34362[(1)] = (2));


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
var cljs$core$async$state_machine__30693__auto__ = null;
var cljs$core$async$state_machine__30693__auto____0 = (function (){
var statearr_33012 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33012[(0)] = cljs$core$async$state_machine__30693__auto__);

(statearr_33012[(1)] = (1));

return statearr_33012;
});
var cljs$core$async$state_machine__30693__auto____1 = (function (state_32985){
while(true){
var ret_value__30694__auto__ = (function (){try{while(true){
var result__30695__auto__ = switch__30692__auto__(state_32985);
if(cljs.core.keyword_identical_QMARK_(result__30695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30695__auto__;
}
break;
}
}catch (e33013){var ex__30696__auto__ = e33013;
var statearr_33014_34364 = state_32985;
(statearr_33014_34364[(2)] = ex__30696__auto__);


if(cljs.core.seq((state_32985[(4)]))){
var statearr_33015_34365 = state_32985;
(statearr_33015_34365[(1)] = cljs.core.first((state_32985[(4)])));

} else {
throw ex__30696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34366 = state_32985;
state_32985 = G__34366;
continue;
} else {
return ret_value__30694__auto__;
}
break;
}
});
cljs$core$async$state_machine__30693__auto__ = function(state_32985){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30693__auto____1.call(this,state_32985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30693__auto____0;
cljs$core$async$state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30693__auto____1;
return cljs$core$async$state_machine__30693__auto__;
})()
})();
var state__30878__auto__ = (function (){var statearr_33019 = f__30877__auto__();
(statearr_33019[(6)] = c__30876__auto___34352);

return statearr_33019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30878__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33021 = arguments.length;
switch (G__33021) {
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
var c__30876__auto___34368 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30877__auto__ = (function (){var switch__30692__auto__ = (function (state_33077){
var state_val_33078 = (state_33077[(1)]);
if((state_val_33078 === (7))){
var inst_33073 = (state_33077[(2)]);
var state_33077__$1 = state_33077;
var statearr_33079_34369 = state_33077__$1;
(statearr_33079_34369[(2)] = inst_33073);

(statearr_33079_34369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (1))){
var inst_33040 = (new Array(n));
var inst_33041 = inst_33040;
var inst_33042 = (0);
var state_33077__$1 = (function (){var statearr_33080 = state_33077;
(statearr_33080[(7)] = inst_33042);

(statearr_33080[(8)] = inst_33041);

return statearr_33080;
})();
var statearr_33081_34370 = state_33077__$1;
(statearr_33081_34370[(2)] = null);

(statearr_33081_34370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (4))){
var inst_33045 = (state_33077[(9)]);
var inst_33045__$1 = (state_33077[(2)]);
var inst_33046 = (inst_33045__$1 == null);
var inst_33047 = cljs.core.not(inst_33046);
var state_33077__$1 = (function (){var statearr_33082 = state_33077;
(statearr_33082[(9)] = inst_33045__$1);

return statearr_33082;
})();
if(inst_33047){
var statearr_33083_34371 = state_33077__$1;
(statearr_33083_34371[(1)] = (5));

} else {
var statearr_33084_34372 = state_33077__$1;
(statearr_33084_34372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (15))){
var inst_33067 = (state_33077[(2)]);
var state_33077__$1 = state_33077;
var statearr_33085_34373 = state_33077__$1;
(statearr_33085_34373[(2)] = inst_33067);

(statearr_33085_34373[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (13))){
var state_33077__$1 = state_33077;
var statearr_33086_34374 = state_33077__$1;
(statearr_33086_34374[(2)] = null);

(statearr_33086_34374[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (6))){
var inst_33042 = (state_33077[(7)]);
var inst_33063 = (inst_33042 > (0));
var state_33077__$1 = state_33077;
if(cljs.core.truth_(inst_33063)){
var statearr_33087_34375 = state_33077__$1;
(statearr_33087_34375[(1)] = (12));

} else {
var statearr_33088_34376 = state_33077__$1;
(statearr_33088_34376[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (3))){
var inst_33075 = (state_33077[(2)]);
var state_33077__$1 = state_33077;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33077__$1,inst_33075);
} else {
if((state_val_33078 === (12))){
var inst_33041 = (state_33077[(8)]);
var inst_33065 = cljs.core.vec(inst_33041);
var state_33077__$1 = state_33077;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33077__$1,(15),out,inst_33065);
} else {
if((state_val_33078 === (2))){
var state_33077__$1 = state_33077;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33077__$1,(4),ch);
} else {
if((state_val_33078 === (11))){
var inst_33057 = (state_33077[(2)]);
var inst_33058 = (new Array(n));
var inst_33041 = inst_33058;
var inst_33042 = (0);
var state_33077__$1 = (function (){var statearr_33119 = state_33077;
(statearr_33119[(7)] = inst_33042);

(statearr_33119[(8)] = inst_33041);

(statearr_33119[(10)] = inst_33057);

return statearr_33119;
})();
var statearr_33121_34377 = state_33077__$1;
(statearr_33121_34377[(2)] = null);

(statearr_33121_34377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (9))){
var inst_33041 = (state_33077[(8)]);
var inst_33055 = cljs.core.vec(inst_33041);
var state_33077__$1 = state_33077;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33077__$1,(11),out,inst_33055);
} else {
if((state_val_33078 === (5))){
var inst_33042 = (state_33077[(7)]);
var inst_33050 = (state_33077[(11)]);
var inst_33041 = (state_33077[(8)]);
var inst_33045 = (state_33077[(9)]);
var inst_33049 = (inst_33041[inst_33042] = inst_33045);
var inst_33050__$1 = (inst_33042 + (1));
var inst_33051 = (inst_33050__$1 < n);
var state_33077__$1 = (function (){var statearr_33124 = state_33077;
(statearr_33124[(11)] = inst_33050__$1);

(statearr_33124[(12)] = inst_33049);

return statearr_33124;
})();
if(cljs.core.truth_(inst_33051)){
var statearr_33125_34378 = state_33077__$1;
(statearr_33125_34378[(1)] = (8));

} else {
var statearr_33126_34379 = state_33077__$1;
(statearr_33126_34379[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (14))){
var inst_33070 = (state_33077[(2)]);
var inst_33071 = cljs.core.async.close_BANG_(out);
var state_33077__$1 = (function (){var statearr_33128 = state_33077;
(statearr_33128[(13)] = inst_33070);

return statearr_33128;
})();
var statearr_33129_34380 = state_33077__$1;
(statearr_33129_34380[(2)] = inst_33071);

(statearr_33129_34380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (10))){
var inst_33061 = (state_33077[(2)]);
var state_33077__$1 = state_33077;
var statearr_33130_34381 = state_33077__$1;
(statearr_33130_34381[(2)] = inst_33061);

(statearr_33130_34381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (8))){
var inst_33050 = (state_33077[(11)]);
var inst_33041 = (state_33077[(8)]);
var tmp33127 = inst_33041;
var inst_33041__$1 = tmp33127;
var inst_33042 = inst_33050;
var state_33077__$1 = (function (){var statearr_33131 = state_33077;
(statearr_33131[(7)] = inst_33042);

(statearr_33131[(8)] = inst_33041__$1);

return statearr_33131;
})();
var statearr_33132_34382 = state_33077__$1;
(statearr_33132_34382[(2)] = null);

(statearr_33132_34382[(1)] = (2));


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
var cljs$core$async$state_machine__30693__auto__ = null;
var cljs$core$async$state_machine__30693__auto____0 = (function (){
var statearr_33133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33133[(0)] = cljs$core$async$state_machine__30693__auto__);

(statearr_33133[(1)] = (1));

return statearr_33133;
});
var cljs$core$async$state_machine__30693__auto____1 = (function (state_33077){
while(true){
var ret_value__30694__auto__ = (function (){try{while(true){
var result__30695__auto__ = switch__30692__auto__(state_33077);
if(cljs.core.keyword_identical_QMARK_(result__30695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30695__auto__;
}
break;
}
}catch (e33134){var ex__30696__auto__ = e33134;
var statearr_33135_34385 = state_33077;
(statearr_33135_34385[(2)] = ex__30696__auto__);


if(cljs.core.seq((state_33077[(4)]))){
var statearr_33136_34386 = state_33077;
(statearr_33136_34386[(1)] = cljs.core.first((state_33077[(4)])));

} else {
throw ex__30696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34387 = state_33077;
state_33077 = G__34387;
continue;
} else {
return ret_value__30694__auto__;
}
break;
}
});
cljs$core$async$state_machine__30693__auto__ = function(state_33077){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30693__auto____1.call(this,state_33077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30693__auto____0;
cljs$core$async$state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30693__auto____1;
return cljs$core$async$state_machine__30693__auto__;
})()
})();
var state__30878__auto__ = (function (){var statearr_33139 = f__30877__auto__();
(statearr_33139[(6)] = c__30876__auto___34368);

return statearr_33139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30878__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33146 = arguments.length;
switch (G__33146) {
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
var c__30876__auto___34389 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30877__auto__ = (function (){var switch__30692__auto__ = (function (state_33192){
var state_val_33193 = (state_33192[(1)]);
if((state_val_33193 === (7))){
var inst_33188 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33195_34390 = state_33192__$1;
(statearr_33195_34390[(2)] = inst_33188);

(statearr_33195_34390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (1))){
var inst_33151 = [];
var inst_33152 = inst_33151;
var inst_33153 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33192__$1 = (function (){var statearr_33198 = state_33192;
(statearr_33198[(7)] = inst_33153);

(statearr_33198[(8)] = inst_33152);

return statearr_33198;
})();
var statearr_33200_34391 = state_33192__$1;
(statearr_33200_34391[(2)] = null);

(statearr_33200_34391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (4))){
var inst_33156 = (state_33192[(9)]);
var inst_33156__$1 = (state_33192[(2)]);
var inst_33157 = (inst_33156__$1 == null);
var inst_33158 = cljs.core.not(inst_33157);
var state_33192__$1 = (function (){var statearr_33204 = state_33192;
(statearr_33204[(9)] = inst_33156__$1);

return statearr_33204;
})();
if(inst_33158){
var statearr_33206_34392 = state_33192__$1;
(statearr_33206_34392[(1)] = (5));

} else {
var statearr_33207_34393 = state_33192__$1;
(statearr_33207_34393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (15))){
var inst_33182 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33208_34394 = state_33192__$1;
(statearr_33208_34394[(2)] = inst_33182);

(statearr_33208_34394[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (13))){
var state_33192__$1 = state_33192;
var statearr_33210_34395 = state_33192__$1;
(statearr_33210_34395[(2)] = null);

(statearr_33210_34395[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (6))){
var inst_33152 = (state_33192[(8)]);
var inst_33177 = inst_33152.length;
var inst_33178 = (inst_33177 > (0));
var state_33192__$1 = state_33192;
if(cljs.core.truth_(inst_33178)){
var statearr_33211_34416 = state_33192__$1;
(statearr_33211_34416[(1)] = (12));

} else {
var statearr_33212_34417 = state_33192__$1;
(statearr_33212_34417[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (3))){
var inst_33190 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33192__$1,inst_33190);
} else {
if((state_val_33193 === (12))){
var inst_33152 = (state_33192[(8)]);
var inst_33180 = cljs.core.vec(inst_33152);
var state_33192__$1 = state_33192;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33192__$1,(15),out,inst_33180);
} else {
if((state_val_33193 === (2))){
var state_33192__$1 = state_33192;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33192__$1,(4),ch);
} else {
if((state_val_33193 === (11))){
var inst_33160 = (state_33192[(10)]);
var inst_33156 = (state_33192[(9)]);
var inst_33170 = (state_33192[(2)]);
var inst_33171 = [];
var inst_33172 = inst_33171.push(inst_33156);
var inst_33152 = inst_33171;
var inst_33153 = inst_33160;
var state_33192__$1 = (function (){var statearr_33219 = state_33192;
(statearr_33219[(11)] = inst_33172);

(statearr_33219[(7)] = inst_33153);

(statearr_33219[(12)] = inst_33170);

(statearr_33219[(8)] = inst_33152);

return statearr_33219;
})();
var statearr_33220_34429 = state_33192__$1;
(statearr_33220_34429[(2)] = null);

(statearr_33220_34429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (9))){
var inst_33152 = (state_33192[(8)]);
var inst_33168 = cljs.core.vec(inst_33152);
var state_33192__$1 = state_33192;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33192__$1,(11),out,inst_33168);
} else {
if((state_val_33193 === (5))){
var inst_33153 = (state_33192[(7)]);
var inst_33160 = (state_33192[(10)]);
var inst_33156 = (state_33192[(9)]);
var inst_33160__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33156) : f.call(null,inst_33156));
var inst_33161 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33160__$1,inst_33153);
var inst_33162 = cljs.core.keyword_identical_QMARK_(inst_33153,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33163 = ((inst_33161) || (inst_33162));
var state_33192__$1 = (function (){var statearr_33221 = state_33192;
(statearr_33221[(10)] = inst_33160__$1);

return statearr_33221;
})();
if(cljs.core.truth_(inst_33163)){
var statearr_33222_34444 = state_33192__$1;
(statearr_33222_34444[(1)] = (8));

} else {
var statearr_33224_34445 = state_33192__$1;
(statearr_33224_34445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (14))){
var inst_33185 = (state_33192[(2)]);
var inst_33186 = cljs.core.async.close_BANG_(out);
var state_33192__$1 = (function (){var statearr_33226 = state_33192;
(statearr_33226[(13)] = inst_33185);

return statearr_33226;
})();
var statearr_33227_34446 = state_33192__$1;
(statearr_33227_34446[(2)] = inst_33186);

(statearr_33227_34446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (10))){
var inst_33175 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33228_34451 = state_33192__$1;
(statearr_33228_34451[(2)] = inst_33175);

(statearr_33228_34451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33193 === (8))){
var inst_33160 = (state_33192[(10)]);
var inst_33156 = (state_33192[(9)]);
var inst_33152 = (state_33192[(8)]);
var inst_33165 = inst_33152.push(inst_33156);
var tmp33225 = inst_33152;
var inst_33152__$1 = tmp33225;
var inst_33153 = inst_33160;
var state_33192__$1 = (function (){var statearr_33230 = state_33192;
(statearr_33230[(14)] = inst_33165);

(statearr_33230[(7)] = inst_33153);

(statearr_33230[(8)] = inst_33152__$1);

return statearr_33230;
})();
var statearr_33231_34481 = state_33192__$1;
(statearr_33231_34481[(2)] = null);

(statearr_33231_34481[(1)] = (2));


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
var cljs$core$async$state_machine__30693__auto__ = null;
var cljs$core$async$state_machine__30693__auto____0 = (function (){
var statearr_33232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33232[(0)] = cljs$core$async$state_machine__30693__auto__);

(statearr_33232[(1)] = (1));

return statearr_33232;
});
var cljs$core$async$state_machine__30693__auto____1 = (function (state_33192){
while(true){
var ret_value__30694__auto__ = (function (){try{while(true){
var result__30695__auto__ = switch__30692__auto__(state_33192);
if(cljs.core.keyword_identical_QMARK_(result__30695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30695__auto__;
}
break;
}
}catch (e33233){var ex__30696__auto__ = e33233;
var statearr_33234_34492 = state_33192;
(statearr_33234_34492[(2)] = ex__30696__auto__);


if(cljs.core.seq((state_33192[(4)]))){
var statearr_33235_34498 = state_33192;
(statearr_33235_34498[(1)] = cljs.core.first((state_33192[(4)])));

} else {
throw ex__30696__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34503 = state_33192;
state_33192 = G__34503;
continue;
} else {
return ret_value__30694__auto__;
}
break;
}
});
cljs$core$async$state_machine__30693__auto__ = function(state_33192){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30693__auto____1.call(this,state_33192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30693__auto____0;
cljs$core$async$state_machine__30693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30693__auto____1;
return cljs$core$async$state_machine__30693__auto__;
})()
})();
var state__30878__auto__ = (function (){var statearr_33236 = f__30877__auto__();
(statearr_33236[(6)] = c__30876__auto___34389);

return statearr_33236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30878__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
