from product_db import ProductDB

class InvoiceGenerator:
    """Handles the business logic for creating invoices."""
    def __init__(self, db_connector: ProductDB):
        self.db = db_connector

    def create_invoice_line(self, product_id: str, quantity: int) -> float:
        print(f"INFO: Generating line item for product {product_id}...")
        product_data = self.db.find_product_by_id(product_id)
        unit_price = product_data['price']
        subtotal = unit_price * quantity
        print(f"SUCCESS: Line item created for {product_data['name']}.")
        return subtotal


if __name__ == "__main__":
    db_connection = ProductDB()
    invoice_system = InvoiceGenerator(db_connection)
    invoice_system.create_invoice_line("prod-999-xyz", 5)
