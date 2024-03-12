import mergeSort from "./sorting-array.mjs";

class Node {
    constructor (data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor(array) {
        this.root = buildTree(array);
    }
}

function buildTree(array) {
    let sortedArray = mergeSort(array);
    
}