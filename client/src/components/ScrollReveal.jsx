import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Adds a consistent reveal animation to each page's top-level content block.
const ScrollReveal = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const targets = document.querySelectorAll('main > div > div > *');
    if (!targets.length) return undefined;

    targets.forEach((target, index) => {
      target.classList.add('scroll-reveal');
      target.style.setProperty('--reveal-delay', `${Math.min(index * 35, 140)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-reveal-visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
};

export default ScrollReveal;
