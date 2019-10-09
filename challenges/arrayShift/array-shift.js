function arrayShift(arr, num) {
  const length = arr.length;
  for(let i = 0; i < length; i++) {
    arr[length - i] = arr[length - 1 - i];
  }
  arr[0] = num;
  return arr;
}

module.exports = {
  arrayShift
};