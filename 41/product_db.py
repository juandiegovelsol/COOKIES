class ProductDB:
    """A database connector for fetching product information."""
    _PRODUCT_TABLE = {
        "prod-123-abc": {"name": "Wireless Mouse", "price": 29.99},
        "prod-456-def": {"name": "Mechanical Keyboard", "price": 119.50},
    }

    def find_product_by_id(self, product_id: str) -> dict | None:
        print(f"DATABASE: Querying for product id '{product_id}'...")
        return self._PRODUCT_TABLE.get(product_id)
