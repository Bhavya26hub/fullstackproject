import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  image: { type: String },
  name: { type: String, required: true },
  description: { type: String },
}, { timestamps: true });

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);
