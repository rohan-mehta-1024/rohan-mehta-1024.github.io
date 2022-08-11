TITLE=Sentiment Analysis of Marvel TV Shows
DATE=8/9/2022
PREVIEW=Yes, Ms. Marvel was review-bombed. Don't believe me? I'll prove it.
TAGS=Data Science, Wolfram Language, Marvel
DRAFT=false
IMG=https://mehta-rohan.com/images/marvel/critic_score2.png


Have you been watching *Ms. Marvel* recently? Chances are you either loved it or hated it. And if you hated it enough to give it a terrible rating, chances are it's because you were put off by its racial and religious diversity. An explosive claim that has you either nodding or shaking your head? Sure. But one I can back up with data.

Like many others, I instantly fell in love with *Ms. Marvel*. It's not often that I'm able to enjoy a motion picture<sup><a href=#foot1 id=head1 class="colored-post-link">1</a></sup> in the MCU without the prescience that comes from already having read the comics – or more accurately, the Marvel Encyclopedia. But I had actually never heard of *Ms. Marvel* (at least, Kamala Khan's rendition of her) until Disney+ announced the series. 

Being Indian myself, many of the show's cultural themes felt refreshingly relatable, and its departure from the same boring stereotypes South Asians almost always take on in American television  was a welcome one. But while I wasn't overly surprised that the show topped other hard-hitters such as *Black Panther* and *Endgame* to become the best reviewed Marvel motion picture ever, I was puzzled by reports that the show was being review-bombed.

Many news outlets were quick to point to the show's diverse cast as the reason for it being targeted, even without the most conclusive statistical evidence that review-bombing was happening in the first place. Although, to be fair, anyone with an ounce of common sense could see that it was. I mean, *Ms. Marvel* had a one-star rating on Rotten Tomatoes within three minutes of its TV release, even though the first episode clocked in at around an hour.

Still, the statistical argument most articles presented amounted roughly to "look at this big difference between average critic and user score". I felt like we could do better than that. So I scraped Metacritic for reviews from both critics and users. Not just for *Ms. Marvel*, but for all Marvel TV shows released to date, so that we could actually make some meaningful comparisons. Here's what I saw.

<div style="text-align:center;margin-bottom:25px;">
<img src=../../images/marvel/critic_score2.png class=get-bigger style="width:80%;margin-bottom:-15px;"></img>
</div>


As expected, *Ms. Marvel* leads the pack in terms of average critic score (which ranges from 0-100), though it is closely followed by *WandaVision* and *Loki*, Marvel's first and third TV releases. 

<div style="text-align:center;">
<img src=../../images/marvel/user_score.png class=get-bigger style="width:80%;margin-bottom:-15px;"></img>
</div>

But it gets bumped down nearly 40 percentage points when looking at average user score (which ranges from 0-10), landing it squarely in last place! Whatever your opinion of the show is, you have to admit that this is strange. We expect critics to be much more judgmental than users, so the fact that a show fares almost twice as well under the former should have you raising your eyebrows. 

Moreover, we now know that *Ms. Marvel's* average score has dropped more than any other Marvel TV show to date when comparing critic versus user reviews. This at least opens up the possibility of review-bombing. The next obvious thing to do is visualize the actual distributions for user and critic scores so we can determine what leads to the average scores we just saw.

<div style="text-align:center;margin-bottom:20px;padding-top:10px;">
<img src=../../images/marvel/hists3.png class=get-bigger style="width:80%"></img> 
</div>

Unlike most other shows, *Ms. Marvel's* user and critic distributions look completely different, when comparing histograms as well as "smooth histograms" (which is what we'll call a PDF from which the distribution could be generated). In particular, notice how the critic distribution has an extremely tall peak around 80%, and essentially no peaks lower than that (especially when compared to the distributions of other shows). This provides some more quantitative evidence for just how well the show was received by critics. 

Its user distribution on the other hand is extremely bimodal, with one peak at the very left (indicating low scores) and a smaller peak at the very right (indicating high scores). This is much more convincing evidence of review-bombing, as we see that while a portion of users rated the show highly (in accordance with critics), a larger portion of users is bucking this trend and consistently giving the show 0s, 1s, and 2s, substantially lowering its average score.

<!--<img src=../../images/marvel/half11.png class=two-images></img>
<img src=../../images/marvel/half22.png class=two-images></img>!-->

<div style="text-align:center;margin-bottom:25px;">
<img src=../../images/marvel/double_final.png style="width:100%;margin-bottom:-15px;"></img>
</div>

Looking at density plots of the score distributions confirms the same thing. Notice how weird *Ms. Marvel's* critic distribution looks compared to those of other shows. It has essentially no reviews below the 80% range, whereas most other shows' reviews run the gamut from extremely low to extremely high. Meanwhile, the density plot for its user score distribution shows the exact opposite, with, once again, two extreme camps forming at either end.

Though this evidence is quite compelling, users can always just say that they didn't like the show. So how do we really &ldquo;prove&rdquo; that review-bombing is happening? Well, we first have to think about review-bombing really means. Review-bombing is when a group of users act in a coordinated and intentional way to decrease a motion picture's rating as much as possible. So where in the data might this be happening? 

Before we answer this question, we'll need to come up with a way of grouping reviews together. In accordance with Metacritic's classification scheme, we'll define positive reviews as those with scores greater than or equal to 7 or 70, negative reviews as those with scores less than or equal to 3 or 30, and neutral reviews as everything else. Armed with this metric, we can plot the composition of user reviews over time for *Ms. Marvel*.

<div style="text-align:center;margin-bottom:25px;">
<img src=../../images/marvel/comp_plot3.png class=get-bigger style="width:90%;margin-bottom:-10px;"></img>
</div>

And doing so is very revealing! We see that *Ms. Marvel*  was dominated by negative reviews from the very start, a trend which does not repeat for any other show. We also see that it reached &ldquo;equilibrium&rdquo; (i.e., constant percent composition) very quickly compared to other shows. This betrays some level of coordination among users, but we can do better?

Yes! We need to turn our attention to another metric assigned to each review: it's helpfulness score, which is calculated by how comparing how many upvotes versus downvotes a specific review gets. Since Metacritic uses reviews' helpfulness scores to determine on which page they're shown, we might expect review-bombers to downvote positive reviews and upvote their own negative ones. And that's exactly what we see.

<img src=../../images/marvel/helpful.png class=two-images></img>
<img src=../../images/marvel/helpful2.png class=two-images></img>


For shows like *WandaVision*, positive reviews generally receive very high helpfulness ratings, while negative ones don't. This makes sense, as many negative reviews will tend more towards aggressive rants than constructive criticism. Meanwhile, the trend reverses completely for *Ms. Marvel*. And it's even  more extreme than the regression line predicts, as the majority of data points are below the regression line. Coordinated? Check. Intentional? Check.

So, convinced? I certainly am. We now have a very sturdy statistical argument. We have identified that *Ms. Marvel's* overall score moved from first to last place when comparing critics' and users' scores, and that this change was due to a large group of users giving it abysmally low scores, even while another sizeable portion of users were scoring it quite highly. 

Moreover, we saw that it was completely dominated by negative reviews from the outset, and that review-bombers have purposefully been downvoting positive reviews so that their own negative reviews are shown first. But *why?*


<div style="text-align:center;margin-top:40px;">
<img src=../../images/marvel/good_vs_bad_wordcld.png class=get-bigger style="width:80%;margin-top:-10px;"></img>
</div>

We can count up the occurrences of all words that appear in users' positive and negative reviews for *Ms. Marvel* and generate word clouds from them. We can even generate wordclouds that contain language exclusive to positive and negative reviews. 

When we do, we seen a very clear trend. Positive reviews<sup><a href=#foot2 id=head2 class="colored-post-link">2</a></sup> tend to focus more on the content of the story and its characters (&ldquo;charismatic&rdquo;, &ldquo;colorful&rdquo;, &ldquo;relatable&rdquo;) while negative ones tend to focus on the religious and racial aspects of  these characters, and the show's perceived message and ideology (&ldquo;Muslim&rdquo;, &ldquo;religion&rdquo;, &ldquo;woke&rdquo;, &ldquo;political&rdquo;). And this isn't too surprising. It was for the exact same reasons that fans revolted when the comics were first released. 

Of course, I don't mean to imply that everyone who left a bad review did so due to some underlying bias, or that there aren't other valid reasons for disliking the show. Some users cite the change in Ms. Marvel's power set from the comics (&ldquo;powers&rdquo;, &ldquo;comics&rdquo;) as a reason for rating the show badly. And  that's something I can definitely understand (though I will say that there have been many other power changes in the MCU that no one batted an eye about). 

So to conclude: we've found a large group of users that are rating *Ms. Marvel* very poorly (especially compared to other Marvel shows) despite many other users and critics rating it extremely well. We've found evidence that these users have been intentional in doing so. And we've also found a racial and religious bias tying these low-rating users together. Or rather, review-bombers, because we can be pretty certain that that's what they are at this point. 

If you want some more details, as well as to dig into the code I used to make these visualizations, a more formal writeup of the project is available as a PDF <a class="colored-text-link" href=marvelPublished.pdf download>here</a>. This document also contains links to sources for all other claims I make in this post  (such as initial reports of review-bombing). I would encourage you to try and adapt the code to work with other Marvel motion pictures, and share whatever you discover!

<h1>Footnotes</h1>

<span id=foot1>**1.**</span>
Here, we'll take  &ldquo;motion picture&rdquo; to mean either TV show or movie (which is actually it's correct definition, even though we usually think of it  as synonymous with movie).<a href=#head1 class=colored-post-link>↩</a>

<span id=foot2>**2.**</span> Interestingly, quite a few  positive reviews are written in Spanish and Russian.<a href=#head2 class=colored-post-link>↩</a>

