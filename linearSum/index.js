function findSumEvenNumbers(num, n = 0) {
  num % 2 === 0 ? (n = num / 2) : (n = (num - 1) / 2);
  return n * n + n;
}

function findSum(n, sum = 0) {
  for (let i = 0; i <= n; i++) if (i % 2 === 0) sum += i;
  return sum;
}

function sumEven(number) {
  if (number === 0) return 0;
  else if (number % 2 !== 0) return sumEven(number - 1);
  return number + sumEven(number - 1);
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

describe("Returns sum of even num from n", () => {
  it("findSumEvenNumbers() uses arithmetic logic", () => {
    assert.equal(findSumEvenNumbers(10), 30);
  });
  it("findSum() uses iterative logic", () => {
    assert.equal(findSum(10), 30);
  });
  it("sumEven() uses recursive logic", () => {
    assert.equal(sumEven(10), 30);
  });
});

mocha.run();
