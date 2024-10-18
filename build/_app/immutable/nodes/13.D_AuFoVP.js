import{s as pe,n as F}from"../chunks/scheduler.Cs0xm5t1.js";import{S as oe,i as me,e as h,s as i,H as K,c as s,k as n,f as r,a as b,n as N,d as t,g as l,h as Q}from"../chunks/index.Cky_bo-2.js";function ve(ie){let f,U="Heaps",C,p,W='A <b>heap</b> is an array that is interpreted as a nearly complete binary tree: for a heap <math class="svelte-1flrsht">H</math>, <math class="svelte-1flrsht">H[0]</math> is the root of tree, <math class="svelte-1flrsht">H[1]</math> is the left child of root, <math class="svelte-1flrsht">H[2]</math> is the right child of the root, <math class="svelte-1flrsht">H[3]</math> is the left child of the left child of the root, and so on and so forth for the size of the array.',E,o,Z='Heaps have a <b>heap property</b>: in a <b>max-heap</b>, the property is that for every node <math class="svelte-1flrsht">i</math> other than the root,',P,m,G='<math class="svelte-1flrsht">H[PARENT(i)] ≥ H[i]</math>',w,v,J="aka the value of any node is at most the value of it&#39;s parent. A <b>min-heap</b> is the reverse.",O,c,V='The <b>height</b> of a heap is the height of the binary tree the heap represents. For an array of <math class="svelte-1flrsht">n</math> elements, a heap&#39;s height is <math class="svelte-1flrsht">O(log n)</math>.',k,y,g,z,re=`struct Heap {
  int size;
  int array[HEAP_SIZE];
}

int parent(int i) {
  return i / 2;
}

int left(int i) {
  return 2 * i;
}

int right(int i) {
  return 2 * i + 1
}`,A,d,X='A <b>heapify</b> algorithm helps maintain a heap&#39;s heap property. It&#39;s called with a heap and an index to start at, and assumes that the sub-heaps to the left and right of the index maintain the heap propery, but that <math class="svelte-1flrsht">H[i]</math> might not. Here&#39;s <code>max_heapify</code>:',I,x,L,R,ne=`void max_heapify(struct Heap h, int i) {
  int left = left(i);
  int right = right(i);
  int largest = -1;
  if (left &lt; heap.size + 1 &&
      heap.array[left] &gt; heap.array[i])
    largest = left;
  else
    largest = i;
  if (right &lt; heap.size + 1 &&
      h.array[right] &gt; h.array[largest])
    largest = right;
  if (largest != i) {
    int temp = heap.array[i];
    heap.array[i] = heap.array[largest];
    heap.array[largest] = temp;
    max_heapify(h, largest);
  }
}`,q,_,Y='The runtime of <code>max_heapify</code> is <math class="svelte-1flrsht">O(log n)</math> or <math class="svelte-1flrsht">O(h)</math> (for height <math class="svelte-1flrsht">h</math>), and the proof is complicated enough I&#39;m not going to get into it here.',D,u,$='We can convert an array of <math class="svelte-1flrsht">n</math> elements into a max-heap with <code>build_max_heap</code>:',S,T,M,j,fe=`void build_max_heap(struct Heap h, int n) {
  h.size = n;
  for (int i = h.size / 2; i > 0; i--)
    max_heapify(h, i);
}`,B,H,ee='The elements in the array from <math class="svelte-1flrsht">(n/2) + 1</math> to <math class="svelte-1flrsht">n</math> are all leaves, which are essentially 1-element heaps already. <code>build_max_heap</code> actually takes <math class="svelte-1flrsht">O(n)</math>, the proof for which is complicated enough that I&#39;m not going to get into it here.';return{c(){f=h("h1"),f.textContent=U,C=i(),p=h("p"),p.innerHTML=W,E=i(),o=h("p"),o.innerHTML=Z,P=i(),m=h("blockquote"),m.innerHTML=G,w=i(),v=h("p"),v.innerHTML=J,O=i(),c=h("p"),c.innerHTML=V,k=i(),y=h("pre"),g=h("code"),z=new K(!1),A=i(),d=h("p"),d.innerHTML=X,I=i(),x=h("code"),L=h("pre"),R=new K(!1),q=i(),_=h("p"),_.innerHTML=Y,D=i(),u=h("p"),u.innerHTML=$,S=i(),T=h("pre"),M=h("code"),j=new K(!1),B=i(),H=h("p"),H.innerHTML=ee,this.h()},l(e){f=s(e,"H1",{"data-svelte-h":!0}),n(f)!=="svelte-1829kk7"&&(f.textContent=U),C=r(e),p=s(e,"P",{"data-svelte-h":!0}),n(p)!=="svelte-nsvaoj"&&(p.innerHTML=W),E=r(e),o=s(e,"P",{"data-svelte-h":!0}),n(o)!=="svelte-az9cad"&&(o.innerHTML=Z),P=r(e),m=s(e,"BLOCKQUOTE",{"data-svelte-h":!0}),n(m)!=="svelte-15bff9n"&&(m.innerHTML=G),w=r(e),v=s(e,"P",{"data-svelte-h":!0}),n(v)!=="svelte-o9sp62"&&(v.innerHTML=J),O=r(e),c=s(e,"P",{"data-svelte-h":!0}),n(c)!=="svelte-1rfu2f"&&(c.innerHTML=V),k=r(e),y=s(e,"PRE",{});var a=b(y);g=s(a,"CODE",{});var te=b(g);z=N(te,!1),te.forEach(t),a.forEach(t),A=r(e),d=s(e,"P",{"data-svelte-h":!0}),n(d)!=="svelte-1edxldw"&&(d.innerHTML=X),I=r(e),x=s(e,"CODE",{});var ae=b(x);L=s(ae,"PRE",{});var le=b(L);R=N(le,!1),le.forEach(t),ae.forEach(t),q=r(e),_=s(e,"P",{"data-svelte-h":!0}),n(_)!=="svelte-1o93js4"&&(_.innerHTML=Y),D=r(e),u=s(e,"P",{"data-svelte-h":!0}),n(u)!=="svelte-678xfl"&&(u.innerHTML=$),S=r(e),T=s(e,"PRE",{});var he=b(T);M=s(he,"CODE",{});var se=b(M);j=N(se,!1),se.forEach(t),he.forEach(t),B=r(e),H=s(e,"P",{"data-svelte-h":!0}),n(H)!=="svelte-hb4hf6"&&(H.innerHTML=ee),this.h()},h(){z.a=null,R.a=null,j.a=null},m(e,a){l(e,f,a),l(e,C,a),l(e,p,a),l(e,E,a),l(e,o,a),l(e,P,a),l(e,m,a),l(e,w,a),l(e,v,a),l(e,O,a),l(e,c,a),l(e,k,a),l(e,y,a),Q(y,g),z.m(re,g),l(e,A,a),l(e,d,a),l(e,I,a),l(e,x,a),Q(x,L),R.m(ne,L),l(e,q,a),l(e,_,a),l(e,D,a),l(e,u,a),l(e,S,a),l(e,T,a),Q(T,M),j.m(fe,M),l(e,B,a),l(e,H,a)},p:F,i:F,o:F,d(e){e&&(t(f),t(C),t(p),t(E),t(o),t(P),t(m),t(w),t(v),t(O),t(c),t(k),t(y),t(A),t(d),t(I),t(x),t(q),t(_),t(D),t(u),t(S),t(T),t(B),t(H))}}}class _e extends oe{constructor(f){super(),me(this,f,null,ve,pe,{})}}export{_e as component};
