import{s as y,b as E,u as M,g as $,d as H,c as L}from"../chunks/scheduler.Cs0xm5t1.js";import{S as A,i as q,e as h,s as x,c as v,a as k,k as w,f as T,d as b,l as _,g as z,h as u,p as C,q as S}from"../chunks/index.Cky_bo-2.js";/* empty css                        *//* empty css                    */import{p as D}from"../chunks/utils.BrNTHlFF.js";import{b as d}from"../chunks/paths.BT7bQQUd.js";import{p as I}from"../chunks/stores.B1GALySi.js";function N(i){let e,a,r=`<a href="${d}/" class="nav-root"><img class="flower-logo svelte-1x3ie7j" src="/jessi-flower-logo.png" alt="A line drawing of a flower."/></a> <nav class="svelte-1x3ie7j"><a href="${d}/about" class="nav-link svelte-1x3ie7j">About</a> <a href="${d}/notes" class="nav-link svelte-1x3ie7j">Notes</a> <a href="${d}/projects" class="nav-link svelte-1x3ie7j">Projects</a> <a href="${d}/misc" class="nav-link svelte-1x3ie7j">Misc</a></nav>`,c,o,m,n,f='<a href="https://github.com/samzofkie/"><i class="bx bxl-github svelte-1x3ie7j"></i></a> <p>samzofkie@gmail.com</p> <a href="https://www.linkedin.com/in/samzofkie/"><i class="bx bxl-linkedin-square svelte-1x3ie7j"></i></a>',p;const g=i[4].default,s=E(g,i,i[3],null);return{c(){e=h("div"),a=h("header"),a.innerHTML=r,c=x(),o=h("main"),s&&s.c(),m=x(),n=h("footer"),n.innerHTML=f,this.h()},l(t){e=v(t,"DIV",{class:!0});var l=k(e);a=v(l,"HEADER",{class:!0,"data-svelte-h":!0}),w(a)!=="svelte-1s44jko"&&(a.innerHTML=r),c=T(l),o=v(l,"MAIN",{class:!0});var j=k(o);s&&s.l(j),j.forEach(b),m=T(l),n=v(l,"FOOTER",{class:!0,"data-svelte-h":!0}),w(n)!=="svelte-bofbda"&&(n.innerHTML=f),l.forEach(b),this.h()},h(){_(a,"class","svelte-1x3ie7j"),_(o,"class","svelte-1x3ie7j"),_(n,"class","svelte-1x3ie7j"),_(e,"class","narrow svelte-1x3ie7j")},m(t,l){z(t,e,l),u(e,a),u(e,c),u(e,o),s&&s.m(o,null),u(e,m),u(e,n),p=!0},p(t,[l]){s&&s.p&&(!p||l&8)&&M(s,g,t,t[3],p?H(g,t[3],l,null):$(t[3]),null)},i(t){p||(C(s,t),p=!0)},o(t){S(s,t),p=!1},d(t){t&&b(e),s&&s.d(t)}}}function O(i,e,a){let r,c,o;L(i,I,f=>a(2,o=f));let{$$slots:m={},$$scope:n}=e;return i.$$set=f=>{"$$scope"in f&&a(3,n=f.$$scope)},i.$$.update=()=>{i.$$.dirty&4&&a(1,r=o.url.pathname.split("/").slice(-1)[0]),i.$$.dirty&2&&a(0,c=r===""?"Sam Zofkie":D(r)),i.$$.dirty&1&&(document.title=c)},[c,r,o,n,m]}class J extends A{constructor(e){super(),q(this,e,O,N,y,{})}}export{J as component};