def calculate_cart_total(cart_items):
    """
    Calculates the total cost of items in a shopping cart.
    """
    total = 0
    for item in cart_items:
        total += item[0] * item[1]  # Access price and quantity as tuple elements
    return total