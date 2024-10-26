import{s as E,n as f}from"../chunks/scheduler.Cs0xm5t1.js";import{S as k,i as x,e as h,s as d,t as R,c as u,k as A,f as v,a as j,b as C,d as i,g as l,h as q}from"../chunks/index.Cky_bo-2.js";import{h as M}from"../chunks/utils.BJnaAM-2.js";function S(p){let e,b="Merge Sort",_,a,m="<b>Merge sort</b> follows the <b>divide-and-conquer</b> method: it works by dividing an array into two smaller sub-arrays, (recursively) sorting each of those, and then <i>merging</i> them back together to form the full-length sorted array.",o,s,n,y=`void merge(int *A, int p, int q, int r) {
  int left_subarray_length = q - p + 1;
  int right_subarray_length = r - q;
  int left_subarray[MERGE_SORT_ARRAY_MAX_SIZE];
  int right_subarray[MERGE_SORT_ARRAY_MAX_SIZE];

  for (int i=0; i<left_subarray_length; i++)
    left_subarray[i] = A[p+i];
  for (int j=0; j<right_subarray_length; j++)
    right_subarray[j] = A[q+j+1];

int i = 0, j = 0, k = p;
  for (;
    i < left_subarray_length &&
    j < right_subarray_length;
    k++
  )
    if (left_subarray[i] <= right_subarray[j])
      A[k] = left_subarray[i++];
    else
      A[k] = right_subarray[j++];

  while (i < left_subarray_length)
    A[k++] = left_subarray[i++];
  
  while (j < right_subarray_length)
    A[k++] = right_subarray[j++];
}

void merge_sort(int *A, int p, int r) {
  if (p < r)
    return;

  int q = (p + r) / 2;
  merge_sort(A, p, q);
  merge_sort(A, q+1, r);
  merge(A, p, q, r);
}`,g;return{c(){e=h("h1"),e.textContent=b,_=d(),a=h("p"),a.innerHTML=m,o=d(),s=h("pre"),n=h("code"),g=R(y)},l(t){e=u(t,"H1",{"data-svelte-h":!0}),A(e)!=="svelte-1seuv4o"&&(e.textContent=b),_=v(t),a=u(t,"P",{"data-svelte-h":!0}),A(a)!=="svelte-zu1gla"&&(a.innerHTML=m),o=v(t),s=u(t,"PRE",{});var r=j(s);n=u(r,"CODE",{});var c=j(n);g=C(c,y),c.forEach(i),r.forEach(i)},m(t,r){l(t,e,r),l(t,_,r),l(t,a,r),l(t,o,r),l(t,s,r),q(s,n),q(n,g)},p:f,i:f,o:f,d(t){t&&(i(e),i(_),i(a),i(o),i(s))}}}function w(p){return M(),[]}class P extends k{constructor(e){super(),x(this,e,w,S,E,{})}}export{P as component};
