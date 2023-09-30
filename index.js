// index.js
const express = require('express');
const cors = require('cors');
const { connectToDatabase } = require('./db');
const carRouter = require('./routes/cars');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/cars', carRouter);

// Start the server and connect to the database
app.listen(PORT, async () => {
  try {
    await connectToDatabase();
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error('Server startup error:', error);
  }
});
