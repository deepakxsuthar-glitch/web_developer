import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Code2,
  Rocket,
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  Clock,
  ExternalLink,
  Laptop,
  Users,
  Award,
  ChevronRight
} from 'lucide-react';
import StatsCounter from '../components/StatsCounter';
import TiltCard from '../components/TiltCard';
import ProjectModal from '../components/ProjectModal';
import { usePackage } from '../context/PackageContext';

const Home = () => {
  const navigate = useNavigate();
  const { selectPackageAndGo } = usePackage();
  const [selectedProject, setSelectedProject] = useState(null);

  // Animated typing effect
  const roles = [
    'Portfolio Websites',
    'Business Websites',
    'Landing Pages',
    'Full-Stack Web Apps',
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  // 4-Step Process
  const steps = [
    {
      step: '01',
      title: 'Discuss & Discover',
      desc: 'We map out your business goals, target audience, branding, and content requirements.',
    },
    {
      step: '02',
      title: 'Design & Prototype',
      desc: 'Crafting responsive, high-converting wireframes with modern aesthetics and typography.',
    },
    {
      step: '03',
      title: 'Develop & Animate',
      desc: 'Writing clean, fast, and SEO-friendly React & Tailwind code with smooth micro-interactions.',
    },
    {
      step: '04',
      title: 'Deliver & Deploy',
      desc: 'Domain setup, speed audits, security checks, and 30-day post-launch support.',
    },
  ];

  // Why Choose Me
  const whyChooseMe = [
    {
      icon: Clock,
      title: 'Fast Delivery',
      desc: 'Get your website launched in just 3 to 7 days with rapid turnarounds and no unnecessary delays.',
    },
    {
      icon: Sparkles,
      title: 'Affordable Pricing',
      desc: 'Starting at just ₹5,000. Transparent fixed packages with zero hidden fees.',
    },
    {
      icon: Code2,
      title: 'Modern Design',
      desc: 'Crafted with React, Tailwind CSS, and smooth animations that look stunning on every screen.',
    },
    {
      icon: ShieldCheck,
      title: 'Free Support',
      desc: 'Direct personal support with 30 days of free updates and bug fixes after delivery.',
    },
  ];

  return (
    <div className="relative pt-24 pb-20 overflow-hidden">
      {/* ══════════════════════════════════════
          1. HERO SECTION
          ══════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-slate-900/80 border border-cyan-500/30 text-cyan-400 backdrop-blur-md shadow-lg shadow-cyan-500/10"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for New Projects • Starts at ₹5,000</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="light-bg-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight sm:leading-none"
          >
            I Build Websites That{' '}
            <span className="hero-highlight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              Grow Your Business
            </span>
          </motion.h1>

          {/* Typing Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="light-bg-copy text-xl sm:text-2xl text-slate-300 font-medium h-10 flex items-center justify-center"
          >
            <span>Crafting </span>
            <span className="text-cyan-400 font-semibold ml-2 underline decoration-cyan-500/50 underline-offset-4">
              {displayText}
            </span>
            <span className="w-0.5 h-6 bg-cyan-400 ml-1 animate-pulse" />
          </motion.div>

          {/* Bio tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="light-bg-copy max-w-2xl mx-auto text-slate-400 text-sm sm:text-base leading-relaxed"
          >
            Hi, I’m <strong>Deepak</strong>. A passionate Junior Web Developer creating fast, modern, and mobile-friendly websites that turn everyday visitors into paying customers.
          </motion.p>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-base font-bold text-white btn-magenta-gradient shadow-xl active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>Hire Me</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-base font-semibold text-white glass-panel hover:border-white/30 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Laptop className="w-5 h-5 text-[#C71BFF]" />
              <span>View Services</span>
            </Link>
          </motion.div>

          {/* ══════════════════════════════════════
              STATS COUNTERS (Count up on scroll)
              ══════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto border-t border-slate-800/80"
          >
            <div className="text-center p-3 sm:p-4 rounded-xl glass-panel">
              <div className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                <StatsCounter target={2} />
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Website Types</div>
            </div>

            <div className="text-center p-3 sm:p-4 rounded-xl glass-panel">
              <div className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-[#C71BFF]">
                <StatsCounter target={5} suffix="+" />
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Pages Per Site</div>
            </div>

            <div className="text-center p-3 sm:p-4 rounded-xl glass-panel">
              <div className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#C71BFF] to-pink-500">
                <StatsCounter target={100} suffix="%" />
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Responsive</div>
            </div>

            <div className="text-center p-3 sm:p-4 rounded-xl glass-panel">
              <div className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                <StatsCounter target={3} suffix="-7 Days" />
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Fast Delivery</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. SERVICES PREVIEW
          ══════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40">
            What I Deliver
          </span>
          <h2 className="light-bg-heading text-3xl sm:text-4xl font-extrabold text-white mt-3">
            High-Impact Web Services Designed for Small Businesses
          </h2>
          <p className="light-bg-copy text-slate-400 text-sm sm:text-base mt-3">
            Every website is custom engineered with modern frameworks, speed optimization, and responsive design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <TiltCard className="p-8 bg-slate-900/70 border border-slate-800 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Portfolio Websites</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Showcase your skills, projects, and personal brand with smooth animations and contact capture. Ideal for freelancers and specialists.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-cyan-400 font-semibold text-sm">Starts at ₹5,000</span>
              <Link to="/services" className="text-xs text-slate-300 hover:text-white flex items-center gap-1 font-medium">
                Learn more <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </TiltCard>

          {/* Card 2 */}
          <TiltCard className="p-8 bg-slate-900/70 border border-purple-500/40 rounded-2xl flex flex-col justify-between" glow>
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Business Multi-Page</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Complete multi-page web presence for companies, law firms, clinics, and eateries with maps, WhatsApp, and email alerts.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-purple-400 font-semibold text-sm">Most Popular: ₹9,000</span>
              <Link to="/services" className="text-xs text-slate-300 hover:text-white flex items-center gap-1 font-medium">
                Learn more <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </TiltCard>

          {/* Card 3 */}
          <TiltCard className="p-8 bg-slate-900/70 border border-slate-800 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">High-Converting Landing Pages</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Laser-focused single pages built for product launches, ad campaigns, and lead generation with crisp conversion elements.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-blue-400 font-semibold text-sm">Custom Turnaround</span>
              <Link to="/services" className="text-xs text-slate-300 hover:text-white flex items-center gap-1 font-medium">
                Learn more <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. WHY CHOOSE ME
          ══════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 bg-purple-950/60 px-3 py-1 rounded-full border border-purple-800/40">
              Why Partner With Deepak
            </span>
            <h2 className="light-bg-heading text-3xl sm:text-4xl font-extrabold text-white mt-4 leading-tight">
              A Developer Who Cares About Your ROI, Not Just Code
            </h2>
            <p className="light-bg-copy text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
              Large agencies charge astronomical fees and take months. With me, you get direct, friendly 1-on-1 collaboration, fast delivery, and fair pricing without sacrificing modern design standards.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Lightning Fast Speed</h4>
                  <p className="text-xs text-slate-400 mt-1">Lighthouse 90+ score for maximum Google ranking & retention.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">3–7 Days Delivery</h4>
                  <p className="text-xs text-slate-400 mt-1">Get your business live on the internet without long delays.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Security & SEO Ready</h4>
                  <p className="text-xs text-slate-400 mt-1">Helmet security headers, meta tags, and structured data included.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Direct Communication</h4>
                  <p className="text-xs text-slate-400 mt-1">Real-time WhatsApp updates directly from Deepak.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-2xl rounded-3xl" />
            <div className="relative p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl">
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <span className="text-xs font-mono text-cyan-400">deepak-code-standards.tsx</span>
              </div>

              <div className="py-6 space-y-3 font-mono text-xs sm:text-sm text-slate-300">
                <p><span className="text-purple-400">const</span> developer = &#123;</p>
                <p className="pl-4">name: <span className="text-cyan-300">'Deepak'</span>,</p>
                <p className="pl-4">role: <span className="text-cyan-300">'Junior Full-Stack Developer'</span>,</p>
                <p className="pl-4">focus: <span className="text-emerald-400">'Conversion & Aesthetics'</span>,</p>
                <p className="pl-4">stack: [<span className="text-yellow-300">'React'</span>, <span className="text-yellow-300">'Tailwind'</span>, <span className="text-yellow-300">'Node'</span>, <span className="text-yellow-300">'MongoDB'</span>],</p>
                <p className="pl-4">guarantee: <span className="text-cyan-300">'100% Client Satisfaction'</span></p>
                <p>&#125;;</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">Need immediate consultation?</p>
                  <p className="text-sm font-semibold text-white">Call/WhatsApp: +91 9256729688</p>
                </div>
                <a
                  href="https://wa.me/919256729688"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
                >
                  Chat Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. WHAT I BUILD / WHAT I MAKE
          ══════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C71BFF] bg-[#C71BFF]/10 px-3 py-1 rounded-full border border-[#C71BFF]/30">
              WHAT I BUILD
            </span>
            <h2 className="light-bg-heading text-3xl sm:text-4xl font-extrabold text-white mt-3">
              What I Make For You
            </h2>
            <p className="light-bg-copy text-slate-400 text-sm sm:text-base mt-2">
              Clean, fast, animated websites that help you get noticed and get customers.
            </p>
          </div>
          <Link
            to="/services"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-[#C71BFF] hover:underline font-semibold text-sm"
          >
            <span>Explore Pricing & Packages</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 2 Cards: Side by side on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Portfolio Website */}
          <TiltCard className="p-6 sm:p-8 glass-panel rounded-3xl flex flex-col justify-between h-full">
            <div>
              {/* Top Meta */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#C71BFF]/15 text-[#C71BFF] border border-[#C71BFF]/30">
                  Portfolio
                </span>
                <span className="text-sm font-bold text-white">
                  Starts at <span className="text-[#C71BFF] text-lg font-extrabold">₹5,000</span>
                </span>
              </div>

              {/* Browser Window Mockup (CSS/SVG illustration) */}
              <div className="rounded-xl border border-white/10 bg-[#0f0f13]/90 overflow-hidden shadow-inner p-3 mb-6">
                <div className="flex items-center gap-1.5 pb-2.5 border-b border-white/10 px-1 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <div className="mx-auto w-32 h-4 rounded-full bg-white/5 border border-white/10 text-[9px] text-center text-slate-400 font-mono flex items-center justify-center">
                    deepak.dev/portfolio
                  </div>
                </div>
                {/* Visual Layout Mockup */}
                <div className="space-y-3 p-3 bg-gradient-to-b from-white/[0.04] to-transparent rounded-lg border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#C71BFF] to-blue-500 p-0.5 shrink-0 shadow-lg shadow-[#C71BFF]/20">
                      <div className="w-full h-full rounded-full bg-[#171717] flex items-center justify-center text-[10px] font-bold text-white">
                        PORT
                      </div>
                    </div>
                    <div className="flex-1 space-y-1.5">
                      <div className="h-3 w-32 bg-gradient-to-r from-white/90 to-white/30 rounded" />
                      <div className="h-2 w-48 bg-white/20 rounded" />
                    </div>
                    <div className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[9px] font-semibold">
                      Online
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 space-y-1.5">
                      <div className="h-10 rounded bg-gradient-to-br from-[#C71BFF]/30 to-blue-500/20" />
                      <div className="h-2 w-16 bg-white/40 rounded" />
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 space-y-1.5">
                      <div className="h-10 rounded bg-gradient-to-br from-blue-500/30 to-purple-500/20" />
                      <div className="h-2 w-16 bg-white/40 rounded" />
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Portfolio Website
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                A personal website for students, freelancers, doctors, designers and professionals to showcase their work and get hired.
              </p>

              {/* What's included */}
              <div className="mb-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  What's Included:
                </div>
                <ul className="space-y-2.5 text-sm text-slate-200">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C71BFF] shrink-0" />
                    <span>1 to 2 pages</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C71BFF] shrink-0" />
                    <span>Mobile responsive design</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C71BFF] shrink-0" />
                    <span>Smooth scroll animations</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C71BFF] shrink-0" />
                    <span>Contact form + WhatsApp button</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C71BFF] shrink-0" />
                    <span>Basic SEO setup</span>
                  </li>
                </ul>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['React', 'Tailwind CSS', 'Framer Motion'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 border border-white/10 text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => selectPackageAndGo('Basic Portfolio Website (₹5,000)', navigate)}
                className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white btn-magenta-gradient shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all"
              >
                <span>Get This Website</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/services"
                className="w-full py-3 px-4 rounded-xl font-semibold text-sm text-slate-200 glass-panel hover:text-white flex items-center justify-center gap-1.5 transition-all"
              >
                <span>View Details</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </TiltCard>

          {/* Card 2: Business Website */}
          <TiltCard
            glow
            className="p-6 sm:p-8 glass-panel rounded-3xl flex flex-col justify-between h-full border border-[#C71BFF]/40 shadow-2xl shadow-[#C71BFF]/15 relative"
          >
            <div>
              {/* Top Meta */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40">
                    Business
                  </span>
                  <span className="text-xs font-bold px-3 py-0.5 rounded-full bg-gradient-to-r from-[#C71BFF] to-[#7B2FF7] text-white shadow-md">
                    ★ Most Popular
                  </span>
                </div>
                <span className="text-sm font-bold text-white">
                  Starts at <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C71BFF] to-pink-400 text-lg font-extrabold">₹9,000</span>
                </span>
              </div>

              {/* Browser Window Mockup (CSS/SVG illustration) */}
              <div className="rounded-xl border border-[#C71BFF]/30 bg-[#0f0f13]/90 overflow-hidden shadow-inner p-3 mb-6 relative">
                <div className="flex items-center gap-1.5 pb-2.5 border-b border-white/10 px-1 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <div className="mx-auto w-32 h-4 rounded-full bg-white/5 border border-white/10 text-[9px] text-center text-purple-300 font-mono flex items-center justify-center">
                    deepak.dev/business
                  </div>
                </div>
                {/* Visual Layout Mockup */}
                <div className="space-y-3 p-3 bg-gradient-to-b from-[#C71BFF]/10 to-transparent rounded-lg border border-white/5">
                  <div className="flex items-center justify-between pb-1.5 border-b border-white/5">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded bg-[#C71BFF]" />
                      <div className="h-2 w-14 bg-white/50 rounded" />
                    </div>
                    <div className="flex gap-1.5">
                      <div className="h-1.5 w-6 bg-white/30 rounded" />
                      <div className="h-1.5 w-6 bg-white/30 rounded" />
                      <div className="h-1.5 w-6 bg-white/30 rounded" />
                    </div>
                  </div>
                  <div className="space-y-1.5 py-1">
                    <div className="h-3 w-36 bg-gradient-to-r from-white/90 to-white/40 rounded" />
                    <div className="h-2 w-52 bg-white/20 rounded" />
                    <div className="pt-1 flex gap-2">
                      <div className="h-4 w-16 rounded bg-gradient-to-r from-[#C71BFF] to-[#7B2FF7]" />
                      <div className="h-4 w-12 rounded bg-white/10" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 pt-1">
                    <div className="p-1.5 rounded bg-white/5 border border-white/10 space-y-1">
                      <div className="w-3 h-3 rounded-full bg-cyan-400/40" />
                      <div className="h-1.5 w-8 bg-white/30 rounded" />
                    </div>
                    <div className="p-1.5 rounded bg-white/5 border border-white/10 space-y-1">
                      <div className="w-3 h-3 rounded-full bg-[#C71BFF]/40" />
                      <div className="h-1.5 w-8 bg-white/30 rounded" />
                    </div>
                    <div className="p-1.5 rounded bg-white/5 border border-white/10 space-y-1">
                      <div className="w-3 h-3 rounded-full bg-emerald-400/40" />
                      <div className="h-1.5 w-8 bg-white/30 rounded" />
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Business Website
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                A professional multi-page website for shops, clinics, agencies, restaurants and startups to attract and convert customers.
              </p>

              {/* What's included */}
              <div className="mb-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  What's Included:
                </div>
                <ul className="space-y-2.5 text-sm text-slate-200">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C71BFF] shrink-0" />
                    <span>More than 2 pages (Home, About, Services, Contact and more)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C71BFF] shrink-0" />
                    <span>Powerful landing page</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C71BFF] shrink-0" />
                    <span>Advanced animations + mouse effects</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C71BFF] shrink-0" />
                    <span>Contact form with email notifications</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C71BFF] shrink-0" />
                    <span>Google Maps + WhatsApp button + SEO</span>
                  </li>
                </ul>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['React', 'Node.js', 'Express', 'MongoDB'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#C71BFF]/10 border border-[#C71BFF]/25 text-purple-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => selectPackageAndGo('Business Website (₹9,000)', navigate)}
                className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white btn-magenta-gradient shadow-lg shadow-[#C71BFF]/25 flex items-center justify-center gap-2 active:scale-95 transition-all"
              >
                <span>Get This Website</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/services"
                className="w-full py-3 px-4 rounded-xl font-semibold text-sm text-slate-200 glass-panel hover:text-white flex items-center justify-center gap-1.5 transition-all"
              >
                <span>View Details</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. PRICING PACKAGES PREVIEW (Section 4)
          ══════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/40">
            Affordable Investment
          </span>
          <h2 className="light-bg-heading text-3xl sm:text-4xl font-extrabold text-white mt-3">
            Transparent, Fixed-Price Packages
          </h2>
          <p className="light-bg-copy text-slate-400 text-sm sm:text-base mt-3">
            No surprise invoices. High-quality web engineering at rates friendly to small businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Package 1: Basic Portfolio */}
          <TiltCard className="p-8 bg-slate-900/80 border border-slate-800 rounded-3xl flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  Starter Package
                </span>
                <span className="text-xs text-slate-400">3–5 Days Turnaround</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                BASIC PORTFOLIO WEBSITE
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Ideal for personal profiles, freelancers, students, and professionals needing a credible web portfolio.
              </p>

              <div className="mb-6 flex items-baseline">
                <span className="text-4xl sm:text-5xl font-extrabold text-white">
                  <StatsCounter target={5000} prefix="₹" />
                </span>
                <span className="text-xs text-slate-400 ml-2">/ one-time investment</span>
              </div>

              <ul className="space-y-3 text-sm text-slate-300 mb-8">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>1 to 2 pages (Clean, responsive layout)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Personal portfolio / profile website</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Responsive design (mobile + desktop)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Interactive contact form</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Basic scroll animations</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Basic SEO setup & meta tags</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => selectPackageAndGo('Basic Portfolio Website (₹5,000)', navigate)}
              className="w-full py-3.5 rounded-xl font-bold text-sm text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 transition-all flex items-center justify-center gap-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </TiltCard>

          {/* Package 2: Business Website (Most Popular) */}
          <TiltCard
            className="p-8 bg-slate-900/90 border-2 border-purple-500/60 rounded-3xl flex flex-col justify-between backdrop-blur-md shadow-2xl shadow-purple-500/20"
            glow
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md">
                  ★ Most Popular
                </span>
                <span className="text-xs text-purple-300 font-medium">7–10 Days Turnaround</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                BUSINESS WEBSITE
              </h3>
              <p className="text-slate-300 text-sm mb-6">
                Comprehensive solution designed to turn prospective clients into leads and showcase your business authority.
              </p>

              <div className="mb-6 flex items-baseline">
                <span className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                  <StatsCounter target={9000} prefix="₹" />
                </span>
                <span className="text-xs text-slate-400 ml-2">/ one-time investment</span>
              </div>

              <ul className="space-y-3 text-sm text-slate-200 mb-8">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>More than 2 pages (multi-page website)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Custom business design with logo placement</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Powerful high-converting landing page</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Advanced scroll animations + mouse effects</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Contact form with instant email notifications</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Google Maps integration + WhatsApp button</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Full SEO setup, speed optimization & 30-day support</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => selectPackageAndGo('Business Website (₹9,000)', navigate)}
              className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-purple-500/30 transition-all flex items-center justify-center gap-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </TiltCard>
        </div>

        {/* Note below cards */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-400">
            Need something custom?{' '}
            <Link
              to="/contact"
              onClick={() => selectPackageAndGo('Custom Quote / Other', navigate)}
              className="text-cyan-400 underline hover:text-cyan-300 font-semibold ml-1"
            >
              Contact me for a quote.
            </Link>
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. PROCESS (Discuss → Design → Develop → Deliver)
          ══════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40">
            How It Works
          </span>
          <h2 className="light-bg-heading text-3xl sm:text-4xl font-extrabold text-white mt-3">
            Streamlined 4-Step Process
          </h2>
          <p className="light-bg-copy text-slate-400 text-sm sm:text-base mt-3">
            Simple, transparent, and collaborative from initial brainstorming to launch day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 relative"
            >
              <div className="text-3xl font-extrabold text-cyan-500/30 font-mono mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          7. FINAL CTA BANNER
          ══════════════════════════════════════ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-slate-900/80 border border-blue-500/30 p-8 sm:p-14 text-center overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              Ready to Bring Your Business Online?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Let's craft a website that gives you a competitive advantage, looks stunning on every device, and drives measurable leads.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all text-sm"
              >
                Start Your Project Today
              </Link>
              <a
                href="https://wa.me/919256729688"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-700/60 hover:bg-emerald-900/80 transition-all text-sm flex items-center justify-center gap-2"
              >
                <span>WhatsApp: +91 9256729688</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal Preview */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Home;
