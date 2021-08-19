// function removeDuplicates(...arr) {

//   let jointArray = [];
//   arr.forEach((array) => (jointArray = [...jointArray, ...array]));
//   return jointArray.filter((item, index) => jointArray.indexOf(item) === index);

//   // return [...new Set(arr)];
// }

function removeDuplicates(arrays) {
  // if (!(Array.isArray(arrays) || typeof arrays === "string")) return;
  const unique = [];
  const hashMap = {};
  for (let i = 0; i < arrays.length; i++) {
    // if value does not exist in hashMap push it in
    !hashMap[arrays[i]] && unique.push(arrays[i]);
    hashMap[arrays[i]] = true;
  }
  return unique;

  // let jointArr = [];
  // arrays.forEach((arr) => (jointArr = [...jointArr, ...arr]));
  // return jointArr.filter((item, i) => jointArr.indexOf(item) === i);
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

describe("removeDuplicates()", () => {
  it("removes duplicates in a string.", () => {
    assert.deepEqual(removeDuplicates("daree"), ["d", "a", "r", "e"]);
  });
  it("removes duplicates in an arr.", () => {
    assert.deepEqual(
      removeDuplicates(
        ["Hello", "world", "world"],
        ["Hello", "world", "world"]
      ),
      ["Hello", "world"]
    );
  });
});

mocha.run();
