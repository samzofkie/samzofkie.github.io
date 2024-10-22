import{s as Ue,n as se}from"../chunks/scheduler.Cs0xm5t1.js";import{S as je,i as Re,e as r,s as o,H as ae,c as a,k as s,f as n,a as m,n as oe,d as t,g as l,h as ne}from"../chunks/index.Cky_bo-2.js";import{h as Se}from"../chunks/utils.BJnaAM-2.js";function Qe(he){let h,me="Binary Search Trees",q,f,fe="Basic operations for a <b>complete</b> <b>binary search tree</b> take <math>O(log n)</math> time, worst-case: however, if the tree is just a chain of nodes (effectively a linked list), the same basic operations take <math>O(n)</math> time worst-case.",B,p,pe="Nodes in a BST have four properties:",D,M,P,U,Ie=`struct Node {
  struct Node* parent;
  struct Node* left;
  struct Node* right;
  int key;
};`,j,u,ue="The keys of a binary search tree are always stored in a way that satisfies the <b>binary-search-tree property</b>:",R,d,de="Let <math>x</math> be a node in a binary search tree. If <math>y</math> is a node in the left subtree of <math>x</math>, then <math>y.key ≤ x.key</math>. If <math>y</math> is a node in the right subtree of <math>x</math>, then <math>y.key ≥ x.key</math>.",S,c,ce="Because of this property, you can print all the keys in order with a recursive algorithm called <b>inorder tree walk</b>.",Q,v,ve="Querying",$,x,xe="Querying a binary search tree for the minimum, maximum, or a specific key takes <math>O(h)</math> time, where <math>h</math> is the height of the tree:",A,N,g,F,qe=`struct Node* tree_search(struct Node* root, int k) {
  if (!root || root-&gt;key == k)
    return root;
  else if (k &lt; root-&gt;key)
    return tree_search(root-&gt;left, k);
  else
    return tree_search(root-&gt;right, k);
}`,G,_,_e="An iterative version of this algorithm will probably run faster on most computers.",K,y,ye="Finding the minimum or maximum is as simple as following the root down it&#39;s <code>left</code> or <code>right</code> pointers until the next one is <code>NULL</code>:",J,E,O,V,Be=`struct Node* tree_minimum(struct Node* root) {
  while (root-&gt;left)
    root = root-&gt;left;
  return root;        
}

struct Node* tree_maximum(struct Node* root) {
  while (root-&gt;right)
    root = root-&gt;right;
  return root;
}`,W,b,be="The <b>successor</b> of a node is next node visited after it in an inorder tree traversal; the <b>predecessor</b> would be the node visit right <i>before</i> it in an inorder tree traversal.",X,k,ke="The algorithm for finding the predecessor (or successor) of a node isn&#39;t completely trivial. Given a node <math>x</math>, there are two main cases to consider:",Y,w,we="<li>If the left subtree is nonempty, then the predecessor is the rightmost node in the left subtree.</li> <li>If the left subtree is empty, then the predecessor will be the <u>lowest ancestor of <math>x</math> whose left child is also an ancestor of <math>x</math></u> (this is worth drawing out).</li>",Z,L,Le="Insertion and deletion",ee,C,Ce="Insertion begins at the root of the tree and walks downward, looking for a <code>NULL</code> child to insert it&#39;s node at. It uses a <b>trailing pointer</b> (in this implementation, <code>y</code>) to keep track of the parent:",te,z,I,ie,De=`void tree_insert(struct Tree* tree, struct Node* z) {
  struct Node* x = tree->root;
  struct Node* y = NULL;

  while (x) {
    y = x;
    if (z-&gt;key &lt; x-&gt;key)
      x = x-&gt;left;
    else
      x = x-&gt;right;
  }

  z-&gt;parent = y;
  
  if (!y) // tree was empty
    tree->root = z;
  else if (z->key &lt; y->key)
    y->left = z;
  else
    y->right = z;
}`,le,T,Te="Deleting a node <math>z</math> from a tree <math>T</math> is solidly trickier than insertion, but it nicely divides into three situations:",re,H,He="<li>If <math>z</math> has no children, just make its parents pointer to it <code>NULL</code>.</li> <li>If <math>z</math> has one child, promote that child to take its place (make <math>z</math>&#39;s parent point to <math>z</math>&#39;s child, and make its child point to its parent).</li> <li>If <math>z</math> has two children,</li>";return{c(){h=r("h1"),h.textContent=me,q=o(),f=r("p"),f.innerHTML=fe,B=o(),p=r("p"),p.textContent=pe,D=o(),M=r("pre"),P=r("code"),U=new ae(!1),j=o(),u=r("p"),u.innerHTML=ue,R=o(),d=r("blockquote"),d.innerHTML=de,S=o(),c=r("p"),c.innerHTML=ce,Q=o(),v=r("h2"),v.textContent=ve,$=o(),x=r("p"),x.innerHTML=xe,A=o(),N=r("pre"),g=r("code"),F=new ae(!1),G=o(),_=r("p"),_.textContent=_e,K=o(),y=r("p"),y.innerHTML=ye,J=o(),E=r("pre"),O=r("code"),V=new ae(!1),W=o(),b=r("p"),b.innerHTML=be,X=o(),k=r("p"),k.innerHTML=ke,Y=o(),w=r("ol"),w.innerHTML=we,Z=o(),L=r("h2"),L.textContent=Le,ee=o(),C=r("p"),C.innerHTML=Ce,te=o(),z=r("pre"),I=r("code"),ie=new ae(!1),le=o(),T=r("p"),T.innerHTML=Te,re=o(),H=r("ol"),H.innerHTML=He,this.h()},l(e){h=a(e,"H1",{"data-svelte-h":!0}),s(h)!=="svelte-c6wle4"&&(h.textContent=me),q=n(e),f=a(e,"P",{"data-svelte-h":!0}),s(f)!=="svelte-1pdnptg"&&(f.innerHTML=fe),B=n(e),p=a(e,"P",{"data-svelte-h":!0}),s(p)!=="svelte-1msr62t"&&(p.textContent=pe),D=n(e),M=a(e,"PRE",{});var i=m(M);P=a(i,"CODE",{});var Me=m(P);U=oe(Me,!1),Me.forEach(t),i.forEach(t),j=n(e),u=a(e,"P",{"data-svelte-h":!0}),s(u)!=="svelte-16atrob"&&(u.innerHTML=ue),R=n(e),d=a(e,"BLOCKQUOTE",{"data-svelte-h":!0}),s(d)!=="svelte-14juh3b"&&(d.innerHTML=de),S=n(e),c=a(e,"P",{"data-svelte-h":!0}),s(c)!=="svelte-vbmi8x"&&(c.innerHTML=ce),Q=n(e),v=a(e,"H2",{"data-svelte-h":!0}),s(v)!=="svelte-1ozi12m"&&(v.textContent=ve),$=n(e),x=a(e,"P",{"data-svelte-h":!0}),s(x)!=="svelte-d4rk6l"&&(x.innerHTML=xe),A=n(e),N=a(e,"PRE",{});var Ne=m(N);g=a(Ne,"CODE",{});var Ee=m(g);F=oe(Ee,!1),Ee.forEach(t),Ne.forEach(t),G=n(e),_=a(e,"P",{"data-svelte-h":!0}),s(_)!=="svelte-1k37ql3"&&(_.textContent=_e),K=n(e),y=a(e,"P",{"data-svelte-h":!0}),s(y)!=="svelte-adzbss"&&(y.innerHTML=ye),J=n(e),E=a(e,"PRE",{});var ze=m(E);O=a(ze,"CODE",{});var Pe=m(O);V=oe(Pe,!1),Pe.forEach(t),ze.forEach(t),W=n(e),b=a(e,"P",{"data-svelte-h":!0}),s(b)!=="svelte-1qju2pt"&&(b.innerHTML=be),X=n(e),k=a(e,"P",{"data-svelte-h":!0}),s(k)!=="svelte-ud4icv"&&(k.innerHTML=ke),Y=n(e),w=a(e,"OL",{"data-svelte-h":!0}),s(w)!=="svelte-f3tzh9"&&(w.innerHTML=we),Z=n(e),L=a(e,"H2",{"data-svelte-h":!0}),s(L)!=="svelte-142q4ng"&&(L.textContent=Le),ee=n(e),C=a(e,"P",{"data-svelte-h":!0}),s(C)!=="svelte-1w77ikq"&&(C.innerHTML=Ce),te=n(e),z=a(e,"PRE",{});var ge=m(z);I=a(ge,"CODE",{});var Oe=m(I);ie=oe(Oe,!1),Oe.forEach(t),ge.forEach(t),le=n(e),T=a(e,"P",{"data-svelte-h":!0}),s(T)!=="svelte-1lpsnlc"&&(T.innerHTML=Te),re=n(e),H=a(e,"OL",{"data-svelte-h":!0}),s(H)!=="svelte-1ug11fy"&&(H.innerHTML=He),this.h()},h(){U.a=null,F.a=null,V.a=null,ie.a=null},m(e,i){l(e,h,i),l(e,q,i),l(e,f,i),l(e,B,i),l(e,p,i),l(e,D,i),l(e,M,i),ne(M,P),U.m(Ie,P),l(e,j,i),l(e,u,i),l(e,R,i),l(e,d,i),l(e,S,i),l(e,c,i),l(e,Q,i),l(e,v,i),l(e,$,i),l(e,x,i),l(e,A,i),l(e,N,i),ne(N,g),F.m(qe,g),l(e,G,i),l(e,_,i),l(e,K,i),l(e,y,i),l(e,J,i),l(e,E,i),ne(E,O),V.m(Be,O),l(e,W,i),l(e,b,i),l(e,X,i),l(e,k,i),l(e,Y,i),l(e,w,i),l(e,Z,i),l(e,L,i),l(e,ee,i),l(e,C,i),l(e,te,i),l(e,z,i),ne(z,I),ie.m(De,I),l(e,le,i),l(e,T,i),l(e,re,i),l(e,H,i)},p:se,i:se,o:se,d(e){e&&(t(h),t(q),t(f),t(B),t(p),t(D),t(M),t(j),t(u),t(R),t(d),t(S),t(c),t(Q),t(v),t($),t(x),t(A),t(N),t(G),t(_),t(K),t(y),t(J),t(E),t(W),t(b),t(X),t(k),t(Y),t(w),t(Z),t(L),t(ee),t(C),t(te),t(z),t(le),t(T),t(re),t(H))}}}function $e(he){return Se(),[]}class Ke extends je{constructor(h){super(),Re(this,h,$e,Qe,Ue,{})}}export{Ke as component};
