import { motion } from 'framer-motion';

const features = [
  { icon: '◈', title: 'Advanced Lithium Battery',  desc: 'High-density lithium-ion cells with BMS protection deliver consistent power and long cycle life up to 1500+ charge cycles.', stat: '1500+', statLabel: 'Charge Cycles' },
  { icon: '◎', title: 'Extended Range',             desc: 'Intelligent power management and regenerative braking maximize every charge, giving you more kilometers per rupee.',         stat: '160 KM', statLabel: 'Max Range'     },
  { icon: '◉', title: 'Fast Charging',              desc: 'Proprietary rapid-charge technology gets you from 20% to 80% in under 90 minutes with a standard home plug.',              stat: '2 Hours', statLabel: 'Full Charge'   },
  { icon: '◆', title: 'Smart Connectivity',         desc: 'Bluetooth-enabled dashboard syncs with your smartphone for real-time diagnostics, GPS tracking, and ride analytics.',      stat: 'IoT',     statLabel: 'Connected'     },
  { icon: '◇', title: 'BLDC Motor',                 desc: 'Brushless DC hub motor delivers instant torque with zero maintenance, minimal noise, and 90%+ energy conversion efficiency.',stat: '90%+',   statLabel: 'Efficiency'    },
  { icon: '▣', title: 'IP67 Weatherproof',          desc: 'Fully sealed motor and battery compartments rated IP67 for complete dust and water resistance in all conditions.',           stat: 'IP67',    statLabel: 'Certified'     },
];

const Features = () => (
  <section id="features" className="py-24 bg-bw-card relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="font-mono text-xs text-bw-muted uppercase tracking-widest">Technology</span>
        <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-3 mb-4">
          BUILT FOR THE <span className="text-gradient">FUTURE</span>
        </h2>
        <p className="font-body text-bw-muted max-w-xl mx-auto">
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
            className="group bg-bw-bg border border-bw-border rounded-2xl p-7 hover:border-white/20 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="text-3xl text-white mb-5 font-mono">{f.icon}</div>
            <h3 className="font-body font-bold text-white text-lg mb-2">{f.title}</h3>
            <p className="font-body text-bw-muted text-sm leading-relaxed mb-5">{f.desc}</p>
            <div className="flex items-center gap-3 pt-4 border-t border-bw-border">
              <span className="font-display text-2xl text-white">{f.stat}</span>
              <span className="font-mono text-xs text-bw-muted uppercase tracking-widest">{f.statLabel}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
