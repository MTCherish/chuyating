Promise.myAll=function(promises){
    let arr=new Array(promises.length),count=0;
    return new Promise((resolve,reject)=>{
        arr.forEach((val,index)=>{
            Promise.resolve(val).then(
                value=>{
                    arr[index]=value;
                    count++;
                    if(count==promises.length){
                        resolve(arr);
                    }
                },
                reason=>{
                    reject(reason);
                }
            )
        })
    })
}
Promise.myRace=function(promise){
    return new Promise((resolve,reject)=>{
        promises.forEach((val,index)=>{
            Promise.resolve(val).then(
                value=>{
                    resolve(value);
                },
                reason=>{
                    reject(reason);
                }
            )
        })
    })
}