import{s as re,n as R}from"../chunks/scheduler.Cs0xm5t1.js";import{S as de,i as me,e as n,s as i,c as l,k as s,f as r,l as ie,g as a,d as o}from"../chunks/index.Cky_bo-2.js";import{a as ue}from"../chunks/entry.DWEJqUym.js";function he(X){let d,Y="Designing Data-Intensive Applications",M,m,$="Data models and query languages",_,h,J="Apps are built on a tower of abstractions, each with a <b>data model</b>. Knowing a bit about the inner workings of different abstractions will help you choose the best one for your application.",H,c,K="The <b>relational model</b> (from Codd 1970) organizes data into series of unordered tuples called <b>relations</b> (rows in SQL). The <b>network model</b> and the <b>hierarchical model</b> the 70s and early 80s, <b>object databases</b> in the late 80s and early 90s, and <b>XML databases</b> in the early 00s were proposed alternatives for storing and querying data, but none managed to unseat the relational model.",j,p,E="Contemporarily, <b>NoSQL</b> has emerged as an umbrella term for a group of newer database systems that address criticisms of the relational model, such as a need for greater scalability, preference for open-source software, and inexpressive query syntax. Another common criticism is how awkward it is to translate between objects in object-oriented code and relations (tables, rows and columns) in the relational database model.",P,y,G="There are advantages to non-relational models like document-oriented databases for certain use cases, such as modeling <b>one-to-many relationships</b>. However <b>many-to-one relationships</b> have nice qualities (easy to update, localize and search, reduce redundancy, make joins easy), and don&#39;t fit well into the document model.",q,f,U="IBM&#39;s <i>Information Management System (IMS)</i>, from the 70s, used a unique data model called the hierarchical model that modeled data as a tree of records nested within other records, similar to NoSQL document models. Like document-oriented databases, it was great for one-to-many relationships, but not as great for many-to-many, and didn&#39;t support joins-- developers had to either have lots of duplicated data, or implement their own joins to resolve references.",D,v,V="The relational model was originally a response to this hierarchical model, as was the network model. In the network model, which was standardized by a comittee called CODASYL (so it's sometimes called the CODASYL model), every record can have any number of parents or pointer-like links to and from it. Accessing a record required you to have an access path of links to it, which you could traverse like a linked list. But since records would often have multiple different paths leading to them, the task of navigating these paths would get pushed to application code. Changing an application's data model was also difficult.",S,b,W='In the relational model, the query optimizer figures out how to execute any query automatically, the choices equivalent to the network model "access path". Being able to declare new indexes prevents you from having to rewrite existing queries to take advantage of a new index. Query optimizers are very complex, but they only need to be written once.',I,w,Z="In document models, many-to-one relationships are similar to those in the hierarchical model, but many-to-one and many-to-many are more like the relational model (foreign keys vs. document references).",A,x,ee="Relational vs. Document Today",z,C,te="Pros of the document model include schema flexibility, better performance due to locality, and potentially being similarly shaped to the data structures of the application code. The relational model is better for joins, many-to-one and many-to-many relationships.",B,g,ae="The document model does well for applications where your data is tree-like (mostly or all one-to-many relationships) and is more or less loaded all at once. <b>Shredding</b>-- splitting document-like data into multiple relational style tables can create complexity in application code and can lead to bloated schemas. The document model does less well for situations where you use many-to-many relationships-- you either have to denormalize, and then keep data consistent whenever you write, and manually emulate joins, both of which add complexity (and often worse performance) to application code. For highly connected data, the document model flops.",Q,k,oe="Most document databases don&#39;t enforce any schema or structure on data, so arbitrary keys and values can be added, and clients have no guarentees what to expect when reading (this has a natural parallel in loosely vs. strongly typed programming languages). In a <b>schemaless</b> database you need app code for handling unexpected values or old values, in a &quot;statically typed&quot; database schema you&#39;d have to do a <b>migration</b>, which can take a long time. For heterogenous data with a diversity of types of objects, or data dependent on external systems over which you have no control, schemaless helps, but if records have the same structure, schemas can help.",N,T,ne="The document model has great <b>storage locality</b> if your use-case is likely to use all the data in a document at once (in a relational model you&#39;d have to do lots of expensive joins). But if you need only a small part of a document, in the document model you&#39;re stuck loading the whole thing, and writing to a document usually means rewriting the whole thing, making it imperative to keep documents very small to maintain good performance. Also, some relational-style databases have features that can improve locality.",O,L,le="There are plenty of other examples of overlap between document and relational databases. Postgres, MySQL and IDM DB2 support JSON documents, and have supported XML for a long time. RethinkDB (a document database) has relational-style joins, and some MongoDB drivers automatically resolve database references, essentially unoptimized joins. Document and relational databases complement one another.",F,u,se="Query languages";return{c(){d=n("h1"),d.textContent=Y,M=i(),m=n("h2"),m.textContent=$,_=i(),h=n("p"),h.innerHTML=J,H=i(),c=n("p"),c.innerHTML=K,j=i(),p=n("p"),p.innerHTML=E,P=i(),y=n("p"),y.innerHTML=G,q=i(),f=n("p"),f.innerHTML=U,D=i(),v=n("p"),v.textContent=V,S=i(),b=n("p"),b.textContent=W,I=i(),w=n("p"),w.textContent=Z,A=i(),x=n("h3"),x.textContent=ee,z=i(),C=n("p"),C.textContent=te,B=i(),g=n("p"),g.innerHTML=ae,Q=i(),k=n("p"),k.innerHTML=oe,N=i(),T=n("p"),T.innerHTML=ne,O=i(),L=n("p"),L.textContent=le,F=i(),u=n("h2"),u.textContent=se,this.h()},l(e){d=l(e,"H1",{"data-svelte-h":!0}),s(d)!=="svelte-50o5"&&(d.textContent=Y),M=r(e),m=l(e,"H2",{class:!0,"data-svelte-h":!0}),s(m)!=="svelte-16bj26y"&&(m.textContent=$),_=r(e),h=l(e,"P",{"data-svelte-h":!0}),s(h)!=="svelte-12gx6ot"&&(h.innerHTML=J),H=r(e),c=l(e,"P",{"data-svelte-h":!0}),s(c)!=="svelte-srh10e"&&(c.innerHTML=K),j=r(e),p=l(e,"P",{"data-svelte-h":!0}),s(p)!=="svelte-xtwsy1"&&(p.innerHTML=E),P=r(e),y=l(e,"P",{"data-svelte-h":!0}),s(y)!=="svelte-1jwhav0"&&(y.innerHTML=G),q=r(e),f=l(e,"P",{"data-svelte-h":!0}),s(f)!=="svelte-14vatkl"&&(f.innerHTML=U),D=r(e),v=l(e,"P",{"data-svelte-h":!0}),s(v)!=="svelte-15ucqof"&&(v.textContent=V),S=r(e),b=l(e,"P",{"data-svelte-h":!0}),s(b)!=="svelte-1vsndcm"&&(b.textContent=W),I=r(e),w=l(e,"P",{"data-svelte-h":!0}),s(w)!=="svelte-15fk2d7"&&(w.textContent=Z),A=r(e),x=l(e,"H3",{"data-svelte-h":!0}),s(x)!=="svelte-18bxki0"&&(x.textContent=ee),z=r(e),C=l(e,"P",{"data-svelte-h":!0}),s(C)!=="svelte-14d5go5"&&(C.textContent=te),B=r(e),g=l(e,"P",{"data-svelte-h":!0}),s(g)!=="svelte-80ed6c"&&(g.innerHTML=ae),Q=r(e),k=l(e,"P",{"data-svelte-h":!0}),s(k)!=="svelte-s9trsb"&&(k.innerHTML=oe),N=r(e),T=l(e,"P",{"data-svelte-h":!0}),s(T)!=="svelte-1wj4kmv"&&(T.innerHTML=ne),O=r(e),L=l(e,"P",{"data-svelte-h":!0}),s(L)!=="svelte-iywxvo"&&(L.textContent=le),F=r(e),u=l(e,"H2",{class:!0,"data-svelte-h":!0}),s(u)!=="svelte-n6sdmj"&&(u.textContent=se),this.h()},h(){ie(m,"class","svelte-ouatk6"),ie(u,"class","svelte-ouatk6")},m(e,t){a(e,d,t),a(e,M,t),a(e,m,t),a(e,_,t),a(e,h,t),a(e,H,t),a(e,c,t),a(e,j,t),a(e,p,t),a(e,P,t),a(e,y,t),a(e,q,t),a(e,f,t),a(e,D,t),a(e,v,t),a(e,S,t),a(e,b,t),a(e,I,t),a(e,w,t),a(e,A,t),a(e,x,t),a(e,z,t),a(e,C,t),a(e,B,t),a(e,g,t),a(e,Q,t),a(e,k,t),a(e,N,t),a(e,T,t),a(e,O,t),a(e,L,t),a(e,F,t),a(e,u,t)},p:R,i:R,o:R,d(e){e&&(o(d),o(M),o(m),o(_),o(h),o(H),o(c),o(j),o(p),o(P),o(y),o(q),o(f),o(D),o(v),o(S),o(b),o(I),o(w),o(A),o(x),o(z),o(C),o(B),o(g),o(Q),o(k),o(N),o(T),o(O),o(L),o(F),o(u))}}}function ce(X){return ue(()=>document.title="Notes on DDIA"),[]}class ve extends de{constructor(d){super(),me(this,d,ce,he,re,{})}}export{ve as component};
