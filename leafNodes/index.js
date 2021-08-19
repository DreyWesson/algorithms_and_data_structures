function search_leaf(tree) {
  if (!tree.left && !tree.right) return tree.value;
  if (tree.left) {
    let l = search_leaf(tree.left);
    if (l) console.log(l);
  }
  if (tree.right) {
    let l = search_leaf(tree.right);
    if (l) console.log(l);
  }
}

search_leaf({
  value: 8,
  left: {
    value: 3,
    left: {
      value: 1,
      left: null,
      right: null,
    },
    right: {
      value: 6,
      left: {
        value: 4,
        left: null,
        right: null,
      },
      right: {
        value: 7,
        left: null,
        right: null,
      },
    },
  },
  right: {
    value: 10,
    left: null,
    right: {
      value: 14,
      left: {
        value: 13,
        left: null,
        right: null,
      },
      right: null,
    },
  },
});

function binary_search_tree(array) {
  if (array.length === 1) {
    console.log(array[0]);
    return;
  }
  const base = array[0];
  const right = array.findIndex((n) => n > base);
  binary_search_tree(array.slice(1, right));
  binary_search_tree(array.slice(right));
}

binary_search_tree([890, 325, 290, 530, 965]);
