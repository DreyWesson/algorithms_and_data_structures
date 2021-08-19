var matrix = [
  [1, 0, 1],
  [0, 0, 1],
  [1, 1, 1],
];
rotateMatrix90Left(matrix);
// rotate a matrix to the left by 90 degrees. For example, the following:
// 101 001 111
// rotates to this:
// 111 001 101
function rotateMatrix90Left(mat, matLen = mat.length) {
  // Time Complexity: O(mn) space Complexity: O(1)
  // here, m is the row length, and n is the column length. each element is visited only once.
  // the space complexity is O(1) because the original array is modified instead of creating a new array.
  // Consider all squares one by one
  for (let x = 0; x < matLen / 2; x++)
    // Consider elements in group of 4 in
    // current square
    for (let y = x; y < matLen - x - 1; y++) {
      // store current cell in temp variable
      let temp = mat[x][y];
      // move values from right to top
      mat[x][y] = mat[y][matLen - 1 - x];
      // move values from bottom to right
      mat[y][matLen - 1 - x] = mat[matLen - 1 - x][matLen - 1 - y];
      // move values from left to bottom
      mat[matLen - 1 - x][matLen - 1 - y] = mat[matLen - 1 - y][x];
      // assign temp to left
      mat[matLen - 1 - y][x] = temp;
    }
}

console.log(matrix);

function Animal() {
  this.name = "Geechi";
  this.animalType = "Dog";
}
function Dog() {}

Animal.prototype.sayName = function () {
  console.log(this.name);
};
Animal.prototype.sayType = function () {
  console.log(this.animalType);
};
