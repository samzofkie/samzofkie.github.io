<script>
  import { afterNavigate } from '$app/navigation';
  afterNavigate(() => document.title = 'Notes on DDIA')
</script>

<h1>
  Designing Data-Intensive Applications
</h1>

<h2>Data models and query languages</h2>

<p>
  Apps are built on a tower of abstractions, each with a <b>data model</b>. Knowing a bit about the inner workings of different abstractions will help you choose the best one for your application.
</p>

<p>
  The <b>relational model</b> (from Codd 1970) organizes data into series of unordered tuples called <b>relations</b> (rows in SQL). The <b>network model</b> and the <b>hierarchical model</b> the 70s and early 80s, <b>object databases</b> in the late 80s and early 90s, and <b>XML databases</b> in the early 00s were proposed alternatives for storing and querying data, but none managed to unseat the relational model.
</p>

<p>
  Contemporarily, <b>NoSQL</b> has emerged as an umbrella term for a group of newer database systems that address criticisms of the relational model, such as a need for greater scalability, preference for open-source software, and inexpressive query syntax. Another common criticism is how awkward it is to translate between objects in object-oriented code and relations (tables, rows and columns) in the relational database model. 
</p>

<p>
  There are advantages to non-relational models like document-oriented databases for certain use cases, such as modeling <b>one-to-many relationships</b>. However <b>many-to-one relationships</b> have nice qualities (easy to update, localize and search, reduce redundancy, make joins easy), and don't fit well into the document model.
</p>

<p>
  IBM's <i>Information Management System (IMS)</i>, from the 70s, used a unique data model called the hierarchical model that modeled data as a tree of records nested within other records, similar to NoSQL document models. Like document-oriented databases, it was great for one-to-many relationships, but not as great for many-to-many, and didn't support joins-- developers had to either have lots of duplicated data, or implement their own joins to resolve references.</p>
  
<p> 
  The relational model was originally a response to this hierarchical model, as was the network model. In the network model, which was standardized by a comittee called CODASYL (so it's sometimes called the CODASYL model), every record can have any number of parents or pointer-like links to and from it. Accessing a record required you to have an access path of links to it, which you could traverse like a linked list. But since records would often have multiple different paths leading to them, the task of navigating these paths would get pushed to application code. Changing an application's data model was also difficult.
</p>

<p>
  In the relational model, the query optimizer figures out how to execute any query automatically, the choices equivalent to the network model "access path". Being able to declare new indexes prevents you from having to rewrite existing queries to take advantage of a new index. Query optimizers are very complex, but they only need to be written once.
</p>

<p>
  In document models, many-to-one relationships are similar to those in the hierarchical model, but many-to-one and many-to-many are more like the relational model (foreign keys vs. document references).
</p>

<h3>Relational vs. Document Today</h3>

<p>
  Pros of the document model include schema flexibility, better performance due to locality, and potentially being similarly shaped to the data structures of the application code. The relational model is better for joins, many-to-one and many-to-many relationships.
</p>

<p>
  The document model does well for applications where your data is tree-like (mostly or all one-to-many relationships) and is more or less loaded all at once. <b>Shredding</b>-- splitting document-like data into multiple relational style tables can create complexity in application code and can lead to bloated schemas. The document model does less well for situations where you use many-to-many relationships-- you either have to denormalize, and then keep data consistent whenever you write, and manually emulate joins, both of which add complexity (and often worse performance) to application code. For highly connected data, the document model flops.
</p>

<p>
  Most document databases don't enforce any schema or structure on data, so arbitrary keys and values can be added, and clients have no guarentees what to expect when reading (this has a natural parallel in loosely vs. strongly typed programming languages). In a <b>schemaless</b> database you need app code for handling unexpected values or old values, in a "statically typed" database schema you'd have to do a <b>migration</b>, which can take a long time. For heterogenous data with a diversity of types of objects, or data dependent on external systems over which you have no control, schemaless helps, but if records have the same structure, schemas can help.
</p>

<p>
  The document model has great <b>storage locality</b> if your use-case is likely to use all the data in a document at once (in a relational model you'd have to do lots of expensive joins). But if you need only a small part of a document, in the document model you're stuck loading the whole thing, and writing to a document usually means rewriting the whole thing, making it imperative to keep documents very small to maintain good performance. Also, some relational-style databases have features that can improve locality.
</p>

<p>
  There are plenty of other examples of overlap between document and relational databases. Postgres, MySQL and IDM DB2 support JSON documents, and have supported XML for a long time. RethinkDB (a document database) has relational-style joins, and some MongoDB drivers automatically resolve database references, essentially unoptimized joins. Document and relational databases complement one another.
</p>

<h3>Query languages</h3>

<p>
  Relational algebra, on which the syntax of SQL is based, is <b>declarative</b> as opposed to <b>imperative</b>. Hiding the implementation of a query behind a declarative syntax (instead of imperatively, manually detailing how to execute it) allows the database engine to be responsible for much of the organization and maintenance of the data, improve performance, and may allow for easier parallel execution.
</p>

<p>
  <b>MapReduce</b> is a programming model for processing large amounts of data in bulk across many machines, a limited form of which is supported by some NoSQL databases (specifically MongoDB and CouchDB). MongoDB's version uses a weird blend of declarative and imperative styles, where a filter is done declaratively the query and then <i>pure</i> snippets of imperative code for <code>map</code> and <code>reduce</code> are executed on the results of the filter.
</p>

<p>
  You could implement a higher level query language like SQL as a pipeline of MapReduce operations, but there are many distributed implementations of SQL.
</p>

<p>
  Because the imperative code can be difficult for the user to write and for the query engine to optimize, MongoDB added a feature implementing a declarative query language called the <i>aggregation pipeline</i>-- thus coming full circle, basically back to SQL.
</p>

<h3>Graph-like data models</h3>

<p>
  <b>Graphs</b> have two types of objects: <b>vertices</b> and <b>edges</b>. This simplicity allows it to be able to model a great diversity of data-- for example, Facebook uses an enormous graph where vertices can be people, locations, events, comments ect., and edges indicate things like who posted that comment, who checked in where and when, who's friends with who, ect. This is great for many-to-many relationships.
</p>

<p>
  In the <b>property graph</b> model (implemented by Neo4j, Titan, and InfiniteGraph), vertices have a UID, sets of incoming and outgoing edges, and a collection of key-value pairs, and edges have a UID, references to the start (<i>tail</i>) and end (<i>head</i>) vertices it's associated with, a label, and it's own collection of key-value pairs. This can model a relationship between any two <i>things</i>, irrespective of type, and allow a user to traverse relationships efficiently. It's schemalass flexibilty makes it very easy to extend to support new features.
</p>

<p>
  Cypher is a declarative query language created for the Neo4j database. In a creation query, vertices are given a symbolic name, and edges are declared between vertices with a labeled arrow like <code>(Idaho) -[:WITHIN]-> (USA)</code>. Querying for American ex-pats in Europe might look like:
</p>

<pre><code>{`MATCH
(person) -[:BORN_IN]-> () -[:WITHIN*0..]-> (us:Location {name:'United States'}),
(person) -[:LIVES_IN]-> () -[:WITHIN*0..]-> (eu:Location {name:'Europe'})
RETURN person.name`}</code></pre>

<p>
  The <code>()</code> unspecified vertex and <code>-[:WITHIN*0..]-></code> tells the database engine to find people whose <code>[:BORN_IN]</code> vertex is connected via <code>[:WITHIN]</code> egdes to the <code>Location</code> named <code>'United States'</code>. As is common in declarative languages, the implementation isn't specified-- the query optimizer might begin with a list of people and search <code>[:WITHIN]</code> edges looking for <code>'United States'</code> or start with <code>'United States'</code> and work backwards looking for people.
</p>

<p>
  You could model a graph in a relational database, using a table for vertices and another for edges, but this type of traversal, which may take a variable number steps along a path (expressed as 0 or more with the <code>*</code> in Cypher), would require a variable number of joins in SQL. Since SQL:1999 this has been possible using a feature called <i>recursive common table expressions</i>, using <code>WITH RECURSIVE</code>. However, implementing a query equivalent to the one above would be nightmarish.
</p>

<p>
  The <b>triple-store model</b>, exemplified by Datomic, AllegroGraph, and others, reduces data to simple three-part statements like (Jim, likes, bananas)-- (subject, predicate, object), where the value of the object can be like a value, and the predicate a key ((Lucy, age, 33)), or it can be another vertex in the graph: (Lucy, marriedTo, Alan). Triple-store data can be formatted to be nicely readable.
</p>

<p>
  The "semantic web" was a movement based on the idea that websites should publish machine-readable data about their information in a standardized format, creating an Internet-wide "database of everything". There's even an RFC for a spec called <i>Resource Description Framework (RDF)</i> for this. The Turtle language is a human-readable format for RDF data. Predicates in RDF triple-store data model can be URIs such as <code>{`<http://my-company.com/namespace#lives_in>`}</code> so it's possible to define your own meaning of "lives in".
</p>

<p>
  SPARQL ("sparkle") is a query language for triple-stores using the RDF data model. RDF doesn't distinguish between properties and edges, it just uses predicates for both.
</p>

<p>
  Datalog was an influential and extensively studied query language. It's the query language for Datomic, and Cascalog is a tool for using Datalog to query large datasets in Hadoop. Unlike Cypher triples are written in the format predicate(subject, object). It's also a subset of Prolog. Datalog is capable of a higher level of abstraction than SPARQL and Cypher, so although less convenient for single queries it can hold up better for large, complex data models.
</p>

<h2>Storage and retrieval</h2>

<blockquote>
  <i>On the most fundamental level, a database needs to do two things: when you give it some data, it should store the data, and when you ask it again later, it should give the data back to you.</i> - Martin Kleppmann
</blockquote>

<p>
  A <b>log</b> is an append-only sequence of records. Searching a log for something isn't great-- <math>O(n)</math> not great. Databases use auxiliary data structures to speed up things like search-- these data structures are called <b>indexes</b>. Adding and removing indexes doesn't affect the data in your system, just the performance of queries. Indexes tend to improve the performance of reads but slow down writes, so using them is a tradeoff.
</p>

<p>
  <b>Hash tables</b> are often used for indexing. If you're just appending to a log file, on insertion store the byte offset of the new value in a hash table, and on reads just lookup the byte offset in the hash table. This is essentially what Bitcast (the default storage engine in Riak) does. With this approach, every once in a while you'll need to perform <b>compaction</b> on your file-- throwing away duplicate or invalidated logs, keeping only the most recent update. You also can perform <b>merging</b>, merging multiple old log files while compaction them. Compaction and merging can happen in the background so as not to interfere with the system otherwise.
</p>

<p>
  There are some simple implementation considerations that complicate this otherwise simple schema-- you'll want to use a binary format for text, you need to use <b>tombstones</b> for deletions, if your system crashes and all your data was in-memory, recreating the hash tables from log files can be expensive, you need checksums to deal with crashes that occur halfway through a write, you need to work out concurrency. Furthermore, appending happens to have better performance for disk drives and SSDs, and simplify concurrency and crash recovery. Using hash tables as an index also has some drawbacks, namely the hash table must fit entirely in memory to perform well, and querying a range of keys (<code>kitty000</code> to <code>kitty999</code>) is inefficient.
</p>

<p>
  A <b>sorted string table (SSTable)</b> is like our log file, but where all key value pairs are sorted by key. This offers some nice properties:
</p>

<ol>
  <li>
    Merging segment files is quite efficient.
  </li>
  <li>
    Instead of indexing all keys, you can keep a sparse index of evenly spread out keys, and iterate: if you're searching for <code>handiwork</code> and your index has <code>handbag</code> and <code>handsome</code>, you can jump to <code>handbag</code> and search from there. This still requires an in-memory index, but it can be as sparse as one key per few kilobytes since the time to scan a kilbyte is small.
    <ul>
      <li>
        It's worth noting that binary search would eradicate the need for an in-memory index all together, but with variable length keys and values it's hard to tell where one key value pair ends and another begins.
      </li>
    </ul>
  </li>
  <li>
    You can group records into blocks and compress them before writing them to disk which saves disk space and reduces I/O bandwidth use.
  </li>
</ol>

<p>
  Maintaining a sorted structure is easier in memory than on disk, using red-black trees or AVL trees.
</p>

<ol>
  <li>
    When a write comes in, insert it to the in-memory balanced tree data structure, called a <b>memtable</b>.
  </li>
  <li>
    When the memtable hits a certain threshold, maybe a few megabytes, write it out to an SSTable file, which becomes the most recent segment. While it's being written, writes can go to a new memtable.
  </li>
  <li>
    For read requests, first check the key in the memtable, then the most recent segment, then the next most recent segment, and so on.
  </li>
  <li>
    Periodically run a merge and compaction process in the background.
  </li>
</ol>

<p>
  This works great, except if the system crashes, everything in the current memtable is lost. The way around this is to immeadiately write each write to an unsorted log on disk. This log can get deleted everytime the memtable is written to an SSTable file.
</p>

<p>
  This is essentially what LevelDB and RocksDB do, as well as storage engines in Cassandra and HBase. All of these were inspired by Google's BigTable paper, which is where the terms memtable and SSTable were introduced. Originally this indexing structure was described under the name <b>Log-Structured Merge-Tree (LSM-Tree)</b>. Storage engines based on this principle are often called LSM storage engines. Lucene uses a similar method for storing it's <i>term dictionary</i>, where it maps terms (words) to lists of IDs of all the documents containing that term.
</p>

<p>
  Many additional details go into making a storage engine perform well in practice. Trying to read for keys that aren't there can be expensive, since you potentially have to search many segments. This can be optimized with a <b>Bloom filter</b>. There are also two predominant strategies for how SSTables are compacted and merged-- <b>size-tiered</b> and <b>leveled</b> compaction. In size-tiered, newer and smaller SSTables are progressively merged into older and larger ones. In leveled compaction, the key range is split into smaller SSTables and the older data is moved to separate "levels" which allows compaction to proceed incrementally and use less disk space.
</p>

<p>
  The basic idea of LSM-trees, keeping a cascade of SSTables that are merged in the background, is simple and effective. Unlike the first hash-table-indexed log-based approach, this system works well for range queries, and has remarkably high write throughput.
</p>