(ns views.feed
  (:require [views.adverts :as adverts]
            [hiccup.core :as core]))

(defn maincontent []

  [:div 
   
  [:h1 {:class "addmargin"} "Welcome to your news feed filter!"]

  [:div {:id "loadingdiv"}
   [:h2 {:style "display:inline;"} "loading..."]
   [:img {:src "/img/loading.gif" :id "loading" :style "display:inline;"}]]
  
   [:a {:id "prelogin" :class "hidden"}
    [:img {:src "/img/fblogo_144.png"}]
    [:h1 "Click to connect!"]]

  [:div {:id "postlogin" :class "hidden"}
   
  [:ul {:class "nav nav-pills"}

   [:li {:class "active"}
    [:a {:href "#feedsearch" :data-toggle "tab"} "Feed search"]]

   [:li {:class "dropdown"} 

    [:a {:class "dropdown-toggle" :data-toggle "dropdown" :href "#"}
     "Facebook Games" [:span {:class "caret"}]]

    [:ul {:class "dropdown-menu"}
     [:li "FarmVille 2" [:a {:href "#farmville2" :data-toggle "tab"}]]
     [:li "Criminal Case" [:a {:href "#criminalcase" :data-toggle "tab"}]]
     [:li "FarmVille" [:a {:href "#farmville" :data-toggle "tab"}]]
     [:li "CoasterVille" [:a {:href "#coasterville" :data-toggle "tab"}]]
     [:li "More...." [:a {:href "www.u1stgames.com" :data-toggle "tab"}]]]]

   [:li [:a {:href "#photos" :data-toggle "tab"} "Photos"]]

   [:li [:a {:href "#likes" :data-toggle "tab"} "Likes"]]

   [:li [:a {:href "#youtube" :data-toggle "tab"} "Youtube"]]

   [:li [:a {:href "#timemachine" :data-toggle "tab"} "Time Machine"]]
   ]  

   [:hr]
  
  [:div {:class "tab-content"}
   [:div {:class "tab-pane active" :id "feedsearch"}

     [:div {:class "input-group input-group-lg addsmallmargin"}
      [:span {:class "input-group-addon glyphicon glyphicon-search"}]
      [:input {:id "feedSearchInput" :type "text" :class "form-control"
               :placeholder "Search your feed" 
               :onkeyup "modern_cljs.model.streamSearch($(this).val());"}]
      [:span {:class "input-group-btn"}
       [:button {:id "searchButton" :class "btn btn-default" :type "button"} "Search!"]]]

     [:ul {:id "feedlist"}]
    ]

   [:div {:class "tab-pane" :id "farmville2"}]

   [:div {:class "tab-pane" :id "criminalcase"}]

   [:div {:class "tab-pane" :id "farmville"}]

   [:div {:class "tab-pane" :id "coasterville"}]

   [:div {:class "tab-pane" :id "photos"}]

   [:div {:class "tab-pane" :id "likes"}]

   [:div {:class "tab-pane" :id "youtube"}]

   [:div {:class "tab-pane" :id "timemachine"}]
   
   ]
   
   
   ]

  [:script "$(function() {modern_cljs.feed.feedinit()})"]
  
   
   ]
  
  )
