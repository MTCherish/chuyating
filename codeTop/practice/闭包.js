// function fn(){
//     for(var i=0;i<10;i++){
//         (function(i){
//             setTimeout(function(){
//                 console.log(i)
//             },i*1000)
//         })(i)
//     }
// }
// fn();

function fn(){
    for(let i=0;i<10;i++){
        setTimeout(()=>{
            console.log(i)
        },i*1000)
    }
}
fn();