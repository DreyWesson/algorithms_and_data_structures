// Return the character or word most commonly used in a given param.
// --- Examples
// maxChar("I loveeeeeee noodles") === "e"
// maxChar("1337") === "3"

/**
 * @see https://medium.com/@derekcerretani/max-characters-in-javascript-5f2963c128a4
 * @param {string or array} str
 * @return {string}
 */
function maxCharOrWord(strOrArr) {
  // TIME COMPLEXITY: O(N). bcos we went over every char of str
  // SPACE COMPLEXITY: O(1). bcos length of str remains d same

  let hashTable = {};
  let initialMax = 0,
    finalMax = "";

  // check if its array or string
  if (!(Array.isArray(strOrArr) || typeof strOrArr === "string"))
    return "Only Arrays or Strings";

  strOrArr = typeof strOrArr === "string" ? strOrArr.split("") : strOrArr;

  for (let i = 0; i < strOrArr.length; i++) {
    let item = strOrArr[i];
    // if char/word exist add 1 to it's value else add new key with value of 1
    hashTable[item] = hashTable[item] + 1 || 1;
    // run if block only when we have a new max
    if (hashTable[item] > initialMax) {
      initialMax = hashTable[item];
      finalMax = item;
    }
  }
  // console.log(map);
  return finalMax;
}

// if char exist add 1 to it's value
// else add new key with value of 1
// for (const char of str) hashtable[char] = hashtable[char] + 1 || 1;
// Loop through the hashtable
// for (const char in hashtable) {
// compare current max value
//   if (hashtable[char] > initialMax) {
// save current max value
//     initialMax = hashtable[char];
//     finalMax = char;
//   }
// }
// return finalMax;

// let max = 0, maxChar = "";
// str.split("").forEach((char) => {
//   // pick a char and memoize the # of occurrences
//   // only call it again when another char exceeds its # occurrence
//   if (str.split(char).length > max) {
//     max = str.split(char).length - 1;
//     maxChar = char;
//   }
// });
// // console.log({ maxChar, occurrence: max })
// return  maxChar
// }

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

describe("Max Character or Word", () => {
  it("maxCharOrWord() finds the most frequently used character or word", () => {
    assert.equal(maxCharOrWord("a"), "a");
    assert.equal(maxCharOrWord("test"), "t");
    assert.equal(maxCharOrWord("I loveeeeee noodles"), "e");
    assert.equal(
      maxCharOrWord(["I", "love", "noodles", "and", "love", "chicken"]),
      "love"
    );
    assert.equal(maxCharOrWord("1337"), "3");
  });
});

mocha.run();
