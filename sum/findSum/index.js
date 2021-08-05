function findSum(arr, weight) {
  // Time complexity O(N): All characters are looped. since the inner loop has a constant of 5 char
  // Space complexity O(N): constant because the number of alphabet is constant

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
