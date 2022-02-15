TITLE=Chemical Rate Equations
DATE=10/25/2021
PREVIEW=This
TAGS=Differential Equations, Chemistry
DRAFT=true

All of science – from physics to chemistry to biology – attempts to 
construct accurate and predictive models of our world. But doing so,
it turns out, is hard. Very, very hard. In fact, all of our success in this arena 
has been almost entirely due to one realization: even though describing complex
systems from the ground up is usually beyond our ability, we're just smart enough 
to be able to distinguish what's different between two 
versions of the same system. Or, more specifically, what's changing.

Coming up with a mathematical description of how a system changes – 
known as a differential equation –  is the easy part, though. 
Reasoning backwards to an actual description of the system itself is infinitely harder 
(though also infinitely easier than trying to do so without the differential equation!). 
And while we humans have invented a bag of tools and tricks to 
crack these equations open, they tend to be frustratingly unintutive
and unmotivated.

What I propose here is a flipping of the script, so to speak. 
Instead of developing techniques for solving these equations 
and then applying them to real-life scenarios after the fact, 
can we turn <a class="colored-post-link" href="https://www.youtube.com/watch?v=tQQ3oiB32GI">
science in service of mathematics</a> and do the opposite?
It's an ambitious goal in any field of math, but given the inherently 
applied nature of differential equations, I'm hopeful that it just might
be possible in this case. Our starting point? Chemical rate equations!

<h1 class="header"">Modeling Chemical Reactions</h1>

Imagine we're studying a chemical reaction \\(\\ce{A -> B}\\) that converts some
chemical species \\(A\\) to a different species \\(B\\)  at a constant rate \\(k\\). No matter
how much \\(A\\) there is, the reaction chugs along at 
the same speed. Clearly, this is idealized behavior, 
but it's an easy place to start. We can encode the evolution of 
this system with the following differential equation: 
<p>$$-\frac{d[A]}{dt} =  k $$</p>

This equation has a very clear meaning. Every second
the concentration of \\(A\\) (denoted \\([A]\\)) goes down by \\(k\\), and,
consequently, the concentration of \\(B\\) (denoted \\([B]\\)) goes up
by the same amount. Solving this differential equation
means converting from a description of how \\([A]\\) and 
\\([B]\\) *change* over time, to a description of how they *are*
over time.

Even for an equation as simple as this one, it can be 
helpful to try and visualize what's really happening. 
Suppose that \\(k = 3,\\) and that we start out with
some \\(12\\) particles of species \\(A.\\) The following
diagrams represent the evolution of both \\([A]\\) and \\([B]\\) 
from \\(t=0\\) to \\(t=3.\\)


<img src=../../images/diffeq_1/zero_order.svg class=two-images   style="border:2px solid black;"></img>
<img src=../../images/diffeq_1/zero_order_1.svg class=two-images style="border:2px solid black;"></img>
<img src=../../images/diffeq_1/zero_order_2.svg class=two-images style="border:2px solid black;"></img>
<img src=../../images/diffeq_1/zero_order_3.svg class=two-images style="border:2px solid black;"></img>

During each time step, three more particles change color. 
This is analogous to converting \\(A\\) to \\(B\\). 
So if we want to calculate \\([A]\\) after
some amount of time \\(t\\) we just need add up the \\(-3\\) change that
occurs at every timestep and add it to our initial \\([A]\\), or 
\\([A]_0\\). 

We can easily convert this idea to a mathematical expression with some
basic calculus. To add up a value over time, we  need to make use of integrals.
Integrating both sides of our differential equation with respect to time, we get:

<p>$$\begin{aligned} 
-\frac{d[A]}{dt} &=  k \\[1pt] \\ 
\int -\frac{d[A]}{dt}\,dt &= \int k\,dt  \\[1pt] \\ 
-[A](t) + C_1 &= kt + C_2  \\[1pt] \\ 
[A](t) &= A_0 - kt  \\[1pt] \\ 
\end{aligned}$$</p>

<p style=margin-top:-20px;>Which is exactly what we predicted! Unfortunately,
equations as simple as this one are a very unrepresentative sampling 
of the world of differential equations. More realistically, a reaction's rate  will probably depend on how much of the reactant species there is. When there's more of it,
it will proceed faster than when there's
less of it. This kind of behavior is represented by a seemingly
only slightly more complex diffrential equation.</p>

<p>$$-\frac{d[A]}{dt} = k[A]$$</p>

However, it would generate a very different set of diagrams. No longer
would we see a whole number of particles of \\(A\\) having been converted to \\(B\\) after each second, but rather some non-constant fractional number. So, for the moment, let's throw visualization to the wind and just blindly integrate this new equation.


<p>$$\begin{aligned} 
\int -\frac{d[A]}{dt}\,dt &=  k\int [A]\,dt \\[1pt] \\ 
-[A](t) &= k \int[A]\,dt \\[1pt] \\ 
\end{aligned}$$</p>

<p style=margin-top:-20px;>Unfortuntately, this doesn't help us much either. We can't
simplify the integral of \([A] (t)\) (with respect to time), because we don't 
actually know what the expression for  \([A] (t)\) is.
That's what we're trying to figure out!
Right now, as far as we're concerned, this function is a blackbox.</p>

However, even though we can't calculate this integral, we can
still interpret it. In general, the integral of any function
with respect to time is the average of all the values it takes on 
between the two times we've set as our bounds. So this differential
equation tells us that \\([A]\\) at some time \\(t\\) is the average
of all existing values of \\([A]\\), since the start of our reaction.

And here's the crucial realization: we can
calculate \\([A]\\) at some time \\(t\\) – and thus this 
average – in two very different ways. Either 
we can step through every instant of time and add up all 
the minute changes from moment to moment, or we can simply navigate to the 
final time and count all the reactant particles that exist at this time. 
In one approach, we are counting through time and 
in the other we are counting through space. But
both are equivelant. 

<p>$$\int \frac{d[A]}{dt}\,dt = \int \,d[A] = [A] (t)$$</p>

Writing it down mathematically makes this seem obvious, but it's
worth really appreciating the profundity of this relation. Phrasing it
in a very concrete context, like with reactaing chemicals particles, 
helps give a physical intuition to how adding up different 
inifinitesimal quantities, like time and space, can still yield the same overall sum.

However this alone doesn't solve our problem. As in algebra,
we must first rearrange our equation to isolate 
all terms containing  \\([A]\\)  on one side. The equivalent expression
restates this in a different way. Rather than than the raw rate of change of this reactions being constant, it
is constant when divided by the existing \\([A]\\).

<p>$$\frac{d[A]}{dt} \cdot \frac{1}{[A]} = k$$</p>

Integrating this yields a considerably more complex-looking equation. 

<p>$$\int \frac{d[A]}{dt} \cdot \frac{1}{[A]}\,dt = \int k\,dt$$</p>

But we  now know thought transpose between
counting in space and counting in time. Integrating a rate of change over
time is equivalent to integrating over space at the final time.


<p>$$\int \frac{d[A]}{dt} \cdot \frac{1}{[A]} \,dt =\int k \,dt$$</p>

And suddenly, the equation becomes solvable!

And suddenly our left-hand integral becomes something we can solve! 
It seems a little like witchcraft, We did a very conversion of information. 
We were given that the is proportional to the at by \\(k\\), 
which we realizes is the same as saying that concentr is the average,
and further transformed it into

What is the physical significance of this? Well is that is
that the number of particles we gain constant number. And to keep
this number constant, the must decrease over time. However




<h1 class="header"">Seprable Differential Equations</h1>

That's because the equation we just examined is actually from a family
of general equations.

<h1 class="header""> Some Trickier Reactions</h1>

Even just, there's many interesting equations to examine! Instead
of simply dependning linearly on, a recation's rate may depend 
on it to some exponent. 

<h1 class="header"">Conclusion</h1>



