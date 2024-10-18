import{s as w,n as p}from"../chunks/scheduler.Cs0xm5t1.js";import{S as C,i as H,e as c,s as u,c as f,k as v,f as d,g as i,d as h}from"../chunks/index.Cky_bo-2.js";function L(x){let t,y="Dynamic Arrays",r,s,_='Many languages have <b>dynamic arrays</b>, arrays that automatically resize, typically doubling whenever the array becomes full. Like static arrays, access is still <math class="svelte-1flrsht">O(1)</math>, but doubling takes <math class="svelte-1flrsht">O(n)</math>.',m,a,b='Doubling is rare enough that insertion (amortized) is still <math class="svelte-1flrsht">O(n)</math>. The logic goes like this: if you have an array of <math class="svelte-1flrsht">n</math> elements, the most recent time the array doubled, <math class="svelte-1flrsht">n/2</math> elements were copied, the second most recent time, <math class="svelte-1flrsht">n/4</math> elements were copied, the third most recent time, <math class="svelte-1flrsht">n/8</math> elements were copied, and so on. So for <math class="svelte-1flrsht">n</math> total insertions, the total number of elements that have been copied is <math class="svelte-1flrsht">n/2 + n/4 + n/8 + ... 4 + 2 + 1</math>, which is less than <math class="svelte-1flrsht">n</math>.',o,l,g='So on average, insertion is <math class="svelte-1flrsht">O(n)</math>-- however, <i>worst-case</i> insertion is <math class="svelte-1flrsht">O(n)</math>.';return{c(){t=c("h1"),t.textContent=y,r=u(),s=c("p"),s.innerHTML=_,m=u(),a=c("p"),a.innerHTML=b,o=u(),l=c("p"),l.innerHTML=g},l(e){t=f(e,"H1",{"data-svelte-h":!0}),v(t)!=="svelte-1l2g6ar"&&(t.textContent=y),r=d(e),s=f(e,"P",{"data-svelte-h":!0}),v(s)!=="svelte-ssg3pl"&&(s.innerHTML=_),m=d(e),a=f(e,"P",{"data-svelte-h":!0}),v(a)!=="svelte-6ij8i3"&&(a.innerHTML=b),o=d(e),l=f(e,"P",{"data-svelte-h":!0}),v(l)!=="svelte-i0w8ch"&&(l.innerHTML=g)},m(e,n){i(e,t,n),i(e,r,n),i(e,s,n),i(e,m,n),i(e,a,n),i(e,o,n),i(e,l,n)},p,i:p,o:p,d(e){e&&(h(t),h(r),h(s),h(m),h(a),h(o),h(l))}}}class O extends C{constructor(t){super(),H(this,t,null,L,w,{})}}export{O as component};
