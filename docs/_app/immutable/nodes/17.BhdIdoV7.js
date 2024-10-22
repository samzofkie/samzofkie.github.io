import{s as k,n as f}from"../chunks/scheduler.Cs0xm5t1.js";import{S as H,i as Q,e as o,s as q,H as L,c as d,k as _,f as b,a as E,n as P,d as n,g as l,h as T}from"../chunks/index.Cky_bo-2.js";import{h as z}from"../chunks/utils.BJnaAM-2.js";function O(v){let a,x="Queues",h,s,w="<b>Queues</b> are dynamic sets whose <code>delete</code> operation implements a <b>first-in, last-out (FILO)</b> policy. Adding to a queue is to <b>enqueue</b> and removing is to <b>dequeue</b>. Like linked lists, queues have a <b>head</b> and a <b>tail</b>. Enqueues always add to the tail and dequeues always take from the head. Enqueuing and dequeuing both take <math>O(n)</math> time.",m,i,C="The queue will wrap around over time:",c,u,r,p,g=`struct Queue {
  int head, tail, size;
  int array[QUEUE_SIZE];
}

bool enqueue(struct Queue q, int x) {
  if (q.tail == q.head-1)
    return false; // this is an overflow
  else {
    q.array[++q.tail] = x;
    return true;
  }
}

int dequeue(struct Queue q) {
  if (q.head == q.tail)
    return 0; // this is an underflow
  else
    return q.array[q.tail--];
}
`;return{c(){a=o("h1"),a.textContent=x,h=q(),s=o("p"),s.innerHTML=w,m=q(),i=o("p"),i.textContent=C,c=q(),u=o("pre"),r=o("code"),p=new L(!1),this.h()},l(e){a=d(e,"H1",{"data-svelte-h":!0}),_(a)!=="svelte-16sqzmw"&&(a.textContent=x),h=b(e),s=d(e,"P",{"data-svelte-h":!0}),_(s)!=="svelte-13zp5kn"&&(s.innerHTML=w),m=b(e),i=d(e,"P",{"data-svelte-h":!0}),_(i)!=="svelte-swbk0c"&&(i.textContent=C),c=b(e),u=d(e,"PRE",{});var t=E(u);r=d(t,"CODE",{});var y=E(r);p=P(y,!1),y.forEach(n),t.forEach(n),this.h()},h(){p.a=null},m(e,t){l(e,a,t),l(e,h,t),l(e,s,t),l(e,m,t),l(e,i,t),l(e,c,t),l(e,u,t),T(u,r),p.m(g,r)},p:f,i:f,o:f,d(e){e&&(n(a),n(h),n(s),n(m),n(i),n(c),n(u))}}}function S(v){return z(),[]}class $ extends H{constructor(a){super(),Q(this,a,S,O,k,{})}}export{$ as component};
