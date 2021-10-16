// 根据一棵树的中序遍历与后序遍历构造二叉树。
// 例如，给出

// 中序遍历 inorder = [9,3,15,20,7]
// 后序遍历 postorder = [9,15,7,20,3]
// 返回如下的二叉树：

//     3
//    / \
//   9  20
//     /  \
//    15   7

var buildTree = function(inorder, postorder) {
    if(!postorder.length) return null;
    let root=new TreeNode(postorder[postorder.length-1]);
    let mid=inorder.findIndex((val)=>val==root.data);
    root.left=buildTree(inorder.slice(0,mid),postorder.slice(0,mid));
    root.right=buildTree(inorder.slice(mid+1,inorder.length),postorder,slice(mid,postorder.length-1));
    return root;
};