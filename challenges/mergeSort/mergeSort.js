function mergeSort(arr) {
  const n = arr.length;
  let mid;
  let sortedArr;
  if(n > 1) {
    mid = Math.floor(n / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, n);
    mergeSort(left);
    mergeSort(right);
    sortedArr = merge(left, right, arr);
  }
  return sortedArr;
}

function merge(left, right, arr) {
  let k = 0;
  while(left.length && right.length) {
    if(left[0] <= right[0]) {
      arr[k] = left.shift();
    } else {
      arr[k] = right.shift();
    }
    k++;
  }
  
  if(left.length) {
    while(left.length) {
      arr[k] = left.shift();
      k++;
    }
  } 
  if(right.length) {
    while(right.length) {
      arr[k] = right.shift();
      k++;
    }
  }

  return arr;
}

module.exports = {
  mergeSort
};
