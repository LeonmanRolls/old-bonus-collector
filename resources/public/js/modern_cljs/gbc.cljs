(ns modern-cljs.gbc
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [enfocus.macros :as em])
  (:require [cljs.core.async :refer [put! chan <! <!! !> close!]]
            [enfocus.core :refer [at from remove-class add-class append set-attr html-content]]
            [clojure.set :as setops]
            [enfocus.effects :as effects]
            [goog.dom :as dom]
            [cljs.reader :as reader]
            [modern-cljs.views :as views]
            [modern-cljs.environment :as env]
            [modern-cljs.model :as m]
            [goog.events :as events]
            [ajax.core :refer [GET PUT]]
            [cemerick.cljs.test :as t]))

#_(enable-console-print!)

(defn timeout [ms]
  (let [c (chan)]
    (js/setTimeout (fn [] (close! c)) ms)
    c))

(def appid (aget (.-serverdata js/window) "gbcid"))
(def gameid (aget (.-serverdata js/window) "gameid"))
(def gamename (aget (.-serverdata js/window) "gamename"))
(def inFacebook (.-inFacebook js/window))

(defn loadingStart []
  (at ["#loadingdiv"] (remove-class "hidden")))

(defn loadingStop []
  (at ["#loadingdiv"] (add-class "hidden")))

(defn postLogin []
  (at ["#postlogin"] (remove-class "hidden"))
  (at ["#prelogin"] (add-class "hidden")))

(defn preLogin []
  (at ["#prelogin"] (remove-class "hidden")))

(defn appendInteractedAlready [stringOfListItems]
  (at ["#collectedalready"] (append stringOfListItems)))

(defn emptyLinkxAlert []
  (at ["#emptylinkxalert"] (remove-class "hidden")))

(defn noBonusAlert []
  (at ["#nobonusalert"] (remove-class "hidden")))

(defn removeNoBonusAlert []
  (at ["#nobonusalert"] (add-class "hidden")))

(defn hideRecentlyCollected []
  (at ["#recentlyCollectedPanel"] (add-class "hidden")))

(def select-values (comp vals select-keys))

(defn appendObjects [stringOfListItems]
  (at ["#bonuseslivehere"] (if (= stringOfListItems "") 
                             (do (emptyLinkxAlert) (loadingStop)) 
                             (append stringOfListItems))))

(defn ^:export morelinks []
  (do (loadingStart)
      (at ["#bonuseslivehere"] (html-content ""))
      (m/getLatestLinks gameid #(do (appendObjects %) (loadingStop)))
      (postLogin)))

(defn friendsFromBonuses [bonuses]
  (clj->js (distinct (reduce #(conj %1 (aget %2 "actor_id")) [] bonuses))))

(defn requestToFriends [friends] 
  (.ui js/FB (js-obj "method" "apprequests" 
                     "message" (str "I just collected some " gamename " bonuses!")
                     "to" friends) #()))

(defn noRecentlyCollectedBonuses []
  (at ["#collectedalready"] (append "You haven't collected any bonuses recently (or cookies aren't configured)!
                                    <a title= \"If you are experiencing problems with this section, 
                                                most often this is due to third party cookies being disabled\"
                                    onclick=\"alert('If you are experiencing problems with this section, most often this is due to third party cookies being disabled.');\">Help</a>"))) 

(defn splitQueryResult [queryResult]
  (let [graphChan (chan)]
  (m/graphQuery graphChan "/v2.1/me?fields=name")
   (go (m/insertBonuses (take 1 (js->clj queryResult)))
      (m/addClickxBonus (take 1 (js->clj queryResult)) (js->clj (<! graphChan)))))
  (if (.-hasstorage js/window) 
  (group-by #(> (.getItem js/localStorage (aget % "post_id")) 0) queryResult) 
  (group-by #(> 0 1) queryResult)))

(defn getRawBonuses [c] 
 (m/fqlquerytemplate c (m/bonusfqlquery gameid)))

(defn noncookie [binarysplit] (nth (select-values binarysplit [false]) 0))
(defn cookie [binarysplit] (nth (select-values binarysplit [true]) 0))

(defn ^:export getBonuses []
  (let [c (chan)]

    (go (getRawBonuses c)

        (let [binarysplit (splitQueryResult (<! c))] 

          (loadingStop)

          (if inFacebook (requestToFriends (friendsFromBonuses (noncookie binarysplit))))  

          (if (empty? (noncookie binarysplit))
              (do (morelinks) (noBonusAlert))
              (appendObjects (reduce views/bonuspolaroid "" (clj->js (noncookie binarysplit)))))

          (if (empty? (cookie binarysplit))
              (noRecentlyCollectedBonuses)
              (appendInteractedAlready (reduce views/bonuspolaroid "" (clj->js (cookie binarysplit)))))))))

(defn ^:export bonuslistener [bonus postid]
  (at [(str "#" bonus)] (set-attr :style "border: 5px solid #05BE0C;"))
  (if (.-hasstorage js/window) (.setItem js/localStorage (str bonus) (.unix (js/moment)))))

(defn ^:export linkinit []
   (do (morelinks) (hideRecentlyCollected)))

(defn authenticate [initchan] 
  (do (at ["#fbconnectanchor"] (remove-class "hidden"))
      (.login js/FB #(put! initchan (.-status %)) (js-obj "scope" "read_stream, publish_actions, email"))))

(defn showFacebookConnect [] 
  (do 
    (preLogin) 
    (loadingStop) 
    (js/alert "Please connect with Facebook to use this service!")))

(defn addToSuggested [gbcData]
  (let [gameid (last (last gbcData)) gamename (last (first gbcData))]
    (at ["#Suggestions"] (append (str "<a class=\"btn btn-info btn-lg addsmallmargin\" 
                                             target=\"_blank\"
                                             href=\""(env/getLink "bonuscollectornonfb")  
                                                     gameid "/\">"
                                                     gamename
                                                     "</a>")))))

(defn queryGameid [c gameid] 
  (m/fqlquerytemplate c (m/bonusSuggestionQuery gameid)))

(defn suggestions [gbcids]
  (go
    (let [c (chan)]  
      (doseq [gbcid gbcids
              :let [queryResult (do (queryGameid c (get gbcid :gameid)) 
                                    (js->clj (<! c)))] 
              :when (and (not-empty (first queryResult)) 
                         (= (str (get (first queryResult) "app_id"))
                            (str (gbcid :gameid)))) ]  

              (<! (timeout 2000)) 
              (m/insertBonuses (do (take 1 queryResult)))
              (addToSuggested (take 2 gbcid))))))

(defn getAppData [appid]
 (let [queryChan (chan)]
   (go 
     (<! (timeout (* (rand-int 20) 1000)))
     (m/fqlquerytemplate queryChan (m/appInfoQuery appid))  
     (m/insertNewApplication (assoc (first (js->clj  (<! queryChan))) :appid appid)))))

(defn getNewAppIds [appIds]
  (let [currentIdChan (chan)]
    (go 
    (m/getApplicationIds currentIdChan)
    (dorun (map #(getAppData %) (setops/difference  (set (map #(reader/read-string %) appIds)) (set (map #(get % :appid) (<! currentIdChan)))))))))

(defn filterAppIds [graphResult]
  (go 
    (getNewAppIds (map #((% "application") "id") (filter #((complement nil?) (% "application")) graphResult)))))

(defn appResearch []
  (go (let [graphChan (chan)]
     (m/graphQuery graphChan "/v2.1/me/home?fields=application") 
     (filterAppIds ((js->clj (<! graphChan)) "data")))))

(defn getdemfam [] 
 (go 
  (let [gbcidchan (chan)]
    (m/getGbcIds gbcidchan)
    (suggestions (<! gbcidchan))
    (appResearch))))

(defn facebookInit [initchan] 
  (do (js/initfacebook appid #(put! initchan (.-status %)) "read_stream, publish_actions, email")
      ((fn [] (events/listen (dom/getElement "prelogin") "click" #(authenticate initchan))))))

(defn authStateCheck [initchan]
  (go (while true 
    (let [status  (<! initchan)]
      (cond (= (str status) "connected")  (do (getBonuses) (postLogin) (loadingStart) (getdemfam))
            (= (str status) "not_authorized") (showFacebookConnect) 
            :else (showFacebookConnect)))))) 

(defn ^:export gbcinit []
  (let [initchan (chan 5)]
    (facebookInit initchan)
    (authStateCheck initchan)))

;localStorage housekeeping
(go (if (.-hasstorage js/window)
    (loop [x (- (.-length js/localStorage) 1) ] 
      (when (< (js/parseInt (.getItem js/localStorage (.key js/localStorage x))) 
               (- (.unix (js/moment)) (* 7 86400)))
        (.removeItem js/localStorage (.key js/localStorage x)) 
        (recur (- x 1)))))) 

