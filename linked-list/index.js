// Implement classes Node and Linked List

class Node {
  // Helpful sites
  // https://satishnaikawadi.me/posts/build-a-linked-list-in-javascript
  // https://www.geeksforgeeks.org/implementation-linkedlist-javascript/
  // https://codeburst.io/linked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3
  // https://medium.com/swlh/how-to-create-a-linked-list-in-javascript-1bfef32c7722
  // https://flaviocopes.com/javascript-data-structures-linked-lists/
  constructor(data, nextPointer) {
    this.data = data;
    this.nextPointer = nextPointer;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  //   the first value in a linkedlist is called head
  //   new value of head and previous head becomes the pointer
  unshift(data) {
    // create a new node
    const newHead = new Node(data, this.head);
    // increment list length
    this.length++;
    // change head
    this.head = newHead;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let currentNode = this.head;
    // when u come across a null pointer return it as the last Node
    while (currentNode && currentNode.nextPointer)
      currentNode = currentNode.nextPointer;
    return currentNode;
  }
  clear() {
    this.length = 0;
    this.head = null;
  }
  shift() {
    if (!this.head) return;
    // decrement list
    this.length--;
    // swap head
    let oldHead = this.head;
    this.head = this.head.nextPointer;
    return oldHead;
  }
  pop() {
    // if theres only one element unshift
    if (this.length === 1) return this.shift();
    // list is empty
    if (!this.head) return;

    const tail = this.getLast();
    let currentHead = this.head;

    //	Gets the 2nd to d last value
    while (currentHead.nextPointer !== tail)
      currentHead = currentHead.nextPointer;

    // Now let the last pointer be null
    currentHead.nextPointer = null;
    // and decrement the length of the list
    this.length--;
    return tail;
  }
  push(data) {
    // if list is empty unshift()
    if (!this.head) return this.unshift(data);
    let tail = this.getLast();
    // get the tail pointer to point to the new data and create null pointer
    tail.nextPointer = new Node(data, null);
    // increment list length to reflect
    this.length++;
  }
  get(index) {
    // Time complexity O(N)
    let counter = 0;
    let current = this.head;

    // handle edge cases
    if (index >= this.length || index < 0) return null;

    // while current still lesser than given index
    while (counter < index) {
      current = current.nextPointer;
      counter++;
    }
    return current;
  }
  set(index, data) {
    if (!this.get(index)) return false;
    let node = this.get(index);
    node.data = data;
    return true;
  }
  remove(index) {
    // Time complexity O(N)
    if (!this.get(index)) return false;

    if (index === 0) return this.shift();

    const previousNode = this.get(index - 1),
      nodeToRemove = this.get(index);

    previousNode.nextPointer = previousNode.nextPointer.nextPointer;
    this.length--;
    return nodeToRemove;
  }
  insert(index, data) {
    // Time complexity O(N)
    //     handle edge cases
    if (index >= this.length || index < 0) return false;
    if (index === 0) {
      this.unshift(data);
      return true;
    }
    let previousNode = this.get(index - 1),
      currentNode = this.get(index);
    previousNode.nextPointer = new Node(data, currentNode);
    this.length++;
    return true;
  }
}

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

mocha.setup("bdd");
const { assert } = chai;

describe("A Node", () => {
  it("has properties 'data' and 'next'", () => {
    const node = new Node(1, 2);
    assert.equal(node.data, 1);
    assert.equal(node.nextPointer, 2);
  });
});

describe("unshift(data)", () => {
  it("adds new node to start of list by correctly setting head and updating length.", () => {
    const l = new LinkedList();
    l.unshift("Kevin");
    assert.equal(l.head.data, "Kevin");
    assert.equal(l.length, 1);
  });

  it("Does not overwrite old head.", () => {
    const l = new LinkedList();
    l.unshift("Kevin");
    assert.equal(l.head.data, "Kevin");
    assert.equal(l.length, 1);

    l.unshift("eric");
    assert.equal(l.head.data, "eric");
    assert.equal(l.head.nextPointer.data, "Kevin");
    assert.equal(l.length, 2);
  });
});

describe("getFirst()", () => {
  it("returns the first node in linked list.", () => {
    const l = new LinkedList();
    assert.equal(l.getFirst(), null);
    l.unshift(1);
    assert.equal(l.getFirst().data, 1);
    l.unshift(2);
    assert.equal(l.getFirst().data, 2);
  });
});

describe("getLast()", () => {
  it("returns the last node in linked list.", () => {
    const l = new LinkedList();
    l.unshift(1);
    assert.equal(l.getLast().data, 1);
    l.unshift(2);
    assert.equal(l.getLast().data, 1);
  });
  it("does not crash AND returns null on empty list.", () => {
    const l = new LinkedList();
    assert.equal(l.getLast(), null);
  });
});

describe("clear()", () => {
  it("clears out the linked list and resets length to 0.", () => {
    const l = new LinkedList();
    assert.equal(l.length, 0);
    l.unshift(1);
    l.unshift(1);
    l.unshift(1);
    assert.equal(l.length, 3);
    l.clear();
    assert.equal(l.length, 0);
    assert.equal(l.head, null);
  });
});

describe("shift()", () => {
  it("removes AND returns first node, updates length for linked list w/ one node.", () => {
    const l = new LinkedList();
    l.unshift(1);
    assert.equal(l.shift().data, 1);
    assert.equal(l.length, 0);
    assert.equal(l.getFirst(), null);
  });
  it("removes the first node and returns it, decreases length of list.", () => {
    const l = new LinkedList();
    l.unshift(3);
    l.unshift(2);
    l.unshift(1);
    assert.equal(l.shift().data, 1);
    assert.equal(l.length, 2);
    assert.equal(l.getFirst().data, 2);
    assert.equal(l.shift().data, 2);
    assert.equal(l.length, 1);
    assert.equal(l.getFirst().data, 3);
  });
  it("does not crash AND returns null on empty list. Does not decrease length.", () => {
    const l = new LinkedList();
    assert.equal(l.shift(), null);
    assert.equal(l.length, 0);
  });
});

describe("pop()", () => {
  it("removes AND returns last node, decreases length.", () => {
    const l = new LinkedList();
    l.unshift("b");
    l.unshift("a");
    assert.equal(l.pop().data, "b");
    assert.equal(l.length, 1);
    assert.equal(l.head.data, "a");
  });
  it("removes AND returns last node, decreases length on linked-list w/ one node.", () => {
    const l = new LinkedList();
    l.unshift(1);
    assert.equal(l.pop().data, 1);
    assert.equal(l.head, null);
    assert.equal(l.length, 0);
  });
  it("Returns null on empty list AND does not decrease length.", () => {
    const l = new LinkedList();
    assert.equal(l.pop(), null);
    assert.equal(l.length, 0);
  });
});

describe("push(data)", () => {
  it("adds to the end of the list and increases length.", () => {
    const l = new LinkedList();
    l.unshift(1);
    l.push(2);
    assert.equal(l.length, 2);
    assert.equal(l.getLast().data, 2);
  });
  it("adds to end of empty list and increases length without crashing.", () => {
    const l = new LinkedList();
    l.push(1);
    assert.equal(l.length, 1);
    assert.equal(l.getLast().data, 1);
    assert.equal(l.getFirst().data, 1);
  });
});

describe("get(index)", () => {
  it("returns null on negative or out of bounds index.", () => {
    const l = new LinkedList();
    l.push("Kevin");
    assert.equal(l.get(-1), null);
    assert.equal(l.get(100), null);
  });
  it("returns the node at given index.", () => {
    const l = new LinkedList();
    l.push("Kevin");
    l.push("is");
    l.push("kewl");

    assert.equal(l.get(0).data, "Kevin");
    assert.equal(l.get(1).data, "is");
    assert.equal(l.get(2).data, "kewl");
  });
});

describe("set(index, data)", () => {
  it("returns falsy value on out of bounds or negative index.", () => {
    const l = new LinkedList();
    l.push(2);
    assert.isNotOk(l.set(-1, "meow"));
    assert.isNotOk(l.set(100, "meow"));
  });
  it("Updates node and returns true.", () => {
    const l = new LinkedList();
    l.push(2);
    l.push(4);
    assert.equal(l.set(1, "meow"), true);
    assert.equal(l.getLast().data, "meow");
  });
});

describe("remove(index)", () => {
  it("returns falsy value on out of bounds OR negative index.", () => {
    const l = new LinkedList();
    l.push(2);
    assert.isNotOk(l.remove(-1));
    assert.isNotOk(l.remove(100));
  });
  it("removes and returns node at given index. Decreases length.", () => {
    const l = new LinkedList();
    l.push(1);
    l.push(2);
    l.push(3);
    l.push(4);

    assert.equal(l.get(3).data, 4);
    assert.equal(l.remove(3).data, 4);
    assert.isNotOk(l.get(3));
    assert.equal(l.length, 3);
  });
  it("removes node at index 0, decreases length, and returns removed node.", () => {
    const l = new LinkedList();
    l.push(1);
    l.push(2);
    l.push(3);
    l.push(4);

    assert.equal(l.get(0).data, 1);
    assert.equal(l.remove(0).data, 1);
    assert.equal(l.get(0).data, 2);
    assert.equal(l.length, 3);
  });
});

describe("insert(index, data)", () => {
  it("returns false on index greater than length or negative index.", () => {
    const l = new LinkedList();
    assert.equal(l.insert(1, "meow"), false);
    assert.equal(l.insert(-10, "meow"), false);
    assert.equal(l.length, 0);
  });
  it("inserts new node at given index, increases length, and returns true.", () => {
    const l = new LinkedList();
    l.push(1);
    l.push(2);
    l.push(3);
    l.push(4);
    assert.equal(l.insert(2, "kevin"), true);
    assert.equal(l.get(0).data, 1);
    assert.equal(l.get(1).data, 2);
    assert.equal(l.get(2).data, "kevin");
    assert.equal(l.get(3).data, 3);
    assert.equal(l.get(4).data, 4);
    assert.equal(l.length, 5);
  });
  it("inserts node at 0 index correctly, increases length, returns true.", () => {
    const l = new LinkedList();
    l.push(1);
    l.push(2);
    l.push(3);
    assert.equal(l.insert(0, "kevin"), true);
    assert.equal(l.get(0).data, "kevin");
    assert.equal(l.get(1).data, 1);
    assert.equal(l.get(2).data, 2);
    assert.equal(l.get(3).data, 3);
    assert.equal(l.length, 4);
  });
});

mocha.run();
