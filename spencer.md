## Workout 3

 1. **Deterministisk och stokatisk modell**: Deterministisk modell ger samma data (entydigt) vid varje beräkning medan en stokatisk modell ger slumpmässa svar vid varje beräkning.



 2. **Varför fungerar Monte Carlo-metod för att räkna ut värdet på en integral.**
    - Sora talets lag: Som säger att medelvärdet konvergerar mot väntevärdet för ståra N.
    - centralgränsvärdesatsen: En summa av oberoende lika fördelade stokatsiska variabler med godtycklig fördelning är ungeför normalfördelade, bara antalet komponenter i summan är tillräckligt stort.
    -  Varför funkar MC metoden? En enkel integral kan approximeras till medelvärdet av ett intervall, Dvs.
    $$I = \int_a^b g(x) dx \approx \frac{b-a}{N} \sum^N g(x_i)$$

 3. **Beräkna följaden integral med MC metoden:**
  $$I = \int_0^1 x^2e^x dx = e-2 \approx 0.7183 $$
\[
 E[g(X)] = \int_{\Omega} g(X) f(X) dx
 \]

 där $f(X)$ är täthetsfunktionen.
Om $f(x)$ likformig fördelning
 $$f(X) = \frac{1}{b-a}, x\in [a,b]$$

\[
\begin{align}
E[g(X)] = \int_{\Omega} g(X)\frac{1}{b-a} dx\\
E[g(X)] = \frac{1}{b-a}\int_a^b g(x) dx\\
E[g(X)] = \frac{1}{b-a}I \\
E[g(X)] = \frac{1}{b-a}I\\
(b-a)E[g(x)]= I
\end{align}
\]

Väntevärdet för diskreta s.v kan (stora talets lag)
$$E[g(x)] \to \frac{1}{N} \sum^N_{i=1} g(x_i)\quad for N \to \infty$$
där
\[
\begin{align}
I = (b-a)E[g(x)]\\
I = (b-a) \frac{1}{N} \sum^N_{i=1} g(x_i)\\
I = \frac{(b-a)}{N} (g(x_1)+g(x_2)+\dots g(x_n))
\end{align}
\]


+ Använd 5 st x värden.
+ **MONTE CARLO:**
$$x = [0.8029, 0.6361, 0.7569, 0.3092, 0.4127]$$

låt $$g(x) = x^2e^x$$

\[
\begin{align}
I = \frac{1-0}{5} (g(0)+g(0.25)+g(0.5)+g(0.75)+g(1.0)) \\
I = \frac{1-0}{5} (0^2e^0+0.25^2e^0.25+0.5^2e^0.5+0.75^2e^0.75+1.0^2e^1.0)\\
I \approx 0.8803
\end{align}
\]

- Absolut fel:  $\epsilon = 0.7183 - 0.8803 = -0.1620$.
- trapetz: -0.04
- Simpson: - 0.0006
- MC: långsamt $N^{-1/2}$. men bra för högre dimentioner.

- Confidence intervall
\[
\begin{align}
I = \frac{b-a}{N} \sum_{i=1}^N g(x_i) \\
\hat{I} = \frac{1}{M} \sum_{j=1}^M I_j \\
\hat{s}^2 = \frac{1}{M-1} \sum_{j=1}^M (\hat{I} -I_j)^2 \\
|\epsilon| \leq \frac{1.96\hat{s}}{\sqrt{M}}
\end{align}
\]


4. Se koden

5. Fördelningsfunktionen är integralen av täthetsfunktinen
$$P(\tau < t) = F(t) = \int_{-\infty}^{\tau} f(t) dt$$

Låt $$f(t) = a_0e^{-a_0 t} \quad \tau \geq 0 \\ 0 \quad t < 0$$

då gäller att
\[
\begin{align}
F(\tau) = \int_{-\infty}^{t} f(t) dt\\
F(\tau) = \int_0^{\tau} f(t) dt\\
F(\tau) = \int_0^{\tau}a_0e^{-a_0 t}\\
F(\tau) = \bigg[-e^{-a_0t} \bigg]^{\tau}_0 \\
F(\tau) = 1-e^{-a_0\tau}
\end{align}
\]


om vi beräknar ett $u$ sådant att $F(\tau) = u$. Då gäller
\[
\begin{align}
F(\tau) = 1-e^{-a_0\tau} \\
u = 1-e^{-a_0\tau} \\
e^{-a_0\tau} = 1-u\\
-a_0\tau = \ln(1-u) \\
\tau = -\ln(1-u)/a_0
\end{align}
\]


  + Let $u = 0.3132$, then,
  $$\tau = -ln(1-0.3132) \approx 0.3757$$
