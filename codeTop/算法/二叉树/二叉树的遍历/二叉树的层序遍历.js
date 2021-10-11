class Tree {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class Create {
    constructor(arr) {
        this.root = null;
        arr.forEach(item => {
            this.insert(item);
        })
    }
    insert(val) {
        if (!this.root) {
            this.root = new Tree(val);
        } else {
            this.insertNode(this.root, val);
        }
    }
    insertNode(node, val) {
        if (node.data < val) {
            if (!node.right) {
                node.right = new Tree(val);
            } else {
                this.insertNode(node.right,val);
            }
        } else {
            if (!node.left) {
                node.left = new Tree(val);
            } else {
                this.insertNode(node.left,val);
            }
        }
    }
}
var levelOrder = function (node) {
    let res = [];
    let que = [];
    if(!node) return res;
    que.push(node);
    while (que.length != 0) {
        let len=que.length;
        res.push([]);
        for (let i = 0; i < len; i++) {
            node = que.shift();
            res[res.length - 1].push(node.data);
            if (node.left) que.push(node.left);
            if (node.right) que.push(node.right);
        }
    }
    return res;
};
let tree = new Create([4, 1, 5, 3, 2]);
console.log(tree.root.left);
console.log(levelOrder(tree.root));