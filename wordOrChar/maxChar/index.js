// Return the character most commonly used in the string.
// --- Examples
// maxChar("I loveeeeeee noodles") === "e"
// maxChar("1337") === "3"

// Helpful article
function maxChar(str) {
  // TIME COMPLEXITY: O(N). bcos we went over every char of str
	// SPACE COMPLEXITY: O(1). bcos length of str remains d same
  
  // https://medium.com/@derekcerretani/max-characters-in-javascript-5f2963c128a4
  // const charHash = {};
  // let maxChar = "";
  // let counter = 0;
  // for(let char of str) {
  // // if char exist add 1 to it's object value 
  // // else add new object key with value of 1
  //     charHash[char] = charHash[char] + 1 || 1
  // }
  // for(let char in charHash) {
  //     if(charHash[char] > counter) {
  //         counter = charHash[char];
  //         maxChar = char;
  //     }
  // }
  // return maxChar;

  let max = 0, maxChar = "";
  str.split("").forEach((char) => {
    // pick a char and memoize the # of occurrences
    // only call it again when another char exceeds its # occurrence
    if (str.split(char).length > max) {
      max = str.split(char).length - 1;
      maxChar = char;
    }
  });
  // console.log({ maxChar, occurrence: max })
  return  maxChar
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

describe("Max Character", () => {
  it("maxChar() finds the most frequently used character", () => {
    assert.equal(maxChar("a"), "a");
    assert.equal(maxChar("test"), "t");
    assert.equal(maxChar("I loveeeeee noodles"), "e");
    assert.equal(maxChar("1337"), "3");
  });
});

mocha.run();
