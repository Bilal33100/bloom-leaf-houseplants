import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { 
  increaseQuantity, 
  decreaseQuantity, 
  deleteItem 
} from '../features/cart/cartSlice';
import '../styles/CartPage.css';

function CartPage() {
  const dispatch = useDispatch();
  const { items, totalItems, totalCost } = useSelector(state => state.cart);
  
  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };
  
  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };
  
  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };
  
  const handleCheckout = () => {
    alert("Checkout feature coming soon!");
  };
  
  if (items.length === 0) {
    return (
      <div className="cart-page empty-cart">
        <h1>Your Cart is Empty</h1>
        <p>Add some beautiful plants to your cart!</p>
        <Link to="/products">
          <button className="continue-shopping-btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    );
  }
  
  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      
      <div className="cart-summary">
        <div className="summary-item">
          <span>Total Items:</span>
          <span className="value">{totalItems}</span>
        </div>
        <div className="summary-item">
          <span>Total Cost:</span>
          <span className="value">${totalCost.toFixed(2)}</span>
        </div>
      </div>
      
      <div className="cart-items">
        {items.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p className="unit-price">Unit Price: ${item.price}</p>
              <p className="category">{item.category}</p>
            </div>
            
            <div className="quantity-controls">
              <button 
                className="qty-btn" 
                onClick={() => handleDecrease(item.id)}
              >
                -
              </button>
              <span className="quantity">{item.quantity}</span>
              <button 
                className="qty-btn" 
                onClick={() => handleIncrease(item.id)}
              >
                +
              </button>
            </div>
            
            <div className="item-total">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
            
            <button 
              className="delete-btn"
              onClick={() => handleDelete(item.id)}
            >
              🗑️
            </button>
          </div>
        ))}
      </div>
      
      <div className="cart-actions">
        <button 
          className="checkout-btn"
          onClick={handleCheckout}
        >
          Checkout
        </button>
        
        <Link to="/products">
          <button className="continue-shopping-btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CartPage;
