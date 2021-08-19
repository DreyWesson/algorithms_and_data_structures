function jaggedArray(grades) {
  let total = 0,
    average = 0.0,
    arr = [];
  for (let row = 0; row < grades.length; ++row) {
    for (let col = 0; col < grades[row].length; ++col)
      total += grades[row][col];

    average = total / grades[row].length;
    let key = `Student-${parseInt(row + 1)}`;
    let obj = { [key]: average.toFixed(2) };
    arr.push(obj);
    total = 0;
    average = 0.0;
  }
  console.log(arr);
}

jaggedArray([
  [89, 77],
  [76, 82, 81],
  [91, 94, 89, 99],
]);

function Matrix(rows, columns) {
  let jaggedarray = new Array(rows);
  for (let i = 0; i < columns; i++) jaggedarray[i] = new Array(rows);
  return jaggedarray;
}
var matrix3by3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix3by3[0]);
console.log(Matrix(4, 4));
