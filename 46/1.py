def remove_below_threshold(nums, t):
    for i, x in enumerate(nums[:]):
        if x < t:
            nums.pop(i)
    return nums


def main():
    data1 = [1, 0, 2, 0, 3, 0, 4]
    print(remove_below_threshold(data1, 1))

    data2 = [0, 0, 1, 2]
    print(remove_below_threshold(data2, 1))


if __name__ == "__main__":
    main()
