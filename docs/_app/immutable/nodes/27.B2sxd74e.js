import{s as E,n as k}from"../chunks/scheduler.Cs0xm5t1.js";import{S as L,i as P,e as c,s as x,H as M,c as p,k as v,f as y,a as T,n as O,d as s,g as n,h as q}from"../chunks/index.Cky_bo-2.js";import{h as I}from"../chunks/utils.BrNTHlFF.js";function $(C){let a,S="Stacks",h,i,w="<b>Stacks</b> are dynamic sets whose <code>delete</code> operation removes the most recently inserted element: stacks are <b>last-in, first out (LIFO)</b>.",d,r,H="Stacks get their name (and or inspiration) from spring-loaded stacks of plates found in cafeterias.",u,l,b="Stacks have a <code>top</code> attribute, which is the index of the most recently inserted element, and a <code>size</code> attribute, which specifies the maximum size of the underlying array. When <code>top</code> equals zero the stack is empty.",f,o,m,_,g=`struct Stack {
  int size, top;
  int array[STACK_SIZE];
};

bool stack_empty(struct Stack s) {
  return (s.top == 0); 
}

int push(struct Stack s, int x) {
  if (s.top == s.size)
    return 0;
  else {
    s.array[++s.top] = x;
    return 1;
  }
}

int pop(struct Stack s) {
  if (stack_empty(s))
    return 0; // Or otherwise signal an error
  else
    return s.array[s.top--];
}`;return{c(){a=c("h1"),a.textContent=S,h=x(),i=c("p"),i.innerHTML=w,d=x(),r=c("p"),r.textContent=H,u=x(),l=c("p"),l.innerHTML=b,f=x(),o=c("pre"),m=c("code"),_=new M(!1),this.h()},l(t){a=p(t,"H1",{"data-svelte-h":!0}),v(a)!=="svelte-1lz42wx"&&(a.textContent=S),h=y(t),i=p(t,"P",{"data-svelte-h":!0}),v(i)!=="svelte-jyttmr"&&(i.innerHTML=w),d=y(t),r=p(t,"P",{"data-svelte-h":!0}),v(r)!=="svelte-dc3w1p"&&(r.textContent=H),u=y(t),l=p(t,"P",{"data-svelte-h":!0}),v(l)!=="svelte-xwv8fm"&&(l.innerHTML=b),f=y(t),o=p(t,"PRE",{});var e=T(o);m=p(e,"CODE",{});var z=T(m);_=O(z,!1),z.forEach(s),e.forEach(s),this.h()},h(){_.a=null},m(t,e){n(t,a,e),n(t,h,e),n(t,i,e),n(t,d,e),n(t,r,e),n(t,u,e),n(t,l,e),n(t,f,e),n(t,o,e),q(o,m),_.m(g,m)},p:k,i:k,o:k,d(t){t&&(s(a),s(h),s(i),s(d),s(r),s(u),s(l),s(f),s(o))}}}function j(C){return I(),[]}class K extends L{constructor(a){super(),P(this,a,j,$,E,{})}}export{K as component};
