import math
from typing import List
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        dp = [*nums]
        for i in range(1, len(nums)):
            dp[i] = max(nums[i], nums[i] + dp[i-1])
        return max(dp)
    def maxSubArray1(self, nums):
        cur_max, max_till_now = 0, -math.inf
        for c in nums:
            cur_max = max(c, cur_max + c)
            max_till_now = max(max_till_now, cur_max)
        return max_till_now
s = Solution()            
print (s.maxSubArray1([-2,1,-3,4,-1,2,1,-5,4]))