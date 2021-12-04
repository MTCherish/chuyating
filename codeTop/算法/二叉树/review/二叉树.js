// // // class Tree{
// // //     constructor(data){
// // //         this.data=data;
// // //         this.left=null;
// // //         this.right=null;
// // //     }
// // // }
// // // class Create{
// // //     constructor(arr){
// // //         this.root=null;
// // //         arr.forEach((val)=>{
// // //             this.insert(val);
// // //         })
// // //     }
// // //     insert(val){
// // //         if(!this.root){
// // //             this.root=new Tree(val);
// // //         }else{
// // //             this.inserNode(this.root,val);
// // //         }
// // //     }
// // //     inserNode(node,val){
// // //         if(node.data>val){
// // //             if(!node.left){
// // //                 node.left=new Tree(val);
// // //             }else{
// // //                 this.inserNode(node.left,val)
// // //             }
// // //         }else{
// // //             if(!node.right){
// // //                 node.right=new Tree(val);
// // //             }else{
// // //                 this.inserNode(node.right,val)
// // //             }
// // //         }
// // //     }
// // //      fn = () => {
// // //         const res=[];
// // //         function fn(node){
// // //             res.push(node.data);
// // //             if(node.left) fn(node.left);
// // //             if(node.right) fn(node.right);
// // //         }
// // //         fn(this.root);
// // //         return res;
// // //     }
// // //     fn1 = () => {
// // //         let res = [];
// // //        const fn2 = (val) => {
// // //             let que = [];
// // //             que.push(val);
// // //             while(que.length){
// // //                 let temp = que.shift();
// // //                 res.push(temp.data)
// // //                 temp.left && que.push(temp.left)
// // //                 temp.right && que.push(temp.right)
// // //             }
// // //         }
// // //         fn2(this.root)
// // //         return res ;
// // //     }
// // // }


// // // let tree = new Create([1,23,4,7,9,8]);



// // // console.log(tree.fn())
// // // console.log(tree.fn1())
// // let a={
// //     b:1,
// //     c:2,
// //     set(t){
// //         this.b=t
// //     }
// // }
// // a.set(4)
// // a.b=0
// // console.log(a)
// // Function.prototype.a = () => console.log(1);
// // console.log(Function.prototype.__proto__)



// function Foo() {
//     try {
//         console.log(this.a());
//     } catch (error) {
//          console.log(error);
//     }
//     Foo.a = function () {
//         console.log(1)
//     }

//     this.a = function () {
//         console.log(2)
//     }
// }
// Foo.prototype.a = function () {
//     console.log(3)
// }
// Foo.a = function () {
//     console.log(4)
// }

// Foo.a();
//  let obj = new Foo();
// obj.a();
// Foo.a();



var num = 4;
function fn() {
    console.log(num);
    console.log(this.num);
    var num = num - 1;
    console.log(num);
    this.num = this.num--
    console.log(this.num)
}
fn();


// function maxNum(numArr) {
//     for (var i = 0; i < numArr.length - 2; i++) {
//         // console.log(numArr[i + 1].toString().length)
//         if (numArr[i].toString().length == 1 && (numArr[i].toString()[0] == numArr[i + 1].toString()[0])) {
//             var k = numArr[i + 1];
//             numArr[i + 1] = numArr[i];
//             numArr[i] = k;
//         }
//     }
//     var newArr = numArr.reverse().join('');
//     return (parseInt(newArr))
// }
// console.log(maxNum([2,1,3,4]))
