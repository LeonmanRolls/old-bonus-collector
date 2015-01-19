// Compiled by ClojureScript 0.0-2069
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = 0;
cljs.core.async.impl.ioc_helpers.STATE_IDX = 1;
cljs.core.async.impl.ioc_helpers.VALUE_IDX = 2;
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = 3;
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = 4;
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = 5;
cljs.core.async.impl.ioc_helpers.USER_START_IDX = 6;
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$173);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t40363 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t40363 = (function (f,fn_handler,meta40364){
this.f = f;
this.fn_handler = fn_handler;
this.meta40364 = meta40364;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t40363.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t40363.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t40363";
cljs.core.async.impl.ioc_helpers.t40363.cljs$lang$ctorPrWriter = (function (this__3824__auto__,writer__3825__auto__,opt__3826__auto__){return cljs.core._write(writer__3825__auto__,"cljs.core.async.impl.ioc-helpers/t40363");
});
cljs.core.async.impl.ioc_helpers.t40363.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t40363.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t40363.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t40363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40365){var self__ = this;
var _40365__$1 = this;return self__.meta40364;
});
cljs.core.async.impl.ioc_helpers.t40363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40365,meta40364__$1){var self__ = this;
var _40365__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t40363(self__.f,self__.fn_handler,meta40364__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t40363 = (function __GT_t40363(f__$1,fn_handler__$1,meta40364){return (new cljs.core.async.impl.ioc_helpers.t40363(f__$1,fn_handler__$1,meta40364));
});
}
return (new cljs.core.async.impl.ioc_helpers.t40363(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e40367){if((e40367 instanceof Object))
{var ex = e40367;cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
throw ex;
} else
{if(cljs.core.constant$keyword$129)
{throw e40367;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){var statearr_40370_40372 = state;(statearr_40370_40372[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_40370_40372[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_40371_40373 = state;(statearr_40371_40373[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
(statearr_40371_40373[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$174;
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){var statearr_40376_40378 = state;(statearr_40376_40378[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);
(statearr_40376_40378[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_40377_40379 = state;(statearr_40377_40379[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
(statearr_40377_40379[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$174;
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__40380){var map__40385 = p__40380;var map__40385__$1 = ((cljs.core.seq_QMARK_(map__40385))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40385):map__40385);var opts = map__40385__$1;var statearr_40386_40389 = state;(statearr_40386_40389[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts((function (val){var statearr_40387_40390 = state;(statearr_40387_40390[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_40388_40391 = state;(statearr_40388_40391[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
return cljs.core.constant$keyword$174;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__40380 = null;if (arguments.length > 3) {
  p__40380 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__40380);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__40392){
var state = cljs.core.first(arglist__40392);
arglist__40392 = cljs.core.next(arglist__40392);
var cont_block = cljs.core.first(arglist__40392);
arglist__40392 = cljs.core.next(arglist__40392);
var ports = cljs.core.first(arglist__40392);
var p__40380 = cljs.core.rest(arglist__40392);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__40380);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);if((value == null))
{} else
{c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler((function (){return null;
})));
}
c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__3837__auto__){var self__ = this;
var this__3837__auto____$1 = this;var h__3691__auto__ = self__.__hash;if(!((h__3691__auto__ == null)))
{return h__3691__auto__;
} else
{var h__3691__auto____$1 = cljs.core.hash_imap(this__3837__auto____$1);self__.__hash = h__3691__auto____$1;
return h__3691__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__3842__auto__,k__3843__auto__){var self__ = this;
var this__3842__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__3842__auto____$1,k__3843__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3844__auto__,k40394,else__3845__auto__){var self__ = this;
var this__3844__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_(k40394,cljs.core.constant$keyword$175))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k40394,cljs.core.constant$keyword$176))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_(k40394,cljs.core.constant$keyword$177))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k40394,cljs.core.constant$keyword$178))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k40394,cljs.core.constant$keyword$179))
{return self__.prev;
} else
{if(cljs.core.constant$keyword$129)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40394,else__3845__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3849__auto__,k__3850__auto__,G__40393){var self__ = this;
var this__3849__auto____$1 = this;var pred__40396 = cljs.core.keyword_identical_QMARK_;var expr__40397 = k__3850__auto__;if(cljs.core.truth_((pred__40396.cljs$core$IFn$_invoke$arity$2 ? pred__40396.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$175,expr__40397) : pred__40396.call(null,cljs.core.constant$keyword$175,expr__40397))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__40393,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__40396.cljs$core$IFn$_invoke$arity$2 ? pred__40396.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$176,expr__40397) : pred__40396.call(null,cljs.core.constant$keyword$176,expr__40397))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__40393,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__40396.cljs$core$IFn$_invoke$arity$2 ? pred__40396.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$177,expr__40397) : pred__40396.call(null,cljs.core.constant$keyword$177,expr__40397))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__40393,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__40396.cljs$core$IFn$_invoke$arity$2 ? pred__40396.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$178,expr__40397) : pred__40396.call(null,cljs.core.constant$keyword$178,expr__40397))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__40393,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__40396.cljs$core$IFn$_invoke$arity$2 ? pred__40396.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$179,expr__40397) : pred__40396.call(null,cljs.core.constant$keyword$179,expr__40397))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__40393,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__3850__auto__,G__40393),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__3856__auto__,writer__3857__auto__,opts__3858__auto__){var self__ = this;
var this__3856__auto____$1 = this;var pr_pair__3859__auto__ = (function (keyval__3860__auto__){return cljs.core.pr_sequential_writer(writer__3857__auto__,cljs.core.pr_writer,""," ","",opts__3858__auto__,keyval__3860__auto__);
});return cljs.core.pr_sequential_writer(writer__3857__auto__,pr_pair__3859__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__3858__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$175,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$176,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$177,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$178,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$179,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3847__auto__,entry__3848__auto__){var self__ = this;
var this__3847__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__3848__auto__))
{return cljs.core._assoc(this__3847__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__3848__auto__,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__3848__auto__,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__3847__auto____$1,entry__3848__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__3854__auto__){var self__ = this;
var this__3854__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$175,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$176,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$177,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$178,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$179,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3846__auto__){var self__ = this;
var this__3846__auto____$1 = this;return (5 + cljs.core.count(self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__3838__auto__,other__3839__auto__){var self__ = this;
var this__3838__auto____$1 = this;if(cljs.core.truth_((function (){var and__3273__auto__ = other__3839__auto__;if(cljs.core.truth_(and__3273__auto__))
{return ((this__3838__auto____$1.constructor === other__3839__auto__.constructor)) && (cljs.core.equiv_map(this__3838__auto____$1,other__3839__auto__));
} else
{return and__3273__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3841__auto__,G__40393){var self__ = this;
var this__3841__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__40393,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3840__auto__){var self__ = this;
var this__3840__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3851__auto__,k__3852__auto__){var self__ = this;
var this__3851__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$177,null,cljs.core.constant$keyword$175,null,cljs.core.constant$keyword$176,null,cljs.core.constant$keyword$178,null,cljs.core.constant$keyword$179,null], null), null),k__3852__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__3851__auto____$1),self__.__meta),k__3852__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__3852__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__3876__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__3876__auto__,writer__3877__auto__){return cljs.core._write(writer__3877__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__40395){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$175.cljs$core$IFn$_invoke$arity$1(G__40395),cljs.core.constant$keyword$176.cljs$core$IFn$_invoke$arity$1(G__40395),cljs.core.constant$keyword$177.cljs$core$IFn$_invoke$arity$1(G__40395),cljs.core.constant$keyword$178.cljs$core$IFn$_invoke$arity$1(G__40395),cljs.core.constant$keyword$179.cljs$core$IFn$_invoke$arity$1(G__40395),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40395,cljs.core.constant$keyword$175,cljs.core.array_seq([cljs.core.constant$keyword$176,cljs.core.constant$keyword$177,cljs.core.constant$keyword$178,cljs.core.constant$keyword$179], 0))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_40400 = state;(statearr_40400[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_40400;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = cljs.core.constant$keyword$175.cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = cljs.core.constant$keyword$176.cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__3273__auto__ = exception;if(cljs.core.truth_(and__3273__auto__))
{return cljs.core.not(exception_frame);
} else
{return and__3273__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__3273__auto__ = exception;if(cljs.core.truth_(and__3273__auto__))
{var and__3273__auto____$1 = catch_block;if(cljs.core.truth_(and__3273__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__3273__auto____$1;
}
} else
{return and__3273__auto__;
}
})()))
{var statearr_40406 = state;(statearr_40406[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_40406[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_40406[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_40406[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$175,null,cljs.core.array_seq([cljs.core.constant$keyword$176,null], 0)));
return statearr_40406;
} else
{if(cljs.core.truth_((function (){var and__3273__auto__ = exception;if(cljs.core.truth_(and__3273__auto__))
{return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$177.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__3273__auto__;
}
})()))
{var statearr_40407_40411 = state;(statearr_40407_40411[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$179.cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__40412 = state;
state = G__40412;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3273__auto__ = exception;if(cljs.core.truth_(and__3273__auto__))
{var and__3273__auto____$1 = cljs.core.not(catch_block);if(and__3273__auto____$1)
{return cljs.core.constant$keyword$177.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3273__auto____$1;
}
} else
{return and__3273__auto__;
}
})()))
{var statearr_40408 = state;(statearr_40408[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$177.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_40408[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$177,null));
return statearr_40408;
} else
{if(cljs.core.truth_((function (){var and__3273__auto__ = cljs.core.not(exception);if(and__3273__auto__)
{return cljs.core.constant$keyword$177.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3273__auto__;
}
})()))
{var statearr_40409 = state;(statearr_40409[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$177.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_40409[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$177,null));
return statearr_40409;
} else
{if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$177.cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_40410 = state;(statearr_40410[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$178.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_40410[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$179.cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_40410;
} else
{if(cljs.core.constant$keyword$129)
{if(false)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No matching clause"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0)))].join('')));
}
} else
{return null;
}
}
}
}
}
}
}
break;
}
});
