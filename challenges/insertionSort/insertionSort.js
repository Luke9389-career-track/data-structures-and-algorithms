function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];
    while(j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = temp;
  } 
  return arr;
}

module.exports = {
  insertionSort
};


// -1 - FOR i = 1 to arr.length

//   - 2 - int j < --i - 1
//     - 3 - int temp < --arr[i]

//       - 4 - WHILE j >= 0 AND temp < arr[j]
//         - 5 - arr[j + 1] < --arr[j]
//         - 6 - j < --j - 1

//         - 7 - arr[j + 1] < --temp 
