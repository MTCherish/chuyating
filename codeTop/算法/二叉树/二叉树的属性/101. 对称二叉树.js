// 给定一个二叉树，检查它是否是镜像对称的。

//  

// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
//  

// 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

//     1
//    / \
//   2   2
//    \   \
//    3    3

// 解法：递归，左右子树相等，左子树的右子树等于右子树的左子树
var isSymmetric = function(root) {
    function compareNode(left,right){
        if(left==null&&right==null) return true;
        if(left!=null&&right==null||left==null&&right!=null) return false;
        if(left.val!=right.val) return false;
        return compareNode(left.left,right.right)&&compareNode(left.right,right.left);
    }
    if(!root) return true;
    return compareNode(root.left,root.right);
};
