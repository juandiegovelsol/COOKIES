def snippetA():
    a = [1, 2, 3, 4]
    b = a
    n = len(b)
    for i in range(n):
        val = b[i]
        if val % 2 == 0:
            b[i] = val * 10
    total = sum(a)
    print(total)

snippetA()


def snippetB():
    a = [1, 2, 3, 4]
    b = a[:]
    n = len(b)
    for i in range(n):
        val = b[i]
        if val % 2 == 0:
            b[i] = val * 10
    total = sum(a)
    print(total)

snippetB()