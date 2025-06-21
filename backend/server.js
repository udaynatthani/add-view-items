const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Import routes
const itemRoutes = require('./routes/item');
const emailRoutes = require('./routes/email');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Serve static images from /uploads (with CORS header to avoid OpaqueResponseBlocking)
app.use(
  '/uploads',
  express.static(path.join(__dirname, 'uploads'), {
    setHeaders: (res) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
    },
  })
);

// Routes
app.use('/api/items', itemRoutes);
app.use('/api/enquire', emailRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () =>
      console.log('✅ Server running at http://localhost:5000')
    );
  })
  .catch((err) => console.error('❌ MongoDB connection error:', err));
