const express = require('express');
const router = express.Router();
const ResumeBuilder = require('../models/ResumeBuilder');

// Save resume
router.post('/', async (req, res) => {
  try {
    const r = new ResumeBuilder(req.body);
    await r.save();
    res.status(201).json(r);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Get all resumes
router.get('/', async (req, res) => {
  try {
    const list = await ResumeBuilder.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Get latest resume
router.get('/latest', async (req, res) => {
  try {
    const latest = await ResumeBuilder.findOne().sort({ createdAt: -1 });
    res.json(latest || null);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
