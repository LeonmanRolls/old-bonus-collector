(ns model.local (:require [views.click :as views]
                          [environ.core :refer [env]]
                          [clojure.java.jdbc :as sql]
                          ))
(use '[clojure.string :only (split)])
(use '[clojure.algo.generic.functor :only  (fmap)])

(def db {:subprotocol "mysql"
         :subname (env :database-url "//127.0.0.1:3306/u1st_games")
         :user (env :db-user "root")
         :password (env :db-password "1fishy4ME!") })

(defn appInfo [appid]
  (nth (sql/query db [(str "SELECT gameid,gamename,gbcid from games where gbcid=" appid)]) 0))

#_(appInfo 144726275680600)

(defn appInfoClickx [appid]
  (nth (sql/query db [(str "SELECT gameid,gamename,clickxid,canvasname from games where clickxid=" appid)]) 0))

(defn latestLinks [gameid limit]
  (let [querystring 
    (str "SELECT * from linkexchange WHERE gameid=" gameid " ORDER BY added_time DESC LIMIT " limit)]
    (reduce views/bonuspolaroid "" (reverse (sql/query db [querystring])))))

(defn allClickxLinks [gameid]
  (let [querystring 
    (str "SELECT * from clickexchange WHERE gameid=" gameid)]
    (str (views/clickxTableHead) 
         (reduce views/clickxTable "" (reverse (sql/query db [querystring])))
         (views/clickxTableFooter))))

(defn clickUpdate [link]
  (let [links link
        currentClicks ((nth 
                         (try (sql/query db [(str "select currentClicks from clickexchange where link='" links "'")])
                           (catch Exception e (println "Caught Exception"))) 0) :currentclicks)
        clickLimit ((nth 
                      (try (sql/query db [(str "select clickLimit from clickexchange where link='" links "'")])
                        (catch Exception e (println "Caught Exception"))) 0) :clicklimit)]

    (if (<= (- clickLimit 1) currentClicks)
        (sql/delete! db :clickexchange ["link = ?" links])  
        (sql/update! db :clickexchange {:currentClicks (+ currentClicks 1)} ["link = ?" links ]))))

(defn addClickxLink [linkMap]
  (let [queryMap {:gameid (linkMap :gameid)   
                  :caption (linkMap :description) 
                  :link (linkMap :link)  
                  :clickLimit (linkMap :clicks)   
                  :currentClicks 0
                  :added_time (quot (System/currentTimeMillis) 1000)}]
    (try (sql/insert! db :clickexchange queryMap) (catch Exception e (str "Error in adding to clickx")))))

(defn addClickxBonus [bonuses]
  (doseq [x bonuses] 
    (let [queryMap {:gameid (get x "app_id") 
                    :caption (get (get x "attachment") "name")  
                    :link (get (get x "attachment") "href")  
                    :clickLimit 5
                    :currentClicks 0
                    :added_time (quot (System/currentTimeMillis) 1000)}]
      (try (sql/insert! db :clickexchange queryMap) (catch Exception e #(print "heeeeyaa"))))))

(defn addBonuses [bonuses]
  (doseq [x bonuses] 
    (let [queryMap {:linkid (nth (split (get x "post_id") #"_") 1)   
                    :gameid (get x "app_id") 
                    :caption (get (get x "attachment") "name")  
                    :image (get (nth (get (get x "attachment") "media") 0) "src")    
                    :link (get (get x "attachment") "href")  
                    :added_time (quot (System/currentTimeMillis) 1000)}]
      (try (sql/insert! db :linkexchange queryMap) (catch Exception e #(print "heeeeyaa"))))))

(defn addNewGame [gameInfo]
    (let [
          gameInfos (fmap #(if (or (= nil %) (= "" %)) "na" %) gameInfo) 
          queryMap {:canvasname (get gameInfos "namespace")   
                    :gamename (get gameInfos "display_name")   
                    :icon (get gameInfos "icon_url")   
                    :logo (get gameInfos "logo_url")   
                    :company (get gameInfos "company_name")   
                    :devs (reduce #(str %1 " " %2) "" (get gameInfos "developers"))
                    :description (get gameInfos "description")   
                    :genre (get gameInfos "subcategory")   
                    :daily_active_users (get gameInfos "daily_active_users")   
                    :daily_active_users_rank (get gameInfos "daily_active_users_rank")   
                    :weekly_active_users (get gameInfos "weekly_active_users")   
                    :monthly_active_users (get gameInfos "monthly_active_users")   
                    :monthly_active_users_rank (get gameInfos "monthly_active_users_rank")   
                    :appcenter_icon_url (get gameInfos "appcenter_icon_url")   
                    :category (get gameInfos "category")   
                    :gameid (get gameInfos :appid)   
                    :votes 0
                    :fname "na"
                    :callbackurl "na"
                    :gbcnamespace "na"
                    :gbcid 0
                    :gbcconfig 0
                    :added 0
                    :gbctoken "na"
                    :linkx 0
                    :gbcsecret "na"
                   }]
      (try (sql/insert! db :games queryMap) (catch Exception e #(println "Problem with adding new game")))))

(defn addNewApplication [gameInfo]
    (if (= (get gameInfo "category") "Games") (addNewGame gameInfo))
    (let [
          gameInfos (fmap #(if (or (= nil %) (= "" %)) "na" %) gameInfo) 
          queryMap {:namespace (get gameInfos "namespace")   
                    :display_name (get gameInfos "display_name")   
                    :icon_url (get gameInfos "icon_url")   
                    :logo_url (get gameInfos "logo_url")   
                    :company_name (get gameInfos "company_name")   
                    :developers (reduce #(str %1 " " %2) "" (get gameInfos "developers"))
                    :description (get gameInfos "description")   
                    :subcategory (get gameInfos "subcategory")   
                    :daily_active_users (get gameInfos "daily_active_users")   
                    :daily_active_users_rank (get gameInfos "daily_active_users_rank")   
                    :weekly_active_users (get gameInfos "weekly_active_users")   
                    :monthly_active_users (get gameInfos "monthly_active_users")   
                    :monthly_active_users_rank (get gameInfos "monthly_active_users_rank")   
                    :appcenter_icon_url (get gameInfos "appcenter_icon_url")   
                    :category (get gameInfos "category")   
                    :is_facebook_app (get gameInfos "is_facebook_app")   
                    :link (get gameInfos "link")   
                    :mobile_profile_section_url (get gameInfos "mobile_profile_section_url")   
                    :mobile_web_url (get gameInfos "mobile_web_url")   
                    :object_store_urls (reduce #(str %1 " " %2) "" (get gameInfos "object_store_urls"))    
                    :privacy_policy_url (get gameInfos "privacy_policy_url")   
                    :profile_section_url (get gameInfos "profile_section_url")   
                    :supports_attribution (get gameInfos "supports_attribution")   
                    :supports_implicit_sdk_logging (get gameInfos "supports_implicit_sdk_logging")   
                    :terms_of_service_url (get gameInfos "terms_of_service_url")   
                    :appid (get gameInfos :appid)   
                   }]
      (try (sql/insert! db :applications queryMap) (catch Exception e #(println "Problem with adding new game")))))

(defn allBonusCollectors []
  (let [querystring 
    (str "select gamename,gbcid,gameid from games where gbcid>0")]
    (sql/query db [querystring])))

(defn allGameIds []
  (let [querystring 
    (str "select gameid from games")]
    (sql/query db [querystring])))

(defn allApplicationIds []
  (let [querystring 
    (str "select appid from applications")]
    (sql/query db [querystring])))

