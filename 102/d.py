A = {1, 2, 3, 4, 5, 6}
B = {4, 5, 6, 7, 8, 9}
C = {2, 3, 4, 8, 10, 11}

BC = B.intersection(C) - A  # Values common to B and C but not in A
print(BC)