// 给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。

//  

// 示例：

// 输入：
// A: [1,2,3,2,1]
// B: [3,2,1,4,7]
// 输出：3
// 解释：
// 长度最长的公共子数组是 [3, 2, 1] 

var findLength = function(nums1, nums2) {
    let dp=new Array(nums1.length+1).fill(0).map(x=>new Array(nums2.length+1).fill(0));
    let result=0;
    for(let i=1;i<=nums1.length;i++){
        for(let j=1;j<=nums2.length;j++){
            if(nums1[i-1]==nums2[j-1]){
                dp[i][j]=dp[i-1][j-1]+1;
            }
            result=result>dp[i][j]?result:dp[i][j];
        }
    }
    return result;
};
let nums1=[1,2,3,2,1],nums2=[3,2,1,4,7];
console.log(findLength(nums1,nums2));