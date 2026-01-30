import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String },
  city: { type: String },
}, { timestamps: true });

let Contact;
if (mongoose.models.Contact) {
  Contact = mongoose.models.Contact;
} else {
  Contact = mongoose.model('Contact', ContactSchema);
}

export default Contact;
