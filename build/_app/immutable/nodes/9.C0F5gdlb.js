import{s as Ue,n as se}from"../chunks/scheduler.Cs0xm5t1.js";import{S as je,i as Re,e as r,s as o,H as ae,c as a,k as s,f as n,a as m,n as oe,d as t,g as l,h as ne}from"../chunks/index.Cky_bo-2.js";function Se(Oe){let h,he="Binary Search Trees",q,f,me="Basic operations for a <b>complete</b> <b>binary search tree</b> take <math>O(log n)</math> time, worst-case: however, if the tree is just a chain of nodes (effectively a linked list), the same basic operations take <math>O(n)</math> time worst-case.",B,p,fe="Nodes in a BST have four properties:",D,M,P,U,Ie=`struct Node {
  struct Node* parent;
  struct Node* left;
  struct Node* right;
  int key;
};`,j,u,pe="The keys of a binary search tree are always stored in a way that satisfies the <b>binary-search-tree property</b>:",R,d,ue="Let <math>x</math> be a node in a binary search tree. If <math>y</math> is a node in the left subtree of <math>x</math>, then <math>y.key ≤ x.key</math>. If <math>y</math> is a node in the right subtree of <math>x</math>, then <math>y.key ≥ x.key</math>.",S,c,de="Because of this property, you can print all the keys in order with a recursive algorithm called <b>inorder tree walk</b>.",Q,v,ce="Querying",A,x,ve="Querying a binary search tree for the minimum, maximum, or a specific key takes <math>O(h)</math> time, where <math>h</math> is the height of the tree:",F,N,g,G,qe=`struct Node* tree_search(struct Node* root, int k) {
  if (!root || root-&gt;key == k)
    return root;
  else if (k &lt; root-&gt;key)
    return tree_search(root-&gt;left, k);
  else
    return tree_search(root-&gt;right, k);
}`,K,_,xe="An iterative version of this algorithm will probably run faster on most computers.",J,y,_e="Finding the minimum or maximum is as simple as following the root down it&#39;s <code>left</code> or <code>right</code> pointers until the next one is <code>NULL</code>:",V,E,O,W,Be=`struct Node* tree_minimum(struct Node* root) {
  while (root-&gt;left)
    root = root-&gt;left;
  return root;        
}

struct Node* tree_maximum(struct Node* root) {
  while (root-&gt;right)
    root = root-&gt;right;
  return root;
}`,X,b,ye="The <b>successor</b> of a node is next node visited after it in an inorder tree traversal; the <b>predecessor</b> would be the node visit right <i>before</i> it in an inorder tree traversal.",Y,k,be="The algorithm for finding the predecessor (or successor) of a node isn&#39;t completely trivial. Given a node <math>x</math>, there are two main cases to consider:",Z,w,ke="<li>If the left subtree is nonempty, then the predecessor is the rightmost node in the left subtree.</li> <li>If the left subtree is empty, then the predecessor will be the <u>lowest ancestor of <math>x</math> whose left child is also an ancestor of <math>x</math></u> (this is worth drawing out).</li>",$,L,we="Insertion and deletion",ee,C,Le="Insertion begins at the root of the tree and walks downward, looking for a <code>NULL</code> child to insert it&#39;s node at. It uses a <b>trailing pointer</b> (in this implementation, <code>y</code>) to keep track of the parent:",te,z,I,ie,De=`void tree_insert(struct Tree* tree, struct Node* z) {
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
}`,le,T,Ce="Deleting a node <math>z</math> from a tree <math>T</math> is solidly trickier than insertion, but it nicely divides into three situations:",re,H,Te="<li>If <math>z</math> has no children, just make its parents pointer to it <code>NULL</code>.</li> <li>If <math>z</math> has one child, promote that child to take its place (make <math>z</math>&#39;s parent point to <math>z</math>&#39;s child, and make its child point to its parent).</li> <li>If <math>z</math> has two children,</li>";return{c(){h=r("h1"),h.textContent=he,q=o(),f=r("p"),f.innerHTML=me,B=o(),p=r("p"),p.textContent=fe,D=o(),M=r("pre"),P=r("code"),U=new ae(!1),j=o(),u=r("p"),u.innerHTML=pe,R=o(),d=r("blockquote"),d.innerHTML=ue,S=o(),c=r("p"),c.innerHTML=de,Q=o(),v=r("h2"),v.textContent=ce,A=o(),x=r("p"),x.innerHTML=ve,F=o(),N=r("pre"),g=r("code"),G=new ae(!1),K=o(),_=r("p"),_.textContent=xe,J=o(),y=r("p"),y.innerHTML=_e,V=o(),E=r("pre"),O=r("code"),W=new ae(!1),X=o(),b=r("p"),b.innerHTML=ye,Y=o(),k=r("p"),k.innerHTML=be,Z=o(),w=r("ol"),w.innerHTML=ke,$=o(),L=r("h2"),L.textContent=we,ee=o(),C=r("p"),C.innerHTML=Le,te=o(),z=r("pre"),I=r("code"),ie=new ae(!1),le=o(),T=r("p"),T.innerHTML=Ce,re=o(),H=r("ol"),H.innerHTML=Te,this.h()},l(e){h=a(e,"H1",{"data-svelte-h":!0}),s(h)!=="svelte-c6wle4"&&(h.textContent=he),q=n(e),f=a(e,"P",{"data-svelte-h":!0}),s(f)!=="svelte-1pdnptg"&&(f.innerHTML=me),B=n(e),p=a(e,"P",{"data-svelte-h":!0}),s(p)!=="svelte-1msr62t"&&(p.textContent=fe),D=n(e),M=a(e,"PRE",{});var i=m(M);P=a(i,"CODE",{});var He=m(P);U=oe(He,!1),He.forEach(t),i.forEach(t),j=n(e),u=a(e,"P",{"data-svelte-h":!0}),s(u)!=="svelte-16atrob"&&(u.innerHTML=pe),R=n(e),d=a(e,"BLOCKQUOTE",{"data-svelte-h":!0}),s(d)!=="svelte-14juh3b"&&(d.innerHTML=ue),S=n(e),c=a(e,"P",{"data-svelte-h":!0}),s(c)!=="svelte-vbmi8x"&&(c.innerHTML=de),Q=n(e),v=a(e,"H2",{"data-svelte-h":!0}),s(v)!=="svelte-1ozi12m"&&(v.textContent=ce),A=n(e),x=a(e,"P",{"data-svelte-h":!0}),s(x)!=="svelte-d4rk6l"&&(x.innerHTML=ve),F=n(e),N=a(e,"PRE",{});var Me=m(N);g=a(Me,"CODE",{});var Ne=m(g);G=oe(Ne,!1),Ne.forEach(t),Me.forEach(t),K=n(e),_=a(e,"P",{"data-svelte-h":!0}),s(_)!=="svelte-1k37ql3"&&(_.textContent=xe),J=n(e),y=a(e,"P",{"data-svelte-h":!0}),s(y)!=="svelte-adzbss"&&(y.innerHTML=_e),V=n(e),E=a(e,"PRE",{});var Ee=m(E);O=a(Ee,"CODE",{});var ze=m(O);W=oe(ze,!1),ze.forEach(t),Ee.forEach(t),X=n(e),b=a(e,"P",{"data-svelte-h":!0}),s(b)!=="svelte-1qju2pt"&&(b.innerHTML=ye),Y=n(e),k=a(e,"P",{"data-svelte-h":!0}),s(k)!=="svelte-ud4icv"&&(k.innerHTML=be),Z=n(e),w=a(e,"OL",{"data-svelte-h":!0}),s(w)!=="svelte-f3tzh9"&&(w.innerHTML=ke),$=n(e),L=a(e,"H2",{"data-svelte-h":!0}),s(L)!=="svelte-142q4ng"&&(L.textContent=we),ee=n(e),C=a(e,"P",{"data-svelte-h":!0}),s(C)!=="svelte-1w77ikq"&&(C.innerHTML=Le),te=n(e),z=a(e,"PRE",{});var Pe=m(z);I=a(Pe,"CODE",{});var ge=m(I);ie=oe(ge,!1),ge.forEach(t),Pe.forEach(t),le=n(e),T=a(e,"P",{"data-svelte-h":!0}),s(T)!=="svelte-1lpsnlc"&&(T.innerHTML=Ce),re=n(e),H=a(e,"OL",{"data-svelte-h":!0}),s(H)!=="svelte-1ug11fy"&&(H.innerHTML=Te),this.h()},h(){U.a=null,G.a=null,W.a=null,ie.a=null},m(e,i){l(e,h,i),l(e,q,i),l(e,f,i),l(e,B,i),l(e,p,i),l(e,D,i),l(e,M,i),ne(M,P),U.m(Ie,P),l(e,j,i),l(e,u,i),l(e,R,i),l(e,d,i),l(e,S,i),l(e,c,i),l(e,Q,i),l(e,v,i),l(e,A,i),l(e,x,i),l(e,F,i),l(e,N,i),ne(N,g),G.m(qe,g),l(e,K,i),l(e,_,i),l(e,J,i),l(e,y,i),l(e,V,i),l(e,E,i),ne(E,O),W.m(Be,O),l(e,X,i),l(e,b,i),l(e,Y,i),l(e,k,i),l(e,Z,i),l(e,w,i),l(e,$,i),l(e,L,i),l(e,ee,i),l(e,C,i),l(e,te,i),l(e,z,i),ne(z,I),ie.m(De,I),l(e,le,i),l(e,T,i),l(e,re,i),l(e,H,i)},p:se,i:se,o:se,d(e){e&&(t(h),t(q),t(f),t(B),t(p),t(D),t(M),t(j),t(u),t(R),t(d),t(S),t(c),t(Q),t(v),t(A),t(x),t(F),t(N),t(K),t(_),t(J),t(y),t(V),t(E),t(X),t(b),t(Y),t(k),t(Z),t(w),t($),t(L),t(ee),t(C),t(te),t(z),t(le),t(T),t(re),t(H))}}}class Fe extends je{constructor(h){super(),Re(this,h,null,Se,Ue,{})}}export{Fe as component};
