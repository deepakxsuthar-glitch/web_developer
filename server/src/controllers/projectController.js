import Project from '../models/Project.js';
import { isConnectedToMongo } from '../config/db.js';

let fallbackProjects = [
  {
    _id: 'proj-1',
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
    _id: 'proj-2',
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
    _id: 'proj-3',
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
    _id: 'proj-4',
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
    _id: 'proj-5',
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
    _id: 'proj-6',
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
];

export const getProjects = async (req, res, next) => {
  try {
    const { category, featured } = req.query;
    if (isConnectedToMongo) {
      const query = {};
      if (category && category !== 'All') query.category = category;
      if (featured === 'true') query.featured = true;

      const projects = await Project.find(query).sort({ createdAt: -1 });
      if (projects && projects.length > 0) {
        return res.status(200).json({ success: true, count: projects.length, data: projects });
      }
    }

    let filtered = [...fallbackProjects];
    if (category && category !== 'All') {
      filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }
    if (featured === 'true') {
      filtered = filtered.filter(p => p.featured === true);
    }

    return res.status(200).json({ success: true, count: filtered.length, data: filtered });
  } catch (error) {
    next(error);
  }
};

export const createProject = async (req, res, next) => {
  try {
    const { title, category, shortDescription, fullDescription, image, tags, liveUrl, githubUrl, client, year, featured } = req.body;

    if (!title || !category || !shortDescription || !fullDescription || !image) {
      return res.status(400).json({ success: false, message: 'Please provide all required fields' });
    }

    let savedProject;
    if (isConnectedToMongo) {
      savedProject = await Project.create({
        title,
        category,
        shortDescription,
        fullDescription,
        image,
        tags: Array.isArray(tags) ? tags : (tags ? tags.split(',').map(t => t.trim()) : []),
        liveUrl,
        githubUrl,
        client,
        year,
        featured: Boolean(featured)
      });
    } else {
      savedProject = {
        _id: `proj-${Date.now()}`,
        title,
        category,
        shortDescription,
        fullDescription,
        image,
        tags: Array.isArray(tags) ? tags : (tags ? tags.split(',').map(t => t.trim()) : []),
        liveUrl,
        githubUrl,
        client,
        year,
        featured: Boolean(featured)
      };
      fallbackProjects.unshift(savedProject);
    }

    return res.status(201).json({
      success: true,
      message: 'Project created successfully',
      data: savedProject
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (isConnectedToMongo) {
      await Project.findByIdAndDelete(id);
    } else {
      fallbackProjects = fallbackProjects.filter(p => p._id !== id);
    }
    return res.status(200).json({ success: true, message: 'Project deleted successfully' });
  } catch (error) {
    next(error);
  }
};
