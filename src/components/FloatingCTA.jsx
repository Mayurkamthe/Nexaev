import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => { clearTimeout(timer); window.removeEventListener('scroll', handleScroll); };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
          {/* WhatsApp */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
            className="relative"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap bg-ev-card border border-ev-border rounded-xl px-4 py-2"
                >
                  <span className="font-body text-xs text-white">Chat on WhatsApp</span>
                  <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-ev-card border-r border-t border-ev-border rotate-45" />
                </motion.div>
              )}
            </AnimatePresence>
            <a
              href="https://wa.me/919999999999?text=Hi!%20I'm%20interested%20in%20a%20Neexa%20EV."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </motion.div>

          {/* Back to Top */}
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-12 h-12 rounded-full bg-ev-card border border-neon-green/40 flex items-center justify-center text-neon-green hover:bg-neon-green hover:text-ev-dark hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:scale-110 transition-all duration-300"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd"/>
            </svg>
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
