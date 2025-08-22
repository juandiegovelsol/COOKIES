def merge_sort(numbers):
    if len(numbers) <= 1:
        return numbers

    mid = len(numbers) // 2
    left_half = merge_sort(numbers[:mid])
    right_half = merge_sort(numbers[mid:])

    return merge(left_half, right_half)


def merge(left, right):
    result = []
    left_index = 0
    right_index = 0

    while left_index < len(left) and right_index < len(right):
        if left[left_index] < right[right_index]:
            result.append(left[left_index])
            left_index += 1
        else:
            result.append(right[right_index])
            right_index += 1

    result.extend(right[left_index:])
    result.extend(left[right_index:])
    return result


unsorted_list = [23, 4, 16, 8, 42, 15]
sorted_list = merge_sort(unsorted_list)
print(sorted_list)