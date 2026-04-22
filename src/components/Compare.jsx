import { useState } from 'react';
import { motion } from 'framer-motion';

const allModels = [
  { name: 'NXT',     range: 80,  speed: 45, charge: 4.0,  price: 79999  },
  { name: 'NXT+',    range: 100, speed: 55, charge: 3.5,  price: 94999  },
  { name: 'REO',     range: 110, speed: 60, charge: 3.0,  price: 109999 },
  { name: 'ERA',     range: 130, speed: 65, charge: 3.0,  price: 124999 },
  { name: 'ERA+',    range: 140, speed: 70, charge: 2.5,  price: 139999 },
  { name: 'NEO-X',   range: 120, speed: 75, charge: 2.5,  price: 129999 },
  { name: 'NEO MAX', range: 150, speed: 80, charge: 2.0,  price: 159999 },
  { name: 'MAGICA',  range: 125, speed: 65, charge: 3.0,  price: 119999 },
  { name: 'CANVAS',  range: 115, speed: 60, charge: 3.0,  price: 114999 },
  { name: 'E4-LITE', range: 90,  speed: 50, charge: 3.5,  price: 89999  },
  { name: 'TANK',    range: 160, speed: 85, charge: 2.0,  price: 189999 },
];

const specs = [
  { key: 'range',  label: 'Range',       unit: 'KM',   max: 160              },
  { key: 'speed',  label: 'Top Speed',   unit: 'KMPH', max: 85               },
  { key: 'charge', label: 'Charge Time', unit: 'hrs',  max: 4,  invert: true },
  { key: 'price',  label: 'Price',       unit: 'Rs.',  max: 189999, isPrice: true },
];

const Bar = ({ value, max, invert }) => {
  const pct = invert ? ((max - value) / max) * 100 : (value / max) * 100;
  return (
    <div className="flex-1 h-1.5 bg-bw-bg rounded-full overflow-hidden mt-2">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="h-full bg-white rounded-full"
      />
    </div>
  );
};

const Compare = () => {
  const [selected, setSelected] = useState(['NEO MAX', 'ERA+', 'TANK']);
  const chosen = allModels.filter(m => selected.includes(m.name));

  const toggle = name => {
    if (selected.includes(name)) {
      if (selected.length > 1) setSelected(selected.filter(n => n !== name));
    } else {
      if (selected.length < 3) setSelected([...selected, name]);
    }
  };

  return (
    <section className="py-24 bg-bw-card relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="font-mono text-xs text-bw-muted uppercase tracking-widest">Compare</span>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-3 mb-4">
            FIND YOUR <span className="text-gradient">MATCH</span>
          </h2>
          <p className="font-body text-bw-muted max-w-xl mx-auto">Select up to 3 models to compare specs side by side.</p>
        </motion.div>

        {/* Picker */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {allModels.map(m => (
            <button
              key={m.name}
              onClick={() => toggle(m.name)}
              className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-widest border transition-all duration-200 ${
                selected.includes(m.name)
                  ? 'bg-white text-bw-bg border-white font-bold scale-105'
                  : 'border-bw-border text-bw-muted hover:border-white/40 hover:text-white'
              }`}
            >
              {m.name}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="bg-bw-bg border border-bw-border rounded-3xl overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b border-bw-border">
                <th className="p-5 text-left font-mono text-xs text-bw-muted uppercase tracking-widest w-36">Spec</th>
                {chosen.map(m => (
                  <th key={m.name} className="p-5 text-center font-display text-2xl text-white tracking-widest">
                    {m.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {specs.map((spec, si) => (
                <tr key={spec.key} className={`border-b border-bw-border last:border-b-0 ${si % 2 === 0 ? '' : 'bg-bw-card/30'}`}>
                  <td className="p-5 font-body text-sm text-white">{spec.label}</td>
                  {chosen.map(m => (
                    <td key={m.name} className="p-5 text-center">
                      <div className="font-display text-xl text-white">
                        {spec.isPrice ? `Rs.${Math.round(m[spec.key]/1000)}K` : `${m[spec.key]} ${spec.unit}`}
                      </div>
                      <Bar value={m[spec.key]} max={spec.max} invert={spec.invert} />
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="p-5" />
                {chosen.map(m => (
                  <td key={m.name} className="p-5">
                    <a
                      href="#contact"
                      className="block w-full py-2.5 text-center font-body font-bold text-xs uppercase tracking-widest rounded-xl border border-bw-border text-bw-muted hover:border-white hover:text-white hover:bg-white/5 transition-all duration-300"
                    >
                      Book {m.name}
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Compare;
