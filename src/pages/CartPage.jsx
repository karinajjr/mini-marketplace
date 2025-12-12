import React, { useState, useEffect } from "react";
import CartList from "../components/CartList";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(stored);
  }, []);

  const removeItem = (id) => {
    const updated = cartItems.filter(item => item.id !== id);
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Cart ({cartItems.length})</h2>
      <CartList items={cartItems} removeItem={removeItem} />
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}
