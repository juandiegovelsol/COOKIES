def calculate_final_price(base_price, is_member):
    price = base_price
    # Apply discount only for members
    if is_member:
        price *= 0.85
    return price

def shipping_cost(weight_lb):
    # Apply the full rate for weights over 5 lbs
    if weight_lb > 5:
        return weight_lb * 2
    else:
        return 0.0


def main():
    price_non_member = calculate_final_price(100.0, is_member=False)
    price_member = calculate_final_price(100.0, is_member=True)
    weight_non_member = shipping_cost(3.0)
    weight_member = shipping_cost(8.0)
    print(f"Non-member final price: {price_non_member:.2f} and shipping cost: {weight_non_member}")
    print(f"Member final price: {price_member:.2f} and shipping cost: {weight_member}")


if __name__ == "__main__":
    main()
