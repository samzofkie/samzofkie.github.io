import{s as $e,n as ve}from"../chunks/scheduler.Cs0xm5t1.js";import{S as Ke,i as Ze,e as o,s as l,t as et,c as i,k as s,f as r,a as Ve,b as tt,d as a,l as at,g as n,h as Xe}from"../chunks/index.Cky_bo-2.js";import{a as nt}from"../chunks/entry.DeykW3HY.js";function ot(be){let d,ye="Designing Data-Intensive Applications",R,m,we="Data models and query languages",E,c,xe="Apps are built on a tower of abstractions, each with a <b>data model</b>. Knowing a bit about the inner workings of different abstractions will help you choose the best one for your application.",U,p,ge="The <b>relational model</b> (from Codd 1970) organizes data into series of unordered tuples called <b>relations</b> (rows in SQL). The <b>network model</b> and the <b>hierarchical model</b> the 70s and early 80s, <b>object databases</b> in the late 80s and early 90s, and <b>XML databases</b> in the early 00s were proposed alternatives for storing and querying data, but none managed to unseat the relational model.",W,h,Ce="Contemporarily, <b>NoSQL</b> has emerged as an umbrella term for a group of newer database systems that address criticisms of the relational model, such as a need for greater scalability, preference for open-source software, and inexpressive query syntax. Another common criticism is how awkward it is to translate between objects in object-oriented code and relations (tables, rows and columns) in the relational database model.",O,u,Te="There are advantages to non-relational models like document-oriented databases for certain use cases, such as modeling <b>one-to-many relationships</b>. However <b>many-to-one relationships</b> have nice qualities (easy to update, localize and search, reduce redundancy, make joins easy), and don&#39;t fit well into the document model.",G,f,ke="IBM&#39;s <i>Information Management System (IMS)</i>, from the 70s, used a unique data model called the hierarchical model that modeled data as a tree of records nested within other records, similar to NoSQL document models. Like document-oriented databases, it was great for one-to-many relationships, but not as great for many-to-many, and didn&#39;t support joins-- developers had to either have lots of duplicated data, or implement their own joins to resolve references.",Y,v,Le="The relational model was originally a response to this hierarchical model, as was the network model. In the network model, which was standardized by a comittee called CODASYL (so it's sometimes called the CODASYL model), every record can have any number of parents or pointer-like links to and from it. Accessing a record required you to have an access path of links to it, which you could traverse like a linked list. But since records would often have multiple different paths leading to them, the task of navigating these paths would get pushed to application code. Changing an application's data model was also difficult.",F,b,He='In the relational model, the query optimizer figures out how to execute any query automatically, the choices equivalent to the network model "access path". Being able to declare new indexes prevents you from having to rewrite existing queries to take advantage of a new index. Query optimizers are very complex, but they only need to be written once.',J,y,Me="In document models, many-to-one relationships are similar to those in the hierarchical model, but many-to-one and many-to-many are more like the relational model (foreign keys vs. document references).",V,w,_e="Relational vs. Document Today",X,x,Ie="Pros of the document model include schema flexibility, better performance due to locality, and potentially being similarly shaped to the data structures of the application code. The relational model is better for joins, many-to-one and many-to-many relationships.",$,g,qe="The document model does well for applications where your data is tree-like (mostly or all one-to-many relationships) and is more or less loaded all at once. <b>Shredding</b>-- splitting document-like data into multiple relational style tables can create complexity in application code and can lead to bloated schemas. The document model does less well for situations where you use many-to-many relationships-- you either have to denormalize, and then keep data consistent whenever you write, and manually emulate joins, both of which add complexity (and often worse performance) to application code. For highly connected data, the document model flops.",K,C,Pe="Most document databases don&#39;t enforce any schema or structure on data, so arbitrary keys and values can be added, and clients have no guarentees what to expect when reading (this has a natural parallel in loosely vs. strongly typed programming languages). In a <b>schemaless</b> database you need app code for handling unexpected values or old values, in a &quot;statically typed&quot; database schema you&#39;d have to do a <b>migration</b>, which can take a long time. For heterogenous data with a diversity of types of objects, or data dependent on external systems over which you have no control, schemaless helps, but if records have the same structure, schemas can help.",Z,T,Se="The document model has great <b>storage locality</b> if your use-case is likely to use all the data in a document at once (in a relational model you&#39;d have to do lots of expensive joins). But if you need only a small part of a document, in the document model you&#39;re stuck loading the whole thing, and writing to a document usually means rewriting the whole thing, making it imperative to keep documents very small to maintain good performance. Also, some relational-style databases have features that can improve locality.",ee,k,je="There are plenty of other examples of overlap between document and relational databases. Postgres, MySQL and IDM DB2 support JSON documents, and have supported XML for a long time. RethinkDB (a document database) has relational-style joins, and some MongoDB drivers automatically resolve database references, essentially unoptimized joins. Document and relational databases complement one another.",te,L,De="Query languages",ae,H,Ne="Relational algebra, on which the syntax of SQL is based, is <b>declarative</b> as opposed to <b>imperative</b>. Hiding the implementation of a query behind a declarative syntax (instead of imperatively, manually detailing how to execute it) allows the database engine to be responsible for much of the organization and maintenance of the data, improve performance, and may allow for easier parallel execution.",ne,M,ze="<b>MapReduce</b> is a programming model for processing large amounts of data in bulk across many machines, a limited form of which is supported by some NoSQL databases (specifically MongoDB and CouchDB). MongoDB&#39;s version uses a weird blend of declarative and imperative styles, where a filter is done declaratively the query and then <i>pure</i> snippets of imperative code for <code>map</code> and <code>reduce</code> are executed on the results of the filter.",oe,_,Ae="You could implement a higher level query language like SQL as a pipeline of MapReduce operations, but there are many distributed implementations of SQL.",ie,I,Be="Because the imperative code can be difficult for the user to write and for the query engine to optimize, MongoDB added a feature implementing a declarative query language called the <i>aggregation pipeline</i>-- thus coming full circle, basically back to SQL.",le,q,Qe="Graph-like data models",se,P,Re="<b>Graphs</b> have two types of objects: <b>vertices</b> and <b>edges</b>. This simplicity allows it to be able to model a great diversity of data-- for example, Facebook uses an enormous graph where vertices can be people, locations, events, comments ect., and edges indicate things like who posted that comment, who checked in where and when, who&#39;s friends with who, ect. This is great for many-to-many relationships.",re,S,Ee="In the <b>property graph</b> model (implemented by Neo4j, Titan, and InfiniteGraph), vertices have a UID, sets of incoming and outgoing edges, and a collection of key-value pairs, and edges have a UID, references to the start (<i>tail</i>) and end (<i>head</i>) vertices it&#39;s associated with, a label, and it&#39;s own collection of key-value pairs. This can model a relationship between any two <i>things</i>, irrespective of type, and allow a user to traverse relationships efficiently. It&#39;s schemalass flexibilty makes it very easy to extend to support new features.",de,j,Ue="Cypher is a declarative query language created for the Neo4j database. In a creation query, vertices are given a symbolic name, and edges are declared between vertices with a labeled arrow like <code>(Idaho) -[:WITHIN]-&gt; (USA)</code>. Querying for American ex-pats in Europe might look like:",me,B,Q,We=`MATCH
(person) -[:BORN_IN]-> () -[:WITHIN*0..]-> (us:Location {name:'United States'}),
(person) -[:LIVES_IN]-> () -[:WITHIN*0..]-> (eu:Location {name:'Europe'})
RETURN person.name`,fe,ce,D,Oe="The <code>()</code> unspecified vertex and <code>-[:WITHIN*0..]-&gt;</code> tells the database engine to find people whose <code>[:BORN_IN]</code> vertex is connected via <code>[:WITHIN]</code> egdes to the <code>Location</code> named <code>&#39;United States&#39;</code>. As is common in declarative languages, the implementation isn&#39;t specified-- the query optimizer might begin with a list of people and search <code>[:WITHIN]</code> edges looking for <code>&#39;United States&#39;</code> or start with <code>&#39;United States&#39;</code> and work backwards looking for people.",pe,N,Ge="You could model a graph in a relational database, using a table for vertices and another for edges, but this type of traversal, which may take a variable number steps along a path (expressed as 0 or more with the <code>*</code> in Cypher), would require a variable number of joins in SQL. Since SQL:1999 this has been possible using a feature called <i>recursive common table expressions</i>, using <code>WITH RECURSIVE</code>. However, implementing a query equivalent to the one above would be nightmarish.",he,z,Ye="The <b>triple-store model</b>, exemplified by Datomic, AllegroGraph, and others, reduces data to simple three-part statements like (Jim, likes, bananas)-- (subject, predicate, object), where the value of the object can be like a value, and the predicate a key ((Lucy, age, 33)), or it can be another vertex in the graph: (Lucy, marriedTo, Alan). Triple-store data can be formatted to be nicely readable.",ue,A,Fe="";return{c(){d=o("h1"),d.textContent=ye,R=l(),m=o("h2"),m.textContent=we,E=l(),c=o("p"),c.innerHTML=xe,U=l(),p=o("p"),p.innerHTML=ge,W=l(),h=o("p"),h.innerHTML=Ce,O=l(),u=o("p"),u.innerHTML=Te,G=l(),f=o("p"),f.innerHTML=ke,Y=l(),v=o("p"),v.textContent=Le,F=l(),b=o("p"),b.textContent=He,J=l(),y=o("p"),y.textContent=Me,V=l(),w=o("h3"),w.textContent=_e,X=l(),x=o("p"),x.textContent=Ie,$=l(),g=o("p"),g.innerHTML=qe,K=l(),C=o("p"),C.innerHTML=Pe,Z=l(),T=o("p"),T.innerHTML=Se,ee=l(),k=o("p"),k.textContent=je,te=l(),L=o("h3"),L.textContent=De,ae=l(),H=o("p"),H.innerHTML=Ne,ne=l(),M=o("p"),M.innerHTML=ze,oe=l(),_=o("p"),_.textContent=Ae,ie=l(),I=o("p"),I.innerHTML=Be,le=l(),q=o("h3"),q.textContent=Qe,se=l(),P=o("p"),P.innerHTML=Re,re=l(),S=o("p"),S.innerHTML=Ee,de=l(),j=o("p"),j.innerHTML=Ue,me=l(),B=o("pre"),Q=o("code"),fe=et(We),ce=l(),D=o("p"),D.innerHTML=Oe,pe=l(),N=o("p"),N.innerHTML=Ge,he=l(),z=o("p"),z.innerHTML=Ye,ue=l(),A=o("p"),A.innerHTML=Fe,this.h()},l(e){d=i(e,"H1",{"data-svelte-h":!0}),s(d)!=="svelte-50o5"&&(d.textContent=ye),R=r(e),m=i(e,"H2",{class:!0,"data-svelte-h":!0}),s(m)!=="svelte-16bj26y"&&(m.textContent=we),E=r(e),c=i(e,"P",{"data-svelte-h":!0}),s(c)!=="svelte-12gx6ot"&&(c.innerHTML=xe),U=r(e),p=i(e,"P",{"data-svelte-h":!0}),s(p)!=="svelte-srh10e"&&(p.innerHTML=ge),W=r(e),h=i(e,"P",{"data-svelte-h":!0}),s(h)!=="svelte-xtwsy1"&&(h.innerHTML=Ce),O=r(e),u=i(e,"P",{"data-svelte-h":!0}),s(u)!=="svelte-1jwhav0"&&(u.innerHTML=Te),G=r(e),f=i(e,"P",{"data-svelte-h":!0}),s(f)!=="svelte-14vatkl"&&(f.innerHTML=ke),Y=r(e),v=i(e,"P",{"data-svelte-h":!0}),s(v)!=="svelte-15ucqof"&&(v.textContent=Le),F=r(e),b=i(e,"P",{"data-svelte-h":!0}),s(b)!=="svelte-1vsndcm"&&(b.textContent=He),J=r(e),y=i(e,"P",{"data-svelte-h":!0}),s(y)!=="svelte-15fk2d7"&&(y.textContent=Me),V=r(e),w=i(e,"H3",{"data-svelte-h":!0}),s(w)!=="svelte-18bxki0"&&(w.textContent=_e),X=r(e),x=i(e,"P",{"data-svelte-h":!0}),s(x)!=="svelte-14d5go5"&&(x.textContent=Ie),$=r(e),g=i(e,"P",{"data-svelte-h":!0}),s(g)!=="svelte-80ed6c"&&(g.innerHTML=qe),K=r(e),C=i(e,"P",{"data-svelte-h":!0}),s(C)!=="svelte-s9trsb"&&(C.innerHTML=Pe),Z=r(e),T=i(e,"P",{"data-svelte-h":!0}),s(T)!=="svelte-1wj4kmv"&&(T.innerHTML=Se),ee=r(e),k=i(e,"P",{"data-svelte-h":!0}),s(k)!=="svelte-iywxvo"&&(k.textContent=je),te=r(e),L=i(e,"H3",{"data-svelte-h":!0}),s(L)!=="svelte-1hhukr"&&(L.textContent=De),ae=r(e),H=i(e,"P",{"data-svelte-h":!0}),s(H)!=="svelte-18qq3hr"&&(H.innerHTML=Ne),ne=r(e),M=i(e,"P",{"data-svelte-h":!0}),s(M)!=="svelte-1705b8s"&&(M.innerHTML=ze),oe=r(e),_=i(e,"P",{"data-svelte-h":!0}),s(_)!=="svelte-1pdm34v"&&(_.textContent=Ae),ie=r(e),I=i(e,"P",{"data-svelte-h":!0}),s(I)!=="svelte-xg8lsf"&&(I.innerHTML=Be),le=r(e),q=i(e,"H3",{"data-svelte-h":!0}),s(q)!=="svelte-1bdd8ga"&&(q.textContent=Qe),se=r(e),P=i(e,"P",{"data-svelte-h":!0}),s(P)!=="svelte-7f88al"&&(P.innerHTML=Re),re=r(e),S=i(e,"P",{"data-svelte-h":!0}),s(S)!=="svelte-zbzsxp"&&(S.innerHTML=Ee),de=r(e),j=i(e,"P",{"data-svelte-h":!0}),s(j)!=="svelte-i53v3d"&&(j.innerHTML=Ue),me=r(e),B=i(e,"PRE",{});var t=Ve(B);Q=i(t,"CODE",{});var Je=Ve(Q);fe=tt(Je,We),Je.forEach(a),t.forEach(a),ce=r(e),D=i(e,"P",{"data-svelte-h":!0}),s(D)!=="svelte-1mxgizd"&&(D.innerHTML=Oe),pe=r(e),N=i(e,"P",{"data-svelte-h":!0}),s(N)!=="svelte-1vstxnw"&&(N.innerHTML=Ge),he=r(e),z=i(e,"P",{"data-svelte-h":!0}),s(z)!=="svelte-kqxvmz"&&(z.innerHTML=Ye),ue=r(e),A=i(e,"P",{"data-svelte-h":!0}),s(A)!=="svelte-f4k3n4"&&(A.innerHTML=Fe),this.h()},h(){at(m,"class","svelte-ouatk6")},m(e,t){n(e,d,t),n(e,R,t),n(e,m,t),n(e,E,t),n(e,c,t),n(e,U,t),n(e,p,t),n(e,W,t),n(e,h,t),n(e,O,t),n(e,u,t),n(e,G,t),n(e,f,t),n(e,Y,t),n(e,v,t),n(e,F,t),n(e,b,t),n(e,J,t),n(e,y,t),n(e,V,t),n(e,w,t),n(e,X,t),n(e,x,t),n(e,$,t),n(e,g,t),n(e,K,t),n(e,C,t),n(e,Z,t),n(e,T,t),n(e,ee,t),n(e,k,t),n(e,te,t),n(e,L,t),n(e,ae,t),n(e,H,t),n(e,ne,t),n(e,M,t),n(e,oe,t),n(e,_,t),n(e,ie,t),n(e,I,t),n(e,le,t),n(e,q,t),n(e,se,t),n(e,P,t),n(e,re,t),n(e,S,t),n(e,de,t),n(e,j,t),n(e,me,t),n(e,B,t),Xe(B,Q),Xe(Q,fe),n(e,ce,t),n(e,D,t),n(e,pe,t),n(e,N,t),n(e,he,t),n(e,z,t),n(e,ue,t),n(e,A,t)},p:ve,i:ve,o:ve,d(e){e&&(a(d),a(R),a(m),a(E),a(c),a(U),a(p),a(W),a(h),a(O),a(u),a(G),a(f),a(Y),a(v),a(F),a(b),a(J),a(y),a(V),a(w),a(X),a(x),a($),a(g),a(K),a(C),a(Z),a(T),a(ee),a(k),a(te),a(L),a(ae),a(H),a(ne),a(M),a(oe),a(_),a(ie),a(I),a(le),a(q),a(se),a(P),a(re),a(S),a(de),a(j),a(me),a(B),a(ce),a(D),a(pe),a(N),a(he),a(z),a(ue),a(A))}}}function it(be){return nt(()=>document.title="Notes on DDIA"),[]}class dt extends Ke{constructor(d){super(),Ze(this,d,it,ot,$e,{})}}export{dt as component};