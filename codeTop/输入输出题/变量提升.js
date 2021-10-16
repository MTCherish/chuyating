// code1
console.log(a);//undefined
//函数声明提升到头部，声明没有赋值，输出undefined
if (true) {
    a = 1;
    //a赋值为1，此时块级作用域中a=1
    function a() { };//函数声明类似于var变量会提升到全局作用域或函数作用域以及快作用域头部
    //此时执行函数，执行完声明语句，全局作用域中的a被重写为1
    a = 5;
    //块级作用域中的a又被赋值为5
    console.log(a);//5
}
console.log(a);//1



// code2
console.log(a);//undefined
if (true) {
    console.log(a);//[Function: a]
    //函数提升，打印出函数
    function a() { };//执行函数声明语句，全局变量中的a赋值了一个函数
    a = 1;//块级作用域中的a被赋值为1
    a = 5;//块级作用域中的a被赋值为5
    console.log(a);//5
}
console.log(a);//[Function: a]

// 总结：1、函数作用域中的局部变量，只在函数作用域内有效，for,while,if等块级作用域的局部变量在外部也会保留
//      2、函数声明类似于var变量会提升到全局作用域或函数作用域以及快作用域头部
//      3、块级作用域中只有执行完函数声明语句之后，才会去重写对应的全局作用域上的全局变量
// https://blog.csdn.net/zyz511919766/article/details/7276089
// https://juejin.cn/post/6943031797022195742

