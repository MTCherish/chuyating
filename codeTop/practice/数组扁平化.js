function flattern(arr){
    let result=[];
    arr.map((item)=>{
        if(Array.isArray(item)){
            result=result.concat(flattern(item));
        }else{
            result.push(item);
        }
    })
    return result;
}
console.log(flattern([1,[2,3,[4]],5]))