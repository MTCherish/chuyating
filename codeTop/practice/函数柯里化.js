// function sum(...rest){
//     var _args=Array.prototype.slice.call(arguments);
//     var _adder=function(){
//         _args.push(...arguments);
//         return _adder;
//     }
//     _adder.toString=function(){
//         let sum=_args.reduce((a,b)=>a+b);
//         return sum;
//     }
//     return _adder;
// }
// let sumToNumber=Number.parseInt(sum(1)(2)(3))
// console.log(sumToNumber);

function sum(...rest){
    var _args=Array.prototype.slice.call(arguments);
    var _adder=function(){
        _args.push(...arguments);
        return _adder;
    }
    _adder.toString=function(){
        let sum=_args.reduce((a,b)=>a+b);
        return sum;
    }
    return _adder;
}
let sumToNumber=Number.parseInt(sum(1)(2));
console.log(sumToNumber);