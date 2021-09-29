// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

// 子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

//  
// 示例 1：

// 输入：nums = [10,9,2,5,3,7,101,18]
// 输出：4
// 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
// 示例 2：

// 输入：nums = [0,1,0,3,2,3]
// 输出：4
// 示例 3：

// 输入：nums = [7,7,7,7,7,7,7]
// 输出：1

// 动态规划五部曲
// 1、dp[i]代表在i这个元素之前(包括i)的最长子序列的长度
// 2、dp[i]由哪些状态可以推导出来，dp[i]是一个元素(比如j)从0遍历到i的最长子序列长度+1的最大值
//    状态转移方程：dp[i]=max(dp[i],dp[j]+1)
// 3、当nums长度大于1时，最长上升子序列(dp[i])至少初始化为1
// 4、由第2步可知，遍历顺序是从前往后
// 5、dp数组变化，不详细写了

var lengthOfLIS = function(nums) {
    let dp=new Array(nums.length).fill(1);
    let result=0;
    if(nums.length<=1) return nums.length;
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<i;j++){
            if(nums[i]>nums[j]){
                dp[i]=Math.max(dp[i],dp[j]+1);
            }
        }
        result=dp[i]>result?dp[i]:result;
    }
    return result;
};
let nums = [7,7,7,7,7,7,7];
console.log(lengthOfLIS(nums));