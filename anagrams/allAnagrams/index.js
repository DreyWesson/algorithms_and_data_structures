// Given an array of words ['cat', 'dog', 'tac', 'god', 'act'],
// return an array with all the anagrams grouped together.
// Makes sure the anagrams are unique
var arr = ["cat", "dog", "tac", "god", "act"];
function allAnagrams(arr, anagrams = {}) {
  if (typeof arr === "string") arr = arr.split(" ");
  arr.forEach(function (str) {
    let recurse = (ana, str) => {
      if (str === "") anagrams[ana] = 1;
      for (var i = 0; i < str.length; i++)
        recurse(ana + str[i], str.slice(0, i) + str.slice(i + 1));
    };
    recurse("", str);
  });
  return Object.keys(anagrams);
}

console.log(allAnagrams("seat"));

function swap(strArr, index1, index2) {
  return ([strArr[index1], strArr[index2]] = [strArr[index2], strArr[index1]]);
}
function permute(strArr, begin, end) {
  // Time Complexity: O(n!)
  // Space Complexity: O(n!)
  // there are n! permutations, and it creates n! call stacks.
  if (begin == end) console.log(strArr);
  else {
    for (var i = begin; i < end + 1; i++) {
      swap(strArr, begin, i);
      permute(strArr, begin + 1, end);
      swap(strArr, begin, i);
    }
  }
}
function permuteArray(strArr) {
  permute(strArr, 0, strArr.length - 1);
}
console.log(permuteArray(["A", "C", "D"]));

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
  it("shows all possible anagrams of an array", () => {
    assert.deepEqual(allAnagrams(arr), [
      "cat",
      "cta",
      "act",
      "atc",
      "tca",
      "tac",
      "dog",
      "dgo",
      "odg",
      "ogd",
      "gdo",
      "god",
    ]);
  });
  it("shows all possible anagrams of a string", () => {
    assert.deepEqual(allAnagrams("seat"), [
      "seat",
      "seta",
      "saet",
      "sate",
      "stea",
      "stae",
      "esat",
      "esta",
      "east",
      "eats",
      "etsa",
      "etas",
      "aset",
      "aste",
      "aest",
      "aets",
      "atse",
      "ates",
      "tsea",
      "tsae",
      "tesa",
      "teas",
      "tase",
      "taes",
    ]);
  });
});

mocha.run();
