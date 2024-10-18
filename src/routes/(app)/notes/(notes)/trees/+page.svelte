<h1>
  Trees
</h1>

<p>A <b>tree</b> is a type of graph.</p>

<p>Each node has a <code>value</code>.</p>

<p>In a <b>binary tree</b>, each node has two children (traditionally <code>left</code> and <code>right</code>) and one parent.</p>

<p>There is a scheme for representing trees with arbitrary numbers of children using only <math>O(n)</math> space. Each node contains 
  <ul>
    <li>a pointer pointing to it's parent,</li>
    <li>a pointer pointing to it's left-most child, and</li>
    <li>a pointer pointing to it's sibling immeadiately to the right.</li>
  </ul>