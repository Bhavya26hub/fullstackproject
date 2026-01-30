import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import apiRoutes from "./routes/api.js";
import { MongoMemoryServer } from 'mongodb-memory-server';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

const connectOptions = {
  dbName: process.env.MONGODB_DB || undefined,
  serverSelectionTimeoutMS: 10000,
};

async function seedDefaults() {
  // lazy import models to avoid circular early requires
  const Project = (await import('./models/Project.js')).default;
  const Client = (await import('./models/Client.js')).default;

  const pCount = await Project.countDocuments();
  if (pCount === 0) {
    await Project.create([
      { name: 'Project One', description: 'Sample project A', image: '' },
      { name: 'Project Two', description: 'Sample project B', image: '' },
    ]);
    console.log('Seeded sample projects');
  }

  const cCount = await Client.countDocuments();
  if (cCount === 0) {
    await Client.create([
      { name: 'Happy Client A', description: 'Client description', designation: 'CEO', image: '' },
      { name: 'Happy Client B', description: 'Client description', designation: 'CTO', image: '' },
    ]);
    console.log('Seeded sample clients');
  }
}

async function start() {
  let mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    console.warn('No MONGODB_URI provided — starting in-memory MongoDB for development');
    const mongod = await MongoMemoryServer.create();
    mongoUri = mongod.getUri();
  }

  try {
    await mongoose.connect(mongoUri, connectOptions);
    console.log('✅ MongoDB connected');
    await seedDefaults();
  } catch (err) {
    console.error('❌ Mongo error:', err);
    console.error('Hint: check Atlas Network Access IP whitelist, database user credentials, and that the connection string uses the correct form (mongodb+srv:// for SRV).');
    process.exit(1);
  }

  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

start();
