function mergeSort(arr){
    let copyArr = [...arr]
    if(copyArr.length === 1){
        return copyArr;
    } else {
        let mid = Math.floor((copyArr.length - 1) / 2);
        let leftArr = copyArr.slice(0, mid + 1);
        let rightArr = copyArr.slice(mid + 1, copyArr.length);
        let sortedLeft = mergeSort(leftArr);
        let sortedRight = mergeSort(rightArr);

        return merge(sortedLeft, sortedRight);
        
    }
}

function merge(left,right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

function checkDuplicates(sortedArray) {
    return [...new Set(sortedArray)];
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
 

export {mergeSort, checkDuplicates, prettyPrint}