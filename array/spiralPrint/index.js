function spiralPrint(arr, retArray = [], topRow = 0) {
  // Time Complexity: O(mn) Space Complexity: O(1)
  // here, m is the number of rows, and n is the number of columns. each item in the matrix is visited only once.
  topRow = nav = leftCol = 0;
  let bottomRow = arr.length - 1,
    rightCol = arr[0].length - 1;

  while (topRow <= bottomRow && leftCol <= rightCol)
    if (nav === 0) {
      for (let i = leftCol; i <= rightCol; i++) retArray.push(arr[topRow][i]);
      topRow++;
      nav = 1;
    } else if (nav === 1) {
      for (let i = topRow; i <= bottomRow; i++) retArray.push(arr[i][rightCol]);
      rightCol--;
      nav = 2;
    } else if (nav === 2) {
      for (let i = rightCol; i >= leftCol; i--)
        retArray.push(arr[bottomRow][i]);
      bottomRow--;
      nav = 3;
    } else if (nav === 3) {
      for (let i = bottomRow; i >= topRow; i--) retArray.push(arr[i][leftCol]);
      leftCol++;
      nav = 0;
    }
  return retArray;
}

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

mocha.setup("bdd");
const { assert } = chai,
  arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
  ];

describe("Spiral print of arr - anticlockwise", () => {
  it("spiralPrint() works", () => {
    assert.deepEqual(
      spiralPrint(arr),
      [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]
    );
  });
});

mocha.run();
