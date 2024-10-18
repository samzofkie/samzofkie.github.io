<h1>
  Linked lists
</h1>

<p>
  Unlike a contiguous block of memory, order in <b>linked lists</b> is determined by a pointer in each object.
</p>
<p>
  The <b>head</b> of a linked list is the first node, and it's <b>tail</b> is the last node.
</p>
<p>
  Searching a linked list is <math>O(n)</math> in the worst-case.
</p>
<p>
  Inserting a node before the current head, or at any specific place if you have a pointer to that specific place, is <math>O(1)</math>.
</p>
<p>
  Deleteing a node takes <math>O(1)</math> time if you have a pointer to that node (otherwise search is <math>O(n)</math>). Also, deletion is <math>O(1)</math> in a doubly linked list, whereas it's <math>O(n)</math> in the worst case for a singly linked list.
</p>
<p>
  Insertion and deletion are faster for linked lists than for arrays, but finding the <math>k<sup>th</sup></math> element in an array would be <math>O(n)</math> time in an array whereas it would be <math>O(k)</math> time in a linked list.
</p>
<p>
  A <b>sentinel</b> is a dummy object that simplified boundary conditions. The sentinel represents <code>NIL</code> but has the attributes of a node (<code>next</code>, <code>key</code>, <code>prev</code> if doubly linked). Using sentinels doesn't change the asymptotic run time of linked list operations, but can decrease the constant factor.
</p>

<h2>C</h2>

<pre><code>{@html `struct Node {
  int value;
  struct Node* prev;
  struct Node* next;
}

// Search head for v
struct Node* list_search(struct Node* head, int v) {
  struct Node* i = head;
  while (i && i->key != v)
    i = i.next;
  return i;
}

// Prepend x to the head
void list_prepend(struct Node* head, struct Node* x) {
  x->next = head;
  x->prev = NULL;
  if (head)
    head->prev = x;
  head = x;
}

// Insert x after y
  void list_insert(struct Node* x, struct Node* y) {
  x->next = y->next;
  x->prev = y;
  if (y->next)
    y->next->prev = x;
  y->next = x;
}

void list_delete(struct Node* head, struct Node* x) {
  if (x->prev)
    x->prev->next = x->next;
  else
    head = x->next;
  if (x->next)
    x->next->prev = x->prev;
}`}</code></pre>