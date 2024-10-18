import{s as J,n as O}from"../chunks/scheduler.Cs0xm5t1.js";import{S as K,i as Q,e as a,s as r,H as V,c as s,k as d,f as o,a as B,n as W,d as i,g as n,h as X}from"../chunks/index.Cky_bo-2.js";function Y(F){let l,q="Linked lists",b,h,E="Unlike a contiguous block of memory, order in <b>linked lists</b> is determined by a pointer in each object.",k,p,I="The <b>head</b> of a linked list is the first node, and it&#39;s <b>tail</b> is the last node.",H,x,S="Searching a linked list is <math>O(n)</math> in the worst-case.",L,c,j="Inserting a node before the current head, or at any specific place if you have a pointer to that specific place, is <math>O(1)</math>.",T,u,U="Deleteing a node takes <math>O(1)</math> time if you have a pointer to that node (otherwise search is <math>O(n)</math>). Also, deletion is <math>O(1)</math> in a doubly linked list, whereas it&#39;s <math>O(n)</math> in the worst case for a singly linked list.",C,m,A="Insertion and deletion are faster for linked lists than for arrays, but finding the <math>k<sup>th</sup></math> element in an array would be <math>O(n)</math> time in an array whereas it would be <math>O(k)</math> time in a linked list.",M,f,D="A <b>sentinel</b> is a dummy object that simplified boundary conditions. The sentinel represents <code>NIL</code> but has the attributes of a node (<code>next</code>, <code>key</code>, <code>prev</code> if doubly linked). Using sentinels doesn&#39;t change the asymptotic run time of linked list operations, but can decrease the constant factor.",N,v,R="C",w,y,_,P,G=`struct Node {
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
}`;return{c(){l=a("h1"),l.textContent=q,b=r(),h=a("p"),h.innerHTML=E,k=r(),p=a("p"),p.innerHTML=I,H=r(),x=a("p"),x.innerHTML=S,L=r(),c=a("p"),c.innerHTML=j,T=r(),u=a("p"),u.innerHTML=U,C=r(),m=a("p"),m.innerHTML=A,M=r(),f=a("p"),f.innerHTML=D,N=r(),v=a("h2"),v.textContent=R,w=r(),y=a("pre"),_=a("code"),P=new V(!1),this.h()},l(e){l=s(e,"H1",{"data-svelte-h":!0}),d(l)!=="svelte-1byp4xs"&&(l.textContent=q),b=o(e),h=s(e,"P",{"data-svelte-h":!0}),d(h)!=="svelte-71rm8n"&&(h.innerHTML=E),k=o(e),p=s(e,"P",{"data-svelte-h":!0}),d(p)!=="svelte-qcksy"&&(p.innerHTML=I),H=o(e),x=s(e,"P",{"data-svelte-h":!0}),d(x)!=="svelte-1fn7x39"&&(x.innerHTML=S),L=o(e),c=s(e,"P",{"data-svelte-h":!0}),d(c)!=="svelte-116jwqn"&&(c.innerHTML=j),T=o(e),u=s(e,"P",{"data-svelte-h":!0}),d(u)!=="svelte-17qstab"&&(u.innerHTML=U),C=o(e),m=s(e,"P",{"data-svelte-h":!0}),d(m)!=="svelte-7frr22"&&(m.innerHTML=A),M=o(e),f=s(e,"P",{"data-svelte-h":!0}),d(f)!=="svelte-hfd8r8"&&(f.innerHTML=D),N=o(e),v=s(e,"H2",{"data-svelte-h":!0}),d(v)!=="svelte-pn6161"&&(v.textContent=R),w=o(e),y=s(e,"PRE",{});var t=B(y);_=s(t,"CODE",{});var z=B(_);P=W(z,!1),z.forEach(i),t.forEach(i),this.h()},h(){P.a=null},m(e,t){n(e,l,t),n(e,b,t),n(e,h,t),n(e,k,t),n(e,p,t),n(e,H,t),n(e,x,t),n(e,L,t),n(e,c,t),n(e,T,t),n(e,u,t),n(e,C,t),n(e,m,t),n(e,M,t),n(e,f,t),n(e,N,t),n(e,v,t),n(e,w,t),n(e,y,t),X(y,_),P.m(G,_)},p:O,i:O,o:O,d(e){e&&(i(l),i(b),i(h),i(k),i(p),i(H),i(x),i(L),i(c),i(T),i(u),i(C),i(m),i(M),i(f),i(N),i(v),i(w),i(y))}}}class g extends K{constructor(l){super(),Q(this,l,null,Y,J,{})}}export{g as component};
