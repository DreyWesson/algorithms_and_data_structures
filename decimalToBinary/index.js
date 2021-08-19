function base10ToString(n) {
  // Time Complexity: O(log2(n)) time complexity is logarithmic because the recursive
  // call divides the n by 2, which makes the algorithm fast. For example, for n = 8,
  // it executes only three times. For n=1024, it executes 10 times.
  // Space Complexity: O(log2(n))
  var binaryString = "";

  function base10ToStringHelper(n) {
    if (n < 2) {
      binaryString += n;
      return;
    } else {
      base10ToStringHelper((n / 2) | 0);
      base10ToStringHelper(n % 2);
    }
  }
  base10ToStringHelper(n);

  return binaryString;
}

console.log(base10ToString(232));

function convertToBinary(x, i = 1, bin = 0, rem = 0) {
  while (x !== 0) {
    rem = x % 2;
    x = parseInt(x / 2);
    bin = bin + rem * i;
    i = i * 10;
  }
  return bin;
}
console.log(convertToBinary(232));
