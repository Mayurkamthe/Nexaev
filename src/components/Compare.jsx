import { useState } from 'react';
import { motion } from 'framer-motion';

const allModels = [
  { name: 'NXT',     range: 80,  speed: 45, charge: 4.0,  price: 79999,  color: '#39FF14' },
  { name: 'NXT+',    range: 100, speed: 55, charge: 3.5,  price: 94999,  color: '#39FF14' },
  { name: 'REO',     range: 110, speed: 60, charge: 3.0,  price: 109999, color: '#FF6B00' },
  { name: 'ERA',     range: 130, speed: 65, charge: 3.0,  price: 124999, color: '#39FF14' },
  { name: 'ERA+',    range: 140, speed: 70, charge: 2.5,  price: 139999, color: '#00E5FF' },
  { name: 'NEO-X',   range: 120, speed: 75, charge: 2.5,  price: 129999, color: '#FF6B00' },
  { name: 'NEO MAX', range: 150, speed: 80, charge: 2.0,  price: 159999, color: '#39FF14' },
  { name: 'MAGICA',  range: 125, speed: 65, charge: 3.0,  price: 119999, color: '#00E5FF' },
  { name: 'CANVAS',  range: 115, speed: 60, charge: 3.0,  price: 114999, color: '#FF6B00' },
  { name: 'E4-LITE', range: 90,  speed: 50, charge: 3.5,  price: 89999,  color: '#39FF14' },
  { name: 'TANK',    range: 160, speed: 85, charge: 2.0,  price: 189999, color: '#FF6B00' },
];

const specs = [
  { key: 'range',  label: 'Range',       unit: 'KM',   max: 160 },
  { key: 'speed',  label: 'Top Speed',   unit: 'KMPH', max: 85  },
  { key: 'charge', label: 'Charge Time', unit: 'hrs',  max: 4, invert: true },
  { key: 'price',  label: 'Price',       unit: '₹',    max: 189999, isPrice: true },
];

const Bar = ({ value, max, color, invert }) => {
  const pct = invert
    ? ((max - value) / max) * 100
    : (value / max) * 100;
  return (
    <div className="flex-1 h-2 bg-ev-dark rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="h-full rounded-full"
        style={{ background: color }}
      />
    </div>
  );
};

const Compare = () => {
  const [selected, setSelected] = useState(['NEO MAX', 'ERA+', 'TANK']);

  const chosen = allModels.filter(m => selected.includes(m.name));

  const toggle = (name) => {
    if (selected.includes(name)) {
      if (selected.length > 1) setSelected(selected.filter(n => n !== name));
    } else {
      if (selected.length < 3) setSelected([...selected, name]);
    }
  };

  return (
    <section className="py-24 bg-ev-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-mono text-xs text-neon-green uppercase tracking-widest">Compare</span>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-3 mb-4">
            FIND YOUR <span className="text-gradient">MATCH</span>
          </h2>
          <p className="font-body text-ev-muted max-w-xl mx-auto">
            Select up to 3 models to compare specs side by side.
          </p>
        </motion.div>

        {/* Model picker */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {allModels.map(m => (
            <button
              key={m.name}
              onClick={() => toggle(m.name)}
              className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-widest border transition-all duration-200 ${
                selected.includes(m.name)
                  ? 'text-ev-dark font-bold scale-105'
                  : 'border-ev-border text-ev-muted hover:border-neon-green/40 hover:text-white'
              }`}
              style={selected.includes(m.name) ? { background: m.color, borderColor: m.color } : {}}
            >
              {m.name}
            </button>
          ))}
        </div>

        {/* Comparison grid */}
        <motion.div
          layout
          className="bg-ev-card border border-ev-border rounded-3xl overflow-hidden"
        >
          {/* Column headers */}
          <div
            className="grid border-b border-ev-border"
            style={{ gridTemplateColumns: `200px repeat(${chosen.length}, 1fr)` }}
          >
            <div className="p-5 border-r border-ev-border">
              <span className="font-mono text-xs text-ev-muted uppercase tracking-widest">Spec</span>
            </div>
            {chosen.map(m => (
              <div key={m.name} className="p-5 text-center border-r border-ev-border last:border-r-0">
                <div className="font-display text-2xl tracking-widest" style={{ color: m.color }}>
                  {m.name}
                </div>
              </div>
            ))}
          </div>

          {/* Spec rows */}
          {specs.map((spec, si) => (
            <div
              key={spec.key}
              className={`grid border-b border-ev-border last:border-b-0 ${si % 2 === 0 ? '' : 'bg-ev-dark/40'}`}
              style={{ gridTemplateColumns: `200px repeat(${chosen.length}, 1fr)` }}
            >
              <div className="p-5 border-r border-ev-border flex items-center">
                <span className="font-body text-sm font-medium text-white">{spec.label}</span>
              </div>
              {chosen.map(m => (
                <div key={m.name} className="p-5 border-r border-ev-border last:border-r-0">
                  <div className="font-display text-xl mb-2" style={{ color: m.color }}>
                    {spec.isPrice
                      ? `₹${(m[spec.key] / 1000).toFixed(0)}K`
                      : `${m[spec.key]} ${spec.unit}`}
                  </div>
                  <Bar
                    value={m[spec.key]}
                    max={spec.max}
                    color={m.color}
                    invert={spec.invert}
                  />
                </div>
              ))}
            </div>
          ))}

          {/* CTA row */}
          <div
            className="grid"
            style={{ gridTemplateColumns: `200px repeat(${chosen.length}, 1fr)` }}
          >
            <div className="p-5 border-r border-ev-border" />
            {chosen.map(m => (
              <div key={m.name} className="p-5 border-r border-ev-border last:border-r-0">
                <a
                  href="#contact"
                  className="block w-full py-2.5 text-center font-body font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 hover:scale-105"
                  style={{ background: `${m.color}20`, color: m.color, border: `1px solid ${m.color}40` }}
                  onMouseEnter={e => { e.target.style.background = m.color; e.target.style.color = '#080C10'; }}
                  onMouseLeave={e => { e.target.style.background = `${m.color}20`; e.target.style.color = m.color; }}
                >
                  Book {m.name}
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Compare;
