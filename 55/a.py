def calculate_final_price(base_price: float, is_member: bool) -> float:
    price = base_price
    if is_member:
        price *= 0.85  # Only members receive a 15% discount
    return price


def shipping_cost(weight_lb: float, is_member: bool) -> float:
    extra_weight = max(weight_lb - 5, 0)  # Only charge for weight above 5 lbs
    rate_per_pound = 2.0

    if is_member:
        return extra_weight * rate_per_pound  # Members pay regular price
    else:
        return (extra_weight * rate_per_pound) * 1.2  # Non-members pay 20% more


def main():
    price_non_member = calculate_final_price(100.0, is_member=False)
    price_member = calculate_final_price(100.0, is_member=True)
    weight_non_member = shipping_cost(3.0)
    weight_member = shipping_cost(8.0)
    print(f"Non-member final price: {price_non_member:.2f} and shipping cost: {weight_non_member}")
    print(f"Member final price: {price_member:.2f} and shipping cost: {weight_member}")


if __name__ == "__main__":
    main()
