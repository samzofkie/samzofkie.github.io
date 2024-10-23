import{s as N,n as E}from"../chunks/scheduler.Cs0xm5t1.js";import{S as X,i as D,e as h,s as c,t as F,c as r,k as d,f as x,a as R,b as K,d as a,g as i,h as z}from"../chunks/index.Cky_bo-2.js";import{h as U}from"../chunks/utils.BJnaAM-2.js";function Y(H){let n,L="Priority Queues",_,s,A="A <b>priority queue</b> is a data structure for maintaining a set of elements, each with an associated value called a <b>key</b>. Like heaps, they have two variants, <math>min</math> and <math>max</math>. A max-priority queue supports the following operations:",v,l,S="<li><math>INSERT(S, x, k)</math>: inserts the element <math>x</math> with key <math>k</math> into <math>S</math></li> <li><math>MAXIMUM(S)</math>: returns the element from <math>S</math> with the largest key</li> <li><math>EXTRACT-MAX(S)</math>: returns and removes the element from <math>S</math> with the largest key</li> <li><math>INCREASE-KEY(S, x, k)</math>: increases the value of <math>x</math>&#39;s key to <math>k</math> (assumes <math>x</math>&#39;s previous key was less than or equal to <math>k</math>)</li>",b,o,g="Whereas a min-priority queue would have equivalent <math>INSERT</math>, <math>MINIMUM</math>, <math>EXTRACT-MIN</math> and <math>DECREASE-KEY</math> functions.",k,m,q="Heaps are often used in applications, but require some sort of translation schema to map array indices to application objects. This is often accomplished with a <b>handle</b>: auxiliary information stored in the heap elements and / or application object that provide enough information to complete the mapping. For example, the handle in the application object might only contain the heap index, and only be accessed by the priority queue code, and the heap keys might contain pointers to their corresponding application objects. But since heap array indices change throughout their lifespan, the heap implementation must update the application objects whenever it swaps the position of heap elements-- typically this overhead is <math>O(n)</math>, worst-case.",w,p,P="An alternative would be to maintain an extra external data structure (like hash table) capable of mapping heap elements to application code objects. This way, application objects need to embellishment. IF the mapping is inefficient, however, this could add significant overhead.",M,y,f,j=`int max_heap_maximum(Heap h) {
  if (h.size < 1)
    return -1; // heap underflow
  return h.array[0];
}

int max_heap_extract_max(Heap h) {
  int max = max_heap_maximum(h);
  heap.array[0] = heap.array[heap.size--];
  max_heapify(h, 0);
  return max;
}

void max_heap_increase_key(Heap h, int x, int k) {
  if (h.array[k] < x) {
    h.error = PQ_KEY_TOO_SMALL;
  } else {
    h.array[x] = k;

    for (
      int i = x;
      i < 0 && h.array[parent(i)] < h.array[i];
      i = parent(i)
    ) {
      int tmp = h.array[i];
      h.array[i] = h.array[parent(i)];
      h.array[parent(i)] = tmp;
    }
  }
}

void max_heap_insert(Heap h, int x, int k) {
  if (h.size == HEAP_MAX) {
    h.error = HEAP_OVERFLOW;
  } else {
    h.size++;
  h.array[h.size] = k;
  max_heap_increase_key(h, x, k);

  }
}`,C,T,u,I="TODO: this code is bad. I need to reflect more deeply about how priority queues work, and then probably just make them their own <code>struct</code>. Also actually deciding the best error-handling strategy for <code>Heap</code> would probably go a long way.";return{c(){n=h("h1"),n.textContent=L,_=c(),s=h("p"),s.innerHTML=A,v=c(),l=h("ul"),l.innerHTML=S,b=c(),o=h("p"),o.innerHTML=g,k=c(),m=h("p"),m.innerHTML=q,w=c(),p=h("p"),p.textContent=P,M=c(),y=h("pre"),f=h("code"),C=F(j),T=c(),u=h("p"),u.innerHTML=I},l(e){n=r(e,"H1",{"data-svelte-h":!0}),d(n)!=="svelte-saso1y"&&(n.textContent=L),_=x(e),s=r(e,"P",{"data-svelte-h":!0}),d(s)!=="svelte-1xvlbld"&&(s.innerHTML=A),v=x(e),l=r(e,"UL",{"data-svelte-h":!0}),d(l)!=="svelte-1qjmbcb"&&(l.innerHTML=S),b=x(e),o=r(e,"P",{"data-svelte-h":!0}),d(o)!=="svelte-ahjqr4"&&(o.innerHTML=g),k=x(e),m=r(e,"P",{"data-svelte-h":!0}),d(m)!=="svelte-1ewbzh8"&&(m.innerHTML=q),w=x(e),p=r(e,"P",{"data-svelte-h":!0}),d(p)!=="svelte-1houwgz"&&(p.textContent=P),M=x(e),y=r(e,"PRE",{});var t=R(y);f=r(t,"CODE",{});var O=R(f);C=K(O,j),O.forEach(a),t.forEach(a),T=x(e),u=r(e,"P",{"data-svelte-h":!0}),d(u)!=="svelte-ukbwgl"&&(u.innerHTML=I)},m(e,t){i(e,n,t),i(e,_,t),i(e,s,t),i(e,v,t),i(e,l,t),i(e,b,t),i(e,o,t),i(e,k,t),i(e,m,t),i(e,w,t),i(e,p,t),i(e,M,t),i(e,y,t),z(y,f),z(f,C),i(e,T,t),i(e,u,t)},p:E,i:E,o:E,d(e){e&&(a(n),a(_),a(s),a(v),a(l),a(b),a(o),a(k),a(m),a(w),a(p),a(M),a(y),a(T),a(u))}}}function Q(H){return U(),[]}class V extends X{constructor(n){super(),D(this,n,Q,Y,N,{})}}export{V as component};
