// Directions
// Return a string with the order of characters reversed
// --- Examples
//   reverse('abcd') === 'dcba'
//   reverse('Hello!') === '!olleH'

function rev(str) {
  // TIME COMPLEXITY: O(N). bcos we went over every char of str
  // SPACE COMPLEXITY: O(N). bcos length of str remains d same

  // using REDUCE method
  return [...str].reduce((acc, char) => char + acc);

  // create a hash for previous value
  // loop through and add current value in front of previous hash
  // let previous = "";
  // for (let i = 0; i < str.length; i++) previous = str[i] + previous;
  // return previous;
  // if (str === "") return "";
  // return rev(str.substr(1)) + str.charAt(0);

  // no IN-BuILT method
  // let prev = ''
  // for (let i = 0; i < str.length; i++) prev = str[i] + prev
  // return prev
}
console.log(rev("siht si a elpmas gnirts"));

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

describe("String Reversal", () => {
  it("rev() correctly reverses string", () => {
    assert.equal(rev("ffaa"), "aaff");
    assert.equal(rev("  aaff"), "ffaa  ");
  });
});

mocha.run();
