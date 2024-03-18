import {mergeSort, checkDuplicates, prettyPrint} from "./sorting-array.mjs";

class Node {
    constructor (data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(array) {
        this.root = buildTree(array);
    }
}


function buildTree(array, start, end) {
    if(start > end) {
        return null
    }

    let mid = parseInt((start + end) / 2);
    let node = new Node(array[mid]);

    node.left = buildTree(array, start, mid - 1);
    node.right = buildTree(array, mid + 1, end);
    return node;
}

function insert(root, value) {
    if (root == null) {
        root = new Node(value);
        return root;
    }

    if (value < root.data)
        root.left = insert(root.left, value);
    else if (value > root.data)
        root.right = insert(root.right, value);
  
    return root;
}

function deleteItem(root, value) {
    if (root === null) {
        return root;
    }

    if (root.data > value) {
        root.left = deleteItem(root.left, value);
        return root;
    } else if (root.data < value) {
        root.right = deleteItem(root.right, value);
        return root;
    }

    if (root.left === null) {
        let temp = root.right;
        root = null;
        return temp;
    } else if (root.right === null) {
        let temp = root.left;
        root = null;
        return temp;
    }

    else {
        let succParent = root;
     
        let succ = root.right;
        while (succ.left !== null) {
          succParent = succ;
          succ = succ.left;
        }

        if (succParent !== root) {
            succParent.left = succ.right;
          } else {
            succParent.right = succ.right;
          }
       
          // Copy Successor Data to root
          root.data = succ.data;
       
          succ = null;
          return root;
        }

}

const sortedArray = mergeSort([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
const noDuplicates = checkDuplicates(sortedArray)

const root = buildTree(noDuplicates, 0, noDuplicates.length - 1);
const deleted = deleteItem(root, 8);
// console.log(sortedArray);
// console.log(noDuplicates)
console.log(deleted);
