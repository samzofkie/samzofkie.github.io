<style>
  math {
    font-style: italic;
  }
</style>

<h1>
  Dynamic Arrays
</h1>

<p>
  Many languages have <b>dynamic arrays</b>, arrays that automatically resize, typically doubling whenever the array becomes full. Like static arrays, access is still <math>O(1)</math>, but doubling takes <math>O(n)</math>.
</p>

<p>
  Doubling is rare enough that insertion (amortized) is still <math>O(n)</math>. The logic goes like this: if you have an array of <math>n</math> elements, the most recent time the array doubled, <math>n/2</math> elements were copied, the second most recent time, <math>n/4</math> elements were copied, the third most recent time, <math>n/8</math> elements were copied, and so on. So for <math>n</math> total insertions, the total number of elements that have been copied is <math>n/2 + n/4 + n/8 + ... 4 + 2 + 1</math>, which is less than <math>n</math>.
</p>

<p>
  So on average, insertion is <math>O(n)</math>-- however, <i>worst-case</i> insertion is <math>O(n)</math>.
</p>