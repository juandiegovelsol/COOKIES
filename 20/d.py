def calculate_average(numbers):
    total = 0
    for num in numbers:
        total += num
    return total / len(numbers)  # Correct calculation here

scores = [85, 92, 78, 96, 88]
print(f"Average score: {calculate_average(scores)}")

empty_list = []
print(f"Average of empty list: {calculate_average(empty_list)}")  # This will raise an error


scores = [85, 92, 78, 96, 88]
total = 0

for i in range(len(scores)):
    total += scores[i]  # Changed from 'score' to 'scores'

average = total / len(scores)  # Keep in mind you should check for empty list
print(f"Average score: {average}")