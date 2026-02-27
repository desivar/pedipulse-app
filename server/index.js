const express = require('express');
const cors = require('cors');
const path = require('path'); // Move this to the top
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// 1. Middleware
app.use(cors()); 
app.use(express.json());

// 2. API Routes (The "Brain")
app.get('/api/welcome', (req, res) => {
  res.json({
    message: "Ready to make a difference today?",
    quote: "You’re a hero in a scrub suit.",
    palette: ["#7BDFF2", "#B2F7EF", "#EFF7F6", "#F7D6E0", "#F2B5D4"]
  });
});

// 3. Static Files (Serving the "Face" - React)
// This only matters when you run the "production" build
app.use(express.static(path.join(__dirname, '../client/dist')));

// 4. Catch-all (Must be LAST)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// 5. Start Server
app.listen(PORT, () => {
  console.log(`Server is skipping along on http://localhost:${PORT}`);
});