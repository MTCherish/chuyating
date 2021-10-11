// 给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。

// 树的序列化输入是用层序遍历，每组子节点都由 null 值分隔（参见示例）。

// 示例 1：
//      1
//    / | \
//   3  2  4
//  / \
//    5   6
// 输入：root = [1,null,3,2,4,null,5,6]
// 输出：[[1],[3,2,4],[5,6]]

// 示例 2：
// 输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// 输出：[[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]

// 解析：与二叉树的层序遍历同理，只不过left、right变成了children
var levelOrder = function(root) { 
    if(!root) return 0;
    let que=[],res=[];
    que.push(root);
    res.push([]);
    while(que.length!=0){
        let node=que.shift();
        res[res.length-1].push(node.val);
        for(let item of node.chidren){
            que.push(item);
        }
    }
    return res;
};