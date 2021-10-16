// function thorttle(fn,delay){
//     var startTime=0;
//     return function(){
//         nowTime=new Date();
//         if(nowTime-startTime>delay){
//             fn();
//             startTime=nowTime;
//         }
//     }
// }

// function debounce(fn,delay){
//     let timer=null;
//     return function(...arguments){
//         let that=this;
//         if(timer) clearTimeout(timer);
//         timer=setTimeout(()=>{
//             fn.apply(that,arguments);
//         },delay)
//     }
// }

function thorttle(fn,delay){
    let startTime=0;
    return function(){
        nowTime=new Date();
        if(nowTime-startTime>delay){
            fn();
            startTime=nowTime;
        }
    }
}
function debounce(fn,delay){
    let timer=null;
    return function(...arguments){
        let that=this;
        if(timer) clearTimeout(timer);
        timer=setTimeout(()=>{
            fn.apply(that,arguments);
        },delay)
    }
}