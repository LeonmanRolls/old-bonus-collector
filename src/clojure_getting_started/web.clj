(ns clojure-getting-started.web
  #_(:require [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]
            [compojure.handler :refer [site]]
            [compojure.route :as route]
            [clojure.java.io :as io]
            [ring.adapter.jetty :as jetty]
            [environ.core :refer [env]])
  (:use compojure.core)
  (:use ring.middleware.edn)
  (:require [compojure.handler :as handler]
    [hiccup.page :as page]
    [handlers.gbc :as gbchandler]
    [handlers.click :as clickhandler]
    [handlers.link :as linkhandler]
    [handlers.feed :as feedhandler]
    [handlers.yt :as ythandler]
    [model.local :as m]
    [compojure.route :as route]
    [model.local :as local]
    [environ.core :refer [env]]
    :reload)
  )

#_(defn splash []
  {:status 200
   :headers {"Content-Type" "text/plain"}
   :body (pr-str ["Hello there old chap yea boi" :from 'Heroku])})

#_(defroutes app
  (GET "/" []
       (splash))
  (ANY "*" []
       (route/not-found (slurp (io/resource "404.html")))))


(defn generate-response  [data &  [status]]
      {:status  (or status 200)
       :headers  {"Content-Type" "application/edn"}
       :body  (pr-str data)})

;; defroutes macro defines a function that chains individual route
;; functions together. The request map is passed to each function in
;; turn, until a non-nil response is returned.
;;
(defroutes app-routes
           ; to serve document root address
           (GET "/gbc/:appid/" [appid] (gbchandler/init appid))
           (POST "/gbc/:appid/" [appid] (gbchandler/init appid))
           (GET "/gbc/facebook/:appid/" [appid] (gbchandler/init appid true))
           (POST "/gbc/facebook/:appid/" [appid] (gbchandler/init appid true))
           (GET "/click/:appid/" [appid] (clickhandler/init appid))
           (POST "/click/:appid/" [appid] (clickhandler/init appid))
           (GET "/click/facebook/:appid/" [appid] (clickhandler/init appid true))
           (POST "/click/facebook/:appid/" [appid] (clickhandler/init appid true))
           (GET "/gbc/facebook/:appid/" [appid] (gbchandler/init appid true))
           (POST "/gbc/facebook/:appid/" [appid] (gbchandler/init appid true))
           (GET "/linkexchange/:appid/" [appid] (linkhandler/init appid))
           (GET "/gbc/feedfilter/" [] (feedhandler/init))

           ;Gimme some o dat aaaaaaaajax
           (GET "/latestLinks/:appid/" [appid] (generate-response (local/latestLinks appid 100)))
           (POST "/latestLinks/:appid/" [appid] (generate-response (local/latestLinks appid 100)))
           (PUT "/insertBonuses/" [bonuses] (generate-response (local/addBonuses bonuses)))
           (PUT "/insertNewApplication/" [gameInfo] (generate-response (local/addNewApplication gameInfo)))
           (GET "/gbcids/" [] (generate-response (m/allBonusCollectors)))
           (GET "/gameids/" [] (generate-response (m/allGameIds)))
           (GET "/applicationids/" [] (generate-response (m/allApplicationIds)))

           (GET "/allClickxLinks/:appid/" [appid] (generate-response (local/allClickxLinks appid )))
           (POST "/allClickxLinks/:appid/" [appid] (generate-response (local/allClickxLinks appid )))
           (PUT "/addClickxLink/" [linkMap] (generate-response (local/addClickxLink linkMap)))
           (PUT "/addClickxBonus/" [bonusMap] (generate-response (local/addClickxBonus bonusMap)))
           (PUT "/clickUpdate/" [link] (generate-response (local/clickUpdate link)))

           ; to server static pages saved in resources/public directory
           (route/resources "/")
           ; if page is not found
           (route/not-found "Page not found"))

;; site function create an handler suitable for a standard website,
;; adding a bunch of standard ring middleware to app-route:
(def handler
  (handler/site (-> app-routes wrap-edn-params)))



(defn -main [& [port]]
  (let [port (Integer. (or port (env :port) 5000))]
    (jetty/run-jetty (site #'handler) {:port port :join? false})))

;; For interactive development:
;; (.stop server)
;; (def server (-main))
