import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { PackageProvider } from './context/PackageContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import CanvasBackground from './components/CanvasBackground';
import ScrollProgressBar from './components/ScrollProgressBar';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollReveal from './components/ScrollReveal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Admin from './pages/Admin';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

// Animated Page Wrapper for smooth route transitions
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <PackageProvider>
        <Router>
          <div className="relative min-h-screen flex flex-col bg-transparent text-[#FFFFFF] transition-colors duration-300">
            {/* Scroll Progress Bar at top */}
            <ScrollProgressBar />

            {/* Custom Interactive Cursor */}
            <CustomCursor />

            {/* Canvas Animated Particle & Glow Background */}
            <CanvasBackground />

            {/* Navigation Header */}
            <div className="relative z-10 flex flex-col flex-grow">
            <Navbar />

            {/* Main Content Area */}
            <main className="flex-grow relative z-10">
              <ScrollToTop />
              <ScrollReveal />
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                  <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
                  <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
                  <Route path="/projects" element={<PageWrapper><Services /></PageWrapper>} />
                  <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
                  <Route path="/faq" element={<PageWrapper><FAQ /></PageWrapper>} />
                  <Route path="/admin" element={<PageWrapper><Admin /></PageWrapper>} />
                  <Route path="*" element={<PageWrapper><Home /></PageWrapper>} />
                </Routes>
              </AnimatePresence>
            </main>

            {/* Sticky WhatsApp Floating Button */}
            <WhatsAppButton />

            {/* Site Footer */}
            <Footer />
            </div>
          </div>
        </Router>
      </PackageProvider>
    </ThemeProvider>
  );
}

export default App;
