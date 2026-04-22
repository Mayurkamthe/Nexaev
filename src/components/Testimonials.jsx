import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Arjun Mehta',
    city: 'Mumbai, MH',
    model: 'NEO MAX',
    rating: 5,
    text: 'Switched from a petrol scooter and my monthly fuel spend dropped from Rs. 2,400 to just Rs. 300. The acceleration is instant and the build quality exceeded every expectation.',
    initials: 'AM',
    color: '#39FF14',
  },
  {
    name: 'Priya Nair',
    city: 'Pune, MH',
    model: 'ERA+',
    rating: 5,
    text: 'Charging overnight at home is so convenient. I have been riding for 8 months without a single service issue. The smart app integration is genuinely useful.',
    initials: 'PN',
    color: '#00E5FF',
  },
  {
    name: 'Rohan Sharma',
    city: 'Bengaluru, KA',
    model: 'TANK',
    rating: 5,
    text: 'Best purchase of the year. The TANK handles Bangalore traffic and weekend highway runs with ease. Range anxiety is real until you track actual usage — the 150km claim is accurate.',
    initials: 'RS',
    color: '#FF6B00',
  },
  {
    name: 'Sneha Kulkarni',
    city: 'Nashik, MH',
    model: 'CANVAS',
    rating: 5,
    text: 'Bought the CANVAS for the daily commute and fell in love. Stylish design turns heads everywhere. The 24-month EMI through Bajaj Finserv made it completely affordable.',
    initials: 'SK',
    color: '#39FF14',
  },
  {
    name: 'Vikram Rao',
    city: 'Hyderabad, TS',
    model: 'REO',
    rating: 5,
    text: 'Neexa service team responded within hours when I had a question about my battery settings. That level of after-sales support is rare in this industry.',
    initials: 'VR',
    color: '#00E5FF',
  },
  {
    name: 'Deepika Patel',
    city: 'Ahmedabad, GJ',
    model: 'NEO-X',
    rating: 5,
    text: 'The regenerative braking took a week to get used to but now I love it. Riding uphill in the city is effortless. Highly recommend to anyone commuting daily.',
    initials: 'DP',
    color: '#FF6B00',
  },
];

const Stars = ({ count, color }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} viewBox="0 0 12 12" className="w-3.5 h-3.5" fill={i < count ? color : 'none'} stroke={color} strokeWidth="1">
        <path d="M6 1 L7.3 4.3 L11 4.3 L8.2 6.5 L9.2 10 L6 7.9 L2.8 10 L3.8 6.5 L1 4.3 L4.7 4.3 Z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => (
  <section className="py-24 bg-ev-dark relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/20 to-transparent" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="font-mono text-xs text-neon-green uppercase tracking-widest">Reviews</span>
        <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-3 mb-4">
          RIDER <span className="text-gradient">STORIES</span>
        </h2>
        <p className="font-body text-ev-muted max-w-xl mx-auto">
          Real riders. Real experiences. Zero compromises.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="bg-ev-card border border-ev-border rounded-2xl p-7 hover:-translate-y-2 hover:border-opacity-60 transition-all duration-300 flex flex-col"
            onMouseEnter={e => e.currentTarget.style.borderColor = `${t.color}30`}
            onMouseLeave={e => e.currentTarget.style.borderColor = ''}
          >
            <div className="flex items-center gap-4 mb-5">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center font-body font-bold text-sm flex-shrink-0"
                style={{ background: `${t.color}20`, color: t.color, border: `2px solid ${t.color}40` }}
              >
                {t.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-body font-bold text-white text-sm">{t.name}</div>
                <div className="font-mono text-xs text-ev-muted">{t.city}</div>
              </div>
              <div
                className="px-2.5 py-1 rounded-full font-mono text-xs font-bold"
                style={{ background: `${t.color}15`, color: t.color }}
              >
                {t.model}
              </div>
            </div>

            <Stars count={t.rating} color={t.color} />

            <p className="font-body text-ev-muted text-sm leading-relaxed mt-4 flex-1">
              "{t.text}"
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
