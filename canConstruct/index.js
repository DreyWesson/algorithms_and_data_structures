// Write a Fn `canConstruct(target, wordBank)` that takes in a target string and
// an array of strings as arg. The Fn should return a bool indicating whether or
// not the `target` can be constructed by concatenating elements of the `wordBank` array
// You may reuse elements of `wordBank` as many times as possible

function canConstruct(target, wordBank, memo = {}) {
  // Time complexity O(m^2*n)
  // Space complexity O(m^2)
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank, memo))
        return (memo[target] = true && true);
    }
  }
  return (memo[target] = false && false);
}
// console.log(canConstruct("skateboard", ["sk", "t", "bo", "ate", "bo", "ard"]));
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

describe("Finds combination of char that sums up to target word", () => {
  it("canConstruct() works", () => {
    assert.equal(canConstruct("", ["ab", "abc", "cd", "def", "abcd"]), true);
    assert.equal(
      canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]),
      true
    );
    assert.equal(
      canConstruct("skateboard", ["sk", "t", "bo", "ate", "bo", "ard"]),
      true
    );
    assert.equal(
      canConstruct("skateboard", ["bo", "rd", "t", "ate", "ska", "boar"]),
      false
    );
    assert.equal(
      canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
        "e",
        "ee",
        "eee",
        "eeee",
        "eeeee",
        "eeeeee",
      ]),
      false
    );
  });
});

mocha.run();
