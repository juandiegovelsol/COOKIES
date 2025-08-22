class ShoppingCart:
    def __init__(self, items=[]):
        self.items = items
        self.discount = 0

    def add_item(self, item, price, quantity=1):
        self.items.append({
            'item': item,
            'price': price,
            'quantity': quantity
        })

    def apply_discount(self, percentage):
        self.discount = percentage

    def calculate_total(self):
        subtotal = sum(item['price'] * item['quantity'] for item in self.items)
        discount_amount = subtotal * (self.discount / 100)
        return subtotal - discount_amount

    def show_cart(self):
        print("Shopping Cart:")
        for item in self.items:
            print(f"- {item['item']}: ${item['price']:.2f} x {item['quantity']}")
        print(f"Total: ${self.calculate_total():.2f}")


cart1 = ShoppingCart()
cart1.add_item("Apple", 1.50, 3)
cart1.add_item("Bread", 2.99, 1)
print("Cart 1:")
cart1.show_cart()

print("\nCart 2:")
cart2 = ShoppingCart()
cart2.add_item("Milk", 3.49, 1)
cart2.show_cart()