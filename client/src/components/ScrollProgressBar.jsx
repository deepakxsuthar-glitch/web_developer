import React, { useEffect, useRef } from 'react';

const ScrollProgressBar = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    let frameId = 0;
    const updateProgress = () => {
      frameId = 0;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      progressRef.current?.style.setProperty('transform', `scaleX(${progress})`);
    };
    const handleScroll = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] bg-transparent">
      <div
        ref={progressRef}
        className="h-full origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
};

export default ScrollProgressBar;
