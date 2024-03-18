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
        root = new Node(key);
        return root;
    }

    if (key < root.value)
        root.left = insert(root.left, value);
    else if (value > root.value)
        root.right = insert(root.right, value);
  
    return root;
}

let sortedArray = mergeSort([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
let noDuplicates = checkDuplicates(sortedArray)

let root = buildTree(noDuplicates, 0, noDuplicates.length - 1)
// console.log(sortedArray);
console.log(noDuplicates)
console.log(root)