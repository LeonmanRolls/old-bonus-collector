// Compiled by ClojureScript 0.0-2069
goog.provide('shoreleave.remotes.xhr');
goog.require('cljs.core');
goog.require('shoreleave.remotes.common');
goog.require('shoreleave.remotes.common');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
/**
* @param {...*} var_args
*/
shoreleave.remotes.xhr.xhr = (function() { 
var xhr__delegate = function (route,opts){var req = (new goog.net.XhrIo());var vec__12877 = shoreleave.remotes.common.parse_route.call(null,route);var method = cljs.core.nth.call(null,vec__12877,0,null);var uri = cljs.core.nth.call(null,vec__12877,1,null);var map__12878 = cljs.core.apply.call(null,cljs.core.hash_map,opts);var map__12878__$1 = ((cljs.core.seq_QMARK_.call(null,map__12878))?cljs.core.apply.call(null,cljs.core.hash_map,map__12878):map__12878);var headers = cljs.core.get.call(null,map__12878__$1,new cljs.core.Keyword(null,"headers","headers",1809212152));var content = cljs.core.get.call(null,map__12878__$1,new cljs.core.Keyword(null,"content","content",1965434859));var on_error = cljs.core.get.call(null,map__12878__$1,new cljs.core.Keyword(null,"on-error","on-error",1418576908));var on_success = cljs.core.get.call(null,map__12878__$1,new cljs.core.Keyword(null,"on-success","on-success",2969097607));var content__$1 = shoreleave.remotes.common.csrf_protected.call(null,content,method);var data = shoreleave.remotes.common.__GT_data_str.call(null,content__$1);var suc_callback = shoreleave.remotes.common.__GT_simple_callback.call(null,on_success);var err_callback = shoreleave.remotes.common.__GT_simple_callback.call(null,(function (){var or__5000__auto__ = on_error;if(cljs.core.truth_(or__5000__auto__))
{return or__5000__auto__;
} else
{return ((function (or__5000__auto__,req,vec__12877,method,uri,map__12878,map__12878__$1,headers,content,on_error,on_success,content__$1,data,suc_callback){
return (function (p1__12874_SHARP_){return console.log([cljs.core.str("XHR ERROR: "),cljs.core.str(p1__12874_SHARP_)].join(''));
});
;})(or__5000__auto__,req,vec__12877,method,uri,map__12878,map__12878__$1,headers,content,on_error,on_success,content__$1,data,suc_callback))
}
})());if(cljs.core.truth_(suc_callback))
{goog.events.listen(req,shoreleave.remotes.common.event_types.call(null,new cljs.core.Keyword(null,"on-success","on-success",2969097607)),(function (){return suc_callback.call(null,req);
}));
goog.events.listen(req,shoreleave.remotes.common.event_types.call(null,new cljs.core.Keyword(null,"on-error","on-error",1418576908)),(function (){return err_callback.call(null,req);
}));
} else
{}
return req.send(uri,method,data,(cljs.core.truth_(headers)?cljs.core.clj__GT_js.call(null,headers):null));
};
var xhr = function (route,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return xhr__delegate.call(this,route,opts);};
xhr.cljs$lang$maxFixedArity = 1;
xhr.cljs$lang$applyTo = (function (arglist__12879){
var route = cljs.core.first(arglist__12879);
var opts = cljs.core.rest(arglist__12879);
return xhr__delegate(route,opts);
});
xhr.cljs$core$IFn$_invoke$arity$variadic = xhr__delegate;
return xhr;
})()
;
