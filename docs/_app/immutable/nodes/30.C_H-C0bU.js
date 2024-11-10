import{s as I,a as j,n as k}from"../chunks/scheduler.Cs0xm5t1.js";import{S as O,i as S,e as f,s as u,c as p,k as c,f as d,l as A,g as a,d as i}from"../chunks/index.Cky_bo-2.js";function z(y){let l,T="Tries",v,s,b="A <b>trie</b> is a variant of a <math>n</math>-ary tree where characters are stored at each node, and each path down the tree can represent a word:",x,n,M,_,r,H="The <math>*</math> nodes represent the fact that all letters leading up to that node in the trie form a valid word-- for example, in this case, <code>MANY</code> is a valid word.",C,o,q="In interview questions, tries are very often used to store the entire English language for quick prefix lookups. A hash table can do quick lookups to tell us if a word is valid in a certain language, but not for prefixes of a word-- a trie can do this well.",g,h,L="A trie can lookup if a string is a valid word of prefix in <math>O(k)</math> time, where <math>k</math> is the length of the string (this is the same performance as a hash table, since although lookup is constant time in a hash table, reading all the characters of a string is <math>O(k)</math>).",w,m,P="Remember tries for problems involving lists of valid words.";return{c(){l=f("h1"),l.textContent=T,v=u(),s=f("p"),s.innerHTML=b,x=u(),n=f("img"),_=u(),r=f("p"),r.innerHTML=H,C=u(),o=f("p"),o.textContent=q,g=u(),h=f("p"),h.innerHTML=L,w=u(),m=f("p"),m.textContent=P,this.h()},l(t){l=p(t,"H1",{"data-svelte-h":!0}),c(l)!=="svelte-1ug5kor"&&(l.textContent=T),v=d(t),s=p(t,"P",{"data-svelte-h":!0}),c(s)!=="svelte-190mjh9"&&(s.innerHTML=b),x=d(t),n=p(t,"IMG",{alt:!0,src:!0}),_=d(t),r=p(t,"P",{"data-svelte-h":!0}),c(r)!=="svelte-m62t8e"&&(r.innerHTML=H),C=d(t),o=p(t,"P",{"data-svelte-h":!0}),c(o)!=="svelte-1lnj3e9"&&(o.textContent=q),g=d(t),h=p(t,"P",{"data-svelte-h":!0}),c(h)!=="svelte-10esqn0"&&(h.innerHTML=L),w=d(t),m=p(t,"P",{"data-svelte-h":!0}),c(m)!=="svelte-18nvzu0"&&(m.textContent=P),this.h()},h(){A(n,"alt","A diagram of a trie from Cracking The Coding Interview."),j(n.src,M="/trie.png")||A(n,"src",M)},m(t,e){a(t,l,e),a(t,v,e),a(t,s,e),a(t,x,e),a(t,n,e),a(t,_,e),a(t,r,e),a(t,C,e),a(t,o,e),a(t,g,e),a(t,h,e),a(t,w,e),a(t,m,e)},p:k,i:k,o:k,d(t){t&&(i(l),i(v),i(s),i(x),i(n),i(_),i(r),i(C),i(o),i(g),i(h),i(w),i(m))}}}class N extends O{constructor(l){super(),S(this,l,null,z,I,{})}}export{N as component};