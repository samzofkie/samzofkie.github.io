import{s as H,n as q}from"../chunks/scheduler.Cs0xm5t1.js";import{S as Q,i as g,e as o,s as f,H as L,c as d,k as _,f as v,a as C,n as P,d as s,g as i,h as T}from"../chunks/index.Cky_bo-2.js";function z(E){let a,b="Queues",h,l,x='<b>Queues</b> are dynamic sets whose <code>delete</code> operation implements a <b>first-in, last-out (FILO)</b> policy. Adding to a queue is to <b>enqueue</b> and removing is to <b>dequeue</b>. Like linked lists, queues have a <b>head</b> and a <b>tail</b>. Enqueues always add to the tail and dequeues always take from the head. Enqueuing and dequeuing both take <math class="svelte-1flrsht">O(n)</math> time.',m,n,w="The queue will wrap around over time:",c,u,r,p,k=`struct Queue {
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
`;return{c(){a=o("h1"),a.textContent=b,h=f(),l=o("p"),l.innerHTML=x,m=f(),n=o("p"),n.textContent=w,c=f(),u=o("pre"),r=o("code"),p=new L(!1),this.h()},l(e){a=d(e,"H1",{"data-svelte-h":!0}),_(a)!=="svelte-16sqzmw"&&(a.textContent=b),h=v(e),l=d(e,"P",{"data-svelte-h":!0}),_(l)!=="svelte-13zp5kn"&&(l.innerHTML=x),m=v(e),n=d(e,"P",{"data-svelte-h":!0}),_(n)!=="svelte-swbk0c"&&(n.textContent=w),c=v(e),u=d(e,"PRE",{});var t=C(u);r=d(t,"CODE",{});var y=C(r);p=P(y,!1),y.forEach(s),t.forEach(s),this.h()},h(){p.a=null},m(e,t){i(e,a,t),i(e,h,t),i(e,l,t),i(e,m,t),i(e,n,t),i(e,c,t),i(e,u,t),T(u,r),p.m(k,r)},p:q,i:q,o:q,d(e){e&&(s(a),s(h),s(l),s(m),s(n),s(c),s(u))}}}class I extends Q{constructor(a){super(),g(this,a,null,z,H,{})}}export{I as component};
