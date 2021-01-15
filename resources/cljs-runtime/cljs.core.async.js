goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30940 = arguments.length;
switch (G__30940) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30941 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30941 = (function (f,blockable,meta30942){
this.f = f;
this.blockable = blockable;
this.meta30942 = meta30942;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30943,meta30942__$1){
var self__ = this;
var _30943__$1 = this;
return (new cljs.core.async.t_cljs$core$async30941(self__.f,self__.blockable,meta30942__$1));
}));

(cljs.core.async.t_cljs$core$async30941.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30943){
var self__ = this;
var _30943__$1 = this;
return self__.meta30942;
}));

(cljs.core.async.t_cljs$core$async30941.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30941.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30941.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30941.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30941.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30942","meta30942",348540256,null)], null);
}));

(cljs.core.async.t_cljs$core$async30941.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30941.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30941");

(cljs.core.async.t_cljs$core$async30941.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30941");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30941.
 */
cljs.core.async.__GT_t_cljs$core$async30941 = (function cljs$core$async$__GT_t_cljs$core$async30941(f__$1,blockable__$1,meta30942){
return (new cljs.core.async.t_cljs$core$async30941(f__$1,blockable__$1,meta30942));
});

}

return (new cljs.core.async.t_cljs$core$async30941(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30977 = arguments.length;
switch (G__30977) {
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
var G__30999 = arguments.length;
switch (G__30999) {
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
var G__31001 = arguments.length;
switch (G__31001) {
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
var val_33273 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33273) : fn1.call(null,val_33273));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33273) : fn1.call(null,val_33273));
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
var G__31029 = arguments.length;
switch (G__31029) {
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
var n__4613__auto___33286 = n;
var x_33287 = (0);
while(true){
if((x_33287 < n__4613__auto___33286)){
(a[x_33287] = x_33287);

var G__33288 = (x_33287 + (1));
x_33287 = G__33288;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31034 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31034 = (function (flag,meta31035){
this.flag = flag;
this.meta31035 = meta31035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31036,meta31035__$1){
var self__ = this;
var _31036__$1 = this;
return (new cljs.core.async.t_cljs$core$async31034(self__.flag,meta31035__$1));
}));

(cljs.core.async.t_cljs$core$async31034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31036){
var self__ = this;
var _31036__$1 = this;
return self__.meta31035;
}));

(cljs.core.async.t_cljs$core$async31034.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31034.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31034.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31034.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31034.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31035","meta31035",-1745925041,null)], null);
}));

(cljs.core.async.t_cljs$core$async31034.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31034.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31034");

(cljs.core.async.t_cljs$core$async31034.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31034");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31034.
 */
cljs.core.async.__GT_t_cljs$core$async31034 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31034(flag__$1,meta31035){
return (new cljs.core.async.t_cljs$core$async31034(flag__$1,meta31035));
});

}

return (new cljs.core.async.t_cljs$core$async31034(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31038 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31038 = (function (flag,cb,meta31039){
this.flag = flag;
this.cb = cb;
this.meta31039 = meta31039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31040,meta31039__$1){
var self__ = this;
var _31040__$1 = this;
return (new cljs.core.async.t_cljs$core$async31038(self__.flag,self__.cb,meta31039__$1));
}));

(cljs.core.async.t_cljs$core$async31038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31040){
var self__ = this;
var _31040__$1 = this;
return self__.meta31039;
}));

(cljs.core.async.t_cljs$core$async31038.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31038.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31038.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31038.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31038.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31039","meta31039",-402019299,null)], null);
}));

(cljs.core.async.t_cljs$core$async31038.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31038.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31038");

(cljs.core.async.t_cljs$core$async31038.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31038");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31038.
 */
cljs.core.async.__GT_t_cljs$core$async31038 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31038(flag__$1,cb__$1,meta31039){
return (new cljs.core.async.t_cljs$core$async31038(flag__$1,cb__$1,meta31039));
});

}

return (new cljs.core.async.t_cljs$core$async31038(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31044_SHARP_){
var G__31046 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31044_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31046) : fret.call(null,G__31046));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31045_SHARP_){
var G__31050 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31045_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31050) : fret.call(null,G__31050));
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
var G__33314 = (i + (1));
i = G__33314;
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
var len__4736__auto___33315 = arguments.length;
var i__4737__auto___33316 = (0);
while(true){
if((i__4737__auto___33316 < len__4736__auto___33315)){
args__4742__auto__.push((arguments[i__4737__auto___33316]));

var G__33317 = (i__4737__auto___33316 + (1));
i__4737__auto___33316 = G__33317;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31053){
var map__31054 = p__31053;
var map__31054__$1 = (((((!((map__31054 == null))))?(((((map__31054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31054):map__31054);
var opts = map__31054__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31051){
var G__31052 = cljs.core.first(seq31051);
var seq31051__$1 = cljs.core.next(seq31051);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31052,seq31051__$1);
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
var G__31057 = arguments.length;
switch (G__31057) {
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
var c__30874__auto___33325 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30875__auto__ = (function (){var switch__30689__auto__ = (function (state_31101){
var state_val_31102 = (state_31101[(1)]);
if((state_val_31102 === (7))){
var inst_31097 = (state_31101[(2)]);
var state_31101__$1 = state_31101;
var statearr_31109_33326 = state_31101__$1;
(statearr_31109_33326[(2)] = inst_31097);

(statearr_31109_33326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (1))){
var state_31101__$1 = state_31101;
var statearr_31115_33327 = state_31101__$1;
(statearr_31115_33327[(2)] = null);

(statearr_31115_33327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (4))){
var inst_31072 = (state_31101[(7)]);
var inst_31072__$1 = (state_31101[(2)]);
var inst_31081 = (inst_31072__$1 == null);
var state_31101__$1 = (function (){var statearr_31116 = state_31101;
(statearr_31116[(7)] = inst_31072__$1);

return statearr_31116;
})();
if(cljs.core.truth_(inst_31081)){
var statearr_31117_33328 = state_31101__$1;
(statearr_31117_33328[(1)] = (5));

} else {
var statearr_31118_33329 = state_31101__$1;
(statearr_31118_33329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (13))){
var state_31101__$1 = state_31101;
var statearr_31119_33330 = state_31101__$1;
(statearr_31119_33330[(2)] = null);

(statearr_31119_33330[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (6))){
var inst_31072 = (state_31101[(7)]);
var state_31101__$1 = state_31101;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31101__$1,(11),to,inst_31072);
} else {
if((state_val_31102 === (3))){
var inst_31099 = (state_31101[(2)]);
var state_31101__$1 = state_31101;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31101__$1,inst_31099);
} else {
if((state_val_31102 === (12))){
var state_31101__$1 = state_31101;
var statearr_31137_33331 = state_31101__$1;
(statearr_31137_33331[(2)] = null);

(statearr_31137_33331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (2))){
var state_31101__$1 = state_31101;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31101__$1,(4),from);
} else {
if((state_val_31102 === (11))){
var inst_31090 = (state_31101[(2)]);
var state_31101__$1 = state_31101;
if(cljs.core.truth_(inst_31090)){
var statearr_31138_33332 = state_31101__$1;
(statearr_31138_33332[(1)] = (12));

} else {
var statearr_31139_33333 = state_31101__$1;
(statearr_31139_33333[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (9))){
var state_31101__$1 = state_31101;
var statearr_31140_33334 = state_31101__$1;
(statearr_31140_33334[(2)] = null);

(statearr_31140_33334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (5))){
var state_31101__$1 = state_31101;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31141_33335 = state_31101__$1;
(statearr_31141_33335[(1)] = (8));

} else {
var statearr_31142_33336 = state_31101__$1;
(statearr_31142_33336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (14))){
var inst_31095 = (state_31101[(2)]);
var state_31101__$1 = state_31101;
var statearr_31143_33337 = state_31101__$1;
(statearr_31143_33337[(2)] = inst_31095);

(statearr_31143_33337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (10))){
var inst_31087 = (state_31101[(2)]);
var state_31101__$1 = state_31101;
var statearr_31144_33341 = state_31101__$1;
(statearr_31144_33341[(2)] = inst_31087);

(statearr_31144_33341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31102 === (8))){
var inst_31084 = cljs.core.async.close_BANG_(to);
var state_31101__$1 = state_31101;
var statearr_31145_33342 = state_31101__$1;
(statearr_31145_33342[(2)] = inst_31084);

(statearr_31145_33342[(1)] = (10));


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
var cljs$core$async$state_machine__30690__auto__ = null;
var cljs$core$async$state_machine__30690__auto____0 = (function (){
var statearr_31146 = [null,null,null,null,null,null,null,null];
(statearr_31146[(0)] = cljs$core$async$state_machine__30690__auto__);

(statearr_31146[(1)] = (1));

return statearr_31146;
});
var cljs$core$async$state_machine__30690__auto____1 = (function (state_31101){
while(true){
var ret_value__30691__auto__ = (function (){try{while(true){
var result__30692__auto__ = switch__30689__auto__(state_31101);
if(cljs.core.keyword_identical_QMARK_(result__30692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30692__auto__;
}
break;
}
}catch (e31147){var ex__30693__auto__ = e31147;
var statearr_31148_33343 = state_31101;
(statearr_31148_33343[(2)] = ex__30693__auto__);


if(cljs.core.seq((state_31101[(4)]))){
var statearr_31149_33344 = state_31101;
(statearr_31149_33344[(1)] = cljs.core.first((state_31101[(4)])));

} else {
throw ex__30693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33345 = state_31101;
state_31101 = G__33345;
continue;
} else {
return ret_value__30691__auto__;
}
break;
}
});
cljs$core$async$state_machine__30690__auto__ = function(state_31101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30690__auto____1.call(this,state_31101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30690__auto____0;
cljs$core$async$state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30690__auto____1;
return cljs$core$async$state_machine__30690__auto__;
})()
})();
var state__30876__auto__ = (function (){var statearr_31150 = f__30875__auto__();
(statearr_31150[(6)] = c__30874__auto___33325);

return statearr_31150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30876__auto__);
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
var process = (function (p__31153){
var vec__31154 = p__31153;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31154,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31154,(1),null);
var job = vec__31154;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30874__auto___33346 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30875__auto__ = (function (){var switch__30689__auto__ = (function (state_31161){
var state_val_31162 = (state_31161[(1)]);
if((state_val_31162 === (1))){
var state_31161__$1 = state_31161;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31161__$1,(2),res,v);
} else {
if((state_val_31162 === (2))){
var inst_31158 = (state_31161[(2)]);
var inst_31159 = cljs.core.async.close_BANG_(res);
var state_31161__$1 = (function (){var statearr_31168 = state_31161;
(statearr_31168[(7)] = inst_31158);

return statearr_31168;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31161__$1,inst_31159);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30690__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30690__auto____0 = (function (){
var statearr_31169 = [null,null,null,null,null,null,null,null];
(statearr_31169[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30690__auto__);

(statearr_31169[(1)] = (1));

return statearr_31169;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30690__auto____1 = (function (state_31161){
while(true){
var ret_value__30691__auto__ = (function (){try{while(true){
var result__30692__auto__ = switch__30689__auto__(state_31161);
if(cljs.core.keyword_identical_QMARK_(result__30692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30692__auto__;
}
break;
}
}catch (e31170){var ex__30693__auto__ = e31170;
var statearr_31171_33363 = state_31161;
(statearr_31171_33363[(2)] = ex__30693__auto__);


if(cljs.core.seq((state_31161[(4)]))){
var statearr_31172_33365 = state_31161;
(statearr_31172_33365[(1)] = cljs.core.first((state_31161[(4)])));

} else {
throw ex__30693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33366 = state_31161;
state_31161 = G__33366;
continue;
} else {
return ret_value__30691__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30690__auto__ = function(state_31161){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30690__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30690__auto____1.call(this,state_31161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30690__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30690__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30690__auto__;
})()
})();
var state__30876__auto__ = (function (){var statearr_31173 = f__30875__auto__();
(statearr_31173[(6)] = c__30874__auto___33346);

return statearr_31173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30876__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31174){
var vec__31175 = p__31174;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31175,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31175,(1),null);
var job = vec__31175;
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
var n__4613__auto___33368 = n;
var __33369 = (0);
while(true){
if((__33369 < n__4613__auto___33368)){
var G__31179_33370 = type;
var G__31179_33371__$1 = (((G__31179_33370 instanceof cljs.core.Keyword))?G__31179_33370.fqn:null);
switch (G__31179_33371__$1) {
case "compute":
var c__30874__auto___33373 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33369,c__30874__auto___33373,G__31179_33370,G__31179_33371__$1,n__4613__auto___33368,jobs,results,process,async){
return (function (){
var f__30875__auto__ = (function (){var switch__30689__auto__ = ((function (__33369,c__30874__auto___33373,G__31179_33370,G__31179_33371__$1,n__4613__auto___33368,jobs,results,process,async){
return (function (state_31192){
var state_val_31193 = (state_31192[(1)]);
if((state_val_31193 === (1))){
var state_31192__$1 = state_31192;
var statearr_31194_33374 = state_31192__$1;
(statearr_31194_33374[(2)] = null);

(statearr_31194_33374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31193 === (2))){
var state_31192__$1 = state_31192;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31192__$1,(4),jobs);
} else {
if((state_val_31193 === (3))){
var inst_31190 = (state_31192[(2)]);
var state_31192__$1 = state_31192;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31192__$1,inst_31190);
} else {
if((state_val_31193 === (4))){
var inst_31182 = (state_31192[(2)]);
var inst_31183 = process(inst_31182);
var state_31192__$1 = state_31192;
if(cljs.core.truth_(inst_31183)){
var statearr_31195_33380 = state_31192__$1;
(statearr_31195_33380[(1)] = (5));

} else {
var statearr_31196_33381 = state_31192__$1;
(statearr_31196_33381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31193 === (5))){
var state_31192__$1 = state_31192;
var statearr_31197_33382 = state_31192__$1;
(statearr_31197_33382[(2)] = null);

(statearr_31197_33382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31193 === (6))){
var state_31192__$1 = state_31192;
var statearr_31198_33383 = state_31192__$1;
(statearr_31198_33383[(2)] = null);

(statearr_31198_33383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31193 === (7))){
var inst_31188 = (state_31192[(2)]);
var state_31192__$1 = state_31192;
var statearr_31199_33384 = state_31192__$1;
(statearr_31199_33384[(2)] = inst_31188);

(statearr_31199_33384[(1)] = (3));


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
});})(__33369,c__30874__auto___33373,G__31179_33370,G__31179_33371__$1,n__4613__auto___33368,jobs,results,process,async))
;
return ((function (__33369,switch__30689__auto__,c__30874__auto___33373,G__31179_33370,G__31179_33371__$1,n__4613__auto___33368,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30690__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30690__auto____0 = (function (){
var statearr_31200 = [null,null,null,null,null,null,null];
(statearr_31200[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30690__auto__);

(statearr_31200[(1)] = (1));

return statearr_31200;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30690__auto____1 = (function (state_31192){
while(true){
var ret_value__30691__auto__ = (function (){try{while(true){
var result__30692__auto__ = switch__30689__auto__(state_31192);
if(cljs.core.keyword_identical_QMARK_(result__30692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30692__auto__;
}
break;
}
}catch (e31201){var ex__30693__auto__ = e31201;
var statearr_31202_33385 = state_31192;
(statearr_31202_33385[(2)] = ex__30693__auto__);


if(cljs.core.seq((state_31192[(4)]))){
var statearr_31203_33386 = state_31192;
(statearr_31203_33386[(1)] = cljs.core.first((state_31192[(4)])));

} else {
throw ex__30693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33387 = state_31192;
state_31192 = G__33387;
continue;
} else {
return ret_value__30691__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30690__auto__ = function(state_31192){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30690__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30690__auto____1.call(this,state_31192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30690__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30690__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30690__auto__;
})()
;})(__33369,switch__30689__auto__,c__30874__auto___33373,G__31179_33370,G__31179_33371__$1,n__4613__auto___33368,jobs,results,process,async))
})();
var state__30876__auto__ = (function (){var statearr_31204 = f__30875__auto__();
(statearr_31204[(6)] = c__30874__auto___33373);

return statearr_31204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30876__auto__);
});})(__33369,c__30874__auto___33373,G__31179_33370,G__31179_33371__$1,n__4613__auto___33368,jobs,results,process,async))
);


break;
case "async":
var c__30874__auto___33405 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33369,c__30874__auto___33405,G__31179_33370,G__31179_33371__$1,n__4613__auto___33368,jobs,results,process,async){
return (function (){
var f__30875__auto__ = (function (){var switch__30689__auto__ = ((function (__33369,c__30874__auto___33405,G__31179_33370,G__31179_33371__$1,n__4613__auto___33368,jobs,results,process,async){
return (function (state_31217){
var state_val_31218 = (state_31217[(1)]);
if((state_val_31218 === (1))){
var state_31217__$1 = state_31217;
var statearr_31219_33406 = state_31217__$1;
(statearr_31219_33406[(2)] = null);

(statearr_31219_33406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31218 === (2))){
var state_31217__$1 = state_31217;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31217__$1,(4),jobs);
} else {
if((state_val_31218 === (3))){
var inst_31215 = (state_31217[(2)]);
var state_31217__$1 = state_31217;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31217__$1,inst_31215);
} else {
if((state_val_31218 === (4))){
var inst_31207 = (state_31217[(2)]);
var inst_31208 = async(inst_31207);
var state_31217__$1 = state_31217;
if(cljs.core.truth_(inst_31208)){
var statearr_31220_33407 = state_31217__$1;
(statearr_31220_33407[(1)] = (5));

} else {
var statearr_31221_33408 = state_31217__$1;
(statearr_31221_33408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31218 === (5))){
var state_31217__$1 = state_31217;
var statearr_31222_33409 = state_31217__$1;
(statearr_31222_33409[(2)] = null);

(statearr_31222_33409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31218 === (6))){
var state_31217__$1 = state_31217;
var statearr_31262_33410 = state_31217__$1;
(statearr_31262_33410[(2)] = null);

(statearr_31262_33410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31218 === (7))){
var inst_31213 = (state_31217[(2)]);
var state_31217__$1 = state_31217;
var statearr_31263_33411 = state_31217__$1;
(statearr_31263_33411[(2)] = inst_31213);

(statearr_31263_33411[(1)] = (3));


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
});})(__33369,c__30874__auto___33405,G__31179_33370,G__31179_33371__$1,n__4613__auto___33368,jobs,results,process,async))
;
return ((function (__33369,switch__30689__auto__,c__30874__auto___33405,G__31179_33370,G__31179_33371__$1,n__4613__auto___33368,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30690__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30690__auto____0 = (function (){
var statearr_31264 = [null,null,null,null,null,null,null];
(statearr_31264[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30690__auto__);

(statearr_31264[(1)] = (1));

return statearr_31264;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30690__auto____1 = (function (state_31217){
while(true){
var ret_value__30691__auto__ = (function (){try{while(true){
var result__30692__auto__ = switch__30689__auto__(state_31217);
if(cljs.core.keyword_identical_QMARK_(result__30692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30692__auto__;
}
break;
}
}catch (e31265){var ex__30693__auto__ = e31265;
var statearr_31266_33412 = state_31217;
(statearr_31266_33412[(2)] = ex__30693__auto__);


if(cljs.core.seq((state_31217[(4)]))){
var statearr_31267_33432 = state_31217;
(statearr_31267_33432[(1)] = cljs.core.first((state_31217[(4)])));

} else {
throw ex__30693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33434 = state_31217;
state_31217 = G__33434;
continue;
} else {
return ret_value__30691__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30690__auto__ = function(state_31217){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30690__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30690__auto____1.call(this,state_31217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30690__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30690__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30690__auto__;
})()
;})(__33369,switch__30689__auto__,c__30874__auto___33405,G__31179_33370,G__31179_33371__$1,n__4613__auto___33368,jobs,results,process,async))
})();
var state__30876__auto__ = (function (){var statearr_31268 = f__30875__auto__();
(statearr_31268[(6)] = c__30874__auto___33405);

return statearr_31268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30876__auto__);
});})(__33369,c__30874__auto___33405,G__31179_33370,G__31179_33371__$1,n__4613__auto___33368,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31179_33371__$1)].join('')));

}

var G__33435 = (__33369 + (1));
__33369 = G__33435;
continue;
} else {
}
break;
}

var c__30874__auto___33436 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30875__auto__ = (function (){var switch__30689__auto__ = (function (state_31293){
var state_val_31294 = (state_31293[(1)]);
if((state_val_31294 === (7))){
var inst_31289 = (state_31293[(2)]);
var state_31293__$1 = state_31293;
var statearr_31295_33437 = state_31293__$1;
(statearr_31295_33437[(2)] = inst_31289);

(statearr_31295_33437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31294 === (1))){
var state_31293__$1 = state_31293;
var statearr_31296_33438 = state_31293__$1;
(statearr_31296_33438[(2)] = null);

(statearr_31296_33438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31294 === (4))){
var inst_31274 = (state_31293[(7)]);
var inst_31274__$1 = (state_31293[(2)]);
var inst_31275 = (inst_31274__$1 == null);
var state_31293__$1 = (function (){var statearr_31297 = state_31293;
(statearr_31297[(7)] = inst_31274__$1);

return statearr_31297;
})();
if(cljs.core.truth_(inst_31275)){
var statearr_31298_33439 = state_31293__$1;
(statearr_31298_33439[(1)] = (5));

} else {
var statearr_31299_33440 = state_31293__$1;
(statearr_31299_33440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31294 === (6))){
var inst_31279 = (state_31293[(8)]);
var inst_31274 = (state_31293[(7)]);
var inst_31279__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31280 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31281 = [inst_31274,inst_31279__$1];
var inst_31282 = (new cljs.core.PersistentVector(null,2,(5),inst_31280,inst_31281,null));
var state_31293__$1 = (function (){var statearr_31300 = state_31293;
(statearr_31300[(8)] = inst_31279__$1);

return statearr_31300;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31293__$1,(8),jobs,inst_31282);
} else {
if((state_val_31294 === (3))){
var inst_31291 = (state_31293[(2)]);
var state_31293__$1 = state_31293;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31293__$1,inst_31291);
} else {
if((state_val_31294 === (2))){
var state_31293__$1 = state_31293;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31293__$1,(4),from);
} else {
if((state_val_31294 === (9))){
var inst_31286 = (state_31293[(2)]);
var state_31293__$1 = (function (){var statearr_31301 = state_31293;
(statearr_31301[(9)] = inst_31286);

return statearr_31301;
})();
var statearr_31302_33444 = state_31293__$1;
(statearr_31302_33444[(2)] = null);

(statearr_31302_33444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31294 === (5))){
var inst_31277 = cljs.core.async.close_BANG_(jobs);
var state_31293__$1 = state_31293;
var statearr_31303_33445 = state_31293__$1;
(statearr_31303_33445[(2)] = inst_31277);

(statearr_31303_33445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31294 === (8))){
var inst_31279 = (state_31293[(8)]);
var inst_31284 = (state_31293[(2)]);
var state_31293__$1 = (function (){var statearr_31305 = state_31293;
(statearr_31305[(10)] = inst_31284);

return statearr_31305;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31293__$1,(9),results,inst_31279);
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
var cljs$core$async$pipeline_STAR__$_state_machine__30690__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30690__auto____0 = (function (){
var statearr_31306 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31306[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30690__auto__);

(statearr_31306[(1)] = (1));

return statearr_31306;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30690__auto____1 = (function (state_31293){
while(true){
var ret_value__30691__auto__ = (function (){try{while(true){
var result__30692__auto__ = switch__30689__auto__(state_31293);
if(cljs.core.keyword_identical_QMARK_(result__30692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30692__auto__;
}
break;
}
}catch (e31307){var ex__30693__auto__ = e31307;
var statearr_31308_33446 = state_31293;
(statearr_31308_33446[(2)] = ex__30693__auto__);


if(cljs.core.seq((state_31293[(4)]))){
var statearr_31309_33448 = state_31293;
(statearr_31309_33448[(1)] = cljs.core.first((state_31293[(4)])));

} else {
throw ex__30693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33449 = state_31293;
state_31293 = G__33449;
continue;
} else {
return ret_value__30691__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30690__auto__ = function(state_31293){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30690__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30690__auto____1.call(this,state_31293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30690__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30690__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30690__auto__;
})()
})();
var state__30876__auto__ = (function (){var statearr_31312 = f__30875__auto__();
(statearr_31312[(6)] = c__30874__auto___33436);

return statearr_31312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30876__auto__);
}));


var c__30874__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30875__auto__ = (function (){var switch__30689__auto__ = (function (state_31360){
var state_val_31361 = (state_31360[(1)]);
if((state_val_31361 === (7))){
var inst_31356 = (state_31360[(2)]);
var state_31360__$1 = state_31360;
var statearr_31364_33452 = state_31360__$1;
(statearr_31364_33452[(2)] = inst_31356);

(statearr_31364_33452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (20))){
var state_31360__$1 = state_31360;
var statearr_31365_33453 = state_31360__$1;
(statearr_31365_33453[(2)] = null);

(statearr_31365_33453[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (1))){
var state_31360__$1 = state_31360;
var statearr_31366_33454 = state_31360__$1;
(statearr_31366_33454[(2)] = null);

(statearr_31366_33454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (4))){
var inst_31316 = (state_31360[(7)]);
var inst_31316__$1 = (state_31360[(2)]);
var inst_31317 = (inst_31316__$1 == null);
var state_31360__$1 = (function (){var statearr_31370 = state_31360;
(statearr_31370[(7)] = inst_31316__$1);

return statearr_31370;
})();
if(cljs.core.truth_(inst_31317)){
var statearr_31371_33461 = state_31360__$1;
(statearr_31371_33461[(1)] = (5));

} else {
var statearr_31372_33462 = state_31360__$1;
(statearr_31372_33462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (15))){
var inst_31329 = (state_31360[(8)]);
var state_31360__$1 = state_31360;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31360__$1,(18),to,inst_31329);
} else {
if((state_val_31361 === (21))){
var inst_31351 = (state_31360[(2)]);
var state_31360__$1 = state_31360;
var statearr_31373_33463 = state_31360__$1;
(statearr_31373_33463[(2)] = inst_31351);

(statearr_31373_33463[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (13))){
var inst_31353 = (state_31360[(2)]);
var state_31360__$1 = (function (){var statearr_31374 = state_31360;
(statearr_31374[(9)] = inst_31353);

return statearr_31374;
})();
var statearr_31375_33464 = state_31360__$1;
(statearr_31375_33464[(2)] = null);

(statearr_31375_33464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (6))){
var inst_31316 = (state_31360[(7)]);
var state_31360__$1 = state_31360;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31360__$1,(11),inst_31316);
} else {
if((state_val_31361 === (17))){
var inst_31346 = (state_31360[(2)]);
var state_31360__$1 = state_31360;
if(cljs.core.truth_(inst_31346)){
var statearr_31376_33465 = state_31360__$1;
(statearr_31376_33465[(1)] = (19));

} else {
var statearr_31377_33466 = state_31360__$1;
(statearr_31377_33466[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (3))){
var inst_31358 = (state_31360[(2)]);
var state_31360__$1 = state_31360;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31360__$1,inst_31358);
} else {
if((state_val_31361 === (12))){
var inst_31326 = (state_31360[(10)]);
var state_31360__$1 = state_31360;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31360__$1,(14),inst_31326);
} else {
if((state_val_31361 === (2))){
var state_31360__$1 = state_31360;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31360__$1,(4),results);
} else {
if((state_val_31361 === (19))){
var state_31360__$1 = state_31360;
var statearr_31378_33467 = state_31360__$1;
(statearr_31378_33467[(2)] = null);

(statearr_31378_33467[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (11))){
var inst_31326 = (state_31360[(2)]);
var state_31360__$1 = (function (){var statearr_31379 = state_31360;
(statearr_31379[(10)] = inst_31326);

return statearr_31379;
})();
var statearr_31380_33468 = state_31360__$1;
(statearr_31380_33468[(2)] = null);

(statearr_31380_33468[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (9))){
var state_31360__$1 = state_31360;
var statearr_31381_33469 = state_31360__$1;
(statearr_31381_33469[(2)] = null);

(statearr_31381_33469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (5))){
var state_31360__$1 = state_31360;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31385_33470 = state_31360__$1;
(statearr_31385_33470[(1)] = (8));

} else {
var statearr_31386_33471 = state_31360__$1;
(statearr_31386_33471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (14))){
var inst_31329 = (state_31360[(8)]);
var inst_31329__$1 = (state_31360[(2)]);
var inst_31330 = (inst_31329__$1 == null);
var inst_31331 = cljs.core.not(inst_31330);
var state_31360__$1 = (function (){var statearr_31387 = state_31360;
(statearr_31387[(8)] = inst_31329__$1);

return statearr_31387;
})();
if(inst_31331){
var statearr_31388_33472 = state_31360__$1;
(statearr_31388_33472[(1)] = (15));

} else {
var statearr_31389_33473 = state_31360__$1;
(statearr_31389_33473[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (16))){
var state_31360__$1 = state_31360;
var statearr_31390_33474 = state_31360__$1;
(statearr_31390_33474[(2)] = false);

(statearr_31390_33474[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (10))){
var inst_31323 = (state_31360[(2)]);
var state_31360__$1 = state_31360;
var statearr_31391_33475 = state_31360__$1;
(statearr_31391_33475[(2)] = inst_31323);

(statearr_31391_33475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (18))){
var inst_31343 = (state_31360[(2)]);
var state_31360__$1 = state_31360;
var statearr_31392_33476 = state_31360__$1;
(statearr_31392_33476[(2)] = inst_31343);

(statearr_31392_33476[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31361 === (8))){
var inst_31320 = cljs.core.async.close_BANG_(to);
var state_31360__$1 = state_31360;
var statearr_31393_33477 = state_31360__$1;
(statearr_31393_33477[(2)] = inst_31320);

(statearr_31393_33477[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__30690__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30690__auto____0 = (function (){
var statearr_31394 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31394[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30690__auto__);

(statearr_31394[(1)] = (1));

return statearr_31394;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30690__auto____1 = (function (state_31360){
while(true){
var ret_value__30691__auto__ = (function (){try{while(true){
var result__30692__auto__ = switch__30689__auto__(state_31360);
if(cljs.core.keyword_identical_QMARK_(result__30692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30692__auto__;
}
break;
}
}catch (e31395){var ex__30693__auto__ = e31395;
var statearr_31404_33487 = state_31360;
(statearr_31404_33487[(2)] = ex__30693__auto__);


if(cljs.core.seq((state_31360[(4)]))){
var statearr_31405_33488 = state_31360;
(statearr_31405_33488[(1)] = cljs.core.first((state_31360[(4)])));

} else {
throw ex__30693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33489 = state_31360;
state_31360 = G__33489;
continue;
} else {
return ret_value__30691__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30690__auto__ = function(state_31360){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30690__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30690__auto____1.call(this,state_31360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30690__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30690__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30690__auto__;
})()
})();
var state__30876__auto__ = (function (){var statearr_31406 = f__30875__auto__();
(statearr_31406[(6)] = c__30874__auto__);

return statearr_31406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30876__auto__);
}));

return c__30874__auto__;
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
var G__31412 = arguments.length;
switch (G__31412) {
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
var G__31422 = arguments.length;
switch (G__31422) {
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
var G__31424 = arguments.length;
switch (G__31424) {
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
var c__30874__auto___33497 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30875__auto__ = (function (){var switch__30689__auto__ = (function (state_31450){
var state_val_31451 = (state_31450[(1)]);
if((state_val_31451 === (7))){
var inst_31446 = (state_31450[(2)]);
var state_31450__$1 = state_31450;
var statearr_31455_33499 = state_31450__$1;
(statearr_31455_33499[(2)] = inst_31446);

(statearr_31455_33499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31451 === (1))){
var state_31450__$1 = state_31450;
var statearr_31456_33500 = state_31450__$1;
(statearr_31456_33500[(2)] = null);

(statearr_31456_33500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31451 === (4))){
var inst_31427 = (state_31450[(7)]);
var inst_31427__$1 = (state_31450[(2)]);
var inst_31428 = (inst_31427__$1 == null);
var state_31450__$1 = (function (){var statearr_31457 = state_31450;
(statearr_31457[(7)] = inst_31427__$1);

return statearr_31457;
})();
if(cljs.core.truth_(inst_31428)){
var statearr_31458_33502 = state_31450__$1;
(statearr_31458_33502[(1)] = (5));

} else {
var statearr_31459_33504 = state_31450__$1;
(statearr_31459_33504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31451 === (13))){
var state_31450__$1 = state_31450;
var statearr_31460_33505 = state_31450__$1;
(statearr_31460_33505[(2)] = null);

(statearr_31460_33505[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31451 === (6))){
var inst_31427 = (state_31450[(7)]);
var inst_31433 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31427) : p.call(null,inst_31427));
var state_31450__$1 = state_31450;
if(cljs.core.truth_(inst_31433)){
var statearr_31461_33506 = state_31450__$1;
(statearr_31461_33506[(1)] = (9));

} else {
var statearr_31462_33507 = state_31450__$1;
(statearr_31462_33507[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31451 === (3))){
var inst_31448 = (state_31450[(2)]);
var state_31450__$1 = state_31450;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31450__$1,inst_31448);
} else {
if((state_val_31451 === (12))){
var state_31450__$1 = state_31450;
var statearr_31463_33508 = state_31450__$1;
(statearr_31463_33508[(2)] = null);

(statearr_31463_33508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31451 === (2))){
var state_31450__$1 = state_31450;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31450__$1,(4),ch);
} else {
if((state_val_31451 === (11))){
var inst_31427 = (state_31450[(7)]);
var inst_31437 = (state_31450[(2)]);
var state_31450__$1 = state_31450;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31450__$1,(8),inst_31437,inst_31427);
} else {
if((state_val_31451 === (9))){
var state_31450__$1 = state_31450;
var statearr_31470_33509 = state_31450__$1;
(statearr_31470_33509[(2)] = tc);

(statearr_31470_33509[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31451 === (5))){
var inst_31430 = cljs.core.async.close_BANG_(tc);
var inst_31431 = cljs.core.async.close_BANG_(fc);
var state_31450__$1 = (function (){var statearr_31471 = state_31450;
(statearr_31471[(8)] = inst_31430);

return statearr_31471;
})();
var statearr_31472_33510 = state_31450__$1;
(statearr_31472_33510[(2)] = inst_31431);

(statearr_31472_33510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31451 === (14))){
var inst_31444 = (state_31450[(2)]);
var state_31450__$1 = state_31450;
var statearr_31477_33511 = state_31450__$1;
(statearr_31477_33511[(2)] = inst_31444);

(statearr_31477_33511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31451 === (10))){
var state_31450__$1 = state_31450;
var statearr_31478_33512 = state_31450__$1;
(statearr_31478_33512[(2)] = fc);

(statearr_31478_33512[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31451 === (8))){
var inst_31439 = (state_31450[(2)]);
var state_31450__$1 = state_31450;
if(cljs.core.truth_(inst_31439)){
var statearr_31484_33513 = state_31450__$1;
(statearr_31484_33513[(1)] = (12));

} else {
var statearr_31485_33514 = state_31450__$1;
(statearr_31485_33514[(1)] = (13));

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
var cljs$core$async$state_machine__30690__auto__ = null;
var cljs$core$async$state_machine__30690__auto____0 = (function (){
var statearr_31486 = [null,null,null,null,null,null,null,null,null];
(statearr_31486[(0)] = cljs$core$async$state_machine__30690__auto__);

(statearr_31486[(1)] = (1));

return statearr_31486;
});
var cljs$core$async$state_machine__30690__auto____1 = (function (state_31450){
while(true){
var ret_value__30691__auto__ = (function (){try{while(true){
var result__30692__auto__ = switch__30689__auto__(state_31450);
if(cljs.core.keyword_identical_QMARK_(result__30692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30692__auto__;
}
break;
}
}catch (e31487){var ex__30693__auto__ = e31487;
var statearr_31488_33515 = state_31450;
(statearr_31488_33515[(2)] = ex__30693__auto__);


if(cljs.core.seq((state_31450[(4)]))){
var statearr_31491_33516 = state_31450;
(statearr_31491_33516[(1)] = cljs.core.first((state_31450[(4)])));

} else {
throw ex__30693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33517 = state_31450;
state_31450 = G__33517;
continue;
} else {
return ret_value__30691__auto__;
}
break;
}
});
cljs$core$async$state_machine__30690__auto__ = function(state_31450){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30690__auto____1.call(this,state_31450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30690__auto____0;
cljs$core$async$state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30690__auto____1;
return cljs$core$async$state_machine__30690__auto__;
})()
})();
var state__30876__auto__ = (function (){var statearr_31496 = f__30875__auto__();
(statearr_31496[(6)] = c__30874__auto___33497);

return statearr_31496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30876__auto__);
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
var c__30874__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30875__auto__ = (function (){var switch__30689__auto__ = (function (state_31518){
var state_val_31519 = (state_31518[(1)]);
if((state_val_31519 === (7))){
var inst_31514 = (state_31518[(2)]);
var state_31518__$1 = state_31518;
var statearr_31520_33523 = state_31518__$1;
(statearr_31520_33523[(2)] = inst_31514);

(statearr_31520_33523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (1))){
var inst_31497 = init;
var inst_31498 = inst_31497;
var state_31518__$1 = (function (){var statearr_31521 = state_31518;
(statearr_31521[(7)] = inst_31498);

return statearr_31521;
})();
var statearr_31522_33525 = state_31518__$1;
(statearr_31522_33525[(2)] = null);

(statearr_31522_33525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (4))){
var inst_31501 = (state_31518[(8)]);
var inst_31501__$1 = (state_31518[(2)]);
var inst_31502 = (inst_31501__$1 == null);
var state_31518__$1 = (function (){var statearr_31523 = state_31518;
(statearr_31523[(8)] = inst_31501__$1);

return statearr_31523;
})();
if(cljs.core.truth_(inst_31502)){
var statearr_31524_33526 = state_31518__$1;
(statearr_31524_33526[(1)] = (5));

} else {
var statearr_31525_33527 = state_31518__$1;
(statearr_31525_33527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (6))){
var inst_31505 = (state_31518[(9)]);
var inst_31501 = (state_31518[(8)]);
var inst_31498 = (state_31518[(7)]);
var inst_31505__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31498,inst_31501) : f.call(null,inst_31498,inst_31501));
var inst_31506 = cljs.core.reduced_QMARK_(inst_31505__$1);
var state_31518__$1 = (function (){var statearr_31527 = state_31518;
(statearr_31527[(9)] = inst_31505__$1);

return statearr_31527;
})();
if(inst_31506){
var statearr_31528_33532 = state_31518__$1;
(statearr_31528_33532[(1)] = (8));

} else {
var statearr_31529_33533 = state_31518__$1;
(statearr_31529_33533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (3))){
var inst_31516 = (state_31518[(2)]);
var state_31518__$1 = state_31518;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31518__$1,inst_31516);
} else {
if((state_val_31519 === (2))){
var state_31518__$1 = state_31518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31518__$1,(4),ch);
} else {
if((state_val_31519 === (9))){
var inst_31505 = (state_31518[(9)]);
var inst_31498 = inst_31505;
var state_31518__$1 = (function (){var statearr_31530 = state_31518;
(statearr_31530[(7)] = inst_31498);

return statearr_31530;
})();
var statearr_31531_33534 = state_31518__$1;
(statearr_31531_33534[(2)] = null);

(statearr_31531_33534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (5))){
var inst_31498 = (state_31518[(7)]);
var state_31518__$1 = state_31518;
var statearr_31532_33535 = state_31518__$1;
(statearr_31532_33535[(2)] = inst_31498);

(statearr_31532_33535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (10))){
var inst_31512 = (state_31518[(2)]);
var state_31518__$1 = state_31518;
var statearr_31533_33536 = state_31518__$1;
(statearr_31533_33536[(2)] = inst_31512);

(statearr_31533_33536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (8))){
var inst_31505 = (state_31518[(9)]);
var inst_31508 = cljs.core.deref(inst_31505);
var state_31518__$1 = state_31518;
var statearr_31534_33537 = state_31518__$1;
(statearr_31534_33537[(2)] = inst_31508);

(statearr_31534_33537[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__30690__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30690__auto____0 = (function (){
var statearr_31535 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31535[(0)] = cljs$core$async$reduce_$_state_machine__30690__auto__);

(statearr_31535[(1)] = (1));

return statearr_31535;
});
var cljs$core$async$reduce_$_state_machine__30690__auto____1 = (function (state_31518){
while(true){
var ret_value__30691__auto__ = (function (){try{while(true){
var result__30692__auto__ = switch__30689__auto__(state_31518);
if(cljs.core.keyword_identical_QMARK_(result__30692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30692__auto__;
}
break;
}
}catch (e31536){var ex__30693__auto__ = e31536;
var statearr_31537_33540 = state_31518;
(statearr_31537_33540[(2)] = ex__30693__auto__);


if(cljs.core.seq((state_31518[(4)]))){
var statearr_31538_33541 = state_31518;
(statearr_31538_33541[(1)] = cljs.core.first((state_31518[(4)])));

} else {
throw ex__30693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33546 = state_31518;
state_31518 = G__33546;
continue;
} else {
return ret_value__30691__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30690__auto__ = function(state_31518){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30690__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30690__auto____1.call(this,state_31518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30690__auto____0;
cljs$core$async$reduce_$_state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30690__auto____1;
return cljs$core$async$reduce_$_state_machine__30690__auto__;
})()
})();
var state__30876__auto__ = (function (){var statearr_31543 = f__30875__auto__();
(statearr_31543[(6)] = c__30874__auto__);

return statearr_31543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30876__auto__);
}));

return c__30874__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30874__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30875__auto__ = (function (){var switch__30689__auto__ = (function (state_31549){
var state_val_31550 = (state_31549[(1)]);
if((state_val_31550 === (1))){
var inst_31544 = cljs.core.async.reduce(f__$1,init,ch);
var state_31549__$1 = state_31549;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31549__$1,(2),inst_31544);
} else {
if((state_val_31550 === (2))){
var inst_31546 = (state_31549[(2)]);
var inst_31547 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31546) : f__$1.call(null,inst_31546));
var state_31549__$1 = state_31549;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31549__$1,inst_31547);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30690__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30690__auto____0 = (function (){
var statearr_31551 = [null,null,null,null,null,null,null];
(statearr_31551[(0)] = cljs$core$async$transduce_$_state_machine__30690__auto__);

(statearr_31551[(1)] = (1));

return statearr_31551;
});
var cljs$core$async$transduce_$_state_machine__30690__auto____1 = (function (state_31549){
while(true){
var ret_value__30691__auto__ = (function (){try{while(true){
var result__30692__auto__ = switch__30689__auto__(state_31549);
if(cljs.core.keyword_identical_QMARK_(result__30692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30692__auto__;
}
break;
}
}catch (e31552){var ex__30693__auto__ = e31552;
var statearr_31553_33551 = state_31549;
(statearr_31553_33551[(2)] = ex__30693__auto__);


if(cljs.core.seq((state_31549[(4)]))){
var statearr_31554_33552 = state_31549;
(statearr_31554_33552[(1)] = cljs.core.first((state_31549[(4)])));

} else {
throw ex__30693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33553 = state_31549;
state_31549 = G__33553;
continue;
} else {
return ret_value__30691__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30690__auto__ = function(state_31549){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30690__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30690__auto____1.call(this,state_31549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30690__auto____0;
cljs$core$async$transduce_$_state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30690__auto____1;
return cljs$core$async$transduce_$_state_machine__30690__auto__;
})()
})();
var state__30876__auto__ = (function (){var statearr_31555 = f__30875__auto__();
(statearr_31555[(6)] = c__30874__auto__);

return statearr_31555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30876__auto__);
}));

return c__30874__auto__;
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
var G__31557 = arguments.length;
switch (G__31557) {
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
var c__30874__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30875__auto__ = (function (){var switch__30689__auto__ = (function (state_31585){
var state_val_31586 = (state_31585[(1)]);
if((state_val_31586 === (7))){
var inst_31567 = (state_31585[(2)]);
var state_31585__$1 = state_31585;
var statearr_31587_33556 = state_31585__$1;
(statearr_31587_33556[(2)] = inst_31567);

(statearr_31587_33556[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31586 === (1))){
var inst_31561 = cljs.core.seq(coll);
var inst_31562 = inst_31561;
var state_31585__$1 = (function (){var statearr_31588 = state_31585;
(statearr_31588[(7)] = inst_31562);

return statearr_31588;
})();
var statearr_31589_33557 = state_31585__$1;
(statearr_31589_33557[(2)] = null);

(statearr_31589_33557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31586 === (4))){
var inst_31562 = (state_31585[(7)]);
var inst_31565 = cljs.core.first(inst_31562);
var state_31585__$1 = state_31585;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31585__$1,(7),ch,inst_31565);
} else {
if((state_val_31586 === (13))){
var inst_31579 = (state_31585[(2)]);
var state_31585__$1 = state_31585;
var statearr_31590_33558 = state_31585__$1;
(statearr_31590_33558[(2)] = inst_31579);

(statearr_31590_33558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31586 === (6))){
var inst_31570 = (state_31585[(2)]);
var state_31585__$1 = state_31585;
if(cljs.core.truth_(inst_31570)){
var statearr_31591_33564 = state_31585__$1;
(statearr_31591_33564[(1)] = (8));

} else {
var statearr_31592_33566 = state_31585__$1;
(statearr_31592_33566[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31586 === (3))){
var inst_31583 = (state_31585[(2)]);
var state_31585__$1 = state_31585;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31585__$1,inst_31583);
} else {
if((state_val_31586 === (12))){
var state_31585__$1 = state_31585;
var statearr_31597_33567 = state_31585__$1;
(statearr_31597_33567[(2)] = null);

(statearr_31597_33567[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31586 === (2))){
var inst_31562 = (state_31585[(7)]);
var state_31585__$1 = state_31585;
if(cljs.core.truth_(inst_31562)){
var statearr_31601_33568 = state_31585__$1;
(statearr_31601_33568[(1)] = (4));

} else {
var statearr_31602_33569 = state_31585__$1;
(statearr_31602_33569[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31586 === (11))){
var inst_31576 = cljs.core.async.close_BANG_(ch);
var state_31585__$1 = state_31585;
var statearr_31603_33570 = state_31585__$1;
(statearr_31603_33570[(2)] = inst_31576);

(statearr_31603_33570[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31586 === (9))){
var state_31585__$1 = state_31585;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31607_33574 = state_31585__$1;
(statearr_31607_33574[(1)] = (11));

} else {
var statearr_31608_33575 = state_31585__$1;
(statearr_31608_33575[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31586 === (5))){
var inst_31562 = (state_31585[(7)]);
var state_31585__$1 = state_31585;
var statearr_31609_33576 = state_31585__$1;
(statearr_31609_33576[(2)] = inst_31562);

(statearr_31609_33576[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31586 === (10))){
var inst_31581 = (state_31585[(2)]);
var state_31585__$1 = state_31585;
var statearr_31610_33580 = state_31585__$1;
(statearr_31610_33580[(2)] = inst_31581);

(statearr_31610_33580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31586 === (8))){
var inst_31562 = (state_31585[(7)]);
var inst_31572 = cljs.core.next(inst_31562);
var inst_31562__$1 = inst_31572;
var state_31585__$1 = (function (){var statearr_31611 = state_31585;
(statearr_31611[(7)] = inst_31562__$1);

return statearr_31611;
})();
var statearr_31612_33590 = state_31585__$1;
(statearr_31612_33590[(2)] = null);

(statearr_31612_33590[(1)] = (2));


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
var cljs$core$async$state_machine__30690__auto__ = null;
var cljs$core$async$state_machine__30690__auto____0 = (function (){
var statearr_31613 = [null,null,null,null,null,null,null,null];
(statearr_31613[(0)] = cljs$core$async$state_machine__30690__auto__);

(statearr_31613[(1)] = (1));

return statearr_31613;
});
var cljs$core$async$state_machine__30690__auto____1 = (function (state_31585){
while(true){
var ret_value__30691__auto__ = (function (){try{while(true){
var result__30692__auto__ = switch__30689__auto__(state_31585);
if(cljs.core.keyword_identical_QMARK_(result__30692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30692__auto__;
}
break;
}
}catch (e31614){var ex__30693__auto__ = e31614;
var statearr_31615_33594 = state_31585;
(statearr_31615_33594[(2)] = ex__30693__auto__);


if(cljs.core.seq((state_31585[(4)]))){
var statearr_31616_33595 = state_31585;
(statearr_31616_33595[(1)] = cljs.core.first((state_31585[(4)])));

} else {
throw ex__30693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33596 = state_31585;
state_31585 = G__33596;
continue;
} else {
return ret_value__30691__auto__;
}
break;
}
});
cljs$core$async$state_machine__30690__auto__ = function(state_31585){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30690__auto____1.call(this,state_31585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30690__auto____0;
cljs$core$async$state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30690__auto____1;
return cljs$core$async$state_machine__30690__auto__;
})()
})();
var state__30876__auto__ = (function (){var statearr_31617 = f__30875__auto__();
(statearr_31617[(6)] = c__30874__auto__);

return statearr_31617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30876__auto__);
}));

return c__30874__auto__;
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
var G__31620 = arguments.length;
switch (G__31620) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_33598 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_33598(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33616 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_33616(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33617 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_33617(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33618 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_33618(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31624 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31624 = (function (ch,cs,meta31625){
this.ch = ch;
this.cs = cs;
this.meta31625 = meta31625;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31626,meta31625__$1){
var self__ = this;
var _31626__$1 = this;
return (new cljs.core.async.t_cljs$core$async31624(self__.ch,self__.cs,meta31625__$1));
}));

(cljs.core.async.t_cljs$core$async31624.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31626){
var self__ = this;
var _31626__$1 = this;
return self__.meta31625;
}));

(cljs.core.async.t_cljs$core$async31624.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31624.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31624.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31624.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31624.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31624.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31624.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31625","meta31625",1957300917,null)], null);
}));

(cljs.core.async.t_cljs$core$async31624.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31624.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31624");

(cljs.core.async.t_cljs$core$async31624.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31624");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31624.
 */
cljs.core.async.__GT_t_cljs$core$async31624 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31624(ch__$1,cs__$1,meta31625){
return (new cljs.core.async.t_cljs$core$async31624(ch__$1,cs__$1,meta31625));
});

}

return (new cljs.core.async.t_cljs$core$async31624(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30874__auto___33623 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30875__auto__ = (function (){var switch__30689__auto__ = (function (state_31761){
var state_val_31762 = (state_31761[(1)]);
if((state_val_31762 === (7))){
var inst_31757 = (state_31761[(2)]);
var state_31761__$1 = state_31761;
var statearr_31763_33646 = state_31761__$1;
(statearr_31763_33646[(2)] = inst_31757);

(statearr_31763_33646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (20))){
var inst_31662 = (state_31761[(7)]);
var inst_31674 = cljs.core.first(inst_31662);
var inst_31675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31674,(0),null);
var inst_31676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31674,(1),null);
var state_31761__$1 = (function (){var statearr_31764 = state_31761;
(statearr_31764[(8)] = inst_31675);

return statearr_31764;
})();
if(cljs.core.truth_(inst_31676)){
var statearr_31765_33650 = state_31761__$1;
(statearr_31765_33650[(1)] = (22));

} else {
var statearr_31766_33651 = state_31761__$1;
(statearr_31766_33651[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (27))){
var inst_31704 = (state_31761[(9)]);
var inst_31630 = (state_31761[(10)]);
var inst_31711 = (state_31761[(11)]);
var inst_31706 = (state_31761[(12)]);
var inst_31711__$1 = cljs.core._nth(inst_31704,inst_31706);
var inst_31712 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31711__$1,inst_31630,done);
var state_31761__$1 = (function (){var statearr_31767 = state_31761;
(statearr_31767[(11)] = inst_31711__$1);

return statearr_31767;
})();
if(cljs.core.truth_(inst_31712)){
var statearr_31768_33652 = state_31761__$1;
(statearr_31768_33652[(1)] = (30));

} else {
var statearr_31769_33653 = state_31761__$1;
(statearr_31769_33653[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (1))){
var state_31761__$1 = state_31761;
var statearr_31770_33654 = state_31761__$1;
(statearr_31770_33654[(2)] = null);

(statearr_31770_33654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (24))){
var inst_31662 = (state_31761[(7)]);
var inst_31681 = (state_31761[(2)]);
var inst_31682 = cljs.core.next(inst_31662);
var inst_31639 = inst_31682;
var inst_31640 = null;
var inst_31641 = (0);
var inst_31642 = (0);
var state_31761__$1 = (function (){var statearr_31771 = state_31761;
(statearr_31771[(13)] = inst_31681);

(statearr_31771[(14)] = inst_31641);

(statearr_31771[(15)] = inst_31642);

(statearr_31771[(16)] = inst_31640);

(statearr_31771[(17)] = inst_31639);

return statearr_31771;
})();
var statearr_31772_33656 = state_31761__$1;
(statearr_31772_33656[(2)] = null);

(statearr_31772_33656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (39))){
var state_31761__$1 = state_31761;
var statearr_31776_33657 = state_31761__$1;
(statearr_31776_33657[(2)] = null);

(statearr_31776_33657[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (4))){
var inst_31630 = (state_31761[(10)]);
var inst_31630__$1 = (state_31761[(2)]);
var inst_31631 = (inst_31630__$1 == null);
var state_31761__$1 = (function (){var statearr_31777 = state_31761;
(statearr_31777[(10)] = inst_31630__$1);

return statearr_31777;
})();
if(cljs.core.truth_(inst_31631)){
var statearr_31782_33658 = state_31761__$1;
(statearr_31782_33658[(1)] = (5));

} else {
var statearr_31787_33659 = state_31761__$1;
(statearr_31787_33659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (15))){
var inst_31641 = (state_31761[(14)]);
var inst_31642 = (state_31761[(15)]);
var inst_31640 = (state_31761[(16)]);
var inst_31639 = (state_31761[(17)]);
var inst_31658 = (state_31761[(2)]);
var inst_31659 = (inst_31642 + (1));
var tmp31773 = inst_31641;
var tmp31774 = inst_31640;
var tmp31775 = inst_31639;
var inst_31639__$1 = tmp31775;
var inst_31640__$1 = tmp31774;
var inst_31641__$1 = tmp31773;
var inst_31642__$1 = inst_31659;
var state_31761__$1 = (function (){var statearr_31792 = state_31761;
(statearr_31792[(18)] = inst_31658);

(statearr_31792[(14)] = inst_31641__$1);

(statearr_31792[(15)] = inst_31642__$1);

(statearr_31792[(16)] = inst_31640__$1);

(statearr_31792[(17)] = inst_31639__$1);

return statearr_31792;
})();
var statearr_31793_33660 = state_31761__$1;
(statearr_31793_33660[(2)] = null);

(statearr_31793_33660[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (21))){
var inst_31685 = (state_31761[(2)]);
var state_31761__$1 = state_31761;
var statearr_31797_33661 = state_31761__$1;
(statearr_31797_33661[(2)] = inst_31685);

(statearr_31797_33661[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (31))){
var inst_31711 = (state_31761[(11)]);
var inst_31715 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31711);
var state_31761__$1 = state_31761;
var statearr_31798_33662 = state_31761__$1;
(statearr_31798_33662[(2)] = inst_31715);

(statearr_31798_33662[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (32))){
var inst_31704 = (state_31761[(9)]);
var inst_31705 = (state_31761[(19)]);
var inst_31703 = (state_31761[(20)]);
var inst_31706 = (state_31761[(12)]);
var inst_31717 = (state_31761[(2)]);
var inst_31718 = (inst_31706 + (1));
var tmp31794 = inst_31704;
var tmp31795 = inst_31705;
var tmp31796 = inst_31703;
var inst_31703__$1 = tmp31796;
var inst_31704__$1 = tmp31794;
var inst_31705__$1 = tmp31795;
var inst_31706__$1 = inst_31718;
var state_31761__$1 = (function (){var statearr_31799 = state_31761;
(statearr_31799[(9)] = inst_31704__$1);

(statearr_31799[(19)] = inst_31705__$1);

(statearr_31799[(21)] = inst_31717);

(statearr_31799[(20)] = inst_31703__$1);

(statearr_31799[(12)] = inst_31706__$1);

return statearr_31799;
})();
var statearr_31800_33666 = state_31761__$1;
(statearr_31800_33666[(2)] = null);

(statearr_31800_33666[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (40))){
var inst_31730 = (state_31761[(22)]);
var inst_31734 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31730);
var state_31761__$1 = state_31761;
var statearr_31801_33669 = state_31761__$1;
(statearr_31801_33669[(2)] = inst_31734);

(statearr_31801_33669[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (33))){
var inst_31721 = (state_31761[(23)]);
var inst_31723 = cljs.core.chunked_seq_QMARK_(inst_31721);
var state_31761__$1 = state_31761;
if(inst_31723){
var statearr_31802_33673 = state_31761__$1;
(statearr_31802_33673[(1)] = (36));

} else {
var statearr_31803_33674 = state_31761__$1;
(statearr_31803_33674[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (13))){
var inst_31652 = (state_31761[(24)]);
var inst_31655 = cljs.core.async.close_BANG_(inst_31652);
var state_31761__$1 = state_31761;
var statearr_31804_33675 = state_31761__$1;
(statearr_31804_33675[(2)] = inst_31655);

(statearr_31804_33675[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (22))){
var inst_31675 = (state_31761[(8)]);
var inst_31678 = cljs.core.async.close_BANG_(inst_31675);
var state_31761__$1 = state_31761;
var statearr_31805_33676 = state_31761__$1;
(statearr_31805_33676[(2)] = inst_31678);

(statearr_31805_33676[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (36))){
var inst_31721 = (state_31761[(23)]);
var inst_31725 = cljs.core.chunk_first(inst_31721);
var inst_31726 = cljs.core.chunk_rest(inst_31721);
var inst_31727 = cljs.core.count(inst_31725);
var inst_31703 = inst_31726;
var inst_31704 = inst_31725;
var inst_31705 = inst_31727;
var inst_31706 = (0);
var state_31761__$1 = (function (){var statearr_31808 = state_31761;
(statearr_31808[(9)] = inst_31704);

(statearr_31808[(19)] = inst_31705);

(statearr_31808[(20)] = inst_31703);

(statearr_31808[(12)] = inst_31706);

return statearr_31808;
})();
var statearr_31809_33677 = state_31761__$1;
(statearr_31809_33677[(2)] = null);

(statearr_31809_33677[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (41))){
var inst_31721 = (state_31761[(23)]);
var inst_31736 = (state_31761[(2)]);
var inst_31737 = cljs.core.next(inst_31721);
var inst_31703 = inst_31737;
var inst_31704 = null;
var inst_31705 = (0);
var inst_31706 = (0);
var state_31761__$1 = (function (){var statearr_31810 = state_31761;
(statearr_31810[(9)] = inst_31704);

(statearr_31810[(19)] = inst_31705);

(statearr_31810[(25)] = inst_31736);

(statearr_31810[(20)] = inst_31703);

(statearr_31810[(12)] = inst_31706);

return statearr_31810;
})();
var statearr_31813_33681 = state_31761__$1;
(statearr_31813_33681[(2)] = null);

(statearr_31813_33681[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (43))){
var state_31761__$1 = state_31761;
var statearr_31814_33682 = state_31761__$1;
(statearr_31814_33682[(2)] = null);

(statearr_31814_33682[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (29))){
var inst_31745 = (state_31761[(2)]);
var state_31761__$1 = state_31761;
var statearr_31818_33683 = state_31761__$1;
(statearr_31818_33683[(2)] = inst_31745);

(statearr_31818_33683[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (44))){
var inst_31754 = (state_31761[(2)]);
var state_31761__$1 = (function (){var statearr_31819 = state_31761;
(statearr_31819[(26)] = inst_31754);

return statearr_31819;
})();
var statearr_31820_33684 = state_31761__$1;
(statearr_31820_33684[(2)] = null);

(statearr_31820_33684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (6))){
var inst_31695 = (state_31761[(27)]);
var inst_31694 = cljs.core.deref(cs);
var inst_31695__$1 = cljs.core.keys(inst_31694);
var inst_31696 = cljs.core.count(inst_31695__$1);
var inst_31697 = cljs.core.reset_BANG_(dctr,inst_31696);
var inst_31702 = cljs.core.seq(inst_31695__$1);
var inst_31703 = inst_31702;
var inst_31704 = null;
var inst_31705 = (0);
var inst_31706 = (0);
var state_31761__$1 = (function (){var statearr_31821 = state_31761;
(statearr_31821[(9)] = inst_31704);

(statearr_31821[(19)] = inst_31705);

(statearr_31821[(28)] = inst_31697);

(statearr_31821[(20)] = inst_31703);

(statearr_31821[(27)] = inst_31695__$1);

(statearr_31821[(12)] = inst_31706);

return statearr_31821;
})();
var statearr_31822_33685 = state_31761__$1;
(statearr_31822_33685[(2)] = null);

(statearr_31822_33685[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (28))){
var inst_31721 = (state_31761[(23)]);
var inst_31703 = (state_31761[(20)]);
var inst_31721__$1 = cljs.core.seq(inst_31703);
var state_31761__$1 = (function (){var statearr_31827 = state_31761;
(statearr_31827[(23)] = inst_31721__$1);

return statearr_31827;
})();
if(inst_31721__$1){
var statearr_31830_33693 = state_31761__$1;
(statearr_31830_33693[(1)] = (33));

} else {
var statearr_31833_33696 = state_31761__$1;
(statearr_31833_33696[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (25))){
var inst_31705 = (state_31761[(19)]);
var inst_31706 = (state_31761[(12)]);
var inst_31708 = (inst_31706 < inst_31705);
var inst_31709 = inst_31708;
var state_31761__$1 = state_31761;
if(cljs.core.truth_(inst_31709)){
var statearr_31840_33697 = state_31761__$1;
(statearr_31840_33697[(1)] = (27));

} else {
var statearr_31841_33698 = state_31761__$1;
(statearr_31841_33698[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (34))){
var state_31761__$1 = state_31761;
var statearr_31844_33699 = state_31761__$1;
(statearr_31844_33699[(2)] = null);

(statearr_31844_33699[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (17))){
var state_31761__$1 = state_31761;
var statearr_31849_33700 = state_31761__$1;
(statearr_31849_33700[(2)] = null);

(statearr_31849_33700[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (3))){
var inst_31759 = (state_31761[(2)]);
var state_31761__$1 = state_31761;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31761__$1,inst_31759);
} else {
if((state_val_31762 === (12))){
var inst_31690 = (state_31761[(2)]);
var state_31761__$1 = state_31761;
var statearr_31855_33701 = state_31761__$1;
(statearr_31855_33701[(2)] = inst_31690);

(statearr_31855_33701[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (2))){
var state_31761__$1 = state_31761;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31761__$1,(4),ch);
} else {
if((state_val_31762 === (23))){
var state_31761__$1 = state_31761;
var statearr_31860_33702 = state_31761__$1;
(statearr_31860_33702[(2)] = null);

(statearr_31860_33702[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (35))){
var inst_31743 = (state_31761[(2)]);
var state_31761__$1 = state_31761;
var statearr_31866_33703 = state_31761__$1;
(statearr_31866_33703[(2)] = inst_31743);

(statearr_31866_33703[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (19))){
var inst_31662 = (state_31761[(7)]);
var inst_31666 = cljs.core.chunk_first(inst_31662);
var inst_31667 = cljs.core.chunk_rest(inst_31662);
var inst_31668 = cljs.core.count(inst_31666);
var inst_31639 = inst_31667;
var inst_31640 = inst_31666;
var inst_31641 = inst_31668;
var inst_31642 = (0);
var state_31761__$1 = (function (){var statearr_31868 = state_31761;
(statearr_31868[(14)] = inst_31641);

(statearr_31868[(15)] = inst_31642);

(statearr_31868[(16)] = inst_31640);

(statearr_31868[(17)] = inst_31639);

return statearr_31868;
})();
var statearr_31869_33710 = state_31761__$1;
(statearr_31869_33710[(2)] = null);

(statearr_31869_33710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (11))){
var inst_31662 = (state_31761[(7)]);
var inst_31639 = (state_31761[(17)]);
var inst_31662__$1 = cljs.core.seq(inst_31639);
var state_31761__$1 = (function (){var statearr_31870 = state_31761;
(statearr_31870[(7)] = inst_31662__$1);

return statearr_31870;
})();
if(inst_31662__$1){
var statearr_31871_33711 = state_31761__$1;
(statearr_31871_33711[(1)] = (16));

} else {
var statearr_31872_33712 = state_31761__$1;
(statearr_31872_33712[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (9))){
var inst_31692 = (state_31761[(2)]);
var state_31761__$1 = state_31761;
var statearr_31877_33713 = state_31761__$1;
(statearr_31877_33713[(2)] = inst_31692);

(statearr_31877_33713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (5))){
var inst_31637 = cljs.core.deref(cs);
var inst_31638 = cljs.core.seq(inst_31637);
var inst_31639 = inst_31638;
var inst_31640 = null;
var inst_31641 = (0);
var inst_31642 = (0);
var state_31761__$1 = (function (){var statearr_31880 = state_31761;
(statearr_31880[(14)] = inst_31641);

(statearr_31880[(15)] = inst_31642);

(statearr_31880[(16)] = inst_31640);

(statearr_31880[(17)] = inst_31639);

return statearr_31880;
})();
var statearr_31882_33714 = state_31761__$1;
(statearr_31882_33714[(2)] = null);

(statearr_31882_33714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (14))){
var state_31761__$1 = state_31761;
var statearr_31883_33715 = state_31761__$1;
(statearr_31883_33715[(2)] = null);

(statearr_31883_33715[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (45))){
var inst_31751 = (state_31761[(2)]);
var state_31761__$1 = state_31761;
var statearr_31885_33716 = state_31761__$1;
(statearr_31885_33716[(2)] = inst_31751);

(statearr_31885_33716[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (26))){
var inst_31695 = (state_31761[(27)]);
var inst_31747 = (state_31761[(2)]);
var inst_31748 = cljs.core.seq(inst_31695);
var state_31761__$1 = (function (){var statearr_31888 = state_31761;
(statearr_31888[(29)] = inst_31747);

return statearr_31888;
})();
if(inst_31748){
var statearr_31890_33717 = state_31761__$1;
(statearr_31890_33717[(1)] = (42));

} else {
var statearr_31891_33718 = state_31761__$1;
(statearr_31891_33718[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (16))){
var inst_31662 = (state_31761[(7)]);
var inst_31664 = cljs.core.chunked_seq_QMARK_(inst_31662);
var state_31761__$1 = state_31761;
if(inst_31664){
var statearr_31897_33719 = state_31761__$1;
(statearr_31897_33719[(1)] = (19));

} else {
var statearr_31898_33720 = state_31761__$1;
(statearr_31898_33720[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (38))){
var inst_31740 = (state_31761[(2)]);
var state_31761__$1 = state_31761;
var statearr_31901_33721 = state_31761__$1;
(statearr_31901_33721[(2)] = inst_31740);

(statearr_31901_33721[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (30))){
var state_31761__$1 = state_31761;
var statearr_31902_33725 = state_31761__$1;
(statearr_31902_33725[(2)] = null);

(statearr_31902_33725[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (10))){
var inst_31642 = (state_31761[(15)]);
var inst_31640 = (state_31761[(16)]);
var inst_31650 = cljs.core._nth(inst_31640,inst_31642);
var inst_31652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31650,(0),null);
var inst_31653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31650,(1),null);
var state_31761__$1 = (function (){var statearr_31911 = state_31761;
(statearr_31911[(24)] = inst_31652);

return statearr_31911;
})();
if(cljs.core.truth_(inst_31653)){
var statearr_31914_33726 = state_31761__$1;
(statearr_31914_33726[(1)] = (13));

} else {
var statearr_31915_33727 = state_31761__$1;
(statearr_31915_33727[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (18))){
var inst_31688 = (state_31761[(2)]);
var state_31761__$1 = state_31761;
var statearr_31916_33728 = state_31761__$1;
(statearr_31916_33728[(2)] = inst_31688);

(statearr_31916_33728[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (42))){
var state_31761__$1 = state_31761;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31761__$1,(45),dchan);
} else {
if((state_val_31762 === (37))){
var inst_31721 = (state_31761[(23)]);
var inst_31630 = (state_31761[(10)]);
var inst_31730 = (state_31761[(22)]);
var inst_31730__$1 = cljs.core.first(inst_31721);
var inst_31731 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31730__$1,inst_31630,done);
var state_31761__$1 = (function (){var statearr_31920 = state_31761;
(statearr_31920[(22)] = inst_31730__$1);

return statearr_31920;
})();
if(cljs.core.truth_(inst_31731)){
var statearr_31921_33729 = state_31761__$1;
(statearr_31921_33729[(1)] = (39));

} else {
var statearr_31926_33730 = state_31761__$1;
(statearr_31926_33730[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31762 === (8))){
var inst_31641 = (state_31761[(14)]);
var inst_31642 = (state_31761[(15)]);
var inst_31644 = (inst_31642 < inst_31641);
var inst_31645 = inst_31644;
var state_31761__$1 = state_31761;
if(cljs.core.truth_(inst_31645)){
var statearr_31927_33732 = state_31761__$1;
(statearr_31927_33732[(1)] = (10));

} else {
var statearr_31928_33733 = state_31761__$1;
(statearr_31928_33733[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__30690__auto__ = null;
var cljs$core$async$mult_$_state_machine__30690__auto____0 = (function (){
var statearr_31932 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31932[(0)] = cljs$core$async$mult_$_state_machine__30690__auto__);

(statearr_31932[(1)] = (1));

return statearr_31932;
});
var cljs$core$async$mult_$_state_machine__30690__auto____1 = (function (state_31761){
while(true){
var ret_value__30691__auto__ = (function (){try{while(true){
var result__30692__auto__ = switch__30689__auto__(state_31761);
if(cljs.core.keyword_identical_QMARK_(result__30692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30692__auto__;
}
break;
}
}catch (e31933){var ex__30693__auto__ = e31933;
var statearr_31934_33734 = state_31761;
(statearr_31934_33734[(2)] = ex__30693__auto__);


if(cljs.core.seq((state_31761[(4)]))){
var statearr_31935_33735 = state_31761;
(statearr_31935_33735[(1)] = cljs.core.first((state_31761[(4)])));

} else {
throw ex__30693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33736 = state_31761;
state_31761 = G__33736;
continue;
} else {
return ret_value__30691__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30690__auto__ = function(state_31761){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30690__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30690__auto____1.call(this,state_31761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30690__auto____0;
cljs$core$async$mult_$_state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30690__auto____1;
return cljs$core$async$mult_$_state_machine__30690__auto__;
})()
})();
var state__30876__auto__ = (function (){var statearr_31936 = f__30875__auto__();
(statearr_31936[(6)] = c__30874__auto___33623);

return statearr_31936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30876__auto__);
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
var G__31943 = arguments.length;
switch (G__31943) {
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

var cljs$core$async$Mix$unmix_STAR_$dyn_33739 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_33739(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33740 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33740(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33741 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_33741(m,state_map);
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

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32010){
var map__32011 = p__32010;
var map__32011__$1 = (((((!((map__32011 == null))))?(((((map__32011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32011):map__32011);
var opts = map__32011__$1;
var statearr_32013_33746 = state;
(statearr_32013_33746[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32015_33747 = state;
(statearr_32015_33747[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_32021_33748 = state;
(statearr_32021_33748[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32005){
var G__32006 = cljs.core.first(seq32005);
var seq32005__$1 = cljs.core.next(seq32005);
var G__32007 = cljs.core.first(seq32005__$1);
var seq32005__$2 = cljs.core.next(seq32005__$1);
var G__32008 = cljs.core.first(seq32005__$2);
var seq32005__$3 = cljs.core.next(seq32005__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32006,G__32007,G__32008,seq32005__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32048 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32048 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32049){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32049 = meta32049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32050,meta32049__$1){
var self__ = this;
var _32050__$1 = this;
return (new cljs.core.async.t_cljs$core$async32048(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32049__$1));
}));

(cljs.core.async.t_cljs$core$async32048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32050){
var self__ = this;
var _32050__$1 = this;
return self__.meta32049;
}));

(cljs.core.async.t_cljs$core$async32048.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32048.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32048.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32048.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32048.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32048.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32048.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32048.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32048.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32049","meta32049",1156297648,null)], null);
}));

(cljs.core.async.t_cljs$core$async32048.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32048.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32048");

(cljs.core.async.t_cljs$core$async32048.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32048");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32048.
 */
cljs.core.async.__GT_t_cljs$core$async32048 = (function cljs$core$async$mix_$___GT_t_cljs$core$async32048(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32049){
return (new cljs.core.async.t_cljs$core$async32048(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32049));
});

}

return (new cljs.core.async.t_cljs$core$async32048(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30874__auto___33775 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30875__auto__ = (function (){var switch__30689__auto__ = (function (state_32212){
var state_val_32213 = (state_32212[(1)]);
if((state_val_32213 === (7))){
var inst_32104 = (state_32212[(2)]);
var state_32212__$1 = state_32212;
var statearr_32223_33776 = state_32212__$1;
(statearr_32223_33776[(2)] = inst_32104);

(statearr_32223_33776[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (20))){
var inst_32117 = (state_32212[(7)]);
var state_32212__$1 = state_32212;
var statearr_32224_33780 = state_32212__$1;
(statearr_32224_33780[(2)] = inst_32117);

(statearr_32224_33780[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (27))){
var state_32212__$1 = state_32212;
var statearr_32225_33781 = state_32212__$1;
(statearr_32225_33781[(2)] = null);

(statearr_32225_33781[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (1))){
var inst_32091 = (state_32212[(8)]);
var inst_32091__$1 = calc_state();
var inst_32093 = (inst_32091__$1 == null);
var inst_32094 = cljs.core.not(inst_32093);
var state_32212__$1 = (function (){var statearr_32228 = state_32212;
(statearr_32228[(8)] = inst_32091__$1);

return statearr_32228;
})();
if(inst_32094){
var statearr_32229_33782 = state_32212__$1;
(statearr_32229_33782[(1)] = (2));

} else {
var statearr_32251_33783 = state_32212__$1;
(statearr_32251_33783[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (24))){
var inst_32142 = (state_32212[(9)]);
var inst_32152 = (state_32212[(10)]);
var inst_32167 = (state_32212[(11)]);
var inst_32167__$1 = (inst_32142.cljs$core$IFn$_invoke$arity$1 ? inst_32142.cljs$core$IFn$_invoke$arity$1(inst_32152) : inst_32142.call(null,inst_32152));
var state_32212__$1 = (function (){var statearr_32252 = state_32212;
(statearr_32252[(11)] = inst_32167__$1);

return statearr_32252;
})();
if(cljs.core.truth_(inst_32167__$1)){
var statearr_32255_33784 = state_32212__$1;
(statearr_32255_33784[(1)] = (29));

} else {
var statearr_32256_33785 = state_32212__$1;
(statearr_32256_33785[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (4))){
var inst_32107 = (state_32212[(2)]);
var state_32212__$1 = state_32212;
if(cljs.core.truth_(inst_32107)){
var statearr_32257_33786 = state_32212__$1;
(statearr_32257_33786[(1)] = (8));

} else {
var statearr_32258_33787 = state_32212__$1;
(statearr_32258_33787[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (15))){
var inst_32135 = (state_32212[(2)]);
var state_32212__$1 = state_32212;
if(cljs.core.truth_(inst_32135)){
var statearr_32259_33804 = state_32212__$1;
(statearr_32259_33804[(1)] = (19));

} else {
var statearr_32260_33805 = state_32212__$1;
(statearr_32260_33805[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (21))){
var inst_32140 = (state_32212[(12)]);
var inst_32140__$1 = (state_32212[(2)]);
var inst_32142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32140__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32140__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32144 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32140__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32212__$1 = (function (){var statearr_32261 = state_32212;
(statearr_32261[(9)] = inst_32142);

(statearr_32261[(12)] = inst_32140__$1);

(statearr_32261[(13)] = inst_32143);

return statearr_32261;
})();
return cljs.core.async.ioc_alts_BANG_(state_32212__$1,(22),inst_32144);
} else {
if((state_val_32213 === (31))){
var inst_32176 = (state_32212[(2)]);
var state_32212__$1 = state_32212;
if(cljs.core.truth_(inst_32176)){
var statearr_32263_33806 = state_32212__$1;
(statearr_32263_33806[(1)] = (32));

} else {
var statearr_32264_33807 = state_32212__$1;
(statearr_32264_33807[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (32))){
var inst_32151 = (state_32212[(14)]);
var state_32212__$1 = state_32212;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32212__$1,(35),out,inst_32151);
} else {
if((state_val_32213 === (33))){
var inst_32140 = (state_32212[(12)]);
var inst_32117 = inst_32140;
var state_32212__$1 = (function (){var statearr_32266 = state_32212;
(statearr_32266[(7)] = inst_32117);

return statearr_32266;
})();
var statearr_32267_33808 = state_32212__$1;
(statearr_32267_33808[(2)] = null);

(statearr_32267_33808[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (13))){
var inst_32117 = (state_32212[(7)]);
var inst_32124 = inst_32117.cljs$lang$protocol_mask$partition0$;
var inst_32125 = (inst_32124 & (64));
var inst_32126 = inst_32117.cljs$core$ISeq$;
var inst_32127 = (cljs.core.PROTOCOL_SENTINEL === inst_32126);
var inst_32128 = ((inst_32125) || (inst_32127));
var state_32212__$1 = state_32212;
if(cljs.core.truth_(inst_32128)){
var statearr_32268_33809 = state_32212__$1;
(statearr_32268_33809[(1)] = (16));

} else {
var statearr_32269_33810 = state_32212__$1;
(statearr_32269_33810[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (22))){
var inst_32152 = (state_32212[(10)]);
var inst_32151 = (state_32212[(14)]);
var inst_32149 = (state_32212[(2)]);
var inst_32151__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32149,(0),null);
var inst_32152__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32149,(1),null);
var inst_32153 = (inst_32151__$1 == null);
var inst_32154 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32152__$1,change);
var inst_32155 = ((inst_32153) || (inst_32154));
var state_32212__$1 = (function (){var statearr_32270 = state_32212;
(statearr_32270[(10)] = inst_32152__$1);

(statearr_32270[(14)] = inst_32151__$1);

return statearr_32270;
})();
if(cljs.core.truth_(inst_32155)){
var statearr_32271_33811 = state_32212__$1;
(statearr_32271_33811[(1)] = (23));

} else {
var statearr_32272_33812 = state_32212__$1;
(statearr_32272_33812[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (36))){
var inst_32140 = (state_32212[(12)]);
var inst_32117 = inst_32140;
var state_32212__$1 = (function (){var statearr_32273 = state_32212;
(statearr_32273[(7)] = inst_32117);

return statearr_32273;
})();
var statearr_32274_33813 = state_32212__$1;
(statearr_32274_33813[(2)] = null);

(statearr_32274_33813[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (29))){
var inst_32167 = (state_32212[(11)]);
var state_32212__$1 = state_32212;
var statearr_32275_33814 = state_32212__$1;
(statearr_32275_33814[(2)] = inst_32167);

(statearr_32275_33814[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (6))){
var state_32212__$1 = state_32212;
var statearr_32276_33815 = state_32212__$1;
(statearr_32276_33815[(2)] = false);

(statearr_32276_33815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (28))){
var inst_32163 = (state_32212[(2)]);
var inst_32164 = calc_state();
var inst_32117 = inst_32164;
var state_32212__$1 = (function (){var statearr_32281 = state_32212;
(statearr_32281[(7)] = inst_32117);

(statearr_32281[(15)] = inst_32163);

return statearr_32281;
})();
var statearr_32282_33816 = state_32212__$1;
(statearr_32282_33816[(2)] = null);

(statearr_32282_33816[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (25))){
var inst_32202 = (state_32212[(2)]);
var state_32212__$1 = state_32212;
var statearr_32287_33817 = state_32212__$1;
(statearr_32287_33817[(2)] = inst_32202);

(statearr_32287_33817[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (34))){
var inst_32200 = (state_32212[(2)]);
var state_32212__$1 = state_32212;
var statearr_32288_33818 = state_32212__$1;
(statearr_32288_33818[(2)] = inst_32200);

(statearr_32288_33818[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (17))){
var state_32212__$1 = state_32212;
var statearr_32291_33831 = state_32212__$1;
(statearr_32291_33831[(2)] = false);

(statearr_32291_33831[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (3))){
var state_32212__$1 = state_32212;
var statearr_32293_33833 = state_32212__$1;
(statearr_32293_33833[(2)] = false);

(statearr_32293_33833[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (12))){
var inst_32204 = (state_32212[(2)]);
var state_32212__$1 = state_32212;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32212__$1,inst_32204);
} else {
if((state_val_32213 === (2))){
var inst_32091 = (state_32212[(8)]);
var inst_32096 = inst_32091.cljs$lang$protocol_mask$partition0$;
var inst_32097 = (inst_32096 & (64));
var inst_32098 = inst_32091.cljs$core$ISeq$;
var inst_32099 = (cljs.core.PROTOCOL_SENTINEL === inst_32098);
var inst_32100 = ((inst_32097) || (inst_32099));
var state_32212__$1 = state_32212;
if(cljs.core.truth_(inst_32100)){
var statearr_32297_33837 = state_32212__$1;
(statearr_32297_33837[(1)] = (5));

} else {
var statearr_32298_33838 = state_32212__$1;
(statearr_32298_33838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (23))){
var inst_32151 = (state_32212[(14)]);
var inst_32157 = (inst_32151 == null);
var state_32212__$1 = state_32212;
if(cljs.core.truth_(inst_32157)){
var statearr_32300_33839 = state_32212__$1;
(statearr_32300_33839[(1)] = (26));

} else {
var statearr_32301_33841 = state_32212__$1;
(statearr_32301_33841[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (35))){
var inst_32180 = (state_32212[(2)]);
var state_32212__$1 = state_32212;
if(cljs.core.truth_(inst_32180)){
var statearr_32302_33842 = state_32212__$1;
(statearr_32302_33842[(1)] = (36));

} else {
var statearr_32303_33843 = state_32212__$1;
(statearr_32303_33843[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (19))){
var inst_32117 = (state_32212[(7)]);
var inst_32137 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32117);
var state_32212__$1 = state_32212;
var statearr_32304_33844 = state_32212__$1;
(statearr_32304_33844[(2)] = inst_32137);

(statearr_32304_33844[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (11))){
var inst_32117 = (state_32212[(7)]);
var inst_32121 = (inst_32117 == null);
var inst_32122 = cljs.core.not(inst_32121);
var state_32212__$1 = state_32212;
if(inst_32122){
var statearr_32306_33845 = state_32212__$1;
(statearr_32306_33845[(1)] = (13));

} else {
var statearr_32308_33846 = state_32212__$1;
(statearr_32308_33846[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (9))){
var inst_32091 = (state_32212[(8)]);
var state_32212__$1 = state_32212;
var statearr_32309_33847 = state_32212__$1;
(statearr_32309_33847[(2)] = inst_32091);

(statearr_32309_33847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (5))){
var state_32212__$1 = state_32212;
var statearr_32310_33848 = state_32212__$1;
(statearr_32310_33848[(2)] = true);

(statearr_32310_33848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (14))){
var state_32212__$1 = state_32212;
var statearr_32311_33849 = state_32212__$1;
(statearr_32311_33849[(2)] = false);

(statearr_32311_33849[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (26))){
var inst_32152 = (state_32212[(10)]);
var inst_32160 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32152);
var state_32212__$1 = state_32212;
var statearr_32312_33850 = state_32212__$1;
(statearr_32312_33850[(2)] = inst_32160);

(statearr_32312_33850[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (16))){
var state_32212__$1 = state_32212;
var statearr_32314_33851 = state_32212__$1;
(statearr_32314_33851[(2)] = true);

(statearr_32314_33851[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (38))){
var inst_32192 = (state_32212[(2)]);
var state_32212__$1 = state_32212;
var statearr_32315_33852 = state_32212__$1;
(statearr_32315_33852[(2)] = inst_32192);

(statearr_32315_33852[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (30))){
var inst_32142 = (state_32212[(9)]);
var inst_32143 = (state_32212[(13)]);
var inst_32152 = (state_32212[(10)]);
var inst_32171 = cljs.core.empty_QMARK_(inst_32142);
var inst_32172 = (inst_32143.cljs$core$IFn$_invoke$arity$1 ? inst_32143.cljs$core$IFn$_invoke$arity$1(inst_32152) : inst_32143.call(null,inst_32152));
var inst_32173 = cljs.core.not(inst_32172);
var inst_32174 = ((inst_32171) && (inst_32173));
var state_32212__$1 = state_32212;
var statearr_32317_33853 = state_32212__$1;
(statearr_32317_33853[(2)] = inst_32174);

(statearr_32317_33853[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (10))){
var inst_32091 = (state_32212[(8)]);
var inst_32112 = (state_32212[(2)]);
var inst_32113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32112,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32112,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32116 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32112,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32117 = inst_32091;
var state_32212__$1 = (function (){var statearr_32318 = state_32212;
(statearr_32318[(16)] = inst_32114);

(statearr_32318[(7)] = inst_32117);

(statearr_32318[(17)] = inst_32113);

(statearr_32318[(18)] = inst_32116);

return statearr_32318;
})();
var statearr_32319_33881 = state_32212__$1;
(statearr_32319_33881[(2)] = null);

(statearr_32319_33881[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (18))){
var inst_32132 = (state_32212[(2)]);
var state_32212__$1 = state_32212;
var statearr_32320_33882 = state_32212__$1;
(statearr_32320_33882[(2)] = inst_32132);

(statearr_32320_33882[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (37))){
var state_32212__$1 = state_32212;
var statearr_32327_33883 = state_32212__$1;
(statearr_32327_33883[(2)] = null);

(statearr_32327_33883[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32213 === (8))){
var inst_32091 = (state_32212[(8)]);
var inst_32109 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32091);
var state_32212__$1 = state_32212;
var statearr_32338_33884 = state_32212__$1;
(statearr_32338_33884[(2)] = inst_32109);

(statearr_32338_33884[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__30690__auto__ = null;
var cljs$core$async$mix_$_state_machine__30690__auto____0 = (function (){
var statearr_32339 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32339[(0)] = cljs$core$async$mix_$_state_machine__30690__auto__);

(statearr_32339[(1)] = (1));

return statearr_32339;
});
var cljs$core$async$mix_$_state_machine__30690__auto____1 = (function (state_32212){
while(true){
var ret_value__30691__auto__ = (function (){try{while(true){
var result__30692__auto__ = switch__30689__auto__(state_32212);
if(cljs.core.keyword_identical_QMARK_(result__30692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30692__auto__;
}
break;
}
}catch (e32340){var ex__30693__auto__ = e32340;
var statearr_32341_33885 = state_32212;
(statearr_32341_33885[(2)] = ex__30693__auto__);


if(cljs.core.seq((state_32212[(4)]))){
var statearr_32342_33886 = state_32212;
(statearr_32342_33886[(1)] = cljs.core.first((state_32212[(4)])));

} else {
throw ex__30693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33887 = state_32212;
state_32212 = G__33887;
continue;
} else {
return ret_value__30691__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30690__auto__ = function(state_32212){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30690__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30690__auto____1.call(this,state_32212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30690__auto____0;
cljs$core$async$mix_$_state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30690__auto____1;
return cljs$core$async$mix_$_state_machine__30690__auto__;
})()
})();
var state__30876__auto__ = (function (){var statearr_32343 = f__30875__auto__();
(statearr_32343[(6)] = c__30874__auto___33775);

return statearr_32343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30876__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_33888 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_33888(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33892 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_33892(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33896 = (function() {
var G__33897 = null;
var G__33897__1 = (function (p){
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
var G__33897__2 = (function (p,v){
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
G__33897 = function(p,v){
switch(arguments.length){
case 1:
return G__33897__1.call(this,p);
case 2:
return G__33897__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33897.cljs$core$IFn$_invoke$arity$1 = G__33897__1;
G__33897.cljs$core$IFn$_invoke$arity$2 = G__33897__2;
return G__33897;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32360 = arguments.length;
switch (G__32360) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33896(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33896(p,v);
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
var G__32365 = arguments.length;
switch (G__32365) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32362_SHARP_){
if(cljs.core.truth_((p1__32362_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32362_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32362_SHARP_.call(null,topic)))){
return p1__32362_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32362_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32366 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32366 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32367){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32367 = meta32367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32368,meta32367__$1){
var self__ = this;
var _32368__$1 = this;
return (new cljs.core.async.t_cljs$core$async32366(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32367__$1));
}));

(cljs.core.async.t_cljs$core$async32366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32368){
var self__ = this;
var _32368__$1 = this;
return self__.meta32367;
}));

(cljs.core.async.t_cljs$core$async32366.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32366.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32366.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32366.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32366.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async32366.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32366.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32366.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32367","meta32367",-1067923416,null)], null);
}));

(cljs.core.async.t_cljs$core$async32366.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32366.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32366");

(cljs.core.async.t_cljs$core$async32366.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32366");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32366.
 */
cljs.core.async.__GT_t_cljs$core$async32366 = (function cljs$core$async$__GT_t_cljs$core$async32366(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32367){
return (new cljs.core.async.t_cljs$core$async32366(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32367));
});

}

return (new cljs.core.async.t_cljs$core$async32366(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30874__auto___33925 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30875__auto__ = (function (){var switch__30689__auto__ = (function (state_32442){
var state_val_32443 = (state_32442[(1)]);
if((state_val_32443 === (7))){
var inst_32438 = (state_32442[(2)]);
var state_32442__$1 = state_32442;
var statearr_32444_33926 = state_32442__$1;
(statearr_32444_33926[(2)] = inst_32438);

(statearr_32444_33926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (20))){
var state_32442__$1 = state_32442;
var statearr_32445_33927 = state_32442__$1;
(statearr_32445_33927[(2)] = null);

(statearr_32445_33927[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (1))){
var state_32442__$1 = state_32442;
var statearr_32446_33928 = state_32442__$1;
(statearr_32446_33928[(2)] = null);

(statearr_32446_33928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (24))){
var inst_32421 = (state_32442[(7)]);
var inst_32430 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32421);
var state_32442__$1 = state_32442;
var statearr_32447_33932 = state_32442__$1;
(statearr_32447_33932[(2)] = inst_32430);

(statearr_32447_33932[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (4))){
var inst_32373 = (state_32442[(8)]);
var inst_32373__$1 = (state_32442[(2)]);
var inst_32374 = (inst_32373__$1 == null);
var state_32442__$1 = (function (){var statearr_32450 = state_32442;
(statearr_32450[(8)] = inst_32373__$1);

return statearr_32450;
})();
if(cljs.core.truth_(inst_32374)){
var statearr_32451_33936 = state_32442__$1;
(statearr_32451_33936[(1)] = (5));

} else {
var statearr_32452_33940 = state_32442__$1;
(statearr_32452_33940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (15))){
var inst_32415 = (state_32442[(2)]);
var state_32442__$1 = state_32442;
var statearr_32453_33941 = state_32442__$1;
(statearr_32453_33941[(2)] = inst_32415);

(statearr_32453_33941[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (21))){
var inst_32435 = (state_32442[(2)]);
var state_32442__$1 = (function (){var statearr_32454 = state_32442;
(statearr_32454[(9)] = inst_32435);

return statearr_32454;
})();
var statearr_32455_33944 = state_32442__$1;
(statearr_32455_33944[(2)] = null);

(statearr_32455_33944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (13))){
var inst_32397 = (state_32442[(10)]);
var inst_32399 = cljs.core.chunked_seq_QMARK_(inst_32397);
var state_32442__$1 = state_32442;
if(inst_32399){
var statearr_32456_33945 = state_32442__$1;
(statearr_32456_33945[(1)] = (16));

} else {
var statearr_32457_33946 = state_32442__$1;
(statearr_32457_33946[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (22))){
var inst_32427 = (state_32442[(2)]);
var state_32442__$1 = state_32442;
if(cljs.core.truth_(inst_32427)){
var statearr_32458_33947 = state_32442__$1;
(statearr_32458_33947[(1)] = (23));

} else {
var statearr_32459_33948 = state_32442__$1;
(statearr_32459_33948[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (6))){
var inst_32373 = (state_32442[(8)]);
var inst_32421 = (state_32442[(7)]);
var inst_32423 = (state_32442[(11)]);
var inst_32421__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32373) : topic_fn.call(null,inst_32373));
var inst_32422 = cljs.core.deref(mults);
var inst_32423__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32422,inst_32421__$1);
var state_32442__$1 = (function (){var statearr_32461 = state_32442;
(statearr_32461[(7)] = inst_32421__$1);

(statearr_32461[(11)] = inst_32423__$1);

return statearr_32461;
})();
if(cljs.core.truth_(inst_32423__$1)){
var statearr_32462_33950 = state_32442__$1;
(statearr_32462_33950[(1)] = (19));

} else {
var statearr_32463_33951 = state_32442__$1;
(statearr_32463_33951[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (25))){
var inst_32432 = (state_32442[(2)]);
var state_32442__$1 = state_32442;
var statearr_32464_33953 = state_32442__$1;
(statearr_32464_33953[(2)] = inst_32432);

(statearr_32464_33953[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (17))){
var inst_32397 = (state_32442[(10)]);
var inst_32406 = cljs.core.first(inst_32397);
var inst_32407 = cljs.core.async.muxch_STAR_(inst_32406);
var inst_32408 = cljs.core.async.close_BANG_(inst_32407);
var inst_32409 = cljs.core.next(inst_32397);
var inst_32383 = inst_32409;
var inst_32384 = null;
var inst_32385 = (0);
var inst_32386 = (0);
var state_32442__$1 = (function (){var statearr_32465 = state_32442;
(statearr_32465[(12)] = inst_32386);

(statearr_32465[(13)] = inst_32383);

(statearr_32465[(14)] = inst_32385);

(statearr_32465[(15)] = inst_32384);

(statearr_32465[(16)] = inst_32408);

return statearr_32465;
})();
var statearr_32466_33960 = state_32442__$1;
(statearr_32466_33960[(2)] = null);

(statearr_32466_33960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (3))){
var inst_32440 = (state_32442[(2)]);
var state_32442__$1 = state_32442;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32442__$1,inst_32440);
} else {
if((state_val_32443 === (12))){
var inst_32417 = (state_32442[(2)]);
var state_32442__$1 = state_32442;
var statearr_32467_33961 = state_32442__$1;
(statearr_32467_33961[(2)] = inst_32417);

(statearr_32467_33961[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (2))){
var state_32442__$1 = state_32442;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32442__$1,(4),ch);
} else {
if((state_val_32443 === (23))){
var state_32442__$1 = state_32442;
var statearr_32468_33962 = state_32442__$1;
(statearr_32468_33962[(2)] = null);

(statearr_32468_33962[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (19))){
var inst_32373 = (state_32442[(8)]);
var inst_32423 = (state_32442[(11)]);
var inst_32425 = cljs.core.async.muxch_STAR_(inst_32423);
var state_32442__$1 = state_32442;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32442__$1,(22),inst_32425,inst_32373);
} else {
if((state_val_32443 === (11))){
var inst_32397 = (state_32442[(10)]);
var inst_32383 = (state_32442[(13)]);
var inst_32397__$1 = cljs.core.seq(inst_32383);
var state_32442__$1 = (function (){var statearr_32469 = state_32442;
(statearr_32469[(10)] = inst_32397__$1);

return statearr_32469;
})();
if(inst_32397__$1){
var statearr_32470_33964 = state_32442__$1;
(statearr_32470_33964[(1)] = (13));

} else {
var statearr_32471_33966 = state_32442__$1;
(statearr_32471_33966[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (9))){
var inst_32419 = (state_32442[(2)]);
var state_32442__$1 = state_32442;
var statearr_32472_33967 = state_32442__$1;
(statearr_32472_33967[(2)] = inst_32419);

(statearr_32472_33967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (5))){
var inst_32380 = cljs.core.deref(mults);
var inst_32381 = cljs.core.vals(inst_32380);
var inst_32382 = cljs.core.seq(inst_32381);
var inst_32383 = inst_32382;
var inst_32384 = null;
var inst_32385 = (0);
var inst_32386 = (0);
var state_32442__$1 = (function (){var statearr_32473 = state_32442;
(statearr_32473[(12)] = inst_32386);

(statearr_32473[(13)] = inst_32383);

(statearr_32473[(14)] = inst_32385);

(statearr_32473[(15)] = inst_32384);

return statearr_32473;
})();
var statearr_32474_33971 = state_32442__$1;
(statearr_32474_33971[(2)] = null);

(statearr_32474_33971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (14))){
var state_32442__$1 = state_32442;
var statearr_32478_33972 = state_32442__$1;
(statearr_32478_33972[(2)] = null);

(statearr_32478_33972[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (16))){
var inst_32397 = (state_32442[(10)]);
var inst_32401 = cljs.core.chunk_first(inst_32397);
var inst_32402 = cljs.core.chunk_rest(inst_32397);
var inst_32403 = cljs.core.count(inst_32401);
var inst_32383 = inst_32402;
var inst_32384 = inst_32401;
var inst_32385 = inst_32403;
var inst_32386 = (0);
var state_32442__$1 = (function (){var statearr_32479 = state_32442;
(statearr_32479[(12)] = inst_32386);

(statearr_32479[(13)] = inst_32383);

(statearr_32479[(14)] = inst_32385);

(statearr_32479[(15)] = inst_32384);

return statearr_32479;
})();
var statearr_32480_33973 = state_32442__$1;
(statearr_32480_33973[(2)] = null);

(statearr_32480_33973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (10))){
var inst_32386 = (state_32442[(12)]);
var inst_32383 = (state_32442[(13)]);
var inst_32385 = (state_32442[(14)]);
var inst_32384 = (state_32442[(15)]);
var inst_32391 = cljs.core._nth(inst_32384,inst_32386);
var inst_32392 = cljs.core.async.muxch_STAR_(inst_32391);
var inst_32393 = cljs.core.async.close_BANG_(inst_32392);
var inst_32394 = (inst_32386 + (1));
var tmp32475 = inst_32383;
var tmp32476 = inst_32385;
var tmp32477 = inst_32384;
var inst_32383__$1 = tmp32475;
var inst_32384__$1 = tmp32477;
var inst_32385__$1 = tmp32476;
var inst_32386__$1 = inst_32394;
var state_32442__$1 = (function (){var statearr_32481 = state_32442;
(statearr_32481[(12)] = inst_32386__$1);

(statearr_32481[(13)] = inst_32383__$1);

(statearr_32481[(14)] = inst_32385__$1);

(statearr_32481[(17)] = inst_32393);

(statearr_32481[(15)] = inst_32384__$1);

return statearr_32481;
})();
var statearr_32484_33974 = state_32442__$1;
(statearr_32484_33974[(2)] = null);

(statearr_32484_33974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (18))){
var inst_32412 = (state_32442[(2)]);
var state_32442__$1 = state_32442;
var statearr_32485_33975 = state_32442__$1;
(statearr_32485_33975[(2)] = inst_32412);

(statearr_32485_33975[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (8))){
var inst_32386 = (state_32442[(12)]);
var inst_32385 = (state_32442[(14)]);
var inst_32388 = (inst_32386 < inst_32385);
var inst_32389 = inst_32388;
var state_32442__$1 = state_32442;
if(cljs.core.truth_(inst_32389)){
var statearr_32487_33981 = state_32442__$1;
(statearr_32487_33981[(1)] = (10));

} else {
var statearr_32489_33982 = state_32442__$1;
(statearr_32489_33982[(1)] = (11));

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
var cljs$core$async$state_machine__30690__auto__ = null;
var cljs$core$async$state_machine__30690__auto____0 = (function (){
var statearr_32490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32490[(0)] = cljs$core$async$state_machine__30690__auto__);

(statearr_32490[(1)] = (1));

return statearr_32490;
});
var cljs$core$async$state_machine__30690__auto____1 = (function (state_32442){
while(true){
var ret_value__30691__auto__ = (function (){try{while(true){
var result__30692__auto__ = switch__30689__auto__(state_32442);
if(cljs.core.keyword_identical_QMARK_(result__30692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30692__auto__;
}
break;
}
}catch (e32491){var ex__30693__auto__ = e32491;
var statearr_32492_33993 = state_32442;
(statearr_32492_33993[(2)] = ex__30693__auto__);


if(cljs.core.seq((state_32442[(4)]))){
var statearr_32493_33994 = state_32442;
(statearr_32493_33994[(1)] = cljs.core.first((state_32442[(4)])));

} else {
throw ex__30693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33999 = state_32442;
state_32442 = G__33999;
continue;
} else {
return ret_value__30691__auto__;
}
break;
}
});
cljs$core$async$state_machine__30690__auto__ = function(state_32442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30690__auto____1.call(this,state_32442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30690__auto____0;
cljs$core$async$state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30690__auto____1;
return cljs$core$async$state_machine__30690__auto__;
})()
})();
var state__30876__auto__ = (function (){var statearr_32494 = f__30875__auto__();
(statearr_32494[(6)] = c__30874__auto___33925);

return statearr_32494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30876__auto__);
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
var G__32501 = arguments.length;
switch (G__32501) {
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
var c__30874__auto___34025 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30875__auto__ = (function (){var switch__30689__auto__ = (function (state_32561){
var state_val_32562 = (state_32561[(1)]);
if((state_val_32562 === (7))){
var state_32561__$1 = state_32561;
var statearr_32563_34030 = state_32561__$1;
(statearr_32563_34030[(2)] = null);

(statearr_32563_34030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32562 === (1))){
var state_32561__$1 = state_32561;
var statearr_32564_34034 = state_32561__$1;
(statearr_32564_34034[(2)] = null);

(statearr_32564_34034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32562 === (4))){
var inst_32517 = (state_32561[(7)]);
var inst_32518 = (state_32561[(8)]);
var inst_32520 = (inst_32518 < inst_32517);
var state_32561__$1 = state_32561;
if(cljs.core.truth_(inst_32520)){
var statearr_32565_34035 = state_32561__$1;
(statearr_32565_34035[(1)] = (6));

} else {
var statearr_32566_34036 = state_32561__$1;
(statearr_32566_34036[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32562 === (15))){
var inst_32546 = (state_32561[(9)]);
var inst_32551 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32546);
var state_32561__$1 = state_32561;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32561__$1,(17),out,inst_32551);
} else {
if((state_val_32562 === (13))){
var inst_32546 = (state_32561[(9)]);
var inst_32546__$1 = (state_32561[(2)]);
var inst_32547 = cljs.core.some(cljs.core.nil_QMARK_,inst_32546__$1);
var state_32561__$1 = (function (){var statearr_32569 = state_32561;
(statearr_32569[(9)] = inst_32546__$1);

return statearr_32569;
})();
if(cljs.core.truth_(inst_32547)){
var statearr_32570_34038 = state_32561__$1;
(statearr_32570_34038[(1)] = (14));

} else {
var statearr_32571_34043 = state_32561__$1;
(statearr_32571_34043[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32562 === (6))){
var state_32561__$1 = state_32561;
var statearr_32572_34046 = state_32561__$1;
(statearr_32572_34046[(2)] = null);

(statearr_32572_34046[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32562 === (17))){
var inst_32553 = (state_32561[(2)]);
var state_32561__$1 = (function (){var statearr_32574 = state_32561;
(statearr_32574[(10)] = inst_32553);

return statearr_32574;
})();
var statearr_32575_34053 = state_32561__$1;
(statearr_32575_34053[(2)] = null);

(statearr_32575_34053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32562 === (3))){
var inst_32559 = (state_32561[(2)]);
var state_32561__$1 = state_32561;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32561__$1,inst_32559);
} else {
if((state_val_32562 === (12))){
var _ = (function (){var statearr_32576 = state_32561;
(statearr_32576[(4)] = cljs.core.rest((state_32561[(4)])));

return statearr_32576;
})();
var state_32561__$1 = state_32561;
var ex32573 = (state_32561__$1[(2)]);
var statearr_32577_34065 = state_32561__$1;
(statearr_32577_34065[(5)] = ex32573);


if((ex32573 instanceof Object)){
var statearr_32578_34066 = state_32561__$1;
(statearr_32578_34066[(1)] = (11));

(statearr_32578_34066[(5)] = null);

} else {
throw ex32573;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32562 === (2))){
var inst_32516 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32517 = cnt;
var inst_32518 = (0);
var state_32561__$1 = (function (){var statearr_32580 = state_32561;
(statearr_32580[(7)] = inst_32517);

(statearr_32580[(8)] = inst_32518);

(statearr_32580[(11)] = inst_32516);

return statearr_32580;
})();
var statearr_32581_34073 = state_32561__$1;
(statearr_32581_34073[(2)] = null);

(statearr_32581_34073[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32562 === (11))){
var inst_32523 = (state_32561[(2)]);
var inst_32526 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32561__$1 = (function (){var statearr_32582 = state_32561;
(statearr_32582[(12)] = inst_32523);

return statearr_32582;
})();
var statearr_32583_34082 = state_32561__$1;
(statearr_32583_34082[(2)] = inst_32526);

(statearr_32583_34082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32562 === (9))){
var inst_32518 = (state_32561[(8)]);
var _ = (function (){var statearr_32586 = state_32561;
(statearr_32586[(4)] = cljs.core.cons((12),(state_32561[(4)])));

return statearr_32586;
})();
var inst_32532 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32518) : chs__$1.call(null,inst_32518));
var inst_32533 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32518) : done.call(null,inst_32518));
var inst_32534 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32532,inst_32533);
var ___$1 = (function (){var statearr_32598 = state_32561;
(statearr_32598[(4)] = cljs.core.rest((state_32561[(4)])));

return statearr_32598;
})();
var state_32561__$1 = state_32561;
var statearr_32599_34087 = state_32561__$1;
(statearr_32599_34087[(2)] = inst_32534);

(statearr_32599_34087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32562 === (5))){
var inst_32544 = (state_32561[(2)]);
var state_32561__$1 = (function (){var statearr_32600 = state_32561;
(statearr_32600[(13)] = inst_32544);

return statearr_32600;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32561__$1,(13),dchan);
} else {
if((state_val_32562 === (14))){
var inst_32549 = cljs.core.async.close_BANG_(out);
var state_32561__$1 = state_32561;
var statearr_32601_34089 = state_32561__$1;
(statearr_32601_34089[(2)] = inst_32549);

(statearr_32601_34089[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32562 === (16))){
var inst_32557 = (state_32561[(2)]);
var state_32561__$1 = state_32561;
var statearr_32602_34090 = state_32561__$1;
(statearr_32602_34090[(2)] = inst_32557);

(statearr_32602_34090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32562 === (10))){
var inst_32518 = (state_32561[(8)]);
var inst_32537 = (state_32561[(2)]);
var inst_32538 = (inst_32518 + (1));
var inst_32518__$1 = inst_32538;
var state_32561__$1 = (function (){var statearr_32603 = state_32561;
(statearr_32603[(8)] = inst_32518__$1);

(statearr_32603[(14)] = inst_32537);

return statearr_32603;
})();
var statearr_32607_34091 = state_32561__$1;
(statearr_32607_34091[(2)] = null);

(statearr_32607_34091[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32562 === (8))){
var inst_32542 = (state_32561[(2)]);
var state_32561__$1 = state_32561;
var statearr_32610_34092 = state_32561__$1;
(statearr_32610_34092[(2)] = inst_32542);

(statearr_32610_34092[(1)] = (5));


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
var cljs$core$async$state_machine__30690__auto__ = null;
var cljs$core$async$state_machine__30690__auto____0 = (function (){
var statearr_32616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32616[(0)] = cljs$core$async$state_machine__30690__auto__);

(statearr_32616[(1)] = (1));

return statearr_32616;
});
var cljs$core$async$state_machine__30690__auto____1 = (function (state_32561){
while(true){
var ret_value__30691__auto__ = (function (){try{while(true){
var result__30692__auto__ = switch__30689__auto__(state_32561);
if(cljs.core.keyword_identical_QMARK_(result__30692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30692__auto__;
}
break;
}
}catch (e32617){var ex__30693__auto__ = e32617;
var statearr_32618_34094 = state_32561;
(statearr_32618_34094[(2)] = ex__30693__auto__);


if(cljs.core.seq((state_32561[(4)]))){
var statearr_32626_34095 = state_32561;
(statearr_32626_34095[(1)] = cljs.core.first((state_32561[(4)])));

} else {
throw ex__30693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34106 = state_32561;
state_32561 = G__34106;
continue;
} else {
return ret_value__30691__auto__;
}
break;
}
});
cljs$core$async$state_machine__30690__auto__ = function(state_32561){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30690__auto____1.call(this,state_32561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30690__auto____0;
cljs$core$async$state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30690__auto____1;
return cljs$core$async$state_machine__30690__auto__;
})()
})();
var state__30876__auto__ = (function (){var statearr_32627 = f__30875__auto__();
(statearr_32627[(6)] = c__30874__auto___34025);

return statearr_32627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30876__auto__);
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
var G__32630 = arguments.length;
switch (G__32630) {
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
var c__30874__auto___34119 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30875__auto__ = (function (){var switch__30689__auto__ = (function (state_32670){
var state_val_32671 = (state_32670[(1)]);
if((state_val_32671 === (7))){
var inst_32649 = (state_32670[(7)]);
var inst_32650 = (state_32670[(8)]);
var inst_32649__$1 = (state_32670[(2)]);
var inst_32650__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32649__$1,(0),null);
var inst_32651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32649__$1,(1),null);
var inst_32652 = (inst_32650__$1 == null);
var state_32670__$1 = (function (){var statearr_32672 = state_32670;
(statearr_32672[(7)] = inst_32649__$1);

(statearr_32672[(8)] = inst_32650__$1);

(statearr_32672[(9)] = inst_32651);

return statearr_32672;
})();
if(cljs.core.truth_(inst_32652)){
var statearr_32673_34120 = state_32670__$1;
(statearr_32673_34120[(1)] = (8));

} else {
var statearr_32674_34121 = state_32670__$1;
(statearr_32674_34121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32671 === (1))){
var inst_32635 = cljs.core.vec(chs);
var inst_32636 = inst_32635;
var state_32670__$1 = (function (){var statearr_32678 = state_32670;
(statearr_32678[(10)] = inst_32636);

return statearr_32678;
})();
var statearr_32679_34122 = state_32670__$1;
(statearr_32679_34122[(2)] = null);

(statearr_32679_34122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32671 === (4))){
var inst_32636 = (state_32670[(10)]);
var state_32670__$1 = state_32670;
return cljs.core.async.ioc_alts_BANG_(state_32670__$1,(7),inst_32636);
} else {
if((state_val_32671 === (6))){
var inst_32666 = (state_32670[(2)]);
var state_32670__$1 = state_32670;
var statearr_32680_34171 = state_32670__$1;
(statearr_32680_34171[(2)] = inst_32666);

(statearr_32680_34171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32671 === (3))){
var inst_32668 = (state_32670[(2)]);
var state_32670__$1 = state_32670;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32670__$1,inst_32668);
} else {
if((state_val_32671 === (2))){
var inst_32636 = (state_32670[(10)]);
var inst_32638 = cljs.core.count(inst_32636);
var inst_32639 = (inst_32638 > (0));
var state_32670__$1 = state_32670;
if(cljs.core.truth_(inst_32639)){
var statearr_32682_34172 = state_32670__$1;
(statearr_32682_34172[(1)] = (4));

} else {
var statearr_32683_34173 = state_32670__$1;
(statearr_32683_34173[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32671 === (11))){
var inst_32636 = (state_32670[(10)]);
var inst_32659 = (state_32670[(2)]);
var tmp32681 = inst_32636;
var inst_32636__$1 = tmp32681;
var state_32670__$1 = (function (){var statearr_32685 = state_32670;
(statearr_32685[(11)] = inst_32659);

(statearr_32685[(10)] = inst_32636__$1);

return statearr_32685;
})();
var statearr_32686_34174 = state_32670__$1;
(statearr_32686_34174[(2)] = null);

(statearr_32686_34174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32671 === (9))){
var inst_32650 = (state_32670[(8)]);
var state_32670__$1 = state_32670;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32670__$1,(11),out,inst_32650);
} else {
if((state_val_32671 === (5))){
var inst_32664 = cljs.core.async.close_BANG_(out);
var state_32670__$1 = state_32670;
var statearr_32687_34175 = state_32670__$1;
(statearr_32687_34175[(2)] = inst_32664);

(statearr_32687_34175[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32671 === (10))){
var inst_32662 = (state_32670[(2)]);
var state_32670__$1 = state_32670;
var statearr_32688_34176 = state_32670__$1;
(statearr_32688_34176[(2)] = inst_32662);

(statearr_32688_34176[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32671 === (8))){
var inst_32649 = (state_32670[(7)]);
var inst_32650 = (state_32670[(8)]);
var inst_32636 = (state_32670[(10)]);
var inst_32651 = (state_32670[(9)]);
var inst_32654 = (function (){var cs = inst_32636;
var vec__32645 = inst_32649;
var v = inst_32650;
var c = inst_32651;
return (function (p1__32628_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32628_SHARP_);
});
})();
var inst_32655 = cljs.core.filterv(inst_32654,inst_32636);
var inst_32636__$1 = inst_32655;
var state_32670__$1 = (function (){var statearr_32689 = state_32670;
(statearr_32689[(10)] = inst_32636__$1);

return statearr_32689;
})();
var statearr_32690_34194 = state_32670__$1;
(statearr_32690_34194[(2)] = null);

(statearr_32690_34194[(1)] = (2));


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
var cljs$core$async$state_machine__30690__auto__ = null;
var cljs$core$async$state_machine__30690__auto____0 = (function (){
var statearr_32691 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32691[(0)] = cljs$core$async$state_machine__30690__auto__);

(statearr_32691[(1)] = (1));

return statearr_32691;
});
var cljs$core$async$state_machine__30690__auto____1 = (function (state_32670){
while(true){
var ret_value__30691__auto__ = (function (){try{while(true){
var result__30692__auto__ = switch__30689__auto__(state_32670);
if(cljs.core.keyword_identical_QMARK_(result__30692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30692__auto__;
}
break;
}
}catch (e32692){var ex__30693__auto__ = e32692;
var statearr_32693_34195 = state_32670;
(statearr_32693_34195[(2)] = ex__30693__auto__);


if(cljs.core.seq((state_32670[(4)]))){
var statearr_32694_34196 = state_32670;
(statearr_32694_34196[(1)] = cljs.core.first((state_32670[(4)])));

} else {
throw ex__30693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34197 = state_32670;
state_32670 = G__34197;
continue;
} else {
return ret_value__30691__auto__;
}
break;
}
});
cljs$core$async$state_machine__30690__auto__ = function(state_32670){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30690__auto____1.call(this,state_32670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30690__auto____0;
cljs$core$async$state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30690__auto____1;
return cljs$core$async$state_machine__30690__auto__;
})()
})();
var state__30876__auto__ = (function (){var statearr_32695 = f__30875__auto__();
(statearr_32695[(6)] = c__30874__auto___34119);

return statearr_32695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30876__auto__);
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
var G__32705 = arguments.length;
switch (G__32705) {
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
var c__30874__auto___34209 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30875__auto__ = (function (){var switch__30689__auto__ = (function (state_32737){
var state_val_32738 = (state_32737[(1)]);
if((state_val_32738 === (7))){
var inst_32715 = (state_32737[(7)]);
var inst_32715__$1 = (state_32737[(2)]);
var inst_32716 = (inst_32715__$1 == null);
var inst_32717 = cljs.core.not(inst_32716);
var state_32737__$1 = (function (){var statearr_32739 = state_32737;
(statearr_32739[(7)] = inst_32715__$1);

return statearr_32739;
})();
if(inst_32717){
var statearr_32740_34210 = state_32737__$1;
(statearr_32740_34210[(1)] = (8));

} else {
var statearr_32743_34212 = state_32737__$1;
(statearr_32743_34212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (1))){
var inst_32710 = (0);
var state_32737__$1 = (function (){var statearr_32745 = state_32737;
(statearr_32745[(8)] = inst_32710);

return statearr_32745;
})();
var statearr_32746_34213 = state_32737__$1;
(statearr_32746_34213[(2)] = null);

(statearr_32746_34213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (4))){
var state_32737__$1 = state_32737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32737__$1,(7),ch);
} else {
if((state_val_32738 === (6))){
var inst_32728 = (state_32737[(2)]);
var state_32737__$1 = state_32737;
var statearr_32749_34214 = state_32737__$1;
(statearr_32749_34214[(2)] = inst_32728);

(statearr_32749_34214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (3))){
var inst_32734 = (state_32737[(2)]);
var inst_32735 = cljs.core.async.close_BANG_(out);
var state_32737__$1 = (function (){var statearr_32751 = state_32737;
(statearr_32751[(9)] = inst_32734);

return statearr_32751;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32737__$1,inst_32735);
} else {
if((state_val_32738 === (2))){
var inst_32710 = (state_32737[(8)]);
var inst_32712 = (inst_32710 < n);
var state_32737__$1 = state_32737;
if(cljs.core.truth_(inst_32712)){
var statearr_32752_34215 = state_32737__$1;
(statearr_32752_34215[(1)] = (4));

} else {
var statearr_32753_34216 = state_32737__$1;
(statearr_32753_34216[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (11))){
var inst_32710 = (state_32737[(8)]);
var inst_32720 = (state_32737[(2)]);
var inst_32721 = (inst_32710 + (1));
var inst_32710__$1 = inst_32721;
var state_32737__$1 = (function (){var statearr_32755 = state_32737;
(statearr_32755[(10)] = inst_32720);

(statearr_32755[(8)] = inst_32710__$1);

return statearr_32755;
})();
var statearr_32757_34220 = state_32737__$1;
(statearr_32757_34220[(2)] = null);

(statearr_32757_34220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (9))){
var state_32737__$1 = state_32737;
var statearr_32761_34221 = state_32737__$1;
(statearr_32761_34221[(2)] = null);

(statearr_32761_34221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (5))){
var state_32737__$1 = state_32737;
var statearr_32762_34227 = state_32737__$1;
(statearr_32762_34227[(2)] = null);

(statearr_32762_34227[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (10))){
var inst_32725 = (state_32737[(2)]);
var state_32737__$1 = state_32737;
var statearr_32763_34233 = state_32737__$1;
(statearr_32763_34233[(2)] = inst_32725);

(statearr_32763_34233[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (8))){
var inst_32715 = (state_32737[(7)]);
var state_32737__$1 = state_32737;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32737__$1,(11),out,inst_32715);
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
var cljs$core$async$state_machine__30690__auto__ = null;
var cljs$core$async$state_machine__30690__auto____0 = (function (){
var statearr_32767 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32767[(0)] = cljs$core$async$state_machine__30690__auto__);

(statearr_32767[(1)] = (1));

return statearr_32767;
});
var cljs$core$async$state_machine__30690__auto____1 = (function (state_32737){
while(true){
var ret_value__30691__auto__ = (function (){try{while(true){
var result__30692__auto__ = switch__30689__auto__(state_32737);
if(cljs.core.keyword_identical_QMARK_(result__30692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30692__auto__;
}
break;
}
}catch (e32768){var ex__30693__auto__ = e32768;
var statearr_32769_34240 = state_32737;
(statearr_32769_34240[(2)] = ex__30693__auto__);


if(cljs.core.seq((state_32737[(4)]))){
var statearr_32770_34241 = state_32737;
(statearr_32770_34241[(1)] = cljs.core.first((state_32737[(4)])));

} else {
throw ex__30693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34242 = state_32737;
state_32737 = G__34242;
continue;
} else {
return ret_value__30691__auto__;
}
break;
}
});
cljs$core$async$state_machine__30690__auto__ = function(state_32737){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30690__auto____1.call(this,state_32737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30690__auto____0;
cljs$core$async$state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30690__auto____1;
return cljs$core$async$state_machine__30690__auto__;
})()
})();
var state__30876__auto__ = (function (){var statearr_32773 = f__30875__auto__();
(statearr_32773[(6)] = c__30874__auto___34209);

return statearr_32773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30876__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32779 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32779 = (function (f,ch,meta32780){
this.f = f;
this.ch = ch;
this.meta32780 = meta32780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32781,meta32780__$1){
var self__ = this;
var _32781__$1 = this;
return (new cljs.core.async.t_cljs$core$async32779(self__.f,self__.ch,meta32780__$1));
}));

(cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32781){
var self__ = this;
var _32781__$1 = this;
return self__.meta32780;
}));

(cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
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
cljs.core.async.t_cljs$core$async32791 = (function (f,ch,meta32780,_,fn1,meta32792){
this.f = f;
this.ch = ch;
this.meta32780 = meta32780;
this._ = _;
this.fn1 = fn1;
this.meta32792 = meta32792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32793,meta32792__$1){
var self__ = this;
var _32793__$1 = this;
return (new cljs.core.async.t_cljs$core$async32791(self__.f,self__.ch,self__.meta32780,self__._,self__.fn1,meta32792__$1));
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
return (function (p1__32775_SHARP_){
var G__32794 = (((p1__32775_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32775_SHARP_) : self__.f.call(null,p1__32775_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32794) : f1.call(null,G__32794));
});
}));

(cljs.core.async.t_cljs$core$async32791.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32780","meta32780",1515446176,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32779","cljs.core.async/t_cljs$core$async32779",993497340,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32792","meta32792",-865681959,null)], null);
}));

(cljs.core.async.t_cljs$core$async32791.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32791.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32791");

(cljs.core.async.t_cljs$core$async32791.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32791");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32791.
 */
cljs.core.async.__GT_t_cljs$core$async32791 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32791(f__$1,ch__$1,meta32780__$1,___$2,fn1__$1,meta32792){
return (new cljs.core.async.t_cljs$core$async32791(f__$1,ch__$1,meta32780__$1,___$2,fn1__$1,meta32792));
});

}

return (new cljs.core.async.t_cljs$core$async32791(self__.f,self__.ch,self__.meta32780,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32779.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32779.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32780","meta32780",1515446176,null)], null);
}));

(cljs.core.async.t_cljs$core$async32779.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32779.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32779");

(cljs.core.async.t_cljs$core$async32779.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32779");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32779.
 */
cljs.core.async.__GT_t_cljs$core$async32779 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32779(f__$1,ch__$1,meta32780){
return (new cljs.core.async.t_cljs$core$async32779(f__$1,ch__$1,meta32780));
});

}

return (new cljs.core.async.t_cljs$core$async32779(f,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32803 = arguments.length;
switch (G__32803) {
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
var c__30874__auto___34292 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30875__auto__ = (function (){var switch__30689__auto__ = (function (state_32824){
var state_val_32825 = (state_32824[(1)]);
if((state_val_32825 === (7))){
var inst_32820 = (state_32824[(2)]);
var state_32824__$1 = state_32824;
var statearr_32826_34293 = state_32824__$1;
(statearr_32826_34293[(2)] = inst_32820);

(statearr_32826_34293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32825 === (1))){
var state_32824__$1 = state_32824;
var statearr_32827_34294 = state_32824__$1;
(statearr_32827_34294[(2)] = null);

(statearr_32827_34294[(1)] = (2));


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
var statearr_32829_34298 = state_32824__$1;
(statearr_32829_34298[(1)] = (5));

} else {
var statearr_32830_34299 = state_32824__$1;
(statearr_32830_34299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32825 === (6))){
var inst_32806 = (state_32824[(7)]);
var inst_32811 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32806) : p.call(null,inst_32806));
var state_32824__$1 = state_32824;
if(cljs.core.truth_(inst_32811)){
var statearr_32831_34300 = state_32824__$1;
(statearr_32831_34300[(1)] = (8));

} else {
var statearr_32832_34301 = state_32824__$1;
(statearr_32832_34301[(1)] = (9));

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
var statearr_32833_34302 = state_32824__$1;
(statearr_32833_34302[(2)] = inst_32814);

(statearr_32833_34302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32825 === (9))){
var state_32824__$1 = state_32824;
var statearr_32834_34303 = state_32824__$1;
(statearr_32834_34303[(2)] = null);

(statearr_32834_34303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32825 === (5))){
var inst_32809 = cljs.core.async.close_BANG_(out);
var state_32824__$1 = state_32824;
var statearr_32835_34305 = state_32824__$1;
(statearr_32835_34305[(2)] = inst_32809);

(statearr_32835_34305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32825 === (10))){
var inst_32817 = (state_32824[(2)]);
var state_32824__$1 = (function (){var statearr_32836 = state_32824;
(statearr_32836[(8)] = inst_32817);

return statearr_32836;
})();
var statearr_32837_34306 = state_32824__$1;
(statearr_32837_34306[(2)] = null);

(statearr_32837_34306[(1)] = (2));


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
var cljs$core$async$state_machine__30690__auto__ = null;
var cljs$core$async$state_machine__30690__auto____0 = (function (){
var statearr_32840 = [null,null,null,null,null,null,null,null,null];
(statearr_32840[(0)] = cljs$core$async$state_machine__30690__auto__);

(statearr_32840[(1)] = (1));

return statearr_32840;
});
var cljs$core$async$state_machine__30690__auto____1 = (function (state_32824){
while(true){
var ret_value__30691__auto__ = (function (){try{while(true){
var result__30692__auto__ = switch__30689__auto__(state_32824);
if(cljs.core.keyword_identical_QMARK_(result__30692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30692__auto__;
}
break;
}
}catch (e32841){var ex__30693__auto__ = e32841;
var statearr_32842_34307 = state_32824;
(statearr_32842_34307[(2)] = ex__30693__auto__);


if(cljs.core.seq((state_32824[(4)]))){
var statearr_32843_34308 = state_32824;
(statearr_32843_34308[(1)] = cljs.core.first((state_32824[(4)])));

} else {
throw ex__30693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34309 = state_32824;
state_32824 = G__34309;
continue;
} else {
return ret_value__30691__auto__;
}
break;
}
});
cljs$core$async$state_machine__30690__auto__ = function(state_32824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30690__auto____1.call(this,state_32824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30690__auto____0;
cljs$core$async$state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30690__auto____1;
return cljs$core$async$state_machine__30690__auto__;
})()
})();
var state__30876__auto__ = (function (){var statearr_32846 = f__30875__auto__();
(statearr_32846[(6)] = c__30874__auto___34292);

return statearr_32846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30876__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32848 = arguments.length;
switch (G__32848) {
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
var c__30874__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30875__auto__ = (function (){var switch__30689__auto__ = (function (state_32912){
var state_val_32913 = (state_32912[(1)]);
if((state_val_32913 === (7))){
var inst_32908 = (state_32912[(2)]);
var state_32912__$1 = state_32912;
var statearr_32914_34311 = state_32912__$1;
(statearr_32914_34311[(2)] = inst_32908);

(statearr_32914_34311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (20))){
var inst_32878 = (state_32912[(7)]);
var inst_32889 = (state_32912[(2)]);
var inst_32890 = cljs.core.next(inst_32878);
var inst_32864 = inst_32890;
var inst_32865 = null;
var inst_32866 = (0);
var inst_32867 = (0);
var state_32912__$1 = (function (){var statearr_32916 = state_32912;
(statearr_32916[(8)] = inst_32866);

(statearr_32916[(9)] = inst_32864);

(statearr_32916[(10)] = inst_32867);

(statearr_32916[(11)] = inst_32889);

(statearr_32916[(12)] = inst_32865);

return statearr_32916;
})();
var statearr_32917_34314 = state_32912__$1;
(statearr_32917_34314[(2)] = null);

(statearr_32917_34314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (1))){
var state_32912__$1 = state_32912;
var statearr_32919_34315 = state_32912__$1;
(statearr_32919_34315[(2)] = null);

(statearr_32919_34315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (4))){
var inst_32851 = (state_32912[(13)]);
var inst_32851__$1 = (state_32912[(2)]);
var inst_32852 = (inst_32851__$1 == null);
var state_32912__$1 = (function (){var statearr_32921 = state_32912;
(statearr_32921[(13)] = inst_32851__$1);

return statearr_32921;
})();
if(cljs.core.truth_(inst_32852)){
var statearr_32923_34316 = state_32912__$1;
(statearr_32923_34316[(1)] = (5));

} else {
var statearr_32925_34317 = state_32912__$1;
(statearr_32925_34317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (15))){
var state_32912__$1 = state_32912;
var statearr_32930_34318 = state_32912__$1;
(statearr_32930_34318[(2)] = null);

(statearr_32930_34318[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (21))){
var state_32912__$1 = state_32912;
var statearr_32931_34319 = state_32912__$1;
(statearr_32931_34319[(2)] = null);

(statearr_32931_34319[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (13))){
var inst_32866 = (state_32912[(8)]);
var inst_32864 = (state_32912[(9)]);
var inst_32867 = (state_32912[(10)]);
var inst_32865 = (state_32912[(12)]);
var inst_32874 = (state_32912[(2)]);
var inst_32875 = (inst_32867 + (1));
var tmp32927 = inst_32866;
var tmp32928 = inst_32864;
var tmp32929 = inst_32865;
var inst_32864__$1 = tmp32928;
var inst_32865__$1 = tmp32929;
var inst_32866__$1 = tmp32927;
var inst_32867__$1 = inst_32875;
var state_32912__$1 = (function (){var statearr_32932 = state_32912;
(statearr_32932[(8)] = inst_32866__$1);

(statearr_32932[(9)] = inst_32864__$1);

(statearr_32932[(10)] = inst_32867__$1);

(statearr_32932[(14)] = inst_32874);

(statearr_32932[(12)] = inst_32865__$1);

return statearr_32932;
})();
var statearr_32933_34320 = state_32912__$1;
(statearr_32933_34320[(2)] = null);

(statearr_32933_34320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (22))){
var state_32912__$1 = state_32912;
var statearr_32934_34323 = state_32912__$1;
(statearr_32934_34323[(2)] = null);

(statearr_32934_34323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (6))){
var inst_32851 = (state_32912[(13)]);
var inst_32861 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32851) : f.call(null,inst_32851));
var inst_32862 = cljs.core.seq(inst_32861);
var inst_32864 = inst_32862;
var inst_32865 = null;
var inst_32866 = (0);
var inst_32867 = (0);
var state_32912__$1 = (function (){var statearr_32935 = state_32912;
(statearr_32935[(8)] = inst_32866);

(statearr_32935[(9)] = inst_32864);

(statearr_32935[(10)] = inst_32867);

(statearr_32935[(12)] = inst_32865);

return statearr_32935;
})();
var statearr_32936_34328 = state_32912__$1;
(statearr_32936_34328[(2)] = null);

(statearr_32936_34328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (17))){
var inst_32878 = (state_32912[(7)]);
var inst_32882 = cljs.core.chunk_first(inst_32878);
var inst_32883 = cljs.core.chunk_rest(inst_32878);
var inst_32884 = cljs.core.count(inst_32882);
var inst_32864 = inst_32883;
var inst_32865 = inst_32882;
var inst_32866 = inst_32884;
var inst_32867 = (0);
var state_32912__$1 = (function (){var statearr_32937 = state_32912;
(statearr_32937[(8)] = inst_32866);

(statearr_32937[(9)] = inst_32864);

(statearr_32937[(10)] = inst_32867);

(statearr_32937[(12)] = inst_32865);

return statearr_32937;
})();
var statearr_32938_34329 = state_32912__$1;
(statearr_32938_34329[(2)] = null);

(statearr_32938_34329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (3))){
var inst_32910 = (state_32912[(2)]);
var state_32912__$1 = state_32912;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32912__$1,inst_32910);
} else {
if((state_val_32913 === (12))){
var inst_32898 = (state_32912[(2)]);
var state_32912__$1 = state_32912;
var statearr_32939_34332 = state_32912__$1;
(statearr_32939_34332[(2)] = inst_32898);

(statearr_32939_34332[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (2))){
var state_32912__$1 = state_32912;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32912__$1,(4),in$);
} else {
if((state_val_32913 === (23))){
var inst_32906 = (state_32912[(2)]);
var state_32912__$1 = state_32912;
var statearr_32940_34333 = state_32912__$1;
(statearr_32940_34333[(2)] = inst_32906);

(statearr_32940_34333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (19))){
var inst_32893 = (state_32912[(2)]);
var state_32912__$1 = state_32912;
var statearr_32946_34334 = state_32912__$1;
(statearr_32946_34334[(2)] = inst_32893);

(statearr_32946_34334[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (11))){
var inst_32878 = (state_32912[(7)]);
var inst_32864 = (state_32912[(9)]);
var inst_32878__$1 = cljs.core.seq(inst_32864);
var state_32912__$1 = (function (){var statearr_32947 = state_32912;
(statearr_32947[(7)] = inst_32878__$1);

return statearr_32947;
})();
if(inst_32878__$1){
var statearr_32948_34335 = state_32912__$1;
(statearr_32948_34335[(1)] = (14));

} else {
var statearr_32949_34339 = state_32912__$1;
(statearr_32949_34339[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (9))){
var inst_32900 = (state_32912[(2)]);
var inst_32901 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32912__$1 = (function (){var statearr_32951 = state_32912;
(statearr_32951[(15)] = inst_32900);

return statearr_32951;
})();
if(cljs.core.truth_(inst_32901)){
var statearr_32952_34347 = state_32912__$1;
(statearr_32952_34347[(1)] = (21));

} else {
var statearr_32953_34348 = state_32912__$1;
(statearr_32953_34348[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (5))){
var inst_32854 = cljs.core.async.close_BANG_(out);
var state_32912__$1 = state_32912;
var statearr_32954_34349 = state_32912__$1;
(statearr_32954_34349[(2)] = inst_32854);

(statearr_32954_34349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (14))){
var inst_32878 = (state_32912[(7)]);
var inst_32880 = cljs.core.chunked_seq_QMARK_(inst_32878);
var state_32912__$1 = state_32912;
if(inst_32880){
var statearr_32955_34364 = state_32912__$1;
(statearr_32955_34364[(1)] = (17));

} else {
var statearr_32956_34365 = state_32912__$1;
(statearr_32956_34365[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (16))){
var inst_32896 = (state_32912[(2)]);
var state_32912__$1 = state_32912;
var statearr_32957_34370 = state_32912__$1;
(statearr_32957_34370[(2)] = inst_32896);

(statearr_32957_34370[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (10))){
var inst_32867 = (state_32912[(10)]);
var inst_32865 = (state_32912[(12)]);
var inst_32872 = cljs.core._nth(inst_32865,inst_32867);
var state_32912__$1 = state_32912;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32912__$1,(13),out,inst_32872);
} else {
if((state_val_32913 === (18))){
var inst_32878 = (state_32912[(7)]);
var inst_32887 = cljs.core.first(inst_32878);
var state_32912__$1 = state_32912;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32912__$1,(20),out,inst_32887);
} else {
if((state_val_32913 === (8))){
var inst_32866 = (state_32912[(8)]);
var inst_32867 = (state_32912[(10)]);
var inst_32869 = (inst_32867 < inst_32866);
var inst_32870 = inst_32869;
var state_32912__$1 = state_32912;
if(cljs.core.truth_(inst_32870)){
var statearr_32961_34376 = state_32912__$1;
(statearr_32961_34376[(1)] = (10));

} else {
var statearr_32962_34377 = state_32912__$1;
(statearr_32962_34377[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__30690__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30690__auto____0 = (function (){
var statearr_32963 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32963[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30690__auto__);

(statearr_32963[(1)] = (1));

return statearr_32963;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30690__auto____1 = (function (state_32912){
while(true){
var ret_value__30691__auto__ = (function (){try{while(true){
var result__30692__auto__ = switch__30689__auto__(state_32912);
if(cljs.core.keyword_identical_QMARK_(result__30692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30692__auto__;
}
break;
}
}catch (e32968){var ex__30693__auto__ = e32968;
var statearr_32972_34425 = state_32912;
(statearr_32972_34425[(2)] = ex__30693__auto__);


if(cljs.core.seq((state_32912[(4)]))){
var statearr_32973_34426 = state_32912;
(statearr_32973_34426[(1)] = cljs.core.first((state_32912[(4)])));

} else {
throw ex__30693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34427 = state_32912;
state_32912 = G__34427;
continue;
} else {
return ret_value__30691__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30690__auto__ = function(state_32912){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30690__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30690__auto____1.call(this,state_32912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30690__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30690__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30690__auto__;
})()
})();
var state__30876__auto__ = (function (){var statearr_32980 = f__30875__auto__();
(statearr_32980[(6)] = c__30874__auto__);

return statearr_32980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30876__auto__);
}));

return c__30874__auto__;
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
var G__33020 = arguments.length;
switch (G__33020) {
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
var c__30874__auto___34431 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30875__auto__ = (function (){var switch__30689__auto__ = (function (state_33044){
var state_val_33045 = (state_33044[(1)]);
if((state_val_33045 === (7))){
var inst_33039 = (state_33044[(2)]);
var state_33044__$1 = state_33044;
var statearr_33047_34432 = state_33044__$1;
(statearr_33047_34432[(2)] = inst_33039);

(statearr_33047_34432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33045 === (1))){
var inst_33021 = null;
var state_33044__$1 = (function (){var statearr_33048 = state_33044;
(statearr_33048[(7)] = inst_33021);

return statearr_33048;
})();
var statearr_33050_34433 = state_33044__$1;
(statearr_33050_34433[(2)] = null);

(statearr_33050_34433[(1)] = (2));


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
var statearr_33054_34434 = state_33044__$1;
(statearr_33054_34434[(1)] = (5));

} else {
var statearr_33055_34435 = state_33044__$1;
(statearr_33055_34435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33045 === (6))){
var state_33044__$1 = state_33044;
var statearr_33056_34436 = state_33044__$1;
(statearr_33056_34436[(2)] = null);

(statearr_33056_34436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33045 === (3))){
var inst_33041 = (state_33044[(2)]);
var inst_33042 = cljs.core.async.close_BANG_(out);
var state_33044__$1 = (function (){var statearr_33057 = state_33044;
(statearr_33057[(9)] = inst_33041);

return statearr_33057;
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
var state_33044__$1 = (function (){var statearr_33058 = state_33044;
(statearr_33058[(10)] = inst_33033);

(statearr_33058[(7)] = inst_33021);

return statearr_33058;
})();
var statearr_33059_34437 = state_33044__$1;
(statearr_33059_34437[(2)] = null);

(statearr_33059_34437[(1)] = (2));


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
var statearr_33069_34438 = state_33044__$1;
(statearr_33069_34438[(1)] = (8));

} else {
var statearr_33070_34439 = state_33044__$1;
(statearr_33070_34439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33045 === (10))){
var inst_33036 = (state_33044[(2)]);
var state_33044__$1 = state_33044;
var statearr_33071_34440 = state_33044__$1;
(statearr_33071_34440[(2)] = inst_33036);

(statearr_33071_34440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33045 === (8))){
var inst_33021 = (state_33044[(7)]);
var tmp33068 = inst_33021;
var inst_33021__$1 = tmp33068;
var state_33044__$1 = (function (){var statearr_33073 = state_33044;
(statearr_33073[(7)] = inst_33021__$1);

return statearr_33073;
})();
var statearr_33074_34441 = state_33044__$1;
(statearr_33074_34441[(2)] = null);

(statearr_33074_34441[(1)] = (2));


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
var cljs$core$async$state_machine__30690__auto__ = null;
var cljs$core$async$state_machine__30690__auto____0 = (function (){
var statearr_33075 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33075[(0)] = cljs$core$async$state_machine__30690__auto__);

(statearr_33075[(1)] = (1));

return statearr_33075;
});
var cljs$core$async$state_machine__30690__auto____1 = (function (state_33044){
while(true){
var ret_value__30691__auto__ = (function (){try{while(true){
var result__30692__auto__ = switch__30689__auto__(state_33044);
if(cljs.core.keyword_identical_QMARK_(result__30692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30692__auto__;
}
break;
}
}catch (e33076){var ex__30693__auto__ = e33076;
var statearr_33077_34487 = state_33044;
(statearr_33077_34487[(2)] = ex__30693__auto__);


if(cljs.core.seq((state_33044[(4)]))){
var statearr_33078_34488 = state_33044;
(statearr_33078_34488[(1)] = cljs.core.first((state_33044[(4)])));

} else {
throw ex__30693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34489 = state_33044;
state_33044 = G__34489;
continue;
} else {
return ret_value__30691__auto__;
}
break;
}
});
cljs$core$async$state_machine__30690__auto__ = function(state_33044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30690__auto____1.call(this,state_33044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30690__auto____0;
cljs$core$async$state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30690__auto____1;
return cljs$core$async$state_machine__30690__auto__;
})()
})();
var state__30876__auto__ = (function (){var statearr_33079 = f__30875__auto__();
(statearr_33079[(6)] = c__30874__auto___34431);

return statearr_33079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30876__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33085 = arguments.length;
switch (G__33085) {
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
var c__30874__auto___34491 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30875__auto__ = (function (){var switch__30689__auto__ = (function (state_33123){
var state_val_33124 = (state_33123[(1)]);
if((state_val_33124 === (7))){
var inst_33119 = (state_33123[(2)]);
var state_33123__$1 = state_33123;
var statearr_33125_34492 = state_33123__$1;
(statearr_33125_34492[(2)] = inst_33119);

(statearr_33125_34492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33124 === (1))){
var inst_33086 = (new Array(n));
var inst_33087 = inst_33086;
var inst_33088 = (0);
var state_33123__$1 = (function (){var statearr_33126 = state_33123;
(statearr_33126[(7)] = inst_33088);

(statearr_33126[(8)] = inst_33087);

return statearr_33126;
})();
var statearr_33127_34498 = state_33123__$1;
(statearr_33127_34498[(2)] = null);

(statearr_33127_34498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33124 === (4))){
var inst_33091 = (state_33123[(9)]);
var inst_33091__$1 = (state_33123[(2)]);
var inst_33092 = (inst_33091__$1 == null);
var inst_33093 = cljs.core.not(inst_33092);
var state_33123__$1 = (function (){var statearr_33128 = state_33123;
(statearr_33128[(9)] = inst_33091__$1);

return statearr_33128;
})();
if(inst_33093){
var statearr_33129_34500 = state_33123__$1;
(statearr_33129_34500[(1)] = (5));

} else {
var statearr_33130_34501 = state_33123__$1;
(statearr_33130_34501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33124 === (15))){
var inst_33113 = (state_33123[(2)]);
var state_33123__$1 = state_33123;
var statearr_33131_34502 = state_33123__$1;
(statearr_33131_34502[(2)] = inst_33113);

(statearr_33131_34502[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33124 === (13))){
var state_33123__$1 = state_33123;
var statearr_33135_34503 = state_33123__$1;
(statearr_33135_34503[(2)] = null);

(statearr_33135_34503[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33124 === (6))){
var inst_33088 = (state_33123[(7)]);
var inst_33109 = (inst_33088 > (0));
var state_33123__$1 = state_33123;
if(cljs.core.truth_(inst_33109)){
var statearr_33137_34504 = state_33123__$1;
(statearr_33137_34504[(1)] = (12));

} else {
var statearr_33139_34505 = state_33123__$1;
(statearr_33139_34505[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33124 === (3))){
var inst_33121 = (state_33123[(2)]);
var state_33123__$1 = state_33123;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33123__$1,inst_33121);
} else {
if((state_val_33124 === (12))){
var inst_33087 = (state_33123[(8)]);
var inst_33111 = cljs.core.vec(inst_33087);
var state_33123__$1 = state_33123;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33123__$1,(15),out,inst_33111);
} else {
if((state_val_33124 === (2))){
var state_33123__$1 = state_33123;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33123__$1,(4),ch);
} else {
if((state_val_33124 === (11))){
var inst_33103 = (state_33123[(2)]);
var inst_33104 = (new Array(n));
var inst_33087 = inst_33104;
var inst_33088 = (0);
var state_33123__$1 = (function (){var statearr_33141 = state_33123;
(statearr_33141[(7)] = inst_33088);

(statearr_33141[(8)] = inst_33087);

(statearr_33141[(10)] = inst_33103);

return statearr_33141;
})();
var statearr_33142_34506 = state_33123__$1;
(statearr_33142_34506[(2)] = null);

(statearr_33142_34506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33124 === (9))){
var inst_33087 = (state_33123[(8)]);
var inst_33101 = cljs.core.vec(inst_33087);
var state_33123__$1 = state_33123;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33123__$1,(11),out,inst_33101);
} else {
if((state_val_33124 === (5))){
var inst_33088 = (state_33123[(7)]);
var inst_33087 = (state_33123[(8)]);
var inst_33096 = (state_33123[(11)]);
var inst_33091 = (state_33123[(9)]);
var inst_33095 = (inst_33087[inst_33088] = inst_33091);
var inst_33096__$1 = (inst_33088 + (1));
var inst_33097 = (inst_33096__$1 < n);
var state_33123__$1 = (function (){var statearr_33143 = state_33123;
(statearr_33143[(12)] = inst_33095);

(statearr_33143[(11)] = inst_33096__$1);

return statearr_33143;
})();
if(cljs.core.truth_(inst_33097)){
var statearr_33144_34507 = state_33123__$1;
(statearr_33144_34507[(1)] = (8));

} else {
var statearr_33145_34508 = state_33123__$1;
(statearr_33145_34508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33124 === (14))){
var inst_33116 = (state_33123[(2)]);
var inst_33117 = cljs.core.async.close_BANG_(out);
var state_33123__$1 = (function (){var statearr_33147 = state_33123;
(statearr_33147[(13)] = inst_33116);

return statearr_33147;
})();
var statearr_33148_34509 = state_33123__$1;
(statearr_33148_34509[(2)] = inst_33117);

(statearr_33148_34509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33124 === (10))){
var inst_33107 = (state_33123[(2)]);
var state_33123__$1 = state_33123;
var statearr_33149_34510 = state_33123__$1;
(statearr_33149_34510[(2)] = inst_33107);

(statearr_33149_34510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33124 === (8))){
var inst_33087 = (state_33123[(8)]);
var inst_33096 = (state_33123[(11)]);
var tmp33146 = inst_33087;
var inst_33087__$1 = tmp33146;
var inst_33088 = inst_33096;
var state_33123__$1 = (function (){var statearr_33150 = state_33123;
(statearr_33150[(7)] = inst_33088);

(statearr_33150[(8)] = inst_33087__$1);

return statearr_33150;
})();
var statearr_33151_34511 = state_33123__$1;
(statearr_33151_34511[(2)] = null);

(statearr_33151_34511[(1)] = (2));


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
var cljs$core$async$state_machine__30690__auto__ = null;
var cljs$core$async$state_machine__30690__auto____0 = (function (){
var statearr_33152 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33152[(0)] = cljs$core$async$state_machine__30690__auto__);

(statearr_33152[(1)] = (1));

return statearr_33152;
});
var cljs$core$async$state_machine__30690__auto____1 = (function (state_33123){
while(true){
var ret_value__30691__auto__ = (function (){try{while(true){
var result__30692__auto__ = switch__30689__auto__(state_33123);
if(cljs.core.keyword_identical_QMARK_(result__30692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30692__auto__;
}
break;
}
}catch (e33153){var ex__30693__auto__ = e33153;
var statearr_33154_34512 = state_33123;
(statearr_33154_34512[(2)] = ex__30693__auto__);


if(cljs.core.seq((state_33123[(4)]))){
var statearr_33155_34513 = state_33123;
(statearr_33155_34513[(1)] = cljs.core.first((state_33123[(4)])));

} else {
throw ex__30693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34514 = state_33123;
state_33123 = G__34514;
continue;
} else {
return ret_value__30691__auto__;
}
break;
}
});
cljs$core$async$state_machine__30690__auto__ = function(state_33123){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30690__auto____1.call(this,state_33123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30690__auto____0;
cljs$core$async$state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30690__auto____1;
return cljs$core$async$state_machine__30690__auto__;
})()
})();
var state__30876__auto__ = (function (){var statearr_33156 = f__30875__auto__();
(statearr_33156[(6)] = c__30874__auto___34491);

return statearr_33156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30876__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33159 = arguments.length;
switch (G__33159) {
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
var c__30874__auto___34516 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30875__auto__ = (function (){var switch__30689__auto__ = (function (state_33201){
var state_val_33202 = (state_33201[(1)]);
if((state_val_33202 === (7))){
var inst_33197 = (state_33201[(2)]);
var state_33201__$1 = state_33201;
var statearr_33204_34517 = state_33201__$1;
(statearr_33204_34517[(2)] = inst_33197);

(statearr_33204_34517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (1))){
var inst_33160 = [];
var inst_33161 = inst_33160;
var inst_33162 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33201__$1 = (function (){var statearr_33205 = state_33201;
(statearr_33205[(7)] = inst_33162);

(statearr_33205[(8)] = inst_33161);

return statearr_33205;
})();
var statearr_33206_34518 = state_33201__$1;
(statearr_33206_34518[(2)] = null);

(statearr_33206_34518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (4))){
var inst_33165 = (state_33201[(9)]);
var inst_33165__$1 = (state_33201[(2)]);
var inst_33166 = (inst_33165__$1 == null);
var inst_33167 = cljs.core.not(inst_33166);
var state_33201__$1 = (function (){var statearr_33207 = state_33201;
(statearr_33207[(9)] = inst_33165__$1);

return statearr_33207;
})();
if(inst_33167){
var statearr_33209_34519 = state_33201__$1;
(statearr_33209_34519[(1)] = (5));

} else {
var statearr_33210_34520 = state_33201__$1;
(statearr_33210_34520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (15))){
var inst_33191 = (state_33201[(2)]);
var state_33201__$1 = state_33201;
var statearr_33211_34521 = state_33201__$1;
(statearr_33211_34521[(2)] = inst_33191);

(statearr_33211_34521[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (13))){
var state_33201__$1 = state_33201;
var statearr_33212_34522 = state_33201__$1;
(statearr_33212_34522[(2)] = null);

(statearr_33212_34522[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (6))){
var inst_33161 = (state_33201[(8)]);
var inst_33186 = inst_33161.length;
var inst_33187 = (inst_33186 > (0));
var state_33201__$1 = state_33201;
if(cljs.core.truth_(inst_33187)){
var statearr_33213_34523 = state_33201__$1;
(statearr_33213_34523[(1)] = (12));

} else {
var statearr_33214_34524 = state_33201__$1;
(statearr_33214_34524[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (3))){
var inst_33199 = (state_33201[(2)]);
var state_33201__$1 = state_33201;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33201__$1,inst_33199);
} else {
if((state_val_33202 === (12))){
var inst_33161 = (state_33201[(8)]);
var inst_33189 = cljs.core.vec(inst_33161);
var state_33201__$1 = state_33201;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33201__$1,(15),out,inst_33189);
} else {
if((state_val_33202 === (2))){
var state_33201__$1 = state_33201;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33201__$1,(4),ch);
} else {
if((state_val_33202 === (11))){
var inst_33165 = (state_33201[(9)]);
var inst_33169 = (state_33201[(10)]);
var inst_33179 = (state_33201[(2)]);
var inst_33180 = [];
var inst_33181 = inst_33180.push(inst_33165);
var inst_33161 = inst_33180;
var inst_33162 = inst_33169;
var state_33201__$1 = (function (){var statearr_33215 = state_33201;
(statearr_33215[(11)] = inst_33179);

(statearr_33215[(12)] = inst_33181);

(statearr_33215[(7)] = inst_33162);

(statearr_33215[(8)] = inst_33161);

return statearr_33215;
})();
var statearr_33217_34525 = state_33201__$1;
(statearr_33217_34525[(2)] = null);

(statearr_33217_34525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (9))){
var inst_33161 = (state_33201[(8)]);
var inst_33177 = cljs.core.vec(inst_33161);
var state_33201__$1 = state_33201;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33201__$1,(11),out,inst_33177);
} else {
if((state_val_33202 === (5))){
var inst_33165 = (state_33201[(9)]);
var inst_33169 = (state_33201[(10)]);
var inst_33162 = (state_33201[(7)]);
var inst_33169__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33165) : f.call(null,inst_33165));
var inst_33170 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33169__$1,inst_33162);
var inst_33171 = cljs.core.keyword_identical_QMARK_(inst_33162,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33172 = ((inst_33170) || (inst_33171));
var state_33201__$1 = (function (){var statearr_33219 = state_33201;
(statearr_33219[(10)] = inst_33169__$1);

return statearr_33219;
})();
if(cljs.core.truth_(inst_33172)){
var statearr_33220_34526 = state_33201__$1;
(statearr_33220_34526[(1)] = (8));

} else {
var statearr_33221_34527 = state_33201__$1;
(statearr_33221_34527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (14))){
var inst_33194 = (state_33201[(2)]);
var inst_33195 = cljs.core.async.close_BANG_(out);
var state_33201__$1 = (function (){var statearr_33224 = state_33201;
(statearr_33224[(13)] = inst_33194);

return statearr_33224;
})();
var statearr_33225_34528 = state_33201__$1;
(statearr_33225_34528[(2)] = inst_33195);

(statearr_33225_34528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (10))){
var inst_33184 = (state_33201[(2)]);
var state_33201__$1 = state_33201;
var statearr_33227_34529 = state_33201__$1;
(statearr_33227_34529[(2)] = inst_33184);

(statearr_33227_34529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33202 === (8))){
var inst_33165 = (state_33201[(9)]);
var inst_33169 = (state_33201[(10)]);
var inst_33161 = (state_33201[(8)]);
var inst_33174 = inst_33161.push(inst_33165);
var tmp33223 = inst_33161;
var inst_33161__$1 = tmp33223;
var inst_33162 = inst_33169;
var state_33201__$1 = (function (){var statearr_33228 = state_33201;
(statearr_33228[(14)] = inst_33174);

(statearr_33228[(7)] = inst_33162);

(statearr_33228[(8)] = inst_33161__$1);

return statearr_33228;
})();
var statearr_33229_34530 = state_33201__$1;
(statearr_33229_34530[(2)] = null);

(statearr_33229_34530[(1)] = (2));


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
var cljs$core$async$state_machine__30690__auto__ = null;
var cljs$core$async$state_machine__30690__auto____0 = (function (){
var statearr_33231 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33231[(0)] = cljs$core$async$state_machine__30690__auto__);

(statearr_33231[(1)] = (1));

return statearr_33231;
});
var cljs$core$async$state_machine__30690__auto____1 = (function (state_33201){
while(true){
var ret_value__30691__auto__ = (function (){try{while(true){
var result__30692__auto__ = switch__30689__auto__(state_33201);
if(cljs.core.keyword_identical_QMARK_(result__30692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30692__auto__;
}
break;
}
}catch (e33232){var ex__30693__auto__ = e33232;
var statearr_33233_34531 = state_33201;
(statearr_33233_34531[(2)] = ex__30693__auto__);


if(cljs.core.seq((state_33201[(4)]))){
var statearr_33234_34532 = state_33201;
(statearr_33234_34532[(1)] = cljs.core.first((state_33201[(4)])));

} else {
throw ex__30693__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34533 = state_33201;
state_33201 = G__34533;
continue;
} else {
return ret_value__30691__auto__;
}
break;
}
});
cljs$core$async$state_machine__30690__auto__ = function(state_33201){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30690__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30690__auto____1.call(this,state_33201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30690__auto____0;
cljs$core$async$state_machine__30690__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30690__auto____1;
return cljs$core$async$state_machine__30690__auto__;
})()
})();
var state__30876__auto__ = (function (){var statearr_33236 = f__30875__auto__();
(statearr_33236[(6)] = c__30874__auto___34516);

return statearr_33236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30876__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
