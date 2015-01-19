(ns views.click
  (:require [views.adverts :as adverts]
            [modern-cljs.environment :as env]
            [clj-time.format :as f]
            [clj-time.coerce :as c]
            [hiccup.core :as core]))

(def quoteVector ["Give, and you will recieve."
                  "No one is useless in this world who lightens the burden of another."
                  "We make a living by what we get. We make a life by what we give."
                  "Happiness doesn't result from what we get, but what we give."
                  "Give, but give until it hurts."
                  "The more you love, the more love you are given to love with."
                  "As we work to create light for others, we naturally light our own way."
                  "You can give without loving, but you can never love without giving."
                  "For it is in giving that we recieve."])

(defn maincontent [gamename appid inFacebook]

 [:div {:class ""}

   [:div {:id "fbconnect" :class "addmargin"}
    [:h1 (str "Welcome to your " gamename  " click exchange")]]

   [:a {:id "prelogin" :class "hidden"}
    [:img {:src (env/getLink "fblogo")}]
    [:h1 "Click to connect!"]]

   [:div {:id "postlogin" :class "hidden"}

    [:h3 {:class "addbigmargin"} "Submit your links and click on other people's with this service!"  #_(nth quoteVector (rand (count quoteVector)))]

    [:form {:id "linkForm" :class "form-horizontal" :role "form"} 
    [:div {:class "form-group" :style "margin-left: 0px; margin-right: 0xp;"}  

      [:div {:class "col-sm-12"}

       [:div {:id "descriptionInputDiv" :class "input-group addsmallmargin "}
        [:span {:class "input-group-addon glyphicon glyphicon-pencil"}]
        [:input {:id "descriptionInput" :type "text" :class "form-control" 
                 :placeholder "Short Description to help people find your link"}]]]]

     [:div {:class "form-group" :style "margin-left: 0px; margin-right: 0xp;"}  

      [:div {:class "col-sm-8"}

       [:div {:id "linkInputDiv" :class "input-group addsmallmargin "}
        [:span {:class "input-group-addon glyphicon glyphicon-random"}]
        [:input {:id "linkInput" :type "text" :class "form-control" :placeholder "Input your link here"}]]]

      [:div {:class "col-sm-4"}

       [:div {:id "noClicksDiv" :class "input-group addsmallmargin "}
        [:span {:class "input-group-addon glyphicon glyphicon-dashboard"}]
        [:input {:id "noClicksInput" :type "number" :class "form-control" :placeholder "No. of clicks"}]]]]

     [:div {:class "row-fluid"}
      [:div {:class "col-sm-2"}]
      [:button {:type "submit" :class "btn btn-primary btn-lg addsmallmargin col-sm-8"} "Submit"]
      [:div {:class "col-sm-2"}]
      ]

    [:br]
    [:br]
    [:br]
]

     [:div {:id "successalert" :class "alert alert-success hidden"} 
     [:b "Thanks!"] " Your link will appear in the table below shortly." ]

    [:div {:id "loweradvert" :class "layered-paper" :style "margin-bottom:20px;"} 
      (if inFacebook adverts/lifestreetbanner  adverts/largegabanner)]

    [:div {:id "bonushouse" :class "hidden container-fluid"}
     [:div {:id "buttonrow" :class "row"}
      [:div {:class "col-sm-2"}]

      [:div {:class (if inFacebook "col-sm-4" "col-sm-8")}
       [:button {:class "btn btn-lg btn-primary" :onclick "modern_cljs.click.clickxLinks();"} "Click here to refresh"]]

      (if inFacebook [:div {:class "col-sm-4"}
        [:button {:class "btn btn-lg btn-success" :onclick "modern_cljs.click.inviteFriends();"} "Invite your friends!"]])

      [:div {:class "col-sm-2"}]]
     
    [:ul {:id "bonuseslivehere" :class ""}]]


    [:div {:id "instructions"}
     [:h3 "Your links will appear here once you have completed the form above."]
     ]
     
    ]

   [:div {:id "loadingdiv" :style "margin: 20px;"}
    [:img {:src (env/getLink "loadinggif") :id "loading" :style "display:inline;"}]
    [:h3 "Loading..."]]

   [:script "$(function() {modern_cljs.click.clickinit()});"]])

(defn eastcontent [& inFacebook]

  [:center 
  [:div 
    [:img {:src (env/getLink "adblockMessage") :id "blabla" :style"display:none;"}]]

   [:div {:style "margin-bottom: 10px;"} 
    (if (nil? (first inFacebook)) adverts/largetowerad)]

   adverts/fblikebox])

(defn timeAgo [seconds]
(cond  
    (< seconds 60) (str seconds " seconds ago")
    (< seconds 3600) (str (quot seconds 60) " minutes ago")
    (< seconds 86400) (str (quot seconds 3600) " hours ago")
    (> seconds 86400) (str (quot (quot seconds 3600) 24) " Days ago")
    :else "A long time ago"))

(defn clickxTableHead []
  (str "<table id=\"table_id\" class=\"display\"> 
          <thead>
            <tr>
              <th>Description</th>
              <th>Link</th>
              <th>Added (seconds ago)</th>
              <th>Added by</th>
              <th>Click Limit</th>
              <th>Current Clicks</th>
            </tr>
          </thead>
         <tbody>"))

(defn clickxTable [prev nextsong] 
  (str (core/html [:tr 
                   [:td (get nextsong :caption)]
                   [:td [:a {:onclick (str "modern_cljs.click.recordClick('" (str (get nextsong :link)) "', " (get nextsong :addedbyid) ");")
                             :target "_blank" 
                             :href (str (get nextsong :link))} 
                      (str "..." (subs (get nextsong :link) 25 (min 55 (- (count (get nextsong :link)) 2))) "...")]]
                   [:td (- (quot (System/currentTimeMillis) 1000) (get nextsong :added_time))]
                   [:td (get nextsong :addedbyname)]
                   [:td (get nextsong :clicklimit)]
                   [:td (get nextsong :currentclicks)]
                   ]) prev))

(defn clickxTableFooter []
  (str "</tbody></table>"))

(defn bonuspolaroid [prev nextsong] 
  (str (core/html [:li {:title (get nextsong :caption) :class "bonuslink"}
                   [:a {:href (get nextsong :link) :target "_blank"}
                    [:img {:class "img-polaroid addimgborder standardPolaroid" 
                           :height "90"
                           :width "90"
                           :src (get nextsong :image)
                           :id (get nextsong :linkid)
                           :onclick "modern_cljs.gbc.bonuslistener(this.id);"}]]
                   [:div {:style "text-align:center"}
                    [:p {:class "mainparagraph"} (get nextsong :caption)]
                    [:p {:class "mainparagraph"} (timeAgo (- (quot (System/currentTimeMillis) 1000) 
                                                              (get nextsong :added_time)))]]]) prev))
