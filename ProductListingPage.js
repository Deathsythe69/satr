// Product Listing Page (ProductListingPage.js)

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'; 

const plants = [
  { id: 1, name: 'Snake Plant', price: 25, category: 'Low Maintenance', image: 'snake_plant.jpg' },
  { id: 2, name: 'Pothos', price: 15, category: 'Easy Care', image: 'pothos.jpg' },
  { id: 3, name: 'Fiddle Leaf Fig', price: 50, category: 'Showstopping', image: 'fiddle_leaf_fig.jpg' },
  { id: 4, name: 'Monstera', price: 35, category: 'Trending', image: 'monstera.jpg' },
  { id: 5, name: 'ZZ Plant', price: 20, category: 'Drought Tolerant', image: 'zz_plant.jpg' },
  { id: 6, name: 'Peace Lily', price: 28, category: 'Air Purifying', image: 'peace_lily.jpg' },
];

const ProductListingPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (plant) => {
    setCartItems([...cartItems, plant]);
  };

  return (
    <div>
      <Header cartItems={cartItems} /> 
      <h1>Our Plant Collection</h1>

      <div>
        <h2>Low Maintenance</h2>
        <div className="plant-grid">
          {plants
            .filter((plant) => plant.category === 'Low Maintenance')
            .map((plant) => (
              <div key={plant.id} className="plant-card">
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>${plant.price.toFixed(2)}</p>
                <button 
                  disabled={cartItems.some((item) => item.id === plant.id)} 
                  onClick={() => handleAddToCart(plant)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
      </div>

      {/* Similar sections for other categories (Easy Care, Showstopping, etc.) */}

      <Link to="/cart">Go to Cart</Link> 
    </div>
  );
};

export default ProductListingPage;


