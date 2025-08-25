def make_items(n):
    items = []
    for i in range(1, n + 1):
        template = {"id": i, "values": [i]}
        items.append(template)
    print(items)

make_items(5)


