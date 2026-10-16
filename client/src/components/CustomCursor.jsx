import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { damping: 32, stiffness: 500, mass: 0.12 });
  const springY = useSpring(mouseY, { damping: 32, stiffness: 500, mass: 0.12 });

  useEffect(() => {
    // Check if device supports fine hover (desktop mouse)
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hasFinePointer || prefersReducedMotion) {
      return;
    }

    setIsVisible(true);
    document.body.classList.add('custom-cursor-enabled');

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.tagName === 'INPUT' || 
        target.tagName === 'SELECT' || 
        target.tagName === 'TEXTAREA' ||
        target.getAttribute('role') === 'button' ||
        target.dataset.cursor === 'hover';

      setIsHovered(Boolean(isInteractive));
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.classList.remove('custom-cursor-enabled');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Central Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-cyan-400 mix-blend-difference"
        style={{
          width: 8,
          height: 8,
          x: springX,
          y: springY,
          marginLeft: -4,
          marginTop: -4,
        }}
        animate={{
          scale: isClicking ? 0.6 : isHovered ? 1.4 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 450, mass: 0.1 }}
      />

      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-cyan-400/80 dark:border-cyan-300/80 bg-cyan-400/10 backdrop-blur-[1px]"
        style={{
          width: 36,
          height: 36,
          x: springX,
          y: springY,
          marginLeft: -18,
          marginTop: -18,
        }}
        animate={{
          scale: isHovered ? 1.7 : isClicking ? 0.9 : 1,
          borderColor: isHovered ? '#a855f7' : '#38bdf8',
          backgroundColor: isHovered ? 'rgba(168, 85, 247, 0.15)' : 'rgba(56, 189, 248, 0.05)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 220, mass: 0.2 }}
      />
    </>
  );
};

export default CustomCursor;
