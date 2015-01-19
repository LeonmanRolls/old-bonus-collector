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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t17260 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17260 = (function (f,fn_handler,meta17261){
this.f = f;
this.fn_handler = fn_handler;
this.meta17261 = meta17261;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17260.cljs$lang$type = true;
cljs.core.async.t17260.cljs$lang$ctorStr = "cljs.core.async/t17260";
cljs.core.async.t17260.cljs$lang$ctorPrWriter = (function (this__8017__auto__,writer__8018__auto__,opt__8019__auto__){return cljs.core._write.call(null,writer__8018__auto__,"cljs.core.async/t17260");
});
cljs.core.async.t17260.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17260.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t17260.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t17260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17262){var self__ = this;
var _17262__$1 = this;return self__.meta17261;
});
cljs.core.async.t17260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17262,meta17261__$1){var self__ = this;
var _17262__$1 = this;return (new cljs.core.async.t17260(self__.f,self__.fn_handler,meta17261__$1));
});
cljs.core.async.__GT_t17260 = (function __GT_t17260(f__$1,fn_handler__$1,meta17261){return (new cljs.core.async.t17260(f__$1,fn_handler__$1,meta17261));
});
}
return (new cljs.core.async.t17260(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__17264 = buff;if(G__17264)
{var bit__8099__auto__ = null;if(cljs.core.truth_((function (){var or__7478__auto__ = bit__8099__auto__;if(cljs.core.truth_(or__7478__auto__))
{return or__7478__auto__;
} else
{return G__17264.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__17264.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17264);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17264);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
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
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
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
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_17265 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_17265);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_17265);
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
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
var put_BANG___2 = (function (port,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4090__auto__))
{var ret = temp__4090__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4090__auto__))
{var retb = temp__4090__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,ret);
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
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8296__auto___17266 = n;var x_17267 = 0;while(true){
if((x_17267 < n__8296__auto___17266))
{(a[x_17267] = 0);
{
var G__17268 = (x_17267 + 1);
x_17267 = G__17268;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__17269 = (i + 1);
i = G__17269;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t17273 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17273 = (function (flag,alt_flag,meta17274){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta17274 = meta17274;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17273.cljs$lang$type = true;
cljs.core.async.t17273.cljs$lang$ctorStr = "cljs.core.async/t17273";
cljs.core.async.t17273.cljs$lang$ctorPrWriter = (function (this__8017__auto__,writer__8018__auto__,opt__8019__auto__){return cljs.core._write.call(null,writer__8018__auto__,"cljs.core.async/t17273");
});
cljs.core.async.t17273.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17273.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t17273.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t17273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17275){var self__ = this;
var _17275__$1 = this;return self__.meta17274;
});
cljs.core.async.t17273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17275,meta17274__$1){var self__ = this;
var _17275__$1 = this;return (new cljs.core.async.t17273(self__.flag,self__.alt_flag,meta17274__$1));
});
cljs.core.async.__GT_t17273 = (function __GT_t17273(flag__$1,alt_flag__$1,meta17274){return (new cljs.core.async.t17273(flag__$1,alt_flag__$1,meta17274));
});
}
return (new cljs.core.async.t17273(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t17279 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17279 = (function (cb,flag,alt_handler,meta17280){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta17280 = meta17280;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17279.cljs$lang$type = true;
cljs.core.async.t17279.cljs$lang$ctorStr = "cljs.core.async/t17279";
cljs.core.async.t17279.cljs$lang$ctorPrWriter = (function (this__8017__auto__,writer__8018__auto__,opt__8019__auto__){return cljs.core._write.call(null,writer__8018__auto__,"cljs.core.async/t17279");
});
cljs.core.async.t17279.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17279.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t17279.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t17279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17281){var self__ = this;
var _17281__$1 = this;return self__.meta17280;
});
cljs.core.async.t17279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17281,meta17280__$1){var self__ = this;
var _17281__$1 = this;return (new cljs.core.async.t17279(self__.cb,self__.flag,self__.alt_handler,meta17280__$1));
});
cljs.core.async.__GT_t17279 = (function __GT_t17279(cb__$1,flag__$1,alt_handler__$1,meta17280){return (new cljs.core.async.t17279(cb__$1,flag__$1,alt_handler__$1,meta17280));
});
}
return (new cljs.core.async.t17279(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17282_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17282_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17283_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17283_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7478__auto__ = wport;if(cljs.core.truth_(or__7478__auto__))
{return or__7478__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__17284 = (i + 1);
i = G__17284;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7478__auto__ = ret;if(cljs.core.truth_(or__7478__auto__))
{return or__7478__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__7466__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7466__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7466__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
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
var alts_BANG___delegate = function (ports,p__17285){var map__17287 = p__17285;var map__17287__$1 = ((cljs.core.seq_QMARK_.call(null,map__17287))?cljs.core.apply.call(null,cljs.core.hash_map,map__17287):map__17287);var opts = map__17287__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__17285 = null;if (arguments.length > 1) {
  p__17285 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__17285);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__17288){
var ports = cljs.core.first(arglist__17288);
var p__17285 = cljs.core.rest(arglist__17288);
return alts_BANG___delegate(ports,p__17285);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t17296 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17296 = (function (ch,f,map_LT_,meta17297){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17297 = meta17297;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17296.cljs$lang$type = true;
cljs.core.async.t17296.cljs$lang$ctorStr = "cljs.core.async/t17296";
cljs.core.async.t17296.cljs$lang$ctorPrWriter = (function (this__8017__auto__,writer__8018__auto__,opt__8019__auto__){return cljs.core._write.call(null,writer__8018__auto__,"cljs.core.async/t17296");
});
cljs.core.async.t17296.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17296.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t17296.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17296.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t17299 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17299 = (function (fn1,_,meta17297,ch,f,map_LT_,meta17300){
this.fn1 = fn1;
this._ = _;
this.meta17297 = meta17297;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta17300 = meta17300;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17299.cljs$lang$type = true;
cljs.core.async.t17299.cljs$lang$ctorStr = "cljs.core.async/t17299";
cljs.core.async.t17299.cljs$lang$ctorPrWriter = (function (this__8017__auto__,writer__8018__auto__,opt__8019__auto__){return cljs.core._write.call(null,writer__8018__auto__,"cljs.core.async/t17299");
});
cljs.core.async.t17299.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t17299.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t17299.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t17299.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__17289_SHARP_){return f1.call(null,(((p1__17289_SHARP_ == null))?null:self__.f.call(null,p1__17289_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t17299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17301){var self__ = this;
var _17301__$1 = this;return self__.meta17300;
});
cljs.core.async.t17299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17301,meta17300__$1){var self__ = this;
var _17301__$1 = this;return (new cljs.core.async.t17299(self__.fn1,self__._,self__.meta17297,self__.ch,self__.f,self__.map_LT_,meta17300__$1));
});
cljs.core.async.__GT_t17299 = (function __GT_t17299(fn1__$1,___$2,meta17297__$1,ch__$2,f__$2,map_LT___$2,meta17300){return (new cljs.core.async.t17299(fn1__$1,___$2,meta17297__$1,ch__$2,f__$2,map_LT___$2,meta17300));
});
}
return (new cljs.core.async.t17299(fn1,___$1,self__.meta17297,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7466__auto__ = ret;if(cljs.core.truth_(and__7466__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7466__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t17296.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17296.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17296.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t17296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17298){var self__ = this;
var _17298__$1 = this;return self__.meta17297;
});
cljs.core.async.t17296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17298,meta17297__$1){var self__ = this;
var _17298__$1 = this;return (new cljs.core.async.t17296(self__.ch,self__.f,self__.map_LT_,meta17297__$1));
});
cljs.core.async.__GT_t17296 = (function __GT_t17296(ch__$1,f__$1,map_LT___$1,meta17297){return (new cljs.core.async.t17296(ch__$1,f__$1,map_LT___$1,meta17297));
});
}
return (new cljs.core.async.t17296(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t17305 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17305 = (function (ch,f,map_GT_,meta17306){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta17306 = meta17306;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17305.cljs$lang$type = true;
cljs.core.async.t17305.cljs$lang$ctorStr = "cljs.core.async/t17305";
cljs.core.async.t17305.cljs$lang$ctorPrWriter = (function (this__8017__auto__,writer__8018__auto__,opt__8019__auto__){return cljs.core._write.call(null,writer__8018__auto__,"cljs.core.async/t17305");
});
cljs.core.async.t17305.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17305.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t17305.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17305.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t17305.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17305.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17307){var self__ = this;
var _17307__$1 = this;return self__.meta17306;
});
cljs.core.async.t17305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17307,meta17306__$1){var self__ = this;
var _17307__$1 = this;return (new cljs.core.async.t17305(self__.ch,self__.f,self__.map_GT_,meta17306__$1));
});
cljs.core.async.__GT_t17305 = (function __GT_t17305(ch__$1,f__$1,map_GT___$1,meta17306){return (new cljs.core.async.t17305(ch__$1,f__$1,map_GT___$1,meta17306));
});
}
return (new cljs.core.async.t17305(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t17311 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17311 = (function (ch,p,filter_GT_,meta17312){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta17312 = meta17312;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17311.cljs$lang$type = true;
cljs.core.async.t17311.cljs$lang$ctorStr = "cljs.core.async/t17311";
cljs.core.async.t17311.cljs$lang$ctorPrWriter = (function (this__8017__auto__,writer__8018__auto__,opt__8019__auto__){return cljs.core._write.call(null,writer__8018__auto__,"cljs.core.async/t17311");
});
cljs.core.async.t17311.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t17311.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t17311.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t17311.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t17311.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t17311.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t17311.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t17311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17313){var self__ = this;
var _17313__$1 = this;return self__.meta17312;
});
cljs.core.async.t17311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17313,meta17312__$1){var self__ = this;
var _17313__$1 = this;return (new cljs.core.async.t17311(self__.ch,self__.p,self__.filter_GT_,meta17312__$1));
});
cljs.core.async.__GT_t17311 = (function __GT_t17311(ch__$1,p__$1,filter_GT___$1,meta17312){return (new cljs.core.async.t17311(ch__$1,p__$1,filter_GT___$1,meta17312));
});
}
return (new cljs.core.async.t17311(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
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
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10585__auto___17396 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10586__auto__ = (function (){var switch__10515__auto__ = (function (state_17375){var state_val_17376 = (state_17375[1]);if((state_val_17376 === 1))
{var state_17375__$1 = state_17375;var statearr_17377_17397 = state_17375__$1;(statearr_17377_17397[2] = null);
(statearr_17377_17397[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17376 === 2))
{var state_17375__$1 = state_17375;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17375__$1,4,ch);
} else
{if((state_val_17376 === 3))
{var inst_17373 = (state_17375[2]);var state_17375__$1 = state_17375;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17375__$1,inst_17373);
} else
{if((state_val_17376 === 4))
{var inst_17357 = (state_17375[7]);var inst_17357__$1 = (state_17375[2]);var inst_17358 = (inst_17357__$1 == null);var state_17375__$1 = (function (){var statearr_17378 = state_17375;(statearr_17378[7] = inst_17357__$1);
return statearr_17378;
})();if(cljs.core.truth_(inst_17358))
{var statearr_17379_17398 = state_17375__$1;(statearr_17379_17398[1] = 5);
} else
{var statearr_17380_17399 = state_17375__$1;(statearr_17380_17399[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17376 === 5))
{var inst_17360 = cljs.core.async.close_BANG_.call(null,out);var state_17375__$1 = state_17375;var statearr_17381_17400 = state_17375__$1;(statearr_17381_17400[2] = inst_17360);
(statearr_17381_17400[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17376 === 6))
{var inst_17357 = (state_17375[7]);var inst_17362 = p.call(null,inst_17357);var state_17375__$1 = state_17375;if(cljs.core.truth_(inst_17362))
{var statearr_17382_17401 = state_17375__$1;(statearr_17382_17401[1] = 8);
} else
{var statearr_17383_17402 = state_17375__$1;(statearr_17383_17402[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17376 === 7))
{var inst_17371 = (state_17375[2]);var state_17375__$1 = state_17375;var statearr_17384_17403 = state_17375__$1;(statearr_17384_17403[2] = inst_17371);
(statearr_17384_17403[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17376 === 8))
{var inst_17357 = (state_17375[7]);var state_17375__$1 = state_17375;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17375__$1,11,out,inst_17357);
} else
{if((state_val_17376 === 9))
{var state_17375__$1 = state_17375;var statearr_17385_17404 = state_17375__$1;(statearr_17385_17404[2] = null);
(statearr_17385_17404[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17376 === 10))
{var inst_17368 = (state_17375[2]);var state_17375__$1 = (function (){var statearr_17386 = state_17375;(statearr_17386[8] = inst_17368);
return statearr_17386;
})();var statearr_17387_17405 = state_17375__$1;(statearr_17387_17405[2] = null);
(statearr_17387_17405[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17376 === 11))
{var inst_17365 = (state_17375[2]);var state_17375__$1 = state_17375;var statearr_17388_17406 = state_17375__$1;(statearr_17388_17406[2] = inst_17365);
(statearr_17388_17406[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__10515__auto__){
return (function() {
var state_machine__10516__auto__ = null;
var state_machine__10516__auto____0 = (function (){var statearr_17392 = (new Array(9));(statearr_17392[0] = state_machine__10516__auto__);
(statearr_17392[1] = 1);
return statearr_17392;
});
var state_machine__10516__auto____1 = (function (state_17375){while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_17375);if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10518__auto__;
}
break;
}
}catch (e17393){if((e17393 instanceof Object))
{var ex__10519__auto__ = e17393;var statearr_17394_17407 = state_17375;(statearr_17394_17407[5] = ex__10519__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17375);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17393;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17408 = state_17375;
state_17375 = G__17408;
continue;
}
} else
{return ret_value__10517__auto__;
}
break;
}
});
state_machine__10516__auto__ = function(state_17375){
switch(arguments.length){
case 0:
return state_machine__10516__auto____0.call(this);
case 1:
return state_machine__10516__auto____1.call(this,state_17375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10516__auto____0;
state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10516__auto____1;
return state_machine__10516__auto__;
})()
;})(switch__10515__auto__))
})();var state__10587__auto__ = (function (){var statearr_17395 = f__10586__auto__.call(null);(statearr_17395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10585__auto___17396);
return statearr_17395;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10587__auto__);
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
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10585__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10586__auto__ = (function (){var switch__10515__auto__ = (function (state_17574){var state_val_17575 = (state_17574[1]);if((state_val_17575 === 1))
{var state_17574__$1 = state_17574;var statearr_17576_17617 = state_17574__$1;(statearr_17576_17617[2] = null);
(statearr_17576_17617[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17575 === 2))
{var state_17574__$1 = state_17574;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17574__$1,4,in$);
} else
{if((state_val_17575 === 3))
{var inst_17572 = (state_17574[2]);var state_17574__$1 = state_17574;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17574__$1,inst_17572);
} else
{if((state_val_17575 === 4))
{var inst_17515 = (state_17574[7]);var inst_17515__$1 = (state_17574[2]);var inst_17516 = (inst_17515__$1 == null);var state_17574__$1 = (function (){var statearr_17577 = state_17574;(statearr_17577[7] = inst_17515__$1);
return statearr_17577;
})();if(cljs.core.truth_(inst_17516))
{var statearr_17578_17618 = state_17574__$1;(statearr_17578_17618[1] = 5);
} else
{var statearr_17579_17619 = state_17574__$1;(statearr_17579_17619[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17575 === 5))
{var inst_17518 = cljs.core.async.close_BANG_.call(null,out);var state_17574__$1 = state_17574;var statearr_17580_17620 = state_17574__$1;(statearr_17580_17620[2] = inst_17518);
(statearr_17580_17620[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17575 === 6))
{var inst_17515 = (state_17574[7]);var inst_17524 = f.call(null,inst_17515);var inst_17525 = cljs.core.seq.call(null,inst_17524);var inst_17526 = inst_17525;var inst_17527 = null;var inst_17528 = 0;var inst_17529 = 0;var state_17574__$1 = (function (){var statearr_17581 = state_17574;(statearr_17581[8] = inst_17527);
(statearr_17581[9] = inst_17526);
(statearr_17581[10] = inst_17528);
(statearr_17581[11] = inst_17529);
return statearr_17581;
})();var statearr_17582_17621 = state_17574__$1;(statearr_17582_17621[2] = null);
(statearr_17582_17621[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17575 === 7))
{var inst_17570 = (state_17574[2]);var state_17574__$1 = state_17574;var statearr_17583_17622 = state_17574__$1;(statearr_17583_17622[2] = inst_17570);
(statearr_17583_17622[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17575 === 8))
{var inst_17528 = (state_17574[10]);var inst_17529 = (state_17574[11]);var inst_17531 = (inst_17529 < inst_17528);var inst_17532 = inst_17531;var state_17574__$1 = state_17574;if(cljs.core.truth_(inst_17532))
{var statearr_17584_17623 = state_17574__$1;(statearr_17584_17623[1] = 10);
} else
{var statearr_17585_17624 = state_17574__$1;(statearr_17585_17624[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17575 === 9))
{var inst_17562 = (state_17574[2]);var inst_17563 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_17574__$1 = (function (){var statearr_17586 = state_17574;(statearr_17586[12] = inst_17562);
return statearr_17586;
})();if(cljs.core.truth_(inst_17563))
{var statearr_17587_17625 = state_17574__$1;(statearr_17587_17625[1] = 21);
} else
{var statearr_17588_17626 = state_17574__$1;(statearr_17588_17626[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17575 === 10))
{var inst_17527 = (state_17574[8]);var inst_17529 = (state_17574[11]);var inst_17534 = cljs.core._nth.call(null,inst_17527,inst_17529);var state_17574__$1 = state_17574;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17574__$1,13,out,inst_17534);
} else
{if((state_val_17575 === 11))
{var inst_17526 = (state_17574[9]);var inst_17540 = (state_17574[13]);var inst_17540__$1 = cljs.core.seq.call(null,inst_17526);var state_17574__$1 = (function (){var statearr_17592 = state_17574;(statearr_17592[13] = inst_17540__$1);
return statearr_17592;
})();if(inst_17540__$1)
{var statearr_17593_17627 = state_17574__$1;(statearr_17593_17627[1] = 14);
} else
{var statearr_17594_17628 = state_17574__$1;(statearr_17594_17628[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17575 === 12))
{var inst_17560 = (state_17574[2]);var state_17574__$1 = state_17574;var statearr_17595_17629 = state_17574__$1;(statearr_17595_17629[2] = inst_17560);
(statearr_17595_17629[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17575 === 13))
{var inst_17527 = (state_17574[8]);var inst_17526 = (state_17574[9]);var inst_17528 = (state_17574[10]);var inst_17529 = (state_17574[11]);var inst_17536 = (state_17574[2]);var inst_17537 = (inst_17529 + 1);var tmp17589 = inst_17527;var tmp17590 = inst_17526;var tmp17591 = inst_17528;var inst_17526__$1 = tmp17590;var inst_17527__$1 = tmp17589;var inst_17528__$1 = tmp17591;var inst_17529__$1 = inst_17537;var state_17574__$1 = (function (){var statearr_17596 = state_17574;(statearr_17596[8] = inst_17527__$1);
(statearr_17596[9] = inst_17526__$1);
(statearr_17596[10] = inst_17528__$1);
(statearr_17596[11] = inst_17529__$1);
(statearr_17596[14] = inst_17536);
return statearr_17596;
})();var statearr_17597_17630 = state_17574__$1;(statearr_17597_17630[2] = null);
(statearr_17597_17630[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17575 === 14))
{var inst_17540 = (state_17574[13]);var inst_17542 = cljs.core.chunked_seq_QMARK_.call(null,inst_17540);var state_17574__$1 = state_17574;if(inst_17542)
{var statearr_17598_17631 = state_17574__$1;(statearr_17598_17631[1] = 17);
} else
{var statearr_17599_17632 = state_17574__$1;(statearr_17599_17632[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17575 === 15))
{var state_17574__$1 = state_17574;var statearr_17600_17633 = state_17574__$1;(statearr_17600_17633[2] = null);
(statearr_17600_17633[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17575 === 16))
{var inst_17558 = (state_17574[2]);var state_17574__$1 = state_17574;var statearr_17601_17634 = state_17574__$1;(statearr_17601_17634[2] = inst_17558);
(statearr_17601_17634[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17575 === 17))
{var inst_17540 = (state_17574[13]);var inst_17544 = cljs.core.chunk_first.call(null,inst_17540);var inst_17545 = cljs.core.chunk_rest.call(null,inst_17540);var inst_17546 = cljs.core.count.call(null,inst_17544);var inst_17526 = inst_17545;var inst_17527 = inst_17544;var inst_17528 = inst_17546;var inst_17529 = 0;var state_17574__$1 = (function (){var statearr_17602 = state_17574;(statearr_17602[8] = inst_17527);
(statearr_17602[9] = inst_17526);
(statearr_17602[10] = inst_17528);
(statearr_17602[11] = inst_17529);
return statearr_17602;
})();var statearr_17603_17635 = state_17574__$1;(statearr_17603_17635[2] = null);
(statearr_17603_17635[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17575 === 18))
{var inst_17540 = (state_17574[13]);var inst_17549 = cljs.core.first.call(null,inst_17540);var state_17574__$1 = state_17574;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17574__$1,20,out,inst_17549);
} else
{if((state_val_17575 === 19))
{var inst_17555 = (state_17574[2]);var state_17574__$1 = state_17574;var statearr_17604_17636 = state_17574__$1;(statearr_17604_17636[2] = inst_17555);
(statearr_17604_17636[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17575 === 20))
{var inst_17540 = (state_17574[13]);var inst_17551 = (state_17574[2]);var inst_17552 = cljs.core.next.call(null,inst_17540);var inst_17526 = inst_17552;var inst_17527 = null;var inst_17528 = 0;var inst_17529 = 0;var state_17574__$1 = (function (){var statearr_17605 = state_17574;(statearr_17605[8] = inst_17527);
(statearr_17605[9] = inst_17526);
(statearr_17605[15] = inst_17551);
(statearr_17605[10] = inst_17528);
(statearr_17605[11] = inst_17529);
return statearr_17605;
})();var statearr_17606_17637 = state_17574__$1;(statearr_17606_17637[2] = null);
(statearr_17606_17637[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17575 === 21))
{var state_17574__$1 = state_17574;var statearr_17607_17638 = state_17574__$1;(statearr_17607_17638[2] = null);
(statearr_17607_17638[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17575 === 22))
{var state_17574__$1 = state_17574;var statearr_17608_17639 = state_17574__$1;(statearr_17608_17639[2] = null);
(statearr_17608_17639[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17575 === 23))
{var inst_17568 = (state_17574[2]);var state_17574__$1 = state_17574;var statearr_17609_17640 = state_17574__$1;(statearr_17609_17640[2] = inst_17568);
(statearr_17609_17640[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__10515__auto__){
return (function() {
var state_machine__10516__auto__ = null;
var state_machine__10516__auto____0 = (function (){var statearr_17613 = (new Array(16));(statearr_17613[0] = state_machine__10516__auto__);
(statearr_17613[1] = 1);
return statearr_17613;
});
var state_machine__10516__auto____1 = (function (state_17574){while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_17574);if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10518__auto__;
}
break;
}
}catch (e17614){if((e17614 instanceof Object))
{var ex__10519__auto__ = e17614;var statearr_17615_17641 = state_17574;(statearr_17615_17641[5] = ex__10519__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17574);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17614;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17642 = state_17574;
state_17574 = G__17642;
continue;
}
} else
{return ret_value__10517__auto__;
}
break;
}
});
state_machine__10516__auto__ = function(state_17574){
switch(arguments.length){
case 0:
return state_machine__10516__auto____0.call(this);
case 1:
return state_machine__10516__auto____1.call(this,state_17574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10516__auto____0;
state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10516__auto____1;
return state_machine__10516__auto__;
})()
;})(switch__10515__auto__))
})();var state__10587__auto__ = (function (){var statearr_17616 = f__10586__auto__.call(null);(statearr_17616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10585__auto__);
return statearr_17616;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10587__auto__);
}));
return c__10585__auto__;
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
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
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
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
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
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__10585__auto___17737 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10586__auto__ = (function (){var switch__10515__auto__ = (function (state_17713){var state_val_17714 = (state_17713[1]);if((state_val_17714 === 1))
{var state_17713__$1 = state_17713;var statearr_17715_17738 = state_17713__$1;(statearr_17715_17738[2] = null);
(statearr_17715_17738[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17714 === 2))
{var state_17713__$1 = state_17713;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17713__$1,4,from);
} else
{if((state_val_17714 === 3))
{var inst_17711 = (state_17713[2]);var state_17713__$1 = state_17713;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17713__$1,inst_17711);
} else
{if((state_val_17714 === 4))
{var inst_17692 = (state_17713[7]);var inst_17692__$1 = (state_17713[2]);var inst_17693 = (inst_17692__$1 == null);var state_17713__$1 = (function (){var statearr_17716 = state_17713;(statearr_17716[7] = inst_17692__$1);
return statearr_17716;
})();if(cljs.core.truth_(inst_17693))
{var statearr_17717_17739 = state_17713__$1;(statearr_17717_17739[1] = 5);
} else
{var statearr_17718_17740 = state_17713__$1;(statearr_17718_17740[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17714 === 5))
{var state_17713__$1 = state_17713;if(cljs.core.truth_(close_QMARK_))
{var statearr_17719_17741 = state_17713__$1;(statearr_17719_17741[1] = 8);
} else
{var statearr_17720_17742 = state_17713__$1;(statearr_17720_17742[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17714 === 6))
{var inst_17692 = (state_17713[7]);var state_17713__$1 = state_17713;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17713__$1,11,to,inst_17692);
} else
{if((state_val_17714 === 7))
{var inst_17709 = (state_17713[2]);var state_17713__$1 = state_17713;var statearr_17721_17743 = state_17713__$1;(statearr_17721_17743[2] = inst_17709);
(statearr_17721_17743[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17714 === 8))
{var inst_17696 = cljs.core.async.close_BANG_.call(null,to);var state_17713__$1 = state_17713;var statearr_17722_17744 = state_17713__$1;(statearr_17722_17744[2] = inst_17696);
(statearr_17722_17744[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17714 === 9))
{var state_17713__$1 = state_17713;var statearr_17723_17745 = state_17713__$1;(statearr_17723_17745[2] = null);
(statearr_17723_17745[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17714 === 10))
{var inst_17699 = (state_17713[2]);var state_17713__$1 = state_17713;var statearr_17724_17746 = state_17713__$1;(statearr_17724_17746[2] = inst_17699);
(statearr_17724_17746[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17714 === 11))
{var inst_17702 = (state_17713[2]);var state_17713__$1 = state_17713;if(cljs.core.truth_(inst_17702))
{var statearr_17725_17747 = state_17713__$1;(statearr_17725_17747[1] = 12);
} else
{var statearr_17726_17748 = state_17713__$1;(statearr_17726_17748[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17714 === 12))
{var state_17713__$1 = state_17713;var statearr_17727_17749 = state_17713__$1;(statearr_17727_17749[2] = null);
(statearr_17727_17749[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17714 === 13))
{var state_17713__$1 = state_17713;var statearr_17728_17750 = state_17713__$1;(statearr_17728_17750[2] = null);
(statearr_17728_17750[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17714 === 14))
{var inst_17707 = (state_17713[2]);var state_17713__$1 = state_17713;var statearr_17729_17751 = state_17713__$1;(statearr_17729_17751[2] = inst_17707);
(statearr_17729_17751[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__10515__auto__){
return (function() {
var state_machine__10516__auto__ = null;
var state_machine__10516__auto____0 = (function (){var statearr_17733 = (new Array(8));(statearr_17733[0] = state_machine__10516__auto__);
(statearr_17733[1] = 1);
return statearr_17733;
});
var state_machine__10516__auto____1 = (function (state_17713){while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_17713);if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10518__auto__;
}
break;
}
}catch (e17734){if((e17734 instanceof Object))
{var ex__10519__auto__ = e17734;var statearr_17735_17752 = state_17713;(statearr_17735_17752[5] = ex__10519__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17713);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17734;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17753 = state_17713;
state_17713 = G__17753;
continue;
}
} else
{return ret_value__10517__auto__;
}
break;
}
});
state_machine__10516__auto__ = function(state_17713){
switch(arguments.length){
case 0:
return state_machine__10516__auto____0.call(this);
case 1:
return state_machine__10516__auto____1.call(this,state_17713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10516__auto____0;
state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10516__auto____1;
return state_machine__10516__auto__;
})()
;})(switch__10515__auto__))
})();var state__10587__auto__ = (function (){var statearr_17736 = f__10586__auto__.call(null);(statearr_17736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10585__auto___17737);
return statearr_17736;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10587__auto__);
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
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10585__auto___17854 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10586__auto__ = (function (){var switch__10515__auto__ = (function (state_17829){var state_val_17830 = (state_17829[1]);if((state_val_17830 === 1))
{var state_17829__$1 = state_17829;var statearr_17831_17855 = state_17829__$1;(statearr_17831_17855[2] = null);
(statearr_17831_17855[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17830 === 2))
{var state_17829__$1 = state_17829;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17829__$1,4,ch);
} else
{if((state_val_17830 === 3))
{var inst_17827 = (state_17829[2]);var state_17829__$1 = state_17829;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17829__$1,inst_17827);
} else
{if((state_val_17830 === 4))
{var inst_17806 = (state_17829[7]);var inst_17806__$1 = (state_17829[2]);var inst_17807 = (inst_17806__$1 == null);var state_17829__$1 = (function (){var statearr_17832 = state_17829;(statearr_17832[7] = inst_17806__$1);
return statearr_17832;
})();if(cljs.core.truth_(inst_17807))
{var statearr_17833_17856 = state_17829__$1;(statearr_17833_17856[1] = 5);
} else
{var statearr_17834_17857 = state_17829__$1;(statearr_17834_17857[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17830 === 5))
{var inst_17809 = cljs.core.async.close_BANG_.call(null,tc);var inst_17810 = cljs.core.async.close_BANG_.call(null,fc);var state_17829__$1 = (function (){var statearr_17835 = state_17829;(statearr_17835[8] = inst_17809);
return statearr_17835;
})();var statearr_17836_17858 = state_17829__$1;(statearr_17836_17858[2] = inst_17810);
(statearr_17836_17858[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17830 === 6))
{var inst_17806 = (state_17829[7]);var inst_17812 = p.call(null,inst_17806);var state_17829__$1 = state_17829;if(cljs.core.truth_(inst_17812))
{var statearr_17837_17859 = state_17829__$1;(statearr_17837_17859[1] = 9);
} else
{var statearr_17838_17860 = state_17829__$1;(statearr_17838_17860[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17830 === 7))
{var inst_17825 = (state_17829[2]);var state_17829__$1 = state_17829;var statearr_17839_17861 = state_17829__$1;(statearr_17839_17861[2] = inst_17825);
(statearr_17839_17861[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17830 === 8))
{var inst_17818 = (state_17829[2]);var state_17829__$1 = state_17829;if(cljs.core.truth_(inst_17818))
{var statearr_17840_17862 = state_17829__$1;(statearr_17840_17862[1] = 12);
} else
{var statearr_17841_17863 = state_17829__$1;(statearr_17841_17863[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17830 === 9))
{var state_17829__$1 = state_17829;var statearr_17842_17864 = state_17829__$1;(statearr_17842_17864[2] = tc);
(statearr_17842_17864[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17830 === 10))
{var state_17829__$1 = state_17829;var statearr_17843_17865 = state_17829__$1;(statearr_17843_17865[2] = fc);
(statearr_17843_17865[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17830 === 11))
{var inst_17806 = (state_17829[7]);var inst_17816 = (state_17829[2]);var state_17829__$1 = state_17829;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17829__$1,8,inst_17816,inst_17806);
} else
{if((state_val_17830 === 12))
{var state_17829__$1 = state_17829;var statearr_17844_17866 = state_17829__$1;(statearr_17844_17866[2] = null);
(statearr_17844_17866[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17830 === 13))
{var state_17829__$1 = state_17829;var statearr_17845_17867 = state_17829__$1;(statearr_17845_17867[2] = null);
(statearr_17845_17867[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17830 === 14))
{var inst_17823 = (state_17829[2]);var state_17829__$1 = state_17829;var statearr_17846_17868 = state_17829__$1;(statearr_17846_17868[2] = inst_17823);
(statearr_17846_17868[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__10515__auto__){
return (function() {
var state_machine__10516__auto__ = null;
var state_machine__10516__auto____0 = (function (){var statearr_17850 = (new Array(9));(statearr_17850[0] = state_machine__10516__auto__);
(statearr_17850[1] = 1);
return statearr_17850;
});
var state_machine__10516__auto____1 = (function (state_17829){while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_17829);if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10518__auto__;
}
break;
}
}catch (e17851){if((e17851 instanceof Object))
{var ex__10519__auto__ = e17851;var statearr_17852_17869 = state_17829;(statearr_17852_17869[5] = ex__10519__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17829);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17851;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17870 = state_17829;
state_17829 = G__17870;
continue;
}
} else
{return ret_value__10517__auto__;
}
break;
}
});
state_machine__10516__auto__ = function(state_17829){
switch(arguments.length){
case 0:
return state_machine__10516__auto____0.call(this);
case 1:
return state_machine__10516__auto____1.call(this,state_17829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10516__auto____0;
state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10516__auto____1;
return state_machine__10516__auto__;
})()
;})(switch__10515__auto__))
})();var state__10587__auto__ = (function (){var statearr_17853 = f__10586__auto__.call(null);(statearr_17853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10585__auto___17854);
return statearr_17853;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10587__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10585__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10586__auto__ = (function (){var switch__10515__auto__ = (function (state_17917){var state_val_17918 = (state_17917[1]);if((state_val_17918 === 7))
{var inst_17913 = (state_17917[2]);var state_17917__$1 = state_17917;var statearr_17919_17935 = state_17917__$1;(statearr_17919_17935[2] = inst_17913);
(statearr_17919_17935[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17918 === 6))
{var inst_17903 = (state_17917[7]);var inst_17906 = (state_17917[8]);var inst_17910 = f.call(null,inst_17903,inst_17906);var inst_17903__$1 = inst_17910;var state_17917__$1 = (function (){var statearr_17920 = state_17917;(statearr_17920[7] = inst_17903__$1);
return statearr_17920;
})();var statearr_17921_17936 = state_17917__$1;(statearr_17921_17936[2] = null);
(statearr_17921_17936[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17918 === 5))
{var inst_17903 = (state_17917[7]);var state_17917__$1 = state_17917;var statearr_17922_17937 = state_17917__$1;(statearr_17922_17937[2] = inst_17903);
(statearr_17922_17937[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17918 === 4))
{var inst_17906 = (state_17917[8]);var inst_17906__$1 = (state_17917[2]);var inst_17907 = (inst_17906__$1 == null);var state_17917__$1 = (function (){var statearr_17923 = state_17917;(statearr_17923[8] = inst_17906__$1);
return statearr_17923;
})();if(cljs.core.truth_(inst_17907))
{var statearr_17924_17938 = state_17917__$1;(statearr_17924_17938[1] = 5);
} else
{var statearr_17925_17939 = state_17917__$1;(statearr_17925_17939[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17918 === 3))
{var inst_17915 = (state_17917[2]);var state_17917__$1 = state_17917;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17917__$1,inst_17915);
} else
{if((state_val_17918 === 2))
{var state_17917__$1 = state_17917;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17917__$1,4,ch);
} else
{if((state_val_17918 === 1))
{var inst_17903 = init;var state_17917__$1 = (function (){var statearr_17926 = state_17917;(statearr_17926[7] = inst_17903);
return statearr_17926;
})();var statearr_17927_17940 = state_17917__$1;(statearr_17927_17940[2] = null);
(statearr_17927_17940[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__10515__auto__){
return (function() {
var state_machine__10516__auto__ = null;
var state_machine__10516__auto____0 = (function (){var statearr_17931 = (new Array(9));(statearr_17931[0] = state_machine__10516__auto__);
(statearr_17931[1] = 1);
return statearr_17931;
});
var state_machine__10516__auto____1 = (function (state_17917){while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_17917);if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10518__auto__;
}
break;
}
}catch (e17932){if((e17932 instanceof Object))
{var ex__10519__auto__ = e17932;var statearr_17933_17941 = state_17917;(statearr_17933_17941[5] = ex__10519__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17917);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17932;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17942 = state_17917;
state_17917 = G__17942;
continue;
}
} else
{return ret_value__10517__auto__;
}
break;
}
});
state_machine__10516__auto__ = function(state_17917){
switch(arguments.length){
case 0:
return state_machine__10516__auto____0.call(this);
case 1:
return state_machine__10516__auto____1.call(this,state_17917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10516__auto____0;
state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10516__auto____1;
return state_machine__10516__auto__;
})()
;})(switch__10515__auto__))
})();var state__10587__auto__ = (function (){var statearr_17934 = f__10586__auto__.call(null);(statearr_17934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10585__auto__);
return statearr_17934;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10587__auto__);
}));
return c__10585__auto__;
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
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10585__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10586__auto__ = (function (){var switch__10515__auto__ = (function (state_18016){var state_val_18017 = (state_18016[1]);if((state_val_18017 === 1))
{var inst_17992 = cljs.core.seq.call(null,coll);var inst_17993 = inst_17992;var state_18016__$1 = (function (){var statearr_18018 = state_18016;(statearr_18018[7] = inst_17993);
return statearr_18018;
})();var statearr_18019_18041 = state_18016__$1;(statearr_18019_18041[2] = null);
(statearr_18019_18041[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18017 === 2))
{var inst_17993 = (state_18016[7]);var state_18016__$1 = state_18016;if(cljs.core.truth_(inst_17993))
{var statearr_18020_18042 = state_18016__$1;(statearr_18020_18042[1] = 4);
} else
{var statearr_18021_18043 = state_18016__$1;(statearr_18021_18043[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18017 === 3))
{var inst_18014 = (state_18016[2]);var state_18016__$1 = state_18016;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18016__$1,inst_18014);
} else
{if((state_val_18017 === 4))
{var inst_17993 = (state_18016[7]);var inst_17996 = cljs.core.first.call(null,inst_17993);var state_18016__$1 = state_18016;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18016__$1,7,ch,inst_17996);
} else
{if((state_val_18017 === 5))
{var inst_17993 = (state_18016[7]);var state_18016__$1 = state_18016;var statearr_18022_18044 = state_18016__$1;(statearr_18022_18044[2] = inst_17993);
(statearr_18022_18044[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18017 === 6))
{var inst_18001 = (state_18016[2]);var state_18016__$1 = state_18016;if(cljs.core.truth_(inst_18001))
{var statearr_18023_18045 = state_18016__$1;(statearr_18023_18045[1] = 8);
} else
{var statearr_18024_18046 = state_18016__$1;(statearr_18024_18046[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18017 === 7))
{var inst_17998 = (state_18016[2]);var state_18016__$1 = state_18016;var statearr_18025_18047 = state_18016__$1;(statearr_18025_18047[2] = inst_17998);
(statearr_18025_18047[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18017 === 8))
{var inst_17993 = (state_18016[7]);var inst_18003 = cljs.core.next.call(null,inst_17993);var inst_17993__$1 = inst_18003;var state_18016__$1 = (function (){var statearr_18026 = state_18016;(statearr_18026[7] = inst_17993__$1);
return statearr_18026;
})();var statearr_18027_18048 = state_18016__$1;(statearr_18027_18048[2] = null);
(statearr_18027_18048[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18017 === 9))
{var state_18016__$1 = state_18016;if(cljs.core.truth_(close_QMARK_))
{var statearr_18028_18049 = state_18016__$1;(statearr_18028_18049[1] = 11);
} else
{var statearr_18029_18050 = state_18016__$1;(statearr_18029_18050[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18017 === 10))
{var inst_18012 = (state_18016[2]);var state_18016__$1 = state_18016;var statearr_18030_18051 = state_18016__$1;(statearr_18030_18051[2] = inst_18012);
(statearr_18030_18051[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18017 === 11))
{var inst_18007 = cljs.core.async.close_BANG_.call(null,ch);var state_18016__$1 = state_18016;var statearr_18031_18052 = state_18016__$1;(statearr_18031_18052[2] = inst_18007);
(statearr_18031_18052[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18017 === 12))
{var state_18016__$1 = state_18016;var statearr_18032_18053 = state_18016__$1;(statearr_18032_18053[2] = null);
(statearr_18032_18053[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18017 === 13))
{var inst_18010 = (state_18016[2]);var state_18016__$1 = state_18016;var statearr_18033_18054 = state_18016__$1;(statearr_18033_18054[2] = inst_18010);
(statearr_18033_18054[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__10515__auto__){
return (function() {
var state_machine__10516__auto__ = null;
var state_machine__10516__auto____0 = (function (){var statearr_18037 = (new Array(8));(statearr_18037[0] = state_machine__10516__auto__);
(statearr_18037[1] = 1);
return statearr_18037;
});
var state_machine__10516__auto____1 = (function (state_18016){while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_18016);if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10518__auto__;
}
break;
}
}catch (e18038){if((e18038 instanceof Object))
{var ex__10519__auto__ = e18038;var statearr_18039_18055 = state_18016;(statearr_18039_18055[5] = ex__10519__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18016);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18038;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18056 = state_18016;
state_18016 = G__18056;
continue;
}
} else
{return ret_value__10517__auto__;
}
break;
}
});
state_machine__10516__auto__ = function(state_18016){
switch(arguments.length){
case 0:
return state_machine__10516__auto____0.call(this);
case 1:
return state_machine__10516__auto____1.call(this,state_18016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10516__auto____0;
state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10516__auto____1;
return state_machine__10516__auto__;
})()
;})(switch__10515__auto__))
})();var state__10587__auto__ = (function (){var statearr_18040 = f__10586__auto__.call(null);(statearr_18040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10585__auto__);
return statearr_18040;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10587__auto__);
}));
return c__10585__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj18058 = {};return obj18058;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7466__auto__ = _;if(and__7466__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7466__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8076__auto__ = (((_ == null))?null:_);return (function (){var or__7478__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8076__auto__)]);if(or__7478__auto__)
{return or__7478__auto__;
} else
{var or__7478__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7478__auto____$1)
{return or__7478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj18060 = {};return obj18060;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7466__auto__ = m;if(and__7466__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7466__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8076__auto__ = (((m == null))?null:m);return (function (){var or__7478__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8076__auto__)]);if(or__7478__auto__)
{return or__7478__auto__;
} else
{var or__7478__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7478__auto____$1)
{return or__7478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7466__auto__ = m;if(and__7466__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7466__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8076__auto__ = (((m == null))?null:m);return (function (){var or__7478__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8076__auto__)]);if(or__7478__auto__)
{return or__7478__auto__;
} else
{var or__7478__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7478__auto____$1)
{return or__7478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7466__auto__ = m;if(and__7466__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7466__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8076__auto__ = (((m == null))?null:m);return (function (){var or__7478__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8076__auto__)]);if(or__7478__auto__)
{return or__7478__auto__;
} else
{var or__7478__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7478__auto____$1)
{return or__7478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t18282 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18282 = (function (cs,ch,mult,meta18283){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta18283 = meta18283;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18282.cljs$lang$type = true;
cljs.core.async.t18282.cljs$lang$ctorStr = "cljs.core.async/t18282";
cljs.core.async.t18282.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8017__auto__,writer__8018__auto__,opt__8019__auto__){return cljs.core._write.call(null,writer__8018__auto__,"cljs.core.async/t18282");
});})(cs))
;
cljs.core.async.t18282.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t18282.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t18282.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t18282.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t18282.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18282.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t18282.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18284){var self__ = this;
var _18284__$1 = this;return self__.meta18283;
});})(cs))
;
cljs.core.async.t18282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18284,meta18283__$1){var self__ = this;
var _18284__$1 = this;return (new cljs.core.async.t18282(self__.cs,self__.ch,self__.mult,meta18283__$1));
});})(cs))
;
cljs.core.async.__GT_t18282 = ((function (cs){
return (function __GT_t18282(cs__$1,ch__$1,mult__$1,meta18283){return (new cljs.core.async.t18282(cs__$1,ch__$1,mult__$1,meta18283));
});})(cs))
;
}
return (new cljs.core.async.t18282(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10585__auto___18503 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10586__auto__ = (function (){var switch__10515__auto__ = (function (state_18415){var state_val_18416 = (state_18415[1]);if((state_val_18416 === 32))
{var inst_18358 = (state_18415[7]);var inst_18356 = (state_18415[8]);var inst_18357 = (state_18415[9]);var inst_18355 = (state_18415[10]);var inst_18370 = (state_18415[2]);var inst_18371 = (inst_18358 + 1);var tmp18417 = inst_18356;var tmp18418 = inst_18357;var tmp18419 = inst_18355;var inst_18355__$1 = tmp18419;var inst_18356__$1 = tmp18417;var inst_18357__$1 = tmp18418;var inst_18358__$1 = inst_18371;var state_18415__$1 = (function (){var statearr_18420 = state_18415;(statearr_18420[11] = inst_18370);
(statearr_18420[7] = inst_18358__$1);
(statearr_18420[8] = inst_18356__$1);
(statearr_18420[9] = inst_18357__$1);
(statearr_18420[10] = inst_18355__$1);
return statearr_18420;
})();var statearr_18421_18504 = state_18415__$1;(statearr_18421_18504[2] = null);
(statearr_18421_18504[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 1))
{var state_18415__$1 = state_18415;var statearr_18422_18505 = state_18415__$1;(statearr_18422_18505[2] = null);
(statearr_18422_18505[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 33))
{var inst_18374 = (state_18415[12]);var inst_18376 = cljs.core.chunked_seq_QMARK_.call(null,inst_18374);var state_18415__$1 = state_18415;if(inst_18376)
{var statearr_18423_18506 = state_18415__$1;(statearr_18423_18506[1] = 36);
} else
{var statearr_18424_18507 = state_18415__$1;(statearr_18424_18507[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 2))
{var state_18415__$1 = state_18415;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18415__$1,4,ch);
} else
{if((state_val_18416 === 34))
{var state_18415__$1 = state_18415;var statearr_18425_18508 = state_18415__$1;(statearr_18425_18508[2] = null);
(statearr_18425_18508[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 3))
{var inst_18413 = (state_18415[2]);var state_18415__$1 = state_18415;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18415__$1,inst_18413);
} else
{if((state_val_18416 === 35))
{var inst_18397 = (state_18415[2]);var state_18415__$1 = state_18415;var statearr_18426_18509 = state_18415__$1;(statearr_18426_18509[2] = inst_18397);
(statearr_18426_18509[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 4))
{var inst_18287 = (state_18415[13]);var inst_18287__$1 = (state_18415[2]);var inst_18288 = (inst_18287__$1 == null);var state_18415__$1 = (function (){var statearr_18427 = state_18415;(statearr_18427[13] = inst_18287__$1);
return statearr_18427;
})();if(cljs.core.truth_(inst_18288))
{var statearr_18428_18510 = state_18415__$1;(statearr_18428_18510[1] = 5);
} else
{var statearr_18429_18511 = state_18415__$1;(statearr_18429_18511[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 36))
{var inst_18374 = (state_18415[12]);var inst_18378 = cljs.core.chunk_first.call(null,inst_18374);var inst_18379 = cljs.core.chunk_rest.call(null,inst_18374);var inst_18380 = cljs.core.count.call(null,inst_18378);var inst_18355 = inst_18379;var inst_18356 = inst_18378;var inst_18357 = inst_18380;var inst_18358 = 0;var state_18415__$1 = (function (){var statearr_18430 = state_18415;(statearr_18430[7] = inst_18358);
(statearr_18430[8] = inst_18356);
(statearr_18430[9] = inst_18357);
(statearr_18430[10] = inst_18355);
return statearr_18430;
})();var statearr_18431_18512 = state_18415__$1;(statearr_18431_18512[2] = null);
(statearr_18431_18512[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 5))
{var inst_18294 = cljs.core.deref.call(null,cs);var inst_18295 = cljs.core.seq.call(null,inst_18294);var inst_18296 = inst_18295;var inst_18297 = null;var inst_18298 = 0;var inst_18299 = 0;var state_18415__$1 = (function (){var statearr_18432 = state_18415;(statearr_18432[14] = inst_18298);
(statearr_18432[15] = inst_18297);
(statearr_18432[16] = inst_18299);
(statearr_18432[17] = inst_18296);
return statearr_18432;
})();var statearr_18433_18513 = state_18415__$1;(statearr_18433_18513[2] = null);
(statearr_18433_18513[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 37))
{var inst_18287 = (state_18415[13]);var inst_18383 = (state_18415[18]);var inst_18374 = (state_18415[12]);var inst_18383__$1 = cljs.core.first.call(null,inst_18374);var inst_18384 = cljs.core.async.put_BANG_.call(null,inst_18383__$1,inst_18287,done);var state_18415__$1 = (function (){var statearr_18434 = state_18415;(statearr_18434[18] = inst_18383__$1);
return statearr_18434;
})();if(cljs.core.truth_(inst_18384))
{var statearr_18435_18514 = state_18415__$1;(statearr_18435_18514[1] = 39);
} else
{var statearr_18436_18515 = state_18415__$1;(statearr_18436_18515[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 6))
{var inst_18347 = (state_18415[19]);var inst_18346 = cljs.core.deref.call(null,cs);var inst_18347__$1 = cljs.core.keys.call(null,inst_18346);var inst_18348 = cljs.core.count.call(null,inst_18347__$1);var inst_18349 = cljs.core.reset_BANG_.call(null,dctr,inst_18348);var inst_18354 = cljs.core.seq.call(null,inst_18347__$1);var inst_18355 = inst_18354;var inst_18356 = null;var inst_18357 = 0;var inst_18358 = 0;var state_18415__$1 = (function (){var statearr_18437 = state_18415;(statearr_18437[19] = inst_18347__$1);
(statearr_18437[7] = inst_18358);
(statearr_18437[8] = inst_18356);
(statearr_18437[9] = inst_18357);
(statearr_18437[10] = inst_18355);
(statearr_18437[20] = inst_18349);
return statearr_18437;
})();var statearr_18438_18516 = state_18415__$1;(statearr_18438_18516[2] = null);
(statearr_18438_18516[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 38))
{var inst_18394 = (state_18415[2]);var state_18415__$1 = state_18415;var statearr_18439_18517 = state_18415__$1;(statearr_18439_18517[2] = inst_18394);
(statearr_18439_18517[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 7))
{var inst_18411 = (state_18415[2]);var state_18415__$1 = state_18415;var statearr_18440_18518 = state_18415__$1;(statearr_18440_18518[2] = inst_18411);
(statearr_18440_18518[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 39))
{var state_18415__$1 = state_18415;var statearr_18441_18519 = state_18415__$1;(statearr_18441_18519[2] = null);
(statearr_18441_18519[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 8))
{var inst_18298 = (state_18415[14]);var inst_18299 = (state_18415[16]);var inst_18301 = (inst_18299 < inst_18298);var inst_18302 = inst_18301;var state_18415__$1 = state_18415;if(cljs.core.truth_(inst_18302))
{var statearr_18442_18520 = state_18415__$1;(statearr_18442_18520[1] = 10);
} else
{var statearr_18443_18521 = state_18415__$1;(statearr_18443_18521[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 40))
{var inst_18383 = (state_18415[18]);var inst_18387 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_18388 = cljs.core.async.untap_STAR_.call(null,m,inst_18383);var state_18415__$1 = (function (){var statearr_18444 = state_18415;(statearr_18444[21] = inst_18387);
return statearr_18444;
})();var statearr_18445_18522 = state_18415__$1;(statearr_18445_18522[2] = inst_18388);
(statearr_18445_18522[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 9))
{var inst_18344 = (state_18415[2]);var state_18415__$1 = state_18415;var statearr_18446_18523 = state_18415__$1;(statearr_18446_18523[2] = inst_18344);
(statearr_18446_18523[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 41))
{var inst_18374 = (state_18415[12]);var inst_18390 = (state_18415[2]);var inst_18391 = cljs.core.next.call(null,inst_18374);var inst_18355 = inst_18391;var inst_18356 = null;var inst_18357 = 0;var inst_18358 = 0;var state_18415__$1 = (function (){var statearr_18447 = state_18415;(statearr_18447[22] = inst_18390);
(statearr_18447[7] = inst_18358);
(statearr_18447[8] = inst_18356);
(statearr_18447[9] = inst_18357);
(statearr_18447[10] = inst_18355);
return statearr_18447;
})();var statearr_18448_18524 = state_18415__$1;(statearr_18448_18524[2] = null);
(statearr_18448_18524[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 10))
{var inst_18297 = (state_18415[15]);var inst_18299 = (state_18415[16]);var inst_18305 = cljs.core._nth.call(null,inst_18297,inst_18299);var inst_18306 = cljs.core.nth.call(null,inst_18305,0,null);var inst_18307 = cljs.core.nth.call(null,inst_18305,1,null);var state_18415__$1 = (function (){var statearr_18449 = state_18415;(statearr_18449[23] = inst_18306);
return statearr_18449;
})();if(cljs.core.truth_(inst_18307))
{var statearr_18450_18525 = state_18415__$1;(statearr_18450_18525[1] = 13);
} else
{var statearr_18451_18526 = state_18415__$1;(statearr_18451_18526[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 42))
{var state_18415__$1 = state_18415;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18415__$1,45,dchan);
} else
{if((state_val_18416 === 11))
{var inst_18296 = (state_18415[17]);var inst_18316 = (state_18415[24]);var inst_18316__$1 = cljs.core.seq.call(null,inst_18296);var state_18415__$1 = (function (){var statearr_18452 = state_18415;(statearr_18452[24] = inst_18316__$1);
return statearr_18452;
})();if(inst_18316__$1)
{var statearr_18453_18527 = state_18415__$1;(statearr_18453_18527[1] = 16);
} else
{var statearr_18454_18528 = state_18415__$1;(statearr_18454_18528[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 43))
{var state_18415__$1 = state_18415;var statearr_18455_18529 = state_18415__$1;(statearr_18455_18529[2] = null);
(statearr_18455_18529[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 12))
{var inst_18342 = (state_18415[2]);var state_18415__$1 = state_18415;var statearr_18456_18530 = state_18415__$1;(statearr_18456_18530[2] = inst_18342);
(statearr_18456_18530[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 44))
{var inst_18408 = (state_18415[2]);var state_18415__$1 = (function (){var statearr_18457 = state_18415;(statearr_18457[25] = inst_18408);
return statearr_18457;
})();var statearr_18458_18531 = state_18415__$1;(statearr_18458_18531[2] = null);
(statearr_18458_18531[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 13))
{var inst_18306 = (state_18415[23]);var inst_18309 = cljs.core.async.close_BANG_.call(null,inst_18306);var state_18415__$1 = state_18415;var statearr_18459_18532 = state_18415__$1;(statearr_18459_18532[2] = inst_18309);
(statearr_18459_18532[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 45))
{var inst_18405 = (state_18415[2]);var state_18415__$1 = state_18415;var statearr_18463_18533 = state_18415__$1;(statearr_18463_18533[2] = inst_18405);
(statearr_18463_18533[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 14))
{var state_18415__$1 = state_18415;var statearr_18464_18534 = state_18415__$1;(statearr_18464_18534[2] = null);
(statearr_18464_18534[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 15))
{var inst_18298 = (state_18415[14]);var inst_18297 = (state_18415[15]);var inst_18299 = (state_18415[16]);var inst_18296 = (state_18415[17]);var inst_18312 = (state_18415[2]);var inst_18313 = (inst_18299 + 1);var tmp18460 = inst_18298;var tmp18461 = inst_18297;var tmp18462 = inst_18296;var inst_18296__$1 = tmp18462;var inst_18297__$1 = tmp18461;var inst_18298__$1 = tmp18460;var inst_18299__$1 = inst_18313;var state_18415__$1 = (function (){var statearr_18465 = state_18415;(statearr_18465[14] = inst_18298__$1);
(statearr_18465[15] = inst_18297__$1);
(statearr_18465[16] = inst_18299__$1);
(statearr_18465[17] = inst_18296__$1);
(statearr_18465[26] = inst_18312);
return statearr_18465;
})();var statearr_18466_18535 = state_18415__$1;(statearr_18466_18535[2] = null);
(statearr_18466_18535[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 16))
{var inst_18316 = (state_18415[24]);var inst_18318 = cljs.core.chunked_seq_QMARK_.call(null,inst_18316);var state_18415__$1 = state_18415;if(inst_18318)
{var statearr_18467_18536 = state_18415__$1;(statearr_18467_18536[1] = 19);
} else
{var statearr_18468_18537 = state_18415__$1;(statearr_18468_18537[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 17))
{var state_18415__$1 = state_18415;var statearr_18469_18538 = state_18415__$1;(statearr_18469_18538[2] = null);
(statearr_18469_18538[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 18))
{var inst_18340 = (state_18415[2]);var state_18415__$1 = state_18415;var statearr_18470_18539 = state_18415__$1;(statearr_18470_18539[2] = inst_18340);
(statearr_18470_18539[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 19))
{var inst_18316 = (state_18415[24]);var inst_18320 = cljs.core.chunk_first.call(null,inst_18316);var inst_18321 = cljs.core.chunk_rest.call(null,inst_18316);var inst_18322 = cljs.core.count.call(null,inst_18320);var inst_18296 = inst_18321;var inst_18297 = inst_18320;var inst_18298 = inst_18322;var inst_18299 = 0;var state_18415__$1 = (function (){var statearr_18471 = state_18415;(statearr_18471[14] = inst_18298);
(statearr_18471[15] = inst_18297);
(statearr_18471[16] = inst_18299);
(statearr_18471[17] = inst_18296);
return statearr_18471;
})();var statearr_18472_18540 = state_18415__$1;(statearr_18472_18540[2] = null);
(statearr_18472_18540[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 20))
{var inst_18316 = (state_18415[24]);var inst_18326 = cljs.core.first.call(null,inst_18316);var inst_18327 = cljs.core.nth.call(null,inst_18326,0,null);var inst_18328 = cljs.core.nth.call(null,inst_18326,1,null);var state_18415__$1 = (function (){var statearr_18473 = state_18415;(statearr_18473[27] = inst_18327);
return statearr_18473;
})();if(cljs.core.truth_(inst_18328))
{var statearr_18474_18541 = state_18415__$1;(statearr_18474_18541[1] = 22);
} else
{var statearr_18475_18542 = state_18415__$1;(statearr_18475_18542[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 21))
{var inst_18337 = (state_18415[2]);var state_18415__$1 = state_18415;var statearr_18476_18543 = state_18415__$1;(statearr_18476_18543[2] = inst_18337);
(statearr_18476_18543[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 22))
{var inst_18327 = (state_18415[27]);var inst_18330 = cljs.core.async.close_BANG_.call(null,inst_18327);var state_18415__$1 = state_18415;var statearr_18477_18544 = state_18415__$1;(statearr_18477_18544[2] = inst_18330);
(statearr_18477_18544[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 23))
{var state_18415__$1 = state_18415;var statearr_18478_18545 = state_18415__$1;(statearr_18478_18545[2] = null);
(statearr_18478_18545[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 24))
{var inst_18316 = (state_18415[24]);var inst_18333 = (state_18415[2]);var inst_18334 = cljs.core.next.call(null,inst_18316);var inst_18296 = inst_18334;var inst_18297 = null;var inst_18298 = 0;var inst_18299 = 0;var state_18415__$1 = (function (){var statearr_18479 = state_18415;(statearr_18479[14] = inst_18298);
(statearr_18479[15] = inst_18297);
(statearr_18479[28] = inst_18333);
(statearr_18479[16] = inst_18299);
(statearr_18479[17] = inst_18296);
return statearr_18479;
})();var statearr_18480_18546 = state_18415__$1;(statearr_18480_18546[2] = null);
(statearr_18480_18546[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 25))
{var inst_18358 = (state_18415[7]);var inst_18357 = (state_18415[9]);var inst_18360 = (inst_18358 < inst_18357);var inst_18361 = inst_18360;var state_18415__$1 = state_18415;if(cljs.core.truth_(inst_18361))
{var statearr_18481_18547 = state_18415__$1;(statearr_18481_18547[1] = 27);
} else
{var statearr_18482_18548 = state_18415__$1;(statearr_18482_18548[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 26))
{var inst_18347 = (state_18415[19]);var inst_18401 = (state_18415[2]);var inst_18402 = cljs.core.seq.call(null,inst_18347);var state_18415__$1 = (function (){var statearr_18483 = state_18415;(statearr_18483[29] = inst_18401);
return statearr_18483;
})();if(inst_18402)
{var statearr_18484_18549 = state_18415__$1;(statearr_18484_18549[1] = 42);
} else
{var statearr_18485_18550 = state_18415__$1;(statearr_18485_18550[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 27))
{var inst_18287 = (state_18415[13]);var inst_18363 = (state_18415[30]);var inst_18358 = (state_18415[7]);var inst_18356 = (state_18415[8]);var inst_18363__$1 = cljs.core._nth.call(null,inst_18356,inst_18358);var inst_18364 = cljs.core.async.put_BANG_.call(null,inst_18363__$1,inst_18287,done);var state_18415__$1 = (function (){var statearr_18486 = state_18415;(statearr_18486[30] = inst_18363__$1);
return statearr_18486;
})();if(cljs.core.truth_(inst_18364))
{var statearr_18487_18551 = state_18415__$1;(statearr_18487_18551[1] = 30);
} else
{var statearr_18488_18552 = state_18415__$1;(statearr_18488_18552[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 28))
{var inst_18374 = (state_18415[12]);var inst_18355 = (state_18415[10]);var inst_18374__$1 = cljs.core.seq.call(null,inst_18355);var state_18415__$1 = (function (){var statearr_18489 = state_18415;(statearr_18489[12] = inst_18374__$1);
return statearr_18489;
})();if(inst_18374__$1)
{var statearr_18490_18553 = state_18415__$1;(statearr_18490_18553[1] = 33);
} else
{var statearr_18491_18554 = state_18415__$1;(statearr_18491_18554[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 29))
{var inst_18399 = (state_18415[2]);var state_18415__$1 = state_18415;var statearr_18492_18555 = state_18415__$1;(statearr_18492_18555[2] = inst_18399);
(statearr_18492_18555[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 30))
{var state_18415__$1 = state_18415;var statearr_18493_18556 = state_18415__$1;(statearr_18493_18556[2] = null);
(statearr_18493_18556[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18416 === 31))
{var inst_18363 = (state_18415[30]);var inst_18367 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_18368 = cljs.core.async.untap_STAR_.call(null,m,inst_18363);var state_18415__$1 = (function (){var statearr_18494 = state_18415;(statearr_18494[31] = inst_18367);
return statearr_18494;
})();var statearr_18495_18557 = state_18415__$1;(statearr_18495_18557[2] = inst_18368);
(statearr_18495_18557[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__10515__auto__){
return (function() {
var state_machine__10516__auto__ = null;
var state_machine__10516__auto____0 = (function (){var statearr_18499 = (new Array(32));(statearr_18499[0] = state_machine__10516__auto__);
(statearr_18499[1] = 1);
return statearr_18499;
});
var state_machine__10516__auto____1 = (function (state_18415){while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_18415);if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10518__auto__;
}
break;
}
}catch (e18500){if((e18500 instanceof Object))
{var ex__10519__auto__ = e18500;var statearr_18501_18558 = state_18415;(statearr_18501_18558[5] = ex__10519__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18415);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18500;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18559 = state_18415;
state_18415 = G__18559;
continue;
}
} else
{return ret_value__10517__auto__;
}
break;
}
});
state_machine__10516__auto__ = function(state_18415){
switch(arguments.length){
case 0:
return state_machine__10516__auto____0.call(this);
case 1:
return state_machine__10516__auto____1.call(this,state_18415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10516__auto____0;
state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10516__auto____1;
return state_machine__10516__auto__;
})()
;})(switch__10515__auto__))
})();var state__10587__auto__ = (function (){var statearr_18502 = f__10586__auto__.call(null);(statearr_18502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10585__auto___18503);
return statearr_18502;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10587__auto__);
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
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
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
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj18561 = {};return obj18561;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7466__auto__ = m;if(and__7466__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7466__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8076__auto__ = (((m == null))?null:m);return (function (){var or__7478__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8076__auto__)]);if(or__7478__auto__)
{return or__7478__auto__;
} else
{var or__7478__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7478__auto____$1)
{return or__7478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7466__auto__ = m;if(and__7466__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7466__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8076__auto__ = (((m == null))?null:m);return (function (){var or__7478__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8076__auto__)]);if(or__7478__auto__)
{return or__7478__auto__;
} else
{var or__7478__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7478__auto____$1)
{return or__7478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7466__auto__ = m;if(and__7466__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7466__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8076__auto__ = (((m == null))?null:m);return (function (){var or__7478__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8076__auto__)]);if(or__7478__auto__)
{return or__7478__auto__;
} else
{var or__7478__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7478__auto____$1)
{return or__7478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7466__auto__ = m;if(and__7466__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7466__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8076__auto__ = (((m == null))?null:m);return (function (){var or__7478__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8076__auto__)]);if(or__7478__auto__)
{return or__7478__auto__;
} else
{var or__7478__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7478__auto____$1)
{return or__7478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7466__auto__ = m;if(and__7466__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7466__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8076__auto__ = (((m == null))?null:m);return (function (){var or__7478__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8076__auto__)]);if(or__7478__auto__)
{return or__7478__auto__;
} else
{var or__7478__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7478__auto____$1)
{return or__7478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t18681 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18681 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta18682){
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
this.meta18682 = meta18682;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18681.cljs$lang$type = true;
cljs.core.async.t18681.cljs$lang$ctorStr = "cljs.core.async/t18681";
cljs.core.async.t18681.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8017__auto__,writer__8018__auto__,opt__8019__auto__){return cljs.core._write.call(null,writer__8018__auto__,"cljs.core.async/t18681");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18681.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t18681.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18681.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18681.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18681.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18681.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18681.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18681.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18683){var self__ = this;
var _18683__$1 = this;return self__.meta18682;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18683,meta18682__$1){var self__ = this;
var _18683__$1 = this;return (new cljs.core.async.t18681(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta18682__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t18681 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t18681(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta18682){return (new cljs.core.async.t18681(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta18682));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t18681(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__10585__auto___18800 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10586__auto__ = (function (){var switch__10515__auto__ = (function (state_18753){var state_val_18754 = (state_18753[1]);if((state_val_18754 === 1))
{var inst_18687 = (state_18753[7]);var inst_18687__$1 = calc_state.call(null);var inst_18688 = cljs.core.seq_QMARK_.call(null,inst_18687__$1);var state_18753__$1 = (function (){var statearr_18755 = state_18753;(statearr_18755[7] = inst_18687__$1);
return statearr_18755;
})();if(inst_18688)
{var statearr_18756_18801 = state_18753__$1;(statearr_18756_18801[1] = 2);
} else
{var statearr_18757_18802 = state_18753__$1;(statearr_18757_18802[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18754 === 2))
{var inst_18687 = (state_18753[7]);var inst_18690 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18687);var state_18753__$1 = state_18753;var statearr_18758_18803 = state_18753__$1;(statearr_18758_18803[2] = inst_18690);
(statearr_18758_18803[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18754 === 3))
{var inst_18687 = (state_18753[7]);var state_18753__$1 = state_18753;var statearr_18759_18804 = state_18753__$1;(statearr_18759_18804[2] = inst_18687);
(statearr_18759_18804[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18754 === 4))
{var inst_18687 = (state_18753[7]);var inst_18693 = (state_18753[2]);var inst_18694 = cljs.core.get.call(null,inst_18693,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_18695 = cljs.core.get.call(null,inst_18693,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_18696 = cljs.core.get.call(null,inst_18693,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_18697 = inst_18687;var state_18753__$1 = (function (){var statearr_18760 = state_18753;(statearr_18760[8] = inst_18697);
(statearr_18760[9] = inst_18694);
(statearr_18760[10] = inst_18696);
(statearr_18760[11] = inst_18695);
return statearr_18760;
})();var statearr_18761_18805 = state_18753__$1;(statearr_18761_18805[2] = null);
(statearr_18761_18805[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18754 === 5))
{var inst_18697 = (state_18753[8]);var inst_18700 = cljs.core.seq_QMARK_.call(null,inst_18697);var state_18753__$1 = state_18753;if(inst_18700)
{var statearr_18762_18806 = state_18753__$1;(statearr_18762_18806[1] = 7);
} else
{var statearr_18763_18807 = state_18753__$1;(statearr_18763_18807[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18754 === 6))
{var inst_18751 = (state_18753[2]);var state_18753__$1 = state_18753;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18753__$1,inst_18751);
} else
{if((state_val_18754 === 7))
{var inst_18697 = (state_18753[8]);var inst_18702 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18697);var state_18753__$1 = state_18753;var statearr_18764_18808 = state_18753__$1;(statearr_18764_18808[2] = inst_18702);
(statearr_18764_18808[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18754 === 8))
{var inst_18697 = (state_18753[8]);var state_18753__$1 = state_18753;var statearr_18765_18809 = state_18753__$1;(statearr_18765_18809[2] = inst_18697);
(statearr_18765_18809[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18754 === 9))
{var inst_18705 = (state_18753[12]);var inst_18705__$1 = (state_18753[2]);var inst_18706 = cljs.core.get.call(null,inst_18705__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_18707 = cljs.core.get.call(null,inst_18705__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_18708 = cljs.core.get.call(null,inst_18705__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_18753__$1 = (function (){var statearr_18766 = state_18753;(statearr_18766[12] = inst_18705__$1);
(statearr_18766[13] = inst_18707);
(statearr_18766[14] = inst_18708);
return statearr_18766;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18753__$1,10,inst_18706);
} else
{if((state_val_18754 === 10))
{var inst_18713 = (state_18753[15]);var inst_18712 = (state_18753[16]);var inst_18711 = (state_18753[2]);var inst_18712__$1 = cljs.core.nth.call(null,inst_18711,0,null);var inst_18713__$1 = cljs.core.nth.call(null,inst_18711,1,null);var inst_18714 = (inst_18712__$1 == null);var inst_18715 = cljs.core._EQ_.call(null,inst_18713__$1,change);var inst_18716 = (inst_18714) || (inst_18715);var state_18753__$1 = (function (){var statearr_18767 = state_18753;(statearr_18767[15] = inst_18713__$1);
(statearr_18767[16] = inst_18712__$1);
return statearr_18767;
})();if(cljs.core.truth_(inst_18716))
{var statearr_18768_18810 = state_18753__$1;(statearr_18768_18810[1] = 11);
} else
{var statearr_18769_18811 = state_18753__$1;(statearr_18769_18811[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18754 === 11))
{var inst_18712 = (state_18753[16]);var inst_18718 = (inst_18712 == null);var state_18753__$1 = state_18753;if(cljs.core.truth_(inst_18718))
{var statearr_18770_18812 = state_18753__$1;(statearr_18770_18812[1] = 14);
} else
{var statearr_18771_18813 = state_18753__$1;(statearr_18771_18813[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18754 === 12))
{var inst_18727 = (state_18753[17]);var inst_18713 = (state_18753[15]);var inst_18708 = (state_18753[14]);var inst_18727__$1 = inst_18708.call(null,inst_18713);var state_18753__$1 = (function (){var statearr_18772 = state_18753;(statearr_18772[17] = inst_18727__$1);
return statearr_18772;
})();if(cljs.core.truth_(inst_18727__$1))
{var statearr_18773_18814 = state_18753__$1;(statearr_18773_18814[1] = 17);
} else
{var statearr_18774_18815 = state_18753__$1;(statearr_18774_18815[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18754 === 13))
{var inst_18749 = (state_18753[2]);var state_18753__$1 = state_18753;var statearr_18775_18816 = state_18753__$1;(statearr_18775_18816[2] = inst_18749);
(statearr_18775_18816[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18754 === 14))
{var inst_18713 = (state_18753[15]);var inst_18720 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18713);var state_18753__$1 = state_18753;var statearr_18776_18817 = state_18753__$1;(statearr_18776_18817[2] = inst_18720);
(statearr_18776_18817[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18754 === 15))
{var state_18753__$1 = state_18753;var statearr_18777_18818 = state_18753__$1;(statearr_18777_18818[2] = null);
(statearr_18777_18818[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18754 === 16))
{var inst_18723 = (state_18753[2]);var inst_18724 = calc_state.call(null);var inst_18697 = inst_18724;var state_18753__$1 = (function (){var statearr_18778 = state_18753;(statearr_18778[8] = inst_18697);
(statearr_18778[18] = inst_18723);
return statearr_18778;
})();var statearr_18779_18819 = state_18753__$1;(statearr_18779_18819[2] = null);
(statearr_18779_18819[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18754 === 17))
{var inst_18727 = (state_18753[17]);var state_18753__$1 = state_18753;var statearr_18780_18820 = state_18753__$1;(statearr_18780_18820[2] = inst_18727);
(statearr_18780_18820[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18754 === 18))
{var inst_18713 = (state_18753[15]);var inst_18707 = (state_18753[13]);var inst_18708 = (state_18753[14]);var inst_18730 = cljs.core.empty_QMARK_.call(null,inst_18708);var inst_18731 = inst_18707.call(null,inst_18713);var inst_18732 = cljs.core.not.call(null,inst_18731);var inst_18733 = (inst_18730) && (inst_18732);var state_18753__$1 = state_18753;var statearr_18781_18821 = state_18753__$1;(statearr_18781_18821[2] = inst_18733);
(statearr_18781_18821[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18754 === 19))
{var inst_18735 = (state_18753[2]);var state_18753__$1 = state_18753;if(cljs.core.truth_(inst_18735))
{var statearr_18782_18822 = state_18753__$1;(statearr_18782_18822[1] = 20);
} else
{var statearr_18783_18823 = state_18753__$1;(statearr_18783_18823[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18754 === 20))
{var inst_18712 = (state_18753[16]);var state_18753__$1 = state_18753;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18753__$1,23,out,inst_18712);
} else
{if((state_val_18754 === 21))
{var inst_18705 = (state_18753[12]);var inst_18697 = inst_18705;var state_18753__$1 = (function (){var statearr_18784 = state_18753;(statearr_18784[8] = inst_18697);
return statearr_18784;
})();var statearr_18785_18824 = state_18753__$1;(statearr_18785_18824[2] = null);
(statearr_18785_18824[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18754 === 22))
{var inst_18747 = (state_18753[2]);var state_18753__$1 = state_18753;var statearr_18786_18825 = state_18753__$1;(statearr_18786_18825[2] = inst_18747);
(statearr_18786_18825[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18754 === 23))
{var inst_18738 = (state_18753[2]);var state_18753__$1 = state_18753;if(cljs.core.truth_(inst_18738))
{var statearr_18787_18826 = state_18753__$1;(statearr_18787_18826[1] = 24);
} else
{var statearr_18788_18827 = state_18753__$1;(statearr_18788_18827[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18754 === 24))
{var inst_18705 = (state_18753[12]);var inst_18697 = inst_18705;var state_18753__$1 = (function (){var statearr_18789 = state_18753;(statearr_18789[8] = inst_18697);
return statearr_18789;
})();var statearr_18790_18828 = state_18753__$1;(statearr_18790_18828[2] = null);
(statearr_18790_18828[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18754 === 25))
{var state_18753__$1 = state_18753;var statearr_18791_18829 = state_18753__$1;(statearr_18791_18829[2] = null);
(statearr_18791_18829[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18754 === 26))
{var inst_18743 = (state_18753[2]);var state_18753__$1 = state_18753;var statearr_18792_18830 = state_18753__$1;(statearr_18792_18830[2] = inst_18743);
(statearr_18792_18830[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__10515__auto__){
return (function() {
var state_machine__10516__auto__ = null;
var state_machine__10516__auto____0 = (function (){var statearr_18796 = (new Array(19));(statearr_18796[0] = state_machine__10516__auto__);
(statearr_18796[1] = 1);
return statearr_18796;
});
var state_machine__10516__auto____1 = (function (state_18753){while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_18753);if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10518__auto__;
}
break;
}
}catch (e18797){if((e18797 instanceof Object))
{var ex__10519__auto__ = e18797;var statearr_18798_18831 = state_18753;(statearr_18798_18831[5] = ex__10519__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18753);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18797;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18832 = state_18753;
state_18753 = G__18832;
continue;
}
} else
{return ret_value__10517__auto__;
}
break;
}
});
state_machine__10516__auto__ = function(state_18753){
switch(arguments.length){
case 0:
return state_machine__10516__auto____0.call(this);
case 1:
return state_machine__10516__auto____1.call(this,state_18753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10516__auto____0;
state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10516__auto____1;
return state_machine__10516__auto__;
})()
;})(switch__10515__auto__))
})();var state__10587__auto__ = (function (){var statearr_18799 = f__10586__auto__.call(null);(statearr_18799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10585__auto___18800);
return statearr_18799;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10587__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj18834 = {};return obj18834;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7466__auto__ = p;if(and__7466__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7466__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8076__auto__ = (((p == null))?null:p);return (function (){var or__7478__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8076__auto__)]);if(or__7478__auto__)
{return or__7478__auto__;
} else
{var or__7478__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7478__auto____$1)
{return or__7478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7466__auto__ = p;if(and__7466__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7466__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8076__auto__ = (((p == null))?null:p);return (function (){var or__7478__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8076__auto__)]);if(or__7478__auto__)
{return or__7478__auto__;
} else
{var or__7478__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7478__auto____$1)
{return or__7478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7466__auto__ = p;if(and__7466__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7466__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8076__auto__ = (((p == null))?null:p);return (function (){var or__7478__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8076__auto__)]);if(or__7478__auto__)
{return or__7478__auto__;
} else
{var or__7478__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7478__auto____$1)
{return or__7478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7466__auto__ = p;if(and__7466__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7466__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8076__auto__ = (((p == null))?null:p);return (function (){var or__7478__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8076__auto__)]);if(or__7478__auto__)
{return or__7478__auto__;
} else
{var or__7478__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7478__auto____$1)
{return or__7478__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__7478__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7478__auto__))
{return or__7478__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7478__auto__,mults){
return (function (p1__18835_SHARP_){if(cljs.core.truth_(p1__18835_SHARP_.call(null,topic)))
{return p1__18835_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__18835_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7478__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t18950 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18950 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta18951){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta18951 = meta18951;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18950.cljs$lang$type = true;
cljs.core.async.t18950.cljs$lang$ctorStr = "cljs.core.async/t18950";
cljs.core.async.t18950.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8017__auto__,writer__8018__auto__,opt__8019__auto__){return cljs.core._write.call(null,writer__8018__auto__,"cljs.core.async/t18950");
});})(mults,ensure_mult))
;
cljs.core.async.t18950.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t18950.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t18950.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t18950.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t18950.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t18950.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18950.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t18950.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18952){var self__ = this;
var _18952__$1 = this;return self__.meta18951;
});})(mults,ensure_mult))
;
cljs.core.async.t18950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18952,meta18951__$1){var self__ = this;
var _18952__$1 = this;return (new cljs.core.async.t18950(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta18951__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t18950 = ((function (mults,ensure_mult){
return (function __GT_t18950(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18951){return (new cljs.core.async.t18950(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18951));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t18950(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10585__auto___19064 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10586__auto__ = (function (){var switch__10515__auto__ = (function (state_19020){var state_val_19021 = (state_19020[1]);if((state_val_19021 === 1))
{var state_19020__$1 = state_19020;var statearr_19022_19065 = state_19020__$1;(statearr_19022_19065[2] = null);
(statearr_19022_19065[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19021 === 2))
{var state_19020__$1 = state_19020;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19020__$1,4,ch);
} else
{if((state_val_19021 === 3))
{var inst_19018 = (state_19020[2]);var state_19020__$1 = state_19020;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19020__$1,inst_19018);
} else
{if((state_val_19021 === 4))
{var inst_18955 = (state_19020[7]);var inst_18955__$1 = (state_19020[2]);var inst_18956 = (inst_18955__$1 == null);var state_19020__$1 = (function (){var statearr_19023 = state_19020;(statearr_19023[7] = inst_18955__$1);
return statearr_19023;
})();if(cljs.core.truth_(inst_18956))
{var statearr_19024_19066 = state_19020__$1;(statearr_19024_19066[1] = 5);
} else
{var statearr_19025_19067 = state_19020__$1;(statearr_19025_19067[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19021 === 5))
{var inst_18962 = cljs.core.deref.call(null,mults);var inst_18963 = cljs.core.vals.call(null,inst_18962);var inst_18964 = cljs.core.seq.call(null,inst_18963);var inst_18965 = inst_18964;var inst_18966 = null;var inst_18967 = 0;var inst_18968 = 0;var state_19020__$1 = (function (){var statearr_19026 = state_19020;(statearr_19026[8] = inst_18968);
(statearr_19026[9] = inst_18967);
(statearr_19026[10] = inst_18966);
(statearr_19026[11] = inst_18965);
return statearr_19026;
})();var statearr_19027_19068 = state_19020__$1;(statearr_19027_19068[2] = null);
(statearr_19027_19068[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19021 === 6))
{var inst_18955 = (state_19020[7]);var inst_19003 = (state_19020[12]);var inst_19003__$1 = topic_fn.call(null,inst_18955);var inst_19004 = cljs.core.deref.call(null,mults);var inst_19005 = cljs.core.get.call(null,inst_19004,inst_19003__$1);var inst_19006 = cljs.core.async.muxch_STAR_.call(null,inst_19005);var state_19020__$1 = (function (){var statearr_19028 = state_19020;(statearr_19028[12] = inst_19003__$1);
return statearr_19028;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19020__$1,19,inst_19006,inst_18955);
} else
{if((state_val_19021 === 7))
{var inst_19016 = (state_19020[2]);var state_19020__$1 = state_19020;var statearr_19029_19069 = state_19020__$1;(statearr_19029_19069[2] = inst_19016);
(statearr_19029_19069[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19021 === 8))
{var inst_18968 = (state_19020[8]);var inst_18967 = (state_19020[9]);var inst_18970 = (inst_18968 < inst_18967);var inst_18971 = inst_18970;var state_19020__$1 = state_19020;if(cljs.core.truth_(inst_18971))
{var statearr_19033_19070 = state_19020__$1;(statearr_19033_19070[1] = 10);
} else
{var statearr_19034_19071 = state_19020__$1;(statearr_19034_19071[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19021 === 9))
{var inst_19001 = (state_19020[2]);var state_19020__$1 = state_19020;var statearr_19035_19072 = state_19020__$1;(statearr_19035_19072[2] = inst_19001);
(statearr_19035_19072[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19021 === 10))
{var inst_18968 = (state_19020[8]);var inst_18967 = (state_19020[9]);var inst_18966 = (state_19020[10]);var inst_18965 = (state_19020[11]);var inst_18973 = cljs.core._nth.call(null,inst_18966,inst_18968);var inst_18974 = cljs.core.async.muxch_STAR_.call(null,inst_18973);var inst_18975 = cljs.core.async.close_BANG_.call(null,inst_18974);var inst_18976 = (inst_18968 + 1);var tmp19030 = inst_18967;var tmp19031 = inst_18966;var tmp19032 = inst_18965;var inst_18965__$1 = tmp19032;var inst_18966__$1 = tmp19031;var inst_18967__$1 = tmp19030;var inst_18968__$1 = inst_18976;var state_19020__$1 = (function (){var statearr_19036 = state_19020;(statearr_19036[13] = inst_18975);
(statearr_19036[8] = inst_18968__$1);
(statearr_19036[9] = inst_18967__$1);
(statearr_19036[10] = inst_18966__$1);
(statearr_19036[11] = inst_18965__$1);
return statearr_19036;
})();var statearr_19037_19073 = state_19020__$1;(statearr_19037_19073[2] = null);
(statearr_19037_19073[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19021 === 11))
{var inst_18979 = (state_19020[14]);var inst_18965 = (state_19020[11]);var inst_18979__$1 = cljs.core.seq.call(null,inst_18965);var state_19020__$1 = (function (){var statearr_19038 = state_19020;(statearr_19038[14] = inst_18979__$1);
return statearr_19038;
})();if(inst_18979__$1)
{var statearr_19039_19074 = state_19020__$1;(statearr_19039_19074[1] = 13);
} else
{var statearr_19040_19075 = state_19020__$1;(statearr_19040_19075[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19021 === 12))
{var inst_18999 = (state_19020[2]);var state_19020__$1 = state_19020;var statearr_19041_19076 = state_19020__$1;(statearr_19041_19076[2] = inst_18999);
(statearr_19041_19076[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19021 === 13))
{var inst_18979 = (state_19020[14]);var inst_18981 = cljs.core.chunked_seq_QMARK_.call(null,inst_18979);var state_19020__$1 = state_19020;if(inst_18981)
{var statearr_19042_19077 = state_19020__$1;(statearr_19042_19077[1] = 16);
} else
{var statearr_19043_19078 = state_19020__$1;(statearr_19043_19078[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19021 === 14))
{var state_19020__$1 = state_19020;var statearr_19044_19079 = state_19020__$1;(statearr_19044_19079[2] = null);
(statearr_19044_19079[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19021 === 15))
{var inst_18997 = (state_19020[2]);var state_19020__$1 = state_19020;var statearr_19045_19080 = state_19020__$1;(statearr_19045_19080[2] = inst_18997);
(statearr_19045_19080[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19021 === 16))
{var inst_18979 = (state_19020[14]);var inst_18983 = cljs.core.chunk_first.call(null,inst_18979);var inst_18984 = cljs.core.chunk_rest.call(null,inst_18979);var inst_18985 = cljs.core.count.call(null,inst_18983);var inst_18965 = inst_18984;var inst_18966 = inst_18983;var inst_18967 = inst_18985;var inst_18968 = 0;var state_19020__$1 = (function (){var statearr_19046 = state_19020;(statearr_19046[8] = inst_18968);
(statearr_19046[9] = inst_18967);
(statearr_19046[10] = inst_18966);
(statearr_19046[11] = inst_18965);
return statearr_19046;
})();var statearr_19047_19081 = state_19020__$1;(statearr_19047_19081[2] = null);
(statearr_19047_19081[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19021 === 17))
{var inst_18979 = (state_19020[14]);var inst_18988 = cljs.core.first.call(null,inst_18979);var inst_18989 = cljs.core.async.muxch_STAR_.call(null,inst_18988);var inst_18990 = cljs.core.async.close_BANG_.call(null,inst_18989);var inst_18991 = cljs.core.next.call(null,inst_18979);var inst_18965 = inst_18991;var inst_18966 = null;var inst_18967 = 0;var inst_18968 = 0;var state_19020__$1 = (function (){var statearr_19048 = state_19020;(statearr_19048[8] = inst_18968);
(statearr_19048[9] = inst_18967);
(statearr_19048[10] = inst_18966);
(statearr_19048[11] = inst_18965);
(statearr_19048[15] = inst_18990);
return statearr_19048;
})();var statearr_19049_19082 = state_19020__$1;(statearr_19049_19082[2] = null);
(statearr_19049_19082[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19021 === 18))
{var inst_18994 = (state_19020[2]);var state_19020__$1 = state_19020;var statearr_19050_19083 = state_19020__$1;(statearr_19050_19083[2] = inst_18994);
(statearr_19050_19083[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19021 === 19))
{var inst_19008 = (state_19020[2]);var state_19020__$1 = state_19020;if(cljs.core.truth_(inst_19008))
{var statearr_19051_19084 = state_19020__$1;(statearr_19051_19084[1] = 20);
} else
{var statearr_19052_19085 = state_19020__$1;(statearr_19052_19085[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19021 === 20))
{var state_19020__$1 = state_19020;var statearr_19053_19086 = state_19020__$1;(statearr_19053_19086[2] = null);
(statearr_19053_19086[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19021 === 21))
{var inst_19003 = (state_19020[12]);var inst_19011 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19003);var state_19020__$1 = state_19020;var statearr_19054_19087 = state_19020__$1;(statearr_19054_19087[2] = inst_19011);
(statearr_19054_19087[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19021 === 22))
{var inst_19013 = (state_19020[2]);var state_19020__$1 = (function (){var statearr_19055 = state_19020;(statearr_19055[16] = inst_19013);
return statearr_19055;
})();var statearr_19056_19088 = state_19020__$1;(statearr_19056_19088[2] = null);
(statearr_19056_19088[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__10515__auto__){
return (function() {
var state_machine__10516__auto__ = null;
var state_machine__10516__auto____0 = (function (){var statearr_19060 = (new Array(17));(statearr_19060[0] = state_machine__10516__auto__);
(statearr_19060[1] = 1);
return statearr_19060;
});
var state_machine__10516__auto____1 = (function (state_19020){while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_19020);if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10518__auto__;
}
break;
}
}catch (e19061){if((e19061 instanceof Object))
{var ex__10519__auto__ = e19061;var statearr_19062_19089 = state_19020;(statearr_19062_19089[5] = ex__10519__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19020);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19061;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19090 = state_19020;
state_19020 = G__19090;
continue;
}
} else
{return ret_value__10517__auto__;
}
break;
}
});
state_machine__10516__auto__ = function(state_19020){
switch(arguments.length){
case 0:
return state_machine__10516__auto____0.call(this);
case 1:
return state_machine__10516__auto____1.call(this,state_19020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10516__auto____0;
state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10516__auto____1;
return state_machine__10516__auto__;
})()
;})(switch__10515__auto__))
})();var state__10587__auto__ = (function (){var statearr_19063 = f__10586__auto__.call(null);(statearr_19063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10585__auto___19064);
return statearr_19063;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10587__auto__);
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
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
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
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__10585__auto___19227 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10586__auto__ = (function (){var switch__10515__auto__ = (function (state_19197){var state_val_19198 = (state_19197[1]);if((state_val_19198 === 1))
{var state_19197__$1 = state_19197;var statearr_19199_19228 = state_19197__$1;(statearr_19199_19228[2] = null);
(statearr_19199_19228[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19198 === 2))
{var inst_19160 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_19161 = 0;var state_19197__$1 = (function (){var statearr_19200 = state_19197;(statearr_19200[7] = inst_19161);
(statearr_19200[8] = inst_19160);
return statearr_19200;
})();var statearr_19201_19229 = state_19197__$1;(statearr_19201_19229[2] = null);
(statearr_19201_19229[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19198 === 3))
{var inst_19195 = (state_19197[2]);var state_19197__$1 = state_19197;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19197__$1,inst_19195);
} else
{if((state_val_19198 === 4))
{var inst_19161 = (state_19197[7]);var inst_19163 = (inst_19161 < cnt);var state_19197__$1 = state_19197;if(cljs.core.truth_(inst_19163))
{var statearr_19202_19230 = state_19197__$1;(statearr_19202_19230[1] = 6);
} else
{var statearr_19203_19231 = state_19197__$1;(statearr_19203_19231[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19198 === 5))
{var inst_19181 = (state_19197[2]);var state_19197__$1 = (function (){var statearr_19204 = state_19197;(statearr_19204[9] = inst_19181);
return statearr_19204;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19197__$1,12,dchan);
} else
{if((state_val_19198 === 6))
{var state_19197__$1 = state_19197;var statearr_19205_19232 = state_19197__$1;(statearr_19205_19232[2] = null);
(statearr_19205_19232[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19198 === 7))
{var state_19197__$1 = state_19197;var statearr_19206_19233 = state_19197__$1;(statearr_19206_19233[2] = null);
(statearr_19206_19233[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19198 === 8))
{var inst_19179 = (state_19197[2]);var state_19197__$1 = state_19197;var statearr_19207_19234 = state_19197__$1;(statearr_19207_19234[2] = inst_19179);
(statearr_19207_19234[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19198 === 9))
{var inst_19161 = (state_19197[7]);var inst_19174 = (state_19197[2]);var inst_19175 = (inst_19161 + 1);var inst_19161__$1 = inst_19175;var state_19197__$1 = (function (){var statearr_19208 = state_19197;(statearr_19208[7] = inst_19161__$1);
(statearr_19208[10] = inst_19174);
return statearr_19208;
})();var statearr_19209_19235 = state_19197__$1;(statearr_19209_19235[2] = null);
(statearr_19209_19235[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19198 === 10))
{var inst_19165 = (state_19197[2]);var inst_19166 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_19197__$1 = (function (){var statearr_19210 = state_19197;(statearr_19210[11] = inst_19165);
return statearr_19210;
})();var statearr_19211_19236 = state_19197__$1;(statearr_19211_19236[2] = inst_19166);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19197__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19198 === 11))
{var inst_19161 = (state_19197[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19197,10,Object,null,9);var inst_19170 = chs__$1.call(null,inst_19161);var inst_19171 = done.call(null,inst_19161);var inst_19172 = cljs.core.async.take_BANG_.call(null,inst_19170,inst_19171);var state_19197__$1 = state_19197;var statearr_19212_19237 = state_19197__$1;(statearr_19212_19237[2] = inst_19172);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19197__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19198 === 12))
{var inst_19183 = (state_19197[12]);var inst_19183__$1 = (state_19197[2]);var inst_19184 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19183__$1);var state_19197__$1 = (function (){var statearr_19213 = state_19197;(statearr_19213[12] = inst_19183__$1);
return statearr_19213;
})();if(cljs.core.truth_(inst_19184))
{var statearr_19214_19238 = state_19197__$1;(statearr_19214_19238[1] = 13);
} else
{var statearr_19215_19239 = state_19197__$1;(statearr_19215_19239[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19198 === 13))
{var inst_19186 = cljs.core.async.close_BANG_.call(null,out);var state_19197__$1 = state_19197;var statearr_19216_19240 = state_19197__$1;(statearr_19216_19240[2] = inst_19186);
(statearr_19216_19240[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19198 === 14))
{var inst_19183 = (state_19197[12]);var inst_19188 = cljs.core.apply.call(null,f,inst_19183);var state_19197__$1 = state_19197;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19197__$1,16,out,inst_19188);
} else
{if((state_val_19198 === 15))
{var inst_19193 = (state_19197[2]);var state_19197__$1 = state_19197;var statearr_19217_19241 = state_19197__$1;(statearr_19217_19241[2] = inst_19193);
(statearr_19217_19241[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19198 === 16))
{var inst_19190 = (state_19197[2]);var state_19197__$1 = (function (){var statearr_19218 = state_19197;(statearr_19218[13] = inst_19190);
return statearr_19218;
})();var statearr_19219_19242 = state_19197__$1;(statearr_19219_19242[2] = null);
(statearr_19219_19242[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__10515__auto__){
return (function() {
var state_machine__10516__auto__ = null;
var state_machine__10516__auto____0 = (function (){var statearr_19223 = (new Array(14));(statearr_19223[0] = state_machine__10516__auto__);
(statearr_19223[1] = 1);
return statearr_19223;
});
var state_machine__10516__auto____1 = (function (state_19197){while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_19197);if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10518__auto__;
}
break;
}
}catch (e19224){if((e19224 instanceof Object))
{var ex__10519__auto__ = e19224;var statearr_19225_19243 = state_19197;(statearr_19225_19243[5] = ex__10519__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19197);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19224;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19244 = state_19197;
state_19197 = G__19244;
continue;
}
} else
{return ret_value__10517__auto__;
}
break;
}
});
state_machine__10516__auto__ = function(state_19197){
switch(arguments.length){
case 0:
return state_machine__10516__auto____0.call(this);
case 1:
return state_machine__10516__auto____1.call(this,state_19197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10516__auto____0;
state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10516__auto____1;
return state_machine__10516__auto__;
})()
;})(switch__10515__auto__))
})();var state__10587__auto__ = (function (){var statearr_19226 = f__10586__auto__.call(null);(statearr_19226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10585__auto___19227);
return statearr_19226;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10587__auto__);
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
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10585__auto___19352 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10586__auto__ = (function (){var switch__10515__auto__ = (function (state_19328){var state_val_19329 = (state_19328[1]);if((state_val_19329 === 1))
{var inst_19299 = cljs.core.vec.call(null,chs);var inst_19300 = inst_19299;var state_19328__$1 = (function (){var statearr_19330 = state_19328;(statearr_19330[7] = inst_19300);
return statearr_19330;
})();var statearr_19331_19353 = state_19328__$1;(statearr_19331_19353[2] = null);
(statearr_19331_19353[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19329 === 2))
{var inst_19300 = (state_19328[7]);var inst_19302 = cljs.core.count.call(null,inst_19300);var inst_19303 = (inst_19302 > 0);var state_19328__$1 = state_19328;if(cljs.core.truth_(inst_19303))
{var statearr_19332_19354 = state_19328__$1;(statearr_19332_19354[1] = 4);
} else
{var statearr_19333_19355 = state_19328__$1;(statearr_19333_19355[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19329 === 3))
{var inst_19326 = (state_19328[2]);var state_19328__$1 = state_19328;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19328__$1,inst_19326);
} else
{if((state_val_19329 === 4))
{var inst_19300 = (state_19328[7]);var state_19328__$1 = state_19328;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_19328__$1,7,inst_19300);
} else
{if((state_val_19329 === 5))
{var inst_19322 = cljs.core.async.close_BANG_.call(null,out);var state_19328__$1 = state_19328;var statearr_19334_19356 = state_19328__$1;(statearr_19334_19356[2] = inst_19322);
(statearr_19334_19356[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19329 === 6))
{var inst_19324 = (state_19328[2]);var state_19328__$1 = state_19328;var statearr_19335_19357 = state_19328__$1;(statearr_19335_19357[2] = inst_19324);
(statearr_19335_19357[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19329 === 7))
{var inst_19308 = (state_19328[8]);var inst_19307 = (state_19328[9]);var inst_19307__$1 = (state_19328[2]);var inst_19308__$1 = cljs.core.nth.call(null,inst_19307__$1,0,null);var inst_19309 = cljs.core.nth.call(null,inst_19307__$1,1,null);var inst_19310 = (inst_19308__$1 == null);var state_19328__$1 = (function (){var statearr_19336 = state_19328;(statearr_19336[10] = inst_19309);
(statearr_19336[8] = inst_19308__$1);
(statearr_19336[9] = inst_19307__$1);
return statearr_19336;
})();if(cljs.core.truth_(inst_19310))
{var statearr_19337_19358 = state_19328__$1;(statearr_19337_19358[1] = 8);
} else
{var statearr_19338_19359 = state_19328__$1;(statearr_19338_19359[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19329 === 8))
{var inst_19309 = (state_19328[10]);var inst_19308 = (state_19328[8]);var inst_19307 = (state_19328[9]);var inst_19300 = (state_19328[7]);var inst_19312 = (function (){var c = inst_19309;var v = inst_19308;var vec__19305 = inst_19307;var cs = inst_19300;return ((function (c,v,vec__19305,cs,inst_19309,inst_19308,inst_19307,inst_19300,state_val_19329){
return (function (p1__19245_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__19245_SHARP_);
});
;})(c,v,vec__19305,cs,inst_19309,inst_19308,inst_19307,inst_19300,state_val_19329))
})();var inst_19313 = cljs.core.filterv.call(null,inst_19312,inst_19300);var inst_19300__$1 = inst_19313;var state_19328__$1 = (function (){var statearr_19339 = state_19328;(statearr_19339[7] = inst_19300__$1);
return statearr_19339;
})();var statearr_19340_19360 = state_19328__$1;(statearr_19340_19360[2] = null);
(statearr_19340_19360[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19329 === 9))
{var inst_19308 = (state_19328[8]);var state_19328__$1 = state_19328;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19328__$1,11,out,inst_19308);
} else
{if((state_val_19329 === 10))
{var inst_19320 = (state_19328[2]);var state_19328__$1 = state_19328;var statearr_19342_19361 = state_19328__$1;(statearr_19342_19361[2] = inst_19320);
(statearr_19342_19361[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19329 === 11))
{var inst_19300 = (state_19328[7]);var inst_19317 = (state_19328[2]);var tmp19341 = inst_19300;var inst_19300__$1 = tmp19341;var state_19328__$1 = (function (){var statearr_19343 = state_19328;(statearr_19343[7] = inst_19300__$1);
(statearr_19343[11] = inst_19317);
return statearr_19343;
})();var statearr_19344_19362 = state_19328__$1;(statearr_19344_19362[2] = null);
(statearr_19344_19362[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__10515__auto__){
return (function() {
var state_machine__10516__auto__ = null;
var state_machine__10516__auto____0 = (function (){var statearr_19348 = (new Array(12));(statearr_19348[0] = state_machine__10516__auto__);
(statearr_19348[1] = 1);
return statearr_19348;
});
var state_machine__10516__auto____1 = (function (state_19328){while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_19328);if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10518__auto__;
}
break;
}
}catch (e19349){if((e19349 instanceof Object))
{var ex__10519__auto__ = e19349;var statearr_19350_19363 = state_19328;(statearr_19350_19363[5] = ex__10519__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19328);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19349;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19364 = state_19328;
state_19328 = G__19364;
continue;
}
} else
{return ret_value__10517__auto__;
}
break;
}
});
state_machine__10516__auto__ = function(state_19328){
switch(arguments.length){
case 0:
return state_machine__10516__auto____0.call(this);
case 1:
return state_machine__10516__auto____1.call(this,state_19328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10516__auto____0;
state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10516__auto____1;
return state_machine__10516__auto__;
})()
;})(switch__10515__auto__))
})();var state__10587__auto__ = (function (){var statearr_19351 = f__10586__auto__.call(null);(statearr_19351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10585__auto___19352);
return statearr_19351;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10587__auto__);
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
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10585__auto___19457 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10586__auto__ = (function (){var switch__10515__auto__ = (function (state_19434){var state_val_19435 = (state_19434[1]);if((state_val_19435 === 1))
{var inst_19411 = 0;var state_19434__$1 = (function (){var statearr_19436 = state_19434;(statearr_19436[7] = inst_19411);
return statearr_19436;
})();var statearr_19437_19458 = state_19434__$1;(statearr_19437_19458[2] = null);
(statearr_19437_19458[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19435 === 2))
{var inst_19411 = (state_19434[7]);var inst_19413 = (inst_19411 < n);var state_19434__$1 = state_19434;if(cljs.core.truth_(inst_19413))
{var statearr_19438_19459 = state_19434__$1;(statearr_19438_19459[1] = 4);
} else
{var statearr_19439_19460 = state_19434__$1;(statearr_19439_19460[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19435 === 3))
{var inst_19431 = (state_19434[2]);var inst_19432 = cljs.core.async.close_BANG_.call(null,out);var state_19434__$1 = (function (){var statearr_19440 = state_19434;(statearr_19440[8] = inst_19431);
return statearr_19440;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19434__$1,inst_19432);
} else
{if((state_val_19435 === 4))
{var state_19434__$1 = state_19434;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19434__$1,7,ch);
} else
{if((state_val_19435 === 5))
{var state_19434__$1 = state_19434;var statearr_19441_19461 = state_19434__$1;(statearr_19441_19461[2] = null);
(statearr_19441_19461[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19435 === 6))
{var inst_19429 = (state_19434[2]);var state_19434__$1 = state_19434;var statearr_19442_19462 = state_19434__$1;(statearr_19442_19462[2] = inst_19429);
(statearr_19442_19462[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19435 === 7))
{var inst_19416 = (state_19434[9]);var inst_19416__$1 = (state_19434[2]);var inst_19417 = (inst_19416__$1 == null);var inst_19418 = cljs.core.not.call(null,inst_19417);var state_19434__$1 = (function (){var statearr_19443 = state_19434;(statearr_19443[9] = inst_19416__$1);
return statearr_19443;
})();if(inst_19418)
{var statearr_19444_19463 = state_19434__$1;(statearr_19444_19463[1] = 8);
} else
{var statearr_19445_19464 = state_19434__$1;(statearr_19445_19464[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19435 === 8))
{var inst_19416 = (state_19434[9]);var state_19434__$1 = state_19434;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19434__$1,11,out,inst_19416);
} else
{if((state_val_19435 === 9))
{var state_19434__$1 = state_19434;var statearr_19446_19465 = state_19434__$1;(statearr_19446_19465[2] = null);
(statearr_19446_19465[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19435 === 10))
{var inst_19426 = (state_19434[2]);var state_19434__$1 = state_19434;var statearr_19447_19466 = state_19434__$1;(statearr_19447_19466[2] = inst_19426);
(statearr_19447_19466[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19435 === 11))
{var inst_19411 = (state_19434[7]);var inst_19421 = (state_19434[2]);var inst_19422 = (inst_19411 + 1);var inst_19411__$1 = inst_19422;var state_19434__$1 = (function (){var statearr_19448 = state_19434;(statearr_19448[7] = inst_19411__$1);
(statearr_19448[10] = inst_19421);
return statearr_19448;
})();var statearr_19449_19467 = state_19434__$1;(statearr_19449_19467[2] = null);
(statearr_19449_19467[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__10515__auto__){
return (function() {
var state_machine__10516__auto__ = null;
var state_machine__10516__auto____0 = (function (){var statearr_19453 = (new Array(11));(statearr_19453[0] = state_machine__10516__auto__);
(statearr_19453[1] = 1);
return statearr_19453;
});
var state_machine__10516__auto____1 = (function (state_19434){while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_19434);if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10518__auto__;
}
break;
}
}catch (e19454){if((e19454 instanceof Object))
{var ex__10519__auto__ = e19454;var statearr_19455_19468 = state_19434;(statearr_19455_19468[5] = ex__10519__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19434);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19454;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19469 = state_19434;
state_19434 = G__19469;
continue;
}
} else
{return ret_value__10517__auto__;
}
break;
}
});
state_machine__10516__auto__ = function(state_19434){
switch(arguments.length){
case 0:
return state_machine__10516__auto____0.call(this);
case 1:
return state_machine__10516__auto____1.call(this,state_19434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10516__auto____0;
state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10516__auto____1;
return state_machine__10516__auto__;
})()
;})(switch__10515__auto__))
})();var state__10587__auto__ = (function (){var statearr_19456 = f__10586__auto__.call(null);(statearr_19456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10585__auto___19457);
return statearr_19456;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10587__auto__);
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
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10585__auto___19566 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10586__auto__ = (function (){var switch__10515__auto__ = (function (state_19541){var state_val_19542 = (state_19541[1]);if((state_val_19542 === 1))
{var inst_19518 = null;var state_19541__$1 = (function (){var statearr_19543 = state_19541;(statearr_19543[7] = inst_19518);
return statearr_19543;
})();var statearr_19544_19567 = state_19541__$1;(statearr_19544_19567[2] = null);
(statearr_19544_19567[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19542 === 2))
{var state_19541__$1 = state_19541;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19541__$1,4,ch);
} else
{if((state_val_19542 === 3))
{var inst_19538 = (state_19541[2]);var inst_19539 = cljs.core.async.close_BANG_.call(null,out);var state_19541__$1 = (function (){var statearr_19545 = state_19541;(statearr_19545[8] = inst_19538);
return statearr_19545;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19541__$1,inst_19539);
} else
{if((state_val_19542 === 4))
{var inst_19521 = (state_19541[9]);var inst_19521__$1 = (state_19541[2]);var inst_19522 = (inst_19521__$1 == null);var inst_19523 = cljs.core.not.call(null,inst_19522);var state_19541__$1 = (function (){var statearr_19546 = state_19541;(statearr_19546[9] = inst_19521__$1);
return statearr_19546;
})();if(inst_19523)
{var statearr_19547_19568 = state_19541__$1;(statearr_19547_19568[1] = 5);
} else
{var statearr_19548_19569 = state_19541__$1;(statearr_19548_19569[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19542 === 5))
{var inst_19518 = (state_19541[7]);var inst_19521 = (state_19541[9]);var inst_19525 = cljs.core._EQ_.call(null,inst_19521,inst_19518);var state_19541__$1 = state_19541;if(inst_19525)
{var statearr_19549_19570 = state_19541__$1;(statearr_19549_19570[1] = 8);
} else
{var statearr_19550_19571 = state_19541__$1;(statearr_19550_19571[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19542 === 6))
{var state_19541__$1 = state_19541;var statearr_19552_19572 = state_19541__$1;(statearr_19552_19572[2] = null);
(statearr_19552_19572[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19542 === 7))
{var inst_19536 = (state_19541[2]);var state_19541__$1 = state_19541;var statearr_19553_19573 = state_19541__$1;(statearr_19553_19573[2] = inst_19536);
(statearr_19553_19573[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19542 === 8))
{var inst_19518 = (state_19541[7]);var tmp19551 = inst_19518;var inst_19518__$1 = tmp19551;var state_19541__$1 = (function (){var statearr_19554 = state_19541;(statearr_19554[7] = inst_19518__$1);
return statearr_19554;
})();var statearr_19555_19574 = state_19541__$1;(statearr_19555_19574[2] = null);
(statearr_19555_19574[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19542 === 9))
{var inst_19521 = (state_19541[9]);var state_19541__$1 = state_19541;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19541__$1,11,out,inst_19521);
} else
{if((state_val_19542 === 10))
{var inst_19533 = (state_19541[2]);var state_19541__$1 = state_19541;var statearr_19556_19575 = state_19541__$1;(statearr_19556_19575[2] = inst_19533);
(statearr_19556_19575[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19542 === 11))
{var inst_19521 = (state_19541[9]);var inst_19530 = (state_19541[2]);var inst_19518 = inst_19521;var state_19541__$1 = (function (){var statearr_19557 = state_19541;(statearr_19557[10] = inst_19530);
(statearr_19557[7] = inst_19518);
return statearr_19557;
})();var statearr_19558_19576 = state_19541__$1;(statearr_19558_19576[2] = null);
(statearr_19558_19576[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__10515__auto__){
return (function() {
var state_machine__10516__auto__ = null;
var state_machine__10516__auto____0 = (function (){var statearr_19562 = (new Array(11));(statearr_19562[0] = state_machine__10516__auto__);
(statearr_19562[1] = 1);
return statearr_19562;
});
var state_machine__10516__auto____1 = (function (state_19541){while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_19541);if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10518__auto__;
}
break;
}
}catch (e19563){if((e19563 instanceof Object))
{var ex__10519__auto__ = e19563;var statearr_19564_19577 = state_19541;(statearr_19564_19577[5] = ex__10519__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19541);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19563;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19578 = state_19541;
state_19541 = G__19578;
continue;
}
} else
{return ret_value__10517__auto__;
}
break;
}
});
state_machine__10516__auto__ = function(state_19541){
switch(arguments.length){
case 0:
return state_machine__10516__auto____0.call(this);
case 1:
return state_machine__10516__auto____1.call(this,state_19541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10516__auto____0;
state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10516__auto____1;
return state_machine__10516__auto__;
})()
;})(switch__10515__auto__))
})();var state__10587__auto__ = (function (){var statearr_19565 = f__10586__auto__.call(null);(statearr_19565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10585__auto___19566);
return statearr_19565;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10587__auto__);
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
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10585__auto___19713 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10586__auto__ = (function (){var switch__10515__auto__ = (function (state_19683){var state_val_19684 = (state_19683[1]);if((state_val_19684 === 1))
{var inst_19646 = (new Array(n));var inst_19647 = inst_19646;var inst_19648 = 0;var state_19683__$1 = (function (){var statearr_19685 = state_19683;(statearr_19685[7] = inst_19648);
(statearr_19685[8] = inst_19647);
return statearr_19685;
})();var statearr_19686_19714 = state_19683__$1;(statearr_19686_19714[2] = null);
(statearr_19686_19714[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19684 === 2))
{var state_19683__$1 = state_19683;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19683__$1,4,ch);
} else
{if((state_val_19684 === 3))
{var inst_19681 = (state_19683[2]);var state_19683__$1 = state_19683;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19683__$1,inst_19681);
} else
{if((state_val_19684 === 4))
{var inst_19651 = (state_19683[9]);var inst_19651__$1 = (state_19683[2]);var inst_19652 = (inst_19651__$1 == null);var inst_19653 = cljs.core.not.call(null,inst_19652);var state_19683__$1 = (function (){var statearr_19687 = state_19683;(statearr_19687[9] = inst_19651__$1);
return statearr_19687;
})();if(inst_19653)
{var statearr_19688_19715 = state_19683__$1;(statearr_19688_19715[1] = 5);
} else
{var statearr_19689_19716 = state_19683__$1;(statearr_19689_19716[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19684 === 5))
{var inst_19656 = (state_19683[10]);var inst_19651 = (state_19683[9]);var inst_19648 = (state_19683[7]);var inst_19647 = (state_19683[8]);var inst_19655 = (inst_19647[inst_19648] = inst_19651);var inst_19656__$1 = (inst_19648 + 1);var inst_19657 = (inst_19656__$1 < n);var state_19683__$1 = (function (){var statearr_19690 = state_19683;(statearr_19690[10] = inst_19656__$1);
(statearr_19690[11] = inst_19655);
return statearr_19690;
})();if(cljs.core.truth_(inst_19657))
{var statearr_19691_19717 = state_19683__$1;(statearr_19691_19717[1] = 8);
} else
{var statearr_19692_19718 = state_19683__$1;(statearr_19692_19718[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19684 === 6))
{var inst_19648 = (state_19683[7]);var inst_19669 = (inst_19648 > 0);var state_19683__$1 = state_19683;if(cljs.core.truth_(inst_19669))
{var statearr_19694_19719 = state_19683__$1;(statearr_19694_19719[1] = 12);
} else
{var statearr_19695_19720 = state_19683__$1;(statearr_19695_19720[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19684 === 7))
{var inst_19679 = (state_19683[2]);var state_19683__$1 = state_19683;var statearr_19696_19721 = state_19683__$1;(statearr_19696_19721[2] = inst_19679);
(statearr_19696_19721[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19684 === 8))
{var inst_19656 = (state_19683[10]);var inst_19647 = (state_19683[8]);var tmp19693 = inst_19647;var inst_19647__$1 = tmp19693;var inst_19648 = inst_19656;var state_19683__$1 = (function (){var statearr_19697 = state_19683;(statearr_19697[7] = inst_19648);
(statearr_19697[8] = inst_19647__$1);
return statearr_19697;
})();var statearr_19698_19722 = state_19683__$1;(statearr_19698_19722[2] = null);
(statearr_19698_19722[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19684 === 9))
{var inst_19647 = (state_19683[8]);var inst_19661 = cljs.core.vec.call(null,inst_19647);var state_19683__$1 = state_19683;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19683__$1,11,out,inst_19661);
} else
{if((state_val_19684 === 10))
{var inst_19667 = (state_19683[2]);var state_19683__$1 = state_19683;var statearr_19699_19723 = state_19683__$1;(statearr_19699_19723[2] = inst_19667);
(statearr_19699_19723[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19684 === 11))
{var inst_19663 = (state_19683[2]);var inst_19664 = (new Array(n));var inst_19647 = inst_19664;var inst_19648 = 0;var state_19683__$1 = (function (){var statearr_19700 = state_19683;(statearr_19700[12] = inst_19663);
(statearr_19700[7] = inst_19648);
(statearr_19700[8] = inst_19647);
return statearr_19700;
})();var statearr_19701_19724 = state_19683__$1;(statearr_19701_19724[2] = null);
(statearr_19701_19724[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19684 === 12))
{var inst_19647 = (state_19683[8]);var inst_19671 = cljs.core.vec.call(null,inst_19647);var state_19683__$1 = state_19683;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19683__$1,15,out,inst_19671);
} else
{if((state_val_19684 === 13))
{var state_19683__$1 = state_19683;var statearr_19702_19725 = state_19683__$1;(statearr_19702_19725[2] = null);
(statearr_19702_19725[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19684 === 14))
{var inst_19676 = (state_19683[2]);var inst_19677 = cljs.core.async.close_BANG_.call(null,out);var state_19683__$1 = (function (){var statearr_19703 = state_19683;(statearr_19703[13] = inst_19676);
return statearr_19703;
})();var statearr_19704_19726 = state_19683__$1;(statearr_19704_19726[2] = inst_19677);
(statearr_19704_19726[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19684 === 15))
{var inst_19673 = (state_19683[2]);var state_19683__$1 = state_19683;var statearr_19705_19727 = state_19683__$1;(statearr_19705_19727[2] = inst_19673);
(statearr_19705_19727[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__10515__auto__){
return (function() {
var state_machine__10516__auto__ = null;
var state_machine__10516__auto____0 = (function (){var statearr_19709 = (new Array(14));(statearr_19709[0] = state_machine__10516__auto__);
(statearr_19709[1] = 1);
return statearr_19709;
});
var state_machine__10516__auto____1 = (function (state_19683){while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_19683);if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10518__auto__;
}
break;
}
}catch (e19710){if((e19710 instanceof Object))
{var ex__10519__auto__ = e19710;var statearr_19711_19728 = state_19683;(statearr_19711_19728[5] = ex__10519__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19683);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19710;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19729 = state_19683;
state_19683 = G__19729;
continue;
}
} else
{return ret_value__10517__auto__;
}
break;
}
});
state_machine__10516__auto__ = function(state_19683){
switch(arguments.length){
case 0:
return state_machine__10516__auto____0.call(this);
case 1:
return state_machine__10516__auto____1.call(this,state_19683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10516__auto____0;
state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10516__auto____1;
return state_machine__10516__auto__;
})()
;})(switch__10515__auto__))
})();var state__10587__auto__ = (function (){var statearr_19712 = f__10586__auto__.call(null);(statearr_19712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10585__auto___19713);
return statearr_19712;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10587__auto__);
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
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10585__auto___19872 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10586__auto__ = (function (){var switch__10515__auto__ = (function (state_19842){var state_val_19843 = (state_19842[1]);if((state_val_19843 === 1))
{var inst_19801 = (new Array(0));var inst_19802 = inst_19801;var inst_19803 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_19842__$1 = (function (){var statearr_19844 = state_19842;(statearr_19844[7] = inst_19803);
(statearr_19844[8] = inst_19802);
return statearr_19844;
})();var statearr_19845_19873 = state_19842__$1;(statearr_19845_19873[2] = null);
(statearr_19845_19873[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19843 === 2))
{var state_19842__$1 = state_19842;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19842__$1,4,ch);
} else
{if((state_val_19843 === 3))
{var inst_19840 = (state_19842[2]);var state_19842__$1 = state_19842;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19842__$1,inst_19840);
} else
{if((state_val_19843 === 4))
{var inst_19806 = (state_19842[9]);var inst_19806__$1 = (state_19842[2]);var inst_19807 = (inst_19806__$1 == null);var inst_19808 = cljs.core.not.call(null,inst_19807);var state_19842__$1 = (function (){var statearr_19846 = state_19842;(statearr_19846[9] = inst_19806__$1);
return statearr_19846;
})();if(inst_19808)
{var statearr_19847_19874 = state_19842__$1;(statearr_19847_19874[1] = 5);
} else
{var statearr_19848_19875 = state_19842__$1;(statearr_19848_19875[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19843 === 5))
{var inst_19810 = (state_19842[10]);var inst_19806 = (state_19842[9]);var inst_19803 = (state_19842[7]);var inst_19810__$1 = f.call(null,inst_19806);var inst_19811 = cljs.core._EQ_.call(null,inst_19810__$1,inst_19803);var inst_19812 = cljs.core.keyword_identical_QMARK_.call(null,inst_19803,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_19813 = (inst_19811) || (inst_19812);var state_19842__$1 = (function (){var statearr_19849 = state_19842;(statearr_19849[10] = inst_19810__$1);
return statearr_19849;
})();if(cljs.core.truth_(inst_19813))
{var statearr_19850_19876 = state_19842__$1;(statearr_19850_19876[1] = 8);
} else
{var statearr_19851_19877 = state_19842__$1;(statearr_19851_19877[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19843 === 6))
{var inst_19802 = (state_19842[8]);var inst_19827 = inst_19802.length;var inst_19828 = (inst_19827 > 0);var state_19842__$1 = state_19842;if(cljs.core.truth_(inst_19828))
{var statearr_19853_19878 = state_19842__$1;(statearr_19853_19878[1] = 12);
} else
{var statearr_19854_19879 = state_19842__$1;(statearr_19854_19879[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19843 === 7))
{var inst_19838 = (state_19842[2]);var state_19842__$1 = state_19842;var statearr_19855_19880 = state_19842__$1;(statearr_19855_19880[2] = inst_19838);
(statearr_19855_19880[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19843 === 8))
{var inst_19810 = (state_19842[10]);var inst_19806 = (state_19842[9]);var inst_19802 = (state_19842[8]);var inst_19815 = inst_19802.push(inst_19806);var tmp19852 = inst_19802;var inst_19802__$1 = tmp19852;var inst_19803 = inst_19810;var state_19842__$1 = (function (){var statearr_19856 = state_19842;(statearr_19856[11] = inst_19815);
(statearr_19856[7] = inst_19803);
(statearr_19856[8] = inst_19802__$1);
return statearr_19856;
})();var statearr_19857_19881 = state_19842__$1;(statearr_19857_19881[2] = null);
(statearr_19857_19881[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19843 === 9))
{var inst_19802 = (state_19842[8]);var inst_19818 = cljs.core.vec.call(null,inst_19802);var state_19842__$1 = state_19842;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19842__$1,11,out,inst_19818);
} else
{if((state_val_19843 === 10))
{var inst_19825 = (state_19842[2]);var state_19842__$1 = state_19842;var statearr_19858_19882 = state_19842__$1;(statearr_19858_19882[2] = inst_19825);
(statearr_19858_19882[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19843 === 11))
{var inst_19810 = (state_19842[10]);var inst_19806 = (state_19842[9]);var inst_19820 = (state_19842[2]);var inst_19821 = (new Array(0));var inst_19822 = inst_19821.push(inst_19806);var inst_19802 = inst_19821;var inst_19803 = inst_19810;var state_19842__$1 = (function (){var statearr_19859 = state_19842;(statearr_19859[12] = inst_19822);
(statearr_19859[13] = inst_19820);
(statearr_19859[7] = inst_19803);
(statearr_19859[8] = inst_19802);
return statearr_19859;
})();var statearr_19860_19883 = state_19842__$1;(statearr_19860_19883[2] = null);
(statearr_19860_19883[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19843 === 12))
{var inst_19802 = (state_19842[8]);var inst_19830 = cljs.core.vec.call(null,inst_19802);var state_19842__$1 = state_19842;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19842__$1,15,out,inst_19830);
} else
{if((state_val_19843 === 13))
{var state_19842__$1 = state_19842;var statearr_19861_19884 = state_19842__$1;(statearr_19861_19884[2] = null);
(statearr_19861_19884[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19843 === 14))
{var inst_19835 = (state_19842[2]);var inst_19836 = cljs.core.async.close_BANG_.call(null,out);var state_19842__$1 = (function (){var statearr_19862 = state_19842;(statearr_19862[14] = inst_19835);
return statearr_19862;
})();var statearr_19863_19885 = state_19842__$1;(statearr_19863_19885[2] = inst_19836);
(statearr_19863_19885[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19843 === 15))
{var inst_19832 = (state_19842[2]);var state_19842__$1 = state_19842;var statearr_19864_19886 = state_19842__$1;(statearr_19864_19886[2] = inst_19832);
(statearr_19864_19886[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__10515__auto__){
return (function() {
var state_machine__10516__auto__ = null;
var state_machine__10516__auto____0 = (function (){var statearr_19868 = (new Array(15));(statearr_19868[0] = state_machine__10516__auto__);
(statearr_19868[1] = 1);
return statearr_19868;
});
var state_machine__10516__auto____1 = (function (state_19842){while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_19842);if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10518__auto__;
}
break;
}
}catch (e19869){if((e19869 instanceof Object))
{var ex__10519__auto__ = e19869;var statearr_19870_19887 = state_19842;(statearr_19870_19887[5] = ex__10519__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19842);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19869;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19888 = state_19842;
state_19842 = G__19888;
continue;
}
} else
{return ret_value__10517__auto__;
}
break;
}
});
state_machine__10516__auto__ = function(state_19842){
switch(arguments.length){
case 0:
return state_machine__10516__auto____0.call(this);
case 1:
return state_machine__10516__auto____1.call(this,state_19842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10516__auto____0;
state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10516__auto____1;
return state_machine__10516__auto__;
})()
;})(switch__10515__auto__))
})();var state__10587__auto__ = (function (){var statearr_19871 = f__10586__auto__.call(null);(statearr_19871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10585__auto___19872);
return statearr_19871;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10587__auto__);
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
