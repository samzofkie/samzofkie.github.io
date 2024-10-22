import{s as R,n as w}from"../chunks/scheduler.Cs0xm5t1.js";import{S as z,i as B,e as a,s as r,H as F,c as s,k as d,f as o,a as $,n as G,d as i,g as n,h as J}from"../chunks/index.Cky_bo-2.js";import{h as K}from"../chunks/utils.BJnaAM-2.js";function Q(P){let l,O="Linked lists",_,h,q="Unlike a contiguous block of memory, order in <b>linked lists</b> is determined by a pointer in each object.",b,p,E="The <b>head</b> of a linked list is the first node, and it&#39;s <b>tail</b> is the last node.",k,c,I="Searching a linked list is <math>O(n)</math> in the worst-case.",H,m,S="Inserting a node before the current head, or at any specific place if you have a pointer to that specific place, is <math>O(1)</math>.",L,f,j="Deleteing a node takes <math>O(1)</math> time if you have a pointer to that node (otherwise search is <math>O(n)</math>). Also, deletion is <math>O(1)</math> in a doubly linked list, whereas it&#39;s <math>O(n)</math> in the worst case for a singly linked list.",T,u,U="Insertion and deletion are faster for linked lists than for arrays, but finding the <math>k<sup>th</sup></math> element in an array would be <math>O(n)</math> time in an array whereas it would be <math>O(k)</math> time in a linked list.",C,x,A="A <b>sentinel</b> is a dummy object that simplified boundary conditions. The sentinel represents <code>NIL</code> but has the attributes of a node (<code>next</code>, <code>key</code>, <code>prev</code> if doubly linked). Using sentinels doesn&#39;t change the asymptotic run time of linked list operations, but can decrease the constant factor.",M,v,y,N,g=`struct Node {
  int value;
  struct Node* prev;
  struct Node* next;
}

// Search head for v
struct Node* list_search(struct Node* head, int v) {
  struct Node* i = head;
  while (i && i->key != v)
    i = i.next;
  return i;
}

// Prepend x to the head
void list_prepend(struct Node* head, struct Node* x) {
  x->next = head;
  x->prev = NULL;
  if (head)
    head->prev = x;
  head = x;
}

// Insert x after y
  void list_insert(struct Node* x, struct Node* y) {
  x->next = y->next;
  x->prev = y;
  if (y->next)
    y->next->prev = x;
  y->next = x;
}

void list_delete(struct Node* head, struct Node* x) {
  if (x->prev)
    x->prev->next = x->next;
  else
    head = x->next;
  if (x->next)
    x->next->prev = x->prev;
}`;return{c(){l=a("h1"),l.textContent=O,_=r(),h=a("p"),h.innerHTML=q,b=r(),p=a("p"),p.innerHTML=E,k=r(),c=a("p"),c.innerHTML=I,H=r(),m=a("p"),m.innerHTML=S,L=r(),f=a("p"),f.innerHTML=j,T=r(),u=a("p"),u.innerHTML=U,C=r(),x=a("p"),x.innerHTML=A,M=r(),v=a("pre"),y=a("code"),N=new F(!1),this.h()},l(e){l=s(e,"H1",{"data-svelte-h":!0}),d(l)!=="svelte-1byp4xs"&&(l.textContent=O),_=o(e),h=s(e,"P",{"data-svelte-h":!0}),d(h)!=="svelte-71rm8n"&&(h.innerHTML=q),b=o(e),p=s(e,"P",{"data-svelte-h":!0}),d(p)!=="svelte-qcksy"&&(p.innerHTML=E),k=o(e),c=s(e,"P",{"data-svelte-h":!0}),d(c)!=="svelte-1fn7x39"&&(c.innerHTML=I),H=o(e),m=s(e,"P",{"data-svelte-h":!0}),d(m)!=="svelte-116jwqn"&&(m.innerHTML=S),L=o(e),f=s(e,"P",{"data-svelte-h":!0}),d(f)!=="svelte-17qstab"&&(f.innerHTML=j),T=o(e),u=s(e,"P",{"data-svelte-h":!0}),d(u)!=="svelte-7frr22"&&(u.innerHTML=U),C=o(e),x=s(e,"P",{"data-svelte-h":!0}),d(x)!=="svelte-hfd8r8"&&(x.innerHTML=A),M=o(e),v=s(e,"PRE",{});var t=$(v);y=s(t,"CODE",{});var D=$(y);N=G(D,!1),D.forEach(i),t.forEach(i),this.h()},h(){N.a=null},m(e,t){n(e,l,t),n(e,_,t),n(e,h,t),n(e,b,t),n(e,p,t),n(e,k,t),n(e,c,t),n(e,H,t),n(e,m,t),n(e,L,t),n(e,f,t),n(e,T,t),n(e,u,t),n(e,C,t),n(e,x,t),n(e,M,t),n(e,v,t),J(v,y),N.m(g,y)},p:w,i:w,o:w,d(e){e&&(i(l),i(_),i(h),i(b),i(p),i(k),i(c),i(H),i(m),i(L),i(f),i(T),i(u),i(C),i(x),i(M),i(v))}}}function V(P){return K(),[]}class Z extends z{constructor(l){super(),B(this,l,V,Q,R,{})}}export{Z as component};
