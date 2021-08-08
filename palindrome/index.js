// Given a string, return true or false depending if the string
// is a palindrome.  Palindromes are words that read the same backwards
// and forwards. Make sure it is case insensitive!
// --- Examples:
//   palindrome("Madam") === true
//   palindrome("love") === false

// function palindrome(str) {

// }

function palindrome(str) {
  // TIME COMPLEXITY: O(N). bcos we went over every char of str
  // SPACE COMPLEXITY: O(N). bcos length of str remains d same

  // reverse the string and compare the output with the param
  str = str.toLowerCase();
  let previous = "";
  for (let i = 0; i < str.length; i++) previous = str[i] + previous;
  return str === previous ? true : false;

  // Alternatively
  //   str = str.toLowerCase()
  //   reverse = str.split("").reduce((prev, char)=> char + prev)
  //   return  str === reverse? true:false
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

describe("Palindrome", () => {
  it('"bcb" is a palindrome', () => {
    assert.equal(palindrome("bcb"), true);
  });
  it('"bcb" is not a palindrome', () => {
    assert.equal(palindrome(" bcb"), false);
  });
  it('"bcb" is not a palindrome', () => {
    assert.equal(palindrome("bcb "), false);
  });
  it('"love" is not a palindrome', () => {
    assert.equal(palindrome("love"), false);
  });
  it('"699996" a palindrome', () => {
    assert.equal(palindrome("699996"), true);
  });
  it('"racecar" a palindrome', () => {
    assert.equal(palindrome("bcb"), true);
  });
  it("is case insensitive.", () => {
    assert.equal(palindrome("Trunk knurt"), true);
  });
});

mocha.run();
