def merge_sort(numbers):
    if len(numbers) <= 1:  # Line 2: Corrected "<=" comparison operator to meet typical standards
        return numbers

    mid = len(numbers) // 2
    left_half = merge_sort(numbers[:mid])
    right_half = merge_sort(numbers[mid:])

    return merge(left_half, right_half)

def merge(left, right):
    result = []
    left_index = 0
    right_index = 0

    while left_index < len(left) and right_index < len(right):  # Line 15: Conditional check is correct
        if left[left_index] < right[right_index]:  # Line 16: This checks the actual values
            result.append(left[left_index])  # Line 17: Appending the value instead of the index
            left_index += 1
        else:
            result.append(right[right_index])  # Line 21: Same correction here
            right_index += 1

    # Extend to add remaining elements
    result.extend(left[left_index:])  # Line 24: Correct - this correctly extends remaining items
    result.extend(right[right_index:])  # Line 25: Correct - this correctly extends remaining items
    return result

unsorted_list = [23, 4, 16, 8, 42, 15]  # Example list
sorted_list = merge_sort(unsorted_list)
print(sorted_list)