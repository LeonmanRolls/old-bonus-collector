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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t37681 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37681 = (function (f,fn_handler,meta37682){
this.f = f;
this.fn_handler = fn_handler;
this.meta37682 = meta37682;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37681.cljs$lang$type = true;
cljs.core.async.t37681.cljs$lang$ctorStr = "cljs.core.async/t37681";
cljs.core.async.t37681.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"cljs.core.async/t37681");
});
cljs.core.async.t37681.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t37681.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t37681.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t37681.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37683){var self__ = this;
var _37683__$1 = this;return self__.meta37682;
});
cljs.core.async.t37681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37683,meta37682__$1){var self__ = this;
var _37683__$1 = this;return (new cljs.core.async.t37681(self__.f,self__.fn_handler,meta37682__$1));
});
cljs.core.async.__GT_t37681 = (function __GT_t37681(f__$1,fn_handler__$1,meta37682){return (new cljs.core.async.t37681(f__$1,fn_handler__$1,meta37682));
});
}
return (new cljs.core.async.t37681(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__37685 = buff;if(G__37685)
{var bit__3906__auto__ = null;if(cljs.core.truth_((function (){var or__3285__auto__ = bit__3906__auto__;if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return G__37685.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__37685.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__37685);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__37685);
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
{var val_37686 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37686) : fn1.call(null,val_37686));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37686) : fn1.call(null,val_37686));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4103__auto___37687 = n;var x_37688 = 0;while(true){
if((x_37688 < n__4103__auto___37687))
{(a[x_37688] = 0);
{
var G__37689 = (x_37688 + 1);
x_37688 = G__37689;
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
var G__37690 = (i + 1);
i = G__37690;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t37694 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37694 = (function (flag,alt_flag,meta37695){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta37695 = meta37695;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37694.cljs$lang$type = true;
cljs.core.async.t37694.cljs$lang$ctorStr = "cljs.core.async/t37694";
cljs.core.async.t37694.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"cljs.core.async/t37694");
});
cljs.core.async.t37694.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t37694.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t37694.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t37694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37696){var self__ = this;
var _37696__$1 = this;return self__.meta37695;
});
cljs.core.async.t37694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37696,meta37695__$1){var self__ = this;
var _37696__$1 = this;return (new cljs.core.async.t37694(self__.flag,self__.alt_flag,meta37695__$1));
});
cljs.core.async.__GT_t37694 = (function __GT_t37694(flag__$1,alt_flag__$1,meta37695){return (new cljs.core.async.t37694(flag__$1,alt_flag__$1,meta37695));
});
}
return (new cljs.core.async.t37694(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t37700 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37700 = (function (cb,flag,alt_handler,meta37701){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta37701 = meta37701;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37700.cljs$lang$type = true;
cljs.core.async.t37700.cljs$lang$ctorStr = "cljs.core.async/t37700";
cljs.core.async.t37700.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"cljs.core.async/t37700");
});
cljs.core.async.t37700.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t37700.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t37700.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t37700.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37702){var self__ = this;
var _37702__$1 = this;return self__.meta37701;
});
cljs.core.async.t37700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37702,meta37701__$1){var self__ = this;
var _37702__$1 = this;return (new cljs.core.async.t37700(self__.cb,self__.flag,self__.alt_handler,meta37701__$1));
});
cljs.core.async.__GT_t37700 = (function __GT_t37700(cb__$1,flag__$1,alt_handler__$1,meta37701){return (new cljs.core.async.t37700(cb__$1,flag__$1,alt_handler__$1,meta37701));
});
}
return (new cljs.core.async.t37700(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$142.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37703_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37703_SHARP_,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37703_SHARP_,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37704_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37704_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37704_SHARP_,port], null)));
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
var G__37705 = (i + 1);
i = G__37705;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$130))
{var temp__4092__auto__ = (function (){var and__3273__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3273__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3273__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$130], null));
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
var alts_BANG___delegate = function (ports,p__37706){var map__37708 = p__37706;var map__37708__$1 = ((cljs.core.seq_QMARK_(map__37708))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37708):map__37708);var opts = map__37708__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__37706 = null;if (arguments.length > 1) {
  p__37706 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__37706);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__37709){
var ports = cljs.core.first(arglist__37709);
var p__37706 = cljs.core.rest(arglist__37709);
return alts_BANG___delegate(ports,p__37706);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t37717 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37717 = (function (ch,f,map_LT_,meta37718){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta37718 = meta37718;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37717.cljs$lang$type = true;
cljs.core.async.t37717.cljs$lang$ctorStr = "cljs.core.async/t37717";
cljs.core.async.t37717.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"cljs.core.async/t37717");
});
cljs.core.async.t37717.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t37717.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});
cljs.core.async.t37717.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t37717.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t37720 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37720 = (function (fn1,_,meta37718,ch,f,map_LT_,meta37721){
this.fn1 = fn1;
this._ = _;
this.meta37718 = meta37718;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta37721 = meta37721;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37720.cljs$lang$type = true;
cljs.core.async.t37720.cljs$lang$ctorStr = "cljs.core.async/t37720";
cljs.core.async.t37720.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"cljs.core.async/t37720");
});
cljs.core.async.t37720.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t37720.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t37720.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t37720.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__37710_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__37710_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__37710_SHARP_) : self__.f.call(null,p1__37710_SHARP_)))) : f1.call(null,(((p1__37710_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__37710_SHARP_) : self__.f.call(null,p1__37710_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t37720.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37722){var self__ = this;
var _37722__$1 = this;return self__.meta37721;
});
cljs.core.async.t37720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37722,meta37721__$1){var self__ = this;
var _37722__$1 = this;return (new cljs.core.async.t37720(self__.fn1,self__._,self__.meta37718,self__.ch,self__.f,self__.map_LT_,meta37721__$1));
});
cljs.core.async.__GT_t37720 = (function __GT_t37720(fn1__$1,___$2,meta37718__$1,ch__$2,f__$2,map_LT___$2,meta37721){return (new cljs.core.async.t37720(fn1__$1,___$2,meta37718__$1,ch__$2,f__$2,map_LT___$2,meta37721));
});
}
return (new cljs.core.async.t37720(fn1,___$1,self__.meta37718,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t37717.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t37717.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t37717.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t37717.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37719){var self__ = this;
var _37719__$1 = this;return self__.meta37718;
});
cljs.core.async.t37717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37719,meta37718__$1){var self__ = this;
var _37719__$1 = this;return (new cljs.core.async.t37717(self__.ch,self__.f,self__.map_LT_,meta37718__$1));
});
cljs.core.async.__GT_t37717 = (function __GT_t37717(ch__$1,f__$1,map_LT___$1,meta37718){return (new cljs.core.async.t37717(ch__$1,f__$1,map_LT___$1,meta37718));
});
}
return (new cljs.core.async.t37717(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t37726 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37726 = (function (ch,f,map_GT_,meta37727){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta37727 = meta37727;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37726.cljs$lang$type = true;
cljs.core.async.t37726.cljs$lang$ctorStr = "cljs.core.async/t37726";
cljs.core.async.t37726.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"cljs.core.async/t37726");
});
cljs.core.async.t37726.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t37726.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});
cljs.core.async.t37726.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t37726.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t37726.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t37726.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t37726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37728){var self__ = this;
var _37728__$1 = this;return self__.meta37727;
});
cljs.core.async.t37726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37728,meta37727__$1){var self__ = this;
var _37728__$1 = this;return (new cljs.core.async.t37726(self__.ch,self__.f,self__.map_GT_,meta37727__$1));
});
cljs.core.async.__GT_t37726 = (function __GT_t37726(ch__$1,f__$1,map_GT___$1,meta37727){return (new cljs.core.async.t37726(ch__$1,f__$1,map_GT___$1,meta37727));
});
}
return (new cljs.core.async.t37726(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t37732 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37732 = (function (ch,p,filter_GT_,meta37733){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta37733 = meta37733;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37732.cljs$lang$type = true;
cljs.core.async.t37732.cljs$lang$ctorStr = "cljs.core.async/t37732";
cljs.core.async.t37732.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"cljs.core.async/t37732");
});
cljs.core.async.t37732.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t37732.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});
cljs.core.async.t37732.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t37732.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t37732.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t37732.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t37732.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t37732.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37734){var self__ = this;
var _37734__$1 = this;return self__.meta37733;
});
cljs.core.async.t37732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37734,meta37733__$1){var self__ = this;
var _37734__$1 = this;return (new cljs.core.async.t37732(self__.ch,self__.p,self__.filter_GT_,meta37733__$1));
});
cljs.core.async.__GT_t37732 = (function __GT_t37732(ch__$1,p__$1,filter_GT___$1,meta37733){return (new cljs.core.async.t37732(ch__$1,p__$1,filter_GT___$1,meta37733));
});
}
return (new cljs.core.async.t37732(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5967__auto___37817 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_37796){var state_val_37797 = (state_37796[1]);if((state_val_37797 === 1))
{var state_37796__$1 = state_37796;var statearr_37798_37818 = state_37796__$1;(statearr_37798_37818[2] = null);
(statearr_37798_37818[1] = 2);
return cljs.core.constant$keyword$174;
} else
{if((state_val_37797 === 2))
{var state_37796__$1 = state_37796;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37796__$1,4,ch);
} else
{if((state_val_37797 === 3))
{var inst_37794 = (state_37796[2]);var state_37796__$1 = state_37796;return cljs.core.async.impl.ioc_helpers.return_chan(state_37796__$1,inst_37794);
} else
{if((state_val_37797 === 4))
{var inst_37778 = (state_37796[7]);var inst_37778__$1 = (state_37796[2]);var inst_37779 = (inst_37778__$1 == null);var state_37796__$1 = (function (){var statearr_37799 = state_37796;(statearr_37799[7] = inst_37778__$1);
return statearr_37799;
})();if(cljs.core.truth_(inst_37779))
{var statearr_37800_37819 = state_37796__$1;(statearr_37800_37819[1] = 5);
} else
{var statearr_37801_37820 = state_37796__$1;(statearr_37801_37820[1] = 6);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_37797 === 5))
{var inst_37781 = cljs.core.async.close_BANG_(out);var state_37796__$1 = state_37796;var statearr_37802_37821 = state_37796__$1;(statearr_37802_37821[2] = inst_37781);
(statearr_37802_37821[1] = 7);
return cljs.core.constant$keyword$174;
} else
{if((state_val_37797 === 6))
{var inst_37778 = (state_37796[7]);var inst_37783 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37778) : p.call(null,inst_37778));var state_37796__$1 = state_37796;if(cljs.core.truth_(inst_37783))
{var statearr_37803_37822 = state_37796__$1;(statearr_37803_37822[1] = 8);
} else
{var statearr_37804_37823 = state_37796__$1;(statearr_37804_37823[1] = 9);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_37797 === 7))
{var inst_37792 = (state_37796[2]);var state_37796__$1 = state_37796;var statearr_37805_37824 = state_37796__$1;(statearr_37805_37824[2] = inst_37792);
(statearr_37805_37824[1] = 3);
return cljs.core.constant$keyword$174;
} else
{if((state_val_37797 === 8))
{var inst_37778 = (state_37796[7]);var state_37796__$1 = state_37796;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37796__$1,11,out,inst_37778);
} else
{if((state_val_37797 === 9))
{var state_37796__$1 = state_37796;var statearr_37806_37825 = state_37796__$1;(statearr_37806_37825[2] = null);
(statearr_37806_37825[1] = 10);
return cljs.core.constant$keyword$174;
} else
{if((state_val_37797 === 10))
{var inst_37789 = (state_37796[2]);var state_37796__$1 = (function (){var statearr_37807 = state_37796;(statearr_37807[8] = inst_37789);
return statearr_37807;
})();var statearr_37808_37826 = state_37796__$1;(statearr_37808_37826[2] = null);
(statearr_37808_37826[1] = 2);
return cljs.core.constant$keyword$174;
} else
{if((state_val_37797 === 11))
{var inst_37786 = (state_37796[2]);var state_37796__$1 = state_37796;var statearr_37809_37827 = state_37796__$1;(statearr_37809_37827[2] = inst_37786);
(statearr_37809_37827[1] = 10);
return cljs.core.constant$keyword$174;
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
});return ((function (switch__5897__auto__){
return (function() {
var state_machine__5898__auto__ = null;
var state_machine__5898__auto____0 = (function (){var statearr_37813 = (new Array(9));(statearr_37813[0] = state_machine__5898__auto__);
(statearr_37813[1] = 1);
return statearr_37813;
});
var state_machine__5898__auto____1 = (function (state_37796){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_37796);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$174))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e37814){if((e37814 instanceof Object))
{var ex__5901__auto__ = e37814;var statearr_37815_37828 = state_37796;(statearr_37815_37828[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37796);
return cljs.core.constant$keyword$174;
} else
{if(cljs.core.constant$keyword$129)
{throw e37814;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$174))
{{
var G__37829 = state_37796;
state_37796 = G__37829;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_37796){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_37796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_37816 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_37816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto___37817);
return statearr_37816;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5969__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5967__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_37995){var state_val_37996 = (state_37995[1]);if((state_val_37996 === 1))
{var state_37995__$1 = state_37995;var statearr_37997_38038 = state_37995__$1;(statearr_37997_38038[2] = null);
(statearr_37997_38038[1] = 2);
return cljs.core.constant$keyword$174;
} else
{if((state_val_37996 === 2))
{var state_37995__$1 = state_37995;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37995__$1,4,in$);
} else
{if((state_val_37996 === 3))
{var inst_37993 = (state_37995[2]);var state_37995__$1 = state_37995;return cljs.core.async.impl.ioc_helpers.return_chan(state_37995__$1,inst_37993);
} else
{if((state_val_37996 === 4))
{var inst_37936 = (state_37995[7]);var inst_37936__$1 = (state_37995[2]);var inst_37937 = (inst_37936__$1 == null);var state_37995__$1 = (function (){var statearr_37998 = state_37995;(statearr_37998[7] = inst_37936__$1);
return statearr_37998;
})();if(cljs.core.truth_(inst_37937))
{var statearr_37999_38039 = state_37995__$1;(statearr_37999_38039[1] = 5);
} else
{var statearr_38000_38040 = state_37995__$1;(statearr_38000_38040[1] = 6);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_37996 === 5))
{var inst_37939 = cljs.core.async.close_BANG_(out);var state_37995__$1 = state_37995;var statearr_38001_38041 = state_37995__$1;(statearr_38001_38041[2] = inst_37939);
(statearr_38001_38041[1] = 7);
return cljs.core.constant$keyword$174;
} else
{if((state_val_37996 === 6))
{var inst_37936 = (state_37995[7]);var inst_37945 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_37936) : f.call(null,inst_37936));var inst_37946 = cljs.core.seq(inst_37945);var inst_37947 = inst_37946;var inst_37948 = null;var inst_37949 = 0;var inst_37950 = 0;var state_37995__$1 = (function (){var statearr_38002 = state_37995;(statearr_38002[8] = inst_37950);
(statearr_38002[9] = inst_37947);
(statearr_38002[10] = inst_37949);
(statearr_38002[11] = inst_37948);
return statearr_38002;
})();var statearr_38003_38042 = state_37995__$1;(statearr_38003_38042[2] = null);
(statearr_38003_38042[1] = 8);
return cljs.core.constant$keyword$174;
} else
{if((state_val_37996 === 7))
{var inst_37991 = (state_37995[2]);var state_37995__$1 = state_37995;var statearr_38004_38043 = state_37995__$1;(statearr_38004_38043[2] = inst_37991);
(statearr_38004_38043[1] = 3);
return cljs.core.constant$keyword$174;
} else
{if((state_val_37996 === 8))
{var inst_37950 = (state_37995[8]);var inst_37949 = (state_37995[10]);var inst_37952 = (inst_37950 < inst_37949);var inst_37953 = inst_37952;var state_37995__$1 = state_37995;if(cljs.core.truth_(inst_37953))
{var statearr_38005_38044 = state_37995__$1;(statearr_38005_38044[1] = 10);
} else
{var statearr_38006_38045 = state_37995__$1;(statearr_38006_38045[1] = 11);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_37996 === 9))
{var inst_37983 = (state_37995[2]);var inst_37984 = cljs.core.async.impl.protocols.closed_QMARK_(out);var state_37995__$1 = (function (){var statearr_38007 = state_37995;(statearr_38007[12] = inst_37983);
return statearr_38007;
})();if(cljs.core.truth_(inst_37984))
{var statearr_38008_38046 = state_37995__$1;(statearr_38008_38046[1] = 21);
} else
{var statearr_38009_38047 = state_37995__$1;(statearr_38009_38047[1] = 22);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_37996 === 10))
{var inst_37950 = (state_37995[8]);var inst_37948 = (state_37995[11]);var inst_37955 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37948,inst_37950);var state_37995__$1 = state_37995;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37995__$1,13,out,inst_37955);
} else
{if((state_val_37996 === 11))
{var inst_37961 = (state_37995[13]);var inst_37947 = (state_37995[9]);var inst_37961__$1 = cljs.core.seq(inst_37947);var state_37995__$1 = (function (){var statearr_38013 = state_37995;(statearr_38013[13] = inst_37961__$1);
return statearr_38013;
})();if(inst_37961__$1)
{var statearr_38014_38048 = state_37995__$1;(statearr_38014_38048[1] = 14);
} else
{var statearr_38015_38049 = state_37995__$1;(statearr_38015_38049[1] = 15);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_37996 === 12))
{var inst_37981 = (state_37995[2]);var state_37995__$1 = state_37995;var statearr_38016_38050 = state_37995__$1;(statearr_38016_38050[2] = inst_37981);
(statearr_38016_38050[1] = 9);
return cljs.core.constant$keyword$174;
} else
{if((state_val_37996 === 13))
{var inst_37950 = (state_37995[8]);var inst_37947 = (state_37995[9]);var inst_37949 = (state_37995[10]);var inst_37948 = (state_37995[11]);var inst_37957 = (state_37995[2]);var inst_37958 = (inst_37950 + 1);var tmp38010 = inst_37947;var tmp38011 = inst_37949;var tmp38012 = inst_37948;var inst_37947__$1 = tmp38010;var inst_37948__$1 = tmp38012;var inst_37949__$1 = tmp38011;var inst_37950__$1 = inst_37958;var state_37995__$1 = (function (){var statearr_38017 = state_37995;(statearr_38017[8] = inst_37950__$1);
(statearr_38017[14] = inst_37957);
(statearr_38017[9] = inst_37947__$1);
(statearr_38017[10] = inst_37949__$1);
(statearr_38017[11] = inst_37948__$1);
return statearr_38017;
})();var statearr_38018_38051 = state_37995__$1;(statearr_38018_38051[2] = null);
(statearr_38018_38051[1] = 8);
return cljs.core.constant$keyword$174;
} else
{if((state_val_37996 === 14))
{var inst_37961 = (state_37995[13]);var inst_37963 = cljs.core.chunked_seq_QMARK_(inst_37961);var state_37995__$1 = state_37995;if(inst_37963)
{var statearr_38019_38052 = state_37995__$1;(statearr_38019_38052[1] = 17);
} else
{var statearr_38020_38053 = state_37995__$1;(statearr_38020_38053[1] = 18);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_37996 === 15))
{var state_37995__$1 = state_37995;var statearr_38021_38054 = state_37995__$1;(statearr_38021_38054[2] = null);
(statearr_38021_38054[1] = 16);
return cljs.core.constant$keyword$174;
} else
{if((state_val_37996 === 16))
{var inst_37979 = (state_37995[2]);var state_37995__$1 = state_37995;var statearr_38022_38055 = state_37995__$1;(statearr_38022_38055[2] = inst_37979);
(statearr_38022_38055[1] = 12);
return cljs.core.constant$keyword$174;
} else
{if((state_val_37996 === 17))
{var inst_37961 = (state_37995[13]);var inst_37965 = cljs.core.chunk_first(inst_37961);var inst_37966 = cljs.core.chunk_rest(inst_37961);var inst_37967 = cljs.core.count(inst_37965);var inst_37947 = inst_37966;var inst_37948 = inst_37965;var inst_37949 = inst_37967;var inst_37950 = 0;var state_37995__$1 = (function (){var statearr_38023 = state_37995;(statearr_38023[8] = inst_37950);
(statearr_38023[9] = inst_37947);
(statearr_38023[10] = inst_37949);
(statearr_38023[11] = inst_37948);
return statearr_38023;
})();var statearr_38024_38056 = state_37995__$1;(statearr_38024_38056[2] = null);
(statearr_38024_38056[1] = 8);
return cljs.core.constant$keyword$174;
} else
{if((state_val_37996 === 18))
{var inst_37961 = (state_37995[13]);var inst_37970 = cljs.core.first(inst_37961);var state_37995__$1 = state_37995;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37995__$1,20,out,inst_37970);
} else
{if((state_val_37996 === 19))
{var inst_37976 = (state_37995[2]);var state_37995__$1 = state_37995;var statearr_38025_38057 = state_37995__$1;(statearr_38025_38057[2] = inst_37976);
(statearr_38025_38057[1] = 16);
return cljs.core.constant$keyword$174;
} else
{if((state_val_37996 === 20))
{var inst_37961 = (state_37995[13]);var inst_37972 = (state_37995[2]);var inst_37973 = cljs.core.next(inst_37961);var inst_37947 = inst_37973;var inst_37948 = null;var inst_37949 = 0;var inst_37950 = 0;var state_37995__$1 = (function (){var statearr_38026 = state_37995;(statearr_38026[8] = inst_37950);
(statearr_38026[9] = inst_37947);
(statearr_38026[10] = inst_37949);
(statearr_38026[15] = inst_37972);
(statearr_38026[11] = inst_37948);
return statearr_38026;
})();var statearr_38027_38058 = state_37995__$1;(statearr_38027_38058[2] = null);
(statearr_38027_38058[1] = 8);
return cljs.core.constant$keyword$174;
} else
{if((state_val_37996 === 21))
{var state_37995__$1 = state_37995;var statearr_38028_38059 = state_37995__$1;(statearr_38028_38059[2] = null);
(statearr_38028_38059[1] = 23);
return cljs.core.constant$keyword$174;
} else
{if((state_val_37996 === 22))
{var state_37995__$1 = state_37995;var statearr_38029_38060 = state_37995__$1;(statearr_38029_38060[2] = null);
(statearr_38029_38060[1] = 2);
return cljs.core.constant$keyword$174;
} else
{if((state_val_37996 === 23))
{var inst_37989 = (state_37995[2]);var state_37995__$1 = state_37995;var statearr_38030_38061 = state_37995__$1;(statearr_38030_38061[2] = inst_37989);
(statearr_38030_38061[1] = 7);
return cljs.core.constant$keyword$174;
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
});return ((function (switch__5897__auto__){
return (function() {
var state_machine__5898__auto__ = null;
var state_machine__5898__auto____0 = (function (){var statearr_38034 = (new Array(16));(statearr_38034[0] = state_machine__5898__auto__);
(statearr_38034[1] = 1);
return statearr_38034;
});
var state_machine__5898__auto____1 = (function (state_37995){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_37995);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$174))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e38035){if((e38035 instanceof Object))
{var ex__5901__auto__ = e38035;var statearr_38036_38062 = state_37995;(statearr_38036_38062[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37995);
return cljs.core.constant$keyword$174;
} else
{if(cljs.core.constant$keyword$129)
{throw e38035;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$174))
{{
var G__38063 = state_37995;
state_37995 = G__38063;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_37995){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_37995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_38037 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_38037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto__);
return statearr_38037;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5969__auto__);
}));
return c__5967__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5967__auto___38158 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_38134){var state_val_38135 = (state_38134[1]);if((state_val_38135 === 1))
{var state_38134__$1 = state_38134;var statearr_38136_38159 = state_38134__$1;(statearr_38136_38159[2] = null);
(statearr_38136_38159[1] = 2);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38135 === 2))
{var state_38134__$1 = state_38134;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38134__$1,4,from);
} else
{if((state_val_38135 === 3))
{var inst_38132 = (state_38134[2]);var state_38134__$1 = state_38134;return cljs.core.async.impl.ioc_helpers.return_chan(state_38134__$1,inst_38132);
} else
{if((state_val_38135 === 4))
{var inst_38113 = (state_38134[7]);var inst_38113__$1 = (state_38134[2]);var inst_38114 = (inst_38113__$1 == null);var state_38134__$1 = (function (){var statearr_38137 = state_38134;(statearr_38137[7] = inst_38113__$1);
return statearr_38137;
})();if(cljs.core.truth_(inst_38114))
{var statearr_38138_38160 = state_38134__$1;(statearr_38138_38160[1] = 5);
} else
{var statearr_38139_38161 = state_38134__$1;(statearr_38139_38161[1] = 6);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_38135 === 5))
{var state_38134__$1 = state_38134;if(cljs.core.truth_(close_QMARK_))
{var statearr_38140_38162 = state_38134__$1;(statearr_38140_38162[1] = 8);
} else
{var statearr_38141_38163 = state_38134__$1;(statearr_38141_38163[1] = 9);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_38135 === 6))
{var inst_38113 = (state_38134[7]);var state_38134__$1 = state_38134;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38134__$1,11,to,inst_38113);
} else
{if((state_val_38135 === 7))
{var inst_38130 = (state_38134[2]);var state_38134__$1 = state_38134;var statearr_38142_38164 = state_38134__$1;(statearr_38142_38164[2] = inst_38130);
(statearr_38142_38164[1] = 3);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38135 === 8))
{var inst_38117 = cljs.core.async.close_BANG_(to);var state_38134__$1 = state_38134;var statearr_38143_38165 = state_38134__$1;(statearr_38143_38165[2] = inst_38117);
(statearr_38143_38165[1] = 10);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38135 === 9))
{var state_38134__$1 = state_38134;var statearr_38144_38166 = state_38134__$1;(statearr_38144_38166[2] = null);
(statearr_38144_38166[1] = 10);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38135 === 10))
{var inst_38120 = (state_38134[2]);var state_38134__$1 = state_38134;var statearr_38145_38167 = state_38134__$1;(statearr_38145_38167[2] = inst_38120);
(statearr_38145_38167[1] = 7);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38135 === 11))
{var inst_38123 = (state_38134[2]);var state_38134__$1 = state_38134;if(cljs.core.truth_(inst_38123))
{var statearr_38146_38168 = state_38134__$1;(statearr_38146_38168[1] = 12);
} else
{var statearr_38147_38169 = state_38134__$1;(statearr_38147_38169[1] = 13);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_38135 === 12))
{var state_38134__$1 = state_38134;var statearr_38148_38170 = state_38134__$1;(statearr_38148_38170[2] = null);
(statearr_38148_38170[1] = 2);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38135 === 13))
{var state_38134__$1 = state_38134;var statearr_38149_38171 = state_38134__$1;(statearr_38149_38171[2] = null);
(statearr_38149_38171[1] = 14);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38135 === 14))
{var inst_38128 = (state_38134[2]);var state_38134__$1 = state_38134;var statearr_38150_38172 = state_38134__$1;(statearr_38150_38172[2] = inst_38128);
(statearr_38150_38172[1] = 7);
return cljs.core.constant$keyword$174;
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
});return ((function (switch__5897__auto__){
return (function() {
var state_machine__5898__auto__ = null;
var state_machine__5898__auto____0 = (function (){var statearr_38154 = (new Array(8));(statearr_38154[0] = state_machine__5898__auto__);
(statearr_38154[1] = 1);
return statearr_38154;
});
var state_machine__5898__auto____1 = (function (state_38134){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_38134);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$174))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e38155){if((e38155 instanceof Object))
{var ex__5901__auto__ = e38155;var statearr_38156_38173 = state_38134;(statearr_38156_38173[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38134);
return cljs.core.constant$keyword$174;
} else
{if(cljs.core.constant$keyword$129)
{throw e38155;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$174))
{{
var G__38174 = state_38134;
state_38134 = G__38174;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_38134){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_38134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_38157 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_38157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto___38158);
return statearr_38157;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5969__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5967__auto___38275 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_38250){var state_val_38251 = (state_38250[1]);if((state_val_38251 === 1))
{var state_38250__$1 = state_38250;var statearr_38252_38276 = state_38250__$1;(statearr_38252_38276[2] = null);
(statearr_38252_38276[1] = 2);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38251 === 2))
{var state_38250__$1 = state_38250;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38250__$1,4,ch);
} else
{if((state_val_38251 === 3))
{var inst_38248 = (state_38250[2]);var state_38250__$1 = state_38250;return cljs.core.async.impl.ioc_helpers.return_chan(state_38250__$1,inst_38248);
} else
{if((state_val_38251 === 4))
{var inst_38227 = (state_38250[7]);var inst_38227__$1 = (state_38250[2]);var inst_38228 = (inst_38227__$1 == null);var state_38250__$1 = (function (){var statearr_38253 = state_38250;(statearr_38253[7] = inst_38227__$1);
return statearr_38253;
})();if(cljs.core.truth_(inst_38228))
{var statearr_38254_38277 = state_38250__$1;(statearr_38254_38277[1] = 5);
} else
{var statearr_38255_38278 = state_38250__$1;(statearr_38255_38278[1] = 6);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_38251 === 5))
{var inst_38230 = cljs.core.async.close_BANG_(tc);var inst_38231 = cljs.core.async.close_BANG_(fc);var state_38250__$1 = (function (){var statearr_38256 = state_38250;(statearr_38256[8] = inst_38230);
return statearr_38256;
})();var statearr_38257_38279 = state_38250__$1;(statearr_38257_38279[2] = inst_38231);
(statearr_38257_38279[1] = 7);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38251 === 6))
{var inst_38227 = (state_38250[7]);var inst_38233 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38227) : p.call(null,inst_38227));var state_38250__$1 = state_38250;if(cljs.core.truth_(inst_38233))
{var statearr_38258_38280 = state_38250__$1;(statearr_38258_38280[1] = 9);
} else
{var statearr_38259_38281 = state_38250__$1;(statearr_38259_38281[1] = 10);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_38251 === 7))
{var inst_38246 = (state_38250[2]);var state_38250__$1 = state_38250;var statearr_38260_38282 = state_38250__$1;(statearr_38260_38282[2] = inst_38246);
(statearr_38260_38282[1] = 3);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38251 === 8))
{var inst_38239 = (state_38250[2]);var state_38250__$1 = state_38250;if(cljs.core.truth_(inst_38239))
{var statearr_38261_38283 = state_38250__$1;(statearr_38261_38283[1] = 12);
} else
{var statearr_38262_38284 = state_38250__$1;(statearr_38262_38284[1] = 13);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_38251 === 9))
{var state_38250__$1 = state_38250;var statearr_38263_38285 = state_38250__$1;(statearr_38263_38285[2] = tc);
(statearr_38263_38285[1] = 11);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38251 === 10))
{var state_38250__$1 = state_38250;var statearr_38264_38286 = state_38250__$1;(statearr_38264_38286[2] = fc);
(statearr_38264_38286[1] = 11);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38251 === 11))
{var inst_38227 = (state_38250[7]);var inst_38237 = (state_38250[2]);var state_38250__$1 = state_38250;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38250__$1,8,inst_38237,inst_38227);
} else
{if((state_val_38251 === 12))
{var state_38250__$1 = state_38250;var statearr_38265_38287 = state_38250__$1;(statearr_38265_38287[2] = null);
(statearr_38265_38287[1] = 2);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38251 === 13))
{var state_38250__$1 = state_38250;var statearr_38266_38288 = state_38250__$1;(statearr_38266_38288[2] = null);
(statearr_38266_38288[1] = 14);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38251 === 14))
{var inst_38244 = (state_38250[2]);var state_38250__$1 = state_38250;var statearr_38267_38289 = state_38250__$1;(statearr_38267_38289[2] = inst_38244);
(statearr_38267_38289[1] = 7);
return cljs.core.constant$keyword$174;
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
});return ((function (switch__5897__auto__){
return (function() {
var state_machine__5898__auto__ = null;
var state_machine__5898__auto____0 = (function (){var statearr_38271 = (new Array(9));(statearr_38271[0] = state_machine__5898__auto__);
(statearr_38271[1] = 1);
return statearr_38271;
});
var state_machine__5898__auto____1 = (function (state_38250){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_38250);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$174))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e38272){if((e38272 instanceof Object))
{var ex__5901__auto__ = e38272;var statearr_38273_38290 = state_38250;(statearr_38273_38290[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38250);
return cljs.core.constant$keyword$174;
} else
{if(cljs.core.constant$keyword$129)
{throw e38272;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$174))
{{
var G__38291 = state_38250;
state_38250 = G__38291;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_38250){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_38250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_38274 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_38274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto___38275);
return statearr_38274;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5969__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5967__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_38338){var state_val_38339 = (state_38338[1]);if((state_val_38339 === 7))
{var inst_38334 = (state_38338[2]);var state_38338__$1 = state_38338;var statearr_38340_38356 = state_38338__$1;(statearr_38340_38356[2] = inst_38334);
(statearr_38340_38356[1] = 3);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38339 === 6))
{var inst_38324 = (state_38338[7]);var inst_38327 = (state_38338[8]);var inst_38331 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_38324,inst_38327) : f.call(null,inst_38324,inst_38327));var inst_38324__$1 = inst_38331;var state_38338__$1 = (function (){var statearr_38341 = state_38338;(statearr_38341[7] = inst_38324__$1);
return statearr_38341;
})();var statearr_38342_38357 = state_38338__$1;(statearr_38342_38357[2] = null);
(statearr_38342_38357[1] = 2);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38339 === 5))
{var inst_38324 = (state_38338[7]);var state_38338__$1 = state_38338;var statearr_38343_38358 = state_38338__$1;(statearr_38343_38358[2] = inst_38324);
(statearr_38343_38358[1] = 7);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38339 === 4))
{var inst_38327 = (state_38338[8]);var inst_38327__$1 = (state_38338[2]);var inst_38328 = (inst_38327__$1 == null);var state_38338__$1 = (function (){var statearr_38344 = state_38338;(statearr_38344[8] = inst_38327__$1);
return statearr_38344;
})();if(cljs.core.truth_(inst_38328))
{var statearr_38345_38359 = state_38338__$1;(statearr_38345_38359[1] = 5);
} else
{var statearr_38346_38360 = state_38338__$1;(statearr_38346_38360[1] = 6);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_38339 === 3))
{var inst_38336 = (state_38338[2]);var state_38338__$1 = state_38338;return cljs.core.async.impl.ioc_helpers.return_chan(state_38338__$1,inst_38336);
} else
{if((state_val_38339 === 2))
{var state_38338__$1 = state_38338;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38338__$1,4,ch);
} else
{if((state_val_38339 === 1))
{var inst_38324 = init;var state_38338__$1 = (function (){var statearr_38347 = state_38338;(statearr_38347[7] = inst_38324);
return statearr_38347;
})();var statearr_38348_38361 = state_38338__$1;(statearr_38348_38361[2] = null);
(statearr_38348_38361[1] = 2);
return cljs.core.constant$keyword$174;
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5897__auto__){
return (function() {
var state_machine__5898__auto__ = null;
var state_machine__5898__auto____0 = (function (){var statearr_38352 = (new Array(9));(statearr_38352[0] = state_machine__5898__auto__);
(statearr_38352[1] = 1);
return statearr_38352;
});
var state_machine__5898__auto____1 = (function (state_38338){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_38338);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$174))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e38353){if((e38353 instanceof Object))
{var ex__5901__auto__ = e38353;var statearr_38354_38362 = state_38338;(statearr_38354_38362[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38338);
return cljs.core.constant$keyword$174;
} else
{if(cljs.core.constant$keyword$129)
{throw e38353;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$174))
{{
var G__38363 = state_38338;
state_38338 = G__38363;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_38338){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_38338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_38355 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_38355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto__);
return statearr_38355;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5969__auto__);
}));
return c__5967__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5967__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_38437){var state_val_38438 = (state_38437[1]);if((state_val_38438 === 1))
{var inst_38413 = cljs.core.seq(coll);var inst_38414 = inst_38413;var state_38437__$1 = (function (){var statearr_38439 = state_38437;(statearr_38439[7] = inst_38414);
return statearr_38439;
})();var statearr_38440_38462 = state_38437__$1;(statearr_38440_38462[2] = null);
(statearr_38440_38462[1] = 2);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38438 === 2))
{var inst_38414 = (state_38437[7]);var state_38437__$1 = state_38437;if(cljs.core.truth_(inst_38414))
{var statearr_38441_38463 = state_38437__$1;(statearr_38441_38463[1] = 4);
} else
{var statearr_38442_38464 = state_38437__$1;(statearr_38442_38464[1] = 5);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_38438 === 3))
{var inst_38435 = (state_38437[2]);var state_38437__$1 = state_38437;return cljs.core.async.impl.ioc_helpers.return_chan(state_38437__$1,inst_38435);
} else
{if((state_val_38438 === 4))
{var inst_38414 = (state_38437[7]);var inst_38417 = cljs.core.first(inst_38414);var state_38437__$1 = state_38437;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38437__$1,7,ch,inst_38417);
} else
{if((state_val_38438 === 5))
{var inst_38414 = (state_38437[7]);var state_38437__$1 = state_38437;var statearr_38443_38465 = state_38437__$1;(statearr_38443_38465[2] = inst_38414);
(statearr_38443_38465[1] = 6);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38438 === 6))
{var inst_38422 = (state_38437[2]);var state_38437__$1 = state_38437;if(cljs.core.truth_(inst_38422))
{var statearr_38444_38466 = state_38437__$1;(statearr_38444_38466[1] = 8);
} else
{var statearr_38445_38467 = state_38437__$1;(statearr_38445_38467[1] = 9);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_38438 === 7))
{var inst_38419 = (state_38437[2]);var state_38437__$1 = state_38437;var statearr_38446_38468 = state_38437__$1;(statearr_38446_38468[2] = inst_38419);
(statearr_38446_38468[1] = 6);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38438 === 8))
{var inst_38414 = (state_38437[7]);var inst_38424 = cljs.core.next(inst_38414);var inst_38414__$1 = inst_38424;var state_38437__$1 = (function (){var statearr_38447 = state_38437;(statearr_38447[7] = inst_38414__$1);
return statearr_38447;
})();var statearr_38448_38469 = state_38437__$1;(statearr_38448_38469[2] = null);
(statearr_38448_38469[1] = 2);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38438 === 9))
{var state_38437__$1 = state_38437;if(cljs.core.truth_(close_QMARK_))
{var statearr_38449_38470 = state_38437__$1;(statearr_38449_38470[1] = 11);
} else
{var statearr_38450_38471 = state_38437__$1;(statearr_38450_38471[1] = 12);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_38438 === 10))
{var inst_38433 = (state_38437[2]);var state_38437__$1 = state_38437;var statearr_38451_38472 = state_38437__$1;(statearr_38451_38472[2] = inst_38433);
(statearr_38451_38472[1] = 3);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38438 === 11))
{var inst_38428 = cljs.core.async.close_BANG_(ch);var state_38437__$1 = state_38437;var statearr_38452_38473 = state_38437__$1;(statearr_38452_38473[2] = inst_38428);
(statearr_38452_38473[1] = 13);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38438 === 12))
{var state_38437__$1 = state_38437;var statearr_38453_38474 = state_38437__$1;(statearr_38453_38474[2] = null);
(statearr_38453_38474[1] = 13);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38438 === 13))
{var inst_38431 = (state_38437[2]);var state_38437__$1 = state_38437;var statearr_38454_38475 = state_38437__$1;(statearr_38454_38475[2] = inst_38431);
(statearr_38454_38475[1] = 10);
return cljs.core.constant$keyword$174;
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
});return ((function (switch__5897__auto__){
return (function() {
var state_machine__5898__auto__ = null;
var state_machine__5898__auto____0 = (function (){var statearr_38458 = (new Array(8));(statearr_38458[0] = state_machine__5898__auto__);
(statearr_38458[1] = 1);
return statearr_38458;
});
var state_machine__5898__auto____1 = (function (state_38437){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_38437);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$174))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e38459){if((e38459 instanceof Object))
{var ex__5901__auto__ = e38459;var statearr_38460_38476 = state_38437;(statearr_38460_38476[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38437);
return cljs.core.constant$keyword$174;
} else
{if(cljs.core.constant$keyword$129)
{throw e38459;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$174))
{{
var G__38477 = state_38437;
state_38437 = G__38477;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_38437){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_38437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_38461 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_38461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto__);
return statearr_38461;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5969__auto__);
}));
return c__5967__auto__;
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
cljs.core.async.Mux = (function (){var obj38479 = {};return obj38479;
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
cljs.core.async.Mult = (function (){var obj38481 = {};return obj38481;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t38703 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38703 = (function (cs,ch,mult,meta38704){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta38704 = meta38704;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38703.cljs$lang$type = true;
cljs.core.async.t38703.cljs$lang$ctorStr = "cljs.core.async/t38703";
cljs.core.async.t38703.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"cljs.core.async/t38703");
});})(cs))
;
cljs.core.async.t38703.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t38703.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t38703.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t38703.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t38703.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t38703.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t38703.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38705){var self__ = this;
var _38705__$1 = this;return self__.meta38704;
});})(cs))
;
cljs.core.async.t38703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38705,meta38704__$1){var self__ = this;
var _38705__$1 = this;return (new cljs.core.async.t38703(self__.cs,self__.ch,self__.mult,meta38704__$1));
});})(cs))
;
cljs.core.async.__GT_t38703 = ((function (cs){
return (function __GT_t38703(cs__$1,ch__$1,mult__$1,meta38704){return (new cljs.core.async.t38703(cs__$1,ch__$1,mult__$1,meta38704));
});})(cs))
;
}
return (new cljs.core.async.t38703(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5967__auto___38924 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_38836){var state_val_38837 = (state_38836[1]);if((state_val_38837 === 32))
{var inst_38779 = (state_38836[7]);var inst_38778 = (state_38836[8]);var inst_38777 = (state_38836[9]);var inst_38776 = (state_38836[10]);var inst_38791 = (state_38836[2]);var inst_38792 = (inst_38779 + 1);var tmp38838 = inst_38778;var tmp38839 = inst_38777;var tmp38840 = inst_38776;var inst_38776__$1 = tmp38840;var inst_38777__$1 = tmp38839;var inst_38778__$1 = tmp38838;var inst_38779__$1 = inst_38792;var state_38836__$1 = (function (){var statearr_38841 = state_38836;(statearr_38841[7] = inst_38779__$1);
(statearr_38841[8] = inst_38778__$1);
(statearr_38841[9] = inst_38777__$1);
(statearr_38841[10] = inst_38776__$1);
(statearr_38841[11] = inst_38791);
return statearr_38841;
})();var statearr_38842_38925 = state_38836__$1;(statearr_38842_38925[2] = null);
(statearr_38842_38925[1] = 25);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 1))
{var state_38836__$1 = state_38836;var statearr_38843_38926 = state_38836__$1;(statearr_38843_38926[2] = null);
(statearr_38843_38926[1] = 2);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 33))
{var inst_38795 = (state_38836[12]);var inst_38797 = cljs.core.chunked_seq_QMARK_(inst_38795);var state_38836__$1 = state_38836;if(inst_38797)
{var statearr_38844_38927 = state_38836__$1;(statearr_38844_38927[1] = 36);
} else
{var statearr_38845_38928 = state_38836__$1;(statearr_38845_38928[1] = 37);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 2))
{var state_38836__$1 = state_38836;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38836__$1,4,ch);
} else
{if((state_val_38837 === 34))
{var state_38836__$1 = state_38836;var statearr_38846_38929 = state_38836__$1;(statearr_38846_38929[2] = null);
(statearr_38846_38929[1] = 35);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 3))
{var inst_38834 = (state_38836[2]);var state_38836__$1 = state_38836;return cljs.core.async.impl.ioc_helpers.return_chan(state_38836__$1,inst_38834);
} else
{if((state_val_38837 === 35))
{var inst_38818 = (state_38836[2]);var state_38836__$1 = state_38836;var statearr_38847_38930 = state_38836__$1;(statearr_38847_38930[2] = inst_38818);
(statearr_38847_38930[1] = 29);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 4))
{var inst_38708 = (state_38836[13]);var inst_38708__$1 = (state_38836[2]);var inst_38709 = (inst_38708__$1 == null);var state_38836__$1 = (function (){var statearr_38848 = state_38836;(statearr_38848[13] = inst_38708__$1);
return statearr_38848;
})();if(cljs.core.truth_(inst_38709))
{var statearr_38849_38931 = state_38836__$1;(statearr_38849_38931[1] = 5);
} else
{var statearr_38850_38932 = state_38836__$1;(statearr_38850_38932[1] = 6);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 36))
{var inst_38795 = (state_38836[12]);var inst_38799 = cljs.core.chunk_first(inst_38795);var inst_38800 = cljs.core.chunk_rest(inst_38795);var inst_38801 = cljs.core.count(inst_38799);var inst_38776 = inst_38800;var inst_38777 = inst_38799;var inst_38778 = inst_38801;var inst_38779 = 0;var state_38836__$1 = (function (){var statearr_38851 = state_38836;(statearr_38851[7] = inst_38779);
(statearr_38851[8] = inst_38778);
(statearr_38851[9] = inst_38777);
(statearr_38851[10] = inst_38776);
return statearr_38851;
})();var statearr_38852_38933 = state_38836__$1;(statearr_38852_38933[2] = null);
(statearr_38852_38933[1] = 25);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 5))
{var inst_38715 = cljs.core.deref(cs);var inst_38716 = cljs.core.seq(inst_38715);var inst_38717 = inst_38716;var inst_38718 = null;var inst_38719 = 0;var inst_38720 = 0;var state_38836__$1 = (function (){var statearr_38853 = state_38836;(statearr_38853[14] = inst_38720);
(statearr_38853[15] = inst_38717);
(statearr_38853[16] = inst_38719);
(statearr_38853[17] = inst_38718);
return statearr_38853;
})();var statearr_38854_38934 = state_38836__$1;(statearr_38854_38934[2] = null);
(statearr_38854_38934[1] = 8);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 37))
{var inst_38804 = (state_38836[18]);var inst_38708 = (state_38836[13]);var inst_38795 = (state_38836[12]);var inst_38804__$1 = cljs.core.first(inst_38795);var inst_38805 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38804__$1,inst_38708,done);var state_38836__$1 = (function (){var statearr_38855 = state_38836;(statearr_38855[18] = inst_38804__$1);
return statearr_38855;
})();if(cljs.core.truth_(inst_38805))
{var statearr_38856_38935 = state_38836__$1;(statearr_38856_38935[1] = 39);
} else
{var statearr_38857_38936 = state_38836__$1;(statearr_38857_38936[1] = 40);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 6))
{var inst_38768 = (state_38836[19]);var inst_38767 = cljs.core.deref(cs);var inst_38768__$1 = cljs.core.keys(inst_38767);var inst_38769 = cljs.core.count(inst_38768__$1);var inst_38770 = cljs.core.reset_BANG_(dctr,inst_38769);var inst_38775 = cljs.core.seq(inst_38768__$1);var inst_38776 = inst_38775;var inst_38777 = null;var inst_38778 = 0;var inst_38779 = 0;var state_38836__$1 = (function (){var statearr_38858 = state_38836;(statearr_38858[7] = inst_38779);
(statearr_38858[8] = inst_38778);
(statearr_38858[9] = inst_38777);
(statearr_38858[10] = inst_38776);
(statearr_38858[19] = inst_38768__$1);
(statearr_38858[20] = inst_38770);
return statearr_38858;
})();var statearr_38859_38937 = state_38836__$1;(statearr_38859_38937[2] = null);
(statearr_38859_38937[1] = 25);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 38))
{var inst_38815 = (state_38836[2]);var state_38836__$1 = state_38836;var statearr_38860_38938 = state_38836__$1;(statearr_38860_38938[2] = inst_38815);
(statearr_38860_38938[1] = 35);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 7))
{var inst_38832 = (state_38836[2]);var state_38836__$1 = state_38836;var statearr_38861_38939 = state_38836__$1;(statearr_38861_38939[2] = inst_38832);
(statearr_38861_38939[1] = 3);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 39))
{var state_38836__$1 = state_38836;var statearr_38862_38940 = state_38836__$1;(statearr_38862_38940[2] = null);
(statearr_38862_38940[1] = 41);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 8))
{var inst_38720 = (state_38836[14]);var inst_38719 = (state_38836[16]);var inst_38722 = (inst_38720 < inst_38719);var inst_38723 = inst_38722;var state_38836__$1 = state_38836;if(cljs.core.truth_(inst_38723))
{var statearr_38863_38941 = state_38836__$1;(statearr_38863_38941[1] = 10);
} else
{var statearr_38864_38942 = state_38836__$1;(statearr_38864_38942[1] = 11);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 40))
{var inst_38804 = (state_38836[18]);var inst_38808 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_38809 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_38804);var state_38836__$1 = (function (){var statearr_38865 = state_38836;(statearr_38865[21] = inst_38808);
return statearr_38865;
})();var statearr_38866_38943 = state_38836__$1;(statearr_38866_38943[2] = inst_38809);
(statearr_38866_38943[1] = 41);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 9))
{var inst_38765 = (state_38836[2]);var state_38836__$1 = state_38836;var statearr_38867_38944 = state_38836__$1;(statearr_38867_38944[2] = inst_38765);
(statearr_38867_38944[1] = 7);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 41))
{var inst_38795 = (state_38836[12]);var inst_38811 = (state_38836[2]);var inst_38812 = cljs.core.next(inst_38795);var inst_38776 = inst_38812;var inst_38777 = null;var inst_38778 = 0;var inst_38779 = 0;var state_38836__$1 = (function (){var statearr_38868 = state_38836;(statearr_38868[7] = inst_38779);
(statearr_38868[8] = inst_38778);
(statearr_38868[22] = inst_38811);
(statearr_38868[9] = inst_38777);
(statearr_38868[10] = inst_38776);
return statearr_38868;
})();var statearr_38869_38945 = state_38836__$1;(statearr_38869_38945[2] = null);
(statearr_38869_38945[1] = 25);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 10))
{var inst_38720 = (state_38836[14]);var inst_38718 = (state_38836[17]);var inst_38726 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38718,inst_38720);var inst_38727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38726,0,null);var inst_38728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38726,1,null);var state_38836__$1 = (function (){var statearr_38870 = state_38836;(statearr_38870[23] = inst_38727);
return statearr_38870;
})();if(cljs.core.truth_(inst_38728))
{var statearr_38871_38946 = state_38836__$1;(statearr_38871_38946[1] = 13);
} else
{var statearr_38872_38947 = state_38836__$1;(statearr_38872_38947[1] = 14);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 42))
{var state_38836__$1 = state_38836;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38836__$1,45,dchan);
} else
{if((state_val_38837 === 11))
{var inst_38717 = (state_38836[15]);var inst_38737 = (state_38836[24]);var inst_38737__$1 = cljs.core.seq(inst_38717);var state_38836__$1 = (function (){var statearr_38873 = state_38836;(statearr_38873[24] = inst_38737__$1);
return statearr_38873;
})();if(inst_38737__$1)
{var statearr_38874_38948 = state_38836__$1;(statearr_38874_38948[1] = 16);
} else
{var statearr_38875_38949 = state_38836__$1;(statearr_38875_38949[1] = 17);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 43))
{var state_38836__$1 = state_38836;var statearr_38876_38950 = state_38836__$1;(statearr_38876_38950[2] = null);
(statearr_38876_38950[1] = 44);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 12))
{var inst_38763 = (state_38836[2]);var state_38836__$1 = state_38836;var statearr_38877_38951 = state_38836__$1;(statearr_38877_38951[2] = inst_38763);
(statearr_38877_38951[1] = 9);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 44))
{var inst_38829 = (state_38836[2]);var state_38836__$1 = (function (){var statearr_38878 = state_38836;(statearr_38878[25] = inst_38829);
return statearr_38878;
})();var statearr_38879_38952 = state_38836__$1;(statearr_38879_38952[2] = null);
(statearr_38879_38952[1] = 2);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 13))
{var inst_38727 = (state_38836[23]);var inst_38730 = cljs.core.async.close_BANG_(inst_38727);var state_38836__$1 = state_38836;var statearr_38880_38953 = state_38836__$1;(statearr_38880_38953[2] = inst_38730);
(statearr_38880_38953[1] = 15);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 45))
{var inst_38826 = (state_38836[2]);var state_38836__$1 = state_38836;var statearr_38884_38954 = state_38836__$1;(statearr_38884_38954[2] = inst_38826);
(statearr_38884_38954[1] = 44);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 14))
{var state_38836__$1 = state_38836;var statearr_38885_38955 = state_38836__$1;(statearr_38885_38955[2] = null);
(statearr_38885_38955[1] = 15);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 15))
{var inst_38720 = (state_38836[14]);var inst_38717 = (state_38836[15]);var inst_38719 = (state_38836[16]);var inst_38718 = (state_38836[17]);var inst_38733 = (state_38836[2]);var inst_38734 = (inst_38720 + 1);var tmp38881 = inst_38717;var tmp38882 = inst_38719;var tmp38883 = inst_38718;var inst_38717__$1 = tmp38881;var inst_38718__$1 = tmp38883;var inst_38719__$1 = tmp38882;var inst_38720__$1 = inst_38734;var state_38836__$1 = (function (){var statearr_38886 = state_38836;(statearr_38886[14] = inst_38720__$1);
(statearr_38886[26] = inst_38733);
(statearr_38886[15] = inst_38717__$1);
(statearr_38886[16] = inst_38719__$1);
(statearr_38886[17] = inst_38718__$1);
return statearr_38886;
})();var statearr_38887_38956 = state_38836__$1;(statearr_38887_38956[2] = null);
(statearr_38887_38956[1] = 8);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 16))
{var inst_38737 = (state_38836[24]);var inst_38739 = cljs.core.chunked_seq_QMARK_(inst_38737);var state_38836__$1 = state_38836;if(inst_38739)
{var statearr_38888_38957 = state_38836__$1;(statearr_38888_38957[1] = 19);
} else
{var statearr_38889_38958 = state_38836__$1;(statearr_38889_38958[1] = 20);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 17))
{var state_38836__$1 = state_38836;var statearr_38890_38959 = state_38836__$1;(statearr_38890_38959[2] = null);
(statearr_38890_38959[1] = 18);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 18))
{var inst_38761 = (state_38836[2]);var state_38836__$1 = state_38836;var statearr_38891_38960 = state_38836__$1;(statearr_38891_38960[2] = inst_38761);
(statearr_38891_38960[1] = 12);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 19))
{var inst_38737 = (state_38836[24]);var inst_38741 = cljs.core.chunk_first(inst_38737);var inst_38742 = cljs.core.chunk_rest(inst_38737);var inst_38743 = cljs.core.count(inst_38741);var inst_38717 = inst_38742;var inst_38718 = inst_38741;var inst_38719 = inst_38743;var inst_38720 = 0;var state_38836__$1 = (function (){var statearr_38892 = state_38836;(statearr_38892[14] = inst_38720);
(statearr_38892[15] = inst_38717);
(statearr_38892[16] = inst_38719);
(statearr_38892[17] = inst_38718);
return statearr_38892;
})();var statearr_38893_38961 = state_38836__$1;(statearr_38893_38961[2] = null);
(statearr_38893_38961[1] = 8);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 20))
{var inst_38737 = (state_38836[24]);var inst_38747 = cljs.core.first(inst_38737);var inst_38748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38747,0,null);var inst_38749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38747,1,null);var state_38836__$1 = (function (){var statearr_38894 = state_38836;(statearr_38894[27] = inst_38748);
return statearr_38894;
})();if(cljs.core.truth_(inst_38749))
{var statearr_38895_38962 = state_38836__$1;(statearr_38895_38962[1] = 22);
} else
{var statearr_38896_38963 = state_38836__$1;(statearr_38896_38963[1] = 23);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 21))
{var inst_38758 = (state_38836[2]);var state_38836__$1 = state_38836;var statearr_38897_38964 = state_38836__$1;(statearr_38897_38964[2] = inst_38758);
(statearr_38897_38964[1] = 18);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 22))
{var inst_38748 = (state_38836[27]);var inst_38751 = cljs.core.async.close_BANG_(inst_38748);var state_38836__$1 = state_38836;var statearr_38898_38965 = state_38836__$1;(statearr_38898_38965[2] = inst_38751);
(statearr_38898_38965[1] = 24);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 23))
{var state_38836__$1 = state_38836;var statearr_38899_38966 = state_38836__$1;(statearr_38899_38966[2] = null);
(statearr_38899_38966[1] = 24);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 24))
{var inst_38737 = (state_38836[24]);var inst_38754 = (state_38836[2]);var inst_38755 = cljs.core.next(inst_38737);var inst_38717 = inst_38755;var inst_38718 = null;var inst_38719 = 0;var inst_38720 = 0;var state_38836__$1 = (function (){var statearr_38900 = state_38836;(statearr_38900[14] = inst_38720);
(statearr_38900[15] = inst_38717);
(statearr_38900[16] = inst_38719);
(statearr_38900[17] = inst_38718);
(statearr_38900[28] = inst_38754);
return statearr_38900;
})();var statearr_38901_38967 = state_38836__$1;(statearr_38901_38967[2] = null);
(statearr_38901_38967[1] = 8);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 25))
{var inst_38779 = (state_38836[7]);var inst_38778 = (state_38836[8]);var inst_38781 = (inst_38779 < inst_38778);var inst_38782 = inst_38781;var state_38836__$1 = state_38836;if(cljs.core.truth_(inst_38782))
{var statearr_38902_38968 = state_38836__$1;(statearr_38902_38968[1] = 27);
} else
{var statearr_38903_38969 = state_38836__$1;(statearr_38903_38969[1] = 28);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 26))
{var inst_38768 = (state_38836[19]);var inst_38822 = (state_38836[2]);var inst_38823 = cljs.core.seq(inst_38768);var state_38836__$1 = (function (){var statearr_38904 = state_38836;(statearr_38904[29] = inst_38822);
return statearr_38904;
})();if(inst_38823)
{var statearr_38905_38970 = state_38836__$1;(statearr_38905_38970[1] = 42);
} else
{var statearr_38906_38971 = state_38836__$1;(statearr_38906_38971[1] = 43);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 27))
{var inst_38779 = (state_38836[7]);var inst_38777 = (state_38836[9]);var inst_38708 = (state_38836[13]);var inst_38784 = (state_38836[30]);var inst_38784__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38777,inst_38779);var inst_38785 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38784__$1,inst_38708,done);var state_38836__$1 = (function (){var statearr_38907 = state_38836;(statearr_38907[30] = inst_38784__$1);
return statearr_38907;
})();if(cljs.core.truth_(inst_38785))
{var statearr_38908_38972 = state_38836__$1;(statearr_38908_38972[1] = 30);
} else
{var statearr_38909_38973 = state_38836__$1;(statearr_38909_38973[1] = 31);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 28))
{var inst_38776 = (state_38836[10]);var inst_38795 = (state_38836[12]);var inst_38795__$1 = cljs.core.seq(inst_38776);var state_38836__$1 = (function (){var statearr_38910 = state_38836;(statearr_38910[12] = inst_38795__$1);
return statearr_38910;
})();if(inst_38795__$1)
{var statearr_38911_38974 = state_38836__$1;(statearr_38911_38974[1] = 33);
} else
{var statearr_38912_38975 = state_38836__$1;(statearr_38912_38975[1] = 34);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 29))
{var inst_38820 = (state_38836[2]);var state_38836__$1 = state_38836;var statearr_38913_38976 = state_38836__$1;(statearr_38913_38976[2] = inst_38820);
(statearr_38913_38976[1] = 26);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 30))
{var state_38836__$1 = state_38836;var statearr_38914_38977 = state_38836__$1;(statearr_38914_38977[2] = null);
(statearr_38914_38977[1] = 32);
return cljs.core.constant$keyword$174;
} else
{if((state_val_38837 === 31))
{var inst_38784 = (state_38836[30]);var inst_38788 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_38789 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_38784);var state_38836__$1 = (function (){var statearr_38915 = state_38836;(statearr_38915[31] = inst_38788);
return statearr_38915;
})();var statearr_38916_38978 = state_38836__$1;(statearr_38916_38978[2] = inst_38789);
(statearr_38916_38978[1] = 32);
return cljs.core.constant$keyword$174;
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
});return ((function (switch__5897__auto__){
return (function() {
var state_machine__5898__auto__ = null;
var state_machine__5898__auto____0 = (function (){var statearr_38920 = (new Array(32));(statearr_38920[0] = state_machine__5898__auto__);
(statearr_38920[1] = 1);
return statearr_38920;
});
var state_machine__5898__auto____1 = (function (state_38836){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_38836);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$174))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e38921){if((e38921 instanceof Object))
{var ex__5901__auto__ = e38921;var statearr_38922_38979 = state_38836;(statearr_38922_38979[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38836);
return cljs.core.constant$keyword$174;
} else
{if(cljs.core.constant$keyword$129)
{throw e38921;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$174))
{{
var G__38980 = state_38836;
state_38836 = G__38980;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_38836){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_38836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_38923 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_38923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto___38924);
return statearr_38923;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5969__auto__);
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
cljs.core.async.Mix = (function (){var obj38982 = {};return obj38982;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$180,null,cljs.core.constant$keyword$181,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$182);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$181);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$182,chs);var pauses = pick(cljs.core.constant$keyword$180,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$183,solos,cljs.core.constant$keyword$184,pick(cljs.core.constant$keyword$181,chs),cljs.core.constant$keyword$185,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$180)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t39102 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t39102 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta39103){
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
this.meta39103 = meta39103;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39102.cljs$lang$type = true;
cljs.core.async.t39102.cljs$lang$ctorStr = "cljs.core.async/t39102";
cljs.core.async.t39102.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"cljs.core.async/t39102");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39102.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t39102.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39102.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39102.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39102.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39102.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39102.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t39102.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39102.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39104){var self__ = this;
var _39104__$1 = this;return self__.meta39103;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39104,meta39103__$1){var self__ = this;
var _39104__$1 = this;return (new cljs.core.async.t39102(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta39103__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t39102 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t39102(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta39103){return (new cljs.core.async.t39102(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta39103));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t39102(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5967__auto___39221 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_39174){var state_val_39175 = (state_39174[1]);if((state_val_39175 === 1))
{var inst_39108 = (state_39174[7]);var inst_39108__$1 = calc_state();var inst_39109 = cljs.core.seq_QMARK_(inst_39108__$1);var state_39174__$1 = (function (){var statearr_39176 = state_39174;(statearr_39176[7] = inst_39108__$1);
return statearr_39176;
})();if(inst_39109)
{var statearr_39177_39222 = state_39174__$1;(statearr_39177_39222[1] = 2);
} else
{var statearr_39178_39223 = state_39174__$1;(statearr_39178_39223[1] = 3);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_39175 === 2))
{var inst_39108 = (state_39174[7]);var inst_39111 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_39108);var state_39174__$1 = state_39174;var statearr_39179_39224 = state_39174__$1;(statearr_39179_39224[2] = inst_39111);
(statearr_39179_39224[1] = 4);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39175 === 3))
{var inst_39108 = (state_39174[7]);var state_39174__$1 = state_39174;var statearr_39180_39225 = state_39174__$1;(statearr_39180_39225[2] = inst_39108);
(statearr_39180_39225[1] = 4);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39175 === 4))
{var inst_39108 = (state_39174[7]);var inst_39114 = (state_39174[2]);var inst_39115 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39114,cljs.core.constant$keyword$185);var inst_39116 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39114,cljs.core.constant$keyword$184);var inst_39117 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39114,cljs.core.constant$keyword$183);var inst_39118 = inst_39108;var state_39174__$1 = (function (){var statearr_39181 = state_39174;(statearr_39181[8] = inst_39115);
(statearr_39181[9] = inst_39116);
(statearr_39181[10] = inst_39118);
(statearr_39181[11] = inst_39117);
return statearr_39181;
})();var statearr_39182_39226 = state_39174__$1;(statearr_39182_39226[2] = null);
(statearr_39182_39226[1] = 5);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39175 === 5))
{var inst_39118 = (state_39174[10]);var inst_39121 = cljs.core.seq_QMARK_(inst_39118);var state_39174__$1 = state_39174;if(inst_39121)
{var statearr_39183_39227 = state_39174__$1;(statearr_39183_39227[1] = 7);
} else
{var statearr_39184_39228 = state_39174__$1;(statearr_39184_39228[1] = 8);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_39175 === 6))
{var inst_39172 = (state_39174[2]);var state_39174__$1 = state_39174;return cljs.core.async.impl.ioc_helpers.return_chan(state_39174__$1,inst_39172);
} else
{if((state_val_39175 === 7))
{var inst_39118 = (state_39174[10]);var inst_39123 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_39118);var state_39174__$1 = state_39174;var statearr_39185_39229 = state_39174__$1;(statearr_39185_39229[2] = inst_39123);
(statearr_39185_39229[1] = 9);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39175 === 8))
{var inst_39118 = (state_39174[10]);var state_39174__$1 = state_39174;var statearr_39186_39230 = state_39174__$1;(statearr_39186_39230[2] = inst_39118);
(statearr_39186_39230[1] = 9);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39175 === 9))
{var inst_39126 = (state_39174[12]);var inst_39126__$1 = (state_39174[2]);var inst_39127 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39126__$1,cljs.core.constant$keyword$185);var inst_39128 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39126__$1,cljs.core.constant$keyword$184);var inst_39129 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39126__$1,cljs.core.constant$keyword$183);var state_39174__$1 = (function (){var statearr_39187 = state_39174;(statearr_39187[13] = inst_39129);
(statearr_39187[14] = inst_39128);
(statearr_39187[12] = inst_39126__$1);
return statearr_39187;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_39174__$1,10,inst_39127);
} else
{if((state_val_39175 === 10))
{var inst_39134 = (state_39174[15]);var inst_39133 = (state_39174[16]);var inst_39132 = (state_39174[2]);var inst_39133__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39132,0,null);var inst_39134__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39132,1,null);var inst_39135 = (inst_39133__$1 == null);var inst_39136 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39134__$1,change);var inst_39137 = (inst_39135) || (inst_39136);var state_39174__$1 = (function (){var statearr_39188 = state_39174;(statearr_39188[15] = inst_39134__$1);
(statearr_39188[16] = inst_39133__$1);
return statearr_39188;
})();if(cljs.core.truth_(inst_39137))
{var statearr_39189_39231 = state_39174__$1;(statearr_39189_39231[1] = 11);
} else
{var statearr_39190_39232 = state_39174__$1;(statearr_39190_39232[1] = 12);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_39175 === 11))
{var inst_39133 = (state_39174[16]);var inst_39139 = (inst_39133 == null);var state_39174__$1 = state_39174;if(cljs.core.truth_(inst_39139))
{var statearr_39191_39233 = state_39174__$1;(statearr_39191_39233[1] = 14);
} else
{var statearr_39192_39234 = state_39174__$1;(statearr_39192_39234[1] = 15);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_39175 === 12))
{var inst_39134 = (state_39174[15]);var inst_39148 = (state_39174[17]);var inst_39129 = (state_39174[13]);var inst_39148__$1 = (inst_39129.cljs$core$IFn$_invoke$arity$1 ? inst_39129.cljs$core$IFn$_invoke$arity$1(inst_39134) : inst_39129.call(null,inst_39134));var state_39174__$1 = (function (){var statearr_39193 = state_39174;(statearr_39193[17] = inst_39148__$1);
return statearr_39193;
})();if(cljs.core.truth_(inst_39148__$1))
{var statearr_39194_39235 = state_39174__$1;(statearr_39194_39235[1] = 17);
} else
{var statearr_39195_39236 = state_39174__$1;(statearr_39195_39236[1] = 18);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_39175 === 13))
{var inst_39170 = (state_39174[2]);var state_39174__$1 = state_39174;var statearr_39196_39237 = state_39174__$1;(statearr_39196_39237[2] = inst_39170);
(statearr_39196_39237[1] = 6);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39175 === 14))
{var inst_39134 = (state_39174[15]);var inst_39141 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_39134);var state_39174__$1 = state_39174;var statearr_39197_39238 = state_39174__$1;(statearr_39197_39238[2] = inst_39141);
(statearr_39197_39238[1] = 16);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39175 === 15))
{var state_39174__$1 = state_39174;var statearr_39198_39239 = state_39174__$1;(statearr_39198_39239[2] = null);
(statearr_39198_39239[1] = 16);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39175 === 16))
{var inst_39144 = (state_39174[2]);var inst_39145 = calc_state();var inst_39118 = inst_39145;var state_39174__$1 = (function (){var statearr_39199 = state_39174;(statearr_39199[18] = inst_39144);
(statearr_39199[10] = inst_39118);
return statearr_39199;
})();var statearr_39200_39240 = state_39174__$1;(statearr_39200_39240[2] = null);
(statearr_39200_39240[1] = 5);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39175 === 17))
{var inst_39148 = (state_39174[17]);var state_39174__$1 = state_39174;var statearr_39201_39241 = state_39174__$1;(statearr_39201_39241[2] = inst_39148);
(statearr_39201_39241[1] = 19);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39175 === 18))
{var inst_39134 = (state_39174[15]);var inst_39129 = (state_39174[13]);var inst_39128 = (state_39174[14]);var inst_39151 = cljs.core.empty_QMARK_(inst_39129);var inst_39152 = (inst_39128.cljs$core$IFn$_invoke$arity$1 ? inst_39128.cljs$core$IFn$_invoke$arity$1(inst_39134) : inst_39128.call(null,inst_39134));var inst_39153 = cljs.core.not(inst_39152);var inst_39154 = (inst_39151) && (inst_39153);var state_39174__$1 = state_39174;var statearr_39202_39242 = state_39174__$1;(statearr_39202_39242[2] = inst_39154);
(statearr_39202_39242[1] = 19);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39175 === 19))
{var inst_39156 = (state_39174[2]);var state_39174__$1 = state_39174;if(cljs.core.truth_(inst_39156))
{var statearr_39203_39243 = state_39174__$1;(statearr_39203_39243[1] = 20);
} else
{var statearr_39204_39244 = state_39174__$1;(statearr_39204_39244[1] = 21);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_39175 === 20))
{var inst_39133 = (state_39174[16]);var state_39174__$1 = state_39174;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39174__$1,23,out,inst_39133);
} else
{if((state_val_39175 === 21))
{var inst_39126 = (state_39174[12]);var inst_39118 = inst_39126;var state_39174__$1 = (function (){var statearr_39205 = state_39174;(statearr_39205[10] = inst_39118);
return statearr_39205;
})();var statearr_39206_39245 = state_39174__$1;(statearr_39206_39245[2] = null);
(statearr_39206_39245[1] = 5);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39175 === 22))
{var inst_39168 = (state_39174[2]);var state_39174__$1 = state_39174;var statearr_39207_39246 = state_39174__$1;(statearr_39207_39246[2] = inst_39168);
(statearr_39207_39246[1] = 13);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39175 === 23))
{var inst_39159 = (state_39174[2]);var state_39174__$1 = state_39174;if(cljs.core.truth_(inst_39159))
{var statearr_39208_39247 = state_39174__$1;(statearr_39208_39247[1] = 24);
} else
{var statearr_39209_39248 = state_39174__$1;(statearr_39209_39248[1] = 25);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_39175 === 24))
{var inst_39126 = (state_39174[12]);var inst_39118 = inst_39126;var state_39174__$1 = (function (){var statearr_39210 = state_39174;(statearr_39210[10] = inst_39118);
return statearr_39210;
})();var statearr_39211_39249 = state_39174__$1;(statearr_39211_39249[2] = null);
(statearr_39211_39249[1] = 5);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39175 === 25))
{var state_39174__$1 = state_39174;var statearr_39212_39250 = state_39174__$1;(statearr_39212_39250[2] = null);
(statearr_39212_39250[1] = 26);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39175 === 26))
{var inst_39164 = (state_39174[2]);var state_39174__$1 = state_39174;var statearr_39213_39251 = state_39174__$1;(statearr_39213_39251[2] = inst_39164);
(statearr_39213_39251[1] = 22);
return cljs.core.constant$keyword$174;
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
});return ((function (switch__5897__auto__){
return (function() {
var state_machine__5898__auto__ = null;
var state_machine__5898__auto____0 = (function (){var statearr_39217 = (new Array(19));(statearr_39217[0] = state_machine__5898__auto__);
(statearr_39217[1] = 1);
return statearr_39217;
});
var state_machine__5898__auto____1 = (function (state_39174){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_39174);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$174))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e39218){if((e39218 instanceof Object))
{var ex__5901__auto__ = e39218;var statearr_39219_39252 = state_39174;(statearr_39219_39252[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39174);
return cljs.core.constant$keyword$174;
} else
{if(cljs.core.constant$keyword$129)
{throw e39218;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$174))
{{
var G__39253 = state_39174;
state_39174 = G__39253;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_39174){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_39174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_39220 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_39220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto___39221);
return statearr_39220;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5969__auto__);
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
cljs.core.async.Pub = (function (){var obj39255 = {};return obj39255;
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
return (function (p1__39256_SHARP_){if(cljs.core.truth_((p1__39256_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__39256_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__39256_SHARP_.call(null,topic))))
{return p1__39256_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__39256_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3285__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t39371 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t39371 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta39372){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta39372 = meta39372;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39371.cljs$lang$type = true;
cljs.core.async.t39371.cljs$lang$ctorStr = "cljs.core.async/t39371";
cljs.core.async.t39371.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"cljs.core.async/t39371");
});})(mults,ensure_mult))
;
cljs.core.async.t39371.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t39371.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t39371.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t39371.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t39371.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t39371.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t39371.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t39371.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_39373){var self__ = this;
var _39373__$1 = this;return self__.meta39372;
});})(mults,ensure_mult))
;
cljs.core.async.t39371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_39373,meta39372__$1){var self__ = this;
var _39373__$1 = this;return (new cljs.core.async.t39371(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta39372__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t39371 = ((function (mults,ensure_mult){
return (function __GT_t39371(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta39372){return (new cljs.core.async.t39371(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta39372));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t39371(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5967__auto___39485 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_39441){var state_val_39442 = (state_39441[1]);if((state_val_39442 === 1))
{var state_39441__$1 = state_39441;var statearr_39443_39486 = state_39441__$1;(statearr_39443_39486[2] = null);
(statearr_39443_39486[1] = 2);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39442 === 2))
{var state_39441__$1 = state_39441;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39441__$1,4,ch);
} else
{if((state_val_39442 === 3))
{var inst_39439 = (state_39441[2]);var state_39441__$1 = state_39441;return cljs.core.async.impl.ioc_helpers.return_chan(state_39441__$1,inst_39439);
} else
{if((state_val_39442 === 4))
{var inst_39376 = (state_39441[7]);var inst_39376__$1 = (state_39441[2]);var inst_39377 = (inst_39376__$1 == null);var state_39441__$1 = (function (){var statearr_39444 = state_39441;(statearr_39444[7] = inst_39376__$1);
return statearr_39444;
})();if(cljs.core.truth_(inst_39377))
{var statearr_39445_39487 = state_39441__$1;(statearr_39445_39487[1] = 5);
} else
{var statearr_39446_39488 = state_39441__$1;(statearr_39446_39488[1] = 6);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_39442 === 5))
{var inst_39383 = cljs.core.deref(mults);var inst_39384 = cljs.core.vals(inst_39383);var inst_39385 = cljs.core.seq(inst_39384);var inst_39386 = inst_39385;var inst_39387 = null;var inst_39388 = 0;var inst_39389 = 0;var state_39441__$1 = (function (){var statearr_39447 = state_39441;(statearr_39447[8] = inst_39388);
(statearr_39447[9] = inst_39389);
(statearr_39447[10] = inst_39387);
(statearr_39447[11] = inst_39386);
return statearr_39447;
})();var statearr_39448_39489 = state_39441__$1;(statearr_39448_39489[2] = null);
(statearr_39448_39489[1] = 8);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39442 === 6))
{var inst_39376 = (state_39441[7]);var inst_39424 = (state_39441[12]);var inst_39424__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_39376) : topic_fn.call(null,inst_39376));var inst_39425 = cljs.core.deref(mults);var inst_39426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39425,inst_39424__$1);var inst_39427 = cljs.core.async.muxch_STAR_(inst_39426);var state_39441__$1 = (function (){var statearr_39449 = state_39441;(statearr_39449[12] = inst_39424__$1);
return statearr_39449;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39441__$1,19,inst_39427,inst_39376);
} else
{if((state_val_39442 === 7))
{var inst_39437 = (state_39441[2]);var state_39441__$1 = state_39441;var statearr_39450_39490 = state_39441__$1;(statearr_39450_39490[2] = inst_39437);
(statearr_39450_39490[1] = 3);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39442 === 8))
{var inst_39388 = (state_39441[8]);var inst_39389 = (state_39441[9]);var inst_39391 = (inst_39389 < inst_39388);var inst_39392 = inst_39391;var state_39441__$1 = state_39441;if(cljs.core.truth_(inst_39392))
{var statearr_39454_39491 = state_39441__$1;(statearr_39454_39491[1] = 10);
} else
{var statearr_39455_39492 = state_39441__$1;(statearr_39455_39492[1] = 11);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_39442 === 9))
{var inst_39422 = (state_39441[2]);var state_39441__$1 = state_39441;var statearr_39456_39493 = state_39441__$1;(statearr_39456_39493[2] = inst_39422);
(statearr_39456_39493[1] = 7);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39442 === 10))
{var inst_39388 = (state_39441[8]);var inst_39389 = (state_39441[9]);var inst_39387 = (state_39441[10]);var inst_39386 = (state_39441[11]);var inst_39394 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39387,inst_39389);var inst_39395 = cljs.core.async.muxch_STAR_(inst_39394);var inst_39396 = cljs.core.async.close_BANG_(inst_39395);var inst_39397 = (inst_39389 + 1);var tmp39451 = inst_39388;var tmp39452 = inst_39387;var tmp39453 = inst_39386;var inst_39386__$1 = tmp39453;var inst_39387__$1 = tmp39452;var inst_39388__$1 = tmp39451;var inst_39389__$1 = inst_39397;var state_39441__$1 = (function (){var statearr_39457 = state_39441;(statearr_39457[8] = inst_39388__$1);
(statearr_39457[9] = inst_39389__$1);
(statearr_39457[10] = inst_39387__$1);
(statearr_39457[11] = inst_39386__$1);
(statearr_39457[13] = inst_39396);
return statearr_39457;
})();var statearr_39458_39494 = state_39441__$1;(statearr_39458_39494[2] = null);
(statearr_39458_39494[1] = 8);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39442 === 11))
{var inst_39386 = (state_39441[11]);var inst_39400 = (state_39441[14]);var inst_39400__$1 = cljs.core.seq(inst_39386);var state_39441__$1 = (function (){var statearr_39459 = state_39441;(statearr_39459[14] = inst_39400__$1);
return statearr_39459;
})();if(inst_39400__$1)
{var statearr_39460_39495 = state_39441__$1;(statearr_39460_39495[1] = 13);
} else
{var statearr_39461_39496 = state_39441__$1;(statearr_39461_39496[1] = 14);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_39442 === 12))
{var inst_39420 = (state_39441[2]);var state_39441__$1 = state_39441;var statearr_39462_39497 = state_39441__$1;(statearr_39462_39497[2] = inst_39420);
(statearr_39462_39497[1] = 9);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39442 === 13))
{var inst_39400 = (state_39441[14]);var inst_39402 = cljs.core.chunked_seq_QMARK_(inst_39400);var state_39441__$1 = state_39441;if(inst_39402)
{var statearr_39463_39498 = state_39441__$1;(statearr_39463_39498[1] = 16);
} else
{var statearr_39464_39499 = state_39441__$1;(statearr_39464_39499[1] = 17);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_39442 === 14))
{var state_39441__$1 = state_39441;var statearr_39465_39500 = state_39441__$1;(statearr_39465_39500[2] = null);
(statearr_39465_39500[1] = 15);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39442 === 15))
{var inst_39418 = (state_39441[2]);var state_39441__$1 = state_39441;var statearr_39466_39501 = state_39441__$1;(statearr_39466_39501[2] = inst_39418);
(statearr_39466_39501[1] = 12);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39442 === 16))
{var inst_39400 = (state_39441[14]);var inst_39404 = cljs.core.chunk_first(inst_39400);var inst_39405 = cljs.core.chunk_rest(inst_39400);var inst_39406 = cljs.core.count(inst_39404);var inst_39386 = inst_39405;var inst_39387 = inst_39404;var inst_39388 = inst_39406;var inst_39389 = 0;var state_39441__$1 = (function (){var statearr_39467 = state_39441;(statearr_39467[8] = inst_39388);
(statearr_39467[9] = inst_39389);
(statearr_39467[10] = inst_39387);
(statearr_39467[11] = inst_39386);
return statearr_39467;
})();var statearr_39468_39502 = state_39441__$1;(statearr_39468_39502[2] = null);
(statearr_39468_39502[1] = 8);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39442 === 17))
{var inst_39400 = (state_39441[14]);var inst_39409 = cljs.core.first(inst_39400);var inst_39410 = cljs.core.async.muxch_STAR_(inst_39409);var inst_39411 = cljs.core.async.close_BANG_(inst_39410);var inst_39412 = cljs.core.next(inst_39400);var inst_39386 = inst_39412;var inst_39387 = null;var inst_39388 = 0;var inst_39389 = 0;var state_39441__$1 = (function (){var statearr_39469 = state_39441;(statearr_39469[15] = inst_39411);
(statearr_39469[8] = inst_39388);
(statearr_39469[9] = inst_39389);
(statearr_39469[10] = inst_39387);
(statearr_39469[11] = inst_39386);
return statearr_39469;
})();var statearr_39470_39503 = state_39441__$1;(statearr_39470_39503[2] = null);
(statearr_39470_39503[1] = 8);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39442 === 18))
{var inst_39415 = (state_39441[2]);var state_39441__$1 = state_39441;var statearr_39471_39504 = state_39441__$1;(statearr_39471_39504[2] = inst_39415);
(statearr_39471_39504[1] = 15);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39442 === 19))
{var inst_39429 = (state_39441[2]);var state_39441__$1 = state_39441;if(cljs.core.truth_(inst_39429))
{var statearr_39472_39505 = state_39441__$1;(statearr_39472_39505[1] = 20);
} else
{var statearr_39473_39506 = state_39441__$1;(statearr_39473_39506[1] = 21);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_39442 === 20))
{var state_39441__$1 = state_39441;var statearr_39474_39507 = state_39441__$1;(statearr_39474_39507[2] = null);
(statearr_39474_39507[1] = 22);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39442 === 21))
{var inst_39424 = (state_39441[12]);var inst_39432 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_39424);var state_39441__$1 = state_39441;var statearr_39475_39508 = state_39441__$1;(statearr_39475_39508[2] = inst_39432);
(statearr_39475_39508[1] = 22);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39442 === 22))
{var inst_39434 = (state_39441[2]);var state_39441__$1 = (function (){var statearr_39476 = state_39441;(statearr_39476[16] = inst_39434);
return statearr_39476;
})();var statearr_39477_39509 = state_39441__$1;(statearr_39477_39509[2] = null);
(statearr_39477_39509[1] = 2);
return cljs.core.constant$keyword$174;
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
});return ((function (switch__5897__auto__){
return (function() {
var state_machine__5898__auto__ = null;
var state_machine__5898__auto____0 = (function (){var statearr_39481 = (new Array(17));(statearr_39481[0] = state_machine__5898__auto__);
(statearr_39481[1] = 1);
return statearr_39481;
});
var state_machine__5898__auto____1 = (function (state_39441){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_39441);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$174))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e39482){if((e39482 instanceof Object))
{var ex__5901__auto__ = e39482;var statearr_39483_39510 = state_39441;(statearr_39483_39510[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39441);
return cljs.core.constant$keyword$174;
} else
{if(cljs.core.constant$keyword$129)
{throw e39482;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$174))
{{
var G__39511 = state_39441;
state_39441 = G__39511;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_39441){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_39441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_39484 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_39484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto___39485);
return statearr_39484;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5969__auto__);
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5967__auto___39648 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_39618){var state_val_39619 = (state_39618[1]);if((state_val_39619 === 1))
{var state_39618__$1 = state_39618;var statearr_39620_39649 = state_39618__$1;(statearr_39620_39649[2] = null);
(statearr_39620_39649[1] = 2);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39619 === 2))
{var inst_39581 = cljs.core.reset_BANG_(dctr,cnt);var inst_39582 = 0;var state_39618__$1 = (function (){var statearr_39621 = state_39618;(statearr_39621[7] = inst_39582);
(statearr_39621[8] = inst_39581);
return statearr_39621;
})();var statearr_39622_39650 = state_39618__$1;(statearr_39622_39650[2] = null);
(statearr_39622_39650[1] = 4);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39619 === 3))
{var inst_39616 = (state_39618[2]);var state_39618__$1 = state_39618;return cljs.core.async.impl.ioc_helpers.return_chan(state_39618__$1,inst_39616);
} else
{if((state_val_39619 === 4))
{var inst_39582 = (state_39618[7]);var inst_39584 = (inst_39582 < cnt);var state_39618__$1 = state_39618;if(cljs.core.truth_(inst_39584))
{var statearr_39623_39651 = state_39618__$1;(statearr_39623_39651[1] = 6);
} else
{var statearr_39624_39652 = state_39618__$1;(statearr_39624_39652[1] = 7);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_39619 === 5))
{var inst_39602 = (state_39618[2]);var state_39618__$1 = (function (){var statearr_39625 = state_39618;(statearr_39625[9] = inst_39602);
return statearr_39625;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39618__$1,12,dchan);
} else
{if((state_val_39619 === 6))
{var state_39618__$1 = state_39618;var statearr_39626_39653 = state_39618__$1;(statearr_39626_39653[2] = null);
(statearr_39626_39653[1] = 11);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39619 === 7))
{var state_39618__$1 = state_39618;var statearr_39627_39654 = state_39618__$1;(statearr_39627_39654[2] = null);
(statearr_39627_39654[1] = 8);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39619 === 8))
{var inst_39600 = (state_39618[2]);var state_39618__$1 = state_39618;var statearr_39628_39655 = state_39618__$1;(statearr_39628_39655[2] = inst_39600);
(statearr_39628_39655[1] = 5);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39619 === 9))
{var inst_39582 = (state_39618[7]);var inst_39595 = (state_39618[2]);var inst_39596 = (inst_39582 + 1);var inst_39582__$1 = inst_39596;var state_39618__$1 = (function (){var statearr_39629 = state_39618;(statearr_39629[7] = inst_39582__$1);
(statearr_39629[10] = inst_39595);
return statearr_39629;
})();var statearr_39630_39656 = state_39618__$1;(statearr_39630_39656[2] = null);
(statearr_39630_39656[1] = 4);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39619 === 10))
{var inst_39586 = (state_39618[2]);var inst_39587 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_39618__$1 = (function (){var statearr_39631 = state_39618;(statearr_39631[11] = inst_39586);
return statearr_39631;
})();var statearr_39632_39657 = state_39618__$1;(statearr_39632_39657[2] = inst_39587);
cljs.core.async.impl.ioc_helpers.process_exception(state_39618__$1);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39619 === 11))
{var inst_39582 = (state_39618[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_39618,10,Object,null,9);var inst_39591 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_39582) : chs__$1.call(null,inst_39582));var inst_39592 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_39582) : done.call(null,inst_39582));var inst_39593 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_39591,inst_39592);var state_39618__$1 = state_39618;var statearr_39633_39658 = state_39618__$1;(statearr_39633_39658[2] = inst_39593);
cljs.core.async.impl.ioc_helpers.process_exception(state_39618__$1);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39619 === 12))
{var inst_39604 = (state_39618[12]);var inst_39604__$1 = (state_39618[2]);var inst_39605 = cljs.core.some(cljs.core.nil_QMARK_,inst_39604__$1);var state_39618__$1 = (function (){var statearr_39634 = state_39618;(statearr_39634[12] = inst_39604__$1);
return statearr_39634;
})();if(cljs.core.truth_(inst_39605))
{var statearr_39635_39659 = state_39618__$1;(statearr_39635_39659[1] = 13);
} else
{var statearr_39636_39660 = state_39618__$1;(statearr_39636_39660[1] = 14);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_39619 === 13))
{var inst_39607 = cljs.core.async.close_BANG_(out);var state_39618__$1 = state_39618;var statearr_39637_39661 = state_39618__$1;(statearr_39637_39661[2] = inst_39607);
(statearr_39637_39661[1] = 15);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39619 === 14))
{var inst_39604 = (state_39618[12]);var inst_39609 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_39604);var state_39618__$1 = state_39618;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39618__$1,16,out,inst_39609);
} else
{if((state_val_39619 === 15))
{var inst_39614 = (state_39618[2]);var state_39618__$1 = state_39618;var statearr_39638_39662 = state_39618__$1;(statearr_39638_39662[2] = inst_39614);
(statearr_39638_39662[1] = 3);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39619 === 16))
{var inst_39611 = (state_39618[2]);var state_39618__$1 = (function (){var statearr_39639 = state_39618;(statearr_39639[13] = inst_39611);
return statearr_39639;
})();var statearr_39640_39663 = state_39618__$1;(statearr_39640_39663[2] = null);
(statearr_39640_39663[1] = 2);
return cljs.core.constant$keyword$174;
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
});return ((function (switch__5897__auto__){
return (function() {
var state_machine__5898__auto__ = null;
var state_machine__5898__auto____0 = (function (){var statearr_39644 = (new Array(14));(statearr_39644[0] = state_machine__5898__auto__);
(statearr_39644[1] = 1);
return statearr_39644;
});
var state_machine__5898__auto____1 = (function (state_39618){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_39618);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$174))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e39645){if((e39645 instanceof Object))
{var ex__5901__auto__ = e39645;var statearr_39646_39664 = state_39618;(statearr_39646_39664[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39618);
return cljs.core.constant$keyword$174;
} else
{if(cljs.core.constant$keyword$129)
{throw e39645;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$174))
{{
var G__39665 = state_39618;
state_39618 = G__39665;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_39618){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_39618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_39647 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_39647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto___39648);
return statearr_39647;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5969__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5967__auto___39773 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_39749){var state_val_39750 = (state_39749[1]);if((state_val_39750 === 1))
{var inst_39720 = cljs.core.vec(chs);var inst_39721 = inst_39720;var state_39749__$1 = (function (){var statearr_39751 = state_39749;(statearr_39751[7] = inst_39721);
return statearr_39751;
})();var statearr_39752_39774 = state_39749__$1;(statearr_39752_39774[2] = null);
(statearr_39752_39774[1] = 2);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39750 === 2))
{var inst_39721 = (state_39749[7]);var inst_39723 = cljs.core.count(inst_39721);var inst_39724 = (inst_39723 > 0);var state_39749__$1 = state_39749;if(cljs.core.truth_(inst_39724))
{var statearr_39753_39775 = state_39749__$1;(statearr_39753_39775[1] = 4);
} else
{var statearr_39754_39776 = state_39749__$1;(statearr_39754_39776[1] = 5);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_39750 === 3))
{var inst_39747 = (state_39749[2]);var state_39749__$1 = state_39749;return cljs.core.async.impl.ioc_helpers.return_chan(state_39749__$1,inst_39747);
} else
{if((state_val_39750 === 4))
{var inst_39721 = (state_39749[7]);var state_39749__$1 = state_39749;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_39749__$1,7,inst_39721);
} else
{if((state_val_39750 === 5))
{var inst_39743 = cljs.core.async.close_BANG_(out);var state_39749__$1 = state_39749;var statearr_39755_39777 = state_39749__$1;(statearr_39755_39777[2] = inst_39743);
(statearr_39755_39777[1] = 6);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39750 === 6))
{var inst_39745 = (state_39749[2]);var state_39749__$1 = state_39749;var statearr_39756_39778 = state_39749__$1;(statearr_39756_39778[2] = inst_39745);
(statearr_39756_39778[1] = 3);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39750 === 7))
{var inst_39728 = (state_39749[8]);var inst_39729 = (state_39749[9]);var inst_39728__$1 = (state_39749[2]);var inst_39729__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39728__$1,0,null);var inst_39730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39728__$1,1,null);var inst_39731 = (inst_39729__$1 == null);var state_39749__$1 = (function (){var statearr_39757 = state_39749;(statearr_39757[10] = inst_39730);
(statearr_39757[8] = inst_39728__$1);
(statearr_39757[9] = inst_39729__$1);
return statearr_39757;
})();if(cljs.core.truth_(inst_39731))
{var statearr_39758_39779 = state_39749__$1;(statearr_39758_39779[1] = 8);
} else
{var statearr_39759_39780 = state_39749__$1;(statearr_39759_39780[1] = 9);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_39750 === 8))
{var inst_39730 = (state_39749[10]);var inst_39728 = (state_39749[8]);var inst_39729 = (state_39749[9]);var inst_39721 = (state_39749[7]);var inst_39733 = (function (){var c = inst_39730;var v = inst_39729;var vec__39726 = inst_39728;var cs = inst_39721;return ((function (c,v,vec__39726,cs,inst_39730,inst_39728,inst_39729,inst_39721,state_val_39750){
return (function (p1__39666_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__39666_SHARP_);
});
;})(c,v,vec__39726,cs,inst_39730,inst_39728,inst_39729,inst_39721,state_val_39750))
})();var inst_39734 = cljs.core.filterv(inst_39733,inst_39721);var inst_39721__$1 = inst_39734;var state_39749__$1 = (function (){var statearr_39760 = state_39749;(statearr_39760[7] = inst_39721__$1);
return statearr_39760;
})();var statearr_39761_39781 = state_39749__$1;(statearr_39761_39781[2] = null);
(statearr_39761_39781[1] = 2);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39750 === 9))
{var inst_39729 = (state_39749[9]);var state_39749__$1 = state_39749;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39749__$1,11,out,inst_39729);
} else
{if((state_val_39750 === 10))
{var inst_39741 = (state_39749[2]);var state_39749__$1 = state_39749;var statearr_39763_39782 = state_39749__$1;(statearr_39763_39782[2] = inst_39741);
(statearr_39763_39782[1] = 6);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39750 === 11))
{var inst_39721 = (state_39749[7]);var inst_39738 = (state_39749[2]);var tmp39762 = inst_39721;var inst_39721__$1 = tmp39762;var state_39749__$1 = (function (){var statearr_39764 = state_39749;(statearr_39764[11] = inst_39738);
(statearr_39764[7] = inst_39721__$1);
return statearr_39764;
})();var statearr_39765_39783 = state_39749__$1;(statearr_39765_39783[2] = null);
(statearr_39765_39783[1] = 2);
return cljs.core.constant$keyword$174;
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
});return ((function (switch__5897__auto__){
return (function() {
var state_machine__5898__auto__ = null;
var state_machine__5898__auto____0 = (function (){var statearr_39769 = (new Array(12));(statearr_39769[0] = state_machine__5898__auto__);
(statearr_39769[1] = 1);
return statearr_39769;
});
var state_machine__5898__auto____1 = (function (state_39749){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_39749);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$174))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e39770){if((e39770 instanceof Object))
{var ex__5901__auto__ = e39770;var statearr_39771_39784 = state_39749;(statearr_39771_39784[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39749);
return cljs.core.constant$keyword$174;
} else
{if(cljs.core.constant$keyword$129)
{throw e39770;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$174))
{{
var G__39785 = state_39749;
state_39749 = G__39785;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_39749){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_39749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_39772 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_39772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto___39773);
return statearr_39772;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5969__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5967__auto___39878 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_39855){var state_val_39856 = (state_39855[1]);if((state_val_39856 === 1))
{var inst_39832 = 0;var state_39855__$1 = (function (){var statearr_39857 = state_39855;(statearr_39857[7] = inst_39832);
return statearr_39857;
})();var statearr_39858_39879 = state_39855__$1;(statearr_39858_39879[2] = null);
(statearr_39858_39879[1] = 2);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39856 === 2))
{var inst_39832 = (state_39855[7]);var inst_39834 = (inst_39832 < n);var state_39855__$1 = state_39855;if(cljs.core.truth_(inst_39834))
{var statearr_39859_39880 = state_39855__$1;(statearr_39859_39880[1] = 4);
} else
{var statearr_39860_39881 = state_39855__$1;(statearr_39860_39881[1] = 5);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_39856 === 3))
{var inst_39852 = (state_39855[2]);var inst_39853 = cljs.core.async.close_BANG_(out);var state_39855__$1 = (function (){var statearr_39861 = state_39855;(statearr_39861[8] = inst_39852);
return statearr_39861;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_39855__$1,inst_39853);
} else
{if((state_val_39856 === 4))
{var state_39855__$1 = state_39855;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39855__$1,7,ch);
} else
{if((state_val_39856 === 5))
{var state_39855__$1 = state_39855;var statearr_39862_39882 = state_39855__$1;(statearr_39862_39882[2] = null);
(statearr_39862_39882[1] = 6);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39856 === 6))
{var inst_39850 = (state_39855[2]);var state_39855__$1 = state_39855;var statearr_39863_39883 = state_39855__$1;(statearr_39863_39883[2] = inst_39850);
(statearr_39863_39883[1] = 3);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39856 === 7))
{var inst_39837 = (state_39855[9]);var inst_39837__$1 = (state_39855[2]);var inst_39838 = (inst_39837__$1 == null);var inst_39839 = cljs.core.not(inst_39838);var state_39855__$1 = (function (){var statearr_39864 = state_39855;(statearr_39864[9] = inst_39837__$1);
return statearr_39864;
})();if(inst_39839)
{var statearr_39865_39884 = state_39855__$1;(statearr_39865_39884[1] = 8);
} else
{var statearr_39866_39885 = state_39855__$1;(statearr_39866_39885[1] = 9);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_39856 === 8))
{var inst_39837 = (state_39855[9]);var state_39855__$1 = state_39855;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39855__$1,11,out,inst_39837);
} else
{if((state_val_39856 === 9))
{var state_39855__$1 = state_39855;var statearr_39867_39886 = state_39855__$1;(statearr_39867_39886[2] = null);
(statearr_39867_39886[1] = 10);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39856 === 10))
{var inst_39847 = (state_39855[2]);var state_39855__$1 = state_39855;var statearr_39868_39887 = state_39855__$1;(statearr_39868_39887[2] = inst_39847);
(statearr_39868_39887[1] = 6);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39856 === 11))
{var inst_39832 = (state_39855[7]);var inst_39842 = (state_39855[2]);var inst_39843 = (inst_39832 + 1);var inst_39832__$1 = inst_39843;var state_39855__$1 = (function (){var statearr_39869 = state_39855;(statearr_39869[10] = inst_39842);
(statearr_39869[7] = inst_39832__$1);
return statearr_39869;
})();var statearr_39870_39888 = state_39855__$1;(statearr_39870_39888[2] = null);
(statearr_39870_39888[1] = 2);
return cljs.core.constant$keyword$174;
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
});return ((function (switch__5897__auto__){
return (function() {
var state_machine__5898__auto__ = null;
var state_machine__5898__auto____0 = (function (){var statearr_39874 = (new Array(11));(statearr_39874[0] = state_machine__5898__auto__);
(statearr_39874[1] = 1);
return statearr_39874;
});
var state_machine__5898__auto____1 = (function (state_39855){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_39855);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$174))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e39875){if((e39875 instanceof Object))
{var ex__5901__auto__ = e39875;var statearr_39876_39889 = state_39855;(statearr_39876_39889[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39855);
return cljs.core.constant$keyword$174;
} else
{if(cljs.core.constant$keyword$129)
{throw e39875;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$174))
{{
var G__39890 = state_39855;
state_39855 = G__39890;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_39855){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_39855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_39877 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_39877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto___39878);
return statearr_39877;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5969__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5967__auto___39987 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_39962){var state_val_39963 = (state_39962[1]);if((state_val_39963 === 1))
{var inst_39939 = null;var state_39962__$1 = (function (){var statearr_39964 = state_39962;(statearr_39964[7] = inst_39939);
return statearr_39964;
})();var statearr_39965_39988 = state_39962__$1;(statearr_39965_39988[2] = null);
(statearr_39965_39988[1] = 2);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39963 === 2))
{var state_39962__$1 = state_39962;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39962__$1,4,ch);
} else
{if((state_val_39963 === 3))
{var inst_39959 = (state_39962[2]);var inst_39960 = cljs.core.async.close_BANG_(out);var state_39962__$1 = (function (){var statearr_39966 = state_39962;(statearr_39966[8] = inst_39959);
return statearr_39966;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_39962__$1,inst_39960);
} else
{if((state_val_39963 === 4))
{var inst_39942 = (state_39962[9]);var inst_39942__$1 = (state_39962[2]);var inst_39943 = (inst_39942__$1 == null);var inst_39944 = cljs.core.not(inst_39943);var state_39962__$1 = (function (){var statearr_39967 = state_39962;(statearr_39967[9] = inst_39942__$1);
return statearr_39967;
})();if(inst_39944)
{var statearr_39968_39989 = state_39962__$1;(statearr_39968_39989[1] = 5);
} else
{var statearr_39969_39990 = state_39962__$1;(statearr_39969_39990[1] = 6);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_39963 === 5))
{var inst_39942 = (state_39962[9]);var inst_39939 = (state_39962[7]);var inst_39946 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39942,inst_39939);var state_39962__$1 = state_39962;if(inst_39946)
{var statearr_39970_39991 = state_39962__$1;(statearr_39970_39991[1] = 8);
} else
{var statearr_39971_39992 = state_39962__$1;(statearr_39971_39992[1] = 9);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_39963 === 6))
{var state_39962__$1 = state_39962;var statearr_39973_39993 = state_39962__$1;(statearr_39973_39993[2] = null);
(statearr_39973_39993[1] = 7);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39963 === 7))
{var inst_39957 = (state_39962[2]);var state_39962__$1 = state_39962;var statearr_39974_39994 = state_39962__$1;(statearr_39974_39994[2] = inst_39957);
(statearr_39974_39994[1] = 3);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39963 === 8))
{var inst_39939 = (state_39962[7]);var tmp39972 = inst_39939;var inst_39939__$1 = tmp39972;var state_39962__$1 = (function (){var statearr_39975 = state_39962;(statearr_39975[7] = inst_39939__$1);
return statearr_39975;
})();var statearr_39976_39995 = state_39962__$1;(statearr_39976_39995[2] = null);
(statearr_39976_39995[1] = 2);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39963 === 9))
{var inst_39942 = (state_39962[9]);var state_39962__$1 = state_39962;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39962__$1,11,out,inst_39942);
} else
{if((state_val_39963 === 10))
{var inst_39954 = (state_39962[2]);var state_39962__$1 = state_39962;var statearr_39977_39996 = state_39962__$1;(statearr_39977_39996[2] = inst_39954);
(statearr_39977_39996[1] = 7);
return cljs.core.constant$keyword$174;
} else
{if((state_val_39963 === 11))
{var inst_39942 = (state_39962[9]);var inst_39951 = (state_39962[2]);var inst_39939 = inst_39942;var state_39962__$1 = (function (){var statearr_39978 = state_39962;(statearr_39978[10] = inst_39951);
(statearr_39978[7] = inst_39939);
return statearr_39978;
})();var statearr_39979_39997 = state_39962__$1;(statearr_39979_39997[2] = null);
(statearr_39979_39997[1] = 2);
return cljs.core.constant$keyword$174;
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
});return ((function (switch__5897__auto__){
return (function() {
var state_machine__5898__auto__ = null;
var state_machine__5898__auto____0 = (function (){var statearr_39983 = (new Array(11));(statearr_39983[0] = state_machine__5898__auto__);
(statearr_39983[1] = 1);
return statearr_39983;
});
var state_machine__5898__auto____1 = (function (state_39962){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_39962);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$174))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e39984){if((e39984 instanceof Object))
{var ex__5901__auto__ = e39984;var statearr_39985_39998 = state_39962;(statearr_39985_39998[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39962);
return cljs.core.constant$keyword$174;
} else
{if(cljs.core.constant$keyword$129)
{throw e39984;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$174))
{{
var G__39999 = state_39962;
state_39962 = G__39999;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_39962){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_39962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_39986 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_39986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto___39987);
return statearr_39986;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5969__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5967__auto___40134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_40104){var state_val_40105 = (state_40104[1]);if((state_val_40105 === 1))
{var inst_40067 = (new Array(n));var inst_40068 = inst_40067;var inst_40069 = 0;var state_40104__$1 = (function (){var statearr_40106 = state_40104;(statearr_40106[7] = inst_40068);
(statearr_40106[8] = inst_40069);
return statearr_40106;
})();var statearr_40107_40135 = state_40104__$1;(statearr_40107_40135[2] = null);
(statearr_40107_40135[1] = 2);
return cljs.core.constant$keyword$174;
} else
{if((state_val_40105 === 2))
{var state_40104__$1 = state_40104;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40104__$1,4,ch);
} else
{if((state_val_40105 === 3))
{var inst_40102 = (state_40104[2]);var state_40104__$1 = state_40104;return cljs.core.async.impl.ioc_helpers.return_chan(state_40104__$1,inst_40102);
} else
{if((state_val_40105 === 4))
{var inst_40072 = (state_40104[9]);var inst_40072__$1 = (state_40104[2]);var inst_40073 = (inst_40072__$1 == null);var inst_40074 = cljs.core.not(inst_40073);var state_40104__$1 = (function (){var statearr_40108 = state_40104;(statearr_40108[9] = inst_40072__$1);
return statearr_40108;
})();if(inst_40074)
{var statearr_40109_40136 = state_40104__$1;(statearr_40109_40136[1] = 5);
} else
{var statearr_40110_40137 = state_40104__$1;(statearr_40110_40137[1] = 6);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_40105 === 5))
{var inst_40077 = (state_40104[10]);var inst_40068 = (state_40104[7]);var inst_40069 = (state_40104[8]);var inst_40072 = (state_40104[9]);var inst_40076 = (inst_40068[inst_40069] = inst_40072);var inst_40077__$1 = (inst_40069 + 1);var inst_40078 = (inst_40077__$1 < n);var state_40104__$1 = (function (){var statearr_40111 = state_40104;(statearr_40111[10] = inst_40077__$1);
(statearr_40111[11] = inst_40076);
return statearr_40111;
})();if(cljs.core.truth_(inst_40078))
{var statearr_40112_40138 = state_40104__$1;(statearr_40112_40138[1] = 8);
} else
{var statearr_40113_40139 = state_40104__$1;(statearr_40113_40139[1] = 9);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_40105 === 6))
{var inst_40069 = (state_40104[8]);var inst_40090 = (inst_40069 > 0);var state_40104__$1 = state_40104;if(cljs.core.truth_(inst_40090))
{var statearr_40115_40140 = state_40104__$1;(statearr_40115_40140[1] = 12);
} else
{var statearr_40116_40141 = state_40104__$1;(statearr_40116_40141[1] = 13);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_40105 === 7))
{var inst_40100 = (state_40104[2]);var state_40104__$1 = state_40104;var statearr_40117_40142 = state_40104__$1;(statearr_40117_40142[2] = inst_40100);
(statearr_40117_40142[1] = 3);
return cljs.core.constant$keyword$174;
} else
{if((state_val_40105 === 8))
{var inst_40077 = (state_40104[10]);var inst_40068 = (state_40104[7]);var tmp40114 = inst_40068;var inst_40068__$1 = tmp40114;var inst_40069 = inst_40077;var state_40104__$1 = (function (){var statearr_40118 = state_40104;(statearr_40118[7] = inst_40068__$1);
(statearr_40118[8] = inst_40069);
return statearr_40118;
})();var statearr_40119_40143 = state_40104__$1;(statearr_40119_40143[2] = null);
(statearr_40119_40143[1] = 2);
return cljs.core.constant$keyword$174;
} else
{if((state_val_40105 === 9))
{var inst_40068 = (state_40104[7]);var inst_40082 = cljs.core.vec(inst_40068);var state_40104__$1 = state_40104;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40104__$1,11,out,inst_40082);
} else
{if((state_val_40105 === 10))
{var inst_40088 = (state_40104[2]);var state_40104__$1 = state_40104;var statearr_40120_40144 = state_40104__$1;(statearr_40120_40144[2] = inst_40088);
(statearr_40120_40144[1] = 7);
return cljs.core.constant$keyword$174;
} else
{if((state_val_40105 === 11))
{var inst_40084 = (state_40104[2]);var inst_40085 = (new Array(n));var inst_40068 = inst_40085;var inst_40069 = 0;var state_40104__$1 = (function (){var statearr_40121 = state_40104;(statearr_40121[12] = inst_40084);
(statearr_40121[7] = inst_40068);
(statearr_40121[8] = inst_40069);
return statearr_40121;
})();var statearr_40122_40145 = state_40104__$1;(statearr_40122_40145[2] = null);
(statearr_40122_40145[1] = 2);
return cljs.core.constant$keyword$174;
} else
{if((state_val_40105 === 12))
{var inst_40068 = (state_40104[7]);var inst_40092 = cljs.core.vec(inst_40068);var state_40104__$1 = state_40104;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40104__$1,15,out,inst_40092);
} else
{if((state_val_40105 === 13))
{var state_40104__$1 = state_40104;var statearr_40123_40146 = state_40104__$1;(statearr_40123_40146[2] = null);
(statearr_40123_40146[1] = 14);
return cljs.core.constant$keyword$174;
} else
{if((state_val_40105 === 14))
{var inst_40097 = (state_40104[2]);var inst_40098 = cljs.core.async.close_BANG_(out);var state_40104__$1 = (function (){var statearr_40124 = state_40104;(statearr_40124[13] = inst_40097);
return statearr_40124;
})();var statearr_40125_40147 = state_40104__$1;(statearr_40125_40147[2] = inst_40098);
(statearr_40125_40147[1] = 7);
return cljs.core.constant$keyword$174;
} else
{if((state_val_40105 === 15))
{var inst_40094 = (state_40104[2]);var state_40104__$1 = state_40104;var statearr_40126_40148 = state_40104__$1;(statearr_40126_40148[2] = inst_40094);
(statearr_40126_40148[1] = 14);
return cljs.core.constant$keyword$174;
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
});return ((function (switch__5897__auto__){
return (function() {
var state_machine__5898__auto__ = null;
var state_machine__5898__auto____0 = (function (){var statearr_40130 = (new Array(14));(statearr_40130[0] = state_machine__5898__auto__);
(statearr_40130[1] = 1);
return statearr_40130;
});
var state_machine__5898__auto____1 = (function (state_40104){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_40104);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$174))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e40131){if((e40131 instanceof Object))
{var ex__5901__auto__ = e40131;var statearr_40132_40149 = state_40104;(statearr_40132_40149[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40104);
return cljs.core.constant$keyword$174;
} else
{if(cljs.core.constant$keyword$129)
{throw e40131;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$174))
{{
var G__40150 = state_40104;
state_40104 = G__40150;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_40104){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_40104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_40133 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_40133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto___40134);
return statearr_40133;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5969__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5967__auto___40293 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_40263){var state_val_40264 = (state_40263[1]);if((state_val_40264 === 1))
{var inst_40222 = (new Array(0));var inst_40223 = inst_40222;var inst_40224 = cljs.core.constant$keyword$186;var state_40263__$1 = (function (){var statearr_40265 = state_40263;(statearr_40265[7] = inst_40223);
(statearr_40265[8] = inst_40224);
return statearr_40265;
})();var statearr_40266_40294 = state_40263__$1;(statearr_40266_40294[2] = null);
(statearr_40266_40294[1] = 2);
return cljs.core.constant$keyword$174;
} else
{if((state_val_40264 === 2))
{var state_40263__$1 = state_40263;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40263__$1,4,ch);
} else
{if((state_val_40264 === 3))
{var inst_40261 = (state_40263[2]);var state_40263__$1 = state_40263;return cljs.core.async.impl.ioc_helpers.return_chan(state_40263__$1,inst_40261);
} else
{if((state_val_40264 === 4))
{var inst_40227 = (state_40263[9]);var inst_40227__$1 = (state_40263[2]);var inst_40228 = (inst_40227__$1 == null);var inst_40229 = cljs.core.not(inst_40228);var state_40263__$1 = (function (){var statearr_40267 = state_40263;(statearr_40267[9] = inst_40227__$1);
return statearr_40267;
})();if(inst_40229)
{var statearr_40268_40295 = state_40263__$1;(statearr_40268_40295[1] = 5);
} else
{var statearr_40269_40296 = state_40263__$1;(statearr_40269_40296[1] = 6);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_40264 === 5))
{var inst_40227 = (state_40263[9]);var inst_40231 = (state_40263[10]);var inst_40224 = (state_40263[8]);var inst_40231__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40227) : f.call(null,inst_40227));var inst_40232 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40231__$1,inst_40224);var inst_40233 = cljs.core.keyword_identical_QMARK_(inst_40224,cljs.core.constant$keyword$186);var inst_40234 = (inst_40232) || (inst_40233);var state_40263__$1 = (function (){var statearr_40270 = state_40263;(statearr_40270[10] = inst_40231__$1);
return statearr_40270;
})();if(cljs.core.truth_(inst_40234))
{var statearr_40271_40297 = state_40263__$1;(statearr_40271_40297[1] = 8);
} else
{var statearr_40272_40298 = state_40263__$1;(statearr_40272_40298[1] = 9);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_40264 === 6))
{var inst_40223 = (state_40263[7]);var inst_40248 = inst_40223.length;var inst_40249 = (inst_40248 > 0);var state_40263__$1 = state_40263;if(cljs.core.truth_(inst_40249))
{var statearr_40274_40299 = state_40263__$1;(statearr_40274_40299[1] = 12);
} else
{var statearr_40275_40300 = state_40263__$1;(statearr_40275_40300[1] = 13);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_40264 === 7))
{var inst_40259 = (state_40263[2]);var state_40263__$1 = state_40263;var statearr_40276_40301 = state_40263__$1;(statearr_40276_40301[2] = inst_40259);
(statearr_40276_40301[1] = 3);
return cljs.core.constant$keyword$174;
} else
{if((state_val_40264 === 8))
{var inst_40227 = (state_40263[9]);var inst_40231 = (state_40263[10]);var inst_40223 = (state_40263[7]);var inst_40236 = inst_40223.push(inst_40227);var tmp40273 = inst_40223;var inst_40223__$1 = tmp40273;var inst_40224 = inst_40231;var state_40263__$1 = (function (){var statearr_40277 = state_40263;(statearr_40277[11] = inst_40236);
(statearr_40277[7] = inst_40223__$1);
(statearr_40277[8] = inst_40224);
return statearr_40277;
})();var statearr_40278_40302 = state_40263__$1;(statearr_40278_40302[2] = null);
(statearr_40278_40302[1] = 2);
return cljs.core.constant$keyword$174;
} else
{if((state_val_40264 === 9))
{var inst_40223 = (state_40263[7]);var inst_40239 = cljs.core.vec(inst_40223);var state_40263__$1 = state_40263;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40263__$1,11,out,inst_40239);
} else
{if((state_val_40264 === 10))
{var inst_40246 = (state_40263[2]);var state_40263__$1 = state_40263;var statearr_40279_40303 = state_40263__$1;(statearr_40279_40303[2] = inst_40246);
(statearr_40279_40303[1] = 7);
return cljs.core.constant$keyword$174;
} else
{if((state_val_40264 === 11))
{var inst_40227 = (state_40263[9]);var inst_40231 = (state_40263[10]);var inst_40241 = (state_40263[2]);var inst_40242 = (new Array(0));var inst_40243 = inst_40242.push(inst_40227);var inst_40223 = inst_40242;var inst_40224 = inst_40231;var state_40263__$1 = (function (){var statearr_40280 = state_40263;(statearr_40280[12] = inst_40243);
(statearr_40280[13] = inst_40241);
(statearr_40280[7] = inst_40223);
(statearr_40280[8] = inst_40224);
return statearr_40280;
})();var statearr_40281_40304 = state_40263__$1;(statearr_40281_40304[2] = null);
(statearr_40281_40304[1] = 2);
return cljs.core.constant$keyword$174;
} else
{if((state_val_40264 === 12))
{var inst_40223 = (state_40263[7]);var inst_40251 = cljs.core.vec(inst_40223);var state_40263__$1 = state_40263;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40263__$1,15,out,inst_40251);
} else
{if((state_val_40264 === 13))
{var state_40263__$1 = state_40263;var statearr_40282_40305 = state_40263__$1;(statearr_40282_40305[2] = null);
(statearr_40282_40305[1] = 14);
return cljs.core.constant$keyword$174;
} else
{if((state_val_40264 === 14))
{var inst_40256 = (state_40263[2]);var inst_40257 = cljs.core.async.close_BANG_(out);var state_40263__$1 = (function (){var statearr_40283 = state_40263;(statearr_40283[14] = inst_40256);
return statearr_40283;
})();var statearr_40284_40306 = state_40263__$1;(statearr_40284_40306[2] = inst_40257);
(statearr_40284_40306[1] = 7);
return cljs.core.constant$keyword$174;
} else
{if((state_val_40264 === 15))
{var inst_40253 = (state_40263[2]);var state_40263__$1 = state_40263;var statearr_40285_40307 = state_40263__$1;(statearr_40285_40307[2] = inst_40253);
(statearr_40285_40307[1] = 14);
return cljs.core.constant$keyword$174;
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
});return ((function (switch__5897__auto__){
return (function() {
var state_machine__5898__auto__ = null;
var state_machine__5898__auto____0 = (function (){var statearr_40289 = (new Array(15));(statearr_40289[0] = state_machine__5898__auto__);
(statearr_40289[1] = 1);
return statearr_40289;
});
var state_machine__5898__auto____1 = (function (state_40263){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_40263);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$174))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e40290){if((e40290 instanceof Object))
{var ex__5901__auto__ = e40290;var statearr_40291_40308 = state_40263;(statearr_40291_40308[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_40263);
return cljs.core.constant$keyword$174;
} else
{if(cljs.core.constant$keyword$129)
{throw e40290;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$174))
{{
var G__40309 = state_40263;
state_40263 = G__40309;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_40263){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_40263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_40292 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_40292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto___40293);
return statearr_40292;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5969__auto__);
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
