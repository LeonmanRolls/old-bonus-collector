// Compiled by ClojureScript 0.0-2069
goog.provide('cemerick.cljs.test');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
cemerick.cljs.test._STAR_test_print_fn_STAR_ = null;
cemerick.cljs.test._STAR_entry_point_STAR_ = true;
cemerick.cljs.test._STAR_test_ctx_STAR_ = null;
cemerick.cljs.test.init_test_environment_STAR_ = (function init_test_environment_STAR_(aux_data){return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$209,0,cljs.core.constant$keyword$210,0,cljs.core.constant$keyword$211,0,cljs.core.constant$keyword$212,0], null),(cljs.core.truth_(cemerick.cljs.test._STAR_test_print_fn_STAR_)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$213,cemerick.cljs.test._STAR_test_print_fn_STAR_], null):null)], 0)),cljs.core.constant$keyword$214,cljs.core.List.EMPTY),aux_data], 0)));
});
cemerick.cljs.test.init_test_environment = (function init_test_environment(){var G__40414 = cemerick.cljs.test.init_test_environment_STAR_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$215,cljs.core.List.EMPTY], null));cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(G__40414,cljs.core.assoc,cljs.core.constant$keyword$216,cemerick.cljs.test.init_test_environment_STAR_(cljs.core.PersistentArrayMap.EMPTY));
return G__40414;
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
cemerick.cljs.test.TestContext.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3844__auto__,k40416,else__3845__auto__){var self__ = this;
var this__3844__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_(k40416,cljs.core.constant$keyword$217))
{return self__.test_env;
} else
{if(cljs.core.keyword_identical_QMARK_(k40416,cljs.core.constant$keyword$218))
{return self__.test_name;
} else
{if(cljs.core.constant$keyword$129)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40416,else__3845__auto__);
} else
{return null;
}
}
}
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3849__auto__,k__3850__auto__,G__40415){var self__ = this;
var this__3849__auto____$1 = this;var pred__40418 = cljs.core.keyword_identical_QMARK_;var expr__40419 = k__3850__auto__;if(cljs.core.truth_((pred__40418.cljs$core$IFn$_invoke$arity$2 ? pred__40418.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$217,expr__40419) : pred__40418.call(null,cljs.core.constant$keyword$217,expr__40419))))
{return (new cemerick.cljs.test.TestContext(G__40415,self__.test_name,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__40418.cljs$core$IFn$_invoke$arity$2 ? pred__40418.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$218,expr__40419) : pred__40418.call(null,cljs.core.constant$keyword$218,expr__40419))))
{return (new cemerick.cljs.test.TestContext(self__.test_env,G__40415,self__.__meta,self__.__extmap,null));
} else
{return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__3850__auto__,G__40415),null));
}
}
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__3856__auto__,writer__3857__auto__,opts__3858__auto__){var self__ = this;
var this__3856__auto____$1 = this;var pr_pair__3859__auto__ = (function (keyval__3860__auto__){return cljs.core.pr_sequential_writer(writer__3857__auto__,cljs.core.pr_writer,""," ","",opts__3858__auto__,keyval__3860__auto__);
});return cljs.core.pr_sequential_writer(writer__3857__auto__,pr_pair__3859__auto__,"#cemerick.cljs.test.TestContext{",", ","}",opts__3858__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$217,self__.test_env],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$218,self__.test_name],null))], null),self__.__extmap));
});
cemerick.cljs.test.TestContext.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3847__auto__,entry__3848__auto__){var self__ = this;
var this__3847__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__3848__auto__))
{return cljs.core._assoc(this__3847__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__3848__auto__,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__3848__auto__,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__3847__auto____$1,entry__3848__auto__);
}
});
cemerick.cljs.test.TestContext.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__3854__auto__){var self__ = this;
var this__3854__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$217,self__.test_env],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$218,self__.test_name],null))], null),self__.__extmap));
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
cemerick.cljs.test.TestContext.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3841__auto__,G__40415){var self__ = this;
var this__3841__auto____$1 = this;return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,G__40415,self__.__extmap,self__.__hash));
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3840__auto__){var self__ = this;
var this__3840__auto____$1 = this;return self__.__meta;
});
cemerick.cljs.test.TestContext.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3851__auto__,k__3852__auto__){var self__ = this;
var this__3851__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$218,null,cljs.core.constant$keyword$217,null], null), null),k__3852__auto__))
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
cemerick.cljs.test.map__GT_TestContext = (function map__GT_TestContext(G__40417){return (new cemerick.cljs.test.TestContext(cljs.core.constant$keyword$217.cljs$core$IFn$_invoke$arity$1(G__40417),cljs.core.constant$keyword$218.cljs$core$IFn$_invoke$arity$1(G__40417),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40417,cljs.core.constant$keyword$217,cljs.core.array_seq([cljs.core.constant$keyword$218], 0))));
});
cemerick.cljs.test.maybe_deref = (function maybe_deref(x){if((function (){var G__40422 = x;if(G__40422)
{var bit__3906__auto__ = (G__40422.cljs$lang$protocol_mask$partition0$ & 32768);if((bit__3906__auto__) || (G__40422.cljs$core$IDeref$))
{return true;
} else
{if((!G__40422.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__40422);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__40422);
}
})())
{return cljs.core.deref(x);
} else
{return x;
}
});
cemerick.cljs.test.testing_complete_QMARK_ = (function testing_complete_QMARK_(test_env){var map__40424 = cemerick.cljs.test.maybe_deref(test_env);var map__40424__$1 = ((cljs.core.seq_QMARK_(map__40424))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40424):map__40424);var remaining = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40424__$1,cljs.core.constant$keyword$219);var running = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40424__$1,cljs.core.constant$keyword$220);var async = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40424__$1,cljs.core.constant$keyword$216);var and__3273__auto__ = cljs.core.empty_QMARK_(remaining);if(and__3273__auto__)
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
{cljs.core.add_watch(cljs.core.constant$keyword$216.cljs$core$IFn$_invoke$arity$1(cemerick.cljs.test.maybe_deref(test_env)),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("on-progress"),(function (key,ref,old,new$){var vec__40427 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40425_SHARP_){return cljs.core.select_keys(p1__40425_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$209,cljs.core.constant$keyword$210,cljs.core.constant$keyword$211,cljs.core.constant$keyword$212], null));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old,new$], null));var oldv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40427,0,null);var newv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40427,1,null);var complete_QMARK_ = cemerick.cljs.test.testing_complete_QMARK_(new$);if(cljs.core.truth_((function (){var or__3285__auto__ = complete_QMARK_;if(cljs.core.truth_(or__3285__auto__))
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
cemerick.cljs.test.testing_vars_str = (function testing_vars_str(p__40428){var map__40430 = p__40428;var map__40430__$1 = ((cljs.core.seq_QMARK_(map__40430))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40430):map__40430);var m = map__40430__$1;var test_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40430__$1,cljs.core.constant$keyword$218);var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40430__$1,cljs.core.constant$keyword$217);var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40430__$1,cljs.core.constant$keyword$221);var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40430__$1,cljs.core.constant$keyword$222);return [cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__3285__auto__ = cljs.core.seq(cljs.core.reverse(cljs.core.constant$keyword$215.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(test_env))));if(or__3285__auto__)
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
cemerick.cljs.test.testing_contexts_str = (function testing_contexts_str(test_env){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(" ",cljs.core.reverse(cljs.core.constant$keyword$214.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(test_env)))));
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
cemerick.cljs.test.report = (function (){var method_table__4113__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4114__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__4115__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4116__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4117__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$223,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("report",cljs.core.constant$keyword$224,cljs.core.constant$keyword$130,hierarchy__4117__auto__,method_table__4113__auto__,prefer_table__4114__auto__,method_cache__4115__auto__,cached_hierarchy__4116__auto__));
})();
cemerick.cljs.test.file_and_line = (function file_and_line(error){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$222,error.fileName,cljs.core.constant$keyword$221,error.lineNumber], null);
});
/**
* Add file and line information to a test result and call report.
* If you are writing a custom assert-expr method, call this function
* to pass test results to report.
*/
cemerick.cljs.test.do_report = (function() {
var do_report = null;
var do_report__1 = (function (m){return (cemerick.cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cemerick.cljs.test.report.cljs$core$IFn$_invoke$arity$1((function (){var G__40435 = cljs.core.constant$keyword$224.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$212,G__40435))
{return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cemerick.cljs.test.file_and_line(cljs.core.constant$keyword$225.cljs$core$IFn$_invoke$arity$1(m)),m], 0));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$211,G__40435))
{return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cemerick.cljs.test.file_and_line(Error()),m], 0));
} else
{if(cljs.core.constant$keyword$129)
{return m;
} else
{return null;
}
}
}
})()) : cemerick.cljs.test.report.call(null,(function (){var G__40435 = cljs.core.constant$keyword$224.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$212,G__40435))
{return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cemerick.cljs.test.file_and_line(cljs.core.constant$keyword$225.cljs$core$IFn$_invoke$arity$1(m)),m], 0));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$211,G__40435))
{return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cemerick.cljs.test.file_and_line(Error()),m], 0));
} else
{if(cljs.core.constant$keyword$129)
{return m;
} else
{return null;
}
}
}
})()));
});
var do_report__2 = (function (p__40431,m){var map__40434 = p__40431;var map__40434__$1 = ((cljs.core.seq_QMARK_(map__40434))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40434):map__40434);var test_ctx = map__40434__$1;var test_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40434__$1,cljs.core.constant$keyword$218);var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40434__$1,cljs.core.constant$keyword$217);if((test_ctx instanceof cemerick.cljs.test.TestContext))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",-1611433981,null),new cljs.core.Symbol(null,"TestContext","TestContext",586269270,null),new cljs.core.Symbol(null,"test-ctx","test-ctx",1506483237,null))], 0)))].join('')));
}
return do_report.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m,test_ctx], 0)));
});
do_report = function(p__40431,m){
switch(arguments.length){
case 1:
return do_report__1.call(this,p__40431);
case 2:
return do_report__2.call(this,p__40431,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
do_report.cljs$core$IFn$_invoke$arity$1 = do_report__1;
do_report.cljs$core$IFn$_invoke$arity$2 = do_report__2;
return do_report;
})()
;
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$130,(function (p__40436){var map__40437 = p__40436;var map__40437__$1 = ((cljs.core.seq_QMARK_(map__40437))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40437):map__40437);var m = map__40437__$1;var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40437__$1,cljs.core.constant$keyword$217);var _STAR_print_fn_STAR_40438 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3285__auto__ = cljs.core.constant$keyword$213.cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40438;
}}));
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$210,(function (p__40439){var map__40440 = p__40439;var map__40440__$1 = ((cljs.core.seq_QMARK_(map__40440))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40440):map__40440);var m = map__40440__$1;var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40440__$1,cljs.core.constant$keyword$217);var _STAR_print_fn_STAR_40441 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3285__auto__ = cljs.core.constant$keyword$213.cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
return cemerick.cljs.test.inc_report_counter(test_env,cljs.core.constant$keyword$210);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40441;
}}));
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$211,(function (p__40442){var map__40443 = p__40442;var map__40443__$1 = ((cljs.core.seq_QMARK_(map__40443))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40443):map__40443);var m = map__40443__$1;var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40443__$1,cljs.core.constant$keyword$217);var _STAR_print_fn_STAR_40444 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3285__auto__ = cljs.core.constant$keyword$213.cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
cemerick.cljs.test.inc_report_counter(test_env,cljs.core.constant$keyword$211);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\nFAIL in",cemerick.cljs.test.testing_vars_str(m)], 0));
if(cljs.core.seq(cljs.core.constant$keyword$214.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(test_env))))
{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cemerick.cljs.test.testing_contexts_str(test_env)], 0));
} else
{}
var temp__4092__auto___40445 = cljs.core.constant$keyword$226.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4092__auto___40445))
{var message_40446 = temp__4092__auto___40445;cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([message_40446], 0));
} else
{}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["expected:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$227.cljs$core$IFn$_invoke$arity$1(m)], 0))], 0));
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  actual:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$225.cljs$core$IFn$_invoke$arity$1(m)], 0))], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40444;
}}));
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$212,(function (p__40447){var map__40448 = p__40447;var map__40448__$1 = ((cljs.core.seq_QMARK_(map__40448))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40448):map__40448);var m = map__40448__$1;var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40448__$1,cljs.core.constant$keyword$217);var _STAR_print_fn_STAR_40449 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3285__auto__ = cljs.core.constant$keyword$213.cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
cemerick.cljs.test.inc_report_counter(test_env,cljs.core.constant$keyword$212);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\nERROR in",cemerick.cljs.test.testing_vars_str(m)], 0));
if(cljs.core.seq(cljs.core.constant$keyword$214.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(test_env))))
{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cemerick.cljs.test.testing_contexts_str(test_env)], 0));
} else
{}
var temp__4092__auto___40450 = cljs.core.constant$keyword$226.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4092__auto___40450))
{var message_40451 = temp__4092__auto___40450;cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([message_40451], 0));
} else
{}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["expected:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$227.cljs$core$IFn$_invoke$arity$1(m)], 0))], 0));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  actual: "], 0));
var actual = cljs.core.constant$keyword$225.cljs$core$IFn$_invoke$arity$1(m);if((actual instanceof Error))
{return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([actual.stack], 0));
} else
{return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([actual], 0));
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40449;
}}));
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$228,(function (p__40452){var map__40453 = p__40452;var map__40453__$1 = ((cljs.core.seq_QMARK_(map__40453))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40453):map__40453);var m = map__40453__$1;var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40453__$1,cljs.core.constant$keyword$217);var _STAR_print_fn_STAR_40454 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3285__auto__ = cljs.core.constant$keyword$213.cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
cemerick.cljs.test.inc_report_counter(test_env,cljs.core.constant$keyword$228);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\nWARNING in",cemerick.cljs.test.testing_vars_str(m)], 0));
if(cljs.core.seq(cljs.core.constant$keyword$214.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(test_env))))
{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cemerick.cljs.test.testing_contexts_str(test_env)], 0));
} else
{}
var temp__4092__auto__ = cljs.core.constant$keyword$226.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4092__auto__))
{var message = temp__4092__auto__;return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([message], 0));
} else
{return null;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40454;
}}));
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$229,(function (p__40455){var map__40456 = p__40455;var map__40456__$1 = ((cljs.core.seq_QMARK_(map__40456))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40456):map__40456);var test_env = map__40456__$1;var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40456__$1,cljs.core.constant$keyword$212);var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40456__$1,cljs.core.constant$keyword$211);var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40456__$1,cljs.core.constant$keyword$210);var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40456__$1,cljs.core.constant$keyword$209);var _STAR_print_fn_STAR_40457 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3285__auto__ = cljs.core.constant$keyword$213.cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\nRan",test,"tests containing",((pass + fail) + error),"assertions."], 0));
var temp__4090__auto__ = (function (){var and__3273__auto__ = cljs.core.not(cemerick.cljs.test.testing_complete_QMARK_(test_env));if(and__3273__auto__)
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$219,cljs.core.constant$keyword$220).call(null,cljs.core.deref(cljs.core.constant$keyword$216.cljs$core$IFn$_invoke$arity$1(test_env)))));
} else
{return and__3273__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var pending_count = temp__4090__auto__;return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Waiting on",pending_count,[cljs.core.str("asynchronous test"),cljs.core.str((((pending_count > 1))?"s":null)),cljs.core.str(" to complete.")].join('')], 0));
} else
{return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Testing complete:",fail,"failures,",error,"errors."], 0));
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40457;
}}));
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$230,(function (p__40458){var map__40459 = p__40458;var map__40459__$1 = ((cljs.core.seq_QMARK_(map__40459))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40459):map__40459);var m = map__40459__$1;var async = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40459__$1,cljs.core.constant$keyword$216);var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40459__$1,cljs.core.constant$keyword$217);var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40459__$1,cljs.core.constant$keyword$231);var _STAR_print_fn_STAR_40460 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__3285__auto__ = cljs.core.constant$keyword$213.cljs$core$IFn$_invoke$arity$1(test_env);if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\nTesting",ns,(cljs.core.truth_(async)?"(async)":"")], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40460;
}}));
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$232,(function (p__40461){var map__40462 = p__40461;var map__40462__$1 = ((cljs.core.seq_QMARK_(map__40462))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40462):map__40462);var m = map__40462__$1;var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40462__$1,cljs.core.constant$keyword$217);return null;
}));
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$233,(function (p__40463){var map__40464 = p__40463;var map__40464__$1 = ((cljs.core.seq_QMARK_(map__40464))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40464):map__40464);var m = map__40464__$1;var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40464__$1,cljs.core.constant$keyword$217);return null;
}));
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$234,(function (p__40465){var map__40466 = p__40465;var map__40466__$1 = ((cljs.core.seq_QMARK_(map__40466))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40466):map__40466);var m = map__40466__$1;var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40466__$1,cljs.core.constant$keyword$217);return null;
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
register_fixtures_BANG_.cljs$lang$applyTo = (function (arglist__40467){
var ns_sym = cljs.core.first(arglist__40467);
arglist__40467 = cljs.core.next(arglist__40467);
var fixture_type = cljs.core.first(arglist__40467);
var fixture_fns = cljs.core.rest(arglist__40467);
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
cemerick.cljs.test.async_test_QMARK_ = (function async_test_QMARK_(test_fn){return cljs.core.boolean$(cljs.core.constant$keyword$216.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(test_fn)));
});
cemerick.cljs.test.test_async_fn = (function test_async_fn(async_test_env,test_name,test_fn){cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$224,cljs.core.constant$keyword$233,cljs.core.constant$keyword$235,test_fn,cljs.core.constant$keyword$217,async_test_env,cljs.core.constant$keyword$218,test_name], null));
cemerick.cljs.test.inc_report_counter(async_test_env,cljs.core.constant$keyword$209);
return (test_fn.cljs$core$IFn$_invoke$arity$1 ? test_fn.cljs$core$IFn$_invoke$arity$1((new cemerick.cljs.test.TestContext(async_test_env,test_name))) : test_fn.call(null,(new cemerick.cljs.test.TestContext(async_test_env,test_name))));
});
cemerick.cljs.test.start_next_async_test = (function start_next_async_test(async_test_env){var next_test = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((function (){return null;
}));cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(async_test_env,(function (env){var temp__4090__auto__ = (function (){var and__3273__auto__ = cljs.core.not(cljs.core.constant$keyword$236.cljs$core$IFn$_invoke$arity$1(env));if(and__3273__auto__)
{return cljs.core.first(cljs.core.constant$keyword$219.cljs$core$IFn$_invoke$arity$1(env));
} else
{return and__3273__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var vec__40469 = temp__4090__auto__;var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40469,0,null);var testfn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40469,1,null);cljs.core.reset_BANG_(next_test,testfn);
var ns_40470 = cljs.core.namespace(name);if(cljs.core.contains_QMARK_(cljs.core.constant$keyword$237.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(async_test_env)),ns_40470))
{} else
{cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$224,cljs.core.constant$keyword$230,cljs.core.constant$keyword$231,ns_40470,cljs.core.constant$keyword$217,async_test_env,cljs.core.constant$keyword$216,true], null));
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(async_test_env,cljs.core.update_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$237], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),ns_40470], 0));
}
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$219], null),cljs.core.dissoc,name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$220], null),cljs.core.assoc,name,(new Date()));
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
cemerick.cljs.test.squelch_internals = (function squelch_internals(test_env){var G__40475 = test_env;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(G__40475,(function (p1__40471_SHARP_){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env,p__40476){var vec__40477 = p__40476;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40477,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40477,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(k),cljs.core.namespace(cljs.core.constant$keyword$238)))
{return env;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,p1__40471_SHARP_);
}));
return G__40475;
});
cemerick.cljs.test.finish_test_entry_point = (function finish_test_entry_point(entry_point_QMARK_,test_env){if(cljs.core.truth_(entry_point_QMARK_))
{if(cljs.core.empty_QMARK_(cljs.core.constant$keyword$219.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.constant$keyword$216.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(test_env))))))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(test_env,cljs.core.dissoc,cljs.core.constant$keyword$216);
} else
{cemerick.cljs.test.start_next_async_test(cljs.core.constant$keyword$216.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(test_env)));
}
return cljs.core.deref(cemerick.cljs.test.squelch_internals(test_env));
} else
{return test_env;
}
});
cemerick.cljs.test.schedule_async_test = (function schedule_async_test(async_test_env,test_name,test_fn){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(async_test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$219], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.sorted_map()),test_name,cljs.core.array_seq([cljs.core.with_meta((function (){return cemerick.cljs.test.test_async_fn(async_test_env,test_name,test_fn);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$198,test_name], null))], 0));
return async_test_env;
});
cemerick.cljs.test.done_STAR_ = (function() {
var done_STAR_ = null;
var done_STAR___1 = (function (p__40479){var map__40483 = p__40479;var map__40483__$1 = ((cljs.core.seq_QMARK_(map__40483))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40483):map__40483);var test_ctx = map__40483__$1;var test_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40483__$1,cljs.core.constant$keyword$218);var async_test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40483__$1,cljs.core.constant$keyword$217);if((test_ctx instanceof cemerick.cljs.test.TestContext))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",-1611433981,null),new cljs.core.Symbol(null,"TestContext","TestContext",586269270,null),new cljs.core.Symbol(null,"test-ctx","test-ctx",1506483237,null))], 0)))].join('')));
}
var first_call_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(async_test_env,(function (env){cljs.core.reset_BANG_(first_call_QMARK_,cljs.core.contains_QMARK_(cljs.core.constant$keyword$220.cljs$core$IFn$_invoke$arity$1(env),test_name));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$220], null),cljs.core.dissoc,test_name);
}));
if(cljs.core.truth_(cljs.core.deref(first_call_QMARK_)))
{cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$224,cljs.core.constant$keyword$234,cljs.core.constant$keyword$235,test_name], null),test_ctx], 0)));
if(cljs.core.truth_(cemerick.cljs.test.testing_complete_QMARK_(async_test_env)))
{cemerick.cljs.test.squelch_internals(async_test_env);
} else
{cemerick.cljs.test.start_next_async_test(async_test_env);
}
} else
{cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$224,cljs.core.constant$keyword$228,cljs.core.constant$keyword$226,"`(done)` called multiple times to signal end-of-test"], null),test_ctx], 0)));
}
return async_test_env;
});
var done_STAR___2 = (function (p__40478,error){var map__40482 = p__40478;var map__40482__$1 = ((cljs.core.seq_QMARK_(map__40482))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40482):map__40482);var test_ctx = map__40482__$1;var test_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40482__$1,cljs.core.constant$keyword$218);var test_env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40482__$1,cljs.core.constant$keyword$217);if((test_ctx instanceof cemerick.cljs.test.TestContext))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",-1611433981,null),new cljs.core.Symbol(null,"TestContext","TestContext",586269270,null),new cljs.core.Symbol(null,"test-ctx","test-ctx",1506483237,null))], 0)))].join('')));
}
cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$224,cljs.core.constant$keyword$212,cljs.core.constant$keyword$226,"Uncaught exception, not in assertion.",cljs.core.constant$keyword$227,null,cljs.core.constant$keyword$225,error], null),test_ctx], 0))));
return done_STAR_.cljs$core$IFn$_invoke$arity$1(test_ctx);
});
done_STAR_ = function(p__40478,error){
switch(arguments.length){
case 1:
return done_STAR___1.call(this,p__40478);
case 2:
return done_STAR___2.call(this,p__40478,error);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
done_STAR_.cljs$core$IFn$_invoke$arity$1 = done_STAR___1;
done_STAR_.cljs$core$IFn$_invoke$arity$2 = done_STAR___2;
return done_STAR_;
})()
;
cemerick.cljs.test.stop = (function stop(async_test_env){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(async_test_env,cljs.core.assoc,cljs.core.constant$keyword$236,true);
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
var test_function__2 = (function (test_env,v){var entry_point_QMARK___10116__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;var _STAR_entry_point_STAR_40487 = cemerick.cljs.test._STAR_entry_point_STAR_;try{cemerick.cljs.test._STAR_entry_point_STAR_ = false;
if(cljs.core.fn_QMARK_(v))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("test-var must be passed the function to be tested (not a symbol naming it)"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",-1640430032,null),new cljs.core.Symbol(null,"v","v",-1640531409,null))], 0)))].join('')));
}
var map__40488_40490 = cljs.core.meta(v);var map__40488_40491__$1 = ((cljs.core.seq_QMARK_(map__40488_40490))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40488_40490):map__40488_40490);var t_40492 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40488_40491__$1,cljs.core.constant$keyword$209);var test_name_40493 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40488_40491__$1,cljs.core.constant$keyword$198);var async_QMARK__40494 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40488_40491__$1,cljs.core.constant$keyword$216);if(cljs.core.truth_(t_40492))
{if(cljs.core.truth_(async_QMARK__40494))
{cemerick.cljs.test.schedule_async_test(cljs.core.constant$keyword$216.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(test_env)),test_name_40493,t_40492);
} else
{try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$5(test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$215], null),cljs.core.conj,(function (){var or__3285__auto__ = test_name_40493;if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return v;
}
})());
cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$224,cljs.core.constant$keyword$233,cljs.core.constant$keyword$235,v,cljs.core.constant$keyword$217,test_env,cljs.core.constant$keyword$218,test_name_40493], null));
cemerick.cljs.test.inc_report_counter(test_env,cljs.core.constant$keyword$209);
try{(t_40492.cljs$core$IFn$_invoke$arity$1 ? t_40492.cljs$core$IFn$_invoke$arity$1((new cemerick.cljs.test.TestContext(test_env,test_name_40493))) : t_40492.call(null,(new cemerick.cljs.test.TestContext(test_env,test_name_40493))));
}catch (e40489){if((e40489 instanceof Error))
{var e_40495 = e40489;cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$224,cljs.core.constant$keyword$212,cljs.core.constant$keyword$226,"Uncaught exception, not in assertion.",cljs.core.constant$keyword$217,test_env,cljs.core.constant$keyword$218,test_name_40493,cljs.core.constant$keyword$227,null,cljs.core.constant$keyword$225,e_40495], null));
} else
{if(cljs.core.constant$keyword$129)
{throw e40489;
} else
{}
}
}cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$224,cljs.core.constant$keyword$234,cljs.core.constant$keyword$235,v,cljs.core.constant$keyword$217,test_env,cljs.core.constant$keyword$218,test_name_40493], null));
}finally {cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$215], null),cljs.core.pop);
}}
} else
{}
return cemerick.cljs.test.finish_test_entry_point(entry_point_QMARK___10116__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_40487;
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
var test_all_vars__2 = (function (test_env,ns_sym){var entry_point_QMARK___10116__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;var _STAR_entry_point_STAR_40504 = cemerick.cljs.test._STAR_entry_point_STAR_;try{cemerick.cljs.test._STAR_entry_point_STAR_ = false;
var tests_40509 = cljs.core.filter((function (p1__40496_SHARP_){return cljs.core.constant$keyword$209.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__40496_SHARP_));
}),cljs.core.vals(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cemerick.cljs.test.registered_tests),ns_sym)));var once_fixture_fn_40510 = cemerick.cljs.test.join_fixtures(cljs.core.constant$keyword$239.cljs$core$IFn$_invoke$arity$1((ns_sym.cljs$core$IFn$_invoke$arity$1 ? ns_sym.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cemerick.cljs.test.registered_fixtures)) : ns_sym.call(null,cljs.core.deref(cemerick.cljs.test.registered_fixtures)))));var each_fixture_fn_40511 = cemerick.cljs.test.join_fixtures(cljs.core.constant$keyword$240.cljs$core$IFn$_invoke$arity$1((ns_sym.cljs$core$IFn$_invoke$arity$1 ? ns_sym.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cemerick.cljs.test.registered_fixtures)) : ns_sym.call(null,cljs.core.deref(cemerick.cljs.test.registered_fixtures)))));(once_fixture_fn_40510.cljs$core$IFn$_invoke$arity$1 ? once_fixture_fn_40510.cljs$core$IFn$_invoke$arity$1((function (){var seq__40505 = cljs.core.seq(cljs.core.remove(cemerick.cljs.test.async_test_QMARK_,tests_40509));var chunk__40506 = null;var count__40507 = 0;var i__40508 = 0;while(true){
if((i__40508 < count__40507))
{var v = chunk__40506.cljs$core$IIndexed$_nth$arity$2(null,i__40508);(each_fixture_fn_40511.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn_40511.cljs$core$IFn$_invoke$arity$1(((function (seq__40505,chunk__40506,count__40507,i__40508,v){
return (function (){return (cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2 ? cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2(test_env,v) : cemerick.cljs.test.test_function.call(null,test_env,v));
});})(seq__40505,chunk__40506,count__40507,i__40508,v))
) : each_fixture_fn_40511.call(null,((function (seq__40505,chunk__40506,count__40507,i__40508,v){
return (function (){return (cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2 ? cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2(test_env,v) : cemerick.cljs.test.test_function.call(null,test_env,v));
});})(seq__40505,chunk__40506,count__40507,i__40508,v))
));
{
var G__40512 = seq__40505;
var G__40513 = chunk__40506;
var G__40514 = count__40507;
var G__40515 = (i__40508 + 1);
seq__40505 = G__40512;
chunk__40506 = G__40513;
count__40507 = G__40514;
i__40508 = G__40515;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__40505);if(temp__4092__auto__)
{var seq__40505__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__40505__$1))
{var c__4004__auto__ = cljs.core.chunk_first(seq__40505__$1);{
var G__40516 = cljs.core.chunk_rest(seq__40505__$1);
var G__40517 = c__4004__auto__;
var G__40518 = cljs.core.count(c__4004__auto__);
var G__40519 = 0;
seq__40505 = G__40516;
chunk__40506 = G__40517;
count__40507 = G__40518;
i__40508 = G__40519;
continue;
}
} else
{var v = cljs.core.first(seq__40505__$1);(each_fixture_fn_40511.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn_40511.cljs$core$IFn$_invoke$arity$1(((function (seq__40505,chunk__40506,count__40507,i__40508,v,seq__40505__$1,temp__4092__auto__){
return (function (){return (cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2 ? cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2(test_env,v) : cemerick.cljs.test.test_function.call(null,test_env,v));
});})(seq__40505,chunk__40506,count__40507,i__40508,v,seq__40505__$1,temp__4092__auto__))
) : each_fixture_fn_40511.call(null,((function (seq__40505,chunk__40506,count__40507,i__40508,v,seq__40505__$1,temp__4092__auto__){
return (function (){return (cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2 ? cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2(test_env,v) : cemerick.cljs.test.test_function.call(null,test_env,v));
});})(seq__40505,chunk__40506,count__40507,i__40508,v,seq__40505__$1,temp__4092__auto__))
));
{
var G__40520 = cljs.core.next(seq__40505__$1);
var G__40521 = null;
var G__40522 = 0;
var G__40523 = 0;
seq__40505 = G__40520;
chunk__40506 = G__40521;
count__40507 = G__40522;
i__40508 = G__40523;
continue;
}
}
} else
{return null;
}
}
break;
}
})) : once_fixture_fn_40510.call(null,(function (){var seq__40505 = cljs.core.seq(cljs.core.remove(cemerick.cljs.test.async_test_QMARK_,tests_40509));var chunk__40506 = null;var count__40507 = 0;var i__40508 = 0;while(true){
if((i__40508 < count__40507))
{var v = chunk__40506.cljs$core$IIndexed$_nth$arity$2(null,i__40508);(each_fixture_fn_40511.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn_40511.cljs$core$IFn$_invoke$arity$1(((function (seq__40505,chunk__40506,count__40507,i__40508,v){
return (function (){return (cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2 ? cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2(test_env,v) : cemerick.cljs.test.test_function.call(null,test_env,v));
});})(seq__40505,chunk__40506,count__40507,i__40508,v))
) : each_fixture_fn_40511.call(null,((function (seq__40505,chunk__40506,count__40507,i__40508,v){
return (function (){return (cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2 ? cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2(test_env,v) : cemerick.cljs.test.test_function.call(null,test_env,v));
});})(seq__40505,chunk__40506,count__40507,i__40508,v))
));
{
var G__40524 = seq__40505;
var G__40525 = chunk__40506;
var G__40526 = count__40507;
var G__40527 = (i__40508 + 1);
seq__40505 = G__40524;
chunk__40506 = G__40525;
count__40507 = G__40526;
i__40508 = G__40527;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__40505);if(temp__4092__auto__)
{var seq__40505__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__40505__$1))
{var c__4004__auto__ = cljs.core.chunk_first(seq__40505__$1);{
var G__40528 = cljs.core.chunk_rest(seq__40505__$1);
var G__40529 = c__4004__auto__;
var G__40530 = cljs.core.count(c__4004__auto__);
var G__40531 = 0;
seq__40505 = G__40528;
chunk__40506 = G__40529;
count__40507 = G__40530;
i__40508 = G__40531;
continue;
}
} else
{var v = cljs.core.first(seq__40505__$1);(each_fixture_fn_40511.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn_40511.cljs$core$IFn$_invoke$arity$1(((function (seq__40505,chunk__40506,count__40507,i__40508,v,seq__40505__$1,temp__4092__auto__){
return (function (){return (cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2 ? cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2(test_env,v) : cemerick.cljs.test.test_function.call(null,test_env,v));
});})(seq__40505,chunk__40506,count__40507,i__40508,v,seq__40505__$1,temp__4092__auto__))
) : each_fixture_fn_40511.call(null,((function (seq__40505,chunk__40506,count__40507,i__40508,v,seq__40505__$1,temp__4092__auto__){
return (function (){return (cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2 ? cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$2(test_env,v) : cemerick.cljs.test.test_function.call(null,test_env,v));
});})(seq__40505,chunk__40506,count__40507,i__40508,v,seq__40505__$1,temp__4092__auto__))
));
{
var G__40532 = cljs.core.next(seq__40505__$1);
var G__40533 = null;
var G__40534 = 0;
var G__40535 = 0;
seq__40505 = G__40532;
chunk__40506 = G__40533;
count__40507 = G__40534;
i__40508 = G__40535;
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
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__40497_SHARP_,p2__40498_SHARP_){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cemerick.cljs.test.schedule_async_test,p1__40497_SHARP_,p2__40498_SHARP_);
}),cljs.core.constant$keyword$216.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(test_env)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$198,cljs.core.constant$keyword$209),cljs.core.meta),cljs.core.filter(cemerick.cljs.test.async_test_QMARK_,tests_40509)));
return cemerick.cljs.test.finish_test_entry_point(entry_point_QMARK___10116__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_40504;
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
var test_ns__2 = (function (test_env,ns_sym){var entry_point_QMARK___10116__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;var _STAR_entry_point_STAR_40537 = cemerick.cljs.test._STAR_entry_point_STAR_;try{cemerick.cljs.test._STAR_entry_point_STAR_ = false;
cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$224,cljs.core.constant$keyword$230,cljs.core.constant$keyword$231,ns_sym,cljs.core.constant$keyword$217,test_env], null));
var temp__4090__auto___40538 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cemerick.cljs.test.registered_test_hooks),ns_sym);if(cljs.core.truth_(temp__4090__auto___40538))
{var test_hook_40539 = temp__4090__auto___40538;(test_hook_40539.cljs$core$IFn$_invoke$arity$1 ? test_hook_40539.cljs$core$IFn$_invoke$arity$1(test_env) : test_hook_40539.call(null,test_env));
} else
{cemerick.cljs.test.test_all_vars.cljs$core$IFn$_invoke$arity$2(test_env,ns_sym);
}
cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$224,cljs.core.constant$keyword$232,cljs.core.constant$keyword$231,ns_sym,cljs.core.constant$keyword$217,test_env], null));
return cemerick.cljs.test.finish_test_entry_point(entry_point_QMARK___10116__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_40537;
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
cemerick.cljs.test.test_summary = (function test_summary(test_env){var test_env__$1 = cemerick.cljs.test.maybe_deref(test_env);return cemerick.cljs.test.do_report.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.array_seq([test_env__$1,cemerick.cljs.test.maybe_deref(cljs.core.constant$keyword$216.cljs$core$IFn$_invoke$arity$1(test_env__$1))], 0)),cljs.core.constant$keyword$224,cljs.core.constant$keyword$229));
});
/**
* Runs all tests in the given namespaces; prints results.
* Defaults to current namespace if none given.  Returns a map
* summarizing test results.
* @param {...*} var_args
*/
cemerick.cljs.test.run_tests_STAR_ = (function() { 
var run_tests_STAR___delegate = function (namespaces){var vec__40546 = (((cljs.core.first(namespaces) instanceof cljs.core.Atom))?namespaces:cljs.core.cons(cemerick.cljs.test.init_test_environment(),namespaces));var test_env = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40546,0,null);var namespaces__$1 = cljs.core.nthnext(vec__40546,1);var entry_point_QMARK___10116__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;var _STAR_entry_point_STAR_40547 = cemerick.cljs.test._STAR_entry_point_STAR_;try{cemerick.cljs.test._STAR_entry_point_STAR_ = false;
var seq__40548_40552 = cljs.core.seq(cljs.core.distinct(namespaces__$1));var chunk__40549_40553 = null;var count__40550_40554 = 0;var i__40551_40555 = 0;while(true){
if((i__40551_40555 < count__40550_40554))
{var ns_40556 = chunk__40549_40553.cljs$core$IIndexed$_nth$arity$2(null,i__40551_40555);cemerick.cljs.test.test_ns.cljs$core$IFn$_invoke$arity$2(test_env,ns_40556);
{
var G__40557 = seq__40548_40552;
var G__40558 = chunk__40549_40553;
var G__40559 = count__40550_40554;
var G__40560 = (i__40551_40555 + 1);
seq__40548_40552 = G__40557;
chunk__40549_40553 = G__40558;
count__40550_40554 = G__40559;
i__40551_40555 = G__40560;
continue;
}
} else
{var temp__4092__auto___40561 = cljs.core.seq(seq__40548_40552);if(temp__4092__auto___40561)
{var seq__40548_40562__$1 = temp__4092__auto___40561;if(cljs.core.chunked_seq_QMARK_(seq__40548_40562__$1))
{var c__4004__auto___40563 = cljs.core.chunk_first(seq__40548_40562__$1);{
var G__40564 = cljs.core.chunk_rest(seq__40548_40562__$1);
var G__40565 = c__4004__auto___40563;
var G__40566 = cljs.core.count(c__4004__auto___40563);
var G__40567 = 0;
seq__40548_40552 = G__40564;
chunk__40549_40553 = G__40565;
count__40550_40554 = G__40566;
i__40551_40555 = G__40567;
continue;
}
} else
{var ns_40568 = cljs.core.first(seq__40548_40562__$1);cemerick.cljs.test.test_ns.cljs$core$IFn$_invoke$arity$2(test_env,ns_40568);
{
var G__40569 = cljs.core.next(seq__40548_40562__$1);
var G__40570 = null;
var G__40571 = 0;
var G__40572 = 0;
seq__40548_40552 = G__40569;
chunk__40549_40553 = G__40570;
count__40550_40554 = G__40571;
i__40551_40555 = G__40572;
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
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_40547;
}};
var run_tests_STAR_ = function (var_args){
var namespaces = null;if (arguments.length > 0) {
  namespaces = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return run_tests_STAR___delegate.call(this,namespaces);};
run_tests_STAR_.cljs$lang$maxFixedArity = 0;
run_tests_STAR_.cljs$lang$applyTo = (function (arglist__40573){
var namespaces = cljs.core.seq(arglist__40573);
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
var run_all_tests__1 = (function (re){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cemerick.cljs.test.run_tests_STAR_,cljs.core.filter((function (p1__40574_SHARP_){return cljs.core.re_matches(re,cljs.core.name(p1__40574_SHARP_));
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
cemerick.cljs.test.successful_QMARK_ = (function successful_QMARK_(test_env){var map__40576 = cemerick.cljs.test.maybe_deref(test_env);var map__40576__$1 = ((cljs.core.seq_QMARK_(map__40576))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40576):map__40576);var async = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40576__$1,cljs.core.constant$keyword$216);var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40576__$1,cljs.core.constant$keyword$212);var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40576__$1,cljs.core.constant$keyword$211);var and__3273__auto__ = cemerick.cljs.test.testing_complete_QMARK_(test_env);if(cljs.core.truth_(and__3273__auto__))
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
