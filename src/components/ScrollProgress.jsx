import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / totalHeight) * 100;
      setProgress(Math.min(scrolled, 100));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-ev-border">
      <div
        className="h-full bg-gradient-to-r from-neon-green via-ev-accent to-ev-orange transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
