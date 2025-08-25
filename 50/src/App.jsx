function Cart({ items, updateQuantity }) {
  return (
    <div>
      <h2>Cart</h2>
      {items.map((item) => (
        <div key={item.id}>
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
            -
          </button>
          <span>
            {item.name} - {item.quantity}
          </span>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
            +
          </button>
        </div>
      ))}
    </div>
  );
}

import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([
    { id: 1, name: "Apple", quantity: 1 },
    { id: 2, name: "Banana", quantity: 2 },
    { id: 3, name: "Grape", quantity: 3 },
  ]);

  const updateQuantity = (id, newQuantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && newQuantity >= 0
          ? { item, quantity: newQuantity }
          : item
      )
    );
  };

  return (
    <div>
      <h1>Shopping App</h1>
      <Cart items={cart} updateQuantity={updateQuantity} />
    </div>
  );
}
