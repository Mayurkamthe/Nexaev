import { motion } from 'framer-motion';

const features = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <rect x="8" y="14" width="32" height="22" rx="4" stroke="currentColor" strokeWidth="2"/>
        <rect x="40" y="20" width="4" height="10" rx="2" fill="currentColor" opacity="0.6"/>
        <rect x="11" y="17" width="20" height="16" rx="2" fill="currentColor" opacity="0.3"/>
        <path d="M22 21 L19 25 L23 25 L20 29" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Advanced Lithium Battery',
    desc: 'High-density lithium-ion cells with BMS protection deliver consistent power and long cycle life up to 1500+ charge cycles.',
    stat: '1500+', statLabel: 'Charge Cycles',
    color: '#39FF14',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2"/>
        <path d="M24 8 L24 16 M24 32 L24 40 M8 24 L16 24 M32 24 L40 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="6" fill="currentColor" opacity="0.4"/>
        <path d="M18 18 L22 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Extended Range',
    desc: 'Intelligent power management and regenerative braking maximize every charge, giving you more kilometers per rupee.',
    stat: '160 KM', statLabel: 'Max Range',
    color: '#00E5FF',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <path d="M24 6 L30 18 L42 18 L33 26 L36 38 L24 30 L12 38 L15 26 L6 18 L18 18Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" strokeLinejoin="round"/>
        <path d="M22 20 L20 24 L24 24 L22 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Fast Charging',
    desc: 'Proprietary rapid-charge technology gets you from 20% to 80% in under 90 minutes with standard home plug.',
    stat: '2 Hours', statLabel: 'Full Charge',
    color: '#FF6B00',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <rect x="10" y="8" width="28" height="36" rx="6" stroke="currentColor" strokeWidth="2"/>
        <circle cx="24" cy="18" r="5" stroke="currentColor" strokeWidth="2"/>
        <path d="M15 30 Q24 25 33 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18 36 Q24 32 30 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Smart Connectivity',
    desc: 'Bluetooth-enabled dashboard syncs with your smartphone for real-time diagnostics, GPS tracking, and ride analytics.',
    stat: 'IoT', statLabel: 'Connected',
    color: '#39FF14',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <path d="M24 6 C14 6 8 14 8 22 C8 32 16 38 24 42 C32 38 40 32 40 22 C40 14 34 6 24 6Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15"/>
        <path d="M18 23 L22 27 L30 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'BLDC Motor',
    desc: 'Brushless DC hub motor delivers instant torque with zero maintenance, minimal noise, and 90%+ energy conversion efficiency.',
    stat: '90%+', statLabel: 'Efficiency',
    color: '#00E5FF',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <path d="M12 36 L12 22 L24 10 L36 22 L36 36 Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15" strokeLinejoin="round"/>
        <path d="M20 36 L20 28 L28 28 L28 36" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 24 L24 17 L32 24" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'IP67 Weatherproof',
    desc: 'Fully sealed motor and battery compartments rated IP67 for complete dust and water resistance in all weather conditions.',
    stat: 'IP67', statLabel: 'Certified',
    color: '#FF6B00',
  },
];

const Features = () => (
  <section id="features" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #080C10 0%, #091218 100%)' }}>
    <div className="absolute inset-0 bg-glow-green opacity-30" />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/20 to-transparent" />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="font-mono text-xs text-neon-green uppercase tracking-widest">Technology</span>
        <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-3 mb-4">
          BUILT FOR THE <span className="text-gradient">FUTURE</span>
        </h2>
        <p className="font-body text-ev-muted max-w-xl mx-auto">
          Engineering excellence meets sustainable design in every component of every Neexa EV.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group bg-ev-card border border-ev-border rounded-2xl p-7 hover:border-opacity-80 transition-all duration-300 hover:-translate-y-2"
            style={{ '--hover-color': f.color }}
            onMouseEnter={e => e.currentTarget.style.borderColor = `${f.color}40`}
            onMouseLeave={e => e.currentTarget.style.borderColor = ''}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
              style={{ background: `${f.color}15`, color: f.color }}
            >
              {f.icon}
            </div>
            <h3 className="font-body font-bold text-white text-lg mb-2">{f.title}</h3>
            <p className="font-body text-ev-muted text-sm leading-relaxed mb-5">{f.desc}</p>
            <div className="flex items-center gap-3 pt-4 border-t border-ev-border">
              <span className="font-display text-2xl" style={{ color: f.color }}>{f.stat}</span>
              <span className="font-mono text-xs text-ev-muted uppercase tracking-widest">{f.statLabel}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
