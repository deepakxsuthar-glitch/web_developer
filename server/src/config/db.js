import mongoose from 'mongoose';
import Package from '../models/Package.js';
import Project from '../models/Project.js';
import User from '../models/User.js';

export let isConnectedToMongo = false;

export const seedInitialData = async () => {
  try {
    // 1. Seed Packages if empty
    const packageCount = await Package.countDocuments();
    if (packageCount === 0) {
      await Package.create([
        {
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
      ]);
      console.log('✅ Default packages seeded successfully in MongoDB');
    }

    // 2. Seed Projects if empty
    const projectCount = await Project.countDocuments();
    if (projectCount === 0) {
      await Project.create([
        {
          title: 'Aura Luxe - Fashion E-Commerce Landing',
          category: 'Landing Page',
          shortDescription: 'High-converting fashion apparel landing page with 3D tilt effects and animated catalog.',
          fullDescription: 'A high-converting boutique storefront built with React and Tailwind CSS. Features dynamic cart previews, interactive product lookbooks, and sub-second load times.',
          image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
          tags: ['React', 'Tailwind CSS', 'Framer Motion', 'E-Commerce'],
          liveUrl: 'https://example.com/aura-luxe',
          githubUrl: 'https://github.com/rjdeepu00',
          client: 'Aura Lifestyle Co.',
          year: '2025',
          featured: true
        },
        {
          title: 'Apex Law & Associates - Corporate Site',
          category: 'Business',
          shortDescription: 'Multi-page firm website featuring appointment booking, practice areas, and Google Maps integration.',
          fullDescription: 'Corporate business website for a legal advisory firm. Includes consultation scheduler, attorney profiles, encrypted contact flow, and customized dark/light mode.',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
          tags: ['React', 'Express', 'Node.js', 'MongoDB', 'SEO'],
          liveUrl: 'https://example.com/apex-law',
          githubUrl: 'https://github.com/rjdeepu00',
          client: 'Apex Law Firm',
          year: '2026',
          featured: true
        },
        {
          title: 'Dr. Rohan Verma - Surgeon Portfolio',
          category: 'Portfolio',
          shortDescription: 'Personal brand portfolio for a medical specialist with patient testimonials and timeline.',
          fullDescription: 'Sophisticated doctor portfolio site with interactive medical milestones timeline, verified patient case studies, and instant WhatsApp booking link.',
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
          tags: ['React', 'Tailwind CSS', 'GSAP', 'Responsive'],
          liveUrl: 'https://example.com/dr-rohan',
          githubUrl: 'https://github.com/rjdeepu00',
          client: 'Dr. Rohan Verma',
          year: '2025',
          featured: true
        },
        {
          title: 'Urban Spices - Artisanal Cafe & Bistro',
          category: 'Business',
          shortDescription: 'Vibrant restaurant website with interactive digital menu, table reservation, and location map.',
          fullDescription: 'Engaging bistro website with digital PDF & web menu, allergen filters, table booking form with automated email confirmations, and direct WhatsApp ordering.',
          image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
          tags: ['React', 'Tailwind CSS', 'Framer Motion', 'WhatsApp API'],
          liveUrl: 'https://example.com/urban-spices',
          githubUrl: 'https://github.com/rjdeepu00',
          client: 'Urban Spices Bistro',
          year: '2026',
          featured: true
        },
        {
          title: 'Nexus SaaS - AI Startup Launchpad',
          category: 'Landing Page',
          shortDescription: 'Futuristic AI SaaS product landing page with animated feature demo and pricing matrix.',
          fullDescription: 'High-tech landing page for an early-stage SaaS startup. Features animated particle backgrounds, interactive pricing toggle, and interactive feature walkthrough.',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
          tags: ['React', 'Tailwind CSS', 'Framer Motion', 'SaaS'],
          liveUrl: 'https://example.com/nexus-saas',
          githubUrl: 'https://github.com/rjdeepu00',
          client: 'Nexus Intelligence',
          year: '2025',
          featured: false
        },
        {
          title: 'DevCraft - Developer Personal Brand',
          category: 'Portfolio',
          shortDescription: 'Minimalist developer portfolio with terminal theme, GitHub activity, and blog section.',
          fullDescription: 'Sleek, high-performance developer portfolio with dynamic project showcase, skill proficiency bars, and downloadable resume module.',
          image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
          tags: ['React', 'Tailwind CSS', 'Node.js', 'Clean UI'],
          liveUrl: 'https://example.com/devcraft',
          githubUrl: 'https://github.com/rjdeepu00',
          client: 'Freelance Portfolio',
          year: '2025',
          featured: false
        }
      ]);
      console.log('✅ Default projects seeded successfully in MongoDB');
    }

    // 3. Seed or Update Admin user password
    const { ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;
    if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
      console.warn('Skipping admin seed: ADMIN_EMAIL and ADMIN_PASSWORD must be configured.');
    } else {
    const adminEmail = ADMIN_EMAIL;
    const targetPassword = ADMIN_PASSWORD;
    let existingAdmin = await User.findOne({ email: adminEmail });
    if (!existingAdmin) {
      await User.create({
        email: adminEmail,
        password: targetPassword,
        role: 'admin'
      });
      console.log(`✅ Default admin created (${adminEmail})`);
    } else {
      existingAdmin.password = targetPassword;
      await existingAdmin.save();
      console.log(`✅ Admin password updated (${adminEmail})`);
    }
    }
  } catch (error) {
    console.error('⚠️ Seeding error:', error.message);
  }
};

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.warn('⚠️ MONGODB_URI not found in environment. Server will use in-memory store for fallback.');
    return;
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    isConnectedToMongo = true;
    console.log(`🚀 MongoDB Connected: ${conn.connection.host}`);
    await seedInitialData();
  } catch (error) {
    console.warn(`⚠️ MongoDB connection failed (${error.message}).`);
    console.log('💡 Note: The API will seamlessly use the in-memory repository for development and demo mode.');
  }
};
