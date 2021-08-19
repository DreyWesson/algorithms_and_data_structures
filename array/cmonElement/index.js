// FIND COMMON ELEMENTS IN K-SORTED ARRAYS
let arr1 = [1, 5, 5, 10],
  arr2 = [3, 4, 5, 5, 10],
  arr3 = [5, 5, 10, 20],
  output = [5, 10];

function commonElements(arr, hashmap = {}, answer = [], last = "") {
  // Time Complexity: O(kn)
  // Space Complexity: O(n)
  // where, n is longest array length, and k is the number of arrays.

  for (let i = 0; i < arr.length; i++) {
    var currentArray = arr[i];
    last = null;
    for (let j = 0; j < currentArray.length; j++) {
      let currentElement = currentArray[j];
      if (last != currentElement)
        if (!hashmap[currentElement]) hashmap[currentElement] = 1;
        else hashmap[currentElement]++;
      last = currentElement;
    }
  }

  // Iterate through hashmap
  for (let prop in hashmap)
    if (hashmap[prop] == arr.length) answer.push(parseInt(prop));
  return answer;
}

console.log(
  commonElements([
    [1, 2, 3],
    [1, 2, 3, 4],
    [1, 2],
  ])
); // [ 1, 2 ]
