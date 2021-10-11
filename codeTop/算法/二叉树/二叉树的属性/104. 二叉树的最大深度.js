// 给定一个二叉树，找出其最大深度。

// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

// 说明: 叶子节点是指没有子节点的节点。

// 示例：
// 给定二叉树 [3,9,20,null,null,15,7]，

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回它的最大深度 3 

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
        });
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
// 方法一：深度优先搜索，递归，本层最大深度=(左子树、右子树中的最大深度)+1
var maxDepth = function (root) {
    function getDepth(node) {
        if (!node) return 0;
        return Math.max(getDepth(node.left), getDepth(node.right)) + 1;
    }
    return getDepth(root);
};

//方法二：广度优先搜索，与二叉树的层序遍历同理
var maxDepth = function (root) {
    if(!root) return 0;
    let que = [], count = 0;
    que.push(root);
    while (que.length != 0) {
        let len = que.length;
        count++;
        while (len--) {
            node = que.shift();
            node.left&&que.push(node.left);
            node.right&&que.push(node.right);
        }
    }
    return count;
}
let tree = new Create([2,1,4,3,5,2,1]);
console.log(tree.root)
console.log(maxDepth(tree.root))