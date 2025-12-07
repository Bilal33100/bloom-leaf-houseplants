import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/Header.css';

function Header() {
  const totalItems = useSelector(state => state.cart.totalItems);
  
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">🌿 Bloom & Leaf</Link>
      </div>
      
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      
      <div className="cart-icon">
        <Link to="/cart">
          🛒
          {totalItems > 0 && (
            <span className="cart-count">{totalItems}</span>
          )}
        </Link>
      </div>
    </header>
  );
}

export default Header;
