<script>
  import { highlightCCode } from '$lib/utils.js';
  highlightCCode();
</script>

<h1>Quicksort</h1>

<p>
  <b>Quicksort</b>, developed by Tony Hoare in 1959, has a worst-case run time of <math>O(n<sup>2</sup>)</math>, but is still often the best choice of sorting algorithm because it's remarkably efficient on average. It's expected run time is <math>O(n log n)</math>, the constants hidden in big-<math>O</math> notation are small, and it sorts in-place (unlike merge sort).
</p>

<p>
  Similarly to merge sort, quicksort's approach could be characterized as a divide-and-conquer one:
</p>

<ol>
  <li>
    Partition the array into two (possibly empty) subarrays like this:
    <ol>
      <li>
        Pick a <b>pivot</b> index
      </li>
      <li>
        Iterate over the array, swapping array elements that are smaller than the pivot into the low section, using a variable to track the size of the low section
      </li>
      <li>
        After iterating over the whole array, put the pivot in between the low sub array and the high subarray
      </li>
    </ol>
  </li>
  <li>
    Recursively sort the two subarrays
  </li>
</ol>

<pre><code>{`int partition(int *A, int p, int r) {
  int x = A[r], i = p - 1;
  for (int j=p; j<r; j++)
    if (A[j] <= x)
      swap(&A[++i], &A[j]);
  swap(&A[i+1], &A[r]);
  return i+1;
}

void quicksort(int *A, int p, int r) {
  if (p < r) {
    int q = partition(A, p, r);
    quicksort(A, p, q-1);
    quicksort(A, q+1, r);
  }
}`}</code></pre>