goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31060 = arguments.length;
switch (G__31060) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31061 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31061 = (function (f,blockable,meta31062){
this.f = f;
this.blockable = blockable;
this.meta31062 = meta31062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31063,meta31062__$1){
var self__ = this;
var _31063__$1 = this;
return (new cljs.core.async.t_cljs$core$async31061(self__.f,self__.blockable,meta31062__$1));
}));

(cljs.core.async.t_cljs$core$async31061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31063){
var self__ = this;
var _31063__$1 = this;
return self__.meta31062;
}));

(cljs.core.async.t_cljs$core$async31061.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31061.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31061.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31061.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31061.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31062","meta31062",-792931562,null)], null);
}));

(cljs.core.async.t_cljs$core$async31061.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31061");

(cljs.core.async.t_cljs$core$async31061.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31061");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31061.
 */
cljs.core.async.__GT_t_cljs$core$async31061 = (function cljs$core$async$__GT_t_cljs$core$async31061(f__$1,blockable__$1,meta31062){
return (new cljs.core.async.t_cljs$core$async31061(f__$1,blockable__$1,meta31062));
});

}

return (new cljs.core.async.t_cljs$core$async31061(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31066 = arguments.length;
switch (G__31066) {
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
var G__31080 = arguments.length;
switch (G__31080) {
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
var G__31088 = arguments.length;
switch (G__31088) {
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
var G__31104 = arguments.length;
switch (G__31104) {
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
var n__4613__auto___33290 = n;
var x_33291 = (0);
while(true){
if((x_33291 < n__4613__auto___33290)){
(a[x_33291] = x_33291);

var G__33297 = (x_33291 + (1));
x_33291 = G__33297;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31119 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31119 = (function (flag,meta31120){
this.flag = flag;
this.meta31120 = meta31120;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31121,meta31120__$1){
var self__ = this;
var _31121__$1 = this;
return (new cljs.core.async.t_cljs$core$async31119(self__.flag,meta31120__$1));
}));

(cljs.core.async.t_cljs$core$async31119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31121){
var self__ = this;
var _31121__$1 = this;
return self__.meta31120;
}));

(cljs.core.async.t_cljs$core$async31119.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31119.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31119.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31119.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31119.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31120","meta31120",-1961390392,null)], null);
}));

(cljs.core.async.t_cljs$core$async31119.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31119.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31119");

(cljs.core.async.t_cljs$core$async31119.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31119");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31119.
 */
cljs.core.async.__GT_t_cljs$core$async31119 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31119(flag__$1,meta31120){
return (new cljs.core.async.t_cljs$core$async31119(flag__$1,meta31120));
});

}

return (new cljs.core.async.t_cljs$core$async31119(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31122 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31122 = (function (flag,cb,meta31123){
this.flag = flag;
this.cb = cb;
this.meta31123 = meta31123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31124,meta31123__$1){
var self__ = this;
var _31124__$1 = this;
return (new cljs.core.async.t_cljs$core$async31122(self__.flag,self__.cb,meta31123__$1));
}));

(cljs.core.async.t_cljs$core$async31122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31124){
var self__ = this;
var _31124__$1 = this;
return self__.meta31123;
}));

(cljs.core.async.t_cljs$core$async31122.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31122.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31122.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31122.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31122.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31123","meta31123",-111530584,null)], null);
}));

(cljs.core.async.t_cljs$core$async31122.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31122.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31122");

(cljs.core.async.t_cljs$core$async31122.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31122");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31122.
 */
cljs.core.async.__GT_t_cljs$core$async31122 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31122(flag__$1,cb__$1,meta31123){
return (new cljs.core.async.t_cljs$core$async31122(flag__$1,cb__$1,meta31123));
});

}

return (new cljs.core.async.t_cljs$core$async31122(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31129_SHARP_){
var G__31136 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31129_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31136) : fret.call(null,G__31136));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31130_SHARP_){
var G__31138 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31130_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31138) : fret.call(null,G__31138));
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
var G__33324 = (i + (1));
i = G__33324;
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
var len__4736__auto___33328 = arguments.length;
var i__4737__auto___33329 = (0);
while(true){
if((i__4737__auto___33329 < len__4736__auto___33328)){
args__4742__auto__.push((arguments[i__4737__auto___33329]));

var G__33330 = (i__4737__auto___33329 + (1));
i__4737__auto___33329 = G__33330;
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
var G__31185 = arguments.length;
switch (G__31185) {
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
var c__30993__auto___33349 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30994__auto__ = (function (){var switch__30809__auto__ = (function (state_31215){
var state_val_31216 = (state_31215[(1)]);
if((state_val_31216 === (7))){
var inst_31207 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31217_33351 = state_31215__$1;
(statearr_31217_33351[(2)] = inst_31207);

(statearr_31217_33351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (1))){
var state_31215__$1 = state_31215;
var statearr_31218_33352 = state_31215__$1;
(statearr_31218_33352[(2)] = null);

(statearr_31218_33352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (4))){
var inst_31190 = (state_31215[(7)]);
var inst_31190__$1 = (state_31215[(2)]);
var inst_31191 = (inst_31190__$1 == null);
var state_31215__$1 = (function (){var statearr_31219 = state_31215;
(statearr_31219[(7)] = inst_31190__$1);

return statearr_31219;
})();
if(cljs.core.truth_(inst_31191)){
var statearr_31220_33366 = state_31215__$1;
(statearr_31220_33366[(1)] = (5));

} else {
var statearr_31221_33367 = state_31215__$1;
(statearr_31221_33367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (13))){
var state_31215__$1 = state_31215;
var statearr_31222_33368 = state_31215__$1;
(statearr_31222_33368[(2)] = null);

(statearr_31222_33368[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (6))){
var inst_31190 = (state_31215[(7)]);
var state_31215__$1 = state_31215;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31215__$1,(11),to,inst_31190);
} else {
if((state_val_31216 === (3))){
var inst_31211 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31215__$1,inst_31211);
} else {
if((state_val_31216 === (12))){
var state_31215__$1 = state_31215;
var statearr_31223_33369 = state_31215__$1;
(statearr_31223_33369[(2)] = null);

(statearr_31223_33369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (2))){
var state_31215__$1 = state_31215;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31215__$1,(4),from);
} else {
if((state_val_31216 === (11))){
var inst_31200 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
if(cljs.core.truth_(inst_31200)){
var statearr_31224_33370 = state_31215__$1;
(statearr_31224_33370[(1)] = (12));

} else {
var statearr_31225_33371 = state_31215__$1;
(statearr_31225_33371[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (9))){
var state_31215__$1 = state_31215;
var statearr_31226_33372 = state_31215__$1;
(statearr_31226_33372[(2)] = null);

(statearr_31226_33372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (5))){
var state_31215__$1 = state_31215;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31227_33373 = state_31215__$1;
(statearr_31227_33373[(1)] = (8));

} else {
var statearr_31228_33374 = state_31215__$1;
(statearr_31228_33374[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (14))){
var inst_31205 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31229_33375 = state_31215__$1;
(statearr_31229_33375[(2)] = inst_31205);

(statearr_31229_33375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (10))){
var inst_31197 = (state_31215[(2)]);
var state_31215__$1 = state_31215;
var statearr_31233_33376 = state_31215__$1;
(statearr_31233_33376[(2)] = inst_31197);

(statearr_31233_33376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31216 === (8))){
var inst_31194 = cljs.core.async.close_BANG_(to);
var state_31215__$1 = state_31215;
var statearr_31234_33377 = state_31215__$1;
(statearr_31234_33377[(2)] = inst_31194);

(statearr_31234_33377[(1)] = (10));


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
var cljs$core$async$state_machine__30810__auto__ = null;
var cljs$core$async$state_machine__30810__auto____0 = (function (){
var statearr_31235 = [null,null,null,null,null,null,null,null];
(statearr_31235[(0)] = cljs$core$async$state_machine__30810__auto__);

(statearr_31235[(1)] = (1));

return statearr_31235;
});
var cljs$core$async$state_machine__30810__auto____1 = (function (state_31215){
while(true){
var ret_value__30811__auto__ = (function (){try{while(true){
var result__30812__auto__ = switch__30809__auto__(state_31215);
if(cljs.core.keyword_identical_QMARK_(result__30812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30812__auto__;
}
break;
}
}catch (e31236){var ex__30813__auto__ = e31236;
var statearr_31237_33413 = state_31215;
(statearr_31237_33413[(2)] = ex__30813__auto__);


if(cljs.core.seq((state_31215[(4)]))){
var statearr_31238_33414 = state_31215;
(statearr_31238_33414[(1)] = cljs.core.first((state_31215[(4)])));

} else {
throw ex__30813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33415 = state_31215;
state_31215 = G__33415;
continue;
} else {
return ret_value__30811__auto__;
}
break;
}
});
cljs$core$async$state_machine__30810__auto__ = function(state_31215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30810__auto____1.call(this,state_31215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30810__auto____0;
cljs$core$async$state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30810__auto____1;
return cljs$core$async$state_machine__30810__auto__;
})()
})();
var state__30995__auto__ = (function (){var statearr_31239 = f__30994__auto__();
(statearr_31239[(6)] = c__30993__auto___33349);

return statearr_31239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30995__auto__);
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
var process = (function (p__31253){
var vec__31254 = p__31253;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31254,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31254,(1),null);
var job = vec__31254;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30993__auto___33417 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30994__auto__ = (function (){var switch__30809__auto__ = (function (state_31261){
var state_val_31262 = (state_31261[(1)]);
if((state_val_31262 === (1))){
var state_31261__$1 = state_31261;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31261__$1,(2),res,v);
} else {
if((state_val_31262 === (2))){
var inst_31258 = (state_31261[(2)]);
var inst_31259 = cljs.core.async.close_BANG_(res);
var state_31261__$1 = (function (){var statearr_31263 = state_31261;
(statearr_31263[(7)] = inst_31258);

return statearr_31263;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31261__$1,inst_31259);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30810__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30810__auto____0 = (function (){
var statearr_31268 = [null,null,null,null,null,null,null,null];
(statearr_31268[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30810__auto__);

(statearr_31268[(1)] = (1));

return statearr_31268;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30810__auto____1 = (function (state_31261){
while(true){
var ret_value__30811__auto__ = (function (){try{while(true){
var result__30812__auto__ = switch__30809__auto__(state_31261);
if(cljs.core.keyword_identical_QMARK_(result__30812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30812__auto__;
}
break;
}
}catch (e31269){var ex__30813__auto__ = e31269;
var statearr_31270_33419 = state_31261;
(statearr_31270_33419[(2)] = ex__30813__auto__);


if(cljs.core.seq((state_31261[(4)]))){
var statearr_31271_33420 = state_31261;
(statearr_31271_33420[(1)] = cljs.core.first((state_31261[(4)])));

} else {
throw ex__30813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33443 = state_31261;
state_31261 = G__33443;
continue;
} else {
return ret_value__30811__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30810__auto__ = function(state_31261){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30810__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30810__auto____1.call(this,state_31261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30810__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30810__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30810__auto__;
})()
})();
var state__30995__auto__ = (function (){var statearr_31272 = f__30994__auto__();
(statearr_31272[(6)] = c__30993__auto___33417);

return statearr_31272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30995__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31273){
var vec__31274 = p__31273;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31274,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31274,(1),null);
var job = vec__31274;
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
var n__4613__auto___33444 = n;
var __33445 = (0);
while(true){
if((__33445 < n__4613__auto___33444)){
var G__31277_33446 = type;
var G__31277_33447__$1 = (((G__31277_33446 instanceof cljs.core.Keyword))?G__31277_33446.fqn:null);
switch (G__31277_33447__$1) {
case "compute":
var c__30993__auto___33449 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33445,c__30993__auto___33449,G__31277_33446,G__31277_33447__$1,n__4613__auto___33444,jobs,results,process,async){
return (function (){
var f__30994__auto__ = (function (){var switch__30809__auto__ = ((function (__33445,c__30993__auto___33449,G__31277_33446,G__31277_33447__$1,n__4613__auto___33444,jobs,results,process,async){
return (function (state_31290){
var state_val_31291 = (state_31290[(1)]);
if((state_val_31291 === (1))){
var state_31290__$1 = state_31290;
var statearr_31292_33450 = state_31290__$1;
(statearr_31292_33450[(2)] = null);

(statearr_31292_33450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31291 === (2))){
var state_31290__$1 = state_31290;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31290__$1,(4),jobs);
} else {
if((state_val_31291 === (3))){
var inst_31288 = (state_31290[(2)]);
var state_31290__$1 = state_31290;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31290__$1,inst_31288);
} else {
if((state_val_31291 === (4))){
var inst_31280 = (state_31290[(2)]);
var inst_31281 = process(inst_31280);
var state_31290__$1 = state_31290;
if(cljs.core.truth_(inst_31281)){
var statearr_31293_33453 = state_31290__$1;
(statearr_31293_33453[(1)] = (5));

} else {
var statearr_31294_33454 = state_31290__$1;
(statearr_31294_33454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31291 === (5))){
var state_31290__$1 = state_31290;
var statearr_31295_33455 = state_31290__$1;
(statearr_31295_33455[(2)] = null);

(statearr_31295_33455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31291 === (6))){
var state_31290__$1 = state_31290;
var statearr_31300_33456 = state_31290__$1;
(statearr_31300_33456[(2)] = null);

(statearr_31300_33456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31291 === (7))){
var inst_31286 = (state_31290[(2)]);
var state_31290__$1 = state_31290;
var statearr_31302_33457 = state_31290__$1;
(statearr_31302_33457[(2)] = inst_31286);

(statearr_31302_33457[(1)] = (3));


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
});})(__33445,c__30993__auto___33449,G__31277_33446,G__31277_33447__$1,n__4613__auto___33444,jobs,results,process,async))
;
return ((function (__33445,switch__30809__auto__,c__30993__auto___33449,G__31277_33446,G__31277_33447__$1,n__4613__auto___33444,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30810__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30810__auto____0 = (function (){
var statearr_31303 = [null,null,null,null,null,null,null];
(statearr_31303[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30810__auto__);

(statearr_31303[(1)] = (1));

return statearr_31303;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30810__auto____1 = (function (state_31290){
while(true){
var ret_value__30811__auto__ = (function (){try{while(true){
var result__30812__auto__ = switch__30809__auto__(state_31290);
if(cljs.core.keyword_identical_QMARK_(result__30812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30812__auto__;
}
break;
}
}catch (e31304){var ex__30813__auto__ = e31304;
var statearr_31305_33465 = state_31290;
(statearr_31305_33465[(2)] = ex__30813__auto__);


if(cljs.core.seq((state_31290[(4)]))){
var statearr_31306_33466 = state_31290;
(statearr_31306_33466[(1)] = cljs.core.first((state_31290[(4)])));

} else {
throw ex__30813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33467 = state_31290;
state_31290 = G__33467;
continue;
} else {
return ret_value__30811__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30810__auto__ = function(state_31290){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30810__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30810__auto____1.call(this,state_31290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30810__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30810__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30810__auto__;
})()
;})(__33445,switch__30809__auto__,c__30993__auto___33449,G__31277_33446,G__31277_33447__$1,n__4613__auto___33444,jobs,results,process,async))
})();
var state__30995__auto__ = (function (){var statearr_31310 = f__30994__auto__();
(statearr_31310[(6)] = c__30993__auto___33449);

return statearr_31310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30995__auto__);
});})(__33445,c__30993__auto___33449,G__31277_33446,G__31277_33447__$1,n__4613__auto___33444,jobs,results,process,async))
);


break;
case "async":
var c__30993__auto___33468 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33445,c__30993__auto___33468,G__31277_33446,G__31277_33447__$1,n__4613__auto___33444,jobs,results,process,async){
return (function (){
var f__30994__auto__ = (function (){var switch__30809__auto__ = ((function (__33445,c__30993__auto___33468,G__31277_33446,G__31277_33447__$1,n__4613__auto___33444,jobs,results,process,async){
return (function (state_31323){
var state_val_31324 = (state_31323[(1)]);
if((state_val_31324 === (1))){
var state_31323__$1 = state_31323;
var statearr_31325_33469 = state_31323__$1;
(statearr_31325_33469[(2)] = null);

(statearr_31325_33469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31324 === (2))){
var state_31323__$1 = state_31323;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31323__$1,(4),jobs);
} else {
if((state_val_31324 === (3))){
var inst_31321 = (state_31323[(2)]);
var state_31323__$1 = state_31323;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31323__$1,inst_31321);
} else {
if((state_val_31324 === (4))){
var inst_31313 = (state_31323[(2)]);
var inst_31314 = async(inst_31313);
var state_31323__$1 = state_31323;
if(cljs.core.truth_(inst_31314)){
var statearr_31326_33471 = state_31323__$1;
(statearr_31326_33471[(1)] = (5));

} else {
var statearr_31327_33472 = state_31323__$1;
(statearr_31327_33472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31324 === (5))){
var state_31323__$1 = state_31323;
var statearr_31328_33473 = state_31323__$1;
(statearr_31328_33473[(2)] = null);

(statearr_31328_33473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31324 === (6))){
var state_31323__$1 = state_31323;
var statearr_31329_33474 = state_31323__$1;
(statearr_31329_33474[(2)] = null);

(statearr_31329_33474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31324 === (7))){
var inst_31319 = (state_31323[(2)]);
var state_31323__$1 = state_31323;
var statearr_31330_33478 = state_31323__$1;
(statearr_31330_33478[(2)] = inst_31319);

(statearr_31330_33478[(1)] = (3));


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
});})(__33445,c__30993__auto___33468,G__31277_33446,G__31277_33447__$1,n__4613__auto___33444,jobs,results,process,async))
;
return ((function (__33445,switch__30809__auto__,c__30993__auto___33468,G__31277_33446,G__31277_33447__$1,n__4613__auto___33444,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30810__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30810__auto____0 = (function (){
var statearr_31331 = [null,null,null,null,null,null,null];
(statearr_31331[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30810__auto__);

(statearr_31331[(1)] = (1));

return statearr_31331;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30810__auto____1 = (function (state_31323){
while(true){
var ret_value__30811__auto__ = (function (){try{while(true){
var result__30812__auto__ = switch__30809__auto__(state_31323);
if(cljs.core.keyword_identical_QMARK_(result__30812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30812__auto__;
}
break;
}
}catch (e31332){var ex__30813__auto__ = e31332;
var statearr_31333_33479 = state_31323;
(statearr_31333_33479[(2)] = ex__30813__auto__);


if(cljs.core.seq((state_31323[(4)]))){
var statearr_31334_33480 = state_31323;
(statearr_31334_33480[(1)] = cljs.core.first((state_31323[(4)])));

} else {
throw ex__30813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33481 = state_31323;
state_31323 = G__33481;
continue;
} else {
return ret_value__30811__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30810__auto__ = function(state_31323){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30810__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30810__auto____1.call(this,state_31323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30810__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30810__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30810__auto__;
})()
;})(__33445,switch__30809__auto__,c__30993__auto___33468,G__31277_33446,G__31277_33447__$1,n__4613__auto___33444,jobs,results,process,async))
})();
var state__30995__auto__ = (function (){var statearr_31335 = f__30994__auto__();
(statearr_31335[(6)] = c__30993__auto___33468);

return statearr_31335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30995__auto__);
});})(__33445,c__30993__auto___33468,G__31277_33446,G__31277_33447__$1,n__4613__auto___33444,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31277_33447__$1)].join('')));

}

var G__33482 = (__33445 + (1));
__33445 = G__33482;
continue;
} else {
}
break;
}

var c__30993__auto___33483 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30994__auto__ = (function (){var switch__30809__auto__ = (function (state_31357){
var state_val_31358 = (state_31357[(1)]);
if((state_val_31358 === (7))){
var inst_31353 = (state_31357[(2)]);
var state_31357__$1 = state_31357;
var statearr_31359_33484 = state_31357__$1;
(statearr_31359_33484[(2)] = inst_31353);

(statearr_31359_33484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (1))){
var state_31357__$1 = state_31357;
var statearr_31360_33485 = state_31357__$1;
(statearr_31360_33485[(2)] = null);

(statearr_31360_33485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (4))){
var inst_31338 = (state_31357[(7)]);
var inst_31338__$1 = (state_31357[(2)]);
var inst_31339 = (inst_31338__$1 == null);
var state_31357__$1 = (function (){var statearr_31361 = state_31357;
(statearr_31361[(7)] = inst_31338__$1);

return statearr_31361;
})();
if(cljs.core.truth_(inst_31339)){
var statearr_31362_33486 = state_31357__$1;
(statearr_31362_33486[(1)] = (5));

} else {
var statearr_31363_33487 = state_31357__$1;
(statearr_31363_33487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (6))){
var inst_31338 = (state_31357[(7)]);
var inst_31343 = (state_31357[(8)]);
var inst_31343__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31344 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31345 = [inst_31338,inst_31343__$1];
var inst_31346 = (new cljs.core.PersistentVector(null,2,(5),inst_31344,inst_31345,null));
var state_31357__$1 = (function (){var statearr_31364 = state_31357;
(statearr_31364[(8)] = inst_31343__$1);

return statearr_31364;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31357__$1,(8),jobs,inst_31346);
} else {
if((state_val_31358 === (3))){
var inst_31355 = (state_31357[(2)]);
var state_31357__$1 = state_31357;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31357__$1,inst_31355);
} else {
if((state_val_31358 === (2))){
var state_31357__$1 = state_31357;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31357__$1,(4),from);
} else {
if((state_val_31358 === (9))){
var inst_31350 = (state_31357[(2)]);
var state_31357__$1 = (function (){var statearr_31365 = state_31357;
(statearr_31365[(9)] = inst_31350);

return statearr_31365;
})();
var statearr_31366_33495 = state_31357__$1;
(statearr_31366_33495[(2)] = null);

(statearr_31366_33495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (5))){
var inst_31341 = cljs.core.async.close_BANG_(jobs);
var state_31357__$1 = state_31357;
var statearr_31368_33496 = state_31357__$1;
(statearr_31368_33496[(2)] = inst_31341);

(statearr_31368_33496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31358 === (8))){
var inst_31343 = (state_31357[(8)]);
var inst_31348 = (state_31357[(2)]);
var state_31357__$1 = (function (){var statearr_31369 = state_31357;
(statearr_31369[(10)] = inst_31348);

return statearr_31369;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31357__$1,(9),results,inst_31343);
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
var cljs$core$async$pipeline_STAR__$_state_machine__30810__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30810__auto____0 = (function (){
var statearr_31370 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31370[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30810__auto__);

(statearr_31370[(1)] = (1));

return statearr_31370;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30810__auto____1 = (function (state_31357){
while(true){
var ret_value__30811__auto__ = (function (){try{while(true){
var result__30812__auto__ = switch__30809__auto__(state_31357);
if(cljs.core.keyword_identical_QMARK_(result__30812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30812__auto__;
}
break;
}
}catch (e31371){var ex__30813__auto__ = e31371;
var statearr_31372_33497 = state_31357;
(statearr_31372_33497[(2)] = ex__30813__auto__);


if(cljs.core.seq((state_31357[(4)]))){
var statearr_31373_33498 = state_31357;
(statearr_31373_33498[(1)] = cljs.core.first((state_31357[(4)])));

} else {
throw ex__30813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33499 = state_31357;
state_31357 = G__33499;
continue;
} else {
return ret_value__30811__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30810__auto__ = function(state_31357){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30810__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30810__auto____1.call(this,state_31357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30810__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30810__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30810__auto__;
})()
})();
var state__30995__auto__ = (function (){var statearr_31374 = f__30994__auto__();
(statearr_31374[(6)] = c__30993__auto___33483);

return statearr_31374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30995__auto__);
}));


var c__30993__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30994__auto__ = (function (){var switch__30809__auto__ = (function (state_31416){
var state_val_31417 = (state_31416[(1)]);
if((state_val_31417 === (7))){
var inst_31412 = (state_31416[(2)]);
var state_31416__$1 = state_31416;
var statearr_31423_33507 = state_31416__$1;
(statearr_31423_33507[(2)] = inst_31412);

(statearr_31423_33507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31417 === (20))){
var state_31416__$1 = state_31416;
var statearr_31424_33508 = state_31416__$1;
(statearr_31424_33508[(2)] = null);

(statearr_31424_33508[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31417 === (1))){
var state_31416__$1 = state_31416;
var statearr_31425_33509 = state_31416__$1;
(statearr_31425_33509[(2)] = null);

(statearr_31425_33509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31417 === (4))){
var inst_31377 = (state_31416[(7)]);
var inst_31377__$1 = (state_31416[(2)]);
var inst_31378 = (inst_31377__$1 == null);
var state_31416__$1 = (function (){var statearr_31426 = state_31416;
(statearr_31426[(7)] = inst_31377__$1);

return statearr_31426;
})();
if(cljs.core.truth_(inst_31378)){
var statearr_31427_33510 = state_31416__$1;
(statearr_31427_33510[(1)] = (5));

} else {
var statearr_31428_33511 = state_31416__$1;
(statearr_31428_33511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31417 === (15))){
var inst_31390 = (state_31416[(8)]);
var state_31416__$1 = state_31416;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31416__$1,(18),to,inst_31390);
} else {
if((state_val_31417 === (21))){
var inst_31407 = (state_31416[(2)]);
var state_31416__$1 = state_31416;
var statearr_31433_33512 = state_31416__$1;
(statearr_31433_33512[(2)] = inst_31407);

(statearr_31433_33512[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31417 === (13))){
var inst_31409 = (state_31416[(2)]);
var state_31416__$1 = (function (){var statearr_31434 = state_31416;
(statearr_31434[(9)] = inst_31409);

return statearr_31434;
})();
var statearr_31435_33513 = state_31416__$1;
(statearr_31435_33513[(2)] = null);

(statearr_31435_33513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31417 === (6))){
var inst_31377 = (state_31416[(7)]);
var state_31416__$1 = state_31416;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31416__$1,(11),inst_31377);
} else {
if((state_val_31417 === (17))){
var inst_31402 = (state_31416[(2)]);
var state_31416__$1 = state_31416;
if(cljs.core.truth_(inst_31402)){
var statearr_31436_33514 = state_31416__$1;
(statearr_31436_33514[(1)] = (19));

} else {
var statearr_31437_33515 = state_31416__$1;
(statearr_31437_33515[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31417 === (3))){
var inst_31414 = (state_31416[(2)]);
var state_31416__$1 = state_31416;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31416__$1,inst_31414);
} else {
if((state_val_31417 === (12))){
var inst_31387 = (state_31416[(10)]);
var state_31416__$1 = state_31416;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31416__$1,(14),inst_31387);
} else {
if((state_val_31417 === (2))){
var state_31416__$1 = state_31416;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31416__$1,(4),results);
} else {
if((state_val_31417 === (19))){
var state_31416__$1 = state_31416;
var statearr_31438_33521 = state_31416__$1;
(statearr_31438_33521[(2)] = null);

(statearr_31438_33521[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31417 === (11))){
var inst_31387 = (state_31416[(2)]);
var state_31416__$1 = (function (){var statearr_31439 = state_31416;
(statearr_31439[(10)] = inst_31387);

return statearr_31439;
})();
var statearr_31440_33523 = state_31416__$1;
(statearr_31440_33523[(2)] = null);

(statearr_31440_33523[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31417 === (9))){
var state_31416__$1 = state_31416;
var statearr_31441_33524 = state_31416__$1;
(statearr_31441_33524[(2)] = null);

(statearr_31441_33524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31417 === (5))){
var state_31416__$1 = state_31416;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31442_33525 = state_31416__$1;
(statearr_31442_33525[(1)] = (8));

} else {
var statearr_31443_33526 = state_31416__$1;
(statearr_31443_33526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31417 === (14))){
var inst_31390 = (state_31416[(8)]);
var inst_31390__$1 = (state_31416[(2)]);
var inst_31395 = (inst_31390__$1 == null);
var inst_31396 = cljs.core.not(inst_31395);
var state_31416__$1 = (function (){var statearr_31444 = state_31416;
(statearr_31444[(8)] = inst_31390__$1);

return statearr_31444;
})();
if(inst_31396){
var statearr_31445_33527 = state_31416__$1;
(statearr_31445_33527[(1)] = (15));

} else {
var statearr_31446_33528 = state_31416__$1;
(statearr_31446_33528[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31417 === (16))){
var state_31416__$1 = state_31416;
var statearr_31451_33529 = state_31416__$1;
(statearr_31451_33529[(2)] = false);

(statearr_31451_33529[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31417 === (10))){
var inst_31384 = (state_31416[(2)]);
var state_31416__$1 = state_31416;
var statearr_31456_33530 = state_31416__$1;
(statearr_31456_33530[(2)] = inst_31384);

(statearr_31456_33530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31417 === (18))){
var inst_31399 = (state_31416[(2)]);
var state_31416__$1 = state_31416;
var statearr_31457_33531 = state_31416__$1;
(statearr_31457_33531[(2)] = inst_31399);

(statearr_31457_33531[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31417 === (8))){
var inst_31381 = cljs.core.async.close_BANG_(to);
var state_31416__$1 = state_31416;
var statearr_31462_33534 = state_31416__$1;
(statearr_31462_33534[(2)] = inst_31381);

(statearr_31462_33534[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__30810__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30810__auto____0 = (function (){
var statearr_31463 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31463[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30810__auto__);

(statearr_31463[(1)] = (1));

return statearr_31463;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30810__auto____1 = (function (state_31416){
while(true){
var ret_value__30811__auto__ = (function (){try{while(true){
var result__30812__auto__ = switch__30809__auto__(state_31416);
if(cljs.core.keyword_identical_QMARK_(result__30812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30812__auto__;
}
break;
}
}catch (e31464){var ex__30813__auto__ = e31464;
var statearr_31465_33535 = state_31416;
(statearr_31465_33535[(2)] = ex__30813__auto__);


if(cljs.core.seq((state_31416[(4)]))){
var statearr_31468_33536 = state_31416;
(statearr_31468_33536[(1)] = cljs.core.first((state_31416[(4)])));

} else {
throw ex__30813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33537 = state_31416;
state_31416 = G__33537;
continue;
} else {
return ret_value__30811__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30810__auto__ = function(state_31416){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30810__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30810__auto____1.call(this,state_31416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30810__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30810__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30810__auto__;
})()
})();
var state__30995__auto__ = (function (){var statearr_31469 = f__30994__auto__();
(statearr_31469[(6)] = c__30993__auto__);

return statearr_31469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30995__auto__);
}));

return c__30993__auto__;
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
var G__31471 = arguments.length;
switch (G__31471) {
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
var G__31473 = arguments.length;
switch (G__31473) {
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
var G__31475 = arguments.length;
switch (G__31475) {
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
var c__30993__auto___33560 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30994__auto__ = (function (){var switch__30809__auto__ = (function (state_31511){
var state_val_31513 = (state_31511[(1)]);
if((state_val_31513 === (7))){
var inst_31507 = (state_31511[(2)]);
var state_31511__$1 = state_31511;
var statearr_31516_33561 = state_31511__$1;
(statearr_31516_33561[(2)] = inst_31507);

(statearr_31516_33561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (1))){
var state_31511__$1 = state_31511;
var statearr_31517_33564 = state_31511__$1;
(statearr_31517_33564[(2)] = null);

(statearr_31517_33564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (4))){
var inst_31488 = (state_31511[(7)]);
var inst_31488__$1 = (state_31511[(2)]);
var inst_31489 = (inst_31488__$1 == null);
var state_31511__$1 = (function (){var statearr_31528 = state_31511;
(statearr_31528[(7)] = inst_31488__$1);

return statearr_31528;
})();
if(cljs.core.truth_(inst_31489)){
var statearr_31530_33565 = state_31511__$1;
(statearr_31530_33565[(1)] = (5));

} else {
var statearr_31531_33566 = state_31511__$1;
(statearr_31531_33566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (13))){
var state_31511__$1 = state_31511;
var statearr_31532_33567 = state_31511__$1;
(statearr_31532_33567[(2)] = null);

(statearr_31532_33567[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (6))){
var inst_31488 = (state_31511[(7)]);
var inst_31494 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31488) : p.call(null,inst_31488));
var state_31511__$1 = state_31511;
if(cljs.core.truth_(inst_31494)){
var statearr_31535_33581 = state_31511__$1;
(statearr_31535_33581[(1)] = (9));

} else {
var statearr_31536_33582 = state_31511__$1;
(statearr_31536_33582[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (3))){
var inst_31509 = (state_31511[(2)]);
var state_31511__$1 = state_31511;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31511__$1,inst_31509);
} else {
if((state_val_31513 === (12))){
var state_31511__$1 = state_31511;
var statearr_31540_33583 = state_31511__$1;
(statearr_31540_33583[(2)] = null);

(statearr_31540_33583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (2))){
var state_31511__$1 = state_31511;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31511__$1,(4),ch);
} else {
if((state_val_31513 === (11))){
var inst_31488 = (state_31511[(7)]);
var inst_31498 = (state_31511[(2)]);
var state_31511__$1 = state_31511;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31511__$1,(8),inst_31498,inst_31488);
} else {
if((state_val_31513 === (9))){
var state_31511__$1 = state_31511;
var statearr_31542_33584 = state_31511__$1;
(statearr_31542_33584[(2)] = tc);

(statearr_31542_33584[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (5))){
var inst_31491 = cljs.core.async.close_BANG_(tc);
var inst_31492 = cljs.core.async.close_BANG_(fc);
var state_31511__$1 = (function (){var statearr_31545 = state_31511;
(statearr_31545[(8)] = inst_31491);

return statearr_31545;
})();
var statearr_31546_33585 = state_31511__$1;
(statearr_31546_33585[(2)] = inst_31492);

(statearr_31546_33585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (14))){
var inst_31505 = (state_31511[(2)]);
var state_31511__$1 = state_31511;
var statearr_31547_33586 = state_31511__$1;
(statearr_31547_33586[(2)] = inst_31505);

(statearr_31547_33586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (10))){
var state_31511__$1 = state_31511;
var statearr_31549_33587 = state_31511__$1;
(statearr_31549_33587[(2)] = fc);

(statearr_31549_33587[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31513 === (8))){
var inst_31500 = (state_31511[(2)]);
var state_31511__$1 = state_31511;
if(cljs.core.truth_(inst_31500)){
var statearr_31550_33588 = state_31511__$1;
(statearr_31550_33588[(1)] = (12));

} else {
var statearr_31553_33589 = state_31511__$1;
(statearr_31553_33589[(1)] = (13));

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
var cljs$core$async$state_machine__30810__auto__ = null;
var cljs$core$async$state_machine__30810__auto____0 = (function (){
var statearr_31555 = [null,null,null,null,null,null,null,null,null];
(statearr_31555[(0)] = cljs$core$async$state_machine__30810__auto__);

(statearr_31555[(1)] = (1));

return statearr_31555;
});
var cljs$core$async$state_machine__30810__auto____1 = (function (state_31511){
while(true){
var ret_value__30811__auto__ = (function (){try{while(true){
var result__30812__auto__ = switch__30809__auto__(state_31511);
if(cljs.core.keyword_identical_QMARK_(result__30812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30812__auto__;
}
break;
}
}catch (e31558){var ex__30813__auto__ = e31558;
var statearr_31559_33590 = state_31511;
(statearr_31559_33590[(2)] = ex__30813__auto__);


if(cljs.core.seq((state_31511[(4)]))){
var statearr_31560_33591 = state_31511;
(statearr_31560_33591[(1)] = cljs.core.first((state_31511[(4)])));

} else {
throw ex__30813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33595 = state_31511;
state_31511 = G__33595;
continue;
} else {
return ret_value__30811__auto__;
}
break;
}
});
cljs$core$async$state_machine__30810__auto__ = function(state_31511){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30810__auto____1.call(this,state_31511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30810__auto____0;
cljs$core$async$state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30810__auto____1;
return cljs$core$async$state_machine__30810__auto__;
})()
})();
var state__30995__auto__ = (function (){var statearr_31564 = f__30994__auto__();
(statearr_31564[(6)] = c__30993__auto___33560);

return statearr_31564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30995__auto__);
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
var c__30993__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30994__auto__ = (function (){var switch__30809__auto__ = (function (state_31586){
var state_val_31587 = (state_31586[(1)]);
if((state_val_31587 === (7))){
var inst_31582 = (state_31586[(2)]);
var state_31586__$1 = state_31586;
var statearr_31588_33596 = state_31586__$1;
(statearr_31588_33596[(2)] = inst_31582);

(statearr_31588_33596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31587 === (1))){
var inst_31565 = init;
var inst_31566 = inst_31565;
var state_31586__$1 = (function (){var statearr_31589 = state_31586;
(statearr_31589[(7)] = inst_31566);

return statearr_31589;
})();
var statearr_31590_33597 = state_31586__$1;
(statearr_31590_33597[(2)] = null);

(statearr_31590_33597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31587 === (4))){
var inst_31569 = (state_31586[(8)]);
var inst_31569__$1 = (state_31586[(2)]);
var inst_31570 = (inst_31569__$1 == null);
var state_31586__$1 = (function (){var statearr_31591 = state_31586;
(statearr_31591[(8)] = inst_31569__$1);

return statearr_31591;
})();
if(cljs.core.truth_(inst_31570)){
var statearr_31592_33601 = state_31586__$1;
(statearr_31592_33601[(1)] = (5));

} else {
var statearr_31597_33602 = state_31586__$1;
(statearr_31597_33602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31587 === (6))){
var inst_31569 = (state_31586[(8)]);
var inst_31566 = (state_31586[(7)]);
var inst_31573 = (state_31586[(9)]);
var inst_31573__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31566,inst_31569) : f.call(null,inst_31566,inst_31569));
var inst_31574 = cljs.core.reduced_QMARK_(inst_31573__$1);
var state_31586__$1 = (function (){var statearr_31598 = state_31586;
(statearr_31598[(9)] = inst_31573__$1);

return statearr_31598;
})();
if(inst_31574){
var statearr_31599_33603 = state_31586__$1;
(statearr_31599_33603[(1)] = (8));

} else {
var statearr_31600_33604 = state_31586__$1;
(statearr_31600_33604[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31587 === (3))){
var inst_31584 = (state_31586[(2)]);
var state_31586__$1 = state_31586;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31586__$1,inst_31584);
} else {
if((state_val_31587 === (2))){
var state_31586__$1 = state_31586;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31586__$1,(4),ch);
} else {
if((state_val_31587 === (9))){
var inst_31573 = (state_31586[(9)]);
var inst_31566 = inst_31573;
var state_31586__$1 = (function (){var statearr_31601 = state_31586;
(statearr_31601[(7)] = inst_31566);

return statearr_31601;
})();
var statearr_31602_33609 = state_31586__$1;
(statearr_31602_33609[(2)] = null);

(statearr_31602_33609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31587 === (5))){
var inst_31566 = (state_31586[(7)]);
var state_31586__$1 = state_31586;
var statearr_31603_33619 = state_31586__$1;
(statearr_31603_33619[(2)] = inst_31566);

(statearr_31603_33619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31587 === (10))){
var inst_31580 = (state_31586[(2)]);
var state_31586__$1 = state_31586;
var statearr_31604_33620 = state_31586__$1;
(statearr_31604_33620[(2)] = inst_31580);

(statearr_31604_33620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31587 === (8))){
var inst_31573 = (state_31586[(9)]);
var inst_31576 = cljs.core.deref(inst_31573);
var state_31586__$1 = state_31586;
var statearr_31605_33621 = state_31586__$1;
(statearr_31605_33621[(2)] = inst_31576);

(statearr_31605_33621[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__30810__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30810__auto____0 = (function (){
var statearr_31607 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31607[(0)] = cljs$core$async$reduce_$_state_machine__30810__auto__);

(statearr_31607[(1)] = (1));

return statearr_31607;
});
var cljs$core$async$reduce_$_state_machine__30810__auto____1 = (function (state_31586){
while(true){
var ret_value__30811__auto__ = (function (){try{while(true){
var result__30812__auto__ = switch__30809__auto__(state_31586);
if(cljs.core.keyword_identical_QMARK_(result__30812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30812__auto__;
}
break;
}
}catch (e31609){var ex__30813__auto__ = e31609;
var statearr_31610_33622 = state_31586;
(statearr_31610_33622[(2)] = ex__30813__auto__);


if(cljs.core.seq((state_31586[(4)]))){
var statearr_31611_33623 = state_31586;
(statearr_31611_33623[(1)] = cljs.core.first((state_31586[(4)])));

} else {
throw ex__30813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33624 = state_31586;
state_31586 = G__33624;
continue;
} else {
return ret_value__30811__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30810__auto__ = function(state_31586){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30810__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30810__auto____1.call(this,state_31586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30810__auto____0;
cljs$core$async$reduce_$_state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30810__auto____1;
return cljs$core$async$reduce_$_state_machine__30810__auto__;
})()
})();
var state__30995__auto__ = (function (){var statearr_31612 = f__30994__auto__();
(statearr_31612[(6)] = c__30993__auto__);

return statearr_31612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30995__auto__);
}));

return c__30993__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30993__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30994__auto__ = (function (){var switch__30809__auto__ = (function (state_31618){
var state_val_31619 = (state_31618[(1)]);
if((state_val_31619 === (1))){
var inst_31613 = cljs.core.async.reduce(f__$1,init,ch);
var state_31618__$1 = state_31618;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31618__$1,(2),inst_31613);
} else {
if((state_val_31619 === (2))){
var inst_31615 = (state_31618[(2)]);
var inst_31616 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31615) : f__$1.call(null,inst_31615));
var state_31618__$1 = state_31618;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31618__$1,inst_31616);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30810__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30810__auto____0 = (function (){
var statearr_31623 = [null,null,null,null,null,null,null];
(statearr_31623[(0)] = cljs$core$async$transduce_$_state_machine__30810__auto__);

(statearr_31623[(1)] = (1));

return statearr_31623;
});
var cljs$core$async$transduce_$_state_machine__30810__auto____1 = (function (state_31618){
while(true){
var ret_value__30811__auto__ = (function (){try{while(true){
var result__30812__auto__ = switch__30809__auto__(state_31618);
if(cljs.core.keyword_identical_QMARK_(result__30812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30812__auto__;
}
break;
}
}catch (e31626){var ex__30813__auto__ = e31626;
var statearr_31627_33631 = state_31618;
(statearr_31627_33631[(2)] = ex__30813__auto__);


if(cljs.core.seq((state_31618[(4)]))){
var statearr_31629_33632 = state_31618;
(statearr_31629_33632[(1)] = cljs.core.first((state_31618[(4)])));

} else {
throw ex__30813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33633 = state_31618;
state_31618 = G__33633;
continue;
} else {
return ret_value__30811__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30810__auto__ = function(state_31618){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30810__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30810__auto____1.call(this,state_31618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30810__auto____0;
cljs$core$async$transduce_$_state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30810__auto____1;
return cljs$core$async$transduce_$_state_machine__30810__auto__;
})()
})();
var state__30995__auto__ = (function (){var statearr_31630 = f__30994__auto__();
(statearr_31630[(6)] = c__30993__auto__);

return statearr_31630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30995__auto__);
}));

return c__30993__auto__;
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
var G__31632 = arguments.length;
switch (G__31632) {
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
var c__30993__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30994__auto__ = (function (){var switch__30809__auto__ = (function (state_31659){
var state_val_31660 = (state_31659[(1)]);
if((state_val_31660 === (7))){
var inst_31639 = (state_31659[(2)]);
var state_31659__$1 = state_31659;
var statearr_31661_33637 = state_31659__$1;
(statearr_31661_33637[(2)] = inst_31639);

(statearr_31661_33637[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (1))){
var inst_31633 = cljs.core.seq(coll);
var inst_31634 = inst_31633;
var state_31659__$1 = (function (){var statearr_31663 = state_31659;
(statearr_31663[(7)] = inst_31634);

return statearr_31663;
})();
var statearr_31664_33638 = state_31659__$1;
(statearr_31664_33638[(2)] = null);

(statearr_31664_33638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (4))){
var inst_31634 = (state_31659[(7)]);
var inst_31637 = cljs.core.first(inst_31634);
var state_31659__$1 = state_31659;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31659__$1,(7),ch,inst_31637);
} else {
if((state_val_31660 === (13))){
var inst_31653 = (state_31659[(2)]);
var state_31659__$1 = state_31659;
var statearr_31665_33639 = state_31659__$1;
(statearr_31665_33639[(2)] = inst_31653);

(statearr_31665_33639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (6))){
var inst_31642 = (state_31659[(2)]);
var state_31659__$1 = state_31659;
if(cljs.core.truth_(inst_31642)){
var statearr_31666_33640 = state_31659__$1;
(statearr_31666_33640[(1)] = (8));

} else {
var statearr_31667_33641 = state_31659__$1;
(statearr_31667_33641[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (3))){
var inst_31657 = (state_31659[(2)]);
var state_31659__$1 = state_31659;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31659__$1,inst_31657);
} else {
if((state_val_31660 === (12))){
var state_31659__$1 = state_31659;
var statearr_31668_33642 = state_31659__$1;
(statearr_31668_33642[(2)] = null);

(statearr_31668_33642[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (2))){
var inst_31634 = (state_31659[(7)]);
var state_31659__$1 = state_31659;
if(cljs.core.truth_(inst_31634)){
var statearr_31669_33643 = state_31659__$1;
(statearr_31669_33643[(1)] = (4));

} else {
var statearr_31674_33644 = state_31659__$1;
(statearr_31674_33644[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (11))){
var inst_31650 = cljs.core.async.close_BANG_(ch);
var state_31659__$1 = state_31659;
var statearr_31679_33645 = state_31659__$1;
(statearr_31679_33645[(2)] = inst_31650);

(statearr_31679_33645[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (9))){
var state_31659__$1 = state_31659;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31680_33646 = state_31659__$1;
(statearr_31680_33646[(1)] = (11));

} else {
var statearr_31681_33647 = state_31659__$1;
(statearr_31681_33647[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (5))){
var inst_31634 = (state_31659[(7)]);
var state_31659__$1 = state_31659;
var statearr_31682_33648 = state_31659__$1;
(statearr_31682_33648[(2)] = inst_31634);

(statearr_31682_33648[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (10))){
var inst_31655 = (state_31659[(2)]);
var state_31659__$1 = state_31659;
var statearr_31683_33649 = state_31659__$1;
(statearr_31683_33649[(2)] = inst_31655);

(statearr_31683_33649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31660 === (8))){
var inst_31634 = (state_31659[(7)]);
var inst_31646 = cljs.core.next(inst_31634);
var inst_31634__$1 = inst_31646;
var state_31659__$1 = (function (){var statearr_31684 = state_31659;
(statearr_31684[(7)] = inst_31634__$1);

return statearr_31684;
})();
var statearr_31685_33650 = state_31659__$1;
(statearr_31685_33650[(2)] = null);

(statearr_31685_33650[(1)] = (2));


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
var cljs$core$async$state_machine__30810__auto__ = null;
var cljs$core$async$state_machine__30810__auto____0 = (function (){
var statearr_31686 = [null,null,null,null,null,null,null,null];
(statearr_31686[(0)] = cljs$core$async$state_machine__30810__auto__);

(statearr_31686[(1)] = (1));

return statearr_31686;
});
var cljs$core$async$state_machine__30810__auto____1 = (function (state_31659){
while(true){
var ret_value__30811__auto__ = (function (){try{while(true){
var result__30812__auto__ = switch__30809__auto__(state_31659);
if(cljs.core.keyword_identical_QMARK_(result__30812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30812__auto__;
}
break;
}
}catch (e31687){var ex__30813__auto__ = e31687;
var statearr_31688_33655 = state_31659;
(statearr_31688_33655[(2)] = ex__30813__auto__);


if(cljs.core.seq((state_31659[(4)]))){
var statearr_31689_33656 = state_31659;
(statearr_31689_33656[(1)] = cljs.core.first((state_31659[(4)])));

} else {
throw ex__30813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33657 = state_31659;
state_31659 = G__33657;
continue;
} else {
return ret_value__30811__auto__;
}
break;
}
});
cljs$core$async$state_machine__30810__auto__ = function(state_31659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30810__auto____1.call(this,state_31659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30810__auto____0;
cljs$core$async$state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30810__auto____1;
return cljs$core$async$state_machine__30810__auto__;
})()
})();
var state__30995__auto__ = (function (){var statearr_31690 = f__30994__auto__();
(statearr_31690[(6)] = c__30993__auto__);

return statearr_31690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30995__auto__);
}));

return c__30993__auto__;
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
var G__31696 = arguments.length;
switch (G__31696) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_33659 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_33659(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33660 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_33660(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33663 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_33663(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33664 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_33664(m);
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
var c__30993__auto___33675 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30994__auto__ = (function (){var switch__30809__auto__ = (function (state_31888){
var state_val_31889 = (state_31888[(1)]);
if((state_val_31889 === (7))){
var inst_31884 = (state_31888[(2)]);
var state_31888__$1 = state_31888;
var statearr_31890_33676 = state_31888__$1;
(statearr_31890_33676[(2)] = inst_31884);

(statearr_31890_33676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (20))){
var inst_31778 = (state_31888[(7)]);
var inst_31796 = cljs.core.first(inst_31778);
var inst_31797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31796,(0),null);
var inst_31798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31796,(1),null);
var state_31888__$1 = (function (){var statearr_31893 = state_31888;
(statearr_31893[(8)] = inst_31797);

return statearr_31893;
})();
if(cljs.core.truth_(inst_31798)){
var statearr_31894_33677 = state_31888__$1;
(statearr_31894_33677[(1)] = (22));

} else {
var statearr_31895_33678 = state_31888__$1;
(statearr_31895_33678[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (27))){
var inst_31828 = (state_31888[(9)]);
var inst_31826 = (state_31888[(10)]);
var inst_31833 = (state_31888[(11)]);
var inst_31743 = (state_31888[(12)]);
var inst_31833__$1 = cljs.core._nth(inst_31826,inst_31828);
var inst_31834 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31833__$1,inst_31743,done);
var state_31888__$1 = (function (){var statearr_31897 = state_31888;
(statearr_31897[(11)] = inst_31833__$1);

return statearr_31897;
})();
if(cljs.core.truth_(inst_31834)){
var statearr_31900_33682 = state_31888__$1;
(statearr_31900_33682[(1)] = (30));

} else {
var statearr_31901_33683 = state_31888__$1;
(statearr_31901_33683[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (1))){
var state_31888__$1 = state_31888;
var statearr_31902_33684 = state_31888__$1;
(statearr_31902_33684[(2)] = null);

(statearr_31902_33684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (24))){
var inst_31778 = (state_31888[(7)]);
var inst_31803 = (state_31888[(2)]);
var inst_31804 = cljs.core.next(inst_31778);
var inst_31756 = inst_31804;
var inst_31757 = null;
var inst_31758 = (0);
var inst_31759 = (0);
var state_31888__$1 = (function (){var statearr_31903 = state_31888;
(statearr_31903[(13)] = inst_31758);

(statearr_31903[(14)] = inst_31759);

(statearr_31903[(15)] = inst_31756);

(statearr_31903[(16)] = inst_31803);

(statearr_31903[(17)] = inst_31757);

return statearr_31903;
})();
var statearr_31904_33685 = state_31888__$1;
(statearr_31904_33685[(2)] = null);

(statearr_31904_33685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (39))){
var state_31888__$1 = state_31888;
var statearr_31912_33686 = state_31888__$1;
(statearr_31912_33686[(2)] = null);

(statearr_31912_33686[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (4))){
var inst_31743 = (state_31888[(12)]);
var inst_31743__$1 = (state_31888[(2)]);
var inst_31744 = (inst_31743__$1 == null);
var state_31888__$1 = (function (){var statearr_31913 = state_31888;
(statearr_31913[(12)] = inst_31743__$1);

return statearr_31913;
})();
if(cljs.core.truth_(inst_31744)){
var statearr_31914_33687 = state_31888__$1;
(statearr_31914_33687[(1)] = (5));

} else {
var statearr_31915_33688 = state_31888__$1;
(statearr_31915_33688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (15))){
var inst_31758 = (state_31888[(13)]);
var inst_31759 = (state_31888[(14)]);
var inst_31756 = (state_31888[(15)]);
var inst_31757 = (state_31888[(17)]);
var inst_31774 = (state_31888[(2)]);
var inst_31775 = (inst_31759 + (1));
var tmp31905 = inst_31758;
var tmp31906 = inst_31756;
var tmp31907 = inst_31757;
var inst_31756__$1 = tmp31906;
var inst_31757__$1 = tmp31907;
var inst_31758__$1 = tmp31905;
var inst_31759__$1 = inst_31775;
var state_31888__$1 = (function (){var statearr_31916 = state_31888;
(statearr_31916[(13)] = inst_31758__$1);

(statearr_31916[(14)] = inst_31759__$1);

(statearr_31916[(15)] = inst_31756__$1);

(statearr_31916[(18)] = inst_31774);

(statearr_31916[(17)] = inst_31757__$1);

return statearr_31916;
})();
var statearr_31918_33690 = state_31888__$1;
(statearr_31918_33690[(2)] = null);

(statearr_31918_33690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (21))){
var inst_31807 = (state_31888[(2)]);
var state_31888__$1 = state_31888;
var statearr_31926_33691 = state_31888__$1;
(statearr_31926_33691[(2)] = inst_31807);

(statearr_31926_33691[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (31))){
var inst_31833 = (state_31888[(11)]);
var inst_31837 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31833);
var state_31888__$1 = state_31888;
var statearr_31927_33692 = state_31888__$1;
(statearr_31927_33692[(2)] = inst_31837);

(statearr_31927_33692[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (32))){
var inst_31828 = (state_31888[(9)]);
var inst_31825 = (state_31888[(19)]);
var inst_31826 = (state_31888[(10)]);
var inst_31827 = (state_31888[(20)]);
var inst_31840 = (state_31888[(2)]);
var inst_31841 = (inst_31828 + (1));
var tmp31923 = inst_31825;
var tmp31924 = inst_31826;
var tmp31925 = inst_31827;
var inst_31825__$1 = tmp31923;
var inst_31826__$1 = tmp31924;
var inst_31827__$1 = tmp31925;
var inst_31828__$1 = inst_31841;
var state_31888__$1 = (function (){var statearr_31930 = state_31888;
(statearr_31930[(9)] = inst_31828__$1);

(statearr_31930[(19)] = inst_31825__$1);

(statearr_31930[(10)] = inst_31826__$1);

(statearr_31930[(21)] = inst_31840);

(statearr_31930[(20)] = inst_31827__$1);

return statearr_31930;
})();
var statearr_31932_33693 = state_31888__$1;
(statearr_31932_33693[(2)] = null);

(statearr_31932_33693[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (40))){
var inst_31853 = (state_31888[(22)]);
var inst_31861 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31853);
var state_31888__$1 = state_31888;
var statearr_31936_33694 = state_31888__$1;
(statearr_31936_33694[(2)] = inst_31861);

(statearr_31936_33694[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (33))){
var inst_31844 = (state_31888[(23)]);
var inst_31846 = cljs.core.chunked_seq_QMARK_(inst_31844);
var state_31888__$1 = state_31888;
if(inst_31846){
var statearr_31937_33695 = state_31888__$1;
(statearr_31937_33695[(1)] = (36));

} else {
var statearr_31938_33696 = state_31888__$1;
(statearr_31938_33696[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (13))){
var inst_31768 = (state_31888[(24)]);
var inst_31771 = cljs.core.async.close_BANG_(inst_31768);
var state_31888__$1 = state_31888;
var statearr_31960_33697 = state_31888__$1;
(statearr_31960_33697[(2)] = inst_31771);

(statearr_31960_33697[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (22))){
var inst_31797 = (state_31888[(8)]);
var inst_31800 = cljs.core.async.close_BANG_(inst_31797);
var state_31888__$1 = state_31888;
var statearr_31962_33698 = state_31888__$1;
(statearr_31962_33698[(2)] = inst_31800);

(statearr_31962_33698[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (36))){
var inst_31844 = (state_31888[(23)]);
var inst_31848 = cljs.core.chunk_first(inst_31844);
var inst_31849 = cljs.core.chunk_rest(inst_31844);
var inst_31850 = cljs.core.count(inst_31848);
var inst_31825 = inst_31849;
var inst_31826 = inst_31848;
var inst_31827 = inst_31850;
var inst_31828 = (0);
var state_31888__$1 = (function (){var statearr_31963 = state_31888;
(statearr_31963[(9)] = inst_31828);

(statearr_31963[(19)] = inst_31825);

(statearr_31963[(10)] = inst_31826);

(statearr_31963[(20)] = inst_31827);

return statearr_31963;
})();
var statearr_31964_33703 = state_31888__$1;
(statearr_31964_33703[(2)] = null);

(statearr_31964_33703[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (41))){
var inst_31844 = (state_31888[(23)]);
var inst_31863 = (state_31888[(2)]);
var inst_31864 = cljs.core.next(inst_31844);
var inst_31825 = inst_31864;
var inst_31826 = null;
var inst_31827 = (0);
var inst_31828 = (0);
var state_31888__$1 = (function (){var statearr_31975 = state_31888;
(statearr_31975[(9)] = inst_31828);

(statearr_31975[(25)] = inst_31863);

(statearr_31975[(19)] = inst_31825);

(statearr_31975[(10)] = inst_31826);

(statearr_31975[(20)] = inst_31827);

return statearr_31975;
})();
var statearr_31976_33704 = state_31888__$1;
(statearr_31976_33704[(2)] = null);

(statearr_31976_33704[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (43))){
var state_31888__$1 = state_31888;
var statearr_31979_33705 = state_31888__$1;
(statearr_31979_33705[(2)] = null);

(statearr_31979_33705[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (29))){
var inst_31872 = (state_31888[(2)]);
var state_31888__$1 = state_31888;
var statearr_31983_33706 = state_31888__$1;
(statearr_31983_33706[(2)] = inst_31872);

(statearr_31983_33706[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (44))){
var inst_31881 = (state_31888[(2)]);
var state_31888__$1 = (function (){var statearr_31986 = state_31888;
(statearr_31986[(26)] = inst_31881);

return statearr_31986;
})();
var statearr_31987_33707 = state_31888__$1;
(statearr_31987_33707[(2)] = null);

(statearr_31987_33707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (6))){
var inst_31817 = (state_31888[(27)]);
var inst_31816 = cljs.core.deref(cs);
var inst_31817__$1 = cljs.core.keys(inst_31816);
var inst_31818 = cljs.core.count(inst_31817__$1);
var inst_31819 = cljs.core.reset_BANG_(dctr,inst_31818);
var inst_31824 = cljs.core.seq(inst_31817__$1);
var inst_31825 = inst_31824;
var inst_31826 = null;
var inst_31827 = (0);
var inst_31828 = (0);
var state_31888__$1 = (function (){var statearr_31991 = state_31888;
(statearr_31991[(9)] = inst_31828);

(statearr_31991[(19)] = inst_31825);

(statearr_31991[(10)] = inst_31826);

(statearr_31991[(27)] = inst_31817__$1);

(statearr_31991[(28)] = inst_31819);

(statearr_31991[(20)] = inst_31827);

return statearr_31991;
})();
var statearr_31992_33708 = state_31888__$1;
(statearr_31992_33708[(2)] = null);

(statearr_31992_33708[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (28))){
var inst_31825 = (state_31888[(19)]);
var inst_31844 = (state_31888[(23)]);
var inst_31844__$1 = cljs.core.seq(inst_31825);
var state_31888__$1 = (function (){var statearr_31993 = state_31888;
(statearr_31993[(23)] = inst_31844__$1);

return statearr_31993;
})();
if(inst_31844__$1){
var statearr_31994_33715 = state_31888__$1;
(statearr_31994_33715[(1)] = (33));

} else {
var statearr_31995_33716 = state_31888__$1;
(statearr_31995_33716[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (25))){
var inst_31828 = (state_31888[(9)]);
var inst_31827 = (state_31888[(20)]);
var inst_31830 = (inst_31828 < inst_31827);
var inst_31831 = inst_31830;
var state_31888__$1 = state_31888;
if(cljs.core.truth_(inst_31831)){
var statearr_31996_33717 = state_31888__$1;
(statearr_31996_33717[(1)] = (27));

} else {
var statearr_31997_33718 = state_31888__$1;
(statearr_31997_33718[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (34))){
var state_31888__$1 = state_31888;
var statearr_31998_33719 = state_31888__$1;
(statearr_31998_33719[(2)] = null);

(statearr_31998_33719[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (17))){
var state_31888__$1 = state_31888;
var statearr_31999_33720 = state_31888__$1;
(statearr_31999_33720[(2)] = null);

(statearr_31999_33720[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (3))){
var inst_31886 = (state_31888[(2)]);
var state_31888__$1 = state_31888;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31888__$1,inst_31886);
} else {
if((state_val_31889 === (12))){
var inst_31812 = (state_31888[(2)]);
var state_31888__$1 = state_31888;
var statearr_32001_33721 = state_31888__$1;
(statearr_32001_33721[(2)] = inst_31812);

(statearr_32001_33721[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (2))){
var state_31888__$1 = state_31888;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31888__$1,(4),ch);
} else {
if((state_val_31889 === (23))){
var state_31888__$1 = state_31888;
var statearr_32004_33722 = state_31888__$1;
(statearr_32004_33722[(2)] = null);

(statearr_32004_33722[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (35))){
var inst_31870 = (state_31888[(2)]);
var state_31888__$1 = state_31888;
var statearr_32019_33723 = state_31888__$1;
(statearr_32019_33723[(2)] = inst_31870);

(statearr_32019_33723[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (19))){
var inst_31778 = (state_31888[(7)]);
var inst_31784 = cljs.core.chunk_first(inst_31778);
var inst_31787 = cljs.core.chunk_rest(inst_31778);
var inst_31788 = cljs.core.count(inst_31784);
var inst_31756 = inst_31787;
var inst_31757 = inst_31784;
var inst_31758 = inst_31788;
var inst_31759 = (0);
var state_31888__$1 = (function (){var statearr_32021 = state_31888;
(statearr_32021[(13)] = inst_31758);

(statearr_32021[(14)] = inst_31759);

(statearr_32021[(15)] = inst_31756);

(statearr_32021[(17)] = inst_31757);

return statearr_32021;
})();
var statearr_32022_33724 = state_31888__$1;
(statearr_32022_33724[(2)] = null);

(statearr_32022_33724[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (11))){
var inst_31778 = (state_31888[(7)]);
var inst_31756 = (state_31888[(15)]);
var inst_31778__$1 = cljs.core.seq(inst_31756);
var state_31888__$1 = (function (){var statearr_32023 = state_31888;
(statearr_32023[(7)] = inst_31778__$1);

return statearr_32023;
})();
if(inst_31778__$1){
var statearr_32026_33725 = state_31888__$1;
(statearr_32026_33725[(1)] = (16));

} else {
var statearr_32028_33726 = state_31888__$1;
(statearr_32028_33726[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (9))){
var inst_31814 = (state_31888[(2)]);
var state_31888__$1 = state_31888;
var statearr_32029_33727 = state_31888__$1;
(statearr_32029_33727[(2)] = inst_31814);

(statearr_32029_33727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (5))){
var inst_31750 = cljs.core.deref(cs);
var inst_31751 = cljs.core.seq(inst_31750);
var inst_31756 = inst_31751;
var inst_31757 = null;
var inst_31758 = (0);
var inst_31759 = (0);
var state_31888__$1 = (function (){var statearr_32030 = state_31888;
(statearr_32030[(13)] = inst_31758);

(statearr_32030[(14)] = inst_31759);

(statearr_32030[(15)] = inst_31756);

(statearr_32030[(17)] = inst_31757);

return statearr_32030;
})();
var statearr_32031_33728 = state_31888__$1;
(statearr_32031_33728[(2)] = null);

(statearr_32031_33728[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (14))){
var state_31888__$1 = state_31888;
var statearr_32032_33729 = state_31888__$1;
(statearr_32032_33729[(2)] = null);

(statearr_32032_33729[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (45))){
var inst_31878 = (state_31888[(2)]);
var state_31888__$1 = state_31888;
var statearr_32050_33730 = state_31888__$1;
(statearr_32050_33730[(2)] = inst_31878);

(statearr_32050_33730[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (26))){
var inst_31817 = (state_31888[(27)]);
var inst_31874 = (state_31888[(2)]);
var inst_31875 = cljs.core.seq(inst_31817);
var state_31888__$1 = (function (){var statearr_32051 = state_31888;
(statearr_32051[(29)] = inst_31874);

return statearr_32051;
})();
if(inst_31875){
var statearr_32052_33731 = state_31888__$1;
(statearr_32052_33731[(1)] = (42));

} else {
var statearr_32053_33732 = state_31888__$1;
(statearr_32053_33732[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (16))){
var inst_31778 = (state_31888[(7)]);
var inst_31780 = cljs.core.chunked_seq_QMARK_(inst_31778);
var state_31888__$1 = state_31888;
if(inst_31780){
var statearr_32054_33733 = state_31888__$1;
(statearr_32054_33733[(1)] = (19));

} else {
var statearr_32055_33734 = state_31888__$1;
(statearr_32055_33734[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (38))){
var inst_31867 = (state_31888[(2)]);
var state_31888__$1 = state_31888;
var statearr_32059_33738 = state_31888__$1;
(statearr_32059_33738[(2)] = inst_31867);

(statearr_32059_33738[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (30))){
var state_31888__$1 = state_31888;
var statearr_32061_33739 = state_31888__$1;
(statearr_32061_33739[(2)] = null);

(statearr_32061_33739[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (10))){
var inst_31759 = (state_31888[(14)]);
var inst_31757 = (state_31888[(17)]);
var inst_31767 = cljs.core._nth(inst_31757,inst_31759);
var inst_31768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31767,(0),null);
var inst_31769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31767,(1),null);
var state_31888__$1 = (function (){var statearr_32066 = state_31888;
(statearr_32066[(24)] = inst_31768);

return statearr_32066;
})();
if(cljs.core.truth_(inst_31769)){
var statearr_32067_33740 = state_31888__$1;
(statearr_32067_33740[(1)] = (13));

} else {
var statearr_32069_33741 = state_31888__$1;
(statearr_32069_33741[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (18))){
var inst_31810 = (state_31888[(2)]);
var state_31888__$1 = state_31888;
var statearr_32072_33742 = state_31888__$1;
(statearr_32072_33742[(2)] = inst_31810);

(statearr_32072_33742[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (42))){
var state_31888__$1 = state_31888;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31888__$1,(45),dchan);
} else {
if((state_val_31889 === (37))){
var inst_31844 = (state_31888[(23)]);
var inst_31853 = (state_31888[(22)]);
var inst_31743 = (state_31888[(12)]);
var inst_31853__$1 = cljs.core.first(inst_31844);
var inst_31858 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31853__$1,inst_31743,done);
var state_31888__$1 = (function (){var statearr_32081 = state_31888;
(statearr_32081[(22)] = inst_31853__$1);

return statearr_32081;
})();
if(cljs.core.truth_(inst_31858)){
var statearr_32082_33743 = state_31888__$1;
(statearr_32082_33743[(1)] = (39));

} else {
var statearr_32083_33744 = state_31888__$1;
(statearr_32083_33744[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31889 === (8))){
var inst_31758 = (state_31888[(13)]);
var inst_31759 = (state_31888[(14)]);
var inst_31761 = (inst_31759 < inst_31758);
var inst_31762 = inst_31761;
var state_31888__$1 = state_31888;
if(cljs.core.truth_(inst_31762)){
var statearr_32084_33749 = state_31888__$1;
(statearr_32084_33749[(1)] = (10));

} else {
var statearr_32085_33750 = state_31888__$1;
(statearr_32085_33750[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__30810__auto__ = null;
var cljs$core$async$mult_$_state_machine__30810__auto____0 = (function (){
var statearr_32090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32090[(0)] = cljs$core$async$mult_$_state_machine__30810__auto__);

(statearr_32090[(1)] = (1));

return statearr_32090;
});
var cljs$core$async$mult_$_state_machine__30810__auto____1 = (function (state_31888){
while(true){
var ret_value__30811__auto__ = (function (){try{while(true){
var result__30812__auto__ = switch__30809__auto__(state_31888);
if(cljs.core.keyword_identical_QMARK_(result__30812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30812__auto__;
}
break;
}
}catch (e32091){var ex__30813__auto__ = e32091;
var statearr_32093_33773 = state_31888;
(statearr_32093_33773[(2)] = ex__30813__auto__);


if(cljs.core.seq((state_31888[(4)]))){
var statearr_32095_33774 = state_31888;
(statearr_32095_33774[(1)] = cljs.core.first((state_31888[(4)])));

} else {
throw ex__30813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33775 = state_31888;
state_31888 = G__33775;
continue;
} else {
return ret_value__30811__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30810__auto__ = function(state_31888){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30810__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30810__auto____1.call(this,state_31888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30810__auto____0;
cljs$core$async$mult_$_state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30810__auto____1;
return cljs$core$async$mult_$_state_machine__30810__auto__;
})()
})();
var state__30995__auto__ = (function (){var statearr_32098 = f__30994__auto__();
(statearr_32098[(6)] = c__30993__auto___33675);

return statearr_32098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30995__auto__);
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
var G__32105 = arguments.length;
switch (G__32105) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_33794 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_33794(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33801 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_33801(m,ch);
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

var cljs$core$async$Mix$toggle_STAR_$dyn_33803 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_33803(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33810 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33810(m,mode);
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

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32166){
var map__32167 = p__32166;
var map__32167__$1 = (((((!((map__32167 == null))))?(((((map__32167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32167):map__32167);
var opts = map__32167__$1;
var statearr_32169_33825 = state;
(statearr_32169_33825[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32170_33826 = state;
(statearr_32170_33826[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_32173_33827 = state;
(statearr_32173_33827[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32143){
var G__32160 = cljs.core.first(seq32143);
var seq32143__$1 = cljs.core.next(seq32143);
var G__32161 = cljs.core.first(seq32143__$1);
var seq32143__$2 = cljs.core.next(seq32143__$1);
var G__32162 = cljs.core.first(seq32143__$2);
var seq32143__$3 = cljs.core.next(seq32143__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32160,G__32161,G__32162,seq32143__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32185 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32185 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32186){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32186 = meta32186;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32187,meta32186__$1){
var self__ = this;
var _32187__$1 = this;
return (new cljs.core.async.t_cljs$core$async32185(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32186__$1));
}));

(cljs.core.async.t_cljs$core$async32185.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32187){
var self__ = this;
var _32187__$1 = this;
return self__.meta32186;
}));

(cljs.core.async.t_cljs$core$async32185.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32185.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32185.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32185.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32185.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32185.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32185.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32185.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32185.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32186","meta32186",-278097312,null)], null);
}));

(cljs.core.async.t_cljs$core$async32185.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32185.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32185");

(cljs.core.async.t_cljs$core$async32185.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32185");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32185.
 */
cljs.core.async.__GT_t_cljs$core$async32185 = (function cljs$core$async$mix_$___GT_t_cljs$core$async32185(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32186){
return (new cljs.core.async.t_cljs$core$async32185(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32186));
});

}

return (new cljs.core.async.t_cljs$core$async32185(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30993__auto___33837 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30994__auto__ = (function (){var switch__30809__auto__ = (function (state_32301){
var state_val_32302 = (state_32301[(1)]);
if((state_val_32302 === (7))){
var inst_32209 = (state_32301[(2)]);
var state_32301__$1 = state_32301;
var statearr_32312_33838 = state_32301__$1;
(statearr_32312_33838[(2)] = inst_32209);

(statearr_32312_33838[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (20))){
var inst_32221 = (state_32301[(7)]);
var state_32301__$1 = state_32301;
var statearr_32313_33839 = state_32301__$1;
(statearr_32313_33839[(2)] = inst_32221);

(statearr_32313_33839[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (27))){
var state_32301__$1 = state_32301;
var statearr_32315_33840 = state_32301__$1;
(statearr_32315_33840[(2)] = null);

(statearr_32315_33840[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (1))){
var inst_32195 = (state_32301[(8)]);
var inst_32195__$1 = calc_state();
var inst_32197 = (inst_32195__$1 == null);
var inst_32198 = cljs.core.not(inst_32197);
var state_32301__$1 = (function (){var statearr_32318 = state_32301;
(statearr_32318[(8)] = inst_32195__$1);

return statearr_32318;
})();
if(inst_32198){
var statearr_32327_33841 = state_32301__$1;
(statearr_32327_33841[(1)] = (2));

} else {
var statearr_32328_33842 = state_32301__$1;
(statearr_32328_33842[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (24))){
var inst_32271 = (state_32301[(9)]);
var inst_32246 = (state_32301[(10)]);
var inst_32256 = (state_32301[(11)]);
var inst_32271__$1 = (inst_32246.cljs$core$IFn$_invoke$arity$1 ? inst_32246.cljs$core$IFn$_invoke$arity$1(inst_32256) : inst_32246.call(null,inst_32256));
var state_32301__$1 = (function (){var statearr_32329 = state_32301;
(statearr_32329[(9)] = inst_32271__$1);

return statearr_32329;
})();
if(cljs.core.truth_(inst_32271__$1)){
var statearr_32330_33846 = state_32301__$1;
(statearr_32330_33846[(1)] = (29));

} else {
var statearr_32331_33847 = state_32301__$1;
(statearr_32331_33847[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (4))){
var inst_32212 = (state_32301[(2)]);
var state_32301__$1 = state_32301;
if(cljs.core.truth_(inst_32212)){
var statearr_32332_33848 = state_32301__$1;
(statearr_32332_33848[(1)] = (8));

} else {
var statearr_32333_33855 = state_32301__$1;
(statearr_32333_33855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (15))){
var inst_32240 = (state_32301[(2)]);
var state_32301__$1 = state_32301;
if(cljs.core.truth_(inst_32240)){
var statearr_32334_33856 = state_32301__$1;
(statearr_32334_33856[(1)] = (19));

} else {
var statearr_32335_33857 = state_32301__$1;
(statearr_32335_33857[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (21))){
var inst_32245 = (state_32301[(12)]);
var inst_32245__$1 = (state_32301[(2)]);
var inst_32246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32245__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32247 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32245__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32245__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32301__$1 = (function (){var statearr_32336 = state_32301;
(statearr_32336[(13)] = inst_32247);

(statearr_32336[(10)] = inst_32246);

(statearr_32336[(12)] = inst_32245__$1);

return statearr_32336;
})();
return cljs.core.async.ioc_alts_BANG_(state_32301__$1,(22),inst_32248);
} else {
if((state_val_32302 === (31))){
var inst_32283 = (state_32301[(2)]);
var state_32301__$1 = state_32301;
if(cljs.core.truth_(inst_32283)){
var statearr_32337_33860 = state_32301__$1;
(statearr_32337_33860[(1)] = (32));

} else {
var statearr_32338_33866 = state_32301__$1;
(statearr_32338_33866[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (32))){
var inst_32255 = (state_32301[(14)]);
var state_32301__$1 = state_32301;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32301__$1,(35),out,inst_32255);
} else {
if((state_val_32302 === (33))){
var inst_32245 = (state_32301[(12)]);
var inst_32221 = inst_32245;
var state_32301__$1 = (function (){var statearr_32339 = state_32301;
(statearr_32339[(7)] = inst_32221);

return statearr_32339;
})();
var statearr_32340_33871 = state_32301__$1;
(statearr_32340_33871[(2)] = null);

(statearr_32340_33871[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (13))){
var inst_32221 = (state_32301[(7)]);
var inst_32229 = inst_32221.cljs$lang$protocol_mask$partition0$;
var inst_32230 = (inst_32229 & (64));
var inst_32231 = inst_32221.cljs$core$ISeq$;
var inst_32232 = (cljs.core.PROTOCOL_SENTINEL === inst_32231);
var inst_32233 = ((inst_32230) || (inst_32232));
var state_32301__$1 = state_32301;
if(cljs.core.truth_(inst_32233)){
var statearr_32341_33875 = state_32301__$1;
(statearr_32341_33875[(1)] = (16));

} else {
var statearr_32342_33876 = state_32301__$1;
(statearr_32342_33876[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (22))){
var inst_32255 = (state_32301[(14)]);
var inst_32256 = (state_32301[(11)]);
var inst_32254 = (state_32301[(2)]);
var inst_32255__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32254,(0),null);
var inst_32256__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32254,(1),null);
var inst_32257 = (inst_32255__$1 == null);
var inst_32258 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32256__$1,change);
var inst_32259 = ((inst_32257) || (inst_32258));
var state_32301__$1 = (function (){var statearr_32343 = state_32301;
(statearr_32343[(14)] = inst_32255__$1);

(statearr_32343[(11)] = inst_32256__$1);

return statearr_32343;
})();
if(cljs.core.truth_(inst_32259)){
var statearr_32344_33884 = state_32301__$1;
(statearr_32344_33884[(1)] = (23));

} else {
var statearr_32345_33887 = state_32301__$1;
(statearr_32345_33887[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (36))){
var inst_32245 = (state_32301[(12)]);
var inst_32221 = inst_32245;
var state_32301__$1 = (function (){var statearr_32346 = state_32301;
(statearr_32346[(7)] = inst_32221);

return statearr_32346;
})();
var statearr_32347_33891 = state_32301__$1;
(statearr_32347_33891[(2)] = null);

(statearr_32347_33891[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (29))){
var inst_32271 = (state_32301[(9)]);
var state_32301__$1 = state_32301;
var statearr_32348_33892 = state_32301__$1;
(statearr_32348_33892[(2)] = inst_32271);

(statearr_32348_33892[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (6))){
var state_32301__$1 = state_32301;
var statearr_32350_33894 = state_32301__$1;
(statearr_32350_33894[(2)] = false);

(statearr_32350_33894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (28))){
var inst_32267 = (state_32301[(2)]);
var inst_32268 = calc_state();
var inst_32221 = inst_32268;
var state_32301__$1 = (function (){var statearr_32353 = state_32301;
(statearr_32353[(7)] = inst_32221);

(statearr_32353[(15)] = inst_32267);

return statearr_32353;
})();
var statearr_32356_33898 = state_32301__$1;
(statearr_32356_33898[(2)] = null);

(statearr_32356_33898[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (25))){
var inst_32297 = (state_32301[(2)]);
var state_32301__$1 = state_32301;
var statearr_32358_33900 = state_32301__$1;
(statearr_32358_33900[(2)] = inst_32297);

(statearr_32358_33900[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (34))){
var inst_32295 = (state_32301[(2)]);
var state_32301__$1 = state_32301;
var statearr_32359_33902 = state_32301__$1;
(statearr_32359_33902[(2)] = inst_32295);

(statearr_32359_33902[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (17))){
var state_32301__$1 = state_32301;
var statearr_32360_33903 = state_32301__$1;
(statearr_32360_33903[(2)] = false);

(statearr_32360_33903[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (3))){
var state_32301__$1 = state_32301;
var statearr_32361_33906 = state_32301__$1;
(statearr_32361_33906[(2)] = false);

(statearr_32361_33906[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (12))){
var inst_32299 = (state_32301[(2)]);
var state_32301__$1 = state_32301;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32301__$1,inst_32299);
} else {
if((state_val_32302 === (2))){
var inst_32195 = (state_32301[(8)]);
var inst_32201 = inst_32195.cljs$lang$protocol_mask$partition0$;
var inst_32202 = (inst_32201 & (64));
var inst_32203 = inst_32195.cljs$core$ISeq$;
var inst_32204 = (cljs.core.PROTOCOL_SENTINEL === inst_32203);
var inst_32205 = ((inst_32202) || (inst_32204));
var state_32301__$1 = state_32301;
if(cljs.core.truth_(inst_32205)){
var statearr_32362_33907 = state_32301__$1;
(statearr_32362_33907[(1)] = (5));

} else {
var statearr_32363_33908 = state_32301__$1;
(statearr_32363_33908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (23))){
var inst_32255 = (state_32301[(14)]);
var inst_32262 = (inst_32255 == null);
var state_32301__$1 = state_32301;
if(cljs.core.truth_(inst_32262)){
var statearr_32365_33909 = state_32301__$1;
(statearr_32365_33909[(1)] = (26));

} else {
var statearr_32366_33910 = state_32301__$1;
(statearr_32366_33910[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (35))){
var inst_32286 = (state_32301[(2)]);
var state_32301__$1 = state_32301;
if(cljs.core.truth_(inst_32286)){
var statearr_32373_33911 = state_32301__$1;
(statearr_32373_33911[(1)] = (36));

} else {
var statearr_32374_33912 = state_32301__$1;
(statearr_32374_33912[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (19))){
var inst_32221 = (state_32301[(7)]);
var inst_32242 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32221);
var state_32301__$1 = state_32301;
var statearr_32375_33913 = state_32301__$1;
(statearr_32375_33913[(2)] = inst_32242);

(statearr_32375_33913[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (11))){
var inst_32221 = (state_32301[(7)]);
var inst_32225 = (inst_32221 == null);
var inst_32227 = cljs.core.not(inst_32225);
var state_32301__$1 = state_32301;
if(inst_32227){
var statearr_32376_33914 = state_32301__$1;
(statearr_32376_33914[(1)] = (13));

} else {
var statearr_32377_33915 = state_32301__$1;
(statearr_32377_33915[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (9))){
var inst_32195 = (state_32301[(8)]);
var state_32301__$1 = state_32301;
var statearr_32380_33917 = state_32301__$1;
(statearr_32380_33917[(2)] = inst_32195);

(statearr_32380_33917[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (5))){
var state_32301__$1 = state_32301;
var statearr_32381_33918 = state_32301__$1;
(statearr_32381_33918[(2)] = true);

(statearr_32381_33918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (14))){
var state_32301__$1 = state_32301;
var statearr_32384_33919 = state_32301__$1;
(statearr_32384_33919[(2)] = false);

(statearr_32384_33919[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (26))){
var inst_32256 = (state_32301[(11)]);
var inst_32264 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32256);
var state_32301__$1 = state_32301;
var statearr_32385_33921 = state_32301__$1;
(statearr_32385_33921[(2)] = inst_32264);

(statearr_32385_33921[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (16))){
var state_32301__$1 = state_32301;
var statearr_32387_33922 = state_32301__$1;
(statearr_32387_33922[(2)] = true);

(statearr_32387_33922[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (38))){
var inst_32291 = (state_32301[(2)]);
var state_32301__$1 = state_32301;
var statearr_32388_33928 = state_32301__$1;
(statearr_32388_33928[(2)] = inst_32291);

(statearr_32388_33928[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (30))){
var inst_32247 = (state_32301[(13)]);
var inst_32246 = (state_32301[(10)]);
var inst_32256 = (state_32301[(11)]);
var inst_32278 = cljs.core.empty_QMARK_(inst_32246);
var inst_32279 = (inst_32247.cljs$core$IFn$_invoke$arity$1 ? inst_32247.cljs$core$IFn$_invoke$arity$1(inst_32256) : inst_32247.call(null,inst_32256));
var inst_32280 = cljs.core.not(inst_32279);
var inst_32281 = ((inst_32278) && (inst_32280));
var state_32301__$1 = state_32301;
var statearr_32393_33929 = state_32301__$1;
(statearr_32393_33929[(2)] = inst_32281);

(statearr_32393_33929[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (10))){
var inst_32195 = (state_32301[(8)]);
var inst_32217 = (state_32301[(2)]);
var inst_32218 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32217,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32219 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32217,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32220 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32217,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32221 = inst_32195;
var state_32301__$1 = (function (){var statearr_32394 = state_32301;
(statearr_32394[(7)] = inst_32221);

(statearr_32394[(16)] = inst_32218);

(statearr_32394[(17)] = inst_32219);

(statearr_32394[(18)] = inst_32220);

return statearr_32394;
})();
var statearr_32395_33930 = state_32301__$1;
(statearr_32395_33930[(2)] = null);

(statearr_32395_33930[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (18))){
var inst_32237 = (state_32301[(2)]);
var state_32301__$1 = state_32301;
var statearr_32396_33931 = state_32301__$1;
(statearr_32396_33931[(2)] = inst_32237);

(statearr_32396_33931[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (37))){
var state_32301__$1 = state_32301;
var statearr_32397_33932 = state_32301__$1;
(statearr_32397_33932[(2)] = null);

(statearr_32397_33932[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32302 === (8))){
var inst_32195 = (state_32301[(8)]);
var inst_32214 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32195);
var state_32301__$1 = state_32301;
var statearr_32398_33933 = state_32301__$1;
(statearr_32398_33933[(2)] = inst_32214);

(statearr_32398_33933[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__30810__auto__ = null;
var cljs$core$async$mix_$_state_machine__30810__auto____0 = (function (){
var statearr_32399 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32399[(0)] = cljs$core$async$mix_$_state_machine__30810__auto__);

(statearr_32399[(1)] = (1));

return statearr_32399;
});
var cljs$core$async$mix_$_state_machine__30810__auto____1 = (function (state_32301){
while(true){
var ret_value__30811__auto__ = (function (){try{while(true){
var result__30812__auto__ = switch__30809__auto__(state_32301);
if(cljs.core.keyword_identical_QMARK_(result__30812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30812__auto__;
}
break;
}
}catch (e32400){var ex__30813__auto__ = e32400;
var statearr_32401_33936 = state_32301;
(statearr_32401_33936[(2)] = ex__30813__auto__);


if(cljs.core.seq((state_32301[(4)]))){
var statearr_32402_33937 = state_32301;
(statearr_32402_33937[(1)] = cljs.core.first((state_32301[(4)])));

} else {
throw ex__30813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33939 = state_32301;
state_32301 = G__33939;
continue;
} else {
return ret_value__30811__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30810__auto__ = function(state_32301){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30810__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30810__auto____1.call(this,state_32301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30810__auto____0;
cljs$core$async$mix_$_state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30810__auto____1;
return cljs$core$async$mix_$_state_machine__30810__auto__;
})()
})();
var state__30995__auto__ = (function (){var statearr_32413 = f__30994__auto__();
(statearr_32413[(6)] = c__30993__auto___33837);

return statearr_32413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30995__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_33941 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_33941(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33943 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_33943(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33955 = (function() {
var G__33956 = null;
var G__33956__1 = (function (p){
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
var G__33956__2 = (function (p,v){
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
G__33956 = function(p,v){
switch(arguments.length){
case 1:
return G__33956__1.call(this,p);
case 2:
return G__33956__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33956.cljs$core$IFn$_invoke$arity$1 = G__33956__1;
G__33956.cljs$core$IFn$_invoke$arity$2 = G__33956__2;
return G__33956;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32434 = arguments.length;
switch (G__32434) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33955(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33955(p,v);
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
var G__32445 = arguments.length;
switch (G__32445) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32435_SHARP_){
if(cljs.core.truth_((p1__32435_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32435_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32435_SHARP_.call(null,topic)))){
return p1__32435_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32435_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32446 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32446 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32447){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32447 = meta32447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32448,meta32447__$1){
var self__ = this;
var _32448__$1 = this;
return (new cljs.core.async.t_cljs$core$async32446(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32447__$1));
}));

(cljs.core.async.t_cljs$core$async32446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32448){
var self__ = this;
var _32448__$1 = this;
return self__.meta32447;
}));

(cljs.core.async.t_cljs$core$async32446.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32446.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32446.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32446.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32446.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async32446.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32446.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32446.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32447","meta32447",-1051641260,null)], null);
}));

(cljs.core.async.t_cljs$core$async32446.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32446.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32446");

(cljs.core.async.t_cljs$core$async32446.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32446");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32446.
 */
cljs.core.async.__GT_t_cljs$core$async32446 = (function cljs$core$async$__GT_t_cljs$core$async32446(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32447){
return (new cljs.core.async.t_cljs$core$async32446(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32447));
});

}

return (new cljs.core.async.t_cljs$core$async32446(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30993__auto___34001 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30994__auto__ = (function (){var switch__30809__auto__ = (function (state_32539){
var state_val_32540 = (state_32539[(1)]);
if((state_val_32540 === (7))){
var inst_32535 = (state_32539[(2)]);
var state_32539__$1 = state_32539;
var statearr_32541_34014 = state_32539__$1;
(statearr_32541_34014[(2)] = inst_32535);

(statearr_32541_34014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (20))){
var state_32539__$1 = state_32539;
var statearr_32542_34020 = state_32539__$1;
(statearr_32542_34020[(2)] = null);

(statearr_32542_34020[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (1))){
var state_32539__$1 = state_32539;
var statearr_32546_34027 = state_32539__$1;
(statearr_32546_34027[(2)] = null);

(statearr_32546_34027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (24))){
var inst_32518 = (state_32539[(7)]);
var inst_32527 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32518);
var state_32539__$1 = state_32539;
var statearr_32550_34031 = state_32539__$1;
(statearr_32550_34031[(2)] = inst_32527);

(statearr_32550_34031[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (4))){
var inst_32460 = (state_32539[(8)]);
var inst_32460__$1 = (state_32539[(2)]);
var inst_32471 = (inst_32460__$1 == null);
var state_32539__$1 = (function (){var statearr_32551 = state_32539;
(statearr_32551[(8)] = inst_32460__$1);

return statearr_32551;
})();
if(cljs.core.truth_(inst_32471)){
var statearr_32552_34036 = state_32539__$1;
(statearr_32552_34036[(1)] = (5));

} else {
var statearr_32553_34037 = state_32539__$1;
(statearr_32553_34037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (15))){
var inst_32512 = (state_32539[(2)]);
var state_32539__$1 = state_32539;
var statearr_32554_34038 = state_32539__$1;
(statearr_32554_34038[(2)] = inst_32512);

(statearr_32554_34038[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (21))){
var inst_32532 = (state_32539[(2)]);
var state_32539__$1 = (function (){var statearr_32555 = state_32539;
(statearr_32555[(9)] = inst_32532);

return statearr_32555;
})();
var statearr_32556_34039 = state_32539__$1;
(statearr_32556_34039[(2)] = null);

(statearr_32556_34039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (13))){
var inst_32494 = (state_32539[(10)]);
var inst_32496 = cljs.core.chunked_seq_QMARK_(inst_32494);
var state_32539__$1 = state_32539;
if(inst_32496){
var statearr_32557_34044 = state_32539__$1;
(statearr_32557_34044[(1)] = (16));

} else {
var statearr_32558_34045 = state_32539__$1;
(statearr_32558_34045[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (22))){
var inst_32524 = (state_32539[(2)]);
var state_32539__$1 = state_32539;
if(cljs.core.truth_(inst_32524)){
var statearr_32559_34049 = state_32539__$1;
(statearr_32559_34049[(1)] = (23));

} else {
var statearr_32560_34050 = state_32539__$1;
(statearr_32560_34050[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (6))){
var inst_32460 = (state_32539[(8)]);
var inst_32518 = (state_32539[(7)]);
var inst_32520 = (state_32539[(11)]);
var inst_32518__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32460) : topic_fn.call(null,inst_32460));
var inst_32519 = cljs.core.deref(mults);
var inst_32520__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32519,inst_32518__$1);
var state_32539__$1 = (function (){var statearr_32561 = state_32539;
(statearr_32561[(7)] = inst_32518__$1);

(statearr_32561[(11)] = inst_32520__$1);

return statearr_32561;
})();
if(cljs.core.truth_(inst_32520__$1)){
var statearr_32562_34054 = state_32539__$1;
(statearr_32562_34054[(1)] = (19));

} else {
var statearr_32563_34055 = state_32539__$1;
(statearr_32563_34055[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (25))){
var inst_32529 = (state_32539[(2)]);
var state_32539__$1 = state_32539;
var statearr_32567_34056 = state_32539__$1;
(statearr_32567_34056[(2)] = inst_32529);

(statearr_32567_34056[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (17))){
var inst_32494 = (state_32539[(10)]);
var inst_32503 = cljs.core.first(inst_32494);
var inst_32504 = cljs.core.async.muxch_STAR_(inst_32503);
var inst_32505 = cljs.core.async.close_BANG_(inst_32504);
var inst_32506 = cljs.core.next(inst_32494);
var inst_32480 = inst_32506;
var inst_32481 = null;
var inst_32482 = (0);
var inst_32483 = (0);
var state_32539__$1 = (function (){var statearr_32568 = state_32539;
(statearr_32568[(12)] = inst_32483);

(statearr_32568[(13)] = inst_32482);

(statearr_32568[(14)] = inst_32480);

(statearr_32568[(15)] = inst_32481);

(statearr_32568[(16)] = inst_32505);

return statearr_32568;
})();
var statearr_32569_34057 = state_32539__$1;
(statearr_32569_34057[(2)] = null);

(statearr_32569_34057[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (3))){
var inst_32537 = (state_32539[(2)]);
var state_32539__$1 = state_32539;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32539__$1,inst_32537);
} else {
if((state_val_32540 === (12))){
var inst_32514 = (state_32539[(2)]);
var state_32539__$1 = state_32539;
var statearr_32570_34059 = state_32539__$1;
(statearr_32570_34059[(2)] = inst_32514);

(statearr_32570_34059[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (2))){
var state_32539__$1 = state_32539;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32539__$1,(4),ch);
} else {
if((state_val_32540 === (23))){
var state_32539__$1 = state_32539;
var statearr_32571_34060 = state_32539__$1;
(statearr_32571_34060[(2)] = null);

(statearr_32571_34060[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (19))){
var inst_32460 = (state_32539[(8)]);
var inst_32520 = (state_32539[(11)]);
var inst_32522 = cljs.core.async.muxch_STAR_(inst_32520);
var state_32539__$1 = state_32539;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32539__$1,(22),inst_32522,inst_32460);
} else {
if((state_val_32540 === (11))){
var inst_32494 = (state_32539[(10)]);
var inst_32480 = (state_32539[(14)]);
var inst_32494__$1 = cljs.core.seq(inst_32480);
var state_32539__$1 = (function (){var statearr_32572 = state_32539;
(statearr_32572[(10)] = inst_32494__$1);

return statearr_32572;
})();
if(inst_32494__$1){
var statearr_32573_34061 = state_32539__$1;
(statearr_32573_34061[(1)] = (13));

} else {
var statearr_32574_34062 = state_32539__$1;
(statearr_32574_34062[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (9))){
var inst_32516 = (state_32539[(2)]);
var state_32539__$1 = state_32539;
var statearr_32575_34063 = state_32539__$1;
(statearr_32575_34063[(2)] = inst_32516);

(statearr_32575_34063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (5))){
var inst_32477 = cljs.core.deref(mults);
var inst_32478 = cljs.core.vals(inst_32477);
var inst_32479 = cljs.core.seq(inst_32478);
var inst_32480 = inst_32479;
var inst_32481 = null;
var inst_32482 = (0);
var inst_32483 = (0);
var state_32539__$1 = (function (){var statearr_32576 = state_32539;
(statearr_32576[(12)] = inst_32483);

(statearr_32576[(13)] = inst_32482);

(statearr_32576[(14)] = inst_32480);

(statearr_32576[(15)] = inst_32481);

return statearr_32576;
})();
var statearr_32583_34064 = state_32539__$1;
(statearr_32583_34064[(2)] = null);

(statearr_32583_34064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (14))){
var state_32539__$1 = state_32539;
var statearr_32587_34065 = state_32539__$1;
(statearr_32587_34065[(2)] = null);

(statearr_32587_34065[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (16))){
var inst_32494 = (state_32539[(10)]);
var inst_32498 = cljs.core.chunk_first(inst_32494);
var inst_32499 = cljs.core.chunk_rest(inst_32494);
var inst_32500 = cljs.core.count(inst_32498);
var inst_32480 = inst_32499;
var inst_32481 = inst_32498;
var inst_32482 = inst_32500;
var inst_32483 = (0);
var state_32539__$1 = (function (){var statearr_32588 = state_32539;
(statearr_32588[(12)] = inst_32483);

(statearr_32588[(13)] = inst_32482);

(statearr_32588[(14)] = inst_32480);

(statearr_32588[(15)] = inst_32481);

return statearr_32588;
})();
var statearr_32589_34077 = state_32539__$1;
(statearr_32589_34077[(2)] = null);

(statearr_32589_34077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (10))){
var inst_32483 = (state_32539[(12)]);
var inst_32482 = (state_32539[(13)]);
var inst_32480 = (state_32539[(14)]);
var inst_32481 = (state_32539[(15)]);
var inst_32488 = cljs.core._nth(inst_32481,inst_32483);
var inst_32489 = cljs.core.async.muxch_STAR_(inst_32488);
var inst_32490 = cljs.core.async.close_BANG_(inst_32489);
var inst_32491 = (inst_32483 + (1));
var tmp32584 = inst_32482;
var tmp32585 = inst_32480;
var tmp32586 = inst_32481;
var inst_32480__$1 = tmp32585;
var inst_32481__$1 = tmp32586;
var inst_32482__$1 = tmp32584;
var inst_32483__$1 = inst_32491;
var state_32539__$1 = (function (){var statearr_32590 = state_32539;
(statearr_32590[(12)] = inst_32483__$1);

(statearr_32590[(13)] = inst_32482__$1);

(statearr_32590[(14)] = inst_32480__$1);

(statearr_32590[(15)] = inst_32481__$1);

(statearr_32590[(17)] = inst_32490);

return statearr_32590;
})();
var statearr_32591_34098 = state_32539__$1;
(statearr_32591_34098[(2)] = null);

(statearr_32591_34098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (18))){
var inst_32509 = (state_32539[(2)]);
var state_32539__$1 = state_32539;
var statearr_32592_34103 = state_32539__$1;
(statearr_32592_34103[(2)] = inst_32509);

(statearr_32592_34103[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32540 === (8))){
var inst_32483 = (state_32539[(12)]);
var inst_32482 = (state_32539[(13)]);
var inst_32485 = (inst_32483 < inst_32482);
var inst_32486 = inst_32485;
var state_32539__$1 = state_32539;
if(cljs.core.truth_(inst_32486)){
var statearr_32593_34104 = state_32539__$1;
(statearr_32593_34104[(1)] = (10));

} else {
var statearr_32594_34105 = state_32539__$1;
(statearr_32594_34105[(1)] = (11));

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
var cljs$core$async$state_machine__30810__auto__ = null;
var cljs$core$async$state_machine__30810__auto____0 = (function (){
var statearr_32598 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32598[(0)] = cljs$core$async$state_machine__30810__auto__);

(statearr_32598[(1)] = (1));

return statearr_32598;
});
var cljs$core$async$state_machine__30810__auto____1 = (function (state_32539){
while(true){
var ret_value__30811__auto__ = (function (){try{while(true){
var result__30812__auto__ = switch__30809__auto__(state_32539);
if(cljs.core.keyword_identical_QMARK_(result__30812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30812__auto__;
}
break;
}
}catch (e32599){var ex__30813__auto__ = e32599;
var statearr_32600_34106 = state_32539;
(statearr_32600_34106[(2)] = ex__30813__auto__);


if(cljs.core.seq((state_32539[(4)]))){
var statearr_32601_34107 = state_32539;
(statearr_32601_34107[(1)] = cljs.core.first((state_32539[(4)])));

} else {
throw ex__30813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34108 = state_32539;
state_32539 = G__34108;
continue;
} else {
return ret_value__30811__auto__;
}
break;
}
});
cljs$core$async$state_machine__30810__auto__ = function(state_32539){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30810__auto____1.call(this,state_32539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30810__auto____0;
cljs$core$async$state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30810__auto____1;
return cljs$core$async$state_machine__30810__auto__;
})()
})();
var state__30995__auto__ = (function (){var statearr_32602 = f__30994__auto__();
(statearr_32602[(6)] = c__30993__auto___34001);

return statearr_32602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30995__auto__);
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
var G__32604 = arguments.length;
switch (G__32604) {
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
var G__32606 = arguments.length;
switch (G__32606) {
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
var G__32608 = arguments.length;
switch (G__32608) {
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
var c__30993__auto___34158 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30994__auto__ = (function (){var switch__30809__auto__ = (function (state_32651){
var state_val_32652 = (state_32651[(1)]);
if((state_val_32652 === (7))){
var state_32651__$1 = state_32651;
var statearr_32653_34159 = state_32651__$1;
(statearr_32653_34159[(2)] = null);

(statearr_32653_34159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32652 === (1))){
var state_32651__$1 = state_32651;
var statearr_32654_34160 = state_32651__$1;
(statearr_32654_34160[(2)] = null);

(statearr_32654_34160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32652 === (4))){
var inst_32612 = (state_32651[(7)]);
var inst_32611 = (state_32651[(8)]);
var inst_32614 = (inst_32612 < inst_32611);
var state_32651__$1 = state_32651;
if(cljs.core.truth_(inst_32614)){
var statearr_32655_34174 = state_32651__$1;
(statearr_32655_34174[(1)] = (6));

} else {
var statearr_32656_34175 = state_32651__$1;
(statearr_32656_34175[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32652 === (15))){
var inst_32637 = (state_32651[(9)]);
var inst_32642 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32637);
var state_32651__$1 = state_32651;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32651__$1,(17),out,inst_32642);
} else {
if((state_val_32652 === (13))){
var inst_32637 = (state_32651[(9)]);
var inst_32637__$1 = (state_32651[(2)]);
var inst_32638 = cljs.core.some(cljs.core.nil_QMARK_,inst_32637__$1);
var state_32651__$1 = (function (){var statearr_32657 = state_32651;
(statearr_32657[(9)] = inst_32637__$1);

return statearr_32657;
})();
if(cljs.core.truth_(inst_32638)){
var statearr_32658_34176 = state_32651__$1;
(statearr_32658_34176[(1)] = (14));

} else {
var statearr_32659_34177 = state_32651__$1;
(statearr_32659_34177[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32652 === (6))){
var state_32651__$1 = state_32651;
var statearr_32660_34178 = state_32651__$1;
(statearr_32660_34178[(2)] = null);

(statearr_32660_34178[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32652 === (17))){
var inst_32644 = (state_32651[(2)]);
var state_32651__$1 = (function (){var statearr_32665 = state_32651;
(statearr_32665[(10)] = inst_32644);

return statearr_32665;
})();
var statearr_32666_34179 = state_32651__$1;
(statearr_32666_34179[(2)] = null);

(statearr_32666_34179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32652 === (3))){
var inst_32649 = (state_32651[(2)]);
var state_32651__$1 = state_32651;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32651__$1,inst_32649);
} else {
if((state_val_32652 === (12))){
var _ = (function (){var statearr_32667 = state_32651;
(statearr_32667[(4)] = cljs.core.rest((state_32651[(4)])));

return statearr_32667;
})();
var state_32651__$1 = state_32651;
var ex32664 = (state_32651__$1[(2)]);
var statearr_32668_34180 = state_32651__$1;
(statearr_32668_34180[(5)] = ex32664);


if((ex32664 instanceof Object)){
var statearr_32669_34181 = state_32651__$1;
(statearr_32669_34181[(1)] = (11));

(statearr_32669_34181[(5)] = null);

} else {
throw ex32664;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32652 === (2))){
var inst_32610 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32611 = cnt;
var inst_32612 = (0);
var state_32651__$1 = (function (){var statearr_32670 = state_32651;
(statearr_32670[(7)] = inst_32612);

(statearr_32670[(11)] = inst_32610);

(statearr_32670[(8)] = inst_32611);

return statearr_32670;
})();
var statearr_32672_34182 = state_32651__$1;
(statearr_32672_34182[(2)] = null);

(statearr_32672_34182[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32652 === (11))){
var inst_32616 = (state_32651[(2)]);
var inst_32617 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32651__$1 = (function (){var statearr_32673 = state_32651;
(statearr_32673[(12)] = inst_32616);

return statearr_32673;
})();
var statearr_32674_34192 = state_32651__$1;
(statearr_32674_34192[(2)] = inst_32617);

(statearr_32674_34192[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32652 === (9))){
var inst_32612 = (state_32651[(7)]);
var _ = (function (){var statearr_32675 = state_32651;
(statearr_32675[(4)] = cljs.core.cons((12),(state_32651[(4)])));

return statearr_32675;
})();
var inst_32623 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32612) : chs__$1.call(null,inst_32612));
var inst_32624 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32612) : done.call(null,inst_32612));
var inst_32625 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32623,inst_32624);
var ___$1 = (function (){var statearr_32676 = state_32651;
(statearr_32676[(4)] = cljs.core.rest((state_32651[(4)])));

return statearr_32676;
})();
var state_32651__$1 = state_32651;
var statearr_32677_34210 = state_32651__$1;
(statearr_32677_34210[(2)] = inst_32625);

(statearr_32677_34210[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32652 === (5))){
var inst_32635 = (state_32651[(2)]);
var state_32651__$1 = (function (){var statearr_32678 = state_32651;
(statearr_32678[(13)] = inst_32635);

return statearr_32678;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32651__$1,(13),dchan);
} else {
if((state_val_32652 === (14))){
var inst_32640 = cljs.core.async.close_BANG_(out);
var state_32651__$1 = state_32651;
var statearr_32679_34236 = state_32651__$1;
(statearr_32679_34236[(2)] = inst_32640);

(statearr_32679_34236[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32652 === (16))){
var inst_32647 = (state_32651[(2)]);
var state_32651__$1 = state_32651;
var statearr_32680_34237 = state_32651__$1;
(statearr_32680_34237[(2)] = inst_32647);

(statearr_32680_34237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32652 === (10))){
var inst_32612 = (state_32651[(7)]);
var inst_32628 = (state_32651[(2)]);
var inst_32629 = (inst_32612 + (1));
var inst_32612__$1 = inst_32629;
var state_32651__$1 = (function (){var statearr_32684 = state_32651;
(statearr_32684[(7)] = inst_32612__$1);

(statearr_32684[(14)] = inst_32628);

return statearr_32684;
})();
var statearr_32685_34238 = state_32651__$1;
(statearr_32685_34238[(2)] = null);

(statearr_32685_34238[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32652 === (8))){
var inst_32633 = (state_32651[(2)]);
var state_32651__$1 = state_32651;
var statearr_32686_34239 = state_32651__$1;
(statearr_32686_34239[(2)] = inst_32633);

(statearr_32686_34239[(1)] = (5));


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
var cljs$core$async$state_machine__30810__auto__ = null;
var cljs$core$async$state_machine__30810__auto____0 = (function (){
var statearr_32687 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32687[(0)] = cljs$core$async$state_machine__30810__auto__);

(statearr_32687[(1)] = (1));

return statearr_32687;
});
var cljs$core$async$state_machine__30810__auto____1 = (function (state_32651){
while(true){
var ret_value__30811__auto__ = (function (){try{while(true){
var result__30812__auto__ = switch__30809__auto__(state_32651);
if(cljs.core.keyword_identical_QMARK_(result__30812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30812__auto__;
}
break;
}
}catch (e32688){var ex__30813__auto__ = e32688;
var statearr_32689_34240 = state_32651;
(statearr_32689_34240[(2)] = ex__30813__auto__);


if(cljs.core.seq((state_32651[(4)]))){
var statearr_32690_34241 = state_32651;
(statearr_32690_34241[(1)] = cljs.core.first((state_32651[(4)])));

} else {
throw ex__30813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34242 = state_32651;
state_32651 = G__34242;
continue;
} else {
return ret_value__30811__auto__;
}
break;
}
});
cljs$core$async$state_machine__30810__auto__ = function(state_32651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30810__auto____1.call(this,state_32651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30810__auto____0;
cljs$core$async$state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30810__auto____1;
return cljs$core$async$state_machine__30810__auto__;
})()
})();
var state__30995__auto__ = (function (){var statearr_32691 = f__30994__auto__();
(statearr_32691[(6)] = c__30993__auto___34158);

return statearr_32691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30995__auto__);
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
var G__32696 = arguments.length;
switch (G__32696) {
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
var c__30993__auto___34244 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30994__auto__ = (function (){var switch__30809__auto__ = (function (state_32728){
var state_val_32729 = (state_32728[(1)]);
if((state_val_32729 === (7))){
var inst_32708 = (state_32728[(7)]);
var inst_32707 = (state_32728[(8)]);
var inst_32707__$1 = (state_32728[(2)]);
var inst_32708__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32707__$1,(0),null);
var inst_32709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32707__$1,(1),null);
var inst_32710 = (inst_32708__$1 == null);
var state_32728__$1 = (function (){var statearr_32733 = state_32728;
(statearr_32733[(7)] = inst_32708__$1);

(statearr_32733[(8)] = inst_32707__$1);

(statearr_32733[(9)] = inst_32709);

return statearr_32733;
})();
if(cljs.core.truth_(inst_32710)){
var statearr_32734_34246 = state_32728__$1;
(statearr_32734_34246[(1)] = (8));

} else {
var statearr_32735_34247 = state_32728__$1;
(statearr_32735_34247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32729 === (1))){
var inst_32697 = cljs.core.vec(chs);
var inst_32698 = inst_32697;
var state_32728__$1 = (function (){var statearr_32736 = state_32728;
(statearr_32736[(10)] = inst_32698);

return statearr_32736;
})();
var statearr_32737_34264 = state_32728__$1;
(statearr_32737_34264[(2)] = null);

(statearr_32737_34264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32729 === (4))){
var inst_32698 = (state_32728[(10)]);
var state_32728__$1 = state_32728;
return cljs.core.async.ioc_alts_BANG_(state_32728__$1,(7),inst_32698);
} else {
if((state_val_32729 === (6))){
var inst_32724 = (state_32728[(2)]);
var state_32728__$1 = state_32728;
var statearr_32738_34265 = state_32728__$1;
(statearr_32738_34265[(2)] = inst_32724);

(statearr_32738_34265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32729 === (3))){
var inst_32726 = (state_32728[(2)]);
var state_32728__$1 = state_32728;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32728__$1,inst_32726);
} else {
if((state_val_32729 === (2))){
var inst_32698 = (state_32728[(10)]);
var inst_32700 = cljs.core.count(inst_32698);
var inst_32701 = (inst_32700 > (0));
var state_32728__$1 = state_32728;
if(cljs.core.truth_(inst_32701)){
var statearr_32740_34266 = state_32728__$1;
(statearr_32740_34266[(1)] = (4));

} else {
var statearr_32741_34267 = state_32728__$1;
(statearr_32741_34267[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32729 === (11))){
var inst_32698 = (state_32728[(10)]);
var inst_32717 = (state_32728[(2)]);
var tmp32739 = inst_32698;
var inst_32698__$1 = tmp32739;
var state_32728__$1 = (function (){var statearr_32745 = state_32728;
(statearr_32745[(10)] = inst_32698__$1);

(statearr_32745[(11)] = inst_32717);

return statearr_32745;
})();
var statearr_32746_34269 = state_32728__$1;
(statearr_32746_34269[(2)] = null);

(statearr_32746_34269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32729 === (9))){
var inst_32708 = (state_32728[(7)]);
var state_32728__$1 = state_32728;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32728__$1,(11),out,inst_32708);
} else {
if((state_val_32729 === (5))){
var inst_32722 = cljs.core.async.close_BANG_(out);
var state_32728__$1 = state_32728;
var statearr_32748_34270 = state_32728__$1;
(statearr_32748_34270[(2)] = inst_32722);

(statearr_32748_34270[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32729 === (10))){
var inst_32720 = (state_32728[(2)]);
var state_32728__$1 = state_32728;
var statearr_32749_34271 = state_32728__$1;
(statearr_32749_34271[(2)] = inst_32720);

(statearr_32749_34271[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32729 === (8))){
var inst_32708 = (state_32728[(7)]);
var inst_32707 = (state_32728[(8)]);
var inst_32709 = (state_32728[(9)]);
var inst_32698 = (state_32728[(10)]);
var inst_32712 = (function (){var cs = inst_32698;
var vec__32703 = inst_32707;
var v = inst_32708;
var c = inst_32709;
return (function (p1__32694_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32694_SHARP_);
});
})();
var inst_32713 = cljs.core.filterv(inst_32712,inst_32698);
var inst_32698__$1 = inst_32713;
var state_32728__$1 = (function (){var statearr_32751 = state_32728;
(statearr_32751[(10)] = inst_32698__$1);

return statearr_32751;
})();
var statearr_32752_34277 = state_32728__$1;
(statearr_32752_34277[(2)] = null);

(statearr_32752_34277[(1)] = (2));


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
var cljs$core$async$state_machine__30810__auto__ = null;
var cljs$core$async$state_machine__30810__auto____0 = (function (){
var statearr_32757 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32757[(0)] = cljs$core$async$state_machine__30810__auto__);

(statearr_32757[(1)] = (1));

return statearr_32757;
});
var cljs$core$async$state_machine__30810__auto____1 = (function (state_32728){
while(true){
var ret_value__30811__auto__ = (function (){try{while(true){
var result__30812__auto__ = switch__30809__auto__(state_32728);
if(cljs.core.keyword_identical_QMARK_(result__30812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30812__auto__;
}
break;
}
}catch (e32758){var ex__30813__auto__ = e32758;
var statearr_32759_34278 = state_32728;
(statearr_32759_34278[(2)] = ex__30813__auto__);


if(cljs.core.seq((state_32728[(4)]))){
var statearr_32760_34279 = state_32728;
(statearr_32760_34279[(1)] = cljs.core.first((state_32728[(4)])));

} else {
throw ex__30813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34280 = state_32728;
state_32728 = G__34280;
continue;
} else {
return ret_value__30811__auto__;
}
break;
}
});
cljs$core$async$state_machine__30810__auto__ = function(state_32728){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30810__auto____1.call(this,state_32728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30810__auto____0;
cljs$core$async$state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30810__auto____1;
return cljs$core$async$state_machine__30810__auto__;
})()
})();
var state__30995__auto__ = (function (){var statearr_32761 = f__30994__auto__();
(statearr_32761[(6)] = c__30993__auto___34244);

return statearr_32761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30995__auto__);
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
var G__32770 = arguments.length;
switch (G__32770) {
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
var c__30993__auto___34282 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30994__auto__ = (function (){var switch__30809__auto__ = (function (state_32812){
var state_val_32813 = (state_32812[(1)]);
if((state_val_32813 === (7))){
var inst_32794 = (state_32812[(7)]);
var inst_32794__$1 = (state_32812[(2)]);
var inst_32795 = (inst_32794__$1 == null);
var inst_32796 = cljs.core.not(inst_32795);
var state_32812__$1 = (function (){var statearr_32814 = state_32812;
(statearr_32814[(7)] = inst_32794__$1);

return statearr_32814;
})();
if(inst_32796){
var statearr_32815_34283 = state_32812__$1;
(statearr_32815_34283[(1)] = (8));

} else {
var statearr_32816_34284 = state_32812__$1;
(statearr_32816_34284[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32813 === (1))){
var inst_32785 = (0);
var state_32812__$1 = (function (){var statearr_32817 = state_32812;
(statearr_32817[(8)] = inst_32785);

return statearr_32817;
})();
var statearr_32822_34285 = state_32812__$1;
(statearr_32822_34285[(2)] = null);

(statearr_32822_34285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32813 === (4))){
var state_32812__$1 = state_32812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32812__$1,(7),ch);
} else {
if((state_val_32813 === (6))){
var inst_32807 = (state_32812[(2)]);
var state_32812__$1 = state_32812;
var statearr_32845_34286 = state_32812__$1;
(statearr_32845_34286[(2)] = inst_32807);

(statearr_32845_34286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32813 === (3))){
var inst_32809 = (state_32812[(2)]);
var inst_32810 = cljs.core.async.close_BANG_(out);
var state_32812__$1 = (function (){var statearr_32846 = state_32812;
(statearr_32846[(9)] = inst_32809);

return statearr_32846;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32812__$1,inst_32810);
} else {
if((state_val_32813 === (2))){
var inst_32785 = (state_32812[(8)]);
var inst_32791 = (inst_32785 < n);
var state_32812__$1 = state_32812;
if(cljs.core.truth_(inst_32791)){
var statearr_32847_34287 = state_32812__$1;
(statearr_32847_34287[(1)] = (4));

} else {
var statearr_32848_34288 = state_32812__$1;
(statearr_32848_34288[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32813 === (11))){
var inst_32785 = (state_32812[(8)]);
var inst_32799 = (state_32812[(2)]);
var inst_32800 = (inst_32785 + (1));
var inst_32785__$1 = inst_32800;
var state_32812__$1 = (function (){var statearr_32849 = state_32812;
(statearr_32849[(8)] = inst_32785__$1);

(statearr_32849[(10)] = inst_32799);

return statearr_32849;
})();
var statearr_32850_34289 = state_32812__$1;
(statearr_32850_34289[(2)] = null);

(statearr_32850_34289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32813 === (9))){
var state_32812__$1 = state_32812;
var statearr_32851_34290 = state_32812__$1;
(statearr_32851_34290[(2)] = null);

(statearr_32851_34290[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32813 === (5))){
var state_32812__$1 = state_32812;
var statearr_32852_34291 = state_32812__$1;
(statearr_32852_34291[(2)] = null);

(statearr_32852_34291[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32813 === (10))){
var inst_32804 = (state_32812[(2)]);
var state_32812__$1 = state_32812;
var statearr_32853_34293 = state_32812__$1;
(statearr_32853_34293[(2)] = inst_32804);

(statearr_32853_34293[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32813 === (8))){
var inst_32794 = (state_32812[(7)]);
var state_32812__$1 = state_32812;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32812__$1,(11),out,inst_32794);
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
var cljs$core$async$state_machine__30810__auto__ = null;
var cljs$core$async$state_machine__30810__auto____0 = (function (){
var statearr_32854 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32854[(0)] = cljs$core$async$state_machine__30810__auto__);

(statearr_32854[(1)] = (1));

return statearr_32854;
});
var cljs$core$async$state_machine__30810__auto____1 = (function (state_32812){
while(true){
var ret_value__30811__auto__ = (function (){try{while(true){
var result__30812__auto__ = switch__30809__auto__(state_32812);
if(cljs.core.keyword_identical_QMARK_(result__30812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30812__auto__;
}
break;
}
}catch (e32855){var ex__30813__auto__ = e32855;
var statearr_32856_34294 = state_32812;
(statearr_32856_34294[(2)] = ex__30813__auto__);


if(cljs.core.seq((state_32812[(4)]))){
var statearr_32858_34295 = state_32812;
(statearr_32858_34295[(1)] = cljs.core.first((state_32812[(4)])));

} else {
throw ex__30813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34296 = state_32812;
state_32812 = G__34296;
continue;
} else {
return ret_value__30811__auto__;
}
break;
}
});
cljs$core$async$state_machine__30810__auto__ = function(state_32812){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30810__auto____1.call(this,state_32812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30810__auto____0;
cljs$core$async$state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30810__auto____1;
return cljs$core$async$state_machine__30810__auto__;
})()
})();
var state__30995__auto__ = (function (){var statearr_32859 = f__30994__auto__();
(statearr_32859[(6)] = c__30993__auto___34282);

return statearr_32859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30995__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32861 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32861 = (function (f,ch,meta32862){
this.f = f;
this.ch = ch;
this.meta32862 = meta32862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32863,meta32862__$1){
var self__ = this;
var _32863__$1 = this;
return (new cljs.core.async.t_cljs$core$async32861(self__.f,self__.ch,meta32862__$1));
}));

(cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32863){
var self__ = this;
var _32863__$1 = this;
return self__.meta32862;
}));

(cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32872 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32872 = (function (f,ch,meta32862,_,fn1,meta32873){
this.f = f;
this.ch = ch;
this.meta32862 = meta32862;
this._ = _;
this.fn1 = fn1;
this.meta32873 = meta32873;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32874,meta32873__$1){
var self__ = this;
var _32874__$1 = this;
return (new cljs.core.async.t_cljs$core$async32872(self__.f,self__.ch,self__.meta32862,self__._,self__.fn1,meta32873__$1));
}));

(cljs.core.async.t_cljs$core$async32872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32874){
var self__ = this;
var _32874__$1 = this;
return self__.meta32873;
}));

(cljs.core.async.t_cljs$core$async32872.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32872.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32872.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32872.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32860_SHARP_){
var G__32875 = (((p1__32860_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32860_SHARP_) : self__.f.call(null,p1__32860_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32875) : f1.call(null,G__32875));
});
}));

(cljs.core.async.t_cljs$core$async32872.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32862","meta32862",-475497724,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32861","cljs.core.async/t_cljs$core$async32861",1699761153,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32873","meta32873",-390423625,null)], null);
}));

(cljs.core.async.t_cljs$core$async32872.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32872.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32872");

(cljs.core.async.t_cljs$core$async32872.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32872");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32872.
 */
cljs.core.async.__GT_t_cljs$core$async32872 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32872(f__$1,ch__$1,meta32862__$1,___$2,fn1__$1,meta32873){
return (new cljs.core.async.t_cljs$core$async32872(f__$1,ch__$1,meta32862__$1,___$2,fn1__$1,meta32873));
});

}

return (new cljs.core.async.t_cljs$core$async32872(self__.f,self__.ch,self__.meta32862,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32880 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32880) : self__.f.call(null,G__32880));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32861.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32861.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32862","meta32862",-475497724,null)], null);
}));

(cljs.core.async.t_cljs$core$async32861.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32861.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32861");

(cljs.core.async.t_cljs$core$async32861.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32861");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32861.
 */
cljs.core.async.__GT_t_cljs$core$async32861 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32861(f__$1,ch__$1,meta32862){
return (new cljs.core.async.t_cljs$core$async32861(f__$1,ch__$1,meta32862));
});

}

return (new cljs.core.async.t_cljs$core$async32861(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32881 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32881 = (function (f,ch,meta32882){
this.f = f;
this.ch = ch;
this.meta32882 = meta32882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32883,meta32882__$1){
var self__ = this;
var _32883__$1 = this;
return (new cljs.core.async.t_cljs$core$async32881(self__.f,self__.ch,meta32882__$1));
}));

(cljs.core.async.t_cljs$core$async32881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32883){
var self__ = this;
var _32883__$1 = this;
return self__.meta32882;
}));

(cljs.core.async.t_cljs$core$async32881.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32881.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32881.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32881.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32881.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32881.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32881.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32882","meta32882",-802387854,null)], null);
}));

(cljs.core.async.t_cljs$core$async32881.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32881.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32881");

(cljs.core.async.t_cljs$core$async32881.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32881");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32881.
 */
cljs.core.async.__GT_t_cljs$core$async32881 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32881(f__$1,ch__$1,meta32882){
return (new cljs.core.async.t_cljs$core$async32881(f__$1,ch__$1,meta32882));
});

}

return (new cljs.core.async.t_cljs$core$async32881(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32889 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32889 = (function (p,ch,meta32890){
this.p = p;
this.ch = ch;
this.meta32890 = meta32890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32891,meta32890__$1){
var self__ = this;
var _32891__$1 = this;
return (new cljs.core.async.t_cljs$core$async32889(self__.p,self__.ch,meta32890__$1));
}));

(cljs.core.async.t_cljs$core$async32889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32891){
var self__ = this;
var _32891__$1 = this;
return self__.meta32890;
}));

(cljs.core.async.t_cljs$core$async32889.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32889.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32889.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32889.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32889.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32889.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32889.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32889.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32890","meta32890",-672378682,null)], null);
}));

(cljs.core.async.t_cljs$core$async32889.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32889.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32889");

(cljs.core.async.t_cljs$core$async32889.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32889");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32889.
 */
cljs.core.async.__GT_t_cljs$core$async32889 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32889(p__$1,ch__$1,meta32890){
return (new cljs.core.async.t_cljs$core$async32889(p__$1,ch__$1,meta32890));
});

}

return (new cljs.core.async.t_cljs$core$async32889(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32896 = arguments.length;
switch (G__32896) {
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
var c__30993__auto___34320 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30994__auto__ = (function (){var switch__30809__auto__ = (function (state_32918){
var state_val_32919 = (state_32918[(1)]);
if((state_val_32919 === (7))){
var inst_32914 = (state_32918[(2)]);
var state_32918__$1 = state_32918;
var statearr_32920_34322 = state_32918__$1;
(statearr_32920_34322[(2)] = inst_32914);

(statearr_32920_34322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (1))){
var state_32918__$1 = state_32918;
var statearr_32921_34329 = state_32918__$1;
(statearr_32921_34329[(2)] = null);

(statearr_32921_34329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (4))){
var inst_32900 = (state_32918[(7)]);
var inst_32900__$1 = (state_32918[(2)]);
var inst_32901 = (inst_32900__$1 == null);
var state_32918__$1 = (function (){var statearr_32922 = state_32918;
(statearr_32922[(7)] = inst_32900__$1);

return statearr_32922;
})();
if(cljs.core.truth_(inst_32901)){
var statearr_32923_34345 = state_32918__$1;
(statearr_32923_34345[(1)] = (5));

} else {
var statearr_32924_34346 = state_32918__$1;
(statearr_32924_34346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (6))){
var inst_32900 = (state_32918[(7)]);
var inst_32905 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32900) : p.call(null,inst_32900));
var state_32918__$1 = state_32918;
if(cljs.core.truth_(inst_32905)){
var statearr_32925_34353 = state_32918__$1;
(statearr_32925_34353[(1)] = (8));

} else {
var statearr_32926_34355 = state_32918__$1;
(statearr_32926_34355[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (3))){
var inst_32916 = (state_32918[(2)]);
var state_32918__$1 = state_32918;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32918__$1,inst_32916);
} else {
if((state_val_32919 === (2))){
var state_32918__$1 = state_32918;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32918__$1,(4),ch);
} else {
if((state_val_32919 === (11))){
var inst_32908 = (state_32918[(2)]);
var state_32918__$1 = state_32918;
var statearr_32928_34365 = state_32918__$1;
(statearr_32928_34365[(2)] = inst_32908);

(statearr_32928_34365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (9))){
var state_32918__$1 = state_32918;
var statearr_32929_34372 = state_32918__$1;
(statearr_32929_34372[(2)] = null);

(statearr_32929_34372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (5))){
var inst_32903 = cljs.core.async.close_BANG_(out);
var state_32918__$1 = state_32918;
var statearr_32930_34378 = state_32918__$1;
(statearr_32930_34378[(2)] = inst_32903);

(statearr_32930_34378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (10))){
var inst_32911 = (state_32918[(2)]);
var state_32918__$1 = (function (){var statearr_32932 = state_32918;
(statearr_32932[(8)] = inst_32911);

return statearr_32932;
})();
var statearr_32933_34387 = state_32918__$1;
(statearr_32933_34387[(2)] = null);

(statearr_32933_34387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32919 === (8))){
var inst_32900 = (state_32918[(7)]);
var state_32918__$1 = state_32918;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32918__$1,(11),out,inst_32900);
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
var cljs$core$async$state_machine__30810__auto__ = null;
var cljs$core$async$state_machine__30810__auto____0 = (function (){
var statearr_32935 = [null,null,null,null,null,null,null,null,null];
(statearr_32935[(0)] = cljs$core$async$state_machine__30810__auto__);

(statearr_32935[(1)] = (1));

return statearr_32935;
});
var cljs$core$async$state_machine__30810__auto____1 = (function (state_32918){
while(true){
var ret_value__30811__auto__ = (function (){try{while(true){
var result__30812__auto__ = switch__30809__auto__(state_32918);
if(cljs.core.keyword_identical_QMARK_(result__30812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30812__auto__;
}
break;
}
}catch (e32936){var ex__30813__auto__ = e32936;
var statearr_32937_34401 = state_32918;
(statearr_32937_34401[(2)] = ex__30813__auto__);


if(cljs.core.seq((state_32918[(4)]))){
var statearr_32938_34403 = state_32918;
(statearr_32938_34403[(1)] = cljs.core.first((state_32918[(4)])));

} else {
throw ex__30813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34410 = state_32918;
state_32918 = G__34410;
continue;
} else {
return ret_value__30811__auto__;
}
break;
}
});
cljs$core$async$state_machine__30810__auto__ = function(state_32918){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30810__auto____1.call(this,state_32918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30810__auto____0;
cljs$core$async$state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30810__auto____1;
return cljs$core$async$state_machine__30810__auto__;
})()
})();
var state__30995__auto__ = (function (){var statearr_32939 = f__30994__auto__();
(statearr_32939[(6)] = c__30993__auto___34320);

return statearr_32939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30995__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32941 = arguments.length;
switch (G__32941) {
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
var c__30993__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30994__auto__ = (function (){var switch__30809__auto__ = (function (state_33009){
var state_val_33010 = (state_33009[(1)]);
if((state_val_33010 === (7))){
var inst_33005 = (state_33009[(2)]);
var state_33009__$1 = state_33009;
var statearr_33011_34443 = state_33009__$1;
(statearr_33011_34443[(2)] = inst_33005);

(statearr_33011_34443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (20))){
var inst_32975 = (state_33009[(7)]);
var inst_32986 = (state_33009[(2)]);
var inst_32987 = cljs.core.next(inst_32975);
var inst_32961 = inst_32987;
var inst_32962 = null;
var inst_32963 = (0);
var inst_32964 = (0);
var state_33009__$1 = (function (){var statearr_33013 = state_33009;
(statearr_33013[(8)] = inst_32964);

(statearr_33013[(9)] = inst_32986);

(statearr_33013[(10)] = inst_32961);

(statearr_33013[(11)] = inst_32963);

(statearr_33013[(12)] = inst_32962);

return statearr_33013;
})();
var statearr_33014_34444 = state_33009__$1;
(statearr_33014_34444[(2)] = null);

(statearr_33014_34444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (1))){
var state_33009__$1 = state_33009;
var statearr_33015_34447 = state_33009__$1;
(statearr_33015_34447[(2)] = null);

(statearr_33015_34447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (4))){
var inst_32950 = (state_33009[(13)]);
var inst_32950__$1 = (state_33009[(2)]);
var inst_32951 = (inst_32950__$1 == null);
var state_33009__$1 = (function (){var statearr_33016 = state_33009;
(statearr_33016[(13)] = inst_32950__$1);

return statearr_33016;
})();
if(cljs.core.truth_(inst_32951)){
var statearr_33017_34449 = state_33009__$1;
(statearr_33017_34449[(1)] = (5));

} else {
var statearr_33018_34450 = state_33009__$1;
(statearr_33018_34450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (15))){
var state_33009__$1 = state_33009;
var statearr_33022_34452 = state_33009__$1;
(statearr_33022_34452[(2)] = null);

(statearr_33022_34452[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (21))){
var state_33009__$1 = state_33009;
var statearr_33023_34453 = state_33009__$1;
(statearr_33023_34453[(2)] = null);

(statearr_33023_34453[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (13))){
var inst_32964 = (state_33009[(8)]);
var inst_32961 = (state_33009[(10)]);
var inst_32963 = (state_33009[(11)]);
var inst_32962 = (state_33009[(12)]);
var inst_32971 = (state_33009[(2)]);
var inst_32972 = (inst_32964 + (1));
var tmp33019 = inst_32961;
var tmp33020 = inst_32963;
var tmp33021 = inst_32962;
var inst_32961__$1 = tmp33019;
var inst_32962__$1 = tmp33021;
var inst_32963__$1 = tmp33020;
var inst_32964__$1 = inst_32972;
var state_33009__$1 = (function (){var statearr_33024 = state_33009;
(statearr_33024[(8)] = inst_32964__$1);

(statearr_33024[(10)] = inst_32961__$1);

(statearr_33024[(11)] = inst_32963__$1);

(statearr_33024[(14)] = inst_32971);

(statearr_33024[(12)] = inst_32962__$1);

return statearr_33024;
})();
var statearr_33025_34455 = state_33009__$1;
(statearr_33025_34455[(2)] = null);

(statearr_33025_34455[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (22))){
var state_33009__$1 = state_33009;
var statearr_33026_34456 = state_33009__$1;
(statearr_33026_34456[(2)] = null);

(statearr_33026_34456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (6))){
var inst_32950 = (state_33009[(13)]);
var inst_32959 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32950) : f.call(null,inst_32950));
var inst_32960 = cljs.core.seq(inst_32959);
var inst_32961 = inst_32960;
var inst_32962 = null;
var inst_32963 = (0);
var inst_32964 = (0);
var state_33009__$1 = (function (){var statearr_33027 = state_33009;
(statearr_33027[(8)] = inst_32964);

(statearr_33027[(10)] = inst_32961);

(statearr_33027[(11)] = inst_32963);

(statearr_33027[(12)] = inst_32962);

return statearr_33027;
})();
var statearr_33028_34458 = state_33009__$1;
(statearr_33028_34458[(2)] = null);

(statearr_33028_34458[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (17))){
var inst_32975 = (state_33009[(7)]);
var inst_32979 = cljs.core.chunk_first(inst_32975);
var inst_32980 = cljs.core.chunk_rest(inst_32975);
var inst_32981 = cljs.core.count(inst_32979);
var inst_32961 = inst_32980;
var inst_32962 = inst_32979;
var inst_32963 = inst_32981;
var inst_32964 = (0);
var state_33009__$1 = (function (){var statearr_33029 = state_33009;
(statearr_33029[(8)] = inst_32964);

(statearr_33029[(10)] = inst_32961);

(statearr_33029[(11)] = inst_32963);

(statearr_33029[(12)] = inst_32962);

return statearr_33029;
})();
var statearr_33030_34461 = state_33009__$1;
(statearr_33030_34461[(2)] = null);

(statearr_33030_34461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (3))){
var inst_33007 = (state_33009[(2)]);
var state_33009__$1 = state_33009;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33009__$1,inst_33007);
} else {
if((state_val_33010 === (12))){
var inst_32995 = (state_33009[(2)]);
var state_33009__$1 = state_33009;
var statearr_33031_34463 = state_33009__$1;
(statearr_33031_34463[(2)] = inst_32995);

(statearr_33031_34463[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (2))){
var state_33009__$1 = state_33009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33009__$1,(4),in$);
} else {
if((state_val_33010 === (23))){
var inst_33003 = (state_33009[(2)]);
var state_33009__$1 = state_33009;
var statearr_33032_34464 = state_33009__$1;
(statearr_33032_34464[(2)] = inst_33003);

(statearr_33032_34464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (19))){
var inst_32990 = (state_33009[(2)]);
var state_33009__$1 = state_33009;
var statearr_33033_34465 = state_33009__$1;
(statearr_33033_34465[(2)] = inst_32990);

(statearr_33033_34465[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (11))){
var inst_32961 = (state_33009[(10)]);
var inst_32975 = (state_33009[(7)]);
var inst_32975__$1 = cljs.core.seq(inst_32961);
var state_33009__$1 = (function (){var statearr_33034 = state_33009;
(statearr_33034[(7)] = inst_32975__$1);

return statearr_33034;
})();
if(inst_32975__$1){
var statearr_33035_34466 = state_33009__$1;
(statearr_33035_34466[(1)] = (14));

} else {
var statearr_33036_34467 = state_33009__$1;
(statearr_33036_34467[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (9))){
var inst_32997 = (state_33009[(2)]);
var inst_32998 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33009__$1 = (function (){var statearr_33037 = state_33009;
(statearr_33037[(15)] = inst_32997);

return statearr_33037;
})();
if(cljs.core.truth_(inst_32998)){
var statearr_33038_34468 = state_33009__$1;
(statearr_33038_34468[(1)] = (21));

} else {
var statearr_33039_34469 = state_33009__$1;
(statearr_33039_34469[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (5))){
var inst_32953 = cljs.core.async.close_BANG_(out);
var state_33009__$1 = state_33009;
var statearr_33040_34470 = state_33009__$1;
(statearr_33040_34470[(2)] = inst_32953);

(statearr_33040_34470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (14))){
var inst_32975 = (state_33009[(7)]);
var inst_32977 = cljs.core.chunked_seq_QMARK_(inst_32975);
var state_33009__$1 = state_33009;
if(inst_32977){
var statearr_33041_34471 = state_33009__$1;
(statearr_33041_34471[(1)] = (17));

} else {
var statearr_33042_34472 = state_33009__$1;
(statearr_33042_34472[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (16))){
var inst_32993 = (state_33009[(2)]);
var state_33009__$1 = state_33009;
var statearr_33043_34473 = state_33009__$1;
(statearr_33043_34473[(2)] = inst_32993);

(statearr_33043_34473[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (10))){
var inst_32964 = (state_33009[(8)]);
var inst_32962 = (state_33009[(12)]);
var inst_32969 = cljs.core._nth(inst_32962,inst_32964);
var state_33009__$1 = state_33009;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33009__$1,(13),out,inst_32969);
} else {
if((state_val_33010 === (18))){
var inst_32975 = (state_33009[(7)]);
var inst_32984 = cljs.core.first(inst_32975);
var state_33009__$1 = state_33009;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33009__$1,(20),out,inst_32984);
} else {
if((state_val_33010 === (8))){
var inst_32964 = (state_33009[(8)]);
var inst_32963 = (state_33009[(11)]);
var inst_32966 = (inst_32964 < inst_32963);
var inst_32967 = inst_32966;
var state_33009__$1 = state_33009;
if(cljs.core.truth_(inst_32967)){
var statearr_33044_34474 = state_33009__$1;
(statearr_33044_34474[(1)] = (10));

} else {
var statearr_33045_34475 = state_33009__$1;
(statearr_33045_34475[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__30810__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30810__auto____0 = (function (){
var statearr_33046 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33046[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30810__auto__);

(statearr_33046[(1)] = (1));

return statearr_33046;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30810__auto____1 = (function (state_33009){
while(true){
var ret_value__30811__auto__ = (function (){try{while(true){
var result__30812__auto__ = switch__30809__auto__(state_33009);
if(cljs.core.keyword_identical_QMARK_(result__30812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30812__auto__;
}
break;
}
}catch (e33047){var ex__30813__auto__ = e33047;
var statearr_33048_34476 = state_33009;
(statearr_33048_34476[(2)] = ex__30813__auto__);


if(cljs.core.seq((state_33009[(4)]))){
var statearr_33049_34477 = state_33009;
(statearr_33049_34477[(1)] = cljs.core.first((state_33009[(4)])));

} else {
throw ex__30813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34478 = state_33009;
state_33009 = G__34478;
continue;
} else {
return ret_value__30811__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30810__auto__ = function(state_33009){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30810__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30810__auto____1.call(this,state_33009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30810__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30810__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30810__auto__;
})()
})();
var state__30995__auto__ = (function (){var statearr_33050 = f__30994__auto__();
(statearr_33050[(6)] = c__30993__auto__);

return statearr_33050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30995__auto__);
}));

return c__30993__auto__;
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
var c__30993__auto___34482 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30994__auto__ = (function (){var switch__30809__auto__ = (function (state_33080){
var state_val_33081 = (state_33080[(1)]);
if((state_val_33081 === (7))){
var inst_33075 = (state_33080[(2)]);
var state_33080__$1 = state_33080;
var statearr_33082_34483 = state_33080__$1;
(statearr_33082_34483[(2)] = inst_33075);

(statearr_33082_34483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (1))){
var inst_33057 = null;
var state_33080__$1 = (function (){var statearr_33083 = state_33080;
(statearr_33083[(7)] = inst_33057);

return statearr_33083;
})();
var statearr_33084_34484 = state_33080__$1;
(statearr_33084_34484[(2)] = null);

(statearr_33084_34484[(1)] = (2));


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
var statearr_33086_34485 = state_33080__$1;
(statearr_33086_34485[(1)] = (5));

} else {
var statearr_33087_34486 = state_33080__$1;
(statearr_33087_34486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (6))){
var state_33080__$1 = state_33080;
var statearr_33088_34487 = state_33080__$1;
(statearr_33088_34487[(2)] = null);

(statearr_33088_34487[(1)] = (7));


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
var statearr_33091_34496 = state_33080__$1;
(statearr_33091_34496[(2)] = null);

(statearr_33091_34496[(1)] = (2));


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
var statearr_33093_34499 = state_33080__$1;
(statearr_33093_34499[(1)] = (8));

} else {
var statearr_33094_34500 = state_33080__$1;
(statearr_33094_34500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33081 === (10))){
var inst_33072 = (state_33080[(2)]);
var state_33080__$1 = state_33080;
var statearr_33095_34501 = state_33080__$1;
(statearr_33095_34501[(2)] = inst_33072);

(statearr_33095_34501[(1)] = (7));


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
var statearr_33097_34502 = state_33080__$1;
(statearr_33097_34502[(2)] = null);

(statearr_33097_34502[(1)] = (2));


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
var cljs$core$async$state_machine__30810__auto__ = null;
var cljs$core$async$state_machine__30810__auto____0 = (function (){
var statearr_33098 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33098[(0)] = cljs$core$async$state_machine__30810__auto__);

(statearr_33098[(1)] = (1));

return statearr_33098;
});
var cljs$core$async$state_machine__30810__auto____1 = (function (state_33080){
while(true){
var ret_value__30811__auto__ = (function (){try{while(true){
var result__30812__auto__ = switch__30809__auto__(state_33080);
if(cljs.core.keyword_identical_QMARK_(result__30812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30812__auto__;
}
break;
}
}catch (e33099){var ex__30813__auto__ = e33099;
var statearr_33100_34503 = state_33080;
(statearr_33100_34503[(2)] = ex__30813__auto__);


if(cljs.core.seq((state_33080[(4)]))){
var statearr_33101_34512 = state_33080;
(statearr_33101_34512[(1)] = cljs.core.first((state_33080[(4)])));

} else {
throw ex__30813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34514 = state_33080;
state_33080 = G__34514;
continue;
} else {
return ret_value__30811__auto__;
}
break;
}
});
cljs$core$async$state_machine__30810__auto__ = function(state_33080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30810__auto____1.call(this,state_33080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30810__auto____0;
cljs$core$async$state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30810__auto____1;
return cljs$core$async$state_machine__30810__auto__;
})()
})();
var state__30995__auto__ = (function (){var statearr_33102 = f__30994__auto__();
(statearr_33102[(6)] = c__30993__auto___34482);

return statearr_33102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30995__auto__);
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
var c__30993__auto___34525 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30994__auto__ = (function (){var switch__30809__auto__ = (function (state_33142){
var state_val_33143 = (state_33142[(1)]);
if((state_val_33143 === (7))){
var inst_33138 = (state_33142[(2)]);
var state_33142__$1 = state_33142;
var statearr_33144_34528 = state_33142__$1;
(statearr_33144_34528[(2)] = inst_33138);

(statearr_33144_34528[(1)] = (3));


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
var statearr_33146_34531 = state_33142__$1;
(statearr_33146_34531[(2)] = null);

(statearr_33146_34531[(1)] = (2));


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
var statearr_33148_34532 = state_33142__$1;
(statearr_33148_34532[(1)] = (5));

} else {
var statearr_33149_34533 = state_33142__$1;
(statearr_33149_34533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (15))){
var inst_33132 = (state_33142[(2)]);
var state_33142__$1 = state_33142;
var statearr_33150_34549 = state_33142__$1;
(statearr_33150_34549[(2)] = inst_33132);

(statearr_33150_34549[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (13))){
var state_33142__$1 = state_33142;
var statearr_33151_34550 = state_33142__$1;
(statearr_33151_34550[(2)] = null);

(statearr_33151_34550[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (6))){
var inst_33107 = (state_33142[(8)]);
var inst_33128 = (inst_33107 > (0));
var state_33142__$1 = state_33142;
if(cljs.core.truth_(inst_33128)){
var statearr_33152_34551 = state_33142__$1;
(statearr_33152_34551[(1)] = (12));

} else {
var statearr_33153_34552 = state_33142__$1;
(statearr_33153_34552[(1)] = (13));

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
var statearr_33155_34553 = state_33142__$1;
(statearr_33155_34553[(2)] = null);

(statearr_33155_34553[(1)] = (2));


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
var statearr_33157_34554 = state_33142__$1;
(statearr_33157_34554[(1)] = (8));

} else {
var statearr_33158_34555 = state_33142__$1;
(statearr_33158_34555[(1)] = (9));

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
var statearr_33161_34557 = state_33142__$1;
(statearr_33161_34557[(2)] = inst_33136);

(statearr_33161_34557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33143 === (10))){
var inst_33126 = (state_33142[(2)]);
var state_33142__$1 = state_33142;
var statearr_33162_34558 = state_33142__$1;
(statearr_33162_34558[(2)] = inst_33126);

(statearr_33162_34558[(1)] = (7));


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
var statearr_33164_34567 = state_33142__$1;
(statearr_33164_34567[(2)] = null);

(statearr_33164_34567[(1)] = (2));


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
var cljs$core$async$state_machine__30810__auto__ = null;
var cljs$core$async$state_machine__30810__auto____0 = (function (){
var statearr_33165 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33165[(0)] = cljs$core$async$state_machine__30810__auto__);

(statearr_33165[(1)] = (1));

return statearr_33165;
});
var cljs$core$async$state_machine__30810__auto____1 = (function (state_33142){
while(true){
var ret_value__30811__auto__ = (function (){try{while(true){
var result__30812__auto__ = switch__30809__auto__(state_33142);
if(cljs.core.keyword_identical_QMARK_(result__30812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30812__auto__;
}
break;
}
}catch (e33166){var ex__30813__auto__ = e33166;
var statearr_33167_34569 = state_33142;
(statearr_33167_34569[(2)] = ex__30813__auto__);


if(cljs.core.seq((state_33142[(4)]))){
var statearr_33168_34570 = state_33142;
(statearr_33168_34570[(1)] = cljs.core.first((state_33142[(4)])));

} else {
throw ex__30813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34571 = state_33142;
state_33142 = G__34571;
continue;
} else {
return ret_value__30811__auto__;
}
break;
}
});
cljs$core$async$state_machine__30810__auto__ = function(state_33142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30810__auto____1.call(this,state_33142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30810__auto____0;
cljs$core$async$state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30810__auto____1;
return cljs$core$async$state_machine__30810__auto__;
})()
})();
var state__30995__auto__ = (function (){var statearr_33169 = f__30994__auto__();
(statearr_33169[(6)] = c__30993__auto___34525);

return statearr_33169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30995__auto__);
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
var c__30993__auto___34573 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30994__auto__ = (function (){var switch__30809__auto__ = (function (state_33213){
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
var statearr_33223_34580 = state_33213__$1;
(statearr_33223_34580[(1)] = (12));

} else {
var statearr_33224_34581 = state_33213__$1;
(statearr_33224_34581[(1)] = (13));

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
var statearr_33233_34591 = state_33213__$1;
(statearr_33233_34591[(2)] = inst_33196);

(statearr_33233_34591[(1)] = (7));


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
var statearr_33235_34592 = state_33213__$1;
(statearr_33235_34592[(2)] = null);

(statearr_33235_34592[(1)] = (2));


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
var cljs$core$async$state_machine__30810__auto__ = null;
var cljs$core$async$state_machine__30810__auto____0 = (function (){
var statearr_33236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33236[(0)] = cljs$core$async$state_machine__30810__auto__);

(statearr_33236[(1)] = (1));

return statearr_33236;
});
var cljs$core$async$state_machine__30810__auto____1 = (function (state_33213){
while(true){
var ret_value__30811__auto__ = (function (){try{while(true){
var result__30812__auto__ = switch__30809__auto__(state_33213);
if(cljs.core.keyword_identical_QMARK_(result__30812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30812__auto__;
}
break;
}
}catch (e33237){var ex__30813__auto__ = e33237;
var statearr_33238_34595 = state_33213;
(statearr_33238_34595[(2)] = ex__30813__auto__);


if(cljs.core.seq((state_33213[(4)]))){
var statearr_33239_34596 = state_33213;
(statearr_33239_34596[(1)] = cljs.core.first((state_33213[(4)])));

} else {
throw ex__30813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34597 = state_33213;
state_33213 = G__34597;
continue;
} else {
return ret_value__30811__auto__;
}
break;
}
});
cljs$core$async$state_machine__30810__auto__ = function(state_33213){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30810__auto____1.call(this,state_33213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30810__auto____0;
cljs$core$async$state_machine__30810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30810__auto____1;
return cljs$core$async$state_machine__30810__auto__;
})()
})();
var state__30995__auto__ = (function (){var statearr_33240 = f__30994__auto__();
(statearr_33240[(6)] = c__30993__auto___34573);

return statearr_33240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30995__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
