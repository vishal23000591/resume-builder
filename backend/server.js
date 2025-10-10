const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const resumeRoutes = require('./routes/resumes');

const app = express();

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

// Serve frontend static files (Vite output)
const frontendBuildPath = path.join(__dirname, 'frontend', 'dist');
app.use(express.static(frontendBuildPath));

// Fallback for all non-API requests
app.use((req, res, next) => {
  if (req.path.startsWith('/api/')) return next();
  res.sendFile(path.join(frontendBuildPath, 'index.html'));
});


const PORT = process.env.PORT || 3006;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
