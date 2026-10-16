import React, { useEffect, useRef } from 'react';

const CanvasBackground = () => {
  const imageRef = useRef(null);
  const spotlightRef = useRef(null);
  const fogPrimaryRef = useRef(null);
  const fogSecondaryRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const spotlight = spotlightRef.current;
    const fogPrimary = fogPrimaryRef.current;
    const fogSecondary = fogSecondaryRef.current;
    const mediaQuery = window.matchMedia('(max-width: 768px), (pointer: coarse)');

    let frameId = 0;
    let isMobile = mediaQuery.matches;
    let targetX = window.innerWidth * 0.5;
    let targetY = window.innerHeight * 0.5;
    let currentX = targetX;
    let currentY = targetY;
    let targetShiftX = 0;
    let targetShiftY = 0;
    let currentShiftX = 0;
    let currentShiftY = 0;
    let scrollProgress = 0;

    const renderFrame = () => {
      const smoothing = 0.12;
      currentX += (targetX - currentX) * smoothing;
      currentY += (targetY - currentY) * smoothing;
      currentShiftX += (targetShiftX - currentShiftX) * smoothing;
      currentShiftY += (targetShiftY - currentShiftY) * smoothing;

      if (image) {
        image.style.transform = isMobile
          ? 'scale(1.04)'
          : `translate3d(${currentShiftX}px, ${currentShiftY + (scrollProgress - 0.5) * 40}px, 0) scale(1.04)`;
      }

      if (!isMobile) {
        if (spotlight) {
          spotlight.style.background = `radial-gradient(650px circle at ${currentX}px ${currentY}px, rgba(199, 27, 255, 0.25) 0%, transparent 65%)`;
        }
        fogPrimary?.style.setProperty('--pointer-x', `${currentX * 0.018}px`);
        fogPrimary?.style.setProperty('--pointer-y', `${currentY * 0.018}px`);
        fogSecondary?.style.setProperty('--pointer-x', `${currentX * -0.012}px`);
        fogSecondary?.style.setProperty('--pointer-y', `${currentY * -0.012}px`);
      }

      const stillMoving = Math.abs(targetX - currentX) > 0.2
        || Math.abs(targetY - currentY) > 0.2
        || Math.abs(targetShiftX - currentShiftX) > 0.1
        || Math.abs(targetShiftY - currentShiftY) > 0.1;
      frameId = stillMoving ? window.requestAnimationFrame(renderFrame) : 0;
    };

    const scheduleFrame = () => {
      if (!frameId) frameId = window.requestAnimationFrame(renderFrame);
    };

    const handlePointerMove = (event) => {
      if (isMobile) return;
      targetX = event.clientX;
      targetY = event.clientY;
      targetShiftX = -((event.clientX / window.innerWidth) - 0.5) * 36;
      targetShiftY = -((event.clientY / window.innerHeight) - 0.5) * 36;
      scheduleFrame();
    };

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      scheduleFrame();
    };

    const handleMediaChange = (event) => {
      isMobile = event.matches;
      scheduleFrame();
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    mediaQuery.addEventListener('change', handleMediaChange);
    handleScroll();

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
      mediaQuery.removeEventListener('change', handleMediaChange);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="site-background" aria-hidden="true">
      <div ref={imageRef} className="site-background-image" />
      <div ref={spotlightRef} className="site-background-spotlight" />
      <div ref={fogPrimaryRef} className="fog-layer fog-layer-primary" />
      <div ref={fogSecondaryRef} className="fog-layer fog-layer-secondary" />
    </div>
  );
};

export default CanvasBackground;
