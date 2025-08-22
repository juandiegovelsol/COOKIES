# snippetA.py
def snippetA(n: int) -> int:
    total = 0
    counter = 0
    while counter < n:
        total += counter
        counter += 1
    return total

if __name__ == "__main__":
    print(snippetA(3))


# snippetB.py
def snippetB(n: int) -> int:
    result = n * (n - 1) // 2
    return result

if __name__ == "__main__":
    print(snippetB(5))
