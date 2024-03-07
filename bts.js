

// SORTED ARRAY


// class Tree(array) -- root attribute (buildtree returns) + methods

// buildTree(array) {     ------ recursive - find middle set left/right
    // find root (middle)
    // create left/right arrays
    // find root (middle) -- make middle of left child of root, middle of right child of root
    // 
//}


// buildTree(arr, start, end)
// start = 0, end = arr.length+1
// mid = math.floor((start+end)/2)
// if start > end return null

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(array) {
        this.array = array;
        this.root = this.buildTree(array, 0, array.length);  // ?!?!?!?!?!?!?!?!?
    }

    // ACCEPTS ARRAY WHEN INITIALIZED
    // HAS ROOT ATTRIBUTE WHICH IS WHAT BUILDTREE RETURNS

    buildTree(array, start, end) {

        
        if (start > end) {
            return null;
        }
        
        let mid = Math.floor((start + end)/2);

        let node = new Node(arr[mid]);

        node.left = this.buildTree(array, start, mid-1);
        node.right = this.buildTree(array, mid+1, end);

        return node;

    }
}

// FUNCTION TO SORT ARRAY 

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


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//           5
//       3        8
//    1     4   6   9
//                    10

let node = new Node(14);
console.log(node);


// 1, 3, 4, 6, 7, 8, 10, 13, 14

//                 7
//            3         10
//          1  4       8  13
//              6           14

let tree = new Tree(arr);
console.log(tree.root);

console.log(prettyPrint(tree.root))