import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const models = [
  { id: 1,  name: 'NXT',     tagline: 'Urban Starter',       range: '80 KM',  speed: '45 KMPH', charge: '4H',   price: '79,999',   category: 'entry'    },
  { id: 2,  name: 'NXT+',    tagline: 'Upgraded Commuter',   range: '100 KM', speed: '55 KMPH', charge: '3.5H', price: '94,999',   category: 'entry'    },
  { id: 3,  name: 'REO',     tagline: 'Road Explorer',       range: '110 KM', speed: '60 KMPH', charge: '3H',   price: '1,09,999', category: 'sport'    },
  { id: 4,  name: 'ERA',     tagline: 'Era of Excellence',   range: '130 KM', speed: '65 KMPH', charge: '3H',   price: '1,24,999', category: 'premium'  },
  { id: 5,  name: 'ERA+',    tagline: 'Premium Performance', range: '140 KM', speed: '70 KMPH', charge: '2.5H', price: '1,39,999', category: 'premium'  },
  { id: 6,  name: 'NEO-X',   tagline: 'Neo Cross Sport',     range: '120 KM', speed: '75 KMPH', charge: '2.5H', price: '1,29,999', category: 'sport'    },
  { id: 7,  name: 'NEO MAX', tagline: 'Maximum Power',       range: '150 KM', speed: '80 KMPH', charge: '2H',   price: '1,59,999', category: 'flagship' },
  { id: 8,  name: 'MAGICA',  tagline: 'Smart Elegance',      range: '125 KM', speed: '65 KMPH', charge: '3H',   price: '1,19,999', category: 'premium'  },
  { id: 9,  name: 'CANVAS',  tagline: 'Your Canvas',         range: '115 KM', speed: '60 KMPH', charge: '3H',   price: '1,14,999', category: 'premium'  },
  { id: 10, name: 'E4-LITE', tagline: 'Light and Swift',     range: '90 KM',  speed: '50 KMPH', charge: '3.5H', price: '89,999',   category: 'entry'    },
  { id: 11, name: 'TANK',    tagline: 'Built Like a Tank',   range: '160 KM', speed: '85 KMPH', charge: '2H',   price: '1,89,999', category: 'flagship' },
];

const filters = [
  { label: 'All',      value: 'all'      },
  { label: 'Entry',    value: 'entry'    },
  { label: 'Sport',    value: 'sport'    },
  { label: 'Premium',  value: 'premium'  },
  { label: 'Flagship', value: 'flagship' },
];

const ScooterSVG = () => (
  <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <ellipse cx="140" cy="165" rx="120" ry="8" fill="rgba(255,255,255,0.05)" />
    <circle cx="75"  cy="145" r="28" stroke="white" strokeWidth="2"   fill="none" opacity="0.7"/>
    <circle cx="75"  cy="145" r="16" stroke="white" strokeWidth="1.5" fill="none" opacity="0.3"/>
    <circle cx="75"  cy="145" r="5"  fill="white"   opacity="0.5"/>
    <circle cx="210" cy="145" r="28" stroke="white" strokeWidth="2"   fill="none" opacity="0.7"/>
    <circle cx="210" cy="145" r="16" stroke="white" strokeWidth="1.5" fill="none" opacity="0.3"/>
    <circle cx="210" cy="145" r="5"  fill="white"   opacity="0.5"/>
    <path d="M75 145 L105 95 L165 85 L200 95 L210 145" stroke="rgba(255,255,255,0.35)" strokeWidth="2" fill="none"/>
    <path d="M105 95 Q140 55 170 65 Q200 72 205 95 L185 98 Q165 82 140 78 Q118 75 112 93Z"
          fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
    <path d="M112 93 Q140 82 170 85 Q182 87 185 93 Q175 100 160 100 Q140 100 112 98Z"
          fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
    <path d="M195 72 Q210 65 220 68 Q226 71 222 80" stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none"/>
    <circle cx="222" cy="80" r="4" fill="white" opacity="0.6"/>
    <ellipse cx="215" cy="92" rx="11" ry="7" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
    <ellipse cx="215" cy="92" rx="5"  ry="3.5" fill="rgba(255,255,255,0.5)"/>
    <rect x="120" y="103" width="50" height="14" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
    <rect x="123" y="106" width="33" height="8"  rx="2" fill="rgba(255,255,255,0.15)"/>
  </svg>
);

const ModelCard = ({ model, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className="card-hover group relative bg-bw-card border border-bw-border rounded-2xl overflow-hidden"
  >
    <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-bw-accent uppercase tracking-widest">
      {model.category}
    </div>

    <div className="relative h-44 p-4 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-glow-white" />
      <ScooterSVG />
    </div>

    <div className="p-5 border-t border-bw-border">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-display text-2xl tracking-widest text-white">{model.name}</h3>
          <p className="font-body text-xs text-bw-muted mt-0.5">{model.tagline}</p>
        </div>
        <div className="text-right">
          <div className="font-mono text-xs text-bw-muted">Starting</div>
          <div className="font-body font-bold text-white text-sm">Rs. {model.price}</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        {[
          { label: 'Range',  val: model.range  },
          { label: 'Speed',  val: model.speed  },
          { label: 'Charge', val: model.charge },
        ].map(s => (
          <div key={s.label} className="bg-bw-bg rounded-lg p-2 text-center">
            <div className="font-mono text-xs font-bold text-white">{s.val}</div>
            <div className="font-mono text-xs text-bw-muted mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      <a
        href="#contact"
        className="block w-full py-2.5 text-center font-body font-bold text-xs uppercase tracking-widest rounded-xl border border-bw-border text-bw-muted hover:border-white hover:text-white hover:bg-white/5 transition-all duration-300"
      >
        Book This Model
      </a>
    </div>
  </motion.div>
);

const Models = () => {
  const [active, setActive] = useState('all');
  const displayed = active === 'all' ? models : models.filter(m => m.category === active);

  return (
    <section id="models" className="py-24 bg-bw-bg relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="font-mono text-xs text-bw-muted uppercase tracking-widest">Our Lineup</span>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-3 mb-4">
            CHOOSE YOUR <span className="text-gradient">RIDE</span>
          </h2>
          <p className="font-body text-bw-muted max-w-xl mx-auto">
            Eleven precision-engineered electric vehicles. Each built for a different rider, a different road.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(f => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-5 py-2 rounded-full font-mono text-xs uppercase tracking-widest border transition-all duration-300 ${
                active === f.value
                  ? 'bg-white text-bw-bg border-white font-bold scale-105'
                  : 'border-bw-border text-bw-muted hover:border-white/40 hover:text-white'
              }`}
            >
              {f.label}
              <span className="ml-2 opacity-50">
                ({f.value === 'all' ? models.length : models.filter(m => m.category === f.value).length})
              </span>
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {displayed.map((model, i) => (
              <ModelCard key={model.id} model={model} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Models;
