// Compiled by ClojureScript 0.0-2069
goog.provide('shoreleave.remotes.request');
goog.require('cljs.core');
goog.require('shoreleave.remotes.common');
goog.require('shoreleave.remotes.common');
goog.require('goog.net.XhrManager');
goog.require('goog.net.XhrManager');
goog.require('clojure.browser.event');
goog.require('clojure.browser.event');
goog.require('cljs.reader');
goog.require('cljs.reader');
shoreleave.remotes.request.responders = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
shoreleave.remotes.request.add_responders = (function add_responders(id,success,error){if(cljs.core.truth_((function (){var or__5001__auto__ = success;if(cljs.core.truth_(or__5001__auto__))
{return or__5001__auto__;
} else
{return error;
}
})()))
{return cljs.core.swap_BANG_.call(null,shoreleave.remotes.request.responders,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",3441701749),success,new cljs.core.Keyword(null,"error","error",1110689146),error], null));
} else
{return null;
}
});
goog.net.XhrManager.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrManager.prototype.clojure$browser$event$EventType$event_types$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__25432){var vec__25433 = p__25432;var k = cljs.core.nth.call(null,vec__25433,0,null);var v = cljs.core.nth.call(null,vec__25433,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k.toLowerCase()),v], null);
}),cljs.core.js__GT_clj.call(null,goog.net.EventType)));
});
shoreleave.remotes.request._STAR_xhr_manager_STAR_ = (new goog.net.XhrManager(null,null,null,0,5000));
/**
* Asynchronously make a network request for the resource at url. If
* provided via the `:on-success` and `:on-error` keyword arguments, the
* appropriate one of `on-success` or `on-error` will be called on
* completion. They will be passed a map containing the keys `:id`,
* `:body`, `:status`, and `:event`. The entry for `:event` contains an
* instance of the `goog.net.XhrManager.Event`.
* 
* URLs/Routes can be expressed as `"http://www.google.com"`
* or as `[:post "http://www.google.com"]`
* The default method is GET.
* 
* Other allowable keyword arguments are `:id`, `:content`, `:headers`,
* `:priority`, and `:retries`. `:id` defaults to a random string,
* `:retries` defaults to `0`.
* @param {...*} var_args
*/
shoreleave.remotes.request.request = (function() { 
var request__delegate = function (route,p__25434){var map__25438 = p__25434;var map__25438__$1 = ((cljs.core.seq_QMARK_.call(null,map__25438))?cljs.core.apply.call(null,cljs.core.hash_map,map__25438):map__25438);var on_error = cljs.core.get.call(null,map__25438__$1,new cljs.core.Keyword(null,"on-error","on-error",1418576908));var on_success = cljs.core.get.call(null,map__25438__$1,new cljs.core.Keyword(null,"on-success","on-success",2969097607));var retries = cljs.core.get.call(null,map__25438__$1,new cljs.core.Keyword(null,"retries","retries",2112281784),0);var priority = cljs.core.get.call(null,map__25438__$1,new cljs.core.Keyword(null,"priority","priority",4143410454));var headers = cljs.core.get.call(null,map__25438__$1,new cljs.core.Keyword(null,"headers","headers",1809212152));var content = cljs.core.get.call(null,map__25438__$1,new cljs.core.Keyword(null,"content","content",1965434859));var id = cljs.core.get.call(null,map__25438__$1,new cljs.core.Keyword(null,"id","id",1013907597),shoreleave.remotes.common.rand_id_str.call(null));var vec__25439 = shoreleave.remotes.common.parse_route.call(null,route);var method = cljs.core.nth.call(null,vec__25439,0,null);var uri = cljs.core.nth.call(null,vec__25439,1,null);try{shoreleave.remotes.request.add_responders.call(null,id,on_success,on_error);
return shoreleave.remotes.request._STAR_xhr_manager_STAR_.send(id,uri,method,(cljs.core.truth_(content)?shoreleave.remotes.common.__GT_data_str.call(null,shoreleave.remotes.common.csrf_protected.call(null,content,method)):null),cljs.core.clj__GT_js.call(null,headers),priority,null,retries);
}catch (e25440){if((e25440 instanceof Error))
{var e = e25440;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25440;
} else
{return null;
}
}
}};
var request = function (route,var_args){
var p__25434 = null;if (arguments.length > 1) {
  p__25434 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return request__delegate.call(this,route,p__25434);};
request.cljs$lang$maxFixedArity = 1;
request.cljs$lang$applyTo = (function (arglist__25441){
var route = cljs.core.first(arglist__25441);
var p__25434 = cljs.core.rest(arglist__25441);
return request__delegate(route,p__25434);
});
request.cljs$core$IFn$_invoke$arity$variadic = request__delegate;
return request;
})()
;
shoreleave.remotes.request.response_success = (function response_success(e){var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,shoreleave.remotes.request.responders),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(e));if(cljs.core.truth_(temp__4092__auto__))
{var map__25443 = temp__4092__auto__;var map__25443__$1 = ((cljs.core.seq_QMARK_.call(null,map__25443))?cljs.core.apply.call(null,cljs.core.hash_map,map__25443):map__25443);var success = cljs.core.get.call(null,map__25443__$1,new cljs.core.Keyword(null,"success","success",3441701749));success.call(null,e);
return cljs.core.swap_BANG_.call(null,shoreleave.remotes.request.responders,cljs.core.dissoc,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(e));
} else
{return null;
}
});
shoreleave.remotes.request.response_error = (function response_error(e){var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,shoreleave.remotes.request.responders),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(e));if(cljs.core.truth_(temp__4092__auto__))
{var map__25445 = temp__4092__auto__;var map__25445__$1 = ((cljs.core.seq_QMARK_.call(null,map__25445))?cljs.core.apply.call(null,cljs.core.hash_map,map__25445):map__25445);var error = cljs.core.get.call(null,map__25445__$1,new cljs.core.Keyword(null,"error","error",1110689146));error.call(null,e);
return cljs.core.swap_BANG_.call(null,shoreleave.remotes.request.responders,cljs.core.dissoc,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(e));
} else
{return null;
}
});
shoreleave.remotes.request.response_received = (function response_received(f,e){return f.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",1013907597),e.id,new cljs.core.Keyword(null,"body","body",1016933652),e.xhrIo.getResponse(),new cljs.core.Keyword(null,"status","status",4416389988),e.xhrIo.getStatus(),new cljs.core.Keyword(null,"event","event",1110795788),e], null));
});
clojure.browser.event.listen.call(null,shoreleave.remotes.request._STAR_xhr_manager_STAR_,"success",cljs.core.partial.call(null,shoreleave.remotes.request.response_received,shoreleave.remotes.request.response_success));
clojure.browser.event.listen.call(null,shoreleave.remotes.request._STAR_xhr_manager_STAR_,"error",cljs.core.partial.call(null,shoreleave.remotes.request.response_received,shoreleave.remotes.request.response_error));
