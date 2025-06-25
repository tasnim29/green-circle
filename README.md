# 🌿 Green-Circle - Gardening Community & Resource Hub

Welcome to **Green-Circle**, a full-stack web application designed for gardening enthusiasts to explore, learn, share, and connect. This community-driven platform allows users to share tips, join gardening events, discover experienced gardeners, and get help for all their plant-care needs.

![Green_circle Banner](https://i.ibb.co/n8ZwHCNS/garden.png) <!-- Replace with your actual deployed screenshot URL -->

---

## 🔗 Live Website

🌐 [Green-Circle Live Site](https://assignment-10-client-4fb64.web.app/)

---

## 🚀 Technologies Used

### 🖥️ Frontend

- React.js
- React Router DOM
- Axios
- Tailwind CSS + DaisyUI
- Firebase Authentication
- React Hook Form
- Swiper.js
- Lottie React
- React Toastify / SweetAlert

### ⚙️ Backend

- Node.js
- Express.js
- MongoDB
- CORS
- Dotenv
- JWT

---

## 🧩 Key Features

- 🔐 Authentication with Firebase (Email/Password & Google Login)
- 🌱 Add, Update, Delete Gardening Tips (Private Routes with Firebase Auth)
- 📊 Tips Table with Filtering by Difficulty (Easy/Medium/Hard)
- 🏆 Top Trending Tips section with Like count update functionality
- 🧑‍🌾 Featured Gardeners showcase
- 🕵️ Explore Gardeners page with total shared tips
- 💡 Dark/Light Theme toggle (with context/state preservation)
- 🧭 Fully Responsive (Mobile + Desktop)
- 🧭 Reload & Private Route State Preservation
- 🚫 Custom 404 Page
- 🌀 Loading Spinner for data fetching

---

## 📦 Dependencies

### Client

```bash
"axios"
"react-router-dom"
"firebase"
"react-hook-form"
"swiper"
"lottie-react"
"react-toastify"
"daisyui"
"tailwindcss"
"react-icons"
"react-tooltip"
"react-awesome-reveal"
```

### Server

```bash

"express"
"cors"
"dotenv"
"mongodb"
"jsonwebtoken"
```

---

🛠️ How to Run This Project Locally

### 1. Clone the Repositories

```
git clone https://github.com/yourusername/echojournal-client.git
git clone https://github.com/yourusername/echojournal-server.git
```

### 2. Set Up the Client

```
cd echojournal-client
npm install
```

🔑 Environment Variables (Create .env file)

```
VITE_API_URL=https://your-server.vercel.app
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
# Add all Firebase ENV keys
```

### 3. Set Up the Server

```
cd echojournal-server
npm install
```

🔑 Environment Variables (Create .env file)

```
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret
```

### 4. Run the Client and Server
