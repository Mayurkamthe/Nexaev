import { motion } from 'framer-motion';

const emiPlans = [
  { months: 6, label: 'Short Term', emi: '18,333', interest: '0%', badge: 'Zero Interest' },
  { months: 12, label: 'Standard Plan', emi: '9,999', interest: '9.9%', badge: 'Most Flexible', highlighted: true },
  { months: 24, label: 'Comfort Plan', emi: '5,416', interest: '12.9%', badge: 'Most Popular' },
];

const benefits = [
  { icon: '◈', text: 'Instant approval in 60 seconds' },
  { icon: '◈', text: 'Minimal documentation required' },
  { icon: '◈', text: 'Foreclosure at zero charges' },
  { icon: '◈', text: 'Available at all Neexa dealerships' },
];

const Finance = () => (
  <section id="finance" className="py-24 bg-ev-dark relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ev-accent/30 to-transparent" />
    <div className="absolute inset-0 bg-glow-cyan opacity-20" />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="font-mono text-xs text-ev-accent uppercase tracking-widest">Easy Finance</span>
        <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-3 mb-4">
          OWN IT <span className="text-gradient">TODAY</span>
        </h2>
        <p className="font-body text-ev-muted max-w-xl mx-auto">
          Flexible EMI plans in partnership with Bajaj Finserv. Get on the road with minimal upfront investment.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* EMI Plans */}
        <div className="space-y-4">
          {emiPlans.map((plan, i) => (
            <motion.div
              key={plan.months}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-6 border transition-all duration-300 ${
                plan.highlighted
                  ? 'border-neon-green bg-neon-green/5 shadow-[0_0_30px_rgba(57,255,20,0.1)]'
                  : 'border-ev-border bg-ev-card hover:border-neon-green/30'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 right-6 px-4 py-1 bg-neon-green text-ev-dark text-xs font-mono font-bold uppercase tracking-widest rounded-full">
                  {plan.badge}
                </div>
              )}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-mono text-xs text-ev-muted uppercase tracking-widest mb-1">{plan.label}</div>
                  <div className="font-display text-4xl text-white">
                    {plan.months} <span className="text-xl text-ev-muted">months</span>
                  </div>
                  {!plan.highlighted && (
                    <div className="font-mono text-xs mt-1" style={{ color: plan.interest === '0%' ? '#39FF14' : '#8892A4' }}>
                      {plan.interest} interest
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <div className="font-mono text-xs text-ev-muted uppercase tracking-widest mb-1">Per Month</div>
                  <div className={`font-display text-3xl ${plan.highlighted ? 'text-neon-green glow-text' : 'text-white'}`}>
                    Rs. {plan.emi}
                  </div>
                  <div className="font-mono text-xs text-ev-muted mt-1">on Rs. 1,29,999 model</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partner + Benefits */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Partner card */}
          <div className="bg-white rounded-2xl p-8 flex items-center justify-between shadow-xl">
            <div>
              <div className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">Finance Partner</div>
              <div className="font-display text-3xl text-blue-700 tracking-wider">BAJAJ</div>
              <div className="font-display text-3xl text-blue-900 tracking-wider">FINSERV</div>
            </div>
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="font-display text-white text-2xl">B</span>
            </div>
          </div>

          {/* 24 month highlight */}
          <div className="bg-gradient-to-br from-ev-card to-ev-dark border border-ev-border rounded-2xl p-7">
            <div className="flex items-center gap-4 mb-5">
              <div className="font-display text-7xl text-neon-green leading-none">24</div>
              <div>
                <div className="font-body font-bold text-white text-xl">MONTH EMIs</div>
                <div className="font-mono text-sm text-ev-muted">Available Now</div>
              </div>
            </div>
            <div className="space-y-3">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-neon-green font-mono text-xs">{b.icon}</span>
                  <span className="font-body text-sm text-ev-muted">{b.text}</span>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="mt-6 block w-full py-3 text-center bg-neon-green text-ev-dark font-body font-bold text-sm uppercase tracking-widest rounded-xl hover:shadow-[0_0_25px_rgba(57,255,20,0.4)] transition-all duration-300"
            >
              Apply for Finance
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Finance;
