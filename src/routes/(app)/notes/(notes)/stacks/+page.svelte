<script>
  import { highlightCCode } from '$lib/utils.js';
  highlightCCode();
</script>

<h1>Stacks</h1>

<p>
  <b>Stacks</b> are dynamic sets whose <code>delete</code> operation removes the most recently inserted element: stacks are <b>last-in, first out (LIFO)</b>.
</p>

<p>
  Stacks get their name (and or inspiration) from spring-loaded stacks of plates found in cafeterias.
</p>

<p>
  Stacks have a <code>top</code> attribute, which is the index of the most recently inserted element, and a <code>size</code> attribute, which specifies the maximum size of the underlying array. When <code>top</code> equals zero the stack is empty.
</p>

<pre><code>{@html `struct Stack {
  int size, top;
  int array[STACK_SIZE];
};

bool stack_empty(struct Stack s) {
  return (s.top == 0); 
}

int push(struct Stack s, int x) {
  if (s.top == s.size)
    return 0;
  else {
    s.array[++s.top] = x;
    return 1;
  }
}

int pop(struct Stack s) {
  if (stack_empty(s))
    return 0; // Or otherwise signal an error
  else
    return s.array[s.top--];
}`}</code></pre>