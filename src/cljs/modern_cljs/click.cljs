(ns modern-cljs.click
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

(def clickxid (aget (.-serverdata js/window) "clickxid"))
(def gameid (aget (.-serverdata js/window) "gameid"))
(def gamename (aget (.-serverdata js/window) "gamename"))
(def canvasname (aget (.-serverdata js/window) "canvasname"))
(def inFacebook (.-inFacebook js/window))

(defn loadingStart []
  (at ["#loadingdiv"] (remove-class "hidden")))

(defn loadingStop []
  (at ["#loadingdiv"] (add-class "hidden")))

(defn showLinkForm [] 
  (at ["#linkInput"] (remove-class "hidden")))

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

(defn ^:export clickxLinks [] 
  (go 
   (do (loadingStart)
      (at ["#instructions"] (html-content ""))
      (at ["#bonuseslivehere"] (html-content ""))
      (m/getLatestClickxLinks gameid #(do (appendObjects %) (js/initDataTable) (loadingStop) ))
      (at ["#bonushouse"] (remove-class "hidden")))))

(defn friendsFromBonuses [bonuses]
  (clj->js (distinct (reduce #(conj %1 (aget %2 "actor_id")) [] bonuses))))

(defn requestToFriends [friends] 
  (.ui js/FB (js-obj "method" "apprequests" 
                     "message" (str "I just collected some " gamename " bonuses!")
                     "to" friends) #()))

(defn getRawBonuses [c] 
 (m/fqlquerytemplate c (m/bonusfqlquery gameid)))

(defn noncookie [binarysplit] (nth (select-values binarysplit [false]) 0))
(defn cookie [binarysplit] (nth (select-values binarysplit [true]) 0))

(defn ^:export bonuslistener [bonus postid]
  (at [(str "#" bonus)] (set-attr :style "border: 5px solid #05BE0C;"))
  (if (.-hasstorage js/window) (.setItem js/localStorage (str bonus) (.unix (js/moment)))))

(defn noClicksValidation [noClicksInput] 
  (if (and (< 0 noClicksInput) (>= 5 noClicksInput)) 

      (do (at ["#noClicksDiv"] (remove-class "has-error")) 
          (at ["#noClicksDiv"] (add-class "has-success")) 
          true) 

      (do (at ["#noClicksDiv"] (remove-class "has-success")) 
          (at ["#noClicksDiv"] (add-class "has-error")) 
          (js/alert "Please choose the number of clicks you need, maximum 5.")
          false)))

(defn linkValidation [linkInput] 
  (if (and (= (nth (.match linkInput #"apps.facebook.com") 0) "apps.facebook.com")
           (= (nth (.match linkInput #"http") 0) "http")
           (> (.indexOf linkInput (str canvasname)) 0))

      (do (at ["#linkInputDiv"] (remove-class "has-error")) 
          (at ["#linkInputDiv"] (add-class "has-success")) 
          true) 

      (do (at ["#linkInputDiv"] (remove-class "has-success")) 
          (at ["#linkInputDiv"] (add-class "has-error")) 
          (js/alert "Please enter a valid link")
          false)))

(defn descriptionValidation [description] 
  (if (and (not= description "") (< (count description) 80))

      (do (at ["#descriptionInputDiv"] (remove-class "has-error")) 
          (at ["#descriptionInputDiv"] (add-class "has-success")) 
          true) 

      (do (at ["#descriptionInputDiv"] (remove-class "has-success")) 
          (at ["#descriptionInputDiv"] (add-class "has-error")) 
          (js/alert "Please enter a short(er) description")
          false)))

(defn validate-form []
  (go 
   (let [description (.-value (.getElementById js/document "descriptionInput")) 
        link (.-value (.getElementById js/document "linkInput")) 
        clicks (.-value (.getElementById js/document "noClicksInput"))
        graphChan (chan)]

    (m/graphQuery graphChan "/v2.1/me?fields=name")

    (if (and (descriptionValidation description)
             (linkValidation link)
             (noClicksValidation clicks))

      (do (at ["#successalert"] (remove-class "hidden")) 
          (at ["#linkForm"] (add-class "hidden")) 
          
          (let [userdeets (<! graphChan)]
           (m/addClickxLink {:gameid gameid 
                             :description description
                             :link link
                             :clicks clicks
                             :addedbyname (nth (first (js->clj userdeets)) 1)
                             :addedbyid (nth (last (js->clj userdeets)) 1)}))

          (if inFacebook  
            (.ui js/FB (js-obj "method" "share" "href" (.-URL js/document)) #())
            (.open js/window (str "https://www.facebook.com/dialog/share?app_id=819457934761988&display=popup&href=http%3A%2F%2Fwww.u1stgames.com/" 
                                env/version "/click/" clickxid "/&redirect_uri=http%3A%2F%2Fwww.u1stgames.com") 
                              "_blank"))  

          false)  
          false))) false)

(defn initValidation []
  (if (and js/document (.-getElementById js/document))
    (let [login-form (.getElementById js/document "linkForm")]
      (set! (.-onsubmit login-form) validate-form))))

(defn authenticate [initchan] 
  (do (at ["#fbconnectanchor"] (remove-class "hidden"))
      (.login js/FB #(put! initchan (.-status %)) (js-obj "scope" ""))))

(defn showFacebookConnect [] 
  (do 
    (preLogin) 
    (loadingStop) 
    (js/alert "Please connect with Facebook to use this service!")))

(defn facebookInit [initchan] 
  (do (js/initfacebook clickxid #(put! initchan (.-status %)) "")
      ((fn [] (events/listen (dom/getElement "prelogin") "click" #(authenticate initchan))))))

(defn authStateCheck [initchan]
  (go (while true 
    (let [status  (<! initchan)]
      (cond (= (str status) "connected") (do (clickxLinks)
                                             (showLinkForm) 
                                             (postLogin) 
                                             (initValidation))
            (= (str status) "not_authorized") (showFacebookConnect) 
            :else (showFacebookConnect)))))) 

(defn ^:export inviteFriends [] 
  (.ui js/FB (js-obj "method" "apprequests" 
                     "message" (str "Come give and recieve " gamename " links!")
                     "to" "") #()))

(defn ^:export recordClick [link friendid]
  (go 
    (let [graphChan (chan)]
    (m/graphQuery graphChan "/v2.1/me?fields=name")
    (if (and (= (rand-int 4) 1) inFacebook) (.ui js/FB (js-obj "method" "apprequests" 
                       "message" (str (nth (first (js->clj (<! graphChan))) 1) " just clicked your link, come and return the favour!")
                       "to" friendid) #())))) 
    (m/clickUpdate link))

(defn ^:export clickinit []
  (let [initchan (chan 5)]
    (facebookInit initchan)
    (authStateCheck initchan)))

