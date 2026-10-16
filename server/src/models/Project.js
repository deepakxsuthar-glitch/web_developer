import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Portfolio', 'Business', 'Landing Page', 'Full Stack'],
  },
  shortDescription: {
    type: String,
    required: true,
  },
  fullDescription: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  tags: [{
    type: String,
    required: true,
  }],
  liveUrl: {
    type: String,
    default: '#',
  },
  githubUrl: {
    type: String,
    default: '#',
  },
  client: {
    type: String,
    default: 'Freelance Client',
  },
  year: {
    type: String,
    default: '2025-2026',
  },
  featured: {
    type: Boolean,
    default: false,
  }
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);
