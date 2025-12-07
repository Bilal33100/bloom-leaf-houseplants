import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { plants, categories } from '../data/plantsData';
import '../styles/ProductsPage.css';

function ProductsPage() {
  const dispatch = useDispatch();
  const addedItems = useSelector(state => state.cart.addedItems);
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredPlants = selectedCategory === 'All' 
    ? plants 
    : plants.filter(plant => plant.category === selectedCategory);
  
  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };
  
  return (
    <div className="products-page">
      <h1>Our Plants</h1>
      
      <div className="categories">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="plants-grid">
        {filteredPlants.map(plant => {
          const isAdded = addedItems.includes(plant.id);
          
          return (
            <div key={plant.id} className="plant-card">
              <img src={plant.image} alt={plant.name} className="plant-image" />
              <h3>{plant.name}</h3>
              <p className="plant-category">{plant.category}</p>
              <p className="plant-price">${plant.price}</p>
              <p className="plant-description">{plant.description}</p>
              
              <button
                className={`add-to-cart-btn ${isAdded ? 'added' : ''}`}
                onClick={() => handleAddToCart(plant)}
                disabled={isAdded}
              >
                {isAdded ? 'Added to Cart' : 'Add to Cart'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductsPage;
