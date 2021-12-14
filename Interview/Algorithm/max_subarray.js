function maxSubArray1(array) {
    const dp = [...array];

    for (let i = 1; i < dp.length; i++) {
        dp[i] = Math.max(dp[i], dp[i - 1] + dp[i])
    }
    return Math.max(...dp)
}
function maxSubArray(array) {
    let currentMax = 0;
    let maxTillNow = -Infinity;
    array.forEach(item => {
        currentMax = Math.max(item + currentMax, item);
        maxTillNow = Math.max(maxTillNow, currentMax)
    })
    return maxTillNow
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));