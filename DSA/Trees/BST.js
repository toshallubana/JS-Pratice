// insertion O(logn)
// searching O(logn)

class Node {
    constructor(value){
        this.value = value
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        let current = this.root,found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            }else if(value > current.value){
                current = current.right;
            }else{
                return true;
            }
        }
        return false;
    }
    // BFS Breath first search

    //    10
    //  6    15
    // 3 8    20 
    // [10,6,15,3,8,20]
    BFS(){
        let data = [];
        let queue = [];
        node = this.root;
        queue.push(node);
        while(queue.length){
            node = queue.shift()
            data.push(node);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
    // DFS Deapth first search - PreOrder

    //    10
    //  6    15
    // 3 8    20 
    // [10,6,3,8,15,20]
    DFSPre(){
        let data = [];
        function traverse(node){
            data.push(node);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    // DFS Deapth first search - PostOrder

    //    10
    //  6    15
    // 3 8    20 
    // [3,8,6,20,15,10]
    DFSPost(){
        let data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node);
        }
        traverse(this.root)
        return data;
    }
    // DFS Deapth first search - InOrder

    //    10
    //  6    15
    // 3 8    20 
    // [3,6,8,10,15,20]
    DFSInOrder(){
        let data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node);
            if(node.right) traverse(node.right);
        }
        traverse(this.root)
        return data;
    }

}
const BST = new BinarySearchTree();
BST.insert(10);
BST.insert(6);
BST.insert(15);
BST.insert(3);
BST.insert(8);
BST.insert(20);
BST.BFS();
// BST.DFSPre();
BST.DFSPost();
