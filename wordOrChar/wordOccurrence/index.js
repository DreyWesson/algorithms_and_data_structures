function maxWordOccurrence(str) {
	// TIME COMPLEXITY: O(N). bcos we went over every char of str
	// SPACE COMPLEXITY: O(1). bcos length of str remains d same
	str = str.toLowerCase();
	let max = 0, longestWord = "";

	// console.log(str.replace(/[\W_]+/g," ").split(" "));

	str.replace(/[\W_]+/g," ").split(" ").forEach((word) => {
		// pick a char and memoize the # of occurrences
		// only call it again when another char exceeds its # occurrence
		if (str.split(word).length > max) {
		max = str.split(word).length - 1;
		longestWord = word;
		}
	});
	// console.log({[longestWord]: { "# of occurrence": max }})
	return  longestWord
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

describe("maxWordOccurrence()", () => {
  it("maxWordOccurrence() finds the most frequently used word", () => {
    // assert.equal(maxChar("a"), "a");
    // assert.equal(maxChar("test"), "t");
    assert.equal(maxWordOccurrence("I loveeeeee noodles, noodles loves me"), "noodles");
    assert.equal(maxWordOccurrence("The shadow of the moon"), "the");
  });
});

mocha.run();