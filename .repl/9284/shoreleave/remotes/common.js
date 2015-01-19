// Compiled by ClojureScript 0.0-2069
goog.provide('shoreleave.remotes.common');
goog.require('cljs.core');
goog.require('goog.Uri.QueryData');
goog.require('goog.string');
goog.require('shoreleave.remotes.protocols');
goog.require('shoreleave.remotes.protocols');
goog.require('goog.net.EventType');
goog.require('goog.structs');
goog.require('goog.net.EventType');
goog.require('shoreleave.browser.cookies');
goog.require('shoreleave.browser.cookies');
goog.require('goog.Uri.QueryData');
goog.require('clojure.string');
goog.require('goog.structs');
goog.require('goog.string');
goog.require('clojure.string');
shoreleave.remotes.common.event_types = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),goog.net.EventType.COMPLETE,new cljs.core.Keyword(null,"on-success","on-success",2969097607),goog.net.EventType.SUCCESS,new cljs.core.Keyword(null,"on-error","on-error",1418576908),goog.net.EventType.ERROR,new cljs.core.Keyword(null,"on-timeout","on-timeout",3522355941),goog.net.EventType.TIMEOUT,new cljs.core.Keyword(null,"on-ready","on-ready",1430178727),goog.net.EventType.READY], null);
shoreleave.remotes.common._STAR_csrf_token_name_STAR_ = new cljs.core.Keyword(null,"__anti-forgery-token","__anti-forgery-token",2015848321);
/**
* Generate a random string that is suitable for request IDs
*/
shoreleave.remotes.common.rand_id_str = (function rand_id_str(){return goog.string.getRandomString();
});
/**
* Given the keyword form of a request method (`:post`),
* return Closure acceptable form (an upper-cased string)
*/
shoreleave.remotes.common.__GT_url_method = (function __GT_url_method(m){return clojure.string.upper_case.call(null,cljs.core.name.call(null,m));
});
/**
* Shape the routes accordingly for Closure's XHR calls
*/
shoreleave.remotes.common.parse_route = (function parse_route(route){if(typeof route === 'string')
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["GET",route], null);
} else
{if(cljs.core.vector_QMARK_.call(null,route))
{var vec__12881 = route;var m = cljs.core.nth.call(null,vec__12881,0,null);var u = cljs.core.nth.call(null,vec__12881,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shoreleave.remotes.common.__GT_url_method.call(null,m),u], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["GET",route], null);
} else
{return null;
}
}
}
});
/**
* Liberate all client-side developers!
* Given a simple callback function, automatically pass it the response
* content from a remote call
*/
shoreleave.remotes.common.__GT_simple_callback = (function __GT_simple_callback(callback){if(cljs.core.truth_(callback))
{return (function (req){var data = req.getResponseText();return callback.call(null,data);
});
} else
{return null;
}
});
/**
* For all POST requests, if ring-anti-forgery is used, pack the CSRF token
* into the content being sent to the server.
* Content is always sent to the server as a map (that later gets converted accordingly)
*/
shoreleave.remotes.common.csrf_protected = (function csrf_protected(content_map,method){var temp__4090__auto__ = (function (){var and__4988__auto__ = cljs.core._EQ_.call(null,method,"POST");if(and__4988__auto__)
{return shoreleave.remotes.common._STAR_csrf_token_name_STAR_.call(null,shoreleave.browser.cookies.cookies);
} else
{return and__4988__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var anti_forgery_token = temp__4090__auto__;return cljs.core.merge.call(null,content_map,new cljs.core.PersistentArrayMap.fromArray([shoreleave.remotes.common._STAR_csrf_token_name_STAR_,anti_forgery_token], true, false));
} else
{return content_map;
}
});
(shoreleave.remotes.protocols.ITransportData["_"] = true);
(shoreleave.remotes.protocols._data_str["_"] = (function (t){return [cljs.core.str(goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,t)))))].join('');
}));
cljs.core.PersistentTreeMap.prototype.shoreleave$remotes$protocols$ITransportData$ = true;
cljs.core.PersistentTreeMap.prototype.shoreleave$remotes$protocols$ITransportData$_data_str$arity$1 = (function (t){var t__$1 = this;return [cljs.core.str(goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,t__$1)))))].join('');
});
cljs.core.PersistentHashMap.prototype.shoreleave$remotes$protocols$ITransportData$ = true;
cljs.core.PersistentHashMap.prototype.shoreleave$remotes$protocols$ITransportData$_data_str$arity$1 = (function (t){var t__$1 = this;return [cljs.core.str(goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,t__$1)))))].join('');
});
cljs.core.PersistentArrayMap.prototype.shoreleave$remotes$protocols$ITransportData$ = true;
cljs.core.PersistentArrayMap.prototype.shoreleave$remotes$protocols$ITransportData$_data_str$arity$1 = (function (t){var t__$1 = this;return [cljs.core.str(goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,t__$1)))))].join('');
});
(shoreleave.remotes.protocols.ITransportData["string"] = true);
(shoreleave.remotes.protocols._data_str["string"] = (function (t){return t;
}));
/**
* Generate a query-data-string, given Clojure data (usually a hash-map or string)
*/
shoreleave.remotes.common.__GT_data_str = (function __GT_data_str(d){return shoreleave.remotes.protocols._data_str.call(null,d);
});
