

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
        this.root = buildTree(array);  // ?!?!?!?!?!?!?!?!?
    }

    // ACCEPTS ARRAY WHEN INITIALIZED
    // HAS ROOT ATTRIBUTE WHICH IS WHAT BUILDTREE RETURNS




}

// FUNCTION TO SORT ARRAY 

function buildTree(array) {
    let start = 0;
    let end = array.length+1;
    let mid = Math.floor((start + end)/2);
}

let node = new Node(14);
console.log(node);