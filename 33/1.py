def multiply_strings(num1, num2):
    if num1 == "0" or num2 == "0":
        return "0"

    m, n = len(num1), len(num2)
    res = [0] * (m + n)
    for i in range(m - 1, -1, -1):
        for j in range(n - 1, -1, -1):
            mul = int(num1[i]) * int(num2[j])
            p1, p2 = i + j, i + j + 1
            sum_ = mul + res[p2]
            res[p2] = sum_ % 10
            res[p1] = sum_ // 10
    result = ''.join(map(str, res)).lstrip('0')
    return result

print(multiply_strings("-3","6"))