function arrayReverse(arr) {
  const newArr = [];
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    newArr[length - i - 1] = arr[i];
  }
  return newArr;
}

console.log(arrayReverse([1, 2, 3]));