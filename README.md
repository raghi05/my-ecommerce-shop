bash

cat > /mnt/user-data/outputs/README_new.md << 'EOF'
# ShopEasy - E-Commerce Website

A full-stack e-commerce platform where users can browse products, add items to cart, and place orders. Built with React, Node.js, and MongoDB.

**Live Website:** https://shopeasy-6divks7l3-raghi-k-u-s-projects.vercel.app

---

## What is this project?

I built this as my 3rd year college project during summer vacation. It's a working e-commerce site where you can actually register, login, browse products, add to cart, and place orders. Everything is connected to a real database.

---

## Features

- **User Registration & Login** — Create account, secure login with JWT tokens
- **Browse Products** — View all products from database in a nice grid
- **Add to Cart** — Add items with quantity control
- **Shopping Cart** — See your items, change quantities, remove items
- **Place Orders** — Complete checkout process
- **Responsive Design** — Works on phone, tablet, desktop

---

## Tech I Used

**Frontend:**
- React (with hooks)
- React Router (for navigation)
- Tailwind CSS (for styling)
- Axios (API calls)

**Backend:**
- Node.js & Express
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for passwords

**Hosting:**
- Frontend on Vercel
- Backend on Render
- Database on MongoDB Atlas

---

## How to run it locally

### Requirements
- Node.js installed
- MongoDB (or MongoDB Atlas account)
- Git

### Frontend Setup
```
git clone https://github.com/raghi05/my-ecommerce-shop.git
cd my-ecommerce-shop
npm install
npm start
```
It opens at http://localhost:3000

### Backend Setup
```
cd backend
npm install
```

Create a `.env` file in backend folder:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

Then start it:
```
node server.js
```

Backend runs on http://localhost:5000

---

## How to use

1. **Register** — Click login button, create new account
2. **Browse** — Check products on Products page
3. **Add to Cart** — Click "Add to Cart" button
4. **Checkout** — Go to cart, click "Place Order"

---

## What I learned

- How to build a complete full-stack app from scratch
- Frontend: React hooks, routing, state management
- Backend: REST APIs, authentication, database design
- How to connect frontend and backend
- How to deploy apps to production

---

## What's working

✓ User login/register system
✓ 8 sample products in database
✓ Add/remove from cart
✓ Cart quantity control
✓ Place orders
✓ Shows user name after login

---

## What I want to add later

- Payment gateway (Stripe/Razorpay)
- Admin panel to manage products
- Product reviews and ratings
- Search and filter products
- Order history for users
- Email confirmation

---

## API Endpoints

Login/Register:
- POST /api/auth/register
- POST /api/auth/login

Products:
- GET /api/products
- GET /api/products/:id

Orders:
- POST /api/orders
- GET /api/orders/myorders

---

## Folder Structure

```
my-ecommerce-shop/
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   └── ProductCard.js
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── LoginPage.js
│   │   ├── CartPage.js
│   │   └── ProductsPage.js
│   ├── CartContext.js
│   └── App.js
├── backend/
│   ├── models/
│   │   ├── userModel.js
│   │   ├── productModel.js
│   │   └── orderModel.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   └── orderRoutes.js
│   └── server.js
└── README.md
```

---

## Issues I faced and solved

**MongoDB Connection Issue:**
- First time Render couldn't connect to MongoDB Atlas
- Fixed by allowing 0.0.0.0/0 in MongoDB network access

**Cart not updating:**
- Was storing products in state only
- Fixed by using Context API for global state

**Environment variables:**
- Secret keys were exposed in GitHub
- Added .env to .gitignore, used Render environment variables

---

## If you want to deploy it

**Frontend (Vercel):**
- Push code to GitHub
- Connect repo to Vercel
- It deploys automatically

**Backend (Render):**
- Create account on render.com
- Connect GitHub repo
- Add environment variables
- Deploy

**Database (MongoDB Atlas):**
- Create free cluster
- Add products manually
- Use connection string in backend

---

## Contact

If you have questions about the code, check the comments in the files or open an issue on GitHub.

GitHub: https://github.com/raghi05/my-ecommerce-shop

---

Built during summer 2026 as a college project to learn full-stack development.