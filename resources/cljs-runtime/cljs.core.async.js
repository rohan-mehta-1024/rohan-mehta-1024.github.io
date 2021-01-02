goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31051 = arguments.length;
switch (G__31051) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31052 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31052 = (function (f,blockable,meta31053){
this.f = f;
this.blockable = blockable;
this.meta31053 = meta31053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31054,meta31053__$1){
var self__ = this;
var _31054__$1 = this;
return (new cljs.core.async.t_cljs$core$async31052(self__.f,self__.blockable,meta31053__$1));
}));

(cljs.core.async.t_cljs$core$async31052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31054){
var self__ = this;
var _31054__$1 = this;
return self__.meta31053;
}));

(cljs.core.async.t_cljs$core$async31052.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31052.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31052.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31052.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31052.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31053","meta31053",524817150,null)], null);
}));

(cljs.core.async.t_cljs$core$async31052.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31052.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31052");

(cljs.core.async.t_cljs$core$async31052.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31052");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31052.
 */
cljs.core.async.__GT_t_cljs$core$async31052 = (function cljs$core$async$__GT_t_cljs$core$async31052(f__$1,blockable__$1,meta31053){
return (new cljs.core.async.t_cljs$core$async31052(f__$1,blockable__$1,meta31053));
});

}

return (new cljs.core.async.t_cljs$core$async31052(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31097 = arguments.length;
switch (G__31097) {
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
var G__31107 = arguments.length;
switch (G__31107) {
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
var G__31110 = arguments.length;
switch (G__31110) {
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
var val_33297 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33297) : fn1.call(null,val_33297));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33297) : fn1.call(null,val_33297));
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
var n__4613__auto___33328 = n;
var x_33329 = (0);
while(true){
if((x_33329 < n__4613__auto___33328)){
(a[x_33329] = x_33329);

var G__33330 = (x_33329 + (1));
x_33329 = G__33330;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31124 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31124 = (function (flag,meta31125){
this.flag = flag;
this.meta31125 = meta31125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31126,meta31125__$1){
var self__ = this;
var _31126__$1 = this;
return (new cljs.core.async.t_cljs$core$async31124(self__.flag,meta31125__$1));
}));

(cljs.core.async.t_cljs$core$async31124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31126){
var self__ = this;
var _31126__$1 = this;
return self__.meta31125;
}));

(cljs.core.async.t_cljs$core$async31124.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31124.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31124.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31124.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31125","meta31125",218107826,null)], null);
}));

(cljs.core.async.t_cljs$core$async31124.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31124");

(cljs.core.async.t_cljs$core$async31124.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31124");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31124.
 */
cljs.core.async.__GT_t_cljs$core$async31124 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31124(flag__$1,meta31125){
return (new cljs.core.async.t_cljs$core$async31124(flag__$1,meta31125));
});

}

return (new cljs.core.async.t_cljs$core$async31124(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31136 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31136 = (function (flag,cb,meta31137){
this.flag = flag;
this.cb = cb;
this.meta31137 = meta31137;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31138,meta31137__$1){
var self__ = this;
var _31138__$1 = this;
return (new cljs.core.async.t_cljs$core$async31136(self__.flag,self__.cb,meta31137__$1));
}));

(cljs.core.async.t_cljs$core$async31136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31138){
var self__ = this;
var _31138__$1 = this;
return self__.meta31137;
}));

(cljs.core.async.t_cljs$core$async31136.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31136.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31136.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31136.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31136.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31137","meta31137",-709119664,null)], null);
}));

(cljs.core.async.t_cljs$core$async31136.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31136.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31136");

(cljs.core.async.t_cljs$core$async31136.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31136");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31136.
 */
cljs.core.async.__GT_t_cljs$core$async31136 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31136(flag__$1,cb__$1,meta31137){
return (new cljs.core.async.t_cljs$core$async31136(flag__$1,cb__$1,meta31137));
});

}

return (new cljs.core.async.t_cljs$core$async31136(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31144_SHARP_){
var G__31146 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31144_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31146) : fret.call(null,G__31146));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31145_SHARP_){
var G__31147 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31145_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31147) : fret.call(null,G__31147));
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
var G__33378 = (i + (1));
i = G__33378;
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
var len__4736__auto___33379 = arguments.length;
var i__4737__auto___33380 = (0);
while(true){
if((i__4737__auto___33380 < len__4736__auto___33379)){
args__4742__auto__.push((arguments[i__4737__auto___33380]));

var G__33381 = (i__4737__auto___33380 + (1));
i__4737__auto___33380 = G__33381;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31150){
var map__31151 = p__31150;
var map__31151__$1 = (((((!((map__31151 == null))))?(((((map__31151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31151):map__31151);
var opts = map__31151__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31148){
var G__31149 = cljs.core.first(seq31148);
var seq31148__$1 = cljs.core.next(seq31148);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31149,seq31148__$1);
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
var G__31168 = arguments.length;
switch (G__31168) {
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
var c__30947__auto___33398 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30948__auto__ = (function (){var switch__30766__auto__ = (function (state_31197){
var state_val_31198 = (state_31197[(1)]);
if((state_val_31198 === (7))){
var inst_31192 = (state_31197[(2)]);
var state_31197__$1 = state_31197;
var statearr_31199_33399 = state_31197__$1;
(statearr_31199_33399[(2)] = inst_31192);

(statearr_31199_33399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (1))){
var state_31197__$1 = state_31197;
var statearr_31200_33400 = state_31197__$1;
(statearr_31200_33400[(2)] = null);

(statearr_31200_33400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (4))){
var inst_31175 = (state_31197[(7)]);
var inst_31175__$1 = (state_31197[(2)]);
var inst_31176 = (inst_31175__$1 == null);
var state_31197__$1 = (function (){var statearr_31201 = state_31197;
(statearr_31201[(7)] = inst_31175__$1);

return statearr_31201;
})();
if(cljs.core.truth_(inst_31176)){
var statearr_31202_33401 = state_31197__$1;
(statearr_31202_33401[(1)] = (5));

} else {
var statearr_31203_33402 = state_31197__$1;
(statearr_31203_33402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (13))){
var state_31197__$1 = state_31197;
var statearr_31204_33403 = state_31197__$1;
(statearr_31204_33403[(2)] = null);

(statearr_31204_33403[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (6))){
var inst_31175 = (state_31197[(7)]);
var state_31197__$1 = state_31197;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31197__$1,(11),to,inst_31175);
} else {
if((state_val_31198 === (3))){
var inst_31194 = (state_31197[(2)]);
var state_31197__$1 = state_31197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31197__$1,inst_31194);
} else {
if((state_val_31198 === (12))){
var state_31197__$1 = state_31197;
var statearr_31205_33411 = state_31197__$1;
(statearr_31205_33411[(2)] = null);

(statearr_31205_33411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (2))){
var state_31197__$1 = state_31197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31197__$1,(4),from);
} else {
if((state_val_31198 === (11))){
var inst_31185 = (state_31197[(2)]);
var state_31197__$1 = state_31197;
if(cljs.core.truth_(inst_31185)){
var statearr_31215_33412 = state_31197__$1;
(statearr_31215_33412[(1)] = (12));

} else {
var statearr_31216_33413 = state_31197__$1;
(statearr_31216_33413[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (9))){
var state_31197__$1 = state_31197;
var statearr_31217_33414 = state_31197__$1;
(statearr_31217_33414[(2)] = null);

(statearr_31217_33414[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (5))){
var state_31197__$1 = state_31197;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31218_33415 = state_31197__$1;
(statearr_31218_33415[(1)] = (8));

} else {
var statearr_31219_33416 = state_31197__$1;
(statearr_31219_33416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (14))){
var inst_31190 = (state_31197[(2)]);
var state_31197__$1 = state_31197;
var statearr_31221_33418 = state_31197__$1;
(statearr_31221_33418[(2)] = inst_31190);

(statearr_31221_33418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (10))){
var inst_31182 = (state_31197[(2)]);
var state_31197__$1 = state_31197;
var statearr_31222_33419 = state_31197__$1;
(statearr_31222_33419[(2)] = inst_31182);

(statearr_31222_33419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31198 === (8))){
var inst_31179 = cljs.core.async.close_BANG_(to);
var state_31197__$1 = state_31197;
var statearr_31223_33420 = state_31197__$1;
(statearr_31223_33420[(2)] = inst_31179);

(statearr_31223_33420[(1)] = (10));


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
var cljs$core$async$state_machine__30767__auto__ = null;
var cljs$core$async$state_machine__30767__auto____0 = (function (){
var statearr_31228 = [null,null,null,null,null,null,null,null];
(statearr_31228[(0)] = cljs$core$async$state_machine__30767__auto__);

(statearr_31228[(1)] = (1));

return statearr_31228;
});
var cljs$core$async$state_machine__30767__auto____1 = (function (state_31197){
while(true){
var ret_value__30768__auto__ = (function (){try{while(true){
var result__30769__auto__ = switch__30766__auto__(state_31197);
if(cljs.core.keyword_identical_QMARK_(result__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30769__auto__;
}
break;
}
}catch (e31229){var ex__30770__auto__ = e31229;
var statearr_31230_33424 = state_31197;
(statearr_31230_33424[(2)] = ex__30770__auto__);


if(cljs.core.seq((state_31197[(4)]))){
var statearr_31231_33425 = state_31197;
(statearr_31231_33425[(1)] = cljs.core.first((state_31197[(4)])));

} else {
throw ex__30770__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33426 = state_31197;
state_31197 = G__33426;
continue;
} else {
return ret_value__30768__auto__;
}
break;
}
});
cljs$core$async$state_machine__30767__auto__ = function(state_31197){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30767__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30767__auto____1.call(this,state_31197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30767__auto____0;
cljs$core$async$state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30767__auto____1;
return cljs$core$async$state_machine__30767__auto__;
})()
})();
var state__30949__auto__ = (function (){var statearr_31234 = f__30948__auto__();
(statearr_31234[(6)] = c__30947__auto___33398);

return statearr_31234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30949__auto__);
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
var process = (function (p__31235){
var vec__31236 = p__31235;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31236,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31236,(1),null);
var job = vec__31236;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30947__auto___33434 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30948__auto__ = (function (){var switch__30766__auto__ = (function (state_31243){
var state_val_31244 = (state_31243[(1)]);
if((state_val_31244 === (1))){
var state_31243__$1 = state_31243;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31243__$1,(2),res,v);
} else {
if((state_val_31244 === (2))){
var inst_31240 = (state_31243[(2)]);
var inst_31241 = cljs.core.async.close_BANG_(res);
var state_31243__$1 = (function (){var statearr_31245 = state_31243;
(statearr_31245[(7)] = inst_31240);

return statearr_31245;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31243__$1,inst_31241);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30767__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30767__auto____0 = (function (){
var statearr_31246 = [null,null,null,null,null,null,null,null];
(statearr_31246[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30767__auto__);

(statearr_31246[(1)] = (1));

return statearr_31246;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30767__auto____1 = (function (state_31243){
while(true){
var ret_value__30768__auto__ = (function (){try{while(true){
var result__30769__auto__ = switch__30766__auto__(state_31243);
if(cljs.core.keyword_identical_QMARK_(result__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30769__auto__;
}
break;
}
}catch (e31247){var ex__30770__auto__ = e31247;
var statearr_31248_33435 = state_31243;
(statearr_31248_33435[(2)] = ex__30770__auto__);


if(cljs.core.seq((state_31243[(4)]))){
var statearr_31249_33436 = state_31243;
(statearr_31249_33436[(1)] = cljs.core.first((state_31243[(4)])));

} else {
throw ex__30770__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33437 = state_31243;
state_31243 = G__33437;
continue;
} else {
return ret_value__30768__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30767__auto__ = function(state_31243){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30767__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30767__auto____1.call(this,state_31243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30767__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30767__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30767__auto__;
})()
})();
var state__30949__auto__ = (function (){var statearr_31250 = f__30948__auto__();
(statearr_31250[(6)] = c__30947__auto___33434);

return statearr_31250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30949__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31251){
var vec__31252 = p__31251;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31252,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31252,(1),null);
var job = vec__31252;
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
var n__4613__auto___33440 = n;
var __33441 = (0);
while(true){
if((__33441 < n__4613__auto___33440)){
var G__31258_33442 = type;
var G__31258_33443__$1 = (((G__31258_33442 instanceof cljs.core.Keyword))?G__31258_33442.fqn:null);
switch (G__31258_33443__$1) {
case "compute":
var c__30947__auto___33445 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33441,c__30947__auto___33445,G__31258_33442,G__31258_33443__$1,n__4613__auto___33440,jobs,results,process,async){
return (function (){
var f__30948__auto__ = (function (){var switch__30766__auto__ = ((function (__33441,c__30947__auto___33445,G__31258_33442,G__31258_33443__$1,n__4613__auto___33440,jobs,results,process,async){
return (function (state_31273){
var state_val_31274 = (state_31273[(1)]);
if((state_val_31274 === (1))){
var state_31273__$1 = state_31273;
var statearr_31275_33446 = state_31273__$1;
(statearr_31275_33446[(2)] = null);

(statearr_31275_33446[(1)] = (2));


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
var inst_31262 = (state_31273[(2)]);
var inst_31263 = process(inst_31262);
var state_31273__$1 = state_31273;
if(cljs.core.truth_(inst_31263)){
var statearr_31276_33448 = state_31273__$1;
(statearr_31276_33448[(1)] = (5));

} else {
var statearr_31277_33449 = state_31273__$1;
(statearr_31277_33449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31274 === (5))){
var state_31273__$1 = state_31273;
var statearr_31278_33450 = state_31273__$1;
(statearr_31278_33450[(2)] = null);

(statearr_31278_33450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31274 === (6))){
var state_31273__$1 = state_31273;
var statearr_31279_33453 = state_31273__$1;
(statearr_31279_33453[(2)] = null);

(statearr_31279_33453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31274 === (7))){
var inst_31269 = (state_31273[(2)]);
var state_31273__$1 = state_31273;
var statearr_31283_33454 = state_31273__$1;
(statearr_31283_33454[(2)] = inst_31269);

(statearr_31283_33454[(1)] = (3));


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
});})(__33441,c__30947__auto___33445,G__31258_33442,G__31258_33443__$1,n__4613__auto___33440,jobs,results,process,async))
;
return ((function (__33441,switch__30766__auto__,c__30947__auto___33445,G__31258_33442,G__31258_33443__$1,n__4613__auto___33440,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30767__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30767__auto____0 = (function (){
var statearr_31284 = [null,null,null,null,null,null,null];
(statearr_31284[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30767__auto__);

(statearr_31284[(1)] = (1));

return statearr_31284;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30767__auto____1 = (function (state_31273){
while(true){
var ret_value__30768__auto__ = (function (){try{while(true){
var result__30769__auto__ = switch__30766__auto__(state_31273);
if(cljs.core.keyword_identical_QMARK_(result__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30769__auto__;
}
break;
}
}catch (e31285){var ex__30770__auto__ = e31285;
var statearr_31286_33461 = state_31273;
(statearr_31286_33461[(2)] = ex__30770__auto__);


if(cljs.core.seq((state_31273[(4)]))){
var statearr_31287_33462 = state_31273;
(statearr_31287_33462[(1)] = cljs.core.first((state_31273[(4)])));

} else {
throw ex__30770__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33465 = state_31273;
state_31273 = G__33465;
continue;
} else {
return ret_value__30768__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30767__auto__ = function(state_31273){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30767__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30767__auto____1.call(this,state_31273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30767__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30767__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30767__auto__;
})()
;})(__33441,switch__30766__auto__,c__30947__auto___33445,G__31258_33442,G__31258_33443__$1,n__4613__auto___33440,jobs,results,process,async))
})();
var state__30949__auto__ = (function (){var statearr_31288 = f__30948__auto__();
(statearr_31288[(6)] = c__30947__auto___33445);

return statearr_31288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30949__auto__);
});})(__33441,c__30947__auto___33445,G__31258_33442,G__31258_33443__$1,n__4613__auto___33440,jobs,results,process,async))
);


break;
case "async":
var c__30947__auto___33466 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33441,c__30947__auto___33466,G__31258_33442,G__31258_33443__$1,n__4613__auto___33440,jobs,results,process,async){
return (function (){
var f__30948__auto__ = (function (){var switch__30766__auto__ = ((function (__33441,c__30947__auto___33466,G__31258_33442,G__31258_33443__$1,n__4613__auto___33440,jobs,results,process,async){
return (function (state_31305){
var state_val_31306 = (state_31305[(1)]);
if((state_val_31306 === (1))){
var state_31305__$1 = state_31305;
var statearr_31310_33467 = state_31305__$1;
(statearr_31310_33467[(2)] = null);

(statearr_31310_33467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (2))){
var state_31305__$1 = state_31305;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31305__$1,(4),jobs);
} else {
if((state_val_31306 === (3))){
var inst_31303 = (state_31305[(2)]);
var state_31305__$1 = state_31305;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31305__$1,inst_31303);
} else {
if((state_val_31306 === (4))){
var inst_31294 = (state_31305[(2)]);
var inst_31296 = async(inst_31294);
var state_31305__$1 = state_31305;
if(cljs.core.truth_(inst_31296)){
var statearr_31311_33470 = state_31305__$1;
(statearr_31311_33470[(1)] = (5));

} else {
var statearr_31313_33471 = state_31305__$1;
(statearr_31313_33471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (5))){
var state_31305__$1 = state_31305;
var statearr_31316_33472 = state_31305__$1;
(statearr_31316_33472[(2)] = null);

(statearr_31316_33472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (6))){
var state_31305__$1 = state_31305;
var statearr_31317_33473 = state_31305__$1;
(statearr_31317_33473[(2)] = null);

(statearr_31317_33473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31306 === (7))){
var inst_31301 = (state_31305[(2)]);
var state_31305__$1 = state_31305;
var statearr_31318_33474 = state_31305__$1;
(statearr_31318_33474[(2)] = inst_31301);

(statearr_31318_33474[(1)] = (3));


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
});})(__33441,c__30947__auto___33466,G__31258_33442,G__31258_33443__$1,n__4613__auto___33440,jobs,results,process,async))
;
return ((function (__33441,switch__30766__auto__,c__30947__auto___33466,G__31258_33442,G__31258_33443__$1,n__4613__auto___33440,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30767__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30767__auto____0 = (function (){
var statearr_31319 = [null,null,null,null,null,null,null];
(statearr_31319[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30767__auto__);

(statearr_31319[(1)] = (1));

return statearr_31319;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30767__auto____1 = (function (state_31305){
while(true){
var ret_value__30768__auto__ = (function (){try{while(true){
var result__30769__auto__ = switch__30766__auto__(state_31305);
if(cljs.core.keyword_identical_QMARK_(result__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30769__auto__;
}
break;
}
}catch (e31320){var ex__30770__auto__ = e31320;
var statearr_31321_33477 = state_31305;
(statearr_31321_33477[(2)] = ex__30770__auto__);


if(cljs.core.seq((state_31305[(4)]))){
var statearr_31322_33478 = state_31305;
(statearr_31322_33478[(1)] = cljs.core.first((state_31305[(4)])));

} else {
throw ex__30770__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33480 = state_31305;
state_31305 = G__33480;
continue;
} else {
return ret_value__30768__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30767__auto__ = function(state_31305){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30767__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30767__auto____1.call(this,state_31305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30767__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30767__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30767__auto__;
})()
;})(__33441,switch__30766__auto__,c__30947__auto___33466,G__31258_33442,G__31258_33443__$1,n__4613__auto___33440,jobs,results,process,async))
})();
var state__30949__auto__ = (function (){var statearr_31323 = f__30948__auto__();
(statearr_31323[(6)] = c__30947__auto___33466);

return statearr_31323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30949__auto__);
});})(__33441,c__30947__auto___33466,G__31258_33442,G__31258_33443__$1,n__4613__auto___33440,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31258_33443__$1)].join('')));

}

var G__33482 = (__33441 + (1));
__33441 = G__33482;
continue;
} else {
}
break;
}

var c__30947__auto___33483 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30948__auto__ = (function (){var switch__30766__auto__ = (function (state_31345){
var state_val_31346 = (state_31345[(1)]);
if((state_val_31346 === (7))){
var inst_31341 = (state_31345[(2)]);
var state_31345__$1 = state_31345;
var statearr_31359_33484 = state_31345__$1;
(statearr_31359_33484[(2)] = inst_31341);

(statearr_31359_33484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (1))){
var state_31345__$1 = state_31345;
var statearr_31360_33485 = state_31345__$1;
(statearr_31360_33485[(2)] = null);

(statearr_31360_33485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (4))){
var inst_31326 = (state_31345[(7)]);
var inst_31326__$1 = (state_31345[(2)]);
var inst_31327 = (inst_31326__$1 == null);
var state_31345__$1 = (function (){var statearr_31361 = state_31345;
(statearr_31361[(7)] = inst_31326__$1);

return statearr_31361;
})();
if(cljs.core.truth_(inst_31327)){
var statearr_31362_33486 = state_31345__$1;
(statearr_31362_33486[(1)] = (5));

} else {
var statearr_31363_33487 = state_31345__$1;
(statearr_31363_33487[(1)] = (6));

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
var state_31345__$1 = (function (){var statearr_31364 = state_31345;
(statearr_31364[(8)] = inst_31331__$1);

return statearr_31364;
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
var state_31345__$1 = (function (){var statearr_31365 = state_31345;
(statearr_31365[(9)] = inst_31338);

return statearr_31365;
})();
var statearr_31366_33492 = state_31345__$1;
(statearr_31366_33492[(2)] = null);

(statearr_31366_33492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (5))){
var inst_31329 = cljs.core.async.close_BANG_(jobs);
var state_31345__$1 = state_31345;
var statearr_31367_33493 = state_31345__$1;
(statearr_31367_33493[(2)] = inst_31329);

(statearr_31367_33493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31346 === (8))){
var inst_31331 = (state_31345[(8)]);
var inst_31336 = (state_31345[(2)]);
var state_31345__$1 = (function (){var statearr_31368 = state_31345;
(statearr_31368[(10)] = inst_31336);

return statearr_31368;
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
var cljs$core$async$pipeline_STAR__$_state_machine__30767__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30767__auto____0 = (function (){
var statearr_31369 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31369[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30767__auto__);

(statearr_31369[(1)] = (1));

return statearr_31369;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30767__auto____1 = (function (state_31345){
while(true){
var ret_value__30768__auto__ = (function (){try{while(true){
var result__30769__auto__ = switch__30766__auto__(state_31345);
if(cljs.core.keyword_identical_QMARK_(result__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30769__auto__;
}
break;
}
}catch (e31370){var ex__30770__auto__ = e31370;
var statearr_31371_33494 = state_31345;
(statearr_31371_33494[(2)] = ex__30770__auto__);


if(cljs.core.seq((state_31345[(4)]))){
var statearr_31372_33495 = state_31345;
(statearr_31372_33495[(1)] = cljs.core.first((state_31345[(4)])));

} else {
throw ex__30770__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33496 = state_31345;
state_31345 = G__33496;
continue;
} else {
return ret_value__30768__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30767__auto__ = function(state_31345){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30767__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30767__auto____1.call(this,state_31345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30767__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30767__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30767__auto__;
})()
})();
var state__30949__auto__ = (function (){var statearr_31373 = f__30948__auto__();
(statearr_31373[(6)] = c__30947__auto___33483);

return statearr_31373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30949__auto__);
}));


var c__30947__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30948__auto__ = (function (){var switch__30766__auto__ = (function (state_31411){
var state_val_31412 = (state_31411[(1)]);
if((state_val_31412 === (7))){
var inst_31407 = (state_31411[(2)]);
var state_31411__$1 = state_31411;
var statearr_31415_33499 = state_31411__$1;
(statearr_31415_33499[(2)] = inst_31407);

(statearr_31415_33499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (20))){
var state_31411__$1 = state_31411;
var statearr_31417_33501 = state_31411__$1;
(statearr_31417_33501[(2)] = null);

(statearr_31417_33501[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (1))){
var state_31411__$1 = state_31411;
var statearr_31418_33502 = state_31411__$1;
(statearr_31418_33502[(2)] = null);

(statearr_31418_33502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (4))){
var inst_31376 = (state_31411[(7)]);
var inst_31376__$1 = (state_31411[(2)]);
var inst_31377 = (inst_31376__$1 == null);
var state_31411__$1 = (function (){var statearr_31419 = state_31411;
(statearr_31419[(7)] = inst_31376__$1);

return statearr_31419;
})();
if(cljs.core.truth_(inst_31377)){
var statearr_31420_33503 = state_31411__$1;
(statearr_31420_33503[(1)] = (5));

} else {
var statearr_31421_33514 = state_31411__$1;
(statearr_31421_33514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (15))){
var inst_31389 = (state_31411[(8)]);
var state_31411__$1 = state_31411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31411__$1,(18),to,inst_31389);
} else {
if((state_val_31412 === (21))){
var inst_31402 = (state_31411[(2)]);
var state_31411__$1 = state_31411;
var statearr_31428_33515 = state_31411__$1;
(statearr_31428_33515[(2)] = inst_31402);

(statearr_31428_33515[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (13))){
var inst_31404 = (state_31411[(2)]);
var state_31411__$1 = (function (){var statearr_31429 = state_31411;
(statearr_31429[(9)] = inst_31404);

return statearr_31429;
})();
var statearr_31430_33516 = state_31411__$1;
(statearr_31430_33516[(2)] = null);

(statearr_31430_33516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (6))){
var inst_31376 = (state_31411[(7)]);
var state_31411__$1 = state_31411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31411__$1,(11),inst_31376);
} else {
if((state_val_31412 === (17))){
var inst_31397 = (state_31411[(2)]);
var state_31411__$1 = state_31411;
if(cljs.core.truth_(inst_31397)){
var statearr_31431_33517 = state_31411__$1;
(statearr_31431_33517[(1)] = (19));

} else {
var statearr_31432_33518 = state_31411__$1;
(statearr_31432_33518[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (3))){
var inst_31409 = (state_31411[(2)]);
var state_31411__$1 = state_31411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31411__$1,inst_31409);
} else {
if((state_val_31412 === (12))){
var inst_31386 = (state_31411[(10)]);
var state_31411__$1 = state_31411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31411__$1,(14),inst_31386);
} else {
if((state_val_31412 === (2))){
var state_31411__$1 = state_31411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31411__$1,(4),results);
} else {
if((state_val_31412 === (19))){
var state_31411__$1 = state_31411;
var statearr_31433_33519 = state_31411__$1;
(statearr_31433_33519[(2)] = null);

(statearr_31433_33519[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (11))){
var inst_31386 = (state_31411[(2)]);
var state_31411__$1 = (function (){var statearr_31434 = state_31411;
(statearr_31434[(10)] = inst_31386);

return statearr_31434;
})();
var statearr_31435_33520 = state_31411__$1;
(statearr_31435_33520[(2)] = null);

(statearr_31435_33520[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (9))){
var state_31411__$1 = state_31411;
var statearr_31436_33521 = state_31411__$1;
(statearr_31436_33521[(2)] = null);

(statearr_31436_33521[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (5))){
var state_31411__$1 = state_31411;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31439_33522 = state_31411__$1;
(statearr_31439_33522[(1)] = (8));

} else {
var statearr_31441_33523 = state_31411__$1;
(statearr_31441_33523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (14))){
var inst_31389 = (state_31411[(8)]);
var inst_31389__$1 = (state_31411[(2)]);
var inst_31390 = (inst_31389__$1 == null);
var inst_31391 = cljs.core.not(inst_31390);
var state_31411__$1 = (function (){var statearr_31442 = state_31411;
(statearr_31442[(8)] = inst_31389__$1);

return statearr_31442;
})();
if(inst_31391){
var statearr_31443_33524 = state_31411__$1;
(statearr_31443_33524[(1)] = (15));

} else {
var statearr_31444_33525 = state_31411__$1;
(statearr_31444_33525[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (16))){
var state_31411__$1 = state_31411;
var statearr_31445_33549 = state_31411__$1;
(statearr_31445_33549[(2)] = false);

(statearr_31445_33549[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (10))){
var inst_31383 = (state_31411[(2)]);
var state_31411__$1 = state_31411;
var statearr_31446_33550 = state_31411__$1;
(statearr_31446_33550[(2)] = inst_31383);

(statearr_31446_33550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (18))){
var inst_31394 = (state_31411[(2)]);
var state_31411__$1 = state_31411;
var statearr_31447_33551 = state_31411__$1;
(statearr_31447_33551[(2)] = inst_31394);

(statearr_31447_33551[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31412 === (8))){
var inst_31380 = cljs.core.async.close_BANG_(to);
var state_31411__$1 = state_31411;
var statearr_31448_33552 = state_31411__$1;
(statearr_31448_33552[(2)] = inst_31380);

(statearr_31448_33552[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__30767__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30767__auto____0 = (function (){
var statearr_31449 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31449[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30767__auto__);

(statearr_31449[(1)] = (1));

return statearr_31449;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30767__auto____1 = (function (state_31411){
while(true){
var ret_value__30768__auto__ = (function (){try{while(true){
var result__30769__auto__ = switch__30766__auto__(state_31411);
if(cljs.core.keyword_identical_QMARK_(result__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30769__auto__;
}
break;
}
}catch (e31450){var ex__30770__auto__ = e31450;
var statearr_31451_33554 = state_31411;
(statearr_31451_33554[(2)] = ex__30770__auto__);


if(cljs.core.seq((state_31411[(4)]))){
var statearr_31453_33556 = state_31411;
(statearr_31453_33556[(1)] = cljs.core.first((state_31411[(4)])));

} else {
throw ex__30770__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33558 = state_31411;
state_31411 = G__33558;
continue;
} else {
return ret_value__30768__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30767__auto__ = function(state_31411){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30767__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30767__auto____1.call(this,state_31411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30767__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30767__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30767__auto__;
})()
})();
var state__30949__auto__ = (function (){var statearr_31454 = f__30948__auto__();
(statearr_31454[(6)] = c__30947__auto__);

return statearr_31454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30949__auto__);
}));

return c__30947__auto__;
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
var G__31456 = arguments.length;
switch (G__31456) {
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
var G__31462 = arguments.length;
switch (G__31462) {
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
var c__30947__auto___33563 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30948__auto__ = (function (){var switch__30766__auto__ = (function (state_31490){
var state_val_31491 = (state_31490[(1)]);
if((state_val_31491 === (7))){
var inst_31486 = (state_31490[(2)]);
var state_31490__$1 = state_31490;
var statearr_31492_33564 = state_31490__$1;
(statearr_31492_33564[(2)] = inst_31486);

(statearr_31492_33564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31491 === (1))){
var state_31490__$1 = state_31490;
var statearr_31493_33565 = state_31490__$1;
(statearr_31493_33565[(2)] = null);

(statearr_31493_33565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31491 === (4))){
var inst_31467 = (state_31490[(7)]);
var inst_31467__$1 = (state_31490[(2)]);
var inst_31468 = (inst_31467__$1 == null);
var state_31490__$1 = (function (){var statearr_31494 = state_31490;
(statearr_31494[(7)] = inst_31467__$1);

return statearr_31494;
})();
if(cljs.core.truth_(inst_31468)){
var statearr_31495_33567 = state_31490__$1;
(statearr_31495_33567[(1)] = (5));

} else {
var statearr_31496_33568 = state_31490__$1;
(statearr_31496_33568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31491 === (13))){
var state_31490__$1 = state_31490;
var statearr_31497_33569 = state_31490__$1;
(statearr_31497_33569[(2)] = null);

(statearr_31497_33569[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31491 === (6))){
var inst_31467 = (state_31490[(7)]);
var inst_31473 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31467) : p.call(null,inst_31467));
var state_31490__$1 = state_31490;
if(cljs.core.truth_(inst_31473)){
var statearr_31498_33572 = state_31490__$1;
(statearr_31498_33572[(1)] = (9));

} else {
var statearr_31499_33573 = state_31490__$1;
(statearr_31499_33573[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31491 === (3))){
var inst_31488 = (state_31490[(2)]);
var state_31490__$1 = state_31490;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31490__$1,inst_31488);
} else {
if((state_val_31491 === (12))){
var state_31490__$1 = state_31490;
var statearr_31502_33577 = state_31490__$1;
(statearr_31502_33577[(2)] = null);

(statearr_31502_33577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31491 === (2))){
var state_31490__$1 = state_31490;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31490__$1,(4),ch);
} else {
if((state_val_31491 === (11))){
var inst_31467 = (state_31490[(7)]);
var inst_31477 = (state_31490[(2)]);
var state_31490__$1 = state_31490;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31490__$1,(8),inst_31477,inst_31467);
} else {
if((state_val_31491 === (9))){
var state_31490__$1 = state_31490;
var statearr_31503_33583 = state_31490__$1;
(statearr_31503_33583[(2)] = tc);

(statearr_31503_33583[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31491 === (5))){
var inst_31470 = cljs.core.async.close_BANG_(tc);
var inst_31471 = cljs.core.async.close_BANG_(fc);
var state_31490__$1 = (function (){var statearr_31504 = state_31490;
(statearr_31504[(8)] = inst_31470);

return statearr_31504;
})();
var statearr_31505_33584 = state_31490__$1;
(statearr_31505_33584[(2)] = inst_31471);

(statearr_31505_33584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31491 === (14))){
var inst_31484 = (state_31490[(2)]);
var state_31490__$1 = state_31490;
var statearr_31506_33585 = state_31490__$1;
(statearr_31506_33585[(2)] = inst_31484);

(statearr_31506_33585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31491 === (10))){
var state_31490__$1 = state_31490;
var statearr_31507_33586 = state_31490__$1;
(statearr_31507_33586[(2)] = fc);

(statearr_31507_33586[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31491 === (8))){
var inst_31479 = (state_31490[(2)]);
var state_31490__$1 = state_31490;
if(cljs.core.truth_(inst_31479)){
var statearr_31508_33587 = state_31490__$1;
(statearr_31508_33587[(1)] = (12));

} else {
var statearr_31509_33588 = state_31490__$1;
(statearr_31509_33588[(1)] = (13));

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
var cljs$core$async$state_machine__30767__auto__ = null;
var cljs$core$async$state_machine__30767__auto____0 = (function (){
var statearr_31510 = [null,null,null,null,null,null,null,null,null];
(statearr_31510[(0)] = cljs$core$async$state_machine__30767__auto__);

(statearr_31510[(1)] = (1));

return statearr_31510;
});
var cljs$core$async$state_machine__30767__auto____1 = (function (state_31490){
while(true){
var ret_value__30768__auto__ = (function (){try{while(true){
var result__30769__auto__ = switch__30766__auto__(state_31490);
if(cljs.core.keyword_identical_QMARK_(result__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30769__auto__;
}
break;
}
}catch (e31524){var ex__30770__auto__ = e31524;
var statearr_31525_33589 = state_31490;
(statearr_31525_33589[(2)] = ex__30770__auto__);


if(cljs.core.seq((state_31490[(4)]))){
var statearr_31531_33590 = state_31490;
(statearr_31531_33590[(1)] = cljs.core.first((state_31490[(4)])));

} else {
throw ex__30770__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33598 = state_31490;
state_31490 = G__33598;
continue;
} else {
return ret_value__30768__auto__;
}
break;
}
});
cljs$core$async$state_machine__30767__auto__ = function(state_31490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30767__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30767__auto____1.call(this,state_31490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30767__auto____0;
cljs$core$async$state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30767__auto____1;
return cljs$core$async$state_machine__30767__auto__;
})()
})();
var state__30949__auto__ = (function (){var statearr_31533 = f__30948__auto__();
(statearr_31533[(6)] = c__30947__auto___33563);

return statearr_31533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30949__auto__);
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
var c__30947__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30948__auto__ = (function (){var switch__30766__auto__ = (function (state_31558){
var state_val_31559 = (state_31558[(1)]);
if((state_val_31559 === (7))){
var inst_31551 = (state_31558[(2)]);
var state_31558__$1 = state_31558;
var statearr_31560_33604 = state_31558__$1;
(statearr_31560_33604[(2)] = inst_31551);

(statearr_31560_33604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (1))){
var inst_31534 = init;
var inst_31535 = inst_31534;
var state_31558__$1 = (function (){var statearr_31565 = state_31558;
(statearr_31565[(7)] = inst_31535);

return statearr_31565;
})();
var statearr_31566_33610 = state_31558__$1;
(statearr_31566_33610[(2)] = null);

(statearr_31566_33610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (4))){
var inst_31538 = (state_31558[(8)]);
var inst_31538__$1 = (state_31558[(2)]);
var inst_31539 = (inst_31538__$1 == null);
var state_31558__$1 = (function (){var statearr_31569 = state_31558;
(statearr_31569[(8)] = inst_31538__$1);

return statearr_31569;
})();
if(cljs.core.truth_(inst_31539)){
var statearr_31574_33617 = state_31558__$1;
(statearr_31574_33617[(1)] = (5));

} else {
var statearr_31575_33618 = state_31558__$1;
(statearr_31575_33618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (6))){
var inst_31535 = (state_31558[(7)]);
var inst_31542 = (state_31558[(9)]);
var inst_31538 = (state_31558[(8)]);
var inst_31542__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31535,inst_31538) : f.call(null,inst_31535,inst_31538));
var inst_31543 = cljs.core.reduced_QMARK_(inst_31542__$1);
var state_31558__$1 = (function (){var statearr_31576 = state_31558;
(statearr_31576[(9)] = inst_31542__$1);

return statearr_31576;
})();
if(inst_31543){
var statearr_31577_33622 = state_31558__$1;
(statearr_31577_33622[(1)] = (8));

} else {
var statearr_31580_33623 = state_31558__$1;
(statearr_31580_33623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (3))){
var inst_31553 = (state_31558[(2)]);
var state_31558__$1 = state_31558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31558__$1,inst_31553);
} else {
if((state_val_31559 === (2))){
var state_31558__$1 = state_31558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31558__$1,(4),ch);
} else {
if((state_val_31559 === (9))){
var inst_31542 = (state_31558[(9)]);
var inst_31535 = inst_31542;
var state_31558__$1 = (function (){var statearr_31582 = state_31558;
(statearr_31582[(7)] = inst_31535);

return statearr_31582;
})();
var statearr_31584_33624 = state_31558__$1;
(statearr_31584_33624[(2)] = null);

(statearr_31584_33624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (5))){
var inst_31535 = (state_31558[(7)]);
var state_31558__$1 = state_31558;
var statearr_31587_33625 = state_31558__$1;
(statearr_31587_33625[(2)] = inst_31535);

(statearr_31587_33625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (10))){
var inst_31549 = (state_31558[(2)]);
var state_31558__$1 = state_31558;
var statearr_31588_33626 = state_31558__$1;
(statearr_31588_33626[(2)] = inst_31549);

(statearr_31588_33626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31559 === (8))){
var inst_31542 = (state_31558[(9)]);
var inst_31545 = cljs.core.deref(inst_31542);
var state_31558__$1 = state_31558;
var statearr_31589_33629 = state_31558__$1;
(statearr_31589_33629[(2)] = inst_31545);

(statearr_31589_33629[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__30767__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30767__auto____0 = (function (){
var statearr_31594 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31594[(0)] = cljs$core$async$reduce_$_state_machine__30767__auto__);

(statearr_31594[(1)] = (1));

return statearr_31594;
});
var cljs$core$async$reduce_$_state_machine__30767__auto____1 = (function (state_31558){
while(true){
var ret_value__30768__auto__ = (function (){try{while(true){
var result__30769__auto__ = switch__30766__auto__(state_31558);
if(cljs.core.keyword_identical_QMARK_(result__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30769__auto__;
}
break;
}
}catch (e31595){var ex__30770__auto__ = e31595;
var statearr_31596_33631 = state_31558;
(statearr_31596_33631[(2)] = ex__30770__auto__);


if(cljs.core.seq((state_31558[(4)]))){
var statearr_31597_33632 = state_31558;
(statearr_31597_33632[(1)] = cljs.core.first((state_31558[(4)])));

} else {
throw ex__30770__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33633 = state_31558;
state_31558 = G__33633;
continue;
} else {
return ret_value__30768__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30767__auto__ = function(state_31558){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30767__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30767__auto____1.call(this,state_31558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30767__auto____0;
cljs$core$async$reduce_$_state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30767__auto____1;
return cljs$core$async$reduce_$_state_machine__30767__auto__;
})()
})();
var state__30949__auto__ = (function (){var statearr_31599 = f__30948__auto__();
(statearr_31599[(6)] = c__30947__auto__);

return statearr_31599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30949__auto__);
}));

return c__30947__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30947__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30948__auto__ = (function (){var switch__30766__auto__ = (function (state_31610){
var state_val_31611 = (state_31610[(1)]);
if((state_val_31611 === (1))){
var inst_31605 = cljs.core.async.reduce(f__$1,init,ch);
var state_31610__$1 = state_31610;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31610__$1,(2),inst_31605);
} else {
if((state_val_31611 === (2))){
var inst_31607 = (state_31610[(2)]);
var inst_31608 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31607) : f__$1.call(null,inst_31607));
var state_31610__$1 = state_31610;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31610__$1,inst_31608);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30767__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30767__auto____0 = (function (){
var statearr_31612 = [null,null,null,null,null,null,null];
(statearr_31612[(0)] = cljs$core$async$transduce_$_state_machine__30767__auto__);

(statearr_31612[(1)] = (1));

return statearr_31612;
});
var cljs$core$async$transduce_$_state_machine__30767__auto____1 = (function (state_31610){
while(true){
var ret_value__30768__auto__ = (function (){try{while(true){
var result__30769__auto__ = switch__30766__auto__(state_31610);
if(cljs.core.keyword_identical_QMARK_(result__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30769__auto__;
}
break;
}
}catch (e31613){var ex__30770__auto__ = e31613;
var statearr_31614_33637 = state_31610;
(statearr_31614_33637[(2)] = ex__30770__auto__);


if(cljs.core.seq((state_31610[(4)]))){
var statearr_31615_33638 = state_31610;
(statearr_31615_33638[(1)] = cljs.core.first((state_31610[(4)])));

} else {
throw ex__30770__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33640 = state_31610;
state_31610 = G__33640;
continue;
} else {
return ret_value__30768__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30767__auto__ = function(state_31610){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30767__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30767__auto____1.call(this,state_31610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30767__auto____0;
cljs$core$async$transduce_$_state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30767__auto____1;
return cljs$core$async$transduce_$_state_machine__30767__auto__;
})()
})();
var state__30949__auto__ = (function (){var statearr_31616 = f__30948__auto__();
(statearr_31616[(6)] = c__30947__auto__);

return statearr_31616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30949__auto__);
}));

return c__30947__auto__;
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
var G__31625 = arguments.length;
switch (G__31625) {
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
var c__30947__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30948__auto__ = (function (){var switch__30766__auto__ = (function (state_31662){
var state_val_31667 = (state_31662[(1)]);
if((state_val_31667 === (7))){
var inst_31640 = (state_31662[(2)]);
var state_31662__$1 = state_31662;
var statearr_31669_33642 = state_31662__$1;
(statearr_31669_33642[(2)] = inst_31640);

(statearr_31669_33642[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (1))){
var inst_31631 = cljs.core.seq(coll);
var inst_31632 = inst_31631;
var state_31662__$1 = (function (){var statearr_31672 = state_31662;
(statearr_31672[(7)] = inst_31632);

return statearr_31672;
})();
var statearr_31673_33643 = state_31662__$1;
(statearr_31673_33643[(2)] = null);

(statearr_31673_33643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (4))){
var inst_31632 = (state_31662[(7)]);
var inst_31638 = cljs.core.first(inst_31632);
var state_31662__$1 = state_31662;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31662__$1,(7),ch,inst_31638);
} else {
if((state_val_31667 === (13))){
var inst_31656 = (state_31662[(2)]);
var state_31662__$1 = state_31662;
var statearr_31675_33644 = state_31662__$1;
(statearr_31675_33644[(2)] = inst_31656);

(statearr_31675_33644[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (6))){
var inst_31643 = (state_31662[(2)]);
var state_31662__$1 = state_31662;
if(cljs.core.truth_(inst_31643)){
var statearr_31678_33645 = state_31662__$1;
(statearr_31678_33645[(1)] = (8));

} else {
var statearr_31679_33646 = state_31662__$1;
(statearr_31679_33646[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (3))){
var inst_31660 = (state_31662[(2)]);
var state_31662__$1 = state_31662;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31662__$1,inst_31660);
} else {
if((state_val_31667 === (12))){
var state_31662__$1 = state_31662;
var statearr_31681_33647 = state_31662__$1;
(statearr_31681_33647[(2)] = null);

(statearr_31681_33647[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (2))){
var inst_31632 = (state_31662[(7)]);
var state_31662__$1 = state_31662;
if(cljs.core.truth_(inst_31632)){
var statearr_31684_33648 = state_31662__$1;
(statearr_31684_33648[(1)] = (4));

} else {
var statearr_31685_33649 = state_31662__$1;
(statearr_31685_33649[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (11))){
var inst_31653 = cljs.core.async.close_BANG_(ch);
var state_31662__$1 = state_31662;
var statearr_31686_33650 = state_31662__$1;
(statearr_31686_33650[(2)] = inst_31653);

(statearr_31686_33650[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (9))){
var state_31662__$1 = state_31662;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31688_33651 = state_31662__$1;
(statearr_31688_33651[(1)] = (11));

} else {
var statearr_31690_33652 = state_31662__$1;
(statearr_31690_33652[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (5))){
var inst_31632 = (state_31662[(7)]);
var state_31662__$1 = state_31662;
var statearr_31692_33653 = state_31662__$1;
(statearr_31692_33653[(2)] = inst_31632);

(statearr_31692_33653[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (10))){
var inst_31658 = (state_31662[(2)]);
var state_31662__$1 = state_31662;
var statearr_31694_33654 = state_31662__$1;
(statearr_31694_33654[(2)] = inst_31658);

(statearr_31694_33654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (8))){
var inst_31632 = (state_31662[(7)]);
var inst_31649 = cljs.core.next(inst_31632);
var inst_31632__$1 = inst_31649;
var state_31662__$1 = (function (){var statearr_31699 = state_31662;
(statearr_31699[(7)] = inst_31632__$1);

return statearr_31699;
})();
var statearr_31700_33656 = state_31662__$1;
(statearr_31700_33656[(2)] = null);

(statearr_31700_33656[(1)] = (2));


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
var cljs$core$async$state_machine__30767__auto__ = null;
var cljs$core$async$state_machine__30767__auto____0 = (function (){
var statearr_31701 = [null,null,null,null,null,null,null,null];
(statearr_31701[(0)] = cljs$core$async$state_machine__30767__auto__);

(statearr_31701[(1)] = (1));

return statearr_31701;
});
var cljs$core$async$state_machine__30767__auto____1 = (function (state_31662){
while(true){
var ret_value__30768__auto__ = (function (){try{while(true){
var result__30769__auto__ = switch__30766__auto__(state_31662);
if(cljs.core.keyword_identical_QMARK_(result__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30769__auto__;
}
break;
}
}catch (e31702){var ex__30770__auto__ = e31702;
var statearr_31703_33657 = state_31662;
(statearr_31703_33657[(2)] = ex__30770__auto__);


if(cljs.core.seq((state_31662[(4)]))){
var statearr_31704_33658 = state_31662;
(statearr_31704_33658[(1)] = cljs.core.first((state_31662[(4)])));

} else {
throw ex__30770__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33659 = state_31662;
state_31662 = G__33659;
continue;
} else {
return ret_value__30768__auto__;
}
break;
}
});
cljs$core$async$state_machine__30767__auto__ = function(state_31662){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30767__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30767__auto____1.call(this,state_31662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30767__auto____0;
cljs$core$async$state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30767__auto____1;
return cljs$core$async$state_machine__30767__auto__;
})()
})();
var state__30949__auto__ = (function (){var statearr_31705 = f__30948__auto__();
(statearr_31705[(6)] = c__30947__auto__);

return statearr_31705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30949__auto__);
}));

return c__30947__auto__;
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
var G__31707 = arguments.length;
switch (G__31707) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_33665 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_33665(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33667 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_33667(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33669 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_33669(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33670 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_33670(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31777 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31777 = (function (ch,cs,meta31778){
this.ch = ch;
this.cs = cs;
this.meta31778 = meta31778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31779,meta31778__$1){
var self__ = this;
var _31779__$1 = this;
return (new cljs.core.async.t_cljs$core$async31777(self__.ch,self__.cs,meta31778__$1));
}));

(cljs.core.async.t_cljs$core$async31777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31779){
var self__ = this;
var _31779__$1 = this;
return self__.meta31778;
}));

(cljs.core.async.t_cljs$core$async31777.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31777.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31777.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31777.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31777.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31777.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31777.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31778","meta31778",-915629161,null)], null);
}));

(cljs.core.async.t_cljs$core$async31777.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31777.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31777");

(cljs.core.async.t_cljs$core$async31777.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31777");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31777.
 */
cljs.core.async.__GT_t_cljs$core$async31777 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31777(ch__$1,cs__$1,meta31778){
return (new cljs.core.async.t_cljs$core$async31777(ch__$1,cs__$1,meta31778));
});

}

return (new cljs.core.async.t_cljs$core$async31777(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30947__auto___33678 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30948__auto__ = (function (){var switch__30766__auto__ = (function (state_31971){
var state_val_31972 = (state_31971[(1)]);
if((state_val_31972 === (7))){
var inst_31966 = (state_31971[(2)]);
var state_31971__$1 = state_31971;
var statearr_31973_33679 = state_31971__$1;
(statearr_31973_33679[(2)] = inst_31966);

(statearr_31973_33679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (20))){
var inst_31849 = (state_31971[(7)]);
var inst_31863 = cljs.core.first(inst_31849);
var inst_31864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31863,(0),null);
var inst_31865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31863,(1),null);
var state_31971__$1 = (function (){var statearr_31974 = state_31971;
(statearr_31974[(8)] = inst_31864);

return statearr_31974;
})();
if(cljs.core.truth_(inst_31865)){
var statearr_31977_33681 = state_31971__$1;
(statearr_31977_33681[(1)] = (22));

} else {
var statearr_31978_33682 = state_31971__$1;
(statearr_31978_33682[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (27))){
var inst_31801 = (state_31971[(9)]);
var inst_31899 = (state_31971[(10)]);
var inst_31897 = (state_31971[(11)]);
var inst_31909 = (state_31971[(12)]);
var inst_31909__$1 = cljs.core._nth(inst_31897,inst_31899);
var inst_31910 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31909__$1,inst_31801,done);
var state_31971__$1 = (function (){var statearr_32002 = state_31971;
(statearr_32002[(12)] = inst_31909__$1);

return statearr_32002;
})();
if(cljs.core.truth_(inst_31910)){
var statearr_32003_33683 = state_31971__$1;
(statearr_32003_33683[(1)] = (30));

} else {
var statearr_32005_33684 = state_31971__$1;
(statearr_32005_33684[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (1))){
var state_31971__$1 = state_31971;
var statearr_32006_33685 = state_31971__$1;
(statearr_32006_33685[(2)] = null);

(statearr_32006_33685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (24))){
var inst_31849 = (state_31971[(7)]);
var inst_31870 = (state_31971[(2)]);
var inst_31875 = cljs.core.next(inst_31849);
var inst_31810 = inst_31875;
var inst_31811 = null;
var inst_31812 = (0);
var inst_31813 = (0);
var state_31971__$1 = (function (){var statearr_32007 = state_31971;
(statearr_32007[(13)] = inst_31813);

(statearr_32007[(14)] = inst_31810);

(statearr_32007[(15)] = inst_31811);

(statearr_32007[(16)] = inst_31812);

(statearr_32007[(17)] = inst_31870);

return statearr_32007;
})();
var statearr_32010_33686 = state_31971__$1;
(statearr_32010_33686[(2)] = null);

(statearr_32010_33686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (39))){
var state_31971__$1 = state_31971;
var statearr_32014_33687 = state_31971__$1;
(statearr_32014_33687[(2)] = null);

(statearr_32014_33687[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (4))){
var inst_31801 = (state_31971[(9)]);
var inst_31801__$1 = (state_31971[(2)]);
var inst_31802 = (inst_31801__$1 == null);
var state_31971__$1 = (function (){var statearr_32015 = state_31971;
(statearr_32015[(9)] = inst_31801__$1);

return statearr_32015;
})();
if(cljs.core.truth_(inst_31802)){
var statearr_32017_33688 = state_31971__$1;
(statearr_32017_33688[(1)] = (5));

} else {
var statearr_32018_33689 = state_31971__$1;
(statearr_32018_33689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (15))){
var inst_31813 = (state_31971[(13)]);
var inst_31810 = (state_31971[(14)]);
var inst_31811 = (state_31971[(15)]);
var inst_31812 = (state_31971[(16)]);
var inst_31841 = (state_31971[(2)]);
var inst_31842 = (inst_31813 + (1));
var tmp32011 = inst_31810;
var tmp32012 = inst_31811;
var tmp32013 = inst_31812;
var inst_31810__$1 = tmp32011;
var inst_31811__$1 = tmp32012;
var inst_31812__$1 = tmp32013;
var inst_31813__$1 = inst_31842;
var state_31971__$1 = (function (){var statearr_32020 = state_31971;
(statearr_32020[(13)] = inst_31813__$1);

(statearr_32020[(14)] = inst_31810__$1);

(statearr_32020[(15)] = inst_31811__$1);

(statearr_32020[(16)] = inst_31812__$1);

(statearr_32020[(18)] = inst_31841);

return statearr_32020;
})();
var statearr_32021_33690 = state_31971__$1;
(statearr_32021_33690[(2)] = null);

(statearr_32021_33690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (21))){
var inst_31878 = (state_31971[(2)]);
var state_31971__$1 = state_31971;
var statearr_32025_33691 = state_31971__$1;
(statearr_32025_33691[(2)] = inst_31878);

(statearr_32025_33691[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (31))){
var inst_31909 = (state_31971[(12)]);
var inst_31913 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31909);
var state_31971__$1 = state_31971;
var statearr_32026_33692 = state_31971__$1;
(statearr_32026_33692[(2)] = inst_31913);

(statearr_32026_33692[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (32))){
var inst_31898 = (state_31971[(19)]);
var inst_31899 = (state_31971[(10)]);
var inst_31897 = (state_31971[(11)]);
var inst_31896 = (state_31971[(20)]);
var inst_31915 = (state_31971[(2)]);
var inst_31916 = (inst_31899 + (1));
var tmp32022 = inst_31898;
var tmp32023 = inst_31897;
var tmp32024 = inst_31896;
var inst_31896__$1 = tmp32024;
var inst_31897__$1 = tmp32023;
var inst_31898__$1 = tmp32022;
var inst_31899__$1 = inst_31916;
var state_31971__$1 = (function (){var statearr_32027 = state_31971;
(statearr_32027[(19)] = inst_31898__$1);

(statearr_32027[(10)] = inst_31899__$1);

(statearr_32027[(11)] = inst_31897__$1);

(statearr_32027[(20)] = inst_31896__$1);

(statearr_32027[(21)] = inst_31915);

return statearr_32027;
})();
var statearr_32028_33693 = state_31971__$1;
(statearr_32028_33693[(2)] = null);

(statearr_32028_33693[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (40))){
var inst_31932 = (state_31971[(22)]);
var inst_31941 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31932);
var state_31971__$1 = state_31971;
var statearr_32029_33696 = state_31971__$1;
(statearr_32029_33696[(2)] = inst_31941);

(statearr_32029_33696[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (33))){
var inst_31923 = (state_31971[(23)]);
var inst_31925 = cljs.core.chunked_seq_QMARK_(inst_31923);
var state_31971__$1 = state_31971;
if(inst_31925){
var statearr_32030_33716 = state_31971__$1;
(statearr_32030_33716[(1)] = (36));

} else {
var statearr_32031_33717 = state_31971__$1;
(statearr_32031_33717[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (13))){
var inst_31833 = (state_31971[(24)]);
var inst_31838 = cljs.core.async.close_BANG_(inst_31833);
var state_31971__$1 = state_31971;
var statearr_32032_33718 = state_31971__$1;
(statearr_32032_33718[(2)] = inst_31838);

(statearr_32032_33718[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (22))){
var inst_31864 = (state_31971[(8)]);
var inst_31867 = cljs.core.async.close_BANG_(inst_31864);
var state_31971__$1 = state_31971;
var statearr_32033_33722 = state_31971__$1;
(statearr_32033_33722[(2)] = inst_31867);

(statearr_32033_33722[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (36))){
var inst_31923 = (state_31971[(23)]);
var inst_31927 = cljs.core.chunk_first(inst_31923);
var inst_31928 = cljs.core.chunk_rest(inst_31923);
var inst_31929 = cljs.core.count(inst_31927);
var inst_31896 = inst_31928;
var inst_31897 = inst_31927;
var inst_31898 = inst_31929;
var inst_31899 = (0);
var state_31971__$1 = (function (){var statearr_32034 = state_31971;
(statearr_32034[(19)] = inst_31898);

(statearr_32034[(10)] = inst_31899);

(statearr_32034[(11)] = inst_31897);

(statearr_32034[(20)] = inst_31896);

return statearr_32034;
})();
var statearr_32035_33727 = state_31971__$1;
(statearr_32035_33727[(2)] = null);

(statearr_32035_33727[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (41))){
var inst_31923 = (state_31971[(23)]);
var inst_31943 = (state_31971[(2)]);
var inst_31944 = cljs.core.next(inst_31923);
var inst_31896 = inst_31944;
var inst_31897 = null;
var inst_31898 = (0);
var inst_31899 = (0);
var state_31971__$1 = (function (){var statearr_32036 = state_31971;
(statearr_32036[(19)] = inst_31898);

(statearr_32036[(25)] = inst_31943);

(statearr_32036[(10)] = inst_31899);

(statearr_32036[(11)] = inst_31897);

(statearr_32036[(20)] = inst_31896);

return statearr_32036;
})();
var statearr_32037_33730 = state_31971__$1;
(statearr_32037_33730[(2)] = null);

(statearr_32037_33730[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (43))){
var state_31971__$1 = state_31971;
var statearr_32039_33731 = state_31971__$1;
(statearr_32039_33731[(2)] = null);

(statearr_32039_33731[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (29))){
var inst_31953 = (state_31971[(2)]);
var state_31971__$1 = state_31971;
var statearr_32040_33732 = state_31971__$1;
(statearr_32040_33732[(2)] = inst_31953);

(statearr_32040_33732[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (44))){
var inst_31963 = (state_31971[(2)]);
var state_31971__$1 = (function (){var statearr_32041 = state_31971;
(statearr_32041[(26)] = inst_31963);

return statearr_32041;
})();
var statearr_32043_33735 = state_31971__$1;
(statearr_32043_33735[(2)] = null);

(statearr_32043_33735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (6))){
var inst_31888 = (state_31971[(27)]);
var inst_31887 = cljs.core.deref(cs);
var inst_31888__$1 = cljs.core.keys(inst_31887);
var inst_31889 = cljs.core.count(inst_31888__$1);
var inst_31890 = cljs.core.reset_BANG_(dctr,inst_31889);
var inst_31895 = cljs.core.seq(inst_31888__$1);
var inst_31896 = inst_31895;
var inst_31897 = null;
var inst_31898 = (0);
var inst_31899 = (0);
var state_31971__$1 = (function (){var statearr_32046 = state_31971;
(statearr_32046[(27)] = inst_31888__$1);

(statearr_32046[(19)] = inst_31898);

(statearr_32046[(10)] = inst_31899);

(statearr_32046[(11)] = inst_31897);

(statearr_32046[(20)] = inst_31896);

(statearr_32046[(28)] = inst_31890);

return statearr_32046;
})();
var statearr_32047_33736 = state_31971__$1;
(statearr_32047_33736[(2)] = null);

(statearr_32047_33736[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (28))){
var inst_31923 = (state_31971[(23)]);
var inst_31896 = (state_31971[(20)]);
var inst_31923__$1 = cljs.core.seq(inst_31896);
var state_31971__$1 = (function (){var statearr_32048 = state_31971;
(statearr_32048[(23)] = inst_31923__$1);

return statearr_32048;
})();
if(inst_31923__$1){
var statearr_32049_33737 = state_31971__$1;
(statearr_32049_33737[(1)] = (33));

} else {
var statearr_32050_33738 = state_31971__$1;
(statearr_32050_33738[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (25))){
var inst_31898 = (state_31971[(19)]);
var inst_31899 = (state_31971[(10)]);
var inst_31902 = (inst_31899 < inst_31898);
var inst_31903 = inst_31902;
var state_31971__$1 = state_31971;
if(cljs.core.truth_(inst_31903)){
var statearr_32055_33739 = state_31971__$1;
(statearr_32055_33739[(1)] = (27));

} else {
var statearr_32056_33740 = state_31971__$1;
(statearr_32056_33740[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (34))){
var state_31971__$1 = state_31971;
var statearr_32061_33741 = state_31971__$1;
(statearr_32061_33741[(2)] = null);

(statearr_32061_33741[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (17))){
var state_31971__$1 = state_31971;
var statearr_32066_33742 = state_31971__$1;
(statearr_32066_33742[(2)] = null);

(statearr_32066_33742[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (3))){
var inst_31968 = (state_31971[(2)]);
var state_31971__$1 = state_31971;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31971__$1,inst_31968);
} else {
if((state_val_31972 === (12))){
var inst_31883 = (state_31971[(2)]);
var state_31971__$1 = state_31971;
var statearr_32067_33743 = state_31971__$1;
(statearr_32067_33743[(2)] = inst_31883);

(statearr_32067_33743[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (2))){
var state_31971__$1 = state_31971;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31971__$1,(4),ch);
} else {
if((state_val_31972 === (23))){
var state_31971__$1 = state_31971;
var statearr_32068_33747 = state_31971__$1;
(statearr_32068_33747[(2)] = null);

(statearr_32068_33747[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (35))){
var inst_31951 = (state_31971[(2)]);
var state_31971__$1 = state_31971;
var statearr_32069_33748 = state_31971__$1;
(statearr_32069_33748[(2)] = inst_31951);

(statearr_32069_33748[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (19))){
var inst_31849 = (state_31971[(7)]);
var inst_31855 = cljs.core.chunk_first(inst_31849);
var inst_31856 = cljs.core.chunk_rest(inst_31849);
var inst_31857 = cljs.core.count(inst_31855);
var inst_31810 = inst_31856;
var inst_31811 = inst_31855;
var inst_31812 = inst_31857;
var inst_31813 = (0);
var state_31971__$1 = (function (){var statearr_32070 = state_31971;
(statearr_32070[(13)] = inst_31813);

(statearr_32070[(14)] = inst_31810);

(statearr_32070[(15)] = inst_31811);

(statearr_32070[(16)] = inst_31812);

return statearr_32070;
})();
var statearr_32071_33749 = state_31971__$1;
(statearr_32071_33749[(2)] = null);

(statearr_32071_33749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (11))){
var inst_31810 = (state_31971[(14)]);
var inst_31849 = (state_31971[(7)]);
var inst_31849__$1 = cljs.core.seq(inst_31810);
var state_31971__$1 = (function (){var statearr_32072 = state_31971;
(statearr_32072[(7)] = inst_31849__$1);

return statearr_32072;
})();
if(inst_31849__$1){
var statearr_32073_33750 = state_31971__$1;
(statearr_32073_33750[(1)] = (16));

} else {
var statearr_32074_33751 = state_31971__$1;
(statearr_32074_33751[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (9))){
var inst_31885 = (state_31971[(2)]);
var state_31971__$1 = state_31971;
var statearr_32075_33752 = state_31971__$1;
(statearr_32075_33752[(2)] = inst_31885);

(statearr_32075_33752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (5))){
var inst_31808 = cljs.core.deref(cs);
var inst_31809 = cljs.core.seq(inst_31808);
var inst_31810 = inst_31809;
var inst_31811 = null;
var inst_31812 = (0);
var inst_31813 = (0);
var state_31971__$1 = (function (){var statearr_32076 = state_31971;
(statearr_32076[(13)] = inst_31813);

(statearr_32076[(14)] = inst_31810);

(statearr_32076[(15)] = inst_31811);

(statearr_32076[(16)] = inst_31812);

return statearr_32076;
})();
var statearr_32077_33766 = state_31971__$1;
(statearr_32077_33766[(2)] = null);

(statearr_32077_33766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (14))){
var state_31971__$1 = state_31971;
var statearr_32078_33767 = state_31971__$1;
(statearr_32078_33767[(2)] = null);

(statearr_32078_33767[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (45))){
var inst_31960 = (state_31971[(2)]);
var state_31971__$1 = state_31971;
var statearr_32079_33768 = state_31971__$1;
(statearr_32079_33768[(2)] = inst_31960);

(statearr_32079_33768[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (26))){
var inst_31888 = (state_31971[(27)]);
var inst_31956 = (state_31971[(2)]);
var inst_31957 = cljs.core.seq(inst_31888);
var state_31971__$1 = (function (){var statearr_32088 = state_31971;
(statearr_32088[(29)] = inst_31956);

return statearr_32088;
})();
if(inst_31957){
var statearr_32089_33769 = state_31971__$1;
(statearr_32089_33769[(1)] = (42));

} else {
var statearr_32090_33770 = state_31971__$1;
(statearr_32090_33770[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (16))){
var inst_31849 = (state_31971[(7)]);
var inst_31851 = cljs.core.chunked_seq_QMARK_(inst_31849);
var state_31971__$1 = state_31971;
if(inst_31851){
var statearr_32091_33771 = state_31971__$1;
(statearr_32091_33771[(1)] = (19));

} else {
var statearr_32092_33772 = state_31971__$1;
(statearr_32092_33772[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (38))){
var inst_31947 = (state_31971[(2)]);
var state_31971__$1 = state_31971;
var statearr_32093_33773 = state_31971__$1;
(statearr_32093_33773[(2)] = inst_31947);

(statearr_32093_33773[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (30))){
var state_31971__$1 = state_31971;
var statearr_32094_33774 = state_31971__$1;
(statearr_32094_33774[(2)] = null);

(statearr_32094_33774[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (10))){
var inst_31813 = (state_31971[(13)]);
var inst_31811 = (state_31971[(15)]);
var inst_31832 = cljs.core._nth(inst_31811,inst_31813);
var inst_31833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31832,(0),null);
var inst_31836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31832,(1),null);
var state_31971__$1 = (function (){var statearr_32095 = state_31971;
(statearr_32095[(24)] = inst_31833);

return statearr_32095;
})();
if(cljs.core.truth_(inst_31836)){
var statearr_32096_33778 = state_31971__$1;
(statearr_32096_33778[(1)] = (13));

} else {
var statearr_32097_33795 = state_31971__$1;
(statearr_32097_33795[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (18))){
var inst_31881 = (state_31971[(2)]);
var state_31971__$1 = state_31971;
var statearr_32098_33796 = state_31971__$1;
(statearr_32098_33796[(2)] = inst_31881);

(statearr_32098_33796[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (42))){
var state_31971__$1 = state_31971;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31971__$1,(45),dchan);
} else {
if((state_val_31972 === (37))){
var inst_31923 = (state_31971[(23)]);
var inst_31801 = (state_31971[(9)]);
var inst_31932 = (state_31971[(22)]);
var inst_31932__$1 = cljs.core.first(inst_31923);
var inst_31938 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31932__$1,inst_31801,done);
var state_31971__$1 = (function (){var statearr_32107 = state_31971;
(statearr_32107[(22)] = inst_31932__$1);

return statearr_32107;
})();
if(cljs.core.truth_(inst_31938)){
var statearr_32108_33797 = state_31971__$1;
(statearr_32108_33797[(1)] = (39));

} else {
var statearr_32109_33798 = state_31971__$1;
(statearr_32109_33798[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31972 === (8))){
var inst_31813 = (state_31971[(13)]);
var inst_31812 = (state_31971[(16)]);
var inst_31815 = (inst_31813 < inst_31812);
var inst_31816 = inst_31815;
var state_31971__$1 = state_31971;
if(cljs.core.truth_(inst_31816)){
var statearr_32114_33805 = state_31971__$1;
(statearr_32114_33805[(1)] = (10));

} else {
var statearr_32115_33806 = state_31971__$1;
(statearr_32115_33806[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__30767__auto__ = null;
var cljs$core$async$mult_$_state_machine__30767__auto____0 = (function (){
var statearr_32116 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32116[(0)] = cljs$core$async$mult_$_state_machine__30767__auto__);

(statearr_32116[(1)] = (1));

return statearr_32116;
});
var cljs$core$async$mult_$_state_machine__30767__auto____1 = (function (state_31971){
while(true){
var ret_value__30768__auto__ = (function (){try{while(true){
var result__30769__auto__ = switch__30766__auto__(state_31971);
if(cljs.core.keyword_identical_QMARK_(result__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30769__auto__;
}
break;
}
}catch (e32117){var ex__30770__auto__ = e32117;
var statearr_32118_33811 = state_31971;
(statearr_32118_33811[(2)] = ex__30770__auto__);


if(cljs.core.seq((state_31971[(4)]))){
var statearr_32119_33812 = state_31971;
(statearr_32119_33812[(1)] = cljs.core.first((state_31971[(4)])));

} else {
throw ex__30770__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33822 = state_31971;
state_31971 = G__33822;
continue;
} else {
return ret_value__30768__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30767__auto__ = function(state_31971){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30767__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30767__auto____1.call(this,state_31971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30767__auto____0;
cljs$core$async$mult_$_state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30767__auto____1;
return cljs$core$async$mult_$_state_machine__30767__auto__;
})()
})();
var state__30949__auto__ = (function (){var statearr_32120 = f__30948__auto__();
(statearr_32120[(6)] = c__30947__auto___33678);

return statearr_32120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30949__auto__);
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
var G__32122 = arguments.length;
switch (G__32122) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_33836 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_33836(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33840 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_33840(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33843 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33843(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33847 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_33847(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33848 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33848(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33862 = arguments.length;
var i__4737__auto___33863 = (0);
while(true){
if((i__4737__auto___33863 < len__4736__auto___33862)){
args__4742__auto__.push((arguments[i__4737__auto___33863]));

var G__33864 = (i__4737__auto___33863 + (1));
i__4737__auto___33863 = G__33864;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32151){
var map__32152 = p__32151;
var map__32152__$1 = (((((!((map__32152 == null))))?(((((map__32152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32152):map__32152);
var opts = map__32152__$1;
var statearr_32154_33865 = state;
(statearr_32154_33865[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32155_33866 = state;
(statearr_32155_33866[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_32156_33867 = state;
(statearr_32156_33867[(2)] = cljs.core.deref(cb));


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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32158 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32158 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32159){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32159 = meta32159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32160,meta32159__$1){
var self__ = this;
var _32160__$1 = this;
return (new cljs.core.async.t_cljs$core$async32158(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32159__$1));
}));

(cljs.core.async.t_cljs$core$async32158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32160){
var self__ = this;
var _32160__$1 = this;
return self__.meta32159;
}));

(cljs.core.async.t_cljs$core$async32158.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32158.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32158.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32158.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32158.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32158.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32158.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32158.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32158.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32159","meta32159",-2065252505,null)], null);
}));

(cljs.core.async.t_cljs$core$async32158.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32158.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32158");

(cljs.core.async.t_cljs$core$async32158.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32158");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32158.
 */
cljs.core.async.__GT_t_cljs$core$async32158 = (function cljs$core$async$mix_$___GT_t_cljs$core$async32158(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32159){
return (new cljs.core.async.t_cljs$core$async32158(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32159));
});

}

return (new cljs.core.async.t_cljs$core$async32158(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30947__auto___33872 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30948__auto__ = (function (){var switch__30766__auto__ = (function (state_32279){
var state_val_32280 = (state_32279[(1)]);
if((state_val_32280 === (7))){
var inst_32191 = (state_32279[(2)]);
var state_32279__$1 = state_32279;
var statearr_32283_33873 = state_32279__$1;
(statearr_32283_33873[(2)] = inst_32191);

(statearr_32283_33873[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (20))){
var inst_32203 = (state_32279[(7)]);
var state_32279__$1 = state_32279;
var statearr_32284_33874 = state_32279__$1;
(statearr_32284_33874[(2)] = inst_32203);

(statearr_32284_33874[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (27))){
var state_32279__$1 = state_32279;
var statearr_32287_33875 = state_32279__$1;
(statearr_32287_33875[(2)] = null);

(statearr_32287_33875[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (1))){
var inst_32175 = (state_32279[(8)]);
var inst_32175__$1 = calc_state();
var inst_32180 = (inst_32175__$1 == null);
var inst_32181 = cljs.core.not(inst_32180);
var state_32279__$1 = (function (){var statearr_32288 = state_32279;
(statearr_32288[(8)] = inst_32175__$1);

return statearr_32288;
})();
if(inst_32181){
var statearr_32289_33884 = state_32279__$1;
(statearr_32289_33884[(1)] = (2));

} else {
var statearr_32293_33885 = state_32279__$1;
(statearr_32293_33885[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (24))){
var inst_32237 = (state_32279[(9)]);
var inst_32228 = (state_32279[(10)]);
var inst_32251 = (state_32279[(11)]);
var inst_32251__$1 = (inst_32228.cljs$core$IFn$_invoke$arity$1 ? inst_32228.cljs$core$IFn$_invoke$arity$1(inst_32237) : inst_32228.call(null,inst_32237));
var state_32279__$1 = (function (){var statearr_32295 = state_32279;
(statearr_32295[(11)] = inst_32251__$1);

return statearr_32295;
})();
if(cljs.core.truth_(inst_32251__$1)){
var statearr_32296_33886 = state_32279__$1;
(statearr_32296_33886[(1)] = (29));

} else {
var statearr_32298_33887 = state_32279__$1;
(statearr_32298_33887[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (4))){
var inst_32194 = (state_32279[(2)]);
var state_32279__$1 = state_32279;
if(cljs.core.truth_(inst_32194)){
var statearr_32301_33888 = state_32279__$1;
(statearr_32301_33888[(1)] = (8));

} else {
var statearr_32302_33889 = state_32279__$1;
(statearr_32302_33889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (15))){
var inst_32222 = (state_32279[(2)]);
var state_32279__$1 = state_32279;
if(cljs.core.truth_(inst_32222)){
var statearr_32303_33890 = state_32279__$1;
(statearr_32303_33890[(1)] = (19));

} else {
var statearr_32304_33891 = state_32279__$1;
(statearr_32304_33891[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (21))){
var inst_32227 = (state_32279[(12)]);
var inst_32227__$1 = (state_32279[(2)]);
var inst_32228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32227__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32227__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32227__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32279__$1 = (function (){var statearr_32305 = state_32279;
(statearr_32305[(13)] = inst_32229);

(statearr_32305[(10)] = inst_32228);

(statearr_32305[(12)] = inst_32227__$1);

return statearr_32305;
})();
return cljs.core.async.ioc_alts_BANG_(state_32279__$1,(22),inst_32230);
} else {
if((state_val_32280 === (31))){
var inst_32259 = (state_32279[(2)]);
var state_32279__$1 = state_32279;
if(cljs.core.truth_(inst_32259)){
var statearr_32306_33892 = state_32279__$1;
(statearr_32306_33892[(1)] = (32));

} else {
var statearr_32307_33893 = state_32279__$1;
(statearr_32307_33893[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (32))){
var inst_32236 = (state_32279[(14)]);
var state_32279__$1 = state_32279;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32279__$1,(35),out,inst_32236);
} else {
if((state_val_32280 === (33))){
var inst_32227 = (state_32279[(12)]);
var inst_32203 = inst_32227;
var state_32279__$1 = (function (){var statearr_32308 = state_32279;
(statearr_32308[(7)] = inst_32203);

return statearr_32308;
})();
var statearr_32309_33894 = state_32279__$1;
(statearr_32309_33894[(2)] = null);

(statearr_32309_33894[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (13))){
var inst_32203 = (state_32279[(7)]);
var inst_32211 = inst_32203.cljs$lang$protocol_mask$partition0$;
var inst_32212 = (inst_32211 & (64));
var inst_32213 = inst_32203.cljs$core$ISeq$;
var inst_32214 = (cljs.core.PROTOCOL_SENTINEL === inst_32213);
var inst_32215 = ((inst_32212) || (inst_32214));
var state_32279__$1 = state_32279;
if(cljs.core.truth_(inst_32215)){
var statearr_32310_33919 = state_32279__$1;
(statearr_32310_33919[(1)] = (16));

} else {
var statearr_32311_33920 = state_32279__$1;
(statearr_32311_33920[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (22))){
var inst_32237 = (state_32279[(9)]);
var inst_32236 = (state_32279[(14)]);
var inst_32235 = (state_32279[(2)]);
var inst_32236__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32235,(0),null);
var inst_32237__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32235,(1),null);
var inst_32238 = (inst_32236__$1 == null);
var inst_32239 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32237__$1,change);
var inst_32240 = ((inst_32238) || (inst_32239));
var state_32279__$1 = (function (){var statearr_32316 = state_32279;
(statearr_32316[(9)] = inst_32237__$1);

(statearr_32316[(14)] = inst_32236__$1);

return statearr_32316;
})();
if(cljs.core.truth_(inst_32240)){
var statearr_32317_33933 = state_32279__$1;
(statearr_32317_33933[(1)] = (23));

} else {
var statearr_32318_33938 = state_32279__$1;
(statearr_32318_33938[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (36))){
var inst_32227 = (state_32279[(12)]);
var inst_32203 = inst_32227;
var state_32279__$1 = (function (){var statearr_32319 = state_32279;
(statearr_32319[(7)] = inst_32203);

return statearr_32319;
})();
var statearr_32320_33946 = state_32279__$1;
(statearr_32320_33946[(2)] = null);

(statearr_32320_33946[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (29))){
var inst_32251 = (state_32279[(11)]);
var state_32279__$1 = state_32279;
var statearr_32321_33947 = state_32279__$1;
(statearr_32321_33947[(2)] = inst_32251);

(statearr_32321_33947[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (6))){
var state_32279__$1 = state_32279;
var statearr_32322_33948 = state_32279__$1;
(statearr_32322_33948[(2)] = false);

(statearr_32322_33948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (28))){
var inst_32247 = (state_32279[(2)]);
var inst_32248 = calc_state();
var inst_32203 = inst_32248;
var state_32279__$1 = (function (){var statearr_32323 = state_32279;
(statearr_32323[(15)] = inst_32247);

(statearr_32323[(7)] = inst_32203);

return statearr_32323;
})();
var statearr_32324_33949 = state_32279__$1;
(statearr_32324_33949[(2)] = null);

(statearr_32324_33949[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (25))){
var inst_32274 = (state_32279[(2)]);
var state_32279__$1 = state_32279;
var statearr_32326_33950 = state_32279__$1;
(statearr_32326_33950[(2)] = inst_32274);

(statearr_32326_33950[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (34))){
var inst_32272 = (state_32279[(2)]);
var state_32279__$1 = state_32279;
var statearr_32328_33951 = state_32279__$1;
(statearr_32328_33951[(2)] = inst_32272);

(statearr_32328_33951[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (17))){
var state_32279__$1 = state_32279;
var statearr_32329_33960 = state_32279__$1;
(statearr_32329_33960[(2)] = false);

(statearr_32329_33960[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (3))){
var state_32279__$1 = state_32279;
var statearr_32330_33961 = state_32279__$1;
(statearr_32330_33961[(2)] = false);

(statearr_32330_33961[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (12))){
var inst_32276 = (state_32279[(2)]);
var state_32279__$1 = state_32279;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32279__$1,inst_32276);
} else {
if((state_val_32280 === (2))){
var inst_32175 = (state_32279[(8)]);
var inst_32183 = inst_32175.cljs$lang$protocol_mask$partition0$;
var inst_32184 = (inst_32183 & (64));
var inst_32185 = inst_32175.cljs$core$ISeq$;
var inst_32186 = (cljs.core.PROTOCOL_SENTINEL === inst_32185);
var inst_32187 = ((inst_32184) || (inst_32186));
var state_32279__$1 = state_32279;
if(cljs.core.truth_(inst_32187)){
var statearr_32331_33962 = state_32279__$1;
(statearr_32331_33962[(1)] = (5));

} else {
var statearr_32332_33963 = state_32279__$1;
(statearr_32332_33963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (23))){
var inst_32236 = (state_32279[(14)]);
var inst_32242 = (inst_32236 == null);
var state_32279__$1 = state_32279;
if(cljs.core.truth_(inst_32242)){
var statearr_32333_33964 = state_32279__$1;
(statearr_32333_33964[(1)] = (26));

} else {
var statearr_32334_33965 = state_32279__$1;
(statearr_32334_33965[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (35))){
var inst_32262 = (state_32279[(2)]);
var state_32279__$1 = state_32279;
if(cljs.core.truth_(inst_32262)){
var statearr_32335_33967 = state_32279__$1;
(statearr_32335_33967[(1)] = (36));

} else {
var statearr_32336_33968 = state_32279__$1;
(statearr_32336_33968[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (19))){
var inst_32203 = (state_32279[(7)]);
var inst_32224 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32203);
var state_32279__$1 = state_32279;
var statearr_32337_33969 = state_32279__$1;
(statearr_32337_33969[(2)] = inst_32224);

(statearr_32337_33969[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (11))){
var inst_32203 = (state_32279[(7)]);
var inst_32207 = (inst_32203 == null);
var inst_32208 = cljs.core.not(inst_32207);
var state_32279__$1 = state_32279;
if(inst_32208){
var statearr_32338_33971 = state_32279__$1;
(statearr_32338_33971[(1)] = (13));

} else {
var statearr_32339_33972 = state_32279__$1;
(statearr_32339_33972[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (9))){
var inst_32175 = (state_32279[(8)]);
var state_32279__$1 = state_32279;
var statearr_32340_33973 = state_32279__$1;
(statearr_32340_33973[(2)] = inst_32175);

(statearr_32340_33973[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (5))){
var state_32279__$1 = state_32279;
var statearr_32341_33974 = state_32279__$1;
(statearr_32341_33974[(2)] = true);

(statearr_32341_33974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (14))){
var state_32279__$1 = state_32279;
var statearr_32342_33976 = state_32279__$1;
(statearr_32342_33976[(2)] = false);

(statearr_32342_33976[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (26))){
var inst_32237 = (state_32279[(9)]);
var inst_32244 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32237);
var state_32279__$1 = state_32279;
var statearr_32343_33978 = state_32279__$1;
(statearr_32343_33978[(2)] = inst_32244);

(statearr_32343_33978[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (16))){
var state_32279__$1 = state_32279;
var statearr_32344_33979 = state_32279__$1;
(statearr_32344_33979[(2)] = true);

(statearr_32344_33979[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (38))){
var inst_32267 = (state_32279[(2)]);
var state_32279__$1 = state_32279;
var statearr_32345_33980 = state_32279__$1;
(statearr_32345_33980[(2)] = inst_32267);

(statearr_32345_33980[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (30))){
var inst_32229 = (state_32279[(13)]);
var inst_32237 = (state_32279[(9)]);
var inst_32228 = (state_32279[(10)]);
var inst_32254 = cljs.core.empty_QMARK_(inst_32228);
var inst_32255 = (inst_32229.cljs$core$IFn$_invoke$arity$1 ? inst_32229.cljs$core$IFn$_invoke$arity$1(inst_32237) : inst_32229.call(null,inst_32237));
var inst_32256 = cljs.core.not(inst_32255);
var inst_32257 = ((inst_32254) && (inst_32256));
var state_32279__$1 = state_32279;
var statearr_32346_33981 = state_32279__$1;
(statearr_32346_33981[(2)] = inst_32257);

(statearr_32346_33981[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (10))){
var inst_32175 = (state_32279[(8)]);
var inst_32199 = (state_32279[(2)]);
var inst_32200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32199,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32199,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32202 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32199,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32203 = inst_32175;
var state_32279__$1 = (function (){var statearr_32348 = state_32279;
(statearr_32348[(16)] = inst_32201);

(statearr_32348[(17)] = inst_32202);

(statearr_32348[(18)] = inst_32200);

(statearr_32348[(7)] = inst_32203);

return statearr_32348;
})();
var statearr_32350_33983 = state_32279__$1;
(statearr_32350_33983[(2)] = null);

(statearr_32350_33983[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (18))){
var inst_32219 = (state_32279[(2)]);
var state_32279__$1 = state_32279;
var statearr_32351_33984 = state_32279__$1;
(statearr_32351_33984[(2)] = inst_32219);

(statearr_32351_33984[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (37))){
var state_32279__$1 = state_32279;
var statearr_32352_33986 = state_32279__$1;
(statearr_32352_33986[(2)] = null);

(statearr_32352_33986[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32280 === (8))){
var inst_32175 = (state_32279[(8)]);
var inst_32196 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32175);
var state_32279__$1 = state_32279;
var statearr_32353_33988 = state_32279__$1;
(statearr_32353_33988[(2)] = inst_32196);

(statearr_32353_33988[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__30767__auto__ = null;
var cljs$core$async$mix_$_state_machine__30767__auto____0 = (function (){
var statearr_32354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32354[(0)] = cljs$core$async$mix_$_state_machine__30767__auto__);

(statearr_32354[(1)] = (1));

return statearr_32354;
});
var cljs$core$async$mix_$_state_machine__30767__auto____1 = (function (state_32279){
while(true){
var ret_value__30768__auto__ = (function (){try{while(true){
var result__30769__auto__ = switch__30766__auto__(state_32279);
if(cljs.core.keyword_identical_QMARK_(result__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30769__auto__;
}
break;
}
}catch (e32355){var ex__30770__auto__ = e32355;
var statearr_32357_33989 = state_32279;
(statearr_32357_33989[(2)] = ex__30770__auto__);


if(cljs.core.seq((state_32279[(4)]))){
var statearr_32358_33990 = state_32279;
(statearr_32358_33990[(1)] = cljs.core.first((state_32279[(4)])));

} else {
throw ex__30770__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33991 = state_32279;
state_32279 = G__33991;
continue;
} else {
return ret_value__30768__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30767__auto__ = function(state_32279){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30767__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30767__auto____1.call(this,state_32279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30767__auto____0;
cljs$core$async$mix_$_state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30767__auto____1;
return cljs$core$async$mix_$_state_machine__30767__auto__;
})()
})();
var state__30949__auto__ = (function (){var statearr_32360 = f__30948__auto__();
(statearr_32360[(6)] = c__30947__auto___33872);

return statearr_32360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30949__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_33992 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_33992(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33998 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_33998(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34004 = (function() {
var G__34005 = null;
var G__34005__1 = (function (p){
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
var G__34005__2 = (function (p,v){
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
G__34005 = function(p,v){
switch(arguments.length){
case 1:
return G__34005__1.call(this,p);
case 2:
return G__34005__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34005.cljs$core$IFn$_invoke$arity$1 = G__34005__1;
G__34005.cljs$core$IFn$_invoke$arity$2 = G__34005__2;
return G__34005;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32366 = arguments.length;
switch (G__32366) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34004(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34004(p,v);
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32368_SHARP_){
if(cljs.core.truth_((p1__32368_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32368_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32368_SHARP_.call(null,topic)))){
return p1__32368_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32368_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32373 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32373 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32374){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32374 = meta32374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32375,meta32374__$1){
var self__ = this;
var _32375__$1 = this;
return (new cljs.core.async.t_cljs$core$async32373(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32374__$1));
}));

(cljs.core.async.t_cljs$core$async32373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32375){
var self__ = this;
var _32375__$1 = this;
return self__.meta32374;
}));

(cljs.core.async.t_cljs$core$async32373.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32373.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32373.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32373.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32373.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async32373.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32373.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32373.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32374","meta32374",-1932036164,null)], null);
}));

(cljs.core.async.t_cljs$core$async32373.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32373.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32373");

(cljs.core.async.t_cljs$core$async32373.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32373");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32373.
 */
cljs.core.async.__GT_t_cljs$core$async32373 = (function cljs$core$async$__GT_t_cljs$core$async32373(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32374){
return (new cljs.core.async.t_cljs$core$async32373(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32374));
});

}

return (new cljs.core.async.t_cljs$core$async32373(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30947__auto___34041 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30948__auto__ = (function (){var switch__30766__auto__ = (function (state_32450){
var state_val_32451 = (state_32450[(1)]);
if((state_val_32451 === (7))){
var inst_32446 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
var statearr_32452_34042 = state_32450__$1;
(statearr_32452_34042[(2)] = inst_32446);

(statearr_32452_34042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (20))){
var state_32450__$1 = state_32450;
var statearr_32453_34043 = state_32450__$1;
(statearr_32453_34043[(2)] = null);

(statearr_32453_34043[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (1))){
var state_32450__$1 = state_32450;
var statearr_32454_34044 = state_32450__$1;
(statearr_32454_34044[(2)] = null);

(statearr_32454_34044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (24))){
var inst_32429 = (state_32450[(7)]);
var inst_32438 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32429);
var state_32450__$1 = state_32450;
var statearr_32455_34045 = state_32450__$1;
(statearr_32455_34045[(2)] = inst_32438);

(statearr_32455_34045[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (4))){
var inst_32380 = (state_32450[(8)]);
var inst_32380__$1 = (state_32450[(2)]);
var inst_32381 = (inst_32380__$1 == null);
var state_32450__$1 = (function (){var statearr_32464 = state_32450;
(statearr_32464[(8)] = inst_32380__$1);

return statearr_32464;
})();
if(cljs.core.truth_(inst_32381)){
var statearr_32465_34047 = state_32450__$1;
(statearr_32465_34047[(1)] = (5));

} else {
var statearr_32466_34048 = state_32450__$1;
(statearr_32466_34048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (15))){
var inst_32423 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
var statearr_32470_34049 = state_32450__$1;
(statearr_32470_34049[(2)] = inst_32423);

(statearr_32470_34049[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (21))){
var inst_32443 = (state_32450[(2)]);
var state_32450__$1 = (function (){var statearr_32471 = state_32450;
(statearr_32471[(9)] = inst_32443);

return statearr_32471;
})();
var statearr_32472_34050 = state_32450__$1;
(statearr_32472_34050[(2)] = null);

(statearr_32472_34050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (13))){
var inst_32405 = (state_32450[(10)]);
var inst_32407 = cljs.core.chunked_seq_QMARK_(inst_32405);
var state_32450__$1 = state_32450;
if(inst_32407){
var statearr_32473_34051 = state_32450__$1;
(statearr_32473_34051[(1)] = (16));

} else {
var statearr_32474_34052 = state_32450__$1;
(statearr_32474_34052[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (22))){
var inst_32435 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
if(cljs.core.truth_(inst_32435)){
var statearr_32475_34053 = state_32450__$1;
(statearr_32475_34053[(1)] = (23));

} else {
var statearr_32476_34054 = state_32450__$1;
(statearr_32476_34054[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (6))){
var inst_32380 = (state_32450[(8)]);
var inst_32431 = (state_32450[(11)]);
var inst_32429 = (state_32450[(7)]);
var inst_32429__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32380) : topic_fn.call(null,inst_32380));
var inst_32430 = cljs.core.deref(mults);
var inst_32431__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32430,inst_32429__$1);
var state_32450__$1 = (function (){var statearr_32477 = state_32450;
(statearr_32477[(11)] = inst_32431__$1);

(statearr_32477[(7)] = inst_32429__$1);

return statearr_32477;
})();
if(cljs.core.truth_(inst_32431__$1)){
var statearr_32478_34055 = state_32450__$1;
(statearr_32478_34055[(1)] = (19));

} else {
var statearr_32479_34056 = state_32450__$1;
(statearr_32479_34056[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (25))){
var inst_32440 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
var statearr_32480_34057 = state_32450__$1;
(statearr_32480_34057[(2)] = inst_32440);

(statearr_32480_34057[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (17))){
var inst_32405 = (state_32450[(10)]);
var inst_32414 = cljs.core.first(inst_32405);
var inst_32415 = cljs.core.async.muxch_STAR_(inst_32414);
var inst_32416 = cljs.core.async.close_BANG_(inst_32415);
var inst_32417 = cljs.core.next(inst_32405);
var inst_32390 = inst_32417;
var inst_32391 = null;
var inst_32392 = (0);
var inst_32393 = (0);
var state_32450__$1 = (function (){var statearr_32481 = state_32450;
(statearr_32481[(12)] = inst_32416);

(statearr_32481[(13)] = inst_32393);

(statearr_32481[(14)] = inst_32391);

(statearr_32481[(15)] = inst_32390);

(statearr_32481[(16)] = inst_32392);

return statearr_32481;
})();
var statearr_32482_34058 = state_32450__$1;
(statearr_32482_34058[(2)] = null);

(statearr_32482_34058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (3))){
var inst_32448 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32450__$1,inst_32448);
} else {
if((state_val_32451 === (12))){
var inst_32425 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
var statearr_32483_34080 = state_32450__$1;
(statearr_32483_34080[(2)] = inst_32425);

(statearr_32483_34080[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (2))){
var state_32450__$1 = state_32450;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32450__$1,(4),ch);
} else {
if((state_val_32451 === (23))){
var state_32450__$1 = state_32450;
var statearr_32485_34081 = state_32450__$1;
(statearr_32485_34081[(2)] = null);

(statearr_32485_34081[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (19))){
var inst_32380 = (state_32450[(8)]);
var inst_32431 = (state_32450[(11)]);
var inst_32433 = cljs.core.async.muxch_STAR_(inst_32431);
var state_32450__$1 = state_32450;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32450__$1,(22),inst_32433,inst_32380);
} else {
if((state_val_32451 === (11))){
var inst_32390 = (state_32450[(15)]);
var inst_32405 = (state_32450[(10)]);
var inst_32405__$1 = cljs.core.seq(inst_32390);
var state_32450__$1 = (function (){var statearr_32490 = state_32450;
(statearr_32490[(10)] = inst_32405__$1);

return statearr_32490;
})();
if(inst_32405__$1){
var statearr_32491_34088 = state_32450__$1;
(statearr_32491_34088[(1)] = (13));

} else {
var statearr_32493_34089 = state_32450__$1;
(statearr_32493_34089[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (9))){
var inst_32427 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
var statearr_32494_34098 = state_32450__$1;
(statearr_32494_34098[(2)] = inst_32427);

(statearr_32494_34098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (5))){
var inst_32387 = cljs.core.deref(mults);
var inst_32388 = cljs.core.vals(inst_32387);
var inst_32389 = cljs.core.seq(inst_32388);
var inst_32390 = inst_32389;
var inst_32391 = null;
var inst_32392 = (0);
var inst_32393 = (0);
var state_32450__$1 = (function (){var statearr_32499 = state_32450;
(statearr_32499[(13)] = inst_32393);

(statearr_32499[(14)] = inst_32391);

(statearr_32499[(15)] = inst_32390);

(statearr_32499[(16)] = inst_32392);

return statearr_32499;
})();
var statearr_32501_34111 = state_32450__$1;
(statearr_32501_34111[(2)] = null);

(statearr_32501_34111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (14))){
var state_32450__$1 = state_32450;
var statearr_32506_34117 = state_32450__$1;
(statearr_32506_34117[(2)] = null);

(statearr_32506_34117[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (16))){
var inst_32405 = (state_32450[(10)]);
var inst_32409 = cljs.core.chunk_first(inst_32405);
var inst_32410 = cljs.core.chunk_rest(inst_32405);
var inst_32411 = cljs.core.count(inst_32409);
var inst_32390 = inst_32410;
var inst_32391 = inst_32409;
var inst_32392 = inst_32411;
var inst_32393 = (0);
var state_32450__$1 = (function (){var statearr_32507 = state_32450;
(statearr_32507[(13)] = inst_32393);

(statearr_32507[(14)] = inst_32391);

(statearr_32507[(15)] = inst_32390);

(statearr_32507[(16)] = inst_32392);

return statearr_32507;
})();
var statearr_32509_34130 = state_32450__$1;
(statearr_32509_34130[(2)] = null);

(statearr_32509_34130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (10))){
var inst_32393 = (state_32450[(13)]);
var inst_32391 = (state_32450[(14)]);
var inst_32390 = (state_32450[(15)]);
var inst_32392 = (state_32450[(16)]);
var inst_32398 = cljs.core._nth(inst_32391,inst_32393);
var inst_32399 = cljs.core.async.muxch_STAR_(inst_32398);
var inst_32400 = cljs.core.async.close_BANG_(inst_32399);
var inst_32401 = (inst_32393 + (1));
var tmp32503 = inst_32391;
var tmp32504 = inst_32390;
var tmp32505 = inst_32392;
var inst_32390__$1 = tmp32504;
var inst_32391__$1 = tmp32503;
var inst_32392__$1 = tmp32505;
var inst_32393__$1 = inst_32401;
var state_32450__$1 = (function (){var statearr_32512 = state_32450;
(statearr_32512[(17)] = inst_32400);

(statearr_32512[(13)] = inst_32393__$1);

(statearr_32512[(14)] = inst_32391__$1);

(statearr_32512[(15)] = inst_32390__$1);

(statearr_32512[(16)] = inst_32392__$1);

return statearr_32512;
})();
var statearr_32515_34169 = state_32450__$1;
(statearr_32515_34169[(2)] = null);

(statearr_32515_34169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (18))){
var inst_32420 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
var statearr_32516_34170 = state_32450__$1;
(statearr_32516_34170[(2)] = inst_32420);

(statearr_32516_34170[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (8))){
var inst_32393 = (state_32450[(13)]);
var inst_32392 = (state_32450[(16)]);
var inst_32395 = (inst_32393 < inst_32392);
var inst_32396 = inst_32395;
var state_32450__$1 = state_32450;
if(cljs.core.truth_(inst_32396)){
var statearr_32518_34171 = state_32450__$1;
(statearr_32518_34171[(1)] = (10));

} else {
var statearr_32519_34172 = state_32450__$1;
(statearr_32519_34172[(1)] = (11));

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
var cljs$core$async$state_machine__30767__auto__ = null;
var cljs$core$async$state_machine__30767__auto____0 = (function (){
var statearr_32524 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32524[(0)] = cljs$core$async$state_machine__30767__auto__);

(statearr_32524[(1)] = (1));

return statearr_32524;
});
var cljs$core$async$state_machine__30767__auto____1 = (function (state_32450){
while(true){
var ret_value__30768__auto__ = (function (){try{while(true){
var result__30769__auto__ = switch__30766__auto__(state_32450);
if(cljs.core.keyword_identical_QMARK_(result__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30769__auto__;
}
break;
}
}catch (e32525){var ex__30770__auto__ = e32525;
var statearr_32526_34173 = state_32450;
(statearr_32526_34173[(2)] = ex__30770__auto__);


if(cljs.core.seq((state_32450[(4)]))){
var statearr_32527_34174 = state_32450;
(statearr_32527_34174[(1)] = cljs.core.first((state_32450[(4)])));

} else {
throw ex__30770__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34175 = state_32450;
state_32450 = G__34175;
continue;
} else {
return ret_value__30768__auto__;
}
break;
}
});
cljs$core$async$state_machine__30767__auto__ = function(state_32450){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30767__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30767__auto____1.call(this,state_32450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30767__auto____0;
cljs$core$async$state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30767__auto____1;
return cljs$core$async$state_machine__30767__auto__;
})()
})();
var state__30949__auto__ = (function (){var statearr_32528 = f__30948__auto__();
(statearr_32528[(6)] = c__30947__auto___34041);

return statearr_32528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30949__auto__);
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
var G__32555 = arguments.length;
switch (G__32555) {
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
var c__30947__auto___34201 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30948__auto__ = (function (){var switch__30766__auto__ = (function (state_32602){
var state_val_32603 = (state_32602[(1)]);
if((state_val_32603 === (7))){
var state_32602__$1 = state_32602;
var statearr_32607_34202 = state_32602__$1;
(statearr_32607_34202[(2)] = null);

(statearr_32607_34202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (1))){
var state_32602__$1 = state_32602;
var statearr_32608_34203 = state_32602__$1;
(statearr_32608_34203[(2)] = null);

(statearr_32608_34203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (4))){
var inst_32562 = (state_32602[(7)]);
var inst_32563 = (state_32602[(8)]);
var inst_32565 = (inst_32563 < inst_32562);
var state_32602__$1 = state_32602;
if(cljs.core.truth_(inst_32565)){
var statearr_32609_34204 = state_32602__$1;
(statearr_32609_34204[(1)] = (6));

} else {
var statearr_32610_34205 = state_32602__$1;
(statearr_32610_34205[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (15))){
var inst_32588 = (state_32602[(9)]);
var inst_32593 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32588);
var state_32602__$1 = state_32602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32602__$1,(17),out,inst_32593);
} else {
if((state_val_32603 === (13))){
var inst_32588 = (state_32602[(9)]);
var inst_32588__$1 = (state_32602[(2)]);
var inst_32589 = cljs.core.some(cljs.core.nil_QMARK_,inst_32588__$1);
var state_32602__$1 = (function (){var statearr_32611 = state_32602;
(statearr_32611[(9)] = inst_32588__$1);

return statearr_32611;
})();
if(cljs.core.truth_(inst_32589)){
var statearr_32612_34237 = state_32602__$1;
(statearr_32612_34237[(1)] = (14));

} else {
var statearr_32613_34238 = state_32602__$1;
(statearr_32613_34238[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (6))){
var state_32602__$1 = state_32602;
var statearr_32614_34239 = state_32602__$1;
(statearr_32614_34239[(2)] = null);

(statearr_32614_34239[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (17))){
var inst_32595 = (state_32602[(2)]);
var state_32602__$1 = (function (){var statearr_32625 = state_32602;
(statearr_32625[(10)] = inst_32595);

return statearr_32625;
})();
var statearr_32626_34240 = state_32602__$1;
(statearr_32626_34240[(2)] = null);

(statearr_32626_34240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (3))){
var inst_32600 = (state_32602[(2)]);
var state_32602__$1 = state_32602;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32602__$1,inst_32600);
} else {
if((state_val_32603 === (12))){
var _ = (function (){var statearr_32627 = state_32602;
(statearr_32627[(4)] = cljs.core.rest((state_32602[(4)])));

return statearr_32627;
})();
var state_32602__$1 = state_32602;
var ex32624 = (state_32602__$1[(2)]);
var statearr_32628_34245 = state_32602__$1;
(statearr_32628_34245[(5)] = ex32624);


if((ex32624 instanceof Object)){
var statearr_32629_34246 = state_32602__$1;
(statearr_32629_34246[(1)] = (11));

(statearr_32629_34246[(5)] = null);

} else {
throw ex32624;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (2))){
var inst_32561 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32562 = cnt;
var inst_32563 = (0);
var state_32602__$1 = (function (){var statearr_32634 = state_32602;
(statearr_32634[(7)] = inst_32562);

(statearr_32634[(8)] = inst_32563);

(statearr_32634[(11)] = inst_32561);

return statearr_32634;
})();
var statearr_32635_34256 = state_32602__$1;
(statearr_32635_34256[(2)] = null);

(statearr_32635_34256[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (11))){
var inst_32567 = (state_32602[(2)]);
var inst_32568 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32602__$1 = (function (){var statearr_32637 = state_32602;
(statearr_32637[(12)] = inst_32567);

return statearr_32637;
})();
var statearr_32638_34257 = state_32602__$1;
(statearr_32638_34257[(2)] = inst_32568);

(statearr_32638_34257[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (9))){
var inst_32563 = (state_32602[(8)]);
var _ = (function (){var statearr_32641 = state_32602;
(statearr_32641[(4)] = cljs.core.cons((12),(state_32602[(4)])));

return statearr_32641;
})();
var inst_32574 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32563) : chs__$1.call(null,inst_32563));
var inst_32575 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32563) : done.call(null,inst_32563));
var inst_32576 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32574,inst_32575);
var ___$1 = (function (){var statearr_32643 = state_32602;
(statearr_32643[(4)] = cljs.core.rest((state_32602[(4)])));

return statearr_32643;
})();
var state_32602__$1 = state_32602;
var statearr_32644_34258 = state_32602__$1;
(statearr_32644_34258[(2)] = inst_32576);

(statearr_32644_34258[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (5))){
var inst_32586 = (state_32602[(2)]);
var state_32602__$1 = (function (){var statearr_32645 = state_32602;
(statearr_32645[(13)] = inst_32586);

return statearr_32645;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32602__$1,(13),dchan);
} else {
if((state_val_32603 === (14))){
var inst_32591 = cljs.core.async.close_BANG_(out);
var state_32602__$1 = state_32602;
var statearr_32649_34259 = state_32602__$1;
(statearr_32649_34259[(2)] = inst_32591);

(statearr_32649_34259[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (16))){
var inst_32598 = (state_32602[(2)]);
var state_32602__$1 = state_32602;
var statearr_32650_34260 = state_32602__$1;
(statearr_32650_34260[(2)] = inst_32598);

(statearr_32650_34260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (10))){
var inst_32563 = (state_32602[(8)]);
var inst_32579 = (state_32602[(2)]);
var inst_32580 = (inst_32563 + (1));
var inst_32563__$1 = inst_32580;
var state_32602__$1 = (function (){var statearr_32651 = state_32602;
(statearr_32651[(14)] = inst_32579);

(statearr_32651[(8)] = inst_32563__$1);

return statearr_32651;
})();
var statearr_32652_34262 = state_32602__$1;
(statearr_32652_34262[(2)] = null);

(statearr_32652_34262[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (8))){
var inst_32584 = (state_32602[(2)]);
var state_32602__$1 = state_32602;
var statearr_32653_34263 = state_32602__$1;
(statearr_32653_34263[(2)] = inst_32584);

(statearr_32653_34263[(1)] = (5));


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
var cljs$core$async$state_machine__30767__auto__ = null;
var cljs$core$async$state_machine__30767__auto____0 = (function (){
var statearr_32654 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32654[(0)] = cljs$core$async$state_machine__30767__auto__);

(statearr_32654[(1)] = (1));

return statearr_32654;
});
var cljs$core$async$state_machine__30767__auto____1 = (function (state_32602){
while(true){
var ret_value__30768__auto__ = (function (){try{while(true){
var result__30769__auto__ = switch__30766__auto__(state_32602);
if(cljs.core.keyword_identical_QMARK_(result__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30769__auto__;
}
break;
}
}catch (e32655){var ex__30770__auto__ = e32655;
var statearr_32656_34264 = state_32602;
(statearr_32656_34264[(2)] = ex__30770__auto__);


if(cljs.core.seq((state_32602[(4)]))){
var statearr_32657_34265 = state_32602;
(statearr_32657_34265[(1)] = cljs.core.first((state_32602[(4)])));

} else {
throw ex__30770__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34266 = state_32602;
state_32602 = G__34266;
continue;
} else {
return ret_value__30768__auto__;
}
break;
}
});
cljs$core$async$state_machine__30767__auto__ = function(state_32602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30767__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30767__auto____1.call(this,state_32602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30767__auto____0;
cljs$core$async$state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30767__auto____1;
return cljs$core$async$state_machine__30767__auto__;
})()
})();
var state__30949__auto__ = (function (){var statearr_32660 = f__30948__auto__();
(statearr_32660[(6)] = c__30947__auto___34201);

return statearr_32660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30949__auto__);
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
var G__32668 = arguments.length;
switch (G__32668) {
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
var c__30947__auto___34269 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30948__auto__ = (function (){var switch__30766__auto__ = (function (state_32710){
var state_val_32711 = (state_32710[(1)]);
if((state_val_32711 === (7))){
var inst_32686 = (state_32710[(7)]);
var inst_32687 = (state_32710[(8)]);
var inst_32686__$1 = (state_32710[(2)]);
var inst_32687__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32686__$1,(0),null);
var inst_32688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32686__$1,(1),null);
var inst_32689 = (inst_32687__$1 == null);
var state_32710__$1 = (function (){var statearr_32712 = state_32710;
(statearr_32712[(9)] = inst_32688);

(statearr_32712[(7)] = inst_32686__$1);

(statearr_32712[(8)] = inst_32687__$1);

return statearr_32712;
})();
if(cljs.core.truth_(inst_32689)){
var statearr_32713_34271 = state_32710__$1;
(statearr_32713_34271[(1)] = (8));

} else {
var statearr_32714_34272 = state_32710__$1;
(statearr_32714_34272[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32711 === (1))){
var inst_32676 = cljs.core.vec(chs);
var inst_32677 = inst_32676;
var state_32710__$1 = (function (){var statearr_32715 = state_32710;
(statearr_32715[(10)] = inst_32677);

return statearr_32715;
})();
var statearr_32716_34273 = state_32710__$1;
(statearr_32716_34273[(2)] = null);

(statearr_32716_34273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32711 === (4))){
var inst_32677 = (state_32710[(10)]);
var state_32710__$1 = state_32710;
return cljs.core.async.ioc_alts_BANG_(state_32710__$1,(7),inst_32677);
} else {
if((state_val_32711 === (6))){
var inst_32705 = (state_32710[(2)]);
var state_32710__$1 = state_32710;
var statearr_32726_34274 = state_32710__$1;
(statearr_32726_34274[(2)] = inst_32705);

(statearr_32726_34274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32711 === (3))){
var inst_32707 = (state_32710[(2)]);
var state_32710__$1 = state_32710;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32710__$1,inst_32707);
} else {
if((state_val_32711 === (2))){
var inst_32677 = (state_32710[(10)]);
var inst_32679 = cljs.core.count(inst_32677);
var inst_32680 = (inst_32679 > (0));
var state_32710__$1 = state_32710;
if(cljs.core.truth_(inst_32680)){
var statearr_32728_34275 = state_32710__$1;
(statearr_32728_34275[(1)] = (4));

} else {
var statearr_32729_34276 = state_32710__$1;
(statearr_32729_34276[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32711 === (11))){
var inst_32677 = (state_32710[(10)]);
var inst_32698 = (state_32710[(2)]);
var tmp32727 = inst_32677;
var inst_32677__$1 = tmp32727;
var state_32710__$1 = (function (){var statearr_32730 = state_32710;
(statearr_32730[(11)] = inst_32698);

(statearr_32730[(10)] = inst_32677__$1);

return statearr_32730;
})();
var statearr_32731_34277 = state_32710__$1;
(statearr_32731_34277[(2)] = null);

(statearr_32731_34277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32711 === (9))){
var inst_32687 = (state_32710[(8)]);
var state_32710__$1 = state_32710;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32710__$1,(11),out,inst_32687);
} else {
if((state_val_32711 === (5))){
var inst_32703 = cljs.core.async.close_BANG_(out);
var state_32710__$1 = state_32710;
var statearr_32732_34282 = state_32710__$1;
(statearr_32732_34282[(2)] = inst_32703);

(statearr_32732_34282[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32711 === (10))){
var inst_32701 = (state_32710[(2)]);
var state_32710__$1 = state_32710;
var statearr_32733_34283 = state_32710__$1;
(statearr_32733_34283[(2)] = inst_32701);

(statearr_32733_34283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32711 === (8))){
var inst_32688 = (state_32710[(9)]);
var inst_32686 = (state_32710[(7)]);
var inst_32687 = (state_32710[(8)]);
var inst_32677 = (state_32710[(10)]);
var inst_32691 = (function (){var cs = inst_32677;
var vec__32682 = inst_32686;
var v = inst_32687;
var c = inst_32688;
return (function (p1__32662_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32662_SHARP_);
});
})();
var inst_32693 = cljs.core.filterv(inst_32691,inst_32677);
var inst_32677__$1 = inst_32693;
var state_32710__$1 = (function (){var statearr_32734 = state_32710;
(statearr_32734[(10)] = inst_32677__$1);

return statearr_32734;
})();
var statearr_32735_34284 = state_32710__$1;
(statearr_32735_34284[(2)] = null);

(statearr_32735_34284[(1)] = (2));


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
var cljs$core$async$state_machine__30767__auto__ = null;
var cljs$core$async$state_machine__30767__auto____0 = (function (){
var statearr_32736 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32736[(0)] = cljs$core$async$state_machine__30767__auto__);

(statearr_32736[(1)] = (1));

return statearr_32736;
});
var cljs$core$async$state_machine__30767__auto____1 = (function (state_32710){
while(true){
var ret_value__30768__auto__ = (function (){try{while(true){
var result__30769__auto__ = switch__30766__auto__(state_32710);
if(cljs.core.keyword_identical_QMARK_(result__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30769__auto__;
}
break;
}
}catch (e32737){var ex__30770__auto__ = e32737;
var statearr_32738_34285 = state_32710;
(statearr_32738_34285[(2)] = ex__30770__auto__);


if(cljs.core.seq((state_32710[(4)]))){
var statearr_32739_34287 = state_32710;
(statearr_32739_34287[(1)] = cljs.core.first((state_32710[(4)])));

} else {
throw ex__30770__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34288 = state_32710;
state_32710 = G__34288;
continue;
} else {
return ret_value__30768__auto__;
}
break;
}
});
cljs$core$async$state_machine__30767__auto__ = function(state_32710){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30767__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30767__auto____1.call(this,state_32710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30767__auto____0;
cljs$core$async$state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30767__auto____1;
return cljs$core$async$state_machine__30767__auto__;
})()
})();
var state__30949__auto__ = (function (){var statearr_32740 = f__30948__auto__();
(statearr_32740[(6)] = c__30947__auto___34269);

return statearr_32740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30949__auto__);
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
var c__30947__auto___34291 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30948__auto__ = (function (){var switch__30766__auto__ = (function (state_32766){
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
var statearr_32769_34292 = state_32766__$1;
(statearr_32769_34292[(1)] = (8));

} else {
var statearr_32770_34293 = state_32766__$1;
(statearr_32770_34293[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32767 === (1))){
var inst_32743 = (0);
var state_32766__$1 = (function (){var statearr_32771 = state_32766;
(statearr_32771[(8)] = inst_32743);

return statearr_32771;
})();
var statearr_32772_34294 = state_32766__$1;
(statearr_32772_34294[(2)] = null);

(statearr_32772_34294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32767 === (4))){
var state_32766__$1 = state_32766;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32766__$1,(7),ch);
} else {
if((state_val_32767 === (6))){
var inst_32761 = (state_32766[(2)]);
var state_32766__$1 = state_32766;
var statearr_32773_34295 = state_32766__$1;
(statearr_32773_34295[(2)] = inst_32761);

(statearr_32773_34295[(1)] = (3));


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
var statearr_32775_34297 = state_32766__$1;
(statearr_32775_34297[(1)] = (4));

} else {
var statearr_32776_34298 = state_32766__$1;
(statearr_32776_34298[(1)] = (5));

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
var statearr_32778_34299 = state_32766__$1;
(statearr_32778_34299[(2)] = null);

(statearr_32778_34299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32767 === (9))){
var state_32766__$1 = state_32766;
var statearr_32779_34300 = state_32766__$1;
(statearr_32779_34300[(2)] = null);

(statearr_32779_34300[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32767 === (5))){
var state_32766__$1 = state_32766;
var statearr_32780_34301 = state_32766__$1;
(statearr_32780_34301[(2)] = null);

(statearr_32780_34301[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32767 === (10))){
var inst_32758 = (state_32766[(2)]);
var state_32766__$1 = state_32766;
var statearr_32781_34302 = state_32766__$1;
(statearr_32781_34302[(2)] = inst_32758);

(statearr_32781_34302[(1)] = (6));


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
var cljs$core$async$state_machine__30767__auto__ = null;
var cljs$core$async$state_machine__30767__auto____0 = (function (){
var statearr_32782 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32782[(0)] = cljs$core$async$state_machine__30767__auto__);

(statearr_32782[(1)] = (1));

return statearr_32782;
});
var cljs$core$async$state_machine__30767__auto____1 = (function (state_32766){
while(true){
var ret_value__30768__auto__ = (function (){try{while(true){
var result__30769__auto__ = switch__30766__auto__(state_32766);
if(cljs.core.keyword_identical_QMARK_(result__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30769__auto__;
}
break;
}
}catch (e32783){var ex__30770__auto__ = e32783;
var statearr_32784_34303 = state_32766;
(statearr_32784_34303[(2)] = ex__30770__auto__);


if(cljs.core.seq((state_32766[(4)]))){
var statearr_32785_34304 = state_32766;
(statearr_32785_34304[(1)] = cljs.core.first((state_32766[(4)])));

} else {
throw ex__30770__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34305 = state_32766;
state_32766 = G__34305;
continue;
} else {
return ret_value__30768__auto__;
}
break;
}
});
cljs$core$async$state_machine__30767__auto__ = function(state_32766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30767__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30767__auto____1.call(this,state_32766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30767__auto____0;
cljs$core$async$state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30767__auto____1;
return cljs$core$async$state_machine__30767__auto__;
})()
})();
var state__30949__auto__ = (function (){var statearr_32786 = f__30948__auto__();
(statearr_32786[(6)] = c__30947__auto___34291);

return statearr_32786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30949__auto__);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32806 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32806 = (function (p,ch,meta32807){
this.p = p;
this.ch = ch;
this.meta32807 = meta32807;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32808,meta32807__$1){
var self__ = this;
var _32808__$1 = this;
return (new cljs.core.async.t_cljs$core$async32806(self__.p,self__.ch,meta32807__$1));
}));

(cljs.core.async.t_cljs$core$async32806.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32808){
var self__ = this;
var _32808__$1 = this;
return self__.meta32807;
}));

(cljs.core.async.t_cljs$core$async32806.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32806.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32806.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32806.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32806.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32806.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32806.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32806.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32807","meta32807",1456055208,null)], null);
}));

(cljs.core.async.t_cljs$core$async32806.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32806.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32806");

(cljs.core.async.t_cljs$core$async32806.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32806");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32806.
 */
cljs.core.async.__GT_t_cljs$core$async32806 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32806(p__$1,ch__$1,meta32807){
return (new cljs.core.async.t_cljs$core$async32806(p__$1,ch__$1,meta32807));
});

}

return (new cljs.core.async.t_cljs$core$async32806(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32810 = arguments.length;
switch (G__32810) {
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
var c__30947__auto___34374 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30948__auto__ = (function (){var switch__30766__auto__ = (function (state_32833){
var state_val_32834 = (state_32833[(1)]);
if((state_val_32834 === (7))){
var inst_32829 = (state_32833[(2)]);
var state_32833__$1 = state_32833;
var statearr_32836_34375 = state_32833__$1;
(statearr_32836_34375[(2)] = inst_32829);

(statearr_32836_34375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32834 === (1))){
var state_32833__$1 = state_32833;
var statearr_32837_34376 = state_32833__$1;
(statearr_32837_34376[(2)] = null);

(statearr_32837_34376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32834 === (4))){
var inst_32815 = (state_32833[(7)]);
var inst_32815__$1 = (state_32833[(2)]);
var inst_32816 = (inst_32815__$1 == null);
var state_32833__$1 = (function (){var statearr_32838 = state_32833;
(statearr_32838[(7)] = inst_32815__$1);

return statearr_32838;
})();
if(cljs.core.truth_(inst_32816)){
var statearr_32839_34377 = state_32833__$1;
(statearr_32839_34377[(1)] = (5));

} else {
var statearr_32840_34378 = state_32833__$1;
(statearr_32840_34378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32834 === (6))){
var inst_32815 = (state_32833[(7)]);
var inst_32820 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32815) : p.call(null,inst_32815));
var state_32833__$1 = state_32833;
if(cljs.core.truth_(inst_32820)){
var statearr_32841_34379 = state_32833__$1;
(statearr_32841_34379[(1)] = (8));

} else {
var statearr_32842_34380 = state_32833__$1;
(statearr_32842_34380[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32834 === (3))){
var inst_32831 = (state_32833[(2)]);
var state_32833__$1 = state_32833;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32833__$1,inst_32831);
} else {
if((state_val_32834 === (2))){
var state_32833__$1 = state_32833;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32833__$1,(4),ch);
} else {
if((state_val_32834 === (11))){
var inst_32823 = (state_32833[(2)]);
var state_32833__$1 = state_32833;
var statearr_32845_34381 = state_32833__$1;
(statearr_32845_34381[(2)] = inst_32823);

(statearr_32845_34381[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32834 === (9))){
var state_32833__$1 = state_32833;
var statearr_32846_34382 = state_32833__$1;
(statearr_32846_34382[(2)] = null);

(statearr_32846_34382[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32834 === (5))){
var inst_32818 = cljs.core.async.close_BANG_(out);
var state_32833__$1 = state_32833;
var statearr_32847_34383 = state_32833__$1;
(statearr_32847_34383[(2)] = inst_32818);

(statearr_32847_34383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32834 === (10))){
var inst_32826 = (state_32833[(2)]);
var state_32833__$1 = (function (){var statearr_32850 = state_32833;
(statearr_32850[(8)] = inst_32826);

return statearr_32850;
})();
var statearr_32852_34384 = state_32833__$1;
(statearr_32852_34384[(2)] = null);

(statearr_32852_34384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32834 === (8))){
var inst_32815 = (state_32833[(7)]);
var state_32833__$1 = state_32833;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32833__$1,(11),out,inst_32815);
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
var cljs$core$async$state_machine__30767__auto__ = null;
var cljs$core$async$state_machine__30767__auto____0 = (function (){
var statearr_32853 = [null,null,null,null,null,null,null,null,null];
(statearr_32853[(0)] = cljs$core$async$state_machine__30767__auto__);

(statearr_32853[(1)] = (1));

return statearr_32853;
});
var cljs$core$async$state_machine__30767__auto____1 = (function (state_32833){
while(true){
var ret_value__30768__auto__ = (function (){try{while(true){
var result__30769__auto__ = switch__30766__auto__(state_32833);
if(cljs.core.keyword_identical_QMARK_(result__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30769__auto__;
}
break;
}
}catch (e32854){var ex__30770__auto__ = e32854;
var statearr_32855_34385 = state_32833;
(statearr_32855_34385[(2)] = ex__30770__auto__);


if(cljs.core.seq((state_32833[(4)]))){
var statearr_32856_34386 = state_32833;
(statearr_32856_34386[(1)] = cljs.core.first((state_32833[(4)])));

} else {
throw ex__30770__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34387 = state_32833;
state_32833 = G__34387;
continue;
} else {
return ret_value__30768__auto__;
}
break;
}
});
cljs$core$async$state_machine__30767__auto__ = function(state_32833){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30767__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30767__auto____1.call(this,state_32833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30767__auto____0;
cljs$core$async$state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30767__auto____1;
return cljs$core$async$state_machine__30767__auto__;
})()
})();
var state__30949__auto__ = (function (){var statearr_32857 = f__30948__auto__();
(statearr_32857[(6)] = c__30947__auto___34374);

return statearr_32857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30949__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32877 = arguments.length;
switch (G__32877) {
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
var c__30947__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30948__auto__ = (function (){var switch__30766__auto__ = (function (state_32974){
var state_val_32975 = (state_32974[(1)]);
if((state_val_32975 === (7))){
var inst_32970 = (state_32974[(2)]);
var state_32974__$1 = state_32974;
var statearr_32976_34406 = state_32974__$1;
(statearr_32976_34406[(2)] = inst_32970);

(statearr_32976_34406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (20))){
var inst_32939 = (state_32974[(7)]);
var inst_32951 = (state_32974[(2)]);
var inst_32952 = cljs.core.next(inst_32939);
var inst_32920 = inst_32952;
var inst_32921 = null;
var inst_32922 = (0);
var inst_32923 = (0);
var state_32974__$1 = (function (){var statearr_32977 = state_32974;
(statearr_32977[(8)] = inst_32921);

(statearr_32977[(9)] = inst_32922);

(statearr_32977[(10)] = inst_32951);

(statearr_32977[(11)] = inst_32920);

(statearr_32977[(12)] = inst_32923);

return statearr_32977;
})();
var statearr_32978_34421 = state_32974__$1;
(statearr_32978_34421[(2)] = null);

(statearr_32978_34421[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (1))){
var state_32974__$1 = state_32974;
var statearr_32979_34424 = state_32974__$1;
(statearr_32979_34424[(2)] = null);

(statearr_32979_34424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (4))){
var inst_32903 = (state_32974[(13)]);
var inst_32903__$1 = (state_32974[(2)]);
var inst_32905 = (inst_32903__$1 == null);
var state_32974__$1 = (function (){var statearr_32980 = state_32974;
(statearr_32980[(13)] = inst_32903__$1);

return statearr_32980;
})();
if(cljs.core.truth_(inst_32905)){
var statearr_32981_34466 = state_32974__$1;
(statearr_32981_34466[(1)] = (5));

} else {
var statearr_32982_34467 = state_32974__$1;
(statearr_32982_34467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (15))){
var state_32974__$1 = state_32974;
var statearr_32986_34468 = state_32974__$1;
(statearr_32986_34468[(2)] = null);

(statearr_32986_34468[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (21))){
var state_32974__$1 = state_32974;
var statearr_32991_34469 = state_32974__$1;
(statearr_32991_34469[(2)] = null);

(statearr_32991_34469[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (13))){
var inst_32921 = (state_32974[(8)]);
var inst_32922 = (state_32974[(9)]);
var inst_32920 = (state_32974[(11)]);
var inst_32923 = (state_32974[(12)]);
var inst_32931 = (state_32974[(2)]);
var inst_32936 = (inst_32923 + (1));
var tmp32983 = inst_32921;
var tmp32984 = inst_32922;
var tmp32985 = inst_32920;
var inst_32920__$1 = tmp32985;
var inst_32921__$1 = tmp32983;
var inst_32922__$1 = tmp32984;
var inst_32923__$1 = inst_32936;
var state_32974__$1 = (function (){var statearr_32992 = state_32974;
(statearr_32992[(8)] = inst_32921__$1);

(statearr_32992[(9)] = inst_32922__$1);

(statearr_32992[(14)] = inst_32931);

(statearr_32992[(11)] = inst_32920__$1);

(statearr_32992[(12)] = inst_32923__$1);

return statearr_32992;
})();
var statearr_32993_34470 = state_32974__$1;
(statearr_32993_34470[(2)] = null);

(statearr_32993_34470[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (22))){
var state_32974__$1 = state_32974;
var statearr_32994_34471 = state_32974__$1;
(statearr_32994_34471[(2)] = null);

(statearr_32994_34471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (6))){
var inst_32903 = (state_32974[(13)]);
var inst_32918 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32903) : f.call(null,inst_32903));
var inst_32919 = cljs.core.seq(inst_32918);
var inst_32920 = inst_32919;
var inst_32921 = null;
var inst_32922 = (0);
var inst_32923 = (0);
var state_32974__$1 = (function (){var statearr_32995 = state_32974;
(statearr_32995[(8)] = inst_32921);

(statearr_32995[(9)] = inst_32922);

(statearr_32995[(11)] = inst_32920);

(statearr_32995[(12)] = inst_32923);

return statearr_32995;
})();
var statearr_32996_34472 = state_32974__$1;
(statearr_32996_34472[(2)] = null);

(statearr_32996_34472[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (17))){
var inst_32939 = (state_32974[(7)]);
var inst_32943 = cljs.core.chunk_first(inst_32939);
var inst_32945 = cljs.core.chunk_rest(inst_32939);
var inst_32946 = cljs.core.count(inst_32943);
var inst_32920 = inst_32945;
var inst_32921 = inst_32943;
var inst_32922 = inst_32946;
var inst_32923 = (0);
var state_32974__$1 = (function (){var statearr_32997 = state_32974;
(statearr_32997[(8)] = inst_32921);

(statearr_32997[(9)] = inst_32922);

(statearr_32997[(11)] = inst_32920);

(statearr_32997[(12)] = inst_32923);

return statearr_32997;
})();
var statearr_32998_34479 = state_32974__$1;
(statearr_32998_34479[(2)] = null);

(statearr_32998_34479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (3))){
var inst_32972 = (state_32974[(2)]);
var state_32974__$1 = state_32974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32974__$1,inst_32972);
} else {
if((state_val_32975 === (12))){
var inst_32960 = (state_32974[(2)]);
var state_32974__$1 = state_32974;
var statearr_33000_34481 = state_32974__$1;
(statearr_33000_34481[(2)] = inst_32960);

(statearr_33000_34481[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (2))){
var state_32974__$1 = state_32974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32974__$1,(4),in$);
} else {
if((state_val_32975 === (23))){
var inst_32968 = (state_32974[(2)]);
var state_32974__$1 = state_32974;
var statearr_33009_34484 = state_32974__$1;
(statearr_33009_34484[(2)] = inst_32968);

(statearr_33009_34484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (19))){
var inst_32955 = (state_32974[(2)]);
var state_32974__$1 = state_32974;
var statearr_33010_34489 = state_32974__$1;
(statearr_33010_34489[(2)] = inst_32955);

(statearr_33010_34489[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (11))){
var inst_32920 = (state_32974[(11)]);
var inst_32939 = (state_32974[(7)]);
var inst_32939__$1 = cljs.core.seq(inst_32920);
var state_32974__$1 = (function (){var statearr_33011 = state_32974;
(statearr_33011[(7)] = inst_32939__$1);

return statearr_33011;
})();
if(inst_32939__$1){
var statearr_33012_34492 = state_32974__$1;
(statearr_33012_34492[(1)] = (14));

} else {
var statearr_33013_34493 = state_32974__$1;
(statearr_33013_34493[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (9))){
var inst_32962 = (state_32974[(2)]);
var inst_32963 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32974__$1 = (function (){var statearr_33014 = state_32974;
(statearr_33014[(15)] = inst_32962);

return statearr_33014;
})();
if(cljs.core.truth_(inst_32963)){
var statearr_33015_34494 = state_32974__$1;
(statearr_33015_34494[(1)] = (21));

} else {
var statearr_33016_34495 = state_32974__$1;
(statearr_33016_34495[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (5))){
var inst_32907 = cljs.core.async.close_BANG_(out);
var state_32974__$1 = state_32974;
var statearr_33017_34496 = state_32974__$1;
(statearr_33017_34496[(2)] = inst_32907);

(statearr_33017_34496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (14))){
var inst_32939 = (state_32974[(7)]);
var inst_32941 = cljs.core.chunked_seq_QMARK_(inst_32939);
var state_32974__$1 = state_32974;
if(inst_32941){
var statearr_33021_34501 = state_32974__$1;
(statearr_33021_34501[(1)] = (17));

} else {
var statearr_33022_34502 = state_32974__$1;
(statearr_33022_34502[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (16))){
var inst_32958 = (state_32974[(2)]);
var state_32974__$1 = state_32974;
var statearr_33023_34505 = state_32974__$1;
(statearr_33023_34505[(2)] = inst_32958);

(statearr_33023_34505[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (10))){
var inst_32921 = (state_32974[(8)]);
var inst_32923 = (state_32974[(12)]);
var inst_32929 = cljs.core._nth(inst_32921,inst_32923);
var state_32974__$1 = state_32974;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32974__$1,(13),out,inst_32929);
} else {
if((state_val_32975 === (18))){
var inst_32939 = (state_32974[(7)]);
var inst_32949 = cljs.core.first(inst_32939);
var state_32974__$1 = state_32974;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32974__$1,(20),out,inst_32949);
} else {
if((state_val_32975 === (8))){
var inst_32922 = (state_32974[(9)]);
var inst_32923 = (state_32974[(12)]);
var inst_32926 = (inst_32923 < inst_32922);
var inst_32927 = inst_32926;
var state_32974__$1 = state_32974;
if(cljs.core.truth_(inst_32927)){
var statearr_33025_34509 = state_32974__$1;
(statearr_33025_34509[(1)] = (10));

} else {
var statearr_33026_34510 = state_32974__$1;
(statearr_33026_34510[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__30767__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30767__auto____0 = (function (){
var statearr_33027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33027[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30767__auto__);

(statearr_33027[(1)] = (1));

return statearr_33027;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30767__auto____1 = (function (state_32974){
while(true){
var ret_value__30768__auto__ = (function (){try{while(true){
var result__30769__auto__ = switch__30766__auto__(state_32974);
if(cljs.core.keyword_identical_QMARK_(result__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30769__auto__;
}
break;
}
}catch (e33028){var ex__30770__auto__ = e33028;
var statearr_33029_34511 = state_32974;
(statearr_33029_34511[(2)] = ex__30770__auto__);


if(cljs.core.seq((state_32974[(4)]))){
var statearr_33030_34512 = state_32974;
(statearr_33030_34512[(1)] = cljs.core.first((state_32974[(4)])));

} else {
throw ex__30770__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34513 = state_32974;
state_32974 = G__34513;
continue;
} else {
return ret_value__30768__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30767__auto__ = function(state_32974){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30767__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30767__auto____1.call(this,state_32974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30767__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30767__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30767__auto__;
})()
})();
var state__30949__auto__ = (function (){var statearr_33031 = f__30948__auto__();
(statearr_33031[(6)] = c__30947__auto__);

return statearr_33031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30949__auto__);
}));

return c__30947__auto__;
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
var G__33035 = arguments.length;
switch (G__33035) {
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
var G__33039 = arguments.length;
switch (G__33039) {
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
var c__30947__auto___34538 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30948__auto__ = (function (){var switch__30766__auto__ = (function (state_33065){
var state_val_33066 = (state_33065[(1)]);
if((state_val_33066 === (7))){
var inst_33060 = (state_33065[(2)]);
var state_33065__$1 = state_33065;
var statearr_33068_34540 = state_33065__$1;
(statearr_33068_34540[(2)] = inst_33060);

(statearr_33068_34540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33066 === (1))){
var inst_33042 = null;
var state_33065__$1 = (function (){var statearr_33070 = state_33065;
(statearr_33070[(7)] = inst_33042);

return statearr_33070;
})();
var statearr_33071_34541 = state_33065__$1;
(statearr_33071_34541[(2)] = null);

(statearr_33071_34541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33066 === (4))){
var inst_33045 = (state_33065[(8)]);
var inst_33045__$1 = (state_33065[(2)]);
var inst_33046 = (inst_33045__$1 == null);
var inst_33047 = cljs.core.not(inst_33046);
var state_33065__$1 = (function (){var statearr_33072 = state_33065;
(statearr_33072[(8)] = inst_33045__$1);

return statearr_33072;
})();
if(inst_33047){
var statearr_33073_34542 = state_33065__$1;
(statearr_33073_34542[(1)] = (5));

} else {
var statearr_33074_34543 = state_33065__$1;
(statearr_33074_34543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33066 === (6))){
var state_33065__$1 = state_33065;
var statearr_33075_34544 = state_33065__$1;
(statearr_33075_34544[(2)] = null);

(statearr_33075_34544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33066 === (3))){
var inst_33062 = (state_33065[(2)]);
var inst_33063 = cljs.core.async.close_BANG_(out);
var state_33065__$1 = (function (){var statearr_33076 = state_33065;
(statearr_33076[(9)] = inst_33062);

return statearr_33076;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33065__$1,inst_33063);
} else {
if((state_val_33066 === (2))){
var state_33065__$1 = state_33065;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33065__$1,(4),ch);
} else {
if((state_val_33066 === (11))){
var inst_33045 = (state_33065[(8)]);
var inst_33054 = (state_33065[(2)]);
var inst_33042 = inst_33045;
var state_33065__$1 = (function (){var statearr_33078 = state_33065;
(statearr_33078[(7)] = inst_33042);

(statearr_33078[(10)] = inst_33054);

return statearr_33078;
})();
var statearr_33079_34545 = state_33065__$1;
(statearr_33079_34545[(2)] = null);

(statearr_33079_34545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33066 === (9))){
var inst_33045 = (state_33065[(8)]);
var state_33065__$1 = state_33065;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33065__$1,(11),out,inst_33045);
} else {
if((state_val_33066 === (5))){
var inst_33042 = (state_33065[(7)]);
var inst_33045 = (state_33065[(8)]);
var inst_33049 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33045,inst_33042);
var state_33065__$1 = state_33065;
if(inst_33049){
var statearr_33081_34546 = state_33065__$1;
(statearr_33081_34546[(1)] = (8));

} else {
var statearr_33082_34547 = state_33065__$1;
(statearr_33082_34547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33066 === (10))){
var inst_33057 = (state_33065[(2)]);
var state_33065__$1 = state_33065;
var statearr_33084_34548 = state_33065__$1;
(statearr_33084_34548[(2)] = inst_33057);

(statearr_33084_34548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33066 === (8))){
var inst_33042 = (state_33065[(7)]);
var tmp33080 = inst_33042;
var inst_33042__$1 = tmp33080;
var state_33065__$1 = (function (){var statearr_33085 = state_33065;
(statearr_33085[(7)] = inst_33042__$1);

return statearr_33085;
})();
var statearr_33086_34549 = state_33065__$1;
(statearr_33086_34549[(2)] = null);

(statearr_33086_34549[(1)] = (2));


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
var cljs$core$async$state_machine__30767__auto__ = null;
var cljs$core$async$state_machine__30767__auto____0 = (function (){
var statearr_33088 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33088[(0)] = cljs$core$async$state_machine__30767__auto__);

(statearr_33088[(1)] = (1));

return statearr_33088;
});
var cljs$core$async$state_machine__30767__auto____1 = (function (state_33065){
while(true){
var ret_value__30768__auto__ = (function (){try{while(true){
var result__30769__auto__ = switch__30766__auto__(state_33065);
if(cljs.core.keyword_identical_QMARK_(result__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30769__auto__;
}
break;
}
}catch (e33089){var ex__30770__auto__ = e33089;
var statearr_33090_34550 = state_33065;
(statearr_33090_34550[(2)] = ex__30770__auto__);


if(cljs.core.seq((state_33065[(4)]))){
var statearr_33091_34551 = state_33065;
(statearr_33091_34551[(1)] = cljs.core.first((state_33065[(4)])));

} else {
throw ex__30770__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34552 = state_33065;
state_33065 = G__34552;
continue;
} else {
return ret_value__30768__auto__;
}
break;
}
});
cljs$core$async$state_machine__30767__auto__ = function(state_33065){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30767__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30767__auto____1.call(this,state_33065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30767__auto____0;
cljs$core$async$state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30767__auto____1;
return cljs$core$async$state_machine__30767__auto__;
})()
})();
var state__30949__auto__ = (function (){var statearr_33092 = f__30948__auto__();
(statearr_33092[(6)] = c__30947__auto___34538);

return statearr_33092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30949__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33096 = arguments.length;
switch (G__33096) {
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
var c__30947__auto___34554 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30948__auto__ = (function (){var switch__30766__auto__ = (function (state_33136){
var state_val_33137 = (state_33136[(1)]);
if((state_val_33137 === (7))){
var inst_33132 = (state_33136[(2)]);
var state_33136__$1 = state_33136;
var statearr_33138_34555 = state_33136__$1;
(statearr_33138_34555[(2)] = inst_33132);

(statearr_33138_34555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (1))){
var inst_33098 = (new Array(n));
var inst_33099 = inst_33098;
var inst_33100 = (0);
var state_33136__$1 = (function (){var statearr_33139 = state_33136;
(statearr_33139[(7)] = inst_33099);

(statearr_33139[(8)] = inst_33100);

return statearr_33139;
})();
var statearr_33140_34556 = state_33136__$1;
(statearr_33140_34556[(2)] = null);

(statearr_33140_34556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (4))){
var inst_33103 = (state_33136[(9)]);
var inst_33103__$1 = (state_33136[(2)]);
var inst_33104 = (inst_33103__$1 == null);
var inst_33105 = cljs.core.not(inst_33104);
var state_33136__$1 = (function (){var statearr_33141 = state_33136;
(statearr_33141[(9)] = inst_33103__$1);

return statearr_33141;
})();
if(inst_33105){
var statearr_33142_34557 = state_33136__$1;
(statearr_33142_34557[(1)] = (5));

} else {
var statearr_33143_34558 = state_33136__$1;
(statearr_33143_34558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (15))){
var inst_33126 = (state_33136[(2)]);
var state_33136__$1 = state_33136;
var statearr_33144_34559 = state_33136__$1;
(statearr_33144_34559[(2)] = inst_33126);

(statearr_33144_34559[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (13))){
var state_33136__$1 = state_33136;
var statearr_33145_34560 = state_33136__$1;
(statearr_33145_34560[(2)] = null);

(statearr_33145_34560[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (6))){
var inst_33100 = (state_33136[(8)]);
var inst_33122 = (inst_33100 > (0));
var state_33136__$1 = state_33136;
if(cljs.core.truth_(inst_33122)){
var statearr_33146_34561 = state_33136__$1;
(statearr_33146_34561[(1)] = (12));

} else {
var statearr_33147_34562 = state_33136__$1;
(statearr_33147_34562[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (3))){
var inst_33134 = (state_33136[(2)]);
var state_33136__$1 = state_33136;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33136__$1,inst_33134);
} else {
if((state_val_33137 === (12))){
var inst_33099 = (state_33136[(7)]);
var inst_33124 = cljs.core.vec(inst_33099);
var state_33136__$1 = state_33136;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33136__$1,(15),out,inst_33124);
} else {
if((state_val_33137 === (2))){
var state_33136__$1 = state_33136;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33136__$1,(4),ch);
} else {
if((state_val_33137 === (11))){
var inst_33115 = (state_33136[(2)]);
var inst_33117 = (new Array(n));
var inst_33099 = inst_33117;
var inst_33100 = (0);
var state_33136__$1 = (function (){var statearr_33150 = state_33136;
(statearr_33150[(10)] = inst_33115);

(statearr_33150[(7)] = inst_33099);

(statearr_33150[(8)] = inst_33100);

return statearr_33150;
})();
var statearr_33153_34563 = state_33136__$1;
(statearr_33153_34563[(2)] = null);

(statearr_33153_34563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (9))){
var inst_33099 = (state_33136[(7)]);
var inst_33113 = cljs.core.vec(inst_33099);
var state_33136__$1 = state_33136;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33136__$1,(11),out,inst_33113);
} else {
if((state_val_33137 === (5))){
var inst_33099 = (state_33136[(7)]);
var inst_33103 = (state_33136[(9)]);
var inst_33100 = (state_33136[(8)]);
var inst_33108 = (state_33136[(11)]);
var inst_33107 = (inst_33099[inst_33100] = inst_33103);
var inst_33108__$1 = (inst_33100 + (1));
var inst_33109 = (inst_33108__$1 < n);
var state_33136__$1 = (function (){var statearr_33154 = state_33136;
(statearr_33154[(12)] = inst_33107);

(statearr_33154[(11)] = inst_33108__$1);

return statearr_33154;
})();
if(cljs.core.truth_(inst_33109)){
var statearr_33156_34571 = state_33136__$1;
(statearr_33156_34571[(1)] = (8));

} else {
var statearr_33157_34572 = state_33136__$1;
(statearr_33157_34572[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (14))){
var inst_33129 = (state_33136[(2)]);
var inst_33130 = cljs.core.async.close_BANG_(out);
var state_33136__$1 = (function (){var statearr_33159 = state_33136;
(statearr_33159[(13)] = inst_33129);

return statearr_33159;
})();
var statearr_33160_34573 = state_33136__$1;
(statearr_33160_34573[(2)] = inst_33130);

(statearr_33160_34573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (10))){
var inst_33120 = (state_33136[(2)]);
var state_33136__$1 = state_33136;
var statearr_33162_34574 = state_33136__$1;
(statearr_33162_34574[(2)] = inst_33120);

(statearr_33162_34574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33137 === (8))){
var inst_33099 = (state_33136[(7)]);
var inst_33108 = (state_33136[(11)]);
var tmp33158 = inst_33099;
var inst_33099__$1 = tmp33158;
var inst_33100 = inst_33108;
var state_33136__$1 = (function (){var statearr_33163 = state_33136;
(statearr_33163[(7)] = inst_33099__$1);

(statearr_33163[(8)] = inst_33100);

return statearr_33163;
})();
var statearr_33164_34575 = state_33136__$1;
(statearr_33164_34575[(2)] = null);

(statearr_33164_34575[(1)] = (2));


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
var cljs$core$async$state_machine__30767__auto__ = null;
var cljs$core$async$state_machine__30767__auto____0 = (function (){
var statearr_33166 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33166[(0)] = cljs$core$async$state_machine__30767__auto__);

(statearr_33166[(1)] = (1));

return statearr_33166;
});
var cljs$core$async$state_machine__30767__auto____1 = (function (state_33136){
while(true){
var ret_value__30768__auto__ = (function (){try{while(true){
var result__30769__auto__ = switch__30766__auto__(state_33136);
if(cljs.core.keyword_identical_QMARK_(result__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30769__auto__;
}
break;
}
}catch (e33167){var ex__30770__auto__ = e33167;
var statearr_33168_34576 = state_33136;
(statearr_33168_34576[(2)] = ex__30770__auto__);


if(cljs.core.seq((state_33136[(4)]))){
var statearr_33169_34577 = state_33136;
(statearr_33169_34577[(1)] = cljs.core.first((state_33136[(4)])));

} else {
throw ex__30770__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34582 = state_33136;
state_33136 = G__34582;
continue;
} else {
return ret_value__30768__auto__;
}
break;
}
});
cljs$core$async$state_machine__30767__auto__ = function(state_33136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30767__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30767__auto____1.call(this,state_33136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30767__auto____0;
cljs$core$async$state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30767__auto____1;
return cljs$core$async$state_machine__30767__auto__;
})()
})();
var state__30949__auto__ = (function (){var statearr_33171 = f__30948__auto__();
(statearr_33171[(6)] = c__30947__auto___34554);

return statearr_33171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30949__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33174 = arguments.length;
switch (G__33174) {
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
var c__30947__auto___34584 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30948__auto__ = (function (){var switch__30766__auto__ = (function (state_33220){
var state_val_33221 = (state_33220[(1)]);
if((state_val_33221 === (7))){
var inst_33216 = (state_33220[(2)]);
var state_33220__$1 = state_33220;
var statearr_33222_34585 = state_33220__$1;
(statearr_33222_34585[(2)] = inst_33216);

(statearr_33222_34585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (1))){
var inst_33175 = [];
var inst_33176 = inst_33175;
var inst_33177 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33220__$1 = (function (){var statearr_33225 = state_33220;
(statearr_33225[(7)] = inst_33177);

(statearr_33225[(8)] = inst_33176);

return statearr_33225;
})();
var statearr_33226_34586 = state_33220__$1;
(statearr_33226_34586[(2)] = null);

(statearr_33226_34586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (4))){
var inst_33180 = (state_33220[(9)]);
var inst_33180__$1 = (state_33220[(2)]);
var inst_33181 = (inst_33180__$1 == null);
var inst_33182 = cljs.core.not(inst_33181);
var state_33220__$1 = (function (){var statearr_33227 = state_33220;
(statearr_33227[(9)] = inst_33180__$1);

return statearr_33227;
})();
if(inst_33182){
var statearr_33228_34587 = state_33220__$1;
(statearr_33228_34587[(1)] = (5));

} else {
var statearr_33229_34588 = state_33220__$1;
(statearr_33229_34588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (15))){
var inst_33210 = (state_33220[(2)]);
var state_33220__$1 = state_33220;
var statearr_33230_34589 = state_33220__$1;
(statearr_33230_34589[(2)] = inst_33210);

(statearr_33230_34589[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (13))){
var state_33220__$1 = state_33220;
var statearr_33231_34590 = state_33220__$1;
(statearr_33231_34590[(2)] = null);

(statearr_33231_34590[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (6))){
var inst_33176 = (state_33220[(8)]);
var inst_33205 = inst_33176.length;
var inst_33206 = (inst_33205 > (0));
var state_33220__$1 = state_33220;
if(cljs.core.truth_(inst_33206)){
var statearr_33232_34591 = state_33220__$1;
(statearr_33232_34591[(1)] = (12));

} else {
var statearr_33233_34592 = state_33220__$1;
(statearr_33233_34592[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (3))){
var inst_33218 = (state_33220[(2)]);
var state_33220__$1 = state_33220;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33220__$1,inst_33218);
} else {
if((state_val_33221 === (12))){
var inst_33176 = (state_33220[(8)]);
var inst_33208 = cljs.core.vec(inst_33176);
var state_33220__$1 = state_33220;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33220__$1,(15),out,inst_33208);
} else {
if((state_val_33221 === (2))){
var state_33220__$1 = state_33220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33220__$1,(4),ch);
} else {
if((state_val_33221 === (11))){
var inst_33184 = (state_33220[(10)]);
var inst_33180 = (state_33220[(9)]);
var inst_33198 = (state_33220[(2)]);
var inst_33199 = [];
var inst_33200 = inst_33199.push(inst_33180);
var inst_33176 = inst_33199;
var inst_33177 = inst_33184;
var state_33220__$1 = (function (){var statearr_33234 = state_33220;
(statearr_33234[(7)] = inst_33177);

(statearr_33234[(8)] = inst_33176);

(statearr_33234[(11)] = inst_33198);

(statearr_33234[(12)] = inst_33200);

return statearr_33234;
})();
var statearr_33235_34593 = state_33220__$1;
(statearr_33235_34593[(2)] = null);

(statearr_33235_34593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (9))){
var inst_33176 = (state_33220[(8)]);
var inst_33196 = cljs.core.vec(inst_33176);
var state_33220__$1 = state_33220;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33220__$1,(11),out,inst_33196);
} else {
if((state_val_33221 === (5))){
var inst_33177 = (state_33220[(7)]);
var inst_33184 = (state_33220[(10)]);
var inst_33180 = (state_33220[(9)]);
var inst_33184__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33180) : f.call(null,inst_33180));
var inst_33185 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33184__$1,inst_33177);
var inst_33186 = cljs.core.keyword_identical_QMARK_(inst_33177,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33187 = ((inst_33185) || (inst_33186));
var state_33220__$1 = (function (){var statearr_33236 = state_33220;
(statearr_33236[(10)] = inst_33184__$1);

return statearr_33236;
})();
if(cljs.core.truth_(inst_33187)){
var statearr_33237_34594 = state_33220__$1;
(statearr_33237_34594[(1)] = (8));

} else {
var statearr_33238_34595 = state_33220__$1;
(statearr_33238_34595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (14))){
var inst_33213 = (state_33220[(2)]);
var inst_33214 = cljs.core.async.close_BANG_(out);
var state_33220__$1 = (function (){var statearr_33240 = state_33220;
(statearr_33240[(13)] = inst_33213);

return statearr_33240;
})();
var statearr_33241_34596 = state_33220__$1;
(statearr_33241_34596[(2)] = inst_33214);

(statearr_33241_34596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (10))){
var inst_33203 = (state_33220[(2)]);
var state_33220__$1 = state_33220;
var statearr_33242_34597 = state_33220__$1;
(statearr_33242_34597[(2)] = inst_33203);

(statearr_33242_34597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33221 === (8))){
var inst_33176 = (state_33220[(8)]);
var inst_33184 = (state_33220[(10)]);
var inst_33180 = (state_33220[(9)]);
var inst_33192 = inst_33176.push(inst_33180);
var tmp33239 = inst_33176;
var inst_33176__$1 = tmp33239;
var inst_33177 = inst_33184;
var state_33220__$1 = (function (){var statearr_33243 = state_33220;
(statearr_33243[(7)] = inst_33177);

(statearr_33243[(14)] = inst_33192);

(statearr_33243[(8)] = inst_33176__$1);

return statearr_33243;
})();
var statearr_33244_34598 = state_33220__$1;
(statearr_33244_34598[(2)] = null);

(statearr_33244_34598[(1)] = (2));


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
var cljs$core$async$state_machine__30767__auto__ = null;
var cljs$core$async$state_machine__30767__auto____0 = (function (){
var statearr_33245 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33245[(0)] = cljs$core$async$state_machine__30767__auto__);

(statearr_33245[(1)] = (1));

return statearr_33245;
});
var cljs$core$async$state_machine__30767__auto____1 = (function (state_33220){
while(true){
var ret_value__30768__auto__ = (function (){try{while(true){
var result__30769__auto__ = switch__30766__auto__(state_33220);
if(cljs.core.keyword_identical_QMARK_(result__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30769__auto__;
}
break;
}
}catch (e33246){var ex__30770__auto__ = e33246;
var statearr_33247_34599 = state_33220;
(statearr_33247_34599[(2)] = ex__30770__auto__);


if(cljs.core.seq((state_33220[(4)]))){
var statearr_33248_34600 = state_33220;
(statearr_33248_34600[(1)] = cljs.core.first((state_33220[(4)])));

} else {
throw ex__30770__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34601 = state_33220;
state_33220 = G__34601;
continue;
} else {
return ret_value__30768__auto__;
}
break;
}
});
cljs$core$async$state_machine__30767__auto__ = function(state_33220){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30767__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30767__auto____1.call(this,state_33220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30767__auto____0;
cljs$core$async$state_machine__30767__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30767__auto____1;
return cljs$core$async$state_machine__30767__auto__;
})()
})();
var state__30949__auto__ = (function (){var statearr_33249 = f__30948__auto__();
(statearr_33249[(6)] = c__30947__auto___34584);

return statearr_33249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30949__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
