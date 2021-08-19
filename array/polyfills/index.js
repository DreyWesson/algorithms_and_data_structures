// implement polyfill for the filter() method
// A polyfill is a browser fallback, made in JavaScript, that allows
// functionality you expect to work in modern browsers to work in older browsers

// Implement Linear Search Algorithms that search a provided Array for the provided value.
// The Linear Search Algorithms will either return a boolean, index, or value back.

// const foods = ["pizza", "orange", "yogurt"];
// linearSearchIndexOf(foods, "pizza") --> 0
// linearSearchIncludes(foods, "pizza") --> true
// linearSearchFind(foods, food => food === "pizza") --> "pizza"

/*
https://medium.com/nerd-for-tech/polyfill-for-array-map-filter-and-reduce-e3e637e0d73b
https://learnersbucket.com/examples/interview/polyfill-for-array-filter/
*/
Array.prototype.polyfillIndexOf = function (val) {
  for (let i = 0; i < this.length; i++) if (this[i] === val) return i;
  return -1;
};

Array.prototype.polyfillIncludes = function (val) {
  for (let i = 0; i < this.length; i++) if (this[i] === val) return true;
  return false;
};

Array.prototype.polyfillFind = function (callback) {
  for (let i = 0; i < this.length; i++) if (callback(this[i])) return this[i];
};

Array.prototype.polyfillFilter = function (callback, arr = []) {
  for (let i = 0; i < this.length; i++)
    if (callback(this[i])) arr.push(this[i]);
  return arr;
};

Array.prototype.polyfillMap = function (callback, arr = []) {
  for (let i = 0; i < this.length; i++) arr.push(callback(this[i]));
  return arr;
};

Array.prototype.polyfillReduce = function (callback, accumulator = 0) {
  for (var i = 0; i < this.length; i++)
    if (accumulator !== undefined)
      accumulator = callback.call(undefined, accumulator, this[i]);
    else accumulator = this[i];
  return accumulator;
};

// var _slice = Array.prototype.slice;
Array.prototype._slice = function (start, end = this.length, newArr = []) {
  for (let i = start; i < end; i++) newArr.push(arr[i]);
  return newArr;
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

const foods = ["pizza", "orange", "yogurt"];
const people = [{ name: "Kevin", last: "Nguyen", born: 1995 }];
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr._slice(4));

describe("polyfillIndexOf()", () => {
  it("mimics in-built indexOf method", () => {
    assert.equal(foods.polyfillIndexOf("pizza"), 0);
    assert.equal(foods.polyfillIndexOf("yogurt"), 2);
  });
  it("returns -1 if item not found", () => {
    assert.equal(foods.polyfillIndexOf(foods, "laptop"), -1);
  });
});

describe("polyfillIncludes()", () => {
  it("mimics in-built includes method", () => {
    assert.equal(foods.polyfillIncludes("pizza"), true);
  });
  it("returns false if item NOT found", () => {
    assert.equal(foods.polyfillIncludes("laptop"), false);
  });
});

describe("polyfillFind()", () => {
  it("mimics in-built find method", () => {
    const kevin = people[0];
    assert.equal(
      people.polyfillFind((person) => person.name === "Kevin"),
      kevin
    );
  });
  it("returns undefined if item NOT found", () => {
    assert.equal(
      people.polyfillFind((person) => person.name === "Kevinn"),
      undefined
    );
  });
});

describe("polyfillFilter()", () => {
  it("Mimics in-built filter method", () => {
    assert.deepEqual(
      arr.polyfillFilter((item) => item % 2 === 0),
      [2, 4, 6]
    );
  });
  it("Mimics in-built filter method", () => {
    assert.deepEqual(
      arr.polyfillFilter((item) => item > 4),
      [5, 6]
    );
  });
});

describe("polyfillMap()", () => {
  it("Mimics in-built filter method", () => {
    assert.deepEqual(
      arr.polyfillMap((item) => item + 2),
      [3, 4, 5, 6, 7, 8]
    );
  });
  it("Mimics in-built filter method", () => {
    assert.deepEqual(
      arr.polyfillMap((item) => item % 2 === 0 && item),
      [false, 2, false, 4, false, 6]
    );
  });
});

describe("polyfillReduce()", () => {
  it("Mimics in-built reduce method", () => {
    assert.equal(
      arr.polyfillReduce((next, prev) => next + prev),
      21
    );
  });
});

mocha.run();
