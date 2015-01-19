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
modern_cljs.click.clickxLinks = (function clickxLinks(){var c__6793__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_34682){var state_val_34683 = (state_34682[1]);if((state_val_34683 === 1))
{var inst_34666 = modern_cljs.click.loadingStart();var inst_34667 = ["#instructions"];var inst_34668 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_34667,null));var inst_34669 = enfocus.core.html_content("");var inst_34670 = enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(inst_34668,cljs.core.array_seq([inst_34669], 0));var inst_34671 = ["#bonuseslivehere"];var inst_34672 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_34671,null));var inst_34673 = enfocus.core.html_content("");var inst_34674 = enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(inst_34672,cljs.core.array_seq([inst_34673], 0));var inst_34675 = (function (){return ((function (inst_34666,inst_34667,inst_34668,inst_34669,inst_34670,inst_34671,inst_34672,inst_34673,inst_34674,state_val_34683){
return (function (p1__34639_SHARP_){modern_cljs.click.appendObjects(p1__34639_SHARP_);
initDataTable();
return modern_cljs.click.loadingStop();
});
;})(inst_34666,inst_34667,inst_34668,inst_34669,inst_34670,inst_34671,inst_34672,inst_34673,inst_34674,state_val_34683))
})();var inst_34676 = modern_cljs.model.getLatestClickxLinks(modern_cljs.click.gameid,inst_34675);var inst_34677 = ["#bonushouse"];var inst_34678 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_34677,null));var inst_34679 = enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["hidden"], 0));var inst_34680 = enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(inst_34678,cljs.core.array_seq([inst_34679], 0));var state_34682__$1 = (function (){var statearr_34684 = state_34682;(statearr_34684[7] = inst_34676);
(statearr_34684[8] = inst_34666);
(statearr_34684[9] = inst_34674);
(statearr_34684[10] = inst_34670);
return statearr_34684;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_34682__$1,inst_34680);
} else
{return null;
}
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_34688 = (new Array(11));(statearr_34688[0] = state_machine__6724__auto__);
(statearr_34688[1] = 1);
return statearr_34688;
});
var state_machine__6724__auto____1 = (function (state_34682){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_34682);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$174))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e34689){if((e34689 instanceof Object))
{var ex__6727__auto__ = e34689;var statearr_34690_34692 = state_34682;(statearr_34690_34692[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34682);
return cljs.core.constant$keyword$174;
} else
{if(cljs.core.constant$keyword$129)
{throw e34689;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$174))
{{
var G__34693 = state_34682;
state_34682 = G__34693;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_34682){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_34682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_34691 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_34691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto__);
return statearr_34691;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return c__6793__auto__;
});
goog.exportSymbol('modern_cljs.click.clickxLinks', modern_cljs.click.clickxLinks);
modern_cljs.click.friendsFromBonuses = (function friendsFromBonuses(bonuses){return cljs.core.clj__GT_js(cljs.core.distinct(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__34694_SHARP_,p2__34695_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__34694_SHARP_,(p2__34695_SHARP_["actor_id"]));
}),cljs.core.PersistentVector.EMPTY,bonuses)));
});
modern_cljs.click.requestToFriends = (function requestToFriends(friends){return FB.ui((function (){var obj34699 = {"method":"apprequests","message":[cljs.core.str("I just collected some "),cljs.core.str(modern_cljs.click.gamename),cljs.core.str(" bonuses!")].join(''),"to":friends};return obj34699;
})(),(function (){return cljs.core.List.EMPTY;
}));
});
modern_cljs.click.getRawBonuses = (function getRawBonuses(c){return modern_cljs.model.fqlquerytemplate(c,modern_cljs.model.bonusfqlquery(modern_cljs.click.gameid));
});
modern_cljs.click.noncookie = (function noncookie(binarysplit){return cljs.core.nth.cljs$core$IFn$_invoke$arity$2((modern_cljs.click.select_values.cljs$core$IFn$_invoke$arity$2 ? modern_cljs.click.select_values.cljs$core$IFn$_invoke$arity$2(binarysplit,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null)) : modern_cljs.click.select_values.call(null,binarysplit,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null))),0);
});
modern_cljs.click.cookie = (function cookie(binarysplit){return cljs.core.nth.cljs$core$IFn$_invoke$arity$2((modern_cljs.click.select_values.cljs$core$IFn$_invoke$arity$2 ? modern_cljs.click.select_values.cljs$core$IFn$_invoke$arity$2(binarysplit,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null)) : modern_cljs.click.select_values.call(null,binarysplit,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null))),0);
});
modern_cljs.click.bonuslistener = (function bonuslistener(bonus,postid){enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(bonus)].join('')], null),cljs.core.array_seq([enfocus.core.set_attr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$241,"border: 5px solid #05BE0C;"], 0))], 0));
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
modern_cljs.click.validate_form = (function validate_form(){var c__6793__auto___34840 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_34819){var state_val_34820 = (state_34819[1]);if((state_val_34820 === 8))
{var inst_34814 = (state_34819[2]);var state_34819__$1 = (function (){var statearr_34821 = state_34819;(statearr_34821[7] = inst_34814);
return statearr_34821;
})();var statearr_34822_34841 = state_34819__$1;(statearr_34822_34841[2] = false);
(statearr_34822_34841[1] = 4);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34820 === 7))
{var inst_34811 = [cljs.core.str("https://www.facebook.com/dialog/share?app_id=819457934761988&display=popup&href=http%3A%2F%2Fwww.u1stgames.com/"),cljs.core.str(modern_cljs.environment.version),cljs.core.str("/click/"),cljs.core.str(modern_cljs.click.clickxid),cljs.core.str("/&redirect_uri=http%3A%2F%2Fwww.u1stgames.com")].join('');var inst_34812 = window.open(inst_34811,"_blank");var state_34819__$1 = state_34819;var statearr_34823_34842 = state_34819__$1;(statearr_34823_34842[2] = inst_34812);
(statearr_34823_34842[1] = 8);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34820 === 6))
{var inst_34775 = (state_34819[8]);var inst_34773 = (state_34819[9]);var inst_34771 = (state_34819[10]);var inst_34776 = (state_34819[11]);var inst_34806 = document.URL;var inst_34807 = {"method":"share","href":inst_34806};var inst_34808 = (function (){var graphChan = inst_34776;var clicks = inst_34775;var link = inst_34773;var description = inst_34771;return ((function (graphChan,clicks,link,description,inst_34775,inst_34773,inst_34771,inst_34776,inst_34806,inst_34807,state_val_34820){
return (function (){return cljs.core.List.EMPTY;
});
;})(graphChan,clicks,link,description,inst_34775,inst_34773,inst_34771,inst_34776,inst_34806,inst_34807,state_val_34820))
})();var inst_34809 = FB.ui(inst_34807,inst_34808);var state_34819__$1 = state_34819;var statearr_34824_34843 = state_34819__$1;(statearr_34824_34843[2] = inst_34809);
(statearr_34824_34843[1] = 8);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34820 === 5))
{var inst_34775 = (state_34819[8]);var inst_34773 = (state_34819[9]);var inst_34771 = (state_34819[10]);var inst_34792 = (state_34819[2]);var inst_34793 = [cljs.core.constant$keyword$242,cljs.core.constant$keyword$145,cljs.core.constant$keyword$189,cljs.core.constant$keyword$244,cljs.core.constant$keyword$245,cljs.core.constant$keyword$246];var inst_34794 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_34792);var inst_34795 = cljs.core.first(inst_34794);var inst_34796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inst_34795,1);var inst_34797 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_34792);var inst_34798 = cljs.core.last(inst_34797);var inst_34799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inst_34798,1);var inst_34800 = [modern_cljs.click.gameid,inst_34771,inst_34773,inst_34775,inst_34796,inst_34799];var inst_34801 = (cljs.core.PersistentHashMap.fromArrays.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentHashMap.fromArrays.cljs$core$IFn$_invoke$arity$2(inst_34793,inst_34800) : cljs.core.PersistentHashMap.fromArrays.call(null,inst_34793,inst_34800));var inst_34802 = modern_cljs.model.addClickxLink(inst_34801);var state_34819__$1 = (function (){var statearr_34825 = state_34819;(statearr_34825[12] = inst_34802);
return statearr_34825;
})();if(cljs.core.truth_(modern_cljs.click.inFacebook))
{var statearr_34826_34844 = state_34819__$1;(statearr_34826_34844[1] = 6);
} else
{var statearr_34827_34845 = state_34819__$1;(statearr_34827_34845[1] = 7);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_34820 === 4))
{var inst_34817 = (state_34819[2]);var state_34819__$1 = state_34819;return cljs.core.async.impl.ioc_helpers.return_chan(state_34819__$1,inst_34817);
} else
{if((state_val_34820 === 3))
{var state_34819__$1 = state_34819;var statearr_34828_34846 = state_34819__$1;(statearr_34828_34846[2] = false);
(statearr_34828_34846[1] = 4);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34820 === 2))
{var inst_34776 = (state_34819[11]);var inst_34783 = ["#successalert"];var inst_34784 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_34783,null));var inst_34785 = enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["hidden"], 0));var inst_34786 = enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(inst_34784,cljs.core.array_seq([inst_34785], 0));var inst_34787 = ["#linkForm"];var inst_34788 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_34787,null));var inst_34789 = enfocus.core.add_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["hidden"], 0));var inst_34790 = enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(inst_34788,cljs.core.array_seq([inst_34789], 0));var state_34819__$1 = (function (){var statearr_34829 = state_34819;(statearr_34829[13] = inst_34790);
(statearr_34829[14] = inst_34786);
return statearr_34829;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34819__$1,5,inst_34776);
} else
{if((state_val_34820 === 1))
{var inst_34775 = (state_34819[8]);var inst_34773 = (state_34819[9]);var inst_34771 = (state_34819[10]);var inst_34776 = (state_34819[11]);var inst_34770 = document.getElementById("descriptionInput");var inst_34771__$1 = inst_34770.value;var inst_34772 = document.getElementById("linkInput");var inst_34773__$1 = inst_34772.value;var inst_34774 = document.getElementById("noClicksInput");var inst_34775__$1 = inst_34774.value;var inst_34776__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var inst_34777 = modern_cljs.model.graphQuery(inst_34776__$1,"/v2.1/me?fields=name");var inst_34778 = modern_cljs.click.descriptionValidation(inst_34771__$1);var inst_34779 = modern_cljs.click.linkValidation(inst_34773__$1);var inst_34780 = modern_cljs.click.noClicksValidation(inst_34775__$1);var inst_34781 = (inst_34778) && (inst_34779) && (inst_34780);var state_34819__$1 = (function (){var statearr_34830 = state_34819;(statearr_34830[8] = inst_34775__$1);
(statearr_34830[9] = inst_34773__$1);
(statearr_34830[10] = inst_34771__$1);
(statearr_34830[11] = inst_34776__$1);
(statearr_34830[15] = inst_34777);
return statearr_34830;
})();if(cljs.core.truth_(inst_34781))
{var statearr_34831_34847 = state_34819__$1;(statearr_34831_34847[1] = 2);
} else
{var statearr_34832_34848 = state_34819__$1;(statearr_34832_34848[1] = 3);
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
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_34836 = (new Array(16));(statearr_34836[0] = state_machine__6724__auto__);
(statearr_34836[1] = 1);
return statearr_34836;
});
var state_machine__6724__auto____1 = (function (state_34819){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_34819);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$174))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e34837){if((e34837 instanceof Object))
{var ex__6727__auto__ = e34837;var statearr_34838_34849 = state_34819;(statearr_34838_34849[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34819);
return cljs.core.constant$keyword$174;
} else
{if(cljs.core.constant$keyword$129)
{throw e34837;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$174))
{{
var G__34850 = state_34819;
state_34819 = G__34850;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_34819){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_34819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_34839 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_34839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto___34840);
return statearr_34839;
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
return FB.login((function (p1__34851_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(initchan,p1__34851_SHARP_.status);
}),(function (){var obj34855 = {"scope":""};return obj34855;
})());
});
modern_cljs.click.showFacebookConnect = (function showFacebookConnect(){modern_cljs.click.preLogin();
modern_cljs.click.loadingStop();
return alert("Please connect with Facebook to use this service!");
});
modern_cljs.click.facebookInit = (function facebookInit(initchan){initfacebook(modern_cljs.click.clickxid,(function (p1__34856_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(initchan,p1__34856_SHARP_.status);
}),"");
return (function (){return goog.events.listen(goog.dom.getElement("prelogin"),"click",(function (){return modern_cljs.click.authenticate(initchan);
}));
}).call(null);
});
modern_cljs.click.authStateCheck = (function authStateCheck(initchan){var c__6793__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_34953){var state_val_34954 = (state_34953[1]);if((state_val_34954 === 1))
{var state_34953__$1 = state_34953;var statearr_34955_34983 = state_34953__$1;(statearr_34955_34983[2] = null);
(statearr_34955_34983[1] = 2);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34954 === 2))
{var state_34953__$1 = state_34953;if(true)
{var statearr_34956_34984 = state_34953__$1;(statearr_34956_34984[1] = 4);
} else
{var statearr_34957_34985 = state_34953__$1;(statearr_34957_34985[1] = 5);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_34954 === 3))
{var inst_34951 = (state_34953[2]);var state_34953__$1 = state_34953;return cljs.core.async.impl.ioc_helpers.return_chan(state_34953__$1,inst_34951);
} else
{if((state_val_34954 === 4))
{var state_34953__$1 = state_34953;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34953__$1,7,initchan);
} else
{if((state_val_34954 === 5))
{var state_34953__$1 = state_34953;var statearr_34958_34986 = state_34953__$1;(statearr_34958_34986[2] = null);
(statearr_34958_34986[1] = 6);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34954 === 6))
{var inst_34949 = (state_34953[2]);var state_34953__$1 = state_34953;var statearr_34959_34987 = state_34953__$1;(statearr_34959_34987[2] = inst_34949);
(statearr_34959_34987[1] = 3);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34954 === 7))
{var inst_34923 = (state_34953[7]);var inst_34923__$1 = (state_34953[2]);var inst_34924 = [cljs.core.str(inst_34923__$1)].join('');var inst_34925 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34924,"connected");var state_34953__$1 = (function (){var statearr_34960 = state_34953;(statearr_34960[7] = inst_34923__$1);
return statearr_34960;
})();if(inst_34925)
{var statearr_34961_34988 = state_34953__$1;(statearr_34961_34988[1] = 8);
} else
{var statearr_34962_34989 = state_34953__$1;(statearr_34962_34989[1] = 9);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_34954 === 8))
{var inst_34927 = modern_cljs.click.clickxLinks();var inst_34928 = modern_cljs.click.showLinkForm();var inst_34929 = modern_cljs.click.postLogin();var inst_34930 = modern_cljs.click.initValidation();var state_34953__$1 = (function (){var statearr_34963 = state_34953;(statearr_34963[8] = inst_34929);
(statearr_34963[9] = inst_34927);
(statearr_34963[10] = inst_34928);
return statearr_34963;
})();var statearr_34964_34990 = state_34953__$1;(statearr_34964_34990[2] = inst_34930);
(statearr_34964_34990[1] = 10);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34954 === 9))
{var inst_34923 = (state_34953[7]);var inst_34932 = [cljs.core.str(inst_34923)].join('');var inst_34933 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34932,"not_authorized");var state_34953__$1 = state_34953;if(inst_34933)
{var statearr_34965_34991 = state_34953__$1;(statearr_34965_34991[1] = 11);
} else
{var statearr_34966_34992 = state_34953__$1;(statearr_34966_34992[1] = 12);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_34954 === 10))
{var inst_34945 = (state_34953[2]);var state_34953__$1 = (function (){var statearr_34967 = state_34953;(statearr_34967[11] = inst_34945);
return statearr_34967;
})();var statearr_34968_34993 = state_34953__$1;(statearr_34968_34993[2] = null);
(statearr_34968_34993[1] = 2);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34954 === 11))
{var inst_34935 = modern_cljs.click.showFacebookConnect();var state_34953__$1 = state_34953;var statearr_34969_34994 = state_34953__$1;(statearr_34969_34994[2] = inst_34935);
(statearr_34969_34994[1] = 13);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34954 === 12))
{var state_34953__$1 = state_34953;if(cljs.core.constant$keyword$129)
{var statearr_34970_34995 = state_34953__$1;(statearr_34970_34995[1] = 14);
} else
{var statearr_34971_34996 = state_34953__$1;(statearr_34971_34996[1] = 15);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_34954 === 13))
{var inst_34943 = (state_34953[2]);var state_34953__$1 = state_34953;var statearr_34972_34997 = state_34953__$1;(statearr_34972_34997[2] = inst_34943);
(statearr_34972_34997[1] = 10);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34954 === 14))
{var inst_34938 = modern_cljs.click.showFacebookConnect();var state_34953__$1 = state_34953;var statearr_34973_34998 = state_34953__$1;(statearr_34973_34998[2] = inst_34938);
(statearr_34973_34998[1] = 16);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34954 === 15))
{var state_34953__$1 = state_34953;var statearr_34974_34999 = state_34953__$1;(statearr_34974_34999[2] = null);
(statearr_34974_34999[1] = 16);
return cljs.core.constant$keyword$174;
} else
{if((state_val_34954 === 16))
{var inst_34941 = (state_34953[2]);var state_34953__$1 = state_34953;var statearr_34975_35000 = state_34953__$1;(statearr_34975_35000[2] = inst_34941);
(statearr_34975_35000[1] = 13);
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
var state_machine__6724__auto____0 = (function (){var statearr_34979 = (new Array(12));(statearr_34979[0] = state_machine__6724__auto__);
(statearr_34979[1] = 1);
return statearr_34979;
});
var state_machine__6724__auto____1 = (function (state_34953){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_34953);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$174))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e34980){if((e34980 instanceof Object))
{var ex__6727__auto__ = e34980;var statearr_34981_35001 = state_34953;(statearr_34981_35001[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34953);
return cljs.core.constant$keyword$174;
} else
{if(cljs.core.constant$keyword$129)
{throw e34980;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$174))
{{
var G__35002 = state_34953;
state_34953 = G__35002;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_34953){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_34953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_34982 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_34982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto__);
return statearr_34982;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return c__6793__auto__;
});
modern_cljs.click.inviteFriends = (function inviteFriends(){return FB.ui((function (){var obj35006 = {"method":"apprequests","message":[cljs.core.str("Come give and recieve "),cljs.core.str(modern_cljs.click.gamename),cljs.core.str(" links!")].join(''),"to":""};return obj35006;
})(),(function (){return cljs.core.List.EMPTY;
}));
});
goog.exportSymbol('modern_cljs.click.inviteFriends', modern_cljs.click.inviteFriends);
modern_cljs.click.recordClick = (function recordClick(link,friendid){var c__6793__auto___35091 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__6794__auto__ = (function (){var switch__6723__auto__ = (function (state_35073){var state_val_35074 = (state_35073[1]);if((state_val_35074 === 8))
{var inst_35049 = (state_35073[7]);var inst_35061 = (state_35073[2]);var inst_35062 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_35061);var inst_35063 = cljs.core.first(inst_35062);var inst_35064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inst_35063,1);var inst_35065 = [cljs.core.str(inst_35064),cljs.core.str(" just clicked your link, come and return the favour!")].join('');var inst_35066 = {"method":"apprequests","message":inst_35065,"to":friendid};var inst_35067 = (function (){var graphChan = inst_35049;return ((function (graphChan,inst_35049,inst_35061,inst_35062,inst_35063,inst_35064,inst_35065,inst_35066,state_val_35074){
return (function (){return cljs.core.List.EMPTY;
});
;})(graphChan,inst_35049,inst_35061,inst_35062,inst_35063,inst_35064,inst_35065,inst_35066,state_val_35074))
})();var inst_35068 = FB.ui(inst_35066,inst_35067);var state_35073__$1 = state_35073;var statearr_35075_35092 = state_35073__$1;(statearr_35075_35092[2] = inst_35068);
(statearr_35075_35092[1] = 7);
return cljs.core.constant$keyword$174;
} else
{if((state_val_35074 === 7))
{var inst_35071 = (state_35073[2]);var state_35073__$1 = state_35073;return cljs.core.async.impl.ioc_helpers.return_chan(state_35073__$1,inst_35071);
} else
{if((state_val_35074 === 6))
{var state_35073__$1 = state_35073;var statearr_35076_35093 = state_35073__$1;(statearr_35076_35093[2] = null);
(statearr_35076_35093[1] = 7);
return cljs.core.constant$keyword$174;
} else
{if((state_val_35074 === 5))
{var inst_35049 = (state_35073[7]);var state_35073__$1 = state_35073;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35073__$1,8,inst_35049);
} else
{if((state_val_35074 === 4))
{var inst_35056 = (state_35073[2]);var state_35073__$1 = state_35073;if(cljs.core.truth_(inst_35056))
{var statearr_35077_35094 = state_35073__$1;(statearr_35077_35094[1] = 5);
} else
{var statearr_35078_35095 = state_35073__$1;(statearr_35078_35095[1] = 6);
}
return cljs.core.constant$keyword$174;
} else
{if((state_val_35074 === 3))
{var inst_35052 = (state_35073[8]);var state_35073__$1 = state_35073;var statearr_35079_35096 = state_35073__$1;(statearr_35079_35096[2] = inst_35052);
(statearr_35079_35096[1] = 4);
return cljs.core.constant$keyword$174;
} else
{if((state_val_35074 === 2))
{var state_35073__$1 = state_35073;var statearr_35080_35097 = state_35073__$1;(statearr_35080_35097[2] = modern_cljs.click.inFacebook);
(statearr_35080_35097[1] = 4);
return cljs.core.constant$keyword$174;
} else
{if((state_val_35074 === 1))
{var inst_35052 = (state_35073[8]);var inst_35049 = (state_35073[7]);var inst_35049__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var inst_35050 = modern_cljs.model.graphQuery(inst_35049__$1,"/v2.1/me?fields=name");var inst_35051 = cljs.core.rand_int(4);var inst_35052__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35051,1);var state_35073__$1 = (function (){var statearr_35081 = state_35073;(statearr_35081[9] = inst_35050);
(statearr_35081[8] = inst_35052__$1);
(statearr_35081[7] = inst_35049__$1);
return statearr_35081;
})();if(inst_35052__$1)
{var statearr_35082_35098 = state_35073__$1;(statearr_35082_35098[1] = 2);
} else
{var statearr_35083_35099 = state_35073__$1;(statearr_35083_35099[1] = 3);
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
});return ((function (switch__6723__auto__){
return (function() {
var state_machine__6724__auto__ = null;
var state_machine__6724__auto____0 = (function (){var statearr_35087 = (new Array(10));(statearr_35087[0] = state_machine__6724__auto__);
(statearr_35087[1] = 1);
return statearr_35087;
});
var state_machine__6724__auto____1 = (function (state_35073){while(true){
var ret_value__6725__auto__ = (function (){try{while(true){
var result__6726__auto__ = switch__6723__auto__(state_35073);if(cljs.core.keyword_identical_QMARK_(result__6726__auto__,cljs.core.constant$keyword$174))
{{
continue;
}
} else
{return result__6726__auto__;
}
break;
}
}catch (e35088){if((e35088 instanceof Object))
{var ex__6727__auto__ = e35088;var statearr_35089_35100 = state_35073;(statearr_35089_35100[5] = ex__6727__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_35073);
return cljs.core.constant$keyword$174;
} else
{if(cljs.core.constant$keyword$129)
{throw e35088;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__6725__auto__,cljs.core.constant$keyword$174))
{{
var G__35101 = state_35073;
state_35073 = G__35101;
continue;
}
} else
{return ret_value__6725__auto__;
}
break;
}
});
state_machine__6724__auto__ = function(state_35073){
switch(arguments.length){
case 0:
return state_machine__6724__auto____0.call(this);
case 1:
return state_machine__6724__auto____1.call(this,state_35073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6724__auto____0;
state_machine__6724__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6724__auto____1;
return state_machine__6724__auto__;
})()
;})(switch__6723__auto__))
})();var state__6795__auto__ = (function (){var statearr_35090 = (f__6794__auto__.cljs$core$IFn$_invoke$arity$0 ? f__6794__auto__.cljs$core$IFn$_invoke$arity$0() : f__6794__auto__.call(null));(statearr_35090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6793__auto___35091);
return statearr_35090;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__6795__auto__);
}));
return modern_cljs.model.clickUpdate(link);
});
goog.exportSymbol('modern_cljs.click.recordClick', modern_cljs.click.recordClick);
modern_cljs.click.clickinit = (function clickinit(){var initchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(5);modern_cljs.click.facebookInit(initchan);
return modern_cljs.click.authStateCheck(initchan);
});
goog.exportSymbol('modern_cljs.click.clickinit', modern_cljs.click.clickinit);
