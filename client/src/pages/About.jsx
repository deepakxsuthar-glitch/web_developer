import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Server, Layout, Sparkles, CheckCircle2, ArrowRight, Award, Compass, HeartHandshake } from 'lucide-react';
import StatsCounter from '../components/StatsCounter';

const About = () => {
  const skills = [
    { name: 'React (Vite / Next)', level: 88, category: 'Frontend' },
    { name: 'Tailwind CSS & Modern CSS', level: 92, category: 'Frontend' },
    { name: 'JavaScript (ES6+) & TypeScript Basics', level: 85, category: 'Core' },
    { name: 'HTML5 & Responsive Web Design', level: 95, category: 'Core' },
    { name: 'Framer Motion & Micro-interactions', level: 82, category: 'Animation' },
    { name: 'Node.js & Express.js API Development', level: 78, category: 'Backend' },
    { name: 'MongoDB & Mongoose Databases', level: 75, category: 'Database' },
    { name: 'REST APIs & Third-Party Integrations', level: 84, category: 'Backend' },
    { name: 'Git, GitHub & CI/CD Deployment', level: 85, category: 'DevOps' },
    { name: 'SEO & Performance (Lighthouse 90+)', level: 88, category: 'Optimization' },
  ];

  const timeline = [
    {
      year: '2023',
      title: 'The Spark & Foundations',
      description: 'Wrote my first lines of HTML and CSS. Built dozens of small practice components, mastered flexbox, CSS Grid, and vanilla JavaScript programming patterns.',
    },
    {
      year: '2024',
      title: 'Full-Stack Mastery with React & Node',
      description: 'Transitioned to modern component-driven development with React and Vite. Learned Express.js, MongoDB database modeling, authentication, and REST API architecture.',
    },
    {
      year: '2025',
      title: 'First Freelance Clients & Real-World Impact',
      description: 'Built websites for local boutiques, medical clinics, and independent artists. Learned firsthand the importance of conversion rates, fast page loads, and mobile usability.',
    },
    {
      year: '2026',
      title: 'Production Freelancer & Business Partner',
      description: 'Dedicated to helping small business owners establish authoritative online footprints with transparent fixed-price packages, custom code, and 3-7 day delivery cycles.',
    },
  ];

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* ══════════════════════════════════════
          1. HEADER & STORY
          ══════════════════════════════════════ */}
      <section className="space-y-8 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40">
            About Deepak
          </span>
          <h1 className="light-bg-heading text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Building Clean Code That Solves Real Business Problems
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-12">
          {/* Avatar / Brand Image */}
          <div className="md:col-span-5 relative">
            <div className="about-profile-card relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
              <img
                src="/images/about-profile.webp"
                alt="Deepak - Junior Web Developer"
                className="w-full h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="about-profile-overlay absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-mono text-cyan-400">Junior Full-Stack Developer</p>
                <h3 className="text-xl font-bold text-white">Deepak</h3>
                <p className="text-xs text-slate-300 mt-1">Based in Rajasthan, India • Serving Clients Worldwide</p>
              </div>
            </div>
          </div>

          {/* Bio Text */}
          <div className="md:col-span-7 space-y-5 light-bg-copy text-slate-300 text-sm sm:text-base leading-relaxed">
            <p className="light-bg-heading text-lg text-white font-medium">
              Hello! I'm Deepak, a self-driven Junior Web Developer who loves crafting visually captivating, high-performing websites.
            </p>
            <p>
              Many small businesses still rely on outdated templates or slow page builders that turn visitors away. My mission is to bridge this gap: providing clean, hand-coded React websites with modern UI/UX design at prices that small business owners and freelancers can comfortably afford.
            </p>
            <p>
              I prioritize what actually moves the needle for your business:
              <strong className="text-cyan-400"> instant mobile responsiveness</strong>,
              <strong className="text-purple-400"> sub-second load times</strong>, and
              <strong className="text-blue-400"> direct conversion triggers</strong> like WhatsApp buttons and automated contact forms.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-200">100% Mobile Responsive</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-200">Fast 3–7 Day Delivery</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-200">SEO & Speed Optimized</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. SKILLS WITH ANIMATED PROGRESS BARS
          ══════════════════════════════════════ */}
      <section className="py-16 border-t border-slate-800/80">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40">
            Technical Proficiency
          </span>
          <h2 className="light-bg-heading text-3xl font-extrabold text-white mt-3">
            Skills & Modern Stack
          </h2>
          <p className="light-bg-copy text-slate-400 text-sm mt-2">
            Every technology in my arsenal is picked for speed, maintainability, and clean code standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={skill.name}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center justify-between text-sm font-medium mb-2">
                <span className="text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  {skill.name}
                </span>
                <span className="text-cyan-400 font-mono text-xs">{skill.level}%</span>
              </div>

              {/* Progress Bar Container */}
              <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden p-0.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: idx * 0.08, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. JOURNEY TIMELINE
          ══════════════════════════════════════ */}
      <section className="py-16 border-t border-slate-800/80">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 bg-purple-950/60 px-3 py-1 rounded-full border border-purple-800/40">
            Growth & Experience
          </span>
          <h2 className="light-bg-heading text-3xl font-extrabold text-white mt-3">
            My Developer Journey
          </h2>
          <p className="light-bg-copy text-slate-400 text-sm mt-2">
            From learning fundamental syntax to deploying commercial web applications.
          </p>
        </div>

        <div className="relative border-l border-slate-800 ml-4 sm:ml-32 space-y-12">
          {timeline.map((item, index) => (
            <div key={item.year} className="relative pl-8 sm:pl-10">
              {/* Year indicator on desktop */}
              <div className="hidden sm:block absolute -left-28 top-0 font-mono font-bold text-cyan-400 text-base">
                {item.year}
              </div>

              {/* Node dot */}
              <div className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-slate-950 border-4 border-cyan-400 shadow-md shadow-cyan-400/50" />

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                <span className="sm:hidden inline-block px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-cyan-950 text-cyan-400 border border-cyan-800/60 mb-2">
                  {item.year}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. CORE PHILOSOPHY
          ══════════════════════════════════════ */}
      <section className="py-16 border-t border-slate-800/80">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Lean & Maintainable</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              No bloated WordPress plugins or unnecessary code. Lightweight, native JS and Tailwind CSS for pure speed.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Delightful UI/UX</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subtle animations, smooth micro-interactions, and accessible typography that make your brand look world-class.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Clear Communication</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Daily updates on WhatsApp, transparent milestones, and zero technical jargon to confuse you.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-xl shadow-blue-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all text-sm"
          >
            <span>Let's Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
