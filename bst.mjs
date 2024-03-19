import {mergeSort, checkDuplicates} from "./sorting-array.mjs";

class Node {
    constructor (data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(array) {
        this.root = this.buildTree(array);
    }

    buildTree(array) {
        if(array.length < 1) {
            return null
        }
    
        let mid = Math.floor(array.length / 2);
        let node = new Node(array[mid]);
    
        node.left = this.buildTree(array.slice(0, mid));
        node.right = this.buildTree(array.slice(mid + 1));
        return node;
    }

    prettyPrint(node = this.root, prefix = "", isLeft = true){
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
          this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    };

    insert(value) {
        this.root = this._insert(this.root, value);
    }
    
    _insert(root, value) {
        if (root === null) {
            return new Node(value);
        }
    
        if (value < root.data) {
            root.left = this._insert(root.left, value);
        } else if (value > root.data) {
            root.right = this._insert(root.right, value);
        }
    
        return root;
    }

    
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

function find(root, value) {
    if (root === null || root.data === value) {
        return root;
      }

      // Access root's children if value not found; 
      if (value < root.data) {
        return find( root.left, value);
      }
      return find( root.right, value); 
}

function levelOrderIterative(root, callback) {
    if (!root) return [];
  
    const queue = [root];
    console.log(queue)
    const result = [];
  
    while (queue.length > 0) {
      const currentNode = queue.shift();
      result.push(currentNode.data);
  
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
  
      if (callback) {
        callback(currentNode.data);
      }
    }
    return result;
}  

const sortedArray = mergeSort([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
const noDuplicates = checkDuplicates(sortedArray)

const myTree = new Tree(noDuplicates);
myTree.insert(9)
// const deleted = myTree.deleteItem(8);
// const findValue = find(root, 323)
// const levelOrder = levelOrderIterative(root)
myTree.prettyPrint()

// console.log(sortedArray);
// console.log(noDuplicates)
// console.log(inserted)
// console.log(deleted);
// console.log(findValue)
// console.log(myTree)
