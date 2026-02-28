const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000; // Hardcoded for now to ensure it works

// 1. Middleware
app.use(cors()); 
app.use(express.json());

// 2. The API Route (The Nurse's Greeting)
app.get('/api/welcome', (req, res) => {
  res.json({
    message: "Ready to make a difference today?",
    quote: "You’re a hero in a scrub suit.",
    palette: ["#7BDFF2", "#B2F7EF", "#EFF7F6", "#F7D6E0", "#F2B5D4"]
  });
});

// 3. Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});