<style>
  math {
    font-style: italic;
  }
</style>

<h1>
  Graphs
</h1>

<p>
  <b>Graphs</b> are collections of nodes with <b>edges</b> connecting them. In a <b>directed</b> graph, the edges have directions (like an edge might go from <math>a</math> to <math>b</math> but not from <math>b</math> to <math>a</math>), and in an <b>undirected</b> graph, they don't (an edge connecting <math>a</math> to <math>b</math> also connects <math>b</math> to <math>a</math>).
</p>

<p>
  Graphs are called <b>connected</b> if there is a path of edges connecting all nodes. A directed graph with no cycles (no directed paths that can lead in a circle) is called <b>acyclic</b>. A graph is <b>weighted</b> if each edge has an associated weight.
</p>

<p>
  There are two main ways to represent a graph programmatically.
</p>

<h2>Adjacency-list representation</h2>

<p>
  For a graph <math>G = (V, E)</math>, an <b>adjacency-list representation</b> starts with an array of <math>|V|</math> pointers,
  where <math>|V|</math> is the number of vertices in the graph. Each pointer in the array points to a linked list, where each node in the linked list specifies another vertex in the graph. The presence (or absence) of a node indicates an edge from the node whose <b>adjacency list</b> list it is to the vertex specified by the node.
</p>

<p>
  For example, in the <math>u<sup>th</sup></math> spot in the array corresponds to the edges leaving the vertex <math>u</math>. In <math>u</math>'s adjacency list, the presence of a node with the value <math>v</math> indicates that in our graph, there is an edge from <math>u</math> to <math>v</math>.
</p>

<p>
  For directed graphs, a <math>v</math> node in <math>u</math>'s adjacency list specifies an edge from <math>u</math> to <math>v</math>, which doesn't imply an edge from <math>v</math> to <math>u</math>.
</p>

<p>
  This adjacency-list schema uses <math>O(V + E)</math> memory, where <math>V</math> is the number of vertices and <math>E</math> is the number of edges: an array of <math>V</math> elements and then <math>E</math> total linked list nodes. Iterating over each edge takes <math>O(V + E)</math> time, for the same reason, although since worst-case, there are asymptotically more edges than nodes (in a fully connected graph (the worst-case), there are <math><sup>n(n-1)</sup>&frasl;<sub>2</sub></math> edges for <math>n</math> nodes), we can just say iterating over each node is <math>O(E)</math>.
</p>

<h2>Adjacency-matrix representation</h2>

<p>
  The <b>adjacency-matrix representation</b> for a graph <math>G = (V, E)</math> uses a <math>|V| × |V|</math> matrix <math>A</math> where
</p>

<blockquote>
  <math>a<sub>i, j</sub> = 1 if (i, j) &isin; E, otherwise 0</math>
</blockquote>

<p>This approach requires <math>O(V<sup>2</sup>)</math> memory, but is irrespective of the number of edges in the graph. Iterating over each edge takes <math>O(V<sup>2</sup>)</math> time.</p>

<h2>Comparison</h2>

<p>
  Generally, the adjacency-list approach is better for sparsely connected graphs; where <math>|E| &lt; |V|<sup>2</sup></math>, and the adjacency-matrix approach is better for densely connected graphs where <math>|E|</math> approaches <math>|V|<sup>2</sup></math>. Also, in the adjacency-list approach, looking for the presence of an edge requires indexing into the array and then searching the linked list (worst case <math>O(E)</math>), whereas the adjacency-matrix approach takes constant time for edge lookup.
</p>