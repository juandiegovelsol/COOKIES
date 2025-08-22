def calculate_average(numbers):
    if not numbers:  # Check for empty list
        return 0     # or return a message like: "List is empty"
    total = 0
    for num in numbers:
        total += num
    return total / len(numbers)

scores = [85, 92, 78, 96, 88]
print(f"Average score: {calculate_average(scores)}")

empty_list = []
print(f"Average of empty list: {calculate_average(empty_list)}") # Returns 0

scores = [85, 92, 78, 96, 88]
total = 0

for i in range(len(scores)):
    total += scores[i]  # Corrected from 'score[i]' to 'scores[i]'

average = total / len(scores)
print(f"Average score: {average}")