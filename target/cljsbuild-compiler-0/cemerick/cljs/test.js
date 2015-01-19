// Compiled by ClojureScript 0.0-2069
goog.provide('cemerick.cljs.test');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
cemerick.cljs.test._STAR_test_print_fn_STAR_ = null;
cemerick.cljs.test._STAR_entry_point_STAR_ = true;
cemerick.cljs.test._STAR_test_ctx_STAR_ = null;
cemerick.cljs.test.init_test_environment_STAR_ = (function init_test_environment_STAR_(aux_data){return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$86,0,cljs.core.constant$keyword$87,0,cljs.core.constant$keyword$88,0,cljs.core.constant$keyword$89,0], null),(cljs.core.truth_(cemerick.cljs.test._STAR_test_print_fn_STAR_)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$90,cemerick.cljs.test._STAR_test_print_fn_STAR_], null):null)], 0)),cljs.core.constant$keyword$91,cljs.core.List.EMPTY),aux_data], 0)));
});
cemerick.cljs.test.init_test_environment = (function init_test_environment(){var G__23089 = cemerick.cljs.test.init_test_environment_STAR_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$92,cljs.core.List.EMPTY], null));cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(G__23089,cljs.core.assoc,cljs.core.constant$keyword$93,cemerick.cljs.test.init_test_environment_STAR_(cljs.core.PersistentArrayMap.EMPTY));
return G__23089;
});
cemerick.cljs.test.registered_tests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
cemerick.cljs.test.registered_test_hooks = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
cemerick.cljs.test.registered_fixtures = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
cemerick.cljs.test.register_test_BANG_ = (function register_test_BANG_(ns,name,fn){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cemerick.cljs.test.registered_tests,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null),cljs.core.assoc,name,cljs.core.array_seq([fn], 0));
});
cemerick.cljs.test.register_test_ns_hook_BANG_ = (function register_test_ns_hook_BANG_(ns,name){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cemerick.cljs.test.registered_test_hooks,cljs.core.assoc,ns,name);
});

/**
* @constructor
* @param {*} test_env
* @param {*} test_name
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cemerick.cljs.test.TestContext = (function (test_env,test_name,__meta,__extmap){
this.test_env = test_env;
this.test_name = test_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cemerick.cljs.test.TestContext.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__3837__auto__){var self__ = this;
var this__3837__auto____$1 = this;var h__3691__auto__ = self__.__hash;if(!((h__3691__auto__ == null)))
{return h__3691__auto__;
} else
{var h__3691__auto____$1 = cljs.core.hash_imap(this__3837__auto____$1);self__.__hash = h__3691__auto____$1;
return h__3691__auto____$1;
}
});
cemerick.cljs.test.TestContext.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__3842__auto__,k__3843__auto__){var self__ = this;
var this__3842__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__3842__auto____$1,k__3843__auto__,null);
});
cemerick.cljs.test.TestContext.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3844__auto__,k23091,else__3845__auto__){var self__ = this;
var this__3844__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_(k23091,cljs.core.constant$keyword$94))
{return self__.test_env;
} else
{if(cljs.core.keyword_identical_QMARK_(k23091,cljs.core.constant$keyword$95))
{return self__.test_name;
} else
{if(cljs.core.constant$keyword$6)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23091,else__3845__auto__);
} else
{return null;
}
}
}
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3849__auto__,k__3850__auto__,G__23090){var self__ = this;
var this__3849__auto____$1 = this;var pred__23093 = cljs.core.keyword_identical_QMARK_;var expr__23094 = k__3850__auto__;if(cljs.core.truth_((pred__23093.cljs$core$IFn$_invoke$arity$2 ? pred__23093.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$94,expr__23094) : pred__23093.call(null,cljs.core.constant$keyword$94,expr__23094))))
{return (new cemerick.cljs.test.TestContext(G__23090,self__.test_name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__23093.cljs$core$IFn$_invoke$arity$2 ? pred__23093.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$95,expr__23094) : pred__23093.call(null,cljs.core.constant$keyword$95,expr__23094))))
{return (new cemerick.cljs.test.TestContext(self__.test_env,G__23090,self__.__meta,self__.__extmap,null));
} else
{return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__3850__auto__,G__23090),null));
}
}
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__3856__auto__,writer__3857__auto__,opts__3858__auto__){var self__ = this;
var this__3856__auto____$1 = this;var pr_pair__3859__auto__ = (function (keyval__3860__auto__){return cljs.core.pr_sequential_writer(writer__3857__auto__,cljs.core.pr_writer,""," ","",opts__3858__auto__,keyval__3860__auto__);
});return cljs.core.pr_sequential_writer(writer__3857__auto__,pr_pair__3859__auto__,"#cemerick.cljs.test.TestContext{",", ","}",opts__3858__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$94,self__.test_env],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$95,self__.test_name],null))], null),self__.__extmap));
});
cemerick.cljs.test.TestContext.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3847__auto__,entry__3848__auto__){var self__ = this;
var this__3847__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__3848__auto__))
{return cljs.core._assoc(this__3847__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__3848__auto__,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__3848__auto__,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__3847__auto____$1,entry__3848__auto__);
}
});
cemerick.cljs.test.TestContext.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__3854__auto__){var self__ = this;
var this__3854__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$94,self__.test_env],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$95,self__.test_name],null))], null),self__.__extmap));
});
cemerick.cljs.test.TestContext.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3846__auto__){var self__ = this;
var this__3846__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__3838__auto__,other__3839__auto__){var self__ = this;
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
cemerick.cljs.test.TestContext.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3841__auto__,G__23090){var self__ = this;
var this__3841__auto____$1 = this;return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,G__23090,self__.__extmap,self__.__hash));
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3840__auto__){var self__ = this;
var this__3840__auto____$1 = this;return self__.__meta;
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3851__auto__,k__3852__auto__){var self__ = this;
var this__3851__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$95,null,cljs.core.constant$keyword$94,null], null), null),k__3852__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__3851__auto____$1),self__.__meta),k__3852__auto__);
} else
{return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__3852__auto__)),null));
}
});
cemerick.cljs.test.TestContext.cljs$lang$type = true;
cemerick.cljs.test.TestContext.cljs$lang$ctorPrSeq = (function (this__3876__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"cemerick.cljs.test/TestContext");
});
cemerick.cljs.test.TestContext.cljs$lang$ctorPrWriter = (function (this__3876__auto__,writer__3877__auto__){return cljs.core._write(writer__3877__auto__,"cemerick.cljs.test/TestContext");
});
cemerick.cljs.test.__GT_TestContext = (function __GT_TestContext(test_env,test_name){return (new cemerick.cljs.test.TestContext(test_env,test_name));
});
cemerick.cljs.test.map__GT_TestContext = (function map__GT_TestContext(G__23092){return (new cemerick.cljs.test.TestContext(cljs.core.constant$keyword$94.cljs$core$IFn$_invoke$arity$1(G__23092),cljs.core.constant$keyword$95.cljs$core$IFn$_invoke$arity$1(G__23092),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23092,cljs.core.constant$keyword$94,cljs.core.array_seq([cljs.core.constant$keyword$95], 0))));
});
cemerick.cljs.test.maybe_deref = (function maybe_deref(x){if((function (){var G__23097 = x;if(G__23097)
{var bit__3906__auto__ = (G__23097.cljs$lang$protocol_mask$partition0$ & 32768);if((bit__3906__auto__) || (G__23097.cljs$core$IDeref$))
{return true;
} else
{if((!G__23097.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__23097);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__23097);
}
})())
{return cljs.core.deref(x);
} else
{return x;
}
});
cemerick.cljs.test.testing_complete_QMARK_ = (function testing_complete_QMARK_(test_env){var map__23099 = cemerick.cljs.test.maybe_deref(test_env);var map__23099__$1 = ((cljs.core.seq_QMARK_(map__23099))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23099):map__23099);var remaining = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23099__$1,cljs.core.constant$keyword$96);var running = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23099__$1,cljs.core.constant$keyword$97);var async = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23099__$1,cljs.core.constant$keyword$93);var and__3273__auto__ = cljs.core.empty_QMARK_(remaining);if(and__3273__auto__)
{var and__3273__auto____$1 = cljs.core.empty_QMARK_(running);if(and__3273__auto____$1)
{var or__3285__auto__ = (async == null);if(or__3285__auto__)
{return or__3285__auto__;
} else
{return testing_complete_QMARK_(async);
}
} else
{return and__3273__auto____$1;
}
} else
{return and__3273__auto__;
}
});
/**
* Registers a watcher on the :async testing (sub)environment provided by
* [test-env]; when its key metrics (:test, :pass, :fail, :error) change,
* [callback] will be called with [test-env].  The watcher will be removed when all
* tests are complete.
* 
* If [test-env] is already complete, [callback] will be called with it as an
* argument immediately, and no watcher will be registered.
*/
cemerick.cljs.test.on_async_progress = (function on_async_progress(test_env,callback){if(cljs.core.truth_(cemerick.cljs.test.testing_complete_QMARK_(test_env)))
{setTimeout((function (){return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(test_env) : callback.call(null,test_env));
}),1);
} else
{cljs.core.add_watch(cljs.core.constant$keyword$93.cljs$core$IFn$_invoke$arity$1(cemerick.cljs.test.maybe_deref(test_env)),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("on-progress"),(function (key,ref,old,new$){var vec__23102 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23100_SHARP_){return cljs.core.select_keys(p1__23100_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$86,cljs.core.constant$keyword$87,cljs.core.constant$keyword$88,cljs.core.constant$keyword$89], null));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old,new$], null));var oldv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23102,0,null);var newv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23102,1,null);var complete_QMARK_ = cemerick.cljs.test.testing_complete_QMARK_(new$);if(cljs.core.truth_((function (){var or__3285__auto__ = complete_QMARK_;if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(oldv,newv);
}
})()))
{(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(cemerick.cljs.test.maybe_deref(test_env)) : callback.call(null,cemerick.cljs.test.maybe_deref(test_env)));
} else
{}
if(cljs.core.truth_(complete_QMARK_))
{return cljs.core.remove_watch(ref,key);
} else
{return null;
}
}));
}
return test_env;
});
goog.exportSymbol('cemerick.cljs.test.on_async_progress', cemerick.cljs.test.on_async_progress);
/**
* Same as `on-async-progress`, but will only call [callback] when all tests are complete.
*/
cemerick.cljs.test.on_testing_complete = (function on_testing_complete(test_env,callback){return cemerick.cljs.test.on_async_progress(test_env,(function (test_env__$1){if(cljs.core.truth_(cemerick.cljs.test.testing_complete_QMARK_(test_env__$1)))
{return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(test_env__$1) : callback.call(null,test_env__$1));
} else
{return null;
}
}));
});
goog.exportSymbol('cemerick.cljs.test.on_testing_complete', cemerick.cljs.test.on_testing_complete);
/**
* Returns a string representation of the current test.  Renders names
* in the test environment's ::test-functions list, then the source file and line of
* current assertion.
*/
cemerick.cljs.test.testing_vars_str = (function testing_vars_str(p__23103){var map__23105 = p__23103;var map__23105__$1 = ((cljs.core.seq_QMARK_(map__23105))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23105):map__23105);var m = map__23105__$1;var test_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23105__$1,cljs.core.constant$keyword$95);var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23105__$1,cljs.core.constant$keyword$94);var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23105__$1,cljs.core.constant$keyword$98);var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23105__$1,cljs.core.constant$keyword$99);return [cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__3285__auto__ = cljs.core.seq(cljs.core.reverse(cljs.core.constant$keyword$92.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(test_env))));if(or__3285__auto__)
{return or__3285__auto__;
} else
{return cljs.core._conj(cljs.core.List.EMPTY,test_name);
}
})()], 0))),cljs.core.str(" ("),cljs.core.str(file),cljs.core.str(":"),cljs.core.str(line),cljs.core.str(")")].join('');
});
/**
* Returns a string representation of the current test context as represented in
* the [test-env]'s ::test-contexts list. Joins strings in that list with
* spaces.
*/
cemerick.cljs.test.testing_contexts_str = (function testing_contexts_str(test_env){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(" ",cljs.core.reverse(cljs.core.constant$keyword$91.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(test_env)))));
});
/**
* Increments the named counter in the [test-env] atom.
*/
cemerick.cljs.test.inc_report_counter = (function inc_report_counter(test_env,name){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,0));
});
/**
* Generic reporting function, may be overridden to plug in
* different report formats (e.g., TAP, JUnit).  Assertions such as
* 'is' call 'report' to indicate results.  The argument given to
* 'report' will be a map with a :type key.  See the documentation at
* the top of test_is.clj for more information on the types of
* arguments for 'report'.
*/
cemerick.cljs.test.report = (function (){var method_table__4113__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4114__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__4115__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4116__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4117__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$100,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("report",cljs.core.constant$keyword$101,cljs.core.constant$keyword$7,hierarchy__4117__auto__,method_table__4113__auto__,prefer_table__4114__auto__,method_cache__4115__auto__,cached_hierarchy__4116__auto__));
})();
cemerick.cljs.test.file_and_line = (function file_and_line(error){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$99,error.fileName,cljs.core.constant$keyword$98,error.lineNumber], null);
});
/**
* Add file and line information to a test result and call report.
* If you are writing a custom assert-expr method, call this function
* to pass test results to report.
*/
cemerick.cljs.test.do_report = (function() {
var do_report = null;
var do_report__1 = (function (m){return (cemerick.cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cemerick.cljs.test.report.cljs$core$IFn$_invoke$arity$1((function (){var G__23110 = cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$89,G__23110))
{return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cemerick.cljs.test.file_and_line(cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(m)),m], 0));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$88,G__23110))
{return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cemerick.cljs.test.file_and_line(Error()),m], 0));
} else
{if(cljs.core.constant$keyword$6)
{return m;
} else
{return null;
}
}
}
})()) : cemerick.cljs.test.report.call(null,(function (){var G__23110 = cljs.core.constant$keyword$101.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$89,G__23110))
{return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cemerick.cljs.test.file_and_line(cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(m)),m], 0));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$88,G__23110))
{return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cemerick.cljs.test.file_and_line(Error()),m], 0));
} else
{if(cljs.core.constant$keyword$6)
{return m;
} else
{return null;
}
}
}
})()));
});
var do_report__2 = (function (p__23106,m){var map__23109 = p__23106;var map__23109__$1 = ((cljs.core.seq_QMARK_(map__23109))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23109):map__23109);var test_ctx = map__23109__$1;var test_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23109__$1,cljs.core.constant$keyword$95);var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23109__$1,cljs.core.constant$keyword$94);if((test_ctx instanceof cemerick.cljs.test.TestContext))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",-1611433981,null),new cljs.core.Symbol(null,"TestContext","TestContext",586269270,null),new cljs.core.Symbol(null,"test-ctx","test-ctx",1506483237,null))], 0)))].join('')));
}
return do_report.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m,test_ctx], 0)));
});
do_report = function(p__23106,m){
switch(arguments.length){
case 1:
return do_report__1.call(this,p__23106);
case 2:
return do_report__2.call(this,p__23106,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
do_report.cljs$core$IFn$_invoke$arity$1 = do_report__1;
do_report.cljs$core$IFn$_invoke$arity$2 = do_report__2;
return do_report;
})()
;
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$7,(function (p__23111){var map__23112 = p__23111;var map__23112__$1 = ((cljs.core.seq_QMARK_(map__23112))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23112):map__23112);var m = map__23112__$1;var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23112__$1,cljs.core.constant$keyword$94);var _STAR_print_fn_STAR_23113 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3285__auto__ = cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23113;
}}));
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$87,(function (p__23114){var map__23115 = p__23114;var map__23115__$1 = ((cljs.core.seq_QMARK_(map__23115))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23115):map__23115);var m = map__23115__$1;var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23115__$1,cljs.core.constant$keyword$94);var _STAR_print_fn_STAR_23116 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3285__auto__ = cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
return cemerick.cljs.test.inc_report_counter(test_env,cljs.core.constant$keyword$87);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23116;
}}));
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$88,(function (p__23117){var map__23118 = p__23117;var map__23118__$1 = ((cljs.core.seq_QMARK_(map__23118))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23118):map__23118);var m = map__23118__$1;var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23118__$1,cljs.core.constant$keyword$94);var _STAR_print_fn_STAR_23119 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3285__auto__ = cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
cemerick.cljs.test.inc_report_counter(test_env,cljs.core.constant$keyword$88);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\nFAIL in",cemerick.cljs.test.testing_vars_str(m)], 0));
if(cljs.core.seq(cljs.core.constant$keyword$91.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(test_env))))
{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cemerick.cljs.test.testing_contexts_str(test_env)], 0));
} else
{}
var temp__4092__auto___23120 = cljs.core.constant$keyword$103.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4092__auto___23120))
{var message_23121 = temp__4092__auto___23120;cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([message_23121], 0));
} else
{}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["expected:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(m)], 0))], 0));
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  actual:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(m)], 0))], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23119;
}}));
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$89,(function (p__23122){var map__23123 = p__23122;var map__23123__$1 = ((cljs.core.seq_QMARK_(map__23123))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23123):map__23123);var m = map__23123__$1;var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23123__$1,cljs.core.constant$keyword$94);var _STAR_print_fn_STAR_23124 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3285__auto__ = cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
cemerick.cljs.test.inc_report_counter(test_env,cljs.core.constant$keyword$89);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\nERROR in",cemerick.cljs.test.testing_vars_str(m)], 0));
if(cljs.core.seq(cljs.core.constant$keyword$91.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(test_env))))
{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cemerick.cljs.test.testing_contexts_str(test_env)], 0));
} else
{}
var temp__4092__auto___23125 = cljs.core.constant$keyword$103.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4092__auto___23125))
{var message_23126 = temp__4092__auto___23125;cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([message_23126], 0));
} else
{}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["expected:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(m)], 0))], 0));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  actual: "], 0));
var actual = cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(m);if((actual instanceof Error))
{return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([actual.stack], 0));
} else
{return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([actual], 0));
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23124;
}}));
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$105,(function (p__23127){var map__23128 = p__23127;var map__23128__$1 = ((cljs.core.seq_QMARK_(map__23128))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23128):map__23128);var m = map__23128__$1;var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23128__$1,cljs.core.constant$keyword$94);var _STAR_print_fn_STAR_23129 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3285__auto__ = cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
cemerick.cljs.test.inc_report_counter(test_env,cljs.core.constant$keyword$105);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\nWARNING in",cemerick.cljs.test.testing_vars_str(m)], 0));
if(cljs.core.seq(cljs.core.constant$keyword$91.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(test_env))))
{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cemerick.cljs.test.testing_contexts_str(test_env)], 0));
} else
{}
var temp__4092__auto__ = cljs.core.constant$keyword$103.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4092__auto__))
{var message = temp__4092__auto__;return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([message], 0));
} else
{return null;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23129;
}}));
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$106,(function (p__23130){var map__23131 = p__23130;var map__23131__$1 = ((cljs.core.seq_QMARK_(map__23131))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23131):map__23131);var test_env = map__23131__$1;var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23131__$1,cljs.core.constant$keyword$89);var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23131__$1,cljs.core.constant$keyword$88);var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23131__$1,cljs.core.constant$keyword$87);var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23131__$1,cljs.core.constant$keyword$86);var _STAR_print_fn_STAR_23132 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3285__auto__ = cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\nRan",test,"tests containing",((pass + fail) + error),"assertions."], 0));
var temp__4090__auto__ = (function (){var and__3273__auto__ = cljs.core.not(cemerick.cljs.test.testing_complete_QMARK_(test_env));if(and__3273__auto__)
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$96,cljs.core.constant$keyword$97).call(null,cljs.core.deref(cljs.core.constant$keyword$93.cljs$core$IFn$_invoke$arity$1(test_env)))));
} else
{return and__3273__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var pending_count = temp__4090__auto__;return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Waiting on",pending_count,[cljs.core.str("asynchronous test"),cljs.core.str((((pending_count > 1))?"s":null)),cljs.core.str(" to complete.")].join('')], 0));
} else
{return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Testing complete:",fail,"failures,",error,"errors."], 0));
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23132;
}}));
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$107,(function (p__23133){var map__23134 = p__23133;var map__23134__$1 = ((cljs.core.seq_QMARK_(map__23134))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23134):map__23134);var m = map__23134__$1;var async = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23134__$1,cljs.core.constant$keyword$93);var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23134__$1,cljs.core.constant$keyword$94);var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23134__$1,cljs.core.constant$keyword$108);var _STAR_print_fn_STAR_23135 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3285__auto__ = cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\nTesting",ns,(cljs.core.truth_(async)?"(async)":"")], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23135;
}}));
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$109,(function (p__23136){var map__23137 = p__23136;var map__23137__$1 = ((cljs.core.seq_QMARK_(map__23137))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23137):map__23137);var m = map__23137__$1;var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23137__$1,cljs.core.constant$keyword$94);return null;
}));
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$110,(function (p__23138){var map__23139 = p__23138;var map__23139__$1 = ((cljs.core.seq_QMARK_(map__23139))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23139):map__23139);var m = map__23139__$1;var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23139__$1,cljs.core.constant$keyword$94);return null;
}));
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$111,(function (p__23140){var map__23141 = p__23140;var map__23141__$1 = ((cljs.core.seq_QMARK_(map__23141))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23141):map__23141);var m = map__23141__$1;var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23141__$1,cljs.core.constant$keyword$94);return null;
}));
/**
* Wrap test runs in a fixture function to perform setup and
* teardown. Using a fixture-type of :each wraps every test
* individually, while :once wraps the whole run in a single function.
* @param {...*} var_args
*/
cemerick.cljs.test.register_fixtures_BANG_ = (function() { 
var register_fixtures_BANG___delegate = function (ns_sym,fixture_type,fixture_fns){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cemerick.cljs.test.registered_fixtures,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_sym,fixture_type], null),cljs.core.constantly(fixture_fns));
};
var register_fixtures_BANG_ = function (ns_sym,fixture_type,var_args){
var fixture_fns = null;if (arguments.length > 2) {
  fixture_fns = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return register_fixtures_BANG___delegate.call(this,ns_sym,fixture_type,fixture_fns);};
register_fixtures_BANG_.cljs$lang$maxFixedArity = 2;
register_fixtures_BANG_.cljs$lang$applyTo = (function (arglist__23142){
var ns_sym = cljs.core.first(arglist__23142);
arglist__23142 = cljs.core.next(arglist__23142);
var fixture_type = cljs.core.first(arglist__23142);
var fixture_fns = cljs.core.rest(arglist__23142);
return register_fixtures_BANG___delegate(ns_sym,fixture_type,fixture_fns);
});
register_fixtures_BANG_.cljs$core$IFn$_invoke$arity$variadic = register_fixtures_BANG___delegate;
return register_fixtures_BANG_;
})()
;
/**
* The default, empty, fixture function.  Just calls its argument.
*/
cemerick.cljs.test.default_fixture = (function default_fixture(f){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
/**
* Composes two fixture functions, creating a new fixture function
* that combines their behavior.
*/
cemerick.cljs.test.compose_fixtures = (function compose_fixtures(f1,f2){return (function (g){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((function (){return (f2.cljs$core$IFn$_invoke$arity$1 ? f2.cljs$core$IFn$_invoke$arity$1(g) : f2.call(null,g));
})) : f1.call(null,(function (){return (f2.cljs$core$IFn$_invoke$arity$1 ? f2.cljs$core$IFn$_invoke$arity$1(g) : f2.call(null,g));
})));
});
});
/**
* Composes a collection of fixtures, in order.  Always returns a valid
* fixture function, even if the collection is empty.
*/
cemerick.cljs.test.join_fixtures = (function join_fixtures(fixtures){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cemerick.cljs.test.compose_fixtures,cemerick.cljs.test.default_fixture,fixtures);
});
cemerick.cljs.test.async_test_QMARK_ = (function async_test_QMARK_(test_fn){return cljs.core.boolean$(cljs.core.constant$keyword$93.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(test_fn)));
});
cemerick.cljs.test.test_async_fn = (function test_async_fn(async_test_env,test_name,test_fn){cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$101,cljs.core.constant$keyword$110,cljs.core.constant$keyword$112,test_fn,cljs.core.constant$keyword$94,async_test_env,cljs.core.constant$keyword$95,test_name], null));
cemerick.cljs.test.inc_report_counter(async_test_env,cljs.core.constant$keyword$86);
return (test_fn.cljs$core$IFn$_invoke$arity$1 ? test_fn.cljs$core$IFn$_invoke$arity$1((new cemerick.cljs.test.TestContext(async_test_env,test_name))) : test_fn.call(null,(new cemerick.cljs.test.TestContext(async_test_env,test_name))));
});
cemerick.cljs.test.start_next_async_test = (function start_next_async_test(async_test_env){var next_test = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((function (){return null;
}));cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(async_test_env,(function (env){var temp__4090__auto__ = (function (){var and__3273__auto__ = cljs.core.not(cljs.core.constant$keyword$113.cljs$core$IFn$_invoke$arity$1(env));if(and__3273__auto__)
{return cljs.core.first(cljs.core.constant$keyword$96.cljs$core$IFn$_invoke$arity$1(env));
} else
{return and__3273__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var vec__23144 = temp__4090__auto__;var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23144,0,null);var testfn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23144,1,null);cljs.core.reset_BANG_(next_test,testfn);
var ns_23145 = cljs.core.namespace(name);if(cljs.core.contains_QMARK_(cljs.core.constant$keyword$114.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(async_test_env)),ns_23145))
{} else
{cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$101,cljs.core.constant$keyword$107,cljs.core.constant$keyword$108,ns_23145,cljs.core.constant$keyword$94,async_test_env,cljs.core.constant$keyword$93,true], null));
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(async_test_env,cljs.core.update_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$114], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),ns_23145], 0));
}
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$96], null),cljs.core.dissoc,name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$97], null),cljs.core.assoc,name,(new Date()));
} else
{return env;
}
}));
setTimeout((function (){return cljs.core.deref(next_test).call(null);
}),1);
return async_test_env;
});
/**
* Removes framework-internal bits from a test environment for more pleasant human viewing.
*/
cemerick.cljs.test.squelch_internals = (function squelch_internals(test_env){var G__23150 = test_env;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(G__23150,(function (p1__23146_SHARP_){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env,p__23151){var vec__23152 = p__23151;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23152,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23152,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(k),cljs.core.namespace(cljs.core.constant$keyword$115)))
{return env;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,p1__23146_SHARP_);
}));
return G__23150;
});
cemerick.cljs.test.finish_test_entry_point = (function finish_test_entry_point(entry_point_QMARK_,test_env){if(cljs.core.truth_(entry_point_QMARK_))
{if(cljs.core.empty_QMARK_(cljs.core.constant$keyword$96.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.constant$keyword$93.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(test_env))))))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(test_env,cljs.core.dissoc,cljs.core.constant$keyword$93);
} else
{cemerick.cljs.test.start_next_async_test(cljs.core.constant$keyword$93.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(test_env)));
}
return cljs.core.deref(cemerick.cljs.test.squelch_internals(test_env));
} else
{return test_env;
}
});
cemerick.cljs.test.schedule_async_test = (function schedule_async_test(async_test_env,test_name,test_fn){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(async_test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$96], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.sorted_map()),test_name,cljs.core.array_seq([cljs.core.with_meta((function (){return cemerick.cljs.test.test_async_fn(async_test_env,test_name,test_fn);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$75,test_name], null))], 0));
return async_test_env;
});
cemerick.cljs.test.done_STAR_ = (function() {
var done_STAR_ = null;
var done_STAR___1 = (function (p__23154){var map__23158 = p__23154;var map__23158__$1 = ((cljs.core.seq_QMARK_(map__23158))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23158):map__23158);var test_ctx = map__23158__$1;var test_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23158__$1,cljs.core.constant$keyword$95);var async_test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23158__$1,cljs.core.constant$keyword$94);if((test_ctx instanceof cemerick.cljs.test.TestContext))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",-1611433981,null),new cljs.core.Symbol(null,"TestContext","TestContext",586269270,null),new cljs.core.Symbol(null,"test-ctx","test-ctx",1506483237,null))], 0)))].join('')));
}
var first_call_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(async_test_env,(function (env){cljs.core.reset_BANG_(first_call_QMARK_,cljs.core.contains_QMARK_(cljs.core.constant$keyword$97.cljs$core$IFn$_invoke$arity$1(env),test_name));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$97], null),cljs.core.dissoc,test_name);
}));
if(cljs.core.truth_(cljs.core.deref(first_call_QMARK_)))
{cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$101,cljs.core.constant$keyword$111,cljs.core.constant$keyword$112,test_name], null),test_ctx], 0)));
if(cljs.core.truth_(cemerick.cljs.test.testing_complete_QMARK_(async_test_env)))
{cemerick.cljs.test.squelch_internals(async_test_env);
} else
{cemerick.cljs.test.start_next_async_test(async_test_env);
}
} else
{cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$101,cljs.core.constant$keyword$105,cljs.core.constant$keyword$103,"`(done)` called multiple times to signal end-of-test"], null),test_ctx], 0)));
}
return async_test_env;
});
var done_STAR___2 = (function (p__23153,error){var map__23157 = p__23153;var map__23157__$1 = ((cljs.core.seq_QMARK_(map__23157))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23157):map__23157);var test_ctx = map__23157__$1;var test_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23157__$1,cljs.core.constant$keyword$95);var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23157__$1,cljs.core.constant$keyword$94);if((test_ctx instanceof cemerick.cljs.test.TestContext))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",-1611433981,null),new cljs.core.Symbol(null,"TestContext","TestContext",586269270,null),new cljs.core.Symbol(null,"test-ctx","test-ctx",1506483237,null))], 0)))].join('')));
}
cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$101,cljs.core.constant$keyword$89,cljs.core.constant$keyword$103,"Uncaught exception, not in assertion.",cljs.core.constant$keyword$104,null,cljs.core.constant$keyword$102,error], null),test_ctx], 0))));
return done_STAR_.cljs$core$IFn$_invoke$arity$1(test_ctx);
});
done_STAR_ = function(p__23153,error){
switch(arguments.length){
case 1:
return done_STAR___1.call(this,p__23153);
case 2:
return done_STAR___2.call(this,p__23153,error);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
done_STAR_.cljs$core$IFn$_invoke$arity$1 = done_STAR___1;
done_STAR_.cljs$core$IFn$_invoke$arity$2 = done_STAR___2;
return done_STAR_;
})()
;
cemerick.cljs.test.stop = (function stop(async_test_env){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(async_test_env,cljs.core.assoc,cljs.core.constant$keyword$113,true);
});
/**
* If v has a function in its :test metadata, calls that function,
* conjing its name into the test environment's ::test-functions list.
* 
* Note that this is the implementation of `test-var` in clojure.test,
* which is a macro in clojurescript.test.  See `cemerick.cljs.test/test-var`
* in the Clojure file for `test-var`.
*/
cemerick.cljs.test.test_function = (function() {
var test_function = null;
var test_function__1 = (function (v){return test_function.cljs$core$IFn$_invoke$arity$2(cemerick.cljs.test.init_test_environment(),v);
});
var test_function__2 = (function (test_env,v){var entry_point_QMARK___10116__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;var _STAR_entry_point_STAR_23162 = cemerick.cljs.test._STAR_entry_point_STAR_;try{cemerick.cljs.test._STAR_entry_point_STAR_ = false;
if(cljs.core.fn_QMARK_(v))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("test-var must be passed the function to be tested (not a symbol naming it)"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",-1640430032,null),new cljs.core.Symbol(null,"v","v",-1640531409,null))], 0)))].join('')));
}
var map__23163_23165 = cljs.core.meta(v);var map__23163_23166__$1 = ((cljs.core.seq_QMARK_(map__23163_23165))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23163_23165):map__23163_23165);var t_23167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23163_23166__$1,cljs.core.constant$keyword$86);var test_name_23168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23163_23166__$1,cljs.core.constant$keyword$75);var async_QMARK__23169 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23163_23166__$1,cljs.core.constant$keyword$93);if(cljs.core.truth_(t_23167))
{if(cljs.core.truth_(async_QMARK__23169))
{cemerick.cljs.test.schedule_async_test(cljs.core.constant$keyword$93.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(test_env)),test_name_23168,t_23167);
} else
{try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$5(test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$92], null),cljs.core.conj,(function (){var or__3285__auto__ = test_name_23168;if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return v;
}
})());
cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$101,cljs.core.constant$keyword$110,cljs.core.constant$keyword$112,v,cljs.core.constant$keyword$94,test_env,cljs.core.constant$keyword$95,test_name_23168], null));
cemerick.cljs.test.inc_report_counter(test_env,cljs.core.constant$keyword$86);
try{(t_23167.cljs$core$IFn$_invoke$arity$1 ? t_23167.cljs$core$IFn$_invoke$arity$1((new cemerick.cljs.test.TestContext(test_env,test_name_23168))) : t_23167.call(null,(new cemerick.cljs.test.TestContext(test_env,test_name_23168))));
}catch (e23164){if((e23164 instanceof Error))
{var e_23170 = e23164;cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$101,cljs.core.constant$keyword$89,cljs.core.constant$keyword$103,"Uncaught exception, not in assertion.",cljs.core.constant$keyword$94,test_env,cljs.core.constant$keyword$95,test_name_23168,cljs.core.constant$keyword$104,null,cljs.core.constant$keyword$102,e_23170], null));
} else
{if(cljs.core.constant$keyword$6)
{throw e23164;
} else
{}
}
}cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$101,cljs.core.constant$keyword$111,cljs.core.constant$keyword$112,v,cljs.core.constant$keyword$94,test_env,cljs.core.constant$keyword$95,test_name_23168], null));
}finally {cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$92], null),cljs.core.pop);
}}
} else
{}
return cemerick.cljs.test.finish_test_entry_point(entry_point_QMARK___10116__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_23162;
}});
test_function = function(test_env,v){
switch(arguments.length){
case 1:
return test_function__1.call(this,test_env);
case 2:
return test_function__2.call(this,test_env,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
test_function.cljs$core$IFn$_invoke$arity$1 = test_function__1;
test_function.cljs$core$IFn$_invoke$arity$2 = test_function__2;
return test_function;
})()
;
/**
* Calls test-var on every var interned in the namespace, with fixtures.
*/
cemerick.cljs.test.test_all_vars = (function() {
var test_all_vars = null;
var test_all_vars__1 = (function (ns_sym){return test_all_vars.cljs$core$IFn$_invoke$arity$2(cemerick.cljs.test.init_test_environment(),ns_sym);
});
var test_all_vars__2 = (function (test_env,ns_sym){var entry_point_QMARK___10116__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;var _STAR_entry_point_STAR_23179 = cemerick.cljs.test._STAR_entry_point_STAR_;try{cemerick.cljs.test._STAR_entry_point_STAR_ = false;
var tests_23184 = cljs.core.filter((function (p1__23171_SHARP_){return cljs.core.constant$keyword$86.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__23171_SHARP_));
}),cljs.core.vals(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cemerick.cljs.test.registered_tests),ns_sym)));var once_fixture_fn_23185 = cemerick.cljs.test.join_fixtures(cljs.core.constant$keyword$116.cljs$core$IFn$_invoke$arity$1((ns_sym.cljs$core$IFn$_invoke$arity$1 ? ns_sym.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cemerick.cljs.test.registered_fixtures)) : ns_sym.call(null,cljs.core.deref(cemerick.cljs.test.registered_fixtures)))));var each_fixture_fn_23186 = cemerick.cljs.test.join_fixtures(cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1((ns_sym.cljs$core$IFn$_invoke$arity$1 ? ns_sym.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cemerick.cljs.test.registered_fixtures)) : ns_sym.call(null,cljs.core.deref(cemerick.cljs.test.registered_fixtures)))));(once_fixture_fn_23185.cljs$core$IFn$_invoke$arity$1 ? once_fixture_fn_23185.cljs$core$IFn$_invoke$arity$1((function (){var seq__23180 = cljs.core.seq(cljs.core.remove(cemerick.cljs.test.async_test_QMARK_,tests_23184));var chunk__23181 = null;var count__23182 = 0;var i__23183 = 0;while(true){
if((i__23183 < count__23182))
{var v = chunk__23181.cljs$core$IIndexed$_nth$arity$2(null,i__23183);(each_fixture_fn_23186.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn_23186.cljs$core$IFn$_invoke$arity$1(((function (seq__23180,chunk__23181,count__23182,i__23183,v){
return (function (){return (cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2 ? cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2(test_env,v) : cemerick.cljs.test.test_function.call(null,test_env,v));
});})(seq__23180,chunk__23181,count__23182,i__23183,v))
) : each_fixture_fn_23186.call(null,((function (seq__23180,chunk__23181,count__23182,i__23183,v){
return (function (){return (cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2 ? cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2(test_env,v) : cemerick.cljs.test.test_function.call(null,test_env,v));
});})(seq__23180,chunk__23181,count__23182,i__23183,v))
));
{
var G__23187 = seq__23180;
var G__23188 = chunk__23181;
var G__23189 = count__23182;
var G__23190 = (i__23183 + 1);
seq__23180 = G__23187;
chunk__23181 = G__23188;
count__23182 = G__23189;
i__23183 = G__23190;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__23180);if(temp__4092__auto__)
{var seq__23180__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23180__$1))
{var c__4004__auto__ = cljs.core.chunk_first(seq__23180__$1);{
var G__23191 = cljs.core.chunk_rest(seq__23180__$1);
var G__23192 = c__4004__auto__;
var G__23193 = cljs.core.count(c__4004__auto__);
var G__23194 = 0;
seq__23180 = G__23191;
chunk__23181 = G__23192;
count__23182 = G__23193;
i__23183 = G__23194;
continue;
}
} else
{var v = cljs.core.first(seq__23180__$1);(each_fixture_fn_23186.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn_23186.cljs$core$IFn$_invoke$arity$1(((function (seq__23180,chunk__23181,count__23182,i__23183,v,seq__23180__$1,temp__4092__auto__){
return (function (){return (cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2 ? cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2(test_env,v) : cemerick.cljs.test.test_function.call(null,test_env,v));
});})(seq__23180,chunk__23181,count__23182,i__23183,v,seq__23180__$1,temp__4092__auto__))
) : each_fixture_fn_23186.call(null,((function (seq__23180,chunk__23181,count__23182,i__23183,v,seq__23180__$1,temp__4092__auto__){
return (function (){return (cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2 ? cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2(test_env,v) : cemerick.cljs.test.test_function.call(null,test_env,v));
});})(seq__23180,chunk__23181,count__23182,i__23183,v,seq__23180__$1,temp__4092__auto__))
));
{
var G__23195 = cljs.core.next(seq__23180__$1);
var G__23196 = null;
var G__23197 = 0;
var G__23198 = 0;
seq__23180 = G__23195;
chunk__23181 = G__23196;
count__23182 = G__23197;
i__23183 = G__23198;
continue;
}
}
} else
{return null;
}
}
break;
}
})) : once_fixture_fn_23185.call(null,(function (){var seq__23180 = cljs.core.seq(cljs.core.remove(cemerick.cljs.test.async_test_QMARK_,tests_23184));var chunk__23181 = null;var count__23182 = 0;var i__23183 = 0;while(true){
if((i__23183 < count__23182))
{var v = chunk__23181.cljs$core$IIndexed$_nth$arity$2(null,i__23183);(each_fixture_fn_23186.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn_23186.cljs$core$IFn$_invoke$arity$1(((function (seq__23180,chunk__23181,count__23182,i__23183,v){
return (function (){return (cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2 ? cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2(test_env,v) : cemerick.cljs.test.test_function.call(null,test_env,v));
});})(seq__23180,chunk__23181,count__23182,i__23183,v))
) : each_fixture_fn_23186.call(null,((function (seq__23180,chunk__23181,count__23182,i__23183,v){
return (function (){return (cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2 ? cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2(test_env,v) : cemerick.cljs.test.test_function.call(null,test_env,v));
});})(seq__23180,chunk__23181,count__23182,i__23183,v))
));
{
var G__23199 = seq__23180;
var G__23200 = chunk__23181;
var G__23201 = count__23182;
var G__23202 = (i__23183 + 1);
seq__23180 = G__23199;
chunk__23181 = G__23200;
count__23182 = G__23201;
i__23183 = G__23202;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__23180);if(temp__4092__auto__)
{var seq__23180__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23180__$1))
{var c__4004__auto__ = cljs.core.chunk_first(seq__23180__$1);{
var G__23203 = cljs.core.chunk_rest(seq__23180__$1);
var G__23204 = c__4004__auto__;
var G__23205 = cljs.core.count(c__4004__auto__);
var G__23206 = 0;
seq__23180 = G__23203;
chunk__23181 = G__23204;
count__23182 = G__23205;
i__23183 = G__23206;
continue;
}
} else
{var v = cljs.core.first(seq__23180__$1);(each_fixture_fn_23186.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn_23186.cljs$core$IFn$_invoke$arity$1(((function (seq__23180,chunk__23181,count__23182,i__23183,v,seq__23180__$1,temp__4092__auto__){
return (function (){return (cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2 ? cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2(test_env,v) : cemerick.cljs.test.test_function.call(null,test_env,v));
});})(seq__23180,chunk__23181,count__23182,i__23183,v,seq__23180__$1,temp__4092__auto__))
) : each_fixture_fn_23186.call(null,((function (seq__23180,chunk__23181,count__23182,i__23183,v,seq__23180__$1,temp__4092__auto__){
return (function (){return (cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2 ? cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2(test_env,v) : cemerick.cljs.test.test_function.call(null,test_env,v));
});})(seq__23180,chunk__23181,count__23182,i__23183,v,seq__23180__$1,temp__4092__auto__))
));
{
var G__23207 = cljs.core.next(seq__23180__$1);
var G__23208 = null;
var G__23209 = 0;
var G__23210 = 0;
seq__23180 = G__23207;
chunk__23181 = G__23208;
count__23182 = G__23209;
i__23183 = G__23210;
continue;
}
}
} else
{return null;
}
}
break;
}
})));
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__23172_SHARP_,p2__23173_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cemerick.cljs.test.schedule_async_test,p1__23172_SHARP_,p2__23173_SHARP_);
}),cljs.core.constant$keyword$93.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(test_env)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$75,cljs.core.constant$keyword$86),cljs.core.meta),cljs.core.filter(cemerick.cljs.test.async_test_QMARK_,tests_23184)));
return cemerick.cljs.test.finish_test_entry_point(entry_point_QMARK___10116__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_23179;
}});
test_all_vars = function(test_env,ns_sym){
switch(arguments.length){
case 1:
return test_all_vars__1.call(this,test_env);
case 2:
return test_all_vars__2.call(this,test_env,ns_sym);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
test_all_vars.cljs$core$IFn$_invoke$arity$1 = test_all_vars__1;
test_all_vars.cljs$core$IFn$_invoke$arity$2 = test_all_vars__2;
return test_all_vars;
})()
;
/**
* If the namespace defines a function named test-ns-hook, calls that.
* Otherwise, calls test-all-vars on the namespace.  'ns' is a
* namespace object or a symbol.
* 
* Internally binds *report-counters* to an atom initialized to
* *inital-report-counters*.  Returns the final, dereferenced state of
* *report-counters*.
*/
cemerick.cljs.test.test_ns = (function() {
var test_ns = null;
var test_ns__1 = (function (ns_sym){return test_ns.cljs$core$IFn$_invoke$arity$2(cemerick.cljs.test.init_test_environment(),ns_sym);
});
var test_ns__2 = (function (test_env,ns_sym){var entry_point_QMARK___10116__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;var _STAR_entry_point_STAR_23212 = cemerick.cljs.test._STAR_entry_point_STAR_;try{cemerick.cljs.test._STAR_entry_point_STAR_ = false;
cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$101,cljs.core.constant$keyword$107,cljs.core.constant$keyword$108,ns_sym,cljs.core.constant$keyword$94,test_env], null));
var temp__4090__auto___23213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cemerick.cljs.test.registered_test_hooks),ns_sym);if(cljs.core.truth_(temp__4090__auto___23213))
{var test_hook_23214 = temp__4090__auto___23213;(test_hook_23214.cljs$core$IFn$_invoke$arity$1 ? test_hook_23214.cljs$core$IFn$_invoke$arity$1(test_env) : test_hook_23214.call(null,test_env));
} else
{cemerick.cljs.test.test_all_vars.cljs$core$IFn$_invoke$arity$2(test_env,ns_sym);
}
cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$101,cljs.core.constant$keyword$109,cljs.core.constant$keyword$108,ns_sym,cljs.core.constant$keyword$94,test_env], null));
return cemerick.cljs.test.finish_test_entry_point(entry_point_QMARK___10116__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_23212;
}});
test_ns = function(test_env,ns_sym){
switch(arguments.length){
case 1:
return test_ns__1.call(this,test_env);
case 2:
return test_ns__2.call(this,test_env,ns_sym);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
test_ns.cljs$core$IFn$_invoke$arity$1 = test_ns__1;
test_ns.cljs$core$IFn$_invoke$arity$2 = test_ns__2;
return test_ns;
})()
;
cemerick.cljs.test.test_summary = (function test_summary(test_env){var test_env__$1 = cemerick.cljs.test.maybe_deref(test_env);return cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.array_seq([test_env__$1,cemerick.cljs.test.maybe_deref(cljs.core.constant$keyword$93.cljs$core$IFn$_invoke$arity$1(test_env__$1))], 0)),cljs.core.constant$keyword$101,cljs.core.constant$keyword$106));
});
/**
* Runs all tests in the given namespaces; prints results.
* Defaults to current namespace if none given.  Returns a map
* summarizing test results.
* @param {...*} var_args
*/
cemerick.cljs.test.run_tests_STAR_ = (function() { 
var run_tests_STAR___delegate = function (namespaces){var vec__23221 = (((cljs.core.first(namespaces) instanceof cljs.core.Atom))?namespaces:cljs.core.cons(cemerick.cljs.test.init_test_environment(),namespaces));var test_env = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23221,0,null);var namespaces__$1 = cljs.core.nthnext(vec__23221,1);var entry_point_QMARK___10116__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;var _STAR_entry_point_STAR_23222 = cemerick.cljs.test._STAR_entry_point_STAR_;try{cemerick.cljs.test._STAR_entry_point_STAR_ = false;
var seq__23223_23227 = cljs.core.seq(cljs.core.distinct(namespaces__$1));var chunk__23224_23228 = null;var count__23225_23229 = 0;var i__23226_23230 = 0;while(true){
if((i__23226_23230 < count__23225_23229))
{var ns_23231 = chunk__23224_23228.cljs$core$IIndexed$_nth$arity$2(null,i__23226_23230);cemerick.cljs.test.test_ns.cljs$core$IFn$_invoke$arity$2(test_env,ns_23231);
{
var G__23232 = seq__23223_23227;
var G__23233 = chunk__23224_23228;
var G__23234 = count__23225_23229;
var G__23235 = (i__23226_23230 + 1);
seq__23223_23227 = G__23232;
chunk__23224_23228 = G__23233;
count__23225_23229 = G__23234;
i__23226_23230 = G__23235;
continue;
}
} else
{var temp__4092__auto___23236 = cljs.core.seq(seq__23223_23227);if(temp__4092__auto___23236)
{var seq__23223_23237__$1 = temp__4092__auto___23236;if(cljs.core.chunked_seq_QMARK_(seq__23223_23237__$1))
{var c__4004__auto___23238 = cljs.core.chunk_first(seq__23223_23237__$1);{
var G__23239 = cljs.core.chunk_rest(seq__23223_23237__$1);
var G__23240 = c__4004__auto___23238;
var G__23241 = cljs.core.count(c__4004__auto___23238);
var G__23242 = 0;
seq__23223_23227 = G__23239;
chunk__23224_23228 = G__23240;
count__23225_23229 = G__23241;
i__23226_23230 = G__23242;
continue;
}
} else
{var ns_23243 = cljs.core.first(seq__23223_23237__$1);cemerick.cljs.test.test_ns.cljs$core$IFn$_invoke$arity$2(test_env,ns_23243);
{
var G__23244 = cljs.core.next(seq__23223_23237__$1);
var G__23245 = null;
var G__23246 = 0;
var G__23247 = 0;
seq__23223_23227 = G__23244;
chunk__23224_23228 = G__23245;
count__23225_23229 = G__23246;
i__23226_23230 = G__23247;
continue;
}
}
} else
{}
}
break;
}
cemerick.cljs.test.on_testing_complete(test_env,cemerick.cljs.test.test_summary);
cemerick.cljs.test.test_summary(test_env);
return cemerick.cljs.test.finish_test_entry_point(entry_point_QMARK___10116__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_23222;
}};
var run_tests_STAR_ = function (var_args){
var namespaces = null;if (arguments.length > 0) {
  namespaces = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return run_tests_STAR___delegate.call(this,namespaces);};
run_tests_STAR_.cljs$lang$maxFixedArity = 0;
run_tests_STAR_.cljs$lang$applyTo = (function (arglist__23248){
var namespaces = cljs.core.seq(arglist__23248);
return run_tests_STAR___delegate(namespaces);
});
run_tests_STAR_.cljs$core$IFn$_invoke$arity$variadic = run_tests_STAR___delegate;
return run_tests_STAR_;
})()
;
goog.exportSymbol('cemerick.cljs.test.run_tests_STAR_', cemerick.cljs.test.run_tests_STAR_);
/**
* Runs all tests in all namespaces; prints results.
* Optional argument is a regular expression; only namespaces with
* names matching the regular expression (with re-matches) will be
* tested.
*/
cemerick.cljs.test.run_all_tests = (function() {
var run_all_tests = null;
var run_all_tests__0 = (function (){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cemerick.cljs.test.run_tests_STAR_,cljs.core.keys(cljs.core.deref(cemerick.cljs.test.registered_tests)));
});
var run_all_tests__1 = (function (re){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cemerick.cljs.test.run_tests_STAR_,cljs.core.filter((function (p1__23249_SHARP_){return cljs.core.re_matches(re,cljs.core.name(p1__23249_SHARP_));
}),cljs.core.keys(cljs.core.deref(cemerick.cljs.test.registered_tests))));
});
run_all_tests = function(re){
switch(arguments.length){
case 0:
return run_all_tests__0.call(this);
case 1:
return run_all_tests__1.call(this,re);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
run_all_tests.cljs$core$IFn$_invoke$arity$0 = run_all_tests__0;
run_all_tests.cljs$core$IFn$_invoke$arity$1 = run_all_tests__1;
return run_all_tests;
})()
;
goog.exportSymbol('cemerick.cljs.test.run_all_tests', cemerick.cljs.test.run_all_tests);
/**
* Returns true if the given test summary indicates all tests
* were successful, false otherwise.
*/
cemerick.cljs.test.successful_QMARK_ = (function successful_QMARK_(test_env){var map__23251 = cemerick.cljs.test.maybe_deref(test_env);var map__23251__$1 = ((cljs.core.seq_QMARK_(map__23251))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23251):map__23251);var async = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23251__$1,cljs.core.constant$keyword$93);var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23251__$1,cljs.core.constant$keyword$89);var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23251__$1,cljs.core.constant$keyword$88);var and__3273__auto__ = cemerick.cljs.test.testing_complete_QMARK_(test_env);if(cljs.core.truth_(and__3273__auto__))
{var and__3273__auto____$1 = ((function (){var or__3285__auto__ = fail;if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return 0;
}
})() === 0);if(and__3273__auto____$1)
{var and__3273__auto____$2 = ((function (){var or__3285__auto__ = error;if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return 0;
}
})() === 0);if(and__3273__auto____$2)
{var or__3285__auto__ = (async == null);if(or__3285__auto__)
{return or__3285__auto__;
} else
{return successful_QMARK_(async);
}
} else
{return and__3273__auto____$2;
}
} else
{return and__3273__auto____$1;
}
} else
{return and__3273__auto__;
}
});
goog.exportSymbol('cemerick.cljs.test.successful_QMARK_', cemerick.cljs.test.successful_QMARK_);
cemerick.cljs.test.set_print_fn_BANG_ = (function set_print_fn_BANG_(f){return cljs.core._STAR_print_fn_STAR_ = f;
});
goog.exportSymbol('cemerick.cljs.test.set_print_fn_BANG_', cemerick.cljs.test.set_print_fn_BANG_);
