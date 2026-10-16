import mongoose from 'mongoose';

const packageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    default: '₹',
  },
  pages: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  features: [{
    type: String,
    required: true,
  }],
  isPopular: {
    type: Boolean,
    default: false,
  },
  badge: {
    type: String,
    default: '',
  },
  ctaText: {
    type: String,
    default: 'Get Started',
  },
  deliveryDays: {
    type: String,
    default: '3-7 Days',
  }
}, { timestamps: true });

export default mongoose.model('Package', packageSchema);
