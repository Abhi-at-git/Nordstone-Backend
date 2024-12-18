const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to handle calculations
app.post("/calculate", (req, res) => {
  const { expression } = req.body;

  try {
    // Evaluate the expression safely
    const result = eval(expression); // In production, use a safer eval library
    res.json({ result });
    console.log(req);
    console.log(res);
  } catch (error) {
    res.status(400).json({ error: "Invalid expression" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
