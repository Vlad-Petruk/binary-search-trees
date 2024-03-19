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

    deleteItem(value) {
        this.root = this._deleteItem(this.root, value)
    }

    _deleteItem(root, value) {
        if (root === null) {
            return root;
        }
    
        if (root.data > value) {
            root.left = this._deleteItem(root.left, value);
            return root;
        } else if (root.data < value) {
            root.right = this._deleteItem(root.right, value);
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

    find(value) {
        return this._find(this.root, value)
    }

    _find(root, value) {
        if (root === null || root.data === value) {
            return root;
          }
    
          // Access root's children if value not found; 
          if (value < root.data) {
            return this._find( root.left, value);
          }
          return this._find( root.right, value); 
    }

    levelOrder(callback) {
        if (!callback) {
          const result = [];
          if (!this.root) return result;
    
          const queue = [this.root];
          while (queue.length > 0) {
            const node = queue.shift();
            result.push(node.data);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
          }
          return result;
        } else {
          if (!this.root) return;
          const queue = [this.root];
          while (queue.length > 0) {
            const node = queue.shift();
            callback(node);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
          }
        }
    } 

    preOrder(callback) {
        return this._preOrder(this.root, callback)
    }

    _preOrder(node, callback) {
        const result = [];
        if(!node) return result;
        if(!callback) {
            result.push(node.data)

            result.push(...this._preOrder(node.left));
            result.push(...this._preOrder(node.right));

            return result;
        } else { 
            callback(node);
            this._preOrder(node.left, callback);
            this._preOrder(node.right, callback);
        }
    }

    inOrder(callback) {
        return this._inOrder(this.root, callback)
    }

    _inOrder(node, callback) {
        const result = [];
        if(!node) return result;
        if(!callback) {
            result.push(...this._inOrder(node.left));
            result.push(node.data)
            result.push(...this._inOrder(node.right));

            return result;
        } else { 
            this._inOrder(node.left, callback);
            callback(node);
            this._inOrder(node.right, callback);
        }
    }

    postOrder(callback) {
        return this._postOrder(this.root, callback)
    }

    _postOrder(node, callback) {
        const result = [];
        if(!node) return result;
        if(!callback) {
            result.push(...this._postOrder(node.left));
            result.push(...this._postOrder(node.right));
            result.push(node.data)

            return result;
        } else { 
            this._postOrder(node.left, callback);
            this._postOrder(node.right, callback);
            callback(node);
        }
    }
}


const sortedArray = mergeSort([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
const noDuplicates = checkDuplicates(sortedArray)

const myTree = new Tree(noDuplicates);
myTree.insert(9)
myTree.deleteItem(8);
// const findValue = myTree.find(324)
// const levelOrderS = myTree.levelOrder()
const preorder = myTree.postOrder()
myTree.prettyPrint()

// console.log(sortedArray);
// console.log(noDuplicates)
// console.log(findValue)
// console.log(levelOrderS)
console.log(preorder)
