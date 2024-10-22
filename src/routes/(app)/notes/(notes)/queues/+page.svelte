<script>
  import { highlightCCode } from '$lib/utils.js';
  highlightCCode();
</script>

<h1>Queues</h1>

<p>
  <b>Queues</b> are dynamic sets whose <code>delete</code> operation implements a <b>first-in, last-out (FILO)</b> policy. Adding to a queue is to <b>enqueue</b> and removing is to <b>dequeue</b>. Like linked lists, queues have a <b>head</b> and a <b>tail</b>. Enqueues always add to the tail and dequeues always take from the head. Enqueuing and dequeuing both take <math>O(n)</math> time.
</p>

<p>
  The queue will wrap around over time:
</p>

<pre><code>{@html `struct Queue {
  int head, tail, size;
  int array[QUEUE_SIZE];
}

bool enqueue(struct Queue q, int x) {
  if (q.tail == q.head-1)
    return false; // this is an overflow
  else {
    q.array[++q.tail] = x;
    return true;
  }
}

int dequeue(struct Queue q) {
  if (q.head == q.tail)
    return 0; // this is an underflow
  else
    return q.array[q.tail--];
}
`}</code></pre>