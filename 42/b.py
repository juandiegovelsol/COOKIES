# Script to remove even numbers from a list
numbers = [1, 2, 4, 5, 6, 8, 9]

for number in numbers[:]:  # Iterate over a copy of the list
    if number % 2 == 0:
        numbers.remove(number)

print(f"The final list is: {numbers}")