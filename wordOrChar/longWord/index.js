function longestWord(str) {
  // TIME COMPLEXITY: O(N). bcos we went over every char of str
  // SPACE COMPLEXITY: O(1). bcos length of str remains d same

  let max = 0,
    longestWord = "";

  str.split(" ").forEach((word) => {
    // pick a char and memoize the # of occurrences
    // only call it again when another char exceeds its # occurrence
    // console.log(word.length);
    if (word.length > max) {
      max = word.length;
      longestWord = word;
    }
  });
  // console.log({ longestWord, length: max })
  return longestWord;
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

describe("longestWord()", () => {
  it("maxWord() finds the longest word", () => {
    assert.equal(longestWord("maximum occurrence"), "occurrence");
    assert.equal(longestWord("I loveeeeee noodles"), "loveeeeee");
    assert.equal(longestWord("I loveeeeee 12345678911"), "12345678911");
  });
});

mocha.run();
