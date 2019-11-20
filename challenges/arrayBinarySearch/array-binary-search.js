function binarySearch(arr, num) {
  let index = -1;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === num) {
      index = i;
    }
  }
  return index;
}

module.exports = {
  binarySearch
};