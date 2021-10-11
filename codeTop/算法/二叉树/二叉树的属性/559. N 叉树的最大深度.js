// 解析：与二叉树的最大深度一样，有递归、迭代两种算法
// 一、递归
var maxDepth=function(root){
    function getDepth(node){
        if(!root) return 0;
        let depth=0;
        for(let item of node.children){
            depth=Math.max(depth,getDepth(item))
        }
        return depth+1;
    }
    return getDepth(root);
}
// 二、迭代，广度优先
var maxDepth=function(root){
    if(!root) return 0;
    let que=[],count=0;
    que.push(root);
    while(que.length!=0){
        let len=que.length;
        count++;
        while(len--){
            let node=que.shift();
            for(let item of node.children){
                item&&que.push(item);
            }
        }
    }
    return count;
}