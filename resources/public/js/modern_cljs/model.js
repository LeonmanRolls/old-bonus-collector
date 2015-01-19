// Compiled by ClojureScript 0.0-2069
goog.provide('modern_cljs.model');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('modern_cljs.environment');
goog.require('modern_cljs.environment');
goog.require('cljs.core.async');
modern_cljs.model.error_thing = (function error_thing(p__34363){var map__34365 = p__34363;var map__34365__$1 = ((cljs.core.seq_QMARK_(map__34365))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34365):map__34365);var parse_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34365__$1,cljs.core.constant$keyword$152);var is_parse_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34365__$1,cljs.core.constant$keyword$150);var original_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34365__$1,cljs.core.constant$keyword$151);var response = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34365__$1,cljs.core.constant$keyword$148);var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34365__$1,cljs.core.constant$keyword$149);var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34365__$1,cljs.core.constant$keyword$147);return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text),cljs.core.str(" "),cljs.core.str(response),cljs.core.str(" "),cljs.core.str(original_text),cljs.core.str(" "),cljs.core.str(is_parse_error),cljs.core.str(" "),cljs.core.str(parse_error)].join(''));
});
modern_cljs.model.debughandler = (function debughandler(response){return console.log([cljs.core.str(response)].join(''));
});
modern_cljs.model.bonusfqlquery = (function bonusfqlquery(gameid){return [cljs.core.str("SELECT actor_id,app_id,post_id,attachment \n        FROM stream WHERE filter_key IN (\"app_"),cljs.core.str(gameid),cljs.core.str("\")\n        AND actor_id!=me() LIMIT 100")].join('');
});
modern_cljs.model.bonusSuggestionQuery = (function bonusSuggestionQuery(gameid){return [cljs.core.str("SELECT actor_id,app_id,post_id,attachment \n        FROM stream WHERE filter_key IN (\"app_"),cljs.core.str(gameid),cljs.core.str("\")\n        AND actor_id!=me() LIMIT 10")].join('');
});
modern_cljs.model.appInfoQuery = (function appInfoQuery(appid){return [cljs.core.str("SELECT namespace,display_name,icon_url,logo_url,company_name,developers,description,\n       subcategory,daily_active_users, daily_active_users_rank, weekly_active_users, monthly_active_users,\n       monthly_active_users_rank, appcenter_icon_url, category, is_facebook_app, link,\n       mobile_profile_section_url, mobile_web_url, object_store_urls, privacy_policy_url,\n       profile_section_url, supports_attribution, supports_implicit_sdk_logging, terms_of_service_url\n       FROM application WHERE \n       app_id="),cljs.core.str(appid)].join('');
});
modern_cljs.model.fqlquerytemplate = (function fqlquerytemplate(channel,query){return FB.api((function (){var obj34370 = {"method":"fql.query","query":query};return obj34370;
})(),(function (p1__34366_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,p1__34366_SHARP_);
}));
});
modern_cljs.model.graphQuery = (function graphQuery(channel,node){return FB.api(node,(function (p1__34371_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,p1__34371_SHARP_);
}));
});
modern_cljs.model.getLatestLinks = (function getLatestLinks(gameid,handler){return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str(modern_cljs.environment.getLink("ajaxLatestLinks")),cljs.core.str(gameid),cljs.core.str("/")].join(''),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$158,handler,cljs.core.constant$keyword$168,modern_cljs.model.error_thing], null)], 0));
});
modern_cljs.model.getLatestClickxLinks = (function getLatestClickxLinks(gameid,handler){return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str(modern_cljs.environment.getLink("ajaxAllClickxLinks")),cljs.core.str(gameid),cljs.core.str("/")].join(''),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$158,handler,cljs.core.constant$keyword$168,modern_cljs.model.error_thing], null)], 0));
});
modern_cljs.model.insertNewApplication = (function insertNewApplication(gameInfo){return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(modern_cljs.environment.getLink("ajaxInsertNewApplication"),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$156,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$184,gameInfo], null)], null)], 0));
});
modern_cljs.model.insertBonuses = (function insertBonuses(bonuses){return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(modern_cljs.environment.getLink("ajaxInsertBonuses"),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$156,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$185,bonuses], null)], null)], 0));
});
modern_cljs.model.clickUpdate = (function clickUpdate(link){return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(modern_cljs.environment.getLink("ajaxClickUpdate"),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$156,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$186,link], null)], null)], 0));
});
modern_cljs.model.addClickxLink = (function addClickxLink(linkMap){return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(modern_cljs.environment.getLink("ajaxAddClickxLink"),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$156,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$187,linkMap], null)], null)], 0));
});
modern_cljs.model.addClickxBonus = (function addClickxBonus(bonus){return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(modern_cljs.environment.getLink("ajaxAddClickxBonus"),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$156,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$188,bonus], null)], null)], 0));
});
modern_cljs.model.getGbcIds = (function getGbcIds(channel){return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(modern_cljs.environment.getLink("ajaxGbcIds"),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$158,(function (p1__34372_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,p1__34372_SHARP_);
}),cljs.core.constant$keyword$168,modern_cljs.model.error_thing], null)], 0));
});
modern_cljs.model.getGameIds = (function getGameIds(channel){return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(modern_cljs.environment.getLink("ajaxGameIds"),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$158,(function (p1__34373_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,p1__34373_SHARP_);
}),cljs.core.constant$keyword$168,modern_cljs.model.error_thing], null)], 0));
});
modern_cljs.model.getApplicationIds = (function getApplicationIds(channel){return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(modern_cljs.environment.getLink("ajaxApplicationIds"),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$158,(function (p1__34374_SHARP_){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,p1__34374_SHARP_);
}),cljs.core.constant$keyword$168,modern_cljs.model.error_thing], null)], 0));
});