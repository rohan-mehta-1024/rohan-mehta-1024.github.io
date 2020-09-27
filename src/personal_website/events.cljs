(ns personal-website.events
  (:require [re-frame.core :as re-frame]
            [kee-frame.core :as k]
            [personal-website.db :as db]))



(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

(re-frame/reg-event-db
 :homepage/hamburger-menu
 (fn [db [_ _]]
   (update-in db [:homepage :hamburger-menu] not)))

(re-frame/reg-event-db
 :homepage/subpage-hover
 (fn [db [_ new-val]]
   (assoc-in db [:homepage :subpage-hover] new-val)))

(re-frame/reg-event-db
  :homepage/side-nav-arrow
  (fn [db [_ keyword]]
    (update-in db [:homepage :side-nav-arrow keyword] not)))

(re-frame/reg-event-db
 :homepage/search
 (fn [db [_ _]]
   (update-in db [:homepage :search] not)))

(re-frame/reg-event-db
 :homepage/search-term
 (fn [db [_ new-val]]
   (assoc-in db [:homepage :search-term] new-val)))
