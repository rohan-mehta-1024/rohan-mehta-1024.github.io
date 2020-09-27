(ns personal-website.db)

(def default-db
  {:homepage {:hamburger-menu false
              :subpage-hover [false 0]
              :side-nav-arrow {:2 false :3 false :4 false :5 false}}
              :search false
              :search-term ""})
