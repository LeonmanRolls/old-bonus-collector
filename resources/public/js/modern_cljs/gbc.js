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
modern_cljs.model.getLatestLinks(modern_cljs.gbc.gameid,(function (p1__33658_SHARP_){modern_cljs.gbc.appendObjects(p1__33658_SHARP_);
return modern_cljs.gbc.loadingStop();
}));
return modern_cljs.gbc.postLogin();
});
goog.exportSymbol('modern_cljs.gbc.morelinks', modern_cljs.gbc.morelinks);
modern_cljs.gbc.friendsFromBonuses = (function friendsFromBonuses(bonuses){return cljs.core.clj__GT_js(cljs.core.distinct(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__33659_SHARP_,p2__33660_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__33659_SHARP_,(p2__33660_SHARP_["actor_id"]));
}),cljs.core.PersistentVector.EMPTY,bonuses)));
});
modern_cljs.gbc.requestToFriends = (function requestToFriends(friends){return FB.ui((function (){var obj33664 = {"method":"apprequests","message":[cljs.core.str("I just collected some "),cljs.core.str(modern_cljs.gbc.gamename),cljs.core.str(" bonuses!")].join(''),"to":friends};return obj33664;
})(),(function (){return cljs.core.List.EMPTY;
}));
});
modern_cljs.gbc.noRecentlyCollectedBonuses = (function noRecentlyCollectedBonuses(){return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#collectedalready"], null),cljs.core.array_seq([enfocus.core.append.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["You haven't collected any bonuses recently (or cookies aren't configured)!\n                                    <a title= \"If you are experiencing problems with this section, \n                                                most often this is due to third party cookies being disabled\"\n                                    onclick=\"alert('If you are experiencing problems with this section, most often this is due to third party cookies being disabled.');\">Help</a>"], 0))], 0));
});
modern_cljs.gbc.splitQueryResult = (function splitQueryResult(queryResult){var graphChan_33706 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();modern_cljs.model.graphQuery(graphChan_33706,"/v2.1/me?fields=name");
var c__6793__auto___33707 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_33696){var state_val_33697 = (state_33696[1]);if((state_val_33697 === 2))
{var inst_33690 = (state_33696[7]);var inst_33692 = (state_33696[2]);var inst_33693 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_33692);var inst_33694 = modern_cljs.model.addClickxBonus(inst_33690,inst_33693);var state_33696__$1 = state_33696;return cljs.core.async.impl.ioc_helpers.return_chan(state_33696__$1,inst_33694);
} else
{if((state_val_33697 === 1))
{var inst_33686 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(queryResult);var inst_33687 = cljs.core.take(1,inst_33686);var inst_33688 = modern_cljs.model.insertBonuses(inst_33687);var inst_33689 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(queryResult);var inst_33690 = cljs.core.take(1,inst_33689);var state_33696__$1 = (function (){var statearr_33698 = state_33696;(statearr_33698[7] = inst_33690);
(statearr_33698[8] = inst_33688);
return statearr_33698;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33696__$1,2,graphChan_33706);
} else
{return null;
}
}
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_33702 = (new Array(9));(statearr_33702[0] = state_machine__6724__auto__);
(statearr_33702[1] = 1);
return statearr_33702;
});
var state_machine__6724__auto____1 = (function (state_33696){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_33696);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$174))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e33703){if((e33703 instanceof Object))
{var ex__6727__auto__ = e33703;var statearr_33704_33708 = state_33696;(statearr_33704_33708[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33696);
return cljs.core.constant$keyword$174;
} else
{if(cljs.core.constant$keyword$129)
{throw e33703;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$174))
{{
var G__33709 = state_33696;
state_33696 = G__33709;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_33696){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_33696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_33705 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_33705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto___33707);
return statearr_33705;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
if(cljs.core.truth_(window.hasstorage))
{return cljs.core.group_by((function (p1__33665_SHARP_){return (localStorage.getItem((p1__33665_SHARP_["post_id"])) > 0);
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
modern_cljs.gbc.getBonuses = (function getBonuses(){var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__6793__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_33808){var state_val_33809 = (state_33808[1]);if((state_val_33809 === 1))
{var inst_33772 = modern_cljs.gbc.getRawBonuses(c);var state_33808__$1 = (function (){var statearr_33810 = state_33808;(statearr_33810[7] = inst_33772);
return statearr_33810;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33808__$1,2,c);
} else
{if((state_val_33809 === 2))
{var inst_33774 = (state_33808[2]);var inst_33775 = modern_cljs.gbc.splitQueryResult(inst_33774);var inst_33776 = modern_cljs.gbc.loadingStop();var state_33808__$1 = (function (){var statearr_33811 = state_33808;(statearr_33811[8] = inst_33775);
(statearr_33811[9] = inst_33776);
return statearr_33811;
})();if(cljs.core.truth_(modern_cljs.gbc.inFacebook))
{var statearr_33812_33834 = state_33808__$1;(statearr_33812_33834[1] = 3);
} else
{var statearr_33813_33835 = state_33808__$1;(statearr_33813_33835[1] = 4);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_33809 === 3))
{var inst_33775 = (state_33808[8]);var inst_33778 = modern_cljs.gbc.noncookie(inst_33775);var inst_33779 = modern_cljs.gbc.friendsFromBonuses(inst_33778);var inst_33780 = modern_cljs.gbc.requestToFriends(inst_33779);var state_33808__$1 = state_33808;var statearr_33814_33836 = state_33808__$1;(statearr_33814_33836[2] = inst_33780);
(statearr_33814_33836[1] = 5);
return cljs.core.constant$keyword$174;
} else
{if((state_val_33809 === 4))
{var state_33808__$1 = state_33808;var statearr_33815_33837 = state_33808__$1;(statearr_33815_33837[2] = null);
(statearr_33815_33837[1] = 5);
return cljs.core.constant$keyword$174;
} else
{if((state_val_33809 === 5))
{var inst_33775 = (state_33808[8]);var inst_33783 = (state_33808[2]);var inst_33784 = modern_cljs.gbc.noncookie(inst_33775);var inst_33785 = cljs.core.empty_QMARK_(inst_33784);var state_33808__$1 = (function (){var statearr_33816 = state_33808;(statearr_33816[10] = inst_33783);
return statearr_33816;
})();if(inst_33785)
{var statearr_33817_33838 = state_33808__$1;(statearr_33817_33838[1] = 6);
} else
{var statearr_33818_33839 = state_33808__$1;(statearr_33818_33839[1] = 7);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_33809 === 6))
{var inst_33787 = modern_cljs.gbc.morelinks();var inst_33788 = modern_cljs.gbc.noBonusAlert();var state_33808__$1 = (function (){var statearr_33819 = state_33808;(statearr_33819[11] = inst_33787);
return statearr_33819;
})();var statearr_33820_33840 = state_33808__$1;(statearr_33820_33840[2] = inst_33788);
(statearr_33820_33840[1] = 8);
return cljs.core.constant$keyword$174;
} else
{if((state_val_33809 === 7))
{var inst_33775 = (state_33808[8]);var inst_33790 = modern_cljs.gbc.noncookie(inst_33775);var inst_33791 = cljs.core.clj__GT_js(inst_33790);var inst_33792 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(modern_cljs.views.bonuspolaroid,"",inst_33791);var inst_33793 = modern_cljs.gbc.appendObjects(inst_33792);var state_33808__$1 = state_33808;var statearr_33821_33841 = state_33808__$1;(statearr_33821_33841[2] = inst_33793);
(statearr_33821_33841[1] = 8);
return cljs.core.constant$keyword$174;
} else
{if((state_val_33809 === 8))
{var inst_33775 = (state_33808[8]);var inst_33795 = (state_33808[2]);var inst_33796 = modern_cljs.gbc.cookie(inst_33775);var inst_33797 = cljs.core.empty_QMARK_(inst_33796);var state_33808__$1 = (function (){var statearr_33822 = state_33808;(statearr_33822[12] = inst_33795);
return statearr_33822;
})();if(inst_33797)
{var statearr_33823_33842 = state_33808__$1;(statearr_33823_33842[1] = 9);
} else
{var statearr_33824_33843 = state_33808__$1;(statearr_33824_33843[1] = 10);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_33809 === 9))
{var inst_33799 = modern_cljs.gbc.noRecentlyCollectedBonuses();var state_33808__$1 = state_33808;var statearr_33825_33844 = state_33808__$1;(statearr_33825_33844[2] = inst_33799);
(statearr_33825_33844[1] = 11);
return cljs.core.constant$keyword$174;
} else
{if((state_val_33809 === 10))
{var inst_33775 = (state_33808[8]);var inst_33801 = modern_cljs.gbc.cookie(inst_33775);var inst_33802 = cljs.core.clj__GT_js(inst_33801);var inst_33803 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(modern_cljs.views.bonuspolaroid,"",inst_33802);var inst_33804 = modern_cljs.gbc.appendInteractedAlready(inst_33803);var state_33808__$1 = state_33808;var statearr_33826_33845 = state_33808__$1;(statearr_33826_33845[2] = inst_33804);
(statearr_33826_33845[1] = 11);
return cljs.core.constant$keyword$174;
} else
{if((state_val_33809 === 11))
{var inst_33806 = (state_33808[2]);var state_33808__$1 = state_33808;return cljs.core.async.impl.ioc_helpers.return_chan(state_33808__$1,inst_33806);
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
var state_machine__6724__auto____0 = (function (){var statearr_33830 = (new Array(13));(statearr_33830[0] = state_machine__6724__auto__);
(statearr_33830[1] = 1);
return statearr_33830;
});
var state_machine__6724__auto____1 = (function (state_33808){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_33808);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$174))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e33831){if((e33831 instanceof Object))
{var ex__6727__auto__ = e33831;var statearr_33832_33846 = state_33808;(statearr_33832_33846[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33808);
return cljs.core.constant$keyword$174;
} else
{if(cljs.core.constant$keyword$129)
{throw e33831;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$174))
{{
var G__33847 = state_33808;
state_33808 = G__33847;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_33808){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_33808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_33833 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_33833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto__);
return statearr_33833;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return c__6793__auto__;
});
goog.exportSymbol('modern_cljs.gbc.getBonuses', modern_cljs.gbc.getBonuses);
modern_cljs.gbc.bonuslistener = (function bonuslistener(bonus,postid){enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(bonus)].join('')], null),cljs.core.array_seq([enfocus.core.set_attr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$241,"border: 5px solid #05BE0C;"], 0))], 0));
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
return FB.login((function (p1__33848_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(initchan,p1__33848_SHARP_.status);
}),(function (){var obj33852 = {"scope":"read_stream, publish_actions, email"};return obj33852;
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
modern_cljs.gbc.suggestions = (function suggestions(gbcids){var c__6793__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_34117){var state_val_34118 = (state_34117[1]);if((state_val_34118 === 1))
{var inst_34013 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var inst_34022 = cljs.core.seq(gbcids);var inst_34023 = inst_34022;var inst_34024 = null;var inst_34025 = 0;var inst_34026 = 0;var state_34117__$1 = (function (){var statearr_34119 = state_34117;(statearr_34119[7] = inst_34013);
(statearr_34119[8] = inst_34023);
(statearr_34119[9] = inst_34026);
(statearr_34119[10] = inst_34025);
(statearr_34119[11] = inst_34024);
return statearr_34119;
})();var statearr_34120_34173 = state_34117__$1;(statearr_34120_34173[2] = null);
(statearr_34120_34173[1] = 2);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34118 === 2))
{var inst_34026 = (state_34117[9]);var inst_34025 = (state_34117[10]);var inst_34028 = (inst_34026 < inst_34025);var inst_34029 = inst_34028;var state_34117__$1 = state_34117;if(cljs.core.truth_(inst_34029))
{var statearr_34121_34174 = state_34117__$1;(statearr_34121_34174[1] = 4);
} else
{var statearr_34122_34175 = state_34117__$1;(statearr_34122_34175[1] = 5);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_34118 === 3))
{var inst_34115 = (state_34117[2]);var state_34117__$1 = state_34117;return cljs.core.async.impl.ioc_helpers.return_chan(state_34117__$1,inst_34115);
} else
{if((state_val_34118 === 4))
{var inst_34013 = (state_34117[7]);var inst_34031 = (state_34117[12]);var inst_34026 = (state_34117[9]);var inst_34024 = (state_34117[11]);var inst_34031__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34024,inst_34026);var inst_34032 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34031__$1,cljs.core.constant$keyword$242);var inst_34033 = modern_cljs.gbc.queryGameid(inst_34013,inst_34032);var state_34117__$1 = (function (){var statearr_34123 = state_34117;(statearr_34123[13] = inst_34033);
(statearr_34123[12] = inst_34031__$1);
return statearr_34123;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34117__$1,7,inst_34013);
} else
{if((state_val_34118 === 5))
{var inst_34023 = (state_34117[8]);var inst_34065 = (state_34117[14]);var inst_34065__$1 = cljs.core.seq(inst_34023);var state_34117__$1 = (function (){var statearr_34124 = state_34117;(statearr_34124[14] = inst_34065__$1);
return statearr_34124;
})();if(inst_34065__$1)
{var statearr_34125_34176 = state_34117__$1;(statearr_34125_34176[1] = 15);
} else
{var statearr_34126_34177 = state_34117__$1;(statearr_34126_34177[1] = 16);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_34118 === 6))
{var inst_34113 = (state_34117[2]);var state_34117__$1 = state_34117;var statearr_34127_34178 = state_34117__$1;(statearr_34127_34178[2] = inst_34113);
(statearr_34127_34178[1] = 3);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34118 === 7))
{var inst_34038 = (state_34117[15]);var inst_34036 = (state_34117[16]);var inst_34035 = (state_34117[2]);var inst_34036__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_34035);var inst_34037 = cljs.core.first(inst_34036__$1);var inst_34038__$1 = cljs.core.not_empty(inst_34037);var state_34117__$1 = (function (){var statearr_34128 = state_34117;(statearr_34128[15] = inst_34038__$1);
(statearr_34128[16] = inst_34036__$1);
return statearr_34128;
})();if(cljs.core.truth_(inst_34038__$1))
{var statearr_34129_34179 = state_34117__$1;(statearr_34129_34179[1] = 8);
} else
{var statearr_34130_34180 = state_34117__$1;(statearr_34130_34180[1] = 9);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_34118 === 8))
{var inst_34036 = (state_34117[16]);var inst_34031 = (state_34117[12]);var inst_34040 = cljs.core.first(inst_34036);var inst_34041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34040,"app_id");var inst_34042 = [cljs.core.str(inst_34041)].join('');var inst_34043 = (inst_34031.cljs$core$IFn$_invoke$arity$1 ? inst_34031.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$242) : inst_34031.call(null,cljs.core.constant$keyword$242));var inst_34044 = [cljs.core.str(inst_34043)].join('');var inst_34045 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34042,inst_34044);var state_34117__$1 = state_34117;var statearr_34131_34181 = state_34117__$1;(statearr_34131_34181[2] = inst_34045);
(statearr_34131_34181[1] = 10);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34118 === 9))
{var inst_34038 = (state_34117[15]);var state_34117__$1 = state_34117;var statearr_34132_34182 = state_34117__$1;(statearr_34132_34182[2] = inst_34038);
(statearr_34132_34182[1] = 10);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34118 === 10))
{var inst_34048 = (state_34117[2]);var state_34117__$1 = state_34117;if(cljs.core.truth_(inst_34048))
{var statearr_34136_34183 = state_34117__$1;(statearr_34136_34183[1] = 11);
} else
{var statearr_34137_34184 = state_34117__$1;(statearr_34137_34184[1] = 12);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_34118 === 11))
{var inst_34050 = modern_cljs.gbc.timeout(2000);var state_34117__$1 = state_34117;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34117__$1,14,inst_34050);
} else
{if((state_val_34118 === 12))
{var inst_34023 = (state_34117[8]);var inst_34026 = (state_34117[9]);var inst_34025 = (state_34117[10]);var inst_34024 = (state_34117[11]);var inst_34060 = (inst_34026 + 1);var tmp34133 = inst_34023;var tmp34134 = inst_34025;var tmp34135 = inst_34024;var inst_34023__$1 = tmp34133;var inst_34024__$1 = tmp34135;var inst_34025__$1 = tmp34134;var inst_34026__$1 = inst_34060;var state_34117__$1 = (function (){var statearr_34141 = state_34117;(statearr_34141[8] = inst_34023__$1);
(statearr_34141[9] = inst_34026__$1);
(statearr_34141[10] = inst_34025__$1);
(statearr_34141[11] = inst_34024__$1);
return statearr_34141;
})();var statearr_34142_34185 = state_34117__$1;(statearr_34142_34185[2] = null);
(statearr_34142_34185[1] = 2);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34118 === 13))
{var inst_34063 = (state_34117[2]);var state_34117__$1 = state_34117;var statearr_34143_34186 = state_34117__$1;(statearr_34143_34186[2] = inst_34063);
(statearr_34143_34186[1] = 6);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34118 === 14))
{var inst_34023 = (state_34117[8]);var inst_34036 = (state_34117[16]);var inst_34031 = (state_34117[12]);var inst_34026 = (state_34117[9]);var inst_34025 = (state_34117[10]);var inst_34024 = (state_34117[11]);var inst_34052 = (state_34117[2]);var inst_34053 = cljs.core.take(1,inst_34036);var inst_34054 = modern_cljs.model.insertBonuses(inst_34053);var inst_34055 = cljs.core.take(2,inst_34031);var inst_34056 = modern_cljs.gbc.addToSuggested(inst_34055);var inst_34057 = (inst_34026 + 1);var tmp34138 = inst_34023;var tmp34139 = inst_34025;var tmp34140 = inst_34024;var inst_34023__$1 = tmp34138;var inst_34024__$1 = tmp34140;var inst_34025__$1 = tmp34139;var inst_34026__$1 = inst_34057;var state_34117__$1 = (function (){var statearr_34144 = state_34117;(statearr_34144[17] = inst_34056);
(statearr_34144[18] = inst_34054);
(statearr_34144[19] = inst_34052);
(statearr_34144[8] = inst_34023__$1);
(statearr_34144[9] = inst_34026__$1);
(statearr_34144[10] = inst_34025__$1);
(statearr_34144[11] = inst_34024__$1);
return statearr_34144;
})();var statearr_34145_34187 = state_34117__$1;(statearr_34145_34187[2] = null);
(statearr_34145_34187[1] = 2);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34118 === 15))
{var inst_34065 = (state_34117[14]);var inst_34067 = cljs.core.chunked_seq_QMARK_(inst_34065);var state_34117__$1 = state_34117;if(inst_34067)
{var statearr_34146_34188 = state_34117__$1;(statearr_34146_34188[1] = 18);
} else
{var statearr_34147_34189 = state_34117__$1;(statearr_34147_34189[1] = 19);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_34118 === 16))
{var state_34117__$1 = state_34117;var statearr_34148_34190 = state_34117__$1;(statearr_34148_34190[2] = null);
(statearr_34148_34190[1] = 17);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34118 === 17))
{var inst_34111 = (state_34117[2]);var state_34117__$1 = state_34117;var statearr_34149_34191 = state_34117__$1;(statearr_34149_34191[2] = inst_34111);
(statearr_34149_34191[1] = 6);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34118 === 18))
{var inst_34065 = (state_34117[14]);var inst_34069 = cljs.core.chunk_first(inst_34065);var inst_34070 = cljs.core.chunk_rest(inst_34065);var inst_34071 = cljs.core.count(inst_34069);var inst_34023 = inst_34070;var inst_34024 = inst_34069;var inst_34025 = inst_34071;var inst_34026 = 0;var state_34117__$1 = (function (){var statearr_34150 = state_34117;(statearr_34150[8] = inst_34023);
(statearr_34150[9] = inst_34026);
(statearr_34150[10] = inst_34025);
(statearr_34150[11] = inst_34024);
return statearr_34150;
})();var statearr_34151_34192 = state_34117__$1;(statearr_34151_34192[2] = null);
(statearr_34151_34192[1] = 2);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34118 === 19))
{var inst_34013 = (state_34117[7]);var inst_34065 = (state_34117[14]);var inst_34074 = (state_34117[20]);var inst_34074__$1 = cljs.core.first(inst_34065);var inst_34075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34074__$1,cljs.core.constant$keyword$242);var inst_34076 = modern_cljs.gbc.queryGameid(inst_34013,inst_34075);var state_34117__$1 = (function (){var statearr_34152 = state_34117;(statearr_34152[21] = inst_34076);
(statearr_34152[20] = inst_34074__$1);
return statearr_34152;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34117__$1,21,inst_34013);
} else
{if((state_val_34118 === 20))
{var inst_34108 = (state_34117[2]);var state_34117__$1 = state_34117;var statearr_34153_34193 = state_34117__$1;(statearr_34153_34193[2] = inst_34108);
(statearr_34153_34193[1] = 17);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34118 === 21))
{var inst_34079 = (state_34117[22]);var inst_34081 = (state_34117[23]);var inst_34078 = (state_34117[2]);var inst_34079__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_34078);var inst_34080 = cljs.core.first(inst_34079__$1);var inst_34081__$1 = cljs.core.not_empty(inst_34080);var state_34117__$1 = (function (){var statearr_34154 = state_34117;(statearr_34154[22] = inst_34079__$1);
(statearr_34154[23] = inst_34081__$1);
return statearr_34154;
})();if(cljs.core.truth_(inst_34081__$1))
{var statearr_34155_34194 = state_34117__$1;(statearr_34155_34194[1] = 22);
} else
{var statearr_34156_34195 = state_34117__$1;(statearr_34156_34195[1] = 23);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_34118 === 22))
{var inst_34079 = (state_34117[22]);var inst_34074 = (state_34117[20]);var inst_34083 = cljs.core.first(inst_34079);var inst_34084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34083,"app_id");var inst_34085 = [cljs.core.str(inst_34084)].join('');var inst_34086 = (inst_34074.cljs$core$IFn$_invoke$arity$1 ? inst_34074.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$242) : inst_34074.call(null,cljs.core.constant$keyword$242));var inst_34087 = [cljs.core.str(inst_34086)].join('');var inst_34088 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34085,inst_34087);var state_34117__$1 = state_34117;var statearr_34157_34196 = state_34117__$1;(statearr_34157_34196[2] = inst_34088);
(statearr_34157_34196[1] = 24);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34118 === 23))
{var inst_34081 = (state_34117[23]);var state_34117__$1 = state_34117;var statearr_34158_34197 = state_34117__$1;(statearr_34158_34197[2] = inst_34081);
(statearr_34158_34197[1] = 24);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34118 === 24))
{var inst_34091 = (state_34117[2]);var state_34117__$1 = state_34117;if(cljs.core.truth_(inst_34091))
{var statearr_34159_34198 = state_34117__$1;(statearr_34159_34198[1] = 25);
} else
{var statearr_34160_34199 = state_34117__$1;(statearr_34160_34199[1] = 26);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_34118 === 25))
{var inst_34093 = modern_cljs.gbc.timeout(2000);var state_34117__$1 = state_34117;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34117__$1,28,inst_34093);
} else
{if((state_val_34118 === 26))
{var inst_34065 = (state_34117[14]);var inst_34103 = cljs.core.next(inst_34065);var inst_34023 = inst_34103;var inst_34024 = null;var inst_34025 = 0;var inst_34026 = 0;var state_34117__$1 = (function (){var statearr_34161 = state_34117;(statearr_34161[8] = inst_34023);
(statearr_34161[9] = inst_34026);
(statearr_34161[10] = inst_34025);
(statearr_34161[11] = inst_34024);
return statearr_34161;
})();var statearr_34162_34200 = state_34117__$1;(statearr_34162_34200[2] = null);
(statearr_34162_34200[1] = 2);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34118 === 27))
{var inst_34106 = (state_34117[2]);var state_34117__$1 = state_34117;var statearr_34163_34201 = state_34117__$1;(statearr_34163_34201[2] = inst_34106);
(statearr_34163_34201[1] = 20);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34118 === 28))
{var inst_34065 = (state_34117[14]);var inst_34079 = (state_34117[22]);var inst_34074 = (state_34117[20]);var inst_34095 = (state_34117[2]);var inst_34096 = cljs.core.take(1,inst_34079);var inst_34097 = modern_cljs.model.insertBonuses(inst_34096);var inst_34098 = cljs.core.take(2,inst_34074);var inst_34099 = modern_cljs.gbc.addToSuggested(inst_34098);var inst_34100 = cljs.core.next(inst_34065);var inst_34023 = inst_34100;var inst_34024 = null;var inst_34025 = 0;var inst_34026 = 0;var state_34117__$1 = (function (){var statearr_34164 = state_34117;(statearr_34164[24] = inst_34099);
(statearr_34164[25] = inst_34097);
(statearr_34164[26] = inst_34095);
(statearr_34164[8] = inst_34023);
(statearr_34164[9] = inst_34026);
(statearr_34164[10] = inst_34025);
(statearr_34164[11] = inst_34024);
return statearr_34164;
})();var statearr_34165_34202 = state_34117__$1;(statearr_34165_34202[2] = null);
(statearr_34165_34202[1] = 2);
return cljs.core.constant$keyword$174;
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
var state_machine__6724__auto____0 = (function (){var statearr_34169 = (new Array(27));(statearr_34169[0] = state_machine__6724__auto__);
(statearr_34169[1] = 1);
return statearr_34169;
});
var state_machine__6724__auto____1 = (function (state_34117){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_34117);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$174))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e34170){if((e34170 instanceof Object))
{var ex__6727__auto__ = e34170;var statearr_34171_34203 = state_34117;(statearr_34171_34203[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34117);
return cljs.core.constant$keyword$174;
} else
{if(cljs.core.constant$keyword$129)
{throw e34170;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$174))
{{
var G__34204 = state_34117;
state_34117 = G__34204;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_34117){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_34117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_34172 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_34172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto__);
return statearr_34172;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return c__6793__auto__;
});
modern_cljs.gbc.getAppData = (function getAppData(appid){var queryChan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__6793__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_34243){var state_val_34244 = (state_34243[1]);if((state_val_34244 === 3))
{var inst_34237 = (state_34243[2]);var inst_34238 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_34237);var inst_34239 = cljs.core.first(inst_34238);var inst_34240 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_34239,cljs.core.constant$keyword$243,appid);var inst_34241 = modern_cljs.model.insertNewApplication(inst_34240);var state_34243__$1 = state_34243;return cljs.core.async.impl.ioc_helpers.return_chan(state_34243__$1,inst_34241);
} else
{if((state_val_34244 === 2))
{var inst_34233 = (state_34243[2]);var inst_34234 = modern_cljs.model.appInfoQuery(appid);var inst_34235 = modern_cljs.model.fqlquerytemplate(queryChan,inst_34234);var state_34243__$1 = (function (){var statearr_34245 = state_34243;(statearr_34245[7] = inst_34235);
(statearr_34245[8] = inst_34233);
return statearr_34245;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34243__$1,3,queryChan);
} else
{if((state_val_34244 === 1))
{var inst_34229 = cljs.core.rand_int(20);var inst_34230 = (inst_34229 * 1000);var inst_34231 = modern_cljs.gbc.timeout(inst_34230);var state_34243__$1 = state_34243;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34243__$1,2,inst_34231);
} else
{return null;
}
}
}
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_34249 = (new Array(9));(statearr_34249[0] = state_machine__6724__auto__);
(statearr_34249[1] = 1);
return statearr_34249;
});
var state_machine__6724__auto____1 = (function (state_34243){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_34243);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$174))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e34250){if((e34250 instanceof Object))
{var ex__6727__auto__ = e34250;var statearr_34251_34253 = state_34243;(statearr_34251_34253[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34243);
return cljs.core.constant$keyword$174;
} else
{if(cljs.core.constant$keyword$129)
{throw e34250;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$174))
{{
var G__34254 = state_34243;
state_34243 = G__34254;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_34243){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_34243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_34252 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_34252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto__);
return statearr_34252;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return c__6793__auto__;
});
modern_cljs.gbc.getNewAppIds = (function getNewAppIds(appIds){var currentIdChan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var c__6793__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_34296){var state_val_34297 = (state_34296[1]);if((state_val_34297 === 2))
{var inst_34286 = (state_34296[7]);var inst_34287 = (state_34296[8]);var inst_34283 = (state_34296[9]);var inst_34289 = (state_34296[2]);var inst_34290 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_34287,inst_34289);var inst_34291 = cljs.core.set(inst_34290);var inst_34292 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_34286,inst_34291);var inst_34293 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_34283,inst_34292);var inst_34294 = cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(inst_34293);var state_34296__$1 = state_34296;return cljs.core.async.impl.ioc_helpers.return_chan(state_34296__$1,inst_34294);
} else
{if((state_val_34297 === 1))
{var inst_34282 = modern_cljs.model.getApplicationIds(currentIdChan);var inst_34283 = (function (){return ((function (inst_34282,state_val_34297){
return (function (p1__34255_SHARP_){return modern_cljs.gbc.getAppData(p1__34255_SHARP_);
});
;})(inst_34282,state_val_34297))
})();var inst_34284 = (function (){return ((function (inst_34282,inst_34283,state_val_34297){
return (function (p1__34256_SHARP_){return cljs.reader.read_string(p1__34256_SHARP_);
});
;})(inst_34282,inst_34283,state_val_34297))
})();var inst_34285 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_34284,appIds);var inst_34286 = cljs.core.set(inst_34285);var inst_34287 = (function (){return ((function (inst_34282,inst_34283,inst_34284,inst_34285,inst_34286,state_val_34297){
return (function (p1__34257_SHARP_){return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__34257_SHARP_,cljs.core.constant$keyword$243);
});
;})(inst_34282,inst_34283,inst_34284,inst_34285,inst_34286,state_val_34297))
})();var state_34296__$1 = (function (){var statearr_34298 = state_34296;(statearr_34298[7] = inst_34286);
(statearr_34298[8] = inst_34287);
(statearr_34298[9] = inst_34283);
(statearr_34298[10] = inst_34282);
return statearr_34298;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34296__$1,2,currentIdChan);
} else
{return null;
}
}
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_34302 = (new Array(11));(statearr_34302[0] = state_machine__6724__auto__);
(statearr_34302[1] = 1);
return statearr_34302;
});
var state_machine__6724__auto____1 = (function (state_34296){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_34296);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$174))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e34303){if((e34303 instanceof Object))
{var ex__6727__auto__ = e34303;var statearr_34304_34306 = state_34296;(statearr_34304_34306[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34296);
return cljs.core.constant$keyword$174;
} else
{if(cljs.core.constant$keyword$129)
{throw e34303;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$174))
{{
var G__34307 = state_34296;
state_34296 = G__34307;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_34296){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_34296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_34305 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_34305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto__);
return statearr_34305;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return c__6793__auto__;
});
modern_cljs.gbc.filterAppIds = (function filterAppIds(graphResult){var c__6793__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_34331){var state_val_34332 = (state_34331[1]);if((state_val_34332 === 1))
{var inst_34325 = (function (){return ((function (state_val_34332){
return (function (p1__34308_SHARP_){return (p1__34308_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34308_SHARP_.cljs$core$IFn$_invoke$arity$1("application") : p1__34308_SHARP_.call(null,"application")).call(null,"id");
});
;})(state_val_34332))
})();var inst_34326 = (function (){return ((function (inst_34325,state_val_34332){
return (function (p1__34309_SHARP_){return cljs.core.complement(cljs.core.nil_QMARK_).call(null,(p1__34309_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34309_SHARP_.cljs$core$IFn$_invoke$arity$1("application") : p1__34309_SHARP_.call(null,"application")));
});
;})(inst_34325,state_val_34332))
})();var inst_34327 = cljs.core.filter(inst_34326,graphResult);var inst_34328 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_34325,inst_34327);var inst_34329 = modern_cljs.gbc.getNewAppIds(inst_34328);var state_34331__$1 = state_34331;return cljs.core.async.impl.ioc_helpers.return_chan(state_34331__$1,inst_34329);
} else
{return null;
}
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_34336 = (new Array(7));(statearr_34336[0] = state_machine__6724__auto__);
(statearr_34336[1] = 1);
return statearr_34336;
});
var state_machine__6724__auto____1 = (function (state_34331){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_34331);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$174))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e34337){if((e34337 instanceof Object))
{var ex__6727__auto__ = e34337;var statearr_34338_34340 = state_34331;(statearr_34338_34340[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34331);
return cljs.core.constant$keyword$174;
} else
{if(cljs.core.constant$keyword$129)
{throw e34337;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$174))
{{
var G__34341 = state_34331;
state_34331 = G__34341;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_34331){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_34331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_34339 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_34339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto__);
return statearr_34339;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return c__6793__auto__;
});
modern_cljs.gbc.appResearch = (function appResearch(){var c__6793__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_34368){var state_val_34369 = (state_34368[1]);if((state_val_34369 === 2))
{var inst_34363 = (state_34368[2]);var inst_34364 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_34363);var inst_34365 = (inst_34364.cljs$core$IFn$_invoke$arity$1 ? inst_34364.cljs$core$IFn$_invoke$arity$1("data") : inst_34364.call(null,"data"));var inst_34366 = modern_cljs.gbc.filterAppIds(inst_34365);var state_34368__$1 = state_34368;return cljs.core.async.impl.ioc_helpers.return_chan(state_34368__$1,inst_34366);
} else
{if((state_val_34369 === 1))
{var inst_34360 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var inst_34361 = modern_cljs.model.graphQuery(inst_34360,"/v2.1/me/home?fields=application");var state_34368__$1 = (function (){var statearr_34370 = state_34368;(statearr_34370[7] = inst_34361);
return statearr_34370;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34368__$1,2,inst_34360);
} else
{return null;
}
}
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_34374 = (new Array(8));(statearr_34374[0] = state_machine__6724__auto__);
(statearr_34374[1] = 1);
return statearr_34374;
});
var state_machine__6724__auto____1 = (function (state_34368){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_34368);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$174))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e34375){if((e34375 instanceof Object))
{var ex__6727__auto__ = e34375;var statearr_34376_34378 = state_34368;(statearr_34376_34378[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34368);
return cljs.core.constant$keyword$174;
} else
{if(cljs.core.constant$keyword$129)
{throw e34375;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$174))
{{
var G__34379 = state_34368;
state_34368 = G__34379;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_34368){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_34368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_34377 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_34377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto__);
return statearr_34377;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return c__6793__auto__;
});
modern_cljs.gbc.getdemfam = (function getdemfam(){var c__6793__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_34405){var state_val_34406 = (state_34405[1]);if((state_val_34406 === 2))
{var inst_34401 = (state_34405[2]);var inst_34402 = modern_cljs.gbc.suggestions(inst_34401);var inst_34403 = modern_cljs.gbc.appResearch();var state_34405__$1 = (function (){var statearr_34407 = state_34405;(statearr_34407[7] = inst_34402);
return statearr_34407;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_34405__$1,inst_34403);
} else
{if((state_val_34406 === 1))
{var inst_34398 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var inst_34399 = modern_cljs.model.getGbcIds(inst_34398);var state_34405__$1 = (function (){var statearr_34408 = state_34405;(statearr_34408[8] = inst_34399);
return statearr_34408;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34405__$1,2,inst_34398);
} else
{return null;
}
}
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_34412 = (new Array(9));(statearr_34412[0] = state_machine__6724__auto__);
(statearr_34412[1] = 1);
return statearr_34412;
});
var state_machine__6724__auto____1 = (function (state_34405){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_34405);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$174))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e34413){if((e34413 instanceof Object))
{var ex__6727__auto__ = e34413;var statearr_34414_34416 = state_34405;(statearr_34414_34416[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34405);
return cljs.core.constant$keyword$174;
} else
{if(cljs.core.constant$keyword$129)
{throw e34413;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$174))
{{
var G__34417 = state_34405;
state_34405 = G__34417;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_34405){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_34405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_34415 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_34415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto__);
return statearr_34415;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return c__6793__auto__;
});
modern_cljs.gbc.facebookInit = (function facebookInit(initchan){initfacebook(modern_cljs.gbc.appid,(function (p1__34418_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(initchan,p1__34418_SHARP_.status);
}),"read_stream, publish_actions, email");
return (function (){return goog.events.listen(goog.dom.getElement("prelogin"),"click",(function (){return modern_cljs.gbc.authenticate(initchan);
}));
}).call(null);
});
modern_cljs.gbc.authStateCheck = (function authStateCheck(initchan){var c__6793__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_34515){var state_val_34516 = (state_34515[1]);if((state_val_34516 === 1))
{var state_34515__$1 = state_34515;var statearr_34517_34545 = state_34515__$1;(statearr_34517_34545[2] = null);
(statearr_34517_34545[1] = 2);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34516 === 2))
{var state_34515__$1 = state_34515;if(true)
{var statearr_34518_34546 = state_34515__$1;(statearr_34518_34546[1] = 4);
} else
{var statearr_34519_34547 = state_34515__$1;(statearr_34519_34547[1] = 5);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_34516 === 3))
{var inst_34513 = (state_34515[2]);var state_34515__$1 = state_34515;return cljs.core.async.impl.ioc_helpers.return_chan(state_34515__$1,inst_34513);
} else
{if((state_val_34516 === 4))
{var state_34515__$1 = state_34515;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34515__$1,7,initchan);
} else
{if((state_val_34516 === 5))
{var state_34515__$1 = state_34515;var statearr_34520_34548 = state_34515__$1;(statearr_34520_34548[2] = null);
(statearr_34520_34548[1] = 6);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34516 === 6))
{var inst_34511 = (state_34515[2]);var state_34515__$1 = state_34515;var statearr_34521_34549 = state_34515__$1;(statearr_34521_34549[2] = inst_34511);
(statearr_34521_34549[1] = 3);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34516 === 7))
{var inst_34485 = (state_34515[7]);var inst_34485__$1 = (state_34515[2]);var inst_34486 = [cljs.core.str(inst_34485__$1)].join('');var inst_34487 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34486,"connected");var state_34515__$1 = (function (){var statearr_34522 = state_34515;(statearr_34522[7] = inst_34485__$1);
return statearr_34522;
})();if(inst_34487)
{var statearr_34523_34550 = state_34515__$1;(statearr_34523_34550[1] = 8);
} else
{var statearr_34524_34551 = state_34515__$1;(statearr_34524_34551[1] = 9);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_34516 === 8))
{var inst_34489 = modern_cljs.gbc.getBonuses();var inst_34490 = modern_cljs.gbc.postLogin();var inst_34491 = modern_cljs.gbc.loadingStart();var inst_34492 = modern_cljs.gbc.getdemfam();var state_34515__$1 = (function (){var statearr_34525 = state_34515;(statearr_34525[8] = inst_34490);
(statearr_34525[9] = inst_34489);
(statearr_34525[10] = inst_34491);
return statearr_34525;
})();var statearr_34526_34552 = state_34515__$1;(statearr_34526_34552[2] = inst_34492);
(statearr_34526_34552[1] = 10);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34516 === 9))
{var inst_34485 = (state_34515[7]);var inst_34494 = [cljs.core.str(inst_34485)].join('');var inst_34495 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34494,"not_authorized");var state_34515__$1 = state_34515;if(inst_34495)
{var statearr_34527_34553 = state_34515__$1;(statearr_34527_34553[1] = 11);
} else
{var statearr_34528_34554 = state_34515__$1;(statearr_34528_34554[1] = 12);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_34516 === 10))
{var inst_34507 = (state_34515[2]);var state_34515__$1 = (function (){var statearr_34529 = state_34515;(statearr_34529[11] = inst_34507);
return statearr_34529;
})();var statearr_34530_34555 = state_34515__$1;(statearr_34530_34555[2] = null);
(statearr_34530_34555[1] = 2);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34516 === 11))
{var inst_34497 = modern_cljs.gbc.showFacebookConnect();var state_34515__$1 = state_34515;var statearr_34531_34556 = state_34515__$1;(statearr_34531_34556[2] = inst_34497);
(statearr_34531_34556[1] = 13);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34516 === 12))
{var state_34515__$1 = state_34515;if(cljs.core.constant$keyword$129)
{var statearr_34532_34557 = state_34515__$1;(statearr_34532_34557[1] = 14);
} else
{var statearr_34533_34558 = state_34515__$1;(statearr_34533_34558[1] = 15);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_34516 === 13))
{var inst_34505 = (state_34515[2]);var state_34515__$1 = state_34515;var statearr_34534_34559 = state_34515__$1;(statearr_34534_34559[2] = inst_34505);
(statearr_34534_34559[1] = 10);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34516 === 14))
{var inst_34500 = modern_cljs.gbc.showFacebookConnect();var state_34515__$1 = state_34515;var statearr_34535_34560 = state_34515__$1;(statearr_34535_34560[2] = inst_34500);
(statearr_34535_34560[1] = 16);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34516 === 15))
{var state_34515__$1 = state_34515;var statearr_34536_34561 = state_34515__$1;(statearr_34536_34561[2] = null);
(statearr_34536_34561[1] = 16);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34516 === 16))
{var inst_34503 = (state_34515[2]);var state_34515__$1 = state_34515;var statearr_34537_34562 = state_34515__$1;(statearr_34537_34562[2] = inst_34503);
(statearr_34537_34562[1] = 13);
return cljs.core.constant$keyword$174;
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
var state_machine__6724__auto____0 = (function (){var statearr_34541 = (new Array(12));(statearr_34541[0] = state_machine__6724__auto__);
(statearr_34541[1] = 1);
return statearr_34541;
});
var state_machine__6724__auto____1 = (function (state_34515){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_34515);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$174))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e34542){if((e34542 instanceof Object))
{var ex__6727__auto__ = e34542;var statearr_34543_34563 = state_34515;(statearr_34543_34563[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34515);
return cljs.core.constant$keyword$174;
} else
{if(cljs.core.constant$keyword$129)
{throw e34542;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$174))
{{
var G__34564 = state_34515;
state_34515 = G__34564;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_34515){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_34515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_34544 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_34544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto__);
return statearr_34544;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return c__6793__auto__;
});
modern_cljs.gbc.gbcinit = (function gbcinit(){var initchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(5);modern_cljs.gbc.facebookInit(initchan);
return modern_cljs.gbc.authStateCheck(initchan);
});
goog.exportSymbol('modern_cljs.gbc.gbcinit', modern_cljs.gbc.gbcinit);
var c__6793__auto___34614 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_34593){var state_val_34594 = (state_34593[1]);if((state_val_34594 === 9))
{var inst_34586 = (state_34593[2]);var state_34593__$1 = state_34593;var statearr_34595_34615 = state_34593__$1;(statearr_34595_34615[2] = inst_34586);
(statearr_34595_34615[1] = 6);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34594 === 8))
{var state_34593__$1 = state_34593;var statearr_34596_34616 = state_34593__$1;(statearr_34596_34616[2] = null);
(statearr_34596_34616[1] = 9);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34594 === 7))
{var inst_34569 = (state_34593[7]);var inst_34580 = localStorage.key(inst_34569);var inst_34581 = localStorage.removeItem(inst_34580);var inst_34582 = (inst_34569 - 1);var inst_34569__$1 = inst_34582;var state_34593__$1 = (function (){var statearr_34597 = state_34593;(statearr_34597[7] = inst_34569__$1);
(statearr_34597[8] = inst_34581);
return statearr_34597;
})();var statearr_34598_34617 = state_34593__$1;(statearr_34598_34617[2] = null);
(statearr_34598_34617[1] = 5);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34594 === 6))
{var inst_34588 = (state_34593[2]);var state_34593__$1 = state_34593;var statearr_34599_34618 = state_34593__$1;(statearr_34599_34618[2] = inst_34588);
(statearr_34599_34618[1] = 4);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34594 === 5))
{var inst_34569 = (state_34593[7]);var inst_34571 = localStorage.key(inst_34569);var inst_34572 = localStorage.getItem(inst_34571);var inst_34573 = parseInt(inst_34572);var inst_34574 = moment();var inst_34575 = inst_34574.unix();var inst_34576 = (7 * 86400);var inst_34577 = (inst_34575 - inst_34576);var inst_34578 = (inst_34573 < inst_34577);var state_34593__$1 = state_34593;if(cljs.core.truth_(inst_34578))
{var statearr_34600_34619 = state_34593__$1;(statearr_34600_34619[1] = 7);
} else
{var statearr_34601_34620 = state_34593__$1;(statearr_34601_34620[1] = 8);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_34594 === 4))
{var inst_34591 = (state_34593[2]);var state_34593__$1 = state_34593;return cljs.core.async.impl.ioc_helpers.return_chan(state_34593__$1,inst_34591);
} else
{if((state_val_34594 === 3))
{var state_34593__$1 = state_34593;var statearr_34602_34621 = state_34593__$1;(statearr_34602_34621[2] = null);
(statearr_34602_34621[1] = 4);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34594 === 2))
{var inst_34567 = localStorage.length;var inst_34568 = (inst_34567 - 1);var inst_34569 = inst_34568;var state_34593__$1 = (function (){var statearr_34603 = state_34593;(statearr_34603[7] = inst_34569);
return statearr_34603;
})();var statearr_34604_34622 = state_34593__$1;(statearr_34604_34622[2] = null);
(statearr_34604_34622[1] = 5);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34594 === 1))
{var inst_34565 = window.hasstorage;var state_34593__$1 = state_34593;if(cljs.core.truth_(inst_34565))
{var statearr_34605_34623 = state_34593__$1;(statearr_34605_34623[1] = 2);
} else
{var statearr_34606_34624 = state_34593__$1;(statearr_34606_34624[1] = 3);
}
return cljs.core.constant$keyword$174;
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
var state_machine__6724__auto____0 = (function (){var statearr_34610 = (new Array(9));(statearr_34610[0] = state_machine__6724__auto__);
(statearr_34610[1] = 1);
return statearr_34610;
});
var state_machine__6724__auto____1 = (function (state_34593){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_34593);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$174))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e34611){if((e34611 instanceof Object))
{var ex__6727__auto__ = e34611;var statearr_34612_34625 = state_34593;(statearr_34612_34625[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34593);
return cljs.core.constant$keyword$174;
} else
{if(cljs.core.constant$keyword$129)
{throw e34611;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$174))
{{
var G__34626 = state_34593;
state_34593 = G__34626;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_34593){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_34593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_34613 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_34613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto___34614);
return statearr_34613;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
