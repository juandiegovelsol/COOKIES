def even_squares(nums):
    squares = []
    for i in range(len(nums)):
        if nums[i] % 2 == 0:  # Check if the number itself is even
            squares.append(nums[i]**2)
    return squares

print(even_squares([2, 3, 4, 5]))