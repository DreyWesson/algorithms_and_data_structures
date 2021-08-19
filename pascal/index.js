// https://dev.to/alisabaj/solving-pascal-s-triangle-in-javascript-4e59

function pascals(numRows, triangle = []) {
  //   if (numRows === 0) return [];
  //   if (numRows === 1) return [[1]];

  for (let row = 1; row <= numRows; row++) {
    let arr = [];
    for (let col = 0; col < row; col++)
      if (col === 0 || col === row - 1) arr.push(1);
      else arr.push(triangle[row - 2][col - 1] + triangle[row - 2][col]);
    triangle.push(arr);
  }
  return triangle;

  // RECURSION
  //   if (col == 0) return 1;
  //   else if (row == 0) return 0;
  //   else return pascalTriangle(row - 1, col) + pascalTriangle(row - 1, col - 1);
}

console.log(pascals(6));

function triangle(number, string = "") {
  function pascal(row, column) {
    if (column > row) return 0;
    if (column <= 1 || row <= 1) return 1;
    return pascal(row - 1, column) + pascal(row - 1, column - 1);
  }
  for (let row = 1; row <= number; row++) {
    for (let column = 1; column <= row; column++) {
      string += `${pascal(row, column)} `;
    }
    string += "\n";
  }
  console.log(string);
}
triangle(6);

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

// mocha.setup("bdd");
// const { assert } = chai;

// describe("isPrime()", () => {
//   it("checks if a numRows is prime number or not", () => {
//     assert.equal(primeFactor(7), true);
//     assert.equal(primeFactor(4), false);
//     assert.equal(primeFactor(97), true);
//   });
// });

// mocha.run();
