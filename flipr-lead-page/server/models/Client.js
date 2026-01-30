import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema({
  image: { type: String },
  name: { type: String, required: true },
  description: { type: String },
  designation: { type: String },
}, { timestamps: true });

export default mongoose.models.Client || mongoose.model('Client', ClientSchema);
