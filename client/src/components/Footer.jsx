import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUp, Heart, CheckCircle2 } from 'lucide-react';
import Logo from './Logo';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#171717]/85 backdrop-blur-[18px] text-[#B8B8C7] border-t border-white/[0.14] pt-16 pb-12 overflow-hidden shadow-[0_-8px_32px_rgba(0,0,0,0.35)]">
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#C71BFF]/50 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-28 bg-[#C71BFF]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/[0.1]">
          {/* Brand Col */}
          <div className="space-y-4">
            <Logo size="default" />
            <p className="text-sm text-[#B8B8C7] leading-relaxed pt-2">
              Junior Web Developer specializing in fast, high-converting portfolio websites, small business platforms, and modern landing pages.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/rjdeepu00"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#C71BFF] hover:text-[#C71BFF] flex items-center justify-center transition-all duration-200 text-slate-300"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/deepak-webdev"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#C71BFF] hover:text-[#C71BFF] flex items-center justify-center transition-all duration-200 text-slate-300"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/deepak_webdev"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram profile"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#C71BFF] hover:text-[#C71BFF] flex items-center justify-center transition-all duration-200 text-slate-300"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-[#C71BFF] transition-colors">Home Page</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#C71BFF] transition-colors">About & Skills</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#C71BFF] transition-colors">Services & Pricing</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#C71BFF] transition-colors">Frequently Asked Questions</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#C71BFF] transition-colors">Contact & Quote</Link>
              </li>
              <li>
                <Link to="/admin" className="text-[#C71BFF] hover:underline font-semibold flex items-center gap-1.5">
                  <span>🔒 Admin Portal</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Basic Portfolio Website (₹5,000)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                <span>Business Multi-Page (₹9,000)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Custom Landing Pages</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                <span>Website Redesign & Speed</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>WhatsApp & Lead Forms</span>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <a href="mailto:rjdeepu00@gmail.com" className="hover:text-white transition-colors break-all">
                  rjdeepu00@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <a href="https://wa.me/919256729688" className="hover:text-white transition-colors">
                  +91 9256729688 (WhatsApp)
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                <span>Rajasthan / Remote Worldwide</span>
              </li>
            </ul>

            <div className="mt-5 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              <p className="text-xs text-slate-300">
                🟢 <span className="font-medium text-emerald-400">Available for projects</span>
                <br />Delivering fast turnaround in 3–7 business days.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© Deepak 2026. All rights reserved. Built with React & Tailwind CSS.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
