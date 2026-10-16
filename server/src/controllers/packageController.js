import Package from '../models/Package.js';
import { isConnectedToMongo } from '../config/db.js';

// Fallback packages if MongoDB is unreachable
const fallbackPackages = [
  {
    _id: 'pkg-1',
    title: 'BASIC PORTFOLIO WEBSITE',
    slug: 'basic-portfolio',
    price: 5000,
    currency: '₹',
    pages: '1 to 2 pages',
    description: 'Ideal for students, freelancers, artists, and professionals looking to establish an impressive online presence.',
    features: [
      '1 to 2 pages (Clean, modern structure)',
      'Personal portfolio / profile website',
      'Fully responsive design (Mobile + Tablet + Desktop)',
      'Working interactive contact form',
      'Smooth scroll animations & micro-interactions',
      'Basic SEO setup (Meta tags, Open Graph, Sitemap)',
      'Fast page load speed optimization'
    ],
    isPopular: false,
    badge: 'Starter',
    ctaText: 'Get Started',
    deliveryDays: '3-5 Days'
  },
  {
    _id: 'pkg-2',
    title: 'BUSINESS WEBSITE',
    slug: 'business-website',
    price: 9000,
    currency: '₹',
    pages: 'More than 2 pages (Multi-page)',
    description: 'Comprehensive business solution built to generate leads, build trust, and turn visitors into paying customers.',
    features: [
      'More than 2 pages (Multi-page custom architecture)',
      'Custom business design with logo & brand placement',
      'High-converting landing page with hero CTA',
      'Advanced scroll animations + interactive mouse effects',
      'Contact form with instant email notifications & auto-reply',
      'Google Maps integration + Floating WhatsApp chat button',
      'Full On-Page SEO optimization & schema markup',
      'Speed optimization, Helmet security & 30-day free support'
    ],
    isPopular: true,
    badge: 'Most Popular',
    ctaText: 'Get Started',
    deliveryDays: '7-10 Days'
  }
];

export const getPackages = async (req, res, next) => {
  try {
    if (isConnectedToMongo) {
      const packages = await Package.find().sort({ price: 1 });
      if (packages && packages.length > 0) {
        return res.status(200).json({ success: true, count: packages.length, data: packages });
      }
    }
    return res.status(200).json({ success: true, count: fallbackPackages.length, data: fallbackPackages });
  } catch (error) {
    next(error);
  }
};
