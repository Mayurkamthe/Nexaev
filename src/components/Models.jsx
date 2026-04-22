import { motion } from 'framer-motion';
import { useState } from 'react';

const models = [
  { id: 1, name: 'NXT', tagline: 'Urban Starter', range: '80 KM', speed: '45 KMPH', charge: '4H', price: '79,999', color: '#39FF14', badge: 'Entry' },
  { id: 2, name: 'NXT+', tagline: 'Upgraded Commuter', range: '100 KM', speed: '55 KMPH', charge: '3.5H', price: '94,999', color: '#00E5FF', badge: 'Popular' },
  { id: 3, name: 'REO', tagline: 'Road Explorer', range: '110 KM', speed: '60 KMPH', charge: '3H', price: '1,09,999', color: '#FF6B00', badge: 'Sporty' },
  { id: 4, name: 'ERA', tagline: 'Era of Excellence', range: '130 KM', speed: '65 KMPH', charge: '3H', price: '1,24,999', color: '#39FF14', badge: 'Trending' },
  { id: 5, name: 'ERA+', tagline: 'Premium Performance', range: '140 KM', speed: '70 KMPH', charge: '2.5H', price: '1,39,999', color: '#00E5FF', badge: 'Premium' },
  { id: 6, name: 'NEO-X', tagline: 'Neo Cross Sport', range: '120 KM', speed: '75 KMPH', charge: '2.5H', price: '1,29,999', color: '#FF6B00', badge: 'Sport' },
  { id: 7, name: 'NEO MAX', tagline: 'Maximum Power', range: '150 KM', speed: '80 KMPH', charge: '2H', price: '1,59,999', color: '#39FF14', badge: 'Flagship' },
  { id: 8, name: 'MAGICA', tagline: 'Smart Elegance', range: '125 KM', speed: '65 KMPH', charge: '3H', price: '1,19,999', color: '#00E5FF', badge: 'Smart' },
  { id: 9, name: 'CANVAS', tagline: 'Your Canvas', range: '115 KM', speed: '60 KMPH', charge: '3H', price: '1,14,999', color: '#FF6B00', badge: 'Style' },
  { id: 10, name: 'E4-LITE', tagline: 'Light and Swift', range: '90 KM', speed: '50 KMPH', charge: '3.5H', price: '89,999', color: '#39FF14', badge: 'Lite' },
  { id: 11, name: 'TANK', tagline: 'Built Like a Tank', range: '160 KM', speed: '85 KMPH', charge: '2H', price: '1,89,999', color: '#FF6B00', badge: 'Power' },
];

const ScooterSVG = ({ color }) => (
  <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <ellipse cx="140" cy="165" rx="120" ry="8" fill={`${color}15`} />
    <circle cx="75" cy="145" r="28" stroke={color} strokeWidth="2.5" fill="none" opacity="0.9"/>
    <circle cx="75" cy="145" r="16" stroke={color} strokeWidth="1.5" fill="none" opacity="0.5"/>
    <circle cx="75" cy="145" r="5" fill={color} opacity="0.7"/>
    <circle cx="210" cy="145" r="28" stroke={`${color}CC`} strokeWidth="2.5" fill="none" opacity="0.9"/>
    <circle cx="210" cy="145" r="16" stroke={`${color}CC`} strokeWidth="1.5" fill="none" opacity="0.5"/>
    <circle cx="210" cy="145" r="5" fill={color} opacity="0.7"/>
    <path d="M75 145 L105 95 L165 85 L200 95 L210 145" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" fill="none"/>
    <path d="M105 95 Q140 55 170 65 Q200 72 205 95 L185 98 Q165 82 140 78 Q118 75 112 93Z" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5"/>
    <path d="M112 93 Q140 82 170 85 Q182 87 185 93 Q175 100 160 100 Q140 100 112 98Z" fill={`${color}25`} stroke={color} strokeWidth="1"/>
    <path d="M195 72 Q210 65 220 68 Q226 71 222 80" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" fill="none"/>
    <circle cx="222" cy="80" r="4" fill="#FF6B00" opacity="0.9"/>
    <ellipse cx="215" cy="92" rx="11" ry="7" fill={`${color}30`} stroke={color} strokeWidth="1.5"/>
    <ellipse cx="215" cy="92" rx="5" ry="3.5" fill={`${color}90`}/>
    <rect x="120" y="103" width="50" height="14" rx="4" fill={`${color}20`} stroke={color} strokeWidth="1"/>
    <rect x="123" y="106" width="33" height="8" rx="2" fill={`${color}55`}/>
    <line x1="37" y1="145" x2="248" y2="145" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
  </svg>
);

const ModelCard = ({ model, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.07 }}
    viewport={{ once: true }}
    className="card-hover group relative bg-ev-card border border-ev-border rounded-2xl overflow-hidden cursor-pointer"
  >
    {/* Badge */}
    <div
      className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest"
      style={{ background: `${model.color}20`, color: model.color, border: `1px solid ${model.color}50` }}
    >
      {model.badge}
    </div>

    {/* Scooter visual */}
    <div className="relative h-44 p-4 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(ellipse at center, ${model.color}08 0%, transparent 70%)` }} />
      <ScooterSVG color={model.color} />
    </div>

    {/* Info */}
    <div className="p-5 border-t border-ev-border">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-display text-2xl tracking-widest" style={{ color: model.color }}>
            {model.name}
          </h3>
          <p className="font-body text-xs text-ev-muted mt-0.5">{model.tagline}</p>
        </div>
        <div className="text-right">
          <div className="font-mono text-xs text-ev-muted">Starting</div>
          <div className="font-body font-bold text-white text-sm">Rs. {model.price}</div>
        </div>
      </div>

      {/* Specs */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {[
          { icon: '⚡', label: 'Range', val: model.range },
          { icon: '◎', label: 'Speed', val: model.speed },
          { icon: '⏱', label: 'Charge', val: model.charge },
        ].map((s) => (
          <div key={s.label} className="bg-ev-dark rounded-lg p-2 text-center">
            <div className="font-mono text-xs font-bold text-white">{s.val}</div>
            <div className="font-mono text-xs text-ev-muted mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      <a
        href="#contact"
        className="block w-full py-2.5 text-center font-body font-bold text-xs uppercase tracking-widest rounded-xl border transition-all duration-300 group-hover:text-ev-dark"
        style={{
          borderColor: `${model.color}50`,
          color: model.color,
        }}
        onMouseEnter={e => { e.target.style.background = model.color; e.target.style.color = '#080C10'; }}
        onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = model.color; }}
      >
        Book This Model
      </a>
    </div>
  </motion.div>
);

const Models = () => {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Entry', 'Sport', 'Premium', 'Flagship'];

  const filtered = filter === 'All'
    ? models
    : models.filter(m => ['Entry', 'Lite'].includes(m.badge) && filter === 'Entry'
        ? true
        : ['Sport', 'Sporty'].includes(m.badge) && filter === 'Sport'
        ? true
        : ['Premium', 'Smart', 'Style', 'Popular'].includes(m.badge) && filter === 'Premium'
        ? true
        : ['Flagship', 'Power'].includes(m.badge) && filter === 'Flagship'
        ? true
        : false
    );

  return (
    <section id="models" className="py-24 bg-ev-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-neon-green uppercase tracking-widest">Our Lineup</span>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-3 mb-4">
            CHOOSE YOUR <span className="text-gradient">RIDE</span>
          </h2>
          <p className="font-body text-ev-muted max-w-xl mx-auto">
            Eleven precision-engineered electric vehicles. Each built for a different rider, a different road.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full font-mono text-xs uppercase tracking-widest border transition-all duration-300 ${
                filter === f
                  ? 'bg-neon-green text-ev-dark border-neon-green font-bold'
                  : 'border-ev-border text-ev-muted hover:border-neon-green/50 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {(filter === 'All' ? models : models).map((model, i) => (
            <ModelCard key={model.id} model={model} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Models;
