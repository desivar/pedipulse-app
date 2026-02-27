const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allows our React app to talk to this server
app.use(express.json()); // Allows the server to read JSON data

// A "Welcome" route for our Pediatric Nurse
app.get('/api/welcome', (req, res) => {
  res.json({
    message: "Ready to make a difference today?",
    quote: "You’re a hero in a scrub suit.",
    palette: ["#7BDFF2", "#B2F7EF", "#EFF7F6", "#F7D6E0", "#F2B5D4"]
  });
});

app.listen(PORT, () => {
  console.log(`Server is skipping along on http://localhost:${PORT}`);
});