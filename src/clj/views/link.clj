(ns views.link
  (:require [views.adverts :as adverts]
            [modern-cljs.environment :as env]))

(defn maincontent [gamename]
 [:div {:class ""}

   [:h1 (str "Welcome to the " gamename " link exchange!")]

  [:h2 {:class "addmargin"} "Search your bonuses: "
   [:input {:id "input" :type "text" :onkeyup "filter(this);" :class "addmargin"}]
   [:button {:type "button" :class "btn btn-primary addmargin" 
             :onclick "modern_cljs.gbc.morelinks();"} "Click for more links!"]]
    
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

