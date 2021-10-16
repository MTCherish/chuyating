//基础知识
Object.prototype._proto_=null
console.log(Object.__proto__ === Function.prototype)//true
function Foo(){}
var foo = new Foo()
console.log(Foo.prototype.__proto__ === Object.prototype) //true 

// code1
Function.prototype.a = () => console.log(1);
Object.prototype.b = () => console.log(2);
function A() {};
var a = new A();
console.log(A.prototype.isPrototypeOf(a))//true
console.log(Function.prototype.isPrototypeOf(a))//false
console.log(Object.prototype.isPrototypeOf(a))//true
a.a();//报错
a.b();//输出2
// 解析：每个函数都是Function类型的实例，所以A是Function.prototype的实例，a是A的实例
//       a中不存在指向Function.prototype的指针，但是存在指向A.prototype的指针
//       即Function不是a的原型，A才是，Function是a的原型
//       也就是说A可以找到 Function.prototype 和 Object.prototype 的属性。而a只能找到 Object.prototype 的

// 对于 new 出来的对象 a 的属性，原型链查找的顺序应该是
// a 自身
// a.__proto__ 相当于 A.prototype
// A.prototype.__proto__ 相当于 Object.prototype
// Object.prototype.__proto__ 这个为 null，原型链查找到头。
// 对于 function 定义的函数 A 的属性，原型链查找顺序应该是

// A 自身
// A.__proto__ 相当于 Function.prototype
// Function.prototype.__proto__ 等于 Object.prototype
// Object.prototype.__proto__ 这个为 null，原型链查找到头。

// https://www.cnblogs.com/everlose/p/12930468.html
// https://blog.csdn.net/MFWSCQ/article/details/106502796


// code2
function Foo() {
    this.a = 1;
    // return {
    //   a: 4,
    //   b: 5,
    // };
  }
   
  Foo.prototype.a = 6;
  Foo.prototype.b = 7;
  Foo.prototype.c = 8;
  
  var o = new Foo();
  console.log(o.a);//4
  console.log(o.b);//5
  console.log(o.c);//undefined
// 解析:在构造函数中如果return的是一个对象, 则会直接返回这个对象,
//      如果return 的不是一个对象, 那在new时会忽略这个retrun, 转而返回this对象
//      如果没有return，返回1,7,8
//      如果没有this.a=1，就会返回6,7,8
//      本题关键在于new一个实例的具体过程

