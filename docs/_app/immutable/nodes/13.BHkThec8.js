import{s as pe,n as B}from"../chunks/scheduler.Cs0xm5t1.js";import{S as me,i as fe,e as h,s as r,H as F,c as l,k as s,f as n,a as b,n as K,d as t,g as i,h as N}from"../chunks/index.Cky_bo-2.js";import{h as _e}from"../chunks/utils.BJnaAM-2.js";function de(Q){let o,U="Heaps",M,p,W="A <b>heap</b> is an array that is interpreted as a nearly complete binary tree: for a heap <math>H</math>, <math>H[0]</math> is the root of tree, <math>H[1]</math> is the left child of root, <math>H[2]</math> is the right child of the root, <math>H[3]</math> is the left child of the left child of the root, and so on and so forth for the size of the array.",E,m,Z="Heaps have a <b>heap property</b>: in a <b>max-heap</b>, the property is that for every node <math>i</math> other than the root,",P,f,G="<math>H[PARENT(i)] ≥ H[i]</math>",w,_,J="aka the value of any node is at most the value of it&#39;s parent. A <b>min-heap</b> is the reverse.",O,d,V="The <b>height</b> of a heap is the height of the binary tree the heap represents. For an array of <math>n</math> elements, a heap&#39;s height is <math>O(log n)</math>.",k,y,g,z,ne=`struct Heap {
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
}`,A,u,X="A <b>heapify</b> algorithm maintains a heap&#39;s heap property. It&#39;s called with a heap and an index to start at, and assumes that the sub-heaps to the left and right of the index maintain the heap propery, but that <math>H[i]</math> might not. Here&#39;s <code>max_heapify</code>:",I,x,C,R,se=`void max_heapify(struct Heap h, int i) {
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
}`,q,v,Y="The runtime of <code>max_heapify</code> is <math>O(log n)</math> or <math>O(h)</math> (for height <math>h</math>), and the proof is complicated enough I&#39;m not going to get into it here.",D,c,ee="We can convert an array of <math>n</math> elements into a max-heap with <code>build_max_heap</code>:",S,T,L,j,oe=`void build_max_heap(struct Heap h, int n) {
  h.size = n;
  for (int i = h.size / 2; i > 0; i--)
    max_heapify(h, i);
}`,$,H,te="The elements in the array from <math>(n/2) + 1</math> to <math>n</math> are all leaves, which are essentially 1-element heaps already. <code>build_max_heap</code> actually takes <math>O(n)</math>, the proof for which is complicated enough that I&#39;m not going to get into it here.";return{c(){o=h("h1"),o.textContent=U,M=r(),p=h("p"),p.innerHTML=W,E=r(),m=h("p"),m.innerHTML=Z,P=r(),f=h("blockquote"),f.innerHTML=G,w=r(),_=h("p"),_.innerHTML=J,O=r(),d=h("p"),d.innerHTML=V,k=r(),y=h("pre"),g=h("code"),z=new F(!1),A=r(),u=h("p"),u.innerHTML=X,I=r(),x=h("pre"),C=h("code"),R=new F(!1),q=r(),v=h("p"),v.innerHTML=Y,D=r(),c=h("p"),c.innerHTML=ee,S=r(),T=h("pre"),L=h("code"),j=new F(!1),$=r(),H=h("p"),H.innerHTML=te,this.h()},l(e){o=l(e,"H1",{"data-svelte-h":!0}),s(o)!=="svelte-1829kk7"&&(o.textContent=U),M=n(e),p=l(e,"P",{"data-svelte-h":!0}),s(p)!=="svelte-nsvaoj"&&(p.innerHTML=W),E=n(e),m=l(e,"P",{"data-svelte-h":!0}),s(m)!=="svelte-az9cad"&&(m.innerHTML=Z),P=n(e),f=l(e,"BLOCKQUOTE",{"data-svelte-h":!0}),s(f)!=="svelte-15bff9n"&&(f.innerHTML=G),w=n(e),_=l(e,"P",{"data-svelte-h":!0}),s(_)!=="svelte-o9sp62"&&(_.innerHTML=J),O=n(e),d=l(e,"P",{"data-svelte-h":!0}),s(d)!=="svelte-1rfu2f"&&(d.innerHTML=V),k=n(e),y=l(e,"PRE",{});var a=b(y);g=l(a,"CODE",{});var ae=b(g);z=K(ae,!1),ae.forEach(t),a.forEach(t),A=n(e),u=l(e,"P",{"data-svelte-h":!0}),s(u)!=="svelte-42vv9p"&&(u.innerHTML=X),I=n(e),x=l(e,"PRE",{});var ie=b(x);C=l(ie,"CODE",{});var he=b(C);R=K(he,!1),he.forEach(t),ie.forEach(t),q=n(e),v=l(e,"P",{"data-svelte-h":!0}),s(v)!=="svelte-1o93js4"&&(v.innerHTML=Y),D=n(e),c=l(e,"P",{"data-svelte-h":!0}),s(c)!=="svelte-678xfl"&&(c.innerHTML=ee),S=n(e),T=l(e,"PRE",{});var le=b(T);L=l(le,"CODE",{});var re=b(L);j=K(re,!1),re.forEach(t),le.forEach(t),$=n(e),H=l(e,"P",{"data-svelte-h":!0}),s(H)!=="svelte-hb4hf6"&&(H.innerHTML=te),this.h()},h(){z.a=null,R.a=null,j.a=null},m(e,a){i(e,o,a),i(e,M,a),i(e,p,a),i(e,E,a),i(e,m,a),i(e,P,a),i(e,f,a),i(e,w,a),i(e,_,a),i(e,O,a),i(e,d,a),i(e,k,a),i(e,y,a),N(y,g),z.m(ne,g),i(e,A,a),i(e,u,a),i(e,I,a),i(e,x,a),N(x,C),R.m(se,C),i(e,q,a),i(e,v,a),i(e,D,a),i(e,c,a),i(e,S,a),i(e,T,a),N(T,L),j.m(oe,L),i(e,$,a),i(e,H,a)},p:B,i:B,o:B,d(e){e&&(t(o),t(M),t(p),t(E),t(m),t(P),t(f),t(w),t(_),t(O),t(d),t(k),t(y),t(A),t(u),t(I),t(x),t(q),t(v),t(D),t(c),t(S),t(T),t($),t(H))}}}function ue(Q){return _e(),[]}class ye extends me{constructor(o){super(),fe(this,o,ue,de,pe,{})}}export{ye as component};
