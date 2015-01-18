(ns views.gbc
  (:require [views.adverts :as adverts]
            [modern-cljs.environment :as env]
            [clj-time.format :as f]
            [clj-time.coerce :as c]
            [hiccup.core :as core]))

(defn maincontent [gamename appid inFacebook]

 [:div {:class ""}

   [:div {:id "fbconnect" :class "addmargin"}
    [:h1 (str "Welcome to your " gamename  " feed")]]

   [:a {:id "prelogin" :class "hidden"}
    [:img {:src (env/getLink "fblogo")}]
    [:h1 "Click to connect!"]]

   [:div {:id "postlogin" :class "hidden"}

     [:div {:id "nobonusalert" :class "alert alert-info hidden"} "Hey, we've provided you with links from our "
     [:a {:href (str (env/getLink "linkexchange")  appid "/") :target "_blank"} "link exchange"] 
     " as you don't have any or have collected all your own ones already!"]

     [:div {:id "emptylinkxalert" :class "alert alert-warning hidden"} 
      "No links for " gamename " in our link exchange database,"
      " tell your friends about our " gamename
      " bonus collector so that they can share their bonuses with the community!"]

    [:div {:class "panel panel-default" :id "recentlyCollectedPanel"}
     [:div {:class "panel-heading"}
      [:h4 {:class "panel-title"}
       [:a {:data-toggle "collapse" :href "#collapseOne" :id "showHide"} 
        "Click here to show/hide your recently collected bonuses"]]]

     [:div {:id "collapseOne" :class "panel-collapse collapse"}
      [:div {:class "pane-body"} 
       [:ul {:id "collectedalready" :class "addmargin"}]]]]

      [:div {:class "row"}
       [:div {:class "col-sm-9"}
        
     [:div {:class "input-group input-group-lg addsmallmargin"}
      [:span {:class "input-group-addon glyphicon glyphicon-search"}]
      [:input {:id "input" :type "text" :onkeyup "filter(this);" :class "form-control"
               :placeholder "Search your bonuses!"}]]]
       
       [:div {:class "col-sm-3"}
        
    [:a {:href (str (env/getLink "linkexchange") appid "/") :target "_blank"}
      [:button {:type "button" :class "btn btn-primary btn-lg addsmallmargin"} "More Bonuses"]]]]

    [:hr]

    [:div {:id "loweradvert" :class "layered-paper" :style "margin-bottom:20px;"} 
      (if inFacebook adverts/lifestreetbanner  adverts/largegabanner)]

    [:ul {:id "bonuseslivehere" :class ""}]]

   [:div {:id "loadingdiv" :style "margin: 20px;"}
    [:img {:src (env/getLink "loadinggif") :id "loading" :style "display:inline;"}]
    [:h3 "Loading..."]]

   [:script "$(function() {modern_cljs.gbc.gbcinit()});"]])

(defn eastcontent [& inFacebook]

  [:center 

  [:div 
    [:img {:src (env/getLink "adblockMessage") :id "blabla" :style"display:none;"}]]

   [:div {:style "margin-bottom: 10px;"} 
    (if (nil? (first inFacebook)) adverts/largetowerad)]

   adverts/fblikebox

   [:h3 "Suggested Bonus Feeds"]
   [:hr]
   [:div {:id "Suggestions" :cass "addmargin"}
    #_[:a {:class "btn btn-info btn-lg addsmallmargin" 
         :target "_blank" 
         :href (str (env/getLink "bonuscollectornonfb") "403204596417287/")} "Farmville 2"]

    #_[:a {:class "btn btn-info btn-lg addsmallmargin" 
         :target "_blank" 
         :href (str (env/getLink "bonuscollectornonfb") "151881468300026/")} "Criminal Case"]] 
   ]
  )

(defn timeAgo [seconds]
(cond  
    (< seconds 60) (str seconds " seconds ago")
    (< seconds 3600) (str (quot seconds 60) " minutes ago")
    (< seconds 86400) (str (quot seconds 3600) " hours ago")
    (> seconds 86400) (str (quot (quot seconds 3600) 24) " Days ago")
    :else "A long time ago"))

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
