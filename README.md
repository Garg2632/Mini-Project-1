# 🍏 ExploreWorld - Fruit Shop Express App

Welcome to **ExploreWorld**, a simple Express.js project that showcases a fruit shop using local JSON data and a clean front-end. This is designed to demonstrate how Express can serve static files and provide API routes for dynamic data fetching.

## 🧰 Features

- Express server with API route (`/api/fruits`)
- Local JSON data for fruits
- HTML, CSS, and JS front-end
- Responsive UI with fruit images and names
- Navigation menu: Home | About | Data
- Easy-to-understand project structure

## 📁 Project Structure
project-root/
├── app.js # Main Express server file
├── /data
│ └── fruits.json # JSON file with fruit data
├── /public
│ ├── index.html # Main Home page
│ ├── about.html # About page
│ ├── data.html # Data viewing page
│ ├── styles.css # Custom styling
│ └── script.js # JavaScript for fetch and UI logic
└── README.md # This file

## 🚀 Run the Project

Make sure you have Node.js installed.

```bash
# Step 1: Install dependencies
npm install

# Step 2: Run the server
npm start

# Step 3: Open in your browser
http://localhost:3000
