// Header Component (Header.js)

import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartItems }) => {
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header>
      <Link to="/">Home</Link> 
      <Link to="/cart">
        Cart ({totalItems}) 
      </Link>
    </header>
  );
};

export default Header;
