(ns views.link
  (:require [views.adverts :as adverts]
            [modern-cljs.environment :as env]))

(defn maincontent [gamename appid]
 [:div {:class ""}

   [:h1 (str "Welcome to the " gamename " link exchange!")]

[:div {:class "row"}
       [:div {:class "col-sm-5"}
        
     [:div {:class "input-group input-group-lg addsmallmargin"}
      [:span {:class "input-group-addon glyphicon glyphicon-search"}]
      [:input {:id "input" :type "text" :onkeyup "filter(this);" :class "form-control"
               :placeholder "Search your bonuses!"}]]]

      [:div {:class "col-sm-3"}
        [:button  {:type "button" :class "btn btn-primary btn-lg addsmallmargin" 
                          :onclick "modern_cljs.gbc.morelinks();"} "Click for more links!"]]
       
       [:div {:class "col-sm-4"}
    [:a {:href (str (env/getLink "clickexchange") (if (= appid (str 151881468300026)) 859765560731104 819457934761988) "/") :target "_blank"}
      [:button {:type "button" :class "btn btn-primary btn-lg addsmallmargin"} "Even More Bonuses"]]]]
    
   [:hr]

[:div {:id "loweradvert" :class "layered-paper" :style "margin-bottom:20px;"} adverts/largegabanner]

   [:div {:id "loadingdiv" :style "margin: 20px;"}
    [:img {:src (env/getLink "loadinggif") :id "loading" :style "display:inline;"}]
    [:h3 "Loading..."]]

   [:div {:id "postlogin" :class "hidden"}

    [:ul {:id "bonuseslivehere" :class ""}]]

   [:script "$(function() {modern_cljs.gbc.linkinit() });"]])

(defn eastcontent []
  [:center 
   adverts/largetowerad])

