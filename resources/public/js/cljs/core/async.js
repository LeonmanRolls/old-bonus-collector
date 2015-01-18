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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t37167 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37167 = (function (f,fn_handler,meta37168){
this.f = f;
this.fn_handler = fn_handler;
this.meta37168 = meta37168;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37167.cljs$lang$type = true;
cljs.core.async.t37167.cljs$lang$ctorStr = "cljs.core.async/t37167";
cljs.core.async.t37167.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"cljs.core.async/t37167");
});
cljs.core.async.t37167.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t37167.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t37167.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t37167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37169){var self__ = this;
var _37169__$1 = this;return self__.meta37168;
});
cljs.core.async.t37167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37169,meta37168__$1){var self__ = this;
var _37169__$1 = this;return (new cljs.core.async.t37167(self__.f,self__.fn_handler,meta37168__$1));
});
cljs.core.async.__GT_t37167 = (function __GT_t37167(f__$1,fn_handler__$1,meta37168){return (new cljs.core.async.t37167(f__$1,fn_handler__$1,meta37168));
});
}
return (new cljs.core.async.t37167(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__37171 = buff;if(G__37171)
{var bit__3906__auto__ = null;if(cljs.core.truth_((function (){var or__3285__auto__ = bit__3906__auto__;if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return G__37171.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__37171.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__37171);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__37171);
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
{var val_37172 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37172) : fn1.call(null,val_37172));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37172) : fn1.call(null,val_37172));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4103__auto___37173 = n;var x_37174 = 0;while(true){
if((x_37174 < n__4103__auto___37173))
{(a[x_37174] = 0);
{
var G__37175 = (x_37174 + 1);
x_37174 = G__37175;
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
var G__37176 = (i + 1);
i = G__37176;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t37180 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37180 = (function (flag,alt_flag,meta37181){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta37181 = meta37181;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37180.cljs$lang$type = true;
cljs.core.async.t37180.cljs$lang$ctorStr = "cljs.core.async/t37180";
cljs.core.async.t37180.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"cljs.core.async/t37180");
});
cljs.core.async.t37180.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t37180.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t37180.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t37180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37182){var self__ = this;
var _37182__$1 = this;return self__.meta37181;
});
cljs.core.async.t37180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37182,meta37181__$1){var self__ = this;
var _37182__$1 = this;return (new cljs.core.async.t37180(self__.flag,self__.alt_flag,meta37181__$1));
});
cljs.core.async.__GT_t37180 = (function __GT_t37180(flag__$1,alt_flag__$1,meta37181){return (new cljs.core.async.t37180(flag__$1,alt_flag__$1,meta37181));
});
}
return (new cljs.core.async.t37180(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t37186 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37186 = (function (cb,flag,alt_handler,meta37187){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta37187 = meta37187;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37186.cljs$lang$type = true;
cljs.core.async.t37186.cljs$lang$ctorStr = "cljs.core.async/t37186";
cljs.core.async.t37186.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"cljs.core.async/t37186");
});
cljs.core.async.t37186.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t37186.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t37186.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t37186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37188){var self__ = this;
var _37188__$1 = this;return self__.meta37187;
});
cljs.core.async.t37186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37188,meta37187__$1){var self__ = this;
var _37188__$1 = this;return (new cljs.core.async.t37186(self__.cb,self__.flag,self__.alt_handler,meta37187__$1));
});
cljs.core.async.__GT_t37186 = (function __GT_t37186(cb__$1,flag__$1,alt_handler__$1,meta37187){return (new cljs.core.async.t37186(cb__$1,flag__$1,alt_handler__$1,meta37187));
});
}
return (new cljs.core.async.t37186(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$139.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37189_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37189_SHARP_,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37189_SHARP_,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37190_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37190_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37190_SHARP_,port], null)));
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
var G__37191 = (i + 1);
i = G__37191;
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
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$127))
{var temp__4092__auto__ = (function (){var and__3273__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3273__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3273__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$127.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$127], null));
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
var alts_BANG___delegate = function (ports,p__37192){var map__37194 = p__37192;var map__37194__$1 = ((cljs.core.seq_QMARK_(map__37194))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37194):map__37194);var opts = map__37194__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__37192 = null;if (arguments.length > 1) {
  p__37192 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__37192);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__37195){
var ports = cljs.core.first(arglist__37195);
var p__37192 = cljs.core.rest(arglist__37195);
return alts_BANG___delegate(ports,p__37192);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t37203 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37203 = (function (ch,f,map_LT_,meta37204){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta37204 = meta37204;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37203.cljs$lang$type = true;
cljs.core.async.t37203.cljs$lang$ctorStr = "cljs.core.async/t37203";
cljs.core.async.t37203.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"cljs.core.async/t37203");
});
cljs.core.async.t37203.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t37203.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});
cljs.core.async.t37203.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t37203.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t37206 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37206 = (function (fn1,_,meta37204,ch,f,map_LT_,meta37207){
this.fn1 = fn1;
this._ = _;
this.meta37204 = meta37204;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta37207 = meta37207;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37206.cljs$lang$type = true;
cljs.core.async.t37206.cljs$lang$ctorStr = "cljs.core.async/t37206";
cljs.core.async.t37206.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"cljs.core.async/t37206");
});
cljs.core.async.t37206.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t37206.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t37206.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t37206.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__37196_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__37196_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__37196_SHARP_) : self__.f.call(null,p1__37196_SHARP_)))) : f1.call(null,(((p1__37196_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__37196_SHARP_) : self__.f.call(null,p1__37196_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t37206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37208){var self__ = this;
var _37208__$1 = this;return self__.meta37207;
});
cljs.core.async.t37206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37208,meta37207__$1){var self__ = this;
var _37208__$1 = this;return (new cljs.core.async.t37206(self__.fn1,self__._,self__.meta37204,self__.ch,self__.f,self__.map_LT_,meta37207__$1));
});
cljs.core.async.__GT_t37206 = (function __GT_t37206(fn1__$1,___$2,meta37204__$1,ch__$2,f__$2,map_LT___$2,meta37207){return (new cljs.core.async.t37206(fn1__$1,___$2,meta37204__$1,ch__$2,f__$2,map_LT___$2,meta37207));
});
}
return (new cljs.core.async.t37206(fn1,___$1,self__.meta37204,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t37203.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t37203.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t37203.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t37203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37205){var self__ = this;
var _37205__$1 = this;return self__.meta37204;
});
cljs.core.async.t37203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37205,meta37204__$1){var self__ = this;
var _37205__$1 = this;return (new cljs.core.async.t37203(self__.ch,self__.f,self__.map_LT_,meta37204__$1));
});
cljs.core.async.__GT_t37203 = (function __GT_t37203(ch__$1,f__$1,map_LT___$1,meta37204){return (new cljs.core.async.t37203(ch__$1,f__$1,map_LT___$1,meta37204));
});
}
return (new cljs.core.async.t37203(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t37212 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37212 = (function (ch,f,map_GT_,meta37213){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta37213 = meta37213;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37212.cljs$lang$type = true;
cljs.core.async.t37212.cljs$lang$ctorStr = "cljs.core.async/t37212";
cljs.core.async.t37212.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"cljs.core.async/t37212");
});
cljs.core.async.t37212.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t37212.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});
cljs.core.async.t37212.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t37212.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t37212.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t37212.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t37212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37214){var self__ = this;
var _37214__$1 = this;return self__.meta37213;
});
cljs.core.async.t37212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37214,meta37213__$1){var self__ = this;
var _37214__$1 = this;return (new cljs.core.async.t37212(self__.ch,self__.f,self__.map_GT_,meta37213__$1));
});
cljs.core.async.__GT_t37212 = (function __GT_t37212(ch__$1,f__$1,map_GT___$1,meta37213){return (new cljs.core.async.t37212(ch__$1,f__$1,map_GT___$1,meta37213));
});
}
return (new cljs.core.async.t37212(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t37218 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37218 = (function (ch,p,filter_GT_,meta37219){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta37219 = meta37219;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37218.cljs$lang$type = true;
cljs.core.async.t37218.cljs$lang$ctorStr = "cljs.core.async/t37218";
cljs.core.async.t37218.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"cljs.core.async/t37218");
});
cljs.core.async.t37218.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t37218.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});
cljs.core.async.t37218.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t37218.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t37218.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t37218.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t37218.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t37218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37220){var self__ = this;
var _37220__$1 = this;return self__.meta37219;
});
cljs.core.async.t37218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37220,meta37219__$1){var self__ = this;
var _37220__$1 = this;return (new cljs.core.async.t37218(self__.ch,self__.p,self__.filter_GT_,meta37219__$1));
});
cljs.core.async.__GT_t37218 = (function __GT_t37218(ch__$1,p__$1,filter_GT___$1,meta37219){return (new cljs.core.async.t37218(ch__$1,p__$1,filter_GT___$1,meta37219));
});
}
return (new cljs.core.async.t37218(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5967__auto___37303 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_37282){var state_val_37283 = (state_37282[1]);if((state_val_37283 === 1))
{var state_37282__$1 = state_37282;var statearr_37284_37304 = state_37282__$1;(statearr_37284_37304[2] = null);
(statearr_37284_37304[1] = 2);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37283 === 2))
{var state_37282__$1 = state_37282;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37282__$1,4,ch);
} else
{if((state_val_37283 === 3))
{var inst_37280 = (state_37282[2]);var state_37282__$1 = state_37282;return cljs.core.async.impl.ioc_helpers.return_chan(state_37282__$1,inst_37280);
} else
{if((state_val_37283 === 4))
{var inst_37264 = (state_37282[7]);var inst_37264__$1 = (state_37282[2]);var inst_37265 = (inst_37264__$1 == null);var state_37282__$1 = (function (){var statearr_37285 = state_37282;(statearr_37285[7] = inst_37264__$1);
return statearr_37285;
})();if(cljs.core.truth_(inst_37265))
{var statearr_37286_37305 = state_37282__$1;(statearr_37286_37305[1] = 5);
} else
{var statearr_37287_37306 = state_37282__$1;(statearr_37287_37306[1] = 6);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_37283 === 5))
{var inst_37267 = cljs.core.async.close_BANG_(out);var state_37282__$1 = state_37282;var statearr_37288_37307 = state_37282__$1;(statearr_37288_37307[2] = inst_37267);
(statearr_37288_37307[1] = 7);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37283 === 6))
{var inst_37264 = (state_37282[7]);var inst_37269 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37264) : p.call(null,inst_37264));var state_37282__$1 = state_37282;if(cljs.core.truth_(inst_37269))
{var statearr_37289_37308 = state_37282__$1;(statearr_37289_37308[1] = 8);
} else
{var statearr_37290_37309 = state_37282__$1;(statearr_37290_37309[1] = 9);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_37283 === 7))
{var inst_37278 = (state_37282[2]);var state_37282__$1 = state_37282;var statearr_37291_37310 = state_37282__$1;(statearr_37291_37310[2] = inst_37278);
(statearr_37291_37310[1] = 3);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37283 === 8))
{var inst_37264 = (state_37282[7]);var state_37282__$1 = state_37282;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37282__$1,11,out,inst_37264);
} else
{if((state_val_37283 === 9))
{var state_37282__$1 = state_37282;var statearr_37292_37311 = state_37282__$1;(statearr_37292_37311[2] = null);
(statearr_37292_37311[1] = 10);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37283 === 10))
{var inst_37275 = (state_37282[2]);var state_37282__$1 = (function (){var statearr_37293 = state_37282;(statearr_37293[8] = inst_37275);
return statearr_37293;
})();var statearr_37294_37312 = state_37282__$1;(statearr_37294_37312[2] = null);
(statearr_37294_37312[1] = 2);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37283 === 11))
{var inst_37272 = (state_37282[2]);var state_37282__$1 = state_37282;var statearr_37295_37313 = state_37282__$1;(statearr_37295_37313[2] = inst_37272);
(statearr_37295_37313[1] = 10);
return cljs.core.constant$keyword$171;
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
var state_machine__5898__auto____0 = (function (){var statearr_37299 = (new Array(9));(statearr_37299[0] = state_machine__5898__auto__);
(statearr_37299[1] = 1);
return statearr_37299;
});
var state_machine__5898__auto____1 = (function (state_37282){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_37282);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$171))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e37300){if((e37300 instanceof Object))
{var ex__5901__auto__ = e37300;var statearr_37301_37314 = state_37282;(statearr_37301_37314[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37282);
return cljs.core.constant$keyword$171;
} else
{if(cljs.core.constant$keyword$126)
{throw e37300;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$171))
{{
var G__37315 = state_37282;
state_37282 = G__37315;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_37282){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_37282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_37302 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_37302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto___37303);
return statearr_37302;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5967__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_37481){var state_val_37482 = (state_37481[1]);if((state_val_37482 === 1))
{var state_37481__$1 = state_37481;var statearr_37483_37524 = state_37481__$1;(statearr_37483_37524[2] = null);
(statearr_37483_37524[1] = 2);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37482 === 2))
{var state_37481__$1 = state_37481;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37481__$1,4,in$);
} else
{if((state_val_37482 === 3))
{var inst_37479 = (state_37481[2]);var state_37481__$1 = state_37481;return cljs.core.async.impl.ioc_helpers.return_chan(state_37481__$1,inst_37479);
} else
{if((state_val_37482 === 4))
{var inst_37422 = (state_37481[7]);var inst_37422__$1 = (state_37481[2]);var inst_37423 = (inst_37422__$1 == null);var state_37481__$1 = (function (){var statearr_37484 = state_37481;(statearr_37484[7] = inst_37422__$1);
return statearr_37484;
})();if(cljs.core.truth_(inst_37423))
{var statearr_37485_37525 = state_37481__$1;(statearr_37485_37525[1] = 5);
} else
{var statearr_37486_37526 = state_37481__$1;(statearr_37486_37526[1] = 6);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_37482 === 5))
{var inst_37425 = cljs.core.async.close_BANG_(out);var state_37481__$1 = state_37481;var statearr_37487_37527 = state_37481__$1;(statearr_37487_37527[2] = inst_37425);
(statearr_37487_37527[1] = 7);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37482 === 6))
{var inst_37422 = (state_37481[7]);var inst_37431 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_37422) : f.call(null,inst_37422));var inst_37432 = cljs.core.seq(inst_37431);var inst_37433 = inst_37432;var inst_37434 = null;var inst_37435 = 0;var inst_37436 = 0;var state_37481__$1 = (function (){var statearr_37488 = state_37481;(statearr_37488[8] = inst_37433);
(statearr_37488[9] = inst_37436);
(statearr_37488[10] = inst_37435);
(statearr_37488[11] = inst_37434);
return statearr_37488;
})();var statearr_37489_37528 = state_37481__$1;(statearr_37489_37528[2] = null);
(statearr_37489_37528[1] = 8);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37482 === 7))
{var inst_37477 = (state_37481[2]);var state_37481__$1 = state_37481;var statearr_37490_37529 = state_37481__$1;(statearr_37490_37529[2] = inst_37477);
(statearr_37490_37529[1] = 3);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37482 === 8))
{var inst_37436 = (state_37481[9]);var inst_37435 = (state_37481[10]);var inst_37438 = (inst_37436 < inst_37435);var inst_37439 = inst_37438;var state_37481__$1 = state_37481;if(cljs.core.truth_(inst_37439))
{var statearr_37491_37530 = state_37481__$1;(statearr_37491_37530[1] = 10);
} else
{var statearr_37492_37531 = state_37481__$1;(statearr_37492_37531[1] = 11);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_37482 === 9))
{var inst_37469 = (state_37481[2]);var inst_37470 = cljs.core.async.impl.protocols.closed_QMARK_(out);var state_37481__$1 = (function (){var statearr_37493 = state_37481;(statearr_37493[12] = inst_37469);
return statearr_37493;
})();if(cljs.core.truth_(inst_37470))
{var statearr_37494_37532 = state_37481__$1;(statearr_37494_37532[1] = 21);
} else
{var statearr_37495_37533 = state_37481__$1;(statearr_37495_37533[1] = 22);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_37482 === 10))
{var inst_37436 = (state_37481[9]);var inst_37434 = (state_37481[11]);var inst_37441 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_37434,inst_37436);var state_37481__$1 = state_37481;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37481__$1,13,out,inst_37441);
} else
{if((state_val_37482 === 11))
{var inst_37433 = (state_37481[8]);var inst_37447 = (state_37481[13]);var inst_37447__$1 = cljs.core.seq(inst_37433);var state_37481__$1 = (function (){var statearr_37499 = state_37481;(statearr_37499[13] = inst_37447__$1);
return statearr_37499;
})();if(inst_37447__$1)
{var statearr_37500_37534 = state_37481__$1;(statearr_37500_37534[1] = 14);
} else
{var statearr_37501_37535 = state_37481__$1;(statearr_37501_37535[1] = 15);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_37482 === 12))
{var inst_37467 = (state_37481[2]);var state_37481__$1 = state_37481;var statearr_37502_37536 = state_37481__$1;(statearr_37502_37536[2] = inst_37467);
(statearr_37502_37536[1] = 9);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37482 === 13))
{var inst_37433 = (state_37481[8]);var inst_37436 = (state_37481[9]);var inst_37435 = (state_37481[10]);var inst_37434 = (state_37481[11]);var inst_37443 = (state_37481[2]);var inst_37444 = (inst_37436 + 1);var tmp37496 = inst_37433;var tmp37497 = inst_37435;var tmp37498 = inst_37434;var inst_37433__$1 = tmp37496;var inst_37434__$1 = tmp37498;var inst_37435__$1 = tmp37497;var inst_37436__$1 = inst_37444;var state_37481__$1 = (function (){var statearr_37503 = state_37481;(statearr_37503[8] = inst_37433__$1);
(statearr_37503[14] = inst_37443);
(statearr_37503[9] = inst_37436__$1);
(statearr_37503[10] = inst_37435__$1);
(statearr_37503[11] = inst_37434__$1);
return statearr_37503;
})();var statearr_37504_37537 = state_37481__$1;(statearr_37504_37537[2] = null);
(statearr_37504_37537[1] = 8);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37482 === 14))
{var inst_37447 = (state_37481[13]);var inst_37449 = cljs.core.chunked_seq_QMARK_(inst_37447);var state_37481__$1 = state_37481;if(inst_37449)
{var statearr_37505_37538 = state_37481__$1;(statearr_37505_37538[1] = 17);
} else
{var statearr_37506_37539 = state_37481__$1;(statearr_37506_37539[1] = 18);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_37482 === 15))
{var state_37481__$1 = state_37481;var statearr_37507_37540 = state_37481__$1;(statearr_37507_37540[2] = null);
(statearr_37507_37540[1] = 16);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37482 === 16))
{var inst_37465 = (state_37481[2]);var state_37481__$1 = state_37481;var statearr_37508_37541 = state_37481__$1;(statearr_37508_37541[2] = inst_37465);
(statearr_37508_37541[1] = 12);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37482 === 17))
{var inst_37447 = (state_37481[13]);var inst_37451 = cljs.core.chunk_first(inst_37447);var inst_37452 = cljs.core.chunk_rest(inst_37447);var inst_37453 = cljs.core.count(inst_37451);var inst_37433 = inst_37452;var inst_37434 = inst_37451;var inst_37435 = inst_37453;var inst_37436 = 0;var state_37481__$1 = (function (){var statearr_37509 = state_37481;(statearr_37509[8] = inst_37433);
(statearr_37509[9] = inst_37436);
(statearr_37509[10] = inst_37435);
(statearr_37509[11] = inst_37434);
return statearr_37509;
})();var statearr_37510_37542 = state_37481__$1;(statearr_37510_37542[2] = null);
(statearr_37510_37542[1] = 8);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37482 === 18))
{var inst_37447 = (state_37481[13]);var inst_37456 = cljs.core.first(inst_37447);var state_37481__$1 = state_37481;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37481__$1,20,out,inst_37456);
} else
{if((state_val_37482 === 19))
{var inst_37462 = (state_37481[2]);var state_37481__$1 = state_37481;var statearr_37511_37543 = state_37481__$1;(statearr_37511_37543[2] = inst_37462);
(statearr_37511_37543[1] = 16);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37482 === 20))
{var inst_37447 = (state_37481[13]);var inst_37458 = (state_37481[2]);var inst_37459 = cljs.core.next(inst_37447);var inst_37433 = inst_37459;var inst_37434 = null;var inst_37435 = 0;var inst_37436 = 0;var state_37481__$1 = (function (){var statearr_37512 = state_37481;(statearr_37512[8] = inst_37433);
(statearr_37512[9] = inst_37436);
(statearr_37512[10] = inst_37435);
(statearr_37512[11] = inst_37434);
(statearr_37512[15] = inst_37458);
return statearr_37512;
})();var statearr_37513_37544 = state_37481__$1;(statearr_37513_37544[2] = null);
(statearr_37513_37544[1] = 8);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37482 === 21))
{var state_37481__$1 = state_37481;var statearr_37514_37545 = state_37481__$1;(statearr_37514_37545[2] = null);
(statearr_37514_37545[1] = 23);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37482 === 22))
{var state_37481__$1 = state_37481;var statearr_37515_37546 = state_37481__$1;(statearr_37515_37546[2] = null);
(statearr_37515_37546[1] = 2);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37482 === 23))
{var inst_37475 = (state_37481[2]);var state_37481__$1 = state_37481;var statearr_37516_37547 = state_37481__$1;(statearr_37516_37547[2] = inst_37475);
(statearr_37516_37547[1] = 7);
return cljs.core.constant$keyword$171;
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
var state_machine__5898__auto____0 = (function (){var statearr_37520 = (new Array(16));(statearr_37520[0] = state_machine__5898__auto__);
(statearr_37520[1] = 1);
return statearr_37520;
});
var state_machine__5898__auto____1 = (function (state_37481){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_37481);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$171))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e37521){if((e37521 instanceof Object))
{var ex__5901__auto__ = e37521;var statearr_37522_37548 = state_37481;(statearr_37522_37548[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37481);
return cljs.core.constant$keyword$171;
} else
{if(cljs.core.constant$keyword$126)
{throw e37521;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$171))
{{
var G__37549 = state_37481;
state_37481 = G__37549;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_37481){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_37481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_37523 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_37523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto__);
return statearr_37523;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5967__auto___37644 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_37620){var state_val_37621 = (state_37620[1]);if((state_val_37621 === 1))
{var state_37620__$1 = state_37620;var statearr_37622_37645 = state_37620__$1;(statearr_37622_37645[2] = null);
(statearr_37622_37645[1] = 2);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37621 === 2))
{var state_37620__$1 = state_37620;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37620__$1,4,from);
} else
{if((state_val_37621 === 3))
{var inst_37618 = (state_37620[2]);var state_37620__$1 = state_37620;return cljs.core.async.impl.ioc_helpers.return_chan(state_37620__$1,inst_37618);
} else
{if((state_val_37621 === 4))
{var inst_37599 = (state_37620[7]);var inst_37599__$1 = (state_37620[2]);var inst_37600 = (inst_37599__$1 == null);var state_37620__$1 = (function (){var statearr_37623 = state_37620;(statearr_37623[7] = inst_37599__$1);
return statearr_37623;
})();if(cljs.core.truth_(inst_37600))
{var statearr_37624_37646 = state_37620__$1;(statearr_37624_37646[1] = 5);
} else
{var statearr_37625_37647 = state_37620__$1;(statearr_37625_37647[1] = 6);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_37621 === 5))
{var state_37620__$1 = state_37620;if(cljs.core.truth_(close_QMARK_))
{var statearr_37626_37648 = state_37620__$1;(statearr_37626_37648[1] = 8);
} else
{var statearr_37627_37649 = state_37620__$1;(statearr_37627_37649[1] = 9);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_37621 === 6))
{var inst_37599 = (state_37620[7]);var state_37620__$1 = state_37620;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37620__$1,11,to,inst_37599);
} else
{if((state_val_37621 === 7))
{var inst_37616 = (state_37620[2]);var state_37620__$1 = state_37620;var statearr_37628_37650 = state_37620__$1;(statearr_37628_37650[2] = inst_37616);
(statearr_37628_37650[1] = 3);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37621 === 8))
{var inst_37603 = cljs.core.async.close_BANG_(to);var state_37620__$1 = state_37620;var statearr_37629_37651 = state_37620__$1;(statearr_37629_37651[2] = inst_37603);
(statearr_37629_37651[1] = 10);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37621 === 9))
{var state_37620__$1 = state_37620;var statearr_37630_37652 = state_37620__$1;(statearr_37630_37652[2] = null);
(statearr_37630_37652[1] = 10);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37621 === 10))
{var inst_37606 = (state_37620[2]);var state_37620__$1 = state_37620;var statearr_37631_37653 = state_37620__$1;(statearr_37631_37653[2] = inst_37606);
(statearr_37631_37653[1] = 7);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37621 === 11))
{var inst_37609 = (state_37620[2]);var state_37620__$1 = state_37620;if(cljs.core.truth_(inst_37609))
{var statearr_37632_37654 = state_37620__$1;(statearr_37632_37654[1] = 12);
} else
{var statearr_37633_37655 = state_37620__$1;(statearr_37633_37655[1] = 13);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_37621 === 12))
{var state_37620__$1 = state_37620;var statearr_37634_37656 = state_37620__$1;(statearr_37634_37656[2] = null);
(statearr_37634_37656[1] = 2);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37621 === 13))
{var state_37620__$1 = state_37620;var statearr_37635_37657 = state_37620__$1;(statearr_37635_37657[2] = null);
(statearr_37635_37657[1] = 14);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37621 === 14))
{var inst_37614 = (state_37620[2]);var state_37620__$1 = state_37620;var statearr_37636_37658 = state_37620__$1;(statearr_37636_37658[2] = inst_37614);
(statearr_37636_37658[1] = 7);
return cljs.core.constant$keyword$171;
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
var state_machine__5898__auto____0 = (function (){var statearr_37640 = (new Array(8));(statearr_37640[0] = state_machine__5898__auto__);
(statearr_37640[1] = 1);
return statearr_37640;
});
var state_machine__5898__auto____1 = (function (state_37620){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_37620);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$171))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e37641){if((e37641 instanceof Object))
{var ex__5901__auto__ = e37641;var statearr_37642_37659 = state_37620;(statearr_37642_37659[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37620);
return cljs.core.constant$keyword$171;
} else
{if(cljs.core.constant$keyword$126)
{throw e37641;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$171))
{{
var G__37660 = state_37620;
state_37620 = G__37660;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_37620){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_37620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_37643 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_37643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto___37644);
return statearr_37643;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5967__auto___37761 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_37736){var state_val_37737 = (state_37736[1]);if((state_val_37737 === 1))
{var state_37736__$1 = state_37736;var statearr_37738_37762 = state_37736__$1;(statearr_37738_37762[2] = null);
(statearr_37738_37762[1] = 2);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37737 === 2))
{var state_37736__$1 = state_37736;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37736__$1,4,ch);
} else
{if((state_val_37737 === 3))
{var inst_37734 = (state_37736[2]);var state_37736__$1 = state_37736;return cljs.core.async.impl.ioc_helpers.return_chan(state_37736__$1,inst_37734);
} else
{if((state_val_37737 === 4))
{var inst_37713 = (state_37736[7]);var inst_37713__$1 = (state_37736[2]);var inst_37714 = (inst_37713__$1 == null);var state_37736__$1 = (function (){var statearr_37739 = state_37736;(statearr_37739[7] = inst_37713__$1);
return statearr_37739;
})();if(cljs.core.truth_(inst_37714))
{var statearr_37740_37763 = state_37736__$1;(statearr_37740_37763[1] = 5);
} else
{var statearr_37741_37764 = state_37736__$1;(statearr_37741_37764[1] = 6);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_37737 === 5))
{var inst_37716 = cljs.core.async.close_BANG_(tc);var inst_37717 = cljs.core.async.close_BANG_(fc);var state_37736__$1 = (function (){var statearr_37742 = state_37736;(statearr_37742[8] = inst_37716);
return statearr_37742;
})();var statearr_37743_37765 = state_37736__$1;(statearr_37743_37765[2] = inst_37717);
(statearr_37743_37765[1] = 7);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37737 === 6))
{var inst_37713 = (state_37736[7]);var inst_37719 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37713) : p.call(null,inst_37713));var state_37736__$1 = state_37736;if(cljs.core.truth_(inst_37719))
{var statearr_37744_37766 = state_37736__$1;(statearr_37744_37766[1] = 9);
} else
{var statearr_37745_37767 = state_37736__$1;(statearr_37745_37767[1] = 10);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_37737 === 7))
{var inst_37732 = (state_37736[2]);var state_37736__$1 = state_37736;var statearr_37746_37768 = state_37736__$1;(statearr_37746_37768[2] = inst_37732);
(statearr_37746_37768[1] = 3);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37737 === 8))
{var inst_37725 = (state_37736[2]);var state_37736__$1 = state_37736;if(cljs.core.truth_(inst_37725))
{var statearr_37747_37769 = state_37736__$1;(statearr_37747_37769[1] = 12);
} else
{var statearr_37748_37770 = state_37736__$1;(statearr_37748_37770[1] = 13);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_37737 === 9))
{var state_37736__$1 = state_37736;var statearr_37749_37771 = state_37736__$1;(statearr_37749_37771[2] = tc);
(statearr_37749_37771[1] = 11);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37737 === 10))
{var state_37736__$1 = state_37736;var statearr_37750_37772 = state_37736__$1;(statearr_37750_37772[2] = fc);
(statearr_37750_37772[1] = 11);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37737 === 11))
{var inst_37713 = (state_37736[7]);var inst_37723 = (state_37736[2]);var state_37736__$1 = state_37736;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37736__$1,8,inst_37723,inst_37713);
} else
{if((state_val_37737 === 12))
{var state_37736__$1 = state_37736;var statearr_37751_37773 = state_37736__$1;(statearr_37751_37773[2] = null);
(statearr_37751_37773[1] = 2);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37737 === 13))
{var state_37736__$1 = state_37736;var statearr_37752_37774 = state_37736__$1;(statearr_37752_37774[2] = null);
(statearr_37752_37774[1] = 14);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37737 === 14))
{var inst_37730 = (state_37736[2]);var state_37736__$1 = state_37736;var statearr_37753_37775 = state_37736__$1;(statearr_37753_37775[2] = inst_37730);
(statearr_37753_37775[1] = 7);
return cljs.core.constant$keyword$171;
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
var state_machine__5898__auto____0 = (function (){var statearr_37757 = (new Array(9));(statearr_37757[0] = state_machine__5898__auto__);
(statearr_37757[1] = 1);
return statearr_37757;
});
var state_machine__5898__auto____1 = (function (state_37736){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_37736);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$171))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e37758){if((e37758 instanceof Object))
{var ex__5901__auto__ = e37758;var statearr_37759_37776 = state_37736;(statearr_37759_37776[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37736);
return cljs.core.constant$keyword$171;
} else
{if(cljs.core.constant$keyword$126)
{throw e37758;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$171))
{{
var G__37777 = state_37736;
state_37736 = G__37777;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_37736){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_37736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_37760 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_37760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto___37761);
return statearr_37760;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5967__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_37824){var state_val_37825 = (state_37824[1]);if((state_val_37825 === 7))
{var inst_37820 = (state_37824[2]);var state_37824__$1 = state_37824;var statearr_37826_37842 = state_37824__$1;(statearr_37826_37842[2] = inst_37820);
(statearr_37826_37842[1] = 3);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37825 === 6))
{var inst_37813 = (state_37824[7]);var inst_37810 = (state_37824[8]);var inst_37817 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_37810,inst_37813) : f.call(null,inst_37810,inst_37813));var inst_37810__$1 = inst_37817;var state_37824__$1 = (function (){var statearr_37827 = state_37824;(statearr_37827[8] = inst_37810__$1);
return statearr_37827;
})();var statearr_37828_37843 = state_37824__$1;(statearr_37828_37843[2] = null);
(statearr_37828_37843[1] = 2);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37825 === 5))
{var inst_37810 = (state_37824[8]);var state_37824__$1 = state_37824;var statearr_37829_37844 = state_37824__$1;(statearr_37829_37844[2] = inst_37810);
(statearr_37829_37844[1] = 7);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37825 === 4))
{var inst_37813 = (state_37824[7]);var inst_37813__$1 = (state_37824[2]);var inst_37814 = (inst_37813__$1 == null);var state_37824__$1 = (function (){var statearr_37830 = state_37824;(statearr_37830[7] = inst_37813__$1);
return statearr_37830;
})();if(cljs.core.truth_(inst_37814))
{var statearr_37831_37845 = state_37824__$1;(statearr_37831_37845[1] = 5);
} else
{var statearr_37832_37846 = state_37824__$1;(statearr_37832_37846[1] = 6);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_37825 === 3))
{var inst_37822 = (state_37824[2]);var state_37824__$1 = state_37824;return cljs.core.async.impl.ioc_helpers.return_chan(state_37824__$1,inst_37822);
} else
{if((state_val_37825 === 2))
{var state_37824__$1 = state_37824;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37824__$1,4,ch);
} else
{if((state_val_37825 === 1))
{var inst_37810 = init;var state_37824__$1 = (function (){var statearr_37833 = state_37824;(statearr_37833[8] = inst_37810);
return statearr_37833;
})();var statearr_37834_37847 = state_37824__$1;(statearr_37834_37847[2] = null);
(statearr_37834_37847[1] = 2);
return cljs.core.constant$keyword$171;
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
var state_machine__5898__auto____0 = (function (){var statearr_37838 = (new Array(9));(statearr_37838[0] = state_machine__5898__auto__);
(statearr_37838[1] = 1);
return statearr_37838;
});
var state_machine__5898__auto____1 = (function (state_37824){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_37824);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$171))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e37839){if((e37839 instanceof Object))
{var ex__5901__auto__ = e37839;var statearr_37840_37848 = state_37824;(statearr_37840_37848[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37824);
return cljs.core.constant$keyword$171;
} else
{if(cljs.core.constant$keyword$126)
{throw e37839;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$171))
{{
var G__37849 = state_37824;
state_37824 = G__37849;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_37824){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_37824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_37841 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_37841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto__);
return statearr_37841;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5967__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_37923){var state_val_37924 = (state_37923[1]);if((state_val_37924 === 1))
{var inst_37899 = cljs.core.seq(coll);var inst_37900 = inst_37899;var state_37923__$1 = (function (){var statearr_37925 = state_37923;(statearr_37925[7] = inst_37900);
return statearr_37925;
})();var statearr_37926_37948 = state_37923__$1;(statearr_37926_37948[2] = null);
(statearr_37926_37948[1] = 2);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37924 === 2))
{var inst_37900 = (state_37923[7]);var state_37923__$1 = state_37923;if(cljs.core.truth_(inst_37900))
{var statearr_37927_37949 = state_37923__$1;(statearr_37927_37949[1] = 4);
} else
{var statearr_37928_37950 = state_37923__$1;(statearr_37928_37950[1] = 5);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_37924 === 3))
{var inst_37921 = (state_37923[2]);var state_37923__$1 = state_37923;return cljs.core.async.impl.ioc_helpers.return_chan(state_37923__$1,inst_37921);
} else
{if((state_val_37924 === 4))
{var inst_37900 = (state_37923[7]);var inst_37903 = cljs.core.first(inst_37900);var state_37923__$1 = state_37923;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37923__$1,7,ch,inst_37903);
} else
{if((state_val_37924 === 5))
{var inst_37900 = (state_37923[7]);var state_37923__$1 = state_37923;var statearr_37929_37951 = state_37923__$1;(statearr_37929_37951[2] = inst_37900);
(statearr_37929_37951[1] = 6);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37924 === 6))
{var inst_37908 = (state_37923[2]);var state_37923__$1 = state_37923;if(cljs.core.truth_(inst_37908))
{var statearr_37930_37952 = state_37923__$1;(statearr_37930_37952[1] = 8);
} else
{var statearr_37931_37953 = state_37923__$1;(statearr_37931_37953[1] = 9);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_37924 === 7))
{var inst_37905 = (state_37923[2]);var state_37923__$1 = state_37923;var statearr_37932_37954 = state_37923__$1;(statearr_37932_37954[2] = inst_37905);
(statearr_37932_37954[1] = 6);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37924 === 8))
{var inst_37900 = (state_37923[7]);var inst_37910 = cljs.core.next(inst_37900);var inst_37900__$1 = inst_37910;var state_37923__$1 = (function (){var statearr_37933 = state_37923;(statearr_37933[7] = inst_37900__$1);
return statearr_37933;
})();var statearr_37934_37955 = state_37923__$1;(statearr_37934_37955[2] = null);
(statearr_37934_37955[1] = 2);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37924 === 9))
{var state_37923__$1 = state_37923;if(cljs.core.truth_(close_QMARK_))
{var statearr_37935_37956 = state_37923__$1;(statearr_37935_37956[1] = 11);
} else
{var statearr_37936_37957 = state_37923__$1;(statearr_37936_37957[1] = 12);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_37924 === 10))
{var inst_37919 = (state_37923[2]);var state_37923__$1 = state_37923;var statearr_37937_37958 = state_37923__$1;(statearr_37937_37958[2] = inst_37919);
(statearr_37937_37958[1] = 3);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37924 === 11))
{var inst_37914 = cljs.core.async.close_BANG_(ch);var state_37923__$1 = state_37923;var statearr_37938_37959 = state_37923__$1;(statearr_37938_37959[2] = inst_37914);
(statearr_37938_37959[1] = 13);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37924 === 12))
{var state_37923__$1 = state_37923;var statearr_37939_37960 = state_37923__$1;(statearr_37939_37960[2] = null);
(statearr_37939_37960[1] = 13);
return cljs.core.constant$keyword$171;
} else
{if((state_val_37924 === 13))
{var inst_37917 = (state_37923[2]);var state_37923__$1 = state_37923;var statearr_37940_37961 = state_37923__$1;(statearr_37940_37961[2] = inst_37917);
(statearr_37940_37961[1] = 10);
return cljs.core.constant$keyword$171;
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
var state_machine__5898__auto____0 = (function (){var statearr_37944 = (new Array(8));(statearr_37944[0] = state_machine__5898__auto__);
(statearr_37944[1] = 1);
return statearr_37944;
});
var state_machine__5898__auto____1 = (function (state_37923){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_37923);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$171))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e37945){if((e37945 instanceof Object))
{var ex__5901__auto__ = e37945;var statearr_37946_37962 = state_37923;(statearr_37946_37962[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_37923);
return cljs.core.constant$keyword$171;
} else
{if(cljs.core.constant$keyword$126)
{throw e37945;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$171))
{{
var G__37963 = state_37923;
state_37923 = G__37963;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_37923){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_37923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_37947 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_37947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto__);
return statearr_37947;
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
cljs.core.async.Mux = (function (){var obj37965 = {};return obj37965;
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
cljs.core.async.Mult = (function (){var obj37967 = {};return obj37967;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t38189 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38189 = (function (cs,ch,mult,meta38190){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta38190 = meta38190;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38189.cljs$lang$type = true;
cljs.core.async.t38189.cljs$lang$ctorStr = "cljs.core.async/t38189";
cljs.core.async.t38189.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"cljs.core.async/t38189");
});})(cs))
;
cljs.core.async.t38189.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t38189.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t38189.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t38189.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t38189.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t38189.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t38189.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38191){var self__ = this;
var _38191__$1 = this;return self__.meta38190;
});})(cs))
;
cljs.core.async.t38189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38191,meta38190__$1){var self__ = this;
var _38191__$1 = this;return (new cljs.core.async.t38189(self__.cs,self__.ch,self__.mult,meta38190__$1));
});})(cs))
;
cljs.core.async.__GT_t38189 = ((function (cs){
return (function __GT_t38189(cs__$1,ch__$1,mult__$1,meta38190){return (new cljs.core.async.t38189(cs__$1,ch__$1,mult__$1,meta38190));
});})(cs))
;
}
return (new cljs.core.async.t38189(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5967__auto___38410 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_38322){var state_val_38323 = (state_38322[1]);if((state_val_38323 === 32))
{var inst_38263 = (state_38322[7]);var inst_38262 = (state_38322[8]);var inst_38265 = (state_38322[9]);var inst_38264 = (state_38322[10]);var inst_38277 = (state_38322[2]);var inst_38278 = (inst_38265 + 1);var tmp38324 = inst_38263;var tmp38325 = inst_38262;var tmp38326 = inst_38264;var inst_38262__$1 = tmp38325;var inst_38263__$1 = tmp38324;var inst_38264__$1 = tmp38326;var inst_38265__$1 = inst_38278;var state_38322__$1 = (function (){var statearr_38327 = state_38322;(statearr_38327[7] = inst_38263__$1);
(statearr_38327[8] = inst_38262__$1);
(statearr_38327[9] = inst_38265__$1);
(statearr_38327[10] = inst_38264__$1);
(statearr_38327[11] = inst_38277);
return statearr_38327;
})();var statearr_38328_38411 = state_38322__$1;(statearr_38328_38411[2] = null);
(statearr_38328_38411[1] = 25);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 1))
{var state_38322__$1 = state_38322;var statearr_38329_38412 = state_38322__$1;(statearr_38329_38412[2] = null);
(statearr_38329_38412[1] = 2);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 33))
{var inst_38281 = (state_38322[12]);var inst_38283 = cljs.core.chunked_seq_QMARK_(inst_38281);var state_38322__$1 = state_38322;if(inst_38283)
{var statearr_38330_38413 = state_38322__$1;(statearr_38330_38413[1] = 36);
} else
{var statearr_38331_38414 = state_38322__$1;(statearr_38331_38414[1] = 37);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 2))
{var state_38322__$1 = state_38322;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38322__$1,4,ch);
} else
{if((state_val_38323 === 34))
{var state_38322__$1 = state_38322;var statearr_38332_38415 = state_38322__$1;(statearr_38332_38415[2] = null);
(statearr_38332_38415[1] = 35);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 3))
{var inst_38320 = (state_38322[2]);var state_38322__$1 = state_38322;return cljs.core.async.impl.ioc_helpers.return_chan(state_38322__$1,inst_38320);
} else
{if((state_val_38323 === 35))
{var inst_38304 = (state_38322[2]);var state_38322__$1 = state_38322;var statearr_38333_38416 = state_38322__$1;(statearr_38333_38416[2] = inst_38304);
(statearr_38333_38416[1] = 29);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 4))
{var inst_38194 = (state_38322[13]);var inst_38194__$1 = (state_38322[2]);var inst_38195 = (inst_38194__$1 == null);var state_38322__$1 = (function (){var statearr_38334 = state_38322;(statearr_38334[13] = inst_38194__$1);
return statearr_38334;
})();if(cljs.core.truth_(inst_38195))
{var statearr_38335_38417 = state_38322__$1;(statearr_38335_38417[1] = 5);
} else
{var statearr_38336_38418 = state_38322__$1;(statearr_38336_38418[1] = 6);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 36))
{var inst_38281 = (state_38322[12]);var inst_38285 = cljs.core.chunk_first(inst_38281);var inst_38286 = cljs.core.chunk_rest(inst_38281);var inst_38287 = cljs.core.count(inst_38285);var inst_38262 = inst_38286;var inst_38263 = inst_38285;var inst_38264 = inst_38287;var inst_38265 = 0;var state_38322__$1 = (function (){var statearr_38337 = state_38322;(statearr_38337[7] = inst_38263);
(statearr_38337[8] = inst_38262);
(statearr_38337[9] = inst_38265);
(statearr_38337[10] = inst_38264);
return statearr_38337;
})();var statearr_38338_38419 = state_38322__$1;(statearr_38338_38419[2] = null);
(statearr_38338_38419[1] = 25);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 5))
{var inst_38201 = cljs.core.deref(cs);var inst_38202 = cljs.core.seq(inst_38201);var inst_38203 = inst_38202;var inst_38204 = null;var inst_38205 = 0;var inst_38206 = 0;var state_38322__$1 = (function (){var statearr_38339 = state_38322;(statearr_38339[14] = inst_38203);
(statearr_38339[15] = inst_38206);
(statearr_38339[16] = inst_38205);
(statearr_38339[17] = inst_38204);
return statearr_38339;
})();var statearr_38340_38420 = state_38322__$1;(statearr_38340_38420[2] = null);
(statearr_38340_38420[1] = 8);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 37))
{var inst_38194 = (state_38322[13]);var inst_38290 = (state_38322[18]);var inst_38281 = (state_38322[12]);var inst_38290__$1 = cljs.core.first(inst_38281);var inst_38291 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38290__$1,inst_38194,done);var state_38322__$1 = (function (){var statearr_38341 = state_38322;(statearr_38341[18] = inst_38290__$1);
return statearr_38341;
})();if(cljs.core.truth_(inst_38291))
{var statearr_38342_38421 = state_38322__$1;(statearr_38342_38421[1] = 39);
} else
{var statearr_38343_38422 = state_38322__$1;(statearr_38343_38422[1] = 40);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 6))
{var inst_38254 = (state_38322[19]);var inst_38253 = cljs.core.deref(cs);var inst_38254__$1 = cljs.core.keys(inst_38253);var inst_38255 = cljs.core.count(inst_38254__$1);var inst_38256 = cljs.core.reset_BANG_(dctr,inst_38255);var inst_38261 = cljs.core.seq(inst_38254__$1);var inst_38262 = inst_38261;var inst_38263 = null;var inst_38264 = 0;var inst_38265 = 0;var state_38322__$1 = (function (){var statearr_38344 = state_38322;(statearr_38344[20] = inst_38256);
(statearr_38344[19] = inst_38254__$1);
(statearr_38344[7] = inst_38263);
(statearr_38344[8] = inst_38262);
(statearr_38344[9] = inst_38265);
(statearr_38344[10] = inst_38264);
return statearr_38344;
})();var statearr_38345_38423 = state_38322__$1;(statearr_38345_38423[2] = null);
(statearr_38345_38423[1] = 25);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 38))
{var inst_38301 = (state_38322[2]);var state_38322__$1 = state_38322;var statearr_38346_38424 = state_38322__$1;(statearr_38346_38424[2] = inst_38301);
(statearr_38346_38424[1] = 35);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 7))
{var inst_38318 = (state_38322[2]);var state_38322__$1 = state_38322;var statearr_38347_38425 = state_38322__$1;(statearr_38347_38425[2] = inst_38318);
(statearr_38347_38425[1] = 3);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 39))
{var state_38322__$1 = state_38322;var statearr_38348_38426 = state_38322__$1;(statearr_38348_38426[2] = null);
(statearr_38348_38426[1] = 41);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 8))
{var inst_38206 = (state_38322[15]);var inst_38205 = (state_38322[16]);var inst_38208 = (inst_38206 < inst_38205);var inst_38209 = inst_38208;var state_38322__$1 = state_38322;if(cljs.core.truth_(inst_38209))
{var statearr_38349_38427 = state_38322__$1;(statearr_38349_38427[1] = 10);
} else
{var statearr_38350_38428 = state_38322__$1;(statearr_38350_38428[1] = 11);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 40))
{var inst_38290 = (state_38322[18]);var inst_38294 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_38295 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_38290);var state_38322__$1 = (function (){var statearr_38351 = state_38322;(statearr_38351[21] = inst_38294);
return statearr_38351;
})();var statearr_38352_38429 = state_38322__$1;(statearr_38352_38429[2] = inst_38295);
(statearr_38352_38429[1] = 41);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 9))
{var inst_38251 = (state_38322[2]);var state_38322__$1 = state_38322;var statearr_38353_38430 = state_38322__$1;(statearr_38353_38430[2] = inst_38251);
(statearr_38353_38430[1] = 7);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 41))
{var inst_38281 = (state_38322[12]);var inst_38297 = (state_38322[2]);var inst_38298 = cljs.core.next(inst_38281);var inst_38262 = inst_38298;var inst_38263 = null;var inst_38264 = 0;var inst_38265 = 0;var state_38322__$1 = (function (){var statearr_38354 = state_38322;(statearr_38354[22] = inst_38297);
(statearr_38354[7] = inst_38263);
(statearr_38354[8] = inst_38262);
(statearr_38354[9] = inst_38265);
(statearr_38354[10] = inst_38264);
return statearr_38354;
})();var statearr_38355_38431 = state_38322__$1;(statearr_38355_38431[2] = null);
(statearr_38355_38431[1] = 25);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 10))
{var inst_38206 = (state_38322[15]);var inst_38204 = (state_38322[17]);var inst_38212 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38204,inst_38206);var inst_38213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38212,0,null);var inst_38214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38212,1,null);var state_38322__$1 = (function (){var statearr_38356 = state_38322;(statearr_38356[23] = inst_38213);
return statearr_38356;
})();if(cljs.core.truth_(inst_38214))
{var statearr_38357_38432 = state_38322__$1;(statearr_38357_38432[1] = 13);
} else
{var statearr_38358_38433 = state_38322__$1;(statearr_38358_38433[1] = 14);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 42))
{var state_38322__$1 = state_38322;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38322__$1,45,dchan);
} else
{if((state_val_38323 === 11))
{var inst_38203 = (state_38322[14]);var inst_38223 = (state_38322[24]);var inst_38223__$1 = cljs.core.seq(inst_38203);var state_38322__$1 = (function (){var statearr_38359 = state_38322;(statearr_38359[24] = inst_38223__$1);
return statearr_38359;
})();if(inst_38223__$1)
{var statearr_38360_38434 = state_38322__$1;(statearr_38360_38434[1] = 16);
} else
{var statearr_38361_38435 = state_38322__$1;(statearr_38361_38435[1] = 17);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 43))
{var state_38322__$1 = state_38322;var statearr_38362_38436 = state_38322__$1;(statearr_38362_38436[2] = null);
(statearr_38362_38436[1] = 44);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 12))
{var inst_38249 = (state_38322[2]);var state_38322__$1 = state_38322;var statearr_38363_38437 = state_38322__$1;(statearr_38363_38437[2] = inst_38249);
(statearr_38363_38437[1] = 9);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 44))
{var inst_38315 = (state_38322[2]);var state_38322__$1 = (function (){var statearr_38364 = state_38322;(statearr_38364[25] = inst_38315);
return statearr_38364;
})();var statearr_38365_38438 = state_38322__$1;(statearr_38365_38438[2] = null);
(statearr_38365_38438[1] = 2);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 13))
{var inst_38213 = (state_38322[23]);var inst_38216 = cljs.core.async.close_BANG_(inst_38213);var state_38322__$1 = state_38322;var statearr_38366_38439 = state_38322__$1;(statearr_38366_38439[2] = inst_38216);
(statearr_38366_38439[1] = 15);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 45))
{var inst_38312 = (state_38322[2]);var state_38322__$1 = state_38322;var statearr_38370_38440 = state_38322__$1;(statearr_38370_38440[2] = inst_38312);
(statearr_38370_38440[1] = 44);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 14))
{var state_38322__$1 = state_38322;var statearr_38371_38441 = state_38322__$1;(statearr_38371_38441[2] = null);
(statearr_38371_38441[1] = 15);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 15))
{var inst_38203 = (state_38322[14]);var inst_38206 = (state_38322[15]);var inst_38205 = (state_38322[16]);var inst_38204 = (state_38322[17]);var inst_38219 = (state_38322[2]);var inst_38220 = (inst_38206 + 1);var tmp38367 = inst_38203;var tmp38368 = inst_38205;var tmp38369 = inst_38204;var inst_38203__$1 = tmp38367;var inst_38204__$1 = tmp38369;var inst_38205__$1 = tmp38368;var inst_38206__$1 = inst_38220;var state_38322__$1 = (function (){var statearr_38372 = state_38322;(statearr_38372[14] = inst_38203__$1);
(statearr_38372[15] = inst_38206__$1);
(statearr_38372[16] = inst_38205__$1);
(statearr_38372[17] = inst_38204__$1);
(statearr_38372[26] = inst_38219);
return statearr_38372;
})();var statearr_38373_38442 = state_38322__$1;(statearr_38373_38442[2] = null);
(statearr_38373_38442[1] = 8);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 16))
{var inst_38223 = (state_38322[24]);var inst_38225 = cljs.core.chunked_seq_QMARK_(inst_38223);var state_38322__$1 = state_38322;if(inst_38225)
{var statearr_38374_38443 = state_38322__$1;(statearr_38374_38443[1] = 19);
} else
{var statearr_38375_38444 = state_38322__$1;(statearr_38375_38444[1] = 20);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 17))
{var state_38322__$1 = state_38322;var statearr_38376_38445 = state_38322__$1;(statearr_38376_38445[2] = null);
(statearr_38376_38445[1] = 18);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 18))
{var inst_38247 = (state_38322[2]);var state_38322__$1 = state_38322;var statearr_38377_38446 = state_38322__$1;(statearr_38377_38446[2] = inst_38247);
(statearr_38377_38446[1] = 12);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 19))
{var inst_38223 = (state_38322[24]);var inst_38227 = cljs.core.chunk_first(inst_38223);var inst_38228 = cljs.core.chunk_rest(inst_38223);var inst_38229 = cljs.core.count(inst_38227);var inst_38203 = inst_38228;var inst_38204 = inst_38227;var inst_38205 = inst_38229;var inst_38206 = 0;var state_38322__$1 = (function (){var statearr_38378 = state_38322;(statearr_38378[14] = inst_38203);
(statearr_38378[15] = inst_38206);
(statearr_38378[16] = inst_38205);
(statearr_38378[17] = inst_38204);
return statearr_38378;
})();var statearr_38379_38447 = state_38322__$1;(statearr_38379_38447[2] = null);
(statearr_38379_38447[1] = 8);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 20))
{var inst_38223 = (state_38322[24]);var inst_38233 = cljs.core.first(inst_38223);var inst_38234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38233,0,null);var inst_38235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38233,1,null);var state_38322__$1 = (function (){var statearr_38380 = state_38322;(statearr_38380[27] = inst_38234);
return statearr_38380;
})();if(cljs.core.truth_(inst_38235))
{var statearr_38381_38448 = state_38322__$1;(statearr_38381_38448[1] = 22);
} else
{var statearr_38382_38449 = state_38322__$1;(statearr_38382_38449[1] = 23);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 21))
{var inst_38244 = (state_38322[2]);var state_38322__$1 = state_38322;var statearr_38383_38450 = state_38322__$1;(statearr_38383_38450[2] = inst_38244);
(statearr_38383_38450[1] = 18);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 22))
{var inst_38234 = (state_38322[27]);var inst_38237 = cljs.core.async.close_BANG_(inst_38234);var state_38322__$1 = state_38322;var statearr_38384_38451 = state_38322__$1;(statearr_38384_38451[2] = inst_38237);
(statearr_38384_38451[1] = 24);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 23))
{var state_38322__$1 = state_38322;var statearr_38385_38452 = state_38322__$1;(statearr_38385_38452[2] = null);
(statearr_38385_38452[1] = 24);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 24))
{var inst_38223 = (state_38322[24]);var inst_38240 = (state_38322[2]);var inst_38241 = cljs.core.next(inst_38223);var inst_38203 = inst_38241;var inst_38204 = null;var inst_38205 = 0;var inst_38206 = 0;var state_38322__$1 = (function (){var statearr_38386 = state_38322;(statearr_38386[14] = inst_38203);
(statearr_38386[28] = inst_38240);
(statearr_38386[15] = inst_38206);
(statearr_38386[16] = inst_38205);
(statearr_38386[17] = inst_38204);
return statearr_38386;
})();var statearr_38387_38453 = state_38322__$1;(statearr_38387_38453[2] = null);
(statearr_38387_38453[1] = 8);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 25))
{var inst_38265 = (state_38322[9]);var inst_38264 = (state_38322[10]);var inst_38267 = (inst_38265 < inst_38264);var inst_38268 = inst_38267;var state_38322__$1 = state_38322;if(cljs.core.truth_(inst_38268))
{var statearr_38388_38454 = state_38322__$1;(statearr_38388_38454[1] = 27);
} else
{var statearr_38389_38455 = state_38322__$1;(statearr_38389_38455[1] = 28);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 26))
{var inst_38254 = (state_38322[19]);var inst_38308 = (state_38322[2]);var inst_38309 = cljs.core.seq(inst_38254);var state_38322__$1 = (function (){var statearr_38390 = state_38322;(statearr_38390[29] = inst_38308);
return statearr_38390;
})();if(inst_38309)
{var statearr_38391_38456 = state_38322__$1;(statearr_38391_38456[1] = 42);
} else
{var statearr_38392_38457 = state_38322__$1;(statearr_38392_38457[1] = 43);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 27))
{var inst_38270 = (state_38322[30]);var inst_38194 = (state_38322[13]);var inst_38263 = (state_38322[7]);var inst_38265 = (state_38322[9]);var inst_38270__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38263,inst_38265);var inst_38271 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38270__$1,inst_38194,done);var state_38322__$1 = (function (){var statearr_38393 = state_38322;(statearr_38393[30] = inst_38270__$1);
return statearr_38393;
})();if(cljs.core.truth_(inst_38271))
{var statearr_38394_38458 = state_38322__$1;(statearr_38394_38458[1] = 30);
} else
{var statearr_38395_38459 = state_38322__$1;(statearr_38395_38459[1] = 31);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 28))
{var inst_38262 = (state_38322[8]);var inst_38281 = (state_38322[12]);var inst_38281__$1 = cljs.core.seq(inst_38262);var state_38322__$1 = (function (){var statearr_38396 = state_38322;(statearr_38396[12] = inst_38281__$1);
return statearr_38396;
})();if(inst_38281__$1)
{var statearr_38397_38460 = state_38322__$1;(statearr_38397_38460[1] = 33);
} else
{var statearr_38398_38461 = state_38322__$1;(statearr_38398_38461[1] = 34);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 29))
{var inst_38306 = (state_38322[2]);var state_38322__$1 = state_38322;var statearr_38399_38462 = state_38322__$1;(statearr_38399_38462[2] = inst_38306);
(statearr_38399_38462[1] = 26);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 30))
{var state_38322__$1 = state_38322;var statearr_38400_38463 = state_38322__$1;(statearr_38400_38463[2] = null);
(statearr_38400_38463[1] = 32);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38323 === 31))
{var inst_38270 = (state_38322[30]);var inst_38274 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_38275 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_38270);var state_38322__$1 = (function (){var statearr_38401 = state_38322;(statearr_38401[31] = inst_38274);
return statearr_38401;
})();var statearr_38402_38464 = state_38322__$1;(statearr_38402_38464[2] = inst_38275);
(statearr_38402_38464[1] = 32);
return cljs.core.constant$keyword$171;
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
var state_machine__5898__auto____0 = (function (){var statearr_38406 = (new Array(32));(statearr_38406[0] = state_machine__5898__auto__);
(statearr_38406[1] = 1);
return statearr_38406;
});
var state_machine__5898__auto____1 = (function (state_38322){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_38322);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$171))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e38407){if((e38407 instanceof Object))
{var ex__5901__auto__ = e38407;var statearr_38408_38465 = state_38322;(statearr_38408_38465[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38322);
return cljs.core.constant$keyword$171;
} else
{if(cljs.core.constant$keyword$126)
{throw e38407;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$171))
{{
var G__38466 = state_38322;
state_38322 = G__38466;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_38322){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_38322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_38409 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_38409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto___38410);
return statearr_38409;
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
cljs.core.async.Mix = (function (){var obj38468 = {};return obj38468;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$177,null,cljs.core.constant$keyword$178,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$179);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$178);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$179,chs);var pauses = pick(cljs.core.constant$keyword$177,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$180,solos,cljs.core.constant$keyword$181,pick(cljs.core.constant$keyword$178,chs),cljs.core.constant$keyword$182,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$177)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t38588 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38588 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta38589){
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
this.meta38589 = meta38589;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38588.cljs$lang$type = true;
cljs.core.async.t38588.cljs$lang$ctorStr = "cljs.core.async/t38588";
cljs.core.async.t38588.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"cljs.core.async/t38588");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38588.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t38588.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38588.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38588.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38588.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38588.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38588.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t38588.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38588.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38590){var self__ = this;
var _38590__$1 = this;return self__.meta38589;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38590,meta38589__$1){var self__ = this;
var _38590__$1 = this;return (new cljs.core.async.t38588(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta38589__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t38588 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t38588(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta38589){return (new cljs.core.async.t38588(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta38589));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t38588(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5967__auto___38707 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_38660){var state_val_38661 = (state_38660[1]);if((state_val_38661 === 1))
{var inst_38594 = (state_38660[7]);var inst_38594__$1 = calc_state();var inst_38595 = cljs.core.seq_QMARK_(inst_38594__$1);var state_38660__$1 = (function (){var statearr_38662 = state_38660;(statearr_38662[7] = inst_38594__$1);
return statearr_38662;
})();if(inst_38595)
{var statearr_38663_38708 = state_38660__$1;(statearr_38663_38708[1] = 2);
} else
{var statearr_38664_38709 = state_38660__$1;(statearr_38664_38709[1] = 3);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_38661 === 2))
{var inst_38594 = (state_38660[7]);var inst_38597 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_38594);var state_38660__$1 = state_38660;var statearr_38665_38710 = state_38660__$1;(statearr_38665_38710[2] = inst_38597);
(statearr_38665_38710[1] = 4);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38661 === 3))
{var inst_38594 = (state_38660[7]);var state_38660__$1 = state_38660;var statearr_38666_38711 = state_38660__$1;(statearr_38666_38711[2] = inst_38594);
(statearr_38666_38711[1] = 4);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38661 === 4))
{var inst_38594 = (state_38660[7]);var inst_38600 = (state_38660[2]);var inst_38601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38600,cljs.core.constant$keyword$182);var inst_38602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38600,cljs.core.constant$keyword$181);var inst_38603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38600,cljs.core.constant$keyword$180);var inst_38604 = inst_38594;var state_38660__$1 = (function (){var statearr_38667 = state_38660;(statearr_38667[8] = inst_38604);
(statearr_38667[9] = inst_38603);
(statearr_38667[10] = inst_38602);
(statearr_38667[11] = inst_38601);
return statearr_38667;
})();var statearr_38668_38712 = state_38660__$1;(statearr_38668_38712[2] = null);
(statearr_38668_38712[1] = 5);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38661 === 5))
{var inst_38604 = (state_38660[8]);var inst_38607 = cljs.core.seq_QMARK_(inst_38604);var state_38660__$1 = state_38660;if(inst_38607)
{var statearr_38669_38713 = state_38660__$1;(statearr_38669_38713[1] = 7);
} else
{var statearr_38670_38714 = state_38660__$1;(statearr_38670_38714[1] = 8);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_38661 === 6))
{var inst_38658 = (state_38660[2]);var state_38660__$1 = state_38660;return cljs.core.async.impl.ioc_helpers.return_chan(state_38660__$1,inst_38658);
} else
{if((state_val_38661 === 7))
{var inst_38604 = (state_38660[8]);var inst_38609 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_38604);var state_38660__$1 = state_38660;var statearr_38671_38715 = state_38660__$1;(statearr_38671_38715[2] = inst_38609);
(statearr_38671_38715[1] = 9);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38661 === 8))
{var inst_38604 = (state_38660[8]);var state_38660__$1 = state_38660;var statearr_38672_38716 = state_38660__$1;(statearr_38672_38716[2] = inst_38604);
(statearr_38672_38716[1] = 9);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38661 === 9))
{var inst_38612 = (state_38660[12]);var inst_38612__$1 = (state_38660[2]);var inst_38613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38612__$1,cljs.core.constant$keyword$182);var inst_38614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38612__$1,cljs.core.constant$keyword$181);var inst_38615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38612__$1,cljs.core.constant$keyword$180);var state_38660__$1 = (function (){var statearr_38673 = state_38660;(statearr_38673[13] = inst_38614);
(statearr_38673[12] = inst_38612__$1);
(statearr_38673[14] = inst_38615);
return statearr_38673;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_38660__$1,10,inst_38613);
} else
{if((state_val_38661 === 10))
{var inst_38619 = (state_38660[15]);var inst_38620 = (state_38660[16]);var inst_38618 = (state_38660[2]);var inst_38619__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38618,0,null);var inst_38620__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38618,1,null);var inst_38621 = (inst_38619__$1 == null);var inst_38622 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38620__$1,change);var inst_38623 = (inst_38621) || (inst_38622);var state_38660__$1 = (function (){var statearr_38674 = state_38660;(statearr_38674[15] = inst_38619__$1);
(statearr_38674[16] = inst_38620__$1);
return statearr_38674;
})();if(cljs.core.truth_(inst_38623))
{var statearr_38675_38717 = state_38660__$1;(statearr_38675_38717[1] = 11);
} else
{var statearr_38676_38718 = state_38660__$1;(statearr_38676_38718[1] = 12);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_38661 === 11))
{var inst_38619 = (state_38660[15]);var inst_38625 = (inst_38619 == null);var state_38660__$1 = state_38660;if(cljs.core.truth_(inst_38625))
{var statearr_38677_38719 = state_38660__$1;(statearr_38677_38719[1] = 14);
} else
{var statearr_38678_38720 = state_38660__$1;(statearr_38678_38720[1] = 15);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_38661 === 12))
{var inst_38620 = (state_38660[16]);var inst_38634 = (state_38660[17]);var inst_38615 = (state_38660[14]);var inst_38634__$1 = (inst_38615.cljs$core$IFn$_invoke$arity$1 ? inst_38615.cljs$core$IFn$_invoke$arity$1(inst_38620) : inst_38615.call(null,inst_38620));var state_38660__$1 = (function (){var statearr_38679 = state_38660;(statearr_38679[17] = inst_38634__$1);
return statearr_38679;
})();if(cljs.core.truth_(inst_38634__$1))
{var statearr_38680_38721 = state_38660__$1;(statearr_38680_38721[1] = 17);
} else
{var statearr_38681_38722 = state_38660__$1;(statearr_38681_38722[1] = 18);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_38661 === 13))
{var inst_38656 = (state_38660[2]);var state_38660__$1 = state_38660;var statearr_38682_38723 = state_38660__$1;(statearr_38682_38723[2] = inst_38656);
(statearr_38682_38723[1] = 6);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38661 === 14))
{var inst_38620 = (state_38660[16]);var inst_38627 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_38620);var state_38660__$1 = state_38660;var statearr_38683_38724 = state_38660__$1;(statearr_38683_38724[2] = inst_38627);
(statearr_38683_38724[1] = 16);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38661 === 15))
{var state_38660__$1 = state_38660;var statearr_38684_38725 = state_38660__$1;(statearr_38684_38725[2] = null);
(statearr_38684_38725[1] = 16);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38661 === 16))
{var inst_38630 = (state_38660[2]);var inst_38631 = calc_state();var inst_38604 = inst_38631;var state_38660__$1 = (function (){var statearr_38685 = state_38660;(statearr_38685[8] = inst_38604);
(statearr_38685[18] = inst_38630);
return statearr_38685;
})();var statearr_38686_38726 = state_38660__$1;(statearr_38686_38726[2] = null);
(statearr_38686_38726[1] = 5);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38661 === 17))
{var inst_38634 = (state_38660[17]);var state_38660__$1 = state_38660;var statearr_38687_38727 = state_38660__$1;(statearr_38687_38727[2] = inst_38634);
(statearr_38687_38727[1] = 19);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38661 === 18))
{var inst_38614 = (state_38660[13]);var inst_38620 = (state_38660[16]);var inst_38615 = (state_38660[14]);var inst_38637 = cljs.core.empty_QMARK_(inst_38615);var inst_38638 = (inst_38614.cljs$core$IFn$_invoke$arity$1 ? inst_38614.cljs$core$IFn$_invoke$arity$1(inst_38620) : inst_38614.call(null,inst_38620));var inst_38639 = cljs.core.not(inst_38638);var inst_38640 = (inst_38637) && (inst_38639);var state_38660__$1 = state_38660;var statearr_38688_38728 = state_38660__$1;(statearr_38688_38728[2] = inst_38640);
(statearr_38688_38728[1] = 19);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38661 === 19))
{var inst_38642 = (state_38660[2]);var state_38660__$1 = state_38660;if(cljs.core.truth_(inst_38642))
{var statearr_38689_38729 = state_38660__$1;(statearr_38689_38729[1] = 20);
} else
{var statearr_38690_38730 = state_38660__$1;(statearr_38690_38730[1] = 21);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_38661 === 20))
{var inst_38619 = (state_38660[15]);var state_38660__$1 = state_38660;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38660__$1,23,out,inst_38619);
} else
{if((state_val_38661 === 21))
{var inst_38612 = (state_38660[12]);var inst_38604 = inst_38612;var state_38660__$1 = (function (){var statearr_38691 = state_38660;(statearr_38691[8] = inst_38604);
return statearr_38691;
})();var statearr_38692_38731 = state_38660__$1;(statearr_38692_38731[2] = null);
(statearr_38692_38731[1] = 5);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38661 === 22))
{var inst_38654 = (state_38660[2]);var state_38660__$1 = state_38660;var statearr_38693_38732 = state_38660__$1;(statearr_38693_38732[2] = inst_38654);
(statearr_38693_38732[1] = 13);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38661 === 23))
{var inst_38645 = (state_38660[2]);var state_38660__$1 = state_38660;if(cljs.core.truth_(inst_38645))
{var statearr_38694_38733 = state_38660__$1;(statearr_38694_38733[1] = 24);
} else
{var statearr_38695_38734 = state_38660__$1;(statearr_38695_38734[1] = 25);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_38661 === 24))
{var inst_38612 = (state_38660[12]);var inst_38604 = inst_38612;var state_38660__$1 = (function (){var statearr_38696 = state_38660;(statearr_38696[8] = inst_38604);
return statearr_38696;
})();var statearr_38697_38735 = state_38660__$1;(statearr_38697_38735[2] = null);
(statearr_38697_38735[1] = 5);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38661 === 25))
{var state_38660__$1 = state_38660;var statearr_38698_38736 = state_38660__$1;(statearr_38698_38736[2] = null);
(statearr_38698_38736[1] = 26);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38661 === 26))
{var inst_38650 = (state_38660[2]);var state_38660__$1 = state_38660;var statearr_38699_38737 = state_38660__$1;(statearr_38699_38737[2] = inst_38650);
(statearr_38699_38737[1] = 22);
return cljs.core.constant$keyword$171;
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
var state_machine__5898__auto____0 = (function (){var statearr_38703 = (new Array(19));(statearr_38703[0] = state_machine__5898__auto__);
(statearr_38703[1] = 1);
return statearr_38703;
});
var state_machine__5898__auto____1 = (function (state_38660){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_38660);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$171))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e38704){if((e38704 instanceof Object))
{var ex__5901__auto__ = e38704;var statearr_38705_38738 = state_38660;(statearr_38705_38738[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38660);
return cljs.core.constant$keyword$171;
} else
{if(cljs.core.constant$keyword$126)
{throw e38704;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$171))
{{
var G__38739 = state_38660;
state_38660 = G__38739;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_38660){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_38660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_38706 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_38706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto___38707);
return statearr_38706;
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
cljs.core.async.Pub = (function (){var obj38741 = {};return obj38741;
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
return (function (p1__38742_SHARP_){if(cljs.core.truth_((p1__38742_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38742_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__38742_SHARP_.call(null,topic))))
{return p1__38742_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38742_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3285__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t38857 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38857 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta38858){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta38858 = meta38858;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38857.cljs$lang$type = true;
cljs.core.async.t38857.cljs$lang$ctorStr = "cljs.core.async/t38857";
cljs.core.async.t38857.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"cljs.core.async/t38857");
});})(mults,ensure_mult))
;
cljs.core.async.t38857.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t38857.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t38857.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t38857.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t38857.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t38857.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t38857.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t38857.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38859){var self__ = this;
var _38859__$1 = this;return self__.meta38858;
});})(mults,ensure_mult))
;
cljs.core.async.t38857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38859,meta38858__$1){var self__ = this;
var _38859__$1 = this;return (new cljs.core.async.t38857(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta38858__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t38857 = ((function (mults,ensure_mult){
return (function __GT_t38857(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta38858){return (new cljs.core.async.t38857(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta38858));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t38857(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5967__auto___38971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_38927){var state_val_38928 = (state_38927[1]);if((state_val_38928 === 1))
{var state_38927__$1 = state_38927;var statearr_38929_38972 = state_38927__$1;(statearr_38929_38972[2] = null);
(statearr_38929_38972[1] = 2);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38928 === 2))
{var state_38927__$1 = state_38927;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38927__$1,4,ch);
} else
{if((state_val_38928 === 3))
{var inst_38925 = (state_38927[2]);var state_38927__$1 = state_38927;return cljs.core.async.impl.ioc_helpers.return_chan(state_38927__$1,inst_38925);
} else
{if((state_val_38928 === 4))
{var inst_38862 = (state_38927[7]);var inst_38862__$1 = (state_38927[2]);var inst_38863 = (inst_38862__$1 == null);var state_38927__$1 = (function (){var statearr_38930 = state_38927;(statearr_38930[7] = inst_38862__$1);
return statearr_38930;
})();if(cljs.core.truth_(inst_38863))
{var statearr_38931_38973 = state_38927__$1;(statearr_38931_38973[1] = 5);
} else
{var statearr_38932_38974 = state_38927__$1;(statearr_38932_38974[1] = 6);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_38928 === 5))
{var inst_38869 = cljs.core.deref(mults);var inst_38870 = cljs.core.vals(inst_38869);var inst_38871 = cljs.core.seq(inst_38870);var inst_38872 = inst_38871;var inst_38873 = null;var inst_38874 = 0;var inst_38875 = 0;var state_38927__$1 = (function (){var statearr_38933 = state_38927;(statearr_38933[8] = inst_38875);
(statearr_38933[9] = inst_38873);
(statearr_38933[10] = inst_38874);
(statearr_38933[11] = inst_38872);
return statearr_38933;
})();var statearr_38934_38975 = state_38927__$1;(statearr_38934_38975[2] = null);
(statearr_38934_38975[1] = 8);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38928 === 6))
{var inst_38862 = (state_38927[7]);var inst_38910 = (state_38927[12]);var inst_38910__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_38862) : topic_fn.call(null,inst_38862));var inst_38911 = cljs.core.deref(mults);var inst_38912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38911,inst_38910__$1);var inst_38913 = cljs.core.async.muxch_STAR_(inst_38912);var state_38927__$1 = (function (){var statearr_38935 = state_38927;(statearr_38935[12] = inst_38910__$1);
return statearr_38935;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38927__$1,19,inst_38913,inst_38862);
} else
{if((state_val_38928 === 7))
{var inst_38923 = (state_38927[2]);var state_38927__$1 = state_38927;var statearr_38936_38976 = state_38927__$1;(statearr_38936_38976[2] = inst_38923);
(statearr_38936_38976[1] = 3);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38928 === 8))
{var inst_38875 = (state_38927[8]);var inst_38874 = (state_38927[10]);var inst_38877 = (inst_38875 < inst_38874);var inst_38878 = inst_38877;var state_38927__$1 = state_38927;if(cljs.core.truth_(inst_38878))
{var statearr_38940_38977 = state_38927__$1;(statearr_38940_38977[1] = 10);
} else
{var statearr_38941_38978 = state_38927__$1;(statearr_38941_38978[1] = 11);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_38928 === 9))
{var inst_38908 = (state_38927[2]);var state_38927__$1 = state_38927;var statearr_38942_38979 = state_38927__$1;(statearr_38942_38979[2] = inst_38908);
(statearr_38942_38979[1] = 7);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38928 === 10))
{var inst_38875 = (state_38927[8]);var inst_38873 = (state_38927[9]);var inst_38874 = (state_38927[10]);var inst_38872 = (state_38927[11]);var inst_38880 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38873,inst_38875);var inst_38881 = cljs.core.async.muxch_STAR_(inst_38880);var inst_38882 = cljs.core.async.close_BANG_(inst_38881);var inst_38883 = (inst_38875 + 1);var tmp38937 = inst_38873;var tmp38938 = inst_38874;var tmp38939 = inst_38872;var inst_38872__$1 = tmp38939;var inst_38873__$1 = tmp38937;var inst_38874__$1 = tmp38938;var inst_38875__$1 = inst_38883;var state_38927__$1 = (function (){var statearr_38943 = state_38927;(statearr_38943[13] = inst_38882);
(statearr_38943[8] = inst_38875__$1);
(statearr_38943[9] = inst_38873__$1);
(statearr_38943[10] = inst_38874__$1);
(statearr_38943[11] = inst_38872__$1);
return statearr_38943;
})();var statearr_38944_38980 = state_38927__$1;(statearr_38944_38980[2] = null);
(statearr_38944_38980[1] = 8);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38928 === 11))
{var inst_38886 = (state_38927[14]);var inst_38872 = (state_38927[11]);var inst_38886__$1 = cljs.core.seq(inst_38872);var state_38927__$1 = (function (){var statearr_38945 = state_38927;(statearr_38945[14] = inst_38886__$1);
return statearr_38945;
})();if(inst_38886__$1)
{var statearr_38946_38981 = state_38927__$1;(statearr_38946_38981[1] = 13);
} else
{var statearr_38947_38982 = state_38927__$1;(statearr_38947_38982[1] = 14);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_38928 === 12))
{var inst_38906 = (state_38927[2]);var state_38927__$1 = state_38927;var statearr_38948_38983 = state_38927__$1;(statearr_38948_38983[2] = inst_38906);
(statearr_38948_38983[1] = 9);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38928 === 13))
{var inst_38886 = (state_38927[14]);var inst_38888 = cljs.core.chunked_seq_QMARK_(inst_38886);var state_38927__$1 = state_38927;if(inst_38888)
{var statearr_38949_38984 = state_38927__$1;(statearr_38949_38984[1] = 16);
} else
{var statearr_38950_38985 = state_38927__$1;(statearr_38950_38985[1] = 17);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_38928 === 14))
{var state_38927__$1 = state_38927;var statearr_38951_38986 = state_38927__$1;(statearr_38951_38986[2] = null);
(statearr_38951_38986[1] = 15);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38928 === 15))
{var inst_38904 = (state_38927[2]);var state_38927__$1 = state_38927;var statearr_38952_38987 = state_38927__$1;(statearr_38952_38987[2] = inst_38904);
(statearr_38952_38987[1] = 12);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38928 === 16))
{var inst_38886 = (state_38927[14]);var inst_38890 = cljs.core.chunk_first(inst_38886);var inst_38891 = cljs.core.chunk_rest(inst_38886);var inst_38892 = cljs.core.count(inst_38890);var inst_38872 = inst_38891;var inst_38873 = inst_38890;var inst_38874 = inst_38892;var inst_38875 = 0;var state_38927__$1 = (function (){var statearr_38953 = state_38927;(statearr_38953[8] = inst_38875);
(statearr_38953[9] = inst_38873);
(statearr_38953[10] = inst_38874);
(statearr_38953[11] = inst_38872);
return statearr_38953;
})();var statearr_38954_38988 = state_38927__$1;(statearr_38954_38988[2] = null);
(statearr_38954_38988[1] = 8);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38928 === 17))
{var inst_38886 = (state_38927[14]);var inst_38895 = cljs.core.first(inst_38886);var inst_38896 = cljs.core.async.muxch_STAR_(inst_38895);var inst_38897 = cljs.core.async.close_BANG_(inst_38896);var inst_38898 = cljs.core.next(inst_38886);var inst_38872 = inst_38898;var inst_38873 = null;var inst_38874 = 0;var inst_38875 = 0;var state_38927__$1 = (function (){var statearr_38955 = state_38927;(statearr_38955[15] = inst_38897);
(statearr_38955[8] = inst_38875);
(statearr_38955[9] = inst_38873);
(statearr_38955[10] = inst_38874);
(statearr_38955[11] = inst_38872);
return statearr_38955;
})();var statearr_38956_38989 = state_38927__$1;(statearr_38956_38989[2] = null);
(statearr_38956_38989[1] = 8);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38928 === 18))
{var inst_38901 = (state_38927[2]);var state_38927__$1 = state_38927;var statearr_38957_38990 = state_38927__$1;(statearr_38957_38990[2] = inst_38901);
(statearr_38957_38990[1] = 15);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38928 === 19))
{var inst_38915 = (state_38927[2]);var state_38927__$1 = state_38927;if(cljs.core.truth_(inst_38915))
{var statearr_38958_38991 = state_38927__$1;(statearr_38958_38991[1] = 20);
} else
{var statearr_38959_38992 = state_38927__$1;(statearr_38959_38992[1] = 21);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_38928 === 20))
{var state_38927__$1 = state_38927;var statearr_38960_38993 = state_38927__$1;(statearr_38960_38993[2] = null);
(statearr_38960_38993[1] = 22);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38928 === 21))
{var inst_38910 = (state_38927[12]);var inst_38918 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_38910);var state_38927__$1 = state_38927;var statearr_38961_38994 = state_38927__$1;(statearr_38961_38994[2] = inst_38918);
(statearr_38961_38994[1] = 22);
return cljs.core.constant$keyword$171;
} else
{if((state_val_38928 === 22))
{var inst_38920 = (state_38927[2]);var state_38927__$1 = (function (){var statearr_38962 = state_38927;(statearr_38962[16] = inst_38920);
return statearr_38962;
})();var statearr_38963_38995 = state_38927__$1;(statearr_38963_38995[2] = null);
(statearr_38963_38995[1] = 2);
return cljs.core.constant$keyword$171;
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
var state_machine__5898__auto____0 = (function (){var statearr_38967 = (new Array(17));(statearr_38967[0] = state_machine__5898__auto__);
(statearr_38967[1] = 1);
return statearr_38967;
});
var state_machine__5898__auto____1 = (function (state_38927){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_38927);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$171))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e38968){if((e38968 instanceof Object))
{var ex__5901__auto__ = e38968;var statearr_38969_38996 = state_38927;(statearr_38969_38996[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_38927);
return cljs.core.constant$keyword$171;
} else
{if(cljs.core.constant$keyword$126)
{throw e38968;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$171))
{{
var G__38997 = state_38927;
state_38927 = G__38997;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_38927){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_38927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_38970 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_38970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto___38971);
return statearr_38970;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5967__auto___39134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_39104){var state_val_39105 = (state_39104[1]);if((state_val_39105 === 1))
{var state_39104__$1 = state_39104;var statearr_39106_39135 = state_39104__$1;(statearr_39106_39135[2] = null);
(statearr_39106_39135[1] = 2);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39105 === 2))
{var inst_39067 = cljs.core.reset_BANG_(dctr,cnt);var inst_39068 = 0;var state_39104__$1 = (function (){var statearr_39107 = state_39104;(statearr_39107[7] = inst_39068);
(statearr_39107[8] = inst_39067);
return statearr_39107;
})();var statearr_39108_39136 = state_39104__$1;(statearr_39108_39136[2] = null);
(statearr_39108_39136[1] = 4);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39105 === 3))
{var inst_39102 = (state_39104[2]);var state_39104__$1 = state_39104;return cljs.core.async.impl.ioc_helpers.return_chan(state_39104__$1,inst_39102);
} else
{if((state_val_39105 === 4))
{var inst_39068 = (state_39104[7]);var inst_39070 = (inst_39068 < cnt);var state_39104__$1 = state_39104;if(cljs.core.truth_(inst_39070))
{var statearr_39109_39137 = state_39104__$1;(statearr_39109_39137[1] = 6);
} else
{var statearr_39110_39138 = state_39104__$1;(statearr_39110_39138[1] = 7);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_39105 === 5))
{var inst_39088 = (state_39104[2]);var state_39104__$1 = (function (){var statearr_39111 = state_39104;(statearr_39111[9] = inst_39088);
return statearr_39111;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39104__$1,12,dchan);
} else
{if((state_val_39105 === 6))
{var state_39104__$1 = state_39104;var statearr_39112_39139 = state_39104__$1;(statearr_39112_39139[2] = null);
(statearr_39112_39139[1] = 11);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39105 === 7))
{var state_39104__$1 = state_39104;var statearr_39113_39140 = state_39104__$1;(statearr_39113_39140[2] = null);
(statearr_39113_39140[1] = 8);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39105 === 8))
{var inst_39086 = (state_39104[2]);var state_39104__$1 = state_39104;var statearr_39114_39141 = state_39104__$1;(statearr_39114_39141[2] = inst_39086);
(statearr_39114_39141[1] = 5);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39105 === 9))
{var inst_39068 = (state_39104[7]);var inst_39081 = (state_39104[2]);var inst_39082 = (inst_39068 + 1);var inst_39068__$1 = inst_39082;var state_39104__$1 = (function (){var statearr_39115 = state_39104;(statearr_39115[10] = inst_39081);
(statearr_39115[7] = inst_39068__$1);
return statearr_39115;
})();var statearr_39116_39142 = state_39104__$1;(statearr_39116_39142[2] = null);
(statearr_39116_39142[1] = 4);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39105 === 10))
{var inst_39072 = (state_39104[2]);var inst_39073 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_39104__$1 = (function (){var statearr_39117 = state_39104;(statearr_39117[11] = inst_39072);
return statearr_39117;
})();var statearr_39118_39143 = state_39104__$1;(statearr_39118_39143[2] = inst_39073);
cljs.core.async.impl.ioc_helpers.process_exception(state_39104__$1);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39105 === 11))
{var inst_39068 = (state_39104[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_39104,10,Object,null,9);var inst_39077 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_39068) : chs__$1.call(null,inst_39068));var inst_39078 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_39068) : done.call(null,inst_39068));var inst_39079 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_39077,inst_39078);var state_39104__$1 = state_39104;var statearr_39119_39144 = state_39104__$1;(statearr_39119_39144[2] = inst_39079);
cljs.core.async.impl.ioc_helpers.process_exception(state_39104__$1);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39105 === 12))
{var inst_39090 = (state_39104[12]);var inst_39090__$1 = (state_39104[2]);var inst_39091 = cljs.core.some(cljs.core.nil_QMARK_,inst_39090__$1);var state_39104__$1 = (function (){var statearr_39120 = state_39104;(statearr_39120[12] = inst_39090__$1);
return statearr_39120;
})();if(cljs.core.truth_(inst_39091))
{var statearr_39121_39145 = state_39104__$1;(statearr_39121_39145[1] = 13);
} else
{var statearr_39122_39146 = state_39104__$1;(statearr_39122_39146[1] = 14);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_39105 === 13))
{var inst_39093 = cljs.core.async.close_BANG_(out);var state_39104__$1 = state_39104;var statearr_39123_39147 = state_39104__$1;(statearr_39123_39147[2] = inst_39093);
(statearr_39123_39147[1] = 15);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39105 === 14))
{var inst_39090 = (state_39104[12]);var inst_39095 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_39090);var state_39104__$1 = state_39104;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39104__$1,16,out,inst_39095);
} else
{if((state_val_39105 === 15))
{var inst_39100 = (state_39104[2]);var state_39104__$1 = state_39104;var statearr_39124_39148 = state_39104__$1;(statearr_39124_39148[2] = inst_39100);
(statearr_39124_39148[1] = 3);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39105 === 16))
{var inst_39097 = (state_39104[2]);var state_39104__$1 = (function (){var statearr_39125 = state_39104;(statearr_39125[13] = inst_39097);
return statearr_39125;
})();var statearr_39126_39149 = state_39104__$1;(statearr_39126_39149[2] = null);
(statearr_39126_39149[1] = 2);
return cljs.core.constant$keyword$171;
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
var state_machine__5898__auto____0 = (function (){var statearr_39130 = (new Array(14));(statearr_39130[0] = state_machine__5898__auto__);
(statearr_39130[1] = 1);
return statearr_39130;
});
var state_machine__5898__auto____1 = (function (state_39104){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_39104);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$171))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e39131){if((e39131 instanceof Object))
{var ex__5901__auto__ = e39131;var statearr_39132_39150 = state_39104;(statearr_39132_39150[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39104);
return cljs.core.constant$keyword$171;
} else
{if(cljs.core.constant$keyword$126)
{throw e39131;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$171))
{{
var G__39151 = state_39104;
state_39104 = G__39151;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_39104){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_39104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_39133 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_39133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto___39134);
return statearr_39133;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5967__auto___39259 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_39235){var state_val_39236 = (state_39235[1]);if((state_val_39236 === 1))
{var inst_39206 = cljs.core.vec(chs);var inst_39207 = inst_39206;var state_39235__$1 = (function (){var statearr_39237 = state_39235;(statearr_39237[7] = inst_39207);
return statearr_39237;
})();var statearr_39238_39260 = state_39235__$1;(statearr_39238_39260[2] = null);
(statearr_39238_39260[1] = 2);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39236 === 2))
{var inst_39207 = (state_39235[7]);var inst_39209 = cljs.core.count(inst_39207);var inst_39210 = (inst_39209 > 0);var state_39235__$1 = state_39235;if(cljs.core.truth_(inst_39210))
{var statearr_39239_39261 = state_39235__$1;(statearr_39239_39261[1] = 4);
} else
{var statearr_39240_39262 = state_39235__$1;(statearr_39240_39262[1] = 5);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_39236 === 3))
{var inst_39233 = (state_39235[2]);var state_39235__$1 = state_39235;return cljs.core.async.impl.ioc_helpers.return_chan(state_39235__$1,inst_39233);
} else
{if((state_val_39236 === 4))
{var inst_39207 = (state_39235[7]);var state_39235__$1 = state_39235;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_39235__$1,7,inst_39207);
} else
{if((state_val_39236 === 5))
{var inst_39229 = cljs.core.async.close_BANG_(out);var state_39235__$1 = state_39235;var statearr_39241_39263 = state_39235__$1;(statearr_39241_39263[2] = inst_39229);
(statearr_39241_39263[1] = 6);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39236 === 6))
{var inst_39231 = (state_39235[2]);var state_39235__$1 = state_39235;var statearr_39242_39264 = state_39235__$1;(statearr_39242_39264[2] = inst_39231);
(statearr_39242_39264[1] = 3);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39236 === 7))
{var inst_39214 = (state_39235[8]);var inst_39215 = (state_39235[9]);var inst_39214__$1 = (state_39235[2]);var inst_39215__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39214__$1,0,null);var inst_39216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39214__$1,1,null);var inst_39217 = (inst_39215__$1 == null);var state_39235__$1 = (function (){var statearr_39243 = state_39235;(statearr_39243[8] = inst_39214__$1);
(statearr_39243[9] = inst_39215__$1);
(statearr_39243[10] = inst_39216);
return statearr_39243;
})();if(cljs.core.truth_(inst_39217))
{var statearr_39244_39265 = state_39235__$1;(statearr_39244_39265[1] = 8);
} else
{var statearr_39245_39266 = state_39235__$1;(statearr_39245_39266[1] = 9);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_39236 === 8))
{var inst_39214 = (state_39235[8]);var inst_39215 = (state_39235[9]);var inst_39216 = (state_39235[10]);var inst_39207 = (state_39235[7]);var inst_39219 = (function (){var c = inst_39216;var v = inst_39215;var vec__39212 = inst_39214;var cs = inst_39207;return ((function (c,v,vec__39212,cs,inst_39214,inst_39215,inst_39216,inst_39207,state_val_39236){
return (function (p1__39152_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__39152_SHARP_);
});
;})(c,v,vec__39212,cs,inst_39214,inst_39215,inst_39216,inst_39207,state_val_39236))
})();var inst_39220 = cljs.core.filterv(inst_39219,inst_39207);var inst_39207__$1 = inst_39220;var state_39235__$1 = (function (){var statearr_39246 = state_39235;(statearr_39246[7] = inst_39207__$1);
return statearr_39246;
})();var statearr_39247_39267 = state_39235__$1;(statearr_39247_39267[2] = null);
(statearr_39247_39267[1] = 2);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39236 === 9))
{var inst_39215 = (state_39235[9]);var state_39235__$1 = state_39235;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39235__$1,11,out,inst_39215);
} else
{if((state_val_39236 === 10))
{var inst_39227 = (state_39235[2]);var state_39235__$1 = state_39235;var statearr_39249_39268 = state_39235__$1;(statearr_39249_39268[2] = inst_39227);
(statearr_39249_39268[1] = 6);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39236 === 11))
{var inst_39207 = (state_39235[7]);var inst_39224 = (state_39235[2]);var tmp39248 = inst_39207;var inst_39207__$1 = tmp39248;var state_39235__$1 = (function (){var statearr_39250 = state_39235;(statearr_39250[11] = inst_39224);
(statearr_39250[7] = inst_39207__$1);
return statearr_39250;
})();var statearr_39251_39269 = state_39235__$1;(statearr_39251_39269[2] = null);
(statearr_39251_39269[1] = 2);
return cljs.core.constant$keyword$171;
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
var state_machine__5898__auto____0 = (function (){var statearr_39255 = (new Array(12));(statearr_39255[0] = state_machine__5898__auto__);
(statearr_39255[1] = 1);
return statearr_39255;
});
var state_machine__5898__auto____1 = (function (state_39235){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_39235);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$171))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e39256){if((e39256 instanceof Object))
{var ex__5901__auto__ = e39256;var statearr_39257_39270 = state_39235;(statearr_39257_39270[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39235);
return cljs.core.constant$keyword$171;
} else
{if(cljs.core.constant$keyword$126)
{throw e39256;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$171))
{{
var G__39271 = state_39235;
state_39235 = G__39271;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_39235){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_39235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_39258 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_39258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto___39259);
return statearr_39258;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5967__auto___39364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_39341){var state_val_39342 = (state_39341[1]);if((state_val_39342 === 1))
{var inst_39318 = 0;var state_39341__$1 = (function (){var statearr_39343 = state_39341;(statearr_39343[7] = inst_39318);
return statearr_39343;
})();var statearr_39344_39365 = state_39341__$1;(statearr_39344_39365[2] = null);
(statearr_39344_39365[1] = 2);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39342 === 2))
{var inst_39318 = (state_39341[7]);var inst_39320 = (inst_39318 < n);var state_39341__$1 = state_39341;if(cljs.core.truth_(inst_39320))
{var statearr_39345_39366 = state_39341__$1;(statearr_39345_39366[1] = 4);
} else
{var statearr_39346_39367 = state_39341__$1;(statearr_39346_39367[1] = 5);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_39342 === 3))
{var inst_39338 = (state_39341[2]);var inst_39339 = cljs.core.async.close_BANG_(out);var state_39341__$1 = (function (){var statearr_39347 = state_39341;(statearr_39347[8] = inst_39338);
return statearr_39347;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_39341__$1,inst_39339);
} else
{if((state_val_39342 === 4))
{var state_39341__$1 = state_39341;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39341__$1,7,ch);
} else
{if((state_val_39342 === 5))
{var state_39341__$1 = state_39341;var statearr_39348_39368 = state_39341__$1;(statearr_39348_39368[2] = null);
(statearr_39348_39368[1] = 6);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39342 === 6))
{var inst_39336 = (state_39341[2]);var state_39341__$1 = state_39341;var statearr_39349_39369 = state_39341__$1;(statearr_39349_39369[2] = inst_39336);
(statearr_39349_39369[1] = 3);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39342 === 7))
{var inst_39323 = (state_39341[9]);var inst_39323__$1 = (state_39341[2]);var inst_39324 = (inst_39323__$1 == null);var inst_39325 = cljs.core.not(inst_39324);var state_39341__$1 = (function (){var statearr_39350 = state_39341;(statearr_39350[9] = inst_39323__$1);
return statearr_39350;
})();if(inst_39325)
{var statearr_39351_39370 = state_39341__$1;(statearr_39351_39370[1] = 8);
} else
{var statearr_39352_39371 = state_39341__$1;(statearr_39352_39371[1] = 9);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_39342 === 8))
{var inst_39323 = (state_39341[9]);var state_39341__$1 = state_39341;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39341__$1,11,out,inst_39323);
} else
{if((state_val_39342 === 9))
{var state_39341__$1 = state_39341;var statearr_39353_39372 = state_39341__$1;(statearr_39353_39372[2] = null);
(statearr_39353_39372[1] = 10);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39342 === 10))
{var inst_39333 = (state_39341[2]);var state_39341__$1 = state_39341;var statearr_39354_39373 = state_39341__$1;(statearr_39354_39373[2] = inst_39333);
(statearr_39354_39373[1] = 6);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39342 === 11))
{var inst_39318 = (state_39341[7]);var inst_39328 = (state_39341[2]);var inst_39329 = (inst_39318 + 1);var inst_39318__$1 = inst_39329;var state_39341__$1 = (function (){var statearr_39355 = state_39341;(statearr_39355[10] = inst_39328);
(statearr_39355[7] = inst_39318__$1);
return statearr_39355;
})();var statearr_39356_39374 = state_39341__$1;(statearr_39356_39374[2] = null);
(statearr_39356_39374[1] = 2);
return cljs.core.constant$keyword$171;
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
var state_machine__5898__auto____0 = (function (){var statearr_39360 = (new Array(11));(statearr_39360[0] = state_machine__5898__auto__);
(statearr_39360[1] = 1);
return statearr_39360;
});
var state_machine__5898__auto____1 = (function (state_39341){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_39341);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$171))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e39361){if((e39361 instanceof Object))
{var ex__5901__auto__ = e39361;var statearr_39362_39375 = state_39341;(statearr_39362_39375[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39341);
return cljs.core.constant$keyword$171;
} else
{if(cljs.core.constant$keyword$126)
{throw e39361;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$171))
{{
var G__39376 = state_39341;
state_39341 = G__39376;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_39341){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_39341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_39363 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_39363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto___39364);
return statearr_39363;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5967__auto___39473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_39448){var state_val_39449 = (state_39448[1]);if((state_val_39449 === 1))
{var inst_39425 = null;var state_39448__$1 = (function (){var statearr_39450 = state_39448;(statearr_39450[7] = inst_39425);
return statearr_39450;
})();var statearr_39451_39474 = state_39448__$1;(statearr_39451_39474[2] = null);
(statearr_39451_39474[1] = 2);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39449 === 2))
{var state_39448__$1 = state_39448;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39448__$1,4,ch);
} else
{if((state_val_39449 === 3))
{var inst_39445 = (state_39448[2]);var inst_39446 = cljs.core.async.close_BANG_(out);var state_39448__$1 = (function (){var statearr_39452 = state_39448;(statearr_39452[8] = inst_39445);
return statearr_39452;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_39448__$1,inst_39446);
} else
{if((state_val_39449 === 4))
{var inst_39428 = (state_39448[9]);var inst_39428__$1 = (state_39448[2]);var inst_39429 = (inst_39428__$1 == null);var inst_39430 = cljs.core.not(inst_39429);var state_39448__$1 = (function (){var statearr_39453 = state_39448;(statearr_39453[9] = inst_39428__$1);
return statearr_39453;
})();if(inst_39430)
{var statearr_39454_39475 = state_39448__$1;(statearr_39454_39475[1] = 5);
} else
{var statearr_39455_39476 = state_39448__$1;(statearr_39455_39476[1] = 6);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_39449 === 5))
{var inst_39428 = (state_39448[9]);var inst_39425 = (state_39448[7]);var inst_39432 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39428,inst_39425);var state_39448__$1 = state_39448;if(inst_39432)
{var statearr_39456_39477 = state_39448__$1;(statearr_39456_39477[1] = 8);
} else
{var statearr_39457_39478 = state_39448__$1;(statearr_39457_39478[1] = 9);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_39449 === 6))
{var state_39448__$1 = state_39448;var statearr_39459_39479 = state_39448__$1;(statearr_39459_39479[2] = null);
(statearr_39459_39479[1] = 7);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39449 === 7))
{var inst_39443 = (state_39448[2]);var state_39448__$1 = state_39448;var statearr_39460_39480 = state_39448__$1;(statearr_39460_39480[2] = inst_39443);
(statearr_39460_39480[1] = 3);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39449 === 8))
{var inst_39425 = (state_39448[7]);var tmp39458 = inst_39425;var inst_39425__$1 = tmp39458;var state_39448__$1 = (function (){var statearr_39461 = state_39448;(statearr_39461[7] = inst_39425__$1);
return statearr_39461;
})();var statearr_39462_39481 = state_39448__$1;(statearr_39462_39481[2] = null);
(statearr_39462_39481[1] = 2);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39449 === 9))
{var inst_39428 = (state_39448[9]);var state_39448__$1 = state_39448;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39448__$1,11,out,inst_39428);
} else
{if((state_val_39449 === 10))
{var inst_39440 = (state_39448[2]);var state_39448__$1 = state_39448;var statearr_39463_39482 = state_39448__$1;(statearr_39463_39482[2] = inst_39440);
(statearr_39463_39482[1] = 7);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39449 === 11))
{var inst_39428 = (state_39448[9]);var inst_39437 = (state_39448[2]);var inst_39425 = inst_39428;var state_39448__$1 = (function (){var statearr_39464 = state_39448;(statearr_39464[7] = inst_39425);
(statearr_39464[10] = inst_39437);
return statearr_39464;
})();var statearr_39465_39483 = state_39448__$1;(statearr_39465_39483[2] = null);
(statearr_39465_39483[1] = 2);
return cljs.core.constant$keyword$171;
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
var state_machine__5898__auto____0 = (function (){var statearr_39469 = (new Array(11));(statearr_39469[0] = state_machine__5898__auto__);
(statearr_39469[1] = 1);
return statearr_39469;
});
var state_machine__5898__auto____1 = (function (state_39448){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_39448);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$171))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e39470){if((e39470 instanceof Object))
{var ex__5901__auto__ = e39470;var statearr_39471_39484 = state_39448;(statearr_39471_39484[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39448);
return cljs.core.constant$keyword$171;
} else
{if(cljs.core.constant$keyword$126)
{throw e39470;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$171))
{{
var G__39485 = state_39448;
state_39448 = G__39485;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_39448){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_39448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_39472 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_39472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto___39473);
return statearr_39472;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5967__auto___39620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_39590){var state_val_39591 = (state_39590[1]);if((state_val_39591 === 1))
{var inst_39553 = (new Array(n));var inst_39554 = inst_39553;var inst_39555 = 0;var state_39590__$1 = (function (){var statearr_39592 = state_39590;(statearr_39592[7] = inst_39555);
(statearr_39592[8] = inst_39554);
return statearr_39592;
})();var statearr_39593_39621 = state_39590__$1;(statearr_39593_39621[2] = null);
(statearr_39593_39621[1] = 2);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39591 === 2))
{var state_39590__$1 = state_39590;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39590__$1,4,ch);
} else
{if((state_val_39591 === 3))
{var inst_39588 = (state_39590[2]);var state_39590__$1 = state_39590;return cljs.core.async.impl.ioc_helpers.return_chan(state_39590__$1,inst_39588);
} else
{if((state_val_39591 === 4))
{var inst_39558 = (state_39590[9]);var inst_39558__$1 = (state_39590[2]);var inst_39559 = (inst_39558__$1 == null);var inst_39560 = cljs.core.not(inst_39559);var state_39590__$1 = (function (){var statearr_39594 = state_39590;(statearr_39594[9] = inst_39558__$1);
return statearr_39594;
})();if(inst_39560)
{var statearr_39595_39622 = state_39590__$1;(statearr_39595_39622[1] = 5);
} else
{var statearr_39596_39623 = state_39590__$1;(statearr_39596_39623[1] = 6);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_39591 === 5))
{var inst_39555 = (state_39590[7]);var inst_39554 = (state_39590[8]);var inst_39563 = (state_39590[10]);var inst_39558 = (state_39590[9]);var inst_39562 = (inst_39554[inst_39555] = inst_39558);var inst_39563__$1 = (inst_39555 + 1);var inst_39564 = (inst_39563__$1 < n);var state_39590__$1 = (function (){var statearr_39597 = state_39590;(statearr_39597[10] = inst_39563__$1);
(statearr_39597[11] = inst_39562);
return statearr_39597;
})();if(cljs.core.truth_(inst_39564))
{var statearr_39598_39624 = state_39590__$1;(statearr_39598_39624[1] = 8);
} else
{var statearr_39599_39625 = state_39590__$1;(statearr_39599_39625[1] = 9);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_39591 === 6))
{var inst_39555 = (state_39590[7]);var inst_39576 = (inst_39555 > 0);var state_39590__$1 = state_39590;if(cljs.core.truth_(inst_39576))
{var statearr_39601_39626 = state_39590__$1;(statearr_39601_39626[1] = 12);
} else
{var statearr_39602_39627 = state_39590__$1;(statearr_39602_39627[1] = 13);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_39591 === 7))
{var inst_39586 = (state_39590[2]);var state_39590__$1 = state_39590;var statearr_39603_39628 = state_39590__$1;(statearr_39603_39628[2] = inst_39586);
(statearr_39603_39628[1] = 3);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39591 === 8))
{var inst_39554 = (state_39590[8]);var inst_39563 = (state_39590[10]);var tmp39600 = inst_39554;var inst_39554__$1 = tmp39600;var inst_39555 = inst_39563;var state_39590__$1 = (function (){var statearr_39604 = state_39590;(statearr_39604[7] = inst_39555);
(statearr_39604[8] = inst_39554__$1);
return statearr_39604;
})();var statearr_39605_39629 = state_39590__$1;(statearr_39605_39629[2] = null);
(statearr_39605_39629[1] = 2);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39591 === 9))
{var inst_39554 = (state_39590[8]);var inst_39568 = cljs.core.vec(inst_39554);var state_39590__$1 = state_39590;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39590__$1,11,out,inst_39568);
} else
{if((state_val_39591 === 10))
{var inst_39574 = (state_39590[2]);var state_39590__$1 = state_39590;var statearr_39606_39630 = state_39590__$1;(statearr_39606_39630[2] = inst_39574);
(statearr_39606_39630[1] = 7);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39591 === 11))
{var inst_39570 = (state_39590[2]);var inst_39571 = (new Array(n));var inst_39554 = inst_39571;var inst_39555 = 0;var state_39590__$1 = (function (){var statearr_39607 = state_39590;(statearr_39607[7] = inst_39555);
(statearr_39607[8] = inst_39554);
(statearr_39607[12] = inst_39570);
return statearr_39607;
})();var statearr_39608_39631 = state_39590__$1;(statearr_39608_39631[2] = null);
(statearr_39608_39631[1] = 2);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39591 === 12))
{var inst_39554 = (state_39590[8]);var inst_39578 = cljs.core.vec(inst_39554);var state_39590__$1 = state_39590;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39590__$1,15,out,inst_39578);
} else
{if((state_val_39591 === 13))
{var state_39590__$1 = state_39590;var statearr_39609_39632 = state_39590__$1;(statearr_39609_39632[2] = null);
(statearr_39609_39632[1] = 14);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39591 === 14))
{var inst_39583 = (state_39590[2]);var inst_39584 = cljs.core.async.close_BANG_(out);var state_39590__$1 = (function (){var statearr_39610 = state_39590;(statearr_39610[13] = inst_39583);
return statearr_39610;
})();var statearr_39611_39633 = state_39590__$1;(statearr_39611_39633[2] = inst_39584);
(statearr_39611_39633[1] = 7);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39591 === 15))
{var inst_39580 = (state_39590[2]);var state_39590__$1 = state_39590;var statearr_39612_39634 = state_39590__$1;(statearr_39612_39634[2] = inst_39580);
(statearr_39612_39634[1] = 14);
return cljs.core.constant$keyword$171;
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
var state_machine__5898__auto____0 = (function (){var statearr_39616 = (new Array(14));(statearr_39616[0] = state_machine__5898__auto__);
(statearr_39616[1] = 1);
return statearr_39616;
});
var state_machine__5898__auto____1 = (function (state_39590){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_39590);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$171))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e39617){if((e39617 instanceof Object))
{var ex__5901__auto__ = e39617;var statearr_39618_39635 = state_39590;(statearr_39618_39635[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39590);
return cljs.core.constant$keyword$171;
} else
{if(cljs.core.constant$keyword$126)
{throw e39617;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$171))
{{
var G__39636 = state_39590;
state_39590 = G__39636;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_39590){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_39590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_39619 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_39619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto___39620);
return statearr_39619;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5967__auto___39779 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_39749){var state_val_39750 = (state_39749[1]);if((state_val_39750 === 1))
{var inst_39708 = (new Array(0));var inst_39709 = inst_39708;var inst_39710 = cljs.core.constant$keyword$183;var state_39749__$1 = (function (){var statearr_39751 = state_39749;(statearr_39751[7] = inst_39709);
(statearr_39751[8] = inst_39710);
return statearr_39751;
})();var statearr_39752_39780 = state_39749__$1;(statearr_39752_39780[2] = null);
(statearr_39752_39780[1] = 2);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39750 === 2))
{var state_39749__$1 = state_39749;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39749__$1,4,ch);
} else
{if((state_val_39750 === 3))
{var inst_39747 = (state_39749[2]);var state_39749__$1 = state_39749;return cljs.core.async.impl.ioc_helpers.return_chan(state_39749__$1,inst_39747);
} else
{if((state_val_39750 === 4))
{var inst_39713 = (state_39749[9]);var inst_39713__$1 = (state_39749[2]);var inst_39714 = (inst_39713__$1 == null);var inst_39715 = cljs.core.not(inst_39714);var state_39749__$1 = (function (){var statearr_39753 = state_39749;(statearr_39753[9] = inst_39713__$1);
return statearr_39753;
})();if(inst_39715)
{var statearr_39754_39781 = state_39749__$1;(statearr_39754_39781[1] = 5);
} else
{var statearr_39755_39782 = state_39749__$1;(statearr_39755_39782[1] = 6);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_39750 === 5))
{var inst_39710 = (state_39749[8]);var inst_39717 = (state_39749[10]);var inst_39713 = (state_39749[9]);var inst_39717__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39713) : f.call(null,inst_39713));var inst_39718 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39717__$1,inst_39710);var inst_39719 = cljs.core.keyword_identical_QMARK_(inst_39710,cljs.core.constant$keyword$183);var inst_39720 = (inst_39718) || (inst_39719);var state_39749__$1 = (function (){var statearr_39756 = state_39749;(statearr_39756[10] = inst_39717__$1);
return statearr_39756;
})();if(cljs.core.truth_(inst_39720))
{var statearr_39757_39783 = state_39749__$1;(statearr_39757_39783[1] = 8);
} else
{var statearr_39758_39784 = state_39749__$1;(statearr_39758_39784[1] = 9);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_39750 === 6))
{var inst_39709 = (state_39749[7]);var inst_39734 = inst_39709.length;var inst_39735 = (inst_39734 > 0);var state_39749__$1 = state_39749;if(cljs.core.truth_(inst_39735))
{var statearr_39760_39785 = state_39749__$1;(statearr_39760_39785[1] = 12);
} else
{var statearr_39761_39786 = state_39749__$1;(statearr_39761_39786[1] = 13);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_39750 === 7))
{var inst_39745 = (state_39749[2]);var state_39749__$1 = state_39749;var statearr_39762_39787 = state_39749__$1;(statearr_39762_39787[2] = inst_39745);
(statearr_39762_39787[1] = 3);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39750 === 8))
{var inst_39709 = (state_39749[7]);var inst_39717 = (state_39749[10]);var inst_39713 = (state_39749[9]);var inst_39722 = inst_39709.push(inst_39713);var tmp39759 = inst_39709;var inst_39709__$1 = tmp39759;var inst_39710 = inst_39717;var state_39749__$1 = (function (){var statearr_39763 = state_39749;(statearr_39763[7] = inst_39709__$1);
(statearr_39763[8] = inst_39710);
(statearr_39763[11] = inst_39722);
return statearr_39763;
})();var statearr_39764_39788 = state_39749__$1;(statearr_39764_39788[2] = null);
(statearr_39764_39788[1] = 2);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39750 === 9))
{var inst_39709 = (state_39749[7]);var inst_39725 = cljs.core.vec(inst_39709);var state_39749__$1 = state_39749;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39749__$1,11,out,inst_39725);
} else
{if((state_val_39750 === 10))
{var inst_39732 = (state_39749[2]);var state_39749__$1 = state_39749;var statearr_39765_39789 = state_39749__$1;(statearr_39765_39789[2] = inst_39732);
(statearr_39765_39789[1] = 7);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39750 === 11))
{var inst_39717 = (state_39749[10]);var inst_39713 = (state_39749[9]);var inst_39727 = (state_39749[2]);var inst_39728 = (new Array(0));var inst_39729 = inst_39728.push(inst_39713);var inst_39709 = inst_39728;var inst_39710 = inst_39717;var state_39749__$1 = (function (){var statearr_39766 = state_39749;(statearr_39766[7] = inst_39709);
(statearr_39766[12] = inst_39727);
(statearr_39766[13] = inst_39729);
(statearr_39766[8] = inst_39710);
return statearr_39766;
})();var statearr_39767_39790 = state_39749__$1;(statearr_39767_39790[2] = null);
(statearr_39767_39790[1] = 2);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39750 === 12))
{var inst_39709 = (state_39749[7]);var inst_39737 = cljs.core.vec(inst_39709);var state_39749__$1 = state_39749;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39749__$1,15,out,inst_39737);
} else
{if((state_val_39750 === 13))
{var state_39749__$1 = state_39749;var statearr_39768_39791 = state_39749__$1;(statearr_39768_39791[2] = null);
(statearr_39768_39791[1] = 14);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39750 === 14))
{var inst_39742 = (state_39749[2]);var inst_39743 = cljs.core.async.close_BANG_(out);var state_39749__$1 = (function (){var statearr_39769 = state_39749;(statearr_39769[14] = inst_39742);
return statearr_39769;
})();var statearr_39770_39792 = state_39749__$1;(statearr_39770_39792[2] = inst_39743);
(statearr_39770_39792[1] = 7);
return cljs.core.constant$keyword$171;
} else
{if((state_val_39750 === 15))
{var inst_39739 = (state_39749[2]);var state_39749__$1 = state_39749;var statearr_39771_39793 = state_39749__$1;(statearr_39771_39793[2] = inst_39739);
(statearr_39771_39793[1] = 14);
return cljs.core.constant$keyword$171;
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
var state_machine__5898__auto____0 = (function (){var statearr_39775 = (new Array(15));(statearr_39775[0] = state_machine__5898__auto__);
(statearr_39775[1] = 1);
return statearr_39775;
});
var state_machine__5898__auto____1 = (function (state_39749){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_39749);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$171))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e39776){if((e39776 instanceof Object))
{var ex__5901__auto__ = e39776;var statearr_39777_39794 = state_39749;(statearr_39777_39794[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_39749);
return cljs.core.constant$keyword$171;
} else
{if(cljs.core.constant$keyword$126)
{throw e39776;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$171))
{{
var G__39795 = state_39749;
state_39749 = G__39795;
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
})();var state__5969__auto__ = (function (){var statearr_39778 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_39778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto___39779);
return statearr_39778;
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
