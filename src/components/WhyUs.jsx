import { motion } from 'framer-motion';

const reasons = [
  {
    number: '01',
    title: 'Eco-Friendly',
    desc: 'Zero direct emissions. Every kilometer you ride contributes to cleaner air and a healthier planet for future generations.',
    color: '#39FF14',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <path d="M20 6 C12 6 6 12 6 20 S12 34 20 34 S34 28 34 20 S28 6 20 6Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15"/>
        <path d="M14 20 Q17 15 20 18 Q23 14 28 20 Q24 26 20 24 Q16 26 14 20Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.3"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Cost Saving',
    desc: 'Spend up to 80% less on fuel and maintenance. Your EV pays for itself within 18 months of regular use.',
    color: '#00E5FF',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 12 L20 14 M20 26 L20 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 17 C16 15 24 15 24 18.5 C24 22 16 22 16 25.5 C16 27 17 28 20 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Peak Performance',
    desc: 'Instant torque, smooth acceleration, and superior handling — electric performance that traditional scooters simply cannot match.',
    color: '#FF6B00',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <path d="M8 28 Q14 16 20 18 Q26 20 32 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M28 12 L32 12 L32 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="14" cy="24" r="2" fill="currentColor" opacity="0.6"/>
        <circle cx="22" cy="20" r="2" fill="currentColor" opacity="0.6"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: '5-Year Warranty',
    desc: 'Industry-leading 5-year motor warranty and 3-year battery guarantee. We stand behind every vehicle, every day.',
    color: '#39FF14',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
        <path d="M20 8 L30 12 L30 22 C30 27 26 32 20 34 C14 32 10 27 10 22 L10 12 Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15" strokeLinejoin="round"/>
        <path d="M15 21 L18 24 L25 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const WhyUs = () => (
  <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #091218 0%, #080C10 100%)' }}>
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ev-accent/20 to-transparent" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-xs text-neon-green uppercase tracking-widest">Why Neexa</span>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-3 mb-6">
            THE SMART <span className="text-gradient">CHOICE</span>
          </h2>
          <p className="font-body text-ev-muted text-lg leading-relaxed mb-10">
            Joining the EV revolution is not just about saving the environment — it is about superior technology,
            lower running costs, and owning a vehicle built for the next decade.
          </p>
          <div className="flex items-center gap-6">
            <div>
              <div className="font-display text-5xl text-neon-green">50K+</div>
              <div className="font-mono text-xs text-ev-muted uppercase tracking-widest mt-1">Happy Riders</div>
            </div>
            <div className="w-px h-16 bg-ev-border" />
            <div>
              <div className="font-display text-5xl text-ev-accent">200+</div>
              <div className="font-mono text-xs text-ev-muted uppercase tracking-widest mt-1">Service Centers</div>
            </div>
            <div className="w-px h-16 bg-ev-border" />
            <div>
              <div className="font-display text-5xl text-ev-orange">48H</div>
              <div className="font-mono text-xs text-ev-muted uppercase tracking-widest mt-1">Delivery</div>
            </div>
          </div>
        </motion.div>

        {/* Right — Reason cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              viewport={{ once: true }}
              className="group bg-ev-card border border-ev-border rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300"
              onMouseEnter={e => e.currentTarget.style.borderColor = `${r.color}40`}
              onMouseLeave={e => e.currentTarget.style.borderColor = ''}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${r.color}15`, color: r.color }}>
                  {r.icon}
                </div>
                <span className="font-display text-4xl opacity-10 text-white">{r.number}</span>
              </div>
              <h3 className="font-body font-bold text-white text-lg mb-2">{r.title}</h3>
              <p className="font-body text-ev-muted text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyUs;
