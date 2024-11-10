import{s as Le,n as ie}from"../chunks/scheduler.Cs0xm5t1.js";import{S as Ie,i as Pe,e as o,s as l,t as Q,c as a,k as s,f as r,a as Te,b as Y,d as n,g as i,h as P}from"../chunks/index.Cky_bo-2.js";import{a as ke}from"../chunks/utils.BrNTHlFF.js";function je(oe){let p,ae="Spring",j,d,se="The <b>Spring Framework</b> is divided into modules, the heart of which are the modules of the core container, which includes a configuration model and a dependency injection mechanism. Spring also has modules supporting different application architectures such as messaging, transactional data and persistance, and web. It also has the Servlet-based Spring MVC web framework.",A,f,le="Servlets",E,h,re="<b>Jakarta</b> (formerly <b>Java</b>) <b>Servlets</b> are Java classes in Jakarta EE that conform to the Jakarta Servlet API (found in <code>javax.servlet</code>), which specifies how classes respond to requests, typically extending the <code>HttpServlet</code> class, which is a subclass of <code>GenericServlet</code>. Ultimately, a servlet is an object that receives a request and responds to it.",J,m,ce="Servlet are deployed and run by <b>web containers</b>, which manage their lifecycle, map specific URLs to them, and ensuring access rights.",q,u,pe="Servlets have three central methods: <code>init</code>, <code>service</code>, and <code>destroy</code>.",X,v,de="Spring",B,C,fe="Spring was first written in 2003 as a response to the complexity of the early J2EE specifications. Today the Spring framework integrates with individual specifications from the traditional EE umbrella, such as the Servlet API, the WebSocket API, Concurrency Utilities, the JSON Binding API, Bean Validation, and others. It also optionally supports the Dependency Injection and Common Annotations specs in lieu of the Spring-specific alternative mechanisms.",F,x,he="Spring 6.0 has been upgraded to Jakarta EE 9, Tomcat 10.1, Jetty 11, Undertow 2.3 and the Hibernate ORM 6.1.",D,b,me="Core Technologies",U,y,ue="The IoC Container",O,g,ve="The Spring Framework implements the <b>Inversion of Control (IoC) principle</b>. <b>Dependency Injection (DI)</b> is a specialized form of IoC where objects define their dependencies only through constructor arguments, arguments to a factory method, or properties that are set on an object instance after it&#39;s constructed or returned from a factory. The IoC container then injects those dependencies when it creates the bean. It&#39;s called &quot;inversion&quot; because it&#39;s the opposite of the bean itself controlling the instantiation of it&#39;s dependencies itself. A <b>bean</b> is a Java object that is instantiated, assembled, and managed by a Spring IoC container.",R,w,Ce="<code>org.springframework.beans</code> and <code>org.springframework.context</code> are the main packages forming the basis of Spring&#39;s IoC container. The <code>BeanFactory</code> interface provides a configuration mechanism capable of managing any type of object, and <code>ApplicationContext</code>, a sub-interface of <code>BeanFactory</code>, has some additional baked-in nice features. <code>BeanFactory</code> provides the configuration framework and basic functionality and <code>ApplicationContext</code> adds more entrprise-specific functionality.",z,_,xe="Containers",G,S,be="<code>org.springframework.context.ApplicationContext</code> is an interface representing the Spring IoC container and is responsible for instantiating, configuring, and assembling beans. It receives instructions on which components to manage by reading configuration metadata, which can be in annotated component classes, configuration classes with factory methods, or external XML or Groovy scripts.",V,M,ye="In core Spring, the most commonly used implementations of <code>ApplicationContext</code> are <code>AnnotationConfigApplicationContext</code> or <code>ClassPathXmlApplicationContext</code>. Most of the time you won&#39;t need to instatiate any instances of a Spring IoC container-- for a plain old web app, a simple boilerplate web descriptor XML file will do it for you, and in Spring Boot the application context is implicitly bootstrapped for you based on common conventions.",$,H,ge="Configuration Metadata",N,c,Z,I,we="configuration metadata",ee,k,_e="<bean>",te,ne,W,T,Se="For XML-based configuration, the locations of the XML resources need to be passed to the constructor of a <code>ClassPathXmlApplicationContext</code> object that lets the container load the configuration files:",K,L,Me="<code>ApplicationContext context = new ClassPathXmlApplicationContext(&quot;services.xml&quot;, &quot;daos.xml&quot;);</code>";return{c(){p=o("h1"),p.textContent=ae,j=l(),d=o("p"),d.innerHTML=se,A=l(),f=o("h3"),f.textContent=le,E=l(),h=o("p"),h.innerHTML=re,J=l(),m=o("p"),m.innerHTML=ce,q=l(),u=o("p"),u.innerHTML=pe,X=l(),v=o("h3"),v.textContent=de,B=l(),C=o("p"),C.textContent=fe,F=l(),x=o("p"),x.textContent=he,D=l(),b=o("h2"),b.textContent=me,U=l(),y=o("h3"),y.textContent=ue,O=l(),g=o("p"),g.innerHTML=ve,R=l(),w=o("p"),w.innerHTML=Ce,z=l(),_=o("h4"),_.textContent=xe,G=l(),S=o("p"),S.innerHTML=be,V=l(),M=o("p"),M.innerHTML=ye,$=l(),H=o("h4"),H.textContent=ge,N=l(),c=o("p"),Z=Q("Spring consumes "),I=o("b"),I.textContent=we,ee=Q(" that instructs it on how to instantiate, configure, and assemble the objects in your application. Configuration consists of one or more bean definition for the container to manage. It can come via Java, through annotations, or in "),k=o("code"),te=Q(_e),ne=Q(" elements (that specify the class name) in an external XML configuration file."),W=l(),T=o("p"),T.innerHTML=Se,K=l(),L=o("pre"),L.innerHTML=Me},l(e){p=a(e,"H1",{"data-svelte-h":!0}),s(p)!=="svelte-1m5j7t9"&&(p.textContent=ae),j=r(e),d=a(e,"P",{"data-svelte-h":!0}),s(d)!=="svelte-18wmph4"&&(d.innerHTML=se),A=r(e),f=a(e,"H3",{"data-svelte-h":!0}),s(f)!=="svelte-1jl4heu"&&(f.textContent=le),E=r(e),h=a(e,"P",{"data-svelte-h":!0}),s(h)!=="svelte-1157k37"&&(h.innerHTML=re),J=r(e),m=a(e,"P",{"data-svelte-h":!0}),s(m)!=="svelte-1lktwd5"&&(m.innerHTML=ce),q=r(e),u=a(e,"P",{"data-svelte-h":!0}),s(u)!=="svelte-636vyu"&&(u.innerHTML=pe),X=r(e),v=a(e,"H3",{"data-svelte-h":!0}),s(v)!=="svelte-1a7l9r1"&&(v.textContent=de),B=r(e),C=a(e,"P",{"data-svelte-h":!0}),s(C)!=="svelte-169jrvo"&&(C.textContent=fe),F=r(e),x=a(e,"P",{"data-svelte-h":!0}),s(x)!=="svelte-1c4hgp9"&&(x.textContent=he),D=r(e),b=a(e,"H2",{"data-svelte-h":!0}),s(b)!=="svelte-q60cyz"&&(b.textContent=me),U=r(e),y=a(e,"H3",{"data-svelte-h":!0}),s(y)!=="svelte-aeduc9"&&(y.textContent=ue),O=r(e),g=a(e,"P",{"data-svelte-h":!0}),s(g)!=="svelte-1ikir7p"&&(g.innerHTML=ve),R=r(e),w=a(e,"P",{"data-svelte-h":!0}),s(w)!=="svelte-1xexw29"&&(w.innerHTML=Ce),z=r(e),_=a(e,"H4",{"data-svelte-h":!0}),s(_)!=="svelte-3cy9b6"&&(_.textContent=xe),G=r(e),S=a(e,"P",{"data-svelte-h":!0}),s(S)!=="svelte-j3t1c3"&&(S.innerHTML=be),V=r(e),M=a(e,"P",{"data-svelte-h":!0}),s(M)!=="svelte-hpe35f"&&(M.innerHTML=ye),$=r(e),H=a(e,"H4",{"data-svelte-h":!0}),s(H)!=="svelte-1avc0kx"&&(H.textContent=ge),N=r(e),c=a(e,"P",{});var t=Te(c);Z=Y(t,"Spring consumes "),I=a(t,"B",{"data-svelte-h":!0}),s(I)!=="svelte-118wnxt"&&(I.textContent=we),ee=Y(t," that instructs it on how to instantiate, configure, and assemble the objects in your application. Configuration consists of one or more bean definition for the container to manage. It can come via Java, through annotations, or in "),k=a(t,"CODE",{});var He=Te(k);te=Y(He,_e),He.forEach(n),ne=Y(t," elements (that specify the class name) in an external XML configuration file."),t.forEach(n),W=r(e),T=a(e,"P",{"data-svelte-h":!0}),s(T)!=="svelte-1iq9ump"&&(T.innerHTML=Se),K=r(e),L=a(e,"PRE",{"data-svelte-h":!0}),s(L)!=="svelte-1xa33ca"&&(L.innerHTML=Me)},m(e,t){i(e,p,t),i(e,j,t),i(e,d,t),i(e,A,t),i(e,f,t),i(e,E,t),i(e,h,t),i(e,J,t),i(e,m,t),i(e,q,t),i(e,u,t),i(e,X,t),i(e,v,t),i(e,B,t),i(e,C,t),i(e,F,t),i(e,x,t),i(e,D,t),i(e,b,t),i(e,U,t),i(e,y,t),i(e,O,t),i(e,g,t),i(e,R,t),i(e,w,t),i(e,z,t),i(e,_,t),i(e,G,t),i(e,S,t),i(e,V,t),i(e,M,t),i(e,$,t),i(e,H,t),i(e,N,t),i(e,c,t),P(c,Z),P(c,I),P(c,ee),P(c,k),P(k,te),P(c,ne),i(e,W,t),i(e,T,t),i(e,K,t),i(e,L,t)},p:ie,i:ie,o:ie,d(e){e&&(n(p),n(j),n(d),n(A),n(f),n(E),n(h),n(J),n(m),n(q),n(u),n(X),n(v),n(B),n(C),n(F),n(x),n(D),n(b),n(U),n(y),n(O),n(g),n(R),n(w),n(z),n(_),n(G),n(S),n(V),n(M),n($),n(H),n(N),n(c),n(W),n(T),n(K),n(L))}}}function Ae(oe){return ke("java"),[]}class Xe extends Ie{constructor(p){super(),Pe(this,p,Ae,je,Le,{})}}export{Xe as component};
