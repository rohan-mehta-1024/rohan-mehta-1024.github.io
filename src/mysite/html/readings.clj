(ns mysite.html.readings)

(def books 
  [["Parable Series" {:enjoyable true :novelty true :changed-my-thinking true :recommend true :comments "My first exposure to this type of science fiction. Interesting modern analogy: Lauren is the Elon Musk of her time, but her tool is religion rather than companies. Also some parallels to Shusterman's Arc of Scythe trilogy (especially in terms of the ending). I liked Sower more than Talents."}]
   ["Mirror Visitor Series"  {:enjoyable true :novelty true :changed-my-thinking false :recommend :shrug :comments "Strong world-building in first and third books. Terrible and confusing fourth book (and thus ending). Kind of shot itself in the foot by failing to develop many characters in the second half of the series. Also most English translations are quite clunky (it's originally French). However its defiance of banal YA fiction tropes is still refreshing."}]
   ["Tomorrow, and Tomorrow, and Tomorrow" {:enjoyable true :novelty true :changed-my-thinking true :recommend true :comments "I don't have much to add here; I loved it as much as everyone else and it's as good as everyone says it is. The characters were the closest approximation of real people I've ever experienced in a book."}]
   ["The Last Cuentista" {:enjoyable :shrug :novelty true :changed-my-thinking true :recommend :shrug :comments "I thought this book was going to be a real gem! It's such a unique take on the theme of space colonization, especially given that it's written as a children's book. But it fumbled the ending in a way that really ruined the story for me. Way to many plot holes and unresolved question...big letdown."}]
   ["The Machinery Of Life" {:enjoyable true :novelty true :changed-my-thinking true :recommend true :comments "Read it if you're high school teacher messed up biology for you. Read it if they didn't. It will blow your mind – and, incidentally, make it look like they did a bad job – either way!"}]
])

(defn classify-rating [n]
  (cond
    (= n true) "&#9989;"
    (= n false)  "&#10060;"
    (= n :shrug) [:span  {:style {:font-size "18px"}} "&#129335"] ))

(defn book-row [[title properties]]
  [:tr
   [:td.title-column.center-text title]
   [:td.center-text (classify-rating (:enjoyable properties))]
   [:td.center-text (classify-rating (:novelty properties))]
   [:td.center-text (classify-rating (:changed-my-thinking properties))]
   [:td.center-text (classify-rating (:recommend properties))]
   [:td.last (:comments properties)]])

(def html
  (into [:table {:class "book-table"}
                                        ;[:caption "I love to read, so here's a list of books I've read. I score them based on how fun they were to read, how novel their ideas were (to me, at the time I read them), how much they changed my thinking, and whether I think you should probably read them too."]
         [:caption "Books I've Read"]
         [:tr 
          [:th "Book"]
          [:th "Enjoyable"]
          [:th "Novel"]
          [:th "Transformative"]
          [:th "Recommendation"]
          [:th.last "Commentary"]]] 
        (map book-row books)))
