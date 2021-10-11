// 给定一个二叉树，找出其最小深度。

// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

// 说明：叶子节点是指没有子节点的节点。
// 解析：与二叉树的最大深度同理，有递归、迭代两种方法
// 注意：二叉树的最小深度指的是根到叶子节点的最小距离，根没有左子树或右子树的时候要注意

// 方法一：递归
var minDepth = function(root) {
    function getDepth(node){
        if(node==null) return 0;
        if(node.left==null&&node.right!=null) return getDepth(node.right)+1;
        if(node.left!=null&&node.right==null) return getDepth(node.left)+1; 
        return Math.min(getDepth(node.left),getDepth(node.right))+1;
    }
    return getDepth(root);
};

// 方法二：迭代

