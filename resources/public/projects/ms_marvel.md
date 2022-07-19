TITLE=Analyzing Online Sentiment Towards Marvel TV Shows
DATE=7/18/2022
PREVIEW=Yes, Ms. Marvel was review-bombed. Don't believe me? I'll prove it.
TAGS=Data Science, Wolfram Language, Marvel
DRAFT=true 


Have you been watching Ms. Marvel recently? Chances are you either loved it or hated it. And if you hated it enough to give it a terrible rating, chances are it's because you were put off by its racial and religious diversity. An explosive claim that has you either nodding or shaking your head? Sure. But one I can back up with data.

Like many others, I instantly fell in love with Ms. Marvel. It's not often that I'm able to enjoy a motion picture in the MCU without the prescience that comes from already having read the comics – or more accurately, the Marvel Encyclopedia. But I had actually never heard of Ms. Marvel (at least, Kamala Khan's rendition of her) until Disney+ announced the series. 

Being Indian myself, many of the show's cultural themes felt refreshingly relatable, and its departure from the same boring stereotypes South Asians almost always take on in American television  was a welcome one. But while I wasn't overly surprised that the show topped other hard-hitters such as Blank Panther and Avengers: Endgame to become the best reviewed Marvel motion picture ever, I was puzzled by reports that the show was being review-bombed.

Many news outlets were quick to point to the show's diverse cast as the reason for it being targeted, even without the most conclusive statistical evidence that review-bombing was happening in the first place. Although, to be fair, anyone with an ounce of common sense could see that it was. I mean, Ms. Marvel had a one-star rating on Rotten Tomatoes within three minutes of its TV release, even though the first episode clocked in at around an hour.

Still, the statistical argument most articles presented amounted roughly to "look at this big difference between average critic and user score". I felt like we could do better than that. So I scraped Metacritic for reviews from both critics and users. Not just for Ms. Marvel, but for all Marvel TV shows released to date, so that we could actually make some meaningful comparisons. Here's what I saw.

<div style="text-align:center;margin-bottom:25px;">
<img src=../../images/marvel/critic_score.png class=get-bigger style="width:80%"></img>
</div>


<div style="text-align:center;">
<img src=../../images/marvel/user_score.png class=get-bigger style="width:80%"></img>
</div>

As expected, Ms. Marvel leads the pack in terms of average critic score (which ranges from 0-100). But it gets bumped down nearly 40 percentage points when looking at average user score (which ranges from 0-10), landing it squarely in last place. Whatever your opinion is  on the show, you have to admit that this is strange. We expect critics to be much more judgmental than users, so the fact that a show fares almost twice as well under critics should have you raising your eyebrows. 

Moreover, we now know that Ms. Marvel's average score has dropped more than any other Marvel TV show to date when comparing critic versus user reviews. This at least opens up the possibility of review-bombing. The next obvious thing to do is visualize the actual distributions for user and critic scores so we can determine what leads to the average scores we just saw.

<div style="text-align:center;margin-top:40px;">
<img src=../../images/marvel/hard_vs_smooth_hist.png class=get-bigger style="width:80%"></img>
</div>

The distributions for users and critics look completely different, when comparing histograms as well as "smooth histograms" (which is what we'll call a PDF from which the distribution could be generated). In particular, notice how the critic distribution has an extremely tall peak around 80%, and essentially no peaks lower than that (especially when compared to the distributions of other shows). This provides some more qualitative evidence for just how well the show was received by critics. 

The user distribution on the other hand is extremely bimodal, with one peak at the very left (indicating low scores) and a smaller peak at the very right (indicating high scores). This is much more convincing evidence of review-bombing, as we see that while  a portion of users rate the show highly (in accordance with critics), a larger portion of users is bucking this trend and consistently giving the show 0s, 1s, and 2s, substantially lowering its average score.

<img src=../../images/marvel/critic_density.png class=two-images></img>
<img src=../../images/marvel/user_density.png class=two-images></img>

Looking at density plots of the score distributions confirms the same thing. Look how weird Ms. Marvel's critic distribution looks compared to other shows'. It has essentially no reviews below the 80% range, whereas most other shows' reviews run the gamut from extremely low to extremely high. Meanwhile, the density plot for its user score distribution shows the exact opposite, with, once again, two extreme camps forming at either end.

At this point, we've gotten as close to 
&ldquo;proving&rdquo; review-bombing as is possible. We have identified that Ms. Marvel's overall score moved from first to last place when comparing critics' and users' scores, and that this change was due to a large group of users giving it abysmally low scores, even while another sizeable portion of users were scoring it quite highly. 

This, alongside some of the other non-numerical evidence we discussed earlier, should be enough to convince almost any reasonable person that Ms. Marvel has been review-bombed. So let's move on to the more interesting question...*why?*

<div style="text-align:center;margin-top:40px;">
<img src=../../images/marvel/good_vs_bad_wordcld.png class=get-bigger style="width:80%"></img>
</div>

We can count up the occurrences of all words that appear in users' positive (≥ 7) and negative reviews (≤ 3) and generate word clouds from them. We can even generate wordclouds that contain language exclusive to positive and negative reviews. 

When we do, we seen a very clear trend. Positive reviews tend focus more on the content of the story and its characters (&ldquo;charismatic&rdquo;, &ldquo;colorful&rdquo;, &ldquo;relatable&rdquo;) while negative ones tend to focus on the religious and racial of these characters, and the show's perceive message and ideology (&ldquo;Muslim&rdquo;, &ldquo;religion&rdquo;, &ldquo;woke&rdquo;, &ldquo;political&rdquo;). And really, this is what we'd expect. After all, it was for these exact same reasons that fans revolted when the comics were released in 2014. 

Of course, I don't mean to imply that everyone who left a bad review did so due to some underlying bias, or that there aren't other valid reasons for disliking the show. Some users cite the change in Ms. Marvel's power set from the comics (&ldquo;powers&rdquo;, &ldquo;comics&rdquo;) as a reason for rating the show badly. And then that's something I can definitely understand (though there have been many other power changes in the MCU that no one batted an eye about). 

So to conclude: we've found a large group of users that are rating the show extremely lowly (especially compared to other shows) despite many other users and critics rating it extremely well, as also found a bias tying the former together. This more thorough statistical evidence means that review-bombing is basically a certainty.

If you want some more details, as well as to dig into the code I used to make these visualizations, a more formal writeup of the project is available both as a  <a class="colored-text-link" href="https://www.wolframcloud.com/obj/rohanm/Published/marvelShowsAnalysis.nb">Cloud Notebook</a> or <a  class="colored-text-link" href=../../images/marvel/marvelPublished.pdf download>PDF</a>. These documents also contain links to sources for all other claims I make here (such as initial reports reporting review-bombing). I would encourage you to try and adapt the code to work with other Marvel motion pictures, and share whatever you discover!
