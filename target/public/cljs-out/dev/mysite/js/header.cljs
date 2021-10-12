(ns mysite.js.header
  (:require [clojure.string :as string]))

(defn get-element [id]
  (. js/document getElementById id))

(defn get-elements [class]
  (. js/document getElementsByClassName class))

(defn activate [el]
  (. (. el -classList) toggle "active"))

(defn get-and-activate [id]
  (-> id get-element activate))

(defn get-current [el]
  (. el -currentTarget))


(defn remove-class [class el]
  (. (. el -classList) remove class))

(defn get-active [class]
  (let [elements (-> class get-elements array-seq)
        pred    #(-> % (.-className) (string/includes? "active"))]
    (filter pred elements)))

(defn inactivate-all-others [el active-list]
  (doseq [element active-list
          :when (not= el element)]
    (activate element)))

(defn on-click-ham-menu []
  (let [subpages (get-elements "side-nav-subpages")]
    (get-and-activate "ham-menu")
    (get-and-activate "side-nav-background")
    (activate (.-body js/document))))

(defn on-click-subpage [el]
  (let [others (get-active "side-nav-subpages")]
    (inactivate-all-others el others)
    (activate el)))

(defn start-listening! []
  (let [ham-menu (get-element "ham-menu")
        subpages (get-elements "side-nav-subpages")]
    (. ham-menu addEventListener "click" on-click-ham-menu)
    (doseq [subpage subpages]
      (. subpage addEventListener "click" (comp on-click-subpage get-current)))))

;(js/commentBox "5711441948573696-proj")
(set! (.-onload js/window) start-listening!)
