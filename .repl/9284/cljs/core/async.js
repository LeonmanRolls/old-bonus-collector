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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12909 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12909 = (function (f,fn_handler,meta12910){
this.f = f;
this.fn_handler = fn_handler;
this.meta12910 = meta12910;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12909.cljs$lang$type = true;
cljs.core.async.t12909.cljs$lang$ctorStr = "cljs.core.async/t12909";
cljs.core.async.t12909.cljs$lang$ctorPrWriter = (function (this__5539__auto__,writer__5540__auto__,opt__5541__auto__){return cljs.core._write.call(null,writer__5540__auto__,"cljs.core.async/t12909");
});
cljs.core.async.t12909.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12909.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12909.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12911){var self__ = this;
var _12911__$1 = this;return self__.meta12910;
});
cljs.core.async.t12909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12911,meta12910__$1){var self__ = this;
var _12911__$1 = this;return (new cljs.core.async.t12909(self__.f,self__.fn_handler,meta12910__$1));
});
cljs.core.async.__GT_t12909 = (function __GT_t12909(f__$1,fn_handler__$1,meta12910){return (new cljs.core.async.t12909(f__$1,fn_handler__$1,meta12910));
});
}
return (new cljs.core.async.t12909(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12913 = buff;if(G__12913)
{var bit__5621__auto__ = null;if(cljs.core.truth_((function (){var or__5000__auto__ = bit__5621__auto__;if(cljs.core.truth_(or__5000__auto__))
{return or__5000__auto__;
} else
{return G__12913.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12913.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12913);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12913);
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
{var val_12914 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12914);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_12914);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__5818__auto___12915 = n;var x_12916 = 0;while(true){
if((x_12916 < n__5818__auto___12915))
{(a[x_12916] = 0);
{
var G__12917 = (x_12916 + 1);
x_12916 = G__12917;
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
var G__12918 = (i + 1);
i = G__12918;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12922 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12922 = (function (flag,alt_flag,meta12923){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12923 = meta12923;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12922.cljs$lang$type = true;
cljs.core.async.t12922.cljs$lang$ctorStr = "cljs.core.async/t12922";
cljs.core.async.t12922.cljs$lang$ctorPrWriter = (function (this__5539__auto__,writer__5540__auto__,opt__5541__auto__){return cljs.core._write.call(null,writer__5540__auto__,"cljs.core.async/t12922");
});
cljs.core.async.t12922.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12922.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t12922.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t12922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12924){var self__ = this;
var _12924__$1 = this;return self__.meta12923;
});
cljs.core.async.t12922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12924,meta12923__$1){var self__ = this;
var _12924__$1 = this;return (new cljs.core.async.t12922(self__.flag,self__.alt_flag,meta12923__$1));
});
cljs.core.async.__GT_t12922 = (function __GT_t12922(flag__$1,alt_flag__$1,meta12923){return (new cljs.core.async.t12922(flag__$1,alt_flag__$1,meta12923));
});
}
return (new cljs.core.async.t12922(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12928 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12928 = (function (cb,flag,alt_handler,meta12929){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12929 = meta12929;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12928.cljs$lang$type = true;
cljs.core.async.t12928.cljs$lang$ctorStr = "cljs.core.async/t12928";
cljs.core.async.t12928.cljs$lang$ctorPrWriter = (function (this__5539__auto__,writer__5540__auto__,opt__5541__auto__){return cljs.core._write.call(null,writer__5540__auto__,"cljs.core.async/t12928");
});
cljs.core.async.t12928.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12928.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12928.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12928.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12930){var self__ = this;
var _12930__$1 = this;return self__.meta12929;
});
cljs.core.async.t12928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12930,meta12929__$1){var self__ = this;
var _12930__$1 = this;return (new cljs.core.async.t12928(self__.cb,self__.flag,self__.alt_handler,meta12929__$1));
});
cljs.core.async.__GT_t12928 = (function __GT_t12928(cb__$1,flag__$1,alt_handler__$1,meta12929){return (new cljs.core.async.t12928(cb__$1,flag__$1,alt_handler__$1,meta12929));
});
}
return (new cljs.core.async.t12928(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12931_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12931_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12932_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12932_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5000__auto__ = wport;if(cljs.core.truth_(or__5000__auto__))
{return or__5000__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__12933 = (i + 1);
i = G__12933;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__5000__auto__ = ret;if(cljs.core.truth_(or__5000__auto__))
{return or__5000__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__4988__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__4988__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__4988__auto__;
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
var alts_BANG___delegate = function (ports,p__12934){var map__12936 = p__12934;var map__12936__$1 = ((cljs.core.seq_QMARK_.call(null,map__12936))?cljs.core.apply.call(null,cljs.core.hash_map,map__12936):map__12936);var opts = map__12936__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__12934 = null;if (arguments.length > 1) {
  p__12934 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12934);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12937){
var ports = cljs.core.first(arglist__12937);
var p__12934 = cljs.core.rest(arglist__12937);
return alts_BANG___delegate(ports,p__12934);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12945 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12945 = (function (ch,f,map_LT_,meta12946){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12946 = meta12946;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12945.cljs$lang$type = true;
cljs.core.async.t12945.cljs$lang$ctorStr = "cljs.core.async/t12945";
cljs.core.async.t12945.cljs$lang$ctorPrWriter = (function (this__5539__auto__,writer__5540__auto__,opt__5541__auto__){return cljs.core._write.call(null,writer__5540__auto__,"cljs.core.async/t12945");
});
cljs.core.async.t12945.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12945.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t12945.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12945.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t12948 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12948 = (function (fn1,_,meta12946,ch,f,map_LT_,meta12949){
this.fn1 = fn1;
this._ = _;
this.meta12946 = meta12946;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12949 = meta12949;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12948.cljs$lang$type = true;
cljs.core.async.t12948.cljs$lang$ctorStr = "cljs.core.async/t12948";
cljs.core.async.t12948.cljs$lang$ctorPrWriter = (function (this__5539__auto__,writer__5540__auto__,opt__5541__auto__){return cljs.core._write.call(null,writer__5540__auto__,"cljs.core.async/t12948");
});
cljs.core.async.t12948.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12948.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t12948.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t12948.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__12938_SHARP_){return f1.call(null,(((p1__12938_SHARP_ == null))?null:self__.f.call(null,p1__12938_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t12948.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12950){var self__ = this;
var _12950__$1 = this;return self__.meta12949;
});
cljs.core.async.t12948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12950,meta12949__$1){var self__ = this;
var _12950__$1 = this;return (new cljs.core.async.t12948(self__.fn1,self__._,self__.meta12946,self__.ch,self__.f,self__.map_LT_,meta12949__$1));
});
cljs.core.async.__GT_t12948 = (function __GT_t12948(fn1__$1,___$2,meta12946__$1,ch__$2,f__$2,map_LT___$2,meta12949){return (new cljs.core.async.t12948(fn1__$1,___$2,meta12946__$1,ch__$2,f__$2,map_LT___$2,meta12949));
});
}
return (new cljs.core.async.t12948(fn1,___$1,self__.meta12946,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__4988__auto__ = ret;if(cljs.core.truth_(and__4988__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__4988__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t12945.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12945.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12945.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t12945.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12947){var self__ = this;
var _12947__$1 = this;return self__.meta12946;
});
cljs.core.async.t12945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12947,meta12946__$1){var self__ = this;
var _12947__$1 = this;return (new cljs.core.async.t12945(self__.ch,self__.f,self__.map_LT_,meta12946__$1));
});
cljs.core.async.__GT_t12945 = (function __GT_t12945(ch__$1,f__$1,map_LT___$1,meta12946){return (new cljs.core.async.t12945(ch__$1,f__$1,map_LT___$1,meta12946));
});
}
return (new cljs.core.async.t12945(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12954 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12954 = (function (ch,f,map_GT_,meta12955){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12955 = meta12955;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12954.cljs$lang$type = true;
cljs.core.async.t12954.cljs$lang$ctorStr = "cljs.core.async/t12954";
cljs.core.async.t12954.cljs$lang$ctorPrWriter = (function (this__5539__auto__,writer__5540__auto__,opt__5541__auto__){return cljs.core._write.call(null,writer__5540__auto__,"cljs.core.async/t12954");
});
cljs.core.async.t12954.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12954.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t12954.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12954.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12954.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12954.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12956){var self__ = this;
var _12956__$1 = this;return self__.meta12955;
});
cljs.core.async.t12954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12956,meta12955__$1){var self__ = this;
var _12956__$1 = this;return (new cljs.core.async.t12954(self__.ch,self__.f,self__.map_GT_,meta12955__$1));
});
cljs.core.async.__GT_t12954 = (function __GT_t12954(ch__$1,f__$1,map_GT___$1,meta12955){return (new cljs.core.async.t12954(ch__$1,f__$1,map_GT___$1,meta12955));
});
}
return (new cljs.core.async.t12954(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12960 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12960 = (function (ch,p,filter_GT_,meta12961){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12961 = meta12961;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12960.cljs$lang$type = true;
cljs.core.async.t12960.cljs$lang$ctorStr = "cljs.core.async/t12960";
cljs.core.async.t12960.cljs$lang$ctorPrWriter = (function (this__5539__auto__,writer__5540__auto__,opt__5541__auto__){return cljs.core._write.call(null,writer__5540__auto__,"cljs.core.async/t12960");
});
cljs.core.async.t12960.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12960.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t12960.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12960.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12960.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12960.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12960.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t12960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12962){var self__ = this;
var _12962__$1 = this;return self__.meta12961;
});
cljs.core.async.t12960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12962,meta12961__$1){var self__ = this;
var _12962__$1 = this;return (new cljs.core.async.t12960(self__.ch,self__.p,self__.filter_GT_,meta12961__$1));
});
cljs.core.async.__GT_t12960 = (function __GT_t12960(ch__$1,p__$1,filter_GT___$1,meta12961){return (new cljs.core.async.t12960(ch__$1,p__$1,filter_GT___$1,meta12961));
});
}
return (new cljs.core.async.t12960(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8559__auto___13045 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8560__auto__ = (function (){var switch__8460__auto__ = (function (state_13024){var state_val_13025 = (state_13024[1]);if((state_val_13025 === 1))
{var state_13024__$1 = state_13024;var statearr_13026_13046 = state_13024__$1;(statearr_13026_13046[2] = null);
(statearr_13026_13046[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13025 === 2))
{var state_13024__$1 = state_13024;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13024__$1,4,ch);
} else
{if((state_val_13025 === 3))
{var inst_13022 = (state_13024[2]);var state_13024__$1 = state_13024;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13024__$1,inst_13022);
} else
{if((state_val_13025 === 4))
{var inst_13006 = (state_13024[7]);var inst_13006__$1 = (state_13024[2]);var inst_13007 = (inst_13006__$1 == null);var state_13024__$1 = (function (){var statearr_13027 = state_13024;(statearr_13027[7] = inst_13006__$1);
return statearr_13027;
})();if(cljs.core.truth_(inst_13007))
{var statearr_13028_13047 = state_13024__$1;(statearr_13028_13047[1] = 5);
} else
{var statearr_13029_13048 = state_13024__$1;(statearr_13029_13048[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13025 === 5))
{var inst_13009 = cljs.core.async.close_BANG_.call(null,out);var state_13024__$1 = state_13024;var statearr_13030_13049 = state_13024__$1;(statearr_13030_13049[2] = inst_13009);
(statearr_13030_13049[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13025 === 6))
{var inst_13006 = (state_13024[7]);var inst_13011 = p.call(null,inst_13006);var state_13024__$1 = state_13024;if(cljs.core.truth_(inst_13011))
{var statearr_13031_13050 = state_13024__$1;(statearr_13031_13050[1] = 8);
} else
{var statearr_13032_13051 = state_13024__$1;(statearr_13032_13051[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13025 === 7))
{var inst_13020 = (state_13024[2]);var state_13024__$1 = state_13024;var statearr_13033_13052 = state_13024__$1;(statearr_13033_13052[2] = inst_13020);
(statearr_13033_13052[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13025 === 8))
{var inst_13006 = (state_13024[7]);var state_13024__$1 = state_13024;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13024__$1,11,out,inst_13006);
} else
{if((state_val_13025 === 9))
{var state_13024__$1 = state_13024;var statearr_13034_13053 = state_13024__$1;(statearr_13034_13053[2] = null);
(statearr_13034_13053[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13025 === 10))
{var inst_13017 = (state_13024[2]);var state_13024__$1 = (function (){var statearr_13035 = state_13024;(statearr_13035[8] = inst_13017);
return statearr_13035;
})();var statearr_13036_13054 = state_13024__$1;(statearr_13036_13054[2] = null);
(statearr_13036_13054[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13025 === 11))
{var inst_13014 = (state_13024[2]);var state_13024__$1 = state_13024;var statearr_13037_13055 = state_13024__$1;(statearr_13037_13055[2] = inst_13014);
(statearr_13037_13055[1] = 10);
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
});return ((function (switch__8460__auto__){
return (function() {
var state_machine__8461__auto__ = null;
var state_machine__8461__auto____0 = (function (){var statearr_13041 = (new Array(9));(statearr_13041[0] = state_machine__8461__auto__);
(statearr_13041[1] = 1);
return statearr_13041;
});
var state_machine__8461__auto____1 = (function (state_13024){while(true){
var ret_value__8462__auto__ = (function (){try{while(true){
var result__8463__auto__ = switch__8460__auto__.call(null,state_13024);if(cljs.core.keyword_identical_QMARK_.call(null,result__8463__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8463__auto__;
}
break;
}
}catch (e13042){if((e13042 instanceof Object))
{var ex__8464__auto__ = e13042;var statearr_13043_13056 = state_13024;(statearr_13043_13056[5] = ex__8464__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13024);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13042;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8462__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13057 = state_13024;
state_13024 = G__13057;
continue;
}
} else
{return ret_value__8462__auto__;
}
break;
}
});
state_machine__8461__auto__ = function(state_13024){
switch(arguments.length){
case 0:
return state_machine__8461__auto____0.call(this);
case 1:
return state_machine__8461__auto____1.call(this,state_13024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8461__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8461__auto____0;
state_machine__8461__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8461__auto____1;
return state_machine__8461__auto__;
})()
;})(switch__8460__auto__))
})();var state__8561__auto__ = (function (){var statearr_13044 = f__8560__auto__.call(null);(statearr_13044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8559__auto___13045);
return statearr_13044;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8561__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__8559__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8560__auto__ = (function (){var switch__8460__auto__ = (function (state_13223){var state_val_13224 = (state_13223[1]);if((state_val_13224 === 1))
{var state_13223__$1 = state_13223;var statearr_13225_13266 = state_13223__$1;(statearr_13225_13266[2] = null);
(statearr_13225_13266[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13224 === 2))
{var state_13223__$1 = state_13223;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13223__$1,4,in$);
} else
{if((state_val_13224 === 3))
{var inst_13221 = (state_13223[2]);var state_13223__$1 = state_13223;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13223__$1,inst_13221);
} else
{if((state_val_13224 === 4))
{var inst_13164 = (state_13223[7]);var inst_13164__$1 = (state_13223[2]);var inst_13165 = (inst_13164__$1 == null);var state_13223__$1 = (function (){var statearr_13226 = state_13223;(statearr_13226[7] = inst_13164__$1);
return statearr_13226;
})();if(cljs.core.truth_(inst_13165))
{var statearr_13227_13267 = state_13223__$1;(statearr_13227_13267[1] = 5);
} else
{var statearr_13228_13268 = state_13223__$1;(statearr_13228_13268[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13224 === 5))
{var inst_13167 = cljs.core.async.close_BANG_.call(null,out);var state_13223__$1 = state_13223;var statearr_13229_13269 = state_13223__$1;(statearr_13229_13269[2] = inst_13167);
(statearr_13229_13269[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13224 === 6))
{var inst_13164 = (state_13223[7]);var inst_13173 = f.call(null,inst_13164);var inst_13174 = cljs.core.seq.call(null,inst_13173);var inst_13175 = inst_13174;var inst_13176 = null;var inst_13177 = 0;var inst_13178 = 0;var state_13223__$1 = (function (){var statearr_13230 = state_13223;(statearr_13230[8] = inst_13177);
(statearr_13230[9] = inst_13178);
(statearr_13230[10] = inst_13175);
(statearr_13230[11] = inst_13176);
return statearr_13230;
})();var statearr_13231_13270 = state_13223__$1;(statearr_13231_13270[2] = null);
(statearr_13231_13270[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13224 === 7))
{var inst_13219 = (state_13223[2]);var state_13223__$1 = state_13223;var statearr_13232_13271 = state_13223__$1;(statearr_13232_13271[2] = inst_13219);
(statearr_13232_13271[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13224 === 8))
{var inst_13177 = (state_13223[8]);var inst_13178 = (state_13223[9]);var inst_13180 = (inst_13178 < inst_13177);var inst_13181 = inst_13180;var state_13223__$1 = state_13223;if(cljs.core.truth_(inst_13181))
{var statearr_13233_13272 = state_13223__$1;(statearr_13233_13272[1] = 10);
} else
{var statearr_13234_13273 = state_13223__$1;(statearr_13234_13273[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13224 === 9))
{var inst_13211 = (state_13223[2]);var inst_13212 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_13223__$1 = (function (){var statearr_13235 = state_13223;(statearr_13235[12] = inst_13211);
return statearr_13235;
})();if(cljs.core.truth_(inst_13212))
{var statearr_13236_13274 = state_13223__$1;(statearr_13236_13274[1] = 21);
} else
{var statearr_13237_13275 = state_13223__$1;(statearr_13237_13275[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13224 === 10))
{var inst_13178 = (state_13223[9]);var inst_13176 = (state_13223[11]);var inst_13183 = cljs.core._nth.call(null,inst_13176,inst_13178);var state_13223__$1 = state_13223;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13223__$1,13,out,inst_13183);
} else
{if((state_val_13224 === 11))
{var inst_13175 = (state_13223[10]);var inst_13189 = (state_13223[13]);var inst_13189__$1 = cljs.core.seq.call(null,inst_13175);var state_13223__$1 = (function (){var statearr_13241 = state_13223;(statearr_13241[13] = inst_13189__$1);
return statearr_13241;
})();if(inst_13189__$1)
{var statearr_13242_13276 = state_13223__$1;(statearr_13242_13276[1] = 14);
} else
{var statearr_13243_13277 = state_13223__$1;(statearr_13243_13277[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13224 === 12))
{var inst_13209 = (state_13223[2]);var state_13223__$1 = state_13223;var statearr_13244_13278 = state_13223__$1;(statearr_13244_13278[2] = inst_13209);
(statearr_13244_13278[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13224 === 13))
{var inst_13177 = (state_13223[8]);var inst_13178 = (state_13223[9]);var inst_13175 = (state_13223[10]);var inst_13176 = (state_13223[11]);var inst_13185 = (state_13223[2]);var inst_13186 = (inst_13178 + 1);var tmp13238 = inst_13177;var tmp13239 = inst_13175;var tmp13240 = inst_13176;var inst_13175__$1 = tmp13239;var inst_13176__$1 = tmp13240;var inst_13177__$1 = tmp13238;var inst_13178__$1 = inst_13186;var state_13223__$1 = (function (){var statearr_13245 = state_13223;(statearr_13245[8] = inst_13177__$1);
(statearr_13245[9] = inst_13178__$1);
(statearr_13245[10] = inst_13175__$1);
(statearr_13245[11] = inst_13176__$1);
(statearr_13245[14] = inst_13185);
return statearr_13245;
})();var statearr_13246_13279 = state_13223__$1;(statearr_13246_13279[2] = null);
(statearr_13246_13279[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13224 === 14))
{var inst_13189 = (state_13223[13]);var inst_13191 = cljs.core.chunked_seq_QMARK_.call(null,inst_13189);var state_13223__$1 = state_13223;if(inst_13191)
{var statearr_13247_13280 = state_13223__$1;(statearr_13247_13280[1] = 17);
} else
{var statearr_13248_13281 = state_13223__$1;(statearr_13248_13281[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13224 === 15))
{var state_13223__$1 = state_13223;var statearr_13249_13282 = state_13223__$1;(statearr_13249_13282[2] = null);
(statearr_13249_13282[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13224 === 16))
{var inst_13207 = (state_13223[2]);var state_13223__$1 = state_13223;var statearr_13250_13283 = state_13223__$1;(statearr_13250_13283[2] = inst_13207);
(statearr_13250_13283[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13224 === 17))
{var inst_13189 = (state_13223[13]);var inst_13193 = cljs.core.chunk_first.call(null,inst_13189);var inst_13194 = cljs.core.chunk_rest.call(null,inst_13189);var inst_13195 = cljs.core.count.call(null,inst_13193);var inst_13175 = inst_13194;var inst_13176 = inst_13193;var inst_13177 = inst_13195;var inst_13178 = 0;var state_13223__$1 = (function (){var statearr_13251 = state_13223;(statearr_13251[8] = inst_13177);
(statearr_13251[9] = inst_13178);
(statearr_13251[10] = inst_13175);
(statearr_13251[11] = inst_13176);
return statearr_13251;
})();var statearr_13252_13284 = state_13223__$1;(statearr_13252_13284[2] = null);
(statearr_13252_13284[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13224 === 18))
{var inst_13189 = (state_13223[13]);var inst_13198 = cljs.core.first.call(null,inst_13189);var state_13223__$1 = state_13223;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13223__$1,20,out,inst_13198);
} else
{if((state_val_13224 === 19))
{var inst_13204 = (state_13223[2]);var state_13223__$1 = state_13223;var statearr_13253_13285 = state_13223__$1;(statearr_13253_13285[2] = inst_13204);
(statearr_13253_13285[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13224 === 20))
{var inst_13189 = (state_13223[13]);var inst_13200 = (state_13223[2]);var inst_13201 = cljs.core.next.call(null,inst_13189);var inst_13175 = inst_13201;var inst_13176 = null;var inst_13177 = 0;var inst_13178 = 0;var state_13223__$1 = (function (){var statearr_13254 = state_13223;(statearr_13254[15] = inst_13200);
(statearr_13254[8] = inst_13177);
(statearr_13254[9] = inst_13178);
(statearr_13254[10] = inst_13175);
(statearr_13254[11] = inst_13176);
return statearr_13254;
})();var statearr_13255_13286 = state_13223__$1;(statearr_13255_13286[2] = null);
(statearr_13255_13286[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13224 === 21))
{var state_13223__$1 = state_13223;var statearr_13256_13287 = state_13223__$1;(statearr_13256_13287[2] = null);
(statearr_13256_13287[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13224 === 22))
{var state_13223__$1 = state_13223;var statearr_13257_13288 = state_13223__$1;(statearr_13257_13288[2] = null);
(statearr_13257_13288[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13224 === 23))
{var inst_13217 = (state_13223[2]);var state_13223__$1 = state_13223;var statearr_13258_13289 = state_13223__$1;(statearr_13258_13289[2] = inst_13217);
(statearr_13258_13289[1] = 7);
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
});return ((function (switch__8460__auto__){
return (function() {
var state_machine__8461__auto__ = null;
var state_machine__8461__auto____0 = (function (){var statearr_13262 = (new Array(16));(statearr_13262[0] = state_machine__8461__auto__);
(statearr_13262[1] = 1);
return statearr_13262;
});
var state_machine__8461__auto____1 = (function (state_13223){while(true){
var ret_value__8462__auto__ = (function (){try{while(true){
var result__8463__auto__ = switch__8460__auto__.call(null,state_13223);if(cljs.core.keyword_identical_QMARK_.call(null,result__8463__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8463__auto__;
}
break;
}
}catch (e13263){if((e13263 instanceof Object))
{var ex__8464__auto__ = e13263;var statearr_13264_13290 = state_13223;(statearr_13264_13290[5] = ex__8464__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13223);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13263;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8462__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13291 = state_13223;
state_13223 = G__13291;
continue;
}
} else
{return ret_value__8462__auto__;
}
break;
}
});
state_machine__8461__auto__ = function(state_13223){
switch(arguments.length){
case 0:
return state_machine__8461__auto____0.call(this);
case 1:
return state_machine__8461__auto____1.call(this,state_13223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8461__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8461__auto____0;
state_machine__8461__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8461__auto____1;
return state_machine__8461__auto__;
})()
;})(switch__8460__auto__))
})();var state__8561__auto__ = (function (){var statearr_13265 = f__8560__auto__.call(null);(statearr_13265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8559__auto__);
return statearr_13265;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8561__auto__);
}));
return c__8559__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__8559__auto___13386 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8560__auto__ = (function (){var switch__8460__auto__ = (function (state_13362){var state_val_13363 = (state_13362[1]);if((state_val_13363 === 1))
{var state_13362__$1 = state_13362;var statearr_13364_13387 = state_13362__$1;(statearr_13364_13387[2] = null);
(statearr_13364_13387[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13363 === 2))
{var state_13362__$1 = state_13362;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13362__$1,4,from);
} else
{if((state_val_13363 === 3))
{var inst_13360 = (state_13362[2]);var state_13362__$1 = state_13362;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13362__$1,inst_13360);
} else
{if((state_val_13363 === 4))
{var inst_13341 = (state_13362[7]);var inst_13341__$1 = (state_13362[2]);var inst_13342 = (inst_13341__$1 == null);var state_13362__$1 = (function (){var statearr_13365 = state_13362;(statearr_13365[7] = inst_13341__$1);
return statearr_13365;
})();if(cljs.core.truth_(inst_13342))
{var statearr_13366_13388 = state_13362__$1;(statearr_13366_13388[1] = 5);
} else
{var statearr_13367_13389 = state_13362__$1;(statearr_13367_13389[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13363 === 5))
{var state_13362__$1 = state_13362;if(cljs.core.truth_(close_QMARK_))
{var statearr_13368_13390 = state_13362__$1;(statearr_13368_13390[1] = 8);
} else
{var statearr_13369_13391 = state_13362__$1;(statearr_13369_13391[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13363 === 6))
{var inst_13341 = (state_13362[7]);var state_13362__$1 = state_13362;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13362__$1,11,to,inst_13341);
} else
{if((state_val_13363 === 7))
{var inst_13358 = (state_13362[2]);var state_13362__$1 = state_13362;var statearr_13370_13392 = state_13362__$1;(statearr_13370_13392[2] = inst_13358);
(statearr_13370_13392[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13363 === 8))
{var inst_13345 = cljs.core.async.close_BANG_.call(null,to);var state_13362__$1 = state_13362;var statearr_13371_13393 = state_13362__$1;(statearr_13371_13393[2] = inst_13345);
(statearr_13371_13393[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13363 === 9))
{var state_13362__$1 = state_13362;var statearr_13372_13394 = state_13362__$1;(statearr_13372_13394[2] = null);
(statearr_13372_13394[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13363 === 10))
{var inst_13348 = (state_13362[2]);var state_13362__$1 = state_13362;var statearr_13373_13395 = state_13362__$1;(statearr_13373_13395[2] = inst_13348);
(statearr_13373_13395[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13363 === 11))
{var inst_13351 = (state_13362[2]);var state_13362__$1 = state_13362;if(cljs.core.truth_(inst_13351))
{var statearr_13374_13396 = state_13362__$1;(statearr_13374_13396[1] = 12);
} else
{var statearr_13375_13397 = state_13362__$1;(statearr_13375_13397[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13363 === 12))
{var state_13362__$1 = state_13362;var statearr_13376_13398 = state_13362__$1;(statearr_13376_13398[2] = null);
(statearr_13376_13398[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13363 === 13))
{var state_13362__$1 = state_13362;var statearr_13377_13399 = state_13362__$1;(statearr_13377_13399[2] = null);
(statearr_13377_13399[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13363 === 14))
{var inst_13356 = (state_13362[2]);var state_13362__$1 = state_13362;var statearr_13378_13400 = state_13362__$1;(statearr_13378_13400[2] = inst_13356);
(statearr_13378_13400[1] = 7);
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
});return ((function (switch__8460__auto__){
return (function() {
var state_machine__8461__auto__ = null;
var state_machine__8461__auto____0 = (function (){var statearr_13382 = (new Array(8));(statearr_13382[0] = state_machine__8461__auto__);
(statearr_13382[1] = 1);
return statearr_13382;
});
var state_machine__8461__auto____1 = (function (state_13362){while(true){
var ret_value__8462__auto__ = (function (){try{while(true){
var result__8463__auto__ = switch__8460__auto__.call(null,state_13362);if(cljs.core.keyword_identical_QMARK_.call(null,result__8463__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8463__auto__;
}
break;
}
}catch (e13383){if((e13383 instanceof Object))
{var ex__8464__auto__ = e13383;var statearr_13384_13401 = state_13362;(statearr_13384_13401[5] = ex__8464__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13362);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13383;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8462__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13402 = state_13362;
state_13362 = G__13402;
continue;
}
} else
{return ret_value__8462__auto__;
}
break;
}
});
state_machine__8461__auto__ = function(state_13362){
switch(arguments.length){
case 0:
return state_machine__8461__auto____0.call(this);
case 1:
return state_machine__8461__auto____1.call(this,state_13362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8461__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8461__auto____0;
state_machine__8461__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8461__auto____1;
return state_machine__8461__auto__;
})()
;})(switch__8460__auto__))
})();var state__8561__auto__ = (function (){var statearr_13385 = f__8560__auto__.call(null);(statearr_13385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8559__auto___13386);
return statearr_13385;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8561__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__8559__auto___13503 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8560__auto__ = (function (){var switch__8460__auto__ = (function (state_13478){var state_val_13479 = (state_13478[1]);if((state_val_13479 === 1))
{var state_13478__$1 = state_13478;var statearr_13480_13504 = state_13478__$1;(statearr_13480_13504[2] = null);
(statearr_13480_13504[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13479 === 2))
{var state_13478__$1 = state_13478;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13478__$1,4,ch);
} else
{if((state_val_13479 === 3))
{var inst_13476 = (state_13478[2]);var state_13478__$1 = state_13478;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13478__$1,inst_13476);
} else
{if((state_val_13479 === 4))
{var inst_13455 = (state_13478[7]);var inst_13455__$1 = (state_13478[2]);var inst_13456 = (inst_13455__$1 == null);var state_13478__$1 = (function (){var statearr_13481 = state_13478;(statearr_13481[7] = inst_13455__$1);
return statearr_13481;
})();if(cljs.core.truth_(inst_13456))
{var statearr_13482_13505 = state_13478__$1;(statearr_13482_13505[1] = 5);
} else
{var statearr_13483_13506 = state_13478__$1;(statearr_13483_13506[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13479 === 5))
{var inst_13458 = cljs.core.async.close_BANG_.call(null,tc);var inst_13459 = cljs.core.async.close_BANG_.call(null,fc);var state_13478__$1 = (function (){var statearr_13484 = state_13478;(statearr_13484[8] = inst_13458);
return statearr_13484;
})();var statearr_13485_13507 = state_13478__$1;(statearr_13485_13507[2] = inst_13459);
(statearr_13485_13507[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13479 === 6))
{var inst_13455 = (state_13478[7]);var inst_13461 = p.call(null,inst_13455);var state_13478__$1 = state_13478;if(cljs.core.truth_(inst_13461))
{var statearr_13486_13508 = state_13478__$1;(statearr_13486_13508[1] = 9);
} else
{var statearr_13487_13509 = state_13478__$1;(statearr_13487_13509[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13479 === 7))
{var inst_13474 = (state_13478[2]);var state_13478__$1 = state_13478;var statearr_13488_13510 = state_13478__$1;(statearr_13488_13510[2] = inst_13474);
(statearr_13488_13510[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13479 === 8))
{var inst_13467 = (state_13478[2]);var state_13478__$1 = state_13478;if(cljs.core.truth_(inst_13467))
{var statearr_13489_13511 = state_13478__$1;(statearr_13489_13511[1] = 12);
} else
{var statearr_13490_13512 = state_13478__$1;(statearr_13490_13512[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13479 === 9))
{var state_13478__$1 = state_13478;var statearr_13491_13513 = state_13478__$1;(statearr_13491_13513[2] = tc);
(statearr_13491_13513[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13479 === 10))
{var state_13478__$1 = state_13478;var statearr_13492_13514 = state_13478__$1;(statearr_13492_13514[2] = fc);
(statearr_13492_13514[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13479 === 11))
{var inst_13455 = (state_13478[7]);var inst_13465 = (state_13478[2]);var state_13478__$1 = state_13478;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13478__$1,8,inst_13465,inst_13455);
} else
{if((state_val_13479 === 12))
{var state_13478__$1 = state_13478;var statearr_13493_13515 = state_13478__$1;(statearr_13493_13515[2] = null);
(statearr_13493_13515[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13479 === 13))
{var state_13478__$1 = state_13478;var statearr_13494_13516 = state_13478__$1;(statearr_13494_13516[2] = null);
(statearr_13494_13516[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13479 === 14))
{var inst_13472 = (state_13478[2]);var state_13478__$1 = state_13478;var statearr_13495_13517 = state_13478__$1;(statearr_13495_13517[2] = inst_13472);
(statearr_13495_13517[1] = 7);
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
});return ((function (switch__8460__auto__){
return (function() {
var state_machine__8461__auto__ = null;
var state_machine__8461__auto____0 = (function (){var statearr_13499 = (new Array(9));(statearr_13499[0] = state_machine__8461__auto__);
(statearr_13499[1] = 1);
return statearr_13499;
});
var state_machine__8461__auto____1 = (function (state_13478){while(true){
var ret_value__8462__auto__ = (function (){try{while(true){
var result__8463__auto__ = switch__8460__auto__.call(null,state_13478);if(cljs.core.keyword_identical_QMARK_.call(null,result__8463__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8463__auto__;
}
break;
}
}catch (e13500){if((e13500 instanceof Object))
{var ex__8464__auto__ = e13500;var statearr_13501_13518 = state_13478;(statearr_13501_13518[5] = ex__8464__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13478);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13500;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8462__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13519 = state_13478;
state_13478 = G__13519;
continue;
}
} else
{return ret_value__8462__auto__;
}
break;
}
});
state_machine__8461__auto__ = function(state_13478){
switch(arguments.length){
case 0:
return state_machine__8461__auto____0.call(this);
case 1:
return state_machine__8461__auto____1.call(this,state_13478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8461__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8461__auto____0;
state_machine__8461__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8461__auto____1;
return state_machine__8461__auto__;
})()
;})(switch__8460__auto__))
})();var state__8561__auto__ = (function (){var statearr_13502 = f__8560__auto__.call(null);(statearr_13502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8559__auto___13503);
return statearr_13502;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8561__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__8559__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8560__auto__ = (function (){var switch__8460__auto__ = (function (state_13566){var state_val_13567 = (state_13566[1]);if((state_val_13567 === 7))
{var inst_13562 = (state_13566[2]);var state_13566__$1 = state_13566;var statearr_13568_13584 = state_13566__$1;(statearr_13568_13584[2] = inst_13562);
(statearr_13568_13584[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13567 === 6))
{var inst_13552 = (state_13566[7]);var inst_13555 = (state_13566[8]);var inst_13559 = f.call(null,inst_13552,inst_13555);var inst_13552__$1 = inst_13559;var state_13566__$1 = (function (){var statearr_13569 = state_13566;(statearr_13569[7] = inst_13552__$1);
return statearr_13569;
})();var statearr_13570_13585 = state_13566__$1;(statearr_13570_13585[2] = null);
(statearr_13570_13585[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13567 === 5))
{var inst_13552 = (state_13566[7]);var state_13566__$1 = state_13566;var statearr_13571_13586 = state_13566__$1;(statearr_13571_13586[2] = inst_13552);
(statearr_13571_13586[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13567 === 4))
{var inst_13555 = (state_13566[8]);var inst_13555__$1 = (state_13566[2]);var inst_13556 = (inst_13555__$1 == null);var state_13566__$1 = (function (){var statearr_13572 = state_13566;(statearr_13572[8] = inst_13555__$1);
return statearr_13572;
})();if(cljs.core.truth_(inst_13556))
{var statearr_13573_13587 = state_13566__$1;(statearr_13573_13587[1] = 5);
} else
{var statearr_13574_13588 = state_13566__$1;(statearr_13574_13588[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13567 === 3))
{var inst_13564 = (state_13566[2]);var state_13566__$1 = state_13566;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13566__$1,inst_13564);
} else
{if((state_val_13567 === 2))
{var state_13566__$1 = state_13566;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13566__$1,4,ch);
} else
{if((state_val_13567 === 1))
{var inst_13552 = init;var state_13566__$1 = (function (){var statearr_13575 = state_13566;(statearr_13575[7] = inst_13552);
return statearr_13575;
})();var statearr_13576_13589 = state_13566__$1;(statearr_13576_13589[2] = null);
(statearr_13576_13589[1] = 2);
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
});return ((function (switch__8460__auto__){
return (function() {
var state_machine__8461__auto__ = null;
var state_machine__8461__auto____0 = (function (){var statearr_13580 = (new Array(9));(statearr_13580[0] = state_machine__8461__auto__);
(statearr_13580[1] = 1);
return statearr_13580;
});
var state_machine__8461__auto____1 = (function (state_13566){while(true){
var ret_value__8462__auto__ = (function (){try{while(true){
var result__8463__auto__ = switch__8460__auto__.call(null,state_13566);if(cljs.core.keyword_identical_QMARK_.call(null,result__8463__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8463__auto__;
}
break;
}
}catch (e13581){if((e13581 instanceof Object))
{var ex__8464__auto__ = e13581;var statearr_13582_13590 = state_13566;(statearr_13582_13590[5] = ex__8464__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13566);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13581;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8462__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13591 = state_13566;
state_13566 = G__13591;
continue;
}
} else
{return ret_value__8462__auto__;
}
break;
}
});
state_machine__8461__auto__ = function(state_13566){
switch(arguments.length){
case 0:
return state_machine__8461__auto____0.call(this);
case 1:
return state_machine__8461__auto____1.call(this,state_13566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8461__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8461__auto____0;
state_machine__8461__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8461__auto____1;
return state_machine__8461__auto__;
})()
;})(switch__8460__auto__))
})();var state__8561__auto__ = (function (){var statearr_13583 = f__8560__auto__.call(null);(statearr_13583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8559__auto__);
return statearr_13583;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8561__auto__);
}));
return c__8559__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__8559__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8560__auto__ = (function (){var switch__8460__auto__ = (function (state_13665){var state_val_13666 = (state_13665[1]);if((state_val_13666 === 1))
{var inst_13641 = cljs.core.seq.call(null,coll);var inst_13642 = inst_13641;var state_13665__$1 = (function (){var statearr_13667 = state_13665;(statearr_13667[7] = inst_13642);
return statearr_13667;
})();var statearr_13668_13690 = state_13665__$1;(statearr_13668_13690[2] = null);
(statearr_13668_13690[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13666 === 2))
{var inst_13642 = (state_13665[7]);var state_13665__$1 = state_13665;if(cljs.core.truth_(inst_13642))
{var statearr_13669_13691 = state_13665__$1;(statearr_13669_13691[1] = 4);
} else
{var statearr_13670_13692 = state_13665__$1;(statearr_13670_13692[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13666 === 3))
{var inst_13663 = (state_13665[2]);var state_13665__$1 = state_13665;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13665__$1,inst_13663);
} else
{if((state_val_13666 === 4))
{var inst_13642 = (state_13665[7]);var inst_13645 = cljs.core.first.call(null,inst_13642);var state_13665__$1 = state_13665;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13665__$1,7,ch,inst_13645);
} else
{if((state_val_13666 === 5))
{var inst_13642 = (state_13665[7]);var state_13665__$1 = state_13665;var statearr_13671_13693 = state_13665__$1;(statearr_13671_13693[2] = inst_13642);
(statearr_13671_13693[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13666 === 6))
{var inst_13650 = (state_13665[2]);var state_13665__$1 = state_13665;if(cljs.core.truth_(inst_13650))
{var statearr_13672_13694 = state_13665__$1;(statearr_13672_13694[1] = 8);
} else
{var statearr_13673_13695 = state_13665__$1;(statearr_13673_13695[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13666 === 7))
{var inst_13647 = (state_13665[2]);var state_13665__$1 = state_13665;var statearr_13674_13696 = state_13665__$1;(statearr_13674_13696[2] = inst_13647);
(statearr_13674_13696[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13666 === 8))
{var inst_13642 = (state_13665[7]);var inst_13652 = cljs.core.next.call(null,inst_13642);var inst_13642__$1 = inst_13652;var state_13665__$1 = (function (){var statearr_13675 = state_13665;(statearr_13675[7] = inst_13642__$1);
return statearr_13675;
})();var statearr_13676_13697 = state_13665__$1;(statearr_13676_13697[2] = null);
(statearr_13676_13697[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13666 === 9))
{var state_13665__$1 = state_13665;if(cljs.core.truth_(close_QMARK_))
{var statearr_13677_13698 = state_13665__$1;(statearr_13677_13698[1] = 11);
} else
{var statearr_13678_13699 = state_13665__$1;(statearr_13678_13699[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13666 === 10))
{var inst_13661 = (state_13665[2]);var state_13665__$1 = state_13665;var statearr_13679_13700 = state_13665__$1;(statearr_13679_13700[2] = inst_13661);
(statearr_13679_13700[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13666 === 11))
{var inst_13656 = cljs.core.async.close_BANG_.call(null,ch);var state_13665__$1 = state_13665;var statearr_13680_13701 = state_13665__$1;(statearr_13680_13701[2] = inst_13656);
(statearr_13680_13701[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13666 === 12))
{var state_13665__$1 = state_13665;var statearr_13681_13702 = state_13665__$1;(statearr_13681_13702[2] = null);
(statearr_13681_13702[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13666 === 13))
{var inst_13659 = (state_13665[2]);var state_13665__$1 = state_13665;var statearr_13682_13703 = state_13665__$1;(statearr_13682_13703[2] = inst_13659);
(statearr_13682_13703[1] = 10);
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
});return ((function (switch__8460__auto__){
return (function() {
var state_machine__8461__auto__ = null;
var state_machine__8461__auto____0 = (function (){var statearr_13686 = (new Array(8));(statearr_13686[0] = state_machine__8461__auto__);
(statearr_13686[1] = 1);
return statearr_13686;
});
var state_machine__8461__auto____1 = (function (state_13665){while(true){
var ret_value__8462__auto__ = (function (){try{while(true){
var result__8463__auto__ = switch__8460__auto__.call(null,state_13665);if(cljs.core.keyword_identical_QMARK_.call(null,result__8463__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8463__auto__;
}
break;
}
}catch (e13687){if((e13687 instanceof Object))
{var ex__8464__auto__ = e13687;var statearr_13688_13704 = state_13665;(statearr_13688_13704[5] = ex__8464__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13665);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13687;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8462__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13705 = state_13665;
state_13665 = G__13705;
continue;
}
} else
{return ret_value__8462__auto__;
}
break;
}
});
state_machine__8461__auto__ = function(state_13665){
switch(arguments.length){
case 0:
return state_machine__8461__auto____0.call(this);
case 1:
return state_machine__8461__auto____1.call(this,state_13665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8461__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8461__auto____0;
state_machine__8461__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8461__auto____1;
return state_machine__8461__auto__;
})()
;})(switch__8460__auto__))
})();var state__8561__auto__ = (function (){var statearr_13689 = f__8560__auto__.call(null);(statearr_13689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8559__auto__);
return statearr_13689;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8561__auto__);
}));
return c__8559__auto__;
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
cljs.core.async.Mux = (function (){var obj13707 = {};return obj13707;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__4988__auto__ = _;if(and__4988__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__4988__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__5598__auto__ = (((_ == null))?null:_);return (function (){var or__5000__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5598__auto__)]);if(or__5000__auto__)
{return or__5000__auto__;
} else
{var or__5000__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__5000__auto____$1)
{return or__5000__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj13709 = {};return obj13709;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__4988__auto__ = m;if(and__4988__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__4988__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__5598__auto__ = (((m == null))?null:m);return (function (){var or__5000__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5598__auto__)]);if(or__5000__auto__)
{return or__5000__auto__;
} else
{var or__5000__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__5000__auto____$1)
{return or__5000__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__4988__auto__ = m;if(and__4988__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__4988__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__5598__auto__ = (((m == null))?null:m);return (function (){var or__5000__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5598__auto__)]);if(or__5000__auto__)
{return or__5000__auto__;
} else
{var or__5000__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__5000__auto____$1)
{return or__5000__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__4988__auto__ = m;if(and__4988__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__4988__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__5598__auto__ = (((m == null))?null:m);return (function (){var or__5000__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5598__auto__)]);if(or__5000__auto__)
{return or__5000__auto__;
} else
{var or__5000__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__5000__auto____$1)
{return or__5000__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13931 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13931 = (function (cs,ch,mult,meta13932){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13932 = meta13932;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13931.cljs$lang$type = true;
cljs.core.async.t13931.cljs$lang$ctorStr = "cljs.core.async/t13931";
cljs.core.async.t13931.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5539__auto__,writer__5540__auto__,opt__5541__auto__){return cljs.core._write.call(null,writer__5540__auto__,"cljs.core.async/t13931");
});})(cs))
;
cljs.core.async.t13931.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13931.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13931.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13931.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13931.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13931.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13931.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13933){var self__ = this;
var _13933__$1 = this;return self__.meta13932;
});})(cs))
;
cljs.core.async.t13931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13933,meta13932__$1){var self__ = this;
var _13933__$1 = this;return (new cljs.core.async.t13931(self__.cs,self__.ch,self__.mult,meta13932__$1));
});})(cs))
;
cljs.core.async.__GT_t13931 = ((function (cs){
return (function __GT_t13931(cs__$1,ch__$1,mult__$1,meta13932){return (new cljs.core.async.t13931(cs__$1,ch__$1,mult__$1,meta13932));
});})(cs))
;
}
return (new cljs.core.async.t13931(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__8559__auto___14152 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8560__auto__ = (function (){var switch__8460__auto__ = (function (state_14064){var state_val_14065 = (state_14064[1]);if((state_val_14065 === 32))
{var inst_14007 = (state_14064[7]);var inst_14006 = (state_14064[8]);var inst_14005 = (state_14064[9]);var inst_14004 = (state_14064[10]);var inst_14019 = (state_14064[2]);var inst_14020 = (inst_14007 + 1);var tmp14066 = inst_14006;var tmp14067 = inst_14005;var tmp14068 = inst_14004;var inst_14004__$1 = tmp14068;var inst_14005__$1 = tmp14067;var inst_14006__$1 = tmp14066;var inst_14007__$1 = inst_14020;var state_14064__$1 = (function (){var statearr_14069 = state_14064;(statearr_14069[7] = inst_14007__$1);
(statearr_14069[8] = inst_14006__$1);
(statearr_14069[9] = inst_14005__$1);
(statearr_14069[10] = inst_14004__$1);
(statearr_14069[11] = inst_14019);
return statearr_14069;
})();var statearr_14070_14153 = state_14064__$1;(statearr_14070_14153[2] = null);
(statearr_14070_14153[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 1))
{var state_14064__$1 = state_14064;var statearr_14071_14154 = state_14064__$1;(statearr_14071_14154[2] = null);
(statearr_14071_14154[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 33))
{var inst_14023 = (state_14064[12]);var inst_14025 = cljs.core.chunked_seq_QMARK_.call(null,inst_14023);var state_14064__$1 = state_14064;if(inst_14025)
{var statearr_14072_14155 = state_14064__$1;(statearr_14072_14155[1] = 36);
} else
{var statearr_14073_14156 = state_14064__$1;(statearr_14073_14156[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 2))
{var state_14064__$1 = state_14064;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14064__$1,4,ch);
} else
{if((state_val_14065 === 34))
{var state_14064__$1 = state_14064;var statearr_14074_14157 = state_14064__$1;(statearr_14074_14157[2] = null);
(statearr_14074_14157[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 3))
{var inst_14062 = (state_14064[2]);var state_14064__$1 = state_14064;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14064__$1,inst_14062);
} else
{if((state_val_14065 === 35))
{var inst_14046 = (state_14064[2]);var state_14064__$1 = state_14064;var statearr_14075_14158 = state_14064__$1;(statearr_14075_14158[2] = inst_14046);
(statearr_14075_14158[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 4))
{var inst_13936 = (state_14064[13]);var inst_13936__$1 = (state_14064[2]);var inst_13937 = (inst_13936__$1 == null);var state_14064__$1 = (function (){var statearr_14076 = state_14064;(statearr_14076[13] = inst_13936__$1);
return statearr_14076;
})();if(cljs.core.truth_(inst_13937))
{var statearr_14077_14159 = state_14064__$1;(statearr_14077_14159[1] = 5);
} else
{var statearr_14078_14160 = state_14064__$1;(statearr_14078_14160[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 36))
{var inst_14023 = (state_14064[12]);var inst_14027 = cljs.core.chunk_first.call(null,inst_14023);var inst_14028 = cljs.core.chunk_rest.call(null,inst_14023);var inst_14029 = cljs.core.count.call(null,inst_14027);var inst_14004 = inst_14028;var inst_14005 = inst_14027;var inst_14006 = inst_14029;var inst_14007 = 0;var state_14064__$1 = (function (){var statearr_14079 = state_14064;(statearr_14079[7] = inst_14007);
(statearr_14079[8] = inst_14006);
(statearr_14079[9] = inst_14005);
(statearr_14079[10] = inst_14004);
return statearr_14079;
})();var statearr_14080_14161 = state_14064__$1;(statearr_14080_14161[2] = null);
(statearr_14080_14161[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 5))
{var inst_13943 = cljs.core.deref.call(null,cs);var inst_13944 = cljs.core.seq.call(null,inst_13943);var inst_13945 = inst_13944;var inst_13946 = null;var inst_13947 = 0;var inst_13948 = 0;var state_14064__$1 = (function (){var statearr_14081 = state_14064;(statearr_14081[14] = inst_13945);
(statearr_14081[15] = inst_13947);
(statearr_14081[16] = inst_13946);
(statearr_14081[17] = inst_13948);
return statearr_14081;
})();var statearr_14082_14162 = state_14064__$1;(statearr_14082_14162[2] = null);
(statearr_14082_14162[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 37))
{var inst_13936 = (state_14064[13]);var inst_14023 = (state_14064[12]);var inst_14032 = (state_14064[18]);var inst_14032__$1 = cljs.core.first.call(null,inst_14023);var inst_14033 = cljs.core.async.put_BANG_.call(null,inst_14032__$1,inst_13936,done);var state_14064__$1 = (function (){var statearr_14083 = state_14064;(statearr_14083[18] = inst_14032__$1);
return statearr_14083;
})();if(cljs.core.truth_(inst_14033))
{var statearr_14084_14163 = state_14064__$1;(statearr_14084_14163[1] = 39);
} else
{var statearr_14085_14164 = state_14064__$1;(statearr_14085_14164[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 6))
{var inst_13996 = (state_14064[19]);var inst_13995 = cljs.core.deref.call(null,cs);var inst_13996__$1 = cljs.core.keys.call(null,inst_13995);var inst_13997 = cljs.core.count.call(null,inst_13996__$1);var inst_13998 = cljs.core.reset_BANG_.call(null,dctr,inst_13997);var inst_14003 = cljs.core.seq.call(null,inst_13996__$1);var inst_14004 = inst_14003;var inst_14005 = null;var inst_14006 = 0;var inst_14007 = 0;var state_14064__$1 = (function (){var statearr_14086 = state_14064;(statearr_14086[20] = inst_13998);
(statearr_14086[19] = inst_13996__$1);
(statearr_14086[7] = inst_14007);
(statearr_14086[8] = inst_14006);
(statearr_14086[9] = inst_14005);
(statearr_14086[10] = inst_14004);
return statearr_14086;
})();var statearr_14087_14165 = state_14064__$1;(statearr_14087_14165[2] = null);
(statearr_14087_14165[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 38))
{var inst_14043 = (state_14064[2]);var state_14064__$1 = state_14064;var statearr_14088_14166 = state_14064__$1;(statearr_14088_14166[2] = inst_14043);
(statearr_14088_14166[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 7))
{var inst_14060 = (state_14064[2]);var state_14064__$1 = state_14064;var statearr_14089_14167 = state_14064__$1;(statearr_14089_14167[2] = inst_14060);
(statearr_14089_14167[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 39))
{var state_14064__$1 = state_14064;var statearr_14090_14168 = state_14064__$1;(statearr_14090_14168[2] = null);
(statearr_14090_14168[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 8))
{var inst_13947 = (state_14064[15]);var inst_13948 = (state_14064[17]);var inst_13950 = (inst_13948 < inst_13947);var inst_13951 = inst_13950;var state_14064__$1 = state_14064;if(cljs.core.truth_(inst_13951))
{var statearr_14091_14169 = state_14064__$1;(statearr_14091_14169[1] = 10);
} else
{var statearr_14092_14170 = state_14064__$1;(statearr_14092_14170[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 40))
{var inst_14032 = (state_14064[18]);var inst_14036 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14037 = cljs.core.async.untap_STAR_.call(null,m,inst_14032);var state_14064__$1 = (function (){var statearr_14093 = state_14064;(statearr_14093[21] = inst_14036);
return statearr_14093;
})();var statearr_14094_14171 = state_14064__$1;(statearr_14094_14171[2] = inst_14037);
(statearr_14094_14171[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 9))
{var inst_13993 = (state_14064[2]);var state_14064__$1 = state_14064;var statearr_14095_14172 = state_14064__$1;(statearr_14095_14172[2] = inst_13993);
(statearr_14095_14172[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 41))
{var inst_14023 = (state_14064[12]);var inst_14039 = (state_14064[2]);var inst_14040 = cljs.core.next.call(null,inst_14023);var inst_14004 = inst_14040;var inst_14005 = null;var inst_14006 = 0;var inst_14007 = 0;var state_14064__$1 = (function (){var statearr_14096 = state_14064;(statearr_14096[7] = inst_14007);
(statearr_14096[8] = inst_14006);
(statearr_14096[9] = inst_14005);
(statearr_14096[10] = inst_14004);
(statearr_14096[22] = inst_14039);
return statearr_14096;
})();var statearr_14097_14173 = state_14064__$1;(statearr_14097_14173[2] = null);
(statearr_14097_14173[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 10))
{var inst_13946 = (state_14064[16]);var inst_13948 = (state_14064[17]);var inst_13954 = cljs.core._nth.call(null,inst_13946,inst_13948);var inst_13955 = cljs.core.nth.call(null,inst_13954,0,null);var inst_13956 = cljs.core.nth.call(null,inst_13954,1,null);var state_14064__$1 = (function (){var statearr_14098 = state_14064;(statearr_14098[23] = inst_13955);
return statearr_14098;
})();if(cljs.core.truth_(inst_13956))
{var statearr_14099_14174 = state_14064__$1;(statearr_14099_14174[1] = 13);
} else
{var statearr_14100_14175 = state_14064__$1;(statearr_14100_14175[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 42))
{var state_14064__$1 = state_14064;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14064__$1,45,dchan);
} else
{if((state_val_14065 === 11))
{var inst_13945 = (state_14064[14]);var inst_13965 = (state_14064[24]);var inst_13965__$1 = cljs.core.seq.call(null,inst_13945);var state_14064__$1 = (function (){var statearr_14101 = state_14064;(statearr_14101[24] = inst_13965__$1);
return statearr_14101;
})();if(inst_13965__$1)
{var statearr_14102_14176 = state_14064__$1;(statearr_14102_14176[1] = 16);
} else
{var statearr_14103_14177 = state_14064__$1;(statearr_14103_14177[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 43))
{var state_14064__$1 = state_14064;var statearr_14104_14178 = state_14064__$1;(statearr_14104_14178[2] = null);
(statearr_14104_14178[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 12))
{var inst_13991 = (state_14064[2]);var state_14064__$1 = state_14064;var statearr_14105_14179 = state_14064__$1;(statearr_14105_14179[2] = inst_13991);
(statearr_14105_14179[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 44))
{var inst_14057 = (state_14064[2]);var state_14064__$1 = (function (){var statearr_14106 = state_14064;(statearr_14106[25] = inst_14057);
return statearr_14106;
})();var statearr_14107_14180 = state_14064__$1;(statearr_14107_14180[2] = null);
(statearr_14107_14180[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 13))
{var inst_13955 = (state_14064[23]);var inst_13958 = cljs.core.async.close_BANG_.call(null,inst_13955);var state_14064__$1 = state_14064;var statearr_14108_14181 = state_14064__$1;(statearr_14108_14181[2] = inst_13958);
(statearr_14108_14181[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 45))
{var inst_14054 = (state_14064[2]);var state_14064__$1 = state_14064;var statearr_14112_14182 = state_14064__$1;(statearr_14112_14182[2] = inst_14054);
(statearr_14112_14182[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 14))
{var state_14064__$1 = state_14064;var statearr_14113_14183 = state_14064__$1;(statearr_14113_14183[2] = null);
(statearr_14113_14183[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 15))
{var inst_13945 = (state_14064[14]);var inst_13947 = (state_14064[15]);var inst_13946 = (state_14064[16]);var inst_13948 = (state_14064[17]);var inst_13961 = (state_14064[2]);var inst_13962 = (inst_13948 + 1);var tmp14109 = inst_13945;var tmp14110 = inst_13947;var tmp14111 = inst_13946;var inst_13945__$1 = tmp14109;var inst_13946__$1 = tmp14111;var inst_13947__$1 = tmp14110;var inst_13948__$1 = inst_13962;var state_14064__$1 = (function (){var statearr_14114 = state_14064;(statearr_14114[26] = inst_13961);
(statearr_14114[14] = inst_13945__$1);
(statearr_14114[15] = inst_13947__$1);
(statearr_14114[16] = inst_13946__$1);
(statearr_14114[17] = inst_13948__$1);
return statearr_14114;
})();var statearr_14115_14184 = state_14064__$1;(statearr_14115_14184[2] = null);
(statearr_14115_14184[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 16))
{var inst_13965 = (state_14064[24]);var inst_13967 = cljs.core.chunked_seq_QMARK_.call(null,inst_13965);var state_14064__$1 = state_14064;if(inst_13967)
{var statearr_14116_14185 = state_14064__$1;(statearr_14116_14185[1] = 19);
} else
{var statearr_14117_14186 = state_14064__$1;(statearr_14117_14186[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 17))
{var state_14064__$1 = state_14064;var statearr_14118_14187 = state_14064__$1;(statearr_14118_14187[2] = null);
(statearr_14118_14187[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 18))
{var inst_13989 = (state_14064[2]);var state_14064__$1 = state_14064;var statearr_14119_14188 = state_14064__$1;(statearr_14119_14188[2] = inst_13989);
(statearr_14119_14188[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 19))
{var inst_13965 = (state_14064[24]);var inst_13969 = cljs.core.chunk_first.call(null,inst_13965);var inst_13970 = cljs.core.chunk_rest.call(null,inst_13965);var inst_13971 = cljs.core.count.call(null,inst_13969);var inst_13945 = inst_13970;var inst_13946 = inst_13969;var inst_13947 = inst_13971;var inst_13948 = 0;var state_14064__$1 = (function (){var statearr_14120 = state_14064;(statearr_14120[14] = inst_13945);
(statearr_14120[15] = inst_13947);
(statearr_14120[16] = inst_13946);
(statearr_14120[17] = inst_13948);
return statearr_14120;
})();var statearr_14121_14189 = state_14064__$1;(statearr_14121_14189[2] = null);
(statearr_14121_14189[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 20))
{var inst_13965 = (state_14064[24]);var inst_13975 = cljs.core.first.call(null,inst_13965);var inst_13976 = cljs.core.nth.call(null,inst_13975,0,null);var inst_13977 = cljs.core.nth.call(null,inst_13975,1,null);var state_14064__$1 = (function (){var statearr_14122 = state_14064;(statearr_14122[27] = inst_13976);
return statearr_14122;
})();if(cljs.core.truth_(inst_13977))
{var statearr_14123_14190 = state_14064__$1;(statearr_14123_14190[1] = 22);
} else
{var statearr_14124_14191 = state_14064__$1;(statearr_14124_14191[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 21))
{var inst_13986 = (state_14064[2]);var state_14064__$1 = state_14064;var statearr_14125_14192 = state_14064__$1;(statearr_14125_14192[2] = inst_13986);
(statearr_14125_14192[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 22))
{var inst_13976 = (state_14064[27]);var inst_13979 = cljs.core.async.close_BANG_.call(null,inst_13976);var state_14064__$1 = state_14064;var statearr_14126_14193 = state_14064__$1;(statearr_14126_14193[2] = inst_13979);
(statearr_14126_14193[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 23))
{var state_14064__$1 = state_14064;var statearr_14127_14194 = state_14064__$1;(statearr_14127_14194[2] = null);
(statearr_14127_14194[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 24))
{var inst_13965 = (state_14064[24]);var inst_13982 = (state_14064[2]);var inst_13983 = cljs.core.next.call(null,inst_13965);var inst_13945 = inst_13983;var inst_13946 = null;var inst_13947 = 0;var inst_13948 = 0;var state_14064__$1 = (function (){var statearr_14128 = state_14064;(statearr_14128[14] = inst_13945);
(statearr_14128[15] = inst_13947);
(statearr_14128[16] = inst_13946);
(statearr_14128[17] = inst_13948);
(statearr_14128[28] = inst_13982);
return statearr_14128;
})();var statearr_14129_14195 = state_14064__$1;(statearr_14129_14195[2] = null);
(statearr_14129_14195[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 25))
{var inst_14007 = (state_14064[7]);var inst_14006 = (state_14064[8]);var inst_14009 = (inst_14007 < inst_14006);var inst_14010 = inst_14009;var state_14064__$1 = state_14064;if(cljs.core.truth_(inst_14010))
{var statearr_14130_14196 = state_14064__$1;(statearr_14130_14196[1] = 27);
} else
{var statearr_14131_14197 = state_14064__$1;(statearr_14131_14197[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 26))
{var inst_13996 = (state_14064[19]);var inst_14050 = (state_14064[2]);var inst_14051 = cljs.core.seq.call(null,inst_13996);var state_14064__$1 = (function (){var statearr_14132 = state_14064;(statearr_14132[29] = inst_14050);
return statearr_14132;
})();if(inst_14051)
{var statearr_14133_14198 = state_14064__$1;(statearr_14133_14198[1] = 42);
} else
{var statearr_14134_14199 = state_14064__$1;(statearr_14134_14199[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 27))
{var inst_13936 = (state_14064[13]);var inst_14012 = (state_14064[30]);var inst_14007 = (state_14064[7]);var inst_14005 = (state_14064[9]);var inst_14012__$1 = cljs.core._nth.call(null,inst_14005,inst_14007);var inst_14013 = cljs.core.async.put_BANG_.call(null,inst_14012__$1,inst_13936,done);var state_14064__$1 = (function (){var statearr_14135 = state_14064;(statearr_14135[30] = inst_14012__$1);
return statearr_14135;
})();if(cljs.core.truth_(inst_14013))
{var statearr_14136_14200 = state_14064__$1;(statearr_14136_14200[1] = 30);
} else
{var statearr_14137_14201 = state_14064__$1;(statearr_14137_14201[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 28))
{var inst_14004 = (state_14064[10]);var inst_14023 = (state_14064[12]);var inst_14023__$1 = cljs.core.seq.call(null,inst_14004);var state_14064__$1 = (function (){var statearr_14138 = state_14064;(statearr_14138[12] = inst_14023__$1);
return statearr_14138;
})();if(inst_14023__$1)
{var statearr_14139_14202 = state_14064__$1;(statearr_14139_14202[1] = 33);
} else
{var statearr_14140_14203 = state_14064__$1;(statearr_14140_14203[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 29))
{var inst_14048 = (state_14064[2]);var state_14064__$1 = state_14064;var statearr_14141_14204 = state_14064__$1;(statearr_14141_14204[2] = inst_14048);
(statearr_14141_14204[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 30))
{var state_14064__$1 = state_14064;var statearr_14142_14205 = state_14064__$1;(statearr_14142_14205[2] = null);
(statearr_14142_14205[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14065 === 31))
{var inst_14012 = (state_14064[30]);var inst_14016 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14017 = cljs.core.async.untap_STAR_.call(null,m,inst_14012);var state_14064__$1 = (function (){var statearr_14143 = state_14064;(statearr_14143[31] = inst_14016);
return statearr_14143;
})();var statearr_14144_14206 = state_14064__$1;(statearr_14144_14206[2] = inst_14017);
(statearr_14144_14206[1] = 32);
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
});return ((function (switch__8460__auto__){
return (function() {
var state_machine__8461__auto__ = null;
var state_machine__8461__auto____0 = (function (){var statearr_14148 = (new Array(32));(statearr_14148[0] = state_machine__8461__auto__);
(statearr_14148[1] = 1);
return statearr_14148;
});
var state_machine__8461__auto____1 = (function (state_14064){while(true){
var ret_value__8462__auto__ = (function (){try{while(true){
var result__8463__auto__ = switch__8460__auto__.call(null,state_14064);if(cljs.core.keyword_identical_QMARK_.call(null,result__8463__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8463__auto__;
}
break;
}
}catch (e14149){if((e14149 instanceof Object))
{var ex__8464__auto__ = e14149;var statearr_14150_14207 = state_14064;(statearr_14150_14207[5] = ex__8464__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14064);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14149;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8462__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14208 = state_14064;
state_14064 = G__14208;
continue;
}
} else
{return ret_value__8462__auto__;
}
break;
}
});
state_machine__8461__auto__ = function(state_14064){
switch(arguments.length){
case 0:
return state_machine__8461__auto____0.call(this);
case 1:
return state_machine__8461__auto____1.call(this,state_14064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8461__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8461__auto____0;
state_machine__8461__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8461__auto____1;
return state_machine__8461__auto__;
})()
;})(switch__8460__auto__))
})();var state__8561__auto__ = (function (){var statearr_14151 = f__8560__auto__.call(null);(statearr_14151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8559__auto___14152);
return statearr_14151;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8561__auto__);
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
cljs.core.async.Mix = (function (){var obj14210 = {};return obj14210;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__4988__auto__ = m;if(and__4988__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__4988__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__5598__auto__ = (((m == null))?null:m);return (function (){var or__5000__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5598__auto__)]);if(or__5000__auto__)
{return or__5000__auto__;
} else
{var or__5000__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__5000__auto____$1)
{return or__5000__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__4988__auto__ = m;if(and__4988__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__4988__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__5598__auto__ = (((m == null))?null:m);return (function (){var or__5000__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5598__auto__)]);if(or__5000__auto__)
{return or__5000__auto__;
} else
{var or__5000__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__5000__auto____$1)
{return or__5000__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__4988__auto__ = m;if(and__4988__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__4988__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__5598__auto__ = (((m == null))?null:m);return (function (){var or__5000__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5598__auto__)]);if(or__5000__auto__)
{return or__5000__auto__;
} else
{var or__5000__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__5000__auto____$1)
{return or__5000__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__4988__auto__ = m;if(and__4988__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__4988__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__5598__auto__ = (((m == null))?null:m);return (function (){var or__5000__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5598__auto__)]);if(or__5000__auto__)
{return or__5000__auto__;
} else
{var or__5000__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__5000__auto____$1)
{return or__5000__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__4988__auto__ = m;if(and__4988__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__4988__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__5598__auto__ = (((m == null))?null:m);return (function (){var or__5000__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5598__auto__)]);if(or__5000__auto__)
{return or__5000__auto__;
} else
{var or__5000__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__5000__auto____$1)
{return or__5000__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t14330 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14330 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta14331){
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
this.meta14331 = meta14331;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14330.cljs$lang$type = true;
cljs.core.async.t14330.cljs$lang$ctorStr = "cljs.core.async/t14330";
cljs.core.async.t14330.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5539__auto__,writer__5540__auto__,opt__5541__auto__){return cljs.core._write.call(null,writer__5540__auto__,"cljs.core.async/t14330");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14330.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14330.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14330.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14330.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14330.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14330.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14330.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14330.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14330.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14332){var self__ = this;
var _14332__$1 = this;return self__.meta14331;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14332,meta14331__$1){var self__ = this;
var _14332__$1 = this;return (new cljs.core.async.t14330(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta14331__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14330 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14330(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14331){return (new cljs.core.async.t14330(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14331));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14330(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__8559__auto___14449 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8560__auto__ = (function (){var switch__8460__auto__ = (function (state_14402){var state_val_14403 = (state_14402[1]);if((state_val_14403 === 1))
{var inst_14336 = (state_14402[7]);var inst_14336__$1 = calc_state.call(null);var inst_14337 = cljs.core.seq_QMARK_.call(null,inst_14336__$1);var state_14402__$1 = (function (){var statearr_14404 = state_14402;(statearr_14404[7] = inst_14336__$1);
return statearr_14404;
})();if(inst_14337)
{var statearr_14405_14450 = state_14402__$1;(statearr_14405_14450[1] = 2);
} else
{var statearr_14406_14451 = state_14402__$1;(statearr_14406_14451[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14403 === 2))
{var inst_14336 = (state_14402[7]);var inst_14339 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14336);var state_14402__$1 = state_14402;var statearr_14407_14452 = state_14402__$1;(statearr_14407_14452[2] = inst_14339);
(statearr_14407_14452[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14403 === 3))
{var inst_14336 = (state_14402[7]);var state_14402__$1 = state_14402;var statearr_14408_14453 = state_14402__$1;(statearr_14408_14453[2] = inst_14336);
(statearr_14408_14453[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14403 === 4))
{var inst_14336 = (state_14402[7]);var inst_14342 = (state_14402[2]);var inst_14343 = cljs.core.get.call(null,inst_14342,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14344 = cljs.core.get.call(null,inst_14342,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14345 = cljs.core.get.call(null,inst_14342,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_14346 = inst_14336;var state_14402__$1 = (function (){var statearr_14409 = state_14402;(statearr_14409[8] = inst_14343);
(statearr_14409[9] = inst_14344);
(statearr_14409[10] = inst_14346);
(statearr_14409[11] = inst_14345);
return statearr_14409;
})();var statearr_14410_14454 = state_14402__$1;(statearr_14410_14454[2] = null);
(statearr_14410_14454[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14403 === 5))
{var inst_14346 = (state_14402[10]);var inst_14349 = cljs.core.seq_QMARK_.call(null,inst_14346);var state_14402__$1 = state_14402;if(inst_14349)
{var statearr_14411_14455 = state_14402__$1;(statearr_14411_14455[1] = 7);
} else
{var statearr_14412_14456 = state_14402__$1;(statearr_14412_14456[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14403 === 6))
{var inst_14400 = (state_14402[2]);var state_14402__$1 = state_14402;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14402__$1,inst_14400);
} else
{if((state_val_14403 === 7))
{var inst_14346 = (state_14402[10]);var inst_14351 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14346);var state_14402__$1 = state_14402;var statearr_14413_14457 = state_14402__$1;(statearr_14413_14457[2] = inst_14351);
(statearr_14413_14457[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14403 === 8))
{var inst_14346 = (state_14402[10]);var state_14402__$1 = state_14402;var statearr_14414_14458 = state_14402__$1;(statearr_14414_14458[2] = inst_14346);
(statearr_14414_14458[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14403 === 9))
{var inst_14354 = (state_14402[12]);var inst_14354__$1 = (state_14402[2]);var inst_14355 = cljs.core.get.call(null,inst_14354__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14356 = cljs.core.get.call(null,inst_14354__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14357 = cljs.core.get.call(null,inst_14354__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_14402__$1 = (function (){var statearr_14415 = state_14402;(statearr_14415[13] = inst_14357);
(statearr_14415[14] = inst_14356);
(statearr_14415[12] = inst_14354__$1);
return statearr_14415;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14402__$1,10,inst_14355);
} else
{if((state_val_14403 === 10))
{var inst_14362 = (state_14402[15]);var inst_14361 = (state_14402[16]);var inst_14360 = (state_14402[2]);var inst_14361__$1 = cljs.core.nth.call(null,inst_14360,0,null);var inst_14362__$1 = cljs.core.nth.call(null,inst_14360,1,null);var inst_14363 = (inst_14361__$1 == null);var inst_14364 = cljs.core._EQ_.call(null,inst_14362__$1,change);var inst_14365 = (inst_14363) || (inst_14364);var state_14402__$1 = (function (){var statearr_14416 = state_14402;(statearr_14416[15] = inst_14362__$1);
(statearr_14416[16] = inst_14361__$1);
return statearr_14416;
})();if(cljs.core.truth_(inst_14365))
{var statearr_14417_14459 = state_14402__$1;(statearr_14417_14459[1] = 11);
} else
{var statearr_14418_14460 = state_14402__$1;(statearr_14418_14460[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14403 === 11))
{var inst_14361 = (state_14402[16]);var inst_14367 = (inst_14361 == null);var state_14402__$1 = state_14402;if(cljs.core.truth_(inst_14367))
{var statearr_14419_14461 = state_14402__$1;(statearr_14419_14461[1] = 14);
} else
{var statearr_14420_14462 = state_14402__$1;(statearr_14420_14462[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14403 === 12))
{var inst_14362 = (state_14402[15]);var inst_14376 = (state_14402[17]);var inst_14357 = (state_14402[13]);var inst_14376__$1 = inst_14357.call(null,inst_14362);var state_14402__$1 = (function (){var statearr_14421 = state_14402;(statearr_14421[17] = inst_14376__$1);
return statearr_14421;
})();if(cljs.core.truth_(inst_14376__$1))
{var statearr_14422_14463 = state_14402__$1;(statearr_14422_14463[1] = 17);
} else
{var statearr_14423_14464 = state_14402__$1;(statearr_14423_14464[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14403 === 13))
{var inst_14398 = (state_14402[2]);var state_14402__$1 = state_14402;var statearr_14424_14465 = state_14402__$1;(statearr_14424_14465[2] = inst_14398);
(statearr_14424_14465[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14403 === 14))
{var inst_14362 = (state_14402[15]);var inst_14369 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14362);var state_14402__$1 = state_14402;var statearr_14425_14466 = state_14402__$1;(statearr_14425_14466[2] = inst_14369);
(statearr_14425_14466[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14403 === 15))
{var state_14402__$1 = state_14402;var statearr_14426_14467 = state_14402__$1;(statearr_14426_14467[2] = null);
(statearr_14426_14467[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14403 === 16))
{var inst_14372 = (state_14402[2]);var inst_14373 = calc_state.call(null);var inst_14346 = inst_14373;var state_14402__$1 = (function (){var statearr_14427 = state_14402;(statearr_14427[18] = inst_14372);
(statearr_14427[10] = inst_14346);
return statearr_14427;
})();var statearr_14428_14468 = state_14402__$1;(statearr_14428_14468[2] = null);
(statearr_14428_14468[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14403 === 17))
{var inst_14376 = (state_14402[17]);var state_14402__$1 = state_14402;var statearr_14429_14469 = state_14402__$1;(statearr_14429_14469[2] = inst_14376);
(statearr_14429_14469[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14403 === 18))
{var inst_14362 = (state_14402[15]);var inst_14357 = (state_14402[13]);var inst_14356 = (state_14402[14]);var inst_14379 = cljs.core.empty_QMARK_.call(null,inst_14357);var inst_14380 = inst_14356.call(null,inst_14362);var inst_14381 = cljs.core.not.call(null,inst_14380);var inst_14382 = (inst_14379) && (inst_14381);var state_14402__$1 = state_14402;var statearr_14430_14470 = state_14402__$1;(statearr_14430_14470[2] = inst_14382);
(statearr_14430_14470[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14403 === 19))
{var inst_14384 = (state_14402[2]);var state_14402__$1 = state_14402;if(cljs.core.truth_(inst_14384))
{var statearr_14431_14471 = state_14402__$1;(statearr_14431_14471[1] = 20);
} else
{var statearr_14432_14472 = state_14402__$1;(statearr_14432_14472[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14403 === 20))
{var inst_14361 = (state_14402[16]);var state_14402__$1 = state_14402;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14402__$1,23,out,inst_14361);
} else
{if((state_val_14403 === 21))
{var inst_14354 = (state_14402[12]);var inst_14346 = inst_14354;var state_14402__$1 = (function (){var statearr_14433 = state_14402;(statearr_14433[10] = inst_14346);
return statearr_14433;
})();var statearr_14434_14473 = state_14402__$1;(statearr_14434_14473[2] = null);
(statearr_14434_14473[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14403 === 22))
{var inst_14396 = (state_14402[2]);var state_14402__$1 = state_14402;var statearr_14435_14474 = state_14402__$1;(statearr_14435_14474[2] = inst_14396);
(statearr_14435_14474[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14403 === 23))
{var inst_14387 = (state_14402[2]);var state_14402__$1 = state_14402;if(cljs.core.truth_(inst_14387))
{var statearr_14436_14475 = state_14402__$1;(statearr_14436_14475[1] = 24);
} else
{var statearr_14437_14476 = state_14402__$1;(statearr_14437_14476[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14403 === 24))
{var inst_14354 = (state_14402[12]);var inst_14346 = inst_14354;var state_14402__$1 = (function (){var statearr_14438 = state_14402;(statearr_14438[10] = inst_14346);
return statearr_14438;
})();var statearr_14439_14477 = state_14402__$1;(statearr_14439_14477[2] = null);
(statearr_14439_14477[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14403 === 25))
{var state_14402__$1 = state_14402;var statearr_14440_14478 = state_14402__$1;(statearr_14440_14478[2] = null);
(statearr_14440_14478[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14403 === 26))
{var inst_14392 = (state_14402[2]);var state_14402__$1 = state_14402;var statearr_14441_14479 = state_14402__$1;(statearr_14441_14479[2] = inst_14392);
(statearr_14441_14479[1] = 22);
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
});return ((function (switch__8460__auto__){
return (function() {
var state_machine__8461__auto__ = null;
var state_machine__8461__auto____0 = (function (){var statearr_14445 = (new Array(19));(statearr_14445[0] = state_machine__8461__auto__);
(statearr_14445[1] = 1);
return statearr_14445;
});
var state_machine__8461__auto____1 = (function (state_14402){while(true){
var ret_value__8462__auto__ = (function (){try{while(true){
var result__8463__auto__ = switch__8460__auto__.call(null,state_14402);if(cljs.core.keyword_identical_QMARK_.call(null,result__8463__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8463__auto__;
}
break;
}
}catch (e14446){if((e14446 instanceof Object))
{var ex__8464__auto__ = e14446;var statearr_14447_14480 = state_14402;(statearr_14447_14480[5] = ex__8464__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14402);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14446;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8462__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14481 = state_14402;
state_14402 = G__14481;
continue;
}
} else
{return ret_value__8462__auto__;
}
break;
}
});
state_machine__8461__auto__ = function(state_14402){
switch(arguments.length){
case 0:
return state_machine__8461__auto____0.call(this);
case 1:
return state_machine__8461__auto____1.call(this,state_14402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8461__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8461__auto____0;
state_machine__8461__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8461__auto____1;
return state_machine__8461__auto__;
})()
;})(switch__8460__auto__))
})();var state__8561__auto__ = (function (){var statearr_14448 = f__8560__auto__.call(null);(statearr_14448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8559__auto___14449);
return statearr_14448;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8561__auto__);
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
cljs.core.async.Pub = (function (){var obj14483 = {};return obj14483;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__4988__auto__ = p;if(and__4988__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__4988__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__5598__auto__ = (((p == null))?null:p);return (function (){var or__5000__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5598__auto__)]);if(or__5000__auto__)
{return or__5000__auto__;
} else
{var or__5000__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__5000__auto____$1)
{return or__5000__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__4988__auto__ = p;if(and__4988__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__4988__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__5598__auto__ = (((p == null))?null:p);return (function (){var or__5000__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5598__auto__)]);if(or__5000__auto__)
{return or__5000__auto__;
} else
{var or__5000__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__5000__auto____$1)
{return or__5000__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__4988__auto__ = p;if(and__4988__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__4988__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__5598__auto__ = (((p == null))?null:p);return (function (){var or__5000__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5598__auto__)]);if(or__5000__auto__)
{return or__5000__auto__;
} else
{var or__5000__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__5000__auto____$1)
{return or__5000__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__4988__auto__ = p;if(and__4988__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__4988__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__5598__auto__ = (((p == null))?null:p);return (function (){var or__5000__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5598__auto__)]);if(or__5000__auto__)
{return or__5000__auto__;
} else
{var or__5000__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__5000__auto____$1)
{return or__5000__auto____$1;
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
return (function (topic){var or__5000__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__5000__auto__))
{return or__5000__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__5000__auto__,mults){
return (function (p1__14484_SHARP_){if(cljs.core.truth_(p1__14484_SHARP_.call(null,topic)))
{return p1__14484_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14484_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5000__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14599 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14599 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14600){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14600 = meta14600;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14599.cljs$lang$type = true;
cljs.core.async.t14599.cljs$lang$ctorStr = "cljs.core.async/t14599";
cljs.core.async.t14599.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5539__auto__,writer__5540__auto__,opt__5541__auto__){return cljs.core._write.call(null,writer__5540__auto__,"cljs.core.async/t14599");
});})(mults,ensure_mult))
;
cljs.core.async.t14599.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14599.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14599.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14599.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14599.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14599.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14599.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14599.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14601){var self__ = this;
var _14601__$1 = this;return self__.meta14600;
});})(mults,ensure_mult))
;
cljs.core.async.t14599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14601,meta14600__$1){var self__ = this;
var _14601__$1 = this;return (new cljs.core.async.t14599(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14600__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14599 = ((function (mults,ensure_mult){
return (function __GT_t14599(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14600){return (new cljs.core.async.t14599(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14600));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14599(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__8559__auto___14713 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8560__auto__ = (function (){var switch__8460__auto__ = (function (state_14669){var state_val_14670 = (state_14669[1]);if((state_val_14670 === 1))
{var state_14669__$1 = state_14669;var statearr_14671_14714 = state_14669__$1;(statearr_14671_14714[2] = null);
(statearr_14671_14714[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14670 === 2))
{var state_14669__$1 = state_14669;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14669__$1,4,ch);
} else
{if((state_val_14670 === 3))
{var inst_14667 = (state_14669[2]);var state_14669__$1 = state_14669;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14669__$1,inst_14667);
} else
{if((state_val_14670 === 4))
{var inst_14604 = (state_14669[7]);var inst_14604__$1 = (state_14669[2]);var inst_14605 = (inst_14604__$1 == null);var state_14669__$1 = (function (){var statearr_14672 = state_14669;(statearr_14672[7] = inst_14604__$1);
return statearr_14672;
})();if(cljs.core.truth_(inst_14605))
{var statearr_14673_14715 = state_14669__$1;(statearr_14673_14715[1] = 5);
} else
{var statearr_14674_14716 = state_14669__$1;(statearr_14674_14716[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14670 === 5))
{var inst_14611 = cljs.core.deref.call(null,mults);var inst_14612 = cljs.core.vals.call(null,inst_14611);var inst_14613 = cljs.core.seq.call(null,inst_14612);var inst_14614 = inst_14613;var inst_14615 = null;var inst_14616 = 0;var inst_14617 = 0;var state_14669__$1 = (function (){var statearr_14675 = state_14669;(statearr_14675[8] = inst_14617);
(statearr_14675[9] = inst_14614);
(statearr_14675[10] = inst_14615);
(statearr_14675[11] = inst_14616);
return statearr_14675;
})();var statearr_14676_14717 = state_14669__$1;(statearr_14676_14717[2] = null);
(statearr_14676_14717[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14670 === 6))
{var inst_14604 = (state_14669[7]);var inst_14652 = (state_14669[12]);var inst_14652__$1 = topic_fn.call(null,inst_14604);var inst_14653 = cljs.core.deref.call(null,mults);var inst_14654 = cljs.core.get.call(null,inst_14653,inst_14652__$1);var inst_14655 = cljs.core.async.muxch_STAR_.call(null,inst_14654);var state_14669__$1 = (function (){var statearr_14677 = state_14669;(statearr_14677[12] = inst_14652__$1);
return statearr_14677;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14669__$1,19,inst_14655,inst_14604);
} else
{if((state_val_14670 === 7))
{var inst_14665 = (state_14669[2]);var state_14669__$1 = state_14669;var statearr_14678_14718 = state_14669__$1;(statearr_14678_14718[2] = inst_14665);
(statearr_14678_14718[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14670 === 8))
{var inst_14617 = (state_14669[8]);var inst_14616 = (state_14669[11]);var inst_14619 = (inst_14617 < inst_14616);var inst_14620 = inst_14619;var state_14669__$1 = state_14669;if(cljs.core.truth_(inst_14620))
{var statearr_14682_14719 = state_14669__$1;(statearr_14682_14719[1] = 10);
} else
{var statearr_14683_14720 = state_14669__$1;(statearr_14683_14720[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14670 === 9))
{var inst_14650 = (state_14669[2]);var state_14669__$1 = state_14669;var statearr_14684_14721 = state_14669__$1;(statearr_14684_14721[2] = inst_14650);
(statearr_14684_14721[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14670 === 10))
{var inst_14617 = (state_14669[8]);var inst_14614 = (state_14669[9]);var inst_14615 = (state_14669[10]);var inst_14616 = (state_14669[11]);var inst_14622 = cljs.core._nth.call(null,inst_14615,inst_14617);var inst_14623 = cljs.core.async.muxch_STAR_.call(null,inst_14622);var inst_14624 = cljs.core.async.close_BANG_.call(null,inst_14623);var inst_14625 = (inst_14617 + 1);var tmp14679 = inst_14614;var tmp14680 = inst_14615;var tmp14681 = inst_14616;var inst_14614__$1 = tmp14679;var inst_14615__$1 = tmp14680;var inst_14616__$1 = tmp14681;var inst_14617__$1 = inst_14625;var state_14669__$1 = (function (){var statearr_14685 = state_14669;(statearr_14685[8] = inst_14617__$1);
(statearr_14685[13] = inst_14624);
(statearr_14685[9] = inst_14614__$1);
(statearr_14685[10] = inst_14615__$1);
(statearr_14685[11] = inst_14616__$1);
return statearr_14685;
})();var statearr_14686_14722 = state_14669__$1;(statearr_14686_14722[2] = null);
(statearr_14686_14722[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14670 === 11))
{var inst_14628 = (state_14669[14]);var inst_14614 = (state_14669[9]);var inst_14628__$1 = cljs.core.seq.call(null,inst_14614);var state_14669__$1 = (function (){var statearr_14687 = state_14669;(statearr_14687[14] = inst_14628__$1);
return statearr_14687;
})();if(inst_14628__$1)
{var statearr_14688_14723 = state_14669__$1;(statearr_14688_14723[1] = 13);
} else
{var statearr_14689_14724 = state_14669__$1;(statearr_14689_14724[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14670 === 12))
{var inst_14648 = (state_14669[2]);var state_14669__$1 = state_14669;var statearr_14690_14725 = state_14669__$1;(statearr_14690_14725[2] = inst_14648);
(statearr_14690_14725[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14670 === 13))
{var inst_14628 = (state_14669[14]);var inst_14630 = cljs.core.chunked_seq_QMARK_.call(null,inst_14628);var state_14669__$1 = state_14669;if(inst_14630)
{var statearr_14691_14726 = state_14669__$1;(statearr_14691_14726[1] = 16);
} else
{var statearr_14692_14727 = state_14669__$1;(statearr_14692_14727[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14670 === 14))
{var state_14669__$1 = state_14669;var statearr_14693_14728 = state_14669__$1;(statearr_14693_14728[2] = null);
(statearr_14693_14728[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14670 === 15))
{var inst_14646 = (state_14669[2]);var state_14669__$1 = state_14669;var statearr_14694_14729 = state_14669__$1;(statearr_14694_14729[2] = inst_14646);
(statearr_14694_14729[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14670 === 16))
{var inst_14628 = (state_14669[14]);var inst_14632 = cljs.core.chunk_first.call(null,inst_14628);var inst_14633 = cljs.core.chunk_rest.call(null,inst_14628);var inst_14634 = cljs.core.count.call(null,inst_14632);var inst_14614 = inst_14633;var inst_14615 = inst_14632;var inst_14616 = inst_14634;var inst_14617 = 0;var state_14669__$1 = (function (){var statearr_14695 = state_14669;(statearr_14695[8] = inst_14617);
(statearr_14695[9] = inst_14614);
(statearr_14695[10] = inst_14615);
(statearr_14695[11] = inst_14616);
return statearr_14695;
})();var statearr_14696_14730 = state_14669__$1;(statearr_14696_14730[2] = null);
(statearr_14696_14730[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14670 === 17))
{var inst_14628 = (state_14669[14]);var inst_14637 = cljs.core.first.call(null,inst_14628);var inst_14638 = cljs.core.async.muxch_STAR_.call(null,inst_14637);var inst_14639 = cljs.core.async.close_BANG_.call(null,inst_14638);var inst_14640 = cljs.core.next.call(null,inst_14628);var inst_14614 = inst_14640;var inst_14615 = null;var inst_14616 = 0;var inst_14617 = 0;var state_14669__$1 = (function (){var statearr_14697 = state_14669;(statearr_14697[8] = inst_14617);
(statearr_14697[15] = inst_14639);
(statearr_14697[9] = inst_14614);
(statearr_14697[10] = inst_14615);
(statearr_14697[11] = inst_14616);
return statearr_14697;
})();var statearr_14698_14731 = state_14669__$1;(statearr_14698_14731[2] = null);
(statearr_14698_14731[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14670 === 18))
{var inst_14643 = (state_14669[2]);var state_14669__$1 = state_14669;var statearr_14699_14732 = state_14669__$1;(statearr_14699_14732[2] = inst_14643);
(statearr_14699_14732[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14670 === 19))
{var inst_14657 = (state_14669[2]);var state_14669__$1 = state_14669;if(cljs.core.truth_(inst_14657))
{var statearr_14700_14733 = state_14669__$1;(statearr_14700_14733[1] = 20);
} else
{var statearr_14701_14734 = state_14669__$1;(statearr_14701_14734[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14670 === 20))
{var state_14669__$1 = state_14669;var statearr_14702_14735 = state_14669__$1;(statearr_14702_14735[2] = null);
(statearr_14702_14735[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14670 === 21))
{var inst_14652 = (state_14669[12]);var inst_14660 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14652);var state_14669__$1 = state_14669;var statearr_14703_14736 = state_14669__$1;(statearr_14703_14736[2] = inst_14660);
(statearr_14703_14736[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14670 === 22))
{var inst_14662 = (state_14669[2]);var state_14669__$1 = (function (){var statearr_14704 = state_14669;(statearr_14704[16] = inst_14662);
return statearr_14704;
})();var statearr_14705_14737 = state_14669__$1;(statearr_14705_14737[2] = null);
(statearr_14705_14737[1] = 2);
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
});return ((function (switch__8460__auto__){
return (function() {
var state_machine__8461__auto__ = null;
var state_machine__8461__auto____0 = (function (){var statearr_14709 = (new Array(17));(statearr_14709[0] = state_machine__8461__auto__);
(statearr_14709[1] = 1);
return statearr_14709;
});
var state_machine__8461__auto____1 = (function (state_14669){while(true){
var ret_value__8462__auto__ = (function (){try{while(true){
var result__8463__auto__ = switch__8460__auto__.call(null,state_14669);if(cljs.core.keyword_identical_QMARK_.call(null,result__8463__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8463__auto__;
}
break;
}
}catch (e14710){if((e14710 instanceof Object))
{var ex__8464__auto__ = e14710;var statearr_14711_14738 = state_14669;(statearr_14711_14738[5] = ex__8464__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14669);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14710;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8462__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14739 = state_14669;
state_14669 = G__14739;
continue;
}
} else
{return ret_value__8462__auto__;
}
break;
}
});
state_machine__8461__auto__ = function(state_14669){
switch(arguments.length){
case 0:
return state_machine__8461__auto____0.call(this);
case 1:
return state_machine__8461__auto____1.call(this,state_14669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8461__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8461__auto____0;
state_machine__8461__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8461__auto____1;
return state_machine__8461__auto__;
})()
;})(switch__8460__auto__))
})();var state__8561__auto__ = (function (){var statearr_14712 = f__8560__auto__.call(null);(statearr_14712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8559__auto___14713);
return statearr_14712;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8561__auto__);
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
,cljs.core.range.call(null,cnt));var c__8559__auto___14876 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8560__auto__ = (function (){var switch__8460__auto__ = (function (state_14846){var state_val_14847 = (state_14846[1]);if((state_val_14847 === 1))
{var state_14846__$1 = state_14846;var statearr_14848_14877 = state_14846__$1;(statearr_14848_14877[2] = null);
(statearr_14848_14877[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14847 === 2))
{var inst_14809 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14810 = 0;var state_14846__$1 = (function (){var statearr_14849 = state_14846;(statearr_14849[7] = inst_14810);
(statearr_14849[8] = inst_14809);
return statearr_14849;
})();var statearr_14850_14878 = state_14846__$1;(statearr_14850_14878[2] = null);
(statearr_14850_14878[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14847 === 3))
{var inst_14844 = (state_14846[2]);var state_14846__$1 = state_14846;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14846__$1,inst_14844);
} else
{if((state_val_14847 === 4))
{var inst_14810 = (state_14846[7]);var inst_14812 = (inst_14810 < cnt);var state_14846__$1 = state_14846;if(cljs.core.truth_(inst_14812))
{var statearr_14851_14879 = state_14846__$1;(statearr_14851_14879[1] = 6);
} else
{var statearr_14852_14880 = state_14846__$1;(statearr_14852_14880[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14847 === 5))
{var inst_14830 = (state_14846[2]);var state_14846__$1 = (function (){var statearr_14853 = state_14846;(statearr_14853[9] = inst_14830);
return statearr_14853;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14846__$1,12,dchan);
} else
{if((state_val_14847 === 6))
{var state_14846__$1 = state_14846;var statearr_14854_14881 = state_14846__$1;(statearr_14854_14881[2] = null);
(statearr_14854_14881[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14847 === 7))
{var state_14846__$1 = state_14846;var statearr_14855_14882 = state_14846__$1;(statearr_14855_14882[2] = null);
(statearr_14855_14882[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14847 === 8))
{var inst_14828 = (state_14846[2]);var state_14846__$1 = state_14846;var statearr_14856_14883 = state_14846__$1;(statearr_14856_14883[2] = inst_14828);
(statearr_14856_14883[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14847 === 9))
{var inst_14810 = (state_14846[7]);var inst_14823 = (state_14846[2]);var inst_14824 = (inst_14810 + 1);var inst_14810__$1 = inst_14824;var state_14846__$1 = (function (){var statearr_14857 = state_14846;(statearr_14857[7] = inst_14810__$1);
(statearr_14857[10] = inst_14823);
return statearr_14857;
})();var statearr_14858_14884 = state_14846__$1;(statearr_14858_14884[2] = null);
(statearr_14858_14884[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14847 === 10))
{var inst_14814 = (state_14846[2]);var inst_14815 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14846__$1 = (function (){var statearr_14859 = state_14846;(statearr_14859[11] = inst_14814);
return statearr_14859;
})();var statearr_14860_14885 = state_14846__$1;(statearr_14860_14885[2] = inst_14815);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14846__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14847 === 11))
{var inst_14810 = (state_14846[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14846,10,Object,null,9);var inst_14819 = chs__$1.call(null,inst_14810);var inst_14820 = done.call(null,inst_14810);var inst_14821 = cljs.core.async.take_BANG_.call(null,inst_14819,inst_14820);var state_14846__$1 = state_14846;var statearr_14861_14886 = state_14846__$1;(statearr_14861_14886[2] = inst_14821);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14846__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14847 === 12))
{var inst_14832 = (state_14846[12]);var inst_14832__$1 = (state_14846[2]);var inst_14833 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14832__$1);var state_14846__$1 = (function (){var statearr_14862 = state_14846;(statearr_14862[12] = inst_14832__$1);
return statearr_14862;
})();if(cljs.core.truth_(inst_14833))
{var statearr_14863_14887 = state_14846__$1;(statearr_14863_14887[1] = 13);
} else
{var statearr_14864_14888 = state_14846__$1;(statearr_14864_14888[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14847 === 13))
{var inst_14835 = cljs.core.async.close_BANG_.call(null,out);var state_14846__$1 = state_14846;var statearr_14865_14889 = state_14846__$1;(statearr_14865_14889[2] = inst_14835);
(statearr_14865_14889[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14847 === 14))
{var inst_14832 = (state_14846[12]);var inst_14837 = cljs.core.apply.call(null,f,inst_14832);var state_14846__$1 = state_14846;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14846__$1,16,out,inst_14837);
} else
{if((state_val_14847 === 15))
{var inst_14842 = (state_14846[2]);var state_14846__$1 = state_14846;var statearr_14866_14890 = state_14846__$1;(statearr_14866_14890[2] = inst_14842);
(statearr_14866_14890[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14847 === 16))
{var inst_14839 = (state_14846[2]);var state_14846__$1 = (function (){var statearr_14867 = state_14846;(statearr_14867[13] = inst_14839);
return statearr_14867;
})();var statearr_14868_14891 = state_14846__$1;(statearr_14868_14891[2] = null);
(statearr_14868_14891[1] = 2);
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
});return ((function (switch__8460__auto__){
return (function() {
var state_machine__8461__auto__ = null;
var state_machine__8461__auto____0 = (function (){var statearr_14872 = (new Array(14));(statearr_14872[0] = state_machine__8461__auto__);
(statearr_14872[1] = 1);
return statearr_14872;
});
var state_machine__8461__auto____1 = (function (state_14846){while(true){
var ret_value__8462__auto__ = (function (){try{while(true){
var result__8463__auto__ = switch__8460__auto__.call(null,state_14846);if(cljs.core.keyword_identical_QMARK_.call(null,result__8463__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8463__auto__;
}
break;
}
}catch (e14873){if((e14873 instanceof Object))
{var ex__8464__auto__ = e14873;var statearr_14874_14892 = state_14846;(statearr_14874_14892[5] = ex__8464__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14846);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14873;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8462__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14893 = state_14846;
state_14846 = G__14893;
continue;
}
} else
{return ret_value__8462__auto__;
}
break;
}
});
state_machine__8461__auto__ = function(state_14846){
switch(arguments.length){
case 0:
return state_machine__8461__auto____0.call(this);
case 1:
return state_machine__8461__auto____1.call(this,state_14846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8461__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8461__auto____0;
state_machine__8461__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8461__auto____1;
return state_machine__8461__auto__;
})()
;})(switch__8460__auto__))
})();var state__8561__auto__ = (function (){var statearr_14875 = f__8560__auto__.call(null);(statearr_14875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8559__auto___14876);
return statearr_14875;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8561__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8559__auto___15001 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8560__auto__ = (function (){var switch__8460__auto__ = (function (state_14977){var state_val_14978 = (state_14977[1]);if((state_val_14978 === 1))
{var inst_14948 = cljs.core.vec.call(null,chs);var inst_14949 = inst_14948;var state_14977__$1 = (function (){var statearr_14979 = state_14977;(statearr_14979[7] = inst_14949);
return statearr_14979;
})();var statearr_14980_15002 = state_14977__$1;(statearr_14980_15002[2] = null);
(statearr_14980_15002[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14978 === 2))
{var inst_14949 = (state_14977[7]);var inst_14951 = cljs.core.count.call(null,inst_14949);var inst_14952 = (inst_14951 > 0);var state_14977__$1 = state_14977;if(cljs.core.truth_(inst_14952))
{var statearr_14981_15003 = state_14977__$1;(statearr_14981_15003[1] = 4);
} else
{var statearr_14982_15004 = state_14977__$1;(statearr_14982_15004[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14978 === 3))
{var inst_14975 = (state_14977[2]);var state_14977__$1 = state_14977;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14977__$1,inst_14975);
} else
{if((state_val_14978 === 4))
{var inst_14949 = (state_14977[7]);var state_14977__$1 = state_14977;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14977__$1,7,inst_14949);
} else
{if((state_val_14978 === 5))
{var inst_14971 = cljs.core.async.close_BANG_.call(null,out);var state_14977__$1 = state_14977;var statearr_14983_15005 = state_14977__$1;(statearr_14983_15005[2] = inst_14971);
(statearr_14983_15005[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14978 === 6))
{var inst_14973 = (state_14977[2]);var state_14977__$1 = state_14977;var statearr_14984_15006 = state_14977__$1;(statearr_14984_15006[2] = inst_14973);
(statearr_14984_15006[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14978 === 7))
{var inst_14956 = (state_14977[8]);var inst_14957 = (state_14977[9]);var inst_14956__$1 = (state_14977[2]);var inst_14957__$1 = cljs.core.nth.call(null,inst_14956__$1,0,null);var inst_14958 = cljs.core.nth.call(null,inst_14956__$1,1,null);var inst_14959 = (inst_14957__$1 == null);var state_14977__$1 = (function (){var statearr_14985 = state_14977;(statearr_14985[8] = inst_14956__$1);
(statearr_14985[9] = inst_14957__$1);
(statearr_14985[10] = inst_14958);
return statearr_14985;
})();if(cljs.core.truth_(inst_14959))
{var statearr_14986_15007 = state_14977__$1;(statearr_14986_15007[1] = 8);
} else
{var statearr_14987_15008 = state_14977__$1;(statearr_14987_15008[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14978 === 8))
{var inst_14949 = (state_14977[7]);var inst_14956 = (state_14977[8]);var inst_14957 = (state_14977[9]);var inst_14958 = (state_14977[10]);var inst_14961 = (function (){var c = inst_14958;var v = inst_14957;var vec__14954 = inst_14956;var cs = inst_14949;return ((function (c,v,vec__14954,cs,inst_14949,inst_14956,inst_14957,inst_14958,state_val_14978){
return (function (p1__14894_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14894_SHARP_);
});
;})(c,v,vec__14954,cs,inst_14949,inst_14956,inst_14957,inst_14958,state_val_14978))
})();var inst_14962 = cljs.core.filterv.call(null,inst_14961,inst_14949);var inst_14949__$1 = inst_14962;var state_14977__$1 = (function (){var statearr_14988 = state_14977;(statearr_14988[7] = inst_14949__$1);
return statearr_14988;
})();var statearr_14989_15009 = state_14977__$1;(statearr_14989_15009[2] = null);
(statearr_14989_15009[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14978 === 9))
{var inst_14957 = (state_14977[9]);var state_14977__$1 = state_14977;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14977__$1,11,out,inst_14957);
} else
{if((state_val_14978 === 10))
{var inst_14969 = (state_14977[2]);var state_14977__$1 = state_14977;var statearr_14991_15010 = state_14977__$1;(statearr_14991_15010[2] = inst_14969);
(statearr_14991_15010[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14978 === 11))
{var inst_14949 = (state_14977[7]);var inst_14966 = (state_14977[2]);var tmp14990 = inst_14949;var inst_14949__$1 = tmp14990;var state_14977__$1 = (function (){var statearr_14992 = state_14977;(statearr_14992[11] = inst_14966);
(statearr_14992[7] = inst_14949__$1);
return statearr_14992;
})();var statearr_14993_15011 = state_14977__$1;(statearr_14993_15011[2] = null);
(statearr_14993_15011[1] = 2);
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
});return ((function (switch__8460__auto__){
return (function() {
var state_machine__8461__auto__ = null;
var state_machine__8461__auto____0 = (function (){var statearr_14997 = (new Array(12));(statearr_14997[0] = state_machine__8461__auto__);
(statearr_14997[1] = 1);
return statearr_14997;
});
var state_machine__8461__auto____1 = (function (state_14977){while(true){
var ret_value__8462__auto__ = (function (){try{while(true){
var result__8463__auto__ = switch__8460__auto__.call(null,state_14977);if(cljs.core.keyword_identical_QMARK_.call(null,result__8463__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8463__auto__;
}
break;
}
}catch (e14998){if((e14998 instanceof Object))
{var ex__8464__auto__ = e14998;var statearr_14999_15012 = state_14977;(statearr_14999_15012[5] = ex__8464__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14977);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14998;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8462__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15013 = state_14977;
state_14977 = G__15013;
continue;
}
} else
{return ret_value__8462__auto__;
}
break;
}
});
state_machine__8461__auto__ = function(state_14977){
switch(arguments.length){
case 0:
return state_machine__8461__auto____0.call(this);
case 1:
return state_machine__8461__auto____1.call(this,state_14977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8461__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8461__auto____0;
state_machine__8461__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8461__auto____1;
return state_machine__8461__auto__;
})()
;})(switch__8460__auto__))
})();var state__8561__auto__ = (function (){var statearr_15000 = f__8560__auto__.call(null);(statearr_15000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8559__auto___15001);
return statearr_15000;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8561__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8559__auto___15106 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8560__auto__ = (function (){var switch__8460__auto__ = (function (state_15083){var state_val_15084 = (state_15083[1]);if((state_val_15084 === 1))
{var inst_15060 = 0;var state_15083__$1 = (function (){var statearr_15085 = state_15083;(statearr_15085[7] = inst_15060);
return statearr_15085;
})();var statearr_15086_15107 = state_15083__$1;(statearr_15086_15107[2] = null);
(statearr_15086_15107[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15084 === 2))
{var inst_15060 = (state_15083[7]);var inst_15062 = (inst_15060 < n);var state_15083__$1 = state_15083;if(cljs.core.truth_(inst_15062))
{var statearr_15087_15108 = state_15083__$1;(statearr_15087_15108[1] = 4);
} else
{var statearr_15088_15109 = state_15083__$1;(statearr_15088_15109[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15084 === 3))
{var inst_15080 = (state_15083[2]);var inst_15081 = cljs.core.async.close_BANG_.call(null,out);var state_15083__$1 = (function (){var statearr_15089 = state_15083;(statearr_15089[8] = inst_15080);
return statearr_15089;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15083__$1,inst_15081);
} else
{if((state_val_15084 === 4))
{var state_15083__$1 = state_15083;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15083__$1,7,ch);
} else
{if((state_val_15084 === 5))
{var state_15083__$1 = state_15083;var statearr_15090_15110 = state_15083__$1;(statearr_15090_15110[2] = null);
(statearr_15090_15110[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15084 === 6))
{var inst_15078 = (state_15083[2]);var state_15083__$1 = state_15083;var statearr_15091_15111 = state_15083__$1;(statearr_15091_15111[2] = inst_15078);
(statearr_15091_15111[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15084 === 7))
{var inst_15065 = (state_15083[9]);var inst_15065__$1 = (state_15083[2]);var inst_15066 = (inst_15065__$1 == null);var inst_15067 = cljs.core.not.call(null,inst_15066);var state_15083__$1 = (function (){var statearr_15092 = state_15083;(statearr_15092[9] = inst_15065__$1);
return statearr_15092;
})();if(inst_15067)
{var statearr_15093_15112 = state_15083__$1;(statearr_15093_15112[1] = 8);
} else
{var statearr_15094_15113 = state_15083__$1;(statearr_15094_15113[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15084 === 8))
{var inst_15065 = (state_15083[9]);var state_15083__$1 = state_15083;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15083__$1,11,out,inst_15065);
} else
{if((state_val_15084 === 9))
{var state_15083__$1 = state_15083;var statearr_15095_15114 = state_15083__$1;(statearr_15095_15114[2] = null);
(statearr_15095_15114[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15084 === 10))
{var inst_15075 = (state_15083[2]);var state_15083__$1 = state_15083;var statearr_15096_15115 = state_15083__$1;(statearr_15096_15115[2] = inst_15075);
(statearr_15096_15115[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15084 === 11))
{var inst_15060 = (state_15083[7]);var inst_15070 = (state_15083[2]);var inst_15071 = (inst_15060 + 1);var inst_15060__$1 = inst_15071;var state_15083__$1 = (function (){var statearr_15097 = state_15083;(statearr_15097[10] = inst_15070);
(statearr_15097[7] = inst_15060__$1);
return statearr_15097;
})();var statearr_15098_15116 = state_15083__$1;(statearr_15098_15116[2] = null);
(statearr_15098_15116[1] = 2);
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
});return ((function (switch__8460__auto__){
return (function() {
var state_machine__8461__auto__ = null;
var state_machine__8461__auto____0 = (function (){var statearr_15102 = (new Array(11));(statearr_15102[0] = state_machine__8461__auto__);
(statearr_15102[1] = 1);
return statearr_15102;
});
var state_machine__8461__auto____1 = (function (state_15083){while(true){
var ret_value__8462__auto__ = (function (){try{while(true){
var result__8463__auto__ = switch__8460__auto__.call(null,state_15083);if(cljs.core.keyword_identical_QMARK_.call(null,result__8463__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8463__auto__;
}
break;
}
}catch (e15103){if((e15103 instanceof Object))
{var ex__8464__auto__ = e15103;var statearr_15104_15117 = state_15083;(statearr_15104_15117[5] = ex__8464__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15083);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15103;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8462__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15118 = state_15083;
state_15083 = G__15118;
continue;
}
} else
{return ret_value__8462__auto__;
}
break;
}
});
state_machine__8461__auto__ = function(state_15083){
switch(arguments.length){
case 0:
return state_machine__8461__auto____0.call(this);
case 1:
return state_machine__8461__auto____1.call(this,state_15083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8461__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8461__auto____0;
state_machine__8461__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8461__auto____1;
return state_machine__8461__auto__;
})()
;})(switch__8460__auto__))
})();var state__8561__auto__ = (function (){var statearr_15105 = f__8560__auto__.call(null);(statearr_15105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8559__auto___15106);
return statearr_15105;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8561__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8559__auto___15215 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8560__auto__ = (function (){var switch__8460__auto__ = (function (state_15190){var state_val_15191 = (state_15190[1]);if((state_val_15191 === 1))
{var inst_15167 = null;var state_15190__$1 = (function (){var statearr_15192 = state_15190;(statearr_15192[7] = inst_15167);
return statearr_15192;
})();var statearr_15193_15216 = state_15190__$1;(statearr_15193_15216[2] = null);
(statearr_15193_15216[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15191 === 2))
{var state_15190__$1 = state_15190;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15190__$1,4,ch);
} else
{if((state_val_15191 === 3))
{var inst_15187 = (state_15190[2]);var inst_15188 = cljs.core.async.close_BANG_.call(null,out);var state_15190__$1 = (function (){var statearr_15194 = state_15190;(statearr_15194[8] = inst_15187);
return statearr_15194;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15190__$1,inst_15188);
} else
{if((state_val_15191 === 4))
{var inst_15170 = (state_15190[9]);var inst_15170__$1 = (state_15190[2]);var inst_15171 = (inst_15170__$1 == null);var inst_15172 = cljs.core.not.call(null,inst_15171);var state_15190__$1 = (function (){var statearr_15195 = state_15190;(statearr_15195[9] = inst_15170__$1);
return statearr_15195;
})();if(inst_15172)
{var statearr_15196_15217 = state_15190__$1;(statearr_15196_15217[1] = 5);
} else
{var statearr_15197_15218 = state_15190__$1;(statearr_15197_15218[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15191 === 5))
{var inst_15170 = (state_15190[9]);var inst_15167 = (state_15190[7]);var inst_15174 = cljs.core._EQ_.call(null,inst_15170,inst_15167);var state_15190__$1 = state_15190;if(inst_15174)
{var statearr_15198_15219 = state_15190__$1;(statearr_15198_15219[1] = 8);
} else
{var statearr_15199_15220 = state_15190__$1;(statearr_15199_15220[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15191 === 6))
{var state_15190__$1 = state_15190;var statearr_15201_15221 = state_15190__$1;(statearr_15201_15221[2] = null);
(statearr_15201_15221[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15191 === 7))
{var inst_15185 = (state_15190[2]);var state_15190__$1 = state_15190;var statearr_15202_15222 = state_15190__$1;(statearr_15202_15222[2] = inst_15185);
(statearr_15202_15222[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15191 === 8))
{var inst_15167 = (state_15190[7]);var tmp15200 = inst_15167;var inst_15167__$1 = tmp15200;var state_15190__$1 = (function (){var statearr_15203 = state_15190;(statearr_15203[7] = inst_15167__$1);
return statearr_15203;
})();var statearr_15204_15223 = state_15190__$1;(statearr_15204_15223[2] = null);
(statearr_15204_15223[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15191 === 9))
{var inst_15170 = (state_15190[9]);var state_15190__$1 = state_15190;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15190__$1,11,out,inst_15170);
} else
{if((state_val_15191 === 10))
{var inst_15182 = (state_15190[2]);var state_15190__$1 = state_15190;var statearr_15205_15224 = state_15190__$1;(statearr_15205_15224[2] = inst_15182);
(statearr_15205_15224[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15191 === 11))
{var inst_15170 = (state_15190[9]);var inst_15179 = (state_15190[2]);var inst_15167 = inst_15170;var state_15190__$1 = (function (){var statearr_15206 = state_15190;(statearr_15206[10] = inst_15179);
(statearr_15206[7] = inst_15167);
return statearr_15206;
})();var statearr_15207_15225 = state_15190__$1;(statearr_15207_15225[2] = null);
(statearr_15207_15225[1] = 2);
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
});return ((function (switch__8460__auto__){
return (function() {
var state_machine__8461__auto__ = null;
var state_machine__8461__auto____0 = (function (){var statearr_15211 = (new Array(11));(statearr_15211[0] = state_machine__8461__auto__);
(statearr_15211[1] = 1);
return statearr_15211;
});
var state_machine__8461__auto____1 = (function (state_15190){while(true){
var ret_value__8462__auto__ = (function (){try{while(true){
var result__8463__auto__ = switch__8460__auto__.call(null,state_15190);if(cljs.core.keyword_identical_QMARK_.call(null,result__8463__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8463__auto__;
}
break;
}
}catch (e15212){if((e15212 instanceof Object))
{var ex__8464__auto__ = e15212;var statearr_15213_15226 = state_15190;(statearr_15213_15226[5] = ex__8464__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15190);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15212;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8462__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15227 = state_15190;
state_15190 = G__15227;
continue;
}
} else
{return ret_value__8462__auto__;
}
break;
}
});
state_machine__8461__auto__ = function(state_15190){
switch(arguments.length){
case 0:
return state_machine__8461__auto____0.call(this);
case 1:
return state_machine__8461__auto____1.call(this,state_15190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8461__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8461__auto____0;
state_machine__8461__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8461__auto____1;
return state_machine__8461__auto__;
})()
;})(switch__8460__auto__))
})();var state__8561__auto__ = (function (){var statearr_15214 = f__8560__auto__.call(null);(statearr_15214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8559__auto___15215);
return statearr_15214;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8561__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8559__auto___15362 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8560__auto__ = (function (){var switch__8460__auto__ = (function (state_15332){var state_val_15333 = (state_15332[1]);if((state_val_15333 === 1))
{var inst_15295 = (new Array(n));var inst_15296 = inst_15295;var inst_15297 = 0;var state_15332__$1 = (function (){var statearr_15334 = state_15332;(statearr_15334[7] = inst_15297);
(statearr_15334[8] = inst_15296);
return statearr_15334;
})();var statearr_15335_15363 = state_15332__$1;(statearr_15335_15363[2] = null);
(statearr_15335_15363[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15333 === 2))
{var state_15332__$1 = state_15332;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15332__$1,4,ch);
} else
{if((state_val_15333 === 3))
{var inst_15330 = (state_15332[2]);var state_15332__$1 = state_15332;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15332__$1,inst_15330);
} else
{if((state_val_15333 === 4))
{var inst_15300 = (state_15332[9]);var inst_15300__$1 = (state_15332[2]);var inst_15301 = (inst_15300__$1 == null);var inst_15302 = cljs.core.not.call(null,inst_15301);var state_15332__$1 = (function (){var statearr_15336 = state_15332;(statearr_15336[9] = inst_15300__$1);
return statearr_15336;
})();if(inst_15302)
{var statearr_15337_15364 = state_15332__$1;(statearr_15337_15364[1] = 5);
} else
{var statearr_15338_15365 = state_15332__$1;(statearr_15338_15365[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15333 === 5))
{var inst_15305 = (state_15332[10]);var inst_15297 = (state_15332[7]);var inst_15296 = (state_15332[8]);var inst_15300 = (state_15332[9]);var inst_15304 = (inst_15296[inst_15297] = inst_15300);var inst_15305__$1 = (inst_15297 + 1);var inst_15306 = (inst_15305__$1 < n);var state_15332__$1 = (function (){var statearr_15339 = state_15332;(statearr_15339[10] = inst_15305__$1);
(statearr_15339[11] = inst_15304);
return statearr_15339;
})();if(cljs.core.truth_(inst_15306))
{var statearr_15340_15366 = state_15332__$1;(statearr_15340_15366[1] = 8);
} else
{var statearr_15341_15367 = state_15332__$1;(statearr_15341_15367[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15333 === 6))
{var inst_15297 = (state_15332[7]);var inst_15318 = (inst_15297 > 0);var state_15332__$1 = state_15332;if(cljs.core.truth_(inst_15318))
{var statearr_15343_15368 = state_15332__$1;(statearr_15343_15368[1] = 12);
} else
{var statearr_15344_15369 = state_15332__$1;(statearr_15344_15369[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15333 === 7))
{var inst_15328 = (state_15332[2]);var state_15332__$1 = state_15332;var statearr_15345_15370 = state_15332__$1;(statearr_15345_15370[2] = inst_15328);
(statearr_15345_15370[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15333 === 8))
{var inst_15305 = (state_15332[10]);var inst_15296 = (state_15332[8]);var tmp15342 = inst_15296;var inst_15296__$1 = tmp15342;var inst_15297 = inst_15305;var state_15332__$1 = (function (){var statearr_15346 = state_15332;(statearr_15346[7] = inst_15297);
(statearr_15346[8] = inst_15296__$1);
return statearr_15346;
})();var statearr_15347_15371 = state_15332__$1;(statearr_15347_15371[2] = null);
(statearr_15347_15371[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15333 === 9))
{var inst_15296 = (state_15332[8]);var inst_15310 = cljs.core.vec.call(null,inst_15296);var state_15332__$1 = state_15332;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15332__$1,11,out,inst_15310);
} else
{if((state_val_15333 === 10))
{var inst_15316 = (state_15332[2]);var state_15332__$1 = state_15332;var statearr_15348_15372 = state_15332__$1;(statearr_15348_15372[2] = inst_15316);
(statearr_15348_15372[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15333 === 11))
{var inst_15312 = (state_15332[2]);var inst_15313 = (new Array(n));var inst_15296 = inst_15313;var inst_15297 = 0;var state_15332__$1 = (function (){var statearr_15349 = state_15332;(statearr_15349[7] = inst_15297);
(statearr_15349[8] = inst_15296);
(statearr_15349[12] = inst_15312);
return statearr_15349;
})();var statearr_15350_15373 = state_15332__$1;(statearr_15350_15373[2] = null);
(statearr_15350_15373[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15333 === 12))
{var inst_15296 = (state_15332[8]);var inst_15320 = cljs.core.vec.call(null,inst_15296);var state_15332__$1 = state_15332;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15332__$1,15,out,inst_15320);
} else
{if((state_val_15333 === 13))
{var state_15332__$1 = state_15332;var statearr_15351_15374 = state_15332__$1;(statearr_15351_15374[2] = null);
(statearr_15351_15374[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15333 === 14))
{var inst_15325 = (state_15332[2]);var inst_15326 = cljs.core.async.close_BANG_.call(null,out);var state_15332__$1 = (function (){var statearr_15352 = state_15332;(statearr_15352[13] = inst_15325);
return statearr_15352;
})();var statearr_15353_15375 = state_15332__$1;(statearr_15353_15375[2] = inst_15326);
(statearr_15353_15375[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15333 === 15))
{var inst_15322 = (state_15332[2]);var state_15332__$1 = state_15332;var statearr_15354_15376 = state_15332__$1;(statearr_15354_15376[2] = inst_15322);
(statearr_15354_15376[1] = 14);
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
});return ((function (switch__8460__auto__){
return (function() {
var state_machine__8461__auto__ = null;
var state_machine__8461__auto____0 = (function (){var statearr_15358 = (new Array(14));(statearr_15358[0] = state_machine__8461__auto__);
(statearr_15358[1] = 1);
return statearr_15358;
});
var state_machine__8461__auto____1 = (function (state_15332){while(true){
var ret_value__8462__auto__ = (function (){try{while(true){
var result__8463__auto__ = switch__8460__auto__.call(null,state_15332);if(cljs.core.keyword_identical_QMARK_.call(null,result__8463__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8463__auto__;
}
break;
}
}catch (e15359){if((e15359 instanceof Object))
{var ex__8464__auto__ = e15359;var statearr_15360_15377 = state_15332;(statearr_15360_15377[5] = ex__8464__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15332);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15359;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8462__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15378 = state_15332;
state_15332 = G__15378;
continue;
}
} else
{return ret_value__8462__auto__;
}
break;
}
});
state_machine__8461__auto__ = function(state_15332){
switch(arguments.length){
case 0:
return state_machine__8461__auto____0.call(this);
case 1:
return state_machine__8461__auto____1.call(this,state_15332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8461__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8461__auto____0;
state_machine__8461__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8461__auto____1;
return state_machine__8461__auto__;
})()
;})(switch__8460__auto__))
})();var state__8561__auto__ = (function (){var statearr_15361 = f__8560__auto__.call(null);(statearr_15361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8559__auto___15362);
return statearr_15361;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8561__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8559__auto___15521 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8560__auto__ = (function (){var switch__8460__auto__ = (function (state_15491){var state_val_15492 = (state_15491[1]);if((state_val_15492 === 1))
{var inst_15450 = (new Array(0));var inst_15451 = inst_15450;var inst_15452 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_15491__$1 = (function (){var statearr_15493 = state_15491;(statearr_15493[7] = inst_15452);
(statearr_15493[8] = inst_15451);
return statearr_15493;
})();var statearr_15494_15522 = state_15491__$1;(statearr_15494_15522[2] = null);
(statearr_15494_15522[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15492 === 2))
{var state_15491__$1 = state_15491;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15491__$1,4,ch);
} else
{if((state_val_15492 === 3))
{var inst_15489 = (state_15491[2]);var state_15491__$1 = state_15491;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15491__$1,inst_15489);
} else
{if((state_val_15492 === 4))
{var inst_15455 = (state_15491[9]);var inst_15455__$1 = (state_15491[2]);var inst_15456 = (inst_15455__$1 == null);var inst_15457 = cljs.core.not.call(null,inst_15456);var state_15491__$1 = (function (){var statearr_15495 = state_15491;(statearr_15495[9] = inst_15455__$1);
return statearr_15495;
})();if(inst_15457)
{var statearr_15496_15523 = state_15491__$1;(statearr_15496_15523[1] = 5);
} else
{var statearr_15497_15524 = state_15491__$1;(statearr_15497_15524[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15492 === 5))
{var inst_15455 = (state_15491[9]);var inst_15452 = (state_15491[7]);var inst_15459 = (state_15491[10]);var inst_15459__$1 = f.call(null,inst_15455);var inst_15460 = cljs.core._EQ_.call(null,inst_15459__$1,inst_15452);var inst_15461 = cljs.core.keyword_identical_QMARK_.call(null,inst_15452,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_15462 = (inst_15460) || (inst_15461);var state_15491__$1 = (function (){var statearr_15498 = state_15491;(statearr_15498[10] = inst_15459__$1);
return statearr_15498;
})();if(cljs.core.truth_(inst_15462))
{var statearr_15499_15525 = state_15491__$1;(statearr_15499_15525[1] = 8);
} else
{var statearr_15500_15526 = state_15491__$1;(statearr_15500_15526[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15492 === 6))
{var inst_15451 = (state_15491[8]);var inst_15476 = inst_15451.length;var inst_15477 = (inst_15476 > 0);var state_15491__$1 = state_15491;if(cljs.core.truth_(inst_15477))
{var statearr_15502_15527 = state_15491__$1;(statearr_15502_15527[1] = 12);
} else
{var statearr_15503_15528 = state_15491__$1;(statearr_15503_15528[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15492 === 7))
{var inst_15487 = (state_15491[2]);var state_15491__$1 = state_15491;var statearr_15504_15529 = state_15491__$1;(statearr_15504_15529[2] = inst_15487);
(statearr_15504_15529[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15492 === 8))
{var inst_15455 = (state_15491[9]);var inst_15451 = (state_15491[8]);var inst_15459 = (state_15491[10]);var inst_15464 = inst_15451.push(inst_15455);var tmp15501 = inst_15451;var inst_15451__$1 = tmp15501;var inst_15452 = inst_15459;var state_15491__$1 = (function (){var statearr_15505 = state_15491;(statearr_15505[7] = inst_15452);
(statearr_15505[8] = inst_15451__$1);
(statearr_15505[11] = inst_15464);
return statearr_15505;
})();var statearr_15506_15530 = state_15491__$1;(statearr_15506_15530[2] = null);
(statearr_15506_15530[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15492 === 9))
{var inst_15451 = (state_15491[8]);var inst_15467 = cljs.core.vec.call(null,inst_15451);var state_15491__$1 = state_15491;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15491__$1,11,out,inst_15467);
} else
{if((state_val_15492 === 10))
{var inst_15474 = (state_15491[2]);var state_15491__$1 = state_15491;var statearr_15507_15531 = state_15491__$1;(statearr_15507_15531[2] = inst_15474);
(statearr_15507_15531[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15492 === 11))
{var inst_15455 = (state_15491[9]);var inst_15459 = (state_15491[10]);var inst_15469 = (state_15491[2]);var inst_15470 = (new Array(0));var inst_15471 = inst_15470.push(inst_15455);var inst_15451 = inst_15470;var inst_15452 = inst_15459;var state_15491__$1 = (function (){var statearr_15508 = state_15491;(statearr_15508[7] = inst_15452);
(statearr_15508[12] = inst_15469);
(statearr_15508[8] = inst_15451);
(statearr_15508[13] = inst_15471);
return statearr_15508;
})();var statearr_15509_15532 = state_15491__$1;(statearr_15509_15532[2] = null);
(statearr_15509_15532[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15492 === 12))
{var inst_15451 = (state_15491[8]);var inst_15479 = cljs.core.vec.call(null,inst_15451);var state_15491__$1 = state_15491;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15491__$1,15,out,inst_15479);
} else
{if((state_val_15492 === 13))
{var state_15491__$1 = state_15491;var statearr_15510_15533 = state_15491__$1;(statearr_15510_15533[2] = null);
(statearr_15510_15533[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15492 === 14))
{var inst_15484 = (state_15491[2]);var inst_15485 = cljs.core.async.close_BANG_.call(null,out);var state_15491__$1 = (function (){var statearr_15511 = state_15491;(statearr_15511[14] = inst_15484);
return statearr_15511;
})();var statearr_15512_15534 = state_15491__$1;(statearr_15512_15534[2] = inst_15485);
(statearr_15512_15534[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15492 === 15))
{var inst_15481 = (state_15491[2]);var state_15491__$1 = state_15491;var statearr_15513_15535 = state_15491__$1;(statearr_15513_15535[2] = inst_15481);
(statearr_15513_15535[1] = 14);
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
});return ((function (switch__8460__auto__){
return (function() {
var state_machine__8461__auto__ = null;
var state_machine__8461__auto____0 = (function (){var statearr_15517 = (new Array(15));(statearr_15517[0] = state_machine__8461__auto__);
(statearr_15517[1] = 1);
return statearr_15517;
});
var state_machine__8461__auto____1 = (function (state_15491){while(true){
var ret_value__8462__auto__ = (function (){try{while(true){
var result__8463__auto__ = switch__8460__auto__.call(null,state_15491);if(cljs.core.keyword_identical_QMARK_.call(null,result__8463__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8463__auto__;
}
break;
}
}catch (e15518){if((e15518 instanceof Object))
{var ex__8464__auto__ = e15518;var statearr_15519_15536 = state_15491;(statearr_15519_15536[5] = ex__8464__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15491);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15518;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8462__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15537 = state_15491;
state_15491 = G__15537;
continue;
}
} else
{return ret_value__8462__auto__;
}
break;
}
});
state_machine__8461__auto__ = function(state_15491){
switch(arguments.length){
case 0:
return state_machine__8461__auto____0.call(this);
case 1:
return state_machine__8461__auto____1.call(this,state_15491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8461__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8461__auto____0;
state_machine__8461__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8461__auto____1;
return state_machine__8461__auto__;
})()
;})(switch__8460__auto__))
})();var state__8561__auto__ = (function (){var statearr_15520 = f__8560__auto__.call(null);(statearr_15520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8559__auto___15521);
return statearr_15520;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8561__auto__);
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
