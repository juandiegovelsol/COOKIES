def m(nums):
    counts = {}
    best_val = None
    best_count = 0
    for x in nums:
        counts[x] = counts.get(x, 0) + 1
        if counts[x] > best_count:
            best_count = counts[x]
            best_val = x
    return best_val

print(m([1, 2, 2, 3, 3]))
print(m([1]))
print(m([1, 2, 3]))
print(m([6, 6, 6, 7, 7, 7]))
