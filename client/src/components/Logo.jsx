import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ size = 'default', showText = true }) => {
  const isSmall = size === 'sm';
  const iconDimensions = isSmall ? 'w-8 h-8' : 'w-10 h-10';

  return (
    <div className="flex items-center gap-2.5 group cursor-pointer">
      <div className={`relative ${iconDimensions} flex items-center justify-center`}>
        {/* Animated Glow on Hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-xl blur-md opacity-40 group-hover:opacity-80 transition-opacity duration-300" />
        
        {/* SVG Container */}
        <svg
          viewBox="0 0 100 100"
          className="relative z-10 w-full h-full drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="deepakBrandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
            <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#38bdf8" floodOpacity="0.4"/>
            </filter>
          </defs>

          {/* Base rounded square */}
          <rect
            x="4"
            y="4"
            width="92"
            height="92"
            rx="22"
            className="fill-slate-900/90 dark:fill-slate-950/95 stroke-slate-700/50 dark:stroke-slate-800"
            strokeWidth="3"
          />

          {/* Left bracket < with stroke-draw animation */}
          <motion.path
            d="M 28 34 L 17 50 L 28 66"
            stroke="url(#deepakBrandGrad)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          {/* Monogram D with stroke-draw animation */}
          <motion.path
            d="M 39 30 L 52 30 C 66 30 73 38 73 50 C 73 62 66 70 52 70 L 39 70 Z M 48 40 L 48 60 L 52 60 C 58 60 63 56 63 50 C 63 44 58 40 52 40 Z"
            fill="url(#deepakBrandGrad)"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          {/* Right slash / > with stroke-draw animation */}
          <motion.path
            d="M 72 34 L 83 50 L 72 66"
            stroke="url(#deepakBrandGrad)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white flex items-center">
            Deepak
            <span className="text-cyan-400 font-mono text-base ml-0.5">.dev</span>
          </span>
          <span className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-medium -mt-1">
            Web Developer
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
