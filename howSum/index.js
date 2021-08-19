// Write a Fn `howSum(targetSum, numbers)` that takes in a targetSum and
// an array of numbers as arg. The Fn should return an arr containing
// any combination of element that add up exactly the targetSum. if no
// combination adds up to d targetSum, then return null
// If there are multiple combination possible, you may return any single one

function howSum(targetSum, numbers, memo = {}) {
  // Time complexity O(m*n^2)
  // Space complexity O(m^2)
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (const num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers, memo);
    if (remainderResult !== null)
      return (memo[targetSum] = [...remainderResult, num]);
  }
  return (memo[targetSum] = null && null);
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

describe("Returns arr of el that sums up to target val", () => {
  it("howSum() works", () => {
    assert.deepEqual(howSum(7, [2, 3]), [3, 2, 2]);
    assert.deepEqual(howSum(7, [5, 3, 4, 7]), [4, 3]);
    assert.deepEqual(howSum(7, [2, 4]), null);
    assert.equal(howSum(300, [7, 14]), null);
  });
});

mocha.run();
