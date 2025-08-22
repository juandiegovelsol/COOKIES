from helper_functions import calculate_cart_total

def main():
    customer_cart = [
        (99.99, 1),  # (price, quantity) for a video game
        (15.50, 2),  # (price, quantity) for DLC
        (59.99, 1)   # (price, quantity) for another game
    ]

    print("Processing customer cart...")
    try:
        total_cost = calculate_cart_total(customer_cart)
        print(f"The total cost is: ${total_cost:.2f}")
    except TypeError as e:
        print(f"An error occurred: {e}")
        print("Failed to calculate total. Please check the data format.")

if __name__ == "__main__":
    main()