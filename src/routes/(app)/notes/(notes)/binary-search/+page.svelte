<h1>Binary Search</h1>

<p>
  <b>Binary search</b> is a simple algorithm for finding an element in a sorted array in <math>O(log n)</math> time, where <math>n</math> is the length of the array. The approach is as simple as this: check the value of the midpoint of the array. If it's value
</p>

<ol>
  <li>
    Check the value of the midpoint element of the array.
  </li>
  <li>
    If it's value is greater than the value of the element we're looking for, we now know which half of the array the value will be in.
  </li>
  <li>
    Access the value of the midpoint element of that half of the array.
  </li>
  <li>
    If it's value is greater than the value of the element we're looking for, we now know whic quadrant of the array the value will be in.
  </li>
  <li>
    Access the value of the midpoint element of that quadrant of the array.
  </li>
  <li>
    And so on and so forth until the element is found.
  </li>
</ol>