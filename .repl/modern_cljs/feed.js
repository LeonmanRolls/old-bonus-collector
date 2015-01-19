// Compiled by ClojureScript 0.0-2069
goog.provide('modern_cljs.feed');
goog.require('cljs.core');
goog.require('shoreleave.remotes.http_rpc');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('modern_cljs.model');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('modern_cljs.views');
goog.require('clojure.string');
goog.require('modern_cljs.model');
goog.require('modern_cljs.views');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('jayq.core');
goog.require('shoreleave.remotes.http_rpc');
modern_cljs.feed.login = (function login(postlogin,scope){jayq.core.remove_class.call(null,jayq.core.$.call(null,new cljs.core.Keyword(null,"#fbconnectanchor","#fbconnectanchor",727921106)),"hidden");
return FB.login((function (p1__16550_SHARP_){return cljs.core.async.put_BANG_.call(null,postlogin,p1__16550_SHARP_.status);
}),scope);
});
modern_cljs.feed.listen = (function listen(el,type,out){goog.events.listen(el,type,(function (e){return cljs.core.async.put_BANG_.call(null,out,(function (){var obj16554 = {"scope":"email, read_stream, publish_actions"};return obj16554;
})());
}));
return out;
});
modern_cljs.feed.postLoginDealer = (function postLoginDealer(postlogin){var c__8102__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8103__auto__ = (function (){var switch__8032__auto__ = (function (state_16619){var state_val_16620 = (state_16619[1]);if((state_val_16620 === 1))
{var state_16619__$1 = state_16619;var statearr_16621_16639 = state_16619__$1;(statearr_16621_16639[2] = null);
(statearr_16621_16639[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16620 === 2))
{var state_16619__$1 = state_16619;if(true)
{var statearr_16622_16640 = state_16619__$1;(statearr_16622_16640[1] = 4);
} else
{var statearr_16623_16641 = state_16619__$1;(statearr_16623_16641[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16620 === 3))
{var inst_16617 = (state_16619[2]);var state_16619__$1 = state_16619;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16619__$1,inst_16617);
} else
{if((state_val_16620 === 4))
{var state_16619__$1 = state_16619;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16619__$1,7,postlogin);
} else
{if((state_val_16620 === 5))
{var state_16619__$1 = state_16619;var statearr_16624_16642 = state_16619__$1;(statearr_16624_16642[2] = null);
(statearr_16624_16642[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16620 === 6))
{var inst_16615 = (state_16619[2]);var state_16619__$1 = state_16619;var statearr_16625_16643 = state_16619__$1;(statearr_16625_16643[2] = inst_16615);
(statearr_16625_16643[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16620 === 7))
{var inst_16600 = (state_16619[2]);var inst_16601 = cljs.core._EQ_.call(null,"connected",inst_16600);var state_16619__$1 = state_16619;if(inst_16601)
{var statearr_16626_16644 = state_16619__$1;(statearr_16626_16644[1] = 8);
} else
{var statearr_16627_16645 = state_16619__$1;(statearr_16627_16645[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16620 === 8))
{var inst_16603 = jayq.core.$.call(null,new cljs.core.Keyword(null,"#loadingdiv","#loadingdiv",2953293226));var inst_16604 = jayq.core.add_class.call(null,inst_16603,"hidden");var inst_16605 = jayq.core.$.call(null,new cljs.core.Keyword(null,"#postlogin","#postlogin",4740687224));var inst_16606 = jayq.core.remove_class.call(null,inst_16605,"hidden");var inst_16607 = inst_16604.call(null,inst_16606);var state_16619__$1 = state_16619;var statearr_16628_16646 = state_16619__$1;(statearr_16628_16646[2] = inst_16607);
(statearr_16628_16646[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16620 === 9))
{var inst_16609 = alert("Please connect with Facebook so we can find your bonuses!");var state_16619__$1 = state_16619;var statearr_16629_16647 = state_16619__$1;(statearr_16629_16647[2] = inst_16609);
(statearr_16629_16647[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16620 === 10))
{var inst_16611 = (state_16619[2]);var state_16619__$1 = (function (){var statearr_16630 = state_16619;(statearr_16630[7] = inst_16611);
return statearr_16630;
})();var statearr_16631_16648 = state_16619__$1;(statearr_16631_16648[2] = null);
(statearr_16631_16648[1] = 2);
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
});return ((function (switch__8032__auto__){
return (function() {
var state_machine__8033__auto__ = null;
var state_machine__8033__auto____0 = (function (){var statearr_16635 = (new Array(8));(statearr_16635[0] = state_machine__8033__auto__);
(statearr_16635[1] = 1);
return statearr_16635;
});
var state_machine__8033__auto____1 = (function (state_16619){while(true){
var ret_value__8034__auto__ = (function (){try{while(true){
var result__8035__auto__ = switch__8032__auto__.call(null,state_16619);if(cljs.core.keyword_identical_QMARK_.call(null,result__8035__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8035__auto__;
}
break;
}
}catch (e16636){if((e16636 instanceof Object))
{var ex__8036__auto__ = e16636;var statearr_16637_16649 = state_16619;(statearr_16637_16649[5] = ex__8036__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16619);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16636;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8034__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16650 = state_16619;
state_16619 = G__16650;
continue;
}
} else
{return ret_value__8034__auto__;
}
break;
}
});
state_machine__8033__auto__ = function(state_16619){
switch(arguments.length){
case 0:
return state_machine__8033__auto____0.call(this);
case 1:
return state_machine__8033__auto____1.call(this,state_16619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8033__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8033__auto____0;
state_machine__8033__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8033__auto____1;
return state_machine__8033__auto__;
})()
;})(switch__8032__auto__))
})();var state__8104__auto__ = (function (){var statearr_16638 = f__8103__auto__.call(null);(statearr_16638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8102__auto__);
return statearr_16638;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8104__auto__);
}));
return c__8102__auto__;
});
modern_cljs.feed.initialisationDealer = (function initialisationDealer(initchan,postlogin){var c__8102__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8103__auto__ = (function (){var switch__8032__auto__ = (function (state_16696){var state_val_16697 = (state_16696[1]);if((state_val_16697 === 5))
{var inst_16694 = (state_16696[2]);var state_16696__$1 = state_16696;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16696__$1,inst_16694);
} else
{if((state_val_16697 === 4))
{var inst_16688 = jayq.core.$.call(null,new cljs.core.Keyword(null,"#prelogin","#prelogin",894667579));var inst_16689 = jayq.core.remove_class.call(null,inst_16688,"hidden");var inst_16690 = jayq.core.$.call(null,new cljs.core.Keyword(null,"#loadingdiv","#loadingdiv",2953293226));var inst_16691 = jayq.core.add_class.call(null,inst_16690,"hidden");var inst_16692 = inst_16689.call(null,inst_16691);var state_16696__$1 = state_16696;var statearr_16698_16709 = state_16696__$1;(statearr_16698_16709[2] = inst_16692);
(statearr_16698_16709[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16697 === 3))
{var inst_16686 = cljs.core.async.put_BANG_.call(null,postlogin,"connected");var state_16696__$1 = state_16696;var statearr_16699_16710 = state_16696__$1;(statearr_16699_16710[2] = inst_16686);
(statearr_16699_16710[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16697 === 2))
{var inst_16681 = (state_16696[2]);var inst_16682 = inst_16681.status;var inst_16683 = [cljs.core.str(inst_16682)].join('');var inst_16684 = cljs.core._EQ_.call(null,"connected",inst_16683);var state_16696__$1 = state_16696;if(inst_16684)
{var statearr_16700_16711 = state_16696__$1;(statearr_16700_16711[1] = 3);
} else
{var statearr_16701_16712 = state_16696__$1;(statearr_16701_16712[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16697 === 1))
{var state_16696__$1 = state_16696;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16696__$1,2,initchan);
} else
{return null;
}
}
}
}
}
});return ((function (switch__8032__auto__){
return (function() {
var state_machine__8033__auto__ = null;
var state_machine__8033__auto____0 = (function (){var statearr_16705 = (new Array(7));(statearr_16705[0] = state_machine__8033__auto__);
(statearr_16705[1] = 1);
return statearr_16705;
});
var state_machine__8033__auto____1 = (function (state_16696){while(true){
var ret_value__8034__auto__ = (function (){try{while(true){
var result__8035__auto__ = switch__8032__auto__.call(null,state_16696);if(cljs.core.keyword_identical_QMARK_.call(null,result__8035__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8035__auto__;
}
break;
}
}catch (e16706){if((e16706 instanceof Object))
{var ex__8036__auto__ = e16706;var statearr_16707_16713 = state_16696;(statearr_16707_16713[5] = ex__8036__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16696);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16706;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8034__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16714 = state_16696;
state_16696 = G__16714;
continue;
}
} else
{return ret_value__8034__auto__;
}
break;
}
});
state_machine__8033__auto__ = function(state_16696){
switch(arguments.length){
case 0:
return state_machine__8033__auto____0.call(this);
case 1:
return state_machine__8033__auto____1.call(this,state_16696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8033__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8033__auto____0;
state_machine__8033__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8033__auto____1;
return state_machine__8033__auto__;
})()
;})(switch__8032__auto__))
})();var state__8104__auto__ = (function (){var statearr_16708 = f__8103__auto__.call(null);(statearr_16708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8102__auto__);
return statearr_16708;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8104__auto__);
}));
return c__8102__auto__;
});
modern_cljs.feed.feedinit = (function feedinit(){var initchan = cljs.core.async.chan.call(null);var loginchan = cljs.core.async.chan.call(null);var postlogin = cljs.core.async.chan.call(null);var searchChan = cljs.core.async.chan.call(null);var loginButton_16834 = modern_cljs.feed.listen.call(null,goog.dom.getElement("prelogin"),"click",loginchan);var searchButton_16835 = modern_cljs.feed.listen.call(null,goog.dom.getElement("searchButton"),"click",searchChan);initfacebook("296316843868802",(function (p1__16715_SHARP_){return cljs.core.async.put_BANG_.call(null,initchan,p1__16715_SHARP_);
}));
var c__8102__auto___16836 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8103__auto__ = (function (){var switch__8032__auto__ = (function (state_16787){var state_val_16788 = (state_16787[1]);if((state_val_16788 === 7))
{var inst_16778 = (state_16787[2]);var inst_16779 = modern_cljs.feed.login.call(null,postlogin,inst_16778);var state_16787__$1 = (function (){var statearr_16789 = state_16787;(statearr_16789[7] = inst_16779);
return statearr_16789;
})();var statearr_16790_16837 = state_16787__$1;(statearr_16790_16837[2] = null);
(statearr_16790_16837[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16788 === 6))
{var inst_16783 = (state_16787[2]);var state_16787__$1 = state_16787;var statearr_16791_16838 = state_16787__$1;(statearr_16791_16838[2] = inst_16783);
(statearr_16791_16838[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16788 === 5))
{var state_16787__$1 = state_16787;var statearr_16792_16839 = state_16787__$1;(statearr_16792_16839[2] = null);
(statearr_16792_16839[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16788 === 4))
{var state_16787__$1 = state_16787;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16787__$1,7,loginButton_16834);
} else
{if((state_val_16788 === 3))
{var inst_16785 = (state_16787[2]);var state_16787__$1 = state_16787;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16787__$1,inst_16785);
} else
{if((state_val_16788 === 2))
{var state_16787__$1 = state_16787;if(true)
{var statearr_16793_16840 = state_16787__$1;(statearr_16793_16840[1] = 4);
} else
{var statearr_16794_16841 = state_16787__$1;(statearr_16794_16841[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16788 === 1))
{var state_16787__$1 = state_16787;var statearr_16795_16842 = state_16787__$1;(statearr_16795_16842[2] = null);
(statearr_16795_16842[1] = 2);
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
});return ((function (switch__8032__auto__){
return (function() {
var state_machine__8033__auto__ = null;
var state_machine__8033__auto____0 = (function (){var statearr_16799 = (new Array(8));(statearr_16799[0] = state_machine__8033__auto__);
(statearr_16799[1] = 1);
return statearr_16799;
});
var state_machine__8033__auto____1 = (function (state_16787){while(true){
var ret_value__8034__auto__ = (function (){try{while(true){
var result__8035__auto__ = switch__8032__auto__.call(null,state_16787);if(cljs.core.keyword_identical_QMARK_.call(null,result__8035__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8035__auto__;
}
break;
}
}catch (e16800){if((e16800 instanceof Object))
{var ex__8036__auto__ = e16800;var statearr_16801_16843 = state_16787;(statearr_16801_16843[5] = ex__8036__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16787);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16800;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8034__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16844 = state_16787;
state_16787 = G__16844;
continue;
}
} else
{return ret_value__8034__auto__;
}
break;
}
});
state_machine__8033__auto__ = function(state_16787){
switch(arguments.length){
case 0:
return state_machine__8033__auto____0.call(this);
case 1:
return state_machine__8033__auto____1.call(this,state_16787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8033__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8033__auto____0;
state_machine__8033__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8033__auto____1;
return state_machine__8033__auto__;
})()
;})(switch__8032__auto__))
})();var state__8104__auto__ = (function (){var statearr_16802 = f__8103__auto__.call(null);(statearr_16802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8102__auto___16836);
return statearr_16802;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8104__auto__);
}));
var c__8102__auto___16845 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8103__auto__ = (function (){var switch__8032__auto__ = (function (state_16817){var state_val_16818 = (state_16817[1]);if((state_val_16818 === 7))
{var inst_16806 = (state_16817[7]);var inst_16808 = (state_16817[2]);var inst_16809 = modern_cljs.model.feedSearch.call(null,inst_16806,inst_16808);var state_16817__$1 = (function (){var statearr_16819 = state_16817;(statearr_16819[8] = inst_16809);
return statearr_16819;
})();var statearr_16820_16846 = state_16817__$1;(statearr_16820_16846[2] = null);
(statearr_16820_16846[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16818 === 6))
{var inst_16813 = (state_16817[2]);var state_16817__$1 = state_16817;var statearr_16821_16847 = state_16817__$1;(statearr_16821_16847[2] = inst_16813);
(statearr_16821_16847[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16818 === 5))
{var state_16817__$1 = state_16817;var statearr_16822_16848 = state_16817__$1;(statearr_16822_16848[2] = null);
(statearr_16822_16848[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16818 === 4))
{var inst_16805 = jayq.core.$.call(null,new cljs.core.Keyword(null,"#feedSearchInput","#feedSearchInput",1517307763));var inst_16806 = jayq.core.val.call(null,inst_16805);var state_16817__$1 = (function (){var statearr_16823 = state_16817;(statearr_16823[7] = inst_16806);
return statearr_16823;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16817__$1,7,searchChan);
} else
{if((state_val_16818 === 3))
{var inst_16815 = (state_16817[2]);var state_16817__$1 = state_16817;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16817__$1,inst_16815);
} else
{if((state_val_16818 === 2))
{var state_16817__$1 = state_16817;if(true)
{var statearr_16824_16849 = state_16817__$1;(statearr_16824_16849[1] = 4);
} else
{var statearr_16825_16850 = state_16817__$1;(statearr_16825_16850[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16818 === 1))
{var state_16817__$1 = state_16817;var statearr_16826_16851 = state_16817__$1;(statearr_16826_16851[2] = null);
(statearr_16826_16851[1] = 2);
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
});return ((function (switch__8032__auto__){
return (function() {
var state_machine__8033__auto__ = null;
var state_machine__8033__auto____0 = (function (){var statearr_16830 = (new Array(9));(statearr_16830[0] = state_machine__8033__auto__);
(statearr_16830[1] = 1);
return statearr_16830;
});
var state_machine__8033__auto____1 = (function (state_16817){while(true){
var ret_value__8034__auto__ = (function (){try{while(true){
var result__8035__auto__ = switch__8032__auto__.call(null,state_16817);if(cljs.core.keyword_identical_QMARK_.call(null,result__8035__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8035__auto__;
}
break;
}
}catch (e16831){if((e16831 instanceof Object))
{var ex__8036__auto__ = e16831;var statearr_16832_16852 = state_16817;(statearr_16832_16852[5] = ex__8036__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16817);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16831;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8034__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16853 = state_16817;
state_16817 = G__16853;
continue;
}
} else
{return ret_value__8034__auto__;
}
break;
}
});
state_machine__8033__auto__ = function(state_16817){
switch(arguments.length){
case 0:
return state_machine__8033__auto____0.call(this);
case 1:
return state_machine__8033__auto____1.call(this,state_16817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8033__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8033__auto____0;
state_machine__8033__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8033__auto____1;
return state_machine__8033__auto__;
})()
;})(switch__8032__auto__))
})();var state__8104__auto__ = (function (){var statearr_16833 = f__8103__auto__.call(null);(statearr_16833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8102__auto___16845);
return statearr_16833;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8104__auto__);
}));
modern_cljs.feed.initialisationDealer.call(null,initchan,postlogin);
return modern_cljs.feed.postLoginDealer.call(null,postlogin);
});
goog.exportSymbol('modern_cljs.feed.feedinit', modern_cljs.feed.feedinit);
