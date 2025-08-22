def calculate_average(numbers):
    total = 0
    for num in numbers:
        total += num
    # Added check for empty list
    if not numbers:
        return None
    return total / len(numbers)

scores = [85, 92, 78, 96, 88]
print(f"Average score: {calculate_average(scores)}")

empty_list = []
print(f"Average of empty list: {calculate_average(empty_list)}")



def calculate_average(scores):
    total = 0
    # Use len(scores) - 1 to avoid IndexError
    for i in range(len(scores)):
        total += score[i]
    return total / len(scores)

scores = [85, 92, 78, 96, 88]
average = calculate_average(scores)
print(f"Average score: {average}")