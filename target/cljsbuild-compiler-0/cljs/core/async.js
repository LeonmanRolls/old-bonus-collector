// Compiled by ClojureScript 0.0-2069
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t20356 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20356 = (function (f,fn_handler,meta20357){
this.f = f;
this.fn_handler = fn_handler;
this.meta20357 = meta20357;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20356.cljs$lang$type = true;
cljs.core.async.t20356.cljs$lang$ctorStr = "cljs.core.async/t20356";
cljs.core.async.t20356.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"cljs.core.async/t20356");
});
cljs.core.async.t20356.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20356.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t20356.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t20356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20358){var self__ = this;
var _20358__$1 = this;return self__.meta20357;
});
cljs.core.async.t20356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20358,meta20357__$1){var self__ = this;
var _20358__$1 = this;return (new cljs.core.async.t20356(self__.f,self__.fn_handler,meta20357__$1));
});
cljs.core.async.__GT_t20356 = (function __GT_t20356(f__$1,fn_handler__$1,meta20357){return (new cljs.core.async.t20356(f__$1,fn_handler__$1,meta20357));
});
}
return (new cljs.core.async.t20356(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__20360 = buff;if(G__20360)
{var bit__3906__auto__ = null;if(cljs.core.truth_((function (){var or__3285__auto__ = bit__3906__auto__;if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return G__20360.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__20360.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__20360);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__20360);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(ret))
{var val_20361 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20361) : fn1.call(null,val_20361));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20361) : fn1.call(null,val_20361));
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4090__auto__))
{var ret = temp__4090__auto__;return cljs.core.deref(ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(temp__4090__auto__))
{var retb = temp__4090__auto__;var ret = cljs.core.deref(retb);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4103__auto___20362 = n;var x_20363 = 0;while(true){
if((x_20363 < n__4103__auto___20362))
{(a[x_20363] = 0);
{
var G__20364 = (x_20363 + 1);
x_20363 = G__20364;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n))
{return a;
} else
{var j = cljs.core.rand_int(i);(a[i] = (a[j]));
(a[j] = i);
{
var G__20365 = (i + 1);
i = G__20365;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t20369 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20369 = (function (flag,alt_flag,meta20370){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta20370 = meta20370;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20369.cljs$lang$type = true;
cljs.core.async.t20369.cljs$lang$ctorStr = "cljs.core.async/t20369";
cljs.core.async.t20369.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"cljs.core.async/t20369");
});
cljs.core.async.t20369.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20369.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t20369.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t20369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20371){var self__ = this;
var _20371__$1 = this;return self__.meta20370;
});
cljs.core.async.t20369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20371,meta20370__$1){var self__ = this;
var _20371__$1 = this;return (new cljs.core.async.t20369(self__.flag,self__.alt_flag,meta20370__$1));
});
cljs.core.async.__GT_t20369 = (function __GT_t20369(flag__$1,alt_flag__$1,meta20370){return (new cljs.core.async.t20369(flag__$1,alt_flag__$1,meta20370));
});
}
return (new cljs.core.async.t20369(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t20375 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20375 = (function (cb,flag,alt_handler,meta20376){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta20376 = meta20376;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20375.cljs$lang$type = true;
cljs.core.async.t20375.cljs$lang$ctorStr = "cljs.core.async/t20375";
cljs.core.async.t20375.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"cljs.core.async/t20375");
});
cljs.core.async.t20375.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20375.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t20375.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t20375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20377){var self__ = this;
var _20377__$1 = this;return self__.meta20376;
});
cljs.core.async.t20375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20377,meta20376__$1){var self__ = this;
var _20377__$1 = this;return (new cljs.core.async.t20375(self__.cb,self__.flag,self__.alt_handler,meta20376__$1));
});
cljs.core.async.__GT_t20375 = (function __GT_t20375(cb__$1,flag__$1,alt_handler__$1,meta20376){return (new cljs.core.async.t20375(cb__$1,flag__$1,alt_handler__$1,meta20376));
});
}
return (new cljs.core.async.t20375(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20378_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20378_SHARP_,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20378_SHARP_,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20379_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20379_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20379_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3285__auto__ = wport;if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__20380 = (i + 1);
i = G__20380;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3285__auto__ = ret;if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7))
{var temp__4092__auto__ = (function (){var and__3273__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3273__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3273__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$7], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__20381){var map__20383 = p__20381;var map__20383__$1 = ((cljs.core.seq_QMARK_(map__20383))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20383):map__20383);var opts = map__20383__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__20381 = null;if (arguments.length > 1) {
  p__20381 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__20381);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__20384){
var ports = cljs.core.first(arglist__20384);
var p__20381 = cljs.core.rest(arglist__20384);
return alts_BANG___delegate(ports,p__20381);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t20392 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20392 = (function (ch,f,map_LT_,meta20393){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20393 = meta20393;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20392.cljs$lang$type = true;
cljs.core.async.t20392.cljs$lang$ctorStr = "cljs.core.async/t20392";
cljs.core.async.t20392.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"cljs.core.async/t20392");
});
cljs.core.async.t20392.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20392.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});
cljs.core.async.t20392.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20392.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t20395 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20395 = (function (fn1,_,meta20393,ch,f,map_LT_,meta20396){
this.fn1 = fn1;
this._ = _;
this.meta20393 = meta20393;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20396 = meta20396;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20395.cljs$lang$type = true;
cljs.core.async.t20395.cljs$lang$ctorStr = "cljs.core.async/t20395";
cljs.core.async.t20395.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"cljs.core.async/t20395");
});
cljs.core.async.t20395.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20395.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t20395.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t20395.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__20385_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__20385_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__20385_SHARP_) : self__.f.call(null,p1__20385_SHARP_)))) : f1.call(null,(((p1__20385_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__20385_SHARP_) : self__.f.call(null,p1__20385_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t20395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20397){var self__ = this;
var _20397__$1 = this;return self__.meta20396;
});
cljs.core.async.t20395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20397,meta20396__$1){var self__ = this;
var _20397__$1 = this;return (new cljs.core.async.t20395(self__.fn1,self__._,self__.meta20393,self__.ch,self__.f,self__.map_LT_,meta20396__$1));
});
cljs.core.async.__GT_t20395 = (function __GT_t20395(fn1__$1,___$2,meta20393__$1,ch__$2,f__$2,map_LT___$2,meta20396){return (new cljs.core.async.t20395(fn1__$1,___$2,meta20393__$1,ch__$2,f__$2,map_LT___$2,meta20396));
});
}
return (new cljs.core.async.t20395(fn1,___$1,self__.meta20393,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3273__auto__ = ret;if(cljs.core.truth_(and__3273__auto__))
{return !((cljs.core.deref(ret) == null));
} else
{return and__3273__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ret)) : self__.f.call(null,cljs.core.deref(ret))));
} else
{return ret;
}
});
cljs.core.async.t20392.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20392.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t20392.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t20392.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20394){var self__ = this;
var _20394__$1 = this;return self__.meta20393;
});
cljs.core.async.t20392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20394,meta20393__$1){var self__ = this;
var _20394__$1 = this;return (new cljs.core.async.t20392(self__.ch,self__.f,self__.map_LT_,meta20393__$1));
});
cljs.core.async.__GT_t20392 = (function __GT_t20392(ch__$1,f__$1,map_LT___$1,meta20393){return (new cljs.core.async.t20392(ch__$1,f__$1,map_LT___$1,meta20393));
});
}
return (new cljs.core.async.t20392(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t20401 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20401 = (function (ch,f,map_GT_,meta20402){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta20402 = meta20402;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20401.cljs$lang$type = true;
cljs.core.async.t20401.cljs$lang$ctorStr = "cljs.core.async/t20401";
cljs.core.async.t20401.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"cljs.core.async/t20401");
});
cljs.core.async.t20401.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20401.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});
cljs.core.async.t20401.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20401.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t20401.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20401.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t20401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20403){var self__ = this;
var _20403__$1 = this;return self__.meta20402;
});
cljs.core.async.t20401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20403,meta20402__$1){var self__ = this;
var _20403__$1 = this;return (new cljs.core.async.t20401(self__.ch,self__.f,self__.map_GT_,meta20402__$1));
});
cljs.core.async.__GT_t20401 = (function __GT_t20401(ch__$1,f__$1,map_GT___$1,meta20402){return (new cljs.core.async.t20401(ch__$1,f__$1,map_GT___$1,meta20402));
});
}
return (new cljs.core.async.t20401(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t20407 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20407 = (function (ch,p,filter_GT_,meta20408){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta20408 = meta20408;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20407.cljs$lang$type = true;
cljs.core.async.t20407.cljs$lang$ctorStr = "cljs.core.async/t20407";
cljs.core.async.t20407.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"cljs.core.async/t20407");
});
cljs.core.async.t20407.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t20407.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});
cljs.core.async.t20407.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t20407.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t20407.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t20407.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t20407.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t20407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20409){var self__ = this;
var _20409__$1 = this;return self__.meta20408;
});
cljs.core.async.t20407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20409,meta20408__$1){var self__ = this;
var _20409__$1 = this;return (new cljs.core.async.t20407(self__.ch,self__.p,self__.filter_GT_,meta20408__$1));
});
cljs.core.async.__GT_t20407 = (function __GT_t20407(ch__$1,p__$1,filter_GT___$1,meta20408){return (new cljs.core.async.t20407(ch__$1,p__$1,filter_GT___$1,meta20408));
});
}
return (new cljs.core.async.t20407(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6793__auto___20492 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_20471){var state_val_20472 = (state_20471[1]);if((state_val_20472 === 1))
{var state_20471__$1 = state_20471;var statearr_20473_20493 = state_20471__$1;(statearr_20473_20493[2] = null);
(statearr_20473_20493[1] = 2);
return cljs.core.constant$keyword$51;
} else
{if((state_val_20472 === 2))
{var state_20471__$1 = state_20471;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20471__$1,4,ch);
} else
{if((state_val_20472 === 3))
{var inst_20469 = (state_20471[2]);var state_20471__$1 = state_20471;return cljs.core.async.impl.ioc_helpers.return_chan(state_20471__$1,inst_20469);
} else
{if((state_val_20472 === 4))
{var inst_20453 = (state_20471[7]);var inst_20453__$1 = (state_20471[2]);var inst_20454 = (inst_20453__$1 == null);var state_20471__$1 = (function (){var statearr_20474 = state_20471;(statearr_20474[7] = inst_20453__$1);
return statearr_20474;
})();if(cljs.core.truth_(inst_20454))
{var statearr_20475_20494 = state_20471__$1;(statearr_20475_20494[1] = 5);
} else
{var statearr_20476_20495 = state_20471__$1;(statearr_20476_20495[1] = 6);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_20472 === 5))
{var inst_20456 = cljs.core.async.close_BANG_(out);var state_20471__$1 = state_20471;var statearr_20477_20496 = state_20471__$1;(statearr_20477_20496[2] = inst_20456);
(statearr_20477_20496[1] = 7);
return cljs.core.constant$keyword$51;
} else
{if((state_val_20472 === 6))
{var inst_20453 = (state_20471[7]);var inst_20458 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_20453) : p.call(null,inst_20453));var state_20471__$1 = state_20471;if(cljs.core.truth_(inst_20458))
{var statearr_20478_20497 = state_20471__$1;(statearr_20478_20497[1] = 8);
} else
{var statearr_20479_20498 = state_20471__$1;(statearr_20479_20498[1] = 9);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_20472 === 7))
{var inst_20467 = (state_20471[2]);var state_20471__$1 = state_20471;var statearr_20480_20499 = state_20471__$1;(statearr_20480_20499[2] = inst_20467);
(statearr_20480_20499[1] = 3);
return cljs.core.constant$keyword$51;
} else
{if((state_val_20472 === 8))
{var inst_20453 = (state_20471[7]);var state_20471__$1 = state_20471;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20471__$1,11,out,inst_20453);
} else
{if((state_val_20472 === 9))
{var state_20471__$1 = state_20471;var statearr_20481_20500 = state_20471__$1;(statearr_20481_20500[2] = null);
(statearr_20481_20500[1] = 10);
return cljs.core.constant$keyword$51;
} else
{if((state_val_20472 === 10))
{var inst_20464 = (state_20471[2]);var state_20471__$1 = (function (){var statearr_20482 = state_20471;(statearr_20482[8] = inst_20464);
return statearr_20482;
})();var statearr_20483_20501 = state_20471__$1;(statearr_20483_20501[2] = null);
(statearr_20483_20501[1] = 2);
return cljs.core.constant$keyword$51;
} else
{if((state_val_20472 === 11))
{var inst_20461 = (state_20471[2]);var state_20471__$1 = state_20471;var statearr_20484_20502 = state_20471__$1;(statearr_20484_20502[2] = inst_20461);
(statearr_20484_20502[1] = 10);
return cljs.core.constant$keyword$51;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_20488 = (new Array(9));(statearr_20488[0] = state_machine__6724__auto__);
(statearr_20488[1] = 1);
return statearr_20488;
});
var state_machine__6724__auto____1 = (function (state_20471){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_20471);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$51))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e20489){if((e20489 instanceof Object))
{var ex__6727__auto__ = e20489;var statearr_20490_20503 = state_20471;(statearr_20490_20503[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20471);
return cljs.core.constant$keyword$51;
} else
{if(cljs.core.constant$keyword$6)
{throw e20489;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$51))
{{
var G__20504 = state_20471;
state_20471 = G__20504;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_20471){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_20471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_20491 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_20491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto___20492);
return statearr_20491;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6793__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_20670){var state_val_20671 = (state_20670[1]);if((state_val_20671 === 1))
{var state_20670__$1 = state_20670;var statearr_20672_20713 = state_20670__$1;(statearr_20672_20713[2] = null);
(statearr_20672_20713[1] = 2);
return cljs.core.constant$keyword$51;
} else
{if((state_val_20671 === 2))
{var state_20670__$1 = state_20670;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20670__$1,4,in$);
} else
{if((state_val_20671 === 3))
{var inst_20668 = (state_20670[2]);var state_20670__$1 = state_20670;return cljs.core.async.impl.ioc_helpers.return_chan(state_20670__$1,inst_20668);
} else
{if((state_val_20671 === 4))
{var inst_20611 = (state_20670[7]);var inst_20611__$1 = (state_20670[2]);var inst_20612 = (inst_20611__$1 == null);var state_20670__$1 = (function (){var statearr_20673 = state_20670;(statearr_20673[7] = inst_20611__$1);
return statearr_20673;
})();if(cljs.core.truth_(inst_20612))
{var statearr_20674_20714 = state_20670__$1;(statearr_20674_20714[1] = 5);
} else
{var statearr_20675_20715 = state_20670__$1;(statearr_20675_20715[1] = 6);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_20671 === 5))
{var inst_20614 = cljs.core.async.close_BANG_(out);var state_20670__$1 = state_20670;var statearr_20676_20716 = state_20670__$1;(statearr_20676_20716[2] = inst_20614);
(statearr_20676_20716[1] = 7);
return cljs.core.constant$keyword$51;
} else
{if((state_val_20671 === 6))
{var inst_20611 = (state_20670[7]);var inst_20620 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20611) : f.call(null,inst_20611));var inst_20621 = cljs.core.seq(inst_20620);var inst_20622 = inst_20621;var inst_20623 = null;var inst_20624 = 0;var inst_20625 = 0;var state_20670__$1 = (function (){var statearr_20677 = state_20670;(statearr_20677[8] = inst_20624);
(statearr_20677[9] = inst_20623);
(statearr_20677[10] = inst_20625);
(statearr_20677[11] = inst_20622);
return statearr_20677;
})();var statearr_20678_20717 = state_20670__$1;(statearr_20678_20717[2] = null);
(statearr_20678_20717[1] = 8);
return cljs.core.constant$keyword$51;
} else
{if((state_val_20671 === 7))
{var inst_20666 = (state_20670[2]);var state_20670__$1 = state_20670;var statearr_20679_20718 = state_20670__$1;(statearr_20679_20718[2] = inst_20666);
(statearr_20679_20718[1] = 3);
return cljs.core.constant$keyword$51;
} else
{if((state_val_20671 === 8))
{var inst_20624 = (state_20670[8]);var inst_20625 = (state_20670[10]);var inst_20627 = (inst_20625 < inst_20624);var inst_20628 = inst_20627;var state_20670__$1 = state_20670;if(cljs.core.truth_(inst_20628))
{var statearr_20680_20719 = state_20670__$1;(statearr_20680_20719[1] = 10);
} else
{var statearr_20681_20720 = state_20670__$1;(statearr_20681_20720[1] = 11);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_20671 === 9))
{var inst_20658 = (state_20670[2]);var inst_20659 = cljs.core.async.impl.protocols.closed_QMARK_(out);var state_20670__$1 = (function (){var statearr_20682 = state_20670;(statearr_20682[12] = inst_20658);
return statearr_20682;
})();if(cljs.core.truth_(inst_20659))
{var statearr_20683_20721 = state_20670__$1;(statearr_20683_20721[1] = 21);
} else
{var statearr_20684_20722 = state_20670__$1;(statearr_20684_20722[1] = 22);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_20671 === 10))
{var inst_20623 = (state_20670[9]);var inst_20625 = (state_20670[10]);var inst_20630 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_20623,inst_20625);var state_20670__$1 = state_20670;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20670__$1,13,out,inst_20630);
} else
{if((state_val_20671 === 11))
{var inst_20636 = (state_20670[13]);var inst_20622 = (state_20670[11]);var inst_20636__$1 = cljs.core.seq(inst_20622);var state_20670__$1 = (function (){var statearr_20688 = state_20670;(statearr_20688[13] = inst_20636__$1);
return statearr_20688;
})();if(inst_20636__$1)
{var statearr_20689_20723 = state_20670__$1;(statearr_20689_20723[1] = 14);
} else
{var statearr_20690_20724 = state_20670__$1;(statearr_20690_20724[1] = 15);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_20671 === 12))
{var inst_20656 = (state_20670[2]);var state_20670__$1 = state_20670;var statearr_20691_20725 = state_20670__$1;(statearr_20691_20725[2] = inst_20656);
(statearr_20691_20725[1] = 9);
return cljs.core.constant$keyword$51;
} else
{if((state_val_20671 === 13))
{var inst_20624 = (state_20670[8]);var inst_20623 = (state_20670[9]);var inst_20625 = (state_20670[10]);var inst_20622 = (state_20670[11]);var inst_20632 = (state_20670[2]);var inst_20633 = (inst_20625 + 1);var tmp20685 = inst_20624;var tmp20686 = inst_20623;var tmp20687 = inst_20622;var inst_20622__$1 = tmp20687;var inst_20623__$1 = tmp20686;var inst_20624__$1 = tmp20685;var inst_20625__$1 = inst_20633;var state_20670__$1 = (function (){var statearr_20692 = state_20670;(statearr_20692[8] = inst_20624__$1);
(statearr_20692[9] = inst_20623__$1);
(statearr_20692[10] = inst_20625__$1);
(statearr_20692[14] = inst_20632);
(statearr_20692[11] = inst_20622__$1);
return statearr_20692;
})();var statearr_20693_20726 = state_20670__$1;(statearr_20693_20726[2] = null);
(statearr_20693_20726[1] = 8);
return cljs.core.constant$keyword$51;
} else
{if((state_val_20671 === 14))
{var inst_20636 = (state_20670[13]);var inst_20638 = cljs.core.chunked_seq_QMARK_(inst_20636);var state_20670__$1 = state_20670;if(inst_20638)
{var statearr_20694_20727 = state_20670__$1;(statearr_20694_20727[1] = 17);
} else
{var statearr_20695_20728 = state_20670__$1;(statearr_20695_20728[1] = 18);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_20671 === 15))
{var state_20670__$1 = state_20670;var statearr_20696_20729 = state_20670__$1;(statearr_20696_20729[2] = null);
(statearr_20696_20729[1] = 16);
return cljs.core.constant$keyword$51;
} else
{if((state_val_20671 === 16))
{var inst_20654 = (state_20670[2]);var state_20670__$1 = state_20670;var statearr_20697_20730 = state_20670__$1;(statearr_20697_20730[2] = inst_20654);
(statearr_20697_20730[1] = 12);
return cljs.core.constant$keyword$51;
} else
{if((state_val_20671 === 17))
{var inst_20636 = (state_20670[13]);var inst_20640 = cljs.core.chunk_first(inst_20636);var inst_20641 = cljs.core.chunk_rest(inst_20636);var inst_20642 = cljs.core.count(inst_20640);var inst_20622 = inst_20641;var inst_20623 = inst_20640;var inst_20624 = inst_20642;var inst_20625 = 0;var state_20670__$1 = (function (){var statearr_20698 = state_20670;(statearr_20698[8] = inst_20624);
(statearr_20698[9] = inst_20623);
(statearr_20698[10] = inst_20625);
(statearr_20698[11] = inst_20622);
return statearr_20698;
})();var statearr_20699_20731 = state_20670__$1;(statearr_20699_20731[2] = null);
(statearr_20699_20731[1] = 8);
return cljs.core.constant$keyword$51;
} else
{if((state_val_20671 === 18))
{var inst_20636 = (state_20670[13]);var inst_20645 = cljs.core.first(inst_20636);var state_20670__$1 = state_20670;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20670__$1,20,out,inst_20645);
} else
{if((state_val_20671 === 19))
{var inst_20651 = (state_20670[2]);var state_20670__$1 = state_20670;var statearr_20700_20732 = state_20670__$1;(statearr_20700_20732[2] = inst_20651);
(statearr_20700_20732[1] = 16);
return cljs.core.constant$keyword$51;
} else
{if((state_val_20671 === 20))
{var inst_20636 = (state_20670[13]);var inst_20647 = (state_20670[2]);var inst_20648 = cljs.core.next(inst_20636);var inst_20622 = inst_20648;var inst_20623 = null;var inst_20624 = 0;var inst_20625 = 0;var state_20670__$1 = (function (){var statearr_20701 = state_20670;(statearr_20701[8] = inst_20624);
(statearr_20701[9] = inst_20623);
(statearr_20701[10] = inst_20625);
(statearr_20701[11] = inst_20622);
(statearr_20701[15] = inst_20647);
return statearr_20701;
})();var statearr_20702_20733 = state_20670__$1;(statearr_20702_20733[2] = null);
(statearr_20702_20733[1] = 8);
return cljs.core.constant$keyword$51;
} else
{if((state_val_20671 === 21))
{var state_20670__$1 = state_20670;var statearr_20703_20734 = state_20670__$1;(statearr_20703_20734[2] = null);
(statearr_20703_20734[1] = 23);
return cljs.core.constant$keyword$51;
} else
{if((state_val_20671 === 22))
{var state_20670__$1 = state_20670;var statearr_20704_20735 = state_20670__$1;(statearr_20704_20735[2] = null);
(statearr_20704_20735[1] = 2);
return cljs.core.constant$keyword$51;
} else
{if((state_val_20671 === 23))
{var inst_20664 = (state_20670[2]);var state_20670__$1 = state_20670;var statearr_20705_20736 = state_20670__$1;(statearr_20705_20736[2] = inst_20664);
(statearr_20705_20736[1] = 7);
return cljs.core.constant$keyword$51;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_20709 = (new Array(16));(statearr_20709[0] = state_machine__6724__auto__);
(statearr_20709[1] = 1);
return statearr_20709;
});
var state_machine__6724__auto____1 = (function (state_20670){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_20670);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$51))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e20710){if((e20710 instanceof Object))
{var ex__6727__auto__ = e20710;var statearr_20711_20737 = state_20670;(statearr_20711_20737[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20670);
return cljs.core.constant$keyword$51;
} else
{if(cljs.core.constant$keyword$6)
{throw e20710;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$51))
{{
var G__20738 = state_20670;
state_20670 = G__20738;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_20670){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_20670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_20712 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_20712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto__);
return statearr_20712;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return c__6793__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6793__auto___20833 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_20809){var state_val_20810 = (state_20809[1]);if((state_val_20810 === 1))
{var state_20809__$1 = state_20809;var statearr_20811_20834 = state_20809__$1;(statearr_20811_20834[2] = null);
(statearr_20811_20834[1] = 2);
return cljs.core.constant$keyword$51;
} else
{if((state_val_20810 === 2))
{var state_20809__$1 = state_20809;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20809__$1,4,from);
} else
{if((state_val_20810 === 3))
{var inst_20807 = (state_20809[2]);var state_20809__$1 = state_20809;return cljs.core.async.impl.ioc_helpers.return_chan(state_20809__$1,inst_20807);
} else
{if((state_val_20810 === 4))
{var inst_20788 = (state_20809[7]);var inst_20788__$1 = (state_20809[2]);var inst_20789 = (inst_20788__$1 == null);var state_20809__$1 = (function (){var statearr_20812 = state_20809;(statearr_20812[7] = inst_20788__$1);
return statearr_20812;
})();if(cljs.core.truth_(inst_20789))
{var statearr_20813_20835 = state_20809__$1;(statearr_20813_20835[1] = 5);
} else
{var statearr_20814_20836 = state_20809__$1;(statearr_20814_20836[1] = 6);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_20810 === 5))
{var state_20809__$1 = state_20809;if(cljs.core.truth_(close_QMARK_))
{var statearr_20815_20837 = state_20809__$1;(statearr_20815_20837[1] = 8);
} else
{var statearr_20816_20838 = state_20809__$1;(statearr_20816_20838[1] = 9);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_20810 === 6))
{var inst_20788 = (state_20809[7]);var state_20809__$1 = state_20809;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20809__$1,11,to,inst_20788);
} else
{if((state_val_20810 === 7))
{var inst_20805 = (state_20809[2]);var state_20809__$1 = state_20809;var statearr_20817_20839 = state_20809__$1;(statearr_20817_20839[2] = inst_20805);
(statearr_20817_20839[1] = 3);
return cljs.core.constant$keyword$51;
} else
{if((state_val_20810 === 8))
{var inst_20792 = cljs.core.async.close_BANG_(to);var state_20809__$1 = state_20809;var statearr_20818_20840 = state_20809__$1;(statearr_20818_20840[2] = inst_20792);
(statearr_20818_20840[1] = 10);
return cljs.core.constant$keyword$51;
} else
{if((state_val_20810 === 9))
{var state_20809__$1 = state_20809;var statearr_20819_20841 = state_20809__$1;(statearr_20819_20841[2] = null);
(statearr_20819_20841[1] = 10);
return cljs.core.constant$keyword$51;
} else
{if((state_val_20810 === 10))
{var inst_20795 = (state_20809[2]);var state_20809__$1 = state_20809;var statearr_20820_20842 = state_20809__$1;(statearr_20820_20842[2] = inst_20795);
(statearr_20820_20842[1] = 7);
return cljs.core.constant$keyword$51;
} else
{if((state_val_20810 === 11))
{var inst_20798 = (state_20809[2]);var state_20809__$1 = state_20809;if(cljs.core.truth_(inst_20798))
{var statearr_20821_20843 = state_20809__$1;(statearr_20821_20843[1] = 12);
} else
{var statearr_20822_20844 = state_20809__$1;(statearr_20822_20844[1] = 13);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_20810 === 12))
{var state_20809__$1 = state_20809;var statearr_20823_20845 = state_20809__$1;(statearr_20823_20845[2] = null);
(statearr_20823_20845[1] = 2);
return cljs.core.constant$keyword$51;
} else
{if((state_val_20810 === 13))
{var state_20809__$1 = state_20809;var statearr_20824_20846 = state_20809__$1;(statearr_20824_20846[2] = null);
(statearr_20824_20846[1] = 14);
return cljs.core.constant$keyword$51;
} else
{if((state_val_20810 === 14))
{var inst_20803 = (state_20809[2]);var state_20809__$1 = state_20809;var statearr_20825_20847 = state_20809__$1;(statearr_20825_20847[2] = inst_20803);
(statearr_20825_20847[1] = 7);
return cljs.core.constant$keyword$51;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_20829 = (new Array(8));(statearr_20829[0] = state_machine__6724__auto__);
(statearr_20829[1] = 1);
return statearr_20829;
});
var state_machine__6724__auto____1 = (function (state_20809){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_20809);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$51))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e20830){if((e20830 instanceof Object))
{var ex__6727__auto__ = e20830;var statearr_20831_20848 = state_20809;(statearr_20831_20848[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20809);
return cljs.core.constant$keyword$51;
} else
{if(cljs.core.constant$keyword$6)
{throw e20830;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$51))
{{
var G__20849 = state_20809;
state_20809 = G__20849;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_20809){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_20809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_20832 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_20832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto___20833);
return statearr_20832;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__6793__auto___20950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_20925){var state_val_20926 = (state_20925[1]);if((state_val_20926 === 1))
{var state_20925__$1 = state_20925;var statearr_20927_20951 = state_20925__$1;(statearr_20927_20951[2] = null);
(statearr_20927_20951[1] = 2);
return cljs.core.constant$keyword$51;
} else
{if((state_val_20926 === 2))
{var state_20925__$1 = state_20925;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20925__$1,4,ch);
} else
{if((state_val_20926 === 3))
{var inst_20923 = (state_20925[2]);var state_20925__$1 = state_20925;return cljs.core.async.impl.ioc_helpers.return_chan(state_20925__$1,inst_20923);
} else
{if((state_val_20926 === 4))
{var inst_20902 = (state_20925[7]);var inst_20902__$1 = (state_20925[2]);var inst_20903 = (inst_20902__$1 == null);var state_20925__$1 = (function (){var statearr_20928 = state_20925;(statearr_20928[7] = inst_20902__$1);
return statearr_20928;
})();if(cljs.core.truth_(inst_20903))
{var statearr_20929_20952 = state_20925__$1;(statearr_20929_20952[1] = 5);
} else
{var statearr_20930_20953 = state_20925__$1;(statearr_20930_20953[1] = 6);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_20926 === 5))
{var inst_20905 = cljs.core.async.close_BANG_(tc);var inst_20906 = cljs.core.async.close_BANG_(fc);var state_20925__$1 = (function (){var statearr_20931 = state_20925;(statearr_20931[8] = inst_20905);
return statearr_20931;
})();var statearr_20932_20954 = state_20925__$1;(statearr_20932_20954[2] = inst_20906);
(statearr_20932_20954[1] = 7);
return cljs.core.constant$keyword$51;
} else
{if((state_val_20926 === 6))
{var inst_20902 = (state_20925[7]);var inst_20908 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_20902) : p.call(null,inst_20902));var state_20925__$1 = state_20925;if(cljs.core.truth_(inst_20908))
{var statearr_20933_20955 = state_20925__$1;(statearr_20933_20955[1] = 9);
} else
{var statearr_20934_20956 = state_20925__$1;(statearr_20934_20956[1] = 10);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_20926 === 7))
{var inst_20921 = (state_20925[2]);var state_20925__$1 = state_20925;var statearr_20935_20957 = state_20925__$1;(statearr_20935_20957[2] = inst_20921);
(statearr_20935_20957[1] = 3);
return cljs.core.constant$keyword$51;
} else
{if((state_val_20926 === 8))
{var inst_20914 = (state_20925[2]);var state_20925__$1 = state_20925;if(cljs.core.truth_(inst_20914))
{var statearr_20936_20958 = state_20925__$1;(statearr_20936_20958[1] = 12);
} else
{var statearr_20937_20959 = state_20925__$1;(statearr_20937_20959[1] = 13);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_20926 === 9))
{var state_20925__$1 = state_20925;var statearr_20938_20960 = state_20925__$1;(statearr_20938_20960[2] = tc);
(statearr_20938_20960[1] = 11);
return cljs.core.constant$keyword$51;
} else
{if((state_val_20926 === 10))
{var state_20925__$1 = state_20925;var statearr_20939_20961 = state_20925__$1;(statearr_20939_20961[2] = fc);
(statearr_20939_20961[1] = 11);
return cljs.core.constant$keyword$51;
} else
{if((state_val_20926 === 11))
{var inst_20902 = (state_20925[7]);var inst_20912 = (state_20925[2]);var state_20925__$1 = state_20925;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20925__$1,8,inst_20912,inst_20902);
} else
{if((state_val_20926 === 12))
{var state_20925__$1 = state_20925;var statearr_20940_20962 = state_20925__$1;(statearr_20940_20962[2] = null);
(statearr_20940_20962[1] = 2);
return cljs.core.constant$keyword$51;
} else
{if((state_val_20926 === 13))
{var state_20925__$1 = state_20925;var statearr_20941_20963 = state_20925__$1;(statearr_20941_20963[2] = null);
(statearr_20941_20963[1] = 14);
return cljs.core.constant$keyword$51;
} else
{if((state_val_20926 === 14))
{var inst_20919 = (state_20925[2]);var state_20925__$1 = state_20925;var statearr_20942_20964 = state_20925__$1;(statearr_20942_20964[2] = inst_20919);
(statearr_20942_20964[1] = 7);
return cljs.core.constant$keyword$51;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_20946 = (new Array(9));(statearr_20946[0] = state_machine__6724__auto__);
(statearr_20946[1] = 1);
return statearr_20946;
});
var state_machine__6724__auto____1 = (function (state_20925){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_20925);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$51))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e20947){if((e20947 instanceof Object))
{var ex__6727__auto__ = e20947;var statearr_20948_20965 = state_20925;(statearr_20948_20965[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20925);
return cljs.core.constant$keyword$51;
} else
{if(cljs.core.constant$keyword$6)
{throw e20947;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$51))
{{
var G__20966 = state_20925;
state_20925 = G__20966;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_20925){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_20925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_20949 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_20949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto___20950);
return statearr_20949;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6793__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_21013){var state_val_21014 = (state_21013[1]);if((state_val_21014 === 7))
{var inst_21009 = (state_21013[2]);var state_21013__$1 = state_21013;var statearr_21015_21031 = state_21013__$1;(statearr_21015_21031[2] = inst_21009);
(statearr_21015_21031[1] = 3);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21014 === 6))
{var inst_20999 = (state_21013[7]);var inst_21002 = (state_21013[8]);var inst_21006 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_20999,inst_21002) : f.call(null,inst_20999,inst_21002));var inst_20999__$1 = inst_21006;var state_21013__$1 = (function (){var statearr_21016 = state_21013;(statearr_21016[7] = inst_20999__$1);
return statearr_21016;
})();var statearr_21017_21032 = state_21013__$1;(statearr_21017_21032[2] = null);
(statearr_21017_21032[1] = 2);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21014 === 5))
{var inst_20999 = (state_21013[7]);var state_21013__$1 = state_21013;var statearr_21018_21033 = state_21013__$1;(statearr_21018_21033[2] = inst_20999);
(statearr_21018_21033[1] = 7);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21014 === 4))
{var inst_21002 = (state_21013[8]);var inst_21002__$1 = (state_21013[2]);var inst_21003 = (inst_21002__$1 == null);var state_21013__$1 = (function (){var statearr_21019 = state_21013;(statearr_21019[8] = inst_21002__$1);
return statearr_21019;
})();if(cljs.core.truth_(inst_21003))
{var statearr_21020_21034 = state_21013__$1;(statearr_21020_21034[1] = 5);
} else
{var statearr_21021_21035 = state_21013__$1;(statearr_21021_21035[1] = 6);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_21014 === 3))
{var inst_21011 = (state_21013[2]);var state_21013__$1 = state_21013;return cljs.core.async.impl.ioc_helpers.return_chan(state_21013__$1,inst_21011);
} else
{if((state_val_21014 === 2))
{var state_21013__$1 = state_21013;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21013__$1,4,ch);
} else
{if((state_val_21014 === 1))
{var inst_20999 = init;var state_21013__$1 = (function (){var statearr_21022 = state_21013;(statearr_21022[7] = inst_20999);
return statearr_21022;
})();var statearr_21023_21036 = state_21013__$1;(statearr_21023_21036[2] = null);
(statearr_21023_21036[1] = 2);
return cljs.core.constant$keyword$51;
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_21027 = (new Array(9));(statearr_21027[0] = state_machine__6724__auto__);
(statearr_21027[1] = 1);
return statearr_21027;
});
var state_machine__6724__auto____1 = (function (state_21013){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_21013);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$51))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e21028){if((e21028 instanceof Object))
{var ex__6727__auto__ = e21028;var statearr_21029_21037 = state_21013;(statearr_21029_21037[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21013);
return cljs.core.constant$keyword$51;
} else
{if(cljs.core.constant$keyword$6)
{throw e21028;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$51))
{{
var G__21038 = state_21013;
state_21013 = G__21038;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_21013){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_21013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_21030 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_21030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto__);
return statearr_21030;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return c__6793__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6793__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_21112){var state_val_21113 = (state_21112[1]);if((state_val_21113 === 1))
{var inst_21088 = cljs.core.seq(coll);var inst_21089 = inst_21088;var state_21112__$1 = (function (){var statearr_21114 = state_21112;(statearr_21114[7] = inst_21089);
return statearr_21114;
})();var statearr_21115_21137 = state_21112__$1;(statearr_21115_21137[2] = null);
(statearr_21115_21137[1] = 2);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21113 === 2))
{var inst_21089 = (state_21112[7]);var state_21112__$1 = state_21112;if(cljs.core.truth_(inst_21089))
{var statearr_21116_21138 = state_21112__$1;(statearr_21116_21138[1] = 4);
} else
{var statearr_21117_21139 = state_21112__$1;(statearr_21117_21139[1] = 5);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_21113 === 3))
{var inst_21110 = (state_21112[2]);var state_21112__$1 = state_21112;return cljs.core.async.impl.ioc_helpers.return_chan(state_21112__$1,inst_21110);
} else
{if((state_val_21113 === 4))
{var inst_21089 = (state_21112[7]);var inst_21092 = cljs.core.first(inst_21089);var state_21112__$1 = state_21112;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21112__$1,7,ch,inst_21092);
} else
{if((state_val_21113 === 5))
{var inst_21089 = (state_21112[7]);var state_21112__$1 = state_21112;var statearr_21118_21140 = state_21112__$1;(statearr_21118_21140[2] = inst_21089);
(statearr_21118_21140[1] = 6);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21113 === 6))
{var inst_21097 = (state_21112[2]);var state_21112__$1 = state_21112;if(cljs.core.truth_(inst_21097))
{var statearr_21119_21141 = state_21112__$1;(statearr_21119_21141[1] = 8);
} else
{var statearr_21120_21142 = state_21112__$1;(statearr_21120_21142[1] = 9);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_21113 === 7))
{var inst_21094 = (state_21112[2]);var state_21112__$1 = state_21112;var statearr_21121_21143 = state_21112__$1;(statearr_21121_21143[2] = inst_21094);
(statearr_21121_21143[1] = 6);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21113 === 8))
{var inst_21089 = (state_21112[7]);var inst_21099 = cljs.core.next(inst_21089);var inst_21089__$1 = inst_21099;var state_21112__$1 = (function (){var statearr_21122 = state_21112;(statearr_21122[7] = inst_21089__$1);
return statearr_21122;
})();var statearr_21123_21144 = state_21112__$1;(statearr_21123_21144[2] = null);
(statearr_21123_21144[1] = 2);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21113 === 9))
{var state_21112__$1 = state_21112;if(cljs.core.truth_(close_QMARK_))
{var statearr_21124_21145 = state_21112__$1;(statearr_21124_21145[1] = 11);
} else
{var statearr_21125_21146 = state_21112__$1;(statearr_21125_21146[1] = 12);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_21113 === 10))
{var inst_21108 = (state_21112[2]);var state_21112__$1 = state_21112;var statearr_21126_21147 = state_21112__$1;(statearr_21126_21147[2] = inst_21108);
(statearr_21126_21147[1] = 3);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21113 === 11))
{var inst_21103 = cljs.core.async.close_BANG_(ch);var state_21112__$1 = state_21112;var statearr_21127_21148 = state_21112__$1;(statearr_21127_21148[2] = inst_21103);
(statearr_21127_21148[1] = 13);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21113 === 12))
{var state_21112__$1 = state_21112;var statearr_21128_21149 = state_21112__$1;(statearr_21128_21149[2] = null);
(statearr_21128_21149[1] = 13);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21113 === 13))
{var inst_21106 = (state_21112[2]);var state_21112__$1 = state_21112;var statearr_21129_21150 = state_21112__$1;(statearr_21129_21150[2] = inst_21106);
(statearr_21129_21150[1] = 10);
return cljs.core.constant$keyword$51;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_21133 = (new Array(8));(statearr_21133[0] = state_machine__6724__auto__);
(statearr_21133[1] = 1);
return statearr_21133;
});
var state_machine__6724__auto____1 = (function (state_21112){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_21112);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$51))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e21134){if((e21134 instanceof Object))
{var ex__6727__auto__ = e21134;var statearr_21135_21151 = state_21112;(statearr_21135_21151[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21112);
return cljs.core.constant$keyword$51;
} else
{if(cljs.core.constant$keyword$6)
{throw e21134;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$51))
{{
var G__21152 = state_21112;
state_21112 = G__21152;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_21112){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_21112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_21136 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_21136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto__);
return statearr_21136;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return c__6793__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count(100,coll));cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj21154 = {};return obj21154;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3273__auto__ = _;if(and__3273__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3273__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__3883__auto__ = (((_ == null))?null:_);return (function (){var or__3285__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj21156 = {};return obj21156;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3273__auto__ = m;if(and__3273__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3273__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__3883__auto__ = (((m == null))?null:m);return (function (){var or__3285__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3273__auto__ = m;if(and__3273__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3273__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__3883__auto__ = (((m == null))?null:m);return (function (){var or__3285__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3273__auto__ = m;if(and__3273__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3273__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__3883__auto__ = (((m == null))?null:m);return (function (){var or__3285__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t21378 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21378 = (function (cs,ch,mult,meta21379){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta21379 = meta21379;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21378.cljs$lang$type = true;
cljs.core.async.t21378.cljs$lang$ctorStr = "cljs.core.async/t21378";
cljs.core.async.t21378.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"cljs.core.async/t21378");
});})(cs))
;
cljs.core.async.t21378.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t21378.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t21378.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t21378.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t21378.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t21378.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t21378.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21380){var self__ = this;
var _21380__$1 = this;return self__.meta21379;
});})(cs))
;
cljs.core.async.t21378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21380,meta21379__$1){var self__ = this;
var _21380__$1 = this;return (new cljs.core.async.t21378(self__.cs,self__.ch,self__.mult,meta21379__$1));
});})(cs))
;
cljs.core.async.__GT_t21378 = ((function (cs){
return (function __GT_t21378(cs__$1,ch__$1,mult__$1,meta21379){return (new cljs.core.async.t21378(cs__$1,ch__$1,mult__$1,meta21379));
});})(cs))
;
}
return (new cljs.core.async.t21378(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6793__auto___21599 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_21511){var state_val_21512 = (state_21511[1]);if((state_val_21512 === 32))
{var inst_21454 = (state_21511[7]);var inst_21453 = (state_21511[8]);var inst_21452 = (state_21511[9]);var inst_21451 = (state_21511[10]);var inst_21466 = (state_21511[2]);var inst_21467 = (inst_21454 + 1);var tmp21513 = inst_21453;var tmp21514 = inst_21452;var tmp21515 = inst_21451;var inst_21451__$1 = tmp21515;var inst_21452__$1 = tmp21514;var inst_21453__$1 = tmp21513;var inst_21454__$1 = inst_21467;var state_21511__$1 = (function (){var statearr_21516 = state_21511;(statearr_21516[7] = inst_21454__$1);
(statearr_21516[8] = inst_21453__$1);
(statearr_21516[9] = inst_21452__$1);
(statearr_21516[10] = inst_21451__$1);
(statearr_21516[11] = inst_21466);
return statearr_21516;
})();var statearr_21517_21600 = state_21511__$1;(statearr_21517_21600[2] = null);
(statearr_21517_21600[1] = 25);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 1))
{var state_21511__$1 = state_21511;var statearr_21518_21601 = state_21511__$1;(statearr_21518_21601[2] = null);
(statearr_21518_21601[1] = 2);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 33))
{var inst_21470 = (state_21511[12]);var inst_21472 = cljs.core.chunked_seq_QMARK_(inst_21470);var state_21511__$1 = state_21511;if(inst_21472)
{var statearr_21519_21602 = state_21511__$1;(statearr_21519_21602[1] = 36);
} else
{var statearr_21520_21603 = state_21511__$1;(statearr_21520_21603[1] = 37);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 2))
{var state_21511__$1 = state_21511;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21511__$1,4,ch);
} else
{if((state_val_21512 === 34))
{var state_21511__$1 = state_21511;var statearr_21521_21604 = state_21511__$1;(statearr_21521_21604[2] = null);
(statearr_21521_21604[1] = 35);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 3))
{var inst_21509 = (state_21511[2]);var state_21511__$1 = state_21511;return cljs.core.async.impl.ioc_helpers.return_chan(state_21511__$1,inst_21509);
} else
{if((state_val_21512 === 35))
{var inst_21493 = (state_21511[2]);var state_21511__$1 = state_21511;var statearr_21522_21605 = state_21511__$1;(statearr_21522_21605[2] = inst_21493);
(statearr_21522_21605[1] = 29);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 4))
{var inst_21383 = (state_21511[13]);var inst_21383__$1 = (state_21511[2]);var inst_21384 = (inst_21383__$1 == null);var state_21511__$1 = (function (){var statearr_21523 = state_21511;(statearr_21523[13] = inst_21383__$1);
return statearr_21523;
})();if(cljs.core.truth_(inst_21384))
{var statearr_21524_21606 = state_21511__$1;(statearr_21524_21606[1] = 5);
} else
{var statearr_21525_21607 = state_21511__$1;(statearr_21525_21607[1] = 6);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 36))
{var inst_21470 = (state_21511[12]);var inst_21474 = cljs.core.chunk_first(inst_21470);var inst_21475 = cljs.core.chunk_rest(inst_21470);var inst_21476 = cljs.core.count(inst_21474);var inst_21451 = inst_21475;var inst_21452 = inst_21474;var inst_21453 = inst_21476;var inst_21454 = 0;var state_21511__$1 = (function (){var statearr_21526 = state_21511;(statearr_21526[7] = inst_21454);
(statearr_21526[8] = inst_21453);
(statearr_21526[9] = inst_21452);
(statearr_21526[10] = inst_21451);
return statearr_21526;
})();var statearr_21527_21608 = state_21511__$1;(statearr_21527_21608[2] = null);
(statearr_21527_21608[1] = 25);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 5))
{var inst_21390 = cljs.core.deref(cs);var inst_21391 = cljs.core.seq(inst_21390);var inst_21392 = inst_21391;var inst_21393 = null;var inst_21394 = 0;var inst_21395 = 0;var state_21511__$1 = (function (){var statearr_21528 = state_21511;(statearr_21528[14] = inst_21394);
(statearr_21528[15] = inst_21395);
(statearr_21528[16] = inst_21392);
(statearr_21528[17] = inst_21393);
return statearr_21528;
})();var statearr_21529_21609 = state_21511__$1;(statearr_21529_21609[2] = null);
(statearr_21529_21609[1] = 8);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 37))
{var inst_21383 = (state_21511[13]);var inst_21470 = (state_21511[12]);var inst_21479 = (state_21511[18]);var inst_21479__$1 = cljs.core.first(inst_21470);var inst_21480 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21479__$1,inst_21383,done);var state_21511__$1 = (function (){var statearr_21530 = state_21511;(statearr_21530[18] = inst_21479__$1);
return statearr_21530;
})();if(cljs.core.truth_(inst_21480))
{var statearr_21531_21610 = state_21511__$1;(statearr_21531_21610[1] = 39);
} else
{var statearr_21532_21611 = state_21511__$1;(statearr_21532_21611[1] = 40);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 6))
{var inst_21443 = (state_21511[19]);var inst_21442 = cljs.core.deref(cs);var inst_21443__$1 = cljs.core.keys(inst_21442);var inst_21444 = cljs.core.count(inst_21443__$1);var inst_21445 = cljs.core.reset_BANG_(dctr,inst_21444);var inst_21450 = cljs.core.seq(inst_21443__$1);var inst_21451 = inst_21450;var inst_21452 = null;var inst_21453 = 0;var inst_21454 = 0;var state_21511__$1 = (function (){var statearr_21533 = state_21511;(statearr_21533[7] = inst_21454);
(statearr_21533[20] = inst_21445);
(statearr_21533[8] = inst_21453);
(statearr_21533[9] = inst_21452);
(statearr_21533[10] = inst_21451);
(statearr_21533[19] = inst_21443__$1);
return statearr_21533;
})();var statearr_21534_21612 = state_21511__$1;(statearr_21534_21612[2] = null);
(statearr_21534_21612[1] = 25);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 38))
{var inst_21490 = (state_21511[2]);var state_21511__$1 = state_21511;var statearr_21535_21613 = state_21511__$1;(statearr_21535_21613[2] = inst_21490);
(statearr_21535_21613[1] = 35);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 7))
{var inst_21507 = (state_21511[2]);var state_21511__$1 = state_21511;var statearr_21536_21614 = state_21511__$1;(statearr_21536_21614[2] = inst_21507);
(statearr_21536_21614[1] = 3);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 39))
{var state_21511__$1 = state_21511;var statearr_21537_21615 = state_21511__$1;(statearr_21537_21615[2] = null);
(statearr_21537_21615[1] = 41);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 8))
{var inst_21394 = (state_21511[14]);var inst_21395 = (state_21511[15]);var inst_21397 = (inst_21395 < inst_21394);var inst_21398 = inst_21397;var state_21511__$1 = state_21511;if(cljs.core.truth_(inst_21398))
{var statearr_21538_21616 = state_21511__$1;(statearr_21538_21616[1] = 10);
} else
{var statearr_21539_21617 = state_21511__$1;(statearr_21539_21617[1] = 11);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 40))
{var inst_21479 = (state_21511[18]);var inst_21483 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_21484 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_21479);var state_21511__$1 = (function (){var statearr_21540 = state_21511;(statearr_21540[21] = inst_21483);
return statearr_21540;
})();var statearr_21541_21618 = state_21511__$1;(statearr_21541_21618[2] = inst_21484);
(statearr_21541_21618[1] = 41);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 9))
{var inst_21440 = (state_21511[2]);var state_21511__$1 = state_21511;var statearr_21542_21619 = state_21511__$1;(statearr_21542_21619[2] = inst_21440);
(statearr_21542_21619[1] = 7);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 41))
{var inst_21470 = (state_21511[12]);var inst_21486 = (state_21511[2]);var inst_21487 = cljs.core.next(inst_21470);var inst_21451 = inst_21487;var inst_21452 = null;var inst_21453 = 0;var inst_21454 = 0;var state_21511__$1 = (function (){var statearr_21543 = state_21511;(statearr_21543[7] = inst_21454);
(statearr_21543[8] = inst_21453);
(statearr_21543[9] = inst_21452);
(statearr_21543[10] = inst_21451);
(statearr_21543[22] = inst_21486);
return statearr_21543;
})();var statearr_21544_21620 = state_21511__$1;(statearr_21544_21620[2] = null);
(statearr_21544_21620[1] = 25);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 10))
{var inst_21395 = (state_21511[15]);var inst_21393 = (state_21511[17]);var inst_21401 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21393,inst_21395);var inst_21402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21401,0,null);var inst_21403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21401,1,null);var state_21511__$1 = (function (){var statearr_21545 = state_21511;(statearr_21545[23] = inst_21402);
return statearr_21545;
})();if(cljs.core.truth_(inst_21403))
{var statearr_21546_21621 = state_21511__$1;(statearr_21546_21621[1] = 13);
} else
{var statearr_21547_21622 = state_21511__$1;(statearr_21547_21622[1] = 14);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 42))
{var state_21511__$1 = state_21511;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21511__$1,45,dchan);
} else
{if((state_val_21512 === 11))
{var inst_21412 = (state_21511[24]);var inst_21392 = (state_21511[16]);var inst_21412__$1 = cljs.core.seq(inst_21392);var state_21511__$1 = (function (){var statearr_21548 = state_21511;(statearr_21548[24] = inst_21412__$1);
return statearr_21548;
})();if(inst_21412__$1)
{var statearr_21549_21623 = state_21511__$1;(statearr_21549_21623[1] = 16);
} else
{var statearr_21550_21624 = state_21511__$1;(statearr_21550_21624[1] = 17);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 43))
{var state_21511__$1 = state_21511;var statearr_21551_21625 = state_21511__$1;(statearr_21551_21625[2] = null);
(statearr_21551_21625[1] = 44);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 12))
{var inst_21438 = (state_21511[2]);var state_21511__$1 = state_21511;var statearr_21552_21626 = state_21511__$1;(statearr_21552_21626[2] = inst_21438);
(statearr_21552_21626[1] = 9);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 44))
{var inst_21504 = (state_21511[2]);var state_21511__$1 = (function (){var statearr_21553 = state_21511;(statearr_21553[25] = inst_21504);
return statearr_21553;
})();var statearr_21554_21627 = state_21511__$1;(statearr_21554_21627[2] = null);
(statearr_21554_21627[1] = 2);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 13))
{var inst_21402 = (state_21511[23]);var inst_21405 = cljs.core.async.close_BANG_(inst_21402);var state_21511__$1 = state_21511;var statearr_21555_21628 = state_21511__$1;(statearr_21555_21628[2] = inst_21405);
(statearr_21555_21628[1] = 15);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 45))
{var inst_21501 = (state_21511[2]);var state_21511__$1 = state_21511;var statearr_21559_21629 = state_21511__$1;(statearr_21559_21629[2] = inst_21501);
(statearr_21559_21629[1] = 44);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 14))
{var state_21511__$1 = state_21511;var statearr_21560_21630 = state_21511__$1;(statearr_21560_21630[2] = null);
(statearr_21560_21630[1] = 15);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 15))
{var inst_21394 = (state_21511[14]);var inst_21395 = (state_21511[15]);var inst_21392 = (state_21511[16]);var inst_21393 = (state_21511[17]);var inst_21408 = (state_21511[2]);var inst_21409 = (inst_21395 + 1);var tmp21556 = inst_21394;var tmp21557 = inst_21392;var tmp21558 = inst_21393;var inst_21392__$1 = tmp21557;var inst_21393__$1 = tmp21558;var inst_21394__$1 = tmp21556;var inst_21395__$1 = inst_21409;var state_21511__$1 = (function (){var statearr_21561 = state_21511;(statearr_21561[14] = inst_21394__$1);
(statearr_21561[15] = inst_21395__$1);
(statearr_21561[16] = inst_21392__$1);
(statearr_21561[17] = inst_21393__$1);
(statearr_21561[26] = inst_21408);
return statearr_21561;
})();var statearr_21562_21631 = state_21511__$1;(statearr_21562_21631[2] = null);
(statearr_21562_21631[1] = 8);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 16))
{var inst_21412 = (state_21511[24]);var inst_21414 = cljs.core.chunked_seq_QMARK_(inst_21412);var state_21511__$1 = state_21511;if(inst_21414)
{var statearr_21563_21632 = state_21511__$1;(statearr_21563_21632[1] = 19);
} else
{var statearr_21564_21633 = state_21511__$1;(statearr_21564_21633[1] = 20);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 17))
{var state_21511__$1 = state_21511;var statearr_21565_21634 = state_21511__$1;(statearr_21565_21634[2] = null);
(statearr_21565_21634[1] = 18);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 18))
{var inst_21436 = (state_21511[2]);var state_21511__$1 = state_21511;var statearr_21566_21635 = state_21511__$1;(statearr_21566_21635[2] = inst_21436);
(statearr_21566_21635[1] = 12);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 19))
{var inst_21412 = (state_21511[24]);var inst_21416 = cljs.core.chunk_first(inst_21412);var inst_21417 = cljs.core.chunk_rest(inst_21412);var inst_21418 = cljs.core.count(inst_21416);var inst_21392 = inst_21417;var inst_21393 = inst_21416;var inst_21394 = inst_21418;var inst_21395 = 0;var state_21511__$1 = (function (){var statearr_21567 = state_21511;(statearr_21567[14] = inst_21394);
(statearr_21567[15] = inst_21395);
(statearr_21567[16] = inst_21392);
(statearr_21567[17] = inst_21393);
return statearr_21567;
})();var statearr_21568_21636 = state_21511__$1;(statearr_21568_21636[2] = null);
(statearr_21568_21636[1] = 8);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 20))
{var inst_21412 = (state_21511[24]);var inst_21422 = cljs.core.first(inst_21412);var inst_21423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21422,0,null);var inst_21424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21422,1,null);var state_21511__$1 = (function (){var statearr_21569 = state_21511;(statearr_21569[27] = inst_21423);
return statearr_21569;
})();if(cljs.core.truth_(inst_21424))
{var statearr_21570_21637 = state_21511__$1;(statearr_21570_21637[1] = 22);
} else
{var statearr_21571_21638 = state_21511__$1;(statearr_21571_21638[1] = 23);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 21))
{var inst_21433 = (state_21511[2]);var state_21511__$1 = state_21511;var statearr_21572_21639 = state_21511__$1;(statearr_21572_21639[2] = inst_21433);
(statearr_21572_21639[1] = 18);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 22))
{var inst_21423 = (state_21511[27]);var inst_21426 = cljs.core.async.close_BANG_(inst_21423);var state_21511__$1 = state_21511;var statearr_21573_21640 = state_21511__$1;(statearr_21573_21640[2] = inst_21426);
(statearr_21573_21640[1] = 24);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 23))
{var state_21511__$1 = state_21511;var statearr_21574_21641 = state_21511__$1;(statearr_21574_21641[2] = null);
(statearr_21574_21641[1] = 24);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 24))
{var inst_21412 = (state_21511[24]);var inst_21429 = (state_21511[2]);var inst_21430 = cljs.core.next(inst_21412);var inst_21392 = inst_21430;var inst_21393 = null;var inst_21394 = 0;var inst_21395 = 0;var state_21511__$1 = (function (){var statearr_21575 = state_21511;(statearr_21575[28] = inst_21429);
(statearr_21575[14] = inst_21394);
(statearr_21575[15] = inst_21395);
(statearr_21575[16] = inst_21392);
(statearr_21575[17] = inst_21393);
return statearr_21575;
})();var statearr_21576_21642 = state_21511__$1;(statearr_21576_21642[2] = null);
(statearr_21576_21642[1] = 8);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 25))
{var inst_21454 = (state_21511[7]);var inst_21453 = (state_21511[8]);var inst_21456 = (inst_21454 < inst_21453);var inst_21457 = inst_21456;var state_21511__$1 = state_21511;if(cljs.core.truth_(inst_21457))
{var statearr_21577_21643 = state_21511__$1;(statearr_21577_21643[1] = 27);
} else
{var statearr_21578_21644 = state_21511__$1;(statearr_21578_21644[1] = 28);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 26))
{var inst_21443 = (state_21511[19]);var inst_21497 = (state_21511[2]);var inst_21498 = cljs.core.seq(inst_21443);var state_21511__$1 = (function (){var statearr_21579 = state_21511;(statearr_21579[29] = inst_21497);
return statearr_21579;
})();if(inst_21498)
{var statearr_21580_21645 = state_21511__$1;(statearr_21580_21645[1] = 42);
} else
{var statearr_21581_21646 = state_21511__$1;(statearr_21581_21646[1] = 43);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 27))
{var inst_21383 = (state_21511[13]);var inst_21454 = (state_21511[7]);var inst_21452 = (state_21511[9]);var inst_21459 = (state_21511[30]);var inst_21459__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21452,inst_21454);var inst_21460 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21459__$1,inst_21383,done);var state_21511__$1 = (function (){var statearr_21582 = state_21511;(statearr_21582[30] = inst_21459__$1);
return statearr_21582;
})();if(cljs.core.truth_(inst_21460))
{var statearr_21583_21647 = state_21511__$1;(statearr_21583_21647[1] = 30);
} else
{var statearr_21584_21648 = state_21511__$1;(statearr_21584_21648[1] = 31);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 28))
{var inst_21451 = (state_21511[10]);var inst_21470 = (state_21511[12]);var inst_21470__$1 = cljs.core.seq(inst_21451);var state_21511__$1 = (function (){var statearr_21585 = state_21511;(statearr_21585[12] = inst_21470__$1);
return statearr_21585;
})();if(inst_21470__$1)
{var statearr_21586_21649 = state_21511__$1;(statearr_21586_21649[1] = 33);
} else
{var statearr_21587_21650 = state_21511__$1;(statearr_21587_21650[1] = 34);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 29))
{var inst_21495 = (state_21511[2]);var state_21511__$1 = state_21511;var statearr_21588_21651 = state_21511__$1;(statearr_21588_21651[2] = inst_21495);
(statearr_21588_21651[1] = 26);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 30))
{var state_21511__$1 = state_21511;var statearr_21589_21652 = state_21511__$1;(statearr_21589_21652[2] = null);
(statearr_21589_21652[1] = 32);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21512 === 31))
{var inst_21459 = (state_21511[30]);var inst_21463 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_21464 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_21459);var state_21511__$1 = (function (){var statearr_21590 = state_21511;(statearr_21590[31] = inst_21463);
return statearr_21590;
})();var statearr_21591_21653 = state_21511__$1;(statearr_21591_21653[2] = inst_21464);
(statearr_21591_21653[1] = 32);
return cljs.core.constant$keyword$51;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_21595 = (new Array(32));(statearr_21595[0] = state_machine__6724__auto__);
(statearr_21595[1] = 1);
return statearr_21595;
});
var state_machine__6724__auto____1 = (function (state_21511){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_21511);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$51))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e21596){if((e21596 instanceof Object))
{var ex__6727__auto__ = e21596;var statearr_21597_21654 = state_21511;(statearr_21597_21654[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21511);
return cljs.core.constant$keyword$51;
} else
{if(cljs.core.constant$keyword$6)
{throw e21596;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$51))
{{
var G__21655 = state_21511;
state_21511 = G__21655;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_21511){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_21511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_21598 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_21598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto___21599);
return statearr_21598;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_(mult);
});
cljs.core.async.Mix = (function (){var obj21657 = {};return obj21657;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3273__auto__ = m;if(and__3273__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3273__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__3883__auto__ = (((m == null))?null:m);return (function (){var or__3285__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3273__auto__ = m;if(and__3273__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3273__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__3883__auto__ = (((m == null))?null:m);return (function (){var or__3285__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3273__auto__ = m;if(and__3273__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3273__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__3883__auto__ = (((m == null))?null:m);return (function (){var or__3285__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3273__auto__ = m;if(and__3273__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3273__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__3883__auto__ = (((m == null))?null:m);return (function (){var or__3285__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3273__auto__ = m;if(and__3273__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3273__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__3883__auto__ = (((m == null))?null:m);return (function (){var or__3285__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$57,null,cljs.core.constant$keyword$58,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$59);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$58);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v))))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$59,chs);var pauses = pick(cljs.core.constant$keyword$57,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$60,solos,cljs.core.constant$keyword$61,pick(cljs.core.constant$keyword$58,chs),cljs.core.constant$keyword$62,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$57)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t21777 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21777 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta21778){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta21778 = meta21778;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21777.cljs$lang$type = true;
cljs.core.async.t21777.cljs$lang$ctorStr = "cljs.core.async/t21777";
cljs.core.async.t21777.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"cljs.core.async/t21777");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21777.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t21777.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21777.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21777.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21777.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21777.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21777.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t21777.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21777.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21779){var self__ = this;
var _21779__$1 = this;return self__.meta21778;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t21777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21779,meta21778__$1){var self__ = this;
var _21779__$1 = this;return (new cljs.core.async.t21777(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta21778__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t21777 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t21777(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta21778){return (new cljs.core.async.t21777(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta21778));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t21777(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6793__auto___21896 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_21849){var state_val_21850 = (state_21849[1]);if((state_val_21850 === 1))
{var inst_21783 = (state_21849[7]);var inst_21783__$1 = calc_state();var inst_21784 = cljs.core.seq_QMARK_(inst_21783__$1);var state_21849__$1 = (function (){var statearr_21851 = state_21849;(statearr_21851[7] = inst_21783__$1);
return statearr_21851;
})();if(inst_21784)
{var statearr_21852_21897 = state_21849__$1;(statearr_21852_21897[1] = 2);
} else
{var statearr_21853_21898 = state_21849__$1;(statearr_21853_21898[1] = 3);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_21850 === 2))
{var inst_21783 = (state_21849[7]);var inst_21786 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_21783);var state_21849__$1 = state_21849;var statearr_21854_21899 = state_21849__$1;(statearr_21854_21899[2] = inst_21786);
(statearr_21854_21899[1] = 4);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21850 === 3))
{var inst_21783 = (state_21849[7]);var state_21849__$1 = state_21849;var statearr_21855_21900 = state_21849__$1;(statearr_21855_21900[2] = inst_21783);
(statearr_21855_21900[1] = 4);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21850 === 4))
{var inst_21783 = (state_21849[7]);var inst_21789 = (state_21849[2]);var inst_21790 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21789,cljs.core.constant$keyword$62);var inst_21791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21789,cljs.core.constant$keyword$61);var inst_21792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21789,cljs.core.constant$keyword$60);var inst_21793 = inst_21783;var state_21849__$1 = (function (){var statearr_21856 = state_21849;(statearr_21856[8] = inst_21790);
(statearr_21856[9] = inst_21791);
(statearr_21856[10] = inst_21793);
(statearr_21856[11] = inst_21792);
return statearr_21856;
})();var statearr_21857_21901 = state_21849__$1;(statearr_21857_21901[2] = null);
(statearr_21857_21901[1] = 5);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21850 === 5))
{var inst_21793 = (state_21849[10]);var inst_21796 = cljs.core.seq_QMARK_(inst_21793);var state_21849__$1 = state_21849;if(inst_21796)
{var statearr_21858_21902 = state_21849__$1;(statearr_21858_21902[1] = 7);
} else
{var statearr_21859_21903 = state_21849__$1;(statearr_21859_21903[1] = 8);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_21850 === 6))
{var inst_21847 = (state_21849[2]);var state_21849__$1 = state_21849;return cljs.core.async.impl.ioc_helpers.return_chan(state_21849__$1,inst_21847);
} else
{if((state_val_21850 === 7))
{var inst_21793 = (state_21849[10]);var inst_21798 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_21793);var state_21849__$1 = state_21849;var statearr_21860_21904 = state_21849__$1;(statearr_21860_21904[2] = inst_21798);
(statearr_21860_21904[1] = 9);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21850 === 8))
{var inst_21793 = (state_21849[10]);var state_21849__$1 = state_21849;var statearr_21861_21905 = state_21849__$1;(statearr_21861_21905[2] = inst_21793);
(statearr_21861_21905[1] = 9);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21850 === 9))
{var inst_21801 = (state_21849[12]);var inst_21801__$1 = (state_21849[2]);var inst_21802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21801__$1,cljs.core.constant$keyword$62);var inst_21803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21801__$1,cljs.core.constant$keyword$61);var inst_21804 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21801__$1,cljs.core.constant$keyword$60);var state_21849__$1 = (function (){var statearr_21862 = state_21849;(statearr_21862[12] = inst_21801__$1);
(statearr_21862[13] = inst_21803);
(statearr_21862[14] = inst_21804);
return statearr_21862;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_21849__$1,10,inst_21802);
} else
{if((state_val_21850 === 10))
{var inst_21809 = (state_21849[15]);var inst_21808 = (state_21849[16]);var inst_21807 = (state_21849[2]);var inst_21808__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21807,0,null);var inst_21809__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21807,1,null);var inst_21810 = (inst_21808__$1 == null);var inst_21811 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21809__$1,change);var inst_21812 = (inst_21810) || (inst_21811);var state_21849__$1 = (function (){var statearr_21863 = state_21849;(statearr_21863[15] = inst_21809__$1);
(statearr_21863[16] = inst_21808__$1);
return statearr_21863;
})();if(cljs.core.truth_(inst_21812))
{var statearr_21864_21906 = state_21849__$1;(statearr_21864_21906[1] = 11);
} else
{var statearr_21865_21907 = state_21849__$1;(statearr_21865_21907[1] = 12);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_21850 === 11))
{var inst_21808 = (state_21849[16]);var inst_21814 = (inst_21808 == null);var state_21849__$1 = state_21849;if(cljs.core.truth_(inst_21814))
{var statearr_21866_21908 = state_21849__$1;(statearr_21866_21908[1] = 14);
} else
{var statearr_21867_21909 = state_21849__$1;(statearr_21867_21909[1] = 15);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_21850 === 12))
{var inst_21823 = (state_21849[17]);var inst_21804 = (state_21849[14]);var inst_21809 = (state_21849[15]);var inst_21823__$1 = (inst_21804.cljs$core$IFn$_invoke$arity$1 ? inst_21804.cljs$core$IFn$_invoke$arity$1(inst_21809) : inst_21804.call(null,inst_21809));var state_21849__$1 = (function (){var statearr_21868 = state_21849;(statearr_21868[17] = inst_21823__$1);
return statearr_21868;
})();if(cljs.core.truth_(inst_21823__$1))
{var statearr_21869_21910 = state_21849__$1;(statearr_21869_21910[1] = 17);
} else
{var statearr_21870_21911 = state_21849__$1;(statearr_21870_21911[1] = 18);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_21850 === 13))
{var inst_21845 = (state_21849[2]);var state_21849__$1 = state_21849;var statearr_21871_21912 = state_21849__$1;(statearr_21871_21912[2] = inst_21845);
(statearr_21871_21912[1] = 6);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21850 === 14))
{var inst_21809 = (state_21849[15]);var inst_21816 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_21809);var state_21849__$1 = state_21849;var statearr_21872_21913 = state_21849__$1;(statearr_21872_21913[2] = inst_21816);
(statearr_21872_21913[1] = 16);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21850 === 15))
{var state_21849__$1 = state_21849;var statearr_21873_21914 = state_21849__$1;(statearr_21873_21914[2] = null);
(statearr_21873_21914[1] = 16);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21850 === 16))
{var inst_21819 = (state_21849[2]);var inst_21820 = calc_state();var inst_21793 = inst_21820;var state_21849__$1 = (function (){var statearr_21874 = state_21849;(statearr_21874[18] = inst_21819);
(statearr_21874[10] = inst_21793);
return statearr_21874;
})();var statearr_21875_21915 = state_21849__$1;(statearr_21875_21915[2] = null);
(statearr_21875_21915[1] = 5);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21850 === 17))
{var inst_21823 = (state_21849[17]);var state_21849__$1 = state_21849;var statearr_21876_21916 = state_21849__$1;(statearr_21876_21916[2] = inst_21823);
(statearr_21876_21916[1] = 19);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21850 === 18))
{var inst_21803 = (state_21849[13]);var inst_21804 = (state_21849[14]);var inst_21809 = (state_21849[15]);var inst_21826 = cljs.core.empty_QMARK_(inst_21804);var inst_21827 = (inst_21803.cljs$core$IFn$_invoke$arity$1 ? inst_21803.cljs$core$IFn$_invoke$arity$1(inst_21809) : inst_21803.call(null,inst_21809));var inst_21828 = cljs.core.not(inst_21827);var inst_21829 = (inst_21826) && (inst_21828);var state_21849__$1 = state_21849;var statearr_21877_21917 = state_21849__$1;(statearr_21877_21917[2] = inst_21829);
(statearr_21877_21917[1] = 19);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21850 === 19))
{var inst_21831 = (state_21849[2]);var state_21849__$1 = state_21849;if(cljs.core.truth_(inst_21831))
{var statearr_21878_21918 = state_21849__$1;(statearr_21878_21918[1] = 20);
} else
{var statearr_21879_21919 = state_21849__$1;(statearr_21879_21919[1] = 21);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_21850 === 20))
{var inst_21808 = (state_21849[16]);var state_21849__$1 = state_21849;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21849__$1,23,out,inst_21808);
} else
{if((state_val_21850 === 21))
{var inst_21801 = (state_21849[12]);var inst_21793 = inst_21801;var state_21849__$1 = (function (){var statearr_21880 = state_21849;(statearr_21880[10] = inst_21793);
return statearr_21880;
})();var statearr_21881_21920 = state_21849__$1;(statearr_21881_21920[2] = null);
(statearr_21881_21920[1] = 5);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21850 === 22))
{var inst_21843 = (state_21849[2]);var state_21849__$1 = state_21849;var statearr_21882_21921 = state_21849__$1;(statearr_21882_21921[2] = inst_21843);
(statearr_21882_21921[1] = 13);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21850 === 23))
{var inst_21834 = (state_21849[2]);var state_21849__$1 = state_21849;if(cljs.core.truth_(inst_21834))
{var statearr_21883_21922 = state_21849__$1;(statearr_21883_21922[1] = 24);
} else
{var statearr_21884_21923 = state_21849__$1;(statearr_21884_21923[1] = 25);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_21850 === 24))
{var inst_21801 = (state_21849[12]);var inst_21793 = inst_21801;var state_21849__$1 = (function (){var statearr_21885 = state_21849;(statearr_21885[10] = inst_21793);
return statearr_21885;
})();var statearr_21886_21924 = state_21849__$1;(statearr_21886_21924[2] = null);
(statearr_21886_21924[1] = 5);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21850 === 25))
{var state_21849__$1 = state_21849;var statearr_21887_21925 = state_21849__$1;(statearr_21887_21925[2] = null);
(statearr_21887_21925[1] = 26);
return cljs.core.constant$keyword$51;
} else
{if((state_val_21850 === 26))
{var inst_21839 = (state_21849[2]);var state_21849__$1 = state_21849;var statearr_21888_21926 = state_21849__$1;(statearr_21888_21926[2] = inst_21839);
(statearr_21888_21926[1] = 22);
return cljs.core.constant$keyword$51;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_21892 = (new Array(19));(statearr_21892[0] = state_machine__6724__auto__);
(statearr_21892[1] = 1);
return statearr_21892;
});
var state_machine__6724__auto____1 = (function (state_21849){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_21849);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$51))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e21893){if((e21893 instanceof Object))
{var ex__6727__auto__ = e21893;var statearr_21894_21927 = state_21849;(statearr_21894_21927[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21849);
return cljs.core.constant$keyword$51;
} else
{if(cljs.core.constant$keyword$6)
{throw e21893;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$51))
{{
var G__21928 = state_21849;
state_21849 = G__21928;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_21849){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_21849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_21895 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_21895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto___21896);
return statearr_21895;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_(mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_(mix,mode);
});
cljs.core.async.Pub = (function (){var obj21930 = {};return obj21930;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3273__auto__ = p;if(and__3273__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3273__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__3883__auto__ = (((p == null))?null:p);return (function (){var or__3285__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3273__auto__ = p;if(and__3273__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3273__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__3883__auto__ = (((p == null))?null:p);return (function (){var or__3285__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3273__auto__ = p;if(and__3273__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3273__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__3883__auto__ = (((p == null))?null:p);return (function (){var or__3285__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3273__auto__ = p;if(and__3273__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3273__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__3883__auto__ = (((p == null))?null:p);return (function (){var or__3285__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3285__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3285__auto__,mults){
return (function (p1__21931_SHARP_){if(cljs.core.truth_((p1__21931_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__21931_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__21931_SHARP_.call(null,topic))))
{return p1__21931_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__21931_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3285__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t22046 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22046 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta22047){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta22047 = meta22047;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22046.cljs$lang$type = true;
cljs.core.async.t22046.cljs$lang$ctorStr = "cljs.core.async/t22046";
cljs.core.async.t22046.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"cljs.core.async/t22046");
});})(mults,ensure_mult))
;
cljs.core.async.t22046.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t22046.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t22046.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t22046.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t22046.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t22046.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22046.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t22046.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22048){var self__ = this;
var _22048__$1 = this;return self__.meta22047;
});})(mults,ensure_mult))
;
cljs.core.async.t22046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22048,meta22047__$1){var self__ = this;
var _22048__$1 = this;return (new cljs.core.async.t22046(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta22047__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t22046 = ((function (mults,ensure_mult){
return (function __GT_t22046(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22047){return (new cljs.core.async.t22046(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22047));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t22046(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6793__auto___22160 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_22116){var state_val_22117 = (state_22116[1]);if((state_val_22117 === 1))
{var state_22116__$1 = state_22116;var statearr_22118_22161 = state_22116__$1;(statearr_22118_22161[2] = null);
(statearr_22118_22161[1] = 2);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22117 === 2))
{var state_22116__$1 = state_22116;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22116__$1,4,ch);
} else
{if((state_val_22117 === 3))
{var inst_22114 = (state_22116[2]);var state_22116__$1 = state_22116;return cljs.core.async.impl.ioc_helpers.return_chan(state_22116__$1,inst_22114);
} else
{if((state_val_22117 === 4))
{var inst_22051 = (state_22116[7]);var inst_22051__$1 = (state_22116[2]);var inst_22052 = (inst_22051__$1 == null);var state_22116__$1 = (function (){var statearr_22119 = state_22116;(statearr_22119[7] = inst_22051__$1);
return statearr_22119;
})();if(cljs.core.truth_(inst_22052))
{var statearr_22120_22162 = state_22116__$1;(statearr_22120_22162[1] = 5);
} else
{var statearr_22121_22163 = state_22116__$1;(statearr_22121_22163[1] = 6);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_22117 === 5))
{var inst_22058 = cljs.core.deref(mults);var inst_22059 = cljs.core.vals(inst_22058);var inst_22060 = cljs.core.seq(inst_22059);var inst_22061 = inst_22060;var inst_22062 = null;var inst_22063 = 0;var inst_22064 = 0;var state_22116__$1 = (function (){var statearr_22122 = state_22116;(statearr_22122[8] = inst_22063);
(statearr_22122[9] = inst_22064);
(statearr_22122[10] = inst_22062);
(statearr_22122[11] = inst_22061);
return statearr_22122;
})();var statearr_22123_22164 = state_22116__$1;(statearr_22123_22164[2] = null);
(statearr_22123_22164[1] = 8);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22117 === 6))
{var inst_22099 = (state_22116[12]);var inst_22051 = (state_22116[7]);var inst_22099__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_22051) : topic_fn.call(null,inst_22051));var inst_22100 = cljs.core.deref(mults);var inst_22101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22100,inst_22099__$1);var inst_22102 = cljs.core.async.muxch_STAR_(inst_22101);var state_22116__$1 = (function (){var statearr_22124 = state_22116;(statearr_22124[12] = inst_22099__$1);
return statearr_22124;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22116__$1,19,inst_22102,inst_22051);
} else
{if((state_val_22117 === 7))
{var inst_22112 = (state_22116[2]);var state_22116__$1 = state_22116;var statearr_22125_22165 = state_22116__$1;(statearr_22125_22165[2] = inst_22112);
(statearr_22125_22165[1] = 3);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22117 === 8))
{var inst_22063 = (state_22116[8]);var inst_22064 = (state_22116[9]);var inst_22066 = (inst_22064 < inst_22063);var inst_22067 = inst_22066;var state_22116__$1 = state_22116;if(cljs.core.truth_(inst_22067))
{var statearr_22129_22166 = state_22116__$1;(statearr_22129_22166[1] = 10);
} else
{var statearr_22130_22167 = state_22116__$1;(statearr_22130_22167[1] = 11);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_22117 === 9))
{var inst_22097 = (state_22116[2]);var state_22116__$1 = state_22116;var statearr_22131_22168 = state_22116__$1;(statearr_22131_22168[2] = inst_22097);
(statearr_22131_22168[1] = 7);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22117 === 10))
{var inst_22063 = (state_22116[8]);var inst_22064 = (state_22116[9]);var inst_22062 = (state_22116[10]);var inst_22061 = (state_22116[11]);var inst_22069 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22062,inst_22064);var inst_22070 = cljs.core.async.muxch_STAR_(inst_22069);var inst_22071 = cljs.core.async.close_BANG_(inst_22070);var inst_22072 = (inst_22064 + 1);var tmp22126 = inst_22063;var tmp22127 = inst_22062;var tmp22128 = inst_22061;var inst_22061__$1 = tmp22128;var inst_22062__$1 = tmp22127;var inst_22063__$1 = tmp22126;var inst_22064__$1 = inst_22072;var state_22116__$1 = (function (){var statearr_22132 = state_22116;(statearr_22132[8] = inst_22063__$1);
(statearr_22132[9] = inst_22064__$1);
(statearr_22132[10] = inst_22062__$1);
(statearr_22132[11] = inst_22061__$1);
(statearr_22132[13] = inst_22071);
return statearr_22132;
})();var statearr_22133_22169 = state_22116__$1;(statearr_22133_22169[2] = null);
(statearr_22133_22169[1] = 8);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22117 === 11))
{var inst_22061 = (state_22116[11]);var inst_22075 = (state_22116[14]);var inst_22075__$1 = cljs.core.seq(inst_22061);var state_22116__$1 = (function (){var statearr_22134 = state_22116;(statearr_22134[14] = inst_22075__$1);
return statearr_22134;
})();if(inst_22075__$1)
{var statearr_22135_22170 = state_22116__$1;(statearr_22135_22170[1] = 13);
} else
{var statearr_22136_22171 = state_22116__$1;(statearr_22136_22171[1] = 14);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_22117 === 12))
{var inst_22095 = (state_22116[2]);var state_22116__$1 = state_22116;var statearr_22137_22172 = state_22116__$1;(statearr_22137_22172[2] = inst_22095);
(statearr_22137_22172[1] = 9);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22117 === 13))
{var inst_22075 = (state_22116[14]);var inst_22077 = cljs.core.chunked_seq_QMARK_(inst_22075);var state_22116__$1 = state_22116;if(inst_22077)
{var statearr_22138_22173 = state_22116__$1;(statearr_22138_22173[1] = 16);
} else
{var statearr_22139_22174 = state_22116__$1;(statearr_22139_22174[1] = 17);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_22117 === 14))
{var state_22116__$1 = state_22116;var statearr_22140_22175 = state_22116__$1;(statearr_22140_22175[2] = null);
(statearr_22140_22175[1] = 15);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22117 === 15))
{var inst_22093 = (state_22116[2]);var state_22116__$1 = state_22116;var statearr_22141_22176 = state_22116__$1;(statearr_22141_22176[2] = inst_22093);
(statearr_22141_22176[1] = 12);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22117 === 16))
{var inst_22075 = (state_22116[14]);var inst_22079 = cljs.core.chunk_first(inst_22075);var inst_22080 = cljs.core.chunk_rest(inst_22075);var inst_22081 = cljs.core.count(inst_22079);var inst_22061 = inst_22080;var inst_22062 = inst_22079;var inst_22063 = inst_22081;var inst_22064 = 0;var state_22116__$1 = (function (){var statearr_22142 = state_22116;(statearr_22142[8] = inst_22063);
(statearr_22142[9] = inst_22064);
(statearr_22142[10] = inst_22062);
(statearr_22142[11] = inst_22061);
return statearr_22142;
})();var statearr_22143_22177 = state_22116__$1;(statearr_22143_22177[2] = null);
(statearr_22143_22177[1] = 8);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22117 === 17))
{var inst_22075 = (state_22116[14]);var inst_22084 = cljs.core.first(inst_22075);var inst_22085 = cljs.core.async.muxch_STAR_(inst_22084);var inst_22086 = cljs.core.async.close_BANG_(inst_22085);var inst_22087 = cljs.core.next(inst_22075);var inst_22061 = inst_22087;var inst_22062 = null;var inst_22063 = 0;var inst_22064 = 0;var state_22116__$1 = (function (){var statearr_22144 = state_22116;(statearr_22144[8] = inst_22063);
(statearr_22144[9] = inst_22064);
(statearr_22144[10] = inst_22062);
(statearr_22144[11] = inst_22061);
(statearr_22144[15] = inst_22086);
return statearr_22144;
})();var statearr_22145_22178 = state_22116__$1;(statearr_22145_22178[2] = null);
(statearr_22145_22178[1] = 8);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22117 === 18))
{var inst_22090 = (state_22116[2]);var state_22116__$1 = state_22116;var statearr_22146_22179 = state_22116__$1;(statearr_22146_22179[2] = inst_22090);
(statearr_22146_22179[1] = 15);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22117 === 19))
{var inst_22104 = (state_22116[2]);var state_22116__$1 = state_22116;if(cljs.core.truth_(inst_22104))
{var statearr_22147_22180 = state_22116__$1;(statearr_22147_22180[1] = 20);
} else
{var statearr_22148_22181 = state_22116__$1;(statearr_22148_22181[1] = 21);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_22117 === 20))
{var state_22116__$1 = state_22116;var statearr_22149_22182 = state_22116__$1;(statearr_22149_22182[2] = null);
(statearr_22149_22182[1] = 22);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22117 === 21))
{var inst_22099 = (state_22116[12]);var inst_22107 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_22099);var state_22116__$1 = state_22116;var statearr_22150_22183 = state_22116__$1;(statearr_22150_22183[2] = inst_22107);
(statearr_22150_22183[1] = 22);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22117 === 22))
{var inst_22109 = (state_22116[2]);var state_22116__$1 = (function (){var statearr_22151 = state_22116;(statearr_22151[16] = inst_22109);
return statearr_22151;
})();var statearr_22152_22184 = state_22116__$1;(statearr_22152_22184[2] = null);
(statearr_22152_22184[1] = 2);
return cljs.core.constant$keyword$51;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_22156 = (new Array(17));(statearr_22156[0] = state_machine__6724__auto__);
(statearr_22156[1] = 1);
return statearr_22156;
});
var state_machine__6724__auto____1 = (function (state_22116){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_22116);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$51))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e22157){if((e22157 instanceof Object))
{var ex__6727__auto__ = e22157;var statearr_22158_22185 = state_22116;(statearr_22158_22185[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22116);
return cljs.core.constant$keyword$51;
} else
{if(cljs.core.constant$keyword$6)
{throw e22157;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$51))
{{
var G__22186 = state_22116;
state_22116 = G__22186;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_22116){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_22116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_22159 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_22159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto___22160);
return statearr_22159;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__6793__auto___22323 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_22293){var state_val_22294 = (state_22293[1]);if((state_val_22294 === 1))
{var state_22293__$1 = state_22293;var statearr_22295_22324 = state_22293__$1;(statearr_22295_22324[2] = null);
(statearr_22295_22324[1] = 2);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22294 === 2))
{var inst_22256 = cljs.core.reset_BANG_(dctr,cnt);var inst_22257 = 0;var state_22293__$1 = (function (){var statearr_22296 = state_22293;(statearr_22296[7] = inst_22257);
(statearr_22296[8] = inst_22256);
return statearr_22296;
})();var statearr_22297_22325 = state_22293__$1;(statearr_22297_22325[2] = null);
(statearr_22297_22325[1] = 4);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22294 === 3))
{var inst_22291 = (state_22293[2]);var state_22293__$1 = state_22293;return cljs.core.async.impl.ioc_helpers.return_chan(state_22293__$1,inst_22291);
} else
{if((state_val_22294 === 4))
{var inst_22257 = (state_22293[7]);var inst_22259 = (inst_22257 < cnt);var state_22293__$1 = state_22293;if(cljs.core.truth_(inst_22259))
{var statearr_22298_22326 = state_22293__$1;(statearr_22298_22326[1] = 6);
} else
{var statearr_22299_22327 = state_22293__$1;(statearr_22299_22327[1] = 7);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_22294 === 5))
{var inst_22277 = (state_22293[2]);var state_22293__$1 = (function (){var statearr_22300 = state_22293;(statearr_22300[9] = inst_22277);
return statearr_22300;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22293__$1,12,dchan);
} else
{if((state_val_22294 === 6))
{var state_22293__$1 = state_22293;var statearr_22301_22328 = state_22293__$1;(statearr_22301_22328[2] = null);
(statearr_22301_22328[1] = 11);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22294 === 7))
{var state_22293__$1 = state_22293;var statearr_22302_22329 = state_22293__$1;(statearr_22302_22329[2] = null);
(statearr_22302_22329[1] = 8);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22294 === 8))
{var inst_22275 = (state_22293[2]);var state_22293__$1 = state_22293;var statearr_22303_22330 = state_22293__$1;(statearr_22303_22330[2] = inst_22275);
(statearr_22303_22330[1] = 5);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22294 === 9))
{var inst_22257 = (state_22293[7]);var inst_22270 = (state_22293[2]);var inst_22271 = (inst_22257 + 1);var inst_22257__$1 = inst_22271;var state_22293__$1 = (function (){var statearr_22304 = state_22293;(statearr_22304[10] = inst_22270);
(statearr_22304[7] = inst_22257__$1);
return statearr_22304;
})();var statearr_22305_22331 = state_22293__$1;(statearr_22305_22331[2] = null);
(statearr_22305_22331[1] = 4);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22294 === 10))
{var inst_22261 = (state_22293[2]);var inst_22262 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_22293__$1 = (function (){var statearr_22306 = state_22293;(statearr_22306[11] = inst_22261);
return statearr_22306;
})();var statearr_22307_22332 = state_22293__$1;(statearr_22307_22332[2] = inst_22262);
cljs.core.async.impl.ioc_helpers.process_exception(state_22293__$1);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22294 === 11))
{var inst_22257 = (state_22293[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22293,10,Object,null,9);var inst_22266 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_22257) : chs__$1.call(null,inst_22257));var inst_22267 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_22257) : done.call(null,inst_22257));var inst_22268 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_22266,inst_22267);var state_22293__$1 = state_22293;var statearr_22308_22333 = state_22293__$1;(statearr_22308_22333[2] = inst_22268);
cljs.core.async.impl.ioc_helpers.process_exception(state_22293__$1);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22294 === 12))
{var inst_22279 = (state_22293[12]);var inst_22279__$1 = (state_22293[2]);var inst_22280 = cljs.core.some(cljs.core.nil_QMARK_,inst_22279__$1);var state_22293__$1 = (function (){var statearr_22309 = state_22293;(statearr_22309[12] = inst_22279__$1);
return statearr_22309;
})();if(cljs.core.truth_(inst_22280))
{var statearr_22310_22334 = state_22293__$1;(statearr_22310_22334[1] = 13);
} else
{var statearr_22311_22335 = state_22293__$1;(statearr_22311_22335[1] = 14);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_22294 === 13))
{var inst_22282 = cljs.core.async.close_BANG_(out);var state_22293__$1 = state_22293;var statearr_22312_22336 = state_22293__$1;(statearr_22312_22336[2] = inst_22282);
(statearr_22312_22336[1] = 15);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22294 === 14))
{var inst_22279 = (state_22293[12]);var inst_22284 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_22279);var state_22293__$1 = state_22293;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22293__$1,16,out,inst_22284);
} else
{if((state_val_22294 === 15))
{var inst_22289 = (state_22293[2]);var state_22293__$1 = state_22293;var statearr_22313_22337 = state_22293__$1;(statearr_22313_22337[2] = inst_22289);
(statearr_22313_22337[1] = 3);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22294 === 16))
{var inst_22286 = (state_22293[2]);var state_22293__$1 = (function (){var statearr_22314 = state_22293;(statearr_22314[13] = inst_22286);
return statearr_22314;
})();var statearr_22315_22338 = state_22293__$1;(statearr_22315_22338[2] = null);
(statearr_22315_22338[1] = 2);
return cljs.core.constant$keyword$51;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_22319 = (new Array(14));(statearr_22319[0] = state_machine__6724__auto__);
(statearr_22319[1] = 1);
return statearr_22319;
});
var state_machine__6724__auto____1 = (function (state_22293){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_22293);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$51))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e22320){if((e22320 instanceof Object))
{var ex__6727__auto__ = e22320;var statearr_22321_22339 = state_22293;(statearr_22321_22339[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22293);
return cljs.core.constant$keyword$51;
} else
{if(cljs.core.constant$keyword$6)
{throw e22320;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$51))
{{
var G__22340 = state_22293;
state_22293 = G__22340;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_22293){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_22293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_22322 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_22322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto___22323);
return statearr_22322;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6793__auto___22448 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_22424){var state_val_22425 = (state_22424[1]);if((state_val_22425 === 1))
{var inst_22395 = cljs.core.vec(chs);var inst_22396 = inst_22395;var state_22424__$1 = (function (){var statearr_22426 = state_22424;(statearr_22426[7] = inst_22396);
return statearr_22426;
})();var statearr_22427_22449 = state_22424__$1;(statearr_22427_22449[2] = null);
(statearr_22427_22449[1] = 2);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22425 === 2))
{var inst_22396 = (state_22424[7]);var inst_22398 = cljs.core.count(inst_22396);var inst_22399 = (inst_22398 > 0);var state_22424__$1 = state_22424;if(cljs.core.truth_(inst_22399))
{var statearr_22428_22450 = state_22424__$1;(statearr_22428_22450[1] = 4);
} else
{var statearr_22429_22451 = state_22424__$1;(statearr_22429_22451[1] = 5);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_22425 === 3))
{var inst_22422 = (state_22424[2]);var state_22424__$1 = state_22424;return cljs.core.async.impl.ioc_helpers.return_chan(state_22424__$1,inst_22422);
} else
{if((state_val_22425 === 4))
{var inst_22396 = (state_22424[7]);var state_22424__$1 = state_22424;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_22424__$1,7,inst_22396);
} else
{if((state_val_22425 === 5))
{var inst_22418 = cljs.core.async.close_BANG_(out);var state_22424__$1 = state_22424;var statearr_22430_22452 = state_22424__$1;(statearr_22430_22452[2] = inst_22418);
(statearr_22430_22452[1] = 6);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22425 === 6))
{var inst_22420 = (state_22424[2]);var state_22424__$1 = state_22424;var statearr_22431_22453 = state_22424__$1;(statearr_22431_22453[2] = inst_22420);
(statearr_22431_22453[1] = 3);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22425 === 7))
{var inst_22403 = (state_22424[8]);var inst_22404 = (state_22424[9]);var inst_22403__$1 = (state_22424[2]);var inst_22404__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22403__$1,0,null);var inst_22405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22403__$1,1,null);var inst_22406 = (inst_22404__$1 == null);var state_22424__$1 = (function (){var statearr_22432 = state_22424;(statearr_22432[10] = inst_22405);
(statearr_22432[8] = inst_22403__$1);
(statearr_22432[9] = inst_22404__$1);
return statearr_22432;
})();if(cljs.core.truth_(inst_22406))
{var statearr_22433_22454 = state_22424__$1;(statearr_22433_22454[1] = 8);
} else
{var statearr_22434_22455 = state_22424__$1;(statearr_22434_22455[1] = 9);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_22425 === 8))
{var inst_22405 = (state_22424[10]);var inst_22396 = (state_22424[7]);var inst_22403 = (state_22424[8]);var inst_22404 = (state_22424[9]);var inst_22408 = (function (){var c = inst_22405;var v = inst_22404;var vec__22401 = inst_22403;var cs = inst_22396;return ((function (c,v,vec__22401,cs,inst_22405,inst_22396,inst_22403,inst_22404,state_val_22425){
return (function (p1__22341_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__22341_SHARP_);
});
;})(c,v,vec__22401,cs,inst_22405,inst_22396,inst_22403,inst_22404,state_val_22425))
})();var inst_22409 = cljs.core.filterv(inst_22408,inst_22396);var inst_22396__$1 = inst_22409;var state_22424__$1 = (function (){var statearr_22435 = state_22424;(statearr_22435[7] = inst_22396__$1);
return statearr_22435;
})();var statearr_22436_22456 = state_22424__$1;(statearr_22436_22456[2] = null);
(statearr_22436_22456[1] = 2);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22425 === 9))
{var inst_22404 = (state_22424[9]);var state_22424__$1 = state_22424;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22424__$1,11,out,inst_22404);
} else
{if((state_val_22425 === 10))
{var inst_22416 = (state_22424[2]);var state_22424__$1 = state_22424;var statearr_22438_22457 = state_22424__$1;(statearr_22438_22457[2] = inst_22416);
(statearr_22438_22457[1] = 6);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22425 === 11))
{var inst_22396 = (state_22424[7]);var inst_22413 = (state_22424[2]);var tmp22437 = inst_22396;var inst_22396__$1 = tmp22437;var state_22424__$1 = (function (){var statearr_22439 = state_22424;(statearr_22439[7] = inst_22396__$1);
(statearr_22439[11] = inst_22413);
return statearr_22439;
})();var statearr_22440_22458 = state_22424__$1;(statearr_22440_22458[2] = null);
(statearr_22440_22458[1] = 2);
return cljs.core.constant$keyword$51;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_22444 = (new Array(12));(statearr_22444[0] = state_machine__6724__auto__);
(statearr_22444[1] = 1);
return statearr_22444;
});
var state_machine__6724__auto____1 = (function (state_22424){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_22424);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$51))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e22445){if((e22445 instanceof Object))
{var ex__6727__auto__ = e22445;var statearr_22446_22459 = state_22424;(statearr_22446_22459[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22424);
return cljs.core.constant$keyword$51;
} else
{if(cljs.core.constant$keyword$6)
{throw e22445;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$51))
{{
var G__22460 = state_22424;
state_22424 = G__22460;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_22424){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_22424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_22447 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_22447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto___22448);
return statearr_22447;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6793__auto___22553 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_22530){var state_val_22531 = (state_22530[1]);if((state_val_22531 === 1))
{var inst_22507 = 0;var state_22530__$1 = (function (){var statearr_22532 = state_22530;(statearr_22532[7] = inst_22507);
return statearr_22532;
})();var statearr_22533_22554 = state_22530__$1;(statearr_22533_22554[2] = null);
(statearr_22533_22554[1] = 2);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22531 === 2))
{var inst_22507 = (state_22530[7]);var inst_22509 = (inst_22507 < n);var state_22530__$1 = state_22530;if(cljs.core.truth_(inst_22509))
{var statearr_22534_22555 = state_22530__$1;(statearr_22534_22555[1] = 4);
} else
{var statearr_22535_22556 = state_22530__$1;(statearr_22535_22556[1] = 5);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_22531 === 3))
{var inst_22527 = (state_22530[2]);var inst_22528 = cljs.core.async.close_BANG_(out);var state_22530__$1 = (function (){var statearr_22536 = state_22530;(statearr_22536[8] = inst_22527);
return statearr_22536;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_22530__$1,inst_22528);
} else
{if((state_val_22531 === 4))
{var state_22530__$1 = state_22530;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22530__$1,7,ch);
} else
{if((state_val_22531 === 5))
{var state_22530__$1 = state_22530;var statearr_22537_22557 = state_22530__$1;(statearr_22537_22557[2] = null);
(statearr_22537_22557[1] = 6);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22531 === 6))
{var inst_22525 = (state_22530[2]);var state_22530__$1 = state_22530;var statearr_22538_22558 = state_22530__$1;(statearr_22538_22558[2] = inst_22525);
(statearr_22538_22558[1] = 3);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22531 === 7))
{var inst_22512 = (state_22530[9]);var inst_22512__$1 = (state_22530[2]);var inst_22513 = (inst_22512__$1 == null);var inst_22514 = cljs.core.not(inst_22513);var state_22530__$1 = (function (){var statearr_22539 = state_22530;(statearr_22539[9] = inst_22512__$1);
return statearr_22539;
})();if(inst_22514)
{var statearr_22540_22559 = state_22530__$1;(statearr_22540_22559[1] = 8);
} else
{var statearr_22541_22560 = state_22530__$1;(statearr_22541_22560[1] = 9);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_22531 === 8))
{var inst_22512 = (state_22530[9]);var state_22530__$1 = state_22530;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22530__$1,11,out,inst_22512);
} else
{if((state_val_22531 === 9))
{var state_22530__$1 = state_22530;var statearr_22542_22561 = state_22530__$1;(statearr_22542_22561[2] = null);
(statearr_22542_22561[1] = 10);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22531 === 10))
{var inst_22522 = (state_22530[2]);var state_22530__$1 = state_22530;var statearr_22543_22562 = state_22530__$1;(statearr_22543_22562[2] = inst_22522);
(statearr_22543_22562[1] = 6);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22531 === 11))
{var inst_22507 = (state_22530[7]);var inst_22517 = (state_22530[2]);var inst_22518 = (inst_22507 + 1);var inst_22507__$1 = inst_22518;var state_22530__$1 = (function (){var statearr_22544 = state_22530;(statearr_22544[10] = inst_22517);
(statearr_22544[7] = inst_22507__$1);
return statearr_22544;
})();var statearr_22545_22563 = state_22530__$1;(statearr_22545_22563[2] = null);
(statearr_22545_22563[1] = 2);
return cljs.core.constant$keyword$51;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_22549 = (new Array(11));(statearr_22549[0] = state_machine__6724__auto__);
(statearr_22549[1] = 1);
return statearr_22549;
});
var state_machine__6724__auto____1 = (function (state_22530){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_22530);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$51))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e22550){if((e22550 instanceof Object))
{var ex__6727__auto__ = e22550;var statearr_22551_22564 = state_22530;(statearr_22551_22564[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22530);
return cljs.core.constant$keyword$51;
} else
{if(cljs.core.constant$keyword$6)
{throw e22550;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$51))
{{
var G__22565 = state_22530;
state_22530 = G__22565;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_22530){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_22530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_22552 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_22552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto___22553);
return statearr_22552;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6793__auto___22662 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_22637){var state_val_22638 = (state_22637[1]);if((state_val_22638 === 1))
{var inst_22614 = null;var state_22637__$1 = (function (){var statearr_22639 = state_22637;(statearr_22639[7] = inst_22614);
return statearr_22639;
})();var statearr_22640_22663 = state_22637__$1;(statearr_22640_22663[2] = null);
(statearr_22640_22663[1] = 2);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22638 === 2))
{var state_22637__$1 = state_22637;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22637__$1,4,ch);
} else
{if((state_val_22638 === 3))
{var inst_22634 = (state_22637[2]);var inst_22635 = cljs.core.async.close_BANG_(out);var state_22637__$1 = (function (){var statearr_22641 = state_22637;(statearr_22641[8] = inst_22634);
return statearr_22641;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_22637__$1,inst_22635);
} else
{if((state_val_22638 === 4))
{var inst_22617 = (state_22637[9]);var inst_22617__$1 = (state_22637[2]);var inst_22618 = (inst_22617__$1 == null);var inst_22619 = cljs.core.not(inst_22618);var state_22637__$1 = (function (){var statearr_22642 = state_22637;(statearr_22642[9] = inst_22617__$1);
return statearr_22642;
})();if(inst_22619)
{var statearr_22643_22664 = state_22637__$1;(statearr_22643_22664[1] = 5);
} else
{var statearr_22644_22665 = state_22637__$1;(statearr_22644_22665[1] = 6);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_22638 === 5))
{var inst_22614 = (state_22637[7]);var inst_22617 = (state_22637[9]);var inst_22621 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22617,inst_22614);var state_22637__$1 = state_22637;if(inst_22621)
{var statearr_22645_22666 = state_22637__$1;(statearr_22645_22666[1] = 8);
} else
{var statearr_22646_22667 = state_22637__$1;(statearr_22646_22667[1] = 9);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_22638 === 6))
{var state_22637__$1 = state_22637;var statearr_22648_22668 = state_22637__$1;(statearr_22648_22668[2] = null);
(statearr_22648_22668[1] = 7);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22638 === 7))
{var inst_22632 = (state_22637[2]);var state_22637__$1 = state_22637;var statearr_22649_22669 = state_22637__$1;(statearr_22649_22669[2] = inst_22632);
(statearr_22649_22669[1] = 3);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22638 === 8))
{var inst_22614 = (state_22637[7]);var tmp22647 = inst_22614;var inst_22614__$1 = tmp22647;var state_22637__$1 = (function (){var statearr_22650 = state_22637;(statearr_22650[7] = inst_22614__$1);
return statearr_22650;
})();var statearr_22651_22670 = state_22637__$1;(statearr_22651_22670[2] = null);
(statearr_22651_22670[1] = 2);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22638 === 9))
{var inst_22617 = (state_22637[9]);var state_22637__$1 = state_22637;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22637__$1,11,out,inst_22617);
} else
{if((state_val_22638 === 10))
{var inst_22629 = (state_22637[2]);var state_22637__$1 = state_22637;var statearr_22652_22671 = state_22637__$1;(statearr_22652_22671[2] = inst_22629);
(statearr_22652_22671[1] = 7);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22638 === 11))
{var inst_22617 = (state_22637[9]);var inst_22626 = (state_22637[2]);var inst_22614 = inst_22617;var state_22637__$1 = (function (){var statearr_22653 = state_22637;(statearr_22653[7] = inst_22614);
(statearr_22653[10] = inst_22626);
return statearr_22653;
})();var statearr_22654_22672 = state_22637__$1;(statearr_22654_22672[2] = null);
(statearr_22654_22672[1] = 2);
return cljs.core.constant$keyword$51;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_22658 = (new Array(11));(statearr_22658[0] = state_machine__6724__auto__);
(statearr_22658[1] = 1);
return statearr_22658;
});
var state_machine__6724__auto____1 = (function (state_22637){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_22637);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$51))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e22659){if((e22659 instanceof Object))
{var ex__6727__auto__ = e22659;var statearr_22660_22673 = state_22637;(statearr_22660_22673[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22637);
return cljs.core.constant$keyword$51;
} else
{if(cljs.core.constant$keyword$6)
{throw e22659;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$51))
{{
var G__22674 = state_22637;
state_22637 = G__22674;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_22637){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_22637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_22661 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_22661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto___22662);
return statearr_22661;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6793__auto___22809 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_22779){var state_val_22780 = (state_22779[1]);if((state_val_22780 === 1))
{var inst_22742 = (new Array(n));var inst_22743 = inst_22742;var inst_22744 = 0;var state_22779__$1 = (function (){var statearr_22781 = state_22779;(statearr_22781[7] = inst_22743);
(statearr_22781[8] = inst_22744);
return statearr_22781;
})();var statearr_22782_22810 = state_22779__$1;(statearr_22782_22810[2] = null);
(statearr_22782_22810[1] = 2);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22780 === 2))
{var state_22779__$1 = state_22779;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22779__$1,4,ch);
} else
{if((state_val_22780 === 3))
{var inst_22777 = (state_22779[2]);var state_22779__$1 = state_22779;return cljs.core.async.impl.ioc_helpers.return_chan(state_22779__$1,inst_22777);
} else
{if((state_val_22780 === 4))
{var inst_22747 = (state_22779[9]);var inst_22747__$1 = (state_22779[2]);var inst_22748 = (inst_22747__$1 == null);var inst_22749 = cljs.core.not(inst_22748);var state_22779__$1 = (function (){var statearr_22783 = state_22779;(statearr_22783[9] = inst_22747__$1);
return statearr_22783;
})();if(inst_22749)
{var statearr_22784_22811 = state_22779__$1;(statearr_22784_22811[1] = 5);
} else
{var statearr_22785_22812 = state_22779__$1;(statearr_22785_22812[1] = 6);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_22780 === 5))
{var inst_22752 = (state_22779[10]);var inst_22743 = (state_22779[7]);var inst_22744 = (state_22779[8]);var inst_22747 = (state_22779[9]);var inst_22751 = (inst_22743[inst_22744] = inst_22747);var inst_22752__$1 = (inst_22744 + 1);var inst_22753 = (inst_22752__$1 < n);var state_22779__$1 = (function (){var statearr_22786 = state_22779;(statearr_22786[10] = inst_22752__$1);
(statearr_22786[11] = inst_22751);
return statearr_22786;
})();if(cljs.core.truth_(inst_22753))
{var statearr_22787_22813 = state_22779__$1;(statearr_22787_22813[1] = 8);
} else
{var statearr_22788_22814 = state_22779__$1;(statearr_22788_22814[1] = 9);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_22780 === 6))
{var inst_22744 = (state_22779[8]);var inst_22765 = (inst_22744 > 0);var state_22779__$1 = state_22779;if(cljs.core.truth_(inst_22765))
{var statearr_22790_22815 = state_22779__$1;(statearr_22790_22815[1] = 12);
} else
{var statearr_22791_22816 = state_22779__$1;(statearr_22791_22816[1] = 13);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_22780 === 7))
{var inst_22775 = (state_22779[2]);var state_22779__$1 = state_22779;var statearr_22792_22817 = state_22779__$1;(statearr_22792_22817[2] = inst_22775);
(statearr_22792_22817[1] = 3);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22780 === 8))
{var inst_22752 = (state_22779[10]);var inst_22743 = (state_22779[7]);var tmp22789 = inst_22743;var inst_22743__$1 = tmp22789;var inst_22744 = inst_22752;var state_22779__$1 = (function (){var statearr_22793 = state_22779;(statearr_22793[7] = inst_22743__$1);
(statearr_22793[8] = inst_22744);
return statearr_22793;
})();var statearr_22794_22818 = state_22779__$1;(statearr_22794_22818[2] = null);
(statearr_22794_22818[1] = 2);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22780 === 9))
{var inst_22743 = (state_22779[7]);var inst_22757 = cljs.core.vec(inst_22743);var state_22779__$1 = state_22779;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22779__$1,11,out,inst_22757);
} else
{if((state_val_22780 === 10))
{var inst_22763 = (state_22779[2]);var state_22779__$1 = state_22779;var statearr_22795_22819 = state_22779__$1;(statearr_22795_22819[2] = inst_22763);
(statearr_22795_22819[1] = 7);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22780 === 11))
{var inst_22759 = (state_22779[2]);var inst_22760 = (new Array(n));var inst_22743 = inst_22760;var inst_22744 = 0;var state_22779__$1 = (function (){var statearr_22796 = state_22779;(statearr_22796[12] = inst_22759);
(statearr_22796[7] = inst_22743);
(statearr_22796[8] = inst_22744);
return statearr_22796;
})();var statearr_22797_22820 = state_22779__$1;(statearr_22797_22820[2] = null);
(statearr_22797_22820[1] = 2);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22780 === 12))
{var inst_22743 = (state_22779[7]);var inst_22767 = cljs.core.vec(inst_22743);var state_22779__$1 = state_22779;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22779__$1,15,out,inst_22767);
} else
{if((state_val_22780 === 13))
{var state_22779__$1 = state_22779;var statearr_22798_22821 = state_22779__$1;(statearr_22798_22821[2] = null);
(statearr_22798_22821[1] = 14);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22780 === 14))
{var inst_22772 = (state_22779[2]);var inst_22773 = cljs.core.async.close_BANG_(out);var state_22779__$1 = (function (){var statearr_22799 = state_22779;(statearr_22799[13] = inst_22772);
return statearr_22799;
})();var statearr_22800_22822 = state_22779__$1;(statearr_22800_22822[2] = inst_22773);
(statearr_22800_22822[1] = 7);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22780 === 15))
{var inst_22769 = (state_22779[2]);var state_22779__$1 = state_22779;var statearr_22801_22823 = state_22779__$1;(statearr_22801_22823[2] = inst_22769);
(statearr_22801_22823[1] = 14);
return cljs.core.constant$keyword$51;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_22805 = (new Array(14));(statearr_22805[0] = state_machine__6724__auto__);
(statearr_22805[1] = 1);
return statearr_22805;
});
var state_machine__6724__auto____1 = (function (state_22779){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_22779);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$51))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e22806){if((e22806 instanceof Object))
{var ex__6727__auto__ = e22806;var statearr_22807_22824 = state_22779;(statearr_22807_22824[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22779);
return cljs.core.constant$keyword$51;
} else
{if(cljs.core.constant$keyword$6)
{throw e22806;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$51))
{{
var G__22825 = state_22779;
state_22779 = G__22825;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_22779){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_22779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_22808 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_22808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto___22809);
return statearr_22808;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__6793__auto___22968 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_22938){var state_val_22939 = (state_22938[1]);if((state_val_22939 === 1))
{var inst_22897 = (new Array(0));var inst_22898 = inst_22897;var inst_22899 = cljs.core.constant$keyword$63;var state_22938__$1 = (function (){var statearr_22940 = state_22938;(statearr_22940[7] = inst_22898);
(statearr_22940[8] = inst_22899);
return statearr_22940;
})();var statearr_22941_22969 = state_22938__$1;(statearr_22941_22969[2] = null);
(statearr_22941_22969[1] = 2);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22939 === 2))
{var state_22938__$1 = state_22938;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22938__$1,4,ch);
} else
{if((state_val_22939 === 3))
{var inst_22936 = (state_22938[2]);var state_22938__$1 = state_22938;return cljs.core.async.impl.ioc_helpers.return_chan(state_22938__$1,inst_22936);
} else
{if((state_val_22939 === 4))
{var inst_22902 = (state_22938[9]);var inst_22902__$1 = (state_22938[2]);var inst_22903 = (inst_22902__$1 == null);var inst_22904 = cljs.core.not(inst_22903);var state_22938__$1 = (function (){var statearr_22942 = state_22938;(statearr_22942[9] = inst_22902__$1);
return statearr_22942;
})();if(inst_22904)
{var statearr_22943_22970 = state_22938__$1;(statearr_22943_22970[1] = 5);
} else
{var statearr_22944_22971 = state_22938__$1;(statearr_22944_22971[1] = 6);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_22939 === 5))
{var inst_22899 = (state_22938[8]);var inst_22902 = (state_22938[9]);var inst_22906 = (state_22938[10]);var inst_22906__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_22902) : f.call(null,inst_22902));var inst_22907 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22906__$1,inst_22899);var inst_22908 = cljs.core.keyword_identical_QMARK_(inst_22899,cljs.core.constant$keyword$63);var inst_22909 = (inst_22907) || (inst_22908);var state_22938__$1 = (function (){var statearr_22945 = state_22938;(statearr_22945[10] = inst_22906__$1);
return statearr_22945;
})();if(cljs.core.truth_(inst_22909))
{var statearr_22946_22972 = state_22938__$1;(statearr_22946_22972[1] = 8);
} else
{var statearr_22947_22973 = state_22938__$1;(statearr_22947_22973[1] = 9);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_22939 === 6))
{var inst_22898 = (state_22938[7]);var inst_22923 = inst_22898.length;var inst_22924 = (inst_22923 > 0);var state_22938__$1 = state_22938;if(cljs.core.truth_(inst_22924))
{var statearr_22949_22974 = state_22938__$1;(statearr_22949_22974[1] = 12);
} else
{var statearr_22950_22975 = state_22938__$1;(statearr_22950_22975[1] = 13);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_22939 === 7))
{var inst_22934 = (state_22938[2]);var state_22938__$1 = state_22938;var statearr_22951_22976 = state_22938__$1;(statearr_22951_22976[2] = inst_22934);
(statearr_22951_22976[1] = 3);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22939 === 8))
{var inst_22898 = (state_22938[7]);var inst_22902 = (state_22938[9]);var inst_22906 = (state_22938[10]);var inst_22911 = inst_22898.push(inst_22902);var tmp22948 = inst_22898;var inst_22898__$1 = tmp22948;var inst_22899 = inst_22906;var state_22938__$1 = (function (){var statearr_22952 = state_22938;(statearr_22952[11] = inst_22911);
(statearr_22952[7] = inst_22898__$1);
(statearr_22952[8] = inst_22899);
return statearr_22952;
})();var statearr_22953_22977 = state_22938__$1;(statearr_22953_22977[2] = null);
(statearr_22953_22977[1] = 2);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22939 === 9))
{var inst_22898 = (state_22938[7]);var inst_22914 = cljs.core.vec(inst_22898);var state_22938__$1 = state_22938;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22938__$1,11,out,inst_22914);
} else
{if((state_val_22939 === 10))
{var inst_22921 = (state_22938[2]);var state_22938__$1 = state_22938;var statearr_22954_22978 = state_22938__$1;(statearr_22954_22978[2] = inst_22921);
(statearr_22954_22978[1] = 7);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22939 === 11))
{var inst_22902 = (state_22938[9]);var inst_22906 = (state_22938[10]);var inst_22916 = (state_22938[2]);var inst_22917 = (new Array(0));var inst_22918 = inst_22917.push(inst_22902);var inst_22898 = inst_22917;var inst_22899 = inst_22906;var state_22938__$1 = (function (){var statearr_22955 = state_22938;(statearr_22955[12] = inst_22918);
(statearr_22955[13] = inst_22916);
(statearr_22955[7] = inst_22898);
(statearr_22955[8] = inst_22899);
return statearr_22955;
})();var statearr_22956_22979 = state_22938__$1;(statearr_22956_22979[2] = null);
(statearr_22956_22979[1] = 2);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22939 === 12))
{var inst_22898 = (state_22938[7]);var inst_22926 = cljs.core.vec(inst_22898);var state_22938__$1 = state_22938;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22938__$1,15,out,inst_22926);
} else
{if((state_val_22939 === 13))
{var state_22938__$1 = state_22938;var statearr_22957_22980 = state_22938__$1;(statearr_22957_22980[2] = null);
(statearr_22957_22980[1] = 14);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22939 === 14))
{var inst_22931 = (state_22938[2]);var inst_22932 = cljs.core.async.close_BANG_(out);var state_22938__$1 = (function (){var statearr_22958 = state_22938;(statearr_22958[14] = inst_22931);
return statearr_22958;
})();var statearr_22959_22981 = state_22938__$1;(statearr_22959_22981[2] = inst_22932);
(statearr_22959_22981[1] = 7);
return cljs.core.constant$keyword$51;
} else
{if((state_val_22939 === 15))
{var inst_22928 = (state_22938[2]);var state_22938__$1 = state_22938;var statearr_22960_22982 = state_22938__$1;(statearr_22960_22982[2] = inst_22928);
(statearr_22960_22982[1] = 14);
return cljs.core.constant$keyword$51;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_22964 = (new Array(15));(statearr_22964[0] = state_machine__6724__auto__);
(statearr_22964[1] = 1);
return statearr_22964;
});
var state_machine__6724__auto____1 = (function (state_22938){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_22938);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$51))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e22965){if((e22965 instanceof Object))
{var ex__6727__auto__ = e22965;var statearr_22966_22983 = state_22938;(statearr_22966_22983[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22938);
return cljs.core.constant$keyword$51;
} else
{if(cljs.core.constant$keyword$6)
{throw e22965;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$51))
{{
var G__22984 = state_22938;
state_22938 = G__22984;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_22938){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_22938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_22967 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_22967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto___22968);
return statearr_22967;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
