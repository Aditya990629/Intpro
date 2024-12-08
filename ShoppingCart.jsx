import React, { useState } from "react";
import "./index.css";

function ShoppingCart() {
  const [quantity, setQuantity] = useState(5);

  const updateQuantity = (delta) => {
    setQuantity((prev) => Math.max(0, prev + delta));
  };

  const price = 650;
  const subtotal = price * quantity;

  return (
    <div className="shopping-cart">
      <h2>My Shopping Cart</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Showpiece</td>
            <td>₹{price}</td>
            <td>
              <button onClick={() => updateQuantity(-1)}>-</button>
              {quantity}
              <button onClick={() => updateQuantity(1)}>+</button>
            </td>
            <td>₹{subtotal}</td>
          </tr>
        </tbody>
      </table>
      <div className="cart-summary">
        <h3>Cart Total</h3>
        <p>Subtotal: ₹{subtotal}</p>
        <p>Shipping: Free</p>
        <p>Total: ₹{subtotal}</p>
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default ShoppingCart;
