(ns modern-cljs.feed
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:use [jayq.core :only [$ each attr css append val remove-class add-class]])
  (:require [cljs.core.async :refer [put! chan <! !>]]
            [shoreleave.remotes.http-rpc :refer [remote-callback remote]]
            [goog.dom :as dom]
            [modern-cljs.views :as views]
            [modern-cljs.model :as m]
            [clojure.string :as string]
            [goog.events :as events]))

(defn login [postlogin scope] 
  (remove-class ($ :#fbconnectanchor) "hidden")
  (.login js/FB #(put! postlogin (.-status %)) scope))

(defn listen [el type out]
  (events/listen el type
                 (fn [e] (put! out (js-obj "scope" "email, read_stream, publish_actions"))))out)

(defn postLoginDealer [postlogin] 
  (go (while true 
        (if (= "connected" (<! postlogin))
          ((add-class ($ :#loadingdiv) "hidden")
           (remove-class ($ :#postlogin) "hidden")) 
          (js/alert "Please connect with Facebook so we can find your bonuses!")))))

(defn initialisationDealer [initchan postlogin]
  (go (if (= "connected" (str (.-status (<! initchan)))) 
          (put! postlogin "connected")
          ((remove-class ($ :#prelogin) "hidden") 
           (add-class ($ :#loadingdiv) "hidden")))))

(defn ^:export feedinit []
  (let [initchan (chan) loginchan (chan) postlogin (chan) searchChan (chan)]
    (let [loginButton (listen (dom/getElement "prelogin") "click" loginchan)
          searchButton (listen (dom/getElement "searchButton") "click" searchChan)]

      (js/initfacebook "296316843868802" #(put! initchan %))

      (go (while true
            (login postlogin (<! loginButton))))

      (go (while true
            (m/feedSearch (val ($ :#feedSearchInput)) (<! searchChan)))))

   (initialisationDealer initchan postlogin) 

    (postLoginDealer postlogin)
    
    ))
