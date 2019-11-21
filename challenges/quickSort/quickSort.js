function quickSort(arr) {
  let j = arr.length - 1;
  let i = 0;
  let pivot = arr[j];
  while(j >= i) {
    // console.log('arr: ', arr, 'j: ', j, 'i: ', i);
    if(pivot >= arr[i]) i++;
    else {
      arr[j] = arr[i];
      arr[i] = arr[j - 1];
      arr[j - 1] = pivot;
      j--;
    }
  }
  return [arr, j];
}

function partition(arr) {
  console.log('incoming arr to partition: ', arr);
  const [sortedArr, pivotIndex] = quickSort(arr);
  console.log('sortedArr: ', sortedArr);
  console.log('pivotIndex: ', pivotIndex);
  if(sortedArr.length < 2) return sortedArr;

  let left = sortedArr.slice(0, pivotIndex);
  console.log('left: ', left);
  let right = sortedArr.slice(pivotIndex + 1, sortedArr.length);
  console.log('right: ', right);

  let sortedLeft = partition(left);
  console.log('sortedLeft: ', sortedLeft);
  let sortedRight = partition(right);
  console.log('sortedRight: ', sortedRight);

  return ([...sortedLeft, sortedArr[pivotIndex], ...sortedRight]);

}

module.exports = {
  partition
};
