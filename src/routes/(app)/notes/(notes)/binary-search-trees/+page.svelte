<h1>
  Binary Search Trees
</h1>

<p>Basic operations for a <b>complete</b> <b>binary search tree</b> take <math>O(log n)</math> time, worst-case: however, if the tree is just a chain of nodes (effectively a linked list), the same basic operations take <math>O(n)</math> time worst-case.</p>

<p>
  Nodes in a BST have four properties:
</p>
<pre><code>{@html `struct Node {
  struct Node* parent;
  struct Node* left;
  struct Node* right;
  int key;
};`}</code></pre>

<p>
  The keys of a binary search tree are always stored in a way that satisfies the <b>binary-search-tree property</b>:
</p>

<blockquote>
  Let <math>x</math> be a node in a binary search tree. If <math>y</math> is a node in the left subtree of <math>x</math>, then <math>y.key &le; x.key</math>. If <math>y</math> is a node in the right subtree of <math>x</math>, then <math>y.key &ge; x.key</math>.
</blockquote>

<p>
  Because of this property, you can print all the keys in order with a recursive algorithm called <b>inorder tree walk</b>.
</p>

<h2>Querying</h2>

<p>
  Querying a binary search tree for the minimum, maximum, or a specific key takes <math>O(h)</math> time, where <math>h</math> is the height of the tree:
</p>

<pre><code>{@html `struct Node* tree_search(struct Node* root, int k) {
  if (!root || root-&gt;key == k)
    return root;
  else if (k &lt; root-&gt;key)
    return tree_search(root-&gt;left, k);
  else
    return tree_search(root-&gt;right, k);
}`}</code></pre>

<p>
  An iterative version of this algorithm will probably run faster on most computers.
</p>

<p>
  Finding the minimum or maximum is as simple as following the root down it's <code>left</code> or <code>right</code> pointers until the next one is <code>NULL</code>:
</p>

<pre><code>{@html `struct Node* tree_minimum(struct Node* root) {
  while (root-&gt;left)
    root = root-&gt;left;
  return root;        
}

struct Node* tree_maximum(struct Node* root) {
  while (root-&gt;right)
    root = root-&gt;right;
  return root;
}`}</code></pre>

<p>
  The <b>successor</b> of a node is next node visited after it in an inorder tree traversal; the <b>predecessor</b> would be the node visit right <i>before</i> it in an inorder tree traversal.
</p>

<p>
  The algorithm for finding the predecessor (or successor) of a node isn't completely trivial. Given a node <math>x</math>, there are two main cases to consider:
</p>

<ol>
  <li>
    If the left subtree is nonempty, then the predecessor is the rightmost node in the left subtree.
  </li>
  <li>
    If the left subtree is empty, then the predecessor will be the <u>lowest ancestor of <math>x</math> whose left child is also an ancestor of <math>x</math></u> (this is worth drawing out).
  </li>
</ol>

<h2>Insertion and deletion</h2>

<p>
  Insertion begins at the root of the tree and walks downward, looking for a <code>NULL</code> child to insert it's node at. It uses a <b>trailing pointer</b> (in this implementation, <code>y</code>) to keep track of the parent:
</p>

<pre><code>{@html `void tree_insert(struct Tree* tree, struct Node* z) {
  struct Node* x = tree->root;
  struct Node* y = NULL;

  while (x) {
    y = x;
    if (z-&gt;key &lt; x-&gt;key)
      x = x-&gt;left;
    else
      x = x-&gt;right;
  }

  z-&gt;parent = y;
  
  if (!y) // tree was empty
    tree->root = z;
  else if (z->key &lt; y->key)
    y->left = z;
  else
    y->right = z;
}`}</code></pre>

<p>
  Deleting a node <math>z</math> from a tree <math>T</math> is solidly trickier than insertion, but it nicely divides into three situations:
</p>
<ol>
  <li>
    If <math>z</math> has no children, just make its parents pointer to it <code>NULL</code>.
  </li>
  <li>
    If <math>z</math> has one child, promote that child to take its place (make <math>z</math>'s parent point to <math>z</math>'s child, and make its child point to its parent).
  </li>
  <li>
    If <math>z</math> has two children,
  </li>
</ol>