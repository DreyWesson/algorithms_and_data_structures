function findSum(arr, weight) {
  // Time complexity O(N): All characters are looped. since the inner loop has a constant of 5 char
  // Space complexity O(N): constant because the number of alphabet is constant

  // https://levelup.gitconnected.com/solving-the-two-sum-problem-in-javascript-three-ways-4d43067fcfc7
  // https://levelup.gitconnected.com/how-to-solve-two-sum-in-javascript-d1ebd9dfd3d3
  // https://typeofnan.dev/exploring-the-two-sum-interview-question-in-javascript/
  // https://dev.to/eidorianavi/the-two-sum-problem-in-javascript-2gm7
  // https://paulrohan.medium.com/solving-the-classic-two-sum-and-three-sum-problem-in-javascript-7d5d1d47db03
  let hashtable = {};

  for (let i = 0, arrLength = arr.length; i < arrLength; i++) {
    let currentEl = arr[i],
      difference = weight - currentEl;

    //	check the right one already exists else store index
    if (hashtable[currentEl] != undefined) return [i, hashtable[currentEl]];
    else hashtable[difference] = i;
  }
  return -1;
}
console.log(findSum([1, 2, 3, 4, 5], 5));

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

describe("findSum()", () => {
  it("gets two array char that adds up to a Num", () => {
    assert.deepEqual(findSum([1, 2, 3, 4, 5], 9), [4, 3]);
  });
});

mocha.run();
