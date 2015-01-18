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
cljs.core.enable_console_print_BANG_();
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
modern_cljs.click.clickxLinks = (function clickxLinks(){var c__5967__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_34418){var state_val_34419 = (state_34418[1]);if((state_val_34419 === 1))
{var inst_34402 = modern_cljs.click.loadingStart();var inst_34403 = ["#instructions"];var inst_34404 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_34403,null));var inst_34405 = enfocus.core.html_content("");var inst_34406 = enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(inst_34404,cljs.core.array_seq([inst_34405], 0));var inst_34407 = ["#bonuseslivehere"];var inst_34408 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_34407,null));var inst_34409 = enfocus.core.html_content("");var inst_34410 = enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(inst_34408,cljs.core.array_seq([inst_34409], 0));var inst_34411 = (function (){return ((function (inst_34402,inst_34403,inst_34404,inst_34405,inst_34406,inst_34407,inst_34408,inst_34409,inst_34410,state_val_34419){
return (function (p1__34375_SHARP_){modern_cljs.click.appendObjects(p1__34375_SHARP_);
initDataTable();
return modern_cljs.click.loadingStop();
});
;})(inst_34402,inst_34403,inst_34404,inst_34405,inst_34406,inst_34407,inst_34408,inst_34409,inst_34410,state_val_34419))
})();var inst_34412 = modern_cljs.model.getLatestClickxLinks(modern_cljs.click.gameid,inst_34411);var inst_34413 = ["#bonushouse"];var inst_34414 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_34413,null));var inst_34415 = enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["hidden"], 0));var inst_34416 = enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(inst_34414,cljs.core.array_seq([inst_34415], 0));var state_34418__$1 = (function (){var statearr_34420 = state_34418;(statearr_34420[7] = inst_34402);
(statearr_34420[8] = inst_34412);
(statearr_34420[9] = inst_34410);
(statearr_34420[10] = inst_34406);
return statearr_34420;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_34418__$1,inst_34416);
} else
{return null;
}
});return ((function (switch__5897__auto__){
return (function() {
var state_machine__5898__auto__ = null;
var state_machine__5898__auto____0 = (function (){var statearr_34424 = (new Array(11));(statearr_34424[0] = state_machine__5898__auto__);
(statearr_34424[1] = 1);
return statearr_34424;
});
var state_machine__5898__auto____1 = (function (state_34418){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_34418);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$171))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e34425){if((e34425 instanceof Object))
{var ex__5901__auto__ = e34425;var statearr_34426_34428 = state_34418;(statearr_34426_34428[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34418);
return cljs.core.constant$keyword$171;
} else
{if(cljs.core.constant$keyword$126)
{throw e34425;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$171))
{{
var G__34429 = state_34418;
state_34418 = G__34429;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_34418){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_34418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_34427 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_34427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto__);
return statearr_34427;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5969__auto__);
}));
return c__5967__auto__;
});
goog.exportSymbol('modern_cljs.click.clickxLinks', modern_cljs.click.clickxLinks);
modern_cljs.click.friendsFromBonuses = (function friendsFromBonuses(bonuses){return cljs.core.clj__GT_js(cljs.core.distinct(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__34430_SHARP_,p2__34431_SHARP_){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__34430_SHARP_,(p2__34431_SHARP_["actor_id"]));
}),cljs.core.PersistentVector.EMPTY,bonuses)));
});
modern_cljs.click.requestToFriends = (function requestToFriends(friends){return FB.ui((function (){var obj34435 = {"method":"apprequests","message":[cljs.core.str("I just collected some "),cljs.core.str(modern_cljs.click.gamename),cljs.core.str(" bonuses!")].join(''),"to":friends};return obj34435;
})(),(function (){return cljs.core.List.EMPTY;
}));
});
modern_cljs.click.getRawBonuses = (function getRawBonuses(c){return modern_cljs.model.fqlquerytemplate(c,modern_cljs.model.bonusfqlquery(modern_cljs.click.gameid));
});
modern_cljs.click.noncookie = (function noncookie(binarysplit){return cljs.core.nth.cljs$core$IFn$_invoke$arity$2((modern_cljs.click.select_values.cljs$core$IFn$_invoke$arity$2 ? modern_cljs.click.select_values.cljs$core$IFn$_invoke$arity$2(binarysplit,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null)) : modern_cljs.click.select_values.call(null,binarysplit,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null))),0);
});
modern_cljs.click.cookie = (function cookie(binarysplit){return cljs.core.nth.cljs$core$IFn$_invoke$arity$2((modern_cljs.click.select_values.cljs$core$IFn$_invoke$arity$2 ? modern_cljs.click.select_values.cljs$core$IFn$_invoke$arity$2(binarysplit,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null)) : modern_cljs.click.select_values.call(null,binarysplit,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null))),0);
});
modern_cljs.click.bonuslistener = (function bonuslistener(bonus,postid){enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(bonus)].join('')], null),cljs.core.array_seq([enfocus.core.set_attr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$237,"border: 5px solid #05BE0C;"], 0))], 0));
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
modern_cljs.click.descriptionValidation = (function descriptionValidation(description){if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(description,""))
{enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#descriptionInputDiv"], null),cljs.core.array_seq([enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["has-error"], 0))], 0));
enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#descriptionInputDiv"], null),cljs.core.array_seq([enfocus.core.add_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["has-success"], 0))], 0));
return true;
} else
{enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#descriptionInputDiv"], null),cljs.core.array_seq([enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["has-success"], 0))], 0));
enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#descriptionInputDiv"], null),cljs.core.array_seq([enfocus.core.add_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["has-error"], 0))], 0));
alert("Please enter a short description");
return false;
}
});
modern_cljs.click.validate_form = (function validate_form(){var description = document.getElementById("descriptionInput").value;var link = document.getElementById("linkInput").value;var clicks = document.getElementById("noClicksInput").value;if((modern_cljs.click.descriptionValidation(description)) && (modern_cljs.click.linkValidation(link)) && (modern_cljs.click.noClicksValidation(clicks)))
{enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#successalert"], null),cljs.core.array_seq([enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["hidden"], 0))], 0));
enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#linkForm"], null),cljs.core.array_seq([enfocus.core.add_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["hidden"], 0))], 0));
modern_cljs.model.addClickxLink(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$238,modern_cljs.click.gameid,cljs.core.constant$keyword$142,description,cljs.core.constant$keyword$186,link,cljs.core.constant$keyword$240,clicks], null));
return false;
} else
{return false;
}
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
return FB.login((function (p1__34436_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(initchan,p1__34436_SHARP_.status);
}),(function (){var obj34440 = {"scope":""};return obj34440;
})());
});
modern_cljs.click.showFacebookConnect = (function showFacebookConnect(){modern_cljs.click.preLogin();
modern_cljs.click.loadingStop();
return alert("Please connect with Facebook to use this service!");
});
modern_cljs.click.facebookInit = (function facebookInit(initchan){initfacebook(modern_cljs.click.clickxid,(function (p1__34441_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(initchan,p1__34441_SHARP_.status);
}),"");
return (function (){return goog.events.listen(goog.dom.getElement("prelogin"),"click",(function (){return modern_cljs.click.authenticate(initchan);
}));
}).call(null);
});
modern_cljs.click.authStateCheck = (function authStateCheck(initchan){var c__5967__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5968__auto__ = (function (){var switch__5897__auto__ = (function (state_34538){var state_val_34539 = (state_34538[1]);if((state_val_34539 === 1))
{var state_34538__$1 = state_34538;var statearr_34540_34568 = state_34538__$1;(statearr_34540_34568[2] = null);
(statearr_34540_34568[1] = 2);
return cljs.core.constant$keyword$171;
} else
{if((state_val_34539 === 2))
{var state_34538__$1 = state_34538;if(true)
{var statearr_34541_34569 = state_34538__$1;(statearr_34541_34569[1] = 4);
} else
{var statearr_34542_34570 = state_34538__$1;(statearr_34542_34570[1] = 5);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_34539 === 3))
{var inst_34536 = (state_34538[2]);var state_34538__$1 = state_34538;return cljs.core.async.impl.ioc_helpers.return_chan(state_34538__$1,inst_34536);
} else
{if((state_val_34539 === 4))
{var state_34538__$1 = state_34538;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34538__$1,7,initchan);
} else
{if((state_val_34539 === 5))
{var state_34538__$1 = state_34538;var statearr_34543_34571 = state_34538__$1;(statearr_34543_34571[2] = null);
(statearr_34543_34571[1] = 6);
return cljs.core.constant$keyword$171;
} else
{if((state_val_34539 === 6))
{var inst_34534 = (state_34538[2]);var state_34538__$1 = state_34538;var statearr_34544_34572 = state_34538__$1;(statearr_34544_34572[2] = inst_34534);
(statearr_34544_34572[1] = 3);
return cljs.core.constant$keyword$171;
} else
{if((state_val_34539 === 7))
{var inst_34508 = (state_34538[7]);var inst_34508__$1 = (state_34538[2]);var inst_34509 = [cljs.core.str(inst_34508__$1)].join('');var inst_34510 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34509,"connected");var state_34538__$1 = (function (){var statearr_34545 = state_34538;(statearr_34545[7] = inst_34508__$1);
return statearr_34545;
})();if(inst_34510)
{var statearr_34546_34573 = state_34538__$1;(statearr_34546_34573[1] = 8);
} else
{var statearr_34547_34574 = state_34538__$1;(statearr_34547_34574[1] = 9);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_34539 === 8))
{var inst_34512 = modern_cljs.click.clickxLinks();var inst_34513 = modern_cljs.click.showLinkForm();var inst_34514 = modern_cljs.click.postLogin();var inst_34515 = modern_cljs.click.initValidation();var state_34538__$1 = (function (){var statearr_34548 = state_34538;(statearr_34548[8] = inst_34512);
(statearr_34548[9] = inst_34513);
(statearr_34548[10] = inst_34514);
return statearr_34548;
})();var statearr_34549_34575 = state_34538__$1;(statearr_34549_34575[2] = inst_34515);
(statearr_34549_34575[1] = 10);
return cljs.core.constant$keyword$171;
} else
{if((state_val_34539 === 9))
{var inst_34508 = (state_34538[7]);var inst_34517 = [cljs.core.str(inst_34508)].join('');var inst_34518 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34517,"not_authorized");var state_34538__$1 = state_34538;if(inst_34518)
{var statearr_34550_34576 = state_34538__$1;(statearr_34550_34576[1] = 11);
} else
{var statearr_34551_34577 = state_34538__$1;(statearr_34551_34577[1] = 12);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_34539 === 10))
{var inst_34530 = (state_34538[2]);var state_34538__$1 = (function (){var statearr_34552 = state_34538;(statearr_34552[11] = inst_34530);
return statearr_34552;
})();var statearr_34553_34578 = state_34538__$1;(statearr_34553_34578[2] = null);
(statearr_34553_34578[1] = 2);
return cljs.core.constant$keyword$171;
} else
{if((state_val_34539 === 11))
{var inst_34520 = modern_cljs.click.showFacebookConnect();var state_34538__$1 = state_34538;var statearr_34554_34579 = state_34538__$1;(statearr_34554_34579[2] = inst_34520);
(statearr_34554_34579[1] = 13);
return cljs.core.constant$keyword$171;
} else
{if((state_val_34539 === 12))
{var state_34538__$1 = state_34538;if(cljs.core.constant$keyword$126)
{var statearr_34555_34580 = state_34538__$1;(statearr_34555_34580[1] = 14);
} else
{var statearr_34556_34581 = state_34538__$1;(statearr_34556_34581[1] = 15);
}
return cljs.core.constant$keyword$171;
} else
{if((state_val_34539 === 13))
{var inst_34528 = (state_34538[2]);var state_34538__$1 = state_34538;var statearr_34557_34582 = state_34538__$1;(statearr_34557_34582[2] = inst_34528);
(statearr_34557_34582[1] = 10);
return cljs.core.constant$keyword$171;
} else
{if((state_val_34539 === 14))
{var inst_34523 = modern_cljs.click.showFacebookConnect();var state_34538__$1 = state_34538;var statearr_34558_34583 = state_34538__$1;(statearr_34558_34583[2] = inst_34523);
(statearr_34558_34583[1] = 16);
return cljs.core.constant$keyword$171;
} else
{if((state_val_34539 === 15))
{var state_34538__$1 = state_34538;var statearr_34559_34584 = state_34538__$1;(statearr_34559_34584[2] = null);
(statearr_34559_34584[1] = 16);
return cljs.core.constant$keyword$171;
} else
{if((state_val_34539 === 16))
{var inst_34526 = (state_34538[2]);var state_34538__$1 = state_34538;var statearr_34560_34585 = state_34538__$1;(statearr_34560_34585[2] = inst_34526);
(statearr_34560_34585[1] = 13);
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
var state_machine__5898__auto____0 = (function (){var statearr_34564 = (new Array(12));(statearr_34564[0] = state_machine__5898__auto__);
(statearr_34564[1] = 1);
return statearr_34564;
});
var state_machine__5898__auto____1 = (function (state_34538){while(true){
var ret_value__5899__auto__ = (function (){try{while(true){
var result__5900__auto__ = switch__5897__auto__(state_34538);if(cljs.core.keyword_identical_QMARK_(result__5900__auto__,cljs.core.constant$keyword$171))
{{
continue;
}
} else
{return result__5900__auto__;
}
break;
}
}catch (e34565){if((e34565 instanceof Object))
{var ex__5901__auto__ = e34565;var statearr_34566_34586 = state_34538;(statearr_34566_34586[5] = ex__5901__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_34538);
return cljs.core.constant$keyword$171;
} else
{if(cljs.core.constant$keyword$126)
{throw e34565;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5899__auto__,cljs.core.constant$keyword$171))
{{
var G__34587 = state_34538;
state_34538 = G__34587;
continue;
}
} else
{return ret_value__5899__auto__;
}
break;
}
});
state_machine__5898__auto__ = function(state_34538){
switch(arguments.length){
case 0:
return state_machine__5898__auto____0.call(this);
case 1:
return state_machine__5898__auto____1.call(this,state_34538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5898__auto____0;
state_machine__5898__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5898__auto____1;
return state_machine__5898__auto__;
})()
;})(switch__5897__auto__))
})();var state__5969__auto__ = (function (){var statearr_34567 = (f__5968__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5968__auto__.cljs$core$IFn$_invoke$arity$0() : f__5968__auto__.call(null));(statearr_34567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5967__auto__);
return statearr_34567;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5969__auto__);
}));
return c__5967__auto__;
});
modern_cljs.click.recordClick = (function recordClick(link){return modern_cljs.model.clickUpdate(link);
});
goog.exportSymbol('modern_cljs.click.recordClick', modern_cljs.click.recordClick);
modern_cljs.click.clickinit = (function clickinit(){var initchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(5);modern_cljs.click.facebookInit(initchan);
return modern_cljs.click.authStateCheck(initchan);
});
goog.exportSymbol('modern_cljs.click.clickinit', modern_cljs.click.clickinit);
