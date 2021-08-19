function factorial(num) {
  //   return isNaN(num)
  //     ? "This is not a number"
  //     : num === 1
  //     ? num
  //     : num * factorial(num - 1);
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
