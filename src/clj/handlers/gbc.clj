(ns handlers.gbc
  (:require [views.gbc :as gbcviews]
            [model.local :as lm]
            [views.default :as default]))
(require '[clojure.data.json :as json])

(defn init [appid & args] 
  (let [appData (lm/appInfo appid) inFacebook (if (nth args 0) true false)]
    (default/index (gbcviews/maincontent (get appData :gamename) (get appData :gbcid) inFacebook) 
                   (gbcviews/eastcontent (if (nth args 0) true)) 
                   (json/write-str appData) 
                   inFacebook)))

