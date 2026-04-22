import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handle = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(Math.min((window.scrollY / total) * 100, 100));
    };
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-bw-border">
      <div
        className="h-full bg-gradient-to-r from-white via-bw-accent to-bw-muted transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
export default ScrollProgress;
