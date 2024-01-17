### [Two Sum](https://leetcode.com/problems/two-sum/)

#### Brute force
Trying every single combination (
```
for (let i=0; i<nums.length; i++)
  for (let j=0; j<nums.length; j++)
    if (i !=== j && nums[i] + nums[j] === target)
      return [i, j];
```
) would be O(*n*<sup>2</sup>) time and O(1) space.

We could sort `nums` (O(*n* log *n*) time, O(1) space) and then walk through, with `i` starting at `0` and incrementing and `j` starting at `nums.length-1` and decrementing (O(*n*) time O(1) space), which would be O(*n* log *n*) time and O(1) space. But does this work, how can you guarantee to find an answer and how can you tell which (*i* or *j*) to increment or decrement?
```
nums = [0,1,2,3]
target = 4
```
increment *i* first
```
nums = [0,1,2,3]
target = 5
```
increment *i* twice

Maybe we start *i* and *j* in the middle of the array, and then if their sum is smaller than target, increment the larger, and if their sum is larger decrement the smaller:
```
nums = [0,1,2,3,4,5]
target = 9
i=2, j=3
2+3 < 9
i=2, j=4
2+4 < 9
2+5 < 9
3+5 < 9
4+5 == 9
```
This ain't it
```
nums = [0,2,4,7,8,10]
target = 15
i=2 j=3 4+7 < 15
i=2 j=4 4+8 < 15
i=2 j=5 4+10 < 15
i=3 j=5 7+10 < 15
```
Ok wait no actually what about
```
let i = 0;
let j = 1;
while (i < nums.length - 1) {
  while (j < nums.length && nums[i] + nums[j] < target)
    j++;
  if (nums[i] + nums[j] === target)
    return [i,j]
  i++;
  j=i+1;
}
```
If there is definetly a solution in `nums`, my first impression is that this would work-- rq what is the runtime? first `while` could run up to `nums.length-1` times, second `while` could run `nums.length-1` times as well, so O(*n*<sup>2</sup>) worst-case.

What if *j* started at `nums.length-1` and worked down though?
```
let i = 0;
let j = nums.length-1;
while (i < nums.length - 1) {
  while (j > i && nums[i] + nums[j] > target)
    j--;
  if (nums[i] + nums[j] === target)
    return [i,j]
  i++;
  j=nums.length-1;
}
```
```
nums = [0,2,4,7,8,10]
target = 11
i=0 j=5 0+10 < 11
i=1 j=5 2+10 > 11
i=1 j=4 2+8 < 11
i=2 j=5 4+10 > 11
i=2 j=4 4+8 > 11
i=2 j=3 4+7 = 11
```
What would the worst-case input look like for this? The nice thing about this approach is that it will quit once *j* gets too small to be viable, and increment *i* instead. I can't think of an input where this would be incorrect. What about the performance of
```
nums = [1,7,7,7,7,...,7,8,9]
target = 15
i=0 j=n 1+9 < 15
i=1 j=n 7+9 > 15
i=1 j=n-1 7+8 = 15
```
Conversely 
```
nums = [1,2,7,7,7,7,...,7,8]
target = 3
i=0 j=n 1+8 > 3
i=0 j=n-1 1+7 > 3
i=0 j=n-1
...
i=0 j=1 1+2 = 3
```
That is still O(*n*), but what about
```
nums = [1,2,3,7,7,7,7,...,7,8]
target = 5
```
That will run something like 2*n* times, but that's still O(*n*).

What about negative numbers? Does this all work for negative numbers? Oh well if it doesn't I can just increment them all to be above 0 and then adjust afterwards. Also since we gotta return the indexes relative the original we'll need the sorted array to be a copy, and then look up the indexes after we've found the values, but that is O(*n*) so nbd. I would wager this works and is O(*n* log *n*) time and O(*n*) space.

Ok just watch the solution video looks like using a hash table was the way to go! Another day another dollar yo
