// 给定一个未经排序的整数数组，找到最长且 连续递增的子序列，并返回该序列的长度。

// 连续递增的子序列 可以由两个下标 l 和 r（l < r）确定，如果对于每个 l <= i < r，都有 nums[i] < nums[i + 1] ，那么子序列 [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] 就是连续递增子序列。

//  

// 示例 1：

// 输入：nums = [1,3,5,4,7]
// 输出：3
// 解释：最长连续递增序列是 [1,3,5], 长度为3。
// 尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为 5 和 7 在原数组里被 4 隔开。 
// 示例 2：

// 输入：nums = [2,2,2,2,2]
// 输出：1
// 解释：最长连续递增序列是 [2], 长度为1。

// 动态规划五部曲
// 1、dp[i]表示从0-i1最长连续递增序列是dp[i]
// 2、本题与300区别就是连续，dp[i+1]状态由dp[i]决定
//    状态转移方程：dp[i+1]=dp[i]+1
// 3、当nums长度大于1时，最长上升子序列(dp[i])至少初始化为1
// 4、因为只有i一个变量，即只有一层循环，且从前往后
// 5、dp数组变化

// var findLengthOfLCIS = function(nums) {
//     let dp=new Array(nums.length).fill(1);
//     let result=0;
//     if(nums.length<=1) return nums.length;
//     for(let i=0;i<nums.length;i++){
//         if(nums[i+1]>nums[i]){
//             dp[i+1]=dp[i]+1;
//         }
//         result=dp[i+1]>result?dp[i+1]:result;
//     }
//     return result;
// };
// let nums = [1];
// console.log(findLengthOfLCIS(nums))
var lengthOfLongestSubstring = function(s) {
    let arr = [];
    let max = s[0];
    for (let i = 0; i < s.length; i ++) {
        //如果之前存在，就删除，知道没有为止
        if(arr.indexOf(s[i]) !== -1) {
            arr.splice(0, arr.indexOf(s[i]) + 1);
        }
        //加入当前元素
        arr.push(s[i]);
        //取最大
        if(arr.length>max.length){
            max=arr.join("")
        };
    }
    return max;
};
console.log(lengthOfLongestSubstring("bbbbb"))
// function re(dataString){//递归调用，获取最长子串
//     if(dataString.length){
//         for(var i=0;i<dataString.length;i++){
//             var currentString=dataString.substring(i,i+1);//当前一个字符
//             var lastString=dataString.substring(i+1,dataString.length);//当前字符得后续字符
//             var p=lastString.indexOf(currentString);//判断后续字符是否存在是否
//             if(p==-1){
//                 return currentString+re(lastString);//返回无重复字符
//             }else{
//                 return re(dataString.substring(i,p+1));//获取无重复字符得后续子串
//             }
//         };
//     }else{
//         return "";
//     }
// };
// console.log(re("pwwkew"))