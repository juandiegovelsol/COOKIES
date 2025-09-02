from typing import List

class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        def swap(arr, i, j):
            arr[i], arr[j] = arr[j], arr[i]

        n = len(nums)

        for i in range(n):
            while 1 <= nums[i] <= n and nums[i] != nums[nums[i] - 1]:
                swap(nums, nums[i] - 1, i)

        for i in range(n):
            if nums[i] != i + 1:
                return i + 1

        return n + 1


print(Solution().firstMissingPositive([3,4,-1,1]))  # 2
print(Solution().firstMissingPositive([1,2,0]))     # 3
print(Solution().firstMissingPositive([7,8,9,11]))