### [Valid Anagram](https://leetcode.com/problems/valid-anagram/)

#### First thought
We can sort each string in O(*n* log *n*) time and O(1) space, then increment through each string step by step, checking each character is the same, which is O(*n*) time and O(1) space, so the total runtime is O(*n* log *n*) time and O(1) space.

Another approach would be to create a histogram-- 
1. create an array of one 0 for each lowercase letter,
2. walk through *s* incrementing the array element corresponding to that letter,
3. then walk through *t* decrementing each element,
4. and then walk through the array verifying all the elements are 0.

This would take O(*n*) time and O(1) space, so that's a little better.

```
var isAnagram = function(s, t) {
    if (!(s.length === t.length))
        return false;

    let freq = [...new Array(26)].map(_ => 0);
    
    function hash(letter) {
        return 'abcdefghijklmnopqrstuvwxyz'.indexOf(letter);
    }

    for (let i=0; i<s.length; i++) {
        freq[hash(s[i])]++;
        freq[hash(t[i])]--;
    }

    return freq.every(elem => elem === 0);
};
```
