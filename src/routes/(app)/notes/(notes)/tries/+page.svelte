<h1>
  Tries
</h1>

<p>
  A <b>trie</b> is a variant of a <math>n</math>-ary tree where characters are stored at each node, and each path down the tree can represent a word:
</p>

<img alt="A diagram of a trie from Cracking The Coding Interview." src="/trie.png"/>

<p>
  The <math>*</math> nodes represent the fact that all letters leading up to that node in the trie form a valid word-- for example, in this case, <code>MANY</code> is a valid word.
</p>

<p>
  In interview questions, tries are very often used to store the entire English language for quick prefix lookups. A hash table can do quick lookups to tell us if a word is valid in a certain language, but not for prefixes of a word-- a trie can do this well.
</p>

<p>
  A trie can lookup if a string is a valid word of prefix in <math>O(k)</math> time, where <math>k</math> is the length of the string (this is the same performance as a hash table, since although lookup is constant time in a hash table, reading all the characters of a string is <math>O(k)</math>).
</p>

<p>
  Remember tries for problems involving lists of valid words.
</p>