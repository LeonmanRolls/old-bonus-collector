(ns views.yt
  (:require [views.adverts :as adverts]
            [modern-cljs.environment :as env]
            [clj-time.format :as f]
            [clj-time.coerce :as c]
            [hiccup.core :as core]))

(defn maincontent []

 [:div {:class ""}

   [:div {:id "fbconnect" :class "addmargin"}
    [:h1 (str "Welcome to FacebookTV")]]

   [:a {:id "prelogin" :class "hidden"}
    [:img {:src (env/getLink "fblogo")}]
    [:h1 "Click to connect!"]]

   [:div {:id "postlogin" :class "hidden"}


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


        
    ]]

    [:hr]

[:div {:id "loweradvert" :class "layered-paper" :style "margin-bottom:20px;"} (if (= 0 151881468300026) adverts/ad4gamebanner   adverts/lifestreetbanner) ]

    [:ul {:id "bonuseslivehere" :class ""}]]

   [:div {:id "loadingdiv" :style "margin: 20px;"}
    [:img {:src (env/getLink "loadinggif") :id "loading" :style "display:inline;"}]
    [:h3 "Loading..."]]

   [:script "$(function() {modern_cljs.gbc.collectorinit(1599546756938300,'read_stream', 'videos' )});"]])

(defn eastcontent [& facebook]
  [:center 
   adverts/fblikebox
   (if (nth facebook 0) adverts/lifestreetbox adverts/boxgaad)])

(defn videoFrame [prev nextsong] 
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
                    [:p {:class "mainparagraph"} ]]]) prev))
