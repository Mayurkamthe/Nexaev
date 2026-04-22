import { motion } from 'framer-motion';

const reasons = [
  { number: '01', title: 'Eco-Friendly',   desc: 'Zero direct emissions. Every kilometer you ride contributes to cleaner air and a healthier planet for future generations.' },
  { number: '02', title: 'Cost Saving',    desc: 'Spend up to 80% less on fuel and maintenance. Your EV pays for itself within 18 months of regular use.' },
  { number: '03', title: 'Peak Performance', desc: 'Instant torque, smooth acceleration, and superior handling — electric performance that traditional scooters simply cannot match.' },
  { number: '04', title: '5-Year Warranty', desc: 'Industry-leading 5-year motor warranty and 3-year battery guarantee. We stand behind every vehicle, every day.' },
];

const WhyUs = () => (
  <section className="py-24 bg-bw-card relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="font-mono text-xs text-bw-muted uppercase tracking-widest">Why Neexa</span>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-3 mb-6">
            THE SMART <span className="text-gradient">CHOICE</span>
          </h2>
          <p className="font-body text-bw-muted text-lg leading-relaxed mb-10">
            Joining the EV revolution is not just about saving the environment — it is about superior technology,
            lower running costs, and owning a vehicle built for the next decade.
          </p>
          <div className="flex items-center gap-6">
            <div>
              <div className="font-display text-5xl text-white">50K+</div>
              <div className="font-mono text-xs text-bw-muted uppercase tracking-widest mt-1">Happy Riders</div>
            </div>
            <div className="w-px h-16 bg-bw-border" />
            <div>
              <div className="font-display text-5xl text-white">200+</div>
              <div className="font-mono text-xs text-bw-muted uppercase tracking-widest mt-1">Service Centers</div>
            </div>
            <div className="w-px h-16 bg-bw-border" />
            <div>
              <div className="font-display text-5xl text-white">48H</div>
              <div className="font-mono text-xs text-bw-muted uppercase tracking-widest mt-1">Delivery</div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              viewport={{ once: true }}
              className="group bg-bw-bg border border-bw-border rounded-2xl p-6 hover:border-white/20 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-bw-border flex items-center justify-center">
                  <span className="font-mono text-xs text-white">{r.number}</span>
                </div>
                <span className="font-display text-5xl opacity-5 text-white">{r.number}</span>
              </div>
              <h3 className="font-body font-bold text-white text-lg mb-2">{r.title}</h3>
              <p className="font-body text-bw-muted text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyUs;
