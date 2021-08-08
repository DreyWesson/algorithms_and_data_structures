// This will be a Max Binary Heap
// For bubbleUp you can find parent index by doing Math.floor((idx - 1) / 2);
// For sinkDown you can find child indexes with (idx * 2 + 1) (idx * 2 + 2)
// Extra hint have insert and extractMax call bubbleUp and sinkDown respectively
// class BinaryHeap {
//   // https://eloquentjavascript.net/1st_edition/appendix2.html
//   // https://learnersbucket.com/tutorials/array/heap-data-structure-in-javascript/
//   constructor() {
//     this.values = [];
//   }
// }

function BinaryHeap() {
  let list = [];

  //Heapify
  this.maxHeapify = (arr, n, i) => {
    let largest = i;
    let l = 2 * i + 1; //left child index
    let r = 2 * i + 2; //right child index

    //If left child is smaller than root
    if (l < n && arr[l] > arr[largest]) {
      largest = l;
    }

    // If right child is smaller than smallest so far
    if (r < n && arr[r] > arr[largest]) {
      largest = r;
    }

    // If smallest is not root
    if (largest != i) {
      let temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;

      // Recursively heapify the affected sub-tree
      this.maxHeapify(arr, n, largest);
    }
  };

  //Insert Value
  this.insert = (num) => {
    const size = list.length;

    if (size === 0) {
      list.push(num);
    } else {
      list.push(num);

      //Heapify
      for (let i = parseInt(list.length / 2 - 1); i >= 0; i--) {
        this.maxHeapify(list, list.length, i);
      }
    }
  };

  //Remove value
  this.delete = (num) => {
    const size = list.length;

    //Get the index of the number to be removed
    let i;
    for (i = 0; i < size; i++) {
      if (list[i] === num) {
        break;
      }
    }

    //Swap the number with last element
    [list[i], list[size - 1]] = [list[size - 1], list[i]];

    //Remove the last element
    list.splice(size - 1);

    //Heapify the list again
    for (let i = parseInt(list.length / 2 - 1); i >= 0; i--) {
      this.maxHeapify(list, list.length, i);
    }
  };

  //Return max value
  this.findMax = () => list[0];

  //Remove max val
  this.deleteMax = () => this.delete(list[0]);

  //Remove and return max value
  this.extractMax = () => {
    const max = list[0];
    this.delete(max);
    return max;
  };

  //Size
  this.size = () => list.length;

  //IsEmpty
  this.isEmpty = () => list.length === 0;

  //Return head
  this.getList = () => list;
}

const BH = new BinaryHeap();
console.log(BH.insert(3));
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

describe("swap()", () => {
  it("switches values in an array when provided with 2 indexes.", () => {
    const BH = new BinaryHeap();
    const arr = [13, 2, 4];
    BH.swap(arr, 0, 1);
    assert.deepEqual(arr, [2, 13, 4]);
  });
});

describe("insert()", () => {
  it("Works. Hint use a bubbleup helper method in same class.", () => {
    const BH = new BinaryHeap();
    BH.insert(100);
    BH.insert(19);
    BH.insert(36);
    BH.insert(17);
    BH.insert(3);
    BH.insert(25);
    BH.insert(1);
    //         100
    //        /   \
    //      19      36
    //     / \     /  \
    //    17  3   25   1
    assert.deepEqual(BH.values, [100, 19, 36, 17, 3, 25, 1]);

    BH.insert(200);
    assert.deepEqual(BH.values, [200, 100, 36, 19, 3, 25, 1, 17]);
  });
});

describe("extractMax()", () => {
  it("returns max value.", () => {
    const BH = new BinaryHeap();
    BH.insert(36);
    BH.insert(19);
    BH.insert(100);
    assert.equal(BH.extractMax(), 100);
  });
  it("correctly sets tree after extracting max.", () => {
    const BH = new BinaryHeap();
    BH.insert(100);
    BH.insert(36);
    BH.insert(19);
    BH.insert(3);
    BH.insert(17);
    BH.insert(25);
    BH.insert(1);
    //         100
    //        /   \
    //      36      19
    //     / \     /  \
    //    3   17   25   1

    assert.equal(BH.extractMax(), 100);
    assert.deepEqual(BH.values, [36, 17, 25, 3, 1, 19]);
    //         36
    //        /   \
    //      17     25
    //     / \     /  \
    //    3   1   19

    BH.extractMax();
    assert.deepEqual(BH.values, [25, 17, 19, 3, 1]);
    BH.extractMax();
    assert.deepEqual(BH.values, [19, 17, 1, 3]);
    BH.extractMax();
    assert.deepEqual(BH.values, [17, 3, 1]);
    BH.extractMax();
    assert.deepEqual(BH.values, [3, 1]);
    BH.extractMax();
    assert.deepEqual(BH.values, [1]);
  });
  it("correctly sets tree after extracting max on tree with only ONE node.", () => {
    const BH = new BinaryHeap();
    BH.insert(100);
    assert.equal(BH.extractMax(), 100);
    assert.deepEqual(BH.values, []);
  });
});

mocha.run();
