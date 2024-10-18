import{s as un,n as co}from"../chunks/scheduler.Cs0xm5t1.js";import{S as pn,i as hn,e as o,s as d,t as i,c as a,k as p,f as u,a as c,b as r,d as l,l as _,g as s,h as t}from"../chunks/index.Cky_bo-2.js";function vn(dn){let k,uo="Svelte",nt,L,po="In Svelte you build <b>apps</b> declaratively out of <b>components</b> that combine combine markup, styles and behaviors. Components are then compiled into small efficient JavaScript modules.",st,S,ho="The basic syntax features of a Svelte component are:",it,m,ce,vo="You can insert JavaScript variables into HTML with curly braces.",Ut,O,$t,Me,fo="<img {alt} />",Bt,Ft,Pe,mo="<img alt={alt} />",Wt,Vt,Gt,E,de,bo="Styles",Kt,qe,Co="<style>",Qt,Xt,ue,yo="scoped to components",Zt,el,g,tl,pe,xo="<script>",ll,Ie,_o="import Comp from './path/to/Comp.svelte';",ol,al,nl,M,sl,je,Eo="{@html '...'}",il,rl,rt,P,wo="Here's an that example uses all of these features:",ct,q,Re,Do=`// Nested.svelte

<p>This is a another paragraph.</p>
`,cl,dt,I,ze,ko=`// App.svelte

<script>
  import Nested from './Nested.svelte';

  let name = 'Sam';
  let src = '/image.png';
  let greenParagraph = '<p style="color: green;">Set my paragraph.</p>'
<\/script>

<style>
  p {
    color: red;
  }
</ style>

<h1>Hi {name.toUpperCase()}</h1>

<img {src} alt="{name} dances." />

<p>This is a paragraph.</p> // This will have red font
<Nested /> // This will have black font
{@html greenParagraph} // This will have green font`,dl,ut,j,Oo="Reactivity",pt,R,go='Svelte has another special syntax for a feature called <b>reactive declarations</b>, that allows you to tell the Svelte compiler to re-run declarations or statements whenever any variable referenced in the reactive declaration changes. The syntax for it prefaces your delclaration or statement with a <code>$:</code> symbol, which is actually valid JavaScript (<code>$</code> is a valid identifier and the colon is part of a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label">labeled statement</a>).',ht,z,Ho="Reactivity is triggered by assignment though, so for reactive declarations that depend on arrays or objects, to trigger the reactivity, you need to reassign the variable completely instead of using a method that modifies it in-place (like <code>slice</code> or <code>push</code>):",vt,J,Je,To=`<script>
  let count = 0;
  $: doubled = count * 2;
  $: console.log('count is ' + count);
  $: if (count >= 10) {
    console.error('count is crazy, crazy high');
    count = 0;
  }
  const increment = () => count += 1;

  let numbers = [1, 2, 3, 4];
  $: sum = numbers.reduce((total, curr) => total + curr, 0);

  const addNumber = () => numbers = [...numbers, numbers.length + 1];
<\/script>

<button on:click={increment}>
  Clicked {count} 
  {count === 1 ? 'time' : 'times'}
</button>

<p>
  {count} doubled is {doubled}.
</p>

<button on:click={addNumber}>
  Add a number man
</button>

<p>
  The sum {numbers.join(' + ')} is {sum}.
</p>`,ul,ft,Y,Lo="Props",mt,A,So="<b>Props</b> are for passing data from parent to child. You declare props in the receiving (child) component using the (confusing) syntax: <code>export let prop;</code>. Like function parameters you can have default values, and there&#39;s a special spread syntax for spreading an object of props if the properties are the same as the prop names:",bt,N,Ye,Mo=`// DataCard.svelte

<script>
  export let name = 'Defaulto';
  export let version;

  $: href = 'https://npmjs.com/package/' + name + '/' + version;
<\/script>

<div>
  The name is {name}. Here's a link to it: {link}.
</div>`,pl,Ct,U,Ae,Po=`// App.svelte
<script>
  import DataCard from './DataCard.svelte';

  const props = {
    name: 'Crapoid',
    version: 13,
  };
<\/script>

// All valid:
<DataCard name="Crapoid2" version="24" />
<DataCard />
<DataCard {...props} />`,hl,yt,$,qo="Logic",xt,b,vl,Ne,Io="{#if}",fl,ml,Ue,jo="{:else}",bl,Cl,$e,Ro="{#each}",yl,xl,Be,zo="{#await}",_l,El,_t,B,Fe,Jo=`<script>
  let count = 0;
  let colors = ['red', 'green', 'blue'];
  let promise = fetch('/json');
<\/script>

{#if count < 10}
  <p>Count is defo less than ten.</p>
{/if}

{#if count < 5}
  <p>Actually, it's like in the zero to five range.</p>
{:else} 
  <p>Actually, it's like in the six to ten range.</p>
{/if}

{#if count > 8}
  <p>It's so much greater than eight.</p>
{:else if count < 8 and count > 5}
  <p>It's giving five to eight</p>
{:else}
  <p>Yeah, it's less than five alright.</p>
{/if}

{#each colors as color}
  <div style="background-color: {color}">{color}</div>
{/each}

{#each colors as color, i}
  <div style="background-color: {color}">{i}</div>
{/each}

{#await promise}
  <p>Waiting...</p>
{:then fetchedJson}
  <p>Cool. The JSON is {JSON.stringify(fetchedJson)}</p>
{:catch}
  <p>Dang man, it messed up. Idk man...</p>
{/await}`,wl,Et,y,Dl,We,Yo="{#each}",kl,Ol,Ve,Ao="{#each colors as color {color.id}}",gl,Hl,Ge,No="{#each}",Tl,Ll,wt,F,Uo="Events",Dt,W,$o="Svelte also has some special syntax for declaring event handlers:",kt,w,x,Sl,he,Bo='onclick="..."',Ml,ve,Fo="on",Pl,Ke,Wo="on:click={handler}",ql,Il,jl,fe,Vo="Setting event handlers inline isn't frowned upon.",Rl,me,Go=`Event handlers can have <b>modifiers</b>, which can be strung together, and are shorthand ways of indicating things like:
    <ul><li><code>once</code>: call this handler once and then remove it.
      </li><li><code>preventDefault</code>: call <code>event.preventDefault()</code> before running the handler.</li></ul>`,Ot,V,Qe,Ko=`<script>
  const sayHowdy = () => console.log('Howdy.');
<\/script>

<button on:click={() => console.log('Hey.')}>
  Say hey
</button>

<button on:click|once={sayHowdy}>
  Say howdy once
</button>
`,zl,gt,G,Qo="Components can fire special <b>component events</b> using a <b>event dispatcher</b>, which can be caught by a handler set in a parent. The object passed in the call to <code>dispatch</code> is stored at the <code>.detail</code> property of the event. Component events don&#39;t automatically bubble, so to catch one a few layers of components deep, the intermediate components must <b>forward</b> the event (although there is shorthand syntax for forwarding events of a certain type). This syntax also works for plain old DOM events.",Ht,K,Xe,Xo=`// Inner.svelte

<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const sayHello = () => dispatch(
    'message',
    {
      text: 'Hello!'
    }
  );
<\/script>

<button on:click={sayHello}>Say hello</button>`,Jl,Tt,Q,Ze,Zo=`// Outer.svelte

<script>
  import Inner from './Inner.svelte';
<\/script>

// This 'on:message' attribute is the shorthand for forwarding 'message' events
<Inner on:message />

// This DOM event gets forwarded up to App
<button on:click>Handle this click in App</button>`,Yl,Lt,X,et,ea=`// App.svelte

<script>
  import Outer from './Outer.svelte';
<\/script>

<Outer 
  on:message={event => console.log(event.detail.text)} 
  on:click={event => console.log('This is a normal DOM event', event)} 
/>`,Al,St,Z,ta="Bindings",Mt,h,Nl,be,la="<input>",Ul,tt,oa="value={variable}",$l,Bl,Ce,aa="variable",Fl,lt,na="on:input",Wl,Vl,ye,sa="variable",Gl,xe,ia="value",Kl,_e,ra="<input>",Ql,Ee,ca="variable",Xl,we,da="bind",Zl,Pt,ee,ot,ua="<input bind:value={variable}>",eo,qt,te,pa="Changes to your <code>variable</code> will also be automatically reflected in your <code>&lt;input&gt;</code>, too. If you <code>bind</code> to an <code>&lt;input&gt;</code> with <code>type=&quot;number&quot;</code>, Svelte will automatically convert the bound variable to a number for you. For checkboxes, remember to bind to <code>checked</code>, not <code>value</code>. Binding works for <code>&lt;select&gt;</code> elements.",It,f,to,at,ha="bind:group={selectedRadioButtonValue}",lo,oo,De,va="selectedRadioButtonValue",ao,ke,fa="bind:group",no,Oe,ma="<select multiple ... >",so,ge,ba="value",io,He,Ca="<option>",ro,jt,le,ya="Finally, if the name of your variable matches the attribute you&#39;re binding too, there&#39;s a shorthand syntax: <code>bind:value</code> (where <code>value</code> is the attribute you&#39;re binding to).",Rt,oe,xa="Lifecycle",zt,ae,_a="Components all have a <b>lifecycle</b> that starts when they&#39;re created and ends when they&#39;re destroyed. You can register a callback to be called when the component is created with <code>onMount</code>, and your callback can return another callback to to be called when the component is destroyed.",Jt,ne,Ea="<code>beforeUpdate</code> and <code>afterUpdate</code> register callbacks to be called (respectively) right before and after the DOM gets updated.",Yt,se,wa="The <code>tick</code> function returns a promise that resolves as soon as any pending state changes are applied to the DOM. Updating component state doesn&#39;t happen immeadiately, instead Svelte waits for the next <b>microtask</b> to see if there are any other state changes that need to be applied. Foing it this way allows the browser to batch things more effectively and avoid duplicate work.",At,ie,Da="Stores";return{c(){k=o("h1"),k.textContent=uo,nt=d(),L=o("p"),L.innerHTML=po,st=d(),S=o("p"),S.textContent=ho,it=d(),m=o("ul"),ce=o("li"),ce.textContent=vo,Ut=d(),O=o("li"),$t=i("You can set HTML attributes with these curly braces, and if your JavaScript variable happens to have the same name as the attribute you're setting, there's a nice shorthand syntax where you can just write: "),Me=o("code"),Bt=i(fo),Ft=i(" instead of "),Pe=o("code"),Wt=i(mo),Vt=i("."),Gt=d(),E=o("li"),de=o("b"),de.textContent=bo,Kt=i(" (set in "),qe=o("code"),Qt=i(Co),Xt=i(" tags) are "),ue=o("u"),ue.textContent=yo,Zt=i("."),el=d(),g=o("li"),tl=i("Components can be imported (in a "),pe=o("code"),pe.textContent=xo,ll=i(" tag) like "),Ie=o("code"),ol=i(_o),al=i("."),nl=d(),M=o("li"),sl=i("You can (dangerously) render HTML directly into a component from JavaScript with the special "),je=o("code"),il=i(Eo),rl=i(" tag."),rt=d(),P=o("p"),P.textContent=wo,ct=d(),q=o("pre"),Re=o("code"),cl=i(Do),dt=d(),I=o("pre"),ze=o("code"),dl=i(ko),ut=d(),j=o("h2"),j.textContent=Oo,pt=d(),R=o("p"),R.innerHTML=go,ht=d(),z=o("p"),z.innerHTML=Ho,vt=d(),J=o("pre"),Je=o("code"),ul=i(To),ft=d(),Y=o("h2"),Y.textContent=Lo,mt=d(),A=o("p"),A.innerHTML=So,bt=d(),N=o("pre"),Ye=o("code"),pl=i(Mo),Ct=d(),U=o("pre"),Ae=o("code"),hl=i(Po),yt=d(),$=o("h2"),$.textContent=qo,xt=d(),b=o("p"),vl=i("Svelte has lots of syntax for expressing logic in HTML, mainly special "),Ne=o("code"),fl=i(Io),ml=i(", "),Ue=o("code"),bl=i(jo),Cl=i(", "),$e=o("code"),yl=i(Ro),xl=i(" and "),Be=o("code"),_l=i(zo),El=i(" tags."),_t=d(),B=o("pre"),Fe=o("code"),wl=i(Jo),Et=d(),y=o("p"),Dl=i("There is a thing where you will need to pass a key to an "),We=o("code"),kl=i(Yo),Ol=i(" block like "),Ve=o("code"),gl=i(Ao),Hl=i(" for Svelte to update the children of the "),Ge=o("code"),Tl=i(No),Ll=i(" block properly."),wt=d(),F=o("h2"),F.textContent=Uo,Dt=d(),W=o("p"),W.textContent=$o,kt=d(),w=o("ul"),x=o("li"),Sl=i("Instead of setting an "),he=o("code"),he.textContent=Bo,Ml=i(" attribute, you pass a function to an "),ve=o("code"),ve.textContent=Fo,Pl=i(" attribute: "),Ke=o("code"),ql=i(Wo),Il=i("."),jl=d(),fe=o("li"),fe.textContent=Vo,Rl=d(),me=o("li"),me.innerHTML=Go,Ot=d(),V=o("pre"),Qe=o("code"),zl=i(Ko),gt=d(),G=o("p"),G.innerHTML=Qo,Ht=d(),K=o("pre"),Xe=o("code"),Jl=i(Xo),Tt=d(),Q=o("pre"),Ze=o("code"),Yl=i(Zo),Lt=d(),X=o("pre"),et=o("code"),Al=i(ea),St=d(),Z=o("h2"),Z.textContent=ta,Mt=d(),h=o("p"),Nl=i("Say you set an "),be=o("code"),be.textContent=la,Ul=i("'s value with "),tt=o("code"),$l=i(oa),Bl=i(". When the user changes the value of the input, your "),Ce=o("code"),Ce.textContent=aa,Fl=i(" doesn't get updated unless you register an "),lt=o("code"),Wl=i(na),Vl=i(" handler to update your "),ye=o("code"),ye.textContent=sa,Gl=i("-- Svelte has a way to avoid this boilerplate. You can keep the "),xe=o("code"),xe.textContent=ia,Kl=i(" of your "),_e=o("code"),_e.textContent=ra,Ql=i(" bound to your "),Ee=o("code"),Ee.textContent=ca,Xl=i(" with a "),we=o("b"),we.textContent=da,Zl=i(", which you set with"),Pt=d(),ee=o("pre"),ot=o("code"),eo=i(ua),qt=d(),te=o("p"),te.innerHTML=pa,It=d(),f=o("p"),to=i("For radio buttons, you can "),at=o("code"),lo=i(ha),oo=i(", so "),De=o("code"),De.textContent=va,ao=i(" will be synchronized with the value bound to the currenly selected radio button. Similarly for checkboxes, "),ke=o("code"),ke.textContent=fa,no=i(" will update the bound array with the values bound to each currently checked inputs. "),Oe=o("code"),Oe.textContent=ma,so=i(" will populate an array. You can omit a "),ge=o("code"),ge.textContent=ba,io=i(" for the "),He=o("code"),He.textContent=Ca,ro=i("s if the elements' contents match what the value would have been otherwise."),jt=d(),le=o("p"),le.innerHTML=ya,Rt=d(),oe=o("h2"),oe.textContent=xa,zt=d(),ae=o("p"),ae.innerHTML=_a,Jt=d(),ne=o("p"),ne.innerHTML=Ea,Yt=d(),se=o("p"),se.innerHTML=wa,At=d(),ie=o("h2"),ie.textContent=Da,this.h()},l(e){k=a(e,"H1",{"data-svelte-h":!0}),p(k)!=="svelte-rz6m5f"&&(k.textContent=uo),nt=u(e),L=a(e,"P",{"data-svelte-h":!0}),p(L)!=="svelte-1y3qnaa"&&(L.innerHTML=po),st=u(e),S=a(e,"P",{"data-svelte-h":!0}),p(S)!=="svelte-cn4xh3"&&(S.textContent=ho),it=u(e),m=a(e,"UL",{});var n=c(m);ce=a(n,"LI",{"data-svelte-h":!0}),p(ce)!=="svelte-1g7dy2e"&&(ce.textContent=vo),Ut=u(n),O=a(n,"LI",{});var Te=c(O);$t=r(Te,"You can set HTML attributes with these curly braces, and if your JavaScript variable happens to have the same name as the attribute you're setting, there's a nice shorthand syntax where you can just write: "),Me=a(Te,"CODE",{});var ka=c(Me);Bt=r(ka,fo),ka.forEach(l),Ft=r(Te," instead of "),Pe=a(Te,"CODE",{});var Oa=c(Pe);Wt=r(Oa,mo),Oa.forEach(l),Vt=r(Te,"."),Te.forEach(l),Gt=u(n),E=a(n,"LI",{});var re=c(E);de=a(re,"B",{"data-svelte-h":!0}),p(de)!=="svelte-w8rjk6"&&(de.textContent=bo),Kt=r(re," (set in "),qe=a(re,"CODE",{});var ga=c(qe);Qt=r(ga,Co),ga.forEach(l),Xt=r(re," tags) are "),ue=a(re,"U",{"data-svelte-h":!0}),p(ue)!=="svelte-10rvqsp"&&(ue.textContent=yo),Zt=r(re,"."),re.forEach(l),el=u(n),g=a(n,"LI",{});var Le=c(g);tl=r(Le,"Components can be imported (in a "),pe=a(Le,"CODE",{"data-svelte-h":!0}),p(pe)!=="svelte-xpqqe6"&&(pe.textContent=xo),ll=r(Le," tag) like "),Ie=a(Le,"CODE",{});var Ha=c(Ie);ol=r(Ha,_o),Ha.forEach(l),al=r(Le,"."),Le.forEach(l),nl=u(n),M=a(n,"LI",{});var Nt=c(M);sl=r(Nt,"You can (dangerously) render HTML directly into a component from JavaScript with the special "),je=a(Nt,"CODE",{});var Ta=c(je);il=r(Ta,Eo),Ta.forEach(l),rl=r(Nt," tag."),Nt.forEach(l),n.forEach(l),rt=u(e),P=a(e,"P",{"data-svelte-h":!0}),p(P)!=="svelte-xae4gq"&&(P.textContent=wo),ct=u(e),q=a(e,"PRE",{class:!0});var La=c(q);Re=a(La,"CODE",{});var Sa=c(Re);cl=r(Sa,Do),Sa.forEach(l),La.forEach(l),dt=u(e),I=a(e,"PRE",{class:!0});var Ma=c(I);ze=a(Ma,"CODE",{});var Pa=c(ze);dl=r(Pa,ko),Pa.forEach(l),Ma.forEach(l),ut=u(e),j=a(e,"H2",{"data-svelte-h":!0}),p(j)!=="svelte-j6ua8a"&&(j.textContent=Oo),pt=u(e),R=a(e,"P",{"data-svelte-h":!0}),p(R)!=="svelte-1cejyzn"&&(R.innerHTML=go),ht=u(e),z=a(e,"P",{"data-svelte-h":!0}),p(z)!=="svelte-1x4ouyi"&&(z.innerHTML=Ho),vt=u(e),J=a(e,"PRE",{class:!0});var qa=c(J);Je=a(qa,"CODE",{});var Ia=c(Je);ul=r(Ia,To),Ia.forEach(l),qa.forEach(l),ft=u(e),Y=a(e,"H2",{"data-svelte-h":!0}),p(Y)!=="svelte-1lq2xlg"&&(Y.textContent=Lo),mt=u(e),A=a(e,"P",{"data-svelte-h":!0}),p(A)!=="svelte-97jzuz"&&(A.innerHTML=So),bt=u(e),N=a(e,"PRE",{class:!0});var ja=c(N);Ye=a(ja,"CODE",{});var Ra=c(Ye);pl=r(Ra,Mo),Ra.forEach(l),ja.forEach(l),Ct=u(e),U=a(e,"PRE",{class:!0});var za=c(U);Ae=a(za,"CODE",{});var Ja=c(Ae);hl=r(Ja,Po),Ja.forEach(l),za.forEach(l),yt=u(e),$=a(e,"H2",{"data-svelte-h":!0}),p($)!=="svelte-1u2zrvg"&&($.textContent=qo),xt=u(e),b=a(e,"P",{});var D=c(b);vl=r(D,"Svelte has lots of syntax for expressing logic in HTML, mainly special "),Ne=a(D,"CODE",{});var Ya=c(Ne);fl=r(Ya,Io),Ya.forEach(l),ml=r(D,", "),Ue=a(D,"CODE",{});var Aa=c(Ue);bl=r(Aa,jo),Aa.forEach(l),Cl=r(D,", "),$e=a(D,"CODE",{});var Na=c($e);yl=r(Na,Ro),Na.forEach(l),xl=r(D," and "),Be=a(D,"CODE",{});var Ua=c(Be);_l=r(Ua,zo),Ua.forEach(l),El=r(D," tags."),D.forEach(l),_t=u(e),B=a(e,"PRE",{class:!0});var $a=c(B);Fe=a($a,"CODE",{});var Ba=c(Fe);wl=r(Ba,Jo),Ba.forEach(l),$a.forEach(l),Et=u(e),y=a(e,"P",{});var H=c(y);Dl=r(H,"There is a thing where you will need to pass a key to an "),We=a(H,"CODE",{});var Fa=c(We);kl=r(Fa,Yo),Fa.forEach(l),Ol=r(H," block like "),Ve=a(H,"CODE",{});var Wa=c(Ve);gl=r(Wa,Ao),Wa.forEach(l),Hl=r(H," for Svelte to update the children of the "),Ge=a(H,"CODE",{});var Va=c(Ge);Tl=r(Va,No),Va.forEach(l),Ll=r(H," block properly."),H.forEach(l),wt=u(e),F=a(e,"H2",{"data-svelte-h":!0}),p(F)!=="svelte-1b7vw6v"&&(F.textContent=Uo),Dt=u(e),W=a(e,"P",{"data-svelte-h":!0}),p(W)!=="svelte-bb80o9"&&(W.textContent=$o),kt=u(e),w=a(e,"UL",{});var Se=c(w);x=a(Se,"LI",{});var T=c(x);Sl=r(T,"Instead of setting an "),he=a(T,"CODE",{"data-svelte-h":!0}),p(he)!=="svelte-qvo622"&&(he.textContent=Bo),Ml=r(T," attribute, you pass a function to an "),ve=a(T,"CODE",{"data-svelte-h":!0}),p(ve)!=="svelte-1uvufpd"&&(ve.textContent=Fo),Pl=r(T," attribute: "),Ke=a(T,"CODE",{});var Ga=c(Ke);ql=r(Ga,Wo),Ga.forEach(l),Il=r(T,"."),T.forEach(l),jl=u(Se),fe=a(Se,"LI",{"data-svelte-h":!0}),p(fe)!=="svelte-fuyune"&&(fe.textContent=Vo),Rl=u(Se),me=a(Se,"LI",{"data-svelte-h":!0}),p(me)!=="svelte-kcyu8t"&&(me.innerHTML=Go),Se.forEach(l),Ot=u(e),V=a(e,"PRE",{class:!0});var Ka=c(V);Qe=a(Ka,"CODE",{});var Qa=c(Qe);zl=r(Qa,Ko),Qa.forEach(l),Ka.forEach(l),gt=u(e),G=a(e,"P",{"data-svelte-h":!0}),p(G)!=="svelte-isjkkl"&&(G.innerHTML=Qo),Ht=u(e),K=a(e,"PRE",{class:!0});var Xa=c(K);Xe=a(Xa,"CODE",{});var Za=c(Xe);Jl=r(Za,Xo),Za.forEach(l),Xa.forEach(l),Tt=u(e),Q=a(e,"PRE",{class:!0});var en=c(Q);Ze=a(en,"CODE",{});var tn=c(Ze);Yl=r(tn,Zo),tn.forEach(l),en.forEach(l),Lt=u(e),X=a(e,"PRE",{class:!0});var ln=c(X);et=a(ln,"CODE",{});var on=c(et);Al=r(on,ea),on.forEach(l),ln.forEach(l),St=u(e),Z=a(e,"H2",{"data-svelte-h":!0}),p(Z)!=="svelte-1w7n538"&&(Z.textContent=ta),Mt=u(e),h=a(e,"P",{});var v=c(h);Nl=r(v,"Say you set an "),be=a(v,"CODE",{"data-svelte-h":!0}),p(be)!=="svelte-otzydj"&&(be.textContent=la),Ul=r(v,"'s value with "),tt=a(v,"CODE",{});var an=c(tt);$l=r(an,oa),an.forEach(l),Bl=r(v,". When the user changes the value of the input, your "),Ce=a(v,"CODE",{"data-svelte-h":!0}),p(Ce)!=="svelte-1bmob54"&&(Ce.textContent=aa),Fl=r(v," doesn't get updated unless you register an "),lt=a(v,"CODE",{});var nn=c(lt);Wl=r(nn,na),nn.forEach(l),Vl=r(v," handler to update your "),ye=a(v,"CODE",{"data-svelte-h":!0}),p(ye)!=="svelte-1bmob54"&&(ye.textContent=sa),Gl=r(v,"-- Svelte has a way to avoid this boilerplate. You can keep the "),xe=a(v,"CODE",{"data-svelte-h":!0}),p(xe)!=="svelte-18vs4ol"&&(xe.textContent=ia),Kl=r(v," of your "),_e=a(v,"CODE",{"data-svelte-h":!0}),p(_e)!=="svelte-otzydj"&&(_e.textContent=ra),Ql=r(v," bound to your "),Ee=a(v,"CODE",{"data-svelte-h":!0}),p(Ee)!=="svelte-1bmob54"&&(Ee.textContent=ca),Xl=r(v," with a "),we=a(v,"B",{"data-svelte-h":!0}),p(we)!=="svelte-1912k6p"&&(we.textContent=da),Zl=r(v,", which you set with"),v.forEach(l),Pt=u(e),ee=a(e,"PRE",{class:!0});var sn=c(ee);ot=a(sn,"CODE",{});var rn=c(ot);eo=r(rn,ua),rn.forEach(l),sn.forEach(l),qt=u(e),te=a(e,"P",{"data-svelte-h":!0}),p(te)!=="svelte-1vqi0jp"&&(te.innerHTML=pa),It=u(e),f=a(e,"P",{});var C=c(f);to=r(C,"For radio buttons, you can "),at=a(C,"CODE",{});var cn=c(at);lo=r(cn,ha),cn.forEach(l),oo=r(C,", so "),De=a(C,"CODE",{"data-svelte-h":!0}),p(De)!=="svelte-1039fdp"&&(De.textContent=va),ao=r(C," will be synchronized with the value bound to the currenly selected radio button. Similarly for checkboxes, "),ke=a(C,"CODE",{"data-svelte-h":!0}),p(ke)!=="svelte-e2r03m"&&(ke.textContent=fa),no=r(C," will update the bound array with the values bound to each currently checked inputs. "),Oe=a(C,"CODE",{"data-svelte-h":!0}),p(Oe)!=="svelte-13sb6lv"&&(Oe.textContent=ma),so=r(C," will populate an array. You can omit a "),ge=a(C,"CODE",{"data-svelte-h":!0}),p(ge)!=="svelte-18vs4ol"&&(ge.textContent=ba),io=r(C," for the "),He=a(C,"CODE",{"data-svelte-h":!0}),p(He)!=="svelte-1dqe15w"&&(He.textContent=Ca),ro=r(C,"s if the elements' contents match what the value would have been otherwise."),C.forEach(l),jt=u(e),le=a(e,"P",{"data-svelte-h":!0}),p(le)!=="svelte-10bsd46"&&(le.innerHTML=ya),Rt=u(e),oe=a(e,"H2",{"data-svelte-h":!0}),p(oe)!=="svelte-1d587bm"&&(oe.textContent=xa),zt=u(e),ae=a(e,"P",{"data-svelte-h":!0}),p(ae)!=="svelte-19itusf"&&(ae.innerHTML=_a),Jt=u(e),ne=a(e,"P",{"data-svelte-h":!0}),p(ne)!=="svelte-1ld505r"&&(ne.innerHTML=Ea),Yt=u(e),se=a(e,"P",{"data-svelte-h":!0}),p(se)!=="svelte-1wdo5l6"&&(se.innerHTML=wa),At=u(e),ie=a(e,"H2",{"data-svelte-h":!0}),p(ie)!=="svelte-18t9ja0"&&(ie.textContent=Da),this.h()},h(){_(q,"class","svelte-m88qrx"),_(I,"class","svelte-m88qrx"),_(J,"class","svelte-m88qrx"),_(N,"class","svelte-m88qrx"),_(U,"class","svelte-m88qrx"),_(B,"class","svelte-m88qrx"),_(V,"class","svelte-m88qrx"),_(K,"class","svelte-m88qrx"),_(Q,"class","svelte-m88qrx"),_(X,"class","svelte-m88qrx"),_(ee,"class","svelte-m88qrx")},m(e,n){s(e,k,n),s(e,nt,n),s(e,L,n),s(e,st,n),s(e,S,n),s(e,it,n),s(e,m,n),t(m,ce),t(m,Ut),t(m,O),t(O,$t),t(O,Me),t(Me,Bt),t(O,Ft),t(O,Pe),t(Pe,Wt),t(O,Vt),t(m,Gt),t(m,E),t(E,de),t(E,Kt),t(E,qe),t(qe,Qt),t(E,Xt),t(E,ue),t(E,Zt),t(m,el),t(m,g),t(g,tl),t(g,pe),t(g,ll),t(g,Ie),t(Ie,ol),t(g,al),t(m,nl),t(m,M),t(M,sl),t(M,je),t(je,il),t(M,rl),s(e,rt,n),s(e,P,n),s(e,ct,n),s(e,q,n),t(q,Re),t(Re,cl),s(e,dt,n),s(e,I,n),t(I,ze),t(ze,dl),s(e,ut,n),s(e,j,n),s(e,pt,n),s(e,R,n),s(e,ht,n),s(e,z,n),s(e,vt,n),s(e,J,n),t(J,Je),t(Je,ul),s(e,ft,n),s(e,Y,n),s(e,mt,n),s(e,A,n),s(e,bt,n),s(e,N,n),t(N,Ye),t(Ye,pl),s(e,Ct,n),s(e,U,n),t(U,Ae),t(Ae,hl),s(e,yt,n),s(e,$,n),s(e,xt,n),s(e,b,n),t(b,vl),t(b,Ne),t(Ne,fl),t(b,ml),t(b,Ue),t(Ue,bl),t(b,Cl),t(b,$e),t($e,yl),t(b,xl),t(b,Be),t(Be,_l),t(b,El),s(e,_t,n),s(e,B,n),t(B,Fe),t(Fe,wl),s(e,Et,n),s(e,y,n),t(y,Dl),t(y,We),t(We,kl),t(y,Ol),t(y,Ve),t(Ve,gl),t(y,Hl),t(y,Ge),t(Ge,Tl),t(y,Ll),s(e,wt,n),s(e,F,n),s(e,Dt,n),s(e,W,n),s(e,kt,n),s(e,w,n),t(w,x),t(x,Sl),t(x,he),t(x,Ml),t(x,ve),t(x,Pl),t(x,Ke),t(Ke,ql),t(x,Il),t(w,jl),t(w,fe),t(w,Rl),t(w,me),s(e,Ot,n),s(e,V,n),t(V,Qe),t(Qe,zl),s(e,gt,n),s(e,G,n),s(e,Ht,n),s(e,K,n),t(K,Xe),t(Xe,Jl),s(e,Tt,n),s(e,Q,n),t(Q,Ze),t(Ze,Yl),s(e,Lt,n),s(e,X,n),t(X,et),t(et,Al),s(e,St,n),s(e,Z,n),s(e,Mt,n),s(e,h,n),t(h,Nl),t(h,be),t(h,Ul),t(h,tt),t(tt,$l),t(h,Bl),t(h,Ce),t(h,Fl),t(h,lt),t(lt,Wl),t(h,Vl),t(h,ye),t(h,Gl),t(h,xe),t(h,Kl),t(h,_e),t(h,Ql),t(h,Ee),t(h,Xl),t(h,we),t(h,Zl),s(e,Pt,n),s(e,ee,n),t(ee,ot),t(ot,eo),s(e,qt,n),s(e,te,n),s(e,It,n),s(e,f,n),t(f,to),t(f,at),t(at,lo),t(f,oo),t(f,De),t(f,ao),t(f,ke),t(f,no),t(f,Oe),t(f,so),t(f,ge),t(f,io),t(f,He),t(f,ro),s(e,jt,n),s(e,le,n),s(e,Rt,n),s(e,oe,n),s(e,zt,n),s(e,ae,n),s(e,Jt,n),s(e,ne,n),s(e,Yt,n),s(e,se,n),s(e,At,n),s(e,ie,n)},p:co,i:co,o:co,d(e){e&&(l(k),l(nt),l(L),l(st),l(S),l(it),l(m),l(rt),l(P),l(ct),l(q),l(dt),l(I),l(ut),l(j),l(pt),l(R),l(ht),l(z),l(vt),l(J),l(ft),l(Y),l(mt),l(A),l(bt),l(N),l(Ct),l(U),l(yt),l($),l(xt),l(b),l(_t),l(B),l(Et),l(y),l(wt),l(F),l(Dt),l(W),l(kt),l(w),l(Ot),l(V),l(gt),l(G),l(Ht),l(K),l(Tt),l(Q),l(Lt),l(X),l(St),l(Z),l(Mt),l(h),l(Pt),l(ee),l(qt),l(te),l(It),l(f),l(jt),l(le),l(Rt),l(oe),l(zt),l(ae),l(Jt),l(ne),l(Yt),l(se),l(At),l(ie))}}}class bn extends pn{constructor(k){super(),hn(this,k,null,vn,un,{})}}export{bn as component};
