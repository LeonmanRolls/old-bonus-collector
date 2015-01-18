// Compiled by ClojureScript 0.0-2069
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('goog.json.Serializer');
goog.require('goog.net.XhrManager');
goog.require('goog.Uri.QueryData');
goog.require('goog.events');
goog.require('goog.net.XhrManager');
goog.require('cljs.reader');
goog.require('goog.net.EventType');
goog.require('goog.structs');
goog.require('goog.net.ErrorCode');
goog.require('goog.Uri.QueryData');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.structs');
goog.require('cljs.reader');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
goog.require('goog.events');
goog.require('goog.Uri');
ajax.core.AjaxImpl = (function (){var obj35983 = {};return obj35983;
})();
ajax.core._js_ajax_request = (function _js_ajax_request(this$,uri,method,body,headers,handler,opts){if((function (){var and__3273__auto__ = this$;if(and__3273__auto__)
{return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7;
} else
{return and__3273__auto__;
}
})())
{return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7(this$,uri,method,body,headers,handler,opts);
} else
{var x__3883__auto__ = (((this$ == null))?null:this$);return (function (){var or__3285__auto__ = (ajax.core._js_ajax_request[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (ajax.core._js_ajax_request["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol("AjaxImpl.-js-ajax-request",this$);
}
}
})().call(null,this$,uri,method,body,headers,handler,opts);
}
});
ajax.core.AjaxRequest = (function (){var obj35985 = {};return obj35985;
})();
ajax.core._abort = (function _abort(this$,error_code){if((function (){var and__3273__auto__ = this$;if(and__3273__auto__)
{return this$.ajax$core$AjaxRequest$_abort$arity$2;
} else
{return and__3273__auto__;
}
})())
{return this$.ajax$core$AjaxRequest$_abort$arity$2(this$,error_code);
} else
{var x__3883__auto__ = (((this$ == null))?null:this$);return (function (){var or__3285__auto__ = (ajax.core._abort[goog.typeOf(x__3883__auto__)]);if(or__3285__auto__)
{return or__3285__auto__;
} else
{var or__3285__auto____$1 = (ajax.core._abort["_"]);if(or__3285__auto____$1)
{return or__3285__auto____$1;
} else
{throw cljs.core.missing_protocol("AjaxRequest.-abort",this$);
}
}
})().call(null,this$,error_code);
}
});
(ajax.core.AjaxImpl["null"] = true);
(ajax.core._js_ajax_request["null"] = (function (this$,uri,method,body,headers,handler,p__35986){var map__35987 = p__35986;var map__35987__$1 = ((cljs.core.seq_QMARK_(map__35987))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35987):map__35987);var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35987__$1,cljs.core.constant$keyword$137);var G__35988 = (new goog.net.XhrIo());goog.events.listen(G__35988,goog.net.EventType.COMPLETE,handler);
G__35988.setTimeoutInterval((function (){var or__3285__auto__ = timeout;if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return 0;
}
})());
G__35988.send(uri,method,body,headers);
return G__35988;
}));
goog.net.XhrIo.prototype.ajax$core$AjaxRequest$ = true;
goog.net.XhrIo.prototype.ajax$core$AjaxRequest$_abort$arity$2 = (function (this$,error_code){var this$__$1 = this;return this$__$1.abort(error_code);
});
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$ = true;
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__35989){var map__35990 = p__35989;var map__35990__$1 = ((cljs.core.seq_QMARK_(map__35990))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35990):map__35990);var max_retries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35990__$1,cljs.core.constant$keyword$138);var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35990__$1,cljs.core.constant$keyword$139);var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35990__$1,cljs.core.constant$keyword$137);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35990__$1,cljs.core.constant$keyword$140);var this$__$1 = this;return this$__$1.send(id,uri,method,body,headers,priority,handler,max_retries);
});
ajax.core.abort = (function abort(this$){return ajax.core._abort(this$,goog.net.ErrorCode.ABORT);
});
ajax.core.success_QMARK_ = (function success_QMARK_(status){return cljs.core.some(cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [200,201,202,204,205,206], null));
});
ajax.core.read_edn = (function read_edn(xhrio){return cljs.reader.read_string(xhrio.getResponseText());
});
ajax.core.edn_response_format = (function edn_response_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$141,ajax.core.read_edn,cljs.core.constant$keyword$142,"EDN"], null);
});
ajax.core.edn_request_format = (function edn_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$143,cljs.core.pr_str,cljs.core.constant$keyword$144,"application/edn"], null);
});
ajax.core.params_to_str = (function params_to_str(params){if(cljs.core.truth_(params))
{return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js(params)))).toString();
} else
{return null;
}
});
ajax.core.read_text = (function read_text(xhrio){return xhrio.getResponseText();
});
ajax.core.url_request_format = (function url_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$143,ajax.core.params_to_str,cljs.core.constant$keyword$144,"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function raw_response_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$141,ajax.core.read_text,cljs.core.constant$keyword$142,"raw text"], null);
});
ajax.core.write_json = (function write_json(data){return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js(data));
});
ajax.core.json_request_format = (function json_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$143,ajax.core.write_json,cljs.core.constant$keyword$144,"application/json"], null);
});
/**
* Returns a JSON response format.  Options include
* :keywords? Returns the keys as keywords
* :prefix A prefix that needs to be stripped off.  This is to
* combat JSON hijacking.  If you're using JSON with GET request,
* you should use this.
* http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
* http://haacked.com/archive/2009/06/24/json-hijacking.aspx
*/
ajax.core.json_response_format = (function json_response_format(p__35991){var map__35993 = p__35991;var map__35993__$1 = ((cljs.core.seq_QMARK_(map__35993))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35993):map__35993);var keywords_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35993__$1,cljs.core.constant$keyword$145);var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35993__$1,cljs.core.constant$keyword$146);return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$141,(function read_json(xhrio){var json = xhrio.getResponseJson(prefix);return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.array_seq([cljs.core.constant$keyword$132,keywords_QMARK_], 0));
}),cljs.core.constant$keyword$142,[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join('')], null);
});
ajax.core.get_default_format = (function get_default_format(xhrio){var ct = xhrio.getResponseHeader("Content-Type");var format = (cljs.core.truth_((function (){var and__3273__auto__ = ct;if(cljs.core.truth_(and__3273__auto__))
{return (ct.indexOf("json") >= 0);
} else
{return and__3273__auto__;
}
})())?ajax.core.json_response_format(cljs.core.PersistentArrayMap.EMPTY):ajax.core.edn_response_format());return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(format,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$142], null),(function (p1__35994_SHARP_){return [cljs.core.str(p1__35994_SHARP_),cljs.core.str(" (default)")].join('');
}));
});
ajax.core.use_content_type = (function use_content_type(format){return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(format,cljs.core.constant$keyword$143);
});
ajax.core.get_format = (function get_format(format){if(cljs.core.map_QMARK_(format))
{return format;
} else
{if(cljs.core.ifn_QMARK_(format))
{return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ajax.core.url_request_format(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$141,format,cljs.core.constant$keyword$142,"custom"], null)], 0));
} else
{if(cljs.core.constant$keyword$126)
{throw (new Error([cljs.core.str("unrecognized format: "),cljs.core.str(format)].join('')));
} else
{return null;
}
}
}
});
ajax.core.exception_response = (function exception_response(e,status,p__35995,xhrio){var map__35997 = p__35995;var map__35997__$1 = ((cljs.core.seq_QMARK_(map__35997))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35997):map__35997);var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35997__$1,cljs.core.constant$keyword$142);var response = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$147,status,cljs.core.constant$keyword$148,null], null);var status_text = [cljs.core.str(e.message),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');var parse_error = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.constant$keyword$149,status_text,cljs.core.array_seq([cljs.core.constant$keyword$150,true,cljs.core.constant$keyword$151,xhrio.getResponseText()], 0));if(cljs.core.truth_(ajax.core.success_QMARK_(status)))
{return parse_error;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.constant$keyword$149,xhrio.getStatusText(),cljs.core.array_seq([cljs.core.constant$keyword$152,parse_error], 0));
}
});
ajax.core.interpret_response = (function interpret_response(format,response,get_default_format){try{var xhrio = response.target;var status = xhrio.getStatus();if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(-1,status))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhrio.getLastErrorCode(),goog.net.ErrorCode.ABORT))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$147,-1,cljs.core.constant$keyword$149,"Request aborted by client.",cljs.core.constant$keyword$153,true], null)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$147,-1,cljs.core.constant$keyword$149,"Request timed out.",cljs.core.constant$keyword$154,true], null)], null);
}
} else
{var format__$1 = (cljs.core.truth_(cljs.core.constant$keyword$141.cljs$core$IFn$_invoke$arity$1(format))?format:(get_default_format.cljs$core$IFn$_invoke$arity$1 ? get_default_format.cljs$core$IFn$_invoke$arity$1(xhrio) : get_default_format.call(null,xhrio)));var parse = cljs.core.constant$keyword$141.cljs$core$IFn$_invoke$arity$1(format__$1);try{var response__$1 = (parse.cljs$core$IFn$_invoke$arity$1 ? parse.cljs$core$IFn$_invoke$arity$1(xhrio) : parse.call(null,xhrio));if(cljs.core.truth_(ajax.core.success_QMARK_(status)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response__$1], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$147,status,cljs.core.constant$keyword$149,xhrio.getStatusText(),cljs.core.constant$keyword$148,response__$1], null)], null);
}
}catch (e36001){if((e36001 instanceof Object))
{var e = e36001;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response(e,status,format__$1,xhrio)], null);
} else
{if(cljs.core.constant$keyword$126)
{throw e36001;
} else
{return null;
}
}
}}
}catch (e36000){if((e36000 instanceof Object))
{var e = e36000;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$147,0,cljs.core.constant$keyword$149,e.message,cljs.core.constant$keyword$148,null], null)], null);
} else
{if(cljs.core.constant$keyword$126)
{throw e36000;
} else
{return null;
}
}
}});
ajax.core.no_format = (function no_format(xhrio){throw (new Error("No response format was supplied."));
});
ajax.core.uri_with_params = (function uri_with_params(uri,params){if(cljs.core.truth_(params))
{return [cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(ajax.core.params_to_str(params))].join('');
} else
{return uri;
}
});
ajax.core.process_inputs = (function process_inputs(uri,method,p__36002,p__36003){var map__36007 = p__36002;var map__36007__$1 = ((cljs.core.seq_QMARK_(map__36007))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36007):map__36007);var format = map__36007__$1;var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36007__$1,cljs.core.constant$keyword$144);var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36007__$1,cljs.core.constant$keyword$143);var map__36008 = p__36003;var map__36008__$1 = ((cljs.core.seq_QMARK_(map__36008))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36008):map__36008);var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36008__$1,cljs.core.constant$keyword$155);var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36008__$1,cljs.core.constant$keyword$156);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET"))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.uri_with_params(uri,params),null,headers], null);
} else
{var map__36009 = format;var map__36009__$1 = ((cljs.core.seq_QMARK_(map__36009))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36009):map__36009);var content_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36009__$1,cljs.core.constant$keyword$144);var write__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36009__$1,cljs.core.constant$keyword$143);var body = (write__$1.cljs$core$IFn$_invoke$arity$1 ? write__$1.cljs$core$IFn$_invoke$arity$1(params) : write__$1.call(null,params));var content_type__$2 = (cljs.core.truth_(content_type__$1)?new cljs.core.PersistentArrayMap(null, 1, ["Content-Type",content_type__$1], null):null);var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__3285__auto__ = headers;if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),content_type__$2], 0));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,body,headers__$1], null);
}
});
ajax.core.normalize_method = (function normalize_method(method){if((method instanceof cljs.core.Keyword))
{return clojure.string.upper_case(cljs.core.name(method));
} else
{return method;
}
});
ajax.core.base_handler = (function base_handler(format,p__36010){var map__36012 = p__36010;var map__36012__$1 = ((cljs.core.seq_QMARK_(map__36012))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36012):map__36012);var get_default_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36012__$1,cljs.core.constant$keyword$157);var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36012__$1,cljs.core.constant$keyword$158);if(cljs.core.truth_(handler))
{return (function (xhrio){return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(ajax.core.interpret_response(format,xhrio,(function (){var or__3285__auto__ = get_default_format;if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return ajax.core.no_format;
}
})())) : handler.call(null,ajax.core.interpret_response(format,xhrio,(function (){var or__3285__auto__ = get_default_format;if(cljs.core.truth_(or__3285__auto__))
{return or__3285__auto__;
} else
{return ajax.core.no_format;
}
})())));
});
} else
{throw (new Error("No ajax handler provided."));
}
});
/**
* @param {...*} var_args
*/
ajax.core.ajax_request = (function() {
var ajax_request = null;
var ajax_request__1 = (function (p__36013){var map__36016 = p__36013;var map__36016__$1 = ((cljs.core.seq_QMARK_(map__36016))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36016):map__36016);var opts = map__36016__$1;var manager = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36016__$1,cljs.core.constant$keyword$159);var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36016__$1,cljs.core.constant$keyword$160);var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36016__$1,cljs.core.constant$keyword$161);var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36016__$1,cljs.core.constant$keyword$162);var format__$1 = ajax.core.get_format(format);var method__$1 = ajax.core.normalize_method(method);var vec__36017 = ajax.core.process_inputs(uri,method__$1,format__$1,opts);var uri__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36017,0,null);var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36017,1,null);var headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36017,2,null);var handler = ajax.core.base_handler(format__$1,opts);return ajax.core._js_ajax_request(manager,uri__$1,method__$1,body,cljs.core.clj__GT_js(headers),handler,opts);
});
var ajax_request__3 = (function() { 
var G__36018__delegate = function (uri,method,args){var f = cljs.core.first(args);var opts = (((f instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args):f);return ajax_request.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.constant$keyword$162,uri,cljs.core.array_seq([cljs.core.constant$keyword$161,method], 0)));
};
var G__36018 = function (uri,method,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__36018__delegate.call(this,uri,method,args);};
G__36018.cljs$lang$maxFixedArity = 2;
G__36018.cljs$lang$applyTo = (function (arglist__36019){
var uri = cljs.core.first(arglist__36019);
arglist__36019 = cljs.core.next(arglist__36019);
var method = cljs.core.first(arglist__36019);
var args = cljs.core.rest(arglist__36019);
return G__36018__delegate(uri,method,args);
});
G__36018.cljs$core$IFn$_invoke$arity$variadic = G__36018__delegate;
return G__36018;
})()
;
ajax_request = function(uri,method,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return ajax_request__1.call(this,uri);
default:
return ajax_request__3.cljs$core$IFn$_invoke$arity$variadic(uri,method, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax_request.cljs$lang$maxFixedArity = 2;
ajax_request.cljs$lang$applyTo = ajax_request__3.cljs$lang$applyTo;
ajax_request.cljs$core$IFn$_invoke$arity$1 = ajax_request__1;
ajax_request.cljs$core$IFn$_invoke$arity$variadic = ajax_request__3.cljs$core$IFn$_invoke$arity$variadic;
return ajax_request;
})()
;
ajax.core.json_format = (function json_format(format_params){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ajax.core.json_request_format(),ajax.core.json_response_format(format_params)], 0));
});
ajax.core.edn_format = (function edn_format(){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ajax.core.edn_request_format(),ajax.core.edn_response_format()], 0));
});
ajax.core.raw_format = (function raw_format(){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ajax.core.url_request_format(),ajax.core.raw_response_format()], 0));
});
ajax.core.keyword_request_format = (function keyword_request_format(format,format_params){var G__36021 = format;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$163,G__36021))
{return ajax.core.url_request_format();
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$164,G__36021))
{return ajax.core.url_request_format();
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$165,G__36021))
{return ajax.core.edn_request_format();
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$166,G__36021))
{return ajax.core.json_request_format();
} else
{if(cljs.core.constant$keyword$126)
{throw (new Error([cljs.core.str("unrecognized request format: "),cljs.core.str(format)].join('')));
} else
{return null;
}
}
}
}
}
});
ajax.core.keyword_response_format = (function keyword_response_format(format,format_params){if(cljs.core.map_QMARK_(format))
{return format;
} else
{if(cljs.core.ifn_QMARK_(format))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$141,format,cljs.core.constant$keyword$142,"custom"], null);
} else
{if(cljs.core.constant$keyword$126)
{var G__36023 = format;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$164,G__36023))
{return ajax.core.raw_response_format();
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$165,G__36023))
{return ajax.core.edn_response_format();
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$166,G__36023))
{return ajax.core.json_response_format(format_params);
} else
{if(cljs.core.constant$keyword$126)
{return null;
} else
{return null;
}
}
}
}
} else
{return null;
}
}
}
});
ajax.core.transform_handler = (function transform_handler(p__36024){var map__36029 = p__36024;var map__36029__$1 = ((cljs.core.seq_QMARK_(map__36029))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36029):map__36029);var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36029__$1,cljs.core.constant$keyword$167);var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36029__$1,cljs.core.constant$keyword$168);var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36029__$1,cljs.core.constant$keyword$158);return (function easy_handler(p__36030){var vec__36032 = p__36030;var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36032,0,null);var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36032,1,null);var temp__4090__auto___36033 = (cljs.core.truth_(ok)?handler:error_handler);if(cljs.core.truth_(temp__4090__auto___36033))
{var h_36034 = temp__4090__auto___36033;(h_36034.cljs$core$IFn$_invoke$arity$1 ? h_36034.cljs$core$IFn$_invoke$arity$1(result) : h_36034.call(null,result));
} else
{}
if(cljs.core.fn_QMARK_(finally$))
{return (finally$.cljs$core$IFn$_invoke$arity$0 ? finally$.cljs$core$IFn$_invoke$arity$0() : finally$.call(null));
} else
{return null;
}
});
});
ajax.core.transform_format = (function transform_format(p__36035){var map__36037 = p__36035;var map__36037__$1 = ((cljs.core.seq_QMARK_(map__36037))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36037):map__36037);var opts = map__36037__$1;var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36037__$1,cljs.core.constant$keyword$169);var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36037__$1,cljs.core.constant$keyword$160);var rf = ajax.core.keyword_response_format(response_format,opts);if((format == null))
{return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ajax.core.edn_request_format(),rf], 0));
} else
{if((format instanceof cljs.core.Keyword))
{return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ajax.core.keyword_request_format(format,opts),rf], 0));
} else
{if(cljs.core.constant$keyword$126)
{return format;
} else
{return null;
}
}
}
});
ajax.core.transform_opts = (function transform_opts(opts){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.constant$keyword$158,ajax.core.transform_handler(opts),cljs.core.array_seq([cljs.core.constant$keyword$160,ajax.core.transform_format(opts),cljs.core.constant$keyword$157,ajax.core.get_default_format], 0));
});
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.GET = (function() { 
var GET__delegate = function (uri,p__36038){var vec__36040 = p__36038;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36040,0,null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$variadic(uri,"GET",cljs.core.array_seq([ajax.core.transform_opts(opts)], 0));
};
var GET = function (uri,var_args){
var p__36038 = null;if (arguments.length > 1) {
  p__36038 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,uri,p__36038);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__36041){
var uri = cljs.core.first(arglist__36041);
var p__36038 = cljs.core.rest(arglist__36041);
return GET__delegate(uri,p__36038);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.HEAD = (function() { 
var HEAD__delegate = function (uri,p__36042){var vec__36044 = p__36042;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36044,0,null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$variadic(uri,"HEAD",cljs.core.array_seq([ajax.core.transform_opts(opts)], 0));
};
var HEAD = function (uri,var_args){
var p__36042 = null;if (arguments.length > 1) {
  p__36042 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return HEAD__delegate.call(this,uri,p__36042);};
HEAD.cljs$lang$maxFixedArity = 1;
HEAD.cljs$lang$applyTo = (function (arglist__36045){
var uri = cljs.core.first(arglist__36045);
var p__36042 = cljs.core.rest(arglist__36045);
return HEAD__delegate(uri,p__36042);
});
HEAD.cljs$core$IFn$_invoke$arity$variadic = HEAD__delegate;
return HEAD;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.POST = (function() { 
var POST__delegate = function (uri,p__36046){var vec__36048 = p__36046;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36048,0,null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$variadic(uri,"POST",cljs.core.array_seq([ajax.core.transform_opts(opts)], 0));
};
var POST = function (uri,var_args){
var p__36046 = null;if (arguments.length > 1) {
  p__36046 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return POST__delegate.call(this,uri,p__36046);};
POST.cljs$lang$maxFixedArity = 1;
POST.cljs$lang$applyTo = (function (arglist__36049){
var uri = cljs.core.first(arglist__36049);
var p__36046 = cljs.core.rest(arglist__36049);
return POST__delegate(uri,p__36046);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.PUT = (function() { 
var PUT__delegate = function (uri,p__36050){var vec__36052 = p__36050;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36052,0,null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$variadic(uri,"PUT",cljs.core.array_seq([ajax.core.transform_opts(opts)], 0));
};
var PUT = function (uri,var_args){
var p__36050 = null;if (arguments.length > 1) {
  p__36050 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return PUT__delegate.call(this,uri,p__36050);};
PUT.cljs$lang$maxFixedArity = 1;
PUT.cljs$lang$applyTo = (function (arglist__36053){
var uri = cljs.core.first(arglist__36053);
var p__36050 = cljs.core.rest(arglist__36053);
return PUT__delegate(uri,p__36050);
});
PUT.cljs$core$IFn$_invoke$arity$variadic = PUT__delegate;
return PUT;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.DELETE = (function() { 
var DELETE__delegate = function (uri,p__36054){var vec__36056 = p__36054;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36056,0,null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$variadic(uri,"DELETE",cljs.core.array_seq([ajax.core.transform_opts(opts)], 0));
};
var DELETE = function (uri,var_args){
var p__36054 = null;if (arguments.length > 1) {
  p__36054 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return DELETE__delegate.call(this,uri,p__36054);};
DELETE.cljs$lang$maxFixedArity = 1;
DELETE.cljs$lang$applyTo = (function (arglist__36057){
var uri = cljs.core.first(arglist__36057);
var p__36054 = cljs.core.rest(arglist__36057);
return DELETE__delegate(uri,p__36054);
});
DELETE.cljs$core$IFn$_invoke$arity$variadic = DELETE__delegate;
return DELETE;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.OPTIONS = (function() { 
var OPTIONS__delegate = function (uri,p__36058){var vec__36060 = p__36058;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36060,0,null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$variadic(uri,"OPTIONS",cljs.core.array_seq([ajax.core.transform_opts(opts)], 0));
};
var OPTIONS = function (uri,var_args){
var p__36058 = null;if (arguments.length > 1) {
  p__36058 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return OPTIONS__delegate.call(this,uri,p__36058);};
OPTIONS.cljs$lang$maxFixedArity = 1;
OPTIONS.cljs$lang$applyTo = (function (arglist__36061){
var uri = cljs.core.first(arglist__36061);
var p__36058 = cljs.core.rest(arglist__36061);
return OPTIONS__delegate(uri,p__36058);
});
OPTIONS.cljs$core$IFn$_invoke$arity$variadic = OPTIONS__delegate;
return OPTIONS;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.TRACE = (function() { 
var TRACE__delegate = function (uri,p__36062){var vec__36064 = p__36062;var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36064,0,null);return ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$variadic(uri,"TRACE",cljs.core.array_seq([ajax.core.transform_opts(opts)], 0));
};
var TRACE = function (uri,var_args){
var p__36062 = null;if (arguments.length > 1) {
  p__36062 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return TRACE__delegate.call(this,uri,p__36062);};
TRACE.cljs$lang$maxFixedArity = 1;
TRACE.cljs$lang$applyTo = (function (arglist__36065){
var uri = cljs.core.first(arglist__36065);
var p__36062 = cljs.core.rest(arglist__36065);
return TRACE__delegate(uri,p__36062);
});
TRACE.cljs$core$IFn$_invoke$arity$variadic = TRACE__delegate;
return TRACE;
})()
;
