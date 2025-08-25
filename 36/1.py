def calculate_average_price(items):
    """Calculates the average price from a list of items."""
    total_price = 0
    for price in items:
        total_price += price

    return total_price / len(items)


print(calculate_average_price([]))