const flattenObject = (obj, prefix = "") =>
  Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + "." : "";
    if (typeof obj[k] === "object")
      Object.assign(acc, flattenObject(obj[k], pre + k));
    else acc[pre + k] = obj[k];
    return acc;
  }, {});

const obj = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};
console.log(flattenObject(obj));

function flattenDictionary(dictionary, flattenedDictionary = {}) {
  // Time Complexity: O(n)
  // Space Complexity: O(n)
  // each property is visited only once and stored once per n properties.
  function flattenDictionaryHelper(dictionary, propName) {
    if (typeof dictionary != "object")
      return (flattenedDictionary[propName] = dictionary);
    for (let prop in dictionary)
      if (propName == "")
        flattenDictionaryHelper(dictionary[prop], propName + prop);
      else flattenDictionaryHelper(dictionary[prop], propName + "." + prop);
  }
  flattenDictionaryHelper(dictionary, "");
  return flattenedDictionary;
}
console.log(flattenDictionary(obj));
