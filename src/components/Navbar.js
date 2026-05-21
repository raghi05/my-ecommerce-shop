import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [cartCount] = useState(0);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">🛒 ShopEasy</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart" className="cart-link">
          Cart <span className="cart-badge">{cartCount}</span>
        </Link>
        <Link to="/login" className="btn-login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;