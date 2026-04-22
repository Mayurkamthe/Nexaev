import { motion } from 'framer-motion';

const emiPlans = [
  { months: 6,  label: 'Short Term',   emi: '18,333', interest: '0%',   badge: 'Zero Interest',  highlight: false },
  { months: 12, label: 'Standard Plan',emi: '9,999',  interest: '9.9%', badge: 'Most Flexible',  highlight: false },
  { months: 24, label: 'Comfort Plan', emi: '5,416',  interest: '12.9%',badge: 'Most Popular',   highlight: true  },
];

const benefits = [
  'Instant approval in 60 seconds',
  'Minimal documentation required',
  'Foreclosure at zero charges',
  'Available at all Neexa dealerships',
];

const Finance = () => (
  <section id="finance" className="py-24 bg-bw-bg relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="font-mono text-xs text-bw-muted uppercase tracking-widest">Easy Finance</span>
        <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-3 mb-4">
          OWN IT <span className="text-gradient">TODAY</span>
        </h2>
        <p className="font-body text-bw-muted max-w-xl mx-auto">
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
                plan.highlight
                  ? 'border-white bg-white/5 shadow-[0_0_30px_rgba(255,255,255,0.05)]'
                  : 'border-bw-border bg-bw-card hover:border-white/20'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 right-6 px-4 py-1 bg-white text-bw-bg text-xs font-mono font-bold uppercase tracking-widest rounded-full">
                  {plan.badge}
                </div>
              )}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-mono text-xs text-bw-muted uppercase tracking-widest mb-1">{plan.label}</div>
                  <div className="font-display text-4xl text-white">
                    {plan.months} <span className="text-xl text-bw-muted">months</span>
                  </div>
                  {!plan.highlight && (
                    <div className="font-mono text-xs text-bw-muted mt-1">{plan.interest} interest</div>
                  )}
                </div>
                <div className="text-right">
                  <div className="font-mono text-xs text-bw-muted uppercase tracking-widest mb-1">Per Month</div>
                  <div className={`font-display text-3xl ${plan.highlight ? 'text-white glow-text' : 'text-white'}`}>
                    Rs. {plan.emi}
                  </div>
                  <div className="font-mono text-xs text-bw-muted mt-1">on Rs. 1,29,999 model</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partner + Benefits */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
          {/* Bajaj Finserv card */}
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

          {/* 24M highlight */}
          <div className="bg-bw-card border border-bw-border rounded-2xl p-7">
            <div className="flex items-center gap-4 mb-5">
              <div className="font-display text-7xl text-white leading-none">24</div>
              <div>
                <div className="font-body font-bold text-white text-xl">MONTH EMIs</div>
                <div className="font-mono text-xs text-bw-muted">Available Now</div>
              </div>
            </div>
            <div className="space-y-3">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-white font-mono text-xs">◈</span>
                  <span className="font-body text-sm text-bw-muted">{b}</span>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="mt-6 block w-full py-3 text-center bg-white text-bw-bg font-body font-bold text-sm uppercase tracking-widest rounded-xl hover:bg-bw-offwhite hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] transition-all duration-300"
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
