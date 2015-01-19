(ns handlers.yt
  (:require [views.yt :as ytviews]
            [views.gbc :as gbcviews]
            [model.local :as lm]
            [views.default :as default]))

(require '[clojure.data.json :as json])

(defn init [] 
  (let []
    (default/index (ytviews/maincontent) 
                   (gbcviews/eastcontent) 
                   "{};"
                   true)))

