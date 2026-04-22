import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = ['Home', 'Models', 'Features', 'Finance', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bw-bg/95 backdrop-blur-xl border-b border-bw-border shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo — real image */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src="/neexa-logo-white.png"
              alt="Neexa EV Logo"
              className="w-9 h-9 object-contain group-hover:opacity-80 transition-opacity duration-300"
            />
            <span className="font-display text-2xl tracking-widest text-white">
              NEEXA<span className="text-bw-muted">.EV</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="nav-link font-body text-sm font-medium text-bw-muted hover:text-white transition-colors duration-300 tracking-wide uppercase"
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA + Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full border border-bw-border text-bw-muted hover:text-white hover:border-white transition-all duration-300"
              aria-label="Toggle theme"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            </button>
            <a
              href="#contact"
              className="px-6 py-2.5 bg-white text-bw-bg font-body font-bold text-sm uppercase tracking-widest rounded-full hover:bg-bw-offwhite hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300"
            >
              Book Now
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
            <div className={`w-6 h-px bg-current mt-1.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-px bg-current mt-1.5 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-bw-bg/98 border-t border-bw-border"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-bw-muted hover:text-white font-body text-sm uppercase tracking-widest py-2 border-b border-bw-border/50 transition-colors"
                >
                  {link}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 px-6 py-3 bg-white text-bw-bg font-bold text-sm uppercase tracking-widest rounded-full text-center"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
