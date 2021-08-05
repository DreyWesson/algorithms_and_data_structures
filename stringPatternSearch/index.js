// Given a text and a pattern, write a function that shows
// how many times the pattern occurs in the text.
// stringPatternSearch("lollipop", "lol") --> 1
// stringPatternSearch("lolol", "lol") --> 2

function stringPatternSearch(text, pattern) {
  // https://medium.com/nerd-for-tech/naive-string-searching-algorithm-2d5fa07fdbcd
  // https://programmersought.com/article/89001680877/

  // Time complexity O(N*M)

  let count = 0;
  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[j] !== text[i + j]) break;
      if (j === pattern.length - 1) count++;
    }
  }
  return count;
}

// KPM method
/**
 * @see https://www.youtube.com/watch?v=GTJr8OvyEVQ
 * @param {string} word
 * @return {number[]}
 */
function buildPatternTable(word) {
  const patternTable = [0];
  let prefixIndex = 0;
  let suffixIndex = 1;

  while (suffixIndex < word.length) {
    if (word[prefixIndex] === word[suffixIndex]) {
      patternTable[suffixIndex] = prefixIndex + 1;
      suffixIndex += 1;
      prefixIndex += 1;
    } else if (prefixIndex === 0) {
      patternTable[suffixIndex] = 0;
      suffixIndex += 1;
    } else {
      prefixIndex = patternTable[prefixIndex - 1];
    }
  }

  return patternTable;
}

/**
 * @param {string} text
 * @param {string} word
 * @return {number}
 */
function knuthMorrisPratt(text, word) {
  if (word.length === 0) {
    return 0;
  }

  let textIndex = 0;
  let wordIndex = 0;

  const patternTable = buildPatternTable(word);

  while (textIndex < text.length) {
    if (text[textIndex] === word[wordIndex]) {
      // We've found a match.
      if (wordIndex === word.length - 1) {
        return textIndex - word.length + 1;
      }
      wordIndex += 1;
      textIndex += 1;
    } else if (wordIndex > 0) {
      wordIndex = patternTable[wordIndex - 1];
    } else {
      wordIndex = 0;
      textIndex += 1;
    }
  }
  return -1;
}
var test = "potential";

var string =
  "This fact implies that the loop can execute at most 2n times. For, in each iteration, it " +
  "executes one of the two branches in the loop. The first branch invariably increases i and does not " +
  "change m, so that the index m + i of the currently scrutinized character of S is increased. The second " +
  "branch adds i - T[i] to m, and as we have seen, this is always a positive number. Thus the location m " +
  "of the beginning of the current potential match is increased. Now, the loop ends if m + i = n; " +
  "therefore each branch of the loop can be reached at most k times, since they respectively increase " +
  "either m + i or m, and m = m + i: if m = n, then certainly m + i = n, so that since it increases by " +
  "unit increments at most, we must have had m + i = n at some point in the past, and therefore either " +
  "way we would be done.";
// console.log(string.split(" ")[425]);
console.log(knuthMorrisPratt(string, test));

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

describe("stringPatternSearch()", () => {
  it("works.", () => {
    assert.equal(stringPatternSearch("lollipop", "lol"), 1);
    assert.equal(stringPatternSearch("lolol", "lol"), 2);
  });
});

mocha.run();
