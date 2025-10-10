const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const resumeRoutes = require('./routes/resumes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(
    'mongodb+srv://vishalsuresh1975_db_user:48FtJy1ih89iMjOK@revaaicluster.gfcs2nz.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// API routes
app.use('/api/resumebuilder', resumeRoutes);

// Serve React frontend in production
app.use(express.static(path.join(__dirname, 'frontend/build')));
// New (Express 6+ compatible)
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});



// Start server
const PORT = process.env.PORT || 3006;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
