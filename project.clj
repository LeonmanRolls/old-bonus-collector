(defproject modern-cljs "0.1.1-SNAPSHOT"
  :description "The famous bonus collector"
  :url "https://github.com/LeonmanRolls/u1stgames-site"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :pom-addition [:developers [:developer
                              [:id "Leeondamiky"]
                              [:name "Leon Talbert"]
                              [:url "https://github.com/LeonmanRolls"]
                              [:email "leon.talbert@gmail.com"]
                              [:timezone "+0"]]]

  :min-lein-version "2.2.0"

  :aot :all

  ;; clojure source code path
  :source-paths ["src/clj" "src/cljs"]

  :uberjar-name "gbc-0.0.21.jar"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2069"]
                 [org.clojure/algo.generic "0.1.2"]
                 [clj-time "0.7.0"]
                 [org.clojure/core.async "0.1.278.0-76b25b-alpha"]
                 [cljs-ajax "0.2.4"]
                 [compojure "1.1.6"]
                 [jayq "2.5.1"]
                 [environ "0.5.0"]
                 [org.clojars.magomimmo/shoreleave-remote-ring "0.3.1-SNAPSHOT"]
                 [org.clojars.magomimmo/shoreleave-remote "0.3.1-SNAPSHOT"]
                 [ring "1.2.2"]
                 [ring/ring-jetty-adapter "1.1.6"]
                 [org.clojure/java.jdbc "0.3.3"]
                 [mysql/mysql-connector-java "5.1.30"]
                 [hiccups "0.3.0"]
                 [hiccup "1.0.5"]
                 [enfocus "2.0.2"]
                 [fogus/ring-edn "0.2.0"]]

  :plugins [[lein-cljsbuild "1.0.0"]
            [lein-ring "0.8.12"]
            [com.keminglabs/cljx "0.4.0"]
            [com.cemerick/clojurescript.test "0.3.1"]]

  :cljx {:builds [{:source-paths ["src/cljx"]
                   :output-path "src/clj/modern_cljs"
                   :rules :clj}

                  {:source-paths ["src/cljx"]
                   :output-path "src/cljs/modern_cljs"
                   :rules :cljs}]}

  ;; Gotta run dem tests mon
  :test-paths ["test/clj" "test/cljs"]

  :hooks [leiningen.cljsbuild cljx.hooks]

  ;; ring tasks configuration
  :ring {:handler modern-cljs.core/handler :port 3000}

;  :repl-options {:init-ns modern-cljs
;                 :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

;  :injections [(require '[cljs.repl.browser :as brepl]
;                          '[cemerick.piggieback :as pb])
;                 (defn browser-repl []
;                   (pb/cljs-repl :repl-env (brepl/repl-env :port 9000)))] 

  :cljsbuild {:builds
              {
               
               :productiondebug 
               {:source-paths ["src/cljs"]
                :compiler {:output-to "resources/public/js/production_dbg.js"
                           :output-dir "resources/public/js"
                           :externs ["externs/externs.js"]
                           :optimizations :advanced
                           :pretty-print false
                           :source-map "resources/public/js/production_dbg.js.map"
                           }}

               :productionhttps
               {:source-paths ["src/cljs"]
                :compiler {:output-to "resources/public/js/production.js"
                           :externs ["externs/externs.js"]
                           :optimizations :advanced
                           :pretty-print false
                           }}

               }

              
              :test-commands {"gbc-test" ["phantomjs" 
                                            "gbcRunner.js"
                                            ;:runner
                                            "phantomConfig.js"
                                            "/home/www/u1stgames.com/js/clojurescript/production_dbg.js"
                                            ]}

                           ; {"linkx-test" ["phantomjs"
                           ;                "integrationTest.js"
                           ;                         ]}
  
              
              })
