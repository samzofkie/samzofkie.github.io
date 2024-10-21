import{s as pe,n as F}from"../chunks/scheduler.Cs0xm5t1.js";import{S as oe,i as me,e as s,s as i,H as K,c as h,k as n,f as r,a as b,n as N,d as t,g as l,h as Q}from"../chunks/index.Cky_bo-2.js";function ve(ie){let f,U="Heaps",C,p,W='A <b>heap</b> is an array that is interpreted as a nearly complete binary tree: for a heap <math class="svelte-1flrsht">H</math>, <math class="svelte-1flrsht">H[0]</math> is the root of tree, <math class="svelte-1flrsht">H[1]</math> is the left child of root, <math class="svelte-1flrsht">H[2]</math> is the right child of the root, <math class="svelte-1flrsht">H[3]</math> is the left child of the left child of the root, and so on and so forth for the size of the array.',E,o,Z='Heaps have a <b>heap property</b>: in a <b>max-heap</b>, the property is that for every node <math class="svelte-1flrsht">i</math> other than the root,',P,m,G='<math class="svelte-1flrsht">H[PARENT(i)] ≥ H[i]</math>',w,v,J="aka the value of any node is at most the value of it&#39;s parent. A <b>min-heap</b> is the reverse.",O,c,V='The <b>height</b> of a heap is the height of the binary tree the heap represents. For an array of <math class="svelte-1flrsht">n</math> elements, a heap&#39;s height is <math class="svelte-1flrsht">O(log n)</math>.',k,y,g,z,re=`struct Heap {
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
}`,A,_,X='A <b>heapify</b> algorithm maintains a heap&#39;s heap property. It&#39;s called with a heap and an index to start at, and assumes that the sub-heaps to the left and right of the index maintain the heap propery, but that <math class="svelte-1flrsht">H[i]</math> might not. Here&#39;s <code>max_heapify</code>:',I,x,L,R,ne=`void max_heapify(struct Heap h, int i) {
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
}`,q,d,Y='The runtime of <code>max_heapify</code> is <math class="svelte-1flrsht">O(log n)</math> or <math class="svelte-1flrsht">O(h)</math> (for height <math class="svelte-1flrsht">h</math>), and the proof is complicated enough I&#39;m not going to get into it here.',D,u,$='We can convert an array of <math class="svelte-1flrsht">n</math> elements into a max-heap with <code>build_max_heap</code>:',S,T,M,j,fe=`void build_max_heap(struct Heap h, int n) {
  h.size = n;
  for (int i = h.size / 2; i > 0; i--)
    max_heapify(h, i);
}`,B,H,ee='The elements in the array from <math class="svelte-1flrsht">(n/2) + 1</math> to <math class="svelte-1flrsht">n</math> are all leaves, which are essentially 1-element heaps already. <code>build_max_heap</code> actually takes <math class="svelte-1flrsht">O(n)</math>, the proof for which is complicated enough that I&#39;m not going to get into it here.';return{c(){f=s("h1"),f.textContent=U,C=i(),p=s("p"),p.innerHTML=W,E=i(),o=s("p"),o.innerHTML=Z,P=i(),m=s("blockquote"),m.innerHTML=G,w=i(),v=s("p"),v.innerHTML=J,O=i(),c=s("p"),c.innerHTML=V,k=i(),y=s("pre"),g=s("code"),z=new K(!1),A=i(),_=s("p"),_.innerHTML=X,I=i(),x=s("pre"),L=s("code"),R=new K(!1),q=i(),d=s("p"),d.innerHTML=Y,D=i(),u=s("p"),u.innerHTML=$,S=i(),T=s("pre"),M=s("code"),j=new K(!1),B=i(),H=s("p"),H.innerHTML=ee,this.h()},l(e){f=h(e,"H1",{"data-svelte-h":!0}),n(f)!=="svelte-1829kk7"&&(f.textContent=U),C=r(e),p=h(e,"P",{"data-svelte-h":!0}),n(p)!=="svelte-nsvaoj"&&(p.innerHTML=W),E=r(e),o=h(e,"P",{"data-svelte-h":!0}),n(o)!=="svelte-az9cad"&&(o.innerHTML=Z),P=r(e),m=h(e,"BLOCKQUOTE",{"data-svelte-h":!0}),n(m)!=="svelte-15bff9n"&&(m.innerHTML=G),w=r(e),v=h(e,"P",{"data-svelte-h":!0}),n(v)!=="svelte-o9sp62"&&(v.innerHTML=J),O=r(e),c=h(e,"P",{"data-svelte-h":!0}),n(c)!=="svelte-1rfu2f"&&(c.innerHTML=V),k=r(e),y=h(e,"PRE",{});var a=b(y);g=h(a,"CODE",{});var te=b(g);z=N(te,!1),te.forEach(t),a.forEach(t),A=r(e),_=h(e,"P",{"data-svelte-h":!0}),n(_)!=="svelte-42vv9p"&&(_.innerHTML=X),I=r(e),x=h(e,"PRE",{});var ae=b(x);L=h(ae,"CODE",{});var le=b(L);R=N(le,!1),le.forEach(t),ae.forEach(t),q=r(e),d=h(e,"P",{"data-svelte-h":!0}),n(d)!=="svelte-1o93js4"&&(d.innerHTML=Y),D=r(e),u=h(e,"P",{"data-svelte-h":!0}),n(u)!=="svelte-678xfl"&&(u.innerHTML=$),S=r(e),T=h(e,"PRE",{});var se=b(T);M=h(se,"CODE",{});var he=b(M);j=N(he,!1),he.forEach(t),se.forEach(t),B=r(e),H=h(e,"P",{"data-svelte-h":!0}),n(H)!=="svelte-hb4hf6"&&(H.innerHTML=ee),this.h()},h(){z.a=null,R.a=null,j.a=null},m(e,a){l(e,f,a),l(e,C,a),l(e,p,a),l(e,E,a),l(e,o,a),l(e,P,a),l(e,m,a),l(e,w,a),l(e,v,a),l(e,O,a),l(e,c,a),l(e,k,a),l(e,y,a),Q(y,g),z.m(re,g),l(e,A,a),l(e,_,a),l(e,I,a),l(e,x,a),Q(x,L),R.m(ne,L),l(e,q,a),l(e,d,a),l(e,D,a),l(e,u,a),l(e,S,a),l(e,T,a),Q(T,M),j.m(fe,M),l(e,B,a),l(e,H,a)},p:F,i:F,o:F,d(e){e&&(t(f),t(C),t(p),t(E),t(o),t(P),t(m),t(w),t(v),t(O),t(c),t(k),t(y),t(A),t(_),t(I),t(x),t(q),t(d),t(D),t(u),t(S),t(T),t(B),t(H))}}}class de extends oe{constructor(f){super(),me(this,f,null,ve,pe,{})}}export{de as component};
