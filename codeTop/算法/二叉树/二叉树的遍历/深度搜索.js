class Tree{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
class Create{
    constructor(arr){
        this.root=null;
        arr.forEach(item => {
            this.insert(item);
        });
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
    front(){
        const res=[];
        function fn(node){
            res.push(node.data);
            if(node.left) fn(node.left);
            if(node.right) fn(node.right);
        }
        fn(this.root);
        return res;
    }
}
let tree=new Create([3,1,5,2])
console.log(tree.front())