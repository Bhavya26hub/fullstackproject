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

// Contact form - GET all contacts
router.get('/contact', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    console.log(`📊 [GET /contact] Found ${contacts.length} contacts in database`);
    if (contacts.length > 0) {
      console.log('📋 [GET /contact] Contacts:', contacts.map(c => ({ id: c._id, name: c.fullName, email: c.email })));
    }
    res.json(contacts);
  } catch (err) {
    console.error('❌ [GET /contact] Error fetching contacts:', err.message);
    res.status(400).json({ error: err.message });
  }
});

// Contact form - POST new contact
router.post('/contact', async (req, res) => {
  try {
    const { fullName, email, mobile, city } = req.body;
    console.log('📥 [POST /contact] Received:', { fullName, email, mobile, city });
    
    if (!fullName || !email) {
      console.error('❌ Missing required fields');
      return res.status(400).json({ error: "fullName and email are required" });
    }
    
    const contact = await Contact.create({ 
      fullName, 
      email, 
      mobile: mobile || '', 
      city: city || '' 
    });
    
    console.log('✅ [POST /contact] Saved to DB:', contact);
    console.log('📊 [POST /contact] Total contacts in DB now:', await Contact.countDocuments());
    
    res.status(201).json(contact);
  } catch (err) {
    console.error('❌ [POST /contact] Error:', err.message);
    res.status(400).json({ error: err.message });
  }
});

// Contact form - DELETE contact
router.delete('/contact/:id', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) return res.status(404).json({ error: "Contact not found" });
    res.json({ message: "Contact deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Newsletter subscribe - GET all subscribers
router.get('/newsletter', async (req, res) => {
  try {
    const subs = await Newsletter.find().sort({ createdAt: -1 });
    res.json(subs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Newsletter subscribe - POST new subscriber
router.post('/newsletter', async (req, res) => {
  try {
    const { email } = req.body;
    const sub = await Newsletter.create({ email });
    res.status(201).json(sub);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Newsletter subscribe - DELETE subscriber
router.delete('/newsletter/:id', async (req, res) => {
  try {
    const sub = await Newsletter.findByIdAndDelete(req.params.id);
    if (!sub) return res.status(404).json({ error: "Subscriber not found" });
    res.json({ message: "Subscriber deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
