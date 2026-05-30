# ShopEasy - E-Commerce Website

A full-stack e-commerce platform where users can browse products, add items to cart, and place orders. Built with React, Node.js, and MongoDB.

**Live Website:** https://shopeasy-6divks7l3-raghi-k-u-s-projects.vercel.app

---

## What is this project?

 It's a working e-commerce site where you can actually register, login, browse products, add to cart, and place orders. Everything is connected to a real database.

---

## Features

- **User Registration and Login** — Create account, secure login with JWT tokens
- **Browse Products** — View all products from database in a nice grid
- **Add to Cart** — Add items with quantity control
- **Shopping Cart** — See your items, change quantities, remove items
- **Place Orders** — Complete checkout process
- **Responsive Design** — Works on phone, tablet, desktop

---

## Tech I Used

**Frontend:**
- React with hooks
- React Router for navigation
- CSS for styling
- Fetch API for backend calls

**Backend:**
- Node.js and Express
- MongoDB with Mongoose
- JWT for login tokens
- bcryptjs for password security

**Hosting:**
- Frontend on Vercel
- Backend on Render
- Database on MongoDB Atlas

---

## How to run it locally

### Requirements
- Node.js installed
- MongoDB Atlas account
- Git

### Frontend Setup
git clone https://github.com/raghi05/my-ecommerce-shop.git
cd my-ecommerce-shop
npm install
npm start
Opens at http://localhost:3000

### Backend Setup
cd backend
npm install
Create a .env file inside backend folder and add:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

Start the backend:
node server.js
Runs at http://localhost:5000

---

## How to use the app

1. Go to the live website link above
2. Click Login then Register to create account
3. Browse products on the Products page
4. Click Add to Cart on any product
5. Go to Cart in navbar
6. Click Place Order to complete purchase

---

## What I learned building this

- How React components and hooks work
- How to build REST APIs with Express
- How to connect frontend to backend
- How MongoDB stores data
- How login systems work with JWT tokens
- How to deploy apps to internet for free

---

## What is currently working

- Register and login system
- 8 products loaded from MongoDB database
- Add products to cart
- Change quantity in cart
- Remove items from cart
- Place order after login
- Navbar shows your name after login
- Logout button

---

## Problems I faced and how I fixed them

**MongoDB not connecting on Render:**
I forgot to whitelist all IP addresses in MongoDB Atlas network settings.
Fixed by adding 0.0.0.0/0 in Network Access.

**Navbar not showing username after login:**
The navbar was only checking localStorage once when it loaded.
Fixed by using useLocation hook to re-check on every page change.

**Environment variables exposed on GitHub:**
My .env file with MongoDB password was pushed to GitHub by mistake.
Fixed by adding backend/.env to .gitignore and changed my MongoDB password.

---

## Things I want to add in future

- Online payment with Razorpay
- Admin panel to add and delete products
- Product search and filter by category
- Customer reviews and star ratings
- Order history page
- Email confirmation after order

---

## Project Structure

my-ecommerce-shop/
│
├── src/                          # React frontend code
│   ├── components/               # Reusable components
│   │   ├── Navbar.js             # Top navigation bar
│   │   ├── Navbar.css
│   │   ├── ProductCard.js        # Single product card
│   │   └── ProductCard.css
│   │
│   ├── pages/                    # All pages
│   │   ├── HomePage.js           # Landing page
│   │   ├── HomePage.css
│   │   ├── ProductsPage.js       # All products
│   │   ├── LoginPage.js          # Login form
│   │   ├── LoginPage.css
│   │   ├── RegisterPage.js       # Register form
│   │   └── CartPage.js           # Shopping cart
│   │
│   ├── CartContext.js            # Cart state management
│   ├── App.js                    # Main routing
│   ├── index.js                  # Entry point
│   └── index.css                 # Global styles
│
├── backend/                      # Node.js backend code
│   ├── models/                   # MongoDB schemas
│   │   ├── userModel.js          # User schema
│   │   ├── productModel.js       # Product schema
│   │   └── orderModel.js         # Order schema
│   │
│   ├── routes/                   # API routes
│   │   ├── authRoutes.js         # Login/Register routes
│   │   ├── productRoutes.js      # Product routes
│   │   └── orderRoutes.js        # Order routes
│   │
│   ├── server.js                 # Express server
│   ├── seeder.js                 # Add sample products
│   └── package.json
│
├── public/                       # Static files
├── .gitignore                    # Git ignore file
├── package.json                  # Frontend dependencies
└── README.md                     # This file
---

## API Routes

**Auth:**
- POST /api/auth/register
- POST /api/auth/login

**Products:**
- GET /api/products
- GET /api/products/:id

**Orders:**
- POST /api/orders
- GET /api/orders/myorders

---


GitHub: https://github.com/raghi05/my-ecommerce-shop
