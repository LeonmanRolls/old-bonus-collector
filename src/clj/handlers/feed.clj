(ns handlers.feed
  (:require [views.feed :as feedviews]
            [model.local :as lm]
            [views.default :as default]
            [views.adverts :as adverts]))
(require '[clojure.data.json :as json])

(defn init [] 
 (default/index (feedviews/maincontent) (adverts/eastcontent true) "'dataplaceholder'"))

