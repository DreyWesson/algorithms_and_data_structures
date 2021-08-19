var nestedObject = [
  {
    itemId: 1,
    itemDetails: {
      name: "C",
      caregory: "Programming Language",
      price: 500,
    },
    itemCategory: "Basic",
  },
  {
    itemId: 2,
    itemDetails: {
      name: "C++",
      caregory: "Programming Language",
      price: 700,
    },
    itemCategory: "Beginner",
  },
  {
    itemId: 1,
    itemDetails: {
      name: "Java Script",
      category: "Web Development",
      price: 1500,
      itemCategory: "Advanced",
    },
  },

  {
    itemId: 1,
    itemDetails: {
      name: "Python",
      category: "Data Science",
      price: 1500,
      itemCategory: "Advanced",
    },
  },
];

let itemNames = nestedObject.filter(
  (eachObj) => eachObj.itemDetails.price === 1500
);

console.log(itemNames);

function search(obj, value) {
  if (typeof obj !== "object") return obj === value;
  for (const key in obj)
    if (obj.hasOwnProperty(key) && search(obj[key], value)) return true;
  return false;
}
