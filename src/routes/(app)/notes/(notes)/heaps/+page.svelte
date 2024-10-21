<style>
  math {
    font-style: italic;
  }
</style>

<h1>Heaps</h1>

<p>
  A <b>heap</b> is an array that is interpreted as a nearly complete binary tree: for a heap <math>H</math>, <math>H[0]</math> is the root of tree, <math>H[1]</math> is the left child of root, <math>H[2]</math> is the right child of the root, <math>H[3]</math> is the left child of the left child of the root, and so on and so forth for the size of the array.
</p>

<p>
  Heaps have a <b>heap property</b>: in a <b>max-heap</b>, the property is that for every node <math>i</math> other than the root,
</p>

<blockquote>
  <math>H[PARENT(i)] &ge; H[i]</math>
</blockquote>

<p>
  aka the value of any node is at most the value of it's parent. A <b>min-heap</b> is the reverse.
</p>

<p>
  The <b>height</b> of a heap is the height of the binary tree the heap represents. For an array of <math>n</math> elements, a heap's height is <math>O(log n)</math>.
</p>

<pre><code>{@html `struct Heap {
  int size;
  int array[HEAP_SIZE];
}

int parent(int i) {
  return i / 2;
}

int left(int i) {
  return 2 * i;
}

int right(int i) {
  return 2 * i + 1
}`}</code></pre>

<p>
  A <b>heapify</b> algorithm maintains a heap's heap property. It's called with a heap and an index to start at, and assumes that the sub-heaps to the left and right of the index maintain the heap propery, but that <math>H[i]</math> might not. Here's <code>max_heapify</code>:
</p>

<pre><code>{@html `void max_heapify(struct Heap h, int i) {
  int left = left(i);
  int right = right(i);
  int largest = -1;
  if (left &lt; heap.size + 1 &&
      heap.array[left] &gt; heap.array[i])
    largest = left;
  else
    largest = i;
  if (right &lt; heap.size + 1 &&
      h.array[right] &gt; h.array[largest])
    largest = right;
  if (largest != i) {
    int temp = heap.array[i];
    heap.array[i] = heap.array[largest];
    heap.array[largest] = temp;
    max_heapify(h, largest);
  }
}`}</code></pre>

<p>
  The runtime of <code>max_heapify</code> is <math>O(log n)</math> or <math>O(h)</math> (for height <math>h</math>), and the proof is complicated enough I'm not going to get into it here.
</p>

<p>
  We can convert an array of <math>n</math> elements into a max-heap with <code>build_max_heap</code>:
</p>

<pre><code>{@html `void build_max_heap(struct Heap h, int n) {
  h.size = n;
  for (int i = h.size / 2; i > 0; i--)
    max_heapify(h, i);
}`}</code></pre>

<p>
  The elements in the array from <math>(n/2) + 1</math> to <math>n</math> are all leaves, which are essentially 1-element heaps already. <code>build_max_heap</code> actually takes <math>O(n)</math>, the proof for which is complicated enough that I'm not going to get into it here.
</p>