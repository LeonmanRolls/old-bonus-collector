(ns handlers.link
  (:require [views.link :as linkviews]
            [views.default :as default]
            [model.local :as lm]))
(require '[clojure.data.json :as json])

(defn init [appid] 
  (let [appData (lm/appInfo appid)]
   (default/index (linkviews/maincontent (get appData :gamename))  
                  (linkviews/eastcontent)  
                  (json/write-str appData))))
