import { useState } from 'react';
import { motion } from 'framer-motion';

const dealers = [
  { city: 'Mumbai',    state: 'Maharashtra', address: 'Andheri West, Link Road',       phone: '+91 98200 11111', timing: 'Mon–Sat 9AM–7PM', models: 11 },
  { city: 'Pune',      state: 'Maharashtra', address: 'Baner Road, Near Aundh',        phone: '+91 98200 22222', timing: 'Mon–Sat 9AM–7PM', models: 11 },
  { city: 'Nashik',    state: 'Maharashtra', address: 'College Road, Nashik Rd',       phone: '+91 98200 33333', timing: 'Mon–Sat 10AM–6PM', models: 9  },
  { city: 'Bengaluru', state: 'Karnataka',   address: 'Indiranagar, 100 Feet Road',    phone: '+91 98200 44444', timing: 'Mon–Sat 9AM–7PM', models: 11 },
  { city: 'Hyderabad', state: 'Telangana',   address: 'Madhapur, Hi-Tech City Road',   phone: '+91 98200 55555', timing: 'Mon–Sat 9AM–7PM', models: 10 },
  { city: 'Chennai',   state: 'Tamil Nadu',  address: 'Anna Nagar, 2nd Avenue',        phone: '+91 98200 66666', timing: 'Mon–Sat 10AM–6PM', models: 9  },
  { city: 'Ahmedabad', state: 'Gujarat',     address: 'SG Highway, Prahlad Nagar',     phone: '+91 98200 77777', timing: 'Mon–Sat 9AM–7PM', models: 10 },
  { city: 'Jaipur',    state: 'Rajasthan',   address: 'Tonk Road, Near Durgapura',     phone: '+91 98200 88888', timing: 'Mon–Sun 9AM–6PM', models: 8  },
];

const states = ['All', ...new Set(dealers.map(d => d.state))];

const DealerCard = ({ dealer, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.07 }}
    viewport={{ once: true }}
    className="group bg-ev-card border border-ev-border rounded-2xl p-6 hover:border-neon-green/30 hover:-translate-y-1 transition-all duration-300"
  >
    <div className="flex items-start justify-between mb-4">
      <div>
        <h3 className="font-display text-2xl text-white tracking-widest">{dealer.city}</h3>
        <p className="font-mono text-xs text-ev-muted mt-0.5">{dealer.state}</p>
      </div>
      <div className="w-10 h-10 rounded-xl bg-neon-green/10 border border-neon-green/20 flex items-center justify-center">
        <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-neon-green" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.686 2 6 4.686 6 8c0 4.5 6 10 6 10s6-5.5 6-10c0-3.314-2.686-6-6-6z"/>
          <circle cx="12" cy="8" r="2" strokeWidth="1.5"/>
        </svg>
      </div>
    </div>

    <div className="space-y-2.5 mb-5">
      <div className="flex items-start gap-2.5">
        <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 mt-0.5 text-ev-muted flex-shrink-0" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 2h12v10H2z M5 12v2 M11 12v2"/>
        </svg>
        <span className="font-body text-sm text-ev-muted">{dealer.address}</span>
      </div>
      <div className="flex items-center gap-2.5">
        <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-ev-muted flex-shrink-0" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 3.5A1.5 1.5 0 013.5 2h.878c.414 0 .75.336.75.75v2.828a.75.75 0 01-.219.53l-1.4 1.4a8.002 8.002 0 004.483 4.483l1.4-1.4a.75.75 0 01.53-.22h2.829a.75.75 0 01.75.75V12.5A1.5 1.5 0 0112.5 14 10.5 10.5 0 012 3.5z"/>
        </svg>
        <a href={`tel:${dealer.phone}`} className="font-body text-sm text-ev-muted hover:text-neon-green transition-colors">{dealer.phone}</a>
      </div>
      <div className="flex items-center gap-2.5">
        <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-ev-muted flex-shrink-0" stroke="currentColor" strokeWidth="1.5">
          <circle cx="8" cy="8" r="6"/><path strokeLinecap="round" d="M8 5v3l2 2"/>
        </svg>
        <span className="font-body text-sm text-ev-muted">{dealer.timing}</span>
      </div>
    </div>

    <div className="flex items-center justify-between pt-4 border-t border-ev-border">
      <div>
        <span className="font-mono text-xs text-ev-muted">Models Available: </span>
        <span className="font-mono text-xs text-neon-green font-bold">{dealer.models}/11</span>
      </div>
      <a
        href={`https://maps.google.com/?q=Neexa+EV+${dealer.city}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-1.5 rounded-full border border-neon-green/30 text-neon-green font-mono text-xs uppercase tracking-widest hover:bg-neon-green hover:text-ev-dark transition-all duration-300"
      >
        Get Directions
      </a>
    </div>
  </motion.div>
);

const Dealers = () => {
  const [activeState, setActiveState] = useState('All');
  const filtered = activeState === 'All' ? dealers : dealers.filter(d => d.state === activeState);

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #091218 0%, #080C10 100%)' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ev-accent/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-mono text-xs text-neon-green uppercase tracking-widest">Dealership Network</span>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-3 mb-4">
            FIND A <span className="text-gradient">DEALER</span>
          </h2>
          <p className="font-body text-ev-muted max-w-xl mx-auto">
            200+ service centers across India. A Neexa EV expert is always nearby.
          </p>
        </motion.div>

        {/* State filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {states.map(s => (
            <button
              key={s}
              onClick={() => setActiveState(s)}
              className={`px-5 py-2 rounded-full font-mono text-xs uppercase tracking-widest border transition-all duration-200 ${
                activeState === s
                  ? 'bg-neon-green text-ev-dark border-neon-green font-bold'
                  : 'border-ev-border text-ev-muted hover:border-neon-green/40 hover:text-white'
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Dealer cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((dealer, i) => (
            <DealerCard key={dealer.city} dealer={dealer} index={i} />
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-3xl border border-neon-green/20 bg-neon-green/5 p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-display text-3xl text-white mb-1">No dealer nearby?</h3>
            <p className="font-body text-ev-muted text-sm">We deliver to your doorstep across India. Free delivery on all models.</p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 px-8 py-3 bg-neon-green text-ev-dark font-body font-bold text-sm uppercase tracking-widest rounded-full hover:shadow-[0_0_30px_rgba(57,255,20,0.4)] hover:scale-105 transition-all duration-300"
          >
            Request Home Delivery
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Dealers;
