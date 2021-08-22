goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31288 = arguments.length;
switch (G__31288) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31289 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31289 = (function (f,blockable,meta31290){
this.f = f;
this.blockable = blockable;
this.meta31290 = meta31290;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31291,meta31290__$1){
var self__ = this;
var _31291__$1 = this;
return (new cljs.core.async.t_cljs$core$async31289(self__.f,self__.blockable,meta31290__$1));
}));

(cljs.core.async.t_cljs$core$async31289.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31291){
var self__ = this;
var _31291__$1 = this;
return self__.meta31290;
}));

(cljs.core.async.t_cljs$core$async31289.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31289.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31289.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31289.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31289.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31290","meta31290",1784265938,null)], null);
}));

(cljs.core.async.t_cljs$core$async31289.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31289.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31289");

(cljs.core.async.t_cljs$core$async31289.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31289");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31289.
 */
cljs.core.async.__GT_t_cljs$core$async31289 = (function cljs$core$async$__GT_t_cljs$core$async31289(f__$1,blockable__$1,meta31290){
return (new cljs.core.async.t_cljs$core$async31289(f__$1,blockable__$1,meta31290));
});

}

return (new cljs.core.async.t_cljs$core$async31289(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31309 = arguments.length;
switch (G__31309) {
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
var G__31317 = arguments.length;
switch (G__31317) {
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
var G__31325 = arguments.length;
switch (G__31325) {
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
var val_33403 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33403) : fn1.call(null,val_33403));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33403) : fn1.call(null,val_33403));
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
var G__31335 = arguments.length;
switch (G__31335) {
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
var n__4613__auto___33405 = n;
var x_33406 = (0);
while(true){
if((x_33406 < n__4613__auto___33405)){
(a[x_33406] = x_33406);

var G__33407 = (x_33406 + (1));
x_33406 = G__33407;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31357 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31357 = (function (flag,meta31358){
this.flag = flag;
this.meta31358 = meta31358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31359,meta31358__$1){
var self__ = this;
var _31359__$1 = this;
return (new cljs.core.async.t_cljs$core$async31357(self__.flag,meta31358__$1));
}));

(cljs.core.async.t_cljs$core$async31357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31359){
var self__ = this;
var _31359__$1 = this;
return self__.meta31358;
}));

(cljs.core.async.t_cljs$core$async31357.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31357.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31357.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31357.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31357.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31358","meta31358",1834870815,null)], null);
}));

(cljs.core.async.t_cljs$core$async31357.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31357.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31357");

(cljs.core.async.t_cljs$core$async31357.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31357");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31357.
 */
cljs.core.async.__GT_t_cljs$core$async31357 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31357(flag__$1,meta31358){
return (new cljs.core.async.t_cljs$core$async31357(flag__$1,meta31358));
});

}

return (new cljs.core.async.t_cljs$core$async31357(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31369 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31369 = (function (flag,cb,meta31370){
this.flag = flag;
this.cb = cb;
this.meta31370 = meta31370;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31371,meta31370__$1){
var self__ = this;
var _31371__$1 = this;
return (new cljs.core.async.t_cljs$core$async31369(self__.flag,self__.cb,meta31370__$1));
}));

(cljs.core.async.t_cljs$core$async31369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31371){
var self__ = this;
var _31371__$1 = this;
return self__.meta31370;
}));

(cljs.core.async.t_cljs$core$async31369.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31369.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31369.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31369.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31369.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31370","meta31370",1271185802,null)], null);
}));

(cljs.core.async.t_cljs$core$async31369.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31369.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31369");

(cljs.core.async.t_cljs$core$async31369.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31369");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31369.
 */
cljs.core.async.__GT_t_cljs$core$async31369 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31369(flag__$1,cb__$1,meta31370){
return (new cljs.core.async.t_cljs$core$async31369(flag__$1,cb__$1,meta31370));
});

}

return (new cljs.core.async.t_cljs$core$async31369(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31377_SHARP_){
var G__31379 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31377_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31379) : fret.call(null,G__31379));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31378_SHARP_){
var G__31380 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31378_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31380) : fret.call(null,G__31380));
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
var G__33417 = (i + (1));
i = G__33417;
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
var len__4736__auto___33418 = arguments.length;
var i__4737__auto___33421 = (0);
while(true){
if((i__4737__auto___33421 < len__4736__auto___33418)){
args__4742__auto__.push((arguments[i__4737__auto___33421]));

var G__33422 = (i__4737__auto___33421 + (1));
i__4737__auto___33421 = G__33422;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31385){
var map__31386 = p__31385;
var map__31386__$1 = (((((!((map__31386 == null))))?(((((map__31386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31386):map__31386);
var opts = map__31386__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31383){
var G__31384 = cljs.core.first(seq31383);
var seq31383__$1 = cljs.core.next(seq31383);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31384,seq31383__$1);
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
var G__31392 = arguments.length;
switch (G__31392) {
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
var c__31195__auto___33426 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31196__auto__ = (function (){var switch__30977__auto__ = (function (state_31444){
var state_val_31445 = (state_31444[(1)]);
if((state_val_31445 === (7))){
var inst_31440 = (state_31444[(2)]);
var state_31444__$1 = state_31444;
var statearr_31453_33427 = state_31444__$1;
(statearr_31453_33427[(2)] = inst_31440);

(statearr_31453_33427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (1))){
var state_31444__$1 = state_31444;
var statearr_31454_33428 = state_31444__$1;
(statearr_31454_33428[(2)] = null);

(statearr_31454_33428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (4))){
var inst_31423 = (state_31444[(7)]);
var inst_31423__$1 = (state_31444[(2)]);
var inst_31424 = (inst_31423__$1 == null);
var state_31444__$1 = (function (){var statearr_31455 = state_31444;
(statearr_31455[(7)] = inst_31423__$1);

return statearr_31455;
})();
if(cljs.core.truth_(inst_31424)){
var statearr_31456_33429 = state_31444__$1;
(statearr_31456_33429[(1)] = (5));

} else {
var statearr_31457_33430 = state_31444__$1;
(statearr_31457_33430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (13))){
var state_31444__$1 = state_31444;
var statearr_31463_33431 = state_31444__$1;
(statearr_31463_33431[(2)] = null);

(statearr_31463_33431[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (6))){
var inst_31423 = (state_31444[(7)]);
var state_31444__$1 = state_31444;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31444__$1,(11),to,inst_31423);
} else {
if((state_val_31445 === (3))){
var inst_31442 = (state_31444[(2)]);
var state_31444__$1 = state_31444;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31444__$1,inst_31442);
} else {
if((state_val_31445 === (12))){
var state_31444__$1 = state_31444;
var statearr_31476_33432 = state_31444__$1;
(statearr_31476_33432[(2)] = null);

(statearr_31476_33432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (2))){
var state_31444__$1 = state_31444;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31444__$1,(4),from);
} else {
if((state_val_31445 === (11))){
var inst_31433 = (state_31444[(2)]);
var state_31444__$1 = state_31444;
if(cljs.core.truth_(inst_31433)){
var statearr_31477_33446 = state_31444__$1;
(statearr_31477_33446[(1)] = (12));

} else {
var statearr_31478_33447 = state_31444__$1;
(statearr_31478_33447[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (9))){
var state_31444__$1 = state_31444;
var statearr_31482_33448 = state_31444__$1;
(statearr_31482_33448[(2)] = null);

(statearr_31482_33448[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (5))){
var state_31444__$1 = state_31444;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31483_33450 = state_31444__$1;
(statearr_31483_33450[(1)] = (8));

} else {
var statearr_31484_33451 = state_31444__$1;
(statearr_31484_33451[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (14))){
var inst_31438 = (state_31444[(2)]);
var state_31444__$1 = state_31444;
var statearr_31485_33455 = state_31444__$1;
(statearr_31485_33455[(2)] = inst_31438);

(statearr_31485_33455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (10))){
var inst_31430 = (state_31444[(2)]);
var state_31444__$1 = state_31444;
var statearr_31486_33456 = state_31444__$1;
(statearr_31486_33456[(2)] = inst_31430);

(statearr_31486_33456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (8))){
var inst_31427 = cljs.core.async.close_BANG_(to);
var state_31444__$1 = state_31444;
var statearr_31487_33457 = state_31444__$1;
(statearr_31487_33457[(2)] = inst_31427);

(statearr_31487_33457[(1)] = (10));


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
var cljs$core$async$state_machine__30978__auto__ = null;
var cljs$core$async$state_machine__30978__auto____0 = (function (){
var statearr_31492 = [null,null,null,null,null,null,null,null];
(statearr_31492[(0)] = cljs$core$async$state_machine__30978__auto__);

(statearr_31492[(1)] = (1));

return statearr_31492;
});
var cljs$core$async$state_machine__30978__auto____1 = (function (state_31444){
while(true){
var ret_value__30979__auto__ = (function (){try{while(true){
var result__30980__auto__ = switch__30977__auto__(state_31444);
if(cljs.core.keyword_identical_QMARK_(result__30980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30980__auto__;
}
break;
}
}catch (e31502){var ex__30981__auto__ = e31502;
var statearr_31503_33459 = state_31444;
(statearr_31503_33459[(2)] = ex__30981__auto__);


if(cljs.core.seq((state_31444[(4)]))){
var statearr_31504_33460 = state_31444;
(statearr_31504_33460[(1)] = cljs.core.first((state_31444[(4)])));

} else {
throw ex__30981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33462 = state_31444;
state_31444 = G__33462;
continue;
} else {
return ret_value__30979__auto__;
}
break;
}
});
cljs$core$async$state_machine__30978__auto__ = function(state_31444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30978__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30978__auto____1.call(this,state_31444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30978__auto____0;
cljs$core$async$state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30978__auto____1;
return cljs$core$async$state_machine__30978__auto__;
})()
})();
var state__31197__auto__ = (function (){var statearr_31506 = f__31196__auto__();
(statearr_31506[(6)] = c__31195__auto___33426);

return statearr_31506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31197__auto__);
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
var process = (function (p__31510){
var vec__31511 = p__31510;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31511,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31511,(1),null);
var job = vec__31511;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31195__auto___33463 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31196__auto__ = (function (){var switch__30977__auto__ = (function (state_31524){
var state_val_31525 = (state_31524[(1)]);
if((state_val_31525 === (1))){
var state_31524__$1 = state_31524;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31524__$1,(2),res,v);
} else {
if((state_val_31525 === (2))){
var inst_31521 = (state_31524[(2)]);
var inst_31522 = cljs.core.async.close_BANG_(res);
var state_31524__$1 = (function (){var statearr_31529 = state_31524;
(statearr_31529[(7)] = inst_31521);

return statearr_31529;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31524__$1,inst_31522);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30978__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30978__auto____0 = (function (){
var statearr_31530 = [null,null,null,null,null,null,null,null];
(statearr_31530[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30978__auto__);

(statearr_31530[(1)] = (1));

return statearr_31530;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30978__auto____1 = (function (state_31524){
while(true){
var ret_value__30979__auto__ = (function (){try{while(true){
var result__30980__auto__ = switch__30977__auto__(state_31524);
if(cljs.core.keyword_identical_QMARK_(result__30980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30980__auto__;
}
break;
}
}catch (e31531){var ex__30981__auto__ = e31531;
var statearr_31532_33481 = state_31524;
(statearr_31532_33481[(2)] = ex__30981__auto__);


if(cljs.core.seq((state_31524[(4)]))){
var statearr_31533_33482 = state_31524;
(statearr_31533_33482[(1)] = cljs.core.first((state_31524[(4)])));

} else {
throw ex__30981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33486 = state_31524;
state_31524 = G__33486;
continue;
} else {
return ret_value__30979__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30978__auto__ = function(state_31524){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30978__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30978__auto____1.call(this,state_31524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30978__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30978__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30978__auto__;
})()
})();
var state__31197__auto__ = (function (){var statearr_31535 = f__31196__auto__();
(statearr_31535[(6)] = c__31195__auto___33463);

return statearr_31535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31197__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31536){
var vec__31537 = p__31536;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31537,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31537,(1),null);
var job = vec__31537;
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
var n__4613__auto___33490 = n;
var __33491 = (0);
while(true){
if((__33491 < n__4613__auto___33490)){
var G__31541_33492 = type;
var G__31541_33493__$1 = (((G__31541_33492 instanceof cljs.core.Keyword))?G__31541_33492.fqn:null);
switch (G__31541_33493__$1) {
case "compute":
var c__31195__auto___33495 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33491,c__31195__auto___33495,G__31541_33492,G__31541_33493__$1,n__4613__auto___33490,jobs,results,process,async){
return (function (){
var f__31196__auto__ = (function (){var switch__30977__auto__ = ((function (__33491,c__31195__auto___33495,G__31541_33492,G__31541_33493__$1,n__4613__auto___33490,jobs,results,process,async){
return (function (state_31563){
var state_val_31564 = (state_31563[(1)]);
if((state_val_31564 === (1))){
var state_31563__$1 = state_31563;
var statearr_31570_33500 = state_31563__$1;
(statearr_31570_33500[(2)] = null);

(statearr_31570_33500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (2))){
var state_31563__$1 = state_31563;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31563__$1,(4),jobs);
} else {
if((state_val_31564 === (3))){
var inst_31561 = (state_31563[(2)]);
var state_31563__$1 = state_31563;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31563__$1,inst_31561);
} else {
if((state_val_31564 === (4))){
var inst_31551 = (state_31563[(2)]);
var inst_31553 = process(inst_31551);
var state_31563__$1 = state_31563;
if(cljs.core.truth_(inst_31553)){
var statearr_31583_33504 = state_31563__$1;
(statearr_31583_33504[(1)] = (5));

} else {
var statearr_31584_33505 = state_31563__$1;
(statearr_31584_33505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (5))){
var state_31563__$1 = state_31563;
var statearr_31585_33506 = state_31563__$1;
(statearr_31585_33506[(2)] = null);

(statearr_31585_33506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (6))){
var state_31563__$1 = state_31563;
var statearr_31587_33522 = state_31563__$1;
(statearr_31587_33522[(2)] = null);

(statearr_31587_33522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (7))){
var inst_31558 = (state_31563[(2)]);
var state_31563__$1 = state_31563;
var statearr_31590_33523 = state_31563__$1;
(statearr_31590_33523[(2)] = inst_31558);

(statearr_31590_33523[(1)] = (3));


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
});})(__33491,c__31195__auto___33495,G__31541_33492,G__31541_33493__$1,n__4613__auto___33490,jobs,results,process,async))
;
return ((function (__33491,switch__30977__auto__,c__31195__auto___33495,G__31541_33492,G__31541_33493__$1,n__4613__auto___33490,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30978__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30978__auto____0 = (function (){
var statearr_31591 = [null,null,null,null,null,null,null];
(statearr_31591[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30978__auto__);

(statearr_31591[(1)] = (1));

return statearr_31591;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30978__auto____1 = (function (state_31563){
while(true){
var ret_value__30979__auto__ = (function (){try{while(true){
var result__30980__auto__ = switch__30977__auto__(state_31563);
if(cljs.core.keyword_identical_QMARK_(result__30980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30980__auto__;
}
break;
}
}catch (e31592){var ex__30981__auto__ = e31592;
var statearr_31593_33524 = state_31563;
(statearr_31593_33524[(2)] = ex__30981__auto__);


if(cljs.core.seq((state_31563[(4)]))){
var statearr_31594_33525 = state_31563;
(statearr_31594_33525[(1)] = cljs.core.first((state_31563[(4)])));

} else {
throw ex__30981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33526 = state_31563;
state_31563 = G__33526;
continue;
} else {
return ret_value__30979__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30978__auto__ = function(state_31563){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30978__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30978__auto____1.call(this,state_31563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30978__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30978__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30978__auto__;
})()
;})(__33491,switch__30977__auto__,c__31195__auto___33495,G__31541_33492,G__31541_33493__$1,n__4613__auto___33490,jobs,results,process,async))
})();
var state__31197__auto__ = (function (){var statearr_31602 = f__31196__auto__();
(statearr_31602[(6)] = c__31195__auto___33495);

return statearr_31602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31197__auto__);
});})(__33491,c__31195__auto___33495,G__31541_33492,G__31541_33493__$1,n__4613__auto___33490,jobs,results,process,async))
);


break;
case "async":
var c__31195__auto___33530 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33491,c__31195__auto___33530,G__31541_33492,G__31541_33493__$1,n__4613__auto___33490,jobs,results,process,async){
return (function (){
var f__31196__auto__ = (function (){var switch__30977__auto__ = ((function (__33491,c__31195__auto___33530,G__31541_33492,G__31541_33493__$1,n__4613__auto___33490,jobs,results,process,async){
return (function (state_31622){
var state_val_31624 = (state_31622[(1)]);
if((state_val_31624 === (1))){
var state_31622__$1 = state_31622;
var statearr_31629_33534 = state_31622__$1;
(statearr_31629_33534[(2)] = null);

(statearr_31629_33534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31624 === (2))){
var state_31622__$1 = state_31622;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31622__$1,(4),jobs);
} else {
if((state_val_31624 === (3))){
var inst_31619 = (state_31622[(2)]);
var state_31622__$1 = state_31622;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31622__$1,inst_31619);
} else {
if((state_val_31624 === (4))){
var inst_31609 = (state_31622[(2)]);
var inst_31610 = async(inst_31609);
var state_31622__$1 = state_31622;
if(cljs.core.truth_(inst_31610)){
var statearr_31631_33536 = state_31622__$1;
(statearr_31631_33536[(1)] = (5));

} else {
var statearr_31632_33537 = state_31622__$1;
(statearr_31632_33537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31624 === (5))){
var state_31622__$1 = state_31622;
var statearr_31633_33538 = state_31622__$1;
(statearr_31633_33538[(2)] = null);

(statearr_31633_33538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31624 === (6))){
var state_31622__$1 = state_31622;
var statearr_31638_33540 = state_31622__$1;
(statearr_31638_33540[(2)] = null);

(statearr_31638_33540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31624 === (7))){
var inst_31616 = (state_31622[(2)]);
var state_31622__$1 = state_31622;
var statearr_31639_33542 = state_31622__$1;
(statearr_31639_33542[(2)] = inst_31616);

(statearr_31639_33542[(1)] = (3));


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
});})(__33491,c__31195__auto___33530,G__31541_33492,G__31541_33493__$1,n__4613__auto___33490,jobs,results,process,async))
;
return ((function (__33491,switch__30977__auto__,c__31195__auto___33530,G__31541_33492,G__31541_33493__$1,n__4613__auto___33490,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30978__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30978__auto____0 = (function (){
var statearr_31643 = [null,null,null,null,null,null,null];
(statearr_31643[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30978__auto__);

(statearr_31643[(1)] = (1));

return statearr_31643;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30978__auto____1 = (function (state_31622){
while(true){
var ret_value__30979__auto__ = (function (){try{while(true){
var result__30980__auto__ = switch__30977__auto__(state_31622);
if(cljs.core.keyword_identical_QMARK_(result__30980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30980__auto__;
}
break;
}
}catch (e31649){var ex__30981__auto__ = e31649;
var statearr_31650_33547 = state_31622;
(statearr_31650_33547[(2)] = ex__30981__auto__);


if(cljs.core.seq((state_31622[(4)]))){
var statearr_31652_33548 = state_31622;
(statearr_31652_33548[(1)] = cljs.core.first((state_31622[(4)])));

} else {
throw ex__30981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33549 = state_31622;
state_31622 = G__33549;
continue;
} else {
return ret_value__30979__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30978__auto__ = function(state_31622){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30978__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30978__auto____1.call(this,state_31622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30978__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30978__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30978__auto__;
})()
;})(__33491,switch__30977__auto__,c__31195__auto___33530,G__31541_33492,G__31541_33493__$1,n__4613__auto___33490,jobs,results,process,async))
})();
var state__31197__auto__ = (function (){var statearr_31658 = f__31196__auto__();
(statearr_31658[(6)] = c__31195__auto___33530);

return statearr_31658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31197__auto__);
});})(__33491,c__31195__auto___33530,G__31541_33492,G__31541_33493__$1,n__4613__auto___33490,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31541_33493__$1)].join('')));

}

var G__33554 = (__33491 + (1));
__33491 = G__33554;
continue;
} else {
}
break;
}

var c__31195__auto___33555 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31196__auto__ = (function (){var switch__30977__auto__ = (function (state_31688){
var state_val_31689 = (state_31688[(1)]);
if((state_val_31689 === (7))){
var inst_31684 = (state_31688[(2)]);
var state_31688__$1 = state_31688;
var statearr_31707_33556 = state_31688__$1;
(statearr_31707_33556[(2)] = inst_31684);

(statearr_31707_33556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (1))){
var state_31688__$1 = state_31688;
var statearr_31712_33557 = state_31688__$1;
(statearr_31712_33557[(2)] = null);

(statearr_31712_33557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (4))){
var inst_31666 = (state_31688[(7)]);
var inst_31666__$1 = (state_31688[(2)]);
var inst_31668 = (inst_31666__$1 == null);
var state_31688__$1 = (function (){var statearr_31715 = state_31688;
(statearr_31715[(7)] = inst_31666__$1);

return statearr_31715;
})();
if(cljs.core.truth_(inst_31668)){
var statearr_31718_33565 = state_31688__$1;
(statearr_31718_33565[(1)] = (5));

} else {
var statearr_31721_33566 = state_31688__$1;
(statearr_31721_33566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (6))){
var inst_31666 = (state_31688[(7)]);
var inst_31673 = (state_31688[(8)]);
var inst_31673__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31675 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31676 = [inst_31666,inst_31673__$1];
var inst_31677 = (new cljs.core.PersistentVector(null,2,(5),inst_31675,inst_31676,null));
var state_31688__$1 = (function (){var statearr_31727 = state_31688;
(statearr_31727[(8)] = inst_31673__$1);

return statearr_31727;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31688__$1,(8),jobs,inst_31677);
} else {
if((state_val_31689 === (3))){
var inst_31686 = (state_31688[(2)]);
var state_31688__$1 = state_31688;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31688__$1,inst_31686);
} else {
if((state_val_31689 === (2))){
var state_31688__$1 = state_31688;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31688__$1,(4),from);
} else {
if((state_val_31689 === (9))){
var inst_31681 = (state_31688[(2)]);
var state_31688__$1 = (function (){var statearr_31732 = state_31688;
(statearr_31732[(9)] = inst_31681);

return statearr_31732;
})();
var statearr_31734_33573 = state_31688__$1;
(statearr_31734_33573[(2)] = null);

(statearr_31734_33573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (5))){
var inst_31670 = cljs.core.async.close_BANG_(jobs);
var state_31688__$1 = state_31688;
var statearr_31741_33574 = state_31688__$1;
(statearr_31741_33574[(2)] = inst_31670);

(statearr_31741_33574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31689 === (8))){
var inst_31673 = (state_31688[(8)]);
var inst_31679 = (state_31688[(2)]);
var state_31688__$1 = (function (){var statearr_31748 = state_31688;
(statearr_31748[(10)] = inst_31679);

return statearr_31748;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31688__$1,(9),results,inst_31673);
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
var cljs$core$async$pipeline_STAR__$_state_machine__30978__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30978__auto____0 = (function (){
var statearr_31751 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31751[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30978__auto__);

(statearr_31751[(1)] = (1));

return statearr_31751;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30978__auto____1 = (function (state_31688){
while(true){
var ret_value__30979__auto__ = (function (){try{while(true){
var result__30980__auto__ = switch__30977__auto__(state_31688);
if(cljs.core.keyword_identical_QMARK_(result__30980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30980__auto__;
}
break;
}
}catch (e31754){var ex__30981__auto__ = e31754;
var statearr_31755_33587 = state_31688;
(statearr_31755_33587[(2)] = ex__30981__auto__);


if(cljs.core.seq((state_31688[(4)]))){
var statearr_31760_33588 = state_31688;
(statearr_31760_33588[(1)] = cljs.core.first((state_31688[(4)])));

} else {
throw ex__30981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33589 = state_31688;
state_31688 = G__33589;
continue;
} else {
return ret_value__30979__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30978__auto__ = function(state_31688){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30978__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30978__auto____1.call(this,state_31688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30978__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30978__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30978__auto__;
})()
})();
var state__31197__auto__ = (function (){var statearr_31763 = f__31196__auto__();
(statearr_31763[(6)] = c__31195__auto___33555);

return statearr_31763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31197__auto__);
}));


var c__31195__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31196__auto__ = (function (){var switch__30977__auto__ = (function (state_31809){
var state_val_31810 = (state_31809[(1)]);
if((state_val_31810 === (7))){
var inst_31805 = (state_31809[(2)]);
var state_31809__$1 = state_31809;
var statearr_31811_33590 = state_31809__$1;
(statearr_31811_33590[(2)] = inst_31805);

(statearr_31811_33590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (20))){
var state_31809__$1 = state_31809;
var statearr_31812_33591 = state_31809__$1;
(statearr_31812_33591[(2)] = null);

(statearr_31812_33591[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (1))){
var state_31809__$1 = state_31809;
var statearr_31814_33598 = state_31809__$1;
(statearr_31814_33598[(2)] = null);

(statearr_31814_33598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (4))){
var inst_31768 = (state_31809[(7)]);
var inst_31768__$1 = (state_31809[(2)]);
var inst_31770 = (inst_31768__$1 == null);
var state_31809__$1 = (function (){var statearr_31818 = state_31809;
(statearr_31818[(7)] = inst_31768__$1);

return statearr_31818;
})();
if(cljs.core.truth_(inst_31770)){
var statearr_31819_33603 = state_31809__$1;
(statearr_31819_33603[(1)] = (5));

} else {
var statearr_31824_33604 = state_31809__$1;
(statearr_31824_33604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (15))){
var inst_31783 = (state_31809[(8)]);
var state_31809__$1 = state_31809;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31809__$1,(18),to,inst_31783);
} else {
if((state_val_31810 === (21))){
var inst_31799 = (state_31809[(2)]);
var state_31809__$1 = state_31809;
var statearr_31827_33605 = state_31809__$1;
(statearr_31827_33605[(2)] = inst_31799);

(statearr_31827_33605[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (13))){
var inst_31801 = (state_31809[(2)]);
var state_31809__$1 = (function (){var statearr_31860 = state_31809;
(statearr_31860[(9)] = inst_31801);

return statearr_31860;
})();
var statearr_31869_33606 = state_31809__$1;
(statearr_31869_33606[(2)] = null);

(statearr_31869_33606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (6))){
var inst_31768 = (state_31809[(7)]);
var state_31809__$1 = state_31809;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31809__$1,(11),inst_31768);
} else {
if((state_val_31810 === (17))){
var inst_31794 = (state_31809[(2)]);
var state_31809__$1 = state_31809;
if(cljs.core.truth_(inst_31794)){
var statearr_31874_33607 = state_31809__$1;
(statearr_31874_33607[(1)] = (19));

} else {
var statearr_31875_33608 = state_31809__$1;
(statearr_31875_33608[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (3))){
var inst_31807 = (state_31809[(2)]);
var state_31809__$1 = state_31809;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31809__$1,inst_31807);
} else {
if((state_val_31810 === (12))){
var inst_31780 = (state_31809[(10)]);
var state_31809__$1 = state_31809;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31809__$1,(14),inst_31780);
} else {
if((state_val_31810 === (2))){
var state_31809__$1 = state_31809;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31809__$1,(4),results);
} else {
if((state_val_31810 === (19))){
var state_31809__$1 = state_31809;
var statearr_31878_33633 = state_31809__$1;
(statearr_31878_33633[(2)] = null);

(statearr_31878_33633[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (11))){
var inst_31780 = (state_31809[(2)]);
var state_31809__$1 = (function (){var statearr_31879 = state_31809;
(statearr_31879[(10)] = inst_31780);

return statearr_31879;
})();
var statearr_31880_33634 = state_31809__$1;
(statearr_31880_33634[(2)] = null);

(statearr_31880_33634[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (9))){
var state_31809__$1 = state_31809;
var statearr_31883_33635 = state_31809__$1;
(statearr_31883_33635[(2)] = null);

(statearr_31883_33635[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (5))){
var state_31809__$1 = state_31809;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31885_33636 = state_31809__$1;
(statearr_31885_33636[(1)] = (8));

} else {
var statearr_31890_33637 = state_31809__$1;
(statearr_31890_33637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (14))){
var inst_31783 = (state_31809[(8)]);
var inst_31783__$1 = (state_31809[(2)]);
var inst_31787 = (inst_31783__$1 == null);
var inst_31788 = cljs.core.not(inst_31787);
var state_31809__$1 = (function (){var statearr_31893 = state_31809;
(statearr_31893[(8)] = inst_31783__$1);

return statearr_31893;
})();
if(inst_31788){
var statearr_31894_33639 = state_31809__$1;
(statearr_31894_33639[(1)] = (15));

} else {
var statearr_31897_33640 = state_31809__$1;
(statearr_31897_33640[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (16))){
var state_31809__$1 = state_31809;
var statearr_31898_33641 = state_31809__$1;
(statearr_31898_33641[(2)] = false);

(statearr_31898_33641[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (10))){
var inst_31777 = (state_31809[(2)]);
var state_31809__$1 = state_31809;
var statearr_31899_33646 = state_31809__$1;
(statearr_31899_33646[(2)] = inst_31777);

(statearr_31899_33646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (18))){
var inst_31791 = (state_31809[(2)]);
var state_31809__$1 = state_31809;
var statearr_31900_33647 = state_31809__$1;
(statearr_31900_33647[(2)] = inst_31791);

(statearr_31900_33647[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31810 === (8))){
var inst_31773 = cljs.core.async.close_BANG_(to);
var state_31809__$1 = state_31809;
var statearr_31902_33648 = state_31809__$1;
(statearr_31902_33648[(2)] = inst_31773);

(statearr_31902_33648[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__30978__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30978__auto____0 = (function (){
var statearr_31903 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31903[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30978__auto__);

(statearr_31903[(1)] = (1));

return statearr_31903;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30978__auto____1 = (function (state_31809){
while(true){
var ret_value__30979__auto__ = (function (){try{while(true){
var result__30980__auto__ = switch__30977__auto__(state_31809);
if(cljs.core.keyword_identical_QMARK_(result__30980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30980__auto__;
}
break;
}
}catch (e31904){var ex__30981__auto__ = e31904;
var statearr_31905_33651 = state_31809;
(statearr_31905_33651[(2)] = ex__30981__auto__);


if(cljs.core.seq((state_31809[(4)]))){
var statearr_31909_33652 = state_31809;
(statearr_31909_33652[(1)] = cljs.core.first((state_31809[(4)])));

} else {
throw ex__30981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33664 = state_31809;
state_31809 = G__33664;
continue;
} else {
return ret_value__30979__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30978__auto__ = function(state_31809){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30978__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30978__auto____1.call(this,state_31809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30978__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30978__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30978__auto__;
})()
})();
var state__31197__auto__ = (function (){var statearr_31910 = f__31196__auto__();
(statearr_31910[(6)] = c__31195__auto__);

return statearr_31910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31197__auto__);
}));

return c__31195__auto__;
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
var G__31912 = arguments.length;
switch (G__31912) {
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
var G__31930 = arguments.length;
switch (G__31930) {
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
var G__31944 = arguments.length;
switch (G__31944) {
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
var c__31195__auto___33668 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31196__auto__ = (function (){var switch__30977__auto__ = (function (state_31973){
var state_val_31974 = (state_31973[(1)]);
if((state_val_31974 === (7))){
var inst_31969 = (state_31973[(2)]);
var state_31973__$1 = state_31973;
var statearr_31979_33669 = state_31973__$1;
(statearr_31979_33669[(2)] = inst_31969);

(statearr_31979_33669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (1))){
var state_31973__$1 = state_31973;
var statearr_31982_33672 = state_31973__$1;
(statearr_31982_33672[(2)] = null);

(statearr_31982_33672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (4))){
var inst_31950 = (state_31973[(7)]);
var inst_31950__$1 = (state_31973[(2)]);
var inst_31951 = (inst_31950__$1 == null);
var state_31973__$1 = (function (){var statearr_31983 = state_31973;
(statearr_31983[(7)] = inst_31950__$1);

return statearr_31983;
})();
if(cljs.core.truth_(inst_31951)){
var statearr_31985_33673 = state_31973__$1;
(statearr_31985_33673[(1)] = (5));

} else {
var statearr_31987_33674 = state_31973__$1;
(statearr_31987_33674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (13))){
var state_31973__$1 = state_31973;
var statearr_31990_33675 = state_31973__$1;
(statearr_31990_33675[(2)] = null);

(statearr_31990_33675[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (6))){
var inst_31950 = (state_31973[(7)]);
var inst_31956 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31950) : p.call(null,inst_31950));
var state_31973__$1 = state_31973;
if(cljs.core.truth_(inst_31956)){
var statearr_31992_33676 = state_31973__$1;
(statearr_31992_33676[(1)] = (9));

} else {
var statearr_31993_33677 = state_31973__$1;
(statearr_31993_33677[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (3))){
var inst_31971 = (state_31973[(2)]);
var state_31973__$1 = state_31973;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31973__$1,inst_31971);
} else {
if((state_val_31974 === (12))){
var state_31973__$1 = state_31973;
var statearr_31997_33678 = state_31973__$1;
(statearr_31997_33678[(2)] = null);

(statearr_31997_33678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (2))){
var state_31973__$1 = state_31973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31973__$1,(4),ch);
} else {
if((state_val_31974 === (11))){
var inst_31950 = (state_31973[(7)]);
var inst_31960 = (state_31973[(2)]);
var state_31973__$1 = state_31973;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31973__$1,(8),inst_31960,inst_31950);
} else {
if((state_val_31974 === (9))){
var state_31973__$1 = state_31973;
var statearr_32000_33679 = state_31973__$1;
(statearr_32000_33679[(2)] = tc);

(statearr_32000_33679[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (5))){
var inst_31953 = cljs.core.async.close_BANG_(tc);
var inst_31954 = cljs.core.async.close_BANG_(fc);
var state_31973__$1 = (function (){var statearr_32002 = state_31973;
(statearr_32002[(8)] = inst_31953);

return statearr_32002;
})();
var statearr_32003_33680 = state_31973__$1;
(statearr_32003_33680[(2)] = inst_31954);

(statearr_32003_33680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (14))){
var inst_31967 = (state_31973[(2)]);
var state_31973__$1 = state_31973;
var statearr_32004_33685 = state_31973__$1;
(statearr_32004_33685[(2)] = inst_31967);

(statearr_32004_33685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (10))){
var state_31973__$1 = state_31973;
var statearr_32008_33686 = state_31973__$1;
(statearr_32008_33686[(2)] = fc);

(statearr_32008_33686[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31974 === (8))){
var inst_31962 = (state_31973[(2)]);
var state_31973__$1 = state_31973;
if(cljs.core.truth_(inst_31962)){
var statearr_32009_33687 = state_31973__$1;
(statearr_32009_33687[(1)] = (12));

} else {
var statearr_32010_33688 = state_31973__$1;
(statearr_32010_33688[(1)] = (13));

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
var cljs$core$async$state_machine__30978__auto__ = null;
var cljs$core$async$state_machine__30978__auto____0 = (function (){
var statearr_32011 = [null,null,null,null,null,null,null,null,null];
(statearr_32011[(0)] = cljs$core$async$state_machine__30978__auto__);

(statearr_32011[(1)] = (1));

return statearr_32011;
});
var cljs$core$async$state_machine__30978__auto____1 = (function (state_31973){
while(true){
var ret_value__30979__auto__ = (function (){try{while(true){
var result__30980__auto__ = switch__30977__auto__(state_31973);
if(cljs.core.keyword_identical_QMARK_(result__30980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30980__auto__;
}
break;
}
}catch (e32012){var ex__30981__auto__ = e32012;
var statearr_32013_33689 = state_31973;
(statearr_32013_33689[(2)] = ex__30981__auto__);


if(cljs.core.seq((state_31973[(4)]))){
var statearr_32014_33690 = state_31973;
(statearr_32014_33690[(1)] = cljs.core.first((state_31973[(4)])));

} else {
throw ex__30981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33691 = state_31973;
state_31973 = G__33691;
continue;
} else {
return ret_value__30979__auto__;
}
break;
}
});
cljs$core$async$state_machine__30978__auto__ = function(state_31973){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30978__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30978__auto____1.call(this,state_31973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30978__auto____0;
cljs$core$async$state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30978__auto____1;
return cljs$core$async$state_machine__30978__auto__;
})()
})();
var state__31197__auto__ = (function (){var statearr_32024 = f__31196__auto__();
(statearr_32024[(6)] = c__31195__auto___33668);

return statearr_32024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31197__auto__);
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
var c__31195__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31196__auto__ = (function (){var switch__30977__auto__ = (function (state_32046){
var state_val_32047 = (state_32046[(1)]);
if((state_val_32047 === (7))){
var inst_32042 = (state_32046[(2)]);
var state_32046__$1 = state_32046;
var statearr_32048_33692 = state_32046__$1;
(statearr_32048_33692[(2)] = inst_32042);

(statearr_32048_33692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32047 === (1))){
var inst_32025 = init;
var inst_32026 = inst_32025;
var state_32046__$1 = (function (){var statearr_32049 = state_32046;
(statearr_32049[(7)] = inst_32026);

return statearr_32049;
})();
var statearr_32050_33693 = state_32046__$1;
(statearr_32050_33693[(2)] = null);

(statearr_32050_33693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32047 === (4))){
var inst_32029 = (state_32046[(8)]);
var inst_32029__$1 = (state_32046[(2)]);
var inst_32030 = (inst_32029__$1 == null);
var state_32046__$1 = (function (){var statearr_32051 = state_32046;
(statearr_32051[(8)] = inst_32029__$1);

return statearr_32051;
})();
if(cljs.core.truth_(inst_32030)){
var statearr_32052_33698 = state_32046__$1;
(statearr_32052_33698[(1)] = (5));

} else {
var statearr_32053_33702 = state_32046__$1;
(statearr_32053_33702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32047 === (6))){
var inst_32033 = (state_32046[(9)]);
var inst_32026 = (state_32046[(7)]);
var inst_32029 = (state_32046[(8)]);
var inst_32033__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32026,inst_32029) : f.call(null,inst_32026,inst_32029));
var inst_32034 = cljs.core.reduced_QMARK_(inst_32033__$1);
var state_32046__$1 = (function (){var statearr_32054 = state_32046;
(statearr_32054[(9)] = inst_32033__$1);

return statearr_32054;
})();
if(inst_32034){
var statearr_32055_33703 = state_32046__$1;
(statearr_32055_33703[(1)] = (8));

} else {
var statearr_32056_33704 = state_32046__$1;
(statearr_32056_33704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32047 === (3))){
var inst_32044 = (state_32046[(2)]);
var state_32046__$1 = state_32046;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32046__$1,inst_32044);
} else {
if((state_val_32047 === (2))){
var state_32046__$1 = state_32046;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32046__$1,(4),ch);
} else {
if((state_val_32047 === (9))){
var inst_32033 = (state_32046[(9)]);
var inst_32026 = inst_32033;
var state_32046__$1 = (function (){var statearr_32057 = state_32046;
(statearr_32057[(7)] = inst_32026);

return statearr_32057;
})();
var statearr_32058_33708 = state_32046__$1;
(statearr_32058_33708[(2)] = null);

(statearr_32058_33708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32047 === (5))){
var inst_32026 = (state_32046[(7)]);
var state_32046__$1 = state_32046;
var statearr_32059_33712 = state_32046__$1;
(statearr_32059_33712[(2)] = inst_32026);

(statearr_32059_33712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32047 === (10))){
var inst_32040 = (state_32046[(2)]);
var state_32046__$1 = state_32046;
var statearr_32060_33713 = state_32046__$1;
(statearr_32060_33713[(2)] = inst_32040);

(statearr_32060_33713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32047 === (8))){
var inst_32033 = (state_32046[(9)]);
var inst_32036 = cljs.core.deref(inst_32033);
var state_32046__$1 = state_32046;
var statearr_32061_33714 = state_32046__$1;
(statearr_32061_33714[(2)] = inst_32036);

(statearr_32061_33714[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__30978__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30978__auto____0 = (function (){
var statearr_32062 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32062[(0)] = cljs$core$async$reduce_$_state_machine__30978__auto__);

(statearr_32062[(1)] = (1));

return statearr_32062;
});
var cljs$core$async$reduce_$_state_machine__30978__auto____1 = (function (state_32046){
while(true){
var ret_value__30979__auto__ = (function (){try{while(true){
var result__30980__auto__ = switch__30977__auto__(state_32046);
if(cljs.core.keyword_identical_QMARK_(result__30980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30980__auto__;
}
break;
}
}catch (e32063){var ex__30981__auto__ = e32063;
var statearr_32064_33764 = state_32046;
(statearr_32064_33764[(2)] = ex__30981__auto__);


if(cljs.core.seq((state_32046[(4)]))){
var statearr_32065_33766 = state_32046;
(statearr_32065_33766[(1)] = cljs.core.first((state_32046[(4)])));

} else {
throw ex__30981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33768 = state_32046;
state_32046 = G__33768;
continue;
} else {
return ret_value__30979__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30978__auto__ = function(state_32046){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30978__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30978__auto____1.call(this,state_32046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30978__auto____0;
cljs$core$async$reduce_$_state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30978__auto____1;
return cljs$core$async$reduce_$_state_machine__30978__auto__;
})()
})();
var state__31197__auto__ = (function (){var statearr_32066 = f__31196__auto__();
(statearr_32066[(6)] = c__31195__auto__);

return statearr_32066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31197__auto__);
}));

return c__31195__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__31195__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31196__auto__ = (function (){var switch__30977__auto__ = (function (state_32072){
var state_val_32073 = (state_32072[(1)]);
if((state_val_32073 === (1))){
var inst_32067 = cljs.core.async.reduce(f__$1,init,ch);
var state_32072__$1 = state_32072;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32072__$1,(2),inst_32067);
} else {
if((state_val_32073 === (2))){
var inst_32069 = (state_32072[(2)]);
var inst_32070 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32069) : f__$1.call(null,inst_32069));
var state_32072__$1 = state_32072;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32072__$1,inst_32070);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30978__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30978__auto____0 = (function (){
var statearr_32074 = [null,null,null,null,null,null,null];
(statearr_32074[(0)] = cljs$core$async$transduce_$_state_machine__30978__auto__);

(statearr_32074[(1)] = (1));

return statearr_32074;
});
var cljs$core$async$transduce_$_state_machine__30978__auto____1 = (function (state_32072){
while(true){
var ret_value__30979__auto__ = (function (){try{while(true){
var result__30980__auto__ = switch__30977__auto__(state_32072);
if(cljs.core.keyword_identical_QMARK_(result__30980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30980__auto__;
}
break;
}
}catch (e32075){var ex__30981__auto__ = e32075;
var statearr_32076_33773 = state_32072;
(statearr_32076_33773[(2)] = ex__30981__auto__);


if(cljs.core.seq((state_32072[(4)]))){
var statearr_32077_33774 = state_32072;
(statearr_32077_33774[(1)] = cljs.core.first((state_32072[(4)])));

} else {
throw ex__30981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33775 = state_32072;
state_32072 = G__33775;
continue;
} else {
return ret_value__30979__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30978__auto__ = function(state_32072){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30978__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30978__auto____1.call(this,state_32072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30978__auto____0;
cljs$core$async$transduce_$_state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30978__auto____1;
return cljs$core$async$transduce_$_state_machine__30978__auto__;
})()
})();
var state__31197__auto__ = (function (){var statearr_32078 = f__31196__auto__();
(statearr_32078[(6)] = c__31195__auto__);

return statearr_32078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31197__auto__);
}));

return c__31195__auto__;
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
var G__32080 = arguments.length;
switch (G__32080) {
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
var c__31195__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31196__auto__ = (function (){var switch__30977__auto__ = (function (state_32105){
var state_val_32106 = (state_32105[(1)]);
if((state_val_32106 === (7))){
var inst_32087 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
var statearr_32107_33778 = state_32105__$1;
(statearr_32107_33778[(2)] = inst_32087);

(statearr_32107_33778[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (1))){
var inst_32081 = cljs.core.seq(coll);
var inst_32082 = inst_32081;
var state_32105__$1 = (function (){var statearr_32108 = state_32105;
(statearr_32108[(7)] = inst_32082);

return statearr_32108;
})();
var statearr_32109_33779 = state_32105__$1;
(statearr_32109_33779[(2)] = null);

(statearr_32109_33779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (4))){
var inst_32082 = (state_32105[(7)]);
var inst_32085 = cljs.core.first(inst_32082);
var state_32105__$1 = state_32105;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32105__$1,(7),ch,inst_32085);
} else {
if((state_val_32106 === (13))){
var inst_32099 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
var statearr_32110_33781 = state_32105__$1;
(statearr_32110_33781[(2)] = inst_32099);

(statearr_32110_33781[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (6))){
var inst_32090 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
if(cljs.core.truth_(inst_32090)){
var statearr_32111_33782 = state_32105__$1;
(statearr_32111_33782[(1)] = (8));

} else {
var statearr_32112_33783 = state_32105__$1;
(statearr_32112_33783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (3))){
var inst_32103 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32105__$1,inst_32103);
} else {
if((state_val_32106 === (12))){
var state_32105__$1 = state_32105;
var statearr_32113_33784 = state_32105__$1;
(statearr_32113_33784[(2)] = null);

(statearr_32113_33784[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (2))){
var inst_32082 = (state_32105[(7)]);
var state_32105__$1 = state_32105;
if(cljs.core.truth_(inst_32082)){
var statearr_32114_33785 = state_32105__$1;
(statearr_32114_33785[(1)] = (4));

} else {
var statearr_32115_33786 = state_32105__$1;
(statearr_32115_33786[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (11))){
var inst_32096 = cljs.core.async.close_BANG_(ch);
var state_32105__$1 = state_32105;
var statearr_32116_33787 = state_32105__$1;
(statearr_32116_33787[(2)] = inst_32096);

(statearr_32116_33787[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (9))){
var state_32105__$1 = state_32105;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32119_33788 = state_32105__$1;
(statearr_32119_33788[(1)] = (11));

} else {
var statearr_32120_33789 = state_32105__$1;
(statearr_32120_33789[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (5))){
var inst_32082 = (state_32105[(7)]);
var state_32105__$1 = state_32105;
var statearr_32122_33790 = state_32105__$1;
(statearr_32122_33790[(2)] = inst_32082);

(statearr_32122_33790[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (10))){
var inst_32101 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
var statearr_32123_33795 = state_32105__$1;
(statearr_32123_33795[(2)] = inst_32101);

(statearr_32123_33795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (8))){
var inst_32082 = (state_32105[(7)]);
var inst_32092 = cljs.core.next(inst_32082);
var inst_32082__$1 = inst_32092;
var state_32105__$1 = (function (){var statearr_32124 = state_32105;
(statearr_32124[(7)] = inst_32082__$1);

return statearr_32124;
})();
var statearr_32125_33796 = state_32105__$1;
(statearr_32125_33796[(2)] = null);

(statearr_32125_33796[(1)] = (2));


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
var cljs$core$async$state_machine__30978__auto__ = null;
var cljs$core$async$state_machine__30978__auto____0 = (function (){
var statearr_32127 = [null,null,null,null,null,null,null,null];
(statearr_32127[(0)] = cljs$core$async$state_machine__30978__auto__);

(statearr_32127[(1)] = (1));

return statearr_32127;
});
var cljs$core$async$state_machine__30978__auto____1 = (function (state_32105){
while(true){
var ret_value__30979__auto__ = (function (){try{while(true){
var result__30980__auto__ = switch__30977__auto__(state_32105);
if(cljs.core.keyword_identical_QMARK_(result__30980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30980__auto__;
}
break;
}
}catch (e32128){var ex__30981__auto__ = e32128;
var statearr_32129_33797 = state_32105;
(statearr_32129_33797[(2)] = ex__30981__auto__);


if(cljs.core.seq((state_32105[(4)]))){
var statearr_32130_33798 = state_32105;
(statearr_32130_33798[(1)] = cljs.core.first((state_32105[(4)])));

} else {
throw ex__30981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33799 = state_32105;
state_32105 = G__33799;
continue;
} else {
return ret_value__30979__auto__;
}
break;
}
});
cljs$core$async$state_machine__30978__auto__ = function(state_32105){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30978__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30978__auto____1.call(this,state_32105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30978__auto____0;
cljs$core$async$state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30978__auto____1;
return cljs$core$async$state_machine__30978__auto__;
})()
})();
var state__31197__auto__ = (function (){var statearr_32131 = f__31196__auto__();
(statearr_32131[(6)] = c__31195__auto__);

return statearr_32131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31197__auto__);
}));

return c__31195__auto__;
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
var G__32133 = arguments.length;
switch (G__32133) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_33811 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_33811(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33812 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_33812(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33813 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_33813(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33814 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_33814(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32146 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32146 = (function (ch,cs,meta32147){
this.ch = ch;
this.cs = cs;
this.meta32147 = meta32147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32148,meta32147__$1){
var self__ = this;
var _32148__$1 = this;
return (new cljs.core.async.t_cljs$core$async32146(self__.ch,self__.cs,meta32147__$1));
}));

(cljs.core.async.t_cljs$core$async32146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32148){
var self__ = this;
var _32148__$1 = this;
return self__.meta32147;
}));

(cljs.core.async.t_cljs$core$async32146.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32146.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32146.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32146.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32146.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32146.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32147","meta32147",-1288045262,null)], null);
}));

(cljs.core.async.t_cljs$core$async32146.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32146");

(cljs.core.async.t_cljs$core$async32146.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32146");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32146.
 */
cljs.core.async.__GT_t_cljs$core$async32146 = (function cljs$core$async$mult_$___GT_t_cljs$core$async32146(ch__$1,cs__$1,meta32147){
return (new cljs.core.async.t_cljs$core$async32146(ch__$1,cs__$1,meta32147));
});

}

return (new cljs.core.async.t_cljs$core$async32146(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__31195__auto___33815 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31196__auto__ = (function (){var switch__30977__auto__ = (function (state_32336){
var state_val_32337 = (state_32336[(1)]);
if((state_val_32337 === (7))){
var inst_32330 = (state_32336[(2)]);
var state_32336__$1 = state_32336;
var statearr_32339_33816 = state_32336__$1;
(statearr_32339_33816[(2)] = inst_32330);

(statearr_32339_33816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (20))){
var inst_32201 = (state_32336[(7)]);
var inst_32224 = cljs.core.first(inst_32201);
var inst_32229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32224,(0),null);
var inst_32230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32224,(1),null);
var state_32336__$1 = (function (){var statearr_32340 = state_32336;
(statearr_32340[(8)] = inst_32229);

return statearr_32340;
})();
if(cljs.core.truth_(inst_32230)){
var statearr_32341_33817 = state_32336__$1;
(statearr_32341_33817[(1)] = (22));

} else {
var statearr_32342_33818 = state_32336__$1;
(statearr_32342_33818[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (27))){
var inst_32277 = (state_32336[(9)]);
var inst_32283 = (state_32336[(10)]);
var inst_32156 = (state_32336[(11)]);
var inst_32275 = (state_32336[(12)]);
var inst_32283__$1 = cljs.core._nth(inst_32275,inst_32277);
var inst_32284 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32283__$1,inst_32156,done);
var state_32336__$1 = (function (){var statearr_32343 = state_32336;
(statearr_32343[(10)] = inst_32283__$1);

return statearr_32343;
})();
if(cljs.core.truth_(inst_32284)){
var statearr_32344_33819 = state_32336__$1;
(statearr_32344_33819[(1)] = (30));

} else {
var statearr_32345_33820 = state_32336__$1;
(statearr_32345_33820[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (1))){
var state_32336__$1 = state_32336;
var statearr_32347_33825 = state_32336__$1;
(statearr_32347_33825[(2)] = null);

(statearr_32347_33825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (24))){
var inst_32201 = (state_32336[(7)]);
var inst_32247 = (state_32336[(2)]);
var inst_32249 = cljs.core.next(inst_32201);
var inst_32165 = inst_32249;
var inst_32166 = null;
var inst_32167 = (0);
var inst_32168 = (0);
var state_32336__$1 = (function (){var statearr_32350 = state_32336;
(statearr_32350[(13)] = inst_32247);

(statearr_32350[(14)] = inst_32166);

(statearr_32350[(15)] = inst_32167);

(statearr_32350[(16)] = inst_32168);

(statearr_32350[(17)] = inst_32165);

return statearr_32350;
})();
var statearr_32354_33826 = state_32336__$1;
(statearr_32354_33826[(2)] = null);

(statearr_32354_33826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (39))){
var state_32336__$1 = state_32336;
var statearr_32364_33827 = state_32336__$1;
(statearr_32364_33827[(2)] = null);

(statearr_32364_33827[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (4))){
var inst_32156 = (state_32336[(11)]);
var inst_32156__$1 = (state_32336[(2)]);
var inst_32157 = (inst_32156__$1 == null);
var state_32336__$1 = (function (){var statearr_32366 = state_32336;
(statearr_32366[(11)] = inst_32156__$1);

return statearr_32366;
})();
if(cljs.core.truth_(inst_32157)){
var statearr_32367_33828 = state_32336__$1;
(statearr_32367_33828[(1)] = (5));

} else {
var statearr_32368_33829 = state_32336__$1;
(statearr_32368_33829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (15))){
var inst_32166 = (state_32336[(14)]);
var inst_32167 = (state_32336[(15)]);
var inst_32168 = (state_32336[(16)]);
var inst_32165 = (state_32336[(17)]);
var inst_32194 = (state_32336[(2)]);
var inst_32196 = (inst_32168 + (1));
var tmp32361 = inst_32166;
var tmp32362 = inst_32167;
var tmp32363 = inst_32165;
var inst_32165__$1 = tmp32363;
var inst_32166__$1 = tmp32361;
var inst_32167__$1 = tmp32362;
var inst_32168__$1 = inst_32196;
var state_32336__$1 = (function (){var statearr_32371 = state_32336;
(statearr_32371[(18)] = inst_32194);

(statearr_32371[(14)] = inst_32166__$1);

(statearr_32371[(15)] = inst_32167__$1);

(statearr_32371[(16)] = inst_32168__$1);

(statearr_32371[(17)] = inst_32165__$1);

return statearr_32371;
})();
var statearr_32372_33830 = state_32336__$1;
(statearr_32372_33830[(2)] = null);

(statearr_32372_33830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (21))){
var inst_32252 = (state_32336[(2)]);
var state_32336__$1 = state_32336;
var statearr_32377_33831 = state_32336__$1;
(statearr_32377_33831[(2)] = inst_32252);

(statearr_32377_33831[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (31))){
var inst_32283 = (state_32336[(10)]);
var inst_32287 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32283);
var state_32336__$1 = state_32336;
var statearr_32379_33832 = state_32336__$1;
(statearr_32379_33832[(2)] = inst_32287);

(statearr_32379_33832[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (32))){
var inst_32277 = (state_32336[(9)]);
var inst_32274 = (state_32336[(19)]);
var inst_32276 = (state_32336[(20)]);
var inst_32275 = (state_32336[(12)]);
var inst_32289 = (state_32336[(2)]);
var inst_32290 = (inst_32277 + (1));
var tmp32374 = inst_32274;
var tmp32375 = inst_32276;
var tmp32376 = inst_32275;
var inst_32274__$1 = tmp32374;
var inst_32275__$1 = tmp32376;
var inst_32276__$1 = tmp32375;
var inst_32277__$1 = inst_32290;
var state_32336__$1 = (function (){var statearr_32380 = state_32336;
(statearr_32380[(9)] = inst_32277__$1);

(statearr_32380[(19)] = inst_32274__$1);

(statearr_32380[(20)] = inst_32276__$1);

(statearr_32380[(12)] = inst_32275__$1);

(statearr_32380[(21)] = inst_32289);

return statearr_32380;
})();
var statearr_32381_33838 = state_32336__$1;
(statearr_32381_33838[(2)] = null);

(statearr_32381_33838[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (40))){
var inst_32302 = (state_32336[(22)]);
var inst_32307 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32302);
var state_32336__$1 = state_32336;
var statearr_32382_33840 = state_32336__$1;
(statearr_32382_33840[(2)] = inst_32307);

(statearr_32382_33840[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (33))){
var inst_32293 = (state_32336[(23)]);
var inst_32295 = cljs.core.chunked_seq_QMARK_(inst_32293);
var state_32336__$1 = state_32336;
if(inst_32295){
var statearr_32383_33841 = state_32336__$1;
(statearr_32383_33841[(1)] = (36));

} else {
var statearr_32384_33842 = state_32336__$1;
(statearr_32384_33842[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (13))){
var inst_32184 = (state_32336[(24)]);
var inst_32191 = cljs.core.async.close_BANG_(inst_32184);
var state_32336__$1 = state_32336;
var statearr_32385_33844 = state_32336__$1;
(statearr_32385_33844[(2)] = inst_32191);

(statearr_32385_33844[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (22))){
var inst_32229 = (state_32336[(8)]);
var inst_32244 = cljs.core.async.close_BANG_(inst_32229);
var state_32336__$1 = state_32336;
var statearr_32386_33848 = state_32336__$1;
(statearr_32386_33848[(2)] = inst_32244);

(statearr_32386_33848[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (36))){
var inst_32293 = (state_32336[(23)]);
var inst_32297 = cljs.core.chunk_first(inst_32293);
var inst_32298 = cljs.core.chunk_rest(inst_32293);
var inst_32299 = cljs.core.count(inst_32297);
var inst_32274 = inst_32298;
var inst_32275 = inst_32297;
var inst_32276 = inst_32299;
var inst_32277 = (0);
var state_32336__$1 = (function (){var statearr_32387 = state_32336;
(statearr_32387[(9)] = inst_32277);

(statearr_32387[(19)] = inst_32274);

(statearr_32387[(20)] = inst_32276);

(statearr_32387[(12)] = inst_32275);

return statearr_32387;
})();
var statearr_32388_33849 = state_32336__$1;
(statearr_32388_33849[(2)] = null);

(statearr_32388_33849[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (41))){
var inst_32293 = (state_32336[(23)]);
var inst_32309 = (state_32336[(2)]);
var inst_32310 = cljs.core.next(inst_32293);
var inst_32274 = inst_32310;
var inst_32275 = null;
var inst_32276 = (0);
var inst_32277 = (0);
var state_32336__$1 = (function (){var statearr_32389 = state_32336;
(statearr_32389[(9)] = inst_32277);

(statearr_32389[(25)] = inst_32309);

(statearr_32389[(19)] = inst_32274);

(statearr_32389[(20)] = inst_32276);

(statearr_32389[(12)] = inst_32275);

return statearr_32389;
})();
var statearr_32391_33850 = state_32336__$1;
(statearr_32391_33850[(2)] = null);

(statearr_32391_33850[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (43))){
var state_32336__$1 = state_32336;
var statearr_32392_33851 = state_32336__$1;
(statearr_32392_33851[(2)] = null);

(statearr_32392_33851[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (29))){
var inst_32318 = (state_32336[(2)]);
var state_32336__$1 = state_32336;
var statearr_32394_33852 = state_32336__$1;
(statearr_32394_33852[(2)] = inst_32318);

(statearr_32394_33852[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (44))){
var inst_32327 = (state_32336[(2)]);
var state_32336__$1 = (function (){var statearr_32395 = state_32336;
(statearr_32395[(26)] = inst_32327);

return statearr_32395;
})();
var statearr_32396_33853 = state_32336__$1;
(statearr_32396_33853[(2)] = null);

(statearr_32396_33853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (6))){
var inst_32266 = (state_32336[(27)]);
var inst_32265 = cljs.core.deref(cs);
var inst_32266__$1 = cljs.core.keys(inst_32265);
var inst_32267 = cljs.core.count(inst_32266__$1);
var inst_32268 = cljs.core.reset_BANG_(dctr,inst_32267);
var inst_32273 = cljs.core.seq(inst_32266__$1);
var inst_32274 = inst_32273;
var inst_32275 = null;
var inst_32276 = (0);
var inst_32277 = (0);
var state_32336__$1 = (function (){var statearr_32397 = state_32336;
(statearr_32397[(9)] = inst_32277);

(statearr_32397[(19)] = inst_32274);

(statearr_32397[(27)] = inst_32266__$1);

(statearr_32397[(20)] = inst_32276);

(statearr_32397[(12)] = inst_32275);

(statearr_32397[(28)] = inst_32268);

return statearr_32397;
})();
var statearr_32398_33854 = state_32336__$1;
(statearr_32398_33854[(2)] = null);

(statearr_32398_33854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (28))){
var inst_32274 = (state_32336[(19)]);
var inst_32293 = (state_32336[(23)]);
var inst_32293__$1 = cljs.core.seq(inst_32274);
var state_32336__$1 = (function (){var statearr_32399 = state_32336;
(statearr_32399[(23)] = inst_32293__$1);

return statearr_32399;
})();
if(inst_32293__$1){
var statearr_32400_33855 = state_32336__$1;
(statearr_32400_33855[(1)] = (33));

} else {
var statearr_32401_33856 = state_32336__$1;
(statearr_32401_33856[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (25))){
var inst_32277 = (state_32336[(9)]);
var inst_32276 = (state_32336[(20)]);
var inst_32279 = (inst_32277 < inst_32276);
var inst_32280 = inst_32279;
var state_32336__$1 = state_32336;
if(cljs.core.truth_(inst_32280)){
var statearr_32402_33857 = state_32336__$1;
(statearr_32402_33857[(1)] = (27));

} else {
var statearr_32403_33858 = state_32336__$1;
(statearr_32403_33858[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (34))){
var state_32336__$1 = state_32336;
var statearr_32404_33859 = state_32336__$1;
(statearr_32404_33859[(2)] = null);

(statearr_32404_33859[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (17))){
var state_32336__$1 = state_32336;
var statearr_32405_33860 = state_32336__$1;
(statearr_32405_33860[(2)] = null);

(statearr_32405_33860[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (3))){
var inst_32332 = (state_32336[(2)]);
var state_32336__$1 = state_32336;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32336__$1,inst_32332);
} else {
if((state_val_32337 === (12))){
var inst_32261 = (state_32336[(2)]);
var state_32336__$1 = state_32336;
var statearr_32407_33861 = state_32336__$1;
(statearr_32407_33861[(2)] = inst_32261);

(statearr_32407_33861[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (2))){
var state_32336__$1 = state_32336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32336__$1,(4),ch);
} else {
if((state_val_32337 === (23))){
var state_32336__$1 = state_32336;
var statearr_32408_33862 = state_32336__$1;
(statearr_32408_33862[(2)] = null);

(statearr_32408_33862[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (35))){
var inst_32316 = (state_32336[(2)]);
var state_32336__$1 = state_32336;
var statearr_32409_33863 = state_32336__$1;
(statearr_32409_33863[(2)] = inst_32316);

(statearr_32409_33863[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (19))){
var inst_32201 = (state_32336[(7)]);
var inst_32212 = cljs.core.chunk_first(inst_32201);
var inst_32213 = cljs.core.chunk_rest(inst_32201);
var inst_32214 = cljs.core.count(inst_32212);
var inst_32165 = inst_32213;
var inst_32166 = inst_32212;
var inst_32167 = inst_32214;
var inst_32168 = (0);
var state_32336__$1 = (function (){var statearr_32410 = state_32336;
(statearr_32410[(14)] = inst_32166);

(statearr_32410[(15)] = inst_32167);

(statearr_32410[(16)] = inst_32168);

(statearr_32410[(17)] = inst_32165);

return statearr_32410;
})();
var statearr_32411_33864 = state_32336__$1;
(statearr_32411_33864[(2)] = null);

(statearr_32411_33864[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (11))){
var inst_32201 = (state_32336[(7)]);
var inst_32165 = (state_32336[(17)]);
var inst_32201__$1 = cljs.core.seq(inst_32165);
var state_32336__$1 = (function (){var statearr_32413 = state_32336;
(statearr_32413[(7)] = inst_32201__$1);

return statearr_32413;
})();
if(inst_32201__$1){
var statearr_32414_33865 = state_32336__$1;
(statearr_32414_33865[(1)] = (16));

} else {
var statearr_32416_33866 = state_32336__$1;
(statearr_32416_33866[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (9))){
var inst_32263 = (state_32336[(2)]);
var state_32336__$1 = state_32336;
var statearr_32417_33867 = state_32336__$1;
(statearr_32417_33867[(2)] = inst_32263);

(statearr_32417_33867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (5))){
var inst_32163 = cljs.core.deref(cs);
var inst_32164 = cljs.core.seq(inst_32163);
var inst_32165 = inst_32164;
var inst_32166 = null;
var inst_32167 = (0);
var inst_32168 = (0);
var state_32336__$1 = (function (){var statearr_32418 = state_32336;
(statearr_32418[(14)] = inst_32166);

(statearr_32418[(15)] = inst_32167);

(statearr_32418[(16)] = inst_32168);

(statearr_32418[(17)] = inst_32165);

return statearr_32418;
})();
var statearr_32419_33879 = state_32336__$1;
(statearr_32419_33879[(2)] = null);

(statearr_32419_33879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (14))){
var state_32336__$1 = state_32336;
var statearr_32423_33880 = state_32336__$1;
(statearr_32423_33880[(2)] = null);

(statearr_32423_33880[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (45))){
var inst_32324 = (state_32336[(2)]);
var state_32336__$1 = state_32336;
var statearr_32425_33881 = state_32336__$1;
(statearr_32425_33881[(2)] = inst_32324);

(statearr_32425_33881[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (26))){
var inst_32266 = (state_32336[(27)]);
var inst_32320 = (state_32336[(2)]);
var inst_32321 = cljs.core.seq(inst_32266);
var state_32336__$1 = (function (){var statearr_32426 = state_32336;
(statearr_32426[(29)] = inst_32320);

return statearr_32426;
})();
if(inst_32321){
var statearr_32427_33882 = state_32336__$1;
(statearr_32427_33882[(1)] = (42));

} else {
var statearr_32428_33883 = state_32336__$1;
(statearr_32428_33883[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (16))){
var inst_32201 = (state_32336[(7)]);
var inst_32210 = cljs.core.chunked_seq_QMARK_(inst_32201);
var state_32336__$1 = state_32336;
if(inst_32210){
var statearr_32429_33884 = state_32336__$1;
(statearr_32429_33884[(1)] = (19));

} else {
var statearr_32430_33885 = state_32336__$1;
(statearr_32430_33885[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (38))){
var inst_32313 = (state_32336[(2)]);
var state_32336__$1 = state_32336;
var statearr_32431_33886 = state_32336__$1;
(statearr_32431_33886[(2)] = inst_32313);

(statearr_32431_33886[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (30))){
var state_32336__$1 = state_32336;
var statearr_32432_33887 = state_32336__$1;
(statearr_32432_33887[(2)] = null);

(statearr_32432_33887[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (10))){
var inst_32166 = (state_32336[(14)]);
var inst_32168 = (state_32336[(16)]);
var inst_32176 = cljs.core._nth(inst_32166,inst_32168);
var inst_32184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32176,(0),null);
var inst_32185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32176,(1),null);
var state_32336__$1 = (function (){var statearr_32433 = state_32336;
(statearr_32433[(24)] = inst_32184);

return statearr_32433;
})();
if(cljs.core.truth_(inst_32185)){
var statearr_32435_33888 = state_32336__$1;
(statearr_32435_33888[(1)] = (13));

} else {
var statearr_32436_33889 = state_32336__$1;
(statearr_32436_33889[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (18))){
var inst_32259 = (state_32336[(2)]);
var state_32336__$1 = state_32336;
var statearr_32437_33890 = state_32336__$1;
(statearr_32437_33890[(2)] = inst_32259);

(statearr_32437_33890[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (42))){
var state_32336__$1 = state_32336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32336__$1,(45),dchan);
} else {
if((state_val_32337 === (37))){
var inst_32156 = (state_32336[(11)]);
var inst_32293 = (state_32336[(23)]);
var inst_32302 = (state_32336[(22)]);
var inst_32302__$1 = cljs.core.first(inst_32293);
var inst_32304 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32302__$1,inst_32156,done);
var state_32336__$1 = (function (){var statearr_32439 = state_32336;
(statearr_32439[(22)] = inst_32302__$1);

return statearr_32439;
})();
if(cljs.core.truth_(inst_32304)){
var statearr_32441_33891 = state_32336__$1;
(statearr_32441_33891[(1)] = (39));

} else {
var statearr_32442_33892 = state_32336__$1;
(statearr_32442_33892[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32337 === (8))){
var inst_32167 = (state_32336[(15)]);
var inst_32168 = (state_32336[(16)]);
var inst_32170 = (inst_32168 < inst_32167);
var inst_32171 = inst_32170;
var state_32336__$1 = state_32336;
if(cljs.core.truth_(inst_32171)){
var statearr_32443_33893 = state_32336__$1;
(statearr_32443_33893[(1)] = (10));

} else {
var statearr_32445_33894 = state_32336__$1;
(statearr_32445_33894[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__30978__auto__ = null;
var cljs$core$async$mult_$_state_machine__30978__auto____0 = (function (){
var statearr_32447 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32447[(0)] = cljs$core$async$mult_$_state_machine__30978__auto__);

(statearr_32447[(1)] = (1));

return statearr_32447;
});
var cljs$core$async$mult_$_state_machine__30978__auto____1 = (function (state_32336){
while(true){
var ret_value__30979__auto__ = (function (){try{while(true){
var result__30980__auto__ = switch__30977__auto__(state_32336);
if(cljs.core.keyword_identical_QMARK_(result__30980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30980__auto__;
}
break;
}
}catch (e32448){var ex__30981__auto__ = e32448;
var statearr_32449_33897 = state_32336;
(statearr_32449_33897[(2)] = ex__30981__auto__);


if(cljs.core.seq((state_32336[(4)]))){
var statearr_32450_33898 = state_32336;
(statearr_32450_33898[(1)] = cljs.core.first((state_32336[(4)])));

} else {
throw ex__30981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33899 = state_32336;
state_32336 = G__33899;
continue;
} else {
return ret_value__30979__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30978__auto__ = function(state_32336){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30978__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30978__auto____1.call(this,state_32336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30978__auto____0;
cljs$core$async$mult_$_state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30978__auto____1;
return cljs$core$async$mult_$_state_machine__30978__auto__;
})()
})();
var state__31197__auto__ = (function (){var statearr_32451 = f__31196__auto__();
(statearr_32451[(6)] = c__31195__auto___33815);

return statearr_32451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31197__auto__);
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
var G__32454 = arguments.length;
switch (G__32454) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_33901 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_33901(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33903 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_33903(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33913 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33913(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33914 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_33914(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33915 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33915(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33916 = arguments.length;
var i__4737__auto___33917 = (0);
while(true){
if((i__4737__auto___33917 < len__4736__auto___33916)){
args__4742__auto__.push((arguments[i__4737__auto___33917]));

var G__33918 = (i__4737__auto___33917 + (1));
i__4737__auto___33917 = G__33918;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32459){
var map__32460 = p__32459;
var map__32460__$1 = (((((!((map__32460 == null))))?(((((map__32460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32460):map__32460);
var opts = map__32460__$1;
var statearr_32462_33919 = state;
(statearr_32462_33919[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32463_33920 = state;
(statearr_32463_33920[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_32464_33921 = state;
(statearr_32464_33921[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32455){
var G__32456 = cljs.core.first(seq32455);
var seq32455__$1 = cljs.core.next(seq32455);
var G__32457 = cljs.core.first(seq32455__$1);
var seq32455__$2 = cljs.core.next(seq32455__$1);
var G__32458 = cljs.core.first(seq32455__$2);
var seq32455__$3 = cljs.core.next(seq32455__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32456,G__32457,G__32458,seq32455__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32465 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32465 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32466){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32466 = meta32466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32467,meta32466__$1){
var self__ = this;
var _32467__$1 = this;
return (new cljs.core.async.t_cljs$core$async32465(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32466__$1));
}));

(cljs.core.async.t_cljs$core$async32465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32467){
var self__ = this;
var _32467__$1 = this;
return self__.meta32466;
}));

(cljs.core.async.t_cljs$core$async32465.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32465.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32465.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32465.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32465.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32465.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32465.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32465.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32465.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32466","meta32466",2015955036,null)], null);
}));

(cljs.core.async.t_cljs$core$async32465.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32465.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32465");

(cljs.core.async.t_cljs$core$async32465.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32465");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32465.
 */
cljs.core.async.__GT_t_cljs$core$async32465 = (function cljs$core$async$mix_$___GT_t_cljs$core$async32465(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32466){
return (new cljs.core.async.t_cljs$core$async32465(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32466));
});

}

return (new cljs.core.async.t_cljs$core$async32465(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31195__auto___33941 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31196__auto__ = (function (){var switch__30977__auto__ = (function (state_32569){
var state_val_32570 = (state_32569[(1)]);
if((state_val_32570 === (7))){
var inst_32484 = (state_32569[(2)]);
var state_32569__$1 = state_32569;
var statearr_32571_33942 = state_32569__$1;
(statearr_32571_33942[(2)] = inst_32484);

(statearr_32571_33942[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (20))){
var inst_32496 = (state_32569[(7)]);
var state_32569__$1 = state_32569;
var statearr_32572_33943 = state_32569__$1;
(statearr_32572_33943[(2)] = inst_32496);

(statearr_32572_33943[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (27))){
var state_32569__$1 = state_32569;
var statearr_32573_33944 = state_32569__$1;
(statearr_32573_33944[(2)] = null);

(statearr_32573_33944[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (1))){
var inst_32471 = (state_32569[(8)]);
var inst_32471__$1 = calc_state();
var inst_32473 = (inst_32471__$1 == null);
var inst_32474 = cljs.core.not(inst_32473);
var state_32569__$1 = (function (){var statearr_32574 = state_32569;
(statearr_32574[(8)] = inst_32471__$1);

return statearr_32574;
})();
if(inst_32474){
var statearr_32575_33945 = state_32569__$1;
(statearr_32575_33945[(1)] = (2));

} else {
var statearr_32576_33946 = state_32569__$1;
(statearr_32576_33946[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (24))){
var inst_32543 = (state_32569[(9)]);
var inst_32520 = (state_32569[(10)]);
var inst_32529 = (state_32569[(11)]);
var inst_32543__$1 = (inst_32520.cljs$core$IFn$_invoke$arity$1 ? inst_32520.cljs$core$IFn$_invoke$arity$1(inst_32529) : inst_32520.call(null,inst_32529));
var state_32569__$1 = (function (){var statearr_32577 = state_32569;
(statearr_32577[(9)] = inst_32543__$1);

return statearr_32577;
})();
if(cljs.core.truth_(inst_32543__$1)){
var statearr_32578_33947 = state_32569__$1;
(statearr_32578_33947[(1)] = (29));

} else {
var statearr_32579_33948 = state_32569__$1;
(statearr_32579_33948[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (4))){
var inst_32487 = (state_32569[(2)]);
var state_32569__$1 = state_32569;
if(cljs.core.truth_(inst_32487)){
var statearr_32580_33949 = state_32569__$1;
(statearr_32580_33949[(1)] = (8));

} else {
var statearr_32581_33950 = state_32569__$1;
(statearr_32581_33950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (15))){
var inst_32514 = (state_32569[(2)]);
var state_32569__$1 = state_32569;
if(cljs.core.truth_(inst_32514)){
var statearr_32582_33951 = state_32569__$1;
(statearr_32582_33951[(1)] = (19));

} else {
var statearr_32583_33952 = state_32569__$1;
(statearr_32583_33952[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (21))){
var inst_32519 = (state_32569[(12)]);
var inst_32519__$1 = (state_32569[(2)]);
var inst_32520 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32519__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32521 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32519__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32522 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32519__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32569__$1 = (function (){var statearr_32584 = state_32569;
(statearr_32584[(13)] = inst_32521);

(statearr_32584[(12)] = inst_32519__$1);

(statearr_32584[(10)] = inst_32520);

return statearr_32584;
})();
return cljs.core.async.ioc_alts_BANG_(state_32569__$1,(22),inst_32522);
} else {
if((state_val_32570 === (31))){
var inst_32551 = (state_32569[(2)]);
var state_32569__$1 = state_32569;
if(cljs.core.truth_(inst_32551)){
var statearr_32585_33953 = state_32569__$1;
(statearr_32585_33953[(1)] = (32));

} else {
var statearr_32586_33954 = state_32569__$1;
(statearr_32586_33954[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (32))){
var inst_32528 = (state_32569[(14)]);
var state_32569__$1 = state_32569;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32569__$1,(35),out,inst_32528);
} else {
if((state_val_32570 === (33))){
var inst_32519 = (state_32569[(12)]);
var inst_32496 = inst_32519;
var state_32569__$1 = (function (){var statearr_32587 = state_32569;
(statearr_32587[(7)] = inst_32496);

return statearr_32587;
})();
var statearr_32588_33958 = state_32569__$1;
(statearr_32588_33958[(2)] = null);

(statearr_32588_33958[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (13))){
var inst_32496 = (state_32569[(7)]);
var inst_32503 = inst_32496.cljs$lang$protocol_mask$partition0$;
var inst_32504 = (inst_32503 & (64));
var inst_32505 = inst_32496.cljs$core$ISeq$;
var inst_32506 = (cljs.core.PROTOCOL_SENTINEL === inst_32505);
var inst_32507 = ((inst_32504) || (inst_32506));
var state_32569__$1 = state_32569;
if(cljs.core.truth_(inst_32507)){
var statearr_32589_33959 = state_32569__$1;
(statearr_32589_33959[(1)] = (16));

} else {
var statearr_32590_33960 = state_32569__$1;
(statearr_32590_33960[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (22))){
var inst_32528 = (state_32569[(14)]);
var inst_32529 = (state_32569[(11)]);
var inst_32527 = (state_32569[(2)]);
var inst_32528__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32527,(0),null);
var inst_32529__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32527,(1),null);
var inst_32530 = (inst_32528__$1 == null);
var inst_32531 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32529__$1,change);
var inst_32532 = ((inst_32530) || (inst_32531));
var state_32569__$1 = (function (){var statearr_32591 = state_32569;
(statearr_32591[(14)] = inst_32528__$1);

(statearr_32591[(11)] = inst_32529__$1);

return statearr_32591;
})();
if(cljs.core.truth_(inst_32532)){
var statearr_32592_33964 = state_32569__$1;
(statearr_32592_33964[(1)] = (23));

} else {
var statearr_32593_33965 = state_32569__$1;
(statearr_32593_33965[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (36))){
var inst_32519 = (state_32569[(12)]);
var inst_32496 = inst_32519;
var state_32569__$1 = (function (){var statearr_32594 = state_32569;
(statearr_32594[(7)] = inst_32496);

return statearr_32594;
})();
var statearr_32595_33966 = state_32569__$1;
(statearr_32595_33966[(2)] = null);

(statearr_32595_33966[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (29))){
var inst_32543 = (state_32569[(9)]);
var state_32569__$1 = state_32569;
var statearr_32596_33968 = state_32569__$1;
(statearr_32596_33968[(2)] = inst_32543);

(statearr_32596_33968[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (6))){
var state_32569__$1 = state_32569;
var statearr_32597_33969 = state_32569__$1;
(statearr_32597_33969[(2)] = false);

(statearr_32597_33969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (28))){
var inst_32539 = (state_32569[(2)]);
var inst_32540 = calc_state();
var inst_32496 = inst_32540;
var state_32569__$1 = (function (){var statearr_32598 = state_32569;
(statearr_32598[(15)] = inst_32539);

(statearr_32598[(7)] = inst_32496);

return statearr_32598;
})();
var statearr_32599_33970 = state_32569__$1;
(statearr_32599_33970[(2)] = null);

(statearr_32599_33970[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (25))){
var inst_32565 = (state_32569[(2)]);
var state_32569__$1 = state_32569;
var statearr_32600_33980 = state_32569__$1;
(statearr_32600_33980[(2)] = inst_32565);

(statearr_32600_33980[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (34))){
var inst_32563 = (state_32569[(2)]);
var state_32569__$1 = state_32569;
var statearr_32601_33981 = state_32569__$1;
(statearr_32601_33981[(2)] = inst_32563);

(statearr_32601_33981[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (17))){
var state_32569__$1 = state_32569;
var statearr_32602_33991 = state_32569__$1;
(statearr_32602_33991[(2)] = false);

(statearr_32602_33991[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (3))){
var state_32569__$1 = state_32569;
var statearr_32603_33992 = state_32569__$1;
(statearr_32603_33992[(2)] = false);

(statearr_32603_33992[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (12))){
var inst_32567 = (state_32569[(2)]);
var state_32569__$1 = state_32569;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32569__$1,inst_32567);
} else {
if((state_val_32570 === (2))){
var inst_32471 = (state_32569[(8)]);
var inst_32476 = inst_32471.cljs$lang$protocol_mask$partition0$;
var inst_32477 = (inst_32476 & (64));
var inst_32478 = inst_32471.cljs$core$ISeq$;
var inst_32479 = (cljs.core.PROTOCOL_SENTINEL === inst_32478);
var inst_32480 = ((inst_32477) || (inst_32479));
var state_32569__$1 = state_32569;
if(cljs.core.truth_(inst_32480)){
var statearr_32604_33994 = state_32569__$1;
(statearr_32604_33994[(1)] = (5));

} else {
var statearr_32605_34000 = state_32569__$1;
(statearr_32605_34000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (23))){
var inst_32528 = (state_32569[(14)]);
var inst_32534 = (inst_32528 == null);
var state_32569__$1 = state_32569;
if(cljs.core.truth_(inst_32534)){
var statearr_32606_34001 = state_32569__$1;
(statearr_32606_34001[(1)] = (26));

} else {
var statearr_32607_34002 = state_32569__$1;
(statearr_32607_34002[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (35))){
var inst_32554 = (state_32569[(2)]);
var state_32569__$1 = state_32569;
if(cljs.core.truth_(inst_32554)){
var statearr_32608_34003 = state_32569__$1;
(statearr_32608_34003[(1)] = (36));

} else {
var statearr_32609_34004 = state_32569__$1;
(statearr_32609_34004[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (19))){
var inst_32496 = (state_32569[(7)]);
var inst_32516 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32496);
var state_32569__$1 = state_32569;
var statearr_32610_34005 = state_32569__$1;
(statearr_32610_34005[(2)] = inst_32516);

(statearr_32610_34005[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (11))){
var inst_32496 = (state_32569[(7)]);
var inst_32500 = (inst_32496 == null);
var inst_32501 = cljs.core.not(inst_32500);
var state_32569__$1 = state_32569;
if(inst_32501){
var statearr_32611_34006 = state_32569__$1;
(statearr_32611_34006[(1)] = (13));

} else {
var statearr_32612_34007 = state_32569__$1;
(statearr_32612_34007[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (9))){
var inst_32471 = (state_32569[(8)]);
var state_32569__$1 = state_32569;
var statearr_32613_34008 = state_32569__$1;
(statearr_32613_34008[(2)] = inst_32471);

(statearr_32613_34008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (5))){
var state_32569__$1 = state_32569;
var statearr_32614_34009 = state_32569__$1;
(statearr_32614_34009[(2)] = true);

(statearr_32614_34009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (14))){
var state_32569__$1 = state_32569;
var statearr_32615_34010 = state_32569__$1;
(statearr_32615_34010[(2)] = false);

(statearr_32615_34010[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (26))){
var inst_32529 = (state_32569[(11)]);
var inst_32536 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32529);
var state_32569__$1 = state_32569;
var statearr_32616_34011 = state_32569__$1;
(statearr_32616_34011[(2)] = inst_32536);

(statearr_32616_34011[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (16))){
var state_32569__$1 = state_32569;
var statearr_32617_34012 = state_32569__$1;
(statearr_32617_34012[(2)] = true);

(statearr_32617_34012[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (38))){
var inst_32559 = (state_32569[(2)]);
var state_32569__$1 = state_32569;
var statearr_32618_34013 = state_32569__$1;
(statearr_32618_34013[(2)] = inst_32559);

(statearr_32618_34013[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (30))){
var inst_32521 = (state_32569[(13)]);
var inst_32520 = (state_32569[(10)]);
var inst_32529 = (state_32569[(11)]);
var inst_32546 = cljs.core.empty_QMARK_(inst_32520);
var inst_32547 = (inst_32521.cljs$core$IFn$_invoke$arity$1 ? inst_32521.cljs$core$IFn$_invoke$arity$1(inst_32529) : inst_32521.call(null,inst_32529));
var inst_32548 = cljs.core.not(inst_32547);
var inst_32549 = ((inst_32546) && (inst_32548));
var state_32569__$1 = state_32569;
var statearr_32619_34014 = state_32569__$1;
(statearr_32619_34014[(2)] = inst_32549);

(statearr_32619_34014[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (10))){
var inst_32471 = (state_32569[(8)]);
var inst_32492 = (state_32569[(2)]);
var inst_32493 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32492,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32494 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32492,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32495 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32492,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32496 = inst_32471;
var state_32569__$1 = (function (){var statearr_32620 = state_32569;
(statearr_32620[(16)] = inst_32494);

(statearr_32620[(17)] = inst_32493);

(statearr_32620[(7)] = inst_32496);

(statearr_32620[(18)] = inst_32495);

return statearr_32620;
})();
var statearr_32621_34015 = state_32569__$1;
(statearr_32621_34015[(2)] = null);

(statearr_32621_34015[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (18))){
var inst_32511 = (state_32569[(2)]);
var state_32569__$1 = state_32569;
var statearr_32622_34016 = state_32569__$1;
(statearr_32622_34016[(2)] = inst_32511);

(statearr_32622_34016[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (37))){
var state_32569__$1 = state_32569;
var statearr_32623_34017 = state_32569__$1;
(statearr_32623_34017[(2)] = null);

(statearr_32623_34017[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (8))){
var inst_32471 = (state_32569[(8)]);
var inst_32489 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32471);
var state_32569__$1 = state_32569;
var statearr_32624_34018 = state_32569__$1;
(statearr_32624_34018[(2)] = inst_32489);

(statearr_32624_34018[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__30978__auto__ = null;
var cljs$core$async$mix_$_state_machine__30978__auto____0 = (function (){
var statearr_32625 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32625[(0)] = cljs$core$async$mix_$_state_machine__30978__auto__);

(statearr_32625[(1)] = (1));

return statearr_32625;
});
var cljs$core$async$mix_$_state_machine__30978__auto____1 = (function (state_32569){
while(true){
var ret_value__30979__auto__ = (function (){try{while(true){
var result__30980__auto__ = switch__30977__auto__(state_32569);
if(cljs.core.keyword_identical_QMARK_(result__30980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30980__auto__;
}
break;
}
}catch (e32626){var ex__30981__auto__ = e32626;
var statearr_32627_34025 = state_32569;
(statearr_32627_34025[(2)] = ex__30981__auto__);


if(cljs.core.seq((state_32569[(4)]))){
var statearr_32628_34026 = state_32569;
(statearr_32628_34026[(1)] = cljs.core.first((state_32569[(4)])));

} else {
throw ex__30981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34027 = state_32569;
state_32569 = G__34027;
continue;
} else {
return ret_value__30979__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30978__auto__ = function(state_32569){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30978__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30978__auto____1.call(this,state_32569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30978__auto____0;
cljs$core$async$mix_$_state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30978__auto____1;
return cljs$core$async$mix_$_state_machine__30978__auto__;
})()
})();
var state__31197__auto__ = (function (){var statearr_32629 = f__31196__auto__();
(statearr_32629[(6)] = c__31195__auto___33941);

return statearr_32629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31197__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_34028 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_34028(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34029 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_34029(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34037 = (function() {
var G__34038 = null;
var G__34038__1 = (function (p){
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
var G__34038__2 = (function (p,v){
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
G__34038 = function(p,v){
switch(arguments.length){
case 1:
return G__34038__1.call(this,p);
case 2:
return G__34038__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34038.cljs$core$IFn$_invoke$arity$1 = G__34038__1;
G__34038.cljs$core$IFn$_invoke$arity$2 = G__34038__2;
return G__34038;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32633 = arguments.length;
switch (G__32633) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34037(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34037(p,v);
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
var G__32642 = arguments.length;
switch (G__32642) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32640_SHARP_){
if(cljs.core.truth_((p1__32640_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32640_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32640_SHARP_.call(null,topic)))){
return p1__32640_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32640_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32654 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32654 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32655){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32655 = meta32655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32656,meta32655__$1){
var self__ = this;
var _32656__$1 = this;
return (new cljs.core.async.t_cljs$core$async32654(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32655__$1));
}));

(cljs.core.async.t_cljs$core$async32654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32656){
var self__ = this;
var _32656__$1 = this;
return self__.meta32655;
}));

(cljs.core.async.t_cljs$core$async32654.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32654.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32654.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32654.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32654.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async32654.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32654.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32654.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32655","meta32655",-200648809,null)], null);
}));

(cljs.core.async.t_cljs$core$async32654.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32654.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32654");

(cljs.core.async.t_cljs$core$async32654.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32654");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32654.
 */
cljs.core.async.__GT_t_cljs$core$async32654 = (function cljs$core$async$__GT_t_cljs$core$async32654(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32655){
return (new cljs.core.async.t_cljs$core$async32654(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32655));
});

}

return (new cljs.core.async.t_cljs$core$async32654(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31195__auto___34043 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31196__auto__ = (function (){var switch__30977__auto__ = (function (state_32737){
var state_val_32738 = (state_32737[(1)]);
if((state_val_32738 === (7))){
var inst_32732 = (state_32737[(2)]);
var state_32737__$1 = state_32737;
var statearr_32739_34044 = state_32737__$1;
(statearr_32739_34044[(2)] = inst_32732);

(statearr_32739_34044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (20))){
var state_32737__$1 = state_32737;
var statearr_32740_34045 = state_32737__$1;
(statearr_32740_34045[(2)] = null);

(statearr_32740_34045[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (1))){
var state_32737__$1 = state_32737;
var statearr_32741_34046 = state_32737__$1;
(statearr_32741_34046[(2)] = null);

(statearr_32741_34046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (24))){
var inst_32715 = (state_32737[(7)]);
var inst_32724 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32715);
var state_32737__$1 = state_32737;
var statearr_32742_34055 = state_32737__$1;
(statearr_32742_34055[(2)] = inst_32724);

(statearr_32742_34055[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (4))){
var inst_32664 = (state_32737[(8)]);
var inst_32664__$1 = (state_32737[(2)]);
var inst_32665 = (inst_32664__$1 == null);
var state_32737__$1 = (function (){var statearr_32743 = state_32737;
(statearr_32743[(8)] = inst_32664__$1);

return statearr_32743;
})();
if(cljs.core.truth_(inst_32665)){
var statearr_32744_34056 = state_32737__$1;
(statearr_32744_34056[(1)] = (5));

} else {
var statearr_32745_34057 = state_32737__$1;
(statearr_32745_34057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (15))){
var inst_32709 = (state_32737[(2)]);
var state_32737__$1 = state_32737;
var statearr_32746_34058 = state_32737__$1;
(statearr_32746_34058[(2)] = inst_32709);

(statearr_32746_34058[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (21))){
var inst_32729 = (state_32737[(2)]);
var state_32737__$1 = (function (){var statearr_32747 = state_32737;
(statearr_32747[(9)] = inst_32729);

return statearr_32747;
})();
var statearr_32748_34059 = state_32737__$1;
(statearr_32748_34059[(2)] = null);

(statearr_32748_34059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (13))){
var inst_32691 = (state_32737[(10)]);
var inst_32693 = cljs.core.chunked_seq_QMARK_(inst_32691);
var state_32737__$1 = state_32737;
if(inst_32693){
var statearr_32749_34060 = state_32737__$1;
(statearr_32749_34060[(1)] = (16));

} else {
var statearr_32750_34061 = state_32737__$1;
(statearr_32750_34061[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (22))){
var inst_32721 = (state_32737[(2)]);
var state_32737__$1 = state_32737;
if(cljs.core.truth_(inst_32721)){
var statearr_32751_34062 = state_32737__$1;
(statearr_32751_34062[(1)] = (23));

} else {
var statearr_32752_34063 = state_32737__$1;
(statearr_32752_34063[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (6))){
var inst_32664 = (state_32737[(8)]);
var inst_32715 = (state_32737[(7)]);
var inst_32717 = (state_32737[(11)]);
var inst_32715__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32664) : topic_fn.call(null,inst_32664));
var inst_32716 = cljs.core.deref(mults);
var inst_32717__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32716,inst_32715__$1);
var state_32737__$1 = (function (){var statearr_32753 = state_32737;
(statearr_32753[(7)] = inst_32715__$1);

(statearr_32753[(11)] = inst_32717__$1);

return statearr_32753;
})();
if(cljs.core.truth_(inst_32717__$1)){
var statearr_32754_34064 = state_32737__$1;
(statearr_32754_34064[(1)] = (19));

} else {
var statearr_32755_34065 = state_32737__$1;
(statearr_32755_34065[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (25))){
var inst_32726 = (state_32737[(2)]);
var state_32737__$1 = state_32737;
var statearr_32756_34066 = state_32737__$1;
(statearr_32756_34066[(2)] = inst_32726);

(statearr_32756_34066[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (17))){
var inst_32691 = (state_32737[(10)]);
var inst_32700 = cljs.core.first(inst_32691);
var inst_32701 = cljs.core.async.muxch_STAR_(inst_32700);
var inst_32702 = cljs.core.async.close_BANG_(inst_32701);
var inst_32703 = cljs.core.next(inst_32691);
var inst_32674 = inst_32703;
var inst_32675 = null;
var inst_32676 = (0);
var inst_32677 = (0);
var state_32737__$1 = (function (){var statearr_32757 = state_32737;
(statearr_32757[(12)] = inst_32702);

(statearr_32757[(13)] = inst_32674);

(statearr_32757[(14)] = inst_32675);

(statearr_32757[(15)] = inst_32676);

(statearr_32757[(16)] = inst_32677);

return statearr_32757;
})();
var statearr_32758_34067 = state_32737__$1;
(statearr_32758_34067[(2)] = null);

(statearr_32758_34067[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (3))){
var inst_32734 = (state_32737[(2)]);
var state_32737__$1 = state_32737;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32737__$1,inst_32734);
} else {
if((state_val_32738 === (12))){
var inst_32711 = (state_32737[(2)]);
var state_32737__$1 = state_32737;
var statearr_32759_34070 = state_32737__$1;
(statearr_32759_34070[(2)] = inst_32711);

(statearr_32759_34070[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (2))){
var state_32737__$1 = state_32737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32737__$1,(4),ch);
} else {
if((state_val_32738 === (23))){
var state_32737__$1 = state_32737;
var statearr_32760_34080 = state_32737__$1;
(statearr_32760_34080[(2)] = null);

(statearr_32760_34080[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (19))){
var inst_32664 = (state_32737[(8)]);
var inst_32717 = (state_32737[(11)]);
var inst_32719 = cljs.core.async.muxch_STAR_(inst_32717);
var state_32737__$1 = state_32737;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32737__$1,(22),inst_32719,inst_32664);
} else {
if((state_val_32738 === (11))){
var inst_32674 = (state_32737[(13)]);
var inst_32691 = (state_32737[(10)]);
var inst_32691__$1 = cljs.core.seq(inst_32674);
var state_32737__$1 = (function (){var statearr_32761 = state_32737;
(statearr_32761[(10)] = inst_32691__$1);

return statearr_32761;
})();
if(inst_32691__$1){
var statearr_32762_34082 = state_32737__$1;
(statearr_32762_34082[(1)] = (13));

} else {
var statearr_32763_34083 = state_32737__$1;
(statearr_32763_34083[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (9))){
var inst_32713 = (state_32737[(2)]);
var state_32737__$1 = state_32737;
var statearr_32764_34084 = state_32737__$1;
(statearr_32764_34084[(2)] = inst_32713);

(statearr_32764_34084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (5))){
var inst_32671 = cljs.core.deref(mults);
var inst_32672 = cljs.core.vals(inst_32671);
var inst_32673 = cljs.core.seq(inst_32672);
var inst_32674 = inst_32673;
var inst_32675 = null;
var inst_32676 = (0);
var inst_32677 = (0);
var state_32737__$1 = (function (){var statearr_32765 = state_32737;
(statearr_32765[(13)] = inst_32674);

(statearr_32765[(14)] = inst_32675);

(statearr_32765[(15)] = inst_32676);

(statearr_32765[(16)] = inst_32677);

return statearr_32765;
})();
var statearr_32766_34085 = state_32737__$1;
(statearr_32766_34085[(2)] = null);

(statearr_32766_34085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (14))){
var state_32737__$1 = state_32737;
var statearr_32770_34086 = state_32737__$1;
(statearr_32770_34086[(2)] = null);

(statearr_32770_34086[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (16))){
var inst_32691 = (state_32737[(10)]);
var inst_32695 = cljs.core.chunk_first(inst_32691);
var inst_32696 = cljs.core.chunk_rest(inst_32691);
var inst_32697 = cljs.core.count(inst_32695);
var inst_32674 = inst_32696;
var inst_32675 = inst_32695;
var inst_32676 = inst_32697;
var inst_32677 = (0);
var state_32737__$1 = (function (){var statearr_32771 = state_32737;
(statearr_32771[(13)] = inst_32674);

(statearr_32771[(14)] = inst_32675);

(statearr_32771[(15)] = inst_32676);

(statearr_32771[(16)] = inst_32677);

return statearr_32771;
})();
var statearr_32772_34088 = state_32737__$1;
(statearr_32772_34088[(2)] = null);

(statearr_32772_34088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (10))){
var inst_32674 = (state_32737[(13)]);
var inst_32675 = (state_32737[(14)]);
var inst_32676 = (state_32737[(15)]);
var inst_32677 = (state_32737[(16)]);
var inst_32684 = cljs.core._nth(inst_32675,inst_32677);
var inst_32685 = cljs.core.async.muxch_STAR_(inst_32684);
var inst_32686 = cljs.core.async.close_BANG_(inst_32685);
var inst_32687 = (inst_32677 + (1));
var tmp32767 = inst_32674;
var tmp32768 = inst_32675;
var tmp32769 = inst_32676;
var inst_32674__$1 = tmp32767;
var inst_32675__$1 = tmp32768;
var inst_32676__$1 = tmp32769;
var inst_32677__$1 = inst_32687;
var state_32737__$1 = (function (){var statearr_32773 = state_32737;
(statearr_32773[(13)] = inst_32674__$1);

(statearr_32773[(14)] = inst_32675__$1);

(statearr_32773[(17)] = inst_32686);

(statearr_32773[(15)] = inst_32676__$1);

(statearr_32773[(16)] = inst_32677__$1);

return statearr_32773;
})();
var statearr_32774_34093 = state_32737__$1;
(statearr_32774_34093[(2)] = null);

(statearr_32774_34093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (18))){
var inst_32706 = (state_32737[(2)]);
var state_32737__$1 = state_32737;
var statearr_32775_34094 = state_32737__$1;
(statearr_32775_34094[(2)] = inst_32706);

(statearr_32775_34094[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32738 === (8))){
var inst_32676 = (state_32737[(15)]);
var inst_32677 = (state_32737[(16)]);
var inst_32679 = (inst_32677 < inst_32676);
var inst_32680 = inst_32679;
var state_32737__$1 = state_32737;
if(cljs.core.truth_(inst_32680)){
var statearr_32776_34101 = state_32737__$1;
(statearr_32776_34101[(1)] = (10));

} else {
var statearr_32777_34102 = state_32737__$1;
(statearr_32777_34102[(1)] = (11));

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
var cljs$core$async$state_machine__30978__auto__ = null;
var cljs$core$async$state_machine__30978__auto____0 = (function (){
var statearr_32778 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32778[(0)] = cljs$core$async$state_machine__30978__auto__);

(statearr_32778[(1)] = (1));

return statearr_32778;
});
var cljs$core$async$state_machine__30978__auto____1 = (function (state_32737){
while(true){
var ret_value__30979__auto__ = (function (){try{while(true){
var result__30980__auto__ = switch__30977__auto__(state_32737);
if(cljs.core.keyword_identical_QMARK_(result__30980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30980__auto__;
}
break;
}
}catch (e32779){var ex__30981__auto__ = e32779;
var statearr_32780_34105 = state_32737;
(statearr_32780_34105[(2)] = ex__30981__auto__);


if(cljs.core.seq((state_32737[(4)]))){
var statearr_32781_34107 = state_32737;
(statearr_32781_34107[(1)] = cljs.core.first((state_32737[(4)])));

} else {
throw ex__30981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34111 = state_32737;
state_32737 = G__34111;
continue;
} else {
return ret_value__30979__auto__;
}
break;
}
});
cljs$core$async$state_machine__30978__auto__ = function(state_32737){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30978__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30978__auto____1.call(this,state_32737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30978__auto____0;
cljs$core$async$state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30978__auto____1;
return cljs$core$async$state_machine__30978__auto__;
})()
})();
var state__31197__auto__ = (function (){var statearr_32782 = f__31196__auto__();
(statearr_32782[(6)] = c__31195__auto___34043);

return statearr_32782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31197__auto__);
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
var G__32784 = arguments.length;
switch (G__32784) {
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
var G__32786 = arguments.length;
switch (G__32786) {
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
var G__32788 = arguments.length;
switch (G__32788) {
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
var c__31195__auto___34138 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31196__auto__ = (function (){var switch__30977__auto__ = (function (state_32831){
var state_val_32832 = (state_32831[(1)]);
if((state_val_32832 === (7))){
var state_32831__$1 = state_32831;
var statearr_32833_34139 = state_32831__$1;
(statearr_32833_34139[(2)] = null);

(statearr_32833_34139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (1))){
var state_32831__$1 = state_32831;
var statearr_32834_34140 = state_32831__$1;
(statearr_32834_34140[(2)] = null);

(statearr_32834_34140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (4))){
var inst_32791 = (state_32831[(7)]);
var inst_32792 = (state_32831[(8)]);
var inst_32794 = (inst_32792 < inst_32791);
var state_32831__$1 = state_32831;
if(cljs.core.truth_(inst_32794)){
var statearr_32835_34143 = state_32831__$1;
(statearr_32835_34143[(1)] = (6));

} else {
var statearr_32836_34144 = state_32831__$1;
(statearr_32836_34144[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (15))){
var inst_32817 = (state_32831[(9)]);
var inst_32822 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32817);
var state_32831__$1 = state_32831;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32831__$1,(17),out,inst_32822);
} else {
if((state_val_32832 === (13))){
var inst_32817 = (state_32831[(9)]);
var inst_32817__$1 = (state_32831[(2)]);
var inst_32818 = cljs.core.some(cljs.core.nil_QMARK_,inst_32817__$1);
var state_32831__$1 = (function (){var statearr_32837 = state_32831;
(statearr_32837[(9)] = inst_32817__$1);

return statearr_32837;
})();
if(cljs.core.truth_(inst_32818)){
var statearr_32838_34148 = state_32831__$1;
(statearr_32838_34148[(1)] = (14));

} else {
var statearr_32839_34149 = state_32831__$1;
(statearr_32839_34149[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (6))){
var state_32831__$1 = state_32831;
var statearr_32840_34150 = state_32831__$1;
(statearr_32840_34150[(2)] = null);

(statearr_32840_34150[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (17))){
var inst_32824 = (state_32831[(2)]);
var state_32831__$1 = (function (){var statearr_32842 = state_32831;
(statearr_32842[(10)] = inst_32824);

return statearr_32842;
})();
var statearr_32843_34151 = state_32831__$1;
(statearr_32843_34151[(2)] = null);

(statearr_32843_34151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (3))){
var inst_32829 = (state_32831[(2)]);
var state_32831__$1 = state_32831;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32831__$1,inst_32829);
} else {
if((state_val_32832 === (12))){
var _ = (function (){var statearr_32844 = state_32831;
(statearr_32844[(4)] = cljs.core.rest((state_32831[(4)])));

return statearr_32844;
})();
var state_32831__$1 = state_32831;
var ex32841 = (state_32831__$1[(2)]);
var statearr_32845_34153 = state_32831__$1;
(statearr_32845_34153[(5)] = ex32841);


if((ex32841 instanceof Object)){
var statearr_32846_34155 = state_32831__$1;
(statearr_32846_34155[(1)] = (11));

(statearr_32846_34155[(5)] = null);

} else {
throw ex32841;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (2))){
var inst_32790 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32791 = cnt;
var inst_32792 = (0);
var state_32831__$1 = (function (){var statearr_32847 = state_32831;
(statearr_32847[(11)] = inst_32790);

(statearr_32847[(7)] = inst_32791);

(statearr_32847[(8)] = inst_32792);

return statearr_32847;
})();
var statearr_32848_34159 = state_32831__$1;
(statearr_32848_34159[(2)] = null);

(statearr_32848_34159[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (11))){
var inst_32796 = (state_32831[(2)]);
var inst_32797 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32831__$1 = (function (){var statearr_32849 = state_32831;
(statearr_32849[(12)] = inst_32796);

return statearr_32849;
})();
var statearr_32850_34160 = state_32831__$1;
(statearr_32850_34160[(2)] = inst_32797);

(statearr_32850_34160[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (9))){
var inst_32792 = (state_32831[(8)]);
var _ = (function (){var statearr_32851 = state_32831;
(statearr_32851[(4)] = cljs.core.cons((12),(state_32831[(4)])));

return statearr_32851;
})();
var inst_32803 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32792) : chs__$1.call(null,inst_32792));
var inst_32804 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32792) : done.call(null,inst_32792));
var inst_32805 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32803,inst_32804);
var ___$1 = (function (){var statearr_32852 = state_32831;
(statearr_32852[(4)] = cljs.core.rest((state_32831[(4)])));

return statearr_32852;
})();
var state_32831__$1 = state_32831;
var statearr_32853_34179 = state_32831__$1;
(statearr_32853_34179[(2)] = inst_32805);

(statearr_32853_34179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (5))){
var inst_32815 = (state_32831[(2)]);
var state_32831__$1 = (function (){var statearr_32854 = state_32831;
(statearr_32854[(13)] = inst_32815);

return statearr_32854;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32831__$1,(13),dchan);
} else {
if((state_val_32832 === (14))){
var inst_32820 = cljs.core.async.close_BANG_(out);
var state_32831__$1 = state_32831;
var statearr_32855_34185 = state_32831__$1;
(statearr_32855_34185[(2)] = inst_32820);

(statearr_32855_34185[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (16))){
var inst_32827 = (state_32831[(2)]);
var state_32831__$1 = state_32831;
var statearr_32856_34187 = state_32831__$1;
(statearr_32856_34187[(2)] = inst_32827);

(statearr_32856_34187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (10))){
var inst_32792 = (state_32831[(8)]);
var inst_32808 = (state_32831[(2)]);
var inst_32809 = (inst_32792 + (1));
var inst_32792__$1 = inst_32809;
var state_32831__$1 = (function (){var statearr_32857 = state_32831;
(statearr_32857[(14)] = inst_32808);

(statearr_32857[(8)] = inst_32792__$1);

return statearr_32857;
})();
var statearr_32858_34188 = state_32831__$1;
(statearr_32858_34188[(2)] = null);

(statearr_32858_34188[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32832 === (8))){
var inst_32813 = (state_32831[(2)]);
var state_32831__$1 = state_32831;
var statearr_32859_34189 = state_32831__$1;
(statearr_32859_34189[(2)] = inst_32813);

(statearr_32859_34189[(1)] = (5));


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
var cljs$core$async$state_machine__30978__auto__ = null;
var cljs$core$async$state_machine__30978__auto____0 = (function (){
var statearr_32860 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32860[(0)] = cljs$core$async$state_machine__30978__auto__);

(statearr_32860[(1)] = (1));

return statearr_32860;
});
var cljs$core$async$state_machine__30978__auto____1 = (function (state_32831){
while(true){
var ret_value__30979__auto__ = (function (){try{while(true){
var result__30980__auto__ = switch__30977__auto__(state_32831);
if(cljs.core.keyword_identical_QMARK_(result__30980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30980__auto__;
}
break;
}
}catch (e32861){var ex__30981__auto__ = e32861;
var statearr_32862_34190 = state_32831;
(statearr_32862_34190[(2)] = ex__30981__auto__);


if(cljs.core.seq((state_32831[(4)]))){
var statearr_32863_34191 = state_32831;
(statearr_32863_34191[(1)] = cljs.core.first((state_32831[(4)])));

} else {
throw ex__30981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34192 = state_32831;
state_32831 = G__34192;
continue;
} else {
return ret_value__30979__auto__;
}
break;
}
});
cljs$core$async$state_machine__30978__auto__ = function(state_32831){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30978__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30978__auto____1.call(this,state_32831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30978__auto____0;
cljs$core$async$state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30978__auto____1;
return cljs$core$async$state_machine__30978__auto__;
})()
})();
var state__31197__auto__ = (function (){var statearr_32864 = f__31196__auto__();
(statearr_32864[(6)] = c__31195__auto___34138);

return statearr_32864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31197__auto__);
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
var G__32867 = arguments.length;
switch (G__32867) {
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
var c__31195__auto___34194 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31196__auto__ = (function (){var switch__30977__auto__ = (function (state_32899){
var state_val_32900 = (state_32899[(1)]);
if((state_val_32900 === (7))){
var inst_32879 = (state_32899[(7)]);
var inst_32878 = (state_32899[(8)]);
var inst_32878__$1 = (state_32899[(2)]);
var inst_32879__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32878__$1,(0),null);
var inst_32880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32878__$1,(1),null);
var inst_32881 = (inst_32879__$1 == null);
var state_32899__$1 = (function (){var statearr_32901 = state_32899;
(statearr_32901[(7)] = inst_32879__$1);

(statearr_32901[(8)] = inst_32878__$1);

(statearr_32901[(9)] = inst_32880);

return statearr_32901;
})();
if(cljs.core.truth_(inst_32881)){
var statearr_32902_34215 = state_32899__$1;
(statearr_32902_34215[(1)] = (8));

} else {
var statearr_32903_34216 = state_32899__$1;
(statearr_32903_34216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (1))){
var inst_32868 = cljs.core.vec(chs);
var inst_32869 = inst_32868;
var state_32899__$1 = (function (){var statearr_32904 = state_32899;
(statearr_32904[(10)] = inst_32869);

return statearr_32904;
})();
var statearr_32905_34221 = state_32899__$1;
(statearr_32905_34221[(2)] = null);

(statearr_32905_34221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (4))){
var inst_32869 = (state_32899[(10)]);
var state_32899__$1 = state_32899;
return cljs.core.async.ioc_alts_BANG_(state_32899__$1,(7),inst_32869);
} else {
if((state_val_32900 === (6))){
var inst_32895 = (state_32899[(2)]);
var state_32899__$1 = state_32899;
var statearr_32906_34225 = state_32899__$1;
(statearr_32906_34225[(2)] = inst_32895);

(statearr_32906_34225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (3))){
var inst_32897 = (state_32899[(2)]);
var state_32899__$1 = state_32899;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32899__$1,inst_32897);
} else {
if((state_val_32900 === (2))){
var inst_32869 = (state_32899[(10)]);
var inst_32871 = cljs.core.count(inst_32869);
var inst_32872 = (inst_32871 > (0));
var state_32899__$1 = state_32899;
if(cljs.core.truth_(inst_32872)){
var statearr_32908_34226 = state_32899__$1;
(statearr_32908_34226[(1)] = (4));

} else {
var statearr_32909_34227 = state_32899__$1;
(statearr_32909_34227[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (11))){
var inst_32869 = (state_32899[(10)]);
var inst_32888 = (state_32899[(2)]);
var tmp32907 = inst_32869;
var inst_32869__$1 = tmp32907;
var state_32899__$1 = (function (){var statearr_32910 = state_32899;
(statearr_32910[(11)] = inst_32888);

(statearr_32910[(10)] = inst_32869__$1);

return statearr_32910;
})();
var statearr_32911_34229 = state_32899__$1;
(statearr_32911_34229[(2)] = null);

(statearr_32911_34229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (9))){
var inst_32879 = (state_32899[(7)]);
var state_32899__$1 = state_32899;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32899__$1,(11),out,inst_32879);
} else {
if((state_val_32900 === (5))){
var inst_32893 = cljs.core.async.close_BANG_(out);
var state_32899__$1 = state_32899;
var statearr_32912_34230 = state_32899__$1;
(statearr_32912_34230[(2)] = inst_32893);

(statearr_32912_34230[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (10))){
var inst_32891 = (state_32899[(2)]);
var state_32899__$1 = state_32899;
var statearr_32913_34231 = state_32899__$1;
(statearr_32913_34231[(2)] = inst_32891);

(statearr_32913_34231[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (8))){
var inst_32879 = (state_32899[(7)]);
var inst_32878 = (state_32899[(8)]);
var inst_32880 = (state_32899[(9)]);
var inst_32869 = (state_32899[(10)]);
var inst_32883 = (function (){var cs = inst_32869;
var vec__32874 = inst_32878;
var v = inst_32879;
var c = inst_32880;
return (function (p1__32865_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32865_SHARP_);
});
})();
var inst_32884 = cljs.core.filterv(inst_32883,inst_32869);
var inst_32869__$1 = inst_32884;
var state_32899__$1 = (function (){var statearr_32914 = state_32899;
(statearr_32914[(10)] = inst_32869__$1);

return statearr_32914;
})();
var statearr_32915_34232 = state_32899__$1;
(statearr_32915_34232[(2)] = null);

(statearr_32915_34232[(1)] = (2));


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
var cljs$core$async$state_machine__30978__auto__ = null;
var cljs$core$async$state_machine__30978__auto____0 = (function (){
var statearr_32916 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32916[(0)] = cljs$core$async$state_machine__30978__auto__);

(statearr_32916[(1)] = (1));

return statearr_32916;
});
var cljs$core$async$state_machine__30978__auto____1 = (function (state_32899){
while(true){
var ret_value__30979__auto__ = (function (){try{while(true){
var result__30980__auto__ = switch__30977__auto__(state_32899);
if(cljs.core.keyword_identical_QMARK_(result__30980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30980__auto__;
}
break;
}
}catch (e32917){var ex__30981__auto__ = e32917;
var statearr_32918_34237 = state_32899;
(statearr_32918_34237[(2)] = ex__30981__auto__);


if(cljs.core.seq((state_32899[(4)]))){
var statearr_32919_34238 = state_32899;
(statearr_32919_34238[(1)] = cljs.core.first((state_32899[(4)])));

} else {
throw ex__30981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34239 = state_32899;
state_32899 = G__34239;
continue;
} else {
return ret_value__30979__auto__;
}
break;
}
});
cljs$core$async$state_machine__30978__auto__ = function(state_32899){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30978__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30978__auto____1.call(this,state_32899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30978__auto____0;
cljs$core$async$state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30978__auto____1;
return cljs$core$async$state_machine__30978__auto__;
})()
})();
var state__31197__auto__ = (function (){var statearr_32920 = f__31196__auto__();
(statearr_32920[(6)] = c__31195__auto___34194);

return statearr_32920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31197__auto__);
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
var G__32922 = arguments.length;
switch (G__32922) {
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
var c__31195__auto___34245 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31196__auto__ = (function (){var switch__30977__auto__ = (function (state_32946){
var state_val_32947 = (state_32946[(1)]);
if((state_val_32947 === (7))){
var inst_32928 = (state_32946[(7)]);
var inst_32928__$1 = (state_32946[(2)]);
var inst_32929 = (inst_32928__$1 == null);
var inst_32930 = cljs.core.not(inst_32929);
var state_32946__$1 = (function (){var statearr_32949 = state_32946;
(statearr_32949[(7)] = inst_32928__$1);

return statearr_32949;
})();
if(inst_32930){
var statearr_32951_34246 = state_32946__$1;
(statearr_32951_34246[(1)] = (8));

} else {
var statearr_32952_34247 = state_32946__$1;
(statearr_32952_34247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (1))){
var inst_32923 = (0);
var state_32946__$1 = (function (){var statearr_32953 = state_32946;
(statearr_32953[(8)] = inst_32923);

return statearr_32953;
})();
var statearr_32954_34248 = state_32946__$1;
(statearr_32954_34248[(2)] = null);

(statearr_32954_34248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (4))){
var state_32946__$1 = state_32946;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32946__$1,(7),ch);
} else {
if((state_val_32947 === (6))){
var inst_32941 = (state_32946[(2)]);
var state_32946__$1 = state_32946;
var statearr_32955_34249 = state_32946__$1;
(statearr_32955_34249[(2)] = inst_32941);

(statearr_32955_34249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (3))){
var inst_32943 = (state_32946[(2)]);
var inst_32944 = cljs.core.async.close_BANG_(out);
var state_32946__$1 = (function (){var statearr_32956 = state_32946;
(statearr_32956[(9)] = inst_32943);

return statearr_32956;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32946__$1,inst_32944);
} else {
if((state_val_32947 === (2))){
var inst_32923 = (state_32946[(8)]);
var inst_32925 = (inst_32923 < n);
var state_32946__$1 = state_32946;
if(cljs.core.truth_(inst_32925)){
var statearr_32957_34251 = state_32946__$1;
(statearr_32957_34251[(1)] = (4));

} else {
var statearr_32958_34252 = state_32946__$1;
(statearr_32958_34252[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (11))){
var inst_32923 = (state_32946[(8)]);
var inst_32933 = (state_32946[(2)]);
var inst_32934 = (inst_32923 + (1));
var inst_32923__$1 = inst_32934;
var state_32946__$1 = (function (){var statearr_32960 = state_32946;
(statearr_32960[(8)] = inst_32923__$1);

(statearr_32960[(10)] = inst_32933);

return statearr_32960;
})();
var statearr_32961_34253 = state_32946__$1;
(statearr_32961_34253[(2)] = null);

(statearr_32961_34253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (9))){
var state_32946__$1 = state_32946;
var statearr_32962_34292 = state_32946__$1;
(statearr_32962_34292[(2)] = null);

(statearr_32962_34292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (5))){
var state_32946__$1 = state_32946;
var statearr_32963_34297 = state_32946__$1;
(statearr_32963_34297[(2)] = null);

(statearr_32963_34297[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (10))){
var inst_32938 = (state_32946[(2)]);
var state_32946__$1 = state_32946;
var statearr_32964_34301 = state_32946__$1;
(statearr_32964_34301[(2)] = inst_32938);

(statearr_32964_34301[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32947 === (8))){
var inst_32928 = (state_32946[(7)]);
var state_32946__$1 = state_32946;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32946__$1,(11),out,inst_32928);
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
var cljs$core$async$state_machine__30978__auto__ = null;
var cljs$core$async$state_machine__30978__auto____0 = (function (){
var statearr_32969 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32969[(0)] = cljs$core$async$state_machine__30978__auto__);

(statearr_32969[(1)] = (1));

return statearr_32969;
});
var cljs$core$async$state_machine__30978__auto____1 = (function (state_32946){
while(true){
var ret_value__30979__auto__ = (function (){try{while(true){
var result__30980__auto__ = switch__30977__auto__(state_32946);
if(cljs.core.keyword_identical_QMARK_(result__30980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30980__auto__;
}
break;
}
}catch (e32970){var ex__30981__auto__ = e32970;
var statearr_32971_34321 = state_32946;
(statearr_32971_34321[(2)] = ex__30981__auto__);


if(cljs.core.seq((state_32946[(4)]))){
var statearr_32972_34323 = state_32946;
(statearr_32972_34323[(1)] = cljs.core.first((state_32946[(4)])));

} else {
throw ex__30981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34330 = state_32946;
state_32946 = G__34330;
continue;
} else {
return ret_value__30979__auto__;
}
break;
}
});
cljs$core$async$state_machine__30978__auto__ = function(state_32946){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30978__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30978__auto____1.call(this,state_32946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30978__auto____0;
cljs$core$async$state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30978__auto____1;
return cljs$core$async$state_machine__30978__auto__;
})()
})();
var state__31197__auto__ = (function (){var statearr_32973 = f__31196__auto__();
(statearr_32973[(6)] = c__31195__auto___34245);

return statearr_32973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31197__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32977 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32977 = (function (f,ch,meta32978){
this.f = f;
this.ch = ch;
this.meta32978 = meta32978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32979,meta32978__$1){
var self__ = this;
var _32979__$1 = this;
return (new cljs.core.async.t_cljs$core$async32977(self__.f,self__.ch,meta32978__$1));
}));

(cljs.core.async.t_cljs$core$async32977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32979){
var self__ = this;
var _32979__$1 = this;
return self__.meta32978;
}));

(cljs.core.async.t_cljs$core$async32977.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32977.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32977.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32977.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32977.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32980 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32980 = (function (f,ch,meta32978,_,fn1,meta32981){
this.f = f;
this.ch = ch;
this.meta32978 = meta32978;
this._ = _;
this.fn1 = fn1;
this.meta32981 = meta32981;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32982,meta32981__$1){
var self__ = this;
var _32982__$1 = this;
return (new cljs.core.async.t_cljs$core$async32980(self__.f,self__.ch,self__.meta32978,self__._,self__.fn1,meta32981__$1));
}));

(cljs.core.async.t_cljs$core$async32980.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32982){
var self__ = this;
var _32982__$1 = this;
return self__.meta32981;
}));

(cljs.core.async.t_cljs$core$async32980.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32980.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32980.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32980.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32976_SHARP_){
var G__32983 = (((p1__32976_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32976_SHARP_) : self__.f.call(null,p1__32976_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32983) : f1.call(null,G__32983));
});
}));

(cljs.core.async.t_cljs$core$async32980.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32978","meta32978",95566102,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32977","cljs.core.async/t_cljs$core$async32977",1041529423,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32981","meta32981",-369682797,null)], null);
}));

(cljs.core.async.t_cljs$core$async32980.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32980.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32980");

(cljs.core.async.t_cljs$core$async32980.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32980");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32980.
 */
cljs.core.async.__GT_t_cljs$core$async32980 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32980(f__$1,ch__$1,meta32978__$1,___$2,fn1__$1,meta32981){
return (new cljs.core.async.t_cljs$core$async32980(f__$1,ch__$1,meta32978__$1,___$2,fn1__$1,meta32981));
});

}

return (new cljs.core.async.t_cljs$core$async32980(self__.f,self__.ch,self__.meta32978,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32984 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32984) : self__.f.call(null,G__32984));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32977.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32977.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32977.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32978","meta32978",95566102,null)], null);
}));

(cljs.core.async.t_cljs$core$async32977.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32977.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32977");

(cljs.core.async.t_cljs$core$async32977.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32977");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32977.
 */
cljs.core.async.__GT_t_cljs$core$async32977 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32977(f__$1,ch__$1,meta32978){
return (new cljs.core.async.t_cljs$core$async32977(f__$1,ch__$1,meta32978));
});

}

return (new cljs.core.async.t_cljs$core$async32977(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32988 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32988 = (function (f,ch,meta32989){
this.f = f;
this.ch = ch;
this.meta32989 = meta32989;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32990,meta32989__$1){
var self__ = this;
var _32990__$1 = this;
return (new cljs.core.async.t_cljs$core$async32988(self__.f,self__.ch,meta32989__$1));
}));

(cljs.core.async.t_cljs$core$async32988.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32990){
var self__ = this;
var _32990__$1 = this;
return self__.meta32989;
}));

(cljs.core.async.t_cljs$core$async32988.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32988.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32988.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32988.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32988.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32988.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32988.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32989","meta32989",869484574,null)], null);
}));

(cljs.core.async.t_cljs$core$async32988.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32988.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32988");

(cljs.core.async.t_cljs$core$async32988.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32988");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32988.
 */
cljs.core.async.__GT_t_cljs$core$async32988 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32988(f__$1,ch__$1,meta32989){
return (new cljs.core.async.t_cljs$core$async32988(f__$1,ch__$1,meta32989));
});

}

return (new cljs.core.async.t_cljs$core$async32988(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32999 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32999 = (function (p,ch,meta33000){
this.p = p;
this.ch = ch;
this.meta33000 = meta33000;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33001,meta33000__$1){
var self__ = this;
var _33001__$1 = this;
return (new cljs.core.async.t_cljs$core$async32999(self__.p,self__.ch,meta33000__$1));
}));

(cljs.core.async.t_cljs$core$async32999.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33001){
var self__ = this;
var _33001__$1 = this;
return self__.meta33000;
}));

(cljs.core.async.t_cljs$core$async32999.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32999.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32999.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32999.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32999.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32999.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32999.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32999.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33000","meta33000",1845282059,null)], null);
}));

(cljs.core.async.t_cljs$core$async32999.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32999.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32999");

(cljs.core.async.t_cljs$core$async32999.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32999");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32999.
 */
cljs.core.async.__GT_t_cljs$core$async32999 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32999(p__$1,ch__$1,meta33000){
return (new cljs.core.async.t_cljs$core$async32999(p__$1,ch__$1,meta33000));
});

}

return (new cljs.core.async.t_cljs$core$async32999(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33006 = arguments.length;
switch (G__33006) {
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
var c__31195__auto___34388 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31196__auto__ = (function (){var switch__30977__auto__ = (function (state_33027){
var state_val_33028 = (state_33027[(1)]);
if((state_val_33028 === (7))){
var inst_33023 = (state_33027[(2)]);
var state_33027__$1 = state_33027;
var statearr_33031_34392 = state_33027__$1;
(statearr_33031_34392[(2)] = inst_33023);

(statearr_33031_34392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33028 === (1))){
var state_33027__$1 = state_33027;
var statearr_33033_34393 = state_33027__$1;
(statearr_33033_34393[(2)] = null);

(statearr_33033_34393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33028 === (4))){
var inst_33009 = (state_33027[(7)]);
var inst_33009__$1 = (state_33027[(2)]);
var inst_33010 = (inst_33009__$1 == null);
var state_33027__$1 = (function (){var statearr_33034 = state_33027;
(statearr_33034[(7)] = inst_33009__$1);

return statearr_33034;
})();
if(cljs.core.truth_(inst_33010)){
var statearr_33035_34394 = state_33027__$1;
(statearr_33035_34394[(1)] = (5));

} else {
var statearr_33036_34395 = state_33027__$1;
(statearr_33036_34395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33028 === (6))){
var inst_33009 = (state_33027[(7)]);
var inst_33014 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33009) : p.call(null,inst_33009));
var state_33027__$1 = state_33027;
if(cljs.core.truth_(inst_33014)){
var statearr_33037_34396 = state_33027__$1;
(statearr_33037_34396[(1)] = (8));

} else {
var statearr_33039_34397 = state_33027__$1;
(statearr_33039_34397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33028 === (3))){
var inst_33025 = (state_33027[(2)]);
var state_33027__$1 = state_33027;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33027__$1,inst_33025);
} else {
if((state_val_33028 === (2))){
var state_33027__$1 = state_33027;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33027__$1,(4),ch);
} else {
if((state_val_33028 === (11))){
var inst_33017 = (state_33027[(2)]);
var state_33027__$1 = state_33027;
var statearr_33040_34416 = state_33027__$1;
(statearr_33040_34416[(2)] = inst_33017);

(statearr_33040_34416[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33028 === (9))){
var state_33027__$1 = state_33027;
var statearr_33041_34417 = state_33027__$1;
(statearr_33041_34417[(2)] = null);

(statearr_33041_34417[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33028 === (5))){
var inst_33012 = cljs.core.async.close_BANG_(out);
var state_33027__$1 = state_33027;
var statearr_33042_34419 = state_33027__$1;
(statearr_33042_34419[(2)] = inst_33012);

(statearr_33042_34419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33028 === (10))){
var inst_33020 = (state_33027[(2)]);
var state_33027__$1 = (function (){var statearr_33043 = state_33027;
(statearr_33043[(8)] = inst_33020);

return statearr_33043;
})();
var statearr_33044_34420 = state_33027__$1;
(statearr_33044_34420[(2)] = null);

(statearr_33044_34420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33028 === (8))){
var inst_33009 = (state_33027[(7)]);
var state_33027__$1 = state_33027;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33027__$1,(11),out,inst_33009);
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
var cljs$core$async$state_machine__30978__auto__ = null;
var cljs$core$async$state_machine__30978__auto____0 = (function (){
var statearr_33045 = [null,null,null,null,null,null,null,null,null];
(statearr_33045[(0)] = cljs$core$async$state_machine__30978__auto__);

(statearr_33045[(1)] = (1));

return statearr_33045;
});
var cljs$core$async$state_machine__30978__auto____1 = (function (state_33027){
while(true){
var ret_value__30979__auto__ = (function (){try{while(true){
var result__30980__auto__ = switch__30977__auto__(state_33027);
if(cljs.core.keyword_identical_QMARK_(result__30980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30980__auto__;
}
break;
}
}catch (e33046){var ex__30981__auto__ = e33046;
var statearr_33047_34421 = state_33027;
(statearr_33047_34421[(2)] = ex__30981__auto__);


if(cljs.core.seq((state_33027[(4)]))){
var statearr_33048_34422 = state_33027;
(statearr_33048_34422[(1)] = cljs.core.first((state_33027[(4)])));

} else {
throw ex__30981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34423 = state_33027;
state_33027 = G__34423;
continue;
} else {
return ret_value__30979__auto__;
}
break;
}
});
cljs$core$async$state_machine__30978__auto__ = function(state_33027){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30978__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30978__auto____1.call(this,state_33027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30978__auto____0;
cljs$core$async$state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30978__auto____1;
return cljs$core$async$state_machine__30978__auto__;
})()
})();
var state__31197__auto__ = (function (){var statearr_33049 = f__31196__auto__();
(statearr_33049[(6)] = c__31195__auto___34388);

return statearr_33049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31197__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33052 = arguments.length;
switch (G__33052) {
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
var c__31195__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31196__auto__ = (function (){var switch__30977__auto__ = (function (state_33114){
var state_val_33115 = (state_33114[(1)]);
if((state_val_33115 === (7))){
var inst_33110 = (state_33114[(2)]);
var state_33114__$1 = state_33114;
var statearr_33118_34433 = state_33114__$1;
(statearr_33118_34433[(2)] = inst_33110);

(statearr_33118_34433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33115 === (20))){
var inst_33080 = (state_33114[(7)]);
var inst_33091 = (state_33114[(2)]);
var inst_33092 = cljs.core.next(inst_33080);
var inst_33066 = inst_33092;
var inst_33067 = null;
var inst_33068 = (0);
var inst_33069 = (0);
var state_33114__$1 = (function (){var statearr_33119 = state_33114;
(statearr_33119[(8)] = inst_33067);

(statearr_33119[(9)] = inst_33068);

(statearr_33119[(10)] = inst_33091);

(statearr_33119[(11)] = inst_33069);

(statearr_33119[(12)] = inst_33066);

return statearr_33119;
})();
var statearr_33120_34434 = state_33114__$1;
(statearr_33120_34434[(2)] = null);

(statearr_33120_34434[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33115 === (1))){
var state_33114__$1 = state_33114;
var statearr_33121_34440 = state_33114__$1;
(statearr_33121_34440[(2)] = null);

(statearr_33121_34440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33115 === (4))){
var inst_33055 = (state_33114[(13)]);
var inst_33055__$1 = (state_33114[(2)]);
var inst_33056 = (inst_33055__$1 == null);
var state_33114__$1 = (function (){var statearr_33122 = state_33114;
(statearr_33122[(13)] = inst_33055__$1);

return statearr_33122;
})();
if(cljs.core.truth_(inst_33056)){
var statearr_33123_34441 = state_33114__$1;
(statearr_33123_34441[(1)] = (5));

} else {
var statearr_33124_34442 = state_33114__$1;
(statearr_33124_34442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33115 === (15))){
var state_33114__$1 = state_33114;
var statearr_33128_34443 = state_33114__$1;
(statearr_33128_34443[(2)] = null);

(statearr_33128_34443[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33115 === (21))){
var state_33114__$1 = state_33114;
var statearr_33129_34444 = state_33114__$1;
(statearr_33129_34444[(2)] = null);

(statearr_33129_34444[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33115 === (13))){
var inst_33067 = (state_33114[(8)]);
var inst_33068 = (state_33114[(9)]);
var inst_33069 = (state_33114[(11)]);
var inst_33066 = (state_33114[(12)]);
var inst_33076 = (state_33114[(2)]);
var inst_33077 = (inst_33069 + (1));
var tmp33125 = inst_33067;
var tmp33126 = inst_33068;
var tmp33127 = inst_33066;
var inst_33066__$1 = tmp33127;
var inst_33067__$1 = tmp33125;
var inst_33068__$1 = tmp33126;
var inst_33069__$1 = inst_33077;
var state_33114__$1 = (function (){var statearr_33131 = state_33114;
(statearr_33131[(8)] = inst_33067__$1);

(statearr_33131[(9)] = inst_33068__$1);

(statearr_33131[(14)] = inst_33076);

(statearr_33131[(11)] = inst_33069__$1);

(statearr_33131[(12)] = inst_33066__$1);

return statearr_33131;
})();
var statearr_33132_34445 = state_33114__$1;
(statearr_33132_34445[(2)] = null);

(statearr_33132_34445[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33115 === (22))){
var state_33114__$1 = state_33114;
var statearr_33133_34446 = state_33114__$1;
(statearr_33133_34446[(2)] = null);

(statearr_33133_34446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33115 === (6))){
var inst_33055 = (state_33114[(13)]);
var inst_33064 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33055) : f.call(null,inst_33055));
var inst_33065 = cljs.core.seq(inst_33064);
var inst_33066 = inst_33065;
var inst_33067 = null;
var inst_33068 = (0);
var inst_33069 = (0);
var state_33114__$1 = (function (){var statearr_33136 = state_33114;
(statearr_33136[(8)] = inst_33067);

(statearr_33136[(9)] = inst_33068);

(statearr_33136[(11)] = inst_33069);

(statearr_33136[(12)] = inst_33066);

return statearr_33136;
})();
var statearr_33137_34447 = state_33114__$1;
(statearr_33137_34447[(2)] = null);

(statearr_33137_34447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33115 === (17))){
var inst_33080 = (state_33114[(7)]);
var inst_33084 = cljs.core.chunk_first(inst_33080);
var inst_33085 = cljs.core.chunk_rest(inst_33080);
var inst_33086 = cljs.core.count(inst_33084);
var inst_33066 = inst_33085;
var inst_33067 = inst_33084;
var inst_33068 = inst_33086;
var inst_33069 = (0);
var state_33114__$1 = (function (){var statearr_33138 = state_33114;
(statearr_33138[(8)] = inst_33067);

(statearr_33138[(9)] = inst_33068);

(statearr_33138[(11)] = inst_33069);

(statearr_33138[(12)] = inst_33066);

return statearr_33138;
})();
var statearr_33139_34448 = state_33114__$1;
(statearr_33139_34448[(2)] = null);

(statearr_33139_34448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33115 === (3))){
var inst_33112 = (state_33114[(2)]);
var state_33114__$1 = state_33114;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33114__$1,inst_33112);
} else {
if((state_val_33115 === (12))){
var inst_33100 = (state_33114[(2)]);
var state_33114__$1 = state_33114;
var statearr_33140_34449 = state_33114__$1;
(statearr_33140_34449[(2)] = inst_33100);

(statearr_33140_34449[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33115 === (2))){
var state_33114__$1 = state_33114;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33114__$1,(4),in$);
} else {
if((state_val_33115 === (23))){
var inst_33108 = (state_33114[(2)]);
var state_33114__$1 = state_33114;
var statearr_33142_34450 = state_33114__$1;
(statearr_33142_34450[(2)] = inst_33108);

(statearr_33142_34450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33115 === (19))){
var inst_33095 = (state_33114[(2)]);
var state_33114__$1 = state_33114;
var statearr_33144_34451 = state_33114__$1;
(statearr_33144_34451[(2)] = inst_33095);

(statearr_33144_34451[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33115 === (11))){
var inst_33066 = (state_33114[(12)]);
var inst_33080 = (state_33114[(7)]);
var inst_33080__$1 = cljs.core.seq(inst_33066);
var state_33114__$1 = (function (){var statearr_33145 = state_33114;
(statearr_33145[(7)] = inst_33080__$1);

return statearr_33145;
})();
if(inst_33080__$1){
var statearr_33146_34452 = state_33114__$1;
(statearr_33146_34452[(1)] = (14));

} else {
var statearr_33147_34453 = state_33114__$1;
(statearr_33147_34453[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33115 === (9))){
var inst_33102 = (state_33114[(2)]);
var inst_33103 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33114__$1 = (function (){var statearr_33150 = state_33114;
(statearr_33150[(15)] = inst_33102);

return statearr_33150;
})();
if(cljs.core.truth_(inst_33103)){
var statearr_33152_34454 = state_33114__$1;
(statearr_33152_34454[(1)] = (21));

} else {
var statearr_33153_34455 = state_33114__$1;
(statearr_33153_34455[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33115 === (5))){
var inst_33058 = cljs.core.async.close_BANG_(out);
var state_33114__$1 = state_33114;
var statearr_33154_34456 = state_33114__$1;
(statearr_33154_34456[(2)] = inst_33058);

(statearr_33154_34456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33115 === (14))){
var inst_33080 = (state_33114[(7)]);
var inst_33082 = cljs.core.chunked_seq_QMARK_(inst_33080);
var state_33114__$1 = state_33114;
if(inst_33082){
var statearr_33156_34457 = state_33114__$1;
(statearr_33156_34457[(1)] = (17));

} else {
var statearr_33157_34458 = state_33114__$1;
(statearr_33157_34458[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33115 === (16))){
var inst_33098 = (state_33114[(2)]);
var state_33114__$1 = state_33114;
var statearr_33158_34460 = state_33114__$1;
(statearr_33158_34460[(2)] = inst_33098);

(statearr_33158_34460[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33115 === (10))){
var inst_33067 = (state_33114[(8)]);
var inst_33069 = (state_33114[(11)]);
var inst_33074 = cljs.core._nth(inst_33067,inst_33069);
var state_33114__$1 = state_33114;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33114__$1,(13),out,inst_33074);
} else {
if((state_val_33115 === (18))){
var inst_33080 = (state_33114[(7)]);
var inst_33089 = cljs.core.first(inst_33080);
var state_33114__$1 = state_33114;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33114__$1,(20),out,inst_33089);
} else {
if((state_val_33115 === (8))){
var inst_33068 = (state_33114[(9)]);
var inst_33069 = (state_33114[(11)]);
var inst_33071 = (inst_33069 < inst_33068);
var inst_33072 = inst_33071;
var state_33114__$1 = state_33114;
if(cljs.core.truth_(inst_33072)){
var statearr_33159_34461 = state_33114__$1;
(statearr_33159_34461[(1)] = (10));

} else {
var statearr_33160_34462 = state_33114__$1;
(statearr_33160_34462[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__30978__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30978__auto____0 = (function (){
var statearr_33161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33161[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30978__auto__);

(statearr_33161[(1)] = (1));

return statearr_33161;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30978__auto____1 = (function (state_33114){
while(true){
var ret_value__30979__auto__ = (function (){try{while(true){
var result__30980__auto__ = switch__30977__auto__(state_33114);
if(cljs.core.keyword_identical_QMARK_(result__30980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30980__auto__;
}
break;
}
}catch (e33163){var ex__30981__auto__ = e33163;
var statearr_33164_34463 = state_33114;
(statearr_33164_34463[(2)] = ex__30981__auto__);


if(cljs.core.seq((state_33114[(4)]))){
var statearr_33166_34464 = state_33114;
(statearr_33166_34464[(1)] = cljs.core.first((state_33114[(4)])));

} else {
throw ex__30981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34465 = state_33114;
state_33114 = G__34465;
continue;
} else {
return ret_value__30979__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30978__auto__ = function(state_33114){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30978__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30978__auto____1.call(this,state_33114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30978__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30978__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30978__auto__;
})()
})();
var state__31197__auto__ = (function (){var statearr_33167 = f__31196__auto__();
(statearr_33167[(6)] = c__31195__auto__);

return statearr_33167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31197__auto__);
}));

return c__31195__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33169 = arguments.length;
switch (G__33169) {
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
var G__33172 = arguments.length;
switch (G__33172) {
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
var G__33176 = arguments.length;
switch (G__33176) {
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
var c__31195__auto___34469 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31196__auto__ = (function (){var switch__30977__auto__ = (function (state_33206){
var state_val_33207 = (state_33206[(1)]);
if((state_val_33207 === (7))){
var inst_33201 = (state_33206[(2)]);
var state_33206__$1 = state_33206;
var statearr_33209_34470 = state_33206__$1;
(statearr_33209_34470[(2)] = inst_33201);

(statearr_33209_34470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (1))){
var inst_33183 = null;
var state_33206__$1 = (function (){var statearr_33210 = state_33206;
(statearr_33210[(7)] = inst_33183);

return statearr_33210;
})();
var statearr_33211_34471 = state_33206__$1;
(statearr_33211_34471[(2)] = null);

(statearr_33211_34471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (4))){
var inst_33186 = (state_33206[(8)]);
var inst_33186__$1 = (state_33206[(2)]);
var inst_33187 = (inst_33186__$1 == null);
var inst_33188 = cljs.core.not(inst_33187);
var state_33206__$1 = (function (){var statearr_33212 = state_33206;
(statearr_33212[(8)] = inst_33186__$1);

return statearr_33212;
})();
if(inst_33188){
var statearr_33213_34472 = state_33206__$1;
(statearr_33213_34472[(1)] = (5));

} else {
var statearr_33214_34473 = state_33206__$1;
(statearr_33214_34473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (6))){
var state_33206__$1 = state_33206;
var statearr_33215_34474 = state_33206__$1;
(statearr_33215_34474[(2)] = null);

(statearr_33215_34474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (3))){
var inst_33203 = (state_33206[(2)]);
var inst_33204 = cljs.core.async.close_BANG_(out);
var state_33206__$1 = (function (){var statearr_33218 = state_33206;
(statearr_33218[(9)] = inst_33203);

return statearr_33218;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33206__$1,inst_33204);
} else {
if((state_val_33207 === (2))){
var state_33206__$1 = state_33206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33206__$1,(4),ch);
} else {
if((state_val_33207 === (11))){
var inst_33186 = (state_33206[(8)]);
var inst_33195 = (state_33206[(2)]);
var inst_33183 = inst_33186;
var state_33206__$1 = (function (){var statearr_33220 = state_33206;
(statearr_33220[(7)] = inst_33183);

(statearr_33220[(10)] = inst_33195);

return statearr_33220;
})();
var statearr_33221_34475 = state_33206__$1;
(statearr_33221_34475[(2)] = null);

(statearr_33221_34475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (9))){
var inst_33186 = (state_33206[(8)]);
var state_33206__$1 = state_33206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33206__$1,(11),out,inst_33186);
} else {
if((state_val_33207 === (5))){
var inst_33183 = (state_33206[(7)]);
var inst_33186 = (state_33206[(8)]);
var inst_33190 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33186,inst_33183);
var state_33206__$1 = state_33206;
if(inst_33190){
var statearr_33225_34478 = state_33206__$1;
(statearr_33225_34478[(1)] = (8));

} else {
var statearr_33228_34479 = state_33206__$1;
(statearr_33228_34479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (10))){
var inst_33198 = (state_33206[(2)]);
var state_33206__$1 = state_33206;
var statearr_33229_34480 = state_33206__$1;
(statearr_33229_34480[(2)] = inst_33198);

(statearr_33229_34480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33207 === (8))){
var inst_33183 = (state_33206[(7)]);
var tmp33222 = inst_33183;
var inst_33183__$1 = tmp33222;
var state_33206__$1 = (function (){var statearr_33230 = state_33206;
(statearr_33230[(7)] = inst_33183__$1);

return statearr_33230;
})();
var statearr_33231_34482 = state_33206__$1;
(statearr_33231_34482[(2)] = null);

(statearr_33231_34482[(1)] = (2));


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
var cljs$core$async$state_machine__30978__auto__ = null;
var cljs$core$async$state_machine__30978__auto____0 = (function (){
var statearr_33232 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33232[(0)] = cljs$core$async$state_machine__30978__auto__);

(statearr_33232[(1)] = (1));

return statearr_33232;
});
var cljs$core$async$state_machine__30978__auto____1 = (function (state_33206){
while(true){
var ret_value__30979__auto__ = (function (){try{while(true){
var result__30980__auto__ = switch__30977__auto__(state_33206);
if(cljs.core.keyword_identical_QMARK_(result__30980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30980__auto__;
}
break;
}
}catch (e33233){var ex__30981__auto__ = e33233;
var statearr_33234_34483 = state_33206;
(statearr_33234_34483[(2)] = ex__30981__auto__);


if(cljs.core.seq((state_33206[(4)]))){
var statearr_33235_34484 = state_33206;
(statearr_33235_34484[(1)] = cljs.core.first((state_33206[(4)])));

} else {
throw ex__30981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34485 = state_33206;
state_33206 = G__34485;
continue;
} else {
return ret_value__30979__auto__;
}
break;
}
});
cljs$core$async$state_machine__30978__auto__ = function(state_33206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30978__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30978__auto____1.call(this,state_33206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30978__auto____0;
cljs$core$async$state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30978__auto____1;
return cljs$core$async$state_machine__30978__auto__;
})()
})();
var state__31197__auto__ = (function (){var statearr_33236 = f__31196__auto__();
(statearr_33236[(6)] = c__31195__auto___34469);

return statearr_33236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31197__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33238 = arguments.length;
switch (G__33238) {
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
var c__31195__auto___34491 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31196__auto__ = (function (){var switch__30977__auto__ = (function (state_33277){
var state_val_33278 = (state_33277[(1)]);
if((state_val_33278 === (7))){
var inst_33273 = (state_33277[(2)]);
var state_33277__$1 = state_33277;
var statearr_33279_34492 = state_33277__$1;
(statearr_33279_34492[(2)] = inst_33273);

(statearr_33279_34492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (1))){
var inst_33240 = (new Array(n));
var inst_33241 = inst_33240;
var inst_33242 = (0);
var state_33277__$1 = (function (){var statearr_33280 = state_33277;
(statearr_33280[(7)] = inst_33241);

(statearr_33280[(8)] = inst_33242);

return statearr_33280;
})();
var statearr_33283_34497 = state_33277__$1;
(statearr_33283_34497[(2)] = null);

(statearr_33283_34497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (4))){
var inst_33245 = (state_33277[(9)]);
var inst_33245__$1 = (state_33277[(2)]);
var inst_33246 = (inst_33245__$1 == null);
var inst_33247 = cljs.core.not(inst_33246);
var state_33277__$1 = (function (){var statearr_33284 = state_33277;
(statearr_33284[(9)] = inst_33245__$1);

return statearr_33284;
})();
if(inst_33247){
var statearr_33285_34501 = state_33277__$1;
(statearr_33285_34501[(1)] = (5));

} else {
var statearr_33286_34506 = state_33277__$1;
(statearr_33286_34506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (15))){
var inst_33267 = (state_33277[(2)]);
var state_33277__$1 = state_33277;
var statearr_33287_34510 = state_33277__$1;
(statearr_33287_34510[(2)] = inst_33267);

(statearr_33287_34510[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (13))){
var state_33277__$1 = state_33277;
var statearr_33289_34518 = state_33277__$1;
(statearr_33289_34518[(2)] = null);

(statearr_33289_34518[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (6))){
var inst_33242 = (state_33277[(8)]);
var inst_33263 = (inst_33242 > (0));
var state_33277__$1 = state_33277;
if(cljs.core.truth_(inst_33263)){
var statearr_33290_34519 = state_33277__$1;
(statearr_33290_34519[(1)] = (12));

} else {
var statearr_33291_34524 = state_33277__$1;
(statearr_33291_34524[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (3))){
var inst_33275 = (state_33277[(2)]);
var state_33277__$1 = state_33277;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33277__$1,inst_33275);
} else {
if((state_val_33278 === (12))){
var inst_33241 = (state_33277[(7)]);
var inst_33265 = cljs.core.vec(inst_33241);
var state_33277__$1 = state_33277;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33277__$1,(15),out,inst_33265);
} else {
if((state_val_33278 === (2))){
var state_33277__$1 = state_33277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33277__$1,(4),ch);
} else {
if((state_val_33278 === (11))){
var inst_33257 = (state_33277[(2)]);
var inst_33258 = (new Array(n));
var inst_33241 = inst_33258;
var inst_33242 = (0);
var state_33277__$1 = (function (){var statearr_33292 = state_33277;
(statearr_33292[(10)] = inst_33257);

(statearr_33292[(7)] = inst_33241);

(statearr_33292[(8)] = inst_33242);

return statearr_33292;
})();
var statearr_33293_34530 = state_33277__$1;
(statearr_33293_34530[(2)] = null);

(statearr_33293_34530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (9))){
var inst_33241 = (state_33277[(7)]);
var inst_33255 = cljs.core.vec(inst_33241);
var state_33277__$1 = state_33277;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33277__$1,(11),out,inst_33255);
} else {
if((state_val_33278 === (5))){
var inst_33250 = (state_33277[(11)]);
var inst_33245 = (state_33277[(9)]);
var inst_33241 = (state_33277[(7)]);
var inst_33242 = (state_33277[(8)]);
var inst_33249 = (inst_33241[inst_33242] = inst_33245);
var inst_33250__$1 = (inst_33242 + (1));
var inst_33251 = (inst_33250__$1 < n);
var state_33277__$1 = (function (){var statearr_33295 = state_33277;
(statearr_33295[(12)] = inst_33249);

(statearr_33295[(11)] = inst_33250__$1);

return statearr_33295;
})();
if(cljs.core.truth_(inst_33251)){
var statearr_33296_34549 = state_33277__$1;
(statearr_33296_34549[(1)] = (8));

} else {
var statearr_33297_34554 = state_33277__$1;
(statearr_33297_34554[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (14))){
var inst_33270 = (state_33277[(2)]);
var inst_33271 = cljs.core.async.close_BANG_(out);
var state_33277__$1 = (function (){var statearr_33299 = state_33277;
(statearr_33299[(13)] = inst_33270);

return statearr_33299;
})();
var statearr_33300_34564 = state_33277__$1;
(statearr_33300_34564[(2)] = inst_33271);

(statearr_33300_34564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (10))){
var inst_33261 = (state_33277[(2)]);
var state_33277__$1 = state_33277;
var statearr_33301_34573 = state_33277__$1;
(statearr_33301_34573[(2)] = inst_33261);

(statearr_33301_34573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (8))){
var inst_33250 = (state_33277[(11)]);
var inst_33241 = (state_33277[(7)]);
var tmp33298 = inst_33241;
var inst_33241__$1 = tmp33298;
var inst_33242 = inst_33250;
var state_33277__$1 = (function (){var statearr_33302 = state_33277;
(statearr_33302[(7)] = inst_33241__$1);

(statearr_33302[(8)] = inst_33242);

return statearr_33302;
})();
var statearr_33303_34582 = state_33277__$1;
(statearr_33303_34582[(2)] = null);

(statearr_33303_34582[(1)] = (2));


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
var cljs$core$async$state_machine__30978__auto__ = null;
var cljs$core$async$state_machine__30978__auto____0 = (function (){
var statearr_33304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33304[(0)] = cljs$core$async$state_machine__30978__auto__);

(statearr_33304[(1)] = (1));

return statearr_33304;
});
var cljs$core$async$state_machine__30978__auto____1 = (function (state_33277){
while(true){
var ret_value__30979__auto__ = (function (){try{while(true){
var result__30980__auto__ = switch__30977__auto__(state_33277);
if(cljs.core.keyword_identical_QMARK_(result__30980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30980__auto__;
}
break;
}
}catch (e33305){var ex__30981__auto__ = e33305;
var statearr_33306_34596 = state_33277;
(statearr_33306_34596[(2)] = ex__30981__auto__);


if(cljs.core.seq((state_33277[(4)]))){
var statearr_33307_34601 = state_33277;
(statearr_33307_34601[(1)] = cljs.core.first((state_33277[(4)])));

} else {
throw ex__30981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34609 = state_33277;
state_33277 = G__34609;
continue;
} else {
return ret_value__30979__auto__;
}
break;
}
});
cljs$core$async$state_machine__30978__auto__ = function(state_33277){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30978__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30978__auto____1.call(this,state_33277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30978__auto____0;
cljs$core$async$state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30978__auto____1;
return cljs$core$async$state_machine__30978__auto__;
})()
})();
var state__31197__auto__ = (function (){var statearr_33308 = f__31196__auto__();
(statearr_33308[(6)] = c__31195__auto___34491);

return statearr_33308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31197__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33310 = arguments.length;
switch (G__33310) {
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
var c__31195__auto___34630 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31196__auto__ = (function (){var switch__30977__auto__ = (function (state_33352){
var state_val_33353 = (state_33352[(1)]);
if((state_val_33353 === (7))){
var inst_33348 = (state_33352[(2)]);
var state_33352__$1 = state_33352;
var statearr_33354_34631 = state_33352__$1;
(statearr_33354_34631[(2)] = inst_33348);

(statearr_33354_34631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33353 === (1))){
var inst_33311 = [];
var inst_33312 = inst_33311;
var inst_33313 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33352__$1 = (function (){var statearr_33355 = state_33352;
(statearr_33355[(7)] = inst_33313);

(statearr_33355[(8)] = inst_33312);

return statearr_33355;
})();
var statearr_33356_34640 = state_33352__$1;
(statearr_33356_34640[(2)] = null);

(statearr_33356_34640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33353 === (4))){
var inst_33316 = (state_33352[(9)]);
var inst_33316__$1 = (state_33352[(2)]);
var inst_33317 = (inst_33316__$1 == null);
var inst_33318 = cljs.core.not(inst_33317);
var state_33352__$1 = (function (){var statearr_33357 = state_33352;
(statearr_33357[(9)] = inst_33316__$1);

return statearr_33357;
})();
if(inst_33318){
var statearr_33358_34641 = state_33352__$1;
(statearr_33358_34641[(1)] = (5));

} else {
var statearr_33359_34642 = state_33352__$1;
(statearr_33359_34642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33353 === (15))){
var inst_33342 = (state_33352[(2)]);
var state_33352__$1 = state_33352;
var statearr_33360_34646 = state_33352__$1;
(statearr_33360_34646[(2)] = inst_33342);

(statearr_33360_34646[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33353 === (13))){
var state_33352__$1 = state_33352;
var statearr_33361_34647 = state_33352__$1;
(statearr_33361_34647[(2)] = null);

(statearr_33361_34647[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33353 === (6))){
var inst_33312 = (state_33352[(8)]);
var inst_33337 = inst_33312.length;
var inst_33338 = (inst_33337 > (0));
var state_33352__$1 = state_33352;
if(cljs.core.truth_(inst_33338)){
var statearr_33362_34649 = state_33352__$1;
(statearr_33362_34649[(1)] = (12));

} else {
var statearr_33363_34650 = state_33352__$1;
(statearr_33363_34650[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33353 === (3))){
var inst_33350 = (state_33352[(2)]);
var state_33352__$1 = state_33352;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33352__$1,inst_33350);
} else {
if((state_val_33353 === (12))){
var inst_33312 = (state_33352[(8)]);
var inst_33340 = cljs.core.vec(inst_33312);
var state_33352__$1 = state_33352;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33352__$1,(15),out,inst_33340);
} else {
if((state_val_33353 === (2))){
var state_33352__$1 = state_33352;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33352__$1,(4),ch);
} else {
if((state_val_33353 === (11))){
var inst_33320 = (state_33352[(10)]);
var inst_33316 = (state_33352[(9)]);
var inst_33330 = (state_33352[(2)]);
var inst_33331 = [];
var inst_33332 = inst_33331.push(inst_33316);
var inst_33312 = inst_33331;
var inst_33313 = inst_33320;
var state_33352__$1 = (function (){var statearr_33364 = state_33352;
(statearr_33364[(7)] = inst_33313);

(statearr_33364[(11)] = inst_33332);

(statearr_33364[(12)] = inst_33330);

(statearr_33364[(8)] = inst_33312);

return statearr_33364;
})();
var statearr_33365_34654 = state_33352__$1;
(statearr_33365_34654[(2)] = null);

(statearr_33365_34654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33353 === (9))){
var inst_33312 = (state_33352[(8)]);
var inst_33328 = cljs.core.vec(inst_33312);
var state_33352__$1 = state_33352;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33352__$1,(11),out,inst_33328);
} else {
if((state_val_33353 === (5))){
var inst_33313 = (state_33352[(7)]);
var inst_33320 = (state_33352[(10)]);
var inst_33316 = (state_33352[(9)]);
var inst_33320__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33316) : f.call(null,inst_33316));
var inst_33321 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33320__$1,inst_33313);
var inst_33322 = cljs.core.keyword_identical_QMARK_(inst_33313,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33323 = ((inst_33321) || (inst_33322));
var state_33352__$1 = (function (){var statearr_33366 = state_33352;
(statearr_33366[(10)] = inst_33320__$1);

return statearr_33366;
})();
if(cljs.core.truth_(inst_33323)){
var statearr_33367_34657 = state_33352__$1;
(statearr_33367_34657[(1)] = (8));

} else {
var statearr_33368_34658 = state_33352__$1;
(statearr_33368_34658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33353 === (14))){
var inst_33345 = (state_33352[(2)]);
var inst_33346 = cljs.core.async.close_BANG_(out);
var state_33352__$1 = (function (){var statearr_33370 = state_33352;
(statearr_33370[(13)] = inst_33345);

return statearr_33370;
})();
var statearr_33371_34660 = state_33352__$1;
(statearr_33371_34660[(2)] = inst_33346);

(statearr_33371_34660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33353 === (10))){
var inst_33335 = (state_33352[(2)]);
var state_33352__$1 = state_33352;
var statearr_33372_34661 = state_33352__$1;
(statearr_33372_34661[(2)] = inst_33335);

(statearr_33372_34661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33353 === (8))){
var inst_33312 = (state_33352[(8)]);
var inst_33320 = (state_33352[(10)]);
var inst_33316 = (state_33352[(9)]);
var inst_33325 = inst_33312.push(inst_33316);
var tmp33369 = inst_33312;
var inst_33312__$1 = tmp33369;
var inst_33313 = inst_33320;
var state_33352__$1 = (function (){var statearr_33373 = state_33352;
(statearr_33373[(7)] = inst_33313);

(statearr_33373[(14)] = inst_33325);

(statearr_33373[(8)] = inst_33312__$1);

return statearr_33373;
})();
var statearr_33374_34662 = state_33352__$1;
(statearr_33374_34662[(2)] = null);

(statearr_33374_34662[(1)] = (2));


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
var cljs$core$async$state_machine__30978__auto__ = null;
var cljs$core$async$state_machine__30978__auto____0 = (function (){
var statearr_33375 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33375[(0)] = cljs$core$async$state_machine__30978__auto__);

(statearr_33375[(1)] = (1));

return statearr_33375;
});
var cljs$core$async$state_machine__30978__auto____1 = (function (state_33352){
while(true){
var ret_value__30979__auto__ = (function (){try{while(true){
var result__30980__auto__ = switch__30977__auto__(state_33352);
if(cljs.core.keyword_identical_QMARK_(result__30980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30980__auto__;
}
break;
}
}catch (e33376){var ex__30981__auto__ = e33376;
var statearr_33377_34663 = state_33352;
(statearr_33377_34663[(2)] = ex__30981__auto__);


if(cljs.core.seq((state_33352[(4)]))){
var statearr_33378_34664 = state_33352;
(statearr_33378_34664[(1)] = cljs.core.first((state_33352[(4)])));

} else {
throw ex__30981__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34668 = state_33352;
state_33352 = G__34668;
continue;
} else {
return ret_value__30979__auto__;
}
break;
}
});
cljs$core$async$state_machine__30978__auto__ = function(state_33352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30978__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30978__auto____1.call(this,state_33352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30978__auto____0;
cljs$core$async$state_machine__30978__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30978__auto____1;
return cljs$core$async$state_machine__30978__auto__;
})()
})();
var state__31197__auto__ = (function (){var statearr_33379 = f__31196__auto__();
(statearr_33379[(6)] = c__31195__auto___34630);

return statearr_33379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31197__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
