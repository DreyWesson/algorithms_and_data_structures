// we are given a haystack(big string) and a needle(small string).
// We need to find the first index of the needle in the haystack.
// Return 0 if the needle is empty
// Return -1 if the needle is not present in the haystack

const haystack = (haystack, needle) => {
  if (needle.length === 0 || haystack === needle) return 0;
  // stop loop immediately d remaining substring is less than needle length
  for (let i = 0; i < haystack.length - needle.length; i++)
    if (needle === haystack.substring(i, i + needle.length))
      return `'${haystack.substring(i, i + needle.length)}' @ ${i}`;
  return -1;
};

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

const test = "scrutinized";
const string =
  "This fact implies that the loop can execute at most 2n times. For, in each iteration, it " +
  "executes one of the two branches in the loop. The first branch invariably increases i and does not " +
  "change m, so that the index m + i of the currently scrutinized character;";

describe("Finds the needle in haystack", () => {
  it("haystack() works", () => {
    assert.equal(haystack("This is my haystack", "is my"), "'is my' @ 5");
    assert.equal(haystack(string, test), "'scrutinized' @ 239");
  });
});

mocha.run();
