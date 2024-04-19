const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./userRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to My App!');
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));