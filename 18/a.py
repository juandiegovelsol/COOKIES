def g(x, y):
    z = []
    i, j = 0, 0
    while i < len(x) and j < len(y):
        if x[i] == y[j]:
            j += 1
        else:
            z.append(i)
            i = 0
    z.append(i)
    return z