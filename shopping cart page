// Shopping Cart Page (ShoppingCartPage.js)

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'; 

const ShoppingCartPage = ({ cartItems }) => {
  const [updatedCartItems, setUpdatedCartItems] = useState(cartItems);

  const handleIncrease = (plant) => {
    const updatedItems = updatedCartItems.map((item) =>
      item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setUpdatedCartItems(updatedItems);
  };

  const handleDecrease = (plant) => {
    const updatedItems = updatedCartItems.map((item) =>
      item.id === plant.id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setUpdatedCartItems(updatedItems);
  };

  const handleDelete = (plant) => {
    setUpdatedCartItems(updatedCartItems.filter((item) => item.id !== plant.id));
  };

  const totalItems = updatedCartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = updatedCartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <Header cartItems={updatedCartItems} /> 
      <h1>Shopping Cart</h1>

      {updatedCartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <p>Total Items: {totalItems}</p>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          <button>Checkout (Coming Soon)</button> 
          <Link to="/">Continue Shopping</Link> 

          <ul>
            {updatedCartItems.map((plant) => (
              <li key={plant.id}>
                <img src={plant.image} alt={plant.name} />
                {plant.name} - ${plant.price.toFixed(2)}
                <button onClick={() => handleIncrease(plant)}>+</button>
                <span>{plant.quantity}</span>
                <button onClick={() => handleDecrease(plant)}>-</button>
                <button onClick={() => handleDelete(plant)}>Delete</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ShoppingCartPage;

