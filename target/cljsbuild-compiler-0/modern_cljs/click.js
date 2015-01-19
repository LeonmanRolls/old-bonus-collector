// Compiled by ClojureScript 0.0-2069
goog.provide('modern_cljs.click');
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
modern_cljs.click.timeout = (function timeout(ms){var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();setTimeout((function (){return cljs.core.async.close_BANG_(c);
}),ms);
return c;
});
modern_cljs.click.clickxid = (window.serverdata["clickxid"]);
modern_cljs.click.gameid = (window.serverdata["gameid"]);
modern_cljs.click.gamename = (window.serverdata["gamename"]);
modern_cljs.click.canvasname = (window.serverdata["canvasname"]);
modern_cljs.click.inFacebook = window.inFacebook;
modern_cljs.click.loadingStart = (function loadingStart(){return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#loadingdiv"], null),cljs.core.array_seq([enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["hidden"], 0))], 0));
});
modern_cljs.click.loadingStop = (function loadingStop(){return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#loadingdiv"], null),cljs.core.array_seq([enfocus.core.add_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["hidden"], 0))], 0));
});
modern_cljs.click.showLinkForm = (function showLinkForm(){return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#linkInput"], null),cljs.core.array_seq([enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["hidden"], 0))], 0));
});
modern_cljs.click.postLogin = (function postLogin(){enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#postlogin"], null),cljs.core.array_seq([enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["hidden"], 0))], 0));
return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#prelogin"], null),cljs.core.array_seq([enfocus.core.add_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["hidden"], 0))], 0));
});
modern_cljs.click.preLogin = (function preLogin(){return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#prelogin"], null),cljs.core.array_seq([enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["hidden"], 0))], 0));
});
modern_cljs.click.appendInteractedAlready = (function appendInteractedAlready(stringOfListItems){return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#collectedalready"], null),cljs.core.array_seq([enfocus.core.append.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([stringOfListItems], 0))], 0));
});
modern_cljs.click.emptyLinkxAlert = (function emptyLinkxAlert(){return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#emptylinkxalert"], null),cljs.core.array_seq([enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["hidden"], 0))], 0));
});
modern_cljs.click.noBonusAlert = (function noBonusAlert(){return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#nobonusalert"], null),cljs.core.array_seq([enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["hidden"], 0))], 0));
});
modern_cljs.click.removeNoBonusAlert = (function removeNoBonusAlert(){return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#nobonusalert"], null),cljs.core.array_seq([enfocus.core.add_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["hidden"], 0))], 0));
});
modern_cljs.click.hideRecentlyCollected = (function hideRecentlyCollected(){return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#recentlyCollectedPanel"], null),cljs.core.array_seq([enfocus.core.add_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["hidden"], 0))], 0));
});
modern_cljs.click.select_values = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vals,cljs.core.select_keys);
modern_cljs.click.appendObjects = (function appendObjects(stringOfListItems){return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#bonuseslivehere"], null),cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stringOfListItems,""))?(function (){modern_cljs.click.emptyLinkxAlert();
return modern_cljs.click.loadingStop();
})():enfocus.core.append.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([stringOfListItems], 0)))], 0));
});
modern_cljs.click.clickxLinks = (function clickxLinks(){var c__6793__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_17357){var state_val_17358 = (state_17357[1]);if((state_val_17358 === 1))
{var inst_17341 = modern_cljs.click.loadingStart();var inst_17342 = ["#instructions"];var inst_17343 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_17342,null));var inst_17344 = enfocus.core.html_content("");var inst_17345 = enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(inst_17343,cljs.core.array_seq([inst_17344], 0));var inst_17346 = ["#bonuseslivehere"];var inst_17347 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_17346,null));var inst_17348 = enfocus.core.html_content("");var inst_17349 = enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(inst_17347,cljs.core.array_seq([inst_17348], 0));var inst_17350 = (function (){return ((function (inst_17341,inst_17342,inst_17343,inst_17344,inst_17345,inst_17346,inst_17347,inst_17348,inst_17349,state_val_17358){
return (function (p1__17314_SHARP_){modern_cljs.click.appendObjects(p1__17314_SHARP_);
initDataTable();
return modern_cljs.click.loadingStop();
});
;})(inst_17341,inst_17342,inst_17343,inst_17344,inst_17345,inst_17346,inst_17347,inst_17348,inst_17349,state_val_17358))
})();var inst_17351 = modern_cljs.model.getLatestClickxLinks(modern_cljs.click.gameid,inst_17350);var inst_17352 = ["#bonushouse"];var inst_17353 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_17352,null));var inst_17354 = enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["hidden"], 0));var inst_17355 = enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(inst_17353,cljs.core.array_seq([inst_17354], 0));var state_17357__$1 = (function (){var statearr_17359 = state_17357;(statearr_17359[7] = inst_17351);
(statearr_17359[8] = inst_17349);
(statearr_17359[9] = inst_17345);
(statearr_17359[10] = inst_17341);
return statearr_17359;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_17357__$1,inst_17355);
} else
{return null;
}
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_17363 = (new Array(11));(statearr_17363[0] = state_machine__6724__auto__);
(statearr_17363[1] = 1);
return statearr_17363;
});
var state_machine__6724__auto____1 = (function (state_17357){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_17357);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$51))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e17364){if((e17364 instanceof Object))
{var ex__6727__auto__ = e17364;var statearr_17365_17367 = state_17357;(statearr_17365_17367[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17357);
return cljs.core.constant$keyword$51;
} else
{if(cljs.core.constant$keyword$6)
{throw e17364;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$51))
{{
var G__17368 = state_17357;
state_17357 = G__17368;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_17357){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_17357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_17366 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_17366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto__);
return statearr_17366;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return c__6793__auto__;
});
goog.exportSymbol('modern_cljs.click.clickxLinks', modern_cljs.click.clickxLinks);
modern_cljs.click.friendsFromBonuses = (function friendsFromBonuses(bonuses){return cljs.core.clj__GT_js(cljs.core.distinct(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__17369_SHARP_,p2__17370_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__17369_SHARP_,(p2__17370_SHARP_["actor_id"]));
}),cljs.core.PersistentVector.EMPTY,bonuses)));
});
modern_cljs.click.requestToFriends = (function requestToFriends(friends){return FB.ui((function (){var obj17374 = {"method":"apprequests","message":[cljs.core.str("I just collected some "),cljs.core.str(modern_cljs.click.gamename),cljs.core.str(" bonuses!")].join(''),"to":friends};return obj17374;
})(),(function (){return cljs.core.List.EMPTY;
}));
});
modern_cljs.click.getRawBonuses = (function getRawBonuses(c){return modern_cljs.model.fqlquerytemplate(c,modern_cljs.model.bonusfqlquery(modern_cljs.click.gameid));
});
modern_cljs.click.noncookie = (function noncookie(binarysplit){return cljs.core.nth.cljs$core$IFn$_invoke$arity$2((modern_cljs.click.select_values.cljs$core$IFn$_invoke$arity$2 ? modern_cljs.click.select_values.cljs$core$IFn$_invoke$arity$2(binarysplit,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null)) : modern_cljs.click.select_values.call(null,binarysplit,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null))),0);
});
modern_cljs.click.cookie = (function cookie(binarysplit){return cljs.core.nth.cljs$core$IFn$_invoke$arity$2((modern_cljs.click.select_values.cljs$core$IFn$_invoke$arity$2 ? modern_cljs.click.select_values.cljs$core$IFn$_invoke$arity$2(binarysplit,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null)) : modern_cljs.click.select_values.call(null,binarysplit,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null))),0);
});
modern_cljs.click.bonuslistener = (function bonuslistener(bonus,postid){enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(bonus)].join('')], null),cljs.core.array_seq([enfocus.core.set_attr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$118,"border: 5px solid #05BE0C;"], 0))], 0));
if(cljs.core.truth_(window.hasstorage))
{return localStorage.setItem([cljs.core.str(bonus)].join(''),moment().unix());
} else
{return null;
}
});
goog.exportSymbol('modern_cljs.click.bonuslistener', modern_cljs.click.bonuslistener);
modern_cljs.click.noClicksValidation = (function noClicksValidation(noClicksInput){if(((0 < noClicksInput)) && ((5 >= noClicksInput)))
{enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#noClicksDiv"], null),cljs.core.array_seq([enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["has-error"], 0))], 0));
enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#noClicksDiv"], null),cljs.core.array_seq([enfocus.core.add_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["has-success"], 0))], 0));
return true;
} else
{enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#noClicksDiv"], null),cljs.core.array_seq([enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["has-success"], 0))], 0));
enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#noClicksDiv"], null),cljs.core.array_seq([enfocus.core.add_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["has-error"], 0))], 0));
alert("Please choose the number of clicks you need, maximum 5.");
return false;
}
});
modern_cljs.click.linkValidation = (function linkValidation(linkInput){if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(linkInput.match(/apps.facebook.com/),0),"apps.facebook.com")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(linkInput.match(/http/),0),"http")) && ((linkInput.indexOf([cljs.core.str(modern_cljs.click.canvasname)].join('')) > 0)))
{enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#linkInputDiv"], null),cljs.core.array_seq([enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["has-error"], 0))], 0));
enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#linkInputDiv"], null),cljs.core.array_seq([enfocus.core.add_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["has-success"], 0))], 0));
return true;
} else
{enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#linkInputDiv"], null),cljs.core.array_seq([enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["has-success"], 0))], 0));
enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#linkInputDiv"], null),cljs.core.array_seq([enfocus.core.add_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["has-error"], 0))], 0));
alert("Please enter a valid link");
return false;
}
});
modern_cljs.click.descriptionValidation = (function descriptionValidation(description){if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(description,"")) && ((cljs.core.count(description) < 80)))
{enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#descriptionInputDiv"], null),cljs.core.array_seq([enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["has-error"], 0))], 0));
enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#descriptionInputDiv"], null),cljs.core.array_seq([enfocus.core.add_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["has-success"], 0))], 0));
return true;
} else
{enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#descriptionInputDiv"], null),cljs.core.array_seq([enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["has-success"], 0))], 0));
enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#descriptionInputDiv"], null),cljs.core.array_seq([enfocus.core.add_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["has-error"], 0))], 0));
alert("Please enter a short(er) description");
return false;
}
});
modern_cljs.click.validate_form = (function validate_form(){var c__6793__auto___17515 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_17494){var state_val_17495 = (state_17494[1]);if((state_val_17495 === 8))
{var inst_17489 = (state_17494[2]);var state_17494__$1 = (function (){var statearr_17496 = state_17494;(statearr_17496[7] = inst_17489);
return statearr_17496;
})();var statearr_17497_17516 = state_17494__$1;(statearr_17497_17516[2] = false);
(statearr_17497_17516[1] = 4);
return cljs.core.constant$keyword$51;
} else
{if((state_val_17495 === 7))
{var inst_17486 = [cljs.core.str("https://www.facebook.com/dialog/share?app_id=819457934761988&display=popup&href=http%3A%2F%2Fwww.u1stgames.com/"),cljs.core.str(modern_cljs.environment.version),cljs.core.str("/click/"),cljs.core.str(modern_cljs.click.clickxid),cljs.core.str("/&redirect_uri=http%3A%2F%2Fwww.u1stgames.com")].join('');var inst_17487 = window.open(inst_17486,"_blank");var state_17494__$1 = state_17494;var statearr_17498_17517 = state_17494__$1;(statearr_17498_17517[2] = inst_17487);
(statearr_17498_17517[1] = 8);
return cljs.core.constant$keyword$51;
} else
{if((state_val_17495 === 6))
{var inst_17448 = (state_17494[8]);var inst_17446 = (state_17494[9]);var inst_17451 = (state_17494[10]);var inst_17450 = (state_17494[11]);var inst_17481 = document.URL;var inst_17482 = {"method":"share","href":inst_17481};var inst_17483 = (function (){var graphChan = inst_17451;var clicks = inst_17450;var link = inst_17448;var description = inst_17446;return ((function (graphChan,clicks,link,description,inst_17448,inst_17446,inst_17451,inst_17450,inst_17481,inst_17482,state_val_17495){
return (function (){return cljs.core.List.EMPTY;
});
;})(graphChan,clicks,link,description,inst_17448,inst_17446,inst_17451,inst_17450,inst_17481,inst_17482,state_val_17495))
})();var inst_17484 = FB.ui(inst_17482,inst_17483);var state_17494__$1 = state_17494;var statearr_17499_17518 = state_17494__$1;(statearr_17499_17518[2] = inst_17484);
(statearr_17499_17518[1] = 8);
return cljs.core.constant$keyword$51;
} else
{if((state_val_17495 === 5))
{var inst_17448 = (state_17494[8]);var inst_17446 = (state_17494[9]);var inst_17450 = (state_17494[11]);var inst_17467 = (state_17494[2]);var inst_17468 = [cljs.core.constant$keyword$119,cljs.core.constant$keyword$22,cljs.core.constant$keyword$66,cljs.core.constant$keyword$121,cljs.core.constant$keyword$122,cljs.core.constant$keyword$123];var inst_17469 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_17467);var inst_17470 = cljs.core.first(inst_17469);var inst_17471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inst_17470,1);var inst_17472 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_17467);var inst_17473 = cljs.core.last(inst_17472);var inst_17474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inst_17473,1);var inst_17475 = [modern_cljs.click.gameid,inst_17446,inst_17448,inst_17450,inst_17471,inst_17474];var inst_17476 = (cljs.core.PersistentHashMap.fromArrays.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentHashMap.fromArrays.cljs$core$IFn$_invoke$arity$2(inst_17468,inst_17475) : cljs.core.PersistentHashMap.fromArrays.call(null,inst_17468,inst_17475));var inst_17477 = modern_cljs.model.addClickxLink(inst_17476);var state_17494__$1 = (function (){var statearr_17500 = state_17494;(statearr_17500[12] = inst_17477);
return statearr_17500;
})();if(cljs.core.truth_(modern_cljs.click.inFacebook))
{var statearr_17501_17519 = state_17494__$1;(statearr_17501_17519[1] = 6);
} else
{var statearr_17502_17520 = state_17494__$1;(statearr_17502_17520[1] = 7);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_17495 === 4))
{var inst_17492 = (state_17494[2]);var state_17494__$1 = state_17494;return cljs.core.async.impl.ioc_helpers.return_chan(state_17494__$1,inst_17492);
} else
{if((state_val_17495 === 3))
{var state_17494__$1 = state_17494;var statearr_17503_17521 = state_17494__$1;(statearr_17503_17521[2] = false);
(statearr_17503_17521[1] = 4);
return cljs.core.constant$keyword$51;
} else
{if((state_val_17495 === 2))
{var inst_17451 = (state_17494[10]);var inst_17458 = ["#successalert"];var inst_17459 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_17458,null));var inst_17460 = enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["hidden"], 0));var inst_17461 = enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(inst_17459,cljs.core.array_seq([inst_17460], 0));var inst_17462 = ["#linkForm"];var inst_17463 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_17462,null));var inst_17464 = enfocus.core.add_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["hidden"], 0));var inst_17465 = enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(inst_17463,cljs.core.array_seq([inst_17464], 0));var state_17494__$1 = (function (){var statearr_17504 = state_17494;(statearr_17504[13] = inst_17465);
(statearr_17504[14] = inst_17461);
return statearr_17504;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17494__$1,5,inst_17451);
} else
{if((state_val_17495 === 1))
{var inst_17448 = (state_17494[8]);var inst_17446 = (state_17494[9]);var inst_17451 = (state_17494[10]);var inst_17450 = (state_17494[11]);var inst_17445 = document.getElementById("descriptionInput");var inst_17446__$1 = inst_17445.value;var inst_17447 = document.getElementById("linkInput");var inst_17448__$1 = inst_17447.value;var inst_17449 = document.getElementById("noClicksInput");var inst_17450__$1 = inst_17449.value;var inst_17451__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var inst_17452 = modern_cljs.model.graphQuery(inst_17451__$1,"/v2.1/me?fields=name");var inst_17453 = modern_cljs.click.descriptionValidation(inst_17446__$1);var inst_17454 = modern_cljs.click.linkValidation(inst_17448__$1);var inst_17455 = modern_cljs.click.noClicksValidation(inst_17450__$1);var inst_17456 = (inst_17453) && (inst_17454) && (inst_17455);var state_17494__$1 = (function (){var statearr_17505 = state_17494;(statearr_17505[8] = inst_17448__$1);
(statearr_17505[9] = inst_17446__$1);
(statearr_17505[10] = inst_17451__$1);
(statearr_17505[11] = inst_17450__$1);
(statearr_17505[15] = inst_17452);
return statearr_17505;
})();if(cljs.core.truth_(inst_17456))
{var statearr_17506_17522 = state_17494__$1;(statearr_17506_17522[1] = 2);
} else
{var statearr_17507_17523 = state_17494__$1;(statearr_17507_17523[1] = 3);
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
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_17511 = (new Array(16));(statearr_17511[0] = state_machine__6724__auto__);
(statearr_17511[1] = 1);
return statearr_17511;
});
var state_machine__6724__auto____1 = (function (state_17494){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_17494);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$51))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e17512){if((e17512 instanceof Object))
{var ex__6727__auto__ = e17512;var statearr_17513_17524 = state_17494;(statearr_17513_17524[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17494);
return cljs.core.constant$keyword$51;
} else
{if(cljs.core.constant$keyword$6)
{throw e17512;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$51))
{{
var G__17525 = state_17494;
state_17494 = G__17525;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_17494){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_17494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_17514 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_17514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto___17515);
return statearr_17514;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return false;
});
modern_cljs.click.initValidation = (function initValidation(){if(cljs.core.truth_((function (){var and__3273__auto__ = document;if(cljs.core.truth_(and__3273__auto__))
{return document.getElementById;
} else
{return and__3273__auto__;
}
})()))
{var login_form = document.getElementById("linkForm");return login_form.onsubmit = modern_cljs.click.validate_form;
} else
{return null;
}
});
modern_cljs.click.authenticate = (function authenticate(initchan){enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#fbconnectanchor"], null),cljs.core.array_seq([enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["hidden"], 0))], 0));
return FB.login((function (p1__17526_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(initchan,p1__17526_SHARP_.status);
}),(function (){var obj17530 = {"scope":""};return obj17530;
})());
});
modern_cljs.click.showFacebookConnect = (function showFacebookConnect(){modern_cljs.click.preLogin();
modern_cljs.click.loadingStop();
return alert("Please connect with Facebook to use this service!");
});
modern_cljs.click.facebookInit = (function facebookInit(initchan){initfacebook(modern_cljs.click.clickxid,(function (p1__17531_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(initchan,p1__17531_SHARP_.status);
}),"");
return (function (){return goog.events.listen(goog.dom.getElement("prelogin"),"click",(function (){return modern_cljs.click.authenticate(initchan);
}));
}).call(null);
});
modern_cljs.click.authStateCheck = (function authStateCheck(initchan){var c__6793__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_17628){var state_val_17629 = (state_17628[1]);if((state_val_17629 === 1))
{var state_17628__$1 = state_17628;var statearr_17630_17658 = state_17628__$1;(statearr_17630_17658[2] = null);
(statearr_17630_17658[1] = 2);
return cljs.core.constant$keyword$51;
} else
{if((state_val_17629 === 2))
{var state_17628__$1 = state_17628;if(true)
{var statearr_17631_17659 = state_17628__$1;(statearr_17631_17659[1] = 4);
} else
{var statearr_17632_17660 = state_17628__$1;(statearr_17632_17660[1] = 5);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_17629 === 3))
{var inst_17626 = (state_17628[2]);var state_17628__$1 = state_17628;return cljs.core.async.impl.ioc_helpers.return_chan(state_17628__$1,inst_17626);
} else
{if((state_val_17629 === 4))
{var state_17628__$1 = state_17628;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17628__$1,7,initchan);
} else
{if((state_val_17629 === 5))
{var state_17628__$1 = state_17628;var statearr_17633_17661 = state_17628__$1;(statearr_17633_17661[2] = null);
(statearr_17633_17661[1] = 6);
return cljs.core.constant$keyword$51;
} else
{if((state_val_17629 === 6))
{var inst_17624 = (state_17628[2]);var state_17628__$1 = state_17628;var statearr_17634_17662 = state_17628__$1;(statearr_17634_17662[2] = inst_17624);
(statearr_17634_17662[1] = 3);
return cljs.core.constant$keyword$51;
} else
{if((state_val_17629 === 7))
{var inst_17598 = (state_17628[7]);var inst_17598__$1 = (state_17628[2]);var inst_17599 = [cljs.core.str(inst_17598__$1)].join('');var inst_17600 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17599,"connected");var state_17628__$1 = (function (){var statearr_17635 = state_17628;(statearr_17635[7] = inst_17598__$1);
return statearr_17635;
})();if(inst_17600)
{var statearr_17636_17663 = state_17628__$1;(statearr_17636_17663[1] = 8);
} else
{var statearr_17637_17664 = state_17628__$1;(statearr_17637_17664[1] = 9);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_17629 === 8))
{var inst_17602 = modern_cljs.click.clickxLinks();var inst_17603 = modern_cljs.click.showLinkForm();var inst_17604 = modern_cljs.click.postLogin();var inst_17605 = modern_cljs.click.initValidation();var state_17628__$1 = (function (){var statearr_17638 = state_17628;(statearr_17638[8] = inst_17604);
(statearr_17638[9] = inst_17603);
(statearr_17638[10] = inst_17602);
return statearr_17638;
})();var statearr_17639_17665 = state_17628__$1;(statearr_17639_17665[2] = inst_17605);
(statearr_17639_17665[1] = 10);
return cljs.core.constant$keyword$51;
} else
{if((state_val_17629 === 9))
{var inst_17598 = (state_17628[7]);var inst_17607 = [cljs.core.str(inst_17598)].join('');var inst_17608 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17607,"not_authorized");var state_17628__$1 = state_17628;if(inst_17608)
{var statearr_17640_17666 = state_17628__$1;(statearr_17640_17666[1] = 11);
} else
{var statearr_17641_17667 = state_17628__$1;(statearr_17641_17667[1] = 12);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_17629 === 10))
{var inst_17620 = (state_17628[2]);var state_17628__$1 = (function (){var statearr_17642 = state_17628;(statearr_17642[11] = inst_17620);
return statearr_17642;
})();var statearr_17643_17668 = state_17628__$1;(statearr_17643_17668[2] = null);
(statearr_17643_17668[1] = 2);
return cljs.core.constant$keyword$51;
} else
{if((state_val_17629 === 11))
{var inst_17610 = modern_cljs.click.showFacebookConnect();var state_17628__$1 = state_17628;var statearr_17644_17669 = state_17628__$1;(statearr_17644_17669[2] = inst_17610);
(statearr_17644_17669[1] = 13);
return cljs.core.constant$keyword$51;
} else
{if((state_val_17629 === 12))
{var state_17628__$1 = state_17628;if(cljs.core.constant$keyword$6)
{var statearr_17645_17670 = state_17628__$1;(statearr_17645_17670[1] = 14);
} else
{var statearr_17646_17671 = state_17628__$1;(statearr_17646_17671[1] = 15);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_17629 === 13))
{var inst_17618 = (state_17628[2]);var state_17628__$1 = state_17628;var statearr_17647_17672 = state_17628__$1;(statearr_17647_17672[2] = inst_17618);
(statearr_17647_17672[1] = 10);
return cljs.core.constant$keyword$51;
} else
{if((state_val_17629 === 14))
{var inst_17613 = modern_cljs.click.showFacebookConnect();var state_17628__$1 = state_17628;var statearr_17648_17673 = state_17628__$1;(statearr_17648_17673[2] = inst_17613);
(statearr_17648_17673[1] = 16);
return cljs.core.constant$keyword$51;
} else
{if((state_val_17629 === 15))
{var state_17628__$1 = state_17628;var statearr_17649_17674 = state_17628__$1;(statearr_17649_17674[2] = null);
(statearr_17649_17674[1] = 16);
return cljs.core.constant$keyword$51;
} else
{if((state_val_17629 === 16))
{var inst_17616 = (state_17628[2]);var state_17628__$1 = state_17628;var statearr_17650_17675 = state_17628__$1;(statearr_17650_17675[2] = inst_17616);
(statearr_17650_17675[1] = 13);
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
var state_machine__6724__auto____0 = (function (){var statearr_17654 = (new Array(12));(statearr_17654[0] = state_machine__6724__auto__);
(statearr_17654[1] = 1);
return statearr_17654;
});
var state_machine__6724__auto____1 = (function (state_17628){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_17628);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$51))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e17655){if((e17655 instanceof Object))
{var ex__6727__auto__ = e17655;var statearr_17656_17676 = state_17628;(statearr_17656_17676[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17628);
return cljs.core.constant$keyword$51;
} else
{if(cljs.core.constant$keyword$6)
{throw e17655;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$51))
{{
var G__17677 = state_17628;
state_17628 = G__17677;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_17628){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_17628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_17657 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_17657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto__);
return statearr_17657;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return c__6793__auto__;
});
modern_cljs.click.inviteFriends = (function inviteFriends(){return FB.ui((function (){var obj17681 = {"method":"apprequests","message":[cljs.core.str("Come give and recieve "),cljs.core.str(modern_cljs.click.gamename),cljs.core.str(" links!")].join(''),"to":""};return obj17681;
})(),(function (){return cljs.core.List.EMPTY;
}));
});
goog.exportSymbol('modern_cljs.click.inviteFriends', modern_cljs.click.inviteFriends);
modern_cljs.click.recordClick = (function recordClick(link,friendid){var c__6793__auto___17766 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_17748){var state_val_17749 = (state_17748[1]);if((state_val_17749 === 8))
{var inst_17724 = (state_17748[7]);var inst_17736 = (state_17748[2]);var inst_17737 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_17736);var inst_17738 = cljs.core.first(inst_17737);var inst_17739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inst_17738,1);var inst_17740 = [cljs.core.str(inst_17739),cljs.core.str(" just clicked your link, come and return the favour!")].join('');var inst_17741 = {"method":"apprequests","message":inst_17740,"to":friendid};var inst_17742 = (function (){var graphChan = inst_17724;return ((function (graphChan,inst_17724,inst_17736,inst_17737,inst_17738,inst_17739,inst_17740,inst_17741,state_val_17749){
return (function (){return cljs.core.List.EMPTY;
});
;})(graphChan,inst_17724,inst_17736,inst_17737,inst_17738,inst_17739,inst_17740,inst_17741,state_val_17749))
})();var inst_17743 = FB.ui(inst_17741,inst_17742);var state_17748__$1 = state_17748;var statearr_17750_17767 = state_17748__$1;(statearr_17750_17767[2] = inst_17743);
(statearr_17750_17767[1] = 7);
return cljs.core.constant$keyword$51;
} else
{if((state_val_17749 === 7))
{var inst_17746 = (state_17748[2]);var state_17748__$1 = state_17748;return cljs.core.async.impl.ioc_helpers.return_chan(state_17748__$1,inst_17746);
} else
{if((state_val_17749 === 6))
{var state_17748__$1 = state_17748;var statearr_17751_17768 = state_17748__$1;(statearr_17751_17768[2] = null);
(statearr_17751_17768[1] = 7);
return cljs.core.constant$keyword$51;
} else
{if((state_val_17749 === 5))
{var inst_17724 = (state_17748[7]);var state_17748__$1 = state_17748;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17748__$1,8,inst_17724);
} else
{if((state_val_17749 === 4))
{var inst_17731 = (state_17748[2]);var state_17748__$1 = state_17748;if(cljs.core.truth_(inst_17731))
{var statearr_17752_17769 = state_17748__$1;(statearr_17752_17769[1] = 5);
} else
{var statearr_17753_17770 = state_17748__$1;(statearr_17753_17770[1] = 6);
}
return cljs.core.constant$keyword$51;
} else
{if((state_val_17749 === 3))
{var inst_17727 = (state_17748[8]);var state_17748__$1 = state_17748;var statearr_17754_17771 = state_17748__$1;(statearr_17754_17771[2] = inst_17727);
(statearr_17754_17771[1] = 4);
return cljs.core.constant$keyword$51;
} else
{if((state_val_17749 === 2))
{var state_17748__$1 = state_17748;var statearr_17755_17772 = state_17748__$1;(statearr_17755_17772[2] = modern_cljs.click.inFacebook);
(statearr_17755_17772[1] = 4);
return cljs.core.constant$keyword$51;
} else
{if((state_val_17749 === 1))
{var inst_17724 = (state_17748[7]);var inst_17727 = (state_17748[8]);var inst_17724__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var inst_17725 = modern_cljs.model.graphQuery(inst_17724__$1,"/v2.1/me?fields=name");var inst_17726 = cljs.core.rand_int(4);var inst_17727__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17726,1);var state_17748__$1 = (function (){var statearr_17756 = state_17748;(statearr_17756[9] = inst_17725);
(statearr_17756[7] = inst_17724__$1);
(statearr_17756[8] = inst_17727__$1);
return statearr_17756;
})();if(inst_17727__$1)
{var statearr_17757_17773 = state_17748__$1;(statearr_17757_17773[1] = 2);
} else
{var statearr_17758_17774 = state_17748__$1;(statearr_17758_17774[1] = 3);
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
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_17762 = (new Array(10));(statearr_17762[0] = state_machine__6724__auto__);
(statearr_17762[1] = 1);
return statearr_17762;
});
var state_machine__6724__auto____1 = (function (state_17748){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_17748);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$51))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e17763){if((e17763 instanceof Object))
{var ex__6727__auto__ = e17763;var statearr_17764_17775 = state_17748;(statearr_17764_17775[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_17748);
return cljs.core.constant$keyword$51;
} else
{if(cljs.core.constant$keyword$6)
{throw e17763;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$51))
{{
var G__17776 = state_17748;
state_17748 = G__17776;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_17748){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_17748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_17765 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_17765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto___17766);
return statearr_17765;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return modern_cljs.model.clickUpdate(link);
});
goog.exportSymbol('modern_cljs.click.recordClick', modern_cljs.click.recordClick);
modern_cljs.click.clickinit = (function clickinit(){var initchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(5);modern_cljs.click.facebookInit(initchan);
return modern_cljs.click.authStateCheck(initchan);
});
goog.exportSymbol('modern_cljs.click.clickinit', modern_cljs.click.clickinit);
