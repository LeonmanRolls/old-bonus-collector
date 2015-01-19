// Compiled by ClojureScript 0.0-2069
goog.provide('modern_cljs.model_t');
goog.require('cljs.core');
goog.require('enfocus.core');
goog.require('cljs.core.async');
goog.require('enfocus.core');
goog.require('cljs.core.async');
goog.require('modern_cljs.model');
goog.require('modern_cljs.model');
goog.require('cemerick.cljs.test');
goog.require('cemerick.cljs.test');
modern_cljs.model_t.mockQueryResult = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, ["actor_id","100004413845396","app_id","321574327904696","post_id","100004413845396_305824852907974","attachment",new cljs.core.PersistentArrayMap(null, 7, ["media",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, ["href","https://apps.facebook.com/farmville-two/viral.php?viralId=6a90c5fe650cd0cd2082def3d7c3262c_33801193031","alt","","type","link","src","https://fbexternal-a.akamaihd.net/app_full_proxy.php?app=321574327904696&v=\u2026t%2Ffarm2%2Fassets%2Ficons%2Fviral_feeds%2Ficon_viral_waterDrop_feed-3.png"], null)], null),"name","Klaudia helped out on Ramon's farm!","href","https://apps.facebook.com/farmville-two/viral.php?viralId=6a90c5fe650cd0cd2082def3d7c3262c_33801193031","caption","","description","Klaudia was lending a helping hand and wants to give you some Water.","properties",cljs.core.PersistentVector.EMPTY,"icon","https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-prn1/t39.2081-0/851550_688621517866640_1310934446_n.png"], null)], null),new cljs.core.PersistentArrayMap(null, 4, ["actor_id","100004413845396","app_id","321574327904696","post_id","100004413845396_305820432908416","attachment",new cljs.core.PersistentArrayMap(null, 7, ["media",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, ["href","https://apps.facebook.com/farmville-two/viral.php?viralId=31130328b281bd7d8abd4760c35d960f_33801193031","alt","","type","link","src","https://fbexternal-a.akamaihd.net/app_full_proxy.php?app=321574327904696&v=\u2026aihd.net%2Ffarm2%2Fassets%2Ficons%2Ficon_questing_poster_orders_cogs-1.png"], null)], null),"name","Klaudia needs some Flyers!","href","https://apps.facebook.com/farmville-two/viral.php?viralId=31130328b281bd7d8abd4760c35d960f_33801193031","caption","","description","Klaudia needs some more orders and wants Flyers to help advertise!","properties",cljs.core.PersistentVector.EMPTY,"icon","https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-prn1/t39.2081-0/851550_688621517866640_1310934446_n.png"], null)], null)], null);
modern_cljs.model_t.fqlquerygen_test = (function fqlquerygen_test(){return cemerick.cljs.test.test_function.call(null,cemerick.cljs.test.init_test_environment.call(null),modern_cljs.model_t.fqlquerygen_test);
});
modern_cljs.model_t.fqlquerygen_test = cljs.core.with_meta.call(null,modern_cljs.model_t.fqlquerygen_test,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",1017226086),11,new cljs.core.Keyword(null,"column","column",3954034376),10,new cljs.core.Keyword(null,"end-line","end-line",2693041432),11,new cljs.core.Keyword(null,"end-column","end-column",3799845882),26], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"test","test",1017460740),(function fqlquerygen_test_test(test_ctx__11499__auto__){var _test_ctx = test_ctx__11499__auto__;var async_QMARK___11414__auto__ = new cljs.core.Keyword(null,"async","async",1107031534).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",4082390616).cljs$core$IFn$_invoke$arity$1(_test_ctx)));var _STAR_test_ctx_STAR_29084 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___11414__auto__)?null:_test_ctx);
try{var _test_ctx__$1 = _test_ctx;var async_QMARK___11414__auto____$1 = new cljs.core.Keyword(null,"async","async",1107031534).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",4082390616).cljs$core$IFn$_invoke$arity$1(_test_ctx__$1)));var _STAR_test_ctx_STAR_29086 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___11414__auto____$1)?null:_test_ctx__$1);
try{try{var values__11434__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.re_find.call(null,/12345/,modern_cljs.model.fqlquerygen.call(null,12345))),"12345");var result__11435__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__11434__auto__);if((result__11435__auto__ instanceof cemerick.cljs.test.TestContext))
{throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else
{}
if(cljs.core.truth_(result__11435__auto__))
{cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core.cons.call(null,cljs.core._EQ_,values__11434__auto__),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"pass","pass",1017337731),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"12345",cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",-608081204,null),/12345/,cljs.core.list(new cljs.core.Symbol("ts","fqlquerygen","ts/fqlquerygen",219837662,null),12345)))], null));
} else
{cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"actual","actual",3885931776),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1640531466,null),values__11434__auto__)),new cljs.core.Symbol(null,"not","not",-1640422260,null)),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"fail","fail",1017039504),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"12345",cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",-608081204,null),/12345/,cljs.core.list(new cljs.core.Symbol("ts","fqlquerygen","ts/fqlquerygen",219837662,null),12345)))], null));
}
return result__11435__auto__;
}catch (e29088){if((e29088 instanceof Error))
{var t__11471__auto__ = e29088;return cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"actual","actual",3885931776),t__11471__auto__,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"message","message",1968829305),null,new cljs.core.Keyword(null,"expected","expected",3373152810),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"12345",cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",-608081204,null),/12345/,cljs.core.list(new cljs.core.Symbol("ts","fqlquerygen","ts/fqlquerygen",219837662,null),12345)))], null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29088;
} else
{return null;
}
}
}}catch (e29087){if((e29087 instanceof Error))
{var e__11415__auto__ = e29087;if(cljs.core.truth_(async_QMARK___11414__auto____$1))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx__$1,e__11415__auto__);
} else
{throw e__11415__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29087;
} else
{return null;
}
}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_29086;
}}catch (e29085){if((e29085 instanceof Error))
{var e__11415__auto__ = e29085;if(cljs.core.truth_(async_QMARK___11414__auto__))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx,e__11415__auto__);
} else
{throw e__11415__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29085;
} else
{return null;
}
}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_29084;
}}),new cljs.core.Keyword(null,"name","name",1017277949),cljs.core.with_meta.call(null,new cljs.core.Symbol("modern-cljs.model-t","fqlquerygen-test","modern-cljs.model-t/fqlquerygen-test",367419613,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",1017226086),11,new cljs.core.Keyword(null,"column","column",3954034376),10,new cljs.core.Keyword(null,"end-line","end-line",2693041432),11,new cljs.core.Keyword(null,"end-column","end-column",3799845882),26], null))], null)));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"modern-cljs.model-t","modern-cljs.model-t",1759672827,null),new cljs.core.Symbol("modern-cljs.model-t","fqlquerygen-test","modern-cljs.model-t/fqlquerygen-test",367419613,null),modern_cljs.model_t.fqlquerygen_test);
modern_cljs.model_t.bonusquery_test = (function bonusquery_test(){return cemerick.cljs.test.test_function.call(null,cemerick.cljs.test.init_test_environment.call(null),modern_cljs.model_t.bonusquery_test);
});
modern_cljs.model_t.bonusquery_test = cljs.core.with_meta.call(null,modern_cljs.model_t.bonusquery_test,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"async","async",1107031534),true,new cljs.core.Keyword(null,"line","line",1017226086),15,new cljs.core.Keyword(null,"column","column",3954034376),18,new cljs.core.Keyword(null,"end-line","end-line",2693041432),15,new cljs.core.Keyword(null,"end-column","end-column",3799845882),33], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"test","test",1017460740),(function bonusquery_test_test(test_ctx__11499__auto__){var _test_ctx = test_ctx__11499__auto__;var async_QMARK___11414__auto__ = new cljs.core.Keyword(null,"async","async",1107031534).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",4082390616).cljs$core$IFn$_invoke$arity$1(_test_ctx)));var _STAR_test_ctx_STAR_29206 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___11414__auto__)?null:_test_ctx);
try{var bonuschan = cljs.core.async.chan.call(null);var queryResult = modern_cljs.model.bonusquery.call(null,bonuschan,321574327904696);var c__8102__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8103__auto__ = (function (){var switch__8032__auto__ = (function (state_29282){var state_val_29283 = (state_29282[1]);if((state_val_29283 === 1))
{var inst_29208 = new cljs.core.Keyword(null,"test-name","test-name",4082390616).cljs$core$IFn$_invoke$arity$1(_test_ctx);var inst_29209 = cljs.core.meta.call(null,inst_29208);var inst_29210 = new cljs.core.Keyword(null,"async","async",1107031534).cljs$core$IFn$_invoke$arity$1(inst_29209);var state_29282__$1 = (function (){var statearr_29284 = state_29282;(statearr_29284[7] = inst_29210);
return statearr_29284;
})();var statearr_29285_29323 = state_29282__$1;(statearr_29285_29323[2] = null);
(statearr_29285_29323[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29283 === 2))
{var inst_29279 = (state_29282[2]);var inst_29280 = cemerick.cljs.test.done_STAR_.call(null,_test_ctx);var state_29282__$1 = (function (){var statearr_29286 = state_29282;(statearr_29286[8] = inst_29279);
return statearr_29286;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29282__$1,inst_29280);
} else
{if((state_val_29283 === 3))
{var inst_29212 = (state_29282[2]);var inst_29213 = cemerick.cljs.test._STAR_test_ctx_STAR_ = cemerick.cljs.test._STAR_test_ctx_STAR_;var state_29282__$1 = (function (){var statearr_29287 = state_29282;(statearr_29287[9] = inst_29213);
(statearr_29287[10] = inst_29212);
return statearr_29287;
})();cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29282__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29283 === 4))
{var inst_29210 = (state_29282[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29282,null,null,3,2);var state_29282__$1 = state_29282;if(cljs.core.truth_(inst_29210))
{var statearr_29288_29324 = state_29282__$1;(statearr_29288_29324[1] = 5);
} else
{var statearr_29289_29325 = state_29282__$1;(statearr_29289_29325[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29283 === 5))
{var state_29282__$1 = state_29282;var statearr_29290_29326 = state_29282__$1;(statearr_29290_29326[2] = null);
(statearr_29290_29326[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29283 === 6))
{var state_29282__$1 = state_29282;var statearr_29291_29327 = state_29282__$1;(statearr_29291_29327[2] = _test_ctx);
(statearr_29291_29327[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29283 === 7))
{var inst_29220 = (state_29282[2]);var inst_29221 = cemerick.cljs.test._STAR_test_ctx_STAR_ = inst_29220;var state_29282__$1 = (function (){var statearr_29292 = state_29282;(statearr_29292[11] = inst_29221);
return statearr_29292;
})();var statearr_29293_29328 = state_29282__$1;(statearr_29293_29328[2] = null);
(statearr_29293_29328[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29283 === 8))
{var inst_29277 = (state_29282[2]);var state_29282__$1 = state_29282;var statearr_29294_29329 = state_29282__$1;(statearr_29294_29329[2] = inst_29277);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29282__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29283 === 9))
{var inst_29210 = (state_29282[7]);var inst_29222 = (state_29282[2]);var state_29282__$1 = (function (){var statearr_29295 = state_29282;(statearr_29295[12] = inst_29222);
return statearr_29295;
})();if(cljs.core.truth_(inst_29210))
{var statearr_29296_29330 = state_29282__$1;(statearr_29296_29330[1] = 10);
} else
{var statearr_29297_29331 = state_29282__$1;(statearr_29297_29331[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29283 === 10))
{var inst_29222 = (state_29282[12]);var inst_29224 = cemerick.cljs.test.done_STAR_.call(null,_test_ctx,inst_29222);var state_29282__$1 = state_29282;var statearr_29298_29332 = state_29282__$1;(statearr_29298_29332[2] = inst_29224);
(statearr_29298_29332[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29283 === 11))
{var inst_29222 = (state_29282[12]);var inst_29226 = (function(){throw inst_29222})();var state_29282__$1 = state_29282;var statearr_29299_29333 = state_29282__$1;(statearr_29299_29333[2] = inst_29226);
(statearr_29299_29333[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29283 === 12))
{var inst_29228 = (state_29282[2]);var state_29282__$1 = state_29282;var statearr_29300_29334 = state_29282__$1;(statearr_29300_29334[2] = inst_29228);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29282__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29283 === 13))
{var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29282,9,Error,null,8);var state_29282__$1 = state_29282;var statearr_29301_29335 = state_29282__$1;(statearr_29301_29335[2] = null);
(statearr_29301_29335[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29283 === 14))
{var inst_29275 = (state_29282[2]);var state_29282__$1 = state_29282;var statearr_29302_29336 = state_29282__$1;(statearr_29302_29336[2] = inst_29275);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29282__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29283 === 15))
{var inst_29232 = (state_29282[2]);var inst_29233 = [new cljs.core.Keyword(null,"actual","actual",3885931776),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.Keyword(null,"expected","expected",3373152810)];var inst_29234 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"606",cljs.core.list(new cljs.core.Symbol(null,"aget","aget",-1637539570,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1640529634,null),new cljs.core.Symbol(null,"bonuschan","bonuschan",-198965846,null)),"error_code"));var inst_29235 = [inst_29232,new cljs.core.Keyword(null,"error","error",1110689146),null,inst_29234];var inst_29236 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29233,inst_29235);var inst_29237 = cemerick.cljs.test.do_report.call(null,_test_ctx,inst_29236);var state_29282__$1 = state_29282;var statearr_29303_29337 = state_29282__$1;(statearr_29303_29337[2] = inst_29237);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29282__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29283 === 16))
{var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29282,15,Error,null,14);var state_29282__$1 = state_29282;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29282__$1,17,bonuschan);
} else
{if((state_val_29283 === 17))
{var inst_29246 = (state_29282[13]);var inst_29245 = (state_29282[14]);var inst_29242 = (state_29282[2]);var inst_29243 = (inst_29242["error_code"]);var inst_29244 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_29243);var inst_29245__$1 = cljs.core._conj.call(null,inst_29244,"606");var inst_29246__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_29245__$1);var inst_29247 = (inst_29246__$1 instanceof cemerick.cljs.test.TestContext);var state_29282__$1 = (function (){var statearr_29304 = state_29282;(statearr_29304[13] = inst_29246__$1);
(statearr_29304[14] = inst_29245__$1);
return statearr_29304;
})();if(cljs.core.truth_(inst_29247))
{var statearr_29305_29338 = state_29282__$1;(statearr_29305_29338[1] = 18);
} else
{var statearr_29306_29339 = state_29282__$1;(statearr_29306_29339[1] = 19);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29283 === 18))
{var inst_29249 = (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));var inst_29250 = (function(){throw inst_29249})();var state_29282__$1 = state_29282;var statearr_29307_29340 = state_29282__$1;(statearr_29307_29340[2] = inst_29250);
(statearr_29307_29340[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29283 === 19))
{var state_29282__$1 = state_29282;var statearr_29308_29341 = state_29282__$1;(statearr_29308_29341[2] = null);
(statearr_29308_29341[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29283 === 20))
{var inst_29246 = (state_29282[13]);var inst_29253 = (state_29282[2]);var state_29282__$1 = (function (){var statearr_29309 = state_29282;(statearr_29309[15] = inst_29253);
return statearr_29309;
})();if(cljs.core.truth_(inst_29246))
{var statearr_29310_29342 = state_29282__$1;(statearr_29310_29342[1] = 21);
} else
{var statearr_29311_29343 = state_29282__$1;(statearr_29311_29343[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29283 === 21))
{var inst_29245 = (state_29282[14]);var inst_29255 = [new cljs.core.Keyword(null,"actual","actual",3885931776),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.Keyword(null,"expected","expected",3373152810)];var inst_29256 = cljs.core.cons.call(null,cljs.core._EQ_,inst_29245);var inst_29257 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"606",cljs.core.list(new cljs.core.Symbol(null,"aget","aget",-1637539570,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1640529634,null),new cljs.core.Symbol(null,"bonuschan","bonuschan",-198965846,null)),"error_code"));var inst_29258 = [inst_29256,new cljs.core.Keyword(null,"pass","pass",1017337731),null,inst_29257];var inst_29259 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29255,inst_29258);var inst_29260 = cemerick.cljs.test.do_report.call(null,_test_ctx,inst_29259);var state_29282__$1 = state_29282;var statearr_29312_29344 = state_29282__$1;(statearr_29312_29344[2] = inst_29260);
(statearr_29312_29344[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29283 === 22))
{var inst_29245 = (state_29282[14]);var inst_29262 = [new cljs.core.Keyword(null,"actual","actual",3885931776),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.Keyword(null,"expected","expected",3373152810)];var inst_29263 = new cljs.core.Symbol(null,"=","=",-1640531466,null);var inst_29264 = cljs.core.cons.call(null,inst_29263,inst_29245);var inst_29265 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_29264);var inst_29266 = new cljs.core.Symbol(null,"not","not",-1640422260,null);var inst_29267 = cljs.core._conj.call(null,inst_29265,inst_29266);var inst_29268 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"606",cljs.core.list(new cljs.core.Symbol(null,"aget","aget",-1637539570,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1640529634,null),new cljs.core.Symbol(null,"bonuschan","bonuschan",-198965846,null)),"error_code"));var inst_29269 = [inst_29267,new cljs.core.Keyword(null,"fail","fail",1017039504),null,inst_29268];var inst_29270 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29262,inst_29269);var inst_29271 = cemerick.cljs.test.do_report.call(null,_test_ctx,inst_29270);var state_29282__$1 = state_29282;var statearr_29313_29345 = state_29282__$1;(statearr_29313_29345[2] = inst_29271);
(statearr_29313_29345[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29283 === 23))
{var inst_29246 = (state_29282[13]);var inst_29273 = (state_29282[2]);var state_29282__$1 = (function (){var statearr_29314 = state_29282;(statearr_29314[16] = inst_29273);
return statearr_29314;
})();var statearr_29315_29346 = state_29282__$1;(statearr_29315_29346[2] = inst_29246);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29282__$1);
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
});return ((function (switch__8032__auto__){
return (function() {
var state_machine__8033__auto__ = null;
var state_machine__8033__auto____0 = (function (){var statearr_29319 = (new Array(17));(statearr_29319[0] = state_machine__8033__auto__);
(statearr_29319[1] = 1);
return statearr_29319;
});
var state_machine__8033__auto____1 = (function (state_29282){while(true){
var ret_value__8034__auto__ = (function (){try{while(true){
var result__8035__auto__ = switch__8032__auto__.call(null,state_29282);if(cljs.core.keyword_identical_QMARK_.call(null,result__8035__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8035__auto__;
}
break;
}
}catch (e29320){if((e29320 instanceof Object))
{var ex__8036__auto__ = e29320;var statearr_29321_29347 = state_29282;(statearr_29321_29347[5] = ex__8036__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29282);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29320;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8034__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29348 = state_29282;
state_29282 = G__29348;
continue;
}
} else
{return ret_value__8034__auto__;
}
break;
}
});
state_machine__8033__auto__ = function(state_29282){
switch(arguments.length){
case 0:
return state_machine__8033__auto____0.call(this);
case 1:
return state_machine__8033__auto____1.call(this,state_29282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8033__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8033__auto____0;
state_machine__8033__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8033__auto____1;
return state_machine__8033__auto__;
})()
;})(switch__8032__auto__))
})();var state__8104__auto__ = (function (){var statearr_29322 = f__8103__auto__.call(null);(statearr_29322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8102__auto__);
return statearr_29322;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8104__auto__);
}));
return c__8102__auto__;
}catch (e29207){if((e29207 instanceof Error))
{var e__11415__auto__ = e29207;if(cljs.core.truth_(async_QMARK___11414__auto__))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx,e__11415__auto__);
} else
{throw e__11415__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29207;
} else
{return null;
}
}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_29206;
}}),new cljs.core.Keyword(null,"name","name",1017277949),cljs.core.with_meta.call(null,new cljs.core.Symbol("modern-cljs.model-t","bonusquery-test","modern-cljs.model-t/bonusquery-test",-1382704547,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"async","async",1107031534),true,new cljs.core.Keyword(null,"line","line",1017226086),15,new cljs.core.Keyword(null,"column","column",3954034376),18,new cljs.core.Keyword(null,"end-line","end-line",2693041432),15,new cljs.core.Keyword(null,"end-column","end-column",3799845882),33], null))], null)));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"modern-cljs.model-t","modern-cljs.model-t",1759672827,null),new cljs.core.Symbol("modern-cljs.model-t","bonusquery-test","modern-cljs.model-t/bonusquery-test",-1382704547,null),modern_cljs.model_t.bonusquery_test);
modern_cljs.model_t.getLatestLinks_test = (function getLatestLinks_test(){return cemerick.cljs.test.test_function.call(null,cemerick.cljs.test.init_test_environment.call(null),modern_cljs.model_t.getLatestLinks_test);
});
modern_cljs.model_t.getLatestLinks_test = cljs.core.with_meta.call(null,modern_cljs.model_t.getLatestLinks_test,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"async","async",1107031534),true,new cljs.core.Keyword(null,"line","line",1017226086),20,new cljs.core.Keyword(null,"column","column",3954034376),18,new cljs.core.Keyword(null,"end-line","end-line",2693041432),20,new cljs.core.Keyword(null,"end-column","end-column",3799845882),37], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"test","test",1017460740),(function getLatestLinks_test_test(test_ctx__11499__auto__){var _test_ctx = test_ctx__11499__auto__;var async_QMARK___11414__auto__ = new cljs.core.Keyword(null,"async","async",1107031534).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",4082390616).cljs$core$IFn$_invoke$arity$1(_test_ctx)));var _STAR_test_ctx_STAR_29465 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___11414__auto__)?null:_test_ctx);
try{var chan = cljs.core.async.chan.call(null);modern_cljs.model.getLatestLinks.call(null,321574327904696,(function (p1__29349_SHARP_){return cljs.core.async.put_BANG_.call(null,chan,p1__29349_SHARP_);
}));
var c__8102__auto___29580 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8103__auto__ = (function (){var switch__8032__auto__ = (function (state_29540){var state_val_29541 = (state_29540[1]);if((state_val_29541 === 1))
{var inst_29467 = new cljs.core.Keyword(null,"test-name","test-name",4082390616).cljs$core$IFn$_invoke$arity$1(_test_ctx);var inst_29468 = cljs.core.meta.call(null,inst_29467);var inst_29469 = new cljs.core.Keyword(null,"async","async",1107031534).cljs$core$IFn$_invoke$arity$1(inst_29468);var state_29540__$1 = (function (){var statearr_29542 = state_29540;(statearr_29542[7] = inst_29469);
return statearr_29542;
})();var statearr_29543_29581 = state_29540__$1;(statearr_29543_29581[2] = null);
(statearr_29543_29581[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29541 === 2))
{var inst_29538 = (state_29540[2]);var state_29540__$1 = state_29540;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29540__$1,inst_29538);
} else
{if((state_val_29541 === 3))
{var inst_29471 = (state_29540[2]);var inst_29472 = cemerick.cljs.test._STAR_test_ctx_STAR_ = cemerick.cljs.test._STAR_test_ctx_STAR_;var state_29540__$1 = (function (){var statearr_29544 = state_29540;(statearr_29544[8] = inst_29471);
(statearr_29544[9] = inst_29472);
return statearr_29544;
})();cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29540__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29541 === 4))
{var inst_29469 = (state_29540[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29540,null,null,3,2);var state_29540__$1 = state_29540;if(cljs.core.truth_(inst_29469))
{var statearr_29545_29582 = state_29540__$1;(statearr_29545_29582[1] = 5);
} else
{var statearr_29546_29583 = state_29540__$1;(statearr_29546_29583[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29541 === 5))
{var state_29540__$1 = state_29540;var statearr_29547_29584 = state_29540__$1;(statearr_29547_29584[2] = null);
(statearr_29547_29584[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29541 === 6))
{var state_29540__$1 = state_29540;var statearr_29548_29585 = state_29540__$1;(statearr_29548_29585[2] = _test_ctx);
(statearr_29548_29585[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29541 === 7))
{var inst_29479 = (state_29540[2]);var inst_29480 = cemerick.cljs.test._STAR_test_ctx_STAR_ = inst_29479;var state_29540__$1 = (function (){var statearr_29549 = state_29540;(statearr_29549[10] = inst_29480);
return statearr_29549;
})();var statearr_29550_29586 = state_29540__$1;(statearr_29550_29586[2] = null);
(statearr_29550_29586[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29541 === 8))
{var inst_29536 = (state_29540[2]);var state_29540__$1 = state_29540;var statearr_29551_29587 = state_29540__$1;(statearr_29551_29587[2] = inst_29536);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29540__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29541 === 9))
{var inst_29469 = (state_29540[7]);var inst_29481 = (state_29540[2]);var state_29540__$1 = (function (){var statearr_29552 = state_29540;(statearr_29552[11] = inst_29481);
return statearr_29552;
})();if(cljs.core.truth_(inst_29469))
{var statearr_29553_29588 = state_29540__$1;(statearr_29553_29588[1] = 10);
} else
{var statearr_29554_29589 = state_29540__$1;(statearr_29554_29589[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29541 === 10))
{var inst_29481 = (state_29540[11]);var inst_29483 = cemerick.cljs.test.done_STAR_.call(null,_test_ctx,inst_29481);var state_29540__$1 = state_29540;var statearr_29555_29590 = state_29540__$1;(statearr_29555_29590[2] = inst_29483);
(statearr_29555_29590[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29541 === 11))
{var inst_29481 = (state_29540[11]);var inst_29485 = (function(){throw inst_29481})();var state_29540__$1 = state_29540;var statearr_29556_29591 = state_29540__$1;(statearr_29556_29591[2] = inst_29485);
(statearr_29556_29591[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29541 === 12))
{var inst_29487 = (state_29540[2]);var state_29540__$1 = state_29540;var statearr_29557_29592 = state_29540__$1;(statearr_29557_29592[2] = inst_29487);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29540__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29541 === 13))
{var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29540,9,Error,null,8);var state_29540__$1 = state_29540;var statearr_29558_29593 = state_29540__$1;(statearr_29558_29593[2] = null);
(statearr_29558_29593[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29541 === 14))
{var inst_29534 = (state_29540[2]);var state_29540__$1 = state_29540;var statearr_29559_29594 = state_29540__$1;(statearr_29559_29594[2] = inst_29534);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29540__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29541 === 15))
{var inst_29491 = (state_29540[2]);var inst_29492 = [new cljs.core.Keyword(null,"actual","actual",3885931776),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.Keyword(null,"expected","expected",3373152810)];var inst_29493 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"farmville",cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",-608081204,null),/farmville/,cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1640529634,null),new cljs.core.Symbol(null,"chan","chan",-1637479157,null))));var inst_29494 = [inst_29491,new cljs.core.Keyword(null,"error","error",1110689146),null,inst_29493];var inst_29495 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29492,inst_29494);var inst_29496 = cemerick.cljs.test.do_report.call(null,_test_ctx,inst_29495);var state_29540__$1 = state_29540;var statearr_29560_29595 = state_29540__$1;(statearr_29560_29595[2] = inst_29496);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29540__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29541 === 16))
{var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29540,15,Error,null,14);var state_29540__$1 = state_29540;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29540__$1,17,chan);
} else
{if((state_val_29541 === 17))
{var inst_29505 = (state_29540[12]);var inst_29504 = (state_29540[13]);var inst_29501 = (state_29540[2]);var inst_29502 = cljs.core.re_find.call(null,/farmville/,inst_29501);var inst_29503 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_29502);var inst_29504__$1 = cljs.core._conj.call(null,inst_29503,"farmville");var inst_29505__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_29504__$1);var inst_29506 = (inst_29505__$1 instanceof cemerick.cljs.test.TestContext);var state_29540__$1 = (function (){var statearr_29561 = state_29540;(statearr_29561[12] = inst_29505__$1);
(statearr_29561[13] = inst_29504__$1);
return statearr_29561;
})();if(cljs.core.truth_(inst_29506))
{var statearr_29562_29596 = state_29540__$1;(statearr_29562_29596[1] = 18);
} else
{var statearr_29563_29597 = state_29540__$1;(statearr_29563_29597[1] = 19);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29541 === 18))
{var inst_29508 = (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));var inst_29509 = (function(){throw inst_29508})();var state_29540__$1 = state_29540;var statearr_29564_29598 = state_29540__$1;(statearr_29564_29598[2] = inst_29509);
(statearr_29564_29598[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29541 === 19))
{var state_29540__$1 = state_29540;var statearr_29565_29599 = state_29540__$1;(statearr_29565_29599[2] = null);
(statearr_29565_29599[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29541 === 20))
{var inst_29505 = (state_29540[12]);var inst_29512 = (state_29540[2]);var state_29540__$1 = (function (){var statearr_29566 = state_29540;(statearr_29566[14] = inst_29512);
return statearr_29566;
})();if(cljs.core.truth_(inst_29505))
{var statearr_29567_29600 = state_29540__$1;(statearr_29567_29600[1] = 21);
} else
{var statearr_29568_29601 = state_29540__$1;(statearr_29568_29601[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29541 === 21))
{var inst_29504 = (state_29540[13]);var inst_29514 = [new cljs.core.Keyword(null,"actual","actual",3885931776),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.Keyword(null,"expected","expected",3373152810)];var inst_29515 = cljs.core.cons.call(null,cljs.core._EQ_,inst_29504);var inst_29516 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"farmville",cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",-608081204,null),/farmville/,cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1640529634,null),new cljs.core.Symbol(null,"chan","chan",-1637479157,null))));var inst_29517 = [inst_29515,new cljs.core.Keyword(null,"pass","pass",1017337731),null,inst_29516];var inst_29518 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29514,inst_29517);var inst_29519 = cemerick.cljs.test.do_report.call(null,_test_ctx,inst_29518);var state_29540__$1 = state_29540;var statearr_29569_29602 = state_29540__$1;(statearr_29569_29602[2] = inst_29519);
(statearr_29569_29602[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29541 === 22))
{var inst_29504 = (state_29540[13]);var inst_29521 = [new cljs.core.Keyword(null,"actual","actual",3885931776),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.Keyword(null,"expected","expected",3373152810)];var inst_29522 = new cljs.core.Symbol(null,"=","=",-1640531466,null);var inst_29523 = cljs.core.cons.call(null,inst_29522,inst_29504);var inst_29524 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_29523);var inst_29525 = new cljs.core.Symbol(null,"not","not",-1640422260,null);var inst_29526 = cljs.core._conj.call(null,inst_29524,inst_29525);var inst_29527 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),"farmville",cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",-608081204,null),/farmville/,cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1640529634,null),new cljs.core.Symbol(null,"chan","chan",-1637479157,null))));var inst_29528 = [inst_29526,new cljs.core.Keyword(null,"fail","fail",1017039504),null,inst_29527];var inst_29529 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29521,inst_29528);var inst_29530 = cemerick.cljs.test.do_report.call(null,_test_ctx,inst_29529);var state_29540__$1 = state_29540;var statearr_29570_29603 = state_29540__$1;(statearr_29570_29603[2] = inst_29530);
(statearr_29570_29603[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29541 === 23))
{var inst_29505 = (state_29540[12]);var inst_29532 = (state_29540[2]);var state_29540__$1 = (function (){var statearr_29571 = state_29540;(statearr_29571[15] = inst_29532);
return statearr_29571;
})();var statearr_29572_29604 = state_29540__$1;(statearr_29572_29604[2] = inst_29505);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29540__$1);
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
});return ((function (switch__8032__auto__){
return (function() {
var state_machine__8033__auto__ = null;
var state_machine__8033__auto____0 = (function (){var statearr_29576 = (new Array(16));(statearr_29576[0] = state_machine__8033__auto__);
(statearr_29576[1] = 1);
return statearr_29576;
});
var state_machine__8033__auto____1 = (function (state_29540){while(true){
var ret_value__8034__auto__ = (function (){try{while(true){
var result__8035__auto__ = switch__8032__auto__.call(null,state_29540);if(cljs.core.keyword_identical_QMARK_.call(null,result__8035__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8035__auto__;
}
break;
}
}catch (e29577){if((e29577 instanceof Object))
{var ex__8036__auto__ = e29577;var statearr_29578_29605 = state_29540;(statearr_29578_29605[5] = ex__8036__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29540);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29577;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8034__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29606 = state_29540;
state_29540 = G__29606;
continue;
}
} else
{return ret_value__8034__auto__;
}
break;
}
});
state_machine__8033__auto__ = function(state_29540){
switch(arguments.length){
case 0:
return state_machine__8033__auto____0.call(this);
case 1:
return state_machine__8033__auto____1.call(this,state_29540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8033__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8033__auto____0;
state_machine__8033__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8033__auto____1;
return state_machine__8033__auto__;
})()
;})(switch__8032__auto__))
})();var state__8104__auto__ = (function (){var statearr_29579 = f__8103__auto__.call(null);(statearr_29579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8102__auto___29580);
return statearr_29579;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8104__auto__);
}));
return cemerick.cljs.test.done_STAR_.call(null,_test_ctx);
}catch (e29466){if((e29466 instanceof Error))
{var e__11415__auto__ = e29466;if(cljs.core.truth_(async_QMARK___11414__auto__))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx,e__11415__auto__);
} else
{throw e__11415__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29466;
} else
{return null;
}
}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_29465;
}}),new cljs.core.Keyword(null,"name","name",1017277949),cljs.core.with_meta.call(null,new cljs.core.Symbol("modern-cljs.model-t","getLatestLinks-test","modern-cljs.model-t/getLatestLinks-test",-1725652338,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"async","async",1107031534),true,new cljs.core.Keyword(null,"line","line",1017226086),20,new cljs.core.Keyword(null,"column","column",3954034376),18,new cljs.core.Keyword(null,"end-line","end-line",2693041432),20,new cljs.core.Keyword(null,"end-column","end-column",3799845882),37], null))], null)));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"modern-cljs.model-t","modern-cljs.model-t",1759672827,null),new cljs.core.Symbol("modern-cljs.model-t","getLatestLinks-test","modern-cljs.model-t/getLatestLinks-test",-1725652338,null),modern_cljs.model_t.getLatestLinks_test);
modern_cljs.model_t.insertBonuses_test = (function insertBonuses_test(){return cemerick.cljs.test.test_function.call(null,cemerick.cljs.test.init_test_environment.call(null),modern_cljs.model_t.insertBonuses_test);
});
modern_cljs.model_t.insertBonuses_test = cljs.core.with_meta.call(null,modern_cljs.model_t.insertBonuses_test,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"async","async",1107031534),true,new cljs.core.Keyword(null,"line","line",1017226086),25,new cljs.core.Keyword(null,"column","column",3954034376),18,new cljs.core.Keyword(null,"end-line","end-line",2693041432),25,new cljs.core.Keyword(null,"end-column","end-column",3799845882),36], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"test","test",1017460740),(function insertBonuses_test_test(test_ctx__11499__auto__){var _test_ctx = test_ctx__11499__auto__;var async_QMARK___11414__auto__ = new cljs.core.Keyword(null,"async","async",1107031534).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",4082390616).cljs$core$IFn$_invoke$arity$1(_test_ctx)));var _STAR_test_ctx_STAR_29724 = cemerick.cljs.test._STAR_test_ctx_STAR_;try{cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___11414__auto__)?null:_test_ctx);
try{var chan = cljs.core.async.chan.call(null);modern_cljs.model.getLatestLinks.call(null,321574327904696,(function (p1__29607_SHARP_){return modern_cljs.model.insertBonuses.call(null,p1__29607_SHARP_,modern_cljs.model_t.callback = (function callback(insertResult){return cljs.core.async.put_BANG_.call(null,chan,insertResult);
}));
}));
var c__8102__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__8103__auto__ = (function (){var switch__8032__auto__ = (function (state_29799){var state_val_29800 = (state_29799[1]);if((state_val_29800 === 1))
{var inst_29726 = new cljs.core.Keyword(null,"test-name","test-name",4082390616).cljs$core$IFn$_invoke$arity$1(_test_ctx);var inst_29727 = cljs.core.meta.call(null,inst_29726);var inst_29728 = new cljs.core.Keyword(null,"async","async",1107031534).cljs$core$IFn$_invoke$arity$1(inst_29727);var state_29799__$1 = (function (){var statearr_29801 = state_29799;(statearr_29801[7] = inst_29728);
return statearr_29801;
})();var statearr_29802_29840 = state_29799__$1;(statearr_29802_29840[2] = null);
(statearr_29802_29840[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29800 === 2))
{var inst_29796 = (state_29799[2]);var inst_29797 = cemerick.cljs.test.done_STAR_.call(null,_test_ctx);var state_29799__$1 = (function (){var statearr_29803 = state_29799;(statearr_29803[8] = inst_29796);
return statearr_29803;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29799__$1,inst_29797);
} else
{if((state_val_29800 === 3))
{var inst_29730 = (state_29799[2]);var inst_29731 = cemerick.cljs.test._STAR_test_ctx_STAR_ = cemerick.cljs.test._STAR_test_ctx_STAR_;var state_29799__$1 = (function (){var statearr_29804 = state_29799;(statearr_29804[9] = inst_29730);
(statearr_29804[10] = inst_29731);
return statearr_29804;
})();cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29799__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29800 === 4))
{var inst_29728 = (state_29799[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29799,null,null,3,2);var state_29799__$1 = state_29799;if(cljs.core.truth_(inst_29728))
{var statearr_29805_29841 = state_29799__$1;(statearr_29805_29841[1] = 5);
} else
{var statearr_29806_29842 = state_29799__$1;(statearr_29806_29842[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29800 === 5))
{var state_29799__$1 = state_29799;var statearr_29807_29843 = state_29799__$1;(statearr_29807_29843[2] = null);
(statearr_29807_29843[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29800 === 6))
{var state_29799__$1 = state_29799;var statearr_29808_29844 = state_29799__$1;(statearr_29808_29844[2] = _test_ctx);
(statearr_29808_29844[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29800 === 7))
{var inst_29738 = (state_29799[2]);var inst_29739 = cemerick.cljs.test._STAR_test_ctx_STAR_ = inst_29738;var state_29799__$1 = (function (){var statearr_29809 = state_29799;(statearr_29809[11] = inst_29739);
return statearr_29809;
})();var statearr_29810_29845 = state_29799__$1;(statearr_29810_29845[2] = null);
(statearr_29810_29845[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29800 === 8))
{var inst_29794 = (state_29799[2]);var state_29799__$1 = state_29799;var statearr_29811_29846 = state_29799__$1;(statearr_29811_29846[2] = inst_29794);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29799__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29800 === 9))
{var inst_29728 = (state_29799[7]);var inst_29740 = (state_29799[2]);var state_29799__$1 = (function (){var statearr_29812 = state_29799;(statearr_29812[12] = inst_29740);
return statearr_29812;
})();if(cljs.core.truth_(inst_29728))
{var statearr_29813_29847 = state_29799__$1;(statearr_29813_29847[1] = 10);
} else
{var statearr_29814_29848 = state_29799__$1;(statearr_29814_29848[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29800 === 10))
{var inst_29740 = (state_29799[12]);var inst_29742 = cemerick.cljs.test.done_STAR_.call(null,_test_ctx,inst_29740);var state_29799__$1 = state_29799;var statearr_29815_29849 = state_29799__$1;(statearr_29815_29849[2] = inst_29742);
(statearr_29815_29849[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29800 === 11))
{var inst_29740 = (state_29799[12]);var inst_29744 = (function(){throw inst_29740})();var state_29799__$1 = state_29799;var statearr_29816_29850 = state_29799__$1;(statearr_29816_29850[2] = inst_29744);
(statearr_29816_29850[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29800 === 12))
{var inst_29746 = (state_29799[2]);var state_29799__$1 = state_29799;var statearr_29817_29851 = state_29799__$1;(statearr_29817_29851[2] = inst_29746);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29799__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29800 === 13))
{var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29799,9,Error,null,8);var state_29799__$1 = state_29799;var statearr_29818_29852 = state_29799__$1;(statearr_29818_29852[2] = null);
(statearr_29818_29852[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29800 === 14))
{var inst_29792 = (state_29799[2]);var state_29799__$1 = state_29799;var statearr_29819_29853 = state_29799__$1;(statearr_29819_29853[2] = inst_29792);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29799__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29800 === 15))
{var inst_29750 = (state_29799[2]);var inst_29751 = [new cljs.core.Keyword(null,"actual","actual",3885931776),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.Keyword(null,"expected","expected",3373152810)];var inst_29752 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1640529634,null),new cljs.core.Symbol(null,"chan","chan",-1637479157,null)));var inst_29753 = [inst_29750,new cljs.core.Keyword(null,"error","error",1110689146),null,inst_29752];var inst_29754 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29751,inst_29753);var inst_29755 = cemerick.cljs.test.do_report.call(null,_test_ctx,inst_29754);var state_29799__$1 = state_29799;var statearr_29820_29854 = state_29799__$1;(statearr_29820_29854[2] = inst_29755);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29799__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29800 === 16))
{var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29799,15,Error,null,14);var state_29799__$1 = state_29799;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29799__$1,17,chan);
} else
{if((state_val_29800 === 17))
{var inst_29763 = (state_29799[13]);var inst_29762 = (state_29799[14]);var inst_29760 = (state_29799[2]);var inst_29761 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_29760);var inst_29762__$1 = cljs.core._conj.call(null,inst_29761,true);var inst_29763__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_29762__$1);var inst_29764 = (inst_29763__$1 instanceof cemerick.cljs.test.TestContext);var state_29799__$1 = (function (){var statearr_29821 = state_29799;(statearr_29821[13] = inst_29763__$1);
(statearr_29821[14] = inst_29762__$1);
return statearr_29821;
})();if(cljs.core.truth_(inst_29764))
{var statearr_29822_29855 = state_29799__$1;(statearr_29822_29855[1] = 18);
} else
{var statearr_29823_29856 = state_29799__$1;(statearr_29823_29856[1] = 19);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29800 === 18))
{var inst_29766 = (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));var inst_29767 = (function(){throw inst_29766})();var state_29799__$1 = state_29799;var statearr_29824_29857 = state_29799__$1;(statearr_29824_29857[2] = inst_29767);
(statearr_29824_29857[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29800 === 19))
{var state_29799__$1 = state_29799;var statearr_29825_29858 = state_29799__$1;(statearr_29825_29858[2] = null);
(statearr_29825_29858[1] = 20);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29800 === 20))
{var inst_29763 = (state_29799[13]);var inst_29770 = (state_29799[2]);var state_29799__$1 = (function (){var statearr_29826 = state_29799;(statearr_29826[15] = inst_29770);
return statearr_29826;
})();if(cljs.core.truth_(inst_29763))
{var statearr_29827_29859 = state_29799__$1;(statearr_29827_29859[1] = 21);
} else
{var statearr_29828_29860 = state_29799__$1;(statearr_29828_29860[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29800 === 21))
{var inst_29762 = (state_29799[14]);var inst_29772 = [new cljs.core.Keyword(null,"actual","actual",3885931776),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.Keyword(null,"expected","expected",3373152810)];var inst_29773 = cljs.core.cons.call(null,cljs.core._EQ_,inst_29762);var inst_29774 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1640529634,null),new cljs.core.Symbol(null,"chan","chan",-1637479157,null)));var inst_29775 = [inst_29773,new cljs.core.Keyword(null,"pass","pass",1017337731),null,inst_29774];var inst_29776 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29772,inst_29775);var inst_29777 = cemerick.cljs.test.do_report.call(null,_test_ctx,inst_29776);var state_29799__$1 = state_29799;var statearr_29829_29861 = state_29799__$1;(statearr_29829_29861[2] = inst_29777);
(statearr_29829_29861[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29800 === 22))
{var inst_29762 = (state_29799[14]);var inst_29779 = [new cljs.core.Keyword(null,"actual","actual",3885931776),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.Keyword(null,"expected","expected",3373152810)];var inst_29780 = new cljs.core.Symbol(null,"=","=",-1640531466,null);var inst_29781 = cljs.core.cons.call(null,inst_29780,inst_29762);var inst_29782 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_29781);var inst_29783 = new cljs.core.Symbol(null,"not","not",-1640422260,null);var inst_29784 = cljs.core._conj.call(null,inst_29782,inst_29783);var inst_29785 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),true,cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1640529634,null),new cljs.core.Symbol(null,"chan","chan",-1637479157,null)));var inst_29786 = [inst_29784,new cljs.core.Keyword(null,"fail","fail",1017039504),null,inst_29785];var inst_29787 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_29779,inst_29786);var inst_29788 = cemerick.cljs.test.do_report.call(null,_test_ctx,inst_29787);var state_29799__$1 = state_29799;var statearr_29830_29862 = state_29799__$1;(statearr_29830_29862[2] = inst_29788);
(statearr_29830_29862[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29800 === 23))
{var inst_29763 = (state_29799[13]);var inst_29790 = (state_29799[2]);var state_29799__$1 = (function (){var statearr_29831 = state_29799;(statearr_29831[16] = inst_29790);
return statearr_29831;
})();var statearr_29832_29863 = state_29799__$1;(statearr_29832_29863[2] = inst_29763);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29799__$1);
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
});return ((function (switch__8032__auto__){
return (function() {
var state_machine__8033__auto__ = null;
var state_machine__8033__auto____0 = (function (){var statearr_29836 = (new Array(17));(statearr_29836[0] = state_machine__8033__auto__);
(statearr_29836[1] = 1);
return statearr_29836;
});
var state_machine__8033__auto____1 = (function (state_29799){while(true){
var ret_value__8034__auto__ = (function (){try{while(true){
var result__8035__auto__ = switch__8032__auto__.call(null,state_29799);if(cljs.core.keyword_identical_QMARK_.call(null,result__8035__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__8035__auto__;
}
break;
}
}catch (e29837){if((e29837 instanceof Object))
{var ex__8036__auto__ = e29837;var statearr_29838_29864 = state_29799;(statearr_29838_29864[5] = ex__8036__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29799);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29837;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8034__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29865 = state_29799;
state_29799 = G__29865;
continue;
}
} else
{return ret_value__8034__auto__;
}
break;
}
});
state_machine__8033__auto__ = function(state_29799){
switch(arguments.length){
case 0:
return state_machine__8033__auto____0.call(this);
case 1:
return state_machine__8033__auto____1.call(this,state_29799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8033__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8033__auto____0;
state_machine__8033__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8033__auto____1;
return state_machine__8033__auto__;
})()
;})(switch__8032__auto__))
})();var state__8104__auto__ = (function (){var statearr_29839 = f__8103__auto__.call(null);(statearr_29839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8102__auto__);
return statearr_29839;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8104__auto__);
}));
return c__8102__auto__;
}catch (e29725){if((e29725 instanceof Error))
{var e__11415__auto__ = e29725;if(cljs.core.truth_(async_QMARK___11414__auto__))
{return cemerick.cljs.test.done_STAR_.call(null,_test_ctx,e__11415__auto__);
} else
{throw e__11415__auto__;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29725;
} else
{return null;
}
}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_29724;
}}),new cljs.core.Keyword(null,"name","name",1017277949),cljs.core.with_meta.call(null,new cljs.core.Symbol("modern-cljs.model-t","insertBonuses-test","modern-cljs.model-t/insertBonuses-test",1087273142,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"async","async",1107031534),true,new cljs.core.Keyword(null,"line","line",1017226086),25,new cljs.core.Keyword(null,"column","column",3954034376),18,new cljs.core.Keyword(null,"end-line","end-line",2693041432),25,new cljs.core.Keyword(null,"end-column","end-column",3799845882),36], null))], null)));
cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"modern-cljs.model-t","modern-cljs.model-t",1759672827,null),new cljs.core.Symbol("modern-cljs.model-t","insertBonuses-test","modern-cljs.model-t/insertBonuses-test",1087273142,null),modern_cljs.model_t.insertBonuses_test);
