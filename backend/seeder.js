const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/productModel');

dotenv.config();

const products = [
  {
    name: 'Wireless Noise-Cancelling Headphones',
    price: 4999,
    description: 'Premium wireless headphones with active noise cancellation and 30 hour battery life.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
    category: 'Electronics',
    stock: 50,
  },
  {
    name: 'Premium Running Shoes',
    price: 2999,
    description: 'Lightweight and comfortable running shoes with extra cushioning for long runs.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
    category: 'Footwear',
    stock: 30,
  },
  {
    name: 'Minimalist Leather Watch',
    price: 6499,
    description: 'Classic minimalist watch with genuine leather strap and sapphire crystal glass.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
    category: 'Accessories',
    stock: 20,
  },
  {
    name: 'Portable Bluetooth Speaker',
    price: 1899,
    description: 'Waterproof portable speaker with 360 degree sound and 12 hour battery.',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop',
    category: 'Electronics',
    stock: 45,
  },
  {
    name: 'Laptop Backpack',
    price: 1499,
    description: 'Spacious laptop backpack with USB charging port and anti-theft design.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
    category: 'Accessories',
    stock: 60,
  },
  {
    name: 'Polarised Sunglasses',
    price: 899,
    description: 'UV400 polarised sunglasses with lightweight frame and scratch resistant lens.',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
    category: 'Accessories',
    stock: 75,
  },
  {
    name: 'Smart Fitness Band',
    price: 2499,
    description: 'Track your steps, heart rate, sleep and calories with this smart fitness band.',
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=300&fit=crop',
    category: 'Electronics',
    stock: 40,
  },
  {
    name: 'Cotton Casual T-Shirt',
    price: 599,
    description: 'Premium 100% cotton t-shirt available in multiple colors. Comfortable all day wear.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop',
    category: 'Clothing',
    stock: 100,
  },
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected!');

    // Delete existing products
    await Product.deleteMany();
    console.log('Old products deleted!');

    // Add new products
    await Product.insertMany(products);
    console.log('8 products added successfully!');

    process.exit();
  } catch (error) {
    console.log('Error:', error.message);
    process.exit(1);
  }
};

seedProducts();