<script>
  import { highlightCCode } from '$lib/utils.js';
  highlightCCode();
</script>

<h1>Priority Queues</h1>

<p>
  A <b>priority queue</b> is a data structure for maintaining a set of elements, each with an associated value called a <b>key</b>. Like heaps, they have two variants, <math>min</math> and <math>max</math>. A max-priority queue supports the following operations:
</p>

<ul>
  <li><math>INSERT(S, x, k)</math>: inserts the element <math>x</math> with key <math>k</math> into <math>S</math></li>
  <li><math>MAXIMUM(S)</math>: returns the element from <math>S</math> with the largest key</li>
  <li><math>EXTRACT-MAX(S)</math>: returns and removes the element from <math>S</math> with the largest key</li>
  <li><math>INCREASE-KEY(S, x, k)</math>: increases the value of <math>x</math>'s key to <math>k</math> (assumes <math>x</math>'s previous key was less than or equal to <math>k</math>)</li>
</ul>

<p>
  Whereas a min-priority queue would have equivalent <math>INSERT</math>, <math>MINIMUM</math>, <math>EXTRACT-MIN</math> and <math>DECREASE-KEY</math> functions.
</p>

<p>
  Heaps are often used in applications, but require some sort of translation schema to map array indices to application objects. This is often accomplished with a <b>handle</b>: auxiliary information stored in the heap elements and / or application object that provide enough information to complete the mapping. For example, the handle in the application object might only contain the heap index, and only be accessed by the priority queue code, and the heap keys might contain pointers to their corresponding application objects. But since heap array indices change throughout their lifespan, the heap implementation must update the application objects whenever it swaps the position of heap elements-- typically this overhead is <math>O(n)</math>, worst-case.
</p>

<p>
  An alternative would be to maintain an extra external data structure (like hash table) capable of mapping heap elements to application code objects. This way, application objects need to embellishment. IF the mapping is inefficient, however, this could add significant overhead.
</p>

<pre><code>{`int max_heap_maximum(Heap h) {
  if (h.size < 1)
    return -1; // heap underflow
  return h.array[0];
}

int max_heap_extract_max(Heap h) {
  int max = max_heap_maximum(h);
  heap.array[0] = heap.array[heap.size--];
  max_heapify(h, 0);
  return max;
}

void max_heap_increase_key(Heap h, int x, int k) {
  if (h.array[k] < x) {
    h.error = PQ_KEY_TOO_SMALL;
  } else {
    h.array[x] = k;

    for (
      int i = x;
      i < 0 && h.array[parent(i)] < h.array[i];
      i = parent(i)
    ) {
      int tmp = h.array[i];
      h.array[i] = h.array[parent(i)];
      h.array[parent(i)] = tmp;
    }
  }
}

void max_heap_insert(Heap h, int x, int k) {
  if (h.size == HEAP_MAX) {
    h.error = HEAP_OVERFLOW;
  } else {
    h.size++;
  h.array[h.size] = k;
  max_heap_increase_key(h, x, k);

  }
}`}</code></pre>

<p>
  TODO: this code is bad. I need to reflect more deeply about how priority queues work, and then probably just make them their own <code>struct</code>. Also actually deciding the best error-handling strategy for <code>Heap</code> would probably go a long way.
</p>