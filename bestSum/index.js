// Write a Fn `bestSum(targetSum, numbers)` that takes in a targetSum and
// an array of numbers as arg. The Fn should return an arr containing
// any shortest combination of element that add up exactly the targetSum.
// If there is a tie, you may return any single one

function bestSum(targetSum, numbers, memo = {}) {
  // Time complexity O(m^2*n)
  // Space complexity O(m^2)
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  let shortestCombination = null;

  for (const num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = bestSum(remainder, numbers, memo);
    if (remainderResult !== null) {
      const combination = [...remainderResult, num];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      )
        shortestCombination = combination;
    }
  }
  return (memo[targetSum] = shortestCombination && shortestCombination);
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
const { assert } = chai;

describe("Finds shortest # of arr that sums up to target val", () => {
  it("bestSum() works", () => {
    assert.deepEqual(bestSum(7, [5, 3, 4, 7]), [7]);
    assert.deepEqual(bestSum(8, [2, 3, 5]), [5, 3]);
    assert.deepEqual(bestSum(8, [1, 4, 5]), [4, 4]);
    assert.equal(bestSum(300, [7, 14]), null);
  });
});

mocha.run();
