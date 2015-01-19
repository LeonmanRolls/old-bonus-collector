(ns modern-cljs.views
  (:require-macros [hiccups.core :as hiccups])
  (:require [hiccups.runtime :as hiccupsrt]))

(defn bonuspolaroid [prev nextsong] 

  (if  (or (empty? (aget nextsong "attachment" "href"))
           (empty? (aget nextsong "attachment" "media"))
           (empty? (aget nextsong "attachment" "name")) 
           (empty? (aget nextsong "post_id")))

    prev

    (do  
      (str (hiccups/html 
             [:li {:name "bonusli":title (aget nextsong "attachment" "name") :class "bonuslink"}
              [:a {:href (aget nextsong "attachment" "href") :target "_blank"}
               [:img {:class "img-polaroid addimgborder standardPolaroid" 
                      :height "100"
                      :width "100"
                      :src (aget nextsong "attachment" "media" "0" "src")
                      :id (aget nextsong "post_id")
                      :onclick "modern_cljs.gbc.bonuslistener(this.id);"}]]
              [:div {:style "text-align:center"}
               [:p {:class "mainparagraph"} (aget nextsong "attachment" "name")]]]) prev)))

  )

