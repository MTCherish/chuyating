// 给定一棵树的前序遍历 preorder 与中序遍历  inorder。请构造二叉树并返回其根节点。
// 示例1：
// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]

// 示例2：
// Input: preorder = [-1], inorder = [-1]
// Output: [-1]

var buildTree = function(preorder, inorder) {
    if(!preorder.length) return null;
    let root=new TreeNode(preorder[0]);
    let mid=inorder.findIndex((value)=>value==root.data);
    root.left=buildTree(preorder.slice(1,mid+1),inorder.slice(0,mid));
    root.right=buildTree(preorder.slice(mid+1,preorder.length),inorder.slice(mid+1,inorder.length));
    return root;
};