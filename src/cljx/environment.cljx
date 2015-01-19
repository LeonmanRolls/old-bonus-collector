(ns modern-cljs.environment)

(def version "")

(defn getLink [wantedLink]
    (cond
        (= wantedLink "fblogo") (str "/" version "/img/fblogo_144.png")
        (= wantedLink "u1stlogo") (str "/" version "/img/logo3.png")
        (= wantedLink "loadinggif") (str "/" version "/img/loading-large.gif")
        (= wantedLink "adblockMessage") (str "/" version "/img/stopblabla.png")

        (= wantedLink "linkexchange") (str "https://u1stgames.com/" version "/linkexchange/")
        (= wantedLink "bonuscollector") (str "https://u1stgames.com/" version  "/gbc/facebook/")
        (= wantedLink "bonuscollectornonfb") (str "https://u1stgames.com/" version  "/gbc/")
        (= wantedLink "cdnfallback") (str "/" version "/external/")

        (= wantedLink "cssstyle") (str "/" version "/css/style.css")
        (= wantedLink "cssDataTables") (str "/" version "/css/dataTables.css")

        (= wantedLink "fbboiler") (str "/" version "/external/facebookboiler.js")
        (= wantedLink "adblockJs") (str "/" version "/external/stopblabla.js")
        (= wantedLink "dataTables") (str "/" version "/external/jquery.dataTables.min.js")
        (= wantedLink "bla") (str "/" version "/external/bla.js")
        (= wantedLink "moment") (str "/" version "/external/moment.min.js")
        (= wantedLink "iefix") (str "/" version "/external/iefix.js")
        (= wantedLink "production") 
            (if (re-find #"test" version) 
                (str "/" version "/js/production_dbg.js")
                (str "/" version "/js/production.js"))

        (= wantedLink "ajaxInsertBonuses") (str "/" version "/insertBonuses/")
        (= wantedLink "ajaxInsertNewApplication") (str "/" version "/insertNewApplication/")
        (= wantedLink "ajaxGbcIds") (str "/" version "/gbcids/")
        (= wantedLink "ajaxGameIds") (str "/" version "/gameids/")
        (= wantedLink "ajaxApplicationIds") (str "/" version "/applicationids/")
        (= wantedLink "ajaxLatestLinks") (str "/" version "/latestLinks/")
        (= wantedLink "ajaxAllClickxLinks") (str "/" version "/allClickxLinks/")
        (= wantedLink "ajaxAddClickxLink") (str "/" version "/addClickxLink/")
        (= wantedLink "ajaxAddClickxBonus") (str "/" version "/addClickxBonus/")
        (= wantedLink "ajaxClickUpdate") (str "/" version "/clickUpdate/")))

