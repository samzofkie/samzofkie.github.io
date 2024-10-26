<script>
  import { highlightCCode } from '$lib/utils.js';
  highlightCCode();
</script>

<h1>Hash tables</h1>

<p>
  <b>Hash tables</b> implement a dynamic set of kev-value pairs that support the operations <math>INSERT</math>, <math>SEARCH</math> and <math>DELETE</math> extremely efficiently-- <math>O(1)</math> on average. A hash tables is an array of <b>slots</b>, where each slot points to the head of a linked list, where specific key-value pairs are stored as nodes. Insertion is done by using a <b>hash function</b> that converts the key into a slot number, which dictates which linked list to insert the pair to. A hash function must map a universe of all possible keys into a slot number.
</p>