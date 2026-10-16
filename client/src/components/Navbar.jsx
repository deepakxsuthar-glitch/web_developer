import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, ArrowRight, MessageSquareCode } from 'lucide-react';
import Logo from './Logo';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services & Pricing', path: '/services' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-[#171717]/80 backdrop-blur-[24px] saturate-[140%] shadow-[0_8px_32px_rgba(0,0,0,0.5)] border-b border-white/[0.12]'
          : 'py-5 bg-[#171717]/30 backdrop-blur-[12px] border-b border-white/[0.06]'
      }`}
      style={{ WebkitBackdropFilter: isScrolled ? 'blur(24px) saturate(140%)' : 'blur(12px)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="outline-none focus-visible:ring-2 focus-visible:ring-[#C71BFF] rounded-lg">
          <Logo size={isScrolled ? 'sm' : 'default'} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  active
                    ? 'text-white font-semibold'
                    : 'text-[#B8B8C7] hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {link.name}
                {active && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-[#C71BFF] rounded-full shadow-[0_0_8px_#C71BFF]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
            className="p-2 rounded-full border border-white/10 bg-white/5 text-[#B8B8C7] hover:border-[#C71BFF] hover:text-white transition-all duration-200 shadow-sm"
          >
            {isDark ? <Sun className="w-4 h-4 text-[#C71BFF]" /> : <Moon className="w-4 h-4 text-white" />}
          </button>

          {/* Desktop CTA Button */}
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold rounded-full btn-magenta-gradient text-white shadow-lg active:scale-[0.98] transition-all duration-200"
          >
            <span>Hire Me</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg border border-white/10 bg-white/5 text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-6 py-6 transition-all duration-300 shadow-2xl">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-2 text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-cyan-400 font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3">
              <Link
                to="/contact"
                className="w-full text-center py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
              >
                Hire Me Today
              </Link>
              <a
                href="https://wa.me/919256729688"
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-2.5 rounded-lg font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 flex items-center justify-center gap-2"
              >
                <MessageSquareCode className="w-4 h-4" />
                <span>WhatsApp: +91 9256729688</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
