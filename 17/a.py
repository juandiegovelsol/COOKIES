from helper_functions import calculate_cart_total

def main():
    customer_cart = [
        (99.99, 1),
        (15.50, 2),
        (59.99, 1)
    ]

    print("Processing customer cart...")

    total_cost = calculate_cart_total(customer_cart)

    print(f"The total cost is: ${total_cost:.2f}")

if __name__ == "__main__":
    main()