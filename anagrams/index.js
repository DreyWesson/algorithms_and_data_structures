// Check if two strings are anagrams of each other.
// One string is an anagram of another if it uses exact same characters
// in exact same quantity. Only consider word characters, and make sure the
// function is case insensitive.
// --- Examples
//   anagrams('heart', 'earth') --> True
//   anagrams('heart', '  earth') --> True
//   anagrams('Heart!', 'EARTH') --> True
//   anagrams('lol', 'lolc') --> False

function anagrams(stringA, stringB) {
  // Time complexity O(N+M)
  // Space complexity O(N+M)

  // sanitize string using regex
  stringA = stringA.toLowerCase().replace(/[\W_]+/gi, "");
  stringB = stringB.toLowerCase().replace(/[\W_]+/gi, "");

  function createCharMap(str) {
    // create a function to hash each char occurrences
    let charHash = {};
    for (let char of str) charHash[char] = charHash[char]++ || 1;
    return charHash;
  }
  if (stringA.length === stringB.length) {
    let stringAMap = createCharMap(stringA);
    let stringBMap = createCharMap(stringB);

    // check if the number of char in the hash. if same, then its an anagram
    for (let char in stringAMap)
      if (stringAMap[char] !== stringBMap[char]) return false;
    return true;
  } else return false;

  // stringA = stringA.toLowerCase().replace(/[\W_]+/g, "");
  // stringB = stringB.toLowerCase().replace(/[\W_]+/g, "");

  // const stringAHashTable = {};

  // if (stringA.length !== stringB.length) return false;

  // stringA
  //   .split("")
  //   .forEach((el) => (stringAHashTable[el] = stringAHashTable[el]++ || 1));
  // // stringB.split('').forEach(el => (!stringACharHash[el])? false : stringACharHash[el]--);

  // for (let i = 0; i < stringB.length; i++) {
  //   const bChar = stringB[i];
  //   // if a char of stringB !== stringA return false else decrement d char
  //   return !stringAHashTable[bChar] ? false : stringAHashTable[bChar]--;
  // }
  // return true;
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

describe("Anagrams", () => {
  it("works if case sensitivity and non word characters NOT taken into account", () => {
    assert.equal(anagrams("earth", "heart"), true);

    assert.equal(anagrams("love", "meow"), false);
    assert.equal(anagrams("lol", "lolc"), false);
  });
  it("is case insensitive. 'HEART' and 'earth' should return true", () => {
    assert.equal(anagrams("HEART", "earth"), true);
    assert.equal(anagrams("heart", "EARTH"), true);

    assert.equal(anagrams("love", "meow"), false);
    assert.equal(anagrams("lol", "lolc"), false);
  });
  it("only matches word characters. 'heart!'' and '' earth' should return true", () => {
    assert.equal(anagrams("heart!", " earth"), true);

    assert.equal(anagrams("love", "meow"), false);
    assert.equal(anagrams("lol", "lolc"), false);
  });
});

mocha.run();
