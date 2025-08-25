inventory = {
    "apple": 50,
    "banana": 30,
    "orange": 20
}

def update_stock(product, quantity_sold):
    if product in inventory:
        if inventory[product] >= quantity_sold:
            inventory[product] -= quantity_sold
            print(f"Sold {quantity_sold} {product}(s). New stock: {inventory[product]}")
        elif inventory[product] == quantity_sold:
            inventory.pop(product)
            print(f"Sold all {quantity_sold} {product}(s). {product} is now out of stock.")
        else:
            print(f"Not enough stock for {product}. Current stock: {inventory[product]}")
    else:
        print(f"{product} not found in inventory.")


# Example usage
update_stock("apple", 50)
update_stock("banana", 40)