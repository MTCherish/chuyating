var name = '123';
var obj = {
    name: '456',
    getName: function () {
        function printName () {
            console.log(this.name);
        }

        printName();
    }
}
obj.getName();//undefined，函数的this指向windows,修改位剪头函数，或者call、apply、bind修改this指向
