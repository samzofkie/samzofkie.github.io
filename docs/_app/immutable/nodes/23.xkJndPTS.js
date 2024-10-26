import{s as L,n as _}from"../chunks/scheduler.Cs0xm5t1.js";import{S as O,i as T,e as p,s as v,t as z,c as h,k as b,f as x,a as H,b as E,d as i,g as n,h as P}from"../chunks/index.Cky_bo-2.js";import{h as M}from"../chunks/utils.BJnaAM-2.js";function S(k){let a,A="Quicksort",u,r,C="<b>Quicksort</b>, developed by Tony Hoare in 1959, has a worst-case run time of <math>O(n<sup>2</sup>)</math>, but is still often the best choice of sorting algorithm because it&#39;s remarkably efficient on average. It&#39;s expected run time is <math>O(n log n)</math>, the constants hidden in big-<math>O</math> notation are small, and it sorts in-place (unlike merge sort).",m,s,w="Similarly to merge sort, quicksort's approach could be characterized as a divide-and-conquer one:",d,l,g=`<li>Partition the array into two (possibly empty) subarrays like this:
    <ol><li>Pick a <b>pivot</b> index</li> <li>Iterate over the array, swapping array elements that are smaller than the pivot into the low section, using a variable to track the size of the low section</li> <li>After iterating over the whole array, put the pivot in between the low sub array and the high subarray</li></ol></li> <li>Recursively sort the two subarrays</li>`,f,o,c,j=`int partition(int *A, int p, int r) {
  int x = A[r], i = p - 1;
  for (int j=p; j<r; j++)
    if (A[j] <= x)
      swap(&A[++i], &A[j]);
  swap(&A[i+1], &A[r]);
  return i+1;
}

void quicksort(int *A, int p, int r) {
  if (p < r) {
    int q = partition(A, p, r);
    quicksort(A, p, q-1);
    quicksort(A, q+1, r);
  }
}`,y;return{c(){a=p("h1"),a.textContent=A,u=v(),r=p("p"),r.innerHTML=C,m=v(),s=p("p"),s.textContent=w,d=v(),l=p("ol"),l.innerHTML=g,f=v(),o=p("pre"),c=p("code"),y=z(j)},l(t){a=h(t,"H1",{"data-svelte-h":!0}),b(a)!=="svelte-1c3zjdz"&&(a.textContent=A),u=x(t),r=h(t,"P",{"data-svelte-h":!0}),b(r)!=="svelte-1ghxjlk"&&(r.innerHTML=C),m=x(t),s=h(t,"P",{"data-svelte-h":!0}),b(s)!=="svelte-43lysj"&&(s.textContent=w),d=x(t),l=h(t,"OL",{"data-svelte-h":!0}),b(l)!=="svelte-pvbjel"&&(l.innerHTML=g),f=x(t),o=h(t,"PRE",{});var e=H(o);c=h(e,"CODE",{});var q=H(c);y=E(q,j),q.forEach(i),e.forEach(i)},m(t,e){n(t,a,e),n(t,u,e),n(t,r,e),n(t,m,e),n(t,s,e),n(t,d,e),n(t,l,e),n(t,f,e),n(t,o,e),P(o,c),P(c,y)},p:_,i:_,o:_,d(t){t&&(i(a),i(u),i(r),i(m),i(s),i(d),i(l),i(f),i(o))}}}function I(k){return M(),[]}class D extends O{constructor(a){super(),T(this,a,I,S,L,{})}}export{D as component};
