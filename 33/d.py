def multiply_strings(num1, num2):
    if num1 == "0" or num2 == "0":
        return "0"
    
    m, n = len(num1), len(num2)
    res = [0] * (m + n)  # Initialize the result array with 0s

    for i in range(m - 1, -1, -1):
        for j in range(n - 1, -1, -1):
            mul = int(num1[i]) * int(num2[j])
            p1 = i + j  # position for tens
            p2 = i + j + 1  # position for units
            sum_ = mul + res[p2]  # add to the current position
            res[p2] = sum_ % 10  # store the unit
            res[p1] += sum_ // 10  # carry the tens to the next position

    # Convert the result list to string and strip leading zeros
    result = ''.join(map(str, res)).lstrip('0')
    
    return result if result else "0"  # return "0" if result is empty

# Example usage:
num1 = "123"
num2 = "456"
print(multiply_strings(num1, num2))  # Output should be "56088"