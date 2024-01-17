### Hash tables
Hash tables implement **insert**, **search** and **delete**. Hash tables beat direct addressing into an array when the number of keys is smaller than the possible key space, since the array index is computer with a **hash function** instead of just using the key itself. Collisions are handled via "chaining".

- *U* is the universe of possible keys
- *K* is the set of keys

A direct-address table of size |*U*| takes Θ(|*U*|) storage, whereas a hash table only takes Θ(|*K*|) storage, and **search** only takes O(1) time for both! Hashing uses a **hash function** *h* to compute the slot number from the key *k*, so that the element goes into slot *h(k)*. *h* maps the universe *U* of keys into slots of the **hash table** *T*: *h*: *U* → {0, 1, ..., *m*-1}, where *m* is the size of the hash table (much less than |*U*|). *k* **hashes** to slot *h(k)* and *h(k)* is the **hash value** of key *k*. The hash function reduces the range of array indices and thus the size of the array: *m* instead of |*U*|.

What if the hash function hashes two keys to the same slot? This is called a **collision**. You can minimize collisions with a well chosen hash function, but you can't completely avoid them. An **independent uniform hash function**, AKA a **random oracle**, is an "ideal" hash function where *h(k)* is a randomly and independently chosen uniformly from the range {1, ..., *m*-1}. 

Collision resolution can be achieved with **chaining**-- where each nonempty slot in points to a linked list, and all the elements that hash to that slot go in the linked list. With chaining, the worst-case runtime for **insertion** is O(1), assuming the element has not been inserted yet, otherwise, you need to **search** first.

#### Analysis of hashing with chaining
The **load factor** *α* for a hash table *T* with *m* slots storing *n* elements is *n/m*; the average number of elements stored in each chain. The worst-case performance of hashing is when all *n* keys hash to the same slot, created a linked list of length *n*, for which searching takes Θ(*n*) plus the time to compute the hash function-- no better than a linked list.

The average-case depends on how well *h* distributes the set of keys, but for now we assume is is independent and uniform. Thus the chance that two distinct keys collide is at most 1/*m*. With chaining, with these assumptions, an unsucessful search takes Θ(1 + *α*) on average. If the number of elements in the table is proportional the the number of slots, we have *n* = O(*m*), and so *α* = *n/m* = O(*m*)/*m* = O(1) **IF** there is uniformity (each key is equally likely to hash to any slot) and independence (the probability of any two keys colliding is 1/*m*).

#### Conclusion
**Insert**, **search** and **delete** for hash tables take O(1) time average-case and O(*n*) time worse-case, and O(*n*) space.
