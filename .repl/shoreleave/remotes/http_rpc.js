// Compiled by ClojureScript 0.0-2069
goog.provide('shoreleave.remotes.http_rpc');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('shoreleave.remotes.xhr');
goog.require('shoreleave.remotes.xhr');
shoreleave.remotes.http_rpc._STAR_remote_uri_STAR_ = "/_shoreleave";
/**
* Call a remote-callback on the server.
* Arguments:
* remote - a string, the name of the remote on the server (eg. specified with a defremote)
* params - a vector, the parameters to pass to the remote function
* callback - a map or a function.  The map specifies {:on-success some-f, :on-error another-f}
* otherwise, just a single function that will be called with on-complete is triggered
* extra-content - varlist of key-value pairs, extra-content to merge into the payload/content map.
* @param {...*} var_args
*/
shoreleave.remotes.http_rpc.remote_callback = (function() { 
var remote_callback__delegate = function (remote,params,callback,extra_content){if(cljs.core.map_QMARK_.call(null,callback))
{var map__15594 = callback;var map__15594__$1 = ((cljs.core.seq_QMARK_.call(null,map__15594))?cljs.core.apply.call(null,cljs.core.hash_map,map__15594):map__15594);var on_error = cljs.core.get.call(null,map__15594__$1,new cljs.core.Keyword(null,"on-error","on-error",1418576908));var on_success = cljs.core.get.call(null,map__15594__$1,new cljs.core.Keyword(null,"on-success","on-success",2969097607));return shoreleave.remotes.xhr.xhr.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"post","post",1017351186),shoreleave.remotes.http_rpc._STAR_remote_uri_STAR_], null),new cljs.core.Keyword(null,"content","content",1965434859),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",4374260664),remote,new cljs.core.Keyword(null,"params","params",4313443576),cljs.core.pr_str.call(null,params)], null),cljs.core.apply.call(null,cljs.core.hash_map,extra_content)),new cljs.core.Keyword(null,"on-success","on-success",2969097607),(cljs.core.truth_(on_success)?(function (data){var data__$1 = ((cljs.core._EQ_.call(null,data,""))?"nil":data);return on_success.call(null,cljs.reader.read_string.call(null,data__$1));
}):null),new cljs.core.Keyword(null,"on-error","on-error",1418576908),(cljs.core.truth_(on_error)?(function (data){var data__$1 = ((cljs.core._EQ_.call(null,data,""))?"nil":data);return on_error.call(null,cljs.reader.read_string.call(null,data__$1));
}):null));
} else
{return shoreleave.remotes.xhr.xhr.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"post","post",1017351186),shoreleave.remotes.http_rpc._STAR_remote_uri_STAR_], null),new cljs.core.Keyword(null,"content","content",1965434859),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote","remote",4374260664),remote,new cljs.core.Keyword(null,"params","params",4313443576),cljs.core.pr_str.call(null,params)], null),cljs.core.apply.call(null,cljs.core.hash_map,extra_content)),new cljs.core.Keyword(null,"on-success","on-success",2969097607),(cljs.core.truth_(callback)?(function (data){var data__$1 = ((cljs.core._EQ_.call(null,data,""))?"nil":data);return callback.call(null,cljs.reader.read_string.call(null,data__$1));
}):null));
}
};
var remote_callback = function (remote,params,callback,var_args){
var extra_content = null;if (arguments.length > 3) {
  extra_content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return remote_callback__delegate.call(this,remote,params,callback,extra_content);};
remote_callback.cljs$lang$maxFixedArity = 3;
remote_callback.cljs$lang$applyTo = (function (arglist__15595){
var remote = cljs.core.first(arglist__15595);
arglist__15595 = cljs.core.next(arglist__15595);
var params = cljs.core.first(arglist__15595);
arglist__15595 = cljs.core.next(arglist__15595);
var callback = cljs.core.first(arglist__15595);
var extra_content = cljs.core.rest(arglist__15595);
return remote_callback__delegate(remote,params,callback,extra_content);
});
remote_callback.cljs$core$IFn$_invoke$arity$variadic = remote_callback__delegate;
return remote_callback;
})()
;
