### Asymptotic Notations
Big O characterizes an upper bound-- a function grows no faster than a certain rate. The highest-order term of the function 7*n*<sup>3</sup> + 100*n*<sup>2</sup> - 20*n* + 6 is 7*n*<sup>3</sup>, so we can say this function grows no faster than *n*<sup>3</sup>, and that it is O(*n*<sup>3</sup>). This means it is also O(*n*<sup>4</sup>), since it grows more slowly than *n*<sup>4</sup>.

Ω notation characterizes a lower bound-- a function grows *at least* as fast as a certain rate, based on the highest-order term. 7*n*<sup>3</sup> + 100*n*<sup>2</sup> - 20*n* + 6 is Ω(*n*<sup>3</sup>), as well as Ω(*n*<sup>2</sup>) and Ω(*n*).

Θ notation describes a *tight* bound on asymptotic behavior based, again based on the highest-order term-- it characterizes the rate of growth of a function within a constant factor from above and below-- if a function is both O(*f(n)*) and Ω(*f(n)*), it is Θ(*f(n)*).

O(*g(n)*) = the set of functions {*f(n)*: there exist positive constants *c* and *n*<sub>0</sub> such that 0 ≤ *f(n)* ≤ *g(n)* for all *n* ≥ *n*<sub>0</sub>}.

Ω(*g(n)*) = the set of functions {*f(n)*: there exist positive constants *c* and *n*<sub>0</sub> such that 0 ≤ *g(n)* ≤ *f(n)* for all *n* ≥ *n*<sub>0</sub>}.

Θ(*g(n)*) = the set of functions {*f(n)*: there exist positive constants *c*<sub>1</sub>, *c*<sub>2</sub> and *n*<sub>0</sub> such that 0 ≤ *c*<sub>1</sub>*g(n)* ≤ *f(n)* ≤ *c*<sub>2</sub>*g(n)* for all *n* ≥ *n*<sub>0</sub>}.
