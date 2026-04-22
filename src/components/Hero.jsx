import { motion } from 'framer-motion';

const Hero = () => {
  const stats = [
    { value: '150+', label: 'KM Range' },
    { value: '3H', label: 'Fast Charge' },
    { value: '11', label: 'Models' },
    { value: '5Y', label: 'Warranty' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(57,255,20,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-ev-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-green/30 bg-neon-green/5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              <span className="font-mono text-xs text-neon-green uppercase tracking-widest">
                Next-Gen Electric Mobility
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-wide mb-6"
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
              className="font-body text-ev-muted text-lg max-w-md leading-relaxed mb-10"
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
                className="px-8 py-4 bg-neon-green text-ev-dark font-body font-bold uppercase tracking-widest text-sm rounded-full hover:shadow-[0_0_40px_rgba(57,255,20,0.5)] hover:scale-105 transition-all duration-300"
              >
                Explore Models
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-neon-green/50 text-neon-green font-body font-bold uppercase tracking-widest text-sm rounded-full hover:bg-neon-green/10 hover:border-neon-green transition-all duration-300"
              >
                Book Test Ride
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid grid-cols-4 gap-6 mt-16 pt-12 border-t border-ev-border"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl sm:text-4xl text-neon-green">{stat.value}</div>
                  <div className="font-mono text-xs text-ev-muted uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Scooter Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-neon-green/10 blur-3xl scale-75" />

              {/* Main scooter placeholder — futuristic SVG illustration */}
              <div className="relative animate-float">
                <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-2xl">
                  {/* Scooter body */}
                  <ellipse cx="300" cy="360" rx="200" ry="15" fill="rgba(57,255,20,0.1)" />
                  {/* Rear wheel */}
                  <circle cx="160" cy="330" r="55" stroke="#39FF14" strokeWidth="3" fill="none" opacity="0.8"/>
                  <circle cx="160" cy="330" r="35" stroke="#39FF14" strokeWidth="1.5" fill="none" opacity="0.4"/>
                  <circle cx="160" cy="330" r="10" fill="#39FF14" opacity="0.6"/>
                  {/* Front wheel */}
                  <circle cx="450" cy="330" r="55" stroke="#00E5FF" strokeWidth="3" fill="none" opacity="0.8"/>
                  <circle cx="450" cy="330" r="35" stroke="#00E5FF" strokeWidth="1.5" fill="none" opacity="0.4"/>
                  <circle cx="450" cy="330" r="10" fill="#00E5FF" opacity="0.6"/>
                  {/* Frame */}
                  <path d="M160 330 L220 220 L320 200 L420 210 L450 330" stroke="#ffffff" strokeWidth="3" fill="none" opacity="0.5"/>
                  {/* Body panel */}
                  <path d="M220 220 Q270 140 350 150 Q420 155 430 200 L400 210 Q350 190 290 185 Q250 180 235 215Z" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
                  {/* Seat */}
                  <path d="M230 215 Q280 200 340 205 Q360 207 370 215 Q360 225 340 225 Q280 222 230 225Z" fill="rgba(57,255,20,0.2)" stroke="#39FF14" strokeWidth="1"/>
                  {/* Handlebars */}
                  <path d="M420 180 Q440 170 460 175 Q470 178 465 190" stroke="#ffffff" strokeWidth="3" fill="none" opacity="0.7"/>
                  <circle cx="465" cy="190" r="6" fill="#FF6B00" opacity="0.9"/>
                  {/* Headlight */}
                  <ellipse cx="455" cy="210" rx="18" ry="12" fill="rgba(0,229,255,0.3)" stroke="#00E5FF" strokeWidth="1.5"/>
                  <ellipse cx="455" cy="210" rx="8" ry="6" fill="rgba(0,229,255,0.8)"/>
                  {/* Light beam */}
                  <path d="M470 205 L540 190 L540 225 L470 215Z" fill="rgba(0,229,255,0.05)"/>
                  {/* Battery indicator */}
                  <rect x="255" y="230" width="80" height="25" rx="5" fill="rgba(57,255,20,0.15)" stroke="#39FF14" strokeWidth="1"/>
                  <rect x="259" y="234" width="55" height="17" rx="3" fill="rgba(57,255,20,0.5)"/>
                  <text x="335" y="247" fill="#39FF14" fontSize="10" fontFamily="monospace">EV</text>
                  {/* Suspension fork */}
                  <line x1="430" y1="215" x2="440" y2="280" stroke="rgba(255,255,255,0.4)" strokeWidth="4"/>
                  <line x1="450" y1="215" x2="460" y2="280" stroke="rgba(255,255,255,0.4)" strokeWidth="4"/>
                  {/* Exhaust / Motor hint */}
                  <circle cx="180" cy="290" r="20" fill="rgba(57,255,20,0.15)" stroke="#39FF14" strokeWidth="1" strokeDasharray="4 2"/>
                  <text x="172" y="295" fill="#39FF14" fontSize="9" fontFamily="monospace">BLDC</text>
                  {/* Decorative lines */}
                  <line x1="80" y1="330" x2="540" y2="330" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
                </svg>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-4 right-0 bg-ev-card border border-ev-border rounded-2xl px-4 py-3 backdrop-blur-sm"
              >
                <div className="font-mono text-xs text-ev-muted uppercase tracking-widest">Range</div>
                <div className="font-display text-2xl text-neon-green">150 KM</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-16 left-0 bg-ev-card border border-ev-border rounded-2xl px-4 py-3 backdrop-blur-sm"
              >
                <div className="font-mono text-xs text-ev-muted uppercase tracking-widest">0 Emissions</div>
                <div className="font-display text-2xl text-ev-accent">ECO</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-ev-muted uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-ev-muted to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
