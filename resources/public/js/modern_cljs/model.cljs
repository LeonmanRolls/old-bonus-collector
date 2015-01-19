(ns modern-cljs.model
   (:require [cljs.core.async :refer [go put! chan <! !>]]
             [modern-cljs.environment :as env]
             [clojure.string :as strHelp]
             [ajax.core :refer [GET POST PUT]]))

(defn error-thing [{:keys [status status-text response original-text is-parse-error parse-error]}]
  (.log js/console 
      (str "something bad happened: " status " " status-text " " response " " original-text " " 
                        is-parse-error " " parse-error)))

(defn debughandler [response]
  (.log js/console (str response)))

(defn bonusfqlquery [gameid] 
  (str "SELECT actor_id,app_id,post_id,attachment 
        FROM stream WHERE filter_key IN (\"app_" gameid "\")
        AND actor_id!=me() LIMIT 100"))

(defn bonusSuggestionQuery [gameid] 
  (str "SELECT actor_id,app_id,post_id,attachment 
        FROM stream WHERE filter_key IN (\"app_" gameid "\")
        AND actor_id!=me() LIMIT 10"))

(defn appInfoQuery [appid]
  (str "SELECT namespace,display_name,icon_url,logo_url,company_name,developers,description,
       subcategory,daily_active_users, daily_active_users_rank, weekly_active_users, monthly_active_users,
       monthly_active_users_rank, appcenter_icon_url, category, is_facebook_app, link,
       mobile_profile_section_url, mobile_web_url, object_store_urls, privacy_policy_url,
       profile_section_url, supports_attribution, supports_implicit_sdk_logging, terms_of_service_url
       FROM application WHERE 
       app_id=" appid ))

(defn fqlquerytemplate [channel query] 
  (.api js/FB (js-obj "method" "fql.query" "query" query) #(put! channel %)))

(defn graphQuery [channel node] 
  (.api js/FB node #(put! channel %)))

(defn getLatestLinks [gameid handler]
 (POST (str (env/getLink "ajaxLatestLinks")  gameid "/") {:handler handler :error-handler error-thing}))

(defn getLatestClickxLinks [gameid handler]
 (POST (str (env/getLink "ajaxAllClickxLinks")  gameid "/") {:handler handler :error-handler error-thing}))

(defn insertNewApplication [gameInfo]
(PUT (env/getLink "ajaxInsertNewApplication") {:params {:gameInfo gameInfo}}))

(defn insertBonuses [bonuses]
(PUT (env/getLink "ajaxInsertBonuses") {:params {:bonuses bonuses}}))

(defn clickUpdate [link]
(PUT (env/getLink "ajaxClickUpdate") {:params {:link link}}))

(defn addClickxLink [linkMap]
(PUT (env/getLink "ajaxAddClickxLink") {:params {:linkMap linkMap}}))

(defn addClickxBonus [bonus user]
(PUT (env/getLink "ajaxAddClickxBonus") {:params {:bonusMap bonus :userInfo user}}))

(defn getGbcIds [channel]
(GET (env/getLink "ajaxGbcIds") {:handler #(put! channel %) :error-handler error-thing}))

(defn getGameIds [channel]
(GET (env/getLink "ajaxGameIds") {:handler #(put! channel %) :error-handler error-thing}))

(defn getApplicationIds [channel]
(GET (env/getLink "ajaxApplicationIds") {:handler #(put! channel %) :error-handler error-thing}))
