item_prices = [[str(i) for i in j.strip("$").split(".")] for j in ['$10.50', '$5.00', '$12.75', '$3.99']]
final_total = calculate_total_cost(item_prices)
print(f"The final total is: ${final_total:.2f}")