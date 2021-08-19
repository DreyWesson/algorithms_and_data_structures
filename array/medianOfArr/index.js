// median in an even number of a set is the average of the two middle numbers
function medianOfArray(array, length = array.length) {
  //   var length = ;
  // Odd
  return length % 2 == 1
    ? array[Math.floor(length / 2)]
    : (array[length / 2] + array[length / 2 - 1]) / 2;
}
function medianOfTwoSortedArray(arr1, arr2, pos) {
  // Time Complexity: O(log2(n)) By cutting the array size by half each time, logarithmic time complexity is achieved
  if (pos <= 0) return -1;
  if (pos == 1) return (arr1[0] + arr2[0]) / 2;
  if (pos == 2)
    return (Math.max(arr1[0], arr2[0]) + Math.min(arr1[1], arr2[1])) / 2;

  let median1Equal = medianOfArray(arr1) === medianOfArray(arr2),
    median1Lesser = medianOfArray(arr1) < medianOfArray(arr2);

  if (median1Equal) return median1;

  let evenOffset = pos % 2 == 0 ? 1 : 0,
    midPos = Math.floor(pos / 2),
    offsetMinus = midPos - evenOffset,
    offsetPlus = pos - midPos + evenOffset;

  return median1Lesser
    ? medianOfTwoSortedArray(
        arr1.slice(offsetMinus),
        arr2.slice(0, -offsetMinus),
        offsetPlus
      )
    : medianOfTwoSortedArray(
        arr2.slice(offsetMinus),
        arr1.slice(0, -offsetMinus),
        offsetPlus
      );
}

console.log(medianOfTwoSortedArray([1, 2, 3], [4, 5, 6], 3)); // 3.5
medianOfTwoSortedArray([11, 23, 24], [32, 33, 450], 3); // 28
medianOfTwoSortedArray([1, 2, 3], [2, 3, 5], 3); // 2.5
