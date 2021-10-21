// 1、方法中没有影响原数据的，不会改变原数组
var a = [1, 2, 3, 4];
function set(a) {
    console.log(a);//此处，arr直接赋予新值，和原数据没有关系，不会影响原数据
    a = [5, 6, 7, 8];
}
set(a);
console.log(a); // [1, 2, 3, 4]

// 2、方法中改变了原数据的，会影响原数组,包括单个的赋值，排序
var a = [1,2,3];
function test(arr){
    arr[0] = 4;//直接改变原数组的第一个数据，影响原数组，故改变了原数组。
    console.log(arr);//[4,2,3];
}
console.log(a);//在没有调用test之前是[1,2,3]
test(a);//输出[4,2,3]
console.log(a);//test之后[4,2,3]

// 值传参针对基本类型，引用传参针对引用类型，传参可以理解为复制变量值。
// 基本类型复制后俩个变量完全独立，之后任何一方改变都不会影响另一方；
// 引用类型复制的是引用（即指针），之后的任何一方改变都会映射到另一方。
var obj ={};
obj.name='褚雅婷';
function set(obj) {
   obj.name='马腾';
}
set(obj);
console.log(obj.name); // 马腾