def calculate_total_cost(prices):
    total = 0
    for price in prices:
    total += price
    return total


item_prices = [10.50, 5.00, 12.75, 3.99]
final_total = calculate_total_cost(item_prices)
print(F"The final total is: {final_total}")