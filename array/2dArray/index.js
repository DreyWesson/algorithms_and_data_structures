// Given an array with two entries, parent and child relation, convert the array
// to relation tree object (parent -> child -> grandchild) in JavaScript
// [
//   ["lion", "cat"],
//   ["cat", "mammal"],
//   ["dog", "mammal"],
//   ["mammal", "animal"],
//   ["fish", "animal"],
//   ["shark", "fish"],
// ];
//Output:
//animal -> mammal -> cat -> lion
//animal -> mammal -> dog
//animal -> fish -> shark

// =====> PSEUDOCODE <======== //
// Write a Fn(val,type) to create object structure ({type,val, children:[]})
// Write Fn(data, memo={}) to show hierarchical relationship
//====> loop through the 2d array in reverse order (let i = dataLen -1; i>= 0; i--)
//====>//====> destruction the values of indexes of the 2d array [idx1,idx2]=data
//====>//====> if parent doesn't exist (!memo[idx2]) then
//====>//====>//====> create parent variable <- which receives the value of objStructure(idx2,'parent')
//====>//====>//====> create child variable <- by checking if child exists or not child <- !memo[idx1]? memo[idx1]: objStruc(idx1, 'child')
//====>//====>//====> if child was a parent before now? then convert to child ie child.type = 'child'
//====>//====>//====> push child to parent ie parent.push(child)
//====>//====>//====> mark entry of both parent and child ie memo[idx2]=parent && memo[idx1] = child
//====>//====> else if parent exist then
//====>//====>//====> create child variable by checking if child exists or not !memo[idx1]? memo[idx1]: objStruc(idx1, 'child')
//====>//====>//====> if child was a parent before now? then convert to child ie child.type = 'child'
//====>//====>//====> push child to parent ie memo[index2].children.push(child)
//====>//====>//====> if child doesn't exist in memo, mark entry of child ie !memo[index1] && (memo[index1] = child)
//====> return array of parent elements where ancestry starts ie   return Object.keys(memo).reduce((index1, index2) => {
//     if (memo[index2].type === "parent") index1.push(memo[index2]);
//     return index1;
//   }, []);

//helper function to create entity
const objectStructure = (value, type) => ({ value, type, children: [] });

//func to create relations
const hierarchicalRelations = (data, memo = {}) => {
  //iterate the array in reverse order
  for (let i = data.length - 1; i >= 0; i--) {
    //get the first and last entry of eachdata
    const [index1, index2] = data[i];

    //if there is no entry for parent
    if (!memo[index2]) {
      //create parent
      const parent = objectStructure(index2, "parent");

      //if (child)? "use it" : "create new child"
      const child = memo[index1]
        ? memo[index1]
        : objectStructure(index1, "Child");

      //if it was parent previously convert it to child before adding
      child.type = "child";

      //push child to parent
      parent.children.push(child);

      //mark the entry of parent and child
      memo[index2] = parent;
      memo[index1] = child;
    }
    // if parent alreadymemo
    else {
      //if (child)? "use it" : "create new child"
      const child = memo[index1]
        ? memo[index1]
        : objectStructure(index1, "child");

      //if it was parent previously convert it to child before adding
      child.type = "child";

      //add the child to the parent
      memo[index2].children.push(child);

      //if child does not exist in memo mark its entry
      !memo[index1] && (memo[index1] = child);
    }
  }

  //return array of parent elements where ancestry starts
  return Object.keys(memo).reduce((index1, index2) => {
    if (memo[index2].type === "parent") index1.push(memo[index2]);
    return index1;
  }, []);
};

const constructObject = (arr) => {
  return arr.reduce((acc, val) => {
    const [value, key] = val;
    acc[key] = value;
    // OR // acc[value] = key;
    return acc;
  }, {});
};

const entities = [
  ["lion", "cat"],
  ["cat", "mammal"],
  ["dog", "mammal"],
  ["fish", "animal"],
  ["shark", "fish"],
  ["mammal", "animal"],
  ["flying", "bird"],
  ["non-flying", "bird"],
  ["ostrich", "non-flying"],
  ["eagle", "flying"],
];
const data = [
  ["Rahul", 23],
  ["Rahul", 23],
  ["Rahul", 23],
  ["Vikky", 27],
  ["Sanjay", 29],
  ["Jay", 19],
  ["Dinesh", 21],
  ["Sandeep", 45],
  ["Umesh", 32],
  ["Rohit", 28],
];

// console.log(relations(entities));
// console.log(relations(data));

// console.log(constructObject(entities));
// console.log(constructObject(data));

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
describe("hierarchical()", () => {
  it("Converts 2d array into hierarchical object tree", () => {
    assert.deepEqual(hierarchicalRelations(entities), [
      {
        value: "bird",
        children: [
          {
            value: "non-flying",
            children: [
              {
                value: "ostrich",
                children: [],
                type: "child",
              },
            ],
            type: "child",
          },
          {
            value: "flying",
            children: [
              {
                value: "eagle",
                children: [],
                type: "child",
              },
            ],
            type: "child",
          },
        ],
        type: "parent",
      },
      {
        value: "animal",
        children: [
          {
            value: "mammal",
            children: [
              {
                value: "dog",
                children: [],
                type: "child",
              },
              {
                value: "cat",
                children: [
                  {
                    value: "lion",
                    children: [],
                    type: "child",
                  },
                ],
                type: "child",
              },
            ],
            type: "child",
          },
          {
            value: "fish",
            children: [
              {
                value: "shark",
                children: [],
                type: "child",
              },
            ],
            type: "child",
          },
        ],
        type: "parent",
      },
    ]);
  });
  it("Converts 2d array into hierarchical object tree", () => {
    assert.deepEqual(hierarchicalRelations(data), [
      {
        value: 19,
        children: [
          {
            value: "Jay",
            children: [],
            type: "child",
          },
        ],
        type: "parent",
      },
      {
        value: 21,
        children: [
          {
            value: "Dinesh",
            children: [],
            type: "child",
          },
        ],
        type: "parent",
      },
      {
        value: 23,
        children: [
          {
            value: "Rahul",
            children: [],
            type: "child",
          },
          {
            value: "Rahul",
            children: [],
            type: "child",
          },
          {
            value: "Rahul",
            children: [],
            type: "child",
          },
        ],
        type: "parent",
      },
      {
        value: 27,
        children: [
          {
            value: "Vikky",
            children: [],
            type: "child",
          },
        ],
        type: "parent",
      },
      {
        value: 28,
        children: [
          {
            value: "Rohit",
            children: [],
            type: "child",
          },
        ],
        type: "parent",
      },
      {
        value: 29,
        children: [
          {
            value: "Sanjay",
            children: [],
            type: "child",
          },
        ],
        type: "parent",
      },
      {
        value: 32,
        children: [
          {
            value: "Umesh",
            children: [],
            type: "child",
          },
        ],
        type: "parent",
      },
      {
        value: 45,
        children: [
          {
            value: "Sandeep",
            children: [],
            type: "child",
          },
        ],
        type: "parent",
      },
    ]);
  });
});

describe("polyfillMap()", () => {
  it("Converts 2d array into object", () => {
    assert.deepEqual(constructObject(data), {
      19: "Jay",
      21: "Dinesh",
      23: "Rahul",
      27: "Vikky",
      28: "Rohit",
      29: "Sanjay",
      32: "Umesh",
      45: "Sandeep",
    });
  });
  it("Converts 2d array into object", () => {
    assert.deepEqual(constructObject(entities), {
      cat: "lion",
      mammal: "dog",
      animal: "mammal",
      fish: "shark",
      bird: "non-flying",
      "non-flying": "ostrich",
      flying: "eagle",
    });
  });
});
mocha.run();
