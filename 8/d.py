def find_even_nums(num_list):
    even_numbers = []
    for number in num_list:
        if number % 2 == 0:  # Check for even numbers
            even_numbers.append(number)
    return even_numbers

my_list = [1, 2, 3, 4, 5, 6, 7, 8]
filtered_list = find_even_nums(my_list)
print(f"Original list: {my_list}")
print(f"Filtered list: {filtered_list}")