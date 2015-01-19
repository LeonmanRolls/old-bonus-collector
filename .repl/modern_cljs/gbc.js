// Compiled by ClojureScript 0.0-2069
goog.provide('modern_cljs.gbc');
goog.require('cljs.core');
goog.require('shoreleave.remotes.http_rpc');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('enfocus.core');
goog.require('cemerick.cljs.test');
goog.require('modern_cljs.model');
goog.require('goog.events');
goog.require('cljs.reader');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('enfocus.core');
goog.require('modern_cljs.views');
goog.require('enfocus.effects');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('modern_cljs.model');
goog.require('modern_cljs.views');
goog.require('cljs.core.async');
goog.require('enfocus.effects');
goog.require('goog.events');
goog.require('cemerick.cljs.test');
goog.require('jayq.core');
goog.require('shoreleave.remotes.http_rpc');
modern_cljs.gbc.appid = "204856109724967";
modern_cljs.gbc.gameid = (window.serverdata["gameid"]);
modern_cljs.gbc.gamename = (window.serverdata["gamename"]);
modern_cljs.gbc.loadingStart = (function loadingStart(){return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#loadingdiv"], null),enfocus.core.remove_class.call(null,"hidden"));
});
modern_cljs.gbc.loadingStop = (function loadingStop(){return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#loadingdiv"], null),enfocus.core.add_class.call(null,"hidden"));
});
modern_cljs.gbc.postLogin = (function postLogin(){enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#postlogin"], null),enfocus.core.remove_class.call(null,"hidden"));
return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#prelogin"], null),enfocus.core.add_class.call(null,"hidden"));
});
modern_cljs.gbc.preLogin = (function preLogin(){return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#prelogin"], null),enfocus.core.remove_class.call(null,"hidden"));
});
modern_cljs.gbc.appendBonuses = (function appendBonuses(stringOfListItems){return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#bonuseslivehere"], null),enfocus.core.append.call(null,stringOfListItems));
});
modern_cljs.gbc.appendCollectedAlready = (function appendCollectedAlready(stringOfListItems){return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#collectedalready"], null),enfocus.core.append.call(null,stringOfListItems));
});
modern_cljs.gbc.login = (function login(bonuschan,scope){enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#fbconnectanchor"], null),enfocus.core.remove_class.call(null,"hidden"));
return FB.login((function (p1__17954_SHARP_){return cljs.core.async.put_BANG_.call(null,bonuschan,p1__17954_SHARP_.status);
}),scope);
});
modern_cljs.gbc.noBonusAlert = (function noBonusAlert(){return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#nobonusalert"], null),enfocus.core.remove_class.call(null,"hidden"));
});
modern_cljs.gbc.morelinks = (function morelinks(){return modern_cljs.gbc.loadingStart.call(null).call(null,jayq.core.empty.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#bonuseslivehere","#bonuseslivehere",2617489368))),modern_cljs.model.getLatestLinks.call(null,modern_cljs.gbc.gameid,(function (p1__17955_SHARP_){return modern_cljs.gbc.appendBonuses.call(null,p1__17955_SHARP_,modern_cljs.gbc.loadingStop.call(null));
})));
});
modern_cljs.gbc.friendsFromBonuses = (function friendsFromBonuses(bonuses){return cljs.core.clj__GT_js.call(null,cljs.core.distinct.call(null,cljs.core.reduce.call(null,(function (p1__17956_SHARP_,p2__17957_SHARP_){return cljs.core.conj.call(null,p1__17956_SHARP_,(p2__17957_SHARP_["actor_id"]));
}),cljs.core.PersistentVector.EMPTY,bonuses)));
});
modern_cljs.gbc.requestToFriends = (function requestToFriends(friends){return FB.ui((function (){var obj17962 = {"method":"apprequests","message":[cljs.core.str("I just collected some "),cljs.core.str(modern_cljs.gbc.gamename),cljs.core.str("bonuses!")].join(''),"to":friends};return obj17962;
})(),(function (p1__17958_SHARP_){return console.log(p1__17958_SHARP_);
}));
});
modern_cljs.gbc.noRecentlyCollectedBonuses = (function noRecentlyCollectedBonuses(){return enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#collectedalready"], null),enfocus.core.append.call(null,"You haven't collected any bonuses recently \n                                    (or you cleared your cookies)!"));
});
modern_cljs.gbc.splitQueryResult = (function splitQueryResult(queryResult){return cljs.core.vals.call(null,cljs.core.group_by.call(null,(function (p1__17963_SHARP_){return (localStorage.getItem((p1__17963_SHARP_["post_id"])) > 0);
}),queryResult));
});
modern_cljs.gbc.getbonuses = (function getbonuses(){var c = cljs.core.async.chan.call(null);var c__13026__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13027__auto__ = (function (){var switch__12956__auto__ = (function (state_18052){var state_val_18053 = (state_18052[1]);if((state_val_18053 === 8))
{var inst_18050 = (state_18052[2]);var state_18052__$1 = state_18052;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18052__$1,inst_18050);
} else
{if((state_val_18053 === 7))
{var inst_18021 = (state_18052[7]);var inst_18045 = cljs.core.nth.call(null,inst_18021,1);var inst_18046 = cljs.core.clj__GT_js.call(null,inst_18045);var inst_18047 = cljs.core.reduce.call(null,modern_cljs.views.bonuspolaroid,"",inst_18046);var inst_18048 = modern_cljs.gbc.appendCollectedAlready.call(null,inst_18047);var state_18052__$1 = state_18052;var statearr_18054_18072 = state_18052__$1;(statearr_18054_18072[2] = inst_18048);
(statearr_18054_18072[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18053 === 6))
{var inst_18043 = modern_cljs.gbc.noRecentlyCollectedBonuses.call(null);var state_18052__$1 = state_18052;var statearr_18055_18073 = state_18052__$1;(statearr_18055_18073[2] = inst_18043);
(statearr_18055_18073[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18053 === 5))
{var inst_18021 = (state_18052[7]);var inst_18039 = (state_18052[2]);var inst_18040 = cljs.core.count.call(null,inst_18021);var inst_18041 = cljs.core._EQ_.call(null,1,inst_18040);var state_18052__$1 = (function (){var statearr_18056 = state_18052;(statearr_18056[8] = inst_18039);
return statearr_18056;
})();if(inst_18041)
{var statearr_18057_18074 = state_18052__$1;(statearr_18057_18074[1] = 6);
} else
{var statearr_18058_18075 = state_18052__$1;(statearr_18058_18075[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18053 === 4))
{var inst_18021 = (state_18052[7]);var inst_18034 = cljs.core.nth.call(null,inst_18021,0);var inst_18035 = cljs.core.clj__GT_js.call(null,inst_18034);var inst_18036 = cljs.core.reduce.call(null,modern_cljs.views.bonuspolaroid,"",inst_18035);var inst_18037 = modern_cljs.gbc.appendBonuses.call(null,inst_18036);var state_18052__$1 = state_18052;var statearr_18059_18076 = state_18052__$1;(statearr_18059_18076[2] = inst_18037);
(statearr_18059_18076[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18053 === 3))
{var inst_18030 = modern_cljs.gbc.morelinks.call(null);var inst_18031 = modern_cljs.gbc.noBonusAlert.call(null);var inst_18032 = inst_18030.call(null,inst_18031);var state_18052__$1 = state_18052;var statearr_18060_18077 = state_18052__$1;(statearr_18060_18077[2] = inst_18032);
(statearr_18060_18077[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18053 === 2))
{var inst_18021 = (state_18052[7]);var inst_18020 = (state_18052[2]);var inst_18021__$1 = modern_cljs.gbc.splitQueryResult.call(null,inst_18020);var inst_18022 = modern_cljs.gbc.loadingStop.call(null);var inst_18023 = modern_cljs.gbc.postLogin.call(null);var inst_18024 = cljs.core.nth.call(null,inst_18021__$1,0);var inst_18025 = modern_cljs.gbc.friendsFromBonuses.call(null,inst_18024);var inst_18026 = modern_cljs.gbc.requestToFriends.call(null,inst_18025);var inst_18027 = cljs.core.nth.call(null,inst_18021__$1,0);var inst_18028 = cljs.core.empty_QMARK_.call(null,inst_18027);var state_18052__$1 = (function (){var statearr_18061 = state_18052;(statearr_18061[7] = inst_18021__$1);
(statearr_18061[9] = inst_18026);
(statearr_18061[10] = inst_18023);
(statearr_18061[11] = inst_18022);
return statearr_18061;
})();if(inst_18028)
{var statearr_18062_18078 = state_18052__$1;(statearr_18062_18078[1] = 3);
} else
{var statearr_18063_18079 = state_18052__$1;(statearr_18063_18079[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18053 === 1))
{var inst_18018 = modern_cljs.model.bonusquery.call(null,c,modern_cljs.gbc.gameid);var state_18052__$1 = (function (){var statearr_18064 = state_18052;(statearr_18064[12] = inst_18018);
return statearr_18064;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18052__$1,2,c);
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
});return ((function (switch__12956__auto__){
return (function() {
var state_machine__12957__auto__ = null;
var state_machine__12957__auto____0 = (function (){var statearr_18068 = (new Array(13));(statearr_18068[0] = state_machine__12957__auto__);
(statearr_18068[1] = 1);
return statearr_18068;
});
var state_machine__12957__auto____1 = (function (state_18052){while(true){
var ret_value__12958__auto__ = (function (){try{while(true){
var result__12959__auto__ = switch__12956__auto__.call(null,state_18052);if(cljs.core.keyword_identical_QMARK_.call(null,result__12959__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12959__auto__;
}
break;
}
}catch (e18069){if((e18069 instanceof Object))
{var ex__12960__auto__ = e18069;var statearr_18070_18080 = state_18052;(statearr_18070_18080[5] = ex__12960__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18052);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18069;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12958__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18081 = state_18052;
state_18052 = G__18081;
continue;
}
} else
{return ret_value__12958__auto__;
}
break;
}
});
state_machine__12957__auto__ = function(state_18052){
switch(arguments.length){
case 0:
return state_machine__12957__auto____0.call(this);
case 1:
return state_machine__12957__auto____1.call(this,state_18052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12957__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12957__auto____0;
state_machine__12957__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12957__auto____1;
return state_machine__12957__auto__;
})()
;})(switch__12956__auto__))
})();var state__13028__auto__ = (function (){var statearr_18071 = f__13027__auto__.call(null);(statearr_18071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13026__auto__);
return statearr_18071;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13028__auto__);
}));
return c__13026__auto__;
});
modern_cljs.gbc.bonuslistener = (function bonuslistener(bonus,postid){enfocus.core.at.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("#"),cljs.core.str(bonus)].join('')], null),enfocus.core.set_attr.call(null,new cljs.core.Keyword(null,"style","style",1123684643),"border: 3px solid #05BE0C;"));
return localStorage.setItem([cljs.core.str(bonus)].join(''),moment().unix());
});
modern_cljs.gbc.listen = (function listen(el,type,out){goog.events.listen(el,type,(function (e){return cljs.core.async.put_BANG_.call(null,out,(function (){var obj18085 = {"scope":"email, read_stream, publish_actions"};return obj18085;
})());
}));
return out;
});
modern_cljs.gbc.gbcinit = (function gbcinit(){var initchan = cljs.core.async.chan.call(null);var bonuschan = cljs.core.async.chan.call(null);var loginchan = cljs.core.async.chan.call(null);var clicks_18277 = modern_cljs.gbc.listen.call(null,goog.dom.getElement("prelogin"),"click",loginchan);initfacebook(modern_cljs.gbc.appid,(function (p1__18086_SHARP_){return cljs.core.async.put_BANG_.call(null,initchan,p1__18086_SHARP_);
}));
var c__13026__auto___18278 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13027__auto__ = (function (){var switch__12956__auto__ = (function (state_18194){var state_val_18195 = (state_18194[1]);if((state_val_18195 === 7))
{var inst_18185 = (state_18194[2]);var inst_18186 = modern_cljs.gbc.login.call(null,bonuschan,inst_18185);var state_18194__$1 = (function (){var statearr_18196 = state_18194;(statearr_18196[7] = inst_18186);
return statearr_18196;
})();var statearr_18197_18279 = state_18194__$1;(statearr_18197_18279[2] = null);
(statearr_18197_18279[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18195 === 6))
{var inst_18190 = (state_18194[2]);var state_18194__$1 = state_18194;var statearr_18198_18280 = state_18194__$1;(statearr_18198_18280[2] = inst_18190);
(statearr_18198_18280[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18195 === 5))
{var state_18194__$1 = state_18194;var statearr_18199_18281 = state_18194__$1;(statearr_18199_18281[2] = null);
(statearr_18199_18281[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18195 === 4))
{var state_18194__$1 = state_18194;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18194__$1,7,clicks_18277);
} else
{if((state_val_18195 === 3))
{var inst_18192 = (state_18194[2]);var state_18194__$1 = state_18194;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18194__$1,inst_18192);
} else
{if((state_val_18195 === 2))
{var state_18194__$1 = state_18194;if(true)
{var statearr_18200_18282 = state_18194__$1;(statearr_18200_18282[1] = 4);
} else
{var statearr_18201_18283 = state_18194__$1;(statearr_18201_18283[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18195 === 1))
{var state_18194__$1 = state_18194;var statearr_18202_18284 = state_18194__$1;(statearr_18202_18284[2] = null);
(statearr_18202_18284[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__12956__auto__){
return (function() {
var state_machine__12957__auto__ = null;
var state_machine__12957__auto____0 = (function (){var statearr_18206 = (new Array(8));(statearr_18206[0] = state_machine__12957__auto__);
(statearr_18206[1] = 1);
return statearr_18206;
});
var state_machine__12957__auto____1 = (function (state_18194){while(true){
var ret_value__12958__auto__ = (function (){try{while(true){
var result__12959__auto__ = switch__12956__auto__.call(null,state_18194);if(cljs.core.keyword_identical_QMARK_.call(null,result__12959__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12959__auto__;
}
break;
}
}catch (e18207){if((e18207 instanceof Object))
{var ex__12960__auto__ = e18207;var statearr_18208_18285 = state_18194;(statearr_18208_18285[5] = ex__12960__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18194);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18207;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12958__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18286 = state_18194;
state_18194 = G__18286;
continue;
}
} else
{return ret_value__12958__auto__;
}
break;
}
});
state_machine__12957__auto__ = function(state_18194){
switch(arguments.length){
case 0:
return state_machine__12957__auto____0.call(this);
case 1:
return state_machine__12957__auto____1.call(this,state_18194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12957__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12957__auto____0;
state_machine__12957__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12957__auto____1;
return state_machine__12957__auto__;
})()
;})(switch__12956__auto__))
})();var state__13028__auto__ = (function (){var statearr_18209 = f__13027__auto__.call(null);(statearr_18209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13026__auto___18278);
return statearr_18209;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13028__auto__);
}));
var c__13026__auto___18287 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13027__auto__ = (function (){var switch__12956__auto__ = (function (state_18224){var state_val_18225 = (state_18224[1]);if((state_val_18225 === 5))
{var inst_18222 = (state_18224[2]);var state_18224__$1 = state_18224;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18224__$1,inst_18222);
} else
{if((state_val_18225 === 4))
{var inst_18218 = modern_cljs.gbc.preLogin.call(null);var inst_18219 = modern_cljs.gbc.loadingStop.call(null);var inst_18220 = inst_18218.call(null,inst_18219);var state_18224__$1 = state_18224;var statearr_18226_18288 = state_18224__$1;(statearr_18226_18288[2] = inst_18220);
(statearr_18226_18288[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18225 === 3))
{var inst_18216 = cljs.core.async.put_BANG_.call(null,bonuschan,"connected");var state_18224__$1 = state_18224;var statearr_18227_18289 = state_18224__$1;(statearr_18227_18289[2] = inst_18216);
(statearr_18227_18289[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18225 === 2))
{var inst_18211 = (state_18224[2]);var inst_18212 = inst_18211.status;var inst_18213 = [cljs.core.str(inst_18212)].join('');var inst_18214 = cljs.core._EQ_.call(null,"connected",inst_18213);var state_18224__$1 = state_18224;if(inst_18214)
{var statearr_18228_18290 = state_18224__$1;(statearr_18228_18290[1] = 3);
} else
{var statearr_18229_18291 = state_18224__$1;(statearr_18229_18291[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18225 === 1))
{var state_18224__$1 = state_18224;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18224__$1,2,initchan);
} else
{return null;
}
}
}
}
}
});return ((function (switch__12956__auto__){
return (function() {
var state_machine__12957__auto__ = null;
var state_machine__12957__auto____0 = (function (){var statearr_18233 = (new Array(7));(statearr_18233[0] = state_machine__12957__auto__);
(statearr_18233[1] = 1);
return statearr_18233;
});
var state_machine__12957__auto____1 = (function (state_18224){while(true){
var ret_value__12958__auto__ = (function (){try{while(true){
var result__12959__auto__ = switch__12956__auto__.call(null,state_18224);if(cljs.core.keyword_identical_QMARK_.call(null,result__12959__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12959__auto__;
}
break;
}
}catch (e18234){if((e18234 instanceof Object))
{var ex__12960__auto__ = e18234;var statearr_18235_18292 = state_18224;(statearr_18235_18292[5] = ex__12960__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18224);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18234;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12958__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18293 = state_18224;
state_18224 = G__18293;
continue;
}
} else
{return ret_value__12958__auto__;
}
break;
}
});
state_machine__12957__auto__ = function(state_18224){
switch(arguments.length){
case 0:
return state_machine__12957__auto____0.call(this);
case 1:
return state_machine__12957__auto____1.call(this,state_18224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12957__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12957__auto____0;
state_machine__12957__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12957__auto____1;
return state_machine__12957__auto__;
})()
;})(switch__12956__auto__))
})();var state__13028__auto__ = (function (){var statearr_18236 = f__13027__auto__.call(null);(statearr_18236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13026__auto___18287);
return statearr_18236;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13028__auto__);
}));
var c__13026__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13027__auto__ = (function (){var switch__12956__auto__ = (function (state_18257){var state_val_18258 = (state_18257[1]);if((state_val_18258 === 1))
{var state_18257__$1 = state_18257;var statearr_18259_18294 = state_18257__$1;(statearr_18259_18294[2] = null);
(statearr_18259_18294[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18258 === 2))
{var state_18257__$1 = state_18257;if(true)
{var statearr_18260_18295 = state_18257__$1;(statearr_18260_18295[1] = 4);
} else
{var statearr_18261_18296 = state_18257__$1;(statearr_18261_18296[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18258 === 3))
{var inst_18255 = (state_18257[2]);var state_18257__$1 = state_18257;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18257__$1,inst_18255);
} else
{if((state_val_18258 === 4))
{var state_18257__$1 = state_18257;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18257__$1,7,bonuschan);
} else
{if((state_val_18258 === 5))
{var state_18257__$1 = state_18257;var statearr_18262_18297 = state_18257__$1;(statearr_18262_18297[2] = null);
(statearr_18262_18297[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18258 === 6))
{var inst_18253 = (state_18257[2]);var state_18257__$1 = state_18257;var statearr_18263_18298 = state_18257__$1;(statearr_18263_18298[2] = inst_18253);
(statearr_18263_18298[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18258 === 7))
{var inst_18240 = (state_18257[2]);var inst_18241 = cljs.core._EQ_.call(null,"connected",inst_18240);var state_18257__$1 = state_18257;if(inst_18241)
{var statearr_18264_18299 = state_18257__$1;(statearr_18264_18299[1] = 8);
} else
{var statearr_18265_18300 = state_18257__$1;(statearr_18265_18300[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18258 === 8))
{var inst_18243 = modern_cljs.gbc.getbonuses.call(null);var inst_18244 = modern_cljs.gbc.loadingStart.call(null);var inst_18245 = inst_18243.call(null,inst_18244);var state_18257__$1 = state_18257;var statearr_18266_18301 = state_18257__$1;(statearr_18266_18301[2] = inst_18245);
(statearr_18266_18301[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18258 === 9))
{var inst_18247 = alert("Please connect with Facebook so we can find your bonuses!");var state_18257__$1 = state_18257;var statearr_18267_18302 = state_18257__$1;(statearr_18267_18302[2] = inst_18247);
(statearr_18267_18302[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18258 === 10))
{var inst_18249 = (state_18257[2]);var state_18257__$1 = (function (){var statearr_18268 = state_18257;(statearr_18268[7] = inst_18249);
return statearr_18268;
})();var statearr_18269_18303 = state_18257__$1;(statearr_18269_18303[2] = null);
(statearr_18269_18303[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__12956__auto__){
return (function() {
var state_machine__12957__auto__ = null;
var state_machine__12957__auto____0 = (function (){var statearr_18273 = (new Array(8));(statearr_18273[0] = state_machine__12957__auto__);
(statearr_18273[1] = 1);
return statearr_18273;
});
var state_machine__12957__auto____1 = (function (state_18257){while(true){
var ret_value__12958__auto__ = (function (){try{while(true){
var result__12959__auto__ = switch__12956__auto__.call(null,state_18257);if(cljs.core.keyword_identical_QMARK_.call(null,result__12959__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12959__auto__;
}
break;
}
}catch (e18274){if((e18274 instanceof Object))
{var ex__12960__auto__ = e18274;var statearr_18275_18304 = state_18257;(statearr_18275_18304[5] = ex__12960__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18257);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18274;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12958__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18305 = state_18257;
state_18257 = G__18305;
continue;
}
} else
{return ret_value__12958__auto__;
}
break;
}
});
state_machine__12957__auto__ = function(state_18257){
switch(arguments.length){
case 0:
return state_machine__12957__auto____0.call(this);
case 1:
return state_machine__12957__auto____1.call(this,state_18257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12957__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12957__auto____0;
state_machine__12957__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12957__auto____1;
return state_machine__12957__auto__;
})()
;})(switch__12956__auto__))
})();var state__13028__auto__ = (function (){var statearr_18276 = f__13027__auto__.call(null);(statearr_18276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13026__auto__);
return statearr_18276;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13028__auto__);
}));
return c__13026__auto__;
});
goog.exportSymbol('modern_cljs.gbc.gbcinit', modern_cljs.gbc.gbcinit);
modern_cljs.gbc.linkinit = (function linkinit(){modern_cljs.gbc.morelinks.call(null);
return modern_cljs.gbc.postLogin.call(null);
});
goog.exportSymbol('modern_cljs.gbc.linkinit', modern_cljs.gbc.linkinit);
var c__13026__auto___18346 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13027__auto__ = (function (){var switch__12956__auto__ = (function (state_18329){var state_val_18330 = (state_18329[1]);if((state_val_18330 === 6))
{var inst_18325 = (state_18329[2]);var state_18329__$1 = state_18329;var statearr_18331_18347 = state_18329__$1;(statearr_18331_18347[2] = inst_18325);
(statearr_18331_18347[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18330 === 5))
{var state_18329__$1 = state_18329;var statearr_18332_18348 = state_18329__$1;(statearr_18332_18348[2] = null);
(statearr_18332_18348[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18330 === 4))
{var inst_18308 = (state_18329[7]);var inst_18319 = localStorage.key(inst_18308);var inst_18320 = localStorage.removeItem(inst_18319);var inst_18321 = (inst_18308 - 1);var inst_18308__$1 = inst_18321;var state_18329__$1 = (function (){var statearr_18333 = state_18329;(statearr_18333[8] = inst_18320);
(statearr_18333[7] = inst_18308__$1);
return statearr_18333;
})();var statearr_18334_18349 = state_18329__$1;(statearr_18334_18349[2] = null);
(statearr_18334_18349[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18330 === 3))
{var inst_18327 = (state_18329[2]);var state_18329__$1 = state_18329;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18329__$1,inst_18327);
} else
{if((state_val_18330 === 2))
{var inst_18308 = (state_18329[7]);var inst_18310 = localStorage.key(inst_18308);var inst_18311 = localStorage.getItem(inst_18310);var inst_18312 = parseInt(inst_18311);var inst_18313 = moment();var inst_18314 = inst_18313.unix();var inst_18315 = (7 * 86400);var inst_18316 = (inst_18314 - inst_18315);var inst_18317 = (inst_18312 < inst_18316);var state_18329__$1 = state_18329;if(cljs.core.truth_(inst_18317))
{var statearr_18335_18350 = state_18329__$1;(statearr_18335_18350[1] = 4);
} else
{var statearr_18336_18351 = state_18329__$1;(statearr_18336_18351[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18330 === 1))
{var inst_18306 = localStorage.length;var inst_18307 = (inst_18306 - 1);var inst_18308 = inst_18307;var state_18329__$1 = (function (){var statearr_18337 = state_18329;(statearr_18337[7] = inst_18308);
return statearr_18337;
})();var statearr_18338_18352 = state_18329__$1;(statearr_18338_18352[2] = null);
(statearr_18338_18352[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
});return ((function (switch__12956__auto__){
return (function() {
var state_machine__12957__auto__ = null;
var state_machine__12957__auto____0 = (function (){var statearr_18342 = (new Array(9));(statearr_18342[0] = state_machine__12957__auto__);
(statearr_18342[1] = 1);
return statearr_18342;
});
var state_machine__12957__auto____1 = (function (state_18329){while(true){
var ret_value__12958__auto__ = (function (){try{while(true){
var result__12959__auto__ = switch__12956__auto__.call(null,state_18329);if(cljs.core.keyword_identical_QMARK_.call(null,result__12959__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12959__auto__;
}
break;
}
}catch (e18343){if((e18343 instanceof Object))
{var ex__12960__auto__ = e18343;var statearr_18344_18353 = state_18329;(statearr_18344_18353[5] = ex__12960__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18329);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18343;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12958__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18354 = state_18329;
state_18329 = G__18354;
continue;
}
} else
{return ret_value__12958__auto__;
}
break;
}
});
state_machine__12957__auto__ = function(state_18329){
switch(arguments.length){
case 0:
return state_machine__12957__auto____0.call(this);
case 1:
return state_machine__12957__auto____1.call(this,state_18329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12957__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12957__auto____0;
state_machine__12957__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12957__auto____1;
return state_machine__12957__auto__;
})()
;})(switch__12956__auto__))
})();var state__13028__auto__ = (function (){var statearr_18345 = f__13027__auto__.call(null);(statearr_18345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13026__auto___18346);
return statearr_18345;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13028__auto__);
}));
