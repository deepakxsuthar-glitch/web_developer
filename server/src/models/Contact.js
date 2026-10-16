import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  selectedPackage: {
    type: String,
    required: true,
    enum: [
      'Basic Portfolio Website (₹5,000)',
      'Business Website (₹9,000)',
      'Custom Quote / Other'
    ],
    default: 'Business Website (₹9,000)'
  },
  message: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'closed'],
    default: 'new',
  },
  ipAddress: {
    type: String,
    default: '',
  }
}, { timestamps: true });

export default mongoose.model('Contact', contactSchema);
