// var merge = function (intervals) {
//     if (intervals == null || !intervals.length) {
//         return intervals;
//     }
//     intervals.sort((a, b) => {
//         return a[0] - b[0];
//     });
//     let result = [];
//     let i = 0;
//     while (i < intervals.length) {
//         // 当前区间
//         let cur = [intervals[i][0], intervals[i][1]];
//         let j = i + 1;
//         // 如果下一个区间的开始位置还要小于等于当前区间的结束位置，则有重叠，
//         while (j < intervals.length && intervals[j][0] <= cur[1]) {
//             // 合并后的结束位置应该取两个区间结束位置的最大值
//             cur[1] = Math.max(cur[1], intervals[j][1]);
//             j++;
//         }
//         result.push(cur);
//         i = j;
//     }
//     return result;
// };
// var merge = function (intervals) {
//     const res = [];
//     intervals.sort((a, b) => a[0] - b[0]);
//     let prev = intervals[0];
//     for (let i = 1; i < intervals.length; i++) {
//         let cur = intervals[i];
//         if (prev[1] >= cur[0]) {
//             prev[1] = Math.max(prev[1], cur[1]);
//         } else {
//             res.push(prev);
//             prev = cur;
//         }
//     }
//     res.push(prev);
//     return res;
// };


var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0])
    let res = [],index = 0
    res.push(intervals[0])
    for(let i=1;i<intervals.length;i++){
        //先判相交 再判交集  扩充
        if(intervals[i][0]<=res[index][1]){
            if(intervals[i][1]>res[index][1]) res[index][1] = intervals[i][1]
        }else{
            res.push(intervals[i])
            index++
        }
    }
    return res
};


console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
