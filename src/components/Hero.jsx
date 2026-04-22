import { motion } from 'framer-motion';

const stats = [
  { value: '150+', label: 'KM Range'  },
  { value: '3H',   label: 'Fast Charge'},
  { value: '11',   label: 'Models'    },
  { value: '5Y',   label: 'Warranty'  },
];

const Hero = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bw-bg"
  >
    {/* Subtle grid */}
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
      }}
    />
    {/* Radial glow */}
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-bw-border bg-bw-card mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="font-mono text-xs text-bw-muted uppercase tracking-widest">
              Next-Gen Electric Mobility
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-[96px] leading-none tracking-wide mb-6"
          >
            WELCOME
            <br />
            <span className="text-gradient glow-text">TO A NEW</span>
            <br />
            ERA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-body text-bw-muted text-lg max-w-md leading-relaxed mb-10"
          >
            Experience the future of urban mobility. Zero emissions, maximum performance,
            and unmatched style — built for the roads of tomorrow, available today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#models"
              className="px-8 py-4 bg-white text-bw-bg font-body font-bold uppercase tracking-widest text-sm rounded-full hover:bg-bw-offwhite hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:scale-105 transition-all duration-300"
            >
              Explore Models
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-bw-border text-white font-body font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white/5 hover:border-white transition-all duration-300"
            >
              Book Test Ride
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-4 gap-6 mt-16 pt-10 border-t border-bw-border"
          >
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <div className="font-display text-3xl sm:text-4xl text-white">{s.value}</div>
                <div className="font-mono text-xs text-bw-muted uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — logo hero + SVG scooter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative flex flex-col items-center justify-center gap-8"
        >
          {/* Big logo */}
          <div className="relative">
            <div className="absolute inset-0 bg-white/5 rounded-full blur-3xl scale-90" />
            <img
              src="/neexa-logo-white.png"
              alt="Neexa EV"
              className="relative w-64 h-64 lg:w-80 lg:h-80 object-contain animate-float drop-shadow-2xl"
            />
          </div>

          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 right-0 bg-bw-card border border-bw-border rounded-2xl px-4 py-3"
          >
            <div className="font-mono text-xs text-bw-muted uppercase tracking-widest">Range</div>
            <div className="font-display text-2xl text-white">150 KM</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute bottom-0 left-0 bg-bw-card border border-bw-border rounded-2xl px-4 py-3"
          >
            <div className="font-mono text-xs text-bw-muted uppercase tracking-widest">Emissions</div>
            <div className="font-display text-2xl text-white">ZERO</div>
          </motion.div>
        </motion.div>
      </div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="font-mono text-xs text-bw-muted uppercase tracking-widest">Scroll</span>
      <div className="w-px h-10 bg-gradient-to-b from-bw-muted to-transparent" />
    </motion.div>
  </section>
);

export default Hero;
