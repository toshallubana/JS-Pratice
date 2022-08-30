class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let root;
function tree(data) {
    if(data == - 1) return null;
    root = new Node(data);
    if(root == null) {
        root = node;
        return root;
    }

    root.left = tree(root.left);
    root.right = tree(root.right);
    return root;
}

let arr = [1,3,7,-1,-1,11,-1,-1,5,17,-1,-1,-1];
let val;
for(let i = 0; i < arr.length; i++) {
    val = tree(arr[i]);
}
console.log(val);

// let root = null;
// root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.left.left = new Node(4);

// class buildTree {
//     constructor(){
//         this.root = null;
//     }

//     insert(data) {
//         if(data == - 1) return null;
//         let node = new Node(data);
//         if(this.root == null) {
//             this.root = node;
//             return this;
//         }
        
//         this.root.left = this.insert(node);
//         this.root.right = this.insert(node);
//         return this;
//     }
    
// }

// const tree = new buildTree();
// tree.insert(10);
// tree.insert(20);
// tree.insert(-1);
// tree.insert(40);
// console.log(root);