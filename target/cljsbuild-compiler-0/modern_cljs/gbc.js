// Compiled by ClojureScript 0.0-2069
goog.provide('modern_cljs.gbc');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('cljs.core.async');
goog.require('enfocus.core');
goog.require('cemerick.cljs.test');
goog.require('modern_cljs.model');
goog.require('goog.events');
goog.require('ajax.core');
goog.require('cljs.reader');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('clojure.set');
goog.require('enfocus.core');
goog.require('modern_cljs.views');
goog.require('enfocus.effects');
goog.require('cljs.reader');
goog.require('clojure.set');
goog.require('modern_cljs.model');
goog.require('modern_cljs.environment');
goog.require('modern_cljs.views');
goog.require('cljs.core.async');
goog.require('enfocus.effects');
goog.require('goog.events');
goog.require('cemerick.cljs.test');
goog.require('modern_cljs.environment');
modern_cljs.gbc.timeout = (function timeout(ms){var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();setTimeout((function (){return cljs.core.async.close_BANG_(c);
}),ms);
return c;
});
modern_cljs.gbc.appid = (window.serverdata["gbcid"]);
modern_cljs.gbc.gameid = (window.serverdata["gameid"]);
modern_cljs.gbc.gamename = (window.serverdata["gamename"]);
modern_cljs.gbc.inFacebook = window.inFacebook;
modern_cljs.gbc.loadingStart = (function loadingStart(){return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#loadingdiv"], null),cljs.core.array_seq([enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["hidden"], 0))], 0));
});
modern_cljs.gbc.loadingStop = (function loadingStop(){return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#loadingdiv"], null),cljs.core.array_seq([enfocus.core.add_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["hidden"], 0))], 0));
});
modern_cljs.gbc.postLogin = (function postLogin(){enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#postlogin"], null),cljs.core.array_seq([enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["hidden"], 0))], 0));
return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#prelogin"], null),cljs.core.array_seq([enfocus.core.add_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["hidden"], 0))], 0));
});
modern_cljs.gbc.preLogin = (function preLogin(){return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#prelogin"], null),cljs.core.array_seq([enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["hidden"], 0))], 0));
});
modern_cljs.gbc.appendInteractedAlready = (function appendInteractedAlready(stringOfListItems){return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#collectedalready"], null),cljs.core.array_seq([enfocus.core.append.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([stringOfListItems], 0))], 0));
});
modern_cljs.gbc.emptyLinkxAlert = (function emptyLinkxAlert(){return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#emptylinkxalert"], null),cljs.core.array_seq([enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["hidden"], 0))], 0));
});
modern_cljs.gbc.noBonusAlert = (function noBonusAlert(){return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#nobonusalert"], null),cljs.core.array_seq([enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["hidden"], 0))], 0));
});
modern_cljs.gbc.removeNoBonusAlert = (function removeNoBonusAlert(){return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#nobonusalert"], null),cljs.core.array_seq([enfocus.core.add_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["hidden"], 0))], 0));
});
modern_cljs.gbc.hideRecentlyCollected = (function hideRecentlyCollected(){return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#recentlyCollectedPanel"], null),cljs.core.array_seq([enfocus.core.add_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["hidden"], 0))], 0));
});
modern_cljs.gbc.select_values = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vals,cljs.core.select_keys);
modern_cljs.gbc.appendObjects = (function appendObjects(stringOfListItems){return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#bonuseslivehere"], null),cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stringOfListItems,""))?(function (){modern_cljs.gbc.emptyLinkxAlert();
return modern_cljs.gbc.loadingStop();
})():enfocus.core.append.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([stringOfListItems], 0)))], 0));
});
modern_cljs.gbc.morelinks = (function morelinks(){modern_cljs.gbc.loadingStart();
enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#bonuseslivehere"], null),cljs.core.array_seq([enfocus.core.html_content("")], 0));
modern_cljs.model.getLatestLinks(modern_cljs.gbc.gameid,(function (p1__16333_SHARP_){modern_cljs.gbc.appendObjects(p1__16333_SHARP_);
return modern_cljs.gbc.loadingStop();
}));
return modern_cljs.gbc.postLogin();
});
goog.exportSymbol('modern_cljs.gbc.morelinks', modern_cljs.gbc.morelinks);
modern_cljs.gbc.friendsFromBonuses = (function friendsFromBonuses(bonuses){return cljs.core.clj__GT_js(cljs.core.distinct(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__16334_SHARP_,p2__16335_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__16334_SHARP_,(p2__16335_SHARP_["actor_id"]));
}),cljs.core.PersistentVector.EMPTY,bonuses)));
});
modern_cljs.gbc.requestToFriends = (function requestToFriends(friends){return FB.ui((function (){var obj16339 = {"method":"apprequests","message":[cljs.core.str("I just collected some "),cljs.core.str(modern_cljs.gbc.gamename),cljs.core.str(" bonuses!")].join(''),"to":friends};return obj16339;
})(),(function (){return cljs.core.List.EMPTY;
}));
});
modern_cljs.gbc.noRecentlyCollectedBonuses = (function noRecentlyCollectedBonuses(){return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#collectedalready"], null),cljs.core.array_seq([enfocus.core.append.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["You haven't collected any bonuses recently (or cookies aren't configured)!\n                                    <a title= \"If you are experiencing problems with this section, \n                                                most often this is due to third party cookies being disabled\"\n                                    onclick=\"alert('If you are experiencing problems with this section, most often this is due to third party cookies being disabled.');\">Help</a>"], 0))], 0));
});
modern_cljs.gbc.splitQueryResult = (function splitQueryResult(queryResult){var graphChan_16381 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();modern_cljs.model.graphQuery(graphChan_16381,"/v2.1/me?fields=name");
var c__6793__auto___16382 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_16371){var state_val_16372 = (state_16371[1]);if((state_val_16372 === 2))
{var inst_16365 = (state_16371[7]);var inst_16367 = (state_16371[2]);var inst_16368 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_16367);var inst_16369 = modern_cljs.model.addClickxBonus(inst_16365,inst_16368);var state_16371__$1 = state_16371;return cljs.core.async.impl.ioc_helpers.return_chan(state_16371__$1,inst_16369);
} else
{if((state_val_16372 === 1))
{var inst_16361 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(queryResult);var inst_16362 = cljs.core.take(1,inst_16361);var inst_16363 = modern_cljs.model.insertBonuses(inst_16362);var inst_16364 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(queryResult);var inst_16365 = cljs.core.take(1,inst_16364);var state_16371__$1 = (function (){var statearr_16373 = state_16371;(statearr_16373[7] = inst_16365);
(statearr_16373[8] = inst_16363);
return statearr_16373;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16371__$1,2,graphChan_16381);
} else
{return null;
}
}
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_16377 = (new Array(9));(statearr_16377[0] = state_machine__6724__auto__);
(statearr_16377[1] = 1);
return statearr_16377;
});
var state_machine__6724__auto____1 = (function (state_16371){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_16371);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$51))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e16378){if((e16378 instanceof Object))
{var ex__6727__auto__ = e16378;var statearr_16379_16383 = state_16371;(statearr_16379_16383[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_16371);
return cljs.core.constant$keyword$51;
} else
{if(cljs.core.constant$keyword$6)
{throw e16378;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$51))
{{
var G__16384 = state_16371;
state_16371 = G__16384;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_16371){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_16371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_16380 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_16380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto___16382);
return statearr_16380;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
if(cljs.core.truth_(window.hasstorage))
{return cljs.core.group_by((function (p1__16340_SHARP_){return (localStorage.getItem((p1__16340_SHARP_["post_id"])) > 0);
}),queryResult);
} else
{return cljs.core.group_by((function (){return (0 > 1);
}),queryResult);
}
});
modern_cljs.gbc.getRawBonuses = (function getRawBonuses(c){return modern_cljs.model.fqlquerytemplate(c,modern_cljs.model.bonusfqlquery(modern_cljs.gbc.gameid));
});
modern_cljs.gbc.noncookie = (function noncookie(binarysplit){return cljs.core.nth.cljs$core$IFn$_invoke$arity$2((modern_cljs.gbc.select_values.cljs$core$IFn$_invoke$arity$2 ? modern_cljs.gbc.select_values.cljs$core$IFn$_invoke$arity$2(binarysplit,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null)) : modern_cljs.gbc.select_values.call(null,binarysplit,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null))),0);
});
modern_cljs.gbc.cookie = (function cookie(binarysplit){return cljs.core.nth.cljs$core$IFn$_invoke$arity$2((modern_cljs.gbc.select_values.cljs$core$IFn$_invoke$arity$2 ? modern_cljs.gbc.select_values.cljs$core$IFn$_invoke$arity$2(binarysplit,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null)) : modern_cljs.gbc.select_values.call(null,binarysplit,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null))),0);
});
modern_cljs.gbc.getBonuses = (function getBonuses(){var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__6793__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_16483){var state_val_16484 = (state_16483[1]);if((state_val_16484 === 1))
{var inst_16447 = modern_cljs.gbc.getRawBonuses(c);var state_16483__$1 = (function (){var statearr_16485 = state_16483;(statearr_16485[7] = inst_16447);
return statearr_16485;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16483__$1,2,c);
} else
{if((state_val_16484 === 2))
{var inst_16449 = (state_16483[2]);var inst_16450 = modern_cljs.gbc.splitQueryResult(inst_16449);var inst_16451 = modern_cljs.gbc.loadingStop();var state_16483__$1 = (function (){var statearr_16486 = state_16483;(statearr_16486[8] = inst_16450);
(statearr_16486[9] = inst_16451);
return statearr_16486;
})();if(cljs.core.truth_(modern_cljs.gbc.inFacebook))
{var statearr_16487_16509 = state_16483__$1;(statearr_16487_16509[1] = 3);
} else
{var statearr_16488_16510 = state_16483__$1;(statearr_16488_16510[1] = 4);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_16484 === 3))
{var inst_16450 = (state_16483[8]);var inst_16453 = modern_cljs.gbc.noncookie(inst_16450);var inst_16454 = modern_cljs.gbc.friendsFromBonuses(inst_16453);var inst_16455 = modern_cljs.gbc.requestToFriends(inst_16454);var state_16483__$1 = state_16483;var statearr_16489_16511 = state_16483__$1;(statearr_16489_16511[2] = inst_16455);
(statearr_16489_16511[1] = 5);
return cljs.core.constant$keyword$51;
} else
{if((state_val_16484 === 4))
{var state_16483__$1 = state_16483;var statearr_16490_16512 = state_16483__$1;(statearr_16490_16512[2] = null);
(statearr_16490_16512[1] = 5);
return cljs.core.constant$keyword$51;
} else
{if((state_val_16484 === 5))
{var inst_16450 = (state_16483[8]);var inst_16458 = (state_16483[2]);var inst_16459 = modern_cljs.gbc.noncookie(inst_16450);var inst_16460 = cljs.core.empty_QMARK_(inst_16459);var state_16483__$1 = (function (){var statearr_16491 = state_16483;(statearr_16491[10] = inst_16458);
return statearr_16491;
})();if(inst_16460)
{var statearr_16492_16513 = state_16483__$1;(statearr_16492_16513[1] = 6);
} else
{var statearr_16493_16514 = state_16483__$1;(statearr_16493_16514[1] = 7);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_16484 === 6))
{var inst_16462 = modern_cljs.gbc.morelinks();var inst_16463 = modern_cljs.gbc.noBonusAlert();var state_16483__$1 = (function (){var statearr_16494 = state_16483;(statearr_16494[11] = inst_16462);
return statearr_16494;
})();var statearr_16495_16515 = state_16483__$1;(statearr_16495_16515[2] = inst_16463);
(statearr_16495_16515[1] = 8);
return cljs.core.constant$keyword$51;
} else
{if((state_val_16484 === 7))
{var inst_16450 = (state_16483[8]);var inst_16465 = modern_cljs.gbc.noncookie(inst_16450);var inst_16466 = cljs.core.clj__GT_js(inst_16465);var inst_16467 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(modern_cljs.views.bonuspolaroid,"",inst_16466);var inst_16468 = modern_cljs.gbc.appendObjects(inst_16467);var state_16483__$1 = state_16483;var statearr_16496_16516 = state_16483__$1;(statearr_16496_16516[2] = inst_16468);
(statearr_16496_16516[1] = 8);
return cljs.core.constant$keyword$51;
} else
{if((state_val_16484 === 8))
{var inst_16450 = (state_16483[8]);var inst_16470 = (state_16483[2]);var inst_16471 = modern_cljs.gbc.cookie(inst_16450);var inst_16472 = cljs.core.empty_QMARK_(inst_16471);var state_16483__$1 = (function (){var statearr_16497 = state_16483;(statearr_16497[12] = inst_16470);
return statearr_16497;
})();if(inst_16472)
{var statearr_16498_16517 = state_16483__$1;(statearr_16498_16517[1] = 9);
} else
{var statearr_16499_16518 = state_16483__$1;(statearr_16499_16518[1] = 10);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_16484 === 9))
{var inst_16474 = modern_cljs.gbc.noRecentlyCollectedBonuses();var state_16483__$1 = state_16483;var statearr_16500_16519 = state_16483__$1;(statearr_16500_16519[2] = inst_16474);
(statearr_16500_16519[1] = 11);
return cljs.core.constant$keyword$51;
} else
{if((state_val_16484 === 10))
{var inst_16450 = (state_16483[8]);var inst_16476 = modern_cljs.gbc.cookie(inst_16450);var inst_16477 = cljs.core.clj__GT_js(inst_16476);var inst_16478 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(modern_cljs.views.bonuspolaroid,"",inst_16477);var inst_16479 = modern_cljs.gbc.appendInteractedAlready(inst_16478);var state_16483__$1 = state_16483;var statearr_16501_16520 = state_16483__$1;(statearr_16501_16520[2] = inst_16479);
(statearr_16501_16520[1] = 11);
return cljs.core.constant$keyword$51;
} else
{if((state_val_16484 === 11))
{var inst_16481 = (state_16483[2]);var state_16483__$1 = state_16483;return cljs.core.async.impl.ioc_helpers.return_chan(state_16483__$1,inst_16481);
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
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_16505 = (new Array(13));(statearr_16505[0] = state_machine__6724__auto__);
(statearr_16505[1] = 1);
return statearr_16505;
});
var state_machine__6724__auto____1 = (function (state_16483){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_16483);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$51))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e16506){if((e16506 instanceof Object))
{var ex__6727__auto__ = e16506;var statearr_16507_16521 = state_16483;(statearr_16507_16521[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_16483);
return cljs.core.constant$keyword$51;
} else
{if(cljs.core.constant$keyword$6)
{throw e16506;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$51))
{{
var G__16522 = state_16483;
state_16483 = G__16522;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_16483){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_16483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_16508 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_16508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto__);
return statearr_16508;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return c__6793__auto__;
});
goog.exportSymbol('modern_cljs.gbc.getBonuses', modern_cljs.gbc.getBonuses);
modern_cljs.gbc.bonuslistener = (function bonuslistener(bonus,postid){enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(bonus)].join('')], null),cljs.core.array_seq([enfocus.core.set_attr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$118,"border: 5px solid #05BE0C;"], 0))], 0));
if(cljs.core.truth_(window.hasstorage))
{return localStorage.setItem([cljs.core.str(bonus)].join(''),moment().unix());
} else
{return null;
}
});
goog.exportSymbol('modern_cljs.gbc.bonuslistener', modern_cljs.gbc.bonuslistener);
modern_cljs.gbc.linkinit = (function linkinit(){modern_cljs.gbc.morelinks();
return modern_cljs.gbc.hideRecentlyCollected();
});
goog.exportSymbol('modern_cljs.gbc.linkinit', modern_cljs.gbc.linkinit);
modern_cljs.gbc.authenticate = (function authenticate(initchan){enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#fbconnectanchor"], null),cljs.core.array_seq([enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["hidden"], 0))], 0));
return FB.login((function (p1__16523_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(initchan,p1__16523_SHARP_.status);
}),(function (){var obj16527 = {"scope":"read_stream, publish_actions, email"};return obj16527;
})());
});
modern_cljs.gbc.showFacebookConnect = (function showFacebookConnect(){modern_cljs.gbc.preLogin();
modern_cljs.gbc.loadingStop();
return alert("Please connect with Facebook to use this service!");
});
modern_cljs.gbc.addToSuggested = (function addToSuggested(gbcData){var gameid = cljs.core.last(cljs.core.last(gbcData));var gamename = cljs.core.last(cljs.core.first(gbcData));return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#Suggestions"], null),cljs.core.array_seq([enfocus.core.append.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("<a class=\"btn btn-info btn-lg addsmallmargin\" \n                                             target=\"_blank\"\n                                             href=\""),cljs.core.str(modern_cljs.environment.getLink("bonuscollectornonfb")),cljs.core.str(gameid),cljs.core.str("/\">"),cljs.core.str(gamename),cljs.core.str("</a>")].join('')], 0))], 0));
});
modern_cljs.gbc.queryGameid = (function queryGameid(c,gameid){return modern_cljs.model.fqlquerytemplate(c,modern_cljs.model.bonusSuggestionQuery(gameid));
});
modern_cljs.gbc.suggestions = (function suggestions(gbcids){var c__6793__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_16792){var state_val_16793 = (state_16792[1]);if((state_val_16793 === 1))
{var inst_16688 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var inst_16697 = cljs.core.seq(gbcids);var inst_16698 = inst_16697;var inst_16699 = null;var inst_16700 = 0;var inst_16701 = 0;var state_16792__$1 = (function (){var statearr_16794 = state_16792;(statearr_16794[7] = inst_16701);
(statearr_16794[8] = inst_16700);
(statearr_16794[9] = inst_16699);
(statearr_16794[10] = inst_16698);
(statearr_16794[11] = inst_16688);
return statearr_16794;
})();var statearr_16795_16848 = state_16792__$1;(statearr_16795_16848[2] = null);
(statearr_16795_16848[1] = 2);
return cljs.core.constant$keyword$51;
} else
{if((state_val_16793 === 2))
{var inst_16701 = (state_16792[7]);var inst_16700 = (state_16792[8]);var inst_16703 = (inst_16701 < inst_16700);var inst_16704 = inst_16703;var state_16792__$1 = state_16792;if(cljs.core.truth_(inst_16704))
{var statearr_16796_16849 = state_16792__$1;(statearr_16796_16849[1] = 4);
} else
{var statearr_16797_16850 = state_16792__$1;(statearr_16797_16850[1] = 5);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_16793 === 3))
{var inst_16790 = (state_16792[2]);var state_16792__$1 = state_16792;return cljs.core.async.impl.ioc_helpers.return_chan(state_16792__$1,inst_16790);
} else
{if((state_val_16793 === 4))
{var inst_16706 = (state_16792[12]);var inst_16701 = (state_16792[7]);var inst_16699 = (state_16792[9]);var inst_16688 = (state_16792[11]);var inst_16706__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16699,inst_16701);var inst_16707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16706__$1,cljs.core.constant$keyword$119);var inst_16708 = modern_cljs.gbc.queryGameid(inst_16688,inst_16707);var state_16792__$1 = (function (){var statearr_16798 = state_16792;(statearr_16798[12] = inst_16706__$1);
(statearr_16798[13] = inst_16708);
return statearr_16798;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16792__$1,7,inst_16688);
} else
{if((state_val_16793 === 5))
{var inst_16740 = (state_16792[14]);var inst_16698 = (state_16792[10]);var inst_16740__$1 = cljs.core.seq(inst_16698);var state_16792__$1 = (function (){var statearr_16799 = state_16792;(statearr_16799[14] = inst_16740__$1);
return statearr_16799;
})();if(inst_16740__$1)
{var statearr_16800_16851 = state_16792__$1;(statearr_16800_16851[1] = 15);
} else
{var statearr_16801_16852 = state_16792__$1;(statearr_16801_16852[1] = 16);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_16793 === 6))
{var inst_16788 = (state_16792[2]);var state_16792__$1 = state_16792;var statearr_16802_16853 = state_16792__$1;(statearr_16802_16853[2] = inst_16788);
(statearr_16802_16853[1] = 3);
return cljs.core.constant$keyword$51;
} else
{if((state_val_16793 === 7))
{var inst_16713 = (state_16792[15]);var inst_16711 = (state_16792[16]);var inst_16710 = (state_16792[2]);var inst_16711__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_16710);var inst_16712 = cljs.core.first(inst_16711__$1);var inst_16713__$1 = cljs.core.not_empty(inst_16712);var state_16792__$1 = (function (){var statearr_16803 = state_16792;(statearr_16803[15] = inst_16713__$1);
(statearr_16803[16] = inst_16711__$1);
return statearr_16803;
})();if(cljs.core.truth_(inst_16713__$1))
{var statearr_16804_16854 = state_16792__$1;(statearr_16804_16854[1] = 8);
} else
{var statearr_16805_16855 = state_16792__$1;(statearr_16805_16855[1] = 9);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_16793 === 8))
{var inst_16711 = (state_16792[16]);var inst_16706 = (state_16792[12]);var inst_16715 = cljs.core.first(inst_16711);var inst_16716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16715,"app_id");var inst_16717 = [cljs.core.str(inst_16716)].join('');var inst_16718 = (inst_16706.cljs$core$IFn$_invoke$arity$1 ? inst_16706.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$119) : inst_16706.call(null,cljs.core.constant$keyword$119));var inst_16719 = [cljs.core.str(inst_16718)].join('');var inst_16720 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16717,inst_16719);var state_16792__$1 = state_16792;var statearr_16806_16856 = state_16792__$1;(statearr_16806_16856[2] = inst_16720);
(statearr_16806_16856[1] = 10);
return cljs.core.constant$keyword$51;
} else
{if((state_val_16793 === 9))
{var inst_16713 = (state_16792[15]);var state_16792__$1 = state_16792;var statearr_16807_16857 = state_16792__$1;(statearr_16807_16857[2] = inst_16713);
(statearr_16807_16857[1] = 10);
return cljs.core.constant$keyword$51;
} else
{if((state_val_16793 === 10))
{var inst_16723 = (state_16792[2]);var state_16792__$1 = state_16792;if(cljs.core.truth_(inst_16723))
{var statearr_16811_16858 = state_16792__$1;(statearr_16811_16858[1] = 11);
} else
{var statearr_16812_16859 = state_16792__$1;(statearr_16812_16859[1] = 12);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_16793 === 11))
{var inst_16725 = modern_cljs.gbc.timeout(2000);var state_16792__$1 = state_16792;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16792__$1,14,inst_16725);
} else
{if((state_val_16793 === 12))
{var inst_16701 = (state_16792[7]);var inst_16700 = (state_16792[8]);var inst_16699 = (state_16792[9]);var inst_16698 = (state_16792[10]);var inst_16735 = (inst_16701 + 1);var tmp16808 = inst_16700;var tmp16809 = inst_16699;var tmp16810 = inst_16698;var inst_16698__$1 = tmp16810;var inst_16699__$1 = tmp16809;var inst_16700__$1 = tmp16808;var inst_16701__$1 = inst_16735;var state_16792__$1 = (function (){var statearr_16816 = state_16792;(statearr_16816[7] = inst_16701__$1);
(statearr_16816[8] = inst_16700__$1);
(statearr_16816[9] = inst_16699__$1);
(statearr_16816[10] = inst_16698__$1);
return statearr_16816;
})();var statearr_16817_16860 = state_16792__$1;(statearr_16817_16860[2] = null);
(statearr_16817_16860[1] = 2);
return cljs.core.constant$keyword$51;
} else
{if((state_val_16793 === 13))
{var inst_16738 = (state_16792[2]);var state_16792__$1 = state_16792;var statearr_16818_16861 = state_16792__$1;(statearr_16818_16861[2] = inst_16738);
(statearr_16818_16861[1] = 6);
return cljs.core.constant$keyword$51;
} else
{if((state_val_16793 === 14))
{var inst_16711 = (state_16792[16]);var inst_16706 = (state_16792[12]);var inst_16701 = (state_16792[7]);var inst_16700 = (state_16792[8]);var inst_16699 = (state_16792[9]);var inst_16698 = (state_16792[10]);var inst_16727 = (state_16792[2]);var inst_16728 = cljs.core.take(1,inst_16711);var inst_16729 = modern_cljs.model.insertBonuses(inst_16728);var inst_16730 = cljs.core.take(2,inst_16706);var inst_16731 = modern_cljs.gbc.addToSuggested(inst_16730);var inst_16732 = (inst_16701 + 1);var tmp16813 = inst_16700;var tmp16814 = inst_16699;var tmp16815 = inst_16698;var inst_16698__$1 = tmp16815;var inst_16699__$1 = tmp16814;var inst_16700__$1 = tmp16813;var inst_16701__$1 = inst_16732;var state_16792__$1 = (function (){var statearr_16819 = state_16792;(statearr_16819[17] = inst_16729);
(statearr_16819[7] = inst_16701__$1);
(statearr_16819[8] = inst_16700__$1);
(statearr_16819[18] = inst_16727);
(statearr_16819[9] = inst_16699__$1);
(statearr_16819[10] = inst_16698__$1);
(statearr_16819[19] = inst_16731);
return statearr_16819;
})();var statearr_16820_16862 = state_16792__$1;(statearr_16820_16862[2] = null);
(statearr_16820_16862[1] = 2);
return cljs.core.constant$keyword$51;
} else
{if((state_val_16793 === 15))
{var inst_16740 = (state_16792[14]);var inst_16742 = cljs.core.chunked_seq_QMARK_(inst_16740);var state_16792__$1 = state_16792;if(inst_16742)
{var statearr_16821_16863 = state_16792__$1;(statearr_16821_16863[1] = 18);
} else
{var statearr_16822_16864 = state_16792__$1;(statearr_16822_16864[1] = 19);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_16793 === 16))
{var state_16792__$1 = state_16792;var statearr_16823_16865 = state_16792__$1;(statearr_16823_16865[2] = null);
(statearr_16823_16865[1] = 17);
return cljs.core.constant$keyword$51;
} else
{if((state_val_16793 === 17))
{var inst_16786 = (state_16792[2]);var state_16792__$1 = state_16792;var statearr_16824_16866 = state_16792__$1;(statearr_16824_16866[2] = inst_16786);
(statearr_16824_16866[1] = 6);
return cljs.core.constant$keyword$51;
} else
{if((state_val_16793 === 18))
{var inst_16740 = (state_16792[14]);var inst_16744 = cljs.core.chunk_first(inst_16740);var inst_16745 = cljs.core.chunk_rest(inst_16740);var inst_16746 = cljs.core.count(inst_16744);var inst_16698 = inst_16745;var inst_16699 = inst_16744;var inst_16700 = inst_16746;var inst_16701 = 0;var state_16792__$1 = (function (){var statearr_16825 = state_16792;(statearr_16825[7] = inst_16701);
(statearr_16825[8] = inst_16700);
(statearr_16825[9] = inst_16699);
(statearr_16825[10] = inst_16698);
return statearr_16825;
})();var statearr_16826_16867 = state_16792__$1;(statearr_16826_16867[2] = null);
(statearr_16826_16867[1] = 2);
return cljs.core.constant$keyword$51;
} else
{if((state_val_16793 === 19))
{var inst_16740 = (state_16792[14]);var inst_16749 = (state_16792[20]);var inst_16688 = (state_16792[11]);var inst_16749__$1 = cljs.core.first(inst_16740);var inst_16750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16749__$1,cljs.core.constant$keyword$119);var inst_16751 = modern_cljs.gbc.queryGameid(inst_16688,inst_16750);var state_16792__$1 = (function (){var statearr_16827 = state_16792;(statearr_16827[20] = inst_16749__$1);
(statearr_16827[21] = inst_16751);
return statearr_16827;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16792__$1,21,inst_16688);
} else
{if((state_val_16793 === 20))
{var inst_16783 = (state_16792[2]);var state_16792__$1 = state_16792;var statearr_16828_16868 = state_16792__$1;(statearr_16828_16868[2] = inst_16783);
(statearr_16828_16868[1] = 17);
return cljs.core.constant$keyword$51;
} else
{if((state_val_16793 === 21))
{var inst_16756 = (state_16792[22]);var inst_16754 = (state_16792[23]);var inst_16753 = (state_16792[2]);var inst_16754__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_16753);var inst_16755 = cljs.core.first(inst_16754__$1);var inst_16756__$1 = cljs.core.not_empty(inst_16755);var state_16792__$1 = (function (){var statearr_16829 = state_16792;(statearr_16829[22] = inst_16756__$1);
(statearr_16829[23] = inst_16754__$1);
return statearr_16829;
})();if(cljs.core.truth_(inst_16756__$1))
{var statearr_16830_16869 = state_16792__$1;(statearr_16830_16869[1] = 22);
} else
{var statearr_16831_16870 = state_16792__$1;(statearr_16831_16870[1] = 23);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_16793 === 22))
{var inst_16749 = (state_16792[20]);var inst_16754 = (state_16792[23]);var inst_16758 = cljs.core.first(inst_16754);var inst_16759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16758,"app_id");var inst_16760 = [cljs.core.str(inst_16759)].join('');var inst_16761 = (inst_16749.cljs$core$IFn$_invoke$arity$1 ? inst_16749.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$119) : inst_16749.call(null,cljs.core.constant$keyword$119));var inst_16762 = [cljs.core.str(inst_16761)].join('');var inst_16763 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16760,inst_16762);var state_16792__$1 = state_16792;var statearr_16832_16871 = state_16792__$1;(statearr_16832_16871[2] = inst_16763);
(statearr_16832_16871[1] = 24);
return cljs.core.constant$keyword$51;
} else
{if((state_val_16793 === 23))
{var inst_16756 = (state_16792[22]);var state_16792__$1 = state_16792;var statearr_16833_16872 = state_16792__$1;(statearr_16833_16872[2] = inst_16756);
(statearr_16833_16872[1] = 24);
return cljs.core.constant$keyword$51;
} else
{if((state_val_16793 === 24))
{var inst_16766 = (state_16792[2]);var state_16792__$1 = state_16792;if(cljs.core.truth_(inst_16766))
{var statearr_16834_16873 = state_16792__$1;(statearr_16834_16873[1] = 25);
} else
{var statearr_16835_16874 = state_16792__$1;(statearr_16835_16874[1] = 26);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_16793 === 25))
{var inst_16768 = modern_cljs.gbc.timeout(2000);var state_16792__$1 = state_16792;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16792__$1,28,inst_16768);
} else
{if((state_val_16793 === 26))
{var inst_16740 = (state_16792[14]);var inst_16778 = cljs.core.next(inst_16740);var inst_16698 = inst_16778;var inst_16699 = null;var inst_16700 = 0;var inst_16701 = 0;var state_16792__$1 = (function (){var statearr_16836 = state_16792;(statearr_16836[7] = inst_16701);
(statearr_16836[8] = inst_16700);
(statearr_16836[9] = inst_16699);
(statearr_16836[10] = inst_16698);
return statearr_16836;
})();var statearr_16837_16875 = state_16792__$1;(statearr_16837_16875[2] = null);
(statearr_16837_16875[1] = 2);
return cljs.core.constant$keyword$51;
} else
{if((state_val_16793 === 27))
{var inst_16781 = (state_16792[2]);var state_16792__$1 = state_16792;var statearr_16838_16876 = state_16792__$1;(statearr_16838_16876[2] = inst_16781);
(statearr_16838_16876[1] = 20);
return cljs.core.constant$keyword$51;
} else
{if((state_val_16793 === 28))
{var inst_16740 = (state_16792[14]);var inst_16749 = (state_16792[20]);var inst_16754 = (state_16792[23]);var inst_16770 = (state_16792[2]);var inst_16771 = cljs.core.take(1,inst_16754);var inst_16772 = modern_cljs.model.insertBonuses(inst_16771);var inst_16773 = cljs.core.take(2,inst_16749);var inst_16774 = modern_cljs.gbc.addToSuggested(inst_16773);var inst_16775 = cljs.core.next(inst_16740);var inst_16698 = inst_16775;var inst_16699 = null;var inst_16700 = 0;var inst_16701 = 0;var state_16792__$1 = (function (){var statearr_16839 = state_16792;(statearr_16839[7] = inst_16701);
(statearr_16839[8] = inst_16700);
(statearr_16839[9] = inst_16699);
(statearr_16839[24] = inst_16774);
(statearr_16839[10] = inst_16698);
(statearr_16839[25] = inst_16772);
(statearr_16839[26] = inst_16770);
return statearr_16839;
})();var statearr_16840_16877 = state_16792__$1;(statearr_16840_16877[2] = null);
(statearr_16840_16877[1] = 2);
return cljs.core.constant$keyword$51;
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
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_16844 = (new Array(27));(statearr_16844[0] = state_machine__6724__auto__);
(statearr_16844[1] = 1);
return statearr_16844;
});
var state_machine__6724__auto____1 = (function (state_16792){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_16792);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$51))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e16845){if((e16845 instanceof Object))
{var ex__6727__auto__ = e16845;var statearr_16846_16878 = state_16792;(statearr_16846_16878[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_16792);
return cljs.core.constant$keyword$51;
} else
{if(cljs.core.constant$keyword$6)
{throw e16845;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$51))
{{
var G__16879 = state_16792;
state_16792 = G__16879;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_16792){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_16792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_16847 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_16847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto__);
return statearr_16847;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return c__6793__auto__;
});
modern_cljs.gbc.getAppData = (function getAppData(appid){var queryChan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__6793__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_16918){var state_val_16919 = (state_16918[1]);if((state_val_16919 === 3))
{var inst_16912 = (state_16918[2]);var inst_16913 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_16912);var inst_16914 = cljs.core.first(inst_16913);var inst_16915 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_16914,cljs.core.constant$keyword$120,appid);var inst_16916 = modern_cljs.model.insertNewApplication(inst_16915);var state_16918__$1 = state_16918;return cljs.core.async.impl.ioc_helpers.return_chan(state_16918__$1,inst_16916);
} else
{if((state_val_16919 === 2))
{var inst_16908 = (state_16918[2]);var inst_16909 = modern_cljs.model.appInfoQuery(appid);var inst_16910 = modern_cljs.model.fqlquerytemplate(queryChan,inst_16909);var state_16918__$1 = (function (){var statearr_16920 = state_16918;(statearr_16920[7] = inst_16910);
(statearr_16920[8] = inst_16908);
return statearr_16920;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16918__$1,3,queryChan);
} else
{if((state_val_16919 === 1))
{var inst_16904 = cljs.core.rand_int(20);var inst_16905 = (inst_16904 * 1000);var inst_16906 = modern_cljs.gbc.timeout(inst_16905);var state_16918__$1 = state_16918;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16918__$1,2,inst_16906);
} else
{return null;
}
}
}
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_16924 = (new Array(9));(statearr_16924[0] = state_machine__6724__auto__);
(statearr_16924[1] = 1);
return statearr_16924;
});
var state_machine__6724__auto____1 = (function (state_16918){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_16918);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$51))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e16925){if((e16925 instanceof Object))
{var ex__6727__auto__ = e16925;var statearr_16926_16928 = state_16918;(statearr_16926_16928[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_16918);
return cljs.core.constant$keyword$51;
} else
{if(cljs.core.constant$keyword$6)
{throw e16925;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$51))
{{
var G__16929 = state_16918;
state_16918 = G__16929;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_16918){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_16918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_16927 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_16927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto__);
return statearr_16927;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return c__6793__auto__;
});
modern_cljs.gbc.getNewAppIds = (function getNewAppIds(appIds){var currentIdChan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__6793__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_16971){var state_val_16972 = (state_16971[1]);if((state_val_16972 === 2))
{var inst_16961 = (state_16971[7]);var inst_16962 = (state_16971[8]);var inst_16958 = (state_16971[9]);var inst_16964 = (state_16971[2]);var inst_16965 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_16962,inst_16964);var inst_16966 = cljs.core.set(inst_16965);var inst_16967 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_16961,inst_16966);var inst_16968 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_16958,inst_16967);var inst_16969 = cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(inst_16968);var state_16971__$1 = state_16971;return cljs.core.async.impl.ioc_helpers.return_chan(state_16971__$1,inst_16969);
} else
{if((state_val_16972 === 1))
{var inst_16957 = modern_cljs.model.getApplicationIds(currentIdChan);var inst_16958 = (function (){return ((function (inst_16957,state_val_16972){
return (function (p1__16930_SHARP_){return modern_cljs.gbc.getAppData(p1__16930_SHARP_);
});
;})(inst_16957,state_val_16972))
})();var inst_16959 = (function (){return ((function (inst_16957,inst_16958,state_val_16972){
return (function (p1__16931_SHARP_){return cljs.reader.read_string(p1__16931_SHARP_);
});
;})(inst_16957,inst_16958,state_val_16972))
})();var inst_16960 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_16959,appIds);var inst_16961 = cljs.core.set(inst_16960);var inst_16962 = (function (){return ((function (inst_16957,inst_16958,inst_16959,inst_16960,inst_16961,state_val_16972){
return (function (p1__16932_SHARP_){return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__16932_SHARP_,cljs.core.constant$keyword$120);
});
;})(inst_16957,inst_16958,inst_16959,inst_16960,inst_16961,state_val_16972))
})();var state_16971__$1 = (function (){var statearr_16973 = state_16971;(statearr_16973[7] = inst_16961);
(statearr_16973[8] = inst_16962);
(statearr_16973[10] = inst_16957);
(statearr_16973[9] = inst_16958);
return statearr_16973;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16971__$1,2,currentIdChan);
} else
{return null;
}
}
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_16977 = (new Array(11));(statearr_16977[0] = state_machine__6724__auto__);
(statearr_16977[1] = 1);
return statearr_16977;
});
var state_machine__6724__auto____1 = (function (state_16971){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_16971);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$51))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e16978){if((e16978 instanceof Object))
{var ex__6727__auto__ = e16978;var statearr_16979_16981 = state_16971;(statearr_16979_16981[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_16971);
return cljs.core.constant$keyword$51;
} else
{if(cljs.core.constant$keyword$6)
{throw e16978;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$51))
{{
var G__16982 = state_16971;
state_16971 = G__16982;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_16971){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_16971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_16980 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_16980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto__);
return statearr_16980;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return c__6793__auto__;
});
modern_cljs.gbc.filterAppIds = (function filterAppIds(graphResult){var c__6793__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_17006){var state_val_17007 = (state_17006[1]);if((state_val_17007 === 1))
{var inst_17000 = (function (){return ((function (state_val_17007){
return (function (p1__16983_SHARP_){return (p1__16983_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16983_SHARP_.cljs$core$IFn$_invoke$arity$1("application") : p1__16983_SHARP_.call(null,"application")).call(null,"id");
});
;})(state_val_17007))
})();var inst_17001 = (function (){return ((function (inst_17000,state_val_17007){
return (function (p1__16984_SHARP_){return cljs.core.complement(cljs.core.nil_QMARK_).call(null,(p1__16984_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16984_SHARP_.cljs$core$IFn$_invoke$arity$1("application") : p1__16984_SHARP_.call(null,"application")));
});
;})(inst_17000,state_val_17007))
})();var inst_17002 = cljs.core.filter(inst_17001,graphResult);var inst_17003 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_17000,inst_17002);var inst_17004 = modern_cljs.gbc.getNewAppIds(inst_17003);var state_17006__$1 = state_17006;return cljs.core.async.impl.ioc_helpers.return_chan(state_17006__$1,inst_17004);
} else
{return null;
}
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_17011 = (new Array(7));(statearr_17011[0] = state_machine__6724__auto__);
(statearr_17011[1] = 1);
return statearr_17011;
});
var state_machine__6724__auto____1 = (function (state_17006){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_17006);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$51))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e17012){if((e17012 instanceof Object))
{var ex__6727__auto__ = e17012;var statearr_17013_17015 = state_17006;(statearr_17013_17015[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17006);
return cljs.core.constant$keyword$51;
} else
{if(cljs.core.constant$keyword$6)
{throw e17012;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$51))
{{
var G__17016 = state_17006;
state_17006 = G__17016;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_17006){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_17006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_17014 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_17014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto__);
return statearr_17014;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return c__6793__auto__;
});
modern_cljs.gbc.appResearch = (function appResearch(){var c__6793__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_17043){var state_val_17044 = (state_17043[1]);if((state_val_17044 === 2))
{var inst_17038 = (state_17043[2]);var inst_17039 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_17038);var inst_17040 = (inst_17039.cljs$core$IFn$_invoke$arity$1 ? inst_17039.cljs$core$IFn$_invoke$arity$1("data") : inst_17039.call(null,"data"));var inst_17041 = modern_cljs.gbc.filterAppIds(inst_17040);var state_17043__$1 = state_17043;return cljs.core.async.impl.ioc_helpers.return_chan(state_17043__$1,inst_17041);
} else
{if((state_val_17044 === 1))
{var inst_17035 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var inst_17036 = modern_cljs.model.graphQuery(inst_17035,"/v2.1/me/home?fields=application");var state_17043__$1 = (function (){var statearr_17045 = state_17043;(statearr_17045[7] = inst_17036);
return statearr_17045;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17043__$1,2,inst_17035);
} else
{return null;
}
}
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_17049 = (new Array(8));(statearr_17049[0] = state_machine__6724__auto__);
(statearr_17049[1] = 1);
return statearr_17049;
});
var state_machine__6724__auto____1 = (function (state_17043){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_17043);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$51))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e17050){if((e17050 instanceof Object))
{var ex__6727__auto__ = e17050;var statearr_17051_17053 = state_17043;(statearr_17051_17053[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17043);
return cljs.core.constant$keyword$51;
} else
{if(cljs.core.constant$keyword$6)
{throw e17050;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$51))
{{
var G__17054 = state_17043;
state_17043 = G__17054;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_17043){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_17043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_17052 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_17052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto__);
return statearr_17052;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return c__6793__auto__;
});
modern_cljs.gbc.getdemfam = (function getdemfam(){var c__6793__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_17080){var state_val_17081 = (state_17080[1]);if((state_val_17081 === 2))
{var inst_17076 = (state_17080[2]);var inst_17077 = modern_cljs.gbc.suggestions(inst_17076);var inst_17078 = modern_cljs.gbc.appResearch();var state_17080__$1 = (function (){var statearr_17082 = state_17080;(statearr_17082[7] = inst_17077);
return statearr_17082;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_17080__$1,inst_17078);
} else
{if((state_val_17081 === 1))
{var inst_17073 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var inst_17074 = modern_cljs.model.getGbcIds(inst_17073);var state_17080__$1 = (function (){var statearr_17083 = state_17080;(statearr_17083[8] = inst_17074);
return statearr_17083;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17080__$1,2,inst_17073);
} else
{return null;
}
}
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_17087 = (new Array(9));(statearr_17087[0] = state_machine__6724__auto__);
(statearr_17087[1] = 1);
return statearr_17087;
});
var state_machine__6724__auto____1 = (function (state_17080){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_17080);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$51))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e17088){if((e17088 instanceof Object))
{var ex__6727__auto__ = e17088;var statearr_17089_17091 = state_17080;(statearr_17089_17091[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17080);
return cljs.core.constant$keyword$51;
} else
{if(cljs.core.constant$keyword$6)
{throw e17088;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$51))
{{
var G__17092 = state_17080;
state_17080 = G__17092;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_17080){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_17080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_17090 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_17090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto__);
return statearr_17090;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return c__6793__auto__;
});
modern_cljs.gbc.facebookInit = (function facebookInit(initchan){initfacebook(modern_cljs.gbc.appid,(function (p1__17093_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(initchan,p1__17093_SHARP_.status);
}),"read_stream, publish_actions, email");
return (function (){return goog.events.listen(goog.dom.getElement("prelogin"),"click",(function (){return modern_cljs.gbc.authenticate(initchan);
}));
}).call(null);
});
modern_cljs.gbc.authStateCheck = (function authStateCheck(initchan){var c__6793__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_17190){var state_val_17191 = (state_17190[1]);if((state_val_17191 === 1))
{var state_17190__$1 = state_17190;var statearr_17192_17220 = state_17190__$1;(statearr_17192_17220[2] = null);
(statearr_17192_17220[1] = 2);
return cljs.core.constant$keyword$51;
} else
{if((state_val_17191 === 2))
{var state_17190__$1 = state_17190;if(true)
{var statearr_17193_17221 = state_17190__$1;(statearr_17193_17221[1] = 4);
} else
{var statearr_17194_17222 = state_17190__$1;(statearr_17194_17222[1] = 5);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_17191 === 3))
{var inst_17188 = (state_17190[2]);var state_17190__$1 = state_17190;return cljs.core.async.impl.ioc_helpers.return_chan(state_17190__$1,inst_17188);
} else
{if((state_val_17191 === 4))
{var state_17190__$1 = state_17190;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17190__$1,7,initchan);
} else
{if((state_val_17191 === 5))
{var state_17190__$1 = state_17190;var statearr_17195_17223 = state_17190__$1;(statearr_17195_17223[2] = null);
(statearr_17195_17223[1] = 6);
return cljs.core.constant$keyword$51;
} else
{if((state_val_17191 === 6))
{var inst_17186 = (state_17190[2]);var state_17190__$1 = state_17190;var statearr_17196_17224 = state_17190__$1;(statearr_17196_17224[2] = inst_17186);
(statearr_17196_17224[1] = 3);
return cljs.core.constant$keyword$51;
} else
{if((state_val_17191 === 7))
{var inst_17160 = (state_17190[7]);var inst_17160__$1 = (state_17190[2]);var inst_17161 = [cljs.core.str(inst_17160__$1)].join('');var inst_17162 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17161,"connected");var state_17190__$1 = (function (){var statearr_17197 = state_17190;(statearr_17197[7] = inst_17160__$1);
return statearr_17197;
})();if(inst_17162)
{var statearr_17198_17225 = state_17190__$1;(statearr_17198_17225[1] = 8);
} else
{var statearr_17199_17226 = state_17190__$1;(statearr_17199_17226[1] = 9);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_17191 === 8))
{var inst_17164 = modern_cljs.gbc.getBonuses();var inst_17165 = modern_cljs.gbc.postLogin();var inst_17166 = modern_cljs.gbc.loadingStart();var inst_17167 = modern_cljs.gbc.getdemfam();var state_17190__$1 = (function (){var statearr_17200 = state_17190;(statearr_17200[8] = inst_17165);
(statearr_17200[9] = inst_17164);
(statearr_17200[10] = inst_17166);
return statearr_17200;
})();var statearr_17201_17227 = state_17190__$1;(statearr_17201_17227[2] = inst_17167);
(statearr_17201_17227[1] = 10);
return cljs.core.constant$keyword$51;
} else
{if((state_val_17191 === 9))
{var inst_17160 = (state_17190[7]);var inst_17169 = [cljs.core.str(inst_17160)].join('');var inst_17170 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17169,"not_authorized");var state_17190__$1 = state_17190;if(inst_17170)
{var statearr_17202_17228 = state_17190__$1;(statearr_17202_17228[1] = 11);
} else
{var statearr_17203_17229 = state_17190__$1;(statearr_17203_17229[1] = 12);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_17191 === 10))
{var inst_17182 = (state_17190[2]);var state_17190__$1 = (function (){var statearr_17204 = state_17190;(statearr_17204[11] = inst_17182);
return statearr_17204;
})();var statearr_17205_17230 = state_17190__$1;(statearr_17205_17230[2] = null);
(statearr_17205_17230[1] = 2);
return cljs.core.constant$keyword$51;
} else
{if((state_val_17191 === 11))
{var inst_17172 = modern_cljs.gbc.showFacebookConnect();var state_17190__$1 = state_17190;var statearr_17206_17231 = state_17190__$1;(statearr_17206_17231[2] = inst_17172);
(statearr_17206_17231[1] = 13);
return cljs.core.constant$keyword$51;
} else
{if((state_val_17191 === 12))
{var state_17190__$1 = state_17190;if(cljs.core.constant$keyword$6)
{var statearr_17207_17232 = state_17190__$1;(statearr_17207_17232[1] = 14);
} else
{var statearr_17208_17233 = state_17190__$1;(statearr_17208_17233[1] = 15);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_17191 === 13))
{var inst_17180 = (state_17190[2]);var state_17190__$1 = state_17190;var statearr_17209_17234 = state_17190__$1;(statearr_17209_17234[2] = inst_17180);
(statearr_17209_17234[1] = 10);
return cljs.core.constant$keyword$51;
} else
{if((state_val_17191 === 14))
{var inst_17175 = modern_cljs.gbc.showFacebookConnect();var state_17190__$1 = state_17190;var statearr_17210_17235 = state_17190__$1;(statearr_17210_17235[2] = inst_17175);
(statearr_17210_17235[1] = 16);
return cljs.core.constant$keyword$51;
} else
{if((state_val_17191 === 15))
{var state_17190__$1 = state_17190;var statearr_17211_17236 = state_17190__$1;(statearr_17211_17236[2] = null);
(statearr_17211_17236[1] = 16);
return cljs.core.constant$keyword$51;
} else
{if((state_val_17191 === 16))
{var inst_17178 = (state_17190[2]);var state_17190__$1 = state_17190;var statearr_17212_17237 = state_17190__$1;(statearr_17212_17237[2] = inst_17178);
(statearr_17212_17237[1] = 13);
return cljs.core.constant$keyword$51;
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
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_17216 = (new Array(12));(statearr_17216[0] = state_machine__6724__auto__);
(statearr_17216[1] = 1);
return statearr_17216;
});
var state_machine__6724__auto____1 = (function (state_17190){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_17190);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$51))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e17217){if((e17217 instanceof Object))
{var ex__6727__auto__ = e17217;var statearr_17218_17238 = state_17190;(statearr_17218_17238[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17190);
return cljs.core.constant$keyword$51;
} else
{if(cljs.core.constant$keyword$6)
{throw e17217;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$51))
{{
var G__17239 = state_17190;
state_17190 = G__17239;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_17190){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_17190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_17219 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_17219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto__);
return statearr_17219;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return c__6793__auto__;
});
modern_cljs.gbc.gbcinit = (function gbcinit(){var initchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(5);modern_cljs.gbc.facebookInit(initchan);
return modern_cljs.gbc.authStateCheck(initchan);
});
goog.exportSymbol('modern_cljs.gbc.gbcinit', modern_cljs.gbc.gbcinit);
var c__6793__auto___17289 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_17268){var state_val_17269 = (state_17268[1]);if((state_val_17269 === 9))
{var inst_17261 = (state_17268[2]);var state_17268__$1 = state_17268;var statearr_17270_17290 = state_17268__$1;(statearr_17270_17290[2] = inst_17261);
(statearr_17270_17290[1] = 6);
return cljs.core.constant$keyword$51;
} else
{if((state_val_17269 === 8))
{var state_17268__$1 = state_17268;var statearr_17271_17291 = state_17268__$1;(statearr_17271_17291[2] = null);
(statearr_17271_17291[1] = 9);
return cljs.core.constant$keyword$51;
} else
{if((state_val_17269 === 7))
{var inst_17244 = (state_17268[7]);var inst_17255 = localStorage.key(inst_17244);var inst_17256 = localStorage.removeItem(inst_17255);var inst_17257 = (inst_17244 - 1);var inst_17244__$1 = inst_17257;var state_17268__$1 = (function (){var statearr_17272 = state_17268;(statearr_17272[7] = inst_17244__$1);
(statearr_17272[8] = inst_17256);
return statearr_17272;
})();var statearr_17273_17292 = state_17268__$1;(statearr_17273_17292[2] = null);
(statearr_17273_17292[1] = 5);
return cljs.core.constant$keyword$51;
} else
{if((state_val_17269 === 6))
{var inst_17263 = (state_17268[2]);var state_17268__$1 = state_17268;var statearr_17274_17293 = state_17268__$1;(statearr_17274_17293[2] = inst_17263);
(statearr_17274_17293[1] = 4);
return cljs.core.constant$keyword$51;
} else
{if((state_val_17269 === 5))
{var inst_17244 = (state_17268[7]);var inst_17246 = localStorage.key(inst_17244);var inst_17247 = localStorage.getItem(inst_17246);var inst_17248 = parseInt(inst_17247);var inst_17249 = moment();var inst_17250 = inst_17249.unix();var inst_17251 = (7 * 86400);var inst_17252 = (inst_17250 - inst_17251);var inst_17253 = (inst_17248 < inst_17252);var state_17268__$1 = state_17268;if(cljs.core.truth_(inst_17253))
{var statearr_17275_17294 = state_17268__$1;(statearr_17275_17294[1] = 7);
} else
{var statearr_17276_17295 = state_17268__$1;(statearr_17276_17295[1] = 8);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_17269 === 4))
{var inst_17266 = (state_17268[2]);var state_17268__$1 = state_17268;return cljs.core.async.impl.ioc_helpers.return_chan(state_17268__$1,inst_17266);
} else
{if((state_val_17269 === 3))
{var state_17268__$1 = state_17268;var statearr_17277_17296 = state_17268__$1;(statearr_17277_17296[2] = null);
(statearr_17277_17296[1] = 4);
return cljs.core.constant$keyword$51;
} else
{if((state_val_17269 === 2))
{var inst_17242 = localStorage.length;var inst_17243 = (inst_17242 - 1);var inst_17244 = inst_17243;var state_17268__$1 = (function (){var statearr_17278 = state_17268;(statearr_17278[7] = inst_17244);
return statearr_17278;
})();var statearr_17279_17297 = state_17268__$1;(statearr_17279_17297[2] = null);
(statearr_17279_17297[1] = 5);
return cljs.core.constant$keyword$51;
} else
{if((state_val_17269 === 1))
{var inst_17240 = window.hasstorage;var state_17268__$1 = state_17268;if(cljs.core.truth_(inst_17240))
{var statearr_17280_17298 = state_17268__$1;(statearr_17280_17298[1] = 2);
} else
{var statearr_17281_17299 = state_17268__$1;(statearr_17281_17299[1] = 3);
}
return cljs.core.constant$keyword$51;
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
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_17285 = (new Array(9));(statearr_17285[0] = state_machine__6724__auto__);
(statearr_17285[1] = 1);
return statearr_17285;
});
var state_machine__6724__auto____1 = (function (state_17268){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_17268);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$51))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e17286){if((e17286 instanceof Object))
{var ex__6727__auto__ = e17286;var statearr_17287_17300 = state_17268;(statearr_17287_17300[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17268);
return cljs.core.constant$keyword$51;
} else
{if(cljs.core.constant$keyword$6)
{throw e17286;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$51))
{{
var G__17301 = state_17268;
state_17268 = G__17301;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_17268){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_17268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_17288 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_17288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto___17289);
return statearr_17288;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
