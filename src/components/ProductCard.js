import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-img-wrap">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-footer">
          <span className="product-price">₹{product.price.toLocaleString()}</span>
          <button className="btn-add-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;