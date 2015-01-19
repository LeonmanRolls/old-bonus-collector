(ns handlers.click
  (:require [views.click :as clickview]
            [model.local :as lm]
            [views.default :as default]))
(require '[clojure.data.json :as json])

(defn init [appid & args] 
  (let [appData (lm/appInfoClickx appid) inFacebook (if (nth args 0) true false)]
    (default/index (clickview/maincontent (get appData :gamename) (get appData :clickxid) inFacebook) 
                   (clickview/eastcontent (if (nth args 0) true)) 
                   appData 
                   inFacebook)))

