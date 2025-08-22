def find_even_nums(num_list):
    even_numbers = []
    for number in num_list:
        if number % 2 == 1:  # Corrected line
            even_numbers.append(number)
    return even_numbers

my_list = [1, 2, 3, 4, 5, 6, 7, 8]
filtered_list = find_even_nums(my_list)
print("Original list:", my_list)
print("Filtered list:", filtered_list)