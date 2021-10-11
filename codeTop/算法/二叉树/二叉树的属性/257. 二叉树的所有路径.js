// 给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。
// 叶子节点 是指没有子节点的节点。
class Tree {
    constructor(data) {
        this.data = data;
    }
}
class Create {
    constructor(arr) {
        this.root = null;
        arr.forEach((item) => {
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
        if (node.data > val) {
            if (!node.left) {
                node.left = new Tree(val);
            } else {
                this.insertNode(node.left, val);
            }
        } else {
            if (!node.right) {
                node.right = new Tree(val);
            } else {
                this.insertNode(node.right, val);
            }
        }
    }
}
var binaryTreePaths = function (root) {
    const res = [];
    const getPath = (node, path) => {
        if (!node.left && !node.right) {
            path += node.data;
            res.push(path);
            return;
        }
        path += node.data + '->';
        node.left && getPath(node.left, path);
        node.right && getPath(node.right, path);
        return;
    }
    if (!root) return res;
    getPath(root, '');
    return res;
};
let tree = new Create([3, 6, 1, 2, 4, 5, 3, 8]);
console.log(binaryTreePaths(tree.root));