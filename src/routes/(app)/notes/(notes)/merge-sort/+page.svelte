<script>
  import { highlightCCode } from '$lib/utils.js';
  highlightCCode();
</script>

<h1>Merge Sort</h1>

<p>
  <b>Merge sort</b> follows the <b>divide-and-conquer</b> method: it works by dividing an array into two smaller sub-arrays, (recursively) sorting each of those, and then <i>merging</i> them back together to form the full-length sorted array.
</p>

<pre><code>{`void merge(int *A, int p, int q, int r) {
  int left_subarray_length = q - p + 1;
  int right_subarray_length = r - q;
  int left_subarray[MERGE_SORT_ARRAY_MAX_SIZE];
  int right_subarray[MERGE_SORT_ARRAY_MAX_SIZE];

  for (int i=0; i<left_subarray_length; i++)
    left_subarray[i] = A[p+i];
  for (int j=0; j<right_subarray_length; j++)
    right_subarray[j] = A[q+j+1];

int i = 0, j = 0, k = p;
  for (;
    i < left_subarray_length &&
    j < right_subarray_length;
    k++
  )
    if (left_subarray[i] <= right_subarray[j])
      A[k] = left_subarray[i++];
    else
      A[k] = right_subarray[j++];

  while (i < left_subarray_length)
    A[k++] = left_subarray[i++];
  
  while (j < right_subarray_length)
    A[k++] = right_subarray[j++];
}

void merge_sort(int *A, int p, int r) {
  if (p < r)
    return;

  int q = (p + r) / 2;
  merge_sort(A, p, q);
  merge_sort(A, q+1, r);
  merge(A, p, q, r);
}`}</code></pre>