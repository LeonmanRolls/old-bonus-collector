(ns views.default
  (:require [compojure.handler :as handler]
            [hiccup.page :as page]
            [hiccup.util :as util]
            [model.local :as m]
            [modern-cljs.environment :as env]
            [views.snippets :as snippets]
            [views.adverts :as adverts ] :reload))

(require '[clojure.data.json :as json])

(defn index [maincontent eastcontent serverdata & inFacebook]

  (page/html5
    [:head

     [:meta {:property "og:title" :content (str (serverdata :gamename) " Click Exchange")}]
     [:meta {:property "og:type" :content "website"}]
     [:meta {:property "og:image" :content (str "http://u1stgames.com" (env/getLink "newu1stlogo")) }]
     [:meta {:property "og:url" :content (str "https://u1stgames.com/" env/version "/click/" (serverdata :clickxid) "/") }]
     [:meta {:property "og:description" :content "Submit links that you need clicked, find the links you want"}]

     adverts/errorception

     (if (first inFacebook) adverts/lifestreetheadscript)

     (page/include-js "//code.jquery.com/jquery-2.1.0.min.js")

      [:script "window.jQuery || document.write('<script src=\""
       (str (env/getLink "cdnfallback") "jquery-2.1.1.min.js") "\"><\\/script>')"]

     (page/include-js "//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js")

     [:script "if(typeof($.fn.modal) === 'undefined') {document.write('<script src=\""
       (str (env/getLink "cdnfallback") "/bootstrap-3.2.0-dist/js/bootstrap.min.js") "\"><\\/script>')}"]

     (page/include-css "//maxcdn.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css")

     [:script "if(typeof($.fn.modal) === 'undefined') {document.write('<script src=" 
      (str (env/getLink "cdnfallback") "bootstrap-3.2.0-dist/css/boostrap-theme.min.css") "><\\/script>')}"]

     (page/include-css "//maxcdn.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css")

     [:script "if(typeof($.fn.modal) === 'undefined') {document.write('<script src=" 
      (str (env/getLink "cdnfallback") "bootstrap-3.2.0-dist/css/boostrap.min.css") "><\\/script>')}"]

     [:script "
       $(document).ready(function() {
       var bodyColor = $('body').css('color');
       if(bodyColor != 'rgb(51, 51, 51)') {
       $(\"head\").prepend('<link rel=\"stylesheet\" href=\"" 
      (str (env/getLink "cdnfallback")) "bootstrap-3.2.0-dist/css/bootstrap.min.css\">');}}); 
      "]

     (page/include-js  (env/getLink "adblockJs") (env/getLink "fbboiler") (env/getLink "moment") 
                       (env/getLink "bla") (env/getLink "dataTables"))

     (page/include-css (env/getLink "cssstyle") (env/getLink "cssDataTables"))]

    (page/include-js "//cdn.datatables.net/responsive/1.0.2/js/dataTables.responsive.js")
    (page/include-css "//cdn.datatables.net/responsive/1.0.2/css/dataTables.responsive.css")

    [:body
     [:div {:id "fb-root"}]

     [:nav {:class "navbar navbar-inverse navbar-fixed-top navbarcustom" :role "navigation"}
      [:div {:class "container-fluid"}

       [:div {:class "navbar-header"}
        [:a {:class "" :href "#"} 
         [:img {:class "logomediumheight" :src (env/getLink "u1stlogo")}]]]]]

     [:div {:class "container-fluid" }

      [:div {:class "col-md-9" }
       [:center 

"<!--[if IE]><div style='clear: both; height: 112px; margin:5px; position: relative;'><a href=\"http://www.theie9countdown.com/ie-users-info\"><img src=\"http://www.theie9countdown.com/assets/badge_iecountdown.png\" border=\"0\" height=\"112\" width=\"348\" alt=\"\" /></a></div><![endif]-->"

        [:div {:id "mainadvert" :class "layered-paper"} 
          (if (first inFacebook) 
            ;;adverts/lifestreettopbanner
            [:iframe {:src "https://u1stgames.com/birthdays/candycrush/xpromoad.php" 
                      :scrolling "no"
                      :style "width: 100%; height: 100%;"}] 
            adverts/largegabanner)] 
            maincontent]]

      [:div {:class "col-md-3"}
        eastcontent
       ]]
     
    [:script "var serverdata = " (json/write-str serverdata) ";"]
    [:script "var inFacebook = " (first inFacebook) ";"]

    (page/include-js (env/getLink "production"))

    adverts/analytics

    [:footer [:a {:href "https://u1stgames.com/help/terms" :target "_blank"} "Terms and Conditions"]]

     ]))

