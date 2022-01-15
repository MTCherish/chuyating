// var a=23.36;
// console.log(Math.ceil(a))

// var x=3;
// var y="3";
// console.log(x+y);

// arr=new Array(4,5,8,1,6);
// s=0;
// for(a=1;a<arr.length;a++){
//     s+=arr[a];
// }
// console.log(s);

function rangeDay (day1, day2) {
    const result = []
     const dayTimes = 24*60*60*1000
     const startTime = day1.getTime()
     const range = day2.getTime() - startTime
     let total = 0   
     while (total <= range && range > 0) {
         result.push(new Date(startTime + total).toLocaleDateString().replace(/\//g, '-'))
         total += dayTimes
     }
    return result
 };
 console.log(rangeDay(new Date("2001-02-08"), new Date("2001-03-03")))
