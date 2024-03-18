import {mergeSort, checkDuplicates} from "./sorting-array.mjs";

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

let sortedArray = mergeSort([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
let noDuplicaes = checkDuplicates(sortedArray)
console.log(sortedArray);
console.log(noDuplicaes)