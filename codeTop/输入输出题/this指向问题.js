// var length = 10;
// function fn() {
//     return this.length+1;
//     //this指向window，this.length为undefined，this.length+1相当于undefined+1
//     // 隐式类型转换，Number(undefined)=NAN，NAN的任何操作都是NAN，所以返回NAN
// }
// var obj = {
//     length: 5,
//     test1: function () {
//         return fn();
//     }
// };
// obj.test2 = fn;
// //下面代码输出是什么
// console.log(obj.test1())//NAN
// console.log(fn() === obj.test2())//false
// console.log(fn(),obj.test2());//NAN,6
// // 这是test2的this.length=5，fn()与test2()的返回值不同，所以输出false


// var name = '123';
// var obj = {
//     name: '456',
//     getName: function () {
//         var printName=()=> {
//             console.log(this.name);
//         }
//         printName();
//     }
// }
// obj.getName();//undefined，函数的this指向windows,修改为箭头函数，或者call、apply、bind修改this指向

var x = 10;
 
function fn(){
    console.log(x);
}
 
function show(f){
    var x = 20;
    (function(){
       f(); 
    })()  
}
 
show(fn);