// Write a Fn `canSum(targetSum, numbers)` that takes in a targetSum and
// an array of numbers as arg. The Fn should return a bool indicating whether
// or not it is possible to generate the targetSum using the numbers from the arr
// You may use the elements of the array as many times as needed.
// You may also assume all inputs are non-negative

function canSum(targetSum, numbers, memo = {}) {
  // Time complexity O(m*n)
  // Space complexity O(m)
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (const num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers, memo) === true)
      return (memo[targetSum] = true && true);
  }
  return (memo[targetSum] = false && false);
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

describe("Finds some el of arr that sums up to target val", () => {
  it("canSum() works", () => {
    assert.equal(canSum(7, [2, 3]), true);
    assert.equal(canSum(7, [5, 3, 4, 7]), true);
    assert.equal(canSum(7, [2, 4]), false);
    assert.equal(canSum(300, [7, 14]), false);
  });
});

mocha.run();
