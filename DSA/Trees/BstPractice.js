class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    insert(data) {
        if(data == -1) return null;
        let newNode = new Node(data);
        if(this.root == null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true) {
            if(data == current.data) return undefined;
            if(data < current.data) {
                if(current.left == undefined) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }else {
                if(current.right == undefined) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(data) {
        if(this.root == null) return "Tree is Empty";
        let current = this.root, found = false;
        while(current && !found) {
            if(data < current.data) {
                current = current.left;
            }else if(data > current.data) {
                current = current.right;
            }else {
                return `Tree Node Found ${current.data}`;
            }
        }
        return "Not Found";
    }

    // BFS
    BFS() {
        let data = [];
        let queue = [];
        let node = this.root;
        queue.push(node);
        while(queue.length) {
            node = queue.shift();
            data.push(node);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

    // DFS

    DFSPre() {
        let data = [];
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node);
        }
        traverse(this.root);
        return data;
    }

    // 

    DFSInOrder() {
        let data = [];
        function traverse(node) {
            if(node.left) traverse(node.left);
            data.push(node);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}

let tree = new BST();
tree.insert(10);
tree.insert(20);
tree.insert(17);
tree.insert(18);
tree.insert(30);
tree.insert(8);
tree.insert(7);
tree.insert(9);
// console.log(tree.BFS());
// console.log(tree.DFSPre());
console.log(tree.DFSInOrder());
// console.log(tree.find(22));
// console.log(tree);  