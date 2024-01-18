### [Group Anagrams](https://leetcode.com/problems/group-anagrams)

This is a hashing problem! First off, two words can't be an anagram if they are different lengths.

Brute force: create a new array where all the strings are sorted, insert each sorted string into a hash table, where the key is the string and the value is that string's index from the array of sorted strings:
```
['sam','mas','crap','dog','god'] -> ['ams', 'ams', 'acpr'. 'dgo', 'dgo'] -> ['ams': [0, 1], 'acpr': [2], 'dgo': [3, 4]]
```
Iterate over the slots of the hash and construct the new array of arrays.

This doesn't look too bad time-wise. Sorting each string is worst-case O(100 log 100), or O(1), so sorting *n* strings is O(*n*). Inserting the *n* sorted strings into the hash table is also O(*n*): each insertion is O(1) for *n* insertions. Iterating over the hash table to construct the new array shouldn't be bad too, I think: worst-case, each string is unique, so we iterate over *n* slots, at each slot we retrieve the value (hash **search**, O(1)), and copy the word at that index from the original `strs` array to the new output array of arrays, which is constant time O(1), so I think that it is O(*n*).

```
var groupAnagrams = function(strs) {
    let hash = new Map();

    for (let i=0; i<strs.length; i++) {
        let sorted = strs[i].split("").sort().join("");
        let curr = hash.get(sorted);
        if (!curr) {
            hash.set(sorted, [i]);
        } else {
            hash.set(sorted, curr.concat(i));
        }
    }

    return [...hash.values()].map(indices => indices.map(index => strs[index]));
};```
Accepted!
