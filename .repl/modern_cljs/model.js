// Compiled by ClojureScript 0.0-2069
goog.provide('modern_cljs.model');
goog.require('cljs.core');
goog.require('shoreleave.remotes.http_rpc');
goog.require('cljs.core.async');
goog.require('shoreleave.remotes.http_rpc');
goog.require('cljs.core.async');
modern_cljs.model.fqlquerygen = (function fqlquerygen(gameid){return [cljs.core.str("SELECT actor_id,app_id,post_id,attachment FROM stream WHERE filter_key IN (\"app_"),cljs.core.str(gameid),cljs.core.str("\")\n        AND actor_id!=me() AND created_time>"),cljs.core.str((moment().unix() - 86400)),cljs.core.str(" LIMIT 100")].join('');
});
modern_cljs.model.bonusquery = (function bonusquery(c,gameid){return FB.api((function (){var obj18359 = {"method":"fql.query","query":modern_cljs.model.fqlquerygen.call(null,gameid)};return obj18359;
})(),(function (p1__18355_SHARP_){return cljs.core.async.put_BANG_.call(null,c,p1__18355_SHARP_);
}));
});
modern_cljs.model.getLatestLinks = (function getLatestLinks(gameid,sideeffect){return shoreleave.remotes.http_rpc.remote_callback.call(null,new cljs.core.Keyword(null,"latestLinks","latestLinks",1431724004),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gameid,100], null),sideeffect);
});
modern_cljs.model.insertBonuses = (function insertBonuses(bonuses,callback){return shoreleave.remotes.http_rpc.remote_callback.call(null,new cljs.core.Keyword(null,"addBonuses","addBonuses",2986208414),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bonuses], null),callback);
});
modern_cljs.model.rawLinks = (function rawLinks(gameid,limit,callback){return shoreleave.remotes.http_rpc.remote_callback.call(null,new cljs.core.Keyword(null,"rawLinks","rawLinks",1499624419),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gameid,limit], null),callback);
});
modern_cljs.model.streamSearch = (function streamSearch(searchTerm){console.log(searchTerm);
var query = [cljs.core.str("SELECT post_id, viewer_id, app_id, source_id, updated_time, created_time, filter_key, \n       attribution, actor_id, target_id, message, app_data, action_links, attachment, impressions, \n       comments, likes, privacy, permalink, xid, tagged_ids, message_tags, description, description_tags \n       FROM stream WHERE source_id = me() AND strpos(lower(message),'"),cljs.core.str(searchTerm),cljs.core.str("') >= 0 LIMIT 1000")].join('');return FB.api((function (){var obj18364 = {"method":"fql.query","query":query};return obj18364;
})(),(function (p1__18360_SHARP_){return console.log(p1__18360_SHARP_);
}));
});
