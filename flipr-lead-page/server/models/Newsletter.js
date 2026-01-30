import mongoose from 'mongoose';

const NewsletterSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
}, { timestamps: true });

let Newsletter;
if (mongoose.models.Newsletter) {
  Newsletter = mongoose.models.Newsletter;
} else {
  Newsletter = mongoose.model('Newsletter', NewsletterSchema);
}

export default Newsletter;
