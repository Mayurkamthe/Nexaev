import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', model: '', city: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    if (form.name && form.phone) setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #080C10 0%, #091A10 100%)' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/30 to-transparent" />
      <div className="absolute inset-0 bg-glow-green opacity-20" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(57,255,20,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="font-mono text-xs text-neon-green uppercase tracking-widest">Get Started</span>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-8xl mt-3 mb-4">
            BOOK YOUR <span className="text-gradient">EV</span>
            <br />TODAY
          </h2>
          <p className="font-body text-ev-muted max-w-md mx-auto">
            Leave your details and our team will reach out within 24 hours to schedule your test ride.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-ev-card border border-ev-border rounded-3xl p-8 md:p-12 glow-border max-w-2xl mx-auto"
        >
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-neon-green/20 border border-neon-green flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display text-4xl text-neon-green mb-3">CONFIRMED</h3>
              <p className="font-body text-ev-muted">
                Thank you, <span className="text-white font-semibold">{form.name}</span>. Our team will contact
                you on <span className="text-white font-semibold">{form.phone}</span> within 24 hours.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', model: '', city: '' }); }}
                className="mt-6 px-6 py-2.5 border border-neon-green/50 text-neon-green font-body text-sm uppercase tracking-widest rounded-full hover:bg-neon-green/10 transition-all"
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-mono text-xs text-ev-muted uppercase tracking-widest mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full bg-ev-dark border border-ev-border rounded-xl px-4 py-3 font-body text-white placeholder-ev-muted/50 focus:outline-none focus:border-neon-green transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-ev-muted uppercase tracking-widest mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-ev-dark border border-ev-border rounded-xl px-4 py-3 font-body text-white placeholder-ev-muted/50 focus:outline-none focus:border-neon-green transition-colors text-sm"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-mono text-xs text-ev-muted uppercase tracking-widest mb-2">Preferred Model</label>
                  <select
                    name="model"
                    value={form.model}
                    onChange={handleChange}
                    className="w-full bg-ev-dark border border-ev-border rounded-xl px-4 py-3 font-body text-white focus:outline-none focus:border-neon-green transition-colors text-sm"
                  >
                    <option value="">Select a model</option>
                    {['NXT', 'NXT+', 'REO', 'ERA', 'ERA+', 'NEO-X', 'NEO MAX', 'MAGICA', 'CANVAS', 'E4-LITE', 'TANK'].map(m => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-mono text-xs text-ev-muted uppercase tracking-widest mb-2">Your City</label>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="City / District"
                    className="w-full bg-ev-dark border border-ev-border rounded-xl px-4 py-3 font-body text-white placeholder-ev-muted/50 focus:outline-none focus:border-neon-green transition-colors text-sm"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-neon-green text-ev-dark font-body font-bold uppercase tracking-widest text-sm rounded-xl hover:shadow-[0_0_40px_rgba(57,255,20,0.4)] hover:scale-[1.02] transition-all duration-300 mt-2"
              >
                Book My Test Ride
              </button>
              <p className="font-mono text-xs text-ev-muted text-center">
                By submitting, you agree to be contacted by our team. No spam, ever.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
