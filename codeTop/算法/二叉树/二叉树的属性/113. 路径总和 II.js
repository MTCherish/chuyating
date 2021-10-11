// 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

// 叶子节点 是指没有子节点的节点。

// 示例1：
// 输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// 输出：[[5,4,11,2],[5,8,4,5]]

// 示例2：
// 输入：root = [1,2,3], targetSum = 5
// 输出：[]
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
//同样是递归+回溯，在112的基础上，要遍历整个数，而不是找到一个就返回，所以递归不要有返回值，而是Push到数组里
var pathSum = function(root, targetSum) {
    const res=[];
    const isPathSum=(node,count,path)=>{
        if(count==0&&!node.left&&!node.right){
            res.push([...path]);
            return;
        }
        if(!node.left&&!node.right) return;
        if(node.left){
            path.push(node.left.data);
            isPathSum(node.left,count-node.left.data,path);
            path.pop();
        }
        if(node.right){
            path.push(node.right.data);
            isPathSum(node.right,count-node.right.data,path);
            path.pop();
        }
        return;
    }
    if(!root) return res;
    isPathSum(root,targetSum-root.data,[root.data]);
    return res;
};
let tree=new Create([3,6,1,2,4,5]);
console.log(pathSum(tree.root,6))