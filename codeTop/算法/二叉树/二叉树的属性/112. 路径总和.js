// 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。
// 叶子节点 是指没有子节点的节点。

// 递归+回溯
class Tree{
    constructor(data){
        this.data=data;
    }
}
class Create{
    constructor(arr){
        this.root=null;
        arr.forEach((item)=>{
            this.insert(item);
        })
    }
    insert(val){
        if(!this.root){
            this.root=new Tree(val);
        }else{
            this.insertNode(this.root,val);
        }
    }
    insertNode(node,val){
        if(node.data>val){
            if(!node.left){
                node.left=new Tree(val);
            }else{
                this.insertNode(node.left,val);
            }
        }else{
            if(!node.right){
                node.right=new Tree(val);
            }else{
                this.insertNode(node.right,val);
            }
        }
    }
}
var hasPathSum = function(root, targetSum) {
    const isTargetSum=(node,count)=>{
        if(count==0&&!node.left&&!node.right) return true;
        if(!node.left&&!node.right) return false;
        if(node.left&&isTargetSum(node.left,count-node.left.data)) return true;
        if(node.right&&isTargetSum(node.right,count-node.right.data)) return true;
        return false;
    }
    if(!root) return false;
    return isTargetSum(root,targetSum-root.data);
};
let tree=new Create([3,1,5,2,4,6]);
console.log(tree.root);
console.log(hasPathSum(tree.root,12));
