// A falsy value is a value that is considered false when examined
//  as a Boolean. Recall that a Boolean value could either be true or false.
// JavaScript uses type conversion to translate any value to true or false
// when required. Examples of falsy values are: false, null, undefined, 0, NaN, and ""
function falsyBouncer(array) {
  let result = [];
  //loop through with each array value
  // push into result if truthy
  for (value of array) if (value) result.push(value);
  return result;
}

function whereIBelong(arr, num) {
  var counter = 0;
  for (i = 0; i < arr.length; i++) {
    if (num > arr[i]++) {
      counter++;
    }
  }
  return counter;
}
console.log(whereIBelong([1, 2, 3, 4], 2.5));
