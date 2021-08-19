// Assume you are a traveler on a 2D grid. You begin at top-left corner
// and your destination is bottom right corner. You may only move down or right
// In how many ways can you travel to the goal on a grid with dimensions m*n
// Write a Fn `gridTraveler(m,n)` that calc this

function gridTraveler(m, n, memo = {}) {
  // Time complexity O(m*n)
  // Space complexity O(n+m)
  let key = m + "," + n;
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  //   memo[key]
  return (memo[key] =
    gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo));
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

describe("# of ways u can travel in a 2D grid", () => {
  it("gridTraveler() works", () => {
    assert.equal(gridTraveler(1, 1), 1);
    assert.equal(gridTraveler(2, 3), 3);
    assert.equal(gridTraveler(3, 2), 3);
    assert.equal(gridTraveler(18, 18), 2333606220);
  });
});

mocha.run();
