(ns personal-website.subs
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
 :homepage/hamburger-menu
 (fn [db _]
   (-> db :homepage :hamburger-menu)))

(re-frame/reg-sub
  :homepage/subpage-hover
  (fn [db _]
    (-> db :homepage :subpage-hover)))

(re-frame/reg-sub
 :homepage/subpage-container-hover
 (fn [db _]
   (-> db :homepage :subpage-container-hover)))


(re-frame/reg-sub
  :homepage/side-nav-arrow
  (fn [db _]
    (-> db :homepage :side-nav-arrow)))

(re-frame/reg-sub
  :homepage/search
  (fn [db _]
    (-> db :homepage :search)))

(re-frame/reg-sub
  :homepage/search-term
  (fn [db _]
    (-> db :homepage :search-term)))

(re-frame/reg-sub
  :homepage/reloading
  (fn [db _]
    (-> db :homepage :reloading)))
