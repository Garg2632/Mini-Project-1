const express = require('express');
const app = express();
const path = require('path');
const data = require('./data/items.json');

const PORT = 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to send JSON data
app.get('/api/items', (req, res) => {
  res.json(data);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
