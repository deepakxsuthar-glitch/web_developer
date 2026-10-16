import React, { useState, useEffect } from 'react';
import { ExternalLink, Filter, Sparkles, Layers } from 'lucide-react';
import ProjectModal from '../components/ProjectModal';
import TiltCard from '../components/TiltCard';

const initialProjects = [
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

const Projects = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedModalProject, setSelectedModalProject] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch projects from backend API with fallback
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/projects');
        if (res.ok) {
          const json = await res.json();
          if (json.data && json.data.length > 0) {
            setProjects(json.data);
          }
        }
      } catch (err) {
        // Fallback already initialized in state
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const categories = ['All', 'Portfolio', 'Business', 'Landing Page'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40">
          Portfolio & Case Studies
        </span>
        <h1 className="light-bg-heading text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
          Recent Web Projects
        </h1>
        <p className="light-bg-copy text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
          Explore a curated selection of live websites and landing pages engineered for speed, conversions, and distinctive visual aesthetics.
        </p>
      </section>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
            }`}
          >
            {cat === 'All' ? 'All Projects' : `${cat}s`}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project._id}
            onClick={() => setSelectedModalProject(project)}
            className="group cursor-pointer rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
          >
            <div>
              {/* Thumbnail Image */}
              <div className="relative h-52 overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Category Pill */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-slate-950/80 text-cyan-400 border border-cyan-500/30 backdrop-blur-sm">
                  {project.category}
                </span>

                <span className="absolute bottom-3 right-3 text-[10px] font-mono text-slate-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                  {project.year}
                </span>
              </div>

              {/* Card Details */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-4">
                  {project.shortDescription}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-slate-300 border border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs text-cyan-400 font-medium border-t border-slate-800/60">
              <span className="group-hover:underline">View details & live preview</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal Preview */}
      {selectedModalProject && (
        <ProjectModal
          project={selectedModalProject}
          onClose={() => setSelectedModalProject(null)}
        />
      )}
    </div>
  );
};

export default Projects;
