

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
                console.log("LESS");
                node.left = findLeaf(value, node.left);
            }
            else if (value > node.data) {
                console.log("GREATER");
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
                console.log("doesn't exist");
                return node;
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

        // ONE CHILD --- POINT PARENT TO CHILD OF REMOVED;

        // TWO CHILDS --- REPLACE WITH NEXT BIGGEST CHILD/GRANDCHILD
        //       (( RIGHT NODE CHILD W NO LEFT NODE ))


        // RIGHT NODE - LEFT MOST BRANCH WITH NO LEFT NODE (RECURSIVE)
        // NODE = LEFT MOST NO LEFT

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

tree.deleteItem(20)

prettyPrint(tree.root);