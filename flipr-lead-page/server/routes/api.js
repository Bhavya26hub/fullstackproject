import express from 'express';
import Project from '../models/Project.js';
import Client from '../models/Client.js';
import Contact from '../models/Contact.js';
import Newsletter from '../models/Newsletter.js';

const router = express.Router();

// Projects
router.get('/projects', async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json(projects);
});

// Clients
router.get('/clients', async (req, res) => {
  const clients = await Client.find().sort({ createdAt: -1 });
  res.json(clients);
});

// Contact form
router.post('/contact', async (req, res) => {
  try {
    const { fullName, email, mobile, city } = req.body;
    const contact = await Contact.create({ fullName, email, mobile, city });
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Newsletter subscribe
router.post('/newsletter', async (req, res) => {
  try {
    const { email } = req.body;
    const sub = await Newsletter.create({ email });
    res.status(201).json(sub);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// List newsletter subscribers (admin)
router.get('/newsletter', async (req, res) => {
  const subs = await Newsletter.find().sort({ createdAt: -1 });
  res.json(subs);
});

export default router;
