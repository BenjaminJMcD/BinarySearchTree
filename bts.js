

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
        this.root = this.buildTree(array, 0, array.length-1); 
    }

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

    insert(value) {

        let root = this.root;
        findLeaf(value, root);

        function findLeaf(value, node) {
            if (node == null) {
                node = new Node(value);
                return node;
            }
            
            if (value < node.data) {
                node.left = findLeaf(value, node.left);
            }
            else if (value > node.data) {
                node.right = findLeaf(value, node.right);
            }
            return node;
        }
    }

    deleteItem(value) {

        let root = this.root;
        findAndDelete(value, root);

        function findAndDelete (value, node) {
            if (node == null) {
                console.log("VALUE DOESN'T EXIST");
                return null;
            }
            
            if (value < node.data) {
                node.left = findAndDelete(value, node.left);
            }
            else if (value > node.data) {
                node.right = findAndDelete(value, node.right);
            }
            else if (value == node.data) {
                // DELETE LEAF
                if (!node.left && !node.right) {
                    return null;
                }
                // DELETE NODE W ONE CHILD
                else if (node.left == null) {
                    return node.right;
                }
                else if (node.right == null) {
                    return node.left;
                }
                // DELETE NODE WITH TWO CHILDREN
                else if (node.right && node.left) {
                    let current = node.right;
                    let parent = null;
                    while (current.left) {
                        parent = current;
                        current = current.left;
                        if (current.left == null) {
                            parent.left = current.right;
                            node.data = current.data;
                        }

                    }
                    return node;
                }
            }
            return node;
        }

    }

    find(value) {

        let root = this.root;

        function findNode(value, node) {
            if (node == null) {
                console.log("VALUE DOESN'T EXIST");
                return null;
            }
            if (value == node.data) {
                return node;
            }
            if (value > node.data) {
                return findNode(value, node.right);
            }
            if (value < node.data) {
                return findNode(value, node.left);
            }
        }
        return findNode(value, root);
    }

    levelOrder() {

        let levelOrderArr = [];

        // INITIALIZE QUEUE
        let queue = [];
        let root = this.root;

        queue.push(root);

        function breadthFirst(node) {
            
            // ADD NODE DATA TO ARRAY
            levelOrderArr.push(node.data);
            // REMOVE NODE FROM QUEUE
            queue.shift();

            // IF !NULL, ADD CHILDREN TO QUEUE
            if (node.left) {
            queue.push(node.left);
            }
            if (node.right) {
            queue.push(node.right);
            }
            // IF QUEUE, REPEAT WITH FIRST IN QUEUE
            if (queue.length != 0) {
            breadthFirst(queue[0]);
            }
        }
        breadthFirst(root);
        return levelOrderArr;
    }

    preOrder() {
        // ROOT, LEFT, RIGHT

        let preOrderArr = [];
        let root = this.root;

        function preOrderRecurse(node) {
            if (node == null) {return;}
            preOrderArr.push(node.data);
            preOrderRecurse(node.left);
            preOrderRecurse(node.right);
        }
        preOrderRecurse(root);
        return preOrderArr;
    }

    inOrder() {
        // LEFT, ROOT, RIGHT

        let inOrderArr = [];
        let root = this.root;

        function inOrderRecurse(node) {
            if (node == null) {return;}
            inOrderRecurse(node.left);
            inOrderArr.push(node.data);
            inOrderRecurse(node.right);
        }
        inOrderRecurse(root);
        return inOrderArr;
    }

    postOrder() {
        // LEFT, RIGHT, ROOT

        let postOrderArr = [];
        let root = this.root;

        function postOrderRecurse(node) {
            if (node == null) {return;}
            postOrderRecurse(node.left);
            postOrderRecurse(node.right);
            postOrderArr.push(node.data);
        }
        postOrderRecurse(root);
        return postOrderArr;
    }

    height(value) {

        // RETURNS NODES HEIGHT
        // HEIGHT == LONGEST PATH FROM NODE TO LEAF

        let node = this.find(value);
        if (node == null) {return null;}

        function maxDepth(node) {
            if (node == null) {
                return 0
            }
            else {
                let lDepth = maxDepth(node.left);
                let rDepth = maxDepth(node.right);

                if (lDepth > rDepth) {
                    return (lDepth+1);
                }
                else {
                    return (rDepth+1);
                }
            }
        }

        return maxDepth(node)
    }


}







// VISUALIZER OF TREE
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


let arr = [20,30,32,34,40,45,50,55,60,65,70,75,80,85];

let tree = new Tree(arr);

prettyPrint(tree.root);

console.log(tree.postOrder());

console.log(tree.height(50))

