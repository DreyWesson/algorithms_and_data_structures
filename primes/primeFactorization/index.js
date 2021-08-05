function primeFactor(n) {
  //Time complexity O(sqrt(N)): if sqrt(N) is !primeNum then (N !== primeNum )
  //so the loop only has to test until the sqrt(N)
  while (n % 2 == 0) {
    // print the # of 2s that divided n
    console.log(2);
    n = n / 2;
  }
  // n must be odd @ this point. so we can skip one element (i = i + 2)
  for (let i = 3; i * i <= n; i = i + 2) {
    // while i divides n, print i and divide n
    while (n % i == 0) {
      console.log(i);
      n = n / i;
    }
  }
  // this handles when n is a prime number greater than 2
  n > 2 && console.log(n);
}

primeFactor(20);

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

// mocha.setup("bdd");
// const { assert } = chai;

// describe("isPrime()", () => {
//   it("checks if a num is prime number or not", () => {
//     assert.equal(primeFactor(7), true);
//     assert.equal(primeFactor(4), false);
//     assert.equal(primeFactor(97), true);
//   });
// });

// mocha.run();
