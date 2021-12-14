# Input: s = "abcabcbb"
# Output: 3
# Explanation: The answer is "abc", with the length of 3.

def lengthOfLongestSubstring(str:str) -> int:
    left = 0
    max_length = 0
    charSet = set()
    for right in range(len(str)):
        while str[right] in charSet:
            charSet.remove(str[left])
            left += 1
        charSet.add(str[right])
        max_length = max(max_length, len(charSet))
    return max_length



print(lengthOfLongestSubstring("abcabcbb")==3)
print(lengthOfLongestSubstring("bbbbb")==1)
print(lengthOfLongestSubstring("pwwkew")==3)
print(lengthOfLongestSubstring("")==0)