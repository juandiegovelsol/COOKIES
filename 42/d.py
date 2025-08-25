# Script to remove even numbers from a list
numbers = [1, 2, 4, 5, 6, 8, 9]

# Create a new list with only odd numbers
odd_numbers = []
for number in numbers:
    if number % 2 != 0:  # Check if the number is odd
        odd_numbers.append(number)

print(f"The final list is: {odd_numbers}")