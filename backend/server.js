const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const resumeRoutes = require('./routes/resumes');

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect(
  'mongodb+srv://vishalsuresh1975_db_user:48FtJy1ih89iMjOK@revaaicluster.gfcs2nz.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Use routes
app.use('/api/resumebuilder', resumeRoutes);

app.listen(3006, () => console.log('✅ Backend running on http://localhost:3006'));
