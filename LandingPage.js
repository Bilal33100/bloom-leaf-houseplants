import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="hero-content">
        <h1 className="company-name">Bloom & Leaf</h1>
        
        <p className="company-description">
          Welcome to Bloom & Leaf, your premier destination for beautiful houseplants. 
          We bring nature indoors with our curated collection of tropical plants, succulents, 
          and low-light varieties. Each plant is carefully selected and nurtured to ensure 
          it thrives in your home.
        </p>
        
        <Link to="/products">
          <button className="get-started-btn">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
