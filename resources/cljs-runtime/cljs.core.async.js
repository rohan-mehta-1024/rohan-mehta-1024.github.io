goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31035 = arguments.length;
switch (G__31035) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31039 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31039 = (function (f,blockable,meta31040){
this.f = f;
this.blockable = blockable;
this.meta31040 = meta31040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31041,meta31040__$1){
var self__ = this;
var _31041__$1 = this;
return (new cljs.core.async.t_cljs$core$async31039(self__.f,self__.blockable,meta31040__$1));
}));

(cljs.core.async.t_cljs$core$async31039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31041){
var self__ = this;
var _31041__$1 = this;
return self__.meta31040;
}));

(cljs.core.async.t_cljs$core$async31039.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31039.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31039.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31039.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31039.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31040","meta31040",-1735126441,null)], null);
}));

(cljs.core.async.t_cljs$core$async31039.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31039.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31039");

(cljs.core.async.t_cljs$core$async31039.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31039");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31039.
 */
cljs.core.async.__GT_t_cljs$core$async31039 = (function cljs$core$async$__GT_t_cljs$core$async31039(f__$1,blockable__$1,meta31040){
return (new cljs.core.async.t_cljs$core$async31039(f__$1,blockable__$1,meta31040));
});

}

return (new cljs.core.async.t_cljs$core$async31039(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31051 = arguments.length;
switch (G__31051) {
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
var G__31053 = arguments.length;
switch (G__31053) {
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
var G__31059 = arguments.length;
switch (G__31059) {
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
var G__31063 = arguments.length;
switch (G__31063) {
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
var n__4613__auto___33279 = n;
var x_33280 = (0);
while(true){
if((x_33280 < n__4613__auto___33279)){
(a[x_33280] = x_33280);

var G__33281 = (x_33280 + (1));
x_33280 = G__33281;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31064 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31064 = (function (flag,meta31065){
this.flag = flag;
this.meta31065 = meta31065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31066,meta31065__$1){
var self__ = this;
var _31066__$1 = this;
return (new cljs.core.async.t_cljs$core$async31064(self__.flag,meta31065__$1));
}));

(cljs.core.async.t_cljs$core$async31064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31066){
var self__ = this;
var _31066__$1 = this;
return self__.meta31065;
}));

(cljs.core.async.t_cljs$core$async31064.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31064.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31064.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31064.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31064.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31065","meta31065",-114598550,null)], null);
}));

(cljs.core.async.t_cljs$core$async31064.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31064");

(cljs.core.async.t_cljs$core$async31064.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31064");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31064.
 */
cljs.core.async.__GT_t_cljs$core$async31064 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31064(flag__$1,meta31065){
return (new cljs.core.async.t_cljs$core$async31064(flag__$1,meta31065));
});

}

return (new cljs.core.async.t_cljs$core$async31064(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31068 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31068 = (function (flag,cb,meta31069){
this.flag = flag;
this.cb = cb;
this.meta31069 = meta31069;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31070,meta31069__$1){
var self__ = this;
var _31070__$1 = this;
return (new cljs.core.async.t_cljs$core$async31068(self__.flag,self__.cb,meta31069__$1));
}));

(cljs.core.async.t_cljs$core$async31068.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31070){
var self__ = this;
var _31070__$1 = this;
return self__.meta31069;
}));

(cljs.core.async.t_cljs$core$async31068.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31068.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31068.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31068.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31068.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31069","meta31069",1620314950,null)], null);
}));

(cljs.core.async.t_cljs$core$async31068.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31068.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31068");

(cljs.core.async.t_cljs$core$async31068.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31068");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31068.
 */
cljs.core.async.__GT_t_cljs$core$async31068 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31068(flag__$1,cb__$1,meta31069){
return (new cljs.core.async.t_cljs$core$async31068(flag__$1,cb__$1,meta31069));
});

}

return (new cljs.core.async.t_cljs$core$async31068(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31072_SHARP_){
var G__31081 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31072_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31081) : fret.call(null,G__31081));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31073_SHARP_){
var G__31082 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31073_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31082) : fret.call(null,G__31082));
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
var G__33289 = (i + (1));
i = G__33289;
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
var len__4736__auto___33302 = arguments.length;
var i__4737__auto___33306 = (0);
while(true){
if((i__4737__auto___33306 < len__4736__auto___33302)){
args__4742__auto__.push((arguments[i__4737__auto___33306]));

var G__33307 = (i__4737__auto___33306 + (1));
i__4737__auto___33306 = G__33307;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31086){
var map__31087 = p__31086;
var map__31087__$1 = (((((!((map__31087 == null))))?(((((map__31087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31087):map__31087);
var opts = map__31087__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31083){
var G__31084 = cljs.core.first(seq31083);
var seq31083__$1 = cljs.core.next(seq31083);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31084,seq31083__$1);
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
var G__31107 = arguments.length;
switch (G__31107) {
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
var c__30944__auto___33319 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30945__auto__ = (function (){var switch__30714__auto__ = (function (state_31145){
var state_val_31148 = (state_31145[(1)]);
if((state_val_31148 === (7))){
var inst_31141 = (state_31145[(2)]);
var state_31145__$1 = state_31145;
var statearr_31149_33330 = state_31145__$1;
(statearr_31149_33330[(2)] = inst_31141);

(statearr_31149_33330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (1))){
var state_31145__$1 = state_31145;
var statearr_31150_33331 = state_31145__$1;
(statearr_31150_33331[(2)] = null);

(statearr_31150_33331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (4))){
var inst_31118 = (state_31145[(7)]);
var inst_31118__$1 = (state_31145[(2)]);
var inst_31123 = (inst_31118__$1 == null);
var state_31145__$1 = (function (){var statearr_31151 = state_31145;
(statearr_31151[(7)] = inst_31118__$1);

return statearr_31151;
})();
if(cljs.core.truth_(inst_31123)){
var statearr_31152_33332 = state_31145__$1;
(statearr_31152_33332[(1)] = (5));

} else {
var statearr_31153_33333 = state_31145__$1;
(statearr_31153_33333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (13))){
var state_31145__$1 = state_31145;
var statearr_31154_33334 = state_31145__$1;
(statearr_31154_33334[(2)] = null);

(statearr_31154_33334[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (6))){
var inst_31118 = (state_31145[(7)]);
var state_31145__$1 = state_31145;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31145__$1,(11),to,inst_31118);
} else {
if((state_val_31148 === (3))){
var inst_31143 = (state_31145[(2)]);
var state_31145__$1 = state_31145;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31145__$1,inst_31143);
} else {
if((state_val_31148 === (12))){
var state_31145__$1 = state_31145;
var statearr_31155_33335 = state_31145__$1;
(statearr_31155_33335[(2)] = null);

(statearr_31155_33335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (2))){
var state_31145__$1 = state_31145;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31145__$1,(4),from);
} else {
if((state_val_31148 === (11))){
var inst_31134 = (state_31145[(2)]);
var state_31145__$1 = state_31145;
if(cljs.core.truth_(inst_31134)){
var statearr_31156_33336 = state_31145__$1;
(statearr_31156_33336[(1)] = (12));

} else {
var statearr_31157_33337 = state_31145__$1;
(statearr_31157_33337[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (9))){
var state_31145__$1 = state_31145;
var statearr_31158_33338 = state_31145__$1;
(statearr_31158_33338[(2)] = null);

(statearr_31158_33338[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (5))){
var state_31145__$1 = state_31145;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31159_33339 = state_31145__$1;
(statearr_31159_33339[(1)] = (8));

} else {
var statearr_31160_33340 = state_31145__$1;
(statearr_31160_33340[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (14))){
var inst_31139 = (state_31145[(2)]);
var state_31145__$1 = state_31145;
var statearr_31161_33341 = state_31145__$1;
(statearr_31161_33341[(2)] = inst_31139);

(statearr_31161_33341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (10))){
var inst_31131 = (state_31145[(2)]);
var state_31145__$1 = state_31145;
var statearr_31175_33356 = state_31145__$1;
(statearr_31175_33356[(2)] = inst_31131);

(statearr_31175_33356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (8))){
var inst_31128 = cljs.core.async.close_BANG_(to);
var state_31145__$1 = state_31145;
var statearr_31176_33360 = state_31145__$1;
(statearr_31176_33360[(2)] = inst_31128);

(statearr_31176_33360[(1)] = (10));


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
var cljs$core$async$state_machine__30715__auto__ = null;
var cljs$core$async$state_machine__30715__auto____0 = (function (){
var statearr_31177 = [null,null,null,null,null,null,null,null];
(statearr_31177[(0)] = cljs$core$async$state_machine__30715__auto__);

(statearr_31177[(1)] = (1));

return statearr_31177;
});
var cljs$core$async$state_machine__30715__auto____1 = (function (state_31145){
while(true){
var ret_value__30716__auto__ = (function (){try{while(true){
var result__30717__auto__ = switch__30714__auto__(state_31145);
if(cljs.core.keyword_identical_QMARK_(result__30717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30717__auto__;
}
break;
}
}catch (e31178){var ex__30718__auto__ = e31178;
var statearr_31179_33368 = state_31145;
(statearr_31179_33368[(2)] = ex__30718__auto__);


if(cljs.core.seq((state_31145[(4)]))){
var statearr_31180_33375 = state_31145;
(statearr_31180_33375[(1)] = cljs.core.first((state_31145[(4)])));

} else {
throw ex__30718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33376 = state_31145;
state_31145 = G__33376;
continue;
} else {
return ret_value__30716__auto__;
}
break;
}
});
cljs$core$async$state_machine__30715__auto__ = function(state_31145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30715__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30715__auto____1.call(this,state_31145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30715__auto____0;
cljs$core$async$state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30715__auto____1;
return cljs$core$async$state_machine__30715__auto__;
})()
})();
var state__30946__auto__ = (function (){var statearr_31181 = f__30945__auto__();
(statearr_31181[(6)] = c__30944__auto___33319);

return statearr_31181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30946__auto__);
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
var process = (function (p__31182){
var vec__31183 = p__31182;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31183,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31183,(1),null);
var job = vec__31183;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30944__auto___33377 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30945__auto__ = (function (){var switch__30714__auto__ = (function (state_31190){
var state_val_31191 = (state_31190[(1)]);
if((state_val_31191 === (1))){
var state_31190__$1 = state_31190;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31190__$1,(2),res,v);
} else {
if((state_val_31191 === (2))){
var inst_31187 = (state_31190[(2)]);
var inst_31188 = cljs.core.async.close_BANG_(res);
var state_31190__$1 = (function (){var statearr_31192 = state_31190;
(statearr_31192[(7)] = inst_31187);

return statearr_31192;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31190__$1,inst_31188);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30715__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30715__auto____0 = (function (){
var statearr_31193 = [null,null,null,null,null,null,null,null];
(statearr_31193[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30715__auto__);

(statearr_31193[(1)] = (1));

return statearr_31193;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30715__auto____1 = (function (state_31190){
while(true){
var ret_value__30716__auto__ = (function (){try{while(true){
var result__30717__auto__ = switch__30714__auto__(state_31190);
if(cljs.core.keyword_identical_QMARK_(result__30717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30717__auto__;
}
break;
}
}catch (e31194){var ex__30718__auto__ = e31194;
var statearr_31195_33384 = state_31190;
(statearr_31195_33384[(2)] = ex__30718__auto__);


if(cljs.core.seq((state_31190[(4)]))){
var statearr_31196_33391 = state_31190;
(statearr_31196_33391[(1)] = cljs.core.first((state_31190[(4)])));

} else {
throw ex__30718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33392 = state_31190;
state_31190 = G__33392;
continue;
} else {
return ret_value__30716__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30715__auto__ = function(state_31190){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30715__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30715__auto____1.call(this,state_31190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30715__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30715__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30715__auto__;
})()
})();
var state__30946__auto__ = (function (){var statearr_31197 = f__30945__auto__();
(statearr_31197[(6)] = c__30944__auto___33377);

return statearr_31197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30946__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31198){
var vec__31199 = p__31198;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31199,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31199,(1),null);
var job = vec__31199;
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
var n__4613__auto___33393 = n;
var __33394 = (0);
while(true){
if((__33394 < n__4613__auto___33393)){
var G__31204_33395 = type;
var G__31204_33396__$1 = (((G__31204_33395 instanceof cljs.core.Keyword))?G__31204_33395.fqn:null);
switch (G__31204_33396__$1) {
case "compute":
var c__30944__auto___33398 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33394,c__30944__auto___33398,G__31204_33395,G__31204_33396__$1,n__4613__auto___33393,jobs,results,process,async){
return (function (){
var f__30945__auto__ = (function (){var switch__30714__auto__ = ((function (__33394,c__30944__auto___33398,G__31204_33395,G__31204_33396__$1,n__4613__auto___33393,jobs,results,process,async){
return (function (state_31218){
var state_val_31219 = (state_31218[(1)]);
if((state_val_31219 === (1))){
var state_31218__$1 = state_31218;
var statearr_31225_33405 = state_31218__$1;
(statearr_31225_33405[(2)] = null);

(statearr_31225_33405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (2))){
var state_31218__$1 = state_31218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31218__$1,(4),jobs);
} else {
if((state_val_31219 === (3))){
var inst_31216 = (state_31218[(2)]);
var state_31218__$1 = state_31218;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31218__$1,inst_31216);
} else {
if((state_val_31219 === (4))){
var inst_31208 = (state_31218[(2)]);
var inst_31209 = process(inst_31208);
var state_31218__$1 = state_31218;
if(cljs.core.truth_(inst_31209)){
var statearr_31226_33406 = state_31218__$1;
(statearr_31226_33406[(1)] = (5));

} else {
var statearr_31227_33407 = state_31218__$1;
(statearr_31227_33407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (5))){
var state_31218__$1 = state_31218;
var statearr_31230_33408 = state_31218__$1;
(statearr_31230_33408[(2)] = null);

(statearr_31230_33408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (6))){
var state_31218__$1 = state_31218;
var statearr_31231_33409 = state_31218__$1;
(statearr_31231_33409[(2)] = null);

(statearr_31231_33409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (7))){
var inst_31214 = (state_31218[(2)]);
var state_31218__$1 = state_31218;
var statearr_31236_33410 = state_31218__$1;
(statearr_31236_33410[(2)] = inst_31214);

(statearr_31236_33410[(1)] = (3));


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
});})(__33394,c__30944__auto___33398,G__31204_33395,G__31204_33396__$1,n__4613__auto___33393,jobs,results,process,async))
;
return ((function (__33394,switch__30714__auto__,c__30944__auto___33398,G__31204_33395,G__31204_33396__$1,n__4613__auto___33393,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30715__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30715__auto____0 = (function (){
var statearr_31237 = [null,null,null,null,null,null,null];
(statearr_31237[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30715__auto__);

(statearr_31237[(1)] = (1));

return statearr_31237;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30715__auto____1 = (function (state_31218){
while(true){
var ret_value__30716__auto__ = (function (){try{while(true){
var result__30717__auto__ = switch__30714__auto__(state_31218);
if(cljs.core.keyword_identical_QMARK_(result__30717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30717__auto__;
}
break;
}
}catch (e31238){var ex__30718__auto__ = e31238;
var statearr_31239_33411 = state_31218;
(statearr_31239_33411[(2)] = ex__30718__auto__);


if(cljs.core.seq((state_31218[(4)]))){
var statearr_31240_33412 = state_31218;
(statearr_31240_33412[(1)] = cljs.core.first((state_31218[(4)])));

} else {
throw ex__30718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33413 = state_31218;
state_31218 = G__33413;
continue;
} else {
return ret_value__30716__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30715__auto__ = function(state_31218){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30715__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30715__auto____1.call(this,state_31218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30715__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30715__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30715__auto__;
})()
;})(__33394,switch__30714__auto__,c__30944__auto___33398,G__31204_33395,G__31204_33396__$1,n__4613__auto___33393,jobs,results,process,async))
})();
var state__30946__auto__ = (function (){var statearr_31265 = f__30945__auto__();
(statearr_31265[(6)] = c__30944__auto___33398);

return statearr_31265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30946__auto__);
});})(__33394,c__30944__auto___33398,G__31204_33395,G__31204_33396__$1,n__4613__auto___33393,jobs,results,process,async))
);


break;
case "async":
var c__30944__auto___33414 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33394,c__30944__auto___33414,G__31204_33395,G__31204_33396__$1,n__4613__auto___33393,jobs,results,process,async){
return (function (){
var f__30945__auto__ = (function (){var switch__30714__auto__ = ((function (__33394,c__30944__auto___33414,G__31204_33395,G__31204_33396__$1,n__4613__auto___33393,jobs,results,process,async){
return (function (state_31278){
var state_val_31279 = (state_31278[(1)]);
if((state_val_31279 === (1))){
var state_31278__$1 = state_31278;
var statearr_31282_33415 = state_31278__$1;
(statearr_31282_33415[(2)] = null);

(statearr_31282_33415[(1)] = (2));


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
var inst_31269 = async(inst_31268);
var state_31278__$1 = state_31278;
if(cljs.core.truth_(inst_31269)){
var statearr_31285_33416 = state_31278__$1;
(statearr_31285_33416[(1)] = (5));

} else {
var statearr_31286_33417 = state_31278__$1;
(statearr_31286_33417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (5))){
var state_31278__$1 = state_31278;
var statearr_31295_33418 = state_31278__$1;
(statearr_31295_33418[(2)] = null);

(statearr_31295_33418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (6))){
var state_31278__$1 = state_31278;
var statearr_31296_33419 = state_31278__$1;
(statearr_31296_33419[(2)] = null);

(statearr_31296_33419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31279 === (7))){
var inst_31274 = (state_31278[(2)]);
var state_31278__$1 = state_31278;
var statearr_31297_33425 = state_31278__$1;
(statearr_31297_33425[(2)] = inst_31274);

(statearr_31297_33425[(1)] = (3));


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
});})(__33394,c__30944__auto___33414,G__31204_33395,G__31204_33396__$1,n__4613__auto___33393,jobs,results,process,async))
;
return ((function (__33394,switch__30714__auto__,c__30944__auto___33414,G__31204_33395,G__31204_33396__$1,n__4613__auto___33393,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30715__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30715__auto____0 = (function (){
var statearr_31298 = [null,null,null,null,null,null,null];
(statearr_31298[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30715__auto__);

(statearr_31298[(1)] = (1));

return statearr_31298;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30715__auto____1 = (function (state_31278){
while(true){
var ret_value__30716__auto__ = (function (){try{while(true){
var result__30717__auto__ = switch__30714__auto__(state_31278);
if(cljs.core.keyword_identical_QMARK_(result__30717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30717__auto__;
}
break;
}
}catch (e31299){var ex__30718__auto__ = e31299;
var statearr_31300_33426 = state_31278;
(statearr_31300_33426[(2)] = ex__30718__auto__);


if(cljs.core.seq((state_31278[(4)]))){
var statearr_31301_33427 = state_31278;
(statearr_31301_33427[(1)] = cljs.core.first((state_31278[(4)])));

} else {
throw ex__30718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33428 = state_31278;
state_31278 = G__33428;
continue;
} else {
return ret_value__30716__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30715__auto__ = function(state_31278){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30715__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30715__auto____1.call(this,state_31278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30715__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30715__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30715__auto__;
})()
;})(__33394,switch__30714__auto__,c__30944__auto___33414,G__31204_33395,G__31204_33396__$1,n__4613__auto___33393,jobs,results,process,async))
})();
var state__30946__auto__ = (function (){var statearr_31302 = f__30945__auto__();
(statearr_31302[(6)] = c__30944__auto___33414);

return statearr_31302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30946__auto__);
});})(__33394,c__30944__auto___33414,G__31204_33395,G__31204_33396__$1,n__4613__auto___33393,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31204_33396__$1)].join('')));

}

var G__33429 = (__33394 + (1));
__33394 = G__33429;
continue;
} else {
}
break;
}

var c__30944__auto___33430 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30945__auto__ = (function (){var switch__30714__auto__ = (function (state_31325){
var state_val_31326 = (state_31325[(1)]);
if((state_val_31326 === (7))){
var inst_31321 = (state_31325[(2)]);
var state_31325__$1 = state_31325;
var statearr_31327_33431 = state_31325__$1;
(statearr_31327_33431[(2)] = inst_31321);

(statearr_31327_33431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (1))){
var state_31325__$1 = state_31325;
var statearr_31328_33432 = state_31325__$1;
(statearr_31328_33432[(2)] = null);

(statearr_31328_33432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (4))){
var inst_31305 = (state_31325[(7)]);
var inst_31305__$1 = (state_31325[(2)]);
var inst_31306 = (inst_31305__$1 == null);
var state_31325__$1 = (function (){var statearr_31329 = state_31325;
(statearr_31329[(7)] = inst_31305__$1);

return statearr_31329;
})();
if(cljs.core.truth_(inst_31306)){
var statearr_31330_33434 = state_31325__$1;
(statearr_31330_33434[(1)] = (5));

} else {
var statearr_31331_33435 = state_31325__$1;
(statearr_31331_33435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (6))){
var inst_31310 = (state_31325[(8)]);
var inst_31305 = (state_31325[(7)]);
var inst_31310__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31312 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31313 = [inst_31305,inst_31310__$1];
var inst_31314 = (new cljs.core.PersistentVector(null,2,(5),inst_31312,inst_31313,null));
var state_31325__$1 = (function (){var statearr_31332 = state_31325;
(statearr_31332[(8)] = inst_31310__$1);

return statearr_31332;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31325__$1,(8),jobs,inst_31314);
} else {
if((state_val_31326 === (3))){
var inst_31323 = (state_31325[(2)]);
var state_31325__$1 = state_31325;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31325__$1,inst_31323);
} else {
if((state_val_31326 === (2))){
var state_31325__$1 = state_31325;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31325__$1,(4),from);
} else {
if((state_val_31326 === (9))){
var inst_31318 = (state_31325[(2)]);
var state_31325__$1 = (function (){var statearr_31335 = state_31325;
(statearr_31335[(9)] = inst_31318);

return statearr_31335;
})();
var statearr_31336_33438 = state_31325__$1;
(statearr_31336_33438[(2)] = null);

(statearr_31336_33438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (5))){
var inst_31308 = cljs.core.async.close_BANG_(jobs);
var state_31325__$1 = state_31325;
var statearr_31337_33440 = state_31325__$1;
(statearr_31337_33440[(2)] = inst_31308);

(statearr_31337_33440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31326 === (8))){
var inst_31310 = (state_31325[(8)]);
var inst_31316 = (state_31325[(2)]);
var state_31325__$1 = (function (){var statearr_31339 = state_31325;
(statearr_31339[(10)] = inst_31316);

return statearr_31339;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31325__$1,(9),results,inst_31310);
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
var cljs$core$async$pipeline_STAR__$_state_machine__30715__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30715__auto____0 = (function (){
var statearr_31341 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31341[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30715__auto__);

(statearr_31341[(1)] = (1));

return statearr_31341;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30715__auto____1 = (function (state_31325){
while(true){
var ret_value__30716__auto__ = (function (){try{while(true){
var result__30717__auto__ = switch__30714__auto__(state_31325);
if(cljs.core.keyword_identical_QMARK_(result__30717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30717__auto__;
}
break;
}
}catch (e31342){var ex__30718__auto__ = e31342;
var statearr_31343_33441 = state_31325;
(statearr_31343_33441[(2)] = ex__30718__auto__);


if(cljs.core.seq((state_31325[(4)]))){
var statearr_31344_33442 = state_31325;
(statearr_31344_33442[(1)] = cljs.core.first((state_31325[(4)])));

} else {
throw ex__30718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33443 = state_31325;
state_31325 = G__33443;
continue;
} else {
return ret_value__30716__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30715__auto__ = function(state_31325){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30715__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30715__auto____1.call(this,state_31325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30715__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30715__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30715__auto__;
})()
})();
var state__30946__auto__ = (function (){var statearr_31345 = f__30945__auto__();
(statearr_31345[(6)] = c__30944__auto___33430);

return statearr_31345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30946__auto__);
}));


var c__30944__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30945__auto__ = (function (){var switch__30714__auto__ = (function (state_31386){
var state_val_31387 = (state_31386[(1)]);
if((state_val_31387 === (7))){
var inst_31382 = (state_31386[(2)]);
var state_31386__$1 = state_31386;
var statearr_31388_33444 = state_31386__$1;
(statearr_31388_33444[(2)] = inst_31382);

(statearr_31388_33444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (20))){
var state_31386__$1 = state_31386;
var statearr_31389_33445 = state_31386__$1;
(statearr_31389_33445[(2)] = null);

(statearr_31389_33445[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (1))){
var state_31386__$1 = state_31386;
var statearr_31390_33446 = state_31386__$1;
(statearr_31390_33446[(2)] = null);

(statearr_31390_33446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (4))){
var inst_31348 = (state_31386[(7)]);
var inst_31348__$1 = (state_31386[(2)]);
var inst_31349 = (inst_31348__$1 == null);
var state_31386__$1 = (function (){var statearr_31393 = state_31386;
(statearr_31393[(7)] = inst_31348__$1);

return statearr_31393;
})();
if(cljs.core.truth_(inst_31349)){
var statearr_31394_33447 = state_31386__$1;
(statearr_31394_33447[(1)] = (5));

} else {
var statearr_31395_33448 = state_31386__$1;
(statearr_31395_33448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (15))){
var inst_31364 = (state_31386[(8)]);
var state_31386__$1 = state_31386;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31386__$1,(18),to,inst_31364);
} else {
if((state_val_31387 === (21))){
var inst_31377 = (state_31386[(2)]);
var state_31386__$1 = state_31386;
var statearr_31399_33449 = state_31386__$1;
(statearr_31399_33449[(2)] = inst_31377);

(statearr_31399_33449[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (13))){
var inst_31379 = (state_31386[(2)]);
var state_31386__$1 = (function (){var statearr_31400 = state_31386;
(statearr_31400[(9)] = inst_31379);

return statearr_31400;
})();
var statearr_31401_33450 = state_31386__$1;
(statearr_31401_33450[(2)] = null);

(statearr_31401_33450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (6))){
var inst_31348 = (state_31386[(7)]);
var state_31386__$1 = state_31386;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31386__$1,(11),inst_31348);
} else {
if((state_val_31387 === (17))){
var inst_31372 = (state_31386[(2)]);
var state_31386__$1 = state_31386;
if(cljs.core.truth_(inst_31372)){
var statearr_31402_33451 = state_31386__$1;
(statearr_31402_33451[(1)] = (19));

} else {
var statearr_31403_33452 = state_31386__$1;
(statearr_31403_33452[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (3))){
var inst_31384 = (state_31386[(2)]);
var state_31386__$1 = state_31386;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31386__$1,inst_31384);
} else {
if((state_val_31387 === (12))){
var inst_31358 = (state_31386[(10)]);
var state_31386__$1 = state_31386;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31386__$1,(14),inst_31358);
} else {
if((state_val_31387 === (2))){
var state_31386__$1 = state_31386;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31386__$1,(4),results);
} else {
if((state_val_31387 === (19))){
var state_31386__$1 = state_31386;
var statearr_31404_33457 = state_31386__$1;
(statearr_31404_33457[(2)] = null);

(statearr_31404_33457[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (11))){
var inst_31358 = (state_31386[(2)]);
var state_31386__$1 = (function (){var statearr_31405 = state_31386;
(statearr_31405[(10)] = inst_31358);

return statearr_31405;
})();
var statearr_31406_33458 = state_31386__$1;
(statearr_31406_33458[(2)] = null);

(statearr_31406_33458[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (9))){
var state_31386__$1 = state_31386;
var statearr_31407_33459 = state_31386__$1;
(statearr_31407_33459[(2)] = null);

(statearr_31407_33459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (5))){
var state_31386__$1 = state_31386;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31408_33460 = state_31386__$1;
(statearr_31408_33460[(1)] = (8));

} else {
var statearr_31411_33461 = state_31386__$1;
(statearr_31411_33461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (14))){
var inst_31364 = (state_31386[(8)]);
var inst_31364__$1 = (state_31386[(2)]);
var inst_31365 = (inst_31364__$1 == null);
var inst_31366 = cljs.core.not(inst_31365);
var state_31386__$1 = (function (){var statearr_31412 = state_31386;
(statearr_31412[(8)] = inst_31364__$1);

return statearr_31412;
})();
if(inst_31366){
var statearr_31413_33462 = state_31386__$1;
(statearr_31413_33462[(1)] = (15));

} else {
var statearr_31414_33464 = state_31386__$1;
(statearr_31414_33464[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (16))){
var state_31386__$1 = state_31386;
var statearr_31415_33465 = state_31386__$1;
(statearr_31415_33465[(2)] = false);

(statearr_31415_33465[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (10))){
var inst_31355 = (state_31386[(2)]);
var state_31386__$1 = state_31386;
var statearr_31416_33466 = state_31386__$1;
(statearr_31416_33466[(2)] = inst_31355);

(statearr_31416_33466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (18))){
var inst_31369 = (state_31386[(2)]);
var state_31386__$1 = state_31386;
var statearr_31417_33467 = state_31386__$1;
(statearr_31417_33467[(2)] = inst_31369);

(statearr_31417_33467[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31387 === (8))){
var inst_31352 = cljs.core.async.close_BANG_(to);
var state_31386__$1 = state_31386;
var statearr_31421_33472 = state_31386__$1;
(statearr_31421_33472[(2)] = inst_31352);

(statearr_31421_33472[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__30715__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30715__auto____0 = (function (){
var statearr_31422 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31422[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30715__auto__);

(statearr_31422[(1)] = (1));

return statearr_31422;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30715__auto____1 = (function (state_31386){
while(true){
var ret_value__30716__auto__ = (function (){try{while(true){
var result__30717__auto__ = switch__30714__auto__(state_31386);
if(cljs.core.keyword_identical_QMARK_(result__30717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30717__auto__;
}
break;
}
}catch (e31423){var ex__30718__auto__ = e31423;
var statearr_31424_33475 = state_31386;
(statearr_31424_33475[(2)] = ex__30718__auto__);


if(cljs.core.seq((state_31386[(4)]))){
var statearr_31428_33477 = state_31386;
(statearr_31428_33477[(1)] = cljs.core.first((state_31386[(4)])));

} else {
throw ex__30718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33478 = state_31386;
state_31386 = G__33478;
continue;
} else {
return ret_value__30716__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30715__auto__ = function(state_31386){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30715__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30715__auto____1.call(this,state_31386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30715__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30715__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30715__auto__;
})()
})();
var state__30946__auto__ = (function (){var statearr_31429 = f__30945__auto__();
(statearr_31429[(6)] = c__30944__auto__);

return statearr_31429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30946__auto__);
}));

return c__30944__auto__;
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
var G__31431 = arguments.length;
switch (G__31431) {
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
var G__31441 = arguments.length;
switch (G__31441) {
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
var G__31443 = arguments.length;
switch (G__31443) {
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
var c__30944__auto___33502 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30945__auto__ = (function (){var switch__30714__auto__ = (function (state_31469){
var state_val_31470 = (state_31469[(1)]);
if((state_val_31470 === (7))){
var inst_31465 = (state_31469[(2)]);
var state_31469__$1 = state_31469;
var statearr_31471_33504 = state_31469__$1;
(statearr_31471_33504[(2)] = inst_31465);

(statearr_31471_33504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (1))){
var state_31469__$1 = state_31469;
var statearr_31472_33508 = state_31469__$1;
(statearr_31472_33508[(2)] = null);

(statearr_31472_33508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (4))){
var inst_31446 = (state_31469[(7)]);
var inst_31446__$1 = (state_31469[(2)]);
var inst_31447 = (inst_31446__$1 == null);
var state_31469__$1 = (function (){var statearr_31473 = state_31469;
(statearr_31473[(7)] = inst_31446__$1);

return statearr_31473;
})();
if(cljs.core.truth_(inst_31447)){
var statearr_31475_33512 = state_31469__$1;
(statearr_31475_33512[(1)] = (5));

} else {
var statearr_31476_33513 = state_31469__$1;
(statearr_31476_33513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (13))){
var state_31469__$1 = state_31469;
var statearr_31477_33514 = state_31469__$1;
(statearr_31477_33514[(2)] = null);

(statearr_31477_33514[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (6))){
var inst_31446 = (state_31469[(7)]);
var inst_31452 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31446) : p.call(null,inst_31446));
var state_31469__$1 = state_31469;
if(cljs.core.truth_(inst_31452)){
var statearr_31478_33516 = state_31469__$1;
(statearr_31478_33516[(1)] = (9));

} else {
var statearr_31479_33518 = state_31469__$1;
(statearr_31479_33518[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (3))){
var inst_31467 = (state_31469[(2)]);
var state_31469__$1 = state_31469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31469__$1,inst_31467);
} else {
if((state_val_31470 === (12))){
var state_31469__$1 = state_31469;
var statearr_31480_33519 = state_31469__$1;
(statearr_31480_33519[(2)] = null);

(statearr_31480_33519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (2))){
var state_31469__$1 = state_31469;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31469__$1,(4),ch);
} else {
if((state_val_31470 === (11))){
var inst_31446 = (state_31469[(7)]);
var inst_31456 = (state_31469[(2)]);
var state_31469__$1 = state_31469;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31469__$1,(8),inst_31456,inst_31446);
} else {
if((state_val_31470 === (9))){
var state_31469__$1 = state_31469;
var statearr_31481_33520 = state_31469__$1;
(statearr_31481_33520[(2)] = tc);

(statearr_31481_33520[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (5))){
var inst_31449 = cljs.core.async.close_BANG_(tc);
var inst_31450 = cljs.core.async.close_BANG_(fc);
var state_31469__$1 = (function (){var statearr_31482 = state_31469;
(statearr_31482[(8)] = inst_31449);

return statearr_31482;
})();
var statearr_31483_33526 = state_31469__$1;
(statearr_31483_33526[(2)] = inst_31450);

(statearr_31483_33526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (14))){
var inst_31463 = (state_31469[(2)]);
var state_31469__$1 = state_31469;
var statearr_31484_33527 = state_31469__$1;
(statearr_31484_33527[(2)] = inst_31463);

(statearr_31484_33527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (10))){
var state_31469__$1 = state_31469;
var statearr_31485_33528 = state_31469__$1;
(statearr_31485_33528[(2)] = fc);

(statearr_31485_33528[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (8))){
var inst_31458 = (state_31469[(2)]);
var state_31469__$1 = state_31469;
if(cljs.core.truth_(inst_31458)){
var statearr_31488_33529 = state_31469__$1;
(statearr_31488_33529[(1)] = (12));

} else {
var statearr_31489_33530 = state_31469__$1;
(statearr_31489_33530[(1)] = (13));

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
var cljs$core$async$state_machine__30715__auto__ = null;
var cljs$core$async$state_machine__30715__auto____0 = (function (){
var statearr_31490 = [null,null,null,null,null,null,null,null,null];
(statearr_31490[(0)] = cljs$core$async$state_machine__30715__auto__);

(statearr_31490[(1)] = (1));

return statearr_31490;
});
var cljs$core$async$state_machine__30715__auto____1 = (function (state_31469){
while(true){
var ret_value__30716__auto__ = (function (){try{while(true){
var result__30717__auto__ = switch__30714__auto__(state_31469);
if(cljs.core.keyword_identical_QMARK_(result__30717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30717__auto__;
}
break;
}
}catch (e31491){var ex__30718__auto__ = e31491;
var statearr_31492_33531 = state_31469;
(statearr_31492_33531[(2)] = ex__30718__auto__);


if(cljs.core.seq((state_31469[(4)]))){
var statearr_31493_33532 = state_31469;
(statearr_31493_33532[(1)] = cljs.core.first((state_31469[(4)])));

} else {
throw ex__30718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33533 = state_31469;
state_31469 = G__33533;
continue;
} else {
return ret_value__30716__auto__;
}
break;
}
});
cljs$core$async$state_machine__30715__auto__ = function(state_31469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30715__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30715__auto____1.call(this,state_31469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30715__auto____0;
cljs$core$async$state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30715__auto____1;
return cljs$core$async$state_machine__30715__auto__;
})()
})();
var state__30946__auto__ = (function (){var statearr_31494 = f__30945__auto__();
(statearr_31494[(6)] = c__30944__auto___33502);

return statearr_31494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30946__auto__);
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
var c__30944__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30945__auto__ = (function (){var switch__30714__auto__ = (function (state_31517){
var state_val_31518 = (state_31517[(1)]);
if((state_val_31518 === (7))){
var inst_31513 = (state_31517[(2)]);
var state_31517__$1 = state_31517;
var statearr_31519_33534 = state_31517__$1;
(statearr_31519_33534[(2)] = inst_31513);

(statearr_31519_33534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (1))){
var inst_31495 = init;
var inst_31496 = inst_31495;
var state_31517__$1 = (function (){var statearr_31520 = state_31517;
(statearr_31520[(7)] = inst_31496);

return statearr_31520;
})();
var statearr_31521_33535 = state_31517__$1;
(statearr_31521_33535[(2)] = null);

(statearr_31521_33535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (4))){
var inst_31499 = (state_31517[(8)]);
var inst_31499__$1 = (state_31517[(2)]);
var inst_31500 = (inst_31499__$1 == null);
var state_31517__$1 = (function (){var statearr_31522 = state_31517;
(statearr_31522[(8)] = inst_31499__$1);

return statearr_31522;
})();
if(cljs.core.truth_(inst_31500)){
var statearr_31523_33540 = state_31517__$1;
(statearr_31523_33540[(1)] = (5));

} else {
var statearr_31524_33544 = state_31517__$1;
(statearr_31524_33544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (6))){
var inst_31499 = (state_31517[(8)]);
var inst_31496 = (state_31517[(7)]);
var inst_31503 = (state_31517[(9)]);
var inst_31503__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31496,inst_31499) : f.call(null,inst_31496,inst_31499));
var inst_31504 = cljs.core.reduced_QMARK_(inst_31503__$1);
var state_31517__$1 = (function (){var statearr_31525 = state_31517;
(statearr_31525[(9)] = inst_31503__$1);

return statearr_31525;
})();
if(inst_31504){
var statearr_31526_33545 = state_31517__$1;
(statearr_31526_33545[(1)] = (8));

} else {
var statearr_31527_33546 = state_31517__$1;
(statearr_31527_33546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (3))){
var inst_31515 = (state_31517[(2)]);
var state_31517__$1 = state_31517;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31517__$1,inst_31515);
} else {
if((state_val_31518 === (2))){
var state_31517__$1 = state_31517;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31517__$1,(4),ch);
} else {
if((state_val_31518 === (9))){
var inst_31503 = (state_31517[(9)]);
var inst_31496 = inst_31503;
var state_31517__$1 = (function (){var statearr_31528 = state_31517;
(statearr_31528[(7)] = inst_31496);

return statearr_31528;
})();
var statearr_31529_33548 = state_31517__$1;
(statearr_31529_33548[(2)] = null);

(statearr_31529_33548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (5))){
var inst_31496 = (state_31517[(7)]);
var state_31517__$1 = state_31517;
var statearr_31530_33549 = state_31517__$1;
(statearr_31530_33549[(2)] = inst_31496);

(statearr_31530_33549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (10))){
var inst_31511 = (state_31517[(2)]);
var state_31517__$1 = state_31517;
var statearr_31531_33550 = state_31517__$1;
(statearr_31531_33550[(2)] = inst_31511);

(statearr_31531_33550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31518 === (8))){
var inst_31503 = (state_31517[(9)]);
var inst_31507 = cljs.core.deref(inst_31503);
var state_31517__$1 = state_31517;
var statearr_31532_33552 = state_31517__$1;
(statearr_31532_33552[(2)] = inst_31507);

(statearr_31532_33552[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__30715__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30715__auto____0 = (function (){
var statearr_31533 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31533[(0)] = cljs$core$async$reduce_$_state_machine__30715__auto__);

(statearr_31533[(1)] = (1));

return statearr_31533;
});
var cljs$core$async$reduce_$_state_machine__30715__auto____1 = (function (state_31517){
while(true){
var ret_value__30716__auto__ = (function (){try{while(true){
var result__30717__auto__ = switch__30714__auto__(state_31517);
if(cljs.core.keyword_identical_QMARK_(result__30717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30717__auto__;
}
break;
}
}catch (e31534){var ex__30718__auto__ = e31534;
var statearr_31535_33561 = state_31517;
(statearr_31535_33561[(2)] = ex__30718__auto__);


if(cljs.core.seq((state_31517[(4)]))){
var statearr_31536_33562 = state_31517;
(statearr_31536_33562[(1)] = cljs.core.first((state_31517[(4)])));

} else {
throw ex__30718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33563 = state_31517;
state_31517 = G__33563;
continue;
} else {
return ret_value__30716__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30715__auto__ = function(state_31517){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30715__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30715__auto____1.call(this,state_31517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30715__auto____0;
cljs$core$async$reduce_$_state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30715__auto____1;
return cljs$core$async$reduce_$_state_machine__30715__auto__;
})()
})();
var state__30946__auto__ = (function (){var statearr_31537 = f__30945__auto__();
(statearr_31537[(6)] = c__30944__auto__);

return statearr_31537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30946__auto__);
}));

return c__30944__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30944__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30945__auto__ = (function (){var switch__30714__auto__ = (function (state_31543){
var state_val_31544 = (state_31543[(1)]);
if((state_val_31544 === (1))){
var inst_31538 = cljs.core.async.reduce(f__$1,init,ch);
var state_31543__$1 = state_31543;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31543__$1,(2),inst_31538);
} else {
if((state_val_31544 === (2))){
var inst_31540 = (state_31543[(2)]);
var inst_31541 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31540) : f__$1.call(null,inst_31540));
var state_31543__$1 = state_31543;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31543__$1,inst_31541);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30715__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30715__auto____0 = (function (){
var statearr_31545 = [null,null,null,null,null,null,null];
(statearr_31545[(0)] = cljs$core$async$transduce_$_state_machine__30715__auto__);

(statearr_31545[(1)] = (1));

return statearr_31545;
});
var cljs$core$async$transduce_$_state_machine__30715__auto____1 = (function (state_31543){
while(true){
var ret_value__30716__auto__ = (function (){try{while(true){
var result__30717__auto__ = switch__30714__auto__(state_31543);
if(cljs.core.keyword_identical_QMARK_(result__30717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30717__auto__;
}
break;
}
}catch (e31546){var ex__30718__auto__ = e31546;
var statearr_31547_33567 = state_31543;
(statearr_31547_33567[(2)] = ex__30718__auto__);


if(cljs.core.seq((state_31543[(4)]))){
var statearr_31548_33568 = state_31543;
(statearr_31548_33568[(1)] = cljs.core.first((state_31543[(4)])));

} else {
throw ex__30718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33570 = state_31543;
state_31543 = G__33570;
continue;
} else {
return ret_value__30716__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30715__auto__ = function(state_31543){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30715__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30715__auto____1.call(this,state_31543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30715__auto____0;
cljs$core$async$transduce_$_state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30715__auto____1;
return cljs$core$async$transduce_$_state_machine__30715__auto__;
})()
})();
var state__30946__auto__ = (function (){var statearr_31563 = f__30945__auto__();
(statearr_31563[(6)] = c__30944__auto__);

return statearr_31563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30946__auto__);
}));

return c__30944__auto__;
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
var G__31565 = arguments.length;
switch (G__31565) {
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
var c__30944__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30945__auto__ = (function (){var switch__30714__auto__ = (function (state_31590){
var state_val_31591 = (state_31590[(1)]);
if((state_val_31591 === (7))){
var inst_31572 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
var statearr_31592_33577 = state_31590__$1;
(statearr_31592_33577[(2)] = inst_31572);

(statearr_31592_33577[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (1))){
var inst_31566 = cljs.core.seq(coll);
var inst_31567 = inst_31566;
var state_31590__$1 = (function (){var statearr_31593 = state_31590;
(statearr_31593[(7)] = inst_31567);

return statearr_31593;
})();
var statearr_31594_33578 = state_31590__$1;
(statearr_31594_33578[(2)] = null);

(statearr_31594_33578[(1)] = (2));


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
var statearr_31595_33579 = state_31590__$1;
(statearr_31595_33579[(2)] = inst_31584);

(statearr_31595_33579[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (6))){
var inst_31575 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
if(cljs.core.truth_(inst_31575)){
var statearr_31596_33580 = state_31590__$1;
(statearr_31596_33580[(1)] = (8));

} else {
var statearr_31597_33581 = state_31590__$1;
(statearr_31597_33581[(1)] = (9));

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
var statearr_31598_33582 = state_31590__$1;
(statearr_31598_33582[(2)] = null);

(statearr_31598_33582[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (2))){
var inst_31567 = (state_31590[(7)]);
var state_31590__$1 = state_31590;
if(cljs.core.truth_(inst_31567)){
var statearr_31599_33583 = state_31590__$1;
(statearr_31599_33583[(1)] = (4));

} else {
var statearr_31600_33584 = state_31590__$1;
(statearr_31600_33584[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (11))){
var inst_31581 = cljs.core.async.close_BANG_(ch);
var state_31590__$1 = state_31590;
var statearr_31601_33596 = state_31590__$1;
(statearr_31601_33596[(2)] = inst_31581);

(statearr_31601_33596[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (9))){
var state_31590__$1 = state_31590;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31602_33597 = state_31590__$1;
(statearr_31602_33597[(1)] = (11));

} else {
var statearr_31603_33598 = state_31590__$1;
(statearr_31603_33598[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (5))){
var inst_31567 = (state_31590[(7)]);
var state_31590__$1 = state_31590;
var statearr_31604_33599 = state_31590__$1;
(statearr_31604_33599[(2)] = inst_31567);

(statearr_31604_33599[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31591 === (10))){
var inst_31586 = (state_31590[(2)]);
var state_31590__$1 = state_31590;
var statearr_31605_33601 = state_31590__$1;
(statearr_31605_33601[(2)] = inst_31586);

(statearr_31605_33601[(1)] = (3));


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
var statearr_31607_33602 = state_31590__$1;
(statearr_31607_33602[(2)] = null);

(statearr_31607_33602[(1)] = (2));


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
var cljs$core$async$state_machine__30715__auto__ = null;
var cljs$core$async$state_machine__30715__auto____0 = (function (){
var statearr_31608 = [null,null,null,null,null,null,null,null];
(statearr_31608[(0)] = cljs$core$async$state_machine__30715__auto__);

(statearr_31608[(1)] = (1));

return statearr_31608;
});
var cljs$core$async$state_machine__30715__auto____1 = (function (state_31590){
while(true){
var ret_value__30716__auto__ = (function (){try{while(true){
var result__30717__auto__ = switch__30714__auto__(state_31590);
if(cljs.core.keyword_identical_QMARK_(result__30717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30717__auto__;
}
break;
}
}catch (e31609){var ex__30718__auto__ = e31609;
var statearr_31610_33603 = state_31590;
(statearr_31610_33603[(2)] = ex__30718__auto__);


if(cljs.core.seq((state_31590[(4)]))){
var statearr_31611_33604 = state_31590;
(statearr_31611_33604[(1)] = cljs.core.first((state_31590[(4)])));

} else {
throw ex__30718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33605 = state_31590;
state_31590 = G__33605;
continue;
} else {
return ret_value__30716__auto__;
}
break;
}
});
cljs$core$async$state_machine__30715__auto__ = function(state_31590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30715__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30715__auto____1.call(this,state_31590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30715__auto____0;
cljs$core$async$state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30715__auto____1;
return cljs$core$async$state_machine__30715__auto__;
})()
})();
var state__30946__auto__ = (function (){var statearr_31616 = f__30945__auto__();
(statearr_31616[(6)] = c__30944__auto__);

return statearr_31616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30946__auto__);
}));

return c__30944__auto__;
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
var G__31626 = arguments.length;
switch (G__31626) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_33613 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_33613(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33624 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_33624(m,ch,close_QMARK_);
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

var cljs$core$async$Mult$untap_all_STAR_$dyn_33642 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_33642(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31650 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31650 = (function (ch,cs,meta31651){
this.ch = ch;
this.cs = cs;
this.meta31651 = meta31651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31652,meta31651__$1){
var self__ = this;
var _31652__$1 = this;
return (new cljs.core.async.t_cljs$core$async31650(self__.ch,self__.cs,meta31651__$1));
}));

(cljs.core.async.t_cljs$core$async31650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31652){
var self__ = this;
var _31652__$1 = this;
return self__.meta31651;
}));

(cljs.core.async.t_cljs$core$async31650.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31650.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31650.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31650.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31650.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31650.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31650.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31651","meta31651",-1997734691,null)], null);
}));

(cljs.core.async.t_cljs$core$async31650.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31650");

(cljs.core.async.t_cljs$core$async31650.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31650");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31650.
 */
cljs.core.async.__GT_t_cljs$core$async31650 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31650(ch__$1,cs__$1,meta31651){
return (new cljs.core.async.t_cljs$core$async31650(ch__$1,cs__$1,meta31651));
});

}

return (new cljs.core.async.t_cljs$core$async31650(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30944__auto___33650 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30945__auto__ = (function (){var switch__30714__auto__ = (function (state_31807){
var state_val_31809 = (state_31807[(1)]);
if((state_val_31809 === (7))){
var inst_31803 = (state_31807[(2)]);
var state_31807__$1 = state_31807;
var statearr_31811_33651 = state_31807__$1;
(statearr_31811_33651[(2)] = inst_31803);

(statearr_31811_33651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (20))){
var inst_31694 = (state_31807[(7)]);
var inst_31718 = cljs.core.first(inst_31694);
var inst_31719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31718,(0),null);
var inst_31720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31718,(1),null);
var state_31807__$1 = (function (){var statearr_31812 = state_31807;
(statearr_31812[(8)] = inst_31719);

return statearr_31812;
})();
if(cljs.core.truth_(inst_31720)){
var statearr_31813_33653 = state_31807__$1;
(statearr_31813_33653[(1)] = (22));

} else {
var statearr_31814_33654 = state_31807__$1;
(statearr_31814_33654[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (27))){
var inst_31755 = (state_31807[(9)]);
var inst_31658 = (state_31807[(10)]);
var inst_31748 = (state_31807[(11)]);
var inst_31750 = (state_31807[(12)]);
var inst_31755__$1 = cljs.core._nth(inst_31748,inst_31750);
var inst_31756 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31755__$1,inst_31658,done);
var state_31807__$1 = (function (){var statearr_31815 = state_31807;
(statearr_31815[(9)] = inst_31755__$1);

return statearr_31815;
})();
if(cljs.core.truth_(inst_31756)){
var statearr_31816_33655 = state_31807__$1;
(statearr_31816_33655[(1)] = (30));

} else {
var statearr_31817_33656 = state_31807__$1;
(statearr_31817_33656[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (1))){
var state_31807__$1 = state_31807;
var statearr_31818_33657 = state_31807__$1;
(statearr_31818_33657[(2)] = null);

(statearr_31818_33657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (24))){
var inst_31694 = (state_31807[(7)]);
var inst_31725 = (state_31807[(2)]);
var inst_31726 = cljs.core.next(inst_31694);
var inst_31669 = inst_31726;
var inst_31670 = null;
var inst_31671 = (0);
var inst_31672 = (0);
var state_31807__$1 = (function (){var statearr_31819 = state_31807;
(statearr_31819[(13)] = inst_31669);

(statearr_31819[(14)] = inst_31725);

(statearr_31819[(15)] = inst_31672);

(statearr_31819[(16)] = inst_31670);

(statearr_31819[(17)] = inst_31671);

return statearr_31819;
})();
var statearr_31820_33663 = state_31807__$1;
(statearr_31820_33663[(2)] = null);

(statearr_31820_33663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (39))){
var state_31807__$1 = state_31807;
var statearr_31824_33664 = state_31807__$1;
(statearr_31824_33664[(2)] = null);

(statearr_31824_33664[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (4))){
var inst_31658 = (state_31807[(10)]);
var inst_31658__$1 = (state_31807[(2)]);
var inst_31659 = (inst_31658__$1 == null);
var state_31807__$1 = (function (){var statearr_31825 = state_31807;
(statearr_31825[(10)] = inst_31658__$1);

return statearr_31825;
})();
if(cljs.core.truth_(inst_31659)){
var statearr_31826_33665 = state_31807__$1;
(statearr_31826_33665[(1)] = (5));

} else {
var statearr_31827_33666 = state_31807__$1;
(statearr_31827_33666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (15))){
var inst_31669 = (state_31807[(13)]);
var inst_31672 = (state_31807[(15)]);
var inst_31670 = (state_31807[(16)]);
var inst_31671 = (state_31807[(17)]);
var inst_31689 = (state_31807[(2)]);
var inst_31690 = (inst_31672 + (1));
var tmp31821 = inst_31669;
var tmp31822 = inst_31670;
var tmp31823 = inst_31671;
var inst_31669__$1 = tmp31821;
var inst_31670__$1 = tmp31822;
var inst_31671__$1 = tmp31823;
var inst_31672__$1 = inst_31690;
var state_31807__$1 = (function (){var statearr_31828 = state_31807;
(statearr_31828[(13)] = inst_31669__$1);

(statearr_31828[(15)] = inst_31672__$1);

(statearr_31828[(16)] = inst_31670__$1);

(statearr_31828[(18)] = inst_31689);

(statearr_31828[(17)] = inst_31671__$1);

return statearr_31828;
})();
var statearr_31829_33668 = state_31807__$1;
(statearr_31829_33668[(2)] = null);

(statearr_31829_33668[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (21))){
var inst_31729 = (state_31807[(2)]);
var state_31807__$1 = state_31807;
var statearr_31833_33669 = state_31807__$1;
(statearr_31833_33669[(2)] = inst_31729);

(statearr_31833_33669[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (31))){
var inst_31755 = (state_31807[(9)]);
var inst_31759 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31755);
var state_31807__$1 = state_31807;
var statearr_31834_33670 = state_31807__$1;
(statearr_31834_33670[(2)] = inst_31759);

(statearr_31834_33670[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (32))){
var inst_31749 = (state_31807[(19)]);
var inst_31748 = (state_31807[(11)]);
var inst_31750 = (state_31807[(12)]);
var inst_31747 = (state_31807[(20)]);
var inst_31761 = (state_31807[(2)]);
var inst_31762 = (inst_31750 + (1));
var tmp31830 = inst_31749;
var tmp31831 = inst_31748;
var tmp31832 = inst_31747;
var inst_31747__$1 = tmp31832;
var inst_31748__$1 = tmp31831;
var inst_31749__$1 = tmp31830;
var inst_31750__$1 = inst_31762;
var state_31807__$1 = (function (){var statearr_31835 = state_31807;
(statearr_31835[(21)] = inst_31761);

(statearr_31835[(19)] = inst_31749__$1);

(statearr_31835[(11)] = inst_31748__$1);

(statearr_31835[(12)] = inst_31750__$1);

(statearr_31835[(20)] = inst_31747__$1);

return statearr_31835;
})();
var statearr_31838_33672 = state_31807__$1;
(statearr_31838_33672[(2)] = null);

(statearr_31838_33672[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (40))){
var inst_31776 = (state_31807[(22)]);
var inst_31780 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31776);
var state_31807__$1 = state_31807;
var statearr_31839_33675 = state_31807__$1;
(statearr_31839_33675[(2)] = inst_31780);

(statearr_31839_33675[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (33))){
var inst_31765 = (state_31807[(23)]);
var inst_31767 = cljs.core.chunked_seq_QMARK_(inst_31765);
var state_31807__$1 = state_31807;
if(inst_31767){
var statearr_31840_33676 = state_31807__$1;
(statearr_31840_33676[(1)] = (36));

} else {
var statearr_31841_33677 = state_31807__$1;
(statearr_31841_33677[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (13))){
var inst_31681 = (state_31807[(24)]);
var inst_31685 = cljs.core.async.close_BANG_(inst_31681);
var state_31807__$1 = state_31807;
var statearr_31842_33678 = state_31807__$1;
(statearr_31842_33678[(2)] = inst_31685);

(statearr_31842_33678[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (22))){
var inst_31719 = (state_31807[(8)]);
var inst_31722 = cljs.core.async.close_BANG_(inst_31719);
var state_31807__$1 = state_31807;
var statearr_31843_33680 = state_31807__$1;
(statearr_31843_33680[(2)] = inst_31722);

(statearr_31843_33680[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (36))){
var inst_31765 = (state_31807[(23)]);
var inst_31771 = cljs.core.chunk_first(inst_31765);
var inst_31772 = cljs.core.chunk_rest(inst_31765);
var inst_31773 = cljs.core.count(inst_31771);
var inst_31747 = inst_31772;
var inst_31748 = inst_31771;
var inst_31749 = inst_31773;
var inst_31750 = (0);
var state_31807__$1 = (function (){var statearr_31845 = state_31807;
(statearr_31845[(19)] = inst_31749);

(statearr_31845[(11)] = inst_31748);

(statearr_31845[(12)] = inst_31750);

(statearr_31845[(20)] = inst_31747);

return statearr_31845;
})();
var statearr_31846_33681 = state_31807__$1;
(statearr_31846_33681[(2)] = null);

(statearr_31846_33681[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (41))){
var inst_31765 = (state_31807[(23)]);
var inst_31782 = (state_31807[(2)]);
var inst_31783 = cljs.core.next(inst_31765);
var inst_31747 = inst_31783;
var inst_31748 = null;
var inst_31749 = (0);
var inst_31750 = (0);
var state_31807__$1 = (function (){var statearr_31847 = state_31807;
(statearr_31847[(25)] = inst_31782);

(statearr_31847[(19)] = inst_31749);

(statearr_31847[(11)] = inst_31748);

(statearr_31847[(12)] = inst_31750);

(statearr_31847[(20)] = inst_31747);

return statearr_31847;
})();
var statearr_31848_33684 = state_31807__$1;
(statearr_31848_33684[(2)] = null);

(statearr_31848_33684[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (43))){
var state_31807__$1 = state_31807;
var statearr_31849_33685 = state_31807__$1;
(statearr_31849_33685[(2)] = null);

(statearr_31849_33685[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (29))){
var inst_31791 = (state_31807[(2)]);
var state_31807__$1 = state_31807;
var statearr_31850_33686 = state_31807__$1;
(statearr_31850_33686[(2)] = inst_31791);

(statearr_31850_33686[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (44))){
var inst_31800 = (state_31807[(2)]);
var state_31807__$1 = (function (){var statearr_31851 = state_31807;
(statearr_31851[(26)] = inst_31800);

return statearr_31851;
})();
var statearr_31852_33689 = state_31807__$1;
(statearr_31852_33689[(2)] = null);

(statearr_31852_33689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (6))){
var inst_31739 = (state_31807[(27)]);
var inst_31738 = cljs.core.deref(cs);
var inst_31739__$1 = cljs.core.keys(inst_31738);
var inst_31740 = cljs.core.count(inst_31739__$1);
var inst_31741 = cljs.core.reset_BANG_(dctr,inst_31740);
var inst_31746 = cljs.core.seq(inst_31739__$1);
var inst_31747 = inst_31746;
var inst_31748 = null;
var inst_31749 = (0);
var inst_31750 = (0);
var state_31807__$1 = (function (){var statearr_31853 = state_31807;
(statearr_31853[(19)] = inst_31749);

(statearr_31853[(28)] = inst_31741);

(statearr_31853[(11)] = inst_31748);

(statearr_31853[(27)] = inst_31739__$1);

(statearr_31853[(12)] = inst_31750);

(statearr_31853[(20)] = inst_31747);

return statearr_31853;
})();
var statearr_31854_33695 = state_31807__$1;
(statearr_31854_33695[(2)] = null);

(statearr_31854_33695[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (28))){
var inst_31765 = (state_31807[(23)]);
var inst_31747 = (state_31807[(20)]);
var inst_31765__$1 = cljs.core.seq(inst_31747);
var state_31807__$1 = (function (){var statearr_31855 = state_31807;
(statearr_31855[(23)] = inst_31765__$1);

return statearr_31855;
})();
if(inst_31765__$1){
var statearr_31856_33699 = state_31807__$1;
(statearr_31856_33699[(1)] = (33));

} else {
var statearr_31857_33700 = state_31807__$1;
(statearr_31857_33700[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (25))){
var inst_31749 = (state_31807[(19)]);
var inst_31750 = (state_31807[(12)]);
var inst_31752 = (inst_31750 < inst_31749);
var inst_31753 = inst_31752;
var state_31807__$1 = state_31807;
if(cljs.core.truth_(inst_31753)){
var statearr_31861_33703 = state_31807__$1;
(statearr_31861_33703[(1)] = (27));

} else {
var statearr_31862_33704 = state_31807__$1;
(statearr_31862_33704[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (34))){
var state_31807__$1 = state_31807;
var statearr_31863_33705 = state_31807__$1;
(statearr_31863_33705[(2)] = null);

(statearr_31863_33705[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (17))){
var state_31807__$1 = state_31807;
var statearr_31866_33706 = state_31807__$1;
(statearr_31866_33706[(2)] = null);

(statearr_31866_33706[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (3))){
var inst_31805 = (state_31807[(2)]);
var state_31807__$1 = state_31807;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31807__$1,inst_31805);
} else {
if((state_val_31809 === (12))){
var inst_31734 = (state_31807[(2)]);
var state_31807__$1 = state_31807;
var statearr_31868_33707 = state_31807__$1;
(statearr_31868_33707[(2)] = inst_31734);

(statearr_31868_33707[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (2))){
var state_31807__$1 = state_31807;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31807__$1,(4),ch);
} else {
if((state_val_31809 === (23))){
var state_31807__$1 = state_31807;
var statearr_31869_33710 = state_31807__$1;
(statearr_31869_33710[(2)] = null);

(statearr_31869_33710[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (35))){
var inst_31789 = (state_31807[(2)]);
var state_31807__$1 = state_31807;
var statearr_31872_33711 = state_31807__$1;
(statearr_31872_33711[(2)] = inst_31789);

(statearr_31872_33711[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (19))){
var inst_31694 = (state_31807[(7)]);
var inst_31698 = cljs.core.chunk_first(inst_31694);
var inst_31699 = cljs.core.chunk_rest(inst_31694);
var inst_31700 = cljs.core.count(inst_31698);
var inst_31669 = inst_31699;
var inst_31670 = inst_31698;
var inst_31671 = inst_31700;
var inst_31672 = (0);
var state_31807__$1 = (function (){var statearr_31873 = state_31807;
(statearr_31873[(13)] = inst_31669);

(statearr_31873[(15)] = inst_31672);

(statearr_31873[(16)] = inst_31670);

(statearr_31873[(17)] = inst_31671);

return statearr_31873;
})();
var statearr_31874_33712 = state_31807__$1;
(statearr_31874_33712[(2)] = null);

(statearr_31874_33712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (11))){
var inst_31669 = (state_31807[(13)]);
var inst_31694 = (state_31807[(7)]);
var inst_31694__$1 = cljs.core.seq(inst_31669);
var state_31807__$1 = (function (){var statearr_31875 = state_31807;
(statearr_31875[(7)] = inst_31694__$1);

return statearr_31875;
})();
if(inst_31694__$1){
var statearr_31876_33713 = state_31807__$1;
(statearr_31876_33713[(1)] = (16));

} else {
var statearr_31877_33714 = state_31807__$1;
(statearr_31877_33714[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (9))){
var inst_31736 = (state_31807[(2)]);
var state_31807__$1 = state_31807;
var statearr_31878_33715 = state_31807__$1;
(statearr_31878_33715[(2)] = inst_31736);

(statearr_31878_33715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (5))){
var inst_31667 = cljs.core.deref(cs);
var inst_31668 = cljs.core.seq(inst_31667);
var inst_31669 = inst_31668;
var inst_31670 = null;
var inst_31671 = (0);
var inst_31672 = (0);
var state_31807__$1 = (function (){var statearr_31879 = state_31807;
(statearr_31879[(13)] = inst_31669);

(statearr_31879[(15)] = inst_31672);

(statearr_31879[(16)] = inst_31670);

(statearr_31879[(17)] = inst_31671);

return statearr_31879;
})();
var statearr_31880_33716 = state_31807__$1;
(statearr_31880_33716[(2)] = null);

(statearr_31880_33716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (14))){
var state_31807__$1 = state_31807;
var statearr_31881_33724 = state_31807__$1;
(statearr_31881_33724[(2)] = null);

(statearr_31881_33724[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (45))){
var inst_31797 = (state_31807[(2)]);
var state_31807__$1 = state_31807;
var statearr_31882_33726 = state_31807__$1;
(statearr_31882_33726[(2)] = inst_31797);

(statearr_31882_33726[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (26))){
var inst_31739 = (state_31807[(27)]);
var inst_31793 = (state_31807[(2)]);
var inst_31794 = cljs.core.seq(inst_31739);
var state_31807__$1 = (function (){var statearr_31883 = state_31807;
(statearr_31883[(29)] = inst_31793);

return statearr_31883;
})();
if(inst_31794){
var statearr_31884_33727 = state_31807__$1;
(statearr_31884_33727[(1)] = (42));

} else {
var statearr_31885_33728 = state_31807__$1;
(statearr_31885_33728[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (16))){
var inst_31694 = (state_31807[(7)]);
var inst_31696 = cljs.core.chunked_seq_QMARK_(inst_31694);
var state_31807__$1 = state_31807;
if(inst_31696){
var statearr_31886_33729 = state_31807__$1;
(statearr_31886_33729[(1)] = (19));

} else {
var statearr_31887_33730 = state_31807__$1;
(statearr_31887_33730[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (38))){
var inst_31786 = (state_31807[(2)]);
var state_31807__$1 = state_31807;
var statearr_31892_33731 = state_31807__$1;
(statearr_31892_33731[(2)] = inst_31786);

(statearr_31892_33731[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (30))){
var state_31807__$1 = state_31807;
var statearr_31897_33732 = state_31807__$1;
(statearr_31897_33732[(2)] = null);

(statearr_31897_33732[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (10))){
var inst_31672 = (state_31807[(15)]);
var inst_31670 = (state_31807[(16)]);
var inst_31680 = cljs.core._nth(inst_31670,inst_31672);
var inst_31681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31680,(0),null);
var inst_31682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31680,(1),null);
var state_31807__$1 = (function (){var statearr_31898 = state_31807;
(statearr_31898[(24)] = inst_31681);

return statearr_31898;
})();
if(cljs.core.truth_(inst_31682)){
var statearr_31903_33733 = state_31807__$1;
(statearr_31903_33733[(1)] = (13));

} else {
var statearr_31904_33734 = state_31807__$1;
(statearr_31904_33734[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (18))){
var inst_31732 = (state_31807[(2)]);
var state_31807__$1 = state_31807;
var statearr_31905_33751 = state_31807__$1;
(statearr_31905_33751[(2)] = inst_31732);

(statearr_31905_33751[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (42))){
var state_31807__$1 = state_31807;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31807__$1,(45),dchan);
} else {
if((state_val_31809 === (37))){
var inst_31658 = (state_31807[(10)]);
var inst_31776 = (state_31807[(22)]);
var inst_31765 = (state_31807[(23)]);
var inst_31776__$1 = cljs.core.first(inst_31765);
var inst_31777 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31776__$1,inst_31658,done);
var state_31807__$1 = (function (){var statearr_31906 = state_31807;
(statearr_31906[(22)] = inst_31776__$1);

return statearr_31906;
})();
if(cljs.core.truth_(inst_31777)){
var statearr_31907_33752 = state_31807__$1;
(statearr_31907_33752[(1)] = (39));

} else {
var statearr_31908_33753 = state_31807__$1;
(statearr_31908_33753[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (8))){
var inst_31672 = (state_31807[(15)]);
var inst_31671 = (state_31807[(17)]);
var inst_31674 = (inst_31672 < inst_31671);
var inst_31675 = inst_31674;
var state_31807__$1 = state_31807;
if(cljs.core.truth_(inst_31675)){
var statearr_31909_33754 = state_31807__$1;
(statearr_31909_33754[(1)] = (10));

} else {
var statearr_31910_33755 = state_31807__$1;
(statearr_31910_33755[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__30715__auto__ = null;
var cljs$core$async$mult_$_state_machine__30715__auto____0 = (function (){
var statearr_31912 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31912[(0)] = cljs$core$async$mult_$_state_machine__30715__auto__);

(statearr_31912[(1)] = (1));

return statearr_31912;
});
var cljs$core$async$mult_$_state_machine__30715__auto____1 = (function (state_31807){
while(true){
var ret_value__30716__auto__ = (function (){try{while(true){
var result__30717__auto__ = switch__30714__auto__(state_31807);
if(cljs.core.keyword_identical_QMARK_(result__30717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30717__auto__;
}
break;
}
}catch (e31914){var ex__30718__auto__ = e31914;
var statearr_31915_33756 = state_31807;
(statearr_31915_33756[(2)] = ex__30718__auto__);


if(cljs.core.seq((state_31807[(4)]))){
var statearr_31916_33760 = state_31807;
(statearr_31916_33760[(1)] = cljs.core.first((state_31807[(4)])));

} else {
throw ex__30718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33764 = state_31807;
state_31807 = G__33764;
continue;
} else {
return ret_value__30716__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30715__auto__ = function(state_31807){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30715__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30715__auto____1.call(this,state_31807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30715__auto____0;
cljs$core$async$mult_$_state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30715__auto____1;
return cljs$core$async$mult_$_state_machine__30715__auto__;
})()
})();
var state__30946__auto__ = (function (){var statearr_31918 = f__30945__auto__();
(statearr_31918[(6)] = c__30944__auto___33650);

return statearr_31918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30946__auto__);
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
var G__31933 = arguments.length;
switch (G__31933) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_33766 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_33766(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33777 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_33777(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33784 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33784(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33785 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_33785(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33786 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33786(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33794 = arguments.length;
var i__4737__auto___33795 = (0);
while(true){
if((i__4737__auto___33795 < len__4736__auto___33794)){
args__4742__auto__.push((arguments[i__4737__auto___33795]));

var G__33796 = (i__4737__auto___33795 + (1));
i__4737__auto___33795 = G__33796;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31989){
var map__31990 = p__31989;
var map__31990__$1 = (((((!((map__31990 == null))))?(((((map__31990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31990):map__31990);
var opts = map__31990__$1;
var statearr_31993_33797 = state;
(statearr_31993_33797[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31994_33798 = state;
(statearr_31994_33798[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31995_33799 = state;
(statearr_31995_33799[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31983){
var G__31984 = cljs.core.first(seq31983);
var seq31983__$1 = cljs.core.next(seq31983);
var G__31985 = cljs.core.first(seq31983__$1);
var seq31983__$2 = cljs.core.next(seq31983__$1);
var G__31986 = cljs.core.first(seq31983__$2);
var seq31983__$3 = cljs.core.next(seq31983__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31984,G__31985,G__31986,seq31983__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32032 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32032 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32033){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32033 = meta32033;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32034,meta32033__$1){
var self__ = this;
var _32034__$1 = this;
return (new cljs.core.async.t_cljs$core$async32032(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32033__$1));
}));

(cljs.core.async.t_cljs$core$async32032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32034){
var self__ = this;
var _32034__$1 = this;
return self__.meta32033;
}));

(cljs.core.async.t_cljs$core$async32032.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32032.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32032.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32032.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32032.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32032.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32032.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32032.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32032.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32033","meta32033",-921452274,null)], null);
}));

(cljs.core.async.t_cljs$core$async32032.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32032.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32032");

(cljs.core.async.t_cljs$core$async32032.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32032");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32032.
 */
cljs.core.async.__GT_t_cljs$core$async32032 = (function cljs$core$async$mix_$___GT_t_cljs$core$async32032(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32033){
return (new cljs.core.async.t_cljs$core$async32032(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32033));
});

}

return (new cljs.core.async.t_cljs$core$async32032(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30944__auto___33814 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30945__auto__ = (function (){var switch__30714__auto__ = (function (state_32165){
var state_val_32166 = (state_32165[(1)]);
if((state_val_32166 === (7))){
var inst_32069 = (state_32165[(2)]);
var state_32165__$1 = state_32165;
var statearr_32180_33815 = state_32165__$1;
(statearr_32180_33815[(2)] = inst_32069);

(statearr_32180_33815[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (20))){
var inst_32081 = (state_32165[(7)]);
var state_32165__$1 = state_32165;
var statearr_32183_33816 = state_32165__$1;
(statearr_32183_33816[(2)] = inst_32081);

(statearr_32183_33816[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (27))){
var state_32165__$1 = state_32165;
var statearr_32186_33817 = state_32165__$1;
(statearr_32186_33817[(2)] = null);

(statearr_32186_33817[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (1))){
var inst_32053 = (state_32165[(8)]);
var inst_32053__$1 = calc_state();
var inst_32056 = (inst_32053__$1 == null);
var inst_32057 = cljs.core.not(inst_32056);
var state_32165__$1 = (function (){var statearr_32189 = state_32165;
(statearr_32189[(8)] = inst_32053__$1);

return statearr_32189;
})();
if(inst_32057){
var statearr_32191_33818 = state_32165__$1;
(statearr_32191_33818[(1)] = (2));

} else {
var statearr_32192_33819 = state_32165__$1;
(statearr_32192_33819[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (24))){
var inst_32134 = (state_32165[(9)]);
var inst_32106 = (state_32165[(10)]);
var inst_32116 = (state_32165[(11)]);
var inst_32134__$1 = (inst_32106.cljs$core$IFn$_invoke$arity$1 ? inst_32106.cljs$core$IFn$_invoke$arity$1(inst_32116) : inst_32106.call(null,inst_32116));
var state_32165__$1 = (function (){var statearr_32195 = state_32165;
(statearr_32195[(9)] = inst_32134__$1);

return statearr_32195;
})();
if(cljs.core.truth_(inst_32134__$1)){
var statearr_32196_33820 = state_32165__$1;
(statearr_32196_33820[(1)] = (29));

} else {
var statearr_32198_33821 = state_32165__$1;
(statearr_32198_33821[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (4))){
var inst_32072 = (state_32165[(2)]);
var state_32165__$1 = state_32165;
if(cljs.core.truth_(inst_32072)){
var statearr_32201_33822 = state_32165__$1;
(statearr_32201_33822[(1)] = (8));

} else {
var statearr_32202_33823 = state_32165__$1;
(statearr_32202_33823[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (15))){
var inst_32100 = (state_32165[(2)]);
var state_32165__$1 = state_32165;
if(cljs.core.truth_(inst_32100)){
var statearr_32205_33826 = state_32165__$1;
(statearr_32205_33826[(1)] = (19));

} else {
var statearr_32207_33827 = state_32165__$1;
(statearr_32207_33827[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (21))){
var inst_32105 = (state_32165[(12)]);
var inst_32105__$1 = (state_32165[(2)]);
var inst_32106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32105__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32105__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32108 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32105__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32165__$1 = (function (){var statearr_32222 = state_32165;
(statearr_32222[(12)] = inst_32105__$1);

(statearr_32222[(10)] = inst_32106);

(statearr_32222[(13)] = inst_32107);

return statearr_32222;
})();
return cljs.core.async.ioc_alts_BANG_(state_32165__$1,(22),inst_32108);
} else {
if((state_val_32166 === (31))){
var inst_32144 = (state_32165[(2)]);
var state_32165__$1 = state_32165;
if(cljs.core.truth_(inst_32144)){
var statearr_32223_33835 = state_32165__$1;
(statearr_32223_33835[(1)] = (32));

} else {
var statearr_32224_33836 = state_32165__$1;
(statearr_32224_33836[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (32))){
var inst_32115 = (state_32165[(14)]);
var state_32165__$1 = state_32165;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32165__$1,(35),out,inst_32115);
} else {
if((state_val_32166 === (33))){
var inst_32105 = (state_32165[(12)]);
var inst_32081 = inst_32105;
var state_32165__$1 = (function (){var statearr_32225 = state_32165;
(statearr_32225[(7)] = inst_32081);

return statearr_32225;
})();
var statearr_32226_33837 = state_32165__$1;
(statearr_32226_33837[(2)] = null);

(statearr_32226_33837[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (13))){
var inst_32081 = (state_32165[(7)]);
var inst_32089 = inst_32081.cljs$lang$protocol_mask$partition0$;
var inst_32090 = (inst_32089 & (64));
var inst_32091 = inst_32081.cljs$core$ISeq$;
var inst_32092 = (cljs.core.PROTOCOL_SENTINEL === inst_32091);
var inst_32093 = ((inst_32090) || (inst_32092));
var state_32165__$1 = state_32165;
if(cljs.core.truth_(inst_32093)){
var statearr_32227_33839 = state_32165__$1;
(statearr_32227_33839[(1)] = (16));

} else {
var statearr_32228_33840 = state_32165__$1;
(statearr_32228_33840[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (22))){
var inst_32115 = (state_32165[(14)]);
var inst_32116 = (state_32165[(11)]);
var inst_32114 = (state_32165[(2)]);
var inst_32115__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32114,(0),null);
var inst_32116__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32114,(1),null);
var inst_32117 = (inst_32115__$1 == null);
var inst_32119 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32116__$1,change);
var inst_32123 = ((inst_32117) || (inst_32119));
var state_32165__$1 = (function (){var statearr_32229 = state_32165;
(statearr_32229[(14)] = inst_32115__$1);

(statearr_32229[(11)] = inst_32116__$1);

return statearr_32229;
})();
if(cljs.core.truth_(inst_32123)){
var statearr_32230_33845 = state_32165__$1;
(statearr_32230_33845[(1)] = (23));

} else {
var statearr_32231_33846 = state_32165__$1;
(statearr_32231_33846[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (36))){
var inst_32105 = (state_32165[(12)]);
var inst_32081 = inst_32105;
var state_32165__$1 = (function (){var statearr_32236 = state_32165;
(statearr_32236[(7)] = inst_32081);

return statearr_32236;
})();
var statearr_32237_33847 = state_32165__$1;
(statearr_32237_33847[(2)] = null);

(statearr_32237_33847[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (29))){
var inst_32134 = (state_32165[(9)]);
var state_32165__$1 = state_32165;
var statearr_32241_33848 = state_32165__$1;
(statearr_32241_33848[(2)] = inst_32134);

(statearr_32241_33848[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (6))){
var state_32165__$1 = state_32165;
var statearr_32244_33849 = state_32165__$1;
(statearr_32244_33849[(2)] = false);

(statearr_32244_33849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (28))){
var inst_32130 = (state_32165[(2)]);
var inst_32131 = calc_state();
var inst_32081 = inst_32131;
var state_32165__$1 = (function (){var statearr_32247 = state_32165;
(statearr_32247[(7)] = inst_32081);

(statearr_32247[(15)] = inst_32130);

return statearr_32247;
})();
var statearr_32248_33850 = state_32165__$1;
(statearr_32248_33850[(2)] = null);

(statearr_32248_33850[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (25))){
var inst_32159 = (state_32165[(2)]);
var state_32165__$1 = state_32165;
var statearr_32249_33851 = state_32165__$1;
(statearr_32249_33851[(2)] = inst_32159);

(statearr_32249_33851[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (34))){
var inst_32157 = (state_32165[(2)]);
var state_32165__$1 = state_32165;
var statearr_32254_33854 = state_32165__$1;
(statearr_32254_33854[(2)] = inst_32157);

(statearr_32254_33854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (17))){
var state_32165__$1 = state_32165;
var statearr_32258_33855 = state_32165__$1;
(statearr_32258_33855[(2)] = false);

(statearr_32258_33855[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (3))){
var state_32165__$1 = state_32165;
var statearr_32264_33856 = state_32165__$1;
(statearr_32264_33856[(2)] = false);

(statearr_32264_33856[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (12))){
var inst_32161 = (state_32165[(2)]);
var state_32165__$1 = state_32165;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32165__$1,inst_32161);
} else {
if((state_val_32166 === (2))){
var inst_32053 = (state_32165[(8)]);
var inst_32060 = inst_32053.cljs$lang$protocol_mask$partition0$;
var inst_32061 = (inst_32060 & (64));
var inst_32063 = inst_32053.cljs$core$ISeq$;
var inst_32064 = (cljs.core.PROTOCOL_SENTINEL === inst_32063);
var inst_32065 = ((inst_32061) || (inst_32064));
var state_32165__$1 = state_32165;
if(cljs.core.truth_(inst_32065)){
var statearr_32265_33857 = state_32165__$1;
(statearr_32265_33857[(1)] = (5));

} else {
var statearr_32266_33858 = state_32165__$1;
(statearr_32266_33858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (23))){
var inst_32115 = (state_32165[(14)]);
var inst_32125 = (inst_32115 == null);
var state_32165__$1 = state_32165;
if(cljs.core.truth_(inst_32125)){
var statearr_32267_33859 = state_32165__$1;
(statearr_32267_33859[(1)] = (26));

} else {
var statearr_32268_33860 = state_32165__$1;
(statearr_32268_33860[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (35))){
var inst_32148 = (state_32165[(2)]);
var state_32165__$1 = state_32165;
if(cljs.core.truth_(inst_32148)){
var statearr_32269_33861 = state_32165__$1;
(statearr_32269_33861[(1)] = (36));

} else {
var statearr_32270_33862 = state_32165__$1;
(statearr_32270_33862[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (19))){
var inst_32081 = (state_32165[(7)]);
var inst_32102 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32081);
var state_32165__$1 = state_32165;
var statearr_32273_33863 = state_32165__$1;
(statearr_32273_33863[(2)] = inst_32102);

(statearr_32273_33863[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (11))){
var inst_32081 = (state_32165[(7)]);
var inst_32085 = (inst_32081 == null);
var inst_32086 = cljs.core.not(inst_32085);
var state_32165__$1 = state_32165;
if(inst_32086){
var statearr_32274_33864 = state_32165__$1;
(statearr_32274_33864[(1)] = (13));

} else {
var statearr_32279_33865 = state_32165__$1;
(statearr_32279_33865[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (9))){
var inst_32053 = (state_32165[(8)]);
var state_32165__$1 = state_32165;
var statearr_32280_33866 = state_32165__$1;
(statearr_32280_33866[(2)] = inst_32053);

(statearr_32280_33866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (5))){
var state_32165__$1 = state_32165;
var statearr_32281_33868 = state_32165__$1;
(statearr_32281_33868[(2)] = true);

(statearr_32281_33868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (14))){
var state_32165__$1 = state_32165;
var statearr_32283_33869 = state_32165__$1;
(statearr_32283_33869[(2)] = false);

(statearr_32283_33869[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (26))){
var inst_32116 = (state_32165[(11)]);
var inst_32127 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32116);
var state_32165__$1 = state_32165;
var statearr_32286_33870 = state_32165__$1;
(statearr_32286_33870[(2)] = inst_32127);

(statearr_32286_33870[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (16))){
var state_32165__$1 = state_32165;
var statearr_32288_33872 = state_32165__$1;
(statearr_32288_33872[(2)] = true);

(statearr_32288_33872[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (38))){
var inst_32153 = (state_32165[(2)]);
var state_32165__$1 = state_32165;
var statearr_32291_33873 = state_32165__$1;
(statearr_32291_33873[(2)] = inst_32153);

(statearr_32291_33873[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (30))){
var inst_32106 = (state_32165[(10)]);
var inst_32107 = (state_32165[(13)]);
var inst_32116 = (state_32165[(11)]);
var inst_32138 = cljs.core.empty_QMARK_(inst_32106);
var inst_32140 = (inst_32107.cljs$core$IFn$_invoke$arity$1 ? inst_32107.cljs$core$IFn$_invoke$arity$1(inst_32116) : inst_32107.call(null,inst_32116));
var inst_32141 = cljs.core.not(inst_32140);
var inst_32142 = ((inst_32138) && (inst_32141));
var state_32165__$1 = state_32165;
var statearr_32292_33874 = state_32165__$1;
(statearr_32292_33874[(2)] = inst_32142);

(statearr_32292_33874[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (10))){
var inst_32053 = (state_32165[(8)]);
var inst_32077 = (state_32165[(2)]);
var inst_32078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32077,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32079 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32077,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32080 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32077,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32081 = inst_32053;
var state_32165__$1 = (function (){var statearr_32293 = state_32165;
(statearr_32293[(16)] = inst_32078);

(statearr_32293[(7)] = inst_32081);

(statearr_32293[(17)] = inst_32079);

(statearr_32293[(18)] = inst_32080);

return statearr_32293;
})();
var statearr_32295_33876 = state_32165__$1;
(statearr_32295_33876[(2)] = null);

(statearr_32295_33876[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (18))){
var inst_32097 = (state_32165[(2)]);
var state_32165__$1 = state_32165;
var statearr_32298_33878 = state_32165__$1;
(statearr_32298_33878[(2)] = inst_32097);

(statearr_32298_33878[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (37))){
var state_32165__$1 = state_32165;
var statearr_32300_33879 = state_32165__$1;
(statearr_32300_33879[(2)] = null);

(statearr_32300_33879[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32166 === (8))){
var inst_32053 = (state_32165[(8)]);
var inst_32074 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32053);
var state_32165__$1 = state_32165;
var statearr_32323_33880 = state_32165__$1;
(statearr_32323_33880[(2)] = inst_32074);

(statearr_32323_33880[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__30715__auto__ = null;
var cljs$core$async$mix_$_state_machine__30715__auto____0 = (function (){
var statearr_32328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32328[(0)] = cljs$core$async$mix_$_state_machine__30715__auto__);

(statearr_32328[(1)] = (1));

return statearr_32328;
});
var cljs$core$async$mix_$_state_machine__30715__auto____1 = (function (state_32165){
while(true){
var ret_value__30716__auto__ = (function (){try{while(true){
var result__30717__auto__ = switch__30714__auto__(state_32165);
if(cljs.core.keyword_identical_QMARK_(result__30717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30717__auto__;
}
break;
}
}catch (e32329){var ex__30718__auto__ = e32329;
var statearr_32330_33882 = state_32165;
(statearr_32330_33882[(2)] = ex__30718__auto__);


if(cljs.core.seq((state_32165[(4)]))){
var statearr_32331_33883 = state_32165;
(statearr_32331_33883[(1)] = cljs.core.first((state_32165[(4)])));

} else {
throw ex__30718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33885 = state_32165;
state_32165 = G__33885;
continue;
} else {
return ret_value__30716__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30715__auto__ = function(state_32165){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30715__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30715__auto____1.call(this,state_32165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30715__auto____0;
cljs$core$async$mix_$_state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30715__auto____1;
return cljs$core$async$mix_$_state_machine__30715__auto__;
})()
})();
var state__30946__auto__ = (function (){var statearr_32334 = f__30945__auto__();
(statearr_32334[(6)] = c__30944__auto___33814);

return statearr_32334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30946__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_33895 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_33895(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33896 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_33896(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33898 = (function() {
var G__33899 = null;
var G__33899__1 = (function (p){
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
var G__33899__2 = (function (p,v){
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
G__33899 = function(p,v){
switch(arguments.length){
case 1:
return G__33899__1.call(this,p);
case 2:
return G__33899__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33899.cljs$core$IFn$_invoke$arity$1 = G__33899__1;
G__33899.cljs$core$IFn$_invoke$arity$2 = G__33899__2;
return G__33899;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32350 = arguments.length;
switch (G__32350) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33898(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33898(p,v);
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
var G__32357 = arguments.length;
switch (G__32357) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32354_SHARP_){
if(cljs.core.truth_((p1__32354_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32354_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32354_SHARP_.call(null,topic)))){
return p1__32354_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32354_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32361 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32361 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32362){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32362 = meta32362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32363,meta32362__$1){
var self__ = this;
var _32363__$1 = this;
return (new cljs.core.async.t_cljs$core$async32361(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32362__$1));
}));

(cljs.core.async.t_cljs$core$async32361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32363){
var self__ = this;
var _32363__$1 = this;
return self__.meta32362;
}));

(cljs.core.async.t_cljs$core$async32361.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32361.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32361.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32361.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32361.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async32361.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32361.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32361.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32362","meta32362",1454885577,null)], null);
}));

(cljs.core.async.t_cljs$core$async32361.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32361.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32361");

(cljs.core.async.t_cljs$core$async32361.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32361");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32361.
 */
cljs.core.async.__GT_t_cljs$core$async32361 = (function cljs$core$async$__GT_t_cljs$core$async32361(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32362){
return (new cljs.core.async.t_cljs$core$async32361(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32362));
});

}

return (new cljs.core.async.t_cljs$core$async32361(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30944__auto___33956 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30945__auto__ = (function (){var switch__30714__auto__ = (function (state_32449){
var state_val_32450 = (state_32449[(1)]);
if((state_val_32450 === (7))){
var inst_32445 = (state_32449[(2)]);
var state_32449__$1 = state_32449;
var statearr_32452_33957 = state_32449__$1;
(statearr_32452_33957[(2)] = inst_32445);

(statearr_32452_33957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (20))){
var state_32449__$1 = state_32449;
var statearr_32453_33958 = state_32449__$1;
(statearr_32453_33958[(2)] = null);

(statearr_32453_33958[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (1))){
var state_32449__$1 = state_32449;
var statearr_32454_33959 = state_32449__$1;
(statearr_32454_33959[(2)] = null);

(statearr_32454_33959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (24))){
var inst_32428 = (state_32449[(7)]);
var inst_32437 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32428);
var state_32449__$1 = state_32449;
var statearr_32455_33960 = state_32449__$1;
(statearr_32455_33960[(2)] = inst_32437);

(statearr_32455_33960[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (4))){
var inst_32380 = (state_32449[(8)]);
var inst_32380__$1 = (state_32449[(2)]);
var inst_32381 = (inst_32380__$1 == null);
var state_32449__$1 = (function (){var statearr_32457 = state_32449;
(statearr_32457[(8)] = inst_32380__$1);

return statearr_32457;
})();
if(cljs.core.truth_(inst_32381)){
var statearr_32458_33961 = state_32449__$1;
(statearr_32458_33961[(1)] = (5));

} else {
var statearr_32459_33962 = state_32449__$1;
(statearr_32459_33962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (15))){
var inst_32422 = (state_32449[(2)]);
var state_32449__$1 = state_32449;
var statearr_32460_33964 = state_32449__$1;
(statearr_32460_33964[(2)] = inst_32422);

(statearr_32460_33964[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (21))){
var inst_32442 = (state_32449[(2)]);
var state_32449__$1 = (function (){var statearr_32461 = state_32449;
(statearr_32461[(9)] = inst_32442);

return statearr_32461;
})();
var statearr_32462_33968 = state_32449__$1;
(statearr_32462_33968[(2)] = null);

(statearr_32462_33968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (13))){
var inst_32404 = (state_32449[(10)]);
var inst_32406 = cljs.core.chunked_seq_QMARK_(inst_32404);
var state_32449__$1 = state_32449;
if(inst_32406){
var statearr_32466_33969 = state_32449__$1;
(statearr_32466_33969[(1)] = (16));

} else {
var statearr_32467_33970 = state_32449__$1;
(statearr_32467_33970[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (22))){
var inst_32434 = (state_32449[(2)]);
var state_32449__$1 = state_32449;
if(cljs.core.truth_(inst_32434)){
var statearr_32469_33971 = state_32449__$1;
(statearr_32469_33971[(1)] = (23));

} else {
var statearr_32470_33972 = state_32449__$1;
(statearr_32470_33972[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (6))){
var inst_32380 = (state_32449[(8)]);
var inst_32428 = (state_32449[(7)]);
var inst_32430 = (state_32449[(11)]);
var inst_32428__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32380) : topic_fn.call(null,inst_32380));
var inst_32429 = cljs.core.deref(mults);
var inst_32430__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32429,inst_32428__$1);
var state_32449__$1 = (function (){var statearr_32471 = state_32449;
(statearr_32471[(7)] = inst_32428__$1);

(statearr_32471[(11)] = inst_32430__$1);

return statearr_32471;
})();
if(cljs.core.truth_(inst_32430__$1)){
var statearr_32472_33973 = state_32449__$1;
(statearr_32472_33973[(1)] = (19));

} else {
var statearr_32474_33974 = state_32449__$1;
(statearr_32474_33974[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (25))){
var inst_32439 = (state_32449[(2)]);
var state_32449__$1 = state_32449;
var statearr_32476_33975 = state_32449__$1;
(statearr_32476_33975[(2)] = inst_32439);

(statearr_32476_33975[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (17))){
var inst_32404 = (state_32449[(10)]);
var inst_32413 = cljs.core.first(inst_32404);
var inst_32414 = cljs.core.async.muxch_STAR_(inst_32413);
var inst_32415 = cljs.core.async.close_BANG_(inst_32414);
var inst_32416 = cljs.core.next(inst_32404);
var inst_32390 = inst_32416;
var inst_32391 = null;
var inst_32392 = (0);
var inst_32393 = (0);
var state_32449__$1 = (function (){var statearr_32477 = state_32449;
(statearr_32477[(12)] = inst_32393);

(statearr_32477[(13)] = inst_32391);

(statearr_32477[(14)] = inst_32390);

(statearr_32477[(15)] = inst_32392);

(statearr_32477[(16)] = inst_32415);

return statearr_32477;
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
var statearr_32482_33985 = state_32449__$1;
(statearr_32482_33985[(2)] = inst_32424);

(statearr_32482_33985[(1)] = (9));


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
var inst_32380 = (state_32449[(8)]);
var inst_32430 = (state_32449[(11)]);
var inst_32432 = cljs.core.async.muxch_STAR_(inst_32430);
var state_32449__$1 = state_32449;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32449__$1,(22),inst_32432,inst_32380);
} else {
if((state_val_32450 === (11))){
var inst_32404 = (state_32449[(10)]);
var inst_32390 = (state_32449[(14)]);
var inst_32404__$1 = cljs.core.seq(inst_32390);
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
var inst_32387 = cljs.core.deref(mults);
var inst_32388 = cljs.core.vals(inst_32387);
var inst_32389 = cljs.core.seq(inst_32388);
var inst_32390 = inst_32389;
var inst_32391 = null;
var inst_32392 = (0);
var inst_32393 = (0);
var state_32449__$1 = (function (){var statearr_32491 = state_32449;
(statearr_32491[(12)] = inst_32393);

(statearr_32491[(13)] = inst_32391);

(statearr_32491[(14)] = inst_32390);

(statearr_32491[(15)] = inst_32392);

return statearr_32491;
})();
var statearr_32493_34013 = state_32449__$1;
(statearr_32493_34013[(2)] = null);

(statearr_32493_34013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (14))){
var state_32449__$1 = state_32449;
var statearr_32499_34044 = state_32449__$1;
(statearr_32499_34044[(2)] = null);

(statearr_32499_34044[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (16))){
var inst_32404 = (state_32449[(10)]);
var inst_32408 = cljs.core.chunk_first(inst_32404);
var inst_32409 = cljs.core.chunk_rest(inst_32404);
var inst_32410 = cljs.core.count(inst_32408);
var inst_32390 = inst_32409;
var inst_32391 = inst_32408;
var inst_32392 = inst_32410;
var inst_32393 = (0);
var state_32449__$1 = (function (){var statearr_32501 = state_32449;
(statearr_32501[(12)] = inst_32393);

(statearr_32501[(13)] = inst_32391);

(statearr_32501[(14)] = inst_32390);

(statearr_32501[(15)] = inst_32392);

return statearr_32501;
})();
var statearr_32502_34045 = state_32449__$1;
(statearr_32502_34045[(2)] = null);

(statearr_32502_34045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (10))){
var inst_32393 = (state_32449[(12)]);
var inst_32391 = (state_32449[(13)]);
var inst_32390 = (state_32449[(14)]);
var inst_32392 = (state_32449[(15)]);
var inst_32398 = cljs.core._nth(inst_32391,inst_32393);
var inst_32399 = cljs.core.async.muxch_STAR_(inst_32398);
var inst_32400 = cljs.core.async.close_BANG_(inst_32399);
var inst_32401 = (inst_32393 + (1));
var tmp32494 = inst_32391;
var tmp32495 = inst_32390;
var tmp32496 = inst_32392;
var inst_32390__$1 = tmp32495;
var inst_32391__$1 = tmp32494;
var inst_32392__$1 = tmp32496;
var inst_32393__$1 = inst_32401;
var state_32449__$1 = (function (){var statearr_32503 = state_32449;
(statearr_32503[(17)] = inst_32400);

(statearr_32503[(12)] = inst_32393__$1);

(statearr_32503[(13)] = inst_32391__$1);

(statearr_32503[(14)] = inst_32390__$1);

(statearr_32503[(15)] = inst_32392__$1);

return statearr_32503;
})();
var statearr_32504_34055 = state_32449__$1;
(statearr_32504_34055[(2)] = null);

(statearr_32504_34055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (18))){
var inst_32419 = (state_32449[(2)]);
var state_32449__$1 = state_32449;
var statearr_32508_34061 = state_32449__$1;
(statearr_32508_34061[(2)] = inst_32419);

(statearr_32508_34061[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32450 === (8))){
var inst_32393 = (state_32449[(12)]);
var inst_32392 = (state_32449[(15)]);
var inst_32395 = (inst_32393 < inst_32392);
var inst_32396 = inst_32395;
var state_32449__$1 = state_32449;
if(cljs.core.truth_(inst_32396)){
var statearr_32509_34096 = state_32449__$1;
(statearr_32509_34096[(1)] = (10));

} else {
var statearr_32510_34097 = state_32449__$1;
(statearr_32510_34097[(1)] = (11));

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
var cljs$core$async$state_machine__30715__auto__ = null;
var cljs$core$async$state_machine__30715__auto____0 = (function (){
var statearr_32511 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32511[(0)] = cljs$core$async$state_machine__30715__auto__);

(statearr_32511[(1)] = (1));

return statearr_32511;
});
var cljs$core$async$state_machine__30715__auto____1 = (function (state_32449){
while(true){
var ret_value__30716__auto__ = (function (){try{while(true){
var result__30717__auto__ = switch__30714__auto__(state_32449);
if(cljs.core.keyword_identical_QMARK_(result__30717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30717__auto__;
}
break;
}
}catch (e32512){var ex__30718__auto__ = e32512;
var statearr_32513_34098 = state_32449;
(statearr_32513_34098[(2)] = ex__30718__auto__);


if(cljs.core.seq((state_32449[(4)]))){
var statearr_32514_34099 = state_32449;
(statearr_32514_34099[(1)] = cljs.core.first((state_32449[(4)])));

} else {
throw ex__30718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34100 = state_32449;
state_32449 = G__34100;
continue;
} else {
return ret_value__30716__auto__;
}
break;
}
});
cljs$core$async$state_machine__30715__auto__ = function(state_32449){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30715__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30715__auto____1.call(this,state_32449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30715__auto____0;
cljs$core$async$state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30715__auto____1;
return cljs$core$async$state_machine__30715__auto__;
})()
})();
var state__30946__auto__ = (function (){var statearr_32515 = f__30945__auto__();
(statearr_32515[(6)] = c__30944__auto___33956);

return statearr_32515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30946__auto__);
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
var G__32517 = arguments.length;
switch (G__32517) {
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
var G__32525 = arguments.length;
switch (G__32525) {
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
var G__32529 = arguments.length;
switch (G__32529) {
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
var c__30944__auto___34118 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30945__auto__ = (function (){var switch__30714__auto__ = (function (state_32577){
var state_val_32578 = (state_32577[(1)]);
if((state_val_32578 === (7))){
var state_32577__$1 = state_32577;
var statearr_32579_34119 = state_32577__$1;
(statearr_32579_34119[(2)] = null);

(statearr_32579_34119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32578 === (1))){
var state_32577__$1 = state_32577;
var statearr_32580_34121 = state_32577__$1;
(statearr_32580_34121[(2)] = null);

(statearr_32580_34121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32578 === (4))){
var inst_32537 = (state_32577[(7)]);
var inst_32538 = (state_32577[(8)]);
var inst_32540 = (inst_32538 < inst_32537);
var state_32577__$1 = state_32577;
if(cljs.core.truth_(inst_32540)){
var statearr_32584_34122 = state_32577__$1;
(statearr_32584_34122[(1)] = (6));

} else {
var statearr_32585_34123 = state_32577__$1;
(statearr_32585_34123[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32578 === (15))){
var inst_32563 = (state_32577[(9)]);
var inst_32568 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32563);
var state_32577__$1 = state_32577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32577__$1,(17),out,inst_32568);
} else {
if((state_val_32578 === (13))){
var inst_32563 = (state_32577[(9)]);
var inst_32563__$1 = (state_32577[(2)]);
var inst_32564 = cljs.core.some(cljs.core.nil_QMARK_,inst_32563__$1);
var state_32577__$1 = (function (){var statearr_32591 = state_32577;
(statearr_32591[(9)] = inst_32563__$1);

return statearr_32591;
})();
if(cljs.core.truth_(inst_32564)){
var statearr_32594_34127 = state_32577__$1;
(statearr_32594_34127[(1)] = (14));

} else {
var statearr_32595_34128 = state_32577__$1;
(statearr_32595_34128[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32578 === (6))){
var state_32577__$1 = state_32577;
var statearr_32596_34129 = state_32577__$1;
(statearr_32596_34129[(2)] = null);

(statearr_32596_34129[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32578 === (17))){
var inst_32570 = (state_32577[(2)]);
var state_32577__$1 = (function (){var statearr_32613 = state_32577;
(statearr_32613[(10)] = inst_32570);

return statearr_32613;
})();
var statearr_32614_34130 = state_32577__$1;
(statearr_32614_34130[(2)] = null);

(statearr_32614_34130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32578 === (3))){
var inst_32575 = (state_32577[(2)]);
var state_32577__$1 = state_32577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32577__$1,inst_32575);
} else {
if((state_val_32578 === (12))){
var _ = (function (){var statearr_32615 = state_32577;
(statearr_32615[(4)] = cljs.core.rest((state_32577[(4)])));

return statearr_32615;
})();
var state_32577__$1 = state_32577;
var ex32612 = (state_32577__$1[(2)]);
var statearr_32619_34133 = state_32577__$1;
(statearr_32619_34133[(5)] = ex32612);


if((ex32612 instanceof Object)){
var statearr_32620_34134 = state_32577__$1;
(statearr_32620_34134[(1)] = (11));

(statearr_32620_34134[(5)] = null);

} else {
throw ex32612;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32578 === (2))){
var inst_32536 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32537 = cnt;
var inst_32538 = (0);
var state_32577__$1 = (function (){var statearr_32621 = state_32577;
(statearr_32621[(7)] = inst_32537);

(statearr_32621[(8)] = inst_32538);

(statearr_32621[(11)] = inst_32536);

return statearr_32621;
})();
var statearr_32622_34159 = state_32577__$1;
(statearr_32622_34159[(2)] = null);

(statearr_32622_34159[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32578 === (11))){
var inst_32542 = (state_32577[(2)]);
var inst_32543 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32577__$1 = (function (){var statearr_32623 = state_32577;
(statearr_32623[(12)] = inst_32542);

return statearr_32623;
})();
var statearr_32624_34160 = state_32577__$1;
(statearr_32624_34160[(2)] = inst_32543);

(statearr_32624_34160[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32578 === (9))){
var inst_32538 = (state_32577[(8)]);
var _ = (function (){var statearr_32625 = state_32577;
(statearr_32625[(4)] = cljs.core.cons((12),(state_32577[(4)])));

return statearr_32625;
})();
var inst_32549 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32538) : chs__$1.call(null,inst_32538));
var inst_32550 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32538) : done.call(null,inst_32538));
var inst_32551 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32549,inst_32550);
var ___$1 = (function (){var statearr_32626 = state_32577;
(statearr_32626[(4)] = cljs.core.rest((state_32577[(4)])));

return statearr_32626;
})();
var state_32577__$1 = state_32577;
var statearr_32627_34161 = state_32577__$1;
(statearr_32627_34161[(2)] = inst_32551);

(statearr_32627_34161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32578 === (5))){
var inst_32561 = (state_32577[(2)]);
var state_32577__$1 = (function (){var statearr_32628 = state_32577;
(statearr_32628[(13)] = inst_32561);

return statearr_32628;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32577__$1,(13),dchan);
} else {
if((state_val_32578 === (14))){
var inst_32566 = cljs.core.async.close_BANG_(out);
var state_32577__$1 = state_32577;
var statearr_32629_34162 = state_32577__$1;
(statearr_32629_34162[(2)] = inst_32566);

(statearr_32629_34162[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32578 === (16))){
var inst_32573 = (state_32577[(2)]);
var state_32577__$1 = state_32577;
var statearr_32630_34163 = state_32577__$1;
(statearr_32630_34163[(2)] = inst_32573);

(statearr_32630_34163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32578 === (10))){
var inst_32538 = (state_32577[(8)]);
var inst_32554 = (state_32577[(2)]);
var inst_32555 = (inst_32538 + (1));
var inst_32538__$1 = inst_32555;
var state_32577__$1 = (function (){var statearr_32631 = state_32577;
(statearr_32631[(8)] = inst_32538__$1);

(statearr_32631[(14)] = inst_32554);

return statearr_32631;
})();
var statearr_32633_34195 = state_32577__$1;
(statearr_32633_34195[(2)] = null);

(statearr_32633_34195[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32578 === (8))){
var inst_32559 = (state_32577[(2)]);
var state_32577__$1 = state_32577;
var statearr_32634_34200 = state_32577__$1;
(statearr_32634_34200[(2)] = inst_32559);

(statearr_32634_34200[(1)] = (5));


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
var cljs$core$async$state_machine__30715__auto__ = null;
var cljs$core$async$state_machine__30715__auto____0 = (function (){
var statearr_32635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32635[(0)] = cljs$core$async$state_machine__30715__auto__);

(statearr_32635[(1)] = (1));

return statearr_32635;
});
var cljs$core$async$state_machine__30715__auto____1 = (function (state_32577){
while(true){
var ret_value__30716__auto__ = (function (){try{while(true){
var result__30717__auto__ = switch__30714__auto__(state_32577);
if(cljs.core.keyword_identical_QMARK_(result__30717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30717__auto__;
}
break;
}
}catch (e32636){var ex__30718__auto__ = e32636;
var statearr_32637_34205 = state_32577;
(statearr_32637_34205[(2)] = ex__30718__auto__);


if(cljs.core.seq((state_32577[(4)]))){
var statearr_32638_34206 = state_32577;
(statearr_32638_34206[(1)] = cljs.core.first((state_32577[(4)])));

} else {
throw ex__30718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34207 = state_32577;
state_32577 = G__34207;
continue;
} else {
return ret_value__30716__auto__;
}
break;
}
});
cljs$core$async$state_machine__30715__auto__ = function(state_32577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30715__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30715__auto____1.call(this,state_32577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30715__auto____0;
cljs$core$async$state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30715__auto____1;
return cljs$core$async$state_machine__30715__auto__;
})()
})();
var state__30946__auto__ = (function (){var statearr_32639 = f__30945__auto__();
(statearr_32639[(6)] = c__30944__auto___34118);

return statearr_32639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30946__auto__);
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
var c__30944__auto___34209 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30945__auto__ = (function (){var switch__30714__auto__ = (function (state_32686){
var state_val_32687 = (state_32686[(1)]);
if((state_val_32687 === (7))){
var inst_32661 = (state_32686[(7)]);
var inst_32662 = (state_32686[(8)]);
var inst_32661__$1 = (state_32686[(2)]);
var inst_32662__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32661__$1,(0),null);
var inst_32663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32661__$1,(1),null);
var inst_32664 = (inst_32662__$1 == null);
var state_32686__$1 = (function (){var statearr_32688 = state_32686;
(statearr_32688[(9)] = inst_32663);

(statearr_32688[(7)] = inst_32661__$1);

(statearr_32688[(8)] = inst_32662__$1);

return statearr_32688;
})();
if(cljs.core.truth_(inst_32664)){
var statearr_32690_34232 = state_32686__$1;
(statearr_32690_34232[(1)] = (8));

} else {
var statearr_32691_34233 = state_32686__$1;
(statearr_32691_34233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (1))){
var inst_32651 = cljs.core.vec(chs);
var inst_32652 = inst_32651;
var state_32686__$1 = (function (){var statearr_32692 = state_32686;
(statearr_32692[(10)] = inst_32652);

return statearr_32692;
})();
var statearr_32693_34241 = state_32686__$1;
(statearr_32693_34241[(2)] = null);

(statearr_32693_34241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (4))){
var inst_32652 = (state_32686[(10)]);
var state_32686__$1 = state_32686;
return cljs.core.async.ioc_alts_BANG_(state_32686__$1,(7),inst_32652);
} else {
if((state_val_32687 === (6))){
var inst_32682 = (state_32686[(2)]);
var state_32686__$1 = state_32686;
var statearr_32696_34248 = state_32686__$1;
(statearr_32696_34248[(2)] = inst_32682);

(statearr_32696_34248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (3))){
var inst_32684 = (state_32686[(2)]);
var state_32686__$1 = state_32686;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32686__$1,inst_32684);
} else {
if((state_val_32687 === (2))){
var inst_32652 = (state_32686[(10)]);
var inst_32654 = cljs.core.count(inst_32652);
var inst_32655 = (inst_32654 > (0));
var state_32686__$1 = state_32686;
if(cljs.core.truth_(inst_32655)){
var statearr_32699_34249 = state_32686__$1;
(statearr_32699_34249[(1)] = (4));

} else {
var statearr_32700_34250 = state_32686__$1;
(statearr_32700_34250[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (11))){
var inst_32652 = (state_32686[(10)]);
var inst_32675 = (state_32686[(2)]);
var tmp32698 = inst_32652;
var inst_32652__$1 = tmp32698;
var state_32686__$1 = (function (){var statearr_32703 = state_32686;
(statearr_32703[(11)] = inst_32675);

(statearr_32703[(10)] = inst_32652__$1);

return statearr_32703;
})();
var statearr_32705_34265 = state_32686__$1;
(statearr_32705_34265[(2)] = null);

(statearr_32705_34265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (9))){
var inst_32662 = (state_32686[(8)]);
var state_32686__$1 = state_32686;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32686__$1,(11),out,inst_32662);
} else {
if((state_val_32687 === (5))){
var inst_32680 = cljs.core.async.close_BANG_(out);
var state_32686__$1 = state_32686;
var statearr_32709_34266 = state_32686__$1;
(statearr_32709_34266[(2)] = inst_32680);

(statearr_32709_34266[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (10))){
var inst_32678 = (state_32686[(2)]);
var state_32686__$1 = state_32686;
var statearr_32710_34267 = state_32686__$1;
(statearr_32710_34267[(2)] = inst_32678);

(statearr_32710_34267[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (8))){
var inst_32663 = (state_32686[(9)]);
var inst_32652 = (state_32686[(10)]);
var inst_32661 = (state_32686[(7)]);
var inst_32662 = (state_32686[(8)]);
var inst_32666 = (function (){var cs = inst_32652;
var vec__32657 = inst_32661;
var v = inst_32662;
var c = inst_32663;
return (function (p1__32640_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32640_SHARP_);
});
})();
var inst_32671 = cljs.core.filterv(inst_32666,inst_32652);
var inst_32652__$1 = inst_32671;
var state_32686__$1 = (function (){var statearr_32722 = state_32686;
(statearr_32722[(10)] = inst_32652__$1);

return statearr_32722;
})();
var statearr_32723_34268 = state_32686__$1;
(statearr_32723_34268[(2)] = null);

(statearr_32723_34268[(1)] = (2));


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
var cljs$core$async$state_machine__30715__auto__ = null;
var cljs$core$async$state_machine__30715__auto____0 = (function (){
var statearr_32724 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32724[(0)] = cljs$core$async$state_machine__30715__auto__);

(statearr_32724[(1)] = (1));

return statearr_32724;
});
var cljs$core$async$state_machine__30715__auto____1 = (function (state_32686){
while(true){
var ret_value__30716__auto__ = (function (){try{while(true){
var result__30717__auto__ = switch__30714__auto__(state_32686);
if(cljs.core.keyword_identical_QMARK_(result__30717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30717__auto__;
}
break;
}
}catch (e32727){var ex__30718__auto__ = e32727;
var statearr_32728_34269 = state_32686;
(statearr_32728_34269[(2)] = ex__30718__auto__);


if(cljs.core.seq((state_32686[(4)]))){
var statearr_32729_34270 = state_32686;
(statearr_32729_34270[(1)] = cljs.core.first((state_32686[(4)])));

} else {
throw ex__30718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34271 = state_32686;
state_32686 = G__34271;
continue;
} else {
return ret_value__30716__auto__;
}
break;
}
});
cljs$core$async$state_machine__30715__auto__ = function(state_32686){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30715__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30715__auto____1.call(this,state_32686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30715__auto____0;
cljs$core$async$state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30715__auto____1;
return cljs$core$async$state_machine__30715__auto__;
})()
})();
var state__30946__auto__ = (function (){var statearr_32730 = f__30945__auto__();
(statearr_32730[(6)] = c__30944__auto___34209);

return statearr_32730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30946__auto__);
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
var G__32733 = arguments.length;
switch (G__32733) {
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
var c__30944__auto___34273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30945__auto__ = (function (){var switch__30714__auto__ = (function (state_32757){
var state_val_32758 = (state_32757[(1)]);
if((state_val_32758 === (7))){
var inst_32739 = (state_32757[(7)]);
var inst_32739__$1 = (state_32757[(2)]);
var inst_32740 = (inst_32739__$1 == null);
var inst_32741 = cljs.core.not(inst_32740);
var state_32757__$1 = (function (){var statearr_32762 = state_32757;
(statearr_32762[(7)] = inst_32739__$1);

return statearr_32762;
})();
if(inst_32741){
var statearr_32766_34274 = state_32757__$1;
(statearr_32766_34274[(1)] = (8));

} else {
var statearr_32767_34275 = state_32757__$1;
(statearr_32767_34275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (1))){
var inst_32734 = (0);
var state_32757__$1 = (function (){var statearr_32768 = state_32757;
(statearr_32768[(8)] = inst_32734);

return statearr_32768;
})();
var statearr_32769_34277 = state_32757__$1;
(statearr_32769_34277[(2)] = null);

(statearr_32769_34277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (4))){
var state_32757__$1 = state_32757;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32757__$1,(7),ch);
} else {
if((state_val_32758 === (6))){
var inst_32752 = (state_32757[(2)]);
var state_32757__$1 = state_32757;
var statearr_32770_34278 = state_32757__$1;
(statearr_32770_34278[(2)] = inst_32752);

(statearr_32770_34278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (3))){
var inst_32754 = (state_32757[(2)]);
var inst_32755 = cljs.core.async.close_BANG_(out);
var state_32757__$1 = (function (){var statearr_32771 = state_32757;
(statearr_32771[(9)] = inst_32754);

return statearr_32771;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32757__$1,inst_32755);
} else {
if((state_val_32758 === (2))){
var inst_32734 = (state_32757[(8)]);
var inst_32736 = (inst_32734 < n);
var state_32757__$1 = state_32757;
if(cljs.core.truth_(inst_32736)){
var statearr_32772_34279 = state_32757__$1;
(statearr_32772_34279[(1)] = (4));

} else {
var statearr_32773_34280 = state_32757__$1;
(statearr_32773_34280[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (11))){
var inst_32734 = (state_32757[(8)]);
var inst_32744 = (state_32757[(2)]);
var inst_32745 = (inst_32734 + (1));
var inst_32734__$1 = inst_32745;
var state_32757__$1 = (function (){var statearr_32774 = state_32757;
(statearr_32774[(8)] = inst_32734__$1);

(statearr_32774[(10)] = inst_32744);

return statearr_32774;
})();
var statearr_32775_34281 = state_32757__$1;
(statearr_32775_34281[(2)] = null);

(statearr_32775_34281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (9))){
var state_32757__$1 = state_32757;
var statearr_32776_34282 = state_32757__$1;
(statearr_32776_34282[(2)] = null);

(statearr_32776_34282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (5))){
var state_32757__$1 = state_32757;
var statearr_32777_34283 = state_32757__$1;
(statearr_32777_34283[(2)] = null);

(statearr_32777_34283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (10))){
var inst_32749 = (state_32757[(2)]);
var state_32757__$1 = state_32757;
var statearr_32778_34284 = state_32757__$1;
(statearr_32778_34284[(2)] = inst_32749);

(statearr_32778_34284[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32758 === (8))){
var inst_32739 = (state_32757[(7)]);
var state_32757__$1 = state_32757;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32757__$1,(11),out,inst_32739);
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
var cljs$core$async$state_machine__30715__auto__ = null;
var cljs$core$async$state_machine__30715__auto____0 = (function (){
var statearr_32782 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32782[(0)] = cljs$core$async$state_machine__30715__auto__);

(statearr_32782[(1)] = (1));

return statearr_32782;
});
var cljs$core$async$state_machine__30715__auto____1 = (function (state_32757){
while(true){
var ret_value__30716__auto__ = (function (){try{while(true){
var result__30717__auto__ = switch__30714__auto__(state_32757);
if(cljs.core.keyword_identical_QMARK_(result__30717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30717__auto__;
}
break;
}
}catch (e32783){var ex__30718__auto__ = e32783;
var statearr_32784_34285 = state_32757;
(statearr_32784_34285[(2)] = ex__30718__auto__);


if(cljs.core.seq((state_32757[(4)]))){
var statearr_32785_34286 = state_32757;
(statearr_32785_34286[(1)] = cljs.core.first((state_32757[(4)])));

} else {
throw ex__30718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34287 = state_32757;
state_32757 = G__34287;
continue;
} else {
return ret_value__30716__auto__;
}
break;
}
});
cljs$core$async$state_machine__30715__auto__ = function(state_32757){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30715__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30715__auto____1.call(this,state_32757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30715__auto____0;
cljs$core$async$state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30715__auto____1;
return cljs$core$async$state_machine__30715__auto__;
})()
})();
var state__30946__auto__ = (function (){var statearr_32786 = f__30945__auto__();
(statearr_32786[(6)] = c__30944__auto___34273);

return statearr_32786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30946__auto__);
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
var c__30944__auto___34319 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30945__auto__ = (function (){var switch__30714__auto__ = (function (state_32827){
var state_val_32828 = (state_32827[(1)]);
if((state_val_32828 === (7))){
var inst_32823 = (state_32827[(2)]);
var state_32827__$1 = state_32827;
var statearr_32829_34320 = state_32827__$1;
(statearr_32829_34320[(2)] = inst_32823);

(statearr_32829_34320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32828 === (1))){
var state_32827__$1 = state_32827;
var statearr_32830_34321 = state_32827__$1;
(statearr_32830_34321[(2)] = null);

(statearr_32830_34321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32828 === (4))){
var inst_32809 = (state_32827[(7)]);
var inst_32809__$1 = (state_32827[(2)]);
var inst_32810 = (inst_32809__$1 == null);
var state_32827__$1 = (function (){var statearr_32832 = state_32827;
(statearr_32832[(7)] = inst_32809__$1);

return statearr_32832;
})();
if(cljs.core.truth_(inst_32810)){
var statearr_32833_34322 = state_32827__$1;
(statearr_32833_34322[(1)] = (5));

} else {
var statearr_32834_34323 = state_32827__$1;
(statearr_32834_34323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32828 === (6))){
var inst_32809 = (state_32827[(7)]);
var inst_32814 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32809) : p.call(null,inst_32809));
var state_32827__$1 = state_32827;
if(cljs.core.truth_(inst_32814)){
var statearr_32835_34324 = state_32827__$1;
(statearr_32835_34324[(1)] = (8));

} else {
var statearr_32836_34325 = state_32827__$1;
(statearr_32836_34325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32828 === (3))){
var inst_32825 = (state_32827[(2)]);
var state_32827__$1 = state_32827;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32827__$1,inst_32825);
} else {
if((state_val_32828 === (2))){
var state_32827__$1 = state_32827;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32827__$1,(4),ch);
} else {
if((state_val_32828 === (11))){
var inst_32817 = (state_32827[(2)]);
var state_32827__$1 = state_32827;
var statearr_32837_34330 = state_32827__$1;
(statearr_32837_34330[(2)] = inst_32817);

(statearr_32837_34330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32828 === (9))){
var state_32827__$1 = state_32827;
var statearr_32838_34332 = state_32827__$1;
(statearr_32838_34332[(2)] = null);

(statearr_32838_34332[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32828 === (5))){
var inst_32812 = cljs.core.async.close_BANG_(out);
var state_32827__$1 = state_32827;
var statearr_32839_34339 = state_32827__$1;
(statearr_32839_34339[(2)] = inst_32812);

(statearr_32839_34339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32828 === (10))){
var inst_32820 = (state_32827[(2)]);
var state_32827__$1 = (function (){var statearr_32840 = state_32827;
(statearr_32840[(8)] = inst_32820);

return statearr_32840;
})();
var statearr_32841_34341 = state_32827__$1;
(statearr_32841_34341[(2)] = null);

(statearr_32841_34341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32828 === (8))){
var inst_32809 = (state_32827[(7)]);
var state_32827__$1 = state_32827;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32827__$1,(11),out,inst_32809);
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
var cljs$core$async$state_machine__30715__auto__ = null;
var cljs$core$async$state_machine__30715__auto____0 = (function (){
var statearr_32842 = [null,null,null,null,null,null,null,null,null];
(statearr_32842[(0)] = cljs$core$async$state_machine__30715__auto__);

(statearr_32842[(1)] = (1));

return statearr_32842;
});
var cljs$core$async$state_machine__30715__auto____1 = (function (state_32827){
while(true){
var ret_value__30716__auto__ = (function (){try{while(true){
var result__30717__auto__ = switch__30714__auto__(state_32827);
if(cljs.core.keyword_identical_QMARK_(result__30717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30717__auto__;
}
break;
}
}catch (e32844){var ex__30718__auto__ = e32844;
var statearr_32845_34362 = state_32827;
(statearr_32845_34362[(2)] = ex__30718__auto__);


if(cljs.core.seq((state_32827[(4)]))){
var statearr_32846_34421 = state_32827;
(statearr_32846_34421[(1)] = cljs.core.first((state_32827[(4)])));

} else {
throw ex__30718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34422 = state_32827;
state_32827 = G__34422;
continue;
} else {
return ret_value__30716__auto__;
}
break;
}
});
cljs$core$async$state_machine__30715__auto__ = function(state_32827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30715__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30715__auto____1.call(this,state_32827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30715__auto____0;
cljs$core$async$state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30715__auto____1;
return cljs$core$async$state_machine__30715__auto__;
})()
})();
var state__30946__auto__ = (function (){var statearr_32847 = f__30945__auto__();
(statearr_32847[(6)] = c__30944__auto___34319);

return statearr_32847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30946__auto__);
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
var c__30944__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30945__auto__ = (function (){var switch__30714__auto__ = (function (state_32917){
var state_val_32918 = (state_32917[(1)]);
if((state_val_32918 === (7))){
var inst_32911 = (state_32917[(2)]);
var state_32917__$1 = state_32917;
var statearr_32920_34435 = state_32917__$1;
(statearr_32920_34435[(2)] = inst_32911);

(statearr_32920_34435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (20))){
var inst_32881 = (state_32917[(7)]);
var inst_32892 = (state_32917[(2)]);
var inst_32893 = cljs.core.next(inst_32881);
var inst_32867 = inst_32893;
var inst_32868 = null;
var inst_32869 = (0);
var inst_32870 = (0);
var state_32917__$1 = (function (){var statearr_32921 = state_32917;
(statearr_32921[(8)] = inst_32892);

(statearr_32921[(9)] = inst_32868);

(statearr_32921[(10)] = inst_32867);

(statearr_32921[(11)] = inst_32870);

(statearr_32921[(12)] = inst_32869);

return statearr_32921;
})();
var statearr_32922_34439 = state_32917__$1;
(statearr_32922_34439[(2)] = null);

(statearr_32922_34439[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (1))){
var state_32917__$1 = state_32917;
var statearr_32923_34440 = state_32917__$1;
(statearr_32923_34440[(2)] = null);

(statearr_32923_34440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (4))){
var inst_32856 = (state_32917[(13)]);
var inst_32856__$1 = (state_32917[(2)]);
var inst_32857 = (inst_32856__$1 == null);
var state_32917__$1 = (function (){var statearr_32924 = state_32917;
(statearr_32924[(13)] = inst_32856__$1);

return statearr_32924;
})();
if(cljs.core.truth_(inst_32857)){
var statearr_32925_34441 = state_32917__$1;
(statearr_32925_34441[(1)] = (5));

} else {
var statearr_32926_34442 = state_32917__$1;
(statearr_32926_34442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (15))){
var state_32917__$1 = state_32917;
var statearr_32931_34443 = state_32917__$1;
(statearr_32931_34443[(2)] = null);

(statearr_32931_34443[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (21))){
var state_32917__$1 = state_32917;
var statearr_32934_34444 = state_32917__$1;
(statearr_32934_34444[(2)] = null);

(statearr_32934_34444[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (13))){
var inst_32868 = (state_32917[(9)]);
var inst_32867 = (state_32917[(10)]);
var inst_32870 = (state_32917[(11)]);
var inst_32869 = (state_32917[(12)]);
var inst_32877 = (state_32917[(2)]);
var inst_32878 = (inst_32870 + (1));
var tmp32927 = inst_32868;
var tmp32928 = inst_32867;
var tmp32929 = inst_32869;
var inst_32867__$1 = tmp32928;
var inst_32868__$1 = tmp32927;
var inst_32869__$1 = tmp32929;
var inst_32870__$1 = inst_32878;
var state_32917__$1 = (function (){var statearr_32936 = state_32917;
(statearr_32936[(14)] = inst_32877);

(statearr_32936[(9)] = inst_32868__$1);

(statearr_32936[(10)] = inst_32867__$1);

(statearr_32936[(11)] = inst_32870__$1);

(statearr_32936[(12)] = inst_32869__$1);

return statearr_32936;
})();
var statearr_32937_34446 = state_32917__$1;
(statearr_32937_34446[(2)] = null);

(statearr_32937_34446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (22))){
var state_32917__$1 = state_32917;
var statearr_32938_34447 = state_32917__$1;
(statearr_32938_34447[(2)] = null);

(statearr_32938_34447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (6))){
var inst_32856 = (state_32917[(13)]);
var inst_32865 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32856) : f.call(null,inst_32856));
var inst_32866 = cljs.core.seq(inst_32865);
var inst_32867 = inst_32866;
var inst_32868 = null;
var inst_32869 = (0);
var inst_32870 = (0);
var state_32917__$1 = (function (){var statearr_32939 = state_32917;
(statearr_32939[(9)] = inst_32868);

(statearr_32939[(10)] = inst_32867);

(statearr_32939[(11)] = inst_32870);

(statearr_32939[(12)] = inst_32869);

return statearr_32939;
})();
var statearr_32940_34448 = state_32917__$1;
(statearr_32940_34448[(2)] = null);

(statearr_32940_34448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (17))){
var inst_32881 = (state_32917[(7)]);
var inst_32885 = cljs.core.chunk_first(inst_32881);
var inst_32886 = cljs.core.chunk_rest(inst_32881);
var inst_32887 = cljs.core.count(inst_32885);
var inst_32867 = inst_32886;
var inst_32868 = inst_32885;
var inst_32869 = inst_32887;
var inst_32870 = (0);
var state_32917__$1 = (function (){var statearr_32942 = state_32917;
(statearr_32942[(9)] = inst_32868);

(statearr_32942[(10)] = inst_32867);

(statearr_32942[(11)] = inst_32870);

(statearr_32942[(12)] = inst_32869);

return statearr_32942;
})();
var statearr_32943_34450 = state_32917__$1;
(statearr_32943_34450[(2)] = null);

(statearr_32943_34450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (3))){
var inst_32913 = (state_32917[(2)]);
var state_32917__$1 = state_32917;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32917__$1,inst_32913);
} else {
if((state_val_32918 === (12))){
var inst_32901 = (state_32917[(2)]);
var state_32917__$1 = state_32917;
var statearr_32948_34451 = state_32917__$1;
(statearr_32948_34451[(2)] = inst_32901);

(statearr_32948_34451[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (2))){
var state_32917__$1 = state_32917;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32917__$1,(4),in$);
} else {
if((state_val_32918 === (23))){
var inst_32909 = (state_32917[(2)]);
var state_32917__$1 = state_32917;
var statearr_32949_34452 = state_32917__$1;
(statearr_32949_34452[(2)] = inst_32909);

(statearr_32949_34452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (19))){
var inst_32896 = (state_32917[(2)]);
var state_32917__$1 = state_32917;
var statearr_32950_34453 = state_32917__$1;
(statearr_32950_34453[(2)] = inst_32896);

(statearr_32950_34453[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (11))){
var inst_32881 = (state_32917[(7)]);
var inst_32867 = (state_32917[(10)]);
var inst_32881__$1 = cljs.core.seq(inst_32867);
var state_32917__$1 = (function (){var statearr_32951 = state_32917;
(statearr_32951[(7)] = inst_32881__$1);

return statearr_32951;
})();
if(inst_32881__$1){
var statearr_32952_34456 = state_32917__$1;
(statearr_32952_34456[(1)] = (14));

} else {
var statearr_32953_34457 = state_32917__$1;
(statearr_32953_34457[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (9))){
var inst_32903 = (state_32917[(2)]);
var inst_32904 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32917__$1 = (function (){var statearr_32954 = state_32917;
(statearr_32954[(15)] = inst_32903);

return statearr_32954;
})();
if(cljs.core.truth_(inst_32904)){
var statearr_32955_34458 = state_32917__$1;
(statearr_32955_34458[(1)] = (21));

} else {
var statearr_32956_34459 = state_32917__$1;
(statearr_32956_34459[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (5))){
var inst_32859 = cljs.core.async.close_BANG_(out);
var state_32917__$1 = state_32917;
var statearr_32957_34460 = state_32917__$1;
(statearr_32957_34460[(2)] = inst_32859);

(statearr_32957_34460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (14))){
var inst_32881 = (state_32917[(7)]);
var inst_32883 = cljs.core.chunked_seq_QMARK_(inst_32881);
var state_32917__$1 = state_32917;
if(inst_32883){
var statearr_32958_34461 = state_32917__$1;
(statearr_32958_34461[(1)] = (17));

} else {
var statearr_32959_34462 = state_32917__$1;
(statearr_32959_34462[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (16))){
var inst_32899 = (state_32917[(2)]);
var state_32917__$1 = state_32917;
var statearr_32960_34463 = state_32917__$1;
(statearr_32960_34463[(2)] = inst_32899);

(statearr_32960_34463[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (10))){
var inst_32868 = (state_32917[(9)]);
var inst_32870 = (state_32917[(11)]);
var inst_32875 = cljs.core._nth(inst_32868,inst_32870);
var state_32917__$1 = state_32917;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32917__$1,(13),out,inst_32875);
} else {
if((state_val_32918 === (18))){
var inst_32881 = (state_32917[(7)]);
var inst_32890 = cljs.core.first(inst_32881);
var state_32917__$1 = state_32917;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32917__$1,(20),out,inst_32890);
} else {
if((state_val_32918 === (8))){
var inst_32870 = (state_32917[(11)]);
var inst_32869 = (state_32917[(12)]);
var inst_32872 = (inst_32870 < inst_32869);
var inst_32873 = inst_32872;
var state_32917__$1 = state_32917;
if(cljs.core.truth_(inst_32873)){
var statearr_32965_34467 = state_32917__$1;
(statearr_32965_34467[(1)] = (10));

} else {
var statearr_32966_34468 = state_32917__$1;
(statearr_32966_34468[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__30715__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30715__auto____0 = (function (){
var statearr_32970 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32970[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30715__auto__);

(statearr_32970[(1)] = (1));

return statearr_32970;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30715__auto____1 = (function (state_32917){
while(true){
var ret_value__30716__auto__ = (function (){try{while(true){
var result__30717__auto__ = switch__30714__auto__(state_32917);
if(cljs.core.keyword_identical_QMARK_(result__30717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30717__auto__;
}
break;
}
}catch (e32975){var ex__30718__auto__ = e32975;
var statearr_32977_34469 = state_32917;
(statearr_32977_34469[(2)] = ex__30718__auto__);


if(cljs.core.seq((state_32917[(4)]))){
var statearr_32980_34470 = state_32917;
(statearr_32980_34470[(1)] = cljs.core.first((state_32917[(4)])));

} else {
throw ex__30718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34471 = state_32917;
state_32917 = G__34471;
continue;
} else {
return ret_value__30716__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30715__auto__ = function(state_32917){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30715__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30715__auto____1.call(this,state_32917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30715__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30715__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30715__auto__;
})()
})();
var state__30946__auto__ = (function (){var statearr_32988 = f__30945__auto__();
(statearr_32988[(6)] = c__30944__auto__);

return statearr_32988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30946__auto__);
}));

return c__30944__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33016 = arguments.length;
switch (G__33016) {
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
var G__33022 = arguments.length;
switch (G__33022) {
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
var G__33027 = arguments.length;
switch (G__33027) {
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
var c__30944__auto___34478 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30945__auto__ = (function (){var switch__30714__auto__ = (function (state_33057){
var state_val_33058 = (state_33057[(1)]);
if((state_val_33058 === (7))){
var inst_33051 = (state_33057[(2)]);
var state_33057__$1 = state_33057;
var statearr_33059_34479 = state_33057__$1;
(statearr_33059_34479[(2)] = inst_33051);

(statearr_33059_34479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33058 === (1))){
var inst_33033 = null;
var state_33057__$1 = (function (){var statearr_33060 = state_33057;
(statearr_33060[(7)] = inst_33033);

return statearr_33060;
})();
var statearr_33061_34480 = state_33057__$1;
(statearr_33061_34480[(2)] = null);

(statearr_33061_34480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33058 === (4))){
var inst_33036 = (state_33057[(8)]);
var inst_33036__$1 = (state_33057[(2)]);
var inst_33037 = (inst_33036__$1 == null);
var inst_33038 = cljs.core.not(inst_33037);
var state_33057__$1 = (function (){var statearr_33062 = state_33057;
(statearr_33062[(8)] = inst_33036__$1);

return statearr_33062;
})();
if(inst_33038){
var statearr_33063_34481 = state_33057__$1;
(statearr_33063_34481[(1)] = (5));

} else {
var statearr_33064_34482 = state_33057__$1;
(statearr_33064_34482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33058 === (6))){
var state_33057__$1 = state_33057;
var statearr_33065_34483 = state_33057__$1;
(statearr_33065_34483[(2)] = null);

(statearr_33065_34483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33058 === (3))){
var inst_33053 = (state_33057[(2)]);
var inst_33054 = cljs.core.async.close_BANG_(out);
var state_33057__$1 = (function (){var statearr_33066 = state_33057;
(statearr_33066[(9)] = inst_33053);

return statearr_33066;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33057__$1,inst_33054);
} else {
if((state_val_33058 === (2))){
var state_33057__$1 = state_33057;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33057__$1,(4),ch);
} else {
if((state_val_33058 === (11))){
var inst_33036 = (state_33057[(8)]);
var inst_33045 = (state_33057[(2)]);
var inst_33033 = inst_33036;
var state_33057__$1 = (function (){var statearr_33067 = state_33057;
(statearr_33067[(7)] = inst_33033);

(statearr_33067[(10)] = inst_33045);

return statearr_33067;
})();
var statearr_33068_34485 = state_33057__$1;
(statearr_33068_34485[(2)] = null);

(statearr_33068_34485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33058 === (9))){
var inst_33036 = (state_33057[(8)]);
var state_33057__$1 = state_33057;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33057__$1,(11),out,inst_33036);
} else {
if((state_val_33058 === (5))){
var inst_33036 = (state_33057[(8)]);
var inst_33033 = (state_33057[(7)]);
var inst_33040 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33036,inst_33033);
var state_33057__$1 = state_33057;
if(inst_33040){
var statearr_33070_34486 = state_33057__$1;
(statearr_33070_34486[(1)] = (8));

} else {
var statearr_33071_34487 = state_33057__$1;
(statearr_33071_34487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33058 === (10))){
var inst_33048 = (state_33057[(2)]);
var state_33057__$1 = state_33057;
var statearr_33072_34488 = state_33057__$1;
(statearr_33072_34488[(2)] = inst_33048);

(statearr_33072_34488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33058 === (8))){
var inst_33033 = (state_33057[(7)]);
var tmp33069 = inst_33033;
var inst_33033__$1 = tmp33069;
var state_33057__$1 = (function (){var statearr_33073 = state_33057;
(statearr_33073[(7)] = inst_33033__$1);

return statearr_33073;
})();
var statearr_33074_34489 = state_33057__$1;
(statearr_33074_34489[(2)] = null);

(statearr_33074_34489[(1)] = (2));


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
var cljs$core$async$state_machine__30715__auto__ = null;
var cljs$core$async$state_machine__30715__auto____0 = (function (){
var statearr_33075 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33075[(0)] = cljs$core$async$state_machine__30715__auto__);

(statearr_33075[(1)] = (1));

return statearr_33075;
});
var cljs$core$async$state_machine__30715__auto____1 = (function (state_33057){
while(true){
var ret_value__30716__auto__ = (function (){try{while(true){
var result__30717__auto__ = switch__30714__auto__(state_33057);
if(cljs.core.keyword_identical_QMARK_(result__30717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30717__auto__;
}
break;
}
}catch (e33076){var ex__30718__auto__ = e33076;
var statearr_33077_34492 = state_33057;
(statearr_33077_34492[(2)] = ex__30718__auto__);


if(cljs.core.seq((state_33057[(4)]))){
var statearr_33078_34493 = state_33057;
(statearr_33078_34493[(1)] = cljs.core.first((state_33057[(4)])));

} else {
throw ex__30718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34494 = state_33057;
state_33057 = G__34494;
continue;
} else {
return ret_value__30716__auto__;
}
break;
}
});
cljs$core$async$state_machine__30715__auto__ = function(state_33057){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30715__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30715__auto____1.call(this,state_33057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30715__auto____0;
cljs$core$async$state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30715__auto____1;
return cljs$core$async$state_machine__30715__auto__;
})()
})();
var state__30946__auto__ = (function (){var statearr_33079 = f__30945__auto__();
(statearr_33079[(6)] = c__30944__auto___34478);

return statearr_33079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30946__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33084 = arguments.length;
switch (G__33084) {
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
var c__30944__auto___34496 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30945__auto__ = (function (){var switch__30714__auto__ = (function (state_33122){
var state_val_33123 = (state_33122[(1)]);
if((state_val_33123 === (7))){
var inst_33118 = (state_33122[(2)]);
var state_33122__$1 = state_33122;
var statearr_33125_34497 = state_33122__$1;
(statearr_33125_34497[(2)] = inst_33118);

(statearr_33125_34497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (1))){
var inst_33085 = (new Array(n));
var inst_33086 = inst_33085;
var inst_33087 = (0);
var state_33122__$1 = (function (){var statearr_33126 = state_33122;
(statearr_33126[(7)] = inst_33086);

(statearr_33126[(8)] = inst_33087);

return statearr_33126;
})();
var statearr_33132_34498 = state_33122__$1;
(statearr_33132_34498[(2)] = null);

(statearr_33132_34498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (4))){
var inst_33090 = (state_33122[(9)]);
var inst_33090__$1 = (state_33122[(2)]);
var inst_33091 = (inst_33090__$1 == null);
var inst_33092 = cljs.core.not(inst_33091);
var state_33122__$1 = (function (){var statearr_33133 = state_33122;
(statearr_33133[(9)] = inst_33090__$1);

return statearr_33133;
})();
if(inst_33092){
var statearr_33134_34499 = state_33122__$1;
(statearr_33134_34499[(1)] = (5));

} else {
var statearr_33135_34500 = state_33122__$1;
(statearr_33135_34500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (15))){
var inst_33112 = (state_33122[(2)]);
var state_33122__$1 = state_33122;
var statearr_33136_34501 = state_33122__$1;
(statearr_33136_34501[(2)] = inst_33112);

(statearr_33136_34501[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (13))){
var state_33122__$1 = state_33122;
var statearr_33137_34502 = state_33122__$1;
(statearr_33137_34502[(2)] = null);

(statearr_33137_34502[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (6))){
var inst_33087 = (state_33122[(8)]);
var inst_33108 = (inst_33087 > (0));
var state_33122__$1 = state_33122;
if(cljs.core.truth_(inst_33108)){
var statearr_33138_34503 = state_33122__$1;
(statearr_33138_34503[(1)] = (12));

} else {
var statearr_33139_34504 = state_33122__$1;
(statearr_33139_34504[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (3))){
var inst_33120 = (state_33122[(2)]);
var state_33122__$1 = state_33122;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33122__$1,inst_33120);
} else {
if((state_val_33123 === (12))){
var inst_33086 = (state_33122[(7)]);
var inst_33110 = cljs.core.vec(inst_33086);
var state_33122__$1 = state_33122;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33122__$1,(15),out,inst_33110);
} else {
if((state_val_33123 === (2))){
var state_33122__$1 = state_33122;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33122__$1,(4),ch);
} else {
if((state_val_33123 === (11))){
var inst_33102 = (state_33122[(2)]);
var inst_33103 = (new Array(n));
var inst_33086 = inst_33103;
var inst_33087 = (0);
var state_33122__$1 = (function (){var statearr_33140 = state_33122;
(statearr_33140[(7)] = inst_33086);

(statearr_33140[(8)] = inst_33087);

(statearr_33140[(10)] = inst_33102);

return statearr_33140;
})();
var statearr_33141_34505 = state_33122__$1;
(statearr_33141_34505[(2)] = null);

(statearr_33141_34505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (9))){
var inst_33086 = (state_33122[(7)]);
var inst_33100 = cljs.core.vec(inst_33086);
var state_33122__$1 = state_33122;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33122__$1,(11),out,inst_33100);
} else {
if((state_val_33123 === (5))){
var inst_33095 = (state_33122[(11)]);
var inst_33090 = (state_33122[(9)]);
var inst_33086 = (state_33122[(7)]);
var inst_33087 = (state_33122[(8)]);
var inst_33094 = (inst_33086[inst_33087] = inst_33090);
var inst_33095__$1 = (inst_33087 + (1));
var inst_33096 = (inst_33095__$1 < n);
var state_33122__$1 = (function (){var statearr_33143 = state_33122;
(statearr_33143[(11)] = inst_33095__$1);

(statearr_33143[(12)] = inst_33094);

return statearr_33143;
})();
if(cljs.core.truth_(inst_33096)){
var statearr_33145_34506 = state_33122__$1;
(statearr_33145_34506[(1)] = (8));

} else {
var statearr_33146_34508 = state_33122__$1;
(statearr_33146_34508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (14))){
var inst_33115 = (state_33122[(2)]);
var inst_33116 = cljs.core.async.close_BANG_(out);
var state_33122__$1 = (function (){var statearr_33148 = state_33122;
(statearr_33148[(13)] = inst_33115);

return statearr_33148;
})();
var statearr_33149_34509 = state_33122__$1;
(statearr_33149_34509[(2)] = inst_33116);

(statearr_33149_34509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (10))){
var inst_33106 = (state_33122[(2)]);
var state_33122__$1 = state_33122;
var statearr_33150_34510 = state_33122__$1;
(statearr_33150_34510[(2)] = inst_33106);

(statearr_33150_34510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33123 === (8))){
var inst_33095 = (state_33122[(11)]);
var inst_33086 = (state_33122[(7)]);
var tmp33147 = inst_33086;
var inst_33086__$1 = tmp33147;
var inst_33087 = inst_33095;
var state_33122__$1 = (function (){var statearr_33151 = state_33122;
(statearr_33151[(7)] = inst_33086__$1);

(statearr_33151[(8)] = inst_33087);

return statearr_33151;
})();
var statearr_33152_34511 = state_33122__$1;
(statearr_33152_34511[(2)] = null);

(statearr_33152_34511[(1)] = (2));


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
var cljs$core$async$state_machine__30715__auto__ = null;
var cljs$core$async$state_machine__30715__auto____0 = (function (){
var statearr_33153 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33153[(0)] = cljs$core$async$state_machine__30715__auto__);

(statearr_33153[(1)] = (1));

return statearr_33153;
});
var cljs$core$async$state_machine__30715__auto____1 = (function (state_33122){
while(true){
var ret_value__30716__auto__ = (function (){try{while(true){
var result__30717__auto__ = switch__30714__auto__(state_33122);
if(cljs.core.keyword_identical_QMARK_(result__30717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30717__auto__;
}
break;
}
}catch (e33154){var ex__30718__auto__ = e33154;
var statearr_33155_34512 = state_33122;
(statearr_33155_34512[(2)] = ex__30718__auto__);


if(cljs.core.seq((state_33122[(4)]))){
var statearr_33156_34513 = state_33122;
(statearr_33156_34513[(1)] = cljs.core.first((state_33122[(4)])));

} else {
throw ex__30718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34514 = state_33122;
state_33122 = G__34514;
continue;
} else {
return ret_value__30716__auto__;
}
break;
}
});
cljs$core$async$state_machine__30715__auto__ = function(state_33122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30715__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30715__auto____1.call(this,state_33122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30715__auto____0;
cljs$core$async$state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30715__auto____1;
return cljs$core$async$state_machine__30715__auto__;
})()
})();
var state__30946__auto__ = (function (){var statearr_33160 = f__30945__auto__();
(statearr_33160[(6)] = c__30944__auto___34496);

return statearr_33160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30946__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33163 = arguments.length;
switch (G__33163) {
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
var c__30944__auto___34516 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30945__auto__ = (function (){var switch__30714__auto__ = (function (state_33206){
var state_val_33207 = (state_33206[(1)]);
if((state_val_33207 === (7))){
var inst_33202 = (state_33206[(2)]);
var state_33206__$1 = state_33206;
var statearr_33209_34517 = state_33206__$1;
(statearr_33209_34517[(2)] = inst_33202);

(statearr_33209_34517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (1))){
var inst_33165 = [];
var inst_33166 = inst_33165;
var inst_33167 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33206__$1 = (function (){var statearr_33210 = state_33206;
(statearr_33210[(7)] = inst_33167);

(statearr_33210[(8)] = inst_33166);

return statearr_33210;
})();
var statearr_33211_34518 = state_33206__$1;
(statearr_33211_34518[(2)] = null);

(statearr_33211_34518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (4))){
var inst_33170 = (state_33206[(9)]);
var inst_33170__$1 = (state_33206[(2)]);
var inst_33171 = (inst_33170__$1 == null);
var inst_33172 = cljs.core.not(inst_33171);
var state_33206__$1 = (function (){var statearr_33212 = state_33206;
(statearr_33212[(9)] = inst_33170__$1);

return statearr_33212;
})();
if(inst_33172){
var statearr_33213_34519 = state_33206__$1;
(statearr_33213_34519[(1)] = (5));

} else {
var statearr_33214_34520 = state_33206__$1;
(statearr_33214_34520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (15))){
var inst_33196 = (state_33206[(2)]);
var state_33206__$1 = state_33206;
var statearr_33216_34521 = state_33206__$1;
(statearr_33216_34521[(2)] = inst_33196);

(statearr_33216_34521[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (13))){
var state_33206__$1 = state_33206;
var statearr_33217_34522 = state_33206__$1;
(statearr_33217_34522[(2)] = null);

(statearr_33217_34522[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (6))){
var inst_33166 = (state_33206[(8)]);
var inst_33191 = inst_33166.length;
var inst_33192 = (inst_33191 > (0));
var state_33206__$1 = state_33206;
if(cljs.core.truth_(inst_33192)){
var statearr_33218_34523 = state_33206__$1;
(statearr_33218_34523[(1)] = (12));

} else {
var statearr_33219_34524 = state_33206__$1;
(statearr_33219_34524[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (3))){
var inst_33204 = (state_33206[(2)]);
var state_33206__$1 = state_33206;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33206__$1,inst_33204);
} else {
if((state_val_33207 === (12))){
var inst_33166 = (state_33206[(8)]);
var inst_33194 = cljs.core.vec(inst_33166);
var state_33206__$1 = state_33206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33206__$1,(15),out,inst_33194);
} else {
if((state_val_33207 === (2))){
var state_33206__$1 = state_33206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33206__$1,(4),ch);
} else {
if((state_val_33207 === (11))){
var inst_33170 = (state_33206[(9)]);
var inst_33174 = (state_33206[(10)]);
var inst_33184 = (state_33206[(2)]);
var inst_33185 = [];
var inst_33186 = inst_33185.push(inst_33170);
var inst_33166 = inst_33185;
var inst_33167 = inst_33174;
var state_33206__$1 = (function (){var statearr_33221 = state_33206;
(statearr_33221[(7)] = inst_33167);

(statearr_33221[(11)] = inst_33186);

(statearr_33221[(12)] = inst_33184);

(statearr_33221[(8)] = inst_33166);

return statearr_33221;
})();
var statearr_33222_34525 = state_33206__$1;
(statearr_33222_34525[(2)] = null);

(statearr_33222_34525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (9))){
var inst_33166 = (state_33206[(8)]);
var inst_33182 = cljs.core.vec(inst_33166);
var state_33206__$1 = state_33206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33206__$1,(11),out,inst_33182);
} else {
if((state_val_33207 === (5))){
var inst_33167 = (state_33206[(7)]);
var inst_33170 = (state_33206[(9)]);
var inst_33174 = (state_33206[(10)]);
var inst_33174__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33170) : f.call(null,inst_33170));
var inst_33175 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33174__$1,inst_33167);
var inst_33176 = cljs.core.keyword_identical_QMARK_(inst_33167,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33177 = ((inst_33175) || (inst_33176));
var state_33206__$1 = (function (){var statearr_33223 = state_33206;
(statearr_33223[(10)] = inst_33174__$1);

return statearr_33223;
})();
if(cljs.core.truth_(inst_33177)){
var statearr_33224_34526 = state_33206__$1;
(statearr_33224_34526[(1)] = (8));

} else {
var statearr_33225_34527 = state_33206__$1;
(statearr_33225_34527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (14))){
var inst_33199 = (state_33206[(2)]);
var inst_33200 = cljs.core.async.close_BANG_(out);
var state_33206__$1 = (function (){var statearr_33228 = state_33206;
(statearr_33228[(13)] = inst_33199);

return statearr_33228;
})();
var statearr_33229_34528 = state_33206__$1;
(statearr_33229_34528[(2)] = inst_33200);

(statearr_33229_34528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (10))){
var inst_33189 = (state_33206[(2)]);
var state_33206__$1 = state_33206;
var statearr_33230_34529 = state_33206__$1;
(statearr_33230_34529[(2)] = inst_33189);

(statearr_33230_34529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (8))){
var inst_33170 = (state_33206[(9)]);
var inst_33174 = (state_33206[(10)]);
var inst_33166 = (state_33206[(8)]);
var inst_33179 = inst_33166.push(inst_33170);
var tmp33227 = inst_33166;
var inst_33166__$1 = tmp33227;
var inst_33167 = inst_33174;
var state_33206__$1 = (function (){var statearr_33233 = state_33206;
(statearr_33233[(14)] = inst_33179);

(statearr_33233[(7)] = inst_33167);

(statearr_33233[(8)] = inst_33166__$1);

return statearr_33233;
})();
var statearr_33234_34530 = state_33206__$1;
(statearr_33234_34530[(2)] = null);

(statearr_33234_34530[(1)] = (2));


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
var cljs$core$async$state_machine__30715__auto__ = null;
var cljs$core$async$state_machine__30715__auto____0 = (function (){
var statearr_33235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33235[(0)] = cljs$core$async$state_machine__30715__auto__);

(statearr_33235[(1)] = (1));

return statearr_33235;
});
var cljs$core$async$state_machine__30715__auto____1 = (function (state_33206){
while(true){
var ret_value__30716__auto__ = (function (){try{while(true){
var result__30717__auto__ = switch__30714__auto__(state_33206);
if(cljs.core.keyword_identical_QMARK_(result__30717__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30717__auto__;
}
break;
}
}catch (e33236){var ex__30718__auto__ = e33236;
var statearr_33237_34531 = state_33206;
(statearr_33237_34531[(2)] = ex__30718__auto__);


if(cljs.core.seq((state_33206[(4)]))){
var statearr_33238_34532 = state_33206;
(statearr_33238_34532[(1)] = cljs.core.first((state_33206[(4)])));

} else {
throw ex__30718__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30716__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34533 = state_33206;
state_33206 = G__34533;
continue;
} else {
return ret_value__30716__auto__;
}
break;
}
});
cljs$core$async$state_machine__30715__auto__ = function(state_33206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30715__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30715__auto____1.call(this,state_33206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30715__auto____0;
cljs$core$async$state_machine__30715__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30715__auto____1;
return cljs$core$async$state_machine__30715__auto__;
})()
})();
var state__30946__auto__ = (function (){var statearr_33239 = f__30945__auto__();
(statearr_33239[(6)] = c__30944__auto___34516);

return statearr_33239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30946__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
