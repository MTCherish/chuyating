let arr=[1,1,2,2,3]
let newArr=arr.reduce((pre,cur)=>{
    if(!pre.includes(cur)){
        return pre.concat(cur);
    }else{
        return pre;
    }
})
console.log(newArr);