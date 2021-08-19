// Returns the value of exponent operation from given number and grade.

function pow(number, power) {
  if (power === 1) return number;
  return number * pow(number, power - 1);
}

pow(2, 2);
