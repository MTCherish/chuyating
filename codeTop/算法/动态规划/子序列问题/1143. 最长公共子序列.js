// 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。

// 一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。

// 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
// 两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。

//  

// 示例 1：

// 输入：text1 = "abcde", text2 = "ace" 
// 输出：3  
// 解释：最长公共子序列是 "ace" ，它的长度为 3 。
// 示例 2：

// 输入：text1 = "abc", text2 = "abc"
// 输出：3
// 解释：最长公共子序列是 "abc" ，它的长度为 3 。
// 示例 3：

// 输入：text1 = "abc", text2 = "def"
// 输出：0
// 解释：两个字符串没有公共子序列，返回 0 

// 动态规划五部曲
// 1、dp[i][j]表示长度[0,i-1]的text1与长度[0-j-1]的text2最长公共子序列为dp[i][j]
// 2、当text1[i-1]==text2[j-1]时，dp[i][j]=dp[i-1][j-1]+1
//    否则，dp[i][j]=max(dp[i-1][j],dp[i][j-1])
// 3、当其中一个字符串长度为0时，最长公共子序列长度一定为0
//    所以dp[i][0]、dp[0][j]都初始化为0
// 4、由第2步可知，遍历顺序是从前往后
// 5、dp数组变化，不详细写了
var longestCommonSubsequence = function(text1, text2) {
    let s1=text1.length,s2=text2.length;
    let dp=new Array(s1+1).fill(0).map(x=>new Array(s2+1).fill(0));
    for(let i=1;i<=s1;i++){
        for(let j=1;j<=s2;j++){
            if(text1[i-1]==text2[j-1]){
                dp[i][j]=dp[i-1][j-1]+1;
            }else{
                dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1]);
            }
        }
    }
    return dp[s1][s2];
};
text1 = "abc", text2 = "abc"
console.log(longestCommonSubsequence(text1,text2));