// Given a matrix representing a tic-tac-toe board, determine whether someone won,
// whether it was a tie, or whether the game has not ended yet

function checkRow(rowArr, letter) {
  for (var i = 0; i < 3; i++) if (rowArr[i] != letter) return false;
  return true;
}

function checkColumn(gameBoardMatrix, columnIndex, letter) {
  for (var i = 0; i < 3; i++)
    if (gameBoardMatrix[i][columnIndex] != letter) return false;
  return true;
}

function ticTacToeWinner(gameBoardMatrix, letter) {
  // Check rows
  var rowWin =
    checkRow(gameBoardMatrix[0], letter) ||
    checkRow(gameBoardMatrix[1], letter) ||
    checkRow(gameBoardMatrix[2], letter);

  var colWin =
    checkColumn(gameBoardMatrix, 0, letter) ||
    checkColumn(gameBoardMatrix, 1, letter) ||
    checkColumn(gameBoardMatrix, 2, letter);

  var diagonalWinLeftToRight =
    gameBoardMatrix[0][0] == letter &&
    gameBoardMatrix[1][1] == letter &&
    gameBoardMatrix[2][2] == letter;
  var diagonalWinRightToLeft =
    gameBoardMatrix[0][2] == letter &&
    gameBoardMatrix[1][1] == letter &&
    gameBoardMatrix[2][0] == letter;

  return rowWin || colWin || diagonalWinLeftToRight || diagonalWinRightToLeft;
}

var board = [
  ["O", "-", "X"],
  ["-", "O", "-"],
  ["-", "X", "O"],
];

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
const { assert } = chai;

describe("Finds some el of arr that sums up to target val", () => {
  it("ticTacToeWinner() works", () => {
    assert.equal(ticTacToeWinner(board, "O"), true);
    assert.equal(ticTacToeWinner(board, "X"), false);
  });
});

mocha.run();
