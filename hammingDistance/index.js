// The Hamming distance between two strings of equal length is the
// number of positions at which the corresponding symbols are different
function hammingDistance(str1, str2) {
  if (str1.length !== str2.length) return 0;
  let dist = 0;
  for (let i = 0; i < str1.length; i += 1) if (str1[i] !== str2[i]) dist++;
  return dist;
}
console.log(hammingDistance("plato", "plate"));
