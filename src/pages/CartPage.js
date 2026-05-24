import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';
import './CartPage.css';

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, totalPrice, totalItems } = useCart();
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = async () => {
    const userInfo = localStorage.getItem('userInfo');
    if (!userInfo) {
      navigate('/login');
      return;
    }

    setLoading(true);

    try {
      const user = JSON.parse(userInfo);
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          items: cartItems.map((item) => ({
            product: item._id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: item.image,
          })),
          shippingAddress: {
            address: 'Default Address',
            city: 'Kerala',
            pincode: '680001',
            phone: '9999999999',
          },
          totalPrice,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || 'Order failed');
        setLoading(false);
        return;
      }

      clearCart();
      setOrderSuccess(true);
      setLoading(false);

    } catch (error) {
      alert('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  if (orderSuccess) {
    return (
      <div className="cart-page">
        <div className="order-success">
          <h3>🎉 Order Placed Successfully!</h3>
          <p>Thank you for shopping with ShopEasy!</p>
          <br />
          <Link to="/products" className="btn-checkout"
            style={{ display: 'inline-block', textDecoration: 'none', padding: '12px 28px', width: 'auto' }}>
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-empty">
          <h3>🛒 Your cart is empty!</h3>
          <p>Add some products to your cart to get started.</p>
          <Link to="/products" className="btn-checkout"
            style={{ display: 'inline-block', textDecoration: 'none', padding: '12px 28px', width: 'auto' }}>
            Shop Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Your Cart ({totalItems} items)</h2>
      <div className="cart-container">

        {/* Cart Items */}
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p>{item.category}</p>
                <span className="cart-item-price">
                  ₹{(item.price * item.quantity).toLocaleString()}
                </span>
              </div>
              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item._id, item.quantity - 1)}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item._id, item.quantity + 1)}>+</button>
              </div>
              <button className="btn-remove" onClick={() => removeFromCart(item._id)}>
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Items ({totalItems})</span>
            <span>₹{totalPrice.toLocaleString()}</span>
          </div>
          <div className="summary-row">
            <span>Delivery</span>
            <span style={{ color: '#2e7d32' }}>FREE</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>₹{totalPrice.toLocaleString()}</span>
          </div>
          <button
            className="btn-checkout"
            onClick={handleCheckout}
            disabled={loading}
          >
            {loading ? 'Placing Order...' : 'Place Order'}
          </button>
        </div>

      </div>
    </div>
  );
}

export default CartPage;