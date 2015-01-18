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
modern_cljs.model.getLatestLinks(modern_cljs.gbc.gameid,(function (p1__33401_SHARP_){modern_cljs.gbc.appendObjects(p1__33401_SHARP_);
return modern_cljs.gbc.loadingStop();
}));
return modern_cljs.gbc.postLogin();
});
goog.exportSymbol('modern_cljs.gbc.morelinks', modern_cljs.gbc.morelinks);
modern_cljs.gbc.friendsFromBonuses = (function friendsFromBonuses(bonuses){return cljs.core.clj__GT_js(cljs.core.distinct(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__33402_SHARP_,p2__33403_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__33402_SHARP_,(p2__33403_SHARP_["actor_id"]));
}),cljs.core.PersistentVector.EMPTY,bonuses)));
});
modern_cljs.gbc.requestToFriends = (function requestToFriends(friends){return FB.ui((function (){var obj33407 = {"method":"apprequests","message":[cljs.core.str("I just collected some "),cljs.core.str(modern_cljs.gbc.gamename),cljs.core.str(" bonuses!")].join(''),"to":friends};return obj33407;
})(),(function (){return cljs.core.List.EMPTY;
}));
});
modern_cljs.gbc.noRecentlyCollectedBonuses = (function noRecentlyCollectedBonuses(){return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#collectedalready"], null),cljs.core.array_seq([enfocus.core.append.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["You haven't collected any bonuses recently (or cookies aren't configured)!\n                                    <a title= \"If you are experiencing problems with this section, \n                                                most often this is due to third party cookies being disabled\"\n                                    onclick=\"alert('If you are experiencing problems with this section, most often this is due to third party cookies being disabled.');\">Help</a>"], 0))], 0));
});
modern_cljs.gbc.splitQueryResult = (function splitQueryResult(queryResult){var c__5967__auto___33443 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_33433){var state_val_33434 = (state_33433[1]);if((state_val_33434 === 1))
{var inst_33426 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(queryResult);var inst_33427 = cljs.core.take(1,inst_33426);var inst_33428 = modern_cljs.model.insertBonuses(inst_33427);var inst_33429 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(queryResult);var inst_33430 = cljs.core.take(1,inst_33429);var inst_33431 = modern_cljs.model.addClickxBonus(inst_33430);var state_33433__$1 = (function (){var statearr_33435 = state_33433;(statearr_33435[7] = inst_33428);
return statearr_33435;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_33433__$1,inst_33431);
} else
{return null;
}
});return ((function (switch__5897__auto__){
return (function() {
var state_machine__5898__auto__ = null;
var state_machine__5898__auto____0 = (function (){var statearr_33439 = (new Array(8));(statearr_33439[0] = state_machine__5898__auto__);
(statearr_33439[1] = 1);
return statearr_33439;
});
var state_machine__5898__auto____1 = (function (state_33433){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_33433);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$171))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e33440){if((e33440 instanceof Object))
{var ex__5901__auto__ = e33440;var statearr_33441_33444 = state_33433;(statearr_33441_33444[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33433);
return cljs.core.constant$keyword$171;
} else
{if(cljs.core.constant$keyword$126)
{throw e33440;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$171))
{{
var G__33445 = state_33433;
state_33433 = G__33445;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_33433){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_33433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_33442 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_33442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto___33443);
return statearr_33442;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5969__auto__);
}));
if(cljs.core.truth_(window.hasstorage))
{return cljs.core.group_by((function (p1__33408_SHARP_){return (localStorage.getItem((p1__33408_SHARP_["post_id"])) > 0);
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
modern_cljs.gbc.getBonuses = (function getBonuses(){var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__5967__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_33544){var state_val_33545 = (state_33544[1]);if((state_val_33545 === 1))
{var inst_33508 = modern_cljs.gbc.getRawBonuses(c);var state_33544__$1 = (function (){var statearr_33546 = state_33544;(statearr_33546[7] = inst_33508);
return statearr_33546;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33544__$1,2,c);
} else
{if((state_val_33545 === 2))
{var inst_33510 = (state_33544[2]);var inst_33511 = modern_cljs.gbc.splitQueryResult(inst_33510);var inst_33512 = modern_cljs.gbc.loadingStop();var state_33544__$1 = (function (){var statearr_33547 = state_33544;(statearr_33547[8] = inst_33511);
(statearr_33547[9] = inst_33512);
return statearr_33547;
})();if(cljs.core.truth_(modern_cljs.gbc.inFacebook))
{var statearr_33548_33570 = state_33544__$1;(statearr_33548_33570[1] = 3);
} else
{var statearr_33549_33571 = state_33544__$1;(statearr_33549_33571[1] = 4);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_33545 === 3))
{var inst_33511 = (state_33544[8]);var inst_33514 = modern_cljs.gbc.noncookie(inst_33511);var inst_33515 = modern_cljs.gbc.friendsFromBonuses(inst_33514);var inst_33516 = modern_cljs.gbc.requestToFriends(inst_33515);var state_33544__$1 = state_33544;var statearr_33550_33572 = state_33544__$1;(statearr_33550_33572[2] = inst_33516);
(statearr_33550_33572[1] = 5);
return cljs.core.constant$keyword$171;
} else
{if((state_val_33545 === 4))
{var state_33544__$1 = state_33544;var statearr_33551_33573 = state_33544__$1;(statearr_33551_33573[2] = null);
(statearr_33551_33573[1] = 5);
return cljs.core.constant$keyword$171;
} else
{if((state_val_33545 === 5))
{var inst_33511 = (state_33544[8]);var inst_33519 = (state_33544[2]);var inst_33520 = modern_cljs.gbc.noncookie(inst_33511);var inst_33521 = cljs.core.empty_QMARK_(inst_33520);var state_33544__$1 = (function (){var statearr_33552 = state_33544;(statearr_33552[10] = inst_33519);
return statearr_33552;
})();if(inst_33521)
{var statearr_33553_33574 = state_33544__$1;(statearr_33553_33574[1] = 6);
} else
{var statearr_33554_33575 = state_33544__$1;(statearr_33554_33575[1] = 7);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_33545 === 6))
{var inst_33523 = modern_cljs.gbc.morelinks();var inst_33524 = modern_cljs.gbc.noBonusAlert();var state_33544__$1 = (function (){var statearr_33555 = state_33544;(statearr_33555[11] = inst_33523);
return statearr_33555;
})();var statearr_33556_33576 = state_33544__$1;(statearr_33556_33576[2] = inst_33524);
(statearr_33556_33576[1] = 8);
return cljs.core.constant$keyword$171;
} else
{if((state_val_33545 === 7))
{var inst_33511 = (state_33544[8]);var inst_33526 = modern_cljs.gbc.noncookie(inst_33511);var inst_33527 = cljs.core.clj__GT_js(inst_33526);var inst_33528 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(modern_cljs.views.bonuspolaroid,"",inst_33527);var inst_33529 = modern_cljs.gbc.appendObjects(inst_33528);var state_33544__$1 = state_33544;var statearr_33557_33577 = state_33544__$1;(statearr_33557_33577[2] = inst_33529);
(statearr_33557_33577[1] = 8);
return cljs.core.constant$keyword$171;
} else
{if((state_val_33545 === 8))
{var inst_33511 = (state_33544[8]);var inst_33531 = (state_33544[2]);var inst_33532 = modern_cljs.gbc.cookie(inst_33511);var inst_33533 = cljs.core.empty_QMARK_(inst_33532);var state_33544__$1 = (function (){var statearr_33558 = state_33544;(statearr_33558[12] = inst_33531);
return statearr_33558;
})();if(inst_33533)
{var statearr_33559_33578 = state_33544__$1;(statearr_33559_33578[1] = 9);
} else
{var statearr_33560_33579 = state_33544__$1;(statearr_33560_33579[1] = 10);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_33545 === 9))
{var inst_33535 = modern_cljs.gbc.noRecentlyCollectedBonuses();var state_33544__$1 = state_33544;var statearr_33561_33580 = state_33544__$1;(statearr_33561_33580[2] = inst_33535);
(statearr_33561_33580[1] = 11);
return cljs.core.constant$keyword$171;
} else
{if((state_val_33545 === 10))
{var inst_33511 = (state_33544[8]);var inst_33537 = modern_cljs.gbc.cookie(inst_33511);var inst_33538 = cljs.core.clj__GT_js(inst_33537);var inst_33539 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(modern_cljs.views.bonuspolaroid,"",inst_33538);var inst_33540 = modern_cljs.gbc.appendInteractedAlready(inst_33539);var state_33544__$1 = state_33544;var statearr_33562_33581 = state_33544__$1;(statearr_33562_33581[2] = inst_33540);
(statearr_33562_33581[1] = 11);
return cljs.core.constant$keyword$171;
} else
{if((state_val_33545 === 11))
{var inst_33542 = (state_33544[2]);var state_33544__$1 = state_33544;return cljs.core.async.impl.ioc_helpers.return_chan(state_33544__$1,inst_33542);
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
});return ((function (switch__5897__auto__){
return (function() {
var state_machine__5898__auto__ = null;
var state_machine__5898__auto____0 = (function (){var statearr_33566 = (new Array(13));(statearr_33566[0] = state_machine__5898__auto__);
(statearr_33566[1] = 1);
return statearr_33566;
});
var state_machine__5898__auto____1 = (function (state_33544){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_33544);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$171))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e33567){if((e33567 instanceof Object))
{var ex__5901__auto__ = e33567;var statearr_33568_33582 = state_33544;(statearr_33568_33582[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33544);
return cljs.core.constant$keyword$171;
} else
{if(cljs.core.constant$keyword$126)
{throw e33567;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$171))
{{
var G__33583 = state_33544;
state_33544 = G__33583;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_33544){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_33544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_33569 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_33569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto__);
return statearr_33569;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5969__auto__);
}));
return c__5967__auto__;
});
goog.exportSymbol('modern_cljs.gbc.getBonuses', modern_cljs.gbc.getBonuses);
modern_cljs.gbc.bonuslistener = (function bonuslistener(bonus,postid){enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(bonus)].join('')], null),cljs.core.array_seq([enfocus.core.set_attr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$237,"border: 5px solid #05BE0C;"], 0))], 0));
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
return FB.login((function (p1__33584_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(initchan,p1__33584_SHARP_.status);
}),(function (){var obj33588 = {"scope":"read_stream, publish_actions, email"};return obj33588;
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
modern_cljs.gbc.suggestions = (function suggestions(gbcids){var c__5967__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_33853){var state_val_33854 = (state_33853[1]);if((state_val_33854 === 1))
{var inst_33749 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var inst_33758 = cljs.core.seq(gbcids);var inst_33759 = inst_33758;var inst_33760 = null;var inst_33761 = 0;var inst_33762 = 0;var state_33853__$1 = (function (){var statearr_33855 = state_33853;(statearr_33855[7] = inst_33762);
(statearr_33855[8] = inst_33761);
(statearr_33855[9] = inst_33760);
(statearr_33855[10] = inst_33749);
(statearr_33855[11] = inst_33759);
return statearr_33855;
})();var statearr_33856_33909 = state_33853__$1;(statearr_33856_33909[2] = null);
(statearr_33856_33909[1] = 2);
return cljs.core.constant$keyword$171;
} else
{if((state_val_33854 === 2))
{var inst_33762 = (state_33853[7]);var inst_33761 = (state_33853[8]);var inst_33764 = (inst_33762 < inst_33761);var inst_33765 = inst_33764;var state_33853__$1 = state_33853;if(cljs.core.truth_(inst_33765))
{var statearr_33857_33910 = state_33853__$1;(statearr_33857_33910[1] = 4);
} else
{var statearr_33858_33911 = state_33853__$1;(statearr_33858_33911[1] = 5);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_33854 === 3))
{var inst_33851 = (state_33853[2]);var state_33853__$1 = state_33853;return cljs.core.async.impl.ioc_helpers.return_chan(state_33853__$1,inst_33851);
} else
{if((state_val_33854 === 4))
{var inst_33762 = (state_33853[7]);var inst_33760 = (state_33853[9]);var inst_33749 = (state_33853[10]);var inst_33767 = (state_33853[12]);var inst_33767__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33760,inst_33762);var inst_33768 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33767__$1,cljs.core.constant$keyword$238);var inst_33769 = modern_cljs.gbc.queryGameid(inst_33749,inst_33768);var state_33853__$1 = (function (){var statearr_33859 = state_33853;(statearr_33859[13] = inst_33769);
(statearr_33859[12] = inst_33767__$1);
return statearr_33859;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33853__$1,7,inst_33749);
} else
{if((state_val_33854 === 5))
{var inst_33801 = (state_33853[14]);var inst_33759 = (state_33853[11]);var inst_33801__$1 = cljs.core.seq(inst_33759);var state_33853__$1 = (function (){var statearr_33860 = state_33853;(statearr_33860[14] = inst_33801__$1);
return statearr_33860;
})();if(inst_33801__$1)
{var statearr_33861_33912 = state_33853__$1;(statearr_33861_33912[1] = 15);
} else
{var statearr_33862_33913 = state_33853__$1;(statearr_33862_33913[1] = 16);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_33854 === 6))
{var inst_33849 = (state_33853[2]);var state_33853__$1 = state_33853;var statearr_33863_33914 = state_33853__$1;(statearr_33863_33914[2] = inst_33849);
(statearr_33863_33914[1] = 3);
return cljs.core.constant$keyword$171;
} else
{if((state_val_33854 === 7))
{var inst_33774 = (state_33853[15]);var inst_33772 = (state_33853[16]);var inst_33771 = (state_33853[2]);var inst_33772__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_33771);var inst_33773 = cljs.core.first(inst_33772__$1);var inst_33774__$1 = cljs.core.not_empty(inst_33773);var state_33853__$1 = (function (){var statearr_33864 = state_33853;(statearr_33864[15] = inst_33774__$1);
(statearr_33864[16] = inst_33772__$1);
return statearr_33864;
})();if(cljs.core.truth_(inst_33774__$1))
{var statearr_33865_33915 = state_33853__$1;(statearr_33865_33915[1] = 8);
} else
{var statearr_33866_33916 = state_33853__$1;(statearr_33866_33916[1] = 9);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_33854 === 8))
{var inst_33772 = (state_33853[16]);var inst_33767 = (state_33853[12]);var inst_33776 = cljs.core.first(inst_33772);var inst_33777 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33776,"app_id");var inst_33778 = [cljs.core.str(inst_33777)].join('');var inst_33779 = (inst_33767.cljs$core$IFn$_invoke$arity$1 ? inst_33767.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$238) : inst_33767.call(null,cljs.core.constant$keyword$238));var inst_33780 = [cljs.core.str(inst_33779)].join('');var inst_33781 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33778,inst_33780);var state_33853__$1 = state_33853;var statearr_33867_33917 = state_33853__$1;(statearr_33867_33917[2] = inst_33781);
(statearr_33867_33917[1] = 10);
return cljs.core.constant$keyword$171;
} else
{if((state_val_33854 === 9))
{var inst_33774 = (state_33853[15]);var state_33853__$1 = state_33853;var statearr_33868_33918 = state_33853__$1;(statearr_33868_33918[2] = inst_33774);
(statearr_33868_33918[1] = 10);
return cljs.core.constant$keyword$171;
} else
{if((state_val_33854 === 10))
{var inst_33784 = (state_33853[2]);var state_33853__$1 = state_33853;if(cljs.core.truth_(inst_33784))
{var statearr_33872_33919 = state_33853__$1;(statearr_33872_33919[1] = 11);
} else
{var statearr_33873_33920 = state_33853__$1;(statearr_33873_33920[1] = 12);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_33854 === 11))
{var inst_33786 = modern_cljs.gbc.timeout(2000);var state_33853__$1 = state_33853;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33853__$1,14,inst_33786);
} else
{if((state_val_33854 === 12))
{var inst_33762 = (state_33853[7]);var inst_33761 = (state_33853[8]);var inst_33760 = (state_33853[9]);var inst_33759 = (state_33853[11]);var inst_33796 = (inst_33762 + 1);var tmp33869 = inst_33761;var tmp33870 = inst_33760;var tmp33871 = inst_33759;var inst_33759__$1 = tmp33871;var inst_33760__$1 = tmp33870;var inst_33761__$1 = tmp33869;var inst_33762__$1 = inst_33796;var state_33853__$1 = (function (){var statearr_33877 = state_33853;(statearr_33877[7] = inst_33762__$1);
(statearr_33877[8] = inst_33761__$1);
(statearr_33877[9] = inst_33760__$1);
(statearr_33877[11] = inst_33759__$1);
return statearr_33877;
})();var statearr_33878_33921 = state_33853__$1;(statearr_33878_33921[2] = null);
(statearr_33878_33921[1] = 2);
return cljs.core.constant$keyword$171;
} else
{if((state_val_33854 === 13))
{var inst_33799 = (state_33853[2]);var state_33853__$1 = state_33853;var statearr_33879_33922 = state_33853__$1;(statearr_33879_33922[2] = inst_33799);
(statearr_33879_33922[1] = 6);
return cljs.core.constant$keyword$171;
} else
{if((state_val_33854 === 14))
{var inst_33762 = (state_33853[7]);var inst_33761 = (state_33853[8]);var inst_33760 = (state_33853[9]);var inst_33759 = (state_33853[11]);var inst_33772 = (state_33853[16]);var inst_33767 = (state_33853[12]);var inst_33788 = (state_33853[2]);var inst_33789 = cljs.core.take(1,inst_33772);var inst_33790 = modern_cljs.model.insertBonuses(inst_33789);var inst_33791 = cljs.core.take(2,inst_33767);var inst_33792 = modern_cljs.gbc.addToSuggested(inst_33791);var inst_33793 = (inst_33762 + 1);var tmp33874 = inst_33761;var tmp33875 = inst_33760;var tmp33876 = inst_33759;var inst_33759__$1 = tmp33876;var inst_33760__$1 = tmp33875;var inst_33761__$1 = tmp33874;var inst_33762__$1 = inst_33793;var state_33853__$1 = (function (){var statearr_33880 = state_33853;(statearr_33880[17] = inst_33792);
(statearr_33880[18] = inst_33790);
(statearr_33880[7] = inst_33762__$1);
(statearr_33880[8] = inst_33761__$1);
(statearr_33880[9] = inst_33760__$1);
(statearr_33880[19] = inst_33788);
(statearr_33880[11] = inst_33759__$1);
return statearr_33880;
})();var statearr_33881_33923 = state_33853__$1;(statearr_33881_33923[2] = null);
(statearr_33881_33923[1] = 2);
return cljs.core.constant$keyword$171;
} else
{if((state_val_33854 === 15))
{var inst_33801 = (state_33853[14]);var inst_33803 = cljs.core.chunked_seq_QMARK_(inst_33801);var state_33853__$1 = state_33853;if(inst_33803)
{var statearr_33882_33924 = state_33853__$1;(statearr_33882_33924[1] = 18);
} else
{var statearr_33883_33925 = state_33853__$1;(statearr_33883_33925[1] = 19);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_33854 === 16))
{var state_33853__$1 = state_33853;var statearr_33884_33926 = state_33853__$1;(statearr_33884_33926[2] = null);
(statearr_33884_33926[1] = 17);
return cljs.core.constant$keyword$171;
} else
{if((state_val_33854 === 17))
{var inst_33847 = (state_33853[2]);var state_33853__$1 = state_33853;var statearr_33885_33927 = state_33853__$1;(statearr_33885_33927[2] = inst_33847);
(statearr_33885_33927[1] = 6);
return cljs.core.constant$keyword$171;
} else
{if((state_val_33854 === 18))
{var inst_33801 = (state_33853[14]);var inst_33805 = cljs.core.chunk_first(inst_33801);var inst_33806 = cljs.core.chunk_rest(inst_33801);var inst_33807 = cljs.core.count(inst_33805);var inst_33759 = inst_33806;var inst_33760 = inst_33805;var inst_33761 = inst_33807;var inst_33762 = 0;var state_33853__$1 = (function (){var statearr_33886 = state_33853;(statearr_33886[7] = inst_33762);
(statearr_33886[8] = inst_33761);
(statearr_33886[9] = inst_33760);
(statearr_33886[11] = inst_33759);
return statearr_33886;
})();var statearr_33887_33928 = state_33853__$1;(statearr_33887_33928[2] = null);
(statearr_33887_33928[1] = 2);
return cljs.core.constant$keyword$171;
} else
{if((state_val_33854 === 19))
{var inst_33801 = (state_33853[14]);var inst_33749 = (state_33853[10]);var inst_33810 = (state_33853[20]);var inst_33810__$1 = cljs.core.first(inst_33801);var inst_33811 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33810__$1,cljs.core.constant$keyword$238);var inst_33812 = modern_cljs.gbc.queryGameid(inst_33749,inst_33811);var state_33853__$1 = (function (){var statearr_33888 = state_33853;(statearr_33888[21] = inst_33812);
(statearr_33888[20] = inst_33810__$1);
return statearr_33888;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33853__$1,21,inst_33749);
} else
{if((state_val_33854 === 20))
{var inst_33844 = (state_33853[2]);var state_33853__$1 = state_33853;var statearr_33889_33929 = state_33853__$1;(statearr_33889_33929[2] = inst_33844);
(statearr_33889_33929[1] = 17);
return cljs.core.constant$keyword$171;
} else
{if((state_val_33854 === 21))
{var inst_33815 = (state_33853[22]);var inst_33817 = (state_33853[23]);var inst_33814 = (state_33853[2]);var inst_33815__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_33814);var inst_33816 = cljs.core.first(inst_33815__$1);var inst_33817__$1 = cljs.core.not_empty(inst_33816);var state_33853__$1 = (function (){var statearr_33890 = state_33853;(statearr_33890[22] = inst_33815__$1);
(statearr_33890[23] = inst_33817__$1);
return statearr_33890;
})();if(cljs.core.truth_(inst_33817__$1))
{var statearr_33891_33930 = state_33853__$1;(statearr_33891_33930[1] = 22);
} else
{var statearr_33892_33931 = state_33853__$1;(statearr_33892_33931[1] = 23);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_33854 === 22))
{var inst_33815 = (state_33853[22]);var inst_33810 = (state_33853[20]);var inst_33819 = cljs.core.first(inst_33815);var inst_33820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33819,"app_id");var inst_33821 = [cljs.core.str(inst_33820)].join('');var inst_33822 = (inst_33810.cljs$core$IFn$_invoke$arity$1 ? inst_33810.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$238) : inst_33810.call(null,cljs.core.constant$keyword$238));var inst_33823 = [cljs.core.str(inst_33822)].join('');var inst_33824 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33821,inst_33823);var state_33853__$1 = state_33853;var statearr_33893_33932 = state_33853__$1;(statearr_33893_33932[2] = inst_33824);
(statearr_33893_33932[1] = 24);
return cljs.core.constant$keyword$171;
} else
{if((state_val_33854 === 23))
{var inst_33817 = (state_33853[23]);var state_33853__$1 = state_33853;var statearr_33894_33933 = state_33853__$1;(statearr_33894_33933[2] = inst_33817);
(statearr_33894_33933[1] = 24);
return cljs.core.constant$keyword$171;
} else
{if((state_val_33854 === 24))
{var inst_33827 = (state_33853[2]);var state_33853__$1 = state_33853;if(cljs.core.truth_(inst_33827))
{var statearr_33895_33934 = state_33853__$1;(statearr_33895_33934[1] = 25);
} else
{var statearr_33896_33935 = state_33853__$1;(statearr_33896_33935[1] = 26);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_33854 === 25))
{var inst_33829 = modern_cljs.gbc.timeout(2000);var state_33853__$1 = state_33853;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33853__$1,28,inst_33829);
} else
{if((state_val_33854 === 26))
{var inst_33801 = (state_33853[14]);var inst_33839 = cljs.core.next(inst_33801);var inst_33759 = inst_33839;var inst_33760 = null;var inst_33761 = 0;var inst_33762 = 0;var state_33853__$1 = (function (){var statearr_33897 = state_33853;(statearr_33897[7] = inst_33762);
(statearr_33897[8] = inst_33761);
(statearr_33897[9] = inst_33760);
(statearr_33897[11] = inst_33759);
return statearr_33897;
})();var statearr_33898_33936 = state_33853__$1;(statearr_33898_33936[2] = null);
(statearr_33898_33936[1] = 2);
return cljs.core.constant$keyword$171;
} else
{if((state_val_33854 === 27))
{var inst_33842 = (state_33853[2]);var state_33853__$1 = state_33853;var statearr_33899_33937 = state_33853__$1;(statearr_33899_33937[2] = inst_33842);
(statearr_33899_33937[1] = 20);
return cljs.core.constant$keyword$171;
} else
{if((state_val_33854 === 28))
{var inst_33801 = (state_33853[14]);var inst_33815 = (state_33853[22]);var inst_33810 = (state_33853[20]);var inst_33831 = (state_33853[2]);var inst_33832 = cljs.core.take(1,inst_33815);var inst_33833 = modern_cljs.model.insertBonuses(inst_33832);var inst_33834 = cljs.core.take(2,inst_33810);var inst_33835 = modern_cljs.gbc.addToSuggested(inst_33834);var inst_33836 = cljs.core.next(inst_33801);var inst_33759 = inst_33836;var inst_33760 = null;var inst_33761 = 0;var inst_33762 = 0;var state_33853__$1 = (function (){var statearr_33900 = state_33853;(statearr_33900[24] = inst_33831);
(statearr_33900[7] = inst_33762);
(statearr_33900[8] = inst_33761);
(statearr_33900[9] = inst_33760);
(statearr_33900[25] = inst_33833);
(statearr_33900[26] = inst_33835);
(statearr_33900[11] = inst_33759);
return statearr_33900;
})();var statearr_33901_33938 = state_33853__$1;(statearr_33901_33938[2] = null);
(statearr_33901_33938[1] = 2);
return cljs.core.constant$keyword$171;
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
});return ((function (switch__5897__auto__){
return (function() {
var state_machine__5898__auto__ = null;
var state_machine__5898__auto____0 = (function (){var statearr_33905 = (new Array(27));(statearr_33905[0] = state_machine__5898__auto__);
(statearr_33905[1] = 1);
return statearr_33905;
});
var state_machine__5898__auto____1 = (function (state_33853){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_33853);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$171))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e33906){if((e33906 instanceof Object))
{var ex__5901__auto__ = e33906;var statearr_33907_33939 = state_33853;(statearr_33907_33939[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33853);
return cljs.core.constant$keyword$171;
} else
{if(cljs.core.constant$keyword$126)
{throw e33906;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$171))
{{
var G__33940 = state_33853;
state_33853 = G__33940;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_33853){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_33853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_33908 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_33908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto__);
return statearr_33908;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5969__auto__);
}));
return c__5967__auto__;
});
modern_cljs.gbc.getAppData = (function getAppData(appid){var queryChan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__5967__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_33979){var state_val_33980 = (state_33979[1]);if((state_val_33980 === 3))
{var inst_33973 = (state_33979[2]);var inst_33974 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_33973);var inst_33975 = cljs.core.first(inst_33974);var inst_33976 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_33975,cljs.core.constant$keyword$239,appid);var inst_33977 = modern_cljs.model.insertNewApplication(inst_33976);var state_33979__$1 = state_33979;return cljs.core.async.impl.ioc_helpers.return_chan(state_33979__$1,inst_33977);
} else
{if((state_val_33980 === 2))
{var inst_33969 = (state_33979[2]);var inst_33970 = modern_cljs.model.appInfoQuery(appid);var inst_33971 = modern_cljs.model.fqlquerytemplate(queryChan,inst_33970);var state_33979__$1 = (function (){var statearr_33981 = state_33979;(statearr_33981[7] = inst_33969);
(statearr_33981[8] = inst_33971);
return statearr_33981;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33979__$1,3,queryChan);
} else
{if((state_val_33980 === 1))
{var inst_33965 = cljs.core.rand_int(20);var inst_33966 = (inst_33965 * 1000);var inst_33967 = modern_cljs.gbc.timeout(inst_33966);var state_33979__$1 = state_33979;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33979__$1,2,inst_33967);
} else
{return null;
}
}
}
});return ((function (switch__5897__auto__){
return (function() {
var state_machine__5898__auto__ = null;
var state_machine__5898__auto____0 = (function (){var statearr_33985 = (new Array(9));(statearr_33985[0] = state_machine__5898__auto__);
(statearr_33985[1] = 1);
return statearr_33985;
});
var state_machine__5898__auto____1 = (function (state_33979){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_33979);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$171))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e33986){if((e33986 instanceof Object))
{var ex__5901__auto__ = e33986;var statearr_33987_33989 = state_33979;(statearr_33987_33989[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33979);
return cljs.core.constant$keyword$171;
} else
{if(cljs.core.constant$keyword$126)
{throw e33986;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$171))
{{
var G__33990 = state_33979;
state_33979 = G__33990;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_33979){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_33979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_33988 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_33988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto__);
return statearr_33988;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5969__auto__);
}));
return c__5967__auto__;
});
modern_cljs.gbc.getNewAppIds = (function getNewAppIds(appIds){var currentIdChan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__5967__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_34032){var state_val_34033 = (state_34032[1]);if((state_val_34033 === 2))
{var inst_34022 = (state_34032[7]);var inst_34023 = (state_34032[8]);var inst_34019 = (state_34032[9]);var inst_34025 = (state_34032[2]);var inst_34026 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_34023,inst_34025);var inst_34027 = cljs.core.set(inst_34026);var inst_34028 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_34022,inst_34027);var inst_34029 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_34019,inst_34028);var inst_34030 = cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(inst_34029);var state_34032__$1 = state_34032;return cljs.core.async.impl.ioc_helpers.return_chan(state_34032__$1,inst_34030);
} else
{if((state_val_34033 === 1))
{var inst_34018 = modern_cljs.model.getApplicationIds(currentIdChan);var inst_34019 = (function (){return ((function (inst_34018,state_val_34033){
return (function (p1__33991_SHARP_){return modern_cljs.gbc.getAppData(p1__33991_SHARP_);
});
;})(inst_34018,state_val_34033))
})();var inst_34020 = (function (){return ((function (inst_34018,inst_34019,state_val_34033){
return (function (p1__33992_SHARP_){return cljs.reader.read_string(p1__33992_SHARP_);
});
;})(inst_34018,inst_34019,state_val_34033))
})();var inst_34021 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_34020,appIds);var inst_34022 = cljs.core.set(inst_34021);var inst_34023 = (function (){return ((function (inst_34018,inst_34019,inst_34020,inst_34021,inst_34022,state_val_34033){
return (function (p1__33993_SHARP_){return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__33993_SHARP_,cljs.core.constant$keyword$239);
});
;})(inst_34018,inst_34019,inst_34020,inst_34021,inst_34022,state_val_34033))
})();var state_34032__$1 = (function (){var statearr_34034 = state_34032;(statearr_34034[7] = inst_34022);
(statearr_34034[8] = inst_34023);
(statearr_34034[10] = inst_34018);
(statearr_34034[9] = inst_34019);
return statearr_34034;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34032__$1,2,currentIdChan);
} else
{return null;
}
}
});return ((function (switch__5897__auto__){
return (function() {
var state_machine__5898__auto__ = null;
var state_machine__5898__auto____0 = (function (){var statearr_34038 = (new Array(11));(statearr_34038[0] = state_machine__5898__auto__);
(statearr_34038[1] = 1);
return statearr_34038;
});
var state_machine__5898__auto____1 = (function (state_34032){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_34032);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$171))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e34039){if((e34039 instanceof Object))
{var ex__5901__auto__ = e34039;var statearr_34040_34042 = state_34032;(statearr_34040_34042[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34032);
return cljs.core.constant$keyword$171;
} else
{if(cljs.core.constant$keyword$126)
{throw e34039;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$171))
{{
var G__34043 = state_34032;
state_34032 = G__34043;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_34032){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_34032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_34041 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_34041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto__);
return statearr_34041;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5969__auto__);
}));
return c__5967__auto__;
});
modern_cljs.gbc.filterAppIds = (function filterAppIds(graphResult){var c__5967__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_34067){var state_val_34068 = (state_34067[1]);if((state_val_34068 === 1))
{var inst_34061 = (function (){return ((function (state_val_34068){
return (function (p1__34044_SHARP_){return (p1__34044_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34044_SHARP_.cljs$core$IFn$_invoke$arity$1("application") : p1__34044_SHARP_.call(null,"application")).call(null,"id");
});
;})(state_val_34068))
})();var inst_34062 = (function (){return ((function (inst_34061,state_val_34068){
return (function (p1__34045_SHARP_){return cljs.core.complement(cljs.core.nil_QMARK_).call(null,(p1__34045_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34045_SHARP_.cljs$core$IFn$_invoke$arity$1("application") : p1__34045_SHARP_.call(null,"application")));
});
;})(inst_34061,state_val_34068))
})();var inst_34063 = cljs.core.filter(inst_34062,graphResult);var inst_34064 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_34061,inst_34063);var inst_34065 = modern_cljs.gbc.getNewAppIds(inst_34064);var state_34067__$1 = state_34067;return cljs.core.async.impl.ioc_helpers.return_chan(state_34067__$1,inst_34065);
} else
{return null;
}
});return ((function (switch__5897__auto__){
return (function() {
var state_machine__5898__auto__ = null;
var state_machine__5898__auto____0 = (function (){var statearr_34072 = (new Array(7));(statearr_34072[0] = state_machine__5898__auto__);
(statearr_34072[1] = 1);
return statearr_34072;
});
var state_machine__5898__auto____1 = (function (state_34067){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_34067);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$171))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e34073){if((e34073 instanceof Object))
{var ex__5901__auto__ = e34073;var statearr_34074_34076 = state_34067;(statearr_34074_34076[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34067);
return cljs.core.constant$keyword$171;
} else
{if(cljs.core.constant$keyword$126)
{throw e34073;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$171))
{{
var G__34077 = state_34067;
state_34067 = G__34077;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_34067){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_34067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_34075 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_34075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto__);
return statearr_34075;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5969__auto__);
}));
return c__5967__auto__;
});
modern_cljs.gbc.appResearch = (function appResearch(){var c__5967__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_34104){var state_val_34105 = (state_34104[1]);if((state_val_34105 === 2))
{var inst_34099 = (state_34104[2]);var inst_34100 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_34099);var inst_34101 = (inst_34100.cljs$core$IFn$_invoke$arity$1 ? inst_34100.cljs$core$IFn$_invoke$arity$1("data") : inst_34100.call(null,"data"));var inst_34102 = modern_cljs.gbc.filterAppIds(inst_34101);var state_34104__$1 = state_34104;return cljs.core.async.impl.ioc_helpers.return_chan(state_34104__$1,inst_34102);
} else
{if((state_val_34105 === 1))
{var inst_34096 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var inst_34097 = modern_cljs.model.graphQuery(inst_34096,"/v2.1/me/home?fields=application");var state_34104__$1 = (function (){var statearr_34106 = state_34104;(statearr_34106[7] = inst_34097);
return statearr_34106;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34104__$1,2,inst_34096);
} else
{return null;
}
}
});return ((function (switch__5897__auto__){
return (function() {
var state_machine__5898__auto__ = null;
var state_machine__5898__auto____0 = (function (){var statearr_34110 = (new Array(8));(statearr_34110[0] = state_machine__5898__auto__);
(statearr_34110[1] = 1);
return statearr_34110;
});
var state_machine__5898__auto____1 = (function (state_34104){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_34104);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$171))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e34111){if((e34111 instanceof Object))
{var ex__5901__auto__ = e34111;var statearr_34112_34114 = state_34104;(statearr_34112_34114[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34104);
return cljs.core.constant$keyword$171;
} else
{if(cljs.core.constant$keyword$126)
{throw e34111;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$171))
{{
var G__34115 = state_34104;
state_34104 = G__34115;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_34104){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_34104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_34113 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_34113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto__);
return statearr_34113;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5969__auto__);
}));
return c__5967__auto__;
});
modern_cljs.gbc.getdemfam = (function getdemfam(){var c__5967__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_34141){var state_val_34142 = (state_34141[1]);if((state_val_34142 === 2))
{var inst_34137 = (state_34141[2]);var inst_34138 = modern_cljs.gbc.suggestions(inst_34137);var inst_34139 = modern_cljs.gbc.appResearch();var state_34141__$1 = (function (){var statearr_34143 = state_34141;(statearr_34143[7] = inst_34138);
return statearr_34143;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_34141__$1,inst_34139);
} else
{if((state_val_34142 === 1))
{var inst_34134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var inst_34135 = modern_cljs.model.getGbcIds(inst_34134);var state_34141__$1 = (function (){var statearr_34144 = state_34141;(statearr_34144[8] = inst_34135);
return statearr_34144;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34141__$1,2,inst_34134);
} else
{return null;
}
}
});return ((function (switch__5897__auto__){
return (function() {
var state_machine__5898__auto__ = null;
var state_machine__5898__auto____0 = (function (){var statearr_34148 = (new Array(9));(statearr_34148[0] = state_machine__5898__auto__);
(statearr_34148[1] = 1);
return statearr_34148;
});
var state_machine__5898__auto____1 = (function (state_34141){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_34141);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$171))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e34149){if((e34149 instanceof Object))
{var ex__5901__auto__ = e34149;var statearr_34150_34152 = state_34141;(statearr_34150_34152[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34141);
return cljs.core.constant$keyword$171;
} else
{if(cljs.core.constant$keyword$126)
{throw e34149;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$171))
{{
var G__34153 = state_34141;
state_34141 = G__34153;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_34141){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_34141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_34151 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_34151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto__);
return statearr_34151;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5969__auto__);
}));
return c__5967__auto__;
});
modern_cljs.gbc.facebookInit = (function facebookInit(initchan){initfacebook(modern_cljs.gbc.appid,(function (p1__34154_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(initchan,p1__34154_SHARP_.status);
}),"read_stream, publish_actions, email");
return (function (){return goog.events.listen(goog.dom.getElement("prelogin"),"click",(function (){return modern_cljs.gbc.authenticate(initchan);
}));
}).call(null);
});
modern_cljs.gbc.authStateCheck = (function authStateCheck(initchan){var c__5967__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_34251){var state_val_34252 = (state_34251[1]);if((state_val_34252 === 1))
{var state_34251__$1 = state_34251;var statearr_34253_34281 = state_34251__$1;(statearr_34253_34281[2] = null);
(statearr_34253_34281[1] = 2);
return cljs.core.constant$keyword$171;
} else
{if((state_val_34252 === 2))
{var state_34251__$1 = state_34251;if(true)
{var statearr_34254_34282 = state_34251__$1;(statearr_34254_34282[1] = 4);
} else
{var statearr_34255_34283 = state_34251__$1;(statearr_34255_34283[1] = 5);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_34252 === 3))
{var inst_34249 = (state_34251[2]);var state_34251__$1 = state_34251;return cljs.core.async.impl.ioc_helpers.return_chan(state_34251__$1,inst_34249);
} else
{if((state_val_34252 === 4))
{var state_34251__$1 = state_34251;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34251__$1,7,initchan);
} else
{if((state_val_34252 === 5))
{var state_34251__$1 = state_34251;var statearr_34256_34284 = state_34251__$1;(statearr_34256_34284[2] = null);
(statearr_34256_34284[1] = 6);
return cljs.core.constant$keyword$171;
} else
{if((state_val_34252 === 6))
{var inst_34247 = (state_34251[2]);var state_34251__$1 = state_34251;var statearr_34257_34285 = state_34251__$1;(statearr_34257_34285[2] = inst_34247);
(statearr_34257_34285[1] = 3);
return cljs.core.constant$keyword$171;
} else
{if((state_val_34252 === 7))
{var inst_34221 = (state_34251[7]);var inst_34221__$1 = (state_34251[2]);var inst_34222 = [cljs.core.str(inst_34221__$1)].join('');var inst_34223 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34222,"connected");var state_34251__$1 = (function (){var statearr_34258 = state_34251;(statearr_34258[7] = inst_34221__$1);
return statearr_34258;
})();if(inst_34223)
{var statearr_34259_34286 = state_34251__$1;(statearr_34259_34286[1] = 8);
} else
{var statearr_34260_34287 = state_34251__$1;(statearr_34260_34287[1] = 9);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_34252 === 8))
{var inst_34225 = modern_cljs.gbc.getBonuses();var inst_34226 = modern_cljs.gbc.postLogin();var inst_34227 = modern_cljs.gbc.loadingStart();var inst_34228 = modern_cljs.gbc.getdemfam();var state_34251__$1 = (function (){var statearr_34261 = state_34251;(statearr_34261[8] = inst_34226);
(statearr_34261[9] = inst_34227);
(statearr_34261[10] = inst_34225);
return statearr_34261;
})();var statearr_34262_34288 = state_34251__$1;(statearr_34262_34288[2] = inst_34228);
(statearr_34262_34288[1] = 10);
return cljs.core.constant$keyword$171;
} else
{if((state_val_34252 === 9))
{var inst_34221 = (state_34251[7]);var inst_34230 = [cljs.core.str(inst_34221)].join('');var inst_34231 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34230,"not_authorized");var state_34251__$1 = state_34251;if(inst_34231)
{var statearr_34263_34289 = state_34251__$1;(statearr_34263_34289[1] = 11);
} else
{var statearr_34264_34290 = state_34251__$1;(statearr_34264_34290[1] = 12);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_34252 === 10))
{var inst_34243 = (state_34251[2]);var state_34251__$1 = (function (){var statearr_34265 = state_34251;(statearr_34265[11] = inst_34243);
return statearr_34265;
})();var statearr_34266_34291 = state_34251__$1;(statearr_34266_34291[2] = null);
(statearr_34266_34291[1] = 2);
return cljs.core.constant$keyword$171;
} else
{if((state_val_34252 === 11))
{var inst_34233 = modern_cljs.gbc.showFacebookConnect();var state_34251__$1 = state_34251;var statearr_34267_34292 = state_34251__$1;(statearr_34267_34292[2] = inst_34233);
(statearr_34267_34292[1] = 13);
return cljs.core.constant$keyword$171;
} else
{if((state_val_34252 === 12))
{var state_34251__$1 = state_34251;if(cljs.core.constant$keyword$126)
{var statearr_34268_34293 = state_34251__$1;(statearr_34268_34293[1] = 14);
} else
{var statearr_34269_34294 = state_34251__$1;(statearr_34269_34294[1] = 15);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_34252 === 13))
{var inst_34241 = (state_34251[2]);var state_34251__$1 = state_34251;var statearr_34270_34295 = state_34251__$1;(statearr_34270_34295[2] = inst_34241);
(statearr_34270_34295[1] = 10);
return cljs.core.constant$keyword$171;
} else
{if((state_val_34252 === 14))
{var inst_34236 = modern_cljs.gbc.showFacebookConnect();var state_34251__$1 = state_34251;var statearr_34271_34296 = state_34251__$1;(statearr_34271_34296[2] = inst_34236);
(statearr_34271_34296[1] = 16);
return cljs.core.constant$keyword$171;
} else
{if((state_val_34252 === 15))
{var state_34251__$1 = state_34251;var statearr_34272_34297 = state_34251__$1;(statearr_34272_34297[2] = null);
(statearr_34272_34297[1] = 16);
return cljs.core.constant$keyword$171;
} else
{if((state_val_34252 === 16))
{var inst_34239 = (state_34251[2]);var state_34251__$1 = state_34251;var statearr_34273_34298 = state_34251__$1;(statearr_34273_34298[2] = inst_34239);
(statearr_34273_34298[1] = 13);
return cljs.core.constant$keyword$171;
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
});return ((function (switch__5897__auto__){
return (function() {
var state_machine__5898__auto__ = null;
var state_machine__5898__auto____0 = (function (){var statearr_34277 = (new Array(12));(statearr_34277[0] = state_machine__5898__auto__);
(statearr_34277[1] = 1);
return statearr_34277;
});
var state_machine__5898__auto____1 = (function (state_34251){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_34251);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$171))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e34278){if((e34278 instanceof Object))
{var ex__5901__auto__ = e34278;var statearr_34279_34299 = state_34251;(statearr_34279_34299[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34251);
return cljs.core.constant$keyword$171;
} else
{if(cljs.core.constant$keyword$126)
{throw e34278;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$171))
{{
var G__34300 = state_34251;
state_34251 = G__34300;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_34251){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_34251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_34280 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_34280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto__);
return statearr_34280;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5969__auto__);
}));
return c__5967__auto__;
});
modern_cljs.gbc.gbcinit = (function gbcinit(){var initchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(5);modern_cljs.gbc.facebookInit(initchan);
return modern_cljs.gbc.authStateCheck(initchan);
});
goog.exportSymbol('modern_cljs.gbc.gbcinit', modern_cljs.gbc.gbcinit);
var c__5967__auto___34350 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_34329){var state_val_34330 = (state_34329[1]);if((state_val_34330 === 9))
{var inst_34322 = (state_34329[2]);var state_34329__$1 = state_34329;var statearr_34331_34351 = state_34329__$1;(statearr_34331_34351[2] = inst_34322);
(statearr_34331_34351[1] = 6);
return cljs.core.constant$keyword$171;
} else
{if((state_val_34330 === 8))
{var state_34329__$1 = state_34329;var statearr_34332_34352 = state_34329__$1;(statearr_34332_34352[2] = null);
(statearr_34332_34352[1] = 9);
return cljs.core.constant$keyword$171;
} else
{if((state_val_34330 === 7))
{var inst_34305 = (state_34329[7]);var inst_34316 = localStorage.key(inst_34305);var inst_34317 = localStorage.removeItem(inst_34316);var inst_34318 = (inst_34305 - 1);var inst_34305__$1 = inst_34318;var state_34329__$1 = (function (){var statearr_34333 = state_34329;(statearr_34333[8] = inst_34317);
(statearr_34333[7] = inst_34305__$1);
return statearr_34333;
})();var statearr_34334_34353 = state_34329__$1;(statearr_34334_34353[2] = null);
(statearr_34334_34353[1] = 5);
return cljs.core.constant$keyword$171;
} else
{if((state_val_34330 === 6))
{var inst_34324 = (state_34329[2]);var state_34329__$1 = state_34329;var statearr_34335_34354 = state_34329__$1;(statearr_34335_34354[2] = inst_34324);
(statearr_34335_34354[1] = 4);
return cljs.core.constant$keyword$171;
} else
{if((state_val_34330 === 5))
{var inst_34305 = (state_34329[7]);var inst_34307 = localStorage.key(inst_34305);var inst_34308 = localStorage.getItem(inst_34307);var inst_34309 = parseInt(inst_34308);var inst_34310 = moment();var inst_34311 = inst_34310.unix();var inst_34312 = (7 * 86400);var inst_34313 = (inst_34311 - inst_34312);var inst_34314 = (inst_34309 < inst_34313);var state_34329__$1 = state_34329;if(cljs.core.truth_(inst_34314))
{var statearr_34336_34355 = state_34329__$1;(statearr_34336_34355[1] = 7);
} else
{var statearr_34337_34356 = state_34329__$1;(statearr_34337_34356[1] = 8);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_34330 === 4))
{var inst_34327 = (state_34329[2]);var state_34329__$1 = state_34329;return cljs.core.async.impl.ioc_helpers.return_chan(state_34329__$1,inst_34327);
} else
{if((state_val_34330 === 3))
{var state_34329__$1 = state_34329;var statearr_34338_34357 = state_34329__$1;(statearr_34338_34357[2] = null);
(statearr_34338_34357[1] = 4);
return cljs.core.constant$keyword$171;
} else
{if((state_val_34330 === 2))
{var inst_34303 = localStorage.length;var inst_34304 = (inst_34303 - 1);var inst_34305 = inst_34304;var state_34329__$1 = (function (){var statearr_34339 = state_34329;(statearr_34339[7] = inst_34305);
return statearr_34339;
})();var statearr_34340_34358 = state_34329__$1;(statearr_34340_34358[2] = null);
(statearr_34340_34358[1] = 5);
return cljs.core.constant$keyword$171;
} else
{if((state_val_34330 === 1))
{var inst_34301 = window.hasstorage;var state_34329__$1 = state_34329;if(cljs.core.truth_(inst_34301))
{var statearr_34341_34359 = state_34329__$1;(statearr_34341_34359[1] = 2);
} else
{var statearr_34342_34360 = state_34329__$1;(statearr_34342_34360[1] = 3);
}
return cljs.core.constant$keyword$171;
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
});return ((function (switch__5897__auto__){
return (function() {
var state_machine__5898__auto__ = null;
var state_machine__5898__auto____0 = (function (){var statearr_34346 = (new Array(9));(statearr_34346[0] = state_machine__5898__auto__);
(statearr_34346[1] = 1);
return statearr_34346;
});
var state_machine__5898__auto____1 = (function (state_34329){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_34329);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$171))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e34347){if((e34347 instanceof Object))
{var ex__5901__auto__ = e34347;var statearr_34348_34361 = state_34329;(statearr_34348_34361[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34329);
return cljs.core.constant$keyword$171;
} else
{if(cljs.core.constant$keyword$126)
{throw e34347;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$171))
{{
var G__34362 = state_34329;
state_34329 = G__34362;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_34329){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_34329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_34349 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_34349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto___34350);
return statearr_34349;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5969__auto__);
}));
