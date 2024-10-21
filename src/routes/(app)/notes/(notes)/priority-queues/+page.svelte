<h1>Priority Queues</h1>

<p>
  A <b>priority queue</b> is a data structure for maintaining a set of key-value pairs ordered (max or min) by the value, supporting the operations:
</p>

<ul>
  <li><math>INSERT(S, k, v)</math>: inserts <math>k, v</math> into set <math>S</math></li>
  <li><math>MAXIMUM(S)</math>: returns pair from <math>S</math> with the largest value</li>
  <li><math>EXTRACT-MAX(S)</math>: returns and removes pair from <math>S</math> with the largest value</li>
  <li><math>INCREASE-VALUE(S, k, v)</math>: increases <math>k</math>'s value to <math>v</math>, which is assumed to be at least as big as <math>k</math>'s old value </li>
</ul>

<p>
  Heaps operate on numeric values stored in an array, so a schema must be worked out to map numeric values in a heap to meaningful objects in application code. An auxiliary hash table, for instance, can do achieve this adding only <math>O(1)</math> time overhead.
</p>