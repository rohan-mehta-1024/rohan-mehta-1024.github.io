goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31042 = arguments.length;
switch (G__31042) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31043 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31043 = (function (f,blockable,meta31044){
this.f = f;
this.blockable = blockable;
this.meta31044 = meta31044;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31045,meta31044__$1){
var self__ = this;
var _31045__$1 = this;
return (new cljs.core.async.t_cljs$core$async31043(self__.f,self__.blockable,meta31044__$1));
}));

(cljs.core.async.t_cljs$core$async31043.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31045){
var self__ = this;
var _31045__$1 = this;
return self__.meta31044;
}));

(cljs.core.async.t_cljs$core$async31043.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31043.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31043.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31043.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31043.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31044","meta31044",1945057892,null)], null);
}));

(cljs.core.async.t_cljs$core$async31043.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31043.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31043");

(cljs.core.async.t_cljs$core$async31043.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31043");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31043.
 */
cljs.core.async.__GT_t_cljs$core$async31043 = (function cljs$core$async$__GT_t_cljs$core$async31043(f__$1,blockable__$1,meta31044){
return (new cljs.core.async.t_cljs$core$async31043(f__$1,blockable__$1,meta31044));
});

}

return (new cljs.core.async.t_cljs$core$async31043(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31082 = arguments.length;
switch (G__31082) {
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
var G__31090 = arguments.length;
switch (G__31090) {
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
var G__31092 = arguments.length;
switch (G__31092) {
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
var val_33325 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33325) : fn1.call(null,val_33325));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33325) : fn1.call(null,val_33325));
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
var G__31096 = arguments.length;
switch (G__31096) {
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
var n__4613__auto___33344 = n;
var x_33345 = (0);
while(true){
if((x_33345 < n__4613__auto___33344)){
(a[x_33345] = x_33345);

var G__33346 = (x_33345 + (1));
x_33345 = G__33346;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31097 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31097 = (function (flag,meta31098){
this.flag = flag;
this.meta31098 = meta31098;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31099,meta31098__$1){
var self__ = this;
var _31099__$1 = this;
return (new cljs.core.async.t_cljs$core$async31097(self__.flag,meta31098__$1));
}));

(cljs.core.async.t_cljs$core$async31097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31099){
var self__ = this;
var _31099__$1 = this;
return self__.meta31098;
}));

(cljs.core.async.t_cljs$core$async31097.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31097.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31097.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31097.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31097.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31098","meta31098",-913671294,null)], null);
}));

(cljs.core.async.t_cljs$core$async31097.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31097.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31097");

(cljs.core.async.t_cljs$core$async31097.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31097");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31097.
 */
cljs.core.async.__GT_t_cljs$core$async31097 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31097(flag__$1,meta31098){
return (new cljs.core.async.t_cljs$core$async31097(flag__$1,meta31098));
});

}

return (new cljs.core.async.t_cljs$core$async31097(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31134 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31134 = (function (flag,cb,meta31135){
this.flag = flag;
this.cb = cb;
this.meta31135 = meta31135;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31136,meta31135__$1){
var self__ = this;
var _31136__$1 = this;
return (new cljs.core.async.t_cljs$core$async31134(self__.flag,self__.cb,meta31135__$1));
}));

(cljs.core.async.t_cljs$core$async31134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31136){
var self__ = this;
var _31136__$1 = this;
return self__.meta31135;
}));

(cljs.core.async.t_cljs$core$async31134.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31134.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31134.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31134.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31134.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31135","meta31135",-61345924,null)], null);
}));

(cljs.core.async.t_cljs$core$async31134.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31134.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31134");

(cljs.core.async.t_cljs$core$async31134.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31134");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31134.
 */
cljs.core.async.__GT_t_cljs$core$async31134 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31134(flag__$1,cb__$1,meta31135){
return (new cljs.core.async.t_cljs$core$async31134(flag__$1,cb__$1,meta31135));
});

}

return (new cljs.core.async.t_cljs$core$async31134(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31147 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31144_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31147) : fret.call(null,G__31147));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31145_SHARP_){
var G__31148 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31145_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31148) : fret.call(null,G__31148));
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
var G__33354 = (i + (1));
i = G__33354;
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
var len__4736__auto___33357 = arguments.length;
var i__4737__auto___33359 = (0);
while(true){
if((i__4737__auto___33359 < len__4736__auto___33357)){
args__4742__auto__.push((arguments[i__4737__auto___33359]));

var G__33360 = (i__4737__auto___33359 + (1));
i__4737__auto___33359 = G__33360;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31156){
var map__31157 = p__31156;
var map__31157__$1 = (((((!((map__31157 == null))))?(((((map__31157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31157):map__31157);
var opts = map__31157__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31154){
var G__31155 = cljs.core.first(seq31154);
var seq31154__$1 = cljs.core.next(seq31154);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31155,seq31154__$1);
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
var G__31161 = arguments.length;
switch (G__31161) {
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
var c__30952__auto___33369 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30953__auto__ = (function (){var switch__30763__auto__ = (function (state_31209){
var state_val_31210 = (state_31209[(1)]);
if((state_val_31210 === (7))){
var inst_31205 = (state_31209[(2)]);
var state_31209__$1 = state_31209;
var statearr_31211_33372 = state_31209__$1;
(statearr_31211_33372[(2)] = inst_31205);

(statearr_31211_33372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31210 === (1))){
var state_31209__$1 = state_31209;
var statearr_31212_33373 = state_31209__$1;
(statearr_31212_33373[(2)] = null);

(statearr_31212_33373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31210 === (4))){
var inst_31184 = (state_31209[(7)]);
var inst_31184__$1 = (state_31209[(2)]);
var inst_31189 = (inst_31184__$1 == null);
var state_31209__$1 = (function (){var statearr_31216 = state_31209;
(statearr_31216[(7)] = inst_31184__$1);

return statearr_31216;
})();
if(cljs.core.truth_(inst_31189)){
var statearr_31217_33374 = state_31209__$1;
(statearr_31217_33374[(1)] = (5));

} else {
var statearr_31218_33375 = state_31209__$1;
(statearr_31218_33375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31210 === (13))){
var state_31209__$1 = state_31209;
var statearr_31223_33376 = state_31209__$1;
(statearr_31223_33376[(2)] = null);

(statearr_31223_33376[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31210 === (6))){
var inst_31184 = (state_31209[(7)]);
var state_31209__$1 = state_31209;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31209__$1,(11),to,inst_31184);
} else {
if((state_val_31210 === (3))){
var inst_31207 = (state_31209[(2)]);
var state_31209__$1 = state_31209;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31209__$1,inst_31207);
} else {
if((state_val_31210 === (12))){
var state_31209__$1 = state_31209;
var statearr_31228_33377 = state_31209__$1;
(statearr_31228_33377[(2)] = null);

(statearr_31228_33377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31210 === (2))){
var state_31209__$1 = state_31209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31209__$1,(4),from);
} else {
if((state_val_31210 === (11))){
var inst_31198 = (state_31209[(2)]);
var state_31209__$1 = state_31209;
if(cljs.core.truth_(inst_31198)){
var statearr_31231_33379 = state_31209__$1;
(statearr_31231_33379[(1)] = (12));

} else {
var statearr_31232_33380 = state_31209__$1;
(statearr_31232_33380[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31210 === (9))){
var state_31209__$1 = state_31209;
var statearr_31234_33381 = state_31209__$1;
(statearr_31234_33381[(2)] = null);

(statearr_31234_33381[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31210 === (5))){
var state_31209__$1 = state_31209;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31240_33383 = state_31209__$1;
(statearr_31240_33383[(1)] = (8));

} else {
var statearr_31241_33384 = state_31209__$1;
(statearr_31241_33384[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31210 === (14))){
var inst_31203 = (state_31209[(2)]);
var state_31209__$1 = state_31209;
var statearr_31242_33385 = state_31209__$1;
(statearr_31242_33385[(2)] = inst_31203);

(statearr_31242_33385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31210 === (10))){
var inst_31195 = (state_31209[(2)]);
var state_31209__$1 = state_31209;
var statearr_31243_33423 = state_31209__$1;
(statearr_31243_33423[(2)] = inst_31195);

(statearr_31243_33423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31210 === (8))){
var inst_31192 = cljs.core.async.close_BANG_(to);
var state_31209__$1 = state_31209;
var statearr_31244_33424 = state_31209__$1;
(statearr_31244_33424[(2)] = inst_31192);

(statearr_31244_33424[(1)] = (10));


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
var cljs$core$async$state_machine__30764__auto__ = null;
var cljs$core$async$state_machine__30764__auto____0 = (function (){
var statearr_31245 = [null,null,null,null,null,null,null,null];
(statearr_31245[(0)] = cljs$core$async$state_machine__30764__auto__);

(statearr_31245[(1)] = (1));

return statearr_31245;
});
var cljs$core$async$state_machine__30764__auto____1 = (function (state_31209){
while(true){
var ret_value__30765__auto__ = (function (){try{while(true){
var result__30766__auto__ = switch__30763__auto__(state_31209);
if(cljs.core.keyword_identical_QMARK_(result__30766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30766__auto__;
}
break;
}
}catch (e31246){var ex__30767__auto__ = e31246;
var statearr_31247_33425 = state_31209;
(statearr_31247_33425[(2)] = ex__30767__auto__);


if(cljs.core.seq((state_31209[(4)]))){
var statearr_31248_33426 = state_31209;
(statearr_31248_33426[(1)] = cljs.core.first((state_31209[(4)])));

} else {
throw ex__30767__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33427 = state_31209;
state_31209 = G__33427;
continue;
} else {
return ret_value__30765__auto__;
}
break;
}
});
cljs$core$async$state_machine__30764__auto__ = function(state_31209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30764__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30764__auto____1.call(this,state_31209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30764__auto____0;
cljs$core$async$state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30764__auto____1;
return cljs$core$async$state_machine__30764__auto__;
})()
})();
var state__30954__auto__ = (function (){var statearr_31249 = f__30953__auto__();
(statearr_31249[(6)] = c__30952__auto___33369);

return statearr_31249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30954__auto__);
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
var process = (function (p__31254){
var vec__31255 = p__31254;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31255,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31255,(1),null);
var job = vec__31255;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30952__auto___33429 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30953__auto__ = (function (){var switch__30763__auto__ = (function (state_31262){
var state_val_31263 = (state_31262[(1)]);
if((state_val_31263 === (1))){
var state_31262__$1 = state_31262;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31262__$1,(2),res,v);
} else {
if((state_val_31263 === (2))){
var inst_31259 = (state_31262[(2)]);
var inst_31260 = cljs.core.async.close_BANG_(res);
var state_31262__$1 = (function (){var statearr_31264 = state_31262;
(statearr_31264[(7)] = inst_31259);

return statearr_31264;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31262__$1,inst_31260);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30764__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30764__auto____0 = (function (){
var statearr_31267 = [null,null,null,null,null,null,null,null];
(statearr_31267[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30764__auto__);

(statearr_31267[(1)] = (1));

return statearr_31267;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30764__auto____1 = (function (state_31262){
while(true){
var ret_value__30765__auto__ = (function (){try{while(true){
var result__30766__auto__ = switch__30763__auto__(state_31262);
if(cljs.core.keyword_identical_QMARK_(result__30766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30766__auto__;
}
break;
}
}catch (e31268){var ex__30767__auto__ = e31268;
var statearr_31269_33432 = state_31262;
(statearr_31269_33432[(2)] = ex__30767__auto__);


if(cljs.core.seq((state_31262[(4)]))){
var statearr_31270_33433 = state_31262;
(statearr_31270_33433[(1)] = cljs.core.first((state_31262[(4)])));

} else {
throw ex__30767__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33434 = state_31262;
state_31262 = G__33434;
continue;
} else {
return ret_value__30765__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30764__auto__ = function(state_31262){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30764__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30764__auto____1.call(this,state_31262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30764__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30764__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30764__auto__;
})()
})();
var state__30954__auto__ = (function (){var statearr_31271 = f__30953__auto__();
(statearr_31271[(6)] = c__30952__auto___33429);

return statearr_31271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30954__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31272){
var vec__31274 = p__31272;
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
var n__4613__auto___33446 = n;
var __33447 = (0);
while(true){
if((__33447 < n__4613__auto___33446)){
var G__31278_33449 = type;
var G__31278_33450__$1 = (((G__31278_33449 instanceof cljs.core.Keyword))?G__31278_33449.fqn:null);
switch (G__31278_33450__$1) {
case "compute":
var c__30952__auto___33452 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33447,c__30952__auto___33452,G__31278_33449,G__31278_33450__$1,n__4613__auto___33446,jobs,results,process,async){
return (function (){
var f__30953__auto__ = (function (){var switch__30763__auto__ = ((function (__33447,c__30952__auto___33452,G__31278_33449,G__31278_33450__$1,n__4613__auto___33446,jobs,results,process,async){
return (function (state_31295){
var state_val_31296 = (state_31295[(1)]);
if((state_val_31296 === (1))){
var state_31295__$1 = state_31295;
var statearr_31302_33453 = state_31295__$1;
(statearr_31302_33453[(2)] = null);

(statearr_31302_33453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31296 === (2))){
var state_31295__$1 = state_31295;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31295__$1,(4),jobs);
} else {
if((state_val_31296 === (3))){
var inst_31293 = (state_31295[(2)]);
var state_31295__$1 = state_31295;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31295__$1,inst_31293);
} else {
if((state_val_31296 === (4))){
var inst_31285 = (state_31295[(2)]);
var inst_31286 = process(inst_31285);
var state_31295__$1 = state_31295;
if(cljs.core.truth_(inst_31286)){
var statearr_31303_33454 = state_31295__$1;
(statearr_31303_33454[(1)] = (5));

} else {
var statearr_31304_33455 = state_31295__$1;
(statearr_31304_33455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31296 === (5))){
var state_31295__$1 = state_31295;
var statearr_31305_33456 = state_31295__$1;
(statearr_31305_33456[(2)] = null);

(statearr_31305_33456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31296 === (6))){
var state_31295__$1 = state_31295;
var statearr_31310_33457 = state_31295__$1;
(statearr_31310_33457[(2)] = null);

(statearr_31310_33457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31296 === (7))){
var inst_31291 = (state_31295[(2)]);
var state_31295__$1 = state_31295;
var statearr_31311_33458 = state_31295__$1;
(statearr_31311_33458[(2)] = inst_31291);

(statearr_31311_33458[(1)] = (3));


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
});})(__33447,c__30952__auto___33452,G__31278_33449,G__31278_33450__$1,n__4613__auto___33446,jobs,results,process,async))
;
return ((function (__33447,switch__30763__auto__,c__30952__auto___33452,G__31278_33449,G__31278_33450__$1,n__4613__auto___33446,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30764__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30764__auto____0 = (function (){
var statearr_31312 = [null,null,null,null,null,null,null];
(statearr_31312[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30764__auto__);

(statearr_31312[(1)] = (1));

return statearr_31312;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30764__auto____1 = (function (state_31295){
while(true){
var ret_value__30765__auto__ = (function (){try{while(true){
var result__30766__auto__ = switch__30763__auto__(state_31295);
if(cljs.core.keyword_identical_QMARK_(result__30766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30766__auto__;
}
break;
}
}catch (e31313){var ex__30767__auto__ = e31313;
var statearr_31314_33465 = state_31295;
(statearr_31314_33465[(2)] = ex__30767__auto__);


if(cljs.core.seq((state_31295[(4)]))){
var statearr_31315_33466 = state_31295;
(statearr_31315_33466[(1)] = cljs.core.first((state_31295[(4)])));

} else {
throw ex__30767__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33467 = state_31295;
state_31295 = G__33467;
continue;
} else {
return ret_value__30765__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30764__auto__ = function(state_31295){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30764__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30764__auto____1.call(this,state_31295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30764__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30764__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30764__auto__;
})()
;})(__33447,switch__30763__auto__,c__30952__auto___33452,G__31278_33449,G__31278_33450__$1,n__4613__auto___33446,jobs,results,process,async))
})();
var state__30954__auto__ = (function (){var statearr_31316 = f__30953__auto__();
(statearr_31316[(6)] = c__30952__auto___33452);

return statearr_31316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30954__auto__);
});})(__33447,c__30952__auto___33452,G__31278_33449,G__31278_33450__$1,n__4613__auto___33446,jobs,results,process,async))
);


break;
case "async":
var c__30952__auto___33468 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33447,c__30952__auto___33468,G__31278_33449,G__31278_33450__$1,n__4613__auto___33446,jobs,results,process,async){
return (function (){
var f__30953__auto__ = (function (){var switch__30763__auto__ = ((function (__33447,c__30952__auto___33468,G__31278_33449,G__31278_33450__$1,n__4613__auto___33446,jobs,results,process,async){
return (function (state_31329){
var state_val_31330 = (state_31329[(1)]);
if((state_val_31330 === (1))){
var state_31329__$1 = state_31329;
var statearr_31331_33469 = state_31329__$1;
(statearr_31331_33469[(2)] = null);

(statearr_31331_33469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (2))){
var state_31329__$1 = state_31329;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31329__$1,(4),jobs);
} else {
if((state_val_31330 === (3))){
var inst_31327 = (state_31329[(2)]);
var state_31329__$1 = state_31329;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31329__$1,inst_31327);
} else {
if((state_val_31330 === (4))){
var inst_31319 = (state_31329[(2)]);
var inst_31320 = async(inst_31319);
var state_31329__$1 = state_31329;
if(cljs.core.truth_(inst_31320)){
var statearr_31332_33470 = state_31329__$1;
(statearr_31332_33470[(1)] = (5));

} else {
var statearr_31333_33471 = state_31329__$1;
(statearr_31333_33471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (5))){
var state_31329__$1 = state_31329;
var statearr_31334_33472 = state_31329__$1;
(statearr_31334_33472[(2)] = null);

(statearr_31334_33472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (6))){
var state_31329__$1 = state_31329;
var statearr_31335_33473 = state_31329__$1;
(statearr_31335_33473[(2)] = null);

(statearr_31335_33473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31330 === (7))){
var inst_31325 = (state_31329[(2)]);
var state_31329__$1 = state_31329;
var statearr_31336_33476 = state_31329__$1;
(statearr_31336_33476[(2)] = inst_31325);

(statearr_31336_33476[(1)] = (3));


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
});})(__33447,c__30952__auto___33468,G__31278_33449,G__31278_33450__$1,n__4613__auto___33446,jobs,results,process,async))
;
return ((function (__33447,switch__30763__auto__,c__30952__auto___33468,G__31278_33449,G__31278_33450__$1,n__4613__auto___33446,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30764__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30764__auto____0 = (function (){
var statearr_31338 = [null,null,null,null,null,null,null];
(statearr_31338[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30764__auto__);

(statearr_31338[(1)] = (1));

return statearr_31338;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30764__auto____1 = (function (state_31329){
while(true){
var ret_value__30765__auto__ = (function (){try{while(true){
var result__30766__auto__ = switch__30763__auto__(state_31329);
if(cljs.core.keyword_identical_QMARK_(result__30766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30766__auto__;
}
break;
}
}catch (e31341){var ex__30767__auto__ = e31341;
var statearr_31342_33480 = state_31329;
(statearr_31342_33480[(2)] = ex__30767__auto__);


if(cljs.core.seq((state_31329[(4)]))){
var statearr_31343_33485 = state_31329;
(statearr_31343_33485[(1)] = cljs.core.first((state_31329[(4)])));

} else {
throw ex__30767__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33495 = state_31329;
state_31329 = G__33495;
continue;
} else {
return ret_value__30765__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30764__auto__ = function(state_31329){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30764__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30764__auto____1.call(this,state_31329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30764__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30764__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30764__auto__;
})()
;})(__33447,switch__30763__auto__,c__30952__auto___33468,G__31278_33449,G__31278_33450__$1,n__4613__auto___33446,jobs,results,process,async))
})();
var state__30954__auto__ = (function (){var statearr_31344 = f__30953__auto__();
(statearr_31344[(6)] = c__30952__auto___33468);

return statearr_31344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30954__auto__);
});})(__33447,c__30952__auto___33468,G__31278_33449,G__31278_33450__$1,n__4613__auto___33446,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31278_33450__$1)].join('')));

}

var G__33496 = (__33447 + (1));
__33447 = G__33496;
continue;
} else {
}
break;
}

var c__30952__auto___33497 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30953__auto__ = (function (){var switch__30763__auto__ = (function (state_31366){
var state_val_31367 = (state_31366[(1)]);
if((state_val_31367 === (7))){
var inst_31362 = (state_31366[(2)]);
var state_31366__$1 = state_31366;
var statearr_31368_33498 = state_31366__$1;
(statearr_31368_33498[(2)] = inst_31362);

(statearr_31368_33498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (1))){
var state_31366__$1 = state_31366;
var statearr_31369_33499 = state_31366__$1;
(statearr_31369_33499[(2)] = null);

(statearr_31369_33499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (4))){
var inst_31347 = (state_31366[(7)]);
var inst_31347__$1 = (state_31366[(2)]);
var inst_31348 = (inst_31347__$1 == null);
var state_31366__$1 = (function (){var statearr_31370 = state_31366;
(statearr_31370[(7)] = inst_31347__$1);

return statearr_31370;
})();
if(cljs.core.truth_(inst_31348)){
var statearr_31371_33500 = state_31366__$1;
(statearr_31371_33500[(1)] = (5));

} else {
var statearr_31372_33501 = state_31366__$1;
(statearr_31372_33501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (6))){
var inst_31352 = (state_31366[(8)]);
var inst_31347 = (state_31366[(7)]);
var inst_31352__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31353 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31354 = [inst_31347,inst_31352__$1];
var inst_31355 = (new cljs.core.PersistentVector(null,2,(5),inst_31353,inst_31354,null));
var state_31366__$1 = (function (){var statearr_31373 = state_31366;
(statearr_31373[(8)] = inst_31352__$1);

return statearr_31373;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31366__$1,(8),jobs,inst_31355);
} else {
if((state_val_31367 === (3))){
var inst_31364 = (state_31366[(2)]);
var state_31366__$1 = state_31366;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31366__$1,inst_31364);
} else {
if((state_val_31367 === (2))){
var state_31366__$1 = state_31366;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31366__$1,(4),from);
} else {
if((state_val_31367 === (9))){
var inst_31359 = (state_31366[(2)]);
var state_31366__$1 = (function (){var statearr_31374 = state_31366;
(statearr_31374[(9)] = inst_31359);

return statearr_31374;
})();
var statearr_31380_33502 = state_31366__$1;
(statearr_31380_33502[(2)] = null);

(statearr_31380_33502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (5))){
var inst_31350 = cljs.core.async.close_BANG_(jobs);
var state_31366__$1 = state_31366;
var statearr_31381_33503 = state_31366__$1;
(statearr_31381_33503[(2)] = inst_31350);

(statearr_31381_33503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31367 === (8))){
var inst_31352 = (state_31366[(8)]);
var inst_31357 = (state_31366[(2)]);
var state_31366__$1 = (function (){var statearr_31382 = state_31366;
(statearr_31382[(10)] = inst_31357);

return statearr_31382;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31366__$1,(9),results,inst_31352);
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
var cljs$core$async$pipeline_STAR__$_state_machine__30764__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30764__auto____0 = (function (){
var statearr_31386 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31386[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30764__auto__);

(statearr_31386[(1)] = (1));

return statearr_31386;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30764__auto____1 = (function (state_31366){
while(true){
var ret_value__30765__auto__ = (function (){try{while(true){
var result__30766__auto__ = switch__30763__auto__(state_31366);
if(cljs.core.keyword_identical_QMARK_(result__30766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30766__auto__;
}
break;
}
}catch (e31388){var ex__30767__auto__ = e31388;
var statearr_31389_33511 = state_31366;
(statearr_31389_33511[(2)] = ex__30767__auto__);


if(cljs.core.seq((state_31366[(4)]))){
var statearr_31391_33512 = state_31366;
(statearr_31391_33512[(1)] = cljs.core.first((state_31366[(4)])));

} else {
throw ex__30767__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33513 = state_31366;
state_31366 = G__33513;
continue;
} else {
return ret_value__30765__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30764__auto__ = function(state_31366){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30764__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30764__auto____1.call(this,state_31366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30764__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30764__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30764__auto__;
})()
})();
var state__30954__auto__ = (function (){var statearr_31396 = f__30953__auto__();
(statearr_31396[(6)] = c__30952__auto___33497);

return statearr_31396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30954__auto__);
}));


var c__30952__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30953__auto__ = (function (){var switch__30763__auto__ = (function (state_31434){
var state_val_31435 = (state_31434[(1)]);
if((state_val_31435 === (7))){
var inst_31430 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31436_33514 = state_31434__$1;
(statearr_31436_33514[(2)] = inst_31430);

(statearr_31436_33514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (20))){
var state_31434__$1 = state_31434;
var statearr_31437_33515 = state_31434__$1;
(statearr_31437_33515[(2)] = null);

(statearr_31437_33515[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (1))){
var state_31434__$1 = state_31434;
var statearr_31438_33516 = state_31434__$1;
(statearr_31438_33516[(2)] = null);

(statearr_31438_33516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (4))){
var inst_31399 = (state_31434[(7)]);
var inst_31399__$1 = (state_31434[(2)]);
var inst_31400 = (inst_31399__$1 == null);
var state_31434__$1 = (function (){var statearr_31439 = state_31434;
(statearr_31439[(7)] = inst_31399__$1);

return statearr_31439;
})();
if(cljs.core.truth_(inst_31400)){
var statearr_31440_33523 = state_31434__$1;
(statearr_31440_33523[(1)] = (5));

} else {
var statearr_31441_33524 = state_31434__$1;
(statearr_31441_33524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (15))){
var inst_31412 = (state_31434[(8)]);
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31434__$1,(18),to,inst_31412);
} else {
if((state_val_31435 === (21))){
var inst_31425 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31442_33525 = state_31434__$1;
(statearr_31442_33525[(2)] = inst_31425);

(statearr_31442_33525[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (13))){
var inst_31427 = (state_31434[(2)]);
var state_31434__$1 = (function (){var statearr_31444 = state_31434;
(statearr_31444[(9)] = inst_31427);

return statearr_31444;
})();
var statearr_31445_33526 = state_31434__$1;
(statearr_31445_33526[(2)] = null);

(statearr_31445_33526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (6))){
var inst_31399 = (state_31434[(7)]);
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31434__$1,(11),inst_31399);
} else {
if((state_val_31435 === (17))){
var inst_31420 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
if(cljs.core.truth_(inst_31420)){
var statearr_31446_33527 = state_31434__$1;
(statearr_31446_33527[(1)] = (19));

} else {
var statearr_31447_33528 = state_31434__$1;
(statearr_31447_33528[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (3))){
var inst_31432 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31434__$1,inst_31432);
} else {
if((state_val_31435 === (12))){
var inst_31409 = (state_31434[(10)]);
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31434__$1,(14),inst_31409);
} else {
if((state_val_31435 === (2))){
var state_31434__$1 = state_31434;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31434__$1,(4),results);
} else {
if((state_val_31435 === (19))){
var state_31434__$1 = state_31434;
var statearr_31448_33529 = state_31434__$1;
(statearr_31448_33529[(2)] = null);

(statearr_31448_33529[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (11))){
var inst_31409 = (state_31434[(2)]);
var state_31434__$1 = (function (){var statearr_31449 = state_31434;
(statearr_31449[(10)] = inst_31409);

return statearr_31449;
})();
var statearr_31450_33536 = state_31434__$1;
(statearr_31450_33536[(2)] = null);

(statearr_31450_33536[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (9))){
var state_31434__$1 = state_31434;
var statearr_31451_33537 = state_31434__$1;
(statearr_31451_33537[(2)] = null);

(statearr_31451_33537[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (5))){
var state_31434__$1 = state_31434;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31452_33538 = state_31434__$1;
(statearr_31452_33538[(1)] = (8));

} else {
var statearr_31453_33539 = state_31434__$1;
(statearr_31453_33539[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (14))){
var inst_31412 = (state_31434[(8)]);
var inst_31412__$1 = (state_31434[(2)]);
var inst_31413 = (inst_31412__$1 == null);
var inst_31414 = cljs.core.not(inst_31413);
var state_31434__$1 = (function (){var statearr_31454 = state_31434;
(statearr_31454[(8)] = inst_31412__$1);

return statearr_31454;
})();
if(inst_31414){
var statearr_31455_33540 = state_31434__$1;
(statearr_31455_33540[(1)] = (15));

} else {
var statearr_31456_33541 = state_31434__$1;
(statearr_31456_33541[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (16))){
var state_31434__$1 = state_31434;
var statearr_31457_33542 = state_31434__$1;
(statearr_31457_33542[(2)] = false);

(statearr_31457_33542[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (10))){
var inst_31406 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31458_33543 = state_31434__$1;
(statearr_31458_33543[(2)] = inst_31406);

(statearr_31458_33543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (18))){
var inst_31417 = (state_31434[(2)]);
var state_31434__$1 = state_31434;
var statearr_31459_33544 = state_31434__$1;
(statearr_31459_33544[(2)] = inst_31417);

(statearr_31459_33544[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31435 === (8))){
var inst_31403 = cljs.core.async.close_BANG_(to);
var state_31434__$1 = state_31434;
var statearr_31460_33545 = state_31434__$1;
(statearr_31460_33545[(2)] = inst_31403);

(statearr_31460_33545[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__30764__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30764__auto____0 = (function (){
var statearr_31461 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31461[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30764__auto__);

(statearr_31461[(1)] = (1));

return statearr_31461;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30764__auto____1 = (function (state_31434){
while(true){
var ret_value__30765__auto__ = (function (){try{while(true){
var result__30766__auto__ = switch__30763__auto__(state_31434);
if(cljs.core.keyword_identical_QMARK_(result__30766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30766__auto__;
}
break;
}
}catch (e31462){var ex__30767__auto__ = e31462;
var statearr_31463_33546 = state_31434;
(statearr_31463_33546[(2)] = ex__30767__auto__);


if(cljs.core.seq((state_31434[(4)]))){
var statearr_31464_33547 = state_31434;
(statearr_31464_33547[(1)] = cljs.core.first((state_31434[(4)])));

} else {
throw ex__30767__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33548 = state_31434;
state_31434 = G__33548;
continue;
} else {
return ret_value__30765__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30764__auto__ = function(state_31434){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30764__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30764__auto____1.call(this,state_31434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30764__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30764__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30764__auto__;
})()
})();
var state__30954__auto__ = (function (){var statearr_31465 = f__30953__auto__();
(statearr_31465[(6)] = c__30952__auto__);

return statearr_31465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30954__auto__);
}));

return c__30952__auto__;
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
var G__31467 = arguments.length;
switch (G__31467) {
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
var G__31469 = arguments.length;
switch (G__31469) {
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
var G__31486 = arguments.length;
switch (G__31486) {
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
var c__30952__auto___33557 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30953__auto__ = (function (){var switch__30763__auto__ = (function (state_31514){
var state_val_31515 = (state_31514[(1)]);
if((state_val_31515 === (7))){
var inst_31508 = (state_31514[(2)]);
var state_31514__$1 = state_31514;
var statearr_31517_33558 = state_31514__$1;
(statearr_31517_33558[(2)] = inst_31508);

(statearr_31517_33558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (1))){
var state_31514__$1 = state_31514;
var statearr_31518_33559 = state_31514__$1;
(statearr_31518_33559[(2)] = null);

(statearr_31518_33559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (4))){
var inst_31489 = (state_31514[(7)]);
var inst_31489__$1 = (state_31514[(2)]);
var inst_31490 = (inst_31489__$1 == null);
var state_31514__$1 = (function (){var statearr_31519 = state_31514;
(statearr_31519[(7)] = inst_31489__$1);

return statearr_31519;
})();
if(cljs.core.truth_(inst_31490)){
var statearr_31520_33560 = state_31514__$1;
(statearr_31520_33560[(1)] = (5));

} else {
var statearr_31521_33561 = state_31514__$1;
(statearr_31521_33561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (13))){
var state_31514__$1 = state_31514;
var statearr_31522_33562 = state_31514__$1;
(statearr_31522_33562[(2)] = null);

(statearr_31522_33562[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (6))){
var inst_31489 = (state_31514[(7)]);
var inst_31495 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31489) : p.call(null,inst_31489));
var state_31514__$1 = state_31514;
if(cljs.core.truth_(inst_31495)){
var statearr_31523_33563 = state_31514__$1;
(statearr_31523_33563[(1)] = (9));

} else {
var statearr_31524_33564 = state_31514__$1;
(statearr_31524_33564[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (3))){
var inst_31510 = (state_31514[(2)]);
var state_31514__$1 = state_31514;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31514__$1,inst_31510);
} else {
if((state_val_31515 === (12))){
var state_31514__$1 = state_31514;
var statearr_31533_33565 = state_31514__$1;
(statearr_31533_33565[(2)] = null);

(statearr_31533_33565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (2))){
var state_31514__$1 = state_31514;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31514__$1,(4),ch);
} else {
if((state_val_31515 === (11))){
var inst_31489 = (state_31514[(7)]);
var inst_31499 = (state_31514[(2)]);
var state_31514__$1 = state_31514;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31514__$1,(8),inst_31499,inst_31489);
} else {
if((state_val_31515 === (9))){
var state_31514__$1 = state_31514;
var statearr_31534_33566 = state_31514__$1;
(statearr_31534_33566[(2)] = tc);

(statearr_31534_33566[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (5))){
var inst_31492 = cljs.core.async.close_BANG_(tc);
var inst_31493 = cljs.core.async.close_BANG_(fc);
var state_31514__$1 = (function (){var statearr_31535 = state_31514;
(statearr_31535[(8)] = inst_31492);

return statearr_31535;
})();
var statearr_31536_33567 = state_31514__$1;
(statearr_31536_33567[(2)] = inst_31493);

(statearr_31536_33567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (14))){
var inst_31506 = (state_31514[(2)]);
var state_31514__$1 = state_31514;
var statearr_31537_33568 = state_31514__$1;
(statearr_31537_33568[(2)] = inst_31506);

(statearr_31537_33568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (10))){
var state_31514__$1 = state_31514;
var statearr_31539_33569 = state_31514__$1;
(statearr_31539_33569[(2)] = fc);

(statearr_31539_33569[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (8))){
var inst_31501 = (state_31514[(2)]);
var state_31514__$1 = state_31514;
if(cljs.core.truth_(inst_31501)){
var statearr_31542_33572 = state_31514__$1;
(statearr_31542_33572[(1)] = (12));

} else {
var statearr_31543_33573 = state_31514__$1;
(statearr_31543_33573[(1)] = (13));

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
var cljs$core$async$state_machine__30764__auto__ = null;
var cljs$core$async$state_machine__30764__auto____0 = (function (){
var statearr_31546 = [null,null,null,null,null,null,null,null,null];
(statearr_31546[(0)] = cljs$core$async$state_machine__30764__auto__);

(statearr_31546[(1)] = (1));

return statearr_31546;
});
var cljs$core$async$state_machine__30764__auto____1 = (function (state_31514){
while(true){
var ret_value__30765__auto__ = (function (){try{while(true){
var result__30766__auto__ = switch__30763__auto__(state_31514);
if(cljs.core.keyword_identical_QMARK_(result__30766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30766__auto__;
}
break;
}
}catch (e31548){var ex__30767__auto__ = e31548;
var statearr_31550_33574 = state_31514;
(statearr_31550_33574[(2)] = ex__30767__auto__);


if(cljs.core.seq((state_31514[(4)]))){
var statearr_31552_33575 = state_31514;
(statearr_31552_33575[(1)] = cljs.core.first((state_31514[(4)])));

} else {
throw ex__30767__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33576 = state_31514;
state_31514 = G__33576;
continue;
} else {
return ret_value__30765__auto__;
}
break;
}
});
cljs$core$async$state_machine__30764__auto__ = function(state_31514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30764__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30764__auto____1.call(this,state_31514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30764__auto____0;
cljs$core$async$state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30764__auto____1;
return cljs$core$async$state_machine__30764__auto__;
})()
})();
var state__30954__auto__ = (function (){var statearr_31553 = f__30953__auto__();
(statearr_31553[(6)] = c__30952__auto___33557);

return statearr_31553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30954__auto__);
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
var c__30952__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30953__auto__ = (function (){var switch__30763__auto__ = (function (state_31579){
var state_val_31580 = (state_31579[(1)]);
if((state_val_31580 === (7))){
var inst_31575 = (state_31579[(2)]);
var state_31579__$1 = state_31579;
var statearr_31581_33577 = state_31579__$1;
(statearr_31581_33577[(2)] = inst_31575);

(statearr_31581_33577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (1))){
var inst_31558 = init;
var inst_31559 = inst_31558;
var state_31579__$1 = (function (){var statearr_31584 = state_31579;
(statearr_31584[(7)] = inst_31559);

return statearr_31584;
})();
var statearr_31585_33578 = state_31579__$1;
(statearr_31585_33578[(2)] = null);

(statearr_31585_33578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (4))){
var inst_31562 = (state_31579[(8)]);
var inst_31562__$1 = (state_31579[(2)]);
var inst_31563 = (inst_31562__$1 == null);
var state_31579__$1 = (function (){var statearr_31589 = state_31579;
(statearr_31589[(8)] = inst_31562__$1);

return statearr_31589;
})();
if(cljs.core.truth_(inst_31563)){
var statearr_31592_33580 = state_31579__$1;
(statearr_31592_33580[(1)] = (5));

} else {
var statearr_31593_33582 = state_31579__$1;
(statearr_31593_33582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (6))){
var inst_31566 = (state_31579[(9)]);
var inst_31562 = (state_31579[(8)]);
var inst_31559 = (state_31579[(7)]);
var inst_31566__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31559,inst_31562) : f.call(null,inst_31559,inst_31562));
var inst_31567 = cljs.core.reduced_QMARK_(inst_31566__$1);
var state_31579__$1 = (function (){var statearr_31595 = state_31579;
(statearr_31595[(9)] = inst_31566__$1);

return statearr_31595;
})();
if(inst_31567){
var statearr_31597_33583 = state_31579__$1;
(statearr_31597_33583[(1)] = (8));

} else {
var statearr_31599_33584 = state_31579__$1;
(statearr_31599_33584[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (3))){
var inst_31577 = (state_31579[(2)]);
var state_31579__$1 = state_31579;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31579__$1,inst_31577);
} else {
if((state_val_31580 === (2))){
var state_31579__$1 = state_31579;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31579__$1,(4),ch);
} else {
if((state_val_31580 === (9))){
var inst_31566 = (state_31579[(9)]);
var inst_31559 = inst_31566;
var state_31579__$1 = (function (){var statearr_31602 = state_31579;
(statearr_31602[(7)] = inst_31559);

return statearr_31602;
})();
var statearr_31603_33585 = state_31579__$1;
(statearr_31603_33585[(2)] = null);

(statearr_31603_33585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (5))){
var inst_31559 = (state_31579[(7)]);
var state_31579__$1 = state_31579;
var statearr_31604_33586 = state_31579__$1;
(statearr_31604_33586[(2)] = inst_31559);

(statearr_31604_33586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (10))){
var inst_31573 = (state_31579[(2)]);
var state_31579__$1 = state_31579;
var statearr_31605_33587 = state_31579__$1;
(statearr_31605_33587[(2)] = inst_31573);

(statearr_31605_33587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (8))){
var inst_31566 = (state_31579[(9)]);
var inst_31569 = cljs.core.deref(inst_31566);
var state_31579__$1 = state_31579;
var statearr_31607_33588 = state_31579__$1;
(statearr_31607_33588[(2)] = inst_31569);

(statearr_31607_33588[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__30764__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30764__auto____0 = (function (){
var statearr_31609 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31609[(0)] = cljs$core$async$reduce_$_state_machine__30764__auto__);

(statearr_31609[(1)] = (1));

return statearr_31609;
});
var cljs$core$async$reduce_$_state_machine__30764__auto____1 = (function (state_31579){
while(true){
var ret_value__30765__auto__ = (function (){try{while(true){
var result__30766__auto__ = switch__30763__auto__(state_31579);
if(cljs.core.keyword_identical_QMARK_(result__30766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30766__auto__;
}
break;
}
}catch (e31610){var ex__30767__auto__ = e31610;
var statearr_31611_33589 = state_31579;
(statearr_31611_33589[(2)] = ex__30767__auto__);


if(cljs.core.seq((state_31579[(4)]))){
var statearr_31612_33590 = state_31579;
(statearr_31612_33590[(1)] = cljs.core.first((state_31579[(4)])));

} else {
throw ex__30767__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33591 = state_31579;
state_31579 = G__33591;
continue;
} else {
return ret_value__30765__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30764__auto__ = function(state_31579){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30764__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30764__auto____1.call(this,state_31579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30764__auto____0;
cljs$core$async$reduce_$_state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30764__auto____1;
return cljs$core$async$reduce_$_state_machine__30764__auto__;
})()
})();
var state__30954__auto__ = (function (){var statearr_31613 = f__30953__auto__();
(statearr_31613[(6)] = c__30952__auto__);

return statearr_31613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30954__auto__);
}));

return c__30952__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30952__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30953__auto__ = (function (){var switch__30763__auto__ = (function (state_31619){
var state_val_31620 = (state_31619[(1)]);
if((state_val_31620 === (1))){
var inst_31614 = cljs.core.async.reduce(f__$1,init,ch);
var state_31619__$1 = state_31619;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31619__$1,(2),inst_31614);
} else {
if((state_val_31620 === (2))){
var inst_31616 = (state_31619[(2)]);
var inst_31617 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31616) : f__$1.call(null,inst_31616));
var state_31619__$1 = state_31619;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31619__$1,inst_31617);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30764__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30764__auto____0 = (function (){
var statearr_31646 = [null,null,null,null,null,null,null];
(statearr_31646[(0)] = cljs$core$async$transduce_$_state_machine__30764__auto__);

(statearr_31646[(1)] = (1));

return statearr_31646;
});
var cljs$core$async$transduce_$_state_machine__30764__auto____1 = (function (state_31619){
while(true){
var ret_value__30765__auto__ = (function (){try{while(true){
var result__30766__auto__ = switch__30763__auto__(state_31619);
if(cljs.core.keyword_identical_QMARK_(result__30766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30766__auto__;
}
break;
}
}catch (e31651){var ex__30767__auto__ = e31651;
var statearr_31652_33594 = state_31619;
(statearr_31652_33594[(2)] = ex__30767__auto__);


if(cljs.core.seq((state_31619[(4)]))){
var statearr_31653_33595 = state_31619;
(statearr_31653_33595[(1)] = cljs.core.first((state_31619[(4)])));

} else {
throw ex__30767__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33596 = state_31619;
state_31619 = G__33596;
continue;
} else {
return ret_value__30765__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30764__auto__ = function(state_31619){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30764__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30764__auto____1.call(this,state_31619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30764__auto____0;
cljs$core$async$transduce_$_state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30764__auto____1;
return cljs$core$async$transduce_$_state_machine__30764__auto__;
})()
})();
var state__30954__auto__ = (function (){var statearr_31656 = f__30953__auto__();
(statearr_31656[(6)] = c__30952__auto__);

return statearr_31656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30954__auto__);
}));

return c__30952__auto__;
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
var G__31661 = arguments.length;
switch (G__31661) {
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
var c__30952__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30953__auto__ = (function (){var switch__30763__auto__ = (function (state_31698){
var state_val_31699 = (state_31698[(1)]);
if((state_val_31699 === (7))){
var inst_31677 = (state_31698[(2)]);
var state_31698__$1 = state_31698;
var statearr_31700_33598 = state_31698__$1;
(statearr_31700_33598[(2)] = inst_31677);

(statearr_31700_33598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31699 === (1))){
var inst_31671 = cljs.core.seq(coll);
var inst_31672 = inst_31671;
var state_31698__$1 = (function (){var statearr_31704 = state_31698;
(statearr_31704[(7)] = inst_31672);

return statearr_31704;
})();
var statearr_31705_33599 = state_31698__$1;
(statearr_31705_33599[(2)] = null);

(statearr_31705_33599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31699 === (4))){
var inst_31672 = (state_31698[(7)]);
var inst_31675 = cljs.core.first(inst_31672);
var state_31698__$1 = state_31698;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31698__$1,(7),ch,inst_31675);
} else {
if((state_val_31699 === (13))){
var inst_31691 = (state_31698[(2)]);
var state_31698__$1 = state_31698;
var statearr_31706_33600 = state_31698__$1;
(statearr_31706_33600[(2)] = inst_31691);

(statearr_31706_33600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31699 === (6))){
var inst_31680 = (state_31698[(2)]);
var state_31698__$1 = state_31698;
if(cljs.core.truth_(inst_31680)){
var statearr_31707_33601 = state_31698__$1;
(statearr_31707_33601[(1)] = (8));

} else {
var statearr_31708_33617 = state_31698__$1;
(statearr_31708_33617[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31699 === (3))){
var inst_31695 = (state_31698[(2)]);
var state_31698__$1 = state_31698;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31698__$1,inst_31695);
} else {
if((state_val_31699 === (12))){
var state_31698__$1 = state_31698;
var statearr_31709_33618 = state_31698__$1;
(statearr_31709_33618[(2)] = null);

(statearr_31709_33618[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31699 === (2))){
var inst_31672 = (state_31698[(7)]);
var state_31698__$1 = state_31698;
if(cljs.core.truth_(inst_31672)){
var statearr_31712_33619 = state_31698__$1;
(statearr_31712_33619[(1)] = (4));

} else {
var statearr_31713_33620 = state_31698__$1;
(statearr_31713_33620[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31699 === (11))){
var inst_31687 = cljs.core.async.close_BANG_(ch);
var state_31698__$1 = state_31698;
var statearr_31714_33621 = state_31698__$1;
(statearr_31714_33621[(2)] = inst_31687);

(statearr_31714_33621[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31699 === (9))){
var state_31698__$1 = state_31698;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31715_33622 = state_31698__$1;
(statearr_31715_33622[(1)] = (11));

} else {
var statearr_31716_33623 = state_31698__$1;
(statearr_31716_33623[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31699 === (5))){
var inst_31672 = (state_31698[(7)]);
var state_31698__$1 = state_31698;
var statearr_31717_33624 = state_31698__$1;
(statearr_31717_33624[(2)] = inst_31672);

(statearr_31717_33624[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31699 === (10))){
var inst_31693 = (state_31698[(2)]);
var state_31698__$1 = state_31698;
var statearr_31722_33625 = state_31698__$1;
(statearr_31722_33625[(2)] = inst_31693);

(statearr_31722_33625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31699 === (8))){
var inst_31672 = (state_31698[(7)]);
var inst_31682 = cljs.core.next(inst_31672);
var inst_31672__$1 = inst_31682;
var state_31698__$1 = (function (){var statearr_31723 = state_31698;
(statearr_31723[(7)] = inst_31672__$1);

return statearr_31723;
})();
var statearr_31725_33626 = state_31698__$1;
(statearr_31725_33626[(2)] = null);

(statearr_31725_33626[(1)] = (2));


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
var cljs$core$async$state_machine__30764__auto__ = null;
var cljs$core$async$state_machine__30764__auto____0 = (function (){
var statearr_31728 = [null,null,null,null,null,null,null,null];
(statearr_31728[(0)] = cljs$core$async$state_machine__30764__auto__);

(statearr_31728[(1)] = (1));

return statearr_31728;
});
var cljs$core$async$state_machine__30764__auto____1 = (function (state_31698){
while(true){
var ret_value__30765__auto__ = (function (){try{while(true){
var result__30766__auto__ = switch__30763__auto__(state_31698);
if(cljs.core.keyword_identical_QMARK_(result__30766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30766__auto__;
}
break;
}
}catch (e31730){var ex__30767__auto__ = e31730;
var statearr_31731_33627 = state_31698;
(statearr_31731_33627[(2)] = ex__30767__auto__);


if(cljs.core.seq((state_31698[(4)]))){
var statearr_31733_33628 = state_31698;
(statearr_31733_33628[(1)] = cljs.core.first((state_31698[(4)])));

} else {
throw ex__30767__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33629 = state_31698;
state_31698 = G__33629;
continue;
} else {
return ret_value__30765__auto__;
}
break;
}
});
cljs$core$async$state_machine__30764__auto__ = function(state_31698){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30764__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30764__auto____1.call(this,state_31698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30764__auto____0;
cljs$core$async$state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30764__auto____1;
return cljs$core$async$state_machine__30764__auto__;
})()
})();
var state__30954__auto__ = (function (){var statearr_31767 = f__30953__auto__();
(statearr_31767[(6)] = c__30952__auto__);

return statearr_31767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30954__auto__);
}));

return c__30952__auto__;
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
var G__31774 = arguments.length;
switch (G__31774) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_33631 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_33631(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33638 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_33638(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33643 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_33643(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33644 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_33644(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31822 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31822 = (function (ch,cs,meta31823){
this.ch = ch;
this.cs = cs;
this.meta31823 = meta31823;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31824,meta31823__$1){
var self__ = this;
var _31824__$1 = this;
return (new cljs.core.async.t_cljs$core$async31822(self__.ch,self__.cs,meta31823__$1));
}));

(cljs.core.async.t_cljs$core$async31822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31824){
var self__ = this;
var _31824__$1 = this;
return self__.meta31823;
}));

(cljs.core.async.t_cljs$core$async31822.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31822.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31822.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31822.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31822.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31822.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31822.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31823","meta31823",1596121919,null)], null);
}));

(cljs.core.async.t_cljs$core$async31822.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31822.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31822");

(cljs.core.async.t_cljs$core$async31822.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31822");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31822.
 */
cljs.core.async.__GT_t_cljs$core$async31822 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31822(ch__$1,cs__$1,meta31823){
return (new cljs.core.async.t_cljs$core$async31822(ch__$1,cs__$1,meta31823));
});

}

return (new cljs.core.async.t_cljs$core$async31822(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30952__auto___33655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30953__auto__ = (function (){var switch__30763__auto__ = (function (state_32039){
var state_val_32042 = (state_32039[(1)]);
if((state_val_32042 === (7))){
var inst_32031 = (state_32039[(2)]);
var state_32039__$1 = state_32039;
var statearr_32043_33657 = state_32039__$1;
(statearr_32043_33657[(2)] = inst_32031);

(statearr_32043_33657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (20))){
var inst_31904 = (state_32039[(7)]);
var inst_31916 = cljs.core.first(inst_31904);
var inst_31917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31916,(0),null);
var inst_31919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31916,(1),null);
var state_32039__$1 = (function (){var statearr_32047 = state_32039;
(statearr_32047[(8)] = inst_31917);

return statearr_32047;
})();
if(cljs.core.truth_(inst_31919)){
var statearr_32048_33660 = state_32039__$1;
(statearr_32048_33660[(1)] = (22));

} else {
var statearr_32049_33661 = state_32039__$1;
(statearr_32049_33661[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (27))){
var inst_31954 = (state_32039[(9)]);
var inst_31863 = (state_32039[(10)]);
var inst_31949 = (state_32039[(11)]);
var inst_31947 = (state_32039[(12)]);
var inst_31954__$1 = cljs.core._nth(inst_31947,inst_31949);
var inst_31955 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31954__$1,inst_31863,done);
var state_32039__$1 = (function (){var statearr_32053 = state_32039;
(statearr_32053[(9)] = inst_31954__$1);

return statearr_32053;
})();
if(cljs.core.truth_(inst_31955)){
var statearr_32054_33662 = state_32039__$1;
(statearr_32054_33662[(1)] = (30));

} else {
var statearr_32055_33663 = state_32039__$1;
(statearr_32055_33663[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (1))){
var state_32039__$1 = state_32039;
var statearr_32056_33664 = state_32039__$1;
(statearr_32056_33664[(2)] = null);

(statearr_32056_33664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (24))){
var inst_31904 = (state_32039[(7)]);
var inst_31924 = (state_32039[(2)]);
var inst_31925 = cljs.core.next(inst_31904);
var inst_31872 = inst_31925;
var inst_31873 = null;
var inst_31874 = (0);
var inst_31875 = (0);
var state_32039__$1 = (function (){var statearr_32058 = state_32039;
(statearr_32058[(13)] = inst_31875);

(statearr_32058[(14)] = inst_31873);

(statearr_32058[(15)] = inst_31872);

(statearr_32058[(16)] = inst_31874);

(statearr_32058[(17)] = inst_31924);

return statearr_32058;
})();
var statearr_32061_33665 = state_32039__$1;
(statearr_32061_33665[(2)] = null);

(statearr_32061_33665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (39))){
var state_32039__$1 = state_32039;
var statearr_32066_33666 = state_32039__$1;
(statearr_32066_33666[(2)] = null);

(statearr_32066_33666[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (4))){
var inst_31863 = (state_32039[(10)]);
var inst_31863__$1 = (state_32039[(2)]);
var inst_31864 = (inst_31863__$1 == null);
var state_32039__$1 = (function (){var statearr_32067 = state_32039;
(statearr_32067[(10)] = inst_31863__$1);

return statearr_32067;
})();
if(cljs.core.truth_(inst_31864)){
var statearr_32068_33667 = state_32039__$1;
(statearr_32068_33667[(1)] = (5));

} else {
var statearr_32069_33668 = state_32039__$1;
(statearr_32069_33668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (15))){
var inst_31875 = (state_32039[(13)]);
var inst_31873 = (state_32039[(14)]);
var inst_31872 = (state_32039[(15)]);
var inst_31874 = (state_32039[(16)]);
var inst_31890 = (state_32039[(2)]);
var inst_31891 = (inst_31875 + (1));
var tmp32062 = inst_31873;
var tmp32063 = inst_31872;
var tmp32064 = inst_31874;
var inst_31872__$1 = tmp32063;
var inst_31873__$1 = tmp32062;
var inst_31874__$1 = tmp32064;
var inst_31875__$1 = inst_31891;
var state_32039__$1 = (function (){var statearr_32072 = state_32039;
(statearr_32072[(13)] = inst_31875__$1);

(statearr_32072[(14)] = inst_31873__$1);

(statearr_32072[(15)] = inst_31872__$1);

(statearr_32072[(16)] = inst_31874__$1);

(statearr_32072[(18)] = inst_31890);

return statearr_32072;
})();
var statearr_32075_33669 = state_32039__$1;
(statearr_32075_33669[(2)] = null);

(statearr_32075_33669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (21))){
var inst_31928 = (state_32039[(2)]);
var state_32039__$1 = state_32039;
var statearr_32083_33689 = state_32039__$1;
(statearr_32083_33689[(2)] = inst_31928);

(statearr_32083_33689[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (31))){
var inst_31954 = (state_32039[(9)]);
var inst_31958 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31954);
var state_32039__$1 = state_32039;
var statearr_32088_33690 = state_32039__$1;
(statearr_32088_33690[(2)] = inst_31958);

(statearr_32088_33690[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (32))){
var inst_31949 = (state_32039[(11)]);
var inst_31948 = (state_32039[(19)]);
var inst_31947 = (state_32039[(12)]);
var inst_31946 = (state_32039[(20)]);
var inst_31960 = (state_32039[(2)]);
var inst_31961 = (inst_31949 + (1));
var tmp32080 = inst_31948;
var tmp32081 = inst_31947;
var tmp32082 = inst_31946;
var inst_31946__$1 = tmp32082;
var inst_31947__$1 = tmp32081;
var inst_31948__$1 = tmp32080;
var inst_31949__$1 = inst_31961;
var state_32039__$1 = (function (){var statearr_32090 = state_32039;
(statearr_32090[(21)] = inst_31960);

(statearr_32090[(11)] = inst_31949__$1);

(statearr_32090[(19)] = inst_31948__$1);

(statearr_32090[(12)] = inst_31947__$1);

(statearr_32090[(20)] = inst_31946__$1);

return statearr_32090;
})();
var statearr_32091_33691 = state_32039__$1;
(statearr_32091_33691[(2)] = null);

(statearr_32091_33691[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (40))){
var inst_31973 = (state_32039[(22)]);
var inst_31992 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31973);
var state_32039__$1 = state_32039;
var statearr_32093_33692 = state_32039__$1;
(statearr_32093_33692[(2)] = inst_31992);

(statearr_32093_33692[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (33))){
var inst_31964 = (state_32039[(23)]);
var inst_31966 = cljs.core.chunked_seq_QMARK_(inst_31964);
var state_32039__$1 = state_32039;
if(inst_31966){
var statearr_32094_33693 = state_32039__$1;
(statearr_32094_33693[(1)] = (36));

} else {
var statearr_32095_33694 = state_32039__$1;
(statearr_32095_33694[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (13))){
var inst_31884 = (state_32039[(24)]);
var inst_31887 = cljs.core.async.close_BANG_(inst_31884);
var state_32039__$1 = state_32039;
var statearr_32108_33695 = state_32039__$1;
(statearr_32108_33695[(2)] = inst_31887);

(statearr_32108_33695[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (22))){
var inst_31917 = (state_32039[(8)]);
var inst_31921 = cljs.core.async.close_BANG_(inst_31917);
var state_32039__$1 = state_32039;
var statearr_32112_33696 = state_32039__$1;
(statearr_32112_33696[(2)] = inst_31921);

(statearr_32112_33696[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (36))){
var inst_31964 = (state_32039[(23)]);
var inst_31968 = cljs.core.chunk_first(inst_31964);
var inst_31969 = cljs.core.chunk_rest(inst_31964);
var inst_31970 = cljs.core.count(inst_31968);
var inst_31946 = inst_31969;
var inst_31947 = inst_31968;
var inst_31948 = inst_31970;
var inst_31949 = (0);
var state_32039__$1 = (function (){var statearr_32113 = state_32039;
(statearr_32113[(11)] = inst_31949);

(statearr_32113[(19)] = inst_31948);

(statearr_32113[(12)] = inst_31947);

(statearr_32113[(20)] = inst_31946);

return statearr_32113;
})();
var statearr_32114_33697 = state_32039__$1;
(statearr_32114_33697[(2)] = null);

(statearr_32114_33697[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (41))){
var inst_31964 = (state_32039[(23)]);
var inst_31994 = (state_32039[(2)]);
var inst_31999 = cljs.core.next(inst_31964);
var inst_31946 = inst_31999;
var inst_31947 = null;
var inst_31948 = (0);
var inst_31949 = (0);
var state_32039__$1 = (function (){var statearr_32115 = state_32039;
(statearr_32115[(11)] = inst_31949);

(statearr_32115[(19)] = inst_31948);

(statearr_32115[(25)] = inst_31994);

(statearr_32115[(12)] = inst_31947);

(statearr_32115[(20)] = inst_31946);

return statearr_32115;
})();
var statearr_32116_33704 = state_32039__$1;
(statearr_32116_33704[(2)] = null);

(statearr_32116_33704[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (43))){
var state_32039__$1 = state_32039;
var statearr_32117_33705 = state_32039__$1;
(statearr_32117_33705[(2)] = null);

(statearr_32117_33705[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (29))){
var inst_32017 = (state_32039[(2)]);
var state_32039__$1 = state_32039;
var statearr_32119_33706 = state_32039__$1;
(statearr_32119_33706[(2)] = inst_32017);

(statearr_32119_33706[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (44))){
var inst_32028 = (state_32039[(2)]);
var state_32039__$1 = (function (){var statearr_32120 = state_32039;
(statearr_32120[(26)] = inst_32028);

return statearr_32120;
})();
var statearr_32121_33707 = state_32039__$1;
(statearr_32121_33707[(2)] = null);

(statearr_32121_33707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (6))){
var inst_31938 = (state_32039[(27)]);
var inst_31937 = cljs.core.deref(cs);
var inst_31938__$1 = cljs.core.keys(inst_31937);
var inst_31939 = cljs.core.count(inst_31938__$1);
var inst_31940 = cljs.core.reset_BANG_(dctr,inst_31939);
var inst_31945 = cljs.core.seq(inst_31938__$1);
var inst_31946 = inst_31945;
var inst_31947 = null;
var inst_31948 = (0);
var inst_31949 = (0);
var state_32039__$1 = (function (){var statearr_32123 = state_32039;
(statearr_32123[(28)] = inst_31940);

(statearr_32123[(27)] = inst_31938__$1);

(statearr_32123[(11)] = inst_31949);

(statearr_32123[(19)] = inst_31948);

(statearr_32123[(12)] = inst_31947);

(statearr_32123[(20)] = inst_31946);

return statearr_32123;
})();
var statearr_32124_33711 = state_32039__$1;
(statearr_32124_33711[(2)] = null);

(statearr_32124_33711[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (28))){
var inst_31964 = (state_32039[(23)]);
var inst_31946 = (state_32039[(20)]);
var inst_31964__$1 = cljs.core.seq(inst_31946);
var state_32039__$1 = (function (){var statearr_32126 = state_32039;
(statearr_32126[(23)] = inst_31964__$1);

return statearr_32126;
})();
if(inst_31964__$1){
var statearr_32127_33712 = state_32039__$1;
(statearr_32127_33712[(1)] = (33));

} else {
var statearr_32128_33713 = state_32039__$1;
(statearr_32128_33713[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (25))){
var inst_31949 = (state_32039[(11)]);
var inst_31948 = (state_32039[(19)]);
var inst_31951 = (inst_31949 < inst_31948);
var inst_31952 = inst_31951;
var state_32039__$1 = state_32039;
if(cljs.core.truth_(inst_31952)){
var statearr_32130_33714 = state_32039__$1;
(statearr_32130_33714[(1)] = (27));

} else {
var statearr_32131_33715 = state_32039__$1;
(statearr_32131_33715[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (34))){
var state_32039__$1 = state_32039;
var statearr_32132_33716 = state_32039__$1;
(statearr_32132_33716[(2)] = null);

(statearr_32132_33716[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (17))){
var state_32039__$1 = state_32039;
var statearr_32133_33723 = state_32039__$1;
(statearr_32133_33723[(2)] = null);

(statearr_32133_33723[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (3))){
var inst_32033 = (state_32039[(2)]);
var state_32039__$1 = state_32039;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32039__$1,inst_32033);
} else {
if((state_val_32042 === (12))){
var inst_31933 = (state_32039[(2)]);
var state_32039__$1 = state_32039;
var statearr_32134_33724 = state_32039__$1;
(statearr_32134_33724[(2)] = inst_31933);

(statearr_32134_33724[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (2))){
var state_32039__$1 = state_32039;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32039__$1,(4),ch);
} else {
if((state_val_32042 === (23))){
var state_32039__$1 = state_32039;
var statearr_32148_33725 = state_32039__$1;
(statearr_32148_33725[(2)] = null);

(statearr_32148_33725[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (35))){
var inst_32015 = (state_32039[(2)]);
var state_32039__$1 = state_32039;
var statearr_32150_33726 = state_32039__$1;
(statearr_32150_33726[(2)] = inst_32015);

(statearr_32150_33726[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (19))){
var inst_31904 = (state_32039[(7)]);
var inst_31908 = cljs.core.chunk_first(inst_31904);
var inst_31909 = cljs.core.chunk_rest(inst_31904);
var inst_31910 = cljs.core.count(inst_31908);
var inst_31872 = inst_31909;
var inst_31873 = inst_31908;
var inst_31874 = inst_31910;
var inst_31875 = (0);
var state_32039__$1 = (function (){var statearr_32151 = state_32039;
(statearr_32151[(13)] = inst_31875);

(statearr_32151[(14)] = inst_31873);

(statearr_32151[(15)] = inst_31872);

(statearr_32151[(16)] = inst_31874);

return statearr_32151;
})();
var statearr_32152_33727 = state_32039__$1;
(statearr_32152_33727[(2)] = null);

(statearr_32152_33727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (11))){
var inst_31872 = (state_32039[(15)]);
var inst_31904 = (state_32039[(7)]);
var inst_31904__$1 = cljs.core.seq(inst_31872);
var state_32039__$1 = (function (){var statearr_32153 = state_32039;
(statearr_32153[(7)] = inst_31904__$1);

return statearr_32153;
})();
if(inst_31904__$1){
var statearr_32154_33728 = state_32039__$1;
(statearr_32154_33728[(1)] = (16));

} else {
var statearr_32155_33729 = state_32039__$1;
(statearr_32155_33729[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (9))){
var inst_31935 = (state_32039[(2)]);
var state_32039__$1 = state_32039;
var statearr_32157_33730 = state_32039__$1;
(statearr_32157_33730[(2)] = inst_31935);

(statearr_32157_33730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (5))){
var inst_31870 = cljs.core.deref(cs);
var inst_31871 = cljs.core.seq(inst_31870);
var inst_31872 = inst_31871;
var inst_31873 = null;
var inst_31874 = (0);
var inst_31875 = (0);
var state_32039__$1 = (function (){var statearr_32158 = state_32039;
(statearr_32158[(13)] = inst_31875);

(statearr_32158[(14)] = inst_31873);

(statearr_32158[(15)] = inst_31872);

(statearr_32158[(16)] = inst_31874);

return statearr_32158;
})();
var statearr_32159_33732 = state_32039__$1;
(statearr_32159_33732[(2)] = null);

(statearr_32159_33732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (14))){
var state_32039__$1 = state_32039;
var statearr_32160_33733 = state_32039__$1;
(statearr_32160_33733[(2)] = null);

(statearr_32160_33733[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (45))){
var inst_32025 = (state_32039[(2)]);
var state_32039__$1 = state_32039;
var statearr_32161_33738 = state_32039__$1;
(statearr_32161_33738[(2)] = inst_32025);

(statearr_32161_33738[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (26))){
var inst_31938 = (state_32039[(27)]);
var inst_32019 = (state_32039[(2)]);
var inst_32022 = cljs.core.seq(inst_31938);
var state_32039__$1 = (function (){var statearr_32163 = state_32039;
(statearr_32163[(29)] = inst_32019);

return statearr_32163;
})();
if(inst_32022){
var statearr_32164_33739 = state_32039__$1;
(statearr_32164_33739[(1)] = (42));

} else {
var statearr_32165_33740 = state_32039__$1;
(statearr_32165_33740[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (16))){
var inst_31904 = (state_32039[(7)]);
var inst_31906 = cljs.core.chunked_seq_QMARK_(inst_31904);
var state_32039__$1 = state_32039;
if(inst_31906){
var statearr_32166_33741 = state_32039__$1;
(statearr_32166_33741[(1)] = (19));

} else {
var statearr_32167_33742 = state_32039__$1;
(statearr_32167_33742[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (38))){
var inst_32012 = (state_32039[(2)]);
var state_32039__$1 = state_32039;
var statearr_32168_33743 = state_32039__$1;
(statearr_32168_33743[(2)] = inst_32012);

(statearr_32168_33743[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (30))){
var state_32039__$1 = state_32039;
var statearr_32169_33744 = state_32039__$1;
(statearr_32169_33744[(2)] = null);

(statearr_32169_33744[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (10))){
var inst_31875 = (state_32039[(13)]);
var inst_31873 = (state_32039[(14)]);
var inst_31883 = cljs.core._nth(inst_31873,inst_31875);
var inst_31884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31883,(0),null);
var inst_31885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31883,(1),null);
var state_32039__$1 = (function (){var statearr_32170 = state_32039;
(statearr_32170[(24)] = inst_31884);

return statearr_32170;
})();
if(cljs.core.truth_(inst_31885)){
var statearr_32171_33751 = state_32039__$1;
(statearr_32171_33751[(1)] = (13));

} else {
var statearr_32172_33752 = state_32039__$1;
(statearr_32172_33752[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (18))){
var inst_31931 = (state_32039[(2)]);
var state_32039__$1 = state_32039;
var statearr_32173_33756 = state_32039__$1;
(statearr_32173_33756[(2)] = inst_31931);

(statearr_32173_33756[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (42))){
var state_32039__$1 = state_32039;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32039__$1,(45),dchan);
} else {
if((state_val_32042 === (37))){
var inst_31863 = (state_32039[(10)]);
var inst_31964 = (state_32039[(23)]);
var inst_31973 = (state_32039[(22)]);
var inst_31973__$1 = cljs.core.first(inst_31964);
var inst_31989 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31973__$1,inst_31863,done);
var state_32039__$1 = (function (){var statearr_32174 = state_32039;
(statearr_32174[(22)] = inst_31973__$1);

return statearr_32174;
})();
if(cljs.core.truth_(inst_31989)){
var statearr_32175_33757 = state_32039__$1;
(statearr_32175_33757[(1)] = (39));

} else {
var statearr_32176_33761 = state_32039__$1;
(statearr_32176_33761[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (8))){
var inst_31875 = (state_32039[(13)]);
var inst_31874 = (state_32039[(16)]);
var inst_31877 = (inst_31875 < inst_31874);
var inst_31878 = inst_31877;
var state_32039__$1 = state_32039;
if(cljs.core.truth_(inst_31878)){
var statearr_32178_33762 = state_32039__$1;
(statearr_32178_33762[(1)] = (10));

} else {
var statearr_32179_33763 = state_32039__$1;
(statearr_32179_33763[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__30764__auto__ = null;
var cljs$core$async$mult_$_state_machine__30764__auto____0 = (function (){
var statearr_32181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32181[(0)] = cljs$core$async$mult_$_state_machine__30764__auto__);

(statearr_32181[(1)] = (1));

return statearr_32181;
});
var cljs$core$async$mult_$_state_machine__30764__auto____1 = (function (state_32039){
while(true){
var ret_value__30765__auto__ = (function (){try{while(true){
var result__30766__auto__ = switch__30763__auto__(state_32039);
if(cljs.core.keyword_identical_QMARK_(result__30766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30766__auto__;
}
break;
}
}catch (e32182){var ex__30767__auto__ = e32182;
var statearr_32183_33770 = state_32039;
(statearr_32183_33770[(2)] = ex__30767__auto__);


if(cljs.core.seq((state_32039[(4)]))){
var statearr_32184_33771 = state_32039;
(statearr_32184_33771[(1)] = cljs.core.first((state_32039[(4)])));

} else {
throw ex__30767__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33772 = state_32039;
state_32039 = G__33772;
continue;
} else {
return ret_value__30765__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30764__auto__ = function(state_32039){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30764__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30764__auto____1.call(this,state_32039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30764__auto____0;
cljs$core$async$mult_$_state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30764__auto____1;
return cljs$core$async$mult_$_state_machine__30764__auto__;
})()
})();
var state__30954__auto__ = (function (){var statearr_32185 = f__30953__auto__();
(statearr_32185[(6)] = c__30952__auto___33655);

return statearr_32185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30954__auto__);
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
var G__32187 = arguments.length;
switch (G__32187) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_33774 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_33774(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33775 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_33775(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33788 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33788(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33789 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_33789(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33793 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33793(m,mode);
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

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32199){
var map__32200 = p__32199;
var map__32200__$1 = (((((!((map__32200 == null))))?(((((map__32200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32200):map__32200);
var opts = map__32200__$1;
var statearr_32202_33802 = state;
(statearr_32202_33802[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32204_33803 = state;
(statearr_32204_33803[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_32205_33804 = state;
(statearr_32205_33804[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32195){
var G__32196 = cljs.core.first(seq32195);
var seq32195__$1 = cljs.core.next(seq32195);
var G__32197 = cljs.core.first(seq32195__$1);
var seq32195__$2 = cljs.core.next(seq32195__$1);
var G__32198 = cljs.core.first(seq32195__$2);
var seq32195__$3 = cljs.core.next(seq32195__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32196,G__32197,G__32198,seq32195__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32207 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32207 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32208){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32208 = meta32208;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32209,meta32208__$1){
var self__ = this;
var _32209__$1 = this;
return (new cljs.core.async.t_cljs$core$async32207(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32208__$1));
}));

(cljs.core.async.t_cljs$core$async32207.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32209){
var self__ = this;
var _32209__$1 = this;
return self__.meta32208;
}));

(cljs.core.async.t_cljs$core$async32207.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32207.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32207.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32207.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32207.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32207.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32207.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32207.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32207.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32208","meta32208",1044250196,null)], null);
}));

(cljs.core.async.t_cljs$core$async32207.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32207.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32207");

(cljs.core.async.t_cljs$core$async32207.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32207");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32207.
 */
cljs.core.async.__GT_t_cljs$core$async32207 = (function cljs$core$async$mix_$___GT_t_cljs$core$async32207(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32208){
return (new cljs.core.async.t_cljs$core$async32207(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32208));
});

}

return (new cljs.core.async.t_cljs$core$async32207(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30952__auto___33806 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30953__auto__ = (function (){var switch__30763__auto__ = (function (state_32343){
var state_val_32344 = (state_32343[(1)]);
if((state_val_32344 === (7))){
var inst_32243 = (state_32343[(2)]);
var state_32343__$1 = state_32343;
var statearr_32345_33807 = state_32343__$1;
(statearr_32345_33807[(2)] = inst_32243);

(statearr_32345_33807[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (20))){
var inst_32255 = (state_32343[(7)]);
var state_32343__$1 = state_32343;
var statearr_32346_33808 = state_32343__$1;
(statearr_32346_33808[(2)] = inst_32255);

(statearr_32346_33808[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (27))){
var state_32343__$1 = state_32343;
var statearr_32347_33810 = state_32343__$1;
(statearr_32347_33810[(2)] = null);

(statearr_32347_33810[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (1))){
var inst_32230 = (state_32343[(8)]);
var inst_32230__$1 = calc_state();
var inst_32232 = (inst_32230__$1 == null);
var inst_32233 = cljs.core.not(inst_32232);
var state_32343__$1 = (function (){var statearr_32348 = state_32343;
(statearr_32348[(8)] = inst_32230__$1);

return statearr_32348;
})();
if(inst_32233){
var statearr_32349_33811 = state_32343__$1;
(statearr_32349_33811[(1)] = (2));

} else {
var statearr_32350_33812 = state_32343__$1;
(statearr_32350_33812[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (24))){
var inst_32317 = (state_32343[(9)]);
var inst_32283 = (state_32343[(10)]);
var inst_32303 = (state_32343[(11)]);
var inst_32317__$1 = (inst_32283.cljs$core$IFn$_invoke$arity$1 ? inst_32283.cljs$core$IFn$_invoke$arity$1(inst_32303) : inst_32283.call(null,inst_32303));
var state_32343__$1 = (function (){var statearr_32356 = state_32343;
(statearr_32356[(9)] = inst_32317__$1);

return statearr_32356;
})();
if(cljs.core.truth_(inst_32317__$1)){
var statearr_32360_33823 = state_32343__$1;
(statearr_32360_33823[(1)] = (29));

} else {
var statearr_32363_33824 = state_32343__$1;
(statearr_32363_33824[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (4))){
var inst_32246 = (state_32343[(2)]);
var state_32343__$1 = state_32343;
if(cljs.core.truth_(inst_32246)){
var statearr_32364_33825 = state_32343__$1;
(statearr_32364_33825[(1)] = (8));

} else {
var statearr_32365_33826 = state_32343__$1;
(statearr_32365_33826[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (15))){
var inst_32277 = (state_32343[(2)]);
var state_32343__$1 = state_32343;
if(cljs.core.truth_(inst_32277)){
var statearr_32369_33827 = state_32343__$1;
(statearr_32369_33827[(1)] = (19));

} else {
var statearr_32370_33828 = state_32343__$1;
(statearr_32370_33828[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (21))){
var inst_32282 = (state_32343[(12)]);
var inst_32282__$1 = (state_32343[(2)]);
var inst_32283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32282__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32284 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32282__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32282__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32343__$1 = (function (){var statearr_32375 = state_32343;
(statearr_32375[(10)] = inst_32283);

(statearr_32375[(13)] = inst_32284);

(statearr_32375[(12)] = inst_32282__$1);

return statearr_32375;
})();
return cljs.core.async.ioc_alts_BANG_(state_32343__$1,(22),inst_32285);
} else {
if((state_val_32344 === (31))){
var inst_32325 = (state_32343[(2)]);
var state_32343__$1 = state_32343;
if(cljs.core.truth_(inst_32325)){
var statearr_32380_33829 = state_32343__$1;
(statearr_32380_33829[(1)] = (32));

} else {
var statearr_32381_33830 = state_32343__$1;
(statearr_32381_33830[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (32))){
var inst_32301 = (state_32343[(14)]);
var state_32343__$1 = state_32343;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32343__$1,(35),out,inst_32301);
} else {
if((state_val_32344 === (33))){
var inst_32282 = (state_32343[(12)]);
var inst_32255 = inst_32282;
var state_32343__$1 = (function (){var statearr_32386 = state_32343;
(statearr_32386[(7)] = inst_32255);

return statearr_32386;
})();
var statearr_32387_33831 = state_32343__$1;
(statearr_32387_33831[(2)] = null);

(statearr_32387_33831[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (13))){
var inst_32255 = (state_32343[(7)]);
var inst_32264 = inst_32255.cljs$lang$protocol_mask$partition0$;
var inst_32265 = (inst_32264 & (64));
var inst_32268 = inst_32255.cljs$core$ISeq$;
var inst_32269 = (cljs.core.PROTOCOL_SENTINEL === inst_32268);
var inst_32270 = ((inst_32265) || (inst_32269));
var state_32343__$1 = state_32343;
if(cljs.core.truth_(inst_32270)){
var statearr_32391_33832 = state_32343__$1;
(statearr_32391_33832[(1)] = (16));

} else {
var statearr_32392_33833 = state_32343__$1;
(statearr_32392_33833[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (22))){
var inst_32303 = (state_32343[(11)]);
var inst_32301 = (state_32343[(14)]);
var inst_32291 = (state_32343[(2)]);
var inst_32301__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32291,(0),null);
var inst_32303__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32291,(1),null);
var inst_32304 = (inst_32301__$1 == null);
var inst_32305 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32303__$1,change);
var inst_32306 = ((inst_32304) || (inst_32305));
var state_32343__$1 = (function (){var statearr_32393 = state_32343;
(statearr_32393[(11)] = inst_32303__$1);

(statearr_32393[(14)] = inst_32301__$1);

return statearr_32393;
})();
if(cljs.core.truth_(inst_32306)){
var statearr_32394_33834 = state_32343__$1;
(statearr_32394_33834[(1)] = (23));

} else {
var statearr_32395_33835 = state_32343__$1;
(statearr_32395_33835[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (36))){
var inst_32282 = (state_32343[(12)]);
var inst_32255 = inst_32282;
var state_32343__$1 = (function (){var statearr_32396 = state_32343;
(statearr_32396[(7)] = inst_32255);

return statearr_32396;
})();
var statearr_32397_33864 = state_32343__$1;
(statearr_32397_33864[(2)] = null);

(statearr_32397_33864[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (29))){
var inst_32317 = (state_32343[(9)]);
var state_32343__$1 = state_32343;
var statearr_32398_33865 = state_32343__$1;
(statearr_32398_33865[(2)] = inst_32317);

(statearr_32398_33865[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (6))){
var state_32343__$1 = state_32343;
var statearr_32399_33866 = state_32343__$1;
(statearr_32399_33866[(2)] = false);

(statearr_32399_33866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (28))){
var inst_32313 = (state_32343[(2)]);
var inst_32314 = calc_state();
var inst_32255 = inst_32314;
var state_32343__$1 = (function (){var statearr_32400 = state_32343;
(statearr_32400[(7)] = inst_32255);

(statearr_32400[(15)] = inst_32313);

return statearr_32400;
})();
var statearr_32401_33871 = state_32343__$1;
(statearr_32401_33871[(2)] = null);

(statearr_32401_33871[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (25))){
var inst_32339 = (state_32343[(2)]);
var state_32343__$1 = state_32343;
var statearr_32402_33879 = state_32343__$1;
(statearr_32402_33879[(2)] = inst_32339);

(statearr_32402_33879[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (34))){
var inst_32337 = (state_32343[(2)]);
var state_32343__$1 = state_32343;
var statearr_32403_33883 = state_32343__$1;
(statearr_32403_33883[(2)] = inst_32337);

(statearr_32403_33883[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (17))){
var state_32343__$1 = state_32343;
var statearr_32404_33888 = state_32343__$1;
(statearr_32404_33888[(2)] = false);

(statearr_32404_33888[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (3))){
var state_32343__$1 = state_32343;
var statearr_32405_33889 = state_32343__$1;
(statearr_32405_33889[(2)] = false);

(statearr_32405_33889[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (12))){
var inst_32341 = (state_32343[(2)]);
var state_32343__$1 = state_32343;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32343__$1,inst_32341);
} else {
if((state_val_32344 === (2))){
var inst_32230 = (state_32343[(8)]);
var inst_32235 = inst_32230.cljs$lang$protocol_mask$partition0$;
var inst_32236 = (inst_32235 & (64));
var inst_32237 = inst_32230.cljs$core$ISeq$;
var inst_32238 = (cljs.core.PROTOCOL_SENTINEL === inst_32237);
var inst_32239 = ((inst_32236) || (inst_32238));
var state_32343__$1 = state_32343;
if(cljs.core.truth_(inst_32239)){
var statearr_32406_33891 = state_32343__$1;
(statearr_32406_33891[(1)] = (5));

} else {
var statearr_32407_33892 = state_32343__$1;
(statearr_32407_33892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (23))){
var inst_32301 = (state_32343[(14)]);
var inst_32308 = (inst_32301 == null);
var state_32343__$1 = state_32343;
if(cljs.core.truth_(inst_32308)){
var statearr_32408_33893 = state_32343__$1;
(statearr_32408_33893[(1)] = (26));

} else {
var statearr_32409_33894 = state_32343__$1;
(statearr_32409_33894[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (35))){
var inst_32328 = (state_32343[(2)]);
var state_32343__$1 = state_32343;
if(cljs.core.truth_(inst_32328)){
var statearr_32410_33905 = state_32343__$1;
(statearr_32410_33905[(1)] = (36));

} else {
var statearr_32411_33906 = state_32343__$1;
(statearr_32411_33906[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (19))){
var inst_32255 = (state_32343[(7)]);
var inst_32279 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32255);
var state_32343__$1 = state_32343;
var statearr_32412_33907 = state_32343__$1;
(statearr_32412_33907[(2)] = inst_32279);

(statearr_32412_33907[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (11))){
var inst_32255 = (state_32343[(7)]);
var inst_32261 = (inst_32255 == null);
var inst_32262 = cljs.core.not(inst_32261);
var state_32343__$1 = state_32343;
if(inst_32262){
var statearr_32413_33908 = state_32343__$1;
(statearr_32413_33908[(1)] = (13));

} else {
var statearr_32414_33909 = state_32343__$1;
(statearr_32414_33909[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (9))){
var inst_32230 = (state_32343[(8)]);
var state_32343__$1 = state_32343;
var statearr_32415_33910 = state_32343__$1;
(statearr_32415_33910[(2)] = inst_32230);

(statearr_32415_33910[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (5))){
var state_32343__$1 = state_32343;
var statearr_32417_33911 = state_32343__$1;
(statearr_32417_33911[(2)] = true);

(statearr_32417_33911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (14))){
var state_32343__$1 = state_32343;
var statearr_32418_33913 = state_32343__$1;
(statearr_32418_33913[(2)] = false);

(statearr_32418_33913[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (26))){
var inst_32303 = (state_32343[(11)]);
var inst_32310 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32303);
var state_32343__$1 = state_32343;
var statearr_32419_33914 = state_32343__$1;
(statearr_32419_33914[(2)] = inst_32310);

(statearr_32419_33914[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (16))){
var state_32343__$1 = state_32343;
var statearr_32420_33915 = state_32343__$1;
(statearr_32420_33915[(2)] = true);

(statearr_32420_33915[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (38))){
var inst_32333 = (state_32343[(2)]);
var state_32343__$1 = state_32343;
var statearr_32421_33916 = state_32343__$1;
(statearr_32421_33916[(2)] = inst_32333);

(statearr_32421_33916[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (30))){
var inst_32283 = (state_32343[(10)]);
var inst_32284 = (state_32343[(13)]);
var inst_32303 = (state_32343[(11)]);
var inst_32320 = cljs.core.empty_QMARK_(inst_32283);
var inst_32321 = (inst_32284.cljs$core$IFn$_invoke$arity$1 ? inst_32284.cljs$core$IFn$_invoke$arity$1(inst_32303) : inst_32284.call(null,inst_32303));
var inst_32322 = cljs.core.not(inst_32321);
var inst_32323 = ((inst_32320) && (inst_32322));
var state_32343__$1 = state_32343;
var statearr_32422_33917 = state_32343__$1;
(statearr_32422_33917[(2)] = inst_32323);

(statearr_32422_33917[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (10))){
var inst_32230 = (state_32343[(8)]);
var inst_32251 = (state_32343[(2)]);
var inst_32252 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32251,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32251,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32251,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32255 = inst_32230;
var state_32343__$1 = (function (){var statearr_32423 = state_32343;
(statearr_32423[(16)] = inst_32253);

(statearr_32423[(7)] = inst_32255);

(statearr_32423[(17)] = inst_32252);

(statearr_32423[(18)] = inst_32254);

return statearr_32423;
})();
var statearr_32424_33918 = state_32343__$1;
(statearr_32424_33918[(2)] = null);

(statearr_32424_33918[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (18))){
var inst_32274 = (state_32343[(2)]);
var state_32343__$1 = state_32343;
var statearr_32425_33919 = state_32343__$1;
(statearr_32425_33919[(2)] = inst_32274);

(statearr_32425_33919[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (37))){
var state_32343__$1 = state_32343;
var statearr_32426_33923 = state_32343__$1;
(statearr_32426_33923[(2)] = null);

(statearr_32426_33923[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32344 === (8))){
var inst_32230 = (state_32343[(8)]);
var inst_32248 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32230);
var state_32343__$1 = state_32343;
var statearr_32427_33924 = state_32343__$1;
(statearr_32427_33924[(2)] = inst_32248);

(statearr_32427_33924[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__30764__auto__ = null;
var cljs$core$async$mix_$_state_machine__30764__auto____0 = (function (){
var statearr_32440 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32440[(0)] = cljs$core$async$mix_$_state_machine__30764__auto__);

(statearr_32440[(1)] = (1));

return statearr_32440;
});
var cljs$core$async$mix_$_state_machine__30764__auto____1 = (function (state_32343){
while(true){
var ret_value__30765__auto__ = (function (){try{while(true){
var result__30766__auto__ = switch__30763__auto__(state_32343);
if(cljs.core.keyword_identical_QMARK_(result__30766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30766__auto__;
}
break;
}
}catch (e32441){var ex__30767__auto__ = e32441;
var statearr_32442_33925 = state_32343;
(statearr_32442_33925[(2)] = ex__30767__auto__);


if(cljs.core.seq((state_32343[(4)]))){
var statearr_32443_33926 = state_32343;
(statearr_32443_33926[(1)] = cljs.core.first((state_32343[(4)])));

} else {
throw ex__30767__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33927 = state_32343;
state_32343 = G__33927;
continue;
} else {
return ret_value__30765__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30764__auto__ = function(state_32343){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30764__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30764__auto____1.call(this,state_32343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30764__auto____0;
cljs$core$async$mix_$_state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30764__auto____1;
return cljs$core$async$mix_$_state_machine__30764__auto__;
})()
})();
var state__30954__auto__ = (function (){var statearr_32448 = f__30953__auto__();
(statearr_32448[(6)] = c__30952__auto___33806);

return statearr_32448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30954__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_33928 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_33928(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33932 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_33932(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33937 = (function() {
var G__33938 = null;
var G__33938__1 = (function (p){
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
var G__33938__2 = (function (p,v){
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
G__33938 = function(p,v){
switch(arguments.length){
case 1:
return G__33938__1.call(this,p);
case 2:
return G__33938__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33938.cljs$core$IFn$_invoke$arity$1 = G__33938__1;
G__33938.cljs$core$IFn$_invoke$arity$2 = G__33938__2;
return G__33938;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32476 = arguments.length;
switch (G__32476) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33937(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33937(p,v);
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
var c__30952__auto___33962 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30953__auto__ = (function (){var switch__30763__auto__ = (function (state_32557){
var state_val_32558 = (state_32557[(1)]);
if((state_val_32558 === (7))){
var inst_32553 = (state_32557[(2)]);
var state_32557__$1 = state_32557;
var statearr_32559_33963 = state_32557__$1;
(statearr_32559_33963[(2)] = inst_32553);

(statearr_32559_33963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (20))){
var state_32557__$1 = state_32557;
var statearr_32560_33970 = state_32557__$1;
(statearr_32560_33970[(2)] = null);

(statearr_32560_33970[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (1))){
var state_32557__$1 = state_32557;
var statearr_32561_33971 = state_32557__$1;
(statearr_32561_33971[(2)] = null);

(statearr_32561_33971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (24))){
var inst_32536 = (state_32557[(7)]);
var inst_32545 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32536);
var state_32557__$1 = state_32557;
var statearr_32562_33972 = state_32557__$1;
(statearr_32562_33972[(2)] = inst_32545);

(statearr_32562_33972[(1)] = (25));


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
var statearr_32564_33973 = state_32557__$1;
(statearr_32564_33973[(1)] = (5));

} else {
var statearr_32565_33974 = state_32557__$1;
(statearr_32565_33974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (15))){
var inst_32530 = (state_32557[(2)]);
var state_32557__$1 = state_32557;
var statearr_32566_33975 = state_32557__$1;
(statearr_32566_33975[(2)] = inst_32530);

(statearr_32566_33975[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (21))){
var inst_32550 = (state_32557[(2)]);
var state_32557__$1 = (function (){var statearr_32567 = state_32557;
(statearr_32567[(9)] = inst_32550);

return statearr_32567;
})();
var statearr_32568_33976 = state_32557__$1;
(statearr_32568_33976[(2)] = null);

(statearr_32568_33976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (13))){
var inst_32512 = (state_32557[(10)]);
var inst_32514 = cljs.core.chunked_seq_QMARK_(inst_32512);
var state_32557__$1 = state_32557;
if(inst_32514){
var statearr_32569_33983 = state_32557__$1;
(statearr_32569_33983[(1)] = (16));

} else {
var statearr_32570_33984 = state_32557__$1;
(statearr_32570_33984[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (22))){
var inst_32542 = (state_32557[(2)]);
var state_32557__$1 = state_32557;
if(cljs.core.truth_(inst_32542)){
var statearr_32571_33985 = state_32557__$1;
(statearr_32571_33985[(1)] = (23));

} else {
var statearr_32572_33986 = state_32557__$1;
(statearr_32572_33986[(1)] = (24));

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
var statearr_32574_33987 = state_32557__$1;
(statearr_32574_33987[(1)] = (19));

} else {
var statearr_32575_33988 = state_32557__$1;
(statearr_32575_33988[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (25))){
var inst_32547 = (state_32557[(2)]);
var state_32557__$1 = state_32557;
var statearr_32576_33989 = state_32557__$1;
(statearr_32576_33989[(2)] = inst_32547);

(statearr_32576_33989[(1)] = (21));


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
var state_32557__$1 = (function (){var statearr_32579 = state_32557;
(statearr_32579[(12)] = inst_32498);

(statearr_32579[(13)] = inst_32500);

(statearr_32579[(14)] = inst_32499);

(statearr_32579[(15)] = inst_32523);

(statearr_32579[(16)] = inst_32501);

return statearr_32579;
})();
var statearr_32581_33990 = state_32557__$1;
(statearr_32581_33990[(2)] = null);

(statearr_32581_33990[(1)] = (8));


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
var statearr_32582_33991 = state_32557__$1;
(statearr_32582_33991[(2)] = inst_32532);

(statearr_32582_33991[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (2))){
var state_32557__$1 = state_32557;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32557__$1,(4),ch);
} else {
if((state_val_32558 === (23))){
var state_32557__$1 = state_32557;
var statearr_32583_33992 = state_32557__$1;
(statearr_32583_33992[(2)] = null);

(statearr_32583_33992[(1)] = (25));


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
var state_32557__$1 = (function (){var statearr_32584 = state_32557;
(statearr_32584[(10)] = inst_32512__$1);

return statearr_32584;
})();
if(inst_32512__$1){
var statearr_32586_33993 = state_32557__$1;
(statearr_32586_33993[(1)] = (13));

} else {
var statearr_32587_33994 = state_32557__$1;
(statearr_32587_33994[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (9))){
var inst_32534 = (state_32557[(2)]);
var state_32557__$1 = state_32557;
var statearr_32589_33995 = state_32557__$1;
(statearr_32589_33995[(2)] = inst_32534);

(statearr_32589_33995[(1)] = (7));


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
var state_32557__$1 = (function (){var statearr_32590 = state_32557;
(statearr_32590[(12)] = inst_32498);

(statearr_32590[(13)] = inst_32500);

(statearr_32590[(14)] = inst_32499);

(statearr_32590[(16)] = inst_32501);

return statearr_32590;
})();
var statearr_32592_33996 = state_32557__$1;
(statearr_32592_33996[(2)] = null);

(statearr_32592_33996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (14))){
var state_32557__$1 = state_32557;
var statearr_32597_33997 = state_32557__$1;
(statearr_32597_33997[(2)] = null);

(statearr_32597_33997[(1)] = (15));


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
var state_32557__$1 = (function (){var statearr_32598 = state_32557;
(statearr_32598[(12)] = inst_32498);

(statearr_32598[(13)] = inst_32500);

(statearr_32598[(14)] = inst_32499);

(statearr_32598[(16)] = inst_32501);

return statearr_32598;
})();
var statearr_32599_34004 = state_32557__$1;
(statearr_32599_34004[(2)] = null);

(statearr_32599_34004[(1)] = (8));


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
var tmp32593 = inst_32498;
var tmp32594 = inst_32500;
var tmp32595 = inst_32499;
var inst_32498__$1 = tmp32593;
var inst_32499__$1 = tmp32595;
var inst_32500__$1 = tmp32594;
var inst_32501__$1 = inst_32509;
var state_32557__$1 = (function (){var statearr_32600 = state_32557;
(statearr_32600[(12)] = inst_32498__$1);

(statearr_32600[(13)] = inst_32500__$1);

(statearr_32600[(14)] = inst_32499__$1);

(statearr_32600[(16)] = inst_32501__$1);

(statearr_32600[(17)] = inst_32508);

return statearr_32600;
})();
var statearr_32601_34008 = state_32557__$1;
(statearr_32601_34008[(2)] = null);

(statearr_32601_34008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (18))){
var inst_32527 = (state_32557[(2)]);
var state_32557__$1 = state_32557;
var statearr_32602_34009 = state_32557__$1;
(statearr_32602_34009[(2)] = inst_32527);

(statearr_32602_34009[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32558 === (8))){
var inst_32500 = (state_32557[(13)]);
var inst_32501 = (state_32557[(16)]);
var inst_32503 = (inst_32501 < inst_32500);
var inst_32504 = inst_32503;
var state_32557__$1 = state_32557;
if(cljs.core.truth_(inst_32504)){
var statearr_32603_34010 = state_32557__$1;
(statearr_32603_34010[(1)] = (10));

} else {
var statearr_32604_34011 = state_32557__$1;
(statearr_32604_34011[(1)] = (11));

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
var cljs$core$async$state_machine__30764__auto__ = null;
var cljs$core$async$state_machine__30764__auto____0 = (function (){
var statearr_32605 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32605[(0)] = cljs$core$async$state_machine__30764__auto__);

(statearr_32605[(1)] = (1));

return statearr_32605;
});
var cljs$core$async$state_machine__30764__auto____1 = (function (state_32557){
while(true){
var ret_value__30765__auto__ = (function (){try{while(true){
var result__30766__auto__ = switch__30763__auto__(state_32557);
if(cljs.core.keyword_identical_QMARK_(result__30766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30766__auto__;
}
break;
}
}catch (e32606){var ex__30767__auto__ = e32606;
var statearr_32607_34012 = state_32557;
(statearr_32607_34012[(2)] = ex__30767__auto__);


if(cljs.core.seq((state_32557[(4)]))){
var statearr_32608_34013 = state_32557;
(statearr_32608_34013[(1)] = cljs.core.first((state_32557[(4)])));

} else {
throw ex__30767__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34014 = state_32557;
state_32557 = G__34014;
continue;
} else {
return ret_value__30765__auto__;
}
break;
}
});
cljs$core$async$state_machine__30764__auto__ = function(state_32557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30764__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30764__auto____1.call(this,state_32557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30764__auto____0;
cljs$core$async$state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30764__auto____1;
return cljs$core$async$state_machine__30764__auto__;
})()
})();
var state__30954__auto__ = (function (){var statearr_32609 = f__30953__auto__();
(statearr_32609[(6)] = c__30952__auto___33962);

return statearr_32609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30954__auto__);
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
var G__32611 = arguments.length;
switch (G__32611) {
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
var G__32616 = arguments.length;
switch (G__32616) {
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
var G__32618 = arguments.length;
switch (G__32618) {
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
var c__30952__auto___34028 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30953__auto__ = (function (){var switch__30763__auto__ = (function (state_32667){
var state_val_32668 = (state_32667[(1)]);
if((state_val_32668 === (7))){
var state_32667__$1 = state_32667;
var statearr_32669_34029 = state_32667__$1;
(statearr_32669_34029[(2)] = null);

(statearr_32669_34029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (1))){
var state_32667__$1 = state_32667;
var statearr_32670_34030 = state_32667__$1;
(statearr_32670_34030[(2)] = null);

(statearr_32670_34030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (4))){
var inst_32627 = (state_32667[(7)]);
var inst_32626 = (state_32667[(8)]);
var inst_32629 = (inst_32627 < inst_32626);
var state_32667__$1 = state_32667;
if(cljs.core.truth_(inst_32629)){
var statearr_32671_34031 = state_32667__$1;
(statearr_32671_34031[(1)] = (6));

} else {
var statearr_32672_34032 = state_32667__$1;
(statearr_32672_34032[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (15))){
var inst_32652 = (state_32667[(9)]);
var inst_32657 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32652);
var state_32667__$1 = state_32667;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32667__$1,(17),out,inst_32657);
} else {
if((state_val_32668 === (13))){
var inst_32652 = (state_32667[(9)]);
var inst_32652__$1 = (state_32667[(2)]);
var inst_32653 = cljs.core.some(cljs.core.nil_QMARK_,inst_32652__$1);
var state_32667__$1 = (function (){var statearr_32673 = state_32667;
(statearr_32673[(9)] = inst_32652__$1);

return statearr_32673;
})();
if(cljs.core.truth_(inst_32653)){
var statearr_32674_34039 = state_32667__$1;
(statearr_32674_34039[(1)] = (14));

} else {
var statearr_32675_34040 = state_32667__$1;
(statearr_32675_34040[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (6))){
var state_32667__$1 = state_32667;
var statearr_32676_34041 = state_32667__$1;
(statearr_32676_34041[(2)] = null);

(statearr_32676_34041[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (17))){
var inst_32659 = (state_32667[(2)]);
var state_32667__$1 = (function (){var statearr_32678 = state_32667;
(statearr_32678[(10)] = inst_32659);

return statearr_32678;
})();
var statearr_32679_34042 = state_32667__$1;
(statearr_32679_34042[(2)] = null);

(statearr_32679_34042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (3))){
var inst_32664 = (state_32667[(2)]);
var state_32667__$1 = state_32667;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32667__$1,inst_32664);
} else {
if((state_val_32668 === (12))){
var _ = (function (){var statearr_32680 = state_32667;
(statearr_32680[(4)] = cljs.core.rest((state_32667[(4)])));

return statearr_32680;
})();
var state_32667__$1 = state_32667;
var ex32677 = (state_32667__$1[(2)]);
var statearr_32733_34043 = state_32667__$1;
(statearr_32733_34043[(5)] = ex32677);


if((ex32677 instanceof Object)){
var statearr_32734_34044 = state_32667__$1;
(statearr_32734_34044[(1)] = (11));

(statearr_32734_34044[(5)] = null);

} else {
throw ex32677;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (2))){
var inst_32625 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32626 = cnt;
var inst_32627 = (0);
var state_32667__$1 = (function (){var statearr_32735 = state_32667;
(statearr_32735[(7)] = inst_32627);

(statearr_32735[(8)] = inst_32626);

(statearr_32735[(11)] = inst_32625);

return statearr_32735;
})();
var statearr_32736_34045 = state_32667__$1;
(statearr_32736_34045[(2)] = null);

(statearr_32736_34045[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (11))){
var inst_32631 = (state_32667[(2)]);
var inst_32632 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32667__$1 = (function (){var statearr_32740 = state_32667;
(statearr_32740[(12)] = inst_32631);

return statearr_32740;
})();
var statearr_32741_34046 = state_32667__$1;
(statearr_32741_34046[(2)] = inst_32632);

(statearr_32741_34046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (9))){
var inst_32627 = (state_32667[(7)]);
var _ = (function (){var statearr_32743 = state_32667;
(statearr_32743[(4)] = cljs.core.cons((12),(state_32667[(4)])));

return statearr_32743;
})();
var inst_32638 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32627) : chs__$1.call(null,inst_32627));
var inst_32639 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32627) : done.call(null,inst_32627));
var inst_32640 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32638,inst_32639);
var ___$1 = (function (){var statearr_32744 = state_32667;
(statearr_32744[(4)] = cljs.core.rest((state_32667[(4)])));

return statearr_32744;
})();
var state_32667__$1 = state_32667;
var statearr_32745_34047 = state_32667__$1;
(statearr_32745_34047[(2)] = inst_32640);

(statearr_32745_34047[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (5))){
var inst_32650 = (state_32667[(2)]);
var state_32667__$1 = (function (){var statearr_32746 = state_32667;
(statearr_32746[(13)] = inst_32650);

return statearr_32746;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32667__$1,(13),dchan);
} else {
if((state_val_32668 === (14))){
var inst_32655 = cljs.core.async.close_BANG_(out);
var state_32667__$1 = state_32667;
var statearr_32756_34048 = state_32667__$1;
(statearr_32756_34048[(2)] = inst_32655);

(statearr_32756_34048[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (16))){
var inst_32662 = (state_32667[(2)]);
var state_32667__$1 = state_32667;
var statearr_32757_34049 = state_32667__$1;
(statearr_32757_34049[(2)] = inst_32662);

(statearr_32757_34049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (10))){
var inst_32627 = (state_32667[(7)]);
var inst_32643 = (state_32667[(2)]);
var inst_32644 = (inst_32627 + (1));
var inst_32627__$1 = inst_32644;
var state_32667__$1 = (function (){var statearr_32758 = state_32667;
(statearr_32758[(7)] = inst_32627__$1);

(statearr_32758[(14)] = inst_32643);

return statearr_32758;
})();
var statearr_32759_34053 = state_32667__$1;
(statearr_32759_34053[(2)] = null);

(statearr_32759_34053[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32668 === (8))){
var inst_32648 = (state_32667[(2)]);
var state_32667__$1 = state_32667;
var statearr_32760_34054 = state_32667__$1;
(statearr_32760_34054[(2)] = inst_32648);

(statearr_32760_34054[(1)] = (5));


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
var cljs$core$async$state_machine__30764__auto__ = null;
var cljs$core$async$state_machine__30764__auto____0 = (function (){
var statearr_32761 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32761[(0)] = cljs$core$async$state_machine__30764__auto__);

(statearr_32761[(1)] = (1));

return statearr_32761;
});
var cljs$core$async$state_machine__30764__auto____1 = (function (state_32667){
while(true){
var ret_value__30765__auto__ = (function (){try{while(true){
var result__30766__auto__ = switch__30763__auto__(state_32667);
if(cljs.core.keyword_identical_QMARK_(result__30766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30766__auto__;
}
break;
}
}catch (e32762){var ex__30767__auto__ = e32762;
var statearr_32763_34055 = state_32667;
(statearr_32763_34055[(2)] = ex__30767__auto__);


if(cljs.core.seq((state_32667[(4)]))){
var statearr_32764_34056 = state_32667;
(statearr_32764_34056[(1)] = cljs.core.first((state_32667[(4)])));

} else {
throw ex__30767__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34057 = state_32667;
state_32667 = G__34057;
continue;
} else {
return ret_value__30765__auto__;
}
break;
}
});
cljs$core$async$state_machine__30764__auto__ = function(state_32667){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30764__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30764__auto____1.call(this,state_32667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30764__auto____0;
cljs$core$async$state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30764__auto____1;
return cljs$core$async$state_machine__30764__auto__;
})()
})();
var state__30954__auto__ = (function (){var statearr_32765 = f__30953__auto__();
(statearr_32765[(6)] = c__30952__auto___34028);

return statearr_32765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30954__auto__);
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
var G__32768 = arguments.length;
switch (G__32768) {
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
var c__30952__auto___34059 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30953__auto__ = (function (){var switch__30763__auto__ = (function (state_32800){
var state_val_32801 = (state_32800[(1)]);
if((state_val_32801 === (7))){
var inst_32780 = (state_32800[(7)]);
var inst_32779 = (state_32800[(8)]);
var inst_32779__$1 = (state_32800[(2)]);
var inst_32780__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32779__$1,(0),null);
var inst_32781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32779__$1,(1),null);
var inst_32782 = (inst_32780__$1 == null);
var state_32800__$1 = (function (){var statearr_32806 = state_32800;
(statearr_32806[(7)] = inst_32780__$1);

(statearr_32806[(9)] = inst_32781);

(statearr_32806[(8)] = inst_32779__$1);

return statearr_32806;
})();
if(cljs.core.truth_(inst_32782)){
var statearr_32807_34060 = state_32800__$1;
(statearr_32807_34060[(1)] = (8));

} else {
var statearr_32808_34061 = state_32800__$1;
(statearr_32808_34061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (1))){
var inst_32769 = cljs.core.vec(chs);
var inst_32770 = inst_32769;
var state_32800__$1 = (function (){var statearr_32809 = state_32800;
(statearr_32809[(10)] = inst_32770);

return statearr_32809;
})();
var statearr_32810_34067 = state_32800__$1;
(statearr_32810_34067[(2)] = null);

(statearr_32810_34067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (4))){
var inst_32770 = (state_32800[(10)]);
var state_32800__$1 = state_32800;
return cljs.core.async.ioc_alts_BANG_(state_32800__$1,(7),inst_32770);
} else {
if((state_val_32801 === (6))){
var inst_32796 = (state_32800[(2)]);
var state_32800__$1 = state_32800;
var statearr_32813_34069 = state_32800__$1;
(statearr_32813_34069[(2)] = inst_32796);

(statearr_32813_34069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (3))){
var inst_32798 = (state_32800[(2)]);
var state_32800__$1 = state_32800;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32800__$1,inst_32798);
} else {
if((state_val_32801 === (2))){
var inst_32770 = (state_32800[(10)]);
var inst_32772 = cljs.core.count(inst_32770);
var inst_32773 = (inst_32772 > (0));
var state_32800__$1 = state_32800;
if(cljs.core.truth_(inst_32773)){
var statearr_32815_34071 = state_32800__$1;
(statearr_32815_34071[(1)] = (4));

} else {
var statearr_32816_34072 = state_32800__$1;
(statearr_32816_34072[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (11))){
var inst_32770 = (state_32800[(10)]);
var inst_32789 = (state_32800[(2)]);
var tmp32814 = inst_32770;
var inst_32770__$1 = tmp32814;
var state_32800__$1 = (function (){var statearr_32819 = state_32800;
(statearr_32819[(10)] = inst_32770__$1);

(statearr_32819[(11)] = inst_32789);

return statearr_32819;
})();
var statearr_32820_34073 = state_32800__$1;
(statearr_32820_34073[(2)] = null);

(statearr_32820_34073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (9))){
var inst_32780 = (state_32800[(7)]);
var state_32800__$1 = state_32800;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32800__$1,(11),out,inst_32780);
} else {
if((state_val_32801 === (5))){
var inst_32794 = cljs.core.async.close_BANG_(out);
var state_32800__$1 = state_32800;
var statearr_32823_34074 = state_32800__$1;
(statearr_32823_34074[(2)] = inst_32794);

(statearr_32823_34074[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (10))){
var inst_32792 = (state_32800[(2)]);
var state_32800__$1 = state_32800;
var statearr_32824_34075 = state_32800__$1;
(statearr_32824_34075[(2)] = inst_32792);

(statearr_32824_34075[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (8))){
var inst_32780 = (state_32800[(7)]);
var inst_32770 = (state_32800[(10)]);
var inst_32781 = (state_32800[(9)]);
var inst_32779 = (state_32800[(8)]);
var inst_32784 = (function (){var cs = inst_32770;
var vec__32775 = inst_32779;
var v = inst_32780;
var c = inst_32781;
return (function (p1__32766_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32766_SHARP_);
});
})();
var inst_32785 = cljs.core.filterv(inst_32784,inst_32770);
var inst_32770__$1 = inst_32785;
var state_32800__$1 = (function (){var statearr_32825 = state_32800;
(statearr_32825[(10)] = inst_32770__$1);

return statearr_32825;
})();
var statearr_32826_34076 = state_32800__$1;
(statearr_32826_34076[(2)] = null);

(statearr_32826_34076[(1)] = (2));


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
var cljs$core$async$state_machine__30764__auto__ = null;
var cljs$core$async$state_machine__30764__auto____0 = (function (){
var statearr_32827 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32827[(0)] = cljs$core$async$state_machine__30764__auto__);

(statearr_32827[(1)] = (1));

return statearr_32827;
});
var cljs$core$async$state_machine__30764__auto____1 = (function (state_32800){
while(true){
var ret_value__30765__auto__ = (function (){try{while(true){
var result__30766__auto__ = switch__30763__auto__(state_32800);
if(cljs.core.keyword_identical_QMARK_(result__30766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30766__auto__;
}
break;
}
}catch (e32828){var ex__30767__auto__ = e32828;
var statearr_32829_34089 = state_32800;
(statearr_32829_34089[(2)] = ex__30767__auto__);


if(cljs.core.seq((state_32800[(4)]))){
var statearr_32830_34091 = state_32800;
(statearr_32830_34091[(1)] = cljs.core.first((state_32800[(4)])));

} else {
throw ex__30767__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34093 = state_32800;
state_32800 = G__34093;
continue;
} else {
return ret_value__30765__auto__;
}
break;
}
});
cljs$core$async$state_machine__30764__auto__ = function(state_32800){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30764__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30764__auto____1.call(this,state_32800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30764__auto____0;
cljs$core$async$state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30764__auto____1;
return cljs$core$async$state_machine__30764__auto__;
})()
})();
var state__30954__auto__ = (function (){var statearr_32831 = f__30953__auto__();
(statearr_32831[(6)] = c__30952__auto___34059);

return statearr_32831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30954__auto__);
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
var G__32834 = arguments.length;
switch (G__32834) {
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
var c__30952__auto___34099 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30953__auto__ = (function (){var switch__30763__auto__ = (function (state_32859){
var state_val_32860 = (state_32859[(1)]);
if((state_val_32860 === (7))){
var inst_32841 = (state_32859[(7)]);
var inst_32841__$1 = (state_32859[(2)]);
var inst_32842 = (inst_32841__$1 == null);
var inst_32843 = cljs.core.not(inst_32842);
var state_32859__$1 = (function (){var statearr_32862 = state_32859;
(statearr_32862[(7)] = inst_32841__$1);

return statearr_32862;
})();
if(inst_32843){
var statearr_32863_34101 = state_32859__$1;
(statearr_32863_34101[(1)] = (8));

} else {
var statearr_32864_34102 = state_32859__$1;
(statearr_32864_34102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (1))){
var inst_32835 = (0);
var state_32859__$1 = (function (){var statearr_32865 = state_32859;
(statearr_32865[(8)] = inst_32835);

return statearr_32865;
})();
var statearr_32866_34103 = state_32859__$1;
(statearr_32866_34103[(2)] = null);

(statearr_32866_34103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (4))){
var state_32859__$1 = state_32859;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32859__$1,(7),ch);
} else {
if((state_val_32860 === (6))){
var inst_32854 = (state_32859[(2)]);
var state_32859__$1 = state_32859;
var statearr_32867_34104 = state_32859__$1;
(statearr_32867_34104[(2)] = inst_32854);

(statearr_32867_34104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (3))){
var inst_32856 = (state_32859[(2)]);
var inst_32857 = cljs.core.async.close_BANG_(out);
var state_32859__$1 = (function (){var statearr_32868 = state_32859;
(statearr_32868[(9)] = inst_32856);

return statearr_32868;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32859__$1,inst_32857);
} else {
if((state_val_32860 === (2))){
var inst_32835 = (state_32859[(8)]);
var inst_32838 = (inst_32835 < n);
var state_32859__$1 = state_32859;
if(cljs.core.truth_(inst_32838)){
var statearr_32869_34126 = state_32859__$1;
(statearr_32869_34126[(1)] = (4));

} else {
var statearr_32870_34127 = state_32859__$1;
(statearr_32870_34127[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (11))){
var inst_32835 = (state_32859[(8)]);
var inst_32846 = (state_32859[(2)]);
var inst_32847 = (inst_32835 + (1));
var inst_32835__$1 = inst_32847;
var state_32859__$1 = (function (){var statearr_32871 = state_32859;
(statearr_32871[(10)] = inst_32846);

(statearr_32871[(8)] = inst_32835__$1);

return statearr_32871;
})();
var statearr_32872_34129 = state_32859__$1;
(statearr_32872_34129[(2)] = null);

(statearr_32872_34129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (9))){
var state_32859__$1 = state_32859;
var statearr_32873_34130 = state_32859__$1;
(statearr_32873_34130[(2)] = null);

(statearr_32873_34130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (5))){
var state_32859__$1 = state_32859;
var statearr_32874_34131 = state_32859__$1;
(statearr_32874_34131[(2)] = null);

(statearr_32874_34131[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (10))){
var inst_32851 = (state_32859[(2)]);
var state_32859__$1 = state_32859;
var statearr_32876_34132 = state_32859__$1;
(statearr_32876_34132[(2)] = inst_32851);

(statearr_32876_34132[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32860 === (8))){
var inst_32841 = (state_32859[(7)]);
var state_32859__$1 = state_32859;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32859__$1,(11),out,inst_32841);
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
var cljs$core$async$state_machine__30764__auto__ = null;
var cljs$core$async$state_machine__30764__auto____0 = (function (){
var statearr_32877 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32877[(0)] = cljs$core$async$state_machine__30764__auto__);

(statearr_32877[(1)] = (1));

return statearr_32877;
});
var cljs$core$async$state_machine__30764__auto____1 = (function (state_32859){
while(true){
var ret_value__30765__auto__ = (function (){try{while(true){
var result__30766__auto__ = switch__30763__auto__(state_32859);
if(cljs.core.keyword_identical_QMARK_(result__30766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30766__auto__;
}
break;
}
}catch (e32879){var ex__30767__auto__ = e32879;
var statearr_32881_34141 = state_32859;
(statearr_32881_34141[(2)] = ex__30767__auto__);


if(cljs.core.seq((state_32859[(4)]))){
var statearr_32882_34142 = state_32859;
(statearr_32882_34142[(1)] = cljs.core.first((state_32859[(4)])));

} else {
throw ex__30767__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34143 = state_32859;
state_32859 = G__34143;
continue;
} else {
return ret_value__30765__auto__;
}
break;
}
});
cljs$core$async$state_machine__30764__auto__ = function(state_32859){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30764__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30764__auto____1.call(this,state_32859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30764__auto____0;
cljs$core$async$state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30764__auto____1;
return cljs$core$async$state_machine__30764__auto__;
})()
})();
var state__30954__auto__ = (function (){var statearr_32883 = f__30953__auto__();
(statearr_32883[(6)] = c__30952__auto___34099);

return statearr_32883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30954__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32885 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32885 = (function (f,ch,meta32886){
this.f = f;
this.ch = ch;
this.meta32886 = meta32886;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32887,meta32886__$1){
var self__ = this;
var _32887__$1 = this;
return (new cljs.core.async.t_cljs$core$async32885(self__.f,self__.ch,meta32886__$1));
}));

(cljs.core.async.t_cljs$core$async32885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32887){
var self__ = this;
var _32887__$1 = this;
return self__.meta32886;
}));

(cljs.core.async.t_cljs$core$async32885.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32885.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32885.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32885.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32885.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32888 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32888 = (function (f,ch,meta32886,_,fn1,meta32889){
this.f = f;
this.ch = ch;
this.meta32886 = meta32886;
this._ = _;
this.fn1 = fn1;
this.meta32889 = meta32889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32890,meta32889__$1){
var self__ = this;
var _32890__$1 = this;
return (new cljs.core.async.t_cljs$core$async32888(self__.f,self__.ch,self__.meta32886,self__._,self__.fn1,meta32889__$1));
}));

(cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32890){
var self__ = this;
var _32890__$1 = this;
return self__.meta32889;
}));

(cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32884_SHARP_){
var G__32896 = (((p1__32884_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32884_SHARP_) : self__.f.call(null,p1__32884_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32896) : f1.call(null,G__32896));
});
}));

(cljs.core.async.t_cljs$core$async32888.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32886","meta32886",-585827044,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32885","cljs.core.async/t_cljs$core$async32885",-850488754,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32889","meta32889",-722211566,null)], null);
}));

(cljs.core.async.t_cljs$core$async32888.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32888.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32888");

(cljs.core.async.t_cljs$core$async32888.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32888");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32888.
 */
cljs.core.async.__GT_t_cljs$core$async32888 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32888(f__$1,ch__$1,meta32886__$1,___$2,fn1__$1,meta32889){
return (new cljs.core.async.t_cljs$core$async32888(f__$1,ch__$1,meta32886__$1,___$2,fn1__$1,meta32889));
});

}

return (new cljs.core.async.t_cljs$core$async32888(self__.f,self__.ch,self__.meta32886,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32899 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32899) : self__.f.call(null,G__32899));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32885.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32885.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32885.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32886","meta32886",-585827044,null)], null);
}));

(cljs.core.async.t_cljs$core$async32885.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32885.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32885");

(cljs.core.async.t_cljs$core$async32885.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32885");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32885.
 */
cljs.core.async.__GT_t_cljs$core$async32885 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32885(f__$1,ch__$1,meta32886){
return (new cljs.core.async.t_cljs$core$async32885(f__$1,ch__$1,meta32886));
});

}

return (new cljs.core.async.t_cljs$core$async32885(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32900 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32900 = (function (f,ch,meta32901){
this.f = f;
this.ch = ch;
this.meta32901 = meta32901;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32902,meta32901__$1){
var self__ = this;
var _32902__$1 = this;
return (new cljs.core.async.t_cljs$core$async32900(self__.f,self__.ch,meta32901__$1));
}));

(cljs.core.async.t_cljs$core$async32900.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32902){
var self__ = this;
var _32902__$1 = this;
return self__.meta32901;
}));

(cljs.core.async.t_cljs$core$async32900.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32900.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32900.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32900.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32900.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32900.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32900.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32901","meta32901",-93370286,null)], null);
}));

(cljs.core.async.t_cljs$core$async32900.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32900.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32900");

(cljs.core.async.t_cljs$core$async32900.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32900");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32900.
 */
cljs.core.async.__GT_t_cljs$core$async32900 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32900(f__$1,ch__$1,meta32901){
return (new cljs.core.async.t_cljs$core$async32900(f__$1,ch__$1,meta32901));
});

}

return (new cljs.core.async.t_cljs$core$async32900(f,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30952__auto___34225 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30953__auto__ = (function (){var switch__30763__auto__ = (function (state_32928){
var state_val_32929 = (state_32928[(1)]);
if((state_val_32929 === (7))){
var inst_32924 = (state_32928[(2)]);
var state_32928__$1 = state_32928;
var statearr_32930_34230 = state_32928__$1;
(statearr_32930_34230[(2)] = inst_32924);

(statearr_32930_34230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (1))){
var state_32928__$1 = state_32928;
var statearr_32931_34231 = state_32928__$1;
(statearr_32931_34231[(2)] = null);

(statearr_32931_34231[(1)] = (2));


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
var statearr_32933_34232 = state_32928__$1;
(statearr_32933_34232[(1)] = (5));

} else {
var statearr_32934_34233 = state_32928__$1;
(statearr_32934_34233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (6))){
var inst_32910 = (state_32928[(7)]);
var inst_32915 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32910) : p.call(null,inst_32910));
var state_32928__$1 = state_32928;
if(cljs.core.truth_(inst_32915)){
var statearr_32935_34234 = state_32928__$1;
(statearr_32935_34234[(1)] = (8));

} else {
var statearr_32936_34235 = state_32928__$1;
(statearr_32936_34235[(1)] = (9));

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
var statearr_32937_34240 = state_32928__$1;
(statearr_32937_34240[(2)] = inst_32918);

(statearr_32937_34240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (9))){
var state_32928__$1 = state_32928;
var statearr_32938_34245 = state_32928__$1;
(statearr_32938_34245[(2)] = null);

(statearr_32938_34245[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (5))){
var inst_32913 = cljs.core.async.close_BANG_(out);
var state_32928__$1 = state_32928;
var statearr_32939_34250 = state_32928__$1;
(statearr_32939_34250[(2)] = inst_32913);

(statearr_32939_34250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32929 === (10))){
var inst_32921 = (state_32928[(2)]);
var state_32928__$1 = (function (){var statearr_32940 = state_32928;
(statearr_32940[(8)] = inst_32921);

return statearr_32940;
})();
var statearr_32941_34252 = state_32928__$1;
(statearr_32941_34252[(2)] = null);

(statearr_32941_34252[(1)] = (2));


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
var cljs$core$async$state_machine__30764__auto__ = null;
var cljs$core$async$state_machine__30764__auto____0 = (function (){
var statearr_32942 = [null,null,null,null,null,null,null,null,null];
(statearr_32942[(0)] = cljs$core$async$state_machine__30764__auto__);

(statearr_32942[(1)] = (1));

return statearr_32942;
});
var cljs$core$async$state_machine__30764__auto____1 = (function (state_32928){
while(true){
var ret_value__30765__auto__ = (function (){try{while(true){
var result__30766__auto__ = switch__30763__auto__(state_32928);
if(cljs.core.keyword_identical_QMARK_(result__30766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30766__auto__;
}
break;
}
}catch (e32943){var ex__30767__auto__ = e32943;
var statearr_32944_34258 = state_32928;
(statearr_32944_34258[(2)] = ex__30767__auto__);


if(cljs.core.seq((state_32928[(4)]))){
var statearr_32945_34263 = state_32928;
(statearr_32945_34263[(1)] = cljs.core.first((state_32928[(4)])));

} else {
throw ex__30767__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34265 = state_32928;
state_32928 = G__34265;
continue;
} else {
return ret_value__30765__auto__;
}
break;
}
});
cljs$core$async$state_machine__30764__auto__ = function(state_32928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30764__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30764__auto____1.call(this,state_32928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30764__auto____0;
cljs$core$async$state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30764__auto____1;
return cljs$core$async$state_machine__30764__auto__;
})()
})();
var state__30954__auto__ = (function (){var statearr_32946 = f__30953__auto__();
(statearr_32946[(6)] = c__30952__auto___34225);

return statearr_32946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30954__auto__);
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
var c__30952__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30953__auto__ = (function (){var switch__30763__auto__ = (function (state_33010){
var state_val_33011 = (state_33010[(1)]);
if((state_val_33011 === (7))){
var inst_33006 = (state_33010[(2)]);
var state_33010__$1 = state_33010;
var statearr_33012_34272 = state_33010__$1;
(statearr_33012_34272[(2)] = inst_33006);

(statearr_33012_34272[(1)] = (3));


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
var statearr_33014_34273 = state_33010__$1;
(statearr_33014_34273[(2)] = null);

(statearr_33014_34273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (1))){
var state_33010__$1 = state_33010;
var statearr_33015_34274 = state_33010__$1;
(statearr_33015_34274[(2)] = null);

(statearr_33015_34274[(1)] = (2));


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
var statearr_33017_34275 = state_33010__$1;
(statearr_33017_34275[(1)] = (5));

} else {
var statearr_33018_34276 = state_33010__$1;
(statearr_33018_34276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (15))){
var state_33010__$1 = state_33010;
var statearr_33022_34277 = state_33010__$1;
(statearr_33022_34277[(2)] = null);

(statearr_33022_34277[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (21))){
var state_33010__$1 = state_33010;
var statearr_33023_34315 = state_33010__$1;
(statearr_33023_34315[(2)] = null);

(statearr_33023_34315[(1)] = (23));


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
var statearr_33025_34316 = state_33010__$1;
(statearr_33025_34316[(2)] = null);

(statearr_33025_34316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (22))){
var state_33010__$1 = state_33010;
var statearr_33026_34317 = state_33010__$1;
(statearr_33026_34317[(2)] = null);

(statearr_33026_34317[(1)] = (2));


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
var statearr_33028_34318 = state_33010__$1;
(statearr_33028_34318[(2)] = null);

(statearr_33028_34318[(1)] = (8));


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
var statearr_33030_34319 = state_33010__$1;
(statearr_33030_34319[(2)] = null);

(statearr_33030_34319[(1)] = (8));


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
var statearr_33031_34320 = state_33010__$1;
(statearr_33031_34320[(2)] = inst_32996);

(statearr_33031_34320[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (2))){
var state_33010__$1 = state_33010;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33010__$1,(4),in$);
} else {
if((state_val_33011 === (23))){
var inst_33004 = (state_33010[(2)]);
var state_33010__$1 = state_33010;
var statearr_33032_34321 = state_33010__$1;
(statearr_33032_34321[(2)] = inst_33004);

(statearr_33032_34321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (19))){
var inst_32991 = (state_33010[(2)]);
var state_33010__$1 = state_33010;
var statearr_33033_34326 = state_33010__$1;
(statearr_33033_34326[(2)] = inst_32991);

(statearr_33033_34326[(1)] = (16));


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
var statearr_33035_34329 = state_33010__$1;
(statearr_33035_34329[(1)] = (14));

} else {
var statearr_33036_34330 = state_33010__$1;
(statearr_33036_34330[(1)] = (15));

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
var statearr_33038_34331 = state_33010__$1;
(statearr_33038_34331[(1)] = (21));

} else {
var statearr_33039_34332 = state_33010__$1;
(statearr_33039_34332[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (5))){
var inst_32954 = cljs.core.async.close_BANG_(out);
var state_33010__$1 = state_33010;
var statearr_33040_34334 = state_33010__$1;
(statearr_33040_34334[(2)] = inst_32954);

(statearr_33040_34334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (14))){
var inst_32976 = (state_33010[(7)]);
var inst_32978 = cljs.core.chunked_seq_QMARK_(inst_32976);
var state_33010__$1 = state_33010;
if(inst_32978){
var statearr_33041_34338 = state_33010__$1;
(statearr_33041_34338[(1)] = (17));

} else {
var statearr_33042_34339 = state_33010__$1;
(statearr_33042_34339[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33011 === (16))){
var inst_32994 = (state_33010[(2)]);
var state_33010__$1 = state_33010;
var statearr_33043_34340 = state_33010__$1;
(statearr_33043_34340[(2)] = inst_32994);

(statearr_33043_34340[(1)] = (12));


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
var statearr_33044_34348 = state_33010__$1;
(statearr_33044_34348[(1)] = (10));

} else {
var statearr_33045_34349 = state_33010__$1;
(statearr_33045_34349[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__30764__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30764__auto____0 = (function (){
var statearr_33046 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33046[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30764__auto__);

(statearr_33046[(1)] = (1));

return statearr_33046;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30764__auto____1 = (function (state_33010){
while(true){
var ret_value__30765__auto__ = (function (){try{while(true){
var result__30766__auto__ = switch__30763__auto__(state_33010);
if(cljs.core.keyword_identical_QMARK_(result__30766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30766__auto__;
}
break;
}
}catch (e33047){var ex__30767__auto__ = e33047;
var statearr_33048_34356 = state_33010;
(statearr_33048_34356[(2)] = ex__30767__auto__);


if(cljs.core.seq((state_33010[(4)]))){
var statearr_33049_34370 = state_33010;
(statearr_33049_34370[(1)] = cljs.core.first((state_33010[(4)])));

} else {
throw ex__30767__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34371 = state_33010;
state_33010 = G__34371;
continue;
} else {
return ret_value__30765__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30764__auto__ = function(state_33010){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30764__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30764__auto____1.call(this,state_33010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30764__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30764__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30764__auto__;
})()
})();
var state__30954__auto__ = (function (){var statearr_33050 = f__30953__auto__();
(statearr_33050[(6)] = c__30952__auto__);

return statearr_33050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30954__auto__);
}));

return c__30952__auto__;
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
var c__30952__auto___34384 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30953__auto__ = (function (){var switch__30763__auto__ = (function (state_33082){
var state_val_33083 = (state_33082[(1)]);
if((state_val_33083 === (7))){
var inst_33077 = (state_33082[(2)]);
var state_33082__$1 = state_33082;
var statearr_33084_34385 = state_33082__$1;
(statearr_33084_34385[(2)] = inst_33077);

(statearr_33084_34385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (1))){
var inst_33059 = null;
var state_33082__$1 = (function (){var statearr_33085 = state_33082;
(statearr_33085[(7)] = inst_33059);

return statearr_33085;
})();
var statearr_33086_34387 = state_33082__$1;
(statearr_33086_34387[(2)] = null);

(statearr_33086_34387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (4))){
var inst_33062 = (state_33082[(8)]);
var inst_33062__$1 = (state_33082[(2)]);
var inst_33063 = (inst_33062__$1 == null);
var inst_33064 = cljs.core.not(inst_33063);
var state_33082__$1 = (function (){var statearr_33087 = state_33082;
(statearr_33087[(8)] = inst_33062__$1);

return statearr_33087;
})();
if(inst_33064){
var statearr_33088_34412 = state_33082__$1;
(statearr_33088_34412[(1)] = (5));

} else {
var statearr_33089_34413 = state_33082__$1;
(statearr_33089_34413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (6))){
var state_33082__$1 = state_33082;
var statearr_33091_34414 = state_33082__$1;
(statearr_33091_34414[(2)] = null);

(statearr_33091_34414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (3))){
var inst_33079 = (state_33082[(2)]);
var inst_33080 = cljs.core.async.close_BANG_(out);
var state_33082__$1 = (function (){var statearr_33096 = state_33082;
(statearr_33096[(9)] = inst_33079);

return statearr_33096;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33082__$1,inst_33080);
} else {
if((state_val_33083 === (2))){
var state_33082__$1 = state_33082;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33082__$1,(4),ch);
} else {
if((state_val_33083 === (11))){
var inst_33062 = (state_33082[(8)]);
var inst_33071 = (state_33082[(2)]);
var inst_33059 = inst_33062;
var state_33082__$1 = (function (){var statearr_33097 = state_33082;
(statearr_33097[(10)] = inst_33071);

(statearr_33097[(7)] = inst_33059);

return statearr_33097;
})();
var statearr_33098_34415 = state_33082__$1;
(statearr_33098_34415[(2)] = null);

(statearr_33098_34415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (9))){
var inst_33062 = (state_33082[(8)]);
var state_33082__$1 = state_33082;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33082__$1,(11),out,inst_33062);
} else {
if((state_val_33083 === (5))){
var inst_33059 = (state_33082[(7)]);
var inst_33062 = (state_33082[(8)]);
var inst_33066 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33062,inst_33059);
var state_33082__$1 = state_33082;
if(inst_33066){
var statearr_33100_34416 = state_33082__$1;
(statearr_33100_34416[(1)] = (8));

} else {
var statearr_33101_34417 = state_33082__$1;
(statearr_33101_34417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (10))){
var inst_33074 = (state_33082[(2)]);
var state_33082__$1 = state_33082;
var statearr_33103_34418 = state_33082__$1;
(statearr_33103_34418[(2)] = inst_33074);

(statearr_33103_34418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (8))){
var inst_33059 = (state_33082[(7)]);
var tmp33099 = inst_33059;
var inst_33059__$1 = tmp33099;
var state_33082__$1 = (function (){var statearr_33105 = state_33082;
(statearr_33105[(7)] = inst_33059__$1);

return statearr_33105;
})();
var statearr_33106_34419 = state_33082__$1;
(statearr_33106_34419[(2)] = null);

(statearr_33106_34419[(1)] = (2));


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
var cljs$core$async$state_machine__30764__auto__ = null;
var cljs$core$async$state_machine__30764__auto____0 = (function (){
var statearr_33107 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33107[(0)] = cljs$core$async$state_machine__30764__auto__);

(statearr_33107[(1)] = (1));

return statearr_33107;
});
var cljs$core$async$state_machine__30764__auto____1 = (function (state_33082){
while(true){
var ret_value__30765__auto__ = (function (){try{while(true){
var result__30766__auto__ = switch__30763__auto__(state_33082);
if(cljs.core.keyword_identical_QMARK_(result__30766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30766__auto__;
}
break;
}
}catch (e33108){var ex__30767__auto__ = e33108;
var statearr_33109_34420 = state_33082;
(statearr_33109_34420[(2)] = ex__30767__auto__);


if(cljs.core.seq((state_33082[(4)]))){
var statearr_33110_34421 = state_33082;
(statearr_33110_34421[(1)] = cljs.core.first((state_33082[(4)])));

} else {
throw ex__30767__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34425 = state_33082;
state_33082 = G__34425;
continue;
} else {
return ret_value__30765__auto__;
}
break;
}
});
cljs$core$async$state_machine__30764__auto__ = function(state_33082){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30764__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30764__auto____1.call(this,state_33082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30764__auto____0;
cljs$core$async$state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30764__auto____1;
return cljs$core$async$state_machine__30764__auto__;
})()
})();
var state__30954__auto__ = (function (){var statearr_33111 = f__30953__auto__();
(statearr_33111[(6)] = c__30952__auto___34384);

return statearr_33111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30954__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33113 = arguments.length;
switch (G__33113) {
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
var c__30952__auto___34427 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30953__auto__ = (function (){var switch__30763__auto__ = (function (state_33152){
var state_val_33153 = (state_33152[(1)]);
if((state_val_33153 === (7))){
var inst_33148 = (state_33152[(2)]);
var state_33152__$1 = state_33152;
var statearr_33154_34428 = state_33152__$1;
(statearr_33154_34428[(2)] = inst_33148);

(statearr_33154_34428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33153 === (1))){
var inst_33114 = (new Array(n));
var inst_33115 = inst_33114;
var inst_33116 = (0);
var state_33152__$1 = (function (){var statearr_33155 = state_33152;
(statearr_33155[(7)] = inst_33115);

(statearr_33155[(8)] = inst_33116);

return statearr_33155;
})();
var statearr_33156_34429 = state_33152__$1;
(statearr_33156_34429[(2)] = null);

(statearr_33156_34429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33153 === (4))){
var inst_33119 = (state_33152[(9)]);
var inst_33119__$1 = (state_33152[(2)]);
var inst_33120 = (inst_33119__$1 == null);
var inst_33121 = cljs.core.not(inst_33120);
var state_33152__$1 = (function (){var statearr_33157 = state_33152;
(statearr_33157[(9)] = inst_33119__$1);

return statearr_33157;
})();
if(inst_33121){
var statearr_33158_34430 = state_33152__$1;
(statearr_33158_34430[(1)] = (5));

} else {
var statearr_33159_34431 = state_33152__$1;
(statearr_33159_34431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33153 === (15))){
var inst_33142 = (state_33152[(2)]);
var state_33152__$1 = state_33152;
var statearr_33160_34432 = state_33152__$1;
(statearr_33160_34432[(2)] = inst_33142);

(statearr_33160_34432[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33153 === (13))){
var state_33152__$1 = state_33152;
var statearr_33161_34433 = state_33152__$1;
(statearr_33161_34433[(2)] = null);

(statearr_33161_34433[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33153 === (6))){
var inst_33116 = (state_33152[(8)]);
var inst_33137 = (inst_33116 > (0));
var state_33152__$1 = state_33152;
if(cljs.core.truth_(inst_33137)){
var statearr_33162_34434 = state_33152__$1;
(statearr_33162_34434[(1)] = (12));

} else {
var statearr_33163_34435 = state_33152__$1;
(statearr_33163_34435[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33153 === (3))){
var inst_33150 = (state_33152[(2)]);
var state_33152__$1 = state_33152;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33152__$1,inst_33150);
} else {
if((state_val_33153 === (12))){
var inst_33115 = (state_33152[(7)]);
var inst_33140 = cljs.core.vec(inst_33115);
var state_33152__$1 = state_33152;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33152__$1,(15),out,inst_33140);
} else {
if((state_val_33153 === (2))){
var state_33152__$1 = state_33152;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33152__$1,(4),ch);
} else {
if((state_val_33153 === (11))){
var inst_33131 = (state_33152[(2)]);
var inst_33132 = (new Array(n));
var inst_33115 = inst_33132;
var inst_33116 = (0);
var state_33152__$1 = (function (){var statearr_33171 = state_33152;
(statearr_33171[(7)] = inst_33115);

(statearr_33171[(10)] = inst_33131);

(statearr_33171[(8)] = inst_33116);

return statearr_33171;
})();
var statearr_33172_34444 = state_33152__$1;
(statearr_33172_34444[(2)] = null);

(statearr_33172_34444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33153 === (9))){
var inst_33115 = (state_33152[(7)]);
var inst_33129 = cljs.core.vec(inst_33115);
var state_33152__$1 = state_33152;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33152__$1,(11),out,inst_33129);
} else {
if((state_val_33153 === (5))){
var inst_33119 = (state_33152[(9)]);
var inst_33124 = (state_33152[(11)]);
var inst_33115 = (state_33152[(7)]);
var inst_33116 = (state_33152[(8)]);
var inst_33123 = (inst_33115[inst_33116] = inst_33119);
var inst_33124__$1 = (inst_33116 + (1));
var inst_33125 = (inst_33124__$1 < n);
var state_33152__$1 = (function (){var statearr_33174 = state_33152;
(statearr_33174[(11)] = inst_33124__$1);

(statearr_33174[(12)] = inst_33123);

return statearr_33174;
})();
if(cljs.core.truth_(inst_33125)){
var statearr_33175_34445 = state_33152__$1;
(statearr_33175_34445[(1)] = (8));

} else {
var statearr_33176_34446 = state_33152__$1;
(statearr_33176_34446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33153 === (14))){
var inst_33145 = (state_33152[(2)]);
var inst_33146 = cljs.core.async.close_BANG_(out);
var state_33152__$1 = (function (){var statearr_33178 = state_33152;
(statearr_33178[(13)] = inst_33145);

return statearr_33178;
})();
var statearr_33179_34447 = state_33152__$1;
(statearr_33179_34447[(2)] = inst_33146);

(statearr_33179_34447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33153 === (10))){
var inst_33135 = (state_33152[(2)]);
var state_33152__$1 = state_33152;
var statearr_33180_34448 = state_33152__$1;
(statearr_33180_34448[(2)] = inst_33135);

(statearr_33180_34448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33153 === (8))){
var inst_33124 = (state_33152[(11)]);
var inst_33115 = (state_33152[(7)]);
var tmp33177 = inst_33115;
var inst_33115__$1 = tmp33177;
var inst_33116 = inst_33124;
var state_33152__$1 = (function (){var statearr_33182 = state_33152;
(statearr_33182[(7)] = inst_33115__$1);

(statearr_33182[(8)] = inst_33116);

return statearr_33182;
})();
var statearr_33183_34449 = state_33152__$1;
(statearr_33183_34449[(2)] = null);

(statearr_33183_34449[(1)] = (2));


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
var cljs$core$async$state_machine__30764__auto__ = null;
var cljs$core$async$state_machine__30764__auto____0 = (function (){
var statearr_33190 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33190[(0)] = cljs$core$async$state_machine__30764__auto__);

(statearr_33190[(1)] = (1));

return statearr_33190;
});
var cljs$core$async$state_machine__30764__auto____1 = (function (state_33152){
while(true){
var ret_value__30765__auto__ = (function (){try{while(true){
var result__30766__auto__ = switch__30763__auto__(state_33152);
if(cljs.core.keyword_identical_QMARK_(result__30766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30766__auto__;
}
break;
}
}catch (e33194){var ex__30767__auto__ = e33194;
var statearr_33195_34450 = state_33152;
(statearr_33195_34450[(2)] = ex__30767__auto__);


if(cljs.core.seq((state_33152[(4)]))){
var statearr_33196_34451 = state_33152;
(statearr_33196_34451[(1)] = cljs.core.first((state_33152[(4)])));

} else {
throw ex__30767__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34452 = state_33152;
state_33152 = G__34452;
continue;
} else {
return ret_value__30765__auto__;
}
break;
}
});
cljs$core$async$state_machine__30764__auto__ = function(state_33152){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30764__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30764__auto____1.call(this,state_33152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30764__auto____0;
cljs$core$async$state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30764__auto____1;
return cljs$core$async$state_machine__30764__auto__;
})()
})();
var state__30954__auto__ = (function (){var statearr_33197 = f__30953__auto__();
(statearr_33197[(6)] = c__30952__auto___34427);

return statearr_33197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30954__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33201 = arguments.length;
switch (G__33201) {
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
var c__30952__auto___34517 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30953__auto__ = (function (){var switch__30763__auto__ = (function (state_33261){
var state_val_33262 = (state_33261[(1)]);
if((state_val_33262 === (7))){
var inst_33257 = (state_33261[(2)]);
var state_33261__$1 = state_33261;
var statearr_33263_34518 = state_33261__$1;
(statearr_33263_34518[(2)] = inst_33257);

(statearr_33263_34518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33262 === (1))){
var inst_33202 = [];
var inst_33203 = inst_33202;
var inst_33204 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33261__$1 = (function (){var statearr_33264 = state_33261;
(statearr_33264[(7)] = inst_33203);

(statearr_33264[(8)] = inst_33204);

return statearr_33264;
})();
var statearr_33265_34519 = state_33261__$1;
(statearr_33265_34519[(2)] = null);

(statearr_33265_34519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33262 === (4))){
var inst_33207 = (state_33261[(9)]);
var inst_33207__$1 = (state_33261[(2)]);
var inst_33208 = (inst_33207__$1 == null);
var inst_33209 = cljs.core.not(inst_33208);
var state_33261__$1 = (function (){var statearr_33266 = state_33261;
(statearr_33266[(9)] = inst_33207__$1);

return statearr_33266;
})();
if(inst_33209){
var statearr_33267_34520 = state_33261__$1;
(statearr_33267_34520[(1)] = (5));

} else {
var statearr_33268_34521 = state_33261__$1;
(statearr_33268_34521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33262 === (15))){
var inst_33251 = (state_33261[(2)]);
var state_33261__$1 = state_33261;
var statearr_33269_34522 = state_33261__$1;
(statearr_33269_34522[(2)] = inst_33251);

(statearr_33269_34522[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33262 === (13))){
var state_33261__$1 = state_33261;
var statearr_33270_34524 = state_33261__$1;
(statearr_33270_34524[(2)] = null);

(statearr_33270_34524[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33262 === (6))){
var inst_33203 = (state_33261[(7)]);
var inst_33246 = inst_33203.length;
var inst_33247 = (inst_33246 > (0));
var state_33261__$1 = state_33261;
if(cljs.core.truth_(inst_33247)){
var statearr_33274_34525 = state_33261__$1;
(statearr_33274_34525[(1)] = (12));

} else {
var statearr_33275_34526 = state_33261__$1;
(statearr_33275_34526[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33262 === (3))){
var inst_33259 = (state_33261[(2)]);
var state_33261__$1 = state_33261;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33261__$1,inst_33259);
} else {
if((state_val_33262 === (12))){
var inst_33203 = (state_33261[(7)]);
var inst_33249 = cljs.core.vec(inst_33203);
var state_33261__$1 = state_33261;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33261__$1,(15),out,inst_33249);
} else {
if((state_val_33262 === (2))){
var state_33261__$1 = state_33261;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33261__$1,(4),ch);
} else {
if((state_val_33262 === (11))){
var inst_33211 = (state_33261[(10)]);
var inst_33207 = (state_33261[(9)]);
var inst_33239 = (state_33261[(2)]);
var inst_33240 = [];
var inst_33241 = inst_33240.push(inst_33207);
var inst_33203 = inst_33240;
var inst_33204 = inst_33211;
var state_33261__$1 = (function (){var statearr_33279 = state_33261;
(statearr_33279[(7)] = inst_33203);

(statearr_33279[(11)] = inst_33239);

(statearr_33279[(8)] = inst_33204);

(statearr_33279[(12)] = inst_33241);

return statearr_33279;
})();
var statearr_33280_34588 = state_33261__$1;
(statearr_33280_34588[(2)] = null);

(statearr_33280_34588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33262 === (9))){
var inst_33203 = (state_33261[(7)]);
var inst_33237 = cljs.core.vec(inst_33203);
var state_33261__$1 = state_33261;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33261__$1,(11),out,inst_33237);
} else {
if((state_val_33262 === (5))){
var inst_33211 = (state_33261[(10)]);
var inst_33204 = (state_33261[(8)]);
var inst_33207 = (state_33261[(9)]);
var inst_33211__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33207) : f.call(null,inst_33207));
var inst_33230 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33211__$1,inst_33204);
var inst_33231 = cljs.core.keyword_identical_QMARK_(inst_33204,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33232 = ((inst_33230) || (inst_33231));
var state_33261__$1 = (function (){var statearr_33281 = state_33261;
(statearr_33281[(10)] = inst_33211__$1);

return statearr_33281;
})();
if(cljs.core.truth_(inst_33232)){
var statearr_33282_34589 = state_33261__$1;
(statearr_33282_34589[(1)] = (8));

} else {
var statearr_33283_34590 = state_33261__$1;
(statearr_33283_34590[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33262 === (14))){
var inst_33254 = (state_33261[(2)]);
var inst_33255 = cljs.core.async.close_BANG_(out);
var state_33261__$1 = (function (){var statearr_33286 = state_33261;
(statearr_33286[(13)] = inst_33254);

return statearr_33286;
})();
var statearr_33287_34591 = state_33261__$1;
(statearr_33287_34591[(2)] = inst_33255);

(statearr_33287_34591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33262 === (10))){
var inst_33244 = (state_33261[(2)]);
var state_33261__$1 = state_33261;
var statearr_33289_34592 = state_33261__$1;
(statearr_33289_34592[(2)] = inst_33244);

(statearr_33289_34592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33262 === (8))){
var inst_33211 = (state_33261[(10)]);
var inst_33203 = (state_33261[(7)]);
var inst_33207 = (state_33261[(9)]);
var inst_33234 = inst_33203.push(inst_33207);
var tmp33285 = inst_33203;
var inst_33203__$1 = tmp33285;
var inst_33204 = inst_33211;
var state_33261__$1 = (function (){var statearr_33290 = state_33261;
(statearr_33290[(7)] = inst_33203__$1);

(statearr_33290[(8)] = inst_33204);

(statearr_33290[(14)] = inst_33234);

return statearr_33290;
})();
var statearr_33291_34594 = state_33261__$1;
(statearr_33291_34594[(2)] = null);

(statearr_33291_34594[(1)] = (2));


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
var cljs$core$async$state_machine__30764__auto__ = null;
var cljs$core$async$state_machine__30764__auto____0 = (function (){
var statearr_33292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33292[(0)] = cljs$core$async$state_machine__30764__auto__);

(statearr_33292[(1)] = (1));

return statearr_33292;
});
var cljs$core$async$state_machine__30764__auto____1 = (function (state_33261){
while(true){
var ret_value__30765__auto__ = (function (){try{while(true){
var result__30766__auto__ = switch__30763__auto__(state_33261);
if(cljs.core.keyword_identical_QMARK_(result__30766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30766__auto__;
}
break;
}
}catch (e33293){var ex__30767__auto__ = e33293;
var statearr_33294_34595 = state_33261;
(statearr_33294_34595[(2)] = ex__30767__auto__);


if(cljs.core.seq((state_33261[(4)]))){
var statearr_33296_34596 = state_33261;
(statearr_33296_34596[(1)] = cljs.core.first((state_33261[(4)])));

} else {
throw ex__30767__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34598 = state_33261;
state_33261 = G__34598;
continue;
} else {
return ret_value__30765__auto__;
}
break;
}
});
cljs$core$async$state_machine__30764__auto__ = function(state_33261){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30764__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30764__auto____1.call(this,state_33261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30764__auto____0;
cljs$core$async$state_machine__30764__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30764__auto____1;
return cljs$core$async$state_machine__30764__auto__;
})()
})();
var state__30954__auto__ = (function (){var statearr_33297 = f__30953__auto__();
(statearr_33297[(6)] = c__30952__auto___34517);

return statearr_33297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30954__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
