import{s as tt,n as Le}from"../chunks/scheduler.Cs0xm5t1.js";import{S as nt,i as it,e as o,s as l,t as B,c as a,k as s,f as c,a as me,b as J,d as n,g as i,h as p}from"../chunks/index.Cky_bo-2.js";import{a as ot}from"../chunks/utils.BrNTHlFF.js";function at(Me){let d,_e="Spring",G,u,He="The <b>Spring Framework</b> is divided into modules, the heart of which are the modules of the core container, which includes a configuration model and a dependency injection mechanism. Spring also has modules supporting different application architectures such as messaging, transactional data and persistance, and web. It also has the Servlet-based Spring MVC web framework.",U,h,Te="Servlets",O,m,Se="<b>Jakarta</b> (formerly <b>Java</b>) <b>Servlets</b> are Java classes in Jakarta EE that conform to the Jakarta Servlet API (found in <code>javax.servlet</code>), which specifies how classes respond to requests, typically extending the <code>HttpServlet</code> class, which is a subclass of <code>GenericServlet</code>. Ultimately, a servlet is an object that receives a request and responds to it.",Y,v,Pe="Servlet are deployed and run by <b>web containers</b>, which manage their lifecycle, map specific URLs to them, and ensuring access rights.",z,x,ke="Servlets have three central methods: <code>init</code>, <code>service</code>, and <code>destroy</code>.",V,C,Ie="Spring",$,b,qe="Spring was first written in 2003 as a response to the complexity of the early J2EE specifications. Today the Spring framework integrates with individual specifications from the traditional EE umbrella, such as the Servlet API, the WebSocket API, Concurrency Utilities, the JSON Binding API, Bean Validation, and others. It also optionally supports the Dependency Injection and Common Annotations specs in lieu of the Spring-specific alternative mechanisms.",N,y,Ae="Spring 6.0 has been upgraded to Jakarta EE 9, Tomcat 10.1, Jetty 11, Undertow 2.3 and the Hibernate ORM 6.1.",W,g,je="Core Technologies",K,w,Ee="The IoC Container",Q,L,Xe="The Spring Framework implements the <b>Inversion of Control (IoC) principle</b>. <b>Dependency Injection (DI)</b> is a specialized form of IoC where objects define their dependencies only through constructor arguments, arguments to a factory method, or properties that are set on an object instance after it&#39;s constructed or returned from a factory. The IoC container then injects those dependencies when it creates the bean. It&#39;s called &quot;inversion&quot; because it&#39;s the opposite of the bean itself controlling the instantiation of it&#39;s dependencies itself. A <b>bean</b> is a Java object that is instantiated, assembled, and managed by a Spring IoC container.",Z,M,Be="<code>org.springframework.beans</code> and <code>org.springframework.context</code> are the main packages forming the basis of Spring&#39;s IoC container. The <code>BeanFactory</code> interface provides a configuration mechanism capable of managing any type of object, and <code>ApplicationContext</code>, a sub-interface of <code>BeanFactory</code>, has some additional baked-in nice features. <code>BeanFactory</code> provides the configuration framework and basic functionality and <code>ApplicationContext</code> adds more entrprise-specific functionality.",ee,_,Je="Containers",te,H,De="<code>org.springframework.context.ApplicationContext</code> is an interface representing the Spring IoC container and is responsible for instantiating, configuring, and assembling beans. It receives instructions on which components to manage by reading configuration metadata, which can be in annotated component classes, configuration classes with factory methods, or external XML or Groovy scripts.",ne,T,Re="In core Spring, the most commonly used implementations of <code>ApplicationContext</code> are <code>AnnotationConfigApplicationContext</code> or <code>ClassPathXmlApplicationContext</code>. Most of the time you won&#39;t need to instatiate any instances of a Spring IoC container-- for a plain old web app, a simple boilerplate web descriptor XML file will do it for you, and in Spring Boot the application context is implicitly bootstrapped for you based on common conventions.",ie,S,Fe="Configuration Metadata",oe,r,ve,D,Ge="configuration metadata",xe,R,Ue="<bean>",Ce,be,ae,P,Oe="For XML-based configuration, the locations of the XML resources need to be passed to the constructor of a <code>ClassPathXmlApplicationContext</code> object that lets the container load the configuration files:",le,k,Ye="<code>ApplicationContext context = new ClassPathXmlApplicationContext(&quot;services.xml&quot;, &quot;daos.xml&quot;);</code>",se,f,ye,F,ze="<import>",ge,we,ce,I,Ve="The Container",re,q,$e="<code>ApplicationContext</code> maintains a registry of beans and their dependencies, which can be queried with the <code>getBean</code> method:",pe,A,Ne=`<code>// create and configure beans
ApplicationContext context = new ClassPathXmlApplicationContext(&quot;services.xml&quot;, &quot;daos.xml&quot;);

// retrieve configured instance
PetStoreService service = context.getBean(&quot;petStore&quot;, PetStoreService.class);

// use configured instance
List&lt;String&gt; userList = service.getUsernameList();</code>`,de,j,We="You could also use a <code>GenericApplicationContext</code> with <b>reader delegates</b>, such as <code>XmlBeanDefinitionReader</code> for XML files, like:",fe,E,Ke=`<code>GenericApplicationContext context = new GenericApplicationContext();
  new XmlBeanDefinitionReader(context).loadBeanDefinitions(&quot;services.xml&quot;, &quot;daos.xml&quot;);
  context.refresh();</code>`,ue,X,Qe="Ideally, your application code never uses <code>getBean</code>, ideally Spring&#39;s dependency injection and declaring the dependencies between your beans through metadata should take care of things for you.";return{c(){d=o("h1"),d.textContent=_e,G=l(),u=o("p"),u.innerHTML=He,U=l(),h=o("h3"),h.textContent=Te,O=l(),m=o("p"),m.innerHTML=Se,Y=l(),v=o("p"),v.innerHTML=Pe,z=l(),x=o("p"),x.innerHTML=ke,V=l(),C=o("h3"),C.textContent=Ie,$=l(),b=o("p"),b.textContent=qe,N=l(),y=o("p"),y.textContent=Ae,W=l(),g=o("h2"),g.textContent=je,K=l(),w=o("h3"),w.textContent=Ee,Q=l(),L=o("p"),L.innerHTML=Xe,Z=l(),M=o("p"),M.innerHTML=Be,ee=l(),_=o("h4"),_.textContent=Je,te=l(),H=o("p"),H.innerHTML=De,ne=l(),T=o("p"),T.innerHTML=Re,ie=l(),S=o("h4"),S.textContent=Fe,oe=l(),r=o("p"),ve=B("Spring consumes "),D=o("b"),D.textContent=Ge,xe=B(" that instructs it on how to instantiate, configure, and assemble the objects in your application. Configuration consists of one or more bean definition for the container to manage. It can come via Java, through annotations, or in "),R=o("code"),Ce=B(Ue),be=B(" elements (that specify the class name) in an external XML configuration file."),ae=l(),P=o("p"),P.innerHTML=Oe,le=l(),k=o("pre"),k.innerHTML=Ye,se=l(),f=o("p"),ye=B("You can also use multiple XML files by linking additional ones using an "),F=o("code"),ge=B(ze),we=B(" tag."),ce=l(),I=o("h4"),I.textContent=Ve,re=l(),q=o("p"),q.innerHTML=$e,pe=l(),A=o("pre"),A.innerHTML=Ne,de=l(),j=o("p"),j.innerHTML=We,fe=l(),E=o("pre"),E.innerHTML=Ke,ue=l(),X=o("p"),X.innerHTML=Qe},l(e){d=a(e,"H1",{"data-svelte-h":!0}),s(d)!=="svelte-1m5j7t9"&&(d.textContent=_e),G=c(e),u=a(e,"P",{"data-svelte-h":!0}),s(u)!=="svelte-18wmph4"&&(u.innerHTML=He),U=c(e),h=a(e,"H3",{"data-svelte-h":!0}),s(h)!=="svelte-1jl4heu"&&(h.textContent=Te),O=c(e),m=a(e,"P",{"data-svelte-h":!0}),s(m)!=="svelte-1157k37"&&(m.innerHTML=Se),Y=c(e),v=a(e,"P",{"data-svelte-h":!0}),s(v)!=="svelte-1lktwd5"&&(v.innerHTML=Pe),z=c(e),x=a(e,"P",{"data-svelte-h":!0}),s(x)!=="svelte-636vyu"&&(x.innerHTML=ke),V=c(e),C=a(e,"H3",{"data-svelte-h":!0}),s(C)!=="svelte-1a7l9r1"&&(C.textContent=Ie),$=c(e),b=a(e,"P",{"data-svelte-h":!0}),s(b)!=="svelte-169jrvo"&&(b.textContent=qe),N=c(e),y=a(e,"P",{"data-svelte-h":!0}),s(y)!=="svelte-1c4hgp9"&&(y.textContent=Ae),W=c(e),g=a(e,"H2",{"data-svelte-h":!0}),s(g)!=="svelte-q60cyz"&&(g.textContent=je),K=c(e),w=a(e,"H3",{"data-svelte-h":!0}),s(w)!=="svelte-aeduc9"&&(w.textContent=Ee),Q=c(e),L=a(e,"P",{"data-svelte-h":!0}),s(L)!=="svelte-1ikir7p"&&(L.innerHTML=Xe),Z=c(e),M=a(e,"P",{"data-svelte-h":!0}),s(M)!=="svelte-1xexw29"&&(M.innerHTML=Be),ee=c(e),_=a(e,"H4",{"data-svelte-h":!0}),s(_)!=="svelte-3cy9b6"&&(_.textContent=Je),te=c(e),H=a(e,"P",{"data-svelte-h":!0}),s(H)!=="svelte-j3t1c3"&&(H.innerHTML=De),ne=c(e),T=a(e,"P",{"data-svelte-h":!0}),s(T)!=="svelte-hpe35f"&&(T.innerHTML=Re),ie=c(e),S=a(e,"H4",{"data-svelte-h":!0}),s(S)!=="svelte-1avc0kx"&&(S.textContent=Fe),oe=c(e),r=a(e,"P",{});var t=me(r);ve=J(t,"Spring consumes "),D=a(t,"B",{"data-svelte-h":!0}),s(D)!=="svelte-118wnxt"&&(D.textContent=Ge),xe=J(t," that instructs it on how to instantiate, configure, and assemble the objects in your application. Configuration consists of one or more bean definition for the container to manage. It can come via Java, through annotations, or in "),R=a(t,"CODE",{});var Ze=me(R);Ce=J(Ze,Ue),Ze.forEach(n),be=J(t," elements (that specify the class name) in an external XML configuration file."),t.forEach(n),ae=c(e),P=a(e,"P",{"data-svelte-h":!0}),s(P)!=="svelte-1iq9ump"&&(P.innerHTML=Oe),le=c(e),k=a(e,"PRE",{"data-svelte-h":!0}),s(k)!=="svelte-1xa33ca"&&(k.innerHTML=Ye),se=c(e),f=a(e,"P",{});var he=me(f);ye=J(he,"You can also use multiple XML files by linking additional ones using an "),F=a(he,"CODE",{});var et=me(F);ge=J(et,ze),et.forEach(n),we=J(he," tag."),he.forEach(n),ce=c(e),I=a(e,"H4",{"data-svelte-h":!0}),s(I)!=="svelte-69suxi"&&(I.textContent=Ve),re=c(e),q=a(e,"P",{"data-svelte-h":!0}),s(q)!=="svelte-dg12le"&&(q.innerHTML=$e),pe=c(e),A=a(e,"PRE",{"data-svelte-h":!0}),s(A)!=="svelte-q3l74h"&&(A.innerHTML=Ne),de=c(e),j=a(e,"P",{"data-svelte-h":!0}),s(j)!=="svelte-yuh1fh"&&(j.innerHTML=We),fe=c(e),E=a(e,"PRE",{"data-svelte-h":!0}),s(E)!=="svelte-ncrdax"&&(E.innerHTML=Ke),ue=c(e),X=a(e,"P",{"data-svelte-h":!0}),s(X)!=="svelte-tc8b0l"&&(X.innerHTML=Qe)},m(e,t){i(e,d,t),i(e,G,t),i(e,u,t),i(e,U,t),i(e,h,t),i(e,O,t),i(e,m,t),i(e,Y,t),i(e,v,t),i(e,z,t),i(e,x,t),i(e,V,t),i(e,C,t),i(e,$,t),i(e,b,t),i(e,N,t),i(e,y,t),i(e,W,t),i(e,g,t),i(e,K,t),i(e,w,t),i(e,Q,t),i(e,L,t),i(e,Z,t),i(e,M,t),i(e,ee,t),i(e,_,t),i(e,te,t),i(e,H,t),i(e,ne,t),i(e,T,t),i(e,ie,t),i(e,S,t),i(e,oe,t),i(e,r,t),p(r,ve),p(r,D),p(r,xe),p(r,R),p(R,Ce),p(r,be),i(e,ae,t),i(e,P,t),i(e,le,t),i(e,k,t),i(e,se,t),i(e,f,t),p(f,ye),p(f,F),p(F,ge),p(f,we),i(e,ce,t),i(e,I,t),i(e,re,t),i(e,q,t),i(e,pe,t),i(e,A,t),i(e,de,t),i(e,j,t),i(e,fe,t),i(e,E,t),i(e,ue,t),i(e,X,t)},p:Le,i:Le,o:Le,d(e){e&&(n(d),n(G),n(u),n(U),n(h),n(O),n(m),n(Y),n(v),n(z),n(x),n(V),n(C),n($),n(b),n(N),n(y),n(W),n(g),n(K),n(w),n(Q),n(L),n(Z),n(M),n(ee),n(_),n(te),n(H),n(ne),n(T),n(ie),n(S),n(oe),n(r),n(ae),n(P),n(le),n(k),n(se),n(f),n(ce),n(I),n(re),n(q),n(pe),n(A),n(de),n(j),n(fe),n(E),n(ue),n(X))}}}function lt(Me){return ot("java"),[]}class pt extends nt{constructor(d){super(),it(this,d,lt,at,tt,{})}}export{pt as component};
