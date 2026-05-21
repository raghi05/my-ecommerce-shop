import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import './HomePage.css';

const SAMPLE_PRODUCTS = [
  {
    _id: '1',
    name: 'Wireless Noise-Cancelling Headphones',
    price: 4999,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
  },
  {
    _id: '2',
    name: 'Premium Running Shoes',
    price: 2999,
    category: 'Footwear',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
  },
  {
    _id: '3',
    name: 'Minimalist Leather Watch',
    price: 6499,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
  },
  {
    _id: '4',
    name: 'Portable Bluetooth Speaker',
    price: 1899,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop',
  },
];

const CATEGORIES = [
  { name: 'Electronics', icon: '💻' },
  { name: 'Footwear', icon: '👟' },
  { name: 'Accessories', icon: '⌚' },
  { name: 'Clothing', icon: '👕' },
];

function HomePage() {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Shop the <span>Best Deals</span><br />Every Day</h1>
          <p>Discover thousands of products at unbeatable prices, delivered to your door.</p>
          <div className="hero-buttons">
            <Link to="/products" className="btn-primary">Shop Now</Link>
            <Link to="/products" className="btn-outline">View Deals</Link>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=450&fit=crop"
            alt="Shopping"
          />
        </div>
      </section>

      {/* Categories Section */}
      <section className="section">
        <div className="section-header">
          <h2>Shop by Category</h2>
          <Link to="/products">View all →</Link>
        </div>
        <div className="categories-grid">
          {CATEGORIES.map((cat) => (
            <div key={cat.name} className="category-card">
              <span className="category-icon">{cat.icon}</span>
              <span className="category-name">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section">
        <div className="section-header">
          <h2>Featured Products</h2>
          <Link to="/products">See all →</Link>
        </div>
        <div className="products-grid">
          {SAMPLE_PRODUCTS.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>

      {/* Banner Section */}
      <section className="promo-banner">
        <h2>Special Offer — Up to 50% Off</h2>
        <p>Limited time deals on top electronics and accessories.</p>
        <Link to="/products" className="btn-primary">Grab the Deal</Link>
      </section>

    </div>
  );
}

export default HomePage;