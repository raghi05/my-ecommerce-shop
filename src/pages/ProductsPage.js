import React from 'react';
import ProductCard from '../components/ProductCard';

const ALL_PRODUCTS = [
  {
    _id: '1',
    name: 'Wireless Headphones',
    price: 4999,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
  },
  {
    _id: '2',
    name: 'Running Shoes',
    price: 2999,
    category: 'Footwear',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
  },
  {
    _id: '3',
    name: 'Leather Watch',
    price: 6499,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
  },
  {
    _id: '4',
    name: 'Bluetooth Speaker',
    price: 1899,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop',
  },
  {
    _id: '5',
    name: 'Backpack',
    price: 1499,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
  },
  {
    _id: '6',
    name: 'Sunglasses',
    price: 899,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
  },
];

function ProductsPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <h2 style={{ fontSize: '26px', fontWeight: '700', marginBottom: '28px', color: '#1a1a2e' }}>
        All Products
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {ALL_PRODUCTS.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;